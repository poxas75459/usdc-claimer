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
    "4ksdtPZsr7NGUC1nqVqv2hCbuFbySPWn6NFXTQsqvNdqfCJH6GQ2xyQEkdYPmsLLj1Errd7r9w4B1LEqdEGk9tWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kcGxc3j6necZnRGixUmBwqp8twFQD2FLnK5xPGsaAX48m1VamgPcH7VLeKWtcVhykRcBPwwoNeazF94zZRcGPtf",
  "key1": "2QpqpuEuHdBCDSGMLoURLR6dRbjm8k9gGcj6h3sip9PGuQuQCWt42thaRgxoyrfEtPX9hKC1YysxSMvs7T6JU1M8",
  "key2": "5QeaMnRU3TjYBomCcn54Yfpp1BVNWuVQxw77ahXVPFC19gXrqpymwy4NZLLVb8qr6vaNYThgbPBChGARPg9SDhKy",
  "key3": "2zXFu8Scchc3mXBvkZgsrjWUcrP1eEbqqQ6NV7mHAPweQBVWZYXnrteeEXZ1P9x12DEsoE5QNFGqLVp1TEpVnG9f",
  "key4": "2UGbZTAGj7uEuSBpSq6cofjJzKGxWRKVRZL7zSWYwygisgWaLgUMRoY65YLZtwLabJhA3iYKzrdJfxycga3g5dGj",
  "key5": "4vWunasRvZShqRJBzY3Py8ZxDdKATE5vHLjPjUUsuQDEhv23bVNsd3TKR8MFy8agEuXJ5cBmzbeFfveYFFnsaDt4",
  "key6": "2XULn5wagNo3zopvJ7TQ46efpTxaTLwhsVM9BmRKZbnPgPrYQvjyMJNZvqJ8iHMUQccm3Xh57pDzF9Zy5uQrVcqf",
  "key7": "3uRLfesQT1UjGovRhQSWzBUz1Jqnagfm1UrQoz3FV73Tu3pnjAtzrmVYkibjcjjyPNW7gRf28RPncJZpqw2M2nfd",
  "key8": "2y8Nc6TTZivsygpZ3m3Y5WhLYWRt3A9yeC7e5ufAaerDcsxnogLZfixLR5V2ky9aDLSxw6EP4BDxaw9NCYJ8Lcye",
  "key9": "5TDSvpUMKFKeD1SvTnugAkMQJ6yZkJP2eNCbTegYh8xHr7bozZ1BYiLYeReBgBBYoKmNKnnrXpku4wrwPL8Sz1g4",
  "key10": "mTs6yjuCqiGogTwqUNF3ruwkmggdWsPrKkq2XbtdpcGwANePhR64Rm7MQyxNPLhAXFAn9qdE9GhWEPxw8yM7qyG",
  "key11": "HMnRAMbC7DyMrS3NAGekipxz2VajhnonDUWWy2LheCKqjf9sC3jdgmNaXK3yDGWvbooqLVdyqtmSA7CytF4vnk6",
  "key12": "2R55KAv2DvcjpJto46QFEz3W4NWnEZJSB7N6z3onz4mJTmMRMKsSjwePrd1NmpYBpSFVSq5g7978ytq5AufgWyqB",
  "key13": "4fwBbRLGq7UYvUPRQZU7xJAbmNqAkyZmngpbXUTmcY9Ekt5Jtd5YTfFfyooU7VtaT885oy6Eh7DEkk5Zd8AFZ4cs",
  "key14": "3sTRNdtSmaPdXJ9oEdzypm8jBALPwXbtEnGrzvpGnpGDfvMZvaQUCuyYaCdokFy2MvqLin2u9tUhg6kKQE8iuEgF",
  "key15": "gCUa7PLB5C1jUsycBwS1UsKizsHoeS9NoSWG3a6ph9VMF6fGUrBUNi7iCXejujU4Z9ckcsk7i64JkK6Cs3Ek4RC",
  "key16": "VDizuoTRJECbTpDP7Mqk1Y4hYV8oYjCrVSav5w2HXQCZhyvM86TgKKdeE3txCEo8BkBFxxx1Y7q2F89ydL246YD",
  "key17": "5bScDGzxnmjwCfrfKhFkvqskWbvWZsBTh4T1dqriCvJBiuEU2s1PqNCZy2hAroDKabPgm6XPCVr6GLzTnh4qQHkM",
  "key18": "2ErqzJ1CBsguSKqdt4rtkcKCTpzdKHAK8zYheJyW5Di1k7iGHHzjLVGAb4AKqzi4cf3UEhcuintxVju3gLdZXUsQ",
  "key19": "xP7BaDRFyPdspUriWpW8D8C7pxdNA1MzZXJ7MWv5SGYhHGugrYUfmSKpACLurhzdJTtedts1kFazk7A8hK1qQt9",
  "key20": "51k4WzDd5E5rzejRFS8eMoDygx2z9ZoFLGjHCaciMZyH8ZbwVknggLYoaPLmF1S7soxujx9mqBAS92V2kdu37LKB",
  "key21": "3kHYrdWUPgFZbdYBqrQJbm415GbEFXA8WVfeAs7XHPzuVCf9awTKhsG3YE7xnbCyPqrvSL9afrgfWC2f2MSi4nea",
  "key22": "5L1E7burh62ZvsJtngfZhycumienVGWenFZJHqUUPFqZKEyyrJB46DQLfQBVAzgVz1msm4cuDs25Re6yWZ8yxuqo",
  "key23": "3eRSaeHHNcKq64ym4hntFpCpiD9BVV5kEgFx44gLh2swrks6cYJK3u7bsQB317pakVywc8y1kWQTs7y6RPzzAkAC",
  "key24": "3cknLSiWCQFNpMkBvR7Gf7YQZV6iNEGmZqTcBE5VA93ywi1stF87QR8CVJ21RcqADgxRKahqpPH7qLBbLDo6i3Wt"
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
