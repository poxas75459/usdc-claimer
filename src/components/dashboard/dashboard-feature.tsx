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
    "4eWrGn9JuRknFm26Mpy8MJSGsnKUCvznFPYuZsNdQ4JDiyo1CJ94QW92wNXQP4kinQUYit9gr8x5nTvJoQHzcrRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dtENCE9XPrYHdGUkWKGHXW6CjKUm83tAH4a2tXpDYEEqy21SN1QiJN3XHtvasaEv8qT33mvkYSUytvDGXtdAaQu",
  "key1": "2m7QStdSB7a7H7N8PoaTXky8BnNzpCL8ZrFjc6HkXxoxd1pfEiV38qEva75XTiZUTTBA5KSdGMFGWExCTphpqkNx",
  "key2": "3uLYaGcud87YA4xgpWUbFYKHMKYTvXAdWpPjgVzcNvycPeZKUeY8VWBwirX3cyjatU9qZ5G72oiRgi4LQSAZ7rno",
  "key3": "5xQcQYUTGWxoCJfngFQV583NU5k2Rx5DNbb2c32uidSt85oRLMya8uFXdMrJeeHPpAN1vz8qEkPtp9Db9Kek5RR9",
  "key4": "4ScadT1DfW7NnxXZmqjbWjDF1aT2xxwvQBRC2nC7gjMfU1KTeVySuLmrof1LoLnEAwQ2GX2JipgWmjwjorEaeFeQ",
  "key5": "bsJzMd8vyxSKJJsoVsPQq9mkP5sTBtvA7JhaWgQZKV71Jss61UbjLZBuLHstzsffxkNBmtWpeEFmK41edRin2eb",
  "key6": "RVHbSv1fgATF7PtTpDMgYkHKT2bWjGttJJWcSiXZZrnqXERfDuDeBzEwH3EFyVw6uK67iAAeV5HvdtVs1zS56WZ",
  "key7": "4iQLDtyZWxNKxZULZeqxxgDBXE7Xtn6GmTBRjbvqUviQU9PyjpYe6K37uAJyaTQVsaiDm3L9nnyFGBdTRwnUkUwN",
  "key8": "28LPrtBmrz3KrncUTXnx9zGVDXo7tyrqesRiKCjPnyDzsXRq7seX9xfSiK94JqxyHd1oXJg4L5iB1xLkM6EBgMrq",
  "key9": "4MF8tD34Gtxgi2fR5Pn6htVvNwSdp5Qd5DKp74a7ciCVCsJYSAq2N1VxGzXeMA1kLuD8Nq9e4ozspYKLGHkwC6Gx",
  "key10": "38CQhoh59wBxD32N3UWVFrgJENnyJiak62yPjeeyjEqo6ePGoMfK2jrjacS62msnh7EfhKh615gwyYmoXqjnxtWk",
  "key11": "373H6htJTT8s5kFgs1489mmDJzoahQQTqnuZSuQoUjauJt8bhA5gMvWuo9bs7tEDy4DUQmcN5Tv1DsxR4aM9Pi6T",
  "key12": "3g555Rros4iSCbL8ZpCmatRUiRiVqExgQjsqaNyvsdgznYEpKKRScyoBcYXj7HSBc5audQqfsybFWt53Ed2uQEz1",
  "key13": "3TfQQ7N6DKTTPZ9xCEbM1dRnezWXTxwbizo6EQVz2Q4qekCFzdSK5KAyCENLx2MhpWvY5QwZqePwZA6GXawLcu3f",
  "key14": "44dogBw99U4jd3fsrVnKAUZaZn6UeTD55DBndWXHqr5B39GvyB9cH7iFFu6FEVcQUrGezwmSqRBjm4ttyDCB61XJ",
  "key15": "5H5ZoYSj3h5LSxdS6QVqkWnVX4X4zf7qG8jjXnC6YqK6xrCRBggW6z2LyoQfHqPY3W49cbswnWZBfgFUtueb5mpB",
  "key16": "3R8YZNAFbX2xgrSQTdoyAgbWMFkfZk186HiAbqi4fXAuhJUxYcMgUrtyexEQbtMbBS3r4bEpRPUKBxdejoPRkA5C",
  "key17": "M9zAPwEkGk2usxXFLYhZYEPvy4vLCz7VVyVy6gbGtu6vLRuLwPSznC3fDG6GqeaoMDXYZhLw7enivq9SPz4LBGN",
  "key18": "Wfzt4gTZd2tbTiQ39UPYCgQiHN53iorHrj92QWo5wjrzsMRpiWzPvsQ7QqL3dtKvJnj3BLYzTwzFd2mE116kypZ",
  "key19": "4WdB4m7XuNLkHCFWFToy7Yg9p1TusukrapLzEPJnoFsJRXmxcXWyHzbAFcMKeagmNuMHKXMq1RcsTt5L31TXjSGB",
  "key20": "3hmD2TzqqG52iCYcp1uoA38yvSLdkcK7FAH7bz3eFUNQYkJQLtWCF6EKfSunfAMF64c8QuEMTkSkujbQCChrDCKj",
  "key21": "4F9f6XJoerAG8Eo8WfwVrjtQUBmyPZZukFL2qSgzJiYUH3wpYpMyxM1GhuqbaofnkikwJcFUqe1xW7qXth8CUQEW",
  "key22": "4SAmbso9ig7LNDRDbcS4U5BLyqgebckU6SjebZbkKiibQ7wcYhH6peTBzY5mfaqgkE3faJu9Ta8ZFcCS5pbcfvcW",
  "key23": "4axGrRjt3DEB1gxjPUEYULPm2xgWALMeNxUSjfG4Zd2VxWHGmaDvEwL3ZwH9daQgmAxsBczchzgesYuEW7vLjX5C",
  "key24": "2HjjSYusNdhhKEAAZYGPiFtNWbEYWB4aefhKSmyHR3WqfX9XEsWiod4WHNB6NE29THzh1ANTgNtZU5Hgxd26NejC",
  "key25": "3115cqQiuGCMap2qMwdRxGz6xHdJbBvSRLuxXQrkkHzxRdH7TM9g7DM2wULZvThSCkw3MrzSP4qMvvSevmmXj7LS",
  "key26": "J4tLAkzpFvcZ19T6EipBLw8NgBqx58R7H6nRA7dtwkdHMyXq2jFMMj77QcNj9fE4fCqHjjh2w1pftz354xkBAUM",
  "key27": "QtW4kt4a38eQtxPMFJzg26c16PLNMLi7yD3VZGtNgcfWkvtcea6CyNB2zqNrUcZuKQ6a57J8TXU26gVioJXpYRP",
  "key28": "5fFEWYX88Zuu6bpr9JyUNd3AMx3uTwVjdkzcCCTir2jjfdfZASB5rtgkXGkGDUAAXjQnAPQYevqDwK6m8wU1HbM8",
  "key29": "5R9YL2JqaJpVVuhkDpB6vr61htNr9EEQnRyWDcbKkDEeAPsLdkrCgukRAGrTVZhshih3yeXkze6sEZqAvbJDQaEn",
  "key30": "51KngGjM5jTjh6b4we5SXpbCavij4QHaAewdwZEo8zWSUrA6nqFE2kyxyqnXedLvnCFcqstHgmnTD2uXBbN2tTe7",
  "key31": "4YZxFrGNU7XmvtWcx5snmzMYH8CrQq49nDBHJWXmuAVU9dia3aPTH62cYW8My5HWRArh64NQ1L8GTpfoaSFWjmRR",
  "key32": "3s6toRp7sx8ACXV6zE6jVJBDjHmiFZwfJ8QN2aifRAkrcRk7B5mHn7gBjvemmN9XNjbqLu8M4rEWyAcYPox4QuK4",
  "key33": "5tAGuKshjRVEUc9Qt7CmCjK2PQMZYxiXE9J2U4bm9k4sEpJhYCzYrwrRKN5jzcrcJogx2MLecqCrTeUmhcijx2JV",
  "key34": "2nQ1AGADmxaEEgwQBxp29G9eYzAPxtnYHw4z3UZcjqrC3d9p3dHusGFLDzVuCaP938i5ynT2b2Vz5ztXyMu15UGn",
  "key35": "4bnZMaFyuWZJNz8q6AmCJhj1ujbRpd6XTijCDLU66eF5D94VKW2pTV2nKzVS4shAZWao3NDZwc5pRawPjf2RspxC",
  "key36": "3cBRcitb9UfW2xbCKVZrMgUeRXHvSTdf7U1HEQJmngNr7Udmy4eJEkfymADZkxYP4zH72rTkTT1mkhZTp36GS6oP",
  "key37": "4Z3HT4AJjtpCfXV8qeVXLYzVrQy28QTNRBjh77sTHPduSS9cFV7kjmYJbqpCfEVJN5uGhP9qFVkSghXqTX9z3Knh",
  "key38": "ngstHVvo9AB7FvaaNuFR4wzM3qqejbH2zkAMSRpaE3zmkQngi55TkqdQVZCgAJB3nB99wJLb7ATvF5c4KnDk7Vz",
  "key39": "2qpj7j3RvHqPLGWLfXbfP9UbdZ5g93Ck3mDSgrDbB4pZy6RsrRjybWZSsteWvKd2rUP6RYjPFp7dGLXsrdUuSqC3",
  "key40": "25awyoUi9WANv2YQYH7egc1NojHnmAepzPwnLxPYcUaGfKDphe9eA59mHetX1bc3Wk1WNHUic8H6ghRUgDiWagfy",
  "key41": "5LRgjKTd8eEHAL1R9gpQ7JCsMUuVyoFENnN2diuhdJrXsdUxrjvGHsBXduGJzztTA73eqZKaHM2YLNvnteXfAed8",
  "key42": "9QvBH5Xh2SdUZUt9PVbaVLJcjxtuqwwmBN971FCJAPK7JvK5Ws1iCzoyo3cs7teKHQbKPQN6j4DE2XHJqYEwJgu",
  "key43": "tMSPYqfojshSZ46oBH2C9i7QknZT2wcmJcAAJ5FTebGBUiBHgNHG5h6GTPF2JDzbrmEqBygkqnk6LTh7gNQX3xK",
  "key44": "4PFpPcdf9764tECSeSB9YmdYkZh1M3UpQ5HwkKDubMbaBQqW7dgCuKiwzSSYpu15KmLak11wpTM44vu92Jmc5Qqh",
  "key45": "2JotUBiy8jyj37xYqvzcPpF1Tis9hV6r3pTgzX9L3PMoMVquoUJCo4B2uXNqeZug8BzPBvWJvtS6aNxf9aE1zsL7",
  "key46": "4Mp4M2gQYFG14Di3Md1Cq9tXDpkkohZpDuiaboCSbUy6jk7TtsDbRqHwMGyZitbgBgW7nT3vQs4LKYDgrHEZPf9A",
  "key47": "5NQfre3wa4M44MW7joCMXhrGMH4CdYCVGU3pVPRWd2HKHyp4MSZwyvYfnRRoHYcenpXmReKgwyh7BhdtBMH2GKHu",
  "key48": "2LRAvYo3MrZaWBaZ3e66yFSwnaXa9p2AaQoD19Q5aznHYsnDJkCuHsjsfDymCLawiYcJBmifR2A4X1hrZeDnBPkL"
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
