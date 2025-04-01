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
    "35Z8VQBKakXNzv1bPAxvavvPF5NnbCnK8gJH8C5Sfst7FQZhzPQJSTcsTAq5ryqdbrXjiKG2gM5c364aZ7mSGoFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46DeSticGQJgRnCjBWDKtW82SC2W4d2bgYznSi6ccHErAmva7ErFg1dXbLAM9UzVNB29yFZuG3U8o66De7qEqxwW",
  "key1": "4zgPD1RTbSe543Kno3dRAF11DPUda4CEp2povAsLJ9q52Qrn3AZpbeAwBGmcL1mD7tpa7JoE5EkPWPCtHGZZfdM",
  "key2": "xJRCVk4W3CopmBnzRmgDAEYj4A93f12toZjt8aUF9wpNc4gTRhhBDo5Vy57XJv26RPxGin5Z8VR156kmGA3nvsS",
  "key3": "3UagMsi72Hr7BDjoxLUWm48eJmBkziLWNS9kuJQG8mkzRtCWDsd8srke8S8YshtLG8tFaD4Vfuim8Tdc18tjoEBE",
  "key4": "5hNXVNrh19EGEfLTFBR5T8f5HBnNX3AmrLTzCH5bri31AkEAoubs8zMqnLPL6MyQ21TExWH1NMuAn1KMQwKAFR2r",
  "key5": "FZgZPcW1X6CYmf63c44sE7ewPt9S7Mt4fPTfrtTW25Ef883niKHzNJBDXdj1vf4nhhdHpTCsmB4MrbwpF1Xj3dF",
  "key6": "5Q3N7XD9MtwMUFXTPhci2xfgPdJgeg2nvhRnbpFGbYGbo5PuVNgNWN8xmc4adryquuvJbTMSPFNr3yvKCX3cCYRC",
  "key7": "2STQkvBCEEJcZFi6Q6u6qDsniNk72yNvFbtnpxRJGcvwN2ZT515SKHGbpTRhyYQ9CspRJLavf2Ch2X7sRe32AvTF",
  "key8": "2BYCsAxed4qCoZ5CNWuTLPi5er85nzLxziQKxPhD8BFW29ERy8eTCp14GwN1mTFSr1hhuV2pcLNnEhu6ii3NTyrw",
  "key9": "m2k8XkrZmHzZ95unBFxSDEmqGpgYYCVcV4MdoBeEpS8iy4TSfMoAcTY7fmkbtmNvoPt14bJXY5mZ2y1i4Yy6hGY",
  "key10": "2jbKojjyGJCMDfXgkVZvc1Laf2nQwXWXPUBo5R7ethHKnXZJkrrSNwwtQsvcx9Bh6V2PGErVDsXR49cczX8ygZfe",
  "key11": "2PSa7b8mGYewv5sY4T3d8iy8sLNPs2yJX9nyFhTvBVueh1Po3FahnsLtnoE5WiumCPMX3YnMzhHM91xxEiwJhWUX",
  "key12": "3ztQwwvbrdhvi9942VU3ZhQhxFgwyaAwnHtzPCLb8cboQ2NhvFj2QLrr1UvjiftPkqiA5Dc8gvrTJXCwHzEFsrsq",
  "key13": "44CJz9DzF6NwyjamJLLnN1wnkfasK3gTWG4yezfQRVBHgkSdw3f1KpvAkYtUErYXe4Ds8KqJAQbhSrJ2rEeSKKwb",
  "key14": "Je3C5NzBbeZ6EVKtbtamGaiLoZEeY64b2S7gTXL967u362jXrhucTL2343qG373gtd4dKwSmLqVHtY72fFXCYVf",
  "key15": "2jLUbxCShFpPhay5ZvKJACT2FdEY3YEvntFYWpo7MB7CLUBrxhV9BN6L7zCSNVERAxCVuoZyq6tzi9NnbsEHYan2",
  "key16": "8cnGWgH3YYoQLZoDYEQtv8tcsjuZHEFPtyA2wB3wWntJHv37VtpfqBYXBQL5yCfTqYQYzVhFhNdcawiPn5QMVWt",
  "key17": "2uvuDZAXQ31gksobnb1Jeej91zMiDQ5ewPyF1Cz49SvzKyRDfv6raiHF3VA7Ldk8aXMjB8Yad2Xa49qvWduyxqwP",
  "key18": "5Zp3ngSWjR7wSaPLTiRpfXygtKCZPjs9nwabYu3JiRQfL8AqnUYKHrXwneMN6JamM35stAjWbhLKvCbwNueNRSFU",
  "key19": "Dw9RDq9PkMva2pG7XFdnaAARR8sn6JmCBUp5af5LKaPp81r895q1rhkGrVEpfVfrv3tduQmJhexCQv5AQ24hf89",
  "key20": "mqSZNzfaE1R3nbZdT8XnkSXrXNhXczGAhtpeCAsU9erBgFhMLnd5Cd8yvuXCZcuqZ8TtaLArKtrtbffENCLhAwc",
  "key21": "4XjuvY9khV7npUyM1sjnpvHQznA7vAM4hmoNuYtQEhbT4pQQ1iiA8QkRZuQDtAhNmr7abudEirj6vH85R2EsJ33M",
  "key22": "2A4ygRNQtQbLHbRsv8QvqG49XZUwUrTRmWvJoQ4x5yvwfFtKJD76KuDQeY8VSoTZaAcptCR5RXoQ7RCmZeCj3D75",
  "key23": "529rpV3QQQzGMvbmLuULsNqDNjVNdQHiPh61K6BuG5ocm2hMHYHMaQ6ELgbokv4jjJyq6cfdbC4SxpuBoyi1Zu3H",
  "key24": "3YVMTfMEkV9JaymSdtXVDk31qZDmuK3rfsXQq3Yd6U4fTYWcst7B1ukE2Rj1rK8P7JmnVtk2taWEJKGeHaykfkPY",
  "key25": "4ZD27m1P3BVEV3pgucdMw4KKA6wmJS4BGxxXW8WyePMGnSE99YDgm6teGiYokt14UKGH8STwtppFRmAWR3W4rNQD",
  "key26": "XTLB6umvVo6aTdmzzvkEAfvuSKLnWHV4fPaKvDNYNpVJyhYMCDzHqiQPA9q2qmkJ47UJnDbzNAh1jS7codArpHt",
  "key27": "HMNMbzDDi4LiUThrtX9gsB2cNcQCeinPjVRFSkYkvb5LYE8h7q8Eph6e38Ef9Vv4b3e7U24fnAQyjJk6CgksVJY",
  "key28": "5ATQ1NXNxjQ8oGoFko5s7sj9sQa8pbAEHAFgCUT7h9TGknZNXs3y9JL4UixC63CXQExFm9XozoX1nAXymcYPNHYU",
  "key29": "3iwDTrV1cNEM3FSR4QoAdW6n1GRM276X8FrXTCHumLG1AP3D5TGXS1qKUjkzB7G4K5CtMQYsiwALdaYRYcrWXqGj",
  "key30": "38PG9V9LnDjdpkpRvV184SWQAP3XF3to22TQnvkZT6Dgj9Zi5pdruE6U9pzBcZrrRM35iqgZ8biYDwqvFHicaCd4",
  "key31": "2qPe6T4pFo3ofQJFmd5K1cXFWom29mor8XP37cXBVYULEzNC5eMWfqnkbtZUqkY9V5cEg6gTwzQyaEvmJefzKEJN",
  "key32": "5Syt1Zv8NP2jw5UUsyBPEcuDvwAB4PVo4e4GPzcgiWCARJBqny1532JoB3QsQcKrrXEaoEB7Ho75cruftALJYHjy",
  "key33": "5nYySubbVjZQ3brJAHmv9pE3EpSWCMgijxiGnDsrTTQPEtT9bgnrppAL1xqmb8rMpzhtQCNBzRVse73wwJV8Vxm9",
  "key34": "3vDuwjZrvQ3Jv1Frn3d15HSfdA6f8QeE3Tffu4HJTxvuRwVPq2HhTWDSDuofaTEV6PGvaGDikVxSahfWtHh6vMAN"
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
