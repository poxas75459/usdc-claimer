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
    "2S4joqBjeVqi1cjXbL4NXejLtvJrCqvpnV2ba7Nch633qzAfUmXgU5f5pLoVQGcQXcrW5WF35BcgYGq5hhigUm7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BcEdfB5s4qZtxDwRfh53iD4mxvekKKvUUtrjChyfcGF3B9A1VMB6TgQc9FFV6ZDUn2A8v8ioaz4BRNnsWgK8ecM",
  "key1": "2zBhfdEzxP8Zf4yWu1uN7CiVwh4KkVZSbhBZjF7G3KGzrjYfiRaAqusC1ecinbk9Tn3KvUZqGTfkncJjuZPqHAUt",
  "key2": "4XSTAz9udNTtTDh56SqoiU5WGVFC96XPGsBVWKHuVV3rbFDdRgqAH1Gt8vCCGT5uRXjX9RXULdNrqcEWzYUSGr97",
  "key3": "2G4szhWtzHLLCYeuDvdi6Qka7UYsifiF7nFNiKjVygRBX5v4Bp47t4N2B4oaNzEJqECM43t7H2BXQfB2roGxU65e",
  "key4": "L1Wnw5vMZttsN6rWekDvsib6q9bS1sQsefeg1Q467G5bZ5tVNwWrACtJFygDZQuvNgSAUF224hSNF9gXHfE7zb8",
  "key5": "2ErEnAtcqQL9DQc83yDbJMbTug1oL4Qrnv3KFnWFnLUGmtdHeMa32PBY2Y1gBDu3SKmwBcKw6PvhyKY2JcaiV47C",
  "key6": "39e5yxduV6Rz6ru4GjQVi5x17s6KdHVewxLM5EMQ9mXbm8zVWqhR2aXxrb98ZkTsLkyGgaoYwwaNv83UhS5zH2Je",
  "key7": "JzduaxozFDAwx13yftYfRLsJRdTupQNVgbMJ86iX6jKoPNpworDoZTC5UuT3pNPL8pbt2WSsnTquPwARSyHMErE",
  "key8": "fpcT31gHn72k2fjjDeL6Ji6cqz11Qdc78saqeCDuSFVSyfu4a5REYX2ELWhjigKgCPAbc4eTk5rnYQ1FwKj33Tn",
  "key9": "5aKrTVKiidZkakD4rkcdsGrYGxcT46KvA5s39oYuuYYAWdduLgHBFU2AZCS3DoKH1qZNr3MURSF4UHyquyjLEwvY",
  "key10": "5DhqyjcGk8gncGhespaqvpUChKVzpHtbipkZ2bg5GusmiN2nPunAc5Gq6o1gSJs69LYMyqfsqnyDGCC27wVGaQ4V",
  "key11": "41Qjr75YoxH8hrstXZkDSjXMmoWVmNiSQXJBTu6kdeqJpQiXbgi6jaMtNTKBfuEJBfTZi4CjZGSwsrQgwo8Skjnq",
  "key12": "3dgQeZq8fC2pn9qt7NaYqTMqAXCuHbuEdrTqJKZVEPSSZnjBfxgCtdFk5fePgzhmR6LeDqeUT21W1B5VSRLhywjs",
  "key13": "6549rzftUQJq2tzaT4oENEWyqke91teb4nvJyAkTXoYmECyYWNkPqPGFj5pMsKN9hyTRdAbn5Z29Sp4LfrTrHNXG",
  "key14": "3TZNAsLmMXHW1x4KjjRBY7SWeqZ5TMNu9eLUUr93aob6gik2ZFayC1YB2WknA4AN7Rg9baXkRM8vokw62cKam17g",
  "key15": "2xnA92eYmkj4MGWYKvmP3F1jCKaFXi8rwMRnzRjtb2hXYWWTy3PiGRPaBrVWfuADwfFjNmoXGgbiMipx3ao8Hxh4",
  "key16": "2gWhzgCfZZiHqPXHmAJeuND5bEr5sezHghJY8xYBtjvHyT9NN394AarXk816xx7jmgM5LDaXiHNyTTRQiG1G3pQM",
  "key17": "5CJWXDx4sEMzGr8Gmor9pTpNGei5ECgrQuLzvBpLmqmUqN6GSaxXuxWXVA5yW3DAGuqoiLMU912T8vfYy2wa32dy",
  "key18": "3MCMJysPiVUcjdqThAYVV9vQ4PH8N1TVgw5JhYoKPAfYscq7QhgkDDcTpFWczXPyuHT89tKzsyKhHjpov6ewTxaN",
  "key19": "2EzWYdhaXAcGdhgqSJLVUM57Cug83Ss7kxmrXGNETkEcE3YwZJKV8tZFKc9FYZLf8UDZEjse29qm5Q9Hz5TMv1Vv",
  "key20": "5xZo1rVKdaDREVCCdutma8D4LX4oNqWWg7Q2SRUrw3kmSckNSZg5XN39ZrApHh566mdW2QAFzY25cXWNXeCn7P9f",
  "key21": "5jy9PLidSFqT5XzfeZLGEPhRF3nRipedzGCNDyHigSnchhwyYzZwT3FqR7JB8MkS876bcgCCMY6mESNvTuoVk3Uu",
  "key22": "LdPByiB3mJFFKvEGkoKi2kSWGP9SutBa1y9MW9R2vS1HL6SYaikzgLLtVsNCJNxR5GuPyvHf9gboYpAVB2t7hNf",
  "key23": "b5HsGa5xcaH16r2SfRMsGW3A7cCKjCXqDTKoqqckiuckDYHyth1HUTkpNUAqXHsZnG3F51qCJYkmTkTyLghXsi9",
  "key24": "2o2EWpmvzaVziev74b5Rs2Q4DengwTDBmHtkpK6PESaaNDskek9QvoGozEtArNMqpyxaNjw1AE6YuY9Zv12hCr5o",
  "key25": "3czE2zbcgKRxNkzfik26Nkv78PCz5nXiZ9ECtVjqDAExGPLbTWnYZijbso1jqZshchNjauWDkpkq7N3rqyJUQP2s",
  "key26": "5Paodrm6iiLHZrKC1yg7smKNVJQFKdEG6icez4tZS4McEby1ynv8FjawJXVmeseioUgxizQqSsUbKMNPCRsvVftJ",
  "key27": "2QEMSP5nEKRDvvuiT8S5q2pRvzN9rUFovXKBAvtKwqaUnQJJY5GhhV26ZNrAkgJpaiek5VyXemB5zjdUsNTcgwWJ",
  "key28": "3356NvK2kYTrwYPijjUViuxxTbNaZqD1Nqgc7YHwfHZZ6r4b982ywhJgcpHP7b9uGbEheg75xovUUkYDT9MZ3Vgb",
  "key29": "23EdJMZn31mqFURjn1pHG7v1iTiVBQLo6mu9hmUv9XJP7evpyfrkkoi1jH5vefEHQNhRimYU6L4XmnHrQPEgB9gJ",
  "key30": "3HUDqPjLfwi6jF3zPc7hEuUHuFsQLQpM17mgGhNdcg22GMhY4PPML1A4M1SZ5qCZHwxzDoLj29kqBKBhBs3e7PPT",
  "key31": "nYNfBc8CsQmZorT8kp9WPhWtDemAPkBuimthER3aHMEYmkSk7Bhzuo3UMNSQZa3Z9tGZiTbVAgt2oK6Hcvas51K",
  "key32": "pjwNJJAVLbAC6rBvBj8AvGgak9QdnsEYhsuRusjUwNkKK51668C81W3QY2eEUEKkZYZ5XAQwTdQLJpoah2aASz2",
  "key33": "ieUmjye9TnHVb76hVFzVtWFom48uFEG8uDpyvXerPiGQ5JUkMG6dznGutqsk8eJ47zqp3z4i5yWZK4f6bNKL2po",
  "key34": "4ahjV22TDtpq6U7opEp8H9Hwx3Hk4axgaChEjuc9BHA8qjXGxkfnmr78VH12e2q2XSJm1chTC8h1cSoxt3iuR2bT",
  "key35": "2gRB85zcVEN2NXHJgVAgmZWGxRUZsy1ZFRNEjmX6vtoJ8vUDNJdtNb7yN2hkjbpHpm8ReyFDy4wix965n8yBJzLn",
  "key36": "5fSD1uArwLtXBeimGBeyzB1pwmK8QDpMQZheAbAFEEjrU6xzTtk4Mh6GDTkvs2FAi7ZRAKZqmdxMS1MtgzwmExrj",
  "key37": "5NK5HaUpFTY3JECLwSfExFRHpb2aVM35RhCypFtCGvY8cGy9M3UesU23SJT9Bk9BMVKUMgQzG6fW3yUCLiVRurZ3",
  "key38": "2wQAWHyQ7e7zhPnUurqP1WkEEZ2dUJasJc4EeUAubZ22tPfQHgK8sTYWvqeRHqtY4hMY3ZMsuiC5NM1GcMuoQz3m",
  "key39": "63acCUgPv2jdhSfgghFmN8Pidw6kvN6RLp8CHGrWRjNy1dawYbX1iGS4kwdWNU5pptto7WExs45A9f2vVJrKHLpv",
  "key40": "5Z3GtmjkVgXJqdtz21ZuL8xjr2m8zWh8VCKQJhJkY2m9P2nY9nkniY5mTnRtJfyWhMxDbbExYwinUo8XyLcDK3cj",
  "key41": "4jG6s7jN8M44ogJCHroeybrLCiyQYWXwLMfYrtF5as3YcnTveyuB1vVTdrqaxkvAhgbQyKnwXAKy2MqEJWyGGxQY",
  "key42": "5vM1ZpUjjU98jQjx2HDMUKM4zNV5bQZUjXMGKRCn5uTzfNi8gZgC62yXCe7bX84SrLQf8AZmZXwA2bBoYdg3U2HK",
  "key43": "56Z4d3VukGwv7bSc1knZbvP47BoZs6cBz4xZN7aW7p5P5FBEeeB7VkuhJppx69b7e5rbp9hyFMx4uGmbqagwgk2a",
  "key44": "4pdhtC6gVmHQEQFAFkVM78KFq3kK2FmVBJjtqtVBrQCou5ufq8SioKSsg9YKkP5rn6yErb1FwJhNh2mjiiKcwq7Z",
  "key45": "3DKR7JTFsHkjNRenvdqH5UoBvJ5q13nvFVLQB5SMGxc1CKaYXrCacAwjwBiUQXCcnGsRd4diZbXTrnfNVaxKMx4j",
  "key46": "5GTfpirmNTyKS9DhSLB1U8413hW8yeTi6GSu589SccWYAS4BuacDsYYfe3L7KMwy24UL6ANyVt8QgZwL9jaLnTvb",
  "key47": "XwiijU5WsdMgeVGQXR5YbbUMw9MzFHXSdUCCE4ZzHedUZSE8wmnn2ZGhy3Nz1pGzwrGLCtrQ3pJYMgy2RDgypth"
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
