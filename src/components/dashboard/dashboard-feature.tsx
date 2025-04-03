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
    "63ViHy56foWRuHUnir7CguX7XNYRhWdsLQNSCmzPb5J1uSBmEE3rUx8cf1P1cqr2wit3SLxaSYsLc6YSnmVU7dtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qHGBExyrzsTJTkWExfxyYgbEomTytzTeRXjDoKM5bRdvbPrbBsEpv5Y3BdkDmBMjZmf3y2BBADnjRaKxKaaXZE",
  "key1": "4Qe8TmnCjo7nAJZP3n5onRUB9iwNYM94MgLLLezmijvEqN2Rm64WoBxCKxbJz7J3M6PyoXGKwKtwnoSeogSAaHF",
  "key2": "d2H9rMZjFPWnn6HEjJozwEtWefFAJep4f2RC73mM4aM6USSJ7jpmFATBoDiro6AZXZNbA5UH2KDESv2Utuzujdo",
  "key3": "Lfmko9gZSead6DsbGGbqxYkTx2FqCQsvk2EeuHk4FJjt6mcQpNQoM61p8QA4H6bWyqjtuNxxd8zKgBEw1kZrj4q",
  "key4": "4zepaWn47CWHwsGo3WyhHGfJhbvXENxLYhzFE9q5yBZWEcn6Sz9KggfmMSGY5CVpWh8kGntCfuwF3h32YCYXScjh",
  "key5": "35i8fBZboAzJuQndHg8VV3BX3adi9x4vQWFJ9QwPfnA89BwyVqPihomoP3KaX2MWGFPuMxdt66AfM4BeY7WFeRxg",
  "key6": "4mbyFCg8U6M7J38HSFMg4CoXrU7NcJGxPHqGraH5dQW5QEnjMv3GuTAfAcyRLXCvt445s2KdMLmHy8zEq5UNsY14",
  "key7": "bZ97JXBUchgqjqqate7A15ADHq5CHNhAimyyMpkWj85RXNBJ6w4VVg7CNWZ867o8kqiNorCXwgootqqcLh9fpqD",
  "key8": "5bb9xN4ygzQhdduK1n3Tj7mPot5PguvwLCgqpazsa57p1aW5SE8NCjucVDuqeBpdBko5yEnY3psyirvST75ahNQj",
  "key9": "6uiM6naD32ZQ9rfi9oMhRAQ9itaTHAWY23ry844vzdeu4YXpwnzGnAmWmSmX3ybeaLQRWcr7kBzEr7xigEoXwWD",
  "key10": "HdRVTM7QC5ji3f2BYo2nFHKrkoh9FoFjqT7Nb7u8bt6tN7dm8miQb4iFfvoDEtiNX4hmXEBBSzAHDdMd3qXNkHr",
  "key11": "2YQrBwyL5vGt2uGvdoQf1ZoSQE4pUJEjHQ2vCmVMqeZsPwy9EavDRdxvisUrSimMUTVi1jACWdrQmddXJCor9W35",
  "key12": "Ku3YN2QQBXtTZfHPzGKzX6CRvo8rYUebHRvj43pU7nAziKtfGEEnvUvhs8tnqzcrPVJhT4oNuBz75UJZwRwRLCq",
  "key13": "4gbn7jpq2WFw7GQhAAaj1ZH4DRJgcMuVnfs37zvKgmonrcgF6LHASVUEw7DA9w3giwFkVK9ZSrTezhC66DNicoNX",
  "key14": "5tFMJGQBSnHy6skx4FyWmYX9DqV3p5JCBAeJ6SLG7AUnvPG1suRtL3q2DhT4yB23eAoVYz9guZd3ovF6KuDRvSd5",
  "key15": "5nkdVpoLsJEF7UZETkbkGbUUnCivWetcRurX3ruKLa61pDTEZvUyJM7rUqtPYFfB5Fg5BZAFdE8R88WMHQMZfTxD",
  "key16": "3wAN5SAtR2Kh36k9uvUy8TwYVerDetx8r7np4J75HC4VR6r2yZ87GvnvPbURdbboLM3UgdK6JPRKtHfj5VgntAWW",
  "key17": "2Dh8fHGD74PGFrXAJu46BjpjnEo9ShaiHu5WcNNU4NtYiuZMKCrFY5V1A6RLoP5QmdXzBYeFf8ZmHSJ2KPoVVKCL",
  "key18": "5rfT5uBokied6Q8ncGCv3cm7y2TqxFy3CUNxdVzQbxWX1TfdgNJxquEQbdPSui9W3nFy23xRP2vvzV2B8udNpma4",
  "key19": "2sVW6F3fMUpwxTQNQP8b5pq5tQxZH2nKpqCNwtZHu7NAuQyiDBubdCQ3A4tYpKMQWSAhGxFQxVwTdTSZNYEMwdqs",
  "key20": "4FS65Z5PZVABiAswSfQj1kieUMQ2B76tjS9jvtTKrbCbtP6Xypo1u9E8ccKMHuAPEoRHqYwejBy6dEgQt6bZaZcd",
  "key21": "Mcq7LghvNd82Dea6t6igmo3azhFvb1VavrMffXf5SDKxFujUrssrWh1P9egYsXydFu2rbcCTAxKPkHNayknA3Rf",
  "key22": "2rcndWFZDBW9fimA9DeU4b5tmTzu7fQ8RiSFYFchpq43mExxBFPo52zTfjiUXxi9XXBjzLFYHxjopRpq9h4mAHV",
  "key23": "4BipSSWQfZBRbe8yKHECPfU57oCREwkcQ5SYjM6vQswXMQNv2ZehTwMynMTWpkz7SMWa91gJBED1x1xrqo9tpgJC",
  "key24": "3vff6D1SKkzJ3fUoMeS6hLJPkCrdGs3juV59awh5c3NyKqHY7MiDEgrjAn4Rp7ufaQDpRXfm1u2Zf7JC7bmir7d6",
  "key25": "3t12GQXpAT8g1wSDm9pvB29S4kz4GpuWmS3s5XougJdVhBui2yphW4uchSgA4DnMw8zmr2fwgvTgZMzVg9CemWMb",
  "key26": "4Pu43gogo9W8FuDMNBkD9rvh7tXUUm4vFrunJttsLaCpA724uHvox1q6hV59dAsbHRKnvRyqLGAi9RjdxuraJZP",
  "key27": "2EP8xrUygRW1nrK6sfEVAg6HjW8aWtSa4F7PVsQ93wcsgCmwrPJSzVqV1Rsine2tM6nfpd7cyReetcHwXgSreFkS",
  "key28": "2RSqyKwJzmVbTqpw2gWagBtRcdQjsp6GSwxT5mwYXeYBdFtV4bMJB95A6MBbgQCvgmLS4HMqgUiHu45qQPHbWNfq",
  "key29": "pAR6V2etzRD3SnAckbELxRzDUxYEU5y3GtcR9rqMkqEAVT8nAydnDxw8i4o747xW4xx7GmyudYdq4rSe8nK385Z",
  "key30": "53RvT7Pj6AyrbnfQ5iLrCFpYUfgM6i253apQDJENDZBDBjr37wkQo136c4u3qc8qP2CTXWZKEzRVHQaBUhMxt3g3",
  "key31": "4MdjnhKrW55fTxPx1GUKWWdzraxSii3oLcVp9catAzciSo44GPZ3E3cVfxgfeDqxHy8ngppxYUbwqwT1pFofy2uV",
  "key32": "g6CRDXofRDf9KeEniwLzZxiZD8ujeYXVDuujPcJ933JeyunD3s3bRL64MZCdPS3KMGiVGGPpZmjNge6CFgMLVCS",
  "key33": "4HM3ksbwa64Uf6Xw1sg88fatho2CPDNtVehqBPnsd5S7ytZhkKQvyE2iSsXkrLpgin3cro83J8cXRpQJWDDP9sr3"
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
