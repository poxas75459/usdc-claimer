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
    "3rmD5sa8AX2H2LaQ6aTLVo9aBWyckJuLcKFZR4yXEB26RaHQ8WqkqzjP6NuSE1X2JwrgZSMYfqVoaCph1wzCsLyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lwbt5TPxeeNJZF3YStRn74ZcvVufmX4FPMLFseTv8oyGsqPFNw5oxSZKZPttePdqzRGVTEntmtwEEb5aFKmUYFN",
  "key1": "3JTC2TT2WkmmMwRaZah1WrA3r9a3Ae9xm2Qad8qkMXgFjxCUYTxnvaQM2xwBLnGKWHbz3tRrW5DkYmwB9oz6xY6b",
  "key2": "YGeqEioMst9XQW1Sqo39RQNVgVm4qVhWNpCfBeDcX2gvifKSyiWGu72aDngopqYQD5g6UpyNcp2EbVSUaXCQTqw",
  "key3": "5xTRkAypAwTUsVsJbXQ93uoiXE1FjUvUQUYHn1GKnBUdwFXjWjgN5ETuVdNWYkRuwptDBeCeB2rcrnWhV1MxRJLk",
  "key4": "3emy7s6LszTU3RoAdB12ZHEPm6ydFYYNsXNgm6AaDigUXJPrbdDY1QhbbwhWCtX8dhJk1H7EksX9f1g5LoyT7c2s",
  "key5": "3YgXq78QbZwYi32m1jivYjtzXM1MHjoh6bwr3ixWEQSh6KXzGxr511r5mSUrnkVJ91ePJgxpKu65xgiaZf2Eq6Kt",
  "key6": "2P8cGttERCUmoM3WcUbKyFcqPG3UktXfKNxP6y8PYgWYaBGAf2EUCQbGA18scCnFpqbVycsJ8WdAXdWs2ntjJSuH",
  "key7": "EDUwohkfNeHtYczjSRwUjkYE5vyZLFkT5ZRQ6CiRiTVD2p3QyLXEpCgcLyHGxjxU5Evh9U44Z2odJtDAJMZWUK3",
  "key8": "4Ev25CG485KJ7zpUKLsjFe1bzHU6Qi5RRz5x472Gx4eQdnjuqWRar1p29Z3dokJo7txzxMqzjt7bUWZznGF5bExS",
  "key9": "5mmgZR1fY6nvTKWSYkLk5dqnPJsXCDczK1Gka82f2CK88sdHUNXKTPcxsmRSvPeicTVVLaLfgpTdr6FD5SEhKVTh",
  "key10": "2Hgtihjqe6jAJgttZFqBaWwCPxLigi5vizDPbArNnM5NQdfeQotu8YMPtmMY9yu35ntfAwPKXhCFvKfKRLoRvv32",
  "key11": "5we2t8RwMXVzBDwSBJH1uzM7u55wbtbv7QqKqMq3VcgRoWyxcJPya4EGan6Et14tMs4bHQsj7TwwkQPPxHCx84dt",
  "key12": "2XFPnwxp37mL5ee3Ces5BrcYXUpfqSXDNVVG7rrRVAoH5bNjH1vmwUH8vMAf8VT6nkMgJAx8GAwvzxYMrWuJgDx4",
  "key13": "Yn9R3Xv6882WuVidGXCUuJ8sWuK2VfPFR8HdShLjR2XiynmFk43d5AEaSRKanbPqKLtaNF48arBd6jy8KgCdF1T",
  "key14": "58mEe8SvhEBoLoEdC2X6TMAELtXVnhDHJC5gr74TWeQo9ifhPeeK4TtbtzUfHAJP2Qu2GQqoPS66kjv8M8QdB9ui",
  "key15": "4wMf7u9WVBJFjqMGzeDZVVMFnU5ryYjHahKfgyN6HupXFe8xcdLPfXJf3oaQZgUbwWfCCttsDNQrWVLRQESsgdMD",
  "key16": "5MnfLJafHDwSzxuyMrTR9toZsAy28CyoLbLLBn5tDyrNwWGTgL8dEte5Lw1BBt7G9SvYYZf7QenorTnzqKLUpF6E",
  "key17": "3SeePAT2s3oAU8vSE3vaMeVvXxNKGZg2DFWjKtHEPPyZpceuLGw3togtmFBzkeRTgzn8VbR7PypfKp8z7LekDKXo",
  "key18": "47jTmBWwp1dZ5tnRmX7sPWmZrXWNccPQy5GPEePj9FWY6M1pLcWR4gBB8KxrvHMYt8nkEReQyk3ky1NNi58nxK9J",
  "key19": "gjwLNofHbUqgcp2AovfPu6iWzBFuD4PkEMchVpjPbQ8qoTszQS6WY9N75tqHbuHucRukcjQkPmZGmtMvWMT4U7Q",
  "key20": "5Bijp6aa6hDeNzqDiGzMnx8Vszzn2FUYA6FqNzpjteTcj8nYGDuLyj91G5kZ7bFJujWcJGoSs18bVrnC1jciVH8s",
  "key21": "rpntMCo8Qv8rim4vq67kmtjhiYPf7mxkHoB8sj7rHEBrRdaYGbtWAF7PdV1iTXTCEC15Sy4QVjabcXqdYMo7MVU",
  "key22": "63kxvrJjmofReBbkUmrv477pvpekaLyoXu6xqEE4HkvVRQhHMg3oB7ZZrJ4DB1utAKdCZZoNv6oiecjCVymDCxsH",
  "key23": "FweSixeWjCttPrqXnJrUZuwn2frcYAWxKnTVL8dPyUX3qdt8BxoXuHquAtCAVHmhGvWMAeKvhtL7hip7fyHU1hg",
  "key24": "2JBv5EYgqcZETMG5DpYpdWjL4YNdYVUJcMR6WdFZweBn44gaRWXHohvnRGq1yxa2Bar3vVxPVGaQpsVN85MzS8YS",
  "key25": "2k5LhUCrsD3qWtwFaKiKr3Ex6Rz6pPctJVC2YQwntybEzSLUu1VsP2fzFvxDiiB5E3uhcDLKC9hPP7fXrrFma92u",
  "key26": "4vMfPEuCdmNhEmv6GXG42cMbNjdokgU2gNyDSWpCQbn2aDYw8cWKa25tfXNXAkvr3UsUPcqzo7XRVSpN53gHkWFa",
  "key27": "4wruHTgTRxNiJosWUtnxqUCsGrhRLHndw7isdHQQdKQ9qfgawXnqkgDp99FBThBEHUoXdR15TBLFmiFmBU1iN9fk",
  "key28": "2Qgr4KCxTW3ctPm2WW6WFGj8W7XQqrUuiS8s429sgsxBqMRVZFbUq9VXa7BMDxQPGb9fpQBcy2g7VVhZNcZ6ozkH",
  "key29": "2BaGjRDigBd8RGbpupKaMsCW3GWhQYipEKDWJF6rDdTxxSF7h1DwQRvGAzL9y5aP7FHEBWKAjUPnoJBuScD3E7on",
  "key30": "63Vy7fBYpmDpJD7Rpq1WU8H4w1tzjwrHP7zF4qYk3wborqx2ZwWtfLUSeq3FGYnPFGGwecwZrCQBib22VG53mBo9",
  "key31": "3A1EuS5VkUyshsqoHzNGm62k68LtMQMJ4Ajw4AYzWhrFstf1NeBzZFjFTMD3gMi5yCVBBmRhnjcpNmZ2vf2bJ3hX",
  "key32": "5C8zGmHQFdNzEsQpTwMEVFpoBXwrnAgDerxskyrY7haSiErvNiFJpgaiVqDL312xWZPvhuk3mfCDMrBaxdwxZN2C",
  "key33": "3D6f6m3tyMQcomFdrP1nvoQExtLCh5rfewB2444wDvqtsAmRtdAvVAVSBsUR92Wn6rt1B2SgUqz3on45SDYinsxQ",
  "key34": "3jQEkT6M54Xhe3ufWBnfj42Tv5YYxqSSjg1aSFX9sa1sBSKySyEC9gLdAUk4AK2xrSWyrjgJTuyNL5JDJs1YJvm8",
  "key35": "2pUN5Ey777zgdZ7RfzDh7ZAMw2Cme7A2K9iAadXRK44JNyTh532B1kcEFmUD8wWi8yemmBbXQTUFZvmaR4SGZiy",
  "key36": "4G1Hcy2siHuyyydn5cUy1cy1VAWStqFN1NpnbTjjerTJH8UpHeKi219qZ14QRToocuKty6y2Wjmc4tEurur2nkHU"
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
