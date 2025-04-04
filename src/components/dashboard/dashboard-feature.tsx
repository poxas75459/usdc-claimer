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
    "3uTtiFeK3vJkkEKaQkwpXJK1Aqhd5qsE8WqeyRMjsBU2PpUzMANJNoQCseReuQiL8z2m9cHQ2ZEDn9Qewns6TBS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2dUojigX1Z4s7Jy3FmpQkigZ7v7BKAJDK5pHcgQazoKvqBrZ5mRjq3xo5uxHmVq5fqDqFE2npsSrXRUyQzathB",
  "key1": "3eoKdvWdMbwo8NnrBpRZdTk2AkkkWHyhXn8bwZGabCTyhXvfdU4XC14rKGWLzi7tFmJG7DatSJJgDXQMxfmJLpHK",
  "key2": "5WdX4wgK9qQmcgwntRpzUmCKFYVaqXUrDBtGr3ACsWdoDN733rDRXPBfgtzJ7rAvFN9xK4ZjGNew33W6iuuMCsLd",
  "key3": "2EEJqh1x96SWXCB6FXV9xXS4nME7WeHrp2ifruG5ZrNdQPN7Ud2UGBn3vehpdzLHcAuntGNin1m7TLZSQkovaGtL",
  "key4": "4cLcGXegxSVgNaffhFTHAqAea3up2ByT5HHA4Qyna6mEKsp6HZJxxhfm6yu1aKyW6rYgehJxTfPPYpQCHUnf63GY",
  "key5": "3pNLfJmGeqbkzUtbLhRVJ5wj2Ns12s7TA9ZgKaPP9ZqmfRfz4P3FTABsGmvqKMDjpPigcJz9DY3dpu6xPtHA9s6Z",
  "key6": "xNg23oG3RDoxE3MH1VgH1KxJfvQctf5dMKd9WyVnTvqnkXBY6Dx5bwfEfhyV3AwLhCXRJ6dsfidp3EHcEJwH8Pe",
  "key7": "26BMgxEHSQzvnySYKXUua2q3pdizPg7bGZMMRrq5AvtWjo52YZvMVSEa32wcwkeD2HpLmjh4JiV3Eoy84tkkw1Zy",
  "key8": "a8cBDtMkgjgci8nWX7QMkrVErjp58MnoHLbwvmPm6ztnJvcLfozszUJwC2kvRRcpuYXU3UjUhqaxq4ohQnuFba5",
  "key9": "66KtGmWxrwCqB7Vj8LpnZVGPP2WskdJ2wnCxoKrm41sFuyJ3EzCPSRRpiHZQSi3gWi8z4F4BRr1JBoSN7PLQWuQL",
  "key10": "2E2HSU3v9UYcmdgqSGSboTfzimXxPjdbLmDkXhkBnLtjp9b53NxpFoVXZFkQCebkbxLqT6QtmPWwhVfHpwfhHmpr",
  "key11": "39uFxD5ZvbwL93g2GWaAWGaRwah8eoHvyafzrQMsfVzYHBysxiUhujLZx2mcYLcy4t3myoN2YVEb3o3Z6o6BG2XV",
  "key12": "S1dBbWrEUW3BiMtdW1gMGQ7mG8mYNv6bpyNpYT1eVFGg9JixgfmDnSd8jWBFX99nxC7QxdPFj7W7ov5yJpMf5bw",
  "key13": "2dJnAThx9dSjykTXVRkVhFyWuZCmdBSrMvRjM6bZb57cdJmWovHQA4ipq1FnwY8sLbvR2R28sVrkGBarSWjzrrvA",
  "key14": "4tvPgffvMApZM7x7ULsEBs2ikDtbR1FYrYrku5zamBZ1TGKP9iQNxc2fuCGYrfewaZ6cSm8Z7TXSZrjF3o4bpKNw",
  "key15": "3bQiJn5xHWM9jEVG5U6geRUamRnsUyTwnGAwjsRE95vSuacELTbsTW5VFASBssYncMtrjT2EBR97RKMsAoshzbwz",
  "key16": "4TzwSCqNZnXn7HmxBrf77NzY3cJG6yDhP7NjvGVTX1i5DxNXmCgNPWREK7kNBsWnUnbzZ5bb8SdMtxwgpoLE74uK",
  "key17": "QgxMHVnSr2BGDG7YA2GbocCUbrVBH5QNBMrQycENFTgZXSKX1ynGb9UjF5Q4iupF8dHhi2kRBcfVoc4uDoVHoWa",
  "key18": "4JDioH4AoBPSKDCeG2j9FBCM7yV4XaoG4VykJXAnkuBhcZHLdEAZFCyFN6c6MFzM8KsxtbhEa1q4ZiEUpmKDqi3m",
  "key19": "GPJiTjDiaVh93dTrRFdTj3zUY4XRd2hALafr8XXeEZJpPzdajpEB2ThoW72k3m9P3t4Bms4BeBWPKfhvRw9WrW5",
  "key20": "4GU5mwkpMNJzHDSoB6RPeEiJ2VQfr6sonszRV1w8bPm3LhuMsHgCNHVvtng4GYbsmLyHHXVLsBZ9dX7pqZFASawK",
  "key21": "4VPbPrQM7kv8ZwUdfiNCNEmT1FutsMbyMFTpckBDAfaGhsLWzdEfBRsoeLyxiSvs9uY5H1Dpe34piJLxJC5TQcpV",
  "key22": "38jAUbrUqFquse6KDXvMJozjiiT3a9DjfWfCUhKX4EtM9QXUUmTSZcV27tePomgmDrDsWUqdGLPmvRibsw7daTUB",
  "key23": "4Q7kp5SK53KfaTpUNHwCdbu5x2VJCT3bB1y1Cuc6eGp72UthpquHSuUDpX7nw5HxF5phzBKHYpkGAZNWpfXEocFa",
  "key24": "qw6XmvzkgWvi8YgTk9hSwjCeF4MKsMJnLrYdTHRyGMbEFDAZ6BZJcQpWsBxE7eBbTSAwqDKgeda7sgUxNf5Zw2U",
  "key25": "VMx5qqTocKnhsUWd6M24hWnKmmwwXsjHozP5tUsdwZpPm6s9pwxF93pWPawrzfQyyYj1mFu6BYLPSWBBTMojUkm",
  "key26": "3kisLXepxgxo5P5LXdw4jwuY73Y6Lyfb9xxwbjiDtZRGRazpu3jg8PDoQGc64hkvbg1FntBfgDD5PBqvFaZt6eY1",
  "key27": "66KKr5KP7rEtqYV5Ue8P37YJQu1rzjnkJTbPDkmPYa4k87b5nxEAfCZzrVER1np9CDK5RMB1YHzzyCoLCyZJ7wQf",
  "key28": "486mJXwNGEn2KxxoeARApFYPdwAB6Zf5xDpDjNs14cfGqREv2rVFrKUfTwLw1wqiUB1NoyKdD87sC8WWiwDHwaDA",
  "key29": "3zQQd3157qnu3sNfqxgMXRRCg5yeyPEZK76LzFCd63Q2UZSgDLf2EYCWHeGW6GSaeGqfGgiwhipJEGLqYFJBnZtz",
  "key30": "22ZMHZSPd9Hu9mCSeji2PmQnbWiR825pYUs4qR1rzVqdFV7T6vJy72m9Y7g3DqVh6A4MeuNe55VC6bPjMiyL9Bwy",
  "key31": "4n88E8rnt3tY1TLrev8LqvVSHRYgtFH4Cy52TUo3Gg7hS9pDBJmZiVhVNoo5zQLq466PQZb4yHGm1YUPTBE2yTf",
  "key32": "57t9yVuxaYmatv1AZh5BixAm7Ff1VvEJuxybodxwn8c9czvzCTaHPzQ1rbkiP9JkHSJmDLXpzMrWCARvM6JHbMLY",
  "key33": "4SPWfpzRpmkH1fWvh9k6XD6Lhf28bdXUdMCPkQAzQE2MPgtChfEeXUs5fUnWRqMvzDvF3vrsgggLXC76b79vaJjp",
  "key34": "5RYKKHxqqwXoRewP2mrWbctfgBzCT8HpMDAWCUbcY8yreg7uoYAAE78WtH3fsbtUb5b8amuwDR1jk567nen4bHYE",
  "key35": "epvdUamDkdv6TqDnhNCrRdoSujTTARpcLyY7HP9AB7fdYgh5NaSrL4aX39mby4u3238xEVA1TCgHBphvpsYTBAT",
  "key36": "3ri8UgujeAQanG9v7hmq6qd3i4FGYfE9Uud5CFAe77FUbg7bJAEo4p8zCWbvjLmwygRSDWiDcaUXJZcX3VENp4Lz",
  "key37": "41TDVs8hztrBb54FhtztfdGS4M2i1KfRUcB34UAM9YQead7PQnWCLfD3i8rMywiEqBsmYEbnHWAYQ96e1HLy9tmx",
  "key38": "5LPZuYeByyFKpGcRvZNFeYhb3BsEokw2sWkhYQkCSEc3NzNMediTVHytmq6NHdcgGMdy25jVQ3cEtSG9B8Az1RG8"
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
