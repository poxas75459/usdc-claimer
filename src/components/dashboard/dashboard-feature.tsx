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
    "1V66QjZ9z6MTzTAVDJZKSyvTMjj2hNJzcUD1vzQC7waqYnNPHYBdV2wXfTshbmvodrHpcW1BcgQycwwdKnQ4EHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UU2PA5iJL689hzynTAH3udgRCkiEipbBbi8rEirC3sVBiU5wKnsfs2jpwWe3Pvhw9E5q2mTiW3T4MHkaWHWSXYZ",
  "key1": "4qEQbq7m5VX6BFuqoAeaWa7dzFGYshQhY9RYrLyxf3y83N2zVWrwQYUhCiP3yPaVLgenSky6DuRZeSK2Mq3CpFdi",
  "key2": "5oqb2jmW14isbZWgZ14U8K29brVTiemwafWuqJQs2n1GxLMvXhtAwzUWsgUVB2onMgSwgmvA6yMpK9sHJLEEWn4B",
  "key3": "4K2si2vTi2VB43Ja2hgLmSsruuHamwe1wPcotZMaBdHT9hrRpe8WKdE8HHzPWvGoBNMvzxkFvbrkdC1XBvcnmjTq",
  "key4": "4c5tdRfxK11zcXuP6BpUuvptjmAJjbgkivCrJ7VxftQtkTerJrHXAR4vknc8G475CDB8R8q4VP34NoxzPswraKV3",
  "key5": "44QVcX45xmX5FDwYBzX3b8GUJ7UY4ykeMks2osmjWrDmUikU2c1obfpJLbTi9HmgvYjUcKxUbT11k2Yf1pEHKGrH",
  "key6": "2YW8UC81T5KeURacZQiCmoi5ZtY4zcTrvBrSqKp4kqLJsxg1SJ6derVXFUjZWjC1MBMeqXhMYug2U9fmqhhKfzyN",
  "key7": "4hSPhmLAzhn9UqxgcZMbgG1ZUSQNUdNxFQKLxzRQKbNzBRDqUB7FkcFXuQ48hK8jFZ1DWFp39r6X6gLDvd5iew5A",
  "key8": "YH6MzBH97RA8i7Pt7k57mnYjUVnKkYzsshsas4D1spfPVRxnxMRkNkCnB2a8UiSCMhLSMC1gAXjpTeGq1xP1LV3",
  "key9": "3ZnHPcXEtq9LFkuFrvruTbhEqtGmVQCi8gouugi54sgqnEeXmpcXB4RW9FWy5vwa7MnwEEy355YyaLJDQucmA1ZP",
  "key10": "dcj29PFAHSZAybffPG59YHCNbyH2TeSH3xoNPiszC1VUTnsPALKqJUgWxNnmcq18A2pxxASaUimL7UcumWJF9hg",
  "key11": "5ZB4R34mCqoSNShUB8ZGkYSbSJuwQ3zC48bqmU8jriYx2iPntJe5NGhte11WX4Lwmx2K6zjMqGYP8fSuppcCuAmh",
  "key12": "3eKh2FmAhDJDnUNQkDTr3MX4gxUTy5ZAvaagC7Tcxv3hPqX2wZe1fpMG8U7TuFmxu3aSbHH36pEpkogaHsjDD5we",
  "key13": "4rcHTWbqUKBhwsPvFBBCe39UXetT95WKYiMcmju4FX6SQcoGhEJvkERkg5evzo4cUPCTS7EZ9FcWFJtQK39LKrPA",
  "key14": "2uCB7EMearX6JnmEphtFhQfY7jnb9vUf7DJffjhb3py3ZtApM9eZhbALqHrj74WMKEfvd1ateEvk9oTptZA9Q16S",
  "key15": "33q8hK7g8EFDUZ47qNwFvfpTum3tBsQQqdpnpHwiy3qBtRjZp15bD7YA5CTrcGtYbVQZsdJCz7UGzB9kDvVHDUfy",
  "key16": "5VCRQAkVnLdnc9UCaFU1KcECDouksN6bJojF3vppPhortyij3qZmKBvo7hhVUQ8rTt1jT4vTbPthA8oSz2dT25Nn",
  "key17": "4fmKcB2LiJX8NGw7Gh6fm2CvkZ5QFF9VJFpP1Jzyj8nTop5TC86K9WtV2ruf4mWdZQHfh6eRYg2nDJjP3J3HZ54c",
  "key18": "5n93NAEfqbT5dVYGNe1Nfpt8pfUHYJpUrfTKKsXvzunSJEUMD4ajdW6GFLYNRXbqCNXvm7GQ4zPwQcwQFTF4gpGv",
  "key19": "35fLrq29QknmYfu8TNJyPz4jcbNPumMKEapkrphNGVn7aruFr9GK4TaYeNVd5cTF65xSGkXaxRer8x266Mt7o5By",
  "key20": "2Qm4WN1L6Q2mbDMmAM4Q8FL1yJ5Vzz9XiKnaMJCnRx3pcw7EfQo4gTJ1BCxSYkxTiaM5n4R6sfXiwZQErTGSczzG",
  "key21": "Pj4SJfxSwvsfcQN4RNbyf3XNxFwaqg9ZqxoovH8eWKHMKjLjEobL9vprqFFnyJjLtNNYH2LUkQTB9mwoRfjzNT8",
  "key22": "3H4TdZchsKedNmpr4iqPMXtJCKQM8nw7WgNFbWGg4CUdJMTKh6DcLBzY7tp6KXVeeGyaRZasf63ykCx67gsAJUe5",
  "key23": "3cdwwvTKumVq4e8pmRpTTXPjmpQBQ24s895uYaKgvebytmRq2tp62CtDHTHVtX34AEcu7irMVmEcgWnpFA1VAChz",
  "key24": "4N5qmc7myiw7GhGErhVR9ttMA7H1bjR7PSbT3F2KT8zeAmXDVWSUmrk112LyoxW1s1zMQoMjbmcAXBmkQyp36daW",
  "key25": "Mxbk342iWrLjA76xc2GMvRxYuzAWUCxp92iCECLzFcqCph6KVh7A9RASTjknpGhnzJjrRk8bFS6op6Lhjh8PdtX",
  "key26": "43L8mcMmfYWZK1Na4zuexAeXjrGCdojtjvUoaFe23ZwZbLQDeSBqjThwE1Q9Gxi1fP2PKwyP7qVmseWVEE1Fu1ZU",
  "key27": "24nxjg7oGrzK5okNkMXeehC8uQaRfNPmbUaniFbgAkrLmR2wgzXMW2Ln6yA5wvMo5undohjcq2P1h7FucEkeDwar",
  "key28": "5w61mFwY4uCX6VSJdU3MwYLNZqbKXFjCoiQjBw2BKrnmwosjRxvnSJhckHp5jjEoVmf32gEFZyALwnmFGvfw6Fe",
  "key29": "2pRxHGjdegUF4GUPsSDL5kZtsUqvvQ3YB6xSyWACwoaJ6vyQubr7Dgnb8fv98gzBsUoVLPdfJp9mFhGrz1xAeUAC",
  "key30": "5uwG5BiMz7y7nLKrg3NgY6G9N8scv9j72GKic85TpVRzEvcoSg2Z1L4T85Dc6XfZ3pYRRxpJjNwZLD1z3Xwqce5q",
  "key31": "3uSuAHT6MQBpK8uB4SzmBLUygUx21iBDXigdBNrNZYFNLafQFq6s2CXi449qx4Leb1wR6db2LKEuk6rZZvj1JNpd",
  "key32": "37PjJ8BYvDyL7RGJMov3944gJADQPNv8UPijXmTkJBwBX6S6LaLrQbP2fnZLcr2LJfP2wYey1PoocDKG5wdwAgQH"
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
