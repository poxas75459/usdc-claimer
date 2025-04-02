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
    "4gtSDyTjtvcYfnnzeExq4bfUjqZxuRWAWRLgJVpvmcUtWqFi6hUkYwYEQqxvLLo5jgUyQUSC8ycdM22GYj7LwUPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bv8PP1kfnDAYNJNZj3Y6B58sXNUDRcZdpzb4MQiH2Re6sAeePoawtGNjzoXBpMQv9jSDZdX2MpRxnZe6u4H2dAh",
  "key1": "4NWRksaFSMqVjCKfa3VgZvivMMk5Ad3qXcAN9N8Whs5eSNtN3pS4464iwQkL9uALeG1sErRuX6NQZ79qsQcFk7H8",
  "key2": "56Tg8JZGbUgyzLccqufKaSUAQWBJxjMUmyCuwv77yNhXDT6s81PcCpz2xFD3VAE6MwRA5DDt8bGBmccAwJEQHpgQ",
  "key3": "2mYTJMjyEarP6PF3eHPKruRuebWmqP518NZedJexyGL24jHySGGmZze6MFSQHCiQYBkrpAFHWsaXCjFq5Xp9iG8D",
  "key4": "53CnF7nMN5khxWRvGfh9arvijzFRiZEdJsYETazxr5LxNH8dm8p5tKBZdjZQhHGwskdf9XfrReY58oCTdvTxYwvM",
  "key5": "52QpRMx2yRLRh6zi4YRRw8a5nyA5ExRzx3Ms63ki6GWMgSYmig5Q6FazzrAEEKf9aQK8mTENEdMNdJm6188NthST",
  "key6": "PJ8qNrt27VJE6Fh3EarmJ43jgFQPSu5JQc7XpaAN92BiP2fYZNRYzk2zSeFtqSaQnsLq8msApNVez9LFcyxqNmU",
  "key7": "5MhzDvap1XvaAvahW1RJskDDdW8yqFCa4rWBmf2Zs19gbtqrWziBiLH6PT5ruRdXGtwNNywRhtxwzgR1LDBzjqzy",
  "key8": "3UMpKLdgV1tUfbhr5ENdNZcVGNFskC4VZgKj1mWHE5S4KNSHZdF3p8ebciy1VNN5SNks9h3oZSnr9aFotphJxd53",
  "key9": "UMW8uRhFsRBxh2qQcDShCoThyMBzEECGazX5pn7wGP5HUYYEy1yDrDg7YM6xmZyUC6V7pRuz2Y3ntruiQFDM4iq",
  "key10": "2SAfwMz6YRw6Jsjky5zbiNEQ4Hm7wtJD3wzSzpszyGX4Sfo4JV43LcRKRgEo7wXS23XWadFhww7JagBXovRKKMzs",
  "key11": "2zTQqNfwncCddpq4pEnA4pJxhrGVTREwgv8f8nJxcnrTGaYeuUW7KEWMY8duLPdUDpiXSAnE2JGFZHcAACLxcdpp",
  "key12": "3JZj4gBfBfVbNhwMRa1WxUjBzrir5WBAZ3b3myWh28TQZpLU3YoUcDiwSWGZabJ5YmKdkNu8kjJEyf1BBmkgyR5e",
  "key13": "3E29wqzawjF1mHow7Ev6sEP82MWdZ85RZWG66hjoCfGto8DWY2EXk4RxasKuqaJny5wFanpBYygqo8dt1Puo9Anb",
  "key14": "538bPARUjE1Rxauq8u664GpdWzD6fKPPL9ofVXtdbWxMtUqqzFpNybBV8YUyzgkvRgDEuhzcgUH11ZTDN8xAzJxC",
  "key15": "4TWxBFhnDu8vqYogoo7UGqaEZy8RHMvxxFxSXsb3S5dUeyV8RmkF29zv1Ume685ZV7L6Estg5p1EVH3nobPEGGqB",
  "key16": "5NJbshPR4TWnYzC462yJhz77TeDMpohQgVJhqSEeEUWZL736rQMWg4FhMLB961o26pH29ypPvhd3qeXWt5WyCBjE",
  "key17": "2YuogqtoS6Cnx2rjdoX5H6tdnsQQ2jzA1VTA5uczVA3wyYZGiBGYw3qYgjyKmZSMH1xCHoqXcExZBa8Aifgk8UaX",
  "key18": "25Ck9n4mzA7J8Ng6ZSuwETeAsBcrzKWLo3FtErXEimLJgGsryMDELS8Je3FULghoXT9UGC32Jk5E6SsiXhMhQ3Z9",
  "key19": "5LqBqgNFL2UtiPD5om4bgK1ruWf8YLrww69oFgx3wRPP1mmcMVtLwnjwrMaRBXdrY3n5P5s9XDK9a9jCzozhuC2p",
  "key20": "2DjrwwuDogzXKKRHoup1HSmZpiw3UiLCR6uQNkCsZewtgF1aWabxHcw78xJfEr7BuMgKisnjAHhw8Lz7pJbp5GnV",
  "key21": "CsbEMzLCqo2uh66SX3oAg1mQKdCnko5i7WJPKXuGB4SzxY1xr7rbg62e9ieMyv6ZZ2tWFSfAoEPvYsVmqbUiLX6",
  "key22": "4uQyFm6t4AxA9maqt5D1wgAXGwV2WJYGPixAAgRNj3EwxLpnJFU4YVK2vZnBQYqgeA8KCoStAjmJsPf24cv4VQ6M",
  "key23": "65i5X8EVCE4FW7CDW5ZeZHoTPM8DrRoDSx8zf2UWf3d8FswPf2Cw4qd6764ncPUbTpvsq3ejiEWw63W4UwZdTZQ4",
  "key24": "2EwSM249AJCNuCmbph3yd9v5qGnyQNGEMmQ4uS3cSeyoVmk4WLUTUbfmexASqSUKojVLCHvBNpfUHkKiN1LQ1acD",
  "key25": "rk7kEE1U3iphNpfuEs28srn1RfNSp73HJJmwcjvDnzVjKg5KN2c1fzRirvMtpnepZ76f4ufo9szeaf4cJyxdEr1",
  "key26": "4EAmKZVQGTfCmTv8wCtE9KGtgTwVcrsFCKiwMRksAGoCda7UMbLFKbfm6AtA555onqLZQDhqScCb1hPny4SpmUHr",
  "key27": "2JqiLfaxm2gpRWo4AcrLnzFX94NkoGqLcYkgHHszxYZQK6z563Fz9hU1J9xgcyJfab7WhtLYq3PcVL982MAwVJ7F",
  "key28": "JDqd3mTsecX4YtMmEKLn1ZTpBTK5m2vhosDB5jhMJYAjM1wULXJecWWisRbKWFfmy4ucLHitpf5xdoNTbkh6J77",
  "key29": "3B8F2wd6MZz1VtK3PChZ4UfhqKC4hTSigTGfaqqJtuGCjpPaM76vT1yDDqC7wTbFgZJGccRBfN4YYU2rMqwKEsvT",
  "key30": "5LEwUZ36RgdDntwe29AViehPnZRdW3istsfASCcHkCpyd8rG4TjfpkCU8EJtYwqyyDFpinWYCjRBqYdjCqFUKkDV"
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
