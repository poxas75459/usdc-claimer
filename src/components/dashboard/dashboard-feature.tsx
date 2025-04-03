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
    "2BxpJe1LFecHkaVTgC5sE7oBzTusV8GHZfD3sAB7dPhV5dK7cnB6gHiihgRn3YBU9MMtCCPB7ifhmbZthyqEuSt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gs948oUqLHr3JAU1JGNFHG7smAwMYvE7DwdKMwBNFWKDgNuQhtJtH2HZXEPHTb1wNhufE3u1kD5kPqEFoynTdAo",
  "key1": "4JDAER7XqBx93t16iJJjFGuf3T5MM8Z7v3fnFaGVj5V71yCa7ZBbd2V9T5ojyAwZiYLceQrHWoANh1phSkorMTc4",
  "key2": "2R8qRByBip78UCfW7BPYt7QxowH4s7QaVh7kJvosPMV4uMSqLFhSFLhaoGbzagZtrdJvY9HgzFG2mZ9HXbFhKTTg",
  "key3": "4cH8PcYVzgnufthrScRBpnp6rJYJeTH6DxSRHXyPsB5o6jfkbS84gb5Et8HQ2UKj2bTWVqcaxKJibNamKbvmFfLB",
  "key4": "5vWZTccC33147ZjCCR21zQYYokh2cLZiHyLpdUbaA9KkxKTGWdkaxupxpHxSiNKYFqorHdVmJhWTA6LodgWq8pWa",
  "key5": "3PZK3kGKVzFZnGtf6nw56wfBHnoETDbjQDSeNzPyXp4k7Tq7z8q7rBMgrA1FYey1cbmd3yFMmxbpzSY9zG9NQgao",
  "key6": "5WYGfbP9W9rWxkZgdRbkoVt2ANfBaEgcAGd1WdZCZ9Ng1wJJshXMJ6i7rt3aXu4oFQ5KmGDMLPFRZu5WdYcVhbgJ",
  "key7": "eD9yugNGyHyHZofdFHm1iK1TxD9mtm1adVNAkbvkUocFp6BYCPbcAo3KobWhtJwBw7FFzP4bKAAQH8ePx3K4yRv",
  "key8": "Pc5fnVHXn5DvsoAyjW3pkW37WCA8kSZV4Satk8eD57oGa6fYRRMT3QpFX7sAocgz2KbM7Agw7SNzhL4YLg2ko8N",
  "key9": "4BsxQ3wfBgAKxZZAjU85XMfJh3bBnce34AuUyVC3WZDrb5LhSWWHCTKYrH2d1NZfMyhKDj8FTR77eRaTXGGLcFcW",
  "key10": "4XcysEZRozwgsnyKf4WmYfS8YvbMBbVBiVnJq8EEfVmZRH9bTmw8aFEDWEmf2K8tZjLNkXRYYyiCzkyWsfGx2r7e",
  "key11": "4CDns2E7UnikJBkCH5633XPc8uQwWVct2y5fUf27nx1FMwDVJDAtSCFMMtXEznUXZXTDNBdqu6gA7rkxhyywwMF5",
  "key12": "RDpmvLRU3xYNLhf8q6R8TCxF6qW1UEAF31ZSxLvBzmhFoN6GLsCoKCtzyyuNEJC9JWZHNd11XoCY25Ge85GjThF",
  "key13": "dVqRXNJARJ5kbHD4BPyy4A5vzkWD3VHGNHnqCmGVHF7S3p7BjsdLodwdCdZENaR3TreV7u7EpNtNz8NxwufHM9v",
  "key14": "5qUyfXNK3VUwFejAPspfVSsqLXEE3PBXMKfHtFLdm13J2fiH9xCHe9u8qNPLbseoGjGVyNwTtRAw76h5rtRmwUDX",
  "key15": "3pos4RDxxp7hqJb3taT9bQ9uqQh4FGPpigD1YpTaJ3pHB7v5tecmyiWCh26tn4TvNWFdCinD8patzKi9Um2P1hFz",
  "key16": "4zt59Xx2c4iRjG56kzJxrSQ7B8HdQEMqQvm41DBokK3cf4BAjjXc9vriwMqoEk1zuNQCx9rGLyJPc8W3AiQc9DWZ",
  "key17": "2bbcxFc74AYNKgSoYF61A4HALyQmd3yvEideUorW7pjS4RWkaAMVw6NyhBkTwQs9vcruoYaHRPm84qDFNv2HpzSX",
  "key18": "QqhfnkfzUYGfu1LoTMAmG9mWfUNojGaHSBZnbwbcExo5k1jKXZDzeBPJxdxFRjvDDNGftYiwEMiVrVXZk7UY7zr",
  "key19": "46NtK1EE7HtgcvuQehw7DP3rrJHPPJA1kjZxAi6whLPKG1BAFCDWSc6d3dhnqMRTjxV4ErZcyjhsFaAbVF63qDmP",
  "key20": "3VGTFSiCumzKBBqfiK77EGeTRG2DGmXwfTZFcNRuKrVBWukSEmT9TNqJgiFjdsfjDUzJ3Xcwmusua4WpKrfDCvdc",
  "key21": "2eQVahHhbwvT3s6koiGiQ4YBuKEb7s7iZn3MLXSp1fMeo1NDp1QfaxkAFNWdcdjKf8N2CBijtV67WRJfYKrpy22D",
  "key22": "yLMeFQ1ov8t8Msh4ruptKYJYdyuqkARvCTRSjJ4yeHWPormP85C5epVQ77pRyzU2w8CG4toLMRWMGXdwZkCzDcJ",
  "key23": "5Fn77FXocDNfjqX2ohQHabf631HW5YZY57JnD3cZBFAgs8fZnkNkMvvxR4TpxZzsKdMB1L1oFDbGF7qyPa3wwCWz",
  "key24": "vcJ74QaJP4EUCZBtTndUVAAnS32BLSnQMvqLENwzNvKUJKgk1McrboZhxqmqn7nX98dausBfogjM48A9w4rS9GA",
  "key25": "3uwT4CVKgCMxgWtsJAsWc9LK2CaJ8nHP2W1BeimQQVPS5ajadGfYfucm8uZReTdq7AMoKe6HfHR2mj3HL5uXKPz6",
  "key26": "224APPRxc5aLhnFDu4aqJiN3TpU22gQgzaut5xuAy41nQbejGaDwbvb6amm5vZxD73LRCvEo75HVYQmGiQkjKZ3B",
  "key27": "4YqoSt4waNPEBA76gcppsPcW6Cne3dKU9CsRM3heNgB81x3qG4drgMqsJE3x98837sv7PYnCUgSDTyHQHn1NoXYS",
  "key28": "f3AqGKeM8AxVMemzF7PiR5W9maBALs5zY78BkZScM35L3FQ6x4Zvsp6dn46TkjPYh8f3yWfCAh9vUSkwVDqxssf",
  "key29": "44kFCE2AeTfxLbyA39bUAGm1jYQfPbAKt9EwdmbFhnvcB9Z993bBaMrZxhXFoTh3FnXxZm45D9naXnTDBbZDttzU",
  "key30": "dVVi9rti642BZpaiHjbFF4QCuyCFM9yFoqALAo3qP6cE8LcAdMBbwwXyZNAWyzSyA9SiAyfZgS1prWpuJon3Zho",
  "key31": "3UXayc5ztaKdyNsrkujz9u7gW6meRSAvH9MSm5J82kTUVzymvomcrXMvnrAvDPMcbMpXBMFhxmQNPrk8oef8bAdL",
  "key32": "374BqAQFNDp53GDpUGsN1kfMoVYZwLWgAvfjsnbHy6EPyA77sd46EwiPbcVUg5WdnkNjFSExseUYHxDkN6Z21aS4",
  "key33": "4KCmoN1vBvxdxJqtMt77xxn7mXBVb29aDEG4MteY2FsrJ7Zy28FPr8qapBr51RNUVLKjR9tH7dWUH1wHW3DhCmSE",
  "key34": "2x4xFjqDahv7Vj49pHJfJcrKVKZFq4Bv6taAAr14cWoJY3p2ecoWQYABVUELJVLRn49x69D4iZS1SRSwzdS8FSco",
  "key35": "2CfRHivEEzXgVjFNbzwYaqFqUhiyXG1hUw9wf4VJC8jSqtaHRz2TZwoQVUhWV8a3p9C784NK7Dbt7WoQRYPFPT3g",
  "key36": "4g2dt8wc3FE5JidUANnd9CVoStVQZXPW5BeGVw2EWNhmrP81yvJSoh3aaKcBHexiMZLTf822TvS6gRPLxminX6vb",
  "key37": "34T7uo3sr3xC2pPd5WJtUcrVmsuLs9ewtYZ5vpEJmZ7cnjPMb3oSpUbxffCwZKqfUpW7EUTkKMbcNDqrm9vQfcaK",
  "key38": "4j4vzDARAKP9oYVwKZYTVsiMk7HznWXjbA1XqbjSGZrpP93naNT4P64kRufUWw2uHa43XugezNNKXLqwjnDgxZ7R",
  "key39": "4WMPA76FPQamuKuxXm5bNxPFQFgXbsS2oeVoV6xrLCLisr653jfLEHSpDSkm4rb93hMCCqk634NxHtbj352Cp8pJ",
  "key40": "q9HHHEYHnzSp6SuJq5RuQABRw2VAZYKgFDbEFGc9XNdhHU3NFacMoqCTgEfoeMci17hHuVQDNh48Q65KWR7zeHX"
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
