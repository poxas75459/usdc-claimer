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
    "5QVvnHaj2qjo7SDmTeS2TkkWWwHgHDad4xmqto61RvWKmevpxjyogQvyzJ3htNo3xaYGWYZKVscemQEwUeyFg5wD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r1jNXk332ukVNyRg8zv9f9G6RQCuVoR8BrRLfz16WhEJJoUSJZbeJKiRREyGbXZoNH6HRrsqBfbarkRb6aRoVhz",
  "key1": "5KZZw7wojjXk4xjuZU9fhy4XBRgGbgr6tuQGJuZJaiWjpiPhH6PnwAJwfzxjRTcumqFosd4hiUUQohc1uF27wMTG",
  "key2": "qTywYXzWdasRuE3KbjdDas4skGPU5qedCKxFqqkQ5dJZ9QSHotbro7oRRHzxVeZh2A64o3cMN77bcw7ZyCAXWLP",
  "key3": "4bBsTeeyeT53pAJnARW8jbrqdQfsGwk5ENXvuUTiqGURTFGSztmUAZDHTkhrET5W7NkKaTTTCG6ZwCYBd52bB34k",
  "key4": "HMdwcotwjWcg6wZA8Dh6NLcAiBDFuUwz6LFESar6SWvc1LVoS9gcLHs2c6vioxw4ugcWDGx8vDuyTk3NUam43qT",
  "key5": "5JBEDLt6JWeLSJFYaxFrtXmQ5pRbGDZDHLj4VsjzaR4WGBBLXj2NEBPevUNJcVhCySgqFbvSLrYmCaLXiThvMgWa",
  "key6": "3Y96ifmgsQNb7SddaAWSGxnRdEeHUJaCtVxX4MGQ3AcGbdE61uKMEDytM6NYFY9pUbuPaRuS9i252KHAzPwBd6td",
  "key7": "PKgmZGUDp19Fc5Z7yfby1zSmQEPzohK7xCZj45spsH31ny16CYbqu6ew5DRAorzVPXtjFD5vfRKWxhcFjdwyTWj",
  "key8": "2DtWw6GRhR3JMnw74JypkXfesgH4L5pAxpdGKQPRg2tftLLFrzktKV75M9LbUttb39wSpE87Qqt6WWZ3Yvdv1Lk5",
  "key9": "5HNgpoYbd387Lkw1tDDzbdga9qsm1Fw5bPmrNFHWxBZ7xP5hADhqJaQnuaxP1itwUUwShAfwcnGkMquhJZrPjYR2",
  "key10": "5mE1aK4TnMKxwCu5sHrkHdhH7rUr16sdEmxi1omQncvyufJB2eSMeN7sQc6G41Hhdi3MuucgkdF22QLZX8FEog8w",
  "key11": "QLLgSyFuXL661b58yXknTJLgPNK3hN7k3GTaUj52FBKMQXtPMHBiTed9jT8QbpTMJ4qPt8pv2c8dpsTJQh6EbSt",
  "key12": "4cVnLBQi1tnZCt7ZMAkeFkJu7tCasPmE3sNu4wcy6edaypu7Bf58mha6ekvXB3ZRwu9si7iQxnAeUjoxAG1xSQHW",
  "key13": "5Ar8KGUin69ora4r3fmH1H3nRpDqPAAwdjk9FpGgjHY2n6tkHWEDJHXqfZH6TPT1jQdLdFU45RCBCU5K5a82pm6E",
  "key14": "2xufaJtPgf37HoZxXWmCi1pfK1fzsXkPiRS5ZSeayH54A6t17txDgm1sfrL8KKKAVCMu2cGRMNvU7TkCbg7sJAoR",
  "key15": "3LGwQbW54CN1Rr4tpUbZJVKijL34gvQfZf1A6d84zkWRqdAgwSevGxamD7zbvAsXPab81AdE7mmYf7rTwgACQCuv",
  "key16": "a2KkTpqzQHTJ9du5papwjbwQs19aVP1hdqBRA6ep5hGn9TVUoCSx9Biz5c1h4HMdM36ieyfJHuiCSkDAf1vzDy2",
  "key17": "4dc3TTQx3k1e97HetAUC8zcJDQiX4ms6KT1v9R692NB4zTmiEvie9diCF3s8UqZxYSy4Ebghhb29rPBbEceHMErn",
  "key18": "3g2dxSFxCXYT185L4EYxgJS2BeoysaTix97gE3LNntG5oen7zZKxe73UxXt9LGu5FHhuFfAPSGeYGwJrjYWTXCYP",
  "key19": "2gHPJnxzWjnQVLHgCzb2pqQmh8KHkZhh9RNnrcJRKCnTCQAboGG4d3Rq3QQ7Hg7u75YMZFrRJ3MfQtproNZTgNkp",
  "key20": "59jL5pGnv4YEe3HfLhiPWRDEJJNsW1FKw877Vy5GeGT3E3GRoLEdJQhBp6WxnSMi1rSQwVa12q5JMT4ygYkkRRUM",
  "key21": "5dom4xVE1cPoHZU7z9WhAca91irGsvGCW6oy1JcyxHwoNbbeaVP3XNo4qbnm4NRN31q3NBkWEefUdP4AAieXq847",
  "key22": "3DPCufdHvgN2HMFGLo4wCoaR51FeTyeWZaGHz2SbW5AXGzfNoCDP3CFc98nty2h5bhyhNnbMiEB6Wg7C1qNBE4Jw",
  "key23": "3b8RFsR86VGLeFHQuW8ssaGzN3oBEYetE9kN2yh1vCbU94BgnnQvNZzEi1ZUL2FWrkgwnTFTsSrT3JABYGCvP2NA",
  "key24": "5kwiWjorXuXcK28xpbZYA1Gast48PCYQYXvr9owDRhj1tcW9tryqmzH8mgJbEbDQDCHuZdu828CfsWuXCy5cDPEG",
  "key25": "2KPFH3H3rh9WyvQPB9RbZ97A557xH7ar6R5buimhjjp5dKdpXWDv5Jkg82EqWfpaGN73FfKaiZtFr3zNMVAMWq17",
  "key26": "5h8LEFcsgjeg7mcnGDGZaSwmKxRZWQrb8NevTVxT554Sq3BT6mWUhKDUStTdexMnV7KtMp5QqhJaGCfMxQmA4fZX",
  "key27": "4oFnyh5spnpNwfDKSRjjFCKibiLCDQ33b7LBZQGacSmZRdk88V8Mq7PKxy4T7i7wXPf6iyy31DJojnnUxXx9jcCG",
  "key28": "2vtuyUUHDeav3Die6qrXQSq25KLKWGsR9BLNeNuBbcB33jo8H9dqapYmmvpyGv3JD7wftwyLbBjbN3XfDEk3Gte5",
  "key29": "4YrLANUBkTvWRJLZC8wP5ZpABkUDkoXLF4rmchmLq5tBhe3kSvKwP6a4XdTXGVCJadeHiVk5EjhhBZFJwjgkWe2i",
  "key30": "44iPvBW7BeBwJRkF1cQ6usdUPcJQpDpx5kaXpCvoyeppnqnABMqnsECvqY69tddUxido1MoegBAtJUFVjeEDQeUR",
  "key31": "4FhB5WDwdEtvyp8WDrEerXvucv211htvZ5CQztC5ECw2xgpqYEvXJTLWEKTRFrBasPvKF5KXmRv2hN6mkkRQNZz1",
  "key32": "4CKWv2VGqHiegtZTiqrEPaRF9W3e898z57ReWeYvpn7AnenEz2YUZbN8mmtFdi1Ucn5wjeNbVFJBdbp5qLk3Qwds",
  "key33": "2qaPm6MZJfd2mYUtkyKpdyp8mrkrruyFi7MAg2gM7cRRLzEUFXjffaUBca8Mc5gkCGAa4YooQuVnqppf5HtqcKB6",
  "key34": "3h2KqJYcXYdMTWdgvePjkXmLEd6P9QkukBN6R474s5XvDBCJf6u5KZHae682NMhSpWRJc2xJUb5om4u7QGSmKQL6",
  "key35": "3x1xf72mvofve1yrTbYkQb9PUj1KgwHpRMEDkwNem8i8tA9YemVq3ttDbVaWqqujhrbgVvZn8yExwDBHh9cqys2Z",
  "key36": "31aZgRABHrcS9Ybxta8sjDahgYKZYGC24fot2TFG9vAHmhS1i3HDMDGnSrhkmuWhYf51KkBzhJFp6s68dVfVUQCK",
  "key37": "24Vr3f3cZgJ7cV6qKR4dX6gZUUBjX4VkRUCQRHrm5X2nwAtB3NPeAWqXDXQ5t1bXxR1ziTJJ2cWVZybgxfVcgvq1",
  "key38": "gone5VVF9yzJKxTEKK3rSW8h5E87CfqoDixqMZ8DYpWX83DjDbDCzAn4MPRjDCzR1YDmNXCjLBZ19YJNVXNQmTk",
  "key39": "zvdYeLu7NeYkV4gFicFyuPXfV3Yfy5FLAa2THmLp4PyGRfkqCMS2Jr2EtABFJtDaM32dAgXp7B3qC1iY3KmcRbj",
  "key40": "W4a9nS61V6AoJgq2LtC4C4Mw2Btwdym2V5DXaVfJgNVgvsAiY2yF9X47ccHd3xB9GsT1T7BKTEzYhZQ1aME9m3m",
  "key41": "4je8KSJrZLY9Xe9ezb41MZmGw1gcnsELkRcgZwbfHjKLtfm9y7gQJW2ufoDW92yBWAqy5RuGyiTnLKxuH3epkQ6P"
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
