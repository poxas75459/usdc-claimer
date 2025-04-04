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
    "8NahXUZ1PniJtPAqULeSnc7wwHCrWTZrbhRm7zLRzv886xWpAWCGPd929SJL7M71Tu8eZ4fRg9wxU6hT9EZuQbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8eAds3jpzHmvzygX8Vx1fPwuPftZxr2REMHNam9NY8cWyvkQcpK9sBUjHARJK6eJHeo9N2H4btpoSaA65z2LfT",
  "key1": "4rdVkKGHA2H42UyEjd7LZJ8Na28rAXCFBqQ5vHRgeThz9nTHzM6o5dAtkcDJ2XgNq96Gku7uTciqTc1gNt58Azya",
  "key2": "5gqLeh97jew6ftzY3DtspwUxAmd8a8xvt8Xa5hB2SDWm7JjbiCz2RnH6AixuRECPij2RYkbtU4pgV8Cn6yaytbvG",
  "key3": "3QHB6reiTVGqJnvRE9kxPRk8g3S1fzo67EQZNGjnSLc8SMQSCxtY9xqD5KGEnaw166wigN4khDuqZT92FddmyGv6",
  "key4": "ZjMVN1qrn5KKx3idpbpmAQX8SiVs4yiVXJMPWzRcps548b173VMo8NSfGuvKewRtoiTzkeyZhE5wn2uf7LygmcT",
  "key5": "5QaDx4z45yEuusQMfRgpFUX8RDWvLbg2JF1M2yQNRyHpED2wyKwsDuj8Bw7E2HApmmNeMwojnNEczq8NN1arxN9x",
  "key6": "5z3L3kYyJqNSX2WBKmqL96s2pyTJWxWf1Veoauak4B9doe96s1kVG51f3SvCmN972FKwu64Aq42fgEPhhfwK8YFN",
  "key7": "2NCLEQ7T215K8RDaoGvqMTPjpBqtHmv13u7zidhV9Q5YNfvYFR55cAKopTZj8gYBhMyBpJTwTMs4c7dy8fVux3Mr",
  "key8": "4QUpxecWzHQSiZk53Y2mgLsBG6a2DffoghJ64cVY9fA2H7pwafN1Qz4YmhmeebPNSXv2nR6kpvNfBxWrgNbzibPq",
  "key9": "35tAf7UYX71rKE1r3zwWWHBz2MeBcpUny9iU6VpSDHLhbu42PBwwXH1FYKK81kosEoTzuYYuamwyPE5a8zTN87Bi",
  "key10": "4k8Ndoe82wWuqJ8mkGSj8nnY4GwFSxqo4dRdKyaUPpCuyWULbsw7aZyxqLenve8MJgxfu1XECnYVnQwFKVpsZJ3U",
  "key11": "5SuBub6KFhvFjKHr9ZAW72htzCfZaNFGr4TV1TyxXXEFCZgnabCgD66TCVwZFSyhw1dDrDky9C7xaFzcvjWG4ynb",
  "key12": "3uXbWQRSZVpmFYGknQmmU94hXqPvR234YecCpq2pR2bTJEo6YrANG6SL1AP4LSg6upTUKwb9WNoj9wDFBFdrbbDk",
  "key13": "3ZTwFhMAaGReAYnefif7kTDP8vyYzek7C4rNiZyk1gjucZnij3TYdTqApgujRaS7fA8k6PqvZtuysysTbqFoLiYg",
  "key14": "2TEu4WwygcmiqkVEMPTx9U5btZQxuVG1hKBhrJgs9ZzwX35cqnKrZT2sRS78rFRhwxQFuKoFzrK75g2BGStDbPDv",
  "key15": "3UdAdRkFUCNGNvEeRcKBKovesYA9X4PeuoUW1Kq3CFb77VgD42fdVf1iLxtjFBsRHYSCeNbsUW9424gPPTuxCV5",
  "key16": "3KwzjgRPQxkh6MmvmxidNggrA7tG6Ub5eBM4CJ4b5iRoZzey61EfNspPW2vLnfpyY226zvjB2Ucx6ru3ywiXNkgM",
  "key17": "5NdC8mBVad42xjPe5PJu9N47UPTHNSc6PfP3CXyRkmW3aJSaZsgN1zEXU9FW86D9xdH4Kzdmjrrxi2bd6d7ePdpU",
  "key18": "3T9tDXpFRzd2Gmp3tqy5tFCdAhyBVjox6gfLeqUQtaNVJNVMrpb8tTsJBp7cGpwcTMhdK2c4He9giE51H9vpBUAj",
  "key19": "2xv3KbTBRRnYiqvnyRms83ZobwESW7E64GoEZY6XRU3T5qkPoe5tSJa5usj3wccbuH5KLt3hKDaVruBPcuLHdU49",
  "key20": "2er66u81PmQ2RKANyrTwuYBycTvFN1xdUUtka85sCHU5q3VeMcThKMVmkLGMRcXYjkFk5k755uX1j4XZahvwacbq",
  "key21": "4bYPTxY1V9xyQEstfjbB7U9q3NfJ7Fo9tH9SkvXPYYaCKNJQZgHe7UMfu7pQqeTiCNiXqDJGHu1xuVPGVPxSDbTB",
  "key22": "29joYuAvzab1nCFguvbSz7mTSv4iaGAhBNC82fVGHMNNcwPBtrqY63FxnxoJrGCzzEFFAGWN4vJPg3wVL9KFxgro",
  "key23": "j1Fy8jqdaQr3LhGMQcUTefa8xdd7ENfMLrKhdNo6oQ4rJ8rcWkCH29X7gmSQjtJjZDZgn4G7Th1mRewwvGd1poC",
  "key24": "1UuHL1Bi5Twc2f5Lfp58AamGYRzvUpACJzxUDoPW5sEqKneZYoPhv4VYs6GX6yj18zLz7Mwdb3wJmBZaxC4SMCq",
  "key25": "4Yoft4zDweRwUVGeEuo4mmJD7bFQAyFNfcwSQTQZxutd9cesgFRUHJEJHupb7EAuc1YhdTXJGP6U7FQHb51JUqHm",
  "key26": "3HbzmXEkWCZgVjzVkqCgdt6XPsogtBL3hvZ9gbd8KBKxDa13WHtFm4qYQEbXunqSFJKpFizuqZKNyA9auCvynye5",
  "key27": "4Yah8Pfg42CJM1vL3gccuopsMyyuN1bpJ7vtrGRzTFzTNDpGRkGCoJ9qFs6LXGSPcZRhh6Pw6UZysmrQakFEVwWX",
  "key28": "2x2NiSUA7paugfHWpPUi7qoYik3aCuKyxraimibj19ytiBE2oAD4kkBKbzotiHCiTeTtoUr6pLRfdd7DBHmA1Z9p"
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
