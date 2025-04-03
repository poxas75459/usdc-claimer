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
    "5WVyNtB1U7bjcbbsKcTXAcGnbT71B4FjgDZtVvzfs2EuqiTunmKH9GvX3hFb55mv5JvRZ6dvwDTToJHZvHqUGCNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Awz6trrgNYCtHz1zxCesXLdLas72CFjjEdBU5sCUui869KUAQYJuWna8ormruQUPzeabZxWSQuG5b1p9EtLBAsa",
  "key1": "3KubdwNJRWRr6z2UvoUjUHYQZZraza1CwKZrpUCE5KpMTuZakZRHZdBS5XHdibBcfr12xoR9KxXnb7H6Ym8rX9rn",
  "key2": "4g3DfFmKSCuPh5P9rbYDm9v3N7PBJ5Kp5ZXyLi7yFzZSy8CMZmRjMJ2mVUsmsPMgwPky5XhgA2PNtn143QxA2Gy",
  "key3": "E7bEWvMTxjgMn4uvk9ZAEVKQyyEw4nSFwqSH4fCgRpdvvfz2z2f8nWhCyuwUdEvHc9pXVbQNPQiiR49CqWKUEAk",
  "key4": "3EtYcDLHWvQK3YwTXCYig1aUo9yWBEDnbUM7r66WG612joLwaaFVN6JsBhLTGEtnVyp3T5b3xg97zyvCr8b1onQH",
  "key5": "3keAvBKDKSHycsA9AwDrfrHGyddUPVuN8A43w3zPvWXiyWAUzLAAijGYTeqZ4mSQp7kwGuRDGjmWqvJhQ5uu3oX4",
  "key6": "yYPGoNgFarNQ7EUsNMx88wToCJMLz79cCpExeffqStmcB9mS4u1cPKbdDzUpJVmaZxF6kJRYoTAVPLPs5qprkar",
  "key7": "XHZ9NSxzQfXEN8G5hE1MD8FppPPWnJ9AYg9vXx3FHxHivC7LW4fPME2YgzRNbVz67C4F5zUSByoTdf32eSZbjUq",
  "key8": "4mjzwEBSr2L5Fjcq5KLn57yTAzimFTsNQuAUXidcgWvyUGutHBoX9mtusiFZFXDNEFd92BbixrNNdxo4nWdHbotk",
  "key9": "5JZvfkkS2RLMihkAVnZRu9bYSaKQYZuVoMQHXW2DprmxoUPG6RNznsardLk54G2Sp58zhXR1xbAm8tbK5GpNW1Qb",
  "key10": "4t4nhVCcUi9hPPQ1kMyijQHb28WooWh5p2FG9zeGBvgnT3XgHVuf4UuZUZMvQNViyarpm4SiRMvdiq8Y3DqPaGjB",
  "key11": "Krzu87bjyM7bkdbRHdG6BfBMSk5jw7JBLf2CNHMhf6vEPGofgDQcEh6U6HvhK8N9s1VWYLV9iAvb39STdmNDfHk",
  "key12": "58RenX8JCdUxcY61XHJSQoTWWJMbNEKfNTHwQFXwmKdBqnVNd9XL1YSQhMssBbkqxNfXwDAueNJ1jQqRhYt4fJ5U",
  "key13": "5TPD4j97vfbJircZLfjH93cPJ2YWCK1kUBrNaLPrqEfju2GvzhAfyN1q8DATjEMwXUWxZVddVpGVijnAsScD19t6",
  "key14": "5meyf6dBsqRMj3m4jHTW2qth9DyTAtdrqyUBeMPrt3TkoZ8j5KFCbKxtZZUa2GuBNxT3vtXDF9UzxiJwmkKWgj5n",
  "key15": "4LxiH3NrRi4Xvc3QBPP9RzWXHhaLACcj4eqpR9ftPnoNjJ77RKYxNfdF7rCdVH6ZpXkHvnn5yAtqjKgHkrTU6D5p",
  "key16": "3kxv6Jcq8vsx7Lie2P77nEQ1XAB3T9Tw48daZVKQLJPoh5CSJDYaoJ1vJKCqKyio7mVuL4dSKHAXKEfJYF8uxU6Z",
  "key17": "n7q7irmJ8Sa3hEm3N5s5TtsuVpX1HpmTEPv58vPC6mJiE7snSmcz8Lk35CvA4SR3nDMNzvw2nGVjv592CHZYSeZ",
  "key18": "7PufEAZsH5EGVF8peH3DiGc6SPAAXzRiJorBjV8JBLkCy11fmTpXtazWDYgSGninhCKcE5GKkRjCzDnHjJSe1rG",
  "key19": "4qXE5Yx1GV46gGAudeFR2zrfzdCjFeetrJV47bYYzAqV427NhuENgHYNirRGmCLXaqWto4my4NQnWivAhdQoyzXr",
  "key20": "2uaViaKrt3zmVeY35x9TvWK5SU4Rgt3oVKDQ21wxFYMKzuG7m6bHk6jen5RfjfCqAiNHB75MJBYa8trrQ23JvE4b",
  "key21": "46YDrDpNCHMueLaLfF9wfXW3b8Ao1EawFreHz9vSfZfbkvAz5SuZA3qfG265niYtF1cCyQxGZKk5AEPHVe9FcDBQ",
  "key22": "5Q9WkCF6mottJTGGTokCVUa2jsnmvzfc2F2BKtHrRo4WFWG2HGoKyMq3BKZajy8ZpmEUan8Q1rn46cy1FKGWrorp",
  "key23": "5mb3BvzmQwQXgdSg4GqVoCZ6R4CK2Vq3pfdHxsP6vMwmMydS7U5UiWwezeDAt192CXyBgXa4DX9Siqfk2V5rwPiA",
  "key24": "RoBfS1bZPFykShKWK1Q8yzLEX1LcVYYoUTmyiD4KEimhQvYUsYVNDz7rR23ErMSu6tCdf2wudnEhSs6JCSdHqvg",
  "key25": "5qHFLyQFKh2vf5jRpSUYJR6S7n1cJ1VaWpfxyQW8tcwnMZgtP9miMEvEgzRxtW2tMeHbRjwLMw5cD8djgLtcWSoz",
  "key26": "37UBwoj3kvLNwjsRoGdyzuoNryNev95N6jsEUF34hwMGngRxazFn6EJqFrbV7kbqN5HpQxtKJCTtDQC8KrLR2VLc",
  "key27": "2mY1jXDyXsT43DnVR7GzBmYzpYi8sF8iyf37jnD1FuamPZQjg2bCgyLfEWgsTgyo2nvvacZtcbLcFGB9v4VsiZUm",
  "key28": "3XNtB1of7bw52ytLe5uXokahp63uagJVsCVUeoJUDdTJwqZ6JJFJE3xu53tKgj123yJtAjS7iXfpNWo9waHTvDVp",
  "key29": "2vB12TuHDWTSK9PCbn8mram9sKFHLiZBHjvY35LFcJpS3h7vXMQqijh8tY9FpfA6sY91nKo1iEN9oKDFZDjwNv8s"
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
