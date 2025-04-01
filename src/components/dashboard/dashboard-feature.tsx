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
    "29Kzc5vB8PTAQbybkSD1jjwPmbA1qNapskxbD9CrS7DHBHnfgTWY18cMXCW4VyL6JdnsKUgSDY9ErJ6p4J95tF7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qD96MpgZMv7qPBzR4ZCEsa74UHVbZ1rCpFwhSErvWWSBJMyrB1YUq7CVxHjvbA9DLPdEtgpvLegetzfJ6SFCH3",
  "key1": "4mUeuhnQ6U3sVyazsCGfxirSd4RnzviKmo2ca4m7x6YTbB6BKTxrHkFBFxihbQfnY7FxKTsY4VSMWag61YhbazWm",
  "key2": "pzjnepKpE2xgXq9AwYh9UiWLF7Nwhca9VhaaZdUvE7jV3d1jysr6DMuYRNQcdZBAxHXKDS5TwWwsGF77cc8nhzW",
  "key3": "4F2Xc4PQDcPTEiogVYfL6rnwWv9LLERxLDivskRUptB42ZagqYGBjCTCsATxK5KwKUkpsXUPPpVepPRokwywoy9k",
  "key4": "5xnYuV7gfCu7EZNCoXAPsc5xxPc6nPBJ2GiBqcBbzvuJZhx7AYFGszq7oP9fSFvgi6He8ntku2zTMc5L8oHGd9Bi",
  "key5": "86acsg9ntj4vddJaA5fTYcYYHzsh9e1RYpXDZ5jY9Zj27JS6C1x1u4F5nxPJNQWLeHkoyRW4SMiPmbb4712n6Yz",
  "key6": "2UDQUuP9Rgm8cm328tzHhXKK883mNozdU7W2uGzs1a6ioCiuuXGgD3KmFnCvY4gJPU2WbjgjWe3qa4PxcXEeDjMu",
  "key7": "4NjUCmTsQnk7uZzKy1LdUU7hcEG1MdGwiLC29f2n5xnw91CUSgBizn4Hhbk7pDGgGrb8xr2heXCQ3sRwePgHhufR",
  "key8": "3U8E15kFTTPmKZbirQWZtbeAtQ5SLKnGUYwyww4n52qmw6QpYQCT4eAZQcExyiehC8bSrGsMg81kPKbXL9VKKUFL",
  "key9": "4XKq8bAutUxY4t2s2hJ2d75uDYJ6S4Lr7GbPE9yU2h3ijpNiM7Fth6KmoMgaWnvUy6jTGDFSDyW131yJUFEUaRuG",
  "key10": "4sXwYTgCxjv1YjvrVUK2uhQgDRoPFnGdeWWvsjMfXctDGLWphRbjwthXrQDYrCh25jyCzvcswT8W9rhsYCU3zmAL",
  "key11": "5wDGuSTh2zgt4GERjnWNkgM55MPYTSNYeHhEPQNDNqvLSYMNWrPNK5henHkuC6RPm7RCJQmG2nxVATJdPxpU8HRh",
  "key12": "2NJ3JGjq8tcXG3FxMY2fxoxobf5wVLYe5MejZAceiRF5QMAf4zhGeABR9gdeK2m27fzRqmjQgYLU5Ldvgamv3uQj",
  "key13": "4CB6Uiv1CmSaWhFb5ABr1jAR7Mtbc74Utp3Cpe5BUxNP6Rdthhg2xyY6stBYagpB4yFY5CVPqsvs9tZ7GmFNBtai",
  "key14": "3fhmbwoVfcTzhHBk66FPsjL3e1efQD8vHxDmDfpBThYtBLo2cn4Q1m4JTmTSrUtUxbBgc797CbBocCgC5TVKbo3K",
  "key15": "2guYW6YpQTYrBNzjYgELf17pUmQx2rtxWXk1kHR4egfRWBHY3EMQGcEg49Sj9bS1RjczFDA13Enx4BR19QkcYira",
  "key16": "4rTHx9jodEyoqh4XTj4BSft72CZtfSWNtopDFKXxNdJQgqMY58WtnHpMG5bQAFp3AD55YkPufNZTXKZRn2a86Z2e",
  "key17": "4gesQTYatUEWrsAxKPUVdtmMqGtHp7d1pYhyrpJAfA4aPjMVE5m3voB7YREbcqYDXLurYe5k1BokgGDGLoCsR9Hq",
  "key18": "43XyC2MowegENbX2CZp2zemYjcYtXNTTXNDWYTBdmsyQkBzRD9aZtHGKQv1W8jUiDDc3AkmtAZf69hk6wfTmQkzk",
  "key19": "3jBpmEo2x5Wz6bpk5rgeUD1pqrKEdUdvytdUu4PZapEVdQW6CbSB5jwYrhjFEJ46oDFUc5Zyzt3Lt5GCW3QWEsoC",
  "key20": "67oYH9SQicSA1e6k7Kr8SaKz7nuN62H9WAxxB835PBUnnFgzEXweVk1jv1bAWhWBwcnZCR4c9MLor5KfayV9bq8A",
  "key21": "5ZaXAUYmMwWaCchQ5YwbSmXZcYRNAHbbi2HjnUcDJk9ojnkbYtSs3QBkgiD1kTV9XQhqAN6VzCiP3tf4HUL585rh",
  "key22": "2k2xktivibxqUqJzU6cXkxjm5myYUu8jN9tXnW6wCVgnVERuAVqR7r72aKyaSqt8AtAtnd5xQkkgEd8k8mCFnApU",
  "key23": "5EB2CJE5rkuerCmS1GkCVTvCu1iexJARBDXYsARNSmsQSHaAi7FXNCqEds2qUUbdQRqDw6eZrXEiMfeBhaPTAJAX",
  "key24": "4Lah5ufNTJiX6x4xwndKs97uXBQvU9jjBPs6CGLwRouG5dsGmZ9q1fQMpSLJ5UZboiX6vKZzHs8BBqHXBeZ2WwgH",
  "key25": "5Dx2s7Ez2jBdRBSQXbAt72qtFvCuPgEN2fopKrJaPWbkqBxyypRusbaatPYJEcUJGGs75hu68BEosSfztvFtzWZ8",
  "key26": "WHRBqfAJwfh6jFaqKAictThRgdcPhwHzepK45tpzBBwVAiZ2fqyvTgtDWQDFPwMyfeLea2MYBnNHpDiQBGeMqhL",
  "key27": "KyHJAJbaP6RFFnsJqGvwWBfzBndCgd7iu3yhDVENGn9PzkezFdg1f7SdJhjUvJvUM2vuEC24RKjDfPzGLb9hYY3",
  "key28": "5thpXV8TwnenYjtDAps3nXbGLWqE8n1MuJLwuf6PcZAJLSn8Sp3fV2D1gcDGtp2WgdESzGV2PeogGUrc7X3EJXmL",
  "key29": "4xroZaraydeP4KZned1bPB6yoTF22LzK4HDHuMd2eZM9wZds21XvtqctmADaDDPnBevSFDjDYmXSppd3Do2E8sqK",
  "key30": "3sDZkVJq7KqqvGGnuZtukcMGrp9EZw6xW5RPcusmN42ppNHj1hAfwz5dLWSxm2bmbm4jd71mKaok615B2bhwV9rZ",
  "key31": "2W4nWmhazwM2UduFPV4UKHmMhAVYqStzJYtD8XznEKuEcqALL8izzuUe7tQuykjzcoejVRCTU61awa6q2rnqVyov",
  "key32": "9gEDRgDPHVt8kbR9VNo7Hno4Wr1s9nGiB6AcfppEFMukn827rgUMfjUDzKkveBNhRanWR1LWgPBV4uskdkdTccx",
  "key33": "5Tf5eH6hqc9na4ZCuGZhjb4PjdKGjZdnbbfSZ35UZQW3aJva71THeRL2opVwf4FSZ12nAwAX7m5de5edWhwRBAnj",
  "key34": "3HSfwt5kDfoQxGHrthQx9DKHZzHsR8eP7FxGvBuaAk4Ew5xAdjw4GsRQGFARH47Z5W9MYeGLkGyRbNBjb16UGm18",
  "key35": "46HVh6pC2AXt3r9ZiF85e6iWaUjQnQ5qSyn3hdnSZH7o5ABC61nKHpceaoKW5kbsmtFMrv3E9gaARrSkWPaB3gaf",
  "key36": "32VrnZyKkAr3a336xRMWGmjcrFt61zHv4jqLXbEaLxqNCVMzfhkPsfPiKKrqtaddo2Nv43eBqVhLQxPHpbAgGKnf",
  "key37": "3egEs1DNv3k36agGeGHBWCcnNTkKS3i41VNjDusbZNaFGzEwXH4Do9db1eASkpw8ty9TBT4bbLryEVpRhU51kvd9",
  "key38": "5xS6H2jQQmTrQabJ5ZWmo5nQf3Q69NZE5e1Fv6d2BMwuVLA4LDC9uTbmqZYhVYB2HMrTdoZ7CTPhRmfaP6zzKm1v",
  "key39": "56oSXpGTQmsuz898UK8HqpUSd1nnCBX5pubmATCAPjrhFXW5oYtfm9qeUfNb5Lu1cwp56aRazo7smYkpJF3RCozX",
  "key40": "4KCkbhhXJFVtnXHWk6fS4hjD74KJzSA9E2M7usBDWNxerQ7gFCC33zwMUS4nysy5K8iYGoxTFoK9WerA2pgxDqJo",
  "key41": "t6ruV2ZudVhN6cUFnHuAFcUyQL4JmH4KdvUveye2Te9YyiMQDP1s9nUvunEGaP9LoNnKuBsNS9JGuxtMR2Qy9HS",
  "key42": "4SCQsUHiohPHD7uL3yhZFzp25xvq35FYzdLECnrjGu18iVFJ9JVFcxv5k7RxgDB89jdu1Kq26bQipSnsL3Gn5C6b",
  "key43": "dXPfHM1eU3JuKwaxGk4znm2xBVtocA7PBEpesqgsgkPZo7x41HfaiVUjnBapybHxzZ28Mzdkag9EA7SDLcQ9Ekd",
  "key44": "418uMondMqUaca8yWbSJRbXPiUPeyY3nJ5e6NTR34o3oYzWSqmwFVisuqpAGaZ6Q95gVirfMaX5MdXExYVJTLB8j"
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
