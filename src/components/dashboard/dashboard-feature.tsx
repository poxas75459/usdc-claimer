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
    "JP4kWHmfNGp85ZZtkJZkxca3gza291rKAvmBpvYVphFd3YcDVgJvUJZtzLJd1WXSm195UR9JvLehixjmKUCsiBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sxiBYWGoMY9QEtAXLc74bvy1mrtGjTJsF8a8LJvquacBAP2FfaN49AwVySPAscE7xgpwUEaKPvWqvuVQTmsLYuM",
  "key1": "64BuKjcbco2QSyRoLXMWgtvBb9YFirAsFgmi58U8ftzWfeXpVfen7ENNytyKpzdAMeW5894fnDxNf7R5SsrjM1fB",
  "key2": "55XyTw7raneqXZRLWtY6RekwSMEdrpBBiWscCrnWvhxZ9Xoju6ubd1hS6vENx3pJpW5Ab5wJvqsJCdKg1K2Kx7xR",
  "key3": "62LLMaXdzQw2kuyvcUC8HEXX3NkB1BKgHE3prjq8kosL9JMrzsitTKx6MS2u2nBdhVmiT6Km4LBNiWJCxmeoE58c",
  "key4": "2UA6Uv9yibpfRJ3FUw5tLS6HUWWpWGkZTHcRRyh5eWK3gFF3ERLfHSZ8mR1eDzZPpssQEM9B3faGLNTHZgdAfXSK",
  "key5": "XRVtMs6eXfk5aB8GRiSkwbTKcNw3EsGNd4xAwd8r4j4EpVMHPVjgcNELJtCvbtXtThGDcC4ZXo4zSax7t4gQdRZ",
  "key6": "eixUbiMHSXMaYjuoUed3YqRJy88UNf3SvNJdt2cYsEi9fuFRQECWisyvnLcZW8sG2WxKf6cfGD2d3JAi33Lashc",
  "key7": "x4rzjYXXYgtwjUV4NuZXyR41FdhYUZWyJ3dV15cMdftdXbH8jXeUg2rQrLVRKjcgPsMq4jJ2mwWQccD2iPwe2h9",
  "key8": "48XsdQWmgYYuaFRsXcpqHv4tf8CatB5VtyPsVzmEp8JHDA8NZDvoggk9m3WBbJDNpwmAnbV4BJscqXFfh5BAALpD",
  "key9": "44J83uCFKeAxYdheTtHNcYvmU2Bza3kowRYCCHqE5ySyX5ePEwceLWSJsxUiCqPZg3a2YaNpsnzzrKkH1i5z3FqT",
  "key10": "khfdX7kZhbmUF4Vhcnz6TnwHYgEDgJEkDU8tboxYrT4GhR82eQ79LhJFCQ875SqPQ2d6CYjS7XwNsLxwFsWK86K",
  "key11": "48YvBdNLFjGWkZHVC64dBYVQBWSdZrbEQLsr2sd4oY37G723zcHzRsWZpnd4mhPCUU1gCaHQa18gCqSnfkzH1dJM",
  "key12": "agz4NfUgiJez2kG7Aq6tFSwtdiEcWk9rxhWUtYdJLw8P67fJJS9kc4Fxf3FRjWSCdqPskCXdcG4MqFvx3kYFdSn",
  "key13": "4Swf2bffVvXV2k9rZhzz23Sq1MLQE6bPfD4wUYB4uqaPD8JDSR3ffRrekL88dUzAxnWmxGitCHzhBgG3WkEZAYQx",
  "key14": "4i5c9bYpFmAwcgu9N5xuesi2CSkeRvUgro7aMX3sAzAP7dnfBxZXeoZu1JeHJdqAcwF9amHuHmZs2RQkmQDY2XqH",
  "key15": "52h64XszCPEC5iN5jJ4Ns3nev8yLa2VhJ3BAwuTCZmMebrqU2zM9RjxvHHBpCoCGq39J4JEnu559Kp2YUbBqgEuv",
  "key16": "tj6SaS3boRidzCBeGa3uCF93ZPrNE8DM1cmvjkWEet258kLtwBPuMDXveDJNZ6gooU8CHrN2sqqfJLiydgqSzG5",
  "key17": "5uvQiHksDePLt9k8LbhjG64uAUfeRyKC23FMMDhQVFwWndXKdxuMTzZ6bXwjmFmYBmpfsqLszmjLiwC1nwv8To3q",
  "key18": "5UkrK8Nkmwq9bxkLbbkKLXzG8Fg9mbQxiGeUY4R9eDLT51LNXcXynYAytuHVj8iDp1Sjg2svhLXzX1mK9hjtsYQQ",
  "key19": "3yS7KZTAeNAU9DG3ZFrhK6VEAn5o5pkAJ2ijcR3a6xvVk7gCiQsFNVsvaJYAUk79ck7WAYA7cZJiQrfxgqZCkNF6",
  "key20": "eUPegMkVBfTmDZ3hyiLUQiTiT4AUDg1vvKKAarKmAERfnHsKA7CkCkurn8F5fWyiym2cUqnDyXETU367Pb7xE8W",
  "key21": "5nuqke1bngkNffD6BjDQXczH7cx1UkSWkaHPhXsaPeHsZV92MT8VvhCFyj6WbEDhrinE7Pnknka54WXgwfXacGA4",
  "key22": "5xbuyAjwiQ8QzCP6WcAyHu9ZXk4ABf4nbVHSDC32UCm6cniHDxdPtquxXs2P5SqNtvs1rY3xyZiVUQWA9K3Jvtiv",
  "key23": "txxzBw17VF1k3urq88zEYBarLH9hzysAoBErgEhbNkkMRFaYwmHpR51YtLLdwgfbyCsRtfkbXJ7Uv84UH4PXb1g",
  "key24": "3WbgJhTrQUrBiZvAKVm7kgbWQUt4YQc178xEL37VsGRL1YPSRsjzWk9832y8dayjgKgxrqbBEnEN2AnFKRQj7HxC",
  "key25": "2JXBTiYBfF2y6SMirEDfdYEZRFjtn1T1irEQ48K3ShXDXy86nctXW2UzTHA2BGetbDWkv4obKEnAWRLEtsjqJho",
  "key26": "7Sqd6rL9iHa8wTMdKM1WVnDqBdva91zjqRHfoiTmFHCjVzAqMVqTK9a2ZmxSxdwdFcydLjHV9qy1LonMEVPjJbN",
  "key27": "2o58X7AgFXgUttR9XFN3snpNLe9zdd9svpKv5NifzM3MhaYtYw4D92vvcjbp7h9TnBf364nBhFy8AEWsykvmXB2Z",
  "key28": "5rngMVr3KYpd3K6zXuSv8mQDEffZSfnwZrXgjDLsNx3UsU3qaDz97CUbkgU7PS9pV2UwgEvBkCGW6Lqg774hwx2y",
  "key29": "2GvGURbCekJxXSB3xFEWXiXdvoGmBfTnMvbL7NbQaowQ23HzEUqYPqenV6QLREpCPY6r41B1KiCYKx1HAfFts2mw",
  "key30": "2HGuzsfbNH7kmL3D9pkN5XXeonJZmeWyaMgb14vbgW8km4AfhkZTUpBYxo9BhZ6ork1udSYmMeKbsoFTdJRKmgpJ",
  "key31": "5jJ8p2cNtDjvSGiJxuiFRzdXC6LCwL8D9RVv3PfNPY9gMb1ejywgtqvWjEpaCr5N8PGxFfDFWib1NMbotwurRRxf",
  "key32": "2yHsMtW63MQ8J68nixaMfbzwDqtXjiYFtLPCPRYF3TBCF5k9WekzRCdvjAKhcPziMp7bSoCjGYEn2jhTyLBeBkBm"
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
