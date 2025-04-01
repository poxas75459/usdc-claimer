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
    "2GT5hBZeGYQgV6f6gjsEfx6z5x4ybKHmSvxqddcwSLap1jbpL8NMDQy7aqrBnQgCtVsSJJGJSUEJLvhhv4S5xoPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHUJ9MiYykyJ3f3pbdnoegUzPLKrzoYRBfpsKbE75Av69GMvyvz3wQrmi5sq5ZPF2WsgEHETZGdW9Z6Bd7hd64y",
  "key1": "4hQUcmxQ31pL4aNN3h4vFfG8kZduTfhQau8cHXXpF7q9h2gp3Sy7x3Jv216AFHysAwJRBUzhAEX4NayVNgxuCTYi",
  "key2": "5KDjtJCzm8PEvsBaCNiZACVVebBDPgzyTaHPbgz4WJqgVbf6VcwZqAtEQaS8G5koj2nt41UhAFgVgyUMrWBLxyfu",
  "key3": "2CarS7KyKjQg5rGRu6jLYXdvLumfoXxzQm6KDqssVgufqa9Vo9ruHRkAAt2dQXyNM4H8WRL5Ehknz78GXktUQ2XQ",
  "key4": "47Ri95Y7JTnrdarYJCVFgbEWAgFhzccA9JSmaEtNH5oFgEznmgpzAz1pFrDqufmnSUDV2tqsibiHfBdB3QbSxSTh",
  "key5": "N3KJi5ketUzoqGjyHxrhpyVV1MGK4NmpKQ6Qt1RFWVdnpmQJMDK96CqwU83y7hD4UuyyuZzbSydgwipkdupKNe9",
  "key6": "5yuc3GqxccD6LRhoSXCEvczJRQXsES2NmiTMgjEiEAFznUGttNC5L2Rw1eodxA5qkGhioz2xGzUw7TaTXNkMonqy",
  "key7": "2VzefdzmUSEvimNUP8YG6VqjCjJbvpExVaVbwPRv93mPWCgBKEhkJ9pbadFTNPiibp4BskKRFAuV6HQZ55jiwBep",
  "key8": "56rgfTk48skCh15JtgD2rVpNtf3Dzs9moBhuiSSTkepBXZbztbht5LvLToeipoQsYpquwD4rH9i2V3ghXUVTb7Ut",
  "key9": "448Rbq8QPUzgZMJZZXdatR1m5GKQewVB5KQvf2WTqxohQsYhbSbGw5Txiss4FUyUD6fyehvS4oBFtbhLfwZpmzLK",
  "key10": "3oaaNDnq2LmkqiToND9CuwJkFEom9uLg5bBMa6p4eaSQngMxJ5zmjmogy2WrcyzRRoR4QeREiTFJZ3rDHdCiGcNT",
  "key11": "JosgfujMZZecD2qopsZUttN2Pk5gF1fSVM5jRA1hbE1pi8cWtVLwzcjRyZuLqSv9A8oiDU7hfidDons3t3CcR2s",
  "key12": "4A7GQrdiurCpvXQeRNAcBfRae57XQGCLr9CSCX3uk2TyFLk5VHgJPCm4HcTSLvARb2ve7Gt7icjXzW9esKyLdfSM",
  "key13": "67dkVbQ3m51EumR9Trn93xEABQFyShw4vZcG9tjyj7ejBKn9MR1Z2Wu1yvjZwyQdsuMvtA5z3ySwzDTcEvvTQyfr",
  "key14": "5Acac3nT8yCXm37FM9vkJMzYrRW59o9X4pFpZkXtb77Tbf3BrqYRqSoNxYTY5CauWiTjm4ix6YQZ6DJbD7x4c6tv",
  "key15": "3hBTRcRtY3G9GP8LqnvWVEdQXmJx3ex6bAyHDtDyfNnUZLDGtnJEkrfHsBRZ1BeonCaXd9rykQBsMBsj7Bouym7",
  "key16": "4unyHh9hWuizDJE6pc9VPJNaaG2WFisMZiKSAb8KKfTtsvKLUwGANmS8LqgBonZhCgbFyXRFH7pnncBtXVzfxA4q",
  "key17": "2dGYyNcjRZL3m5bhhMKZG6yZvdQmbf3tLWdt3cL5MV3mSpPZkRMSW5KNxQMALPjyBPGNTY5EUsfdDoUtS7BBNeqe",
  "key18": "5MbHMWFHcJs3xmGMSW6Nq65b87xRXCsZ7nc3brv5xQsGMDJPH5Ufp7vZ81NxQZ26SkUEYarHqV7Yu9pdCAtsPYXa",
  "key19": "4xyxaTxf6WQP8VQFRcUES5VGjG5EpogHPdygxusyrAskgTY2Qm86gzkPseEEyBVmSk7aNK7zJmJidkNvMCPNpGs6",
  "key20": "3xidakbeFxGx2T6cELkmutAgKwfCp45acgtoUZde2eDAnYDyLnbfknDsE7LKpXvmwscBV2cUc1kJvUBszTcTT7Pu",
  "key21": "5HA1zjn4F6hMGZybxYvDx8vTs6VtyuvQNhp5s1h96X9hSuWahEzmkPdxE8hzLQ5tWRVVEapjfXjeQRz5dPgBJLcQ",
  "key22": "39nA3kwst3buxvD17777A8NS5oXEoiaijf9BMgKAGeFL611FFWjRsPh32npuPwz8XZzc8RgcTwUafR4T8RWkap8h",
  "key23": "2E9T2zSMzxjy53wPU9U198ngHqBuqf1z76k7D92pvttpnNcFmEtoGnWwXEDiA9XTHJ9Xarb3jdjo1KcYKegncpgw",
  "key24": "2iZin7dNW8bv6BytaNznvQdrW2vpuAvrij9PPYRHCTdMrUa16qvnkHHPByw76NMVRph4D9NAxbf7jhBib9XZLhZk",
  "key25": "LJY9U7KaaCtLDPVFmDKYcWQ3EKyz3wYmxWk1mXQLDShx3He3ZRsPrBuXYXoDFhLykXxKuZr5pPZPUHT2fB1Z3dS",
  "key26": "2CemHgD9WRibxCEUMRpjREr6AbrXBrELhCyjJ7tPf869r6NnyaCYSZZyNCagQmreqxicoHZWuM5T8fktqF2SR1cc",
  "key27": "4Usw8gqXWxNin9KF9xmRt458XPpyQeZvtjuCedNnrZdaVsFULgtyznwzS7JAdnGdQNnoku732wiM31mSvStht83s",
  "key28": "2y4ahiRth9q9xEVWWXkUW1STPuB2KJXWPQ9NS1bnBGSb1rtH7svtgmeFh6MonYj3xCftwQZQgMY44q5Yuet6CSkA",
  "key29": "56CPUHZacvS1H4oigx48CFzrhXhFWvwsomwZBJySDgqhVz8mjUTjrsF8oQYmDJEa4jazpRjo6oX7egzbQBPNnxXB",
  "key30": "4sWHUEfqCKtM7AZUcPWRJ4QRUp2aGYT9uzqJf9VTxTwdL19fDrnvKHdg7mcPWVJa5PnQhvcENKqheVq1ZGz2XUjK",
  "key31": "CufTkBmfovFA75mAsAQBfXftqP4K2enyAPaAGVigpsw7YafNd5VFriDAw42mkbAXsMD7Ugh5s7iRwHDdixsptTB",
  "key32": "5JNRq7if6auoFx9mE3nCw21iz2sg3brZvxWZBEZsahDGvH3RKYFzWgLQD3FcvRLcJgxEsjuLiqLo2EitsA1DNmv3",
  "key33": "3PXgBTeifcEGTwwo1bAMZrkdqdhrbB7XBwy5ii3APXmwV3VtCBW1H2NZ7FLFm4p9ZdBoaboCckTFXuZ1vXt4qXp8",
  "key34": "4TkSfzhY2N8nhL3UZSNEgCsZJeoA4zhnFKPVfPZdft27Tk5EJZKz3BvKhpwRusw49okzGMCom2KDr26K7dfFBJR1",
  "key35": "AoxeND22NtaBb1fQ1Kp27YuE1T4jnkMePUbeidcCupaReqDuXDb61XFbAMC2BQdwk6zidapugPgHTw5JFLBMw1a",
  "key36": "51BcAZFw6yBTqdJx65YogRuTkZhFaeyLN1iNe1Hd1ti1mRdJfzTbQxYACrMxnFLEihT3i7p6r3s5Ue54N11YCRVM"
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
