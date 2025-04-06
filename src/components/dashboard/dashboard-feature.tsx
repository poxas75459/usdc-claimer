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
    "5rK59ZygHJi2A24KDHgsmdHhjvsxHjTxF7tirjNYgDDsrJbNvVmCmr5uWDpy7zdUtAvkBoAcUAnWtPG9mf1ZtmLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWg5o4ZySPRSpqt6mdgR3C89JEWbdKM3J5BfXury4GC72r96T6bL7qF15ZqzFtQUeD7SGV4fm1oE6JMGEFd6BAJ",
  "key1": "4rWoyF1CBiPw5ChcPE6yLx62jEkmLJ91jugC3kvdWLuyAvuEjPw3pA5n2MXauaMFqe5SbyzRMjdQhaf1LZd3viHN",
  "key2": "wgDqYzjPGSYu6AT4xuTydvegZXuXzt1263x1weyoNgdRvE8xdv1T93VbUUaHhbQjSZaY6czxxysTLoShL2rV6Dt",
  "key3": "4sgWGnNuh7jFsKEDyM2U8MYeFHNUaPK2FvWJALGDF9p6ksvWMTqn389oidirhXUqUgiMrAXQve8981EVyjErFnqF",
  "key4": "38TdwKLVEZM2x4C5B9ZNPeL6KskEpHKetPz1QiAsYtESii5bjHBh2ToroSR1iLnu2LboRyjwDLvnQAK8nXnQNdgj",
  "key5": "2NWPT1WUVD4LJHWbGTKiukH6FF5wNNuUgjmxEErb4Cw682LFtatxXxJYYxs4KBxL6dqkYFzPCzMGuBV8RH5oNdA2",
  "key6": "toN1ZHWszC2X77gz832qB9AaUyiadn2e55Kvdi44Nuk56aRTPFwzuvvdR2v12n5Sp3w582tubGYUbUiJJ3ukW81",
  "key7": "3FMMPEnNPv3nrJBqd1FUmkE4WDep4zoFjwvdhyoJSaMcrKvJD81XFktwDfRYQ7U7Fpmu7YUr4UApcMtm4ssc1sUJ",
  "key8": "2BKdQn5nqzChsP8rf9FDhs3r4eTSjxMEgNAirtZrv42PjhoRW8scEu7kuaHdQ5g6fafawUywbtgbYieXY9R5eZKG",
  "key9": "2F3eoJdtdsTFicNdaPhU5gDmKjb7Jx3eerNCYFYyYwY32YWUMBdwfUEp4kj8oDjFrzhqALYXqSWo7etJTwvXzYEa",
  "key10": "62YMaaSR18aCf7MkZMbJUGwVvwKoYy6pB9T45jFh7WojnUC1QDBb9BWhipdZf43xTX8arjEv57f5oXo1DGNST2Cx",
  "key11": "3QuZPb3JUV73G7Jw1M3SE2BuLpLtm7B1jxsvife88MXkVYsWqPVBCtQfga41RfJypKyrxTohno2bCj68br3MPFDA",
  "key12": "23Wnxw3Ysa9WYQFNuJ8WuDV8JXt4TsjExtjdNLv8q7eAZwoc782fi2PaR6Lq2ZUHSJgjMPWkeqBaksY5rBM13WuS",
  "key13": "D7Q3bGVVgVtj5Yy8NrPEgWmBh1MozWys7MpNRPFqFZY3XDhYxHnb9mSaCbJnG2YDZW7HNfttGBjt1MFm3tdiDg7",
  "key14": "2JVVzmeHkWoApJTrL929RJ6LyUE7BB4Qgo5V8yZ49UQEqaNzzwNduEFZGtkD4SFjEjDpDUqSyZN87vh9Zn7WJ8aG",
  "key15": "5w9H9dWmKct56kL9uuHHMiXhT3YU6cNrCzNWVLXH2gJawe41sxKgQrxwRDpAGUFPTuNPTJ2srM6bHruzE1cVCqzX",
  "key16": "4dRR9Rhi2g4TtFkvmxdT37Zcv1L1FizTSAZiz5YVy3fzLYiMdtbydxScLr56kMoAmAHmqbHfX6tWTU7nBtKrvb4X",
  "key17": "3TQgvCJr48ddPTLZnFmiTnS7Y18o4qb6HACch86RMbEtmSfUMuKNmNxQGR8PXpct5oxJGfgKHTAmd9JJwiQu8eDw",
  "key18": "3hvrEbb6Hwknnn42efnkk5DQEK3oi9fb23c7DDtGZXTHiLCm6fWSR4gFrvRS3BRWVKZ8jAVns6oEG7MSzwv9GQ1X",
  "key19": "2imh269WucUQetVQTxKGfZ2XTNPBC3vecEje5nAyGbTFsU7AnKN38fAxiHysFqtAmtMzWZWdCnEu4D8Pb1xhacfh",
  "key20": "qQtZfSmqiWCFctBv3LHRLFBMhsTh6TERR11yXjUh5ov8V71PbhJJ1cjwSAyhaK86Y3Ben4YmDLsJgZsR48bK7zE",
  "key21": "5KW8boruaLhrxA7kK93fDcCRhzT67mKTfydPYosqYqn73dQ3h33hx766QCqnYwXxrFFAENbGgp7Pp4K1wpGdXPie",
  "key22": "2m4ZEHkaiePAT8VdJSBgUWJEY5rDQEZtbMRn2zgNcb7JETcyp3DzVsJN8XSMaf4jGNhKpV9wowR5MkWuj5EX651m",
  "key23": "5angsxUQwcRXQPkKYrnhsc9DKohbUwwc3i6S4mGebstyHaGPiEVApmuE6zsswHMF9inDqMAC1Eq4z7vF7hdn5Up8",
  "key24": "79jF8tgKHYgKf1QL5SjrwE5wenoNj1nxgeo2on41moRFwyePjGrdZrZ9fn7JaonXvgp7LpuhC8b6BQfVdjhgucF",
  "key25": "5PtTqf6aG8Wjbcndz7uvW6Vj2fajFxqVPMhsUDhbEWeyEVoPMYDQRABcbnJXCZnzXmmD4mL59QedFtyL33hGJP7L",
  "key26": "2ZCo249fTnBzyCU1BFdDHUmmevCLYvuQyxGohX4pyfyJjX8dTzPSqU57CzcfgR6FoBiWxvQMcBtmHTaRcxrnZAcg",
  "key27": "2CAgjyQAjiTAjzKySbKprF3EufiuZeQVxTaf2Tdw3UPFQWZ9tWHPp6QVPkDXf5cb2WkHs9zCuSWSR5S6ahCr8482",
  "key28": "2DoCme9VxUsGxrM52pH8ScxZQ3Q3Fpafaup4JsrpzdzGgzTMjWb2ApWKZizqc7chifwkPi8h3wAy8ioErdpHT4kb",
  "key29": "2aXUPLbs1twQSFZhpEnBmM3MQyrQhLTvRGXiAdHs5iieK2fimQCUkSkHWdUQ269n2pwg1AxFra1Hc5oR7J3b5m6b"
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
