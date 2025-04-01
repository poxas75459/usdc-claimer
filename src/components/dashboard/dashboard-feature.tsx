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
    "4N2ziJRVSh3RHsLBLHUH7tzFqVW3bYtYpNzbKNDqXWhgJzGjFBaeK5i8mDkzEedhXhJ1uEPPQ2WjyuHoj3iTyJU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRgcouhcWQ8VefEr3yxJ4cJbVfAZK7t3qy6uab7QW1KpkPiWMngg8FEuM7ejzmfHHEtbNHm8v2gsa4rKYrpmG1M",
  "key1": "4zccmcaNaWfptDfsyFjQCdU9ZoR4QMF5Jf3bzfqPz9YSmyiKAord8xEKdaYu3TgLeAqKomFPaQP4L8DvZbBsi8Uf",
  "key2": "5vkcYBFER4xHXKETKoGq1PCdwU6mccbkYFdJ6LK6Yo8xmwfoKXhbGv1j63oVGbq6qHyADmu3u8LWBWotzMRxuknG",
  "key3": "31X7Y2MaaibPzmaNp6uM52nxSJntdfsyqb8Jwpq8jNC8bgGfpYXPkfYUnWkBSbYHzbyb9LScnkHcT49gEMZu7Rfp",
  "key4": "3cE9BwqV62kVRq865yCEGvE9uUud4sRsuHBLFjM9WR5g4acryMiVCvLNzgYcrhGKQub1J4jXjeWATi5atdwMaJ1m",
  "key5": "o7He3ei4M9PW3ZVfE1UVcJNBksCf3DJai1WnzFhrpqJhciNwLon9ujvNNBeqnLZTMFNQdaqSZ16WvRHJoBnkVjz",
  "key6": "5BdJTEaUfTyUSswrcYDXsSgaLJB3rMnegdeYkpzkEtqZsBf93rkwGBSSD1tuMo6WFkQuHKazzNPNYeuNkcBk7EWW",
  "key7": "591ZALB3r5MLXeZ9DmZB7asvBvXaxtVnZJNnjvXQi2S9JVt9A1WVAhkwdKCpJLqivsE3FMuSxHRBciCVwCfqNQrm",
  "key8": "4dTYfyMywYz6DyJHYjauJsbyUWBptGc13pNvQKboSYxnuiWjbXuPEpgnYavUkQq2GEN6E5qRSWoWJLCMsG6ck3M2",
  "key9": "x3UGzRfinhaWzQwk4Sx1zTvED91v5P7LeJpR3u7Wiy2saiuDasj3U2eiQUaxpbHy8eQYr8WdWWH54v1tVoe8ne9",
  "key10": "5jS9SM7WGmk8FPME1EV89cbFxNua4CzJQLmYpYaG2NSK22EpNU2ynvMv1HAzsbvkdURBgpr69VRu6HsaQ1hgACgB",
  "key11": "5PZNSY4X7AgGaeksgXtRuNmEh4iyLqcJCpe76LMv6oJqjbRdocUc4QfWSEnQJkhPCK9pi4FVzxkKsKPHMTHWnVgc",
  "key12": "2knbbcQ6k1setrNMdvUEusrst2FEf6VAnFjVZ91EQdd7Q2UyzXqjf3CnhYLkFMLZUhfJSNx3KWCwXyoUUBDzhhhy",
  "key13": "g3NphJFsjubdBivNV8h1aTwa9Xx6ffa1v9rLE4BajDyBrSh8hrwTd7eFdYkidQzdcfUqrVtk423Knw6ENic8Vu2",
  "key14": "2mRkaATNjsJVehtVdxZLuwHAbtQUJjwMJ7coskS6br7Sj7aMEbEJhSvMLe3LQtsMDw8upUpVs7ddvWVHUGYwhUKL",
  "key15": "2MzzRHGKnvZv31pPAQah9gRPW6iaQrSiX7C8HJYdwGC67yTsTmZyhjGpKACDNESCdEqfpMsTfcJdQ5hp2DMArHES",
  "key16": "43hRbm86T9qvBRoDDJEdphp3NmmrtHYmaceHjarKD6T1W6FPycex59MSwFrtRWRnekDWNbdCLEY6FBjdY1PQgu9U",
  "key17": "5wmujgHVSCKMCymXrvRPAWJFnSvuTrF85ru7Vhb1gCHAbb35g7rpWKHYGxqWxEeqmfNyaYJj8ZeUFvHXpGAhWbGj",
  "key18": "4g8TnWNfeym9jBSYLzCYUuKdGVmcRVbKjEZc8jqxkL9QoET7BgNRLUcEumYf1wP1PMvy3VzjEHjjhHC1z8Se6bRx",
  "key19": "5AFLAoa3iJKsSG2yxdWGf12wnd1YQF7VRac5PJQLRqyak3iv7FwdR8iweCF68aMwxYKLGjuUDX6y9DuXCWAqpwqx",
  "key20": "4B5Y9ypJ7debxWJ82XkyiHJvZEQGLCoaw5eQLTmx8YjX57mgZ2AyrGuaFtNY12yUjunfFgLbMn8wXSZfJzcJviBY",
  "key21": "43FK6dxg2ZsLjaHQA7LXowViKFStHgCSTDSBk4ojvdwsdi83szv2cyf7JfCqiwnUSsysxhL6Y5bbegu1HkF4owJm",
  "key22": "evyhfjcQMVautMPhB6EK2E187fc9CrvipnT28VGNin99sSFxDyr3mQUrZX6FwNW5pBu1tMdcrBQisDFDfrmsWSS",
  "key23": "4HZzeJKLxgNm91PFrnG3yzcZZVoXujqFW3xDjbg82m9gPC8LbaRCNgCcVknyVEs4BwtNQiyqqUYa4uPQ9NchAa87",
  "key24": "3uegn1w1i2ZU49xp9BDngdUCD1ie41LY8AzoyRe8ytTL1jPy8RZQjBSbwMC1DzKqjZEmgMfowPxsp1iJFL24ZZCw",
  "key25": "5TxzGSL3Y2WAjZH6Tf8MpeupUiVoXEx1rBZuVPQgvD41QbiqkhjvwK3rbp6rc4dEBp8fvAhqwFPERd2Xo7DA4PKg",
  "key26": "65vwU7B3CZjw8yib9S7c8JqGr6JPNfwnppQuBPjPFSvJzE1hu5S3LKC4UgfCFCKzsEEWDxkEbDtApEvSgmv24LCd",
  "key27": "5PsMCsD5HPEJe5fAqDk6e1JgdPyoYgPVeeYM1e5zBhcjaa4heY9BBtifnGEArYoJEgjDTQAUutWd57ZuX4AmGft8",
  "key28": "5FQDY26oQZMLs9dmgNyW4LBjbj7PvSj2A3b4En7XAbsTiXv6Ujw3eqF1vhPaJq47TKmNUkjidvR6rqXj84ivzEDy",
  "key29": "3KNbNrj7GWsUhRLTtpJHtW121B6svSYYQRX6u1X9yQ6qg8s886QVGmAf834o1u4JaMH27MLcuQZG3es71s6yyZ1R",
  "key30": "2pTSmJSMRAfhR3hGXFbgUimUqA4SqrRuUaRMMZG7rTP71nXUEykxwSXW2Rdq398rKbH3uk9koq2e2GMxFLNFDiUk",
  "key31": "4HyW5ad9imEBsm1JAoiVzkJKyJ57XPsSGeVWUHEmvS3y8VTo9zW2A18D7ni5rPfi3JxveHEnrdj1dM8Xqo9WLh4F",
  "key32": "SpAL4AH3pmaZMBEvNz4ceZhjonPDKNpXt9vGDrsR85aH3YTEKrvK19AzbULrwpgAK6dFgCTBrR9tWgGTNJKuS7e",
  "key33": "5CnD2FkCqoKVHmKfYmYZSJk7ngEMEGZyVh5q7BUtJ8J2jpnN9FWmi4fHRP4NNvVLc3QrPddHC4Lm6uurx4tCPSoy",
  "key34": "421RUA73HPv1pTBDy4x6yAckArWQqhGbGnHyKmyUgXAXN7vkp7mE3HMfXy7TwNS3v5HqzVFzMj3SHu3ctgAc9SNk"
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
