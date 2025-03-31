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
    "4AB3DeadbU86rAUXZoSuMMU7HMA7XH39hyVPJrur86xDiQG1KZkEc4BHv4r1WkNAQ96uVV9H2ZTSKxCshqWjjxB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VF42QijRTUL7g1Xw8VWjUBwKi3FJcMugbbmTHjoXZh6LNfJ2nbJYxadFgGZczBbBiXUL8HkPCk8fNM6oisqA9YL",
  "key1": "3PEfT8uw7UntAoxetTGmz49pXwrgAhsJRXXppVxnT1MEnSuuKmnLkcyjWFVT1oZAJcRM5b1jXVExMATmNzQK3jvn",
  "key2": "5FTCp7B4qy66cf8Uth6p2SQgye4tR2RQNY5JZbjBTXFCbkEZGJLuF1N2Zd1tFqNDxSFsC7wg5vTP7zdNcf2mf7z5",
  "key3": "59FVwvWa1U4hbqUZJGsiFEi4HZ1UpkTSYNcQpMdBinRpE6fuo9oEUv2KnRtg9FuBUmaNfVZg8Tjne6d9JBF8SSQr",
  "key4": "41BGsefiQnojkynD3qpX1ZhgJy2KuhRcoa3CGCiV4zeiPRjmL9aDe1Mh4yztZfN6L7VqmTHmZ73nnU15SBYEA8ah",
  "key5": "2NTpV56PQo5nQa6n6tjawb71auxv1hAjPL7vHoetN9NU2SrP8WnRUkotPYitdSi8AFK36KyxkWbegF4yDRhFWcsa",
  "key6": "5D3eb95YfKz11eAvgic52L5yRQUh2bEUXcUX4eko6L7NvhqppcKEWk8QgKVnD1Vvu1Qf8q1KaWMzpveps6qjj1gw",
  "key7": "7wCkKRRGi2CzJBvv3iFunQg1zqVdaJcqRYYNBST9643bDs1XEo9pNwpF3yX1tuWu8Kq1CzAFqhrZdC6gwyNBmWR",
  "key8": "3cU3SZjT1TP9ChpEeJWG4sY5kGBKCJ2Hzvuq4nT4mFzaRaoYL65CBPQKcqQQkbC1WREoFCUqrR45GbzoWmjmLNo9",
  "key9": "21SbFWn3fPjcojoTiqU3hBMD95NSRs6pkkRyPZ221rYSxjRBcy8ywbpTUY1VKvTcCNjnaVZ8EMQDk6cX5GCK4tw2",
  "key10": "MM2d3LoKUoAx672N4cEVNHB1Xi8mptaxrDZVayhXKeY1ZRM59FBdJfYyzAGCXB6fKRqc69P1Mi33s6y7vZtbdbc",
  "key11": "2BzSdDKPFUtjGvy4FhhgHES4tc6E932s23T9GudfQroy33W5BoHzVbrfLC2u6x5etYGHRv61dGafQiYJNrTaQv4q",
  "key12": "437aaPsYsVsEMx6pF4bzPUEbEAeubMiZYJmQdUr8DD7FdHeMtC1VBhL6BunXanKQdPNM86gCkrCmN6o2VY7NWv1w",
  "key13": "2L1vnbQeawXXyvaArsgcVserLXmmUSuFPMC6YpsTWYFToVTVMPTwfgNqW88SU8yrJcSBnKxQBtw3CrzcE6VY5oYH",
  "key14": "3aWgQmt7wsV324xUBxjDmk3E1LGnqvrsz96Madmzx2aBX3KiabZ2gBZC1W2Z7PnJKuHAP5JQY3E8Bv25PLFeyo56",
  "key15": "3FEt52gqNSue3hdquKwYf7avysy7yYu1UigPgRMCdhqEMqSM5KaQUt42eg3axS9Fnt7uGodd1VDiSTHLMHdy9Tcc",
  "key16": "2n6811XqF1A17u8d7PhD9uZVsr9iTzKf2tK9Pfoh18RFty7gqwYLvG6ZcM23AEWVsy5wKnnzZbamHZHnoXMnVZk9",
  "key17": "sE9xo22zTCUYLB3xWrhXyUcDK77dK1t1XSgbEMqP2fBdFGinn9W6psJhMezkGmF23diJyhVdxEqqpEXvZPZVpWa",
  "key18": "4T68mRDnLehTxVwhZraHPF3HdiF3YFsc2WQDjK5bMSbZ7eUwRa5sgdd2ERjnRZGqZ7GpCemk11SWvHjLcjZYKPBL",
  "key19": "4aznk9aNMgrtfQitTSrrChiVLAk9W1Y3Gv99H8GEG9qbRbSaGHWYKgBetVEJik6mgaEtkG1oiCRAw33seYoTAUQ",
  "key20": "2TFAwPiAruAGFvkJvqguKwjjBRN9fd62CVoCR3szGSA1p4LYb3DCLMdNjvDp9yV5d4dAbwj6Kb7VyfnrmmqScwX4",
  "key21": "3NefYcUipUVi266NuCap7Fad6nFNbwQgHFSkApqhq5zJbBBeXeNMfQvSxS2A3ChoCwf82qizmAdhRJFQ3A3zZqwV",
  "key22": "2xR62Mphhie9G32SFBBJBuTiBwhkfAUMjEG1nZxSR8j5pXmi4sZDCVCYgFbibSrQUY9JDVNUyJRvguic9UQRYP3H",
  "key23": "5DZrZTYeBzExavkoriKBPZGhERqMk8vMbTf1pxe3Jt9dGCRBz3ck9JnSerNsf9KxdsiZcCxERDaEPCZFuwE9DXWU",
  "key24": "4SQ5w3T4St1zyZN3DDCoiGXHHXdB5oyoCFnszVjFdZ74avdEvtrpD38QFfy7RY9sRJY6DYvYxoQvF8FxoQcQkoca",
  "key25": "4LWwruGMk2roHj3jqW8hYitgaiJPqThgaBngp4evaW6Kxuytw5B9b58hatS56sNFkELoD4D6GD7NrDXf4SKiM5Cq",
  "key26": "2Ff22aiXxCB89i2XV5dswf7rCfHYoN7d8itioH6xMfpgUBvEaoPioZhy8R8eoufA1HhbH6dsiMTZ9Nnt9R7DmP18",
  "key27": "2cFFdZLLoAtY7bg58oX6tsND7Attch5emThwRrRoZ3YNcDeSPBaWM66jVsgFqCHUJvy8SGQaKqEhqez8E5fkqVLR",
  "key28": "LW9rJJBfH9Qn6HmCQ12F2RW21BE21R8uoQv4iWj7Hxc1bQ9NLTsDddEWKXTRTFAr5z8VbjWZ937AChBJjTnAaUG",
  "key29": "5yA1fLe5rRUsCDo5zNWS2kkxZC1BeNvncrYLHq6Jv7GTvfkdGw6TfdrJxhR2huBKLeNhbRhUCx9bhvRrbjvk9cDi",
  "key30": "2ekWHFuNEKQg2NhvPkh1QChAxqKSUXec24mXiQ9UMQ8rqfuDDQWxzsQ3T11S1g4SRwQh7YWgDCWimKXuRnJZyeXs",
  "key31": "341kzPDqJQfLzArNfpuhWQT2qdSCHFAS8BMK7ET9GfjHwDb6J152ZzHJoD4WuuofvAdhADrHv7DDRSqsVu5nRJtM",
  "key32": "eAkgPCtobuMtzMsYMp8pn9uniJodVetKMqg7hAGzjYXevGiB1eSE82gK6oBRG8ZgfKhMzb1Av1PPv7V4Y3Hssti",
  "key33": "47Hx4HeijyiXMo6bnbywhZruAR4YcYr2rjBaW4Cjxe6fevKprFCxdocMM2jgJqVqFt5yRbRQMZuFQ5UZv3JFhj2m",
  "key34": "CBL32dyznZK4a4GtuD2G3iMN4ABRR6nwLjPYtsagALzvky4yNYhtiwi9SqdpstsaUtY3Sa21b4GcvqSnHpsViFP",
  "key35": "5DwFAwcLSRU25LamJAQWdgSnwcBdAcSf1XPSziYEW9MmdsybFs9VyyeyFeM4Wi6oFFBQs3MRgR4S3Kfk7vJGRHP7",
  "key36": "5jaK73jGyNfPq14cgTAw9j7jWaAebPj9RYkm24k1WpJQ66nDbbWeN86wpRfzW4Mkhq5Mc9kcwfj5GDH9RgYf2h7t",
  "key37": "4FwYAVYBiQER4gjpmvLrHfqe9v1ioaH94GLWTAxh1oe4WozGfL3orb13fcm92cdHRnkUFTwXu8fQSWBADkNKkJU1",
  "key38": "5sRYA5QTER3HAMYd1JS2PwMmdUqFuKM4SJLfw8x9KdQkBJmSfqQ6waZHkavkHc9Fwj6QXFzxSwgPcv4T9nBMHtMj",
  "key39": "5w1Dr4XGbhXjtbQ4oeWCE1REvsmkacYGBtE412nVzGmv2EWxxFA79Y62CXqfXKmAVred2x6UXAr6tmt8hVW1voGB",
  "key40": "2UCeDTWkBrNez8uL54UVwiFC7HCrnXMA5tjn7NGUmNdp3x4fDmeLphKxpMRW7CcvjsAmCjQ6CooQjb48UnHvqU4N"
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
