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
    "nf7tfWvy143U1mwe4nzTAP3iHEU8yZpXZRS7XeLQFghkDtymSjXhK3eGG49FUH9divTZKRmmt9pjeZCEGtDzGMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bHW3UHJKUXchcdMEDaSRqRsYmSiJiPwgtCgBAWgHQsEUoEr1fySKxYB38KF52KttTVxkCLCesSZ2jHLtnY6behv",
  "key1": "DYPjaendEGEcMdm8Uq35SLBXf3ofhHGYWXuCchacZrBGhSyihN6encYwJXcxAnG5rfu5gJBYe8j26ThbxxHq2pw",
  "key2": "4u3SUAuP2vQi2yVQvreiXpVgBcgweusjgW5WssSPtbdJ98qqjRnypwuVcBEAMe4YazcSZwEvQWrS8TJRFtPSXhXr",
  "key3": "4HBpsBK2jigXfdYXXvAFVJq3zAxwV41vqcJhyiJCPhaDatwomPmWjn3bknhQbajkGcYbrPX62X3m2G6z23CbJDh",
  "key4": "4XGTnXGgkAttzi1NMYL3EMc1jm8rGrF3vVarYKGLKrj2fhG9rqv3npcUYk7JHr1qVpi8NsvbmxZQdgbMdjWDwDUh",
  "key5": "aeb2541sU1oQyppNuhbP14z737VJNFgeVaWpvBY8XFgV1wjPcBU61edY7PtKMsw1fSjEBBY9TLhdHppFS5TXcwa",
  "key6": "3rBrSE4KZuiDYUANuPi2JE5SdFkgNTMAWZP4AQVg8UtSVNtLus16fn37M6EMNmpRh7Mu8bf2gJPNdmRR7pQAjZcx",
  "key7": "2ff9CMWVzjbStJW1nALRALkzKQWpprBX3zRxRN4bLq6zQbGSik6kzSgW5nNpE9XBucHnVFxVHbphpoW5BPEZacA1",
  "key8": "5BvdDm1AUDYNf9PSV3GvZMGuJyfoEbQQ1ATEwvzCCGAgbroVaURnD37i73tvvw8DTM6UCRLJKrzCE3923XjwUj6k",
  "key9": "48Y3GBnUgsC6CQUU54uBWqp1zqybmTBnhnzHLjK5jvpED4o3Z19D1DYLYLfpLqdqUEur5qA7UZ9XgWCfuSajkyjQ",
  "key10": "YXywc7NTqULQTAvN2Mon5gJNSH5oeatEguraS6yBnMgtGRdXEDdbhhrj3NSW7zfXZgXKud4fuPrwy8i7N4MSNnf",
  "key11": "2tF9BHG2Kfh2F1Nw5ZfABdTrBQ2UKcaJpk1SuBk5i78FyfjVDJftVECMifL1x3Kv3hbXUqo6eHjm4UocrPKe83Mv",
  "key12": "2mUWQqVSq4WoENMuG2gq8JGdQUYdAp1WHi7BghvPqp63kDwp2Awa71xoTX3H5L7qCHNoNycydNg9o341Ny2ek7Re",
  "key13": "2qQ3iBo932FWgDdVswJu5wzDPiqSk1ar2JHoN4kCzokPTSRjMEa4AhW7xAxzi4XdEBz6mv9njWugK4FAZicxmiv7",
  "key14": "4Hq46kPtJxD2tvbKzqPR9Pbt1SbEfRmhbWkUicTcnuBzQeaNVzuXorWuuQcFay48zphPmeixsXwXiDYF5dVkWvMv",
  "key15": "4fAvS39EaoqwVgyrwL2fUwEiVnCtKXxgxRYXN6xRogMYZD4juCSvg8VhmFXuJWN89AkGEdYdbeP1S3FLXodb5ccd",
  "key16": "4Qye1Ce8Rpvp7RHdZyzmFSV5UmXS8N2ZyMWqJyk6F9Ufem2S5H6eWn5UunYHZyXCejVxDGco52Xd3UdqT94GXCfK",
  "key17": "2Yz5UscUjTzkT4WYuQHTU4GKbqa722pLmSxpevkEvRBFyPs8Zgd1jMQns3Q8FofPhsXmV75AjrG3pKn9dicXkPsF",
  "key18": "2NRYcrMpj9HCePvmAMhprJAQvfY9czxYwiSk51GGgE6fPhbtpVE8aCUNkj2Q5pkghD1uXuvkCWkXt7ggSmBx5eov",
  "key19": "5XNJW8am8uBnW9cEB2hhKHy1RZpDZA7Fqu1qj3Dk12ThGS5RQHW2VsiZNoaPtfafNyKzrMc4bbi1Qp1Nmd1goL57",
  "key20": "2hqBHdAaqMzhn6rsiZDqsLA9i7KEzmFrRuGqG3rD4r7qgACuGpyG37uaTP68v3ZmNzLqjvFiBmEfWTciEMNnQqLz",
  "key21": "2FuctdfZx4VLpTJ7G7GbrXx2aSwqHKm7WE9MX4wT33YmXkhHK4GZ92e6TPDLrSbN4TBnBGPUcCicJFotMSvgF81G",
  "key22": "Z72UqcbkUPrSA7M3cPkZpbdNWcnaYF78XwFw4YRxL1rVLizjQBrrvejXZY6xxTPtyfpSg8tYriQkBpwpAnRBkho",
  "key23": "2yDs1amsW3ov1ddPt3xpByPk2GeBsPswK4s7jzEn1wJ2k7G7TrWgqaQYDvG1wwAKk43CwuNf5PCheSugn2iBdVYi",
  "key24": "65eP8Ahk9qJYi82gZpXxjnHnAHDrdsCR8FQhMQ4ZdjbV4whRZrRZyumh4RJbMdY7YcNxRSDFUtWtUQDmCLPwCaBe",
  "key25": "421ZpRfnpxN1nRUH3QjaDkirjWHcxXZLu4EgFXaYq69jQLcuAkdooLRnxwCWfgA2SPWZBK8fSsLRGPGCYu2fhNMm",
  "key26": "2V1K3cV9zD5AFiByptALbYReiVF3m9gEBd7T2K6GwLXjse1DBCj8ugUx5jhTZi1UkmXvD3h5F9Q5DAL1hBuCVfKQ",
  "key27": "2ooynyPK1NqnLfHUS2U8otZKQtYYjvrLjPZYFb88d7FPYqavw7rbhkJiin8uTupecWeYUaBr412hoL3o5ciUsyTo",
  "key28": "2w6YAkMBnhpBFuVqmQ8NLNz2n4Y1yaET3RafxmEjfb6R89yjvodpvevR4JTznhFwESY5R7PhMAW9BiKnaGwBDdtQ",
  "key29": "4pqQdFYLdvzFCpkTavR1zqYfkFMreyPa7AdfvAHsW1RwZdnCqcusshCgzggifGvXc3KKKdHJdke4RXi8UABNNomj",
  "key30": "2728w2SAnjAoRxwNEeaQNQop3vnzrmV5x2caFHDbPty3ES1Kmjphz17oVsasi3qT9T1CPrh3ayy3XkGStyGo5XPp"
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
