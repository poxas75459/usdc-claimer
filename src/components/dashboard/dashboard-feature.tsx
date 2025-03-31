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
    "4kK2wBChDfDbNEMHWdP9LKQ3h3TGUuEYEkf1KSVddRa56PZDWpXj3ikiQ2th9k7ML5LxbqA2hPbHMuw5CcVyyeZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYcWpxj4FKozpDtMMnM3t3vzBVjqyZNcYEGpzdK38zAc31ey2QfpTgxBqLRJuzkg5n9WaWbmcHCxW1NFpv26Fgm",
  "key1": "kifsW92KgaJXtuaggXV1wwanRujkTAYvFhpJp5DQtM5rYkdUqm8mht3ko88peFCbEiDwJmLS38w8g2kspzDegq8",
  "key2": "ovqxt8bsStHTwfDFbT6syriMszL97H829qpWByXwcoV1XeBX4B5yi21QMEkveYGcyTiwcFC6LxxARNsJF5EXW2U",
  "key3": "47rYTy8ywYfLG46gMoFsZ6PN79bKDE4DFJbazchH7BLMC8S6wgPZFS8Gcsp3Vv9egF5cV7ecBksVyRe29enFi8su",
  "key4": "4o2WtNyD3yxASr6k5CbW4ugtaMkkZPYpP8Q2ZNhb7Ri8HvoAu6ki2wV7XY4W3ReuVH3kzf9E3xht5G4oMWttYdSL",
  "key5": "3QxAvEhZSjSmGeRCxmgYh4voh6e46Cz56xqsSjqC7Uow1HY5fHnZTU7mPi7g4RZvjKSVrVh7kB7z6r2m44PAWTzn",
  "key6": "242Tj63Uke8xzXN19W1hE42zUmMNK5cEJS21dcEfLKJFDpo7rpZogXucHXGWDSEftdKjNbbofwMyGvok6J2wc3Xq",
  "key7": "2GmzXap7BpL2bT8qiUP1DrmkGxek5LMSvRTartxjVCN5MjThjwHan11dhcCqf1UoMNyQhe3tFAaAkVhatrMyWc4S",
  "key8": "54UpUBfN6cg8W5UbbgJoHvyvZZqzXicyqTGr1RQUyUmPD9RsA3k4YxTH4dq2DsAjdw9gqeBeJpiAK4j6kSrw9ZYy",
  "key9": "2Mc2K5vhvAqugZ6GHow9jVQ57fqy51hHcgvPqMCZdUofma4YSJUcgD3uwn4pZTiJdi6jaD4m4kkZv3jxyrZENHs2",
  "key10": "61eM5p1N1rzqUz2fzwKXiN8vJXtfFCdzWycvqFnzei1YQbg5Y7mnRPLDkyJV4kMoJBa4rDJKsmXiWdpmVV29FiJx",
  "key11": "2hf9v7cwd5wFQh3CkLsj8vw2ryvhrUR1vuT88fWQvhzamVb4394YMCVYGNdcXcD61qJJRunqWKCYeifVPHREiq7T",
  "key12": "5eqbgfnGkT3q2rsNiQshParf41fKvhLXGhbhkD2sTQguSsF9i1ginAAyMMP6saYV1mNjrZxBVkXf4j5GLqD49xCZ",
  "key13": "3oH6ukjYtGhCN5L8VL8huaF66SDxomrKt2Tc3QJUFcy7RZ8QN6dfqm4oRdoLSSdXQoEtjH2kLcihtvzRGic4KjQZ",
  "key14": "k8FLPtXcZCN5KH7RRibbShqX1Ai2HxPG1GzeS7f3GLeBRiTWmAxDCCgyLZpPs12uUgkwjN7i1L8gGStpXYtEamz",
  "key15": "52DAvDp1y3a6c139YJQDay75cPSUA1SByigUNfcsJjLPiL6oKhWZQz8MnrYLNEtB5uALbxDpdp21GPmjDxouBZB6",
  "key16": "4TiwmRWs2BofQALxZvujsYCzHPVf7hjVc9nqbfpi7NUBxwdVuyscTYnvvReNV7okqPgygUxLnV4pQ5fZPL23y4H6",
  "key17": "5h3qxNJqefQXGKtqpsKtGT7DkG6EobDGouYAbjMLHkAJnz1ifxXErJfCTQFWw7715M7WCXTXYd9L6uqujCgX78eV",
  "key18": "2WJ11vUJf6BaXrGWCFS7w71mM6Vv2TwDEH4nJeaH9mSsr6CRFzpKfwRumAC8ZUCpBSeGnZU3A5Mdta7YPu3YVgRp",
  "key19": "2Xj7U6MPMNy5dxVc9y3MATVhhjiAXjsL2zHK8TBLP7RNwpZNFc63Lq3VEWiGVp4aopybcgicSXwT4oS1i2F5h6tp",
  "key20": "5RsBEmcvYme2ZCx9w5RrbqS7CCStw5vtp3Kp79t4dBwZx3ZPcsaEHu5Te8CX8q7tnDsEMFFKnzutSj7pVXfTYCWa",
  "key21": "4EVCiLVGZCQ6W2SJ2tjDa355sxCzvBtrNXyvJNhq2xcowQfxQTP5iVyZHqPrCXr25xCuu8PYp6rnBimeQ7aWqbZo",
  "key22": "oc58RpQrYoH6BowJGokLQEXD9hQ2HiGD6LjkK7VZsA9LuBpVdH2FuRJZZPEtLC1iE8r3G7yLBBs5N6aRF9XFuQZ",
  "key23": "5joqMrd8THPka63njegadfWyfaSm7YuhHu8wow41G3zEYHddivtj9XGfx9zawZLN7E4wBBAvBuj94G4CHrk2156i",
  "key24": "5znxvopAbeKjhHHjxAzBv7ShBmM6FBwmHbgPMptgJWnDBx8G1M1yUdEg25PDgRaru5PWg4di7ZY89J6HM7c9jVBt",
  "key25": "2NEJQ874z58q7Mz3Rpu7KKDRzH5R2JgcMgQK3rg18GaXwkWs85qBMnqQyJrVC4eMUr6eKudL4i21USdazHABgPei",
  "key26": "2iFkdGPG6d4H4D8S4nV25Gesr8n3La5Mvafo6uXRPKGnqh9vgBVRCy7pRNTc63qVgJdVFQAzbLCE3ZcdxQEPiL95"
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
