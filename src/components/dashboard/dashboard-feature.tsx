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
    "31YYJMeT44U7ry3spisWGsjAkgvQdCpFy48XRxhat6Ze8s5Xsz6jQ4s53qNT1ckCM1e8NNPqHc8En5ZEs576p1pM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5faaGZSKrwdwzztc2iUtUXR68qrEqeQwS3uQKYYZbkFoxnRiC6iembhAUJBMbqNHR6UZ7HdQoQoKCGkVUMUXmyJy",
  "key1": "3wVXmZBjsdZifNFp5HJGEMrys3cHLp4mD7hMXApqfzUMcutLsdp8maetUZrKw51qSAoAPUA9Ecdiw6BGJWqXayCX",
  "key2": "4ZTWiasBfuCjbJYteFMM4VUWYNEr9s42JjEBnCfBJ8sNEk6Tuu6LRG2SEQ4KkeCZDoqyvu83m7BWUD6GC1Di5h81",
  "key3": "49SXGJCMK5uY2s6GcJry92hqzWUwXLHg8QPTf5aAGPopp9d8aZ2fY1ackScYdwLzZHnvQkVxv5HwChvcduUAptD7",
  "key4": "5gyWydWqRVnXwW3CL267SQyhrBCbGyA7JRaxQqkSjPLZuXxPZvH8cL5ZGLsvYUJWanmwMGYVgfzedCknhVSfnQuG",
  "key5": "2FDd4BRQ47v3PvBQjY3izpyZ3W3gU7uVX17zGUUrF4iRjvkEYHNxVE8K95Ye2uuWvQiAR4iiAeeawNBGWAUSGTf5",
  "key6": "3cXtf96u1KvP8Cknab5cskz39v9wxeM5u45p1nUkzDwAcJXfnXnQ735cxwLSENu7VJNp1kGuFZfL8PJmri9HJeWd",
  "key7": "4Fsn4yKMpqEJoL8PBtEoxL3nnnVpaswWPQR6V6LrXMGmcxu9m9GZ16hcEfPZtNfYdDCf7EKWqBntZBtkKPmJ9Loy",
  "key8": "126DiDJKjhaeDgLxoBDUjeyVUADBqhnwpeBrueFUTUw8ga72Mh3wWoVMjaBfR6h4wNFfUkr57uX3U3x6Yh9ynBjZ",
  "key9": "AVyh4Jpk82AEDRa48ZePNMBYKvMBTEszrX1N3crom1FQ8BDGocx1ipeYEsdruxR77CKcKs55YaGK716Hwbkz88G",
  "key10": "9FhRNtBdViqt12Xc7uDxnDyMp2cD2iaRAfMNF1XcbLtbhbVAgf1npW2FCjw3vwijMMbWD3oHD4vNhQGm6JxDajh",
  "key11": "5ydcX75B8J4oy44HTGnkufc8eDgkGbooQRsEqsVFBDsn6kegWZSxuKDtjUtafuoL4bGcggaQeSjvE1Cxuxm39DCH",
  "key12": "2rC8RSARNZpaojTXq3uok8hdED9c2Qd85pnucPythXMNqHuQYVU6MrwK8adZdJxxswXChbYmRN9U4eSaGjscuHb",
  "key13": "GaozgUD1Jiar64RMuv377w5jp28AHaDoo898K1VtDC7DJ8HJuKWCUM2aQn4hVpAbioqRv2Gch1UZcJk1Py2XcHe",
  "key14": "2sB1pCWf2FgrJCQ5Bwu8re2kAqsQXJCgxDhcHagDF6bBCgB7fVk8gcdAZScG4BMaLQHBxVgM9YPi3vHzHD5wpCRA",
  "key15": "2ZHvfe5h5GEiPNnxV3zSsMiky1rUgLou73hBQNVkzaJFoG7zE29BfbGXex1LVSPp9VR8S482m7c1iiPDLQgHBmSE",
  "key16": "3jeToUmAA99rbjnQSNusSyPtb9F1JdmQ5MxpTUUFov9LjUKzQPtqsAELbCzKgH1g9mnnch1JwhhH67D2dbZ7NX1s",
  "key17": "WmVYQmUCctudH1P4H7fDYCwmsjLBaxGNctSNpEdVkcvD6ZgCLjPHTioTf7Q7JGRgczsVXEpgjVmcuhY7jF62feC",
  "key18": "pL4HJP79MnoWJhKD5QjUd4jefv1RSNcia6oaGTMKKtBHDS9UnJPCgBcrQbDoxdTvsiz48ZQMK1bHSr1kFGAbyDZ",
  "key19": "2swvWoMq7g1d1rPFnsS6mvJ19avyGRDkdwcF8xc7XVzC4fUpyTiFXhDjCtEZVg2n7Nia1GKZ2SWnj8qY4Mh3rzmK",
  "key20": "2YXTzoaeu9CNi2M4qbhRVNCtaPgvArZjEUxD7Geenq3UXfA414HXwnXg3ovCCmEakShFBsmEYjx8zXJVpdAauh9G",
  "key21": "49WaXRwhjfhtLZixwPCN5uRcLysKJasFM5c5KQt2uQadXHeGRPnzGmNuLX4b6e9mkXou5YGAHSKeU3DYzubpg871",
  "key22": "2Kf2Fcp8ki2TatsRoZFMdBr2FLPUC3nrCdw3vp85oWnhGFMivDWxMxvnzx6RzcFE2u9qCXZyLupbeEWLgSS2qgyT",
  "key23": "66DqJtgrZpvNBU95L1xRqn2UTo93DtHCQmkRoF1qHWENgHcjHc11FYihm7vBy4bUsze9u8mNYxw8wHPvhfv86HzR",
  "key24": "4ciGpRSPUJanNSxJSYTHKEYCsS8RQb7J1NFDgS5jR4oP8kbZN5v7pD9N3CjrHpxz4Q9S1xFhGiLDMxn4wErL6cz8",
  "key25": "5DqtzWqTi5vYXm6g6d7cnE5UpjcnpoZCcGkSdKMWvbScxXDbxgN3AGcFDR5Hej4cAmSD1mjZAy6ndQ6ZCM4ouTgG",
  "key26": "5Tgp7qJKKGzrDjcMbco7u3kmYH25ajeW2SaLENWgrhRUQk6pYKb9Vxyd8hAkSsrfWegus3wTisQpqQzY2B6k33Ly",
  "key27": "47sLrzNKd1MjgfgQ5vRGC7AbYry4grUi2ShGACQhQBpDGXyasyJF3PrAJvgNZmZRSmdiRCCEaLQYXXDTBErEYRrR",
  "key28": "5VFMz6pimY6SxPjmZPxfK1BrRZutWZqW9mui3KjYzt7m3UPFpWEEmVabQWEuoaUD1FkcN3W1jWJxELQXffwjkUJR",
  "key29": "4r3ckVx1uGeQVR7RYvFbijwc675QJq7yygQGSdQFuWVWXuDrFSc5NtYT5TJsNNmFEzqKdX5gFHJyGrJzvY2t7sgz",
  "key30": "3Kggt4cCxsh3VSsEjTnm1ibwWbyfQCrGNQbRowNXHdVZsaD2ixXrBcKYXC2Cfnqgu7mbSjM9c7ibatEYNKUZgqqa",
  "key31": "478RsRoHzEjBiwPFGx8A1XYY7qh2e7yU2okcLeHaKLC3Uo9Dui2LfzCNDcbWL7AB8QrbEXVp1fD6JKEA4qj2PB69",
  "key32": "566wG8x5fy33pBTTXDeDesXin48EtwSL2t5T8VB3hy6TE8d3nFvn74CxR7FPv8dqEr1Vbyv5MMYJ3jRKWvQMTj6",
  "key33": "3SZxzMgw8YwAg8ScsQkw5qzWSWuweRGVgpojetaS3BZ8FqKaP5WNkhDk8SSjK73G8ZQbH6QXsZ6EXkYSsqViks8H",
  "key34": "46KkdopSPYyG3M5FMB8w8aGiU9oda3736X8BZLdLTRMe7q1csMzhSveh5n2VBjpQzhupdvAJ2oK4p6Jm4r4mLXXc"
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
