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
    "2SEbuvgwLxthQn6DkTUah925gHs9DiGAvn1dfr4QpFE6TbLxaf9dXzefBmraxBoGpZ4EjenWcXdgJhvt98XXXM6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsLkvPgcDfHetMBK2bTEf2Yy1q5dCk92PzQcFb6Xvjs4tF5bsv3ZGgS61mZLhvaUH1fDQsk2X2XqoVHoXPHPwjm",
  "key1": "4SjjXx7wVGZsmZ6dj21mn6T8UvqzmYygx78bmoqfnCSu4eWqfg1REHvRXZFAJzdUvDH6zWtgP3Mykzjqpnnb8sUr",
  "key2": "3TztdGpEUvYgG8LscrP4a1TqUuLWfZkm9xQgAAUVKUZbyehmPZD96acRFTSbqu2h5JmY5CkLPvFVsBHTxycz4Jhh",
  "key3": "2M6tipHi6qPULyJLGQ4EPpQxh97KNGfg6VhRNivNUZVBWq8mHVY7y32jBCXFSeXAcBA6hvQsgoHg1sUyyMmjBNKX",
  "key4": "2WnojRWNRaNCbAypVoGsWdYyWC3cf4GkyhRczQHQnDJZBgSNb5bVfEvC2xfJhanmgEaiFPhUZoV1NPCpzNq8uW7S",
  "key5": "2Xs5nuzg7KQPZKK2kMrCkYE7zB71CxykUDkcXTavXtpzKJi59yQ4SyBTKM1iNir6Rd7YMAQgBn7u59EDvfVmhWYp",
  "key6": "3kBvw3iRN9TT2be2HitS59DtHNVpaYXWRBLAj59EmcX28Lk9C4YdnoUURMkHcMQh1FpCa4od8wiy9mwZzd3BVkz6",
  "key7": "5hdVaaKmYZKByNQ5sZ91bcYgkaEeLmMjwS96CZ9WzN6cu8yqmGpa8FQ56XeugRD6acrFNFKDAmZ9QG66m4shiGmz",
  "key8": "2QeKQZCbYJa4KwFcpF1pGkyYMTUnLB2XNQ5659ToXZNTMCWz6QpbwPcrT7zynG2c58avkGf1vdXGrgXtcw3t6edU",
  "key9": "5phLtynYccrGALgB6BBu1eQDRjrrnN4mb8itr21v2fZXL9NLhs9icYEJuqzKM9Z1286mxJjaVcH2unW5Arp7Lph7",
  "key10": "2M7hjGT7uRjxKSCQpZF4FU2du6SfHyjMbRKb1oDsQtPCxKG8rs1FQB1i6Vqd3Wmx1HtVJwdeCt2Py7Hgd1qw11aW",
  "key11": "4UZXAt1MvgAhToZCzpyZtjDb18cgjPZhbhvH89rom83hTroAxmWtUJug2DnjdNmwBcgiugYc2Rjnn6jKjFoCbNPx",
  "key12": "3db2BANmVTyyK5PCVDod34j4d2yYQq7xLM7QHjLX4eHUjvmfeLVZZnq3Um9fYRb8ZQnAdd3jozGuocCpdaHura4F",
  "key13": "e6PkXMJRArhENdyAj58aNB97a8bJWTPtwzd6Uxh1DGkSwa3J6nX2Qg4X3MG9jyfXFC5gL6o8EBKMuvHbbaVayAA",
  "key14": "ft2RUfPMiX1da7zRR9wFErdejv41X6kPk48Y8rRs3Kdi6s8DfKX6EWj6RmCqJ3rmJCnJrUVHL6X7otP915TM3J4",
  "key15": "3wuTp2F2jG7YxjjCLXianCmmcLo6nbaoZBS34ykATBXRLnmc4E74Amd5dGPFuVEtPrw51Aab5FD8N1ZkdrxYokNP",
  "key16": "4xfyseypzps5HSrTfGWdChmdjqCKe43QYvQoZ7RGvJN1D2qtDdyQcqkmY9XX5doPdhTFFbJJ1VaRbTw1fJUSCjRJ",
  "key17": "3JWTxo1FaCirXQjfQ135BtFhvLeh75XKJhiqmdmwYouZPL8kf5PamcEzSN8aaUe1nXiBx1tyHSr1sAAuSTKL4VvZ",
  "key18": "33hoXfHCXJi3BPLCf8Rgub558AbCETjcDZo1VieNqH6q9AMeyh6YPb3ZF7GtfDCnYAJU7dZMB88PJax38VZGJiqR",
  "key19": "64b1rkA43Mvrxy6xwNbQvqnNfYDKx7sNVjuX8GULiCvetFfgpRoixd5qcwc2iodhyeARKBwLeAUyeEqvhwYd3RFZ",
  "key20": "4PnCPxTts2yhqLX5dN3trPcLQXhQUzAeraL3L4FStdaB8hiLGa9FUjSixXa1rtmhfJRjLWPXQ7ND4ujX3PLJJJXx",
  "key21": "2SPUHyHev459YuAqDyrmL96GQP5sbkmVnYffVnHW4JT8kyX8iPFLqf9sccno7tXo935VGnFboHr8fmHHRVbxFrvk",
  "key22": "UheA2rod2jBKoDEDBhJxArjNz81RmeuVLhkEsvRZAGdcpcSrzxY7YFm11w7JeNSsXrNj8mjpxt2dDuw5oKYAxyY",
  "key23": "uaw9wVbuXp1HHL9WeMEgWewxbkas4Qw8G5s6i3dgXKxmy5iakVRE7496dugbEWpkmLGuvc8VY9e8X9fqv2pvhop",
  "key24": "8772ZgwaxcbouPBZeE7eiUuG9ZiFskHVfUXvaSW3hfNEgFV3yYp2JtHPmTYJpAWTf2oDDG6LRQ97Pcx4B2aYqUK",
  "key25": "639EeDRd5kZqX6efZEBWhqZkY7qw5h4mfvhyzG7efECrHgfhw4mhrGSXL9ytiCUE5GQqWwiF3sm6sHP3hyMveeYH",
  "key26": "3GWh2phBUfkVshEk8JD12589cUKaoyxefM1CHtjowXmkQhtMyjX7xMoxza8EU7cU6Tuw9uUxZgidmh6FkjkwnAfL",
  "key27": "4LQsDxh5Q2kRL6e75NreW3WeXjgFdmoz3qNd21Bkwfvk9Dg5t2vn61xJ8PCTntmbDDfYczMaKLfwnd5VchzfKKdK",
  "key28": "4onbSyiYJyunY2XzssrYkgqZuv46jyxoPe79418gAVb86jibGhPiVAdTPtERNtWGsARvpRN42T93QiDCtTs1Ht7g",
  "key29": "5L1uJTvEhLCMMM2SV53gomxHKXRPTFn6EVc26bzCZgdQbMqWyWB97pc5ETX8DWV5Uw4afEn6pMMNJn34kQAK56oc",
  "key30": "SPAMn1XNtR5oY8SNjgEGtddDsqbAZTzxg7k4V7qEPEDY9CTZ7byrmwWXJhR49Xmurwk9r2CjFWHFX8H2yTPYE4P",
  "key31": "4XZcpb3P2nRAuZqBsj4yi7v5eLwf7Pse7mR2B9k9FyCKaR54gvZQZt3sYCSevoGZ1qGsnHiySbiDSWz1MXVVk537",
  "key32": "32rkEoD3JTY4jqgRfnRKh6vH7MRKLabFteEqgCymjDxp9TipaAA45sbpfQ2KfWw6efU7yPEPbRPoD5KR9USiWJSu",
  "key33": "63N8pGXe4S9UD1afgVnmxnCT2YYQDaKrWNZPV5HhknGSdMjHiVfYsH2WZj1cRN8CP8agrgsXGSW5yEwGHKvxcP1z",
  "key34": "3ygwg2C8Mx49HhF6qWaiqsnHuhicB4DhKncbBJjNxwcSPJHu68AgkKfq4Ba3Qib46ud7PTYP3NNB7R6JoFchMtMU",
  "key35": "46KcXhKJKzXAP9wpVeouvidCRpCBwZ7ufEqsVJLh5psG5H5M9kZAd2573TvMReurig8urFoqfZpSKg3GoDFsMbY9",
  "key36": "5BzAm43pgbTR5vM5CoLsxnGw3vMs2ptBWxuuTdMuBbXvR7AZUKBWF4moXiqfQgniPmWjxNqiBhjT5cPQYNSS1o7w",
  "key37": "3Qii29G4hjCYNMVV7usregm2xw1PMXVcf5akZGieVUDShzHLU7knybYbjMFoa8tKw8PLEFNkNGHFGsi1mVj18pkw",
  "key38": "HSCCzW9yJaS43FCiY9BPAZG5oNTCbWqUaX7fPPjwaPiiMX5mSwwtRBjXV8zN4m7v9hPhprKYAuKRjD49kPn9owN",
  "key39": "2cdQuRsM3LnZam6neWPC4q88rWeF1VVuBH3Yq9rpEYQHvNxXooEF5Pyo9YTdYbiN97nTtBCSiW7VDFhpcwPeyLQp",
  "key40": "44wyzjZErQujkqsgL7e7Rrf8C5hQRRtR31miNJpiyyYDjqjTpuA84ATnRrPysKENoTw2F4cf5s3DkWoTGrGBdZs9",
  "key41": "2yCZKZjRw2PJh4vd37bo5fwbBs1qpqnCmQH2r3cqPJsAkUqz1EVHnhrvNTWFCaQm7xrAxxz2BT948boKRXyzrAxT",
  "key42": "59BmbwhBUPXW4yGFX985e9MvoRDAjVte6XzMNQUMpG7kdZoA4DPmYAZTaiCCHCEbutcpfKCHfDbyE6rGRB5hA2uM",
  "key43": "53PEDsvuN2LvW15jYNDXo1ZgVJSW1ZYXWm8G1t1sqBRR92X4QzvjtAghiZE37hJQyM1mjqgeb1MfodTDFUDuYjFN",
  "key44": "4rsNYjLxambP3xEtSRZuxcNJT72YRmD5D87LspTM53gE1uChJoQqjbZWNJ24yfXRkya7UPVcFmbjcHyNQR4W1r3",
  "key45": "x9H43GHFqh2rsc97yZyYTKhXhsK72Ria841hM9YXMKWuSYsZpFYwneGiBjA49EurNCd73A8cgheUSSWaQWCT3WW",
  "key46": "5ncMxqX6BR8UtF9rguAGyXpiDCaM4GL4BpkxS7X9rF1N6vEDFo2NwsAun4cZ7hBHsxPizKdkpoW39x4WMPfi6TJJ",
  "key47": "42Nhz2SiSZQHoMhDTG3GTwr32uqCumKjVhfcxuCNifxhozkRzgHv5vshJZD8FK95W1HAgHBdUfLyfAjGnjE27C7R"
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
