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
    "2GNcwhobjBo9suy48XHh4D4HWcMCJoqLNvqn8iQJUKvvPERCGHoUjt1vaGL7wcUezi7F7pY1AKSvb6BnGAW9mTUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VyQr79Ta52n3DQVvQZETfYsfgdzghk2PxDmEqtyHcg8sr2rX3AVTtQagpYz7LKRVddAVuyrdgEaXADR1ZXgu6xd",
  "key1": "3nXuxtRnRQSHY3VYp66QykZWeeQdL1ScEuJKArD7oMEWLsPCHWueomFeL7N9RweFtp3GUBM7GwD6SFREkBJoZYYJ",
  "key2": "2wC8fehuQWKht26GdYBci6HGMJTAipMmygfgt31V7PWrKWsuGfEx8agsP8j42UuhbHetLdMqntB9TEDsAwfAFoWA",
  "key3": "54LRXE5fo4jYo9RXeF2a89iMQEh8Pq3mhNp7GrSUmKYBCgzhjL6dwW2njHNHXcyB4gz72jAYBHhJJPZth5E4z28P",
  "key4": "64UNhVDr3xx6kRpqDq2f5uBre1kmSAQ4GpeD87sB7FcWEvGfZmpocv897XcvrfiCLvJjJ7Pokqr3LyfwMcRusjqR",
  "key5": "5SmYX2qQvWPwMq1DYEBkQn5jfCGB9xU7NvZUfFh4c3AbPLTrH6qJa2hw1TR2xdRcNUnVGUTNTfcN5HmYHNsf9hXN",
  "key6": "2D8e4NZskP57LMfzSqqmNqV734xLkzqrK2DfvgDAhHcqfAUs7SUieUnks9GrQALNg8BJisT2AUrugPrimUQZtZyi",
  "key7": "Wop8JnyVSNuEBGyLFd4ejGtaKrpv45BsG7PzKJmzr2n5LFFCitQFvTKLXs4AW2c33Q1Z8c9KuZV7nA1F2ktJN3V",
  "key8": "4rp6YrAyYWfPZ8NvuyP2sGn1ZvrPtH26PemaF3Ha5bxLemmUCmfsa1HSatFa8Biep4Z9YEvoucLVmo99DCfdGGLc",
  "key9": "5F9XMfcEgdo5jEsvnrYezNJMfaQYwUjEjqGFAG3VQvPFsn5ALHGMADTx1LRXmg8GMpNGRn7UrstUfoyqWtumnivH",
  "key10": "5dMC6uhmH3FiGKY5jFZ7FYXaVkdJ7uygAN2N7XsT8tUu9eMZvZjHcD2hdAeoBogftnpLkZe4ETfbKnuqpCsBgEz6",
  "key11": "44QS1pBJ6XgfNfYez7WcnEMU5zcAeU8GnZZKBMiPqqfC2SNKbFXJdo8oZSk28s1WT3Ehs6xgUCwVJekyU5L6AvwB",
  "key12": "4oajEir3CpDviqeMMpfoXa5AX2KqFnPDMLDsKcfnwSjJdEzkXL8GU5vzu97sPT2NiB81rSdzbkKb9GBZ53Szrday",
  "key13": "5Ab61KiA1vEU9RehGfwqTMUrnx3LikZbkVFnn1jbbgEKsSjWPQiqeA62Kb81G5qj33Qy8PNJi9FpKSsmc9sp3hvs",
  "key14": "HCeuQbdnitczmwxUnBadkC54Nokd9rEfLHMLNxBvwGFRJziStcMxiJYv67XswiZVf87x9kkW85QjgP1j4JxsP4F",
  "key15": "2YtGawkQi8GZKWs3bSMzJ4QY54rb5MYoqiwr7vN55DHKePbd5YoTbZvhneDsh8cZtuGaBQUvX796SSUAinKiqRdS",
  "key16": "2PexvkMNEnCqoVFUxf4MT3WLdHZNZqpYcuSbpx5YCj3cvaZCgkQmWui4zPj4LKpodfsrYGFHqhbykwxXVrAgNrnX",
  "key17": "2F1aEp82zd9rogoYLamfXMyiFQL6sBnJZkHvXJc42g4DnKUcsdb8JMFgUE4eHZs3rxwTjVJZA1eoBrp64XFURUGJ",
  "key18": "GNmWnyB1S4qgxYX7WU5eEbPCB4onXBPtHRbsxg399NeH9nNGFH2vVsZEXhEF6PLc4JnZiFyaAfDBXsii55j9SLx",
  "key19": "3jzALvDhiAeHT1pNTWi6cLE9sBzNCCcxgZkUTfEa3hhn3KG29DpzTD1bfUj3rGCCa8duUmXq3QSiojSxKTYYLNw",
  "key20": "eEfvWyHLpihZrTRNiLe7SaE6ybCPu3crMZqe1ajJrDFCDkiAju7GUSen8zzeG5dQzCB7AKqGDb16zJnEtzeookp",
  "key21": "25q5Xtw1eeUvEeS6zd5jEkKj1YruYoguJTtmDTrFtpcNZtadXWQDrHvufByCmcZeEkvKLTydXFrT3kWKXBj3mYf3",
  "key22": "2cptut4YWfrTTqAJnQw8iMM7LWmJS5BWsN8YtpAAcCeqNS1jh6HGPdfbjkrYyyuGL6zh2ZUkkqXMt3frYybiattX",
  "key23": "4WNorBQn3znSMY3vFSFwUpCmzu53LY4JW3GEmRoHa88SFGFJm4QgG9w56vDyoE3RoCEf4i8kidBXRbh1QbAC321t",
  "key24": "4W1i9qqgYjEhH9wbJBLs8Uu44L2MbBfSQHNTwpbYYoJMHsiaH24132pndeNq16YnsazPhfFLZEqmqEYtJS5TcK2W",
  "key25": "3iUvL6Uozqq4ACKLPNWLGp9PQqK52EBMocNdH7EVAgo7NvAuJNyF8U3dzHEbDjzrbTRtpv8hviRH5e1n3pyVTcBw",
  "key26": "v21GXf7tWMp6vwd3y9DmxnSJM1R2RUEdidFsDsfUmRyhYCQnsXEwMGxrdUX6fDSvaQFccNTECFeHu37J7uM7o7g",
  "key27": "317UaT2uTckVqAT8eqJEvCr1UECtnDbTDkN1EjmYSBf37CJVMjqxJfXWY9YpsHdLJsPn6TnmipsGgS2oNqtX3k3z",
  "key28": "3Gj4iQ9dhXgjFUKuuyFY18YbmjsH7KxnScmprnVe4XwqtL3BFxWfshhxd9bTUNeqwYU2Un1b51GJhB66eP4uf2xK",
  "key29": "k5CoMRYeGkVD2sR3raboUYhsdQrZyBkTDAGKptEPdgF1abMBjAgcEydjL9zWwMF5hRXCzCYAjxDtpC1UUh5tDtU"
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
