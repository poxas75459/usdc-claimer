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
    "4EXR3ZXbJ3u4TVGbyTgzDykoas7Wt3Qt7JfwQEk8feVgXL6umWtP9udaAGRLBZ6aUkKuKWinZozt3BriYneuDHdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sv7jBhZ6GkC1Zvvm8D1PT3wbejpTzw8zDZEeqqdge6s6fF1xNXxU4JNhuGjR8fmKbcLM6PwcFFPvVvvHfwXmmHh",
  "key1": "4BptNDK4aVrLCuJA8D5uRP7LFCZTrTQpKcziqpFFkLubDjZ2SiBeaMHZKdAyVHYuSa1943Zm19APo61Tkp9bwN6S",
  "key2": "aWG4aX2pDHjVCTS1EKRZJBYkqudHnAJd8v8qdCrU45GoabG3nGKxfwniHPXUhkXMG9ZWedMLhCCpjHTLSmRxSwh",
  "key3": "4Wzo9rY9dUS86SZEFE82tJRoxKc6MFmQuqz1swdjNTtas5jBQpGLeE3zChbRbvVosFUTywqLL51UeywMFGj23NPm",
  "key4": "5QXuZyofHi3pvWMkbkVNsrfaxXs7HPLKv4wb6iNmNhQbxyi4Zo7wLKCBU815VSiTNPkPpYdG2U2QNHxPafMJHZqy",
  "key5": "4i73M7AWBM9doF3xq1ZcEVhouCyU5gTAne188G8CGVYauvHMtrhsjT6mMQNwMbdGW7dAbLXp2h5TjJd1MhnncS3x",
  "key6": "4ewq2bfguNZ8Fyj6c3vFwGfQRBHBXcMRjYMMWEFEJczFfrneLDgKkcenWft1CCnnsKyvwQGyKtyqZBn1pGyBmqhK",
  "key7": "3j6skrirntJAcfW3xsMUeTY2WXi4nGDqbQUF4EtkFgf6Tha5kgASK1YL424Z7kxfCurYDBT4KSP5oa4iVBBa3kwv",
  "key8": "3pjSebsWeXBd1e47jHcHKf6rZF7szdgkGEs4cSGTxH7waWich7XfGa3y4z7wqgQeVAUjndYhewGgTVNrV5jHxW7e",
  "key9": "3URsthMktz5E26C37LyBGZo1RjUdnpJktcH7ckg5GtGiCtXQUYrGHj3ShiFMzZ35PpAUDQyahPdYBoSSQc33utxD",
  "key10": "2dsyxs6uTyVW4NuZ8rb41ojqwm5YPHAWcLp4ffG2GVwX2HUWVaaARp7TtRaDoW6VEmeYwTxxMnrcVX2EAGPE3EPR",
  "key11": "Q6PRqbxbmJTPf4S2TiFxwA9466dDvpT7hEavDEnYSXtFaoKvPJmRtPHAsRRwSWTJ2httiasAoej55SJSZF2nE47",
  "key12": "4HwQkjQZ4H4tQmmpnd6cgu3S5mq3Zte14L7MuAPwtwXetGZKeBKJ3DL8WwiyHywFmuTBLUxEKQbf77jczATAdRJL",
  "key13": "5TVjud7CiYN5XLR5NSTTR5Qv7xq21aQBxraGQGxL1yxmeLAZqrgdgTTJ4Die7HSFHsbcCxAEKnJwKYBUNts9RnfU",
  "key14": "EHR1V4a8tQxSRGFYyw4Y856mf44MtSjhG19ZZf2cUHnGBTN7LFtjVj9py3w6rpDsDTvreuaXq2pMD5CZ7mtGmVU",
  "key15": "2f75DasdU7DEXcasRTDBuc5UEdopg6D2UL8GhJn8a4B1ctpjr9MYtkdAXj6TyFdznMgqq1yvx9xpqZL3xpc67ma",
  "key16": "32KdSBDZCaDgYdE8dUYPghRTdPZLu5Zm7KXSgS3UuooYAKfaSgPc6Ys4ewANbQJCjCYnkpkbuioKd5ScMKSpcJyi",
  "key17": "AYtUMrbp7GXEvFGhjx1K6CTVzeoqMvzrwZqpQ73FzTUMhAMvaiCoMCK27Qbuo7BNoDBFH3pbw3jFdE6CJNGCLUt",
  "key18": "FjA1m7ZKxTipAN79jBJE9RAS2XyL3EqmP69ut3tUQof8wdKRfXpjk6T3LhEgvs1hMDCwwecnNran6yj8TqVifhD",
  "key19": "5YGgqkHfWFF1qTGj6uZKySabGkzSmGwSKkvRUtHBMofMTnNvmh5FUu5BYSYTq4DnKPCpj4inKKnhbS6bRV6zEbJf",
  "key20": "5gyvCtxQARTQacCsP1c8ancaEdDiFAraCcQQeKaAcwLk8Zd5Xr9AcnBXWUjJtPXikAmiE3p9tMfPvztmL9RVAwXk",
  "key21": "25CBSF9BzxqGNqgPWwW7RYknSaCs1JDhvDUw7hoHf8vEcE5LQCQUJ1UqiTrdrEipHiYPLNsB9nSMEqvrqdYrYBBy",
  "key22": "cAq9s1NbjD2rwtQ5iAzpsUzV4ZKAdpWpXfjiapNDbuVrojyoCBmoaCTLYRhDpsPvJhEemUGfnZNbWzeumxNQ2A6",
  "key23": "5cEmGrxtnviesKDNjbu1RUQebohMErhoG8GS8rN5PmbvxVnHxFizTHUpGRp53rrmgKAjvoVhfwcautJG64LzwKC",
  "key24": "u1F2aptWgqjcqZ9v1XTiUmsezyzNLaiPK4NrzHo83g8jwi5xTjTNXPowoXKAcPR1x3ztuSJkQFhJkirTjwjjRni",
  "key25": "4z9iuKXofcTTwh71yhMCVJeQ9ENxydH9Sjc9NrLCaTEJXDy4LPpWfKUyrPwsfBNAskxAKk72wPRJjFks6rhYoozU",
  "key26": "5o9Pag4EqV29LguJ725aMPq1EmA1BrSPfU8ZMo62kLuYoheANPsQoazp2akzZDvc4v1LGNixm2ZsfYR58TwTQXi9",
  "key27": "2jeZ8shXJE5FXsm1AoKC7omySPTmAGJQ5xVaJa43h54aVaYKmXV7RZxPP8KZEfiYvbQsyD4DDP1YjZPx8PKDcHKU",
  "key28": "tBY9PYtzt5oWLgUt45ips7ghyicwS12S39KqfeXTEh3H9vaCZp6HdzMp4mXrcCkRUaqCcu6XrohomJUrBU9EAHz",
  "key29": "2Lxdf9fnPHmT1PK5oh3Wn8tg37uPK3yAXiEuDiPbKoSMANEjFPfWFy3hEmyW9bZi1KpxDviFFm8Zq2F8c2cANHfJ",
  "key30": "KRHRSjWPSVgSr55WgfyESEzfuk43PR5u4Xagqzfc5obF54yuraDjsUu5qNpWRzT3KFHwnMYFUSh5r5UfGc9xU5T",
  "key31": "4tRMzbT6oTLf1wySHCpzQkniAnJmS882vpLQU1JKPhuQvH1TSsDDQdo68ktSV9prhLDXjCqaXvfkknfCXb42oK7S",
  "key32": "24kxHjd77UTJujTvRgwcGLCc2fDJohecaKorRtLHHBxbPE2caLnMcpEtjpVjf7r8uKjiXAqKQE3ySaCs4RSsCeW8",
  "key33": "5wz5Dqw6LSBMGUqZVQmYR6rJaAM4FKqS2CJQvgcenDpkp4T9i6PaohdNZDFGbGW5f9A1cF7FzWEKUKkDV3x4xjiy",
  "key34": "33eTFX6mWenJLqkBTuZBKDamM29RL4v5VqiYSwMLAsAh6js2yjqRzEYcbSCobWMU1mPz287vjDC1wQUQ22doySqB",
  "key35": "3b8v5TGghWY7Qbiqqa9fvkEhp6KEUZBEJ49FC4bGRURWkcEpo1VNqm18iwAongrz59aNuboWByh6iKUWbQF4sbd1"
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
