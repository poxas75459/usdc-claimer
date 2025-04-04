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
    "28wfpDYtE3STfWkpYcV7AH7hqsxgWaxKwuvCYaMKFtkc3LPvG5RfrNataqhierdycsBvp6aMqXcSEjQVi12rRyis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pnzLoW7noN5iZz3L9aAxSDJKLDZwR1b63d3daNysuvX1tXv95nM7ztn5zHck43hD36bG9Pu1WoLjC1ZDJbJGcxw",
  "key1": "4exD955miCJG2y24vAJVfQJEcwsEocT1r5RNU5Fn3Q1igXPU9s9QKBQsMT5sWRJ3pqcKyyehdKLQgbwQi3taVw1E",
  "key2": "4xovncBU4Jg2jC2DsWq6fqQj4dSuMKdhTxtYbMf2Z5Lcww7GSihzKu8QcuUg28wTHuyqWPvezRMzAUhtjwHuNhbe",
  "key3": "25nJj231pMNmnxbToRGJ94KytXvfAYwBPtG8zMM5yZH4ngjT2dvfvswfSUR2eBuJLpmVKYY6s8zvNmym6wfSmkhr",
  "key4": "5xmC84Z5Y1cG11dnddmmGt59TDKqanmftD71FrPviY3VRiyZPbZ8FNua6C5hS8AfonJZT7vR1pn7dCMxLCEqrkFb",
  "key5": "68FPGF5xUqzWVqJ8vZgVAsivmLnuvJc6kTUSLYNvEeevi3pmSMbHYjRqY7neYhGi6TrxS7Uj2XxFG9RK88sHob4",
  "key6": "w13vgWHyTMC59Ma2MPpPXa4jvNtJ3Fa4ho1P3JaHRYbn7874Wk7X5vEBQShnwRyd2eH9ajBX3Cw7j8wGncwKbWD",
  "key7": "3pmnZKAjUgyycB3xqJ2YenshEu7fFGqVBUdxEYbyoFT2wBbW5wUTKDchqeWyWSsy5iKEtKX21paswfGF9q4wKRQs",
  "key8": "4mKTEx1ptXvhwc5edhSaLh3BYaM5suR97vuYTNaiCkyuisRFsTTd6rd2XMLjEXi3bqGDAQeUKwt6RyNWycTAK8S2",
  "key9": "4cvXRgbQdYjoR5CEAehrvBGpFipN7rBXbzopnm7WyHjVSXVYUcQFBxSghZG81eCK4Y2j3UWwDCdsUwkjKSriWUR7",
  "key10": "3fEgSsSNf5zwiYTNjU5rKRBBHHvKmZhPeDFLsYp3WFxr1Bfvv47UGU1t1EHfbk6bezyoV96ogiWMawG95XCnmbXr",
  "key11": "5meobBqBoiNpjEBougMHL7pUxJ4XxcxySZjJY1RoFxQaTNjKdB2J8Do6sGRyHPFSwMRn8CN3NvZXtZMqBP3caTsh",
  "key12": "5Esyc7ToSVtBcfwgPkioen5GhaWxYUvaDvDokoeNahwFufSyUTtVp9tju8YbMe14UNswxgks2eHtKNjr3wLBsJp3",
  "key13": "5xKoU2yXW6D3MFnuNfy1gPnznWSeebD8ZHs4FqpKNYtsNsKDXuTVgVBPXxPV62TPgF1aHF4s2uDNH3MWs39Pu3E4",
  "key14": "zYV83px2uN8cBYu18LTYBY8XSuTcpoD8G7ptxdP7GgkyZ4FcAQTo2zp5ApiAuYRg3gqG8cdoc9SgBkBEP4q4rfT",
  "key15": "5YA1qthXx9tGCWK6t7sCe3BhA5Ea6j7iLzL3ZV2J51RbaPuyNsfLEpbeN4VJg6rfMyp8y5vwVTEETdkkWsm5DJuH",
  "key16": "58kbikDdfWmxpX4D1CJWmof8NSt1kwx7oZooPoxdyxxtAKo5Wi9q9Y9MWJZNWAZhLv4tnJVJC6MkpZtfqgQ4wo8e",
  "key17": "2irt1px2fir31HHurdKyx8fyhW8sgCrUDrKxbHbiXJkvT9dG3GDkWKGxeTebmcgbK3VL1u9xrfaiTFPCiLQ83sSr",
  "key18": "4Wqv4DbfWEXdEQTePwyjyaWaFdeQP3HXJxy1nWNswuxhnay73mmLVmyxyDzM9F6XZ1oN8JTB9aK3iWEA1nFYKG4r",
  "key19": "4iZecuqBe2hAgqJmrCgyzbHDozUBdRhmdZvwX6qhJr5LkCAgsK6g5U3v7LnDtDiS3hzyXY6CAQqgKy9rECY1xHLu",
  "key20": "5eKRb2n84kJCheBCF2cXtE5gY2mqQLfX73AeoXhrE5H7upjHMLDMTRbLdABwe3F5g4QWUAh5Z4j5Ugx3HjsbhJWV",
  "key21": "574mtyUiKdvhhSCPi2h6oytdEct1vd6Nyjd6hbSdb1JrbyzQ7phbaKGgA8CCqbhcANMxLVJFbVqH3nYgYgYsPkvE",
  "key22": "3td159QaefXLBFeBui7kkfMozPzDtizapPJ98KmxBFuM8aiP9xG5jsxogZsbYKzm7tPjMhxJyVUwksKstBSqu7CU",
  "key23": "3k6XMqTZjrgBFZMLLP6bvBmPaZL2dDYCuM6RToNMfmVDgBFqpQYknaRfEXsygMtGBmKLE4TfBGAs4E2YmiNck14t",
  "key24": "5Mh5DQ5kNgVsKhDc6FmdQUqg6avKh15jjFyRndKhnr1bbg86R5tBXQ2h9wBkZn4HxPkjgTCHpRKZGnXh2jUbDStD"
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
