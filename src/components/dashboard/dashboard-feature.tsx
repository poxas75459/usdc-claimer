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
    "SkVNqNcMR7V2hb4sxpdFTTxJjFjmhZhsy3ZYTxbFVtm68EWNPTu2v1nppszk3t61itLD9SwGTDcAFvzttYnDqj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gyQEDLQuvGpkqmKHNFjjCSy6JwFUXWaSnL5E2fmwWzvTXABLg37fYb6rz2ABDLN15jY4u9CHvhWVGU6UJbjywQR",
  "key1": "3dgPbyfzGJoJJNMSZz4HjURQKoia2NirwmWJ12pAvfEVMxxYwS66DJkW7YqxHPM9gvyd58pDQWKQcge1Wh9b1L2u",
  "key2": "3TxEhUPHUA1bxXpcAbo1F1sMAJo8me9s6X2ELrdR9wRU3CiWYRdDZmosNnnytdG34fg1iGmT5awJQFp8kHKsZdro",
  "key3": "3NQcuggv3WXgjVh5ihYfcFpr1cUkzBwM7ShPUnFwHQRXZbzjYY9kMLjidpVFDKHsA7BNpUQXPS9rBsX9tkfYhV3S",
  "key4": "4xeZp6CXx1HChrzHPEinrc3wwWDURB6AHx8qyTdNai1b3WBFdx6oMXiAgjg1jSo9Hyf8Y69hxEduuHoow4pVbfr9",
  "key5": "5hPut8yYSVvKFZJDLCADFZKRkqnZemfC7csRGuKS8hRu7WqtD3vPEqnysewfJPqX5ae7TFdsYS9oLox9Soahi8cQ",
  "key6": "2fX83y7hx52irnqUpEAGki4X1j3gCQHD3Y6HD8AhrakV7XdSMDTJNBmDvJTan4ZWvhHzxwi5pDpmXoY5j5DU27F7",
  "key7": "67YwBbR2i6BBV5BvAbY7nbcpUxterjMVgZPsDZKT8bgx1QfKMGjc2xyjSo1dTD8BsdbHcqpWKyPjGcgLpvjMoeDy",
  "key8": "5Fcm9ZTDKSbpxu3nzQBZk625FPPeTFbTzNgCMvcRj88si7uvEJXzt16PTtVvkkbif89RHnxv4bfJrY1bAeyYtHJb",
  "key9": "4V9oBjm2WjSvduMJ7ZGfGHPvCKLM4PpMbxy5QwQj2PyuMF1SNPnqsR7NS7HLqLnxuhbpPwM1EwxA5S8ArrMVb7Zs",
  "key10": "5ekbcvAc13rujyexZ49EGtuiAJuVeD6NBN18uoS15t2CfBzP4T28EERFJhqZQ4KFgf6c7aVgxMjYDwjYoFxvxGqq",
  "key11": "5vEEYRdw3D5xVTbScd2DfZmM89cT2PnZSYFFFicPA2Si69RojrKDsu8Hq4MxkinSb6WP3uhqc2vCCnnhidizeEkp",
  "key12": "4VwL8fxYte8mdUDkiJLsLdhQFE2fJLJ7Rx1QLsj6SGYxoxoeFWW6r6iHtRL6Zu2wn18s8vzBkZgXbnFp2Ug5pdM3",
  "key13": "5Hebc9VgKiAYuFY67j4vZczmARcmdgWfy9h8JLtP8fwHo5rSbf15Ykqjr11jEJdg3J6QUXuA84NE2tesxAaz7sf9",
  "key14": "3cya9k65hgn6J5m5i8GHW1ic3eqQCjYwRV5PiSxUeSSZotvYr7HVcg1QVpR7muX2KrsZFSuYL3HNgkftmux6KgEK",
  "key15": "4oEQe13nN861xFWqZTtpcwL9UFHR2p9wfnqTv4rPmG15463dXSMjfTYzoCyvaHx4pn6tW6CXz44qCYeduU1pHwL",
  "key16": "2p53JSMGndsxVKCHGkQLf5xQDYCLraGfgseE7B3o5j8gJKyRRFM7CGB9aqmwaeWESpdn3Q87EYjED1RpBkkUfypP",
  "key17": "52RWqhutu3gHxW5h8WqetsrGuRFXik82HuNLw5kMUrpk44fT3dbVfpbUMeqeuhgJ9z4YjYFHjoLPEYEGm1zGFRpX",
  "key18": "k8ktoeUE3aL7yWiWZ9JAH51JnpiVyt7QqB21PLrG72evuXsFBYRXKjhMZRTfMbAXM8NVBp9ymWVv9xBWzFmjyT5",
  "key19": "5BWjmaiph1GVxdLpncNTQf5bGUtGJ6uL3AUws5ipKjSSFqMRRJcR64YgDuKzr2Nm2hQXH3cTafYQ5U8URQqrDab8",
  "key20": "5X5gQ8NkvoffpnyFqSkPcFUakuuuWqbjDP8wmKMk4EDck3QeckCKKDanUjfLfTYFLgsrzWCxN82MwqFpXuAzkFjz",
  "key21": "2CAda3RJix5FxqhGk4MkFrSqqGoPcusVozYqc7HwxCupEyDEwiuo2gM74YJak47sGEBhJaMYtnsyYUNcmduprUZD",
  "key22": "5PXv7w7beRikZSAPGT8g7pZEai5ABWdrjJZe5F691qhjJh6rHec6yUJqTVRNHMXPtWxe5mQZtp6WFfiTBAwQ4A8A",
  "key23": "4pYJyqPZtPBmaCZvoVDZHFLhh9LGrAWvLZ9E1cFKpWuPocZw14fEBt9ZvQVTaM61UyWkK5A9SmimMNFhEp4DjEkr",
  "key24": "5rGha2RXxQEUj7mXsdt3pzHh4SGdgbfth1fW8kgrjscANzXc9ScL497qQEJLjiQgZXAzcMTxYEPHLRqh88yaX5MP",
  "key25": "3pxjmiuz1AUjc5gSV7X3LKRadBDRL2dyn6mmvHV91tdq9tbPogDyUfCivU6b5AzZwprX3D9J8jKqxAzncv2WaKrA",
  "key26": "2axP3LUKLFsrZocS8Y1uarr3NdWDDTvxrmBaZ5NbAYikDV435cknTwZEtLPmRqgQkczUnBwdqrd5ej65d36gbJ16",
  "key27": "2gXT9RFDryzKCgXVvrDfAtknR1fe1DNBdXhtyx71Yhx2c2jEK3XMxXzBFdtSKwZHoatvcEduC3b3XKwSPHANyZJR",
  "key28": "2ZPwaNPz7D3VTXrW5yFQZ3bJmhUretsZ11twxMLLQtAHBogPPvSqPsABAytnrttzL2qcsz9jemK8PEffTWWcgrZy",
  "key29": "5bfdGX5PQr2fvUWKcr3jtPpHZcRL5DBNpBSj8XARFYNQr4DgXMyhCJNYvXwieiRmEnFBgpr41BESNk36cRRv8KZM",
  "key30": "5FNXq4NtjRpXfquHv9813dWXK3roriE95DuUiGWSUgAgrPKhiKE3boteodT4C4L1w5NEFsLpS2uo2jsKxcxw75VS",
  "key31": "5qBNxTZtPkVFqnVG77vvjBbVhUoRw3D9jK9eyFKmU5tPpERhdpf9ktHLhPNzNMbnvXmb73Z5SiirL1VzRA4B6wa1",
  "key32": "8dwQQ9qRLRGKiGL3g8K7BTSQzvF8W83JofWsqYiHpLwQZAnGqAVfpWKMwKsakv32YcbUufHwSnKqStsuDxF78nW",
  "key33": "5pnj9dCgyS2eNromf2C9FYEfCRnnEBpV1Ab7GpARMaoPoS6GuW1Se1hjUk3YqWrw6uc6azgAgVKvGrwT5tHxmiHL",
  "key34": "BK5jSuHJmTQFM2PNpUz4DGA9x964UzD24bNcbM2rociaoHSh72aCuCyXCR5yC6vTWPq528SJYauvsovkyPaGAxN"
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
