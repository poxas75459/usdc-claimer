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
    "5JEiDchTGmniVNJrKYuRModkFkxX7WEdDwNHX1pxvi5VGHrcFEAVhTkSap4nuU5gn7i4gzQnWVDUrR1pM8dBW8Hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YXMPbGC7shJafAMXTzCBrRBHLtghiGsL62xqL1pXjLYXhNR6bqfVU9Kqdf2pfW3T1tSckMUet9uk2SG4r3NiFRi",
  "key1": "2j2pfQQDt2kXvLAaa9n6MEf2reBDhktbL2u9Ac9mNizxZW2pNafzByzfCtiAtbPoPJ3Py4rKhxrExeuBuqjjNauk",
  "key2": "3oKdYxxvHaxPPDdEypssLg5A3vAzYMK3rRQN31czFTGARmio2dNpR7xg5SkNXYg5hwJZ6x8dnPeJq54fc9rA9CGE",
  "key3": "4RcGFDXgC4Y3kCN9yKKEaXwr7ReXsoZg7icvDVPiW8CazAGckMNWRFANZZahiHU8qEC4mp619UHQ4zsKfPMrRwqn",
  "key4": "4pjZtuZMdQg8r8t2CEpvAfcFFHWwkBqiZmLpsHKLWV6w1AD4RJ3Mt5V7dFTKsdc3tCLMiBd73KtUw617WwH8HZpX",
  "key5": "3KRBtwXuGegve18c8BxZRVKhxnRqu2jYUmumgLQtY3cYkxjmqUpY5LLoojpunZiMrXZdYSFrUXR1t8ScAuAv1qCw",
  "key6": "4Ae4BYD4HWCGTt8cunvJaLuxkRtZtaniTmJ8YyA5gH72VwTgAX6iHbEJA19Y7SYF5vy2iag6TSMVAUbNVMj7Saaz",
  "key7": "4C1QEhUCMziZ1NqfhLEahtWTPQLbYnhCY13T6qZkMWRvAky41seLwPBXmeywXsNz5wfEBRcRmb5sdyEzcUaoaPoZ",
  "key8": "3ByaeKSWbBwzEKXdWSHEqUy32iUFFPGo4DnFTjZVYAEGQoAcX4aCpHUyLRBKgfsnRQb5WzRPy528S3rDCq3uxG35",
  "key9": "2ivwzie8oPdsNLc3AyN1tdACWopwGhxxHQ4NM2Hr1Bc6dUNGXgwURFHxpiDRsWxZrN2bR9sT3cxcqatiWBqaT8sZ",
  "key10": "ws8Y5D9xYGUEsmWhznrj1HtQnGbhAPWVRoX2euVuKyrrxYhSaodfFh6bnHpJ2AebY51u9q7GraH4qpi4sykM43L",
  "key11": "5ZpmL8QfTyfZTJZyYdhNgKPSsnMVMWGtVc1mCDj2noqdvr8AtM1RjkGw2XdDXQRuKY91fkCxPYfKh6CVv4r6rvr",
  "key12": "5kvUK7FRz3mFZZH7vAUAx4Qo1TtBndjRRgSJcJyF2ARXzbNJoYHEcEjtiRjPstr9pj1rx7VYFJNWMzatVB3nwwJG",
  "key13": "57f21P5UinshETGRq8jsFn3YUDYssvQqDjynyKr8WUoGBpRPUogbuhjaka1AnSePzF4xxVj9c2XHQ7UwEYvqzeds",
  "key14": "DqAwYHH8ZPBGLNBmCjgrRHAEhq96sn3CsFgh7fpw3Q1s7gLhYM26XmoDDbCXvXKUSCvCY4js7MCd3JDv15eVrRr",
  "key15": "2UPY62bwesGpKje5TUNLqe8Exrzqi4zS9omVuss9QKCBvZraEKLKvtcKvCkTb9VJwXj9RZUQ7fA4nAKNt4epDxbd",
  "key16": "2MPcnzyxvgcfU1faJzVvhd6r3h3gqKRvzyFTECUkP4jJzpMeHcfAtuz751kk4xfgatFmtvXBuJCQb1h2YHF2jF7o",
  "key17": "4CgRJVFkMqJCuhgeNz4fhPrkfcKvszuRZMm8QgYQhHtuztLmpt35Kbajp3ZKvP51kW3KryRtKC8JnXpY5XgGAtno",
  "key18": "4NsYxpAJguRLuCsmiZZdvqau4GeE6cVuK998gxFzauq8mVw4Z3Mecq8KBSb8DNVf19qksXDdqGyikeEjNNaZZJmN",
  "key19": "3kSiZ1L5yuhVvUP8JCYxmjanknnLXSnNDpA9xprE6dfo1eJZHAFwjsFSFMpphwWv4STtvmzknVoBEmjyAE1y7QrM",
  "key20": "5VPvrFsuCMSx11LSr55H5zpBnLWGrxtzekS6GG8GQEoLdaHdruwK6a4inG7mVmcq1BcJEvG8jFSSHNvXMKBrEDzZ",
  "key21": "43Re41qMxkpNLyLBwh8rV7yS9vJMt22iCHc1FBHHkL2Gjcm8NG7WxAvDMp8x9wPq4VzzoYm1H4S6mcK1gi4HGhKu",
  "key22": "51JLSqrupXWPFA2nCE3x19JzMWZJbSozmB2TX6hXv74qw9Ma6Yw8nSmm4pr6VAKCT2uE3rhqS2WffECPYpsVAc2G",
  "key23": "2jNGDffzGShSyEAND9ukaGmKR6zWqsWYHdnq9AHms3SeXRHaaGCCEtvjrsb3HJvYVNieaSENK24Wy4xAf3wmwMz",
  "key24": "2C79xkcQ5YtwGbTnvYnebUHmdmiiQjPaAbhYzuP4uEUem1JQ2Fm7QjVa5TPez9DHjKaUZtHNNY9NqWVXmGA4Mb4A",
  "key25": "5DVyrFWTdWysugq2cp2wBKPitiwGH9zJWYY6bry2kzvfqUYjYBKBvXWPytUV2wd1os6NUkXsPSV5vMEypB7Fz72R",
  "key26": "WeuVpt4xRHj8NxPYxuMt8uJZSU8oy3kC1oYVLQ3AFm81pUGhRynmhgzJiwRtju7NZB5rqutwHZNCKTUafc1oTVF",
  "key27": "3wj2HdKkiaH5BENEGSQZRAmQ9yCbJ5X1RhTaQoKiSdsWZPWkVKqhLJkDrfa4RdGegiZip8vYJG98xNCVpojqpokb",
  "key28": "3kzSbDWcjj2FYkEZseiYwbLfGyf7eVKhQWVk7ELo5sVrM4TuqZdotDzUL9puzVi4cp59ahCUYMddGfAtkCsR3nk9",
  "key29": "4NvgqkXSoH868BnA6kadbRgVm78yF2J9RRe98kXNGiheD1x7Y9BApPGTDWEXNBC6d9ctQhdiEwnKUFmMbWeDYcpF",
  "key30": "533GC3Pz5Bq6BbpvAwZNBGBKtvHw68QoEZf8wNHC9XeY3wxfrhjiJ8YP6jaxRBWUSnH5PMrzVG3aA5JkTuNHvfkB",
  "key31": "585garX5aUC8HfoVJ4T7cHRG19mGNq8rYvUk6pCXtRMhveMSLuZt9LH5DSKw6ax7dZfbVdwntZSNGggE8Vu6J5m",
  "key32": "33KUbKu37TLaYj4mxro82TCSCYWfXfPsG7Bmz9A2kieuScVkemRRSYytFxcKf4M9ZzSKfV7PKZGUcbp6qNJd8i7Y",
  "key33": "27mPf7exCEgqddhqFTkrhSoDmSPtT8ZkY6qLccb2b5f5Xv2mLmPFoABKd9noCk5AB3CbBATPxuqDfMw5FYAgaTKz",
  "key34": "4BokZco6ih9kjURCMEbN3nnnaCQLjuxPjAUWaQGy5ksStDC7mCZwTAJW85s7pdKEUqdkCRESjxfrVyRotPgvMUSY",
  "key35": "3PZUhiReBBT2FshW8nR7f6r7gjRwPjDEKw4qRRAeZtc346pFaKrErjAspds6fRALMuzjygnTs42nWtdr5EiPuwXt",
  "key36": "2xoG9QndC78yS2CgNLJNi6WnjuPjV1eHF75EmwtLm6prqxSDzib2pQ6q1bfjawoQrXBwX76z1g8QgMesv233rTfP",
  "key37": "5CkgLwRC5tytXUtZ8bKUWKXrroWuhQDANdAERQFLEmMtbAknrPoAxC6tMQerxZbBNq4oWYSSFUXcSWfff7CY36ps",
  "key38": "2Zz4VmNWX4qBnzwCR3MAdcURDjsHDrWWJ6nHKBRyNKe81fLPGZWJaRfY5cYsdWhMWqFjVVE9poLkcqvn2EbhqaeC",
  "key39": "3Msrj62zP2DbnCzCNo9VLqH1b2itZUkZBT3r1eLqR1ev76SRU2E4sU6Zkvr4xi4DYcwAcikyjm3FRPsm2YFBrz1h",
  "key40": "2t18jghASiWQtd4hUJw24E9Q6eYgAvFBhyDJ2udCB1S7Pn1oPfjZ5NrCU7a3yh3d72xGndTxzM4qd8o5rpWmo7sx",
  "key41": "5bv3wjx15bjDgvV41539vA7A8rBKouoj6Ki9PVHnS3HLCAXbAAQXTha85xLbKNX3Awbu2vx1zvNPUe61X5KRW6Bh",
  "key42": "3tLFq8TuGTw15NrKwdtco7x2DkTs4nsNQYpbz7HohWrSKzkZZsnpbZVi513RiRu3HYu9rKy5HV5XcFFHSyNA2VXf",
  "key43": "63NXKjFofheXUxnVmf3BQwoDF1dGyoHVaDBpa3U4BpqRzjA5wm9684xomUkfTYstfaspGq5yZuv21ARWBpoP6x1a",
  "key44": "5o1hjYHBHrV3mntgCCAfWJ5UJq9MdH3FkRotFKNsdWrc8x7rt6SNrPeRdxvSJiWaupFX4Yx6fqxatn1AT8EvyHPw",
  "key45": "5rujJjkCJtwKQA4gDzcjA2WG4rg8Dd7BshDg76shuA7nPXAtwGXB2LtfTbme2yQb6cWJq1SgaEYfStZp8ZfL1QDs"
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
