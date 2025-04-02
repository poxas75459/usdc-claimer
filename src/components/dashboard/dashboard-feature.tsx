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
    "3USgbwF1TneEMAG9hqUyFj7uxmkwbC22Cuvsyrf9e4bLqLavVjGKMc3qQG6ELXJhSjobLZizqCA9EpuLYeaLZGJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24J9etvEUsRmQpLAUJFWKKHWz62TsVJ3gZbFESfK4wQ6u9DHqGkikPTSKqDMZRh5yjmHTa3piXKRUrME8j7PnNRX",
  "key1": "5RSscwRKhVAJLD8HGHHmbC1cPF4v2geR5H7TMWsTAgv8H7hLj6jF23juJ2Z189u1Ht1R1TkFCVUn5Rdu2suuT4WW",
  "key2": "2wcqnXk8J5mrU3A3Psq6ZACJGDku2StZ39mJWjLf41aTvv4p6JZibjDxNTdVrEoTt1J8xgCtJkCuBg9k2zZX9Knb",
  "key3": "2Q8fDmcZQJ3TewSAapUTs4mTfg6L2yhMkEZdiGrmeSKAbnT17QQbNZKjBupvtMmfAZurhzts5ERXHkYR6BUrtsay",
  "key4": "33rn1gFAuihcZ84yNzJjmHSND3PmvL1cYMC8oNJFrUwqpuctyfLUfDNUbxXfyYazj1BvrYtVy9jF3idpdCdHjnum",
  "key5": "2PFN1XVbsqiB7bFMccRDqUAqEYk9BHpLyvGprSp7tGF8rrHkPpdrEERUjdTkGuBUeNRywYNYXHcHFVFvV9kFsHu2",
  "key6": "38kpgHqAjCsCBf5oDLu4kNCpsZxavbnuUeQzjnWsKJbJStYUcisBebgeMnBMPq34QRvfrahcw6gNYKYJrLH2gZDr",
  "key7": "UqR2u9XtuzURT1nuq4WCeLHE5L1wurpSFReJJE25ruDSpqGous9Wd3tsdgeoBARWEBeV77qDM3FUrBYpzqkNn2Y",
  "key8": "2M2NVeugYo93oJZUQzRcKieBKYhQpnBURMHpUPsuZAX6hacEBP98oELpiEvnPW35UT4co1Vgu4LskcojBVSw7tNW",
  "key9": "37CD7FYSCgDupeqRP81mkzwZQP4WpACnPFJFrr3mbuRCUqDzg2nKtYG5j3E6kUDoRvU3z4YzS6Bm77AjoviMHXRg",
  "key10": "28dZaf4tbg2PQDn4F34h4qSHRnMrvT6xm51QDVn5N28osmmQfjwghxX9CsMXVDgPNuvnz29s7gf1rWcP6jKmNdV1",
  "key11": "2fYFboGXLe7z8ypVsRooZ13coQQZtdyHpvtrqAXv43JA1mjVvGPJh5tFF5mCRTxonJY8gUVty3rtbZtJbiSNaGsL",
  "key12": "4cCMYG7GYDZJSHemSwuQeckUhiTa2yxJ4sw7TKfqBcWYgmTW87i9xJZN3fufTWy2gVDXjjL8DFpWHNHYypsL9V5Z",
  "key13": "bx7CW37VoAT1pnyFGU9BURr2T1otwYkRCH7ZW3HB7uHX7T5hHu1U7h9URxFgXuff8qZV4FfncA5MDDpWpopsMbg",
  "key14": "67SbRrKhqnkeT6urTaTeGzDvrB5AUTsctMRvaLQPwZY4K4V3WLT7LYsfKJjnPw9UwYvoxs76ss29YJgNZkmGYa86",
  "key15": "4HYzgvJ1UL7DAyZmoAG48CAG8e9FsDBEtu6ACRmZhr2qpSLES4B77tHsBwk22JAG42aq6Q99DJthVHyD6oVDQpFp",
  "key16": "4SNVHhCxVhfgtNt9Ckn7fLf2L1PzjfijCXyZJqWsGjGmRN7kd2eNBXBr9c85rwB1Hewt16UFhxFu8MShuNWRYDWr",
  "key17": "3ghKycTfN4PJP1mUAPu1pBTT52SBLSQnDhoURL5bfMTTBL4cc8juyMKkiuaRUqcK21SAAuoMFT18PZxwidWW9X4N",
  "key18": "Zo2kzfvLACjpRLGTkARoSW4FegkQ4XhEvK4ADEk6wDWmyrx2CCZzqso26LJ8vDX7vYcEuxxpVfkyVVLTzaxejHv",
  "key19": "3GJt7YaV6S6Zp3QQ6VDHeUE877Hgd4MH6rc4TLWggjsWBb2BbexyBEfTETXSsf2aaUS7ZT7frNkF6xR5qvLvxmHH",
  "key20": "2AydpAYfef3BZkTRnUf6y7XMKiqYknjbrECkHt4ZiyYAS2JQRGgctJ2dnAKQubGZN8cHtQj9T4xNXtDWXEmFXYkL",
  "key21": "56XsMyLet9XJh2HhtbxdM9WRZ3VEetANgUc8A6xb2dLbEp2XHH49wCm3q4djLg7A6Mcq7KctJBT7amGs5WQGBsKp",
  "key22": "miw6AK48fLAgjM4PgXShfy2kpm3BGZyRhS2zqU4qrMuYsHPwgKfoyfiLMzJeNuV527AKm7b8SVtDLPLjfHfN2pv",
  "key23": "4d5FttBG4C8gkQChwRvkvMhrZh2VEM58Y7TojPCtehVnR2HgwXGbWCTGLzMeasJn9sYvDZq8D3SkyNZgQfytsSDg",
  "key24": "Kqiv1Sa48L7EaRAdUgRbNDj62W2SMbi7rr8yY7WL9eBBg8oLdqDDJA8DWLvPqwCkH6WMrDstRPMHAdMeKwCtfUE",
  "key25": "2ve9pQBXUmnNwLwxJcyKSUz7GtHh53PuFpbRy25FRgx3wTzkd1N9KZmXjW5gyeeni3XoNBtyW67PGBqEBYUJsLBA",
  "key26": "56d7kMs8f6hanUHA1Mwu7mGzae26bTVmpgRore7MBKH3LezBFd3nETAi2CS3hikXSvU34pFUEjt4KmP5sBidTVKX",
  "key27": "2E3dkaAUgLZSJMPrpY2wvU1NxfEgfwhy27LfH2yozneEvBWfKEDtCQ1GRZskBzM7DoQJYCt77nij5zNcooet5N9r",
  "key28": "3hSN5ooCzFCVpcnDTWWhFQcK7p4o7Ncz2by5GvLqT7w2yBagu6T2USeJr34uijb1qjwt3z6xxJ4z67cALibbHkqM",
  "key29": "5RKi1q3rL4UokraP9ixGWUf29sVrP55tSi35oSN85inZ1ZHv7apchnZX5GrrtpJTbxx5pMUXcCmHgfvwhsedBD1Z",
  "key30": "i48ZUdt2w1narCFzpcFGMVgRuxS4xZ179zv5dYTWZTCQGQD2f6eEaXBUgPfRsoUpRRS7yR4rKrXKDrPjjiBkyR4",
  "key31": "27FvBTPtYj65Nhjdm6GFafjzjeVqv1qWRqHxjpBeUftFdeNYtgNRYnfVm4zGS5icLvDpTLAZ3u5v89GKZSJoEVkv",
  "key32": "pgQyPKgSMPJ3tawZgpkE3BwZft1JdQDgrcVEgmd6wtkytnwKyPEKtonhaJ8sfCd5dbFboALTpvc28XXiNidCNHf",
  "key33": "66SA3hZzhgEnAwJjLawGQdahRfeciL3rJPQKEmUA9B2nNLKoxrr6TMHCgjVGfU3ceZumN8VWy5mTAjZai4hwh72J",
  "key34": "2W5NzWRE1YtGUkCEbHKrcgcdva7woxBWNSqs2j6qCoNcaJPvkQsZdGNVa9TPYmGQZLLqKPExWnjAXrtzjtjTQf7R",
  "key35": "2xFrL5ch5ra1stCwsHJAbCLqEU9xbmWP2Uj9LJRLZ1c43sZGWr9K2pCgyfY7pb9yQW6YyNcZeAR14Mg35kqWxzTm"
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
