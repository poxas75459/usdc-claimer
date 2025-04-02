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
    "5SsXBp5pBj6qpLBhwDxj5x3nM8tAuVbTbrKAj6k1XxhpCTsZ8BL1xtc9qnEUgq6QZnQvQJgqRXn4NwrwJhGAxQye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nw7HNP8ti3eWtN591UGsdUkse8vhztpsGNS2Yg4QPrDxmDNfYAEYh55dszhpoYGqFP42T1QBEkX6PfpqY6APrbp",
  "key1": "3ZBt1LHCVJgKPWQ2CXKrqv56KTeS3n5k6vAPGpfNhFRGW2j9UGQxtmvXSGAEKXqEjZQTQk4tW9CF5PiqwC2AwcXW",
  "key2": "5vn5LVbi5bqwtveTsydjS4nqK3US3x4cSpVz8awBoT88wTLJjeDhWJxuy7bdUvjUJeuNQovKabqHmt265uQ9ebEp",
  "key3": "3arGTWXmHiRakCveTT9xVKsZnXVe5ZB9HBPuhij4A3ejwu2E6hanh92BhHutZ9GrPe1qMTSxMzHiQQaAqCxSomwz",
  "key4": "2SuuDYuuv1upCbVgs7VQqVqz9TPFUFBMdcLeo6wwa6ZRGwCmkfWU76tTTtGuzhy86hFaCbJQuKNDWSq4p5sFpoPD",
  "key5": "3nxUnMGqbY6ff9VWK3dSSDgngLaSoDFcH1mT8kgHHf5WSxbddeboqM6ft3ixcY8umuWN36NbrRcWV3Xze94deJYG",
  "key6": "5kTFQ2D1mDzucmm4HK6vRHvehXtuA9ggxt83C13wvB3bwiyaBGZhFnLJ4dAJooss9XhVh7QyHAt5YCw5VnzPTc71",
  "key7": "3fz3Vijzgxdk41bT4LkcVT7qfTZi6HYMahDQZfGjgbyC3WM2cGMy9UJFjRymgE4MnAPybSbfJXg9M7Zz4LS6SXA3",
  "key8": "5QTsJWa4YNfEKZdFAHhDf9vAiLWR3yTKZsCgL9DYk32XSjThXNDge5tGBASuBdt31QrsHxcYfxtjHpXPG4RbnSpY",
  "key9": "2vKJEujZ664T1RCWnWVtKJwgHKJwiQZYF4mmDehJ2qutcQK8nmrGnnpsASRzr754y24sH6TN6afxgCZ15hzWYx5B",
  "key10": "2W762Er6qV4ixfZ1SugZTMR7owoCaJ56wVhQGwXuwe2QDuEMg3Z5DzBjbmz8LieUwNCWPG4xGSgm6CKaeuhTkwdP",
  "key11": "2V73L7t3HnU2E3XgVajMM5hvpZMmeuVXL5VmS16Gi7q8FeUJuzL8hbhAnvAUfibvhLYzNkYLEduaLLMPmpKviW2j",
  "key12": "4LqsfpxjhG3YDo7jFbfDdoWr4enpSQLsCtaKS5CYhbrVcjK5y89GNL7eKsxcbfFXzhUSxeCCSSZ6caSTeQuhdf43",
  "key13": "56jodNVesFWQ9fEzgJ8aKgk3LKMKJSRbcbbWUMiKdAvzCsDHSWVvKHYUEyxT69aJxUiLpLf2DAhBWE7RiScdEXWB",
  "key14": "3AcJaGJLHvo7PURn4yzDGCYw3uPpvGs2jvSYiQtL5JnyxQ5R1ZfkX95emb3zRZXk8W1aKXKTmgdRsgiY6xV3EeGR",
  "key15": "2DJ6GcpHmfaFq2d2p4pgNm4Cx2kNQXRJz2bApJ84CurSqrFNdz9giWTfyjiaGjfdMkxhSJJvND8xJcQrf7nZW4C5",
  "key16": "2RApah4b8xdDhmGzcX2cbaCiU3ntgwGLo9xpEWTJrmuje3TwmPNcXZuxHreWJp7WuDULsDreEXUrfzzmRUe1nroN",
  "key17": "4bgNfHkdDMqiUoGyB8PQdxjUAa7t1pWGCagyKyUwRgVWyLsKDkfumHpgvvqoL2jTMBeGwDo5NT4v6jMeDSM5N2w5",
  "key18": "3ezwCTpdD9BnVxxGevqwdMxPmZyjWmhAQorp95o9qbZF1QMi2DRXJpMfKwPoFkWXGXtT3MzbbbjEcrnpHkEW9YK3",
  "key19": "2c1ytZQdk985UqMfCYqLtfbC5yivvXFmtw1dzwR4D3J6PHvsf1n3yveBC1rQzHLk8cf2btEcSzyHcxQb1z8J48XH",
  "key20": "2qcdNL8nehd7bevqFV7jK2dv3njkc8zkMdTCrC9QW1DzEGg9iqK569UjpSDaGvBj63nn5m9Vf9ZKCpKCLBHNK8aH",
  "key21": "2vYeyFPqAkyqycNWnXEKBTf63P4fwXFjLdePvpDxtejnu2PBvYrYGaESb8zriByqV8CLSesWsy6cEKQVVhGck7EP",
  "key22": "3TZVm4HfqpTDVQQxtXpSn9McL86o4kfjLAHFJ4ykknr7qGQnvVbpCamo2cdou6WJavEVxfU317LmHoNiXe1M4271",
  "key23": "3TqLHvuZ8c7hjmVWpfk7E9nnxgZPyiC1u8yzowDsLhAdujuuLgo49H6JpLJYRCYZFPj1L2CKhmc7wX3H7JSR3rxd",
  "key24": "5v6uHyHcEgrCngoiUgZhsijEMJcedwN6NLHKhh8o2FgSWjhvmhbJWbR7dqGBSsNVSyBPQNcmPeEQkHX1kt4u6M2u",
  "key25": "21p9LHsCF7bjVj1QP8JCeqnxRWcdKCZyWvpAaXBuXwbH5s5XTBH3fGeeCLfDBSaiuTimhACrwS5eKjvsVYSEa1Pi",
  "key26": "4iLTS2tN6KhbctpTFiiSaVcywzwyiR8T3mCbduWhwTTpRVWtYq7WEynCsQRtmgFxVts3xxr8nRDDZVD7QdgxnJu3",
  "key27": "2uRQ3kWrY2fFkvsFBgAGqd6RSj1dPcxbNejqXDyUXhfw3deAkirAfgtoisvk1QU3Cg5nYa8o7dDZp2m3dFQYNPWS",
  "key28": "3sWSopocCw9EuMpAae6Mjk4M6cfJxdLZDHF2xwv8VftRfvvfvJhJ9F4bhspP3SudNT4DamUZqwJgW6hX6aNDzJVi",
  "key29": "2pPfG429sqDQE3wznfkeCCmbr3pHRMU1Edm2Bwn8k9hWEPLN2saj4dgXrNALzfFHuAKhXQEzdNeoghsHCAyah6fP",
  "key30": "3UNWXyisFYxinXvzGCgt2ErFiNLvyANoh8RW1p4V2YGtjeJHsBqrF1sJ7KEpg4NTywHRsURUQfReTwkkT5ECkSnn",
  "key31": "4Y5AgBeT8UVszSzzDLmPCdp6vWCrYQC8ALo43bHYBPjuGt8MCtjXvvo7wFEQegh2x5j3SrfSPdmMwBEwFkXUsD6C",
  "key32": "aTZLdH4RFbWDbZu6xRxKCoA9nF2NHiHEztpXGu2UaMKcaz6CRfiJgxYtLXj1hUSvvSb81BEio4WQiT4Nwm1fXUX",
  "key33": "4arMK5G8CkmQ12rbNR5jHwS7gAMNgPiHkUzNxUXjcPKXzHJoEmZnT3Z5sQXWrdPARm5JCEP6cpHrS1SWPe2BuiiB",
  "key34": "4TcsG9mwmgvXSiKKRS16YxzKCRuDL9n1nEwoMEMYdKeBzSA2V4Z1vipBUMhHnoudm59mnHM5JSzwTek4TNXiaKQF",
  "key35": "5dQycpKStL4aKmZWjYpNY6jYFiWukWiUMYznj61aDzpmMT3HJ9ZjMxv8yH8ksSghoPTbj4emS95ZpUNzqE1NJvoR",
  "key36": "644biJGR8LNGzhUKH5UhJ9VNEjKYJ6hPd2Q92D9SojVdjBtEVjPrMHW64i7DKNhozuHYPvBJ9ZVKBFEsZhdsinJz",
  "key37": "utBvuCBpyLz4DDqSZj1rQ8uMpenGguk5XK5oceNdGDRaePmfbgvTCVhhGBjbbr6bCEJDstLydw3XLz4wHsED74i",
  "key38": "EUDe7n98JcYf7zWzACSmxunFpsCYVHrUi6zkGDG8xzDgQTcJyHwg2o7z8m8iyC3SwMQrzAenLqUdWo8njX1FQxt"
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
