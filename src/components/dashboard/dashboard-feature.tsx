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
    "4AjFuMGsX8aN4UiLrMprrYuRSvLGfa2a8SXWgYER31Cmjm2tHXrFM1CPVERvs3Bzs8W5cMUE6xWx5xFk3PHkVFYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gq3skMB7jjnFc8MoNsjAwobsei73dNMBhMn9fJmhVcpu6NjfiMcqLjXCLfKS7UquJyMKwTmmVQKuwDBCeJXhkq4",
  "key1": "4tzMsTbd6c2L94Vk5bGpKbC4wZmB7DWQrCaeq15aAWn4YKbu6z6fcpo12eH1vqtHUC4ENt6z1eVGT33CyUe7zeAh",
  "key2": "3a8aEcGqQK7cMkyGyTjSUWbZPpwYDNGGZpVw8AzbycUyVxXvyQjycoLLvRtWdt4kKddh7Gisyza72bXvxA3kyqna",
  "key3": "5CNy9C4bkmXtrrG4JKtJ2MHvT2dX6qBRUfXEvdkbt7zzbyLPtMXqPTbrL2dQwE1wdSsaUARkcAuBdWmZRfGDcddq",
  "key4": "4YFDJ8CRBeJPXv8AL9xn57me4RzjdyigzQJMXsreBS2oEPwXGit5TZqmFaX959nm6mN1QSYvT5emye5XBsx1pUTY",
  "key5": "2oy7KwNSrgjiBRNp1tGsdPPiDAovGgw6Jf6qXJEcMB89BYFGEWenPD38w16j4XDMotLEVCYbGxgPQHAtjngksRNX",
  "key6": "5PgLLgdUFN7s8pxbzSJwuDQe6NW3z6xxnLFHK7iZTviNcw2SvcMcgNgyGnKD63AgWuAXQDBKPmhSkmzoZW8sSmyo",
  "key7": "4i4A3sUUBApPP5axHyDnfbQjq2tgSTs9a6oxCzYVg9sVEyd9BnsCvLh3LdzJFz9TkKtnaEhP5JWD414YohEiszis",
  "key8": "2H5dNL3oAuVMrdWQ5odyusb9oJ9kS7UVxLKXH8eoK6tcSWf7ZGEkFccpidxLnavyJVrGmAdQ6WiuxvQ5mkUG9qkG",
  "key9": "4JdJ6meiSgCHEf7E5VLA1VCzVYjWm3e2hgVvAXL2BpwyVCoMiwNZdDUdrXZiMshazNuSpJw8wxdToMrsNcSFUdmm",
  "key10": "ejEYHeRUw9qUksYHHxYCv3sz1yYjquYY8rJ7SQTJEaip984Rg2w7AUF9tpeNp5hVcmeocyNJJhC7NkybrmkvSHA",
  "key11": "3xzwzf2PhZdFuS66h66HPjq6w6j2geqgfMKLuCuyT9Jfp3M1egUnPeFTjEGwzC5g9PRte1XprCXH4eZFhpSUobp5",
  "key12": "5VqyEk4jgnK2Z3H6SaaPnK2bxAgVDZR2iDs5DbGgHSoNAbe6PLsENecch7PYU1E4S8byhoSiayLVPWYSx9fL9zJz",
  "key13": "J4VThkfs8jWnVNV3mUZZjbpxJSRfHv5Z15mKTpQxvNsypCpaMguPPm9EuHvSrTA4TEV4kY2vZ9hdfVqu7mDHewZ",
  "key14": "5DW6tY8vwpwNvw9MSUYxS61nTtzamQBSc5NQWeTDnN7Y6LaAsU3VgiNvXS9DBqPAjHTrHnxsHPAjoUTQ5esXpAbm",
  "key15": "5ZyT2uob3neojzzEd95qRZcRBXURkW5WnTMkXupNdYsJtFmrpt7gzfuxTYX3Vht1PepXxs8mVcjVoK3FKbECa5zN",
  "key16": "C5wUoVBfs5AGYRUd5V62edNuwUAB7LM8BkqkJibxSfDEZKC43wR7oQEQgzo8APHSFuw7k3BBLyW5YEs9nD6Le6Q",
  "key17": "38rpwYTAjei97nYf2XHpQyVq4u5BQcWJ37aF98HXgw5ra7SseDMzehtXLco4puWaSNwRcyV3LrNzjbQBQvrXNcep",
  "key18": "4ADSTkATyXeYH3hcQUsZfgmp6N8Zxud3YHxUJwPzkEuQRYWtA5qQzfcXT2L1GPqVkGMoagFHXXd4kH91S7cHVy18",
  "key19": "3no2Cwy3P9UefDwEtiKPdY6Sy7W1j5FFN3aZ5T7jeL3SyzHnM4hBsyfKgxEWGHGQJePKNrDPMZh6ZEaDfgm1cYhL",
  "key20": "3sjavZjzk9WdHXToSWhHmo1eRiQUxuWWeFzAhJFBCduSwLUSARNW18CaJG7BHrdfnYM3Fz16ya4wMq85ptmX1wPL",
  "key21": "4QZTjZhfrHQRBzvPDoLTbyT634msurye47azPN7m4QFkWX7qDKNXsnjF1Q6TZ6KqvRmyXRThcHkdAVPFfmMyWRgT",
  "key22": "2YYmAKsRuRxfWnMGBPXkgVmxnvgjH8tEvM5UgGTn3adeA13gdovqSNSxDDQ4tsHYWw4Q52THMGBvn6eMtAPLchoQ",
  "key23": "24V9FBKVvS8EXsqjYHftLg1vb8LVv5iwUQVfF8eHQ1hVM37bos4bc6rXMBP2j182fmFYZupFqN834oBPzHeGmjvG",
  "key24": "39urPEyNA1ohWj9bhQekkBqDBUC25qdac68qzeTcCE7yWjSHFsyGMAnKe3hdQHdjkLFn8vnyGAZB6hhiwRq8kA3D",
  "key25": "5H4zBoha7hKhbAnRRHK9pfjd8duepmYmtipgcd3j3mLDue55gRacpNSVUBJXfJC7P1azpCF2xLpPLMSCcBW7qKxZ",
  "key26": "5wBKuyRDjFSERFeQ1KNu2w4iD87vKzxjR6RP5TsFsBKduP9D9bt5mmMYE3WS85tYY3rqfpLeXJNQL8TjTJbLWEyT",
  "key27": "2EPMD5QxNzsRERdrCk3SV5HG9ZMURPkY518ERoDUmvLUKdkJhBvYPuCBHLftADcP57Gb11pKxQM4vSej4Q3Gq485",
  "key28": "3epoLzJmxRC6k2oNLhFFdfqsWCaghA6DaiGgjWf4X47sg6fJntY4dhBU1AECGzCjc8qFX5uKcG3RHrsuBnqjBwDn",
  "key29": "3ZeWH5SHuSTsxAnB1dvNsCrkuzT1Jrz9raRgsymbw6NdmiCHfoPoWVgVSufB4Ndni6mtxS2WZeFZXFkLyED39rKT",
  "key30": "21vFpSM7SPTcYBpD3nN8uuUM2GFDLBD7dNMcKeK547izVkDY7N3AN5ztncSjo1aHrSqWBeNScTypvBk5zjkbtVtE",
  "key31": "2UMQbCs6pKiB9K3jjm2GtStppQAQUTgv1a76oGxSUcYML7GVW6RqR8Ddq3fCwrejiYkYHTbn6ijddkQoZTwqZzth",
  "key32": "2NktFSxyJEtLApZRJt52RuY3fuyFXTBQ4bD3uVQ2WPPms6y6mZq5mJKm6pV3gwwYTZaiKL5SGE82iZQVHCJ8tQDb",
  "key33": "rKF3gZZ1df3vEHPUEKQKDmJB7N5zfUga2SDMh5q3TjFvw4Pek1jLBcppiXWh4J8jLPiZGDaU15Tu2LcWkLYjexJ",
  "key34": "3VYij3GkxyzGZwXboradN8dJB9erzWzN9JxN6sJKFJHFCCCY2ims1djjNHk2HBVCkvT2f3sVtwCXWVT5f8JccYWz",
  "key35": "31Hf8vFpqmJgxUizAzyg7FhdWGuk2THL8XUsrNVrkQWzoL5vfNnrnQLf2oT7d6BNKks1FGBB7kZNA86Axk6umuaZ",
  "key36": "QrBN3ZhKJ4VifTiNarb52GWcGHdRNK1XPcm8y1Q6MwRTNv8wiue9cb3pzdTt46QZQWaXhGiMhcFRTRXUHhNZWqQ"
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
