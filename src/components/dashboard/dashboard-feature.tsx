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
    "5WZTM9TY1iRR2uACxi2XwGfYmvnhN2gq4X66aByeLTiGMM7x4SRCyn5W6GcB9H1csRp5p4hUmx8euCmHjw1JLGWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWurhRaGrfYeSPDXSK8wKigwA1a1eXBWvoPm9crMJYAvpMHaPXrE7NvqX83upFFcvReH4ukJuU7vLoWrJzP15TP",
  "key1": "3CFrwdMngmx4cbKAsN6Si4Q4DC8aR9YTgFj8JArC89YrKCrs9yCYqFJJPX8W5u3UhdsY8RgC2cbgmsQWPyG1bW4X",
  "key2": "4Uvpt8hP5W3nCqmcEXVdcVwzUf85fKf2iEAfDsdTTR74P1sySZgsoRmU1Y1crpgPq5PUf4UVrrgCbXAFN81AkShw",
  "key3": "4L19WZ8jBo5ykihaz85QeorVYjNngsqDg6HArPQSbrPKfpXsKacVXmmkDxcxx2UnhqJ1eyJQeoUXVNHDicRgigVc",
  "key4": "52qZ9LG5Y6Kkd8CpB87p4LQkKwdeCAEnXujzwFt972pE1GqNyCCTs1R16UaRb7aMECJt6TLXwQ2a8Js4QgXMK3PR",
  "key5": "2KxxP59tUHtmeDcKW3qF2hyADLKyh9szrKjuVLyzz97CiThswqYkQB9VmJRj1XfMxQDxYqDjxZDGhymnFS1GyzT6",
  "key6": "2gyv9uJCD7pru9aj6HJipWAtutMNvDA7hq771dca4wr9CHyXd1L2XmnpxgkgZNBjShqp8gxDzbixyaAp9bFMjVMv",
  "key7": "5tVkp5PKPKNDm1L3rYBpG4Zv9JQTmUMwWMax3sU2DVYjQ3yxPm6gAjxUF8sqkmSgSxNr3LP22g48qNXerbMZyAjD",
  "key8": "64a1Rb8WJXmeRpbwQVradHx8s91s2C7LgCxzUABuBKyeacefSNFX5ESYaS9AwaoqYxQEo7kRA2SRwxdoaJTCWMJ7",
  "key9": "5qBvrdGb5RZnusMvzNefKahCFDCL2k7hXqxqLjemUFo6XD8w6TtuzTtUmXi1M8afwcykhTFBxqk8SF6FKuoJXTNX",
  "key10": "M2b8xyoevj1uRxyHwcag2zpMfdDxc5x6vSiY1YTGVLKMmAkH16wnUSo1Df6Bf1TwU2JEvgyEd184vAAYSB5tc6N",
  "key11": "39SuQZz6rb8RTTFRStbk2dQ2WdFq7eAf1WcmPLSKGLY2hHUKAMZbtR8bFKubVv8MxcymFqnFTqGFRLPZMPrzesB9",
  "key12": "oaktEwSbahcMikzmtLhJcM2QGm3436W3PKhgTWRZQ34gJv1M37vSurwgEF3cHNgxgJSWWg1z6QKH5rK85Dbvi2o",
  "key13": "23Uy3tD66zFD4HXTnkx2ACiXgqRrz6QBcc5s8s65WbdjVCgwLok5H5BZyXZFZdBvAub4s9zNLE4gearFxWvxCF12",
  "key14": "5SonM4dmVqjvGUxzuXHWE9MfCGpAGwmjZsqWQ2gpKrJPLCeZw8aNGca8uKsgeirbTWqbsrE3Fd8JvC5mMxCc9kkB",
  "key15": "5KQpyF7hcBAKGV6i7yJLVLMX2QKAcaGsLH6g62ah8H7dH1xrKrF3KSt1uSaYnQtmQmH3nNngVELzAJ3jzfSKF6SL",
  "key16": "4P9bktg41WiMJKkFk9uaX2CVsxuJu2uveVY96aFEjrBqon6LWAfknvFJ5i6s1WoPWixAMQH6Y84hjQBrp1kTL9QT",
  "key17": "5ZWiPR6eaxxVcuA3D5MqLCCvTaVFiH5AFdWkyHaVVBQnD3q7BS2WsegJH64F2QLZ8ZmN4KY7jQuo1kEXrAiu323h",
  "key18": "KQgdgvGhZfuVqGJv4K3Z5hSqfGuKQiRZodAutzQhVXgUThepiMEXdkW93M8jRpWtKTALkbEuqQra9JwU8Ak3Hy6",
  "key19": "2tWyMbNG6r6bWf4WX4mJR5zhmG5D5VEhuV1Rv71hXGNb8DBUBcJ6wW6PxnxiC4A4UkSP8mL23YDNmT2FmtvV84VS",
  "key20": "251sKV7prdhNumgoeuqzdD3NgksFKWSmYCbN9JSzYt7TLJFNjWbCsi51RASQPtVajUqnpmd4FXJswpNHdHpSXMyH",
  "key21": "2DfETF9pQJVdqSP1uGc54EunxSpDiuHEt2XpKVF1icsyCMWKuKDb5gDFSB4yjQiwjA2hqub5nBg2qeZtyuDvdGbz",
  "key22": "5SqiZbuBUWa1tPG6GqU4oVBCoDz4ucYmAF8AMy1yYTUkUgPFMeQzTNTFVsUvECc1cCy8VdJistveYCRCug9DGhsk",
  "key23": "2eNMzgK2HsVnkxgBnq6gSq7VRjX9EVj7ALhMjxTTBhZaA5syn8D5A2PFyF1336hXUSZZdXpdeNgXKRXpNkJK6KZG",
  "key24": "8Ag9HrgLDrBMUFMT7fUAc5bc5CLTGHTWShGcQsAzHKWkzaxG8XaBZ6e6dopHACuiyqrZJ78Epj5NUs7JDwEBMg4",
  "key25": "3wK9pfr7N8Akp31TDbqdNGQwssMkt4RGw5aLEC26bmPMGaTcuiHQomQv7C96x48etU4T9NZixpdVsg8oD6JTsaHr",
  "key26": "GoB9t7LERcou9ZNhukmJVfV7Cpgn8N6YdQ5wYrv2rduhw87CMHpBV8MH8adkFtLrgHfFh4ToVc79BSavhqqV9bQ",
  "key27": "4G2eDsLwqkJJgP4aBqaaftQa6Y4EoVPwxncUwrzCFX6pQ8mnXHfAvsAKaaKHiJcQpPT3b1cZrt5bzzvjj2BGtCBD",
  "key28": "2cFZZkHDGeXpDHF8mPAgPaZJtXVGvhdFPDJhRTprvPP6cKwvMqFdhZoShA6tztZ5fkBWXRYo1QxmEwjge8hBf3Pk",
  "key29": "5UqduBmaAHdzA8acoARZUSQYDcfKbKqyPhyyKTk5R2cqSsRAZWQXjYiFnMvoMsEjvoLCeDF8eTeFaPHEtMMnjwyb",
  "key30": "66TRRV6XedR6EWy3ZMTEtoayiDi4MKEGW6sZvaUeoAvd4MQ3N9PsgkhqQCQnXjyKnpKVWF5dV7SFxA1GrEFSELaN",
  "key31": "3onf8SWFEQNvyGDLwoQ6r3jPmucWk41G63vS5jMSc5Fqev5PAj9FXE3nVAkAdcgoq95Vp84FgMfhZVHYmEBbkezw",
  "key32": "3g721LM3r1AZdAMjgML71GuEURbtUYCYZkRXKiBYDbSTDNAyjhjecYV5RA8LsGY3uYMWqe9VA3sm8unCzjdEWdBk",
  "key33": "2uhguJSXcGMxty9BAxLF9irEmDAszTZVrffxwGuP67zA1Eanw5g3uMmabUbWsKKkD92C76yLHqSWtpNqsVZfLKAe",
  "key34": "5ANQQUkpNKD3S88v9FAiY5Q3WvonWr77jSfGU6AQaupiXxqrkeqJLRyCWaRrpdFXwADbryurFetYk6k31NomnBvv",
  "key35": "6368dMY5shQeK8e6Hg75322PpqgvHbTspcDMZbJXMrtsHDjd53tsXpENFZMwViBGjGiTdLpcqh21BJrhpUpDaGnh",
  "key36": "2hoeA3HCJogV1MpbE4UGtbqkV1bkheUzJNvViAXiJUVY2SP21j7aubdtLjvMo9h7dLQfBMhY1yTUXet4p6ewKPrK",
  "key37": "nyhUFWDgtBt9xqW5TU5N16sv233ZTwn1goxiBVNvkTVKqRWYwcdn35Swfuo6GroZ8nuxtd74qwJxZECwZtnzG2R",
  "key38": "5rraFND7TkPKDuBxgFW22HS66xahDVHcacUiicVXoRXNajnBN4VcHgQvcGdS1y8HjF8U8V3GQWTtKy9V69atnFAJ",
  "key39": "5oLfwbykWghEKkBwsC3ZdMS4TDm2E9sahLVBYdajzT3KRiXv75qcADJtQjtrJi87G8Dyy9McfVYNQN58svvmin4J",
  "key40": "3xHDASKQ4pMpwa4SvyZZNpLRUqMHKJaXDeFpSRKLRjymZBTX3GDokKPchQ9qQmYNMa3mk1vM4bwuWcU36qR2hZFy",
  "key41": "3ocWzALYYNJjsey7sJNJMrCEz7xk8YoAT9o6V6Yurd4uZUX39dbgXU1oYDiKnX2AD6q5aRFVM6G72KqsfLWPNncD",
  "key42": "2vZBa8B97CcfPXQ4Tp13JERunwG2Gojs3JCuQn9TaZhHzUk4afMUiRDSAZC3WoeCnUJi3wyUZYQn7GYuNhXdzkCs",
  "key43": "6c5hZcNYQVURrdT9uNhHMfyqNxoaBnFboFFtEq1K7hnVdbuULYMB6tRnMzwAB6pL8ayEPi7qh5uTdDMmbyYFbq1",
  "key44": "383AgdF3552zRHyHdmmZNbD8Ba79g9SE9mvbT25gePQmo2gA4nqMrzyJWS6RGAFVMaPkhaS2BYxVBoQQVWWBybjA",
  "key45": "2zCaUQA1aNg3fM5uZzf2kHQ16ZqQGutk9gTfJQrMo4B4XD1C7yCKWt5HZQWvFpsKgfFk1P8Am25T3MXgq7tDMzrs"
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
