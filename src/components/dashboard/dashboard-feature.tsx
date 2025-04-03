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
    "2ZxGMcznbC8sTw4hQ4b16LUwKeW6W6c7YjmkEzpuRvV2ZfnHho1evrUv5gzKEK5nNfADTTQT6GSfVbTpkm4bN5H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uzM1bAuu5U3urMmpw3EXW6Ld4jVhRLHHe2mG8DDWK3Uuijy2YUPfkHACRQ8FQBWi667iVd1gVET7GEiLK6wvWgy",
  "key1": "1V48C6hRvoggpcA5JMaVSoYGJNsG48FTDxnNhCGiWVbpJzbdh9wiDucZpYkiR28DYL6Jg2C71TrUDFhFNFYdMq8",
  "key2": "RqToaRKpbFt1nSuEVMvV5r4w8D9TfwfnyW1tq4urnQR6orEBBDc5si8PN5jtbgHGDW96rdD6hLYVzeCDB8cfbpU",
  "key3": "5C4J9G6wCscCb41qxbirpcb99hpfYUHuEZSjQRnMLy3oN4PAaXrj3rzSh5zsakGhPDHChpuntxhXqRwTNfTn9MV3",
  "key4": "vnzN9UAYcgHtjKognMdLQzZidacAyC6AFvo46HDezgofKXdTNnSH3BDrCcSCGZ4uBytkYSCqsAv3QMcqcw6vN6G",
  "key5": "hJF6SPKZEsqjt6JCF7CZnAkdDg8dUbjqsECwWZgTCzHtvcAtpts6C5iHdzfcMa3V7LhCz77xWmh136JtfKGJQbq",
  "key6": "51NgsYezsgqBGAuuDVbcmwHmsgkwYFEq6EQx42LhTR6QcQPK4GcE5cCMzqb75EasH1WTALdrFoQf96EiDq8CkDTS",
  "key7": "5fGopXVGD4CCEtNBPBZ3Kz1TRDQQornuNrBdDr4f8X3qGP5ETy8zUCpkC2bxUd1jjF8Ry2TDvqbLJiWLrSrzcgdj",
  "key8": "6pqVBkmgPht33Grnz8DWUx1Ta9j1HBRfPK7BofaSe3Akq3YzzemsRnNuFG8geyCoLbZkFAcxdYctfwTXq2tbeeG",
  "key9": "63KMmVoGi8nEBbRAg1cYFEc59wo7N4r5ueTp7YPJbeXdW1z6vPNhsYS2EfrCLCYccwUzARM8eMuDWHMof4pADncf",
  "key10": "V93G5PPudRz7HwMFH6oE5Mq1ZV2J6JWBDjXyjN1syGikzHRGdecauzR8HfssirivXyCLvE9LoAVNRyvbWJPdawP",
  "key11": "3tKnDcwTuVRonFL5LiWdw7ZBCqUbLuKefecnJcDrL28maPRR2qP4ZXVpEvNxmp7ejGhrs1bjpH1oure6Swqg4j4x",
  "key12": "3ExHtXwUVf796tA4ii8rPKeaf4N2RN9baaJfphqt8iA7LTs2hAtvabNwtDRS1bqYfh445sWP8MxMFvW1kN3WzKbH",
  "key13": "4wA7U8bhXcH4NgeTdi7qcPrQkpAPMuw2eNWyzmgomTpKpRtLLwFYhovt3RjyTHJyjUJMkvCMmqa1grBvFqid6VzC",
  "key14": "mc4TEVXwZWmJUXSWF4LMGSXJMbWFsfwPqVXCzjV5EBKgbTYWTaEBqz2JAYaKypacn4JT6BnERAEWtmX5p9Wj8sb",
  "key15": "JUnFURifC7Di1s6pysXT5aFkhQwWMswi4d4vk2sLwuzrN8MqmeTUYH5VUfYMTCxMr3HbHsFD4jfn5EbLq3WcjLh",
  "key16": "jgNoutZ7Z1jxvWMBSebh5Mwe45w5nDbqd9Fvpyjo82ht5pfj1JLHJVWpYUdgC3R2Auk4e23FtLMbdLjfHCLcckc",
  "key17": "4jefa6MvEzEuUaQ5hZYpTvDFzLkzZturLoiALXU1niCtgc4nUc6fcciFmA7LkU9Qe1kYYFsX1KohzGKW5U2AffQ3",
  "key18": "4wXahmzpqHrywaamX6gGuX1k4PwHZsjhyU6SLEMdf19hgL6Q7v65vdV8YWwaRHnWwVgaq66VdtK3VWXXT5NPQSMc",
  "key19": "5AouJyiRA97QvFBbmAL5MjuTD5SbeieUhmNvwXTepMiRCPbXEZUwmDu3TRcYwMkak11iqMTWB3QAWcSAbYSi3sQb",
  "key20": "59kFZrC8a1WgfoFX57x1UtTQSLPwf3peMLPKBHy5j8tw216aoGdxH7zF3rg3yre6ACspuX5SHqSxf28deczeefag",
  "key21": "K3B8CKW3koJBGnn3yNyWMSZDDv5vzTgGtcxARXoDWgXNjKukA8FiXsdmTGZRu6myQTJbkzc2xBn4Q1TKn4tR54n",
  "key22": "525VUor8poB3dbKKpAde3hR75cmS2hhmTSXyXkYnUc3DbRtj7BNxiZnKQrk7HAi4iJqoCk3ZwAfV2TwHqJ8p9WcJ",
  "key23": "58rJRiKkAy6f2FFow1jBFQiB68fz55UD8cMm2Srsb137UksQCuRndTMz9GR2omcmqYqHVAh1k7doqPqzeUGAaQGL",
  "key24": "4XBmTXU4w8nHJ6RZcUurdkRYt41dgUEsPpfVcGTgvxdxE1P91LdPu5FbeMzzS4pDVU35JBxyMcL44qnuYZQRkouy"
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
