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
    "2Wwn9Zd7218pHwYsmXbS23ZRrfZMk22n7G8QWz8L3xUagPvTWQpL2XviN6u1jvmSUcVtV6Ynb89eB8hsNqsS7dFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59bK3ZB949TDxwdXqCd98SbPQGJZtu29VYfR1oWQiq8fpSkL9FDRKAFxyrgWVeTt5LQL3Rtfo2BmnbmU1A15o92a",
  "key1": "88q5xSkfX51XCF61A7k6xMTQd1jgJAAqT6QgUGTE88QrnB3JFXCWqaztNsAyd6rkW5hiphW874R9igiQG2gUU8N",
  "key2": "5ZJ7SY8Qd1NGsszJF6V1g86jbz6CQ1FRsM8Pokd84vnPeKksdMuxeempGKtpZgVsq7fU4L8brEnrkX9Qx7a3XNmG",
  "key3": "FCGq8yC6ZWfjdJxAr8pGL4othzFDD3jemS4oYxmk5u8gQ4nekL2p9QrVZudEG1zAeTxdL9wgp29vsLkK35TnPNY",
  "key4": "5nQ79UvD9oVcZgXSmr3LKdsyCpiDGYhZiAMLpEBu4o1xU9LKz85KMRfLMtUhX5e2eM49pff451YkgRpp5YXtBiwL",
  "key5": "2PiL3ic5x9v8CBrnz6JMY5SRm1B2XqM5vaFfqp8Z3gJUSBhzz4BsCyjNZTt9hcRke5BkPSowa5aF41YLqo8a86pA",
  "key6": "4TXFdfquZoSxsgSpvWzVRuRUf7HM5cxmbED95iWnnzVhQbvkEzf9t4DTJkpraWddNw52bc9xjAKWSNtLSaUHRE5G",
  "key7": "5Utv289CsCYDx4gXQsZ8f5xrcBWtfde6mKqrPgFjiZUnEn8RzUitmSiWfmLjruKFkTpiYU7tEG3joSf8CQ8VawYf",
  "key8": "39RQ6R5kNHQSbrEaSwYYWUBDprX5Dmd9sjkLZ2231BCEXkhuCaLQhoDmxyUtSHevzoQeLNZsRCHmpijsHbsr6tYH",
  "key9": "2myiAU2Vo1XbXdXkpG56fLpjGmiUcUKRU6ki84soWBx2soGy81oSGkVrZEP3UzepSBSwNFPviZXvPNWhW38av46t",
  "key10": "8VjJLuxm9zK2Z3ufZxcMGh34abpAPfZbCuBPULWUqynuQkX33yPzrDgutxYT2f7hQqz3QtQNuiNW3x5VZd95KCt",
  "key11": "47A8fnVMJNPk5WhoBrMWEo5uhsGs1tEsSbLbfckHfjAcvnVXTv2HtcfQLnhpTu5xpBvmcLbQzkVKuZiAxjwNXyE6",
  "key12": "9ozLfYqaVCX3SbbVm2kQ3tu32eXHVKQP86AULNtyGgMuPoWt69VnFtGF1P55kK4YobLQtj6fxXweUVsHjuxyfW2",
  "key13": "4GWeJtK8ZAXLtvJc5GvJgaCX9scZq1UGoMQ5H6vDCdm5PvvqimGkJU3uDB9W6eD8kTC75zsrRg5vX3UPfFhpQ6gW",
  "key14": "3BvXH65DxZHEMgSu1RgVwTE17f4o4XBEozq96dyj3KuBo9UjHSZRw6A7KE35BdDm2dWyzqF2g4h6AMhara6ZUiDD",
  "key15": "4QUaMAC6uUB5B3V6iEpcktttoEnktNBWnqXGXpdWTddcNoMrjcv6b1xGJB7iewFfvGC4G9SQiPmbs8P8iQmLxr1d",
  "key16": "sjDkuKE8DBgQU5zmAu3EwGwCsG4X2JpjCACRstmb55y3pAkEhbqqZtqoCNGvKSiwRQpP6DMdLn4FiNSZnoeqRrv",
  "key17": "53uhYyMRnHbLd1jZHUzdeefgPQuC7fbV4RkbNcNV6S6vJ393J85hAE8VVQgiPqnNJdRbC5Bowm7HAjuNWp1vp9it",
  "key18": "3yHmjdhxQ4vGhZeZLKsv7BpTakkWa2iFCo7M6N3T8u39fUtgERgpMBx6jZWJ7wh4CH1GtWH19W3QVSHwdczxkgyx",
  "key19": "3JqydaipCC5WwKN9ARpKzdrXpskeCMZfFUsfphr3dXUmXDwPt2jDfs4rjwgJ1HJXRFEiui32d8PiJJ5kpHU7YxRS",
  "key20": "3iSB1NzSttN6UzWHbyQ6qQpjBRgZ3kjaLphHXGPkW5wWw3TYzjN3W5x2eAwMsn2xk11mzmGcWrbuLVLw9hxvUqr4",
  "key21": "TtUVpodmv5JWePbHKWZh9aAZf2H4U1ZuXNrVwf5TYoxpUWyNU5SUzGVDFLTA9fJcXk7adkHDTXdGGyv6ZRGPsbR",
  "key22": "TxpK67G7ttPMSmbDk2Aa5FnpJF9TZ2XAhJHb9pf1eD3n4iuxjRLiPZifzXjpCWCJZS3DpVV4852LjwV5u3wuomH",
  "key23": "3UbDAghhFpTQa8sNKjqbGDdryNHr1GjT9imLWLNUrx86YT3SMaX8Cw1DgUxcTmzg7pu2TfL1LGesmqbgcLKg8XJP",
  "key24": "41AuXZ6rhM1yWBFfuDCGvYNT6Bb5b3QBY7ZfbxVfcAAmNLsCVjhN6BpSwe6NfrYS4DTePw1LrABXerdxm8B5rU5T",
  "key25": "2XDkY5TLn9fpuUHem87PRkspdBZ6tFMvYR1nBAhL84ohSjo4zXUbzugyDmdPYNrKzFNEWP4rLtbUQ1LSoPSN7fzB",
  "key26": "5e85utonCtnaR3yrtBEnbDuamftTwnrEXw2aVNtnCGMTusccabEdH4if9LAjhxMvcs6cULTCmzjS2Ck53DscHR5L",
  "key27": "5LRYFvRUZ2P18HT3YzuxVaqsmWfpQ2Htnup8mVXGf3NZXUac1JqL4ebW2QEEeGpCx1heAPgdv3qLcRNmY8eTxw2i",
  "key28": "5FQBgS7T6VkdVUzR1ue7NpHi87zA6bkMK7emGBTYcfSmQR2Lrxd8dQX6EcXYsxadY2tJAZKf3Tupm4PJXeFxhcZa",
  "key29": "4cJtueC8E2j2PcV5Jb4bXMAQQdkZ8TLW6f17fMwALvt4hU6BbjdbGffF78bjy62Z68YkQ3uJUyXFt4MUZb4MCGph",
  "key30": "4YoHsP56kbWkah2us4yJ3DwES861cFpTwuFBoDByJ6N9A9MbG6ketfF2DVanwj1wowG67VN22wMcY86m1GdyRLZS",
  "key31": "WQea3LCE49zFAXH2wzcTBXRLGbQETQu7MPG8gQjrDEQYn8uBTV6M3jUroPvD6xTFepoqj6wgBk11cvsmf6uoo81"
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
