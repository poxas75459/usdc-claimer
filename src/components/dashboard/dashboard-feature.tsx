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
    "2pKASx9CiyK4fy1oonYFZ31biUVzoRiwu9a2hqZ8qTXcsFRf4DQLQ66hGUEKSUHTPJZYHx9bae1kWn4xBGSfGpQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f9AdXyo5VeAxNYWLYjuvBbEVSqPAN55Mux4KyTtJq86H9fGcyykYHCrghNHVxdW9Z4McN9jyCy4qqf6WQFEiXuw",
  "key1": "2RiXwXA6TMPTtWGcEh1QXDvCXUdXic1gJEGPF4tVYgmbiMRiusBTNZxH6HGtJZZeBcpt7U5bhu8gcNvEyt3pis15",
  "key2": "AutAaryTZn1NYdGouxppddAkXFhx3BX6P2w6hQ8gqfZ9vVwyFjXPXwL8vK1KdBA9tSRaQAGu4jEk4N9dWxUJPKS",
  "key3": "5un1EUeMgT5fWBNdqUgBgHizm6oRWQz3meuAAQiZsPekzDU3fbGxNFgxPfwCypGZDTAcMY5bEHGigpkhATZq9XfU",
  "key4": "2cBs2i8zQsXcnBfxbQEUEtKwWAgKegvadgx39tyj55VVx9X58oT4qUG3SqKgek36yiNA6KjxbRFBt3MAbvBgFiRV",
  "key5": "27iWpWShmFZKuTbxuFXdim8UhP7aiQjgWZWddXWVXQwWFVgidLXrxkGWy6V68nCaEcWofkuBfXNyt3EGzsN65j92",
  "key6": "3nm6BWdZiheHwbzdWwtPGE1aU4o1cheK5hDxDAs2JLCixeDziLkWszRwiYzP2coW8ApkXX3Fvobevt5xsNmDGkDx",
  "key7": "7pd7ZX9E7P8wraw97mC2371d2A6kL6Me9Yu54aXBPx5TgTkCsD4AEV4pL8gzSByS71qsDY1AVhZuUwCh4WakFMR",
  "key8": "3rwfZdjHDQHdCx6SGo63GvHxwKEu2BiQR67mMcEo2LsNvbRGLnenxra7UVHrMv4iwuZpBBSTHH2Bnv3QKVptztvA",
  "key9": "2A5R5nMpxMn8oncjYKkxR77UwDgZK9a7eTTZsMtWov34yV7Y3hgA6SWP3DyydnYpdycdJ2KVEQG2FuhEjGDr3SGv",
  "key10": "W8rxnTQnFJL6oNHeP7vKf5xGSNTGWwiKpAzRPve7K4FxXh6R3iwvqPHj3uCtyEmMqHkRMLGcrszNRsbu4F39y62",
  "key11": "4GLgWJTsAjUAPqTc4iaji2DTAf9wABHiAuBVxVHydW2QZuWvVsiBM9sBWUQRbD9eqNtXPnoTGXjxZBgUmS4Qdsp5",
  "key12": "5Rbi8TFwUC43ugAHhGfudRWgQ1BVCQheNzV2cfsDUscsR4qwJm7XjJvNMMcKwVEVCrVDaq9CrfNUNRe3yGoNzhKD",
  "key13": "3DPHtXdWffkDCLudpUGJ2hvLzuZW6YGQgkDU74TKoxjUnTZLF7agjNBoycdpyp3JBsz8uwnU3mvmsxJposbkSXUj",
  "key14": "2zrNqkJyWE1wUt3nVUCt7jSvfFSHCiqtKnqVJeVPbwjLfUPZED4968jp3YVYme4pp1bNCdTdxjDjjxpjcegJPNi4",
  "key15": "fex1G3J9VDevig2orhh3w5itEPKcBZyRDUJ3BkfSBnBaJ8MJzD91yTayjSwCJU7pJ1ERRCnD4MREuXsx99ykuHN",
  "key16": "4w5ddTA3hEVaovDkBDrUWnLmaMHRViTKuQJYG4KGtAAz6wRtNqg9SX9BR3jWraVdRsEeHbawTMfmGt5co4jAfwaN",
  "key17": "5iAyWN6zYBtiE7c7MwYvzcjeTdVAaxsnHKa7S5hSJVif9P4WVW3XrnBXyQ57ruRtdpc462wKhrLkYFnruP4bkKRE",
  "key18": "3nsRqNdkuWmdFPs8XGxQqGT4ygmKe5smW4jL7T9Nzpsc2MHgZmUkXcGd9YvSm1iARdyieSoF63uP3trhsa8aX6kU",
  "key19": "9KLNCecMJMwdkjvhzj8uyh76rXbMz6KBMyePw6YK79Tjo7fN6TXLCN4N8Rd4t5NiccVovhwWGU8Umvz1VK2peNu",
  "key20": "5PtuU7GbkZXtkVDmJyvSdNToXjf5vHiAEmYW6BZGsosbEGoQVarnDVTEUF2R3Y47AnqgBPcV2u1XTG2iYyZwuWaW",
  "key21": "4nJbqmMyDo5rTjLjyomRo1uybFfauUR4mDZUVeVojEU15BnNLiV98hKHuWDeiStEBL2mufKCaQgAXxaWjZBpJd8V",
  "key22": "25F9Co3w1pB3ewrUd7W3q8AoX4YZ3gLbarHWu8FoN5mUtz4FZfnqNWJW84qqi5LrfcM42VRCZzVc8NW6wV9yWtCr",
  "key23": "5nvQicFwoHj3PUvQ7YX834g41WYNFSHhPE8575nXwgxPiHgQ5JihvDwPFAcAgLnt7DwVJFw5hVZy3iL49cHTpShh",
  "key24": "5uQbcdx2qvi28Gsi8xTDgmC8JuqtpJ3YW5sYkgonXevwkhziynp5Wdvr2gGp4AjWZVqj1nsjyKeERkXzuwwQDxrS",
  "key25": "4rPADDARMGyBnR86pUgAqjRSBTB7DkgfaynsES3B1Sj9yQGkvXrq9L6saWnKrKN8BNFLvo2KBEHm7LgANLYNVaoj"
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
