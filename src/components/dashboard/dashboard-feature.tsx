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
    "48L7x8Mei9BtjdzNDVP1gAuCyLYRbsBKLfwnjWwQbe1svJMFv7Yop5BoQFZfAtiJsv54YQt3jKNascrgQ9qyMoUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5oCuyRMwVHBvR5FXYG84k4FYjrFyX2Rtktp8o4Rv2jLE6Bcu4uNf6KEn2DrECNPTDCru3ALe9eCFvm69WzKcX8",
  "key1": "QBfNHs1mrrscGztwR5gGNxinfbYMQsWrFEuLrFdFSV2nk7phPHgzZqYaeL2RycVAF6FvzqCSkYHxUwUTY7aYF2w",
  "key2": "QP3km1wk958vTEtTJfsGV2zyyySY9AeHhaDYgi9ArmE5a9mavVaCgTod1t6geVvcvTyj3Si497Xhajgf5Uoz5Yp",
  "key3": "2ng2iUAJc4aKmYgAqPPbN41NSQ3pntuwvrVkMWmK8xjkTQfyVjnpXc8kUXNvh262Yey1yj2r8ReY1JoBrQzuLSfj",
  "key4": "3ApT72mu4Nw67d5ivdL8KDz24guBey9ww4NmTzMZhPdvLXGrE1sebvBqWNEtAmNUJG1djKnwT9FZjrPLWyNt8aDW",
  "key5": "2P3uV8q6jcceTME6ZhNdeAygRdBSJcfNXKt4Aa5jNC5rPQNpubv61JM5wvqmgnqPiNaRmCEfTMJjdz6uUnxgUCdy",
  "key6": "4pVWnbsnr552HdpY1znuM1XkmnwnbQ3xG5xmZrG6Zz1EL2HJULycBTD2fLGv1bT7NnJL7m7fy4VacBUPcLq7oHB5",
  "key7": "4bbuHPaqAzjv588FsREacXaZZmm1W83YeLD9pzfZSKuBhhsPLGH5Qfs2EqkwjNVgGWRvtdFzY92SDFSb7Kx3joTs",
  "key8": "472rFYMHGLYU81vZd685xLKcJcNTdJWwwuNKxrCC7r4W3wim51vSDyt6c6D4KSzryccusUNq3BU3TYD9zYutA2E",
  "key9": "4Xr61sK9fTPsY5FMgFLrkSoDkPv8mE8LrF1oRZuKTtnukeFTH9gYMsxV5cEFrMT2buCM25RCUpbKJjDjMW1R1Wi2",
  "key10": "euDtxyu7DGDpBXvDR5z2nSHyLJqdWFdJ6Cq8EUSj9KdEwWwaxfTRh6Qf2451b6vU8x4DdRJvwu5JYSSCGep2Ljq",
  "key11": "3Wx1XvpkvKX2AMz8r7N4v6xopgkjTMNCSf5DgSjgQ7C51bmrebMJFN4WBZymwAAjfoBazcorrfQi6StweM89PpgN",
  "key12": "4TzK7kYQjqDCSeNMSixbfh2Eggy2xzUYwbAFNGbmDtCy8hpNGD2pu9vG7tEpo2jsv7SbStahGvjAAkXZW6BE5tLP",
  "key13": "yFmrUL1Y9u3BTco7YhokfqA1cMJDyZuExuJHPhbHe3hHsWT67cfgHtMmCKMjw6Zw2Mfwf7nmCkmw3f8iUmQYP9Y",
  "key14": "DPBPnQpjYp2cvp6qgEPKmNASELwabxnUt3XYHRu5C4XHzD5YqJB9gQ5E6mMxNHQfrYsWxNHZMAGDok4fgCSXBfH",
  "key15": "3ZYSuf63hCU4XAMX76Zm1EGdZdsXGLBZCHmaCZvuLEACL7XS5VvNr5bsqMRSM1DRp4ddBiTkRwjSRCYJwNGpqrJg",
  "key16": "5dApEsRmhEvcqxr9wCSJW7dgZUtvr41TqHqqy6odCfCE2dexA9kPb68fdPqkxh4uPZG1R7NgLpTxLCNZsqkB4CLu",
  "key17": "65Xhh4fSsu4TUPFD9EV4ipqiZvjfyZW9g5kd3EPvd998qTrhPsBsgxNtavCzJJaiRpNKGB449yEtxxQPwmFEq6zx",
  "key18": "RCNerGK1iFKB6VHYMfauRBUR4SHa9yx3Qm6KyU81LNswQ9GNrs23wPkHktAMDv7qZEyTv22Svm6FbQAU4zBp2qe",
  "key19": "5zvkkiCTgBcGiMiyB5AeTSjeowK2L5U34bQMRSGAT1KuoLF7cckrzr5jVjb5JTnikHq5tfhqPmr4f2BQrdsuLNu5",
  "key20": "4uqosCxsLtDjhHXFX3UKeWDtdDQZPTtBKVJHomPdXLdRpdtgTEBTsCm2hWhT1dohkwD2FzNRmZ7e6pbBRcuirLKW",
  "key21": "2VKEJjUTZTS27iMYii3s2nndcN17eQDcFWLTH7JVdLMFrLP2ZbvgLxRwGszHBPi8m5EVrYdxk5SvjYUWeeFoFQ4F",
  "key22": "VaqPhdJAQ3gUeDJDYJE8ANWbPnYDmQHptvt8exYKLwMoF9jrGXMpCtWces2qDTcLydBhjzmLqGFsco2eYC133wq",
  "key23": "XgiVgPHahFWkXnrr9WzAysLBUiWLY6vu2aaDLya7zURrKE9cFhqH9rEikUbj3YiFe1wSK8uv2oKRfbmRQpXyLxL",
  "key24": "4oFCKS3PJ7wTFKRt21LmiBg6QwzBnnqCU4XTRMuxPLSAE8W3x5wWh1MBXgxrSLtXbAyQr8bG3DBVgkccymiFFTNN",
  "key25": "5tUXdNkhrsgEc5ibc6bBzsBY7oxMXvA7fTpuvvdbfy2zRaYPp7upm3P9qMzSt7MDdT2jqJDobXVxKJtgxRN8d27d",
  "key26": "3AnTAaEriQYECHpEBuTYQmQhzk5rBtqa4zWQe9oQm2j3upppAnKwRr9dn1AdkzqrSK6nzAD7nGgVjJ2YAzwGSKqv",
  "key27": "2DjPFXaXCg1E3u7G1uWB2WcrKjApQ1TXWBfYGZuDiBD8WxFmHWKP2iwcmzZLcZQCJPb1WQebAeeqh7RX7cP7tVyY",
  "key28": "3kcyzq1HfVYZXMhAsqc7Ka9a5hW1Df6Tgkv71kkDHUWEAzEcrUcd96aauPwromsurVFweDjMX3LBc5ovyP3Pq3ob",
  "key29": "5kATQJUfhRKdDYoEpSSUjtdVat8qK23artveZ5CSVQn6hwnvwtzBJa66hWL8x988MUceEC9CWmBsUwLfPhxi7FrK",
  "key30": "8rwUXW7LBP6cB5xmcYaLXLUPdgBqqkCtV5V93M9Y3hP5ezjtrtRZ85RjK8iv7Y5u6WzLdZV16EabzL66aGRYQk8",
  "key31": "3eu8JA1xXQT9FbwdqtfH8UfetmiGPHEQdRrBVeaMWBX5GefnLR2QCUjAiACWZbAoqPf7hZACXgHvVnGWoiLwTxkV",
  "key32": "56WvW5SV8xms7EdWVEe1oNRFJJs3zGj6ERsHDMM5kPQni5gAQFezuVaqs4nAUTzpj7HEh88JX7rXjCBsMUe3inr9",
  "key33": "2rK9S2BcRLx2vsWQZdoc2JSYqeDb2jEzSL8UQ1LXVeeTgyNfP6Tzk2SFLxZp4SEWhy9G4Hd7R6fHsassCVVoR8yV",
  "key34": "zbLX8HSu5F2Aq8h2g77Zw8A7ni6Jy9qiMQTjzvWMEnWAw3CgoD9Ds129NP9YTg2PhYX3HbaWUHA8hcAjshXz7ML",
  "key35": "kRzkvJdZMn1NeGA5ZwaCrrFTswuAnCtYLDcjZ3SHoDnFyRXJniqoMHuaZ5uoq2mHhaUrL3FKWk3SiR2ae5cpDr2",
  "key36": "4ZvkH1fqrjz7dLhz2nhUKdiraH6LgeyCJiY3B71AvjPaNixQKdqTEVea6MyjES7H8gTCU4AWy95ZP5Rp74zRGiVh",
  "key37": "JpFMCKoesouzySK3aLezvN4ZizgGrTBrrULWRARgAHBG3QNk6oWgqXr1BceQxBkPM65fGcoQQxfzmHFMnZoY5Lu",
  "key38": "2CcdJtkstbpvbCWDCLsM9gWiDfN1n2gxTU1xRXvtXTf9PCX6C1McgnqnyjkRQigHqgEcfQLyvj7juFNWAYEY13Zq",
  "key39": "5ZopJpYSeTy99sFsVQ63Y9Rp9vahMnKQpePirNQAjzCa2dCyH4wF4n1PrkcLaFyod9NAa83iZHsNL5CCPqhQmAEZ",
  "key40": "5BfZav1LbG8V3beidDKXKCAGkdGKAknUtgHvdCmzBFzoQ4yC1gwm3oJkWHPeLXjxu34e2fyStRrrPxvNjUuJVdXV"
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
