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
    "3muuR5D8GgHoVTsvDD174BSSv76sWfd381RWRroCe9s6exNV5mkVM9gqYvtHyBo7i4meCxtSmN4jSFKpn6C7bFxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RgTX3noqFh14XRSJeX1yhHdGu8rDGXnDPs93qHLG3KscJDtDJgEsjSsN2HBsLDLWVMAJyXA6XChxmfExGVHrsNi",
  "key1": "54G7dEWGqhodWSdwYUzG7Ri88mdGdDxmjhGcb987AwRFRMG6y5zwsdkMyfiEEQ6kTRsWTXBZS7Sf7Znb6krFp68A",
  "key2": "6vY3L1vc5Gq5W4zCd4WdwYDafTQmigde3CMNgBwTzENN1QR6GC7VH6uukbq4M6viqRSex7GuDnFqpUr1VtDravo",
  "key3": "29s72XxYJtfmXETeEFXPuJqKGGBB7NNPsFWFBwuKdH7FXBFqLkosSJMGcsoHAKhLNBVBgKFh15u9EqF5uhauHaLR",
  "key4": "4CtQEHYHnHutbXbDHMRfPbRnbhWMkSL5hhGfhBZn33ZJ7mLA31sBy9Qx1SsHgEa4mf8upkxMAFajGkk9ZzqvjSFF",
  "key5": "2DBmYApY3pm8tznYLFhdrnXGjbrCZ9fez6HiQ3mXSdU4ME5ErNryXkUczXrdtm6zvJ3eBnFV8miesa8wTw5hNp4q",
  "key6": "4vuKvm25b5BjPYVwgKNQqJmpJXNM7sSLBMQYZvnfgTWG7ri8xDYdAR8dvD6fcCcG4cR3CZ3ChrtFjXUtTYt5D9eq",
  "key7": "k3vU8aWmAgYbUtGXnsdrMEiavb6ow2kKBALK6ogWg8urvkdCiZ9QHXxda3DqoApV3WtoBYUBX844HvVgsAFUFtG",
  "key8": "6TWgeFMWptCs3TF7NeH4ZQZEg2QtrisaQxFbC3xjfboDxeVsTpaWbw8Tv7duTNFvQP9sQehAa5raW6jBraSAZUh",
  "key9": "5GADzqubjtMsS5q5btEgEo7QkcXPGoshubLUhhNjhiY79bK7io5w3qWjkwG9CKNe6a7L6HqFtR98MMuBHLZ6UKeC",
  "key10": "3RdFu3iXb29YmU65FmbXBexkP3c1m8DBL2Qs1CMKWhVTPx1fPM1bRh8zoNdBZx8uRDvJkWRc7jZoFyhTck4VwCRR",
  "key11": "3TiYmoQyDig8qTiARZzXFhEhroxUXgdZadmyZVpCCWzycPLgQHVWaZvYKqPHMHcJX4ABoPAyb4CZkyJqdKjsBUCU",
  "key12": "vHYyvvA7A71VKj5o932TxxRHyVcGqbeXSqp5CU39qj3dEYtGj4jwsKT9rWp3rozspWBuwQVNTJvhcLjS9ADoHmS",
  "key13": "3yjHuMN2Uf4diHD1ojw27YEEBCDjiHksBXfykaaWLQqKYPQZNVrmnZ3p87QZGvu5kZqFXb8VPgE47PzFLmbaT74G",
  "key14": "4p5MdNS1MjAjNCKZT1eQuk6jpYTJ9iFpWbPtkwBNmWQzrxVLinZVW5inajgft3NCMPho3zB1qRejeWV9qVU5mVJz",
  "key15": "2miQehvGqamuv66CDRCzZPhMsHMAEWefAdZj5pQWYY9tksHkcTEjPDbhPPcvnPrA9smzQ95AapZDuZuuwJMumf8H",
  "key16": "5aePP3QWdvCfqstqCvaNQjM7oQbZBAhbGh8m5ZpZPUwR2ieSwcUsztAKMxB3TKbRxcbLzQs9PjYZbNYoFsYiNEUD",
  "key17": "2NhwvtJyH4jvGcv76jdbEkeqGh1r4LBPZmw1nb4dJr4ESjXbsgQ85KiGJDXCGVZpVc4KQwneUaD6B9B8YGJnaom5",
  "key18": "4JVAVdpMbB9csCAe3kdYRYHyfgfjbCJwzvpjYJ4N8bjRkzaLeZ9jth1BRTKLVnXqSa5MQwpN3hmrFVEyhdicRqS8",
  "key19": "78YWsG4vCR4kzpN6LGv1Ek4AKuNQuS958TkVGX1pgfPZYZ2hqWau4ewHHDkzaGPjxU6nx1pjBgDrCtMwp5c3Jcq",
  "key20": "5YygMfy76oeir54j9oyrvu3NJFCWkRxrmFvwzfoJNXRWJ21c8WqNFDpm7d9jbEwGNazThRbn7D9fv9z4orMU8uDj",
  "key21": "5SBn9fXMv2KqrxpPNmWLW3TyDh8nEWgovpXQ9g37HWDs6Jpp3CN1AgdaEDgoPVD71hsUaGLD1fyrUjMnER3iccLN",
  "key22": "3bqNHvJT4nm9DMTyFJ2SN5VkACUYeCcotaK6VW2QW2ha1fnYJqGrESaNvdkDQBcuYuwYpZxkLQR7qRTPvYendLqt",
  "key23": "NNsLLd9geNt8TkEhmTHZgMumXxKMB3JY13wD95sbuAF3z4mQcRxgmfCcvoZqXc6znrSLpizYhuViaKnGVZ4oKmt",
  "key24": "2cSvS6ybrGXN1kkcKr4C3rMFLUEwBqjaqaNJVU4poErPCcXTdrdyBFHZX19aoWKPsRHdMcXZpv2YhUHN6kxwoh3R",
  "key25": "42dodF9iKkv2p23GPntpEY4uTfJSzBLYc5WJEwL9z5a4YLvNQNwoxXy4D5C6fr41fN7DdJVC9sTgz6UAuyHLs3jq"
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
