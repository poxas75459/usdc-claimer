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
    "FLfjDzEr5VXEnKxivutwQbTC8u5AuH53vjDdtpvgELdVy8D3QU5vsBViSAWsp5rQT6T4uP2hShmnLFCBSKFRMCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iw7Xc7EQekfjRRrUm6bKzPYabj1AMj97V2ESFKm5kYPBjGfktdGNEVnJRM5aMswB5RtVAKRS7omvELdz7CnUEHr",
  "key1": "67RAwBQKCGJEqi4VCtxnYwcgfkRPsCHx4FPenvMd4cBLt7JehGpsfCJc2Qf9nN6iLKfdnHb9FJMfN8TReqFSFx9w",
  "key2": "2KhHcGhUwG3gbRSR7mixETWDu4y6KtfRQsStMeRv4NACG7GyBUcFs6i5gBbv779tpMbJ44BGS5ivUjcZs7EjVf6s",
  "key3": "2P6rrqYLdPZBqdBq2xAFJrbNE2UtMpxPTosg9RNWVCizYPwqdVzy1HY3HNm6YqZYw2C8tzWH2nkq2QWt5eZxGsHz",
  "key4": "2iR4XacBDre8XB118wJN9ZaGjRvRNtM7eHw6ZDWKzGjjBARydok2aELhBi1mHnWW5at5KNr9kEZ2YMghbNVoY8XG",
  "key5": "2KybXimdTYZfrY1NgGS2oUgGZU24sFMMdwJXRQYDEv51aHAULtUgrBbrXaKXJuaTJRh6fytiEWbUt5LQkGBNZkVX",
  "key6": "4LGjP8nFkiHkV4h3koRr6sUbCpNXikZkc1B69d84k53f3sDYiKRqwEFm6f8FFxVHp86UyiaoE8r7VrSodtvB9YBs",
  "key7": "3SBC6ddnt5QYBBPZbgumDbsMGepYVuetyrpaG3vB4v63yLA6EnYt75D5AY6jkWtLaKwkfkYqWAzLHWQrHaAzpgUz",
  "key8": "26LFqMMKijFJPyfcovdKTFBMZRTq8t6bDb7ZRgpi8yzEaERpEEQ8k89fxAQCkKA95dYBG6euMNXjK6YMBWfm3DZS",
  "key9": "4CsCCTKdt9TqfTAZVgGp5ntpMZjssAEtnzwDDvGAkJmcR8jcmEGJtHPLHz8aoD2ycVaN2A9N5fX3MAd21kwgNgEJ",
  "key10": "2VVxB7tXdwGsj5VyA3ZrPWxtVeB4njEDrjNxwd1r85CgFG4Dc5ZfwXh1aDByzzy9e2QYRgJnPhTZ5Ewr7De3Ucwi",
  "key11": "3RntAtcCUKgKA7aKXpB3vmCZngXumVnHgJwZTacQwDxoYs28e8PacxRhxj7LTcpd4eR2N9cFArzEncvquYDZc2a5",
  "key12": "dpZnFsv6id2bjaBTwDYTrGxRbnzkQkMtQ91KVZb71829wBDCJQuccqgqVHyhnWih5AH8ZdzMboBHZukZcxdqFVu",
  "key13": "Gem5SF3QExN6WF2SzFAu5H7iopU1shDzquz3ASLCjVXCV8bkmcmi9nKamNccbKZ7UkFaAJkwNKmXBmd2aUm3i7n",
  "key14": "5v3eJsJjAxm3Jpwoztn3h96MTzT5TD6NwMmbymFjeV9y5u3QvvUjByKXp4bibEpMpRmNQ3fTDRRqdzo4PcqnQZCJ",
  "key15": "67BoGgJxYfMF3tLN1ahEfPEhbtwwh3NW3wcDmA7nkyTf6z7b7enCUEDNo6MfBsbYU2WoKQad9v2vt11gaMhiCMxH",
  "key16": "44EKa9CxXuGk1SVFghDzvrzYM1C8nEZsXkYZ3K1AeGXniQeC9MPRxaVUbiFG7RNiom3v69Wa5BQsr67iUN3bD4mp",
  "key17": "4LkhmSGEgMmC6P3D4aNtqGnNzgtvcKub2mGMhJqCQ3rXVr4HVmaF7YLoha7L4KgPYsJfMkDJ1wnxPRgdwUgzfoJU",
  "key18": "VwMamz54QU3WcjJ3LtwZYixJ4iACkjJ1C3A7nwgBGExJGfseqhHiPheYFPfKVKVtLwrnNJKu67cfc8112aj4zMh",
  "key19": "2ufr5a5EmmqvBbbg16ra7ZWr4aCMhp8UCRxhMAYQ4sLrMQfm8bmnzatLpmpZpgHW8yvQ3dgYzVNYJM4gKhz6cJyp",
  "key20": "43GGWeey66nkRALqH3GEYhQ6esjYc4tWyFdhSMCE15Bx35koNeEBhxezUiVDh1SJ7AAcG9yzZuZ4W2wfZntvbU9Q",
  "key21": "5WYxFw6ADGbnqsYFcn8GizsULTh3mkGwVodY7oFRLQFbX9RuWbcSeKCENpnjxtquMBmE6cybGJRxmXTYp7W4EKN2",
  "key22": "2ScP7VERgfpefMNCV2MwStUoQ827tYsDSRwXde9n7h4vjVQSyXEdSAvs4kZsaNSm8WKs3HSS356y31DJQh2BebW",
  "key23": "myMS78YJdaNjNNcaj2FmS3gHbEcxkkLVywLMxWZBpzs3xZLdmuVTgZyrVfbY1j13BbPktDj8UPscQbGUDoqexyU",
  "key24": "9yHzVqvupD72s9SY65hUGwdJfAsTjG8Ho2samtxaZtfEHPFudEVThhEmuMbARm4SUyuptj5wCDGU7ifKcvEmtop",
  "key25": "4KbhPoaK6AetsfFQfMYg7JEqJzsZnwGcSwykN6TnBVTx81XDD4VQ1KqkU4gRjrBdQ2QWSkQkdaDwHPjz1CkFLgx3",
  "key26": "4HNzRh29cm3d6rPMf8CRe1QyVpfmDB7X66xHUbLq4tRmxnqcgYKGN4DT5S2qekQYPo8eV31EWmC5RD5A28uoFNMv",
  "key27": "4kRNUHf7qQmkKL8NVJx1PbWTameh5ZbPFXimR9XdbWZKgzgnCrRzyCe78tMLKnNtuncvQ5U9jgpXRr64PzJcc2U9"
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
