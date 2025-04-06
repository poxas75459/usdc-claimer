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
    "5KvqinTf7iVWyCxkT5viUum1MBQK2nyq6WCQT7tfm4ALNmfebsL5m2PCHxEcx8aQw6DoG4vqBTaS84jDs4M5xhUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M8PqU9v5GoxonCdFsYmcpwrUuNt2nZXdgiurWLMLPcej62rFw7ojSmGuGbuveVYcH3kwK68wnQz6zXqWr2pAcWp",
  "key1": "wsUJyvhwtUJdihyvMZ3q78weRNMZzmL9LD43KWAWKf5bL6hEQR3xm3CJFaEDa2NEsaFQspEiaYMb4RQfP1XWMb9",
  "key2": "3qtgsgKejf3H6Gdt6tZgpezpyhVm4JA37gsLSf5vQhP5m26V6c4oH4z2iCzv7X3nqF8r4DmubiiPT8dNZTC6ZAVM",
  "key3": "5hVJuBNA4bSiwsw5yYKaDbhqU5xMXUTKbAfiGEwa9WmS2NX8TVcK7ccXzWZ44qtokftstfbQyH95hm6ZtBb3djQY",
  "key4": "3gvPfnjLRBBArWYAqnSiwfsGunFejh3QeJzRQ6TdvESsk4fATd1dicZQT4WBHVrSyx3QHWp5sm87r7WyuQGYnmEG",
  "key5": "4vFyz3aG9iEYgpQTS8JDP2DxAcZDDUoWXCf1W6XvGiWoLGrHxK63zLA2MZaFxsJGXSt2TDW8Ba9pp42oRG3GELgQ",
  "key6": "2TTSoXjQTqYFRp3Bo3mQTdPCuv1sq3VzMA3nTHDvqGRPomh4DSux2djqtRqwJFtvTh68bXk4mf3c3AbZaeYhc2dw",
  "key7": "XHEfGYJ1xapsMo49VtDmrQvUE3RLEWmYZEeqRGwwcuhwYKkgqDacBrpvMnUy94mAeyJoTCey615nQhq3kg2Gjwx",
  "key8": "4uxKDFNkxFUcjJWQMYV6mY8JrWDq45CRfLNrVeDd5iSf7mnVLkmdLMba5DcXRXd9mEUPxrBtXhq2k6djo4H928v4",
  "key9": "ZgwDDgGxvzwDp5WzYvYqFpnuAmqtNyAy3cuxjtAgHrzeu5Hn946EW5mH6ZqXAwcS52XqP4eNQWJZrg86sq8iHgg",
  "key10": "5gfFGS4EwJ5Lynhs4RruEjzVLK3RfuUrDXRbJqCcAP8X6zNUh3WbvrJVGQ8D4Gj5PwgTodmG532TpgP3q17JRrBv",
  "key11": "563nxhEy9rVQ2yCXucPM1vytCa9ppqhEmusdcavfQjomYDSXEHR1yoS9GcZKr18rhTgHiZkYM78wtFNtvZx3Q8JN",
  "key12": "5XssjvHzDBjsD4SVcJ6wYx231mWcoX9GPVKAV65KJqWmk8DwYvTuZybv1iFugn9SWeYutoHeQzPMmLECfSA45a4T",
  "key13": "LUxzSj2SSaeHaQwc4ZmoNoPuEwFG8z56zgiqKk8i44fSx2e4P2DdJjPKW9T7jbfQAeZf6aHZ1KbJDiu3tGBX5fc",
  "key14": "5qDJSETLGk671GYBz5JimYBhG9DGAq9WbkPthDcwWnfXgdFCNPntnwhtgUfn3Ufe98K7ibyhvuBMjtVTq4WpXyKT",
  "key15": "2A8hS8G6ekCT3c5JEot7WX1q9QaiEojRZYPVwR3EWoS5mTofxHGqpRSNu3tLFea7vTjJ9kdpaXFRuofaoRfDVTFD",
  "key16": "4YG26CEbN3kE5qGmpwKCFUb2hHVEtdPaETZKdUMifCXPZmZAD8CvskJ9rfAtGmDodnNcwdKkNGKbB8EEPWY1QQ2J",
  "key17": "2UNifLx8EuQ9Wp6WQDqNF81xWiUzFLM3sxuqdJimLR4SZ7rtqhWtmyytfvpoeCs4qLmvPMansRsrcauQVsBY52nz",
  "key18": "5nMZHDL7UvXtZ2SviichNkCoMK9VV55XfzTuaLimKvpXCG5jrPkHBbq1uQu22TRcGTDgRu2hCHGLvUYFemCeYQBb",
  "key19": "5PdvtjA5YrqU9qZ8U5aFiFSLEri8vDPH2XiN5GST9wZsRQEEo7FKAKFNMPMLDjE4u5un6xytdpNEg1h885JJoorZ",
  "key20": "22AeCtxgkodA1TUBJe23pKSyPCuN5ML4LRdU1hymBuiYJU6izndkTwbNUdF8NjbyhGboQt4pkRpM7rLy2h4o5Ric",
  "key21": "aZEhdiDjwq5nUj7H1anyZZzhCQtGszgCix2p9vkEQarJ94SgsvPr7fQqB9V9sD4gGyRskGLiWeximoBev6hhRfG",
  "key22": "4PPB4dYkWMTWv7s4pomjCjcGtwV7oWiiYFBV1AfsgtZUnc8nEq2j6R5pPJTTzhJBRJJeX6BxxzzHo8zmGfFseZSZ",
  "key23": "4GDCdL1VPT7CFEGPobRXkA4c6s5AJFBzAWb6YSjy36Gucaabq16p9Ar8Ht5MHa7DHJrM5aF9mjgRw2dAMQvpQMVK",
  "key24": "jBWMxhM5CENJbW9GuLRn5P5y8tLxvt3QbCZvD1wr2MRMNbV1UhyMDhkLKXc55YYs57V6mP4xbqdxSNyE8hJoKP4",
  "key25": "41oq17yg49m7EGwrZ83crwbw28vuTbAzc8GcpF9F7JFuGhrbH9NmAPAS5N8qLmpY1n2tPe2YtFraoJhpCoqiH6ra"
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
