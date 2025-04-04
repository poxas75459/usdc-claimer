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
    "5mzv6o15qw8ZUQ61uzKsYkEWGRaHRebVAj6zipj3Ck5atET1fqgsigGughSDsCLMmjj5vtcwFwuaB1mqLZJA1Kz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hHrKUG25GFZBKPqtxAmSvr5kCWq8RAtJZ7hWZiM8JR6bQzWwbgaxv9ccEcaCGEkQ93C6vMhzgsfStRBYM399vQA",
  "key1": "3gB5zFXs911RUvnaAzvmWRCVkzBbN7VMG9PvhimbXgHGmJUsRRTdXWCoXLAiMYjqxmgyPU7bhd6tZsuPojqTKMru",
  "key2": "2tLmV2SRZr8RkNw8qguCjyFfPYWQvCiDyVQj9QPxtKp2o8ApF555ovXh1Tbnvss9pk26Kfu2KAZZJDsSEC5d9nUy",
  "key3": "62XCAGyqH7ydBG4Uo8Rojbnm1eUCcU5Hnrxt7FPzdxANdBEhLr93U8DzvTsa6csAV4AbvbCni7nrmtjLVixYNa7P",
  "key4": "5YUJ2JMtZsWLbZm5FKKBLrU3ChBzd5B2YnxKKtPCTk78LR3uNqyAKL1wzLTxS545XcdUkEq56GTtj8HaV2VsrXy9",
  "key5": "2LPv2uzcdUyWuZCFQHTGzPd3CrzQbrHRH7Ko1Xvgi8yfKpQVwtw9AfKCaarcP5pCuhsHsXNN8CyFsRihe9VqSMCc",
  "key6": "33JAYkjzVT6oVk58H3drJSPmrmfjaRAdAPvRMRjzAbt2r3fVF4d5RLVvEguppguxReA5DMee2DDfta41K5QngbMz",
  "key7": "5DfDSmwoqc7ACY7sHqKZAsHHaivf1iMnsvE9ez3vJG663sEeUq6imGkdKr412QHoB58RULZjg5Fz4mfkF3BiiFiB",
  "key8": "5s8D8ojfbNLfbqC6frytPJ9wqyRvgGfssyBCcGQoJVsnWqqZiELgdBnhKUN95mH3SBSmLLehNeHcMQs2ntRcM9yJ",
  "key9": "fFKCTNhwzdT65vakXmuWi3kdcka4aGFxU7HtxpLpa9mEQcE1PXQgvCTq45jWnW4naiVjT4nLsMQDQLFo2HMKqhg",
  "key10": "45rQuEocZu28CHKyFJYXvoQztJLGuxrwKHnQj7rBGVv2chbocJoazGHCQ132mmZYRxvZYKjPMToK2pXfY7H2bLuw",
  "key11": "TbhALLfqSJZGL7rxJgtLkGuZ83yZhcJJuodsHfXsuFoHnVEEKbmKTzTNGS7QsTDA6tVrFBdQH8WiiVgubT2zfX4",
  "key12": "4b1sF9TpbY1NZavtVgCXV8MHHUyh5NGN7XQUnTNjuqsRx2W1SC1FqYK3GiEq1P8ecR8NcBwF7RMsgPZBBTFvgXUA",
  "key13": "4T4h5TGS5Y5WmSqk1E5Cucxa1b9JsTJTmE1De6i1ggs9aRv2mRMYfzyMm5HfrhZRZSvWFeyYrLwbMQmwuES7TQ2H",
  "key14": "5UHN7TsG3Dn7nWE2Tox4AFqDmWQ2BGb6H5NkYq2VKzZ3sCQpthM1f8jEJCNmU1rb7ftd4yrJB6ZJPF3kTSiG3W38",
  "key15": "41kvZoEPYv9y2kb5Jt8RYD1hqqsDo6Z32oWLN1WsWKMGBB5JGZyPtJdMfm3RWNDbfyjsou8CecM1Y1rBypszrfCs",
  "key16": "2fDDrsGrxZoQdi9wP6ktAEDSErYAgn92sqVMNXVAru4s5h8hswUvCaLyEk1cXo3bkzPSonsCU8mFDEdJiVibywD5",
  "key17": "2HufqTXaMiv5gABKtMGASFy5Q7VKm9nzgP5xcHzLhBi3pcYXgxGX2QjqB6B1Ad6ar9kznatV2PQtgq6STKgAEL3Q",
  "key18": "5PX42MNEidr6MNYrtYQrUWVxUQ1QAT8LBotF7brn4wkQoZRJgVbNjiD8WhBbbWoLmYZVekd4zAPeJekZ4C95ivjo",
  "key19": "4L5qMuqrX4mwLhoqPFpkfUh11FoCQgYEbcCaKQUfETUs8GePUf9s8nfXwDj19v9JXUjuCEpWXGsZNVXvAEoypfHo",
  "key20": "3wPbAGgf1MNMMdBD14RVV8zmpfGaUZwhDc15aTkF1YT8yNHVuz5EHj9n5rP2SQ1TKYKMpostYypBAnC34B4i78As",
  "key21": "528Hx9sAtuSQJUWfQidbNh1X2rn7z9VngyQxxFKpQmxd5uj238HTrZ6oeXqmDi3ysV6RAXvJRN3vpQ3QcunaRMww",
  "key22": "2MS5aMhKXuDT3QchwoHjJZCNQsZWAQAJGHTFiJxaJmnzkYk96GYVh78gV3ooQXiusn1szczzWpgsem5HoaKktaCV",
  "key23": "5xZQHvP1N5huMPCgFdDCh2c1pwivXhgUt8N6jsNELcPkLZkss5uLASvYwCqq37znYRUNyy5fDtpTRkTL4inYf8WH",
  "key24": "48aGLetfPvcmzvfuk67HRhePvA7jtm6pWsW1YUwek7SudexSqmE416aMaJooiBiFTZcuVeiJ8kV9tvNG1GFw5uBU",
  "key25": "5aRNwXKrd9hqcDreo3TkD1UwbCwy7pjjnEo8YJy3xjg3PWQrwqxFadLW7ka9VyJL8aNTJoH3xL63AgCJdxeKrvd9",
  "key26": "4c75Qe7VwsPXCcAaAnZFGSQ2NzPD3TrP6SSwp8KqjHbZSs3rcpcgtNkCgvWrTfohUhW2Y2Ka9CbHHZD7cHPDWQUh",
  "key27": "43MGWTDvjfkR2HP8pGYmEiBWqBeZHqRLswNTGCNKhxi4AAK21gyzaj7UugJoW84LcLMXkMDct7C5hSEx9GANamJT",
  "key28": "62H4sJ2Sswq39jF5PpyY6DgR6Z4pUuTv5CjwRkkgmjoiTsJXuMFr4z2tnkVaMHLcqaMpw1y6r4niqVirwHWXJvpJ"
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
