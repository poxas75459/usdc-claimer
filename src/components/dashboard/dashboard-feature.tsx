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
    "jH81nmxmd9ouCm9vGDXLZN8uAZuLj4XnJUxcjcPK1knUcTPfLcamKqa28yLBkbRBa6Wr1hVcXVNrJUPSa8ojKnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mccr8KCffsxcAY8TyhCDd81uGwYuCAFQj37roE9hxaMhsinABJMi17XnH9x97URhpzCR6qGsXqRkwPqAUMdr3dn",
  "key1": "4nJRHnFSDVSbxNX36zP34KJ4oSvwJZfFiqBR5Y8cSQUki1oaTSdysJGNJ3JiQ7eE7yywxqKmnUfVFfHqJy95QaGi",
  "key2": "2rLRJ74jpEqxaicZ2wq4BLjyXMiaUSXiKL48PkWxwtWq7xC8QTS2Bgstbpy4YXpVDTiQVivK3n6YyUhqRwZeCTAG",
  "key3": "BcWC6Z4npXps5XLh5rWtboMSVXQhqFS7DxebNGSHhE8xaxKUveYCqyUhxfA5cwi7R8PNLom1ppam85tJKn8KMCf",
  "key4": "2FCQ9MdfrQxjqT58Rk15rFkQrDeU1MsVoCLPJpzoDxX2DTSQFK3PEAMCct2oSv18JhZWUrFwVL92bmoL1qtwyP94",
  "key5": "4gCzQZzJF57rQbCTKru2dgNxRJE3jPsUrzxJQoJ3h5EM9EKXpn5Fxe3376hkxpB8suguG3fe7miHCYf4ygFenvaD",
  "key6": "3D6urxkLkKG37xNCiVVvPVXFgmpXBDMtc1qJeUjakdjNi3vP6VGyX32ajwELbZRPAxSMpcRUz5SsXatKyXcPyoEy",
  "key7": "5RQUR3CQSGFmomwkZ3fef8cNzhANKrKDzimbfNdyNYBjUHMvQ7N2KR1C9o1TnMYyU282j2KmeEBnr72NkmASnXmQ",
  "key8": "37fEi9WGjf363B2j7v4B6zUeKbs8GrDBKXpXeybSGSds4FKJTmd92cEHyMjQv9p7VCd1Wm9TXVbFonZJYcsgmZPr",
  "key9": "2J1PJ45mD8miuduCnkuHNizVeG6rbm8JaCQrShqg5pezr9zSSDzbs9Y2vR6CEwQ6LXyHEUvHbH7zZwCCbxsuHorA",
  "key10": "3DLdJA2jsLhnAXsiVXoqPg28uzUyYfbYGihyowZDmpLrJupbjg7cGLRm4u5435GcGpubRQAmbV95f3EwQEag1x6f",
  "key11": "3RZxD1P7i7PZ3Veigt9aACGZ6U88E8b4PWHehgqWndXz3oFu4Lt1uuuCQpXcyEfaPXiqNtg94Ss52e6qH9xwmKbD",
  "key12": "e1mn1mVJXkdtkWRsRfQMyFuG3AMnXqTgr1DvDUKc8fSTvwRPru7Tvnwsnqegjnb9FNECmFxhXWtug8Tbv6z4E2d",
  "key13": "61NuvYpo1hskY1gAzPPquAZ5vkbqpiQTULx18hDunVDC7QkyQ8WcFfizUCrQyr3tfWzQf1Y821YLFiizxYGYndsA",
  "key14": "3FAb8C8ZxAUjHf3m442F4H8KHAaBg8xqJD7ekRBzxTSCVKeFDhFaeQhzWBk7XmciD6orL7Turvo6X3Sp1qi1MWnk",
  "key15": "3VdGPyT1fHyLHakfAoximV4wfWQajM12zyFpmoyb6vbXegi3jAVkztRRAsgLQcVPRgtkL8YX5RsdJikzk65ute6b",
  "key16": "5zi6wmBefdFKT9moDhcvXx3GQbB8U1TJo3MJBpripWScHWD5AVZgw5Simq8f2G86NpXAzhsbZ4FJt8TQn6BK2mPG",
  "key17": "5kV4dyMfjdgpk2DMER9nzsa2N24QhYwwJEDRxuvVPmt9Lya4iqN1qiyKb3cjpHr6gvfmD5Yi1WgmH3ZRS7vMS4yA",
  "key18": "2tLDeSXee1TvVfzwQoKqem1DvVAeWM4jQL8wjt34XNvv5Cy7Zx777oVBqvHrDB1sKDBNMYBoJLJQxeSVX6xGJvKV",
  "key19": "3ArxnmbzzXwzrbLKkEa56gzsGS66UjYKDu9773ZwdgxqUfh8yB7jsP4e9ihfTJuEfgkx2DHj2cwZv1tk9z4P2GSa",
  "key20": "s8pjzvrAf4FWtSbo4auHGKayxd6EGRMtttVuYSczgtTHW7SjbfUg33nk2v1Cp3UubCp3zYoZDQki7mNGCyDXisk",
  "key21": "3e1jpddYw6KRVdq11zvUP7o4BQ3UsLZUKNhzkHUgxfDh2iLwhVXE1HUMRYzcUsUv7ZhZ3K2apCRtdefzgAKvLBqi",
  "key22": "Zss9yJ5cPoxZscjRSV6rcjuvhqfNvBt7AtxhesC4Cuknphac179v12fdjVDivJbLSpzomtQQEeNz9WNn95kEtfC",
  "key23": "5rgUfFgiDewyXVnQwgTAF5vJvye4bK6PZcPDcniarPumsK3hDyQZKGMYq8uEcC957uK3Trk1Q5vS9NdgS4fPBfqo",
  "key24": "5L38gMQqwjJFBUPTs34gZSCYRJftRRgLqtR3BrWvFaGJggNHTwTpVw1hv6BQ9XVKqmxv2JPknL8DJ4Bxg3SN1bHz",
  "key25": "fQAkPmbG12jzVKVjNEBb8Vddcnq8nGheKW1QpBHDmMfdmuHDvVErVS199jgWXe7Qkds9sBWcMtEhcFfYHeQ1r7T",
  "key26": "5LHH3StiE9DfHLrYfKKKheCpyUsiV6ZXVfeRvC6i7AhMFkM2P5AcpQZFoDt9qiwxyuwj853AQ39rMP47g6sqof6o",
  "key27": "M2J7aLEhsYPBiDSmhs7y9a4d4zmCP5ubPjzULNS46613uP5JHGTh25QKq3UUhDEk7invC6dswdf5YP3g1pbAVHB",
  "key28": "2Ch7fzT37kyHcbVoCiEs29eQMv8HtWZxHPJMpajytgs3LsniyJCr1fRYEJ4DzMf4D7Zxu5shW3HXD24soLMD9Gjb",
  "key29": "pNoBjMjcoAtgRRYAiJsAGiUBj6RKTN6R9V24cBGDxV1GMAF49iG8MMJYmRBgPZwpnuqbsE3wWEeuWwnq2i2uEoR",
  "key30": "22qdG6P3ZbiK2WiT46ZHiYjY1nLH8PsVY4DM2kxddEaEzzzcm1EXXvwearzBaGnMeCPsZr7H9wrxFDhjoaMHNEH5",
  "key31": "5yKfybUamxJ38Rd38DFt2WhS2N7o5bkBz5Fgu8wn2J1CgPTk5tB4rKcsw9PqHc5zMejEyYu4p3pZJoX7fSsvxxAV",
  "key32": "4Zvu2SFUdpByGo1xiarovngNfwUWxxiZrs5Q4Sry8a62DVhhjqKWVZuGXzggfCgiPUuZE163FTEhrmxEQBpYsCh5",
  "key33": "66rZzbFV9zMTuPHejcqTVRnrsoJEkU5umcZFw6iXyZyBQ6MQ8uyyfXXTW6xJU8b6VVN4gtGm6u76oHSUSEarVa9J",
  "key34": "21AqiG7CKUZ8ZmuQNj3tC7vDMPjoUEu6G1Tju1cpWqMttsDfFMwd9LdoYCAmvv9Kp9TBo6V96BCXbR5TR7kDiJCv",
  "key35": "g2tDSZ2VU9uBedQKMhoB7H5K5uAjQ2vfAd3nW1y4Awogi2SnBKZujN3RreE3iJhQjdAkMEi4igdHjRjb7CB9VUN",
  "key36": "ZjDsJLTU4nwDVL54cpnrZ4YAn1kWays1oBm9pkwiCNnG2mf2Cy6bX6dtWm7wssiyQgXBzTbsECk2vzVVXDXRsTp",
  "key37": "591XxEd3tfWDFJ3etdj8NXRCMoVHYUHrh66WeUwGbQfWtcdWJnxhdAXsTL6BadZ6CPnArSS2rR4TdkXfP9FtMZwN"
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
