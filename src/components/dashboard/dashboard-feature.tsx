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
    "5WNGK3ZA2sSoKvFLoXvtYaPSE31HMq2v2p9VpmjNrhUyuhuRf1HhZ4JsVknfpJ9rybGuF5A8YvtA48osDS3SRue9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VAiLjsFQgiXETQTGx7FUmuC5nZnCww6beVpht7anJUd96sqibdLtjpk2BmRQ5gntFxBJGPbdM2phAQtj5HN4Vpp",
  "key1": "4tgBCsAKSHnoZm1X1oJZY1qqzqfLA9tiv1zSe86HbdTdRSwCskh4d3yQK5MYYuyTdnqaqtQis2Fw62gfdnBKxC9K",
  "key2": "PjkTnh9ERuKGd8HLvy72dSp9cYxVbkNp6WRZZZH9VpH4so6cPSmfsSwwsQGhoR82uSEBHkwEuZ2KjCwgAde7U5m",
  "key3": "3UWPsAq7TWnTZbPiqcDtFPoAiRfLVnbJ9aNdz7ddvXsn2Cp6zWgg9w5C645S8uUG2MX4dWs4pa79WqcyGwfhsA1L",
  "key4": "5fhFsvYJ3pcBbq3mDmJ8Ji8JhUjmCeeQGLLLFRqXW3XrPAPHMkxmmVyFWwv9utjAdUQMoW5ardzNheoVB3crVAQA",
  "key5": "2G6LMYtCBQWo8hNyqffieoBVMsc7D54KKfMsJuWrdBMrtctZgAuVekoCEYvkRFWNPocw4MTTsBgmRAfiENmdJ388",
  "key6": "2zEELHP2YYHo8yu53uP1dgsT3nPXy8Ftc8d956SrDeZAD2Jzd13GSs4z26jHLSNXyrgdznAVveY3BHFz2v7tVWeX",
  "key7": "4ozYT8RRfJrGXW3KWpfmstKoiPjhBZB936otdNxLBFhpKZukSJAB5jb6apQs6eUTaRDzf6xdc731yLF6Ei4n61VS",
  "key8": "3uRh94PPs5EHQD46mdehQ6FBVAGBTSbE9gG65LUNQzYdjc2RqX4qBJVb5pETRHUsnsefwM8ZHbJvr2uEXKwsy8PP",
  "key9": "3nNrgoMHQMUTyaNyhbCeGN1EhgtgyEgAKmG4JmEHf8TaqSkTYXQEHT9hMndw1E9rxt65WWNzva7yYxnCSWYVtpiF",
  "key10": "5Ak3zT8MbRfdsA98mYJhivgTytCWNY7Xo9kvMhCsj9Vb2y9vrxSCgxsyFk6NMz2579cwxNERPGBDu8FxTgiAcoMo",
  "key11": "47qPmzdGwx3KKdKM5DxsRemSCoHhynjWfcY5kQUrrjLxJmM7bqVeyrnnQdZ5KZLDzc3MYvpEbUG73Ju5pnJfMzGR",
  "key12": "2QFLDHWwchVvrrRZK9V2h6XCKVHN8epK9N3bLqT5J7BKNUkomSkCvyfTSCQMzKdx7gUbyPRr2wy5bi4C9UzAsiwN",
  "key13": "3aGbwq5sQh3xDfYk7KBN9od2bR2Bqa1gbuRkSLPLXZWtNzKJy8gLMiR8GLKFM625KxS2okZX35WjTLQrKQWsLob8",
  "key14": "549SyWYEqUQzkMTUwG2DEaEhSofhNh3a3Yc1zop4aTYJM7QYftDm8KRnj2fCADZrX3HVWbSWuaoybsv5fk7gBVCM",
  "key15": "2mxgHZ4DsvC9h4zBKp78U93uSersi1B5vekGaTvFEHyepaXiAN3AnDK5PNTptHwF9GWaVFfpNihk9cy1yxPHrrxq",
  "key16": "jCQ6f7h5XkWeJJY5jHVPmx1R9KhAJ9pN5vL6hMvJq94sydPkh7EYBJvNfJNkY7tkzbBXjjeAeS8LVZz6Ck7eye7",
  "key17": "4SXowL1Qj9sPwP1CXyyWyDN9eMWwZad88ebz1TN4ns4j4MZtcRFcHBBgHRzG89CanXgwrKmTZJhwuo58NDUY2din",
  "key18": "oVeW7DextebyWmWy1m1GcMKPZVAwjYVDNxt1SAGpAQ3vrAi9nchCPhN4euLqLGz7Epg5Jg6J7gpFXYtEgcN8kTv",
  "key19": "2t6p8WeC3oFUQTo2ReX73ktTKAxbV4H275rGXBJGhFTGMUszRG6JE3hFN5umF8TguHbC4Bq7KirG4n6MhDSqhQpn",
  "key20": "webPfDjAn4B3u9QhMj61tTuY3aJCzEqM5g4LMfBjtbRDnvAmainsPcnryPDXHZuqeXoKbpmE53bncEnGaVUbzJj",
  "key21": "66VwduNigsFHFVhPbwfZCrjjMS95nVXiE76sC4PaHj4pmTaW6nftxN573uRT25HRwj11sVfgEpNox6go9z1vSgUZ",
  "key22": "44F1dGqvmjr633PJQZwteyJp7S235T8K6CsF5ydQP7oCZCo1Ve1cj35UCwt8xbxPmF1YtrSAjdhnUirZ7pXNyMTQ",
  "key23": "55TrxdzyjtEXmBprofYTkq4nThFkX14RBej3rq5vXGSks8q3v5z6rRA6M44MEbf7Z95KQzsX2kToDU9Nm836nZ66",
  "key24": "FkfR9STHCwySubFNgZ8mNYaZ9R2DHkNKPfsomFNiVsrjMgKsFzWnGqddkFtWwERpx4VH5qdfUVveLHtppzLuVH1",
  "key25": "5XLUKjzdUxAnNNPgKAdPYZrr4dgcFnozYSTstP45woqmtmCD9y3e9XEYnHozcFQpzKWPYtZjn2PomWgSscJTygQM",
  "key26": "3yiGX6qrRTaxiNVjoWZ6kUWzTgVr3DVjZnVfj5wP1hNNbKwBHZ8t5YqurZm7h3Go2Fvn3hRkhdXcaVZxVN3ifrEx",
  "key27": "2fL8vxAXUBEWK2GzPc4jnwPUr4BAa8gmVv1Niu7etvBftZJ6vxMfGbrfG48YpXn9BYCHyZAF2zknKYBgiUtVeRdy"
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
