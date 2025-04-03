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
    "4qJHWmPCw9GMLH6B1FNSShJeDMzUY8YGvQhodaoPPNYQSqcf3RuazMhXrGb1iZopJ5cpXQFgRt1YrJe4dPR9QVSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xaDxSxsAiddNM1HBTMx4GbXLo9EgPHN1yQrvSqYEpVHxKUCkJFQY75z7LyxY2Ctwe8NcrSKi8FK6MS9SFZoXq9w",
  "key1": "5WpGVToW1SPoHkFjXMLrquScXjnmRYUhMRFfsKzV3nQjPPpSWdmLdwzPUPibxVbDwSHXnLTz4q6Rvtot7TJhYWPE",
  "key2": "2SuSw9qgqNuMiSf6eZAqfkMYBiFZiaZpjNhEoATyfRGQsbrzKKJAP4n48RtekSJ9cCNj2rTSAwKmmGXrZxEWtGwr",
  "key3": "2CPehXBJUbHnnQLVtzTRnFYPYdXz9JuAYArDUPxd4ax5hzhasx6rFhSRref8M6zjT4u7XFKsX7ruvA7p8MHuLtUM",
  "key4": "5DJNmzK42QP5Tjzbjdk3UJ7wTPzXCPuHWWscyLiBPEBkBq7U1S3HgB5HK3KfNnkzbMiyB62GjxT9fsw83SN2cKaV",
  "key5": "fR45bKFFNHNnSRapEi39hXB6fmVKNZy5j4vVoGWPwSisKVSRaVxDGtRJsJo7ahPMSHEmBk7eFmT8J9HBZjppV96",
  "key6": "5Mb5QSYqqA9AjBx5yqVW34hXhYtmAii6g5LRAjdxfQgrg8jyFDaWAnwkSLwFte3uo6f3jbsAiikzL8voftS3zFUF",
  "key7": "38nxyZbXEARpqCz2qKTMrNKf8xMLZ3Jan5SzE5GEDJUckfJA3isEkjcjuACeL6iDWQRAgozDN1aC7t2UPxoMhoTN",
  "key8": "2nzQvGE1nKf8zQi43CUEGQknRJaQ1sCQ7nPvY7o534z6he1kRd4eNRPC2nENh4NqujrswpPVpL2wpRMbRNHJ4czU",
  "key9": "3SfjCGUQu7g28iPvE2Z7RiQTY2eHDXoBQbb3wcW5hXAG4DpXc2ZU7yi59NwBDi423oyJ7c4TAWaS3J8kAjf4jCbK",
  "key10": "28TEfv1YWxhpGWKoUVZaZgFswmg82izpcQUHc9KGSqGjy3MTqCd9BY8y5EJP68Cz1x1A1uaPJT3JQ9ehWFUqF6ap",
  "key11": "Jv6CthP8WS2i4c7K6neuLvGgPPQ3nQZceBNqphD2LiPPpAz9RzMpdQ1qH6hGLTvGUUERfpurYDSg1ivWuDAfRux",
  "key12": "2ZFWqv1PFCRNsVZNiw95EtFU6Rvt2L4cdUCTeKsBhQjfy6NJpjZXEpJdsXmzZqFekWgfYgnk6yrkTWRX5hxxbDt3",
  "key13": "4ikzqnrdtv9pQ5EWjGXqsqWSaHq4r4PhfFMhQL8HRcCvYN3BcnUQLMzAb2Lv5fjLKCmUmbvfZFtZPyotb1xANffd",
  "key14": "2enxJ3PfcaQ92zMwqtKMx1LiBXUXFcJZPEvPPdBbWhNyj7zUGzPvntxAo42K4RzZjaYFEJbvqxA8UYG4s8s1xmbd",
  "key15": "3DYfyAn7jGyySiRTTjYfg4HUu8icuU2SreERwSQZBcfEpvmsZ6VCTTRUgZ5Mr5YCqa1dTdJZYUC8yLKVU6z8RT7v",
  "key16": "2EzCe337PdYXybC8KV56QVaKmbWgxkjQfiBapJ8x8ovPyyoEpFRsMVLpq8RUQFKbyFjwapLQxWPqmXTVc1tYEtEq",
  "key17": "5w6M4HMZPeAJRB27oyUnfPeSAtK5Q3iurBJGYcVSVd8ypxKf4aNVJepE3KWtWC2ZBqiXZKUhC4doxAf3bjQ2WMkZ",
  "key18": "5tbBq1oMGBptV3LNQm2csACLfUrB8JUCQg81VyKxtUDd8yXmHrsPdZPhVGTVXSV4iJrqsMZ5RpcXVxSwd7587mxB",
  "key19": "2PytP6c85i2XHisRa1SSZuVvAmH52QFXoQ72GCtSqYcLaAVT6WtdysVQ5JxQxCCY7Y7HQNH4AHRcWr7RwSZTnHov",
  "key20": "2EBu7HZoW2TKt3w9eWGjqsJSXHMaiq5dZALkYpEoxmjkwxjLCBng2kqrwtEcejFZxXrLog2cwgMVFzdWhwV6w7WS",
  "key21": "4vs94YnQjzpV9ApKoDBfap4JhWSACPW4BuNUNhU97yhtLyfc1x3qoak1QXYds58SqfwEQrw23zgVSr7x4DSjVwbA",
  "key22": "5w8NHfm6BqRUMt2W7TCTJqmGuzmZ1RnRgFfbcMjWgtudmkCc6mAbfwHTcLThAUgyKXEoq17ybwrzuyqPEiDtJsXY",
  "key23": "62ifbfDAnvMfqPMYSgfbMPKSFonmJZww7ETLggpx8T7ziAEwB5ANgsjCKR18xFgEDRju4thC3CdwijnW2rEUScuy",
  "key24": "W62RZ2EsvRuAsTi8AFFGYVLbskMMN3jfLSXkfNGwDYASRSVctnaWnKJ7ejFexZrknYEJVpQp2CWfWLCczVBKhyS",
  "key25": "2tbZogfFQvXMtKcBYoXNq2VtEYfxdzoGH8uCPJpqNKVgCRfYk3kVAH423LPCMi3u5eXiPSTLVvjNyC8BM3BvQCSz",
  "key26": "61hDh317CyWCeEx9kNBk8r52zB2VuTt1iDCfzpokqcP9gXxCrB6XeY6CU43pkfKAKq3cEfjYp7vzYQHjDq6pu17i",
  "key27": "4kwXsiZTdvVkhbGUKRJCDJNgeMZG1db4pZuQo1Xu6WgiPwvEvRrziiWYTCeafcon7y1MQP7Bmr86nSzukYLcqbPm",
  "key28": "4crCKvhUtaEyQd1fV89nBMAAT4BW68EEsqsAXGtH6r4UmeiE4mS2jaCetbYPiKRTY5pNqkNDyYrmXKGGqTZtptv3",
  "key29": "3RUZoEN6ePxccuA8Z4YepaMpsbRopxhdj4Jq91MkaqCWd3e6JgXgDLwgsQy3KuQZGruZYbaUbpsdAX21xmVjbvDK",
  "key30": "3ofns45U1r6in2AHPJqrhs5pkfJmjrfU2vEY6bUd5QLNsFmvke85XFqhAqBV8ESa3LHFbSK1yfPbqqstPbppD8zb",
  "key31": "2Kjm9DBed98UgiiCWsdLH5awHXjeMiwBD64xXHjAGof6VPybwopEY9AWT3dfEb82t6WSvFV4GVBxRjs6dt2HZA1M",
  "key32": "4dQTVLnWuYM9LJQAdq2bwja339mfwmLMsWdEeReddXfnS2gSNRNVhjFacrX3EyhkLdU98bH8ZdfLz6tjU6sQzzeG"
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
