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
    "65ZPSjKkAzzuhgnFyCzodVdBjjvWchYkrcwuBbK9H42UhY78bRpZaymBZGLwKpTJamwk9g1RH3EjECi425fvyjRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ssvWh4xMhmDTh1S5FuU5QPaFcgaGCFgm8anFFHjFhQKbkVCNxQ1yBXutny8rQoM72rH9YpqxbdWCkXoB8sLQyez",
  "key1": "5ccuev3zpHUR847ojSqLy4s4nDMyiWAwGw5C6L93dG5FVoTsq47HDYCAcbByRhHaFd2LeTXienJkvNZpu46nwyYx",
  "key2": "64fs62zKXkEQcYxJ1i93YcFtPgaZHNicW62Ydts5t2FKsNZTJdkzrJekqMgtTZGnA7zwJzUobz56C66Qag8qTzs",
  "key3": "4fVEqJkpuy2uzp1ctESLBNeXfaVNPiVZwNb9gv352QejLUmMTfY3xma66TFbZjZYtTr5swAy6X4deXuey1wQznA9",
  "key4": "5q6nhhGDvjbb5rpsWUAZ2cj3qHSunoda7ayNoBPsAxoQPfb1pTa1C8u2fMd6hsvYpz9YuBpmqJm7F3vgBMCSGxUR",
  "key5": "3sBfXtXF3rKEr55S7RRDWCpLrPdEQfEG6ieiKJJSXSgQzrBDGRMN8pgT16BCB74UnJhLBLk416XhZyorG9xJmpEa",
  "key6": "2xeztyisLEYyJJDVwLXHtfzd4QXxdaQSKm47fFcBWhDwJXDwoyFBHrX73gczjfP1uBDRBwdwFYg2Bcvpr3XxivMd",
  "key7": "5JDQiKESnckf6aAGG9AyZ7Mx9SHZ1FT6Jo1AUAUhQHhtf4tr2cKZtWPKYis3GRT8joq4aD3kj2YSHGq7JsxzNEXs",
  "key8": "2pWBPUdoZNWyWVM3TLcRZtfWHJFEPqedS4zptgRzrRj8yoT4VoE8cbywTRXjb13SmXJonwKRM11ENDQZCLwi1mDq",
  "key9": "voTvqYHKcQLXmhakwxrbbJ5M7ZvLHAkKnEopxsQhFx459mpW8gDs6yoFtLzbxZDC3Dxe6ni3D6G3RmGdaGsrsZ2",
  "key10": "2NXaSskgDrjc3g4QnU8o7kRSE1L5fkL4rP34xdnWbwqP8YLYZqSxoTV2tzvWSKsw2Joyj1ScaSQ4sa7V1Czfj4pK",
  "key11": "2to1VU1TMC3qkVytdnDjMMT4kjPL4UL6157W9o9wVpW4GogsDwi5UB3oaQzPmLgvfssQL1cKF982Y562pPySRByM",
  "key12": "3KBa69bmTp6pA66RMmvP36SQ6PF4u4VzAQPhxj8k69bZJ3fhqMGP78NVpC4TAGbAX31opAbG3u9T4aG92DGhH2gN",
  "key13": "25vLGNcSu1t2Zjdi5w7P8Mzku1onjADyaM9hP8GPcrdKiJaP1i9NHiukW41uBoTigpcyAQMERCqBQxSyS1oSxhsE",
  "key14": "44VVAf81W6k3wgjAW7eb1b5DXH6iXeGBiBxBnwukWe7yUkyV1pXgmcLdEUkcX5sRrMAmMiwZP5AWhK91c4yJacuP",
  "key15": "2qD8usopvN7q4TvL2kPT99P3u3UGhhfafc93Zevfpb6SfzYfZfg2ADBZqSw7bNULg3zYQM5UgXfDeGjD5DTZYyMB",
  "key16": "2kLBp2LY4upfnofUviqCKaExWpjevemmyCiNKHcZcA37JBcF7S9PSa7ukosubsKTQfyEufST2K9g4ZZZUQPoaTcd",
  "key17": "4AmbuhE3ZiRKFDAfkCxJJkCkE7wXC6zxurgunogKu65m8vETUuVz5ypkfYpwNMbHgUk68G7JWoNMtT8YzUdTMq9q",
  "key18": "4BhV4VVctdRK9cGajuVmGUut3YLSocEcNSrvqqmrtG269br6M3gb5YRdGFTw8fnAji5UgtT5D2PXwruaNqJd3Azr",
  "key19": "5T1hXHb39gKQMNCQYg7fXGtiWkoCG415gwPBtsZCjZVVEMqgZDRCfWcq4tmkkom1LgeWUanxJmuxovgo5nowPK3h",
  "key20": "2FLr8TBjgSDwVvuLJQPTrZYRCrF682gzJ6ts8eXGTfr6oEHZ72aJFfXYCpZknkmiyTZG7FtESkMSBXfYucjAWpJD",
  "key21": "5jqkJQWxZejqUpmxEK6jCeziTN9m3N3DbUSKGYy7JYQ5ur2SK2ykmtAWQ2uGe1UvqAdBW54gW1jKsDECpmacsJrx",
  "key22": "22aAVh2v95GxnQBbAipFHWUbXMAtsLtBcVGpffx63ocfhUFU45DTuSMepYwqugT6puhZW6APKxJ3GhJNhHgXwkPN",
  "key23": "4EoBcbGoDY7mEGgeBHXCBnziWSTVS95YEhMHPrWzUky4mBE5GZvibA9dJaHKx4QKiX48tB5bxeVysb1NBXLMqDCk",
  "key24": "4ExcPrpC6nyzv5F5KWfGnyeTZpdRyTs7cUUnmpjbzaGN6KXP9e271uo5f7gheWk4KoywJiN6nwZjvjXKCo9YDEnE",
  "key25": "4E4QdpdXdpzs2Jvs1gAnwPBXcfR1uKxs7kDCNzMa6u6cHjtHUHwMbq7E7Pv64FzcAHv3qw6YhDFqXceMSNHoAhBM",
  "key26": "NiCxrJ94RDpStTGJvYeG6GmKwHDVpEmpvWpRJZBX8e95xLU1Q6Qc8dEWRoa7agwHav8kx2ha8d3GKc3BRFmjzXe",
  "key27": "2qoX35a9uv7Ew1TZ5ao5bZrT9Axzj4SdPziaNLoAnf1pYvNDSdjyp9ikzc2yroRkZu67SRr6RGYxXXBW5oS7QcBj",
  "key28": "2suB7fKKSmG9yRMxgYcWgEx3UuKZmP5Hocjmb4Uo8soNWqSjdF4n1wWsiHNuWUZ3s4hyZjP29q7VhSQfoY73sycF",
  "key29": "3Ehw6xXP4eHYGqPEj5v2Qd5ZjbYhs4pj9KMXSJRDKJ5LoSqBTYbKPNBQdPNJBEwNaqteqqFqRiNMcJHpAzdi8fvi",
  "key30": "4M591eymTPUL3k1AcxCCLRmPXyB1PeTd1mXWweDtqiULi6cunZkV1LgJM9a8zbwHmmpJgihqTs7b4i2z9dQNwWED",
  "key31": "2au2dKoMzWL2DKJvpbfs3MNCoiv5nHHhZssyzKpBBA3xSR7GxCfrBUfMpzDQoFZKckxzUWyMG8PVnNk6WzDzL2Lj",
  "key32": "G8PFZsLxxaTBq9ZX733txjCT3UY2RgAECzj5GqKVdioCHDpWVioYHCd4PVFjwnMuexPWKYhpoViUvUGwnk8qD9W"
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
