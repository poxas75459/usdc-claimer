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
    "YtzJz1eC5ftFkNfW4jnptWX3JRgMP8mULYCJ3cca81u9KezRJ232sjoLtmPjNRCBNmYmdak3QUPSutPCBxTW8ZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nHufzdQZgojtGjdXHLHfiTbrXg4bKLcHA9KjoFBmoNgRFwrpX2SecPJ6eCog2KM5RVrshWRttcdqscKJtQDLeHb",
  "key1": "4XTJ7tbfY6vU2u8gSm4sYo2aRcBuCZ398CbfqG3xVBE2G9sYzPLq74yvYswGHSE3BvbJoFrcaPqR44DgSDkdLim6",
  "key2": "3XNd39JycvoBU6rU2tsG7Myw4DoM63WSJqciXKxUyVvMbVbjYpgtXRnDGnf4NokQcSnq5ca6uTuuhXFkgYHBuWJ6",
  "key3": "3UpgBtipZKTt3L3GC9mwSc4PNQP2VQMi2oubwCG8TRogrGvD4dh7oCy5Tc13rhysDRNUqywVdpcJquKtqJLVHSHk",
  "key4": "4KgPKsKEmGnCCBCws2AciDKTTF8A6rKUeZLybfbzajmD84rmWE7jZDZP7TBt9bRgsiJoVX67Voeg82PyawpnyPK",
  "key5": "2U66kVPmpCeQWRBWw5vz7y3WwqMaUagpzrMGRdc6WpTbqz7oK6CwR3EUrf2mmSALnyziLKyvUMHALeizdACDF7KM",
  "key6": "4ttxTGqZWpszDnF5L5qp88vhAQESuBDZgrxVG4BqfBJocyJebgzKPScKdUqQPQGNJePDVyBpRvtPgyoVhGtxVMux",
  "key7": "3YwciJmxVGY3gNXbmUpYBAeQhsfkDMZqNFJ8uqntCsgVzYtsELSLtudaGB5HP8kU6jSbEtman9ua9mTExapdTUDG",
  "key8": "5jAeQREUqsdhMiLG78jJ8akn3qgaFMQa3UYcw9kJst3UZpiMDG2ugEDRmWMPi6t5BVH4S4q2fELnorARPuULHDr5",
  "key9": "2xENSaasjmPSWZCg6rKU18XGZTbmGitrb6XhCFLQWZVNQd6L26w9sFA387Qwzc4LTU4RpxcxybXsZS9vELiH3xkR",
  "key10": "4fHSK1c32wAZ1WLUQz8482Z83bzJR9qhtL9MmUUpkAWNVSqJsJEr3kkExBvRtcpow5sXXFoM9hS47JXi2q1fPCSr",
  "key11": "5eBL5bjDDNnBjEbE6nX6dxNMDvy2RnzFDprbtz4TqQd61EDg4EmnDuLVXvZeTRLo7HFezDcPw2Ea9HVEpLr8N4ER",
  "key12": "2szT2B7axXjVvyrtXb3xdv9rkvhDYF2MSML6eL5c7NVQBobAP6xhguxrCbRdmZGHJcM2kjFLt529Hxrn179557xo",
  "key13": "ZbSom29L14K9HMycQmm9d8z3z2QTw7uBsNNBCRVMgZRnYbU5g4EmUcnG1zqepAi5Q8wkprSFFDyMkXdnNRRANAp",
  "key14": "GqgBrhhSqhhLb1YwvTUxXgjp1hua57UTpP4E4SSnz3AsZ5qMwLLBVoUGh4hvHpVPf6w64555HvcdUN2bypLntZd",
  "key15": "5JwUZD7gs1xR4WV42aztXvoyYHCVnfZ53Tge4d8RervpVDuwYopXwQerDK61eNoarwWUn4JqA77oYzAyLHtELYvt",
  "key16": "2BzQnP5JjzxNHkAYDn1tTsxRGpQ75WGpXfcv1mkGC7iFGkDav1dveP7zQE6mdSm53KbwSZnwZTWETN2RpqUtMiJ3",
  "key17": "PTEz3827k1xwsXgMCxZaVkFPhDtW8s8jSzKp2q8ZPvPuLdk3MJNJBcbf1rC7wZENT48TFn2D7rfyivdhvjzJTWc",
  "key18": "W8sMrzCKEVPV6Cv6SsSqRwAgVAwz6HbLTz3acAhq4bzsynQLTExwVNKRCHkF7WZjCrUb9qQszNnxxAmcm1VGMML",
  "key19": "2LeVjpd6ffunL3b7n6LgFBtUP2uqFPdjK24GxSf8DBBuj7f1bDgA2auxiqw9sxi4Josht3Ur9bE2TpwoUKVbnUtx",
  "key20": "fUVkLyHY5Z2Ccj6xchFoc7EBZ2hkWLUzu2ZfURBJNR8hEDLPvvsAncbdoWWBRCLoNNqLUqjkHrYttLicMTMxCxb",
  "key21": "5B2ceyQwrqtTHeu59zCeH4c47FeyD3b1NdSWd4GkshAhNPPK6LB4CH6kSuvf5o6N85gdSD4BzY3e8vTMZwn5LZmS",
  "key22": "5xkZG3GLHYebGVYv1SCo5u4k1HHktiCGtnKhZC2HBzx6E2eFrxMqd1SgpT3JRLusB9GsQGbZVkXc4xSKpqVcVgTi",
  "key23": "5rKVEb85GAoASqSBeRWY37wyMnrSoL6qvCbBAQQqHNrSsXgMMJU3oTaHcgxjFnMrrNMm3nYSxmN59igMy8qpFsy2",
  "key24": "pSJ8dqvc2yqQqK2TNq3cHquEGcx116gkoiL78FyBwL1bRG21C6Fn7UHhRFsQemSc6vemksRxaeCturdp8Tv1e7r",
  "key25": "4Cu8EHLXy2dk2whvLfTqLfvcWUmx3wjhP2T7RJX2FLDS3X5p87eZn5w4wktZTj8xJ5pnVL53AYiWveo3Hk5hgcj2",
  "key26": "2KBxyCp5GjUJnYdXb6Wwb69txph5tvgg4FXWF38XJMzGSijDLrDfXPJ6UmePYaspfK2qJi8ezK13bghHJgFzY49r",
  "key27": "JntaCJbwMdHFoRUpe7FZrEguhdRQVvBmdYvnXFiHLmvWK6KEnucvXWPCmyVPCCvK3YesgUW9acFhxB2zqvzYQQe",
  "key28": "353QS5m5TsgQjbC7hLPwry8moZbb87qH5Wv5xhPNAYVkbn1mcbWGauRmtQRdEbdq3q5449gp6CXmqRGJHU5rBXvC",
  "key29": "aFxzY21U2TBfdQev3asnQMdorAsSTpkAnjsDceEL1KfjU1dzyi8s9cEDszWKUHbXbekCjVERV8tspyRFyEkM8Hc",
  "key30": "3V2MdZ1Y16ndcs2ib457dDEjU1WLUirYFreq3e8LBoToA3XzQ3okUAo56MEg1uauysFrY2L5bsRYkCb4m2rUPyYt",
  "key31": "4A23zayXuPcg7TxYmpkYRGi4c26AjVPgogXVTwS2zADo6GttJExHDN9cQFERQxpBRDkf51AJRALapQ3A2LKToUa1",
  "key32": "2SMVhydXiXyyJWLFkeNMMNsTVnLFzS9ShguDg6aoYJdL1Xgx9CwPb394SDe3hLQrMyokn9E55TUtiasawzHL91ch",
  "key33": "3rsvKQkL6vpsfsb68ajTrjmKhWX4mMt7pci8M2UNiz1dJdAvcxhmEtxvyfSrhB2474DtPij8jDJSBYL8ww3wri2u",
  "key34": "4tvwzd6TyGcyw1LH5m9f7xGgeSJuzTZzTUSftigYhFyR2KTzmLuAQffeYQrgecNDWZkVXjvFgySPrEPRoWxc8ZKC",
  "key35": "4SpJSFJr4oVgUh1sizkf8fmkYti2wDLZrsX2fF61cfMTN1wVnLoP3G4oMfY2fjC4iQdUu6HmFqP5tHfgxdYPCTrS",
  "key36": "58f5wCyc9P3SzXCopioQvzm3AExE9LU7UqwAz6qy9AL8ZHjnf8yqYuzs9SAoKqjeVnmFJFJUp9sh6DqZJt1MJrAf"
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
