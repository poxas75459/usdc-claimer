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
    "BktTwmpEMKpENjhMicqBQwpAm5tfg71ncv2gRTiPG4bHFzsRm9NJdi3My5CRrQ3Suht1iYUrfmRGPy5gn5xRQuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dak2rfrF9uradgUTE64Z7dQ1Kwx3XvMiqyVdWszq8azPNGW6m2Yfx2Uu5Qsv6jNoUQ82ukd9XABkC8PDtb4dD5R",
  "key1": "4G73rUgQWA2bw3BYF7M5BGNu7otg9Nc77JWr3RMSAAhN3JWJrBbVh5nFRmXnGh3omtnL9QG5hYNeT1kgtqyCuoZ9",
  "key2": "5qQPMnvhrsepfk9HD76LmBqgW8t1tN8yKQtc1tEVTGQGuG3amQ683rqbwuqtVjYciyFpj3HwimVRCJ8oNigWtkfX",
  "key3": "VeDkd1WTGvc5mFR17xCCShCsveWs4MfpeSQGUuXtC9yoRC4v5y3FkhwodeNso9UCJFjyEe7E1BkKseLTKMDBk7u",
  "key4": "534T9WRAE9M6bef6TSEL6QTEmw9fZh65XKC3VARk5rchTDvuJeYjXE3tRvcoyQ6kXfUFev4YQT9Bb6GuRwGCSsPi",
  "key5": "4APnPtG42xP67pw9bffGUQBnKEngMjbGkEC2bArUpu2K2UntiLcst8D7LFNSTUvH8zniwa1SUPJCY2QJjFDArg3W",
  "key6": "4kcBEBw8fWubKphCB6K2CsCuUSxHb3RzTu8dsXYYvZCt8VsWfJ314wANiXE33ivfzPNwNaTAn92cubFJ7pxkxz26",
  "key7": "2V4XCPkm1nW7o8A3qN6G4rp5nnrKd1LZQkumWoB5ZYsdr7jCMyacjTcBn72R24h7nhePMmWusfQT3yrRpQUwRHEP",
  "key8": "5VLCyvEqiC7r6S4T9QbKtrXPDiK2n2mnYZZmVCPoCmT9NqU1xYREC9zrmB8XXePknBMsv7odrvbAWD76C4GKpz6s",
  "key9": "qcdMabLL6YaRxuAS6z54B67dhGpngCpv9cZTL9GtfWYkuaYY6AmghrUaeMGf2ujUumuBP1YJtt37SpEe1RHoABn",
  "key10": "AZDgqtVQG6aCmDvBbJ1uir9Bgbn8KhTKSYwNwZ5yvQyaC5xRsxNQXojeoSue73Nj9M5hU5i8yDzGtvmAP1Jx5Jj",
  "key11": "8GwA1GadZdReTKsGzH6EmrRCQgzR4atoZ67rbAsqLrCnznTjcbZwpwEgvjdvFK3YUWL3AZdqrCfWFhuffDd2Yaj",
  "key12": "5MrCdSqiNLeeEbA47jM7QhDrGhfhZ9Xrc63WA4P1a6efQrkfxMuFCEAzVNZXPmQeQNMFhjqQejjP7HRw5WyByJmA",
  "key13": "5ZVHhGvpKMgqYXww856BK9dNSpVkXPydZePj1GcHYEyHg9qfUiLzSeoQXnwU7EVvh4HhEdUkGGtvPsWXbkDjAL1g",
  "key14": "3B58wfmpMYE4zvy7NqAzcnRKuium8DUhkL7JQoMMmp3XZQBiEGQ488STgWvjyRPuSDxC4c6vbSiKpnbuuf9gmkSW",
  "key15": "VFkP4ewVF91yBEQe47fULBBJDRrdyRyBQyLTxPttCGSGZ4V9HmidUt4Qmhynx4AecxLdRLcjxPyvtxUHgJY5Rac",
  "key16": "3RebUJ5AsspNYCNXfXBZ2jHY3CeVSnDGv6MrNeAB3XAcKgRAuXuXsMY5aTxb8rAChckLjrHVLKtcp7WdUTtiLXY8",
  "key17": "JPiGhmEVV6WrKGZw7cZbwN1BqZZ8hNA8VbkXFq2yBwvtFTkNavGwU1deGHVwKigJ3WPHRy4v4pS7LygTBqpPcYS",
  "key18": "54vY5nyXJWxJQhrAxMcdYwt3GmPhvdfiqBcsGHSepx4JspaYerMHc4JnkeueW8Y3ShoJUYV6bPqDkCpdXhff7yKe",
  "key19": "4dodsy43SqAJjCHYE5RjTYPM4ggWv8qKhqHMmQX5PQEvRtwYMMQ6UHM66wAeYtLqnEWL4BTMMyfYtTFeU91CeasM",
  "key20": "5khXRpvVo1wFojs2pgxKvPEMj1HqDpfFwzeeya88pUUEv9MrtMjTn1J8Ag13Hn8fn6MXGK4jixt97ZeeHKJAryvk",
  "key21": "3yDYyvaWWiCGqYpCAs6GQ3YkFwzv4inGsiadwLsAe5PyFisScZREW8nfoQGehBdeFEzqBUgKEx8XFJT17drPUCid",
  "key22": "2D2s1BcjT7xqqXx9iFdY6gtGHQqy3bDF7XM7QesYXL59EZWibKiE5wzfACgK9FLMzHh9Bzfo2KkexoQjVdvmQqT4",
  "key23": "21qf6EbtW5mApgCSR4C8KTnogHsAJcGVnYoAhByM9KXShmCH2yLK4tm9FgyQkzrh95C42SQBTaHKF8czqXkaw3aK",
  "key24": "5gLjD1WdQcZdHn7ApNuNbK7g2kgFVsiTbYRLZue5W9feaHodMa1cV1earehCXYMCuwjgGC9mhcnnS5u19o7aTxAL",
  "key25": "bTFzGNo52jLaH6VKh8g8v4RYpnxJuBVKCGFVmUKxZQpVRRbSoDazVUa77UvvHVvJMj2gok7j82RaXxcmA7Huhpx"
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
