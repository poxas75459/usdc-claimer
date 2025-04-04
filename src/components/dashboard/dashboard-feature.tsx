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
    "YzyAvna9NupuwuK4zt1FMZ3uAgRh7ziEapa8WN4E8XR8XkpSGcyrS6Gbf4GoSjc4ABSKr43L2aqUpqzJdfYRnGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NJ75h9hgp1P8pHuq4uM46MXEGJqtxFuPh9DPMMc8DJ3SqGiP7F3MwjgTA4EoWf7LEdD6uSjPk3EXGZCbU5at2Ab",
  "key1": "26dg32joBczskusamJMpA1iiwXjqFEHEftvfzHqiXrzYTSsxq48iq3HgQ8HCFpdzsHCTJixwPDZsiUFKQi98NTyJ",
  "key2": "4GLuG7Tiy7JVk8s7f1d673HHCCA6yEL5XtXcs3ochNneQr9rwvL5hudKPWjhNHeH3SFSmaPTGqLDjAWR84UDQpN2",
  "key3": "3T9FztM22kAo7Z4QcPBHeaRAyFRFBFs7xTBXU7PA5iksjywXUsE9Lbe5KjxQrYrePCwiGf2TVMkzRqSMm8FZQeHG",
  "key4": "maBjE1w3eHox7ojuWehcxcTaHNNNzf6VZsUeeZ3u5kzCAFi3wU4WhtgRVatAvmEK1PRRixeQrGuN7dYS7BXQbqu",
  "key5": "3m1zxoT2rW5wQcd1jxFvozjirndZFxQnCHnL5bk7TuoKj4Vhqstrn6bAk7BQhdNv2A2c4yTZtABHvUXLnahKxr6D",
  "key6": "4hZE3qnnjBRdo1MKKyH9MdCzAtVr5brALz4KyV1roPqZxBP4EKMxNTH6MN9iHUff1RRY8vUiASCafJd9emPnZb6C",
  "key7": "4EwwTz4236YKWFedAH1888Fxf5sKqg6YzPVW75oLN9McBBQ3WyqPtUFogDbihm41TiYsBDN8q2JQ913ePL3YaPFK",
  "key8": "31kvNJ229ndr5zeRQ2ndhnmEwMnyqPmZhFuT3UJtLJdiUrEgU3KhS6xWoQjuZL7DoKTLrm9nQ5rjJNB4puqbqnrq",
  "key9": "4z7k3FtgHJZWYe6DGYTgvXiS1wHSNS1UZHuPWhsx5x8t4trZFM5YAbx2ehu3YdNpyBWCQXS276c3mWMQgZifbJj8",
  "key10": "Ghtm7mX5wuvLUqQihEAvSDSfb5XWiC4mjMj9aUbKNRpymKMeDKHrwysQTDKeCrMgmTRncPAZLggDFYemhchJ3i3",
  "key11": "3BW6Ly7Azv7t9MAuviN25VnHz2RwxQZcqn8P2AzpvunJq9iSkV5t4iowWy5X1bXAmNFbesh8TpnZs3qboAaVUxPd",
  "key12": "5gHJ6Df5rwMo7iGs9kS7pcLYVjBf3Zf3nWzm6q9otsWJRGPugqj8UUyQ16R7svyKksnqoY7MCL97yufaRXS4JceP",
  "key13": "5xNhr8T4LJpqUTkfMxfP3rXQQKpraHLu7iAg2HmN1Hrs72a7RD9JmV9FYxqmHSRmmR6jvjPFJDyCTWJvpL6aNRBj",
  "key14": "4KL3VgiAdYBeYGf5DrjvgfipD2GMPYdT7uEKbSM8R1CCEPvtE3nNZPdjFBNkLKo17h9qfALPmXM9RpN3tFTomek8",
  "key15": "2SkP3XZDzVNS1qt34wrvCKF5GqHsAnLoSimR1GuM7jsGBs2rL76Hddu2LmGpoUG7keHStFHRjujmv93EYSb9zP7s",
  "key16": "3Zsk2ko3xkA5HMhQAFswtTBs8rcQMdJKhfEH4Lsf8V61JwJPmAbdVUBRKDsSj36iCUXNQAz9TGY6uQj6VHh3W5AB",
  "key17": "63bxSphpV2fZWaR4n8hq2RqAYbqW7Q8MSiC7nUy8tUjXbdz2QHHrn3JSv1ba4x3eq4k8qRfoHh8QLCvBmc5vD3xG",
  "key18": "3rGvUJkEKXu2Be27UZfT7qojhPvRnNouRo9KkmbA8DrtNPfsdH4KTPYaPTTsvTCWBnGcBg13eP34W18CvW7u3rnV",
  "key19": "srSYNrNUVUcF3cQV14v9RyJf5H5vjDASXKgwPt7J9wJMcbhbPeQg7AWaCgJYkoqeiJbfWvpERZbP3gnK1ZzW6Ht",
  "key20": "T63DtZg4QX7udh1UFPF4UAcj1KdaGGyvhmvE7poEGGLoJAJGpR4JhZuk48sXQLybqfBFkMtwnP81wBde97q4Crh",
  "key21": "5mAjkURofTDEPPNwfbNxRj8WrprbrssEaf9ihaokcMha94vKRHRGT9GCANMYhJgjyAcKcv4Ti25bR78xE2Cu6tRj",
  "key22": "5RwoyHHZRz7thWoWq5P2xYQ9sPznUgiVdFEQY5Ug4n9dE4G4nzPhabDZT3VxHpyWnGqXZiztxwdGGFFmCvyzUnbK",
  "key23": "12A9bKRvSFVY7BvSrb6S4gdJSmHEAmk25NeqYu3jNUFmN35eJed7fCApZmdJ4k3Bx8LcWo29DzznyyzmcBMWFauh",
  "key24": "KN73WXXJ8g5KLLpxG5qHqUMjHvuM5CfSqfUyYuyhmkzeWNYvnWbJ9mkquZFtN5LedDhdNXdoT4amB8yBHYZHg4v",
  "key25": "2iakWK16yX17rUck4kAwHnfwayENCMMhUr9DqDwnchKxcStV9b7svh6q3kTn4gj5waP4o8Ba7kG89iTMN2wY2gsa",
  "key26": "5oK41A6e4ypePSMyTJFYmVMW92rDehyBimXqXCrEicDytg4H2TWcdaT5wMFrcpKd4xbbRX5v5f8vHaE1AEZ3JbMA",
  "key27": "5u5skdd1BTgcoEh3XhzjrujhBDQSedQGgekux6nyw1bcug5spycP9QnBgYwDEewrBmx4eQoQuzwr2KMbLyM29q4i",
  "key28": "29Go1jvjKoBnvQZEKZfDqHdypDHzjLwuWyJ8UfhAwSf2qBQFzeiJn8aVw1r2fukzYECNffTdVkeHjmZfefbd1kkm",
  "key29": "2cPJvU1WZLCqw1C4chnAKx2bvgtWXF1vVZt82p1GU5WgPxuScaxSzncqhBUNv42JuY6VLp9a8iTP8LCzPbTsAZdt",
  "key30": "yA5fMbYTxc7cumy4Tzh3U1BXtnxYz61mAbciUBBtdHn6o1mvQ3fiwFfdUWrv91LxbWCJ3nYdYNxx1UXKkQtvsUm",
  "key31": "TMJss7qwMqmog4f111khADsMDCna3e9KVtixAE6ppogwgpBZGgXKhm1CP7AHtGjrDucbT16wBs9X8cLBvuKgajH",
  "key32": "2KNfXPUojpG3L8fqvDr41oHk44NAJEYPkMEMUo1eeb82MHqUQzGX39fuuCauDGE1g7b3DqVJ4unPXNicJ9WiFFmR",
  "key33": "2Y8ZcfziyxifshA31KxLPa7Vu9tY8X6AaYVT87ECN6o7FpSAMjDNKcr1TP2B49FDV5ndSUJdc173zV1itzWHfGAo",
  "key34": "2ZU9FkeEvEKhT4Z5X3Qe747hFNwYjfm5m8ktWHgQqnpzdsNN8zymio2NLTpWSu6Wi5ZGA4MAMHT1Xyw3EBUeRytY",
  "key35": "2RW9RbHjpaT1YU8Upo6X6f4qB1FTbN32Y1VpzHeN6NDftr1fRf3zaQqKq3YyBg9pu7aSHYE6Nyzac5FxfF9ph1YM",
  "key36": "3o7uSEzz1esSESBrYFE78xDX9yTXE3b3KnrHpkMTMadeQjokcwa1pF3aGNsUPmqFj94LQFabMHDwt4QnkChK22kj",
  "key37": "oYMZKX4PAnjNuKaPfeKfQZ9DUP4kpXtZi8U6pCz9e5rRUq6XhNGesjivD86g37AntfXFoWqg14ZbvGKuh84sJNn",
  "key38": "2ZAqa16qayGxK69zF3tadTKc8JfGt6NxHR2Cj9boN8u9nrWAYiU4eLwBsAQid7tDQzz7dgd6KtkaFHE9gXy91kes",
  "key39": "3TPm5HtA1z6EM6dKmcxzd1LF5RYaHM5RovKttADRHBeDPnww8bXHHwwup93ibg4vSTgdkfgTkg62qxxptRU3sSrz",
  "key40": "5vDJMjzrv2uGP4TNwBZeUSUxD2ZjkJtRtxus5KBX6UDnttV7LDuKHYqyqFatnKd5JU7FWxPn4iHhWpPr3TNub4rF",
  "key41": "2Zi6WaLZXjaHbXD42UQU1LVbn1jjYnB6Ybjy35oaLTkpAgKSjgkWe9tngMqfhFj2oNty7Ya53tXq1KSgJ9kNgXAT",
  "key42": "3c88eaD258kwQ4JYdM2SXUoZyx56z67bSpfaUNSNTimDMdDUES7zUuPQK9WJLfUWiaTA6QixtkPgypMHesCpywNZ",
  "key43": "bGb2StYHYdg7LYbgwmfust6JLNZdxVLSDT5LS8GPiZfvzeAXg4dVZPfbT6Ei5r2cHnYgRV1HR5gpeuKBGmMEjCF",
  "key44": "357rSzwr5XkUAmA41KfhbB1Y7WHhz4DRVNjaP4LhUEVUnNkFieik7bBE3PHwTRxohBLmW32fUR86SVtNuweaL8ke",
  "key45": "L5j5vv4vRUz5g4sJJbqJo9JzKpLWKE5NcGiqSPjGn4EiqDUzcNQxre15g47SqHBSuQKSkt5wiEgP3pZCRMioM92",
  "key46": "4tFNknjejrVYKstsckjrHGWsA4z3Gfo4H4sVGgSA76EK1HkbmiETur6Tmu7rFjEsDhumjreUC2teJwAnAJ7hh2E2",
  "key47": "3WrdGaF3NMb5mbqWZi6xcUTA9Vq6HKxZ4oMe116NQNxW9Pw1X7A6EYYKgLsoMsTGd5XJ1ukHUA2ra5u3zLvJmfeb",
  "key48": "4C3U4QZ4JDLL477Y76FzpdYgJfUDh5AM7o2cUEpzcAVoTVXCq1MAvz6ZuuYd9o9tYd5U6qQmehiLscaHq2hofAho",
  "key49": "3sj4Lo6rJ2dVg5jgKeHFgBZBaarAfvXnQaFGj92nRARNzApAh3yiWuZ9DRyg7oCpaBum6Jv87aGX2Zrd9hd19c78"
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
