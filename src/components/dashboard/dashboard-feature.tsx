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
    "4foQ1EUWPSqSgkDgNf4CKxKeQ4ocG4c8kcDjYemonE11jn4WGLKQPKQd4FRvitJfbYvFMppyviDLuXAUQuFZRCmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uQE5Rcrpu6znrHYkH3wmFwXbbBkPqboCpEQwwhXNWcJVHtdQrD216u5R7xHfsg1D4fSth112kmWTJ64QeQskYAv",
  "key1": "4rXXqwnt2jfV7DWrzTLMvgDGXxi4j9pztZKjoadNqfatYvixo4P2C1T8iKW4KhkdN5BL8sXXEaJGutS2qc41Dv7P",
  "key2": "AoiqdFwxLehXjM5kGrehdqi6HjoqCa6eCP4SbJ6DnkWbsGc7JippanKTGfU9RpAG8QpdseHy7waggGvGbRsAYmf",
  "key3": "36QuVEw6k7sVXW3wB2k3hoXjZVv1DxKDcxPxkPp6kkTjcrhppUr1stw7KKTY8nNWtucggD9DmuPF6PuKWs46BJLT",
  "key4": "3HzHfwNQ3XReGGbvMUsDBG91auVnohFz4ZPBB3igWiLd9t9zgajw998yyE65ckn5ewXKsgBGaTHPCYDDYpSykq5W",
  "key5": "7wRz9XAG4YmQsdCnjo6wQRdv3SLrJwRuCpfPcwUNVNWGSphSf2bZRfPXMCRWDeRRMcaFRzrMnmyyTtcKvjzL78Q",
  "key6": "48SogJAS5NoMVGFYdBHCbKpzQCZwPBgjzgckgLeTnLf2KWQsmSVeTG388PVoy6ruWstRiZsWU9Xgte4WEepiridr",
  "key7": "3FrWTFYRQ8hPJK8CxP2Wmh9B4b2PegVRYBoqSymuKF9PWo2XES8r9ya95RvhBfRdBNDqG2S7bRKtUz1aTxrJBJT6",
  "key8": "4P9HNLHLa23pi7z5xfhsJPTNZ4giMJFXLaevHU5dxWSnACgphaeZd4RHyX5CHKEHDrkP4Nwk4zwdY2TzDYm8WaXb",
  "key9": "2naeRwxXCZn76qFYtpEwZnjLktqyE3zxSdgAQTEPt1rwaUxhYoZGoBPA3JJSU76ecamk29UUxVg9zp9SXvuVqHNp",
  "key10": "4tzQXnDqxAbDKeH1xYUFh3TmpJtt3DPSYPwZu9rDjChfGbsdzEkwvQr1wbtyBF3tj75EsAfWcK8Fy4127MQnchJU",
  "key11": "3hzVL5qvy2zpZWZZrzrteeh8mQNezWm1ZCctSTj1PEF7q2KmGHP9TwzL7FezDoYkKxqjndVAMayHTeLLamr4uzWu",
  "key12": "4CVAQkzbEt1HGGStXgfx9pDNTC47PwxMTAE5vrDhxypCyB2iWthvxSc1vWqyL9RftXid7CYmM76VL4z9eRmeC7Nt",
  "key13": "2ggQjoLDJhby5e98yp5gzMiP5HhQuFQvdiHbD18CpqUvWh1aCyfGz7TYqSGRgB7eXBVeYe7KhZ72PpKAkPNgX4Ba",
  "key14": "5meyAxp9BreamPX366aLT4wq7gwaoHvWMoAXKqF7chgHqsrv1BnGihDW5BvxcTpMJZorPG1p8MjjrHMfDAoC9ZGD",
  "key15": "4Pdp24w1NzUZsLaiaAP9eHxiGpeVKrz9n1oFZPChq4vgoXTSXNSKRHCP7mZLwGSPiYoBoFh55jN2eWkvZdpz2BJ8",
  "key16": "goNeXAQP59hcR1YFi2A3TKzwZCercRtaZ5YehhUZ4YNKRU3fAfz3tiZnvGNtgKnBppN4xchhdFkbJmuW3PmXW3x",
  "key17": "2qkyUPDrZEHtetVn4ovXEPJFEyexBgkW6BvesmT9cjVxwNBgNzFujLJjUJARBo894zPQdxH6P8KBidWXuiycJyB7",
  "key18": "5iehdZRXfVigAw1xgsP4Vqci3kPTK1eeGuM13LARmJnwbM1vzLAPGUuyDmUA8znY7JEU8KMuFaBsoKkjxjDULV2r",
  "key19": "Nd6zousi6oVMNNZYVonk2X314phHGiWzRvbyoebe3qQKuG5gecAHfskBoGs3PpRRELxo9r986fhaJ6y33qQNuXv",
  "key20": "63bXSi8RD7dPUVqyYsVGzmXuy3zdMm6T1wvCY9Tm6ofUW9HgR1HgZDp5zV8VdE24BuDRh1Bq43S5Gni7NureUs3o",
  "key21": "247e39T6cBg3G1EEMkSxSUiw5z5LMZnpHFtaHKrukNzyijhukWMNLMxt7JyZqtCrfiF5gtp8B8ab3tqdeXMjp6nr",
  "key22": "5SV34BeJApaFLjCuZCorryJ6ttbx1hhVpeTE86aLAWxRASuXgcfqbvMUVzMw3zQXetsR9qgrXYGV2qykbsXVLiMF",
  "key23": "5RK5zvBFjvrjtR4ddmsCHjVuzLiaJLkZyXTamDNcufnwKC9rA96vaoSuNdHHNwjLsWbLimyQXaUfWuN3qmugTSdK",
  "key24": "5PpPjN3jnvdN15NuJ1LRX1B6LsVniHXeVyBzmjMyBh91r7yViStKfmkh4W3WboE68h7k1gRhwum1V85zBVvn826R",
  "key25": "RV1taGCrpTeX33YS8E5rfzQKCZfqStZFHLKaYmX77jzHZM41DwgUA7ez6wmvMcmLoFTirM3XgzUmNQSGszzpiYA",
  "key26": "44AdjhwbfnHwnQtwY9FCwaFAGuH1ddUDzdNHEKWjmxC5NJZZiDABcvov3Nr6PXejoTFigeTa65hAZJa8DfoRHvNo",
  "key27": "21piTRjCz3Axbme9hExpb9hKzvh3ChXnKzxcdXmTSQQruGKe2dh8XgXnv9wVRMtKceipiURCv3eHaVCPHX8vgAS1",
  "key28": "5Gv6bTVYDsAEpbzqmguHaLDKPigxNQXcRjuUN8go6u4FH7Xw8kLtAn2rXk2Cu8Y7Nc2tqQnPwQYsbB7hQwqu162k",
  "key29": "QwXJaZGkpefCHtuJn5YynpHYryhGgEnqyCNG7VFP2brqG7JSpSSUF8VqKj3WucW2yFPSEVjQ81WgRvYAcrTv3nZ",
  "key30": "5Yx2NpqoBMx15o1HuoTpTvoLp5B5eZDh7nbSiCyZVp7QcXpQrhMcbsNCvgvbbNW1LJZcZZJedcvwPid6hnnNR1u1",
  "key31": "2Yy92Z4iRnUVz98HtQp6S6yQFdfUVb4CmzHHbwprdsyohmvimaCP6pL7HiQ5gQnVb2M5RoCH3WP1qfcjneSve93v",
  "key32": "27fPG58oH8JxTUphR7P6oqU7R5XRcCLnREYe5VvRqVTSPHR5K5rU9n8ZdMaXSinjyLpwYy1PSj18VzdkfqhXxpBD",
  "key33": "2SqSYArrcWzGpjwqasVH9GK1gRcBvuXPfEAPpdmiNsMuFP3TMjGqdz1ReGh68ej7KWJz7HM3CT9k4GhDCV9Hbbhp",
  "key34": "h2a8fQxLEVHHTZNaEF31qJuCcWvQx8EocchKS9jHWHQAFpCSiFMj1cZH8uCB8u6jty5gKY1J7zzHuSaPJjPejxB",
  "key35": "4xu1C14AQhXn8j7Qh1hUctK1qZkCGx5C8K4NmnoiFdm5eeHArhkazbNsp1Ezz8UA9bMSS4PQzE2fxVe7RHuoVmWE",
  "key36": "3ZFQdJv1R18BmuQfGdun4mMQDMwLRV3tBcH1YbbkA1VY9yCPsLVr1cBhNRZmUXpATda7vEoxPC94EAGkKsMkMKq5",
  "key37": "2XakYQ6714KJYVAFkPXaXcxFxDq33mRaxSzpgiK4WA7m18sfjBmEbam553DJtAnEVUPVv3wdhKnMthWSsgHXexXW",
  "key38": "2ZW5gTQWxR7httD8voJGTn8TUCEBA9mi8SX3hAcBEzoK6dNDGRgVDv8RvJTjBsoFT9ossUbcBeyH5T4iGVHcRd5N",
  "key39": "3q9bTkaGoMqWcCcpooFNFxnmMqaxLtGXXcgnS1yt8xRCUtDFnJPcVH5UPGZ8mTidHravziJRpxbzJEXed9faZDXq",
  "key40": "5FLmNwVyXtgs7zYmfC3dAZV7HEfweGheV3jNhoTAdpqaDM3Xei3KGvxyVdjwtMzPE57vdgcFzyouTVk4eMcAZK2b",
  "key41": "44fFMCzKDUoiq859DqkDxjpMPM9qXsHuYrKQmQQTPxeEmAwVeUzMWrPjUWgMYmgdinKJBy2WsYnKJv6jQS8yrwro",
  "key42": "28eHgzLX4fgHkzdWiGiGwSEhfRpQVPYqm7neoZn31ELyHneR4236Naeay6jmTJbyj8DpiXgbEXKqxvmQLMfDgWeQ",
  "key43": "2TRckNRDbKpfsA3EsqGwUC37w3NZim5yXciSZLZvH37sHUGGmJpK7xGypygMt8iQZgbWhbt5ESLxA8nLxcq7wBvN",
  "key44": "3HuLQJcC34bKXnriUNPFEoGVSfMwFiCpHWCjwtCQdE4HMSuBr1GXiuSNyPEde5wNd2HFxhmQAPjGtd3tn8fc7YMS",
  "key45": "3ni3g2xkqNJMYhUJ8EZoGpombi2igpVX5j3YinpZgb3seTxa8cZJapo2LUhTWoGZn2yJUZopuGKS86krarxt8ooC",
  "key46": "2geCYnpCE5Td2s4xLSoLpXTJ7czPuuVxpzksKLpjJxUp3e6TsQvoxpaFvj1ZwhL4XzthYZpfycCXRtKiWqX2mXVP",
  "key47": "67hPg4cxRDvsehAZyYYYhtbSP2EoFb644MgBQLkRL85vUg5eQYNjnyDJXNzDkLPqgzbvCvdLvow4RLrFajftrBNe",
  "key48": "4S8oW3LTx2m3FWRzSH6LsAmffRjeM8SxTRypv2ZkFPrLuYkyGa3QaA2srZiGeVrGKw3WRkyoLvCasYysX8b2XrhP",
  "key49": "5qDnVV7R5QXbyrrAFYkrKW9GyodQSZE4mNDy1zGPPSoWNuu8nZxmPghKba8q96KYaLhzAr6PtQhybsTZ2J2asih1"
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
