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
    "3TFygDcf9qBv8HSTQM4VuK1A7kL7VshUUoj6KoXDa3rE1qEbDi3sXjzxG9MToyiRhDZtNVFwsmLohaqPD35iXmGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fSeC4cVxAaZp3JGhyFDycPaPnSCA68bKLgofivwgrJ2X9iUHzoSFqsM5QteSzGbDbKACn5KMYUXhBRKBwJnG7s2",
  "key1": "5NxuvmUCTBZZM1SLjeGQewmP2BqnqCQfAC9HCe5NiSkwmDwcsPZvFSnEmgLh2jrrR6sZB2gUCdioGTfaFq6DC8xs",
  "key2": "3xtbhcSDuWFMgTTYYrBHF2gGXZPx2U31Uypiy5Rm2pjy3eBrxkb9rq5YCL1kr9wgSggcP6z6zWp3P2y1A5iTzBbo",
  "key3": "wSkT9V1mmByhsQonXua82AvtiPGhLk4C3HPKNAj4942jCP3799Ke3u2NxJok215dErbHdkK6gd4jhnqueEemRsG",
  "key4": "5Kq6ERPLxy2D4nA6CKQVmf2vgEhV248XcSRBh2HZGyoCVV5m95viDcRXNwPoJy3mGWz96RHKXkhkYzpBZtsPh56g",
  "key5": "24DRAzxz3fzmNtMu4p547bzVkjZSy8bJzd56HGCVFKu3HVjX3g9S9t785Yr1uqKZjeWwfMptW3nBopJnA9JCaAyh",
  "key6": "5mAVXjYJtoTm9ZMD1EXBcBU5dNy1JWjQmwvvGJ2WUx2Gn5ssCyQ7tJX5uwy9K5bN3PkSfvURvFxLLTx2LTvfjaRv",
  "key7": "2rat44TadE14CSfMra5Ws96TqNizjuneC5ZCwKEkQqYcFwo3hvoF26brj6u2VTZF2J17LRWtpy3Nn9nAicQh6NL5",
  "key8": "2bRXhRKxeLMgFuAQEukc72zwqu399h3NwaLm4r1SKVkRqAENTz29dvV96J36NHD5PKEqu4ZnjVvrivviSmjsYkww",
  "key9": "2xeD7gMhmrBsRdb1YGWsNVxNZnU843fgii6H1HySgXRmW1Gm9KetbrYzxnZDXJws1u4pAU5sz3awu7r7J9ZLwqji",
  "key10": "DyYUJNC8vwnTv2KMFNNchSBtvFRnnz1gLu8qEo5twfBS9Ui4bcWj8UXdx8n3YPGH3HNhpMjRA164tBEMbzpzevs",
  "key11": "5zLefDYGujQG9SJDd1sbwjFXowaBoacmxqi6veTjrz2bPm8BsPKG9siikcLYcemzayUmpg8bnHi4tdgfhip7JCk4",
  "key12": "4uXBnYTtgStVZknVg6kmLSiFe3Lcg7fxH7HCCiWwG5B2WgEfN9iDePH43MsZe6AWMEG8K9NpYEPnnU8ViLZnpUbH",
  "key13": "2oEeRbsa6P65ccZGkJgQJcAtKprtAiN4b9EfXkqwYznePLvLh94jJQSH3Dk4Jm2LcHaCmisYQyadCDCRhqwnsbkX",
  "key14": "24kEhCD62NvthfSiDbjQYKz3yuvQ6x3L5mmX5KmXz1doaydr45wGAER3jJopTKfuod2HxTLiBBY7HbExnYM4CiBE",
  "key15": "4FKtqAuyQR9JMfqgRerQEqvp1hqp1AgbEmHBrmRv1pVNdagCCeXPmhkVMSwMCJVPyzJ67V3sg18J1uuoiQYA7GRU",
  "key16": "4FSkJJK7ZJv1NyPwLp5JkPc1meGvuQbGiLbXefmh3YBo4bAdtoT33UafEUsaugLtBSwqtbkouPBrVfyn3QXRE6XN",
  "key17": "2zJVo2EQado3Ew6WXBXope21ZtGA4oFqtDjmGWKAku96wx425m67ZSWwBCr3MrvdbUqn24CCHyPGNGyJXsGyxs3w",
  "key18": "3yAV6yZQobxbwh92cptfvEBXogMNSuARM6Csx2mW3jouWfrEPhXvSvBAQXZQ5srxrrNkaVJRZvyRYKfZqXFygK1B",
  "key19": "22w1kKxHrYiKq2GZnEjLt73VwziQtQasqa49h6fVZErL9hYkdaUtueTCjhLBn6FUVy2YrCSYh68PDZRk7aNxFRae",
  "key20": "4etNVPCawfyFLDF7dUcbb9DzuyWFUNTv9f5utwnhfzNiDA633g21KDPchzLygPDzLTJ7wqwLfbanbN4fybvnpSJa",
  "key21": "3bBEyabsAd2Z56YZ3XG5QVsFJq1At5wWKd4EZtrWrfryUtgU1CF9TbeYxwpX9hJ1dRhNm2NwnFs2hfmBMDzEi2p8",
  "key22": "3vHhBScFzeKZE4MuEH9GVj5zmFdMDSLbtKrVMod3QidwrQMm8pzq7nyxNa6nHTU53PWbpPW6QT9RM7rSyYha1Ysy",
  "key23": "54N4DA4vcXc9XZifYKEVdDM3xdoNSFG3XWfDuWXmRBfetKunX8b5DkxFm2jS9QGWYDZP9TGxW194jKJSc4opmsnN",
  "key24": "2opwgXDDUtUcvum7KmmYqjecuNx6YraabtxvULo239dQdA4SrKDs5z2KbmgvvoKuAZP3KRPxpG9EK3pyo7vkWxP",
  "key25": "55DBVjH21mbkRpkyyFi8AdWVyb4BEgPbTCK8VhphR3NWdkLoTTgpuW4Z4yt6rwHfuirmj7cXhsCH9rSXoGWB7osY",
  "key26": "5KARNRVTkZJNcAr28dxngqYEWq25gkVZeEkDBYWgPAanSer72orZSoPb8G7tFmSWxNmMR4BJRWwPG2sW4sZ8Rhjf",
  "key27": "xrPBTdf1DgPRHKYAWoELZiP3Bf5JGWYVzmFjcwoHKLSAz8F57ZSgwnZ2quXH6EeZfRhCHBUqSaK6uCdC4b2pCzZ",
  "key28": "5oCd7tJnKoUSmDscprQy5SbJEbCTQtDvjEhQ4RARYMWkMaULxUHj9gzSkxbNUZn3r8kWKEL9pN2F84Vk2t84cbUq",
  "key29": "B9SUzwRXKzqi4R5c1daTb1ahLY6Sa4fQeZVBofTdMKBwfo9C3Kox3WGmrvuwx256rF64hJRS4Fm7EL27rPEZG71",
  "key30": "4BN5an17SKezoy3UtxU6JZbR2iK68K77oxqHDmpqsiQv2BN7FsBx5rpDgeAMicEywDneTUC7ezUCLV6dqomZ3pXE",
  "key31": "5jrWt32Sz4436dK5CAEq8BHSbz4yfCCLuWkrrgG4ij6HhuUEkJcwqoaroHUgcgReixij3oDndrA9sSPHqTSYujot",
  "key32": "62ndxBU94gwuKT4uKGzLhnNvp8wFPp5FfmisgP4ABQU6wEo7jCj2ynzHHiyPtC1QiREZJpkYLgrbZL8amwrWUyZo",
  "key33": "24toVg6rEvLymkiWF8NeeUi5moTERgDyFD8BKGK2wZDXU9taRP7Ed1dyzujAyKpcJdfHUqCUgTgpk66RMfvV3SXJ",
  "key34": "2ahJcXXhf6a6j3CsWCuVgFA21FFcz2C7ft8wjnpmrM2m7sU1XwKdc7QCVewNeUY2sNkoUGAwE1jkxxST2VK26r7u",
  "key35": "xCYw8RXMm5HnZukv5HTKTfycvBPQ9DdoLjbzxL2BjrZyJ3DpqnpcGxZHouEUi4wfLRPXWj23NBRLifx8rLvYRcZ",
  "key36": "aAy7m8RNrpBJUitEqCJ2ktLn8KjP41jcqxkFGGbNr4CMDiDssw5WWHVe1ncKf5XvQEugzEEXLiauV5hnGWui2bu",
  "key37": "8QJ232xP3mYqzZSPGLMFYyKgxK4Kh3vfQUqhRR5dqvGaeqEws2Rp7AZoXfMGCTnmcpE1nckx7yYqjiunuBmupCk",
  "key38": "3vtuxjaSvNLDYm1aRrTruxSF1PJs4tPfbxFRe12HAsm85KNhhqz6dvnshXTyiLm4dj7gCwtetrQk3R1re4K1k3Cj"
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
