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
    "4DbC3jbL7bWQdPLTiJwpTfFHDSzeUtzPhMwS6P1mypQsBb5jEKsXCfexLhxNED3YmFHNFKRWwqarQKBSmHXbENUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6Hq8gdoATbkhEd6VhaPW7QMHGxNw1kaAbqDJ8y5LmAnXo5hA2oHJhrzCoTVqrm8yuviFMAcuoK4zksKsc5uZDT",
  "key1": "2kJDTHBQXXgomUGFMh7UF22q4NwwpNPkvw1MLQnguw5qmSpRQXy3pCTwJbPZwYRsttB5gXrU93nR2y5uvuXMaHgt",
  "key2": "3WvXcKAYSzj85iaJG3njgNLtqpdErpNEa3gp5t8Fz6BRUyT7y2XdsYAcN9Yxizh37x6yxzNC7LuBSjRK6iAmx2ga",
  "key3": "47S47ztUHk6bx1WKNcnarhoEB9Hyw7wD16wqbxUg7VPeJYLooiNREP1aNq7Hw66W8xfKHi7gpyzpmxu53u3DgYJs",
  "key4": "5HALkw2giZ84BdkHWDY37v6NZWgtdwDPqwDoj4tzLxc4b6ScUhuUA6eVtGCF7jdrtQQgroAFzHEtrCbZUPLEkvdF",
  "key5": "3yTtxtg9nvEbAk8QQcsT6bTxheWnQzA9sEG2jBteeEMKZghNe5g7Hqd1HopU766rFNCeBfFp5KU5gSAUcDzJKVHt",
  "key6": "5eQMDkGQFVoK8jC7csYzCH9L7C3y2NHmu4vpUQAsSWmFJnUzYdTeXmF8bJxfMm9JKCgPQKhQXk9bbRtL9iwResZB",
  "key7": "5xuAbpGu6vJy67WAJGyYha1M4QthvG3wDrPMR7fCCSbqUnNoyXZFxtNgrv9Byzg9SoCvoyTtXo13bGRpqkxnBk71",
  "key8": "f555mDN93WZYpYL8UAMMMXgans6SFiX5yYcvNoE7MkUAdULJmBbNWAivgsvu7mvy83D7W6NqJFDiu6Qf7mJ9Ap7",
  "key9": "SDy149CCvXNHsRT8vfbXAtztp9a4seyW2ZGyUTDNYWqeeYF2mxS7gS6Jf5dHjn6pE6aoNsUssXeAKKwkf5ywUiY",
  "key10": "4ia6hpVeTnqrvjtq8yewApGPkiQe4F5qYv9qR3XPWgXN4EzhF2N3ysHkwtNYoqx5FLkwUmno2w4yN8rFzft2Bcb7",
  "key11": "3QmWVHxj9tt1u3pjVTjztGHmD3Aa2e63FK6T3wvKgNT94BDPvoP5mzNbiEd1pBhqvtS8tzPi4Hwi3NHpXRTgQZxE",
  "key12": "3B12JyrtpD4GTPP9nJLj44KsbcLqRXdUQWDNNKutrQ8bX2nzxGRc6LZHZ3TNWxnr5y8pVR4erpFsndvM8Gdz6Ptr",
  "key13": "3eHFQ3p33A7Zj8WX9LCpxJLrf1x19T5K2vyFY1m5gDhoFVcodq3fystPwdoEqDjHheYL18vyBmsvgQ36RQQtBwuK",
  "key14": "rxbm1ibHEbeiAvTTdyx8BR7pZ4LtrmMhgiM6QxsskWKD5oHms7xq7yx1tZDcP8zB9cSxqkFDTDwVxyoVeLjCwdW",
  "key15": "34dE5dqzLLApabVyNXnnvoMKxaj1MCfTzRRrQaBgVhgfY7Xn9GZncKGZ1auaeyRrzWFJWdNKSkucZeDHoLMxmy38",
  "key16": "abYmUgdVkCJ6YFjqg5LNJGkhVj7BsaZ7AP4VoETgEpDRRvfDyzxACfzdP3wqD3SR6eBSKenu1PZTvnUi5o71R31",
  "key17": "3GTx14eARr8dkenZYvCxwrpt9xDGWSDQbRGHuytTqPeUyEEVrwxRGHyryKVe1deQGpxaAw8zvehzjhHpdeYcTpui",
  "key18": "3quPDBNhd7LVqMwLGLA5DYLZJ4hEBHqXa1rcAMZbByzjX3zibBfuo7QPSrSC2afnp4LtuAEiToFe9EgbaQ3SywQe",
  "key19": "3DVTpsxVBNHP8PbF1nXWw6bjgzo8DumQfF3skqhvxUj7qMreNk91gYowaKegzuPdhVm5BFNVsDdYcynBXCqSNAWh",
  "key20": "5bmc9vSR9ozbcj34gMcp27CcVZFMCVNEqM4U8JWCzFgpaD6d2D4eH7fwrXCoeDWaqMSuWngWNS13FJznUG8qsSfp",
  "key21": "5RW54XpZ3iKCc61wPUehVqa8TNVh6sFRfQJtF5XFrAm8K5GMDkxvNPm6tkaxxQtcJPB7k2xPeMr4uPkitPbDuKQA",
  "key22": "2YgC3cwdyxA7ADrCoG4GSUaJtwEUbke2e6eg5yQNnV8mvioEiaJjd7BuV43H13t4sJEDL3CRJTL67jsawdPESCaU",
  "key23": "372XUCap1xPfJUo7FNzTG8E3BtGfZTLLpucecECcs1KtH6T57U5d4KtTKZkRaRv7ejGYJSNtADrdhbr41heku7mM",
  "key24": "28X6pxK3wqatLkPgtKiHxGsHZKHU74QSJk8oWB19qWihwZ6116Utnf5QPSzzfmQ2L8n1xbKvyzUqQDM8QaYhCEYz"
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
