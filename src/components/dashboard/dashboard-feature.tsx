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
    "36huThvwkB8b8zdWZDgDeBnNcTN9HFQCtvUbsCpqobgUW6S2EuEBEK1F5b3nBwTZanHbu11VgN1WbcZzkKWiXma2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZAWRhmuzqKKCuD6ZJ9YZuKkXLdt4rRBUovT2z5qLeSuxPGtwAJYzK5N47Lqck88exuFvRZUsjeHENDwsTTL4G6W",
  "key1": "4sSa8izfcEaYFhgDS8NW4pgPTZCMn19F78qzpBTjgq2UarjzLnfyMYaRiYRVmme8du8iszz7kSqmx2u8TA5nuNUX",
  "key2": "2J667PjSseqUgJdpdx3863KJDuZCKYLmN4eZF7Wk668SsNv8iMJfUUQfh1e71MssTW5NJkfgcPwUYM44ZaNfMn2C",
  "key3": "ieE4Bk3RYFvRjTkrj5tBw8JRqzFnmbSEEcA7mQtgnB9kpQMwn2t2ySKrm4F69EfcYE2JwrDotFv7P8G5paPG6wF",
  "key4": "6475kMEZS6AXd3CTSvkXBe5Y3pd3WATbjqsMkGJo8NrkCJW3oT7NQMyFKheKUQjVPQ26Vz5HdK9Fc3TGAE9erCNM",
  "key5": "4s5RzrsSW7tsX8PtmdQkB7neyBAkeME3Ue2W9AdqzCpH6EyTYcNvHZMAd9h6H9sxa46HVKdKFdh33ATVH8DDpDN5",
  "key6": "2PAmppnqSwgDydowDUz7pLsTgUzWRi1JiRzreeZrcqxyoiHz3zeMUNwx9uS74B5Fx4ciX2juQLTCQZUcvkhXj8GW",
  "key7": "49bNZcokTqnbUXXapQPeNeAwAt74Fd4cFuREJ2xveTMisR6UBoDNij53LwVXSc87S4am9MaEt9DQuMFetWWKFxpg",
  "key8": "o7yZ7q4cTtybo2aVZbWMC2GwFFHzor7bnBH7ZEdJSC2gkRDtaHrtpwHkQ5pcTqgwgzTEC4nVKjJBfubCZufSgFW",
  "key9": "4wdW9vnr6VQTybERLjgHcdNYvZe9CQpgKTRBRAN7yw9Hw6yi5kfEFd1VFYsSrMdkRP4D8vescU67AvPndi8ocKkS",
  "key10": "4Z88LrZm77tEa2AxTmF5vFsARBhoHxUE5o3vgd5aPREmyUR1Ut8pFFE6AdwdqKRyRJBkUTYmpN7JtNNeVACh8nGU",
  "key11": "3aasEP9nzovzvdMEoQK8udQciUZhfWjMEaX3F9x6zpquqz1p77LBbHV9V3NukBk3abPS8W6opUa3kbgKf76iqZ6L",
  "key12": "44JWFFjPQTPNvVUUg69RMivob3actF2VdWXEcuPgwB2dzZn28k1fiBMSARiYNei1YhM4vCBNg2Zwz58uRgPkjvYs",
  "key13": "4678nNPrfAXeapuhkc7vSThqFmGpD7HHHGPRf7i3tQdB9fBTNYxHXxpJt9e43VjmQ35sQb6EoMsK4NZ6Pmp9AUyY",
  "key14": "5tGCw2PY5NHAXcuotfNX7gzJyPPUhVHXEqcQVP6nuS5xjy4PM1WPYkJzETUZkSm2qCSvw5yajj6T1HnYMSgZ7ZH6",
  "key15": "t7JXDkd51FescYszPT3AoUe8nQbsF4BRXEx6ZJjn4uYRP7tb8L3VbZzw837vtrQbCfsYgw932LXqDVPmFR5wjfD",
  "key16": "3hS5LMexCgT8Decr4QbrKyroZ4uwaouai8mE9XPtgSrmZpMtLiCFUxjEKaVoVUsx4pHuSnUHwgd5ZkKa3nGnCmXx",
  "key17": "k1wzb5wFGGpKBFwyBxCXAGsz58hUJv4D5RmcwSN9uYFTu4NLLUx5nCAcz2xGJSoS7ykvhLsx9TXnYxLzbb1dYpC",
  "key18": "3uKEseVMdnTnHkuvxNx8jbUG85SwxgwKVSWufR9McHEQm7i75vsLwDjJDQibUh5WHbNu9wVrj3rVbG5k1LZydBC8",
  "key19": "79SH4VgGmjKcq4By9viTvDLZxjhyaDwaXv94YSEhwWCiciSRKep8U7VrSprCFwvhdAeGeoCRiNxMJLsg5DceT9q",
  "key20": "3Wy9YFYctD9iiSezv5YEiz9GSYayZdyrEHkZQPMPE2vCf9jGNUxvs8SdshhrG3avZUX9Ru49bxSNStADva6d9B9y",
  "key21": "33U3hszBZdz32kCW6YXtEVMPqSZCAqXu5HCCB2G4EA9mDCoRSi5KSK8pizGNGNHF96iLzKRVD6QLHGbHc211zh6R",
  "key22": "4UgUeNW4sgD8ec8T9DyjiJbK57kESgq3WvbQMSdxvG5bCPiLxyaEBRq59dfQsBf8WoUNW6meBpgDUrd2MLcgpALj",
  "key23": "4WthcHXeTFtbP8ygmacs29LuTNSW9AGNpoZJLfhopHthewJNFY41YnbDhYWpMefNasZ6cnzVJK1bpG46zLvg3Lrb",
  "key24": "5skcZ8DGJtkKFkKabndmzUXHbWvyWZwV7K89d2V2F16zCCgLEpUwRQDrKZcdeVXmn4Hs6dKkeya76HsQ8AgfaLYh",
  "key25": "z5wUjvfyzd72FSaSJe6bxhJkfM9uwcR5MbnE868ggR2V6NK6evpKQmbVHyReXw9AMJ4de2KnrNsvQ7HynngANfZ",
  "key26": "38svDQkrmUXafJGKxuimv9UmEukQowuumGPXwg5V3yZU4mounWV9J7LDNqQfJitVc6XvP9j18eXYEPseG5dVQMB",
  "key27": "3yf8qh2u8YWpPWUQSM1T2mQdmeYcwWvGehMrC3JT3tcZNHCDVWVMM3AK15RVqdQjXGmd4kcKpGndsHBSdvaLQVu4",
  "key28": "5PWcJBWetbUv7H4bMyAb7mwz7AUuiwHF6JV8cZoFM1uDSojhXeSLYKGwpPd4JxYjvHu8bfx6HwAKfQoP6Vpo8ZaU",
  "key29": "X7P3Vfi36hop574xYADFULy4hdQKmMkspoTh5bYUjNBRPAJLrSLjX2T8QkthAe9vv5hVaFUseyJRHev3GjTpBkr",
  "key30": "4bsav6rBu27NthdVPdzTgM6deY6Pnrkwr2YVrmTgRBWFTh7bGJUUtu7LNLfyiMjJAWamdpnrYvknYgpcHGJkENAM",
  "key31": "5TonxVNuPZwCEpSZzs4vMSDx6VnTpMAvrvypAT82ydJUCQ6F11Qv8hFuVhU4WT8Y4zgNSikkMtDNXsocDTCPewhe",
  "key32": "2viBVtFqyEiEZzGAnTwpvpirvLoSrm9rPKVtTyDj8mULWWi1TnUwJv8VHA46WNSPrjhZEULfMp1jaAWwjE2anKBg",
  "key33": "5yiuGdB9GtaaL9UPRozr5QEQhawtjw8c5tcmos3haHk9SjgrMhMGPPBjKxDMgSRjyqKvJvKc3YQBXnDPEDeSH4DX",
  "key34": "3AVrBTvVRo6Fn9zy7mK9CQJnm2ShvPvt7m7UTqasY3kZ6a9AAJcWwUyLRwNMS7Wy5Lt7n9JTRS99FRux9SqGgS9U",
  "key35": "3PdTgqVczabSbC731Ffu56Jq1E3qFsWCp5enANitZJHmC4BGTix3oicJSLNUmfSuxd1dxKRVRGF7BnZXxdTC57cV"
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
