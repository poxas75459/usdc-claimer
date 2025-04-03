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
    "kowr5x1oidTqPkGrbyWPQoj2RLsRzuH9fweBZCBWyXoL7cgcbeLHm3ykvb12JXofeoRQytRk1KqWyJQficWJikG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ee9g8yeSfnoZhdNg3LLHihJdifgZFgVqmxKt2LEpuTmskUP7Vd88n9r3HrfcAam9SujXUZy2DZ9v8nEkE53EGy3",
  "key1": "3vdCfbJpkusfErQUaHEEpEi4RcNBmHCRmuhyriiMJwiH4hFNCYB31SbuMGZpv2nHSqDChv1L15yLszZAPCaaEPLQ",
  "key2": "4eXVfXttCvV4sEuu8uxAVXAPCyYJcdsdVjbJkzhAHeabeb1vTHA1o52UFSCQN4nVr8WVPUXiNZtwgAAZU5ZFKjMx",
  "key3": "58VibSFE3gXHgFdKoUygB2drBi2ig6waFpBKXsvYn6KXgR83vRnQBJDgSVyEXuWTC7oGh9SVG1xhCJrk5DrXLqbP",
  "key4": "2YUBLFSWxHEWu2g552CipsrRUqdDf4PLToZzHYR8SwzdG8YM52woWD8mT4BaeoU4CV9Mn5HeNwxH6UK4DmXffF7D",
  "key5": "3noodXnhE85Hj7g6ri6H4ZKmKgsSTfHzAgaN4QvB6fnTd949Y6TkrjUot3MF9tjDoYY9ZuX1ecHZzM3hrrrRZmrc",
  "key6": "23Tt8cBt6k9jzFydc8vy351X3HwpJLV7i7cH6PD4NHR2Vff1DQEm9T78wnPHHZydt7RYFZMQjTXVV6V4FwAhArTy",
  "key7": "4fJmcGmayootCUTYJYyNq4p1bCWa9T6FopY6HzcUUEWBFKZFz5q24nb4ztBoCvHFDzSpYYCFBC6o5NdpiY6W78kw",
  "key8": "4cFrQGXWhK6M3Qxn74bTisZ6JjHywthV6BPDdyjaBahiw9g8muZ53ghDp8jurMYX1jAWJfdfVAuvF1A1Pe8sN6Mc",
  "key9": "63x6S8wWpFFjzbFstUchViYSdWcKyvEQmNziE2LM2aGwxnj1iY5tzq5fvWmjxiADJmpz9Qnfgj5Lk6rs2rA91Zgh",
  "key10": "Hq4VpEtFS2FMt9N2LwVo339apsLA6k85yKyWb1cjkbjDLep4DMhSe1o5M6y8njVvCJ3obwnLXsuQknxdsNwXpn1",
  "key11": "3kod4Z28qip55iabNCwxsY73ixsFtc4YQnsouTHHizzGgyciYPfeBR1XsM8nFWFz7zTEhMAtcvYp5wwNpxnqjjfb",
  "key12": "UQ8EwDcD3mHqeaPumF6eiXVfzGtn2v3TuaJa1cr3JWQtjpJmvupkh4pLAcPhZMiWdrMnjfatEdfchRD335YUMD7",
  "key13": "631khbqVg1N1G5oSeojYP2DT1PaeX8ZM4Kt4N98ZLGM5KzcdpSQaTLFbAoAMBTBmoNMVkeim9EcmUSoRucLmgbMJ",
  "key14": "3qvJi7EBkJYUNwGuPca46QNfpv3fqDsFo7p6KVnmpN1T6DpeagoLNVXxSe4FAVjJCW2G6oDbpTJ9oA1tfZrybywq",
  "key15": "27mghzpPy7fytwUGGWtxWso7N9oPo39bR8GbRF4H1Zpr3ZaUDVbnaeVEgSYUjQK7YCcQ9c5Pow4bCh8GZpSRdJDZ",
  "key16": "3yPiPFvmbXiagRrbP1trRpuXPv51kgwsDq2dWpbwFUbkQdZYreE4yG3U5JvGz4XtT6q3PCup5tzuxcswZB3m1LTL",
  "key17": "33xKYsFKXZf4snFMXsYFEy7CGtfa6WiJzzVsUtrYGsfmeHViE8G5hc6puJ4fXkLP6YK7wwwtcVPSSqasw6auhaZ1",
  "key18": "rQXZ7uVhFSiXU6AEcJbwRqoJfMSYUDrHREnG3a6GSwEoLKWCcEJgx4tTsZGd1m9Rr1HdwJbiT6a75U3awLFP7j6",
  "key19": "5Sko3GwfFXbDrpeMfBXT2tReQFn3JCvdxeYhcQ45o3D7QexGZoBbJmXnF5jpvBzUVHbhRZ5a51HUPtfZe1y2Xr3M",
  "key20": "22NN6SKNnx23mYKFGtYiW29attbLKbTz8HivjCfz32gnBXd3CvM9PjyKDYrPFfhn4MxwEbWfouaoU4r1S6ibd7R9",
  "key21": "4odTqiEh5DjsDtYqBQgbsthjFymGcoAeVJNCLQNj8HwsJLHeEWqnDV3B626Rxc1pN2rKMr7tCdwNRytS6vPPs83a",
  "key22": "23yRY7jByr1G713YtgTJ3o98RkKTszK76q1piqWHUsVifUDk8PearHGc8z15bmMAaU5grMqoQfGTe4cKCeapUt5k",
  "key23": "3mXo9FMv5Ta7s77BkQA2DgKp3Q6Uj3Zt9gohqwJ1mVgEGw3oMsNFnKzihfU1pcfUXuQJnsvXsYjmokraXNm9HyLW",
  "key24": "5DzVfSE2wf98C5guGB2EudPUPPoYWxrW1YrhXEE65ADwSj7rZgmAcaAbmCZHuZbrZUhBuLxLcnQXXEBsvdyLSBms",
  "key25": "2fWr9QMm25DKzY5Xf2zPhKe83SQ7KhKFEm7K43of2cVejxTu5FH9eFJQNgQGiY3kq4aSeUUFuUVHTuzvSPZcV2Vw"
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
