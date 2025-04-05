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
    "2MQtfKtFB8eECyLSqV5PRfcqjLsxy7WtNdFxx7gZJxSuwZfGLggiN24M4QkBggA49dvqz7Pjc3hfdoCyE13bBu2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bw3t7dmipiF9Em2zEzXGMdHE5AYa5c3FQvtngZQrawx37bHHLRGiCzrLR5pyNTPTDRBPvb51ZWnGMqUjEYYAuj6",
  "key1": "2UnBvK2hhwiV234DiExtrYekPdyQZ6wYd5g8bXreUigc4HE4HF7m8K25vnRASWVF2Ygup9YvLwXzrc4jFVSSrMYU",
  "key2": "5NEi5h2iNxdZq1xviWww93a1uQDw4zoLYEtDFkeoyrVKubs1Gj2szbVM8CjNLbTwdmz9vBKdvqVznVCPpGpznyUm",
  "key3": "2kPGt4vCfBvbdrkFgw1PxcvaVZncwyANZawQS6P4pHZw4MquQqNMbPXZQYxbNqwd1P51UB2e8uNNa5WTGQ9rShAE",
  "key4": "5724EWQf4ywnCfs3wsRqSmz3RoDsGoQA7CiXQnT6Y67fmdWpmbpr4scDqF45CwSvRxBtjMAP4mfjkhbfNXaSecSC",
  "key5": "5gEr6SxnDFtpjjK3jMhSDRjU6RQLS6Pq88Btnd35FGZdR9AHX4dXnzXwjwGQnWZwVb5rPfzT6E1JdejPsCjGNDaT",
  "key6": "5ATLivtHkjpRS6hWNvxSPQYHYxym52cezvEUZjszaAcGVzFVA8rcq7YVfiGxnQH9suW1JJSra8fUapm7i3neCpYK",
  "key7": "43W76s6rMurdCivMWGyoE9XindrUjzeuTmZ7wy5iKK2aPMxuY1JMpmBnvr5W3KSFYqdKgZdLGABQwaZXsd4cYNyE",
  "key8": "jzyMopLWF7G4rCTX3sS3aZJejjTmgxb1XAikPAV73Au5vpgb18vafg3GwgygzWuc77BF9rdSsyV75LcZC3BFWGk",
  "key9": "2DPkU3wKrBg1F9ad5yQtWzndticnjNybR4NphbEiTZBWykkB3Lr3r954cdEQM71UFQ3sbSBcxCpEeL2JEazK4cQT",
  "key10": "4jRpRHFJz2nZBeKbzLX77nonJthn51SkPmM9R7jUVmQuVUVpNJUUpfjs3M7wFdRjpfSbPMsA8tYnb6NFzckKkY8B",
  "key11": "4eWm1WXAbkzzkpVGjM498QfW64JW2oV8GyhTRxMVfy3mFLg8Kh3QaAbe51ztxyxAYZtgZsXiLekG8gFEqwn83Hc5",
  "key12": "5Tii9AXGyxDXAUG85f2REQNr6HwAnj33jhfWnQX5447B36ud2KeVQoNMYA1Cu7TMTJWASLuMp61JfvpECuvhDx8d",
  "key13": "3gzDyKyzFdDm4EsqJqNHLuvsBrwDpiYCDELCvKRhQutXqD9EcZutRmHo7wWbkUm7tASS5JoQA9SdpmBLx7rCDZ3Z",
  "key14": "3vp1LdMXQr4irfprr4dcchuBtpAiwujjcdhp6ckTCvM1qKVwxtDpQfTmH2wvczdsNch1p3htTsDYjmmQ6hyRV5r",
  "key15": "38Jwm4KFkUfVsB4eeyBtQJa4KLMTXo1o2SGP9Zf1mXBk3uMNHCWCLPE2rq71sP4Z3dV9FPCGZwbGZGgri7psMPXP",
  "key16": "2mGRqPo2D9FeuhqAtpdjuADmyqowDesD8Drn2ihB96bQreWseGSDYd6nVbue3JvAe25yEPHbaKVHqTXTkFfHcJwd",
  "key17": "4AAQTjdeMhXeh6oBPwrpp7MMB1t5qCHZFmbQcw6pLm8FYbThLqmXt5ZSXf2vDtXcExAKeFQLh1KXPn3nBRh1hjAo",
  "key18": "4GJzZvuAJCYhSw2LLoap2Yfceb3fzYiRJTb39oDcGziAWDmqSAgPLc9UoroQNWKXk3ZSKZRUgZ9eKND8Lm1XtUQu",
  "key19": "rhmFSPCdZBhvgMKVbKrkxpLXTF9FsGuGcXCREMhK47s8gjbVH9Gmtf4utGAMMit8nyvir5x4Xg7MWto7LHPcCTn",
  "key20": "4PFAL6hGd6hVHiPdNJHTyjSZQxSVq6U2bqdBbmPtbWjkKRmfxnwVbHYujho6g2wHd4Gkr1bvgUi9c6j3Bci2T55K",
  "key21": "5J6vXZykdEYyiCo2xZUqK4V9ZBwVAZPW6depuLVDWdFeoYzfUtPBZXr1Ch4izBg8Jr36YgQ4GAMBwcB8UsoSVF9Q",
  "key22": "2UiaFYBLXQ9bC4uePaCH7q3YzGmoETjQxce662WSDRPSzKQyMZndcLzSQrXfn5Zqq5tKSgfBobLYENLe6maU1ZYP",
  "key23": "5Xk8LQViwvQfJzJTf7nBKmmUHcNRB8271FFayxx7kGcRw4ARqYppsD8VtBNNTaxvbAmtYh479fvsmbYBZTu79Cff",
  "key24": "3uDWw91NAQvVfi5m8ne1NacMTso4i61P6mkr1oMi6PK42daq46xpRt1NnoPEB8B8wrsbGzzMzuRZiac11EtiJyn1",
  "key25": "5vk5DcjoF9uuj1vC9wU9KtHZbu8ssBGwmRjQa9Y4ERYARM5GdNGu1LWGXkWxYzs93y88XE1jqSS1mfrgfpnDaLig",
  "key26": "62M22jYjf3u829nsBZUUgvnpmw75AEZU7sjm3qF8nEf6oS77jzyDVXZzZNM5rbnWGj5scXni9Sgy9m8xgXwv4gBj",
  "key27": "n3j6SJpA5H7oh91jeuXrUGBtA8rcuVRgWTxQFm2nZQocZj6KybmTRB7ASoXaUxNejYJAL9Kniu7dKDcHcNn9YY5",
  "key28": "WpRXWzXpxsns4VnCFK8ySmZjW5dYGnW6W7PN3peUZj2VoobmDrsALsyK6rNSRUNtNe7F5dZCyJWYPMX64hLXgn4",
  "key29": "3q72Ta9AX9yiqEqu7jAdtGG61hivESHzLgS8G9L94EqN4VQxxEZqjwahgad4qBZrGdLAeiFakjmez3258yxyFwhk",
  "key30": "22zhap7eGz5iq4Sn8eiKTwWkXSPq3s1WiZ8zZUiWAUnhEgVurRN5MzL6GRU4xUGfqtsmaVpehFp8RS8PdqFzHF5r",
  "key31": "5HqZS3uuoimYRL3npWtkWgLMRzwHsKa8xpTev9xKmZSgmyNzhAJvUNJypFvw6jWgvgCRM1SkaQ46dLXizbVUhZYt",
  "key32": "67mg2hD3V4noNa4CYfzL86Wiq1DfRCN5k3C1XYas87JHF1WLBujfX5rusN6fGv7PnGUD7KxDoTWggdfy93MJoiif",
  "key33": "67EeUCCVuDWkXTawm5QemxsTQLHWZt2HLiUUrR4qdiw2nndtSdVS7EbieKSPgHoSYjz1iV7zKM5jaxBBGMV13m31",
  "key34": "TWhebcJSBVbk8Dz4RL89Xh2oe2MMj2ukHzRJDxzfBx59hHEst7dhmNyS5EMfNnc6APMqVSqFjUWGSUAqvboBiAb",
  "key35": "3odtusuZJVJqcJyEMKCCAKUVnCJNGnyrNDDQQCxwvWBExqewgknm7HFBdafJ39yseuUvNCvUrwhJEcnAjEweKyeU",
  "key36": "HnxtY4FHSVjtGhskJVFuYhgr2JpVabpZKTXHQnmsqfFaL3jYwjBdrGQ24jxmkNzxicDFuDVPCw1kBQXwAKWH48o",
  "key37": "2w35LYEQNF6E7GSsBe1zo6h68tt9NfKNTrwdoEYiZ9sYgWWMQjffDdSVfiFTFjRvq98SomHAs7cWspnYmoPBJkmn",
  "key38": "4H1wTH9ud3SfBQGEKSkWj8eLzG2o1gfMsEpHXzgCqx67BnAkiEZ2CKeQGFB6dt33KnMe2EcBDSZMWhnCawJBiZwY"
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
