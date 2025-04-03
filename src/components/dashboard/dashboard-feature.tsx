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
    "3Q5oa55eDJocdPPCSGDk5DNZFwHn2eYPA6qHknVKrmg9eBRjZxkotuNrePz3Gba3LQoGV5ji4jdPmFfYshUWocym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hKhDrKv15rsBTvEGPbhjhR6PdamnKxaZrFGfSkowAtDbeofoUY4tzUgVsk47LtVHiZhBz49XVqXs2chJs8qvrP",
  "key1": "39XF4myyQ2y514fRgVZqktMHmHnSwwBxw3dBvHFzL7pMrXwnFMK87zSqHoaTeMs6hfvrqv1fL5grdDQm8K8cFoFe",
  "key2": "2WRNBaMcjZ2tVrftzW2jGu1znThuRVVPkR8ye4aiTjg5ViuW8b2JGPiDbKE9fCz3FCpDVYp3PxENNR6PPeRsn8AA",
  "key3": "K1dB78QAKt6KpmReZBFAhMa5S5vMKsGLiUb8dZG6zpn9vp7j5DU9cPXry1csSGdM3wPr7QaVNUL7QKMS3pYvAcz",
  "key4": "5WpBdTwibqbBo3cBNBuiokqTSZcAsb48smHZn6mApS1vjEAwSBUCL8sCyjoFWa7DXG6NAUnU8SCytRcJL9hKSeCQ",
  "key5": "5x989JyqjWvfCfEKMwuki5P6We7UdLWGu3ZboyqUCZ6R8bcTaNpUCdiQsg4BX3VHFV199tLdyEbPkpppepvnmGT6",
  "key6": "29KXNEvHEcX2QYZjsdW3nJwhxD98TH4RYLPP4rYYpGhYfMLKbc2GGhtDeWShEMj1G8Q7yMPBwcynMgJ4rfuF4sU9",
  "key7": "5XECNKwQCGceHt1SvijRTjzx5GdY2TjRC4zDaqNBFkuDTT1NA6469RdjvmhbWYiJNSt6ffFHXbf9imQQBphsuf3s",
  "key8": "3UTqPkDTPgPaKt7f58LTzJD1TAb1xPUHmtTUy4fFAyDoJ6YfZqFu9D73RjZWarFWv2hdJRgv29nNqLuFycedpZAt",
  "key9": "5eWqVqKMeYgv3xJnZpDvzNBQYUMvbZEwPw2b1HPbFnHchfTc8HKvJWFJYsYAFHM9tCCVAeniCLQPg6MRm2CSsbLj",
  "key10": "4Pj5LCDVRgMqRaV8qHLjBuB1yEFmdRE6b8LSebQjZtJonFvaHLhVbU6GeZ9F5Y2yJgDN25cxgJw7Van5ccwdEMRH",
  "key11": "3VvRDNojbM3ekzoE1UMtRkFea989kBSsVqqwJG5Q2FjsFUHBrHmdWhgWFafpW791eZ4f4hoxs3DmjLNhvQV5bcLX",
  "key12": "Ms1ewkTgm6nYsK3c5mP4TmSXAexDu9byfc7T8nZkCzSTppNMfT1nt2Ukn4EuVVv373t9bCtgnzypjLGiVbmERfj",
  "key13": "4jY2Js8PoGzQavdzteMHnYggkX2f4uW6XnSq8vdnR2sqcvDdPbn7bpojvdPJUSKP2oDhwvcJzNYyvWmDF89aVzCn",
  "key14": "4ZxJnDDn5RVhs5debg1G1tJiGj5wnCBfNCk81HUzSxz9h2J1ZaKn3tHjwjpgdwJ82s9xTm2L4WvTyYdYkVAc9HAw",
  "key15": "41nZwBKC9Jb3VHhLLnwfw6B2p5GgVykDwcrGxkASRBN4MNtMDZqQme8iSyZPR5wEstaXG7zxk74jGFFXrFUr89Ro",
  "key16": "2BjGtVYW2y5RQFWy1tdxprrzgSSmnjqocPhDmUaqCMip55nxTGWgpjj6yTfX8S4jBS4qbmLiWVb3AW9mRqYhNPjd",
  "key17": "22ZB2xVcJYwPv6xao31QZ6FnUaMNhpmayPJkrncaeLYXhcd8u4UBQuoupWSAeh4FnBBC6dLaeuv4VVYuii4oxxEe",
  "key18": "zv7UQLoB4FqsAC7ocdTEnEvsuDgtXjmw6panihe7sfyZUydizxt92AE6yBydCt5yE4XCUm2yqk5ULqMUw8yDcS4",
  "key19": "2snSuZp4QkMmfVnrAAsbcoLtrrg7sX9uu4CkXwDJmaxfDCegvKMLkiGABiSyHGgVkzMCYq7aoJJoJGbCD81ik53N",
  "key20": "2L6SP7cFv2ZvQgW1585Bb3AtvGKL5KMr8ehswhQBgtbDTFtRkg75TDXAyjKGVn3HVeXwedHVj6wa5kyBc6Gxv54",
  "key21": "3vcK2kEZFhSgpb2tshogxUArQ3DENFDV5UgHgiXVDKpo475cSEUBioG3kQLr878Ke8ot4DkayFGWmQeDRg9GKbbW",
  "key22": "3Zvt8kzU4LLkM27R3eA9j8WnJP3ZRpXZW8ef2TgumfMAQYeUBtTk3Mm2xJLVuEkd9AW5hmoF9JBVgEMHZFnEvdSP",
  "key23": "5cmSfXQNedKnqaqiWwMnmBVdCSjSTyJWZntcddxSesoca1ty8Ct2s6YAe7R9mN2tktF9PXerwdLBZMjBizv4pq2V",
  "key24": "5GLR7QFR4DHpvSEvWzBvhvXt5gADDzPf3AK9BdrRGQqRPWqL1BDqwjT3NumhShE19ek2wYzx5Uswzr8V4DyVhDm1",
  "key25": "5Y46uHtoXgbK5Gfrxp4sne3a8j8jeFxqxRB2chxYYKussf5zA43JmFACJr6AATza9R8uo35Vt6YC5yJfjYjjg5Gf",
  "key26": "3oVvXZhS6zrNMAuUN4fPLv2VqwAw6QzPLa3aDXpMVeqbza9T1zJ1qhmrA9jgdJjYJahifzekCxHoFeCNEghJG5CM",
  "key27": "2JNoMVoLMuoPWbRbaM8cw5hSK8e16ZwXf5NREd8v8k3swECCwya5f9BvpJKQzMq5FGByr1DiqiLqPRYswZaXyAmA",
  "key28": "3vm8JxFkH1LAce52MyiY3HmTo7iJGryoKx97MzgTV85KNEtWR37PRLjXaV5rDXesJrvLr7AGRU2DhLMM72DSUReV",
  "key29": "4sCJaKiWvv2fGdiYFFzHZCyijMghKzWWjVBAmyamCT2DVuafHHozMhnSCLP7UENn4cdYZZ22muccDjH4JELM7S5e",
  "key30": "3BrfUXKPjCsLDF2BBHRSeTiXcMRNPSBoHqt68GLSytsXGHyz7A2Lbjg8yYsJtfABbxA34xS6enQmBSz7dH33PU9T",
  "key31": "3itoprPWHk9NUkUX1uq9ABrE3RzoMYSL7fhMyvMTvReVU1mKuTUFwqy8PpU2RRrmxMmyWb2A89dueyEtaBSyarkB",
  "key32": "55c34KRmHhvspBmYLDWMsi3oSHcitLrApaf4ukMRcqfSjyncut1pXhXuESF7hiU7Jj1nMDZqeXV6k23KS467av7e",
  "key33": "62t2UwKbbzZQfhDaqXjZCGizWRgJHpojmMpgZHv3CAjYg2SUMT3bdLk1GztYoYKFB2GewcKYTt1e6oPcBkrewgGW",
  "key34": "2HFWwgNhoeSpgTCfET6Mm7yqp3K6uJtWYw38Ugs2eUyUEDCyKpAF9m8iQeiegvEpB6dbKmGAQVpMSu7ENjk8CLXM",
  "key35": "5p3vNjThSvD66WE5tWpgXWmA3pSaxJnzdnA49tmdGAdGYjyJFTb2VkRTY7LdTNkBUmeQ9e5H2Xr83obUR8ziU4XC",
  "key36": "2BTRfbbnKtKUNux4oSvLjtZ8hQ7NT5ktTAYHHXKfyBMLVifj9YLErEU7W4taX3v7rbzhivW2rRR9hB9AGKMShmjQ",
  "key37": "3UtPSt5jhQ26VDYYnueeggJhZcu61xXK8HfXCS9iP5WkMaxS2Y6iynuM8ATQdKuJrU2jrAXjwEdN3pFpCGhR4nLe",
  "key38": "4MZ4pRLDQzvjTn3J5Fyf5AmStqDJfgpuUedXGV4Mfgf4oDZPxiChzeCxn7boVWcZkpzTBaLg6G6NGkhZ7ZFfxCk1",
  "key39": "3YW1jYvVLphWyW2g6EntkT1ZSDQd4a6B5nqtGwS4pkrL39LyVipL9eetbgY3ugafSgtxrbvxUGRmZ6tgwHRYneNc",
  "key40": "5dsoM3vSAQTF5vdXbujS7Ht7WUtRRC8KuLbrUC2Qehzx4MWojWsZJht6fnsoEDCKN9Ldx99uWRRVVRBJt7QLFgJ5"
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
