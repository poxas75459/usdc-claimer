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
    "5htaLkeBBHvXboh85UmgaqwwxF3vJGCVHhuFWyB6xPB1fYY8c6iopQfZLcusQ7Cj4KZzLKHvXFPMNjZ5GD42XvTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmMh1yX9YSwNZ2sYvSGgMB17GwcNKFmoBbSY9w7RfizrNjmteq7acToawydpLxFTtmcHMpGUzMa4mhURMHceGXR",
  "key1": "51jtWfUtzTNJW3joxcmwvXwzPcmr7CPT1N9UkX4qh2Jh7CeGUq7FeZ9rco7hmB81oRLSVP1bqJ48jnsezunuAidy",
  "key2": "5GQXnEaMchRMTbStKVoud4BugY9C6tektpQqeyXCnW1fzGjWBbMKCaxRVPXqXpZ7nNtfe8QaygXsKRxwPcKhHjwH",
  "key3": "JfyuBpSkRtvcid8eHhSwyqCHguTswMuRQ115XQH4jqK4jzno8vVAuWnWwCg2X2mUvRBdxaGvhg4S9cZQXg4jSgi",
  "key4": "WsFda9yE9y4ZG52kzVrwR9k8v3HfXSxUUV4xUtVTKhLpGgoNYE8FxQrXrxpYGWsxTKur3JDoMj1oo84bZGjJN1K",
  "key5": "5Wy2JUHHkQNoMZ5BvYUhxvYZN639g8abZ9CT5d6kqhffeZ2GvRyD33NnmWXGHBZEfQuYYaHejd75E47mBAZSge3W",
  "key6": "577ZRcq5upyRnTD2Es93fo8U9GLyd3tFkzr75G1wXCFT28VDJvpjajZGjpNpnqz9zwELA5EwCCjqxPR2CMmL5DTo",
  "key7": "2X1mncoVuRxznvgGNJZnMZghetWhPEWfp8yqqEkQ9ge7rheCA3oBBmBocaLfAjmyB4fGZ2GDyb5jM7bcXj5ku98Z",
  "key8": "2kXDC3xBTyNMp1MTYBRBj8yVZiHqdeWaSpccmTRRxSBCyCP796bBqxPxNgHaVCVvmMi37ss1pBjEiJF8okHx6hTx",
  "key9": "5METi6NHps4EpkdDLjZ41ghpkCTQC4Pf2DAMZTkdnMT64k64pk3ctJZUh7JATmHQZhUrPjpxCtVQfmNtYjCp7ohy",
  "key10": "4VfPAZuW1JsC5yRohNbdqgjsX1PgtubFEM4f1YEZowTqVJoAxvteNj7SC6F5GFkGuzSdcwWfnoQoHDB7musiNdoK",
  "key11": "3royckT5vHKtnQfMt1rr8r4n1srEFQsjKkmVX8atWi6eR8X5uyQ6ydc8tkMqBkFWpp3jEYbjpWCRck1MHPwd6Foi",
  "key12": "5Rho7AA3qtaF31y8nVQqyYme6iPfLU52f1gxpq2nMsKntiEt8KkLfzYhwiBxzTmRv2hfoG1zk8a4UCXC8vqwFeWn",
  "key13": "D461a1VLLpBvqMrGjbgUzsy2Xm7C9fxrtfq4BihpLAeMSg5oWEuUbxigLBzjdT4Wqe1EwT1RMHrgKhupRzQ4T9L",
  "key14": "4DAMSdQATs4Emwj15fRkvbZLf3KEiemfHxUV7rvje69R3GtDT73BkDMrCNPx18jRHhHgYgq5wqYL1gcjpU3bTzRs",
  "key15": "VdqzR3zML4uNTQL7q3Pm4yMmak624NEEdTWpaoTubrwguYgHdfxBibJbfg4nqCeijQ5SDhBUhCc6zCL97fHcqb5",
  "key16": "4Vm8f2bpzBicgrbjSR7YXtxCZ7pGnzxoQyVhAzXep7dqAnZ4tkTnNpUThQot5qjSR8hH9PXJzG87CS6ZMEh9qBzc",
  "key17": "4qsz9Ln9SaZnb9BCEvy4epAPxP5ekqdvxn4u8nep7N1YJ46vDNVQW6U27U58sfF9rCveyU7tDExsbYjQANUiL3hq",
  "key18": "4QJ8qEEv2QjkhMyNjq9DbSCiHqFFWYUyKK1GWS1DGFKAuVqZXcfhU4PHkP8hbenqbCfJhoozzRocq9xrpfqwAXHi",
  "key19": "4tj4KQZs2HCaydXSRAdJLNZfE5T3D6zcRAQiCgyTVBX5PdfS4gMuqWccjQ3GJKkWmgeHd9ociwKR2w4JNaZ19hBU",
  "key20": "2TgA8RhW4Hf1BKfYAiL3Eo64RHtBc8ZosraQ97DgHPKPXvweyTsaNQjfeCSj2PaJt6nAUng38UYo7q5oMvLrTs8w",
  "key21": "2JqgSX2gv2pQkAf34ZidghnhxGX6Y9y2ZCRs7rJ6BkUZtbCeqRdTUWQ53gBA9BHtP7zncXq2ynfspcZAe8i72Q8K",
  "key22": "2bc5zsTHkgmMEFi5jp3QcsuWzcfnmiD2BThm73bsoZuz8KeZpLXmnwza5VZRuc4fPCGUMcFxwAPKTJipPiMsKRwv",
  "key23": "5FhdrhsKHjXDicu11JPFhspE1TpRemrYVVcaA2BU6sPUvj4nUXxUdd3MNXzi6kwsRZE9wrZVvicwPK4b9dP6eLok",
  "key24": "2Cu7akiYHNSKmZryRF6DvV5DBfmsALwUjc6Cp3cZnEyqh3hXaJkjc4H56qmrBVzAFPmveJMjtBAXZUnTFYVrSZ3a",
  "key25": "34PBePBtEkPrk2N7Tg7XdiwHX9Ls8K4WdQ27pvqMGkSJw7aeszF8ugaqqEVLGw2UUiweB6Z85nA6i37XPzjB5Ygn",
  "key26": "3iKgUyLhEkswPBwc8JgWuZWvDP1Ud7yv5XQfQkRNsyJJ76CJvKbSZLT2oohbV4k9pMZoxbbChY9kn3ja8uGHRMD5",
  "key27": "29Rzb6VsxP3QJ6LF2UpgTAeSbdUxJKYPS5WePR6pJPveh8Zqn8RFrbwpqVm14XPRHYKi6MGXYPvovARNVt9t8TLu",
  "key28": "63j9RmRrMF2oZbJGza5QQMQW7vNAxRbTF8kGit8jejARFHrXnmu8dG8SkRrCJfffbcd39zsAbD9M6bhuGsmXU9RR",
  "key29": "UESnzrr8xwGjHpYadGK7DoU7rBmRZk2GoMFHAdSmBiMKxyyzmG3DnSiiGzhs7F3ESawjUb7ZXE4Z6SJHkQXefoj",
  "key30": "5stK6Euw8uXkCAPJFryHJaZTEzNW1aB52UX9WKrsJA9kk9LjMnR9ojH6q4Po2KvnFF4uSqQ6vzg5d6VnXTSB44qh",
  "key31": "3msy2UNjwmYmyJdem2X4pK1Za3H7pgYkNvsrLDu7RzeLGTvgocaD6c2qu4Fw2jzaEz1Pj8Gc4mffHsKb8WGEP4Wy",
  "key32": "2VhC8GTc91yhrKUoAMZcAk8bNo542pcVGLtmjyh15jcTCDatCtzqXCuLwCXNXCQuJ2hkzxA2fmrB1aTxxHV5CYbs",
  "key33": "3scc4t49XnV97wgiaHorzNTMkftqPMFdPPxqCpD1gtkPUX8EQr2RexR5Gok4SjdyTBT9bhGqpTrQsBHTpepvoqAk",
  "key34": "QRoU9k2sXG1sSRaf4XP5Az2sP7Z12LcsDCvNUGDKux9vuBJ7Y8mv6L2f1WfNbimA4pY3NnKYTTJ5BaaVwmPtD2B",
  "key35": "5UweZaJVS3iTp2YJv8ZFxQwR5qGfrVFNQvABhz8KKgzmkCVbxPv2ER13JTGtmYUvhK1PwctAbRyiog8DRQheC9v8",
  "key36": "2JyYXFCtKHFVv1aoPD7TijBWmbuDx3qjEAcJgpDGQEU79zATmtNJQx2EnRzYRHQUHn1F6iAW93aNw4V2CZwnrPNc",
  "key37": "5SLgGKiVR1vDYMCsdaqJKMndTKXvCEwDEh8MqfmZ4FLE7ky52Qu12327zko5bFuWgToQpMxyudGo1ZYF9g7XJLKK",
  "key38": "PXHjwNVr2gViJWymfkddp6KrmYUzuBe78ejsdsGpiNTPQonrMsc8rHcqLyx1zvt1nWibHf9GSjDkZ5cdvSgkgEk",
  "key39": "2BJ1Zi8G4yXQTK4vtMpMuxeprpt1vSh5A3fDyHeRkw8hSkrJtjKgRbWQmdrkupvAww74PbyLNhH9DoeBvMtuYGpR",
  "key40": "mt85bC2UKVH2rQvVYAL8qPzthVsAbUhAyW2Gm5DQdywwm58GPdA5M9nDF3m54y9id9cUwATqLiA2g7ibHHLcySB"
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
