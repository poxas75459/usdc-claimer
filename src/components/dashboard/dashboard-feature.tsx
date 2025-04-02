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
    "2AgZPshxVJueDKfu8jmRunU7CDJCGJyB9X39twjiuTgB718mwh17ZWaXcK8gyijshCe7Yv9H52WnCPswAoSKAdzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nAGPc6TVDgBwrnwoB5gbbkBhkHWWgX79hK8MPGpMBDP762u91eTJwTwNm8DizwuMXPeiT2PsF9m249GjePMvE16",
  "key1": "3KqQkWSwhWZMzXJVSA2Cbnmkpee531EqKsrcc5J1igPrHwJwbpC7x2z6UEKDfhyYbNAaGBRNBAz1jCGMhRQkk6Jx",
  "key2": "4B22iAXEjShEkmvFfTsjQQu7hnw9CkPhhSLGwAoc8q4gRHZPpNNQiTFzkyRWj2CwKQgJdfYCymjNADxFXC9hK5eG",
  "key3": "3hrKtz3FHFxesftvmgNnSccAmEPDbEkqF2GDJJsuVwKPzx53LWjX84gx49c5qdZez1LA13v8HyL75jLbv9DpQCsh",
  "key4": "5tLqmSGDQPfoF5ABULdk2227YZXH5aNKh7ZYys4fWwkjZBsUtvqwvyCKxiaDLzBU4iVFB4pDmSa2jcvHdYPSJza2",
  "key5": "2Ssk3oeZxjpnshAvKGSXPKzJFzi9YHZ9WBuA1q2Gym46cNi39Z1N3fbsPufphuUm66FvkbcXoVASqjAVA38oxJhX",
  "key6": "5SQYLJfVqDkay9spPqajUkPRdDG7USgVL6MbkDxKK9Z7aPTSbaMiR7kiUerbEfAFPyQkdP46KdZNC58P5yk72R24",
  "key7": "4ThFffv9YFzYVJP9jkrpZ8EGzBzYdAj2KdV5c2YtkAg2xHbxe9X1q1ewpsQhG1foWBwMQtHFH1NAuQu2ZwhfmVea",
  "key8": "45TXH6V2znViaZVoVEVE8LhDsGt5WnRfAdSy5ffwXfErE9LUGzHvAT1PhWRQyrc4GX5KyKL35wkxRzyyRCaHhgif",
  "key9": "4bkm6XTX7uRCE6sf4CdzrBRdB1BP3uQx3CeEC8Ju9NbkBeSvHtBpH9tZs5VxNFJiLuzXyVN9jXGsUec69ds7Xg5o",
  "key10": "3G7SCrYw6UJ7m7UK4r49hwbrdNFMxhk2Y3NMpsZMSSqiz3Vc5DEmYTXgWVHkasjv1oiaZsaVhQGY4n9XC5C4BrqA",
  "key11": "5wbnbWTMuESxwFbXsqkrtr6HaTSSzqTEkaM88YiWJy9QNcuFvSmvahXmjNf9P1hJGBRfezcv1FmaJ63yHCsYvt5B",
  "key12": "3QyNzSx5PBVXm2HkekbASZtowduyvRWTWnLbX9cXwj4r1R5SgarUbfyVtzvRdnP9jpB9BQFLJG8ECZidZMmmhBe1",
  "key13": "65QbGCMuaqhYDNd5tvUPLu1J3FmF8U1bnCoKbspoLJWoruWJ8Uwv9BsYZsrTSfdhFnaCYrw11sKvKcKoQbA3CKgi",
  "key14": "5SkzzZ6YzWVZGe55w87nWdfvvErjTWBuVrct2633xRp2BLkHqpDirjmSMUmzoHYS26Q8sFPqpUhz5WhqByisEaQM",
  "key15": "q5CjYZgrv8RfFZGof8WDfqhq89CmHstpFzr7zbAT1x1HCT5Zw89yMYwwbGTKPgQQXi83D8Eokoko3dfvj18zdoC",
  "key16": "2xwwWgBXb2gCNLkUCn9tAUtkasbwwCwKmRjk6qUixHTmMt51VyDc3uUAW7Z2hHCGvCUTHMzK5gkCuHqqJ58SbjT",
  "key17": "WfUoxw2BMPBLRq2hXSGi5oY7F24cqgAmhmbn7xHDtvUenSZNa6coiSwywzeCehThWaR5aWSCwJvBDjVFd4S2Fhq",
  "key18": "fM9Yu3GFghErfuE1BkX8rKkRYiTAZUPBhGFCiYHJAhscvJufkesN2M64jrhd3icPfctzU982SsVGDJZCWThXMbB",
  "key19": "zhRGHvD9mq5iFh5VYXJBdPSyCsCqSZYHB66TH4fTgCiktNRGUQQo9KamowaZfMrok2YoUjR6SUCB8wYoC3up3so",
  "key20": "8ZLiJa3cjdR2fay6QLENDJaLSEwBDCzRhLpvP2db7JyUWbeZtcScApjNvUAFbBrazbQmJ4j4ddCoUZhuWh3ki6x",
  "key21": "3UabmJENsrqvEmshh4aAj2nLcxz8QTYx8rMCyrA1dJZ1HweXaa87oNVwAzFc6QDLoTi4RKRKPA8SwwJBk8XJ6grU",
  "key22": "23skP1uZ18U3bFoyXnt9uXkkSTWmanwx2CkjFmAzHyVXpttErVvettDe4BNdDSD825TcUYtEEHWJqcJ2BS1gWq4K",
  "key23": "3zCsBs7ZE8uwoT82qL6XpZX8n2VG8PDVooEPyEQqXpYivWiGokiciBABDbDQV9QT8G84Cb78WwpVA3dE5REQYcDj",
  "key24": "58SedYjzM8k8T87umqXAuFEWK6NjrbTF3sNR39YMQt5t241vD1zCoFQegnPSRJV21ahwfrfLAcQhMP18bvnAuHN6",
  "key25": "5S1RJYZVbSZhMyrkrojKWZ6bPwB4ubUYR4b6QVhhYUcE7YJmxLmiejUNygR73XFbduePgpaV3MGT23erdVwj6yS9",
  "key26": "5sHVf6dJcTt4PvoEGnW9fdYEmfySC6NtVcKcRaXr6L4eP8MY3YCDp2epwVnSm8Y4xqCtUeY1uXnebJgsa28TPNnJ",
  "key27": "5hi4rBkRsRunU5WNMmsu5rb6yAr5s6S9eiiUub2u4EkSkLMVquxuJcYv9suuY7B67ywZkVhKoTwMmkMidFQ3Q3F"
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
