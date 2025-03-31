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
    "2vVtyaUMaNzQ5FWB8ph2uHzcNnLYe6eHqfafgjUWK1XEvmCqiPKyxaLS6sVvtofUUCeazJXYu9V1DLVLugtFeFbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47i3p5WzZBUqx7C8wppTGeuM6trQ1GySZ6YEG2Ybv8tvJhQENxJXAW6JLgC8WrXDHA2vCsAZnbpzQT2REjWrUqBG",
  "key1": "3tQ96mkFy7NU11aRJDhEX8JabQwF6DcCtkfhX2Ew242JxDYqvJHVavw8fEbcTpTmYftaYuGRtLRqwkpAp4ccpF53",
  "key2": "4doJZwkAktLtRScvFwLXei84z6Znz3BLfnpj98ZvAEuPprinWcAtMeYVKtxX93W79GhUyzgJN6MSh8j11ayJfZhu",
  "key3": "4pK8v1uJwcNdDtdz3keLvfCYNxTjLCqQPNzTDyJh5UgP49pJ2PydQi2pfwVKNC5EiqZ5CtayEt7hVybe5YzdAuvN",
  "key4": "3e2jp9cwR1SxZhrtUSoanfRFDqDNmTNXqf6Mi6voogTugYM6s9vY5QVhP8SPcLPR7aB1i3fT6GGuwbtqDimFVoYz",
  "key5": "3LQhgArPDm81wejDNdaNxFh5yEoJJwA5MYz6ocFwjZ6DcX2Ld8jbV7xeb7esKgUv8xrVM42Wfs8bhGPXxMoaBYWA",
  "key6": "cR5kKWQk3SdzNwpWkT9Rp2kUYUbLku8w6mJRsNVNhN7wczXMcet51a7QkuBSpcVmmum1qBoCHrr537xBBrSdRhg",
  "key7": "4GUxsLng98yaVbfTnALU1hTZqNd2Yz9P2533NVDFx166wQw6JNcgpWLhfxSDa1F1eFDteRPvQqQ1JtcBE7wvALhj",
  "key8": "5vy89rQSerWuxEfs2My2fAPes1onwEW9PeXssCYaeEsPsTBDnEpCiNAWUgqaNWEmeLgEuyFEa9f6y4q9KoVyWm6J",
  "key9": "2gUVu7nKsuoyjPMyvmW4arGUjv4XwGpXHKgf5yP4eg4wZrzbLKLWSKTcMxg7hBdQdJFLAfKK7pjHZzrCojb2swhk",
  "key10": "24ShGQ4WN8yHuz5hmN8vd5R2GTbDjn9drnnpGgEK2vHCtVeFdAmSEtvNj6Hw33YJCRty2AkktmTePFbxGZvsdgW6",
  "key11": "4EenVB49ao2mixJqjUa2a9VJUKZ6op4T4dTGch8UZHzMzbMA95PQJWAQ9WFTvsd8zReyTR5TJkSQEVwXqRSxuGYd",
  "key12": "2bDXhBNCe1GB4fjRMu7dizQnj1SViGNCAFnznihuPkcC7fcZkgrdiH4xQbWdttfmkSrXgc8DhJGkTjUWDXng3wks",
  "key13": "rLNZmioWj9MZKv4oEd382PPGxVQTnJejzVtYn3oFYTh25YfBa9yszPHF1dzadHn9TpGQRQcxUE5yicv8Wpc3ZF1",
  "key14": "5wDsRDBKwKNDGZzXRLewPz3XiUpNngeB4QByCmzFvJRMDdPzeee9YtC5fVTnfcoEc7H3hzr1vz773uVvYgqNvYaM",
  "key15": "3E9dzXwyEpNbV5pbAskCJpHHYNAks44M9Px9mv2kH59xGGtHMzrVDYG8sLcBFMyytVjPJYDhywYi6YGsSaCQGUcZ",
  "key16": "2WitFbLCsVkDY2yV8N6qPK54PAbb8gFZS2v7d3fEz6eyWEad6DT1pTfvcpZmMSPSPpGgj3xn5D9b83DLEvJesJbs",
  "key17": "F672upQTsmzxiCaUgVLrqjhm9uTqSpoPKboDM2AUkn4VJJCbBhVurSnTrR9HMof95rmZSjQdPMgYHe5DU5ikYo6",
  "key18": "46JhxBsUbKJUBg3R9cDypurZKHS85QNeBPXBprhTopXWqYJvZUzrf4DK9vdPgp4VkYfz318HcYsDJLBTqbyLRdV3",
  "key19": "4zKmroZNNnSLmRmUfHNDdBBpFbedjKMavEn3dQvD71Y4iC6sxp9iQ4h3htok8iq4Fx8CeFtLq5arBfkuWKG8NNLh",
  "key20": "5LCiVNuXFyi4xhrBHzncBv9fyYsU8cmPa56WCCdcpYquZkTiwxBpTYSJNwGZKkbeUCCUu5Y1yBBcQEEBwDAmWwf6",
  "key21": "5awaToZihjZbjCDFbnMNLVdPxRer5pAo8AgQQp5oZFALLP576a5caUmVRqDSkCHLzqrRBb4SkeMzA95MqWtZxnX1",
  "key22": "67carey7pxHmQm347HA6uMQpfLj7dxP4s5q2gieeVGMmbkkNz41STjy3gsnzhu5V6FTrptS7SkkK7fyzPP18Kbs5",
  "key23": "2QPQqLERBSCH6HQFcanH238oBBgZ6NfUwSs8Yme6Egnb5TFfHFVv99mfD5Jfjp2TxFznhyGAJqUwCAGphtCiY9LT",
  "key24": "5xDELVbwXz1WBCYampF3uqNf2u8wGqc13NAUzQMHFcLdMenkf2Rudaf7Gsp24AJ5TgeALZ1WMjnfgp6J4D3Yf57u",
  "key25": "5bUs9U1D5c6ikUrvURBNAJUhHd5HWjSFh5SdhsZonGnE7PMcBuRwHx88bWnhrDVwGyD6B283JvGUZnzRJWYvThNi",
  "key26": "5pSbUKFptnK1xRWUUSFyEMyY1FHLhivRW1JTZcLieU968ctggsPxwWnYYbsrfC5uqjvp8PVFuTeFqxUnZSULBKA7",
  "key27": "5KbKkdBwwiKmr9LK8YC8DWkuYGxT2h74nTdvKmB6piFAUerEJa5wocwfDziAsTgE5ggo2U1uKJj1QGdD5fn6WohC",
  "key28": "2Hf553cS71xT3YJXdB4wnPw8Cszgt3pJG1crW5ftZiFKvGf53DWLUPhPshp2wBQwfwwBeRBe3e1bkKwh7BMKRyB9",
  "key29": "2N7MLwDR2cTfGLHVK7z5Vns7LfdipGNfU5pGjtUpevn81vsTuD7zZyu2QGWYzrgR6dMfRNBK9k4LDQ6Et4eTuS7R",
  "key30": "35rXWDYJDWaeyB7PjpT2X3NjXcr3aXReqE6GsYJysWkCfNRguA2gWMWbNQGDZnqSdiC2X8513bMsZA9fPLfZygb1",
  "key31": "2W8WXqZu9x1D4biTPUskRtoUSMQFvHCYADiyCiiezDfPf52FgM3srYUdbqtzHMvSXKEyQYiZAp5qe9J4aRmhQgg8",
  "key32": "2ikYkG7uHr2NXV7BWLGppDftv1mhy3BwrrTNFUVxnrYWxyN2uXMNP99yWThZqRGiJYnF2Vn2Jdva7LoJf74Z5Lp8",
  "key33": "4Ju58ASZukb79ni3potFRzeAwhXWho9u8g6GXjEXaDAabfu2Zn2RcTc9AkWoCNPP3e8UHqMF2BBX37GsKTMV8RD4"
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
