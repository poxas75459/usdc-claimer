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
    "4X1FkFvmBxGptqYVBQj5D84No1i8HyuMPSSSA4NZVywfADkcguY9qxACMfDy9RLXXVRBjQT8wcTbPJVjx9Di6nk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ypF9d13biHodXi2bBzHo2w8EVUSTqoCqafjpaHh6ns6kARnNdKjZXvKrRJevzVWUCviMfy2MLcC9x9aoTMZEe8W",
  "key1": "63eJyhYGbNygP5bATDyViDShqou3dPXjewwVWvqspk9HtZncvxHzTM4UzdUjeyRFoDzQGRfwNPAvv6MbwzgVLvta",
  "key2": "5ywW7LtVp7GQGrtfJREdkAyKF794hG2YdMmoh9VQzTDxUcTSMyJDPWZSXFUcofrJ7WuBiftSAPD75w7WcviVxZp6",
  "key3": "29vwrCrHEyPK1kXBpnLLfUShUmyxiFXW55y7pk41HhKR2AUfh2woecHAPo7TEkGBqmRqQJYNWWuhXw2qkwFsT6Zw",
  "key4": "4UfRhatPYZrXwxi8XhUHaaw3Nvk2NSavTzSKqqfTveXnLFrKYeVrCPUXA3T8nVvZe6eX7bChgDJGUpWxQQDYqu65",
  "key5": "4nieTKD2ABGCXeBPyGpBtG7zLJachs9sk3mMGji9HsArxK4xeNgYsQtQdfn81gUy6VLqXLeGBqaZ8p9YN7gCS6W3",
  "key6": "3eZDgcyZtGza8E3Y7AW3kD2gu3a47mBQpNTWUUbjxpF4kqJt7MhnFpXgA1ReDAENdMCPfUjt1tZDAG7GRxhM71Nm",
  "key7": "57g2FMJMtFkPD33DL5tm39mkLtDBwYuQCAUx6tQY1okykaxf2gqgkwhb4uDzRC1hfErSehnGzcnGivQ86EnAhz6D",
  "key8": "4jddBDUYD7DHH8YsD9RYKgDSXdH27RtRdB7MNLNQYtt9VgkD1CKwKJE2rRe7YyPjBgi8dAx4pWSFCnjTYGbbCD44",
  "key9": "2tugMR1ngDE3k2tVK6RCStfsor4thfe5sRan28uyaCCL4CKf7hF6p5qAcVpVNbaR1G6G7CWPPeBnKt3mPFBmr3PW",
  "key10": "38v2bFQ3Txws62nQaHTDzMjAGdX9G7eiLGmCez1mPJPb6njmSXGAxCWAyq5SrCNJGA9jUALs9BzHnVoyVHkGFgmr",
  "key11": "4rD9vsLZygpnocMFwwkHYoSGeBREVSnHVtj5Rgs53b7eAQ8ar81vRgyFLfkaY6MbPUYysu1USgJicBBWNnj3rHvm",
  "key12": "3SmVxvHwrzTmYqQBg1amNe9tzr4HyiX9fRDK4ZMejykYfuvV455ZEKKxMeVr6k8cw51x1MLBddASiKnX2AAaqLek",
  "key13": "5JpTc7GfnVmMjWJ7BynyDJup29pfaxwSeMu1KYkTkNs4USQ8cn5GAefpC3cJKPrrcjcmfhTTV69MipoQY4zRLSCX",
  "key14": "45JqpAJxvZukYJPDbKZSjU8Z5MZcqHqdq38MKJdirRqHSGBvbwWwDpPzWyVWMQXDtKyt1JhjBs5zXEQXWSELvnP5",
  "key15": "5U3ebscMXJ2QYcyGcfz87DnQE5fLzd6SSHneooj7fQg8jLSR9eu21hUCemsZ442sxSBnu4o6b8Cra8bF4vFVeHGX",
  "key16": "3UqUSpRNpBrDBz3bDi32snh7nFEniCfbjcTdyeFpxQdSCqQZZqRy62A2z9eshDavWurGoEvbuPkKtWqEsoUHG8yH",
  "key17": "67YmaT4aF1zKixe6oaxTQXjztrqefGLypeFWSRoTT9LbnCNNA9FTPvyXJrCDApzT4XF9SyUQjnfVUMyzqABFd1Xs",
  "key18": "4SJxHkRr8u3Hhr6vEhihBfjVkprtS8iGx52Js8mrrh5Dmzh8Z3M9hDHEgcgw4P8HvMtPDqLgNEc2pVTb4rhyEfte",
  "key19": "2gcD4ZYqx5RJoV9k5r5iAUSaTBbhTr3wiuWApXseetKBP35yr6i1mqkHuT8TKMCaUvpraMCJqdMNczusR8P92mfw",
  "key20": "RKVAk1mNdNFGtNoZ44R8tp7jXbYhYsQffmRYVqq5Kwi647kSVGgXqK6HeDUVgccVzg8nEW1vQPhHCYrHQAXo2uM",
  "key21": "61VVMj6EKckWkGRkQ3DQsLewAjSF3BgXPMEcAuhZjYCFutM5cLpNkJTP6cJKG2pE5rZsiHSeEssi4Sp45RMN7sKv",
  "key22": "fhrpNDGZk6w3fELv17Nkhe6E7eF5f4mWKW7ym6RdnuHLCuKfWTbd8gfQ1HhuqBGuzdWDfquUr8uMns1MjhwGxoF",
  "key23": "3bUNzLGQsymrWahHk1xzF6Ry66EUNaYj4gxytbayvpBVMPy7zoqJ6ZX5kP7hxMpCoaAhqSzEuqjuTEE5vVPgzTmQ",
  "key24": "2KymTsRyK4p4zpXDpz7GcfFscdsPhVs5Sntwn419dgRUsQVzqXxDW1urg4LoysPW3y9Kdj28oCyNxqvdKdsPopnM",
  "key25": "2i7tygnLcwCgS5Bf2BvVu6Hvj8W6gCdLnUUjLPrGYhV6D77VWyJQVLmVEx1MdadRHcGWEwk5L4dL776mJKgi2262",
  "key26": "4n3rPdzDyzES9qfQnZmErRMLBr9FV7zesM9nBPM3mSBanRkjkk6YdgHHP8XBBZ98oymSGvgb3epGL83xL4Ew4GRT",
  "key27": "3qcXUt19sWYo6oMNxCir3TVS7diZCnYBuaBkW1mqti6aUTaSnZ6DTd1RMbetPa12Hdy3C2mTDKsiNXVePFJ5Mgot",
  "key28": "4nBsKapfguzoXTtLnq8c6DARKc8JF3mnWu5LE736zoReqVepvJ4fcMcBFLNXmQT1gwy6XEh3CTNpHnCQ6i1dietu",
  "key29": "3c3oN2EJ6Zj2JeFs1h76NT1HZDeBJ5NXdWGF1X4FMpFcinxxf8hnWQtbkMo3vrpgfyWydyYEYP5u34ftDntVFfFZ",
  "key30": "5Xncn5YhDekjvc9SQdkT1EbJzsbBxnkrAQgkBhqo6MKHHjTyonW9FTDeR3MZCwWtETy3nTzJEYzqgN64cAqZDKo4",
  "key31": "MM2hvjVZtuja18m8oVyMgs4Wn7qRi3sfMzbNwEGjbw9ddqejDwz8ZP25L8pPFMQYWdwbhkY5j7vAhqcGTkP7csZ",
  "key32": "4Rgix7by4urhsG5jkiyky8AyMMGe6aV6dtvsJ1p5R5VdhAhWZyDSYEsYjwWYsnqLrKMbFhyuJESKuPTTRmmnxwWQ",
  "key33": "2bD6fCYpE3AZSYpXVLA4qgckKWdn1ER1Dkgz5ujbwMaqH4KME1RqJ3aR6r7zM1tSHNbKfCmkRibUiquhTJoH4vGr",
  "key34": "26MDfLy8AvtbmJk6TVqCQ5ijRVCCbi7NWxaGEm6J3vmcp6FeucY2GsgKgQmUavBE7e9mWYCajsJH5N3HuERTAwmF",
  "key35": "Mu5iydshNepjEAweAJviDVSfbJoenxKyw1X6mP2mbBrLehMZxuusFWLUk4guhbv4Wxoozg4ZD14gud7XFf9a7UR",
  "key36": "5o2j9o1QHogqNT5stNg3YNnnrN6iNdwCr1oxBJG6FuEAv43s4ujjWjsumgAwHueGTxPj32a3iynoqChMjbDabVj1",
  "key37": "4pEdXHPTKdtRtLpAkvXzMWjwSzUFs6dDW4tkXzX4kasrCkSq7jSZAPAKshHrGdovenAdBNrosC8XJc4Xeg5m1yE3",
  "key38": "57PthMBXurKCKhzeHYVuNMJyMkZhpeVsUofYMTVN6He4pGs2RxcmhXVoAUZ6WdcuAx2zWAa7i2afxFAWPitjNGmF",
  "key39": "2xXXxxwYvY7oCRJP32W9dhyQa8UKK2dADfeva4LM6AvpVg9w5iR4VhMcSEibQfJzUsJvXCrcSeeCbsAk467a9oTi",
  "key40": "5JEoPFNMWJRdzPyXDXQ5Yp1uvQS1jJBuuA4xscnBYk3wBuD8fAKuYafZX8sfiooQrS74p8FevEWzcTVTCMB3ovni",
  "key41": "5fTvAcZnxa9fbk7kGHPzo3yhN7XS4tfiuJPdSRw8XiqqiG64oj8Jz59YH3c4pD5sSvq8Qs9Zad8cwxSjeTgPgyKX",
  "key42": "4gyyVDHevMDyoq6iGM6fmENnoNrt6herpYaobmuYDzTPQJHkbonp5DajQgH5csaH2j2Ze3McpPAJLQgCS9NCieF9",
  "key43": "56rgygwmUa7U9j7taSso84zviqnkSZuAqs8joENFN2zEyFwwHxxheDXb8FhwPkWpNsn1aeLiC26vV8Ui4UbLEkLZ",
  "key44": "4XwMHkDdsSfNCPbgrVPhRAKhES3L75nsaDRFX7FWrfBP8V68L8wSFcPRDd5qYup52tuHtPiVDHjEYcwbfYdBubcY",
  "key45": "3P4vwLUt2bcZrK5WwKBC7ukLPZdwLTHpEZ9tTmDWvLmKudBHpNUj9BdB6y2rkMcLfaYHFQeMgRKgmxc47WWzAtyp",
  "key46": "2Bz34V6GkDf51XJmzC6njrWL5ER37XtoVLtPFaKZstYXANQMTjZzvck6Gt3H7VLMYENVzMcWXY7mC8LAYcRmdSwz",
  "key47": "4YjysJCghz86wcHynxuJphKauxxegEVmNqvgcXwUD6oFKasj7QB19PkFjAhV55eiwC6DQrbASJcw45DxsjnwPTpy",
  "key48": "4ywEzgUz6WtfezKBjp2eLCeCoHrZ6xWWygNg7WRW5YtRuoqej3aqKin6VQiaXtmtr8aYmLNnPdYWpX7kEGB7QrRd",
  "key49": "5yRDe9pHj2RWSh81uoS3s1svL3gVojPpBW21v1rZnxitVrEe6zzfSRAiGAd5qo883FEHUywxZYXSwGrw1a3oANLJ"
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
