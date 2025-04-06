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
    "2pqZaDhA2aEFPWgYAZsSzxRLSjw9Nwwj93ykJpQFHTLLquyhZTpD1Jaz7YLGJcYc4ceB6wgeAt11ETM1XwvrpwmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x24WvYZhzimzhQMZL1KXTPZyiLfra7Wpo1zdhs6E5Grdr6Av7ivYYbrsQjuXAPdVSwDDczFhA2vstY9YCczju8a",
  "key1": "42bnKkMuVHExEbWyd3T7QEyvFqE8qPN99fU4wt1wsjrePfyU4yJ4DP5649rLwNTWiGdPYSBahjVcAJr7X4nZFD6Y",
  "key2": "5SVqw6eFkswmSfJbH6z35owqwJ5iBmcYN8q4BLwEBRKDphTqJ7giA8VMwQkSQQW9f23KYt8gePh9VRzHAx7gpq4a",
  "key3": "ryputkmatSHsXzY5rSwGksYbghFno2CE2vpamYtq5p53q3VGRmipbjjQS9KSPR7qmTeK3kiR2a7pNo386jSVjLQ",
  "key4": "dq2rYeUktpFWKLgd2fcurzEFTwdFJdQRc6MUaGyHMzVEDpdvF5UrRXQr9DNCDjpEaXKKdg5jfNqW2tSymXbTQd5",
  "key5": "HgxY1kgNT52edhLnwF7ybqiqNKy23aBkyoVQtxVZmWj1bgVpfoZXz1boDKhwJKXaitE1YgVBf2QsYB7iuqZUEUn",
  "key6": "56jMTHpyoHAWpTEcatnKmpFQFjZUCAgvrm2FcDXJZwDEccDwzJvG8aR4io4U2sAp4n2T37nSmQ4UCJfbeLFHRDiw",
  "key7": "2Kj2dSrxAfL3RBp1r7ugRavQEWADX2j1Ragw4uq4nhLQymf9V13QiYgvsVVHrRSNeEtEQVPYT9QR3wS5YNp4jHUb",
  "key8": "3jabRQexJr8DJFqMD83Nu7RgWBovWgZJRq3FDuvPJcHnpnUfnv7VUNBPeH84gN928nTVqh8jj6VtLRxN1mLysd4v",
  "key9": "2wZTyHYK92adJoJgKZEgW94XGnG26iaErMSgU3r3wYr4sm2wTfqNU3sy5ZLVL5kQ1J9DANiBdgWR4h3PAK6X76Uq",
  "key10": "2dk3BuuQm6tTYv2pefsBv3dHEKNVH8bYAJqdD1BLbTgrZv6nFGxoNsBwvWcmC2d7cYPBAeEEfqcfAgWKjbLWCWPe",
  "key11": "5j68UEGkAGzMJzckkeJmMcotbyfnoeLpSfUMuqhWjZoT86qhdu3eb26hdPSsc9PvKU6PWDDw5Mjp9yLs9pWyJPKh",
  "key12": "5V5ZCUsXNRfgtDK2wcmCbLi7jZvPdsXHGdumD9ZanwJC5Skf3xQekW8GzWyEsqAcxVZEwMNKSL5ABGXpHzNeZC1d",
  "key13": "4fjD7bw63kyaVVzp8swWB3GQmKfffLSAs3s8dTGWp8Gc1yWa6aUECQaaGKC3sbhisCSNqT8yC5jDrBB3YUKC8A9n",
  "key14": "MFvRrpf6cfG2Y9w2fUZxRcRgea2XqVCPH6uzcbAPBURABDUYzHKvfQptq33xZ1aLJtT31v9s4RQmxseNhFHRppA",
  "key15": "dD4jMAgtrsPHivvDEMJPWsyLNVMvzfjbdYkmScb9P7HFaEMv1hfuPiwijVGyAiTRGXQaYGr2WJP1wZ1HatSBp5y",
  "key16": "5df72GPfbQa2qB5Tch644gRLetTiDAedtNFjHAvvtBETXSuhYnJsJJQbZSThpUguHDpnPHqNjzcsYzyUBSfYhtLP",
  "key17": "5hWN6L5mLFxDMPwaJUsb4eRtTGy3mCCaKzSuatWbBdR5CjPEQmVNJV3KBuhiVRRKBnAxiJhQ2Bhp4GVErEGYSzmP",
  "key18": "2QUcFDAUfwQY69MenzZ58MdnHG8Sng97hdhWTvxjrEDrLveAXZjJ1XFLimsQykNE674E2cyWFyyUhve68ZNZaa5d",
  "key19": "5oTy5GybhnDJxZAmSmtdJKAA7gZBFB3yRK3F9iJS6UM6r56es2wUX3PND4cnwZXZLVDX26ZKtYzrEEVV9LHPehQf",
  "key20": "5bR5TfwJB3XKYboRahfv9Ax2Dr1mRV2eVCRs8STBTVGCXKfexnbWgY1hArbzkDzsoCF1ECXHmsnAFAPYG5NtViYn",
  "key21": "4fKZ18S2KpdqB4KuZJgCU83KskybhbW1LM6JtyEdpcQhLXL1rWMWUVEUB5XNQyqo5M1QSCU8UhdRMjeTjA86d2D4",
  "key22": "3FG8ChmBau5FAijKvfDa5nK6x3CVJxJFquJLH1LE7ge6JCcwga6LETNzdt4rguHCbZi7dXRRwUYRdR9Xa9USUW7c",
  "key23": "4v2GMjfarmLvjanV242iUajiP7FVJ794LaZJDnYNsHVuRrHmuvFJoR6vJjByFt43by9BLpe9eiUtQhvafn3eiXa4",
  "key24": "2nir4HjSTe3chsgvpxBsVQmxyFYzaVZwJVMDUqJpwNYQcU5BQYg6hKj85UFMEQvEgaMjY8MP8z9vJfbUTcbPuEyY",
  "key25": "3hZS2r1sEVB5rRatQQaRTMuiyueQ8G9VfNrJDWApkF8ByErP4BjDhkcoEysug5Zb57TDaokZmBf7eMQCjcB75Efg",
  "key26": "CABA5nhx9taSvhserWXfFj73DufGFXvdBoptanTLGRvFGM1J1H5Pcm9D5u65r9UPw87dYW3cHmoRjHFBpzzKGNf",
  "key27": "4D6kwFV6fmH3yJ7vwD9qWx2JJux9BPJmAYMY1K8nxAiWFTU3r5LFWNRMJoit5pjvHoRGgrf4kk98zUSKMDuv5f8Z",
  "key28": "37HBN98cmJnWCMTetuQKZVmZwFoRuK8p3GwseMVUUBqrB7cG8Zu8uGGuUXdTzexBq1LXjWXqGB943LWu16YAp3E2",
  "key29": "2XkonbrMdjCHWJ6YxdtQaEqmLMedcvNsGqdjLbdtyKc2tJJuYXGLYMmJce9SAvgTxfkKJF195cQvSEJegDgpF8sR",
  "key30": "uGvRsXY8afnFMrk3JbPxrybc4qMF1XQQ3UvUXC1QKfEphkaPHzKECEDQAhgX1X9pegJjngh9jmznX2LU4yWZWVP",
  "key31": "5YoHsbEEaCyzm2zRFzH9L1KhW4JTrpCn3uBWHCcf2jmhc5bkyCbMLumwEQzGwtu4kjfynapujrUZmnnBFvZGFeJf",
  "key32": "2RGB4PRjhnSoPVSWSNNxwhvXZXxh3cHGDyZYLPZuCmGbH24JqxtNt89ZPDHd1YvpazFtrxoLSosjMWWnJzm7YDrK",
  "key33": "3Y9ASoBzGjgxxS3rcVEqYSDmC25d4U7FT5AacsYxbM2hQpoA1H5CheEkAuupDQV2KWPy4JAg2W944D4He5btCqAw",
  "key34": "44T5RFQK7Uu2EKUfk4Gct7phHS7ByCCW7V6cQ5Cwc1YnUob7dYLzxXpFKXeD7Yj7wtsHEhdpk9qpUwZWkjGaW4bQ",
  "key35": "2TATfeWodvQtFCZbB4JtkNbYGaqPTiDvqfzkqLaLH55QBdWJMGNGCrNM5EzxxK9P8jkj1RgBhyDnknrYeZugunNe",
  "key36": "2dTt4BEvV2L5KEGiY3n9bYf5hGozM4mYZgiK3zBiTnLkx6R9bk2Egi9sf3r9GXyxtLvCVT6ZYc1nnKDSX1msq7VX",
  "key37": "YTuoUS8jTVfA1TwJpf9jxQeMsu7kohKT5J2wQAuWR39sbhrY8CGFPpjKedeYGpX7fi7BbyQY5JQFzTXFYse36hH",
  "key38": "3K9pP1qv1YvKwodAsr56vmpHxbRGrr4gvFUna2krz8W5YgxrsgUdPj4ZZzCBF4aU5RQeFzp8Y96WPYaXbem6EiXq",
  "key39": "4uE2hMmf7cBJajZtDpvi1MSYELnkVupCJNeqEPifGetXW4iVkZMaERNJqBV8C9DdrTtHGXmsAchRLBn8EaYrhG4z",
  "key40": "56BDeDPc9UT5qAC87sA3ZXoqnByeASqR15ugFNP2XERX6qfNFCRshazqbd78eX5TwMLsSpUZwkCtXiPcR7xS927b",
  "key41": "2Ndhd6oC2Qrwdby47CVdn4vqmXXL9maSvTNh1wauuHRQhGMbKgTAGjoNrwbURFu6ppnKnkqfpcxKHnRaiFyJPoJk",
  "key42": "4ebFKd6varESMx8juSccd6xAshWRA96GNqh9jHiCXWxZ5UJWd8fXuFKTHZFkq6ziC7FgP93TaE7QWShwMMV4SXUn",
  "key43": "4XjqrGwg1eoMAp69ET4DEgoTREk1uzQvXyD8gsQVFLshBv3G2b4ZyDiGapFWo1qR1wVcMuBcDhfQrJwK5sTXLsR8",
  "key44": "2uyUkPja5dyaEzsvQfdWT685PTGT3TucB2T4mVEfgFzfNoUH9dFuWsYFWMLkViRdM7izHXec9FDTmQtEJtnchUkq",
  "key45": "3VYPmNu1J3x4PJmEwqMeP1RfpwedLY42T42dpGvnJevWfW36ArEvZsikudnbJ2yh2SMJvSG2bFLQz9iNnF54XbPy",
  "key46": "4UL3fD29w3jRof5Qwox1vrFvh3rKiFvLJjAa45xHQ18pKZwetMDSBiosS9iExjAYKBoA81m8tCLEfag1fwhYH2Dg",
  "key47": "34sUgFcN7gkmt6sdMNqCrwA3Rs4HymyTDBK3gQoNeMGF9X9SLXWTwxfruGFi4XHcsTabQPAENSgEF7TF77gWpW8b",
  "key48": "2tzKMP85NXjAtrcCC4QhYvy1bsiavNvvjVgYEd3c997PrQ6HJghzsvv8NdDaSRMzFnz2LekAdUbGrwrsPSs8iL8c",
  "key49": "5BetP6pYgbJHaKhEszoUSu1GMjYMk5PnQ2JEVvuT9CAZr3SJHQPxVej7H6dwASQpba9RqH74hgo5AR1cBD8RLTp7"
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
