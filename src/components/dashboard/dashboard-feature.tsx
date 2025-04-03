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
    "2hyMGcuzr9e3T7AKvhmVU6YjVek8KFvKYYzzqChPc94tvYv1ATyaZZF3KpFtKz6Hty7Vi9F2rd2PmfEpJjXPnFrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58eapPNK4o2xXNosVH9pUCYvg3vsFPzxQ7qeKSL349f65NDCg5VVpo52jHsMEpNgMNrQew81wTzizs5uCmxwifJr",
  "key1": "4xNsbXfeSLxnRDh1eRmZxkqGZ1vqzgfd6jEtGVhKLDYQc5yfpxAQXgttpEith5Dfz77C4393nRsSPPjECfG1Nrb6",
  "key2": "2WZnMFSbsvvCmYg64GDrzeiZRxVarHP2r7qPz4R5etxEkiyzKpDtCWPxgU1NTHG8WTbHyyi3GLeFf1A3YCuf9swB",
  "key3": "3yUE6fecRKygucVuGFRkK7x1wHFdi5Bea9AapPXUFFeGZT3Dko8dFM3T91Koi5P9TZWUDF9d6JKNPHAAzFfrHoiZ",
  "key4": "66dtZW4mXrCYserHF7AfNJdGxJz1S46a8R74Euo9dZgtDEwrk6QSnW3L8QA2QuToCgBusBYYkYwu7X22WNmU9fkc",
  "key5": "4W1TjJVY16rTcUBAuPR1oZJUBzomg95GxEjjzrmKy8ZRrDPJMY8fctyxg4DLcSkfoEyGQ2sq5p5yiy84hpw1yu4c",
  "key6": "9ixSvJAhy9cdpNc53nr3LxE6FuczH3aLBLEnFygXJejbwtgb5dXDNB5ttfNwrc7QDQLLCsEeCMFXGYNeiSJ5969",
  "key7": "KySrDVz1YePp7o6EN42gze4FkmUzaGzZt6ERj66bhH98SGAFozaynmhawUgCfWYCL4LCSCmfiLViz4FyB82ykjp",
  "key8": "42guJhUX4QcFMcUmmr7ZVsDfPDzqoeHXpvmWMKqAZyVdk6Vz3quBCRzAJaaCRWW4W3JCZ6PupfxVFnoYB9UXgJNV",
  "key9": "4zoMsbyRiCNV69gfWp2bMySpa1bJER3r9FgbDgroPy9WgNyexm3aa6HCvvjenzuv96wAx5TyFhxYWqb9bGobnApc",
  "key10": "XKVvA5tQQXrjnP4rgxKkjdD6QgGfE4jaDbUNCaq1xFECLovqCDaxi3tAAqagcBhi98SqetbDyeH6dMEjaHLjUJf",
  "key11": "5vFLy26CGNcsQ3joZ9khg6zBNeS7ruLFBSzSsE5UL8pt2zJMbs6QmvzLA1L6PLC9D7CpEtyBFjsMsWHnudZ2m6dC",
  "key12": "5xSWYafancPk51XRjRmYwdaxqhj5b8sGB8zgPF83ToVysJgeNJvPof4s42zD9Ye8B7nc9qH7UCBhA5cmcq5uBR4X",
  "key13": "57WkYYsUz9xUF2raWoBnJhukjDMGMcwdiCCjoHZi5P93tavkwrS532yWL3gkEyEvH814wCQfVzjszVk1iavbtRuG",
  "key14": "2QnRCr4i5h1n8ZzExSfFUMY7cKBMwUSHbh64EfKnN9dFGr57NZzYBLSiXaToxH96aEgDxyjV3Q4fTRHqERMx9GJ7",
  "key15": "3qf2uhPXx1kkt8nR4X2UthgJ1QdYyvQGMQ9nUU2B5NiUrZ5zgkEGkLYT3iWs6H7PGBGSEqgw57unumkNxJFsBPVt",
  "key16": "LfHvkFjJWDRuJFfZQKL1rCJXQf2zQovXmHH7WEvpBu7dAPiPVBGi4gYraNeGQkUDDdCJ7dvKeecuxch5P2bSGKb",
  "key17": "4LQ45PTp9kC3nDXfyHpg6J5QVu9a3o5LZdJBehsvp7vCxEmq9g8VDY9SsEcM9uBdoyVnmfB12jECYDoWkAEBp8BH",
  "key18": "3HBTaS2ZHaW2XAkFY27BK3bDMjmBohsfNhGc5NEHZsLfDmCH6a4qjRg2ozcivzTpU4AdooCGDTEug7EkBvL6WLCg",
  "key19": "4vSsR7Fo9Qx6zGqegg6frgzKMZwBKKBBek1LqwntMNqtZHoBBXUZc4ghvzLe3Wzcg1NaehmYrVRDXma7srcBDijB",
  "key20": "2CLQWt8EidKBCxPrszdTh7pjyKQCN5CjinrGy4bmqdaGiPP42HEsm55jUQ1JxWUw4h4EhgNsApsJ52WEHFe8ccPi",
  "key21": "5K1Uf5PqVyTrZF17xhBzTiD9c1JzMxrsTswuDEjwuXic4aTbh3BAomgXRc2VUA8cf7pNpeiLeNk1xLkt9sVTTHYw",
  "key22": "5bLvTHspjJL65Dhyv21Cok9FXU1jRYA7fwq1F1Xt6fmymipYWXmwrRfKCNd4ZDLvAtXuwzVHdP67UxyJpvD9HCHK",
  "key23": "3Au6v31zgvcbZEXwP3u9koz3UpSusQhAQ6mmy2Gz6u2PEpUDaz1yQxp2rkeDonLmxxwitcPRqcf2RkWgRHKHTMWv",
  "key24": "676QbYd6jhHHempEMg3Am96tSPCkucBZT7YmNR9fQ2jau7ZLBxJoBvVDM4ZDvLWhZsMgKase59DvFixpN1rsuLLz",
  "key25": "4hnk2KzRy2MLURiJBcuzkjBMPPDPHZRCR8Ca4HX24hXMBUJVULJL4SHigdzThamh5tU7S9VAaVHnv4Y4RoDyBLZr",
  "key26": "4fztn8JTp42dkYKFACcPJTJCdbyo3gA5FR4awFpnbtjiivU8avWMAxmFLdimWU1Kpi4Vs1Zxsy6txbAnwoFtGmwN",
  "key27": "2fCvc3e5Evo3NsPPHwx3WjHeNfUcYgfkrpmUN6dxmKGHNdJXe3z7EHEFJNhoWxAPJzTAkJ3dFoL6gjMakAiiuyS9",
  "key28": "4ZmweotPfSrFGdJwDvA39ENG9JtWk3QudufNh3YGAdvp36o5fAk7tMaybjeps86n4iGYGAHLG5K1AGeS3QsBoQWs",
  "key29": "64CEAkF1LrKpxkssq9XUx8ay6dYcfhsDtx1Rsd3LMhY6yhPJ4tdom2CfCkYmVUfTm52PKr4mNCRA9kE4Zc1iAU3t",
  "key30": "31VN2EiBuBdSNdgW8pBeBsi5H6wrfaQ1Zwp8RWR359zh8bGcGYgm4F6i1E93Z2MS4mjwbHuvEv6y91YXwLMzTC17",
  "key31": "3hKgE9ZL1Cx1q2AHHZCVUoB19ViqYttLarNxwdFcNRnjPE8rqEc44Cmhx6DynizVYJbZm1AaCFRA9pTxsGE8agVy",
  "key32": "2gYMWQH4h94i93XcKaUrZPdDbZZsEKn5pmc12TMffDQvekXFXNvxsX5QpZmDbnapkv98zmBuW6gkkGXqZ2PFhfLA",
  "key33": "n3DwPEcYaEY9Xs75jCDiywWJs9ZRWrcETC2s7YTTE195adz21BQ9tqPZTM7DraSByWAjvUaZdxE7wkdm7zLZT9X",
  "key34": "LWVmeFL1tp1uPQgucnqMy6uxee7xrS26AbL6ZtLnTEjXu7NpviBVC178rL6PmFqYYkPMFSj3K2T3LUDiWkHZKja",
  "key35": "28TmWg244LzSP6ptt8z2d3CT3qRuxvq5rgGL64CUrPESo6iUJiZXKez7vRqVQuXN8148RFzEnjfrnCfi1S49fDmG",
  "key36": "2heAfvWyhYbEPXRb3Xz8CfaHzrYgN6fAr8yAiVkLBqXZSRtd9EUAjskLu5sk4vNoyZrs65g8RiTKKyhUz5ik5Gpv",
  "key37": "4kenkrEGRhYbV8genMxiGKXka9J4ws9cZ1DTMG95bGkdUYDZfGXQYA3iz5JWWuW2aixTtDzjqeCyhx9QsbEh28Tn"
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
