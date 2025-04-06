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
    "4iJyMzDEMkAzMUZDY1Di5aJsoQHRnLpT26GH6fdhQ3zU74RJEYWbEDSvnLZoz3i1ohQMJ7LSaaSEu6brm7VRuWuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49vmJak7aPGEhzJRthGjNnf9K4q9zmf56ahr9hDhHMH3AMD578GsQgZCEsX3gC3kuoNpuVPrbVSfXtwM9Yf4WNhE",
  "key1": "2iKCHNUjiJuMQpTcPkYn4XJiTkNKtbM9k15jygZhbCgPcsZha7EjhC735QKPr9afL3g2LS78W4TkMtNDnhRciwvj",
  "key2": "2WgoPgbKNRTfis15SpCyBMd2bFyVTnmaDhk81yH7bnyLTWAGFNnsGQUmdBMHR1iuC4qtjquAV92pyhDYm89Qvfia",
  "key3": "38ZMVSLVGhgWJDRUvE5mHhLaP8gYEzoF2rcmxbPVPKudnJPbMT689XQfLvRNoVb4oMqpU5jXq9tZEVBXrUrUZJjv",
  "key4": "4W59zGSS2mZv8bBu7RTenJhhKT8gpbk3TF27piqMb2zaH2Qk4AsDxMeFY3YPbEEufbAuRAvqmsMELP3YZg9CoNeq",
  "key5": "2CBxA6hvtjnKvyXVdwPWeFrVWzLuBYTKgHVc4mY3JjGoiMqDRFqEPiZoNwssaYjN6BiRiHf8VAztXm8RL132B9F2",
  "key6": "3uidnmBjYECTWWmr8VjSFx4jgJoo8npETcP7xMpmdiVr2csHrEvHCny2q33T969oAmbJKNnWdMnSakjy9BU814dn",
  "key7": "4jyBTENxh2heDuBYuuqTXkd22iEJmy8ddBdQeBmeahrvGNHFYcHAB7PgYhPa3dAJczQnKTioVE2Ew5ap4pwzqLxD",
  "key8": "5rqnrPaJfiruSTMAyPFA7CocNiVpnAACjqKGoJSnhHmP63x5YdDKWA8LwzN9yJdeTkmwPjo3ehwhftxUgSWkjLC5",
  "key9": "52smQZUzevswd1Q2NwvZxtBsxF9tBJEh1hZJLakTj5CEWqSjU4sNudVGJKnFDgDMEZpKsj42dYSh6oVugD6LZrbf",
  "key10": "HpdRemp7pXMMZTNZ4d99qUj7Q8NpWAM25TwDuvPWnS1uUBi7d7WUvWB2GucwWW5yb1LjERasL3rVMAAvc3AjLhd",
  "key11": "2QrnYd8P5viTC82oUUjN9bhPMdsr66QRZUgRgJP9CCmT4JDu5L72sJNfZbnHs9eF4L2kPKcZjQ8H2LAwMYbf7oZN",
  "key12": "ZgPxFbJkj4N9nTJHhJbgxaRtyx1GnHY7xXWhqq2fDEv9s8U7kKbFEUAEcPNpdLYuxbELjM7TEJ16t2dH7X7gLk8",
  "key13": "4ayiySqnDTve5aWovWX4J9hhFgiYUdfHeHephBBg9DjxXmUCo7PqZeZgguYiTxKUPVbrVxY1XE6QzeWkK216zEzF",
  "key14": "3SurBJNwEzQNf8usP2bRZEfRArmSMNFGTewiDZdzHvGt6SqCyAS3gRag4fEg5n4wFTv6ZteZevsnsdVA2grADYhn",
  "key15": "2X6R9EZ1yJWxnw9ZVydMKUqXA9TQ7KRe1UZPEF2Ko8fM7B2VcSXG2dThr4ymEzKTUhaytrVGq2uQ5wUBG198X58V",
  "key16": "9TC8FB5HkC6T3ZjaRUFayqJZmq7r9z5b4Qr24XYTq8kivooKyozGNRRnRA4uUexTJqcSkXrrnEVFCuAc4GATqq2",
  "key17": "3NyYNAHWtR7MaHS9dveoccFPMxBsxT5juojZjg1VGiWAySDQq7RcgZk7RD6LNYY27mzgBUrwYwbkn1sQuW69VYDS",
  "key18": "4QzzU1MmJne6rmai7ABqFLKjXjBFG8FruEa8D3mCzNAiBSjF26ver5SCvHTQEhin8oikXV6QryGYFTe9WexHCwzP",
  "key19": "3eGQ7zR6WKgfhMrnYdP8PEs4C9Zc2DtyTNjQCAafZ7s9P8eHoLtFYwE21KnCtpbbXhSy62eGn6aah2AQgyRMudUq",
  "key20": "5REnb4s17zzNYEdospHEprGvibEjsRGf3Zhty55pcZZJTMWFFE1cvBnSBthxy3zRuBnAv4PgStqgAdbJUmZgvxEN",
  "key21": "NXjhBew515gY1XKR1bxcjNGfmJaiGoarmuToF4cVrc4KL2upcvpBEzB5K8AxGTsRbgzxcR8SPBevHimY6cHSF8d",
  "key22": "3ehHAcprjWUc8TnZTJnT8xiNsBS6uaDuXRb8x66FFQDBXSeFh1kfVWPMW5Dxmtd6VvfwkZni71tEjtm6rcVJ41or",
  "key23": "47un37rA5YLdT7F4gqF4orab1FUgeWaawDgYTWTgWCp38X3uvXYxka4cJBjfuYNM5UNsrbTKxajLkj8p5E24qv8F",
  "key24": "3TbFESTYXBKwbdsZY8zLpEHCfkyMy9JB2rDMn8AuwMdByDSsggcg9Z9N1ctsP1f5oj4cJSPna87Qbk69B7fR4Lzy"
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
