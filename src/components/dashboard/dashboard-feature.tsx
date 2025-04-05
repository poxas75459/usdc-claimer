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
    "2wCD9wt1mscVALQyDApctkNCxAEMu8mvwVTxEQ1XfTVtfhUnxQKRhcriXpg4LXB4RyUdgaqKpcDbRqWa4A2rsAca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23CESUdRXxmpddNVCuaTsgmz2MamBuZJQYouyr8TpBoSgaXA11Tpw3tKFYYApXcBE6nhFp5xKWfYD1Fw2ufpqNHQ",
  "key1": "hhxXuU1e1zAWraJKP38WXVbqkSxSjWJD1BBcS71MUCyJSwpv8aKinieidya4dQ6YPssELu1jYf7gMgmQAZeWn1V",
  "key2": "2H6jxg6qffK8yCKdcAq2qSZMJUFv9e3ojoRNrj1bz6rbMGfsz2LukBSh7JdiHy94FoBWGgnA6hzSHBNbPnxdcw2q",
  "key3": "3uDK9E8ZJ8iJtzXVjasycVgV62wJYZw6P3WbQCgue5Gz74nnu1LANmvaCaskFc3dBH4RxrQRRD4LSehiSGrhB3hc",
  "key4": "4g4v18Vho2qpecmBjmQPDsBsFzaaEYJSbZmbE3y21mZeauNPuX17tXM7jZtdRZ5A9QJ5yh3vcVZTK3Syhwb3aPyz",
  "key5": "LX1q1WXofyLoBUGQFqeN4bAvq9h7NLP3DNh2FmUYARDwxMGJpxe2dYhCZivTh3RgK9RaJNvFAoJDRZHy4aikYnK",
  "key6": "QWyDbHhshUaX8REym2UwGqHWdUvE5Y7EpRaFpfdA7WwjTsVqij1JtQim1uKhConU55Psut14DS66StPeS5CeFQK",
  "key7": "49gRdMvoc15ERGWszwQa14AbfWHDZULSow5BAzPYioKFAnRW4LiGDXjHje5MqN5s2PmbJFX8dem5uX4bFs4Lob9V",
  "key8": "2b3PuGx15Dpib9jsfLWwMqUTHSP2pMUipQT5vZLsk2zokqPNFXjrZXZ19HtL6JwLoax3R7YEGbfsLww8RBadyVb",
  "key9": "5NSHUrAqDhkcHb4Svdx8d41eFr4jiqbrHQ7VjKETGUUqQBCsbYiJmkHiV8o5KFtK4JYDonxq3u9Y4RKQvcgNorTf",
  "key10": "32HjW4vRdnBcUgFx9XqiHdseEGx6E86JZrvAcp6VLioQ5GDEyxjffhZnSrP6T2kh6M2wJsEYF38otJdLZFWZ3Smu",
  "key11": "Ytuf4tbjayUkUCV15i5F7aidLZGZByNxPRjvNUarskbDkVRvWLH5th8kyX2WC6hCTYRxPVAhWrbuvWTCvYf225H",
  "key12": "59tjCKc2gfnkeecHxaYgtbcskTDX5KcEtZTDtUpwhd5nLskd2FogNAHcgkNDniPQAoHLYDENVEj8qGd2NWYHq48H",
  "key13": "31NR23X69ZhHHT7dCmJXdBvkAVWjch4DxBMBMGExzrvG9sh51EYo5xGcmpXJXzXQE8fqVFjyEdPgmo7JG7erPk6B",
  "key14": "4gQzWag9XF6kQqMgE7G2ziLSpjGyivYedTMWyqHWproy7ttb4teNkJdx7NAKu6u5jqBUoiANacvx7HJ7M3H5GXZV",
  "key15": "3L4hSZQni1xTBQJC3ES32duDUKhzjAbHg126fYSjdV4nDmUHDw4Vjm3tKJRniVrhwkrVFYm3rtbaBcJMRSGpZDwW",
  "key16": "4mTu61VDrUFag2tJKyfkemtk3jpcYfASpV8U9eUs2R6iWPouMBPutLY9z11ARJFCFEegUeprFgtGAweHDBEPJuTP",
  "key17": "naaWjLxjgb6Ga4YXhsMG14o5zH9k8QL9XuNjkQEs4xW6nXoX3SUHLCBQckQDFEKKwyfv5NE9JweoT8je4nnN8PM",
  "key18": "nD3SoDWZWZh9FvqK7gWFsn9tYRcGNcRcXHBSht15Y5dFfjW7LfS9myZWXi3SWagtitE91Cn9ZXpawE6M8gfGH7J",
  "key19": "GDCv83cMSyRJiC46BWwfjB2e7MsWUBTJR1HBvvVLG9gQHNWMKw42xJuXzq1p2bQKHZpwmgsj11Dfcn2tbKXmdu7",
  "key20": "211cXRa8MhJkTjHZxeqafZZmqju2jGhAdvRA35vHnomKniXrdPHCs285Enn88tdcwKW1HpekZRnzgc1dYuK9s2jq",
  "key21": "2SNfjBZmAZugfsBhZFpHMZW1AUNn68EfXmNycK65TF2Y6TW2x1snoV4L6vejFWCM2kuXvZivCVkoSkZbQSuoTUCy",
  "key22": "3wFK2XkbNLg4iYeFwRGb8c6YpD7qTNqsZ9euNdoNjptw2yVPeD1mdrDYWZU4BVEpFqKK2rmX3StBZ2KTqwnV9Wmv",
  "key23": "3TogejbhMgmf3aCTz9xPsbRwPbpCYHZYAer8AxnE2zPJL1qXsNzsmFEqM9BXj6PBgqspBgC8UVLQZwfAsJQr4faJ",
  "key24": "eXgLza2c4fKBVh977o16MCk8wkbeAjZeVtNCEzEs2GSEgRW3Ak9pFK8kXrgT2zVLU3v8vsWgjgQ5hWBVGj32XB1",
  "key25": "3okkEU7s7xzEY7KSD28ra1TgLXSAGfkYt5parGijeExbMGuXzBaQKKDqQSGNyFhVNNuvWmto1qXQkHyL9ocLpCKD",
  "key26": "3RBVvx3uJKiFvbr4NdFgWmQoCfa9X4GeZ8v3sQDr5NvWRHqbzjWZsV7DsYGLYP2ub36bbq8A7LStxpicJvtDQcVJ",
  "key27": "B5HbGjuxvk7SLMnbCMG7V5ovvEHJ7ALufSp1N7mYkwUuUfA7B2KJZ6aM5p5bpZ4RPiyGUiZMttsWdGTdGtJefer",
  "key28": "VsqMkNbJSJVorJhLoxrh3fqPvEL591cPnG1JQ5XvNVhvdYA3XQnkB1N6ibDamayR33Ngrj1RLnsRU9okwYpweZ8",
  "key29": "DhPj5C7MstWzBGJbBpakaLwfC97i9x7DL7DpHQkgEgJ1vawTDpjyzkmgymTm1WvXtZncYf8vp5U61UMrC5GMq8k",
  "key30": "5CZajXo6fAVdDSDUfPbQB3pmmdGNwHXhgdwQQPKMcbvUdyapjqu8v4W18JMmCZY6TLeMLMK2Z5Gs8YFxs73rG27R",
  "key31": "r4zgVK5kdoVBx6td9WVtr121bJCRgUzMu4tHYDQjrPFws5y5FkjqmZbqoT17CsCKsJwAJbXx2eEB7sSQnQAZRbN",
  "key32": "3BpNnJ3cPo4eu25QxJjhBtiMJ4vRxX2eYdEe2yCBBKQ4UFcWHRpTaBbD1PUV3PARuG2j2SqnJobpUsnWESfrqGTN",
  "key33": "2ci8mEtVDZ11rtrbj7WcwkCde2Ki6aS5jR2C4xk4K2URMjotvaygqVKChHqV1beP9ZzBadhj3b8ZRFNfHjm4nQAZ",
  "key34": "4cXbLh6p3pBGMobTHQNhzFXH1YAH5CrQs8eRb6cAutytgbpY5LiVfyETx7xFjHscfMyebrS9w1hL8tYJigGWub7C",
  "key35": "4QhCBEZxexYVxrPU4PFvtP4rKXeptY2s7zSa85Fk69dkPAebxDngLtojzmHu9p39Bzcmum49rprEBRqD76NvavY8"
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
