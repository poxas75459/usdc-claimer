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
    "5et8V4JEaQxZVsqeJofqRrgsvdPzdLuTyMsgFhBWQCrYYuLcqPWGA7YiQ2JUVXcrF8fYdD1eojeFN7SPgZwrCU8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cbwQFWtPsx1CsPgcBPB4LVWRuSt8pxgixe23ihNsW4ZQCVzt32ZQSXS3Hfc6YBVDXrwGqvHGqFBV76rX1ADid2n",
  "key1": "5CJ9VhDHCYWauLta9YYMACHcvf5bMfVsh4qqo1LXLrqHKFTa6xAi7dF6hrnoq2Jfsq9yjztWaTDDKBRoiEhyX8NN",
  "key2": "4VNiqqcstDqMyi9zdVhCQXUKjgvxFaDgkiQoY1SKu7Gtbt3Ug1EfAPArbYXJQF8uAVKZVFrhGqhhcbRfTAGG6tWW",
  "key3": "gpguSkzEoWMYoGuGyvTA46eDTaeyc1Bj5fi6D4DHCJqAdj3QoCc7YQ2PLGMpg1HtBXP5YMDUPyrbNhBqGbVs6R1",
  "key4": "2CB8igFcGcJeHfKmafErncsHeFC4BoHVyvbB6jZEoLCiLtmYqW7JiptmpT2KLmQafttn1FYsMY4PyEoz5SwzciiV",
  "key5": "5ZqoW8X6MztmQzMorkXZJD9dGmwxqqgDz4SxBytYDJMxPakMzuQHHPWtRQ3dPRLWhdg7XvnqMYCdxybYKm4dMen8",
  "key6": "2vbCQaCy23G78Zm6XcC6wL5uE9Nda6f9bg5yWLrLoHg4V4mSuFZoiDxycH5vJa3KeCrJPS2vqcEV3ohHxatqG6gf",
  "key7": "2XSzwp9JigjquQvG3Gn5AUjdxuBEkVbr1uxvhiRYvghBH2aKN3yUf9TvKefoBXKTnM6HFJPeDfTTgXbP6ivfcZeA",
  "key8": "5ZHJJUMXVKE8PJACNwbSVvHQ86jkFjXbBNh4zmX4KdoUDQ7eHMZDxfzFk6bxxJ4GxdNYBN92yjeQ4nDB2nTHybx5",
  "key9": "2DowioSgJA9sNujyKyx6ZAYco88YSw3PJEhUYEPVkKRPZ5nj67LyHRWr2t6BvDF16bN1fcPLDR5b5UoR7edE92x7",
  "key10": "5K59Hz8qtV6i6NBFPvjZKDDE3Xgxej7LnBAs1Rd4K5bkq8GkA8NGicRix9fz79UtSjzbQR8mDiiKV94WvoxeRDxj",
  "key11": "SRDU3tAwBR3RVNSJQ2gSG3d2CWTrUVdfUrBfmee2mjWamepvKdS4iP2x4eEDAYbfPLZgzowq1G9G4LkdGTnzxJJ",
  "key12": "JLn3FYYt5sKQpw6KgznwkitrhR2uojpTKjRG6TR1ZkTTcNVZDHAzPqj4tAFqCMKpZQrewdpbhgVa8wuQEvBJhss",
  "key13": "wh7HpLpMRNKQe2EWPkL3AXWWFPogx9fozf47bJjCm1J7xmnz8jw87eUwgxLp5GQaANcf46T3XwzyPeYm44xbqrB",
  "key14": "3y6DFJK9xtG1sUQ6zYNd7W9qr66nV1GhaJgi46d4mAuTrLywtoqbtqQ6sWNAyFw5mDXTdbjjcNzNFnnCThyuG2mh",
  "key15": "2pHZz41PRB9X7ihYEwUKCFXURADqhaQcN3EDh1ntsQgkTvBgqjYDHoQprUphq4tkhjHARUPUpTizK5UsALzT9kbM",
  "key16": "2TiTE5FYH4VPU9CcXeYS7BQN5Bk8THXb9wnPsn77DFzv16DkvPejzrLSq9h2JuJrggBS1CmuhGN36YMdPn2obyQ8",
  "key17": "5iMaKm7Ntvfzx91nJs9CEStcMRKXBTJVF159xxSCVJLBNHkUu18Kb3vW8UAfEsNR7QRjaviiUk96K35yVBRRqVDE",
  "key18": "4WNSP5ygCeRjqTWCygpv66f4GaGi5KdTFLqh17DWC55eo4EKLwuKLPPnTiA8QazSu3kcoFuLoBEtmc6NbNFjZbCe",
  "key19": "3SFJVCmSRX3dqKgCgW15jeU7nCimYeN4ZkHnrH46mcGz2iDtr2j3EgyH9ohLDYCW3hPHaZCbehTKJush7jAu3BGi",
  "key20": "2sgeRfyRAZspuCWzSWySsjUDkf6DrNSABzhG5GKLkWSe59ejX7MDYEWZMfFEs7B5zKpkCtbFnBGTCyWPsVb6UgSJ",
  "key21": "3yVq7bLEzqSuTqJrQ7ouNCQB9xDoyneqv5MLipSDPYXnkGM3yd5tRMcFA1K2ahQaHeQhJc8ZSuS3SuZA7Rqjpe3R",
  "key22": "TR5TPuruCHqXxQZPN12ur8Vbv7HUbL83BzX9V7q2TpsxnG6vTQ2xeogXZBtk8dbr5mmqFE8DgVEZCusYEb84bgx",
  "key23": "61V6j17H235NZ6yAHsrSqsyhJtJHM4yrYtzqmPpQCLAMYXibm2Gdg1Bxn5X2gVpEeDhcRVY1qZbQjF4Sbj7Djii1",
  "key24": "3eqjaipUSZR3PsUSyNRGjWw4bsCJBXF8WFZgdXc85zCs66W7A78EcvgJnH8dMmSZhCX8UWdoXhpNKhexDCga6D5B",
  "key25": "3wenqozQB2dZv9kyiRm1RJSq214zhqb3osHK7zZf3K1h9j1kKTyk6UUmHxuSNUjKkdNXaUdTn88RShfuVRn7kzZ9",
  "key26": "3MdpiTVuvSkWgF7wvWJM5NKTDmoSYc5ESCRkTLpSjC3KGz7gtE834bsB8jUL8uVY6M1VPyAxa3D4UQ3nMXZ122xW",
  "key27": "4biP1EujecevnbguyeyeqZzoMNWBD8LjnxNvxryfVR7NdDBAs9g1pa4kQ9NCrNZfn9ucnRSmEJQAJvcsHuPndJgV",
  "key28": "4fbSHhECf2h21vD4tPZym5KZUyXtm6WbdU9zTCQGfBdDYnXi2cZ27LvMUrmBdczXS4qW2Ai6w8JkhZbsDJ8hWQfB",
  "key29": "4v2Pumh64v3M6KGRBhi4Kswr6CGFSeJdMhZhJungeMggTAHS9KrTdB6diK9p4hCoVmDUSGgaHSHRrmxgNr4hAacZ",
  "key30": "3FDJEXvL99RZm1DSNSGTsyZsAGZJhVxQR6VXFjG9VMfT2ohjxmAfjJVhcfy14wGSxNiNwQJaeRHyFasnnro9w7vC",
  "key31": "5KtuchURF8SQJdJTUgAq6JnmYSUbwSteJYUktKGV8avtmPXa31AJBG3VMwVbttKyrmuGPcqZFftS7S56PNqBS2ad",
  "key32": "9qeTmk8C4NNqV5jEczEGgX88eW87FKRQzN3FMCsrvdfz6JNJJaesTMCfLXwnr7gidmEYmUyPFw4rRqZ4LAeqHqy",
  "key33": "4gzogvQzjowd3eTfVrfYUHkyCnCGNDxAYeZcfJsPYo4XsQj8SVW81iqsjseL9MDwBZ9BS2jwSFf2PHt8qFy7WTuh",
  "key34": "5UNoTMRryoAYbbixxZtXKsmNfznwc4nhCuVfc9BaRBEeUXUDynJ8EcifRXyH5Qu414SnkzwrTnYiEZRZpDn9UpDa",
  "key35": "3HQMHQvkXNu5WS9wMkufv41BJV2vEwd6YSWc2nKBtf353hpCNUE3fz7xHiQMQ13ULt74PUSNs3wFRic7StZacHks",
  "key36": "3HWJDCkyVZ2whoiHZiNRUXZXVxQSjXMRhYQMjXwrsYeCBiw4ukrPXrSKHaSSpzFQu6HR6fNM4m5WXQDWcrRjkLCq",
  "key37": "3yeDc42HdDnwUcAgPcC45TeyLpyB4rSNva867fGan7P9ynvoDkWHFVsJ89GjLHUSg2VUCjpGVDyk7CCpRJxEZrXw",
  "key38": "2cAUUWTTD3iLFbX3xBizkLhfXqNHHZbcUQJX3RSPFJLCZSi3QeieMBtc1WM6ai9sQfc5DQ6CK6oezx3HSJfpdcCg",
  "key39": "2qAbiYsbkYvmEqNkwViEpd9SbvgTqokpjduKvtxzcsvu6pY5SjoVU2uW8XGUkVN13eiF42E1N1wBu8afBbuY7h8x",
  "key40": "5scuTBJc1wU9wQThgrY64h6qySKaf8pTLNVdD677Qpf5qo3VLeTWRsuoJ1SEWbjvjsNDNKLu7Uybvpi8Uux7hqFn",
  "key41": "5t6mdLodAk962bwSMTpGzJBHJaQYGwJ6eG5FgpWsWKxGM5Wq58ZhUvLb7cj9i8N1ztxLVeoPSRgcNRSx8MhhPzEe",
  "key42": "3Ne9RAfWzuSPCMCQzX15ghAuwJe96DQiJrxF2UjrZCuULq25kiWuTMYfSq56WbbSTsMqzvyD59K1XaqWsHSsDqGT",
  "key43": "3z6z1vNEuLHsRcNDZAAtFfn6emEN2Wbwr9opaXqrWVtau4e9Yw7DSe88ehxFmMjhRUqPnsERdncY13oZwKWecHPM",
  "key44": "3fDTr9TsXgS4pBbdKmYDxZGuQGtHrXg4nVjysRX8afziHRwVfvnufu8NfRbwW5iQeUwKDQBvMTcwkLmVCsrs9rbG"
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
