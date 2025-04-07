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
    "3w1Uu6f97C7nc3AR9pU4CsFuWJDR11qghDukANZaXRvmdqBWomycnYV6PFgbmyx1RbgC1WDoDtkxc1x1MUKug8mH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2imqfBgfBVbbmL9Hg6tSEiE2NH7Josoc7sfSnHPBFmeryaA1qfcgHeszHWiEvBKuk6szA29XvdZGBQ7sThwSQM8k",
  "key1": "2mQsn3JexajCvnmBMKyfiV6quyX7SCspHYWzNpvnwoeZRh6FVztVhWmpiR7YMDExczrhJnyNiZ1fhFnYH5hF1oqu",
  "key2": "CLe33YwiQ3RqsBKnWjeS28dpEzCU6Fw9AV42XzqcuqVcxxMs78VNxfJ5TG9rudcfqfgLa5sf54birPwFkGpVtXV",
  "key3": "3qfncovNxECKXJEKP7To4Aqn5mGgKV9boU18pAVnpaT5YCmPCunYAmDgryD8h8ZYyC83TUcjHHkHx1eh4ruj7UGG",
  "key4": "54PaHDA2Ug4U7tN6M3Uw9CtNAinDbhMDpBKRcGxEbPtorcikD1CWp9RZawdwGTRpcr8bNfA7NFgMvKfHdE26fY8w",
  "key5": "2L6WQ8QwsCqQM2LkXZVoA4KECm9auh1bVUuKfjT1ZUikBjhTqnA1zHb69dZSYj1QYRA91f4Pyhi7STSTLvpQnN5M",
  "key6": "5Lp7wuZhrV8HaiVkT8vvcztG98YjyBY6XSjWjkUknW6FLnxWgFpB29fJCjxTgei98YrfdJudLF6EaBEbbB3YY4Zq",
  "key7": "2Fb7YSEUNnB1CguTJUMA3req9m86FKM4kkaikJhFaC8q9aWCmdjVYqNCZGz891GuRyUybTR4fDAQPwxomTT3HLyi",
  "key8": "3dT9FVBGommvwg3a37523FVAZEXwobLB5rbeHAzmmhRjBFpKmQv1HBRuCiJnX7iHHBGvz9V9Wa8Twzsdc7j8wKe3",
  "key9": "49XnZNMNhrCtn44iLn1TDhNXocxvxue74f6cPLiHqa1QA6p5y77YKiEM9SMzVmuYpGVLVyBdAJYhTD7rXAmKodb4",
  "key10": "3tABqAbjtVM2btWDBnvu8ZGxov2HNjviGJbrTmkK7cP6qxsXQQGE9kQAsDfaWUf9eZv92emBK5xBC3HXncaWkAsZ",
  "key11": "2pVRJyX18b6FSPecp4cTrAevvohWpBReQNuBAoaF9NiJErShpwdyfkBCE6EKkLQCHMGVkJHcFzo9Gr4uLpzQnYFb",
  "key12": "4pg9RNYdUvwDn6YWWCgnSMSKaKx8b5bQZq9LbgXL4Zvj3GQD6UZYqX1mSLDR6Z64jgqWhfJ4uVrwJpQtHjz6gpEo",
  "key13": "3FKf5ZUGLXUE3fYx2YMQ9dx8jDgJgG1hunGrPViLj149ow7i5Lyq2qzPrW8eHrhzbco9itHovdH4Mo8XYXnrxePQ",
  "key14": "4MUmY7dk2ihquroMsqPff9Ux3mBjgbW3sbv3ZqG4YfakjtQ3zZ7hFgYTCKUfa7JMfwJhqBjMbL2wYR41CJuCx3yj",
  "key15": "36oRsJGJcyWvmWy95Hd3L3wxokNTBarckSrcuQxMqsqht1Tvb1ByXGTt5DRUMCUQYiAdTXKwgq8R1A8vuDyjyV8d",
  "key16": "MRXYzkcKh13JyURV6jebpKwefRKfSyZGY5wg5DjkePvbNRaJT2CF1RovBKjswsxR1oRXFw396xkmX7k6VFNSa4j",
  "key17": "4AhXhBqduFJuCfX8K1xUvijQ4cy34MyVboXCiRGm7oAEBcKyDZTt3p3kHKxFFMD2R65JJgFgZh6P85B2nJ1wuptC",
  "key18": "55AykHmjyAEUkPSX4PcCsYS77NrjH8bWqet1jcA12rX61r1vib9tGfhWu9vs9x3Pae5A4AYcJa9Gw6situKPWMps",
  "key19": "fWbbothZphGFAXQWkZXTQF63HriCN1j29BSstXWM3s9oQBQ9H16sXMwVbkujctJAe6NAtSNZUzFpo1SQUw1XcK7",
  "key20": "32edQZqPRanYrKChRnKBebGNMwYFELhuhFe6oT3CzBmH5JNmLXRQCk2MnTCN5AciU2LMmYS3VPyhFx3RVPNZviV9",
  "key21": "2KqZcR7Kqp3koD5LSQ6pFvyN1DUsAg8wXRYnKJbNTbKMJxNxvUZHSQeqo4H2WjcBga8bG9kd6MVv465MYY2X6qP3",
  "key22": "4K6LpAARDgX1LFiuLPiCJhBwTqzPUhRM3CrDoWzfkghCqCLg5VXqCmpt8673x2RkwuhshWZuErJFs1CKa3ByFwMq",
  "key23": "39nC7XizXHvSACL5QScfymVpz27698qhezUXcxkcXyB7WgyKSt4MsfQyJAAibsR14AD15sN7VLjhtAcquxiR79sN",
  "key24": "qZvkRgYYomsnGEihNMZP94k26QEF1kuKzM2QPzA9SVFi8L3Jf6TtZxchy5QFG8hbVGw1AcTV2U6Mpp5vpUMh2qV",
  "key25": "241LazHUqBLfT5hFJwUnRtHSG2Jhafp4EjPi9b7JbJzpFP7vFBGhgpAv7S9CwX1PntP1nr7EgYLgXTfA2KQGajYq",
  "key26": "3DsNTzyXMoZPcpRL3B9jRCrXXu7hHD6AoaJrJB3GAvLj9yscnDowXGa5ndwd75h5KNWC6VFAi7F8f2vLiENSwSiA",
  "key27": "bR6Mg2AqsvUnHmW5yYpxGu1HbjpMzDCDxZMWBiuUJMpjwwHsDo8JHGhzZjQC6GKASuzrnag9ZHjdF78bW6GfK43",
  "key28": "4KXsLFwBao5BUZyMN8iYWTReK1oijAmCV9j6GUcNAjBRKHpK638FkFufULM8JXnZcdKZyVyAPh1fwGJifzdfoAjq",
  "key29": "2DAtejew1nH6QjMkbnWqCsdbhzWV56kQ6ytniqSQe3p95huXScqNy5YJF5oxvxgRGAREPbBoV8Mohgufci8NMunn",
  "key30": "394GjvZHunLVfNUvq6LnnpNjXGrENiQoL6Ks8GbtTsE16yNpqZEGvg3RgGxtZ1VjpqSYQcrNSrRSCtjqgXQ4bTuA",
  "key31": "44qpNs8PFz1vrDYboPpxNmQnBB5H8WCAzQmHCRggkc9xa71bo9xc2xe7Sp579FMRdR3HHcGux86fq8u5S5DeNS24",
  "key32": "61BDivorNtJhUY2hCWJJC1d5jzwNNkWsdYxCw6W7CMpNXcubkotcp5jgj9zFdKxqXdUQTPViA7tcayMmmqvbyQ43",
  "key33": "2wekEYhKz21o7sBA1ycQY67EdhzeHWcGBVfoeEkXu8nmJ7uBeKx5V1h9qHCwMikgxMkVfsHTPhnSoLpKgZ4iLMaE",
  "key34": "3gU6SiBw1BUEtDBFju3Nq6ULu2xYae3Fvz4FP7oyT3Uw5YfTqpWDPTSJLesrJJT5ZUmNWQFLS9vjy8A6wkUzABt2"
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
