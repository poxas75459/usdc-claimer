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
    "2TYrqSRtiSHc2ftGqMhG4vAZL1uw8W9YwFLscYUjbyHWLcXURrrL9NaBkjwib928HTDgG2B9uoSPQgmaoU6AMBqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4joeGPvLh4eFXEmiSe9Zr8iVDLYpTpzWsxKrNmTRFfPpTXY5WycNwBeBmHmTHXBvExd9JorA7vcv1jiJ2JATD4Qw",
  "key1": "E7HXMauSkrhwy8nmMmY4MNsjakV7RjBaeiB2EemxmdaiFwaKB3TN1Rn85DgUDUeMjiGwtRTPVJS9XhQ3hWw53oP",
  "key2": "66qnzSiDCMtYo6MfTvZFgwPDbnmLdSbN1yuVjRxfacu4pSb2T2VB56QcLHe8v5GTNNd1iWdQhu7iggekdiZgzyQ7",
  "key3": "447BsrV34pcAz3XGRP4poqHiAa21sEpyaDuj8fV8zcYGcoBMhTk3r5YHjadajzWEKyP2A8kz9NykSNNxer5QGmj6",
  "key4": "nvPkFcJ3czUzoAPUB4Aq73Jc445ujMnfxWHBpEfB1A1Qp9MC7XTQM9EsJTZwjokJp1PHc248vLV7Y5Yuno1W73d",
  "key5": "5BsbtYFgT4qwzwAWfyiV9YTqh4J2V8aqDj6Q18vwqroMFgr4p4Z74b8bGdkdQs69hLY73yUnYE9RmQ1jBKQAW848",
  "key6": "4NvbDfQn8juP3bzXjyqr1MvzJPUSveFMPbePauYKQo4Rj7qGTuWtpZKhyj3KKkbhcEybNCRjntB3jXAXHZNebaK4",
  "key7": "3xVyD2yNgrK8LE3vKRm3baNPhCSJUNrtDR6sX7zYUW4aoJPSpSAUrgg49DP14eMsveMxbxyWPVEtJz33LsvFyd9J",
  "key8": "3yot2zm1HdJdTE2jhZRHjGhxXd1Qc8YdAtoYw7UEtaQTJE92cWcPr6LJnDHvTy3MUbSNxowE19HXCqZfuzdjCQT4",
  "key9": "5kJxDc8ZN5wB6yeZ12CmEaKfoQvQPS8uWiqTgfP4agLGAfNt7U1VdkvqcUn4knSdDYHJPAZWLsVRD8RP4MN4EcWJ",
  "key10": "2b1m8HDxeFqH9nzMKHn4tKUoX3cdiHBFBGD5ECKMToRKciUKtwYnrZJLSg5FqaWeG6P5zeKn78ExhgjgWLBYyJZg",
  "key11": "29jpmAQSMsKbALqrQXSWEPK3tDBKjLFTybNswqyAUX98sbyYvHt3EnBrwej8Fh5rPisMB1czPUzKL4ifRBHxDKaZ",
  "key12": "3LscaHxrZFgA5Hfq2ybdg4CTKA6ahtyN8KtyN1votkheofcTwGSMLNAQ5BymGnEeTa3VCfgQhAc5KUspaHN1i61R",
  "key13": "2hA4pU1ob3qjzYnJMLvyoLGBeMYD3nS2VtVPkG89ktKE6dcrK4iA51bcqaLsgob86jiKnXL3w7ktHdXsidj7RnRP",
  "key14": "5sotforz738wacr99eLd11jK16AB6kKKmioWXGuJQp2ebuVAcU95UYCxTa9prSoAGDjhfDpUsfomFJS3BJNNLTEQ",
  "key15": "2s8Zx5zNzj4ZK5L9TqesXrapnq32txXQZdoUfK7FyasLL4nLGY1q5bjm7yH52eN721wEGmBh2kGaEdg2eVwc4ZAe",
  "key16": "3t1PWoxLPABtZivgMqCXHYKKf6FztLDtTJ2F2QxWMPHTN8yChmcNGSWRLe1QiLGke8vQCDwhg4PGRUnQpDkFY5WX",
  "key17": "4V7epxKb6diZqeRq2FXJ4YA3PccVL9D6KoLXcsFbunL5A3is2aMhPk5eBbvqGmn2KkuBcCVzKSnngtkhpRaKrX9L",
  "key18": "5MpjaAG63xRs8HH8LnszdZNVpSKnkHMritp4EQDqyKvRUbnnqpCgs7WVsri9ByRXTeu26TPpo1zQ6oXUw26sRPYv",
  "key19": "2y7mxgRM5ZhFCx2bjeMaCfcSfxWH9RJJxEG7K3c3CRwEiph2JKSUs5WDVKET1uBcPCGHWzhgUY6qgyB2jxvb5zVd",
  "key20": "4pq1ujrWGzKteWbHT8mHMTF4nZNoydq4ypecvKtzhyZb1TFqDRBE2k8xMW8PzCS5nZyWur77V3ZP7KcTuvz8otHj",
  "key21": "2Xcva73PXD79vyLGYmrp52tZVh83zhvxsu6x3T7F8VS14kvHxTBnTjqLFQJNLwwekqokgRuTarjiQHtwuVDfXgGN",
  "key22": "vRUjVW1gTGsdL3e9bDDSHCvhJ9QV7aRz5oaXfLPCFqcGjdSzNHBHNhamqjc3xjwMpGzLXTC7b7sbhrBzXunXb3m",
  "key23": "3QJzWC1hjrWVuCtCrKosSuba6QULqrNF7bfKua1XViMvN8XSyBA3fnrf26whUyijyNv2PFn3k4VppyLSVuQ5Qfiq",
  "key24": "gvwfwVzzhdsTns31K1mKVT7HPZGVV3C8dkRCXpxNqB2CQ2beGL73UQGRwdRKcMKEo2uBvNkmV3qCqx123q4fE21",
  "key25": "4hCY5wVJEhj2UJwNFfd8ccGyb5MboNCQeBdyUWhZvrQ7UtzyUnWmAddRfqDwHE2ccHEcgPmisWRQL4RZY3ZMoXpY",
  "key26": "DpP9qfmHz1KxTVmc7JiWBS2Q3kndw2p9JMVoamsmeWrRb8fZqcuW6DGRuXXaPMYMN81GdpPsG6fYeEv4AnRhJtd"
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
