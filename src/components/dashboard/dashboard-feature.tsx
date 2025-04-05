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
    "5zDGG6NJmfxL6UTmT1qa8rqnCrTFV1wc81cc8BAQVf9RoCpG2SAVKQDutLYCtzvFF5GxAjioGeE1GrVPhjRhHiBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXX4on2WpHn2hnj5T7wkEPRCKk7cfSpAzrv4gaWWpBxgfhK3V2q6PtqKNegjD9dFyTF5Cp9xm77fHUrNaYx6dx7",
  "key1": "sKuL2K1Z1Y8gx71CJR5jCwSSKCVKP5ya4dqcmAsTiRAV3YU6auWwUj84Ee2TLEtfnxMR6HN5yKvzLKz6PMXmPYs",
  "key2": "Gv9BNZzCJF71ARXsCmridBsEQ9V3GJU9dUbCKv7g8FgjmdVHpT35ApJpF1d2uZrq5fdC35Ctr6VUcapWZhmaS6Q",
  "key3": "3fKGuSErcqqvacxfVmg5ja4sB71KAvzLADuTVnAeZSaoTCU1ZPxQiKrHuc386Zq89MYZyN8W4toLEEo3fJkWwNq2",
  "key4": "65fA1z42hS3LP6ZUzvXJzNsbD1X5ARMTBPrh3YW38gjFvMyKxtrweSVzXgfNjU9odXPVyaWYZEF4MgEroE33K5dp",
  "key5": "2rTswnp8KzBFK4UN6iCr3vkwsSsxioeWeCrShMQ3XTQ6PjJ6ng8LytTzbvSk3nmHGJGZz6N7Fj2Kk45PVLWNwucz",
  "key6": "44q9hnHCJ1qU8aAPLAxCC4jJhzhPcegiwv4pfjrvDqVQuMWnxME9Ft6uw752YJeWy4KfLVHbLif8wQakTWf4LFh1",
  "key7": "5s6dYDwhygwvJo2QZ77PgrqcyNhMisvY2TRHHYxkYZCMcbssiocSijb99j5SGDFP585v2CvoxMMDFQkLSjbQKk9Y",
  "key8": "4XufMqMvstCDXJ7zk3KAhAS24bXx6MVmQctaACFwNt2EkopZg1N8UfJSUCWNzEtGRyXnWtyCzJdt4w4CTwm47DNx",
  "key9": "4d4vUYu69phQiuFD3kRgcQEUwrMSK9b2hRhbVV4e3DZtB4vZzLkNEYG1DNwCVJhRXPPPXFnLTdfAt1T2z7B5fDBi",
  "key10": "2KV23gjeLk8JqfngHNtadrF5hYiJTXqWrrVmG4vdgktrzLWpMhsiJNAvXZem8xqfYMRTH2dd4iNEVi7ZLj5bWqWk",
  "key11": "3tak8SSFSeYKeGF6DriF2FgnVqZrJL3aaREP7gMTuWSPeBbm9mymv7yxtGxkR37WRqq3Agrb77ER1S7U92PBKhP7",
  "key12": "51SVFei7mxZeJ2Ay4vxasQS8EAKBAcqVZVJVw6JQNJgJha53nq1taHmjBJJWtojQSazA8ThTcgAMFkgzeh4bosod",
  "key13": "2L1L1ZfhLBvaqXJw1XqjWyuEHhnn4tr4seDugsD9x4nyeg5rUPDCaxz8dWhyRgZSNu8HURz7FqePa9obSLqJ9A86",
  "key14": "58SVHe3nEVWFpEpMz64Mh9VTAC5TxHmym1BFmKqF61TAGQo8Ucckc515JhqTXsq1ngEzyu94RJ2PcgkkhMy3xAV",
  "key15": "5GxVKvnpdRqe4M8NqArPemAn7rQs1BktusnXs695H8APbg3pqYHvyBUQFMjw9EaebvBgNE9tFVGtNYxqaVSHSYeY",
  "key16": "5vzXcYmnY57f5Pm5bnrsfA6U1zxEychhEbuVEqKCHU7t8TMcUem2SDjm6wbmkNyGq7RS4fvGUwywrLSHBK1PNnmC",
  "key17": "wvgeN6A3Cj1b7fZXgkjhMnZYERuhbPKCAKKvZWhapjJoZXE8abUz843CNcUCU9QLFwe6tWb9669eVFEKVcMb8PG",
  "key18": "8mz6WB72Yt6eRGLgR4uNon2zQFGmrb39MBwdKsQrCU6gxeohsdjoLqg947Tak8mAuKbXQ5Lf8hk1n7HHHE527m9",
  "key19": "2CzSu2tJaunjVpa35k6UfwBJaNX1ayES4mCF1p4aqzPgUWXNoMfUuFrXDeufaT6ptyknkShVZ2NPQMb11WR7Aguo",
  "key20": "29dRuehcsktXLgenLaT3q2g21stXZN4uZbtYHt2LQMvrLvydRvsDTNqnyQaP2arYM4tMj5VozPmL3iH6wKrH4dxc",
  "key21": "37c9prFk7CNWf1geHeCStA1zwHsjTyS6LRyiD5sTVVYZ6bE7E36ABR3G8EtkrHQVR29xNiqfdNWwtce8bUmgxPJQ",
  "key22": "Jp5HBA5zgfSTwBCpbtjukgqagJeYYVtPTYLgQLKzeuAFGS5kf6kJARwXuV49mkuu1bJrqYoTwuqhQxGf5mB8eU3",
  "key23": "4LmjS4dFWz6jcnpKNBd1Dfh5Wn2zyHukw5M2LoWPyK91HQx2vCeHieR4QGVb2BXxSYr6bUr78MyZE5xCbG7ySZ3A",
  "key24": "5C2zxLgZBsWjcsNUwGeb6uaKiZ99c8etEAdtVELFguFej3oBxEfNinAM9PJZusSHMBp2Cb5YR4uUQCY1vs21DKJX",
  "key25": "4Sd5JKCtHF3544k21LGBs2ETf56V8QoZKjjTTLqogsjavfD6AcMwYnP77SAoFTmHrrEhrd74JxYrwNtrsxW4xUo4",
  "key26": "HbkvAz3Ly97oR1i9EN7Vuf746kiMZ99LDmzvden5PDgvp1QRoocs5Gj7oniyYjBVRCgWnPWSUSgUQ8tgQNPmmZ2",
  "key27": "5oXin99yvzKUMVx5wGWCPLFVhcv9tKe7W2SbUb3p7wq4CYvuSExeyqsjr92wErZLM6T5x9tym67Chm3az2kweWry",
  "key28": "53h8VJM78vxgRFURDsxTN8dmWtmbjaD1swfr4tJRyv58xFVMmKP8xmRznddDN7GP3eQdnH5XmHN9mwfQzZsLyXJ6",
  "key29": "5cddxHfEJ4CFxp6MpFxKqb9bUNpbvj7mmPUA3Y7qm3ThS6wQb8JAY6dvM7nHzzLakNutbtnUpN4291NEeX9CkJiR",
  "key30": "mbFFYRbsALWoxJf51xCh94xsPe1ui9b3VPDWTdpqjbXZeLNATs7vE282pgMcnr2YiDatv8ttuFNxrx2RL6KTgyT",
  "key31": "2CFx3XGWR5eW5rYPWFx8gkAYn2gVV4zjT7Jo1i5yN9hJt5LfmN9nHa4CpEprRGzRrKcrrrongs6CsUUxV2B3bTFT",
  "key32": "48D4VzQEy1PQuH61KtqMYHb1mBc8yNzFdHS4kG3hxRts6b3Fux1JRBE2yDfKzVQE3BKoNjgxaeRaCbcw7pjhFPP5",
  "key33": "CRb2ezjMicRhjFD8q1YzV6ozWhVUE7ehFuf6hvYGdo28QCfdJEXUdPJHUg1cNmSY1JHhu6fBc82dDUWHdo6Kb2u",
  "key34": "3P3QX7X3Qzya9jJhTUpNnhA3BJt8UZ3sC37NywYwwxt2rTrKmh3EHX94dRcNtwAfUkD7U54F5dXKCCc7R2EEust1",
  "key35": "5HeyjDCXo1sa1jpUxJXcYhyGo7AwX495AWkrkjqKA63qNwH7aGbBXTm91zUAf4HutCwQPw3FwZqTngs6zp3ZUmoe",
  "key36": "2xvGMbeG6x63uWLTHpfuVkmtMeimgCpggqDAQKnQyUST2xnceLzQHNTa7PEtWfDgFs1suNkthBknwcmFpLgPBdSg",
  "key37": "3QFHd2nZwM26qbRgZvkLy7GjjtgjK821mHACsvoY9SuX5wwrhswBaY7WWtkk2hkktXtszf285rZkpSYyyGHY9dxB",
  "key38": "3n9TjAUfwWqT3Hhn1iBPa4bUiUi4CYhNUQ1sKsRvMrMJuTuzDkY5e2aaFJKjycdcKK4n7hfyhUoQS4dHN2P4AaWA",
  "key39": "234hZwxPYX6tJ2rVrNm9qftVu5WhgtcQkeSzGSVntcQq6fH5c6cS94xZCCzUCHRo7xsD4Fr9WvJZ9gYubqCDfAAb",
  "key40": "3zdJkHoA6PRh12uKPqhWpKnCetxUHfuT3873k8RxpMSnx8hiamAzkYsPitruJFP1fRPG5RYsfh61kKNotmrHng5u",
  "key41": "535KqEPoqdWH9JevJw8CPZscsqpfD9SKnUnz4j2NRmokj8utwAtuecqSPJ5AyzKp6fnCTeQtf4AeWrFBrG4L4UPc",
  "key42": "5La5786Q8nVwz1trQZaLZGmvVH1hhXmJpFYabJwzV7tAj8ojp158f8AdXFhMkhicmZSi4jQnugby88DgDWnaqn8m",
  "key43": "5VPSwwe9rThwYPMxtrRzjSuDiLv3RJ5J6VFwv5e9CbqLHQmYU1WRMCe3QyNQFsWx8UMFyJgbRdBWgEcyCUcruU5m",
  "key44": "37482tw2vs9jC8o28hsNDreVbX4VwgVFWmD3eUKsFnHpnkptzZjAcpNSbhdcLSJLivuqn82TTfyWZahM6yDMjfdG"
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
