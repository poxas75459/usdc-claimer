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
    "4CMqFEKa5bRpustcLMVkCVD9dmmEMrA5H5YMtM5ZuyqeWrdqjkdXaq9Hwp6wigFpGk22mG9Gk2u94vrD2AW19NHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hEoQEQddmu8nRx2JPcQp9XSuVkNUxg2DrxYakRkLtpAUC5nKrVRNd4VDBobbaiEXTXCRYRpendBoBTvBtk7y2V7",
  "key1": "2HfbmyHz1igKtrxyPY82qBo5tnXUo58QaWTjGizqd2fEbz8qTdoF5UEfKBAyVG2R4QNucDNSUyuiCiG24Fb1gtMx",
  "key2": "4i1TPdg1n97mWTY4Fqba5fjDKdRfWrgKtcZu3AXwsTZSmwTsm5debovJcUsAV52Vct4UQf5wU2bYXazkWW5mcW1j",
  "key3": "KDZkXNUi6FEZn9h8qFeKKUprTzQTevpGhAkH22LKaQ21nDfiHk4ADT6GC9uMVJHvHFiFnCD21ptJGBLSxJNL7w8",
  "key4": "5nWU4c4sooEJWzNkLAtrfjNihvyG6XeMVkB1REvN7SVinZYnoB37ETSetvSTxF3VyuWxxu16d7Rdmz7VgYocHNyB",
  "key5": "CkcUX63HJS68QL4oNCSGDpibZG7GqDi8eg4YnN28cp9XzmrH2Nb218aZnvpmQ73DTMjW3gpeW67R6pny4iumYUn",
  "key6": "4BYWTmXFhP8ze1KnYhw7J2bRru4aeioZ7uFz994BELsmWADmQg8PMkY7hb6Ba8VAksK1myrwcmJacUKNHUc8c5Cb",
  "key7": "xfvEiRtuVh87xerP4V2Eg6BtyuACtLNgBaZSPUm7qGfGmS6A4bnQUJmXDU9k3v9BhF2GDbd6MNRzXigcNuVuGjo",
  "key8": "gYr4k9rerLsioxjqWPBJ2mEmJWC1wDK3vtMXw2ZdrLh3mJrCCajQ3Sgoqvbj3kadvpjhjdoZLkFEgSH1JhSMLt3",
  "key9": "5d4FapK2tTTrXMr3DW29KtGdZVXYXHgkBgrTGoCusXgHYLsrRLEpfpzUdEHNMuNLLyDM7xKGMRtgLwqkzBntQNci",
  "key10": "4onRdBTPvQXrqNG6KtDPG7FgqqE4iwNCoJgBL7CCFL1z7iA7e6aHosoJ74DB9Tpdro4RU93QSDzDyAwDqoF4oG1Z",
  "key11": "43etPrFZUVmGLxCsaHb3adSVmtbLx7Luq6FVvw8s6x3az1geTfbYdj5y76vSoVrTXbDdy2jCmz5n2Tv9pBjNx8SY",
  "key12": "4xw87mdQhxAGpCggb5PbTqxXBYzf2LdRbHXRE2TCAHwvB4WDz4nyvuk4A5SygDcfBNt3GLeRbrZtdwRKan9BzcG8",
  "key13": "LQa3WSGbN6MMQhWJ3rPd6Y9aXs2GAwB7u8ZyJSL2962rm39oN2q1TEEGYn34KstoTTppXiAZt4JQz9nkRCXhEoM",
  "key14": "4mgqfb7bgVEPy2UDnzt5bUB8R6auUYZ8MQYV1Au2FKHqvxGsjDH7AaD3rUzUpfzJpMHnXmFDseREw9TnwNrAvicL",
  "key15": "5WUyY7R58nhShkYhiDVC93A2UdQmixcfT5pjVPtP6ms72onDQDCFYXTDSpjshMYzeAXbpSo3uzWtwwSmTo4KJXbm",
  "key16": "5gGiRfGssFCRECZGcnzpLy2prAAV7F51TiMtHMHFZWRJPSK4vVsT54ZtUYjGc181ED3sjZrZZUQ27JFnvfWfRXHD",
  "key17": "38bCtH2feSUMK3vNF7cmNxTEjEkcJATrfrcTzXDusKjDQ9Cj6gyKjvF5QWvmTjn1Y7uvM8dcfrUhhb5521kLTTuS",
  "key18": "3w2cL7R2BTMj8D2tp83vwyLhNxV2VPcYV4bGtt8626RFqQofpac2CYV9wjS7nz9k9Gje28tH4GUjpF9snVNnYKgM",
  "key19": "5gpjCxBNP4Pmm1xXFp5GBEUVCAfCyed3ptTFCkNX7KEeuXJMksZQLBRJGNrjC8aFJZTivTSccJduVZgNAtEUfWxp",
  "key20": "4LekHJGiq3CA29DQbQGs9bQRSXbgBQHVwxoBk6d7sbfh5PKmNx2P6sUov4bgS4qkm652cgEe5PPJdT5SNQGdZ37t",
  "key21": "3Kn8r6MnWPNTGa7aFBx6duLcRoCwva7KGGTWR7pUcNPMWh8zyydZ5VB1rTzq6BqZMCLuUmoSJXJM2ZJhUZpACA5q",
  "key22": "pyg499XZhLR4jriZGCxiwuwgidXA9VGiCoz542kmU4LDt54EtpT6M49kBURH2p3iEQAp1cYqh2ryQmrMb8GzVcK",
  "key23": "4nvUYwSttkEyhTg7VR6NzRB6vV1VuDbwqaJkdkFSwaSZTkUTeiXQPBKMgy3iq476Pe3oAQeQfCzFVBS2tijXVV1L",
  "key24": "2pScHr5EBQzjDCxQiGfcZREuCU5TRy3QakcZztz2e34PenjL25MxzuvNKXNJWbVt1AGpDAXvToMQYoToq6VroGoZ",
  "key25": "63ZX6rWsddavxJriGGKePNEmX5cPoFecmtEKfDJCkA7Eg2WD7sGjB17j5KrCFi67aXyD9phHVbqYjFDyywErDUE",
  "key26": "5UeAJE35JkwpkBy2e1fpb2Z7CtVPoxmWq5PoPK9QouMj2mkuBQPbGTeqATZnN3dmNbbv7pYpWA3bhZZqTz7qaeKA",
  "key27": "5Gajs1Wa2GdFnsXAAEZVpz9GhPq1wNZwTq4zRFQNsYDXphawYaTjYvNtZ9FeZ9M3synj828k6WB3JGuivehLXPgt",
  "key28": "2eGUML2oFPbT3T3YFYY1qAPEBp27yWZGnkaYnpZE9PquSiKL3xpTrsGUFSB7UTh8Y5NbLsJqbMaPKRFRTCx3B8Cg",
  "key29": "6HJSuStJdyEu4VTmRhxeq773dDeNfcrC7mveqf6YDB11azqJ4HurXbjWuxp6Paqw2LPpirvLwzbceUGRmMc2HTj",
  "key30": "2bqTPr2uSoR8WhSHsigRwZfwXBezyPyinPmCm1ExwL5MG3pNJoCv9WmTXHYpAZM3LG2fuaTUEnjniDauCwxu7Md8",
  "key31": "4UJoFPNmpTWfcQ6hyw4t7QkdaYWtiZcsjY5UyYqDmVpBsFVV6fKh9wnRrw7DPjSAa8wioFJmjWW5DJSRrpoM2BAa",
  "key32": "47G8vVEVL4zXBSzqddz7bLNuxmDGxBRdxUFK2TNkfZL93gL8ZVdDDW2A2FA4LdoCwV9i1uwVbeRWv9EFLspjTWqP",
  "key33": "2ygVgeBZJ9yVtbkZDWzhKTdPYovpFK5x4XFk9Zch7v4AzSXLfaEc3JuAc2ufSwvNA428Gz6KYwTkAbXP4FKKDnQs",
  "key34": "5wdgb2u4XHbExETjenw8xeeAjcRXVx27zzRnUKwnbS7XGzbtk15hMJkAbjLeKem9D1K6Rf9hSSP7jCn7Kh1ZQW7R"
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
