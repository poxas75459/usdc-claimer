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
    "5Hq1d4oAF8o2kCW5DMjB9GLirDMxDoEJAVSP4BVhd9SX12FUtqRBXr9Kx9kR7JkLgwFSHJi57VdxnufHG7cP2b4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LdkUYLqg5Bg13m6aFx3gxhBCq6qbTqhkfGhm5n6JKvAnPunRcmPdzq8HkvmtBXeH2xGdmDgCjPT1dFVK5x766Fi",
  "key1": "AxJkvNyEqUXsqksYG6zkUHXwcgJ4M88iCSM9VnsaNpwaLxRyFCUNJTZuD9VWZMxwPo5eLYrpbXr33byq2G7GDd4",
  "key2": "5UpdAnBmA29GfWG5uo2dVkgnTgDtpLVKQLwYfZUzXG7E6mJ9Wbd6vaxCak1Zu3XMT4xpcwbyjHqxxeSW1GVyfGyZ",
  "key3": "25wD9jf45e63t6qs3KSnGhtpGVHYJiv1hnJjewU2T15q7WUQEWrzB6CZBmHc9wD5Yk67KMQ7MfyGmXEugfTcMKiK",
  "key4": "7kEjksqtXbFRqZHzUcUHznBA96Nk6jgNKixSM9QB66VM824rcyi8P1rmmNta1Xqa2vDDV6xWSZj8E7k9GooRh11",
  "key5": "dfrTKDFukREZSntQhewARN276Vnme9kKgDHYhiDNYZsVetLhy9hrGe7BQytPYRRS4pKYtFwFJ4t5prZ8eggZHNy",
  "key6": "4uWiMDq1nZWzvUj2GnVwWaEWYuu9cbwkPnGnUmoucCApnLbf9qvhA13kbRo15E7VGi1xAzLydP4x35LC4sJsJsKg",
  "key7": "5s4WUxHviSBZiMivZV4TxzKU3yTctSAk6acP3Zf2jioymWHF5cMmivAJdERXw8WNUH3JVipVq4vErZPrHCGEi6Uo",
  "key8": "5LAshxS9JuPtduJrKV33wGxVpLo9izkzSLC47NDxh8SrwM59hdNH6E9FzPW4hQr2VXYa2VkXZDtPzN35RpeJa2uZ",
  "key9": "5FAmq4mNfQFcmsirkGacwfPQsEJFjwMbhVTLg8YnvvecdkcdcHwk8zfezhim4pxNjjza6LLXqg2drzy3qEBfGFyG",
  "key10": "3XeYYJV6ZSXJgM4LRjDXv5dCSSQgeDyK5XpT9gZtnNTyXSpyZuHFxxgzqjhttu4VAorszpEVbkDQi4g7UzvYMhuw",
  "key11": "3HRoWcfhGkgpcsXxRSV8HAy4b1DCwDjJxwVq4BCpg5v2ZHB12DSpPHrN7iUCZ52t8T9Rz2UW8JoybMjnnuxuNCFn",
  "key12": "26uadJzjPk4nk7LF6wj6amkrTkeuQ9dPRRgFMQ6YdaZYYAxq2vd8f87p7NcHZz2fyTjzrsPY1oCjDMUJijGqsb9d",
  "key13": "2fq9gGsUEoUHUt1AceyvarHuzTzgeofP9XBBM9s3Wg1a9hzafc1MZQYdRZ8Jq7iFGcRWQsRFnu9usp7T8Er3tzXG",
  "key14": "4DxitgQE1A7Xum6TmGGJAQJzvReVC2WiuWEx17Mw1xsYjQauspYNyUTKr22SVmQCtX3WP4fRSxvesdV9ydvvSXBS",
  "key15": "2G3NdZtR4p4cD34rwxKVEDFDK1VPGiwbnVxqb5cxraJ3v63bZjUzPZb7RP8jjDxUe78fDQKtz47ei8oRNu5Y2qtz",
  "key16": "3oyVykqFrEjqKVnaz3Ky8ckvoqD2AX8zifU77AuVh5n8ALCaBvJnwuHLVevGTTUUU8xz9qWt41ar4jLKRtHPqqFC",
  "key17": "5xqWXVYeHMwkzQWXfBMvkZGsSyBBNWoHBEJ9X9tNEN6rsN6CRCKRZXEhcx97yvmhTzVHhdRX8oRX32ihPR2aC9xC",
  "key18": "2k1fhdhdxPmjLj97q5X7CUNKHCDEYvECK2NaJ2ae4LiY619hc9HCM9fAHdobADAsKr7H14yqp3qSkUG98qqfJxmS",
  "key19": "2Jb4tPHc6zJb7BDzxRjpbgwWe6NxzrtJZqVbcGvVKtc4Zaz3DwzfATtJUcsZS8TrwYvxKxVzMRMf5Yzwo8cjAH1h",
  "key20": "2LKmuteSASFFRMaCMfywRvCj67nyqwFFUndAJFxnMawHQMK8bRtv2T6jFktmbDbTqkZyAtZLzYPeLJtqwphmJ2Hb",
  "key21": "5srQ4YFXLvG1ZDvGGTtT2LBQoaW9NrgCUioWhqzLc579J7rmL2JcJXD6rGS6vs883kojNyGsaSTKasQN3W46eLUF",
  "key22": "4wWTmiXfxsti8z3QS2NUFvrmU4DsJtUBAKthKbnNJzA7beQS4gU8vSpgMAorDqVXnN8i3Q5yice8B57TBUTWj856",
  "key23": "cvp51eLWm56eDisfUfPfYboqpSwk92DH6rWs4J2xCreF1unJcTpv2Z9mNkwjQApHVP84sURoGqCyK5phVJEwP14",
  "key24": "4pYeCBynyxBCyCnqUbvwMpAvD4utJNG9s3hdvySsabdJxmkbjPcKjewU6u8Hb8pwQXo2UZ5wzpUhk3GgXfxbVPES",
  "key25": "3Mr5kacVzm1ZfC8wL24KohzksfQ7zNr2ZEnUZY89xVo3vRXYBDaQ3WFQDFpng1mYqW9HV3APBsYgAWq1woCY43fw",
  "key26": "FWopzDs53avyhB9WfMz2MHR2nzxhhXXMEN2XU65tUnB63Sj21SAnuVUcRJdGxmaDPQKpB8jHieScFRf8i1ZoR7Z",
  "key27": "3KkzGe26gUvEPtKBmhELXAFa7TRHUFC5d6EgsTkC1ciqniLYa6v3JhU25QDRNHQXB2hnbAmQT2BJSRKDsC7MFv4Y",
  "key28": "4DrDMW7ZbFZYj9htXLFJ7hXruCyLkNmxXEzikpfdKTHGsZZ8v3sCzGBFciPsm47yURfZ7wmMksP9pvXSBwKwPXKs",
  "key29": "2yLg4pypUyDucqjceEHNkmE8mC5msNhxWhV91GiLMDRZjzM6DqTxe8xkheyAN7Y7y9XKS6ZSWH99Y791JD94hQ7R",
  "key30": "4m2V4dbvozkSFWwL6UEKJvm3zrBZj5xiH7tSKx2rj4K2Y99M1MuMPmdMhF9axZji8wMQsgzzr8ZgwqSMLny3wdVb",
  "key31": "EYAcS8H1rJNuPUKLShr9FbJ3QNBp4Mvoahu8HYCBEwhqnJtRu3RGNMx46FpZDfUTmLqg8aaUPaQnPLMGDUVda5Z"
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
