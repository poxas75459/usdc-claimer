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
    "4zgPuW87pVTPvkSUFVMWqXJB3Emkh9GUHH39YJvJP8Cb1ttvXvK4SjvaofH4eWKF2qoLDAxNtbXEnBF3vcCFyNs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KC2nbykPEDfqmT4RMejzYGvoQCGjVg3uGUvMYzmBZYsjus416QSgooVFSLsVAXrTbNxW2Xq56SdmKy87wmiY7As",
  "key1": "2XhsSTqi3CEB5DDbEtRKm6Nf6aVcbEUErUJhGe3qYcvQxaUmvPSciDahPYV9auYWZ2DHXuUkS8P1ukaHa24hVkG2",
  "key2": "9muE4Ev9GA35W2Akeo6tmHZqptDwZpnPRucYw7NLFyCqcLMUfw5DWGWjUdKL9YzaBqTi2HmXmMPvkRR85UW5JNr",
  "key3": "66vZaNRKmofMuAzgyM8UB2ZP6zpuj2tg6CAnVgKwKqbTzVcWQGrKfpHr1pjCyfUzqGgvxEJL4VBcig7XxfHpjMLN",
  "key4": "2qeEPEwN6p1uhgssQLdYwAGWV7THtXD9fR1RSi2fVMAsNpdifFcMHHKgwxmDBcAgWQ9XZvL6d3SD2gpK4U1bdi7U",
  "key5": "3S8CZ67mWUA14P1Z5Kh9P2CSL3vHbKcPpaRpRE827vVktFq8EuS7XoWGNjRaXSPYcBKQQd6wzbMMx4fLkMRgy77Y",
  "key6": "2y4jQxsZp2sEK9bbN1XqPYLPQjfHUjhnbyhARWh9txvzNee8FZGMDgZ2Lo9P9wyE934y8bgAqkQuEbNfgx6Yshsm",
  "key7": "5kbukTvgMXztxvz8g6HiT1DeRcef3h3HW4qdQve2GYibUdmpjA6YRZnQRPXu9yMA235dwCpKxAeZzHcdLLAEkm4m",
  "key8": "2C6t4jcUMWPEL3f7it1tNmABkKVV23CdNFC8b5Kur4wYgXFPhYeKiuCbZx56Phq5DzDesrgQk853JnBa7UWfa2w5",
  "key9": "5e7kyTCGcWXBSvywQg29DLWoJgCAYVGpYzKpMHMmyskgiMa5y4xrxta1R5G3x2CNG6pK8zU8x1d6miJr9LPD9GiD",
  "key10": "2LrDoFpLbojtkK3z62ouavnj88brjmRFf1zWKagaMA16TWKaESuuyxrQrv76JFWXd92NU2kGRhYSwUumn7Z5HodD",
  "key11": "4oJvXdNqfBdG9rQA6o6TQEGEn8x1hcTUsU9zWqLKmfkRSk1PHi6tUxfH6vVqL8SWMVEiCYnYWmjpMcBAznNSzSxB",
  "key12": "2X7FUF7P6rjKNCv2TvLQC214ioHpt7kBphnXsbphjoLcyxiPQZXCqXSm9RhKCgsdbKEYFx5UkjCjcNt8YDPETYNt",
  "key13": "66zdkBB9oCmkcv3w1aHVVmTgvBiXiXNt9fvH1hX5dsLfZrHb7Ria2DrLhVsfoAic3Bfb6DNCg7MwELZtdpxHfo6x",
  "key14": "2hed2zGEFgWQJh1CnyFRjC65xzDz5PgcUHgB4GhLhMYS8mcZAWCNqFSZwd9BvjSfiP7ZBePzPuTnBBRjXVNAmdyG",
  "key15": "2LCk9jjGsA51x49GLQpbrr1qPchMcSxgaS1wDjc1H7J7pCEtp7DYwDH535NXPJ8PKwtNqmCCuzkcMF7Yz9QVKXcE",
  "key16": "5TwaExCcTEo5rNTtNnZpmqqkoxYEy7tFfkTG1HSW9akMRRmEeLS2NeSQSM9Ha8rs9EvwQE2orD92ipd2DWi7qY1M",
  "key17": "2zEFmtKojbPkci7WMDsaXj83YHDDCrt6u9Qi7VjdEcVJb4BH1qFk9z67JBChLNvQcq9Fw9J2QPx2KtbhM3LvrXCg",
  "key18": "4ZjM7Zx4tuhpgrEnjWNMbFA7tzWdNgMSbFxHFXMrLSeYYjgbYQpHTTpWKfhuZ3uerVWnHPcVGts8RUY3ntVkzmZn",
  "key19": "rxqv72fDvhcRJFLetBPxrZREJ7MnE2tYx3cyJCkZ2MaNopjYFQ2J58SjCr3dLZ3kTFF2oyQYe8QzMBkr4eV8q7j",
  "key20": "5mG1Xts3omVZYFD8NpeGkU7hxqDdGgdjMmAvY4zTSam2Ax7Eo672Jfy7MDcUWDgTWqQzYztTz9TWGcmKwwAyjbTy",
  "key21": "GDx9fdTjtH2y4PfGHf4mGGxoNxCHHvhPTU2BsjrkCH7H18J8ZGFtbEbEC5DoKg1osFY4tMVkL1i8i11L2VLZNz4",
  "key22": "2nW5dQGicDKDorLVi8rJsHcabPDZBh9UuLz6nQ2VhAK5d7FpugGMXa842YzvzsfFHgVPfYUorX1XZw6euLkbcQRA",
  "key23": "ufQwzWCLZJ2Yn5nkbp8VKTFZxwHUHhvoez7mMzShv4WzF3G7VS4UaWqKSyFKgdzq1dtDSbGV6dzQkQrWv4MNMe2",
  "key24": "26SzP4D7sdUYyu3XA1uWPG3fAKu9sZGHpKKraWVCSy9b3yZv8T7pMGqWGJuAngn8J4F8yfJ2qA7rkYaDv98xm6Jv",
  "key25": "64WkVZTWsPfD9dp8nf3oDcLZoV2rdqGS9EWyop82HbLCGJLTNXVNaAMXk9tD2kMHP4rP6RiKHAg8BMuQRFFVSLHG",
  "key26": "5N7eUWzxjhuvxZGVCfnGMNV8K9emj6ggjj4sZQgKSat1zcwFemgkN6Moh3LApHbiG7xFn2yNq2FQU4KQyGdv8zyZ",
  "key27": "4xPL7MToPVNLed6kE5HyYbh6qvBkKwzQgPZ5Ka7xq7npNPHJNUvDvEcL7ZyFcwNp6N2udWdzzMh9sjf8iBPTe9f9",
  "key28": "2vhtYxcc7N2EVawbDZ9WWKLDmP7k5CSU4M31jPBBpZbkEHBrZNtBq5gEfELenHJpaeng1tGjuoaztuC23pvo9n77",
  "key29": "3eQYB1u2fgLcXgho4aJhiStQE3suhM7hkgwz2mgoewxaQ8x3Kc6nZzLFbtJuKAFW78NvngQoTZfKBiC5TBCCB9VQ",
  "key30": "aRuMeiPNJYHk7JMn1bM7aKDYfNX5g45N1vBerYD3jC3JrB68Qsn3vw227jwpxAECGVKJtPJWDvtsiUXv66hxjof",
  "key31": "52zjbJZQH8fLA1E8Fat195n8uTzrxduRMPB1ZMij6vVZhAjv4h1W6necbpaWoKmFsa33NKNAqaCKaTt77Zigyh27",
  "key32": "4gw6Ah6y3Z5dKVC7ok8tF78b1kwonvaYPnQnbnd4evXE1WRJ4GFCcKC9hjJJ1AakXRwsKXSVo49kytGrL3LDhE4b",
  "key33": "5g7iwPurvshePVLCLHTFzfb3cEt4YCFXvLmHRXrrg2fobMmAEqRX542bMTJ1gFqhWRiUE2Uki7tFojovCG76yjjr",
  "key34": "4jDvmXyY9w7QhG6f38W7TdFQ6R8RUxyuKUAUJMY62vFdHmxQWGrHkxdXVLWoeppnkFHGoYBooA2EukqFcBC3JQUg",
  "key35": "2kimKVbBCNGzh46pwqtbLAtpLMiKrjQKCPagFmUd1FrEbWF7igWmuLDigh1TCQndiYrjjBPDsEsVuqQDRPQ5aGzt",
  "key36": "2jXVnw1W2E9Yjhoe1oSn3YRHCykQEocJW85Z1aRkJ2A3X6KeigCWBHJYeCj9PNHXDjc94gQSpewhkLbZpykxpJUg",
  "key37": "z1ziwq7f3bufKxJPa86nxwqR28py9mSG4zs6Ghh4jXxgSniGYEhSc8RaSVCnDsUDA5ZEyR2J6Jg1UHwP7qGc1FV",
  "key38": "27PaxmRTQFUSanKmrGZBoRiUFSy2MsDVLvwLWBdcoVvr9YyrPwhc9nvq7mAjTayoVm421CUvAXmQFShEbNYPT6sr",
  "key39": "4K97XTDZsNoKwFamH6ebGc51kzMTUgSF6zsHQJ3xKqcJnnQ5XPbN8wRfe6LnyNtwnn9wPa8EitubML6QukQVDLFd",
  "key40": "3N5om8iNdNsQstNCifhodz66SH6EUfQiXb11supuEBb9civwCVgqwfCPKcj7UT7bd6cdA8qToNwK5Nw6Emy4HjV5"
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
