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
    "25yGdPzX7csDJV3zHW85DRJ4XkXzuCNp91Lhb2dZtYGKgWoyiBvBzDDFanoSijUT2q3yyJg9cLqqiwGnJdSork4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27V4gxKEcU7yeUmVpa5mkSPqnSingriDFz86Lh44YKnNoTVCbEPruG6cNHGz6vSpfwcUW7PnZKCJQtEQPziVKqH3",
  "key1": "Q2TanN4cr6G9wqXZykQTNPTcsk65zLiy4dLeMSFzz9E1cEERDWt4ECUUmjpwP6DBuCdCpzZUuzc7ZTBXMddx3Bw",
  "key2": "4HycVWJuWPTapNeXknhiKfxr89NKtUSRZ1LxBqSo11hMQr84HZEEeaGpFtL3LtXUnaYKhxX6vKPQ1DRwzeByc9dZ",
  "key3": "28KXbzRYBDrecfbmaf8hYkjLEpQDu7uAFsod6Cx54jka5TSqCk5TSnzYroeBSu7tsSpG76Ms4HyJZMpFf5g769y9",
  "key4": "3jTTT7iBUYuY1th8azLpd5fbWkimfy4SCbxnAqRQRmabMBEQWRMCaQHxUeHQSKm4bdcUEbuMfWgzH45KnfnSL2ef",
  "key5": "55MoSJEtgviRc4uQxacyZJopvzEA77BZxoo5W3eSkK9bzWki5emhRZsQfs1oDMwEBvmhrF3LssjkKr5szoTgZ7JH",
  "key6": "3pRTUYbftjwwAMeuVkLDrQPBN9cDf4KPzAHZJLWNhAs9jFafmQVZ6Na9FwuE7xPb3MSksjoAVWaFB2sqJ7xAU8NR",
  "key7": "49CSYBSmJTMwykh1qnRk6MvJThQNYuAZj3k295HntWjdQ7ucB5hsGUCXhVLzVxQJRB1WhDcgf8NogVchrkAUvnze",
  "key8": "3XnytZaPkRfoHZXzy7C669tXcoLj1t4fFoBV7SFDicdik5wbjk2gUgMjkoXBhYQLtsa1HyPFEjftKxnJZouHkbDB",
  "key9": "4c7VNDoAbiHN452DF7YJHbMhQySqVK6sSGQUDUnNFkso7sMLMmpPXsDt963BxMUj84Bq2vR9e3hkRNmNEbPy6iWc",
  "key10": "2ho2h8Y7TDTw2SSB8JUKjAFVTAa4wY88Py5pfPjQ6zepQMfCiWooMUtaxD1AYrwXaszjheKtBJmw1Zgm88aeL5QC",
  "key11": "2DA7BQEkoaThN681DBEDZZwnmGLfc3Et83jZH1vLnWuuvtUYvrh5NVEEhMypM81YvcAknzytPSJzC6evfuKdEFgW",
  "key12": "1UAzgmatMUpfns1R8rhsjRmTzqfAUgBa9iKeVmVU1Bz6DGQMZTHLZUqJsedsHVfoAg9mJWTgu8wXKjomu6V5CM6",
  "key13": "4pQwn5ke5deizxq6mJyRP1QJMnBEM5eAYE2o7WPTC3H8PXRTBAnURKnWqTNXGXcKKeLa9r7kDxU7BXB95XHS3kFT",
  "key14": "4hRVc53A9Lz5kNvZZuL3aj8djo1sXc6FkKWtKuNRnFoXDaU5U9qa58gJjMT3YsRbSDsrqdGPqE6F6jJtRcXDQjbu",
  "key15": "43VJhF8yAsAZHJnxhicL7Ty563rpozhhgoKBtDephRwhrhtRERzDTy56ohBkiJmaaWkRb3e1Pao3nxPmCU1FSUBB",
  "key16": "123MJkVhU2NYT5kmvKyGmqVobvPXug5P3xW2BGZ3wdSMm2YPjFwxpzoKvsXVznreicWbFfLuFpao6mruuz8DPwB8",
  "key17": "212p4z3FXqu2qkL8YQ6VncVrz9dEj9aBrsNDa4Hqpx9UcTrLXGkUqD69Chcvn3wP1nFDdbtMoppJdMjGKGbBHXzg",
  "key18": "62tmCcszhswnUJ6N8b4wTsGuRkTUqHC7QV59KHHQwe54VmWjeUQ4pM33gqJsFC3bdxLKrHkhy5ZB9GrgDV1vqpb5",
  "key19": "5pVHXnxJBa54GaRTd1PAN1y2j5qGx35crujfjsxEg4atPXm7hnYTxEQqEFhAygmbBXFUcwh2G8rj1AHUVu8Dno2k",
  "key20": "4e4murasmWrWR8G9EFxhr9Pie7pmtTRf6fHdfQynNWJDh4vamkUN3UBHNdg9WUmkHAisaV4pyFLcNWKNHd3XtVFL",
  "key21": "53HDoWaoi7BMzqeiWg8RXjKj8DGGX9gBUmxNJyBcynz2TGBVUaLscBJ3Sa9tUhPrTyP9ZtRcXVH8s2rBqivZ5KPT",
  "key22": "5yaLvB7rUjs6iv6MNsssyK7LkyKKHoBTtTUhS8xxr4gcTCEsHA4LgDPTCD84LRkxfFBrxqi57AvnwLctqZX3aTcr",
  "key23": "81gApZcJm7qoXNJAkrMjjo2KK9nzHV94jgavoZK69EU7vVgBRWupbHqHAMYFGRpzhisf8aQWRowhvYf9geqtDN4",
  "key24": "4J6s7Z9HkSfytZ7YwY8RTM9jKxVJyDkupD5RtYpZFaAQu4WigaBgw5xUiP9bYrRA1P1nk362C3ttbJBTznbiRX4W",
  "key25": "5T2pYUtXGdWFZbpiz2rWvMVsrNs2YWyzJiNTTSttsikZwezbnHAdy9h7ARYvETxhAVw1iHq3NSSpNY5jdnAhP4Mr",
  "key26": "5GHVP35PHMQPMDoGduNHfGZ2sjpWhyQDWysfmTJC6SLymjGrtmiNENPKwLywzvwDNTkm2qxdLitQ8suFNFsTg4X8",
  "key27": "5XkSszSRWi6w7y6fiHUhBQeBr3pSxqU2rRPT6Vw9teNDcnnMVaDH7w7QUpENdF83JdG9CkTtBx9cCJHCsZ5aEoca",
  "key28": "5o7ZtZ2FctXtFgPtdMvvKyRAKQVpAjHmHjGFfdYwX19w2mMjAzq5hiSSS6kqrhj5Mk5AK9FAawCBpF8id8uTawJk",
  "key29": "5M1VZ7HMXDuorMG23HKpwVD276B7uvtaC3ahkaFZSvQGhs1eLUeiFDWRbMy8TD9HNAVDbpLcfr1QEVwXLVeQkdEm",
  "key30": "3iLSkypqv5MgoeCiq4x34uodbER1isXrDDcrRbgaXArXEU6St6snmGX21LCzJwhgU48qokNoQrHHzHv2mDgChTtk",
  "key31": "2togoaeewoM49b2EBx3wsNm59zWeckjQPud8rdtaxvRnTYQdVuWmAiBPNZqQXaTYs9qxjJmg2rP3RG3C8UXGabFu",
  "key32": "37kvjvm5WZGVVbmpXnvWNw3yRvMKi22vcYZs2rf7KvTXUbipJQVmgJdHgyLhvEW1dDRiESQ9g2ohGgSa1hyjgc4e",
  "key33": "3S1gVtcXxXUUa41dbVcCfAdAsuydR9kWMonB4kSTc1hpzowWsUg38RnEwLMejBuJfDhX2mhJZceRfvWEUFGfBSEp",
  "key34": "fTt4EBjagWZ7eqndeiMh5S4LTLe9RRHkypZ3bBSxKBbd86wc83JowzWuDq5DqgcjjasHRmu19CGiNkwZMvbzDfz",
  "key35": "HyF1HMsjmhCFH5UA1fwu9zLzvjudANwRapUjxDXaZPeTzhUgpDbKZjwnqakTPDGdW6wosEyBRfcRjcQEAmR2MGm",
  "key36": "37tDL6Ah29VSQZDS7S8dQSNPYeLoLh8FJQwNfjkhCM4Sx5cswRCRvZ6h4o4jSeeeGqV16BBuGd7kyV2aVMMmVsBD"
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
