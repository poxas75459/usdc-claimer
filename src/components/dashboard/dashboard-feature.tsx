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
    "JpQFX2FZZAf6JNHTNUdxK5qrpydEpCQmazMoxi21t7sCMzw8mFKKsdWucqvwHStLwEzYMpVmR6D78SvBCgLbAwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5goxxhCfYEUwvSobu46Tv6WfKBNL9KBgWJVKVPLJag73itsYSNFt9SDqSv6iJGa4k7sUtbnfGJZJUsGUHLHi3o1Z",
  "key1": "3RfoytPf9tjA8Ty7osRVfaVdvvrouH8GM5HyQ9D2igC3GBsCYAa7Jmo57DN7VCfMJBtpgf7hi8cXBBQQGh6Etzxs",
  "key2": "51udnAtEhyqchV7NGZGKhMNrN84MZnu7UMecbZtwsu5tWDPspxV1sbAjkjiL5Q19kiFVEFa7NEoY1kASLY4XrU31",
  "key3": "2zqfj1fiM4JDj9GEbs1qyxGsRoSsfdYe4RzZ619ZskBPaPaBSyS6Ehr2boTCTxG5F2fnEZkXY3MgaBs4CKjJyzAe",
  "key4": "4eYVcThMPWXEssZieHWvmgRVL5rYzJqVESmN6ec2S5qxr4LuKrURNWJRSEYFY3Wkbt8bEDsXqtPwqqikmQVLLTDb",
  "key5": "2f2Rv4YwKVNP8FRXFm5vuvTRLa9HF1ErXnyvsY5bHH9opLYY8g1ZW4fQEkFBbt1E1hmSVZNEQcxhT18sjpSQUs2A",
  "key6": "reLRcUvk4r53T82DNamMAbkSufa91EUEQCBK31Uw72a9CufcjCYe8wKeETZhGwBcak9rCh8NCBPSTg24Qctbfnm",
  "key7": "5j5GaePWT152NNbPCxHHdbuxAjYaaW6bVUtzMEoeEts8JwnonSHRhFkgDLFQbokgaUr1qVpLqHfT7xd4EysmBBQM",
  "key8": "3RwzxtZsWU3oUhSuYqyomhrWTRs3tb95B6JZWTbM1F9PUfYmy1REijZUtdqbUzNKPgqog1fgSizcKRRobXEozVA7",
  "key9": "4Yp1e38iaEF8fhwzAVjZnHszrBQmLNNpQDPy1RZ1hSJy3C2mtNBQE8C2tUp6GwpY2NgM1gNz2UzD8v6Quy7LHyHr",
  "key10": "47SA6CY9T6wZMPPPXn7jVMo29gHFdFtJmEevE9RvrXshcqkZ49rTYsLj6Sm1gyrJwB5V5byGwf4FNSTFpShenbcK",
  "key11": "3oWp8gJ2DeD7LtKYwP9Ji73yxmWjkAxWKJPhLuVz8TJwbqQXczTAz5MWuHatP6EcasXZTMwWkj4Y5vF3P3sCAsV",
  "key12": "3mQWYzby4ZnyzF3WEj1dozbEtwCvHhBafEK8hom7KK2HD4d4Z5b86kVqQdFjZybx7UmeKN7WyRCsnMUDBuuUNnFV",
  "key13": "2CbvQF3MBPuARMHhSabVbmgTLfrJaXZVD1zRzkKMYCp1esU8EjXCJjKQYt7w4vurukSXd6639LM8TeBx6Jd6TXiP",
  "key14": "3a2rfmZx3V8t5xtcs9fNaQSJsCMCVTVsv5EAjBDcDXdcQXwzquWQetKYTEVqrZHo9AzZNKsvKntd8eXzy9Wx7Wg1",
  "key15": "5unvCD6Jgu4roKpoSLT2s9r2VpPKSmJaLyF4qZdL7B83iDUx45G6SkLgZ6LeNkDFH6r4eovAb9p4h3Q7uFX2YVqj",
  "key16": "5gtWd5Yu9TcSggD1qX1rVqjSWbGsSuucNacFpcYH32GF52V79eYWikoaLEQxvvjMuBnsjJ7PYmWHctH7S9KkEmJe",
  "key17": "VAuTszQS6onjW7AZTkRwdq1AYTeYfJGQXCwvjw8h6E3PZRYgzhNZeP4ULrtWqwRcnobXWjXvuW3bpoXkAXvq4jv",
  "key18": "33zkPFWnCMkhpgM122H3hBxaTdrPUX7chgu8pQzpgtTy3xhq8PE6afwLDxZtmY7dARJMf3cns44ug4y3UvCiEC8A",
  "key19": "TpNW3WhkS5jFGNbBaMMoTBUJM39DK5UfiogDeRLMUMfURyWRbEHpjDgh7AvfSAmc5e95VzXYjdaCJNyGbBUzjD5",
  "key20": "Bm4Jw5u1WPqYUdppKPxmghJC7A22epJiK2AzPDVm3e8HeBPxT98X91wq7iX1wEVZv8HVHutW1nRiwFm5QuZPfd5",
  "key21": "4zQFHe2rvZcD5u34VPBhCVuquQA9oe2wm9fCbvaggyQB8hvtCfLo1neUaszYPkvTMhVZmdzKCgMkubRTYJSrJVVS",
  "key22": "5m4WUdwgHHwi2TkQd1dNeJdSLieyPJJhsSWMikn9XhTxMWbpaebZh69tfwzX1L6mVHym8QMh3daUrBC68a8SV85A",
  "key23": "2XEG6CcdskVGjRwpWRsRTqA8B7fAwNPqrEKjJ1EWq8eRs94rXrgSLfNzK3KngsHjZ4AdWYbf7xc2uoMjwMZozpPT",
  "key24": "5Y8qgX4ug8FRyv5i6ksrE7tCdUP3FqCZRNBYBXYfSqWve9yDPoFKrC7YsxfMpGyZEhcGxXkZTw3sHYLKHaMm5CwK",
  "key25": "5xK9MGJxhQeJc8jhNaL45MUjP6aKJRmizMRcoGy4iLBvF3znSZcZ6zb6hptF24gdrLJ5oDhGeLPCcug2hpBewwXD",
  "key26": "2uAGE1f1A7nPNbjaJA7fjNVNXsit86aziTAHiKBjXWijhdhxFyK7eXiK6h9vqQA9H2cvdiAHLaX9xMuygQGxVNHa",
  "key27": "2GG6gH8Enh7Ljg8g9HDTE1Yxd71d7xUVxBEwnPAEbrPbUA5VMDQcHJRS9iks7uSfDMWKXwxbby8DodSmGmbMvY3n",
  "key28": "43DpwpCdKvdiA5nwiPxBq7cNbXEqqi7moq8HZ4bFHc4NUGZ81FJDycy7dHjjbJoBvqhRiuxGFmSyQ8euULNv7ZdP",
  "key29": "5ofZGGi5XRH6hDUwDicdTTUsf4QQEZ8iFUVmpWrCfDKeZwJmzJ8rUnTxixRXUrLNqe9dcYiKivMqL239E5sx7AWs",
  "key30": "5y3d1uWmQP1YipfwJnzKQuhhcx1VbzXtCHzTxzKhKXxYe2hJ8teR92yxtMDevKCALFwe12QFmsydd3BXbNNW4p2M",
  "key31": "49WpAnPV8XxmVHvBHrrbXDxQC4ALoM4ywKiVh3NCWvYDVvhuiPYESq2aqL27u5oJ9LFvaJfmNVb4k8vJNYByWtCJ",
  "key32": "3iaSfgn15Caj618CVV1XsNzPKAc3xnNcTLvs9YuE4qj4ET9DVqzQRyndtrCzbE7MZedfFwRN88fLHpTpZKkDsXBH",
  "key33": "2mvFvHmx7LR34B4DKyVGQoFq7zmvAEcbgQYCJqE8m9Wkt1aUYYwGkBcsBMAbG1zEmT7PYez4HjCaDXD3r2QUb37i",
  "key34": "3ULKGwzQxCaJKEaTbr5UqT858zoT8A5mMV2LkixQWRDRRDd8zbw88fgHqCTdXZ94EEmt6ZfYGVHQ1u9qgqaRkJwz",
  "key35": "4m2XadycMc2pgBtEoSv4W5pcuvDKGiFk7kyEQidVX5fcjrqqTT28QsZ7hxnqDTi7epSHB7xPQbxJGDAik2vPLo6G",
  "key36": "2LwXBwxxF63LbxNqawyPeBZvt8bCDJzEqSi2ptEd11VCvCHUm4ZZdNVXmrDoktBUeJWdcYZqWwYzioJtUnNLe7Tj",
  "key37": "5R8vfmZawqsRxqPqAk6kcpiG9GjNHi1WrW8DWuUNFaLBKbh3xRPDzxKgtorJNvDpdk5f6cVCPqbgQ53oF45D9QUg",
  "key38": "4yk4cC4fCbW9U4b1CwFGBsPUit4MuJdgVKZnqAhTmuYPtNudJdQfaakE7cUgeHQaaNEBTrmVF1QpWcbf6jPNJtq9",
  "key39": "3Evza1vibThsdzWLfNS5XHE3CsEbU8zBRevVKboPsTJ2x82X4bpJkbUKYMLJjUkCozbFdZSESW6jbxUNxoifF8c5",
  "key40": "3nZrjDsuCQn9Sdji5oiCwYeqkfrBfdW6HPdfmCkKR8FWKi9ciozmY7aBQXGK5MQGvMe7CEZTKPUhgXkw568RVtt4",
  "key41": "5Gd1DPG4gfytRjAnTLw9j4zaHjD6mUcZ6rCLTw5MAFfcQbcDAEziMmk3xMGqQti8PLbqiTbW4W95iLMF2KqRP3QV",
  "key42": "m6kGCwyQee2TKFDERvZVTpDg6Bqyd3gygi7AMTD8bNDcFzvqGCkB3Lvc41CmniQFLP3TDKmhXgXwF2YF7yQdyts",
  "key43": "58JoAviySi6dc8XLcuPnNPUXV3jxd2ZonXA3oBD1sMRGBBbGZpFvjQmxtyVhfXEcx2QyVeUbnucYPhWhaM4mgExB",
  "key44": "5eenX3iTW1VheuqHHit7J4Gj7UNJkPF4f28Pj6ffPusgRHqpSoQX9EWFkGJ8VkZQ78srbB4NitcWXsrS7VaNV6za",
  "key45": "4V9SfuU7whDiSfZ7NMbpkh5bcX4wDZ33eLGHki2ACxinLmVMvhrrTJLWe3UpUMrWVijUSgqxWiYdSRKEziouQwsn",
  "key46": "5WhMXo8J5HuxqSg2YhwFsAkt9XC1hCA8xxBMnohQR3gJvMaCcszETzRBT4pLMKxyRVNBPGdPfmSmyzDprFjyrQsF",
  "key47": "4hZmZWxMFukayYx3ViXNfvTg8oosFqWW6P83y5e8oZNo8zkwiCZCAssqE9jb4HKJXoQnXmSjRF2bkMALBMiPigZC",
  "key48": "5dSru1cADLu6KA2RLmTAVB2wwsK6VFfYJjT9fBxh5rYsPAAR22JcqKjNGsG2AHHjiTNTppd1ogd2wy2CMjMspdjR"
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
