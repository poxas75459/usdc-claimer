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
    "5wg9GLAFAP4Hq5txhAiyjBtABwPVdCj5inxTeUUswp5PBcUiQsGive1rsp98E3gCMyaYzJusboNvwuKR9qgDX96H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tdbbgdAzBMfcjUjrxRg1nJ5ZPb1QHmJqMnHyyvEW8myopse4ExdhF4X4pNuHdzfFii8ehYGM34GKd978xmMtPXM",
  "key1": "2JuQ6m9VxL9k9T5PdLkRANKX1ZtUyb4X3kr6eP6KSmMjsBASs3NbU4riTyCtLUc4KCH5dKzBEBTLZzo7a1dGR7x1",
  "key2": "2dqendNSJy5unm6FeMKgFJ8dxX7ftQi5fhHcFS77NfyBkhiMeDTJ4igxh5BknEPC1r8YJGJ2sByuTorgsqBnFvVW",
  "key3": "5v8wLP7dys2rf8PQB5AGdw4VjAVEzmbAGNqGBaR8Vgu5pqyPeP92FgLFVwEtFy2cy831ywRtGHyc9VHhpwwvMao2",
  "key4": "2dwmdd3iQCRX9z2oLpJWXBWB9dZ6YEciuCS2VGXXmCWQowrYhZeqNfQQFuYNH7mUxoNy6CbScX8MP71fRVGWbioD",
  "key5": "2KoCkMMnGmji8ZN9Ty6Ds8STcaZfD1dUPLmDB7quh2S3Rnqe2FyNUXPPQZab9B6dreUtaZzRiLHmsQYsFBxx7ZGW",
  "key6": "3thYFpqCHFxvKQhY6GL43fYEK5KHv1oRRu5UQxuj6iKsZaoSZ9hQ4Nw1Fm4JjEpnFJZPhZaGuT4h6VvekqDcdTkj",
  "key7": "3bmME2Hd6Am92URCCVmKbi7SpDaLJLzbmxviwQFUosdvqyVgdt6kPGxjC1WXZtQBqB1WoBGqYQnBiF3m3kj5QgCy",
  "key8": "pQHHqr5zC7wtTwh8qfLFV5AM4JhmD97hQWGcJH5NdQfdwaR9GKecbB43iFgWhHNMRyU3EJiNdqm7p5qr3PMQRsz",
  "key9": "67FEcFz156sjQ6qaPc7w3NJyZyXCjz2nJN2TdQgQVart6BfKEjRVXgYgobtvub3kWyrm5YDSLqY6TuRMhm5KymkF",
  "key10": "2h42t24eK3Wk4PjyXszMi5ixPVZLxCfiyTF6Gb5QGcjHQVUqGwiyfhgegRAVUcUCV4is5NamUDYt2v9aTGWjWntS",
  "key11": "2jxB4fs6EeXYdEqS1iHQbAQzWBT4Pu5gTxEqsAByXHbnrC7aW7UVL6aUXAktThhbRoQ7JqEvcS2WyTXaF3weuy78",
  "key12": "3qxeEWQUkkuKRciBgbCfhNvjwJf8ucs7etgfbSwHZLFferydRDdUoFCutN9yQbgcGQukBVw7z9nohNd9pJAMco5K",
  "key13": "3FmaVjPs55cn6SSuvgyYPKWgzD2ssCviBA4FkTkdQYk7BxUoN9WDzB6U1DefxBPCN6CEnDXkxVyzn8MdbZKMHMcy",
  "key14": "4X6Va26hdAZo8AdFUfx3sjPBjQwQJ9shRD2ohRxxmRnKtV63mwbT2JPfU3qzaT9gNHHSGPNydGfophApYG8MqTeR",
  "key15": "5BoWm52mF4iUUnkDfLeH3pJgwSsSjfTG78DZQHtWj1Ys94zRLfpBvU1wZgPz7nq2qbHKVxjH3b6y7UDC4aSXJWtK",
  "key16": "3KbCS9Qd1n1SWmp4ohmeVJzPWvPZgNxRcMquhQeKHULpiry7h4LShJXVRg4JbJ16zjLVAUqDbafZcxVuvtWyzzKo",
  "key17": "2dRNZMsXf9oba5MVJdBL9ysCkxx3KX5yW3hKdi7h1CaD76ATGnXaFK9C5tfwZnqcMzwPedg2JSDyYcUnf7fpvjCt",
  "key18": "5FSSgDmzXRMoC5rkXt3JJaTLHFvbL4C7bEzHmQoXCtEPchgQnSYpnJXjgDjCNSqyHLWHD5vHVzETR8zxzv2j4tBa",
  "key19": "2xG8CxgH7qgHJbGP4XRSiA1CqGwP8nhUm3PZdBzsSGdofBmPSo4rVxQSCnwgrXKwMhUXqZesS1ZRFA5zJT7kga9U",
  "key20": "2TqxRYpymBgEiag63bN8MviPEikN9ekwzXVEwzePfaVPtFaePoSj5YE5LxJJkmhMF3zviMGT7kfJgZuRRbAeaEPv",
  "key21": "216znv3c1wqLfq1ZvaajbaHJmXm1acGKk3eKZ4AEqsLSPzeDpZSbU3Vs1HfE7oDFcjtmxQ2z6Dexf4ed6WnigQ67",
  "key22": "3wD4cWG4HizCogu8zAbyptiVG61MUFpSbqHP4wqgyj7ygTJZKXREP3TsvrN1jSfiSDAZ3JfVbkDCgiA4QrMjHHnT",
  "key23": "5dP3TGb2iP1xSGNy9mKxitmktWUj52RCW9gCL2XaoUgdqyvz6GPeKgoFm3FFYiXFfRqx8f3S2QqnTmks9JH31KZf",
  "key24": "4Qe1Ay2Pg6wfrkPhEW6CwBPQiK8x3xeaAMRZfXcgTtjdhBb9f8XLcGUC9qukwyyvF7ukyhYYXEZo5Mc7c9uLZsvt",
  "key25": "JgYd37URj6HChmYUNqFxJR9HihM8HdNJcDrM3rbcpBsjqMUJyMNVZPaLLXdK4jFf8Ffjwft5cSpB2X3KH4Hkivw",
  "key26": "2Lcpqbib9MiwTzkUNUdrrbFTBVmJFuVNpNvserrXDHcxAVCNErdULSfXVu9c7ZpHAuzVudeYXpN3E68GqrymVLhh",
  "key27": "5PqeHEaiNjaL6MmHs1wEnV7mb8mjHjzg31Jx6NENiGXF4bL3s7Pv5XLFiw8HCLACWpzqZGyJpmqHAR9vWqDKTaPw",
  "key28": "5HqKNDxiNxBxE9HXkAW7CMNBE1cjDwyZUs8orsLXPfQgkg76HyHCx9AvWh3yqgXQMcrpgi6VXjvhKvPK51kcRus",
  "key29": "3L5USQdjDFw3HyB6usB2bRriCMFno1yffBYshEhFnjBJASSS9feykMTKRzf6rd8qsk1pkmqbanCLBfKdtBZDzz2o",
  "key30": "3FYRStMWizdw7vDjDwPaPhPYc9uVbJBz2PP1zRh5QCEV2CnLk7yaRbfszvLGvB4q1xCRLdHcXGWevnNYvaqoug1Q",
  "key31": "2ZKcvCzhT4VG2W1Dbrgny61NZ3Ep1bZDgdczrk7QQFHpJknMJwzxyRaxAnHLH2fZ1quugz9VMTYCR1ULdmUQ8rrT",
  "key32": "3DKHkgFu7415CF6AJWgF6oiT9eoJTziP5JnGxRYLd9sp3xT39RBzTLMdnQ2GPCspi7Jc2A258vaU5yUACC52mhTb",
  "key33": "5C6YpEh2jcctVe3cp3Pf1wbtPvR4hBkxd5iK1KPfKh8QbB1mr8qAcA62gh1EVHF2UsSVZuUYkaBkUZhnEfHfnNH",
  "key34": "4AH6BkADBvNCirpgVvKZ7P2QCEo8rtkLty41CdhrxWMMx8kt6PP5NbMzLmY5o3415xJxk5aqt2bf6GXFGCeBjyEz",
  "key35": "2SsMd2A92ZvhkVsECMvQXNiGnAuvfUnfyZzELNjJnCmaEwoTsMh521qF9KzscqNNrpP5BLmFoeMBjHUnuTY4xjqu",
  "key36": "JANUJ7YHYZk9LACVjuR1Tk6SsuDvfdDPC9SCKZRTHqG7zwaE2ZSEB2MifQBUGMLLAX4qxoiFawM7UNEBkmnSwgK",
  "key37": "2TQRpzmQ5ThYVfXocRmEprNJ9x9URYsZZvNXURF2rt3qForEJn6KLvDoxNS8n8LMbsMnsG62bvSUJeb3QXmhZWqC",
  "key38": "4i3AiJh174sBd1XXPWACZQcDTSrbrc5iZ4jcedgFwRVCttUdy4oSD5gVVuaYywZJphMuA42yk5Zna6YkDd6wqmCZ",
  "key39": "3s8CkcKaqQpmf52SmaXRmhcVrpCcjgRHj6HWMPGEBTVyQLUetbUjG98MNkcyPA6p5sDVUCM7ogDtp6d3cDkeQWuu"
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
