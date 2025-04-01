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
    "8XaF6RmC7AbrHnrW4jpFiSxH9wFHajB9BaKyw1uJe6AKnQUvszHEjCmvuJXVUpMuttV2Vz9JGdK8XbuGxdZmZo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Lmkwkw3m1RF2ap2h9fyPRJTTEs1MBuV5ByaERmCtHCxBG4tZcUhVycW8toK3hpCpMaSecji4WsrU382WjtGg1g",
  "key1": "2U9nGLQieBs2FXc3eso2XBCCoLETL6NByKrqhaSHydgb8xYwKzGP24BnZJFtd5MStqHCEd95RJ1A6EQNpmi7oNbF",
  "key2": "35fRgdgJ6ANNRPLL56LuVWPN5pvVfLS1aC6VLaXotvBVvvTCXT1vw66m2yUdh7RA1LK7ZhA7vBxJsqDqNVT9w1sK",
  "key3": "4YJGc1HcDG83UGEKKUjs97gQL9WVZgKgJs33HeY21Zs4zoRH8DhqyXRPJBuXeF8pT4LDf6gh5BEtwwgSRbDH7TC",
  "key4": "2a8evxywj7zfnbPHnmy9VeJrd8qyMfkjQ4QDh2DzgcNX7efTBKXBwgEuEt33tsFtc9Mh2Sj9HWtdfWtQ7po3PYw8",
  "key5": "35JCC52E1mRBPgaZskWXoCQVRU2gZXxfJsRU724DGYPWskQiAY2mKME1WRNd3r14cfYgdmApgHkv3uVS3Gcyr4zc",
  "key6": "2UUNkKV8EEFZFNDpdA4hC79yjrygkdUpLoeaJ5P2MStQCzSVbx5F4cVBUU1Wb3JByXJV2GYeR8ExXcnjin4E3hNd",
  "key7": "dmNczZLg532FLRUzyDzeBzs2Tj9PFXX88tnETh6mFWhnaYYMAXSc2oxshG1TFUxqTG2zEyHWGnRSUX3m63Wrra1",
  "key8": "4x9vCiqmU2RHYTgnUcxgHfGaJjKkEzP7KmNighuSAqsAxN2NPFi9vmwNkHXiDJ8jF4RKooGyofDqRe1TzdzcXDBL",
  "key9": "2SZSkz3d4Pi4zAPGN4Nt6nWoV4phW12HYU8QK6fmDswKgrUc8tQ3jJn7GGNtrx1g6uMzgkx4dpoU6LAqoUNYrXtH",
  "key10": "5tVQQ1iEUs9ZyvdUwaX4kEdeaRqMUpYQYriQBo9MU5YHpnimsL9KCyoUbvM3aBTcp8HAjMJxp6jQeLEy8XaZGeHE",
  "key11": "DibitpbWJTg89A81ZLsEtSSsav66ZwwHkGEBZmM533AozvSa1nSwx9H9ZWtj2oL532dt5H7N4ehAmtRVBzTwFD6",
  "key12": "576vWQHXsJS74Mczn7k57PM29kc3XQ2MxdhZZ12JGfZPuqAQR4TEmLMfWjRB9ZXM62RLR6DmTngKAcAztMPiVaQM",
  "key13": "5sU4rwmS5UxFuURW56Kc8Zf42SVubhCGvCw1RoER6NgpL1DdczbUfzyQ23ATU2d2zgVgpx3y4pKdqsf1tbiyWzhc",
  "key14": "2uRrSshtmhLTXR1pFzH3Q9YJi2QZb7x6NjNGVCzXBzcjwXFezdmPK5Kc4wUNS7Q8Zi3Fu7YiZ41xoaN3hMyh848d",
  "key15": "4xLwVbSdgFEwVrSMyopkGo9hGt2UoxBk5q492saCPjBWjBoPyVP56hPAcQS87aJVmtrjazs2Xddctp9bVGTJE7HZ",
  "key16": "2RY4LoNVmsNriNBke1XvT3n7oJkDT39dFJLVYToPaSiUeCRRaLwwrHt1w4yQPy2tV5jWVnSFXtntMStdJs48UTmo",
  "key17": "2MLKBKLLWREqRdSny58wbkMZLyXjut25Zykd6widH1x3VZsoGKbCZx7JxdUSpWJLYn1uPN9PVpFtCQBGzH3djU4q",
  "key18": "3DjRwrpG6XHdFw4PKmTtYfGVCF7a8JBdkuTuhejvk2N8Bu6qPw9HXfwyXxyAQeqPcabR8bjEAKWQzVzCXMBxZXiX",
  "key19": "n7KpddsCgS8D5iuUroeouYi7xf2J81uBKv9LjXNwMKSZoQuPPewuQAbxqC5PYCPerqyx5qeNuWsoYEEXznV2dex",
  "key20": "3R56Yt4uQGRESy8xYEJ5ntEgSaYmxRuoefRbW7AWxNCgf7Y3mvDPiVLDQdyvVzR8EeKheRs6bJ6CxbDiL4QUyZcH",
  "key21": "3HNqDZYAWsYuZWDzAiL8a4641GRNG5q55z9bPB9bV6evnT7ZV6cvaWL1M1oe2Qe7QykxnbEeJfhN9xCivzkVp8y9",
  "key22": "3iWT4kLTjU4PZKZPiVS44hHZAxMw366S4pzyQceTNTQhqpek5paapLMgjduh2GVKz3G674th5uoez8ikwF9BWFz6",
  "key23": "2S9sQfn4TVs32nC26ouyeEwWPkpGvabsCvtQREqzLs7AE1PD2RLJ7Pq5JUSM8FXB3AG7p3UU3QG3L1X5nsSHk4Jx",
  "key24": "bkHUdFj73Jmzb31J3JvN8uWiPsR38V6FZti6EdeE9iKXZ13mNYcPRhsELvhVtmBkFMB3GvieGtiFdLJA2khtUZ3",
  "key25": "4ewJpqep32nFfnw399tWn2JTgJZjFAWhxvGNmnwrz4w1VuGkq7zVLoKG2LBBfXpf6eveedb9KytJcVYhqATtKVRA",
  "key26": "5JdPV6jDJUX3vVRKBpSTQNyRiXq5qmHRAFHficP1RCNQt42uuNmwdsQd9QzvHEAGh5G9YKU5N5iqeE7jfqmBi6oo"
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
