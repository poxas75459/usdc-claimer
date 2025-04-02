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
    "5EEzDLVaQiCAAQSrazweA9xYy6eVQ7tQU7ZakeaD7WWd9EYn7J3EueARZNDdcehSptM23X1rSzd4cpfnjNhtSjdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dUKEHKFBhkfHMeQCYHmtm3sUX2RjmLBC8UBwWMxnWLPicQ9ULnn7nePLi1n17fMxdhw3YDa6ZeHRVYgV7jBeuY2",
  "key1": "ipo6ofxVWXtpD6NAT1rTg149KGzJ6LBsvp5KKTG4REmJvpCaWqcGdcDdFCGxbzhu6vCHHXoiHDA6UA4ybsWGxxu",
  "key2": "2SaR1WXUu3pBDP1n5boTQEqMH7trd9irjGaF4T3hPBJV9cni8TVTc8cBf9ZkHt24xMBpE1mLWXEG8NSvL8UMPTwp",
  "key3": "3XBCF8GsNQbFPVru78KvsuDvYuEnPPAzD6B85H75GHKhBgpDDDcQC9dCmdF7z6NLVTzat5BPt3SzFaGj4a24YhCC",
  "key4": "2RNrbNfu3jsX4i6br9a6aYaZqssejpX461LgReB8LaZjYi3wzoBt3WU1eTbPrcpFJkg9btYCUxJN27MFUKzJnv6D",
  "key5": "5VVT5Jjg4y8sE4yprpvCKjYMYXjhto6GppxeWhMESwJz1MGVnSzb6tDKrMK4qoy4jND3WNbhN7nWTF2zQW5ayisy",
  "key6": "3mMu5KezyRpNzgUj96SKdiMJVxgCx8XWZMiPHPmFikSyXmWfubShjHazAzeBfkcc2WutSw7Hi7ix4FZG3Lc6hCSX",
  "key7": "4Lq3Y7acJxA4PZy9CnvQHwr79aDGfuDau2gnUG9S6RtSyqVPhWp5BMCvp7mjGG3WkTezJ6ncv1pLQhhZhiwdg1jB",
  "key8": "5Ywi19K32U9guWVA5Z8DjqptXCptV4KJc7hsQQnZgNJCRmVQePspTWybzraUo3BUT7KmWsmk9UsWpAE2F9bMRDvo",
  "key9": "3XzWCZW6KZHRSkm7zwFLAisj6wauTfiuo5qxpyzhEfgQwSF8EsJFq3gatmSfnPXi5112E8M7jYw1gjLm3dWexwAU",
  "key10": "4G1958RNcg3Aq8zbN4e31GfKTB8KwKwoZ9dgWfKLvay5aE4nK4kjkaxJdFFkWmZZFhJrBf5hGcnahJuSqaxtHuY7",
  "key11": "4UiebpAkPG6vtag8tsm3FbfHGofT7Uw9TXPcVA7C7Fpdv6DGg1sHa2xXsLMEVQSZXCXaxeM4gJXGkUzruhcFYfWG",
  "key12": "5XtBcFdqn8SShQVs17UTujSScvyvHgD9fZfejAVkP7sXcYsBbVWzTCqp2J6Xna8SPx14n7P17uCyR2LFpyWGHw1d",
  "key13": "2qFvKRF2zo8Cn7ix4jqogaSvwfVSqU95iN9SZLaB7wjPsc7s6q2hrSdgJzNNYxQpVt3RT4MWZsniUnpTxXWPb9jK",
  "key14": "8tnuatvGULDFAxYnrkqrN9PL4tsuZ82jQWCCZShueWB4LjapzyWqXV3cjwBfJMAP1W2pbrkAmCr5PfvSTr5FEZW",
  "key15": "DwFYLkKvhveRquiQ5psH7fBug6BUZLSkNwR7LVegsJ6skwatDZLhyEoyzHpJHqAKGVVDPR1E6g18ae1SGVgncg8",
  "key16": "5x7CSdswXsxByeCHVQc1Y7WaBKcYYuTZxVdrySR4fiAxzKaudSbfKt3CHRjkCYfDtEwMMP1fdPKeDwK9RmUVnrew",
  "key17": "2HSYfHDhkGmU9Z4nN9sgt32EKY3623yGKagyCZHWuuZ1sfNQ8ERkLGhWtCGRWF6yjXYxMAf8k4xyZYMqx7YL8RMw",
  "key18": "2niVVfXSG2e6zhSyjYw8h85drMvBbeWuM63KBasyw6SFPRWCCrsshzYyN1so6KcmmERjjY1ihSAGtB7KgWdoqqxf",
  "key19": "5iWPChgBLez3ywkMURhek3VMR58AS2xAtQedgzXkr9MSzLeRA4GC7wr4Af4qfdXGt2RzfEHUBWmeih6vNBZ5JV2y",
  "key20": "2WDxRcbux3SJsftS3GaZRNJv48pVMnr1urTSqEiZ37a6Erm4jVnWcpxkdt5CV8nyfqKLpQc2p2mWrzd1h3JZZqzw",
  "key21": "21qFRv55MSk7LetMQFWCmMAe9PagpDhcpy1L4Fn4YTuQRkejpjWzz7zVeYyKiXqjgaGwLWW6piPM4QTymnm7yAka",
  "key22": "5awpHzC94myDnAdmZ4ftodS7qqzEyGJAACTLX8x5qg2K9R6SMh2HYQXv5py4j1PRvwMSCbMzamaBNxE82baXHayh",
  "key23": "4tEjsyrnRjBhQQPWfz5eMqgYnwPcNtepc481hpx3eDDKGqB5ENVa9dZj4s58GW1nstKjr2mVAbMaPTeeMvZmRZR5",
  "key24": "XPKD7RMZSAvfAgmHQfwz6are2GM4ZCeJsq8jygMhA7MDhjs6wsHVJvPuL8y3XbShpgqStn6wnkF83tbHL9XnHGN",
  "key25": "3ttffRmUedRWjsU1anmMhs6dPSXah7qS565g8M9bvNGZY5St9pGz5jJc5nRrqNw6mR5RXTeUAd7gEfyBKa6K4G9m",
  "key26": "29GoPKskFPMzmkv9vLcFiQMFT124rRdYgdFiJ6J5Ka7Lkr1nzMn5FmDeHWVYnUfR33cLBxw8vguVSSycXJMQTGMM",
  "key27": "5FdScCqZ6bP2wifRcjhvwnzao7Xfw4oPiYFhocLawfKsEDYQ5yvf2UDemmES1xm2jk49Zdt7oTy4GairfUGfe1wv",
  "key28": "2CMhw3TREQ6AdtMfXXCUcit3jYjhK6RR93wcBaxChMtJg6iUxvvgweFffwVuY1PrtdHmqwu4L1rirCDnAWgSFTiK"
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
