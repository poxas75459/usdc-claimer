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
    "4ACrtf3D8V5dfJVni69y4tfc4e4w7W6zER55gXeVoX3hhGMyKnLzaNTjJCZjCFnoV1yTo8T5eN448LqNgPDadcu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ei79mGyQHxoBRxh1C4ubdxJzeZRriLPcYLvPVevcX6fca8gGD385KTuJF3fkje2qRyBRL1NsR81pGa9Sosoqv29",
  "key1": "4ExuZHDTkwKEK4gc549ykftTedCGS97im7EuVZowgWwyKSY8fqu14SrG2wjntn8XALGL57waU2MioPgXTvqFyvM6",
  "key2": "3qbCACebiWBaoaChaXc3ceSw8wwMjEsBbxJvWvqzuuzm7CMx9BhFfgoHEkQZkN2m3yvJ6J8dYmax9LGQPUdz3xgz",
  "key3": "3ZCvFpXqUXi4Y4Q79FFFZMuX2Kro7djM6Jv4nPqMsRqqjS7wF2dURydnPJn146QVRa8KkztFnjdQQxF1BZi8Phj1",
  "key4": "3V86AW8Lc2Z4SkWaQSWGUyDoqNpqcv7kLBaC2vxgwNXVJQW1Jcrm4voZCidsCSHuL5uTSKTNKjezz4gqVGQ22K1i",
  "key5": "5Enwgb9GUSRwesvt8DsTdNxT3kp2D29jMMDz59nEQuWY5e5dzQf7bQZyeVeKHM1nEe4fZfptFYPq7XuLty6NigFL",
  "key6": "3QYZayydnbyKBzGhn7TwYAxEQyfYJjkh8LedJx6atp5pAbzDakofShqFujLFWdZ5FGzCo58p2jpiM9yhE4NK5jHu",
  "key7": "2BeQU4SpEM56t2f6EomFAFxNXXiVqy256VZDfmvFakUAs2BKbk5oG15n9jUfCenkZSTBtcFqQWa9CHn84hQzbnkX",
  "key8": "4vmhM8u1oELD6Ub8poAWjpgU11zLoiXBty5mCzbSBdFHZkMtNCThAbCt1eMytYNmqXiV4FH55HocoCP8MxNWg2zG",
  "key9": "4NyJ7behhGE4Q5bmqtrhEHY2AiUPBz391FRWs3XzLNLriMCk7Y3L3BCBZ2R7hS1o9JRN3X7zg2md23vFx6AfTfvZ",
  "key10": "2hbWZyULXwo1WmmNQua5AUUSHvhXXBWhRG8h8j93Xua18U6wksr3U1WLHy7W7zYaMiZpe1cWnDKiXBzqCCzq3nyC",
  "key11": "22ikZesfYsQCa8qpk8imJQc3DgL1aBNgM6Zictt5MrjMN5m2vXG3KCFeywgfnKCgz6ijdpVPiXGGJoS6UtjvYwqT",
  "key12": "2URtdixtMZgBZkNuPxkecga88Fvb4VWjjtvzp848NtGpdVWMGtDdo6UbP7TCHjoMZ7TGDFksC5MQLrM5Nw3C4oVb",
  "key13": "wtkpzdTjN3coY66tj9Tg8wQ3GpcGW6TvhQwvkQBRcg8bbQzCrXMbpVBC8uWqNj4ao8pweLsNzrhZmHUy3ba5PvU",
  "key14": "2QpWZyKPWXQvCGQD7eF8g6jpoyayrdjM1DaAVbn7bqFx1xDpDKZ5pDJbfKUUaTVvoZ8NSmqQc8wrtPtJmFfRj3fs",
  "key15": "2eLTPG9aAZHrpGcXBPYhB4eCDi7bgAuxA7tQRXaFesBneCuRGxs83bGTXyocZMXpcLoT9AwVEnvX7oRazuqiz98G",
  "key16": "SyEGPQJpba2dnGxWrjWFVemApcvKtDYLgExQtrmqZoKJUg7BrnTTaHia176MbJQxin8LpynPve7EnBqker6npCC",
  "key17": "32uZw22LY9AChCHX877hMDQiDL7Lbsnr3mXJ5z1iVjmtJozk4t8n8HoNuBXySpG1VPFT5REfQbjZiihh8etvcfYR",
  "key18": "jyh2kkmrk8K1HRvNfhJo3uENdJxHNQe7rvfAPgXyVY62jvgnjqtQ1E9cRpAZNDdBBfK1BxA814yBPAMX3hZXFZJ",
  "key19": "5rK8bjedHmfov8EhYcNLzoxTRmjkQRi4deBDgt73adVVq4Et7gTzNhnULkNrqt3dAgtB6Z7HcUfS6Gv7e4nTNvss",
  "key20": "5voEUz9atYYztrb8xku2eQGYv7yD3xAM25pKBxgypapapVWTdPRRDf88TcfQ4rgmTvuXHbCjPtV4r73rYqp6uJfM",
  "key21": "3vEZk6tSYVzy9bS544V6p4TdrhuPdRP2REccSaFckraaV2QUfLGNwkU9KZBf2z66Uo2XoxX1RQM6a5BNMG4DwFhT",
  "key22": "3z1Q2xCQzM3wr9Mg5x7q8sD4jFGucFKFyXJbg4g4MUJ6pB23cEvKwTik8h3XmQSfLTZio9NCBkQsa1XnYhjQdE2P",
  "key23": "59bFKDbHSq9H2ZN78LvPnPz3jsU4nxzMo1mQmirjvTs77Hd2J24GPh5QmdmRE8PuJkUMLGnXc51PGUsG5S6VFMZE",
  "key24": "jpUbgahqagokx5mTkqGmNUJujHJXtSWgXrCeQ95jtoea6RkXwnMaNJ8Moeg5qPb4g1qtsriaHdNb96LYBMteTxp",
  "key25": "WiUQ1PqiWSVafTnhKYrFyzY1NZDxMrifPaB2UzkYCUCKE7GDNvV83juEc2eK6H6C2AunmCfvLMkJVrADnCejiC6",
  "key26": "5nC1Wnnzaj7oskuS7JGbPHxHi5KZb4FNxsuJbPM9sFMAqN3gQMqPrxAuDVYEC4emqK94x1Y9wRLkFgdJFJyASRg1",
  "key27": "3aTpuxSvPtUvLQ73NgdLeAsEDkTajEh4uhTJwQdNDPUYMyRdHmRvUyURZMgCKKYJSdkFRtexvK7hdhW8X5rMKtDr",
  "key28": "5Frr9dxCHFZarvCGFWUKA2n1npb43Dq4LcNSvbh4xDCuzqGSC6EvEJELofNdXqi8URuKtewCdGFfyUWwgYZXtnF9",
  "key29": "guZTWY9A6iFcxV5AYb9LgxMMUXGjQsaN7vQ34WSwsViFUKpsVhHc5JZxycYqYkA2TzBpwU4yLCJd8onkjx9qeyY",
  "key30": "3mDxpTr5GwwkngAwX7Sns7atU6dTLFQspbtegPDVKxMuvfZ9ZKmU528YxNoHxKi2RGDRYGrponXWixauhTreVuws",
  "key31": "4Zdv8VwkqR86ZYLAY6vjWVTANfv6aC39M6PYNsYF88NnwDewrZ7LTM9LCri56FzdsxcqiTGKMKFKFFqLq4bQ2QUy",
  "key32": "2Qe6YtsSWLSG7jV4H8Qa943FdHkgGxoMq4cq5xgfa86RNMFygKHwp3JowiMum1ociQ6Q8Afeqw911wDRkhKma6L5",
  "key33": "4kCAd9kSSGpnYqWUm34U7FMS3rBuV7Bkcjg9ZDPwDPQXvtps3tq9cAM7uYcHsQ2xBR3aqgzVfuLdGrg5hKXTeain",
  "key34": "4G1eprkctwgz3eyJZ5fYbg5HzjA4CYfcbVsnjsgZwZCvyyunxRj2qzVFyKLeBhKUpT5cY1Xpaud5cYjLRZSMkBT6",
  "key35": "5hLoRmrsJu7n64dn4fMKFe6PR8nepD4W6XUFGXvLZUFJyzEE11PRjqzbeULzCR8YTJpVQxh33R3jsNsvtQ5mcGpD"
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
