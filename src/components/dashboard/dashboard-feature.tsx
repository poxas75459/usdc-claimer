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
    "2eYHEEMW5TUJ54gTf2T6smpQaKykheQYtbKzwu8oMRmNsDJf1hyK7osrEoj3XL7UKbBNyRr4bSs4UfF8E7F5nxsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wkCV77zbJWyfQZNNuS48EEhtWSk6wZnpxiuBsPjW9nhW6S8Qz6gFnHrDsX6RKfRmnMJRyp1RFDJDADUyGUt3RmT",
  "key1": "3JriGy6E63JWT7KRuMe5z5tA7NvPvSbbgZr7vG6CKjXtCCDCh818Ej4BXbDtpZ7LKWaB9vn2JHgGq2fLHJnNeqcd",
  "key2": "26QAMMsiucDc8rzfvGHhk3rs5RcSfbJ5Bj6EtNW8Ft6ppS4nHt1s51qWBLtoEr8gTXxnJMzS4G6wm5Z7ZXm7e66S",
  "key3": "3yuFga1EuCmN1NDGbB1GTxupNzgJF9AazqTY8CmUGcwLE4eXSR4wtBUv6QeV9njVRxfB1smeBv8f5M2orqhio2My",
  "key4": "3L8PoGBs14kdxe2bW9WrmFJmX9YvXNAwBdVygRUEtgURBtXaJkyec4KSxFV8FVYcZKUaH7SnVZoXcWXJRMFjahQU",
  "key5": "jF9kDmG9qtkBxN3L4fe74owVYhPiuxUpa4zcJGf98QHKJhNHQP23ReP7LXqtzxSEdSpyx9EDUmdLXNNBKZBfEvP",
  "key6": "5rw7M9dvgjQYbZCrQVLexzZnikC3WaYMorp6UHAk5pkMerBhvovYL8GzPrKiGuMAqG5iohu7K8dqbMn5x9YPfWSC",
  "key7": "2EokjYoEjBs2WPUnj8HbyDQZz3FFp3DzRAVMdYvLbt79RSgNapXoy2CoJRjx2gpuBSGWSWqgn6hRyjuduZoQhZaR",
  "key8": "57CcthE8JhkmzyhfRPt2f8PXvTYEREP5pAwcXgKiiYJTEwP4gKbJTeMpjPdGEBh5GqiQoosQq89W4XyFjoL4iYdA",
  "key9": "2XjZVuXpucZK2dPyVBLHmzKAR23icVHPHP8ttPWd8F7kRMXWhurJWNUbEjqHb4qwX8QojMnexPQPh1LtSXoH2J1n",
  "key10": "23YQBnWE3o91fdJETzbcuGgmRJ37qy6JUL1ZAtmV2G72mNw22JkdGfxGTHxZB1KwvPE9Y5nQeNWAoEtrVShREYsP",
  "key11": "3c1FghCT7m1CHarCPDaFAKjrrd7U8b3Puu5tWPWC34QKnSx7ncouZ4CY4pewowMGwm2RoSq8nwswheLmJFdLSYeM",
  "key12": "27kBku9pjaKpuiZExwbU38QcXQ7bSGnCEhTeaDNpxnbnpkXZn5wihuhGmsMFbzWKmDQkDRW6yCX51XTCXiekMUc7",
  "key13": "4GTo31dTNuyNYJjmYVuUDahyAvfsA9bogx14odqUWwRhginx2Mke6yNPmQA66ALfS7hvUWvre14n72s2YMAkCVAy",
  "key14": "2XWY11eNss263bU2J1n69qor5h7t6G8jBjhCd1Frgbk2C1dszyffK6H1bisoHn3PFehhWBSMb6Yompbyp8T5Kbv7",
  "key15": "3CuktZLPwoVBFFaMYr3JbX4oJR6AucbqzWGEDSgaTiGPz9mujZr1XeUYTYUHW3iK6XFse4a6YtVLbukwiQ6fT3YX",
  "key16": "2GG8jEDYvNSeg8m5eaksxe3E5CuQ8Mi6uSLAjMAoT54gf1iiCHaV7njuP7kcesGt8vYvZmS6oAjNvQhTWqS2kFbt",
  "key17": "55oh1Et6SZV5Q7jErGUNd5L2Fhx22mTYHFvUw5LhG3YvdHJTWPqfttzaVfrKvwnryoW9zqqD9aQTdcFVqkv3GJ2k",
  "key18": "pCLxiApvzeHEwc7QD16EmecSJN1wqZZ4z344TwrKok1rrGyErr5BGc4MV8nw8LwWR4g1eMzxwEPNr8seMsk1wUo",
  "key19": "46XPgE5EyZvBJSwwdG6xD1tERBdrzA8YUFVXmg5cUrtFSxRc5MjUm5gxTdKuzvjnpH2oLeD1HfxVnW5Bd1LhKhyK",
  "key20": "5DXS4TFBwGhWyHHixKM5sHwrkrDxBcaFJoYPD8vmE2B6xGU8kRXvomK19nqUyG52N5p12MKtXVstWVcATPtbkKFu",
  "key21": "2VS2hxSpi9aE9k1btTrSDueXD2V4hzDvJ1g1C8rTmW2jmmngBSB3f9KdwwMbjUVMjDscYktQ6CEhhFS46rEU8xKb",
  "key22": "48ptMT8EQZQicmqqxyfArRg6WmDjMR8cjF9qoW9C7NDekNJgctGd12pYy6RoQwiPavdjpAS4xd95Rt61U9pNFYiL",
  "key23": "3aRGjbp3E4ca9RXngDvnnHP7kPNuh4S96shtt7jw4r8q54Sc3zLxU5cdzkuAEGULcLdprLAAChhgQD2RWALb8iYd",
  "key24": "2uavZPpAhzmNEQ9SMNFQNK4NzYTFvFSQNXGifVLT5TDgJ9Rqii6abD2rkmgL3ijU1ZwpfnEjfayaLCecPmtiYXXk",
  "key25": "5qZEenoXeaaF15sakjxSZxo6CBLv2mDos5zqMeMMy8KuERvsMzbhgn733V63y2QusSsungdCq64EpMUR9mSSewsx",
  "key26": "2Dta3As5vhnyGAtnMpv6ANiTcQW6Pdv2e3eZB7kvGHxXpo7xXEni11RJR2oP78j2wfQsqikgtp7DhtNJ3PrMSkkM",
  "key27": "4y1aXEVZMDbergTL2jU63Atw6UE4nzeTKyg59nYcvYWG1SxhkVTKSxSgkPfVBJ9gPV52oBaJu1B85e3uUjEvTuAN",
  "key28": "3wmYNjDLZAp2egA3sZuBUW7j6DpPwMhh3MakmBAWn3gYQyu9iZxmdj8ys4A3bhUwwYv55edrwWHhya2BWTL74XKe",
  "key29": "5TPjAoPN6JrYx4aFwRsC3KZ9Kt9rEuiaVixKeD1zruxbdwNwFkEzF9j9dQbABwT19pRZEXJHK7swDSnu8U2ZCHzy",
  "key30": "KScvQkpd93denwNkDdpYP2WYbtVBYa3copGS26G5LicJeoiBo8wtYAopUAW68dDZbnZAoA4BjxMgvMBzeBrsjCt",
  "key31": "3ufj2w27sxDWLrpMeopQ9NAsibP1CEtqKHpS1vJJUy5d6Zxebv1xYrHgaobqpoVvk5Qp3xCWEH1fRaponHGvaRDY"
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
