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
    "U1NKArroMRHDMxzcQKMhAmJCRSLezKDnZSAhcpf9GP1BaQ1AhmCbPyNLgGN8YAMYvvdr8EFzVGEpPQ38monKnfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kau987sQNc82XDsc9dfSyNx3yYhszUBZWbRApDZXeYFq2VPFWFa7hr7hiYskUvB2DGL9kEFMXboauSzD4gJqBuk",
  "key1": "3hdFbKhMzrX4yfRAXSWK6fq26tMeqFYgGLV9y7kM6nWsjHaNd576zaFfzYtMnprRb9E9cGpLgbHFESnkdXXTKPhb",
  "key2": "2rofYcXr9rs66JSGfGuWmKeaHAgFHhWnTvdJVD2Bt3Tt4kiaRELNUZCaPWeXTBhBF36gexPHRe877Y4NSTe8UEqf",
  "key3": "3yEH31yK7FTwgE6arp2d3UiR2cVWidZnqHvWc8t2Hd1spe6YXLufpXKnQQqgnKHJo91yPqpEe6rZoPH42suqjFqe",
  "key4": "k7oudBWoCWJKYBxeqEjDhqWcjY28LHtPbsAgJd5jdktXkG27KPzusNxFX2WKv8Kh55G2nnYQYqM8i1tfMqwXipU",
  "key5": "2YXN9ER7QzpUuNgdiRHQ49QXWphAPy2aAsW3b2U85tQReWbTuwAvaLAvkPyBFgkG3zWK4FDy9jL2W2HedjFdmpa",
  "key6": "TErQKWorjhhqnTSdfsXYvCutHNmhb5BDLC3QSTnV2Zry8ob76z24e55xnc3pPuM5jXJAs1b8twLiKMftPWv8sAR",
  "key7": "5h9rHxh2RruofNmsvkRQjRfryZ2XVdJDPkwkdUjAJTMi1seVKwZB4cRgUUkEqVGrCztDgvyWHHamoXgbWDFRWnZb",
  "key8": "3FYHFu3vsZcbkEbVtxoM4KTSX3fUfSgyHdgwhiWjJT3ghREU4Hgii2UADaxrPAVbieUdWPGzbFhbaFsdgyW9cHnB",
  "key9": "5QgLAAPriZGtouhb9GbCBkYYEndqVHcZWUXoqYiPuqXKUkNWFPmhA29RZfGWgQWkGqPZrxV62fKQ2iJ21DRFDdbs",
  "key10": "28wXRguVrbr3ZFa7njZELgPA9Zo8frnboUYzwMHfnzGDi8cS3e9XV4sWVNaAaABWfuBoQvAim1fxQuoYmTH5SEG7",
  "key11": "42ujskH5iKYfqJ3QzCUZjgfSZT9JsTZHtCE3dLKzcPcF8rXsC2q1MPNBzbjgD9w6ze4hwoth7oftVb9qzjqQzYnr",
  "key12": "4F6feF5n2yBex3dY1HcCT62rCmN2eJXqk4rAy386NJRrPmExoF7iWmxwDJHxrVCURqbRqAVrHvdD2m1JcXcT6Zfu",
  "key13": "3NQhyWp86fMiTTYgWvXg3pvWHrg2KmcLfeEXmp7XWaJUioZh3FA5DMyVekg93VG8Hsr2THkMuWT8npzv4zTTRQBd",
  "key14": "5A5tMRKQVESNQD13SsF7gedAiUJjxsLk31rYgUcAU3gyWRS4mxMkixrwTFUprWyN9Te2LdvKvSuniHJACJrWamsD",
  "key15": "2STozpLj1dPdbEUcbQWq2wAHzN4odLCCufma343foWvvNUa1EVeEUt2CwCJobLHF1bc7L5jCgMYyWk6adNhUM3M1",
  "key16": "2YQsjE8bqAuFHc4PHjvS4CXbeZQLyHXgcrbvtNrFbSUxq37ayLgLrhAxnrsVuMYdxxgKf6n6WQsWyHQZskxA4RvK",
  "key17": "4FeAVKWDySFE9uJkmbnck6fbGWGHNiKrMs7bPywCbBQBVSQK1E7mFakBbud6sHQxNu1c3a4iifgMGZuNaAKqBpf3",
  "key18": "yA9YzDsrtCFMY74kbSyhb8SxhPHwMPdFDBAaDCpKiWFgrwaY8GAhp8KQ9Zv7MTCstSfu5H6erPKb4tPeWed6L8v",
  "key19": "3EHeZd7Jh2AdYvUwqpq92czc9pSkU2qAqdHwcusrnPCWoXXSYhsJmXxoSjLcGMs5qArCwxErBy1QpVVSsLtR3rNJ",
  "key20": "2QVsLiAukDPfsR3xGYXWd3QBcWjV6Hya6PMDjifwdNH14d9YmvQXLrVNpPBELEhJMS7raSM7WvXt1ruyBXWCxuJ1",
  "key21": "2nVejAFPBZUHE2o7oBUMcEiG7FdxHH4TQ3qDx8Vabkjxk25QVf4KYsNBJMwzhNH6S7iuQGUchbuwXHHouU6Ls66G",
  "key22": "2EtR3ZM9kivgBQZJkUUmvqcCQTH7XQ9coomtAkAHoNevY9vziorqf2yaugQJ8xN1K9ydEwuBt4xMXYrC3dRDeTg1",
  "key23": "2EhZvsfbkJSWyhYBC3EA84yxngVSXEvsfg67EqaAosKwQ7v3WJ7hMXDp4QmYbb5w1khVMeArWmXmp3gtXXU3Nsno",
  "key24": "4Gq8cMGkuJJiaAZ1ZHoMEVMZ8Eo8bq9HsRdSfQYM3prRMJGhMcZXjc2k7Q3N7PjXFtjzmWGGvTB9ppzB4NRiYic2",
  "key25": "5h9kpTXjNXX4WEuAVAUrHkLedPrxSuZGaNEb2awNWM5pvfdNQfKC6WVHWYm4sYmdFMCzbxATBTvvi43sux8yVnzB",
  "key26": "5osdrjHcgHeN7g79YGgPqVGF5fs3vFVDyizgzpqDXf2NNXutQEczKGv1cP6y4piZfuZEyf3Ndnw4u52ED6P9FiXB",
  "key27": "29KhCzyT4wTxZbLLvELoMHSFSwJxujMCHnnSrLhDKo8dwT6GADKD9FyRuMwQd7NrVbAeaWRup3PqrpSfPc83JC9o",
  "key28": "pLazgwqNqCbGjA384atjEygWGjCS8mV7Wdm5MdvYPhHuuwP9xkE8f7Qao2GE9uznGtKWykroXCHH3UKh4gTynT9",
  "key29": "5njTGknhfVAonoRyn8LmQ8hdMixfr5juyhfwLDc1B18GbrY4cone5uSE7AVZhP4FDU92spJRS67wkp8nnLjL9PUQ",
  "key30": "53yDoet4tiK64TPeFsETCj74tLaX4NWbyTM8okwxm6X5JdokcQ2Q83wK35HB9jCKUjxxYbGinWmoNQKRM352Cmbt",
  "key31": "4vTyZtFnooANDPQ5WriLXqyXC3DttBYwNGrrrQL24q3vs8yNRvT81Ltx9oB9i85KA6Y5TM7aamnRtTw7KNaPdYCx",
  "key32": "hQQ7vYVyo4nKKsJMv9EshDHm3zesJ4Js32WLjoubneWgNhwBJ7use8BMSL5Wt4shgHHek4v79Sh2cZpMT924K7w",
  "key33": "5gdyf1AmkC9uSdMm1awocw9pjs8DSMecLj1MdGWWRt9HUoqsUTXpAQqAce9Cf3XZJZH4Vcvdg4unoit5u9ZY12Gm",
  "key34": "j9P3yzopLQmgPRyXKYYfushtTp1krozRavkrNRd5a6HW3NCA3WHcL6x6HE3VeenpuTYfMf43CEYrmnFjAJzbrWz",
  "key35": "37J58Q1SKpwbWDpqUnZwaDT5A7tVp71VGiDBYVJsGZPyJy1e5sFShyz1RxR1GgKoYb3i1F1SM2zfi25WbW6sNsgV",
  "key36": "42sdGLe5SWSQtabMnDPrcXVaqDccS4wyXJ5LvKjUJmDBL2GVTCZV3eUXo9D21VbHaihWHnezcHd3ASB6e3743Bx8",
  "key37": "j9yx88b91TZtNH69EEpT4XKX7iHr4tugBpBxCS3LtQ7DgXNSvf6bQuvu73QCycxoU6Jntgcb3SBxZnYN6VbGAmb",
  "key38": "BiWAxPnwrn37MoDVDYkQq3Rr7nfCFYZU49cyimhuLeK4uGogknfF4WgEizS7gYmoZr5FcN7LN3yggSbhdyhe1XW",
  "key39": "5PFSkhTgiXuFj3J1cGLaK6bgosw2L6FUbQwneUKcUH7WNKhwCSgyJrNRBYYwgE9sRmPsoF6ERZ6MoUtGR3ZWgsLq",
  "key40": "22anhoJ3Lcevz8nWcdJtBT2vKjEKiHwSaJPZYYXPNHKz4o74KXmKCQ3FQR2LMBsHV2vjxigibAUN9JPqMeQi8vxY",
  "key41": "5Gnx8rCfg3T2QBsqzU6BAZJCA1Lj9vXZeY1sY58JJQxx2qwfaVj2DjTDBLVYC4oYWd56cPbjzBLankynSLgERLsY",
  "key42": "2iMcHwb9T2pWKVmtvXQ6vP3RxeKZwoZ6R12cYdpJUyTd9AxBgivioDr8iTPmH5hXifGQw7xePcyfoBxMnCQV2349",
  "key43": "3fJtAb2UNVekmMc38WEWziM5WoF574uW6YeGjMfjTSfUCdRHZBCk9nczRdcTW7joFied1WMSuesxCpn9fpUrqdE4",
  "key44": "ntBbhyFU2A2FYTMKTuhLmssFYTsLDcWswM5oAgwJ8WNJ9oh4Yc3qsi32Dq9SoGpu6MLxjVA5aanT9WJTpYnEPjZ",
  "key45": "5SHZz5rTrDo96STuiZ7xrW65996AuMAzetfQfHacAN5fsUdNXgAKx8FXNK1eSpoirKP4CfAxvU1bvG1PiDEvpyk5"
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
