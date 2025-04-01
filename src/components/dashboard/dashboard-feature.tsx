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
    "PENRdLJmjs9uDMyTgV4QSfc7CzzTVAPM4YGPAqsLUwX23RpMizwkQKaxDb3tQ5p5wgr4A1R36K5V2kg1TaV5HE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLdEMWzGrfxD2X7fknEWTVadMvcgcFfYcb367QirCpSRPRz7M7o1wM5G32rRSgsLHwLn59vS5Kb6gwS3pw8UdPd",
  "key1": "2TnqnUaHJtAc5euHnsuPxFVPnGEg5sF9LmqqhCKGpiDtadfz7xoUP3BcNcpyJoT2zFGBYd18mDrGvsktRY2Ud4GN",
  "key2": "2drZpTxHM3FhD4hkFjovgL9ph7E8vQWEDicVthQoCxfamhiYb2246DWhQbdYCEdwsDPpGCn5fJf5jGZXaRZuNnLq",
  "key3": "bjhhTjwk2b4Lvd5kt775rd4ZhXyR7WzoJhsAvZH8YiM7RH62Es8dPMVjgG3qDn5N2Cd8DJewt265W9DAwGCyNib",
  "key4": "47ZtDecLf1REk5V44omVxgJvXbQGYMSaXCsR8t6rufGSAJTJRaLL5jUge82ZbBQaNZrmzgowmiKhK3eDuszTWv6f",
  "key5": "5S2FgU5AC7ZsdQJARzPCfJ6uRgWmDsxu7f3pvoh32oKS9tvkwmTRtuoYXTNJmpfKEp3AJdmg8LLVAzuMh4iHwn6b",
  "key6": "5rTYWeK8Q35F4zc1wmjkZ5p1jSTy8LRYMDFWepnvnjjUJadNjfuZeY4Hx4gxkqMEnoHXxBh3eEDnRe3PPGMiRE6p",
  "key7": "5Ncitjx8nVdx23JJVSTYJJfbmANSm3277emLW3zSQ2n7sCVS2SMtFejZkmk8UHKKtKNLnddwrdUUBuaK8JrmoVkg",
  "key8": "5JBLpEyFQNZ5vBxXaKab5NLbyjAsKkxir1hGLRNykeUqTRXzzsbQfQRJ6jhFJs6JkMbW3CTAeuvGraz6ZXs3SNBn",
  "key9": "Fv4J8TFBP4DnyVGMHyd8cZEEMckt6EXujvvtqbEiKuAE7aPTy1hbCTthspwimJRH4bYgLyNKDaEmuP3osJBd5D3",
  "key10": "3gEuZpUw5Yw2zJY5EcE3BzqFrJuNcakadLcZYuojDnm7uuz1r35hhhuwnsq7169LKAEtfreiixqouBNx5LVwfeN9",
  "key11": "5pLmorYF8qhHNDcJK34AqREgfEzMsBx3SDLq2NQtbYUL63qGMMU6JXSL2S4gWrsznBGcUwzhH1P6Ab2dAjpDDaY5",
  "key12": "4YzRUMRqZsFr2mJ6KXbL9tAHP1PMWQK9NaRbSDcurKQJKwxyDBfeGuh1HJh3zYnknNL5arSCUtHniVe1e3eF165x",
  "key13": "2vxYVn2ZizU4xkSFjzQFZZHrh8dhndaSr8qTrjjCXvpy2xKXdaU3DhyZfF4P2LDyqAwoeMs6AsqUS5YmcLwZHxDD",
  "key14": "2iUregjvvfEhnMEZid78MzH7Wc6Si8fsMbiqAF2R9Y4rfGrLBekzNzhmNvnvLBg7GF6Hhb459SherRjFnXKuocH3",
  "key15": "2nhnxwbBWjGWWojuP1wurgrXTscYk58E4198zcMECr6fda8aqYcn5uCxNRSHdR4zYA8uNEaszJLLNjvFrFtkerwm",
  "key16": "LpykN2bBY3nU6ukxHvWgv6p2wCWp5Q7Q3BbfRQMARFkf9n7X2wGUAWwQGb5xsXLgjHEGyUgA9dE3xMsDpLdTHj3",
  "key17": "5qB7WFvFwA8feBBQm1HNiiHuZi44tAbrhsQG4qrgHi2R1LrQr6HGyvZBW4XoLQKzwiH1qYGs2fD8KzhgdjETEu4E",
  "key18": "mYMkyndBj8LKc9jeiUw57TfrobkzacT36BkHsuMsRiH1mkA4ANeAUyeHeajE5G9ChDrGtHTnBRfesiFTfYndmfu",
  "key19": "49HAbs1UZmwqVW9BQGYiSyGE9DtUzuQmubyfonP1fUgU9ekHbdUVY2dFfpkwKppvHm3DXg7VmnpzevsaUgi8FzWz",
  "key20": "on7mToQpajnwknm1Dhhi2kXMhyWDmhF1oAJhLRF6cALortyxnBMbT7wwp67TRXbc8AsPQvjH9HiLmgcUgATmYXb",
  "key21": "4YAS9GKoguTtZMTmkudNTJmacjWSXXfUmiJPrxbqCKNYLQTHXsWGj5KsNxfvQdbya3ZpEQWeDd4K5XaTGeVE5nP4",
  "key22": "2RyVffxQTzUzBardd6qqY9QBykuGAK6gHTkrrzeiSvvaXURUhvUDCHEgSzwdysJHV7k2DFh5tfCUFAs7XbogWUKb",
  "key23": "54Fab6Hpi7nkVPQ6aY3sYujYjJRz3oB5juASL5mhdwKfxa3hUrB8mf3ci2X72PPBqAY67WhJmxTKZtryUpjTrK8g",
  "key24": "4aR1iAPh7bjT73CPjgpKAFooraawRjnEPBQf6PjnFsWemsmUpaudxZRE2hTMVGcGAmPvaQ6uWX12RaLg337PUJ4a",
  "key25": "2e7FEfoWUfhzWnXmqMqDXPBFVcFqmYwacUsnHYaTBnhZQwQQFbKPNPDRVkALxPTeKxmQecjggEzN2TRH2Yyzivce",
  "key26": "66HknbwyxWq2FwqUKWrVbrxmzh2fx3ZNknfKMv9Q14jdB8SShj8skHMyweQnW267CNNH51snhJCc8Cdph42Z4teo",
  "key27": "4ErPmtC7j1f8m6b8RGCSwPQXegMTxgekUkAkZ3hakZKqf1QYkYNvxjpdu8xxgfPRFseiWH5ZaBESyxiFeAyPMep1",
  "key28": "3uigZ6k5FdqRFGf5rvKVsUyJGjRR2P8zXYhrAKM35kxFPr3jseSa6bMQ7JWJCencX9Qpx6hLaT3K7HbWGGcRkc2J",
  "key29": "SciKpwZNsa48fKHq1zv7DMX7r2MkamH8jWJMDhvR4Z6s2yhVf4nTEuUXF7DVYdk14y6QRA24iPnvJQmcUcDttbs",
  "key30": "3dSv14raaci28fui3EhTRDPreEL8sWZo44t3gdmpjvXtAKJQAfkPfo1vTDySYZzv8ZGYbD1q3NMsxMGhPX7ZYJWe",
  "key31": "22UaiRg2aRJwHHBVCnhJCkPwgST9jXtkgn5DGyWRHsCaPVz3Q59jAay9MqgTUHcnvowLoEJ9TVQLMD17rqELVRC7",
  "key32": "4oicyN8K4WDYX12NFJQK2rWXX4KeKSNG6tgmGAwwJVSnPaond5ifaFsr6nSn1kp5Cq7gyRLkfZqTqNjkGN3i6E8M",
  "key33": "2FLBLSZ4YxV26D4F5fbbqXpFFJzdGzY3nPgQBtUr4afvMguJXQLa9ayM1f4vCQ9SJb5Aqi3TjeT3Momou4GtsVDU",
  "key34": "i3NdfDTQS5TKuu6Yr1v7gBDh4ugMFjUc3pDXSdWdPJNYYSuXXKLXMTxiT6CCKcSPZ4mqA8QcrTzitgHUbfL7b2k",
  "key35": "3jg2V5fiZi4vo4tHasi1vgJeC5iAAdAZWFjjYR9L56MxYw3vX68ebPRDbNYhcUiPdDdGCyq8qH94Ra751muPnLbS",
  "key36": "5fBxfS1369wyK8jB7iy3H8DVz6DBrtJJafpMreLZkLXSPWL2RAXbnYB9wYdbfMug75ZSVZyiuuTSzzwbhV7Uq6To",
  "key37": "4zizR8GhiftQhYy5bWepDjWQLhZ8PDf843nT7F1ZxbddPU2JqjAMiwh9LZYcbJHbF9ueN8AYuFiMctfmjoXCSMju",
  "key38": "34Gys3ayH8uFpHorShtXuaeYJKLZ6DMwezRXZddrtKcN9bvteXgRmFiL4mVaYxEL3qkbU4467SaTKDbHsFawdv5p"
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
