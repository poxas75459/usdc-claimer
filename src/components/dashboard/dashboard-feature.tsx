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
    "2e85DdYTJ6RJFQRLS8KuAwmxwvQTFnUiB9kYKQKBq5nk79HfpkQjJMPkLpCkMtQyywdQ4LkUYtdrJCT3n7MnqBw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jEf96NyfJ3BqsTjHWauezGANCuNt96xQZnwfp17qGjMVqUicb2Xqk3rjkj5vH7ndTFkr4CfsTWseXkZM18inYoN",
  "key1": "4DgMhNET8A14CggdUBbzfhFHpUmfHSmNAbSeQwBw1iwj4nvSmNBCDTVAJjQci3yxodP5VXVhMytKZi3wpcDZKcxT",
  "key2": "5RMLiCW9sKdvrLbNj4WwMCwujo7e9ipANy8Rz6iKWuSnhgzZdSqhicsNtiTyFQpubjVDu4bfA9T7q8UpQ2u6GRq",
  "key3": "45DSStBoD6qCVBKT4tFxmP1kS2AikQUbwuqViSnZv3xwFks7vS3yG7B5vuP9tmV8X8yfkTL2Vys3Daev61yDw1vT",
  "key4": "3xMD4fiypcK9UgPbXS7aHT73fpxebHU7fi1XSgWa855Atb9tBSy2jEseHWWBr2Njq9rnYnuAFMgCdqzn22WQ6ycw",
  "key5": "fqKu3xbqc6wKApSbgKJjToCSdKyWtGdoT1CCSa43j168vSkJpfCLWsF2cU8ZTqq8YXpsbET9tDegV8AQaQyGrcY",
  "key6": "2YJuiknxwjzPYNMciWLvcdt4XM4JiJCiN2BWdgmgjRSRAD5WcUnzcfv9hZfkmjrXWPHAtP9KAUGRbhiJ1ZNNi7FZ",
  "key7": "c8Jp2s7GRrEE45ophMpa8MGt5Tuxm5grc9n1PXWF71ZYCGFRQ2WSTviQnN8BzRAC1jN4SH1UL3QiMWjSscaS8HD",
  "key8": "t4eNcR1B7izk6A986NCeMnizC5LArb16SR3owLYGBSfzgxS2UgqjLpQe66kFPy21VK4Hq8b2WHzvrtafYT9rphc",
  "key9": "5tV1MRoWAByEcWWZpZbVWS8hXfR1iCbzqguS2TvnqCpUyZqDnRpjSuFfKEoi7Jjc8M51JHLwMzTaE9ptLmV46xR5",
  "key10": "5EkU6K3cxWsVZfzF1THZr6i4GuHNZm8qkdrpQsVZYiN7VEkgRmeZm3RhsUMZcjuHGZMiAfqZCBikk3hVjdvs4ErE",
  "key11": "pefMfdLJiz7BuyLvpXcUJZwecjGWa2jo9x4HoA8LakqN1Y12DFRAnsWkcceUDV8ATiAKiMEmHGRgim9GGVKDxU4",
  "key12": "5Qth3GyXqUM3EatMJob1mEem5TsT71bCVr7TfcwxYmbN7R7SuqQBUUnkvzEDX27zsZyxnibxvDRW2C8eGobepkop",
  "key13": "5CWLfS6oFsGHCrzXUT5EuVztdMB6a8Zr9E8zsj7eME1nxGHbynXez3RMFQkj5zUjDqEizVb7jcpR5NfyG2HjjV6j",
  "key14": "36UMy6neMsFm2qAAVBbYd99iGRDyWj3GpeEbm9mZuqwTSjCrbjr3ZfCBWYvo8cRAFcfg4CcCnWgwdN5ZmLFZz1LV",
  "key15": "2vAxTv7m1SG8PUcLFJGhKEnpJhPoZeyZiEJuymkRsQUyBtdPwVnbMfpf9YSBZfeRNL5uvpFHY43SHWszT5s6BYEh",
  "key16": "5PTgHdkj11MSSMWtZf3NH1xRwYVBZrmJ21JK1tSMjDmZfiFJBw6Vo6n1sDmH9ZKdQBWBvmkLz6WbozXEFDsa2cef",
  "key17": "65oRZUoNjqLQpdseC89yYGo12or9sifQaMdkS3SaYoUedLzBvFqdiDxvkfrKgWdUcxYnFBah1nKuctkyDo7BmgNM",
  "key18": "3VZXtTPpuETNwT7A93pvAk91GdDZWEQXNgZo9jWEkXtTGuM2eGSu4eUeKb7a4UDa2QLUFiryfXpZgayExVcjimAo",
  "key19": "46exYz2j6fF9SGgqRfBfNVb4Wsua9kLZFKXUE5VUUbK4uyyeUxQNhcpWogHH4zX9r8cjzk9HYCLaqg6842nCNawE",
  "key20": "41fLXSBSBaxeN5o7QLNJKR14EXqeKEESxQ682NuQCeDNoaCT5JpN8QbFfe35fTPh2aW19NYatr6G7kmGBU27mY2v",
  "key21": "3VyxyADYKkZyhRSsxewczUaiXzHGV8SuNF5m8fsUkQUHs5PPNFqEoY2JphohfW2diNo5FnoGRS5V15FAdiRbFPoL",
  "key22": "4t9JAY3gFZCiDmjQgwYnCi9e5gQc48KfCg5XHYsEVPhf3kX1q3JXpoMyCmaTn1dxsKMEojDjPJcrSx1gVgdDvBXC",
  "key23": "3KU7EjpgwuvfR2dTtP1pvnmXYTHVbGMacgMoHFYfNTutpmPN696KxramPxWbVEkwNkoKwQ5fiZVw9uCXW87jfN6p",
  "key24": "WdvTQfHDkhDV78sUcEHLtRPzUUKFyaqE2R2t6VVSnzhMbKQLQDhAPpSy5MfTSPEn4EEkEQiFZB3jBKCDtEFaF4N",
  "key25": "2pUV5oBC9GPJv7Bi3WF16A6BJQBAWg7C5PFiDrCG6HPAqqV6TK1koFi5c8BTTp2iJ4uuvd8jKXGCuwAzPCw7omoc",
  "key26": "QFLLnGcaPp4rgS2toQUiRgM5x8zmfWcoYmQZYH89NBntdxurqukgUhzhGjwW55WcNEYrShwGSkzwgMdTWKYh4ap",
  "key27": "5i6CcvAbB8QNCXWLKWwq9i8GncMYbbqTZNCQrg4faJacLv51m1KLjBx1uTrTnF3eWcLhCeWg7cbKsrgtq1HUgs5q",
  "key28": "5LPXaDotBvjJJshMQkD6CJXbiUvbAHWdi5zkcyVJVhoHchvnk7dNddvQqbnhPpKujTKoqgU9aGbACu2S3DszG72v",
  "key29": "MX9TFENCVqN1ajSMY9ZeVi8ntmLRVLgpfmuvToKYmf8FYKQHjXBKNVfvoXLY8meh3sks3tTk1bWe86aNGKy9i3h",
  "key30": "5ewwq1jq1cPugc3mrFwL6R8kXypqDGGV1Jitb9s4DSCjpmd4boUsdQgWNe9w9YkRssQzWYfqMszMu83w94v3WZXY",
  "key31": "etF9Cq9mLK97cta1iksR6nDyFLrrudu9mJo2wvfC5TNEDuGMZ27DvFLkVFfbeai8ZxQjFUQkuXdQDtSwYhtyzSm",
  "key32": "32LobvZqNpeJwyKEess35CZEmeevdjeuYf3w39gLsYstJZopoM82tFf535v4YZUjkfkGcTu93U5nX5XBSHNar8Qp"
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
