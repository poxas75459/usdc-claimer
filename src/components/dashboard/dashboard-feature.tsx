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
    "4KXmyodSYUAc7H2tH6rqkgetq9tAq6xTG5YoqNA6onJandpLvhbWheggika5DdSrVSLDWZw8bv3YV5vW75DMyxaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WDdPZybjguVxwhy5ESt1QDNyrTdKkAJfps1cDnzZm6jzBA6SahNnDKeGwDPJXGU8sr2LCjMP1wJgxwrJJd4Zm5c",
  "key1": "A4YLMLukUQT8mVmTfy7cAuuD4QnCVsa8dctmDwptHw1BZ2yJoMAqk11a81ajEFWEuuXcLQNkFcYyzkhPNBs1XHg",
  "key2": "2avNdFKErQwKRt2ygguCXjmU27aGgfvVicBF565uRCN5D3Erv5fiinrbK6LyakhAJKcWQMUa4BARpE4Y6QKpsvJt",
  "key3": "uyjoSm4ooV7snf3NfnDwE1jZQ5UvvvkCwAS7n8vkmbpD6GBk9ttaAh8FgufrFc7txS6bNmWbJxN4479qejPhfWr",
  "key4": "2StzY5ScTALwxRU5WsNkZjRN8BAvXCmbDtiXsVJ75HBtWdEovQw4uL3DLUzErKVgp1rRF65Ri4KcAtwWjPgCAnHc",
  "key5": "4kmZKaifVUDpp26FXfSTQD3mvcRt8WhrvWTYFAS5ruaU4c56NiKBSY3s1fZRPtYAbwTyhBsnncvowpf8bxjZdpRc",
  "key6": "3DHo2iyJpKFvAJr5xNYpsENx1F1HBpwfMD7oPzbRrvfk3it1st5BGT9iqHcYuNEsYaxqrB2WhL2DfVSkfdp3FvLS",
  "key7": "2yxCRqX14xWrjTSdgsJFbPsScVM5BVdAPJ76czqgjfiKugkGbThKWJ7eKVupwYqy3p2Pj2Rp5FriQ2G9S7g1uA5z",
  "key8": "5pkX1eqq8XkcBkod7UMUWhbRFQJANPdXCPNf8FTNA9S7SKoHxiTGm984L81aWDq9jn3ESvXKAJNYnd6bEmEwUXCV",
  "key9": "36Ky4KEoUiHpcnJu25ra6eVjV1simJCM9SPhEDLXZFuRVKbNb8zUH4iQ3ory19yXZkJ2dpmJg3e3xrmDXpQCmhjg",
  "key10": "sfV5KFh9UhM36cG5ZephmfJLRqcQmB21MaSaihe2DyD5APT6kVidxxh1P6K1fyVpZ8W46BD7Z65wXKhsdFQipze",
  "key11": "2hVu9nNuQomSTq8Q3GeLsAP6za6D6RdV8Bm1yqjXHyYYXGLG73yH3tPMg3m8Xg1NXEU9tKKKeCkxuu9E57wxEx87",
  "key12": "5ez4CxQ2AXEc5ntgcUhH3wyg1V5vr1PxmVjjuWx5SNSg5LVT4WNXvirBMsZFXXqcbwhxqYR9f5FEyzJHitj8RVnR",
  "key13": "3kDEdsjW7iJMWEJUbLphLaS8urp8pvyyTqcQd4fpDefmh3njkQDiiP1BHc8QLnfqy52UnqBhS5rHXdXKZGqnSc3g",
  "key14": "37DR9L6HyBCb9GT5JdvmBjAwooVXvgTReVYcV7Townsiu7mLfZFjHt92X8aqKM7QMVFvTR2Mn2eNqLgFCq3MKJ22",
  "key15": "tqrKfDeHwxdPFwCdj3CcTtJSxo3PhoUNor8QtBESwJTF387y1yaRe3L82cqhYhZHg4qnZr89hiZeJSHVPrGxQjs",
  "key16": "kfkqfMbqcgzssZCVwZZc9daQ9ejD1SMLBZdwt8pWN8TM41q3T3f4jNjXwZdBfLdE7zt2SorW1Hfn4qztBzJNHsH",
  "key17": "5a1B4NyvmNJucYZHSyAMnGNZivayRV5NcDNbFQNCsnUzMVnxK6ye4bcS1yunoX3QHh9Tvw4khzMWi3K7tbgyEky5",
  "key18": "66DRFSekcYeQx5MuCZN4mDtbBzynZifPPQxeujGdLytcVJdi1DjvPx26rAwdVfyA31KiVQUcnVHWPEPhRVjzGaFW",
  "key19": "69FnvKQiL42nnBZU2bRBbto8LFKxunp37XKtEpiH7p1dvEm6ycSNqYbuhQGDNn38prbURAcrmAUg4wuwLWMS6sQ",
  "key20": "2prdRECcDkAeRf8PhxpRAaoG4tyw27QcESLuQWuC1dz8Dw48ianm9gQm9dGmVH1TnhFZdLvf3UVf5E2RsmHzk1yL",
  "key21": "3DHcBpdd1asHqSTtvdwkAapqv853bzvAxkdVsJtYBt4hvnemh8kambzJjixr2MdzeTLapH83mQQtvcTMqtur9L5b",
  "key22": "8LRjBWGv1n1yEtjarqWcxmzm5Ch4HWUrYTrhhs6auYSLqrqUd3cHtoecnrXpgrpdsweb5rD88DduHo1SK2xjtif",
  "key23": "46DyPEvkQ3V4bmztcDFr5a71G3FhJhRUeBiEo9KsR2C3bMU2sYrSY2ufD3kSKwswZCCYeFGgGd6gMEfqF9sp6Uw7",
  "key24": "32m3YsdV5NWb3ppQF9jPkimPUNs8RpcLTNgostLN2z3V9gwsMPCWg5CWdu9HDZGayAMYWztbvxgfqr7RZSsVJAon",
  "key25": "4okPfSnkMbGxWHWdeUZ7CaY7KwMKdZQWgbLpJywnn6oSX7H73dnysTTreGiaKEPtBkSLaSPCaeskR38vo9hr52ZR",
  "key26": "53yP3FA1hu7szJGjUDE6GyWYnnSqL62j6WtFVC4pgpt6wYVei7YfwsC7W9BJxcLpVjw4SSg2ga7xaXMtA1wADkib",
  "key27": "4hFd772kPH2ngpHUQL8c9FnGSKsHn8ziRxGdBLYV5PDMupeynLfu9HUT6F3a8VJPLNJMsKLsxF16eWKc9CE1qPPS",
  "key28": "54TYxPpBpvT4ovnPJtYbSoaz9ztoSQBHupwsfnh59VMFspRKMn6Uk3mAZ1AWuQextpJSQSv13xfzuRo6DBXjwNKj",
  "key29": "FuVijNEuTGEw7MjG6zswxR1ArdPJZRMAReCP1xatUfzAk85FxFLRZPTFMsFN7LYX1ytMzrkHM62sHbmjWiEUYvP",
  "key30": "c6GoP9t6bhegJJXTEHa9QZKiZKjKDWNRLiGgyoibXQ2f9t6ai5BLacvC8zV8TeB5aFvvHEKnz8QRe5RE9NxUjqH",
  "key31": "28u9UuM2fu3tqU2CGyhVW5EN6P4Md8ti9Thf5W5QdzBFGNYSh35NP6fEtAYBJEwpZFn7va32WkYr5nXv3eriEpNV",
  "key32": "4D4Tf1N2QgyjZCqMwKNoMJEYQckCdQkTKVvMvFzy47vEMDh3ow7mYWsYB8TKX7fD5MUYrXRL94zJ43sPx5nmaYdJ",
  "key33": "5i4qxqMEvDmaviatjKmd7YeRNwiMpfhPtky8Gd3xTW3QNrSAgszdmVSp6JdhpXez3xEMBqY4uZLEWJw3DPUkEpMR",
  "key34": "3PmoLHXgjpFUrPHTc32YgmdCRhXq7hPHCJNxQGBZbEwmB6YDE7L2CSbN53BhJNXNKBPUBBFzRL9qKse2WsCA6Jkp"
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
