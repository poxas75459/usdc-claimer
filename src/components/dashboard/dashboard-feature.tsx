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
    "fgfLbuhYzsXrDHPG2e5k8cyRcvCDeCiij48kPP44pCQaP9Z8iHGBvAsua8Un1vA74UmKaMFRUpu4v7HNCXapDvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MK6cnGHedUSijn7HZsYFmrbvE5Vp8Qc1YE48an4Sfvc28bu9z2t7ja3bH8ke5v9559iMfCxyqf8QXivdVikGLSW",
  "key1": "4XVVkV9YGahfYbUoukvzaWmBRBrrTwi2Ffki8AeWU7ei9VhB4XzZk3GBC6ELkTNxG6oUJLCe4FQaFBADmWRM1ore",
  "key2": "37tNjwjMWkKxDYboS65RdEAgufYabQ8su7cmFtVwfKqsY9HbvGNPD84T2EnytpfzBpDtmdiv9iB42qYXEjLKnyJe",
  "key3": "3ezLLu1u1nQV6BppvZh1hBuLp6MtEnzTPNnGHu3NWyV33uYJCXEw8umyQcwpNBn4Fa4nwDaKQULd3Zmt16dvzM8c",
  "key4": "66jtSdA5h9iGbepZKjzQLyGZ8ncxU4rFZURizhDuQGfRSo3JSXtY6ZA6dvccgUkVGG177wP1XxrinaQAzsYHVZUd",
  "key5": "2veLRXBmanwgHXW2wtvy3NvSQGz9pxx4WuFZK6coyNq5L81Q1p4A471VCv778RNaebXZjUf8Gi3YvUccRVXmrPor",
  "key6": "2oVK6yJWdy6C6ZTtoTbWUPguxdwpvogPLFFHY4kL5fs4x9CV7f6iLWL1xpsr6iPnKbqVugkfMDFLieyqBWoiV9AC",
  "key7": "2rg4gaPTxNM8tJ9Lz1568ikxJgeWSnsED8zHsGqae4FL4hUY74n5XpstfgQDuL1SDJZTddz6Hf95pK96G6UU9kC1",
  "key8": "4QYLSr4b7yMxdmfRd81sxPVBYbfyNRvJ16ibVuY2HmosGysA9xdfNhXDc8BoEpcGmqb3shPwj7whegbuJUfJSDW2",
  "key9": "HjMg5sBRauiP4NcLnzyC9nNqmqRf7YLULQkvDaiJKYumyZcQAD15rkPW5bqLaA34oByLbm1g6ERm8QgK7EE5cyf",
  "key10": "56L8Cx3qbsxesxwEDjTeFzsCwudM5NpGzHCFvRtvX6L3E6BHGuhXy1exmBtA9fk5vtBiYzXkrkJa7gB9XuYSS7zG",
  "key11": "4UiT9Tq6cPszfvHfTLPa9U24or17GVrD6Hzm7DMg19c5w3FgEKU66PSQW1GBF9JuhpgUjkgLKm7zMdKTyHEX68wd",
  "key12": "4bBW4n2PvE8xmMcFaeotgF2H9cMp8kmu8dT9hK1Cob5Z5SfSDd1L4A5PYBrz3in1zY2YWLArV8EyV5GxtJf6q7qw",
  "key13": "4jHpfwzRpbKt2GMVkQL9CKUH2JJPUWSCscyy24VNq17QnGZVLck72bFmhu7noNmv3BCa4rdEQkUHvk3CbLQcc3bm",
  "key14": "3os2YpF6J8BGKQHnC8XsbXWBZw2ytLY2FqND9wEQt5PWAhUMcryGKF2xJ4tN7fcMBfE46oS3gBWmuraB8q7JFGeY",
  "key15": "5xDnHw9cBcJ4PDmHYLjoGzQrJRWEmyWTwxhGDB2bVt4AW51uYwdp8q2AYMDZYbYL9VtP6KwxRSQeVQxGCjsP87W1",
  "key16": "4z5JV2xQE4zEnNPHZKDnNRPEqsM2pvotG6kDqod3SQDPP774nZxzhKVpKuGPYnj4w8yEQAzL9FLiEEyg2PWTHKNr",
  "key17": "4y7vDmj8XM5pgTFA7s8QCBmi7i6U9gYYiD7rqpABcosc7WDwSJ9NkSxLoGcEPi93PDksz4BnfUm93dXVx5gPdwwT",
  "key18": "2dYazSe79HZBK153RyekJn8rf68dogyCBnxti8JGzbhoZk5V2NevtdfL3eYnSqXF2xRv3b5TMS1kJ4bkzbB56ybK",
  "key19": "nYxeF5TxNFvTnhGnHS9AUgFF82kQus2a157PtjbZLtyiJggZ61M2YYmg4NYeiUQunzfyJoXX8VNDtNDzBQFsqRz",
  "key20": "oVaFevH7LEmjwnHedYYhnNFZRUuPx251KEEw3cDVCVCW5gZsxiKJAYa7ZU7LcWkcwMTUZK2Cf8skVB5DzULmqtY",
  "key21": "2m7o5VP9RoRVeoBcTHwWuY82Uz6JuSkPaKL5Ei1ET7PqodGFxMM3bSoqd3zLwDefYRnET7Mqcb7EZSjyy84s8B2c",
  "key22": "5z2Dm7xbnzNd4ggyHVothr13YrRqnRaBFzgWPxfJwEijkG9NskTPA4EVHda7Yj9sF5UbzQZaXeZCLc3LgEdzvKpC",
  "key23": "44pTg4ucjq1jpLseDRb6ALsq94ipM7rvwtpmSszTbhYffGYyNw5xLpwk9SnQz6TNj47wbokN98skhnQ7MqE9RDm4",
  "key24": "32w7HJyxzxuxZEBZccpVBBCDEiiMLS7NGyneyfRkWv471Q4UYeunJmZRfYNpFkaPLSAnRQeP1iLPUbf8ik8Txre5",
  "key25": "25xpjaa7WNUL8GFFe9ywjuZ33u9YsVtNAVwzPTZL1JdemACYfm36rqZo2TuHPYcYdiw4pDMUDCXxyq2wjJCd3ViR",
  "key26": "4na8vzqcHrqCJuU7CFrQRTrAUkqxD3KLrU5jj9LQhG6nL7HVH4NXEoAykcJsUTJZiy4Nq4Znscc8RbNzDFsDNTEN",
  "key27": "2dnrnV4fanbwWTX1TQ1rxUgjn5joURqp27N8F8Xyi4ocMqpvTDEpEMpCdn9X2RVWLHoJJrJSQZXZG9YdXqqJwAXm",
  "key28": "ZNNiF6g4EQZmY5pGjvs7jjXJ1PPtP7WteGjfxSyARFAtm6HM3FHJUy3Ar9GLC3MNJkwG4R87NjPH17Mjs1vJmnn",
  "key29": "3FpVup11B7w9aZwoRKXrEEo7zF9Cuqz3Bj51zkUMTWS1DpXJSZckSVxoB3Rymg8SNEMY8CafFSjNnTBdTva8nD2",
  "key30": "4SmhVjNcTvWHpCX82zqqoXFLZHxHkFfXK7v4z8BahCXnRKBJiGXRBdxUqmzANzMejbpQjotawzoWP7qwnd8wJz64",
  "key31": "26WbNYb2TdRdCk2CMMDWLUVBcuA28Fj731stW7odXKf1h9evwvyKv3NmcoYzZCv2R9K9f2pP8MacF74iBLutZvQt",
  "key32": "5gkLzrZD2iSaHZgbg4BNPkQwuXmApBxbuDDy1EXcEMD9ddwam2btoH8DgjpRAAshbkkFzqZC9yGcVrrzv4DjdQEG",
  "key33": "2dCnxMTZKhENHc26EXKdMZP15KyCEP3pdNeHLz1FdNCfQDr9yTta9oEFLjBX8Ycrf1p8nYiCY9qo5qwamJKccBE9",
  "key34": "2DsWWUj9ZJhMZuRZXZPAn4pPVRF2DoXeGEp5BSPQT5yRDdqeMi2kHM5bnPbFw4YhiQ73Z9BoWP1jt4dvFVvLbvwd",
  "key35": "7pCwm85BGZsX8rjiRKuYUKCxt6dhGjuyKfystpEw3MePZ1m9wGuZA1YQ3hDzBwkXBwD6oPWDj4KnCFNCKU3mtqJ",
  "key36": "naqqScuhF9aSycDYsAm4LhGSMeG9FFcrFgVxM5fx5M448ZJ7UFkc7jU7qGYNiy3ELeb81jLstE3vDft94haHy4D",
  "key37": "KQm2fd49Q4PfWfo9ZBYu87q3LvMDNFbPpRuq1cthdBHPgSmg7duE2VtFkNhA5crBDi4T95jFfgvnFu2CfcZqVgU",
  "key38": "2G4f4z8yQx3Jizp22E6XK5GghvyEMDtXbHWPhD2zSxEtjxh8iCzU32tnhQ9i2sRg5mAVMXATJfX2B2KoDcg1h5jb",
  "key39": "2dbUqRgQCAMy9GRE32Rgg31qs9L1q3HhAk5r8Zw56yGhHsakGRKaQF23rqQ2Mj27RTKeRNXHKTUyd8noFoqAvVmK",
  "key40": "3Ej7gssxgEEsW7ga6JDXDwposp1aY7HaU9wuP1bYHHhmLNYMQBcUmxGEYHc6j5gpQyyjbCW8rwFNC6RAFf8BWsdN",
  "key41": "3XL9USzFwLfmBFAbVj1d1a7LVT6jvkBeXfWdiTz61UNE1fmsKtgNk5SEveKzPK32wGxhZjuSUX5D5BR2Eje97cqS",
  "key42": "5MvY4kcHDhd4eKb3NDYPw1kkH3KMbqEzGWKDUk2vbKjWX8YRsn8j47A2KZ66spV6muAiRBtcFbadMt1kpYRRqVzT",
  "key43": "NwkmLczJcCuYE6MsTr2z5jQEyPgc9RgBoWPoEimT7qFrSsTt2fSNm96RFNCq6R7A1wEbJGLTL1TvqCi69yjBeup",
  "key44": "4XjDum3Z3ULWh2XkAByx1c5L9VY7w9DHPqkRvs3zBXvAdcJVkuLMNQ44QahWwMgvQUZc61dmp3bDCTwwucJu29vm"
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
