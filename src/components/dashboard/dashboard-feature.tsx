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
    "5UCiY9PQ8enxCJqsiLFQkgwBsDWRMEy3iW3PbGxMAGkvDp5fx41qJrXvabxH1FXcVButbNfsYjGU61fhDVHyk3Yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TN4xJgNXbV1GuEpPRWtHFxakf8jqbDKGw8ztxXq6YVJ56K7J1agRb5SE3bQxNKVjBc26VpWeVZBSY5qPMzzZY1v",
  "key1": "2SJUgaFE8AewDS4yVpYgT7PTV6fPJPmKex8pJZL46soCzHoBeNuNudZzgM9BRrq7vJmnw28UvSnag6kxm2fmaLHs",
  "key2": "4rgyvStbyF7AhTzhYxB4zfZrWTTQa9YcVFmVEXErv1sJmMY6SZq4oobTCwrewE9Fk8d3BjCYpr5zmgCdFNTX7VKJ",
  "key3": "2YV81tX9rgAcNQuDab4kPpF8zfhrrXorADci7W7VadS99uyAqUGj7TBiFZUVtDv9bWNxaSmCeaMkHkoEzYZDtjHR",
  "key4": "4ftiFCsx1TsTtwhr5bZgvPCAMkfErRb8vMNBRHzYfqwa8evLeMPQf9EBdK8X752Gru283adjf3wBfLRZafCDbome",
  "key5": "3HnzNchVMjsUEdVgGqH8LNF3gstqTsA1xTwW7YHBUnWsLERHiKwDiVsoiJjsm7wX6QrGukAgovBQGjVazMVUTT8t",
  "key6": "3FLfbScwua59PpKNNy6Jqt94DLiSqETfuUGm1tmMYobCujBHXvQxp5dSCPsnxd9A5Y69PdoTHEHEnfxvWiT4iGaX",
  "key7": "2JQ38DCgUqXvYDx9PqMgksvZVKumpGZtc4qkCwKjJ9qZXdfv4oNLgU76NYxFvt8ML4ZVinr6qfkNn1asGxYYn9dV",
  "key8": "2WgmSL2Fnz6D92XPyDtbAq11gxJXgH74BFnMTQYvi7NfVT2fdiGBxJuYmSxjZHjy1pr3QhhWqq2fxTTmK9xYDjEL",
  "key9": "3YeTTzYhspRavfqC9MbGThvZPhgy7gKC6EVPtzrRtcC5QLNqAw3jvXzJHMc4JW4j3ofTs6YA8c9N6VvdaKgMjYWm",
  "key10": "61Z542myNGhTe5g2zhECCp7ZhadupKjm5GKG5493RqBbNLE8nFM51LryBwAXVkuazm1zd43FGMC9bXjBrxj4iHEv",
  "key11": "jgVtsbfybWJD7baEp2V5qZSs2VfwoeQh6FF8C3r5YVT3bkhjrCEBx5xYWq4pPf9QUQKyUFgyTr6QKtraV7JqLLs",
  "key12": "2QtGwueq7HnJo1TmEHZ8yXMQKVFNu9nJUCxiEgYFzz5euRG1HihhP8zotorR1dJDxwQxUaSZYC9yvHgmS627R4cB",
  "key13": "4rTBbiPZpjn9tLWrucHXzWAAQkp2au8gjkdvX1dKV3Ttd3BgrPf55rXmjPMyH8o1bCwe44i1DsscLw46sdhyW8tA",
  "key14": "4XUaVhKrPShzhksCRpY2G2RdSrRsiH9hTeepK7jFxKibnkKJu27WgW67DmBMuSrXUpmPjMsf4nhWymqXduqbWBR1",
  "key15": "2Z55avqvoASL5Y9ouvrKtVi8dpa7PLRiBtZYHAcVJ7V2kjECXpFbA6yJArocEpRRbi7keoSx5LNtwG7U4QW7djVi",
  "key16": "oJJCCw6tWRPs7ACRFMqxDLsPEUBUhUqf2FgEr1x48La7ftgf77G9oJbr3bmG8JKxYazww9WKKcxrAyRE8c5Neig",
  "key17": "2jjnLi6dzdj8ssbqfomCNV7WaFgPJuuhs6yURSoyt7vtpCv3JH4WF3mYRnkY6LysryMifKWEEFVJwBqSgAJjY95L",
  "key18": "25VtiXZT2Lk3mLPyrKygo4CeQCAmcmTfNUBa7FhoBGTTkQbbdRptySkp6DP6Mm2waTXGveXYGE7d3EexxTRq3vj7",
  "key19": "27LNnxKQdtkqR3L5PQPACpTUygQEGjhxn4jKXwov3nkwdMXisVuGYVRujiZsy5jn1VGnikyBr6R6hRXixYGSXn6y",
  "key20": "66pDCfs5eup1prX7ce3BZrJ2ih3ZFKx3WndAYfYKH9h4p2khCmunsC7aYuJVhvkXD5SK5VdPiF6dvw9TJqA45uc7",
  "key21": "3ZMD6wFJvXWEGo741MYtvy8MtUQ1j63eE3kPqDy4gDe989PabR8thhLZekStNHYuN6d7AVu3v38RhBmGRXRera6Y",
  "key22": "3zinjJtxg74RWDB4MLYrzdSZWam4WQFjSX4LkMDyMwfJRspFzNxrhRsNVyoWMrEQKYta48DJk6EGazMBeLNghGPL",
  "key23": "3PB8aYpZhou98W2RrAgkCkdwZCYxFeE1fzQe9CSbjfUi8SqWtTMprpUHzEekBuqnszWVKRudmDcXDdUSN9EpHAeq",
  "key24": "3prmiDYzTQjSZxSitQUNwQKomDTAJGrgyFATRrnhBGDHH7vsrSN4i2StGa59hqRPZ9p6Hca9Mu9FswkZg5nsydaT",
  "key25": "fmdaQSJgvsc2izNeo1iwAY8ymViA9RqhjFQG1geeyREdjJowLXpC74L6VLFhYU42DQS3bV2EEyJ7u5hoGyfyerN",
  "key26": "2knS7g8rHr7TCXJCc9af8UgcuQ8LRfvLQhv2hfK75XcgsPbpnqbQEubSSaG5Q8geg8CwYsEeitYmqjHjVhChnqvd",
  "key27": "3p8mFp252UktpxZTM7wm3tfnXXporpzwNMVLRrc8tCiFoWWXV4QFSRLcJUcmZR8M5eD4XxgRfmhz9BVW35z5YrKC",
  "key28": "4yAp13mPhJucBfoJtMbuRgNqGFbj23hAMuwRAvuv3KmcwhiU8Ko7ZUNRqdVSBoW9VLZtnpo6QtU3m2n7WASqK1nf",
  "key29": "3GUjkNHMTWJVJ9znbpVvioM591MMKegJJ32MKeQ3nrLzqBPupcYTFahtfzTwVXdUWP5UoRSvY7pofKJrZ8Cq8Uwd",
  "key30": "e9PqgVkYBSfLtJfKMBtbAv4oTGkoSgTm1s1JYicgH5HvYP7CszhmAvVN7EGQGERFLPhrWn7qwpJY5bqWPwioV91",
  "key31": "2fgEZ59J3zTncSk1yHfsLNMhEsrp8L8cvMEb8raeLvpX2f92SDrYnv1KcVhFHhm1Ce8c5Q4TPbmJYwjQn62Mwd9U",
  "key32": "4qh9iX32Qck13gHf3U9ya6n6G66G1NaLxbvAnE6p9TNAAmhLVcMCXQrccd734hEn7KnUCNrCFZxDUbNXAuM61B4S",
  "key33": "2Rpdn6aQhiH3bR7tS8D3tpeSzUWYQCjqYQK776uWRVg2cihkkNTByhtmnjMXWqBtHgb7AvbpB8DFmK5b51baBMXa"
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
