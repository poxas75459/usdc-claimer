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
    "43hEXVEgNofCAaMfLgesqqeGMPvN1qe3zJz4c8MR1GaJ6LxKgLdTFiDARLiDuBey36SBZX2AYE6S3yfwMfeW7Ln2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qp48vKBhemefhTSViwXhNtFTu2hRRbgkFpLVB834TCKKFwTDEPwe2JxTWK52dMtjuAzVjvQrAfcnsMf2WSyBLdy",
  "key1": "4Y36LUqN2RF5QHr4NyPhobA6RUAmJaKYMj81VAvEiZKWmNc9w8C2ZBGD1j2ghzpxoECuMkL7m6ZQeY7LdCcbbnJG",
  "key2": "3DfESiNijCfW81sZshEzNjMMCn4JtQNE919FR3rsxqWc2HTuCzfAi8xF1QvUfbqJwiDQ8FmgeoSQcXDpESVDUrCG",
  "key3": "4qA6nqhSciAXqaRzD8oVpvkTmEozHKmYJGwTFH5B42kkAvSGfPLdUW5hwCxFib3Kj2tww2eryLkp7cYZiQ86dn5R",
  "key4": "BvFZTknsCHdaLdPLZsSxxuRRLB5qRE6wNaMXzbzfPV5YT6BpbYyTBC2j8LVFaFrCeRDUDxJyK3jnTvd3iL4KQ4U",
  "key5": "3TwkBdZkiZAaE6dibTsEa7uMQDEzWStib7iJGvxcb7b71TPSNQ4unqWSrcyajzCd7Syb4jqDMbaekD6Qab7qntqo",
  "key6": "nXWCyYhwKM3c8SoY4AYJiuSBXuYhGzg4ix9gtrgBGmrHSp1XK6uBK9vtZxeEzBSGfjJKcdUKxWgRVYp1XpKjcsu",
  "key7": "43MtdB3raJssuu25qzpg3SgWY1Ni6LWkfb6YkEsC3rKagyFC35t29x4EnzuPAe8kzKwnVhcH6Pr2SHPU9u4baZWZ",
  "key8": "5PLDLGXasoq2mAAQMAq1gNv2enqmY1GYufg9ZUvRUWXN3LSthTnnJRdhHaDMoXASiMMHkNArujpzRtsUfncLP2yi",
  "key9": "3yQfoTqTUntP9UQdx9qwLj1Rr9pAQfdAATCzohAYmJaRAkEeviGDuWc7rgyPeUtkbf9qyzwfeeyPQ3age8cJig1q",
  "key10": "4nZ5vb3orEXq3trzzoueE61gn6BDtEu1JZbeHmg6EUVB4nGGKTvYESv7K5hdfsE5UKPZd8Tqp6thFhahmrnrY4xB",
  "key11": "4BnG8svyLiFGDyxTLe8V15aJpCYnefPfJmhK29TGeRWKTrzqJtYoLsgPz9x4L1FdHUijeSPEPLZ3f19cEVvysAfe",
  "key12": "3huBj9RGM8jKkheRHtoHCZq2ugwpyjVxQMceXxBABZZ9e7bonwqmL2NpGfwTfKTLYJsmSjgqE5HG3NBwQFHHMaNy",
  "key13": "JepaRjSvHwt48JS1HDZ5GECJsnTcQp7zqvDL6e1PTK3ZBT5YWjSckZJwX8yAThUG3ZKrMWaC1ZQSXHYWm42vGAv",
  "key14": "Kg2hHiFEMUbL3pN2iAaPq7fuHyarhimPoPZTAbH2knW3YHP7P5aAZr8447Uc8Fk3Jo9S7fKM6nehSJhkXxx12AA",
  "key15": "4bhVeoarti5nbAToaFcoYHqiCu9gwRixCAAmuYd4dv14BTxnta8kg8z2PAGvsMe9K32M6JakB5T3QsqJHxDQ9DAZ",
  "key16": "3oTGm4FiGewS7YTUfbqfuj7AQL3wAVpLWFHVYnaWMw41TngygFyE5rfKqh5Adga7jt1WVo2RG6KASGQbtHDqVJVH",
  "key17": "4GTCFB8XyNZWfcXDUXKiuyA5r1QjqAwWZmua5LgsVuWUdVupuBkrSvBKypPxvNxLH7tzUmv9jFzCbsbo87CEu4L3",
  "key18": "3AKAapwsmyqCeFQ5uTkQ5svsyAZNA1J6jdQCmrDKqTsXoeqkWGDwTh6Z699SoYYhvBbd8CQ6dHeUHnT3ifkhC7fy",
  "key19": "nLdSZTsa3MQXgSYyHnFDPFJ8p1KfnPD8izwrKRFQGdN71N2EM7j9ae3RjqcZbh7CsGCkU7Trh6EVrFYqRiE8XeR",
  "key20": "1T8Vcb4qGrc4PkAMUN3TFQVXotBD9e9GsyA8t3WDaGxcsGb3YEnpQRoJFHGkLverwNMgDgVkN7XTRJQfzmg6eoa",
  "key21": "4T2NSBPDTMaAU39aA83H1K6QXPkDjHmS7KMVoJMqbnSnW5jVgVxMJR3nsiJ86h8fVzx4qaWdY4Y9syhnwZW8Ybf6",
  "key22": "38dkPkHM7UHTzZjYiM3mhNweR2vnYCth36EzgzVYjJJLYdLR2dRYELvyzBMHGbRuqcR5WLtWKhm3RgvNpufQNk2H",
  "key23": "4MUGHq4yGaE6hrXJrNKwvRUpb4swMqiGKd5Ng4SZwKcrpuRLx9qCLFFh1ZuCXLEVRHbCqG4S51w7KighEcdznjJu",
  "key24": "23isMVijU3JVgt6TuoAaQJkND6PU53q2s1sJHBzzdgscwV2eBcWzx4YjgMBuscZiM2h1CDq2zU9eegruFRqfNThC",
  "key25": "4F7WeeaM2LDh4LjccurHk5ocKn7cizhdFC5kGU8EjmZGaHtsfo6CB75a1wkSfoGicmLRrY1QGiyfpxLhwW81JCPA",
  "key26": "3g1rcMC9tgFTnGcANdA2e3znTbnpQeZ1kZuUcuWr7XBJPKYPir1oYMT9JG8oZbJt3XSgCLr3TirrUp37K5z4kLFb",
  "key27": "9bWsmvdYtEHMwNDBAaG3vnnMotU74rhaHcErFqWRYhm9e2t5GQVQm1iqdiUmUwjiDiMJqTe9fy29C7QMrcxuTp5",
  "key28": "49FpKMMqohSWt3KNMc9tYEKEfP8StkNYbVKA6eHsKLy2cEs5ZWjBHNpR532e9KHVMVqHQ5sYtZZE1P8wRanibude",
  "key29": "RtS5GD3Wcr9iVoaTiKp6AVxCRDK8tcYxUzWhiwimVshHe3hXU37TyS6gLuHa5DnB3UQTVmPM7FDbvPY2caNWwXB",
  "key30": "5FYQKpJfck5jDv35upudPLmhueBUPyBvTM4iZkjkCGA9FDTD2SEFS1kmKFh1vta7iHscLtqdvazW6qyf4dWHtuNC",
  "key31": "ehnBTBQ1k97WD7c5VetrWZu3DxFUXNwfb5hQYbnviPMycfkMqPqBXHgMo7WDKqAVK2MLV9WCqUjuxCF6MUXmetj",
  "key32": "5eBVrJyBkahyza1aZuFCCEC4JufbaK2MYaCJVUr5ENKg8zvjuETYRGYU7yJPu3wGo2PchAZmHvn9VkKRgcj2i8AL",
  "key33": "5fSR1EHQpDadzg6Y9PiaGyoUedugLbqLFDGg8xHRNAGUReqZbP8pkBzk9EhfFP7Sc6jLaPVt3nCQXjruczJLfSkt",
  "key34": "XG3ycDk7Nar1SU2NcAW7hohQTQLiBgbYZcJtmCFXSr7iVUbsHHd5FsDwJdVHZ1oE6rsd7rMZASUDonwBQWujfh5",
  "key35": "3MPNW34X1CrURnkGhL7RbhDZXFVpsG7pWtYZZ5Uyo6gZu1xqvJsdZtRCKZPV56EWLUzcWhzf91CRGQa38cCXYCqB",
  "key36": "qtWJKnjiTBo4E2oFWZwbd9Pcod2Ayf2ciVsDZRy2eFZqEs3C1Pigqy9cibSfCYNzwZfs6NGugPcaTCH7KXdEtYC",
  "key37": "4imso3HcApiWrjcAK7b2xmiB1gRVy8i6ggSifiJ3NMXHwwngEyEDCccmJic9pFMDEq41YiY4jUSK9gY1S4AYNQZg",
  "key38": "5jxvW7WYKERNJyYF47ynNKE9r8px7LAAKYxeutLEYCpJrigm7VeSzKr7b4a1Ns7qj1ete4Fjgx6d2SWqF5mYLQHb",
  "key39": "2wZo5LbH5RJVhgHWzfk8gQdiNqomKB8qHnit8DKUA5FZZRVTf94GSy7xb9bzaVRMLdiBtHDnXdh9ZEf6w2jkdbmc"
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
