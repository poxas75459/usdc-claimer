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
    "28CXEqAmRwNRDRqDTz5ypvS1MSpTXqBBuUM9P7Honj9xfoz9Go2C6dDJtcaCgmmXzupFynA6YfWdhGcZm871o2xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcG984Nwyxzg15CmPqSmfE3zSDrQ1pzuBGAGpKZ88UWrHXfzGzcGqCFSrTzieaFYm9vA3WAnSUhbY4fYChoBzdq",
  "key1": "5kXFHRx1h3tYKmTm6a5nvGvbuz7VBuPm3GiEWwN9WZSmSzTVzRNh7XmG92S7hpM3hxk7uFq4Rjwns1oVhpFkZbCV",
  "key2": "4ivcwkjCHznS6hDDGDzR5ZtvhiYGc4A7s3iUAVmzpwWDVJHj85LwdSEvjf7vVEXq8uo24C3EqaPM3jhjR7BANzb7",
  "key3": "3Tu4fWimd5AdJaCRCk5iDkEtUc1pqST6ksWskRXb6Ax2SftDcHDsEG2GxNqqrHrX4kPpUUsWSbcK6qrRxW6UW4WS",
  "key4": "3PzuiCTbgWUPj3LswTLsdMfDkV9TpshxR8YxoJdKwTAH2hxEe6U85kM3mNVoPknX7WyniRojDRozpN44RLyfLw5W",
  "key5": "4M4K86TgzRSqfVkP9QYsgUeqqiyt7kA7HpkoJeCbZ59x4HQ3ovGeWzpPuxBVohd5WFesCR1ewKWFjC2MmG4ArLPg",
  "key6": "2ZCDG4tC8n76NaPRGaXPuQPPTWt4KLvGUpVqhJrjSiTSzXm6pmnhhweJFcMhRrRxApfMpKZ3Ym61NPUATKH71ewB",
  "key7": "5Q6ijFmuyLpwrMKUwHB2WzcHXhDDD87M3VLt6k4jHSvi3hV1eibcQ2A6sB7pW9xKmuuHew3J2D7fMV3rCaRJmWcW",
  "key8": "yNLs7xFY11133wbiEBVhZgDmhvFny9Y5L7ma1eckS6PETtNWS8bAvGQwe6UkWp8i7VhLeuMpotWQSNNUVPiv8tZ",
  "key9": "4DzGfuxGJDMa65YCY7hjjkztXZoj1T9XUgQcUNFncNtu6Hp5vz7yG5Nb8iqwnz6BvvvfB2xYDviqvuFtdQeq5CrC",
  "key10": "4hBVc4wjtbppNnReXVyYodugJ9sJB8VFxXCCbutTUE1ykAR8WAS5jEhH5AB9VSkCz48Pw2FESHHcdCKt3Pma7vWQ",
  "key11": "5VHNVCpH11jVfxawXDZHSVvuQM57hzWsQZ8YSsE4Y7sYxREa8ch6DJVY6ECky6Qkz6s6v7GF5nVSrbKwP4r24DbW",
  "key12": "xgapSgUBZqu2PjrPbDVTZ5fpw8ejgHfcuZLU1y1Z5QFAVCb1PuoYVWYtAHCHEdzWMEiYVy7DdviFFkEZdGspHHd",
  "key13": "5rX3PwxSA6WiFM3PnV6s4K7dtqjY6pLoRxxSuuYVkB4h8h9KdQj1XaUtsf4jLeWJYN6cJqsQpJm2RuyecKD797SZ",
  "key14": "3JQqd7Gqpn55yuXVrJmwtsEN5afAhu8Roku1vR2dkwAHzsEa2f5gQNrBj1sNciQdFScNzH9R2bt7FSiGhrhHprWD",
  "key15": "3ehMHVb2AtGCoyVBzjwTVsTMbmbXNXwD9n7iQ1NHXBoqnpqBpBPvCfD7kJqyV5hBDudoSFUyZjs8kPMzzH582qKR",
  "key16": "5TdN4o8k6jYA5HnuPFtF9g7NZ1LukXL8wAUXuHicfvdx3zP22SZVsMu3gVzyUmEtZzt1AaQgAwYJrcrKV1JD2Un1",
  "key17": "5Lsw23jtkccPW2H3wTeX14jWH9bZZM6qjHZVrxTX3kNV38VS9sdnhEWope5SNeg15xga6HWMeTf3v5A7g4t5k3AT",
  "key18": "jaCm7ttkorY9N3BUt1CmWUxm5CVSggzQ3fNJ6UNznBnRoAqi7CrbSNk5rerFwqxfi8vtZwVJ5pC3oFmnTGzuPZ2",
  "key19": "3SUBbbDAbjFXmNt8ZGjr8HWvsboLWSmNNpi1j1UmQG8NhrqK6dyzhBF4et6exQiEtSD3rYFWVKFfq4K1tP5zKKnZ",
  "key20": "ESFeQpHRzQQvt8m99SoVW7Dwk24kBCVCohSZvLqfAVGcpLr9zwW7L5iRPQyUQkrGqPmtuhKPvL8NFgNUPfGcCvN",
  "key21": "NBV9ikecyG4CujDfM5gnkJACsEJwurkMZA2HvWg21Fjv3rbQ8Dg8RTCcCpUuixUMqFZ1Xhuw6xg9U6B8qzfoo2R",
  "key22": "3pCNZN8YEQ3SFaaWrXe1c79TYFmHzfArUQBAnJMgvPNUUwRJQxeiQwyJWCiPqS2sKgugNNF4pxSLpfXCsUEKjLAM",
  "key23": "cLWs83Y9d57mUWnMT5jKPW4s8rWPcT1T72pPoKsvUNncwNV3Dnq4Q77RztEYhhKJinKDENzAgRA4yX3Sa9NGmc1",
  "key24": "5AqvNpWQCydhFvmvCu5xsy7h25xnGSTZBbgyMS5Guv8jQEBUk4YcU2C5HJH72HGYiCnEKibvEfYUpZa25R1wRkHN",
  "key25": "dNmXPWBb6dJ9q8udMZFRaoQeMdarTyVh7RLuFLMKqFFrzZjoxACEUs9fY3Ywcy8umQZtiM4vy84E3drqxFfTAzC",
  "key26": "1LezH32FmqYsAavKHtw134vTjGRziR6Kv6tmWbegHixiPwxTKu5oKgehhyWK1P9CukM5LVHGeuvz8bPkBWF5Dqi",
  "key27": "3LHV7yiZkrBviaZM71DXcpS6eHksSGeqRH5pvi1F2EDSbvZ7PnwzGSZmumF9vyLbC2axPaVP8cKxCokoM8qSL5ji",
  "key28": "4VDnHqg7vDHAGErpxsbdi1ZfDc6vqa2ee5DZtKPx3vmtcZzzkTrWUUeYp69jNDMRPyRVz4Y65A2757NvETLdiS5P",
  "key29": "4DJtQbRDCty2wgW5GmdtD74mmCWuAPcUhWe7S9ZcKKcXmgSWNfiHwK3GdYmTeohWvKcNPYVJASp72Ahbt1vGJotr",
  "key30": "3g2QejdLsYPFctqanUzKtfY7Z97zmqUnL3LVukNQHNFs3cZKnBm2Ux3kcAp9Fa4Gj1og3TH52aSEbdohitRzXoor",
  "key31": "4CifYVnTRkq6coqEXwEgPLenhP5h3A4ApsHnX9txCtNmsSBXRrkSdarf4Jzy513Uvofb2LU6TUVbuoDUJb1XtLWE",
  "key32": "3UYeDGH1PoBZi4NoAoa7FA1RVCpPtdC3VL9pkDb5EaXtjhxArvwN7Vzo9cQDERmTymMoJDercQqbjzMCjLDQr6VN",
  "key33": "4bCcwuNLaqZqkpK7Wvgb2M4jefoZnvsNGXhJgD2THALHFhf4wDQzdc2rLXRKR9iTfjR6drh5HXV7mnf5BSAncFgL",
  "key34": "YULnR2rdYLZtza8RacufUjsw6fPPEPggTYH9KvKg8LBrG95dWjUeRSpKt3Y6bG7Q48471GQudsFGWnNoPzqND9L",
  "key35": "2jAqfJByBySRnGQA9gtRCcGkYYeFmALUWQzqE83oBQb9twxEe8zs5KpAn6rE45V2C4ZEgwthDHkivF2bpfUoLDby",
  "key36": "4Zxqt6LLMJCQ2srrLUfskYLZjNMLRJMfK8dUB7eSXakwzqtMEG6JBBRaFq7WhkoHFu2pV1cv96o8yatQYZngGCB",
  "key37": "WAkhTBUsYhEXV1gqf2A8k2iWvqHsutnJBUFyis5qsW2FH4j6TKhprbdxwmwkp3mRvqt6WsE66AHTqJ2yE8rxvPo",
  "key38": "3gBNAh3M4GmYpP5oj7AVNXcghE9au9D43WWcXkLduKHuLxzYoGa1V3EyzD34WhaAgn3Bd9z6kXc5DbNHa89mTmov",
  "key39": "2dp1R87vrLd4MPchgJvwwumKA6QtVoMeHSryZrMVeAgGPFjHt25jg4tRb35crwcYCEwD7Ltqa4hv2KYymQB7xmpx",
  "key40": "5T94RshjxkgoU2kgaDmy5VCkTPejAyyxrtXZ86CVbDHDKpoDkDekLCqTtoS69utfRGpJryNnUUAsqFwYBk5hEvkC",
  "key41": "5cs8DGMNMc25y94wMdCzGzAFq4cwVnqMLViXjJvnzAUvpsZmJhxwPptgd6AxGzpfdcwy8zvJTVL3LDHWYGf525xJ",
  "key42": "3LrkHn1sAXZvkpeBhpgS7UtnqUVPSWX7Jiv54xRBs79VHUjZ3USyWJigtyz2rNf8VyKJq6Kp7ZPJvvsmTs85TxDM"
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
