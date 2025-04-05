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
    "2nF3YJFz3gx1c9uyHkURV8ZcNrQXhSJx7tNLB413uQZ1wY5tf43iKEBTEidFR2My3APRFHNGwQuZxAXrePKrP5hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mycp8RhKG8gwiAQZQnQyS76ocZ3i8nFe8q8dZ8xZDyY5cf4cDbEBGM7o8GXfhhKVdv5RhrmgA8uLGyVRcKKvJ5D",
  "key1": "cnKsjX9zYkzcNCaRerVh3GbGr6PG93xcVQwVumtLQSdS5dEAvf7omKByA5FnQaeYyr6SSMiUkZqbccbFJPXiqAu",
  "key2": "2rho5aheTjRcPp82HFWqWqALnYgESbm6A65oeq3Cc6y5JCeBKxoqq8QNwefxBCRGVLcfUf9c7uDNK33BnYbotDmC",
  "key3": "5Z52QScf4VjvoYPLPvs3ra1FTzkGcBacxc9p9f4xqQyCBHbTyKWHkQYvuxqqv9K3oy3YG9SjmzVLKLLEAN7pqjPy",
  "key4": "4eYsHVA4cdUFtPbey8ktbVWpw26xfJ7bN72VB8HdggBXWdRsGAT17EKX4q8gbhjDMS5TLPw7bZK159G86WHnPwCd",
  "key5": "5nMTLjcdbQRJ3P9tGAS5683g2Qsz8h8XBTumzJnez3MD26iYgjmgGnztWXoeW9LxpG2Qn943yeNiNuJbw6DvoHv3",
  "key6": "4XiWZtJXuGCF1MpF4S6s54GKLubGYmkkuqkF5HBviXfp32AqbiLjtPGvfEpB8Bu2XyLUT4WW96o34MaiVayQ4kC6",
  "key7": "3KzVS12wzPT3H659JLQqjR19ZzkdBB5VRxT9VYqikfMkGVe9wbpMH6sEanbYpdTQiRvFiWSxdFusvx4YWQZpHwF",
  "key8": "3TFy4VTxN52bDLk42q2zrCgSSyYqDoQ8HhCqXvCyY8nyrFT3P8dnRqhoC6oXKeYpoQwG43mitmscYsM92ujfapzX",
  "key9": "xYeuXDcK5aLGkF1zSxY1otu9VvFanXFbb1A3twUqiaKduhRpsarAzjtK28Hg6pCXcLxaDw7WYQNZTSE2buQzeCa",
  "key10": "4LMMrdrNZ8zpjUFNK4rbBmEX9hbAFLFe1E7CtaGRj4goJivtXseo8Re9SpRE8GBfFz2dgq87vssQvEp9AM6eA6dC",
  "key11": "d6CGaiA1awd1eGEYHNWVr2huKtEGKS4HkkFMhZ6eCcWLjKCYqgFbsQ6x23qV3frzKH4G4pX2uu7BziBZtfXRP1v",
  "key12": "3yv6mDxKjF5ye84pkhZ6D6B5VX2GL2srXG6kt5kF4pyKYMrW3bMEbKVJAcRvjztXtk446ESEg7i86S1LrvV1uhFV",
  "key13": "27RoSXLkqPGUveyhbhwpddsHHbz5yYJF9BQKRLbVoswf7o8LKocb72RtiBEd9W67vbtPffodCmg4ychtE2SUnBgL",
  "key14": "4BCzcpjNkKgTLR5uSXmGkub1cCV9nogRGDDUGFwkHa6Bre4852UHasq1xVrZJRPLScv2X6BALfcYuNPBtbi8iJrs",
  "key15": "4z4SK9y3xhF1WjbqUNeKouyyAs1tGr9499KQsAkqUeaRSNzBVomzN26fQf9L6bJF1UVxZnvWjnshsZGSo4JAs8DG",
  "key16": "5iX5vvBW315XrLau3gCy4UgZRD7GsHkT92FCSGhiNzrBkvAYpf58MLiaM6yiKwHvXa9wHDFLvuMxHR36uxNfA3Pf",
  "key17": "4VQJAneUaR1spgb6zwzMs2ZdtP5QkmXu2i5pfXER4pUMmcbqa4984vPxFFM9MjuLUWvCxMvwJU2kwy8FeH4fJwCe",
  "key18": "3N42bvnpBYgU6yCeEaipaLVeCzQ7sEBZhsKF5rqKxYun1MuEhSscBoecPGDx8rr2sUmTTx9yDMtPjjjxV3xwXGXD",
  "key19": "21HCmJFwRaXdRAEkNxG1fwcBQrYYN63P9sUKe5EDRg3NmaGu43k7FeMC3FTRLzZ5WxVHktxMR3h6zUWXzQ8ny2hB",
  "key20": "4pDmVz1WutQxeGQRrshjHnwmkBPBp1opG4QeuhoygXuybDvCENvhBodVn2MUo7jCCWsu553z1GH95tacqfCJuRXu",
  "key21": "uzBrKvV9jJpEznNCCwMVHTbVrPGTGdwgGGUf9MrLSZovCXjyteChyFM42EfG1EWNk83mgkfRZLHgtTpp9AgzjGv",
  "key22": "2ojsJjXHmC3STHYbNME8sUuBAQV13gL2PtsEk7URGcBznZrWHsbTjFGK2xER2TkZFcgvwuBbkxAMF9iNqmY8X26X",
  "key23": "2wC7QvyyVtzDr7K6GCVoEen85twrHqC1E8jfdXdYaH3KEfCd8cdjgUznUbU3wxvi4zRQGYFqRL5sg5j2S8E19KAN",
  "key24": "5A3b8GpHxio5HWc4uyg6oLFTkW4AS1mN4vSxDfkKVrWcbZ9eU5HqX71w5UYPc3wqHvGAiQF41ZTCT9nk6cz2ZuKk",
  "key25": "3sJP47D6bgdJwUEGNP63ddtihkHa8SmJsbcyL1RkRgCZ9AWVxT9qbxzBoSuWbvQSRtNtkPBRzKxFunfiXk1bHHHr",
  "key26": "5jx14CcjSH1sZHGqeS19MosXRRkXfJZzjDCCEzhj5nnCGyfmvBzHDGHUbJmUND1be3RZ4WpAUJPQKf9WWLBpfoh4",
  "key27": "3MTyaeoBkSrPHzaDRQpCRtEF7NvxkMdGEwunALEWd9ShtPxCL2n6aWpB7G2VSE3zYv4irE425gEpCUhEdQJQS9hS",
  "key28": "2YzYCEw7QrfUHgx3xk2VfGBacNteNhXCczG1zCfn9H5eDBJjJ1yTqX1FmHNft5AZ1p1axgjXtv3TQfr2j1i4GNoG",
  "key29": "2oy17PoFzxTRNav8qeejx9byCQsUbzLGwHKLg7J8oAfAFDxBbQtN8bvvaj4uVkiiWVvCkhxerWDpaVuE4Z5Edati",
  "key30": "5vVniw6X2Dgp4Bng1mvTn9mRkj1YQ1yeLtrY6cZPqKk6E3AoGEYB9ffPsjzP5ejrnoNNR88cwN6tFfqBSn8apL1u",
  "key31": "MTn7hTqeLE5MgxxE2Jq2JmhmhTDD2uRqVCuYr3TvUnFNxZXcU886CpbmV8K6K4r7ZUVfcNqhj74ZBHF3A28jmfs",
  "key32": "2z8EKPwS8mNfXwLFxTm2G7XEVjMyby47DHwRE1iy45fEaUHaHFxHw1TZLbFktpSKRsu6W8BXs5DhDixwQcNc1VTh",
  "key33": "2DScB8jNz4tJXxkh9mk469gig5okbeWjR4YAxURtDYEKVdPKw6JnB76kvofUHTMJhRaJcd1LiRNJAPAN4DdEaYD4",
  "key34": "48jcHNEx2Gq2gBoyDNZN8dayXoQEDHmXxxY7GJ2VQKQfrvhCA9UmtpXcNubJK9csx9JnkTtEfb84NseUwivmgUDS",
  "key35": "5HxKqLE35aALD14x1DyvdrfWF8a5LzcnSW1gBihS5JKzVidp7FQtdLC39UiVAaPuqFn9SjUUsc2g45YcFGenUTss",
  "key36": "bhuRjL717vqbCtPiSC8o873fPguXtoGTTkih1iDR4ta2NvKFuUuXk3WKVTjEMWncQkpwFreTqZcM4HNZi4sSiGD",
  "key37": "JVTEi2PmJoE8FurjeJ5RBHrcAphpoHGQzASYqREFDmBFmqyHxs3vwLj71mdSQJcCCvwwmt9NXgzndn8vxTfCrhj",
  "key38": "2CHCuYesS3mbGW2HmHjNeBpVDfLfNy1kCnovseRaNVxDzzYh2CPGKnMVy31RFosesCwTMaBF9GRAFtwaLwdDqWWx",
  "key39": "485WhYf215KNnsekCogpJHvTSsAWGZ4Fa8TNPU7NifBvMe674GaubX3xQnCBr3CWg9iFjC9vYRtcWCBGd4im9mFb",
  "key40": "9wBj1ZTv8hjzkMXxs5EL3nTYDHCE437mvv48ZyPGpxpMKAyJBPguyrZL4jYB5JpsBfk2maf2LSGgZ7TF2nSPF56",
  "key41": "2sG2LG88PsrT29CN3iHEK8TMXNa7oYKn3ZHQCaCZ1uxDA1S7PdY5uaiWZqVz4h8EZJZGfwLNgUkzWCfSaybCHXdV",
  "key42": "2aPPeDrRNhydinz1uiWRhrvoR7w8ysuY66XnMRNtsPB7o94WpWgXeAECyRX1U6pbgPZPYneuwMckZMz2miHHJtE1",
  "key43": "xcUHeNM2gaym6vzKv9fJvNN2UL13BmBFSJs5SZH2tMokHPsYFwRr3wFbKJCcnfHQogv5xqG6d2TtWZezaJafNro",
  "key44": "4DjXybNnVDjMm8Nd929WyUxgYZwo3ZjkUp9WSDy7Vekhyjpu8CD7fMHwKjSw4ZgSYMXUxbrv94apkPWd1pquuU6G",
  "key45": "2iQbNjCPLE5dtgiKfQoC1qtspmsW6FkSu9ai2v5wH6g2K3rQNq8XXkFoDYK2xaeACVuudYAo48sKxtA27isagG8V",
  "key46": "5f8WhChfL7LVaADbgwmJesLyH6rfnTuX2YoDwnTuJWFyhwsEvKbBhMs6CRUtDf5DMMXmMxiW3nuQ9Z1yNoaPK4YN",
  "key47": "3zrmu9SFagGo2Q4nCyJm5mGMCRh7ZxtiAoSmFryTtjmij8basFxVWQzorU8723DscVmo8cF7Z2BH8zLcBPZXKHrx"
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
