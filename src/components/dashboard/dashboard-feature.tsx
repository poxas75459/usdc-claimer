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
    "2MoSix2ySNRG9XxrAfTTtYgAh8nb1qeTFYww2Jgfnqhhs9Ug4Dayyp9tMjP3cGgYcTbQS5e6nKDwqKeTk4kRSnRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nFvHroB4wJVJ5SjxmCAB1H1FZTqTR5pvEVM8xFvf1KtivDZLPtP9iCs5X4aPEdobWa1sssGx1H8aXWmqA5DzF9t",
  "key1": "43ecHME7DhVgQyMX4V92cUSLyfMGxAVFFGDstbNDX6Wq71BDNcoVGqtci3mDr2DLE35VVHjVkyM5NuSMATin9d3L",
  "key2": "5aXpBxrRwbyNqyuuVNhSSusqyfa79AxFfcD43FHQQ62RMz5P8pVcKaqLtLk82jL6ZmA8nsnhGGVEeRAAwTwXRvg5",
  "key3": "4xsVoqMHupnERVsdpJmKxqLkRzMypX5fArCnVUT4PN9rNFhXHMipFn6qELESYY9b3t5HjR3cgoLRCYr43mXbBh6x",
  "key4": "3L2Lf6aUdWBCPU4Lv75bKhPRkBJ7CuTr19CCrcWJUMrcDdcpXTfqVkEQCxzU1us3GxhnkpfTAmMBfUMr9m7smY3x",
  "key5": "35SFi5681hdZiUKzJSmuUaWZ3CmHvypDFgLSAjbL3pwD7xpryUwCSMc65rRUtxobebAe1zvahaeTzjpRoG3tCNMP",
  "key6": "WFe6cwSDUH79oUm8E5zxNu1qq7nBCCiE2uNcrWYzg8cmjrY9z7FPyWwgWoGtm1XUNi18gUhVgopbQuKF4ZmNWa7",
  "key7": "tfmsZ7JWX4cGhEc3kpiEDchu2DXCpFC81PuJQ6DhhQZ5QshKFZ6WfD3SyLKkn8S92kEu6JA87PaAxZ5WSdwuzyo",
  "key8": "XkTct3GqeYv9CmWS79nSooxPTfToRT2yj1jP2vc139a7WFRJX98Spojy7cWddsFWVeUCKoF7Jytzpn9QsE7sL3k",
  "key9": "5JmUBTz4hwwRdBiahaUq8s2rwVu1sP9ryYtTCc6hKsfjWBqDt3z6T9YqFnuLu4p8hT1n1CfbSKLcU8w3BYekLTp4",
  "key10": "522smuwDYGDrACmmty2xSYN7VZ8SykwZ2wLZEJJFBLGQfS2bZVhMgqnhFbYDM9KFrTyHHmbsKH4vNreJLo6shtwX",
  "key11": "5thZa1Fy9FRr4xuWYw7RVxZFZ2MEZxjZMcVBpj47ooVmySwoMhUTyBseiQNDvKrojzHfnAhgij1efNBdtWBdEtEe",
  "key12": "eKY5wGHuNHHK5chqJSaXogEBnZRefFEV2Tb29egFQxQyUenNpi7PLjk5wc4qMJcyQiiiohsk5xKzSYJGEYFQUcp",
  "key13": "4MQ5WuJ9ZuoraY9HB54yKUEW4TMS4677ujCqdBPT39MMM3sJChUDme54ztLDUHLMBjK9b7o8BhFiceEj9LZPz539",
  "key14": "5FpoyMv2eyrWcet4igyxjYCcMUZxhGKkhDbiFY5MowBLcWwMfhEddJrM58GMcj1AqZSZTXbBbK3svYjsMcm2J3oF",
  "key15": "2hhibtxWfQfnuaBQGTdk9LaisEVamjZRCXGW1tTe3aCwXgQKz5sWz8To1HbCciSVoBjS3n4FuGYE2Vdp6ZLgvVGH",
  "key16": "5W4gesvF2UNw2ozB9X9xuDzFeEvRkPyL63rGuV6uZW85twuH7rpwDwMma7fcxDSApAP28RWmczBVqsTQKjrJp3GV",
  "key17": "BUbURLcWqGnuRnU7AjCGCZkHBT7sxs4JyCCSDqcQRM7DsdoQJVUoyHEJaqkjAi7jia8cUyQJJeoJkxTK1s2AbJ7",
  "key18": "4ipxKYV3AZdfCt8cZwCyht3vPv6uSo4chFCskmMqYKppXaUyiDe9r1vLXx52TT122qofrYnFMK6BNtFqwk8sX7F6",
  "key19": "3oAZR6CoReid7UJ9LC2hcJKG4vBAr6jWtg22jW7HVLfvBwFxXNxAPg5Fg37SctSMkEsGQAqA43L7xetKqBvBQM5d",
  "key20": "5DpGjNpcNEYw3msvNzKpJUAQV5vxV8DwGMVwjGB8DBekvt57JiqoL5nGPqDwzLWmHWU3YTq9vQTT75fa6EUen6qp",
  "key21": "2qC6xDcfvKP8fomD59LmgBwUeYHHrURZVZTvRJNSUubrZaHSY47bZEkU1uT3HevxFM18cSLp7ZBuQXokwwnAdsxu",
  "key22": "s9aWHLg6SM5S3mxJEhLe8ccS5eJ3kTMyN9LgwKvQsAEJN3nxqPxvoBHVqyCDqk6jW6Pem2cr4mhk3kVCLRjtnsv",
  "key23": "5Syp1mxXGgcCngZPSPRBRtZcjyRgL7jfcphgy5oV8M1WjtDFpAeUg9aKfSUk3euwCdWdmEW9kmjJUdoURtJutFCP",
  "key24": "2VmjXAQuKWhuTGHxGxvYVLxe377JjuXh8R5B3TbSdyhmY5wDAj1ZZbyCGFprCCrfyM2bp9SLa6JoMSb9tt1iXQRV",
  "key25": "5ytcaooecnz6c6PVLBioGP7T6GRXYCnrgPqCVxVXw2xe7UQ8w1sxhHLASJaXGTwwuya58uBjvxfRodSP7Mh6TqLB",
  "key26": "4ZvsVH6enTRbgfYdeDH9FY8jnVWYrcaQfkMzVpiX6t11J5T9rUMvKvwPyNn1tNfX2bPgBED5BX31wiZTAMMoLamQ",
  "key27": "5qeVZe5V9jsFkGuSrWw97tn6HbWdN7m66cUVX22DVWYcYFj7neHYRBhDJfqs4Sjtx6RChRfgGtu8hYbPctX6WgTS",
  "key28": "5Xi3menqim3YzN4xUaMybQ1M9ocJDfZi9yZFZykyfAL6hbLEYyftgaM4u958HFeEZrwkcq1cTbi6JchQAanSiJHz",
  "key29": "1oyoQB7F7Tmk6eqxJmzYZUW6yKUtkDEjP93ScPmUyXjHtmsRZsGUvGgU1ads3CEsWPjqZAGK7ATAnTxzkETnw2e",
  "key30": "2g6RTe2wyKdvAbrB9ixLMETcawSn1ryrUziXuaQQjBAYFkPW4Wcuha9CrncFmcqMRSUMJ5Q1BSv8fbCBXFABCh7F",
  "key31": "5pyB8HurwqwHo366Np4f3bckCTXZFScZEqBdeLuUvtngpf2jfftyn9rzwbE8twP2CUW9fVhFys8YbYTBx1sT4Ypd",
  "key32": "q4YrV3MuMtvNMQ6qvyCzVzZDieLzozNDZbfeH6eu1DZ6z6uCczbS8VheNCkivSmzdkLqvNmfVzcGCH2Nvwu77p1",
  "key33": "5WBgNLbj5PY7MMUm3JMeeYSaqSajQUceJ2v4TQDU1dZbxooa7z8fVdxpwN6m7Vzg7JDJmqXZKi5122sPj1Af4EiX",
  "key34": "2ko4tH7KWQN288T2a4RhjzPuYYY4FqaW2B9Gm5WeeaZnXzUYQLzTxiQGXdNjavMTrzSZQcApCteHtGAxnyyHdFwV",
  "key35": "37zPk9UyshXhtGQosXv3TSUNVWkSXcoZ58LU1SiphQEyXX3AYPCYPocm4kLx5hE6sn5sV2ieTJW6CbJxt53JW8N6",
  "key36": "2Zt18GPtQNqnvhSRxXNuizy4FoZ4Wj1q9JQEdFdGcDVvpSctBVxAEXbREyQSAwkGaRrJznK6BxfnvWL8Ade38idD",
  "key37": "2jBNJpMS8R2fcZPBBM8iyftBvcwB42Ea45n5Xv3XuJh9vQFVG1PbLxVfpBJrQFmSGDB399eL4ZiC92WAaU7Pfzsq",
  "key38": "1CzzeCmHvRuaUn3APGS1ewYo5TKbrGcqiVioBefjsGKrXB3iafFJVPVNzsuppNzNjJEHmd6CDyj5tn8DSy5owFp"
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
