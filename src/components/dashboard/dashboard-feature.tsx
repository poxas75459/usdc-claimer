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
    "4k2MRt8BLb15Koehgc2oX1FLYGfhdBywLbsQXCSMqbMS58w15pjR6CAbs5rCiY9LwmBWukyaYisN6xU7zFw33uaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9Cm53L2yMLhD2xaHqoMRB45UL27sp6o9NBkgc2edNHjEz7QoG9qitzoZULfSpckRqoQnFWP63cPJjRz8T4Th6g",
  "key1": "4rbfPwyFwX5hQEF6K9EuRLowvYBRheCZDk8F4vw957iSip6cJJcZsdhGVB669zFASafZAmVDPenwAEiBizBWbavD",
  "key2": "4EmdB8wqDgA3mh5j6HdkFeDkz1b8NAR4Wiw7atxWt1ppUWspSk7grL9bs58dWrmLjZWwsrthGJBsBYULyxB1dds3",
  "key3": "3B741HmtCcE7EFuq2uiS22JMgFnZKZVdxfQbFGy4EEUymjVfmxmMTL4BVGewKmuqnaKfQeWNo5zHNP4L53nChVuZ",
  "key4": "qXQ4pQ1sKRvUiGTMcNmbmFwD3vrLYc1gSWUfZy2HtyQAUzKuaF8UWjUMMgQr3yKF2Pj11tsSJtTx9XrhtQ3jDgA",
  "key5": "4Zfd8FeKC3un624acR9Z2DUirfivJLduEQL9ktUL1zhDvcM789npaMDrDsppypqTp5wDLzoVY6pdMCbkcuTwf9Ay",
  "key6": "5Vw3yTxoitnb6URszV8kiP32gKuX6KALQpC8RUDUZ3v2biKTxq6em6WcP4uUHKPuaDZEdn1h9GkhQqqBid49oxut",
  "key7": "4myYoK7DFiysqWerYn674rDtMjZPYb1mADFaJb93ZCXqEoNN2LewP6hx5pwEpDAMYs7eLJ8tifxEJ19nuyDDkPAA",
  "key8": "3k4kK7RF5urSiiMUvPuMKBm5cees36B9C7aeNi5gsgeexQDfKVZ6EtX1dj2g3zebs4LMU3Bz5phR4jprL2GYFff4",
  "key9": "5QfMVF8kQKqsqkdFtAV1qFcyBjTd1wdE7d3x9C734cxe4W7FmKJYbYhJEXzwBCVX2shQDhBSPUKanRktJNFJfy4U",
  "key10": "2GDiRQobJyeuZ1mHdLtGhXCTrMGX4CijHvHQZCVTxkE4sbHs1c18FzmA17xNjxkmGnd3ABLEqNJ1H9SoMU4y4rEp",
  "key11": "5zY6GrXqQMTijSDgthQ3Y8qmQ76h45roeDNQeWs7Asp7tLyFBJZcCuhg14v14ZGEghjWQPJybmuXbBFRihyoMzXJ",
  "key12": "3mKMLTTaBnzteL149fpsArWfd3pM1vxmpW25ZsdtweezpGKGC3FrYEX4EGeesaz4zTMJzjPfCSGipw5Mapt45DLo",
  "key13": "2Ga1Mvq2GADbFanTC3cTVTip6iZWKpTSkJrPRcF3Wyp3PS9rvmsu9eKWKqJnYuN21pbDV2TXj4AATsuTTDdxWDQC",
  "key14": "4m6WPbbyjDR7v4W6uuJ8pQwQw9hxunkpdrJcQALixGJqhk2QMBvFvpQTyG7ndtYYffxaZuLcJ158T1QNWJyVFTD1",
  "key15": "2ocE7EGrqbCEYpt2LhUwSSWFBRsCBzWL2tuN2qXANmQX3rsgEGQfrqGENfkYTtXfKquqk64jj86qsiRnv8HqaY1v",
  "key16": "5rrhuTZA5nn8aVXCuGaSgz8YV4QJ7bFbzhHH6m28qCWs385SxjYM4GKmH7P82Fio4bec5rhR5Q8aHEk321eK3wt",
  "key17": "2PkZxmxy6TDiN7RUuq76fsbVGagfbh18VSg5uTkVf5ktkXx47Aq9GybCFsM7Y4HBNNRYLe7CgoN9TvLpxpAthMQi",
  "key18": "4vrt9no9Sw7DaXbkrq6a5vV4dmgqL4W998g8pUSU7ey2jQV3uv5K2igAqgrMzhJ1z6TUN1HgLjYKwRZCmgUHhaMf",
  "key19": "45cFbhxe38aXwGjumydkzZ7cWCVGhH3Q31eUQZjRaukhrUFZam1JXuH57CqHQp4EaxP1VWbNTZYPyLpMKBm2sU1f",
  "key20": "2fPcsaWbvGkj1svPwLFvH6F2AvacRRFkCVn1XNYb6kpUzNS2pi2bbCNgHLdMzDKjXynnGaD819NJkY7WMePaGHxN",
  "key21": "2foFb3ujN2x9Nx8MgzVoUWTSU6xgpM6ieAjxVQa3enEtnrJ59KV7dVwJGBVZsqqyZ2pnmcHCgzdY1BbxyDr3SFF6",
  "key22": "5EU6bFo9AnpbCAL1G8qiDosEy8Bzi7zWrz5BXJNp59J9P5bLydXfj4RKWFseReYJAK4BaM3B4SuqYco2zkH2pPaR",
  "key23": "5ViEGDqVUnX5gKxUfQUw7DA1KpVNAtuWnRLziop3hWnoRtNtTG92ksxvxLSdcrTUGf9AMAezBvb1ywXe1wMDqogK",
  "key24": "3p9Cp84wRAiFGpkDo3hcWCwdj3Nqdt49GdVUgRHwukL6UfyESn6NCY3pEwvxaP1bWatDbxBJ5M6TDbkEH1MqMtc9",
  "key25": "4bRSK1ovT5jdw5EDpgZQS5mGnMAgT4gkv4aw88KcvjFysynLbwJSuE7UES1SAz9FfZYYJk2vMJZFjZLNVycfbcL9",
  "key26": "eYKgz4aHjTXXMwB5hjKNoSMnHvqP1TH82Ra1Fsnodxy8wRHBcWHuzEsFcA6DSDBAyDBjgLYWsPDGSvpVn7nuKMJ",
  "key27": "5Fk84ao68VczxT4ghapDMYaxHPRr32z9f1Gind7fBVP8LXPqVPmkVRAPApZCAWXj2JkCTaSJdbRCnN1yZpLUY4sq",
  "key28": "4vMcYGhN7o8LZmtZF3Usc7eotdBFMjohGSQsvyYvevfcvLSv6hXgtACFtTXgZjL6rj4RpRm9erEPm3uHD6HUT1o3",
  "key29": "2Z93vUk2KTEZ6nSGZGpSSUmihK3cnFdzKw84FK455FH7ALoCVWMW6tYhHTunoD14F8TbCW6jvTG6mwzkjYQoWEpj",
  "key30": "4LfrWJK3msZwTZR2x2xvY3ruRyKmgRBhyM4ko3hmcSDPYY3jrHKW3tSaZUvuwWCfGKquHgaBHRXqs9nYddYgdrPd",
  "key31": "3z1BePiQFrHGBpcDSZCo8pgFJ5JtebQ55BPfGZTp2ZMxh1WLibFK95g8mB9VrqSpXUFH1WpbiZED2xHAP2zB8ppS",
  "key32": "2q64csGRSNabe1F7zYbCzagGPR1oNAv36iTkfRbTNBv7Vbu42wua9mRxRvnbSDc7yqLziCrd8AsVpoLZ1MKXCJfz",
  "key33": "5QmJ9hKpwr5TGJwyNyNtMXExrE5fNyEfgVgKgjBjLZTtjrqjhskzZYwQyg4uW5vmF9xWHfo94yXvykcEpqQy6jur",
  "key34": "FBGa9uDzaDbwQwGGfV6sERvjbPSh6h2miwWQkFyLtmjsYFDu2EHv62rj3BRo2yTD4WTAgKdipRzjgNVqQNWMTU9",
  "key35": "5DPZ1Cyb4i4ZhxAz2zTE8toW4U6o1iXamvMa7wU8xLddqiN5cYof5aSmjHoJLAqYvJkdKU1Csp9SQDeREwGWWM6E",
  "key36": "4UasRnVsGmEAgKAn347RinBjcFUMQ8PRQv8SSuntrGiwoLvpezmArzf75T6rdhBFfd57KPFBqC2NmmofUx8q4gvG",
  "key37": "NKJbXWuPwKwYgZDG8htB4f4iNktngR41XSUEJ4H3pNEJB6jrsHoGm518fR9fc2Hs5S1durauu3NmyNorAffTFkU",
  "key38": "5ZMtvJPbSWLDK7TrManhrJeEnYSTGmyVAe5uTyf4J9e72kHN7iHfVtXRWCuf57exvP4W4vWhjU2UjmWXebZc5deF",
  "key39": "3Wsrf4r848QZkErJ28NUV9tbZQE4zubGUMsa3hHym7nzXZ6y8r24uNHz5rPfMt4ni6Ad4RM75ZT588mnVtqL73zv",
  "key40": "5FfcYaWjVo8SCXPiuexJ9NVxtAGudZxqwN43NuQrH8F4t2f9ty2h5kpHds3kAcBCZmiao2YHvGR8v5jxCYp9ciGk",
  "key41": "MSvSLYiSMz4Rqk8FY4bVW9c7RagFLRojwgebNG7PcDvJ16gu81CPixv85o9GgfdbhzyuPkWpqtMQ1Z6KiVRWu8g"
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
