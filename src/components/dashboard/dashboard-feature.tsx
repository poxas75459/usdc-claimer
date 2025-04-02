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
    "3EZtzB2FLnKg6hf9uhzBYFU8MgrbH86Fk8G5NKhrKraQ5vP55EqtKBRiC7vTNtLFHvQjjXK3VkY7uv36XW2oRv1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3avjN5GEtMiM7GAD84iBKzPUChtD6K2CgZY6zk2MamgFjLBZhTocf8gd5QRaH4d7W5FC7F13MGABHoxBTDwp9xh7",
  "key1": "2dcqDFUm5JjPbPyPCF2k727ZvmHmzecUr9ndfxSXs7bV3Pr11bbgJAnaz7M6gESVrd6pTm6dLwny8dD7JT2qBY8M",
  "key2": "4AN2UWmqw5sSUY3ny6PinZQ596Nsw1YkJ5Rc14BSsSmbGtPHs5xUFX8sEmxhWNBqv73Di7KyLVXHFs3bKPcBKKHC",
  "key3": "4uv7PjxjSupuwxeqMAhMFhTNikguh49miRYAPVLZSkRX98jiCubRnHpsGg9NmDdZph7vfuTvdMWC8ws1wnRJ3nXe",
  "key4": "FfU3psHZLy5WqTuCWjo3yE627TgySwdL23uNdBbyMPfd6dKuuUMnkhk9394iGsZDbdj1dQ14vwCLKsxLBRKv1wz",
  "key5": "fBt8tJk69AEQvWf6wNshoUeJr1JSbpEeVSAiDSXPhhXfDrUNcuSkjaS7pwZmL1CjnzU6pdL4DrCRJE7jpdr6pgV",
  "key6": "51HdHjh5RcpVjDBrPQ9yX6TyxpZLxpdWtnYf4QY6TKJTR3Zqigbm5LdKGzfo9Be3PHpH6KhCu4rQ4hupF9RJNBFV",
  "key7": "3KoqLaAGKigDh7wTPf15x3ixk4xEpRthauEirYZcLBJdCeQZKrDA7PKYJKBjyVtjXfe7XJC8Pp5xpjuUaVdksFPY",
  "key8": "2ZuUKWqdNbbdw1eNYhJAt3MRPeH2a864BMLFAhZFhN3qF3GBP5gTFaDQtZsZaXFLk877Q1zaQ7yR9Y6vePr14HJU",
  "key9": "p9HDR4U4yZoWkCeWsmWYopTqFDQ8AiX6YXkqx62E71vg8C5cdN6tVTAFat6K4YL67Sg3cBDM684y82Q1zsApG38",
  "key10": "5aSZv3e2kguYeRQXWy35qVdKqjUVnHdysWoAcPyvnNyhJqnmUXo8yXbwkrdNpHr8PNjuctp5r4vtimhejsDu3ymE",
  "key11": "59SZa8SsFqWbfMfka3i6gaYMqQhg36RWUyNJ1cSQj9tK6MvoGPjohUZM5znBoxy4vEMVUSVyCQwQhQiYfhDCpUxe",
  "key12": "3VUfYqssid2nDweF6tNEnA3SaynHAbPbXjbfWqejw3c15yooK9KyDBHjQQsUmgdiMVVcjji3pA3hBhKBKaDs74mv",
  "key13": "uteVbhhFnxyngcDkRUh1m1aPaeCMhcPzNdFQaqe9R1yG7KfJjRrwcFeaJq6abYq6LMpfTxWEkA7KoC9GL7ys5S5",
  "key14": "3typxkBH2DxXpJryj2b7HfUDEkGtXhEkM4aByjLM8yFSgrGraJZy9zNboR737KNRFZXmsQF3LUTva9omSuHgtQqC",
  "key15": "3axFLztGzogD97w6g9xMVMTn8xSwVms41YFopoAvyySZCJtgwNahTLoh8rwokLD3K4HmdwyDcUETTo9nQVqufmDS",
  "key16": "pv5qBS4pfGxPwJ91Jvs5mdPLd1S4NbHyfFQ4g56KKvXUpvB5UYuqeab7KGuNPtPWS2iQtUbiunPrcNYdt7y7Ad7",
  "key17": "GDPi3pnKcJFSvEmCox4gKJhDgPKuYNa6WEUwJf6ZMAns7GjRwNTVKefoWwHLKMjUSEZfXm49V1nXk399wvzC8mx",
  "key18": "4zHdH8VVWsHkhWxgxCsXA4Gi5gR3wDJWisHUKPrenC8hsbXqdHPbLQF1NzyX52AG5geSmMDdGhB8QYveh7iGvJmw",
  "key19": "49jENL16Qirvh7gFwu7njgTetPkVtCgGDdCpBKKd53XvXWpd1sBH6ddC4LMYggT2ehQWEDzTua3u8zPEMxfVyvm7",
  "key20": "2iEJMcxgf1CeVcZjXsqJCcwcQJRLfTFPEhdqS1HJ836HatvBZgagE9eJpenDwAXbkPRTaCuQ3UN9pJfrAPNEt3ds",
  "key21": "2DCJKcC9rDfCWQiYKRHguy3PdvLMrupiPtpLeQRh9HktX5K52gNgvSdMrzQSyBPdYQejfJCdS9dLBqbBoBm83WVo",
  "key22": "3BF3qzJzC65uFvDGRD38BfWykWQ2XQKListvt77euQifaQYieKow4cPxum3XQDVuA4xaabSfPCbLQZsxUwe3DQmR",
  "key23": "4PuJHqdzdef8xuNVFRMa23kqunvUgTBgGdtkpMkAsfucAZSkV7axmQHFC5VTrzq8GbT62eMxuxaTBkh6boHnVni5",
  "key24": "Rt5XzDtWSorLfDnaszpvvh2YCZmhRBRDkiNiBjzXgRz1uuNGT17XesucRofppzuCK84XigSmWm66yht56XZQMsC",
  "key25": "5NJbu3Jj1Niq6MPZbRmQfuB5Wm5aCASvAjP4PURAtmDyMibAM9hTtYahbWiLFXxymFmF1Kk6h4Nm2oE3ZUYCBqme",
  "key26": "5oASQVQYVyzQGSigBm7UHRzMV2W6zqEGkB8bWh4za3EpKs3kjdzH8hUHRZ3Dg5H9wHjA9Rbq1h2tenJLyd3DmruW",
  "key27": "5be7gG4SAxg9167c5Fd9aBFNt9doq2yuNjshhScmru4UtyY6dvQp2p2bceJuUaYKYjifxTH3P5AhkeiZh1B1KEgk",
  "key28": "494sLmd9DXC2JA5346oB2zXnf7pQsTMqEWnv6fi73uhmJT2JVXX3JBe68Zr73bBjnvJSUZMiPa3YtY5uWqbW6U9Q",
  "key29": "4eD3tpr7bUMyMc5aR2tLZuo1fpy6QsMnWqTf4uDCjzmdpQXMY7zgeWCyztCdrSrY3RfnZtAGF2KjNWf8Mwx7ZVGK",
  "key30": "D8WBUrDbu5tjU9f7qrK5PUaUdjyV6S7d9QTAL1ort4zKhUmZQXyZ9brR6veDsZsLo1nzNVWmTU8pbeoXtmKuJb3",
  "key31": "5FoQ2uQnDEBNDtKF1cnjUiJWx3oRq9XbCQwnTENc2bZN7RuyqcBv1qBsP2vgwnmrJLqbERF61Fx1P7mmtEBgZYtp",
  "key32": "577hTjrGcNjsHtbR8T2VMHnANdxcdDrKBEFBaoDc29YQFb1wrXcrnU2fTcQ4uhqG2C8jTYMS5vTxPuyui5W3TH1u",
  "key33": "4kb2GHwbNCWTLDrsKGhFTicJvbS323fdNzLt4i7hQG3mhodjqnr9B1MMq2r8JyQBzeU9FTAKMzVA8BAhaHRkS2By",
  "key34": "455n2HLQAQqToUGm7xYBmt9n1eCnHeYhquSJ8oTQDWCaCjhMKmW1bdeKSScFibkcomoULN3c2BFWY1WgoCppG6Mh",
  "key35": "2cGchvfuxA16Etqb6tEefqBXPcWYBHtzhrTKhYwDHqzzdMpzUfEeqxoqi2EwPVDhLcRreaBUX3HbMdchqxcyCPRP",
  "key36": "5huDc3bWj8ctQWqcfSawx6FscvJtFyTXxyRLGPonpfc3Ds1vxjukCL229ZeJmbjxxLuSK1xVan8FRDMEZ9uZihHU",
  "key37": "46iZDmVXwqLmQxDEN7Ds2vg2sC9QKAugxdJkFy9LVpWTztDeEqpUixmM3ZRQWAWdf75qkmymWMkjbnduC54SVkP2"
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
