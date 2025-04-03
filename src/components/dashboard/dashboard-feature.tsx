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
    "WXQoME9wTXnBU4ThUnc7ZLW7DzVAtfEypyiaKajSNVeZXDVtyUSqxPhSfLCpt5bVU2f39f14bRxKevfKLGHiMtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GJKW3uVFBD3mH9bCCVEJCtsxcf5QQJRPyYeod7dPf8FsxUXFPNoXy2owqV6mewAE2XohmPiDncBZ2hEoyQdMXwi",
  "key1": "3rPKb7QgRVq36ovNKfoCrxDbS3EuYGjVhCZ92T2oTrVM7KW2G3rfYYmBYHptzbMtjnbAA33F6QDDHqasv6mFHySp",
  "key2": "3JTth9BWKX5rixJD4DLUbTxsYShFwbvhLBFBXiNNrKVDtQXttbLVBw9UzUSSfJfr2GVH5QWbHsHhJpRbYEa4EWjR",
  "key3": "4Qn1zuuoReRWtk4253xqTkUFzfu1tUCoFo4Aw4YrgVGECja1ajjybWhjpcHymvjvdfFfJEYoCpiTSjMb76DTyGF6",
  "key4": "2M6Rf1jaLnkNhnbpssxYqJUqZRxToeXkRSGbNuAs8Y58cXxxr4SNYFBd88CRTDUevzFM73Lena55iWMNoJ5DZvsY",
  "key5": "135f34pkiKMicJPKFbqyBFrP6s643C9jZ71hxSVYHprwrLM5P9615qLK6f3xmeHXXhqSVsETrT7QUgoH8yNe6io",
  "key6": "2B734dRMBncM4NH3QLs3ecXY4T85yCpPn9Pz7xaLvyuSjgLeLQr3WbVp2pRoWnUxousHJ5a4eD22abZy9nHkkhNk",
  "key7": "5v4R5i6Ltjk5jTXJnVXqT8FGb1weqA669YWHAVKGVuP9R38XUgXxoY5Q7oPAjE4Nss74DR6bHvp1niTaqkpNxVcW",
  "key8": "FAQRG8RNnGo1rPSuZSgFMEG27nY4RcN7fNZVFVRCcx5WbqhakKviBUEDAE1xeQTXhBfhDVBcae6oTZbbXiU7U3R",
  "key9": "4yhepN7YuYGzJVb3qhYZzvgg8C8omDVugL94jwjE1hiMYEmsMGZXnPuyrp3gaS7GMzbsFJPbeqeRong7fAeGhJiH",
  "key10": "kZ1PZ9NdA32vVLWBjPnDdMQw49uMceapjxpvHqx7u1FksKx4DVZL2XMh4N6F75GTeToeXHmhBejCFxaaZpdXouR",
  "key11": "9U1euAGtc5UbcjfHz3XDVi3gTdJ5HZgE4LVHdiHUcCiPo28bDpuGEFqZPSVhKdoEemgfB4i1iUfrFiBAMfQttwZ",
  "key12": "3362Wz6BMPyCB2U47rYRvyeEE9U7GSy3mvnL5APYmH1Wm4AjAukwf6yzuHit2tEkR6vFA8ocoXS9xY648CZTvPh8",
  "key13": "oucRdYcRR9PaemA42H55zk2njDtr7mQ3uAY2puthBGCuEb75bwUtTRmKDhpbLH3KEGRY1yg6NegR1dKHFxCrDgD",
  "key14": "eCCauFdZUc5BXVTXMuw16AwkBgDmULqT9V5MhgBMUAoECvxDGVcCk8oBr6aXzi5ZtPK6VN9Qo2F9me1kfQ7kTMK",
  "key15": "nYKQ1XCWDzjPEbBCsQfav7EeRzoW2Y1ABvz621XtiHCgbKvmLLoa1Z8dVna2veCB9qGUFHx7ABmR723wMUReUic",
  "key16": "58fTJ4krP4cNYvcrnAmJ2VYELyuHM2WjrWtgiUxp56NLYKBf1dgTsCMeKbBxZox4AFWXK2gCGXznugn5tkzwDUuv",
  "key17": "4JDAqdPJ8SDn1TsiTYcDuWE4bdCLnQqKV9yzucytjo53PZPQKtzRECP6gJ1NmwPE5GdDfDWdWwbcuPBexHLNB9uQ",
  "key18": "F3FdgUqk2c3uZZ4vTWc66vUxFNtXVPSwWEQVbpu5tn3i1Lnws88o6BS5j3DSSFjhCK6gwNYHqn772kEyRwgFFBv",
  "key19": "296ow5Gt7EYE2PzrkhcmBD8eLTU7DtzbrBBHane2tHFD4X76revzB89d1nFMFgiQXxU77aRGZtoybcitxuErCgwe",
  "key20": "2erDcNq3YqYwAbHSRePjugT3ZeMLwg3TfeFcHwLkpN5yMEzbgTc8rD3td14K6JurgkpY1ez1ZEHADgjHrTmWCCE8",
  "key21": "51f6fQh69KeKTsMkBbJTaoPUZXHn4aapLJVcFogViNEmpjXTeX57qqjpP3mdEzmtgGXyLBwjApTCzc7Q9ttsLM8h",
  "key22": "2xjQWC2Y5pw43r5JQovnfYbLgC7t6ovEYWzDJy1tUt7k7JjbZiMbxdBUcxTWxAXndsPCFuUWZqq7CAEGx5SBnqMb",
  "key23": "462NL2T74spWdrYkwmyzQqaEiDScsHneagBsdNQqXMXPHkUHRTrXkJqvM6C6PwfrZtVGsFU8Pqn1oJnedtCueZEe",
  "key24": "4kdnabTBcWPwEXS7Ce4K4gsbmmUs3TN11v7wE1i8Wpmzf6kSGryS8PfNti27p21pFwUmDR7yjDjVbyw19RRjsg7Z",
  "key25": "5ZPh5Bteq6PAFkYwu6sQ8GumkkLiBNH9i6tGhHKpcPLaH56Yq5AGXAiuSUuPdbjTZRse1NyZGqyH4YD6GQJeAAyw",
  "key26": "4s1H7WE3E8JDXZyNhj2FNJZKKfTkrAmAAWRVab2Jh9E4NoYJHnQ8wwZvNgnsaaXjyU3Ywgk945jToQsjvNcoVFkb",
  "key27": "47es4tRnsnnhvHUs13mkxruEAHKhPw51eJ4iv2rYaiPNUe7eB35LD6kZJ4wiY7RPaKx7y1cyLSVLSRmD4YQkkbxe",
  "key28": "zr1tef5bfrKb3R56LA52PVDZbcC9u97v8kLHzCDDywgbyMi9RncVJxfajQnpc3eHe1qE8pfB1YyKHwXs7MdZtqn",
  "key29": "hq2SdDJYaA5Cc75Wj3EfEYrYuL1UmgrFxb5CwTvq4t9n8FqrwqjaDnvsQEFJcLVzNj1X8zw2YTcWLdq1Zt9PrYg",
  "key30": "5zh2ifYQKzWdDWWSPV5GFsUh7EwgCUt6XDD3TrBk1EU6gteifY9CD6CDNK5FzEssHMi4oPDtMos3UhajsEpjC43j",
  "key31": "FY6Ra7fbAiSNdNARgo4VSjLnAu574BdcqqWpHCeSMzLcW9BSbwi47pz8o54PpkyK2TgMPU7gFXmd7cPW46wWGUp",
  "key32": "C8fDetAWE7j1CfEe6H6bLfzNRoyeBsePZ4AgXvKnjFSChkSKmiFisvobehw3DpW9y5eiYDNk2ceMhkitJyt4Qox",
  "key33": "3nG6jmbbNwikScLCWdrgTVuQpREQXaEwsyMhWiLryP5QXWipK72FupoEACqaSoc3j3sadsfQypsME4QVrEf3Ki1J",
  "key34": "5kA2P8K1omcB8E3qf4YT7xWvbEd5hFoQpSyBoQzw6QZCNuwe8jhztnZQKqCkEkEabBZakkZWB3VoxDFDbgkcMUhg",
  "key35": "5jKdWsPtmZSvDGpFFbE3cujFEVcPiH6V6BeuUY1Fba6isf5JEAbCM9PFVpkExryoyynyW7VYavWDNjSehJBYxktB",
  "key36": "3ycS4SNr5oJpxRTv7y2UCK2LwG3hBwyM7RFwfUBMPefswTD1dpMvD9m2u6wPEEn3HqQromeJu7WinTod1qnyP7MJ",
  "key37": "49uB2AxcquF4PyYvifvZXw5BZV9Si8s2JMR3PNkFWkpoDvAdaQikRuQJHR4aPScHBhFjG7e7cmb9c5688QSUUo1E",
  "key38": "4gLkgevtgCxEXkndUmeDyxw7KRRSsN51bPeunDdHqqEMCMn38BLdJ6N6CVuCGqgir4Vh71YQTyKWjNhFRf6QjHSx"
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
