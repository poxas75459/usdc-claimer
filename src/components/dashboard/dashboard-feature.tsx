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
    "2tHDPtfUXJfB9QSmszdPbitK73xyt5sp3BxBopr8nuuKjF5Jc5Qf6WFUTvK6mgF22ta9ATTmfDfaGyx3Y7cNvLVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xsqFdobujwZ4gHFTHxJt98jGmMVTNuaPqYSaxu9byBKSYtVvq76sN4z51TGRHTNuECECvEZjnH6ByruQcFYgmNZ",
  "key1": "5ssDZCGTpmJSD5x6b8Zd9uQoUBLMR1sMwQxbYw5peaGZUQSG8gvpX7NQUpFd46cX29VQSKAaMisDUFfVFCwynNiA",
  "key2": "3oRmqEAaDGtopm7NyAPCHZs2vjXieG5vr7fKrFApv9r13wWWzSXDwdwBcJdy8D5ist5tvLDFXmtiJEPcwBn2ypUJ",
  "key3": "4ri7D5YUhC3CDwUzv8yTWb58jZxeNqcEYL8TrJHecPbutJkBxQHjkT66Z3fQx1kMpTdjUafryAY8HBKXStLJPFZ6",
  "key4": "4RwVntYT6uczei5cuctvvq2mB5qeqw5upVz7jUCHZrzXu1LWbWiW7jLHyPwx7V86ipDg3EoMNjz4A6HTUMeiZnfm",
  "key5": "2TtMEmDm9tBFGCqtZgucpWW4ZnddTuMCNNU1ch5ZdHG1XDQmWExLFtNd4i8xVpAky82RxrdhnqziSHb6V1Xgc9LB",
  "key6": "3rNF55j3mRBmjPx4Hh9VpNBZKEWcrXh1zmzCBiMukHDMe7r7EkKNPpRJK6TtNjn9RiA9j83pV1kmjuBCDXgzBefC",
  "key7": "4RUg1fRHQLNpiWMhTy8zsMPBLNwvMrsxB81JHY4gC7ZVehhxSiJojUhZXWwkpWzg1RKmG6ksXhdnmvB3ej1SkesY",
  "key8": "4fJ6UYPqmLEdJ5VbZYAw4QfPypJ8GkA74BAMpqJmfAY9NwQq13stWa71hwJaRqCfUJtrRgYKseEcSH1tTKEVDHvH",
  "key9": "5o6URTQcQkgLhv52YHVugN3freAfAndcH7LSMSihskvqzSXnTZiHRCFL2ZBZ7sffjK2YFbp5RPQUx9FyPbZLKnyh",
  "key10": "3qvMutqRDFBJG79o34ag81pNSC1AWXbzVDXRLaYXfcb29Bo9Q6npxk475gvegTy1kTSS7Cb1NrbwZNJ9RcJtD5ru",
  "key11": "4wBeMjHnpotdKDqa7ssJLDqTundPcR8jPNdL3C86fR64KPsbwu7TiRDsAzD3Vj1gxw58XvmazRWGhXRcitnNSyoJ",
  "key12": "3cZW3P49zLFRb2QgCpAc8NmG7CEvqUHso2yvZRju28fSEHQYbV7aW14XHizo2XC4vxW2oC24aYE1GmbV3avaNX1b",
  "key13": "4YDyAe45FWE2wYoBYKSTuVjUmk2Wiy4QABcAUFh5Lso5aSrsFV9TR87vDmpkvQvF2Q4YQKHfPnPjdFjQrJUihXj1",
  "key14": "23VtV9uZC6kgdDqLYwNgDgeHw3rwTdgJVitmfk72BggLRvYGCSRHutNrG6c5ErmJm8vUuX4PRMV1zrYN8PznGcum",
  "key15": "4d2Fsqm7EVn5fDkJizbCdv9gUuMcesUWpFjCzjESzDxkVSLfFks6HfmZpHKVVC9JRJHZL1c5CBGER3daHDrqEy3B",
  "key16": "2yMmYrgq9BLCm952MT88nvmMQHPWrwetwLqjfbKnHVLhxQntKSmdinV6newEgoZ8Tt14MakT6qQzbbWJpkfs8sMD",
  "key17": "4gg2oBcb9SrvDKGKgpZ89mek88rZnribnd4JGLXCMHua7H3wKKfiXBGH1kgLkRHXmAA2Um5vQTEv5gBCiYbwkKEY",
  "key18": "5ZweuD8UorZSvhLZH38EMjei7T4XJ2bw8cSXT1oemsHuKPNSJ1cqezYbgCk6eVNrU53J9HVo3javX6FAznzkK77r",
  "key19": "5XC1SShafZQtgfiYoYg1J4XmFuycbqYSqnBKemGdULdva9y34AoSE6RTNR2YRLNyHtwLCBk3AFrQpHresuVHM2Su",
  "key20": "fh1iehbMUkEsrqergmaPtJSpEVVhjTERKv1oHFvqcao3vm1Ltrns1oBkPLaTnAKKvh2UNrtg8iTrjmw8REoiA8k",
  "key21": "4VNgbrEecdACUVWZahnj8dRzraffRXeYmExrxN8WcqSeEL6KMgC4zeAumfQnmn3CpykGRkW1a1DVmkLyZpY9RUpe",
  "key22": "3iKfS91frdKuFKpAfiYrWXAxpuq8piwcXPLMrui6YhjK4kc2o8wKpgd8kLurQkspxbGBWfWdProd51GNFeJX3oEu",
  "key23": "PuoWRBvszNmyezDjipSJ8xMcN6avr4b4osxT89K9a4zgT9FFinQXQHxuNgYT8yxYZQEhNMVJUwpsGLLZobeRLit",
  "key24": "4UYbh4hEkU6ifdMnUYiL5EF58PcZA4EDTryTo61Q7eTtm12c8wHDur5ZvTFV4rMNJS39byWV2RCVpHV2zM7QfbcU",
  "key25": "2kgnzVjigk5pnLNwRgzPMWB9Y3QAYZAqdjJQHCTwrEaXDjprhGUQyE8XF8CGNWwiknDbK7fC596xZZRdcHDmRofG",
  "key26": "5RkN3Kvx9MtWbF8vVoHZ9aq1ru3i3r4NvMRus8zDeWDFaqgcZrWQmDTHzTTRE7n84zEGPtzfRq95nGrC4j4qUmzj",
  "key27": "2c2jQTxNK8aXMwc4Cd4fiKRHTqA2mPETDkrXj2LeKb5kspx4seKJGFs9pWiXeS4j9fYjyZFFroxzVmGprqG3UoXS",
  "key28": "5ZPCp4qMqV8pQbqgKbNG5Qdx7fti7sWdKfVgnaFGKA5Jy7fAsZo78QzAvuD1dx6kHyxWQ1N9zJFtZoYk6E7G3UyU",
  "key29": "2j7CHKhHXSVmNpXa4wgmqbeWy9aw4raXfZGAZXVCsCQTkebQbSVP3HwSM2SnoJ4NVKUzmPQadosxEtc2ymRBrLv8",
  "key30": "FwxRBT7gRJt6khq18i61cAgEuxzcdWx4RmxFW2sPYVvD6iviFwAHD5BZeeVM2f2TAFz62bMaTgruAf3AoKLmBJ8",
  "key31": "4nMturvCMo7x25MDd2Zd3YGwEz7E1ZhLEYJhdVje7bGm7c6uLka2VcHmvJR8yJEdtbsaReqPD1Gtq3Kt6tpm6bNA",
  "key32": "37FKNrtcoL1VpaVE3XNRZCYeYmiTkLfMaZzuWGoWE31VDz8m7xSW6ZB4YVQS4t1H6QBGZpZ7PHgM1dqh2SoeY51V",
  "key33": "4VXaMhJ7GQjZ7qYiHqzcCoJz7pVFU5LjQWLXtTNd2bqzCqtFHQVpxT49zp5mremLq3whTSjjVcYTY6nSzr8xE4WV",
  "key34": "4affe22mrUu8NHUTqRwUN7GTsN9DxQDkLoqHc4MXLvMgaJDi7dwopwoegFEEMtcXXUgdQb6hsXjYgafDYrgwdyef",
  "key35": "5c3cE6jnJiiKSfnMMgdZ5A79yZ73CCxixrn5NLbshM4t3W6X6gZiuMPHRDW2b2LAnRdYY3oXuBSasuuJELjoxRkU",
  "key36": "XMN1o8hUa528uFdn6WHsjCfh9VCsg6tYnJcP185gjGfRaW11RXktCoj9tTcCsRRibwQ3jwstHTgPYFPkpycVxAM",
  "key37": "5oK2oc1PCUBc8aJXrnk2LqvL9XVon9yCqfM4mCtez2RjXGmQFJEHbC832bXGWhCC2EYhwXg61oZT8m58WnMGTRia",
  "key38": "XgY7ZLhTKqBYdZXfytkHKLyBF3DHS1aV78cAtStjQbuxg5adfG8NvCmXBt4CyqhBRW2qZeFeNTkXew93rRY2EMH",
  "key39": "TWbExqgmRkCrLFAgWFe4SHPgQi36QCw56DfG8aSZn6AUSY1oHrbYV4DwxMRGTndtRXoUF4vuGUiwGUPGqhAZXuH",
  "key40": "5Gg6ieJ6wjVTc5zmZ7hjA2A1kncmoU2gggSPKGpfpPg85PD6mNVQJ4BTpxnSfShA2QAjfdLpMAwEutz921a2628n",
  "key41": "4VWM5Xqt8QmKSfKsRwmhpK3iPvp5rz9uRWrtvFCFyu8KZtuN6AyoqDfxgnkY96pRPYbZ1T9DkJPqHRdRg8aPDmXA",
  "key42": "3o7u3vLHsdfdDvvXRcezS4joEYmQgWxP67MaxhRYvas5aHLNWBwYK9UZbyHAMEDJRU5TERti8zL34MJDa2Td1ErQ",
  "key43": "4kh4rSCA1Y2E81ncDBo2wQNjP14gb7E9X8BhyM4iw6srPSFKcNVm1F2JGGLzH1qoc3rqYzMAUUWuBpGAb3gpPNoF",
  "key44": "24S8i4pLPb9DaKq3DPRKiu6W7ZDnZZT1pNN8219sN9Fv5eCbhaod8weCnru5z6hty4fz2voqB6KzwTcgkTiCSvMC",
  "key45": "41EhZNEhGnjjjmUPvmDfsSwwXJEdngwG3W8cyuUaupZMLc1SKHjXWBRWvCQfL6rV1QgyTjYcCvP2g352VQCvgGUB",
  "key46": "att4r9hLx7MUr9cW7d6pkSoBUnLj4FSj37vh9EXRPSr7ZZfaDxwJQtV3QQowKBGpWYYYVJbUZEp3pYFs5iuSfm5"
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
