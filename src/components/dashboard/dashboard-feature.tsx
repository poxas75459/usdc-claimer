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
    "4E7CT8ZwpeVnSe2Z4gNahTcD9PD9CDx8XzoJSUj4fYhRN8AjDVy4SZcPzwwr15fGjZz8rdXLXUtJimkXPgH6F9WC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NeZ7g1XqmzCJJ4qaZbCL2xeJ4JUVTEbiqWohg5H4MdU4ZraJvbLRwJv1U6aSN6KBcwp5Eoh2JKmH6JdHAvCjX73",
  "key1": "2m4w2ttRHSdGGpT7GSKYKv1XdfnM4QzieoUHfFGr38FaE2u8zseR1hrBQDu6CqCzw5r54ANKd4TrCBjEY1LKNhnE",
  "key2": "3N3dKH26Gn91ti5irGtdqcgGD7QiSmAerdrKtum7D7uJDVGDHWkG8P2tph7qxXYuntxuSF3bTApgCxjj7WvusvGC",
  "key3": "1KQLarGXeuKAMVwyccebkciwUjh39vV8WNdam8epDmwhwNFbQXLx76djxdu1AU5h1bXSCMSSrKJB6j7TBqJZ9yp",
  "key4": "3f5BDW2sYbeB7M2UBnLy7Fe3H6GNRFCRxeXEkBQeTpTEr3Tyuc9YXNneXxkWUuDo8VxezqPJEjkqqyNfjN8KKycG",
  "key5": "5wSJzU4AM2w8P3QqbaZE2UuqUtS6D4GtuEKqiUYxnJjPZSv56EzenR76YG5WtoWWX4AhbBr5hVri6FrsapJAPRUs",
  "key6": "538GgGarGr6GELbTnLB5nzSVrAxZojw525tUxrBJYi3tqWHZqvXuYXbWTPKy8TuFg228cnoN7p73nWRpiJViEMjh",
  "key7": "24KAPMeL6qGyCjZxXypbjtFz59NsAQJZSJm4eYrFPyaUsXCvykzytAHHxRtYbctoYgPYQd4HZazxMqqXVvNvXvwr",
  "key8": "3GjNYCLGMcCjwGynebXe1f92yasSsjTKWfaB7aZbgAKDJ5PqDAXF6KLmSnGkEsxFdsCWP5AmZ9dLBkMwtveZroUP",
  "key9": "2VwLuSsfjmX97ntyvZC6KWm9PEqnTu6VMQZUV3dfwQWghyydmWjDPetVvZqVeNR5uDFYEdZxo1PPhHeANtvueCrR",
  "key10": "3FmA4bEooRYHmThX9K19zzTuMTdumKMaUUpZThEm5T5qiAc4WJSjuPQsxwwUoqZvW9MADHfBVegR343NAXpn7iDc",
  "key11": "49EdjsLCV9qMtNcHqNzMagCEUrT5tUDpBXcQ1wBffJfJZ9tpPn3jpPYYzsa2TQ5M9wptvvpc73ueUt2MjtwBBRsq",
  "key12": "CiWkqFAYpiai3drB4iwmWk2iCgqGj21J6yeCRjmSvF2x5Sx3vY3MQVeW1cpw5mqoh7pQ745pUru3rLDRxD2hs8f",
  "key13": "kwQ37PoUfUxAjCfMKTaoVYTaX6CirfjJ7s5yTdvuA47YXFRCZDLEepFH3fs9G1JnAyBrQekeHR99KBZqefuXy8k",
  "key14": "WQVx2tu8Po22spfBh3zz21wDuXdCCxzcYpb56Juocj2Qht3g2gEoBC3ZK2ftvqNByYnh8shPWCjHHHcXjsFo1fF",
  "key15": "rbuZ6hRJKjUGDUUNiZDEcYwWUcByxDb5f62sTskbveG2q7wS52jyBAHNBPQnSk4PBPDjFH6xBZQM2Ep8uPqsznW",
  "key16": "shddksQ2gg1Gf846EPaPYfSNSdYyNxQH27EDAJacvhTyPUjenJU98uz3RqYPTKg8h38giHd1rEQgnTxPhqxH88V",
  "key17": "5xAFaeEG2vBEpRmuLJobckRvARLLGPuvABSCZNBEMLT4J9RtYDyXGkrp3SJjSwAqFzfZzW29YkAedMwGndQB3Vzd",
  "key18": "2SSH32E2ybJahoUBvB6tkSkzEBf8w5HAF4fwnpx596Nug7JgVSWU3xF6NGGUJJBs46UuAGLW9o2o6QELYxkZPQQJ",
  "key19": "4ygG6gFR4yb5oQei9ERrbuAME4w68YuWAhVu5DYVhe9iXctr9AHmcj24jbM4vTFQ1CJNRw8ffYCkGcqXSDrykqXC",
  "key20": "5YXTbmCvjWi2sExUtWgL188pRmkk4LyKRKRax5qhP9Fpeb21sALxKzCYWBYXTuHjMUun3AwaYBSpdYtCk6dUpPis",
  "key21": "5sQshB488UpqCVsWFT27HkdK4B6tRMjexQVqek87VGbJqzW6gJBPsyuHkUks7hP6BqqDtGbXVf8t8muf1QjMcSau",
  "key22": "3tygKqjVPymYsUrJ6xeSsWhR9af9GsSBRtFgfSWDfEYmgt5VMRbpgeN1fR46uBDChoDTge3dFDf3xsULUKTsku86",
  "key23": "58vX9dB7FuinwZvXWsuAjrpiaz3ETMpLfMkY5nxnVsYs3iYNkfgZM75v3W7Ne1cBM7DbDJdrHdkZme4gjHzYbCYN",
  "key24": "4rbhojGkwDHfcQE8e8tm7DEStch78XzTLNsrLZkmLiXSQN5yf89ZnJvmsgdCpb1CnA1HjQJNbFS38pbwTdYeDf5D",
  "key25": "5RPqDrFT6sf1Bcx1nsDKtqrvgRbtLpXcG6eGbBKUCgpwv1hcgQEPsLgJewubSKYxxQDh8vLpw5FaXByCh95enYnz"
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
