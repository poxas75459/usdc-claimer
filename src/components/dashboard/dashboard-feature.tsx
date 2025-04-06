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
    "2WndCudJE1nw2vTMgKTd9ZPumgGizL4q9TA9uC9XSsXUwepHwzteBBPg8Fx4c5KXXbDU6y8uk99RAVrJmYuhNYkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vUrCrMPJ5rBPwQnDvGLtcBEsy1xGxfqaSasvP1WNrBBMeLBZ2WstdLxX85WPPha5dqXjSZeo12o2HdU99GAt3qs",
  "key1": "HKjY2joAF9Ar8mHvRy2TDSvZtLFKgSqU4eaF4Y6yW8289cEkyTCgNT7vpxEenUJL4G8WRoa152LHga9q4Dji3mq",
  "key2": "5WeaZv4aVLnUghHQSg4xMNBs8GtdxaGri923W48jrGSPYgTkJxiLwDPSsvtueBUbiT8R6cUWkrHguJyMm6mCJoGa",
  "key3": "56FVxmZE7WnHxvNfzN4ahs8LwucefwMmP9krNyCV9FsyJHCENDAtQ4YaN1Kp59M8yGi7cSMDXAPTqH74wgrF5HtH",
  "key4": "cbpj6ie1355GXL5RBkSCAkiQmR6n8Vx2HX6pAX3ZLuCBLj6vKqTGNjP6SeuvWfsrosKqW8eC9ufp75eW7gw2g9a",
  "key5": "LMwrr5824W17akuxfvGy9AcwCbi28MscnbSeq4kdHAtPRY4nTfBJNCNvQK9qk2tUX5v2x4Wirfh8ECHzD6T4Hoh",
  "key6": "3tQd5ijJBrVeJmsSzB4fkEdH7BJZvAUQZsj8zWxqLxAS3ob3P7tE7tG2jXNC4ARsywYfge8ZMKu6YxW425aYh1s7",
  "key7": "2pbwbPxq3eNtcNdDwQUzfQDtaMwGcpMUYHpERTBXSS7dDCEevkvS9CxMpHcNArDmnDZBK6LN4utuyQjN9NEphxr9",
  "key8": "37PXcLvmiAJZmNMmR7abMTHkEVZELGxd2ALsXrwQJWuUz4zbLhNJ9RbtQWgqfk4wvwvxxvtRW7Ubr9RnwPHWukWP",
  "key9": "3ejuS4gSza3PEyLf9DpPaWstN9FzKBmnv9f7Lezf9S9vWeaWpAbfWo4EbCZo2WSN1tBme2pkVabakzRikZey4wqA",
  "key10": "3E9JZhYBPrhDfrWQpLvUGrN6rGMXwQvk4BzMim9ahJzodeCAWCYtJwrmTJo3nNMDfu8QcN42D8dmVRwwrscKMQFB",
  "key11": "5BiRNjsjBe8xJLvS8Srm8uJPbh2xshtqq6ZGdnV8r8tWVVDYo1K4xamSsMS3JnfStam247JbBN1tosz3ScFHmU7A",
  "key12": "2Lh1FRvjvuCkmrXad7Cd842WCJHhim71Xhay5zZcZWrQNa21ZuhDsuCj5JWxWJptXy5APnSSGJnmfnTBRPWdJC3r",
  "key13": "2eE18AJFLqKUYYUyrFExeXKThzaAPq5NYmBZjRrN7RWCaAesi45pHyN7XfNnzdJXoYwE5HtUQ7EnQgbS72CmtkKG",
  "key14": "26k9AZL2HSaMBpKU8czDKUvjXjXhipsgMk467SgyVWxRn7bjhRWNu3yj3uXLsoD2oaJUmBySvDQDdaRcVwBuGCrt",
  "key15": "42x2xhdjguU7gG37EhsaQZiRLTJ6bR3rJegDHwidD9qXahE9wo8XhvrVYvjHzDaAfDXEatUFaKpXVRuiFoKCXkbN",
  "key16": "9BtfDZdCuemFLcPoZS4vT1A5Z2uALrzVr68WAjDY84ETEoTcrPJH2i7H14RdutQiuvRzjBPoFJSaeo2MLNmAGbP",
  "key17": "4USa1eJZLVn4zMf82eCXX3AGuqFmVQreaFmYpCicg7Emw7Cp3c3JoWaQTzA86RKU39WVZj1RwhU5EJkdZ1RwVkFg",
  "key18": "35ZAVsPajh7ygJZdQ3SVeqYWpGio7fRhoQbmh556ZmL3dHgDd6GCYVb1obUrYapXutVQhxTAMxTF7HmNzrdQN5sn",
  "key19": "4dVQfSmNRxz4jnr9KzzJjyqCRYHbVH4CtrxdiSUGPLWYppnvFcKmzMfqLNZ6xNuYsb2Xywzo1h93KH5yhY2AoCv",
  "key20": "31YvFbbgDfgRM6eHLaNNMkdWj6jdKF5KFzHhWNn7DpMffUmZ7WN5owAdn5Lx4xfecYi7SauRoDQ86Vpr3w3Jm8eq",
  "key21": "3U2AhxYPzLN88FthhYk8LYB974xaXnqv4Uj5q7Jc4pSeXGTXKwRom7T8vkudXssaHqAv2gxCF9BTsiTP5hNgCJdP",
  "key22": "2QQDpCVQ6o8m2bhLQoaMcXEg3pFANpz1vDxbVYvgySwfJR487yeeP6bKn79BS5iaKPDgzsUY9PiKJzJMcc1Y1kNY",
  "key23": "2y4w5cS4ZEL7ZgeT5jJ588xc2oeGWj6Ad8NLrZHaVChBAXfi3gDJnsa5xwShHFBGMYhCaDCD6LhMrWqfFX4FVyz4",
  "key24": "2fx7ToHSosy8qky6drdQVzmCYhMXNrKj4cVsma8HTd5xvPypCA8oiTpcQkv8yv8e9x1ZCcvtuyaSjh3hmbeGAZHN",
  "key25": "2X5JMrRftgmK5wYatmPPw6bFVvepsiKQjW39irHH6wk52rNgwNEvBWKCeXo8HHEcfH2vsT4TdjNTYQohMEDsk9B"
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
