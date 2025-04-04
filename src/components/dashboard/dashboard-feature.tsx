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
    "4UxMZoT4T1zemk6DMJGqdpZzREA8KEph4W7uhBNJLCytaoWuAN9YcbzWyAMyGJLx7iZWbeRHtx9Akn6cmdbDCbNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCp5FmmaNuyWkBaGd6Fg3joMq6uByGvVam7NMikrHrhVyBzineQB93M5skocgFKUVLRjKbaACitRG9qUTxzkTfo",
  "key1": "63TfWBcnT9fYeqJ1vhfPyahok1cyjVs6ZKXtPGybkhRbVfkGPT2o8RPB4jMAUAPwgtvqWunyP1GE3FWb5qRaWGwR",
  "key2": "4Dd5dJEuk1hXhvcaBLAPTNPKkhGMu1VLHdSjQBPfXXpgQfR5JAm6WiebBBjnFDEMGb9H2LAwtwj7sJv525GR92co",
  "key3": "4CeihsDax5yiwjccXZuxwzrnEDCinmULoDuwf6fGrhAekvvwNLwgbu3E7rjEjZfrUCB1gmiBXy9jhJNRWPXjjHrR",
  "key4": "4fqFRiv6ZzJitfTStFBzdJGWM4BrY9ZHvCm7dvFDWR2fVufSh9E624cX6Ygaz4fFWDsf4wNVLexCDRBGE1KhokpD",
  "key5": "5JQMjsfzKaX6RHH1YLHD2kTxw8xijZvnApKsPQotfiygDLFA7PWxrffLTGcYK2NZdfUNSDkwyNQPXFiuDdRgL8Q7",
  "key6": "3HnZ7JobroF9obQmqHK4ieRcWWuPNT8saJyTSym5VN1QrPJtXFV8q89JT4p5ERtUHwY2QHWWB7WKob7GSzpzBLjh",
  "key7": "4HDFd5vR7YyMpeYr6LxxwwcyHLJ7CLmJaMaFjdMbCPn5zh8f4kzdWJ1mihxP3EMwkBXqjWTMco4VhmZLcE23ucm6",
  "key8": "4mB2tx5uGWHKtM6jV7qjZFcJtJVUMZR9i4Zv8Dhwebu23M4MeVMHfgJW3me77vVp5JTLsStR6b1f5FyCAdQaRUar",
  "key9": "3Ho57AvSL7YQUjff9CDCGPMELbJy3fb59UMLbLhMMcd1RXM5CnKy4w5aAMiKTL9aYE3JuwzLLFo5sNACZA1jozMJ",
  "key10": "4YHo3G1aC7QwxJLHfz5TJPccWVaA2vp5wSmcqq95N7vzLNtd9hLS3SghjRpeY1ajLbRBSRcJ6LyKxHVENqMCgLmV",
  "key11": "25Zo1KxnCR3xygJvGYhknqwY8Y9bGhRGJyoV5TotcJFH2fRyNBBDQZrw1AA7YxwUpRck1eYgyE9xNcjbktrtxaed",
  "key12": "4UjkxBjKRCGanf6mgso7gUzgppdcKJVJYNt9VGZNfDQxhhxSYQVrSTL9u5o8Hd2h7Nka234zkv1D5AAfETNEyda4",
  "key13": "4tML37fBWZhh6ccKwXmit2BKqsFefDSy5RV6APYWrBM9Dfp3yvyn21CdWgXsUGHoHMVSev4jsmjCVX5kcwdcJ513",
  "key14": "4zxoqa2h6jMGwMHSUhrCoxJvuVuwA3iPJ6CHaRZoxixk1f8mXZc18gf6toqd7Syd6tJ3gtDtpF4WATTb2mGPuKBm",
  "key15": "2AbVRJibMgwpf1AzxAWSgRuoVDPpDxQhH388oo7WqXQvphktJWc2VuY6R6VoF3gzCDDqRdf1kXViDGExgPS9PR58",
  "key16": "4kZFiq71YGPEt5ireHiYqUv1yXhAyVxegEosJ4prHAjW16spEGq45cPkpJqWmMpEsrdL96YFcf6jqKBYi3hVuHaM",
  "key17": "4nerqnuiEYk35gWsQiUXEybjwbszsYHh5LEKZMeqSfpAotsT79GAjgE4rsMerFmKRLeP6YXTKqF4ML3ZnytnSV3N",
  "key18": "4u7XwiW6hba9uDks1mnKmjRDCeczw282vPCKf5nLmWpKy4EgU4aibYKFrNpP6FkndpmZD9oZSHGPah9ALdNtZBRA",
  "key19": "5saQmRgWTJ1cZ2Wy8PHq3zQ7THPErKX5UKSS9Xa5Yx4Jx2N75LbDvuhWPKKMnMdHjCKnZJysC4F7yhCtrGxNGXzv",
  "key20": "3TDQrssQK3H37ike7QgGtYooERG3GafCZSp3SU5ez7qvshDSuS4WGWVBDEGLmctzSn1buYiVznn26NmVWtkMehp3",
  "key21": "4yASsDyS3UG9dnqHxcUfC9nmWxfMaJTrTV9DeJnwFwQup5uNmGLdaXWK9yrATrf1NEe9BcJPA4EduTvqf5cvvHpK",
  "key22": "2RgnqLyn8E9iBemNBayv1MoEs7b7MUKZ4C8AZmskmcTnzQLKkwQ6HY2wjtqyEsbk1mKa5139pceCyoPxzN3QsDMR",
  "key23": "3V91rggyvDDUxKEB4aeffvcru2FEsgtfUFWCYJLsfqrXagTB1LvfohYabNjdQi7y22TjK9bSuWkzkW9vL2bbU14h",
  "key24": "36jwBasHxYx5RiCTJmNUqdAByicK2sZY5fCQzhLwmPgQSm3CG529kboyMmcPwETHg3PDQSnBLjw5F15B2BkSP2au",
  "key25": "217b9LA3N64aizrACheWkcnAh2GnvoaFPEGPFTbeYnQaffHwysy7v9rK2A9qvXhmGmV5B4ohbJ91gHjVxvQcf1em",
  "key26": "qeGRmKPAqDzpnPrp3WCGQECtSDYFXCFm8TCrVSt9cd6RAMzKJJegSiKWJ5YcHuLZPVXCg2x1Xms6zbvdbppdvFG",
  "key27": "4ooPEP5gzrtnJcjuRi4eteDPHNubpdNGVZtYTaDqQ6NiXhSupf8x9nCwHqkNMwHWLRstAyQVyHqGxXoYCZjDAX1n",
  "key28": "2aW28nJ3TEkvK5yoCvkCXH9JkwZ4rKjr6idFmsLzrQR5HGJwCX3W9SfbUEGqSASp9QBDDbxboQ6og6yJL1VQm4kK",
  "key29": "2zP1pnXg3ZaH36hRYxVWfdnH8ArbJfGDtezFsrWfyKwSzEw5ZitPUBoMXfBRfAJw5s5Lgn66EhWXDN7s6ZK1FWun",
  "key30": "3eZKp9GmndRtTvB43kdmMuxu9vthBN4etM5G7tqE9Ka9EQwWjZ6e4P4V2ivTNKhuZBiKmD5Spo8MYS7xdFdSPwEM",
  "key31": "2HPPrXt71qWCfYao3c8qDnQBSGx6ZCCPi2r3zj3JLV1L9AeRWKwjWpKrYQXAaTseG5qsb57EMZcz8m7eXDrZKVPx",
  "key32": "5QhZ1iNn46Jrkizk66K7mJBqdxFaoJFWbUGaDDbTzMJftb897o8bXbrxLGAJWXmNbvyyNRmYw9rqVsrgAyF3JNYh",
  "key33": "4HSXoTbH61JtfryxuHXLzUmpLdEjcBd91z6DkTRyWym1yTbVBuD8L4tcCSut2G6QeDMc9RZsYo4bu6aVbLuSaRLo",
  "key34": "56Z49SKGD9s2UTy7BjZTcZU1iRRAXo8NxWRPy8cN2RZubxR4wby596kZorCk6QyBLotsagwbehD8XLjgXh7ugwfV",
  "key35": "5zWsQEJJNn8GACdiV2GZt5brJcyTVvkWD64mtd8JTMkNPnVvESQUeQxVKY8xJPP78jsUKBJ2LaxHQdQxehLutnaM"
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
