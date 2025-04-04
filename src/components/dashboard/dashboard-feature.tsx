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
    "3huxq59W3MfHYRjsPLXtzExKWFpGum7YAf4jyAHKhEDKRHGZAcmTn2MaYUQDeE6ScfHEPE5Dz4wxL7iwThCVjWic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PkrwRbf6bWNJZYBTQmsFnCv3XSr3Eq4zYPknw8b8cFriwgdMFmXmY1qSRxUBr7aQo4BUoDybFWSQmimoRUqbm8k",
  "key1": "4D2HmYcaV9VzfgRHdZPqMsno63NT4UK1dpFsp6BdPsmGcED6hQUp4hMuw7JyAcZwC7r2WVLuanyUAo4eajPB26tX",
  "key2": "5PVpSsseAmpoV1QYdeC6KtXsRZgx8vEBaqsWPNA5awGZKjASifTAJJvehPmg1UQh3Q19ooHhchnQznZrNirda36X",
  "key3": "2Ek4prccrzYBY21v3nJsZp5LdiaZeHyu3DixrGwhAPzWX9nMqXs32VrhDQ2nZX5v5vMxjGjiCHudVppabe7pRVhA",
  "key4": "PqhHzSXmhEULqoXmaPCUMRkei7YsdazEthoP3ExJuqJj8qny9GMqv7RqVBWtoj8hfTD1r14EoGiTKhoJjMW7KA2",
  "key5": "2os1guN2xKDGePgozEGxqNL7KuWQf5BG37L6yFBKVquSe2Z7nUvsbtcXpjwBp3BNFTaPBdYpWAtxsVXna9fSBMm1",
  "key6": "48MTBjZibDoDDmihzL1y46FEGEt6BoxcGXTTyqSzGHsR4tugD5iNpuoi9xb1bmXqMmtnocHUF1tnmbcVi7nhs1Dk",
  "key7": "4obPBQrGQgYtHcBoT1S3joYj6BF8ei6XxBd2WVSU7gK74JzVp36Ly7JRBVawvFCCVDanWPkRzmMzMcPgiYLtQyxf",
  "key8": "2qkgnSZ4j4HATuBdDYT8xHoz5vNuBNkdGBCgykQWbc9Ce296fhqKp26oa1iwZpyCSwcGTs2sKYAj9XLZgtx6Q9aB",
  "key9": "2wy3UCm5tHwaFcNgPs82yVWBLdA4jC5etXnwmHeWkWwU2wJHmGbAfnuo1Yg8Xwpm6GKkbPAjiPnWmYmqC96aHZo8",
  "key10": "4pUrVLR6t3fwc8XrJTDaszngbWpStHDNBDDY3rtqFMpp5UHdx4WHbkQ22GRPK9E5CKQJk78nBBAJEFJRc6qTGGAf",
  "key11": "4Hgs1qkS2pfoX5rGcBYtYngcWf1doDbD5uurBH5EdcMfX2C1NKtNyFYta8aFtLC1c9wy4yJYivVSMXTYxCx5EBRh",
  "key12": "4Jy76D4oKGPEhXEVbTGB26qTVEqP82221XeMkDnwcRWUu3NHbGJLLt5FucYbjQcz5idkr6bXVLvxbMrWabuaBsHy",
  "key13": "5EqYgB9rB6HZwYzB4Sm8xJSxzdQf3kzRFbGkSuP7Y5cRwJ4rp71U2kS78mXuRJHRsthw4FLvtndDWkiv1GuhcXSm",
  "key14": "4ahz9UrAqqfhp8qNtV6jLFUeRTgsiQbJ1VyFJ9qYSd6nwPrHGso8nviNW24HFuyE4k5Z3cDdxwLGZUDPj2rbTC7c",
  "key15": "5JSe5eNcpBzDmJmk6NVpjCi8C1usUfXxabGqFKivs4Mx5A88jWx3C8ghsb8My5qhm4eUQB12mnRuGVmfZRsJHA9t",
  "key16": "4C1sTzUsdPoocHfGLoNQLJ3zP8tyAESH4GsMqAtEU8YwTCiYaZUJtetxCku4DxxGamsyYACMR4scbRjfPqmgiszJ",
  "key17": "3v8EGJNKQa8JtopEKKe449y3iy6imHSZmS193zqtxURMD4XvXbuLooJ4FwpEmQ8dzWsFcDieRtpp27R1BdyJk9uq",
  "key18": "4bgqf6N3MagbGRwGe3AGj6gLREwFYfAgZ7QeRhYhrKzM8nmkgGe8ViuC1YLKqiJB5KweivF4Z6qinGCDhod7ExyP",
  "key19": "4cfzfg18YksZeLjeR3mwsrgUbRyE4NnQK6jHL2PPfPdZfypMqCPaJkyhZH8DTxowDyqpe9yHcJt9oD6muwGedWuh",
  "key20": "3WS8UrT7FEKKUKsfc5xPLhWZNs7WHuPQztdNDunJJDrhCNxk4gUouza3Emi6WAfVWN6TS9kxME88iFsntw1izEep",
  "key21": "2wtUdtieNrims1xqbyBqDdLLst6t5NhJw4Vg1c2qYxaZubUiCBDkeKZcQLe5cjtwgksCEa5B65ij8s9W4WvbkHE2",
  "key22": "45xaivHGngesnKdJSHEAx87RbKkP5jFZdtc9xDn69gN7WSJe8UL75uwB4QxtL7paY17tgTTRNByK6QJBw9HSnK4U",
  "key23": "4GvPop1VvvdHVRe62unkZT34syvbyhiU6UtMLLSy3WGk7N6SDxYdjPB9hHPb9oLe4FVGUMsbxy6z7g86NaTRMr2U",
  "key24": "3DdFZYSDzKWvSAsSnYnJyabvgNUNPTyYmrTzN7NVbbS45vV9BiBu8JfVEj1zaMNGYqdoEs9YYheV5fuxLeK5DpoB"
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
