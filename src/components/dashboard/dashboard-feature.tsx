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
    "YLaFnXsyW6FHnCZN7hvW4Ma87PkivBbU3d1Tj7fWnvd5yKQxuaq1AbVZrfYY7dgvauKdwQ2mW7C4mSMXBQ6HH3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZP7JKYqGWaJbVquwrrFRkisyULmkUjbnpHhgUwx1Sy6eodi848DuzsFeyzg85MNekKzrAi54XotbpjUs9V5ZDBU",
  "key1": "4GUVbyroNiRMr1MwivWv8xGqi91K37oJVkTUJv5rvHuiMTvokLqsA5T8q7JiuPTRPqmnsQczcFbz6Gm9NPXvf7hB",
  "key2": "3hVvohFg3dCYY9X9EzdEA5XK6WVNT1sU6qDEmxERGU86ow5zF7KqfBXRbin6FM9iBSk6ERibakVsmiU92h6BmnGW",
  "key3": "31W85UmpmMtpsnMixXViWXky8xY26v11WkjguPLSHGebSMnEGDZQ9ZMdFGAur24iEFVnz2528jGN8hZB1GbZimfY",
  "key4": "2SB1RuTFZ4Vr6jeaGreTXX6UfMZ1SvpREUhLxoXvwPg4LkD4nUn1AbkY6ZYTuaNQD4rgwwKuXd5LLDWa3V5vUkmD",
  "key5": "4Hi8BqcuEpFVsTsgDD3i9x5Wv4WVxwwtXhCWvDrYpb96dmGwbunuDN2xnM24ynpwLjadfGnMcBgrAdMnipYstquB",
  "key6": "4QjNx1ptEXv9evBBr8Sdxx2nqF2RvpwoXGAHvmEJLEfiBoAkLJkRnmSLS3nupxigHedJ8GxHiLCig5fir4YHprUy",
  "key7": "3SXFshRr95of8G9rTJh2thAvGQbgMCqh6K4UqXeDbYQyZV5ntmcnoxFBoxc3GNDQscYPGjdmap21RPXX1ZgpzSZ3",
  "key8": "3EjxQQAwFdmJtmpET9yfTMwxUkdZ5o2qBMRQFH4hctbzFntWCt4tSzbXoNrempqdmTpNVUd5t4h7GtxM3z7XLZ7t",
  "key9": "3CwwAUTaHZXtvh91LXBHa9ZcjCJsfCDkKicBKPsShsTpN1DmnH5u9wkYquCSY2t2AA7YLohSeDJpcLgeAyA7U9Jg",
  "key10": "3LALV2h8WHAP7hrWAFerpHDqFxPipCbWVv64S65X5zXaFcynVSR2mXfL9nqDj53VDiqpnothj43YVHgc6PijhnqG",
  "key11": "4MdY831XNpXvABCY8NN1uhB2DFPAbK6FnMyiDma6WYT5xLRHUah9zGty2HrLXx1bc9CB1tXNy3xPKteVbxrMseUG",
  "key12": "4S6qiL8ai3myAtZXxNJxh8SXFPUtusvUgECeVYCB3FgvgWEsGEFxYLscRRZ7692RiB35qyKsa3BY2A23tVU9Fgxq",
  "key13": "2TrGnmckFgVMRrK4ppuH4QDoWnNwiRB39PGT743hfc5B7m4AQZH88172A5PX7CpiBW5GpJ4a5VrD1EJt8m8VwsqK",
  "key14": "Az1T7xADkTXu8JR2fmad6119nRYDxzH71R3Q4Zngf5yvkH2ZwzoCiDNaD1mLP5FiKhQAz6kmCSuif36i8B1RjXv",
  "key15": "5Rp1QHPqxZXSGKHqN8PxLb6bP4wgrqGps1YDmtX1Y5DQP6rnvkid7AaCV3bhzYK3qyPCtwF1r9LjG9r7vWuHQa5R",
  "key16": "3XqznDX5dsvDoucfJAR7EUkkHL3753WCYHmU2vuPge2Vk5T79Bb9G3mqeRP4dmQY7Ynn9FngetrERPAV6SKNnZni",
  "key17": "hBaQsAQQHtPAL5o787eUSBduiefdHGBCvr9mm7LAwF9kJEvgNMvgEkWtVM8bKQUpTxpiUU8exfpyKuhrouii3CU",
  "key18": "4TQNJWBJGJRf9SnzZPVQp7ojDK32y7JLYTgRWc54r8W2BKmUujZHymFU3281hK5C1FMEZmLFawerqYYi3uKnVtrL",
  "key19": "536PuXA3jPsVQQF7p2a9pt7qvvN6d6dSHUzi3b2pSwKkSFjfgvYmybqPrGXMc3HySSTSbzkWTjC9D9dVTNcDCJFJ",
  "key20": "3LEKchwGoXpHQXuDHDQv8Eo5rvkujH72YtmgYzDLfHUygUREeTeJpt1CqkpUeWvCA4EtbVdcfhcQvCRdF9uPtfBT",
  "key21": "4TW7imdtUfY6uAPg75FPn3BLgaYhPE8TntmWk4yn3cDQDX2RXbULuCg9SJZZsfKxSoUzuMpc5YMnLzru6vQmrcc4",
  "key22": "2ufFvDku4zBVPh4ENRMR5B2k6NB8UTbJw6FoVXqrkY8EbDKUW35ZMrCJmcQwmYJG3zbxoZZocvZgwkiEMRTZUdLJ",
  "key23": "2LcHGoRxJoinrLAj2cHfc8aA6WKC9EqhQ2dnVeFfVYN4BifPb1eq2WH8zhXmFbYgLC4c5MJ8Gd5nMYNRCDtAhcDH",
  "key24": "5Nqg1MYdvh8yMtadqMhwUNXLe4zBLrvhoaZ2RgCE9rX5Xq83LqUh8ukGeFhr1gHcz5ibd9i5HLGVwh6EsXvooSNk",
  "key25": "2UnzgFwsUvBpzH9tKG9JnFTgnFTxLF9rkriQQg6jYx7EX7qqDh4ZSHKwystPRnsAU8mjZMc48CcavoxUf2iipZPX",
  "key26": "3d9eGha5mbzEFnQuMoHsQi6pTUpBzCiTch9r6yHqE12xdJXxwfKKE4CWwRnvGnarzgD8DgRGCJjWnPV1UaEwVYxR",
  "key27": "4gSvDQB9R49QTCR5wGLPUxtkgh9wbfcEVjLtsYzocwQC7GmEEGThDMrdKiLHcHMvARUAdU7WdL7GxXcK7iBSc266",
  "key28": "gSYSY2J4pZrDusRxTzAZcpph81Hv9UNDFqhduPJsnDJH7B42YKWMTB5eCUYtJggPCpzZBLJPKXdLnm5kcLpbRfp",
  "key29": "fM49VsxatkbYYTGmRLRvjh4PWr92NjYHfzhH5FDmRRUqE1md3VuLHUi3pkB7vPTHLo5StT45c8MmAibAYmzuNSM",
  "key30": "VgHVosbH2PNZNQYj6kA9Qgs7T8AajZo1FR6LJLP8W3KAYzvnvFJYKSwP2kbd8RnW58DjyTaWLMzbezyCMtguXBo",
  "key31": "BKkmLZ6exo5EpAzoEcbqX6SM7Mbe6zvRcVGYAYHjSZNodWrdjH3VNAJYjgAzmJQFDQphoQQ9qXKE5XfW2wdwmUP",
  "key32": "29f9BzKqrCUC2dJbK66vx7yb7c6SseehKZ1WQkbZ91RuzDXtotBHpCkiTqLcjAQZPMUc2vKztNeFsdYUwUY5VNrJ",
  "key33": "3svX61MWidJM3eH926ijY5WGYd2oPKu9hoZyUrTed6UQfn16SFmjeUPDSe3KVdtLmprijVZ9BtgquFD5MoXVKjWR",
  "key34": "4z3TUD3fScZXzxBfqTEwus59aH9mTnZtkPLWj27awVMdHRxmwxjtNgsbJ6s3eKJ9VLj6sT9T8PrJNvyStgTb4uxh",
  "key35": "2bpwQ32Eco2B894K2XzGVJUa9ERmcLtRxthn3Xsc6LxPQkEujP44X4kkHLoaiVsodUDtZrpeW5zSCxCwvJWAeqRS",
  "key36": "3eUVk8ZTnpi6g7TSuYhLeLTy8bX4v9Sa4S5AjD3ui3rCCuM4DQAAkL5mTsQL3GbtUJi1GDt1fZarhPk1c4tdmoE3",
  "key37": "4XQvXPKi2HUj3xbjpv5VNNWxiM34sRPjEtbWYpd2XFS8C6dsaYFkae8Zna33bZBYsPWhDE9sDxfqhSDfztLEP3kt",
  "key38": "NWot3V4SacCZHJ1cnmaz5ZJYNVK45r7pU8B1FSTkgMpCb9j3aVM3yuVZLJu5zHFEox7fC5wPYoEZRp8KBY5WYFt",
  "key39": "2YVG8LHWNUfuiwVM4gs9ayp4UDG1uj94WW1pTvJxG5pVm1DXj6GUTbM99LzZUA7g7FfFC3Adus61QRiXXXYsVVAv",
  "key40": "5FhuRJ6who6hsKmK7usWR11YfRDQhLmQdribbNzXcscK8EK6xbEL1KN7tDqhGapcWoSDNvB2EocHpdUxBndxhv2X",
  "key41": "2kJ9TKtiAG7pyfVik1mfF32MdxoaovqArBdBBXtXJpXheYcsPrq6RcBvxVMSpSvUFeVZkXUg56XssEosauc5E2Eh",
  "key42": "4hvLhnChMriqD2weqdLXSqZEJSxfBkmhUbTrwNkgRctwB5jUwyS2emN6YpDnT8QFVTJ8faxSwwrFCKVorpRvctTA",
  "key43": "4nhNvKLbWzzNerYZxRR8MU3cuQT2dRbE798wgF9jiwdHFiw3pxwo6cULA6Egvqz6D7PnRiASziSR5HkNYq5vj2eX",
  "key44": "27EL55cWg5iMJtyvTJqZfKUxgPNKWHcA1iwH86E2GJWCc7UobkMqYA575XkMC9VmTguaRHBd52QX1VfRoK1AMnMY",
  "key45": "4QBZc3HwSstgmNTj4zazdvBkEUpTbtWqgHiSr5DC9XN4mgpxAXaJHMbxe9WG1tHfXcrCtkMdHpxryLnMgioB8R6g",
  "key46": "3QEXhEHg677Jj5bRhjHgwHW8dcqbEAQVoa4U4bRvhChMXvSSEKCLwfNvK4o9jngxoCSHWNsNz1gCxDvJkhviF6wQ",
  "key47": "2ztVkEPP31kGG4owQ3LpBUkaNKzj1i4rNcy1fv1T5bsHsYsiyz8KF9mC9STQZnQxHakBj8zNdKLKzFa1Um1a1e6e",
  "key48": "eZfXgFCxR3hAQoSsmpirmpQtzZREWUDwHy1yrYp7R4wwseCMqKhYaPW7A55hePKJqmmcTWXPJw8RhAzCm3jw1rX",
  "key49": "5Z2b9AneoVDUbViRTfB9zwMFPu5zJdXDBzgUZXJwy8AjEPizaZLJoHSaMgCuCwreCaBEQQxJ783T2L1U8NbkcsuB"
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
