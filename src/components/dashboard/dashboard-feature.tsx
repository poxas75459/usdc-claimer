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
    "2h2nWci2WKaTpfRNbezeg15TAxfjP5kaqh5yon4igncUhKHduiRgxogiy7JgmvfovvLUAoLpif7xVPGPpnLqrY8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LereLRCxpEFd15Rzj4mT2zgn1W1mGyHMmr7TjKQKBWASXddCSNoMtPxtdrvYTAWb5X4Z7cwe3ifhbd6E6FG1DCo",
  "key1": "2zgdFmxFYvXCCMdTEkh5aEmUa7TiXZXh2wxzQLUkLpGt8Wycah6Qepk9Tq5mSRvJQ7JvmirFdgMqRDVvDcb6REwN",
  "key2": "2Fd3hzn73RQ67EY8mzUxgNasbEVhw8E5eeEegbeVhcrBwKsSMLZ3ffAaCemDurL4fxssuLojZ4yoXBKKqsRbSbV8",
  "key3": "2F5yj34zaD2VgyeHN95BmYZ78mXSCUtidxSqDRyvzRmHyRZ4aC8v6Jf5yU34LCHMsZZ7W8NEr3DqasjEieNh8aeL",
  "key4": "2ioPpypBde3FBjjKm6JCTNzkecCFFTqU16cK7xUXKF7fREXQ26dmraGR4kKHZKUJyFKidcrg48n6mNtpTRrXyWUP",
  "key5": "5umgZvCMjRdCD8uz18Kd1ryqXrFHQEZiGRcMitLGXmyipDTX9nwkT2aTEKBQNRSQSGvysarFnwPHwgjWjJFuae17",
  "key6": "y1PLVbhV2YUa1UvDCKYZdARRjKaDGtxMZnUAsSoHCpjYaNbAFoJ73BBYWvwhjHJmtnoxrDkDh8vWSi8LLUAnRM4",
  "key7": "2qnTtShGrUtrHMX559XuV2hLsRYmMBjTqpPQfzmsZARAK923kZxbCQdF6gSc5qAjKK8WyGYHGPSAM4gQQuo7NKoY",
  "key8": "2rW7XjtZ6jo6cUy3ZVSF21vUFKXZiS5qSYbM6hTHiKye3eHjf5xwtur2GqjNLCoHACri88fQ43YNARjYDGFPKUtS",
  "key9": "5u1yzi3ubQAjXVH17b8M9FL7wNR7MEzgJdHjKNiry7EUXy2bqYfNYMrLPALHLF94SvkSrjp1rBtLuDjQZpXwNr9k",
  "key10": "2ysroeUsb9EhdWiQ2m6Akb5ki7CWNywbPsWNwFXkaddCwobx8w5nfQ4gVQgrLSuczYcdqMbwqRgayVcZjAMFG28d",
  "key11": "2VytQBhH35twZtuJBNcBrkyGAPHDcNUe5sdzuQKMy1fJSpNUWznoR7XfpzfGMBAb8Z9o86Sh6iJ13Kvn5qeh34ph",
  "key12": "5gfPkLYrNk7Ktjhwo5DN8EQKTzvHF3mXWgGD1VEkEtMNGgKK11SMqpxtQqo1JYbNiZVvKXMkvNuAmaM9tSVQNJeR",
  "key13": "5VqxYut8y9RjqMXsWhF7Zni7Xf79Mccjy9PCTzWzZMPubDocZrN9UrhxShAo3ajJQxpPbwixRpJWxtwWcbsNKfwq",
  "key14": "2tQbNgdTtWvyzBWv3XPqefJKybKDQSjfc5X451KxvtBFq2d8VSBDceE2pLgLf5roPGTuouMUddzH3JtzMy3UdjWT",
  "key15": "2fdiFRg1DPfXxLo37BHBNt6TqApFTNon7wJ12smnsiKcFytiK5RJJ2Vk7U2ni2vzYc9z4ZBNppkb4qMBM2xe2hzx",
  "key16": "4J75feXsUDYqerHUCZ2Wc6UokgBdUr7SukpjWY3xeUC8pgSRKzq7yAxLbS54pfLRQuvJJD8vCsKHn1rabCUHLatu",
  "key17": "2AHsBSViqSqxk4NYKqHJAaAZ9opQwiAAzuA5BCGYmAJVY2buFUgz9Q4kzCRFj6652eg5Z3kViufaRtgKSToYCKPj",
  "key18": "4uL55wzHsosdKVXm3EVrC6oJB5XPkRLmuPpoW2Lz9j5Lvf1MgvihuosZCvy1jX8HJbL1psJBqDHpMtS8XXNZBe6J",
  "key19": "94miW3u5WRs4Fz7gydvc1RY9TnztrMEK2n5VFppSSnUqCFAVWPXG7VWZZA2L5DU4HGcQeKbwvLZGrQnNdRKf1C7",
  "key20": "5ZEfUjLRoBEcFm3gKZxvTSvpfRnRq7VSHHEYYvatKHTVhV3Pev9yrm311JzMwSmJkwrqEFmtGwYX6tceonSSPExJ",
  "key21": "2Y7P9M4bjcQtwKLrb3TJvrUn4zHYvWfNdkgniD4sHAPKtgNEZrZM5QS2UK5CfBKDRx1Bc991WGFubFYGuXHWUFp",
  "key22": "2t4FgVitpnBQsJ6WftPEHiVmAUwWUW4Dnes9XcbY9WeDEKXhGuefH2BWef72qFWo9XgnN39vxdFr8HRrhKyaToNC",
  "key23": "5jgVPXVE9aKYPdnHSYKTdeLYy6VXXJzcuNacjeaHeGEZR4iUDtXAZEkowDHGKBdWmoFhLJQQq8PG5JYV1jFmkGVa",
  "key24": "r5chSqoNi9UWEwqKokVtWV5Csi1Cs6vQEjxH45ikdRVH5NGuXJM52bxwDes8RxPW53MPBrdwiru6jM8WnM58cBq"
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
