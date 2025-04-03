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
    "2j6GNqB8xPRKFrjXoLpAN1Qefe4dfQe3Hn6jCofGVryhBAKdmFxr6mKF3eFRWXvEzZsiAiKC6cMnb4jy9XuS4mve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RCqXVsqcNSgvkXYWtfz2Ek76skh4UNz7RpAtxWRQPt8nucPEtHAPWZDjP7xQcuDWdJFykG2uVyVw62HV4ZahPkF",
  "key1": "2Yu6Ny2Hzw8QitVYy2Tf9T7MwwVwGTSf2xZXFSGr5fRdWpBafK8SAiM3Sg4jYPxJYGJjFMzuGPcysbbsvLZzoK6K",
  "key2": "5K5GSqwUTG7Q7qoySLJGBzBCPUka6jsw9Jgr59mnYyD6kmz23git74sz861YZkgdjgrhEhoQsLWpQLJQrdmqELoE",
  "key3": "5NZ9mcRugyjvDrLp8dAryPe9rgd3bEaM7LGjVhbyCXKecR7bbtvDqgC5BmRGXNXm217FAF9WQvDGQWJ1ozWumdtt",
  "key4": "GqFHmgDV8uWQ7GU3adj2fWoF4MDUXxiTptguynnJEUu88r7JxeQDMbrnDzv6QbKuPVfeTUfm5pKUJF2yALEjowr",
  "key5": "ZNPqaJmMxKJf3dP35kPi26FuPPzQH6P7p7Lt5dkkYaaZULvUTEjwoBqt1sdxDRaA3ZMXVZT7ihga9Xy3mmA3BUF",
  "key6": "5LdSYgDbio7SUrTSHaCsrEVivUFxR1niXCBMLYqNE8Xgumdo4iARGvdhk3AozSRPXtWuqJjaDRcypvHmQsdEDmM8",
  "key7": "2phiYSq51SkiHozpLR6YcBDDBb4QY5nWTNrzCHhvvhLuPx9Jdjk4CC8gLtyzH4yHfNJt49WaDNi7AJQ1wxCC3MuZ",
  "key8": "5fTxR4DrF9mR81UXu4XtoV2gcSkFuRCJXVANZzadamUeNRC9RJG9Qm2qMGb5zDX88xd3SCpejznLYc8J8AdEv35f",
  "key9": "4qS452NADPVeMjJDg9HcKYFB56vVEuqYU6eebVrFcurRs4BBHQhZu9EfazM2RjXLjjhUW24XWFgcDze6ETaZxPpi",
  "key10": "XDjLiF3GYDNzopovtzxMhmSRGWgU2e7NAtgdFKyfVGDtkugDDm4P645QHT39f3QrvHHJaanvxYXkr8Y416w11kb",
  "key11": "3Kho6BcgKep7rv3MpLjNPFvWcHa2gqhME4LB1iXKAdpw1RuRZqFrSdPDDp5PXjkikWfYUzvjpe8eiLphDh2Nv5Yd",
  "key12": "SSh53TPtvSMk6S99N5YfqiQczjA6UhbgUuqCFBgRnvcW8E4i3uBhzZpsmHLLGBXYAf6PRCVxSAWb18ALbHpYHHV",
  "key13": "B8PzscXKuLZ9vrdJmvVUsb689iFvTzUesKCWpCjzY1Lr65jU4JU73TdQwku9v3NMVSGkmGunDSe1N9hUd2acyHF",
  "key14": "5EnuX33KpbvTkwXxwUh9UNeCG6dmuNkSNGTCHoPWnVEBYYUyxYwqu6kAxdjh91PMQ4orajArjZgBxGE68gnRoppC",
  "key15": "45wb82PwoMRiA9588AsauHgvQELsei3k5245h22HaRxXuZFdnGJd2Jhqn9cUMysMTweX2jdYrsFktaeAGeXU7z1y",
  "key16": "3jK23QFqMxnb9dqSfTvZpGxYUMc5FZfMCzP8VejefizcGEyASSAogBjj4Qr52GPTMuB1aZqFBHtfxaoqqtZGk8rP",
  "key17": "26TioADx64yX7z4iqsk5f1py3ptUgqRjNE7Qi3m998i5PaFdGPKiEAGTArqdRUiUwnZ45u7evqce6XD2StBmgdEV",
  "key18": "3V13F58HwDtHbWfJxJFZFFED3QuFfuBda1j2ZcY65kYcw1d83LjigknNNoXV11aA7onBfU5iQsgPBekS6Jeuuwz7",
  "key19": "Zc8M7hSoPg1fE1GB74giqQLpNYchhTdXRsvWhmMKLUFxaJwNB8EStdNgi3HhmC2Xo6BWm8k7MbkFY3GCqCbgWNM",
  "key20": "49Wn3S5CUWnky2QTFKaXRZMvobfvwqGUohEuk32hrEgiSCptqVCg6W9SfZ4qcWjqsfvwW3gyMzButT6fxdU5s9sD",
  "key21": "4MsEDDg3No3csriuRLDgXJ8revX1FzRDn1quKiTd4vZv5NmohU9H7cJv9yRXKcndxXyDwqRKENSTKez645du2wJX",
  "key22": "222ZbhEdXNeZuwFq18SY7dogefTuHB7ykNsGkVgCyCSQAL1Q1Hw32HjAucLYNb2hrzJ4Xz44gsTkdttK7KkEaHg3",
  "key23": "3TrLienoKAknUd5SdyAkNP46W7nu9t2FvNm1cerhn5DCBMHfy3jCNsWcPiLqLfTs6X4Ey4Q1m2NZsrnYztpzYb2k",
  "key24": "KoQywuWyjmM5i3aogJQ27aJFYsu6Hn94VgJerzMRJyXesa161Cg7oRZgJnDc45bhdaxyy5Kh4Mezf6tKgypzjwD",
  "key25": "2WitFH6G2z7M6sGLcwcZkDzNoFCKxBoiaxfm1c38Y5Y2Kvx3YqLBjcBykXMuSu2xauF9o4UCSRDZXqH2b5iRzM3c",
  "key26": "4Pr5jPSUhG2ao38Q2Ecq1DQ8SVVRUvFaJvfgc6msHsoRH9zK6mU1Di94zoxQAUA9e9gDaS3JEmPZQjvWFH3Etrzq",
  "key27": "4Z8BzQGF8EpaLBLG8A8SReYe3gjChUAsyjunhUrWmSsBkMvNd4ienDsvYpnXzVU8AJza887gXga7haqUfZ6kUztK",
  "key28": "2yPFhXqyqFBXXN5snvWUPKswuk419HWLzLYoLfRqraDGoBdiBhiEuD4HV5S1VsxkhZPS5okz79Vwkb9taKfSGKZZ",
  "key29": "SYgXgG4EbBvL17s7Wa7fykpjizxcHd2CoaqVCoCC83Pni8swB8xENebCQuS3CxEzPYd9Knj2RBf6dYPDxgS9Lkn",
  "key30": "2ev3UcNpuf7wXzxgssaCdPZfKYtLUt4wkqGUBaHrWw4N6CRwnpq5zshWSSGQDsEbHH8UT3SGzzQuHKMEc2LM1Amv",
  "key31": "qNU8bWjVcGJT5u8bvmoVxKuMpp3R3DGp7bXy3c1ivbeQWyWdVwP6v6RDFkKRdfbckFUtwVxGZnVAxWzs8Fen2qj",
  "key32": "3D1GxZ7sJfgYiB9vFbEsaDvpw1FCPZpySouQm19TCjkCfu6c7Zmd4oYjty8aHuKg5HTLqkminCq6jXfFQx3ASv5H",
  "key33": "2D5DPr3hddmh2k7vMeGpZwJGMw8NaMkQfU1RbQQvnRopg3CFJ7JFNLUruY6ZddqeoeKC1z6wSJCBVoNYukCLWTaa",
  "key34": "4suYfsew1zC4vs9WjNLAnCuMjWcN9ENjqV9HM5LxFbRG4PdH4GF971pQJ9amn3UYjkQN5jZEBaL4tgeo3Zzeqyhn"
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
