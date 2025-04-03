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
    "2Lkz1c1nRWvjULiP6TnwcG6bD5bhB6V661NZ3UzWQwNW2PMoQvUTnHp1N299emZDsA97K4ciGXnR5oRF3P7BzGmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHTs3sxSbTNyAGY77TmABDF3GegnwSsghwLaHfPRTHgpXqoswGFRA8Lw9W3KAnDkjJg7Wwv4tqdLCNEKqLP8si8",
  "key1": "4ckMzeYLuXhyVKZU9HG9WUzfAL42k5qQKoJaXd86VRAzAJZMbLJLFyhmGnGH5S2iRHyHyzo9ot1FCLBvWwkamBWC",
  "key2": "4XKoKfmjFYhRsnjsfVCq3d2Jk2GqAQtyFeQXchSEfqUxiwofy4yYEPGkXrqBcNn6KMrt9oT88oneRCG16EfBPBa6",
  "key3": "41FV3Aszw85HTmydiJiF35HCWRfC2RHwhCnFqigDWqJcLdeP1qZbcvapy9wrfuFe3Utc3nbeiEVdUeidRbc2BTuV",
  "key4": "4E11o8gqy97bpGvk8DVoHN4Xg3KkQmMXUm31ApUN4Cbs8T2kC2X8R1jEgAwRumT2CHqurERMzAh7XL7i8MgUs8Ke",
  "key5": "NsxuMvp6xEwWxZWLTMFWTWtzuQkVUUFEiUg84QcxU6JohBsye5NepVHEaWvHNb7gJHt3cdnmR1URHNCizmFG5oF",
  "key6": "57H9phMrSRMZ3wJ5D4rHc6qQxmwu6TN58DkCGX25uyd1ps9HCm3DHwA8Hti85ZPRwNgkVdwBYohdLwDi6FXZ1i7Y",
  "key7": "3GWXBUYdpDZ5WtGhf4efjNZ2LsAPVnFtiVSevac3UzP38vg4SuyR2CmaFn4taj3fs2t2scSHCBUKLUHC7LA2dDsL",
  "key8": "2T459fhhhUnc5ErnbnkLGmaYPNwBYeEDW51aG1VxfKJpSkPKqBJFqj7zAZkjk364wPrVfcSY8eMcZwxsvetEKzwx",
  "key9": "3xNyQHqdf9w4MQejjhiovF5WEJfLjdEVUCeYXkgL18zAbBaDV2gJgPbE5Nxvd9xw6UsaYdbvMLUi3Ra4FWU7Mu6B",
  "key10": "2HYnfGuGGNZX4eCfsT13RAfxi8ebnH15ydhR7ufCtJtFsrXSGGHKi7krx1Qw8uzai6Jh3PC4RQhus6L1HvTtBWAe",
  "key11": "Vb9smMERMHj5gE8fUJpejz8PngW6ESQPqEAMhT4ZXmkpbM5JPk3FxU2Gx8Mhb3iDhwkShJgGyoXMW3JXWi3px9R",
  "key12": "3XQzUSfXR8BBwXA8P3gD8pvGcoNEkKY9vYhyukwAKP5d42vaUAB2iEcTAVmfpqAFqSM8zn5siV8Ut92BwExQPsLt",
  "key13": "ZXyugmbhnNRCCQAHWDD58oc7SqCEm1hpZF2eBX6FXU5wM7sbctDx5Dm9zmm61P88DZ5U7YJoYmGPE3P41WcBKx2",
  "key14": "65mGSn89MTETPkcyMDEaVD8tQT7QBeffdGYUpbmswKBVpUhW8xrje1tVu9Pyb7pZTAKTYNt6WeS7EBjUYitr1pur",
  "key15": "59vqFHNc4Mvc2cpgxy2qVFRwSqdhc2yUqDmAjgZjsoMgZSmYA3nrzbP6UKMyttAGVHeiem5TEGbmXqXxeDfoTBqF",
  "key16": "5f2U4sM2FUZYncsFU5SFUnR2i2Y2c13oNJD6pzpGw9Tb5C8xVXYshqh9cMs9sqYsvLGpvwP9DGDr6wzGky8T6XBH",
  "key17": "2yszLYRRRH1uYTo3kwgLyBdYymj4W4vHyQnAhNVcWLVDxaE8egYyNea7JKBHrqhjhBZgU5HjCBvVcGqpwaviFspa",
  "key18": "4Kqc9NjagwrHM3XZQSEcmXd4UncXr9nJt1cw8J5PerzZ4UYyAgJC1v9o7eVstf3V7FrxEoXMVpsDRe8gvvAsYEvG",
  "key19": "4GrD9d41oq3GE93YESVZykApjqWp6z9huPxwZcA16Qt7VMgSmKqZVhYmcki21iKnTPAXAv4qsbm3Kx6MSauedkMu",
  "key20": "5vsQicP94doBMj5eevdx9ne2A2zzp4VwaCqbf6GgE9CatNciC3YvAYa6kFqSGGGKbgMqywnXioupZGuivG5441jU",
  "key21": "4qDS9sBLWmkmBhmJ7QZ5vVa3GB72yn4udJkhvTtDcGPtnG12bokvp9e4R8jWfFYEcKwjVXeVYERWXmuroxyfrL5W",
  "key22": "4o6goyhcfAigTt27GyD7opVM2VtVgPbpxLcEbKBEfR2DTip3Kg6Q7py3YmnxwWdiWovZVTtUWyswnEZKVPX5beiL",
  "key23": "3gzkdELrKUwigFGbDpTDJxxUcUETMgcnsF7tUahET6eXghiCzsZKSiFxYFW6iJMzzoa6QY2xBeHHBvJGfPD2kBMy",
  "key24": "U18PQPUf5sUJwgoK1t7EL1fAHhhy5uRiEQLx8SLFbvFwRy4h3mU8a726ZFTVrWQhbq78RBRPjjBDKDCh7h1CiWY",
  "key25": "2sadtMK4DYZX3MA5cSYZBgfHdSRuy33itRbCquFmPrUeFZYEehbxC8K5zPWcLNuAoFviaHjAosyeLnPnLqCiFGss",
  "key26": "3kZBoxYkxLMW518EKDBjYL2TRkWipy3PKod3fwTVWAePNmdQdenUVqXd4Jt84GCR8ynao5bPVZTXdoVmYKrp6o8R",
  "key27": "3WsjsbUhfdAo48PfvR3KfdyrmbutK6n6cq6jHoDkWLaZvnGsasC3tXp14ttpoTQisB8kQiuA3JVwXbrrWtam9NgF",
  "key28": "2cVBqKwPN9ByUzcMVKpJzHwVBGpvEcDUNmN2s3mePJ5T5Lj8yKJcrXMDHWxCzD4ca7RQr9P3aD3w75SuPmf1ZYp8",
  "key29": "33xvEvdmQvtxF44yavrfBGZemeyfSUTah2c9D2xpNV1wL5SP5VkoWU5gYQ99GrceCBZ2UXdtsMei3Nz2jX9mkiL7",
  "key30": "UeoRS8VMrgNRb1LmkavsHGFghC7zrJfCmHGDPhJroNgyKbykA7wwzgy1JAjX7sXJUkYzeJTc73cJEWqJeVCfh5p",
  "key31": "41AUcGnTJi2AJzQWVpBnqhTct4oaxoNAVSg3pacQ6Ubq8VjnrVN8VqjZu4WEZrMSVbRRWanWYGkgSNfDPGBeiekz",
  "key32": "4qSok53dBBZbf7dwFGn16KoLNtLzRkCuB1rC9jR7HSNQytRKECzMF3FY4PC4jxCELRFB6DwFNrxU4H9cardcsd7s",
  "key33": "4SwiEe4koAtV79qQb8B9mL2BNs1iF7rfH3uG3N79fhoxinGJioxGts9NBmr3teyV6TP5cQaTjF5W7tpqH5i8Tnkz",
  "key34": "48aHxDJLu3ZC7bekwytsAmRdUSasFqgs9zd3bVfgtnpGs5sku5dijEgE4xPtuaNwNLS7pcMCFf2Y9xu6PWLoHnTR",
  "key35": "4T4N69L8nHSmtbWXb7hoakwa4XVVd6mnrLFKTxnazBbeS7kYnBFwFpozL1N3ei81hjmQA9GJp6JwekoETn8WWA4K",
  "key36": "41DjG1i7JPSPbcskiLCw9Wyz9a9PQNxY8hqTPCckczkLGhkBW6yD9uqgN6ZtCp7DAMTkS21RStxKYNLVhiKwQcip",
  "key37": "42fwZZmWxdfqXvr6hLH6STiN4NtGBLbq49f58bgLSkEyJtu9SNNwhaZaAd9UqN8Roh2y33YQdtg1cBbPexhEVr4N",
  "key38": "shuo66mHJ35g41ARymG3STX9PokE5nDNh2YBZLfFZJmjpbrN1rPpsoEHsS5rZGFwvvZUbyyCoVsZkFXtp83ZkS5"
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
