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
    "2fBtxzEtnDaUdmbFs1uK5iCHa4jnJmqsnwKgQkhVfJ524s271SdJtiayPiH3SkhnBngHVv2UihkYgmqLnwVu7vhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFnBidUrG5nBZLPDRjDqku7TJE1E3SFdxyhctPU66mWkrYri3aT1pBdUqudzgppXUwH52ytAQ1mSyzvrCSKhRM4",
  "key1": "32uVwwyCYZh18LQqzFEZPTse1AvqBrRAqf6cc1XXdN4QMQLgJRM4xg2vT8HACUVV9h3QgxUPxNP69YZBRcHcySn",
  "key2": "cRLyqMMZdpHJc9m7DvJGmyYmHkWGw9XDV5vpDs2RdNZHohDLtpjt919GF5vzsbxm5zrYrkbBGyZWBgof6gKDSaX",
  "key3": "4hZcMywcjeVTrDhTF54mcE9NwGYFcZdHjfiGakNBy1zYzJpcVt5nHT5k2YWm5dwpnEfMcQGmBB9VMS8MYLD5HioQ",
  "key4": "2ypGAbAmYwu6zAZAfLbteddP54HHbfeeih27gswELJir8fTMbLQgCChC13NFgy3Dmc7BRG7zumhxG3owEDb2YMAT",
  "key5": "3zqGmBKQHGoYTpYcDYhTh2NutuHoi3XxqJQnuxALVAsYCoWGaRjjZUVuwNXEASHxiKBaJZjHXZJ2LDyJTejSNaAc",
  "key6": "39EdKCq81BvqoECUCsd2hgdJKt5ugAMHawuUKimj1ppUAbKBKKzz648fRWwrpjt358n6Pasub323SWksBEpZ7oPE",
  "key7": "5vrCsHnQMFxJBifHRYKSYPCRGXnPQCbaF6BZSCMKsGwMw3AwrYs7CAWYLTUUYaMK2vw47EPHB4LBuhH2RQiZiwL2",
  "key8": "SCXafQsaM3xMS5QVduCqqhuMo9iLFjJfTvhvhoiZkEae7L1QhcVgkRWcWLcvK4poYaY4tR2j5tVhiBZrui8a6wS",
  "key9": "5dRWPCs2RKM1moFUcsufKn51WrqFswEbY4k5Gj5BmgCVWVLuW6gDCuHJ7eUBXvZVaudtH9giCfUtpBY4XwRiaLim",
  "key10": "29YzDEYqj48DpWbGZgurjMY3ddP2ZzoZFK2tAW1UeC76PTeD91PXNXRhtp2Zdn8q8DVgfh6HmVZSbpzcTNXKZNrr",
  "key11": "3RHNsCAtN8mSCD3Qt32FPzn5i2dsqhY4nRDvGRDqBXatQrtcG3rx9BHZ8fs4i39V7hynNxBnP8ad1HsAr2BNBkJL",
  "key12": "3wY5CfnyzBayBAFYRjvPBqicjCCD9L11uL7JB3PGKuxYyvufbL2GZMz9EywFfhssCyTJwzUzwMNDRGRk7V4A9pJQ",
  "key13": "oVTjRhX7pVU3FqYKqP21X5c37wtZYoVDypwcJ69h8myU3DdNxpC9REaRqmaD375dfG6xZuXXWKSzZuYdUjayzbj",
  "key14": "4unSmuVQ6JZ3FSdTEM8pumdLsFttYGa4eK7nnWGNnbJoNkwpVDq8W9hRHGVrxH8PXCLgynqopRXofMN2UhpUzUbg",
  "key15": "3d4bLsKLVpwixYScGT9Ev5MoY3iKa3ct3aMwL9nNZnACRBZgtd8RYhUe1p9ChRBskrdTzP9VRpFF49y4c6KJr6et",
  "key16": "4dNaioTDCgYs9XqKF4Eb5yuWa1DK8dVRDwa335kCvUf5zAZmDoGSSGffxK4hnFneX8prPBeVG14VKZMe2Cid9RGi",
  "key17": "2RQ4tfBMpbMqffcNKzkFsZk1RCM7tteCmnBq6QzhnSyAg3bkqwcegKCv51dZtBjveWBqNGkzsSP7M2Xh5WbtHV8u",
  "key18": "5PozSQNouR3vfS9tMaXMxtASaX4Pzt17XDKdhkxaWoGmjgaAt7fauk8DMEmMUnCiRFMmnjnzhBjtWd78SrpXcctm",
  "key19": "K4xqmWtAT35gRyfRyRmAfJaupg9pnX4CoX4mbmdk1PSswjQzZnichFMH2b27L8UBX5MXEhrv4fPYnMkHGo8KG5d",
  "key20": "5KhS4x7hCz13K2WLiUGwHd3Z2MBGrTnjamw81Fw3RJVwAKana3gfwxRKoBUZa3GxUyRW3kDibdYVw5XLcJdRoqVd",
  "key21": "2upSoMGSD985b1uZwue8ssN9LQF2nYFtjBr1QCbaHvRArWD31NiJHGcCza1ZLbcJwfk9a3w3ZNF9R7qVzWNnxe19",
  "key22": "4bpj8jRLgC45tgX8dZXcH4jTcDCKsNGujUqcCbHS4A8SZLym8cz5YSi6TpGCZq2536sp5aUjmDBRZG257Yr7zUH",
  "key23": "5PcdTyQvENREBA1mjTX8jNrxgWFqTtkrr7NRJwZqhgGXEbvKq4LHmbeqQfUR2VnNa4jcEDApC1ubYH7tJzrZr3V7",
  "key24": "wgBT9E9TjHkuTnE6L5C8Z6ebwRjHdxTaTrirwQnMatndWoD8hzD5awviLZHMcb92F14P2YukXquTdXMjifcHqZW",
  "key25": "8w9DCUMUzRi69aXNkLXNyc2CNDd9gDFnmai7JYjWsSwHn2qD9DV3nGH5tjFMFE2btCgnSAWQKCGWYs5vJ88Akz5",
  "key26": "32vRTLG7XSrxy4UTxEZGospF96GB7b1awwoVzgrwx4GASTwNzqATC2kgiSmXsv98XXYh3KXxCoST1urQH8GHbqYo",
  "key27": "4Yijmqcxsb8FnEBAowgakb6oYYAejq9aMi4B6i7WhT6KV4bhN7zr9kckgHaA9DYg7irjz8ScQ4wzsYV2CsaNRa3K",
  "key28": "3C8qzod6DsKXvrfoHYsyzV5t3VrmuBuuNfr8YRcQvbAByLdGMkXCDpz8Yvay5h8QuNGSwLg9bc6W6dkLiSttaHHp",
  "key29": "5tiJPPbnLuDQTPLQuALUV3bR1YWfm1RgCsoh9Q4YYASwquWgCkjcAaFGkvsqpxHpePfpiqzf52ERNfxFLhWj6si3",
  "key30": "4SNVd5k7bcjnkeZLLpSKXRNFNNjoFnrQZxDHXp6unPtjMBLe184qBEGGvvydF77NeyRjeGgjabaHPjbvBCBKzaSa",
  "key31": "4fs6bxtBu6YAiMc9gmbcKMS9XMZtSwzp9LR8EsaPWBejeN5J83YhvctBSiV89eGGxgwi5tfD9XxsxFtW7tryZM8B",
  "key32": "5TshDe79S6fDyB4d8gki7EW92hBeTAMAN9KAi2oLZTooRFazQksACmNAcsGpFrtNX2hRRFjhEBySAkpzhEi33scy",
  "key33": "4xJ4iMM3JtU29ojewxoQSx5vKC5vB3tM9iX1HPHa9cvQmTauQuBhb5HzCrpvUN1Qr6uf3AHqhiUCmZJVfWNyRusm",
  "key34": "2ssuQLVhaG2ftK8qBDwZE1xW2ysXQCqgGGb96vo8thzgqRi2Rbk4yssF1hqNZhknxqMtWAkg5wKozHxfKewqMNuu",
  "key35": "5v4d3z5kPmRxFG29UBrfW9xLiGnwezqYMYX4NHzGJwnDTkEoGW7s9JPx3hepCtKRKEFVrHCoTg48gKmKX8jMRkpu",
  "key36": "2Jsi7uUHyEwtuUm1ND1Fsx2KAf2ZfeNksLesjEreCEGGzFd8gr7UyK1JzSUseue9BLhuufWi9GtWJEt646kCnfU1",
  "key37": "2BLFkXTwQnLP9yW1CvzD9CepvWxhVFhHY2JBeh1wdTHdXmDTkVcDThFFzz6cWoGzhZiJMKmvmcY44kCCaHU6DoLD",
  "key38": "4MpEcGyodXXhrvxPJgMfczNBtiTjjNWtSJ8SoPDa6FGa3GkDYzZv8QRvMwkaA6bmbEWmHBsgZ4SctAFstK3yvjer",
  "key39": "2nM4Wn64xtnuc6uVq86J5TsuECj72nHWPTDQPuEdFJCGp4kCDiQHY7HT4FKSZFCqyovkAAX3J4ixHwLYzsQpXi2X",
  "key40": "4m8dzhnbg1ayyYGmYUjJBtBXBCPBidmoeerxLhd1rUdiPYsYExtq8d8TncQjhNq7R56CHxCYz1XdpMEnRnRtHDAH",
  "key41": "3mWhHRiznqXqVhwgsiPGB9tr5fXy2irTTTaThtzabgnErrEsp2b9ruNsy1ESLSCDdvkfbPeDtj4EkkPXcX1Kki3w",
  "key42": "L6GyeBs4tZcQjFFyB9uxsv61tPhBkbadc1b1xUVHUCZ7u2ud4ua9Ld9Z7ERM9HMGWaWG8AwKRguptFq3yf2yKHQ",
  "key43": "3AbmK7wSfRJem1dAz9Urx8MgGiaipg23PicZEdKspHeYE3zoWSYjuQh6RcBHhcNzQMTDxgvyZT2gemdSSe3PTiFM",
  "key44": "44hQfRZSG985nawL3z9iiBvJZK1C36xfrQMDw1UMfuohEXSHtmD4xGRFSkF4zaDMDbBMGq8eFD419U8CdLE1yHiv",
  "key45": "WHVxcz6eLGrRLj6yohouF9BACcsZeGXCogiexwRQqbNGxs9m9yAXCe1RXgj3f6KqSvduQQRLkUQRva4r69ti2PQ",
  "key46": "r3MKF2faYapoNrHjdao58k1AUEoAqM8wEQH69RLpprJUjcM8z14TGjt53hVBdd3j4Vj6PWAKkm2u6U2DfN8DXEj",
  "key47": "4Gv8HDLkAjmmVr6ZVLQnfk8t26sfk3LaW9fMA7nXcNqmFcSVa9eavwyEBhKMHWjqqzvKTpbRDqHWsv7kytVXnfbN",
  "key48": "2srPzdq3td9iTFyRU6gAsk567HbZPKwSwaALn4mYMxgbTPwnmQjvCbhQPVgXGg99fRZCf4u2J7HQ1WKbugkD2sqi"
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
