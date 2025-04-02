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
    "3EcaMgKKKMC3tmyTKLSJzND1Yo9rHrCtErT4Hp5DgXHCVCWZSSYx1xhxEd1XgStxNcwJzMbPzVTxmg3cR2y7a6Fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b3XMjpqftmXr7XJ5ETsw4mZkT9YuHvpWdH71rCWsDwq492vzPpWUu4iZMDeuvj8deNQoXmZ4JCuki6GfCR6s5qP",
  "key1": "24spTDWDhjXbhsNJit7NagLdHiyth1RHECKExPnSv8hconeNokb7czqDYq6N3yaiezkVaPQ9fJfUcpTJuL8LLyos",
  "key2": "3XBkAMZFs64xDjgRyVbHk8LhJUovRk3nYn2t84bdwoCjtRUtV1oLaLVKWB7mCd93qTAp2neG1hwDiEiARXedAXj9",
  "key3": "2xiWCfczeVGPDbErhHChvT7m6dwEAEng9KctPDENRMdupQxPFDfbnVY6oEwhkrC7mMpWraBFGNLzndHvtAr9RvAN",
  "key4": "23BgSMQ4asmJqddkYMgrfSGa39b5i1FrJZmBfEtZyPMmdx5y1HiPx9LM2ecWdByFH2KAtmcz4rum8vCDvs49hm4y",
  "key5": "2dg44zEzktTiNxcaBnbMNUw2SZyZeuRHKbp79rwy6MjmJom5SeEDokJcxxerNviMsHyjo2h92k51Xgr7mtEz87EY",
  "key6": "5qbsWR5iKSXdFrPZh6mYpjVGMMEruZm9hWyjv87uK8qrXioNcZwmofWM6NCuScrVcoSof9f1aKxKxtPXV88QHGtm",
  "key7": "QX8L77vaBc8rm6qN1kYVtLi3DZTnYyhrwfkWeVXXve2HbmN9USyaZSzYcFiWVVqZ2f72rDgsdABJpVpZKLb4dHu",
  "key8": "Qs7pasgckn83yhYoe6qsAbV5UhFTT9ypkAeLHWUfwbxicNK6nVHQAd5anAbjSvW4i43qra4apbifrymwwtmP8pN",
  "key9": "2gdLsuunnjpvwJNqdmPkQwDbQjuGVo9mv48PkeBhW91LMVxJbC12tv9h2pp2xHvRZCCReYrSxYReoYMYiPZ7gF1Y",
  "key10": "3siFbUMtDxxcW27NHZnE4qGuLh3WLQGtb2U34Mzu6gfs8DB3rmWvVq7TXHp9gam73grfWfvj5JjCLx2x8DY5JUKA",
  "key11": "294ngnoF2uS8iiXoz8awmtnXFrfACV3U7Vwb8NB7cqjftMJVMJjo5nUcKW88bP314FZxdPHQRkKeScAXYR5AM8Ng",
  "key12": "2vnGiRfBfBXP2MZnkimhB5ZZ9iLxRRLrGHhCN3diiVNM4BQdMSYnJJftuso8RhyrGkQmke6qaVuNk5yXsBJfCRWS",
  "key13": "5To59oGEhAKJ6aNnR2E4WdR6BDM5i4TPriDLCXziWCheoSKubyx5pBkbas6SFgoTSPyhsrhne24bSM64wbx6qLX1",
  "key14": "4Z4Pw1V2atW4JT76xDwdw83mddXU7udbtjKmH6kSisZavoyMvVKMFPFWTe4ATn1zDwqZ93AdfYzApcoke89DeLjS",
  "key15": "2CrRANq1UU9yGMCbY378KkEn2bXEF3inuiRq8F7a3dBL9STfo8EbWGcoqwinzWs2tcwTF334QtvAy86Cm5gMiyTc",
  "key16": "2hypgdBYMw87XBUDSrxGnzc5y5togk22WyesQ4EJRtfYg5fghWPBowad7VVT4gKLSuUMDbcVTxmoMg7139eMnatj",
  "key17": "d3JS4Vrx6kqgkYHVvJD98q8xH6a67Hi8nWLTenwoU4DVMMtzkmEYQnAbmoU3vBntr59Kmu2b1wp7JxJtoYnxQgS",
  "key18": "5Sf9XPXNtjFjjGdieJB45JUFUxzQvUE1XK9p9uwrDmMi3vFnNUmrH8iLQ2NUDU8Rm6MequJwTWUy3jmbJk5wpgZp",
  "key19": "4nLqkaWSoc3wCDam1Qg1YZD197u4mKK3H5Ktcubt2FTNUuEDzTh934JhtUTVN2SE3iNa855Jezh75ZAZ6Y52ZHKj",
  "key20": "3yZxGbCQoKBPpTTV2aNyT6TvzurG6coV9P5YjS2mvJQR2R2RZCx8ATjZyJpwbkWHwXosfApYATQ8b2CVHTFjY3Bz",
  "key21": "2AjGkNXqQmzHieKuhMQrQUJtvQGuYa3JjxVmbTdd9dPbdMgxP2cETeiBP1q9HvaQbZzWp9d8sr8KGrB56gx1mbs",
  "key22": "63L3XiwdHVKXB2FF1NT1cMwGx9xewmMahHpzbyZ3t6W6pCeaj7rSa8Gz27cWwEVsnvGytH1EDa6sE7HG9HdkKyYW",
  "key23": "XcSv84SztW8Vc6wJgWqHMKPAtpbSE5Z2UpTMjCXZFAALCpyku1JKQsSYrghX8Buus9D2zVpHQ3z8eYLnvBQspcf",
  "key24": "21exHKb5KsHBr5TZJxoyKEWSJnMzuEFZ6XiiRKJd3R6g87obJuvULYp1VYn3CdApa3YB6Hm7Kbp8nhjT551rkkQE",
  "key25": "2D82Wa8ffF9Ya37jG4aX73CikMXsmfY6mWfCwRzEoTSyvkWrYzhXKkNHtxszG1qHB2FUw4N5o7FmoEmxa9t1qmEs",
  "key26": "24HXzmA3ovscgwn3QoxdRffg7BXcwJNuShd5dUAgWF64xApJsJGQdgsDHKg4LmRuJQ2m47dGBHVWLKPCVMaatkhR",
  "key27": "5SwhYPqoY3kcoX6arikcQR4sHHC9HS6VGFv3qupuEiJcLVutgxSPhbwNDU6ZdznrCU2rsAAb9gd2VgJ67a7jwP96",
  "key28": "2aKdQhjzGqC37HeyF9vbBfWFUqeE959qiZZGsmD7VPd3b3vSwFD2rfWqQdEHUadzwdorNLUy8P413qddZireh38i",
  "key29": "4F5Q11f3LXrxBx9gjNLHhxKsASZij3WSyD2gaEhqm9urc6i8p1qfupGBBRmW4aabH2iLiMGK8uHfTpDv7rQoGBBk"
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
