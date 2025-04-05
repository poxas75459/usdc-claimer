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
    "47FuXbqK1Pd2czA9rQQ2f1RsvE11CZS9QZ5VWqNAfh226a92LTC1eS5FxXwGCLm2ppThBb9TCSagNuqdWYRHzmLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XcNfaiG68eWMsXA5dNYGKPj8oJeffwpikrpZqKzf2t4fUJ8Cs5B3pH3fGwkURdRLDnEdTcdtYh6ZRx4JTjNJS9J",
  "key1": "42rMGoVdtLEtxKZMhJUMgTiXSNJ92S3MX57PpxNR9vtWXXp8ECCeuM27Uzykx4s8XFfNDNZBotQp1kYMKbvTpudB",
  "key2": "3uSm9t6xvbiJQecw6iyuopT2GXebSRAT8upsFTdAerZTj3d1RteV53csKb8ssK3nQxSxfh7zVaiLmQoEezmntyCH",
  "key3": "36usS2sjaxktLS7yNwjEx2cKChEgeRis3ikr1gxEujqJ5zrwFHBVieGGAjVTKGkFAEFni5gC1gEmWmriitw3VgCt",
  "key4": "4mza3X45N9zP9ogEEtsKL7wpfRmnkNWFAuM8wFpCe3wSt9frzkBYXJsGdWUh66ko1QSbZ8B1WPtzvh7oavMvVtcP",
  "key5": "LyrfoPjcYWTsPw8GH2Gpy4P7da78xypRKTFYcpUVVQND7yGKtWUnwk9xVa221pV7bCYc3MRA7B8Vn2h8uEJtRve",
  "key6": "2dE4t77tXm8C7W1zbQPZNESM5yYMGEHgWcknCyA2EzhdiFAE56fULjzCt3Y1Y5VGs4VpdLkUMpcwhAgkH5uTsjVF",
  "key7": "3fr7DnBzgAYPrfg8BorsT551L91sgJadbJtwqrAwgTkEAVxYPYBkmxz2HxmhcSutrYvU3tT5DbZkGYRQ2PsdCyAC",
  "key8": "5zgRqPFUyizCz5ajSDgn2UoJRutzV9UBF65UCUdYoi1jzhKPjEPktyqpV3NRYfdFvx2Xs6cCpEU7rg2fumRLT8gD",
  "key9": "3XNKMKqUgT64gvt5mLEjMKR4tmvFs6Bn2EMG5MKG5TyLD6NN92MqxX3foFz7t7UuKcMerEprcVVaX3weNht7bSWT",
  "key10": "2SnTU6mAyqgso2bpsvS8YsDBdF9Wo2T4SnHjV6TppXjrdxXVCjvJVci7xry7G6X7Qa4ZfDdQnkRJUkF9KFE8mCya",
  "key11": "58fsA5pSK5Gfz5TAA5ER8pSzEFxkjvjR7Lu1o67rgaS6UPZghBK8iqa4s46H7sgyffyzKsW6ibGWGxS5Pt8si883",
  "key12": "3PEer5F3k3BsX7mDReNcgm8rxPfmSzbPVsV1VGkdfwCP5EhdUhyPwSreuifWKyAaXnsmWaPe8WXvZWmLLZVoW5p9",
  "key13": "LAQfgL1T3pBcFAc9WjNoJ8GtYiSTSXLD3xFcLpXCnBJxVq43x9UTK5XiwDaz2mmHT2tazYbEbssg2Wjj2KhJLtj",
  "key14": "2pz1BA6tDcW5ChfoZGzuqcf5hoi369H4Ua11ES4ZKe1SF7bq3ybwLGbBJmwp8uBrvo49izYDR5byhgmDoUFgLKHJ",
  "key15": "5iYgHXcUTBt97rLqcADctRqi6jmyPwPMsimWKAwwP4VsuER7jRt3kih2EA8HT4jgwiTuRqYJfAEvPMYnz8eCQN5v",
  "key16": "2YyAcjBHzXEGjyKtwcm4NeZwYQErPQHriGpwNQNvpQqCwyjDi5XeGW3ttKms7RQzzH7XAr1vgBHkEdYqEomH4NRS",
  "key17": "5w2krLWboQMnMZXoRX7yiuvbfc39329fs7SRJM3kirCGWh7uYnH586JoD1BjwJF7VWe3MqhkQiLXDA8qyc58oPxY",
  "key18": "64Q17sBXrw2x5TqQxjAoKfauKfsauCKvyyxSMoLH7qUmcUqLyPc6Ptcxsh23pdWouQEzo5EMUMFuYnRrZU1X9TVx",
  "key19": "5NrDXtriu23q6nFiGCRUevsLm3MfMgT3b76jv4AgVj2BsWeAZgPPqMJiJ44EgLmtu8ti3TfUszGnXQFPeWoZACag",
  "key20": "4f393PZg38zzHxUrNRUbyuZL6iJoy8mCBFZnwDu4ZZGs1tnXFXJ19NEG9b9cg6JHVmpdTAkTVeQXUxun9Jsvi1Wg",
  "key21": "ACE72mizDsfjL7G3P6BuWWnEukn2Rd5asa79W1c7zRnR9W2b4v2h2HsKiLNHa8QWacP5ZFnyCYspg5qhfyXqmMu",
  "key22": "4ChWgDaC8cDngVS4sgEd2izwqxTtQh1bwEnCjo5MRjFAxhEgsgr5EZEQ4jFgeEuAMXnEcfCMtGke4jeTiB2EEHwn",
  "key23": "56UA3nsdRPtRDhYb4rCa8NcLj5f6ffghge9en7WLsU3Vw8a48KoRaJjM5aoR2LyZhrkx8wNwmmCjoGK13KdqFnka",
  "key24": "buDsSkDrd8y8LqJXmyJYXDGqoa1TFGeUu4rzgWAMpmwnk1ftuo2vdivrhBbqMBaRgb2uM8hBojeJEyjyw5ThyC4",
  "key25": "2s92hK9K88ekaHhYvXDMKucqJwq1D4aKK8waMTzgHbS9bePdBdUjrENH6z1rYPMpCnx1zfpxYx3r7fbZeRwVXb2f",
  "key26": "3ejFNzCyjMtZJjJStVMPFK6g9EeLNMnu11vPe1TFfCVYTApuh6U6FKJheBv7Gvszuktam4cZZviF5xTxxjrNTdNw",
  "key27": "2fHRuFC8uXev8Dru9XH8r6AfJsLYeyqK1xFtfBjWXHhYPQ8aGYuzMf2w7BSTz1MtCwttnwjjX6FDm3uCLdV5si2G",
  "key28": "41LeF5XyUFYfbxMgvFJGpL3Wqb1WnJL2F6YToRzfU5EJdwnvKCWqmXwkKUW74A2K375BmdNDcNqAwLmNqem6e3Qg",
  "key29": "rtsNRPwwvTUdFcZUAZZb85KupTFQMdUN9HkS8CeLCVX5qG19L3Uco42Ym6tepjuEDvmJCkhbJBD3GfCVp84zSMy",
  "key30": "hUPKKziN3GXTUBw4CiMXQZwzDTz5YcsRtT6E4pMvohJMTrfJJCseeDiGgnEDzaJYGzjgBdMwXxs49cyGVuREuXs",
  "key31": "5eSdJM3hLdiGkvwLJs2bS2xMQam5AZ2f6WvYD74E9XePay4Bet5qJqic4QdC4ysQCiCLLimtaiVsW9DG8d258Wbi",
  "key32": "uTqxUsZLyEQjjE9CwNnAv9bYZmrVEzYEqmYdMwJcVCaQFVUvDQ3jRmzDX5YpRrHzYKUs2psZP4xMBxfNwDGdgNu",
  "key33": "5gt54WqFCm1CpyELQUUzE8WFkkpjCCWxGUYsNg3NyAbghaqVqoceGZ3fakBDMp5FbZ77UydM2robqSQzfor1d7P8",
  "key34": "5935uh4r1TGaxV42TkwrbtfHRQGYZfqzJSbnWeRVW2hM2xS4xjN5kTQwrAwHkWtTpSJqGtffCgnJPSgaoVuj4zdY",
  "key35": "93TErRauwLFMCKCCfbevgriSzyP5WBGw8zRFgN1bVwEmWT8FRHmmxg9h6jvWwk5YTYw8VKwx9AGoMNA8sMNxqMk",
  "key36": "4MQWPERDbRQEDn5NZdwVjVGfEMRvNt288T553hUcpvEF3YDRYxCXPCvmqzHtCHBnxd6tqZrxw2qw3YsVaRJDUa1X"
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
