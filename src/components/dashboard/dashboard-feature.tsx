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
    "cYouAxt7ysc2dHr8NiZbzbDpKR36rwT1Z5c6sp3ThBpnB59w5eMUwnd7m6GTwX4ogv8ScLUpNTbeAXPAGoQ7eHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Z5hDDeUPZG2Eatr331v9HabXEUvddnAD7U5BTvmHKmqcLrWWtcGqwQGBHt1BMWhHbLoAfog3bgRgxM3u8aD4px",
  "key1": "2q8EuiAfDVGEepoRJ84XbHqNWtfExwV3tDbezndjyEJ3dKcRmAAUq1GiDQLQi3kDWdii36ViFYNrhtiKyTqaFcyi",
  "key2": "rugJxfQS6H7g79xu1n82vfW8DgxG9G5zw1M6rHfZrYDUkrcWqfwyx8jGDpKh9wFzyQRNZteZtVqZaKEfPhDK6U3",
  "key3": "57UwvATTNU4vHBW3LxrCKEjmMadem2hDr1Xz3eVie2iKLs893HAywVAwwf93vQS7XAhiKfeSKww4EqE5sXQUqAem",
  "key4": "4x7wR1VU3fkruHFNa9araUEjg7E9j3pNLxbwsdLJy99pNDkyxZjdRCExdjh4eD5roNHGimeCYmMX7RZjcvjvvrru",
  "key5": "5j4Qo2AnQbSpBd2kHays4CZS31xc1HYZH3SPrEonawafgtmnps6f3tFiKgVfSaGeNsfmdzyapZiHaXe7Nincremr",
  "key6": "2ypY4VmzoHEmb3zomJRj28Lv2Tah4JEEcasKmmyKABKiyGdgxn2P5NhEARZZ6Qhe7BdFHQ2QxDSmufg3utbMdxbh",
  "key7": "4Sov9xby2822NHD3MvEbVGiqzUEwcvLTfonKP2CWoa6UCwvZrGsZRxZ7e4FkU19owY1af6Fra9xbvhPyLBHSSPGN",
  "key8": "5cRsyGBPQ5EXKtJTMBDpin6UtqMgEQSSQUwhYSVMYvNbPKwTN9Uaxj4nyMRa356iAsvmutiPkg1Wx89S95x9aEJ7",
  "key9": "3cjSzJrMCUkZsfrvE6f4QFP5kzvtRCxWQzzqQ1TTQYdhuMsS4u4vyYaPmQmhWFa8n9WxxjQTsekcmhUMhVDh2DpU",
  "key10": "2KH2MYg8Z5MJuAuUgX4GVST9EU2MgAf7ssvhfiAchb6EB2EJCjHYxKvHnXiTGB6Xse2oHxN6qv8wpB9AvNHyQMBZ",
  "key11": "PrwzrqknVqkyUVSGE4T9BKUmtKi989FDXTDnTtdWhhgQyy54jwzpWurYK4VXrfv25iT43oZH3zimxxk9YXqgtNP",
  "key12": "3ufFXtpLrJUYfUvzj2WLcdQu3qC5C8HptSKt4xooWvgj2qWjjR3te7YKLemMKQZLCDBuzytKx9xh1ZU34WxQHEr",
  "key13": "1wFCvsdRaSxDmC9f8mEgtivLENoaW4hGHYukYgmXcTpVBokNH9EG4ecH6viKEem2HwNnUYJ8EffPhRS9ygpGh2g",
  "key14": "34EQFn656HP9LQFL5j94SMgfcJH4xj5AmBvKHrFMxs3VmVDcsKvXWkXUvTWF571zSpZxXSmWZhwAbX7ftUbtG99F",
  "key15": "CfLnLfWM4Hp3e2Cc5HmGdEZpVsg5PjMnqoysYaCBmAjngEqxdBky6QHK29cjHwBLHMZ1iByhC93HPJ5X9UTDTRK",
  "key16": "5MYKfpGtto5uqBGkYaVDZMpFCsynYfw148faVAQB19AdR34NH8ZRXizJpaHv1KkYayive1mXRMLFWgfYxZ4ewVtv",
  "key17": "3GevtB2fY36afANkZibyZGBZRhAVLigsKU1VJWw3jpnzKJDquxaAmF41jXrKpLtHdjVXCLvaxwXWoe81f2hTVCy2",
  "key18": "4ZrveE1FQvByrota3amMmPn33nPHEEuBGPxFJNfPws3PgVKGdyFxhN4CgeDRAjJgZvbBuzLgNqQfxgonymMfvoYw",
  "key19": "5MkwXzK68Ty5bpoUPJyM9Cs7GiuYx4FgeHhmuGdS9wCWgMS4B8gcLYheEG4KFyKVbj55hWV9JT2WMW8LzBWyubcc",
  "key20": "2yowXQsRFrP7FjFUKE5FFEJGSXAe7SjZ1zb523DPkVgQV1rAN9G38rzHAjTkzDDUfuQwr6sJWLBuigzaLUCVNxuX",
  "key21": "3Nsb2xi8isx5Du6mZsDhxeHo5aHJGk1q62NaMMPFUEBvLBCBkcMjrD3LSdCDqe5ctpFPcBuPnyapprxG3hK9FJF2",
  "key22": "3u6f8SPFb63Kcc16yPFAoqScSnjVesoKks1y3Fba2owTnuahYzYseyym67X1b8K124hTKoY2pdSVGpv4RuDDS2oj",
  "key23": "Vrn6YQLuL6YDWra5R679Wx8uMCUy95oS82eUGLGDYh1BPRJqgXs7XavzCiSQRNJWW4n5g7a5q1DBiZ1GBM5Vnup",
  "key24": "41hHXh6trujzcehoFfyUJLFyz1aVG2gJiJmBCWRJBtjDhvjeChsyR5UoZ8CUYUZddS4Eq6gx1FhLzA9jVF5aDbkq",
  "key25": "2TJ35587P4cFAzP9Sdnea6w8zqm8vHMkjKAp6hEspi1zMmhVf9TPLMrDkrdYLvq86XjXVQt6mz9hLwm7raUQ9iCs",
  "key26": "2Vi47GJhyby9MuipXSgpTheeUSJTTn7e4tPvxJy4xK7MqQiCuUYsvR9q8VTBPXn2npKPursSnpHm8rdb8kxQ4neY",
  "key27": "3RP5mSeBG5FDZMW2uB3EZQ4rXNRLhKYwWiRYjtUk7wkKrLgVeFQujBunmRtN7KScrqcuYqy9kwbqXB2W6CvinM4Q",
  "key28": "34PJvrE2vxXeUkNcHNDWCagTf9nVkkndUGEHui4iAwQq5TAgDmXkfgrDQxS8dUnnGLn9gA6tZE5dnCFpsmtRYSnX",
  "key29": "391E7AcFSQFgxJEeTYv9c7CzDKA5E8A5DFfGzrSUmY2HCJTht7rHmLM2cjo12wePtgFnWYLYZcDf8qx5CfTpkMRN"
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
