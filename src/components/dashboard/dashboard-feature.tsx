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
    "32uueSXJbd8WCSU1wBM7tQo2NZFUFp2VBmPN7kdEYcxQJBfbTjRYLeDKegAZuvou1cShXDn3to5edN1ksj58RL72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JSanRuMExuPX2g2TEiBvVe7veRRb4R4Ra99Mkke2dwfZt1zkc3LSxcejzBB8TqjWvXwsuTqY2cQntXtaD9fqdR5",
  "key1": "27d57wwobkGfSALBhdvUkKRFf4WBXvXDxwK9Qu9ZQjAP4rNtYQLUFcEPRkqCYhPX4BtHR9iv9NVMjtEmDtAusuYX",
  "key2": "3pPmtSDBRxhxJdhS4mm9wSeeGQUV5y44QKNoaJphhBR7yWEcMEKNzvx4yKxdA4uWnYBmeePy75TAnsAz3TnjReve",
  "key3": "3FQBCuQLWLA6qByQxKfPAQPpFQP6JRtXkdqaNp6etdo5Tc6XLsWMrjhubRSPtYbfiFZawtpzHFCku9mDA7DBkQuy",
  "key4": "2xgJAB1mhWBx1YrmKtqm9wkyNTG5HCmNCdj2HGyQbxc9rRixQben1WGD99fCni1ty5BmuGDAHZAN3v1jPtCnD6Pg",
  "key5": "2a9PVLn8BSXVmmRXvj9h5cNGh69Jscwnh98R667uy9k1FSS1XYvco4MebCvtpWgk2udLphj3R5sx7Y45x7gGMnbx",
  "key6": "2c13yTiG4C26RJWzN8jc51i2Pcp7G4kSfTEH6cXvZzEEfb4yrQPu7SjyGahnbJpEXNNW7rsjhrd5YpNW8tdSrZ2F",
  "key7": "5AQr5wQ4qhqWY5PPuBk2LfwXZuwVkRzWzVb1nE9HLXsM5pREfvao9uKTk8te6izwSUgwUPy6e2D5fawefdYp6MNh",
  "key8": "3VK7Hu71JjLioR9bYkBgCR2FBexVvSM3kaj3qntxsToZeqWPyEw7vVnpRe16mrq8qHiraXbegBw2CHcZWD5xYDue",
  "key9": "44FQ3v8fgcUqy9Y3hy8H5ERGuhfEpoH1jp4vmibi53CaBnMicuB54qW84kR9Qi8zgMJswhgYX8LhymZgNAZxGyZy",
  "key10": "595EXG2TX7haXFj6TvoTNLSFnEj9Ud6HvD4MM6vcLZgc1Bnd4zviaUC6RqvJ5TcQ84BVbuA4SXza9LS6ccZ5xvja",
  "key11": "3WRWUy5YERfmJQD437pLvFYVCq6NzHih5ywE9DBbWdxvUbEvEEtYJMovYpHQZrMtdtyonHwFwk8AQZqE2ZLuhf6N",
  "key12": "4ciFmLbRWjewTSkrc4EMGESYiuqPB6ikkBhpeuu97VkLANrLsx62YugKFbGmbVWTAjnj3EgUDYMaT7T2UnmT6gfz",
  "key13": "2demkoXZCXHGDo3X5GJXY6w9R92NvbQCgAwfQFsVyZvDEZDBC476bTiSjSUXYBEMe8wD87R4pNQsPiEPooAqoAYd",
  "key14": "Q2osPTACrNEJ8YvDmgRFQkwcBKU9ztQACvnuookpi2hGFNVFgAbVzfLBgT59n29eaPnKQAQwTMQ7N4cgbejRa6P",
  "key15": "2y5hif4RSc7FUGshhmVTVSCrr431K74KSgAk2aqFnGgyBhCTmywZ8r7uKeNBWf2Q65o1R3J2xBPdXNbNWKZ7FbyL",
  "key16": "641CqBwRiExUSwYaA3FcBYPLn1AMLsw6mykEzyLsNGsW439tNrW73kUBXXJb1dyk2AUxj1gqVQt9MTc7QKA9UkCU",
  "key17": "5meERgoLTEN3mHj3ejJ3UGvxhmiH82mJBS7VwAKqfSdfqzH64hhNJMbcsAVQA1DuWKW5cShKnaEbBpASyXHiW9Ah",
  "key18": "3fLAVbuGDh7Dq2aJJA9xFYcjxXGhv6Y6jEQEhto4bCnWC8RsjW6zNoYsMNCV4T9RBuaL7B9RL2aaxhmhHUG7dyAB",
  "key19": "2FL7NmJJVAvANvTST3GvhaNHyEhDqTpJK3HewTnfUPWxCZTbJTJVvhKWP2mx58BU1zPaJEC7brgWjzi4UqtNs68r",
  "key20": "4vgz3FxHUTZ4B6c4tgZEBpvzpB3g61oLM8QX9D5VCNKTduq2mBPjaaYpHLNLfVBDXi4T5HdTc524HiCNXdfnD9cv",
  "key21": "LmNGMPCmWmFAnu8YdXugyhkHHPC5rTWdWgg7gMWRNDd9ZEwFcCu5ohadPiCYNQNt9rxVcamDKjiTroMf8Xubn1N",
  "key22": "4awH7ZiDX5ibGU2iKYE6g2QdrmqqcyyPmHG3Tye1ye9wQT9bedMn4kfs52rKNHFWCMzoVXzJbPiQLgiCRbSvt6tw",
  "key23": "3zz2wDyaCBcx6iTSHEQyKaZRhXKwbHFY4Xhj5PsjX5eHDagijXS8qjVszR7jeHbM4dk1chWgFsWtHF4yZyVcvrdN",
  "key24": "2c4sx66EGQ1pDp6RA92HyR5e2xUmTpzEqgBHQwwwRNpxJqJ3Ms9CDAFpdTxcPGro9Y2UexANASJjRXbvwHPjbzA1",
  "key25": "r8uWjX4gGnu59kvVoC7FydEB6AZwWP3jsPRj5u3wMyvbKL1HUWbmhGxdkbdYUmcFH8c4yJGHqdHtFdXs3eKBTYr",
  "key26": "2jvbT4fTwt8LBQb9D1t2mYqvJoXY28jZFQMQfaYW1ozxsRxwPQ7GzMmtWzjQHRxvf3FRNK4xFy6jHP7FWgTtz96V",
  "key27": "3d5BPpPPMMsKcoFW1qA26g3URShCdLntQrgHSoFnLaSnXdvHyJ1MjdP8tA8DpfRH5qrivYfh6bSefKu7NXZ5fjoP",
  "key28": "WEtU3ExhSNViPfZjPTJJx1VNVhg39L6dszFWegrMUm1ized29s9b8KuLFyS6gZsK5ySJWuHtnEtiCffEmccE5Rw",
  "key29": "4eDgN77rYJQAuNXKuXWfhmXFE2rLY3W6G29zLxhqcZYsepATCJKjytKftfzPW1yZW2N857VT58coNhJQK2tC98CG",
  "key30": "2noEW7NdwM8umwRZDosvp4PjVaTTc9NHeFy8QWHrfzbndw2Rg2gQxDo2wvFDhTN4qzRRTmau7v1hvUYtVK5ST4RE",
  "key31": "4jnJGn3LqkkB2HPG9ow4oKKLowKjCM7iCcts2bjA1mHTTbXYJgNgA5dprgTFp7iUvPsxcMu8KaTYANgr4qpibwRg",
  "key32": "tstxSWgYGqPtG7etRVTA17nzLLPoE5fPHV7gGKCTBvLpkQLWixi4qMf5XSGVqA1kFKH33WPcfcLgMoLbmXCbvf9",
  "key33": "3TQAuYcZpBRjuQztV37B4TApB3EpzriRDTD8FTXwE2DEettDZW4RpWBB2aF5i9EUPVwFwmLmdYKBoLYnaBGnkbme",
  "key34": "3XTNSxkVLk6bn7tJAQdpdjb9fSZ96SMr53vAnh36ZBEC7TKtLn6iEnss9DSAd7VPjwjEr9LyjBKk71DCx8HmVAc3",
  "key35": "3fiewwDF7rMGoF69N7T9nfFynnWuBTYzKjF1Zq8bKLwvpgkmF9NXoLAJ7DbJSEiorkbECsKHVDcRgJMTKwpUoFJw",
  "key36": "9wgRiBaGvQaBB9aXNSu49bUuzRVvwbCGk7tXvFN8Dbe6CkcEXBP4TbpxNgQRakb96MZLWwk8CDcYHf2aCdBaP26",
  "key37": "387i31zCZJpz93QgHDP6Z6v1YFLUwWXEgV8hT4DTFAkGiiCXsNz4ccQXZPYQs7CE5E1KiZEtodNWQiHz5D7vt2en",
  "key38": "2RrwFY45yi7ubeYcjCJseXfmYF9YnxMLttsALnuhafwZAJWpd3x4QPsaiJqs2gRQ1ciBbbbfE7mTymRYr9szgTAM",
  "key39": "5oC4DZoWkMoLebo7QDL7oh7nULQde3SaZ4MknH1RZgMrNPM3UM1L6DwxdkRdDqkBjpRUW3Lt6iyrazadzhT5Cbus",
  "key40": "JRukdeCDPTKFgjL6ZNHYZnxYv6SHc2AxRutKwb5eEBsfY3GFViLBYzeAqGXWdLJm5VY7mvC7a24Ft8YwzW55Ked",
  "key41": "kGTPiEhBKZ9KW8tphzbjgXGXrXfpF5HTFmFHjJikoWZBTY1qp7R6VpgtgrxJJbw6Xf6LWdRrEDKC5JAmcvgNCMK",
  "key42": "4XuBv4Az7aKiK3v4PGhWgU5vq5Vp2EreqFAHCpJ6qsXyrsKQp8HfCgmnJJxDei9zMUp94rPkLittmfvqVcRBvgs5",
  "key43": "5DcwgyJqsV63e9yJaSwQUVFLWdsQjgCcD2WiZWZHiDs828u83uvpD8jeHmN8zoAePhJDeEkPXFfE46ExbX1qUDrg",
  "key44": "bjjwdTetCTtHqu7rFLTzePeqPJiugbfjga7w6GqkYS8nDS1p4mzPfMNZaLXd7ab9zSvLCyZFqZga5GTUs31kjmu",
  "key45": "3jxJnx4Ygk9ZgSWVxZ2woDYUDcVSb2ieGAPWJ1boTzizM5DzR4BQukUzdkg7uoTRGdfGZrFRYJSbK73nZsoRoCCk",
  "key46": "3wRbSRQ5TJKBx19vnb9r9PqX2AKWubx2FbdPFeN8uMmub28sGxpYwayWAHQe1TSuHMmWsc1oqQSx8sQweJ66WJHb",
  "key47": "5AqaXWVa8f4uHu2eaw6ofEkPgNnqRjYeDViNg1YFv7ZHeckQtk6n54VyAH91NisNkqWUkMf8FmhcL43RGe7c3To1"
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
