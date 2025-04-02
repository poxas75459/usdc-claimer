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
    "3mSEGPhjV1TurY4ugBSwYiMKS4mNZhoP1rfFLVJqoDkRcYa1yWRMCwcJjaUALhVVQT4pxxRSdmqnxFi4Zn5VQkVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cFwsBmj1BQ2tUN4236ShHqACtm571kfk2cPaQUerkHjzTiLtaScw9896dHaAXYbeY6QvazFFfLKWL4UX8WnV358",
  "key1": "2Lmk8UsevJg5axh2eYui4QLJbvjbLiyRsGk4QvCmXoMosUXqup3vf5f87sL5GMBRzE3torvn42GHC5yfSgzdVmiY",
  "key2": "4kQZXtKrz68Xiz4jaukwcekhCiA1rrHpp1LwMAk6urLtGuKykD9YTcZyLLXKMbP4t2RB6rLqpwnmQ5jxexRvxZE2",
  "key3": "4u7Am8H1R9bG138x7KgEhFgeCaUTxdfYQ3jrseKKpt3kR6LUy21AqQeBPXLjefa6wwgbNU4mvo36KEbm5MkkcBRp",
  "key4": "Yj8rtEmSKWkEBXyHHow8SMVtgWL5Z2ziyUhRbKydg4oHfd59LAyxFbCPQgKySNkb1uifLndGZBb74Ffg3HT3M7s",
  "key5": "31D9GvSs6i8pVQPBieZJeZMBivoGQKXfNMSMXsi5sPPC9ZqwcGpuXFPQ9D9EGFvtfZXYBhf7TTMfKc4pRr4n2c3E",
  "key6": "256wRfTa6qpju4qMzmmPvvcKKTusdzCUQ6LYrYo8Wf18oF2j4xj8TynWParRJaYWpSC9xUUnbi2S43en4Qt4VB4F",
  "key7": "2EkP1giY7jo2a6SZSCkL16kbJNS4Rehm1Q2eWYhpc4g4XbE9Vku6acNkofEfTuuhewv58yhgip7PF9GVQu37bybQ",
  "key8": "XNRuZKDKZ5vPHptQNobV9z66gMyW8tLQeikyWxM7ABoqxY412UvZBKNYffoPFUfa3qhUYDR1ezpuChRhXAjiocx",
  "key9": "4Dm1iZvjxan63usjYtikMZPmobMb6JF3L3JUd8n6BYFJKg4RuKhNTZ4s11rYQsikH1QBoZqpXvhZTLrQuWCghL7f",
  "key10": "Vz6NdtMTVmVpiuDnSFzRp1ovcN6TT97xv7o9XrwDDhkujwUFCUD9fKAwMnwVzGufsmyr5r6KqLico2Rm2Ct4qGw",
  "key11": "5f6ZU5mcgBsy1NxNP4uJQffBuuRwb3KRmuzWD2xasXffNZ8ncKBJESApodTVqZf3yPRoinh7Beq4jamff1e4Xziw",
  "key12": "5LBpBKhxQMyLFNpfSGHFVLAgd6jqiRjbpFwAn6tzRyRoT8RxPyJgJzUtQrRWfDZETT7QPFF1o1VAiAr5yyzD5koP",
  "key13": "4DrNV5H52LFxtRU5tZLyC4VR6KpE13acS4Dz57NXZPbGcpon1h7m1orGAon3E6RKzvzgiPUWjUQgP3NnnUbsMc3k",
  "key14": "5vSUKx7k2mtfFeox5mS1xT6i4RBw1PsiQPyLnQtp6UYAdDQAfEBWiCjzbxQSviajg4vZGF35s8FPugFCZZZ5x8Ky",
  "key15": "3Et1XTPXyfPW2pWvGtoP8Ntu98AssdEhKRTds3dYTW3WCzy2WXTbsKdZW9gqLddLkmBdY92Z6rnuAPXXiz9QLG1S",
  "key16": "41sM1c6n8UZXkXiFnFzabH1mtvrka5LX6T4RtCjWDGdNohoi4DFf4iA4sDgFYdYpWgN4iMc9frGneVjMNatPvm9F",
  "key17": "5s4ECZEFi8jiaXSwAAizykwJjsrWE27W8pxWtbnxHK4MVpRfgYe8KwDLQcajdyZGHto721vNYLWwHyPi5Aitqnno",
  "key18": "661FHxAYoL8gEiCRPSWMsDAmpwcgb4B1mj3NgHTEyfVUNgm5tvR32m7TmGJHyo26Gg5XufeBrNi3QNYWmpXdfY8f",
  "key19": "2LRNCemdwLKmYzi6zUSNLyr4CSqeznEtAcqmsHrx5rkUPKsESBPnPXyUrcLWMtV3L46Xi6KNonxP7WL1yphyaH5D",
  "key20": "28xh8FjdY3Mn2Be6GUs9zvx2pR7dPMa9ZqgRH7fKBLVHcgED8ke9nbZVtxaLSAALU29PWAryLK1HSXRB6X9pydYN",
  "key21": "46S5tBBxSZk9R65M1bbqab9jcyM978kvfFqsA2mVom8yHdVk1FopozTNCRbztK87N46gUWurFtu3D7Akxav1XMvf",
  "key22": "J4fsDp1vrTwE4CZvZLcKiXP9eemcZ8wn75xHitkBNrdg4Gv1ngGCcvHojRtSswDYEjgD5hyDrA94qPNq23MCoSQ",
  "key23": "fobycaVqX5F514Vsfyp5prC9eyVQRXVWyzjVSHo74Ni8ATtpY6rU2vZgUGf7yNiXd7jVXLbSY3CvDD7WrGX98Gt",
  "key24": "3WFAmaDHXCUmNWVYK3VA4bgi7JGvkQ42nVLtGJ9jc5NFhx3GEJgjbSsgkBLTxFYwQe8VgTfRzkk18sVcFeo3cKuP",
  "key25": "387hB1s1jZNJHqhiQy25cjGVSCnTLFZHZpwfuUKuyAcnpfC1VSd3fBxAeDMwHxUAreq45iQXmrr1Yo91CfyxLy9v",
  "key26": "2y5Uju8owuNoKg2cqLigETMFfntrbDsq5psF3a2kRfeh4imBeLjF89MPuJG9JGY4GtSucMyzvYK6rkL5AVXib6WN",
  "key27": "3urNe87VBFC2415L6WyBhvntyWJemjvSqmXWckkbx147nDDWUNUMS6HaiZvDhbasr1yXc5zZxawBXoNHQuKvmC5U",
  "key28": "2hBKjdjj2MQoCTXrgUCsBWjYUT9VxAgprkCvvUQ1aNaqwQAcnBkhUFMn5VD9LBVDgqzQv47J8imC1PX1C1r9Ag8U",
  "key29": "37PN5xUD5DSo1E89ZaGSpYKZirZqy7whSJwp7eVcc4N9D1DxEZt8oe7BF2g9tDVXxpzWyCeHMeHRHXwucrmra3zC",
  "key30": "43QGL59WCbs2C2P9U3vctEQQ7LRxf52ptiT9geYtQR6d8B9PGGoYp8wuW7rCgjJmkN4dQjycRm5yLgeRBCAQmcmB",
  "key31": "415MYTSgbGAWLGTtz53ZXiBQyvhySSZ7qcyB9BpnABUoVbe8ebNBXzWCoaTPQ6m1ekqJbNvAhxigRXp5tXL4oNCD",
  "key32": "5521uNgQagXjZrbTupA28kFzrWz4LzBJEZk3bYJKwRXPHtJJyZUYLCf6fett6csNfZ7di8aD2egW4wzbUshjFkdt",
  "key33": "3ZnYyYJ4Eu7Vabm62eRfh64sfD7t348Z9KxpHZQmBFfH38WvH8rwRqY3rEcZbUVYkfBJX5ukBCm8ib5GM2x1cKMr"
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
