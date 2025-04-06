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
    "GfAzYfedc6eJEb3SNggx5WHteeo116zSHGMrhZQajuLT6a4X6J25mUrnux76E5NPzvZDFx9z2LYMHLGVSE1xUiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o5Wivhbjd9T9yayCvD7GkzB9sMLGnmB6wzQ4xvLCHEDRrQ6ruNNocvmFhiE3npG2wmy46a4NcAJ8ptJz47PcGa4",
  "key1": "22WpzR9HJGMk1QHZ82ehGVpwUkoTNaYUYRtT8f27Ro2sj1KpaCcf8LEitgVpNeGHs9dPyHW3m3FNoUuJyRqN1HPh",
  "key2": "NUU2hsPdP6cfNzhj9S7cqc7f8TSkpkXuiH2X7FbZAZEhLDwY4jq5zSY8AkwKhxLb1RTuqGD9HZt11YDiEEi91Pg",
  "key3": "BC7oUf1UuHVQ54fLK5JWAYAcKKKrErmfbsEiUe8csGZ6fsLMrHUp52isBi6Ab1ekJzy5c8zmNfwaZ1KGHdT3FK5",
  "key4": "5gD5LLSpmoBBVES3RbrHR7MpJcaABgbkujQwre4oqSPpsHmLudtVapv4HtfHf5QUV9XwaBCJpqSpaFcSHXbZX83m",
  "key5": "3xS36he8ZcxrrrjpX9e48ZFs5hRutrWW1aAYGoZhn8STaoq9Zk6NFQ2sBnHPCAdXuZ6H8Wfq8rAQNV28escehc4M",
  "key6": "52dQFQ1pxt2QfnxKgNMPYpPgrzn1sfa1U5X4dKQxB8xZJzTE1UmcWHnR6owUeKpkuGTukgKS3v9b7gHcmdtKdLWc",
  "key7": "qYkdqFF7diwDB4CKpX2x5K2LDcJgNQNcph1Y3GkyP5Ey4gpapjXQwhGB4H1eMG7BJyhhdsVvZbaUE4vGJc7Jkpf",
  "key8": "3aXLMSpPxBQ7VoxpDQwWB9D4n9HU9ewgS2TXmAg9z7XPpmLkJe1pWamgcESrn2fu65Ng1kuqfS14g7romD52pFL9",
  "key9": "4QwfKpyGL3tJhoaDgjij3vh4VpHaKzWTRRDMENT8RTV47g5br3jHa3rW3HhoSuybS5QxGyvpYQ8iEif5VfJ7HnwH",
  "key10": "4AZP9p2fjbqtq22XJPAZumN3c9bg1vJL62kQSfLhvzXDxAobXvFKr82P47VyoTfbVf87gopKNKWvBZo1UjL4EkhP",
  "key11": "32hJ96bYpTdtMjyz98ytS1sndgDfjEe3Er2n6AdkqVcoaFwir9jKLYnWqDLjEmD5xNB4tM1FtENnSd3JuGn1WKQb",
  "key12": "ch7VQyLhnMVik3EqKgBH1rm23oUKUAs2Y2rB2YsYtDwbfc9EksmAyaFX2YsmKhXJw9bXWo4vXxZEYCK7BHZtvr2",
  "key13": "43hUYS6q4btao4ChVEa1jsucxEJnwFRqv6bb3v1GyojECaWusnPUZjqd7aq74ZDDYMhFArkj3F84ea3mdUr8HXPo",
  "key14": "61qXVH15THNU77TRdsu6HPEbNET7w39pQ1vBWPqrFLzPJhaE3kgg2wuFLcaCxDF9LQ8DCCBUwLSo1mydrn9rkJGc",
  "key15": "3WD4GhtCvB7pPsiCu8JY5L2nPXzMaJ3Bj63e9gjzbADuTcxDnfGxsHht8kt34jXr7tjfYzf4BcQirGHLAtavK4Fm",
  "key16": "32k38PbGLkMXmHVBnmjQEvKLuBipEY6Grk4xJGofBrmRVnx58yEa5YX1tLRFb3sBdZ29Rrrb7x5GkHhWNVE4amq3",
  "key17": "4ZDVVWSkg3JWDkv1sxquWWv2pVbsdRsT8hy53Yg1zvUYuQxoY1o2gXgMfdbLhi5E2irdRkqMUjMx9RYewauMqTwQ",
  "key18": "475gSGYG3W8W518rUJursXVHcmFiuVYve7NgcVcGjK5qmjh6U4VUQz3jErL4tKPEqUTErsAa64zUr31fChtca8g4",
  "key19": "4vVC4vnhTM6j6Qs61awCQX9JTmduVHioQijGD3XCmTjYyha7EF7YCnzgT4W6bk53cB5v1gEvnvy9iRrRwhoiDve2",
  "key20": "2gTmaY4D15tA87dJiWa2GuMVi5SqB3gWQHq2PTrVptbKniRGLQM69iyoYuEAafjZPj1EdEdgzZ8fFxSe9iSMxeuW",
  "key21": "4iRdhqJKgnkLMTvCmzmjMupQe3JFPTRiXAJdG7BbPCHH5JhRQ6giiy6KYwdjGHPJweDB5kAMWfjQR13Z6e1aEEb7",
  "key22": "3PhztgLRP2qDyiQiHzhv4Q2HkUjWX6kb1wANYEjqhTDgv4BZaA2cqUeQwLqP4tdCT6BAum78bhFpzHDsX4KDvbM1",
  "key23": "4LtpZkQSkf8uUkowA41b5uuMTDa5dqb1runeT4Dqy2xjXxtyHphkHFaPGRQByMqk8ufQT3qPXRcoiXZXGhdZrusk",
  "key24": "4pvxVvVonEt26H9UbjwTegoytHJcFRxik5CvjyNb4PfTp4CP4QZSm8keXMmE9yE2VM2g3jf7oqigeNEg5C2naKUE",
  "key25": "2LUMZPrHWHqEAAu6un1c93anCA2D56fQLy61K7sYLrEyEEtGkWCGFAZ6mYjiBZE1aiBW6FiSxP5CBvkXSHZGrthU",
  "key26": "DNbNYovnuuqia3m98QfVMWUr1uBVTzxhPU6uZUYuhigCkhN7CohcAq3r8hG6D1ZnK348sHKfTA6e9GsAEV5y9RH",
  "key27": "3XzBcvMApfekNKKWVs1jxTuh6DFN6UUgHMgmB77BL7u3K8BQNFd2HdjtpHhwKurwbR3feiM6GpUN7Hzp5gNwp5qX",
  "key28": "M7dKn1MuSLe7z6tqbrvv64PzgmPMrXwzWiXXpAMAuafB4UQoPGen3BYNSxGCswsvMcoMWZP4J4SqwoyNKPyPCoA",
  "key29": "2Pwarg4zzEFxGQEGkygKS7DcG8ZkDPCiPqg4vc5vtv6mzJaTph5Miuau7UfVcADJfnFFLJVx68KYGvbqe9FuReGb",
  "key30": "4bNsP77rAQrku6pQtvG3MxbwXtka28Y5kqQ8CkN4ANZVkP7icqNhVHtGnkK1u5NWkdUpqoNzNY23WSPpSSYjpatY",
  "key31": "2g2nPEhHvy3YBf8newdAri2JHHCMCTf2xfr5pLH6x2dxHraQ2FtbMcssYRdacnEDPqtQgSekgkrYcrPgJ9xZhE4h",
  "key32": "qWGp1neLVqvKhNg61jtbcc5me52ziLuZXAvWmorgwqZSfSC8yhmaBFz5kkKeLz53vaAyrNhfcy1sTSSkFk5w3pA",
  "key33": "5jYd7APVZpiwWrTbgmNMnCcaX5v1q11M33XkNKy4doa4qVP9PCxaADYuS9MuhYBEsiyJyby2bWjtmxoLzsUJzmC4",
  "key34": "2hLV9pNFv3Lwr8sziuWfh85GiFzUX1N85NtCUG8SeNJPoQ7XvyzmcbAn8Kz2kwjAAVu97D8hXkEX5NQLSWbNEE8Y",
  "key35": "XZ6bdbCQU8FYiDJaqcv16HPEHTv3KfaSfVnFjB5DnYSp52oP7oacSJbNjxqoWEUKwEYhvpwp9XeiV1ZNdk3Ye6q",
  "key36": "26G26yenmGq5HD6KYCa5KynqQc1A8CeHuAmSKD6q4sDFrKJFGxgEiSHwgXCTo6KbmN6v6qVbMPX3BmwvMhJtvnWG",
  "key37": "1z9eFcWvKqm3bWc7DE6NWekWQnS1t4k6ghMQeei8ZwWmxAri2kWajnmksfbE7LtygQDp7M9m8txDrGAyjPkbkZH",
  "key38": "drVnTydoRMXb8F36CZnmjnkRmGVQzqgEagGYXdJXuFJUowj8LgQYES4LGDvMao6weXKTpHA57THKJ6Gdj1qi5fn"
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
