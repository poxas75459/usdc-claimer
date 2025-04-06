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
    "3PuzcgR5hL6obxB9KrGcwSCn16ntAm5XwQQdbzBxxDs9VtLWFzxqdDeYv7d7H545Hp1HgD5WeKR6ByJrDcGKqNpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r422tybLtLMovC7DDqFgAsMcEipSuW6xhby7gxK5hbFEutPihwceT5H5PVn9gTjN462quNPzr9wACyNsqCp2dzt",
  "key1": "CnsiKYu6R5LjwG3uSoL5qqt8vecQiQqx1HksFmELxSj4eeFKQ1Mw2UvxaJrHYss5Pzpopf5b2HgTtV6J8xo3ucy",
  "key2": "C6PfoDPXGdeTumdzUawbhPce7TjapaG3BCcrGqALbiYyozXVUWRDiR51TkufKEb2iHZzKmWgwboofZKTKJkxFin",
  "key3": "CDymnCMWHEZYdUt1pa2ozUagU8xtFcJ7JePmFGT7WKEvLkafKgfw5am7W1BbuJ4EMa2aX4rT9mx9shjzBjCqCYs",
  "key4": "5GnhooWLZMJAEb29vLve1nSPsrPVGYyzC6Cr8FLMnFoYxjuCkQA6tRb1dxasMiCZmahDR6UBAj25MVKjKd7g2jLs",
  "key5": "4XngMccSNtsNEqjbbAB394yjYdxZxtYHHsedNwFqSGrtNpQgYnJmSNDvh7obbUtE2KVqAxtLbLYJAizj5BKwhY6R",
  "key6": "1ize8wG667ReT1ejMQPuBNVMaw1Dz5njQJuYhsQS3fMFbKutqHoHrRtrXmb1nqTeYfXasaNcbHkjH5FPGzsw5E9",
  "key7": "5pzwrUp2q2MD1R44SvPnqqY1qQNTZFT8G1t9bcuurZr7oq4oMxtQzExNcLvenAApiUuBnCTmwjKpciBS8EhvPBFV",
  "key8": "4mBBgKvBdGKq8JtrNr1AckjUm8TviQnureQLiwWSXJWD3nFR646PBYSvhrBT9h7Dsj54RR9jE7REoHqY8n9arjPc",
  "key9": "5GKa4detbW9uB4E1ep7zvXAkUZKHkS1iR2UwziBp3EDsmuxLrWP4QfRmgkSaFDQNQDuRke8YZuPJGH5Rp9ZSj9vm",
  "key10": "2opx3GmvvZf6YAyD14C6GvjsY9Gat6euW85qMf7qHSjSESfAYFydAeLQDHgL39qeU7W4mJL7XqjizKCQc5CEQvay",
  "key11": "5dXUbRvVqSVU5UvgG4YavPiX4NJhFQ8TBhaYDwy5yEbYaQSqQR3qZke5Je7DQ9BjmaPeymfsACrWmZWrygCRHHuT",
  "key12": "3jKGZTdaheYC27t643EAHWkiobM6J8pHd8PUDbQbmeffwxZKMTiAbQuHTNvdY7tqRKKjJF33zD6CFstobUPBUJoB",
  "key13": "3oarsR3xDnGFAyKv37M1vesXrUwFzgqnFJRw8PTrBzgJqGKmgqkZQyHGCBBuWywTx9cxsS43fMo7ofStFceRrD35",
  "key14": "4tyJ36ZNMUkdQXTaiqRxAmiV9f7SR8gBLeh2wFvUfbqRKBcgsnS7bW3UaTcGcLtjRiMM9CBiNr9iSVcJr91CGx6F",
  "key15": "5FQaDzVXhvNy39536bVfpAN4E8nb5kdK3v1PFh8xBE6rwbeF5B59RBCQLCokrzkb6uPSd2jbDtWuKwA29CoMNwwD",
  "key16": "35o2RKXVsQC2zBGr28af5JA2XZKhFXdTBHrDqu27JU9UiVw4RgpVFB5rB9kR24g8sh1WJwbk8rr3LE5RbPEov7EE",
  "key17": "mkQgB8qLfaPFgs6MP34izw8c5Ud4XFV8VvDG58Apf8dzhXZhMAa2JCDk17SvN68ZWzW4HmkAP1S78Pu1AP8hRTv",
  "key18": "2GgwMCWaB9MiJSdmKawBjyFhQT8MeRXqkY6pNTsA4mzf2cxpRaZpG1HLN7AC5oAEfDh38JpVejUKG4sfPH38hmk9",
  "key19": "4onfbbDKt1W1axjpW2Gu4X6UFj6cPXLDYVL3NdDJgCgzEXg5EpnCjDLwLGWdVgXPVEgzgfh68dvQk5f2qcAHrrHt",
  "key20": "3ireqoT9jUxM6dEsNzcWaxm1myBm2eP6xhamuCpFyGzDB2FXE8QDgGbpT9T72kQaxzycq9YRSiWrQUXiug6rfevs",
  "key21": "46R3hk2fosWfi6PpVxk7ro4cUAKXanQMUz7KW7JsEC6ktXopuNb5B4SryLiHAGEXZKE42sb82ECZePyJnRFYtAmk",
  "key22": "4zhqqQ1jKpBsWHj5izS88fGVtfhL9xz1nc9EDMjzXtU4GfC4DENKNrPbXim3tEU8tbX4ptE2F9C8LHZsk6Y3jukt",
  "key23": "4UemJ2vGi5vfWRovjaknsgnC5T1CE81s6Y6CNa4V7TfZGXTJncHPNtZBuJkF8pe5BurfLRwwpDmAkUUWac8vJTx9",
  "key24": "2dnpwWQHvJLZKLNHsyZaNY2D3r4utrTiKgVcTZxhrVAM3QWw6DV3FcjXjKU4dqFuoFB8iXstEEwjaHRnFuv3V6b9",
  "key25": "3i4vFp3LvX91dvV3quQrFGG3yVZBmpDEJio8mZWYaxxeJDuCXHZBQQr9t4o7z2owvRjnuDbFLNmsygNxWRTihhNW",
  "key26": "5rWXVX2BPTRCsix65Kaqpnv6LSS2iGmApg2sp2ChiAEDc7iVYQETToUuQxdHUCgZ3PLWQuSsf7rxfhzXkrkdKpbJ",
  "key27": "4CQyKFuAw3DU2NkB7iwibXbUT5pGLffo5BwRixYwc7Siqhk8s8G4dfZEHm2DpafRrQcgqbUCYfUvSrQSqPkoN5DB",
  "key28": "3rj42zq6KJPdMFL3ndL8RQ6Rfu7SYLMYsXapM3QMnHAuV7PFWmX2FqtFAs7AiNaDQ4M5yhjN2NhSHXYJeEMqtsWA",
  "key29": "4V47aTESXCTpE6u5s1B557EUAVR2njD6ZwrRxugjq6XNEyd3adgdCfn5iB9bdh9E4hqAXP7BJ1cQGJwm2REndaPu",
  "key30": "2Zt3C5NkvwNSiS484hi5fRbSENarJ684nh175u55CkLv6b48pxRihP9fCb88sLNBdiEDkao11id1eAbc5reiFhEG",
  "key31": "5mRY1GvP4w22zRJ6Et6tfPv1fx4gNYXRAAzajSmgy3DzVQzzETy6t9NH7NwsBXaYVeCEgYptCue8Lx9CquDsoyV7",
  "key32": "3Yjzv2ERxBKD8iV3XscqyRfSKarb2TXYwN68as7ybxHwtXGAyvHTNRYYBML8jQ1MNvLrU4N5DifYPYZBfdZbQNVH",
  "key33": "2mdFW26645dYYA8BhfBQF9C7ndsjYs7QLm1x3BDtA1tvJP26p8qwQQf6sKVUY5AjSxN27W9peJB2RvJbcg7hPW1w"
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
