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
    "4K5FWJrvssamWknkAzhM1FTvRfiYmgg84cZFGPs8dwrf3hkTeWcseQhCUnGhx6ah5bwqJZPsxF6fHAZDixtgewPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i2bjpXesNFFYmrhtic75WrgUqnwfSztjEzX1fsbXVMdYu95DGuzbueVYrbDwEvnwF2W4S2hKdyLUxaA35uJmu7L",
  "key1": "4VkKzFTgMhptKkeGH6k5HKKLVSomnadfzewVLprfsi4M8A7Q9JLf286iC9f1q19HFoP3bYAwc74yQqi3Jhzu4SHK",
  "key2": "4MQabAvfyzfjndyzG8oUezEjYUi1Wp58kFosSEG985eRkcwX9XSVMZY5FMsrV2hkb5gsR7toFY4KjjEURsR3cGkd",
  "key3": "5CSqu7HJH6jr7uKvVY5vsFiyETcV6EG6WaybhFrMsCm7fRHS9psWzzVDaM8ifgMvScvcjd5H9Fb8QUT6J6AxSpps",
  "key4": "5V2N8wBTS3w9tAfVreqXay42iH9Fh5Zg1MBSBkG1hLno5FjknZGFa63kxkMan4zDETTkwT54uJtWHPmc23kYSD8S",
  "key5": "5BCUjSdvtPa5XPePuGJTYS9ZxCxE4J2xyeu15MMnPEBTrHSQLLS7MEatbvjvDF7eZYSq6uKAcwM952itTFaipCno",
  "key6": "5ALtGptF1vYhLdkjKBsjrWHFgtqfacKMFA673Nfr8xZgeuQh3EVp6Vk77nHCx7vqFg26K7UymKPWnJBgR3a2JrQX",
  "key7": "3DvS7Jh5SEwUVvmfo2J6SvPzAPMjDT6HVN3ME64XPWWz2cgNqbjpRF4mN3m1smaYaG3Y3k7UgKueWbmWQHeXiDfz",
  "key8": "4wwFncSWNrPbyAfg5o8kNScW1ijiBjts69DpMNw5Q1WfkEXPCjrs7cm4WtQCQRp5kUx3tPE2JZKwexXtmoWYGwqe",
  "key9": "2vPjkmboUV2xsMn9FwKsTSWMz1brzcJ5HJrAwn7Gwv3sJBLdTKbbPAgxxkypE5LM1JiTtXi6DcZSCM3Y7FshsBVt",
  "key10": "53ckYDMqdkJiE5A15cPtJqSNyTGjLAGcLaTaqMjgR4sN2Si6HibzrNyCR6G5xdnvb5KYqQo4591JKtnQyutqrBxC",
  "key11": "4YsJEeZCCrr9WCQY1pF2XT8zGnbVBx2ZTaMWuYoxjgnVgQDzJaKjqpj32HHSQjjuNyjUzPvAQBqTGMVr5xxsWe6i",
  "key12": "6j673nMChBj7kZgZPe9J2pMjpaHd6PeMmEKgGbtu4nnC3ge1NSSuSMxaqVc1CSXZCcwpHBYydbE3qtoJdsR3hVa",
  "key13": "3ABTrybULuMACJRUu8cpSCtFUCsmuysaPK41vyVs762opQpL3hgo9eybgvTaRmc3GjwqoE4jnTMg46HTu7kjAts4",
  "key14": "4fRMe8fmNi9sTg1fkp4v5hQnbjJhCyd2Cbb8rUjuXcVWt9AR5riAEEh5AYZKxGimg6yMoSTpo7uZ8ePKKQYraDRk",
  "key15": "4Di4Z4kzmukYP2LP9B2oKdjjo4XyZ1pNFCx9iJfyVfwSnYsHQxBASbtRBPHy373JnuZ8LZzNW538ge2YGCfoxJRo",
  "key16": "42d7zyz5a5erNJNc5TAKmRhD52cLbxyphef9jpMB5aeLzqfAd4kVaPDtrdeWjek6VaPEQ9EFXUZMw2hJ1fF6aqEt",
  "key17": "5KsaMRwzuNtZVZSUu9X7ioDEepAnr48MkNKjFdBbE5oMrp4bmNvGjUmXCHecwXbtFCcdqiTnvPdnSJHCasdHLE2n",
  "key18": "2Ans7xxNTc4FUcFBkCUyTpQL4VKtBwmbhb8BxiCpCtSUb4PwCYgSEFcjXvhL4y3FWpUYVKrbtndhZU9HhchY9MJP",
  "key19": "4mpC1dT9cF8hmkBMYLQmYpUfyhAsMunV9rpnySJhZoHWaiQgwDaaHLa1JGGrqTb69RNEYvWnBhA5PAZkyw1TD4Qp",
  "key20": "243c7qkMFpHtd7T8cytc2BUCh5BdjzczG9d8BnNy9YnzfEnDRJ9JLti9bqpmrjCptdK49ftjwfxyEMVaps7nCZHa",
  "key21": "3UqhBS1f9JvL8woxdN5rspCFLakKMoV4KKseQXbop1ZfPd8CdZW3eqEP335FTQA9vzZM579a5KvQzX5TgWjSVaYE",
  "key22": "5gDMGr2hc97549wHTTuitdMZ3ALDZqjYMVAW3UFNDL2n6PaojMvE9Rjcb3SLk9oA9me7BEXJueS9W1dzG4FYmpyu",
  "key23": "2cHHAUjyCUKMRVnfqdMfUmmFFdtvDsAawuWw329GaoudFSPzyUhVtusp2HLsxbo1pmMFyeNb1DVSb68LoqHDutvU",
  "key24": "SLz5zMizLwbN8PJZXXt76nTB2F1Kb5i5hYKiKPXeXxwjyVQVgCwcBuDhjAyXMfA1AFHQHaZ85sRNPMY37uaAkGP",
  "key25": "4qgX9wu68f2jLYBW5kdMSttL5MQi3ARV5srtr3hQC59nbyP1XShBcc3L1zKtCGb6AkxJLWk1qQrQsE1Xcaz6ZwY2",
  "key26": "3m1vjH69tD1kJcxquQbszYgCKsrpWiPoWpU3sJGaGeRM6tgUQsnjdHeL68NMcxD7vPuhHfnhkMGzJQDSKaNBWPNc",
  "key27": "3K1nL1Jh2buh1isYWoQS7hiDgkTaVbL95QUFpjomgyR91AuXwoG3naj14ctvAUFpDiDCnXM8cCmEd2V6Xg7vE276",
  "key28": "36rrmAq3bj1dUSHbiur68qgFcRVwwbEZo31CXYwTHYjP3thg9HXFAthiFGkWF5eBq8b8g1w9f8DBxdoDLmSjLkXs",
  "key29": "2oUjYBPHhNJYRgXmJyd5hEWjFgFTBQNHQofEY6526JR8vrQwNPsBymJPDkxyDQWfDX7GtoVbQe6ANiZaezWLBroK",
  "key30": "5YCdRa5gnSE47aw8Vh1CYDXDLbcB9R6JYJcsxGK8v4rQmy94aUfKz2YC2Uk3mboTR2jZ3CF12f9csjr1VmMTppJt",
  "key31": "2tB2T1kBVqqrXoM7BwoucuDvzovxCvLdygdcmh6LDz3xAtWEigGbcoXnQcXZA2oFzpoSq9fvBevR5hFtFvCWJYG8",
  "key32": "31uZAaUM7hYW3cMLmUrN6RGMQznYC4JUpeLz5xfDLbJsBYsZoMNqhunsQZZdqZgYddXMwHws9Z46SFtqqwQAxxXf"
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
