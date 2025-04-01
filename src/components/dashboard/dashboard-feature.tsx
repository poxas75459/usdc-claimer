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
    "5cJCGMuEkMFT5FGE2uS8oYGPgEsrAaaf98zE89XNzQwT931C3ELNYajVkDRu9dCniLyKa8aZJEj6aN24Bs3k1paB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptyTFmEP7XkDoKbNvQNBMofUWgq72w8K6oMXyqw8n9gJDtY35QWSjTaMjdE1ZycLaJgkzVX5AyZsaiTLcSvD97g",
  "key1": "5W7XmngTuLowKReEmu3m9xxz8nS4h1dwbq6ah2sLECifACVcps2sJFTFezzR8GdvTyk1zfub1SQdxvAjnBVRy5pt",
  "key2": "58hNAqebnoxVr6L61PVNZoi3pcookYGacePPQaqgwPBFfNCZJSydNqoW9b7uqqeCcyUGehovpW7WE8Rr4wzRNLF2",
  "key3": "4oEJxe6MKhSjvitgt8FGQ4Hx9EkrC27PsjtW8GxM2GaTF1oRm2xfRCAwn8Kg5dA9g2awhmqTFr1LD9e6f7NWuuw1",
  "key4": "2MBxMuvPkiJDuDpbpPDyGsrrYNVns8Xnqp4bkea8Wpuw9hC5M62sgHeVXUU5p5fEQdipqGWnLydnGwWvDs5ZdmJH",
  "key5": "4TGLRaYsnRxdfjbbJ19M9sg87AtdwwZKfFPjDE3uHGByu1i8JcQH89ncTGbyjyiC848UUzYU82VcCvQWYe37MsVX",
  "key6": "3tXcZSvFDVH1cYCR5K6nDzENR6844pQ4wBguzKGmTRCGPruv2SsoScAqLp6Rbwmq3XgfujpbfHpdQfK7F8CFszSH",
  "key7": "5LjRbdP5wq3YBKPuiabbxyUCnU1kvcT3ih79Apv6LWrnfJNBdwP9NF38T9CAeyV22TniFFoA2Pi2epPaer9izqev",
  "key8": "4D1jtx4s4Yg41xAmmXzwBcAn3Ai15yrTgEvEhUjGyxqEWDoTFtUcWcvmtFNhvph3vYEtmtMD7yKDoB9bzBfMQGEn",
  "key9": "3th1rhnS5uqZADtQGfP6HcZ2njFbpByctu6MeK81PbpwNSfiiKgSwgt4ZW6qGuLGQYeuDgGLG2mr6tw2boXFYCas",
  "key10": "aauPdiwRuAcbaQLExmX1n3WMp9GyzmakpDRbZVeR7VGPThwbwdz4KSnVUst68gaZZR9GSXxdpZF8MgSnU58rnw2",
  "key11": "2C6e6q4My3MDr5Tpuhqm8HY4KTXHyXmxui3pmRPtkPK8bAq3pakR8etx3yRKExe8NxxM7SuGLSrLQJo9FSCWpEam",
  "key12": "3FquTjT9yxeTvZziHN8gCArv7XyJux9Yc98Dm7sDXAFxnqVyEE6L58WEjeGdiMySRBnAp2qmUuMhPCefx6ngXpGp",
  "key13": "52kx29DwpvKotqFYGKAK1eJW6qoKUEJ2m3qAgU7FxwKC9ZofHcFTpSW9sSSgQp71U1yD6GkmHsAqTNfibSoQdc8Z",
  "key14": "6bQ6u1FQiCMNhB2yddnRuScFX2cj9vs99zJ7f1uCM5NgoFfya6q2W2i8A1MEcxZntaia5Cn2EUkiB5tsMTyFVZz",
  "key15": "2cn1ufHCCFULwuXJ2i4WnxicGNc4qo9Q77wSmMwdCGswyGj7mf89x83KSEenC6B9ByvhzpTPeFbJBR7qoNmZ3vxZ",
  "key16": "2PNocwCBeUbQs9SJbFsvh8LUiGKqT7TzrMdTzg5o5ENVeWNZmtsUBvc1zj1sxZPatHBxaTUJZrGtBqTYEpuD6oy4",
  "key17": "3mydvkFHY7tV95na8xcv7fYUHZtfBoR97chf82JXjGzHvb1UyArNvcUNBtmrFgWGgS3xec64sVu5pNxDmjjMTZs8",
  "key18": "4dgVn34Nf5ZWV2TVmUdhidhtgGcoGg1bigVQmGrdiwNYmzb9Pp3z8UjFPGBV8zZUUHyiUDgdNYuQAgUu5vJGqNzM",
  "key19": "5yrf2qekVYA3eajauyrXWBWsJwxskgZ5jB4MdrvsfW5dx5Lp23oVT8f9ULh175PT3594RdvTnMqPARJV48FXvzue",
  "key20": "4eqtns4SbtcntAcTeELVUraTYGRLrp1rgdXKSnumTkvrCCQvDaHwqQYxJkD2tz5H8Bfam1AU7NgbvWXDKxoF83zZ",
  "key21": "QN2c2sdw5J3XubWFv5ZQHgdZqm1XEBxq6afhVw4weeV8QK5Qxe9WGbZzpDfMFfcMyukgAeF2aVoSieyDVoeeiBQ",
  "key22": "25PwU4GmPQQz7b2Z19aWhHkaKyr82oJVc3t1KE4cpUN5z2UUKPhbNrw1271rGU4TZwV5L584BUo75Zs7YFteZZx2",
  "key23": "4nBARkWDDu1KyCavHQpUAxxZzi7kH4ELRQCMou4Teu9jNSzzxAYPkFyPjb85jAZgsg7op1JSDbhdzCraPq7Gt35f",
  "key24": "2NMNkFtHT9HWQZEUpio5MFoXxGAGUfTqejjQs5F5FYgE8FyxgtyJBMht84nKjXZ7MRCPDennZdY9xWYdqdgv5ANy",
  "key25": "5YD4K8yPgjRCGDAzhunpGFTMFK851vgbo73QRqR4N8DUygCWBkcTbvCLHi4TTVFns13x4vZi5iME7Tff14oNoQsW",
  "key26": "n1Hh7YkZhTS6HYcqzqXVATNwaXUBLoGffNohj8cWu9hCZfjwKQ3C1U2cS4WAuX57zhT7tJ1QdgLgLgQYTDfauff",
  "key27": "3YaLaiKk6y12gqsibnGNRSC9Kqw7ZCrCUSv7jMUL5AfGScvQ9tbpSpiVxp1EAVLtm8VFPpReTrgyRM6tmyXScrxU",
  "key28": "4As9o77WVnhjb7SZ7zc8X7fKQFo2XogVJiUkpFpYmLr3pwvmfKwfYt7w1DmJLJQKa9RJ2g1HYEAnqWzZKYUpqBKr",
  "key29": "3Mgs3jYZFNNwUJbv8YvNyD91ckNuzsvgp9HJxUECMydkK2j71g3dmjeZyFYQDRszERgJ3ViuyxKQQgA6DSJ2pH82",
  "key30": "5QCvFTqpiKYRUUBw1BQ7diSivUprNcErk8KmBC3wrSdExwjJYyzhqLJqmBWuDmX5AwCdRboiwha3UpfXiM5kbbDJ",
  "key31": "2KguxwXAmTBesdbrXxwZsfhCpzzJs9F4LYRFuGveSxCKbmvBDrrpQszwFoNM4E3fsQsGNR1AdY6iHpbe9EUnqavY",
  "key32": "42ggbDbEjWszruTzyUSqJGGMRQu44xYWDubqged3XQ1cmn48gACKfcHfgnpvxJt6V71N1arwMUB55TcH7oaUG9XF",
  "key33": "4Z4PhVBtKz4QqPBjPufnNWP1JMzefuVdrycPmxuhc1VaGmbd7mTSHQFNc1HCNKEdVx2JWZmsEHHJEigctqLkKBUR",
  "key34": "3hwvYdEQA5HpQ7f8A9MiftzxVJJTWkhDtwtg2Z8c5jM7G5N2j9U147W6quxDNJaXk8kitXjEKTvU3D9hyWxKMfeH",
  "key35": "431Wu8rTzwRs53dks6MrhUqm3AiZBhPr5n6ayn9JfBLpnTsLWf92EWESPWs75NANFfqLiK9zyVkBAMuD6AavKXSB",
  "key36": "2McxvJ5c9g9EDnWdzsz99BDZoejAbjrh4j687CS98TEcTvgwyRccr9dNWHC4sGoz8WqPgL6TEWxWCsuuqnQFZ9Rc",
  "key37": "5njwQhAPVmYq4sVHdVaeaFSC5rfZATn6GtszXzDXMD4s8teMfjoa8eCtudiFReYNra6bbgmuJSNwMkBakt4X2m2f",
  "key38": "3aL1aYj8gpFCp3xnsxKggANw1tUEMecejnqHfHsh5Eqa9wqZ4gRLYS137spkQGKU43Pt76vS2VfZpmUQfYmxbCqh",
  "key39": "5jUdPB276JXvVXuhBmZTpJxY2aPRW8dqRePT3f952n9V3i7YYLrZCAtmjhD8gaeci3PXSP6AxK252Pchf8B22fPE",
  "key40": "QnJecPRDMMPNELYjuv4bS1gCJ5pswtB7KYUX9qrWx8eZFReBxLvRa1KYjt6rsMCGpL56EyzsTmb6GrEGQEAHPwy",
  "key41": "5sL7ym8s9TggLxcqemS5RZiW75mRwyawKZQeiSF9vrdP6kMV7qu1ttNpqXRuoVHMcNYywMDgUyRHrt6neGoyPGj3",
  "key42": "3mwkPLyhMRyNbKUDLZqEWV1D53wRNSF43ST2ixwZRjkmLABvepEVaXrkYtgB6fy2QHJXtVkt47vd8jRSgPiNeA4i",
  "key43": "PeSWEyQaedZ3Td4Y8fmJFRMnvYBijNUUpZuc67P1BApEtad1TSX4bGLPtwjUzCcEZZLAzdwucAWMXp83c35gQeQ",
  "key44": "Xg3HUS17hcBTGyN4dtYnut71FPQ5ePv8T5jjxxHnanrAKL2vKPFS2XWUeyHm9bseWfkcLnpaXjdMKQ96sQh23cQ",
  "key45": "4RhADp7WrBqkRCosJCqvYZzrTNJkKi835DvVspPMWvC55zA2g5rzZ1WQJ4SeiMtU6jg62uvw4RnowENVSe8QuJBK"
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
