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
    "2JN7fSTfBncvhyKjVe5cfAKbxu4s2rLqT7R6EfPNArx3faxnnzX7fdbuRJaQ7e1nTw6ntingrYsD6e8frPSjUzbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u9FFYwRZHsoLxp4gSiMwE9HcpxkgchZKf8SBVyCbKBjzRmLPUaHF5qLQDMcJnvY9LndHNVouNudhmt7ygRr9Wuh",
  "key1": "94Nz6tfR6VK92Ugxr2Wm8SEVAaAELq9gzLy5vkQtvGFwV4s2ym2ZybvHGTQVdeJBPHuVcF4q3Xmqf75ehXRKD38",
  "key2": "63uaPJwSK7Lf85FCWyx2FyYgDhd3mq7Nwm1hRras7ZTDfN567Zzgp7WaPikksmxiw7ZTkyPCQctwY57wjnbc87QW",
  "key3": "2NfkqnkirScVxGuCD18uT3aTrZF8u7fSLAiSKV42PvvzmAjMZVrktJh9pgEi1UwpQUw8x5oMR4Uxh27GKWrjy9xB",
  "key4": "7KTA9uNhtYiE4BSmMooEgzKRxXL4eonK3P7xhQHFTmRkDoGzyEax46zy45mfxvJbckBVQSZSoseVz4hWnMT8MoS",
  "key5": "2GhnCMZbd5yLWPdTTauenUtHFFNe1fyPvXA9UZGt8xkhSfJeQ5gCaZEBcKd1jW1tyx92okVYZbaeeaCMzvSgig96",
  "key6": "pNsfPTwLFmy2F7uf5mLnHTiXJm249NDS53U4rsU5i8qxuyaiQ2TnJ83HPC1EM2tNfAkmn9Aoy5wvoNoEXcT2Tn9",
  "key7": "45uHJ3Ep7FwDQuhxQTXFMEaGKkNmjGt9PsjZkkxbjf9SDzGZ3ppHvPySuvrzQ12JVzvZYGqJhD5riKaa1ubDKVJN",
  "key8": "2o6YnUWzZFGCgG7WSq2DbzCPp9vWcKPgsTif2gFcuyS585exzVBFjFTJNw9sGdt4exfR4bn7S5MdKMi8jvUwomBv",
  "key9": "5zf7nhjAXyfoCVNj3HioFe5yuRqPapFoFJmmwKSYMeYiMymsEUxC6emqzD2Egqnf7kuLSyepUJDVEbDqn4QAdSXf",
  "key10": "4rQAPN1QrRhUhjkFLZ1t4nrs5QAem9JYqyiCF9RjzXrqEhgrWZYrWZ8CCB3aBwoCgQ4jpDyA8VqQYNPeQc3MNDze",
  "key11": "47qPhsauSkWiLpC3akj9YgXjDHAdGxmipwb3zs4vfSc8fMkRWd7mMoD2ivaND6nr5sLiQiQhH8EPcDdvUzv6T2Pj",
  "key12": "3CmZFkQpo3snxhBDSEj465kus9DZ9vkq3xsH54xwoAQiCq17NYmRQeNK59ADRgERmEKpSJxkApEWFa2wK6wc4yLR",
  "key13": "5rxp4pECgHqATkbna9gUGRfQLoMhK1Z2io651p9Myygjy19ip6FH7EXfjt8WPzz8vqGSy2rgCzAAkDUh9AFV2QFv",
  "key14": "A7FjBi8zpgehfijMUgsq4Sgwf13AAMUYK3wKm36ksTUh8MvnWeG7pDrYHVzuxmFdVyrdwjv59rSAvoK3Gqtnf3d",
  "key15": "3dzT89nqjfngyUbJBaUEQi1bRhJx9zwt8f63P6AGu8pQtJxxhSVYahk4JySXJ7mexLV4ZPQKMxgdKKYWP17bje27",
  "key16": "2Q3zkWyBm9DfGVu2wzpWDuXhp9cfHDmT5RjnU1cKg1imFy8oWMKZA9KHbPpDzWxPGXHyKHLDneeRZBh6VHbbCuSs",
  "key17": "5TQKsf4EmNNAaEkJMTV5kHcsTRT7LNcJWV4QwdWfDZhA22qXVq6W8y8wWo4h95EWuCCDPVcGpUnkXmApfTNEFZYA",
  "key18": "3dtQDJfZeZKYcxp3bn1jC1BXwARQq7jLV3s1tAsHiYY2THHSpnLLAuARZfd3WPTV9sWyenA6PW5ogzMyRRkHSdJn",
  "key19": "58VugYdf314Keyd4otGv79jiif4hM3hSKg6UD1Jn4KGgEDWgcZtcc21Y5Cki34PGKDw2yoFA6SfRnt3vTACrLSaD",
  "key20": "4Qy3tERnJz7HsF592xkDDH15fMRJcRwQAxoWJYmTT165pZgt5d2fggesHqRBnNyFayBNpq5ma3FgukhcHr8uDYR6",
  "key21": "Lbcxd8a5BRWXAVLMVksX6po5ZXMgCLtaXmByKYZev8uszYUmQkkRfKm3W1gwGKDhW6uQzbPKHiRgHnkqRaPm6Vp",
  "key22": "gYXZSWc2fAXZJsrPTLd4MjzLBQ6RJ5ev7nr9SNDFmxHtQHUeDvySHvmFN9YBJqaeBZbcXqEPfiKQkyRerFJkFVK",
  "key23": "5uA2JkG4L3WmU4WVa1b1KukA6MvuR9Qvf7jboytsS4WUihmS2UusXeafAgYMYkv11nXHTGcFjfhx25iKEb6Wbefu",
  "key24": "2JXccznKQ5YhAHmAfxfUG6WynGSBFrK17Q5NabUkq2cjVQm1VsLzZqdPzTQPaku7tLuM7CEruBipSi8MB3gNB2ou",
  "key25": "2BdnB5GeS1hZ4YidLXvK7L4B7gPYyKinT94TTcempumuvn5CPYPh7t2TACftjFgd965jsnkhKacn7k7jE88E7eUr",
  "key26": "264YDS58S8oMsemQeZ5MSH6tHzFtPU6pycRJrzPmpzjZt11f7i8afnXZY6pVFKWwNuhGvgyqowomnbC7YSuLoaGQ",
  "key27": "4jnNLYEswN5VJBqBUvNL221uAFTJJrPvebtQ1rbbpq2iufgo8ay7ZKuggokrfyY7yorFEz8rmd6XFKeuwrnv4yXr",
  "key28": "4e6UkwAzpSAUgQJZop1wXXqPq6aUDcJ7SiE8bhdNrnePxg3sSTsFbCPy3WV1jthPm25mMM1W3fmmg5wEFKYhZDs1",
  "key29": "3ExWrhoCq7Tba2uquxMYqT7zPWEG2AXLVf6hL6raRrtTTKXxUpjNpkVESk1H1bp2UoVWvjgPEFiUEgvmFExJLnYn",
  "key30": "GHHGDDHjyfQXjwWnaEi5J6h1NzFQt3pFFhY6amAAyzXE3U7mWWFPzdVxu7fumHFuYJm52nwjqzJmL5Kqm3myvdx",
  "key31": "3qu6Rou2epaBQwBPwFaKhKrVRrLDcGTcLr49EAkN44ecb25oHbvyuVXgwFphEDUtY493VTiKtkCdxnNtyPXd1RfZ",
  "key32": "2gZC1u1THXVVmxCRDjnqcG4myr5FiwF8jMcmykzFcoBwtrjCauqZdsqn4ASYd82kms3cLPhoUqnxUJMg2Fgahifj",
  "key33": "4NPLJ1uNC3Y6zQvzcTJvJ2e1CVSymgcBK8Csocenvs3QM9mvBoGz2G8z7q3NvkqVP3X8jgYN5VbzssWGcczmp8AE",
  "key34": "zjN6kCCcWwGUrWcKNsRBjxB1cwJQLYJntRPejT9hpqp6HHWQkvyLpWZtMNcTXwMjTtgHLJLqvDitv3MMRkpVHiP",
  "key35": "5k3ZZv2shrDNfP8V3NLJNk81rnjLeEYzZpQF7HTAtSgTyKGYLik7yN5RRyMKu9CuvFGpNk2MCPXqQU7upLfVxksv",
  "key36": "3rNmwttwSEymv2Cy9vPWceE69581aPU9M51s9qsonnmsvhacUk1CmQtHSrBYHvGoz7UZ4cKoyPL2ykMXrupHprSf",
  "key37": "nCJYns2AuzxdpU1FytHownj6iTNehGLTVBR8AP12e3ZTvFFqneSixdkPrAf5XXtbR52FcUjrBfA67KqNagDLrdK",
  "key38": "VssZ7CpJoU4K6YK2PREfXQg3pSVctPVKPPx5i1ENtcznzwCqFhKMJBFjwtDAdEkJcFChs7WYn9wzshvqo4uboQX",
  "key39": "63r9sCMyq2moMu5h7V5WtYCedSoWmHcScj25a5pZC4D4qpZ8ZfTKpMUrFPU8KPKXV7GruVVpEakXMjLKPboSdDUf",
  "key40": "3mwDBps9SHxMexpRrczCJaaFHBLtGvaVdJUMJosbCRk4xyqsxZGF7hS16y9dG3UEfD7FfnFSdDKjVq1KpHTkTg21",
  "key41": "2b8JNZt5Cw3TQnPQeKWctPJjxBEaqipMFEMeN1g2qHP6JLUnjakpsCvriRa6E7ceses5UxpwgAhh718sGiG9vWH2"
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
