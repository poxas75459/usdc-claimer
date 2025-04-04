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
    "wMUMavgpTby4iUxg6H8oDr9nPu1kn3UYiHxf6RBzFWcxBYCF6zYgwC6Wc7LJsdS2R5JiZu9TMJyzGQnA21eCMKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NboxEY7DSQvngi6UNRTuCK4PdTviW2hzgooWfovN4ERQptZ7sz8icdFf9Dd8YbXzzWDBQog9hoN8c5BRezxGk5x",
  "key1": "4LoKGRDVrzPeFpCKLNXyw9Q86JLQJcivPTjEbsauDRGb3nihhRbt33Xejsyov99ZWeTZgNSdZdFUx3dsAcQ448Xt",
  "key2": "4SvWgJ6ntqopNpoWFC6Tr834NHBkfzJmCoC8JeRuB92Tcef8mp22NKWEqoKvwtsRsHRAbsg3VoBV2YYPqBE6nTXP",
  "key3": "A2gLp67VsXmSC9CS4WkaQ2aza7Esv1Fwepp2yBkX5SFVrpF5GdoZjosra3xpobhU95QoHAQxpo7TeKuCZfKDvL2",
  "key4": "5gB5cuyEesfvHdHq2u4s8v7JWjWGz9xGqdfUvfBAceRCWRYdAPhiDqJsM9UXuk2WxynkRFBZKwxadT7c76xGPKrZ",
  "key5": "3Fk8pHpGeM7BJRB3JQh5fASUewxRwosYE4PWAj7NCVDmN9ksvaVnTDREKf526nUzfH7MTurBKtK1K9yTh9gCTjf",
  "key6": "4M5JG2kbE7oiKL3k3zf8CXHkvHa7PWfuJMfimXyVo3qnHPo59yNQ1UHs6T3AFZxKWHgqPomdND4GW8KhJgfwr3LH",
  "key7": "2DN59PEXE7yJL8QUkxE2jzXubTfQjbXpaw7BMMPHHm1LXWobh1XTAvBJ3mu4igNuCxxePKW6w2v88AkH2ZGj3HW4",
  "key8": "5EtmJGdreapGZ7EfC3rE1wQxtjAAPNYfX25r4AXbvH8VUYqVw8VeK6HrsTJYgQaN7ievYSdXDdKgwVwS7BVkniMV",
  "key9": "32oJdudxcqfPeqSZSq8epH8bcvTypfTmyeejRHPdYaMKL7k1w1EM91HbQaUwEgNKi4NyVRYGyMkeyfYy5BBuGMbG",
  "key10": "22teeD7KeYcRcDySZZjwnZTVzqWHya5D7VcUt4HsfEgnGKDkXJP9xePSjBGBExshBPSJa236bq2fZKr6VAAbTFkY",
  "key11": "j2CicSJzQgmsAEEHdE9DhJoTgMM8CbBE65NrmpjTTBNof3dY7gY1czf23KFsubPTZEZKrNmSfRrADQMbpayV7o9",
  "key12": "u5P9sU9LDLj6dKNzs6oZ3RmmjY2RF3CSiyxyM2eB4gF8RdfExJjeUFrPT46SEpoGWWad4KWAZwBMHRwMTTx1phP",
  "key13": "5gMzff5Kkaw7vKocmGrCDVne6VhjPsRD2krproTgpfHLtftywsJctRHket6sSkFPKcqj5T1DLAFAu6MkQSTqDgE9",
  "key14": "4Kfbg9qGqeY5F8gSPaZ4crWvbzdCxsienHd3yuazCDKw3ZEQ3czD5bKq38vM7w67gMMX55xX3sTqyTYvxwb77qMy",
  "key15": "28c9CbT75KKc6EghyEvZjWVUUGgNpXx7H6fvUbLYassqPL5KhLgaes99XLXMNerdgEoHfRRX3uC312wePXJmJ5Pe",
  "key16": "59wg6EWynvv5bQ6FsdHBKhc2ezR682SoPUeVuJtSNHE8Tmr4cEn3KELMud1cma4Z3K2xboLKEer7Lxw17ivSBFhn",
  "key17": "5G7iXNDCHx7stKZnqnKVXfqFPyBJWg6ungH4cS1k4bpqNPh6LxAdVvSuWD8nphgCtzVFR7FHjBmK66G6GVz8qQaY",
  "key18": "5WGSvY97FNFmWwWd6JfRUDT5dt1rTerpr33wEPzsvVaf8MsNqZ2tY83HMw1syNMZA69qDJT8iFkdoq5dT7GPHaa7",
  "key19": "4omNZQ5xTJhhENg3EVvsUFBGmV4bJ1BTMQa5MnBfjPrrjTUr62G7JMPTHVkauY5njAcxagKQEaiSTxX2y8L4UhAK",
  "key20": "5TbzyyYaycABMe3wJSFXdeDuSUV9JeUiSLbUf9HpR9d7nhjNYhVHxjiNFeeiMCeFBatoWyt8FWMw8caFgNi1H3sR",
  "key21": "237YwiQuwALMaCHZQVmzk3W1CjmH68AaxcTWhxu2in6A2ZD9iAac1MmBrBBXDBQx3iBcK12Taw4mVMCnysaHcwiW",
  "key22": "54ygCG3tpd3ajaDuTHqRSd7PSi6TH5U6JV7hcSo3aTFjUMLxKnnajb8QVnehE1929wMrmJVFr8BzPnZHADerMscz",
  "key23": "4tjA9ytkvpSoM3YzM2ueCb12bPWkz3iRF5dzu9GFgg43usEb5FebFinGKya4ivwCN9E8wpm3588NoYeGau4ku5Sk",
  "key24": "5b27tgAgbvwVJ242UzLArzXBZc1HnCAx8vt6ktVavrwZDiBNbouqdDi256XAVUhPFF9pn1nwqWmgy5q3baHLLp8f",
  "key25": "2ADjZasfg2KZuphtAsVfkbzgZYjDyL85pZjw5Pag73hFxgyMmzA1CCpuxoJcaEAmrLihJxKTbc4sHXfDJcjLcpgU"
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
