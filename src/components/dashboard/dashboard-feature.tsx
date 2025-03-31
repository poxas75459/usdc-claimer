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
    "CBfFJGh9HEru2UtFzUTogZY4FZfoZk7v46F1RaSUvmNQXGhTqzy9sRwiChFrPBsxDKZk7jkR7FZ7HBTsHGxLJxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7KSCcetDpjTz6nfVPj8usa7XBy5Ykt5F8mtPt7BmQNZRUoKcV13k5pJtfZ5HqX4W1Z9jYDDzHjrC6GafSqt1vJw",
  "key1": "4RMUupSCzoetE527e9XhLddPNpAWn2zz5Ype1mfFqFNv8FTXRwjChd8b43LiDa9zjvvcMQRmj7s4b1zBCPwsY12C",
  "key2": "5xKrF86vj67B6E6zm3Ekjf75dE9TpWyrWoUdVZtdUboJmBYKr27JoDRMjmpMKpa21RHPd8VuvJrSETr7b6edPdS",
  "key3": "28BUYRKeJAK73nee1GcJgbdnTRQR8u2rqXYN3Edzf22Pp9mJFK5GRngCDAwi1fi8wchWPoTz6x5HUmj13wXmvaUC",
  "key4": "3kk38UzrnR5ewG7sLZqhRgFoyy9bTM2TnRPK1LYgFP9LTn9Xka8Sh17eHjAvtD2BzEhbUU1MjJGNaPv1J669Jgbv",
  "key5": "2YHP5J9ckeVMbKFGGXucNVEFvu4xmTGNDaAzM3TSMVjcDFokA9zG9hSLuKvt1PUT5sEKY4X9HFuvWB6dan7AgzzT",
  "key6": "2NXGZ8mTTmtJRKNq1erm7spoDzACKjN6N1V3nSccy719tMQfwBsp6CE8v9HQJRUuk9cedZwTagShJgXvbBiSgcdf",
  "key7": "2PBUMJSo1fPuZBhgPtgtv4TQsJDkAWGmLExVzoppWscFvpW8Y3ihLpDhEFjZcmmJHLRJvEHncWB6pcQSJ4iZD8ji",
  "key8": "gocYz4UTsDqijqsz7Q7T7eWb2XhF9CspSqRDguGZUeywc8KgNehtzPGXerZ6shr3sgQ9sVToAgrrTM23eK3GV6f",
  "key9": "4C8dQoykQ5MJPyZaFswRoKE1s1pb21T8RaEQ17UEcifQLFqe3KN4hKGuLj1mg9ide8oTsgHNW3fiPAy9mH6tXBrc",
  "key10": "5piCrcgwg79g9i3pELdweCMtRnXuFf2JSKiKVqZBAFpznR4FYVU7FMNqKtQ4dESS6q65PsY5trkbpPVxwdP1AyX3",
  "key11": "7EGV6S3zkT83VLNaoPrpKnqfzEwCz9AnsnqZBwJ7ytPUSTmmfc4W4MosRNU95reH8w7cFjP3oPAzJFSkaZ8tPJV",
  "key12": "2XnCBWV2RWKjzvCezjVmWmTzgwmGr5arPRX4T3BZSScBJJX6Yc1wy6BU5EZHVwVnMyU5Yg9qfWxfy2TJ9HHTkxSR",
  "key13": "4itLumjQS3WG4zc74QkcA2p2bHQ8az2XVvVEGgQdHrmmxKiJr1385UaghxbyDXvRLNvcrZ3VELJt9sjE6W9J4TPP",
  "key14": "3EWmpLALt2g5yizsZtRd9tBu9csZSJWTCTwA8Cwg9kFUm3gcpn6QEq72J2SRzYmvE34sA9dupwK8aQwzZpbsaDfE",
  "key15": "SAfJUiJ3K289p8Pjm3ir2N6HYTkE1wQEn4vbEDBkYxjK5viTjEtueFYMkWzGc8YkqpwDXVQ9oXMrG9rg59HuFPP",
  "key16": "3933WGvG616c6dYxxikmCnHMco7QHk3WXP73WV91776t7a5E4Q6uVDYFb5VAgeENywf5XhXGGD9xsooodqPLsxLF",
  "key17": "V9ykm4LLhGTGdhJwvjcaPVJmPEjS8iMm4wwFzNWvMqAi1qJkoRobUWs7FiFoZKqA1mie4ibTsdow7HfCrgLG9J7",
  "key18": "oehEfMm5hRhohCfj9aYZdaCneEAWYZahETtzSdts4eZ1989z6mxqKoCB3B3BdjPNzWsZ4Mz6kpBmnvZFK7hrUQp",
  "key19": "25j1v51z6TE7VfFo5fhHSkivqbDiWwd2vCB6QhtoEoMgif65XbchFGeLstEpKrz92RGhwKphB2JkvXfmWJtroZ5E",
  "key20": "3ASWoYACiW92M1D9JXVJH67amxu3brfa9uCW4B7PEA3bKjVL7qB9qGW5WRSLBeiFFTFDmJ2WC58FDoAakjrHWoN9",
  "key21": "3uFjLxXjwD5R9G8dFMvcNjjomMZHtDWxmqBNuZH6kRAw3qNQfKWpntsi9aXJXhHgtjZHXR9RfANoxTkT3jD74g4d",
  "key22": "zA2cJW8TEYKKBRZPVM31hnPt2vMZXJCb2orgiHFdgrgows9EUyy74ksqP3ffN4nZJryUrWcsBcTMe8Wh9rUDw3B",
  "key23": "5zpDuG46sEbmuTd66ueBf7ujjnfXbqzg4nQn9Hdw4tzTgxcxfGkYNsEtDxbmHiEvNcquzGnojmgExbEGkBDrjSRZ",
  "key24": "SMAvxCbnT2tCHxrYqNNGrTwWhamEGg5FkUBKQXrxkvTQsGz5sxtwok4bR5E9eCn6sd8jAaRBb3jrsK7ZE9BoSEf",
  "key25": "2nZyQsjjLhJnRmgjWWDcGv1MCvP2JLTVXPS8HGhDawXFFHvnXNS6DWqh4xvvCugoqCmByN2oJnWDDnNYv7VKrCWD",
  "key26": "3vMxfKkqej9eaVCK5Ui7PEirHu9iSpgKV2wb9GVn2YoTzpufDWPywTE1LJF1MxqDrMMToLAM4tBTGrc8sa8rBbpG",
  "key27": "359xshSkULgwwUobZeg5NoUf5MPG3jLwJ3KP71bLLRxjSxeLNmYgK3VVKv8x4CGjm6drFU4EMcfSJt1Bn89emX13",
  "key28": "5KrYjjZH31KRZGjCGP8yJ7Y3npro4yxXaQgLTfLm1HzLtKtMmHYXavSHxVBrJTHMeDXNT5Bqj9dEbAcmEZGQi24z",
  "key29": "4DVJKTChwdD15gmR7RtsnEXzhNa44bu4vcKnBXi9kHcTmKPenAVnnW71NDEpLDN2j3sWzP4ZbRdAm72j4NmC54yf",
  "key30": "66v2TKQh39DW6ozygRcx5Z1WBtabGN2BaewhFdzCqsh8yuYT8y2ezNiAGHEH19H4bJd8YmEGS8YD12ZjnnFwBVE3"
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
