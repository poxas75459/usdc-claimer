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
    "2UrGTVcs4XTwrLJKAEbQebk556HgSZvYdBphz5YCDZrCgGvJFo6fZeLQ6pLVbn5AbHfvjc5gDsaAaenREmJFC2Vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRCgvTWFXD67Nkq5ewkpYrZJHVuCBGGugZrDL3QoFcSZEnAdHydbiFKGBaaBFPukeqFrsvBsetA4mQ3Myqb32oY",
  "key1": "4AGEaELJTSaQ4qo7Xys8kgLP1pNB2dg4qq3PLm7z8onPu3UkR8wANJgGZwvV2b3g6dFBaVBvHhvRSfQJrCmiNrTK",
  "key2": "2xjNwJw68gXbEyCUdQG8SNVH59PDwi4TxydtswDqosGNnoQ1hgaJYoxsHGjth9zD5bFD5rDFr51y3skxEV3SByCH",
  "key3": "5wi4uVJRxe98dZrNdbHxUdcgxCbqf8J24iYugzwaL4VAAWipNpdb4L9PpLwbwuCNkdYKT7Un6JM5XZFZxyoTNfax",
  "key4": "A1YXz6P6k8EYcEUZs7eSpJLQgurV7c4x1yrbohbYnZRiho5Y3bUHAYefWjmwYqiru2vhj9TcTQsPRwiAmfKH5Ge",
  "key5": "ZUzh5XhiRg5eEKEbjZtdsaUMVtWJqdhSs3R3n1RnMeDoaF6jcL5hUStcYuyqzaYuWEMpqCm5Bn8BbNaCvghw61B",
  "key6": "2mgRWgMeGaKmunrKoDSv7hJXu1jkRe3NNBDx1htV3kvEJ7qXLgVwvuzEfvqAJ5VTv7o1Liuz2Juo5YKaK8u6rTtS",
  "key7": "4GNpAszDEJsKMqg4MzwLcSVYJobnt5TaYyEJCGMtD3kd1cNMmGKSBMuy44eMmMgVX9ycdfjUbYhu2UdAVjfWvopx",
  "key8": "93gpQYBqyeZr1BPQFDzfFhb6JtYLBBL2ZC7yqjfhF2no8P2dgXMyUtJ9458uWba7By3yJtKhMiPegHiaxXLoKBg",
  "key9": "7jR3Nf6H8pSZqJ53jAPqCcm2Kk8SAQqFjFHaHbYFP9v8q9JhMRqRxwQJjyngDJA7d5GCGw1eVmYCyDWfwGTJoDy",
  "key10": "4gk1oVkA2mjVWb8fX6suBKD32XhsW1waMGr5pEWuDWDPFExuLsHAEtPnMoYsmkFipeNf82V4qX79xuymyAjDouKR",
  "key11": "5Yd3SNhqr3k1etWwLvVdQs4ypqsg7YmgLpz7gtCx4dt7thJGbGtotFhbAdaJZv1ft8CM9TUTfHS92iJF37c4WNiP",
  "key12": "4HLkBYxaNYd4hpQ7JR8GT82h6FYFWG1ZZ5z7LPgPwm1mPyv8hBuU97hd723vWpNQxML7S7D3G6rJ1amae5d8Dnk5",
  "key13": "ruPrCvaCq5vPH7V1cSa4hKjzDiG6DXE1tQrN2usYXF4wbTihkvW3bSRAPiuSN6zXjNVQbUkRPcGFeXn9HDKVUhh",
  "key14": "vSF6RSG6bYypU7PWFJRFkbzVCRJJ5gpaZBC2LhXgnG7MMX4AqZToWdvMFHQNbEzQFdGoNK6UXRKvsdTXznQ8N3p",
  "key15": "2XLEm5iHU43PFMAd8skzHJoa1XiJFbNDFZV6vqw3HkNGEniWSiotY6ZNQcqUFPpWpmYfRZto9EyogNx2irSQeLCw",
  "key16": "3SrmEVQkFnDthTY9aozp7exL2BWLcM2XPPy4uVSvF2CDPqTHAH1v5pnBmEbLtmhXD4iEdUPnBMiYgMpNnLcWri7t",
  "key17": "2Mn4HdoZgHDWB19aFc2Fw8nLWudQGZSaNzLof1UotQ9Ep8QcUPUN5CNLdNVys6mm8aCJsZYdmHGLnKNzSsF5HdG5",
  "key18": "tgWPxA5yBRCfa49WCom71iGjdYXWFcFZNtipsCmuWPWrRkv5AWYUyJ3ZHYoQQNFVnm1u2BfmMbJz8YSLhyzAhtg",
  "key19": "639Q3H4MPjgGvYwZtq96ERyuvmJ3zwakrvWRHRTmF2bGzsWFvHmLhoLu4JZohktERNRbWk7mdw4MgYuJcsfHm9f3",
  "key20": "23aSUJ1uHGqLemfTDRBZepPFHvEZbdmwCjdLw5AxkXxtEvTGumkt6kroncZHfJHbdsCUD5ZZ8rCogCnvqCMks5wB",
  "key21": "4CBRXgocorHQJYjPPyUaDv8b9xiTLdCLndNbJkJHuVSfHJNV156jGNFDG5SrVWWFmXsccKo5Z8TFaSRva3uqUJNH",
  "key22": "3QBayXS5mUVanesXCEoPV5BkmhkXo9eDD4GGzGVUJen8YUk9rwZ7ER1TqQHFPBru1xFG7CEYxUvznTVadmH21A3i",
  "key23": "JGXShkKYG7kcs4ezo2E55ibu7hpaBBMoUXEuo5BJ25oAkRjyLYzc34dKb4fov16aZeTBiMiwMr2uh1mDyTygFDT",
  "key24": "2HXpkBhrxD14JbNZCY2DaFsXDzBpAdxPFtjgf3mHFU8Pb2RAovXZBECmTkTpHZ1p9H5KGqVFEQhQ9bGDBuC3iz7j",
  "key25": "2VEE6JiLroK6bG5ys2Es3hESBBLNa3MB1xjrWzmxSSsqWupYWteqwNBMuFF6Jq4gvHFhe2pq26ZGw7Jr7V7UxhwU",
  "key26": "3zkBKR2YzKZZ1RpGgtyfFkpTEV8i87VAyjp38rnH3PPQ5Fy98DFxWetLrmJa6hJStdB7Ax7ckBYBzMLafwycUUc3",
  "key27": "3fr25aT2pEJk3iudNKginHdcAhptwMyoDbvQTot7mfQrs4pzdSMaeocNpY25x5NY1868rECmqGk3d51ZYK152kpW",
  "key28": "epQ4MQXSppwvLtQkwcF88qDMpV3CRTSsx9bJo8C9VLBcN6jJTYcU6J9BPf8ZN2Z18wdLuGisxxnzH3CyZMzKmJd",
  "key29": "WVy8NNWi1KheBbC9ESgK61iKzH7ff6iE3w4ddPt4oU5nP6AHiHF1iM9pp9h5BCGfht9ZPcRDG1RAin4hPcsZGzi"
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
