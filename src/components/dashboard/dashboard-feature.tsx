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
    "6193x4RCJDGRPjx2Ufk1WtdVbUQejgn5uKUpV2CHrBk1LPJEmSY3PJzAw9ZV95vtGcKhRf3g8sAGc8djJAYBUPr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Du77RUXN7YP4yJniX89ZdV8c8kk6WaugnNAvyMDCoDFTS9mWdnypQu4EQTh6XJWtTXbgPq8NkRhZyCchwzfBHad",
  "key1": "2hvNzTizKiARVTkFJ8yaGifLeDauY7FkqNJurAA2StYXkZRiGgRDxTvKEid63nxmha9AhdPyzF2ZwNVFg6H8d4kJ",
  "key2": "8LFYWTGxj7KAT3W1PtCFvpF6KiBLuNE5tsSfmyGmdkdjwmp3yusrCi2HxZCDqBeMsi3wFCQS9eFKbDa2tCp1P64",
  "key3": "5StMnbFCBR2cMMWhn33uZPEg6JPnjkWPgV4y3XQoNabGsACNJMvVrHq9VwxkFNVgsN79Rm5yKFAUkdoPkpRVWcVc",
  "key4": "3E9XwFGYi7t8UVyuKtgo7y1jFqV8uT1MYcm8qwHvpWs5oo2oM78oxJnYTCHfLDBDw7szdtPZWC5g4PUd9d7fq2wp",
  "key5": "2n2r6fwMrdnEcDYaKr2g4uV9pSAKkuSBGssvRB8oh2s2fvd12UtVDBj6CxjjANowpsUAF86fJLRMXvNtZzXthG2G",
  "key6": "5VVq2cBmrr6xTZBL4onp4UGKZchqjSN2ni36i3WR91wwXmYDFQe6vRv3Z8DBMQ46TLw9TvfLpByv6nMwruJSywui",
  "key7": "qmGxozCGzygDo5t4YCVSs1tDbN6wWs3ch4pZtPzUaiqP4dz3TZBxZzwyihEqoypBbBYG4kQ9xhX5BWtYzqDoKaf",
  "key8": "3pMP57oCgPXJ1qyPccVUcu79QmP6rKmVMsz9vPjcmmLACog2LmbKyitchc6PrdtTg7JB9vBPwxMrcbCvmukGpsSz",
  "key9": "L9FbAvqkTrotmpgYcUmRYsJYnMDCd9NF5Zzrh2CFKbMMEL7xrgVuaAEG6ChV5Kjg5b8FyWD6XUn8oKsvDzTLnJm",
  "key10": "5ZVd5PEcseJcRkCo6XcnGdtna7mTywRpMK6rVwVZWrd3rkYa4XDV9DtZQeJhENEMkrv55ScTpaZbQTAgjRz67fDi",
  "key11": "apP5cHoRvxihGC1VH4RLyr4Z9uopbC7Z8pZ81XMB4GRCV9xxRneJtYTJ9NWLFnpsHjicbg1FaNv9uLQECDeeviy",
  "key12": "4RSVi5br6ZYXTjpxvbG4UgQMq5j8TJKPzkghVhJPXrqSmhXsndFUE4TGkE2AVg33WJBi63CJgSjafR6HM9nV9Z5t",
  "key13": "3dNkLRFUT8CfYoPLN618xDCtq2kXEvbWTB9aSi7cRXM9tP4R1iFumJz9ddQ9FW6P8rsjB2ZXjoeAF6VutwLQ9qr6",
  "key14": "3xcpAa4LsgXduPT9ZboGxW22Qw2G9Q69FERYsRuGbkyHxJw8tWczTCB2qqVrnix7hpFUaDyPKYsSsn9B7EBsD7Jk",
  "key15": "iMHDXVHAnDVmFnmMAc44PRFwwqtGjhdRBtcwpHbktdCUZfkJ4dHAmngaZT65L9wMfoQAcciMyFLPRpataL7BkEt",
  "key16": "3uPCg3aLPgqppRW2RarVw75HR6ij3WpzaG9ciEwHE25jp5eA6z73m5gyqtLgJWfeBBSHoCE5ZXSp34uebqDT5C6C",
  "key17": "58JrpTrhmN9K8dN6nCjShJnGbJrAP4syhkKkYZs9EXjwLxCDyBvnsV4U13WCY2h6RUYKsBoRPUgwwy9FoQmAxgz7",
  "key18": "4WAUi7U1sTAgUygABZGxkHK3V5wygpstSxzKTA4bT5GcVbJfbwMDEbNqj28VUUSrTActpFPghBEkUKRy7Zha1DP8",
  "key19": "39YbN2gcKWfqzFTSqzsTR4KEMuBAm1hmebgRJqdHfUoqdXDrXxXLXWghyby67xBLNFTF1owCZ33PkDUxf8m5WBCf",
  "key20": "5XaMb6exFFiZ2JseomNgBXCdYLsqX9A2axbXxKtxqkL86xurARHdnsbG1Euj6JpFVAFSn9XdtNUuoaoKoqMc2j3a",
  "key21": "673p97omRVaVaKSefdLqW4NC7DLvddqKixjLdwxZFbUKzcLtbfaHDrVauRQrKHN1DQbdFTaW1ciqM2Zct97noqTa",
  "key22": "598yEDefpNsYN4bnkaXQbn47uKtJzfez88Umb3UX91bBjfkHJp1pyTB5RkRmgLpkMTDZdqhDKbSZxGaP661zXNdW",
  "key23": "4kiZrgDQztZEkpJTpRVdXH1YtBzZFEfMb6rXd9nm4pNHWsqvVTLyQAeATrbNyFM1yv8UrDKnS26BwyW62PrcDVaj",
  "key24": "5CCzVkd7xhJAVy2DPQTH5iNcuSgkZyYi7Lk7CxzSNHr4i1i8wkXEM9Y5HS7LR9BfThQnWSDUj96B62RCe4zj3tin",
  "key25": "32mrJHEwbPYqLZHW6XTVJowZqUeTp3VGLosh4m68JbqPMJGfCvHUBwePH43nuF6QFTHNWdffstzFXm8P5wEMMMJD",
  "key26": "29T6d7N2Kr5bTbE4VMNnssMjRuneMVDEGHFW42V9z4NiUUkEEKjhekQ7LwGh3ouz4ij6z5oQfGJjZJJgUHDB1S9o",
  "key27": "4C1Go7wAsgESWv5xUqTu55t9mgbixfUopgtzJAkFtAUnYdBsAi2yzRVPqck2Tm7i8JPRR3ymT5pFgpYb4twC5Mko",
  "key28": "2312Ndf6PVZu9MykFowBdXmptU4PRjApon2zuJfvX6UEmHgr3um1A3ca4EZfEJMoBUyhs4PDCXjRMKs1F1hSPosA",
  "key29": "uzaGWpYmZGKUpBLo7RJRyxM99x31cQaFk3Q7JmpCZSE8qPyNCHCiEs2raFPF3tkWt9zU4f9k3tWvrbBEiF1aJdx",
  "key30": "3YcEiYxJ1RgHTpJwNcEcurSgHrnYy2bgJavChqFHBHWqLsn6vvFBFBBNGy1wFJk7XLQHazb3dhvsP3aKHJGF3Uts",
  "key31": "36ytX2NJFr6VtPCDjyyCqhZneFFoF5HuJ7SnuuitubyPeM8c2kmeUveqe13yR8M6totkwcVuioZ8u3ThryCEuY4M",
  "key32": "219wkuYNadWfvR62952XCabWxbQjh9pUkhLBx6Nzn4KogHwCKVEoaq9eoVLnJJ9eYWnkt6zcKVtJpH6CBdiG4PHq",
  "key33": "4dn5rwpZZhNBY3itvC6snDJ1iNzUEkbo76eEEbLP8rQLhBJbqjd2LLNALTjexJTLU1kdc8qCbRQYC357FEbtU8SD",
  "key34": "4HMHUXhzKD4JKXPbjhw9qpQAnizZ1DjoTYGbxg3srxcs7t4qgAwaxBa93nRenqNtLH7L9HHMmeeaLd5joNh6iKQM",
  "key35": "4xMhW5vvZjG7HfEN2ADSAYQF3RZFex6PkhFbFNJRqSF7PqvGMsWJmcq4q5dBKRMecvas8jM97iuA6ao3Pox5zNhj",
  "key36": "2q189BCjf5ZfxdTQ2DS6ASbqkkxUiAogTETVPu82RGcbs4hMKxT7BsQ4iAEddEpSv3TAK4dq1t8UhUZgK38WfSsF",
  "key37": "25CyoJUSeskkWGqDVTbT9PUhSePnS5hCVP2bVeUbq1WZU5qPk1CY9L8WuFVShFuVb5n3XJAhm7yYRGBANkr5scRf",
  "key38": "ocvHyFk8xemdyK9vxTPCHf7BAeryrpzkQYnFknFWHQzbF2HrfBQcw9CA9AUjRyLRXyzL8NXTv7zi9P7gLpoN2eq",
  "key39": "5JqDK5XkLVVrwcMQkMfoirLxuCBHgPJnehNGEigMyihYQ7QafSiqpW8zRvaRkvvm8D9hhUvnjvXSjQSYQWHKt1Yf",
  "key40": "33debvqg41KLxwaoejkr1NtDAAEpVuaBcxghQBr3UhTM4q7ne3HMMfgLmpUWNNed3GFGfnLaqqkUgMKr3ZntF7fc",
  "key41": "3MAY7zuoi4jDhXibmeDttuvMW8FCuWTp1JFHd6PWNnRFWbwduLKvU9h2AXqxEAzCu5GG5J4NjxZEGa3DRjSvP1qy",
  "key42": "2nsEmzSdGzN1ZMDwFnnvC9fWdUoUFMLkKkFMVYodrofANboaB6nJYdmRyijpkCqWKGAjwLvu4T6VL14q7zzXiaZo",
  "key43": "q2wocPXDwbL1BtpYc1vtvQP3FTHKm9LXxA4u4AWMWHLGyogkDZoDJhyfFrPbJr2qLheyJZogvCkifxiMcmNySio",
  "key44": "6683v9HRiNayFvuKgJ4YyUmTgXio1KEXFEQWELzoGxu5m8zdzkK9D7b35cpos65HzRxGKFgzxEzadzzSuyzWj4CK",
  "key45": "5Rg81jvJ5zBVMfpuZEba1haFj5eo2Gk4nz3iDzL6XF8eEedVjfY35jKVdTt5kZm8A7piqpL3jSkAs4T8M94dzvie",
  "key46": "4mGGqXd6nzRNuUfDC59URAF7aBhty6wSbvSNafXZXrmWFprEqjj1jvaZMqdnGYiBckUtXXAbm6zpKecVReNcar2W"
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
