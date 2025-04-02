/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "THSDysnNdTofUVaWj937C2ePvgXTMKyHXSJgcopN3jPvK6SMrVLHM2Y4SLRTWK2fM7n7F3kiTN95UaG5SmuUyz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VYY162h5Q7mrpofTit2Tyyxgmrj3ttyGAwEQFm3kcP3dWHUMayFcNDJo5hzAv2RA9GzCczFa6Cxj36W9wb9TZWy",
  "key1": "4vCZw1XUKthuL5vAaPwzJAZLMf16wVmr1M34dXeLHUqL8x9DjkbauWENLkFfSaJQ4u2JfUoy2ydfmmTcE237bpGa",
  "key2": "2zTY9nHYXwJmUrnDSo1KoMYH7FjjJ8QSCtens7WjmmxgfWsfmirTDgawFnzZ7t5d8MdG1ibrMnSeM6b5EpWcbFeV",
  "key3": "2QDmw2fsrmSJRgC6D8Adg3FRG1BXH71WuN1ndyZdAHjGebEHyAXAydNCAbd5f15Vxg7Peg4pRhy8nYTomtYMrr5Z",
  "key4": "423EDkUDAiGp9dNPSrtnCzpevQjvZRp8GtiZe24qankAchNrbLrWZosWooCjJ49HR4rC6kvCtY3RvUdpVpcPghPe",
  "key5": "4drsvPcvVN5ubzLchgAeDWQ59tsnh57LNBJsHbDwzYPfHx9HT3SNEuXKuvVEh6wAzvxPjarbK7XMn3Qef2gZ5XuF",
  "key6": "5BsEUWSPM9GAkLQN6C9Sj8sU688cVfVTELM28SqYJu1CWe4XCsvuphbVHPoq1a93w7zXc4whF3RRU1K46gYtkcdz",
  "key7": "5UdFHsZfHktrQUcByXXb65WVSKWppsrKQah1keNBzJMni3GFgZ6caCPpAxjwgyNPMdeEJKTTcmankd448pqjomGc",
  "key8": "2XqoDGaNaygWoECUSB9aAvLaWygrfUxzP3gWiPRzxgSWRSzqSZGjrGHmcu4Ko7uyHrXdYCpXciRxQAqyiKXPUGLc",
  "key9": "5Ea9xNpKtUvHAc7zZXzCK5CTHPw8QBEPcrPUNpBaypPx6qVGKj7obeb23TSCgtqB4JM7RJE3PZvUMUNCJ8oQCdhQ",
  "key10": "XateTnKZyVhQ8jHm6V8GHhgpPSk9FFtKeWkBrm3CfppuMcnwzKNurFdBjjZuSpV8w7e4cMs2bJTLSnTVBeK8RCB",
  "key11": "kgxJ9wcHEc557k47nQDGA3teK3muBWLbRbWmdXtpMQFdMiWjoM61qJP4N2BSC3HPaT5P2E6cnhEKPUymJa6L1ZD",
  "key12": "epP1qrvN2ktpL7J3mR9ecWQ1uWnLjTzVhweJ8NttHDgknERQC3rhHg6E6Y9Bri1FKihPiFmzBp7ea6LoA1VbnrE",
  "key13": "5qzxRRf2LjuHLWDYr5N5mfUm4STdVj3EuPKmGAyR67AZDuhrpRv6RsTftRPoh7uWutt6UpsjgK72j3ywVseX1v2C",
  "key14": "32rWfofL3cgTYNV9Dr5dgbH46CAKF2GdqgbEyWMc7GHvhb6ZDEa55sVRhz1WGVYfk4fnEXPSzbMxCUiiCqGUoVGX",
  "key15": "2zUpyP5wEK9ygnvrVug2zTTqhpbek6wmupL6uMFMQjrV5Ub9c7a8HVGPdMCzPfJzCzGVXuqayZaQgP4kNb2bwgyP",
  "key16": "2JfP3a7sbb71Mx6w9wr8zxRAfWobiy7vYYJwXKZifRTN4HowDr1SUGFbHK6VAuS3WDzJbrJPdz1G6zN7JVotUE8A",
  "key17": "5M3UbMv5a8qoTbStgmXbz3W2u2jBbPorDV9jmqH6j6psvEvYbk1pGToMaFVHdqdT2mZQpt6CGGk7jJe3VZ5GoBgm",
  "key18": "4HxjQ9GbhQNjQ6nKYVntf1xFZjnctqof5bEhzWyStqPdRhe89qmBQ9C6NiCyiLs9zQdH7DyKKVzKvmXwFbrDRN2u",
  "key19": "2pbceq2n69ys7Mxhv1R5q8zEp8Zaf3K28qURSKJsY1RvQtkWWp2vsQJqYg4dG2iwSoQjB9RZbG22LNg6A7nFYhS3",
  "key20": "5VyPEf8YMVJRjRwaRHZtBiH5NVmNfFjzmvJF4dR3Gmm1wQAAovCJ3kBxsNTva3dZsBByoGLKWYft3VRe8pXiV93H",
  "key21": "4HRCsQaAaDjDg3yN9NDvFBEAgkePxzUoXmbQuZYHS5ZT5fEEcWS2qEgeXGE6iFdQ1ddRGc6RU6NV22xT9Ptx1yup",
  "key22": "21BDw4JJ4iaZcVK8493o1rNoMaaUnMj3mFEcfig1q7FpBwERRu9rcumAvzZDCpzjNm8LLR18DKH2ochtqHxwWqoH",
  "key23": "Xhs4zQejomop9A7GG1hEHMqhYXdo1HDFCwfvciqCWaZVnSLDVHh6T6pgR8kLCBZXYAxSDwNS6cwwzRg5nJsqYoH",
  "key24": "42Cb2tPA9nwrTMa25LwQY9q6oiJ83p6RAaJqrAUkzdLuNxBaVswQfpPTZZPBUNLP3SJuVL5ddBixoJf8TtKAVQ3y",
  "key25": "iyMsvHhwJ3M75umTk5QyHhVKvowKmXXCBh9zCqNowUPanoKckEsBaHARonpEJf7PdTRV3kckETgXDFdmc71bsLF",
  "key26": "4V3EhutEDhRF9Cz1q8nnPD7wtjXqnSJMFjJ1Xp9Byk9YPbsr9eAJ4GwAqzzwZ1ubqdeMBES3j1HvMF5VqigtQSSt",
  "key27": "Ae3tWU4WtFi5EFYTXQKVN1w5Hs7t8wD1LofsDpCS7jLdubRM6Jvwe8whJfjUEFHpUoXCW1CbWTdijMU8D6PKoBJ",
  "key28": "2iFzzTDzoEZDe4VWcRyL8bE5JbaqF5JEUz57inAiH2TatfSczYLS7kVKjFfBAv7AAmDBixJKFPyQREnnEjCbqS5F",
  "key29": "2gGYNtfJQP2dKNfccFLquqczEtMJPLEnBweicF5v2bmHSVHn62HcrMbhgv9HTkxBAVxXicSb3NyTKgAVP2T5jGAW",
  "key30": "49uChADgVQoJn5G6gkyXpYhqNi8FcqPgfk3iLfDj3Jq7VWSSZSDA3VcP67ybM7dnStJt5tzkKVuhszQPLntUKdW8",
  "key31": "J2XXLBcmjtp8vK4rtHiFC7KMN2wpQLm1nQfey6bmXd8JpwN3RJzYX9HkFGk91DpSy9uMYQpoAKn8DvPouRUDSWV",
  "key32": "61x6ymE3Zx8YjCx2REkShCiFMYb8c7H8m2KPkHw4SJaN8xRBpzXrvvqPUZKZGeQiMnha29C93LaJsLP1DfJFQFwu",
  "key33": "4LHcKg8scSLiELMRvFHWFzCLJQTfqjciXc2tMsovDSJfhgXznABVF468gRH7RJoKSzgJuCUFA7wmWNNL1AfcrHgj",
  "key34": "47Jj833YAN6L6m4PDuZbnnAihie1fxoMZrT4ic2vWgCqCP7sb6qWqtKoDNd9BNkuYrk63NwmGHpGrX36mA6dYWS2",
  "key35": "3gSzobs4nmk64A9LmKVKJUrR87Ggk6bWsEPHM5fUBXikwc1Y5wTh23AwW7kWTRVgyi9vSyFs51iA49FUJPGjV1Km"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
