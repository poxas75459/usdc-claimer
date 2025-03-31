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
    "5Z1nPLVehSqXN5eLpuTYbHazNvp6zbsbvJoB1geUnpmT4A2pE8owwog9B5s5XCAYzR5nrNc9gZvpeko6phbwZdXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49G8YKxy8G8zCDdbxDRmp2i5DX8YUHmsUtBe3StaihqBYvB4EucVqtYuHpMiqHcTNmJtnaBQ4xRLKs4DwUDKpkBr",
  "key1": "24NqQbLXqhKk9KJcHzsBUSqmP2QvCGEQw7NfVgbU2wG4bYA1WZXCzp7JaLGfJTXryEhCJtuCkD23nTcQ2Kq8JeEc",
  "key2": "e96f3SMyxREvNTXNAGqDC218Qouu9mdfjHmXHmG8EVJ5FRDwv1AFNWgu1aJdNDgNf4KUF5GLZPScJNmZ49LfnEG",
  "key3": "uo2fZvCSw3DtDas61c7nbkqrK9wcVaD6bNZva2Q6SdQ4dnu6aR6Ypyigy12U9Ec8JgmPLGervEaoBXY23aFaiPB",
  "key4": "59LXh9bdpjCMfKazQx4G1YXWkskvbD56qtr86Pwp345pCaD5wnHr99yu6JVYWhQxGjcZbsNMbre5RiN3ZrRfbnwe",
  "key5": "vhQ6ecPxo86ghQ4coLXzxsnKsSW6Vvx1srL3669kiyZh6gtiduBK9wHZN3Wi48u5aWWXpswPw7dNrKHm3rFJ83u",
  "key6": "2FcF1y53afDfBvLLnSKjx5Q1pVr5cNt2zfN5HWLpv3sDrcN1evEk1J3AvLPchRqNYo5djx7HgAqSMUdrv1Z6LNho",
  "key7": "4tMvB4q55Gu22PV5JFSkqXQaR9X5dNywfDztFM5iYDSZHaeAKXbXPaYe1KfnJw8Rt9YvWG9DBvZr3vWiyacZT1oL",
  "key8": "4nPUJ8Yduh2dHDQv7QD9cUVCgjAuPXfCkYQoNwboa3dAhRXGL1RH2264d9gMKnK853PrhXHczZbkqRJsrUCpRziq",
  "key9": "25zYqie53bgdAJVKxn8zn8Qwoi6t94dgArPYR2kiWTHS7GtSpPY1VGafQZKe8mg1hw8YaUH1MVz55V54RzuTQ9pQ",
  "key10": "3TVCbunHH8MMHYMPwmuqW999qGfGYdJHAsZCsBFG6hWvdaYt3WYKngZWiG2XJa4tCt3A7Y7nXKBipNYupp52kSqh",
  "key11": "4KdpAa21bqp8baT1YeRvnN37EjcBowB2uh5AD8B7ZGW3HMDUa6NmtHWbGRnUdyC5frsxGdjmBg28b7GsKchGcktD",
  "key12": "3vzoWsyZKV1sQd8KH92eDkaCad6MnrXHw7a2zrXoS97YmYjDpTWKZt7zY9B6PRWAYjRAWMPGwEdWcx6cyF5vhzbJ",
  "key13": "33XhN4iEGu29PASntxKvpxppbtASR1oxWCd3WPawP2yaw9svWs8ttKVRLAbmgZ2ofNshzEV4yToiKXb3L6BMYjmk",
  "key14": "29RnujbmQkAtUqvadDjaQFXLK14Lf8F2U9rVJ2cRCPKvxDFewaDGEi4CjCGLnZJQBGg1jQUYftqEATBzXtG1HhqE",
  "key15": "4bEkLNw53rhAbMECQVso3ihM25xWgCrCA6SLgPi6tLcwbMQhhAwUfVYVqJfEXPBsp9acW3Lwy4WdjEuSeemVMeup",
  "key16": "7DqcvzUjyGWNwbGXWTbHnefytKx2esuvVnxfH2yQ1yxjp38Qn7Dj3SY3nHbMFtXL92CoQKrDZZRZvt5agWmMTkG",
  "key17": "2TpPh4eTc7mWaktBxbQ5aQv4K5mTaMtCwFcmCGuJfPQHTJJbhb13pGZJpTWNiJVEgSTve7aXHbpvFcZkJxWAnrE6",
  "key18": "YS8wvtpXEKVMtU5VjJYkxUgyK96wMjEnXFS7XnDjbX6JsLWXWRM1eoSSigsqM4zYRxts64pcGegvDYB8mGHUW1G",
  "key19": "5mTDd1A5MhD6TeJiDGxZDhYBbFUwN43XzrHXmFZTVE4xWbbdzxajHJkpvNYQzXLWGzLt7Krj6hyjEbZMEqF4Zict",
  "key20": "67k1NnhVeAzMerj24V7mN5jsiVDv6GKnyxyAcwRgL5afzqx3oqTrrvDpsZuY83eWGvvcvvK5v18GFK2UtZRZ2xU5",
  "key21": "2mFHNicyQyRjSGJE2vEenCaS16epHLd9JQtbEZMSK874iMt2XKzj9JccebL7YrGjCKdob8jiENvu1678vyLiX8Wa",
  "key22": "kTNwLjDmuZChxECYg2cY6r9oSs1sPDSHGdKrjHgf521tx4aC9Ed4dFpy7ZVj8TBEfsmwFRrZdNJCWJmt2ynaaHf",
  "key23": "37cKZ415aGKoJH4gLSTiThaoWbAbeLfVorKWcPPrM7zPbJokrbf27mMG76BkhpuZnZSPm4y1QJLTmBjdgGoDQQJm",
  "key24": "2igrgqLdtgxpyaYiJN2oNWV66hCEY2eWvw6ZWrkcwzGZPcZFZjSUodVeykbzNzKEkjkwRU8YkRvA8hmcGHhEGXZq"
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
