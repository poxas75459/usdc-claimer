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
    "4TQagsvqQCQAcLGFiHAVHwcTYe27dEUkmmBWf5YAxrnhYnRvBfifNTAL2cpa1FDAXjSNyvrCvq4KeCchGxK1QRTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzJVPx8DkBEfjVveU8vg8ykpPTBsbbyZSgKbdreFZao6HpMnFAcMkstjFg9r7TcRGeFoP5CPWp6HLyqNNJADHye",
  "key1": "RNB5ywo3Fh2nbwLHZUmwWbMJMAtq4Do67vA7uJUfY2TEzsXh9LTHCCS5UZkXvZefnsjiq2wMX1Rw2mdr5FzJrNL",
  "key2": "5hgcdKJ6de2z3Hy5DpA3wxcjNQT2hDr4Ytirjq7avnh84mTdK6ESZx5sH2FQ9DtT1FzJSMThtPaNxzcbwJwBrNqk",
  "key3": "5TR1CW58DHZ58CaxFdKnadGBnbAxQbaLaADxzC1jsHZmUndN9J6tF4Ss6cQJcgHyCGJXjFFezxSN6JPUwPrxpV9V",
  "key4": "3KwkWhQiyy8rtNVe9Ga4tMjEhQYT3yoqPCamr3CCvWRjC68MwWq4uWHKUp7NrKYK1kEJhwTxAsi4mtaEi8K1yt6j",
  "key5": "3HqoABeZLxFdQ1cHF6akEcByqjQNkyMA6FB3su34k32CvWAzSibiBqsxrwGGbkMgSfCnBFzh1wLjze7pzpvuHByf",
  "key6": "NF4FU9b7WmeS4J4Wv1ZF7kHb3dyq3Ws81WGRrzDM5dg7abowQiPtFoHuKgY67MaDT5EUmyDKMpb3Dvnp5dyTJpk",
  "key7": "5NtLyq7NVNv7nHKC78txPuhDJt8u7egnEWRFG4p8eiQNMTmNeq57U4gA4AQhFvNtLWAwBz3Vq3CXegxwvkxyk5mM",
  "key8": "rdDtF6EhUrgmbqAaqJNUbxMtUFUayAVtMGJBBmVtbvBuJJryHc8A8DBbFEwJoGoixuEeKUeA46Bxoy8CVmYhqvE",
  "key9": "4BrhzC6dHv39YUpDZ6tPncmy3GAvTHtNkcaKijz7DP3H9rkmKcxpKwnQWDEfuDSPx8yMNcWbwdVbRpXfCP27rCTo",
  "key10": "qH8oGgWFjYKFpCWWSNxPYRZLJsk6nzuoiRiuwJv7eS2doN84zheR2eYxjJGVDG8U6qxvQat1xAiGyDfmWcSNcSh",
  "key11": "5uw8nrRShGSRHQYsKNmJBNtFcHN7qH6erwcjXF6VxMWgJ6erQU3FvTcsVGYc4qHN4hGK8MFAN97SsZ3qFTM6cWKT",
  "key12": "5K58NYUhULnpnQBt9sAmQehhrRrsZUduqb1ky7nNz6Q1J6csmxdBgy6uyHWjKE1K63rSR9ebkKwTyeeQF1x5kdKV",
  "key13": "2i5WaadyiLSZ1iKH2g7V3U2KrZLvQ6HGC6WWUSWYXwhHodWi3Bb6tYCjjMLPwwLvTVYu2uNnpbkRCWZEcHmmYkkg",
  "key14": "VvXQAuspYJs6J2f7UXTSBR9vWH2wQkqsQ9XkHmUUkQLey5WYfWbmXz84QztML2kTryvw6zkSyqkuCPckUn8Qd6h",
  "key15": "2rHawbJK7VLbZzvuSt1BdSvsCXY745wUZst1XoHxWguGHxpSXu47XjK9WDRMfaKa6knQBQ6BofK3MfJnJmkTyDu9",
  "key16": "36sVoyaHHCuQgcBcbYBgn2e47y7B3x6v27pvH4TdHQkAsyzK8PTxgDoiWr7s8imWXNP4qzYA89vSto1j33jsGnqB",
  "key17": "5Rh5fXjqkTr4p8CJXKRbLWkYLpe6YLBykfYu1xWrQjvvCGvUzf7Dq3oXPNQAa364XRc4LN6FnkcGE9W7Pw97ufoz",
  "key18": "3BwBTHmHUGz6PuL1FotCGCUrTtu1Nk4WXgvtPC9yHsJgTcLVTUDRAtc82sWobB9vsBARA3DgehAty7TkJsaexaFH",
  "key19": "4gXT7sy2jrR4SvzDrxVPvCmiJsbtBM98FZgCyUim59gCwDuMayhkgHKWmiDHTLdLVQJmVdbw7nfY3cXS1YYHeHmj",
  "key20": "Dbo13NdxMwpXVJhKcZG4KBbdpzw3xSqtTx3RPwhM3pQRg1H6kNen32JX3Pjj9v8jCgPw7KFrVqVAq9Rv15ziymC",
  "key21": "tn1tQptvEFqqTK7N41iH6b7DwNNQMurFa3oDPxe42dp89cm45JQSdrrGr41b3NoujPYScVcUkxAGhMz6Zjc6NMn",
  "key22": "mqNfy9rgYki8tqGD7tUxbk3UApSKAsHDDipZgiKmGuLRsjYVXc2fmrCUzDzrTXPVnXLTrpSksVDtu367i3usq8Q",
  "key23": "3fdErHAAK5jAoksq6wFxaLeNb3sHiM4SgmEWVgqPepgwLVy5opiGYhfSv27eedx6QNi4waQYRDQLuxskBWos6tVo",
  "key24": "WX8Fp3CNCJc1JRJnQUkDKkPbR238tFchxSdW2qHs7ZdY8dHvVVx928ESbCrGW2B5PrcT3hN2uKzwxfTDx9KfZpM",
  "key25": "62mCsfPxEDzE1J3TuiX3nK3WYqu1DdiK4PXyF27iVizCKGTxB31qEtTw5HPuHa9RgZxdDKx1AtX8vWz3oKdJxkdG",
  "key26": "55qJnymJNRKmBApSJfNkUYzsWqEu1xaAzvMqowmB6PK1sA6cRXX56mKaX9R6srV1TuyuHiTgAnBUnEWGY7o4eQ71",
  "key27": "3csYGuDwu2L8VztGauwtbXBQXPb33xPcYGeKR4hiYMDEp6d87ozmhmm4SqJWBMfsha7my8nFe99VaKjRJH3PCVan",
  "key28": "29Yp5CfAtKAor6oyCGTS51UpDt3BoHawS44jjoMU4QAiuoAzySivFryThWe4Wqmxymf7RXFdGZREppgYgiomAnUW",
  "key29": "3bqQdDpZGcbo7g4ygSxDncQKcUkJFskJsADJfqVDjChwTe2ALkYKtvyXoqKugN1V5zt4E4j33k7b4ezKqAWPGQGJ",
  "key30": "JNAitE3HuUmyC43qsb6LQZnXQWj7Wdj5g39nHHW2Y54EbCNifua7khQsXdbLdjUqxkUesxLhhFC3woD9LxpAUV4",
  "key31": "2mcN5pjRRcvFuTat1wH9Es7DmmfbTdKJBnHEYXEQRp6KXxWVPYkadHEVU8KxGzC8V3ZRa1PweuMGBFqaWDfyFk25",
  "key32": "4kDQtJhHdX1svGFa9KrwzQ244SGBvkzrg8icv5LKGQGfF5731sY4ESFpgRMdYsGUEmsQJveut8xmagzaQFfhcfzw",
  "key33": "3DneNZKnUm9egWsnRfhnGSggnrC9t8XxkSwSnTYMyX8PirhehqX7QZBzuUzyFt9BPPQ4MnqLNWA1PUZ2HERjyVfR",
  "key34": "3vNzkZZ8A75owrp2KJKepcz9iVomhPz5n352fK8NRPASPSWbBaG5AfQjMV6gUKZEJv6HeyJe1txTHnf4VMjj6XwP",
  "key35": "2JAqWZ6McRbFihKo6kGXQmjkcPHUc8m5zUeF4tr2XDWtTLMXD8kQ8FTdXhXfnrfPFgonwCEXeixHbnB9MM6kJpdt",
  "key36": "hcyTZdrixYsissRDKxxvTJgyX3Fw1tS53UnfwFv4r1o5ZswdRidp78PjYCV8BQdKXjyNxZcUVdg8FeyETepQ6sc",
  "key37": "4UPQmheis8b6nTfZsLDVV7YmUq1TiHfE7M6wM6JBFX77C58kW8iBSCEs6NgU6o8rihxdtkrZK2fzXFDkMiRoF4YX",
  "key38": "5m6SVC4m7CTj6jJg1v1XD2kcWNWMVf2eq19UC2ji8RH5C3QBLLLDzm1CDaDKJ1WDiG9wh3u9zgrfzBBddhNZD3Ei"
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
