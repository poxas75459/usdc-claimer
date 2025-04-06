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
    "sH2HMFQpQsywXkAhv6Tz7QKRgBwyPkrd12uNSGrt6iB1qErH4jpU9n8gKaM1qN1yhA6grdypbUJSLHdpZdQHMSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FeVB9yYPNcUNyTp4SkMVZSs3Ks3wr4BzBav9T2wbjvSZ4UcEKCHEAHVrXfUM8JZr1nvZ4JPCPNzwfUczgbYPTPd",
  "key1": "2Td3PrrQFC3p8chJqbqxheqfJXFwyWVsWvcT6XzALQqoKKTdfVGGBCQucB6a1yUHyLv4XEv6P9C1rJAajaYZTiRj",
  "key2": "2GGCP68XJdjrJVmzfSiEa4NqDHVUiv4xbx1kD2PESpj6kGpqg833PsuLs3jH8YUgHSBpFmbs9hyrsJjHwAGmPnka",
  "key3": "4JaejqRNH5CAT4MDNgjMnAQ5svbCvepG2wyyfzDiLNhcdtR2ymg8UtKXLsrgTsyrG5j4KmsneFZSxaCKxhfS2tHr",
  "key4": "59a3GeX7ZWaqfHHtixVpQBfL4cqM1ZxVNHhkZC92qA7DvNnXo6sC4snEmDZx9Mf7UYrK7SMub3C59BhFZ2eXaBsQ",
  "key5": "5x4M2uMPeDUD6Zu7XhYZvEckiPReNnH38gHi6Sx9UHWjJurN4zc2u5YrK6S24XPA3awToczuU3FJmGoXuEbjBuPC",
  "key6": "3CPcLTpdG7juYxLvYTRodv9nnteLhgTZhviFxmSYtbEDJsNs8o6T4PRgwiCELYwR8CG61rXxu43yoTHBggyRcsvN",
  "key7": "4DBTvw7VWAu39Ax6t6qLYB6d9LAAMAG9zZwvRcYc4FjpN9Vov9mFxgCyYfAar18vG3n9EM4RoQ64xAYJkda6wiAN",
  "key8": "2dsHmQgJVev215P3g16hLxuzt7mSHp5ouditoPwxTR36LdXdekPhMyhQ82BdRXcTADPjv3nQyBGKy7Q7bWtcKiKE",
  "key9": "PqFoDA8UPtqxZVjfjj8yZeBUUeKaaTLATvujLPa4sgnE9JHNZKHZGDX9WHKJqDRmXfYMoUmrFvBRepGDEkzHxvJ",
  "key10": "42YqqWCMmvrHVuW29uGHXccVtiWC2jHDvm4xMfumXAR8Kri8dQKMfqfwTRbGmGE9zXpHjpCDWKdBBjcVM2PduKKF",
  "key11": "2wVKYXC8bJ2Fn3SG5w857wttJcxeqDTqh2VRMpg3dNfn99DeKbGcjJkikHSerVfwo3Bbuszo77CG5KnZEtgbxu86",
  "key12": "5gA7W18RLfk59mrjE67QhbVsLkQV1RvHkNHa4CAVrsKrTMsn5Lu58QZMeEqXogtj9xVNzj7kxzUjr1HJnwtQnWKB",
  "key13": "3sxh5CvwpfEvXoh2Mu3xu92UgNvQ8CamuLduMddVhLqMy8334W5kNCBMNwpTo3SciTiKJNrF44Pf36bXk2aTW3VX",
  "key14": "2VSSfX2jHx6egXJg3zU4Y1BXoY4NPmpkGLSusH2rGmaPPQ4VDG2wAVnGNG3ENXr7T55dvy1WX1C6B6CDaheyqzqR",
  "key15": "4pE7sSwMqx61nAEiXAC5dpb8iHoeTTVc2CX8EE8s7Psa8SGFSE8iqddZ74VBqRu4WBSz26CQXj5LKyM69R3NEEFm",
  "key16": "K8eBuKcjeKoJJz89c2HbeHkq3ximweBf83s2dBeeMihiQA8cd5kFA8sQqT66hp3FHqvYqJAmKKnRXzrmKdySqzz",
  "key17": "3Gm3U1Tn4sX9BiBkq5NsHGqTiTB1GopxVZQ5AjYfLiEgKi9oALa4NnJRTrdUYZKfvpD5CZ7msQcMv2S5gh1Cji2e",
  "key18": "3TzW8gfYBuDVYHQS5gjaCKkApxfvZArsuUwR6Esx4xEYxUNnNvPinpmbPFpd2owGzJ9cct3t8w5scJQqZtuaPJCi",
  "key19": "64wuR7RJnMkCeRJKg2XpHFXFTVsjyEPxQNu1AfxFd7goTuLY73bGXFgJUootSbp8ruEzctWDiKcn6u4LPciDWDVt",
  "key20": "2E3gVjfzFXnbqCVvKPEi63i1FseMKtNp8pZPo4FanHkvMZQD6WC96a51jrTiGgcSdHTsn1dChdQdhwCwNYqF1pNd",
  "key21": "KexmbhdcfHGq7teQ4ov3cxHmRGKNDyZJg4Gsy6QKCSoP7nhtRHx9UjRThUor2WgbhXXZuxQy2DyxYHeXbopp6qN",
  "key22": "339RhRvfGTFLMBnDVbtnnU5i64Fe81Gsd8khZEexd58K384S2ypcKgGkQ4XH9ryD8eMPYrmLwPdkoUNnXVGpBwNQ",
  "key23": "5M4UDy8AS7t6X75TmwSGxW2j9txMprZ3eVHNcrT5nr49UJoPGSbbtDW9y4FWXcgN9SD2XSSLqYMtKhBFqRLpDKuh",
  "key24": "KDLYMJUWSF5Enw5CLKZVmuVXsLRiSczqiyz8e3aBVE6HLb3WZJF1hTqZuyYqGTfkkvxKjLF1sSMgdmnWZcQLw3M",
  "key25": "5zwbnPZ4iKqbqcCLPP8UTULhPj71uKuyynSCmN7GmWzw6BKvVjYBbXSE9fTqRJDLTuWDX45VnyQSN6BWFMkqYf2X",
  "key26": "w54tA7ZpbHPjHtRW9veKXa4nQLw5GYmzP1PdVed6aqAXtEJ1GGz3zbq53pm4BFdcVvNcsGXKtuLiFPhppfj8YYN",
  "key27": "4bFTfEEo5oWJPsaPkDZTEDwzzEGggMR3rntiaHBUe43T3WhANLhgvH9Ye7bkCnWX8muE2aFCGXJPtMHbiRtUkbbs",
  "key28": "2iafe95si3yDBmLPak4A2npWTzyJC3bGyHmA6bbokZrV7YnuKo8ADpPPRoXpre5wtMMZgN9HLq6AxeSqro5Y6DpV",
  "key29": "2ogLTXKNCq5fpMEas872jes26aUiiQCQgCK2MAz49mGi1miVQbHmvzqciDuU9R8kf5jvFfuoDQ7JXKqy4CqXsvgx",
  "key30": "3rLZPBaroLbFmkGCFb2TTwSGChmGCBRM8fjyFeduUW9TVpsy3Kbjhx4HmMoWyZMeu5RMRGkyEcDSFkcxBCrP2hzH",
  "key31": "SBp82XiT2rWLAimDvounBft7DwUyxbb4KpFrTYG92PEouQ5Uyqej4ZCQ2WoGTbsJS2nw5N6KvTqtzQmfZHWBLNJ",
  "key32": "5iYQYdwindQq6uqDYisb9tZwc1zCzmUCAEQK6Dzj6KhhqxJSge4yXXg545ozpZK3v9xL6MvMtXgkaJARjv6BCGTs",
  "key33": "5NZ3ycRykuLsE9ZYoUv59uBHD7jxbpi6Dq9hmQgMP5mE3p5J8CDG8uhafSbjbigaHfGmkTbWVum9GvkPW9PhxsCS",
  "key34": "5pw2sFaqrz5sHFDoKPp3GWiwiHB9Hk5N7dJVjpUYSCwYDBxhEGQcwrFCNBF6fy4CuyqiHaiQvQ47efKVrEaahJAV"
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
