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
    "m1JviqGJhysSLoTkLbVDXd3Nz9R1ezLcvXVj89tRDWJLxZi23A7SmvjmFf5HFscZsRsKskpWbSFajtc7gAWAUDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XNbSrVG6BxEdFgQnWXorxmy3X5pCRziZd365oniFtrLVZDUvbeBqf5D2J3hcdNJWB5TMrdYEjCLtGcCXPDxPbTw",
  "key1": "2MGRfvcA3FX5PFUGPjotVbc2ozTTXsogP5TPMm85cMB41guZc5xvRERQbkt4s1o47WLz57rnb8QfqHqQXnhMQ4dQ",
  "key2": "vzvZ1YFhjwsMmN9cXnhhcE6faoKwSN589TRXmykwoWxMSNuNtAHBRsgzYudbscd7m2WHhXfDfAjJ6LF3z9H48Fp",
  "key3": "VT3QWAbugb4a4HefPBA9u75NPNTSNoutP5yTBZEMb1NUGqkxMKJpmWhpDuZfVL8VP1GRiMxQhoPdkfptxEzyEBV",
  "key4": "gqEYVej61ExXArUEa3KaidnnHTHHREy142DMeV9WGSurZyM1C7powoqWrjiYQ6h3H2R9KbxvKcDrbFCNKMbWU1r",
  "key5": "2WZdbg3aJWCFdnoYaTgwmDKq2vTDS9ho6nB6dK36x6antSxYRcMZvtcfUqiGBY8VrVskf8oKMuTp9SAxDeGna6qW",
  "key6": "d799bxCiFEjaLhrjuGXCnFcjkfhX5QoE6v3B679iwjARBf1aKAoPAnUUBoj9itJ7av2BJN9bCWBgfHMYXts63ob",
  "key7": "2WyNXuXtXY7M5uxGqEiUMhaVB58SFon8VppS5XQbDphP2z3fmhsibZk3biQ69uPHRXtyBwrp5RHuph34jHHGchYX",
  "key8": "4yhtpbhfoxtvPt4ULknhJopQLKn6XsRyPmnRoGoeDsLm9zFTG9jP2Nccqmbhwn31FGMzeTqQzgj5e5FHi9KJ3y91",
  "key9": "3XcmkChtDtgceGKBZpFfZKi6dkLPErS2QZLCTL2WdnvonNwds5e64S5Wnv3ngprDsjicvCxEDmyiqFP2ViqJQTuR",
  "key10": "2NGfDbFr2mvASVnH5rzAn7e6Jwku2BK6NvcjUMr3m9J6Gcxd7KSMw5j4uJH5UGhAWHFyWoxGtr3kKNNbEqS9Jnqb",
  "key11": "3w9YAEsLkgApzQkTvo9mfafkTK1UduPCZQEYgodxNKmRh8yZ8jXhWjsC9894kTcBYuY9wXczKh3wjn4swKD7Udr4",
  "key12": "P9TyjEt5NtFC42iUToxkKLJv88ZzCYm4yfNWMgcJdxYjh7AraUFmpZPmUDPKWnQWK44zuNmSMHuPtLbz3YE8oEh",
  "key13": "4gCgHDFtV5rShakxHg5xNeEkTSXoaf6BQj29W4myRRpBE7Gqa2r9cbTNFPtGUMt5r7Nx1KbSa6A88wzsFuQJ9zHJ",
  "key14": "3htQ5BACYEtJMqEgQEKxaVUwrRE1MsjvAUqgqnEV5BbUh3xwwCwPtJ2wdtUTf4PH7p9kfWL6emmhvCDYXFVesPVQ",
  "key15": "2UBZcaW8Kg4q7SRfDU4D2tg5BTe3AGrdXXmZBmp9oqhfD3UMmYtEXSSbaFJN3ryJWXwS6qNzwW4pPCaEykB8pAky",
  "key16": "52zzECS9hVn9BYgwvoMAqrN6xssN3KzQi9p6kvGMZomBKq3Ponw5YVyvQZfKaNeAdyhbfnqn9d57FYeBiQkPGewi",
  "key17": "3ZUH4fjQNwJdMeZ56avo94dGGuRHjhUfZYmh3gTZ7b4CTBViQqPzozGeGzZF9gmPVUz3L8JqS7kUApXjPRK633g7",
  "key18": "3BhzkzegosJcV6MNNYRUT3xKvYffaQPKPwRJ8xqiMkikHMroH7Q76ZGeVNmcGgtAkNvjhZoF9a5n2MzcXEGvfrCD",
  "key19": "54dibTLx5GrBjW83swwobeTF5oVFeKkwPZwZfNxWafZXQeDBzrcyoKCwCE9Bup6qpcqGfw1cd79iuDFaosM5YNcu",
  "key20": "4S6gZScGkorPLsPM5WP5qsbkqzrxSb8BVGKai5oibRWQHqju9PyZRYNWFssC2J8vreaNtPGqiw4RGtaZa7aqP4fB",
  "key21": "2TUAZoAxEFVGULHA8B5UfevHMCZWCT45DWGthFKScu2qt8EvWcEWe1QTWLMsHKooknqoRNT4MxVLBZhYdapb2oTj",
  "key22": "5V2TYbEnxbsXhAVxh5YzeEW1oNLBDcLZSjW4gTH1dYsDNGHDtbj4FMHn1jfdrrx7xUkjM156GAxgWk2xMthvTxU5",
  "key23": "64CxQoCKJDyyF6YN9ApfaKJb7EakgMamomTTbwPXGAwZs4JPwSpCgECfzp18wdkC77KxcHqhyPbH86abLUeiVPXX",
  "key24": "2ZvBpNMkKQuECi3SYDWU69R8eTkW8Qpeyd7uFfJB642V7Ai259FzrdjTyqHmSHschsvp5H11gqpwW2GUUkWTQGSy",
  "key25": "36Hw4L2C4Zt7cnnizbTEtkEshthc169Ga29K2nwuwum1PJo1xtNXUUAvZeKUJr5i5u2DLG3xLriKh47thGGqAx2w",
  "key26": "3LEVQRVaaiB2fShzKe2duVpUQSxBRpQV4gcrfkkytFxbKQUfFLdYYHEgKDsnbo2tvd2fRz52Hr56s5WdxX6Bq5Ck",
  "key27": "5gCWiRtq8o5Q2savU8FXwsMGPpHN7hVwfBPfLH7dj9bJyUZsczCiqUDcumqxqjGvdGEKanXoym4vUBv51KndHCiX",
  "key28": "53RSmg9YoPx45hiuvtJ15YZyvqQBcmurbR4Dq3okqwA58GAaaE2iz2SuwSQBdaNGaKnMjqMGpARk3UYrReG9rwEZ"
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
