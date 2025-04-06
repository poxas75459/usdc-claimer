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
    "31RMXay3ZSe3CdFo6kvYYagPvMawNw9nFFnxxG5EbevwdSdoH8awSG2hcugmLL7WJat9STSKieU4TuYV4TWNnrYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FNGFcTP8sEyyHtZ5oKzy4mb7NyFKRGwTUv9icwFnanfsXq3UV29v8hhrPGfvXwz12wmuCJPykDaYBQwo8gMGyiS",
  "key1": "5miif6jw4HLc3jF4jtkpWLV7SoKmpD2LYkuQ4hin8R2p64dyGgdRKL8cvY6izHWbYY8vLhkcycqcRAqqeCHkTGr1",
  "key2": "RAEPsmx3mCWxvGPjqBDVoAVr3WnwaqUZnpzwBAokHtj5aRKx97oyqSArsBK5UEiiG71HntbYfnBEU8RmpvRxbvz",
  "key3": "3CFufghVi1yz7GGnAGgvEKNC9kwtyFwJxtzxtxcjdy42FXdCR98A6rXeh9QNg1cDdSJNkqTcYqSMaaYu73kkNJ33",
  "key4": "5Z7he7rpUT18YZb4sCumbdGhL1dd1N2N56vFBC5pageEuPUTCbzdeLo2qtKVUDPeM1x41X4VybQx4CTwFtcxSzVg",
  "key5": "5Z2br2QTxvomRynAGsb8E8MghndNXSND7P1JVfkarEdcqjtrMucJHaizxFmuEMw1GNCQPGyCcCHY4XvTPjpvNuGW",
  "key6": "56KCU3JiLNUpnrtGTwH6H2N6KeYdczdMephm17YkUBR1qQFBmbUSprL79QgbkAQpumaddc6Kt3Y4QsJdoXqx6Urn",
  "key7": "jQpHhGoJS7hKDt6H4QfWpEiivnAChzPB3JZ6ZLNa6gXqy8T8cnAjGZ9DaJC3KwCh9w7PnABn5PSaHAmLXKnQLw4",
  "key8": "nYbXxS4BxjSwfMUQfbETwSwGo9vMNf5pXE4s9rjU8Lf2QQSGe4y9kXGoiUgmbjyn9PnoTgahfH6LACviTAiZC89",
  "key9": "5jbso4qDtkXCYTnCWK14wkpcEG85V9qQhcLBDSdNiLnSRXonJc5B9uW9mEtvFbjiERTRCaaGAiXXVZmnwGnQFjFy",
  "key10": "4TMnDGPwMapj7miD2JoekW8UxdeRMTLjEWwefGtbgbsvpDFQikDJVAto7REvZ4i3rWVLPw22U5xYgStknKUiZ7Rz",
  "key11": "29BBKH1A4tzrvcNM1SRRBHyiY8eMhSvtpn8erYk83FiN2EffcGv4DD9xvdZcPT2FwDaTfsxKvHurEVu55xouRwwp",
  "key12": "4U9ioebe1MPih6wTD59icFc6hGFB1ANKCBBDfAz2RSBmoq7L2yH3NKi2WR3Q6FsvRgmNp7T82T4WS7iLK4SnXcmc",
  "key13": "4b4suqTwoZSVWdErHpo9DddWr7Z46DgMZ2QGidMARHmaGMPDUZ9qmfgXHiWAQrLouTdW4rvN98VUGsZmWxsgBJ7Z",
  "key14": "47b7N9Jj43msJp7gYvokTQW8HnP9Lc5JTEy1NkUy6eH4xELqabzmK1jqrAAfQ7Q8gCEFuBq8YYzBthk68N2LuW9V",
  "key15": "56s8hpD7ksVK7sFQJ6jJKXv22L8jCLpuwSp5958cChYB4pmDbLQzSeymT3SFoXVLi9iSuWViL6LVUENjtqigLkJf",
  "key16": "2yGz27Q3MksLba8j4J6o7RNEU3JPz8PD3tv79gdCG5JFkxRuk7jd9v6N7sknRCLpQJieUjA51ZRzbfrTp9585Ggy",
  "key17": "3XvBc2tB3cJ6FFCRB3mcBRDU8gxuj2qJFckRS11RhkknviGcy2QA55nkwbks4igxjYvEKMKBtUkSbnMLcQfPAMGN",
  "key18": "4sQnkYSRS3C69F7qK7xnddMg4LHYqYo3gUkYLrMyiGjCqwT1xccUQN8aS6nQu1pyDzHAJDqbutkQUSGeDjLryQ1x",
  "key19": "MihJvxDMViZaHfyyDhTsJZ4rNwRgqwPzu4bjFZvcuU7u9mz16ehbjEwye8yGd64WPJhncHBVsLzNpBvwDtmiMTh",
  "key20": "3ehpcxSsaUWHYPRhHwuD1wnLLiPs6e9jqv4U8XfSDukuuuGT9mvQZeLGLiXbB4qxFfjvMCkyQXDQf2CaTaET6qZ3",
  "key21": "x1UQ4yxaAGTwFSjcezsrBtQNFfia9Z51d8GpTMQYNYtFpApw21ahnyRZ4dE3wpb9r6giuiviD3H9BeB4UCjEF4b",
  "key22": "52gsS3pLjUCnewEEY3JB1xwLsKdQCEcRjZj4r9NkDCgoBUGJHdPxqpDtViCk6Dzrd8p49BJgEb7SF3fPVxpLYDCn",
  "key23": "5NYq4U3DdKJLUfopBhPp2S2Seiv9pQLe8q5yQLfMLGJdde9ZRWdEB7hT3Pbo8sBKX6QocRvtzC5N63HqqnXwSEYE",
  "key24": "4VQwTs8b8e16tPuAEgBhyZWeCY1pNfeRs6SNdtjXdLf1LkRMbj3QTYZuJTScoi66LrKfsZukudNoS8CDCEhTbGZ3",
  "key25": "25CMmWGWkBWhtthNmy64HSBYPCx4Aj9GxrXde5BEGkUf1pX4QuFnBt6seqifvKNKKn2wH9WZkPhMaM3Y1iDAtNU9"
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
