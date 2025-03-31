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
    "5dzG2uWgXaiRTdvgfwrZRVr5hVwFZLwcZJrgj3seZjJcZnW3Ke3nTNPP9CxSxBckzJ3wZKW1nKV5FkgyPhXKgEzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ifuARgGbPbXrg1tzQH6vQZJoGkWiENXstngokG5BsLyRQW38jJKGgS5hXGKj6PNkg6XPP6ZJ6JNNBUq23Xj9g7",
  "key1": "2nYtNGGpQs32AeXAf9NbNMAm1tGjuwWoGQQtfmewUCUV6f67tMqxbv4WPLZLLHt2ZRwEFtRgscQ282KPBTtdTwXL",
  "key2": "22g9upG1fabAQ9sYPdXL99FYnpxkNsgonrWMSUjLDhf92tJQZe8bS54KSWUUZVDMppjfJVM5uKqbCUMDu8kiHUS4",
  "key3": "2wgNgejuw6n47TwpXN3vUrF5eGkWB7FUkabARutUdd4jXgVuoKRYAvHEVLprDEXmKHbs7CcogHyZBbAgVD24zdKj",
  "key4": "zg7QgYs5PceLu4WPwyvik5mTAVbAPbZ8zJgiMeygfWUPsrXRFGE6SxkV6hw1F1r4FgWMcz3JSbN8g4gB72gsmqS",
  "key5": "5Yh47YSQg4nDcdhHq6epwUAE8iKDuBdbiz1wUw7F6QjixmKwyUJLM66qJd1qJ7q1vk3QWmmnfeGtNUv37zDYMcsk",
  "key6": "bsQQtKk6u4oNkAYcDvDiHb6oQLxKsMd9BNzSBvvfYSWtnt7LjPkhzWHWxnqrL1tNbdhQuL5NC6zqdLnWKXhgoNZ",
  "key7": "2R513SUcXYWAqvPUZdD1XhaHkNN5RKEeAGHzRsxZZm73GzFcbH5V4mpHkif89KSsbRwBtbFnCGMj749ZZZvzCDej",
  "key8": "mZRuUkqiJLL1Qp9kqiPTxvfb2BaR79oKLgnSG9tWQHoLa3XkLCmrpHnpuN9CBogSHc6PH3kzWiAHsSoXxZD6aoC",
  "key9": "4j4R4mQp6UnY7aQsUgxe5nGPb4BNB9GPaAXJXGLEnLLzkpUki7eyiqEeXVdCMqLuWq4Enqi6iF3oUC5TrYSeECgv",
  "key10": "4Ld5vEPyQWmUA8HJiaQHqCLQeRBYswGcGpR2AJ8ZKWzJrNiT1LDGyPjixLCE3KwMTzKeeSKRdJtbaCxouWqATDPi",
  "key11": "Kzxg1yeUZp5pgC2sBvHNYEfArU6fm4deYXoXAPSUgZVMTHYVpTu3EYwrNkXpWtbpZ9qTWZuk9PehvbbJnUGjhoN",
  "key12": "3hdVmMcMN52cTtqEGzgpUJH1QUBxt8hLuphxdZUakLFTUxH76H5nLA7BYoNjSiivhCAeAowJ3kEiYGpdRjB8H5vh",
  "key13": "37mLAM8nMnAY3wLRkzhFXgqPsZ3JnSF2vhuCBjFNiUsXbqniWzEQo2sAne44PhU7xEs4xFumiDqgmTYGCHhvq4Kf",
  "key14": "2739svSjvcwVxh8rYa26py9ahbpXUhc7zErP9pJUhxSp39YKN2WNTipwrsU27S3QpsncZBrmDQGQ38ojg6hEXvWS",
  "key15": "2R1Qw4UKbw2P53nLej4eucWD5qseASBp1N2M2f1PoPdzn4omzMCu55jxvu6xCXjUX4SHoCQcxPTj2AkPvEoRWLLn",
  "key16": "4J74fJnUwaPqtswqEqvmA6E8YV2yyLLyg9iZZunLK7ETvDq4jppUhJP5fV2YaBWrwbxPLE63XzahMeafBfkk9Yd8",
  "key17": "2xvRJDsQc4DZutwBp7734anfnRwsZ7Ybx1R9V77B9k8ijANvKWJC9GoiDzgcdpesJFdmTm7Kh8GdEET1dEpDSsYG",
  "key18": "4UdvUkcgK7YTQWiFU5YSa6bSzQZijKBAaKALnY4a3TzDJMvCuGU78Wk9JDBnzftYpyD7LAjWXBjbCK1TLjfbAunV",
  "key19": "5LtXc9e2GWnT1HK7gNBfR9ktcgaxfUMouP3TW2VB7U6JxzZJ7HzYDJXXfCSuFQmQ8DCzu38FzC2VvTeS7ZUh6tM9",
  "key20": "3gw8V5P8fstFrer5y6G4r179jdgCzTaNqoAWe3cUrtjEvxidcZ6JL7U8XZ2RGUQXV7w8Z3RqZQ8tfA4L1EeZuMHg",
  "key21": "5Mxbu7w5jwBtXhr1NG4d9MfCZ6Hs2Eeq91cXEBea75M3JCFaKCEN3KbJB1zcmF215FJBMVUEkfg2SUssjvJMbdDc",
  "key22": "2aPHwLiSAw2vv3p1K6SYeBFEZZ3hShWkNAN6UogNBRZhEJVNTEKkVFXCLvYkjwTpCoBFQ5Qxe8dYBw87SuV7vMee",
  "key23": "3wKUiePsJZ5AG42etnUFFbspVz7xJuSEQpk5X6hSqujecBAE8FUAcqJLvN8usXD8voM1uu8FER6ByiHG7skQ1ozN",
  "key24": "2uuG1GUTQKwAksXwUC6SefhGe24oywJwgTADxnRbLYb6F63PzBsVBvktM1RF6ejNSFTfewkcZmUJxfVojZcHZ3A2",
  "key25": "FAD4jfD3gpLEMrZCxxmagwemhrb9YKWTPFfN27BMAAwb5rk7NAJ8Mj9SgC627scRJK5jRH2VnDfMAC9wQHY8jHw",
  "key26": "H9gE8xuuCvXPnKu9ptjjSVjj5qF3u8FYU1HGN6nN8a2L1FM8Q6SE3bhvGxqveJ6UyrCqfxCaXuA7Gwf4W8xLDaS",
  "key27": "izgAxfzgw2zraD3QvWCH7UDXRCEQCiDJhWdjtfcQrncfuuQjiaAutQcAKkQUKaN3VRPERdYofUknkGsGa4mDZfZ",
  "key28": "5woFk7Xzk6ZuXDCpnyZDXfo6mwXPBzWWm68Tch7XzGJhHf4QRmnthKqkcxBoPFVJqhmPknLmYfVCyfn8NbgTb9e2",
  "key29": "5SPjaNNAkVjSuGGZYuR17W91LNdKRjp64p398cUhvQjqKEeZwjdoP1eeXNVmAQmrSTt32jhT4442taFbUhjxdcn6",
  "key30": "iJwSBFJegsxwGo1Xu5EMpZtvLL9FCLDgmy89ELGhmGNrD1qbkLpwPamGCpChxKtkCRPvKQm5bCBd8J7rqjMHxws"
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
