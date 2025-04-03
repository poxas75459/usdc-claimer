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
    "4t9AEKJWWMJoz9he5NGFJzBU8hujZp2a1XY9KRkV6tdhomkeD2MYpwT4ry6WQqS4m4VeXik1zhDeabMGuTAaDtzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gd476LWbmcRxspH1AvfJ5UFCVJsLQWym2hef1YvtbuJCcnkADBSTcBGk4mu5T3Rgj7bWPnGgvM5bdr7fj1FPHfd",
  "key1": "1Y6VF3PkHisjnHCZVw2pbtdmTf8TAhdptvsGL8d8iDUnFohmp8xEx8LWvvGVw6SCagn4KJDm5EYJPAGD3F9M43X",
  "key2": "4BV231QFzGk7A49mMyxVqRqFTGCpfQHwND3yviFqHjZF3P2f4d5owcpAqK45EprytE3PKpgL9jtPKpk1fCKFTaqv",
  "key3": "3XSpbYa6dgdtedqDRshKYhAwYzHmcYhNZnA5euvhv5rsE9So5KGdmQDcXKCf8TN6wgfrsTzzGKnsXdGY6ep8ukrc",
  "key4": "5J44SaBJd2L7GPFwpZiziD5fh6N967NwFdAiiWFLeThHLXNEXDMR7L7z3CcMXKY7PG8vZ7JL1K7CQFUpppKhBi3X",
  "key5": "2wzHyHvERjwNCJPHAuQmbmkLmnp4Yiooyo7tQhyW315uM1zV3mufS3DZH626cHc1aeD4xrCb3N5DkHR9wYLweWgx",
  "key6": "5L9QvRoJdwUBZwhoT1wo1XGzhFybGYGNshbjr3CRueNdbNHWScqRqSVqtS8bNim6VGyV7i1DbcC6JuUg6jaJ5641",
  "key7": "2WkYtiTC8ZjAFtmC6VbkpmZKD9havmBSw4ccSgKfSFQ8HwwTkLAGb7t2qpoZ35GscUmRrzP9gfhLwSkmTqipLms3",
  "key8": "5PRRtwpsCm7KZAcaoA51vyykPMSqg3F4L7ktaTUeuqBpv1EevZ3Hb1b2BoEXF9yMq9tPWdtBzQfykmEiYapBUvQo",
  "key9": "5BEqbB7av1UdL1sQgFLdimBC7ddSvBDER5pV3ANWgtaYT34b6DYFfpGjSkc6W44jykEaffmwhi8sYJzjFYS4pvXJ",
  "key10": "4nBcbG5u15jfEGJCc5BuPSYwTpTMhhnf5USJ4WPUt9LAjKVVYwyMPm1X2RzsgWGSeUJdStsbpcQsFyvPLvE7MJuR",
  "key11": "3jv6rFu5pwaUbgoXweGWST9cKxtMFpTpqANwKkTTGxyjZ8Wm77Z4ZvutGi8gioPmW3ZTpMWoPCzt58E32Jxr8Zj7",
  "key12": "3Cg94Fw8wkefCaGY726nKjpz4a1a1TfeDUU74vX2gc17y39dKth2uLyfGPvAFaV6FXTJbbUtmUCmRdGXyYDPAuqX",
  "key13": "238fHNQzhEZJrSJDLWoECUtPPn4roLejLMyqy6vMaqrtvdxAye3YzcWhw4w5sDE9cS2SR4rgYvZwxA5nCshyaLSK",
  "key14": "3YiNixSqxGrYWA8XcTetF7x2Q1LjHAfwuppp7mbDBPus6fnFKWwxmTYWxu7XfsAdKAqEw3bfAYQrfaWLaHShZ534",
  "key15": "2KAApLf7KAe2RVg89c8Px6WPEEGur5fkCyudH7CoqLz5p4UxYMCM2VgLgSNPtSCYNtjR3Tr89ZQu33gofcG8b81X",
  "key16": "4JgrMgHVbpD1cs2Nb4M69uqKX524SzopnNKqmwZnCZR9t4RFMWSnYNN5dSzUWmk5h5eRo63zxotDhtUZtPXaRLnR",
  "key17": "hPR8ahUCrpEFFTEioA7WbiXJSYPxfZMYoANhHaBLHmwq19hjwoAXKbe9QRaYJGgNs7XuT6gPJzYFuNJUpzWM7Z2",
  "key18": "3NyrtdWDX11CNruA7tkWcrJtAWmsfx4CehqEk4tJhK6acUUmuGeN89gKfpmZNfXiQqyw5Tw9GHHHqKgRuXofncvq",
  "key19": "EgDbqAMuw7FQsVT7fao5G7YxgMzApfQTobeUKV4NkQqzcsRV8T62fGaXLvoisbKZ3NsC5hN3hiskf4finjNVUkj",
  "key20": "4zoRGMcsDXYKrHMsTqoVJ1yDjAwUY5bQ4MxgH7iFwejNq9j5wMAxw8wM2LY2Zx5feGF8fCvQXeL3FeNHfY6M9ACX",
  "key21": "2gNXtXxT3uprE4eTMsQD1g531xkx5dS2ZFuAvouS7fqvmfmUktuSLCcsMYQAB5KfvnoHdyqpY6xwjKGuyp4UyEry",
  "key22": "fAtrNKJmmmGiAcrQVcV6zWkCPqKTdn8HyCLramZ9NZvfTm1fhqmZpDYYedUVYW7TQztY5AZGkFoqNsVdT6pivX4",
  "key23": "2243mUpGHiYuycfNfoAgHRtfH8yMjBbhyNctPUx9aDRZEkuD4aQ2yxX3e48zAPqLdHudk5KKqJomN6bAKdnNSsxP",
  "key24": "3cy8ZRQcXwLbpKyWub6HYAdHaGjMzqSdHqb8SLStw9bm7zuvPTobQQWJkQGfFmSfpxikw9EYwS7xCtHYVrN7GzQp",
  "key25": "5rXFmrf5jJYa5RN6ETrrnagwFrtCU6bQxWLb9rsViMVXoXKrwNNvviMwBajGXw9CP3wo4tKxQuMmMtkgP2crn2r6",
  "key26": "4JjJv6pndLW4taAJq1ewrBXh1ATyRGyYP16hH5h3SrTop3xjgey5NiQZzs2kzkMR5ymzh2RuZB1RMCuW83JEBW1s",
  "key27": "4ARpWrkC5dDzi2JDopeKK6uB8ksXruQvFQ5DSL6GvUzSdWn4AY1Nx6WUa7LcVzKnh3TgpsBnTb1uXXjyvJLStDnP",
  "key28": "2ZYNfwHnq36ENhqriau6Cwa6kZG4YKV8Q69SH9foksqkmPpzAtXDcf7ibMQ263wdooim1jfrZyibEFZXBQVx7tTb",
  "key29": "3KzwfSbaJobG3Z3GEydwqTLhZyeEDJQRogPLMTqMGoWmBUJLcs53dWruzmFw2ZaXX4J8R2jARiafZiaduJoWDm7y",
  "key30": "4TqSb9riU2BPbSRP2XV1jDBAkEPQ1uVHww4FFimCmP9STG4fr4qnFLPrKiLsPjPXb8DhL95bNHiHnm2LjCPQSN6z",
  "key31": "4879Ax15C58bKE4EGURVW761gfdKSd33dW2BqwR3BDUoMg9Yi5MdbtNLUAq1BVPFZk6Kf58c1TnEo7fVc323x4sV",
  "key32": "2uLsoMMyt19hF8f4R194N67aQj638icntZtg8GPq1YbPFGJfRUivruxuouw4KiBmbNjNVRhz95dWXvTnST4g4JRA",
  "key33": "23D5p9HAskBDXWXe9PBCYp2od5L82G3s8ZqgRSsnveogkpYVzsbnzxSDNFR3g9wBNUAyAUNVoeDkMs37xsDKSEM6",
  "key34": "4nMfb8K5KHgbSMA5DgMhyUBtNgP8Spad1sZaz5c655vS1zerF1WxGt6f73f5T3xWiNhUCvb762rxa2pSBKs3pqrx",
  "key35": "2Wp86JKHSsxNzTbh9bqgcTqLmPgVm2M2Ni8on4SZVZe83oQuPe7ixRnv54Ko6gRSHccYw9YqdFBTNBfwQmNHU1Td",
  "key36": "2CUTC4Xi1nyTZN8nmnYwN5QeLU3CcdcVaW5yGFWz7DjTwzMSSBG4cbTp1tYB3RsMnQq8EuVqwKroarUkFSwu2udD",
  "key37": "5GTqc61hwfRc5EEPEUC2fdQ6JThjeBGSAdrXHTkcor4yP3JmKvXZjv5WxpBWjk4k9CipEKM2PcPPdmf3zLQXfyLM",
  "key38": "36wrkSReW8g9CcjGoiGDwkUQRHQoTDmSHPPbpFvBNcQZ9311RRtkV1DZ5fBYepAkpVvq9Zx2Xewa5YyQRBcjyGaG",
  "key39": "67qBuejBwBjXqrXhF7T2sEn68pCggj81mzBsnTnp8Hy2iZKTACKRFsdzm596jvax6Ahe1nNsGorpziCFUQdLqmRb",
  "key40": "3QWcj86fGSHBZdeatLw4gyomnRfxUWMR6di8E78qgnsghUUkk5VS6krcGjXVemwhZSJLpKSNUpm9oG43oBUjRxSr",
  "key41": "4nKevUm84QQ2igGJE8mPJWd3LoUN9MwqTZmwBS6XyZZ9RVanXKAvfrKmqLYeosbUmiggFhXBj7mZvyiURRZXhcXg",
  "key42": "5phXaAXE3hJ1WaJ1mEGVE644huX8C3JQrnLw7qCqRprtXcqNSHJ1QJrAnxhMP7MM9Lwmbaoqi8GeMsGQkzMP7xoT",
  "key43": "3X5siAFowQrxDZtdsQzHMyAhegB69ixhBrLJrxAbwhgFKc4Qae6sYjnAsMNKYXnKyTBCr54LCZ46H9F4wqg8LSya",
  "key44": "EwKWmnsso8ociLSwNM8Dx7NfJUtgfJA8fjiqcNxjbyzSQx6Egcty5pcXrEUEDs1KZYMNzXq1uNd7hziF9sjKnV9",
  "key45": "27SURXctYgTAMqnKAANZ8Rq8t6MWjKnTG5cDG29FfP2QYcFpQyfjK1eF1oTer9em6EWc1YRv4koktVigKVC6jNqD"
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
