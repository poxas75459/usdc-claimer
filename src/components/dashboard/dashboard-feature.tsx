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
    "4XwLNZokWihw4SsxbZwLaK5diftgH6r1YodyMY3Ngwr1nfKGXnMD6Bc3wjCa7ZVexUzeFCzm1uNRc1XRKHwqZFnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGD6YuPNHVDHPcq6L1TBAev7zSHgUbQ9YEn9xDmDWZ885p5mWrcChPVNBaMXjtZKGNqqYLA6UhXnJed3ZaLuAA8",
  "key1": "U8sMUTnt166rJC9qygyN9ArwYBZRZSPaqeLx65MnHGj4wJUEw9MHBYXeDPp7WjQPZNEVwWMRPCcM4hZJmuK1Lf1",
  "key2": "4SqvMxypTnTdqXD9XtMmqbxXC9GBGBBJGm72qc7UmVismt1d9JyMfrPu8AwdysADkNRBJv6mB6dknXB3DJquxBZX",
  "key3": "4CJdGsh43GeYxJEVZa9QaJtACmgVwd1Zh3LMM5qtnt6Ss4wzRZDZFyTU8GtdYNt9mfofTNa2qxxJUqw6iTY2m1Nh",
  "key4": "3GePcZ78VzKtRxaeLM6zQoFs2zAKiZEdSzyRcEk6YUMptof3e71PZJQbVC89c8QYXb8DShW1snGMWj2uUGJmuLZQ",
  "key5": "2aEneu4UfVvu9tJvzX6MPSCQj6toyQUdEee5m84HNvP7LWkZs1wwCXeZVXcBSjkTJmvFktKR3CWfHoE4dVCAxXsw",
  "key6": "3G141Do8D3bYsdptWuT2n6STxwQRTcqSbsUUzDf6Q5Aba8VMRyKSV8BRaTSvSFKiTNUdc1b5knxjhTBiPX9ou62k",
  "key7": "3zHLjEMqqceYMxwqjyD3bqp18gwTHncVsDFejCxCLuPWAsYA2LppFS1sSQfdB96ReAKycn77AcWrohRmqB1HtQWW",
  "key8": "2sgCvLJJYbARcGnVXaVEhsDpZo2aNGNRLhHH3AAD8FQytgJygEdq53Xpmv51x4o5s59PuQV4MTvSXJvJ2HJ9fdC",
  "key9": "PnMqdBcaifZC9cvJ8QpGqS2gaK9y4WB9TcVvy8iQhUizxYZbUW7dT4DhmED7LrLxfz3nJera8NPyVyUEQVeZBfU",
  "key10": "44TRPjYRpuKJyCzceobXDV7dxzGMYFSbMwdfopQBgkMEmvtNcF8KuvjAcFgrwLEbFsWuD2P7P2a7AWLyJCucTRrd",
  "key11": "32QfJCbEw6hstgq8i4vLtoRXmK21zxfswZm6B5Z98pXoLtWj1u3RPuipLZkoxtYq3HHm9yTiEWqbPaMJ8sJUJkBN",
  "key12": "3u5BBT84NSBF8aWaXgiq8nrVaM9WRzd4bRcRHXgV1D2TRHwXDen32Z12HpbodrbiBccVThM4iDFMKcgBUMNdx6a4",
  "key13": "1zCXmmB3ynkCveUNzQnyqUSTXiioLoBkck9fCHwKrY8f8i5UHscrAQL5JQtgdrgLt3dLSuwJDNhwbni7f4nZbM2",
  "key14": "5SibA1Ta7PdngZ62Yb3rDuoCW2Bse9f4cBRp1TWNuvyNaeWFwq3KzFqQLenr9ZNTbLZ9WLimjsBUwJr81oWhtNwk",
  "key15": "5sJmhaE41ukDV1bJa4yY1cg3JtYSdaTWxpYX44Dj1CLPsip6gCyRZNexBR5Jzaj7LEWddfqJ5FbzoUJuMa7QAjw1",
  "key16": "4nxPHJMfZuxFkdXnup7XA4zf4ZcD9WDCg2HriVRUn2CmwtQPZ2Jj5yTH8xH2Z3Xnrs8uEy1fKzG4Sn5Gf6rEoBoq",
  "key17": "5cQMziA8eEgEEyvQ2gYLEYWRaKBTW4XTYQTqgdVZvGX488SqHGywa9bxafDCUKicdWsAUsXzE4VyZ5ce3UEda5Qh",
  "key18": "2QfXdsVG4r3sSzRK5kxzBfwGwpGdb8rYXtPaeYqKTcMKexsdHMrM924CvaVueKCTRzKa6VSsMHjpTHPxLKX4b42R",
  "key19": "5mZc4Gdpb4R5tezWwv5wurQ14p2yDdZHYqetYzf2v5oJLiKbypuWBWW6vH2iAyv9jtAi1DS89iqooY2e7Um3Bf1W",
  "key20": "4oddDQ3K1FT3EPYDSQUxRdX6ZLhu1HtMsPXWbGzQ6v5N6RWVWRVMbgJ2mjfKihF2zdAomXZEtnajfmhvcu5Ft62V",
  "key21": "2QiCP6YBSphPigHdU7StwG9uvx92Wen7TZEZbEgrNGVMnUrnTWwxsp6VDWEWNwuvfwz45ZXi59N8KLWeQUUcveFB",
  "key22": "3xW8pAuZ4k7BW2TSRsSPmquQc2onTQCgm7EfLykvhYKu19sdtQUeMG5MeSJ2cR5nT7sDaqwu8yB5wEf17TgvWXMj",
  "key23": "2M7B5dzbNirFLt39cUaFBfZETJ9g2ptEyE3izFcMcDQ8zKXH8Qq7YEZC5KtJodurmK2cK42ruam8RJfwGCSLYjqQ",
  "key24": "4AaibGZvSFy6sDASDGrS8PJ9HzRL7KkEVLzAQChA1WuwL1aktwJxhzeWixWe8P3cSCnbpTk5Zvu2AyzZJqBoZrrG",
  "key25": "5HE511refWiemLFBqLeQrh58NUPgC8oRzBvZBHxN7bSe9AKrZBnXn3oLi4Eu8kxMx29CZ3gC3gaPSy1saFMDCRo8",
  "key26": "paTBKdBCvhPDXwgffjmEcmTkd661VkgT9U9mV4r2RdeDqoi4MZLHRz3YFKzBZ29yrubE2gC892gpaygCuRquT1y",
  "key27": "3wJvHBDAunMe7ED5hWybcXzAm8rcDfEzbDACAF2N344GSEXAK2qBJsFajxdXnVYoHYdhVV2D2d2Yg9dgpBGZF3z3",
  "key28": "2GHCY4JYU7ysV35jWXoFgxHhdeUjfqegS8wevWuYqDpTZwKUAtwDC2SC3dCj3Wxdvgt75fZqRokdGjQgifziZFtU",
  "key29": "673SPQya96ckhpQjo672VmBY1U53wX5GKaM6f8NhLPMehF22Sdv66mvE3shUg9wDRQtv3JENyaUnfupMMWgJ56hm"
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
