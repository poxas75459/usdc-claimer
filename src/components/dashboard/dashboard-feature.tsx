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
    "48teB5Be8NPetSUy8V12rg4GuV1h8bGzD5Bn1hwXiceKoZWLCXBRFjAfztRjzH5KeQNtgH3kdcYizNrv7J64xkdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GPmi68ayQP6C65GGpVMfY3zteVrSCE9tyYwBYbuWm5yx1L75TvMQAZi1JAqAp6qbk6Lxts2n7rt9vyhbzhYEQFE",
  "key1": "9VE5PNH9XEXVwfiDDuYv6Nf6mrC4LAGnsCSUxsfr5Sp5kYLs4ri58xZfrvHZh6G4P3iV4YxyZWepTrbDUB6hdkz",
  "key2": "5CQfDzzYVwYE43dtyrNo2HuFvuE69wtUe9nscJUWxhbgePFqW82TR6phEE3NXccZR134hCmRypLfH5vbr5DBsSj7",
  "key3": "46SpVUj5tH5esrJwBrHyxH7cgXxr3m6K9UkZy1Nyn4ZP8CvBEhw3gWn8XZvpNiaantGusGRXxjkeNPrCpJB5Gj48",
  "key4": "3P7FNVENFuQqRs8E8EMhbaNcHAzjkGe5cbJnThZayePA6pamu72WneULAUPWjFDu86zHCcUEH7rJvVpyj8EQL9XH",
  "key5": "5WhfKb2CKM1m8qD5XsW4DeGVYjsamovNZLPNWrQHoosWbxs4ByvN3AkhQKpQmdfKKtbFpYqB8qswDWy7Lz4E9ZJ1",
  "key6": "4TUKVQkufRCzD8GBAifvD2njrxH4vprDCmaALPb1kuQi2wEHcptBRQnXcdLpXYu92pJKnsU32C9rtTvMiW3iyvoh",
  "key7": "5FPT9ou5Pw2twySTcf6A7GdY2wzcTQcug3X5WgYA8JC2sfsYm9vnaUSByK2QH3vKDybQrPecyXpiWMdFkGDFJ1vZ",
  "key8": "35LA8VJQG1wg233m1NHMd3jme3upDqLFmza3xZvrWPoN5LS2BuokRdAHVRD7mdQd2Wx9kej8yFbfXUxf2Doq4tWB",
  "key9": "2F6i1D7MaoRVwjCUjUFgm2dxuPeK5QwcSaXMqE73nrAv1nGCuwoPN1hLNvmGdU6YL5V3PU2vnLpGoA4FbNUyzxAR",
  "key10": "2mQsWYptfbFRmRuaTpkeCApfz1xG2mU2nJE7tSBfg5sgoXby4LgrWRyeRz6xs4qR8WF751nn9HwZR7URDw8aH6fM",
  "key11": "54q2426jr7e12yCsFyfJbifJbaMzVxSrtycGZMXJ9YU71Vn72nK3P53VKiKq3ksxUwYZZNPWWvYac88fW3Uu3t62",
  "key12": "4mo52zPQ35GY84M71X5Ypz2QGSehVd4oF1kmXW6DyNfvY9rNYiWc6VeDBVGi8JfFfJhnuLtwigzQmn5d3rtEewbk",
  "key13": "389BopkepnAaeHYBn1WQyCQbvKp2nev8CZbJRxEHNVf3J79oyJSLGHcehNJm23FLZ5gPcZMPQSa1QH2UGUr9jLAT",
  "key14": "4uJEuTofekoq1nRhPanvoWX3o96mjpxTApYDf4KmF7wyvbtX9BYDgiqnkcnNzhdroE6yWRmiwbKT4ZVrdcMR1Tc6",
  "key15": "36yodnEqkaD83isa3PFiMxW3zY3xJQai53TfWaaJtupTXC7j6sypcRRcdUCv3GtSsgbqrnr95d1W7hHygNLXgW9p",
  "key16": "2f3WgmrvRbspYVSFAW1eZhnHTSNwTqo6TN2bmJY8qq3B2yQuk3jDG6Cbje8k4zdn9maXuH68U3g5z316tSxKWGTa",
  "key17": "E9c36AMbQEvWVFiLihiDu8RqT4UtT5wMUVUcurv6iUww8zozkK8oRBR55i1WoF5Uda4gbrwGRkhxxJJMpTPYCcp",
  "key18": "SsDGzJJZU56PBrn2Djbn47ekryD5fXhiCHjVUWPGgDpgjSvWebsjgF5u3jdrwwfcw6GjN8LqZRbypSWdJ3XeuaG",
  "key19": "YEGSXuAjShMS59WT3MD8cBhiepNFTajaXz5r511ajADwnw6mTa8Taz1bC1KfaPbdZGyYGeMFA82c55kPK8eDkbS",
  "key20": "4XYnzGGnY6ysZYjN4dr8oNAWkiW7oeqVhgqBh6ZfyZixY3Yhj529xkczoou6jEfendzVwPJRH9CJpTi4SiBGKjs9",
  "key21": "2bYJGcB59CnZADHPLQVVyKkHAdZgERS1gXxd72Un1dXagnAd8yoZL52AcvFCNbkaBWfhzZxR6Z8pg5ibgVpkxyn9",
  "key22": "5ksX8wzprRULmBdLgmFnzTqUoJnLrods9vh3AhbgLquFTUabjz2rgNSQJczgQM99G1qnYTLWfZSwghGkXZ8tASw8",
  "key23": "2UZjmpQwfRhihywf9XiTNSJYYDdF4WU1g2b2qdge2jAbeCMAjGCks2ocFHhbiYQYLkhFKMmSBNV72QHsgV4YXPjN",
  "key24": "5mxPFbvoTfBfmxnNWsCePQFSzY7KiWJ8dLSdjqk23Kcnq1Gdghxc6q1Mo1NmcH2kWZhpuMMT5CRUqxYTb6uTRNHT",
  "key25": "61mw4RXVao5oLfoDDXmcK49z6MmzzC4V2QY4ZvFBD5pZgujMsJ6zyRyNjuZk2qKy592XtbeQNzGKnmhZWJQ53bLN",
  "key26": "525Cwtx2eqqwjEYHBzsoV29R7ePBwE6zyintqKvjAdJaxxyCCNd1VCZR3J2VumQ3m4haEv6VciozB7j12TJy96gL",
  "key27": "61cbE9R9GCxybBMUBBEdoumn3Cbj6uZvmgj9Gask1vMtZRUsEZBrzmxmoiDsyCZNjLgffmUKD683rmm2aBRCejTq",
  "key28": "sTaEXwiKBibFYnsyTF9aQiSQtaL1VVGNw7W3HRZXqEnXJevdx2NBPb4UWtp2gxW3S5Hzx2BbDmw7dKUbCo4vbV8",
  "key29": "2WjsH41EaquZwV5WpVcS45mctozgEZBD131biUbQ44kew33qqm2HbTyb8X1J3SCTh82c9fWXePh86AfwwBPXwLa5"
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
