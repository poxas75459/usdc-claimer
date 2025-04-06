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
    "4PNAua2bWaxWwTG14jb8qdK78q8N2W9WJKG3LbH1ssgoTqAq8ypMnEUD8NTehNMPPWVgq34we6NLCPpBWzFCjP1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5knuAU1KCJT2cJGmZuNA6UtdA3L7VArZf2xuDmGf2g8QMRuMKx8ttXTawqdMjBoqYvaHp4adCvZMgX6JVM2R3392",
  "key1": "4K4uX6XX89gqUYgsmDePLZjEyepk5N2uDvS9T9By89cSdStt4YemziAbH4tVL7fr1YRkeSQQHvig3qFWJvN75C6F",
  "key2": "2tj6Z6qWDuabW2avPak8ffnUuWhz2w1yb8dtjMr7QnJ4fCefZWzzyVs5hwbFY6Ghe67V38qvDcZexN5yPzKvEQCi",
  "key3": "2iWrq16BPKfyrzvbtvfAJCVWeKjNYKN5RiSQPFPjAM48KWTZwVCkHwPzqE6VYsNTceq7W7KR3BK96xfCzUoYyLcF",
  "key4": "ZFevBpEQRB91xeL4s9iiumrapLLfZWZzRhToHTW7Z6kYPitxxfvFgYszFQzKMzs4nBri3Hrt8gToUH5eQJnNSAC",
  "key5": "p57pxHq2XxyyRwUVc32foz6aezq2aWoKQuNmyHKu1WqFC41C3AsS9FqNkgKQnfr6jQuCTz7a4ijg3jFJyh9vMov",
  "key6": "46T3pLhM8et39yPVLcJC94AgVuUxGY5NKUtAbYUqETZ161o3JHCbyHsJ2uidTbgfUAcNVB3TSVUzCCrBPWeeJD2w",
  "key7": "5TuVmbguWckGLvTppmqBCEbCq6SCfpxnemrn5u77Xgffm9BY5xaPer9aHT8tketRTtrtq5nRBYJSNTS7AZhqqHCL",
  "key8": "5iMHa4Ht9FDE8sn5feMaC7aVdDMUAzDTwLSp3AiDJHy49U476GmmqBokGUrvMCXi2UsJ4RJNHP2c9N8ZQBFpYxdJ",
  "key9": "MTJtSDzhdnmDTzwddEpcd3CQeusDLtFCxK3qgruqUd11T1AXemvGZXWgyw7xm4LreNyzyBvALBC1bJ8STcN71my",
  "key10": "5ko1oLDFoNdboBEmmKcofMZ94EQ7dc2Suc7bANYqcBrAPGshoD6v6WeEDxFiyQZWr4S6A1QWxV1yi8NuAGgRMivE",
  "key11": "2BY7TeuL827aLAE6yCG6vSiBRmgYbs7fVmbkixnPEvBCLbJ1GwoKVtJKetiY5temFnAdgvBQqfifvpeCraHcgxpd",
  "key12": "5er1Fb77qvrENfVABaAU2TXv7KL2stiBNDdy5bAkTAqoJ6FdvNyZYbkgmaBcCxBVfenvbuntPkMs3rok1KM5Gpxs",
  "key13": "65bGijjhBZHwqAz36MWTqeqZ7KVstoq98h5qgWQv2ojpLFK5bFcnRDQENsP5j5z8iB8dpaExSXGpGh2GzcsDhjA",
  "key14": "5zTpLHjAfvqoxhLDsGLrEchDsA9Cj2Pke7c3bn4V9JeJbXtq67CsCEi5vPHntF1wyZT9BPsZ3W4CYwBHRmkfmchc",
  "key15": "3kckGd6ZRQKiKBqHGuCvaRDiF3LB5VbovBDxYM169KupHFk8FaiGuY4WMyRPM8R9ZYEFhJdqssavgxmm9sn8kUe1",
  "key16": "28rY9X2GH1537PpU5y9NDTYiQG1hsfKCKjJUdQP5588hyvFGHtt1K48fk93Fbi53pWQ4o5GPLgmVFsxejtG115KQ",
  "key17": "A3D6EzfQUNxXNii3EzzLweM7oaD9VCzAgD5LBpqa5C9wfFygF2pYf7uKwsJG4WWgKzKNTiyhP1znGh47YfY8mx5",
  "key18": "TbQQd9s4Gi9tAdYAUeMWKC58UFJMR67BAYvxJRugBXvmg8C9ndtD6j19onPLEPoSvMx1gbhPCvmnjk231ALRmHU",
  "key19": "426YUfG2wC7r2PNCvVa1WbQowzLhk1MyLaQ66Av4RY2wpi2aEfcPPPaM9S244kCs4az37RFsk4vXwgde7NVtdeBx",
  "key20": "3eeTbebVum67UPgY13H68bkMVGds4hzxDtLx3MM9XX5enCeYBkm5xb6SAXMV4XzmGXn7FLnn6uVpk7RURtbPcByH",
  "key21": "3MgDbnGhvA7vy71PsbYWi7Kh2TrvbE1MrG2zZ8JHQ9cX7VKfhvqvqwfd1uYeUjAYvkmzZD1c7tqjbZ7HPtiXG5V5",
  "key22": "3Ci8kD3B9nue5UZVfPx67it5KDTRjWcFqY4ozSbVXQgphFu66GLGBM23fu541LUQ3fmfd1abpS8GFNtpHpjLeJQp",
  "key23": "47UXcnPdLywzxi8N7Fad51esaToCzaj4MU7gkb9hdr8gcA8nHG1HDpY5AphZw6vRBuWxwGWnsMkktUVAgNNdBmuT",
  "key24": "PG4nrhASznJkx4rytNwB4jqMhLTMPhVdK94PUq6EQHQPdGdvwhFLbLB4wYTDqqyB74yMVdXvSu4fzMNwkLVNqet",
  "key25": "3qncBPyUG3GoGaJ83CN9hQcSEAhXZd9b2Kj1MMumMrzi8MtAsESW2sEeKBiaHFBgtQpNSvzACuTHPnBT48Siqwat",
  "key26": "a2V3AU5QbrfyBhcd28zsusoK7FgCrdPQDhUvxJiHpCQjkqs9ZGPjbMKEJ4WCSkseedQZMibVKssSX7DPtzNasNY",
  "key27": "N5XhUnMRFmnMzNusDLMdBEvNw1DQ8pdyE8Je7f3Hnz4qWkVNkSmxwmU83pKFH1XNZvp4E6WkqFAzdAXwoqVEztz",
  "key28": "4HDFEMwbsJ5R8bYmpzwoKB8dFfGxJoKhx8TvHiwsyQGSyHSHF9q6bSa93A1HZAuVaRyCwdx8jpyCqnuXNkP8FoFi",
  "key29": "3Wk5hC5SkCm5tzQZBVpcyNfsfomTT12Mskra7CxqMLxCoZcQdhAjfurxAMUJWfD6bhvEFbx1seam11jLvnqoyP99",
  "key30": "6YTXWrW8oxvm1dtUnSFkx1vk8GYZ2tkv9FHyTKaNFZkQhCPMedduVm7j6GeJBWbZ6QFyGrgRVDr7uMiBtb1ZGu2",
  "key31": "33YptF7ZAnNSRSLmHvvYjY3TeAHXMrCe4uwLYBn5Kb2FPa2rEzykfgns2xbz7LA7vAo9Ffuujxno7LGXCkEJciv1",
  "key32": "5KKUqhYLCWxmFYF2aJ411FWqbeV9JbaCkkGVWCdm99GQhgagRRt25LimSAgJzWfnRTTRFHG6vG69MAdMPRzZJJWH",
  "key33": "36GLoYxZWGyEcx6wLrGEfaVVVpHH6BLopChNitmCWE92b1yeF92H3ZeGBLTiYpLXS46EdCuBVrjB8JPiMA3rPCG2",
  "key34": "4g1Moym6CSf5z48mx7LXSx352hFPCBi89AWQtqj4TYpaGoNhP6FHf4SMxFn87U2pfz44f4B7zestRhLYq9D2Jq3F",
  "key35": "5DbCVoc5SxVMBjfxvCea7GjmUB3T9ChKCiUpjhoW743yfmd5HA8ciGtrBLhkPetWvcbswdCtP7QzbCBScwfwsRgh"
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
