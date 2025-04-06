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
    "56jvbJxr4fi7EcuWBgMrNcbPEpCdQDWpFdoGKxeFH3Ha8reNNV56v8MLmTWxbKrZnfHkckiM3uXp3MwpcisxoUhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDLAguBFpJiwev6devntuyyuSQDa2mtg6B8U7fxFq7kxNW73Bnw4v5UzFZ9dBeGZf4BAhvPfYLE5LghQF2Lg53F",
  "key1": "3SHXxKdeGUU9BbP1mBCyHaNkpcWVSCusW2ZjTyNqSf14A7UNqLSUCSCiMn1gkcZyhULTxXQ6XuPLJB4Jb2T8fQzc",
  "key2": "4oNdZf9HJxKuyw7Xv7zVKSxCoGNcjVYdtZHDQ5YB5FatxVK2kbKroob1b6qz7rznQ4zEuq15f5Xbt1UwV5vg4xbG",
  "key3": "5EMTpmWycwze7NekrKnZAgQ8tA4uEvgbAG5RnpFRSvAyNkdPEDJxZANJvXXUt43VZKyGEguhXSRATT9F5kPAwCF1",
  "key4": "2cYNYMrtL1PbfTtEmY8nLs4a2bUAFombGGry3FXKvBFwvmDDPg28zgnyUxzU6cTpc15eAXbgGNTHj6T3mt9T5k9g",
  "key5": "3D892QR6FVGbiHDUSWEa33ywn9MryMdcVUzcbU4sJ7DZaF4X6yMZdxD7NgviMA9Je8oxf5wBaScJAYRdKY89Wpy4",
  "key6": "2LMJn5tD8DiRc2bnfSVS3F4Sh8Uqryem3D1nTrfiRKD8g5c2NKQknH1p2H5nwY8nrVr7Y47v16sRfniXxXc4ttU1",
  "key7": "kFGKxLhW2DqDUyBVb7r6SQdb5mCprmDCAzhpWVyqYepHm3fpYKPRLFjcyKB75gAFfm5JYVpsLtXNrZ5SLnS2zU8",
  "key8": "9sEUBZehtFqrkjKfx7azkisTYjYT7MTdR1ALAYwHjy5WjCKc38UNhn54Du6fbE3Ctjz2ntvCouiSc1Uknck7jGe",
  "key9": "4k3FkvSk2uUSTbBE1eS5j72FkXf1MDdwKFYA11H62gY9QXDqMhDpYoJKRikJzTc63NATHmSLhMoQzp7R8fWJuWMM",
  "key10": "3FXpsUiCem5EpLoyNcVzSjcpHmvdJPA8Dqsa4VZ3Ui1DV7zHAJmRd8cPxJX1BX7VAHsSmZjF98hbYKgRpbRrdr9X",
  "key11": "5CvT8cGgJVxdWPjP65313SQfbzpZubXXFKH6ZeMLvoenRbLZcQcQTgCScznMmP1GHHNQzYDA4wocCtK9kNs2kUQp",
  "key12": "4Fp5SThPB2tyxXdcaiLKJkbKpEtQuvseEm5QSYSZSwxdzA5W8ox4Jep5tPYgYi4yVk2uRkvyyW2fn2seeUJponqD",
  "key13": "3M7VFi7D8emTiJE8WbU6UfBj9NtR4DeAHSavfJrcoUw71tCZipo2dKR8VhtTfnTwT1BZV4MrnDWXKFQLnToVzcVp",
  "key14": "4iDVDVhbJGytCEjfjVmZNk6P1Sdwdceaxp2yhLSEoLC3XWsrHNedShaPZLb1315iWB6qhmqwgMAvFJtM1jJkonMH",
  "key15": "3avdxxnStGynLoqKrJ7k5o8FpDFnGFFcKLUEEhi3L2c8tUTbUGXW8KNMTzdYjdJe1qRjd4VZQkNWKi6HH251U2HD",
  "key16": "2gYtNpHxfybjbauxeLjVQzEMV1bG1E9ikrFUcCDCF7R1fbLG8Cm3didd3uWAwZrcmcz8ratdKuWMaUqBPb9JztGC",
  "key17": "3suFe6RKvtn7cdRwz6Vas1Twq69huhs8SHuCAUX4xj29zWxKKyAWdzpdCGx3pkPc5MXAUYG4urXeRLYzS8YqHDBP",
  "key18": "BSMhphWz4kEUFkm2gGtst1P4tMNeyAr18CwiH6yTvL27DLJzSuGMjTc7MmzXvX6jmh42KPciGiff4HZgyk2XA1Y",
  "key19": "3RL4ken42sz3Jbp971ushFoXJwh2oRs3mmK77bGBi4kp9jbbM6E6jsgaALKCGBkYjU2C6FsgsU35vyDVtgzNPHq8",
  "key20": "65YFvYi2snFg6kXrQqiCKZoJVHmE4kk8dzUQhvNW9t6bGjkYCQm7tMi13a5jPNetXvnuxJcuUTdDK1eJa8KhSUhQ",
  "key21": "5bVbeDDJVtxK752SywJseJTZHnVQQFe2ddvPMVmSt12Zy21tDBB1NXEJR795SsfZjY3e4EE9PoFB1ndMbcHCfxeo",
  "key22": "3NTKiVW32wJ6gEkX6k8uVcjGKejmsb3YeHAHXdkQfYmobbta29p1YUbssDpWbh3TV251Su6dCM9mRKpeqAK3yPNY",
  "key23": "4SR99wt2rw292NunoMjPBUPUNVyjfVkybCS7WzfeYVJR5D6FMh7E9D4vjDcJ3dkiJ1T278Kp2cwAzFaF1HVQjzyn",
  "key24": "39cUeu16Ebs2DfoCgZVi7RTUFSEkxkRse9LCHG6B3BjxRkUBnJq2wQqxcwrPDHw37aefV6GPQH3SxjWGoSCYdmjS",
  "key25": "5RDBMMBEyNWjif75CsvEhYq8rcf5AJfaLc6RDdp7CUvkBMdP1VE8LM9SiqFpEqs5rAWAKTG2vhRtNqop2xntMSXc",
  "key26": "3f3GTG9pAruKb7rgEtSLBfXJyzKoJQoeGAnhDiv4AfAPsR2DVR11x1kGrMqzg7fW25JX2YqtQCpmwdFRGRvNc5YE",
  "key27": "5pMTsT289Gp6D7dH6npzoGwmmS3dSyopQradGXpYWiFRnSzRjiovpqyUGsJZMRkSAcjpYYGjZ9mg1ZM4C73kMnjh",
  "key28": "XNRSiPtSWBvbAEoAmYPbD8whQvzBh29xXcPqKGNehdCmPBZKPhBTqHRCxxNARvG6quS1rHqMGwEnS8mJ3oWutmx",
  "key29": "fgAFSfspihRSVMNgZw59qAsouFR3B46pinuDX48yuAzCrgTeXr5fvVH6EzBiAYgovLcVRpt72BRA1HwdqFx6hXC",
  "key30": "2iiUc2vZhboqX9AYeMStWmLZXa3tUD5oaArH3LY9okURV5Ws8mj4e7PuRy87gDyc184bseFdZsNz2stDmJM5gDYN",
  "key31": "2fTHdqU1ar111Yx2aTfyTuEyZShkTfXNv9hkTL9rT45j3eJrVcXMK7oUwUTeRndsQ9xjjFzb3CN4EkxFD9B87gC8",
  "key32": "gbu3ufJwpx27atEFXGewauNh4G9cb5tMDrFzP4Xmj88Do6KoWutEZH1HNt3FuBVHBGgD8snAFY1JJWcBFj7ED9t",
  "key33": "9ruwfs2gM38D2XDXuz918aZhpRBrEmGFe6YCSXXiiLVGU3XHLKtcRaS3wX26ShQCmv1vZBJ9QAWLwU9GqUL9LSN",
  "key34": "2G7dadZbRiPFfQEJR4sa5JSyTPrJojFzRLtrcYzwgD61xiWyRrBi9qf1zojGKLJNBQTsJcFJ3gMRwkAuc9NB2paS"
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
