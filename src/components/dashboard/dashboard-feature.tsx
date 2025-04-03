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
    "5YjUdcUHryfsucWmXPa7X4oKq8csaCgQgGYSmSnpbQGE4FMVB9fAh2CzEmDbS4pMyQSLby315yK7eoS3kE1zCFpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32b7uBveg2UxfbqGdSionj3kHwATEsaiBFQS8ryoKYcfEXNjBoFvqnRyJ9gfoJM4VY5JNjYSeKvVZzTq7JW7s3Ag",
  "key1": "3RjRjSUG2wjtWirQ8PP7pDNuzHhhhh8RF9HGHcY5TK4BktTdFkforLnp7Aj8E3o3q18AErreedNhDL2T5EbDtXtA",
  "key2": "4FHBnxa5uw1FgjDhuKRNVByLZHDXSvYwTns5kfFsFxEaRjDp3qxVo8goKMW7jgeDw3sRz7yJVj1wYeQnwjahsiBq",
  "key3": "4ENUaHkXzxSF2g23teuU4UpqcsvxG2B9Qt1WhyFEkPb5WeyMG91juiz8mXjooHLSTVLhUqgmPXnqhoECHRbZ194F",
  "key4": "23D6GckpR62EXD3kZqrHYqNkmwTbgdmqjCmm2pTyu24fvL1daFc8zMXHFtHBsvAnqmxzy8nC938naB2azr9AfiED",
  "key5": "52muc6nQUZrL7cefayu9oMpReoPq9mUSpnusyyXemaFVoPWrojqZo65un6rRMeQh8EQKjDykRBmCGVqXkjtSjVj7",
  "key6": "qPw5ASNsNuCQP1gdjbGRJD5tkF3EHQZKUJ3HSRtmRF9FJmCp99JgXYhtNwgnAQ42uw8Rfk9NaAenAmNtTfPX2DY",
  "key7": "2E1K7MXpRxr3r8qUfYmi3aKjdYKpeBJxYqxmQX7tvV3E6mzsZzpyW7twXdyHQzYcAcLwN9NT1ij4xcWV9GE4HWax",
  "key8": "64EYRHwRS5EGEWmza4NtSGPvkVvbLuv18UrBP3TCTd4D975waEErurXVxw4WoeSjM81W3JYDrYgKxPHNcc6gfyBM",
  "key9": "21BMoYPrCPMGDHFXdH6Xq7Vr8SQK2PvBrwVSbfpY3Ne3zEoJGyY61TxLHEng68xXs9GQte7gLoquuYsSjkJvCyfx",
  "key10": "2o1PcveP8Jpgfr2nRRCjWCXNxdP4g5Mgyvc4UjmwpxZWiBPvbNvqVfbS4ijJgzJanAnwhpmhhVoneSFWZkrThpAU",
  "key11": "dU6g5LRHx75hXNJWpNoo6x2nPn1f3VwH8KaNt9skQdUqatGtdQC3CT3aKuQwouV5vruiYEe81fRa1UWUcSvZAbg",
  "key12": "3JbsWUAxmGF7XJ6DJzec6f6uKdrK7raAbbJGT3UM8iht9g61THV1ZwsbVhNZACTLrEUE8VaAfBU9bqgjE8vqiL3",
  "key13": "23Aen3gCQTdjyzxoWeaygPTRzHzVj88zkfZN953tGJWXfKVjNEfhiBH2f4WarB4LiJ9ZHbD7BEmeucne6rX66cMe",
  "key14": "3SK1MYhDtEfRmLaBBtD1bdroZsb5RsLL5RfGsbn4DhjnZkrwPMCUA8v7tRWHURhBLdALnqKV8wfiey4vSCk8d52D",
  "key15": "eWX1o2g9uCMR8kfgZazY7XssAHc6phG1k762fiE5FXTAPUSXoDUuH1a5mNkTniLZT37NFJEGc3qaKy6onnvMHJZ",
  "key16": "4wAdyLd5QqjoMWHBVxPREPZgwuHEdrvcZhjXuPZVNpDGgdFU2p9ZhnFhTNW8y21tst4pQFc3d9hLVAFLPsAHzEXZ",
  "key17": "3ypFUEvHj4wpie8JpLv2giiv9gFrFgEsZa7zpfLJDMMFbqmRquc5Et63HXpMXRFSJxr99vYg6bpEsUThfHNSXEfD",
  "key18": "39jmHYmNrpyqEp9PmKJVyEgWPfH2HKgZw6jBXmV8qmFtHXK14T9HzETD3sEPxcCAw6sNNK88jv6AkqDxitmmMDUH",
  "key19": "5G4mXND7vaQExf4iUBQZxmSnHCrcbo9CbDVcVsFcAv5KNKkbLd293DoufcG8MwsKbDgNHT3tyZxrJbgZ56fZwxXJ",
  "key20": "4Y25vMNNQH1ZRAQukHBEzkGguhSBcN8w7xPAGEHkBZdtCVQKSjSLCeNYdHRGzp7v7LBWRtf9AzZN3gAHWC4gzUng",
  "key21": "5db7sRkCVWew8JQozBYx5d8Q1y82FGqCN8ANiUETZ48UQJm2ZYiZHihhWQ8iE8yHJQbtLYDkBPTGBHCzKGnEHq7R",
  "key22": "35LUqaZkCERM9ZmGfmGFVoWj9zQdPw6Ejc67BLVaqQjXuVVYCTCg4WHR1SYpL6dvHCDPtTCv71Mdkradp2MzkpDw",
  "key23": "2k6L6vzEnCWF7HiEumv5CVqD6U66LkQtzMJoz2vWKnR5ep6xS3dPDWjrKHePa3Sb6D3LsA6oTkCsAfkfVRLWyahL",
  "key24": "4d1kh8vqBe36dhta5RzLtK3oUgvonZ56AgrxhU8sXtkjxkyEaHeo3JYnCmBwjWSrXDAYyhGKWBUX6RhycugA9s6v",
  "key25": "4bW8faystPQmrPuUem4aqVL22CyyGx3C1kJc2f33wK2ZbRSzmuKHXYSobygHzZz22S29USZb9DKxDEy8k5TDQZNe",
  "key26": "4rioFRdA4fUuBBvEJFBwwFQuEi6oSPfs6UpZPyVgbk76sGQDg54Di2zcDVKATdsT977omrx8B4CsQJQTomyb1zmf",
  "key27": "34JXs6NF1Kh5MErGzyaAydUqEoTmwVudPQ5cCtoHrLAY1CDjEBWPix81pdkN2hKSXkWBNgQnAvjf4P8YxRFcThKK",
  "key28": "ru7ZoDzjNbq3eQmrfF1ub2fGM4JHPjxv5V4d1Z8mRSdRmqsUgwu2bZqG8YW3wAPmmHa1JLWVHB5J4xwuSnuC7dU",
  "key29": "3ny3wih2kduj6hrGo2n7LTEYUhtsQ1YkZnHE7scpbNGXPzLHZFXRPL9piJ7X2XsetQz2gNbDJdSiYYAuR2UCnBun",
  "key30": "5ZArutEKYYBRwes3Kr3NiJmvdyHFcrwZEsTWVu9ReVL7f4kDD1nupnjwAE2yyMziPftDQfYjrChWaQquYMNKVkHo",
  "key31": "61sQLhQRYfe4hwCdw9tzMrLzaP9q8Vv3jGQBwhgnbrnGVgskSwzBeXFR4GNXG8CNwYfy1uJmtoNrtzBy4NGAkCPT",
  "key32": "3T3w9QeFDfghCi3PgJxsDtJyau6JxQvjpQanJfnVKkNAD1q7bWd6enghsEMQQxqSS8GAxikfRKTc9TUwpv8GjP4Q",
  "key33": "2cE2Sp6QUQSEBAB5mRNWSVUGAdSWHDYRMtzYU6yY9F8G1LqS3jZ9XCRAgPkA6MuL12FceoxaD63byd2KRY97Qfn1",
  "key34": "3zUikW8rznAxhBmF88kHhbHAzC8jVMsBxQ5d17mKo5TQFi16FwB8ykVoYx9f3Dy1sXrRpsvt2EbZXDQYvf2u39Wp",
  "key35": "3GnGKoXNooer9YspGCpL3ziwAMRYTRa3mpheHRSBJVnaUzuCfUGdL2ousU8pYEpvB33i4VPvF1e6oLeAKBgaL8LP"
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
