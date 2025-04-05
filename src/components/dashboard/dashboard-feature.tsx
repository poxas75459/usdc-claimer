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
    "4io18a3bw4Vqv1MQBXsZCUq9YeZ9G6PkrsSWFAC79mTtLN3fJ8pF37P9s6Hphh1iXzreN2TpKsZHZmAXVVk1TwNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tpLvoYzAkRfC8jGdnf1FwsDoV5m73y1zAv3UB9ZjB7MxmUpXpxQgGZWQsPKSRDi8LqwdsexQQdjJFAmUXARNzwX",
  "key1": "5k6yDhJzfRtqk1LC286JhZNYQn74Dbz2uWiCyFJYFfemMfes41JZhNhgknPQi4WFwZFh8gw9VMpXCJUvHsTiXaft",
  "key2": "4io1XvR3DT4rEprS7pzbQkEv3McNXLQebtbaRuMJFwbawz2t6UiZtER8xbNt5XH1aRNCVBAt2xBgY2eGamed2SWs",
  "key3": "wLdeACjifZx6nQpa6HbZCc16rcQanDANKn3PFYsUnRML8YJaaJ7UV7YeSoSmEsyEFN7Fy1U7Aa6Mb5gz4xh6T9b",
  "key4": "3TqfpS6ueFBv6MBEVSerapXGMVZ7FaFDdtWqDiJ53D4fd37wLMzGxV5jghSyiGurDoKrUcmuregUkif1xG1R4M8H",
  "key5": "2En6pFJURBjpJrSbni74HJRPjV7kTn35UuwH3wem5HZHaKaoNftiNchZ6pqUkTDgFhA9ocmLggRnFamYZvKkHUV4",
  "key6": "5JfdV8wKomDFKyFgKNNRJGKYVomq1APjSGHxLttUxuzAteZtUfHz1yN4p3sgbZuv8PB23yZnk3e6xaTATZincftt",
  "key7": "2vQDUQJTHsgDkeWTTSLuBVxADg6JFM7LZnpuEsCSb3ajp97u338PaworAa5TuxXqgDJYbviWG6nwemjQa2vi6XCc",
  "key8": "2US9C4eHHMgWtPdps8hQftAAGCVSytHgmLWaF6nHxygvgy8b37xkFNzXqBMNRsXZsQ2pC4LMFGHNKM5rZdcm9Wmw",
  "key9": "TSjaFL1Lui2DN4J4dmN3RMAUZUcQBwTNGue9usmYwCjMM8p4L8yrd4qT3gKb8pD5a61tJvrKjN334TCzM6syiN2",
  "key10": "4S5bK4qyMZdcCuJh6738arA1T2atFpKLtLgnrJTtEgWspmX5EmGtrEfuWncazZQdFSu6orAFQTJ8hZzWuZyaTe6u",
  "key11": "5LLswFYXziYnp8BXisr1SMrp8jwuxnUAbiWudKG9LPXxcSFropBxobTcgi7ZgPDuYwsCNpNFEaQhZvmsWEppBLkk",
  "key12": "5t9jngqj1o9kXjsos7QyQLcVZh23QpZVHctCSkvxqypfgveoMfSMQFsbVxgefxvaZKs3kFwkWULbGgEBj9HzY5Zv",
  "key13": "4AGVhQsPjdZaMb3HGq33zu4JNzngrakr3p6RnLvVMjL3DFA648U62efrKpH35VSvYELXZxrhi5DfdPm223rLnRRu",
  "key14": "3icMAzQea39utKQvgDkALjf4dSA4rTm7T77jb4jGNVFdN2HiaJP6Y2qbxScdpCRtBhoBbXg1QrCiZogCQdd8tP6f",
  "key15": "4Pb4KXDwYQKdoquBLVc2NLkb9AR1YvKNdJEHbUEoxFx5CnMF7FAAfkWRCKjCcPuQNjCd2Npo1JdaswX7j1HUofti",
  "key16": "scY77PVTZDJbYVbwG95YFH1XTSieXCABdfp89YV1NvLjrBBys8wkZ59g9jNyLxp7muLv5TM13w61M9FPw2L13z2",
  "key17": "2GRpxRBrUL7DtSnVAvHQcsEYZsMe3YVoXVpug7gvx23hP2t8hpZByCAwySiqrVNhjdeA9qFxdvxddDt9WZj8Gmd7",
  "key18": "5djTXx6rSZiWjhZAKU9AMjw18Zz78FYktSFJTBGTVerLyLj9XA5h9HFxfPWAEMKLkaf9CvfXqGV2E59oai4sAC7b",
  "key19": "5LsvPu4WFKGTboFmHwrVRHZVniNAa1NWXhBPvWEU8TeuGJym11aE7yfdyHJXQXPWPtWGjetswuCHartM2E4iJF18",
  "key20": "XChNfE2mwYwpkVxM7yqd6jrHrCcCD1WAE6GoHBUWMmiUg1Fedk3UMvJi9X6Qe1xsnhdyaXWF4r3ppsAP8gGdUzo",
  "key21": "5XDjSRrRtH5jfi8iuHKh3Af6Mo4RsiBjsNJ8YtppZzHTyayoEH59Wm4V8Sn5kVrjdTZbiQP6VxDpBwvP8fUaAufV",
  "key22": "w7tqZMhHQuVYitCNyXfAv9iFMLSFi9zsu8x6T8NAvkfzQjVwzogiPqoL8c4W24NwAJniwHRCwCU2GaN9rv6gZcx",
  "key23": "5X7PxMvRyLR77esQ6W3Xpjkc8PiTEGt65x9kJpYxgZRzFYZfsQWqstwB912RgTYzQyhGAjCdw15QY4yvofuqb9Mb",
  "key24": "3Sj6NLXWycKXPUDbEPkAdc92gPxg16QWqLAJcxAKPJRf7hVBq3xDJuZyhxbmMQJkbWDoao6LWdTJmwUtV7z2tRgL",
  "key25": "5515Hu6xaoCqw6tHX38PmhLvtn7r2BMFb4gf5WFZhCXnx48hbdfJARGUK7w4QtEGeVVgmvWHXZR763BTF8XWRNao",
  "key26": "4muJrSnbMU2RC6VgoUCstpYUvvZUfu1v1pRHrzR2y115zhaRKbBMz13Wg15zGrYjFv2EbN1deJiFZYFqCmThoF87",
  "key27": "4HK7iSmXvkzwJBi3UomiiBJ4aE2jYZrrEcxncjqsm9wWTqCcQqEF4yabGwdZXUmyVvLh2fRVzJLHjBz5fJY4ikuL",
  "key28": "5xCX5e2EkArfkcxgnDm8tZdGC8veeEGzmVnjw4ht4Xsxbd4cNppwZeWNHKooRbQUaZ8B2WK55ycHEGFHxaJocrn"
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
