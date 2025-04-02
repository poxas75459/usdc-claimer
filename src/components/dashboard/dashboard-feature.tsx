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
    "4QNCNAwPNSc8DkEwTqJY6xyLXNo5LG4pmcWcuTZ8J74qP714Zky6JQq9mDhLrisCrXh9EgDwenSsB3zdf8Pz8jym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFF2dKyFjUgMs9ZureCfJySVgZZA133vxvs7GRGYDhhEcyEnTkrh7d3diiqjimLDK45kY7xdMi25jAQRJGFJByG",
  "key1": "rynvyvdysbaPGcu22F6bxVuv2d6BwXFU1ARpwUA7C1viHJNSVWokzT1TbsbjjybXEkym7hkxw95vtP52k9CSrgQ",
  "key2": "2dUGSxx8xhC94kgML6S1uHLN9m5wTkxWYc3ugKLjEeLQ3UQYortzwHfL9ef6ifV8nLZn5YUZnrwTZvBp2r9bGraF",
  "key3": "23d4NK5QygVKZ5igyaBEVoTFwQ5oqm5AyHHpdasUDt7hY4ZfDkm2ixNkcgJWFZ9t67Nq5pnQSyhdvACaAamW17F2",
  "key4": "38H94GAi7wYNWUL6zVAGw13SVrdZdrqQq8fyhCnZJouEik1W4cBLvPmGoqnQzqZF7sZkH1fDBSXCZPAWZNVVaeVb",
  "key5": "5QHFys8vgkNgkb7v2AdnC2uEbQLqs4WU1UmYdkHnwcViKHwE1JDi6Md8PKcRnPULNb8RNKNfgMBDYPH9KXGVekJw",
  "key6": "5RLJWnxNCc9TuWP34EEVvqg1n3sxrEQi2tpQ3A6RHCe85bdNbqLX7GRc9Dc8SHksUS6tzYqJYXdZT4tVSeAtfwUH",
  "key7": "GdBqh3oHMxnt5kBegq2QK8JidCubeQXEWABFn8qSgXKRaxNbpXZQgj6RHcaedb4gSDcTScrN3MrfuusanoQ5DEc",
  "key8": "5RnUag6UrVp4Tzw1aJSxzgVY8PMTr7HJaYgptA53fNMmsBpwCFFA9axz83QggZ9CkYg9hstAC558oZ51AUUnfuDn",
  "key9": "5jZCkU1LcqdeZwkry2ASqRqvjeocX6PamGVy7em5kv8VsKc3cCjyWE6rtYnmBYrwaDdQduPALGhufVsrEdQ4Unw",
  "key10": "4rgB2rt1pfxUTkyRj73FLK7dAiUq27wfcArvRxy27UqY2GdZKg7xENcWiyK5i8wR1vqBPLXHY1SbQhVLvgVpoXiJ",
  "key11": "3mc9QcKGMtvzdSDuWopH5vNkxK5czoQQmVoH7sTe6V2p3iRe1xpXjDMjnRekEmdwFxwK3KFSeGoys4bNXbeeJ7vv",
  "key12": "2iXn1pJvgsPs8y3jGoin93JTi6uUn8J5xWgSinxLCsD7foaNAYKZ1Qe4HbdUHJV32viRbLXk8HjKGtfZub459gdX",
  "key13": "RPhFGyEJLrwXFD1c8rKdGoKUKujSJEWXG3azjgZ6J2GCXWVBv8De4homq46sDeU9Yy3ehqReZfUsv5RZt6fq37w",
  "key14": "3mY6LzYALVGghDLeJPEzwrjVx3dxnyf54s4aX3y5TX6iLavK7xpHwsimDYyGb3iMJgs4UiZ9Rycf965sv27ULEtw",
  "key15": "34Tw9ggaXExL8ERfWu3ZVs5psEfLE6aVJsXyMiGtmpu9H61eGKTYbBVxXxwvWo65vPEc5WAwe9QoeLbkMTp7u36E",
  "key16": "5StLbbTj1of8YZNmSgNpjX73DtTrTgYCACL6j5HJtuuTBEfBY34mT3JBArUevsBJ8DfwTyvoCpdeX8WXti9WFfRh",
  "key17": "8bMfn1t2MgS6zaJGdzA2EhARAu5s2s66CV2Zjy7ryXZDiNV5FFExYwzGHXitBwrKCZviBZuw7jHsXmpQFRw4Di3",
  "key18": "r4Q6ecABf587J3BrUbyEaUWY4y5bSGDESft8V4bKXi7P8DMFvggSgpE48UAVJQuDRx7XV3NNTvM6ixKhJutUC6s",
  "key19": "5jt3pfH3UeiaQ17PztvRk2UBYjqD2nLgnyy5YzSDrLdu4eW8iSs3gmrANzKauqyC8w6jbx6iahUEuQW6D1883ZV2",
  "key20": "3HxyHiMtwLtzMXpwYs5Y8Q96Z7GCiLAoEkpdw82hvQy6LBh28xKndJhAkfpbEFaTF9RvPNm2PRjjuA1aX4GHUPN4",
  "key21": "Rc3hpyY84hYejynByVT91tsZiAG99vswmWh8zmwXSG7Lz9cs5oY8HtGna3jwefv5LgmmwxE5FxxJinXdpZCq9RJ",
  "key22": "44rfYWicLW9KrYEtFVcCGjmd87oa4pXkMZKk5ktJc3ZMYkDdM8rhSQrxg8d789oZvd7CRTq7svNeFXdoLRN25ah1",
  "key23": "5gvaiRu4w24VP6i6qLe11RhzNhq75MSq3RyXVN41gBqEqVZrhMkDEtKnmDXrgki634vvi7bu5tQZX42bmsEFr4cm",
  "key24": "5brXSzAcmbP1y145TrkSWgz6ZwwgjHfGLMnEj2cxnX1LCAdTYa16hC5NM4rDkZe3J9EQoLaPRVNwWA8s6pxyCLNT",
  "key25": "ENjVt8hf95XvZYYFjmPDKjzoXtueENRJPiWn2KuWv4Ryk7yubmRGQHsJioa1XRYbdsgN8Jqo3b4kPHzV6cGWGhy",
  "key26": "5Nojb6ykqdbsiJuJtu8QVaYnfkKi3nc2L3LkDcDATfb672hTGFdQfZDc1Q2zw3D9zV1HwBqb8ssHSFyj9R8hJ7Vu",
  "key27": "5cwTS5PWZVEf7xpk8nX8SAg8Z2MNYKVddtish1heaYMkya6gkHM8ukDjtpVaiRqXguDzo6MNRWghWm6inR84kHda",
  "key28": "2T56we5YnY1wLz11Y3GDAQvac9m18H5hb61YTverazGbnw3hGBHPDDkA8KnkQ4ynZ72pVCVkFGs3R1NhBQx9n3an",
  "key29": "5M6x4vLcyfr451EwFj5ceg5PqNJscKp1xEd8FPNqu97rx7xjLrN895nrgpUYEYgBQb9ixkkkqBc79avNxp1CVr29",
  "key30": "3GmsW9zD4QreD5v23rbikFcJLx1WNi4YYqQVVHxX5btMCo26bMomvGWBDQLJZ9AiGZ4BABfbgfNPz3UvddNhLPA",
  "key31": "4YdEiPBtiErtLgPSyc3Frmg62tktrBkUxdzA87e87gk3WhnwdaabVvUX2Fcxqr6htgEY6KUsg8vZLTark9ZGpkGo",
  "key32": "56Vo2xB2UWzXmDXTE4txw7u2A17aqVxRroxaQPXjNonhxmSAaP22aWuvyqQuvFVmT3Vtz3Pye2fC2aAYrEduaE8u",
  "key33": "USkGs8Jp97eULTY1pqsVkkBkveca4wY6AkDgTSfdMLPLJFXzGD8ZTenY6gdKKU1UQAuRwRDgQJv976fJfDAGNs9",
  "key34": "Y66SkDHgaR78pRJnaqUiGiHS2bopq1R4y1F6WEAv5NrCCA7HLFHok5Ud2vtrNf3dfBfbjKkJtzJgRkf6u1imkAH",
  "key35": "5GuNHzauiRgH155ZcGyAQxaEt1Qa5rJzkTGedrqvezkRwNiiaQ8tBkbAPHt3EBvMxkAwWSb1b35MudH5A5GDZSVV",
  "key36": "3ixZVoMz4nWG8gQn2waPC3KXAqToam1bzKRRDUBP5rbeVUtZcCCqCyjjYgmQAnmadMYMd3242W7QNnGgXPcXTkbn",
  "key37": "5PRavya2H69rV9boiTctLF4V5uY86yKVCWBXyzJhHELXhaUMgJUhS8phh147Zz3radUtMRktEZ2fBHfcE1qzdz2b",
  "key38": "SsgkjHE3Hea6ipRx2jseGs7863dJ9kaoSiGca27VQQWQFmyhpj5Kb1uEuKmX454TCsxzrpYcjnReHE977MU7VaN",
  "key39": "C4EWEvuejbkBzAqFgogpBMzLbdVDdFskkmS5A55mKxeLPQtP2KP8469xEXP9SgdjKmivpuWLycRa5rzCLT5x6kg",
  "key40": "37p6yvsdXtPbxNyFVtzig9uNUuMaSJTPJt9snfSBCuRCeRwPdjx8Sptja7ECLBbJ7khV5iJNCHRhKfcdgpWxqoEy",
  "key41": "dbsMaM4eZgiFFgY36yYvzztvBsfY7UGiQC1uuRK4K3tGxdP3ReaaRf61nnJRZHEzu9GZtmPohRCr5gFnsovQ1Hf",
  "key42": "5d6kyQrcEUb14WuqECikVo6AW6YQThs4fX5oHLQDUPNp6Dddr4jSx8zTAGAEWFC41m8b93xrASsrm6ECWgUXfcwX",
  "key43": "RvYN8RBpARM45XjqhFe8gYq1DJ32y4ps8bmabw2w7EMwjnU7hPT2nQDHdo4VXherm2ynE1kkNK2AkdzbZepfagz",
  "key44": "yzXbRf9QA1BJc74En4YX6Abm5PWFPVFCzDQe26YPHmcgjytTCdqWKNYHUSUQPtR9Xy7RMSt1SY2ZfovqUD7X5p6",
  "key45": "3kBefgZ6rQmvFV7giVg45XP2rmgBWrN5CkeLwDwjcmPezDczHf39WET1BzgNnTbakpYs7iQLZeTifveVwEXzwESc",
  "key46": "QZzdxMWTWJ2CGoEjgfW3ka4qrqh34KfkeQC1SfLAcQTuU2RvFkBG7ws5SQqrA2Cb2mJwP1du9Tay8uWQdKscfL7"
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
