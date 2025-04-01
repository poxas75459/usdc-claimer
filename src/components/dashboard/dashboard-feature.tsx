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
    "5QvnZF6XkQunGm44ndVpPDX2mJNc9Fr7XbxvY6q6W7N5Mjr74N788j3GN67sProqwWQ8zb44LwEEDR32aF1U9Z8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHHTmuMy2nGFKLauu7zkd4aZR6uUqEU42thVekoKD6QPFbzxGzP1Ecu3UXnjm8duPSdEHw4JdMNYfM7UsW5WQQA",
  "key1": "4RNd8rGxg1E9zU8QYEgMp1dEtCR6FVFHaQajdR9inREZTAqSb4uHhqtWvf7kBpoKvQCEWtkFszpPVJwaKeqL2kH9",
  "key2": "4914ndijmUTyuNRCSERxyxWcrKCY3i6KvYNwc4k85TUJVvDoSKC5K8Aen89KXdyzQZR8Nw66dhTU1odQ7Zo2serd",
  "key3": "2jsUew4Lfy9jaVcnV7JGmKRovch7Ftn8R61pphxPMJvgV6btv6C3gkcYsN4qrivt2rdwo9bXFWwjgcBK7zEpRXpq",
  "key4": "4tQrjTuraRdNEfge75hREgPGgVNLivMVNLF9TbtkEHaYGZEvBQJraGfFa75yKKWTsM9HXMNs63Rd2BagHCTotwG3",
  "key5": "2DpK3CZZ74X52dCKxMusw7eRjoEzmPKeLbd1TU5CxyE2Q2TQyA449VsCLA57qohyxLLWtvho9YMDqDJ1aVEGkPdE",
  "key6": "3tanxnMssu1fx5kySmSFvqiWCuS1WRT2rJjr6hwDkfaEuYsFX1xBAP9GL93AZH5jDsQcZfGTp6Sn27YdP7WyUNTD",
  "key7": "4t9jzTcT25ufm3d1DFFnFM1LyiELas2wXxUd4rbedDdUjp6771TUGmWmacQXV6188exhbtqfit1ogHacFWYzuFeh",
  "key8": "ghFrEz2PvP2qnrex6hA521pSoXhUySWx77Wc9fygfQaGABFAviuTmVqPbdt4G5kDmTvSot2r15C33PLWXDwczHN",
  "key9": "2jx7E8TKtEVUYNi3AykbyLJXVpegnTLbYJ9VE7PBMAzWaYqUJWgvf4vrvTo9Nteb9FyyVgWmHCMfWC6DZ6JSvAy3",
  "key10": "38cdKBXCgMrpoZVXG27fCGmnaeejbr5CtkzY33ryhEPfyqK1T5zkkumLh3m2AHpQYNH2hMGWoDcrdJaMVyiPWFxy",
  "key11": "25vhH2TXavPsd3HV5vw3hSF2GTV9hkz5CH1XzomZ9C13wzDkEHA2gy9iaHZtm5CXdZzGxPu5hovRDFs6oiUQUmka",
  "key12": "9CXwZn8nmWHGYcqLoFJ2gMxX4Dh5BGrDLLpHiCfa8MXjf7NRtACaRs4MU7z4BgiUcvNpYm3wQdy3UKfgHNKfLAi",
  "key13": "2C8TTLjfCFndy5p1LHDmqCUj7V1nxGG8Z62e2614U95ebgZk8XfyBVLFMpDwfYH6LDWBKXqHyZLtbsN4QK2YiSNw",
  "key14": "5Yq6g3KnRZXJqyf7wcLDzAXv8eDYMDWLxhWKXsoUkzEXUcgh8Xe3T4TYVDB5cg2pUZdZsJS6ZBy6KnaSR85PsT5A",
  "key15": "3mCh2FyY1YqDpXzNot6Xa4qnmdpf9X54mugFPPbSxdHRcpukCkbhYC8sTMcoBJQxJreDdLB1xSZZtMTrtFYapPfT",
  "key16": "3TBfcZ9vrT1hoUuBuaFSHDMhNEqqNYN1Q4pJmeqFXSj7E826ZQdywo6ZFxLCRD8MzTZHQf6osafJ3CHwzEKKDL6A",
  "key17": "3hzbkwYSRFXuvKRLLj4mxmaRZXhYhGyoadQJCWM8bLTsFnzTMgp34GWfkfAXVksfqnfch8tb1TrVzxsk8fDGquJw",
  "key18": "3312UKxFHiwhjzVcAyixNDQZm4bhPPKQGETCjr8B5CVdawnQX6h97JoHVsLd5dNy4mvju5MyyQQ1RyVTfyfWqiq9",
  "key19": "26fiEeohSuKNkm9F3Y6R79wQpqJCAW7kbVJRpQRGfixJ7RsuDRHLXpPJdAFComkFzarv88LrqRigyDN56GUvgizV",
  "key20": "4pqNHBpvZgW5VTqtPQaAch6PM3HoZ3KMmNLSGCdrFJJW9qGYwRXEN3fDtW5EXupTnFnzeUFvdxxPJd1y3vKD3hvb",
  "key21": "5vXksbTQaJXBwucCkT2nKXz8DJWpoFYduYL77dKyXCjsYzAQrLH3iAbKBq7qF4d2ts5tHHxN96b86mLJBA6AFx4G",
  "key22": "2ZsYm2Cu8kfkZPqLFuQuPHh4NEjQ2L5sUYn6WNbCxFQnt2quYo7qodGtZamv4ePnmKzkQwaLSpKNuwh6oJXzthdm",
  "key23": "2xDEwAjX6hi9GyuP5V9Z7F8tJLhwDK6NWWQNk1qNht4XUFr6gcPVfWChXVT9ogx6DWESww6RWbUAQHGyQvez3Yz9",
  "key24": "3QjbRZVfdwSsMnhq2rtMKjU2PokwEZFtPPjetowZd79zKctRhGSYKu4cJYjz7K8WiqXZqoWJdLvEW6SCpJ99fLnM",
  "key25": "5PF351RbjmD3pxuqcX4Sbxqbf41S7hmZUj1KnFQQ1a8KcU5Qh8hac79r6YHryh2Ka6rjMYnSVQtzNqKAjDyxjbxg",
  "key26": "55jfkjDrnnzjyL4SCCGi9EHuQSABEEqJcATSTckk8cSx8WwFLSA9u8WHwzUdGCRnEnRUJEdgdXthKCSzmtnEdosF",
  "key27": "2cqRcceiRXeQrdEDZaogk2smJeeHFhUKrv1funC4v95VLA5QarXzKmXLxXwXk3LECkjxBvgUYa9HF9nnzNQK83gM",
  "key28": "2NgUJQQcuYHsNt6JMdKQqTBJ6j24HGuXiXrmAJszUz2et3KseKp5GtGFk4og3j8cooux9P67WFXcfexkxaTr3xGc"
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
