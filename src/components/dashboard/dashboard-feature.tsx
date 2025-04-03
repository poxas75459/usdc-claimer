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
    "3jtdaspoiGwYwALfXssDLsxhMf3XKacMBnYxGx93N3h6RU1Wiq3HTUQht4nYBiJwiLPmcH2iiUNR4V17zcWeoUGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dX1C2HkoXf3wSeBSsTx9TE5hcNTZpQS1Nsacryeg8wocsgE4USw8qS1rfGRVQXbTpgTz87ZWBuyr5bkPFzsU7NR",
  "key1": "2nX95i4H8CNTZCeqiqttgzJiDnm6BuZMuoPADy8HUeETyyLxiqXAW9iWP53y7BJFAmUbscFpEua68ScV1xc6JQyj",
  "key2": "jXFt7zQXdVvQ9BXRozARP7FNTuAhhUeHBVHfNL6YQEgpM95pBEDx9M5gU3AXUZvjj4R6Jmg7Pm26Qo6KxAQzLqd",
  "key3": "henC17VgFaFnnKeV6FeY1VKYoJnpzUfeMEPwnrRZtR5X5CiC8G8RCh84exnCbhkD6Z3eX9MEuexvpz9dpNs7r2S",
  "key4": "3FsCHpbH8e2RgE8wHFDxTs5gPn6kkr7bqjgC4RhBQkWTkroba7UMX9yadc4T23vfmpC2iroNanFuZPQtuCifoT6h",
  "key5": "2D4biyf1G2WW4CD3YEobUCWTNGjxyRqV1TxnALGAimRvsWKvzsrg75zagKAP8LHoXPUqbYx8DHriryw8fcZ3RtQ3",
  "key6": "3QjFQyChL5KTFva1NtvHXkCKcnzjV8mStrsLUdanfPSAPP28uW7LBwvfpVz3NK9dK75Br6gCEDoCj7NJRuL3s1WT",
  "key7": "3mK5d5nGd32LZjXMQ6Y3KDdFJaWByeTC5Yqahpe15RJEFrnAzEDXZbsLhD1JoNbBcMB5UXgjBXBVRsHWG1KsPt3F",
  "key8": "EHoAZaJj6UAnYmY1PGEHnMqnLmAnjDJfw9ANWpzofZY3TqQkQFe4UjH7fNfoYp9gazj1qHCfCrMKej51Z1FLb9Y",
  "key9": "3Q1pWqdgHvb3MbHRjSSNuutDMmGpmopckHGK5H5ZKcyxu7Mh1nte27qbQo7UrHwTp3vSdcfJc6rK9SfLpZ6xTXNy",
  "key10": "2YLvv5pa6oRUnjGVfSQRGJKw4fXt7KeuRxQW5b7u5Jh9bGhjbD8e3pHgFva4Zwvdr9wfmksVCh6AGsdLAY2KyDjx",
  "key11": "3gqo3DffFKjNHB8Y8g9McEYQrd6S5FiyjzFrsbkYuSjEVD3nhEdoSSYDsNQjkB2feV5qYwq227JN2poTX98zswt1",
  "key12": "4rXVxJ79auHAXGS68RcNaPLUYze2iTifhNW3xtwVpsJPFjKKuLH6AgLd1NZx1zc3AULDqa6iNgGqXh4bZvan3pcd",
  "key13": "5S1LXYxE5tELAhjFRY96WNZVLLRLhREDgmzVRvg7ip5mVGrQSnro8BhuNc2hovLRLnhEXWd1JjDa5jEKjkN5bPJa",
  "key14": "3wxsihGNTpBRdqzmaQ2ZfWqjxnePGnf64t2fL3vNq3da1pqh41dtbehs1hVXLzovggwny7M11GFidNxvWwvbZh27",
  "key15": "4vZk9WeWDodpkpsv1dX4qqx9tPYnJWihfvfXLm1ZKSbVB6mxFFa6RWm5pEkhEHLmJsDBwWPAMMnbA45TbnxVR4s7",
  "key16": "6m771exfqrNMFVhjWGmjogSqD13MNodDxN5erFnAcrFnMgexygmRfb2dxKKQrByn6LnprjdQPpLMxaNXoQt9eKP",
  "key17": "2LxibVoZwEDoBixhaitKdqGmdWgH7MDATAFxvCcLoYMPvYdqjs2hQnS97hzq4Ew9Q1PQ3tVevbKuJRJmdn3JfGyG",
  "key18": "2SthdjnUdYAtQvu7tBiZ3HcwEDy8PsX5xP4AvTJDbcArxDXcHMd4ECdpmViBniLKANtmsxH7cvwxsqAFG8qTdJoa",
  "key19": "4jnkeoYk3TuZjLWU3f9D3oTZxq29CppZnUtZTB2aEXPmEZ9dDmJrY8H4pbs8FqrU8Sfh4aM4onqeW7ocL6ceDwcu",
  "key20": "5GKFvZ8DWyxRsUuKagowfmrySA6qEAMRvVJusp2hwx25yreJz8iEuRjkV2iEes4XaUH4FiJaXsAgSuaf94beiAWd",
  "key21": "5gJbBxgNGGsLcymJqKjJrytUbQEJGNQ4zLirEanWsmquyJGuzeoBUysbk89CewxXg1Ak7DDspkSUrDePmxiHXAsx",
  "key22": "n3v99oJZJC8CTtEhG3tnW55FU9soKuAgZ8XdgWDLyeB3gPuArNEmeKPuCwJvoosXtfYXJSFh8yRmv3n29EFmSee",
  "key23": "4unztEZDss6X3r8cUgtasGmBtfmxjAiJtWQQapHLwzQDUV1TC4Cqhx8FyWdgQgAuzwcLS9P8toyRXdYKvyCmsQRB",
  "key24": "2pJ3f1Zw5UkjypwVZSu8Gya7PpifLzvebwY3hbkdB56Dw2E9mxZD9X4KYAVv2wAtXTCkAmroaLBwcbvA1GJ6JgbR",
  "key25": "4hizGQuBeqjELY1ZCYiUnBj3PjhRd8GUp7bCauckZEob3rJd242kjtDCkyn7PA3HowzsbXpGcT53SVpt2oyKxECS",
  "key26": "3JXbz9nGjAgLmAbdyGLjDMndJvzywobN5D1ayqoATMfHupXyuMbQpqGHEhuihC77AVog6xzYcDvGfhmAo6hmj6KJ",
  "key27": "5wEenuWPBAgoi25jNLeYHJX79QMZtstyC2TuAk81pySPjZow3iwqyFunCZdmkrZ2STpFEhcm4cdKVDNpESDa3hDG",
  "key28": "3udae8gEHBnVZfWcTBpKyiL8tQgX8ypXnABdo6kop9RHLXoL9MSYx7WhYrTgCQisrfUsdVjWUWqBgBNcDsC7GofK",
  "key29": "3GApQiCV2gghNsiSdvuARFY8EwoBQQYK2ndPuPyqtsRPVmEsJyVKoigVMEpYrMJP3w48gGdC3a4s6kQjdFDaEWnV",
  "key30": "3xbtt6m3Z2vbjjksqWD5npyMJpzQjLG8gXYLU8jcmbWXbkb6DpxQFuhdarJBRw34R99MYi959PEpXhV5Wd4d4cCe",
  "key31": "rJqWkMsVhAfN6RA8ndrmpUaiTBJ4XCPCkoUQSrX2V4mvqy1y4LuEAVsoNwGc3raTecEaVn83ZrwH2EFJtMkcTjF",
  "key32": "21yBFfrjD7cr1mwRPYxmw37S5ARxeS5rcuWnBti4kcq4TddrHoAkiLyFVoWcrgDbjkCrJ1SWwE5xpbR7pK56Y4iH",
  "key33": "PEkGKEe7r5LcAubZfDvHQePEqg6FtwMj6ddk6UJLnKNyeLCHHm8bbhm5HE6gbq5z7sbKShYgprVLXBAY3gnfft7",
  "key34": "29S1Qxuwyj9WtKAEFpuHcdmPozNb4TUjKZVByYAYj9xtoVQ1nbioVpfsRcKfi3q8g7UshMx8GXqSSEztTFj2HSS2",
  "key35": "2Mrht7L6vJhFeK7fnekbU4o5ADh8YKxKuSSpqMk9ZFVicyyeySNPMvp6nwZw9U15Rja22GTp5bXBKUid2BqzY1mS",
  "key36": "2qt6knGrB8nSZUHD1br2oD7B4AnWdygFuhyBTBYSwv7NHvQRwVNyyWDDmDEhfGEgwCt5TvPpNn4b84Zt4ndBLS9J",
  "key37": "5k99ktnZHQMX8zS37GgP1hg7cGmstfbvjnMFU6pETLGBH5kd3J4gBUWsDYYP7FkYpXtWZfwMSqB9YzGcfZPCb6nL",
  "key38": "31YxtwCpC3k9FZyaxVRZk8K6TyT8MtX6TqcTzEeNh6eBTuCVrDRMNnXYULoWX5SaAJamPZ58DYxVrVwfCzxDFnNQ",
  "key39": "5HJKDtbsLCgfDSCpf6pLYBr1AopqWQ2fhxdMnyPJfE9yiEfM1wzRudemmtT8q4PBguMWRsqPKFBbQnPZJebdo6tf",
  "key40": "hoWwKf6eUvgdDzkHC5TCgNnbuMATryBSZ36pQcFNBG85G1dEpcAoj9vqMAu9rrY5mquAztHtRs9Xo4USYQxKQBX",
  "key41": "3ZLrDQbNLecZ2mePVfKVKNm99JsSksn3cpV7QKiC6eaQf9PBLATQaqQcsg8HQLTnkjzmbwBmzYEzDAB5SsEwQTFJ"
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
