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
    "4EXqcjbRmFcBgLHcH8bWRDWCRCKBEnpLT6PkWeXe9dBgTgqFz9XMP2yuPBSPb5mwdNHxo91UbkmbTf7McH5T3mAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWQX3SNT94LbGc7fMwzzvx5EkKTY4WFehigk2xrsPuacEzzakhc9R8ksU9eEc616ezWzZYJq5tyC8DpwS2MuEMY",
  "key1": "3nRY7CDS1MVALWiyReWkxB7syHVs1yMz5qB6XCm9MULadzcnaYKYez2UYyHkWTaoe66j5QEM6uGaZAAfVtW25iMV",
  "key2": "2bTsSPJzF8TFtGtrRWhLXbqLHPx1HRB5nJaT9akHw3gNdyH8q9xYVaHwWYPtHoQcq2r8eNJ3VTj8iUMi6YXAK9mM",
  "key3": "5Ect3EjW7CDLZQTpeB5sKkrKZiDXYZNTyAKSMhyWuRJbo9JPGNtX5AQhJc9JHV1KkdrRMMk6FbDJpHjPZp5xvQRy",
  "key4": "28wPqDWXkn7v6gB4FuJJ3ekrXRBhhDHfbcxixbXKYqMPPnFD24PNEspKd8vhLVzD9Vsko7J6JhVWyAX5HBzXg5Dh",
  "key5": "2dwuzU9FHQ3enrqLgEzobG1LpbKVkwBjQMjZHE39rNhuFPyiStFpFdqZbEW2H5qSFHAP6SaEc9rG4rxZjEkGC5dH",
  "key6": "5uqDpHqL6xHaqUSKkWcPi7eQGembaUZXKTKpWSpzAeUTQaUke4ehBSLAqgaDjNkEGd1sprT56jN3Bw8XprDW8VZM",
  "key7": "41V7MHfHquE9LaadsfDYJFkeNaReZjt2nwvFnnAmDi7GAPrFAY7ohJJrN4p1Hn3dQD5Hh8zBWMYe6unVYhfcYvXD",
  "key8": "5nCwMbb2CvFnJBYFtHrn2AWoPuPwRrqi5qvzFBC9y8ZchLWzz9zQEwatuuptmj4mms7FucHiM2vAwSQsu7PeGQYm",
  "key9": "2bocM2P9nGXjvVswzEH83DA5funGMBkNgqQSLaHoScjjCSx5LzaTGioS9nH7cYniK6cdQjT1TUuQiwmQTqCKk7PG",
  "key10": "3RxKdcgWv7Dko27qpTfgWVgTLkvTDMF3WC3Vkidrwvjo8jidRLNjsEzLZh1FxxikKYgpSvUQwxEcZgYuKiXtYN52",
  "key11": "5Nnm7rfEouipPyBkkxMibRXgLkAs7Bd9AA3X4cL6VUGTCqXZTKsczK12VM3Dgrbo9ZaQ4PmjzEC3QT9Y7Mq6GroX",
  "key12": "SDcG2A72SdgJUQZHemBJKye5kbNgsUmJ87ZW7v8V9sa4KNtNaYstxzoBFyGnk88KuE2ZHG2Kiwr6LCTiryHwrtD",
  "key13": "37g5uN2iH3xqwJgXbiYwE8dngadiX6vP4rrFUsfAm88NrnFn8K2rBJRkiKPEt5bPH23JWdawQcruwuHFcmLt2Lc2",
  "key14": "2Ss8kxKeDHqphabiABXNvGYSvpPb6cixhtT3rtHPAKFBUSiF6NvdPbf71ZNZspZSZdQAiy91qvfHbDt8gY8K28DN",
  "key15": "dvyUEXWC5UhamEbA2zVFCNP9JrVrJzkG3hircaHB616MVVyHXsDU2djtNneeAK77DcSpH8wEfcZEuJE42mUvQda",
  "key16": "2dxBRveQbwg7r6THCHf5jYBc9FVxpNtbSBA2xXiasb9GWssteQHjUfgAkA74EiaXk3AShSY6XWFvjxoadkA9d2pf",
  "key17": "38EkS7ieCvNovvHDG2SkeyjqpyuHbngf2ftYSkwTCok8htA5nXSyCVCWzJHZNxJrwako6JgKAqhako6DoURnhgV8",
  "key18": "21gBTRyDnFN6GTYPwrS1eefpsggDB49DhDMWjiiLLonsD7W97hogfn51AoK3wEcZV56qEKWjbQqw9dPUFbpR5PST",
  "key19": "k7AJv6CN2MrdLv4pjzeQV621UGUUGR4SCcKYfQPNSrMKHV61DB4JH44Z4SNZ7JsuzLMeVp1xJYeaLoJGoLsvJey",
  "key20": "2Qh4eio9c7sA7cqydKRRTXtEeZZVbFWbKHwfdtKkk5nQKo3KZwwb73vt55t6v3x87cdwRUUxQ6mSjdnReYHtDjvk",
  "key21": "3Bsow1Mep5iBfSiGg5LcUUGEAECkQtsHgmSP68CrXxbicCcEMYuHepWE4yy67Rg1PMwbybcvan44rvMxpwFSFB2V",
  "key22": "5n5NbAGyYRFv4RKuZmV2nccPLiQb4ToMA9ZShUeSzcoWBiBqstHETnSLkvcEnAnPEoPaxZAGS4u394o8GCNYRwbQ",
  "key23": "2Q4z2uA9nLEwufSt6hf1wUecAUgbKQKPp3MWx8Yqo1RGatf8GbYf2dGpfpTx8PKbdm37wAUSUz4U3xaBVDZH1qR3",
  "key24": "46wvYQctP42dFwitrPNUgb5p5LtyhW9JZcDhFTcC8jPR6sso67GbRtMfzRbTukFnH1BGJfekJfvKqZ4aGtVLJymS",
  "key25": "5oQURGJWDLL2UtsHNEmf8GkDruUvanpz3afTFa3eb98gLuWqhXpFbGgF8wLqQEwBoiddpJBgmAyWPwcG98NmTpyk",
  "key26": "63MbVdiME9adtCW8AN45LpFnG188efkbnjUcJJ7EnN5jNoKMdEzD1W13ekic74AdZi6tfmKvu7PaLSkLFcnsL4qc",
  "key27": "ogxA58xCUaBRvEHQ5VuHR7fgYPL14GyfWpCtpNrt7ErKS2QauKJhNfk78kJbRbDzspQASwUqH1WkwW4h8GQeZTG",
  "key28": "45dFJxxe9FvxT4euTapb5xAVh52aCFDYXKRTDKa7FQsQLk3EanWtnszvbjrThCqDn34gu5cpttQcBE8Ys55wP9mk",
  "key29": "3iXCpgMVJJWcotCjYyusXLwv4bBk84DZGrz1DvXQofSUu92ZfR1s8qSrYJjkGoAVsB1UuohMoy8YLZfRX7BeFpSo",
  "key30": "53NHsShWArM8e4YcHjG1LKPJ34vF9Dowq6HRQB6DmqXUdYKSCATysiJiyzsDeGP4Uz6c6P2AcLMuNFyMeTpD6HBm",
  "key31": "4Jw4krF1CjJsMd4ZQjmV3eiEmvq5PPGhpAHaKLVaPwcPEuJMiRBJVJnnLbnRAQp1jnsRP1xe38uFAybQ8rqdTJBN",
  "key32": "5xYBj5G4rM7ZVh3kd6TXAHhHj4n41YwPMSy2ooAWataoVa3FHT7xuxfCkunD8vhrtLQ2hQHKRcUFp7qckeKVGvjy"
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
