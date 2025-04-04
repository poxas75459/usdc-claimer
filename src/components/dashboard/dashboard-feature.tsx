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
    "5FgysN349gCTXK2GquVRcsY6maLKei7ez8s27BqiGKXo6b78ikYbzqwcCWGomPHf9BTw3bKPnLAgPoDD4QTXhCxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EJDLrMD9KpG3UuMhVxZrvmSRyvrpquK4GNSZrMMgsvu5VwBZH4pxtnKHES4Q37fyDe37noPbo2Du665iPBN6V7p",
  "key1": "5qTXQG8Uk6T4zfZWQB7YpdD5f8U85bYtv1ZRVocSt48raaMc2SsVkiAsS2X29YT7u93A7R4UHNq59HFo5DS2U5sY",
  "key2": "5aQFxKMZjfZmroPWzkfHEfnCnDkwfTqzt2wPc51Z6SanjsbhG1drnYvkFTZPx5GzbLxckDs7R43ik1TVhH1jwVS4",
  "key3": "3cYaR3auZsa69Ggtf1ReCMkYtnpiFXjwnAUnpSCe1bxZyRYtzgQ11abxQM78Z6MwSQS7RgNoJMfuUvb4oyfr7AeC",
  "key4": "2tiy94vvp8kP7fFLhUedVwB1QGP6J9FBHFKLwduQgDuwHWjeFEDtW76yJouYWHgKViiiCgg6ntgFHRXkcfHA7Jmp",
  "key5": "JTyUkBYBeMS6XjhvXEwAEom5RuSgG3goW2oNDJxJTpwoMFqQF9w6Vas7nXY16P5qVPCWm1roQvEnKNBbHZoRajL",
  "key6": "3eu68hJ3yDYQRT9psXmnY2HGMdkt67E6nJzt6UiT6nFjNbWtKiTyYd2aZq1dD8faMjBGJkgZHGcCQ1hYCfLaJVJC",
  "key7": "3wraQYNDsuqqkyJwFijYtXfyrpU2BchEqTQJ2F6AQMnvZe8vuZ8xZy23ankcJjd288jS4oB3a4WrNBp7szb494Ld",
  "key8": "WVnV1KgBhznDx74i5hF3t91iR6CfFG1uqSHqDvfHpxPu2wnPFenT7gg2ESwj41USuwXe5Kxp2sQEZJqEmJYkAm7",
  "key9": "5G7qniua1XtxdGRCaQHHmEXSk3ifhuU7YZLCLMFkcJrHGCN16A4gXK8sKmkM8MYVUxEZKNQfqRVDZ9b6T5CRz2qi",
  "key10": "5f6Emaed2LmQqcofd3taKPgKhQBNykFf4NRovSdyauaq9RN8k73Zf9JK1nR5Gayza2TuWyzA9s6UGQU2kydsw3uT",
  "key11": "n5wcEAz1HLMDmR46rsDvap9khvi8KhUCTd2voJVq9wb9FK9MZWEzdcQPUkav5Hutv3q27a52RsLivM5hR2LLNdu",
  "key12": "416uqhA7EuHCDDQBwa2g8px92LXEFb3fK5BnwMwmmZ7CiWsAcJgMfpkHxqPxFLwa74SPCUHkcoYfFdMtwqH1d1BW",
  "key13": "5H14wu6qAuWHz6zsgW4KBS83KwpMNP75FWeJm5xAFuTL7b7jfrcc3DHr7BbZZDuWfdhshXbAmZTkKAPTvztHXcep",
  "key14": "5VZepstDVwGTCkjMKvBkQTXgQgrCd5GXezM1wXkJV6kA8XkkXCRZWok2BT824rpuydVwiRd5LAeFk1PY2xbEr5Yg",
  "key15": "o3xq4x5hXFxKdbEykksMgRJ8QyUa28JGHv5Lro7MtR6s2XaSSeJ1StPAADJhvF8MpsBHdVxPKMWoGySc13Ad75P",
  "key16": "4Tjk2QBAxQLQqwTN68ZQ5Fr2R5PLC7bsFYVTd56wcVNhyD7WYYCBwCXumhuDzkYohZfUQ2tThfajgYPMnAcynkCL",
  "key17": "QR2URAizBmn4aJ5CoMTRysG7sqTrw96RcLVZBSgcxcSUfQqeUkPveHpm9AqLZ2HWgnkVGNeGYpwvKrzwUPfRauF",
  "key18": "3HkUXAnKQ2P2PWPB8AG5JrCWhfPbJ5sMVr4Qhd4hbBgrBhSB2GM5MQS5EvQVVDwhwdR2tcE8jfvWZPNrsrJutRyW",
  "key19": "21E5ej2rCLJmsRF5qqQKg1Zz6hXTR91xbe4gcCFJZTKuPJawBCiCNwxziro3AdUAGJDQmxpdaxg47dSSYC7tobAX",
  "key20": "4vWgG5KWc1MusLNVWVVLfqgtsHdkvZaPoYzpAjDYaier7hYAr6ZV5oanThq6f2ZkTeRCCaD1nkVvXACX22mrKbV6",
  "key21": "4RSWw8csoSJurhwaWXnwgGW2M1iDgRHwBiVhG1RFGuQnAA7W6NVyNJkCUMgnVJenPA8cWHFdswSJcVAhcNNK8Mfe",
  "key22": "b9rg1uWEoqAsgB7SX7sjvnsJmdgepxVLH4st6u65rfULiKvRNpYp7HZVo6RpPi35SqxX2kWt7zfSotnrWH76oMa",
  "key23": "gVbhWqnLfG5k9stGkGXaexf8Jme9ub1rxfhDVUn6pt3JwRGFrCRv3YiGnq5JmMaSsmyxBuXjQ3RBmcfe4DcK9nm",
  "key24": "58RnW4AzrQ7jjFULsHtfovPzxsxxrzpXdfJVDfJMQSjJt3KPVNvuMWjyj5jLCDc6vf8c2mkKgs6txz6AzQUiC4hq",
  "key25": "3E6sycRVbxf5avwv8iTDQGcYbFgB7GQ6vv26nUgKvo9RBBLWKAiz1LHZFaCGqdJ5zny7WV6vkSwF2d2rw9MNWw27",
  "key26": "2KS3ezkr7Bgkk8Up87oFVrroMYSwK7wJUZTucjSxh6YmKXotnYKucBU5t89AhhLcSEgmA1ejqrZvN9SZrYVHCdgs",
  "key27": "2q5dSBNRuQTQyLk8iaq2NNLp8Bpm5g7YAHsKtTkfBBDa9AtPuxSCSyiZARrgXDjz2cEsBWz6KeXaPNfJPX6XCGgD",
  "key28": "23GroPNoDPSPUJSuKED1WxB4A75KTETzAYGnBSUsqvFsSmg7MxGuJfBFzqBkAreCfZ8pUAYSS8PLGwS7xvoiaV5H",
  "key29": "tnXeiWCCKWk5bGZT7tWHL1L33W48xx6RHPTek61YGH2DK9AoRHE4jhivragFHxVmHitbP9iJfKmuGcsw3TnYfhc",
  "key30": "3L4d8aLhhzRjP9M3fSNWE2Rpn2Ma6Y9oxHS4dfjTMQ4C3pCEQbUyKyrAHT7SjQzJTiPiNabkem7gLYVmojTasGfV",
  "key31": "2VBLteHY5Y3hZG4DE9wP7GtpBRgZc1ugsitmmh7frDakk8mabF3nKHa1eY6TEioqFb9jLtQZwjTosSS1eyXmNQ6W",
  "key32": "3AoZNXA7oHYHhciBvu9rPCeQmnmCZv2P8kEVF8wMQ1pnAZG1W6KeY4Q15wDZjmJrbMNCPyRabPWkhM8q3YcrrREN",
  "key33": "4eVZBGY7qcuFjnzkLxrGxp5T1JPyRP1NS5uHG1a4T4jPmihMWCBxtboRE1pRRNRicW7yPAHBkyrboRwRr3xPzV8y",
  "key34": "R5oskfWNincsa3gYn8CQ7QTQY2ZVsY12Hbyktm2bj4opWX4vKAeTHqE8hTsGXSbH53Xw5ke51bwaQMT8fS7uRn6",
  "key35": "USvdPjhE3cFwNsJKfpHpmQ2FEAVaBPZdCqTC6vNvLCbfwHNLxw2r4U8gKPSdTc5H7VpWBrFzn2FZUEoSmVHCRnE",
  "key36": "3c1AQUFnejWg4DsEB9UZbbbc9jxiCMoNtqsDzozym8heFQQYdKKBc2DbyhG7FVy66qV1oj3NQo3kXoPcAzYcQztm",
  "key37": "542hcYHTeYCmHQkjAJyyNy9LnD2Y1xtjpBeBopbHre4JR32jm6wTpzmWUP8kpG3PLZRLVP68pBZoqkSVwt2PsRbw",
  "key38": "iyKmmz9XxAMosSgNqYabMiKxYzJrkzaX6iSE6hDW6x22SWPdgo5Zr2cmnFWwPXKLQWnuDJb1dVLDbnNJgCcHnSS",
  "key39": "4QrsJ2xJ9cfron9sDnVYGqqkvnDTzpKrEJa7YGBA5j6viiq5oomXdhSkTaCpLrVtEiCXYye9rq3WssGWgFFi4QaL",
  "key40": "2dJySQaeGqdB31CZJa7nKUQHaUPBzQ8b9BBb8uhj7vqcEg9vboJkeqGCp1XzAZefr2xhdFFfj6Y2dUJ3m5aPJZpv",
  "key41": "3dnXy1aWcCbs1cNHbV85v1UFUqCFQB3jw4kfWtUB9Qe55YWJhef2eJ9JrLrRZSN8Eayydy3F3vviosv1VdX2PKks",
  "key42": "2N1xWkcD69V2UUFBYNtg1Tz6PLTocccX2m49nLTMRWjK1QiYi2sZwU9o7bV654Y4BUsPBdBF4FSbivEBmyk5vjRE",
  "key43": "2G3HbME2QeMkbRfdtsnNJ3XiGe4PVWvFZXALsxi4EXFaHCf3TU644qqohQXr54WmebPW3wHxfbU5Xeox6zmgozZA",
  "key44": "3XbFH8NURNgXdLpbsPH4CguWrYt3UEZHJZXCEp5CzW9MskhrVPXAn8pPx2cc4vrgoovdbhNgxC5LP4Kvrv3bksV9",
  "key45": "63oSgQoFvyn8GRri2uD57nWngwLZUqq2xbgv372M23MH2qAL1ESh4hFCd6xhujwmTj3EfDmquZdSpjSLAcnyLKYn",
  "key46": "2xCrEPrmBCnNbknoseuQy96LvqjusxFHcm2c7m8PuXoZQ9bvKkT3rGrmsNhdN6arhQiEvDB1eSb2kVMsKR67Sjd6",
  "key47": "46LdvqdLvCqKfhERMMhwHCx8Gz8nzpG3deVRHunD4g31inDfkeYo8WEykup27PGGfH512bdDGAkUtgWvXFENuP8C",
  "key48": "1aefyoc93ivr7Hus3qQjiBGppRyt4a9jwFFwjH81TMBzPjEYWpWF2ZKbSopbngp5J1eCBSATDbRywn8pPtokp9X",
  "key49": "5pH5yQpZzeaNXFDjhQBkeJEZFTHZ7XGKwx5J4d42mKhQK9Z6b1JsxoSCVB3DNiP2wcVL1YshXANepSYx4CQJGBFQ"
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
