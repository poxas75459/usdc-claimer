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
    "5e1LR1Gn5aWfzWuBmeiHprNrTNC7rrCcrHjDXLdqHAa9mmmQeukPq5Fjht1vgSzWXYHvxT6mLPFkN8W4KZYrPkce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQCtiETYWEsDfjLCppdJe1WRgMV5cfva98smkLoivMiDvtjoFLHyakSjHvRrsSJDjDPChi9M1TUKeSSdUQtDuza",
  "key1": "nZynd1Y343qvTZHNB2RdgaRzEaq1EYMNSjwssDbRNi2Vsa6RDuLUaKJaKzM5RTtBisCBqXG4eyfdXLfGDN4Ynaa",
  "key2": "2nq37RDQr6vR74ptNwz3WHG9RyQCqJ2C2gk3CepFVV9UNNAzLS9kA24yuLpYkSeGYu2XBBkC1QMSD65dgzt1NMbQ",
  "key3": "39qie4DeupHYm2JFc7DLxeRNyft7EYqQ2XH4TityJeQUj8JMRzo9JdvMYQSeHoc9CrDKPezyAyN44SpiWMUze2pb",
  "key4": "2mrbtf37RDVzQWjMsNpHCnsSEJcyJiyDwwrySVZ7juVYT2HyL1zQ1SNB3GQ1XQBAEoH4tMa7PyZPQXUYDrD1MPvZ",
  "key5": "5FtsWRUVXCvFB9gdsoxTZ4PJmevn8PMbJAVk9u3iGangHd7So7StAyAEmCe3Xkg5UkBc1tGr1BY1adk9YCx2Sfgd",
  "key6": "4wEgEEw8XoisJuU5ckZmj4rK7t61MGc9cVthPxArsbcMkXNyvjdCsC1dNbfSTV14iy9yhivbcZu623RLTZduSDm8",
  "key7": "5UpeNUw7DdJ9rXu1a2MisfCSeRA57saJjammuczygKcqQd2dFCk8j7cgMs5Q6V9VpvfQk7DAuJSLtRoWgwC1imbJ",
  "key8": "2tzXp8Wi88x7GjuNuHmPHvFUijJcmsoGmX4SqA28BNpKUKrMko3XN3vmCScPGPXxCQSYidyroYi5Ew9TPgjKhvqq",
  "key9": "2warxM6fSN36BXNd5Sh5vRHsmpRBzbx23KPsrKNk3BRTusP98HHNSi95csBrMD13FZzGJaD5KWeDbRHddN7Eak32",
  "key10": "5PP7qzRjJz4f9fKtfkgxxzQbTadb14dkbSEma52UDQDRCNTFjsc6YPVffQ4m4zGiKkaPpGdEAprSgYXGeFxZpDmz",
  "key11": "4hmi5gqLkh87kwvojimecrHDEBPjDWseP2pZZUn66vH69CNZgFDN4254UkmDgqy8qyuC9o6P42Kw6uHUGDrACu5N",
  "key12": "3depwdw112asWCd1Wc9jLVUwGexKyQZ61E1uxfmvQaDsbDkzTmzxcQRds9hm48wh6WXX2oUa2zNzuHwkfhwHNK59",
  "key13": "3KvjPBocWtiCreMpPtcHoVtxZJpePjebp9zEbwwoaojJUwUknTioRjMD2ssS93VVbysjaACGHgWqpAMcv8QxFgbn",
  "key14": "6d2tXyhBCjE5CfXZKRhxzYDqtSdePb94CuF82Ly3yjoLyQqi9PTfGP8hhqd2ASLYFBgx8uUeZj26wxpcmp3ZGHn",
  "key15": "4XsDBvqasnt5N8kuCLRBAMymDnQ71vS94bpQzGXThA86e5kHUtfjc9KbK4xPWkHwMoWTzbLN1p7yA2YSGjF3hqVc",
  "key16": "3hweAzvrMLG6CuuZc96hms4xBw3MinGy4cyAhQjjxpXPfaTuEXrNY4ghxvNb5UvAcRsdseG1ZqoRhKuMoDnuobh5",
  "key17": "LFstXi18BgN677tKn67oqBrMZyH5CL33djCCa7uQiCoEMot4f6PYRQKXWMbXyQgXL7VKZFeXFgCU162A6FrZfh3",
  "key18": "4zJuvXgnnPZ4exK6Lg7bNKHWFjk96un2XsrpiRywdadh1LXXkyqDvqFXK66E3ZfkhdpM5dpGdu3g3Nb4HRbKZKY6",
  "key19": "4sbdXmvSmC7tYsQJkgwvbkCLcSehuyQteL427WcyzM7E6FeA35ZS8Px7f2cZxLpNKztmK1PruPkJUUxn6HGsBxC9",
  "key20": "4z9smyNxLVdhDsg6Whe8b7YZp9nBnRxNnUEugGwdySeVokhce3qvz5EWF6FYfHaUuJsfxYdEXAyiQC6ULwU98ZHr",
  "key21": "3Mz5BFytm5fSVCFZqupw66kB9QwTwFSF2CGMTNS228E4fakPPxeCbWX3hHTWnnMkoa2XfRg54GLMMDJjxmrnUMpu",
  "key22": "5u541ZUbF2oEnwEAHuS21TcSp1RW3doPjoQf8eKdqcqV1MiLFZquuYzUjioq7U1BuJ2AakB35TBxqoa6N18ESkur",
  "key23": "2SkkoA6suoAYF9GECsqX9WYVAczhDchMDjUbXcbQjTohGiFvuaEGceVs718V29rB61A1Pi1oSmQvqpRR1EkMszp7",
  "key24": "2saheyT3JA1wGvpftXFpCdSNr35MySaCDtWKMEHRDhmWpwzNzNeVaX2vnJVcovq8N2r6LDkrXbi4RKiEuRwexhEE",
  "key25": "NzTEpSerYeVKc6GLam8TkzYoqrCAHEuHGgwLMsM9zoD1qKqat7hNGfBD3KAVJEqFdYr1iR1gQGD7sMDFfa8BpAF",
  "key26": "3tcmCzcAwxFs89TWxNrKszDZy9VH1EHa9K4RSLLmXFWwVzD5iAUKcrR6FJBJUGXC5d4cpjJMPVqrqMBKXZQdho7v",
  "key27": "3F9GA3q4RFRfXihmrEeK9KxxDiziwdRE4fy6omK3Sx4nX1PV8PGZJkKzAV4pX4LuHPP3pxEVPhXBo119iP3a2EU4",
  "key28": "2BikGfvJSfKjwsrrgDa6jJ8WczFmacXPceFLh7brPk3TWSXr1pEz7j2kKLsyKXeVfZtkNZn4wuda1QVV8aKrRMyb"
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
