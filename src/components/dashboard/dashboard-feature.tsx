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
    "3FtKHL8XNa2NTJGjoYTHMuojS2HfyZGgQK9mzb2VeJKGb5u5dKRVTNoh8u9Zm6na8TmhkhoYLAM9nmoCjHJNdi7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mmUbgftsXc5XA291BjtiDKcMrQMgpG5SexNn655EgDirCQp6S9bmgkPVWbQGweBjKBJzJwvoSmh4earznuSeAz3",
  "key1": "3UAhQKgXYgTXfHqu1K69ExWgyjgwK5MVeNsHTAAkTkkhWeBbQkJdpZWBN3YpXcVGNvUq5Wqk8KnxiUtBqY7ZXFeE",
  "key2": "2Z7pQa5oxeVAPAvAt9NfoHK7kQB6C64hCCKtaxcfbiTcnbtcPw8ZkQjbfbXrh8nLpZrmQ2kS7MUTjMH7hNbP1TrA",
  "key3": "j2uYrze2DwmjrxGjBVPKGVk46XXTi1DW7ZRKKM89SukFy729Y3GgHBrggumQE6ixrhE8rTgFELspaKau7qRaXbo",
  "key4": "3M9mzpjSiwvrqEfRmWhsbruhGTC8m68mDJwdkt1ND9ytRNt7Zk7t6NjQGGbDdRRv4dB5xXsAHDyu16nYzw1pAWgF",
  "key5": "5nyRHTair59jBhaDQiNHUjEazTbu81guKEoR45iPY6dQFgA8Y2VobxGDNtqKmJ8d3oVmdEX3DkKkTq52ED2SSq2n",
  "key6": "5VStERNU5HPAUbHU8PBVW9DsqabTXXhDCNuud4Yr1KhggsmRXsXo71MXD3rYcLuQwD4MuQ1AFpVxeqxNKihtydGa",
  "key7": "jjbbQahYWnriz6qJQiaBar6KoLwNB8PE2wv1qcQ8jkMdVJtQ84orJN7tQ1cqa8H4vGBJNiXfjqVPVwryMw6dU7G",
  "key8": "RhqUp8qJt3SZTbf2FqhX1Q8W18JZHoygzto4KDcpHdoVPy6JbvCdrjqhH1s4aE9hREPhg24Js7thQvRx5LrgCDf",
  "key9": "3f8TbiGwUmZ6uAz3qzGqXpf4N9sF3XqJX4fjeAkvE26Zz4RZUxWBfuWZ1V59PjvNEB7PRaum32VF4R6YVAjofwKe",
  "key10": "5DJFsdahfzJ6Ue6hXPMcoxkQ648xYwUcJvmm1CYLjaD1ynZm7WZRXQSwvoiopApKhCoXgiVjvhBxim7tyPR8nALC",
  "key11": "2SwU5xfz2NVKkAh7KDKDBLLm4SNj9uuUoKhicw8JZDw6G7PgarQG4qS9MpnGvEryu3h8uhJ9f1u2sp4XWqhFTLHA",
  "key12": "544z8yu7mqVxc1KbvxPAtKXBK7P8cP8sWNva4wJrZmSfhG4McGQoEnPZE2JibNuuHxF1ECaSSkjtYM7Ba8NHa8Q5",
  "key13": "3LQzT3Si1gMHMNkNRsa7BCCqLxvig6dYLWu6ep5zomAxYGppJ6DWkF7w74x5jwzJCf6GCkHapfzjLpMD7z8qb2ej",
  "key14": "2CYatKK9wKAL3tuCWonrMi27oem7NPXRMeoR4Mf3djre32bbe5wN2CiogcDJyXqRwgdZwLKdks8C8jmLkJoGSeFj",
  "key15": "56koMwn2Na9FirDWPZGFtCPq94hZ5sZtvsL1vDxyJbUaBk4gCRySLriVycQKcpQGXihBqyUxEycr1hRj9Ff4n8ha",
  "key16": "5cQ9udNQozauhJbBbsemazgK98LHmgvUS2WC4WoBReocmG9grkHMmQfbfs7PnzZFCsCxfH5tdPAiEbwsqMaJ5Q6v",
  "key17": "X9VhFf8dYdZqdeReYVHHFeXjcoLMuyM89vDNZKxRusoaZWvjwJEgbaNUAZvSbpB8SA2QPe9DYdmJzNDXwrNtxUt",
  "key18": "42VxtefkxSFSowe56drLywXa9ardorhbZbTcKx2ABRbSYi1QyVuTTjKcjAQHYZQvgDtprt2es1cr4gzhciGeMJDu",
  "key19": "4frqBcjAxgTG6rgPqxRSFe9RqS9DBBhSdaB5Y8PfkkunNPcPhjJGLUB86nfaA7YmiGmkL9V9wg9e5eCAqtFgttmZ",
  "key20": "dFVsaLx4K98bvFHVL8Yx2c7NQVhUV1fx8RfMKfDK3CVicrAj5fhL4v8GE2StLv8AaPhzsnV9b89GgpgJaBZG9Zq",
  "key21": "2M69wJgnytAFDmhD14bZV3N8iMcQHPEyFDqk9P4GKvV97LzQL2i6EzprUvkcSN8R4BHKoHacNZ6ot4Q9nSdiGNiV",
  "key22": "36TN2Mfy2j4P61qsHe8TU4JbNXZEsbiyJKDQeShCFvZeznNXgCJyNVWwSZG4YoVNGZiH42hNkBDC95kE3wmFkYqV",
  "key23": "3pECHdqfCziFcjgBZxk3rvaXchHWeS4qumEpkukdzo4dicAEy5mxbW1xUftkx7C4kEQkQsVv1dX1Tt7Va2xxqGJY",
  "key24": "2nMF3SttwwNQrqc3gap8pNfJ8sRysnCGNKKPkQn8Efu6wLzL524gSuWZYX95KEnThmAGr6yU6KJzodwjwYA1EBdR",
  "key25": "Hi82pgzpnayH8LtKu2wXSdy2EMUHYnMC6mw5dppMwk65fr1kA1vApyQFrKymQ53H8WZzZxyaQDdXR9UmiSZvbYv",
  "key26": "2DKD1rgTEqi3GxQXqJHrMz4UaTwGomwbDSPiwn6tJYGJGWzQQj8SBPHNaTdvczsZJu8RSCPVQ3RTdJRJTF7kwdWh",
  "key27": "26rgns2C7vDhuhoFkvjyvsNQRJ9NW6ydMNMWU1Zj2vz68DJjYLwwmbfrx3qSMtfQz8XofnaZ6Letvov3jPWNmRRE",
  "key28": "2EuVWrVnMkCLPnodG59s5ncrKhhhHCHaTgWLUckEqY5maBbh4bDPajC1eQgemsLHY7Gitnvjgt87gn8MRZmg3XYN",
  "key29": "5JhuxNUte18njdDrVSuv2nTGRPu5EomUbCx9ACuXetHY1qNrBpbDQxP4YzP4NRyEftGaacv8noXAu4CQypkf3JzC",
  "key30": "2DsUzTBKtsyDdXR5FqwS857wKzpqU6zyV3ULTbuWxegzzy4RPrFFsNnAf4ssXx8xwtmAxsgSb772jzJTvGbsPYDm",
  "key31": "5TXVnbeNExjTv8PrknLLJXqoeAhZRfSS374LxFYQGWEXHxHCTRVUcT5wxcKEJKWbxbfMGGCLfxWG9XLCyp5iTovm",
  "key32": "X3j2LRY9r9veNVzEqRdCbmHzK9T2oUzFS3B46ukvHPdD56rPF1VqmcLAVES7REAJzaoR7LPh9JtCqrMX1wWmqQQ",
  "key33": "4FgfE75v91ZBJXgHS3L6Q5iNRJPWXwxDYZCGQHQP5AmtKRXLB4s8sq5BijgHwu1w5KChQWffmdjyeN9JLHbvzSdE",
  "key34": "4pc2gCFHyzgPPH6Z7M6ab6bMQ3Jw3pRhj29NEzHDaPVmW6BjCvZmDkprewMFy3ZUdQcJaFtmA2NBNtSzqqsLnHis"
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
