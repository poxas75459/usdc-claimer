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
    "3yUw2iw3pB3qvKiaTiYiA8x9kJTELEDVk6286hz24PDzX7BHNnLSn38CncdaqqkK14UK1yiZepe1ss7xYv8WR5X6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7bke8jaDwrBp3iMFPsJcfhfAqC1TjBKTMWF5Esr7ZAvG8dgYFeTQeDFNgWJzKkKhHZes7biqLAUaG5JVPWUKeK1",
  "key1": "5MEcmBqxn997GASocMcQi8JPA7x3DiWsur7uXxnwWJYr9G2ff3pmfhBgBzi66Mi9xfAHV1VGPtxYQA4gqmYKZiSQ",
  "key2": "2Qj6zqG9tFeRLhKMy9qxDnjUGNJ7we1uTDKdYsP57VUpKdiFr36vboQ3AKmWAN6N82sW9xmFfxCYyB2aMDo4tm3D",
  "key3": "oz7iUtneSqRhbQLE78Ri9sMEXP1uocUrPW8X4pB793VmsfzCeLhuPgQLB7tPRA3jSwEuBr5GPRKgPZLeUqoActC",
  "key4": "4S5k6RCd8CeBdU773vQSyANcKFLbeWtpC2Kf32yQZxfyoAApMQsuvnoZdxDSQy5KbhiWzto9V9VBqnxAT9cwSxfE",
  "key5": "2XXu3DXB1tQ7h9EKKjBybjTJHi5EyMhmvknwLopR1Mq1YpKgq5kgahHacGFbo35sLrm2pizMNWNiwG8dM9RutRLM",
  "key6": "NsuwJoNG2tGqrZFzo2JYzBBVp7xrVyXxcm8MKan4ZJ9bmQdPpNfRX4ykhi9yJhmPdcmY4pFRNZsYaNP8cp8saCc",
  "key7": "2dsR3Zx9i8QrJ1micqPsQ3qMR4poSZhwkkD8hE6tPWftv3o4Ze6c1yD3CTeHD8WvTRXadL61AXBq7gsxjhxZQAo8",
  "key8": "4zhS8HDBuam11uvu739kzpPWvrwPFRMURd6JkwE5UV1vf1kE4V5bFfnNSNJChAhFXJnciuKzEc6LseUL3NUygHea",
  "key9": "2e1XkPFgMxLUHHfC5PhRcqaH74wMSNhhszvmNkFNoDrLDVLJro8qukfYRxxbZZswnoVTn5HLUfjP4Vgs6xzod5HH",
  "key10": "3FWA424ejcCSFZekVXYemvoq69bpxx8qTygW13DoD27Qzc4BbgFdWf9aVNx9DmLca4RL9ZT95jE4zMedZkkhicK4",
  "key11": "q5AKQd7FW6iHQrxpfdueVKY8fxs7RK6eZk3cUL8LQpUoRefugRCbTQS42pV62MgC9Zhp5XWUZR41eGjqd8qYEKu",
  "key12": "66pxPziqfrn22UfHBym9XJGfQADetLQPdjuEnws7Xug8nCj2EsFsvR1imubqq8KhKJ57FYPiPrFtV3f8mxVK3FXL",
  "key13": "2xQhoF3BuEmLyexsH1ZA3zhSzRtgoqSuHGk1vnMGE3BGqpJKq8RNAsY38W45WAizMjuTEtFNsDGRwUgZ3PxCeviV",
  "key14": "45AHaRJei3VGF51ZgAHn9fG6iMw52iUUdr6bu993cuwdYf2p2V7Rr3581sqCSomvX5ecDFwGVqz5KNjYgjgbFdnZ",
  "key15": "5PoPakCeXpT5uyBDfcR9VSkxpWjmXJqmBgkrBb8NH49tGfEw2FdhwFCW125BnDwEPy9dmGxQKLpkyaYBreuV1hQW",
  "key16": "2uXcbwNLNvaPF3yUaGrhVytfuinpLaq5zGYsue1PqgbYiTz61qPcgotJu4NxabxvFwWyftpEKJL37UM2sSjvusQu",
  "key17": "3pxLrWDCvUHYXt3YDbTBdYH8Xt7f7FcDEPUeRNiMg7kzCMjcdxrzvNdQTGc8Dv22bWXquMCoewbppUkQCt1eziEF",
  "key18": "2nymq6m4pDrWtxKGyh7TYq7n3fYue3ryrm3iEPPtmEiXrFVyf9ykJBaDouMtWwNwVZghshVhWyN6UHcVyyeLMxH9",
  "key19": "hYfR49aMQWTH1qA2VKNd548KnZE4YLFKp3UpnuP5z3xBGpZhtTz9crwgRc2yyEEeoxVBjoGH9NzKYGe7csF5Uix",
  "key20": "2nZcU8XVp4q1HcuJzkZZVtVAosTN9X4s8hTpwMg6chKXjnNCwQ6b89ApKLuGmDg8fNkKjCH5CAxiNU3nvUeucKKT",
  "key21": "3gxGpsPPv4fySQfFLi8M5S5YAqSr7syJDLHMi3RGjKLLbMC8TNaRns8XxNWkF4uczfHhM4T6Sx7haaP3d2oSn4XN",
  "key22": "4coP2wLJTW7Gs6JY8rG8d7UX3Qp4KzYAgVwrFKb6fcjVRt31DkEPmuDq1UzdaXWggDNXVDM5PUdoBZyFx6LYG1C3",
  "key23": "4BJWxsJAodfzq6e7f8Byn7tM8K7QR1dn7vhb1ujNKyvWfbn2DN8xTqjL1NZqJZBB47xCpNbJ7k4C3Jrxk3dCUHKa",
  "key24": "3htfH61jj2FNuv9ZGSgJcEv29Mn29smVs1vCBR2e4vBCQcGFdW5dittBgJyfDBT9Ga3Ky1gJRZAexBuN5oXdYzQ2",
  "key25": "5TBfgpWPtTbudBYGNpUJEyFjpLKF15w6oKA5Bb3xP97MLwbSACqfDmVKeYPqibPCYtoDsejA5WepZeYmHGpZUvaW",
  "key26": "58YiXuhFtqYPjwSNWip3nFVmyqewNKDxX4q5y1CPisohLkiKqeebYRpFcLnR9Dh6fna5kgad4mvgcg9W8awte7Je",
  "key27": "4r3eaHYH6KyVsqLkMTWYaV6wzAopStxB7GUadNsZzroLpnT3sVJARmjfLq2y7EctJbbzeqmAyTJneSDn2g4i5586",
  "key28": "2bmN23nDoxQ6SXKEhbyRSs7XTYeb5BztfjpwhhJ7iiPbKgLg1PiKZZ2pL7zVqMx7WqX8aaLqZZ5UMQ18UrcigPwQ",
  "key29": "Z9AKX9cdumiuWnr4HCs5RpjX5tvhNcFLx8tmKJyTnzzYahLonsEEbqcwURMekTAEQAEzQXtri14T1jxgm9QtVD7",
  "key30": "4NrNiEV2GkG9icyQVaLDJxPNbXV4QaeSFrLCcqpKA3vRAudxzwCdriu9cMQxTsGY6DYRMrjxh2NhrJ3iYEyjqsBc",
  "key31": "2huW7You8s4qxX4dszFMzf5F6JSswTXLeDVRRk1EAX3zrxGJpknakwsnWfybhZ1ZsEPaZ3Gw7msSf4ZBWsjNap8A",
  "key32": "3E7c7y348b8MyvTUXVcBGB2W518gqtG5dyzC57UD9NGYhSjgCCbZd2c46vmC8F3LnMKoerf13AGLViJHnnR9kMfD",
  "key33": "4wopfwAvNAHZiNPz1tAdhNJnt1vNJpk9y5iHDzByxitDBRgF9asUrkw9ARZx9hbwARUjZuVGWyxNuU3u6RyF12UJ",
  "key34": "4g3sLZFS5QX5P5fbZmGWsbkeG1utc1SkYREFREjEujCGeUNzS39gY3qPb9rmL84JcBXgwr6aXezGiX8tyVPEo19X",
  "key35": "2wm8wmHSg93C4zhwSPoyqX89E7tAii4TCx5tucFh3uDWQnagY3ayq8uR1NyWabPeJ8Jf7d2i7wHZ9Gw4bKf95m9h",
  "key36": "4UEg3hCX55EWMurstJ4ZUnFGmgb2b9bNrCHEwqMkfVpY8C3o8KaLjoGVTQzNrgkZTwTQtZnEG2xpVmNGmKQbuveR",
  "key37": "2Njy1cBLr1TgxiekFztQwgPpnvhZLdVRkx8ay7UL4mCwu6PWuTQ2JxEdkcdMwygZYEguk37YoJ6LFYEZ9d6KrjnH",
  "key38": "q1juqCwrQ8ArREn3Jc9ikN2nVJM7Ds1mM2D53YgTPBXowkHBC7bnN493P5HGCLViVouqKQCNdyiWeZ3PyiisVhM",
  "key39": "2VraznWHNymQWQ5DyZmoXsvqNmgzug1Qy6pQWkQvQ7n3Tdr8UG9uPYQzwKptyyszyJrNyNYVeDiemjz6fe2d3rCR",
  "key40": "5yA2WxYfeM7RGoGEiFNY6VDba6BVd4LpQoQ8Tkfunm7nPz8c99fqJ9PnaGoe8YbiajMzmQxpKarEpEEN8Rkzg2Wo",
  "key41": "1mNVHT4RDWVQGQ5H66N4GnCT1auKE2CQcUnxm2WoAdaUxiJgWSYPDagNBL8qVPmZpbhUyW7StR6BS4GWKhq7qNQ",
  "key42": "56tG7XbtzgQ2m9ALZDKyQ7bLZEitn4UbAXJ7Wx4jgTSXzSWhMgtBJAUzQyQi4fDWQHD4DG12UCnT1b6CyMZ6q3KG",
  "key43": "3b7GiS4BbfQ7jbuetTr8MuoRW54aZE6wZhfJvMSJXzb5WQCsHVLmt9gjwTWSaSE11h2FpfnyMDfoXjH3gFsc5FAp"
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
