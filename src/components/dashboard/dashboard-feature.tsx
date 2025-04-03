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
    "32NczgG4EBoZJx8du9RRu5ZAjjWpqcuGRLq1mR92RFdmL8hopNDcLVumWd1Yd9TXCvJLUgkejYsapu4wuWJHa6QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LvWFz71acu5SDo4KYzAPat9HefhGa7X5PbzNwg1SMhSPgURCp6ga55Y51HGFtNWtMixDAz7yjAUmKy8FrpnWT9d",
  "key1": "22vNQUVokDNzMuptddrPnpruigGqDfW3k7GUu9XQPk3Hv13eBM2XfbXg9srLBdjZoNCE16K6ijqHDqQ6Mq9MG4xN",
  "key2": "3Jr6gw5kXG9iDqkbtBZCTH6qRh3Ab4kmmUoRCc3ZwuzrB9tLqoZmtLpf8XFHa4p4ue4Zxt4SAdrYPxE5N8THY4rV",
  "key3": "rUd1MtqVshy47HKeaH1ArzCVsUJQ3weGKxzVHWk9Ety849fvDEAG6txrLvkknuB5Hug5sxevznCU772VDVU1cnM",
  "key4": "4UcTYziGSMTg1AsJdSmGmxj2dX6SfUv34vq2B5kqyNdsuUkmUrAYE5PW45JDrKMGiZJPkgVi6vEWDzykFTAnRY1r",
  "key5": "5t7RQzJGQohc2KbT2ePDhrAAMBd6KhT2t45jSyn7WnchmY9vNSGnhzbCFAgY4YiizAEQL7CbWtK8uD2Kp9uGBUQk",
  "key6": "53ZrKJ1Fn9dRNr1z3y1UiwjEodgeb4HrJCsamhDA8eDuZdK1McbkkkhF6XdmwQK6wCEBBfkUwppc5UQensHdDZiW",
  "key7": "241VBvDSTqZBAWzWrsKggCGN4FRtEwuC6PEyxd5XCFbBVcy3B5tw9A7fLqN9bKNsyXKDAwNeGTUoNCgSb4MjPfBg",
  "key8": "2ndbjvt84tZboMiVa1f9xzEme8LE9JgHpgCxVdYiJvWzcrM5qv892L5o9UhM6Ci2SPVtV7TaWjbuYgcHnXVt9YaW",
  "key9": "3TuKJqy5Pm8cumiXucUa1JH92MN7GRj3PFAgreeJ9jHPwzGgBndFUCyX8TTU2XExU2i3ku6UwPsxrWEzCcHAqz8u",
  "key10": "51M5Q9Hy6vqwfVDikz56VbfcoL1YoKArCdV6URcZfB3a1LpjoLLyfJRZr32WHRZPUUcVDbyojBRDjdq3csm87snb",
  "key11": "45BcFiJCeLy4Y2L8zCoiTntDMyQDaJjqQG8b2Ba4JpGdss7bQ4dvesVHkr5xJC815cgWZr1vCHzvo2WpET3qtgpe",
  "key12": "3K5sT7msiYbMHnX83qyBu6stSQhG9wQQWiAHKpMhsaWsx9vaUfJ1Zk5oc7dDbf92koJeBiqCWKyPJpHfFiH1BfaL",
  "key13": "2HWXk19PsHeuN9CTaVZjAMvz3jeLKqsBf31cv5Y1TQLZYN6dCan2M3VRHWx55GFkMaDKHt5STKqQrBoTfSHK9yZz",
  "key14": "ctYsv3Bq16VggVZcMVb5brtMRqaqSGnmKfLuge9ce65Ed1WscU89VZ54QA4ycs3V4pt93FfzCrSBqHuL2uguNWg",
  "key15": "2q4ibTLGGEvoDnVEpofPMqNB9hAY1xvq2K746LjcMfU33naDsspeyLszWeSh9GKCq4ZwWs3qfobqQm26mHvFhFjA",
  "key16": "3B44GTzvxKNnV2enH6ZoYXTEGYkXxhwU6T8brt25fozZcrrPkfyGnbkU9MeqZLPKHnvcFYpBzQVYY1aY6wSmr42W",
  "key17": "4nvQpBYGwGXaz5wmgVAusRTXuSeeiHiP3WZj6cbiTeCPnBwkyJ7FkWjm4Fp2ChQacSc2NZijataTRC72UjgFvy9v",
  "key18": "2iUxjCZUN76Jzkw5sZKEjaYK2XWFERPGGwwzAyq3365R124Dw99Sqz5P8jch1evEtHUbK8TVhu8isEV6u43qJPao",
  "key19": "3DU32qk2BwhPwoYS5Q5iiy1d7PHMfhRwLDVRTojaKBXMb2Xt2LXMsPubVkjQLNj1z8g29y6oVh8Ss5XzBfyRusG8",
  "key20": "4CxxhwEM7AxSz25D7KAs8sdVMvHNSSqJhYRNYDSM1rBGByRNHLU3YjxUfGTcMEFBVqRDFbEJMFiXoU7GTMvtZaKM",
  "key21": "37NeDfLQLcBNLpHrisEAFbop9Syf7U9txXFfChEK4yJQSvSR8d7UuDtbeiVMhXB2tKHPQwxbHRV57bVrZKpNUiSb",
  "key22": "59ymWiuSnv9sLyKpCcZEXmGUxGN47NhjcXGyu9Jtd8UJYTgoxssAA1uroPRf7eVicixr9LHEsMbrQNE2kLv2A2Qv",
  "key23": "2QKQTSG4WR3TZwBREattehYnw29oHWzkX7poLehMVs5W1wiuHM4qryrXhFrnQPR6Sxb71fiMEio5GTqzQ9dxYhJx",
  "key24": "gBBa7Vord3VArv535UfCV1sw5YmL3X5fmWBYGqBoWxDoe1Q2N89mQgdmkV9LmC6bczTFoP954qutAQEP2AP6sUt",
  "key25": "Si3dSDiMFN9E1VoGbiwouZxy8PcVRE2qN2zhAWsvNXPvHJfPN9RZJfFw1RVXzRtAuejzkrMpEwWyQMKGKL74vVj",
  "key26": "5QbXsr8V3ofrzdhcoHAK2gsUskHHAzesfBsigoA9tgTpdPU9VPSGWZPdwJA6cKvDkTeqhTojyjTkL1FtAM6NeXu2",
  "key27": "DZqKBayKKYcqxjCJ9eZUTbrF1V1t51YRzJK4f7ZKonLU7edmU8ape9cXo4r6k3BWkg6VdE1cxgJCAoxzrETwgSJ",
  "key28": "5vZQHgdi2Lg1YdBRz5uuuXw7BeoXsUN66wMBHra1wKcHWcyw3ZpZKhTFUy8rWpd3sTe4MGdSpSUHYAtnDdSvzqHV",
  "key29": "9UqiMPpWvunhVSPT6iGFdtE1JFoXJz77k6shFV3rjoH5L7fVEV4erVxsvTkwfHqNFJc14LDfRZop7ExyqNkfbg3"
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
