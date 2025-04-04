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
    "2ejRp7tPqg4r1pSG6q47izNWs2uVPBU2hKUePWELtG4Ps7MmSff6EFbkYx7cvzH7p3sjcY5g31jLKSHw8WqrdY6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJFSoKxYGtWrJbvRg3eFPjEU6w23HjXSxsbMXhzxifKcCa3mCiyWrEMNdzMyyf7BnKdbohB9MsEX2QMED3sV7vB",
  "key1": "22T9jAY78xwxALQ1aFqtMQPoVq8pyXSZgHZ9NBxeqXz1ZPg1UU8c6rYnPFD74kPTHSyEURuYuqeuVwFxeKvijJyF",
  "key2": "E69g3cQN1DaMtiw7kJgnu4UvYPFmqKrfjRER85De68b76ws8Dhw25kRpn4r3jzdXsHKAgF2juVb8ErmRA4XPcck",
  "key3": "55AhZiWJj1eLF8G5SR9xQHjsxqxU8Uufm2MHvznm281bh7Jg6Cf6Z1qrZ9qKyPLo4i5B3AfV55nBXL4TKGtC99j",
  "key4": "4w6xQF4iQYQji6L87sRww1LkcLZcwBYVcrjx8beCqHH6ArvSmVBDD3nAGNgsGibyEaJ2ZgdujaegQVNs5CUi686i",
  "key5": "5VKLNACdzd9bZR4ATQo4C6bKrdzpWskQbSC9g5uSoq47dp5NPbfA6nQX5j3RHNQzpvFmK4UqdDc5fJk43Ks8qhmL",
  "key6": "3DUyc7h1S8xAkybB5S2oY9dPMHM3mrAPRX7Qy8BaiKqkY6VSBtMgdqwK88v3s551uRPS8GQNYL2EZaQb2mUvK8r9",
  "key7": "66WBPW7bJUVNyNz8ZLs6NnUZNJQRBM1PL4V22GoA1f8HjQMmjStqJAhPrPDwFD6tKmVzpvuPmcnypriBSazENMqN",
  "key8": "4U6b49WhSL2BrJGr5nTaeYZWLmqVcZtEyW9KGDvcqPw7r68RHoVgbwr6FDv1vyc8yaDRRP9x41zbrqzqjgEzMGDg",
  "key9": "mCB4DqJFoSLnjuCVSFGM763q7GnB2CTfSrJAcMCKbKmqyYVCmgX3X3tjUFaft9GHAg3UsX3MVEouUfHgXw4HrXL",
  "key10": "5QG8F7orC53J41nqUbRkgTqWTdvHZqSFX3gRFugDHKEb13zV6Hq8AYmQN7LssyVPsjNg82Rzxa7Kub78qD8mjipv",
  "key11": "2zRVdoSvkZSBXvzwZsAW5BFxQX73hRZNbsJpKrvGFAChRcitPc9Y87ZbzQ9wc6EQ7YP24YkKm2W5TThis49DpJ7F",
  "key12": "43SxdTYXMpJRwEDScAsZMzvZaau3oS563agX9ZPFiERroShxbcPiD8ePgu89nTV3cW83JdJSoVYiTAMCdPjtRCmV",
  "key13": "4FtdzBcEqnNVMtz7ESH7iKqs1DygrZX5AcBd54wLXnQURvozMFbPBPYQHk1j33rAzz6kK21Y5KvPsDkbLd4hPF8v",
  "key14": "3X1shPpYJx8MpDePd9oT8u9bBsHsVZheaWBdjKN4ksjedyTNHvPCfqv4QeHDnVq9LVZTyMABu1L4yZ1ntc1t6SiQ",
  "key15": "3iopRrZ7CfD84WxhDyFccoJWSXiKyeUzDkF1mubCaD2WGLq4ssRSxsrjditZ6Dz6z1RccE6AsonzRgpiw9GVRmuv",
  "key16": "qmqdMQ68aB3TYmQ36DCdQx3uMJxzqhts1DwGTzk39bUPj6ymWcsZSYhzCmWaunarGbtY5rLzdobfa5Wmd82pxHQ",
  "key17": "5GW6zeXpwyF7Z6YjaSopRnriUxKL97rqtNgbdEP2r2UjC6pmayZRotBZzETPEQmszezEVFtFveAJKBX5g4YkoCMM",
  "key18": "64Rr6WHnsNnkW39TZGK8CUHHvpSpnZGVdRfE53imj4aDFA1aoHpizyAie1Kyxcmj8sAoTevge26sgcjKi8gpu6YJ",
  "key19": "4TuJAR4VWc7YxwQW6U5dmbXrtfKe6Xuy6ZGankqQWZm5fWms8yrgjdVKn4MKiYj1joLE2XBsKhvVMBSZcxhyfhJH",
  "key20": "5kHRKUnDGDtuTrmvztNcS6tYequBFwEQinPSGmR3TYUWSivdr1wuLwnh8HF5Lg1xjvX7GdCZBHBqXpTMJyXuxGoy",
  "key21": "4cLnAP3RcgKf68e8hWEGWgyxJCXMaW1df7VLjajyYaXnsHt1SV2NBT8FZLHXV4nEVDjvvgvVrnJ1TZxojbhAZ3tw",
  "key22": "55zgXYYRdd1zSUCRX9JcoU5nucTVam2BrodDp4UVr9DZkoKKdyZLvazM4MKfgyDPnTo3ZnSA2pZFHuDRVQdz69Rn",
  "key23": "35vRF8jxKq1kVCN1TX6CjDxWXkbikiHLWKG5RqrgVf8iRrHLRwo9tZpuhQ4FegxcoEEsU6jeqH4swfR6FojTAsnG",
  "key24": "2YuEKrQmaXnTprRmqptQ9yrCPb6RZtEJe5yumD67UHkUH6aA7o3hasWyvbG1oJD2BU8PSJKZdDqhUw2dsgtTJg5R",
  "key25": "5XunDkZjMsExMuiggnM1uWZ5yKPjZGoMLE4Fyu2L7svqrPKmGiV5WXLteHdnquon6nXCtbP8WUb4ByKcM8AwBYrb",
  "key26": "S6e2voNa1AreFeDKUhiNFPT41oeqNDxDdUbG3CpbHnw3oCiHFWsKfehdwsjes8s7C5fB9h1YVrqqNPNrjJAFoes",
  "key27": "5ZLAyyRQzpmFxCysezSiucjDAtogzWatV9mLMCBT6cJwPSVomT59LDbzgYuVzxYSiuaBxN5f5Q2e4iSYnTKtDaBh"
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
