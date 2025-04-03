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
    "uyHwQ49fH4GK1ZfijVAwNxsmLzJNEbXVA8fGx9B5JDRKfU6otnG3ofeSYuhYV6TJCaWiCsSoLGL6HHcazLxRLHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "622WeUdQjHfbTajbUWXYrVxJGkWaHq7qtwpjaEZFjRdXyPZh1dn3pekjeChzYnaAUf7zKqxvoW8bF59d514ygYmP",
  "key1": "2VAWFwuKK3GzyiEqBTKQyoUwKefJpDxHLUKujBM54MSzRgaWwbdcjE2qNv15eWFx2dqaHmbTz88XfAbX3sr1ERDH",
  "key2": "okGj1GVMx2ytqFRxrA7WD1uxD7M82zJRqMBYXRGMLdzQ9am6DP7t1TXnyPFjaHsrpLVXJAXzFG14GP5jHaL5gdT",
  "key3": "4pzSWKwEZvazMJpFuvHUTMxy6s8RaiqSDXAr85vtb9BCDeAzwRxQxPJUZaJv453CpgwRS9VjZEek2kev2T9sVxoj",
  "key4": "5ctiKuGeFk8mJkQJ43tfp3DY36vWMrNqBcgkeJRYqfXcyax4vKLoedgbh7ztz1fJ3pVpaJcwS4sfJ4cT2MAFawPS",
  "key5": "2hbp6vLsBKD2AoH72CvwcnLoULL5pn6WYagfBBJYWTtdqeRUae1ayZPazvVCtFjXiXJyNGCuUzRTpJ2Qi6yJvZqP",
  "key6": "4FqG8hjTcWrRSobFpVZSK6SwjTos9Fzgt4oDUAAZjnk9irXZVmpsiyqCP8Kc8fDEj6YGkKutA4m1eRQ7Qi1iUpe9",
  "key7": "59ncoYzLZDgtzdTiUSoovqKvshvdkW2juNKmJPZw3rHgt9gHUNexVDYvYtLruaeJgJkudUG3UyBxSzsRX5uqN1Kx",
  "key8": "5Qqt3AxDZZWZ39zhEgVavpDXe7RtzmuquKJvdxNR2XCM2ci5xMAEr1EYhVM4NGonqDu4Zgz5BadoHWQf6k7dfbBJ",
  "key9": "3TtrpoZSqXe3EG18ggAXk8J9i2apY4szge8VnrjreonMH7tYfF2bMrZ7UZBFAZ5X57WNkGLAzZfEn3byzE4R5dzW",
  "key10": "2AvkiCajfJPMDtA2D7J7RtyPg8msJQrNcnyZnyousJHsPZXDNRvX6hbssiTPzrapwHHakxTGpuTy1znLmeMjMg5N",
  "key11": "4DdPEgM8HCkuwQWymsuQ7JphzcAn7nti7rE6uz9zaJSVDvhNsqZHRxaEbMRTgAHBpep4NAx9aHiurzmez5QcFaX",
  "key12": "3jYjbVYCeWzi8GhgZw9xWYnws5zyxfXS2imJLEfRN4fM4kyB32KH7UwRxdY8duSabc7JKH7wNAJ4TV1XQXSKkefg",
  "key13": "Nmm3Kboqr9oa8g1iVCyMVzw8F1JcxQWnP5iV8ZJmMAS2g1GUJGc9BUizY26TTx7ndZQY5tbSF8xEAUfiydxNjxS",
  "key14": "5PfVK5ZH6dqJTozrscK2TogueH5ZXs42ZUq9biUj2iC5UfVF24S7SBPHASi8vbUQkzmff68tEbmcZ4ZHvMVyRwsn",
  "key15": "43TddiikGJxqvv9XX8pLnAMG4E2TNpJkPpmVJeJH5cQJzLfXD2Fa54Wn1WrjLC3z2yB6Hdk4hkMpbMYEwkWMuA9C",
  "key16": "3j4jh5hX1hT4oEmNoF95Yqd8F5Drq4hC2wpzyDQJ4ZW1QZLaFnyjYDjQkzPjHs9FvnbuPhozqfifZ9gK3LfoUgVU",
  "key17": "4rkgjggwiJdFYo2szErDTKNwbiGYkhXBRrFBWbWUsWZcmFS3Ks3xmYpg89GPHJUpoYphQF9WQJSXhoerh31yLvap",
  "key18": "2Y1qio16ntqxTyPx8EwSnpZQViesxnpp4CYvMBT5zuQ6Fz5mj7LBDzuQhKLzg63cdvoXZgmVfWD5ihbJgokgFiXq",
  "key19": "35Jj64KzMxVMUQcdxECWAtwWoHLiRaiwVJVD5Ybn2LAPGY33Zgv8CHSn3nWez6UpBijouWi5xY3KjZEtKr92hK2w",
  "key20": "254PyWwdmmABTg3BL8YaoGuUmuoKs377c85pcbcHsdknSvZXA9qKakAFUFgT7VLCo6XbHuxV7Vx8sdAR55bWLdQi",
  "key21": "xYZgcDcviK4TkoVA3kVFHJPbcu7Ddh3MNkBSvrkkXteahyBQKALze2sLT9XFEsHCb6d7F8phfjq84KWGbJqa9xj",
  "key22": "64qzStEDkbtukeUGcHpWapsdBqGgiGtBopL5k4Tkkq9UjwAqvDopR2sx31fHpZFaY2wStUzp76Fbb19Q9ZdSCULE",
  "key23": "4J6pxyG5Hz4rGbWrZn4TRvsogm5ru4uaAcrhF3pHAye3rocKM2uUZ71KkTnHLJ3hFh3KhQic3kHmPGMxzr1HfueM",
  "key24": "2yKSoQrABaUYRLkysqufVnRyJ3rf3jrfDxMjYWYL17ge6TtbF73hgAiSkT53GpZswdyRuRPDArpmBKQ7tEyjwsP5",
  "key25": "bpFxrcJkt6BPoBs7NDjcf3NCATv63hz8y6mV21tpZt8N9dCdnw4pyihWEJr8ttN65BxS5K93cW2Y9JabtCEcZU4",
  "key26": "5VdCTfwnu6aNCqDNcxsd5BMg8AWGJz86pAWSdrpZjz9q4BFQyJEYyRZSUNtWcnrUkEQKiWTtYNqASY3cAMCgahk7",
  "key27": "qscsQgLgU7J1FZYgBK7o4VEwti35bpPEKXjRgcFpU1UCNw4hyzkkcXjqEQjRVmpgUBhNthwAPNd2DQckBPYQCTv",
  "key28": "rTANbkTZBdnTungWfwg3pX9y9LDfy8SmK1NqRCb6B1ZNjnS1DPfDFjXgAFCGH3ntutSBrECRYvgVq4pfgiBBpKA",
  "key29": "2qAZh77SR5hbSY6fLAuQhokSFcsyTF1MA1VAPfHw8QDVghXn9J2jHVB2Ph9fytVRawsLpJremsp93Q4omxTXJuBh",
  "key30": "5nig5J8LFzw9e5eAa47estyPKtBP8bzjjgaVhezF7hhWQ6gE8FromdTAw5xZmm8eazrSzFqYFQzFsQKm4F9ZcLhx",
  "key31": "4W8ddzPuT5v8Yw1pWrgwwaeBHyGACGahX26NTg8yeaLCYSEmmS73MVVfZDsouSf6Veb4fjPaM1MmwRSqV92uRbJ2",
  "key32": "33sbNm5FpNRchxojWqAQNU2j1gVmxKFuKZeYLW3uxVMuYuWvwMvei2WgokmvLfCZ8C2TARFvRTnx6nEyV3tL9L6s",
  "key33": "5yx6HMCvoyGDYhv7gaVuKCJRVhNJu4rv7judvmuBDANUHMGZKA83i1AXcfYeUo5XYxArjAvQ3nabpRGAj1AZ4ETz",
  "key34": "EpsJDtYdcpkZQmJ8NFjHporjPuLknhvJpDQpj42c8ZW6xDe8LnKZNyrj95uoa952RTX6rP4oqktJ2qTuuZhYVpg",
  "key35": "4stiSTFGmTtmQQu8vnhtN8yeDf7SPPSdJg4BACUfeC1rpXX9mZah1aqnissq1QGuZrLqxPbnSKXpYeJki9npMsPG",
  "key36": "3eRKS9sHenJTfNkN4RY8wUd2z7eiovjzDBksLVLv3S5E7EjJR6XiLTHwqAaWALBXx8NaiQ83zTjxqLEeazjyEaN1",
  "key37": "4jhxARmnz1krqzqtu91xRmMd7zWbtZKMyve2K4uqUbXpA7frK7atnP8fJoxepyn5ou8cc9XhLLPr3iy7YxAPyMbm",
  "key38": "5gbhdmJd2VxMF6BUTUreRfLqzJoVgmZRHHRfyZ3z8qhRCGjXkJt6exuybBwLjhCkHyuFBG991GzXQm7srLzKvqeo",
  "key39": "5rTm28x2MgXA9M9YiUguY6nL9zAwcdMZzvPmAAhdScjzAcgRPvBD9HusjmESrLE2y47gddtLYpJ6irJjMaHKS3S9",
  "key40": "uKoMTwPyDtFSeY2aWfvV8wgk9UK3VthHouJcJjR7DPC4uq9qj8PFXCZLTn6HdoyCewRSW9qvRNt9uc9L751ehbx",
  "key41": "52V4d2o8Za2Hydn2GgQWYvArHzRpM98fBEikKaU4Zh7vjZ2WHKeCZ85U2Rjtbi3K6Fp6oF5TKWMpausuBwnfuDkR",
  "key42": "2pAijoaDCwdjEPqGhmBx6xJ7z2F335fJnh8dxaGpPH58pBNZQjUUgzH1HKKAyM3cCCTSayUaAM1pRvoQa4q83Bbt",
  "key43": "26cAU1ULF1eRDHTCS67QfD7YDg6Weec8UN7b3KKecNqxj4XpGhuCeCmVWfVMMNdArUrdJxhafSrMnk4hLpH29LXw",
  "key44": "5hMDfBWmoSGEWpgmp6rrktNR65Ns27H85EUxzg6Fq4sXzWVYBkpNScPejqeLUWc5u3kTLftr93VBLcWa2vfebikQ"
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
