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
    "2nB2WmmcjHNzUv78mSwKmCqkixQXssyEVv4KLVJqsWorU3BeybYaQFRfEYJpTBwksrnUr5b5Ev3CtugTpTFNUrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxQromSPWQ7SnxTWtVbaC3FajH9LW3vSqZkQaaPaTMVTveDE3Xx9NJVGiPNuvP82mgHmT8jUmLky4oU7bUrteA",
  "key1": "4V2Xv638aidtU6nnNUkCGmhka6X22PSnqpDVPiYqzbK6Z7HjrhM2WwFjYEz2RuRXFmLyDJW6u1qiw5p3gi67Zoz9",
  "key2": "4EtLwEBkqzY3xmTvct3JYaPGsdAnGnCY3FzVQC4KE4dW2LMftZUcQJb5ArGhBgDbXJFB8JjWBTeJB6n2TRLrmXK9",
  "key3": "5J5j9Bg1izQV7Hoz7BUuEPR6h1LoB3e2PD38Ly9JjQJtXPDmBinw4sPexgPHbZSqDAdUcPAXSmMpzq6BJ53qV2a2",
  "key4": "2y8RzrYFdBEdyvU7TPrD814xHhZTMBzmmPp4zFsp7d1CzKfg8wHg3Xwzpy4uHWKszymHsywezQqyL6tiCGux9uBZ",
  "key5": "4QpYBa8Con22oUGe6xpVAY2RU8AqhfaDAWSgdxz3jN9nYUFQoyz3aLJmYQhnd6PNdnm6qr2Xh4iJ27GWT84g4EaA",
  "key6": "MQKEPi3ngPqicJX5TRk7Cvz1JsAsoFyptNZP1jzwh19vtR8S3oRxyH7qtT2Exf1qdbxq9YMmd1CSNWoBke58PdW",
  "key7": "HbpE237yiANtWNTXZUPaTGCW2H22HENjWSXzbgPkfNAe2RCRPxYt5oAAZijVvfzWk9hGcun8jujhp1TSu17BZRi",
  "key8": "mZ2nFe8jcBvqtMZbBn9jt3HPJ1AvMPZ3MD11wb3Y5h5WwB67GFFk1YjJWWT3uMLxFVizg9B2fqUoYHcR48aQutc",
  "key9": "3wEirjdADw2y2PA4bXKTK5L5xk1nocFojuu3MPdAg4fZxJetnZYgh1KJeoqryJR3WtBnuNMLgDG97yQx3Kf9P786",
  "key10": "3APTttRTg3uTENxpWHH9GnfqAe9bVWLoV1tt58BL1V2Pw6VReBTvsQFEYUvLXcBrd8nC18TyvjU2TyzbUaWqn7MU",
  "key11": "2VqhyjqvgLA1yk2E1MkLELmDkrPvqofAyJyvv4YCE1dUuLGe16TUfgrRjrDHk7vzjThWT39Q24pNWSrU8qmksdj3",
  "key12": "2ux3tqvsBPmdJoTVjzUCaTvKwtrGmW9i7WQKh2kfWdN3sD35bkoo9dAbpKJ3XJtH5riePNTNTxbBe2LoAEkNAwGE",
  "key13": "2hFr3ab4ciJJBNe5LYacAszaUXyJqEF5a1HvRh4AU5zU8zhSB9Cz2aGbSRpZhSNXekJHad5XgFVjd4LfxG5oQUgb",
  "key14": "22qH5ANYVCwWLZr6uDkLrUV7R97rsCHByhCYnJ5Aie3WU3Wyxey6GWV1kjZgTxedMqQGAbyMhFSPvVoQPcUwiWfX",
  "key15": "5v72T6TrrFTs8D1LR4mCFAUPkZAVs64AuuJ1MRY9F3mtLZRHsHeodjA5PVVi5rwtEShEbyguJqNzMiZ8cS1Bi1yR",
  "key16": "3AEitMD6i1ckmioGs4fdF9RaM8Fc7D2AhrLRXGf8sBqQSPxg7eupMrnM4LZUmyXjR87tQdbxT15cmxr3QeBwTF2Z",
  "key17": "5CXUf8vL3N2VChvFXG27LNz4R1QvKA2M2iPgqM6JZ2VYRuwkFzYLasrknHr4kpHfP6GHfZqi8MZBvkwFT512YKK8",
  "key18": "5zc6XNNrNb8XpZAD1CcfKA3KSraJ5rY2etqirj1XpP2dJooRbS3WWsQF6v5kN4C7CtbSFfot5EFEEdD2pQggCQ2i",
  "key19": "66AKBSoevYDiBTiiqAnDH97xzVDULgX8GxArLFHPx7g2SjD8ixgCbHvvmFkDNJ2GVzgz1CFv6uhbeyyStgyB2SEJ",
  "key20": "2CFmLcpGkWKXQ5zsACoAGzS1beDCFBaZ8212Pvqq1tNGVwwHW2c1r9pij68hzhgRtGZZkBc4hYASFf9fZnQHgLKJ",
  "key21": "iJ4dycm7iNbwnppxsiuPmEMj1asQmU2zEEzFJ4UebVK5Laqi7jEQUrpxa7pycktfe9sXh6fEK4SwuHXLuxdvffy",
  "key22": "4qSTcYFHVsuGzG6wVjwxucctAjxPQeAXj7nY2fkoqECJN3nLCzNsuyr5t6Ye3pF7YAUkUxAhH3W45oFZBfVqNgcB",
  "key23": "61wGS6qesPrcYf1ibKJAiQ66NS4i3gk9KTdanwYbGVw3uSSt2kWUPmTeSgX8hry3qUmiu65wyjETAWCemMGGnvir",
  "key24": "2Gz61i9oij3h2BWKhcVERJm8Ju3d8gw1AFWz9qLbkqYxV7XU3edFRkoZVmfDqBck8cc1xrex6qjzWEWtAycy47ER",
  "key25": "2xjnxtgCevvDhy3WGndjxLqbs2bKdi122YkkCvRpNVQZ21vsTMsn8mLMjh1WnkrYzoQNQhwPUaaE74GygJkirCH6",
  "key26": "2gvuVaNhvutCJKYWb1G8aD3Qu2DTpx5mYr46uvewiDT3Z6Xvu8FM9KSKz3NbCsVrxa5r8NJq13zCfrZPp6b8zHqS",
  "key27": "25uVKAS1F6NbsJPgsziYwDj4K2DZuCY1QGfqmrKj8yA4asCEMTf2BVYyfyzBKqEiLJBLghQZqQ3S7n6hpQipLRgF",
  "key28": "5r1n7eCVAE3AsZBf3aNGri7dTYzroP2xVtKUoETCwsXz1AwBuSiUKSa1Cn2AJ6LKRRvzBRAGUtykwTetyMK2sPun",
  "key29": "4kZdQZnUWdBnJ9ShVrphuXZtEW7YVvqaAE9Z1BwunaEMJqHw3KEuQNgkzWig5Hhm4b1vMyfG71KBoqdkRFmy2iLA",
  "key30": "2BJ8NuboEmcWzwSEGt36EdTgNJ9Quvk6CoyechfFCVYN35qvwJxTpEJLjFEEY5NJL2eaekHFv41g4tmZfYsbHjaq",
  "key31": "AAh3NtnniK9JU77BbkdwDNUTUG2856WeXUJZL5U47bc2yWoW6p1eMoYo64fUAgatGHmcrDCyWJgXGze7Ef6FPYG",
  "key32": "4me8QazQjkAu9RjWRaZ7iu1opykFU3m2bpd3VM5s3hEsCamAGmhi8BukBvmaZfgQzrDmazdEdHgqRVDKhs1mwGuD",
  "key33": "83zrdS5mrEh14Q3ebc4GMgAu5tfCsGEHDrZZBiqipebN3KwNzCpovFtTFToez1QY5xiYCbHcV5WVcsWViU62Gyh",
  "key34": "mig3RKfCbbB6yr5juRQNmbnKdqGqdPTT4hwZ3b2Y77XWA7kPy1rYLYdUK7XAnpaGM59qdei5h29gD2Nrrm2ra69",
  "key35": "44gKWvZ6SKnCun3oSF1e759TomcaqkBzkrun5D2n2WLToDV1YCPjp3cyfbEX1cnCwSKuJ9bAiuocgek93KXwGKEz",
  "key36": "4Y63reT1uq7Gt9Az8d4g4xvFaeKDW1UGriJCkYYQBLkgTfC9gQgyzH4b7pUUYLRkCBcrR2jNkgGFi9qZK6asxCNb",
  "key37": "vU99bxXHVwaXBcTgsvKs4b1Bsv55P79CyAGzg6ofURu6VKjwjghJ41aDzUkz7MdqgnBAMM4hWG6WLbJenYjdeug",
  "key38": "3mSz8D2CoZKmniTncmCi5LzB2aEotDiqc5Zsk4t1SfkwTZtkCw12ZizbXvPnxAnHoQaCPjeZKqR7LzqRjBiL1FAL",
  "key39": "2gnwAoLPz68DQ3wuPeXPM3n7Rg9ZJo6xWureiRxoUfjmSCRK8VfgqW94CFtZDDRXeDKb8t9Q119bMcVTL9eiQmE4",
  "key40": "4L7GSLSBrvoD3Y5mu5uFs2Zht3j393v43kyM3K644wFswaRhxxwaPDf6LXyPLhsC2c2g4eFePHbWun1xh5Upran9",
  "key41": "2fwztQ6MdEtPest7ki3164TLh6RG4Ry2SLm23q3LvfEZCsKi7dXK8itEzvfji3Ub2UC3gKuZUeCnAkysizcQw9F2",
  "key42": "5ZSTKZYDDvPGY9jVvVDeAYoWPeGuSXjb97rXYqP1vejKxUpKHNa3jJqixtaMZH8NcDNP1NhTzq4vabLf1p9DkwFg",
  "key43": "59oXiYJvu1pC4mSiNs1JPjQrQXR7bSNnbbv8zq731AjmkhhzfCbpwkBSjxDCRA5gcCoR8BJMsE2Jnc18Y42u8EJ3",
  "key44": "5DQzFCLUpMNfWgNmLF8ghLpEecJLWuQUs76eyPDUbCusKspGKQhEAgFuKTqjYnaZsLQ5zwGCXeUoTGQxTQgvLkQ3",
  "key45": "4wiVoN6ifnViKmqDjXHJPbyqdsJ5VWYKznqJNDZTqzxyZXSQ2iocPsRopRWrHioviJK2y5SFwid3Qtipz6dXmwaT",
  "key46": "z4QuXJCTTPdRsqDBwFoKx1qKmfEaSZZqfGiSdAeodjoHNzC4iLeHwZ3kLT69QshTYrTMRnahaLgFfz4Fpyxohne",
  "key47": "5d773e8sc9HH6VECZA7HtaXTynuyb39FKZKpPkB9R63QbYx1n2xNR2h9FA4m5fTBqsuzeGadyy1Jgpb8V7SPP1h2",
  "key48": "5RiCfWuVouv5tMbJpWabzMxjkeUeskt8AgfwMHwA2qZpaDWdcsvtuFUxcTVexZPCgumYtUwKRPJ82zmpXJXVjfe3"
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
