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
    "3FW2WZxaEBkrhAvqkMbCJYtxG4V9aaAPRFrFZKbKHPpT3dEtX2CPKwPemiaTtZMNeUQ2xX4CuyrmLzN4nxQVYGco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VziJRCRF7X1NQPmV57KRg2gn8VAKbNoSsQM6AdunuL7T7eMTVaatciEiEexLzdASEW6D2hFRwn8cDphfk2TSBtH",
  "key1": "3QxEte5JoZJUCPrcJEFdKawv1DpJnBC2HdKLWf41zWT7mKDJPbqpZvacWo9U8yqnqFDF2ruDYExY2gonwdrytvqb",
  "key2": "4h7nijx2k1zhoHBe6p5kdMi9BRvL1GfzNzkeJSMCua2EEVgMSq7FqGUjNjWoe3uAkn6bSHnKuX7msZTPTwMWJZSQ",
  "key3": "2X8iRYVSDamnBmFXyF63aia569hjQD32grHm1S9u9aMqkWGrZuA6HLULPPUJXdcPVLfhwFr2ibwWN8hjEQhzSaZY",
  "key4": "2P2Pt4Wa4oDpSrbwprs1gkJ8eBQwfWvLPFS8No4mWGqq6P49wWGGmVbRBesvHvgaeEmGi4zRou2zzEevbLgBFVh3",
  "key5": "2LjqTHi3eefbNGbV5vnYjMTEf1cQwKKqVEmFKCaFeZsi2dmRuAgGCBpKyuSsXtzHhybnZJp7NgWUWsabdcNhjgrf",
  "key6": "4ruSzw3WyJTXMHQbXRMLBZefXHqAgNcgGfXJTjz8SdYBUkj1nTqWQgS7oyyTxpAQALLjYRGXcWvkP3wWbu115BhL",
  "key7": "2ouMAcBDfEPM4FyWKiihW7f7BnybRzx4hLKfwErZnz6MinnsPFCbA5RneLYoLVv2MzX3RwsSYn233EEp6M35TmcD",
  "key8": "2gFrFyhbmwkwKa2Rk4UoFjrp338pP3NYQ9CwVaJp3vpAaufEqmuZ1Zsw2cKv4jdvCurE3mLfBZbnFj1gnGDGKwm6",
  "key9": "4ZEpELeRZNYuCVyKJz8zVpPLsxExwaTjv3fRGtVKrWn2uwCcfKS25ZbtJguiki1JP7CaYkGsvKJWvzGCKXgPa549",
  "key10": "2328guCWmk6cPnGaKVwutmpruHdJHkUxdELvFZSs7DdU78JMTNhbNo4KKjUks9ESXP1hcwpA3vLEiLQtLCxUdj3b",
  "key11": "2xGDrmepduPSGupgAxHWQD2FafPMAC2iGupk4uXRUCuRKYsEX9oNVH8KUL3RAubhVNhF6Knh43jxbghGTaXoZawh",
  "key12": "3ABKAnU8531dUG1useDESLzLJUfJzKYJm5Bs4kTWs9JDn8UayDXHxswg2MoxL4BzmR3wXqQUDep5ULL3AkyZVTB3",
  "key13": "28b8mpiAwdjBiN7PrWL7HEcTi9TY4uf5ANZEGTevNuGbvseyU2PtS1sjagjENvdvzFo53CrqUEiJiqcxyQgH54Ko",
  "key14": "5JmNJc4HTefa9av7mDVr5FF4Y5DzmMxArHVgHVLbzRrD9k5ppwqNECRymuGUDcPnNdFepkXv5KHJA3wGYYPNfnrj",
  "key15": "5PQSMwcKwNGXVGZsfaojaAKAQGBUwvWfFCdUcEWQHjkFBqKUbqUcBe7rM6JXknJ6q68LCNTJzeZHeYe2Aw1gNwJ3",
  "key16": "5GasdL4rzAbwSXwsDZskxtq7VEJ7jz7i7ZzQfKFtW7Cnpjx4Z5yk7SDfu59uBPYTAfE5AwmjGRtoqTtX6EFLbn7k",
  "key17": "2jVectcuK42ZGGfnarQYsbXVBqPsw3DaSYjLcVrMKdih23X1PeptLEcYwxmoHuvUW5VCnALy31QWa1LoUpC8TX1Y",
  "key18": "47zAqFBzx67B97Nen3XbaFnXRr18XBbVdCdydtQwc6NGr2nUY8eE8v8uSqLFhj2csR93ppt7VHgDqzYNLXzsui8c",
  "key19": "3uCGiix1yBxa5uiyppV1wBF918fSoZHKkYftbVvAuZEarwUUvbHx6VpjT92ttvgEud3uEL7nbby5BZibrsFyjGd8",
  "key20": "kQq75o3JZDSYcZwgm621HWBBnM6v39wWvjP5DhB4YANnJFEaF61STu7BGSmWRb8fHKoQdJAaz9ymgvUTbBLmgi8",
  "key21": "4qDmQzr535BK8uexyEfJsMvuxP1iwyqLo781voQid5k9Fgtuwix2gEmKkGp3vabAhr6qvyHdbuHYDVApTKsbZyci",
  "key22": "2ty8vCGt8hW82aFmVAmkiwwu8mK2RkDs61TLrR6Azi4handDJMLa889hscyy6QAFdYfXayifs1UdBmmXeSufWUEo",
  "key23": "2HgT2ZDe3zBn4zu6EaCZyHaH4ziJhNeiQ9Z2LuodP2Nmz7u3SNJU8RRbuvkBACDSyCZpZaXbuY7UYT4MBUMpD1SV",
  "key24": "3aETg1uSJA8zyjcPHjGYhoBWyfv3R7ktZmwkQfx86L4bFsbGH5aPk59bkWC9RzhVYmps84qMfM6fQPMa9PULoHBT",
  "key25": "4RCZbWn3KENKZJkWH5iBUED99GC4ujHh8U6KuQYbFZ3WxqKRM7NUevekvXWh81sw1UnM1CFyDCbZHDJsQ6s6uUma",
  "key26": "43rRUnNw2Db9RwCkCT3ykJB6eUNw71DfC25AXvLyHDrY8eBx8SEYyywCHp1dLoEyMzokwa4YpwfVUwc3HTMKq2zV",
  "key27": "3BsKoN6YECwPxhfYMGHQzksNAvLtAyDQ9G5852a3JxcKojwTR23NbvAungmNVR9Yu8Cn2pnixFoKPHCQGUfF6NqD",
  "key28": "5iB9gqCybJdFzN4wwXsv9awqPsnGhdwDfgGq9WD4TW6947HigQg24mjXcDo1vWduW2J4QVYEvYf6WpCxWfX61p83",
  "key29": "svV9tQMGDx3TmjodSw3fSPyRikz1PTaK5FoLeN8KUMe46XnYYmyJwN98945vjptAyZgG23D31zRunMBjP4NSnA6",
  "key30": "2VFDcSiFG68bnaRNBeH5VBnUqxyRqYLZtYCBqyGBA7YutX1SkdEBdP2uKDNw6g2x5HLZjp8na77vtBAP24iV8J1d"
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
