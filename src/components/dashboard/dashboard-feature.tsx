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
    "25wB7VYBvkwADADiAyqw7aA5d9B646FfxBbd21QbhtakFSzu9K5nJNAecv338Re3XfFAKbDvzM5QG7WdHVAuZf3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7ZGSWQvMmGoAsXpLAsaKBzpcMGY4979fgXdxkzmsYxCdnB8AVk8d6cxfDtDcEcR6QFZUbRCdSw443qCZKABrbj",
  "key1": "5jGfoxZSCwKzjU86nWyAQQfBSfoMAYnGwkGkfSCvisM7MYAE3a9Ap3Wqf41z4pYQEqvcfnAYdQLirUWTDRiuU1We",
  "key2": "H8S2xLyMU2WKkxhev5zeata3nP1AZUBu6VSyULcMd6RpuzFQ4ZMBKvVfZXjtYHTms7Mq7njLYyf1Fpr5ViSbaF7",
  "key3": "3pKEiQAmAiojikY7BV9nryggzTCtyYEv9yy9uTvPdQzCRVrs9pgmeEPiRFjgES5FXpZSPQcbU2DSJVuKpNMbV7E1",
  "key4": "i9rjwkM1AZfUiHwgGba7LouXi1iaefVWHDbZdgatDVwDLyGsTqd2Di76rbtcdNRHnH1NYnG9S31ewQJdsoExsBG",
  "key5": "392GvcfDaH1d4Y1c2poet23WbhoEuCSyCBpgHjeFcP7uLTPTB8Mvhe4J4uXzfNmKMJEqxbAzWYCgusk8MBnJ65QT",
  "key6": "2AXDJfgH4TgoTnQyLHLKQrG6kxeQ1Xzf3PnvAx5viAFbREHrarL3esX28tKnmWwwq8jr3htoF3PKcV9jqt2cf7pS",
  "key7": "1aPWQk56YtyktZu8d1JQYYjH9dS7KVLXoP2Gz26wMALbAt5EADoxZj5CKTKeE3cY7eYEAC6MyZvUgQhxzGkAbp2",
  "key8": "RbJCs9yoA6ekGrNRtRCuqBBdLcpqTZfUJP8M4tNNrXDeEgtegvK5GvLMPngVPj2bHWc4AWCqF8JLgKnBapv9wB9",
  "key9": "4vPKkwzZ2AhvqyDx1aKrF3GPjk686FGMvvGincgSJ2vscvor2bBhTPBwXM7JsCA9oDG2B9GsTtpmsN8jAhCnwJnF",
  "key10": "54GgU6iyd6BU67tqFBot9FxQRpLX6u4tUaYpjy858WdjZ5bk2urJAVnwKXunwueEot6BG2hBYvHx3roPqNNhxoLR",
  "key11": "5ig4vdrEzwfge7DW3JSVwgVbuxRyG84yuSp55aNZfBPXbwdK1wJzmX1uvjJ5rbwyjukBLSDyMGpBzeWZPN2edegK",
  "key12": "4gBy8ZHwUF7qNAJbJtM8U9u845qgNuc9Epf2ryGBChnmUPG6qszRfnA4DF9nYE3jiuhTdQkMbrC1WeWU22VZ3eHB",
  "key13": "4t9TynDxmSeEMsukbKhRUM7P7PjUnoLeHxWUL1UPScVKScni97C3RDmjcsahiUgnPcJaXksYqye9wBBzMnbkqAG8",
  "key14": "xMKjKevB9QudP2C8QeNe94KDhpTPa4QkauDdMWRYzyA84yQnxj3wFQWZCFjZYLuph1TV2XijWEPAvstoLQDjp27",
  "key15": "2ud4LiatTLezh9qf4K1oZnxqpZzYV9hPG1o1c3sPrNo1SuVYMPWuN9WKLRjB7nEcwB6gdKd36e1UaAyoTLYWdXZB",
  "key16": "DfcjyqfxamidpxxvPjSNTtEauSwNTsG2Wpi1g3NZrfDWwpeAkebhhFQcjiccmSkCTh5MAdtgUXmBkTb87EpyrKA",
  "key17": "3fKMTCLfrsezfTSZWsMvM3Tf2V8JvJv3igZjvx2PeP23JD2HwDQPXMaZmgUhTcjbBr5BiEVc71wDRq21zMvwTtf8",
  "key18": "3DHoJFVNe2xt2T24fNewknAKqGyLuWV55Go6JdauqpVsBNjBqvnPqPzUQ2Xe8Nnj648SJBoJhUxWVz1AShXKwCvP",
  "key19": "5JnJ9em9jnB94natzhZfoRbZ33DhZYnhs2FXTxXjV53EcWvHqBeemfpmc1v3StcDpdwH9zU5AJ9jkeq7v87x9Ttj",
  "key20": "4piEczTcPhz6wMNPUS8GTwp7NUhX8JbePTcvq8qFsyeive7aJxxZxu8bo9PTJqodoq4T63HKgH9Wtkm4VQs6zcUq",
  "key21": "vfEp6RxeGod7DmjyhbAGntvrWgomcnCFgXTF7UaufaQ1regPWN7qui39Thkbjvo5P7UAb1x7GTriC2v1s7eQLC2",
  "key22": "5ddHn27AaayRfasJ2En73fj6m9JJRFpLPtptsxRWgcTirdfJAW7vQa5ZxHGFKYyYpTEwJh1VBHjVa9nCVuRJEvR9",
  "key23": "2PEHd4ULotmMsSuSwvyJtfJHFHyXj856ykiqfBVfgyALJ2tZdLjMZAinPnWyDhAG5XaDpm4eToGTj9FBkcpjr9tV",
  "key24": "24Pv3HiPGrHfBV8fuQh1ZinEBQyBBH8SA53GVncdu9VXGvG3rQ2khX1LFMMXwS83QFkjQnEbm4SYto8Y9ifaMp8N",
  "key25": "3i4icKGdSTiHyDeARJkEDASKqoN64y7NTXwPVfPC49PZ9xQr9f6z1CzWKkNHZNjVuiC3rP7o6NLBEYYCwdp3ENxL",
  "key26": "3Q23H6ZX7ZVVceZ91pFbUJWn29KcXbX1jrV6Qh51ARhs5YFENj7jFS9xABdTFem4P9vRG5PPkTBWLpuft1sEnLa7",
  "key27": "4f1EyonzomcHkNSD4uWM45rV88NSmMNwN16n54XqcdaUE9ZWec7AF3Y7Sk9P8nB4SweHPghcVJXiAttniAVwSt8P",
  "key28": "2paHQG53QFT2eWrpvSck3moSvvZHknALcG7aYsFUSHp6njwad3QfDqeqMXpGb4yQSDJGnJNNCS5SWCSC27sAwa6y",
  "key29": "2WN6pYX6YR8pnLnndHuHnVzeMshzzyuA7XCeU4GYx9FnGkVZvFCR8r4vrZeipLmhCXNgBnrDaL4UY1e2sitFZsip"
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
