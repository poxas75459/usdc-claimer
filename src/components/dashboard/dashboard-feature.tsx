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
    "4CSURDyRm7PRF3fcHtkapEPcUHibP7ttJTcvHUFMFuHztJkutVTSb6dYi7mk6gcaAg7jTLLJEjpYBmcJwY6w29Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CpMVmZ8HApeNkYookezGV5DNcRpQ7mSkKRVMXoWtFX7ah6b4yymJ5z6qK76ZLmtZ7XZkgngGcwwm5rh6jpDfJq",
  "key1": "2RP44daQpdjpdrVvan2gM8zv5KE9179FTncUETy2SGzQNRsi3uq1xEjZftk7Ab14Kx4qS99eAi8hnDRfGgSJW9bS",
  "key2": "3zbgk7vDhvrq65S85cN3udqaDriUXnj1NwTrD9QoutSmavapYMKxYuYkxsRfCqE5xYz6kNCadECYSuShZFZfpaas",
  "key3": "nRo6apt1DUSjpHBxyJtGybpptAkrUoFv5XQaDwnQkjNuxz5gwc2jw9hGTCi4QKD4Xa2khbh5svjWeFYCzRkEC3g",
  "key4": "3hgyQwYrh7xNYGm6Rf3TvNgyXWN4kMPgHiUQw1ymWwvc1xVsB4ctNMNczd5uVt2xz8S1vyqeAsUs9osbgAhCxEFY",
  "key5": "5cSWBv4Qz8CkQkEWxeHxNcCQPHwNBN867cRG28uJngQgiGufqFLAp4pKoB7xsEKYVAny5WdEyoqjQyvSKTywGsuH",
  "key6": "26Mtq3B6LQtAAkyWCYCqUndg6vK643uXMcnLYcYh4e5itzKGWypnVLWfCjMDPBa6QBN2nhpvzvfnfH7XU4fNP7X8",
  "key7": "4n46QJa2MZhb6WQYCFjp82bKkMoKC37C5FQEHNaW87vQaeaRkPKhZ6rEEcivFYQKXb6x9S8pN9mL8DaSMpJLHDAT",
  "key8": "2HqZpRfMmwwvZZvzNh2DMEebYc3RQBjr2G7jTEMZavrFGwcQKSM8QdDnCQFMWWXe5rwWCyiiZPTeNBsZUEW5W8wj",
  "key9": "2mZhKocikRRyNuRfbWzxiWSp9XjSfS5Vh2GN7eiSwHBNcwfhmBPaKE8aVtvkHYyCoTYKKbqkHxxsVJLkWSqR2wYf",
  "key10": "2AJXSv6N9xEbSRLxRud2sdsHbuYgxj3Vt6hQh6UeRReFxx7CsstS2hjd19eVrdeYmyacdi4MK7d56oFhfcj6aJD3",
  "key11": "2eBvsMingZUbs1TzkyVFHw1ibchmVAvz2SBnbw8Wbb1pVSKibYxsARK3Pdh1idLNMz1zFrXK9qtGF7GitrWE5T8m",
  "key12": "3g9fePWqKLKayRoHrDLd1hLoXCjQaDXBMfj1LH4wwLMiGmgG6wijpGVZoYnru4ryp4vCUvnEM8U2vHc4NQM6k77q",
  "key13": "4YT7myznmjr5mMZUq2bUo1LP5fJLvePP7sY6CJkucJ8BsBgdxAbtCYeHkQiYKWbHNszjKZ4pKGEd2yv9s7u6CskV",
  "key14": "5bHzzyAGSwQv4vT4TVN3gxCWaChetdz1UhZWR7AtkTKTFvWpdoecrNwbpV4Ga3sDrFJkC9EFnvZsn8mLuRNxXdu7",
  "key15": "5KpYAbZmfPxsUC1AJCsC6irQQuMJbBBkCBzjwZs9B22dPQhj6wDWAXWygmX9Pu94YDzmctWNidxBNk1cUSUZLtHr",
  "key16": "3FCYTiA4qWRoDJv9pfW7MDULd68tUtcCzM7huAaRKN1YbTnAibvu9GvmjhYH3FRqjz7NLJwQvdtNTtmQRKdLZMHi",
  "key17": "48Ej6h1sxwXdtp4KfmaijVgcHAwxvDiVy48MdaEPVST5uneB7H8kv73XrqncXzDP4e55r5uK4ugbk5SRKCESKG4M",
  "key18": "3xDpvSbP2UBgAZ9QJ1nuTMkWqQye8vKhs5LP62XDkj5VVjNaog256ZkSBVsR9FUevcMHCVHkRQ6YDLViFJtGVb5S",
  "key19": "3fgdFEFQ7bBg2W888KkXx9Mzez3XTS9PfxzK9QUznJbe4khBqWXiAyFLiuSqwxv5Sho6WBadB8Xyk3X2xpCAXrD2",
  "key20": "LZPDLf8PQeYyWt8F5NJgf1ZY92HNkbpRKAZh7dCokVg6a2fgUywhU8YZ5RqNjQZaFTz9rzfXtPsXZt7b5BCuSLu",
  "key21": "2T9BtqiL1PJHGMbSeU5N7UNPTyrbcqhH51Y7zduVm4LzqBt7aMY2mcQCUz5mpy15ujy5KcqnQX4otaDhPsX1F285",
  "key22": "2QhJ7Rwb8eDX63qtjn5v2zk8HvWPpxYNgBwH7TQ9fcnK8vFaUmT3D7wEboMGPpuyEQFw6xZ5cpCV8VrEhb71Vhox",
  "key23": "2EVLTLToE4n2tmxwYfUwfezkXdE8ZwaxByYQS2wvUxLgd4uLGR396syHthPVUALcFG6bbwkK8oKDhpEgJBUVkyvU",
  "key24": "3appdSmZw1Fb1Vqy7raDT2QjeHXhraFMC9aEs134afdvVUFeR1cKsQ1ev9pG1yBTHMdVQaBtiwfp4FR7ZxhkbSzT"
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
