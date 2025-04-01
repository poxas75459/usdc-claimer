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
    "n6Le6VqL4nvfb7cdcCwnCPaJnTKRC5MdbcmpmmdZT9xoBwcYbCFaEuQTaq1JQ31xyVnR1MjkVn3cQgSWjqrzMhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VD2MfyUubN7QyP6ybzztWNGwGCmoRnchDwdb1xLFFmDgUV8iWso6HjB8Us1rGuajaufbc1G3c2Q187upnASfkte",
  "key1": "2MNfHBBnFQoXYVuimepqXxmPtrMhJ4khge1jEumTrGbTNZaMdah8j6TvPS2YJ5bwtu6miSf5n7v33QB42M3s3CkA",
  "key2": "hsZFchKz1HjvYQbmBwyEdFqXgBEbr4QNZamfswV2H886rQXMbcPeWWJSRCdXuqMsedJ33CsbUCaR9zks9b4VvaY",
  "key3": "FRsvArrNGVrxy93AVvxoXQFVCRbboBhhvr3vAZTTVyULbFKLmvP4jWUcxxYVMoTttTAadt6qGs1vjQvbVyg8oHr",
  "key4": "2pwfhRB8VDKPL53wEPHVrQMdkP2rL8qxyCYLAZKDC8gYbgcd6eAnYVwWni8G6BxncSyafeKBhcgVe6gJatyVQH55",
  "key5": "3tMwNEe86qQxTKXZfHhTp8kSbRzvhnDVVwrkt4WsAo66mJfCf8kP4DS1kcSazZLniKWXesEGoxnBW9zwnkPZqFri",
  "key6": "2keG5VKJwYeVsRu5u2r1mfbxNKviZmxgqB49NEqQMWsEgqSDKn1YFukskd9FeSkFvgagwJajNRw1bdJbosHToBJy",
  "key7": "5tQ5worCQHDDN9a6hVgWVT1tnxy2eSZZP1G3V2HBdVfnnxdbUWUooUTcfzbLVnmpdYooBGVjDFTscaCvNYjccG7z",
  "key8": "34osX1FAXyi7wy6sDXnkkSJD3J25paYszpggg1KpYAzSQVSZcyxUQNuSoC4Qce7tHAPbYmJAiqvnoGyt12YcAsSZ",
  "key9": "4rtBBYZu1w8WC95ii83Cx5pPX2qigCU6E9svbYfRmzYTePQwsDXJxM9gx5to9PPhi6pkBLrTTee6pys5y9mtPaz3",
  "key10": "2jp6n2bASCYRoizVSQBfnfg8JHbAGrXerYrBfM3DdFPipJ8GDRRcQuFbFVkGmmLP1Hp6DpopZn6draVYEwVaT4vZ",
  "key11": "3vYurnP9yjgshJEbT8bc1MXC37Mwq4SGmfYYLVErm7xXHN1uRRAXaLj76UtxT7Me9czqRvf2nFNXRcYBfjwHaH3N",
  "key12": "4qK3s5X4hgo32VzgPW6bcfX3PytTq99XHgNTFKQJJ8vmmkec6edLDbKYR8VUarH3XWirj7pe3FswF6oWf3qfYCzR",
  "key13": "2Bz771tVhWYQQBgYSQXHy5VUH6WtC1mPnuDASmsX1WqYVuj5QUCpE8tANrWo442uxCZk1wuAA5ZU3aWYNpKPaicL",
  "key14": "4CfqvHxVC7M3yq6SW324ZLQ3SByofRNfUvpEBRTR2N3pZEDVjEF79PQkaKetrSk5sQmFYLgmez46pHxgEL4LtFfP",
  "key15": "4TH6rNwgJAczRBRgJWkzXrHWMvsbssswpVdKGQGgv41WM54gAToCWB1CLo2EheGDY2bLedWN3LNbAg1D7xg553dH",
  "key16": "4xDx6awftUkkxvr8Gjc7zx6KrGgoy1WRRRvSnRTpwcmQsEEbcFVtQtSjtRVGVYbGEkrYNm4U9ceSHHg3bDRzFitL",
  "key17": "4KJNXEqSMKkmRDij3A8UUHB8jt4bmXfBxTAAytQshHAvKPbE5hXKUxhbYcyEe8T2S1H29YPqMbNG23zHQTumtxwk",
  "key18": "5uuhfXfUTdPgmWFBcK5X9XLSepgiESdSrRKnYSTtPsAsQa2JZ1PqJE9RJcPaF4EmTZMHzPpULp4zHzG4gedaMRXh",
  "key19": "3Q8UNY8B27bqNTTsjmStqoUQ468nCqaDRF2kXLc5icw8iJeTsHDCGyg7ksjBYfuWc1xJqv43zuunrvhgFsHjtf2c",
  "key20": "4QhvnUzxNgHH6N5rXZEQD65xxy4uqLpZj1SnDVFN4LRkUis3e7P5Z3pZc2nAhsJHo25nweSShceC9aJxtCgdxyES",
  "key21": "63LyFB4Dru1EUQ68Jke13DvkE2WrqfptxyweEsv62Bu2sJWqgRnLQdpe2aoTqjt8zckQquVN6kmA7wujHuK3Jgqo",
  "key22": "3YmzYADzKv1LdQBeMfjJoSKtHPfoZbeHiv7biyvKBmgzfQjaBwGhRQtgk74mPECGsrGNQCnb54VFwnFHutgrGAWB",
  "key23": "5jzg1rM6zmAaXcuhfKeUXHNPqRJBJvGwZsyooMbsvFzUEuyA67HX9aEwQCANksXXbWQj8DZD4LCQzErj3NxH9Ybt",
  "key24": "5Hi8BzApmxNvebvBRFvsfwLcJ7ZjsafLTdzv9ocobnYfkLM8YRbP5Pt8Q4JQksK1LZyCVYHKPoYy3bRVsqrsoabg",
  "key25": "2aQ7i48PnB5RjwtPiPArQLszFRPBKhyPmJ1ThqHt5HY6JB3QoDMa82ZGL2eRFVSNceLZhcoSzUwvap4jxXcPSvpH",
  "key26": "2rzjCSBV3njYzagivdctmxMYbDYtk1uuZrRKXoBTjiYjMvrEbD3n85EiVXtvy6mFnbVYDRpqkYYQzKRxKNDjM1qj",
  "key27": "3zeaHgeE88r2txsHymY4hC7Hj3RyaVYT8UjaEGDWPMfFdYoA1Kxk4ydgjnYRccqj8NBcHgsJTVkhWUqTFpKvzV5N",
  "key28": "3fSweTAsWLcvSsydqdmxnv8DRufHZk6BxQgbEgcCdSf1ADSSbDvUM7PjmaSkmQLoqKZqej7Zfc91GqBrkdP8KqUK",
  "key29": "5eZPSUY93k6YjbFnsBevSwzKbjXAnURaFc9WaEx8SeuEk3AAa5RAaNff3RRETu4TzBeAUhFav4pTN4uAL7xbgCem"
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
