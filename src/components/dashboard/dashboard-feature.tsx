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
    "CLQmCWbiG1Gh8bQxfDDZJWTy6J1aGUvxqk9Q54KyMQbyqFm42BWsYQg32b2QX9Ec52h22JK1QnYq9qDY3HHiEKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzL5G39ATj4rmFdBHF88HiE9DcyPLiQgwxWc3UQDJsoq9awVbYEMmi1j4Xp4irhAhF9h2DpqgLmyxN1nrv5omEH",
  "key1": "24oEwgYYzoda8U6hE5G7A8FVFeBAWXthHdPga399fJ6yDmFtcvvRDTuqFZbD51AsJCwfJyapDCboCEDA9zYbynbU",
  "key2": "3g9QgWsW549igfdcjCS3KTGPUruyexUfmTbfhEz6jTAfKxtWWUubPxiYmRfkfRg45hS4PA1x1tSy5KxmVvGYGuw2",
  "key3": "EwbzwUF28GYyRNNUuaHn3wojuV97Z4dMCvzDXxZzuWy16QJivsTEkyGVCbVS8N3GBdh3jD9M4U7Z8JnpxcrhMvX",
  "key4": "5W7JtyusiNbUWALCJheKTDH3GhfoKRHTYA8sNPS1c2sTVjpiYCBJUVd7JACTJL2o7Ei39Hj7yDEY8f8GvnQ6mfBy",
  "key5": "5Gv2iSURhqNzfMjAsVkKNgkGfh5ec5mkCD7KnvKWhYt5acm5JbWY57hP8pkLwtgC6p3RPgeJKQ96TbD1y64qxhK3",
  "key6": "sQwoPnXDYQysR1iTaXwUchu3V1V24iUujKNDWeNN1c3EwHeFCzi6S4wrMSBRu6CqYUaQ2spTYFdyv3YTJMyXZrZ",
  "key7": "HaD7t9ZyMTLJZwb6QfPMK4Go1z5BNBimuuT1Sa2tv9xfneDuFqeJdgnpF2WaajmKTPn7VTqH37mHWT9b8rVcFdE",
  "key8": "Xp2yCr4oYMXT5mB4tita6rvcMr33YfgfRYFAKmRRpABUbzNXW7PcF3BV2Mgf1hHNF1eRGusTUitSyKpEurKGX4n",
  "key9": "5KPhr44B6xzG225qnXLNwQ23s2dPdNLRCypH8V9z4CaZ7gmQEKAVzULF4Uc5wozp616rpEADgwtajE6mTxqJ3M1N",
  "key10": "ato8Rcwr8Eke8CWuCzggh3ht9Mn2165KYUnr16yzCtMxsWfU4BsEkdLLpyhV5iALCtsiMmn3ihSNCvTgusz9yPh",
  "key11": "2zwk1MU2uBpzEzqXMdcKxuv6q13MpGb8b6HLRRu4GGhu1aRjRGnAmdEenvL5p4TxXCRAB3UiSsW6V4nLWKsfPn64",
  "key12": "2QwwofMfZNgSdXrFz2xfjwE2xFuLNRNVVd6Qc69dYhMoJ1PsEei6uU9tAtPbPsrSgrjRtWcLgUgq9jUKMfFqr6cR",
  "key13": "34Qgt3MYYQ6Wy6orzQzuQeb1Yuv6P1jj6RmHcJzG8PVNHCTXu4Ad8MKpaKVeQfrMnHZMQeXBXwJ9gAz1bt1r4mYL",
  "key14": "4Fz7qt1B9SndbkkPbH9uy6WZzW5ZZiKhSCmaYABK1RkJr3xix48aswEaJw18DKLRw77zWz8oqyXYpqSRHiXkq41G",
  "key15": "5Lg5H3gFb69H3iTFaqL36451kQxrduA1Njje9MNyqaiLimZjc9HKEFfozRsKGXLCQw2kgU16pVMeZdxGCvNBKHPN",
  "key16": "NpBzbvaqoHcaygkPyDfKXq8UH8sNL2aQm2GEfsfRTyLmKyCSbdXPwTLLRuUA28GtqNyySPvX595jf2kQVquAz5m",
  "key17": "4coQ1VWHNAurgR5H9irngAoXVCdbyutHVyrieCanhxxYzCPn246D3w9GfQFPxrp8AZReUHRM5M6Xakqt7SoJsJss",
  "key18": "3kZPZ4pkhhHYnhCKLoPQSsa7KSJU3EkqWoagnUwexdFBJg6WResmJpVzND2A5LmjEixYigqFHA4v2oKQLex2nfqz",
  "key19": "366GqsNQVQ7SBQV12sFk9opYNEXVvc7AV1wQdJKR934Mndyq1rTnfAM274cq7J79DsWiAb7pfWSrUVpj4Jb8jghQ",
  "key20": "5aKDsbL1q7bHYCD5yH5BWiEL11j3EdcjAMjngD4NNngFkZRP3GCq4c3fV3vTfNzxCCk4hEYvUxZXEG7X48Typ4Dq",
  "key21": "X8qNaj61q274N7jhLDqPwXb5dCGbPyrHADQo9REiEw7HMSSgEyiFNLSD3KELHKEbFT4mP8wwqjHy3JqsriHGvpW",
  "key22": "bniHreZvkNZnvVQAj9VdRh9ShiFxVQgE58C7mrWhSDjcg4sZyfYdw9ZoB9MsVC9qaPZn5NqtdEJrRNcEhnHg1Z8",
  "key23": "4dZoQtbwrzMJtXtCaiCkQAN7RJjqbBNQFyhCEWCu7iHWzW2ncmcMJeipTr3BkPFkkaFQf35UnqUicMcFYXmVq8fu",
  "key24": "2efx2dRtMsPZ47tf42qCeNb6kDKn36ayWZ1TBzZyTyChscGnGVKLEM35N36vSCHdLvkQnqNbXtt7CAHmm6JBcuDd",
  "key25": "5na13mnfKe3jzX31WRq1RAyHUn6iGBGxwn2R2wyjvWNCyY3M3GtXAkj4eJBgZ2yMszy1zFoPn2oNirxQR9zvz6q",
  "key26": "5ifYDSt52GWP8nJ9bjRcTzUSYYYR3UNVTxY7ouF27QZW4s7yyfD1ktkGvVANLs5VcmRu2bnsW6Z54nVtPVPoXR3f",
  "key27": "4NgQPakxmg4rMiBs9THhHZbLguvv6jGEth42q4RZ5Lt3YpEi26V8KLbsYyr9wprzbKJyWftmjtS3hDaVqbTEsi13",
  "key28": "3HrUwunXsRLYzqFRMHdHGftgG68kqC84Jqt8eQwegbcc2QNNjUqjnRw53xLgZaFDLNahid9ZApAPpWn9uhNmdnQb",
  "key29": "mPEKBFkPp9XPqKpLgzDiRLojS6GDdLrayDCYqp5wjseb5XDEHcJ1A2wEmBwQTedvSTFr9xCKdApnCW989bkQNVU",
  "key30": "3eb3oBgVmbdWAYF6fLoF41qJdX56GfNADEPZTJRsdk8vXZdtCGcc5kcMFZMu57LZS59rVSKnWSAEKRA1WjKQYism",
  "key31": "2s9XwMMHELfthZhofwnThDLVD8JxXjMaroi4SJf4aMn7pMJ5hFHCwbRzCQo3QxFpUZu8Us7K4KSehHXrsgHpGyv4",
  "key32": "3FCuNBHELuS43SdnFsYZnUKddWYemhbQU63pq9HNSnCgwCdty13XRs7DMRQFsNvtqbRY9HJXqwBbiD21tG3q71rr",
  "key33": "35svDmTBi5tTkqzdeoTePnMQD9ADRVRNLm9iEtBsjmNX8BwmXr14AFRjLsGZPsJkyhsvzeFuW7bDu2Q4v4cZjrTL",
  "key34": "55wtBbmJSvP76p2H5enGRjmHnkCZts9181rKjGojumTnQ4bgWPFdPbYW247fZKEDgsLJDoxB3C2C7ZhQGQesMi9A",
  "key35": "VoeghfXvDuPRvxnLgFT9vMCxz6gmijJfmHtZ13mdee7ZSRCrnxQSrCuKhEEBJdHxrZPdcw9oW8qJXTreJEo1LDj"
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
