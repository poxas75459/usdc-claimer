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
    "2QGUrL6khLk8WbYj9cj2Bgr8HCyqEv8EBEZg5f5ZXjaCPrYckw3teBShffTsYFVeiMtfMw3pdtB46d7B1TRMsD1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybaivw2wdXPd28cZWeDEVfQtyFQiBoVdtgo34BRYgyH9rxjc6L9wCCz4YxTvp8mAHnHyp7gywkPkq5XnVGc1mx9",
  "key1": "5qPrKKdb3GteynjBuuM5FkL1i4yc6wxhvNu9mcLyWjWzHgHA6YqFqh7uJnAb9srnEwVqLPXjEFhpAqU8Z7xwiDjp",
  "key2": "5khqKFpgA6gnVptET1w7c3PdsEnaT1VZg1jfcJmP4GXam5zPx8gt2LTSSEUPadm4WMS5dFraXGdvLdZR5A98AZSf",
  "key3": "3epxb1AdaT99gLr2htUb4pBGMuknc1X8fY87Skhw3CVDmqMAcC9dGCRXewmHaz6FNaGbKRBwvmDX3qPyCUiA9Eh9",
  "key4": "g4J5Sq5sNdb5jzAcZxVzuitxcdbz94SYr4dnzd1VEtuXr3iX1uEuevLCPZWocXNVJernhvC3AdfcNpkamvcjuN2",
  "key5": "3ma6V1oZkNCLEg2SDQQTsTcNudgHSiSCKhN1pTmQRACfr92DPv5h9VEw87tcbTp2TVmWZ2537FFFuXfcG4HWjYB8",
  "key6": "2XydEmStreCbsnbMKdzoQWDC3wzgcnqmE9npYPr1rN4NwmKZ7H2UaDTLVJV9sxP2ma4SazncEuVh3Ua8jRWoxgvs",
  "key7": "oiPdvSAPCZoUT1aNXqjcU7qg9D6XiipVpFoiAenqjkQesKGXkKAGUtrZQDoNc6BbqoCSrQGNzG1kQxvjYpjGxnX",
  "key8": "4GUduDtbAD22aRyQ2fP7osiyCYfGkkzBbA1AyqdDC8GiyWEf1TiGcSoVnQVEGEM2FEmccvuQaBa7nJNhuCB3DcGd",
  "key9": "32nebPZFbR33SpR8WhojfvJaEsq317Rk1EEXNnZxukpquWqup4kYQmk88vvTkoPGAwu41PUpjVyd7ShLWhyFw6Jm",
  "key10": "4wEVnBdWYn2CV37rfMErYVSZFrJPQs7GBJ6UccKpNdNq7AscxZX5ic28GEQGM4Ym9Xbm1R3sxDG5dH3ssvNsmpNv",
  "key11": "5xyF4fSWMa2QM51522bhHV3eAgGEF5Tf5BVdbEe3uw4izoyFMpy8LjUBiKbkxSgmY1bkDpDhQWE5QnJxkRQr9kUk",
  "key12": "65bDtpGjjhoX71wSDV25BPpqpgUSWieYgydYAuk3AqV4xW62PJVZo3JqVcunUTrTQds7m3fRPnKxkoTsePKaCZbR",
  "key13": "DGF5hfjtaSxzgahbYSsh5yafyBM92r97QF9b6L3HXfCsb65zY7oCxGvcc4SH7EKYtacvCkCR1uGxTjssdLHP543",
  "key14": "3waqNvTvMQbDuNnK8obLyqLU5PLZrkxmPyhE4DVbcJfuRfH34vdZc9y32ktTYZDkZ1r79ozcVtj5FueH3yXZen8v",
  "key15": "3DvAt8S9PoBzQyU5tjDgBnnXya3rbMXxiuEqWU1FGNu8xpSWqnm7P4oCUCtTh6bePBMw1z4Pn1p5Y5GpoboPdGR8",
  "key16": "grxjyJUbZ3EkcTzngtGnjkQ35Ugd3zhWwNmz8kmKkbdQHqmgsQ4eeHsnpbtKMchM4df4DA8k864MHLyHe6viRM9",
  "key17": "2xqhGVejGx9WnsUsRoERMZtocDvrHWRjwVgq9q4jmkhRFegytE3rvqAfH8NyW6pf24eYvkqS8i9EJQTuVwsvb5R1",
  "key18": "FMCPR3xNgJn8fdQdVCbKaeVSKANZMwRLvjdgkyEx9tq5QaPi48sCg8JTGAfRUzp7jpSRybwkKcti1w8w24QVUGC",
  "key19": "519akDHYN2cfYAFfFMtoXjdxdjjomrEzJhuDy6LkerzcE5n3kPndcxFuS5UQYBGy3itTy6EW1PhAkLwRK6gsZcSP",
  "key20": "3DdvYN87m49SKeVJiDuLvoHNmZdGhboLy8jozGjkfjAWsFF5oQLkJ8LGNL7n2QoGbMPcdzndBTLuNEeSScyCEkdr",
  "key21": "5FGgGLApQ2gxkrtdEd3zK5Bki1qYxc8jW6bThGBGKSoqdRUQHwTgiUEyX4FKSwoCLwx4XS3synsqY1Sm22a24nVB",
  "key22": "5pJ2vABbCTomaYTEJm7LHjX5nFZGrRf2FvwJyt4jaohZepu62W6VMVExjch5aroECfdTEsjBTBiuhArX7AR1T4cj",
  "key23": "2yKFhZw5k7Y5NcW5GUk9L5P4f1dD5uCMDVjdRhpP3JUFZSzqttDbMVTBWefidJZn9bGdZfqjMXD1FFZCdHETeFhK",
  "key24": "49LZWGnCYkstEE5r1W3NAPHnnACCcfFhWNUekRWPQGL2HkfUscvdwczPPmHdnsmxhmsrf3ECEE7tZsBtiVU6zzH9",
  "key25": "s7kweRUnV8B2wCSnkpaxoGCfBs787FybREyKTopMTxmVNi6Ajp5FWDFy3sbKpHfd7CEwjaHqTExaWfBSFfLdGXH",
  "key26": "63hRX6GhrTtY81wn6N2BVtsNZ5hhjT4LUiHahmMyV84msoG43cKwKPfaRezRJNATTAJAnBcYoUXcNDTPhAz2JT3n",
  "key27": "4y68YBax6QCJXs1ZBhKxtDcJJNtsAPJ16P7pNDNrWuzdDnQsiwayawU8wut5TguF1SF9GRB5urhttkMoukv6dBDg",
  "key28": "5yZLtDSLA37GxL5kSZEBowTQh7giRTv4W6Df1aG8Vu8mxN7uLUw1HfDxfXYvVxfbhCy6a1h7roAKGK9kaEQoxiDn",
  "key29": "4K8MywoawFNTR8saPu3TA6uRcsEnBDNuJd3zzY8woYt4nRW4dq9SNSDqDdRbfRGzPE6amuUR5TUhoXdbsjg8C3k1",
  "key30": "43okBEuCAxVD4A48uhLXZdWTTeqVnWS4QCY3B8nGaJT2oUDSScUbs575TcuFoPKrq1rbki6hw1AYbtmNaW4FZEAb",
  "key31": "555RuZPu18infjPK4Zg3syVaLYyS4qKNakKgoNDHoEHw2Juvezw7rhXHpkNBs9kuK3XrsWj8TfmtzM5Q5eKfFwK1",
  "key32": "M5VBbnfjrQcv8fyZvcVSet2z4v4TBMDbxbyzD3K1kBDikZKGPVTwPhn2upaXdMZb3LJ5RC1bMQ9WcB1Dwj452o8",
  "key33": "51U3KSGh3RGcmX4W5xVf5GUV4Ho5vUxnWRMtCTeCQnksBsvg3HHnQ2hUqu3zgKoVyz47pyQUv6PhqB87XHNxWKeN",
  "key34": "2uz1nGJgiDDNiu1t41fdp3EbDoXMobsFEn5LuSBbSJX5AEeFwrWSyv62m1XkihbyUcSvMqa4QDzcjaWtAyqpH9yf",
  "key35": "mGSCum9hgn1d72LLKz4beFSuAee4wkrpiGSd4AFtTmbFAHuACAmsoPwfUKfdhTbFv7JdeBxhZvdGXNgj4DJAiE6",
  "key36": "2joeXreMcmFnPnkxRPDwEzktj9cSewnJ9ST3VKrzzq2YFt4vy1Nt8xfR8YC7ZNfevT3XeqXeKqJH8Y5RYDucKpys",
  "key37": "27BraeTSAuWaTV6xmkafbQqc9jNeBhPERntnu8osxRAjXewLkRdu5PDwsHLJGRc9ZLwFR7CatmggHsyB1Ff7jpGY",
  "key38": "5eFTKVBb2jGUxZqWRLe5VtxsjaR8goFAyEtMqwb7ovVHXLGg5eLt4mV2WNxpFgfF5tESbSfQ6YRngKzvaMzDU7N4",
  "key39": "5oDFQQ9QePmjxgn1ygK61VxzzpLu62GZyVnTTz8oyf7bAPfjYgE7LohKyxLmUeRWg2QaUWxr8d5Fc3yBSFxKsV6V",
  "key40": "3tPwDf9FLKmbfDcUs3LwuB2FHWTG6kfFH3NcsKM2pW23ZZsXppMcu9pgNs3XgCo2x6Ah4cZ2kQf5ynpPkRHLgmwH",
  "key41": "4bTd4MBSg1f1CvmSCBhh8pYRPZmXhisP6xvQDUSdW8mbCqJ3AqdxZawapaJk4cRwiDoLeMTkey4EeDT4DHLfVepH",
  "key42": "5aaDymhhT17Wq7S1ywpcmHkG8EFi5ukN8jSsxDX9P9DSz3cGAoVU9J4bDWZNrZBeBudgQnesdjPVJZKtUzQ2Ta6W",
  "key43": "4LWWfuMG5CBCW3SSZA8b3FQrn8rk8A2n78N66tyg12j5KJRvKroSrGNLJtVrFqzxWMvoZNVxn9Vnp7sT8BXQGaGd",
  "key44": "2BYyCge5wzdinBDALWaAVppiQwjsnrzC5e7TRwrVZh4BwrQBXZSgCBnymcnRLgiMVuoW1Z5CbKc6gNU69L7cg3Gp",
  "key45": "4WU2rChJFeiMHcfSzLxZUn3TkK4BQ3sizKja92FX9zrnLcVc3HjC6QMoMt55c9YjpDNuSVHNXsfUgrNKHT4vKYeL",
  "key46": "3YDpRtS778ki4cMY1hz49cBPqjS9FJwLZvNZsHtdckb6yhTvQbNMmtGufNZ1pbdUh2YwDvKUzkwuSmYMA1Zxdsav"
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
