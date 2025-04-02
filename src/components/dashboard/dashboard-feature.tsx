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
    "5UXmedyzAjjT6n1dgUQvc1YsEn2iPc38bduhfBA8VSkvzdxZ956yKpkUggnd9qp4FnnT3yxuR5nT5ZEBELdGDDWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ATsW2cv6yc1TmRagnorfjyQgdyN8gq3xHtg3nrgUwxmCzLpgfSfAVRqgh34FVJvSXEQcdgiEWcqvvVSpSeFZjPD",
  "key1": "2PzqLKCwWGuyr1vdkEaGqzbBktC2M6PxwWUuAJkxJf72VUo22oLcUWMMWZC9oVFUJcUsFd1suWErDeztLNy3sXBp",
  "key2": "3qzUibjUG8BmW8Y8L8YgbxU5DUSPyjPDNjZM7tHPsYBhpJ1hA2HZD3rbKSoTzN4jkdYfsXq3UWyKpDY48MM36XkA",
  "key3": "5wFTdo4QdDz4rvkYpmLunZpCSd15dve3JMtUgzsQZ2RYX2955Umj2BKWXwcAa7kB6gjvU63wizFqK1ipsCW8MhCP",
  "key4": "5L8LN5mrkyxMxwQ9SwP7E5XEU64rgpjsrPG6ABi8LGzUNErSaT462HnJTrX1cD17NVhP3NLMJRj7c1HtdDKHEdC2",
  "key5": "663ggR7DQLtyFwHNcqNXeGGeyTGk4wsHrRKqyCpyD7B2iwxaVA5Rp2gs1jncsnEEnqTNSV3y8NikoHTVSRPe7YMQ",
  "key6": "kXHe7KGGMgBH1mTC9NuqsjhZaSaYQaW3rwoD8vLjTJWFZJZfnkmQAudYPQei9NyNqZokp98hqXVoW3bsY1nTUPN",
  "key7": "2TbfdPuuH4VLYXPf68VX8GCogkKeffX3bnWUH5RZjVRqbYybwDkVrHNDwpYWBoU8s4W4Mipi7NQyFqb2PCFcDzxv",
  "key8": "4J3QqxDtn5HEfsXaszmfe6J6bbNM24ZsYuKf598GYzvyddy39xCA18ivE4PY7b3TL4RiG6xKALFmyv9XfoFcWwG2",
  "key9": "5hukMc5UPNPeeT5mpiimG8oAfKNP16qzWVPgGmZpU1ScUjyJQ8DxuKrUvGHRwv1oXP3AmH4ckDw4LcZJbDkSLgef",
  "key10": "3gmFFg1qfpGgkxWk192XZcgUADevtiEH6AEsusDk5wcgGMNQQDg9dbXCAY8p9hb4d1314oE9EddQasCfJUh5retS",
  "key11": "nMPBgEHvqNvduzW78VnuysTmpaEjuY7QH2ggvrvCNjD1SJNgSKQ2B3qNxNq6uBbgR8FnVrLn3gNQgzaMYzZ5dsS",
  "key12": "62aUmTfTBhMpe1X4T8nGJv3uPJY1JnNNDzxUK7jhfDp4s8nJDkDfRq5ZCCgeiqqF23WPtrFs9nsTHsMoeV9rgCuS",
  "key13": "WRRcY3YVaNiLo42h9c3VthgJCU42wYtk7UjCHW1W32VwwF8cBCRw3XJpJ9DrpzsjYX3fiByrgQJunUhELovNpBf",
  "key14": "6eQtmmCxtNCxNm5t6esg9EhAYi4voA9bSXpiQip3CuWvWUWwyYYCqHxvdMcwSkVkagV82pb1KxdNJ4dH6ENGbhm",
  "key15": "yYTDBuAbrVfwX7T44mDLtyJDAcDFL3GiBEcD23YqmZJgihAYxoWmi5pn7y5j2JmahBPnqmF4hkcBekb5TCdxcbC",
  "key16": "23PuKs8okQEmoT6zL2GddcnpTFbD7ZMX2wfz3XuPuhCEPewxBBFSMdYyxfVPssLPPgc2x6u9DkFYX9WBkDdVEH57",
  "key17": "61n77uy9A6NWu3xxCzHyunBC8FbkoB223EebeHhVJZ9kQczKNN5kJbTW6j8Sjvt3TnPoJrLry6sAAedek4kNZxfC",
  "key18": "4SBcemNjVsruGwH9hyFbZuKpKeL5C98TZPU7JBDaVGVchoNnREaqFDw3vcdAa1bfG17qgAeMMpuFL2ksQFKAcuEV",
  "key19": "4QdbdfBkoc8HniTTdYQ87CEpzjxdcQUGerJ2G2cNHMEYJGUx4ntRcSErS5yZCLWwSCeY7vqU42P5cPJCYew5su8X",
  "key20": "5H6ysnTC8uFKijBR9mD7u3E1bzoA4uYqDNBTEBEmNHFWGm7WGmH5kZBEdTJDdTGNMgvo8iQc5KpUGTteAhsRGtmT",
  "key21": "qpRiniGddDTbXNJVE1ALgn2EwTKxtEMgNueGVPcrJ93jFNBixCUN4LUagZrJoiDZZrhtiB5z3mudNgJtjJFvGED",
  "key22": "3vDPHMaUfZWvosQACkXstFVAyKvjxb2n9RQ2vsNxJ1NnFrrWWetBPRY4KWadjXt7Zw4Wb6jpLx9vhV87QmFsWhoL",
  "key23": "4JQx1yA8j6AHmnCB5pS29rQAmvfyAB6Tf1LrA1FGnAeeaKAu4Mx4G2ghDDb59e6Z4wozDmyPhBhDQ8BpJx52a3zH",
  "key24": "o8EumoutLNPyxQanJg9od1tEhzrd43qmA2fieJErQS6YLY9nieTQfZ2KE5JxbKWVHtpKXM3phuaDKv7E3HpG7Hf",
  "key25": "3oaauYSsg35v8QS8dgNdob49RXxTErsfhLi4b6DrWdEwT2A8sz7eLez68qtswwKWNDHGYF4gdFLGpaAsnF4MWzW2",
  "key26": "2Vj9fd5A2ugtyDjfAZ7aS2vvFwpc2LJTbtrw42kHc6HfLAwufEHhPPtvfnpnqnp1rTv7ETQ25vQCf2PDkEu3iVua",
  "key27": "4M4iHV3M7feFjzrha5zVnFhcgQDfdwhU5MH5B2g1RTJsjh2MHAbCm2FcoYsESvFCvFnu58dRKLNB64fMowwSXWfv",
  "key28": "5k8kcKhHs1THg75n1sjWmxziwuUgRf8Ns7fp4e3LyHYYAHU3PqDrtae9gXs3DMxZxNwPtxr76sfSb4ujAoWjfMXp",
  "key29": "5KSAJyAhyqXEry4yt2EfZTeGcDaoBpNKwa6xiHNMp7T1K3ZPeAVMpnxGXiCGuDLhWFyqk8z8ftBGi9FyK5bHYEg3",
  "key30": "U2rVsnx9LcTEiG6GsUKgb9cb3ZYjXTUrHDRycvtSEw9sXGJeXhrScxgwMTr7fNVL2dXYfUTTFihcfRbR6cF9H7S",
  "key31": "3GZW7pE838j2SgAnzockCpFdTACqqUaRXSfYGGkMt5myK4AWvFiwnbqX1BeNKoyKcH3NZ5RacVp8mzUtAcZnNVuA",
  "key32": "2PRFP29BR1DyUmgvJ8gYYEfzbYYXgXPGnvH2KjXcc73YicehDDcScL8Wcyg3DZkFaktM3zLZWLQzmKh1WyemQULe",
  "key33": "3tYXh24YFncKoXqexctMgjPNgJB5h87gQtXJi6tvkswz8xNyDzqb7zS8tXmBRf8uAQTjAT8Ao5tDz8yYDLf33mKW",
  "key34": "4L1LRwqTS5LoJQ5cBAnTx9q2RUfePULBkw6ruzBkCviVpzego93Vb9ohjoDdxt2XG18ummPSheDgFpF1FBhLpCUt",
  "key35": "2ovjBeu6Q2ZKC4ujn9iKe1w6iYzL49b5PEnTnGsu8tw9wHkyuv8FF3r8NHJ1w5CmYzwiLTt4tB2C1VJkJvUxBdXy",
  "key36": "42P195usPAXAZ6qVduVuHAXmDvuxMa2bDpBxXuyMfEoEFfhCw2Xn1gzA1nfVCwFqRwJJMYEpjVntFixAGhJrecoy",
  "key37": "67N2HMo4f71ZG6zFtPj8j5QN9uai7BDx9rtjKjWrKonJTegMkdDp42xLhRxSkKUsVynR543EsApAoGN5YZrPZCYq",
  "key38": "2FhbQDDiC8XZp3YQvpYHkP5Th45q9uhaqsD5FvukXqhaP4tivwJvXyqTE3TgTu4ZdhuLTBFgB68v3STx1j9S6F2R"
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
