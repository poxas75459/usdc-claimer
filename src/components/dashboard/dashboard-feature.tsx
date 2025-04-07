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
    "U9j4T1BayEkgr3aZiAysEbp1Pi89yTMv9g8oKfP3ojiDa2us3mSgXNZueWHKtoUi8RRwWadC4hzQodErJPSewgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGP7CRvNanf6vzX17BE9bZEcQhVER7keeiiyKG4F2ADng8PgbDrUvi71hzCigXT7UvZiepg1k9zvo4jwovhjJZe",
  "key1": "5h1ntGcPXj3Yua8EnajSajqh5EdqpW2aXm3GXU3CXjHtaFPsxgXoG74BfP5HCQBuThdQryysc45he6yrafdbveGQ",
  "key2": "6qY8x5Ci2iDGtURTYyJD9GMQjhzUtaTpYFUWS2Sx23TH6EXjp3XiqJUMSnPChTAG8YS4ttB4CnjSzVN5A6xVkPQ",
  "key3": "5RygTbThW9XvbB3WtvrBDjWfsFVq4bjmvG5XnnQMX1VzxP9uVEgrRoDuhKUDyUcKBGgvF9mk8rEYBHcnD7MYxAAU",
  "key4": "2PRKDHQLQGMD1qGq1XBTsyFZNf3dcbbjoF3j7P7fvUY4NvNsBTJ3biC3P715PUZKzQxN5Dw27fE9yYCn6dDGChRj",
  "key5": "24FomMoqvPpy9xzK2muQTbMyWpQ6Lu4cJrbhgP5csF8UMyGoH9r91U6nxviWgH17qDFa7oqRCDKM49fUtEGEVNxZ",
  "key6": "2yP923aixwqmFUmMXAGcS8u4qbo3DLKqZkkz8Rjy4VpAbZuZWAMk8VM5BkBqLrKW96Dj6R8Sz12dz4Jmafo4nxPF",
  "key7": "4ssE4eydqH54QiAdTpset2Uh6mgvPvGgDnT8EmtfcCGknLXrdKVsVjFxzkRcHk9ECtjyjie8uza6FXzU9i4f2NbT",
  "key8": "25p5rSTrPNyutHMCBceXtr9aSYnSgGpegFXbHYzjMMNMMVDb3Tj1pdRTw4dWZ899jZSHLunjfdyP8jBDXrQD6v7L",
  "key9": "4KtHMEi1dnWQXAYhz46pTmY5uz4pY72XXFzZZ18TDikwHPEWC4wzL1P4wFzRmoXkc2DxZFEyJpnCExpXZjRtLcsc",
  "key10": "4vBwW8rbr8CysACp8nbQ26nhiw5FdMHEBprV5tNeqDEG6pLz1NZAkrYaeZLaUZgTK8aFUq4icxFeGRrgQEXpiamo",
  "key11": "3HJvWXSpwg1msFda6Y3qLU3mPn4pLGYBt2Qt7DMu9E9M1ejFEBYjzVRFF3TnDVkFh9vAYMEtgpWYiubGG6FEuAbB",
  "key12": "5sWB6SPWJe3TdSNWnXszAVQdN5phhBSjdLiiMz87Ki8i2htE4tzMcqSkUbgg17BkwrWE5fLysjLFw6VmmTfAsJNF",
  "key13": "2R22mrJBgwKUFrJVFMpnVRHgd4zawTUsrjqZxw1CjCpeT7iNVqRE2oz2sWzFvMFdV3LEJfLGrT9mdhBNAGA4oGni",
  "key14": "QxrKr6ybvJ5dkqCQqXyqPmZW3CpCaFnchv7R5JFXRV2nuV9aULdLhwfD7JgDbSRNXUWmXQXSm1svj8W3svEQ514",
  "key15": "9sRFRdUiF8GLMgeN9Vqt53ua3sdTJtBer5W7fjwHPkfVM4piWWjCk11uh2bzcazG2pZNLkbcZHwR7VZWjVWdput",
  "key16": "mRUUBEFdib9j9w8ccg5ETXGB2hEqrCgwLdhmJWsKJW65guVdEVzZ7E55TPAtrmSdUqAfZ4dpqesx5R81XZnkan1",
  "key17": "RsiN3sA6911mjZVkVYftbk2X2GkhtDTwPaR9yRnrx2nB5UriWJ7pbqrEjZZ3ZCE5d8bmLUQSroyRGRy85CQmf3c",
  "key18": "vunNx4vrvDPvs8wuvCxFud6VqusfmL4sfiFkxQDnyuvpKaiR4oNJJPoyg1JdUzLtxMX8dNrVWs8pqL8m4A8CNDT",
  "key19": "34M1LxCxy9U7PViYBvMTwnyJgEqgEAXwLBQQpRAp9YytMxR6tM2KyBiMAuQSwayY1j9Hasr4gqyt4uYpwEetG1sK",
  "key20": "3TkCtrYGAUV9RdcEq896F4cKMZFeLUfEdkaBwekCERL5FyHY64HHPuyaGAgBzb9fX3TtP1ZKz2E8RDxSXYByWVaB",
  "key21": "zBW1d3Z9VNMXEVbB8Tw2eqaUxF4mNKagAhAkAQJtsRYb35CAQSE1rfeyRqyQwuxMK8YrPQHbWNcjibsX8wbSPQd",
  "key22": "hcPKuxJ6VZCuePQVtaJbC5yoqtuxYn2Pknkyh7CNa4hVbyt9mB3vSHueEj89U13hGv5HNLz5KghUagVGP2Ppd49",
  "key23": "24ehb6D3tUeKwnRMTbNNj15DBbRkiexPFxUbYWfgn5dW4APKXzWK8xqxjmXRrJu5ZTbV4FnEjJbmQCyM3jzLNj1d",
  "key24": "4YHquH7whvikckwr8Q5H3yCrMdKrazKqYRa66U4L76pRhVUdz2cGcj4md8KuvXCfYk5cshagZFA98hgi3GGkzHNx",
  "key25": "22LVqRK18J2Q4EVmBcmQ7jcDQUVNKvtdQt9unPaM1Cg6T9etVB73Lkm5NeRcV5PxEWHAAWeCKmzFTLPwbEvARakE",
  "key26": "3sJqdzqFqJ7neJy8TYa7ncLt8x4WbgK9DRJzHWT8MZ6jzTFjK2kBakBhzbXat1u4Q1HLYBfro6Pc6Q88xYPA7zg1"
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
