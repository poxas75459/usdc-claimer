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
    "nWjXK1yEXpTxS6gLbUEvWXToDDKh9jzLbX2mAMN9StPazEy5Xrz7cFDNv4z4Ya8AozmWcTv326DWMn2tFiBLhpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EqxrtXqdvuqUKE2rQVHkvZC8BFrSJdsKPbJ5oBhyVxdmJsuFPDqtZssTmWPcDe5uBHq4kvGhzwHFCYWQxwXGbQU",
  "key1": "3EYEVVmX7tq9fiaC47nVXL12T5PhUwjsJiCuQnQovdyui5sDyyPU3UXMH6TDqR1ZG7JyCH3VuB7YMNqrnAUQoGRp",
  "key2": "4Cfiy9ymWVrpzbT9wSRFkUynw2pE6t1UZ7r5EjMjXYjmSNJ3z2giBeBGhu2p6Y9SEwjdXVpE9iJNVJV5hikXkyin",
  "key3": "4N6xgNU1FxMXis6t7WHyL5F5joiridn5ExSgmUBhnWJLBWV4xoq8bG7xwEqgrQWJhSFFJ382v37MpFZ7VZVtfaUw",
  "key4": "5MiuQtybE4Cib6SjADmtQGWoSUsWPF8m3C8pVF9k2TgMHhsGxB4GNbmWUYrXxKinUa31XSHKAPo4JihaCEGcCYZ1",
  "key5": "64KdeHjQ57c1Eu2M2sXdDFJqUWZBr4vhWtJ8x8SUdQwdr6iVZ3g47aGMseYMM6ZjxzHWDjkB6SKpn5H6K81p1s9C",
  "key6": "gh2Lzio7nPQ4ript8Tmsqt1yLWEqMXJqCPGaBvCsB2GiGTZFF1oghsg9yheG7D5aBZ2Vr2wk6tTrMUM2v86H4zD",
  "key7": "NR8m2M7nvajMYUeHF5K8zqdotGvZWmv8dT2vJ7ATaADV2Q3kAS4MfjjTxAXsh5viWnGyuoGZFHa4ZTSeYRdv2wY",
  "key8": "3SwZmbuedA8marTtUkvAgH3QC45qUT4QeSfnKrkFGgwsQbmWdxsvK1p7uzV8jXqJ5Y1M6hsyHuwik1RPbRD2oLDq",
  "key9": "4d1YsUNfZcRSxzpSWrvdCJYHkL63PxvgC9bwNvFGfuwChCwHU26xb94Pov65FuS6zm3kC8rL69Sn4sFEPJHtqBKc",
  "key10": "4BYMwKquGVWhU8oqC7ZijV4rsjqNxV5LLHqPyFg2sR7SiBJrQxLsL7x3iFNnz8TYAjT8FvJ5bcgJBM5vS4ReWtnv",
  "key11": "2Up3t1W2qF2c2NbFsK4Udv5fmZKZRKQtumbPyL19sy1PSaAx5wXji5u3UyoP8ao3aJHr24sjJ9umxXu8FAYVUR3h",
  "key12": "KtgiosGYPzN6LT5MiwSXQ2myQATewWKAtDbimK7HCw23HfUUrciQErTWgcjEDt7c8BCF5Nj7vvYrGktwkxFZ64H",
  "key13": "5ifsAk8f5aHrqy23Pcod4Cxf1e7rj4PFY6nepPNz3dNUZUEEnT1tCa4Snt9gsHzBGjeTNMynHsuFRvEb84aUNdFa",
  "key14": "kyYZ7V2L7TxhBmxJwFLsYkdRq3yLbuP1MJY3guSk6d8jLhT5mLgyu3yJEttVNMfwV5R9jHhGjf5DXk5UGS27MC4",
  "key15": "cFnEkvvyZeqbbeX1wj7Ra9z74bBDrwBxHCtf4uzcK7QTaXLeCZMD6tC6kxtbixiVJZa9qR1jcgP4Gtfg5xdnYG9",
  "key16": "64NBRsLSRyAp74taDNjvg6L1gGDfj4DqUXNoDZYQfD6xrZV7Artdqr8XdUYNwf6YVfuBXu5G1FNMb9xVRhunu91D",
  "key17": "4i2AJrnLyVMtgS6BkXAgzgrwCukapY6DLiumhsTyg6igoF5ASf9sYbzZDac3G5FkhECnD7CYjrysZRUoyCNLd8KJ",
  "key18": "U5DtVZeZSdHWoeT2iPo2ZobnYSfyy47oUN8a4GdJ27Jbx6ZGRa93BdNKXVnX3v2uKpsDmjhZ8orby5EThPm2D8h",
  "key19": "2wLFhPH9rQTM1unbwAKZBZvTkDNQxB8LVRiAnCwC8htv4cdyY4MxVtvQB8PkwPayYQULyw6W6VspYkNaFJdAghqp",
  "key20": "33JAwHFciGKPinApy3MjWi1D5QXyjRaJ1jeiG6sHQMYN7TwqPpQ22jvQhMjDzB2jJBcqnMWRnNZzD713Qvo4E1cD",
  "key21": "4mZT4S7oQmp92GJYJdcUoFuVBScNkPGcD713tVESUVPYJ31SPhdq4KdPi5AJQ3ESbFbrgu2tAs3DVNaxrbqieYQx",
  "key22": "4NR4qJe75Ax4RT6EveLD1Eek6G7ZwYt4TuMrkBp26k2Pt2edcdQUL4irwkEc3T3iAUfhPGBLHZjrNoQm7kCxvnQy",
  "key23": "2bdoVFawX8qWDnd3gzoQNTbaUP6hMG6ANUqsPFurVAqQm8q49F58vzJBdkvNb81pcmovF2S9aTAAybXiqQ8umtva",
  "key24": "rCoHMG5sLxbs4JgRJKbvkjEcWZ5QkijjwuSVVZjRjHsJznj9Bk16rQFVYePwgraDdP1ybxx7foXvSgCcntyBBX8",
  "key25": "3zfzngGXGP8nRSjdv4q8bnRkKdJCuffqQH9rR8N8XoVXRJN7W9Wugsyrw1ntbkxdRMKeCaTsvpaAvkTkWvL3z71i",
  "key26": "pAJpFVViaZC81XpY2mTiPfTUs2KzbLZZnkvvW2TLbPBuKs8xsQLTqwh6B7vk52xaxpPTnoAvUfKvxH8FAUSeSyk"
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
