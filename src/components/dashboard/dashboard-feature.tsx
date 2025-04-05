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
    "25dKLAWJwtAYeiqQH3jcVJ7ejBXoYzeT6pchFf7YWxJzMmhL856atc48YVaXZZbB3dy33HwSFVWNFn9AAHywxrWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W85a3WK4Hmvsc69pNCtuzvEfQBZMa1bgrCUTA59AZKgJy9uNgsELmNTHHw179Xi16CrE2B664WGx3y3TwG16iNQ",
  "key1": "39p4a5PLU97bo6MXpQkwSV5e7W76ZU8pjH9mHmxdPAFpqZ25U3NPyzwJG78yaKWYW7TpZ2spbfmFRjDkwA8SFSWY",
  "key2": "5bPibijDuXdWtNGiVWZUCDqtffqZtASPacXpTk7QRb1kDQe6DvsUkez11oQDi1vtuTuYBVVYqq3kExWBBLtybnZi",
  "key3": "3XMdmM5kunAUU2xtKYNUZeJQmYtMYVM4iQbKPEKwP9PATkFFWNzteKFnGwZL2tKsoXsueYRG6ics4ggYrCZgRGN8",
  "key4": "5CETXfFp9QrLGrHSaKBedpnkrZKw6X3SCso4JqgdMDUq6Vk9aMghcvPHZqEgcV8pCdbmoBtChiskfRAoSFPHfA6k",
  "key5": "3tv6LBKYqPcYdasJs6XdVxnqAmd3Nk9Q1fB8mNnzDuW8cAXp13ogxvHmSiJJbCkfW96SW9s9f8o6eRxnTY9yPExg",
  "key6": "5Urrc7GX3nF4otZkaacedebMNfL6XviqHfQyfL3G7iotowu33oUcUbNcRMkvBa8fFT4heqQhxNHdWhajuy52oV3U",
  "key7": "2fvtiPoWowgcNVJ3gRGZZaWFkrB3AdYKaJk9Vq8Sihfv24RbCWJmXq6AuR7CjJ4cKvXKRnYWfU4UeVH3jUKsqeEj",
  "key8": "5JLRF9ibJCwymUUGyxiA7mUXzsambuh64M5n48Jesu7bnF6k5zA9JYCcCn36DWmmV9HJVgeBTFYMN82NbBLKL1hh",
  "key9": "2fJcRAippWM46ARCkEvW4DrmfxURBDzsPzixoDPgKJaVdyFw5DxD2UrCoGehNgPAbnC1PGsB1qSFVK9fvW3sAJRH",
  "key10": "5rjdic2QTBPMQbWCD9AfmgxECR7iJ7cwaQL5a7nCkVU8Z61mhzc8ZsZjpqYfn5QTrVLLzjvGyS3n8LDCnd1oget9",
  "key11": "uAzvbHxSFrvYhhAaBarQUyJZXFXpVKwFfSKjzWSf697himkozQeHhBk56TWdnAV8Pow2xAaQicstgZhoQ7d4jhW",
  "key12": "36BGTdcXQ1ksbSbmAg2hCQsaQC5sginYmeS5hYzMYfHL95475LPr93EXsaK17VcQzvNw9YGYNmiDUKr2F2JNFxKg",
  "key13": "4B4Vz6PeUXVQYfnUJdn7WrwyQT1ECxi5dcE5P9nHZSKVj8oFmoiB9ngwcmJikQJHCZmo7EG7sC696uQbzgc3bm6K",
  "key14": "3Fyv2rvJGRCsUWuL7NiFycu8H6mqk5VeioayQfZeGSDEPPTyetnFBwS1yC1Km2NtkeNipvwf3wcqHU4Nr9jTZMd",
  "key15": "23d4AvsZrQZ7t4sA3fw2pVLhg3969xJpMxdLWthBMEJBRF6tg4QunLZehAfjzknzfqsKQPZSufiEyrt7RH5v8AEz",
  "key16": "5UH8TByCJg3NemZXCdmUNCRNYGroMXha7opYsHZZVwEtzcnEbtyLARMcAMLQNhyLUWJpudJegbiK3p7fYwt4nLDb",
  "key17": "5hce2FWah3muW4eVNSzybFd1nhoZTKaprSLWTcqAT5wQEDTnzbMY63eZSrbi9PfycAkLt888NQudQTunEy9DSa1e",
  "key18": "Jfp8YqVuw6234fNFkX5M1zAwxXxZruu3FGT8UkwWcvTfEww2Ub77YfdnUdaJ2CiS1tgc3g2qgUa5BvBb9AMm24x",
  "key19": "5tVW7W3UmtycmxXcf1NnDRMPMFoNjFoZYqDxv2rYW1VrHoLFzxmnngWBaUtoA3kToDNTxriAuvdAFdtKnUsdMZuc",
  "key20": "4ZAxQMHUNwLRo6wd2xoGStgnYU9MGtnXWGHUGd8W7D226hwz9GTfr4tHNG2EWc8Dkxy6HC2HL2jLWuEvGeGsP6pT",
  "key21": "5hhusvM7ZfDCE3EkZHucdiWgD12t8U4R542Z2GRtaHsCUwsjJYGZSsE7DTExGWsHcGjvTYUDZadLfA9K17UQsxLL",
  "key22": "4EFor3XuXoxFPX32Lh2LNeXzqv8j3y8DGKcpkf45bbia2XELc9GTKB4ESvz1tbe25wk4Ja39SMMEDNdZ5ep577b5",
  "key23": "bHkKjXHN79hYQws1T94DuBaS5ivXBaEMuK4a63nEWCm5QS1dyNn9WA7S5776HtFSVcQSL1HHfnnrNtyhcB173K8",
  "key24": "4Q82aw6Z2uiZeEJ4j4B3qT9qfjaTj3JyNLjFiCjXSzMeFytZhYVXY6cbztcovQdXnGUuWWc1iU3UzueMgUwW13DW",
  "key25": "birvfz5j88Lt2rBRJLqifEpehjzgEWsakV495pbrRvwesB2N2ghzvUuQVKWmftdAhH3We329aCCN8gaNgTdWEig",
  "key26": "2cNXBvEPqJbEaFzJg9PCNq35hLqeeLRQStQBpWK6jMq5k4grEBGB2y1SCqPpTWafr31SGws83MHUfV11kZaFJR8J",
  "key27": "5DYNirjqG9UuRP1SG3CFyzc5qdixuPwB9JBWiqpRpdn9Q5yiQfVhNJMBdBTiBBX4GoVK27odC32A6tGhSxKsB75k"
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
