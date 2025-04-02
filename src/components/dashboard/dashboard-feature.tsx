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
    "4GUWXcRmDib2eeQA4y9Zx71VgZ1hQP29XtPy8kS8KSW92DGpLJHPV3qfC6EnDY7W2EKGcZFMU5PtfUmhLqcMU7T6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P4w4BoCtRBkSsJeN5iFoe1N9Vb4938CgJfsVVyVbB6NBm881A2whgsbPvh7k2J2R4SeyVCjYML29u1n2bGvdXss",
  "key1": "3DFYrgY85Fm1cAzr7ZvoKDgPmo7BwNW431hEnvxj9Q4acMT3eckmFkW5v5UKznt7pNPaNoaLuM3wqwQaLt695HYy",
  "key2": "41bAnmF1A4twGAVKEx88yjNCbYsNjgG2nLqh1x8oFZwfRDdVjyNMjkExgP16XouyhsenXR3TacKrPpaVLYwivx5T",
  "key3": "4byyFBUsjRqrthDni3NswVTkajSyBpVC1yA8BTW6bGffiy5PQz9bhUTyoAYqCu4b27Mv36hE2zVkZNXri6wPuoBK",
  "key4": "2ZEy3F75cxHzsNHvKU9SmRSb3D3ah2GFXN6UJuVyfrhuhuL9P9EVmqwFSdBJYuLAEvwJMMHWykQxntTBETBQtSXj",
  "key5": "2RMe4nJdngVQtmjKyt9vLEVUx8YhNZRzq9kQpvJvsqvH2cNsHeNTQZVfVesJYSTCHq4ySM8Js2eaUCPhzya6wqdQ",
  "key6": "3EtJcmQycZQ67RqMVkbYPJUMrqb6EJgw7CdVVkqdChxKAxXq8jV2LypNuLuZHqz4xfjfjsSMLMJrbjLxkKvdFUXc",
  "key7": "4C1EzqDd7QbkspR626sEGbHEeMMkB4nVCsRx8eVgrvcxXZkQA8TydqzZTCof4YCm116zCEcEpLxAY8gZuKAcetha",
  "key8": "4qAxLk4cydJmawz2DK7qTq2dW755gUtZZPkM3N2JGDDqkY7oPwsm7XihtJxYmJQeJDhS2EWKqyynSmU4YssgZE8j",
  "key9": "3frXLK8YzU8a1dCxK4wVwHWDZWS4kg7YEWRyxWt3P64A8bvm4xF5tAN37rNRYKHE2BVRMGmRX7Jo3GoQeJjqqxDU",
  "key10": "4JUFB9D2YNEiexSZjyKfDtBn1Kd1QCqTTE75wyKh2nmxvhT8ZHW5tg45HXgJJQjKG8rNwv2R5Xzb3aT53yggFL4B",
  "key11": "2VPLRBNoSg4SZAbpNd1J1tq2seCNWAKjNdXXq682YC3Bz1nKMMch6jaNLQXpjTfmRCtSEVwcC1PpVHCLhMXWbKm7",
  "key12": "TGMw6Y1QbZdP8LXw3owJyYo9ax6RBCJULP5JZUSjEznjKCe6XWuxjfngYQeVEiY8snqU42XcXp1JvXa3XVQAHJm",
  "key13": "4wmNzkVa6eYH4X36F5PD3hnVRaofD4WzWswDD8ZXCFibStHqG1qT9jZbT75UHxXun1weDMqPz4hB1yPH3NmeL4o9",
  "key14": "q3sjWkgxzmhRAe36uRXL6XezQhhHtYAHRG7RK5yPfC9hD5bvQzm5qSUzgmvc1rCgSGyDGnePBB58sKs9wFqGmnt",
  "key15": "KMzdxZtscb9Na7eJtqGdcPApFWU9J33HW1dg7TYPjqZqdJMbPdHQKmxEmWAtAcugPrQu6f2sHUp1dPxy7USY12L",
  "key16": "2yo1C5rgiRBQ5FB5yyxcgZQAT78xp1ECPm75RmKoiyj34eH8upbSEZJYBLBftHqz9dZcnZWHiEbq44NgYrkji31j",
  "key17": "2JMGjmmqZMTkeKAuZSHTUDYcHRcuZYEsj84rxqk1XyvMUY3SRb5PJUJeBNHsNsVifRAqEE4dddqUfvsgAHRVXG8D",
  "key18": "MGSgafjgBMzcfUjigAMFWECXwmfSY2F8a2bgcDpb3WuSW9B8Fcir8hi42XLnfHQpfZhkD95zr6Pfs2kw9ZtKdb1",
  "key19": "9gm7VgTqG5tF38ABYt6M4nQNbrKwLe3ED1fTYw5VSJFQpgNtNUquM2Roc73xnZsbCMXMoUgfx5sLsxsAw6P8UVE",
  "key20": "4CLnLETUFsP2sXb5X8XhiEgyCJBgWnnnQYcjxz4LygAXXGuArMeKN6g3hmVqvPRzXkTqDYdoXXbmX1dJUARK8x3M",
  "key21": "5TS4Lpmn8PnNdRRXisTWYWKCrQb2BG85Bfnac2LpTLoDh7of8bgVUXGoPCh2bJTg5SCDqLG2trhZoer2scmwEht5",
  "key22": "MQwzGTMNSdMvHRt6yw9BxcHNHnsgYCgahzKshjGWuGTraZQ2jEfDrokW31M55Pxp4ptVqa6jjkStqJ6pz67q63k",
  "key23": "5iitT5usg7s9jMHpkbWKhR2yPAQ7zkDZBMucZVS4hKqCmKaK7oaCdEcyU29xHhGfPGB2qZHDasMhoZm5tRAC7Pj9",
  "key24": "2amFWi41YT7homRtbDt4dnosdaLzDJ6wKWbfytZeKK9PPaokuk4FnaqqLdfLeki8QyBUUEaNXe2CUQzNoo92MiE2",
  "key25": "SqkBVxLmncW1hoFnmXsMSSsxkhAdmmzFVGSKmrzoAovMdp2ewpyBW9t2GVy4dUCbWv5U7CsXXYnqdJAfFgwGXdv",
  "key26": "4R5ChwKHbG83ij2TbWz2LVz2zQhNPa8CSvGTSXy52awMHHqMQvHdaAkUG8fcYmXUSVRRUDsG6waD6q8qEC7EqVAG",
  "key27": "4dk4nCgrykvnw9arBkoVEBdXZWJJ8xZGMzbMPxopyhCaVmZTWLHFmZa27RBe2wAvq7HZXayRwVRcg6BuXLegNeCv",
  "key28": "3PF5ugj9jJyx2vEYCg8vuu69Div14S69LCQZnd9wwrFXrxyvSvP7BH3JcB68QzH7aWd8WpKCjx2nx6X2jrEMUCNz",
  "key29": "4T4q71hfeixKaZx8uVLK7FyiKe8o41PUWUGeahXZcMpGKQG6LpZusFSSNFLHNssbmWZXBLP1oKo2YBjim1oUC4SD",
  "key30": "5go5VVFUi8WqyZidk9QP4avoxM1kicV3HPKH3MwWHFLQsjW3v4rcQ4q2axRDHTpMxkb1iMm7uDrUTp3VebAjmwfo",
  "key31": "5EMp6MSzMQny3nJgCWRvCrVDe86c6poMmFadWxRY6HWDTKCZx5nHFRBqbV9nAg4KvKVTwh87pPpk9XSVbHGaFJDM",
  "key32": "3LaY6QMiWh16ge4y3LxmJA5QRDLVrKxgKrbSw2os1nrBy5cbwwmxkZnDei7uCUL1Lc9mikfSPi9A6k1aVh8LVJ4j",
  "key33": "3B68AsuYPSD7KwrUCQUcJaftbcoJxcPv8JCH1hm6Q7L392SsHgHSAtCwVEx4YrkzASUhpLf3uSgXHJANjJEVM21M",
  "key34": "3CXdRM3DaN1jS8soGBLDkJHe1pFBGwSJQ6bRMbW9YiRaCebPQDPYTnscLj4zpd54zgE3h4r7HnjiXecG8p186RYG",
  "key35": "4StYb62EiT3xVHCPj9iQeAickgdbuL1DE7A3s1G7aTCjnjMAEVsYmU3dgVuvqJy9BwtimhkAzYowKaaW4wi9T7et",
  "key36": "47fDCNzopztEc4AdiLtUsZuhMuGfAA6Xkno58nMyXspfpiFJbjH4sdcL7VcTP9U12GjLd4QG8487d1mHzwVKfuv2",
  "key37": "2q6XCSo3vXp4CRpZV9cAcwujmgGp62VxtxXNKfjVzmEXdMc1WYyEPLTY3ENuBqsjevNSgSDxf4bnmqWyanT4WrYL",
  "key38": "3we7y1tZTj6Kr7oSF6GA2TXWkbgL8HsJcqeFrq7T5BqA3Rhg1kfe9cBfNU371Tg5Gr6WcXa3ws4T9kxqerHSUNRW",
  "key39": "5ckbp6SzGNSQNXDy2bygKcYBNd6ef6oaRK3b2gpnGriEZS7D3mJSuCXzbk9XjKw8rit9NTovM5anLnCcrHnDTQqW",
  "key40": "zgWqbbnL1zoHR2b7aCnvCMea2ryHyB5gEyq3nvkYybwVkkQnW5AxcofevMTjGgbUuvDFE5k2WTmbmDK8ND68pij",
  "key41": "4sZMdFaALzWVLWgQrLrvSKSRyRkJ6tJRziXP9GWCAZ9vi7Br7mzDjefiQHT4R1s94ByrwMwnMirQLHg68ASSqoJA",
  "key42": "4Y7BijE3TPyekNe4vV6uRcUAQk9SSZ4skG7dRSSk27Wcfu5HNSQCm8ZxRx9dsjHQCoi2h5fjFWkVuGdQoSJzew1M",
  "key43": "2bgxFajC7QNHdu3iWqc6RN5gNUZ3w1icWS9xyXhiPUGq53EkFqYaQUbhBPpzgM23EcCGPziUxhchJpCkzkQcgdHV",
  "key44": "4kSgRoJbHsU1iUCoYGfRBiYJjMr2KnLnKYotmxxwQzsKvh7cB292Sxo64KYEe7sBL5YGN6TGWy6qPCJCP17AdyMS",
  "key45": "2CBk6eAUQms1ayzfysGEHjJtcbL6kRgmJfPXgY24ML7ShNt3ZVPL4RhP1Hf9AY6qZYqAJQpKwFAmLjxN3QpvHFbV",
  "key46": "4N4BTgGBzcdzPfNENf11auPMJbXvZi1GhCcSPc9L27HwW67YKt13re5SNYRB14dF5JCkkaBuKCXQ8K7gTK4ifw38",
  "key47": "3yDxd9CnmzFicy3PPiBaNzC4bCFWmJmS5ikAmiFxRDEdpAAsZ7HyKvv6wtC7CqszLY46Pe1g57kYX5eVXQzGEG15",
  "key48": "5RdLkx3We5v8bmu2zuKrWK27X8YnsS6J6kvTapDDzV4rYG6wgA3HybJbhtGaH5qbunVLx9BsuQNuf5gGw3tgsuBx"
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
