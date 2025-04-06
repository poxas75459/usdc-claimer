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
    "4ev9fsHtfUsvz9xUWdBtLeDnu3JaXT3i2gxhFHsfVdvEjQkMNhyEzdMMy4Ube2UiuXV49XK5CnmqJfaTmR4qD18f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YWztvCsX7NN7zzGeXEkJYkjG7jcWkf1HdBXda5Kw5UwsBQ6KqdxnLUAnFsmLySM598uqfP6MQiZQRk8AoX4Du7e",
  "key1": "541ybJvepmTWypfpdrG9k3ns2oGfTL91U7bcNt1gHFMPa6eghakNz9ZcqCFaUv4MEUJgXQPmgq2PkZZ1EQtp5nkf",
  "key2": "efxUmy9htNBLhtFp9dZkkkgxqnYnkMC7F22iCuUEY98PevygGNYAwAbQhvvZdLFSQSaFZ3bt6qqGcxiB4PEjaTg",
  "key3": "2S38hqDs6GsUpSFe37cEDXwpd6uNB3PodZ2SUPzaaz1m5T3MVB1JBFGn5fwogBVq15vqi5doSSDY8jLFd41nxtQt",
  "key4": "5vVXnBcPoRBdBaSFo36dfMcgpCX4rUvyhJqiHCymk1t38SDTg9aR43V6f48mPvbDh2LTNbt6VeczN8NforAK1NkC",
  "key5": "4uPeo9nUbrgoaNkeovFygavSPnGXiGFKqvbQ1WF6G6qqGBbcxEXLj4UUXMVsta25bqHc4G1trdU6bZjsyQL8NapE",
  "key6": "48PhktCTJubF8dbUK1n3KFKydxBz9XBojBYAPAw1KvdgfDXKxpWGdhT1ED5geAktJTvTB9YV3w4dZHSnBPxjXcQx",
  "key7": "5oGnEr6hLJAvac3CnDDecuMJTYbLWwQtF7kGfwzD76pTPqYQc3D1a4sg6stE778aLgcrPumDp9beKrA3K83F4PX9",
  "key8": "63a3TtqDWUvE2dPQWWwWmrM1XZWxjVAjsv7ckpATStBk5omQHDpmfFHa6K5MULz6b9SRMpXC4QhyH1d96sNinY2K",
  "key9": "44UmTRDrDDcRvrUFFWG9cHtmj3T6BA8yjhrJsdaKfnB8aoXGPqWz4huaFsfEzgoyuwyF8WmdQNKyJqfrhsDvKrMZ",
  "key10": "sUinP4A6ScVxPUzdu9SMJdkG4SY4QXhCneoFb6VWsnA23FM5wGrknXFj4ZS7uX6cjBgM3x7pXBExYekhGnR497b",
  "key11": "4k7dgWQ1aDBBrojZBAjktvHRuNftS16y9NVvomwdd9dZtVCzr2LeUQCA2Ge2tZ7MGKijSDzeSZ6sMAiY7aobcCyp",
  "key12": "5HaD1Fae4GjrMTvPCyFpRfAwpwDPYt11Gu23aY5Rnah5h1hzYywR1z54sBjcE5tdebquzMyVRZ2TemKc9DgBqPLp",
  "key13": "3Yin9PVkm5YLSA9WqXEegCnEcBdnQUnjK8h6LGvto2Y1Yxo6Bir9DYR3SWeFLJUxhKhYGWyeJtL5s6Gjh2zCXCUS",
  "key14": "4j4x6R9iRRgLsLEbURbeBicygntzz1cF1Y6C6DW3zqafQZZ1NfNNsdB8HPSgvu7o89VEr8zd7xLEBJnhC7JSnRwM",
  "key15": "KbzaK2LbfhwGXUALZSDpknCPuvCSFRbf8JFAbEs5rpSo2Qi1Yu5BuUnjwGZNocvyK3XBG7Go53J9ja8DsZrFZ2N",
  "key16": "3ywSM2xmV4gxMtHMAEPhQgaWcN8uB96Ykhnq2RxoEG4C4h9qEPpwtAn8wRx9pUTiF1aqduEU1uLiKTYwYFMnP7Tq",
  "key17": "4bJvkGwJ8Mo2WrTY7yrpkeFoWFkddtqty2MMuYNWx8K1DCfhzCoKVqSEi46ZxeaheN7oPTVFoFRLT64fFZFt9FQu",
  "key18": "3ZqBgvGMJ3JJPbS7CkB9AEiheaXoTP9NMxhGWLdqAPFvCjpLYXfZxyhqY6YML1637DQKGwsUPfj9ZxpLBP8BKgHW",
  "key19": "R1srjWjsNkSZrChZDwppR1RvfqXDEf9cBGhxw7SienC8vZAiJ89JkckMHDkRtTPUZvWgKU2Pgxvb9NJpRNM7KYQ",
  "key20": "4RMTW9hJHtZJTPGobcN2yiriXhLn39ubctt8DfBgvTRdc3kNAeWj4TtDjKwVFAySn9UUoJkvt21ZZpYaeHwnHX99",
  "key21": "21eqHXaxeM3aKvZc5RDWbhQEqDHMNCw4TzzaSWYyHaocmTorZYUtGFoXZAESs8Vg88Yy5deaxqwEHWv37Biv6vgL",
  "key22": "58kjPc8fiPsNSddwvW2Pr6Xm4bDCLBnNCZ9RAXscBbei6KitqagoZwH1efNR1mczuGnmN2eVGhkgohttHU9PPHKK",
  "key23": "3keD6n86RF37gitn9reMhLyJrCwfH7PyFYTdbUq4YmQtLvvMAeDiwMhfGvDEC8cvziURgJ66PUAhKrMVPe5c6GiB",
  "key24": "2nTmgKHgESJabbJVUo3S1SGsPjChpP4nCMa2rZLvGY982aHjDzumCvGyX9Ywfgk3qyGs9CX5kUqZ769YD7no6UiH",
  "key25": "5iVAyCgfjeDbbNBbuCovpchaSSsUek6j3zdsusW2Ko82cBuiA5cfiUnwbRLCMSUnDvJFufA1qY7SPtzBdtB8MK38",
  "key26": "4HaevXjEhxayyTpLog9FXY2kytBvnvQqGsdA9dAYjCHFxkJr6YhYGEJCbCV3DY4u8YvB95LPVtthchnLsKzDQEU8",
  "key27": "354yRUpjcovej2N82rNfTKArcn9aK12s11npkT33bWLETDxosCGmkkdu5BkgLRQXzgo4NdurSTBL8ND4TYYdPyGJ",
  "key28": "41JygiPQQTmQCLvxFmHH7Hxnxz2bdnb1PCf2Aqujax2X8ML9LTMHoaGRFjp7P5AADXBfAVa3r1DUuhhRed2hgSPt",
  "key29": "4KrN9xuPstvRa4N6k6A3EvHUEbQgUzC6L2Gi751noPoW1A45BsYWs6Se1aGRYqcaDjdfPvtFtTo1czfY1QhHNL71",
  "key30": "5cejsKSGkgW8LaGFSco76642mKV955LMw8Cxv91iYxXNaC3oTHNJogVUp5UTAyFabCH2dznLNmDEUHgFxwmDFwVf",
  "key31": "5kLbBJLM52eHbx7XkAs9LKFRwtBzrPwu3MJUhpYNJUP5EnoUuDNovxFrj9W3ueJWoqzKMVZCzPR3eJqgp5WFXnXH",
  "key32": "3pzL2k6g9eMgzuegiUmaFvhQbmxCYBPxvuH1s2mnz1tG1SR8wZpibFdUiHSh8ChmuBxSuRoaHwnLCmhmyEyvzHFh",
  "key33": "5YmcNSXjRYrVzZEJjdsQDxFtqkxmQ7LQY2S3mSAyj4y1MsBLHXDznn8snTWXhQ7SA5HS9mFpHC62S3s4pXppchzX",
  "key34": "2YeLEi8KkhvzAb1y69UECBFWhB3aEE4QCTSUEXXvmGGTnACD1T6URj2VAKDw4987LxFCNm6GjmZeS94B7rqk9MiC",
  "key35": "5sUXfWt1iKWzMeM8xzXHLR9sGPdekbwK46iu7GSiaKhXZN2LmAiRLTNVySFpcrtRQcFdwqFqLZJwWkXKuGDQzsiX",
  "key36": "3ngXzuhyE2S3x8cVj2vBbaDLKnJ3Voix9ZBkV3RoNMcDTg3iLiMXpB4tvXcdeZpeHSLsbdu1QXJ8LP3neSx2KvCn",
  "key37": "4TWP1cY4Ee2sY8a8Nxd6CA9QkjdowMnnz8gzMLgfbHpgxjPPFeVKFGSsdqKF3hyyDVNKsVQsaSxs8dqUqfNnDh7M",
  "key38": "WUQjGQUKqpuMT34bTHDXU9hLek9kkf43p8VLktJhnsh6sNHTTiebV5JK5FYDQAejSJgM89ZnfS4K1cxEJiW6ssr",
  "key39": "3LK39r7UYEioykF3ECViMscRHwewbHgTN8kjsrUcVjbkHXk9mjQf6WTZbRbiu1TFavfvowJnkbVrJ375MA8CHZSA"
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
