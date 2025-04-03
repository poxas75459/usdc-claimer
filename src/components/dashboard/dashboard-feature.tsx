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
    "4mpiFTqiheoain6tYuNnn7LaurgtEyDrjWC4cS1MJyMCsjNKA4QaJNcJWpcn5xVNiKjLjzaCG8cmApunWwAKoYRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ysYjiiHR9jDec9TNx6vAV4r295yggQmt9sLF9TyELkoPdDfKmiqeXTAYp7p7ooUBtepChVgC4ZTnVsvPRuQY37z",
  "key1": "5A46evcuJESAysFDGtXmm5YGbeedcd64iBH63yhubwdikT3bUj2eUVDhen5VR2AcqcreQnzzCybpd2GJHNMBp619",
  "key2": "5ZBnE6SWTTRdWMzMyGn9e4pTpW1DYVJsdw2EQdu88M4GBxjynLCTMEqePWhrcTteUQtmBZvUwtmhdLP9kW5r6bQt",
  "key3": "4MD9UKPxfQ9U1WWbLCj4haTjGt9zRxmUcKgRp4yyVT7ts6gBxHjrnM4shfxdLyNWC5zRZJZSQCHJLhHry4Pt4bhp",
  "key4": "4bMVsJ7u6GKWSRGMow8aUttiF58oumowuL8JV9XNWJWW63vHqwxptk8dNCyCYENSkuhd2113e8sk7azPkkqEUBaA",
  "key5": "29KNcxGqfEvXxTUmAAzr4VmZkZGk5F9LHjCJRbgCMXe7AJWTLRyKZuzhdoKSBjodNaKANdA8YNHSknCQQtWcagzY",
  "key6": "29AAdRmGmWuuxyRtjDiDWeKD7QprumAr7y741NGBw8mn2Vx7puQvAy5EUpxx7iadrp9sgtRSRkvj3bj3GjoubShr",
  "key7": "33cWHLHJuXXrJthk9VqdXJjvcTWdroTtKuejbXnwVwGzkR69a9MtfMJG9FbyAQ47FpcQpDNr96hGvk9d8NURRrv1",
  "key8": "4QitP4RE2W7JpWPJ9p2BLFsi61cLxnJKbcpMaZ1QNut25jhow1ZfAfvhNpws2sRfyDZrGuG8QWv1Ykao8PKxNDX",
  "key9": "3Ncp4zyKnuPrp9NJVbD8utX23vFUH2DTEXMxuPMVFFMB4FcAQvSW5R9kxknpNi7d2FEoWquvhTfyRBgwbefWHVvG",
  "key10": "2yoJ1Hd83MacVAxhQAXD2GD5q8FdzxWmfqkmhCFF72CQfAKxjctDwwDQL88Wf4gAAPaGeGt63hFBqgYDQs7daVtb",
  "key11": "3EibpLDK1PY65My6xdUvgjbdoe8fPHhicd8oW8ufpC7Vxa5zq7tk4eArQyNbiDQmc6q3Muj1McTLvggrdPpCkJek",
  "key12": "T2Ueo8NKueX3oyRvUkSqSvxLsWZ6Mx2yNszLvkH8WqnUcKcQdMXYYD4g1Df6GR2seT75b1P7rg7xmVGscCzUXcd",
  "key13": "4wjJLMFEaqrZCMKn1s9Q39FckvG8rze6e8bTTZwAV17EJghPByk39zG4TNZvfcE4nfCby1TGHGnaSExefhr7Z4i3",
  "key14": "3NgWBfYmMMywGgzsL2geFYavZYcWywiodR8GYywxgN2HMF8HWQWpSnt556HkKBvur9fTZCF9gviZXNWHMMpB3emN",
  "key15": "3E8BLHafMNDqqhsaWMfRjeZjevFdFYGBfrU7xSrgi3h7dCyjYLxZBBNThjM5aqsSWcYcpCFnFyuRxp5iJypWKkJX",
  "key16": "3ofAhHq8H49St6Bi1ZSXPbbbpSgjDR7WAszJBLrxAWF1MGMTzL8rYWCv7pyUFbXtGpv7DbQ2XN448ncq7Uj7zTM1",
  "key17": "nH21LaeNY8kTF1LK5wxZiC1JEH2Nd1paAuEUtS7umuiYwhL72r7yyZE2PH4JQvjSQetdyuPevuP8hyexDX4anzy",
  "key18": "5dxp7rXKKG72N9Fe8gmBiheMeJYU4exVR17ASk152ySuS82woEY7yeGWMayHFsghJnxBCtg6LteVQDzy1dACgmLA",
  "key19": "3iXCZewJE6pmn5NMrQRAhLbsAhmhJKKf2YXto6KMQuFe4exngSAFVukLF6voWpokh4uV6oBqoHZoBkgBuChJcKzH",
  "key20": "7hpHdbuJ6EYTdtQAZsXRZcXUwFqGK75nmFtYt2XKRBMEqUJCEBqQHkpN4XuuC78WgkLBCe7y93SMNaxtkCYfRoK",
  "key21": "2493bmopbv5Cug2tCce3ZHv3YuXwEk5UKfd1C76gTjrYYur27EZJX5iiCzDLsShjUGxfXHnWnJNarr7u93Wx3jYX",
  "key22": "2DrPV91AJeDjBKSUfpcp32aM6EsZTNwWa4K9bZcaN8E5pQgNDhp1SApPTakSxvysJBpMyvWP1hBZiwTm7DPA68NF",
  "key23": "2oPDcbWy8WHpUdtZUbjpyKhiRA3pjGesoEyqRE8UShGvaY24CTwpF49zMrrj4g3AAP4nK9vmYpJHcd6vSJiJZt1f",
  "key24": "rcnNXHR8PmYBKYBSAncs5QJ6bn1TQ3pCGYH3bDhngQpJJ5TSQgTC9qw81w6nTrk4x8RkVpf6k4qdsQCBVLkK12U",
  "key25": "2DnxAZHbU8hjPoA4zGWweC5qwo8kQbXZksYMP5ufEG7hRCWnUG5ngqiYKugUwbZaM7sVnKSWFrCn52oRmkthjwRK",
  "key26": "3Nd2vKX5x2x4GEo7tQ8g5CTKFJhkAMZdC7dd9bahJuF1DJ25CiDLoPRPknjrQtuoukeytDJdcUNqo9R1ADQJRqfB",
  "key27": "3tWuLnpCr5B5UXZzoFvmYmwUqKmh3Nvtea5WJrUJjvpBYvd7Fk3LxpKhMmdGU5xKZqMVSvQPB2KvmeViyTYqqMxm",
  "key28": "4G83rnrizAVFvJoXP8yqQbXEGyDLr8uJaNZypCqHCN73iZaB1siqJCxpqrE81MUob24zjNVKxFApr5TZaMv8vzGN",
  "key29": "2Bj4mZZUrogRwcWGnaeGR9tWHekaP13JBmy8dmcvhUbGfUz9ZqJfXGejxvMs8C6vJGqoREzZMHryifHCUV1yHFnZ",
  "key30": "wMAEn7QZkPnu7uYXb75sh2cNL4wxokAtrXWRbm5TeinfP54sKrBrWRW4ZR4po9tfEsqQWuH1xKMmSGYB6mdP5me",
  "key31": "66Zai2sD64AEQsF7WNb4hUhfFjM8wvRj9CHz8LuZq2uUVfp6n7fP73o59Y3erRqy2bpnvxP1hfMef1hQ5VRNVSTd"
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
