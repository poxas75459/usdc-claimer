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
    "4Avxhjs2L39rSQpvy8BKWvsexTAZrYn6VhXXRdwEUUxEQ6aQ2FPva4yzRM83oLf4AKNjaSogqUTAsUssDyGABej8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DtRjPkzNJCbjk7hA9V535Qxsx77oNUv7PDitWYxoQk7sZqkVkX18Kg1gDS8repHcWqnfgGi9QBMcVrcsBLrSzCV",
  "key1": "61mYWYbciKgeWipgwjtbikTSLeg4wMqcWuV2rvMZ6gm3D1vBTtFyGBiAucupAsx4dxgQoaRNxAt7xejLxKdEWWmg",
  "key2": "5UG4dMeEqDB1LwQVS72Km2j8rLyWU87PGF3oifn6MBDx9WmY7Bohb6sKcrb9dBEiwkKq5ZAXpECyd1Gnt8nECdZv",
  "key3": "ccgZNPxTdPtJfXas2zYEeoRpVRppSoe7CW8buMSWjuwbvt36ucGWQb8SYswf4kqZG3FRh9zLKTRYyer4X6hHy1o",
  "key4": "2VkqrhvY4GPvpUEoJwBcKJfpxL8PyRoX46uoX6v1RRjqJ921W4SS7Yyxh2cHPWUJuo41zegTSfqXs6fQ79hP46N1",
  "key5": "3B2gpkyXrekHNXiNPYPGN44RLcdnjs2DnpjWieAB6zox3cDE6STSVfowf2wc1z64XstTqCZ7ujLLHQos6o6m8t3i",
  "key6": "f9AET7MpwAaDKHpJTr8XyALaiurJ2oxCxzf3jc5YncRvVJh4oBaonKpWARjYuNqNp32TmkfUzYRMqfXmHMRXFFv",
  "key7": "3Z237c52Yeo9WbebwyjLjDKuo6vcFN1v5RWbnQoHFM7FZ911zL5azDKXPT1cf15X5NyjDTqDG11kvtRpzLnDdW5a",
  "key8": "4UCKQ3FGzxjNZV8nHB8n9zYynmcDnU3CLGs44CFgry5aRbYAfoCG5V5xg6GVUG4gKLsVYLYakoMAJ1ZXRpcKyvSw",
  "key9": "2Qwf53g4Bm34xJUec3HQLcLYGS1LfwGB1vZg1D359Yqck9e6xcmSHLZxzrEAeK9Rivdj982ykuu35dGATXTkJt2D",
  "key10": "65n3xzmXVUTh2ykNW8jkuwdLzixM8hkrzLi64jNqwu4kXFsqU9XPBxvzeHeJUzjQLMbTLZBoeFTQ7vE7t5DU9mg4",
  "key11": "NMCUkiSE2MxbwG9EVE3DmTdPAuGahQtYWAR1cm2M5JLni3Q1QqqKhNtv4wyZaLvmRF5yPZDUT34pLBDWpKU4vAP",
  "key12": "2Q7q9MnXCQTJ8Ke2YeDS5CA9JG4EPwAN3MbR4BLzpefXrfUMvj1wHD4VqYzB4UDskrqtt5MP58Ma3PozMYspeQH1",
  "key13": "36pc1DE7r9LAD47XRNEQhQH3mR8CA7eqXMs6vjkUCt5ndiVJbHsn5bjR9BPxwnYRL3VD6bob4xqfZ7zZX9W2KtUq",
  "key14": "ZHUsqQ9FXkAeNNuSvgDPG7WwTX5jeDp7BUeg9XPApTrkz6LVY7i12k4sCzs6g8fxTnnstTPipMDa8uBjXxpfQU8",
  "key15": "3c5ZBenkt9PCoFcxP3soprsRq9Jrkk2qY9EjDwcAUMomkN29Z16N7gVgCcDncy37e3z8jZxg8HqoPSTmV7AWXjRe",
  "key16": "2dZawQVHE9PqDtLqn41YLgDzUxPa69vmwaYD9fM2Vx65izke4TCxn8HQ6ANhXuW3LnaXJuwug5SKfDLZKtgDHp8c",
  "key17": "33xksHRPPsdai7p3FZ275TWekqbKxhFK6mzx27QXBbf7KZHfVYuLC2NpxdJbRi4yFXJxakDocRJrbBMobfxWPsja",
  "key18": "5qc5TPGLDJSSuNqqxjGWEzYcjRAziqjb9rGK8czkeD3t5X4pkSokCEwU7yTcb9HsJEbdhqKEd5bRzAbhyLCsuKPg",
  "key19": "3dcvs9QVepYo8G35RSYmJgtRjYPRgXGowN2Uqeb91ExnSEfkWW8bgsnLbwQzZcqrNUseQZQPhAsddKTTpqnHMZao",
  "key20": "5DHu2jRx8UAkNtnezfuatLTH5g41CbpGwYEpaGKhAyHwmb9Ax1xkxgZE7oPMZZ2iEZZPgwvB1HN3Mjd4nq4cHY5W",
  "key21": "8A1XityiKQvZS5rNHSH7dzuQaDbtJmwTQPkjEJfb48GAn1torh4b3neTSbRn4yeYLHCECB92wwvLpAogNxBAQ7E",
  "key22": "CYMfDFoTDikcheMJGyDPFbDAKjW4nmQ47ZhMqt6C74sQDt6X5FbRTyu6YfwKisPJY8bTPFEvA3ZerSmC4NijAaV",
  "key23": "3Dxh7ARNzwiwoagBD9DchnK6py2a5yKhsBoqkS2wgYXM1hjHzFgh4N5h5Mmtgv9FCCc3MkCCyCjPcLqWFRNiGrf",
  "key24": "3xhN5T6LSMLu6Lu6KxXJeazauSGk9WpJn4xorMEuWUvtFhPCfPS1KhPTAFF8JsrSbWdGN6jqdWSrC72KmP2R7sUM",
  "key25": "5nXee5oLzxqoEDkEbRxeCPirTrsmTgJ3FXM2oBFMPNuKemVtDcW1YcvrZkPWmQ7jLQFN428hX9F3tUVTfRHihvY5",
  "key26": "3aJujQXSmrW4Mkk9UJ5Cgs4FT2MUHthM21uNgXBVAhmhSVypP5G3hdopQw8AZD3MyXsshEPHnMgSnJzzcBJzxcgt",
  "key27": "2sBErtCRmPypuV7k5Gc9pPfv9PgHnKUzu3PVXN2BuZuoTF8FWuWXmyk8X4ACGtFYqCerLZJ7nogF76RuF6RCtegS",
  "key28": "2ff2ka97xyH1XHeAhRMoEZgiczM9UbrzQ6SYqRYoiNhRMiCFz3nExspZjn57Hih6YbcsZja43XSZKaopyuYQmfpv",
  "key29": "2V27qwznmuy7QAShuSVEq32hx8zXL5bXcWWETd5heSRmQS3HcPbGUeNJp8Wv95B5qN9VMA7ddbfAyti9XFYj63aY",
  "key30": "n85p8AcHYdAr5jbvwmYFLSLz1XSDV7WgWFdDe99fsDgc29Vc8koZ7eNZKf81LzzX9u1DHXYqgAAj548DdbcdHzE",
  "key31": "5eYz56qowjoBmWK4VMYear6JEb42Ui35WvFvxzDoKiTzrTw2tCFA87g2unDcAR2csp4eMLCz2bimda2Zqi4JBNE9",
  "key32": "2oqHtwoUhxDvGapeoTFjSJK7HfbDvZkfAckwdkbUrLfvzhrc7CNFv6rBskMST2HxCRJ2EGLSfygekFsgrZGgxyLG",
  "key33": "2N9ZqH1pSDey32ERXPaRJgwWZvWMWBQyFeNjMfuXY6Ss4B2kDjywfzTRL29iwhcWzjKJAti9Eau8XxLmdi42e7gv",
  "key34": "3Dw7GCRJ8YRzXPz9ft1MszXL65btxKK7jwokEZH3WwkDjyksetM1FZdSS3gAnRwMcm1bCbD2xL215Y1i621QyVwb",
  "key35": "4syn2iZMkpF9nzJQnsDdx9p6Uby4ejqcm2BH1oTwSorkeeaWjspnBqDzrZNbb1R73fzJKdvkGbU7Z43fHrmYPi5g",
  "key36": "5dT1fb1FcWE3bJBgDiAXDxfHFUuDtxQ6BsPwXNC8VASB1VxXJZSLVCSvBUDfMA6GdmHVjtGtrV5RpsF1P9WH3NrV",
  "key37": "31ydvqVQLNK1pEo351B7hwtSjC7up7FMEhbDjgbdYEcjuoXYddzme8EVXCdwU3B72CxbDRof3NzWzWTiZD3wUfWr",
  "key38": "e1DpVN2gDwg5mZfKV5t41dE1usKxwN3b5YTh8NQ8qZma7CgVbavsnTVZvq3DiH7dSQtbncDv2nPYQkyYtXJ8B2F",
  "key39": "2HWPuAUT4qTAdedzfJuWH9XAmrGZRz3MMRvUGbaeb8XNFVvedaUbnvXLpoE7P6Xn2prFFXNaxUFKy6baFte1hsDv",
  "key40": "4JFqgWgB1uaWTzcZDhSWy7hESKQcE1kStSSbqNWoSUH3BrxhvdfhnSWbZ4xTx1pzHYcA2Hv9egqKfjJYuvg3oLcF",
  "key41": "62X9sjtXm8pSJxCBbe6HiKWEbAdTdzd6mFtPVmXDtnTU63WXqSwvE28yrqni67UWFU8QAtBrLYuCwGjjCoEHCvxr",
  "key42": "4NY8kJmMH8crP4H9gmbzA5yS453oDR5Ji7HbtHdpbRYRrXvfJg63ccmNvSVPaxa7SSzu5MyfjTuwPJr7iWXYzsrp",
  "key43": "5mdTv1LyMFnycXdiCmqJvU8snWNSD5xCuYC3PKdGnw17nEh6JiHHK3ka4bQEigpRAabdVCfbFsRoNQT7ZyyVhmYz",
  "key44": "7mszQcSgFyj2ZwBir66BbDmwas1hGtwXXwhvbGdtVZ7QBuL2qKF9iMCnAGXUrmqBgqWXQHUH1jitvz2oxszxWoy",
  "key45": "vDGtnodLa7gDKvwhcx1GRV9DFyAom4bo8ptfyVxVQzomLJX1MpYp9B1jp6gQpqhWnuKXAwmTisKXX1GCEMt1u2W",
  "key46": "QB2S69BWpJzbrxwuJoaJSqc2opsL43AeuYaba3yxRzYHTZ8SptX5zEu8WkxocmbyQsCxoKDWQG6wajbKsLCRtQM",
  "key47": "4utt15m9nEiKYAbpBH4rwuB7H4CKVANEYSqXCxFQJYtTCjYUSQETL7zKKSsSJPtkK3wBsf3iNq5kCZGAokEcPw7Q",
  "key48": "De3Pg5ogX6o6UztXwYXsL5ykAXF68xFzCos1c5vF72WmsR8QcNGG161yFWUscqbeAnpa4od6UdBBEqJpRvckjDm"
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
