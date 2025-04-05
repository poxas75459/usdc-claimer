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
    "4NjrHKbUCrAnhpwfubciBCKdfiqujuKTcctGSpZMHPaHVhfi4Bj8A4GHFVvwLzpEEu93BPPksmxeF8MTzKGpb2W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahUjP6K1PSa9jV6SqyzTxFBt3dhFReYW6xYjynuzeywhG8CB4Y2pszu8MegT4jhwEcvMmcNQ6yBQhWFUcAXmAHz",
  "key1": "2LQG2z5uiMmhRb2D2m66Ai2vw4G3kfWPNpMfSav6dNJeYKL2UCc9WFvu5pFfqU4mm1j9Bp6SgGnukaph97WdhCma",
  "key2": "2opwbzL6TSvzZ48SxHGWaShs5C4CJtnFPzGCPHB7MNa6ToyhzhmKo7MGKQ8BHQ9JPcuNhmQCAYY7Cy8PX6M1r6Wi",
  "key3": "5uLtA9ZB1meixU9TQSn8UrCHstWbKb4z21gcJ7in9sG31iGBoeRxcyYTrShLQMDnh3xjwVY3Peof5Hhwni5vwNQc",
  "key4": "3ZLX3msjbn6TystwUrG8LKicYmmJ4fwwN3Q7FHB4mVV9ajY55M7hVwYuDXnCnWCMNiy64QsaZYzRdqipSYruBvQF",
  "key5": "5W7zJoT8pnt5QmJ4CdGWHpdBuUtn7DF1ETJxLys3zNBDMHnjY3aGAhQ21JceqR3FZT52i7R2KU7MkBLypzjerE7J",
  "key6": "23Q6A8jvDyx7s9KQkUSM4164rocucThTkzf2jf3JKJ2xmggfcxqJjfpzRc89ictSvHCKkn87m37KZZqFyzJow66k",
  "key7": "54xXjuTW4jQF4SWWbqbFBYQBMKw3sWCkQh17a9eWZyGKSbqyLFgEiQzvo6CM4UBZnBP5tHbW8a6DadQdvvruGDVL",
  "key8": "2sZ7APVvJ6Tc1rbNkoo7iCE9YRBXRccR218yFdN8XvMLqyekVYEJ3PTC52dFA1HboWa8vKbv7MLTdm1tmKuorEf6",
  "key9": "3EVqudYHYnbosDALaHWqPDkKmkmcYbzoGzStHgpMEVpKB5MPWdmCFcnXubnLP3MzwVKbNA9v3t6ZrbSiWoBVwCDD",
  "key10": "ZAEjcpaz1QicYuAinjQSRmRwM5EJWTieoqVUaEdPhUxFCaVrfLQqudnQ8tgHqHfqfgoGYQ9bzeStoVtbabTBhNv",
  "key11": "2AVV2HBa2dPt9B8m6o8uAgfY5YEXBBWggi4H9uVyhh3FCMQg4y7DnGc23nUMp1aEJvPEBqhCWAU2QuV7tJkYxiue",
  "key12": "4U46znB3HFHBfiqWMnhemdRMzwrhXn22iANWspVRSf91icCnAtcpLUKHJLsoSRrkURp1s4yxWwxoV4ZUuVZoRjpK",
  "key13": "61S7LJaw4wMELwtHE94V2KujrwgEiaFu9b6XhDRH1iLpWaQrTAJdZ5yUuVTFebuKrnYBneDn6JRh3Vvp7JuCxyHL",
  "key14": "4dwqHtsMdaESAuDydwQe5rvSzfb5vFeh6uzgjtJEF3Crk4QnLhFdbCTrRmGLZS9qMv8kKU31eYF2q4xiSjEgjHHu",
  "key15": "21drwM1nxpnhG99p3Ypb1CNHhTaEfXsLKkTd8GV2qAubBo5Vb4yk2Tznpj6vr71YFcdSjgxtLDXu3T6o2243o2jq",
  "key16": "ZzxFNogoVGmeT8Dd46VqUGfAKzDmG1bSMnmJgpBL4QMT6niRVe4bdHPzYUJMwPBrEM92fRNF1akr2pZ3Jb1idrZ",
  "key17": "5MKZXJ7dY3BdFKp8aAR6hSLg4JdLxq4kC8Bp7CsW4QEvBWUUunoWyHK2sA8idBTA4dQ1nMHNpw77mTYLbtDzhzWZ",
  "key18": "5ZFbSDsygYQ3FWULCqjbZRzjAZqso2K4AsmUAJPT8nwaTiA25a6W7a25kW5E8dMz2q3eu89QdEHeMNN7HVJsFQLX",
  "key19": "4ebFgeX8efv2hAkWci4B1rTfpsYaXSQUJYGjjQPQnggMu6ENBaHiTJikJFfyiQonHm1esqDGFWMLNPkQuPqo36qh",
  "key20": "5zeRSiKgGDerb9FbiPkAxQ5Ac13LSS3ppU2ttcmR3xUutNyxF2RykESqQFVYR9wUTQVia8jymJQbEpSpEKTfnA5U",
  "key21": "MAEryta257zn1KxtJBP544HfvUBAEugHg7e9e8jHd12KcZY3jdsL6cYERqzZ4rpF8cKv8BW2JWgZuUneYaP255L",
  "key22": "5tKE1T68BPEtu47go8yrk4mDSXoCfFQgAQ11VHktSpTN1Te893E3CoxktZtCF5dAUaZJ7TJcQXHygqkWw1iBEuKG",
  "key23": "3AcW1o9BSdkiQzeKvmJEWDLUwg1ZjksX7k6khyqfYJBVAyfj5Bo5y3WZWizJsbGHTpDnjeo4PbjGP9pfPexNVbkb",
  "key24": "52i2hrGncmkDGCr3XfpS3kcmVwyHTtjEKzgtuSMwC3mhBDL2vEUimNGgXe9rE8hVe6rGCt4JCR7YuL5wv3d7t9GJ",
  "key25": "57n7GFBYrvukqj3JXxw8iaJMjRaRJBAJ2zsKvxKf69UC4LWebsK3KxFYmaD22FKg6Uu9YziLGcGbtc7yAtMCu63i",
  "key26": "3vjesFUZ48H3DDZYzMBhMwu2jwaUBNzNMaixB1QFn7RNssHFLgVX8fhdE3WaBvN8nMiDrxzV5MC4Ugr3jVMw1uQF",
  "key27": "oDmDsy5zQPvTJwCeBMEapswTZWdxpFYSBZiPUnSVgJsZYadzAyUbi8ggSDZP5LnHcnPdb2ZHby54ZhL89mGKgJh",
  "key28": "2G5ouLQvVLwvciygLjffg9yhKwtwNy9x2vGcrxBPJbae3seMXSyFMYaLrY44ipsX2a2A45U2t5XVd5PwAYehtop4",
  "key29": "PVT34wuwQnkM4xYEgXroSFHfp143b44ALHA3VUmmKCB6dEqSveSw9Gcr2wN2aBD2bu936sGW8iG24AFm6fwz42Q",
  "key30": "2NJuKfQnBzgrumGWvPmdUuLxoTbEP9eVwwnCGchrAYaqXWyXicgUQRiZ2zFCWFXfBP9HUisi5ssiKj2uiuAvTWrP",
  "key31": "QS1mpTc4ykDfbTaYpbDTwcyUzEnoErdTUF4CEjGqWnD9ZAiNjZ69akyRbHpy3oAzNxLPDSgxkwRaaqv8VaesXjP",
  "key32": "2dJ7BPHYUYpT9YqbaDdLpF23vuvXB259V5AAFD2UBoMdcCyAqkyjekvVyvuCghRjCLsUoBjNY4sWunMUkjGSh9DW",
  "key33": "2pb2mDHTZApkDJY9dHF7DUsiJr74cfQFugRJs6XppQLXBjPgZT1KBnuFJLVZzp8YAvT8ndGa5VcpFoZkZ28Rgud9",
  "key34": "2eiVaQFFi6ee7HiWrdGYVSwX8HNS5rnus1gRfnebqHckjbzMbv9eYrHcKfzQX7yxDQ2sZizwDk9SSShjxsE9osE9",
  "key35": "5GctoKivrzWGzjdbsqxWV95biwTTnDbgfkt4fexbUZ4kjMX8TQgdp1nuDtZfDf8oegNbZEu1igEiGEAS226syftV",
  "key36": "2wgJaAYvbuhLbFpq1eaLPYU32cJ3cq2wHaXeYyYgJKeh27uEykFVtc5G7tu2A1PuduqaCztT7FWRKz1meQRXa6dr",
  "key37": "37t56oFLmsUUxH3DEmrm2k2WELMT1Megq5y4JJ3RykpfDSg4R99P49ZCuhPjijeRuRGHEA6TVFmxzaJFXJ6zgcr4",
  "key38": "64bqst4pZqgb6ggtECiLKuq54H1oQAEo1YJNJpZqZcxDeMMB9gogjNDyWf675tamyTdYoU4T2whYC9Y5dDkzUrJ2",
  "key39": "XVhULsQ4CCFGnLvE2CeuuNETRvQD4yY5nGqPmckQrxofGPFhM4eoeHVTZGb2L9YxWKuf7zB9GxpwbBm7S9nWR8q",
  "key40": "3EojG9924Ms7DCJ5wAVQo7mdkSgSNXNtxeRPuZ1EjZVZFZfY28RB9TKAf8muDgLAcMwnwTtqzLvjNBxeKSBwHe9x",
  "key41": "4KLzRjqU6oBW2pkSCtspKNZkYhBNzETjRYnSfRaLYukSUTjqJTPaPnGq9BdPkK7DmvVzi7ftD7dXZoXMr68CBkFW",
  "key42": "U8TaGaypno3UMrXPnUdfA7DLNPg2p834rboJXBtLzZ74QBc4kjbP5pfYJo5LfJrLzPzX3J9BJBm2ivwrVXyhUfv",
  "key43": "24rQKQkmuYjHKdWaug98p9ydcyHD6dtXeDtGVGafjJhtvHBnQt96KeZtfe7xy4HQmRHXKP7TUkosU2Cr2ALQ3tXW",
  "key44": "427RJUYFBKKvadtX5aPPXogT3bSZLfmoPpDc4WrHRZxCyXFyezrm812sdvQUd9DW5VDws1N261RKK3Tux678TVdn",
  "key45": "2UVgbMiuq9GzzED1T78oaE1GroNgt3VHXmcyTtHuqZr1BhEmEkqVoLLPHQnp6gKRs2Fz229c4nuM3uH3sKwKQdQT",
  "key46": "4kXvmnT7eMrfCkrHmodC7hDGMuK5pKpqsCV4M8cNiDTDn1snVYghr4TvoNHmjTjwi7nNteo7aLqxJ3yPgBT3tco",
  "key47": "2S7Si2mmVQcsZs53Sze3BsRZrgppt7EQJtg94zbkwf7piQjZDzrzYLMkknFCguD7E9Xjg5nvj81aj9UKmYcqQvyV",
  "key48": "5Gn4iY42WH4BEVC7N1igfcREs739MtL3eWJ6eNtvtqKymVNU2ATQcdTDZNw2N9NseSsdWdeNKso5PuDjW4BxwvVK",
  "key49": "4omtpFw7jqZBReFBtitF72hS5v767aMnQRF1bvAPQb41FuqeU1QX2huMzvNiXkDUUf6qc5g8vGDHjz85vuaH71ap"
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
