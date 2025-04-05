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
    "p1JxysydD2Ev5RxYR1Sv8DbxecnNysmuEXdk7gr37PXnGbX7qVGfP6KiGwf6t8VjmapC67zSo7GtfrEo6YqTAGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4exeV5GFPEh53iTwKWsfzZ5579eUB4P18JU2wjvurdCAhyDyzkmvp3dtzhVofhvzJEzkpB1ZMMSJgsmtau58zcwK",
  "key1": "TeAS7UV3RezCmoatDAb5DqntuD6rsnQDcwMzPnDM6qt3Y9Y6EbbhWTkvtC8DHvv9ioHjJ2GpjKzjSfW9XCnUCtE",
  "key2": "5C6WUvtVR1yU1AgBCbNzWNwjTFXRnarBbLo3TWjAz4V5f3rPRb8jHA9dfJ97oBPt1vWLtBtmPba6UrnwAvG7q9ff",
  "key3": "57B6MAabHikuB7TzagFuD9gFUHhTeWZsEU2UYZyUQaibre2TXTohpmuARBtmgpWJsCEo6DTsvrTyFXa3rRHgTe6X",
  "key4": "2HzwH2Nw7TB5wHgGY7QYW7XDXfjm5aQSNkEBjHQRR2Dz1h1c63ZRSBqJFKD7PJy2D4V1Utk4Q2ug2qFik9pisNQm",
  "key5": "hGVfoWKApuoRWrV9CqEK8MbW4m3s3hVG25iTcJYoAKjVKCiVgrvZfFtEGdknniHRoaq4t12TmFQ6hBMhx2eSM5U",
  "key6": "5fxtQXJh2JH32XH8eWv6xzXSA64WyxYdy2HaXXVSqXya5ifn2JjTXuhcy96A7ajJEErJ7wmMadhy7mQgf95TXcUo",
  "key7": "qWbzo2MyPpbe5BorfuZdWVtTesjNEX5bv4XNL2X6U6VtqXQntQZWL8dRfKwEG1Q9ozQFAcfBgJSvvL4bmMiQXoD",
  "key8": "4jN5u4hJgmrFJKffN3o374j9PiLNPk3JEiffmcLWMA4x5JgfBMX4zsnzt3EnTqyTaRBiz9pPaJJCa8dTu28KZLou",
  "key9": "63vM2VDapZ25d77S2fF7bQGJtRDXveWhfpJQLw3rbu3Z6575jigwh3CWcJY7CQM51aSFZg12T267G1dSyi31ePjh",
  "key10": "33QsmSEcsKjcNP7QgVDSXu3rxFScXEJuWmqbjSt52PCMmWncmkhM73dyEx1ouyNjz8ErrwmwnGoLQTe2Bnpk5o5V",
  "key11": "4KZe3obW6S2k54parirJM9Pc9LT6G1P8hw4aNjA9zTJ7AmLc6z9Yaa3Cw9oKiwdXVhtxy826QZ6jZ1C5rcvrrFKZ",
  "key12": "5hYXkKXay9HdhUEv91jEc6jqE1Ap8ga1sHF7hWfUMBBE3PWzRkUaYM1JKdgSt7QgUG4jjtTjk4Rx37ns5NzGbHJB",
  "key13": "4zkJSTmDps3EZdHWpff1wEtq9e8kWNZ9hmPLTqKzCow96aHSAe8BMLiJBUcXeYXGYnhZSWkPgiVkAw2corq4i7fe",
  "key14": "411UMxeaR3htSyDpeUvLiZS2ZoH6sXu3GS7aNTWKYRE4HDgh7V872noroDApLYHuDKyqCdjYL3LtnppQeiQN4CcD",
  "key15": "3LUyG8jBo1xmF8vvGqDSHyGpEDkQkqrW91vnKodimzzxoZoUtugM3wWbTsanrqYgXACMr5aPM8QaegqVsBWpwo6a",
  "key16": "ua9HGcn43sPnEgi4YBC8vJeADApCF1msLiaFjSecSN6RjXdXFvrKZMM2angmTxbX32NTYpdbjzDBTRqqifPJdcV",
  "key17": "5TRGxdX5CZg5ySiGCQH2LqFTgqLLsiCu7Xk3rd34snbthx47wu4X2seMbvCGCSKbiTqh9PuTnjaGpidxKBA5raji",
  "key18": "4KLMNaRuzDwjFNjJ5MygNKn555trd5GBEw2H4ySsiP9gbyYNtALLHD43tk8rPFy3ijeKKRoopCLYkqsUmMPENfoK",
  "key19": "5pJygsMRH8b8AmRgRakMyVga9uyFGn98QLuqRK2FEx7fwYiqcA7syPU1PMGepR9vX3KZy5TRN4aPeGNycKc5CBTe",
  "key20": "2PkQwM1xYUscEw7MCuwky3QH73zK1t2NkWDEiUMhumP5nyYLDEHP92uxt1naBPauuiFbs2phZs2m4ALa8nb8H6it",
  "key21": "3ZugYBpMiMjoSReWPwTBAHYLyhCB9V8vVuL8cG5at3g5f3pxw1okYSx3fEA8d5gWbckACpjjA7XovWfdNuXEF4os",
  "key22": "4G5MLg1hj9TzCJjxeszwTTrag7zbQ53qrMEnhVnPoARd6VXm5vFVjAi1z8kyon2Zj589xiwdLCTVomk3tyMetAz",
  "key23": "4JhQ3XW5PKf2Hiot4bZTyBNog86J6bQLv6m6kygd59nVi5VithwxeFTcMyXN9qo5WFX7a7gBQ1syPm5VZsHXMXDC",
  "key24": "4gLJEhSGwxGTbnLCtdVgnU4YMdu5mjRKRC15UN7gvBbX5KUEFHJcJn2VExTf4j27kAmr9GJaFnPWxK3MugqqJmV9",
  "key25": "3uEaruTyBo1AiYgv3uXgE58V2X3e2SHjMgZXgfbY3MCbWSzAfFgAjQfawydATvpXLdLL33TEoosEeSrdy3tPydW",
  "key26": "2NzEEPY2VgaGcEgPpFh1bnW2XcAregU262cpandFEhzMxf5i8P79EcPixT3KdH34pDxYUctJoh9JJue2xc51dxhQ",
  "key27": "4CCYSpvDF3Te9yocssf49ocGjYECDcF9NSVcBhpDMDtub9Wcm9EaxGXd2ypGDXp1F3miS1oa1RN2jcXmXZMAv4yM",
  "key28": "2svZozgT54u8uPGaxrVfTP1htPTdQomNb1AbJrGqjBQ8EhLgeJChN5kHfAinGd1gRFkPdUmbaL53UX4ZoEMYPxBX",
  "key29": "31eXYXRjcjXPyFXQ8c6ksneWw7Exmsk8oWAFHch41nR78KG7zLRHQnJzWdkDUwqkazHga4ituEaKvXzQgsbHNLMW",
  "key30": "3ZmWwAmoYvbhqDhVmYwzxYwEpjRjAAHSD88k1xLksnjXW3L1LiczXfM9cVNW61m66dKetjcrdfR8YKCHH2MiJ1mb",
  "key31": "4j4PKq2KKPnBM8d3asgmAoenQUJVs8DqEE3FJVR4V3sfQ3Q9sn9v7dSFt77jh2ginbvtBXV8eZurT9191hEFhETM",
  "key32": "4w58acdT7WKJS3TpFqnDH7kgsb9LCWA88rDP31N4byPtyGdbhbN9uKkyc9W1nd3fDBCLZv6mJjwhXeTXHs6wT49L",
  "key33": "5mp5fvtNTtAW5GUmWMqavUd6psQYrKnmKGt5qtqqozVi9BF5c9rqFU5mQqMLivWhgBz1RzjtECKt3gwpPxMEDmpE",
  "key34": "5fCcy1JMUKc67nSvnktxzUkMa57Hj98USRFuRmHRzbYTusgqkw9EvPZiHbLbRcsG2NQWVznESR2cTM2xTZT15yey",
  "key35": "67omp9AKpt9Cgi3psAjcs7KUe7ytepEmJjzbMdKbR31yDZgrUpsaxGYWCLshzRda5F9SjrKsERzCXjCuLkUtntca",
  "key36": "37Wd3YNZC7He3dbykePfJkg6RhJYpJkhNbazgma2aEvDycHEAgWAZC3J6cdqcjB5qMmquhJcDbCmKxRpodxN8tCD",
  "key37": "5WsnQc9vyZsyUS1qRVq4bK5Ay5udiK2FY6bhGGGvYB98erizU3vBhFx6Q6bJmPwxLRpHMp6iuv9fgAZafeBhaB44",
  "key38": "2VFszK5cp5oyy4Jqtux8mJ1YMJJvpabFC2Ubhv85FyFqk5wkke63b9R36FX1rf44TQyBkFM1Evr1xgypAEdEAsmV",
  "key39": "vCbMENXGyrX9FgFM2jukmdQ49U6uGdhFs86hiDiZe2w5ynbyEWqHBFc5dU4fMBGYKtFfzxDymShE6oMn4vjVcfg",
  "key40": "46gzhuvMMeihUbynSSoBRHF1XWatCNQiYTUVsiFmzGLPs7YBvqP6Gwd68dGA8ngHwmin1CgzM8yyXSykxVXtnsXq",
  "key41": "56P1RjyXsbU2adTyxnoJXCYM8W7Yrz5pRnRaFkWMmEG8d93mDW9bkeZro6HinxjDqfcPbVXULwXQpEsud1mYkFgp",
  "key42": "3HbV39cuKwrhRGCPG67NRzkTBQGAR8mvzGstMpHA4RrRmMowYxAwcgzMXLbfB99S8nMXgR9aAeJbTomtdxJXFYid",
  "key43": "3UcVBbragnUgwM2cLf1VVqb8kkNoYoRrjNnpPCKJ6qtqt83Hh22ewR3Q4TujGKq5i5CAV8YFcnwbe8439rK1YKGu"
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
