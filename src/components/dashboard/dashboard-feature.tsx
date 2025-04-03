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
    "5ik5sQctvjKsH3MasBbpXi3JQnKBQB2qGc1PmZNuKQkv85KKQAdrgCPASJhbLGSv71tYND1DNSxJ8p6QpnsEoC2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zmT4fW8CjXZkoVJ25za4PQXTS7fmG21M9pryZmfeiSyyWXj3VPGTRs8ftZmZkraqu9Jpw4Wky3Rhh9C9AQ9ViFh",
  "key1": "4HrQJhwW9p3Db89XeYyfLV7xp8p7R7ncqfZS8r7T2BRiWV3wHkmqFc2aqFceBXFaE5vCHznFH9jHLzoqCXYt4Afc",
  "key2": "4ndgAui7DuB9bENoJr5sAtGqxG3B9BRwn57ZGxs5HPKKFNPyh3ZseP7ri6G6KBaT799eQ1YieY8ToVXMCsYxVyQ6",
  "key3": "1mpubEtsJV82bmTjy5ZdKWV8mnzNxJY2aZUmNKdrkzZ2YLrt2FUjsbwg4k9hY5au68hBhGq4br4W3gb6Pp5AkwV",
  "key4": "2zmErkj8VpaHUdeFjbyLjPxrGQ3Cyt1opcSN4CZxM3ny36Rmuhj8MCrtpDjEi9JbRcNvjGYvuUjALXWA5QkY3MBy",
  "key5": "KgFq66PeQZ75gXdj5o8JBvUCfhBCJ9dTMF8dxb24ahNEHG1xT1ezADSsroUhT6BnjcLCx136yj1QtmSfNNYnvsY",
  "key6": "25qse1QgxHd7psnpzZgHHR9EhWchagxCsFnMjtuxheoctnGB7g754DBF1jmTJa6a8BHmvEbAy9qthJMxBFinzXjK",
  "key7": "5L3ZmLVaXW6CH35LLKh7sY2BghwznmZ1KMWi3fHbvHPNmiMubqY6ELdL3NyhWmk5EejEaNFxgYHA7u7JB59QrVjP",
  "key8": "5D7Wt1p2AaWLzutPCiRwzRmrGW597ufssypHPrR3Xrz7GMgmtf5agPU2Ufphuhydz3t2aocyxfAAdQqLssxJzw7K",
  "key9": "5fJW7HCuQ3CNemycqjmVhJq8wo2kdRzFrujzvdz6Brb217Jh1JGjBw1SSvnjy8ZmNqCpA8GVaqwDxrvtU91CzCB",
  "key10": "etzfJqyB39aCNJjRZnL1XKBjtgr61vCoryByLBWee3Up7eRscCEoG7xzzd8uy3nei4WQuXTkbQ8qnXtfbKfyCxT",
  "key11": "UF8WYEq938uGTLz7n3Ze7V4EdcTdrJLQeqvLwYoJ5TRbEN5djnr9B5c65ZbQScFpZWSzXESBGR1iKkXvZE4JWrv",
  "key12": "2xEPLNd4PutCgnZ4x941bqbMe3AF1M8iLpsHyt5rCSNJUWPk8fi6PWqQ2a2FAAEZpbgNvJMxTHQWwSdBzJFBGEgL",
  "key13": "4fUdEXUK7vdDEsFWbDo23ieg1XiEjr4pnbF67BeC6nnWrJH4SNfHx9oeFBSbXncsEPAjj3RRjYWwcw2pEFxiaAWG",
  "key14": "bJuWEkVXa7wAhgw2Xf58dPLJ4Xz3oVRboXYDAaxYofmqcSLRvKC8Xtsrn9VbnwoAjE9SeFyCJ6kMu9g18XJviiJ",
  "key15": "5teMDkWYfcmLEbZu6JE5qcE1SnF8mvN8pvFr4JJrzySgrau9guXhRCVykGRQ1xvbqNGSwS85bSA5BW6JFFijdKAd",
  "key16": "Gdo2d2Tv8nYxbgWjaFmrqsVftgUjRGM5dr8vgBzysxwQgTxqQ4HJfqTDG5mVZgGEPQYxfJ91vhNqXAgY8F5fFEs",
  "key17": "2nFEQVB2Pjj9ds3JktDD6b2MtDoUcStX3uwwWdrup5bqg6MA35hBLQAxoUJdyST6eEfm4dtyHUHsqtqoJ5oayanS",
  "key18": "4BRmcUDbX1ib1MeajaeGUBG2yRpNjTciXUo56scZ6tTByegxnuvkbT72AxQshNCpwWuUV4h456HnjmofoMyygvyz",
  "key19": "3h8pbhDyxneipCSppb7irZnXqhUaDN1Ed5Eo7JaRbsrcNRJaangdqg3FDgsPiJRfhCb7unLsMXrhyzm1hJmnNZT3",
  "key20": "3aMKapbHpQYjNVoDNtWCBk4gSE6i63TNnqJfRMRPhbM9sBm4W1dRVTPGQfAE6doPtkSQF4PdRPJaUAZs5wiFB8yz",
  "key21": "5Xga376C67gEPkmCoKnnL2g2CBLumLj5Shb6KxHFgBPVmUaTMM2Yhky3jLXSXCWt7FbrVGucHkziGAo56Yt3keHo",
  "key22": "2ACFVEB6je14vUq8ASs6JAkJ2JVSZjujkF1vnQS8eshrbkpFFhpanmkXdz5PuurJWp3rxSeu4YeNGeEyr9Vzketg",
  "key23": "2Va6wqxL1o4qvngKa9jR4AQHkDMgShKENs62ug3ogwCbmbRh1xrnJmRTXchotzpVyjW1C7NtVUVdeP8iFqBn3Lvw",
  "key24": "54eVhgnHcL62qrioRrGVxtyX1xANx8Sq1SfSmEFqC2e7dRXXYfgEz5YmysSHc1EDeuCuFSQtQPra59iepEakrWYM",
  "key25": "2vTkddXNCdB2caaZZwrek84zsXX2P4JkgiTA7R9rRsMW8SFwvsLYkQE4oogb6WarW74it2Kfc5q2CwFvYF2zvpBo",
  "key26": "56LSQx99Erqnpx1UH6btma6RE8WwEZLicGQ4TxrrGLpLwpiwxdo8aZbDKNQw3yaiaL9J9xQE9XBAavkKz6wUSo3b",
  "key27": "f6SFaFUcf8a8iT23TwodeCX5eACMs2UkoeqWpsQ2fiYSpYHCj5tUgGgt8k9rdXEtLBQBymjE18ntctxrp6CspTV",
  "key28": "U6dZgtXkpqEYi7AkvAesK5QWYzPXzGvCetdHqGcRhu3SArS7Fe78c1rkXqtycS8r6UW5YsJQEFTJ5N2kuGuCn67",
  "key29": "33YZQCSGwbFafTqGX1cn7oZ7ituzaCcMN1wbbPABUahsHs59cdC1FgahFnvTpDHWxsvqeHNXakzVCYNtb2vZRGd7",
  "key30": "XokfzgngBdTpzUNxLhiQ1G94EdWB6ejeJy4vuW1dhuRHvHtyZNcQBqQyT2RUqFxhd7H9tKBhBKSt1Yk3Cq622ZY",
  "key31": "5YLjnXa8jPw4J1FfMZMiZRjqw86Kf1HvheNW1UKWQKdmoKyNWNpbnGj3JpoZkuU2V3XNgHTATE5BtKckUsZeeojA",
  "key32": "t4VnBXgnQW1euHuuj7RtXtBWT5Jwx4y6Wt81WVs5rGyuCVxm1TY7Kqy5zNJt1QDV9UcUhPeqToZUbKBVPuVbcfZ",
  "key33": "64igSpqpCBV6xz9gGHa22Rk2e4RqN2jAnsDPJnP7uqzFkuqjdK2GRatGyTAAGKa78bJY1UP7z4Kzt2ajifp3jFBw",
  "key34": "2Mui9YeVCxSYVYYi29vTCMwuw6wZcho2PmaiYe1XCArQZe4XXW3v59jgcrDoiTizzNnArVLqcwdJ6xYsDSdLZ3hR",
  "key35": "UQxdJkBRFKi8s4xWY2XQNF8fJ59EJD5KHdv5e1VnYfGSAWhBgCrvH9bYaJUmDLyUXjiRBLSz9YpA8w18EdzVpAd",
  "key36": "3fzpYyR5XuANTRVsjdnCS6PJQHfSPK86j6NqitQETSvxE72kvvf7muBypt5pkhrs8JjivgqHECdRALRfsPLmygpB",
  "key37": "2NeDr1kRjbLPvJZJuVmqBxgJhzJeCaCv4KWy6FvmPyL9VooGEMvrE7E5zrfUT8h1KNUoa2HVW4MrxpHXfHJ39AF5",
  "key38": "3skjM97AjwxQAxfguEPBN9tcRpTf3YhiSt6DLGoRvrxNgRzipK4ye9TveicS9JwYsnXm1PMbih9SK3zE8HLUBhaJ",
  "key39": "4RZS59oMwH7DLegotwBfbL6NNhnF8dUwvGfpduveYSijWeaHXckhm6hQeLJYcLVj15g2eq5SFvbcfUnvF2RCJNwN",
  "key40": "fXRgEoANtp99gNQMMrS3beyPN1H1oxJENSC2LNRBmJ1gnRGeEfzPHuf4BeTA8TwNZT55VQnUp4D1BRHc7DW4jwN",
  "key41": "66YEoMcZCzA8NWWQbvjDoXWkQzXR6WQFAgoay9Pw1Ln71vPNSLmkMki7GsRLcLcXqPwHYUVSHLWzi8Ggp9gFU1wV",
  "key42": "5FngH8GeLPgFZsPERFBLPRwDomSJeJ8tyhBVTwxP6wu7VGA8TwCCv72bCccYUQkaUdipVX8zqd6WmBPpRmNKWxAD",
  "key43": "2gGg5Vphyuzq4vKDUdXh1udXLCbDwwPnKtbsQww6hd5g683gdeVPbgbgzZ7NU7WfCPL5JEPo5nEFpJm4yCGJ6iVo",
  "key44": "2155LJ6hYqk8kChuyx5bkVDMpndaXguJJXwnoy5AoECuf9QgJEXUcqT8mu3D6QMVouDFyNcs3eVgVPX7NQvf2pzb",
  "key45": "5T5cany2fq3A83Lakd5FK2YFnUhamU1hq4BXGXyMsL3g8F39jp4SVcP3tp6yUiiHzLSQqkrK7M7wmAYxP7Kguf3a",
  "key46": "5Rog3PWVvTZ7JMd2cfcCu22K3jgRpyCY7kmfSNTLZbRMcuC9zoQTFNoh8t7zf3TtPFEJyz5xeeJiD8HCtocF4KxL",
  "key47": "538K3UCtixrNYGjiS9V2vSL7DTLidBSbGsFNimTX5Wm5GUkgCBRdUX1bVXQ6TBQPwEcvaikeMoxmAH7nH6GxqrCj",
  "key48": "4ZwcLomXbuH2stndoLhjvZR43GyjtqhankhqGKb9zVQEvHFjT5XbwEMce4Dhb3mvDCfHTNHzU1cQ28Fs6ncF2VZg"
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
