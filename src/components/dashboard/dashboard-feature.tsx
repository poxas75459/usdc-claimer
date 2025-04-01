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
    "4oTWdDkJ97v9Fn65Tc1xgb18bqE3AMmpNq5CEZDTC233ACn2WoNPMJQUrDWo4LaSFBmgMcCu7vM6C9HPPUMLCgg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26G1ts5jCdArZJVuJBiHwJyiySB5cwRUfgLntpmKMGUEpxMj1Srj9G6UZbK2YzP3GFm3FEJ6wkFxQj62RhCbfoXM",
  "key1": "2BqEnA5Sp8Nejto3am7tptimiCUiUC7GiUtFenekbDDnuL8tCAUxekSpVkToBrdMvRWVwzYrBk8y78RRGntYgbgM",
  "key2": "aKpAVneLtNeUaDECUCv3ySG9N7nzUjpkELu4AxN5owhRqW9p4Mm5pcxipMqtYzwEmogqUuAniv4fez8BtZXBidT",
  "key3": "dfux4LQGseGiEfptreWTrx82hubtjRSKb6PUkChTdwMUZ2BPo81bCYZoLy974h7XwE6YGqvBkLdjZbBG77vAGRe",
  "key4": "2wJaDwjcsJDGMFg5TAH44huGoky28v1wF2KKddwsHp3zL2rG68hW1PmCFhhKpceUqTBSWdMF7EQRZ8vhikwLtmQ1",
  "key5": "oEuakUH8YDzFV8N54nKQX4fjpw5ZxWcYib3kTADEGW15Ms27wThyBkbDHAifaw5PsDjs31w4KCFUmk8xW2g7EP1",
  "key6": "2UzkJH912aNRmcgV46P6uS8ojZYsavR2pWnPMiMN4rFdPyAk84XfiBeLwvbgiS9cWcVN6trRFk6kGtL9K3zEcaxD",
  "key7": "2ZFHi7Je66Nm8LDaDPns5t3dXKyNNbyzS6L1xqVvo2Cb1E4Txbanp77AZkpi1kFi2Juy97YRs7a7p7St66umGLeq",
  "key8": "2fDyfUUDiDzyxssSWDyYdkGkC1Hw6tvSDUz5X61m3JumGoz8uw8e9QVPYNcdrafxQgi3xtVVF6jJWZBwLdaAYHkR",
  "key9": "4Kcx8iQEQLuqjxVpifUmptns7Jy2KefFvuNXdhAWZqCQag81DCC2q4kiBPzpkBTUhh6mj3SR5CG3iTnVCYBxRG14",
  "key10": "sNPV18qrHaLBfBCaN6LYkZNWwKksjEofvn5LK7Aq3XQ56Ko9h6o2GsrRfQfoaetrjMdeJ77VWHCYBAoVVq3zoLQ",
  "key11": "3ebozQULxfwkjViDNkbvzpDYK76cR4uiUgpAWRDpz6Xq8GGJYfimtVeGLP2VFUWEfZXCJZ6TB7aa3HRmTZWfVPzN",
  "key12": "3nK4gohbYJKiTTHdfBdfxzbA7K6w2pxbuKov6q1LhXEkhge2u6fDz5CkrYodjq8JKtt5ajmNrhyd6xTXcA1MZnjw",
  "key13": "4Ns9azSuJQ2TSYeMc5H2YkGyU1rQWqynVedjds1VNfymtDez4Q5UmjPHg3ybp8orbKXbBBGGCEoo9Zis1iujQzAo",
  "key14": "M1mLZ8ct27rTzTTxiR2no1ke175cGvGK123ifKWLpDypCXf1dXbpwSed6M1MGYv1Tncz2JU3uQjDSPZ6NdJvAcD",
  "key15": "wQURtmAUq2KZcqvypaam55u4RatfSvV2o8AWmt2FwoPAYFzdAqMSCHaxsywZNHiNBpayrnQL7MVZDqzTUBooM1q",
  "key16": "4C9R1LCBJTPAEWMSthDs2f2BFnYAtMj4ALDsa1yUVydgEH1a1bGUfKVe8mJsvH8tBLfZ33fLPp7MHdfAJjgr8J9x",
  "key17": "xu2LvYaPseK63gJ4tDMvYj1wicUEFed7ida41Dajbzd9ZGLEa9JPWsEVo8HUj9jUyHGSRa9LwXTgrpHuVPh3CNx",
  "key18": "5DMJXRYbso1iEMAu6fbbNsiGmB4f5ciTcWU4diFmZB1WWdByovmbv4EDsQYDGJVnVebaXSa9LKUr1msiamP54tqc",
  "key19": "2RM17h7qJKECWnwJ1oCxK6VbumSSCG8qqNFbTKQfXZRNqGrksMdJrZudNqYb84cEX3k67w5vfBaW1V5FRKdJW82A",
  "key20": "2WNx6MttKLhzuWybPWgre8HqhGpAyVsxQyWAFYk1Lxhs3GHKzJiNeQyBcnyi65jn9iZentQgXKsJuVFDaphsCxp1",
  "key21": "4ZREaCDi9sPJ5dRKWofDTA3qn5SojbvcZgfBM85kSnJowhRkVdfNz6fvnzuZvWQrgSveVESKFchjeZoty9AiBYxW",
  "key22": "3bRuSGaWMSLtXDccEnuFeSLDcjr5LvSeTMAwNEKuz2Dy65dSjRr7xdoZtLUxWH48JLLdPGmx85AJr7c65uSDBu5w",
  "key23": "5UQXrPsyPcibwP6bWSQKPcE3mk2G3KRvxt9n4eUhKgX72FwEmLQpP41JEBpYPBQ1xFzquBd7fpJYGWzREm92wTST",
  "key24": "4gEJYq1Pv8jM4fH8HgzrZkrKMwnigePDPgXXRt74EGwXHGZvVEhFH74xQFiDf8te3mrKRx2cQ4EZ7Jd6S8gErixz",
  "key25": "3x3xbd9EP8gPqTJoPzSAcdAuQ1ZPaGcLWqsu4sax9ai8yr7xZgPwrVNiYgZQoUYaHRne43JBekWkX9Luxvc6viJL",
  "key26": "2oHMbttigGG4P3PRWRBqpUq3WXk1CFkATL3c9yyFcVBJ8qDymd7mmjXqfTu5V8aSp6yPVT6YSgcy8yYAVSe69TE1",
  "key27": "2Bcq49RQevV3h3JPsRjJ2KuWdyHtXJhx4vTL82ZAzGqfKrW4vSmm9sqArrYHnAM4LvVkcnTsCBYZxqdsus6LfcbK",
  "key28": "LDfftDjqeDQHuaEVAHjRb2aJLWtvv8sNCTYV54Yt525u45r1MR5HusXve43dFBpVupgr6h6xjb2wuihgShCjEEg",
  "key29": "5AeAfZfqS7HuuvssPiHiziALTZbZq4h8cLeg7eUdcjx7WbM6jwCzuzyq2V7uJjvdVz8mp3sPLkHDhF1RAsWJWUcW",
  "key30": "5PQjg5Pr3DU7wR3a2t1VGL4gPPfgLgvfavim6Y9ivx4HRxV9Hg16CPE2ex9dcxPCBrv44g1BTHsVHE1fWUZ3B7Rd",
  "key31": "AWfVwA9AzNsS5bAd7r1FJWsUiEQEZgX2Tro6QEkdFA4fGrTh4wU37WM9rJm9RT32eLYgRjeyn5rrc1sJq6tvJXg",
  "key32": "2ypTNao8sSpy5XQvXb99bcDbu1QQmNE9PsbrHfZrsTXt4WYUYtkovSJVy6Z86QzmiVoU9BpZ9TaoHoXFWzprhynC",
  "key33": "2eji7QsmMKbcFE7XSnaNL1orfVdBpnpcv3sw2zEAC6WaELJKyq7aCTXs1TtJENrsSpe4A86zPP9yN9JwPXSG53JY",
  "key34": "5hEULrbrDsiZSR9KkGbiqETFyPDmrszY95oEqBbq62cMUzGzQD4wCCtcvJvkqDKaj1AwtozFj7oEkAHzvbtKMDc9",
  "key35": "2hZjmveYQk5iHRjxHEiRgamxzzBrogz8h9XwYMQyUxmcukpGA7Hi7Dmc4bDcWKacGkQ3kon9iepkScs1eHJNhrmE",
  "key36": "k88PRFMHX5PLck7t9CErY5vhjwn8emvhA5iuacnrnwnjHSN9jJAMU45GbizytrAHNaPQThyLPABd5U6oEiF3xT4",
  "key37": "62YwmkWgWB3iE6WzFzCzk5JeFun6UUD5Hn1bPfzb9oK3CznveCaJjf9bkJEDS7drpzpfi4f5PPQhV4ojpRN8q7Hw",
  "key38": "4rrJo6tLbURJnE5g8qC6nMMvVcXC5EynSKNx569hrF7ut12ys7izPD7EZ1ugUnzuhdifQiQi5V6CHvmwscpKQddE",
  "key39": "8FNmuWVts5inARgKSFgPBpdznp2uvn4YXaSMLC3y1G6myY3xqcwAxiF7FBZovn7Kg6z1xqzgmCyAXN9cR4xcSYn",
  "key40": "3SSDZE65wRSpitrQFse8Lt6CroJFyydjyRzSdJxndi4TNx5VSMrsZqDCieGr1u6VCyKEbyhjgpSBh9vHQRcL1bmy",
  "key41": "5Dz6n7VRkF475BEhqshwmCB1PGsy4U6GBSeJoKqg2iFfS18Tq8qQVdPvatJgpm9RV4ewsfqBGZ57eQD3C3u48gGV",
  "key42": "4xoKipN5SrEyp2wzbhSjiRcVv8GDkuKveBuRdhH2qindiqZ6pKF5jgETzYeDHY8tKAdQdFgEmdgXnY4maDWVLQRb",
  "key43": "4pgpEn4zj8hihL39sgDfAiBXcvSFeCAKrj4bxcVqS6MpQGq7pHvExZybbhrLYM92Yqa6YQ67JQNB8vaTvyMjcJ3M",
  "key44": "3zsVKLfwxjBTg4GusESsoGemhA7ETn5rbmNf22U9FQ2xrHknNuvWFqJZDQMuWGcQmZActpfbMLnhbMbPmp6CXj5F",
  "key45": "5D8esAdPcXcr1MDJKKfcDuCNvWAidLYLbLebNrxvLrRon6a7FusedHpa1AHM4sZcE3wAXe3imqKaTDURoVTDrRvz",
  "key46": "56jC9tCg9xirvxe9Nxnf2Z4CMjEuaibtqqTjgtNj9uSVB2dhgF4Q66A3yafom5WAxi2N8DDAR1BRstYbDHPWgF37",
  "key47": "3kx7C7VQnrS7MNrXmhApmgCmhyQKrdjiQZDXoc5bGHmdyPQxMAqnWrisekXA2Lme4wUgpXuj3ZT1sq9kp1BW4oce"
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
