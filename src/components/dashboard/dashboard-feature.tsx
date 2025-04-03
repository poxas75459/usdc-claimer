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
    "3orCjXdJT25QF5hEmC47EmuCT8qjNUTFHPmt9znnUMDiu7HPhjQztSq5HBbAxNuhSBDg3hX1GpTtnzGkzoeUFwkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PXUNXHi4PZLFyZQyDAuavSD1m7o8GBwaMXR9wSaWHBTHkxFbF6YMF6CKt7dMaeboezqoKKWiR68XpUdBkkd3cGR",
  "key1": "QjxpDQ36jBPJkJzrW6z4ENmc1BYMmJy8UhRhj6hc6g3PsYULZfAF7JpiuyP3DCGWdtvvfJjMU9TMyqRqw8L4hYr",
  "key2": "2X3GZaQVzfjU5vZzKRPfAQJpZkiMXViFGRTBQ6Um3ZCNv1PEydfBknFhpUCc2bMQgZwPZdYSzCMXXC2YJ3yvywGt",
  "key3": "JuXgUn6uDdWF6jHYy77YDXdfjYdHb2GyKHJou679No2i9hW4gZnnNPWKyf4xyTdJf6Pq7sp52v1J4aCeDkthm9p",
  "key4": "pMy2cpVAHLMZCy2NnRpfmGrJfB5XQQSR3TrzqMoJwwAefzKmmAdNyeK8nGycZM1L7WKRxyThA79CaxAEgB1qcBD",
  "key5": "2sDb2jDSB7bzWLkLyiSYjvGLZYNnPjGWjkL6b4GCY4P4RA25iBzWtsPgSVJ2rbUpjiFcK7jtzhAyrtdeZGoWbds6",
  "key6": "5AmWe4dtx4r5ag9KbFmnpzJ3mn4uUJg815AccRpzmicFiRgnDkMEFrAFJ7BLRwHXoyA5VptBRdLNJajLJRWSQcLt",
  "key7": "SFcfCqDRzkF7kmhQvSiWnP49mXWwjEesgCqxrQdyaPL5G5qxNySgPamCDKdfVHb8tp3sjFcMzh5dz5tAxsTkRrz",
  "key8": "65uVwtRWjP1cdkLQugbD2VduktHt25fjEr2Z1So13CuPLm9RWiKPSxoiSjTjfP41TevomZdvHNUq9AHbtiJACbjp",
  "key9": "5xMTYp7gPwEMg9mx8hLXYATuWRkE4SKJr1GtSd5aT9yAommrxeuS4Nzj2refNHRdQULyqYS1WY6G2GzQGQ6TepVU",
  "key10": "3zx8zNPYr5QUU221geF8rVZczCmtytmjvFxUbUjhDjVrEg7YHufG7GddxepKEk6kaFTXTfw2GheF7edK1Xhji7Qp",
  "key11": "5A5ErzhECukNPkWxQZb1jxiwTDLKko5yi28GaPAVD7A9zJH6qLWZGt92MZNpWzPmLzZw4r1wvSepiPvrmS8mAPHc",
  "key12": "2BAZ46zSG47EXwZnfpcvahnbjJAwia4tcrrLAsjCC8QZJaHryAbY5XNc4wgtJqHAFwrsvSqfE9E1LA8qE49QcnFW",
  "key13": "3bNxmTkUEGZiKqHf3p5LBexXHorphHSTBe9svu9rtvpJpSQU6zsbTtLUFxGiENzEehJUmAXLdNmHFzwaDoH7F15v",
  "key14": "ijY1soxERmkZMzrFEZwPxeZ7b9KYasTR1tCdoJcBHiCm1YNqCtjqs5mjnjZyP8yahD5k1RaspCvDqbMoYAekqar",
  "key15": "CqJkEPdz4LryzeHWTKSXGpVhXE3J5ZhTrxg4pKLQ1LgUZNQ83sLwnrBGjypr75PNL9oRVpRkjVAqzKqkvx5kecf",
  "key16": "3itbiNLsaJxw4gb6EJFP1qHttYhsUjVuR4FJPnmZgGJwQFDy7GcdKSReYJma8B9tqsf19ewbTtUnLMMhh9KeDSTQ",
  "key17": "3iXc1LtXMKS49kFCvqN8Wewi6Z34mHYvdDjUYhLj26tQWddq8SCTpELhZfFoVvyDjXVyaV7jBoRmdnxhxfvhG8Cp",
  "key18": "5ixPGzy9REtsWxsxLGTDwH9wT6bTjiD2TgsekGgSKmpghaniQUFMD5yNnSm7XX5ctccrtdwdxnSQ7rDGYcRb6wop",
  "key19": "2JgwkzZvT2ZjxMmtzdpQpaUCuu7ny4w3JfN8nnQ8mks8KV7VVi8ho5V85YzmkQqA2TesGrAVuhZzYE6GqqygBHPp",
  "key20": "3KjnSeScGKorN1txFunAb6FauqxmXf1vZrvJf3zbR7fqTQuUB85t2Rt7B9CutLkk2C5jBX23Zu5K41W8hAKUeNHT",
  "key21": "4MeJY4RP9BQpjkty4befp4CGgh7BYYVhXHZssMkd6B6EZZ7MSukFE9DSf35a22Z7ixsHJvWcudyPYySaAGTQe2gz",
  "key22": "5GEHNWDnRuSYJ3DsjLbXXus5JLP24iAV5zxYQBnJ4sNomEkhDa8pfEW2dnRHtnVx6eqnSkF5jJNtfxYvMefhhJN9",
  "key23": "5kqURxicXPuhx5XxmN11nNusy3W81jN5MaXybnx38izYJCx1JspcyQBa5Y4gvXTrhqd2Foe7SGWTZCVCx3sXvhkk",
  "key24": "2CdUA48W9LbZBxX5JvqEKeZf3EEb3tyExGkqEtbGnuc8E18wLCTwmQ6SrYzcj6JFn17eFYwntR48igChQr3LEMbe",
  "key25": "2kqoS5nf3idyQkjbULn78u3eEmtQngjK7pvjLHa2exrYrSPgaXLSFJSx3oeuNYqL3MSntzHBV83E2eQyUDd5ic32",
  "key26": "3ikg1Bau2QEPsuDJR9RL2XERKVrH7NCmx9MUh9r6ewteMiQiBMrMXXGqhQ8E6wTPnCSvpxqPpTR8oma4j62ucmi4",
  "key27": "3o7J6TgESPykcM6BtPY2TDhREDxA3uvRwPjsSfw9hfWfBhaxT9iTPKbe9RGb15vLbh6mDHELmezPEjmUVvuT6N8n",
  "key28": "3cHze754cTmyviU2Yd8SH2HtBnBWdaNfpeGcXXZZsa3sCh2kEczS4cY98un63dPJk4u6QPgQ8ema4vTfT8uKKDoZ",
  "key29": "66SbZrd9T5CKmyYvtAnbT1fPWvKVCP4UvjJphEdQiYWCXCaS9zZCX2mmRRnauyftQzXixQTiFmZB5C55WRAQRCh7",
  "key30": "24fNC9wnL3mgjT1csrzh8rEpBM4CFPxA7sPnMvhuseAtcA631SbcAZfBnbh8DvwKoEMf6c7adYzvAyzaUaE6VSfJ",
  "key31": "4Z1mL9grDfUBffLgjBxVY48DtwMP6SmRzWBe278dcx88PD8drf1ZW9vzkqa2KXHQouqjEZY7whcyHzdt23a9Vsiq",
  "key32": "4s9dFUwZyrgStbFNoaPjLNiG2ddV3stYxzGGMCGWn8JZpCp2eTTAkSALw8qjJCEC99tYyRuytAvAqvE9Z3SSooTr",
  "key33": "4ThDJfNbaLB5NrdiychLRiE8s9csTZRLziKAjzfgnNPbGTKuRh5nCjWNVLkNmPGRGD1sW1zZxCDJJrp4m5sjTnw1",
  "key34": "5KTRb19zg1ztZPd83A3m3FxXvTP3Ada9nsSmAxy51ahhXFxR33tjMHkTj4AZMrDy4xzHkEBpEVExB3TRRA4CUur2",
  "key35": "31KPW4eQzTCPWv7juCVDYqCmqgiivUhcvMfrhyYqDur6K8EEoNCsLxZcw3ZE6EgnRbEBMsSUMwQfH52V88ZZk4ec",
  "key36": "2tPB4VmuC4XhWJ6shXJ3uKSnishnqqDfpon3aWbrg62mD8hfYjFpqgX56ckVaQ91c1hBa2vHeLDyRqvfFRcwbTN7",
  "key37": "2A2uLWA44gxgMmyPb6mH6vuHEcQc1tM1Z532SnyJbn3Yzmktx7XpW1f3EQXXNQdNNW6FhxZxuexWYiXijo44SXeV",
  "key38": "2g9XFN8sKofgGBXavBQCULAF4CQXUqzmQBaTRtejdYjXLaqk18qFs9KJY64dcCggWpYAJWg5jHdwrTkQkj7fPztM",
  "key39": "4VGo2qEniANVbxy9uUzpkASjGeStDMM5e5win6YPSYqpMEkj7N1p62aSD3Qr6L9CfTE3vZYGKsM7V4a5191gQZyN"
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
