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
    "Wc2Mc2wXP45K6RJVG8HgaGz4r1hYdumr89NW3WWHS7MVwp4V9w2Vzyq4MZZKAmimafhYFztpAWiuK1vmCaMHy9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D4nLTDo3PEh1y2mCQf4dcF6Gt2n8fQexfnGKyCZUBzMMELsGW1T9ByX6oKziJGFmw8KPaxTmwNftoLvHSQQCNDK",
  "key1": "5epBocxyuM4pFMKpxz2PHhpzqsM8vNQFYJmEdo9fCH727CtxrhCYxVfFa6gJXJVgfT6cXEtmDFRj4qij7N5og8U3",
  "key2": "E9qpwvVxiYXJCQHje8LXbYDGXFv2rFqpiEQc9kMEsCtQU1jsWsirvHamMGtDNhaKuwuos5s6owadF5xdet8iSVP",
  "key3": "5G827BKiZBHi6NF6MweW7wm1wwCYcDuhnRhNFZbX4nxooNMv4VM4Lr3ceNnTFjQBWV69GA1ho3EejbavfkaV4Mci",
  "key4": "2QAjagQ1SQYAr1Kvo5LDY5Xf7prcwxcpRRPBRnAh1DSrdvdrSy8H8c1ezom3D3Kt8wb2DS7tUTHhJC7E24WpwRMi",
  "key5": "4rJzh5KDvDfU4oUCip6cPo6FumWerqdzC97ukjvJaUas9z9PFdUkizPAkpz7hrVCi4v5TNEdzTxGh3sDGfswBKjZ",
  "key6": "4us4eUV6Dt5tdpJvKED4v9h9a7LoicPurZSHPrZkL7dUL4TWE2JBWpSn52XXr7ak7TaoWzWobpbUuovW5rnSkcwN",
  "key7": "641Y5MQcm1L95YjUyN8o19p5WPwvhKkNMzT1jdxCdWUQyjenN2zg18h8N45un6Q8ugkuiaSxr3JvChTmmZjvrMSw",
  "key8": "4JCNREcD76xnozvuP1p21JVUbR6CDq94Ga8jmz8SgKBTtaMnDANBkZ2U9Lib1H4iTNi6NZkWb2b3z2VYC9QM8X7n",
  "key9": "PAoV2cGCw52DyPeJr6exQSE6kJbg9uJTUBTBvHwMfbhBdrPbPui1rUYBFWZHxAbjwkUNiBGjrmRdK1nqGWmntvF",
  "key10": "5W7zQof1seJ1dQFbyA73QZDPgnZ4whyvWq3EbJ61KweYd7PF3Rw8Lwg5Wc4coxSpKv1ty2uT6nrWkq4eCMWrqRr8",
  "key11": "63KAPni5xoVMMdPD4fVrWNDxmjadDfNgbFvrPnQbCmamamu55xSYmKwqfKyZMUxwr66YXf8uVwzdnVDyt8ok2Pjw",
  "key12": "5e38QDmB5tjJM8p4xvzvMAtxoe1rgvrQSfvkkJRLDBL4X32P6kJFf4ikNZHtQpSgNDLCek2XzE1PqKXR5MpBkFwS",
  "key13": "3WsRkZAVp4qCWugCNVrbJuzBfcYbGoNvotyC3bR6AS7cGksRcQdqDpDTy2PH8XYLm4YYFEc8mCoJmAnD1E7BtN5Y",
  "key14": "2pyarmiLGvBKjpe8Cm62JwgkFi6KS3gcbCqDCnVxngRJmGK8yutQvhjGzJSKcgeWc42LPp4PwVG36qk2MiApHTkq",
  "key15": "2ezayhmb3CNZVAPBXELFGUPEK82V4BZjRJWc3jWog5jNRv9je8C8ScvrCLiYSuqjJn5TFv56YEPddHGuxC8sZg2v",
  "key16": "2aiokSPunKyW9riARHQtxeHQMbAvza3GszGfrV9LCE1Uxhmey4vuC1tRW9Gd6UX9bUctK6W3uQ9ikRud2SG9WfDM",
  "key17": "2SN92xTANTtVdCZNgSN5a4Vb8aDsLTf6bQ22X8DZSxUHukB5UeTpCxZKbm65rHc9e1DhMnhNMFN1WDCRS2VnYUEN",
  "key18": "3swaVr5By4YJfW36yzSWan8dcbgdRs8nRaAaZjvZPbTpHL3x6G89rC6oqTEion3utrYkwDjF9dQtgZv5VRGzXdjo",
  "key19": "fByxcHghJPkY3TUP4a1vXzEUUCBnNybQsZ3PYaK7KuBwv6BCctYnqHi1aaQJGZTZEmF3fSeP7o3FMDGdrd3dezv",
  "key20": "121p5HeTPQ6iF4yrZe5TqjNnUurQUm5P3e5GqpxkT1emgfELXbncHU1fCzDBSNV6Cv7NCLvtwebLfGWZtwBEYHu",
  "key21": "5SqbJQQhrZbm5qahGUGCu9x5D9io8XGFzXA21YAd3wqXVpdWs5v314BRQ5qnG3mDjb3RMygxebDJLwWWys31n9B5",
  "key22": "M3ZK8wdKLE7Vo5Egm3A78YhQoX2Bju6F28eyfeicBidQKsu4EvrvF91aR8pJioWJnyY3tejHa1Xm9K9V5F2KAru",
  "key23": "T7NsnQLQCfeCTkjiVShK48an7KMMu6Cgc9CsKGnwfcakYmdGXR8o9hBHQarKPc6D72ihjnbeU7g74QivdqwRPeM",
  "key24": "2dp9Jx8qP2gatwoY4RYr1vXM7iP9TBuHJRMut4PDf5NmnjNSP5sm4VPCeAfpDE14qCkbLcsvRLTXs4JMbuP85GgB",
  "key25": "39wYNDx2CEeCNJC11DKkqYtrfNRfJywv6SnEK2YFwcyPg7EKdNyr7wL55E7Zn9dtbkMuwNPTW1rYtrDxiKaDXBYa",
  "key26": "5x9atz6ozgXd5XWtyNdhfj5HaGwf5c3mEGt6TmjbNuPsdznWBvk3ShtBttrzFGMVc5dRodNr6h2uN51ztcEsXyJ7",
  "key27": "5Z2pcDCA7FkB9ijQT4aNBpgiGo5x4CSGgiXc8L2PtFTNE5p2zYdfUV7NfW6DYiETywhmCK8w5sUEA4ayLX1ujsjQ",
  "key28": "5b4RShHde6zAs74aPy7XuSZ76BgY1CwwsUYATbgBNqAbqT4rfEMouhbu41fvpZMh4PbfhhdfdYaNozoPcb9SRujy",
  "key29": "LTQSDT1uAbBSXDt3iqS9w9Jj921aPW8QQBBxGG86ZRneDdQiqbZQxK1tdZiSbcjWRLcj1HS1Zu3LpdkEkupe9zG",
  "key30": "5KfJjFcbtQuDqd5cpLxNyo8AfAMZTFDmHfNiH3i8UnUzBzBQUKWGKhbSBtG5fhxwizjfLNYNQ2MRdcRuuZVCfcwa",
  "key31": "Hgyz8zbWFxGqmvzvL2x1yRGTDjW7AAaqb9Q2AKeCjCJmSWVdXM47zUkjgToshhqduom2JuBxJRBWmBwsTqvzedx",
  "key32": "5QND4gCCh4c8B3br45Bwk54WRRdLdVAyNgpAQHY3XhckwuPYmBfcmFbErC2Wc6AYpj8HsutAHkpM8bRmWHayyVw2",
  "key33": "3C32ya3zuobiZMzowk1CLTDPc55ZmXkrki7BVmtjrvmCPHKxbiRZV1G5KKnpn6zZqXcAeNLqw3wGi6rVtPxgExvZ",
  "key34": "81E5PzDYhx7iXuJ6pVT1YLEAhQyNs6JxeT4FcV1LG9Gq2K1QEFNCkVFnwEjM6jkgp9Svw8Xf5wogx9c8EARYCXZ",
  "key35": "fyNmY4JMo5tUcjmmeqS1LNvN4QCuWkHC8CobhHXiQHdQm94kctkeJfz2X6scjsrdZQXVpn7tp4HRxE4nmhCCKNb",
  "key36": "4qwVwUNpbKXd1jQasRRDqNXXaiLRwwZFacDW6PCLN5yWdt5meJwfSgxVJEvEZeaZwtgdF97EDqGGLVTN7foQpvVz",
  "key37": "KbT3eu6vdAtchZTtHzhAwr9gyDU8CGfBorgJ4VGvW45r6FnBSEbE3azSK4CkSDzHf1mhNbuLeGpmT1d8zvziSEc",
  "key38": "2kc9TyJULG6rqwf3KNyA1qhbiYYMUB4TJ92RGkr9NrLQtvoG7fPFqYPdAVB86cbzSDbFLgqWhhUifvaiFPtboPjM",
  "key39": "ogj1nLHckSJECLcFWhx8CMhCtYs7Auji5L6nP7VYcx5FnuDdKXoBzQ7wGx8LyCyipZXjW8X3a41Mq7JwbfKshvj",
  "key40": "5cjCu9CG4RDQiSNHURxonFGzVLHwsJj5Y69B39crqZN6U8A6TvRdNCgy1Um1xGgzsTnupVPQKAooT5f31pUNvEwF",
  "key41": "4nr91ehsaLjtKbbTb6dqzVdv9Dvtx1hTDQeZtxRVPriF99A4yCAQLUPqzYVHojAW8whFEE1jeHGF8s8UBZZUJ6gg",
  "key42": "27taaCaNGTEGgJZ35jaZxcVqYgRja7gHtCw6xjxruf5TQ9HPJiAiJ7uFgLWhPhkSn1uYokvFfvuPF1hD8woZ49pQ",
  "key43": "44S3s4SLPGyPz9EUFtwRCJPg68y91mGCZ5XPXAeXxX6yAZU5X6bMcMXitxEJPRm6DEwBHH2T4J8gEpFS4B25v4wq",
  "key44": "2aVQJaQouLC8EAE1Ez6Df4SgWxTnhsVYnAo83xRnqiNBvq7abaLX1Tp3T2rcwCUo2XjDyXQEL9ux48VRBEotmJLU",
  "key45": "4YFJH3TtksrCoMtxVFQEjWGTjhBgNuEW91cXrPJ8AFf6tavy9pkALzbEZbxabTgDChpHujDk3yjELcv8wZyKgodP"
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
