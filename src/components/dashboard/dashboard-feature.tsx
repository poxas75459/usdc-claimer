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
    "EFWq3yXzBsghSUGSCXkRZK2rz7t6P9HuyPQmmahshWNFjNjDnXfuK6fXFa6h3dVgDBRa6aYWALnZRZSX9bFDrPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xwwYpHL5g6tD7X2QtW4sryuqdh8cY24pR6xnk5RmZXzr4HeGQcVX7eMviAjQTSzKw6YEhcqn5VDcoWY1dZ3w851",
  "key1": "3GEvSyV1SHrRPadS6kk4pgncqaQvFpTGyLGF7yovntpWnwHviKmVLSJymPiPz8b8d9gjrAwPcS6DdVn4KvPYYgJz",
  "key2": "3wXLkj6qipU3A8eeY5ydjAC2uSwHAfrgp8X6hbA9KVLMiR5x5WYRYWAbcQRmjgdHns15jWsVC2wGfnfmqFjHNr3U",
  "key3": "5p2hbcCtvDoxfNrCG2tcP5B8BtdVatEnscbFu19qKBmy6RYzpQXXgUWX2y8BGmmeGn3HwhzNRy8qURWGFBMAuGjk",
  "key4": "23mRQzUDXoResvwMSsVYaq1HSHm2z6a8H32v2LfeZV3VhCQzmDEMgHa3TCtPBtiEZuv1QjV23WVVXZLrPn5YnVMd",
  "key5": "8LvzprfkbgfdrJndqnR1TFQ2Q9vdQajm8zVRPufj41kwRKqkCMd7Fna1rfif8uPBEFZDzwrEnXJfhqMbV4nNpDD",
  "key6": "2bMqKsg44SuRiisNePNTAw5txrPfPP9jPNNnd8QvWYuAqttQ7iAF9BpcBKxpCrZ9YBq729o52cwWxekRSUho7phR",
  "key7": "52otKupid9DF1bJbaLgfwzzuKFvtamqMxPNvspeziKqhNK3JdyHVMNBWfhpQqnXKzmTeD2kWn6fVuLQTwebrC2gN",
  "key8": "3enNWorQ52MQkyQGwjPCHBtXjHiqcUvxMWGeZYRxDGVcChJH6WwDd6tkDkn7t3KJiNJLNsK8GVtCuK5rAN48wdhG",
  "key9": "LJxEJZdjU2MNeLq6MpUQBusBMDnzHRdHzx9kffVBahWpsqGphKTY5D62DKL7xDKY4fLTJYEdnuARyFYfTht82AS",
  "key10": "61ST6m4DjLARx8ABRwpqU6h9Go4NBfLi8aqnpQtrzi8GohUaru9NaQQrjhVF7RQCqSBEjNMvGSEp6v4qDefHgVgB",
  "key11": "3QkkBhfdUsdiaFR3qd8xfcBMgMpYEzBiG27EtQUiCziYFEwCmLtYNxmHHmkCJqbvXEmgP7P1CSW9FdwgyEo1PigT",
  "key12": "nV8ZgMxeEkMAhTj3RmydLQj5ScM8PZsuhm396dgrDSiuJfpgpaJwkvzikBfCkQdVWqBK11eFo7J1gwmmiMHwXzq",
  "key13": "2hxxR62Un3vjVxSoJtRuryuqtvzSGeJtT6xtjDnDqhs7aDMafXtnsd43A2PPrRaG2dh7YzqsZLTLdMeD1H8Uo8vx",
  "key14": "3yYTJdcvjNfuNaFtXNqDXYExBbdpBJNHWKUMe1r4pTRUeGeSh9jzjXuiQZn8DmTeLbyKTvzWg2dNuS34DbVcwG7F",
  "key15": "5VzirQ4t2De4ca3hzv2ie5FzSCg9ANyKM64ZvJTYtTkuj5rETyPUuSCvh1aQQ3XpqDHR7ijkkbMJxHT3TYAX7AGM",
  "key16": "YH3k4Sf8Vk7yhEvU7sHZDbPWv8Kqa59Y6LkL9vwBUbCubRYgi3xDaFE5N4uEVCxQaXjgUYGLEKAreabJhA2Ms1y",
  "key17": "3cZsWeqAWNbrRXUs4C344r4fQPJv8oW6a9fAdPDHLnGBozv7g8iPt8xTDQVma4gUGyNPPxqRFg439cxTh8D8Sj3G",
  "key18": "3qW1eVS9UWVAfBHTeMRzGA5usZnZGWNJ1gGKWLscGgTdXUSSCsGMTpn4ttCFk1TqkyLGhs7cjUrnHzhDTeu65KhC",
  "key19": "NTDnvqNDmcxwW2eagnrmyw9QmuAMNQioC1JmsPn4Ncstm112JGogkmwM6ft8PeiuNqMhQ1goLBiUKgUBiFEHLCD",
  "key20": "32QtXxkYza3uFiKQjbUT8etkxpZhGKwDkaB1fDhDRoeNY4ZrJi7VKQWbZFFyhDCK4JKwzrVT4q5SQZVjxm2ytyuS",
  "key21": "3H27e2BfHJu9EXHcPdijuFPXbn7dBsDyJG1eFixgtqMFM6265GtfDC1tLvTDatgEzuBCghPojVFWvEMrvpd5e5z3",
  "key22": "8GT77iVsxzCwMBCoRd795kX4MDHC6o8DGpD6rrUTtEpksZqVFUUsMGnUoHASAnBtkcmfqqzdjNBNwXiM3QdJ9Q4",
  "key23": "4BmGTUTxHa1McjnsHoXLxkWNjHPqXsMaET4YGDnxkGxAAPKcFwCD8rZSPysYgNvqmZPyhF6rJE3wFHo7yLmjhidJ",
  "key24": "dqYKw81qFbjTWgcoxiDy17NfCwbJ7pMz4zw1wcJXwQafbFiXfC7udr1koS5L9Rb9HYUmsB2A7sNLHVQyV5KenY1",
  "key25": "BZJdxuBm27iEoAaGMWtHRGb2tN7EoLQDbNivKMwhUbVbERyRjaTXYdPKkT6dbDy3wjU2pWCz1w8JBwzrXbncMU5",
  "key26": "4GPy7rFTsXHKX1qHFxDFpE8wnRNUdpLwBSYDtqhUe21dYRE3HWG8UL4DiVgJ9zEcKqij6hvxrJcjeNXTqqgWgRR",
  "key27": "2LRCJCnZPTtRrd1Mqyrwhr3BSeEedqrA8bi8SuCSLfJ1ruAgDH4khsRZ59CkUReKUipu4s8urah1TsBdDsyC72Z5",
  "key28": "3VR6u2CRJbFfoG2gV7pETPps2h5owxuB2PMnFZsaLApaX3hwfdEDhdV82QkA9CtHLHHWN2kkJ662o9ZFD5sv56vv",
  "key29": "2Lf4s6yWckz2oqpCz2dRkDkBrCACmSk3WniUQB9CMMVHQig3x1cdux5sMX4G2VAtXgTiLayG9oxCyH6kHNYURRwD",
  "key30": "4h4iKEKfft16nDg23hx6aVwVNYcWVSvdKSMqqSKawCrSMk1mJ8yzkYEYJaKtoqqFGHdHfGLKa3SyGjn7YW8Kjv6e",
  "key31": "4Dq8Kg6pMaaxiL9ceBqPgHbZP4W1NUeKRKm74HWxUnVX33anqN9ri15oWNVXysVvr1dzTZNVqqRkSvEsSQztuE8P",
  "key32": "ZdxiMVrt6ujbdob5Drfc911R8fa1TzUxqrFBDKUGcdMemjKRBzbAHGn2bkSgL6oGtCAD1J6Pau62YTfiFqqFLSG",
  "key33": "fizn6xorr2g85em8PCkNh3nxGXH9QaAqBd3o4vrCpmMbsxrn3vS3ftCXL7s7gnySdUotzqZeHS85tmJ7BQ1wXXg",
  "key34": "2QF7wuQvAB5hhnzEyomXb5og2FrxyAMJLn3MD8D32f78ZD7XP27sn86iisbYhvT8oEwXSNBxR6Ek7NYtPhqDs9P4",
  "key35": "gX3V8eFmQqZJ5WhNDGY4XgzpudEgBFWAHTLMxtx7PSJmZ72SFngvw8p3Fzw7H65vX3wFaZtNPuiu8EGRMhWG4Nu",
  "key36": "3EDBmE6mjxiPwLuqfK6q8mC6bDykMW87ZVoeH9VsDYYMHNHu32aKF7i2mfPc1FkHBRjT1vfg6vyoG5ZYJvQaZctz",
  "key37": "z9SjYtzvAvU6xVrfzafSHufDkaDepc6w3eTam5Xv5GkdhgVyTqTRUJsym26vCq77Kkx2Lza4vgXF8JSLTEdU9c6",
  "key38": "Sp5DYevayhi7G7B1bARSTNCbsmXLtayJd2vFByx5fLnHHHAsqJ87bYm4VPkhnNYQS8Kvq3mh3mytyJVMjnuSE7F",
  "key39": "49TRqXjhJDirwYiTu4rXCexjnq8AJh3ACmg5vwaeV4AFffZ7LnTVTW7kteg2WRiCH6w6S3tCHf93RqYm1aG6WYYT",
  "key40": "5VLvEc4maur7ME7QYwnyquyUa1kPYWp9TfG1RGnJNPx49iVQ7tHpgxGRTrd3uaFJwT7S5Qf7MTao85zAvxbuitPu",
  "key41": "5RWRBcZdwbjy8138rGfS1peW6vWbqxGMqTc1mY2mpbnLeZKTxCZ1BuokFSVCXXpoMWB88m5VE8qiff2xFUeWCB8G",
  "key42": "3ErpMPnJgAjynEGkCZdd4xsDVDGHaNSFGcumH1Lmsjp7kZdPxiwtUtmkfBZrJrt7XZCCZN4hkit1UG5ie3z2EaZt",
  "key43": "3jE5BGekZCGrsbfNiji47oGxwxSM6PqZf6GP4KSBfrSrWmJFeB8Qp4z4Z9Egmzgiri5JFfSHNLf9Zcw3vsQWgw7F"
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
