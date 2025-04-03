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
    "kw73hTHfDSak97z9JnDqe79cHuUNheaGDCJCgnxJgPd3cX8RY1FBTbDGBomfPYXYQrxFFwyFDmtmhpbRKbHnZnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DvGuyS8EoQ842H153NcPTSJAX11W3TVT8vWyXsPZ3Rm8HYEJHo5VKkuSDBGEYRVdnSqNpk3eS7vCWfiUphemFPx",
  "key1": "4RsSWbVbiKLUX1nXVoa97mN97YCg2cy6zPSt1MHPfmaADoJQLuCrn6JgrrJkZRE2oan2iLNgBoJYoRcXAyi6qDGo",
  "key2": "23XpU1pcz9fT9rxuSGX28ic2yVtna6cSpvPNzdq2e8fY786kzo1uye9LXjoii8fPR4nDTDSrpi7hYapktYteiYnK",
  "key3": "3HfZt4PWrKU4eV5pUTsdVcw7L9zPoRtaaRq4JFiWtP7ofmNw1CWTQNeVrHuxY1HMXUCof2Eq6yzMoM2qaY6tG2JG",
  "key4": "2pT3RJxQgNQsVBAz3UM8NCyx9DHUQcKWFniTfjbGYt1sNn5CtWoebTUVJsGKnjf3wLzw7k56GxrDsqygvRcWc3EA",
  "key5": "56qNrmLdgCH6vH22rSSvh21CawYTqYQxQv9zUAp69D34V7LYS9AC2eXzeUoqDDCzRY2hZk92P1xUW5yqrKwKYwc",
  "key6": "4rX8yhxdj93ekAwdTYzWdgvVkbvG72P8YDqrQ4dU36gdshxsxoHohzcL8eN3J2e4x7bA8vzEtQnP3crSXAwx64Uh",
  "key7": "5Dg7CY1hVPcfQ4iu45MGjQR4qyAbhjL7QstKDzPRMAACS92TLXdLwtVNtgPZH57cgZvVQbmtE51qrrhyDAMRFu6g",
  "key8": "4YVTCgRgwneVfGbtDYS8pEULGnXJwMFMoi7KMXpETDZpkWbVezaxsJ1ZUTQjmcX13FRiFWqkCw8VQmLssNz6JN1k",
  "key9": "QYJy4zmw1FkRV2fxy59UEmQgCXZLMPS4h3KEpDY46EcDr2SoqU8FeHMCTGWrP8RhMfiwbn7HqaBPaNsQjjcPj3k",
  "key10": "5RerHe7xsE56sdSaV9JjPRwHcV2CsEJXSSrzU7pgHSi4vem3CujpiaWJsCjiFyB1EREX71BjEZsDoR5qFxcqDvDd",
  "key11": "5PhX4yWSS5kDwMXxwQnA7GLaXNPgugs9tewiix5jQhprYG7t5eq9f57ZhsVcR6DS4b4F5XdwDassrzA9LkAR48Pe",
  "key12": "3KAr9h2QmfzvX8u76Rpa93vMUSD8Ts3Y4mbQS3G72XNcu26nbdD9gj4ZmHQZ9EXAXXyn58vMnWGMoZYXhqfhEcNp",
  "key13": "4qpoeQazJ7EsRxBamp4u1L1JV2KgaAchPUADT1Xzq8dnfU2Jx9uMandyYHCe8GcW8uu1KGvgmWajSMJeHp23BRX4",
  "key14": "58SUqEN4i2RnTTCcYtES84QAkPMLAUUme2MtT3CKKKHrgfJYMDJovL8WvY5AknrSx9R2XXjy6PkGdfAHmeQWBzfn",
  "key15": "kRVzYLCfviwLafXHBj94n9VKzvMj8a1M2s3RhQqKaZ44fpM7yVmva8i9TcKFA6JpHrWW1mZnQEikKy1K7jEyYHm",
  "key16": "rrwYHm2SiVG2t37hG3voyjV8fSTfB7QiXT8oebQvFwec25iVC72gk3wYYtprTDLG4v48vvQmc7vB2APScSCreC2",
  "key17": "1iyp9M2zivZ1nbPG7h3nuu49xtY3dHyZv76X9M7Uf8Ff2fYrjz5fApYmGJVJHjJuogTLXTfnZ9bPbPUWHFxaJLw",
  "key18": "2whqhZBH1yv3ff4TF3tcLTgr3v4oE64xAAhUXLY266kqamLPPcasc6Rycx6KFWVGMDvizj85SBC6HgphRreLyaqU",
  "key19": "59JBUG4EsHQWeE8CupWcqwqwwC8QMRreYRr19GjUU7NRxubXJNL8JAszhL5p7XhdtrWL5iAEfSzCcme4PeULA5QU",
  "key20": "3VXSNPgYzyGMNUBkBTM9a2ubABX3XJkvXNZGH3V9wUfteyRmPLe26qYJmh45ZJewAqhpFDkJKE9mjs8GhAhhwAZ6",
  "key21": "HXQG2G5x4q5wuYotkfGQHoyWAqQLUNC1ej2khv7icSoeBwdFS8aVoF6qDuvgikNzL3u7jyxWPVYzoWcsu7Ez568",
  "key22": "5bq3qcnzXbBqxbZ4CWE2Dv4GVwigmt54dT7tGm8STmuu9m7cHbcCsNNgDdkg2TkREYnVSdJCZ1ivQY3SRPj7MFdV",
  "key23": "McWmBuK72UyevpQcgbxnvHDsteoe6454iDHJQpoVTuw3rT8bKG5fJgx7aR32nyQcCW7udqLPPs84N5LjmQG4Lut",
  "key24": "4hgvPRGxT3WDjLcVkHAympH1bB867DmG2ikBkgFxURSNF4oRW5LQwjZqac7BAq5acUaKy7cV6hEb8eGWBEwkzzFD",
  "key25": "4FVUhSTSuZ7g8X1MrLP89Ym6QkWbuqbhmT3uTpWAQhF4MCRWxojLnBYW3HGzStDj1BbW3EgjTmAaXCbHqnGwyzSY",
  "key26": "5pGvgfQ74PRbp3pM5ThBDqD59CmvRYtj7NDyGBigEq2aGwYmFmcVNweEZRi74jDM1NKtxsc31K8T7HDDYnKs8sq8",
  "key27": "2jxAXhrvVN76W9XCs9irLHNJoWJ8DtHAdqXNNqxsCytkYuNebLas9GzzzuCo137qMPJQtMsUZZSeEemLSHk9F4X2",
  "key28": "5sW3CA6kZVj8GkabV6UNw3PwBkBMzrA4C4y62NJyTpNkeMqMRtgVQHuPhPa5tgKFbLh8PSzo1a4xGQDPYUJ4dbWi",
  "key29": "4m8f7uEMRc9arvYtBdLJUHmJcNNq7RWq92dN6vqnVAkSvM5fkJFaAmcBMWpdBgcmunarCsgw1LVbeLSjeW1i1rzw",
  "key30": "5WLhJ9o4tjTGW5TS76bBMsyEHm5fMjrPrqr4JSyt9p86mjJAFMMwsB732Uqf7Tk7toejuKYUBaX19gyDnGaePibk",
  "key31": "ukQxNZeEVbr77mF15qTf6N85JBgBNDwq9iFTYvePLvcedNcE6aNqPpCR2GiZVXzLw2Pszw3X82vkeuxF8d5L5S9",
  "key32": "2MLRcLjY4Ynt4HzyFW23L4r51MvQ6ruJtJ1Z4dBSKzjoMwgbNYoLp1k3D7fvSLpbNVkyv3d1RKiDvM8xzg4VGX7X",
  "key33": "5kiisqVB99myMYrLetmvXTrTBninSgwohUfzPDgtZVDYEzBeTtdRHx5HvRmjWrrGJoubyW6WCeA542PuBKQP57Ma",
  "key34": "4ng1uxxdx5L8TKZMKtxhzZHhWtUVSvD7KjQLHWBjzBx9Qu5im5zwMnQdxV9SctAs4zAL5Jz6uafA1QCwWUWbfZCD",
  "key35": "3hoJ6mqKh5W9j32nq5YWom8hwDvSkabf2guQjT3Z63V1rjgwDJNpQ4PuqATLVHqa4zVa7qhsbYkh9cFTqpz2oFNB",
  "key36": "5QZXWq5Q3y1THU6Zya8XfQeksH6X2eM1UnmLpsmKnLQK6eaCWsS3giusH6mzqi9FMxgs7PYpebnJsBWzQ5oboR49",
  "key37": "4n2Ba4VGB9iiTPWeLKe7sMAAYNko5TSbZxVvGTeAoj2bK8fHaycBDtvien2rZRGJ5kN3y9MuHGySkcGqUjZn91qB",
  "key38": "5V14VrEfCpWDjie86HW4voHPL3bHKnAVsky9aKEGpui7WvEoTfsCNcvdRupktTgzRG7hTTfMaBppkt2jnRj6PdNB",
  "key39": "5ELYb9tH1Gaa7m7VoPkAD2tYqKsRV4vUcQAASFK5mRZYTWqk2XoUrdjXtWBgcZZAzkRv6umM8x5sUbDsb776ZTWS",
  "key40": "5wUApjhuRo7y2U9E5mE64m5zrVi2ujEr9aZ8CDb7DiBkM723xP4Jb4rjKWNGYQ89DgYHTCXTMC7Yohvs4eHdLb1h",
  "key41": "5rYtgVmbMAus3QEUf189hmegbGvA7TKKg3e8eYH5i9NaxJjYaP8cAA6HJrBTBqL4vWpLKhSUkuHH1guNNK4JzVp5",
  "key42": "8vShqo7AZvFQiVc91ecm9TGvZdwhRENhJawm6Sp7V5sPkEyJZKVfwocCMd3NTeXCEEC4bLAmJwAza1rpZZzLmY2",
  "key43": "3mZDtRfmU2XRuMfAhDf5mwxBMkdhfpUZgUu8HzptXmtdXFYHGoX92dMaJn3VAvV98nGv63U5jNG6q1R4syXm8jFc",
  "key44": "6ke3axNndGSFfP3VfLMgMg3sPm1VuweBjYpWFpypZaXyt75DaaAGeuw2Ax1xRYRRoU1uUyQhdQe8syQDhpALamW",
  "key45": "4rdxP3cesvUEzxRhQDTnzJA2Yvm5P3b9XnTxvEbwhC42SQmpMgwDPJ9x3MSPEGBSehYdyB3reXeYvWg4tSJGGJg1",
  "key46": "2aRLkgAd5GcvVB7BviD2vGYWXrBXTFL7K4zy2WVeFsVuJBnLaaPtVupaho34cuah6gKnic19fjRj6CgWfQSRFeS8",
  "key47": "4oXq9fwzxLgMQy1qjcXhxbapcXheKH2NtwX7JcUnQ1CQqYUdDHbrdGgq8GSfJExJXi7d5TNNX5UDnffHRLpkBSD6",
  "key48": "411S3kJCTsPDgfXjTp8RJnihZrsC9oirejAgWLjjg2nrX4PH1PMpYV9qWCsQLa6ENwFERR844LCHK5ycKdqVSQBy",
  "key49": "haqG1k8JfDr2egVA41NGQsgUpDuFRawhZM71BLaEdW9KJw541A3y9yLnuaEFKtxdezXLY2BDR3L5sLTWNL35Fpv"
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
