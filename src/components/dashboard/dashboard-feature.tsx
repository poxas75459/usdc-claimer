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
    "4gJav4sqmWBx5JCJZhgxD5yxxJ4Bt1nkhdHvKh91YUoXRWBVAfrAD2kMZcxRa84thUcz7rjvKRcCCfUktZHzuLz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wj5z4xmBaUxbiwkt7M3CJBzZ2dL6C6oNhHAetBw6DjoHokmt6oQXNikN2fcFKifUKrUdSyiaKKhDfKdhGsqXa5k",
  "key1": "3Vm9mAvQSjEwUzrejcMHSVXZDAJ7ed8PfMgQopSuHB8AvGLA7riag56i7GB6tKvSXEM2QtSHVRZY25USerfQBdUi",
  "key2": "Jy5BuxV3kxTioEqGdE1gLfbwRgo7iZvV4u4sp9NESNkHtTrF7cv667pHauFaqcfmgvsHyZpn6Pj4mywEjezbLSC",
  "key3": "5ZCRCMH4MurfuWHGznEgdqueQr5SUdNSUXUia15X3duSxFgugsjeT6ByYcpZYENBjLMCLbCc9P5Jc8qNV6J9HWiv",
  "key4": "4Azam446jcC3AEQjEMhYHu1F6uUZ6VJSkfA5xc3KqM4GGoNPN96Ye4oaTnUzZZ7S5XYcrgB99tvRfpXjG7tv3a8V",
  "key5": "4ActtF7g6CVgUYD8mXxSaRjUSchfuQqNb4qsjE5nFf8hu3Bapnh24vHiR1Y4cvdmG3cGGTPrP6j1tJrH9Kqp5weP",
  "key6": "3SkYPWEcrL5xLWH5cTwkAtoLC1aZ88u3QQ9A6kMxutJreDyf5bP4vbWTiN8LJbwvjUTksVmkvEC679v8nBwiAGYD",
  "key7": "3oJhy2SofX8jAw2U7CYMHUiqdpYsBfigHWzNHHcQCDaPLgb2kEpYpxDmRuJacoc8DR6RB4xwJF2ABcBCtiWns3Qu",
  "key8": "d24cvC7bzSzvPs1LTvGzkyx9CH1FnVmDC46VKgVNi4BKFaLdqLPJt5FRAkD2hqqqa3XFwpqWdxs8LebBUz97dtA",
  "key9": "5CQb1J5rTifAipzU9PydXkmpajmYJwX6NDRxK2Ac2AXNHURvqUAFhQYvKfBFmThzFVn72SAnmXLoUx5GvhCP2Sio",
  "key10": "7er2Q3bbTo26RaVyvo1wSzZVirYNqFYY9tzD3R8domV4o9a3W72HxGfvQhyn7BZrFkcUchX4gUeqDNpwYm3YorY",
  "key11": "2uX3fB54ywiUrpsq8dmYtSoBe9EReoFepWnJ8BT9jaSp1MvHLkSJ5hKbCmL5NVn8WtqvYaWzWUuw75yyDRnUNBtE",
  "key12": "2oyJarrT6Ney6b2ACZf5ZWaRXJ7Jn8V8xzx5Ew1fEnDV29BaS1QwtRMsqx1TasbctYb9rxmw9zAd4mLypM1F5UmX",
  "key13": "2Z8Pjvysndcv9qojVmEBpLpGk8cxW9aSVsiC1e6FWe9oxXiNCXJU8sjmWfeyzhVYHe7TnYkpFQQneekVu8v9RLKi",
  "key14": "2CyU4kSiimnw4iat3Q7rNBTaiSkLCg6gWkfNNGoYZKwt96cZkpzKwsiK2tDBrgCMjpWedyJMBvhBtrJiVtUq62Bv",
  "key15": "5KTSbezWMtPg4V5HZscewN4QrumBzznqUMzi5Mj8z8acNUX5JEXBiA313LvF2yjbMgi9jjjhcvdBsfdzSp1k4QpY",
  "key16": "4BT5khaDpKeGwc3hFNgjGsRgZwH5xoW7uXYWGW3NFzbx4xYEErMMBBdr1L2aEQarvLQCLKtBPxCAQk6Gq9HeQzr1",
  "key17": "Zj3knmyadJgWWeymeEY27Hnm4X2CYp77jnXLWqJ6LHacSHCzShMRuWDkT3yawVyRiFrmXK8WEXe62aN6CNL3naj",
  "key18": "ZHHgqp8WxWpRPjw29RF9GmViJKwipNiJREgGoCZmimZbCJdwtFfvjw8iTGQMDKRcYJQYiNsXSedVVpRcwguZv7W",
  "key19": "2oVCbH2oU2gMFKz376UNKWovJMMMnEvyEN849Wq2jmrcx9BmaRNKzGyZKWps7qwLSKfw3etUinVS3jafHvCF9WBa",
  "key20": "5yKZSWJcnf7DWAVFH3hhVqCCnwQ3ZmEZEq996dEpoBv1XRodrACA4qNLJBQ2Gm2TVgyY888fXBP7CGdeLqoayvm",
  "key21": "2Ztirtv8VTo26ZwPHUBLF2TiBq3EJEAND8UaqzXRoWmCiDfQv7wMiVDyivqbSKEdwwnxzNhn7VHyNu6P7NLc4CfU",
  "key22": "5dvXacmH2hKamPK4oF7PBixDcXEhN9x8PgADM1QNW5MxjvnvcepMtFi4tUc8KW7bixFSzxCSpV6ReX6H7h6SfAQK",
  "key23": "29dP25WRWbZWrTxbbfz9tRwquHh61zf5mNVDJYxjhCnGcTMM8cySyVzqRPgSmNNMC5gwt6cy8XNndjb6ACBTpueR",
  "key24": "5hX3gtCAgnWDWJuT1aFne18mKz4VgFwmrn8qnc4gZNXkhHsbz54GTD32NY74qE8BvwNH5fWQhwZJXhRBqSSYGLNd",
  "key25": "Whjm211Z1GxgoP3oCyFHTq9SQACNGYbghujP6eyjTV236c2ZPfuKD7cdRVLWCzEDi8ZKn8i8RBYzGNr4P8fAPir",
  "key26": "499DR34tuajfHbDE6T2TugTsibANaMFuaP4YR2jpudScx9opUnrmghMpXhdsRMj81aauGABdzG13wDh5kAKDEGAt",
  "key27": "5RZQ1xouTgTtVWofZA7ptHggiq9WqiajAYD4FRdw7pTdB6WSRzGUtVtryZW9do8dFVAGQDJR1HZyupxwLPPGTkUF",
  "key28": "4Q2oFsGNx9SL9FGbYCVrbxb4iHCpEHjZfxeNvzKaf5AA9Qqaa57sEVqgT83xJQnNSKsXsWto19MCDyeCaW5QpT3J",
  "key29": "5eBHWM16he7MCck9BeZaELCZPCbPNHdxEib3uSLALbU3LzLCsarwuSLVKmUdY1Ry2ceFAWaXB9tYeZU5ZtrDyYMD",
  "key30": "2gowXgq5dABjbU8S86S6RSrxS2jcjckDhxRRXmqtYGhcUAShT8YxfsQDTCzhsfJjZN5LtwZntTMDeixANVY3tuyp",
  "key31": "63TeuYWwj9BUzQo9kZAmDnVPiHBpVLNFMeFdX3K8xVXULc7Vt4utXYFe7kujFwGmA8YAYqfuEa4za22uGMFs7AuV",
  "key32": "b8uhjjmB9b9sVqBmJismWD4K73d8hraKv2ZfkCUmVLmKkyF6TzTGQ2DAeb3S2snFcRzYU2KUDs2hdjD7XDnyxKG",
  "key33": "KERZGPCbx5VnhexcSPpS1Upscf9QXfhcX3coJATMxk3AEEd3pF6fJwg4Tc1o4gSxXcmD1dUsopUL5Xe6mzzywPm",
  "key34": "2HgQ1SAqGSxyf9S7n9LWmRLoSaV4iP2XPtWUsy2rqSJcq6VeyVDo2zWJCLCQyzVETnoR7LegwEyNwmwRNP6JD1RQ",
  "key35": "5HvHwhDxWe49TiU36B49F58euUwmBp24tmW7aL9MNraCWLvy8wWkngp47kdSMd8WNAMu41NDojsCHnWBRHniutHM",
  "key36": "33Q1j4VtJ5o7eTHJCXay9TLG5rgFwmE8j79FtzCgFx5rzonrQ11dGZxQJCmrfj1YF25nvJQFUF8mH87UkRWdLDsQ",
  "key37": "399xLZTWDiBaTJdDjTQcr1wtdjvgsntmxxfCYdN629yCSgAuaBtLWTobtMJxpbPP5UasvSceViqpcZsZRJig5z1d",
  "key38": "3R9hFsukxq1GFbqv3FXchd8yV1jXc9iLpoh2gJ44wieTFBzJAocfkfJ8tSpAkA21kaSzf1FwSPwdsftf5VubGJcT",
  "key39": "2PChAug2vWHttREi8hWmtW2rRfVf8S6myaMH8h1soinBk8NW6LoFQCHG1Fw4peEUjBqVKu93UgzunohYcb8SUSwW",
  "key40": "4HrgQp7d3c8dLfKBkt2bFXvt7FXvDhFSjFZPmQZhGeKq2c9XWahcRbgXjZGuiQ143UzuQ2nzhitJ4JpQUkqw7HEw",
  "key41": "3s7N83mgV4yMBHmLBhmY4E6YhSWKxcJodPLZr4LjEetM6BzZFLjyKtajUA5oAUmeksmvGFrHoXxWK8qRMzEN8kdd",
  "key42": "5FtPVu5yfYXPvrPPikWEXTtZ3qTfnv8ywVuTPYBSwj83kYHux3kJc7hH9NRgygpK3uvonXJU7ga2qqQH5T1se4Pz"
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
