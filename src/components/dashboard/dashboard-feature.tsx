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
    "5UE2NKk4mKUWYVYWYD6AxXHLY2vh2egfp7gU19YNJqpUyQnsPRcLLiSQTkcnkETEsCjCrd7nyvio5etBZZ3cPurG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Jh2qzrQKkiC5hmf4VoZi5BzzkhTfoyvAmk8DKjk3ZbhPLmVYW7shwedVNqLWN6ih9xToEbNEecYVT5dyXPEbGM",
  "key1": "3swfGRRvyprPg1ufZ9DA6mtLUhZALuMBobvrmX8RqkFXLoTzZguaDWhCoB33MsbgNXdLy2NPE7kvEs9WWYR8Wv5c",
  "key2": "29EZE7juyMU8qbPJz4btLLFWjrQFNvqrMCV5bFviV7EgLi9vh4cwPcrPRQ5CD9b7QiWP4pJa42ihezZeWxQggpwG",
  "key3": "5VnLqB6rAFWCoVEdpfyFpdjFzhQbudu3b8HGF6ZZBLmnMQhfqHZgJcdkBVLQUEWh2sJpH7M6xaK9ppM7HRtssJac",
  "key4": "3qL3wdF259ZB4kA3NYrvxb8BKUC5zgGQcjxg6Uaseq1tSUesUqY1d6M2pDyQLwTuMspXe7gqvM1USit6nXmxdgvz",
  "key5": "2ahmkxmonCL8STS7AnHrWRrFRbfQeabYwXDPLm1AXSVJVArdLK6zWQqMUBQpCqS1hykqFDy564Ho8wMHN2jKbyzW",
  "key6": "GE8SfqmF7gehcYNk5CZoyWUgdpHC7TtuivZEFTqje3EMw6rNENHq9aBs4g7xKPZgCHPG11vPnfjPnJvKgpQx47w",
  "key7": "5rWSD1aqPBuBqtrXGQjdPkrtX4NPRnSJvMBa3QaPbxf5mA7Ej1odMVAeavbDCuCPXvXzxhbNX8r1WpzLLnztVYQp",
  "key8": "4w5vGk7UBFjdfwVZdcyr7BBjunwx9DWsBRS3UatctimWjWALScECP5ZDEnQc6yhjE9bA1iVYZ55sxDy8Kxcb54Wa",
  "key9": "eGLaSs9m5ywxJ8vfythSSzTnJWWcG2obM6fAjhNpSLfxeUofvsPz5znvFEL4pTZtbT7tQgwzYYeWEs1kqg942oN",
  "key10": "5m7BH9CV67nZ6EPpfQ7Rufknm5jNL7D8EfoRx6XFULnKrQLDbwR73D2ep9xjngjNNNfkWyTvEpWpCDQUHCjHSozT",
  "key11": "3MYEo4st1A2rHcFb8zt1Y1pgyPTQSnUkjKTp6de8MMiNYXfYbhu1JPXPq1e5mNSqGJzXt8YAgk7etejQ9giKS341",
  "key12": "61ZAZf6weYkQhwApF594faSmJju1B5Wgg7PbKGqpo9k5u5Z3q4AakZUShUS7wiuk8Zn6JddHwryN4QexyH6VcrDF",
  "key13": "4BiBrqSXoXZXsKt5bVdJ7u8meSsD8B1yeVxGXZsnjWSZGiefpDw9Au5vnsFRBTrcXJbA4ZHR84zNRqYJyRzr278g",
  "key14": "5dahY9PF35D2nepBSvsVuyahpHNoxNk6Qeb7dgBHMUjxCdd9u2XUnj49WiEXBuqSZocVF5HoG6HRQ7LcTMoDeP8P",
  "key15": "5wCjrd1RLtYdXJQitdDPqW81WTngMYUWSmNMeRd4nucxB7CnjPNcMUKkrg2npYBYyRUXgvZJuxWyiXE1ZmcHnM1n",
  "key16": "4P3KDxjgJSmXWyAAQhJ72nW9tKiwgjE9hJquSYXh9zBNNWDmhhiYfMyp1JBhtzq1Psryn1Thks4woXNbqJT3G4h2",
  "key17": "4uYbqhoYRWEwibwX5w54HCLhtQXzGd6Ds5d8Wq9HRyJ4zBkaHG9mWxc5C8bPKRXzxv36rNFq1oJLT5YbD62FYZ1U",
  "key18": "2rYg228ohWyiXf1S7x7iSmQY74gSiiMMsXcYtncprZLGpCPKHV3ud35DXwC2X6xthU7NVDVZ7VbjovE3jwmbiA5K",
  "key19": "21Krm6UBYVXXQ4MfDmB5agNXGzADgVeND6g6QeYmQ422aPPnFBVZbcW5LSmzSvFq1kusenEt93GpBeMSKfL5TsXq",
  "key20": "5utRrLnBXkgWEM3AobNWebjefRiMauuhPdo7cBSTp9VwbPG9VgFqXgNnxZr8DqJX6vt7NXbZTXD6JmEjGqiR9dtT",
  "key21": "qz1r1dg3wRv84kCBs22szqFVq3pxTLLNaNegqMERAo73BF8GFpT8aKBXVmrKkuEGGQ6yHr1dy9rR596FckpyMQN",
  "key22": "2yxH4TBv9om1YJL8yQ5CBW19rEzxrZKtbmrf3gp5Cq5YykU9HFybrY3NQNtRioWSEJ9sW9JBCZj61cmkngNhqAMR",
  "key23": "3whraGYfNDHrD86PQyJwjsFu1tqM4p22guWxmmRQBTY72mP9cx3S479rsUQ5cdU8LsNWe2vPZqVVVZcH4hXE1HNh",
  "key24": "4DjDA6tivJdWZYv9YXbRcmSUeywT5pnvuq452XGWm6Ft3yFZ6qNDdaB2wF9AbhUY2eiBaCFcCQrw1Y1bJdbF9a6H",
  "key25": "3WFLX3Yr8kqEEs9mFGxoNTn1poDKWYv4qCv8CVY1wxcDYuv31cy65hYakuDa8kQ8uyEAmJksVNwMM7mBFEt3hidy",
  "key26": "4MaGeAgcfZCBJpve5DwnHZYiFMu9JgJ5vsUXsTTTeTHohjPrGKQgvV1YsqvCvxuJKLSAp5sQoVqQXyc7QbRMzxpu",
  "key27": "8GLMMGgiTmUmo1KddWfBkVm8TzyVJcxZQngXErp96Mg2qRXorLXTd7bA1hojBR3i6CmWjrsiJ5MdziMuzc38SDa",
  "key28": "5zGthDvdX5iVgQpBXneeDFkqh9iXjMcDsrZdafyuN9LojvZVdVExgD67Mv7UbXdukacuVHn6dSn2CiWLYKURUSdc",
  "key29": "5zh1ZEcMjHc1HAR86bb8RQxVkvZ2EPUTXL32aBBhoNZWAuwnum7nSVodx5nNkD84vb1A51FMAu4bnQJ8UTTUGFS9",
  "key30": "2KQqDFSjm9dseVVPDPJdPqV3uZyqP4GcgsY2E7mDJ9GRkX2ysZ2KeDFiVoTAxKx6DBmmqTAuFCgPpLbZhdX9zfgL",
  "key31": "3BkY46PHfjhb9rv8qr41sS4jvZV9BjA3ZmS8hf25T4pePdKLGvZZ5YV8pjPLJc2NQmvKDbxK6cVMpbC624GWUuyA",
  "key32": "26wu4bHCfx3kXFtRXJUvCdCfSR43DCnK8HchpSrUUGnMTXYAwRNSi1FYy9dYUpqthUuAVcXTVz1CpcW4HCEU4BUJ",
  "key33": "3shTZq4sH3tgbyn3Tr4nDqJ7CNxAruVdJbZhzpxREPBDgCmNC37XFEH5RKwf8mSJaWPwpyLRpiStM19SRXNXYbad",
  "key34": "2XM57Pnr3j4aXjFxMobrdUg1C2CeyBA5WP5woohu37QeajpjNRPqoEPQh1x39S22WduXU8yJxqHQ1BiPRZ4qBVv8",
  "key35": "2ojHFMes75Dh4r12gAX84agkPpoBgEpLaKrgfs6C7Zk8jBSJQF2r5AoWCSWNKjbVBAjxU42UZ4bXqd4cuDcfnr1Y",
  "key36": "uPNQPWbqymx837ASBx4PtB5aLQe3s2qfezJkXNPpRbuEWXE7j1hy69YJ535Kzdz39scjxqa6GLRwV3Zm7xRtN3W",
  "key37": "MAx1qc3uHF9mB5xMrj61ieGW8EVyNewhp3WAufuDRgNay6PthqG27iXuf7BJLX7PjcNJB8X9AN2nDTXFBwdLPaG",
  "key38": "5sW7QaV32JhGpG8HfBWzyhH7EJUov3uNfLZGHbNvJZYbf7bAnWksdh8jaJ9uEhgw8SXAY5bj5cAPJvDWW2uiNZPL",
  "key39": "4hjDniCM4mmh8bwahD4nJb4kLstu4tcutEcQCs5CncddrNfohgYH2gYci82LsbkZa9UWwbe5Y646tZkWsaKnEFQH",
  "key40": "DSjQZKceeBECCCnQ3PhDcCbwRQtwsh6QDcGrKrfzBkQGsJAuwSWZgqEjRUFTgv5QS5QfMyHUwBK8AEP2dv6vKoW",
  "key41": "23FYoJWG778DY37fz1YkxuX6N8gd6WPkmRobiTENjTQNxRyKAPtQpJWpLVV3MF1naPoix69XLFr6TvR2MvgEozih",
  "key42": "46uCFpQCjQPaHAFt6jsAbAUkFr6mSxFE9SDgPT7eZKKrGSCnjyAKzmWf8sWqEy7jGhf7BzJBw3DwVrvmJ1zGJACY",
  "key43": "5HhZgdXt28oG5ooKfGpKTzTpntWuf92sU12kH4aFdPay7D4mdbyp2rxH8UrKJ3AQs2KpAy8cnaw9PsSvRpwRNQFc",
  "key44": "3VUUFTkVJ9r4GWoUHtY6WXe2mRUUGxDPPQH321ji6pH9VTVFDiNJDrLmc4CeFjVfYpJ4Wg5KmZL96Dp7NYc7BgaM",
  "key45": "21DX74bm1si9FP5BbEvB2J9Jm7didGnSKStXu2nME4gkR3i6YMKobcLhTjmMyAcUuAEyix4PV74No3Wp8z7MjWRR",
  "key46": "5MDZ5KaMRuP31ZUushm5cVW5nfgrPcJ2Wdi7quYS5mhBuo6wKtdqcskUX2jZnUFgbaBNbpSwzdEiDD4ZhRWpCbpv",
  "key47": "2kXwaQu2pMxpaTrqcAY5d2GJjvUSdhDz31iSBwQGC8w5VosiYqoV6akEY2Gy9fWNKfteLzCpNhFkDBv62DVN9S7r",
  "key48": "4hzZGEDu9ZTFJ2PFHPJKcUtE7oHo5SVvnEgVs93zRXw2mztceMttZZvRHk5upiwYQrzDgezM2dy9JShgaKeWLZEu"
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
