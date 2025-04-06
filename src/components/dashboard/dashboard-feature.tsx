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
    "3CNWZEeYDZu6s8NfM6Cm4btr7dQasUQ3TbiYkDMH1JmmyzpbK4kQmBLrj2bEDkhVrwtUo61S4ATWKyzdWiNCBgiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4azNzuSZwnhf4BBmRd6vMNUELTdxU4dccMKCidxCu2TRKYKPJnwMEgMW7hdAvnXQmhRFXgVa2cZyHWH5LyzsjMds",
  "key1": "5G4TpCYxwwksN6rxY6r3qwwTiTxzPdRc1md634GVvCWgksNBGi4VcuvG9nQbvwQTiJU7FNb6C4T1A17nmoS3MUKf",
  "key2": "5co2nD6PpAHRniRTUYB6LeKXQNzdeyHMKkLz9zQYgjAn8VnYGymQVo82KGcYb5Xvm1XAy6JvZjHVFmqswxSe8jG",
  "key3": "23bq4KFnCdmfee7CLsqejJYp1XSKLbZknYfhLQ7KXThPLHkD53kDw2YvAM9Qh6TuuCXqSrbRn5yHKLm7AYk8DzXq",
  "key4": "2kEBYomC4hmfL8hYiisYrThG8eeTJn6PwqNz57KNyEH4zfiicMCVPWifW5iZ77cUyhzfSfe9U2LLJoMdjDavPpgS",
  "key5": "235UTPW9UR3DJWY4V5qRdWkApScn5gCGV7MzbzAFuXdorC4MCT7JjbBYJDzMFV7iS2ucGMSeoxqQMy1zjEziRSYj",
  "key6": "3NZjtS6c1BzkCpCh2rPTKhgJm5MAsfp8r2FiBVsVMEsLavVdWACEuEEWx2LnrxSgAhFXaaXbtL6eLRRigPZRdUBF",
  "key7": "3k8VZs8oRkqJ237zfkXmeqLZsLquHCBhxLPuHGZDDzGXUxid6akDFST191UxAGn4ZfEEq7h57JzQ4G4GKHzcbDTq",
  "key8": "a5vGgUjBGKKgdrr2bytN4xhJt7pxg9D5QfFh5vwUs9XqWCGiAYhFkwNvpeTj3wGEnxZoKfcJYTNffMhnbAseHj6",
  "key9": "5si7uS9VsCsAmbxF1S1qT6gnzVycFPmHMvQM96KWdTSVWVJfuJF6YsXPAREeSi1kc4sXwDEeFhCqSZkJvjJ7ckLn",
  "key10": "5e9ZkEFks4A33LpughyfAJCQxd8EpfqjFL4vXHpiLzUZy7HzPrfSnw1og6zbMSWwe2GmwkPKAafRa1ATKr9YtwKX",
  "key11": "5pzu2NNByMiedkLQAG6eks1WbLbmMCedu4ABBfMe1N2SPXVaMVCxJr9bA3Dvb9TtDP4VtQ4ArLsUESqMee2onhAi",
  "key12": "2wWjr6cphwwviGy7i6JZvmnL4dZawAVaVJCHZf6Wp3TRXYnH9pWVCVMXrucR5P8ySj7GBLAoXD4PjE9J1SGsGe2c",
  "key13": "4QbomJkx7BpDgHQCMwu1f2XuwynW44f1gUjssVz6JfumwuZjcFUbMq8aXqALSTtuYig42y9MYZ9UGKjtr2UTfk8T",
  "key14": "kDeXn31ZjxJgXguRhCr8Wgs5hFE7YRXzc6MQj81q97oipdt5pJmzJushu1b57vqCnqszK4NVtaapnzkZyhAbbRy",
  "key15": "5apdyytiCrbJ3w3tGfqktVyYWzbFvLv1qhDoe36WigGM4TRXi2YFn9ZjZRBaw6eRjRZjvxaFyKUhi8TX3zPiV3V6",
  "key16": "4eaGyTBU9U9ekqSJKn6ajoFi73ku7B5ERLNA5e5Sd5aQQ6r1fWDzNAYpwZ9jVo7hGi8FQNFEmRKKLAXJpXkNU6z5",
  "key17": "3aXM9jwA9kWseAE1cDbSgpETPYSw5TU1tz3bdg7hGLBdTBhDUt58T1XbXWEgsAG2jHTwV4kvadYUqGf343W4mgJP",
  "key18": "3QVTpQqWFxaZSvBpMu4FnpkBf8QAk2tHdvNWKwbkvwoXB31deE5YBsJCiCTUY6zH99azFJvLXKS9UwwpF1VR4L5m",
  "key19": "2zoWk2mMJ5AnRJpTVNBuYomCLnLpXBDqasksWdUjz3ktmvduPPZsLeFf8HWgRmNtzwqqNYaZkiX67jabQZuvLsGy",
  "key20": "54oeYbzjJoaw3KBEm5xcxF95cQpYgeAA59oDPBJ83HX1HdGHY7o8hCu7Z1MKRtF7iS9ujxKcxqsvn5WEh7Re8mmd",
  "key21": "PVvHPmstF4GiVWppDadCcKZDmoPuZn1zZNSz9t4vWbgZnmCnvVJELYGv8kseRe7J8z7pWRdKjA8gnnjYsysk4CM",
  "key22": "4crPAF7auAs3hTT3Fq2GvWM3yw9ZJQq2vUv1iPSRZn8qZf2dQSm1fgQn6cW9Si4RbK1EpxYfC37dJaE9obF97gRV",
  "key23": "4GPRne66wQWoDw792GbHoVvazPKjifs7z8kaT88z5jTEoMBDpqJtqU32GzzPS3QThVDuzFqx6EG9jj5pbpeTkERA",
  "key24": "4HNBTDBARqFTfdo5Rhg59CWDqNNE9iKVSir8fyyEx8sWWnHQbPNoNshcPREJ8muSM2rKCgPXA5WVw7abMV9WSLYu",
  "key25": "2XdWhv49QsXEhXPF7GsnNRWUch2ytAjqRtku5kqXrmgkiJC86YtwmiQAGihWxQWh28nTP36BRpC9PVdUmxaPwF3p",
  "key26": "4bC4aXBP7NrgLZUEwpevfkA1FSrPDRDrNdV9k8BR83b1iDhCr7dfin2AszAbU7r83XgFh6XhpqyFCov8GwpurVWu",
  "key27": "4WBQsVJQnSJcvPDjznC2f6GbY6mWFyG98dpNFuFBrRv1Wi4aTQG9sprJjknbJsxkw7hrkfZ4fi7hqvPFEmwm5uuE",
  "key28": "5sesLcKGQ1pHq3pKSaHC2tust2sVndrAHqSXHqnA3WxnMgJ6FvsTwVAjcahDvpKEj4ZRxRukNwqs8ab6MjDNLR7y",
  "key29": "tjhGmnfcpH59kEHpPwpCd3jbm8KvYQGkn3Gi23Cn554iCyHLkBzurq7m36cniG5B56BGF9kHtQ8jY9Kwt4v2hCa",
  "key30": "5JfwyzHpgKCyohssV1V5SMnsdA4yfS5RknamNUL1rpQZ1x5Ymva39N91dufvhtJmNF2d6368928DS1JYypGow7y5",
  "key31": "3cZ8FtBuQtnbYNQCAHNWQQkELUhg8bku48uMibCcg1odsPF7bFzCiPDqKfyzvSuBAGXcmt4Auy2f32D3xU5oZfiM",
  "key32": "3uXpJaNyQDD2nuKkgKqUQ61M76EgbMB3bMd8QRS87mDmpS5iakSSgjSSc4CuPVZvXoKZRaj4xDjsUN8xChrAqZd7",
  "key33": "2fQ82cyTaiDURe7Wa23qtvB8mG8LpAj3rXmamMfHdqivcFj5z3kYZnob9QZcetYLJHAmJvnpoT17Lbs33HkCRt7i",
  "key34": "5uRiFfbSUzTDM8qrmkY3Ts9kAWjydyGAV6rtHR71fZ6AFVDVin5x8zwWcukhtmRJDfWHKruSnHK4chCsLmwUiAtF",
  "key35": "5wf8qShuBmz5JeC2rdQxnK4UdgvwY2uSwjR7aPNv6QeHApYkxiXMwwF2hit51zvCVyN4p7N37wqC7K8M2jSk5x9z",
  "key36": "577UMJ95jjtovgQ1wVEeTHsurgGiMAjodS1G8MQfeHZK4Z6gsSqwEZDJUXzUunGXf2dHgiWESiEqcjLkLN1Lq3Y8",
  "key37": "TDebHiDUumtEqkViLWbXh8VQNg9ibRUZP7W4w4MwF6wrQ6uvn2qvJuCh5cnKtnngzVYW3ZQpB2bvPXDtAGnH7Rc",
  "key38": "kMkaUZReXMk7RefkJAvf93L3VaSmEAYbeVz26KVgTdBd4HSt47Fa776Dktafv5sSPRcZ5MYRAER2EBSMMtMA9wx",
  "key39": "4fszuyyCUQaeJnLiSSmWd9GAvpmEsNfxuWbRZDns2JBx4mk3H3tekvEVNuRnjmSmYywANLznyCreUZW7guDkocBd",
  "key40": "2AoEHgfauhgoZN8kZisXJKi63hnMNXtWJDqEUye8aHDCwFtPHuZzcBEdnEnoZAZNqGo7aprHhqRLFN7AaWtp4A5r",
  "key41": "4XnW1pCfq4gpy9PisJjALbMyNkEJdNtzyPhASwWoM51g3hUnxRhX52oUEd5wVmYTd91PZ2bFw46SUgDfcgWQAUvu",
  "key42": "4wM2TKbBHKP9AbbCekDryRhzVF5eVokD66D3DHez9ENiBzWyiKSaWz26Ppd2gBp9Cg3iuq2J4cw9ubU3JB7YnJh8",
  "key43": "mXn2Ns6nagfM51aFmuDeNCRoDVBNTmzE6MnyARndKfuBoxUuLpvPUAhmxjKFdfS5mVGSLHV2GQyXv8Badbn97Ur",
  "key44": "5nF9aX1FaqWvucY6beuoKpsYFNCfRSSPFrAiRFgszrjEYrP6yAKXTJ2KCuyy9vTTSNMFapHWmtc3Ax8fsRTB6hZY",
  "key45": "2diesT83LJatpFF9pEHjbvatfHbZgAWHT4zFrYUQThtq6xxaeh834ibCqCDR9dDkXDL7qaWtf7LHPZQyBgBgeTxs",
  "key46": "3wNnNUaRhCekSu7FcWkJXxf1R2H5s8rWZfHxysmLDt6nidy3qM7yBenrASSMuLDsejdRmbxJx5yoDtr13G2LL6Fm"
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
