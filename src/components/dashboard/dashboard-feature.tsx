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
    "5g1hoToC3HouWvSqdVywgBbjriue9nQWPPJKswZKdzDbLdFMKioxNR6NPmWAy9KaNbe2FFfGBsckks54PHzsys78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jm5JjiU8VNHg8WZw9bLeXrZZVzHHEwbTwTbbecXX4cxNkk7PyKcbeYzxu3ggpM76i1KxGdxHhKM2fCUzF3vCR2i",
  "key1": "2L3CzcfZBf5jyknFPtj6zR6A1b3ocX4Zijk9ZQXJUTggWer5paZjgYQUzj64Aj8mw7hfkprhxU2cxRstaXnJsgJ5",
  "key2": "2VCgYzqoojNKEduskqhaaPs97kpKZtwVBQGT3FW7AJFJABegGKB1HAProkJED2snSQeZuvxeyUhx9sDjZL12SAR4",
  "key3": "1QJ2h3Qy9H8tse3RGP6DWYzikrzdvR77BbgeFaiXU43UqT6x9DrrrLwcNinJ1HKCFP7rtvyYR6txUQ1xsJoe1pi",
  "key4": "5EnviuT5ooLcRPdEYJ2vnCpz7RbEqt3CtoZr3LTzGcw56m9GmosAMpx96iETeoWD7Su86w1tGH96EaFVRSRLrPv2",
  "key5": "4yHU4x538DWbJ39D8ZmYtmFcMXjRwnjjoZW5ei7WsbBshxz3rm5deFGGmG8KxN3TVcFYps7L9tTEshCyxqTz2Hon",
  "key6": "MkPfhzETETAQSsBMhFtd5svQiER4ReubNWTB1H2Zr3wxwBt77nRgwTMVVAxoD4tfZJscR9xU4amcJ8Q8EkMDvUE",
  "key7": "3FEY2sxbgeVin7wdAAm1GDiJxv58G3Vspc9ebYQyByvErSvcbM9uWMPhRvgfkQCBHE9Drtzu2fXM4b7r3S4neTYt",
  "key8": "3oXMDvA6vJpX43sdYBx3tgfL2aT1dHcQrQt5jDPa5PTc693pjq847Gm1aqFAp2yXfFfRPRiPgKuskwsX2pvnt9V4",
  "key9": "hVoeL1V8zPcj2JpoA9PiCoffNMDdc3wc5sqZzufGj39D7BXGbALMzbNPukNG8Q9boraFXgzqo2CiTHArjL1Hh75",
  "key10": "3sjb7kUpiSnr7N1jHbpD7CkkR5DgbZhYHTeHPMDyCtJkJhnmCQtJSwhC1YEjtCGusnUXaDrzW7zFx7wSd3jGButY",
  "key11": "25r6KjBDL4K1myfTWLt8vFZ5W1Gx93FRiQP3kLT1WiXovyUbN7erPU7WxHYv9Z8riBY1PZ7ou12b4uKN1PhpPg17",
  "key12": "2VFF8C2d4AkV4diZ5LUjLDoaGe9YKqYCii3t1upra1AccuznmA41FnM7QEC9eB9XMqqozkp9JKRR6qMxPhQ7kmkK",
  "key13": "RjMhd4Qxu2y3eXV4QFhLo6vkaSxwD7hUZzoXrFLNkz5ZMAVSXVfMtAB7dTmvHEAXzerXHXWW4zpB2vc2diSAA6i",
  "key14": "3KGYUptXFx49qcNXaPnPZxJbwU8anovCE26E5NXq26Wq3L879UDnSHxfoAYcABgzwYuqsXKLpF9w1yeYqAvtJPsy",
  "key15": "2KsTM5GhkTBun3W6FLBaDenxiWU83enoHuWvDmnXXPHULvCk4fqaekxx4vfq2W9oajMT8CbQDiXwGM1dktqnYKdg",
  "key16": "3gRoRMU9EqdczFxfja7HTC6fkbUwfsB6PJybZwMEYtjWpkfMw655jyAHDiiYEXiGLQ8qVWWHrSYtF9rr6hb9KNvj",
  "key17": "5PE7YLFxj5gTzSAkKmCYqMiraHPCdM1xvEKdcuG9xstb5FV1px1B4FNiruBRvss566tCjr7yz8sTnsYKpnkwaxPv",
  "key18": "3nXqfMVM3WHa13jjjcrg1AUybEoF413JyWGE34QdUFUxqtXdSYnCzt5iRrAkZBTJiPPgMXRgGq7uu4MQX7EqokLB",
  "key19": "4Qx49q1QjeptGB7UY2FWXBts38uLFWg5WkW8SUmTLCkqB6gA75pm2w5d37zDYy3xdcngtCuUYjifFbyVUgCogswW",
  "key20": "rdxzYnDGETYnrpXztcezEvvG4t95hM1CK5X8wGsoxhz9M5eikHoFnAmcbg7SaYCwy9mNAU3zvTXs79EEdjnWyNL",
  "key21": "3qvn6vqXoBXdzRyLKtbJg8xvDtxCEvcguXR4nHgk7mFL8ReLsre97ZPFy5RoEa9YckmuDsW2LYBWuvAPnson31HR",
  "key22": "8JwLTZ7ktUuiaJ55ttSfbBpqGk4xCKvGzy1nCELXiS2DT8tUhHLaAt7kFTKHDxnREwSE6suuX1akb1UphdBjb5K",
  "key23": "xrE1a7uzREHM1cyPPxy1mThLMtkL1YMRb2KdZRGz3R14Y2rTvnrcgY1YceKUzT8QfZgidc6j8bsq1BgSUXEtmdt",
  "key24": "5B7TLXBMrGerxVxMUaRVTaqLUyiKf3E8mxvHhnU6igHPkdT6YYq61kJTG2XwbdM6Usx2f557wnCXsVi4gjkNVPg3",
  "key25": "5i6BXnpgTjzY9YrWDg1nCiCPNCDTvLyiF5Nzp3ioNY1aL6s4atogza7jE9wmCfb5fHJ9hpYk3XznPSv6SkmQWqDZ",
  "key26": "4PzWN6b3iRxdtRDcd4RLvsefRPPVbgwgQFzWoBqbg32SGTiNzqEMqmQtUVbaHbxvvBv2Xe5n6iqnYYcLrRcCMBVm"
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
