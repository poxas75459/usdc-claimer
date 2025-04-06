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
    "4SgKLJ6wZm4xpxzSEfXAh95W3K9gKUgmCoGUr7UfZdsWfgRdR1Nn1nCRF7SqXPP5RMX2zwLdL9EeJRqfdFkvTqTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "457e6D4nrtExkohNptnmPE6yZTJSPvGKzvsPNVbj5YRZwdRnCvCReBmee1TS1davDdLCQpnys9tBDBqf4f3nLpc9",
  "key1": "254rQCb7fgYBPhCwpdd9gsWtyvCxwfugbjVvmsmsaYFSAVhtXQtvk7DKZ6m7JHgfoZE7D2a51KWPyGDSqNNBEqZ8",
  "key2": "5htPHqkiTKtsaxznv52rrgFagTv67RTFcdEhgt9eaQDpCSqkDx6VAGUYdYV1oPjuE7oE9W8zFVrMJToTr8QYmzZx",
  "key3": "4PYmENBezDgxwD1HHy7uoUfeC6dQqzbaF75r3ekYuUW4SB94CsAvd2LvYXsxsnemWso3PGS5cks2F1RNf8Hqp9n6",
  "key4": "5kLTiuA5ZGTAraKSBXYoJKZbKTLUvqeFW7GEseHxvKYmQiUhHk1HBYsEKdsTDK5p6qa8UkULwaDttkf17baMW7kC",
  "key5": "4zeAZbLRDmzh4nqnh1bZEvHZtzeDQwfTmj5yNWEFcsro1FGU2AkUFtTXNMTXE2FUtRXnEUa6wZcGMuRLQP9HRa1D",
  "key6": "384ZGuLwHKSMUuU4Subs29LSNAuqwebRFne2aawJ834cH62gszRGFkH7KJRCP5VunXipZjh9STBkqXicHNjwj7mn",
  "key7": "4pDLiEcvdJ1A1PG4tSsAsanswYYB7dPQJhiJPSmAQwRAv5iLGGGNmfHvRAYGzdnrrRk2KwkT6n47VSCybnKCkpic",
  "key8": "4QAwL22m9TDMnpx611RZwYydCmpkjKo6mm2PvhX9TH4eT3zLH64FnfVyVgvsWVi4sdtPji644UUYP5EadVC1bfkN",
  "key9": "4mmkFUA21KHGK8sMndfF2aEN4T2rKqnuNQvdrz8jWYbTRxdVuRNLeuJgn2UxxiedrksGLH1LQKBHhXVTxXuYUonS",
  "key10": "31Xay6UzAvXt6nyJCYkJ93XFiRMWb7cahqnHH9nMqzdRn6mPpUJYJ9YARjGMstWFGrhkkXpCo4d4W6JMfnJh6bab",
  "key11": "4PLR8GMWUjfoHEkMwdAhLG1uhy2MAowEVdC5trLWx663AaFVYeznTrd86iji9AhzdtbjwohGvCQ3vgYq4rrSbsnb",
  "key12": "4854uANo6rokDo98uVjp7EZ8VqeYcR4FnFbQawUMfwJUF9wqtNdHxwdipSywhF4NN4QwNABMvmd3VoVW6Az9aY2i",
  "key13": "4Qx16awhdhx5G7zmTG463yN6pH4zQ9gsgdfn347meBLs3VDnDuGAvsFeoKmbgk7EyJQFcku8Q3LqvKpSKCsndgxG",
  "key14": "5a7H9t8bwtt2v5D2nukRrhmTdGM9jhDjndp5GPqy5dWXNzEHwX9e78XSU4Qsu4ProxsU7meCt7bY5EQxowHs4VnJ",
  "key15": "48jX79o8B1jmq4LYaSAE8umZvc7eXc5cg2GxTHDPd87GR9hhtyvJNEj96AzEDT6jWafsEqLvaUwgCH4SWU1h2JNW",
  "key16": "5PB38BqXhrVU92ngxSwdx1Xkm43WBESEBtrKLaaxRPasZZnyXbpJDdmN8yruhQuC88xWM23q6DuENHcqSpmTzmVr",
  "key17": "35bpVmeXWF56zvPRQrwrLNouTHhrVBEeeYHKAWGkgm3DvzTKfYTJT12wrzkZgywdR3GrskwnkvUWU11xoWzpq6F4",
  "key18": "2VXQbk2Rxow98qTs4dWJnN6sYJGkQTjF6vcoxgwMNx5Q2NMr4H169n4MhgeX4rf59WJBwE7Xvy3SXtKVuHpD2uuV",
  "key19": "67R1GhJPr2ADMJ2FHLbbffVASPjPYAm8P94tiqHqfQiEaeLrWhvMrfiaxghfNwf4Ztfhdg8XKT6stkGi31tmXktA",
  "key20": "5SY17emUrfUPHPKEgpzkmdzQr9cUF5rHZFG8LUUAbbgxLNqZsCZ8Cz5ijdQV2qdEtFp8s9vyjYLPQBpWhJm98KNc",
  "key21": "3cgxVTiNMEr7NcazqsYaSzap7TDiKn9wPGsJiSEDjieL6GWRYyywpGLwW3SDtMCvjXmGdsDM9BPfgiZdbmVGzqe5",
  "key22": "2ZyWaoXQWLioxVKudPtvazk556raRPrB1uUoM9c27Co2x38iNW3MhEo3DQvMttnUHdQDU7n5KfKnw2SGV2xnW9QP",
  "key23": "56SkvfNsCcGtuBnhJA87VAU5FBRWr47HRZ92pqy6wiM7cRtkaNvgMgTaqKDBm37cMCmugpyJkhxqq6nCuATjHNMo",
  "key24": "25jcAoXwwfmkAcagbJBxcmWJ8BWM6BG77N73PW5noHHZEd55jzT3GmLrv481sfNHf5q4Pc8YF4rd2f6sLdDwJvix",
  "key25": "41vJXSGB65hHTxCvEM386SHAX3NQ1foCdQm8AnzZMnhdDWsoWsnPY7fjNK8jCNQ1kjZxjFHUMRKHgLRpykjCUXnA",
  "key26": "482BPF6VyL9JMo4YLEG6VduZxtHFTR8pT9gc7BVY9KPXV8ZyXrMcLQn8j7KCCCRVi33Qwxp1UAheoWUcsA2Nt9rL",
  "key27": "4K5immugadUUrkcpnVYRE9vC13qW7ETiQGs9qsmRCqJ34mgm3RdEjEujTrFrArogtgBCCxZdqm2Ep6C4kUJkq8gy",
  "key28": "bACByfrzVknBdmMzh5p2waXzp62csstuHxyJnHz1dcAcAmMQhWihhxyaez1vrMoZ6sgyAYVQQffqyLDWUoGkjsY",
  "key29": "3sM3BhCZFWGwSbb5VJhD6MK3JHFyo98Ty8USYuvthLDPfYGGQquHbRAdHZ3iVV6moheGSJT84hgLanNM5eYoa6k",
  "key30": "2vPifZGck4xQUQvNVKcHDeV4FhzP6kboYkcXAKAiwUjEfkCLHqr8qfx7U4o7MnXJa7An5DCcwYj2UTkGgkhv4nTa",
  "key31": "4snDsmLje7XbgQgR9RWp9xeqhoafHugGeSQQLyEeeCHkCmRrTJFkjDgax2rh22YSeM1ZCebfiwC5BzdGAmRiFmG4",
  "key32": "oskZ9JiYwREByLPsNRppHxko4bbsQPdrdS4tQd6PvLPou25e3EgSkYxcECSFTSL8XZDpVabWodE2kstXeA2d1ag"
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
