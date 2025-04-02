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
    "2uRAmc9p71gMgNEnSk29qezvxPFLwYTrtBdQyqUmBLdNhta39AzKMYzbL49HVMgAJGzR7wfaVuU6983fYKTFRsVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vAYpoxoYy7Ddb2FYtQ9x6D5mWdZ7N9cnRFh7EjsGF2T11MfTHSmkxuqEshxhdAwMEdDJ95g7P9hrQt8izmuyUFc",
  "key1": "3syftAKJCVQtY8xZocjFpLWSoSRY5EvDcp65Vrf7YZuzGEyhXVhZ2GjY7UJd5q3Q37dr786EW6ftbqynoBrwtpTW",
  "key2": "52gtNeg4zZW3HZE8sEiv8sq19EKd3r9RBiav7x5pAKh2nvc8czmJwbvLFKPizo3FyzA4uB8JgTFuqnNnZ6FGQ1AN",
  "key3": "34g98pA1qf7dXPbycut8HbPHnVnsqiupH8onyp3z9bC8xeMgN34r2xQiYzKkj3KQYwZ9Bp79akHCFZEmN1LueJYe",
  "key4": "H6mtPs2ShB8NNf2bsoFVE94Huse3X1TdoGZtCjRpXWJH1NNrGYJJ6Z4bGpWNpvKHLpUwGEZSELY1F5YTHqGayv5",
  "key5": "3vuxoMCrn4VyyyB3vAR5MpQw7XqQrqyg1P9y4AGmLz5S55HUg6fPQwhBjpEWA1Q56DpmvF25Ugws5FjvgkaCFzYb",
  "key6": "BfBmogCVNjU8y9ANhEBPWid369WumF9e2HdaaSZmU8ndmoebyEVWam1KXUrBMQ2G4CpYj6RWEy8cWHrkf1fsAzd",
  "key7": "jTrVZ82tfHCuduxiyJ6NP2xAbVbP9uVdiQXW2ybpZLJwQV6THVXnEaejmTXJc4531Wuszj1xvhFbXVnJbNoB75y",
  "key8": "GBzYJpH57GwnsLZmKx3v13aGjZk4QszsdtHjSfSQR3JEMU5ud1bjnvRzdZRGhL1j6J4FLi8RFXLBehodYyyyP3M",
  "key9": "27Z3X2wG6fyC35xnVcamrFPwXNuXeY4fWa9PQs1FWUVZ318iRhwn9oXS1ns7iNbh2NkYVubTbRq93G7Agr2vQYjm",
  "key10": "4hFBEHPV8eHQRnixdR8krCTRJMGHML8z2BqoynbSUeC3KvLtJdXmo8JEmgMtuQiDgso1CBKeK3uMR9uXLf8vahhT",
  "key11": "58T227VtBvthsvMj2AAM6KRG8z6dMs5cAKWNc24QEZmR5BsybFiNjgRg5HVegVqgt1cM5Cnkrvua4sdWiHvj9qJQ",
  "key12": "638SF12dBbZBi5hgGudNzDL5tfApvTs6VCyKXDfTJjYnwb6329YjzLJMtvNxC2xbQ75JKSrQzL5tUDRY3GUCvyF6",
  "key13": "3hnvRa9J82kKfe5wqKCxdxM5MbA7gwukyUzWpQpaQXjd33h3TLUkPXTbhSumqXBa676FLq8WJxquGJQXvshdc6FE",
  "key14": "2SdRTFgN11umH6ebK18n6b2sKK9F6bfsupvfDaCpCRFtbix2iCiNxjxpckMHutJAWun5HSsWceMNR32dVhHJKa4f",
  "key15": "3nHJW3YNisiSbwytqv3gjinUpWkGAHrMtzah2gwiiT6jm3i7xD4qvgEM5q8bxpiJTRDx6o9dDqMUTiB58221d7N3",
  "key16": "HrGp1Uzs4Ejew6uo3AFdcvFdri4NBrW4LtxnBgTFUhsh71gjMXQbngRBfBvoeJsMSwDUpbks9RVi54QMni5gvZs",
  "key17": "2QhY8BeQ6bcvHLp2gTRXkUrMHhuc1Pdkjh76K6KKDXpEBHU9PZUxGDMyH3J9AF6GErCYouyCr2i2Z5CFtsi23687",
  "key18": "5B7jSfjwZvtP6HBNs7BVC2dRMM6GfGTBSV8yMrtk6u7Axga6MGXfcdis5ndoDh4rB5jVH8wHZUGPKLtqUcfaVUXw",
  "key19": "5MKh5WVrQwZWsU65YsG4xnx68Nvwa7c3fDW5X7knMhP15F3HVV8ouLPj7iAre7wxKmRczDVWN2PHDJ7cTCzQR9ir",
  "key20": "34KfqZMQZ6YHoKYDWRv6hGTiiLGQad8dDAT822UY6FUm8gkETpsnSCVaPJ8NTTjbvmzxoHBdyN4XnDkbZF54Rm5y",
  "key21": "5qRqc1pC5Js2ZkHsUQaRwoU3VUbLHzZHvLox8pZdsfaryvEoJGG1cTAm5PUqkYXsvQQMAGiW35LTqnVV8uftAwb4",
  "key22": "3RKZ66FVYL9sLEkzqcvUmSAUgeUmFjvHt25YQjXRZYC8BcvmqKHFgQuka5D91NzTw8v3TC8EKCfRMgNxTLHbrVU2",
  "key23": "66sFPYJZkuQUEGwYYSS46sSdnvfehe2nByMHcoGiN8T6iMVLWnzbEj8AYPyksF3vrQmQhwCzkCf46hK4w377rsYT",
  "key24": "pZAvJDemp6YL82NKAmjiACsmE7LTRFTFDT1c7DGXVkET9dFpViZCKFTbeaCNzRQRZPoa7ChgkaL9XmBPpz3EFMc",
  "key25": "4p1Zw2rTW9P9fNwXN8co7K5pQdrPx6mHKbmg2Uvbte62Bz6VKbpJcMNqopY5K1Dun4SMsdSAVxmaVtH6WvMZ5FrF",
  "key26": "3qDtKKNosxyR9dfL95RvWBvHiZmF3K3AxbdnBMrF43uDaT8tvC4ZtjBZp8PqW3ZVMGqUNqLAe9WUAoEkSVdrd9Hs",
  "key27": "3ymTnujUVioYUZtPaCyrRWUg7o7ouwiykWQNKNNBzWySBpdm33CFjzH7J5Cp35Njc3FTtKfXVdLJVNHyRPhWoPXt",
  "key28": "2LxauZ9vyPAzLBzuFzudgKoY8aCV6PV9kFtcajZ6a3qFPTCWdjdcoebXKqL7ssvyhNFm2g6w7kcK7EtgoZ9Swssu",
  "key29": "5JMAdAquecftJ9fqdeWauxanqGBTThyt7V5B9PSsj6SnzCLopwG12smptUxLtyTeQd59Ws9BB6Zt7Kq4CBD4L88q",
  "key30": "2FyYoGmnK9kHisc1YXeHQBQotma4Sb2QmcrmNJYCqJohLCg6eSQueyeyVkP4BLqDAT2KkHk9BjX3im7QptjZiijd",
  "key31": "26K5KEpa32tLyF1QhwsL39op2ehQpG2iTc95zfBKTWnzDr81MDWb4p77jzP2GoSMPxDRqYQMcBgSRgtTgb1mVvBu",
  "key32": "5FYatxKzjz79LhqhvgX8GoLka3s6xbNcmZBt2kpCSAk3NdsWAtzryA1Em6ppxF22nGxVWtrec3ZtePub9M6FgmXM",
  "key33": "jQhdpGJ7cVVVJr8ymZtmpRcN2vT31Es9Gm6CsRXfQojbrTNu6TEb6BWujR6xsShCQVhSRFbwsoaxZjooPnSKaog",
  "key34": "3k2J83e2NPPfB1yY8YVY8gnDCrKFtqCvrFkAB4DrgwsBwUA9cJT2TbosCSAtbxmjfDkDzrkd6S1nJfTMb154EucN"
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
