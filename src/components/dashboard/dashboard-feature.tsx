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
    "2crgXVQBjRH1mmNETB8JsJRJ2Q1SMV5oWFfyftVt1GLjmnabdA7dqr2cpotcjPQRyoixnnGkTRRduaBRxvgjZpfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oHvtcAaB64gjeDDwUBa6MxhYz3fTvCzsxn9eEmKkXAvNkH3tDaH3dbqKU1Lmk1fFWzFd5cyU4BsqBuYRwA2esMN",
  "key1": "4DvPh2oaG8ef2RW4FoGYLgXxD2joytkTGK5mLoqKNz9YmHfLjzC2hN7fyjLiWXqSNoJ5x5QmsmpK2e5MadhwzwtN",
  "key2": "SKnpoFDbphsdasXdoVbLf8K9d4WF4SkPs4rYXn9RL2W9mtY3ze9UYijK6uW83fzczBrwv1vQQvkq98oBQEarKCw",
  "key3": "4Wacu4V1haiNWXa8aGsp4YfxigXoqEwiwgrX34hcJyY458bNU5BTEwVrcyJxRpCEcfHrFfLewTYBbVz5awjLD7Wk",
  "key4": "2D6g1ncCq9XSAbpEoESJMJpLYN8zb8kjmRy19C83gMbLAQbsnpDjwWUW8wv6temAUwH8Td92tQzLBaUB2np2q5rd",
  "key5": "5dhDGSkMjFhdtFD8UDXCATF5GzRLxB8DGSZ2EkxSAS1ZWhdU6UBHhFBRwfGdkHiZBkW7dU9KNnXwGeqtiaUWtBtU",
  "key6": "5Qa9utDBT6MXNShzucFEzAuVcLYrSZRrqkPFPS4gSRQVq8DqGv7CtcG1jhQd9BBenfN33T2pTThCnotZfWrF62PT",
  "key7": "wpJPSct9CLKHqVMjG3QZPVxAe7FXUrW8d5scAsajiqHRPHXRpmLMX6F6pdpcAH9Zc7BdXM3SjWUaLXVZ3E6SJvC",
  "key8": "3YoUNBnPUtWKNk6hmivjL6vixobPZAG2H8TQvPFWzPjkpyx9Sx1fN6xwDeM6594WmLNj59Zd2gK8YzdrTLr9P4hj",
  "key9": "4cseMPZQFUKm1uGu2EEKkbBx5YxMuRS3WgRDQXBCJDjaeYBasWqCC3pPig11FrnVLasStEv5d7NNK3QFh1swf4Ey",
  "key10": "2C7oTePpNP7dz1SFATVNB8Pr4B5RZoGDK8V1UWGUD5zxf5rQiz5GJEmJvH9gF2inm3aEmpeorvLShJrXXZB3Ndd1",
  "key11": "4XGNJvGgyJvRXVWn2suwvJaNx9kW6YLw2gCpqVYizThT1yuHzNxrMo2FDhtaptqa81AzAb5KvuRbsyvdQELDRxtB",
  "key12": "2WWvp57XhM7PNxVkHJ3v2eqdj7nYYobG7j7b6aBRg5HiAXesNTGYDqkxeN7rSW2gPyerVXA7NFwmMBv7U8rf6i1f",
  "key13": "5ubX1sRUoq1PaRxf4n6wWmkWDo1NziW7nUBYtDfVTDsnzs4wYms7KEtHZzZgZiy4ZsM61xqf4eo3Yxevan43RV5j",
  "key14": "33TLd52dtDN7zQ3eLzgcj7GBjQnqfeahP17aoXfsrgpq97TSp7VkxDKV9L1irCrhfa1JfsfFzXiZGtcpCvVum81x",
  "key15": "2HJAm1gKT48bRfL4RcZP1XcqTZZhWL7p7FDqBoSm1xefifHQg2Eceu5ZxEAguYos3pSB37UjUsoUDT12TQwF1TGk",
  "key16": "33fN9E7hMLKz3pww2e7ZPDL9F791kGFaEWJY9CLUguXVUGHLamrsJksQocsdaQF2Bwhcaf8M1HGq6uuwkAejo82N",
  "key17": "63jj8psUTctu9XYx1D2Psy57oWUiMrqf1GGrLMohwHPU9i3acurbqSa1AjBr69KrVWUhBXuqV7or4ofZwF9HedrU",
  "key18": "cUFfsakbEhCMHyEq5gq4LW4tw5WsRULUik3GQb1BZWzmN8Yw84anCZfoVGrbcWFFYK8oTJyddjzjfYfnqMyUW21",
  "key19": "2iFxg1USGk6b9QA676vybq2paf6WEf3CfX1h6by9qBSaDFsYCbGTChQnytTQaqe6bgmv5uxAxKkzsZrWAnZqwgrV",
  "key20": "124GYMRKNwzw9ANLBZQhH5Mmx7uf1BFbU2dJjTo2iPXtpBkEoZbCfoZWyQyyYRPjMNMRbppEmMyXSkfGVhuJskxt",
  "key21": "4h8AtSjuAfaEz5KZx2PK5i6Yz74c3aeiXH47NcC1fq3iYo4xtNd3zvQt6ukeYP6hx4TpL8BRo8Ld3qoVyXZQHbcY",
  "key22": "671PFmRzCuACxCf5Q13i5wtZFMBHRYv8R2RWnDrUxjQpxcGeHzwr1gVgzUY4ae5v6MDJCo7iEdw2GvYxYcdmSiLa",
  "key23": "4ZN8Nyexded6Hz1CDGjdbd6dBnrQKVn92AXTow76aRdCNP5tbGY8YznCMhwXHruahfv1qvh3jBbSwRngZtUjXg5G",
  "key24": "5bhzvXZRYXV2dGmcBcatfHGzdbZeGVCS8VFgFNjFK9WFPBeGhQN3J5CirD3MaDqRdVs9TKLJveK2A5sPGGndM9EC",
  "key25": "7uEPqEh2pxCUwn8YMMyq7z2kRtFGoLZEg17T9dWjxXGWYafEENzpRuBeHV5pCFQhEgqYnGZRS8wYJ6u98vxRq3e",
  "key26": "3BNAbe82AMdoT5AkcjDtpoCB6RNXHLFpEhgWAPSgdPydq3KS6QXEK1uZqFmPoWzytWtfkvufbpcRRz1aGAqpUgho",
  "key27": "5YDDHkpXkuuXeyTuxhv1kfGv7zvkoHfzCgQhAqj86SK7WKJXHre93omq2rRXzwA2gmJwL1EWWgQvdtRn52cxgWe8",
  "key28": "APogGn2nLWCWVmebYASeKtg97rPhGjirBdvva88Phu8sfjDhm57om1xjAL2q21QotsG2SMCBK136NQWfxiJbqjS",
  "key29": "3HQ2g9AndfjF9K25hfEQ4naAtwmt4tSeaNqHib9kBVwaf7Ac4EoJouqH19wGcproja7QeteoJ6agRN1kCHJTyoHA",
  "key30": "353VYATHh5gQPNtzymSMcsRSExsEhL71FHeHnyZhcxvrYhkTU4wnMsekGHiZFzSEAosStRPHL94qzvoZRNUt4Nny",
  "key31": "2QG4UZ4x2aayaF2dMEyZGMXjzDTqiJjGRpW2GgECtf2eG3bv2pYAiSDp3V4JBxbeheMeCNoDBwtH6o8Bc5Uw6Z4P",
  "key32": "4sSb94TeaJwjpK3dpU2vFrtjXn6VnWEkSRq1sji97kKHkzynnaqa5HDhWTvULUXLbQeEeNbugGohEaPbU25f8DGL",
  "key33": "4L8nh6gthLhaA3mABVXGkYjuPKnySY2TrvWcZz5UYrfrjiHwErkNUAoKLVkiccZbt3TdJXrLeSSaUn2e88VE1Ppz",
  "key34": "4yj6QzKBJcrhSgLdLHXgRaHfhC3HRseFoHPEYD7CUFM9ExVGAGobJjnZvLepvqDRFtJrExDuxR5wRWX3Pq1UT5Tq",
  "key35": "Dqz5eQG9UtFHFm4xJUPrPx4zCENfesy8AYtDaj2TdktcyWZpmb1WpTvCcbuTX1VP3ddMCNaNNoz8d5eivPTooTb",
  "key36": "2oW2JLqbUUJRZNE2Fvk7zo8DLydtMswqdraH47MWwGFoZou53RNETJxsCmPxYrQvW26siKqbnsoTpSmDNZKW1Ug6",
  "key37": "4jMARAk8mrrTQEEU3MiyihfLkEeGFvXoYGqmm2gVdnBj9meeQQZykEMnkQGU97Goj3YUCe2aa3gTAgQsuiUfUvEX",
  "key38": "4q8oMuybTQxnJuYpSZw2jsxp8PSLvtWxuaGxHAG5Jw2gfZtC6Q7G7YBVo1s35RCdRn2Bz6u6yK6ULK7bdcp8uq1y",
  "key39": "51tcaznBqGyE98UrjonBB9wHgFXt2QQ9b26aYpcfaaMdeRhEYz5BWLoXoZqyC3GfruL5ue4t2qhSNATzsBsX1wQr",
  "key40": "2sPKHe5veBKvqj4AytFBiF7c9RTQ2a5DiH5o5GAgR6whekfCRJwZJoBSGZFbAGA5ZAMGy5uX66egiH966nhH5cQ4",
  "key41": "5sJknVgEh4NBHy4Y3YviZRRmudhQtY5t7ZZjafNRfdNaHiqikSPvX6MKv2stk34RCFsRncJa59D1ViVYVJKNuKoh",
  "key42": "4R45hQiS3HJapyG33dR1ga62iZdrKmjK5LCHW8HVL51KcEhf7tJRcSCDGbdzuuusPSYp1U8xLpAqp8pcCrTijQTp",
  "key43": "3jSJrHX48DM4MycJgwhn8xF391CJvBDMWgfzRAmFvQMpv3uS4aGJVLRbSZMkofW5JwAvuk153nbESzwV4vm48wNY",
  "key44": "5mSVVo7tdA4ZYDgiUvLd6zJHz8T7iVzU1Dq828CW8AQK6FUrquUGWzPL82Rz3eSaunYYjJqWQtjfn5mtbFQsYX4k",
  "key45": "4iu14YRmMV3Z9kWcLZsWjJxFSAfszFLW5WHKFYAAh7RXi9phY9edYXJDPDRJTbqwnLLvrix4zJCH1ZGbqcnaqPNr",
  "key46": "4kyT2nVb1c2JHsg6x6kXFk2U1XgdRyUb6FnKNvmLBBDpLHuS8FZHBYMQhTbWAibC3GJq6umduoGS83eiTGmJm9Di",
  "key47": "2Ps6NmhR8mrhJLgFHVn32qtTbdGf7TnH6CkFGYrSwsii8T3s26uPhauVgnFS3CkywF7DGjmeD9FoQzzTFn8LSuMw"
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
