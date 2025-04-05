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
    "61FZrvabSLsNaebTdybt4mrDRp6JUjCkwoBGie5bfc844cf9FVKaEUtkGSixQNJwWZNppkYgrDcrbq8DKg1RGSoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e87WnEd2RbL32PAfNJDacv3LccVVgCHG1QJupFdaLxpxrBpyqCR6KJZkhUDxHYGj9z2EHueeYibdmoBigZDVQnL",
  "key1": "4ijGecJN9Mt5gaZ1fBF935gjBjBoY65AdZcz83JPA5NABbmwnJqVi7qhH1Au2rTfa7z8qxd5gWVgrWJ4yAcRKdhF",
  "key2": "2iJPmsvo4cBAYKEerupTbR2dqdnZEFDRwg4KVtwu6i3r9gcvFax8LjhHwQaT9UBHMFUEp96VzECPUm8y9CDFN8Uq",
  "key3": "3AeXFNt3CQ74N8sqXspPNtGYfuWHuToaiNMYEsVCftdpDYRVs2zfY3KRiCZAYSpT7wogfx8SGhqB9QHrQsFBwM73",
  "key4": "ryjSPLUzNWD7tPR8VHjmjf6tZKB6iNHJajv7jzLZCLiwoMgGbWHaKV4NcPYfK9t2ret3FnaqvatX6nFy3g1w9QQ",
  "key5": "224iPRHPw55pmqbTq3DpWocsRwPMaiNYjrzXkCZX3hjyKNy3kUCNJzWiPf5KXSrSPeSxVLU8RLwFPMqY84nuJWja",
  "key6": "4cdSG2JfeX1mnQBKuwoij1AjV4J4Mqo46s8dHyK3xejBgtAPmX2U5vFDo8h3iHD9jR5ukmgsTURC3SuUHHY5z6aL",
  "key7": "8g9GgG8pbV4FtR752tFsjRuGsRNmoH9HqGjMFmDr1rN9cqUGvUrAo1KhGdrUV1psEo7ckcAoAyapSHeMR7Nohap",
  "key8": "22unQqjb6ZL3uHXFMJSz8gBwAs9PHtLALgqWD71BJ9g8rnFxBsAp9ajstus7FDgrUb8h84yjok6a5mQikff1wJi6",
  "key9": "465MwnCKza8icxD9Q5VBdhLHDiUvbYGVqeFR9D45tSehUtYHWw58CzmSbG1YduA7uCRg1HK8R1avteV9BEH1wFGg",
  "key10": "2XyoxT4cm5ee6UfA1MzmEKBio17A9YPZ2mcywH4JHJQjKhpUoCP7z5v1Qbj2YSA8fethnosyC8kGYzYpQeHUz1XC",
  "key11": "3A1JiSSFvdm4RTNv95wg7iqS6Gd2BHbJKF1amVsnDWnYfAwczPCJ29dYLq59n6FGimvq8FzQoDu6wH1FeKKuSu4v",
  "key12": "4xem9FSh1ErrnogkCbmGAM9PJxTsJKND8AN7oxW2vRm2SBo2TAgSrmXTwXGRvod9QrMmQyLBMiAEoLaoe31iRP5M",
  "key13": "5KQQ5DL5Mo2WNA6fjNdunHgfBuvvJyAJN757GrSsSsKiUHWL7NDeevsu3AaPUQDr1VEtCjRwcZmV8fowLaEcf15q",
  "key14": "24Fm42cEtHkiKEcPnTTw1eFkqQJXAYEekCTrR3cSTp36AA9vK7Ce7vwPh61jFAf7kMeUUes9Jx9KbW6wMFgEtLLW",
  "key15": "4YyNNooXwKcCrnhcZzz8k8hdD4nJNdHqvgRYvipbCY3icrnJB4rT5zSc4AHBp8qQhDjqx7BLrXWTdgWFUbJzQ4Zg",
  "key16": "5HrkGJibysTnbqTTyy1MrjmC1DSzEa8dD1FZdn75oaLCL6C3bUcdf2GrWHkDvMLi3ECkmCjVZfQakf5acTtxPR2m",
  "key17": "2meC1CFjJfua1117qUhaLA1X2LA6FZt19ypUjkmiHzmhvPX7YBGosEE4Dzd2tbA25QP6MnmY7PEUyYvMGf1xc7Kg",
  "key18": "2Fqb3ftG72W3Y2zzQnZe4QDYpHLp237xeq8NLqedJSB3WL986rzrtNDFngHidMxhUzv5Meav6XJPJx3Zu59LhpJ6",
  "key19": "2cqxWZjy3oqibFoXsRZYzXpEKFPxfUjMsvA78MP7naYiiDQnQ9ztf2XgDLDZ7xYs3myr5EP8QiaPH6vTyVVEKr1T",
  "key20": "9kWBV4JyjqXC76hZ9FputGL3gQTXJyVj2wqj4aeEm29eMecFGjaTL2ohGcV2sdPXsLjipnJtDx97JuCBsfs3DL7",
  "key21": "4gEySk11keLgwQiAb54aoxP8qdxtRxDDPwgrkT9VqSdxKfFEDzwyQqAUreLa9NfB5H2CKn8YVzABKBbRH6Kas7tP",
  "key22": "3TR6VhgqqJq5pGozjW8h2mXP4X9xR8v1C7AqB7c9PtAsZzERvgFj59CUKZ5vnWJPRUCAV7XVCQAcwtxFCN6eUnMa",
  "key23": "wT77LRanxxXBCVxCYo218NzEH4JYVyZMhmAchULeJSygm8oP87YmyQWBgNGDBc4s6u6WEtY9aEYEYyCUBohFV2W",
  "key24": "4AD5w2sHdaZywyaUY7R3kZiARK9FBZyqhYoaagcBvW3bJaKAcs35My8nDxq1CE8Zoy5Pd2w5LcFWsPwd2rccuZ3r",
  "key25": "26DvV7cpRycmRggg9BrTitLSqQXXGJfeHCkHJMCRbDHtsH3vd5ttMYmCue68i2hsx7qrY7MMo2NWLpHounS67MRc",
  "key26": "3dAWny2km47yGjVBATDhWHuonqNM7yLwLWXgb662oVuSd1W1MYSe1Y4niaapRotioFjsF11t2TU4MtA5wtrBSQRw",
  "key27": "4faKQWcxMEE54ouVaUTtpf9UGX5T6E7RzRY61ytrWsLq9LWBd3qFdydUdApGJFPW7K8piRUYvFDAPLxa8q7ijUD5",
  "key28": "4bCwDXv5SQksJUTsnwi5u4Q2sVwWpGXWkReptMLP617ZFsqX3a9iucFC241B5YeRhzVBFZma3Y61Wp9cHJMa6cDH",
  "key29": "9Rt3w14J3MTCGHDei52yMFGVY1Hma7UPKX9ER4T5cVirx3jzsL47SKNQjP69NrBZAWyvRYWqnoJnJq18jorZdws",
  "key30": "xeBVHjxPWFkZKeicfr1qwrxTQbMy3ZVH4nxQjSdSzh82d423ZZTHWWSrfWrSS2N7dTyHLsdNuDdYEUkuyXqbGwZ",
  "key31": "2zoYxv3cdmocFxZpe5xz5kNzveDtpgCjDT6YGtPdhp6rduanDrRvDVAQLiTNfj1GMMayTAqft6eeBgxYu9iDFSSo",
  "key32": "5C55o15SnuHd1TAi6W2KYbofNm8KqQuR8RS147tGoWfyyw7WfMeAMkuy3FG13Uh8i3YL2it2WZpySFeFaN4vgbFR",
  "key33": "3hcwoA2MigM5JnsoHp7wBJjPJz4wKzaRZ8d3BKNkviZpGx2B6iwDMhdEUnMPckWgZP6a53gzXmhkLzyvKXWDUR4y",
  "key34": "5HrswEe7soZEcEqeRJBhmHvcujxr72s4tvBb8xxpgdALX7YojWPYda3GYge5wpZXZJBecQg7xC3aJpo8bjnZzQiS",
  "key35": "TnhUgvVbhATArnNr9NPR5CszK2jQVEQgf6hLmLZQtaWEb5FMht513wtLzN5SjyuVa4setsn1UKahe3mhaMhZUst",
  "key36": "3FxpP6QXkjBuiQHvMsJkMNhuoqDwMRvLVbjofxfuRgT88UMPRoBRpJbPKGF5nyWD5gZtKYwM7NuRw3osE9s11EbZ",
  "key37": "5t9nqaX3pRvJCYvPUVSiqqNEGRHTgVBHt5qzCjtZZ3Dui7MGz2gbsjmSJuAmkN13PBHGCxVYT77dusC6GunqHenJ",
  "key38": "47oPvrRJssozUwVBZLfob5C975E9tJbXrEo7EBR4phSCkrpzp6rMvUuGnZFWeXwSfm8HEfcdANFXZcokm6Tit24p",
  "key39": "WTTxdRi9Lq2Q37AunCHZpyhvEcACzyTfr1RPpo3eNGsiCre5ztcYmjUtgpVvNWQcrcaXj89AdGMfbenSBQmLAtf",
  "key40": "ndZQmceEHkPtT4cLTiua7M2GfoUdExUw2wCvLSLD6iTwHfBe6JxGbBSHfdMgwsDenAc7sQoGfDpb7SSSPw9U7dC",
  "key41": "tLRaRp5y3V8sHQWC3jdyfiiyHgZT6HHAadK3TKPZxQFvGGBr6FQGA1nCpnng4EMiYwgQ8KJYPcLWn2yQjzVSdis",
  "key42": "LYVNGBiPc6yPdoDhb1z9KC6cr8bUtamjz7TbjqKLWHudBurp7TzQf1VKT63UMEyzkD9WFfzgTPPpLV6zMuraHTk",
  "key43": "4ZYh1mrQAmE7Zquo3H6z78J2VzcGUScAWrReAy3RvBtbg1RiQzHjcCZzCojqYe8twjqdGqszo9oTg7zt3tfPN83w"
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
