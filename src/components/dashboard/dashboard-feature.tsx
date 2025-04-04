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
    "4n1waVDDhSMtMTb5ozWgP4QDadToCiF7Y9GG3zN65Hzjx4S6L993TSFDJSUFEduZBna5q7xjavAwnbeFYexBRPp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ew6tsB4JLnJ3xn8gkrvqZRLobv4rro1EedNFNkTLJrk1MgNVyP4jvmUKd6CVoSijVWeZSAC3UFAZAHF92z7f9d5",
  "key1": "V2q59HfVG1KAh1EBxyC6ob5QH4gpTDkTAYSSLGdmnFhev6WqnmB881L2fCNWAUfwwbdFwzTQCYcjStSk9yKcKqm",
  "key2": "4oz6YJxo7YtCxLJW1Q4Vdk2sdUYmktz4qriz9Wc12ftEo5Gq1X7oXESqaedAQV3YykmBedNs2Rd9hZf4zj8FTxbH",
  "key3": "SU1ZmuVmVhE52sZUc6xf16bv6bQGxRH8r5wDDkRjmiHxdEic2YJ64rTktmXnqs27e1nSzCo2XjeJTfWkWwHEF8V",
  "key4": "5wqtXWmLSocH6mi6CbGDsQ8BccSGuksmWaizzSy3cSdmbmqkUdLrBenq9vDh9wpS65aK6adELQSG6G4TYd3y7TcU",
  "key5": "2piTr4L4ei39ebLnCtnh8tjsZwWDzs4xeDSBbjwtsrDqFCknqW99238tqJh2GN5PJYApWFaEYqAyxvSd11VYzmCZ",
  "key6": "8xQwiE4G8Liki5mR1pbEVrC9DqcZsVqyw5JXdJXcKQng3XjL8jefU5A4dPjEFkvs7ZR43KbVvB5n6mrs5e9HVbE",
  "key7": "V75JQLb7dxBiDFLt5QoatxMzyNfcRuM6RaMca5KhUHgQYbmG7tCR9J7MPdRerfwFq8hYDpqYuZz2Z76itMKEjog",
  "key8": "3UuXcJtdQXdvewS6e974Z1R4C2QGtvRm4Y9ec7voZ1WVxYu5yLKYqz4EhDRFVcJPm9tYsoRgiKAR5e9ugdSzSCAp",
  "key9": "2JaUxiXphQeEkw4hGdVgFTcze98XowuuEtov1hfVHm7wfKgLSLAJysWAkz73hTmezz4NY4m56JDtrRKQBuT5rUCf",
  "key10": "4PtRNDzEfdthRKmFt1bEYidV6h775jhTumPQuaVt2ujmdmstR7eMPC9QqKZQTKxmySqFmNjxNpfTCan9nFfURMZK",
  "key11": "5SvRe7FeQbv7Z2wRTVAuRU3WosWR6c7PqGb7f8ZV368eVFvtACTouu1Jd8wbj5QdjXbHczTq5wgcAJiy1K47ePZ",
  "key12": "3YDjTT5MTAdHPKVFrKnrmjyErjNoGeZwFJKayGideVCWrW7jrS2CfSrtQyMu7XBZtnffhhUnmaGvDCTPdnifUrBU",
  "key13": "Fmv4vvQHytnrXEwpAr9VGT2zKgA28BaiwC697aSBjdLnRBmQRtutv7zcy4Hc3AycLjwS1KMnm76a22dh3aHtzos",
  "key14": "3fQwUex97o5ejLgkzVbHzppAdJSRL3ni2HK4f2SFrammV5oKdD8887kApGvbguy92yYRgjnKW7edxu7Q23BfXtwP",
  "key15": "52Q3mdaYqompy1Zyud2vd1kUBWAuNK1drfmDbhz6eHmdvFuPLxXv3Rn5V15uz1sB5QXo9vzs7ikcC3sFPn2Pim59",
  "key16": "2FY7CbJmpojzDyjQM2sxWVbCN2LMusWY1MFNqMpRErWxgjfTZZeYAyJPmSZ8xJH3sDULPaDiS9sEhJY3j57AbNvv",
  "key17": "2V2H4pfmgCKztkeNhffFWUF6Qe8TCAyxjRzvsYSrcMH1cTY6UFMXHDVLM3aLGeE1rUQyzYzTPmyA7jbLGjR16uMe",
  "key18": "mSjRp8K7W2cFDn9ZHzvkNrNPaZWTMbPcaaUwGcH4XA8AanC4cyid8bfJw8Te6zfWareZpQYx7YzRNb1JKeHoY5g",
  "key19": "2ufp3ry52YTAowVrDw1AhSgmguuFY7EaJsKKsUTxFMuTN5T6yo9Jj5ZuC4Fx3RvEuJNdsRWagjBomh8TfQyzc45t",
  "key20": "VjTv9HseuFSKWvkN1Zq5X7bBfvF6NJqMszQcwUHXENi3KJTMm1bRRWUVipo1PkKshm87vCSANs7pr2e7V5rqRL9",
  "key21": "N2fYae8LD8pCS89Aj8XnyUuFzoZ3hUS6ZcFbP6xRFBxatVQxYB865WvpWAkoBG3b7mm7zimBniRUWVy7ZUdnRR4",
  "key22": "3kB6dSUs9Yxv5jq9xw8BqCiCTZJmzUhFfTBux4q2LkiwxxvqqY79fZMGvs3JDqcALzBJmprmxdDfv9btY8oAeB8k",
  "key23": "2rWrXDHvk3yiemfVktma6vpXvYUusnGvUqD7ua9ABBycPYTZ9sq2Vyb9oBZzyRqXgEkxjtMzEEt1SfBhgwVM8bTf",
  "key24": "3D4T1MYXoF3q41RDnsxA4nA1tGrHP2ygitpkfz1MrV1a9DURLLhyrg4sjfxXme27MDXsx7nQJkJzTFQpBPpKoGSe",
  "key25": "LjBbPuntvFDgGhE7FhJR2GbL1jarqZnnPww3iyQ8EE78QMUutCA3xz2KgGB9kufmk7J7SjBFmoMCdfRAxicxzqK",
  "key26": "2gexnpiKCAE5c9tanLnkcsLS8pfvrzZJgU8wudaspXB5FMgbckp9sqe6TA4o9koqDdZZEjiz91bVHX5wZY8V7hVg",
  "key27": "5wMoCpCGE8e2MPFJg92rR4bMSHKPvUYTZpnz4QfBeu58qZnReRHwh8thqdXDmK1kwMGikDkkZ5qyS5hSzjjQ3fMZ",
  "key28": "56EHVnT2UffXpCMzmYsnGweaMFMgb3Qgej948r3VCHUWBoys6C8M8gidDAvn52Cq6Bm2EUQvfnpWFCCMFz2wi7Ba",
  "key29": "JA6jdi8Dxwbu3TiHRsX2SForJKu8rGfpKtAaUWYzAuVmJvSchDrCq17GfoV9k1pHsNqnYpWjfKQbJBKYRnnnxs1",
  "key30": "5vauSdiLa85SNG7qZryuoL7EoAMV8qLF4dT8LhdffcwgE6tcNLW3Awme19B5DaYGf3RnDYzntJJtyAhH3ZwfRGL7",
  "key31": "2SToWr9GZZP4xor6kxuyKqDEznmuvfxHHxpB3vdGNdyardsPLy3G3a7WUzcerYE9YeYAbFkFgrQxsKcfp9NGKN1L",
  "key32": "5WTnPm8iPTs1UHJPYvCtZmPucLPGtSYAwu2s5kbmtpob2Jhoxqwqorr8jgmaLHs6XFU6o1E2nGqMT77LYMqaWT74",
  "key33": "2JSRpMyea9HveVHVQCVwQRh3BE99ce3DLViMV6fvyDwnzE28Fos6bEHrzcn5SEmBzf8xw8DKBc2offPtBBaRH6Gu",
  "key34": "5un5m9SvQMAjHDLRr25VL4ntcYeoSGg9Ps6uAfENU8UcEYcQnxhhnMouQzAPtKHA5f2pZ74G3MwzJ9669crhTT2q",
  "key35": "sqteThwdCMYmLyNEPPoHgJGZWZoTp4dfr7iQQnLt9YdqhxNQghncXSCK2hnTW2VZ3is1ZUPYwP3bgREQAv5BnqA",
  "key36": "5G7mrw3eXqcEc1J6Q7qc4sNmHpNoNSyQnUP3repXYtdXvqBYRT16PJeWuN1S9LM2wJViT7M5PH4eWRqe2huaWM9X"
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
