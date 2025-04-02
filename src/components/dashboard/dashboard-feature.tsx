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
    "ERmZH6bv7cRc3Nb9fQnzp4NhEhuEhGhuf5beDH61jhmczAYYmV5SLsewkP7mcpaUgau2UUooc21VdDAbYzuUEnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AzuCi3WpScz3fmYqgNGGryB5kyYMWuDAVQoHeHA2c3hWWSUSXr3BNGqxYLnadkZLv3iQz5NXrAL2VkduxrhwWQV",
  "key1": "25Wg8LWHNF35bTdZ1uyzByHRZ24L8ssZrwcJDYhZ6PoX7gThXHPutTMPm2jHSipvYdzjKjooK58zgk6rB8GHKhCR",
  "key2": "3Rex9GUnsg87GPUiKHrwjet3WU53Tx8wMGKnao8KTfhNJKvvfhjpGbLCX3b2eDcbpm5DtxxdUxU93xekTtfBviKz",
  "key3": "2muHrxdMN1s3QibgffsNcx4cCF34jArJJ8C8c89qiswTV9dHiQsAY1D4HmFCZqTfguTKq5VJrPQQjyFnTbWb9ZS4",
  "key4": "fb5izkZsATaGYo2PuDGrJrZtHXGeKkkeZtZhhgwpQY8ujyuTn9hhKF3eZbPdK2NsN1FjA32rt9meFHgvaSvnvby",
  "key5": "4N3pcDFeL6i2PJzyjwsng5f53zJtGMyCy9Z63d9x1xeiuGTgecEumP689AsZbD6GfDK7M5Bt6JBBud2SF3XChFeS",
  "key6": "26Nmk7VAK9cefiHEaNAbCufvMVuEnUYJPZvc3m16A6RJNHytFBUKTY1wCHHFVdRsWXtRiA1G7yw3Sck4gkLSpbp9",
  "key7": "4LZs2w1o26yY32UQGp3dc9Hi6QqDFcs3yGQ2joJUcZ2ZPva398Fp92eLaWtBXZKhXg66VYcLiPHZiUFu4DR8AFM9",
  "key8": "2VZmZk4yjGjjUyJku3Eg9LdoQd35xW6ENFtDoiMdmJBbMecpucM1SJAKAhUoUozP44NpqZvgx5qVTdJsZNJ5SWky",
  "key9": "4ynmmdoSW2jQtjx3aXqFM3B3hTECtwhH2ThCVjvceRq7QQ6tdeyKptWNX9dU4zo3mZYsJrYEseoqQEjkecsBMim7",
  "key10": "61X4B2dHVfVwvjwXfUqMMpbsWqAeTqenAwJ9uRsM7vD1izEhAZ5AwU4sqLq9FEnjoSYrmPFJi81TDfmSMAUia22u",
  "key11": "4ReYCjF97ZM4xdEuNUQCJKuhjXdhgLQNjernUFggaWpCgrj3XNZ2YcWTcEawLeY82deYu7mqvtkhkd95cMjGzLxf",
  "key12": "5S94bnMUicjSXGs5kodWT7s6ZuXrtcurx2S2f47FTJsdJHXXQgUJAmTwWgd8YW7xh1YthwRBav7VAaHBXxgLwe4S",
  "key13": "3R9VKzgct3HiRj8r94BJNNALnVXUsBukVQE5DZDNz1PcT8n6DCXVrDUX2Gq2m5BQTLjUAm75sUH6iTnZU17CYQWZ",
  "key14": "4bNtHEwCx7SEeRxcUSvzk9AjXKt3nC4oE9mnLmygK3AbmSYie1KFtyao2SwxeG9XvEGNKEAX8jyW7hJkosY3p575",
  "key15": "d2aUyH3SiqHTRguG7o5HyiHSqAtRDSCaAcmFicfM8P5FmfPxANW3bpyNUQrr6BgLtRquCNhfgRToxpGW1LvPfyd",
  "key16": "5nXTX6GWghDXms8XerYgi2HXvkMQQB6VYnZnkia2PkBcDqLdU5GrToRWnfW1xPQLQj6bDhsgjUBYNkr1UsXkDutC",
  "key17": "64btk3gV6uxhUvPeGSqofESR5vqMcp5irfQvGKVnK7HiZFrTup4aGecjyKVgpm6rmaM6ujvc9GDmv6ysXsht8KRD",
  "key18": "3W2cgxiyziQ7Kx89UqRnoM997imCukMti6cY3FpBh9MgdLsXnyhQUEB9761wos9wBWRu6N9W6FAcJbkrni7jREHv",
  "key19": "4JFiZxv3CN7D1Cjs4L7WJPJzHNgCzMAXWzeArCsDLkizpuT9hDcCuRaRSeHyuXw2AZFpQqnRTJuHNLoAceaDY3UJ",
  "key20": "4HHHsvfZ9wb28a2kabvDTXKympWppQnvFsoqxWd4ngbT9WxVNgDD8ujBh8JvJb5ACu7UPfxt4gbGruj92vRp59A2",
  "key21": "4uGiL1kXHb68rgta92khqSmEEiGfC3UZxFadnoaFiV7KreoxsVyMa78C6TTdkT3Mye63e7N2UkoaqJ9PsukfbRSh",
  "key22": "2fS4SgPtesK5wN7aQG7EoTvtj33u9JQuVFotrw1AKKsFVwa5iBkWdUGRMdXZoScJjtcStKZQRdZaJEpKbE8vH7wa",
  "key23": "21HQSJtJ14Hbp88EPqW1ZGRkW1PBhb3vWXDNMZivj9gZc88JGQBFceBLaCnD72bTj8jPLr91d5WP2dpaVGrK3BmJ",
  "key24": "22iqac8JN4o3irgH8tG9DYhL7ZLDUMTa6HE8hofU1TMccBvaFSqmePEUG7yWroN4qDcM1K7pXDLhLovM1h7joSz5",
  "key25": "4NSqyts6dw4pJS4KFjL48iwvPjJ4DRmTHF9Um1G9cnxAM4VoMU7oPBCwZnAPd1mvVniG1pBdFjJddgp4aCaay9Wy",
  "key26": "2U3wR51jVftQZhyEnY7xWVoQdYPLGNDPK8Hr754UxA1s45FrkxNU5ci2C1fQe4Px72b9CNYjFyDXJCHx8mkw6qDC",
  "key27": "WhEaVc4fcvm21WgYz8tcvgbeEnDJzxfxa21Cmk2izpxhTjtnCYeRTtAR2bNNehKWYEKqoXWFxY1ig2PEXFwrk5e",
  "key28": "5b1vAHM2g663KXDgDsPUqYKXcEdWUAWMo6EoHnp3FUzJER8aXqz3wNkrLMmHhnyFg15NzHwQKDEhrawJG4H7nsSR",
  "key29": "5fyv2FexCLMABG843knVe18oULUaKhbDA6voCT8YkfwyDTpLd2j9hFaBmDa2HUA8TJAxDMMo9tryLw6Uz36hq2fQ",
  "key30": "2nav2ZVpyXWgqLNrvoo1hLapGp6yqeTAPv1s99eDK44fBD6w5cL7LSTwQjy29ttvVCGQ63WwcS1AWwEpj9tG6pdw",
  "key31": "2HQV3eQN6kDJBHAuoBEyTGGJQpivFQWvFhaXE4nmgWVTDMYYbmQ7zv9vNuMgESPs93FZmWKgXzrPHmDh6XQ3bFGU",
  "key32": "2ngesyP38wT19p6bjMiNVLNSTq5WupLSnB3Z4xyM3yWoFWoxmLVr42sZmAioSdWmecL637pG6p5ARh3ysmzr13wY",
  "key33": "4BiJkJSsdF4vTbfSyDWS6JyeZ9NN4J1Ctadzgov4nmAwM4FZpPwnQHyWmyDe1Tu44zpsusP3obo2tJXgTKAAB6Qb",
  "key34": "4RHjFRxc5UQnBiMswRNdr9EYE4fqBmqRqLndr3P5SwwBn7Wwc8XCg9dj4qJLkdQTGzet9g9KXXHxc42dNnCYjoUb",
  "key35": "5AKmxaiiLSrkDoa9kGAhRJZcT8wuhh9ZMjLgVoDdu4RTAhYYqiMJ9r4WD3LxgCe7PMr9gU22RFafS8XCzLQLE1sa",
  "key36": "4cto5QqDEJAyQavpwzoUn45BvtkjfBm415XY6U6qfy3utJ9EX4NuFB3BEyxkgNJd7CRnxyAndy6zaBKE1iHgHMSa",
  "key37": "25jJcfc9b7YJJc5uhkEp2udTD6f3zoLoQPXJwv2rf9TSyAu1oEDnwwmYBK8SJ6m3jcUdhaJzEWVGz5R4YGzXfMWC",
  "key38": "3pEEGHuPx4bzs3CEHqjcSM5bLxgCK9hoZg4WZPo4kkFq7DjEYzmRm5bFzPjf6VSW7qXUYzsaY8eLemzxT5e5mQWX",
  "key39": "36CkLpwXXFbMUPesKcNyxZuFnU4xVENvDHPdSKT3FwLGcxpLp2ar8XVRnRzxw6xhFfarMWMCWGkJFVzAUBnkWA6V",
  "key40": "24oHLmHSLaP4RvoWr2E29KzhtJ3GicJib17Cd8dBwtC1LakxgMdjAeRSaUF3xejBok4uBnkuz987EyXQL6Fqe1uV",
  "key41": "4SF4GTbo1Qoz9yd4kdqGvzpBYFoWTGUT4km3NTtCWurz4pkvGmgQPWeQQA6QBCY3CdNxeSTTcQ8mfgP2a7bDVC6A",
  "key42": "21zXtpQcxbC4ykWpuDCZPFRL9EgJRUM1mErhRgEmWZM9K2crd8kvmz8wYb9aP3n494YM1Qc7bBsLWZnpYQUKYoYR",
  "key43": "3jU9m1br7ATHKrrDqFPuveEhHGDWNpxodNyMwUtezpmsbhxw3HTgY5TXGX43fKgyL6xPhdWgrtcq1zL9G2tWEJ6y",
  "key44": "3TLyzQ31gXMRN96HjXskw6zAm2JSv2caK8pyz8Vt1WvJfG18ribdAMtfz3mfwjW541KmMwu9BSgC9jjNHMxvRQ8X",
  "key45": "4CSV2o5zDJ3VUhGCfetFRM7ABYqmb4iajmCqZpePipCLeE4eFxnohEDdDZz47eKrV2h5EJQfuy1aTWhrn84D8eCe",
  "key46": "3LyNijmZDqkGGwuNQAcsbXhHCagtUXyu7GKx3RVaK26V2yYsmiSkoW4T69dkLdy7P3ti4XSLc8kyBrYsVgRLorpr"
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
