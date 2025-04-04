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
    "qnYPT2ctvGFfmWawGghaxLPusDWZTiEY7dsuERN8W7i4ash14df4QVREopTZY6tra3ayEpzXDCoKcURwGSWEBkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUa1dGysJ3LGgjP6uPGt1KRk9hUEDhzgAkeAoEtrro8NHcnyVq4gajAxkJSnzzz2MLnSEL7hMqZ9hrcXQXmbRET",
  "key1": "2uXbMCyJHafq3BPnZGhaeqwrNprJx7oF6bX5quFQgsaCrVX8Dxo7neWmN9uuYRoe7w9R7iFRTFWLDhuFxXE3m58d",
  "key2": "YTf7tUcz4xz8ypftacnwFKA15UjbUNom9m2MacWYgcebR6tWbaPTg1CFyuFHErwYoCzxGh2LnVWnXy6dtCTCE7U",
  "key3": "3vemKe2UKVD4JYtB9HuhVbBmcD7mptmvL3R7XnBse4ZPuS2mgoq6TUkwWexeuN2vtaeequMPeYmyaZWKDqcPJ4WK",
  "key4": "4CZ2KUZoRLXANKYcKy7R62rGPhcMLTULKm6TdetTC4x9vj7rJX65hpRW68cPwNE1E8BYdzjVrgmerqrcj5TW31V9",
  "key5": "cz6NPzuyptf7SCZmuKLv6QjrSrEEShMKToZnnSykHEKfg7r5S11uJgZEi9efA5Esm73GsBifJ6yCuWcPjELWABv",
  "key6": "27nGbwQVERHKjPWDq6EdqhHFmrGdGm9qWo3DfTT4KUrtcgjp7FP77VAADrCWWuRw2ntn8nsQVZBtrKQfYfcNTVGR",
  "key7": "4t8oGqESQeA7GCJLmb7dDqjS85ritJ47Mtp8BAw8GzVCQgo68vBASw3feYsAAvD1Vs21ostXa2Hg8CBJ6Yps1nS9",
  "key8": "24j3SWnt6i6kUu6ox7uf9H8EvAZVbambDQtwfWV9JFfPCFEkPkAea9w9u35DwokNfRrk8U6vBvSpZhf1JwoBE526",
  "key9": "2G2WfEiyrGder3fUVH2HnDFgEHiSEuXDZ1VSzeLu5Ccwc1DywHWFRnkvZpbDmCreXoLwjHZHDrNqU9FpGbRFZyjV",
  "key10": "37LMEdpAnDCbopyACkQkqD1k4pVfmdPaEaKWhNBZrPuvCwEjYPiaqvJihZDtVSDvaf5LPKuBVM8zozVnV5hiwBLK",
  "key11": "26SMcwYWEH5TEMFxC3YHn6ts7YW67tHTLpLBo6MGYVW7H3Bqc4ephjRpiHp5e6xhm6fL2RDAjCFLXpdrj14QdTab",
  "key12": "3Yd5skRw38J7WpuaaVBgKo2om9XdvYfiY4uqYQaehGAuHi3KiqYxQhPHmZXT4sjY3CAH9rzou55S5VWrn9c5AUuj",
  "key13": "3vUHyNLUTbvbp7SxbkT6F9VK5e1EeqAVyri3T6kTpdK3obvR2mjA5NuwjZW4qqm7dx1FaeLcuzF2pMwJgPg7pXgh",
  "key14": "azX4ntiecTdiT5CHMFyNA9qU4oV1JqoC3raTp7FefXGxydH1qV9GcaaEAkhFTC6MS6MdQB3xNnkitrL65jN9xwR",
  "key15": "2TDhwVz3EoxgcMtMr6ab2jS6iYzwJMnM4fe14w1FkrbNX6pAwL1ANcxjPPLAKghmLECVs5cgjc17G7gm7EzE8Ava",
  "key16": "2ggaMMLEULar5siWukGXYDtdxcprsmW3PSmEb9rqkzNuMBNWSAWYkm2ExbLK8Hw5NvsoDhZ8UxqPrh7dYZtN85x",
  "key17": "tAuCt1SA9DAjbdKC1EnTRr9QtoWzvGhB5sBgANEiJpmJcGDTKrAjAmEw5CWsfTGmRnc672DJ6GNH7puDYDZDvb2",
  "key18": "5EXQEumX3kiehi7VgPLtfBxeKEdQYavwEFrM5s7qy75NF91NVJJoMH4SsNpXjQPeUJuM1EGN8RHPYLVJzxn4mhhd",
  "key19": "5Bd39WeEmPWmafWjtas6oHcxadDDkXyro254ZbemUNoc24khmwvaRzZLp4nVPF6itPU7GLzRs94Agxm4xCuSFEd8",
  "key20": "RKBjggsT3icCk4ZCPxVLTZ1ntroHNTAQhEQVBcWPsJurShVhnajCimEoHsGjFqUaALRx3ZZVHKq2KFDPazW5Syf",
  "key21": "4pBcL7SUxpUWuCCDu6ioiDqq5ZBK9rdNGGKV6A6Hsb9TL1cezjd9XbCwyop3xdaSazLsFhgjGGcfk249Ec5Rp9gb",
  "key22": "3saKGfjH77tJSP6czaqa49uL2pVjaYCXbGXA2Wb6A7PGTevyUKx9WEczGx6Jzhxqr4AectWRMEMupX5QsFZvUUdv",
  "key23": "35Tsu654s1nNrw5pU1sK3sXoPQaDLvCyPSVhXh7kY9EbN7rLkK4h2T6UcNrt5Ea6B19PhVHkiNRKNq5SENcqAQgG",
  "key24": "5huEzbuzWHceR1ZFAHMAJymh2L7vvaatkyq8mnA2U1Gj2NnyheeuikUmsj6Zb283v5W2gqweiehbHixqn8mMVNwp",
  "key25": "4ae9Pc1hnbK4Kh5gnF258DyjduskVe1sehBsP5xvv7yNTmACQZj5pgsermc3sbvYnvosfMd2BmzQCkDBFTcPa59k",
  "key26": "3bNiVNV4M573e6nLU5EA8nB8ea68MTKJEzJdM5VUM7FrqgvjJoMragg2bhVCE4FNk1GFAc9CuzRiwwYmpiPP94Xw",
  "key27": "9e1tCWWqyBW817YwqWXXuJRQ27AKNza721121ySJTCrtk7BmzXRxAEvrtXtZEJN6uNaZzMfuqBYLvRMKFDg624q",
  "key28": "JWKEB4CxArL7uGAr9UJU8kSCoDTtqcUpssEHPgWZ5VeXhexuyCaVVEpgYM8ym866FuCnd2woJA9WRHMKxQVEoHN",
  "key29": "2UZyLfDi3iJw3TaDBmam2CFeG1MuH84gw8S9Lyi9PrbDHjKhAug3UfB4rUdZfwJ79Z9MSttVbHT82orhKpfkPLy1",
  "key30": "4hBP2ZiRk4WA2BSyxMu4AM7e6TFMBZZK5gHaGL95sDXLhoF9jrrorVid2FJaU8pLLS85ZxTqt6ddAAXAHhLVeuv2",
  "key31": "NgkgoX5NJZ2gC6XbUmiBQyyfEzpa7erZD8wYHXzYedpfKBenNBsVb5V7sajyCU9J6rqyiejcs17BJ2UfAAmaJqC",
  "key32": "3B2V6meZWkEd5qUMERCUpFErHJdPGVqoQJUHMHALtYbK5oQYzRW6ejr3EeHYCtn9hhA3sabhKaYXbjivqr2Btnng",
  "key33": "di3FvDR8NPCnJTHdtJ9GkDDEDjV8qH2h2Ybgjy5DydMhKxBDMV2zQCH3zSexiRbrc4ePtQaeNrfb2Fy9QmcgJk3",
  "key34": "4nFSsFtvouaTxTNASXXeqF9NiBRTidsKo4V4BYmqWyjtrgSiECuuK6Nsms2xetX5p2RgTmTv8XFmwrj4EhePyuEV",
  "key35": "2MFB4EJcWPtZVGMw4fAKadmFRe2pBd9RK7vTuPKEfshWM1UfhkV94ApJH64A61ieeRm4vjKNtFZzFayXvmfugbiX",
  "key36": "ctzeqWpo8watrRVHDERx3fJ8JYTjRz51QSEJ3bwnoY9cZVL6hc5yhiJt1wgKheaMRG4GmndjwZVWhrrJJkHPnah",
  "key37": "sKUUQJNzFyZjtRVahc1z5RyazrN194p8d8gk3ChnVcUz8UnXX4pUtMp2gLLUEPohUJQuY7ejMusC4wBW7dfmia8",
  "key38": "65eQJxa8qtNwpTKGq864ffuiyZSeicddZj31S91KngJVLRaoeuuWNyMQTaoa4A6dZVidXuH6svHfHi6NDHa1eMXM",
  "key39": "2SznXYkCdsox8qME6UKNKUnQ8rpwx1pe2vaJgBcDDU7NsdT4t721ZYPNHtJszp5mzFqyMjUSH5AY5JkxTcj3eC5A",
  "key40": "77JND52vds3pRyjdTQGcdrtLMFYnx13XWwqGAEy9DMkBpepMuwzUFjXr4dfmC7MUpBQfTEJeyYzJFQ7vhsxFr7C",
  "key41": "L91hrhx4VSV2j2qvSXccNQWSdvjPE8iYvHmr9LuuwxtoNt2Je2BkUeDLQbSySvJPTkQSqnJjZ6bubw3VRtrg2yf",
  "key42": "2woeX4DQG1Awh4VskkPC9ycLs3EUF34Ht6AaCo9Nv2cfKZYkFfG1bao6CqGFhmkxySspER5WK65JXY9zx42raH1d",
  "key43": "4Q6D7mRWrXKNU3XdpYYP7UH9FBUwqTsRRvcu9WSnH2KRpW9jdssTXAR1FnKhwM3P8HTKBfutopqR7vMjpbfVtS9h",
  "key44": "32rSGpzU7NrNeqAALAQcVzRxi9pbRX63UUzHg5oK2FzJWW3UDBJHYMfowvpGwDzpotj3bZo91kqKqGVutwkLVLSS",
  "key45": "4nLgKdRwHMgyRk1FMUDDZdkpyFRHwiGVy2LbLWG4HyzoZbAgmsiRZNvsH2kSVwczKUMkn1TsJyFvLEqmzB8qfxzp",
  "key46": "5vw3k8ti5STgVjQWtussXjeyaxapCLNKfcNeJNeErzkrTnAHnbrcNSTo27eRQmNYZkdDr6Z4uAhcarTqnht7Yi1o",
  "key47": "5qFAyj4KR45nWXGavwqqeeYpiBnsfa7kgP4K8YWVuyefHJnUv6gM8gmnvtLNA1nEyVb6hrQR3SRpB4GLBLVzY589",
  "key48": "2Ax7EDLd8absabNGUmDvGvEVdQdgCnYnqGUEhofmYe9fUQwHUwjV8HGDzLbNjDgecfsD2zAbkPtz1EBqCfS1sbRA"
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
