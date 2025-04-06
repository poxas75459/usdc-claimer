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
    "5DpvtP9jx9jgbuJy98cfjEb7fq8qRUEmVBGxTR2fqZ5WxxZnx55R4aEg778J1uj7yJz7xJiZXVDeCjxh83VnHwRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hYsousQFwYhzyw7Dd7Ck8N3HRESaoArzwSNCdFtFqaU9fLgf8c5cCRfpErUH1hveKnTFnuz3ruLzvTaQS6dpKyA",
  "key1": "56WCovFKh6iNFBvn9GSmoDQLRFADmPrb9J6Uo9Y4QgS3hpDTK3XM1r13jAj7jKe9S3bih6NXQqd6p22nnbHmhzdf",
  "key2": "47oBsakjxkKchz6JJh9HjmQ3T9dcLW2cKNayoZwaaWvWVFp2LwKKbsa9iX2myXX5m7RQQUdQ2u7EFXzNEYyedstL",
  "key3": "2BaXabvSoTQj7YemrrAAPmBw28DwHGdvzjZVhewR7WpbtnYdwVGZrNDVXGH5F3QzBZKmPdicqG24YvkCVRVTsLow",
  "key4": "uQLHcjNFV1bQNWrcRUJVejR7qXVNTzku62P4BVRxoTCgfrgS4aGnQuu4TKPf6QoGeSN6Dou3oPpamHvQXn2fhZM",
  "key5": "48hjrujqNhQQueoUsw5CimL9bnwTYF5kjCFG6qNYhuK6T9oGZgQmJKtq1ahABKLoBK6GNYSfaH2cuN1dcAhzD1z6",
  "key6": "3UEnCbaZHKoqkX34gcfMGzaMJefbbXgQbaqPPfNEasXn6tzkQ1w83aisxVmTuPo9bkJGs7G9s5TFzE7RFvDYQ1Hc",
  "key7": "2WZmbbEccdKtjZdkJtAQ23g9SGFgQudiC1Tf3Npb2EqdAn7DdqzEDZt2Xnvq1sJmysjM9DQjnFzL6foR5fb3nsWx",
  "key8": "28FXjrM5sVUBe8THQMJQpm2yyqbFDyL4pMx6xtWDwVUUZChZrdp2f9NTG3r92jPaf59H5AtKMXAeV4r9rMceviTt",
  "key9": "316FSNSzDV1Tua2P3c7LLJeMn43iKSY64unZhxvdfagpCQ2fX1W9aKqZKgTXTLCQMgtuciwCAyhTj7iv6ms86RDN",
  "key10": "2pGS1S45D2E6DiRKMcJykuwkonxmB3ZpgiMTt9f5ud6QFSmwBmRx3y9PavcCUHsGZogyT7S5rCd2Utcp34wmBue2",
  "key11": "4biS1dqj1VW6z4fssvkjDfR7A9eEQwcWRkUaWdVjjADHDPLDoaJfpsm79LsPBD2czNQBdsJK8hQQoRrK3dwXttYC",
  "key12": "4uthkPvKr9NApCGBzBrthhA8JQv14FrEjz5MSZvSaMdJjctcCKcP3ptZXJGZ3qjNsht9wZxniw5LrPdDgXuQqdAX",
  "key13": "3VyC5L1NoANsrBtFK2XGayUNgthyiHRXhtdUc7Gno6NUWGGotSSLdCP5WhrHvJJpxotTrsfqxyxnnPYT4JaEp5yy",
  "key14": "2vrMSpV9jKHthPmtQyKfBHB9NWCM7gKMmwnBnwayEqRAdWQHT1u76ssDYhRJTxmg5iaL98AL34FGL1HZrZU4YH4Q",
  "key15": "9tfE7P5G9d6gVGWJtzW6gv9Sx4dL4CsWeS4zgPTBDHgcmDKMY1Kgj9jg4oqCGPR7RxmeohDKMSktmw9TiuCoMcH",
  "key16": "5pDGioeGeCQbP9TpDT5kWQmNefosskmZtMbTJ4HjQJGkbKGZXsh5Qr9X4DgHfUCuRpY5WLzCsVc2KC7ooVdXmT4h",
  "key17": "bi8ioZY5KvuTzSLSsczKRL7W1niTJv2zrWAwTPj9x75xymRyRonyTfUJiwaAKwt3512y6uvwisrR6kdiKUDHSQd",
  "key18": "5mmdEzbEW13NDXno6qHDYohgfPKxaoPEzCBCg3bhM43dbWoGGsfYHdXxwjoPf4tLcJXTdM9XEaDBigGVDhvsjaxq",
  "key19": "5va9Drd5G4buMBUDUYTBWzeYyejp97kLKDqXq5gpvDtDQxLxBGVRZDVDhc4Myn1cx7ASKtGu3PZ5YNaenrWL5mtK",
  "key20": "5azcterwaVhNrYg8QDpzVtR4A2wbn86KZFEmMXEFtokX5SogFta4Yb7WUu6oY4HUQsepwHNEjphvkP2Mf7BkdTHq",
  "key21": "3wwjRnDPMKQtxU8z5fQ1do89B7XrqsZszUgo9cEyX4VA2BbuX1eJWwHecSH4aGUi6N3eaJa1GkBHKveeok5PWijq",
  "key22": "3zJ8NdqPSjskTMCZ2rVccDjL4t9Un8LYtnyVTrNonRJ7oDs4USpRNEEZ6ds1MSX6obbshRg5UPvRZrCRzMpbeF5W",
  "key23": "66oS8VkQpEZELpbGXXeXSrwMzWuzNmMxCXsYWCU4PZNbxYaGHTQpxbndTkGJiDrdLqhzUPiR8G17F3hwPo2RQJmF",
  "key24": "5zwoEaUwrQdSTwLL3LvQRsBctAe8S7nVasjAddQxpuFC2VGsTBWiMso1VLY5Jf2WQebBfJe19P81kxEA8mMMaeKx",
  "key25": "62zCnW3MyxYDZm84oYWMiWgvcMr3yYVMsdrmSZCp8XsXNzTHyR2rpQNvXNB6yX2Nt36QXwow7TuC39UAXQj94wXa",
  "key26": "33yTtzyCbaM8Ni9m3SmtLjHdrDi5zVEQLBn1gjSRQ6fcADUUD8VE6QfoSeBFiZAGqNtSZs6aiQeq1F4PPjV12vck",
  "key27": "2kf6VNUHT1thz1H9Z43quonWYLz1H36VcCDi72ccaEddBCpBXvu2wwU6W8zxVsXXb5AqnNG2qGkWjvPqwdoqLYLK",
  "key28": "4eEVaMqUjk5GkTJeAna7ft6DMYTbAHx2EnYVLoWUfLTHk4RPKnmb4gaSLuuqpJYVmPrcmG9jn9WgZQ28Zo4CM4uy",
  "key29": "2L2czSPRw3Dc3yavm7tFgjJvuyeFBHd8tCikAY6SNsjjEPSfp2Pw1QEPeZs7n2rxXaJKFenC1dxcXkRrvxZ5NBAR",
  "key30": "5bHptmxDYoc5dN27ETzN2Q1jrzWKsFhNkghu7kzZnRXAoLuTauNaWbxMfGAhNzEiNu6UxpZxyj9x8V3PEpfwz4Yx",
  "key31": "3u2DV8yuccvTFAdTRC2oTrZBVUTizeDZsGv6pfGhuKiwpiME2sUeSV4kRPGeMeAZnFd3PDxSrYdS3Qk8H6KDYPRz",
  "key32": "43URCTU7Jsqi6bm9QHqMnXnXyDd7GogRGK6NjpwUdDqgpE6zFtFwwmipkZFSjpX2rJhb7sGNST3gMLyN5UKJJ1d8",
  "key33": "67bepwMEwmc2Hu25ZutejbtgtXy2ncTSFe2yS134nbiEN2kR29ihESUh6RCnuPPJ1QCH1wgt25c4vrsbdLikjXzz",
  "key34": "58Ba1iRxnw5izYmHejw45oe4NB3rqsT3EWmn6rg8Ho9eFXRoRG9VCUUVFaNwuZpJ7HkBKw5hnwx9GVz59dtTBWNd",
  "key35": "2XUKXjFLgRasgagmFP63cWoWA8UNGc5HH2BQnAkNzEYvL1US6heqRSRfgxTEyCuZoEA5YJwfGf5WnHgcCjQHNc7G",
  "key36": "3BEL7RRRQPZBm2KE1ShEncqtDhZEhDADespSK5P7jrxU986E6a3MzsLRtp3pVJDnn13xurGcUEg3TrNYSwCJtfzb",
  "key37": "2pMprAQCvJLvbLACafmdSw4bPxZSBEz2xmHJKjFR2HrWt26DSfNH8EryMFQr9cNZoWRRfQFdUcLZgLKQD8WLqCiC",
  "key38": "4nHwyatzZYhCHKghuHUPbVLXCnmatNWecR9VhCBmZsVJy7jRjc2RuJzqH93X6kff3YTMm3BFJ6Gko8HtVJUdfFV6",
  "key39": "66ozbPDUhEoRHEn9UEL88yvLEgUvWQRZ8Vds1Hpnfh4wxHEhHSwcMLSwXSWDGmbC2LptJePowuMAtUrAL2ZxAALn",
  "key40": "3JtWmLUSGK9zSVkHRYRs7HVRhfYDy5san3zevQ9oFCcgmtC5RJcySyL12EdGijGAtkJu3PGFxf5Dp43FJrkvzyPc",
  "key41": "3nDeDjyaFgJaeWA35f8U1BwDpgXVGgDeEqrdY4SPmsWax2Vg78ozmHCAcBb5oRSuYX7o2qGALgizHNCHk1vzNksw",
  "key42": "MTGu3PjEyt2mJWWYhtD4Gs6U1STEPU1sMqRiVMZMafUFoXLhMY6oPMASbX4HC29qbmKWe5TGYFhzERXzfsz4YVW",
  "key43": "2RVccPSL27gJCu4DoeaGpMTqfhLEoNRpbHkhtwwtujcEwnmU1kYYKsDkBdQPeteyC1Csd9KxfaJjsyj1kKri9mhM",
  "key44": "3Ntyty6qM72H2TgBfDM8wDpDUCPpD4hUoNfRt7TFz7bzjqHUT5iqt34dAwa8gNq9dXnrFxSPZzGDLv6d6FTRJKSP",
  "key45": "ocyvaGiYXyofCc1QR8oJa5ity7ybq1bvLV1tmAdUDoQz92J42oZeG4o5Ycz3d8JFj2CVBVpZDAHGxRbj79ynUSf",
  "key46": "3dVSwFYQubxEbEo1tHCKhMuMTvqoZLqT5Rmo5GvXwd2kxwabfjLNqH8pEe8DWxAJHQunnmydWzhfxqQXFiJjQ7Si",
  "key47": "3S9R6uGiNQUSjREdPseVBT9RjhWkWChbWgCDK57xUewLBmH5HVHhAQ3nSYZdzRUDeVAMcCQ3mT5xM3m2jABNPBTe",
  "key48": "N5XpGNaTSTsamTByZdRm9UVq7oP39LWLGz9izycmDQSBT4CeKoHAwdAx15rWoVGg9XMggjLQNvtMXktNkMP1DWu"
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
