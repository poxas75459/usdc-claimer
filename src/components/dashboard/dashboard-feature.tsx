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
    "5Gh1jUEbjj9ztDVySUh341poJJM7N7bxq8envJ9ZNUnYxywrQ2yCpdoti9AZbQnpuiifwgpxcUXjipyPqp3YdFMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VA3kUNam7w2gdkQri4WJpCwR4JKUrRf8iC6kQw83USfzCBaMeYexWxowpmKQwuBgfefU3Nk84zCeYA8BqFUqudt",
  "key1": "dnNnRL1FYaWZ38itUZFauNsGEwmcYoM234pMm7o8hFiryXxghJviZhqqJeKvQQEKdJLGrEDw1uoyzCC1Xi4h5iD",
  "key2": "SnYUBzrBtJfuyQ2CWyFgQKroixE6UptUFKGbqcuMjnapjwfP7aBfgqjApbyQjwr4eh684CWdxjUHmPQZdYicVzr",
  "key3": "45fDQsqKzHLUE4EtjhgaF2RAirrTcTETP7dDHRuWgijHvkeVWzc1Lzbo9A7kVovXzur1rMGY4qpx96kU68SAGe1J",
  "key4": "evRfGRFcw4d4GBSakjvQcKWHwwmpwmpmFQxJPdWSCdKCwdGuiZQvJ6pQdmc66yTModSfQ2iCUhLu5codFKGQaLh",
  "key5": "4ivbSrHQainHo2GTrACrEKqRxmPWqkZisuH4hyyhxcYDxHuMBGu8eCPH34wMz8kszTydBTxuERkgh8r5CSR7anuE",
  "key6": "3DWA1eonHt4AAYsBbH8dQRHKubD26x9FX6GWUDnUR934WqVimnh1eVpw9qicD987oDQ3xEcWqcgJAViGjbYbbVq8",
  "key7": "3b8UKyKbydvcN3tViPrMSqvn5gyvYpkSaPp5hbF15oMfLnVB8UyZQDoqmxiWGDy3HcztmpwHQob7Wbc4VVSqYu2e",
  "key8": "4tpUHWvecV2DEue8ZNdsyGok172zqCw7jWcL8oDvNeaKV2Rro6otW3NeYhU5Pcw44bmWaaoRrdkCdoHHHDd3isBa",
  "key9": "3zPnFbPMR64ZonF7vFUXzV4AFidQHpEKXoRPXhMsfkcMmZqKFgvWkPkjdPjiZjtPacMjpHaCgd2i8qh796LanGhH",
  "key10": "3VedrREqJVVJvzvWuybX79t52RCFqc6fYL62WoagG4nWXW3YdU7rCtswWjghxNnXMFb3Sk1Yb7oAY5FAhUEMedKx",
  "key11": "wcFUpCbFWiBSWNWATTa1B5RTPBzFtyJ7rsCAYMHcUF8MQwsm44sEVb4jMwA7EtWcLHCB1Zn62nqLkdmtCYeb3mE",
  "key12": "4cDpWcEm48nAWotPcg7ToaPWVG2hiQUPubx1bSignkUFQQfjqkyyGv9RAaD2ExUd13iMLt8d2bH2WEiftJekaNVJ",
  "key13": "2swMLXcgu2XGH5cgXrAVYo28pyXPTspK7mZGKpeNKY2SYWb3ttj5oNYk8exD36UwYBL8KUGEmLjoZG5mt4bbVd9Z",
  "key14": "4zM56EZnGyspUg7pXdL8Na6iKjc5n3thvfMRAeVT8zzsx2uAV72U1j2tT5eUWMB9sMZsoGhi9DXzvPLm94kaAYRf",
  "key15": "SF6XzAHG8nYNeoAPg5xVvjdLvhBmsYvaaAG5kqwcRCqvCAKfD3BPswcPV9pyooxtAgNdqDuwiKv39Um21wMrt8L",
  "key16": "QXQE2WJ7QcS4U2UYk8gyf6yeRE6wRKU1251ufun9gqLgc5NTP2Jd1mSyTH58DLLm7USz2mn3BgTHyrMXHNdJv1G",
  "key17": "2oDSBizkLmPprWZmanEfzWE3Hqtr3KyEwvMFETRKSG6kwD4izv2Gc9un5aZf1hnz2HtECChsNJPLaSULDMYKQYny",
  "key18": "41brwtbUJbgDBZGnYCFDgjgRjHB4nfuBPotHv4XdAAiw7fSf9pYwMgESLixAx1YmnvXWkou1WssSJjEy1fun1Txq",
  "key19": "59pWzzEjrPdHZmj42txHeTgkXiiWig3vmw5iWUQ5jfsyXAhWPexuTFn6b6W6ajPrpviJcFZWnJmNm2D8FMomLxSm",
  "key20": "4v6TtTCExQxE5A8u9YZiNLSSJXGiC37L19HZtPU8zLCV21E5ej2Ggebo5urePPok6fnUBap9VaksuAxvsrfEZ5p3",
  "key21": "3UihKVx91pzbmZuWERmEqEduAKYmHLNEvy15PJE6wtXc8qbPqcyDgFy4tBum8aBKcdNJScMKZ1WtNLfjPtU7A2Ko",
  "key22": "5b8Fm3SujK9ToN7jZGV81z2jH8UPcTXvtLmr7bgT8hajG8H3xZhnxs5MWRse51Q9Yq3cMMhRYWGpdr4CZvH7PdXM",
  "key23": "25XAWzGqjBbAWwdb3whZ7Gu6A13SxJ9ihdEuD6tHHHkW26wQ5Twg7tTUioy2VsE19Q9hFm71d2zqZJA4Sya9qJ62",
  "key24": "5reTyC2kBtqWUCWv6rthJFfchYfACUiQLVzeWFbiDR6ihxdMcKEN4aN5q4Te1UDsT115k9akS6Qjh2fqswv4aQ8y",
  "key25": "3CSbLaL21CkUgmdXMrSwiQ7xPXVQzw5nQUc2s5PXVrkfmuLA7sziXFcUcYRB4CxmQ6oWTErum1BDw9Rn5i3W2W3k",
  "key26": "ebDN3fEXz6EjhLT5quKwvWxkh461NrfC45vMYnb8Mg5uT1TN1DkqEgWN5KLZCpQfVcm3nQXqz4zKq783pdnKRNY",
  "key27": "2THVUqxFLEndsGShUBoVjBvT7s41Y8mtk5nRVzJzxeVBTk97H3TyprkxnqfgNHA7niuvPFwmcwYyAWPmSKZeKeH2",
  "key28": "4Q7THZwAxmvBN8tYRitT7ukf4NJj47HRnrDTqZ3YKRQCMJsZUA177k7ByHXd2unvUQHaA9VfXnpBvAr1AdHBpWC9",
  "key29": "5wi7mecBrXKdWReGmfLxJLzZNvYB76S1nVPiP9DawKNhbVEy2ZHPEtYCgQNtGtSBPorTBWwNGkUozRM3kSoYJZfN",
  "key30": "4C3apVmCfpZNHBahuwCrjpaheF4efXHsktFKguPhgwSdavRq7k9GG7g3RM6fL986WytxhKew3Cy1W4aJq4V54fR",
  "key31": "4Km123mRJ2m8JGXRWjjsu4eTaD42q4qay1uu3ZgprFqgbuhShsgTwomxFGwaek4xNyn6TxbuCuV4gYjTpVCw3RvT",
  "key32": "4jFb6AkA8oRDBPcAE7uKXEqT2quQPosSwfAVewr28rA7aSzZuWxzw7pBdeqD63wWUJYsLfQ7RSHLNBWmipoQ1Xyy",
  "key33": "2n9HPQnzdz6Gvp2CEeGC7T4Xnb4jHYUx2QBwAZwQUT2RMtrt2jLu7cnWsonSvUGrCEkiD1xjQwQ2YZydkJyLwBoZ",
  "key34": "5FUKjG2YL7KY2pLdaPMKKhw6jngPin72cUAek7bfzGQKiJ2EWo768CNcFTsSJzULDec5LBK5tg4iDzev9nepftND",
  "key35": "4RHfPYaeJb6mnA6sD5P4C6YgQ6zxewG5sXJVxzLcdyfV9wozBvZ4HWWybxvRKHRRgQJgpTwCvgDWP9wHs9uzVyqB",
  "key36": "yUicXfh9UBtbuR23sLj83ABqbgseLCP919xojLiAFBfYpCgUuKaNTkHiJ85rbm34ApRCdeAxDD3NaF6T4Lm9Zmb",
  "key37": "TsEg5V7SE1hWsw8iPimTN8nYnQ3osippqRzk6r3HMUaedaWfAiTVzTwMNj4qQpv5oU5eUz74nZv9ThtwUAVmA4B",
  "key38": "5HLTdyrrr3dTMwby8Xj4NUDr2wTQjb3y4o2aV99RNJNxfDEKgyMn297N9Xn76gh9CBH6UTnm6qDWLLwzjhJHiTtb",
  "key39": "2ooF4R4zBwBoZZ6wunvkNFe3WcMxJ8MeVL9RvzTA6F8Eo3hGeoVtWrDYhGLoBCpv36vBZou42BiZNwpjaXXnPGD1",
  "key40": "2PrPdsZJqQLc7rQrna29diDcZ7K3i6ehmnpyGCyKUfDbxenQatQ57XaURagp5zqDBvoAJnRF9bQ5sxz6gesRtVHG",
  "key41": "voTh2cVE9PSsSLpjkEcvS6gMBNLggc2Dsyr6ryDgeTshvzZHET5ymeSGVVw9ZkAUQZ5iyyZgCff2uV9kieqt4hY",
  "key42": "5ujcRKcUiBaUfwdbHfzUWWd3WM1UPp35rzZ59RMvgqC4wgHuaACanu3ipjRcTyNAJuCPE5BJN1Vsjnjb7viRzDKE",
  "key43": "4raeesg3PMeUJvA21X11wyiEx52dCphz8KAiEcPGYQTBrd5Xz2n2CrGktEjzN1jMcUqPBUkE5zFecYHBQmYFkKHi",
  "key44": "6ZRTSADYCSj8X24651NvpzHeZ7hpRWotmypVRohB7VtJTxtTmeyMBXeydFZmZrsXQwi8JNz7UQCHzHnvUQqikBz",
  "key45": "VuUUU83Kt3VBeRnozLyia9Fu3WahdrUcVTq8m4AsFQKqmNSmihEerg9UKYJxF57jPfnU6rWjUAuj3aH7GLF5xqX",
  "key46": "3eXA7PeVBogtpdK1Dj8bu4w9VACwQVq1xHr3TdEKvu3CAihK2y9nBaaH6oMFTpT7bB8z8ZXGG2AQzvgNV85iHT5s",
  "key47": "3cwE2wrAX2yBCb9EnoDvQrWqeJwSRoozqUevYaa5VYymmPsc58edrBfPjb6TjmMczDNMeBSNJ1mkoYBEPYKoWUrb",
  "key48": "2BQv3Pn9vbDqDg7xaK7XVP1ScqYxTA5UQEi9EAXnd5EkUCBSX5t4Rf3oAny2uiCBSDvwjAehTyKnGRnJGXSRpJEk",
  "key49": "5tRFjqzFVG9wFshxSArExvKxDGuHiCE3bgmshnD5EZt8a56njtQ5zy7bTDpe1E5G1wuEZ18kGrEHLAgjJ7JvdBqg"
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
