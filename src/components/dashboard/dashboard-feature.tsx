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
    "4AHHeNqbVpaBexoN6ge44TgcNsnw5RHyMNDXpbxmeqqMv18YSxkmvUv5Gfqe96AcSPSUibTWgnUEsh7iUWQWk9E3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jXSeztpjZ2fqCaz7pfusVNM4yDUy9DbF4jALh6Fhb6tzzP613kFPnsXG4eG8nGVEUasQQw3a2FE4gcPBCoU7ESi",
  "key1": "5yqrHHoFZqo7qPDxku11qKLv8we4JwqWNQAYzahszMu7Ku2JSjCBZsJs27teByiGpFphhwYzpa34t63BMT6bgfKg",
  "key2": "4ED7BHznmY6orEzHotP9csMQ74uXKjYRR5B1pNTuGPtiHwqtohMUGGRPPVWRpA8rNYNtMqHeKhi5aWDiQR5hmEhx",
  "key3": "34FEBpVJDHFct1kp9cj7H3N11YE8isx16WKTxmSEk1exvHvnG5BfYrYhn4wGEjXnrGE9EMKPmsREVJfmR6ukofog",
  "key4": "Uc98YC6krBU2mgacxcygC7bReSheETE5EPbVQP579u4bmwSh6y12BnVeWXHd2u5Pqw3N3AsuiYNhi9cbwzH1BBR",
  "key5": "5inkADB7SY8uaQGu6GkTWJ7oMXpo1BBtKDujfsj6QiGrHoDQM63NDCqxBQnX2nmC9M2eof7EKawGBFcxaTpVFgnk",
  "key6": "52Zh7YQJW4eLLb6yd8qRbxmVeT86nhMRPpznfAPfkHF4iezh1WTXKkjPKphYT7A8bxm9nGZpVdDvufpCSKVq34Zm",
  "key7": "4fcq9KTQ9JaU3BvFX6nJLMc73muJsEPKFWM4VjvaVQLb1CWVbrycMVWcHRfkcyL6QRYYAvfqdR5vj1xU22z6WMNX",
  "key8": "5ivUq86pSpKPyxoNWMUZXxQsGVmPJT8PFuhp14E7XZnRdYmMxxaBy7i35dAp96wm5uaW9Fr5x6usMyWS7SGCLRMR",
  "key9": "5sMVf99LwXkmVRJ3CvC3SHeXBhe9c89pBJstAv5yUVmwmWGZLRTYRVF1wm6A4PkdSLQZNAcpVQyyPZaw4UwxwMZy",
  "key10": "2k6wkLxfxMwBCDwmgYTWfPWRJ5cQ4AGcARPXczTTB7aSTtQobArxkM6mjjYEvHLrMGtJ5M6vF8VDgz1WiKTmZPsm",
  "key11": "3D7JM8fvxojqjRgQBFNFydYNJN9yE6H87YfFYvq2eqfEZ1hTcufVfe4cDbjUePVwUwfvTFgYE6DYyDRaPHLjvZYr",
  "key12": "5REXYsGKSZPGHxQbBcFGgC86KokkK3bvuzMBSWJ5tifMXD6AEQiDqbouxwpaVuDNYRqGicfeQeRvZbK26DeBWEJo",
  "key13": "2grdagzi1yPzB8VSzQq3GpqamYC9DkRt2A9vg6oYCg4GgujnB7ZgZrrX58kNyNFvntxmzXhtX34vKKovFY4gpv7q",
  "key14": "swv344miUQWLQsUj3zQE95mTEcFoHjnPsUSiMfKeu3JuQUW89k3LCQB5uaUMq1QTaupKm1iKy6uyuEbPKF7ecJk",
  "key15": "3axzkbpqk8pguv2xss1d6asw3kpyMkZ3QLvE8KWqnYCQA3MGdY1AJWSn2oj8DBopcRz8jcockGpszidtwrYaRxrJ",
  "key16": "5FqFFhNtMGF5UqiuvYa2wXNTknesJRz6fj6wjqLLwJZWKzhsHy3MivRaPti24HiwrWSwfzdnVQawoPrVLaw75ENf",
  "key17": "4kaVHQRm7cQ2iUV5EPsrzPd3E5csGNZCFH9mWKTEo3vvnsGijksemdXRQiJkM1RPKUbMLtYqYZCE5CqPbhFEfKZ7",
  "key18": "3FXGB6o7cZeMWDQ3APCckU3AJCyULHzXUqRoqcBxXHQKihghcRZheThYDhpu4ZGk6Dmn9ubX4vHcEhET541qd6QH",
  "key19": "55TkLmsaEqAFUxwprSz5uUwbBMHcmhMTqCbuLCnGggef9RNHgedEaBc7ahpuDgcNpXUPkCqGkAoBeGXBz1dJH9QU",
  "key20": "2Tifqkkww4guXjx8dCqD52DQwiSFthB9mnVSMjr8nNXpPm7Xs5k44NmEJKUTsLrWrHSmwaNsypS2uxvfKftFgoC7",
  "key21": "brnDyvHQEX5svimE1Pr5iaS6MEBPhgQLkWFfoht1P5xyUZtAsUfoudqZoxj4u4Gw1HTQCNW7CqJUuwcgv2WiEFi",
  "key22": "25hY8c4u9AvH2taLU4P2qAANgdriV5RW3MMMZv16dEhZdjzELwVEPEYd3YHkUCwypwre2t6HuNkWvqmqLPYqxgAd",
  "key23": "S3iGT5xCJCjYAcGmrkRon47Uv3ycRCbS1tskh93Jpgz43VJzs6DvvhrEEmCvHYmRuYi8nTqARCxiQBiU7axzsqy",
  "key24": "2YTYxzhBVSJpwffiZGhkA1mhLAn2MZvYf3mwsRypKd3xFHSYhr5GLvv4VJ2s9A6vc5xhPpESdj1qdp937ydCgVw6",
  "key25": "s5RsxmZr1ovbLb4ptNWBmJqGX2DRoqjzGNakxZdeCjXGaLatAFFZHveQR1h9VNpkhE9A7vkrr4gS8RMdQnahUYf",
  "key26": "3ZGsASGBoRTFVYhi6nGHb9jP5UG1hCdfukDCy73Qsy45ATxLtyd6r5gxUEfFZ6QhXUFNUutVLy9kCPYSFj5YcwMt",
  "key27": "4Wpbo4AuX7eGkVaKYwX744fy3BuKtPcaGW2F64kgh8KYJaXxbZPt5ny6pTYUnHxbUGm4eGDPgUGirPUbVSLUyELK",
  "key28": "33n6wJdUhGSHYxwxQFw1aRbgKZAbJ4rZYkfHLqWYMvKL4aJsg9fQjhzQuMsMaDjVRXyMBQ2S4XmkCmXrRYyi1Tas",
  "key29": "2c7BfWuaLPHnXAPf8jobHBZNbkG8CYdodLdyKzwf7k7jeq6NpcrKWkkMGiLCycSurmYC4bpNNfutoR6psWD4qx5t",
  "key30": "4HWGvRZcWgj4djRNKBkk4JkcgARM32Hg6MSsLvhtSN1DVrWsifuj8SciqU7qJ4fmjhqnctEkk4eoKvnJNXtUxyqQ",
  "key31": "2qc1Z33zMaA7a1wUBeZ69j6DZdL8UgmU9ErrVBQZo2RLCQ3DxvKFKYnH5exmP69mfrp6HuHGpb9opVPKU1XsPB8D",
  "key32": "3JHrDdwN6SwRpKCpkLAirZTFG8QU5zLyyY2EdU4i6CGxTMFAfzTfW77adMCL5eHVk1QjcTwXsAtgMnyycmJGJJci",
  "key33": "5C4KMHxQxtuWRP5dZ48mt3nthnxZrgWATjLoSWnE4enxSxSuadHYqosV1ncd3HS1y5XaLNo2kvK3S5DTqeJrRTp9",
  "key34": "3zKguDGaWniXeKGaeqe5XtFh31idkYzu7rEcnJBJ5CRoDJ7AuCqjUniVpjmspuBrwmjG8Fz2G43zEmWseY54rtuF"
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
