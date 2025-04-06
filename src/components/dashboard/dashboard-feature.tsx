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
    "5J7sYKFawYas1D6okn6SRMrmbQ21oRgPmpRjJVffVBkLsGsHnQPBYEtRF7Q2AsXS1PDqJ2gcENrciKdr1pUaRJeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7cxv9vR6RzfDMb5QAk827WkULiKFZQV9EcVpM8ZCgCftGi1FTtFBnsYVTFboGD6RHQcvmkcQdJzKG3YVkqVdFM",
  "key1": "3XsAagiDuRWD3m28h6GivknJDX7XbHvjmNfrBxQRHXj6ARCxeXReZjAjR4YMR9isDXwqc49n939JReT9FwBqfdTe",
  "key2": "4zUSc49VJ8naVAfaM4Z2d6cHrzUAe4Hkwt2QHqDQn5XQP9WEznpcmkFdxe6wgPW8Zky8dyaQksFZ3hj5hJLqETnt",
  "key3": "4u3hdrF4m1UcLMT87ywnW8pz3Q2esxeG6q4onCmGQNhpuvbnU8tU6ECtT3MqYiGfAGiVGRBtew1kzXUr8TdgTt2o",
  "key4": "abTviCyNzWY369T69MpnmAME24FRu8VdzrK9LMGQsWFhDeTvNoa6QyRVc933SytxobpvANgGnTDH4WdUYm9zo6H",
  "key5": "2e6Ltor5Zejd2GgVxqry8133g2qqUXT2fwz7xLcswqswi4gEvhMYNzBW7V6Wb34V9tL9X8y8aLCpi8gqkdT6PGo3",
  "key6": "2m39FNovtCKrGo2oNMNJ7FkvzDJZhYcz377JCd3Du5f9BFoLEx29139TCeELjZcpotrK3M3V2F3zczEX8jaTX1Vc",
  "key7": "5727kwmkpy5RAokWwt5HuYCtmmkgW3W2XPoeq9SXaoFnUxw4HPMdnQmq3YyXaSxi25HQHypvdkU4uTcxDH6yiEpy",
  "key8": "33tzrX76TXy5nGazckVDYxXhQbQCmAiTsCMe3vdTytNWDwmcYUGZSpJhu7GqNyEKVqDe9G9XW1nivZZ1MzfhBNjx",
  "key9": "3biLA3pPC1HRjaWtfUFSGwyRUbJ7TBUQp2Bg6XCAvqZ8Txb8v2jVqHmfknLjC74U86EmAK9N6x15M7t4Z7A9qUUA",
  "key10": "4UMEKHzqmerVqJytfg4EjbiGeSsMTyWF6DxvLPW8kti8RNxAKVTEtvCyg37r65Z9KMkdqk6ax3mEBfBbC3P9bR6q",
  "key11": "fmnjri7ziFm6BKwVerunqnHGMX2nFSaZDRTzcSAivj52ypFgGVLGoFsU967AY8MCjpSgq9fGSiQSSfsDasv7QhC",
  "key12": "22Xn8tHTykyPZ8RskmoRGBesmUiCsrtpaPvK5NkzjTZBhhiSY263FYLZ8tMXaWykaALNrCbSsZ3vz5FXGnhEM5EX",
  "key13": "5pw8wjmMUcxPEX1UVdoKPb3fyC9DUxjBxRN6qqRa8BbFvqJaXW1T3su5Y9VufSfYhtMHWaGCYDznZFXTWXyectUj",
  "key14": "3vAJsuv9fcBKFYwrDKAVUETM7R33kvHivEQMgG3ieGHo3gdHqdogbx81Vdeq6nC3KedyrqJYfkwsP47LZ3kSoN8Y",
  "key15": "4Tv6CStqrcdPo5eBQBTppp7YZtCpyuPPSMuZNftcdtHvg4avNCgWfL5VdhRmjtywE8i5fFde6FK36N6hdchirHvN",
  "key16": "5zpMn6Fa1DyjbeEYg1o5MRcAES1bVddJshEmwZSnYWw6opACmE3aWZ1UyrjEvfnC3EH3aGXYMTpmZS846TM5y83Y",
  "key17": "61v64RVXLXYRgxL9YX6AN3N3rT5EkWveM9G1YiMGJWAinSZe4PpRrmtWg3PXtrWP2sA44QVCPmK9rdMXAVc59tcM",
  "key18": "3EZszpuC729UzBxkzDYH9Z9UXeqp2hKetvrCwSbRfyEnPFMuvXJQc15Ec6aHxPmGmVwnnKCMaQ974BW5Gb5BCo4N",
  "key19": "cEezTAMeNJacaxywmTd9eLj8wfPYxouBrVxPf6KAQa1MUBiDTd6V31hZBoArvRg99WWD88u8YTtXdf7ZxSi3vPk",
  "key20": "4DkUKJJ2L9Pa64MJkXrjruHFZy5UutFqig6ET5gnjxs5SE1cj7jbhFBPHaEKrW4XjyVc22EU2ojziRuxzouqmFUi",
  "key21": "2f9fwqhQeiKps7E7gezpmFfhSMQuf7QSahEGYCc8XrTDx51ukXfM5znhWkcXk38A18KW6xEwiupfSdJAVRPD6TEu",
  "key22": "2BAKfP9mk2NE8nxGo8GmbMp4vErjWBJQp5gBcQqXNK4TWgyCzoRzY89BAUaKnX9KLifNiXYpfgqZJ7vUCV6X6SsY",
  "key23": "3tfY2TeTDJwEQ6YJa4CPMUX3sJzkGrNg76ZnJUx3MUQAztNMetmeehVdnD69x3Gi5Q6jqCjetTea3XEeaQaJoqm",
  "key24": "5k5h2YfDPiLNzpy9Sy8BDEnuekyL5jL2UDQAL3XWN8RwWq7q97NPevdUHdn49MUHd1gdpn3rBxiTpojFtZrVJCtF",
  "key25": "5gdndzbF4RaxXSzAvvhfwwPqhLa1RPh17E8JpA2rCRNYq9wmkLy1DzFBsGQmemCoC7Lk1EdZEjoQBPhQuzBe66D1",
  "key26": "27hG7uKYWhVWuERJZruDVy8mGiJhQFFtH8PjV5CAbMJ49eJpW7vBSGBSUFC6yXt6EsguPWUB2LrmnzhU91EZDzXW",
  "key27": "3YunYCBE9k8RWPGx6gkvs37hNkokWdHHrwzXFcDiAWXvqA1WYcYHzMUnX2v5JnLmJzKht7KgYTQXPnapY3fPkqD3",
  "key28": "4YeC8QJMhem48kPAkNL72vSV3rwHsqmd6t1ZrMjmoLsZixxkSPcBHd7XqcZz3sDJi5s6c6DE5DKzCeMZsRpXBqAR",
  "key29": "5RGkXfZSjA2KNFddNWoykyZE5oBQWgrzjftJ5yLfMhyeTkFsmLsNzGPFTgSN5FF45ZjzsGkCmGi1ZoeuHRMXhbHY",
  "key30": "ErSTE2D7HkUooQv3176mnTodhXpNMGYuuQspMNqCtcxdCVtMwde34nxY35TgjwSrBB2Xr355ahobjiZiuAeVoNG",
  "key31": "2Ykx6e5DVQ5GkQdMNhtgU9BHyEUvdRps3QLcMsCBWJzXxtAKMNKLji7EHiUhfySUj23sW9NnmEjnTnPd2VseJiQC",
  "key32": "4yVbREMygiLb9hFxJEZZY4CZMMDoYpDvDYgnHghA9DNubzmjRJMdsn22jzNJJUzt58WgT1qkU99yE5avUXpdg9Ly",
  "key33": "3rwKnNfaantBSyo1RjnFxQKrHGBu7M8EqU4sLe9LfEZc6rvcWW4HXafkPAS18vjjj1m5FKitfCYEe4C5B46LAvdw",
  "key34": "59dEDepkmJWbhBzY6NBoKhxWPoUNo1T9DwWM7BbDYdgMdF1qkDUKpRqgP4Aux27Ze9RqLbtbXf8asoNSG8A51ZMF",
  "key35": "43qaFkekEiU3vEiWTV6q2mS47YzTMHP8Waqve7UxW531qR65Y93LPypk9NcPaDsqAjQcfQyVLCangFANAN62o2Cu",
  "key36": "2B9Am31jPeHXsi1zvEyN9oKaHuHpi8aSr3oWLeBMyAnXbHuWn3Xc8CHRfqMNAGwBpvdq8p3bpY1BC5nyUesj5BBk",
  "key37": "4632sNmvnAF2yKQF4LhM2cLvAegpKb7cziBkuHkWaXuZsYx5VN4PL2AYp3iKMwBWGAGu3EppSTinYBRsW5eaD29",
  "key38": "5KdMH4tb8VWRyqCjRVBs2wpd8RfNsv4aVqXZfyfqVq6qTzEzzw4m11evXDrdhsHAkA3xVkKLJLLjWpUkHtSBmtDY",
  "key39": "3aoG4mEdpnck4y33hoXoeHagQGrmbbaRuvH3QPKy1TPVkCN5RTv5WKTXbwi3eRgqWp3ojoBiNerbEqG5HtJ4NLFg",
  "key40": "2jDWykP2aXiCAS6LV6AXi61LuXLu55xbRzpTgwPb1C92tyqH8ZoQr9vSV3wcSNf85akpnUsUQ4dJtQyTMs1hu8qf",
  "key41": "vVcuy66PbrvLCcsrKhtA7Lqn34B7CGtmVvwgL4yiREJCvvthTHBqQYfDbsXp5fGMbCoqiL9x4oa3i87ZnSfL14j",
  "key42": "5AmZ2RGziptnMiFn82nSQvnteUjjr8xSZcU5zkpMdR1EsmvkaAV7GbGxgwPEhNeoUdW6fH6tU29i5CDZpXJMUiYz",
  "key43": "5puPbJkR3eDmEQ6U8CmNAiso37moTSZwsv7ae7uQnHb5KGuTTBcJB5VBw9ipAf3Sask6W7uGbw15XPLgkXfiP7FC",
  "key44": "5aJq94tKQU8tn9NHVuzPyaFx8GeQxqA6iMq1xaeoMPLdndzeiFpoo4eAzDutGjGQydpKLro9pVFm45k49Vnk99JG",
  "key45": "21gJDFnNFbhyBuJKETD3BqoCsBviysZ6a7m7PmZahwVmZKqx7Tf395PmrDQS4rLqJ53ejB8ffcgG4TmCxYFhtTmB"
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
