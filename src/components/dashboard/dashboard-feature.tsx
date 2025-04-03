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
    "D1PNPK9yWKdMEFtEMNT9qK41Y8DEMoR9e15oy6Y4Q3W9vAaBLj6muR7rzPcZKBdQPrM8zMz5oLqtFnYKpEbYM7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XVADAUxzdWbHXLbezm5u5pqgdfLzAwNttiayJBTjyL8irRzGckvdsN4zpGRHhKrkuwQuGDmxxTKx22ZpHRt42Nh",
  "key1": "2A9UcnH8gsGh3eRcCjs22u2YZdXAdcam6etuu9BnhyCprFCiMDVxfU184rbUGZtTtLeCQgBtgdjAcc87HwTUUB2i",
  "key2": "5dF7zYKeAFuxe4LSSifC6uSZwRC3BFK8vCVjtnS6bUaRMrFxM6ye9fQ92NVRhPSe23vJBmejhd7RaNecvTZNRHqr",
  "key3": "3WkMxansNz9NzxKkVMyCkQpWjn4x23HogfGLShkTxyPzbKptSTK6918gVAm6wj1LqCwsDrZY4sBVnkhPASieGwMo",
  "key4": "2tzXSx5MFHHrhtRrMjNfXy1kZ818YJr2HtrtLb1zVCXQm623WiJTn8wiYZKfQnJztdcePZvVfW2BHQbFwYaLnqFg",
  "key5": "5Y92eqj9K3pha5HcuUuRC6WVrQsoaV1Br6bAUfmkX3diT39arTWmicmRoT7xK69A7SmL68ShVTCzuHBpNeR3LYNT",
  "key6": "5C5nYGtj5aSX3hXbMRQvUGE8jhuK6RYLGHxXakXNoAX6LpFFSHae4tN35TRuUggMe6scLBoFL8NqgQtPX8AeZ6pL",
  "key7": "4wDUJsRwKhhLWYY1Kjn72uk6e259QX9ER1iV5qZuwWneq55rcRcu4LPxMhqNtszTppNjeuaD1NLmoWxnXFZpwoHq",
  "key8": "5x9bP4XGPJZLcr4LeckqPZ12u1zXSjtSgPMpx9wZ36p1Wd3F1GKYr6frTNvVXJfwKJzUbP198wgJkd2rXzFjxXzC",
  "key9": "2KAwoub8L32WkBuUDA3VGajxpXkmvYCVcD8cBYMJ3S25UsXqiCb5FDoLCU7LvkZfmQQGAnCq2ZpUKj1fyiYuoMFY",
  "key10": "2rPxCADgnX8TL6EDN5fPhLdhpfLNtVPsWphFTKzEd8Zy2KHEVws3bHrRSNKddUQD46iiH882ryoFieXwH9mXN1Z7",
  "key11": "r41WCF218mvDTKnQZ1ZeQzsuJkLXwydsRP8qNLm1JvtZ7HZuVX1eE5QsToo5Vu6fgj6Rjcju335geiwPvJNAFCs",
  "key12": "422jsu37PhLtFjFVYJtwWkRoJq5ct5ZnehMhJVxyE1SktJcE8CveVU8EtxowRQbnGqjgFXYSs7eGkmr2MuqFEbjX",
  "key13": "4csnoXyHR6qpGpD8JKtAYvJnkEFuceqwHgkRsbEoW2fH6RT8cPqZgYgG4uqAYYvZCPN7U75AawYo9TSJ8rMRkX2t",
  "key14": "3vXdVcfMXDX3hX8FbbSubQfGddXUb7oCpmXngp67yEqK7cJGif6nYiEk3LEXEJutGsoFofh68x3ePr37bdbTandq",
  "key15": "mtq3bKb7ae9M55A5fzguCrFx8ogFxNdzuvRws4uB6egcQPGpYn8QuXocLKWhU6KYu93MsEBTe9PeiaeV3d5XFDs",
  "key16": "596mb8uCS9gW3eaado1h5W3j7Ck9cWe9VxRXvyd3XP4HZmSTEtXWaWU1taLujntGvMdF7bCJoTYiXtQNPj2HT1Gt",
  "key17": "3cHTG1dYMzvGBnN16uvKPHcvhyBbFf6TQ2RBAav2ibGf5o6R5V6afaWLnmyeKSUFGm1Q4a6uUKByw85nnFQPLGi8",
  "key18": "47Wvv3FbHYuvfGH7Z2MVkq1ftCiLW6jnQM7fpBoYU4KGZKUo2u9WGWhZmwLEs7Qj4ae6zg8n832edYHEvYiqvXGN",
  "key19": "4sCe4Nu1AP1CxqLVfXSyzYQTSGHuypTucG5gsD3mDPwDBmCr6rQsqpxp5oQNHsPwkpKPFyRo92p8gjsj9JRMxRWg",
  "key20": "5DtF6tEmwV3XSaViTSMa51i8iksK2KWHYKfAURXUWV3S3g8PuZXeHMuA1j2yZ6oj8L6C6QsuHjo3oTFaWSodJgR4",
  "key21": "316TZWBYGBENGt4pY5JDYeGHFY4TvixRqFsMyVTyisPGbrvaaqQXc3H7PQL2UGdRSUkrXHc4Rjh5gEjX2cxfo5iA",
  "key22": "3MJ29YFPzC3hqdBZVA6Adz2rkbaefgJbf3wKxDTnviPZZo8TZvuxha3gdqGrExtUpYzk4y1cdEdSABbt4jGTPSqu",
  "key23": "4EYqFgjQF5S5bLNmQgPBLxsn6zXbv2pDDKevuYcqpSumvXyRdP5t6yCDFeHJnRZRdSP7AcrsxuUeYTwMrZMLwXaA",
  "key24": "2pAauQWdPWJ2fpADVhZRwMEKSxW8A64xDNDmAAvDsv4VrUP5hok6vo8SWo2cbsBbgZAbSUgnkT2DgTBBFSZ3ogoA",
  "key25": "4MrEuaj8QEbFbVf6xGtyxDJ9F2LvZawYLtJ4iyiWzj4S6abVCEWPdSwrNMhXPz7VCnUweTvGu8wTppWMCaDgeiU9",
  "key26": "y5ut9CST4QULHyVgn294KiqCoc4D6u6fKxGPYqDJZqG33gy38tK775KQeUquaqeMHD7T6QaKCdKVpetz3uqrzkW",
  "key27": "4kLdw8soHM9wZXDfM1iDbyNKgYvZXR8s8NMixHowgsreVGDHcRwPVc39ZeyoneURYBfPLx8Df9dtdpWv4Mzd7qaV",
  "key28": "Rs7B9vaj5yrCFtj7u9m57oj8X5BzM3yfNdi6nQezumdopAnrbz3nTpCnKm7tdVcJ41dzpQYcGBjS6CU36QyGNZ4",
  "key29": "3BGMt9BrbZDp9UE9vFwKJ3nf4vNoKcDVS3NiTvUQChqdaogUt49e9cLW7FkxCFyGkDpDCT7ndDYFsfrfyYMyumTg",
  "key30": "4N9aq9HfGdjt5ScFqy82VrbFdfL2wuviWUT3Np2DuNpQadEjVooJwrtDPnvoc3jvcgpkQuvgDUAEv9QEYt4vdXTb",
  "key31": "4R5kqfFbHknY4XneECZtfeXFeoyDABzDm1ebHTLo8uDfFPmwWbk6rafiErynAkiV3qknWW7KggCtC2AYENVC1hru",
  "key32": "RJpJ5xsEFhzADfQjzFskxqmVKb1SMV6DnuHBD6idLgm2bgravYED6bNbPiySbfE4HF5HAMGPsakQQ8N8CmzSofw",
  "key33": "3maFuBmVEei967QRkH6RSu6UtJimgCG4Eegp2CvxZ5QpC9rvN8vFgpTUkaK49N5YGm4ridKmhEjqDqGwtGi4XwRK",
  "key34": "2fAF9okMzQVUbw8FLu2p8ASN6oW7eKC9FCDYT7Dtv6gyFTusYXVbaHYpvU7gziXX3GAAQbregbWp9SRFdTgAXDjq",
  "key35": "4Rg7VXHYPSjFNBoJQoGr1f4vhHZ2NYzUpXi7U1BEeRfkFqkfnhSyCFyw34FeghRaJWx2bku6FzvHU6WNPL9WHm79",
  "key36": "2v9fkjNYQXhYBmUjwoWYPMHRQFro7X7kwTjafyoengGWtxwgVVCVYkExfqqSysDaA91QJLXf6SaBYqcYzVhnoCD8",
  "key37": "2nyS9U2YgfkKz4Bi7E2FfkB8UkNNTEhC8spQRyEy6EMj8ekdZ8HjstqWKgj8M4Z2Qd1fA9wDTCHLPPMUCgYMeZYd",
  "key38": "5We7iwtf181aUT5DakosYCRHScMzQ68whcCBgNQUDQ5rdKsSfZmupvgEYYrrwYVP1Usb5v5MPYBTsZxsdyE7LWdr",
  "key39": "4FCmPkqFsTwR7ZzZ9jZnLJMwqj1B8CXkod5c2H7upQG1sCj9NkNxP4SJutMC8xGafUTFtiMcggJjSp5QqFwYFvoo",
  "key40": "3kj5otbx2jgRnS8ENLHtnYSmwADGNtCX2pZ2grLEWhtK8W1yuivZHkeAykPEAHmjvJesF7EeY37mXUzEdGvxzoA3",
  "key41": "4BqCc6Y11ANT8dfS1oBgPZtbv4S7grarbkfaTJQCbURnfHJBg18ZfguPTsYExEaeEpQqH5Rbat1PiYU44631kB2Y",
  "key42": "4VGEVtXJ3JsJRaep6eHmeAp3ERKWrJpwxUr6yrZu4wjTkmwMm2f9RzQmzaTwUvM891xv4vXaM3Gs3mqfQfZzsc21"
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
