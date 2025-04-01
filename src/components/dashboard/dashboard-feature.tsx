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
    "3HP9i5VFM8QwyGzDviRo2so1cWWvWsCA9WcxQCivmsScGYWojUxK6sJSByqWGzo8Wjn8YsXFVXwKc5apRwsLcSCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sHmMymqMbPLyako9WmfRzrKYXQmEDjRwKb2ewNFSqPSQbQgsujeNvsDPVu6KGBrt9wkaNVvXmoXxLs3qozSsv6m",
  "key1": "5Bq3WbD5xkogBLTCFgc94KPzi2f1WvuWpUkT4CdsG89KXfNxDizvU6P5wwDX4ngyXsqtqicqAoeMqyJs4obpRUdp",
  "key2": "293uPAsHAKeC19Gyry7H7SDFQxpq4HfBBaVv7yK4L9p5dsz1FoXX3yEUhqvYswKWUbRKMARfyhYZGqh8xQVzU3Qj",
  "key3": "73nYtEi5d2tcWNJ4XoV7bz8ZuREejG9gGpNdvT9KvtpYrCArnFt6Z4WjFcSDqDmc487tEqJjM5jzz8foGdAo1j5",
  "key4": "4T6JR7JRv7WCYJTdk8ZJdjLYmHFmsijFNjURL4MnffrpovS8aRrTjtrdyBReg7WoAYzXtXk4koKj8qrpbU4c7WBn",
  "key5": "4dGAyTgUnmrbYV5vq1D1gfGe8o8XGZYYKs3fyjn69c6u5zaHHEcjTvBjHzq8Vj14vTDQX8irtp8uDcaAjtVPrrTQ",
  "key6": "4qyLSKW1L17J2GqATnxP9nNJ4azCA9dgJgN8PWh832yZ8Jxyn1mDWfxVS1SwCtdPC89CtWT2H7g4r7F2GtHKJy8u",
  "key7": "5tMsE1bYJayn9dx9GB5JzZkPL4dTCqD6zEdpwNkE8oXybbcX6muqWoGPizZ564eKMBo8yEdDhbkVjJdtXBSAZtYu",
  "key8": "24acWwUefV7FndeovP4CZ3fuam44h64j7LtbwoyFHsUpLmrKFgf4yt2GdwnhjaUYGJ9dXGBYd8xWfMjtsRFXGV6V",
  "key9": "5K12mnwEHqQtjVj2Pg4bfwHc8iCZocf4eEyxpBGC6SSn2FTCEfTft6bTGxVvL6gBvTPjSfrPyjSF5s6R5Uy2nkrQ",
  "key10": "3fXbYtenKY2AfAGXLd9jdvwVZGctHk4hMPzv7rehT8HjgXcyGPYcr548b2dor5fESy34knGzRkQrwSSwWkf9m7JK",
  "key11": "5QVaPon4sjH8ivpH7xESh41oZHFmktQDTsQSGTrDB74u9vZGozMExCZre9s2puFZKhkDf2pYiW1ns8ATMYqVmQnq",
  "key12": "4MbqJKUzotud9WwpVaC7q7YZrFw5GYUkY1uYzXCfqTeZR3wzoGMd8WgLSZFSLMweDSKXgBZkX5eE3VPS4fRU5kWK",
  "key13": "2QF3nzJQvAJFczbWkJwCB6JREsMDSnhobtnP5S737JTYpV9HD2uXuDfR2QVzk4TCtHHRoVw3fUAuifJwKwUwUvL8",
  "key14": "5iZqP4dL8WptdwtTs7m5oLXfxkgJ5CKWPppiRWu5Gi21mBPfW6bvp6WVG3Lu6L3AWCXkvPdhnQsgzeiJhNKVkQmG",
  "key15": "2v53PtqwvBXvEGbXEHZZ1zC5mhdTRCJtyGkTptvKi9tHUJ77rfzTpY8J9YQ48BgeGjdzALnx9NyX3K117kyKZNTZ",
  "key16": "4FhtZ4zrLsLVkipdiaFmLMPkPerb9NvJR4DMLoDerGVnXxXAWaGTcWWeQ8gtFL5QZQ6n2AU6RuZLPm9caEeuyjtn",
  "key17": "5RHGAGjQtZam2cE6ZPunnFxQnhBqvLjN59CpHv3VjiHkupSXSvwQC5bC7UVQvHMvBz4MjVrGrwJWbNEAqykWzomc",
  "key18": "3SFMMvTJWM1qarQ28rXQtAWwv3XVULogVT32qnXRkFJqYkSgKNZBtraNzsoShrdjXHfZqJTn1uZzvE3Uh1pTWnB3",
  "key19": "5EHQu8qJ6ywg49gx19zd5nXFC5Fq7SqFeGEsnk4YnLnSxco3xj3mBGxf1q3rGR4dADkU6XMCYWNd9MgUD7HR3QM",
  "key20": "5HgfPRBkNn5n4YECVaUzo7tRXUgdfAYKEJ9njaYXx8QvNVbRwEtESXYYsbEr3GLbr2qP3DLadh3RpcDvrkLyrQyi",
  "key21": "4NcrExJvFnPe6SE6ygBx7QTaBF1qhQmZu9EiRMPMfEhQUA965pexteqPwcNBqPDpy8RMvZFD9aQhh1QadWHEZ7cG",
  "key22": "23x5mKzn892E2Z4QkQf7CegPh5X2cSCp5huvS6GDPNfT1W8qKZEYCRDLqyNifN4wmpgo1kytPEBqV4nnhQtTUifL",
  "key23": "2dfLbG5e7VFXMCDJDs1mnJqBcsU9PASswkmWbvB3gGw7x3LAs11NitSHqxCjvL5jduofJ6aXFUwEPSt1dNmPSs4t",
  "key24": "3i2z8RJ5iLfMAnA5RcU6Pya6qtAaizR3AYkB3aoLGDLCiL7vFyXNqMe327yP9M8PUJQwqiAUeLEf531BasKhqgpC",
  "key25": "4HbrnFtRoMJ157pk5zQtzMK49iY3gn946zotcYgcqaEc2KwpDoct5GrMw27dy2KbFYFzXsbWuztFkt9CNmFojY9D",
  "key26": "3f2ZnkXQFq4o7vrNoJbeaBWDusuW1PwfXCnqWic8T6wVcQsoeRAQ79HRQkz4fPUPVTUTxr7xLqJr7y3Rc8zJwjZ4",
  "key27": "SLKR42NbWNCzss1aYEJBXnoS7Z6MQxnqb1FnnRuAZxsA5ZKJ3C4ECStXMKPxaEjVqtsfASSqGMdwLRQ6KCXHdTr",
  "key28": "trvD8PKN8YBpgYrKo7RdvY4NGW63WycDqTEkfCqDyXhjMxRVmT5oFauX2aeQzmtd3U4eVQULkDGkNBDAFNyZgdu",
  "key29": "4x18yoW6Wt5M5zmXpdJhZrH8weDAt5xY7XYzZptHXZfYiApRSV6Q52ZvcKgB92XGaegaY3DHXfm24wCFbhSLGrm9",
  "key30": "3sWdn73LVbzGfU3caVSxfxv66cYT63WgJ2QTE9z5P9zBDVu51WdDX6Vk8Po3tgu68r732NJRsXw7jM5PkyNaLckq",
  "key31": "4N6Sp52WWFqkNciFPzq7RNjG1Fu3ZuQmDyiUfUZcKr2BTt2wKtP48K4GNGLJ9QrBvxY5YHkHWG4x2xs7s7kXNVG8",
  "key32": "5Dw6rS7vxnagBfaQ6RK3pPzxCyr8MV3muYPT8jbPnak138PtLN1eFUdkGEudtQzmJJYc8aSzVxQvBFxT6cXY3CHu",
  "key33": "3y2mpLHPwqFRhj4HtJ93tXgzxq2hKrUrBfkEBQQFP8GNh3E1RmY1pmjFMDxwVimNAy8g8MCHErz7ZdZGf4LiNFM5",
  "key34": "5GwwPZTStMX2TbJi5Pgxmdea7cTMjbp65MZvxc3xtCw6r7Es5qo6B1KGtC85hT79uLvKvzoYC6iFxJ8MzCFQRdvs",
  "key35": "5irJuFr6XLGoZHyYEFvjpbqhTG4GwCXzpY5Nu57kJo7AM4zyzV14UN9DUxc12MsYGzaw3yVrA9oogb4AHqHCcHaq"
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
