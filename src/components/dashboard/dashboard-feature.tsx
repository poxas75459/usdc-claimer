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
    "5Zi3zRja8ZwqJSZnb22UnK5ieEEyn8cHbjVMr84xi9CAcuAr7zE2A5NAxUBTKPjb8GZBQb16VvCpHEzVgks9unjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H29j9xiyEhnTUQdGQyyNPbyofeeZao749gYMzMbRtMa5YkZWKcAzUrbqF424yjDngRprhpgA4j6zJUgzos9LAtk",
  "key1": "NFT2Gb4MZxyKF8WzSAYfh3nf73QiQ9Qx9ScKY9XPExv3gdRuqQzSj6yTCcsdCLQyog7ikF7i27apMCfw2uHL9uz",
  "key2": "2Tm2pyqj3YZd5vA2n1zCaE8VNBNMxssZFjv2f4wVfvEH3kvqwfALZNrbrPbo5RSd55idkRzePDanLKxyHZpVg9y7",
  "key3": "5jUM99W4LbqGni9DxDsMujQALLiiZ2hZuXJo2ESfnG4s7TQy9kck4Fsu6hhvE2Kxsq5QyDwTx5eZHnSrHb4P7RGx",
  "key4": "5tesTW8y26ArbN29mQEtoW1NS6nXHAtsfzEAUtMwfc7gTujpn7STpvEkoZDWytgVhc3zvGQUWqT5ktJeXCsfSaeH",
  "key5": "PNw8gmepyqMNLzhuLcS3NevG3u2anK6wenFkTPs7URBQfkeQcbZQ6KxJdsLAAHHnuJJDZ53inBfySBAN2RQPRjT",
  "key6": "jCCggYwUHv5bWLKGrEmvryiXwJWnrmZXv1f6LwitqWEErCc5fLM8PvKsC6o6NXy7hudmyo9XGE6eLch4YzBc6BQ",
  "key7": "37YoQDZ7AavBcjvBMz2QCFdrcyeLq5tMPMJZ69nG3CpufoUii6hiXZeLPxkibgMGMLdofDhT6seKQDS6fwpQZSXE",
  "key8": "3DjjkpeuxBguVvAaLJToyKdRCSRd4k8A5MnmoDgk6hLcmRwRZLv2C2euaKKpbXoawHXn3MfndfqfxJbvQbbFvFFb",
  "key9": "2XKd14vfuFSEszPZcwP1N6Zig79qCHbirASaM1LHKE3BeWievRb4TkuncPh4mkDutKcqdsrqdqk3JUQSTybr19hY",
  "key10": "4GUiLLe9i4PoFE5dHEYHeLRpw1BNMaFNrvecdUyF7jdJsFByCvQ1zzK8WNrEj176qNaAVsZ7TydxQ5Fu1qPGxnQ2",
  "key11": "2Jecgy4utnufe9mKh7c6a3eKunwqVCD7cPG36ngfqUnmacgxvBkQ4vFd1AFyHCsdyM3Jqq1sWRr9GNFtsknVr2Md",
  "key12": "4PT1kwKoGHxZmwCoSYqwnAhp8R6aXVEcPL8Tz2YiG1v2YLL9q62AJ4jZoxDX6NmA1KmvCPbKcC8uM7rVT3v7AtaZ",
  "key13": "5SWsFv43BAEjTEanYMWCSGezdrhAn76JuSEC8NA3jBJsAF7emhAiE9UDy2vGmaGfeT69GFDeUi9BL4CKAa564HTk",
  "key14": "BZ1ikpLWDhDP358NEtE1bdpLm5sgEzYDS8C1QfW5MD2LZq4Dm9VKHPLekFJzCKjqcmkmT5u67hkcwmc2XojUbpn",
  "key15": "5QXMKAyPU8JuWPEWa6GGW3Z99ic5vUbm7orWJyXkjRQgsqzkhNgUfAVspnAfuLZ7wb8voK2TNX3emPjNrqe9CR9P",
  "key16": "2Zi6Jbsw9dHvGCepzY48RYs5EGwfH9MAc4qVhb3SuJqmHiKxDoqx24X7jdqwm3LqVBe6bsA2nmvVri5cYcHQopUH",
  "key17": "5gZGWspf5evo3jijGsdDgpYnc1j8DN3WT6DEjkJg1HRuY47UqNggXDwDgQNYwzQEqWvwwxtKoRcyTKDikvdTBobf",
  "key18": "zWvdP75tiSrTLsv9XPUdzCmgHcuHTnWPUTHSx3WxGGMZbpxWtBb688noN6BQC1ZPACHYwik4PHEzJUsA8tszgys",
  "key19": "4bmiMPXBjET3gmp6ZP1zLwgtPRfRwHRCuUS16VjdQW59bkM4YAZ2xPEWAeo4em2o13wRyz1jwvK5R818WsreExdy",
  "key20": "48C2SrE4RyVW3hXDgVF8PXUTXhhVD2t91YqxpAKa4Z16PpTre641XyxCWYwfiJDzMvenQiTmLKXjS7Yej5b8t7wh",
  "key21": "Zg1wro2pMa9SFQH366yHPGfgTgHNztopy8za9a7AzUgtj23Sh6oKDuLBmzjaoMY9NLGBD5dHocxXXJCHLmwAYfd",
  "key22": "5cTvKyu4dmvtnAk77uMtGnoaeCJRRfxsigyntXqVshi9o6PknRs7MKX2otw2YkDoND9MPVSucpg3SmzeAgJFM4Lc",
  "key23": "2HNq1FiKSLNWsBXBtZqctHyPH1tctxeaswAW9aaXogAiYPz1T3j2MpybxdemSGmJtnQJW4RN6MtKV1dWCdN168dL",
  "key24": "4kUmMWyPN6Mjy4jCnAFtcXMTjLeiTXjgsoHbxbYfVchgJ4LGqReCpoJgeQmGSnc5rboV3jio8q7aQFq4rqppS1EC",
  "key25": "2BMCgh2228FvzKwvSqtN7bEPVe1CE9s4ke6nQGYXwwCRH9mWqYXkprui4rLW2yuNe6GFydWVMGhX6xqFd2q4M3tQ",
  "key26": "63BCpDrxnxdLwMNibsvWGc4WwPPfaLxdy7MPQ3KkgDWpRSH2mNw9P6U5EKpahRTJpKWNAg6TU1RE1vNbSgNMUoj3",
  "key27": "FrhG3HwLNWiKr23mbZ8MXtcmr55YmzD4kKtFAugvV6JaMfcWCY7D949W2PMhNUpPo21MajANt6ZuUqx5NRwFtyP",
  "key28": "3XxMxWFz7Q3GC5hErDEPeRSwzcsXFzDGH9RqsYUhpChjCVbDzWweuPwBECBKQvjgBd51cXcApMgs2meMfSPuEzNC",
  "key29": "zyceGHBozmPDaPKgcH7v2HjPaKxZkj5eECzpjTP6cZXnJnKeEG27nBpdiUo2U8FikNbyiXKMVydAZq7ft6rRuMg",
  "key30": "62XyK9Qgp5zRA6bEzTZ4vHqP86zqEZHaRR5TdZk8t9KUJsqDFAYdPp5w5DKzDDsdz9vKMQhE7omNC1Ar2Ryz54Yk",
  "key31": "5fun2oW6RdbT9ui9LRmYv7VcaEN2fx5qAoMHHgm6PkkVTcccmcj41anRJRp3kpHpSZbb2xTgn9soUM2nsc93ZS7G",
  "key32": "zXquMzzh9jMRqa6JWNiuY4GnpxfGRd7qMsVMZZpJk4PtXMghnG8xwTR8xTMChotRW1a2YZa51kHwW4TWHRDKUC2",
  "key33": "8mmcGCQKgJeq5PXEpTCPqLHsH8PiBWoxX61X5ChC9qcd4q4oRHsFBpYdXNQWhdhCit5w7zricZ6AM7jFSohRjqa",
  "key34": "4gV1ZarnZt1R7KLx8yeyQjS3sGMGhfrgVpREvMF3xX6bwW4oT2osAG9cbiTasA8deJTyZ1Vdz6fk6ZoSsTWYgM8L",
  "key35": "4uybeRJP2mCfxZXxQFs6dNF9gjCLNmQfQoBzAe94DTp24aHBJUx12RXtUgaasUQ1fXrkHBf5EtXj3JoAuTKE9nBR",
  "key36": "2X94eRAH5wjTL8kyHmPWLuMpoWn2aTJ8PgSUUpeaGPvWMuEJwvPap1EXoS7hUJiDmKRRCfeanXQYQ1BxLbJh3FHs",
  "key37": "3EMTQ7bcvYCFWTZvmFL9nPeQpCCkkdtCd1CbYURNP2pjtp7yyjRQTQEcy7CjhfhpUuKcZdeh9uUxYCq5PLnqYB7q",
  "key38": "jdgFLPE21ZiGajmGqAJxAVue8BLMET7ujE4EmT8mC6wUmqdCSvxQgpyEX2witKYwy4j9jVnsL3YJrQDF7YYu75M",
  "key39": "5SdDkrLmGXu9NoqNjsVMFN2tQsrfo3NYVKEkqS1bwSZkHH1kChbSbjJvzwfrCFxgLpYcY3QGto3icrdJGDn9xeaf"
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
