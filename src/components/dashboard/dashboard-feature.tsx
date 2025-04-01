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
    "2igvWw7MqqVUHpQoMUMFgzFc1yJmc65bLabuaXDYkqZFK9bh3mA5Zhzbi6yu8RGk7UmgGqpEDHV83wBcQbDXFiUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6FnLqdJsuemibMuPFKJTyYfCGo26Bgj6G2QPKrpn6ygK1WXeEbNzRGeftm9otCp4usWouiuF1BgqY6WhGBLc5bg",
  "key1": "CDHeQWvZam5HQxdntgaHmm7pxJQTpFdRS8NhK68hNW8wCBBSHi5Z9CPrvxPRNof71aHhBfBdd22TK1utF4i33F7",
  "key2": "5LVfrMrrC4uFUpeW59u2RSfMyTJxLKiUa6pb3ZVDVyTgF5JLzdvebBrb9EvRPbN8iYmN1QW8Lg21o8cn6UQQvCfD",
  "key3": "4KQvcueMdpeus7CQCKM4eo6sceZQV9V5ck9y7Q9V5cbnYhj3xKNNAFci2k4ab1opFhEzoFgEuFk2v926obkA9J3c",
  "key4": "2x1zkb1JKsMHwzF9HC3QfyP2rhFJBNYoETdJia9TXjf1bxCQvrpXLwc7Wb3BzannUu7cYtup7GC54QFW1L14ERoB",
  "key5": "2gotWXWM6HSMGJwgKdhppsK2ZRdz6wBhtZJF2NKJ6EdvPP4QHC4X8uxdWN8GnwfvSKvey9ZdQ23QutEZAJcJA2RQ",
  "key6": "32EM8CzKVcQVyTq27G38tMCvNhZiJtyeotddZVyBzWh22dwDKUkNqAtAnDGPDbdkcCXYMUxae5mV9rErBUDGYt3T",
  "key7": "2kJd6MjdZd8xH3JMDJJZwcKLrKYtjS9b7T8Fi9e1cQDMgo4CG3xwaknm5EJ96KYDF2EAgEaASP6CQR1wd6Qi8ogD",
  "key8": "2HrnKPaqHmEcmfWSyrUG8HpmJGdMNWzKy6kmEM7bfohUyFH6gy12wU7oskhQnuxyjJX9DAeXDDPkSfe24UR4a4f5",
  "key9": "5wC6MESNX53nqF1Pj7rUsG2BtS9UM3MqSWYSDNL96QNMJxLs1cU4cdYiDHehiMUmmesPyxfJCUZStGAeetUrZAJB",
  "key10": "2ygy1AVQ4nx9RtHJKZzPzaRd4cHmuYNJiVemBVUdqiScBz3wmyAstf9Zf2TCQytsE693pUvU7iRUA5ufUHZUBNjA",
  "key11": "3DomfHt4eBE1mYL2Xg6ScyiCPb7o1bQMJ6zi33kimZgLokHWEQvK4fHDShD37YbaMDWEWPt1wGGq6QhHCsChBoci",
  "key12": "5zTRDxc9w58jfrP3bMtoGNwBQomJNWsJ4hyAWQXUMERFMFghY6RkVTafiUcAxQFYQ6Nnugp98rSMiVnhvZyjWh4Q",
  "key13": "5ZLsVRJujfariNG3K2WMbTeMJkEQW5mHtbaKjroxPrPEsy9yyufnDMhA7qmHxQrjsH7gCuzZ4HKFbrgwTXPCUdNz",
  "key14": "5LziMy6VpHpuzcf6i5dFzY9iX8EmMMfnUnrYpbfzMfbYaYs9EqBdzX4dyinZbRyMunDSAMBXDeCxWUkv9evFRkRS",
  "key15": "5ur5KBZoJSRWswQgdo9tkcFw1Mpjr4PhTLz87TNXLbnJ4AmRi549i34EjF4brr6Xxg8iVyoasY4EVgia32tnQqz9",
  "key16": "2J4KDZjWM44Akw5xPEoMXcXVVJ9bHnWkscU9zFExQtiqk1ncacftMqVTimuEGWJBckZ6kQdMzrHC9W8DvFtni853",
  "key17": "5LeMr2HtBFFMA2dg6bPFWmUebufit6FBLEwxzSKuWQXaEuYsz8TDqxhDiYXw7ewxpnFymtGua95TZNfq8TnrTNQV",
  "key18": "4nbqCtPMegiT4ZNe9jvYncR4tGbPvUXW8bQLkXtkp6a45BuUzk5B8UraRBzaw2pRvQ2ykmLxVZo3z2zJ5HJTvnd8",
  "key19": "2cth1TemCDTT5daFZSe9gb3xASTYjg1tJL64tWCrV9wJbxZxqkoy3sK4qonexQosTwL7rKceED8vHkKBjfn4Wpyc",
  "key20": "5874b9KyGAHGKGzAki4AM3ss9Xjthn6GHkLVWyYtMoDybafoJrEvoHXKSPmPWzPkXJ2be3nyUt9Rq1Poico3jqmq",
  "key21": "3S5JUMmJocdsVQBubu9Tz5m8cwKc4mmHJBGbeW34wHJu4wzFkixt7wCKi6xwMLUViS32RCsYEfrTcoUzemQA4SNe",
  "key22": "4DxRNW9w3khMM8qQFFeKVVMRKXwXkWNCUgNoeTRWQ2J46LzGSQRJo4DThZ4BN358hoQ1WphApoNnRp3jmNLbKNDZ",
  "key23": "2hsvm2WM87oYaJYuLLBS6XVQSwL92yg5LzajSTcwDexmoqLGnAaYtzYpefUPXAT75H31PLGAec3E51z1bm8bZUEX",
  "key24": "1mRVqS3Xi12GXBLtbTBsXKqLiC3mDf8rdXCrGz44g1mjdrRrgKF1Kkcw59GQXaRPuTJ86aDwYjVMAKWkxL3iPqj",
  "key25": "5eyzNKEdykiVpZKRtaMizDZmVgyej3Xtkp7f7prKqqZmr3r3zwNQ4J9rQtksC7sdnz1AZ8NAEsjS3vbSDW29hZSV",
  "key26": "5jgunWd8UTrzWdqnXUMLLPW6Ag9DzZpygT256waM1BMDJUJAjo9Lm8kQUhnmgK2bXz7C3weXVaYXzHtyZvxKAi6T",
  "key27": "Bg56DQKqKRu7rYPbrRtaeu79G9zuEh6HdR1dnTjyKRrZ5BMEZUEA7FpQiQX9amX5pyJ2kX9cbaNFsjsczRMum6J",
  "key28": "57gcMvsZeGAdGNLQUrWhVxUyddzcYjkwAdw9GuiPAZvgutbDzx9dTziyKf5fDwsNVqpKgwvii8YHmsfT15Wo2x74"
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
