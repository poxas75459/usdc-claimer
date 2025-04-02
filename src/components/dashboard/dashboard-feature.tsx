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
    "m1JWh77BwiRBoT4hHsFgzJf8qe37taZPqqqTTh7S5gpYM97ewGjvpjR55iWk2Z6dNf6PXikGygYDNJ2NeuMVf7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wRTDw6hh2KSygyDzbAvSAbSqkqXrQZQCJA7qJYxyF9U15asjefT4FAFrgH5nNDgxgVUXDQz2GaepdgZXVcoqSea",
  "key1": "3eSdsUkgYkaDrrQXnHLoZezbJQZxrcPzUkr83TRgP8uiA2qJfsaetp66vYH45Qq6uqEe3ZaKmDVV9f997T8oGHm",
  "key2": "MP1hBSRFquRq7rcqLv9zrZ4HyZd8gB8arRHN1B7Sz2A66BzXLhZJQh6pMJAcFGfhUdqXPRLr3K4XWJq4vdgq3hX",
  "key3": "2zBjBFhr12xrNxqUndxjNpHcpWv9MPcSsg28bfXoCqw5rMGYBoq3p5YfkrLKF61VACKhSCUcVP52Wmdp3JRL5sn1",
  "key4": "5pCkktJ2qtSzNW7TcVrgh765zBTq3ZkxGsZFoSHAmDKmuuDWftguqwQkkF5MAU3YuwDmNrpGvapug5TMJnZzvdSp",
  "key5": "4bsWU8c3N8KxP7wwcVx73cud4cQDU1BDdydngeZphm6hGwpWAD7rnxCUmP67Ls69xCniYeSj85rGicsqkohTDMFM",
  "key6": "3cvtroXx3N1sNiGqq8ig9oX4DULhT2rhDqpgGpn3k9f1LCbjENytKsq4445m2A1mM5tMcgv7qUggTXZDK7D6BNhu",
  "key7": "2NgZei5sX9oS3GY9oPg5v61Nksk6gatF5AZGAomY2hxbZeodkdjher3zGq71aDSHwuVc7LgmgAVWvHcyUd8gdyya",
  "key8": "3Hz3QeeBTC8k67YDmKoGeH9cm8tpZhtre8TLRz7ti9eGPDB1SsWdfK1XRgXZ7EvXjQeBBmibVVrztsesXCNnt8pc",
  "key9": "DCuhukBvZNjcT3zeF7Qart5rGxKNEHaikvYuF64jXZdvMYh8TzEG6A8W7dGvYD3FvtpKx2cgBmNG7VYogfgUnSG",
  "key10": "cniutxzgYazsTb7jppL5F39193vf5rU9zUQk5GN5i64V69FkjMuCqmARPYNiEtR94PJHgU1GxVrTKD6Uk2b3mN4",
  "key11": "Tc39RkAzRiZ11KbbGacFK5JX5bUbSd2xj8KWvQU8C854eVk9HzYc4Zqa2W2xXnqfX9h8P3LyBpdq2xjYMyvLKHt",
  "key12": "4Li3XHLrfs7tPzh5qaCh8XJX9o4psEMJ3ktdCK7kFPjW2FhQQu1a4ZyQvfDtNbK3sdhqCm1qeWNtECvdJjcE7WSE",
  "key13": "3WEi8n8cU8A4E6XPrdPM6xStbX9zmSEBd7YGjERaZ8dEgvLe3bB968MmGteMSxwDNjixY3qA9827fJZsQYkQnndn",
  "key14": "43dZGyQ9oW4Z83kan8shCTzUofqEBRrd7FEZp5srTf1NMnbkPsdxhojnfnNWgy8XWNZsCG9vGps21ce4stz1TpvA",
  "key15": "448ZWWBUMbWbXM3y7jaANBnsyksPfH91CAYgxh73UJjDaApysJAUAS5jWeej51HCHrrSBKG3qcj8ZQ75CkGUDhVN",
  "key16": "2FJPkiUjw2hQFXa5CBEasS2Pb8Rz77QkjpyRdLCWc58x8J3AsFAWy7Nohch5wUizRkchJyVoVDkpVFaH1XmsDiHh",
  "key17": "44WPjYxCjVeQ9FqcVvM8VQrCSftCXoY4V4fq9B2M4QR6eY2ejj4bQYCdE7vLNizV685Tf1YKqFu5mZXJzEDHArJ7",
  "key18": "2AGPLy2jr83BpFyUKJsrTx3EJvAX6qpLcEYTnCPuUCvtny49ukq75gAZBdxTH1HQGLT6tQ1CyjvGtHVtHbq38UNL",
  "key19": "36f9i4Vptou3YynZCiKRNgfed7LEBVRzuJB6a4vMfd9u8ZsB8ATBPiTvTehgY3WsFBeWQAdGjCV4mSGWHBZnSt6p",
  "key20": "5aCB2hjxYzLbbY9SdmeKohWNYjDaf1s12XnKSKE5b8BF5599YSbZDux9C5brxvkrFV7NYpsS9wcbz3XNU9m9Yodg",
  "key21": "3dQNQ2pgkGctizWMUFvYmjncbr53GYQjjsw1APj8VgwkF2hW7cPqidYFG8ujMsvRo9ut9oKBSqa6jfqSQXK4CLzf",
  "key22": "54pGi2Lji3QQryc6o15He3XNNtfdn3CQM1gFTEXmAhPcaGizjYjuF1LAzKsF89TBySy97mQJGJPYJmJy3xDeCLCq",
  "key23": "629zi2F6igQNLkhVjF9Joq7XzCq5LU9A45BLYu4n9rWxSasnSwyjbDr3zvpr9jKv49kqsyV7PePzaYgpL7R2KknS",
  "key24": "2jGKsvsf39hTd1YZqQymtoFatubraHKY2EsyXJ5pAwMyHEyyx69m9i8SqSQHCySbRrxHrYny6Hx5LpRn2AfZABSs",
  "key25": "4x5Nyb7Jz6rpg2q1UxMtrUx3iPHCkz2JAPjHzmzfS69iSNCDNCL295MkneJcXubTaVKuXAv6JoEoNvBD7Wvx2zWo",
  "key26": "4p7eALKSd3S6RW3bgyKvSf9qz5mqQA7xskWDsCRczJaWGJj92YQ4WgLNKxJUnMiU8heGjd3eYgj8CCSCAjF5SSV4",
  "key27": "23viUNuBwDx2VwXKjRSN5aScYeJAuEnqxYkZPiSwUphtBoURzPjJi6uxBcmN5bPnWjiUUzK7tdeB4dLKXBHZ9yEm",
  "key28": "553hvtwdqm2Y7bvjGVcmvuqseN4jkGam9ppj6xz514LXz7M2g9WuaEDHhqWY6zgyZDQPyowC15ro72fFJrzmzXUJ",
  "key29": "3PoFQTV1k94p3gYRXUkVDdz4qaRB8nPySVX4BTdy4oMd22JgMwTtt621vqsKgbki1C3JEgjUKjirdYd6A5Ei8cmB",
  "key30": "5JmobL5xf9xqN3LW7H824Lw8wa2xd3E49tKeogKo5m8TCXxsgV1RxXfCj1KpTAsve5WK3sewhjP6DDEmZA83MQzq",
  "key31": "2DKjrHFzXQhMJCrDxtk5CDvg1jZZ7FzbvSMfYAJsdN5EDnf8ALwnJ2Akh799AcUGn3irDEdG6yyeMWgtnHuxA8dR",
  "key32": "3eCp5KWq2xmFS5k3BkjxXR1NRamyP81Yc1AMqVfXX8QZiVMzsrTYx29VCN8eWjNj5puT4kaXcjJh8DeBkSRu3KDJ",
  "key33": "4hom3uJKyuBjdskVgPZqYSdT6fCPBh686JeBFCCVEf7KYvdLg7zkz2UdMKHKVi8QFLX8v2hXGk3DD3bLZFCVoNFK",
  "key34": "NTzZKgmhnHE6rtFh8yqYLJ15M4ZEBoVZ1FMJRLGxRktAoifRSfTF1tgg7MjdquC93APNE8eet8v3xX1PPJUBpoV",
  "key35": "3tBYR8kcDWD5bnwU5Lhqs9QNKEFnWJqdBbrs8C7sDo1TjZP9BA88DfVmupkTTStNka5aTyABPdMTNAyY5R1ojPiM",
  "key36": "5d2Ms1Vqd1vp44Hx2CQC391GBW6sPJk47t9exunoNaNNeWz3o1AkzoSPRxr4cpmGQxoRDAxkX6rThfDzDhfB4siM",
  "key37": "3QUzYavFmyrLhjRMSPLs3EYqTkAv8oACzd9TkWjhB5L7H2wABF45352F8um7jxwxRvDQ1H6t219QGVbx9qZM5Na9",
  "key38": "3CkZt2qUYHtePFU4QKuVBxuKgoWcQXxAiYJF4rdFGw1Zzkc6XhgqSntuqpw4BAtTwoVF7TazjJhnaYwHWUBHsrAS",
  "key39": "5ZkvpbFAKmoaGeVzqJvu5AnZ4r2qi5LJ5dCo5cnySr16khDV7T6F3whic7eeaCVpjX8NZRT9UEZnVoiEs5skxbaH",
  "key40": "5kXxxwP1R75h4skNbRU8nhNLx4kvyRWT1vUC65ArKdp7nwhDXt97QhnP1jFzoFMdQCWQd37CmDf9B1eNtWWdeszB",
  "key41": "4uabgCiPufPJG1Bu4MjbxJY7P9YJjJKqz2uxpvfgFfpQ7DmHyNtELJjAVQfURiNGyqvxPmmo4CUEMQ39j8B9iBmR",
  "key42": "23cXzS1cFnN8ejWhfH45tR1jTCY2aMabzVC68Z3NMcZkAry1N7D8PQnzQGC38wghWqu5iFNwEJwYwMqy6qJxaaX6",
  "key43": "57ZkkiKNrJbKqLE4mtcYipmwAJvi3HpNZft4Cy1RGhLaLjh1NAh5w9Sm7maVyvpSVrG5KrCNnrXp7LHTxncDxXNP",
  "key44": "5MGgEVveJafBF9Xef3Y8bz8txiVRcUge314KzLjrbkSELRXYARgFEmHoPKuX5ZA3DSBF2BwTxGEn6h5tc962U18p",
  "key45": "2amThYibDNTRVo6xCeKgZkxpDdHD37pY1UDJx8jcu76oLtEFLsT9g2PsLVWA2x849EGMZjy5mPMJKxTwzY6845ve",
  "key46": "bBXexMCsQtBQJBH3XRNQhJ42nnwLXkJm4cHRfSUMLuSSpG1nW85WtW2DX9qG6hunx58HxuTcXJZ9Fdt7ctu74Zf",
  "key47": "ZquY5YXVzbhoVz9MdGHA1ftDhNceXCWdRcbtf23zxp4di7e6f56bYeoSKtC9zhm5MSpnnzrzTAhnqR7YLz8CgZd"
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
