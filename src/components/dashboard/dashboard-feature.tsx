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
    "3CwBudXRXZdKggHHCpUNAMKNMvtTQ2fhsFDPr11xQKutgQVMCrrDpi7Um9Us5oX39vPRb1QEYNVDoDZDS77bkY2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49HZBhh8MJZQdCsRqKg59CngXERMoTxo83oVwLk6wmQXnPvkBKCAAfnyw8skjNo7pMxcnNBh5N4mzuFLhPRrQ29w",
  "key1": "nEn7KemMUSatQ6Sm7idGFDG79Uv8hYkpz9ktFzDBCrECPsezbjAztTwSiP9ZDqFfZXR7C2bgNsxEyyAXymKoXp9",
  "key2": "3hfB8AgBDsu4RMtrWUgCMUpoSyveLesXMHuhniPqB1gkKnRdJfXf9HqYYL1oW7mkV2kQAtXzweLAgzPdg1vZgbu",
  "key3": "5FaNQ3MnxM8Cj6g8Y6LP7gGcASn1Ls96Mq9BU2WK8gK7kktYGthkngy42B8oNQDokvpLA6yuYqybM6QgYmiFsjna",
  "key4": "2ZwRAkvNwawMjdtoQzoD9waLPciFXN3QuXQbozF2hUZR8MzyS3ReWnmYBq7BpsH4aCfKXCjCeAN2aPsf3d6E4wdQ",
  "key5": "4xEcXbUMB7APkJsSuf2obtVALmCP38XvuDwViHWtkUVwYNyfUJwWiJHgzVCbc6i7zthjMRNhMNgX5U5jJaV7X5Bb",
  "key6": "5cnD1tGtHTGUM26f27JrC98PapbNb445vKkjvg1A5agiQ4dbAGFt7v8mU3xQ66eZEG5pXWEqtx1RmU35i76ZY7tK",
  "key7": "3XGYAWvanx2BU5qTXo1fm6YkmDdN3kKH69PbHewkV1Wdib2aLcUGJpwCsGSnmMhqeSjCAvwZktge6xDQmQcoAHfA",
  "key8": "564xHmqdbWAGr86fZ5Fjva82ms8HcnEP2XZiKrmtGVW2gugLiSDhN5vk9cG8Ydo57eUZq2FfggGoEp3dUSYzKFn5",
  "key9": "2DMvjjri7qdQQ33QtrPCZovkpaFyDr6qtEXwpjZsgTbNjFxpvEfFo9pGM2aHFhyZwzKXGeVEmtQ1vnYBSVcKeegx",
  "key10": "5Wzz8SXekhnNyzKRSVrQSVHoU4DP8Yj8mrcAFNb86Ju6hMw3Xy4C8wtzH969xr1TXb5Gun1FaazfY3VjmRpZ35Lc",
  "key11": "5sEzEG8MALKmUUvp9W7UVCJf66gskLtdUj1d9L4VsGdC43CUM1iSQaPPjETLdGUSyASheArunKb9D6N5kNcLWdrm",
  "key12": "4cdPCRPX2vF2cS745d84TE73YW7Yu3fB9ZounGuGG4123GY6Nr8zsF26bTd9GdsGRsSaXEB5B5LXu95q8m31At4S",
  "key13": "31zg1HHWjS2a7JnniY7BF3MG3XT4M1JqGMG7MLAd9Pf9cF4Mr3tBqnjg2HMEYSRzAGRH2woRR1YBRqaPr1DTMp6g",
  "key14": "YcUk15wtBkiyqHRiPQpUh4PGVFKLix4zZwrfp61szKcEvjGP3L5rVkVRkkJykwqQRQ9QNGLJPCjoxEWmXpKCwuX",
  "key15": "4uQBQxsYYzofYBXL9tG2mp7ctV4cS3XKUM13YCDcsMUKbxLPMRHNJvVYGvqgSTtAbeNX8k9MFpPpWZ2NH3vnBaFM",
  "key16": "tiAoGDY5fR1vXngMDu1pp2FidpffT3Vsj1SQN2DpULnCXefRjpLFTveS2XfxK55eK9sjrbzr5fzSxkR5SDAbm6Z",
  "key17": "432KRR6a2FfinwJKbX2GzHZWaeMQk8fyVTDwSPRXiScdaMSaCYu6bFBoL1aH9bwUG3u4E1JDfpf41hGdHT6GRCKL",
  "key18": "4AKn81K11iEeNKoXPpGZTnxcWPjPzF2Hz5586RtTqTTPuvprfv1j14YCtMtaccn8W6GdmFeab97g8FWFPavuQPw5",
  "key19": "49TRaoDK6u49mmC2bP7e5CdhUHpVAL9GXoZkyXoDRCB4ELw2qqmw7phwJYj8ResUVw8Q9QUy2XSXmJ6XAdvToFUt",
  "key20": "5odrrw6TRUMuPPmhTddvhzXmEVrmZNvbYgJa6tCSHJg7zrEy4sBVGqcnMroSMqYA3KryfYiqYoD23FeYkLSCwdcZ",
  "key21": "4UiQxzwvGUL8z3xM7C6QPPA6WYA6VPankBhFGFGNbJPfkNuHCUghsCNCJsNoSTi5ggSCgCibWKT8YnGmiD4Xq1eU",
  "key22": "3KJUdVtK1N6rqdLrj6wjKj5xtgeeZXQQbiBApH8CbNDFhWZyb2tAcpwWMyfBkBUqaR5q1pKtsSMABPNvZpWUoJ7w",
  "key23": "cSVQ3yHEw8f1UgNWJw9zocheG7xvnT4P3ksBzdGd7qYij5rv4nVdWUmogVCXaUvkyH58peGG9my28moYqm8gp62",
  "key24": "24Bq8cysduC2Vcmxarf49HLjXk7Yn7oi7K7W5MaZRRdXnTdPUkRqPqwPDPGU2LFq5vUXWxnCxeZDv7PTRsg2Hf43",
  "key25": "3dxW3K3vjTm8dRfgHBdE93fQdSmLyaBNyjxXZyoxx8Eo72q8J12RYmUmiqNesxL5WpUT1tWn75KCgQDfXMJpTnuQ",
  "key26": "5V7KjoSDjJHArAtxKXVRXXZc2nd1BVJqLMX2r6MXT95CKezyi2Uj7dWuaACSqLfv6Xukc9UMfQ3EkvZAgAdgfSNj",
  "key27": "NH4dutSnWTqwQAy3mmstqDgMxcVoTkmMquhwSr2g5XGumpwCBjSxrfkAJYpuoTD6TYjRJCnEn8Kx8gAjKhbj5jQ",
  "key28": "5P7z8S4gGseMTSBaNb3VPwvReGh791BDQvkZoRw8zioX2FsjweVpmAiMNBpGWhw39ctQ5zDpS71iMg3btNzKdfhK",
  "key29": "mDCXD5QQkDaartp82zPYe5qob5yMHzL2dwLMzrU8F8CNKkgzht1QdzNHyDxCJuQ7u7yB7rZtgxWwVdJoHwHsWuX",
  "key30": "22LHMjfWz4jSKNDLfRKdCYAwhvF17N78t294G4gQdGb22iYKMLjwrhm6Xf8Wv3qHPAodCvncHjAqTjtb7h3fcsQ1",
  "key31": "3y5TKcQFkR1giHKuuL7v1KbT867CTvE2BNAuFXMASJ3pEDTnLYCAwLp9DmbFjcyBUSs98XSasBG1uHi6iyavLmc9",
  "key32": "5PnwtAUUy8XKApRZeiJti9Cs8KkYpo95YXkkAvhM1Cr3UBSqApCRyuJRznEFaifYfQRwEtRqpUqNXjXZNispBEyV",
  "key33": "3iCtMkiCDbPd3mSN93EEMc8VNKugVuv3MDnUjaWzA6MM7hRexZbVg7XYP6jQdJfTStXpE5eCVGHmBWrjD9MX2Kyz",
  "key34": "46hm1CKeA2sFgpFog5vWayzxMWVstAmpGY2kqfRuk9zrMo7bKTtkGtiaHqMyq9QzkQ8HNFVM4XEiANipL5CDtYmM",
  "key35": "N84RUiJxWydoJRo2oB4sNQaw1h8yckga2FDdeDQPRnivemUELoJWLPnAmGz59nB7TVkKkMKybxYs1rRkarrsciQ",
  "key36": "3178umaBGfUCiEwjeEmfzb1RXaJW6FouU29q7hsVZemcAsjTJTypsJafaj7LG3SDSxYpjx2YibJAa1WPW6qkEbxv",
  "key37": "VLWAXPBz4GEo97Vya5uFtEYSbykGfBcD5utzB9yunaAAdVb7rwQtKQrjp73JBwEbdDR4dx619zKKprnUkXRFijN",
  "key38": "DnC2sJmtu732xJ4dbK9EfUT385kYADFznehuNmNDe8q1AR9RNYFnU1ieFaZ5sYYXZWuS4xBCu1s6uTrh37SvX3w",
  "key39": "w7ReCS566YrkyTro36vqpWSPBPUVrYYviVBoB7oV59hPDXZq7JpM5Q7d1n8ZVyCLMk1R57i4w5h6rjEsKvTYeFa",
  "key40": "WQBdAaT3GsjC13Gj5fzVi5jY21kbiiiEkHqdtZ36awoEBVt296k1pVDi5odw4pZdL3kULriKebCn8Tsyyoru5Vb",
  "key41": "66ZysgugdbbEPzNpWKJM9kqGVemaaBnh6QwLGGt2fwXg8LX4cTwFztjYQGMHYgguZXpDXCwsvDH69q9uxuXBMEqo",
  "key42": "5VaFiwhGFoY8Z82ZhrM4zozvVvAfq5xELUmdEJGagpn5zdkvGEfPp2zxXSrCJ338HzJTx7AFyT1bXnYy5TdDsFFt",
  "key43": "54Xn17RVpdxtgBLNjHRZDZcg1hVBvidT4k5zvPbLcvFY5yf9gxhgKVcEu5MMqAWtjQN3GcYXwoJU3a6uQvAayMNE",
  "key44": "jk9hcKAWc7D9DTad89YTzJC6m1BTftEmSrLZ4s1xc65myeY3p4uuUVSacFPLm2yCUMu9wqTub7SUngvqf4dRCUF",
  "key45": "2otYqqoCL3kyAMP4VAyhjZb7UyqGQQxE8WXTRWdkir3wWpZqtK19NHQv6G1NNHXMniCBuVm81iWPUbeYKejzTAiF",
  "key46": "bsFWZDNHNdAfH4doExSfxyvUK4iHd277WzjSNYomPbfaVxSmY6GnqHnmAD3BKZ28RPZAKpAEwb5gw5LcFRSnNf9",
  "key47": "595idM92J3VgfCEt52ffXegvNxDYFj5DmVfW5gxUDq9nQbDEgJZi597DwtQfLRXCjUdMLP7pHryiq4S4g8GCpxKb",
  "key48": "ZBUAvsrMC9vAuMGTPKyfuj7YDiy5B1QpwBxX3R1kmiac12xCAWbC4NR4T1BbG2vDfh6P3bzFVq3iqss9YchmqbN"
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
