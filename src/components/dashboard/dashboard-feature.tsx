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
    "5XF1mscRQURGgNrpDmCKcyhxVY4P8zCGhY9y1qLfumL1BH2Ft7rgJvse2SFuKc2KYRBxbT8pBpHWhrHjJQQwJu1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Rscz5uWEEby8ynFCMzMtDLjVxdBWKeKzYeghi2LN5AA7tyX9fCpGhG1oyNycMg7kNRR1AKvmSDBoyDfwE1PArR",
  "key1": "3QVh6ydkeWnxFMsipxhLdC25E5TZ5sTsQWwxSBkb2snXa8g1J3EF1dWs9fFCfrSGQ2cLt84kSGhWqL9Huap468xE",
  "key2": "57kp7dvameYoY6UZV2EfnViW4A6ftez5fn31kC8JFVaAyisrGgoLaHjnvbjRXb8Qznjqm3CqcNsAiwYs8swNb1Tc",
  "key3": "3uMXGhvcX6iaUwvD6gaqUuxWnur8n1Bj5vaarVCN1URyPUK1bNBLrHUuZ8DFG5pA324DNWhnqSXBmmASqHhQ239o",
  "key4": "4sjMg2q7ajiRM3vnT6Rjm2XWBeyg9zzU3xGcU498dJyaJdXPMKoRyR54i2kAU6fj8XtDh72afk9kLGM2ACFfMdKh",
  "key5": "4VLjfJkbSThmJKFAF82H5bU5M5uhXdzheSakQm9wtbV1g4zxGz1WGTWwBwXV75HgpNyGDfKDkKc3uXkZ6EzrNDiV",
  "key6": "4N1ZbTWKLggg1usUSdRGz29gpY6HrJQcWMGdEv3bWL5VGHdSCpP5HrC7UYH93xotiHkuq9SbWd52Scw7eoU3SnTp",
  "key7": "5YbnbYa5nKzHStsKefXUjiU3TpEYnSqvVeoPaNt2Uc5AdNcttykiq5E47ojrXCvqnux7kMXGGVKsjZtzG9ZRHtfc",
  "key8": "5MxsnEcdm6Ep21tmoTV6sSsjhP4KrdtwBCTHXoWXXCJemPexL1FgBnsdNWMvHrY41g2t9LWB6zmLYPstszPn8F7k",
  "key9": "X7GD1nQonavtN4qGJsrhiL7KDbousAmjci61vbHt3BxP4RyVzy6Hy5fwoGKeto4YP5mzxHfjymf7LxRcLrzc1Fi",
  "key10": "3os6pd3sXG9GPyUaxNBk8LK1WHjGoezhnCNNbDrf9JmkTqHHZwKyRsmiuK13ZgV6xAJqrrkbHKsm7aApDXXiJd4t",
  "key11": "pif6Hcv9Hhaodm6gABrdY9dse6BNymitF3yavzNviqtDVtXvFrEt3qTDXAvuGEKChusosPeTG5w3QvdYxgFZswx",
  "key12": "5Mw7RYqZm3AdVb5Q5gkewRFtPjjuLkynaypnntXCvLAEUpeEYgc2SVL9svbJYLt3zBFwFq56pPMKSjXuN3AXckiR",
  "key13": "4yt8W7qakXkE2hdNHDrvVz97tCsdqAC37kmb33JxbnTphB9Yh1V553TSXaine5bqRJFW8BEHL7cCxsProjiFMRLq",
  "key14": "2fMcbTgjAsqjTrV3bwn4SqpUqD8UqMqxxL1VBD4Gf5wtMFCrA5yoBKDJ3qrazonZJsK1Zjsx3Avjse4onY3KsYj1",
  "key15": "3cRKrPYq3ejfJaQXftwvHVzC9RM6zo3ejv1mp9pK1GjddWQojk92ctvb9gT6D1KQytMkNUbzPTpThT8WZgkeX3hn",
  "key16": "44QGCpt7kD7DZ7XTMLshR6a1QRfMKBwPRX16Q265heQ3Rxc735rVcGn6Pox4ASvnS5GYb1WjJgB3XaDsvHcX5mEC",
  "key17": "2bDw7f9RbxCyAXpB8rYXcZAsxsqmJnrz78fhyZoHEbzEKpDRYvjFAxfR1at4uYZBUi9WuH245FP6wTGehgmstWVM",
  "key18": "4ozZWLNc7UQadYm6V5cgSgtCLPJ2VBL73ozN3KsxVdnzRYbi8GQvdbLPZYKkCK97TPqxhmjp9LNuwPUE28e5erhu",
  "key19": "4PzUxkgRkpRDCe3Fyb5C2i49U9QrpH89dEk6nedoGxCnpfvvedGapM8N7oFRMommkNje6zWNQqDt2PUTzXrRA4ZB",
  "key20": "s1JRyWHspUSNRry41Z6D2mK5ogewn4LMeEPJEq2p88r3StdZnnHTCHkhdgbvPcERMEiA24nmWpmRcRngQCr5g9m",
  "key21": "3umD82Sn6fS8sjb789axbw9PA7S2KZDM7FNmVyNV6R4sJkD1Nr4m3YcdjrhTuQuyN9syFggB5GXge7jcSYgtJPta",
  "key22": "2s4YqDhcwS5w1uuDzgKGKFJ4c2rYdrRzzM3WiDBfK5tsY2maH1sWLaKQSgKBL9ySf1LhuTtE6nyUKXmucR2YdUhG",
  "key23": "42xJaiKFABJX9qWYRjvY9AHo7hfddeFSrn4KwvA2K8PZHjNrWqmoajFBxRnNiuMaUVgafhyyd5aGzMsSCWeJdZHx",
  "key24": "2YiCubnXtEQFkgiPB7eDouXaeSFaN5M2ZBxeuJCrPYc5NnNePhAWuXuLaZkyPxzVv5TGqCVbjwhodZtf7RXkQVxw",
  "key25": "4qBgKc7G5hgFmtKarCGuN4cVELJQh6bt3N5shtfdhF9XV8xLQ79PV3i8yUwcu4itHW5FuBKS3Fi7RS58Fihfp5ar",
  "key26": "2UqSVnFnikyjXeZi5GN2WadMgn6xL9TsmCKSgPs26ejkWVnv2RfrRM5ZqBCqvqW1GFubT3mVp7NS2j1Z6uEwxoMX",
  "key27": "qkKdoaJJjwZSPMHwCFFksaiNnFAUn171stecc8mNQWjcG3U73UXo1KiKFEkYo9X385Wxf9C61Bqip5v6vjmUoqr",
  "key28": "2ywrZgkkryNvgLGuUuRQ6TwXo6bvUAYndbhsQiGNcsU6dyfnh8UQPZW66PbpwqcjiHwKFAA4EFnaFiFqi2EFQrYF",
  "key29": "5tG8RgpJdQjuRt4dtNv7VnfArXbaiRvMLASHMRDgrwR4A94BoR8abFvbBjgvNSs8maUNiXSQcqBLgSDfLR4cLNuM",
  "key30": "2Hp3ugeaRSYATNeW98NfihEMAMQA7GfCm7wuqDxTdoj3WohtKcqTCmUEZ84Ejq1aJ6srjVAfwswpaGW1S2gZbcyo",
  "key31": "4593dq8TSgUizQiXBwYEBaF5gbehgZy31ste2mWs7d6RSHZWNfEiRMrp3r9eQjyfHXNpUMTG4cHEDE4uLBJoC3CG",
  "key32": "32qZXakibpso77ncoi3QMbnhXGqRpA7jH8bxKh2Hd2ayuzZtK4aedQiGT6qB9AUxFRhVcPhBee65LhMfJ5K9S9V7",
  "key33": "5E5gr8YjCUVk9fFb9ZYiycy6VrZ5NoYVzLdpeECU3UUFwQymDoGtxMRyE2ZYf141Wf4FgzewSJgCQEG7XAtxRbuo",
  "key34": "2z1UG2kgUcxp6cMa3i4RxTFSdFCkNY4TcAnVod79SwZV5h5GpebJFtbfs9Jq13XgcXAh6i7rTtSM3nQUj6hcK7DV",
  "key35": "5j1deoWU8PZDFasQAbr5meBbF3FLYrFGNHTkBnBfVgPhCYQQdjhumqtawewi9ztnb5zex8Comqq5QHkheEDJTQ4q",
  "key36": "38VAZi6p2v2NWsbDAo3sTSWCStDYhUHzLEfSmXPovquB1DsWTWC8yNNPBjVCXpbQAoCJ7KaoJfuZRwE49NyKFEt4",
  "key37": "3mshAUsZGpFUwY9GwTXvf2utMn8SQ6p14e3Pp3xfUmr9tmYKXkhD3fSm4czSVFdWtVzzao861UdGAXmnx5sEBDaA",
  "key38": "1jtiHbaoTYLNSPgXhyA8ELyG1JfKq64p88piF1g2ToxDLRh9S42Vk3vAQC2EAeyZTxc1H8pBHxUpzVhnFKxSMi6",
  "key39": "3rXNigD9sLdM4rEaDtnWwPpQt7k1gFUCx8M1k8rid1EpAtsTeP63857rZTbu2uYTcCaf7Kgnc7ANaUMS6KcTViXi",
  "key40": "4sNyA6HuxHdV6m3San4foYQE2XH47PxPYWJVQ9hBzcLvWBn5J2ue7bDtNHh2ohcgP5NswE8xt7FUwyfaFWwn6JTW",
  "key41": "5GMwpkJ9HzpmqzzuzstxZZjA3JBGzS1M9eojBJwYQ4Hj3kRGARJmhmBg4VdAky6kcz7o4SMUFJ9Ye85ypqvv18ey",
  "key42": "RjnQfQRJar4RHQxqiiQkBCgzz1WEKzb82yDzdpGzN8DuUvfd8vhq5af4pxNv1F9bXvXJiNucDTGgRMDh1yaf2sT",
  "key43": "26y7Nudu9vEzha41YhroAzXX8pJQ5pq6XHxihpX7YV2AsMX9QPtaiehA2FfaZiVwvRf6NfczWmxzBErCxv9tuwU5",
  "key44": "2LpbB5GTtRepbob31SbGdRYhtD38nhTPZ3tg2X8QG3D5ftwQfKzJYwqubJF8wRMgA9b6TN8g8wZTqZyiH7X28CX9",
  "key45": "33dq7FMLpSYhpZUQcsUV2sEiTabQcQcJ6fdmuJAUsC1TzT475D7QVw3tcovnK8kmxn8ZesU8DfoKGireaVw5cuRP",
  "key46": "4GpdmnZ9CjaUb8VheSsWu5ZwVjpUDu9TTPnXUVd7b5yaaxQHZJJicqSNcotZgmmY3JfsERSq4vVp5SFpyszaoF9s",
  "key47": "5deZDrz55VtyHe6Ckg66wKtiaQW6E5j76XfLc8VmaXFeX8ovm2MGMJiGEUL2YZ7zLsFxBRg3VvDAQe2VF5xG4vjR",
  "key48": "R899jpgi7wih8tVFmhgGHG3Ua4U3KnGTzqMSkFnEumwKYdByf5ZgAFRnyFmf7Z7QWMkDukFBxWn4rtUZpTwUHAX"
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
