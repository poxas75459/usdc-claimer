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
    "57HX2yo8ZRUG3cwuEZ2tgkEap9P5aLzcDBkXywgekTt6PuQUqppUpHuNefySdddEw9J8NsU9YwWqExjszcDS7z8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fc5XAp3Zv4j8cXv7FyHp7MopTMturwXYLGHHykL9Nzk9WLhFuQyRk6D8wcGq1XRGfgS6iaiXgfTNani3AG27beG",
  "key1": "2Fqocce76KLHhz45Mu2iwHPoKTw261AFg9njXW469gb14JauWtoVFn8QrzBGDDucfdf5ybT6h4kAGyoAnYR85nX7",
  "key2": "28Bt5ZGMciZoeSkgVWTjjuWuvjJpmUny1vCD8qW8UXu3JLoBTAoTG66T1ZsVyXEtiufrnv3VvYiWHC5Q4mddtQHH",
  "key3": "5rkgxU7foYDJEimzBajzuWW3dAntnYygDHL5WcUmuLaHzbWDndPcyJ2z38jFjkG1zCc3QQ9y5cyGqH5QeGdqEKgq",
  "key4": "5ZqNeDdGh7N4Ng6v4p4udcJMQhTWCoKviYbFqs2eiB8YK77PfM8C7JMFfNpPEN3y4gRGo79oSQN3gFRGXP5HFMS6",
  "key5": "4RYGVuRCQSx9zdKnY2FHJAahXcECVATt79wxD2RbuAnDQnWX9TuHiwhfeVZdhxE6WbqmENNrcQsA7YdAknffePDp",
  "key6": "5PAiR56E7M4hWTyDoRUTU4QsWvcJyGgeE7p3HbEctQRuDzJTXgKM28siWqrwwZUusXsp4qjwQEjTWrK9EvNC6fJP",
  "key7": "5A38PVUsxAS9cyYqT14hXyqT9uh5Mapywb8fppQ4tVcAMsxC55DjtaQng7wKFcYhDjty8k2AMn6MaCR5ijPkFTGQ",
  "key8": "j5EuhkqxvtZEy6jkMje2RNfF9NFd7Wgt7FovJTJWWEtjLBWRF6MhdPjwiR5sKCv9ErLhfG5yXK8huScVnuY5X7T",
  "key9": "2mTMG7ffoPqKZWbi2Yj1bph6vTQycEzZHYbGHuJBEueU7FU6UdtjDDtuCDRAYkqmcQobVaiXYc9M1cxQQ3ZYUY9m",
  "key10": "4A4qeqgSztZQ9s8CM28JCZJMYERwB2Y6LSotTFg62J6wEGcVEhHX6kFU7Xn4M344YUheHp9uz3K9qxxpe4Xg5SKr",
  "key11": "4aYKBwCn3DZw6JedEVihtaDFH4a8tTS2th1zfo4eK8mcNiT4kswYMSH86o9j8skKWVAnE3z7T6avbgBHffcfifPN",
  "key12": "4mcmoZ5pNXZy6JsEcrCH4v1LaA2DEVP2qe1mnDRmb2tHJavXBmcVCnHyv2sGDpK4f6FaymTGgdkYogJrEBg1qnee",
  "key13": "6v95MjCBRWGdKvcKNemSQVwjgj36gy9Ve9aUapr4yenM1RCzcnXdkvbeF4UDTzHrN9ZVTdpgVMARpv8vgEckWfM",
  "key14": "4y89tfQQjYyiz2XZs3ZixVJKVvMthvKv7aqiULA6EsNV9uDBb8bHEzCmbiy3Yk4aqSBdq2j9hWGZVuoKK9chtMCj",
  "key15": "2Dd1Eao64JDizXxBEXAhi5qFnNGqKrNv1VxKQD8BTafhNhLYoZdHPLi5GGFBy9oYGqZStdJ8S5pVTUDvEPDKc1yF",
  "key16": "59b2juZKe3eNYSXG6B6rb3RpEnfsWW4XHJe2zWbKy6j5pKTeVLSoXb8GBGLWJph7bdBzjZDyscfyPEHG899DMH4f",
  "key17": "28woHiNbkRjxiURCT2jjLacav3na5CWSj7VYH9pG8n4GBfsonCtoBn3BeHTiXD8ncUovkZbxJkRN9FtKxpSHF9Pi",
  "key18": "VUQrVsL4PMLy5wTbYUoiWifNAh2Ajep6hojgoDzM937Q1MF4VM7kGv1PRuSACZdsCBDm2vuKnTEU5ey59GnjvrC",
  "key19": "5LMd5fE3kEFwcCBgu6pNa2Zu9oNnhjxxZbgNVUoumBRYhEjf9NY6YAwp7Suna8X68aNTvg7YkFDgnm24TdEZ66xB",
  "key20": "3m8w4mav7ksT2KbZRwvo1auGX2gFRisVfuugXtHN5wTQGNqEJD9Q9QByLt61SyKovdg3QQQzVdjPQRnBQkDFTdn",
  "key21": "3oNSRUu5LdKBfnZaJRBpz61Lvj2SGHJXiY48pdLvWr6gZyyq8tsMRRhoKUE7XCu8X8EpAtHX3LjtkFimPwcHT81r",
  "key22": "5jYSLbPaw7UUULCgSq7mVFdyH8UzeosyGPg9FLsQic9m9o6PPA5MMaqQP93hbBB6reKUovG4V2JaYG9uFrYPn8KQ",
  "key23": "59F7qUEtNrivF6LApPr3mPd6cJji5ARtKumMmtAmBaqmFZ4Ejx9pAZoMKNXJtSjCvQXGPMFH5iN1b4JaxYjgNvNy",
  "key24": "4dUd14md2ej7M7x6fgefHemSu5fLe8dZbuu9iiNNTY4FmoXuc8LUBzBNxDtnFrEV2ekMmKko36f2H3zPRgiL3hpz"
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
