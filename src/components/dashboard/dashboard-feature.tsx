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
    "2sriUXJnpVb3XvhzBq4tUPe8zt7N5WvCFCm3Kn7kNe6rGd2wGXYnXCD4YcDnzto1kvryhgZvAXGVaffcoTHh5GQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZywqknaTwHAH3M2H3v5NeLtz1tomksogdu7NmoBhvXJi8z9cg3ytnW9e1F8Bap2wBy3isBySCA5JPmea4TfpjRi",
  "key1": "3gwSEUhtyA8hMmT4wfeTojyXMBXX2L4kPbxLiMaNGL6HkigXqMs2Au72zD6gw7sa6SVctcn8XT7NWwTr1UW1DZE9",
  "key2": "prxvurmzWB8aUFeWuneqn7UtSAMttidFBBoS4oe2DJSXX1eHT8NUSStwDtWsWwrdgA6ot3L27q866kbt7qPHowD",
  "key3": "3fRo3vBYfEjqguL1Nvcih2TaGvBNHL3LHKb2Bm6uphtRD3dHRmFaA6Md8rZhca4GbG7nE8u6MmHbab4FWcPrRKFh",
  "key4": "4cKMV6E36EZ1BGpDJ3kjpBpeNARca45vnnAQz1iepFCqg1EJ2LKFE397nkqJSzwhmDjK1rbAE3JH7cdf2Jqy4cA2",
  "key5": "3LdHtTegHPTtvQHGVg2QGxHjpJte7Df8FXcLzr8igfRygEhBxKR9Yx8UE3Mrn5NA53zNJc31fpQmQ2KUiHmaza4X",
  "key6": "2jMAS7stq9EMiSjKFkcnUMYKoPVTuTschVJTfHCQR12GjcDLAUjY3wvvGJVSUjvggRbakWUdwNk3WDvxcJUbP34E",
  "key7": "UFxmNxJ5w8YmHfUeUeBcrjXYFQUfR5Qt2MmyPYQAFKWmWVHEt2DhD4A8DjdUXav6yUWTgWZRSbfiMxhVygmKHQv",
  "key8": "4ji4Ziw7VxrLC22QLtuYkNGuUJhFB3xYwbGUdBwRW4C1sbEauARtL79dCJ816RSpZQKj6RntiSZVdt2Gvr5vgW27",
  "key9": "4cnrzqvWSNQTkPHCDwAtZDv6dNmJYdXAWNQFCuEJMyk9jWHQTtxb4Szat9dm4KKbiK3eEBgRPGbwBKrfym5uTpwa",
  "key10": "4XHivnYRq347ZgEENRj19dHvUNMYAndxiYRxoqgEnFnYkyL7duUK1dkPMJ7vq9T73v5HVEb1Pm7biMyXJoRvKPMT",
  "key11": "5vUaTgaHpGneneWXYRDkNiP81tjM1jnpFp8Bn47nNgVTzBu6SPCQZaHF6saMn1qdh1NrTZxVnunBfZkxuU5VgweP",
  "key12": "364BKWX7aRbCGYoQ7kvWsrUyvBA4k7zsWedNRF5aSwAPmyg4NmvNACkHSsSFzAj7iQqKUVFZsZmh1yf26bMK7w2x",
  "key13": "4uBK9wgqjNw4Ee8GB8tWMztwoK68bkZ4usBioU6FLmUnDKsocSn8LmHvr1HPQxiU9Aq5tQMmJLPXSJQfmNFvsBVQ",
  "key14": "hHpmdawrWYjBS3dMd6i1NPivE8HW1tuxm5oR9dHcUVMLLDR7htLtymxLmkwudeMzLVZ2dRFkTmPDg9ZBnGosgFa",
  "key15": "5EV5EY1QxWG7m74gJbGp3xoMDECmjktssUAirhGuYnSBWMgHEbfmY4bEPePjx1w7Qtmo4cQajdouqNgf2qrrCndj",
  "key16": "4TyV48bz5eMoMW6WunoKrZxUkctGZiqLcimxYpoT4xuGcG6Gt1qYLKsMyQPXmU1BRjeEfvMzRgWqVtwjPbLNfeeW",
  "key17": "5YJNPrBfqA9rJRJuUSCVyyenHAq1XaadQ6kNPTcjY9TsW9VAZPbnJY5caiLqaPPjBPuyU43AZBSFaR4XhVJ9ZgaP",
  "key18": "2Q3W1oBPWVfaMqSAbZqHR9Zm7RAPgQ25Jm9R7sgEpmnZ53KqP2gdRgDgFakdKsrw6tD2FQLjwiuE9gFgrmSSLzab",
  "key19": "5odRsDZyGC2BmTstPndVgBHPbdhmtZYoi4zYDUzr1FtzFvEokSoTim5fcrwhQM2oCPYWtQN3Mq8AVLnQhbRBWtXr",
  "key20": "ZvVGz76aGPzFJpiCqREhqMDwbRdAxDZrDBjKF7tZevsgciXtdFwDEg9kVFRSC56P2uzvqHPQyZkQj4rWbuPc5k9",
  "key21": "24bXFRHbE9DFi1MxBHzELgzRRKPRGgMj2sBimzkq21qJrTcyX5CJijF5etEk6C1ACW4Wha3Uv5JKgLGSX7H1djmC",
  "key22": "5rmvxYqWDnRTL6Lv13N6fxuyjZ8iGWWPgkkaaCoBxMe6KgHstJdtZ2gVryzMcbJPpsBDHHdoLZu8azNNEP9jh4Wt",
  "key23": "5kFjN8Z22LSpUmiDLxCsbraktfHXP5YJotKw1qWcM6JJWB5E5YUwdUeKvgW9AA63D3BXX24tLwcArc4AUdy1oZAk",
  "key24": "2ZCZYKaLvuCL8NUeYno3vsA3TDwjsZ2qnaj56K9hdNxHKFL7GGEujTWyo4TKJeBnrMBaMW7VgAeprJYB89ymfhoY",
  "key25": "phcYChsFzM91B6va3hVh9hpMnYFpfc1CEEZNbBoDc2HTKd22GBceYtaQAQ6evPTBirtsNjxLTVijhKYTkfkAH8o",
  "key26": "4yx2wM3nwuM7PSXcVHAazh1pTJynnDaRx67eRi6nmMx7Uza5qabaXCZDHVemiczBDaFWLuyBKZNt1LxPQYrpsRGt",
  "key27": "2mYJFoPRAb235DwKhLVKgVxrMXy4VVFPEuMP2xdAPdRymZftndBot3rstgbyQ65m1Bkbp9gCYgXWaH3hXPL8ewCF",
  "key28": "3K3Sq21DAK8LYjZFyUKn3ta6uWQUCZjzYGdqCLU9orVqjPAtLSM24ZcP7udEoZsHst7gFjhZhJDLpnStJ6DJcGXU",
  "key29": "3BqKqay5WcqGTXTCZsUQdxmyBFD4Vm8yipmUVvjRVis7SPGVrQLUtsajd6yGNHiwEJB9uYAi1uuSZRZHy8gt6eAF",
  "key30": "ahAWdBZ1FhDZSVFCbkaYcRpCwGT6a9rcHV9N8aW5MPbz6n4PbRj5xs73zxMicDb249mGd11ViVYJ2a6cxwNRNAB"
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
