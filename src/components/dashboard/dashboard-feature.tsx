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
    "23CUxX1AksyPJhzDqt1abdKR7eWrSxLYmZHg1jRoBao8hb7BVnNA3M741aKRKKrguKktEvzAcp5eUi7CEomQ3h1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g3Gr1znffT949cT4iZ8t65L7C8K43BwKmcpF7Xt6ZjbTBWpKsDhx51uxDjFoAqyUGeB3oTWmEks1F24aMfD5DxW",
  "key1": "3VrMWHMGgz6zgb7beVRQfiM3UcU65pt56eDKCeAvQXzo8bvy1F3DQepur4TgNtaCqCh83trsJ1L5TE3AB3BM1WB5",
  "key2": "4p7bVM7BZMDXRShWcnU2M324xKguEzWmzPPwNobBb7ZrFXpbsKEb8R8a34ce1J4fYsUKgEiaF9hUmMRdqo7S6bbU",
  "key3": "2cdVJTnZWY5qDbAETJmc2hUN1sMsF5N44sRGoEkAWE6W4x7waVz8L8H8dr9tVmdnC8E7VskRGBzsriXev6NPg8eQ",
  "key4": "2Wz4cGPcvXgJ6L7ieTeZmSkhvD7EsLc9aQg6LpzWuMUqpCXzxPk2gYrkUkg81q9zXq2j8Rwf5TP3fHedjTEbzP76",
  "key5": "51NcqBFJyvkvZxAs2XuuNtWYXLCXNRGxrqSqcS8sSg8tfMaxszHLAmsJLJUnYqaKgcYJrX7rS78cCVfgFBbNkznx",
  "key6": "4xECZGXBUz1KHgPkAo6gvNVvyThvTxBScmjWwsPdMkJ9Z8pnCHWUMf6P1F59wNqvwtxoN3pqWkxHh38YiAstrp7i",
  "key7": "51eV9eimKrvVDXjmKdwsrarZL1A7u7g5fRYuUsFxxCksmq6nG5KC3sHsN1k4pDyQBYaCMZdHpZhQ7GaFGAfMqsAw",
  "key8": "3zCyAhgy7qgipD3usnDQCLsoqJTet4jUbM54QM8MHQGxrHrU3cw56YTpzbTJWxT1KBJupja73XQXRwa6UPHSewFC",
  "key9": "2KSbRN9BUGYJMCbEW6hE66kUeMhSJnwCpAxAaUvnKTNvZk7re5ZnHc5Ygj5bz3qg6kjBKWaM5s3Zd3VCJ23FskDU",
  "key10": "5h6yPa1c1k4bGGNYdvZmsMn76wk7q3rpSr73erknnUNCLQiyWDroN5dX5VxhRCVwgJmwxipezfHgA8CLMqpeRpY9",
  "key11": "5wSLvXBWi6M3TkapX7EcZ2buTDdBL4enWQ8TZHPeMiYPXLis88Y9KjtGZ1c28wmBWk6hbxf4Pje9ozvkuXtN36N9",
  "key12": "WFVnjmvqxpMYzmzyBktE52nPDTA42oUisbQqzCbTD614NLLt9gUbK6xAhiAyjdARu7bQ8f1UNUPJupc1r5NruBH",
  "key13": "4hukc9M5gWDDJdoPpHiGrGQqD9LwnUvLBMXnhzrFTvjjqb8VFB46dxf5BGZmVGoUijUCAenQzxypTnJHgqsyCVpA",
  "key14": "3WXqZfTu8qFr9RK4ypxJZ6yV5Et136TH9x8CMUMwDTjinJM4KcVy99WVzgZK5EjvsN5NmqTPaiRd2qtBo2j8QBWF",
  "key15": "75zK8AcHLxvzy1zznDEWDMXSMXV76M3NumWvpz3pvMroE8MuV2GzFtwbE6iz1CM3ph8Yc41fUwp4Kj38PF8eZJ8",
  "key16": "31QT5tPqFDbvKG3gLnoGrCGNkQcmmFrFBvMoFq4iFa96nxdyQLSiFZzRtfqvHN17rEYR2qFcX2FRPTUb7WctPhSS",
  "key17": "2mL7wH7TDSyGCumDbpue2sSnbf7TdxqB7wzfw8kZRhb7JprdpHQbLJzhwiFXA3mJ9wszUxyVSepCyaDcVHCBJ1qR",
  "key18": "5zPjfQJNjTmQtXryjGNUPHXw7Md7eF3zCHYBf4DGroqgni3h3SvsMcDKLar17XxGkbbxA8yep7gZj6Ze42UVgk9N",
  "key19": "2tJbDKU1ZZ21dz43MTc3RZsdQF56yJkbwMibU6L2qPJtarzgBQ9mgJh2YxAM8Wzih72xo8tbV4AXv9RhJWARN39d",
  "key20": "LwL1Y857YY2fv9RE864rHRmiHtDHCM325a19PxNC8SKswGb7KNoZFUfAcvDKMCBBrNNSDjroASJeHKBEhsTzmgw",
  "key21": "4a38RRDsngcnwfkk8CXXn5r97xS71JRMnc3codZibKiwCd4h4ij32tCa1GquKbrie4ynyihx29WcCfcMEhz8aShu",
  "key22": "3JSqDD4NAM5N5NVuuVSq3RWiZPDcbVGsYBakvapVwDJUYRb8KaWD1FRjNvHfgr475j9xihqnuUaXRrz1whMd5y7d",
  "key23": "565CQuPFopmzFLa4XZeRFqZLYLxuwPCEqFo5kGWCfHeQ4fxKGmdC6aHPagrcGywRykx6P8yFMcCHnBERm3cBAJrV",
  "key24": "4BqjL7KrXvT6JdFeHak85TgErUJXjEYTQCFpEL1EBrKc5WNMXDY951budrYoWFVam5vbxcLTUMRcFcithRwTWGxH",
  "key25": "3S6u8p8kWT88UycKJNtfurC9vADnMeTnaYeXiR8DYAdMxSYU3sqoAzx1QpF43HxcqSWe1LnExSy7Va5GiD1xE5U6",
  "key26": "49kKSEKN3EyFGnP6WbbVDnkBXdGjiXGgsxwMXXjxjJetiCBUH9pTrtve1CDTGZRUmGNg2Hvjkc3EY6ru7oAxKniR",
  "key27": "4MBz6wSTYvQT3uRCNDNLPbXp6tSZRP9oJJKDwQyfZQx5ojCGoHAYpA4DYcBT8sjSFFfg6QWB63JHT7GopD3bcKSC",
  "key28": "2Ds5kRbcfo7BHtFwFQtScMLjQbhNxzcbNmqcYGziDuLctxu27EReBReeUdnEdA16yStBFoCPJnJiiEgj2zLfXQjM",
  "key29": "5EFLKoS9g6ZWAjfK6ikYLYin21mJWiXKQ8CxYD2e6u9mbiMd7EKUZQRBdRt2RPAom154FE6B1s34YNb5gXsohfHz"
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
