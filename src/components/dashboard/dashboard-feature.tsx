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
    "4Ap29hRCd1v3R1qGvwmDv54KUU8SuM8iZAWAJG1iqqHgvNd2o7AM8CvqHXTCYQvDCfUR7jT5CgTYsxm4cBrtMNbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TVkVT9XqDNfP29NojvvLtnEADdyyCRYvfH3oiXRt1Fbm5GjTgeoF7yzFy7xRpJ8vdZ4FNZQfVuaBTHitD7kQ78P",
  "key1": "BpGPoQ1xetM46CsqdxFp6HVh4NvNkfYiPi7hRYs5MH9qz4hbsY9Z3KWHaJ28nCCNxZkrT3AQqrpeFg4RopwiXwf",
  "key2": "5hXgzULMyYL4TVgK9LsdkVcrwLz9SH3V5abpFouxDYPb6PSZ9AxpK5iLvyZThfpp7WuU8q9PdxTSt9pJPo66LtMT",
  "key3": "5AyW418M2WuLQqL5zMksoAUPhXAcSncy11i1yr4j4VwwkJaVok9Q1cUYxCSoqASxqx7yMmSVYeAkzcWGPwHBrsge",
  "key4": "2S3rzJEGJJdPccAggtVyNkUgyDWKEZeKk9oXEcPzbNB1bVGkZU1CLsZQju5AEXwSUxFRzoaKvYCyzdEXQMEtuATG",
  "key5": "5YV7W668cM4hE2ukKz4CVFZbHfEA1yZ5rKntVPdadyqbXBCgjMDuVvzkiijxwDTVkyPEd1B7dfsUK8TN4drbQ1xg",
  "key6": "3WZzGi98NknUQtJSn2GGAivgXwuyNQGBPCDTYQQRD7jMHKM4fKu4pGCk3S8k7QAFRjXEzrqf7wkicecDGpLvsi1j",
  "key7": "2AB4ESc1F1DXgzNzvsfbYyPxS8JPPQU3sUV2HRwk59Mn5Vh84U44vN1XBYFony1pPj6HjUtKFZ6CGVKtdjEQLRaW",
  "key8": "3zhRJvxUnfiWPkfz33puvvTULrDcegLUK2qPbMCTE9aVdnpJMr1soE5BKE5i15xNiVwy6ztAXzrUrCuTBn185Vxg",
  "key9": "2T2VuuYDp5VvAV1pYwj9JXGmkQizKP6xz55b2AA2oeGws2mqG3AHSBq2BzWsD791RP6BuXvNH36VvJxpzq2T3yPM",
  "key10": "5A7wUvPJFVJpLp1dMffYqpBqceRfTpXw1jGUVCu8naPReFndbaqrDMjZMwtQWGic4KBZXSNNMWTbvKyTpihwWeHw",
  "key11": "4GkQ7SLUo8QrKje7ScJdXTSktKMTwT6otMitywL7M3FXUEzKLui9bHUyG1Fxjmc1P7eH9HPShfD2kAZpSDpVHStt",
  "key12": "b7pXQZRGCWGjenS1juS3DF4HhKfXWCpSJj5Nipveo5W5vKEFj5PcnvNzRDGfjCk1A3cJ1qpXBBEic1ErouCPStG",
  "key13": "28umnyyx6BRR9QPeFDdxr3xfDsUTPbJjxn5A9FdgvaKzG3uhpKRfS3c3yjorTrddhpdXUboKbXLCJySkCFMdfNUp",
  "key14": "6dStjDZ1XaQK79MmPGo98NsBZ8LzJDXiyMXP8u6rAVJvqgQP54GvADBYWvUPHhwAMzMH6rrAfGJrjKoLAuEtNXX",
  "key15": "3NeuRp33Gi5o4KZs6Qp8LBfgmn6tWMi5dA3ezDXiobz3hvpsztD83jUDbzAkyfzGw9v2rfjBn6KW2HvJbW8HjAPk",
  "key16": "4L9r8Zizi7CYa5Xn9Ney5b8ozPFeFBRC5fCfU4Mvi4ZQEvyRhGug4eBvo2z86VAjJNgjdXgp7btQdkeFEJYS7Fn2",
  "key17": "3tbm4KqdqM9xJ3LFtbJapn2Pjbxt7kdYZvANyYCe8qUCbKB8FKW82np2sNuBS988uZd47ymBYWxSuQkzrifnNMTV",
  "key18": "3iFXxkLSYmfgSnxemvP1GpB2PK91bKQzyN5gHSr6NvFHzbA4suV3A1syx8JeP4nY6wdH2uDFkdJbgp35mbHHoNX2",
  "key19": "2nYexkmi9CGW3Tosbm4nik7vzQRmsugUrTHtHXVuxkfiMkDSrErfRRWK9ZfGf4uWgR6Yw9BeoE1YD5Motq9J3zJ6",
  "key20": "33qbRyPCqrcydGMBQopNPbwP3412qra4ABUzUETzwxqYmUQqPRBSbFRqBAgNUn6toSWggVVg1tNjKAAq4z3mGHrj",
  "key21": "4zDMbPw6ARxqV7ayRqAFY1jNqdvK4rw1PSCaT8ZomFhZUHvt7ZEJTnLDpPQ2ExHrmZe2R4WeGRBtdC1FFbyC9iMt",
  "key22": "4WaKDm6smJAf6R12on2Sa3EaBVt7k4BgSpsKED4pzeGtpCNp4pgz6qYviJ28CqRqXNeMtXiJhtvxzNyZHNd5dwQi",
  "key23": "53jf5z7dzDuNerLykKAvUoVQ9ceijhZPmzAf6SiqStuw2rP5VBcem4bUfbVbiSkKkEZM2EXogHggW2vSsRqir2d",
  "key24": "3P92zJ3EQmyASjxzVKNuG2fPsQHxib77MLoBkqskQc3y5AToJbPthSB5aJp9VrPBq9uqoNw3gfmJPXReebgAZ33B",
  "key25": "5AvX2VLftn8uZCaGVPDfpjKvrHiUnLUVdipYKGsuNoqMJKTbMxsLhxGKhiLJoaTSnuq1LiLTR464DTgqaPdk1wQF",
  "key26": "4254yY1dZ9TH9YgkUSTx2QWTSaUDRSTfz6Do7BSrD1RLcbVQSx2JHF8yp1aQamSESgBFKpBUdB6TCzqNBzpgEwGp",
  "key27": "3BpUgsnvSYBEgpSxWZED6zgZAibjyBNmwMs7JYcA5Wq6ihtC6gqSo7ybEMHJQ4mawC5JPj41gh9EKW9y7krS9GxZ"
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
