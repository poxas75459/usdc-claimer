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
    "2mC1Bw7LgTZFV431XyWFcTWsfY28dnmAfeTDyCA1vmJKdLrvyjCapq2cmsHFfRpuj2gcaKWf9AgGe32u7sRhrhqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wv5tGB6SGW5Tu9FVtSjMPe8JJxDnY3ezZgzWA88EL8548RHqTneqedduUcS6nJTM7uvFfDPBBpPhAPGeH9nLrSN",
  "key1": "2E3MvXFBjmijk7SM8JepxRt2CjbTjHjob6aaRf6q2hX8ehxF6LNVoznWtD6hrSt4g61Fj1ffdmSw3SWRkhfSnxbq",
  "key2": "4gBMZUt32qNH6LkXTqLSHbwHejxVKetyPp7xHm17mhs4YqKntKENhsmqt81Nuc1e5RpzKXQRxPFHXBiSYXfXZfBZ",
  "key3": "4fkmECq48DgDqwT16pNibBqQdNmVZhRKGRys75DHfEqyS7KEnn6nFe7rShgbdbYcXoGFVD8oTHDMoDrdLaUmrcJD",
  "key4": "2CTSGxD7KX586psXLcepguqnQSWNXxz3EyAqR28H59nZ1fWPiHT8rdBJYzLzrBwA7pUic8GXSqoKta8X2JMD9Ryv",
  "key5": "3GncJ5Svc6T9CHXNjxw8hMH6VvZjXsq6qUgQiP5Y2dhe5rhrBtUU4VhRrskYxJZZHw8Nh148tiYuS9pYcXquwAQ7",
  "key6": "3cT7vqeWh3xSXVvhyH4SfdB8XL5ZxqHNRs3BBz8aFLwNjVNQqkDYhmE33ERuJNW2idz75quHuZQMCWzmVfpbiwaP",
  "key7": "2osmspnQaZNGzpQ9aaCPLLvpfGcF15TfWvHsSQ71KJSMh5xDuZExdqPRgwsLThC1sLehs6nBCBSDQBgn3rC7iWvq",
  "key8": "2KPGQcVNyBB4atPC57pEewCQ45UWzyB7nf5nF6osw9HrfmPLHnF9DAWut3AmcxAwBSSKhRMCLrQPMMqm9WHRCVVb",
  "key9": "4euLWa5vVTD39vE1Xyvb6iUK3QTV3CHcinZUm4EFt1yUK8XL1WVeBSXrNHzvKeeRkFGmLfrhu3qdRdToYndPU4S6",
  "key10": "231ZCxb9K43qtaEpX5semiC76vUCwg2WgHBteqhBakM3U4wDk2EkHis8CrexLkokiSidrfM9pa1bx5DY4bWnyUB1",
  "key11": "3dmXN5rMNngWnCW27May5yQoXXxByg5ejhHSZhzsudRiPC6rsgDG2bhZJg8cWNWnMktRnLFPm8EbToYTPMz3YHS9",
  "key12": "5AYH6s19tscENpmBWcUNtNrGFuUkNkLacFDb4KDuX5sdWHGr1e4FRURJ7AeFW5DKWgb8Tt3WLgQTytWvJzY2Zgnv",
  "key13": "5uG85TSnNw1869pA14MLwAp6RMuygADKrm2FU3GD8DMafRimfFfNF5HbwZCsatGZzfT2QMpEuAcYKfC81AfBJmFo",
  "key14": "4zfbNKkNkhfidYk4G5SohpmMdJxG2ZjjhgdtXVf1dJi6X6cM97h8dBpYQC2ZT2vLZvL782YUt4NrGoboi3vnXAVP",
  "key15": "47GZwg3ZXYYN91oK5ttptJ4xs4AZ1uJdwXopSijH9nZ3WefZQBxn9VuRBcE7SgxmvEqqDJcDkW4TXZZdAHsYg1CR",
  "key16": "1VxbWjWcqw8pmFz7B1xkVqfrVXwKhzHY3FvofZMxD2ByoYyi5vpUtjrRP1S78BmhXTkubGXUqXMx6XginNA9ky4",
  "key17": "5TD8JL8YBDXyp9Ud1CMHh1BerUqNLQ4P5QxsXiwPTumvGWH2n2kkN7uKhVefjMDUHSN2FGpT8cNyK6AAd6Be2nEz",
  "key18": "5QeZyXAKPTH58oDU4wrjfdi8pM8udAfDmio3btjHhJXTWR3cW5UrrkAsToW2bgY1fayov82QtorLjgNmHgJrt2ZZ",
  "key19": "5a5Z1frEqqVwRaC4gBaxx7sC9UeHmviSjSwWbeKe2QfNxqWFQf3EwEC1gY7qEbFUZ6PrdU63JpW4GtruLhXJShFW",
  "key20": "D7CZ843Ps6qUzZNPEET8pxCYjT9cKCaX6kaJ7i4MQffGv3KffYLheuG2pHwbhfEr9986JuAV9Gaz35vWj46JowN",
  "key21": "rGh4oDboJgMdgqZebLoMnBerWLwapPYkZVXRA5SEgiRGLPcAa29MABWBxop8qSme82jJgv2AwtFzV11hYVKiV3j",
  "key22": "5icxGfrRDRV5TwJCjL1KGcS3cqqGeegdQ4Cwa3XwcMh9KRFXAiZNSXAjRiZZx3evgEQ8L3D6ogeuVLQi6yaDC7xy",
  "key23": "4Ekf5Jsno8Rkskvd8gvgKoc4HohRhkkVviSD7B6j4jh9CeEgThNeR1yP55dCV8QnugjgKgoCZHyvbZebLjm5hT96",
  "key24": "26hTQonqsKafeARiV95xxfSzbZFhGMXZiTaV3V4i1gGaX9ym8QzjiWiiVVdBpHDXDYHPguryr79bntsEsRJnpk6X",
  "key25": "4D6UeH5iMp3Bg5ajuTEGuZmEr7qQkxDBgYwLTynFn1NsJ9roiGiyd2RxJHzn6spdrooSCmxVM3drLsPBgJCHiE54",
  "key26": "2uMf7CxuDWU3mHZSP5rbVQa8azxpdsDfTUnxM3S5zPbQW15JKN52aubZfkzoJeoAopULXhCbNctAXH4Pg1w1cB3",
  "key27": "4KWJXnJc1QQYMwtkzvpKGaGqK73VXNgkGgyo6r42Punrr7faXgM9V6HziMJh5VrrTH51x8X3S5GdXmWZKJz9Zssy",
  "key28": "5e82q5g6ojJK8nsy3r7jwuNAQxHcEH5qoFGfw9Z2u66moVdTSxJWmjuH9ZXrfLo6yNe4aTVLZ6zBeKREF3EnLj7e",
  "key29": "tPyb9ek6ZbB8wTRifiTttSqU2HisEAMA5psConzTSJE5npyuvbTJoGgaPwMK3HmessnQzmHPNQs5yZJit1Eykb6",
  "key30": "QHfzkqyPRrQwKSHJ4iaG89NNpCX1szvwcXdXog7c68RYwB1YmAXjxP9FQ2xa2DBAwCkmkDTWPCT2J8B5btupnBw",
  "key31": "2zkyMQBYaXAUQNbZhQ8wSAxtNWmUwcFkRZ3fLh1ktLDTR8ZbtNFx4vRtKfhyBhF6FtAZSUPdsweB7UGNTMTu2ren",
  "key32": "4VuXFeTq8p3MtRjynSqtxsj3zMgremGooHc89v7D5tm3hxHQ8SixAsLYNmHncdX9yVrXH4X1M6zBDaq6jBrrsxp3",
  "key33": "4ac5gZLrgehpYixQkLuchUFTXGaSYLsvja4sMYCQDRMin3Mmwx8k7cYfcjG7uFg9cge5HqHAthC3VAu4R8fxHvFG",
  "key34": "7YkkRNN9i1FMxcufyPM2Yq5DXF4wXw6yVBXUxT9oG9UbWThxyFfWGEH9xeASSZrJgKmFb7e2jV3kptGyPM6h8gB",
  "key35": "RrisHDQ5Vdd5Wx9MaCmsiAGVaP89LVhBP4uzfUEcQMYpGTbAdoGxE5vVEmfrStubvaSMfLywiPJc2CnTHzmgKDa",
  "key36": "57r4hWCuyvaRLmtgdF12xrJgK27zsj3hFVRdBT7oHjeZc67dPmQeUz9wmFCuEMfyxiXgZ3pvLKXoydYmr8ZgYh8r",
  "key37": "4fYMWQkSukWP3U4YNQJidHjwuhkK8wANMSuZePgQ7645J62ptDTK3Z6pU33RQBk36boU6yJzSmyEMUeDgMAJDtgx",
  "key38": "4t2hW9FJe4AnSCyeVGL81sRpyy4sK8rrzxvBxTntUWDwTv9MNttaWmUZ1JoN8GrHSwDrN2LUdqpHv5MCELcB9d8S",
  "key39": "5skn2hML834c2kkSxQkJFfmKUfFx8iTUxaCP6g52rQN35dvJ3skooLuTGqg7vkf4ksz4jhhoA3V1cV2DGVKUnem2",
  "key40": "5dddtPzgUGJhsiLupUKzMz34XsJ2Jf5tmXewyUeQ5uCwPUPamjpbhM2mS1omwUntkwZy4B4KKJQ3qs75SJzSZBqp",
  "key41": "66ftYzRZ7V1MYyB5SRPrZ7aLnbsUNSP7CxB1uEbgg3AXyXxnxmHtwr7KJnHcG5sFoVoc15VNMpX1tLo5BQB6tBTd",
  "key42": "417Cg67ViJ1nJ1aCaT6m3wa7GqV5inEZXQM4M3KcKyZxP2Nn15dqhKk7j7R7JX7gFfgCtxyPDUY9v59cR7q5fofg",
  "key43": "4JXkLkCoRYW7wneKnK4aXLLJaHK2n2mzuhdUuvvAfMGoSwNyrrQ8ugXfyvZ1S3RGbeDGyeQWgjPT5Gpn1a9Lovws",
  "key44": "5zLaTptb7JY4c8sckbLag5WXyQNsuD6cRdU94K8kGQmNara8whc1Y7mJ2zE2evvV5tW6yjwfWE9RWFqXFBToRqA6",
  "key45": "2cDj5wDA2G1xEU2BPBQd87hZ9CeWt7GPEEAQYJYHrm2NgruvvLFyTTt49v3hz589wLqCNB2YKxLojLGsF8rsvBi8"
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
