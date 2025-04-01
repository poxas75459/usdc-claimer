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
    "34Q3D9jPw4fPKL8s15R8NJ4Ssv3YstBX9pYhLNKZJvbm6UY8A9LyvdcBjoQB1Tz1q7X4C9Qxhhtvy1aXaD8tLQAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EC6ogXJZponhM3Y4XwmunvpyM7xixGxreCNfyjmQUxwkyjfhF33PsQ8j9vbYLzhMwkMZ66FBCVvDaGhwmw2Q6Nh",
  "key1": "3S8eo7UexxHuGcj326DKxvsNrE9Lmw8EgXkpdgGu228EV9ntP8dt5m32HSGX5xnBf5XsUuMsduZm4gmGTziqg1vK",
  "key2": "44akBPyGdp6yHpnvBkUxoBe5ZsMAmNeVvGPZtihWsokKmw2CEMmuR9uCCTF5w5ZC7X1VRKD4eAn3MYtDnu8R3CN4",
  "key3": "58rYn8VJRP5fGgobQbjE4STA2HGbYhV9YYBZhVhuHq1XxvahmMCuU72W2rMohvWV1yj146ELhhiXeBdLbGfNGS34",
  "key4": "2NBBnHrSZoSDAnQEt5JjrjWnSSYT834fNA3kySZxTsyYyDGcATKSm8tYrahCbSdEjfTHJfthVNrJ79ekqre2Vbgm",
  "key5": "wWNeb3fpB49eBBrAjUPFEzuNdqMha5GDxvyQKbyMend6bUAAYdaY3PpVE2NUV6LpKw5hpuZvL92aqkEScryvEdx",
  "key6": "V6jpixJBqjiiYVtmXjK6NiMAVq539pgHVMRSXwCuLryVUFpLiMScjKd6huq3udTkwo8Gy1NaSkPkdoz5Uyt53WD",
  "key7": "4Ti1f2bdn9CqAi6s8rYirLfFhi1muR4vXkkXdSvgKo4H5vQkwXXPM986ay8CzzefnP6bmCo8wtBRj33XJTGpmNXt",
  "key8": "254chPhJKriCr128CPr7mNsKcWBYsU7Y85b23US5WUS7Mcci2B4nFK6oEDUCto5d81SQ2PiiL279PzvwrLoBfwPt",
  "key9": "5naBBsK345NkMzWP6MDu5XNww1NuVUDuKJBS1v2pka1xC7qEy3szjCiP4PbERMkykSAamyxyeKeaMMsSC2rYU2QQ",
  "key10": "WxgasbhiLRSnfucXDjoEddeQV9qCP8sWpBfJ43yzU9bdq3BMeHURfkNLcHVtPZDbfHgwrJEYxEtRVbjMFzNQDo8",
  "key11": "612LScapr2aQMTgKhpDgmK3wBi75qsHGRoPWpQ7KMQh8ZLmqCcpPqffCE25Bo3Vk74K6CcSHMTDiAfCHXUyPCwPK",
  "key12": "2StYovrtpneYGRnqnGSnhKivSNW6HQFc1HK2uNezA48ZcVCmtwD2G5fNEN6WVDnZQartt8hyPxmLKLXiNWkEGqa8",
  "key13": "4tGTDs1rsaypU1oFG1mcnPkZAigCco51fYKBDBf2WNNJikrUR59wBi7wMKYcqABC5Dp7zBrHb3Ubq1j68SrQbAz1",
  "key14": "2CR75uEgzx8epxM2Uex7mNNc1eaD39cMAGY1d2dsR2Z288JPpB11Qh78ZGxShG5MVGBRZXnh4LfAKkyBEdV8GXVT",
  "key15": "5pvXgNj3smocvsmZnoc97Y9541z6GDKgS4msdLAZ1nasn9HusyL5gJAewY9icTVGTdVDXpkLD6Mut8KfPEb8LTKG",
  "key16": "5apeDpJng1U9HXtR7Usp4BWwo3NyWN831LXkQd8DiwWa5gmDgYecGWZoLBKUqMxkKu1DYTnoVaHonim86b6NxZGc",
  "key17": "2k8YUsHSdmHftRZuCZLqmT8HEsbpYkFD9jm19xaVStk1YQtgQXSTABYs9GRe3UP6gMVZD4Kwk2KbuCfrU2KCRuAP",
  "key18": "2XLUicAAAxnyJEkE1GyoKADEMBT25vTbvU9Bxmy8VaBhCTBSzNXZSBsZ6AFuXp32B73CbjH9Fg4w5gU3xvTMfG8d",
  "key19": "56v4iJZ6WaWGRUyXaNvmWxh3cmE8qiVPo7551gT7y3hBJkLVo3ix9BNesKkQxnWzZ9ybri8TzAvbVPjGi955tuCv",
  "key20": "5PtUtYw64DCZMzPCLGWnayKLLjMvBFWwhGTssSpgv1tyggmh3hjBZ34JZ27kyWGTZ9FHzKi966stUYVciYiTcD8p",
  "key21": "31wARbbPMPGH5Z6Eya2ritusBxdKhFdjKLQ478PggSDkVqgowmUWVJBFjcxd8CVmbMqUvF9hQ8k3NWPK2Eg61Azv",
  "key22": "4QYj9TRwEP55QHb1JxRPnRR9HHTh8sMVQwXpSSaKfUjPU1XbfMYqnpcbUdcuQptxKBasFCvSJZEAyPe2kpnEt5uS",
  "key23": "5AHhJ8B4NhTuw92zhy27pg8j6DfPNdttfaKf3zDvRASUmQ5Sz5GnXVkgDCNA3J9gb1iYaf3os4PQndpDUPDPAyxR",
  "key24": "uCpPixeYGfnVmSpk9huSgtJE4awMMSoHnPYBxqCDsTRy6A2j4yZoyp2UGoNfUsfDjVG3qpiqAXSQ8S3zvqzw6wJ",
  "key25": "2Dz9jqdWuZZ4xZvMJADzY7sNmpQJCzFs8kxZuH9VdBehwtNg6YtKUmShnSgSVJN2kEweaFfAPmKXetzUDjU22kEJ",
  "key26": "4vt11m14ocU52AJ9KmBw3qANHv6Jbx7QFqjzZhZEeUurWCfk3eV4iTRPcjuLhJT1EpcKQ4PxPHXjmAwrh9bnZkhL",
  "key27": "4cuiZaT6TWQH2MPAhykuVCNGL56dc2GzC49FdtwztNjSrnN2pQoKPzMenCMVLRjpBEuUL7BjAdwBgTszohJTJnrR",
  "key28": "5PaGTZ2hrA2rLkXTDBPurw6EY9t1XUTQhSWi7Z2r2z5gQd8aU3eeejhP93Ze93wS7h2HeQkVQribEDD63XF5jiK5",
  "key29": "57NbrjmYtiuaeeeRyhYiL7bRTfYzkYZEjCHNJcNU9aYGM9wiaRpiuVBMc1c9kk2rVBg9xSGipPYp6LXZ9vwhF5vq",
  "key30": "4UbGVaRyfmx13NspGmS6jrK78MnHsdBYgfPH5KysJuZ2k5HgXBdGr14Pp7poU3PPJEaZnxZHzdhfxijDYYqWnvU2",
  "key31": "3C1WWahDQtckkfJEa2TViZVfE4KcLpkz6w5K1NvTC19dfhUXmj8qrDdDoV8e2WXbCFWgy9u4btraDBEc3PVU5vRQ",
  "key32": "2D9uYKw5ZuMzCV4Bysft3H6kg58ZHNa3xTmWGrqFg75qY4XBjMqDKG7vzgVxpqcp86FwJtE8L5YRMUvCd3yUfFHX",
  "key33": "4wWudZEzTWWh4a5ddSynG8YpDUU7rQ8rzjSHDC8WWZd8nThDxb3QPFi7Qu23P4E2EzqfYJuBBYyH63DexsEtaLZw",
  "key34": "4xZ7Tmce8Xv57YbXeLXZActm3mdvpDyCzmTLQpdFkwiY6kZ79i7KcCnupdMnfuHQ8dQQTC7EdxdyuT8jsRFcsP6K",
  "key35": "3NyMnKgLyAsgs1b5kxbzo8KT3Mjr6Yt9xFRiUAoaQ7av4uhqoG8mFnSVHGhHeKS2y5oBdTG75iUfAxPUbDDkFoo5",
  "key36": "2x6GDmq1VuL7sGrj9WkQBrMnJov6ycw4mkQZq3L2NTVfoxAWFbwKqcT2Y7ocNauT1sN5t99CrkSJMJPNLb6dyS3W",
  "key37": "yqAq7BM4zTGnYYquq5Kdx7JJ63DmysZ4xgmGgk1L2T7HmH9RTMtSsGgcWXzMPEYZF8GmoARhhnzYRizgPd3qCm9",
  "key38": "4bUD9yPH6vuqKYzv4dmZYLAmfXmU8rfamDX788fLV68c7Uy8WMVJgALMn8ByKYr8ADZmDhDGy77ucPUQLsX2veEh",
  "key39": "5Gs5WFNyzV2WpebNGQnwGmit4poFspkjsGvtkyj4cQ8Ee77Un1CbpRYME4UGubP59zh8HysiTnssH6D7s2iEhFba",
  "key40": "5y5Tw7St2Y5fUhjm6cR4HLVJVFh3eV4bota225oNMQpRS3b89zv7iJbnA6THqqFi35XoN5mHWto2Wwx8cZSmyvBX",
  "key41": "5gAmj1iRVxGBVPZMxN7ydS6EL6SRA3qrkHdHgrSYctCxVAGJycsLQAmUgGuJaqiKtMZnCPCB4StWSMXXjG9nUgJc",
  "key42": "M65u2Hpn7MDBwVcJefiEdfXXLgxDQL8KuMerJs1mwZDLHXtBX2QajwnHRzUH3sL8QeEY5NNMETao6isJPodcKVQ",
  "key43": "3dXMBKscn86EBJyZBeEDBeUuRQo3EGRXXYKmdoK7afpVRmBwLCz9ZA2wyuSWoCsxrZ2miBA1RSTzWraLdb5aFZPi",
  "key44": "2SiLo2n7b3ejMbxppANw2SJ44t14Nr2P88SiCnUzN7eX5vxNDdwzUqAvfmhm4zQvgiEk3Kvwksm62JkRgKZfsTpd",
  "key45": "5pEWSrnU8kd1A9yLPkSJh8nvFDk1wxTjtumX2i8MZHhhaWCnomtPdhkDsqKSujZQRRwjxD9PimfHoFdBqHcrJ2dc"
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
