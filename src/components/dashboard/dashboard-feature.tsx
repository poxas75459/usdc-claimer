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
    "48TrA1YxN5QSbG1iJtYKZXovU6WzDBUszM59an5PhfUQT5ng46qk9Eicnq5vpPJfSC8iVbG25WNcPXZ7Pm4j6dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tygN7BumGEhX6pf5HpZvCHEfQxyRVEEEdomt14c6KgCuueKMk2aVSAfY5BbPuzkQBozTvuCdeYA88uHVfEaukqu",
  "key1": "3rpC2NzXdf4WkM2neN5jmkjPYfE5RvqhrE165cMChMaiYLFqTgPRYb94px7qTEqPcfFHtajxkZfZ1KV8nDSFR192",
  "key2": "2S8inkin817yZjtymwXrFh9FeaoGryeQifRohJSZSK6Jr3taTGnZXJnsiDUATbpWDS78X8vp8Dgtm43VMEs8swBi",
  "key3": "2uSzqXpFp67VASyFqyaq73bM7wyUjerqhSTqqe94ADm3STE6XTeCTy4HXWRn26Z6tfHJWKNZ81bNyCdaA4QojJck",
  "key4": "3NaWUbvGAnzwFXZCudxVSYDifU5q7g9p41UA9YAhJmYf4k7BYtHYrbGmq21QPr5mCzNsdYyeA1wcJmZYXNTiWL7y",
  "key5": "2dDibjBQGBLjkNDFRtEEa1Xypq5rG7ENqoWaDV5nPAzAoZSYX2VQ9NMiSETkaXykkv1jJdgDabicuarsQyDYEtLq",
  "key6": "5wzBtxMgTkhFXBeTju2DofbfVHeSbC78XjWbMJrQAoYTWQ7fYdFMYXd8bn2Nf6QTpFMT4ZwjyMd5isaRZCCWUKyZ",
  "key7": "5u4LRSj14inW19CwHuBwWYvHAhCkbwrBm4XfKjfpVTQfjaHzM9YkdY4wkcTNt2sjUmENNuNnsi4qMKJP6aBywoNi",
  "key8": "iYQutxAw7h1vYr5EJ6j1xYyJr8CULoGCmGCco4vtqzeyYzLa8hg2BNaJfkPAa7tVtpFepvzWe1kuXjzcKX4hKtx",
  "key9": "dEFhS311PSHn9JJ76UzvEMqHzKjmAWvuT62cQx6F757nXBxQ72k7kx5uHdG2X1GxmLhGJAyaHgsWjxa7oYwhZ7L",
  "key10": "4Bsv1nTMSf6eY4kVP18nfKzUH9bXeAcgEMv7JeuKL19HQAwJReYEjxWPcnpdBBV3NCMGe2p1kgkgYhxk5a2CtUwr",
  "key11": "3KjJAeNqvghL2VkG5aEGTcuBg8A96wsM7ZUrccTRu94Kvt1Yd2Z5ox35T6RnAx4c73ENfAuakvzLAhRq2CQZes96",
  "key12": "Ss1ciYjcfVEbssCamDchfd1NX4k9cQ4aoQBLgCm8JNqbzqPEAnrL3ef73PZAS3YxtEfEjuSxDfGCwmus8pqGJPW",
  "key13": "5Fm65wJT5iiAg2UKMdBwSgRQEfAE84mUarDrEo325nZxYgUPjDX9x1QJMSa6Wny2CWgRBjbesPyYG6qV5AjSLyD6",
  "key14": "NyJBDCCxWp3PikNupSJzssMrUnrDRkY4WznMApiCwPE4GJEkLAbu5AWwQfACgm3BKugw3Vy2aXRxsprS2oWD2Ko",
  "key15": "4AAPgXUnaQJLtPpc1c9oWNLi3ybAKwFX9NUCYGe9PzQajSFbqArCun4Vy927mE7yZAt77xCi8rv4oZV4ansfNbac",
  "key16": "5T8rZ6JZeaGQFvoGJ3nVmjnmEsNvJ8fh93bRsFnoaoqdmRzUJg6NWUC8Ftp8fFkeGXoS24ZZi8YpQVrH4BmRYnvU",
  "key17": "3s67AzLnLNipPUhhDqX9pTEYZF55evybdovgsCFUomDDoqBnFmh3D8AWGkXamx16zL7qEbdoWRxZsA58jnMjS2PA",
  "key18": "5ZTcLDuUwkHyjz1pQ3ZxrZcBc6NMivW8vV96FXmMj5a2YSM3b54iu3GgMYfrf8Bu6iKWKLewjgqfG3JQvWZachfu",
  "key19": "5SnbsuAsH6UEBSGSc6BJFYWsxkuF9N7utgx92eDkvjF1mGg7mv9cDpDL4SFDsw9wndsD7F1Tr1ssmVjrc4RqJnzW",
  "key20": "TzfctFxRfh3JP4KEDVuyxJQvdAyZF8wNTvXiknmeT211e2JyRtWYBq3ZN7NyLYCXxW6Wb5gECdtcfayTRHjZaHD",
  "key21": "5aBBeqEH1vH8WHb2ZvotcfqTgq55RWZ4dci6bFAi3ZmjwzkaAaGheKydkpGF2mdf8qU6RqZJ332ZtaSdtGgnYenZ",
  "key22": "TaQFaiJaWGvt3DPRGjZaSU3Sym2MF1F5nuLLXdsX7HCX9AoCyGvK71ftqWrUgPt1BpDRmGnE3rwa4dSREWt6fVa",
  "key23": "38tXo9SJb9YTy11UrAoeFf8vYxPdiyTVLAahBRgnToUz6JybFgVteE5WhM6Woqepzj2X1EEGEPsNjKA7B3c3U4aq",
  "key24": "3mmvsRjdVjLYLfkgqSvTtVkopXGSor46SQYZgNZJ1BXBuKw9wZvbk4XMVDiz8hpS53VMunNEAzprdbzPjfDkk6Pw",
  "key25": "PXE4fF57yXk9WdfjFDieokg6RWS22htqMC1xwrjeLoHMhmtBz5uAkGLjhAULSi3FUhbD5tipg1nbuEgkd454Q7P",
  "key26": "2TtkrUEyy1vtNf6zEF7Wrt1vKkJAgBtZgm35JF45r4jbUUfFJewAaJxXJDWdk33eZaAczJTeJ1XRDXGhjkTxik6T",
  "key27": "8ZHfZKpLP5Coe9JFj8ZRQrt8VGLbd7i2f5uW1eJdre4eQQbGo9bppgqZTF7QZQByZ1vTXot3izxwwdBse7iHMpX",
  "key28": "4QQkPv9A2a98StLb6JEjzsKXpxhyjyJURerXtgtxxRHcfkb6aHqb5p5Y9Ny3xMcmH6ZzcfqTdoL7NEkW8G3tKuvf",
  "key29": "3HwyLBzH2LZq6ULx5YQdMwoPLWUkX2LJMibfDJBu5TzXaYHyLcxv12TfPGXuvSkZ41Vd2pzsnVBy4oZyJqw1uEUq",
  "key30": "3qtwQB6R615hnk4yaCCaAAF3riTpQgerrpXH7YmVbahTorFwhmSTxZ4pPe2wxB35UqcRemLSdpMSfKE6Zit3cbCq",
  "key31": "3KL5yTvhjtFbHjRQaSUnZakpgt6BsZGenWQga1UMm2zv66mH4KDeqGjTRVcQLgf1P7WntfgiH9RsdhGizo15yGs4",
  "key32": "5nB7xiG4icSFLqeE9EFkRyyGZdLdcTXVtu7WZhFV3SeZtsDMYzN2jbYgsbBoRsbVR1gKwEWTxhE9E1LAktxM9Lgx",
  "key33": "64e9UyrJp2dNByfx7jtWYGZ4jc6fQiT9jBhRibku8T1anX9jJUKQwECUibHddZpMsmNkmgrU92Rvo6KFadubcBUo",
  "key34": "4jyiddoGqHf7RZHMyjNv73S26wB5UTaDb4fgxtpy1xjT84CLtwWBan884t7LyAQMAavKkfyTcRKmRBvmeHdcWx7C",
  "key35": "26Z3iMgS37E6z4me9TYqErMgoCnUoYWBva9awe15r6JCMk5uKuP9xKBFr6GAArEK37cA7UMzcoigPmUzRZCdZ3tw",
  "key36": "3hsck39nVer3stpH9NHBqujwQSesmRszRqz367NuV2HVtA16fsKzT2pcDovQSMNmAhMwha23dfBbbFy8i5EKef6T",
  "key37": "5NowWuccsBi9LawiQSJ6PAh3eiLxLE7AKgEjD4ectNaZrW4BYAbknVUokXjLHBAj1S2jB9w1AHN7kZjnPGgJJygp"
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
