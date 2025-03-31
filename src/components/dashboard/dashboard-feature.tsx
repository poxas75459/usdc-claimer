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
    "25Va8bdSaBrN1SyGPzZKPstXKGSkHgP1Ecd2SSFN9FEm6V8d4T52UXUzEADb3RepRazi8XxFRAXPE7UDdJLZirqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3atTXLLHmJH5Q6dTdpNaWMkFTKBUzaZDPjCM9PrrK3m3VtggfxFF7N4Ad7fpjcQYt5B6iGGQwbMjpSb6677YYsHR",
  "key1": "4QyYZeb9tQUaRUCdMisEaxWS21ww3hhWJnvCbaCNBbdHfd3CnET3eQepV2tRrfG9d5yEi37js2LmitNusLZdRf86",
  "key2": "2FgQgtVysNfCABo3iKiSw9pA6ZwyTCXDHehv3quJhidyPYLdsYrGzn17Jd2eenRsWPxH8ZDthzewoR4TRwDcDi16",
  "key3": "4w5UytZjD4SqzshveBULpkarPmPFaEwFpioGVTwfZnmHsjpmDTcAuZdiUFXzrAdgwRjYSpqe8mt9LQa7DHHfNia6",
  "key4": "4UGvz15kAkhyxXp8313eGyf3k2GyrdBF3pMPtvj5womJF3HDMzQ4CmKCtJhN3pFB2zeEgGHMCphHk6Xzikbe6mAD",
  "key5": "5ETiqKj3WqBXc1bMoro2pU5C6N9iVNueFqEaTuVkmFSeSHi9V5aiSQANYBcujWXG9yv4xXkfCvqK6Lbcm2BDfjKY",
  "key6": "2bJeB8rkgGjF9zeP1XbYVP55yeyhtkmq3BgDux8mV28goH7V3wPcwyX9qZHNe4KgekXX7HDNPpuY35G2yhpyBqHC",
  "key7": "3nZGwVWfuMcxq1zdSwteJcxLj18kaPvqbyEcbpNMtLFGb8DrUGxzKrBJhWYnX9Sns1Jyz1fdt2gbPpofpu3XU4mR",
  "key8": "Zaj3dSLekdgV1EbVopYrDRSirgT9DK3xXTwguy3PamftbNGZKG6Axd2Bct4yTjrRUUZobt5ZYfF8s4K4Tryr6vK",
  "key9": "4v7z2xbCKknPP6UBdRWiGzHadqUz7s6q4qwt1cB6hv6fjMLexU6XFVBepppz3gJWx3uFrD99L2hUwnk4k7Xeo2LT",
  "key10": "62U2Sgeb8gVgfT3FWDpb3myqzSJ5eqbnuDVpUFNyF5DWGsCh8FriH5n9QmgVi4SwnYXXo5mTi3K3Ag9vRsrDuFHv",
  "key11": "4e9wJQaRYuT1ceAEsHN6QxtrL9r8zC7LavUycWydpFEo7QEiHaC8Ruava7enTy4tezTAtNu8FPPhfBAYXoF6Eagv",
  "key12": "3pzYUucpTkTNphsBuL1Rd8FeTThv8Qgwfc5d9wWyfsrg1tfMCECRFnxQqn3eGuFgp8DB1PCrDqVNHL7fw1EKx9oh",
  "key13": "W4zWPz4G4VoWb7Dwbyo22dGwKT9h9EtxsDnEcj8XcjhdxCVjPn4GkmFEWsGmhgsnCzgRpDqGSNkdQh5pLiNndz9",
  "key14": "nPBGuRcvSpgn21frheyp3gmhbdVHbvJMz5pbwTVwv1xphzwyxfHgwkgxnxheZCNaYU31VReidJURGxSYbe87TxE",
  "key15": "55J3VcGMYfM84Mxo5g4jUrF9b7J25veBBo7wuw4f1BYX1P93AJFCPHeqGFh5quE8NJjMfYAoYuKFqkra1kRaPkCX",
  "key16": "4P9csb9oboJRdikVKPcQ7J6hX4Puo51cRX9sC9w8pugFVKPo7P9rTo4p7pS6iaX5VZQTzEapDkeyTaci3RQCcRqP",
  "key17": "2MSbP9E3NmE2HvMZ5DgaRpwYpcPKZBfZKDinAsJEBJF8BMNCh7cGfTSQgGAd4xSpEBq4Z7muPaHxVdeAVj8nWJUA",
  "key18": "3kwcaSEjaACa3gRc9uZu4cLz6fbYTWwiQhkpx4fSmNHxr4ra8Qie9gP6yvFkqcwbF4h4K7nGbZVvETfuxcSGA2uR",
  "key19": "2gH9aFVwECjuBvCvcGdTyHYZm2c9utF7dpku9qe3vJHGc4kjB36gL8ERLSgz1Ee6UMwDiZjHXeeNpqwg34rU3HXf",
  "key20": "5saYD5a2uQnft7Qa5AunArvDnjyda4jQ8tHHfsg3q2RABYtbEP43h6KVaDQma7ZU4L3BkQ5fX7mszQU9iH8zTeWk",
  "key21": "3VCGq1NLoQwe37HYEtPKamGakcW4pT9q3dgLod7Gb6JWJfeMmJZ5TGrYKyLGSygFodL53q8vkJY23PQ5DQ1VoCpG",
  "key22": "4mikwbuEJi1sNnQoNTT3XgdKFZrsPdPJ74oTfZpQhyN531dvpho5KZYqLvdhkRLYJ9hkg6Zs3dVGZLPCEd2rTXAd",
  "key23": "5qFQeG6zn2gY5Zfz2GzawVP4LyNxWudSGiwtT2Hxx4LBkxAULYBdWckeict6PTArBjAWMvJpsxzmKM2advHkGoR9",
  "key24": "2UMLrhVnML7NnkeKLyoZmMMFXX3uLui2PiFEi3T1aqC7bPGLir5DgHpH8imbvbupZFyx7o4BCQPARZPoM4VYNe8T",
  "key25": "3CtxPDr81gsMjVKeQUDnDdJ4WxHqZNEkcwNs14WfRwrrSVBiY8ZkesT3gDVpQjgicKkZhcoTivtdYDJ1kKTgdEDT",
  "key26": "2TSopDViSWLsy1RFxb7bHedVpocN6JtXEgChzACs7PchPUJVEjbkW7Usqt9ob5Mvm5W3uy14juh2r7cHNme4A7Ui",
  "key27": "4LGVwmnynd7DNnyyaMaSk1rB6uzmXqt528uP4M4zZo1NhoaEBQisGn1eibGGFPvppG5tABK1mtWvXbasU3Uif9g",
  "key28": "4TUrULYVBmDpmadFDpn7sS6zeqCvS2bJvn91nYnUcJ6669mZ1KGEwgr7tqtDTQ4qhK96uTn7dQS6NTrHyqCAEY8A",
  "key29": "3CAfMj7MWuP3QLVJE6hk6Q139YrcqPXPdqvfxg9ppb275dVh9JeYDaZaXmAaB6WEx7r8hySGL5nYkWE3f1R7mkQo",
  "key30": "5xP6GuAF1yixcXpbdBBkXYEPY3YaCHyvYVqdzQhYYNhDQfBkHjUCU1kphB8NERMZPAXKLe8gYzbTF8js7GjtxM3L",
  "key31": "4BjGtTKMPDVXbhv4zuEB1KTELh1n8tT4zDuSG5UJnggokaDsriq66MkHZzcaENnkYNxWaa8CHijCLQeUfkFCyoYn",
  "key32": "9cC5U3HnXMBS42Ej2tL22FY1G5r3GnywCTud8kmbCsFXw9qiM4rkJipigiqLu2AEKNBmFCxaDQkv1TsHZ2targc",
  "key33": "5cLbcES481CD83dzeNg67Gkv6JgFbxpeofDzq5HaCbUedw5UqWKyTEWhF33eucFXkDRtPX4zdquQu8MM9ao2aDev",
  "key34": "vJ4CfiBmF65JkiViFTUksw4JCjmWcGRRrfB77jze6B9CB4sdaUGNzbFp2NeHmeVHNr926cuGEZzADS4Rvyx8TUi",
  "key35": "3Djc7KoX21ng5vCjRjJwDc8xsEJDKQfPW8aqeijEtLCfEBLFbvA19g47EfyVTfR8eLzKnu8S9PPrpdXvJtkj1Bhu",
  "key36": "2sUxBn1mjhFfQSktxQiV2AkXKxneRFggjEktaEZiRraxuAGrSFrXe5wTQ1SJydyEdmqKFNk2pqRuKk58B3JH6fk2",
  "key37": "pmCYSUzyELRe2euAxBC44KVnUmXodbV97eq8MBqyE7gnJYv5qDWdG6uJP5hou6zqNiRgEJRhqRimxE1K7X8TTnn",
  "key38": "nw4iF4Pa9xtismz6QPd1VLF4BYtaHn24maAZQRqzUgccgnTJ9m5xbPJwnzEh24ktj7E6hShdSWYPW9GCaNaBfBv",
  "key39": "2UukXrySfNL37vRveU5VXGMZH1gJV457ZUupCodrXhgFq4CWApkjK5ueSpB3KegVYWWeAtMqpqDdAWZXqu9AstUN",
  "key40": "26uPGkQVsSJUycdSXckGYhdb3eZ4p2BCLjn6JL9To5rPZhPktY5u9L3TnY3UVVHtUjiqNfZeEQiKBuUxpiGpZRyj",
  "key41": "57uvPc1ikgDTb21KiEo9krZWpJHz8UhxYkqk5BtgnBqwg7gs6pmEufeFXtErHNTEumXBxtx3RTM7nfUY8h8x6btB",
  "key42": "3py5cnKvn6hf8pdkBRj7paCTRqLDkYKGGPhz6b8SgZJtPUjanT8sfrQSDmgVZE2aJL84sN6qEoXtcowe6dcGTt8J",
  "key43": "4WoXmoZHy97C3mzQxEmo2FhiibxKcpDFvrKfY2kGth47vzpJw4VZyJEpNRM2XrFGDvV5xk6YSERuMeAr5887Pks5",
  "key44": "1dmNG6CqHARfGxj99TUTHvvGU98wpHnhwsN67YQRgMSnRa4JJvjpwGdNAXjt4nUnhCG7EMQEGej7aQHSXY8PtXH",
  "key45": "2U8kpBVULYgaMyKGruUXHCQ9o3iv9ZCbKQE26f9atu6KmgzqGMyadBek4Wbkz3SetykzSX4sHfSn4Zk1XyoybzCA",
  "key46": "56ELg1FiwdtNdkGNWjVTyP8c54TnQYmegZpSEfdFZAZwVV5D7P8gcDxsoGhFPX1G8erWyW6wMtEZRFpVhLRzuLDi"
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
