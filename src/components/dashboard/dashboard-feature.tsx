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
    "4z9PDBGEam5RG9XSHDQwbJPijeBtht3XpSY4cnLp3Xx5sG6ziMcb2FLGEzvPexTfFMVnCVMErGYfeQ1dwRf2CtL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dJ6PEAnCah6tot3qBz37Eh49Hs6JEoKK7mBiQh4T7sNovtTPpspDXy5j4fTCx4PJbg51guAceFyLUTnH9CBAeks",
  "key1": "3Q5NSqoLGwRyuoG32ivJxs7Xn9bMQRnttvFaLJjGSS74HCpadtimd3UQat6gjcKwsXPLcibLM1EsDiVsfc8Rdk6G",
  "key2": "5XTg8TMRs3iuWv32wksRgCo9eTecAqF9naRuc54UwUyFZeyuBti8AbvQYwf6XWh4WhTLnnAGAVuW77fCY7bvYqpK",
  "key3": "4AnvVV29t2Htoo2jL5TXi1ZnPwHR57kgbv4ojLvBP8hZiVUXWGat2M3aSEmTidDX2ZwTtfq3hmXTRaeBPgE36D7B",
  "key4": "4ZHY9R4tJF3isViCYoX1ZdpaJDYwQBC1APeNUPTrxfEhqRsUauNNmoEhzJvqgBUf7nNECK2FHMnL5UnntTU6gjPk",
  "key5": "4EADiWnHMdPz3ubF9DnPqYp1DcDMPFACTLV2zF2dtYhjgbncpo25WojibXCPWgFA1g7eYpPro6X7rzeGVQphQCgr",
  "key6": "5JRnXdwuHuArjhNvfZYKoSKJtAego7yjF4EKNYjxiqE8ibRqw8tJMN7tr53GMBDfBcCm3WMZZe1MRJ6jNuo3HMix",
  "key7": "59oVRFFcsBMPUq8yDXMm8wHTyFJMoeHJmT4GhTkDYsL77mjYMuwhg48twnKN5p5f3LQ4poU8KtuMRu2DT7hfeknT",
  "key8": "3Jtm6ir5PnZTdTCVaJcohCCHYHXoY4qe76kZuc2RK9t6fknsfbHaz8BrKGERV78y6b7ZENhbcMbVV513sAyM49i7",
  "key9": "rKWjzmJndVaZnc6soDJxu5YfPxjL4Tzb834PYVrZzP3Uf87JjjwgyNiqkd1M9H99RMB5ACcDRqZDw6jkQnXtAqU",
  "key10": "25imzRBwXyg4AQfNscT2Evx5ZnaXCx8ETpGSwyjzdLWmbKArPzUpDiVJPvXvyXXeEusccLQEVwzdeBgw4CcAHuFx",
  "key11": "4yhkFJtb474erXwb5poASyXU1w873DVqV2u53E573P97CmXC1ddxtrryBhLiNMFqvghFW42HgbdUF7A67AYSto3i",
  "key12": "2HtjzhsN6MnCbw8e3C2WrtP8y6KmeHm3TNoxRsCVj246zRv31PQveC34FM88Rpv9UsR35Cn28hEFii3WSeuPLT7D",
  "key13": "4tJ7b6BGgmnxgwBirc18tQK1mmkELn8N7XBLRNdRheNkm9LKvKbCex3UxtS7FBTKhujMNd4KoMhv3WAqxRnzjdDB",
  "key14": "57Vksiay97Dti2dzYXw394EmpyAXJYkvovrxCR9p4UZNcLioHG21w6LXowXXEbQmCUw7C87PUS8FEHw5ULUmu4P9",
  "key15": "3WnFriAS7dj2jP2XJbcF9UFMYzmdWLAqHr8uMC16RvcffqdDsJnC4Mu7cLBasAcCQs2h4BaxcHiyo3rxVdKkdvMM",
  "key16": "5JHef4dw3U972pw19H4B9Bj9g2fMeDMqEjK6vbzFmdCkuTqRYwe4G5JhTCZezPrDLqsUjai4k9jY45Pj5hE8gPfM",
  "key17": "3TvxPUgjgz7f7ETA8v9j7wiGGULTFovs6DaZjA53TZJvWhpibBvp1o1CUiW9ANWqNemBqsRCzGDukf8ofyQQGAcs",
  "key18": "2wBmEyCsC9BYFkjDYaEgfJikMw4o8u3AaauhVZRYwp7KTjztjXJxhxwiTtABjmdbSm66xqnjCyjF5nEse2fjFm7",
  "key19": "2FWuMv5DW3Q9Xeeq3fUxr6D9SWe7boZbHwW3grvv1tTgZXFb6HGHZsbYsMAyL3ycLPJGRrrDeqEcVkYcKRW7rFx2",
  "key20": "46sjJCdoQfJrJF5cmcvkDYRMJWmNFsa2acbtHpJS3j31CvyU6QaCQvZ6upXXBgdjsPCVhSw5UnrAxEEPYg2AvxeQ",
  "key21": "mvFxTnqJzzMSbcLWf87QBe7N76FmC67CDYdP7wQidrer2e1K4sJYUEKUNDjfCcJkofqN4hMAuaA6PUraPvVBJVD",
  "key22": "vnd5rYRGff2kbBCzwVxQLPHXfisj2FekazTp65mmG4ZDG1jVsNfgQi41PPbT8JxSZDp7Mw57UGsMypQVVdgHHKp",
  "key23": "MmCZsUQvyfYjasDqgqF25x58PQYo8WAHnuKxeQJZfWqMBV4ZZztKJye4seVxjKBKZZyBJDcbkMxYE4Kwsaf6X7W",
  "key24": "3g3C8Uwwv9miHiGPXu2n9oefMweyvrUoGvjUxfvWLhGiT2duXf5FsmWDKGjpJcxzT1ahkr3DCZ63fwRS8jJBpbFi",
  "key25": "62fg6RedPLKwXtD6P6ZHviCx4mfVmg9FtfRxYQ4RhXgfa3mcEpVDLgzkwJRPKvs5XPGof8JDHDpLwEJPNX8sSGAb",
  "key26": "kQ1qrAP5cQF3kUztsccB2mzsJFttaDTeBbQEFfs79i7HMNBfgB8XFep9KgNX674wFYjAohpr2jziEb4xRopCuDW",
  "key27": "Z25QfwQn6fk2Gqtk8ct1NwzLGL3VVTSH3SrojiiWWw9enC7U64fhMfCAGTs4H8rawA4SUe45nk7YeduS3saiSc8",
  "key28": "3zUNc2WrnmqbCE93tpAJ5e5yJDPxjFdMFiEm9HcGjoykPfgiJdyy3DhADNVkDJWy1XJNQnUzP9PMW62QrRSU9viC",
  "key29": "2AqseaeU9CaQeF2u9PMkS6CdqCnbD1v86h4knopdjVQ1XVvvGP3xo1KnDajYEWvqFhgBizPhpHX4gCExZfHWW43C",
  "key30": "3uZEqiah4uj1Rk6GbDezHZcGHquy1gmANkzNfeqK4VbJV9kTF7QXTpFFf4Ris7QJfeyVLA832yezaSM3vU1CqXXH",
  "key31": "5hrosdb62kKRuhtVrMb7mAXrKyZQrvehVrHdBsy7wMzgzeMj52vQAcn1xn8wGcYGYtQVUbyBg23uMGjqHkVxSKr5",
  "key32": "3fdbKKsDMsKwJKyHtVJWR8CRWbcn1tmXs4Wdy7dvfynXexhmnTmwCWpDZLrYqivpsVyH5D1wnWcurQBZfcXwQzXK"
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
