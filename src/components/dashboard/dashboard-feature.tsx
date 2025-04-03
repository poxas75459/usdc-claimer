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
    "2FQEWoMCL2ggVXkz5UCZMD7uaxSSo1jVy4y4GZJXZm4Rontf1TZBg3oYdqbUcK3biD8wZFwK47A3TQVdWBFFZ9aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S48TjyNKKty9eH86UpYGyJ6AJyMWANGK1DsaTfaSUMXQNSUahVutBzsgvayas1yPQxwG65aiuVMrzXW3UbHZHyT",
  "key1": "5x5qdV4g9z2D2cPs73qAyAdz3QHbcV1d5Yf2yBQeF91VurxQu6pFVRyYYjSGWuXf4MYaomcHByB5V1NojX5J7GWb",
  "key2": "5vS1ap7ABogsSuhjxcYZDjqKA89XDwKqkE1xcrfHjvWHSDcmmtvXc8psTifbqfXDoc5JExpSBtNCFBUr4sffzJmT",
  "key3": "UCUht2cnsRRpxymLXw2CXYBcSVyaA3ebUuiDmrxLZZzQfXKBwJ1cbYzwgotf7tXEn2k9D5nS6xUgniH6HdAycpj",
  "key4": "3gPLddRLY6Dgwc79iKCD1RQVmsaCAAv9oUFNUWTGmQaRYjnKqcbfXU8XGT7WSzza1aCYuKvQtinA2mWqWbzeF1b8",
  "key5": "5qhMjQEi1ZHstVRttLiLZVDd4zuh9dUMo7A5ZdVZigx9KaDCz5DvxZULerBXE5b6ZgfNznQvDxhhK2w4yjEAoS2f",
  "key6": "5pSk7GribguN2YYuKTewjtK8acXGPFP3rvmoC6bs5WRyUXvTpUK9pWpJ6H32o2vEUYxqDP2MwQDu6oqMU9n5M7q2",
  "key7": "4ckgaRBpBkrBmbzyAJGQqUNX4hzbuk4ta83PDgUsB8wvrMm3u82ZvqGkD2AUuSZd1E4btRGkR3u2YjnmYro3FHKR",
  "key8": "3jCaYQnBkLsCcJVuLv8uptkpDeZRrWf8tHeT2yCkpqEv341qK6beeaU1hBBwHSwH6neRGBe5PD8nNhyQtCNQZppj",
  "key9": "5W4pxeo7zCrcKA6xqTzVKUqz1htJzbozA6fxFXPChwypY3oZusdx6uP6vmvzJp3JSeARPxsNjZTf2BSa8xH52pm8",
  "key10": "3xNBxuLkjrCKoQf1x2vX6qk9kXtebzsgCVc1xxJC92G2JMVGr5yevLc54e4f9yGEDzU4c2284q74c3RGtqLUFkSx",
  "key11": "sVnt4ngvKRhLLXSmsYCHUsvnquV5TnTPWzjhbBSFeyicykD6FUhAFZmB5gsY4f79fc3r3ci4zkufDe4W88FxJEJ",
  "key12": "2q6xKdejrECRTNcDYVb3kGW1jwi9CyrQPw8bacBDQe9h3wiriq6NpwxKPLBfXuPwni3yaycckvwpPDR4YFqvzufD",
  "key13": "5WqLqcaiqAJsSrKajWrxLHLP47ywKs8S4wVBcRreCRF36F5KrsJXLoUp2WVxVUTNyqfCWwYB9ijLJYGbUJrgUc3R",
  "key14": "cw1BSnEa1QA2HMrJyfGM8CudzYLhkYqLeXN3VS9Mbg4hH4y6nUAoKf5rFoBqE3dSp9yW4efRYAaxDuupVUDaSgr",
  "key15": "mWU6HHf5rdWT6XSEw4sTEyHi4mDVS4eRsHyKgmPkHftW3JFu2YYugLWm2jqncRGbUHxiTZRNxjp8gvydxFpXFiU",
  "key16": "262zxU8JAXVDsMBzrcmdXRzLYmZ4A3AidcfGv93XJvHx1ga9o9BpgGXKWN4FvuGSo4stMZG5U9NA6BbAou6ntR7D",
  "key17": "bWwy8BjRmHKYh1Vu2hLYXuVrJqwL3vdC3f1tXGXe9TQUX5QU9cawy9sEtm8o5f6cnAVc48cGyJZSkHxndy2aoGT",
  "key18": "3MgBm8jrYxarHhW2nYCu9XpCY6jmMw7eV1GxvDUNr1kwN5VRRJ57E5yn2DYSLwCpDzDGLV3Xm5GrhY6z2J6shEeM",
  "key19": "5t5iaRwJngNiLffSEwNcVrnw8DdwJCVw8LtvcxTtXzGauU3664P5vC2KWYySNrSR4G3KyGr6QC7TH6i6tTf1e2un",
  "key20": "3Zo9Par1HFZDDqoDMogkMSsMPyP2i55FzWegWzZ3EYuRtiYLLUMx6yujAw7WVDJazjWghnZ334aDnUKxvXD8J4qv",
  "key21": "2QjwKD8Bw2G1UiYYRefNGZuL6TU7on11bHJyByFtq1VkAEkuhbY7pEWU74M3bud6nxZ8kdnRngtXsseESDvmU8Ln",
  "key22": "5twkJ3Qg6ab65DpjdC6oF5GKXcTCpMyNiwjjH4ayNHfycYXhtRW6452ApPLFSJSH3kiZ6iXZvik31dr357zrTz3q",
  "key23": "5Y7udCD5qNPorHSVjbZsia8HCykaHPs53VPh4RLmSreoAMYF1aPATDAqp2eCZqvJG2rwchUyNNSCi4HFBE2PmrC4",
  "key24": "5A8CyJWq3Pf2qtV4TFDM6ZosJXY8L8mntg4NAPRTSHApxFk1yGdjEADqsejw4xUjLPBuaBAot1uh4sA7YDBjCPZY"
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
