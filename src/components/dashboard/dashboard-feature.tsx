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
    "vxjbK5C8xcs14D7HKbaqjxXMjDW1mbGXPNcPfwHFhLoLhw3mUyfDLJoYrRjhFxpEkTiD451KhrtjooPJ8WEVpb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47PDqYjQiHxDoPVvfvkKFeMjTZfscxS1vA32HLAinazVphQg6adTzZ84NvHTQWXV1w6wbJLivEfVWt8uLGEmtarj",
  "key1": "4p4S9zq3S7sxFoNJnKij6chY4LA14Zk2Wszdugd5qArPN4v384EiGq4LYBkuvJQ5bGT1Xxz1JkBt6mrV1JDR7xZR",
  "key2": "4XTSSpa7MEo2MtNNnjH47LocgUsuuLW9vjohjjyKkGQ2A4QQDxmrnmdCBYnSHVVcwkezaAqHYoGhXGb5gjeWM615",
  "key3": "2BaAvtofd16s5rZW5BURCAG7AmacTyvgKCetdpKgZJ6tSjRL9tSvskqqNF3KfeMMvF3DDEEtiH1ZHD5a3BNCcK3n",
  "key4": "2F16M7xKuayrkvNvhh94NVexiRPqG2vDZLo9zFiyMwNHaCqG1h5nLrWXGiNVgD1mwwAhyP19DdTZpSu95aRuAGrV",
  "key5": "2bZCfGTt9TuhFAWDbVdTXHSR8aiHevRznMgRMpAf3scLkDWHYjDNvaoL1txa8nUXEzQPUar2D22dUcKr3u5B8anC",
  "key6": "55mMYCjgoqCCTNgbFGYBxFQYapBnufR3gNcQGUkLNFB36Tqjo3VsogxpZd1W3cbD5KjjexUngc52CJzBUmMG5h19",
  "key7": "4xSZ4RrWAPavTq8fdNELa5RYgdUTYisnFS9gwJEkoqnVx6CwunfYmTfo85V5urUTDWcH6KphYB64nut9MSJewumH",
  "key8": "gsHhDS6SfayxA92yCTf77wn3PebpaZeFUu2LA24XU63oU4bZsoX8cxEfafA5gp4jBwxkorktc6ZznD1feD4GkvE",
  "key9": "5CymMDbTHLdcbSrRqykMnHVBRF5aH61G2rS8svremvjR6MAh61zAytG7JGVEnMK9YGyGU4jZMf2yjB7SbJidG35C",
  "key10": "2cK5QTDcg6R1oxPunSvf8Ebp8vY29rhytK3rjn1ZNgAzSwP1YGtqMQF5XgAvYdq7nugruSzfLh1ik1W5521GF16s",
  "key11": "3UZ8NJfqJ7P3JFgetR4YqQwPrREpWkfxTwZTNRWsoYLaHEzCrz3PcQ7ta7xiEMftREEgLwH3eYRDYR6pVt1SWCjb",
  "key12": "2WQRFc6TNSYeprbLNSrgnXCrufwX8X3TgL2KwKvVP8wgMQTs7R3fHZcx9i2QBDQfuYo4gP9sSYawkvEvtdWnrdc",
  "key13": "FVVHxbTvrPAikxoY8XrWydxgZwCddKLf87XYcyXBrKxc6g5yXox8XAteLV29T134ZGVvmKfMiMNS1CyeLRGWoWx",
  "key14": "4No6L5womLiTFuaYPVSCmzzpuvCiffSTLS2ti1LnTEJzuBc15CDWhMcfT3JJmhkZdaKU5KqdqRDQPUs7EtT6sbm",
  "key15": "4Y1A8QbGPPp4X5pSvmpDaJysA4cppJFSmKH27Gj4R99VYQ7Zg549u5EAxmp69TsJycgqcQdqSGPpx9NhnyXrbend",
  "key16": "LGrRNAoqq93iJpt2SstzEJ8WPKMau3MViQ6cKbUYgA1aUmxdzHSKS3pXWH8fM36RyxzT2MJ5fM3EHPg2vTJ89jr",
  "key17": "PPbjmqdRAJW5XJSY9nqf5VeM7UThWEwC9jZjwD8dpSZJUY679hMoQ94Yyju9LQX3xmHykHq7ppXYZwGnujeEpuR",
  "key18": "6nYX9pBKdYy3BssJC6VjiNLLx3BQnFsRJHHoEadDdov89MEKCXKnDZWaRthsS5mvxXhVhsDzGXzXJusWDP3JqPU",
  "key19": "4o26MwwJRbZoJwZC7SjZpadXWFpuZj7PHLfeGMP6P5UqtuC1YowvdpywR24HannDefKDKkzQf2RcbzqfN3jFTB4D",
  "key20": "3BqpKkej3tv5BoW3j7tapRbz5M5V2A5RkNgJY5SS5JhmNLSEGNgVrxjykNLMrse4LbBsjvF1vkQFUCD49EBpPfqb",
  "key21": "4dc3d9czcatxnxZ5qFoZGc8cMTCGrfjHVWoACnMdfQyuPGm2GerNaAfkqcGoGMD2rtZgHqR6ttM3ePS5QvtorPiR",
  "key22": "3d9zvYJsMnC3nV49V2K59aUQZFj7pmoQWcLVoxz13o9CYEBwCdSek7q3t7v6GWvMcDVGSzKZRDnLiWFP5UNUBgji",
  "key23": "5kWN3cb2xCB6eWSAhGCNVmXuvwMksVWXstvH6MNaAJyZvPEeSBpwqfkE5yyuLrSWHjxCTTQ6tdFG8Mjmc6JViRSq",
  "key24": "4Nj87Wcfp49YbAhxR6TRtcncurUi5whoqPxSHPR1Ed4sH64WUnHg9Lfg5Um85586RvKd2N1JC3kB85NvT4EUqJJz",
  "key25": "2iWAqRzYzGstzXfcMi8gFkozcLeG9owmej7M74quVpG37L2j6vJaFDR86QeaoYdhWb8G6KQgoFf7fpnE4EoSroea",
  "key26": "4xhBCnsy1g1Yq8Rw4JR1XJn3odULZjbApek5jgMcqETHP3jaRftpNajc1osVRDVGCz2GqDEepEGsf9fC1Lq5oPkS",
  "key27": "65oyXeANpJCUgsE9kcdnjuqz7XqEazykH9i6GiuvZPWzo1BAcAPXXFLzAtYWrjn9S8hWBr1gW4F2VSmMcdNuqNc7",
  "key28": "3xNhUDpshm6KSxepTfh6y3nnwJ1qFJhXvP766CN8mgJ2Je5FrKTPT9nJC87bGRczUy3iYA8qGrw3RGQmYpPsuPCy",
  "key29": "3a9jytBRfV63mfkvaNaWihunjGUVvguzUX9my43yXXkgWSocDzzV4ixxVKnxr3m1xYPX3ZAn2S8THVC1nrpN48HV",
  "key30": "UmA142cFhJrDtSjDss4eG47zgifB6tLnusdzGdKP42QmAfDMBVpc6bJJUqDV46xbvvv7d4gU2QaFnaRH7wwet5c",
  "key31": "5AyEfgTrpnMrCQnR3xgiaCyAXBbbP8i7BEMFH2nnXbrptfHSLLoawMd2UQECLFMmrznaqJHgW42u7wtCRTSLdjpc",
  "key32": "4kQHYsivGDiuEhqVpByNjcYxFByAc34VjpwbdvNy78fSURVfpc9nzCRRKrqX2RQjfDVHkozWgAeTvMviE3JaJj3p",
  "key33": "272pwRL2q94VgfFSzQpno5rzHevMhnuZLsHefqBZxnnFh7nJJjJx1JVkEBc7P6rXLMUvUvPKXQyGVyjLFi9DdLeC",
  "key34": "4S7Q9uQPo8sZy59CUg3ARr3ThQrgwVtcJY2qBqv3NEHzMcKc5y66vDffgrCyPHHUHEYdZnJX4trhUcYvcok5bX3D",
  "key35": "2SEPvXD3Zt86Vm4Pns46s8a8h7pFdsJsrTpD6YGAVxRoJGGKk1MC6NcKd1HYWibt4z6EMrH968XKz2cC4S8xoeb3",
  "key36": "2A6Mv5QPBcYfwD6npHdSG63sXnnPukfqC2eqjw5WvKK4nT7cSmMzTNgqy1hcYaVTXeEgVSuT1aV9R2pRXh9nN88K",
  "key37": "4obMbFkKrzfCGEVEBMAYnFtDoaz4NgExJuFSP3atUhj1Tg54ifYEkXiZgvrFS1NtTMJrDzCERFZQGyDbY9WX2h2G",
  "key38": "5QqtsX6Td4a8FRCftBrnYTz9PQ4SWTbfT8mKd3mcnz3kEbMu4iKjzfXUYFovpVdMZrokXAdYa1P7VZiJaPDB7912",
  "key39": "HGWCtXaJA7rvimgUbLrYt8QD5eobaChVT5ja9WgnRYhhtQ5gxaMsydBCNGF1Y1xxe3ahkLFdMohhU9nqjYGVys2",
  "key40": "FajFx3WbxGcQdecjqzv5QKt4etmCrx9dNHkYa4atz8z9vpR4D1VzfcgwZwte9NkADEmLko14ApmYHYfWaUCXPiq",
  "key41": "2iAvSBsp5ZxKHzffubboUoqGjjF2WvDpgDgSzrgVhKCydjiW9T8voiqWfUrYLbo99PhW1fwUDBuVMXhVfMDMUT7B",
  "key42": "d8GYSDhfvMbwkWi4axTed7Cvzt1rYSE5mkmSAfSomidRPQhuY7cvfZmRVqnSPYGL4L4Qw6hWfhiPCHGb2nvFRiv",
  "key43": "mNYk7pz5Z8RVnY2KDZa4eoJ7wACTFxhAWJN2pZvS4KXMiUARTCeLAnAuAWs8YpHTWFux2xpXZo6nkZ8TPfFFMJ7"
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
