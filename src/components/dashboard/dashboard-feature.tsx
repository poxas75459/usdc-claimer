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
    "2Yzrp7R4mWGqDCQ47w83HJGGJNbwga6iBkiu5iacNcFtCtv1ysi4xM5M5axvVRcqs2bfbnq8ogSgegaqatCswPZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44zoGobegpe39QNyqGCyVSksUeET57UU6CB9twkE9tacEiNPxeMQE9rcYyzDNLTwDdAnwUhiG2Z9jt82zJKJgH4a",
  "key1": "BijqYp1i8PUPekqRhZx6FHE4GCtaLxjWHtH8da1D7xd8HFfC5aaqX9UofcxJ9cHBHcbpkiizN8kE1iz6Jt26FeW",
  "key2": "MXKxWp4evbc4pUsjhRG3REwhY8Cnf169yurtvQ51TkhVbrchYBQuLy297R7LzVuVkqXjuxPFu43ii4NU5oJ2tFU",
  "key3": "3KJh1gjqLxtS4PbtY2hbnRfvU6VTC4v3JZ4oPadFiZvyRaEQq8HxF2zZb9fMsHc4VajXhKLdgwtdmZ1H8zj8B1kg",
  "key4": "2DRvnjbrojGGxeLFcrjU5EEpjbs5V8baZvJGcMS3AjnqJp6D3Va7amSJqpXr7D8y91Lb6Mo9DtSiuDWvyYJ1iQL",
  "key5": "4x5rjMATxzD5YPqiVMYYSh9LkYPKjAjhgXmnUcndUAv2LjHfXCuGbFKBrmH5ev9hqdn1YaErpXLtFCRE4E3Mk3ZS",
  "key6": "4zFQogxPQVFWrJRNPtmWy5zmTGseMMPW2dwfMLTaBbLNzXhUDApBWz3DBzgb2wDvN7coGShUveqvhnhb4GsK7vQu",
  "key7": "W15MkUqNz66q4wXJvJtpC2xVfXDk4mALk2qWjyN2eS7MRMc2PMe4b8LsVAS1F1USypR5Sn1Hybhc2d6akvHL3Lw",
  "key8": "5MxwLfSMBdH16heDSVJdNBhH3hpV2zNck7acJEG5Xf47DWfphuKyu17eyPsh7nKaqt5G33DS5wTUcNYfZVvQ32Zh",
  "key9": "5QwrxZ1Dvj4CeHfz1F1oKNTLHvFLpigNm1GwR8afWPysgt3W4Hq4uAmXHmsUWkqTtfKuubhgpjbEVELKLJB1R82Q",
  "key10": "5fmMffXRbwAsiAuFBJoQfvnKiZ7kk4nJPiTKGPWKD4xw8T2R5PXgKgJVjAY2KoocVMDTfMATcwzGa4R7ihrBp5Vx",
  "key11": "2uEmbp68kn6DaHwZHM67TqnbttWyShB3Pqf8SoNCh5aQzua82aKos9eE4bQryK9m72mdUrYn5FS6haKdSYTCKopU",
  "key12": "5zbuetydANADA2F8LVHUsS9KnUrgNg2q1qoz35HyW6GTDv5VpE27Dbur8E2dZ112N3yL5ArJ1qtZyFX3HTqHn2jy",
  "key13": "5gUyj9d67GFSBdvvVxkPDiLig6JP1JwJq7NRyyhdPhNSQ6RaCkiBcLm6FMibva4N26PviTvfBfw685hpVQbnoTD",
  "key14": "5h7yowpkD3QcKCzHWYP27M1aRToWz66YXY4DH8jiZydENz2JTBgrB4Tksdwi4aAbCUVibpwn3h9USJ4URLcGzYqw",
  "key15": "2iV111Vcupwy6CMgg5CvAkyjiKfQMD7CFvCRqLTzY76HmhTH2YA8BMepqqYgVf6KVu9iu9HQfmTQ88QiYh7bwJcT",
  "key16": "8yrnAuTrAL4GJ3ofhmmHDNdHQq2CCZgzmuT7hwyJQEcua8ts7nFpU6Jnc4uRNFFUYkJV4KeraHQMGG9FLqiqgrC",
  "key17": "5zYzA54jFz49KrWc4YRqAPPwM4189YH7cvduuy4qLWjuhi8AkNfmAwk9Y37F6HT3KpGkjfYqf7q9epNsqhtgZSMD",
  "key18": "55cvRFGadWHMZY3ZqoPa2YLarR2UshRfihKrTSJf8FDh2kETPXi9dHGjHm9fh7LBXLyjTB7YowyyDupKyE71wRho",
  "key19": "5tMGeopfG8t2NQdTsZm6Vq4SJs2y2LVNzPSi1agBVxiq6Up322YS1n5sddqu5YUqzPEgG3TY9kynynixQEHn1bhB",
  "key20": "3QMASKD3pNyfr71YGfDAVzzhtu9YYinuHBmjJETH7TeLZurRcPYHSjst6GEudmosYnPYdJs3nRdAiVMe91MpE1Vh",
  "key21": "5DXz8wKnjPTscBEQCxe3enR69JXXPHXMZ9TLhkVsShhdV4Adwrd7bBy9uFY3AunfkEico2ubaBYnrLhdABDKe37y",
  "key22": "4QEW4HShkksdqb9qLxhqiyWYV9uG1dhdAmZcpk1mZs3yxmwyU9tSDhu8qLpJQXALUgRTXmJq1WY2JoHZQsCaemjD",
  "key23": "5XoB6NMrwRCawHmqoEqmpKyYgMEfURhqMTWghGuMh63MEDFrAKqxN3iUq6L8GZa1tWA3TjBcAWetpA2imLNWRb3s",
  "key24": "xhe5nTbeQHPsvqgd5wZvAPvCNaopdQJKmeec3SULbGxp6RD2hmT1CBrjt4tRRqRxFBNKPtBt36NZM8sWgvHFXLu",
  "key25": "3xD6TpZGGNgSL5XZqDND2bpM3WWD9MnbYPtdiMgnVWr5B6jE92wba7Huz3CVgsLNsiJ6BAMLVZzR2mf6Gg3QUXd8",
  "key26": "2BuFvRPiwnLACXUMUmgqwH6ZSwsPmkiG9S2BW2bJWyAAxjchoGJ6bRX2hBpxFim1R7qFWfZjYBhWmqKLFe7UT7U3",
  "key27": "2bvhWuLedHqTxTMZBMvrpxF698D2L1P1KthEP1AhPxm6B223wWjhxWV4DxPxe4Rw646gkksPcLFM4hMpvrj5pzfB",
  "key28": "2mKLnLXr599tbJ3Xv1GFhv4473tXDM8x1PyGy1AoaDBprafbkZKMTs7wfdjaUyFcFcFpLmwrAVet3DcJgTTkCWJx",
  "key29": "3M55Db56bBttcXWokfVGWZSpsU4kgyKdWhWXHX8EnPNpBJZQ87Z5XJhacxwww7TeCjntHN8v7dniH5hPnNSe8TjH",
  "key30": "4K1FXt2zbPwi8ahRzEGZRHASUkdnBj1Q1FQMBFrq6u2myFgvMMeacso7p3Wb3mWhQUF1BdJaKojMpvF72xvt2uJB",
  "key31": "3AsQ4DcWk1Ymodim1pMdTByECtbjhZp7zBWAG9Hh6DjrGjX8MKGypKvxoKQ9PU7DiAw7kXKh36JjpXB1Rnomzc5F",
  "key32": "3Fza9xARjJ2iyZUwwTvHfvS2ZWV1xUZnKrWJiTThQDxgVmFLTSYGeqkN3SSmzqTyRko6zFZJxWu7nVVtqDZ264sq",
  "key33": "otVrahkuZKUc6SjLhRT6XEwgjwTcTofATWToGtU956V5QUxv3wSLwcB7YRsobgTicskHXxag7KLFB4AkGifdbPS",
  "key34": "582cmdviycb29CqswmWUtvjqtbA8YX7op7brzFSoPAEkqPThncMT5FToHcLgFYGvfSrBTnsXm4sEytsbcQeRfKvv",
  "key35": "47iU95SUov1dr8yX8XCnJ6GUPgt94hESmiAWkMaNFVJrwAYEAJx5G75cs9KPqVd24iWfebS2JsrGMSWcJv9R5RtW",
  "key36": "XjBTG3cZ37kqp3m5psqAgkRUUqHFqc16ZhGZv1QsC4Rr5KMJbvBWGXCuJpjzioBed6A2wbmirwhBYwWxg1mBTLN",
  "key37": "2Si8hXhQR1k4d84nRTRX6vUjk39aBf45BTzgdJcxNXaoKqwYvQSL8U3PW445CfgxzYKtCHw5DkspA2vUe5pdf4pq",
  "key38": "3f2gggJCU6zdAknsxSyFRj8pgxNMw7oc3FemZ9jY2jPKfRRnpLtBwLB2LAGFhbk2QPvti86PwcpMxaDDxwmoaJp8",
  "key39": "5BYpBLmFFwMoCUXuNSjEcw54DY9S4EojcYHRJbYFCpfXmb5pczFTnEELHTsmAihzaRq2VEvNMANhwr2zSUCHgXYH",
  "key40": "i1Hccj2ifJCdjov9hMpp2akgCLjNpgugga2Cwgvb5Kn5zemRVbYEXazyQ2y85PfGg6zJD977EuqRxCNyXV8GCst",
  "key41": "5rtZ4n2pZdwf1wq97Qjj1BFVfNa96QqHiCizZjZ7PtiWFqQGoWQMmXvEH8tkiWywRbQ8M5o6sYusDPLKmqA51zX7",
  "key42": "5cbcT6f6ao6GCGtQyqs7ZXy3aSofnfz5iU7KveEZP4hfLXyb7wUCM4u4mpvVfhE8KC6JXJu2KvPUweBvg2gWq8Ri",
  "key43": "pvhymWKV1WvJxNvD9S4SgBewZVfctqgFjBaiaxemBMHgoWpWnYfQD7HthfeRyzvmqeh2sWq7a8EVD7dooypyEUW",
  "key44": "4mLG9dqfQ5DC9GRhTe3suVvTwTmrdvyR345R4x5aAMW4qhGCEUsc4Psjb6MGTjTsZp4fmsfujVUvNkb2957b9cq8",
  "key45": "62QsSaXgcDRZ6G49A3zUeprm41HBXgXrCNuY3an2RdkuKK4PB29QjkZDRQ2mZs5e8xSARJr2PaP1SDneijoYYDbg",
  "key46": "66QKbzhLWziZGto47G81CeyAb8keeiUTpaSuHvEyGKsWH2qfbBraVrrpEsiHzB86aUh4B7s3cKSEdAhVx32arbUc",
  "key47": "3xNyStQgJD8z8urcZY33U4uV6mhikFqGr1DGmJCoEqm7pPnfoxPFAx2AJavU5feZbtTCKdKK4ytotQmsJoPp1EVc",
  "key48": "4SUtgc1w9fWbqjJVUCPK38LHuLoGM6TLGEdSZ1kBjGgWYvEXm7Ee4WApmNb9XBJpRYecDLU85uwJdNTNLeiGzqVb",
  "key49": "4jMc9bhjm2JvwLpwRLRQ35DXVVkxdyYUsDqHQk2dzA6sWd5h81X7URN2nFD2NPzYieKUD8SmgXNT6FKfzMy1b27p"
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
