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
    "2WoSTt3LufXmF8ZxCPQVW4CRanr7mJLhsgCsitaqFewBmHYQs8cHHhZMPEycNq8dkBLqZiKrdny9Kgx7NtgHp5Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2icyECWJZSR9VNYfFsJBt14rzSmmfpY8QrbnsEFmEzAVuCHQqFTfhYDDPpgyjhVn8oohY11BS7hBUrxVNS9exkEj",
  "key1": "5haSFzqPUDNbCSg9ZEsNaAbDszoZo4HUBWrg6jj32mr31Puw25JpmNvtRqSxFFowTwfLPXBvm4rvxdh4M6HW4Y4a",
  "key2": "3KxT7LKYwMDeqyYZBGo7V1ijxsb9rRm1CXbpT9G6Qfhk6QqNk532eth7R6F3JjrDxYBN5pLY5tZ6hramNeaDZ48M",
  "key3": "2m4vQmayLXvRVKf89LtTP7oGWMyYsFQzxpW5af3trr3nY5tqkHcmBq9x6boSw8wbNXdFxhv6C1mY4DUGVDQhk7kt",
  "key4": "Y1JKqJvmHLMMHZ4xuCumJJZ4WDgDtoCYpZ5326QET1U9YsPy6TFfhVUwfBGn32bq81k4tspCkiX2nR4pgGWWx6u",
  "key5": "21ybxQp2CHyi3j5eA8eiqd1aJw9PXX5KbRnnJ1Dogky6pYeZ8ChJ3q8nmMSe1SNiPjTqPWhTsstW871HCxviE31c",
  "key6": "61Z6D9LncaVWTj7QZq4AiNtPvPqWr38nbqDK2FtLuVg2JXJzwDP8m3MxgPXts9AeSoBknprepMEjZmCXt9LrjTpz",
  "key7": "3yWBdT7itjGbGrisodzGph9tdYXAfELdWtdJwTUSUKNrYfpLiEpPQ6DnQsHSmWKpgBD8C3FWjtafe8dj4HY4KJSh",
  "key8": "4Q6UfNpHHsU9kFEMgTu3ATRFR93b8MAFdTyLMU2rHjBh3qdMEABhrtBcPPuk4RBnJH4DmQkpFuSTgjpJpX2xKojC",
  "key9": "VSMbBBuV87CWThn8VHJAG35jhPSkhEVEYyVQzEbmwfPNJXkWDD9Ay6x9C2wjpXe6qr7cbW6TYfShq6dsKnhZJVH",
  "key10": "5xQ1Chq7dRT6qbwQwkoxcuqhmhnsnf8UnVgVZsrtj1gwGRnioygFVZ2o3dS9zSVbbQkx47JaYBp6iZ2pAeRtaR9A",
  "key11": "4LJVSrGZBCXY5Z9Ab1w1digpARZoGPPmNBTfG8dujNDETwES4LTwHGtWM9kcqmyQESYW9Cr7GmavAF1C8Y33vky5",
  "key12": "2yv19ez5Uaqdzc2zeFYwfpmp2LScDMHk1ZDQ9regxGB6ZojeournNXvDJfFRrua3iJqyitoeG1sByLjwXTnQL9Yw",
  "key13": "2ZR5s8Vc9QevqzLx9bj4DApKcFZYbXWTkxQ4TLsdBfWPAAP5oMXri3Fc5Aow4jKHZttjiMiFYhHxpgYTWZqGMwxj",
  "key14": "4A1HdG74M2qzdUw5Aty7vsSbuKkgy9SZFNL6SDkqGC25rT7tpxyZGYvyVBEGhfPqe9qx9AGphbpz1hoS6gqeJqqP",
  "key15": "4gaLnf6zNNwsJfx2PS4tpXwgmu4EeEuEeaq5uhyVU5bYtRCt6BJCMiydHJB64icxXJ6xTfwUhKxAiirrzhJHjjrx",
  "key16": "4oK417WRt7SrVEkDm2zSv42NS7oetpRxFzuzxbW7SFWkE4wQeb5WKNMEkRzECDDcVw31Z5RZrpf279q6Z7zyVGiR",
  "key17": "3tC8pRozCSzsMWgnVZeJ53xrscnjHWDeK1j1mEnMTXjNFU6iz6xPSZuy1HRCc7NZmAGq2aBknsWD7W4VxxrHymui",
  "key18": "5bcY3iPDT8yZoDpidFux6iF21paavA7gBnRD44ooQyyXHNLg4vNANw8EymhEDesMrdZea1pE9WcURjaWw3XtvWAi",
  "key19": "24UeZrVuKZ4NzcRojZZfnJaZ3gWNJo2JszvxeDYcaYXhoo1HhchJqn88fw3dU2hVEJPGtjF9jaxZtfm9KhPFnz9k",
  "key20": "3YuNQ29hWnykVCU7iYPM1BseQYtNrixAxfoRM8LwNPBry8ihRToKF87HCtJfiNfXyd4BNMxa1C5EgzwPueZz9785",
  "key21": "2aS8d4FkopgQLYv6dcfZdijXtyvY5gmAu5w1iv22UxGFxfETZii1c7vwoiSDRf3Ae1bLLDoeQciwpneDk7tUQPdm",
  "key22": "3xv45vcVjAgxmT6Xzr2DPebmGvca77JEUikud9ueXncsaUG4eWemzGDPrRKaf2F1vdNoDzWk46vYBdSDKczAeGLD",
  "key23": "4ghY7CCAEBNJbBRWArrzjXz3zYvGQ4tQapQHXjL82YzukJNfJn76F158HtTpS8wJL3XaW11gBwtZh9virAHdGAnD",
  "key24": "4ZjY6aVYmeGWUVUWrXJgyYDJhG2pHWmBb8ziBhUoqoKGk66EJL8wDBV9pvFit2YgUvkZQ1vL8oJvkZjKgz3GPvYd",
  "key25": "4YP95gFFfRbYf3VD6dwW3ywH1wSCYQbxixmzLxsCreDPXo6QzHp7SXPVGLbzTCDJz7xkiLU39qn44q7cpxMAD9gQ",
  "key26": "4DmvHsquMrpBAGXj6ScUdfv1ksRbL8Z8m3LJdJv5AjLsaDWtw6S9JJTYqhByZk8pSRSwq11u4GHC4K6oqUngztxf",
  "key27": "2brSYURVqZjspRvGjVxnnLmTxmXWr48wUZQKcx4phkAud3WBRRGpPjU5JGCkhUx4y51c1mzJHsX5YifwR8gSEcis",
  "key28": "4NzPonchqRxNHUyg9ak1BmgqHQAp39deayKeWteKauHLfgtsP2GtmgXEJd1jeVkqRxyy4xNQfQ3dAmuYYSHgTfJt"
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
