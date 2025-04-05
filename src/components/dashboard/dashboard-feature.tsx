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
    "61TLzxuDACyvRr4aj6DSdCmMn35FtkQ8jP12WXJjkdmLGgd9wNxKREfonNwnGNnT8iqBt62FDXdvc4qKp5YmBX95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EP8ijZPCDc9Y2UG4yKhrTnyjN2cxCsY5KPLV2kLdK95srTrjtXfQf4Zj9EPbAt66e5uvTHkfuvkwNQXZyDz63y6",
  "key1": "3T3YuUhagGb8HpwgzTSj95XWqGLYCjEd6fkhWfeKP3wv7q8ucKtwKDpRzT58SXKsVYycdH68qATYBKDweU5JduoG",
  "key2": "4YyZSFVgeRoY4RyfipTjD5F8YTbnp4MwJAvQp8Yj3bWnhK733xTenZd7rn5JiGEnSkGEW7FWaWJpanD4ZpPZabGs",
  "key3": "X9DjWzJDaL9CwmY1aRmwq6eKzuvTM7RLeJ74MoTjw6Bqsy1XLMZ7XMYQouwj3Kv4cAPyP3F4LosQEWGmEMP96kM",
  "key4": "4SrKAuspDbc3DGqyXAjKdG7fjkwMmpo4KjDZQ9uqe2ddfdN6hGXCZ4FJsqduzEdcLKeQNaFSk4eX8P5roWsB9XXr",
  "key5": "5ig8TvSRFXfiKT3ABaA6F6qvjrzxAfBDNfHVb7muukaYKTWsPAnJm2c1cmnkK1W6YMCjoCMHvqfaPNAK8uTQKuFQ",
  "key6": "3VgJ4YR2Y8qnfLFieUbFVZSmW7zZWkewzaxgYxEA9UXSxgukvHjbY2j5qXnKX8C13V9JR3w9bYimtftNnX4U2fsc",
  "key7": "WrgBQUrzrhdKN8aTsKfomZ4XT1W1QjneV2bTVVcNUkZD4J7q8fyFqFkjeeFKRJVs77U4nj7wJAdXBXFqodPRALK",
  "key8": "2uxkQC9e9S1Enrn3FHiN6gYYDJEC1D6VRizbcWikaUnjRkzRiSXRup4Xkuvh6vTyusEtGSJApdnXLGiXGVFZSrVv",
  "key9": "5Zn5G8qz6CPgnRioSveXmGU9jkPBbJBBx6P9F3Xacy9mZ7foaEhy5n8HMHpmMy484BrSNYb4xfHP2Xdoq72iMaoh",
  "key10": "2dgNfaoRGuQH19wQZJdLRT5Wz4HmCLLprZY9UsJo2nQd255o4X3fNwCgDRt2yuTTNNbJBGWY97S3uxnuSUdTRr55",
  "key11": "K2qE5zLTkvph2THQjuzGSBaVe45PMGEZvjdyCUUNAcFJRb3ssRPXiEA1NXJBhzoKR3PR2Ymt2qR7iUrEFqFNNGm",
  "key12": "3AZo7HqsNuLtDaGtmKTAWZWnNQPmA68npCM1tNqxyUEtpZXaZPVyq2uLqoNHuFWfRzF5uAfPUFKxYK2HPETq4637",
  "key13": "2Pc9fcN9HKLrxUD1mLrj76trsK4zGyuFfW5fE61yxrLfNQzMUTUhMQUZSUKLT6bH5a4GRj1QJphTNrHiB5Sih8ra",
  "key14": "2Ef5yTafjhykeeZt38hmuR4sARoM1E7bZxEPCcpbD5ttdujVs2Wjj3r4t7bYUdxUT24EoqSFqaatGjsL3oqpRvf3",
  "key15": "3VJsTzYjQLNvrGh17H3DdSaGpkLd9U7dH4aQj9QAZJDoNHfVWiKGY4DBd2GN5c532tH6rrNgPjPmwhYGw2CVPF7H",
  "key16": "219BJnpGPVvandEmr3kZ5VLxhnHCJMuiRMpk8tQwT6mb9e3sVjPu1kkNxfzjpwojk5n2EbK6yPj5ZXzqCUBUDAXU",
  "key17": "47TQiU9fTXb28WnXWhuQdz5mTNpHo2h5t5PdVoNdorrXzPHRTYgj8qA3Vg6zqvbtzGtYoAvQJwCoftvBnM4Zf58S",
  "key18": "2vfesyLvgVWW5kjwe6gd1VBAKMJS1PJVAqyW7sMrF4NCz1Mi7uiS1bU129nnnDcLcP4uRt8UkrXd2spVCSJUhoLw",
  "key19": "52VFKGwtTet1FTr5VEryjNTGYrsNzWGtaCasvZ6dnFYi6VcZT4V6KpSJMH4Bi6nQaHK7bodeguiBxpJufRaqEVBx",
  "key20": "JSpkQkoDshzD8RLTpAVU3bRaD8sQeawoQFdbVqxL8FLf6M6XUoyReM1AuMXorTuvLm5pCwFz13PaWfJWPzapgYi",
  "key21": "5dk2UNapeFKCp1y7QF1m63nHKTLLJChiB51LoDvpj999xen86g7qvjg7Gm7AB8coD46BXV6AZd6RQXVoyzFgowtf",
  "key22": "fXd4RHyA81CcZV6GYKJFD3sNJ29tTBLCxGeuPYpXNwxv2RJnFTUosSAxZEA5V16fJER4MgzB8VNQLrqaWGkW52q",
  "key23": "eDV1KVXnRATDiBjrEXg5YfbuascswADUJFcL2ASSAyceSXkPRGuAxeNcLvVXpjSuqCV7KAY526bNY2DPDNeuhS9",
  "key24": "3K3HygbniTAchg1AEmYZTrDZo81QpvrzoTj89C5K4TPKnNGQ6VNH3iAWDztYhq5N2jHcD22bxzV3FLRypQsobXsd",
  "key25": "61SBwppzAeSodhHwp9p7ZX4Sxeo5i8Xwjf6JbkW553Ao55Q4RcxCo6kujF3fYFBCgChfMzC2fXULumSHXEUTWVq2",
  "key26": "5YHEe1r6aCnePZUhkwpvfvujn472PoUJxx4EcsFaQZyNDrrm6VUvpcZk7gpdjd6RRcWRDrYxQyMDVChrcAqjcmCb",
  "key27": "4RFho1VxHFMFqa2J9PdVrZjkAuhuJXyFjQSJ1SsyJeok6Cyv2CehE9DSZsTVvDvwRqzcm4NNgk4pMfEbjd2D5qs6",
  "key28": "317c3gSMYqTGXRmGx1NXcegVF6AcpnicWaNRcwWJXVAMBhNdAxcbfYtJPW6mRQiWPLHXgGPVhEwEYAjLpzFXUr9n",
  "key29": "457iv7c3SVu1SSrQuBUGYL4CfZ6Dpi7wKE8jLH1cXyY1de3TQKpGG5vKX7tipUtFr81LzM7YggyM8NCYaTnPp7FX",
  "key30": "5FY8RhsEsAMsqySh1bzntnPFrnTUbLpxBs1mhdEHWSCdznR7VVrHbeVvpXKd4HrA7MbQNDANG2JK3NS2cZNJAG6x",
  "key31": "4Y2ghWCuah7m6nkLebHQtbN4NG4LLkEpNzDWSHYJkhF6Ra9uP8tzuon4CS4n51pLDbHHmrgPv4TR5Cw6BkaFhBEd",
  "key32": "3FQkExWR2dmeui1rYyNG4t9bH5nczxcJr6dobB4vu7exe2ge4jiLDneC19pXrTewrhpV5RyKfqSvE5EwyGTAZrVX",
  "key33": "YPyZnRCwKd4VYwauWvi7Ayr9BS1b9z6Xd4kNdQj9raJ3TK27iwJnn8vUkhg5qjV4uJqtKHJ3TkHKtw5UBcrcjji",
  "key34": "3c4ZFGThhA2SQisV9nH2XkpYWhcuGj7U6ytP9AXtqy1Xa3TVQFXFZKk7Sq9AWM7QuCZaM4vjAEXf8AHTx3xLSMsK",
  "key35": "66PActYVjRB68Q4BunRVxoVufK6U8Sa6z2dA4LAgWfibYfybRmzR8Gc68xmp8Lrfe32ZaYUj2eZvejUMShXuvXQL",
  "key36": "2NyUF5KkTjjyaxmfNH3n4nGs6knuZcA7Tdfpge1ftDPecBgactpCpEJGmXzqe5Tj2v4TtrUYVxhYDnyMQJJuvJXy",
  "key37": "4DUdAv8Rk2NxcGiK88yNHXJKtcPmhqgiWejVTetFwsiwVkLtGtUJqf6qysCV1zAPx2wY67ZWzEWz5U2JvcakXJfW",
  "key38": "5b4dkLWaCP1THEsMLCHzJpjoH2qXFyn1Ziy6TvabisLH4z3TCjY9bF6eHmtn46F6VbW75q6Xtcr23mtxR1HABsoF"
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
