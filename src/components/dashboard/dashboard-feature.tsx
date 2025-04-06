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
    "NaAxwU2nBjb4cLc6yYrCzQH7Xh5qrpsjcyA36WT7wG29WV42HpJNZi2JR2Hmkr15TNqetmDU1M8tLZuuUPWirQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K9Rgk8Sk7cwWXPb4ipm3kBtWwgxDyigychqo9PnMY6PMa8TD8PbN83DGfWrpuxLoi8FY4ZCjkfdMTGJmhxtf6jd",
  "key1": "4aM9fUHBSM6M59Hbx2ffsDkGEPUADFaADrRaNB83tNWVQ9n4MvKM256xpU3VzqtznpcLu3mdGjHXC7MvQfuwRDLU",
  "key2": "5kEr5Y8QaA6EX6RkXLrGE3t5Pe53E6iNZk1gJFfRk9s4tGMwbQupNoVDaUtWZ2VxQT2HSb8ZAEcc3SH8P6RVxQDN",
  "key3": "5Jq6gePzuQcpcAkZZ2FH7x2wccpbfMJZhqU8RXXgbGR27LSAoWbit46FxqvfnZJ4eMeEycyQq6QrDUzVDWHtSD51",
  "key4": "5WxfpL3vFHMCuCDCGATh1H7VAofStj1kmoQKbsjCf3rRuYKQHeyikN3bUvAZETvjYfi9qPhZUnXKtaXnbSKQdyXv",
  "key5": "stbnYmZtQhngZKa6myfL3WY6W43qjFQmpbsNBiGojR5Au6ttH1h1UJpjZfN1UxJMj2iFVQ7r3J3vMXthwCRsH2w",
  "key6": "3nQzixzQHqitoJfXtLd1v6uq4ea1qCbVFX7eWmFpJrzejhdDWFPwN94NqLpBk5rgazqdNN8nnrCmgic4hsdsBzSg",
  "key7": "5PqVyviUj68hxH6bvSdxm55N7pmrjYufNBxoMKxPpQtNvdXNc2ieC8hqJ384VppAzrBX5JRkh1gaPBqwEsvsMGkx",
  "key8": "fdqjWbAU5hcUqsSLTbDMDqA9dZaCSH9FuWeJE6ZcCXQxrDz2PZwnN2oW9JjKmi1cEu5fF3PK4Kzek7gr6mRmoqm",
  "key9": "49aDz9vSjc3CSZ4BYmUKv3RogS2cQ5fmniyzejMsgJfMZAZRroReM43wsQTxt2MiZ1QnaQR8tcWwwLeQrwFnxPEf",
  "key10": "32gitDNhwLq2MERrMuqDqiD5DiXVZBvjHUEan87fqU5bzHZgmmZ2EaXWjFdQyf4GvgKRff3fue1y2ijjyspzVLfj",
  "key11": "vFLHRZnN2tAja7LUSdoY6sLt276Jhf4EAjikwxnuiEZQUdyMVFhoT792kFF2a1aQBNFQKtYb8AFndWDGEVHiSP1",
  "key12": "5n27aLiQvaW2yWJez3k6wUQEDFD5UCHGd3NfbEQiNhGgBAKSVmE2phu2HBUjbbkLJgPubdmD4YbPmDE2RreokQXN",
  "key13": "2D3qd1rN84kFo3PqwEmBECbEGmhuaTcRbeot9gbdGgu1ecYFyiUG8ByyDtkdWj4uwswv3Rx2YZS31QkLX7acFEp7",
  "key14": "39AxoGW4XW4HRQ1NnTnuhKivFWDabnGP5FzK42B74Sqr2hi8etYq3HYW72XMfwgmhGTKtPRZfVbkg3tqtbBAsuLU",
  "key15": "2bneADbgnrmYezbUubooydkSM94qtYbcfBFu6Q85hSD31iRN43Yn9bS47RrCUFnwhykaW9LZkAMD9CZ9y2m7avkJ",
  "key16": "5zbmXC39mMJFwHAaTSedr6iQksYnC5jJwis5bMqVQ7ag38Ni9bhbnkZJ6jdfwfDuWvwuJWjQ5KD4jaHyUN5odKNu",
  "key17": "4iNmZMMS9Fd4rCatNH5axttaZ1ehnV9kKmC3wg9xZtXrQjfgBQUnp3LrCHiU37B2PDM5QP7T9P86exoBMKCXwyDA",
  "key18": "5TrU9VM2MAjfnmvY4b5gLN8oLVJ8TB8tyNX9FezJ4P5Wvoy4KLaXENLpqnHxrKqRC8NBSkaHV6K1L9pL9WWqRb6n",
  "key19": "3k7XfathoQ6F1bgcKHjkVtjQcADci614MyZvSJRjXB7Da5kN1ntjqntgDoN2MhKTpyFRKGRTfgHAb8AdZSJcrNu2",
  "key20": "5wuJniPoMijcofHbFpqACdcUZ54wNoTtkP6tqnpwWEAmrSzDfuQ1Veni3tj3CBRDdaYwfULTHBn45zbTuWXWvxe",
  "key21": "2omrKWxmPQNnjRo5cN2LSjQvHDoB7uuYgRB3iiLBfAn3YBCVakWrVdsjEnnQGXtaC3g6DnGoRxj7gNVQYEGTrH3i",
  "key22": "3B6fvYFwQjXLwxQHVjWbnVB6saqUJsX1wzyGpYGTyL2F9dbKSUQsrmuXt8aRsT9aVczcMFhecSwsJ5iHFTEvV4Pa",
  "key23": "3o7uvdVn7uppKzKe9ePXLEmj427HD14t3HA2qJxXBXi3yvhSHv3UZEt1evjteEKLHJkFfSrpwGzjbPK6STHGRSjt",
  "key24": "58gRpQPjgnJUosQuEXE6xkCk5nvhSnpinNLcowgAxkp35TvHLYa2GtRM2DX3XHRxmZeGvSnZC6dPPbY6y1KDFXMd",
  "key25": "3V5ZGZ8gk4ZskbTr286Lqg4SdPpo7Dfdw9Fdtk2RMGKetsu2wQp41kVe346sJPxuMB2vZmh2VcRngcPno7HCagUK",
  "key26": "4NK1bmSKeAthPqwfWu4CYYa2GVJCLgbhfvUb4RCvBwfe5cvCK7wdwcCd4bHVpdPxuiLugyLYDKhkNMRxJd2DMd5f",
  "key27": "5thAcBL4VhxKoCB6NNJ63FRgKG1U37Rm4aT6UVb7GXUEZTMBA62qkTLJfLChXS3UpM44cHsiPPt8UheWW9YSRLpn",
  "key28": "4Wjhpip8UZE3PFB6Wa6Z3qMxBQTiy7pvbWP6DYD6DH3ysC4uVxayNEyPR77jYu86wCgE6uou1YWc6XgSb5krN5BQ",
  "key29": "GgkmmqUu5LpFKKLE6th25ee19N1znCCmHcDhfHPmJVv1C8ukAsCuFDtvSdqdm5RAvXr5CCVLyFGTYg5bgz3R8Z7",
  "key30": "vNxMABPUt2TYTLyRyqauEkThYEn6xhJ9HiRNyxinsCVFwMYG7TjiM7uexPrpx47odiax4rpkHD1dUWtDnRUSrkc",
  "key31": "2WaUZgr3bWEJ1mQGSFhUE1MAD3UEy2hCvQ9rVHxg8kbPDAcd98MTUHmvJ3xrLrVTcPmPL4yVh3BRPzXvMXFcBuZU",
  "key32": "4gR1DavVz7ZAz58x5ea6n15GZVEFgkWkp9xYgvu5pojyh5zLaUR1N3VmvgFXG87fQac9iqN2nJibthuuu7zZaD93",
  "key33": "4izTnDYaZkiGRLsqjmq3ZH3hMqYWLMDw1tzPCEuY2iBgzWZHmybkeXbYzjLnMUBfduojgmC82hRLuZpiUSGwQK3S",
  "key34": "1217YAbsX6zioSyWvrhuDw1HyAMSrYNweyq4gGfENx9tBm9mcX5Hus8kLFwsNvLyZtTkR2tBVEaEeHjbNLXjbejd",
  "key35": "25DZjnbLeszsZ7fyZUnqUm2iSR4ypR5K3EQASeirpcCr91G8yN1RPaToVFZcFhDeiYSTSZjPrDyHhcxniCyeTkct",
  "key36": "4XEfURcyifFJQrJj9dj8xopbYWzDWBbpuQW3VirQmJWpN7qi16UdbhPuDetyTzJDujmEfVLBdXjpuZUaABpDcmAN",
  "key37": "Pe8UKihHyHQmX1SMG2GErDJH5KzCsTxxaiEkM7g6nKvDrkaqL28NQ2QW7aPzDjVQ5vh5ptS329o3N2Wo5b3BL23",
  "key38": "3VFokgcwimxpcxG1igoLW2P8XzVjQx8Pxy4UXQBWJm2yL3AyR5z4LQEdVTLkfnBrsyFPGfJFTmkwhZam1HPMhqRW",
  "key39": "5Bbdu2sp9QsQtC42QF8RFKTN6Cv6AgkpFLp1Fgu7zsz1xox7Y1i6ZczypRsEHC1f2kTCqfRH1vxAuaogVLkncX7c",
  "key40": "2oTggKbWjvj2EsSmPY1rdDVhbFoXBXMNwMSGMcNVYso47s5zrYgRssZxGh6MSNR5hWdsakx42ihZtZa1op5Ah7qd",
  "key41": "5yBDEGu1BenmaP77FpGiEDbRCxXhgE5Jn8Da5FpqaH9r3wKWREk6JbDYTQjEUbTTN2c8wvqoiVSFAr8DZgfT1koV",
  "key42": "4PDVmeitDxMtS699NWRvLL12mgBBE1qYSCgWfyhFp7DJgt8UM7qV7ejApCm2AD6eoR678TVyMmCxnFSjNiZQDDKh",
  "key43": "4cXcXiYvAS3Yd2o5bBjVchv7RWihD4K2KdySfMiQS9gJExniHy1kEZXekTwBAu9ZMcb4jsEzo44YfwtK4QAUp8J8",
  "key44": "2QRktQk9DxaaA4cgad3wMtPrfat33f1z3GopfwCuBabWMqVbdcwjjirdDsV9GWhheTYKJCoorQxDKcknrCn9VuTg"
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
