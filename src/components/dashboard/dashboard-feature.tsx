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
    "ie6FvwpuFZcpXpANrpw3PrVTSZM6jXCDvN8gnVxXhmHu1i2j8TZJPvtqhEj6VTwHCNc17rxHK9TvCErcmXwwBYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tc9AcxLoYppgw4xnrhaHKZg6ztob6fDcRdWMzMgMtgEGrB96Cs88u4PQNAMRkFYKCwUxjUsfPtN93dEQX39xB46",
  "key1": "6F1am2TynwTcntKcWcdJuf5eosKgKrft6BN3MhgircEgzRk7VuHFjDf5svwusGhD2LwgkytVyRLwHGBRMv3SFC6",
  "key2": "3SNHkfuZquw3CW3FGSCQk7xthtwjjJJR9HM46p2dQY4fbmRXAWnXmvD5DaTvZ8CJy8wrVTMFhQJ5zM7yuiwjUpj9",
  "key3": "5ioRaNg66CrHtgCMdGdi6fqSkxS9xX9Vo6WMGym6DZUgYb2ZrPLuMywLSR6DURJPaE5xaMuBbUcEP4uEyJRBjibb",
  "key4": "o6kLdLM9NQCZJtV6R6nTTd9KSoP58cCfbwzb6HzmxBDzMeGiTXyHQQTbXWTShSksxcmY53Fmf95aVdFcxtKd55Z",
  "key5": "54sExKeYxGSHiuh8vzag3xrChMX3pLLbX6eLQ7eRpLMeAhn2a5eekhrEpfQkJLhYQv3o4Hcq1JRmWVV4hdGzRy33",
  "key6": "3Hu64ABcSv4tUE58Hc8SH1NhnpxQwunV6yonYGk6eYG5D6oyCuvTWZUr9AcSLFWUv3LX5mWF7RmQYd51LxLB4fKy",
  "key7": "3GvV5tva8ZmsrTFCwDPEQSNeR1qm77RqX5R3Ro73cVP8aofAR4i9Sta7uFS15B6VyVnKZkJqqdgQqC9F8biX92m2",
  "key8": "2cHzmvEkwj9dHR8yoaCPk18DggphxyZmJiBfgYi7tLZPx8ov5GFhTo45Th6SGFjLJZ5t9h9RnFecDprutn9ZSJ9X",
  "key9": "679Lj9QR8LdBnZANjPzb2abK7ptzGThsgkaNs5AFEEJgkauDBzUTQoG6JhS2RjSVz4jbbPja1GX9znw1UfX9hyqy",
  "key10": "5Ff9Y5pR9ZvH6Sp3VSiubEsaTg5jKrWKWuXvgt8rDKdiyzsW2jYUo3PzcAJ9LViqY93uUX8p99qgzxVp2a1hFvT9",
  "key11": "PmEncUkiuBmBNa15d3YNAi8eKhTrj7ms26uuRCW5sDFJ69bXdt5HwUZ6h5uKNRTSzUkrzCVfjA9rmi4XNQm2QMs",
  "key12": "5R87WTwkmHv6XEo1eEEhp91wru17n38WGQtAmxZB8Vp7pmu9wdiL6ZTitbaLyuwNXC8c1zaxsazFFCjBuf8i4NLX",
  "key13": "5Cv3zHX72GWGyc3PmvBjMKeoSQg2uatVG6UtmxVZpZBgyuzsVw7UBVvbbmitqrM7WgGNLk7HndzhYf7Kp2D8xoAN",
  "key14": "5bhUnE8oLzG6MRBFigMrkZBKa9mZKhtAjFEFnRckXkd88aYHT8Hr5ZdaWjQtAwQVPwA7e5dUPhz8KYgqoNfzXHS7",
  "key15": "5fpxtsfiv8MPSLmqKZbzJezmu1RHszY6vgYGE7jg2oJsS8NLnwnvJqo32fEE6it1nHHaXfSAfZpx2tDXQrvuGYdX",
  "key16": "ExaXLQVTi573qrczEgB5DvMcf5KtzYJb9MnNW2qMamrKLAVBFU9Hp7gJjW65ZRgdugXp2WW49ygKiPHpjmD1tTQ",
  "key17": "5Z8niZZNVmxCw8cBZH7oSPjqxjZhiLph1xQmmajTJFXP8Dctd3G49eFVSKHB9Js7u3Jy2rwT8SaD94HEDAb5Vd37",
  "key18": "2294ro4MHRv5qMYaB9hCHRpc4nBLhGeGwjFQLxgt2oMcqfdNfSBAG9S8C9jxZzxdd1KdoDrT1tUTVFeuefPzoLk2",
  "key19": "33ukFmCEWme8q4rqiXnePW8bXmVR1UhmF8dnHPYZtiSmVUXiGoMxEYVSsCkKB8RrXcR4LNCLLMdGMF2HF3qeT7ND",
  "key20": "3rsDJSFJJyiQWhTCXcRV479uDfhFN2ExMepY1TndJXDKGqCx35WbVSQJCesBn9VispBu2rBqbAdnVTRXnnvuYpy7",
  "key21": "YcixehxyE6WKTg23FAp18WPCJ6DBxRvxY9gjTV7HtsiyoqcJ3izGvVfgSxuMLbNLDfiLwPkZcG9WCGBDWkkaSpz",
  "key22": "3EzXjTP5gAy9kG67WWEBqmzCQvNkTRLE8v6pCFdqGjxUXWVm5KYqjKeRyVCjfrKomrXvqZwTJaV8wNDy498pLoDw",
  "key23": "31UzuBRQcJtSWx3QSqdsnhiX5vwFr45SCqQZFADofQ6ByB5cQRNQH3BB5SKwcGK7nzXWJniqjxQ1k4tVvo2b8nXb",
  "key24": "3bNbahiFaUHXtumvuy8ciiJukYyi2X4tfwJDSdzHhFyw6R8BChVSwE7TriHUYh6G8r5EZwUkMUXpyPWCM6p45ozN",
  "key25": "w8YAZYNn8Bu9Q7u6gZ8YNVcx8p9tZeUPYSuUUjq5CW6RY5tzXxwv6TAyHGFDKKk6bXuqCBmPZB5pxqoD8P9MAXa",
  "key26": "2eBhUHe8emxHRS6aXDGmpxrSeBoMpv2Wfq5i7594JPvnaYnZ1GpWAon9WRbY1XC9XSdhsk1zrPVXb6tgya8aNN6g"
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
