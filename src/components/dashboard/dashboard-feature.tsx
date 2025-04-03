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
    "WbC8DZYway5zceV8DPfkyw95tWpTEdDT8ydzZoibMdsWrQpL3SLnngqE19V4Ag5u62a1hoHRu5tdm7UEGzioCYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7c8PBhh8rwLMbWk1rc7RQNZqKZdtpQni6dcRJTGP4cz8YbVDJHUHvFYsftkpBYsWH9DRZupexSgtDzaEG7aN5T",
  "key1": "UfiMvJUnB3eDDCFaUSea73twnQCUJAuDKVcNgp5AzBZ76VYx8K4oPSCTrUM3P5LtfaG289ZzULWQdiTunywJY6d",
  "key2": "3Tm3mZX93bn1GoejJwV7unQ5sCn6NoJd8j5mNA41xTEKNgrYQtoGBa58nKQZdQimZ7Hn3SHUjJd3MrjGZqqgUor1",
  "key3": "zQM6RFHAUR1EHc3fPubsyiRJC9T4toz5Jc6iQSPgQh5vNb5WpiTwb7D23KLBCUWSoHQeroaWvmRKtnxHtM45qGo",
  "key4": "4uwLXrPqqndEqghQaRtqgxH7dY5egPFDv6M2M2QvsmWnR2eBrP8wFu5EtCt4jqNJduSGfey66ZQd6JgdGA3cQ3kn",
  "key5": "4yyV1Ccdy3sxnsbR7z1VAmCbSnhdyapUUsfGK8PNVM3CLpdeVYLQ1PxnVfZBPEfMHWPSiJgMZQ5AWMf4LUHhXzn",
  "key6": "6Z1535UdfUYTDxtHMA3Mi7Atp4zQFBC4UP9FTqHJxATMg8KEKj6Whb7AHDX6sfgEzHDbCx5Q2dZ7im41QeTk16d",
  "key7": "4wTtmMChtGRs3hbbLVnaGDhACddQijw56X4mGB3f7kGtszAVYsENy7QSEHrWXLJEieaLNGQstJCuqfP7xdhP386g",
  "key8": "51KNGAkuVj3pK8mQPDdU1k7xm6q51m4MeryzjcM98ivYyWhorBbzW2szBgmmMDeSgWuV3pUxhgweZLM58xZ9LvhX",
  "key9": "4yJ5i1Z2CCfBpxSaKPVvnBiUUi7Dc5cWe84BHoeC7Y3uQ2r64Rc15L9tWK2tUxBPj5gQS87W7utNaMuZUm7rDF8s",
  "key10": "4QVbrAjnGoFSYrET2opEJbkqzTQp6MyssJ91d9MrHVUER4ZxRKzTidCSMEzJy3E3iqj1MnKJefwSS99PjvSmDZCc",
  "key11": "65XKB2iW4EnoVwZQtwGbeqcu7R7UULot42qhNqEz365KVnZJx9SNY7RguyMwQdVgWMLzY2Fj8ornrVBTD5NKVC1A",
  "key12": "4iwt33xikjAphnFKmzfoFu6p6KD7ZfFhLd5q3S9forV4AQYsy6Kx1GHqWPEHfrSbgnE2G967ySBEVSfDq5KzWyFo",
  "key13": "4pmvNQGv5BxVVThK47fRuSnYTifNLZ14zKma48TB37pQnkQw2vAS7cUAA67W2wxgasJv1u2C8K8JoAcWQw9M3Qao",
  "key14": "2QcuHu5ir9H5SHEBugfDVUeVKtZWD1Uw7G4sooRRcBqbUysAULx2tuxQTwBtCucTkRKZvdLWKfBn6a8yypDwyuYt",
  "key15": "2THvykUJB57SqbQZgzzWvHBCVvTBfRydm3XerG7BWzKURp6GXW9ZPLpzE7QJuPmeTyYZQh4J7HTXKFHgTYdYs4LA",
  "key16": "2gSve5pXRa89EGCwmmpXjHbEDQXbF4bzatcZmXFumi3vt1JF8BAZ6FkGQby5utbA5ofK46MK9DkqVUev35VYgKKL",
  "key17": "3WTNHz55A9rqgiFVux8563Jy19GpDzvmapdyfSETfPT81PpTQVZqjaG6xohUGqegpLgdYVkLs1gwsZyrKx1WQxv3",
  "key18": "295QazHe9i9oK7D2a6saez88bJCbm44e8BdFXTkSN9WxjiwtyTeoTbY7E1xczzbHKKDPS5Uw9cKaoSah7kukp3Pc",
  "key19": "3t4PfDh6bzW7Sg2TtdRFCdSiXNWedumXzvywxraDdkmPhMhARPhSQAFdJyfivKpWbxq8E5wvVe2Q4MLsxZc2KwPB",
  "key20": "65suQxgkwNJvdbh6uWbKwb36PWSaC3VWbFpcuxJSxNozX9octXfSDcAvXoHnPYg6v5RB5PBbQK4Wgiyr9MDe29GC",
  "key21": "5sCUUYr9fTkKWaQK9ePhVWoaU4nhyiHBE3CnwdhHqwKG2J7rnxver1LzFycNEbkym1SptGzvaBg6zCEucRqBvAU5",
  "key22": "67CFtUDhjFNKEqCaYUBFbptfG9LN8h7zHKv1FQuMGbqMsowanVaXEZf2cjie8ABpKWSduvJ4FWeXQnqoUJPQhwYn",
  "key23": "3b4fDwSm9PpfztmBmf6h8R6rcEyN6vmLuzdnDTQpeug9HBnKdKirqwx9ohdXzDSzgoqTNJHmwrktntgmQj1bRRAn",
  "key24": "4CCrToAnmDHcnyTMJj5CgN4s7abWVob4JZLBdDntqKg87EvfrisSupik3utyiXtxGkjVVMzqxDShL8HrQNdWWLTW",
  "key25": "hNR1bXD1o4YBEQrU9yAD6FhyooKxAbYNHQemuVC8JLcbAVaSaYiTTc4TWTtEJy6LaJmDsCCorFYURa2GqrG3Q9z",
  "key26": "6NtvTvL7bsgKxUsHZ4uFNb6CMg4gaU4jhFrszVMFbARMBvvggowzAgb2dTLySuPW6W5ZJxAtc5kvYHgmUtcinRs",
  "key27": "A9vb1HVK2kr8LuA38pPX9qwK93KV8HDG9i8ZQ3AWeAVoP8Apr7ZYcPwpefJMr6TNTyrjdmCzYaS1HHDkWDsdD5w",
  "key28": "28USn65W2Tj9cHUBRSMhDd4KKBT5Zt4uctD8wZ5SZXA3p8HyjsxqxTWc4ZLSVuLvtzTNrZgws9v932d54kFJjnET",
  "key29": "N9da8zmFqo419Bxc3mcv4a1tbDC7TMpVv6SwcRUH8vmLR5vx14YcVkucg4ub3Ksfwod1XzscLwsmzkDfp93nQSx",
  "key30": "46rmxxCJmgTqx9fQtMoQaoW9i4VeEpdJkuvrxbu83A7SQMkDNsq3VfsSQbMy7pGugxqu4KxYGiEETtag5ZPPaqjb",
  "key31": "SQAT5jvHd33eveWFn5DKtv2fCzqA9Nh9b5irDyywDi38xqh4Qqepktc6fkDXzXDaSQzKb24JmELvFRTNz3yXzPX",
  "key32": "SdNd1Ru4SG4LRBTtyLAJ45FpxmLFS4aUUvSUUCBcCi9P4Df6PgSZMSpmX5kJ3QZApz93PmeMnyxZsYf2w9FCViV",
  "key33": "52QqX7Sm9vQJiTYhBQuxL2DcVAqQMF1q9iHTtk2Ny8NfkM5XHZt2CveQKoiDqj38371WLVhkbJGU1mnqESJpKZD9",
  "key34": "3X2bu5YhpspquqCLawqdazxEegonrMMJVaFgNGHfgGDk2psej2ANN3PJk3AjnAoXHgKoE5SbhhVJ7U7w1zopQrR2",
  "key35": "StRFvc6wtmoQstQAk3mwYLLNdaYnnFZQW8W1WwZ7ssFd4qE9gkAAcnxWVePCH6WcKs8Z5DaZiC6Roc5vUXaBQk4",
  "key36": "5FQQSzGng6hbnLNeKUtRRXBWiHLsLmZRRV2sWtZ2vitYvT8vpbUYKy6dwCHWufGQmwqLti8VY3Dc5TDXtQL4H5bg",
  "key37": "25pr5t8pGPQcsEFYrkDzusk4rYASVf7mMVXqqgb9QEprNGF6waPChEHfvNaaDegYTgSixfDiGsj5FNDoiV9KCLvu",
  "key38": "b1SyqvNYaMVCTKFFfAnFXMdtbQy164WpvxHMKoBripv5DkhBHAmNNm2fZsxKSwRD5YLbEn7SeT3Zqk76jnhLh7Z",
  "key39": "4VRh94SJXJqCpoqE8cXD1dG1kyG5qfD3UF8BgkKAFKZoapfBmK49Nxv4QhLQKN2zkSiGsdDQ2MwXu41JV6rpR7ba",
  "key40": "2LGYhRx54DHV5UGeNn3HARDM8H9yP3qban6tFhGQYeq4Qz1yyx6BLd53gBkPUJjxqXMm5pVGvS1Mo6MztZuCNLxK",
  "key41": "4PPCr1Q9gwccqi6jmHe7fGbSDjhCYGE2Dnn17k88Gc1LzrMd5yvDYYFPXosjMEA98aPZ99gEJ4CGqBfhkNGnQGCw",
  "key42": "4xc8mFP8ydj39fGMdyUDqKBn3cYneqZDSDF3hywhzSRdEm7foBUeSvp9UrwYaYvBkUQx6EvjdVQPXxYw8S241gvh",
  "key43": "CYvYS49iD5Yxd99N43CXfxU6V8ZcWqQijPDHX7CYcTFPagFQZBMBDQrsTqHNmcukCULvdYUcksj37t1GzU7q3jz",
  "key44": "UgTjzHtTdmJdJ1bjtPDQGfsLcX9ncLAp318VCJYUL8YhHGnGc3t9PjzSNmSSP4SdnXikFdJZyrKbXsRU9MSuFCJ",
  "key45": "SqkXgdgRLKQTLGZJm7XN3MgExZVhRtQXHMw8EogMxe2hGqtTBLisskyzevbhZRSBosUnUSfWGo35amgB3QBv21w",
  "key46": "5qovqzRPdePfND9fQiLAo9jenq3Sse4kx1HBXGJeWJf1pCoVDnAZbmHnEA3w1aCvbEmQZzKqzVXC2FPmbiib5vsb",
  "key47": "4xFQ3YCKc7vQfjDcQfkZwxWxmJQYCWtoKRnDfXyUusp7B6CVL5ZCvEJ199DRMAqGXsqQaPqy6TPiuBHTQXyZwE4U",
  "key48": "cink7sSqsY83fnqKR5pFdzJKyhvrbzevcjUaM18XR2b2FEcXiqJtwiT7jNiyZGZkFvXRLxSXmEWTQTEHFvHaxnY",
  "key49": "374RNVnVoXriyh4vLQif3prK16UCs1Zgoymu7iJmbsSQBg4vissEwJN9V7yb9ftskEJbHWPAzqm5c7bjxnu1qfqP"
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
