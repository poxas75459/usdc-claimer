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
    "H3Fz1SUJimYwXxighitbGmpQRE69g1qWSYAY4hyxDSVjR8n4ZjPDg5LctD9uei6tnfMNbrzM9VsS6wrCyBKU2Af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nitsJhxpB1QYGjkZNuH8LVDodBh4MfcjB7Wfr638xVYSTJBU4t5nJyfsMd72rLz6o4xhDBfMh2tsm1FzPtnyc3w",
  "key1": "5J9GDRtLroSWKVLU8BDhrgbhdUiF4PkojuitNi1H114y1tpNK5R9jHunu2Tsuv9mGz2HpDAQGssp9maiWioPwRrJ",
  "key2": "4FAahWfs81RPPBrbVmhvtK4JSoRzE6Q69eYuDpLFsav5S3FJGy6UJmiJoTKje8kiTjEVJfkZMaytwzSiURNG2VxN",
  "key3": "2SfnFqYFB91ye2Lx3zdFEP9s8pKbpKEUQX4FSvebtQtaFHDxeXeJRBjWpWHYzVauS5pQtEXMe8G7g9cCH55Y6ViK",
  "key4": "46VPD351TVog1PMt19d2m4dobhbMxAbWpdCV3QpUDQn9W5ysWMFYjRYkFj1tP9B7JpcEUAPcjbt7DDYc76eMKgxR",
  "key5": "64z6kJZiEDZjLqYGxqDKTnerfzM8QmVPPihX7CBi78ooqKApFYuU9YuaCeTJzP4WRQNnogwt7apFGvN6uU7AyCiB",
  "key6": "1spSwu5QSPWALa3CYUe22VabNwpSzuwPYPJJK6JjJGeLSwrXwyYLxBzkzRsqzqZtszVMrygFpLXYezVRARQYsJx",
  "key7": "3mjWq3KHMrQaaJyNwXsV5V8AcUHU43wVbCUx6T3Rdxv8x9vdZYNDX6AqtAtzdaasko5VXB4Xi1LjU9ZfErS3Mg78",
  "key8": "4wyf6V3YYnmBiHSa247f4frnhkWuM8mHTN9Fe9RBvRxqJ4P5LS4GFxSGrSjyebDQTGTaQaQ1h92dMJd2KTuhot3k",
  "key9": "2G7parhJTRPZgJ74f4oggwh8diGwZ36Nwf42zWR4MuGjrptuKCP5xWc6W7VAgHRXx1UACYBV8KvRewwPNn8hJYJZ",
  "key10": "2KESVKfYEP9ywCGogHP9gsPxMV6evAgC5R1pJWUCYwUPmXFGwqjkaJabbJzrz2sHkTnVdGCpPXcGEvxk9oh8kW6D",
  "key11": "5qG8QopyQPW1r2swS6aePK147EpVrUs2Z7ugd9zeYkJDjdhDfL7Z1s3hCMthKszS6wLS7zYJi6cDjAYHsHTmm2X3",
  "key12": "3EekHXK9HHYwqMMucmgJ8VNSrBvpSQ8Gmmt6puyJbAC3kq3W9VT1saJK67TrfSHbrvy8UgX6bzre5bYom5U5SgMe",
  "key13": "2eNqmhAqCqBcLjeKTzUAhtjvKummKPWv9GKsdjbm61r7g8jGTFFELM7svegYAr9NrRD8VvoqFHxK2qTbezBi7B6y",
  "key14": "3hxQ5ypZiEV4xT2m3huYVYzCiahrP83xT36Gmx6R371E3JiGEEkh154sNNNAUba128crC8SwfcxzgJTHspkNQwhX",
  "key15": "VStasP4F7RTuiXLRNbz5bwm142dCN8upgKR3Cj4LNb8dHRPyKNTvruAAFg5LS4EVxoLgDZTDxiuiW2ykMmehvnh",
  "key16": "5uMkycZKKc3mMeyJ5WskcfBxNCxfmw5RGPy3dEXhzx9DmWTaJtXw1Jfr6vMuobgScr3mzUi6vQH2SGtR4jB6NWg5",
  "key17": "JuQaSnWmCLK1Wt6znJorc1TQYu81qxXxboBKx15thD7Ep77bDXV9VJfSLtQMF8uHfnokqW2DTq9RPJoxT6FLASd",
  "key18": "4gLgNbn4aEGdEg4vLBu89WLCdx5qZ7eyxpw74y9hu1j17qBd2vRnDxyP2sae9MjFzu8TMsUMs2tCfK1xAnwQqwMk",
  "key19": "5wETUpworbQLpu3tQrkNX9NDtvqvFwuQvrtGBYnvrJPGky1igXDLugwcs5URk8YvEdF9G6FjmdVr6Y34e3QQiY6N",
  "key20": "Ryvzokn2UQc7M3xtBGB5Lb4zhPYJjj8Pms4vs5jcVd4C1hrcmrPn83Ve3egB3ywyQt9TZVT2vc8eHjUu1d5YnML",
  "key21": "TZa2kpA3eoM4JKGwh7cEVLe4mx4rpynaYEoRF61LQPvqLS3cVaG1X9bLtbGexAuo54eg1orZkwYmoMZ3Uwgb3dn",
  "key22": "3NjNQCpJ9b6oSfR73t61hatSjLAwYs3kq5b7rkjTh5ttH99UGHAvV4cXmYdmaLaYSrcEPvu2yQcjChbRA4GkBmUo",
  "key23": "2n71wNQFzPYp8rh7g1qXvnHWk5dHWYfe6T3522Hfu85kXvquJPtUNJM7jEPAJ4LctmtyonyZzjJFqrs4UHNRVNPb",
  "key24": "4hik54EV2CDSzyz3k34fSB5ksWeDPNKT1rKzZbfhsxdF9LaDrKw5mSkjXp8jVUX8KkbXgZJUJhmsuGneepJ6FwU3",
  "key25": "3Md48JExwgzV7L9FaqccnrpYn7ccbSDUwn67te1GgGN8Twk3yExzpxpS5m8beA6e9H4SACaYw32EkbskscCYmJ6X",
  "key26": "5ubq69fDvVfMxzgiFj1npFJmUEpaBVk5nf4n83QHUm4cALBX9sU6LikziVU9o6JaMjXy1PnkRzNuKSWs7Zc2NfiS",
  "key27": "W3oCVtaErrhKJSuTHnhk2z5vyhRwQAgcbcn8TJpyEUsRuxcGYxpFzuqZEkAw5LuiT8zbV5B5Q96JWez2EQgysve",
  "key28": "5A92UHF1muz6AaoKoeraJMKTvGups28hknZu9wJuenRYtrMAkq4XwtdVgtZbKgGN4Pbigf28sNsAfBTvmuTcV9R2",
  "key29": "3o1hsBCpDyT6Lids9k79nCymbetxSivBCzzGmfPQzC7s3neKvgm6rhzp8RAH2d3DeVeHL2A9Teb7N91J2UJ422WY",
  "key30": "5gfpR7J8JvNCJjvQtHxWDzMKyiJ7k6xaSypMc9PzUEbXA8q8fN4ZfczHscTurBcdHEiW2kbR38ZxNBBzh1nSZdm7",
  "key31": "5PKf1b84HHVHqqcbLEHhzQyQyeDZS2mwLZDefeBQ9bWzhmrFDk3PETwcecFYVpzSEsJTnGDEfep8w8LocHGfsPW6",
  "key32": "4ihLJAWoAyFUrDrDTdKPPLKy4WWCWkEgG7JsFtuAiyZZFNoYafiBHJRpnDwn8WJFSh6GcNk3Nr7ZL3KKy166VrGv",
  "key33": "3JQt7to4uf9aQ9u9D3ddVkqQd2VXmtgXZfpFDZtwYxFEAi749H15W1QTdfvZqLgrHoPvEa3dRUg4AmBMWFGcY7Wm",
  "key34": "2Xdu9dMiMQicDkeLZ5EW5mwqFPFZf6WX61WJNsa5PFajeub88AcXJdYA3Tdk57sDY4KPYRNbvfqVS7SBs6mPLDRG"
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
