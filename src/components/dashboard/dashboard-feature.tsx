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
    "AF6uwVg5KBHfUadia3DfstssG1FkBSJWQeZUVNEiP9Z6BLiBG7uHjvaA4MDRPN3Fm3VNvsGoSuJ18473ye8F5hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZgcP3eGMHaLEpzpuSid285GMtGXWcjNW4Ww1W1kC83P5BvnNvKSAEKwmZB48VSafRjVu9ACtFLwWTiH8ZXFjbtp",
  "key1": "4oyxo6BHH4QYAEJtMnwaJj1kw9fVnkedZowNpTw49Dv62ExH2QAX2sdegtr4F7aABQJLTfeRrKu68vne8hcJu7Ay",
  "key2": "59kaMLZ5FWGivcat2VBqBajtrXKwKZk74cDtCJRXYUCdAsoCdBEBRF4vtNcdpRaK3sjFCwocv2tYZRqehNyHfsmQ",
  "key3": "3ahYsi5a6gDLkrwJk3JftjET6A4WMDG3xCFjjPsD5iJ681drNXRbd86fb6CTyVViUBMJSAUG7ovUfQwfPE5AJtJR",
  "key4": "5ihDVUGcF1NKWvqZdJY4FkPeaCkp5qdJyxKjs6KmBMcA1mXM99SxUuSFstbMQtLzFDZXqQM5Qg7jWoT4g3YnLZuQ",
  "key5": "32TULAzuTmeoDAkySTLukUFUbAdiJMjMRhSRVDoaWd29qCfe4LhJWLrqzNnsAqL3SUecBNE1expUG482rWbVXHop",
  "key6": "nLfWTauq78zYcGTxufZuemWjTHYMT21y1Zfik3LTD9Mgkx3sfcEZvnTbE6UKzBwsExrfdqjExKLmvpE66JBme1E",
  "key7": "2usmwXv5Ub3UtDWhEQYVND95HD5sRvCn9FQQ8twr96KJfLANttFaSVmuz7QNwXQ8CPBk9u2VMF65pMb9DWVMrs5H",
  "key8": "35yVuUrjZYBfrEYf7fgSCbkC7cooHFsWVJqvgKUdo4cHnxvX27gxszAvMvxSSwzdPu6Zt83SMPrJVQ27n5VFKoAS",
  "key9": "45f58ViAQ7qKfSciaDG7Bj5haYcLCFSRgpUj2EaN3migKAMwCY42KjDKAW1BhphfnXg3jtaFErWV472yjxGWHAWy",
  "key10": "2uiNtmV11WM8zDNrGAk5BkLhoFWjvowm64KZnVMzPzs1CRfgp9t5mxLwTwo7Po6oY8aZp8Xo4rrdw7owRU5rSNmA",
  "key11": "3d5XZT9gksfHFZ6uoNePxesTwKiytjRieVy73Ly25V2Q41tfxqcHKg8EcGfWH38ABCYhB5wndWorapBZqQZSqBfE",
  "key12": "618r4nBNxzKjxG3hmtLGFzyPpVJFPTq5kRKm689S9qc5CoBfgsTesKduNkkQCMukM299c1cVhNVgHo35J8aG2Z4b",
  "key13": "wToYVCfvcw8ckWapxh6Qd5TFWVAFh5contDR3nDsaHuJCgojLiwLxm9WkhqGgPCWDGBMNrYSFDxBDtd2Y1TqLnV",
  "key14": "38ughamUQP3X5LhgSmkWEDDERvj8Yx9wmKr2zpEKPcmDemYgZDDcboi3sek5JhKF6hV5Ynd3avT77pvT729KKqsj",
  "key15": "5gjid7SVhGuFSRFbYFrSav9e2Nc6QsZf6pGVMmzQyghwFzVeWKiMVonz49xEaLPn6F4Y88rsqHkd3W2QcWoTg6F6",
  "key16": "2NxjwA1sxpEfCh4kzc5B3fddqsHMhpn7RqKvb3nwRRyM7CdmEgUDrLphLUe4uehSdTkcJPTtWPriPifWsUbFxgwm",
  "key17": "216D2ogdXENPgcmCNtY7sod9gwXutNBb3dijj2zmvAYfr6mbZJPRC58PJCaqMT14Qsuwtm6ymd3hwkqsSKfpKtM8",
  "key18": "37Tf8yWa5ho1UJrANN6cqG1DYHJVzG4SbwSMPxU2L1htPtj28MmRPcykEtFao1FYgjjaTaxFH6PvLYNFJrUZdfvb",
  "key19": "eHbXmANJsuHZYELs43cyCFnN8jCQ1CgUxBY1N3VNZM8xBseCeo4PzTE7kfuyYqXcw2MXiWik4yVE6QN2RttKNEx",
  "key20": "5KpYLXhAEsYKoRrb8SQVAVxd3FR1FMZgmQW4mRYcUkarec8WsutiR5Z7NXmyxC1hZCF9Y7SHXuxrBwhCnDZ81QCi",
  "key21": "61aaJaf1jrEvnALPzURqaLDrpzkikJhFkSKyrYVwbN5gzFcMQ6pQWhPxYdvSSscYYRnevvx91JYaG6fdiwPN6A1J",
  "key22": "4xNZjDPP7mNsj8ynmmLZ7Eq1UUnQU9M2HUWpFFPsWVSsGMUHc7nuQn2c369LxTtJJ7Ud99bHQEYsBPZgryspbPqy",
  "key23": "GT589uEXwgsDDYMQFTxrxXeGMkScmWbsVy4hSkmofigM59ACU2Zy27QGHuMF81XxyBs5UjLZTZWXwVtRFefY3Nc",
  "key24": "34TnsgQmZabTGiBaQW2onkWP4tsNwmFhYdQqahMsHTFhssod5uBHuK2pnUGUWvHqwwQPtrmtsFjtdf2U3X6KoimZ",
  "key25": "2f4oktGfJSNvVmPcK2sC4Cozae5B5MJ8TaD4LP4vxFwNhLqJvyhXAHC6oLfvqGGhUWuKv7pa75cKHvnsTxEozwV1",
  "key26": "3pJ7WTHinAgQXddV9X2mxxdjxojjGSUMgsWQZLrUfGVZqfMHADssrw9LeYuCjGYDC4aH6ct1W782b4s9CbrxTT6d",
  "key27": "2rkPUBPsmziAvsjXyKAVrpw1hFvXBAeMsnYq18Mfgp6SBsSUUAjApwFAdmhH1fsED7vSXX13CWi6uHJ7QC57yW4E",
  "key28": "29KJcxRU3eMQEZcw2B9G1pPddYE7xuUkBRQdY6JrfBRYwTagNSqXuLksGtGHjLp4bkMd6TkNnSDi75x6JtmgQkvx",
  "key29": "3jvWtzg2QTuWXSAQeq4Hnra8SkBhUdrmyVhKepVJjAEyX7nMVzMxstG9PKPhWc6N2HUJF2QJeNpejawqDj7LqMQy",
  "key30": "U8WBDDUmtc7rxYJoPEKo62zjFKP3TbAnQwNyH8rVSyrLAJud2X8De747MdGntMsyNefNVxFS1BnxWe2WPHoUN65",
  "key31": "2ZYJnaQthqvBeodKne1GaNZNmwxbEAHeufwrVp23F1aKNpPhZ2RrZXe4dAgoowL68kLTMw8CTenWAozsg4qdxKvp",
  "key32": "5WazsSm5To3hAv4Now5QtLA26eFZyuFkWrPoa4hq2ifUZd7RgN6AA44wuE9AcjL9hNHd1Lwhos96wmPxaj2KLAFM",
  "key33": "5RKdM4X8thNwsTqX9LrfCeojhnQctPrc55dA9V4Re4MrTLWwCdMjxMnFsp2i15NTtcK6DpQLsLnP8FoYG54bSP6J",
  "key34": "3Q6y3v8x6Xdv2ifACog6pj7DPgzKSLao9gYyo2HtHcfp2HEz7NYbyUiJDZHnFzY88PtN8citJ2D45v7KGGR1uv4o",
  "key35": "2qbdTVf6FFRJLtGwEAMmsVGcA4PZJa3mET1y9ttWkSFkXukSDiKbZUh1mhFH883Gh7xmEXvdGFT4rFquBN8vC4jk",
  "key36": "5C4ckXZYwqGxYLyHW8XVXXXfEz99kMFeYUXt4T8FHyPz4f2DfrxxUugGCxazf32SrCHKxvHxhD9wdCYBajjzbyT7",
  "key37": "24JtBNkBuVpMNFyY9Nw45wHJfAzL9QRQyd4qbtb3TL25WydfBeiKuSi925vokPU5dduGzDxZTKuREUY39RPv3dXu",
  "key38": "528fkQcPg3TpprgyK9vp5v638YB7HuT3KrciwRjqMDznvczTbUeMPcFDJQkQ2tRmJugtSo2UAQG4xxsv4B92kEGE",
  "key39": "55RtmhCJyYna5gpN7MFThn2QxXh5wQUuNGNHK6bySNmuDXZdrFK5ipn8SLfpWhXkbiXZAMGymv3zPRz3mwUroSe3",
  "key40": "5k1oBraYAk39b6pBtfDSUASUd3AAsYgJysN1Z5w3ruuS1PGu7vShcMRE8WFhHyzuSSdy86YdvsPgtTs992mt3ZaN",
  "key41": "2P972JyhEhgV9bDGzx6dcXGyPW332VzBzvujAZUvspApvVznaRewYt9Sya63fBdBFrKsE7G8MtNabtE8g7VE9JzM",
  "key42": "4sgDw5yz1ng9bJcBJUgkALyfC42v1aS33xws9to7At1sFLmpWBZyn4tRv15FVjFSt1x38ukadYYPLjWhEm8Dr6wF",
  "key43": "3bVeHPCZ9ouyJwaZK58729ELNDavxjJ5Q2ia9yET6NLHddRR6Cdc2LBKM6XCx5Cp9GC1zrNwD4V7z23vNdbxNy8x",
  "key44": "5tdgtYxHEsAubTA7vH6xri2YkMND6eAUaqxNRPrsaJMFhGaDEryoaHmrDSeTPjRQ7gZtj3pguqQ5GKicRE6hmbRg",
  "key45": "2PrtNQVFQu8mVXnMLUH87WEyvA1tRrrMd3WWUjAn73eEdtQ4CupM5yUea1fRw7T2PcQSU67a2BUdrzZR8tAPbNe3",
  "key46": "9FAfLYMyKjqMLPLwwpJ5DVWxKYrdp9esvm9Y55UjB3MG92LHM3AHq1RLq5xRWk9qq7YGeFeaHogpCxsW4f2CWWb",
  "key47": "34qhqfpvbwissRtDKuQcNix2BhEwr3FcQmfjSp5vqcKXViZB1WPnHpMf5rtz6UJAs43zHdE8s8SCZdKcmV4vtrm2",
  "key48": "ZgGWEHcy5cXycobnXgfSCzWpD6EMKVW3LBRk83WXpaCwuvQCKx8wjzQZRg7TCZqGZ9hwJ2uqUGGe9QqcqVoYXY4"
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
