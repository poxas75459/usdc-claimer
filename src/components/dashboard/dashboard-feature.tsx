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
    "5iGGYUGzg4zaQdurmgHyjLqdnUqRhKcneo9GYuZYLTCD6zXuWPJexnDnZ1GoBNmk2DvVo93PPv4bifp46i5iVxyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fDCgnAdmoUC5iXxExzcjh1UMAx6z49otQrtXo2kCetd8tCQPcU3o9PSF8QAaVsDLVdv8cQUUbbBy1tBSPg3RzJL",
  "key1": "Bz3d4hqYbFnDCeuPPq73o2We4q47uwt6vudhYNVwLAevcD4g7WrrWk93NkKvpx64tSisekwfDUUTK6K9hHFodCJ",
  "key2": "57k7NsBGbBp2obVPNZwj3q1RpGHsqWLgyxDVaCgurva6cWyTBP1A95UtvnEx1TqXxPmoRenYrXjhuP1Jf1BLUTCk",
  "key3": "yixrFdkV8tSYxpKuWysNNKLhxcpKbpNiX6yuCbMmD9Hcs1fu7ZRHi34TB9nL7q2k6B1k939BhgskzQL1ppnyuar",
  "key4": "4V2r1VqkbYopmwv7veJaNZAYhW4orgKCWfRsJN4Ugot2cU9KXZ3cJHqP2kd13YDSvzMB22xRS1s6Zu2Q9RwjynD8",
  "key5": "2vXgHzcKMMRdiZLzZizCL7UFXRQK6UNArC7ujLomZtuAbc5MpvXWWBTWadj6yzGXVQnybEaru5bn7SonFZyH7GDf",
  "key6": "3PVP8epAu6Vdr6KUopiHGTyWJj52ujD3npiF9U2aS8R5HNR9rDpyFBPu7NWw5SZTaBSSYPyMYpubxeHfjiAxcw9k",
  "key7": "5E2xbRhHNTifAQaB3czSCkhTeVBfmhsrNRdy1nC11mRHwgMgEqTixXAvmnJbBUQDEFGkEfkz62YWhUUZGMPpUrim",
  "key8": "5gZwPp4NgjcDUbjYr4UL3j3dL8vLGkShW5msybZXxqsPS8x1W2Zu6zDmpQkBpjx3tCeaSMGctF2qDTMsTC9nC21s",
  "key9": "2JDTpViWg6gQdFQTrYgiNQ5nbzyYA7eJgPHDGSBXfZb9HdtUFcsdcZi6DNYTBKe5Kn2s7AM7XB3yViX2cr4pUzTt",
  "key10": "4VgnKGKiAfe3xgk8hiLhmmHm5pXWTUtssyw3AiM19LTvbaw6A6V11WLF2qP9uzWjEF16bzEVKWhue3ZFnz6HAXmH",
  "key11": "5FKzz57mfCJeENHDAVexH9pLZfs6qaT4Jn7qHN8oYhrXnwF5uF1Fc1fGbU5eSAJTmZQ94HkF6wmnN2cJrjWZJv4N",
  "key12": "3vgYiYpSYNJC5wCS9AE5BCRBuJ4JzpTy2VAU6RSxssjwvMWq8cGB3rKyQVmBjAgJ9Dt2svbT1Xt1xpkB69GMgfmE",
  "key13": "5yHWDVU5qmkXT5G7NRgXqD7Lcvs5BnmwjG8E6pnPHwfJxMKHzRVgQKqSqHf2Mjw9riZVwiMS1twVdrfRgHQRCtkp",
  "key14": "CU8NC7Rpnhp7H5XmPbV4pqhdsUTQqgZPzhfEh29WxYqiPztwiuXzhMzA85de3KJK9jofa9WBsFw89gEAUHdvAW7",
  "key15": "4D1MbuvUh7uzTJKMFbAM3dHBcLcVdNdYxBx9CrFQaJirZV2idihgEY2WQYVWCNHADMk7vTy9Nb6oSCtjgp25xoXA",
  "key16": "4ZBsVMP6mTWPPFNo215EUaLU1tSXBDk8haHc5TZuGKL1HtWRRjkG4yjAGECzwb9twbpxRukY1oxtDyhMdQhZhPTY",
  "key17": "4HUmdz1RxBH25pNW9c6S6bN9zbysSitvPr8FByWhPLqU4drogaGroUBdBxkbiLqGzW413TMLVLmy9xJKgEtRM2yq",
  "key18": "2GxQ7HWNYkq7wuKNbpakhDYypVExPcAodidxhmb1xho4XLZwgLpsEbFpuK7TCPDkCVNY3QcjPmAo9kcN42eaHqKH",
  "key19": "4skUjMPN8qTFwrwiUF35GML7WH2a1eBAs86TQzHDtkjX21aZpqJKZdyx4S4QsSubfbrohxEQd8whSijY66557SmN",
  "key20": "sgsCwpeSvdzrKcZuXU7XhfCNLGfY86aX4FCs3MmjUS9Ktryw54wDZEYFaQisG6jZBqFgsjryWqKn3EJMRB1MRyv",
  "key21": "4BVfLkS7pZdD3EfGGvnk5otkMPFCoLFEvTJLVM1VixQSWqecNE8czpQ22f7fDa8JYitQ72qr7CwrhGVv4hfMfAAx",
  "key22": "5fatKqSTqNnrvVuuMUWUKkcpnwhYz9AdZbhkL8gDJf9tujPz2deXrp9fv2V8vbiKH3Gsnj2SC5ymgcGm8Wtf3SVU",
  "key23": "5bbk3iRuDGL2yCksU1hAMJMXTPJ8wWXCr2kDUmgA3qL4Hsi4qqFFQVXtrBUufmTbip5K7PpQBBLDzzaf46DiNzw9",
  "key24": "47LoAgnSzYQM1ZXvn5NiDxCUARUPAVjg5AfhDSXWgNvmXShUctJpcSE5svw9855T8TfSemBNXfHEYRxceRWGxL9J",
  "key25": "3g2SM75nesY3j7eScg4M2TpyKL94wVshcSPgWhZSagC51Na9NFVtbQkv3hhETV2gsum3M8pyqiVson6CwyQZUoBR",
  "key26": "2YTHnkJhwLCSeNFdCXGYwRoyH2H33qA33j1bzTvH9eKAGeBnjcnZBgT9hisjMurjxhEvguR84zgRSDzDmK7V7MKg",
  "key27": "571CVBUr1vWHnZDz5UK92KVFB3sFKpgKRUHCZBoZUFYMKzjURG6A54ggsrZdJW7wbghJKMBYoFPkhMP6T5sQKhmp"
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
