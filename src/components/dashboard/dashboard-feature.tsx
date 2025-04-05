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
    "V5eotLsKT2qoPiYb86Z9GEEYtSL5FGKfgcBtgUzzMgMrtEqU6FW52ScHkVLxxSGLgq75226nc9YzdtKzy3Cyjxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38qYdcmSxfYafda5U9FY9NZNKyFvxMzov1mprqZZsJRNhi3K7FpR6mnqYSenQPZe6nudrdCUDDUF29NCUYMxXLHP",
  "key1": "28utkGGsBL2zARsQ9BBbWiC9ykkJy4VKcTXgrUoeiBa8X7RdWRT9pzqXTNa1rXsVk4udabq5jRnbE8FuXd7Kgq1i",
  "key2": "GimAUBYGjYjs2r3Pq3MmaeFLbrR1L41cnziZob3yQyRqjhMetwm8q8ozYq4B2TftR65bBAk6gpVQwu3zdbNtGoW",
  "key3": "568DxVFhsxtw3rdRKezbTvVUvCCVryLyMxiYvD21Go9V3X5xGv33aBTKf9X1yNzLe2rHi3FjaYvuJxKATPHYpZua",
  "key4": "4f9NWSZnEABuQCHYcymnhJfY6XtjaqVRSiCZKRxGq8XtgdEzZjFNnWxr3JweUDuiF2m3X5LsDjHsidQRBPrwMb8T",
  "key5": "5g22TLv8Je124yxJLQg1EygESfWTTkjaWJg8EYyQMDTdQSdDnb1ryqbbssFgoPAsf36Ngysv6dQWJ6zFN5fF3G1n",
  "key6": "4jA3Wnjj3GgECfjk4HotTQQUVJgK9fp7cPPkjbgP8NF8oM7jqXfLzfrdLowzPTwKUvNtNJjrVJwmuChu7HF2yRPX",
  "key7": "3uJvH61PfDkBRcPbaiA3uYf2pX9chGQqgqrQKbaVwQwu6FcQU1izuvWVgpWvs5LWa7pN5KjBoj5k8hAxoen9pGrQ",
  "key8": "3aQ3Mk7tio2AGarNncjR6xF73NZG8Pt6xHYBTVqAgM81nhi7f5dY2r8uPTYgNW5iciEH6iTrN5tDDAByQh2kp1Zh",
  "key9": "4suoYshoGtKbYpG4ZJ1kC531HjsEHiruJ4118ACgkdM3Q5uLmGXWjPs7Zk4NvneV9BaWKm1auY4KhbzuqebfrPTQ",
  "key10": "3Jm9CgD3AbW7EW5GBtL1BDrfmve4f2cnJ2Typ8oZeyRUjeZNn7cdRUpjh9SaR4k3CEdajQZQsnihEN4PkeujCXQo",
  "key11": "5JT6Sd9nkgfrciBxhRQRyKVELDBFx15rNaSJq656wXRrHgGJMzZWK3L5qJsv8JJkYnNXzZkRvFUz5aZS7B5fmUdv",
  "key12": "5AU41w4JjQZX8NRXp267AwZEwV3wpuVvHfzcinX9FGZQANE9jip1Bg6W6Qo2f8izGfHKw7DXyU5vaMVXdWfkFx5C",
  "key13": "5aopBck6wEHmj7KBp1qRDj6sHynNqhYUvygNRhFFu912oXMJkXdELBMJdzkwSLyCsxyP1fN8wVjxzD8jn5WySjwh",
  "key14": "iAfK1h7WJ4qUe7TNLQXZGJ7CEDYSGdZ2cVQbhz5PpPWvbwnFWbndJaUhynVeiwouXgjNoaVmScFDG4xxWM7Neng",
  "key15": "3QwuS7QgnJ11xmiXsZoHFyU5hVrCFwDLaDmc85FRTp4TRXbSrNpRPDym7RYxsrxcsestU7g5FsUy1kjsmCGuWZoX",
  "key16": "67dhn5gR1KAS9GU1KRkQMN89eebE178hDEEAnCvpCHHcTGViyf1UADxCh1ggqxtt88zCC7iRr8gWhy9fZ4MgdJYc",
  "key17": "2PkY21tbdumHadGxBAmH5kevBrninCAGXqq6cooG8vrz24XbdRJe4NubYVvLqo9hiDPkLR2Hjd3xd7nHrzJFGWfD",
  "key18": "caJZ9HASG9R7kKCb8AzoRreSzTBSTxwZSdD4295G3bAeYVss8a9v1ypZYGuvF1bwxHJjn3pQSjj5UNhSnyQbszY",
  "key19": "Qh2nJczpQJSzzafsQoKqubogKNu82xERSuva6YT1GBRfM6aw4d4tjWi3onPfxMYdxiiznSHohQ6K8QCVh8cyMZk",
  "key20": "2VaeNNsHpREqotzskXt1QpbruS2HTy6AmEpqFqwr3igA2Z6KzadBD258RgYTmbEUArL3GqAtkte6YXa2jAm8vSGm",
  "key21": "5CLqKaC5Gift8WQQbFw3V1xayDSfL1s8PkA7rWTxDtxQbEsiWqvEu6JiVHJ6L95Rq3TdYg41H8kRomF2qPDqQEj6",
  "key22": "YuY2FbQmaRgY7ZLkxzJiY6vi8z3ejUjr7DFjdcLsmUoBgwKLXc5yqPPXFFqrEdkqssYxCsWr3kTzbZUWRceUoDP",
  "key23": "3w2UBqDFmPmDQKk1wTK6RcKgHnoqmCS3V54K1mME49Gh3UmA85B4NQSEpVQFNvRXUfUpMDrSSQ26Z1NkFTAL1yho",
  "key24": "277pa2zLB1GbdKt67HkwwfdqkmBFx6Fqqd7tCMKvtiEA8mnTgcnm7jMY4atWWLBQbBJyVrCCh3CVbA3jzmvjg4Zt",
  "key25": "48JAjAwHUTSTBt99Ghb3fqow5RHhHsZhpgYbf2BSBTtvvtAgFsqnTt4ttCpmQUZkfVJhyp2notmUhL5WPBrmKhZZ",
  "key26": "3hd4bTVMzrunzM768DrvuzvhT4cxXUe8v1r8SWNyGse7aUuYMYjy6Cb75MoW3pWysDAXqtvhi13sD4RwJdYCMhf4",
  "key27": "5pp2aW1BwxMVjNvyWVsi8gGCtFX823ogP2JP7ECBAEn6iRzdB6j9wJkz8dvA2vMpaFpmrqUqfHWmGNmTCaAJn6aH"
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
