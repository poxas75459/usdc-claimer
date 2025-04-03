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
    "2LjZWTPpmNvGxughXvARvExqLptSFSDtTCkyzrxLmah8HTiSdJuUiCb5seFvivextpAuVsqT4Um51yvbsvrwk57C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oihfwYy8Ckk4DocvXsZWGqFY6gMQPWhcP7M1CcNUKADZ4NP2bxwGuye2oWV91W7QGw6DR46x7ivJEB8recnCqTk",
  "key1": "4bYNXrixpF8FVdRnAtxWTkB7p6z3heKLqVShXRWyywG9g8eXJyPUWiPg5w6x6fGq4R2nPCwRwSVMqQkRXdv1LbfS",
  "key2": "2EUmbVBdCzaqw9i7uhSe6dffvx7dKxiiMQLxXHf5RQ3oAP4RevwaDRXtWaWggL1diqRFL7MCSRVz1tLnLG69RJUL",
  "key3": "sGLvkyasBFXLSZfvNpG9nbe2LJrDsujz4juNnze1q2Wg89GtkQQQK26vZHRLcGAQUPeqf6i3hQrc5JqdpmrBLmV",
  "key4": "3vYAiwgo2tBaXugrFXzFbKWwoKA3WDTh4piE45bBRZVFXfU4GHseT819xQ6gqP4RHng6rnQvZx8f568ZHTpFcFcn",
  "key5": "fLfTQiSfg6j5uyPhLhCdEh8NrXWtGbTywba8QZQcHVBi83Hxzx46bZBMpo1tfguVwqZ3JztU6datyVQncmfV3hG",
  "key6": "3wRpo6TPTdHCVHvW3wHSAvF9dAaNQdQ33mjgTjM1EmvVgqA1SH2NyZEgCAS9eJMm1eEj5ctGdGWS2knThdK3jCT4",
  "key7": "3AbMR4Xfor1vj9w6FWV3cpGXRXWWmjgxmMbi2hX6tRR4S2yQ5qVr9LN9waj8No52AXMYDVL2STJEYXbgzMy7Zryk",
  "key8": "3pyMUMGszz2LRdTAB1d6mFNTpUUkggLNxKaYCENY6JGWsbWBpEicds3mdKTRKRpRPgU4QKKREX457JNJFUww3NBE",
  "key9": "Vmc6zHEn2D8Zr7DQ2LHH4rFG395xMWp2q3rP71Qe7ZdDdPxV2114NnGsNpRaSsfV5AkFhXyScZShhPf7aZHDdZf",
  "key10": "2jkW7U3x2R1j41WrfcSVi8i7Fu2GUz8QWfXq2RLhgcNkf5kKiuosoEN2udRMnYhkAScCyZqpx5Y2FfsteeFEZCs7",
  "key11": "347QJCgBhpRMXfkYYVfxbTAWHFsacmtnYTDHv2Cuxe6d8ZfqEFnJ5hKyh1Wie8ybcbUYcqP7Z5DZ1AUYu1dnWnmD",
  "key12": "xLFbfkWYSPxZpKvbB1WMatqczSDFXRSFrWd8TqVceK4z3eRCnyYRGVuHnC71VAHXn4r8ZPEF5c9WFYCktsgnAZa",
  "key13": "2tZkZTVaAUYjo1io3vjuXJDx6GDduEsv45QxG1WQxky3LyxZzKH6XonKEhgrZCUTKDerFkVTXHwDXrzeQfDr7jPo",
  "key14": "5RVN2HDudpPNfkUFnNQSTxi4CAmQYY6XKWCyXoqXW5wT2Xs6fawziYLPxYkSpuebTjKakqqubnfqqbF5eZ4VZeHW",
  "key15": "3VLKi2ms98W25hurauwNnoMo7CfFBtLu4JkAccsZkSmnv4KAg2AEskEoRhMCGfjzVRd1LfL3vgDzxoQgDiVTUVhw",
  "key16": "26TSucxmMuD4DjaDGhyfUzpcabK852wUpbBxXRpUAnKkmSVqYS64gkFbLZWNx846hHiF3QrVMGqKQYHCm8RhgiUo",
  "key17": "2mYahpzbyXp855nXntCzM2o1NJ9PpgpLMcRpxc66aTgm1sHVuByvjw7hbeVNQVoXMbDFkQQeHBJErc2DnbHLWiwF",
  "key18": "3B8DnyNHDmku4g88HaocKR9nVvN6uY8ZAhVg2FPys9PRgRbBqam8GmPkcdcn59rag3kBBL9saaDnTFSaqAj5DVBx",
  "key19": "4cmXrWAiSEXTPMxL7BbAEyQebqxEdzRdrdHP8haby32k56APfKUjmkFjLRGrcR7ivp4utHAkLaMLRScy4rs8JvTq",
  "key20": "5w9gN9Fpo9RgnWFnnHTUCxukGgQt2Vj33aciaytSVDnPWc6gsMFWNW3RJoRD9D7zh9Th8qfrpfY49UynnxqNoFUF",
  "key21": "22MuDfkaS78gtWuZYnyMJzaQhWyErhtvnTrdEDzXarfWC87URwoqxYPwYnCKPfhorF1JnqZ3w9xXA9NbQuzSi6Lb",
  "key22": "5b3dHAprZMcXpzX6Wk5VQPqQstDZuu6DJ6LVdNYjyDfMqazFX5F67jcS54LL38h8DfFhZaZKCgz9G3wVFu9w735v",
  "key23": "64NWx2A8XBc9odgF6U2maWLMACbfS6sLgzQV586mpnVFvKcdgstHpmQA3i9hANcCEs4R5AtuYpQAc4XjbYwXyVo2",
  "key24": "5t4q5qRstbzDCJHZTUeEDxDquXYsgfHC4vNuEGda1nNM4KWaX28iY6Nt3KdoiBi6apFmtr827p7sdTqkgiNvFJpX",
  "key25": "2ScRf4HEjq5hxjgqRNMgYNXQH4KMVZj42iuE1YvZeHE8NvUTynZWD3hXxVJF2sm6xvV8gsZNZyTTr9ZEeGjePiEX",
  "key26": "2Ar5u6tfdeTUSy96RBbC4TYn5NXa6Xtv4ekKYznGoiDgDgynBshGSNxxyuBqUPje5ESqCAHyJhVY5E4i5rURJ9uP",
  "key27": "qG2BPEmziAtLjsGPSt6euE8CiHc6qXaz8DLfeFvKtGT2iywfuMdBGRXtpggcCYPAsT9X7RyvgPLbpu6d5J5qBDw",
  "key28": "5mbYnWqdJwT2ukg7w8RjyrHr7RhjhoGUWaDhKcrvaicUoRyJLh44nQxCog1KvDaFmTY1mvgeVTKBU44r3WtRbePY",
  "key29": "29xTRgNspJtWxBXfq4S8Jzhnai8ZnQEMUiQcZM8DTKYCbiHRrXeYBxrajFCQy3oDgAycRVphatJtZYRTzCqZTWp1",
  "key30": "WJkUHXkCaERQex2Q5cxqkB8GCsdEPAs4bM9hq1sjG3otfUi6PJA7mWudSkTm8ZNeuVt3gaMox8dVHPpugqqe79n",
  "key31": "YeESCc4Ji6Eb4E4txFf876oVanKYzpj17bQVZ5WqhD8g2VmUtNERfb5zAQ3iDPospu2wgVLic5hDckK2V5a82Y8",
  "key32": "2g7cBJ8ECZttGeFfQ6BmsnZCHvHWbd2B4Atd1kjYGPv2eR9XGEWp3tsuCio6YnxDHqmiunxckwJ8u9vUsLEtDGvs",
  "key33": "5E5Kkg8gX17tghg5py5XJWWgR5W9axZUmp2CnY7hLDracv29ESQv5vFCtsHNEnNdEwsT24Bhq1e6kmtbzwRy6QAY",
  "key34": "5kDMRqC3z8FpLUvKPRHfbpLnpyAtguyZdKmDTDLmKm5uGXXvBgdAeFwwtmwYmdG1DPHAnuovXUS1urpTZZyHXyS5",
  "key35": "2BZEyhnziD5S1XScwhZGYjj4gaEVhH1zL7ew1T8MaU4EyGmK8qAX5xdFjSeXvq1cwudJQWt8tMzBfpWovkCp4a7e",
  "key36": "615nbGCPJ8XQronFYLBapnXZV355m5iP9W51hCGdt4VrxBFWTG8WsfeVRsSeVf1JNeR8VSKsBPCVSskC9Wpns1gc",
  "key37": "TGVxLo4z5e4h6bTb5Th9k8g7BoAnZiDYBkGZCukXsUHxxn7m3AMnwT7K3znCzyXftfEv2cYoCA1WWKFwPvmkjGd",
  "key38": "274MEgzaqHMdyxgvUrX6PK1FWiWhdHarnKvzAKXwaDPSqtvr6R3zza5JBSHQ6N1KJjWnVEyNi23iZrpuMQPrKFcD",
  "key39": "3EomW9smpC35kCbaV9DYe1qQnNzcAiL8b8GN4iUDbRCZQgwRVgcZVSnhptf53GV3FxM9iZahUusuzPPUfYH5Yxsu",
  "key40": "3GQLSR3hhzqtKGmzGyC7hqVqgBSzGsU488RjsKsak8nf18ZmMS8JjhkxhSsUu3R1MKG6ha1ittsXWH7Lpnkf9fjT",
  "key41": "2iVpQ9Bj6EeniqE3iaWCFxjt2qeUaxJke3m76ExuM6TJe7YSCD3Wg2N73M8QxH9YQA84pJ2m8r5fsHurHTgeTKhW",
  "key42": "5EkjZG5Pq6w2YTyQuc4H5UBicbLVXj2b1HaLZMyAWM464yLQCiJsJveAKvyGwxXHLEuLwUCYVcRBXGMcmUqMaNMB",
  "key43": "3bPbGomoD3ASSizPevqAqYriz6vyThdPqwgBqRjvk9yWETGeoQXoG7ZrtEqUuLj9CqAJP3VTtuiMrd1y4X2rTzga",
  "key44": "4ioKAsAuD7HkJPGypYVSfVccznJoZVXgM7kWrSmKYKgGyfoZxoMu5tBE625sPxqsxmWfiJnPgfFyy7g4x3Wgr2DA",
  "key45": "JKMnQ266zJRFiio8Ywau3p8xJEE3T5YKs38ySrwLbdsPwkhg6HSCq5YwD6J2B1Sed6rN3aeHhFVBdKYUkiDWEPf",
  "key46": "5jggPybGY4VszCPRdBztri74o3gASWrAQ23NykTKwn1t1XEyyfenZ9Z7DnFVrjPC7yyR6pscMrtE4RJ9Bb7xkVQ8",
  "key47": "2hreUYnohwVKP473wodvaZxJnJ6oQk37fHmW32aV8KGhpgYNaymoKh6KJWsbHCuNHUwGsakc2aVa8Abai8FfLWMc",
  "key48": "2N5xmHy9RxKcTmDqHF3KbD9YaM3vw7KjmnAj1J5GhXAd5zXroL43QrXase2TEHf63uPS55gQsh9PPN9pYLUCtD4U"
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
