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
    "3A73yeusDJU5ZDuetAwYem74LcHVamvind9HsLYvitvFc5HSVMzK7qQSzKf72vPkHKH4JNbdMw77x6J6sCzPpxUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ciu5fNdftSYbwLJpH7XrjdUBk3HgwqZ92JQCb12XZWUqis5xagSWqroDpYsEdKa8BkBYrAEQ8v92f2kZ3u9PHW1",
  "key1": "zSKNmCtqZJzA6Lzk5CXsEub56xEHbmg7aqtQyAvA44e8bJ6LuF5TigEKPpyM58LiFQAkBURGsbJCmJfwxWxbKES",
  "key2": "3J2qLGcfkWAd7XvcW84FNHfkVU64mNdsfv7iUcgQJvAxECbKpSCaMEae88gCAFVGeNv69hiijNoJh3LnW7jD5RRo",
  "key3": "59MLo7tjLyqpdQxkguAPL9Pt4UKsNg5MuSvhko6HTrwJoefz9pNniZqAcwYxuSHKec7bAfwT9toBJnoyFzZUAxTZ",
  "key4": "4C2rW9DmxNvEJrRSsc3RcdhogSsXU7tLRGedP3EdYfWXc3amb5EWbxVhThYC3x8MV6XRKHQXzZFuC3Va4WoRxfGa",
  "key5": "2cQwXTRt74JorxDYCKDti5oqkujCmR5D9qBLs46vvwmj7R8V1J1dQyJBbPsuSt2phURdGTPTVEjhK2CdaqJf5nD9",
  "key6": "4nJNf2Tf2bPp5rEVW7SHf3dfE2miLiEMWBbQVxiDYdvsFS7y2mYizvUWjrD3DH5xX9J5qHLrJhBdAxVn9Y99erGo",
  "key7": "2hFj6sDEjAJXPAjVwcqQRVWDWyUwAe6fqvsQJkhpyy5mVdn6s6DB7tzNtjgFWwSh3Ffwzcw6zGVAaTW238wUQSkH",
  "key8": "2W4Ha1K3nuPvNTqTtKCzmuZqTA93xb4vAkkjMdTKjkaAWgE78CLTNx9EZtJMgguQEUsdvLYBmGLFwvKdFSC4gmb4",
  "key9": "5bQnQ6C3Q19jxs9UZ4jMpawNFf1i3cDTfC3QUpWzDzMKup1rmDnZz1BY464ecvQPNgymY5yYCFnc6GBNxcE9vD7S",
  "key10": "5shzWDuhiXrBoSWJoYFtyEtDAoS8QG43kdEumshVTtmDRXwjEV71KVhwwE5zzPWntZvQqEJqVFCz9r71StqWJ4nc",
  "key11": "3S6R8nmsn5q1WuYDpxDg1vskhnCJb9ek75ZRcXuuq3WtCx9f47RVoTHi467pf4Lq2egn5vV57mLT7wkuFLbaT3FJ",
  "key12": "212GEvZdgUhkh5HD2VdYAz1L542SNKaohLDjyMEwXaLhtt9Z8wcXFebK61eqvSKvJQTKSDhaoqaMybKiPwrq4VaJ",
  "key13": "52se3tGLiWeoP4eEsY8Rg6YbJYbLUtsCcPo4LJvTWTnjfMKFYLGEVMnjXwiTqutX12y3dJXwvNhZWAQtX2vSJYw1",
  "key14": "37FJtivxC5xfD2AcvjaGSwAFXfgqafQkUd6i87VPGz2u6cTbPik6pqJPotKxYa2sPpgz6JUB73ge4H26xvUbp3Vf",
  "key15": "2F1BFXyU3gLxTpiJMpgpad2zpS3o6RdUuQ5WPQQKukLxN589kAhumVJ2pLGR3cNhHQrzxA3W2J3DMRJ2DxfakRy3",
  "key16": "3CY21aBJEYn4N4fgtJZdb88G6U2QnBpHVe58M8MrVgE2dV6uX11uuKs8Ehgspwi4L6kSWjcTomAYTwXTVPh8Ka7D",
  "key17": "3fnarEQVTCd4SvTWcKLJyo7LzE2vHAQkmJzjjmop6BbQRR6Q6VRs5pfPNQWwMz2b1KokZDMAD6E96Ufjd92n1zsq",
  "key18": "2nBGcN7z3sxNcoudqLFWLjqMnRUMEQuWzk1AGbKWc5P5EhF1qTFdNajQaY9uHirdyVXDSkTSHSPPKbxzxC7HgHzE",
  "key19": "zQEkzDC84LAhVv3Esuk79WYNWji8hyrpzUH8a5BrFswLQKk1yb62g8Ku5P43a6Le6LPAkGVpyMJLqgu3rC5mawp",
  "key20": "3SwLYyJbfnk1XxEYTirMcuVWRbnTcoiMhRCbiNG1V8SnSxR6W2iPacy9q6z6n53RoTwL2GUQdEACQxrte55cs1of",
  "key21": "4KrX8LGCycHtuVyjLoJz88WLWii57nLxyf6fNc2XG3fHmRF8nhCcoU7RjB8KnDwCiMiXV7gR4M18da7RqMyqJ4bq",
  "key22": "3zdjF85fPWt7bp7aQtL5XoLBvKkdjhhisvFDdG7EkreMg6sf6wNxDHBGBtmAV8dyKrGytHBqiT5zzCXQDEde1PBc",
  "key23": "5psiLcBetzPCC3mdWgHLX2rcarBdwE3YUQ4JzYpkmM9jisryiFrijBTrA6Lt4iYCXmX4ciGBsEz39NGfQ6jjPjin",
  "key24": "2vgMQCP6nfmJXxhxH6CE6FrfAF3BorFms8AaE1rnEyz51J5yMtrgkaxxxx7F9e3GF6WDFC8qyUTanenMFK2wECz2",
  "key25": "5aXwZcAQ4RQLQ5LUqhk7efefSSupmn1xZjLnSQduR37HKv8LsXH3MyUUgNtALJQWKKvj9qx8fxANKhYGNgxSUkDz",
  "key26": "5DwsYcG1gEkzUuozVe2i7S6NoS5i1gtvRWE4TuAswk1uDXKWWhcxUACxbp6DV1J7mLqhtaeeii7hSJD1SJrTiYsW",
  "key27": "BGwQzYPotabH2nYkPCvMRmY47EoJBizSGTroPs8Aq78bEqgLwFfXVoYxAWts91hhTVa2RdEcq9ksjnp9xFphhWm",
  "key28": "2HVUgVsUqc3ceJszDk44c4MSZNbXUzPPstVHrGFrP9Eb1dR5kFj8A83g1DeRQfcHUD8AYn3vpUrz8zgAy1VwBusy",
  "key29": "2Bw7wWEwDhjkupVT6hjxbG4xeE9YKymDkAhFF5gZKq41fxbWw78X5iAFoyLFpepJasRfpSKQYcHvDkby2gf5fsk2",
  "key30": "49eMKnchhN8mEFC59JqiUxCn5KG58hfRgpaVn89FPDHXKrL21HD13snSaXAcAL9FaEQ2jwXmdLGPMhQ6U5L3pjkH",
  "key31": "3GGRuWFjA6NRtBkfwuvjBJfAbgcpgj9GnNmHmMa9Kj9UjJcGFAEFfpc7vKypuoHbt55ccdmdhYyr4jgsPGPw9pKz",
  "key32": "4bc1KLy1LUVqTaRsPsQiZWsS8GecLCv9n5fWsN3kdKVjBT4EJzPTxRb27kzUTEATQU4gAdjJeZSe4DFHtDNYyBet",
  "key33": "4rNDoXJYA9u48gss7JCsNdJ8Vg8Teq4vUqM2EQrCswKYUAZyGsu5sWYz9FbpxDiRr4oBkzWUzcucU6m2BEFF5JUw"
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
