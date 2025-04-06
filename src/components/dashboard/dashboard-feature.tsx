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
    "2zEj6FjpCFvBbaybAnosxdNW2v319ZzGummYa5tA1hULmF8b5PtNPiBmErtcdKKPG8DJ5XbgbJHCeW7muAm4R19q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QkRURqhvB7F69CiRUopZZq6J4bmC3PMDLkKKaBnFd6rJX7Ds2gDt7Emv2qSECXasRBzRhPm2iqXTfRrwoSrWLzu",
  "key1": "3jB5UbaoWZG9uij2Dtsnx6PFUFTqzg5FT1vyYh6qykhpoti2ejZVQ8qjGgnChu37wpCe9Fmv3Ls3F7yZNxW2akCH",
  "key2": "5F5PFnsn4BeR1ZST49CbTDr5xXwneSGDiD6scmAzf26QR4NX11RxQf1oJTGuqJhQAEcfPD9pSedBf4Tuevyt5fVe",
  "key3": "4jQgTyhXQqj8K66inDkutj9jayCjP8KYd1sK2w8xe73enqGxVVvkanJdoJXUMap92TphWsTPSGWjq3re7N3tUwM7",
  "key4": "bf7AcuwBL4bVktNEPNkPeBoN3xFEtbZ23coiEQRoGNgYNCPwQhoKoQV74aJxyjTQSx5frPpB3d1V2S7c8zBgHBV",
  "key5": "g8yusQY5SK9wTCjigRKwQDhBDJe4bR8Jt3bSdJUa3G8CCU5jWQmDKQEHEiaxmypERvLsqmTTeDp2Yfkp5zQW5jo",
  "key6": "3Paoi6Vr5oYbYd1Q1gfLtWrFnXTdNrpoYYWU5VCu6UpRDe6gzUw2WSqJiVCSZFkc2JJb83s81TdMffQdUgLPnevM",
  "key7": "2Uif6JBMktNw2Wzcr1FgyHE1r9MJyrgiJQnLf83Zok3ur2faTENpXFqFPeegREtnHpebKaMyTXSiufo7ayWahrsZ",
  "key8": "5UsT2EpEgXMf1cZVWRovtJaF3uCKAtCBUZSbBznhcV19FNmpiGzhkJ2vgeSa6nQvnD9gBthNa2cMgvwXRSMq5jrF",
  "key9": "2dDrzLGCknUv72zwuM1L3Ln6PjjZzjNHJA4UGwuc8tZd6taQorCkB5gL7XqqyewdindtW2UEyK6dmChSVsNVpk7U",
  "key10": "64syraLJEBA7JrMx4Hc7bMZ46uHi47tHup57M3UKoMxV5escm9v62GMie7XHVq5G798EKqS55MUiZQPbpYNq1C4R",
  "key11": "5EGJv1Rx8aJ3ucFwB4urwHA4k7CQuVTC2SY42YVgXfu2HEt9iiEQ9rg8WvqVmMQ5bbeCuBH9rfoBVc61AR8jbj4C",
  "key12": "b9TfZq3HNsndLQZKLvv6apkHm9C6FdM7c2votd9LzdG5Rq97hjqdVWyPP6TCv37QqHLkcdw1K61Zq4STHi2FWLv",
  "key13": "3auHwx8jZr1p4SnEb3Cx6jDkrJChaehmVeUpTDZz1dBZqDwP2r84N36jPQzuinnazymVTh2tqjfjXpcqSLDK6ZMK",
  "key14": "5sRL14bRLZQk1MbfvRaX8ca4JC3WpWBa9HUxrq1aT7WkoukM6q6nKvyGkVFJQfyjktn7ghofasMgPY7uTk4K21so",
  "key15": "5z22PZ6ywju1guAKuAHSWZ57scsJYtkfhDcGCAaStfZDogDwrxj76cXfpKgYDdPUGyhotTy7AUNSq3kwDYFLxcYz",
  "key16": "3tJFy7PH84CBYZtPhknakXaxA3iU13H4DsTXWtadaEj6GCrmdKvrdmpWS9NR9BKd3thLry1qTG2Rb4jk3amGD7Vq",
  "key17": "5uCTHQKLUzHiWPwNrdGN2BuuF1YiUMKDh43vR1XRnm4Ya5LxTF2ijgMdBhDtnSdfMmGQGDb7bkUypRAXqpbLaJWw",
  "key18": "5M6dgQKrFSmhg5mKUQBDv8K6nNBcMxQMYbFEgkhnRresHDLskpMVuVv1QXX1F1jmqtTozm62Ft3jYmSAAEm6bu1s",
  "key19": "5i3BDxYmzA8RFvZYiPoKFckTSCkyB5DVrpsz3XeYZKxwFWpB6hFjg4f2ByAyV3Qp3eRvHHpbmzDg1jpadtUJfNQE",
  "key20": "3AaQMyQReZCiW4x9AUbTdaocbZHPAhi32Xr8YVM28giowBFEem98VAUhtnWFefbcRHRKRUivandpwgELnQFPqzJV",
  "key21": "2N5yL8zU8RnoRmUKKTXNJX2VEWCbhn7JrdMd79rFCLjdrZR5vr6gku9UTSPwiKP2SVN6fbPSEYZoaSvPoM1PCg8X",
  "key22": "5ZDNNWKXfXcaiGvsoshwcPnSEnuH3BYNbHBNVKuMWtcxP1UYH1n3SCtwGXXJfYWJ8vQSs77CPB69Vn7TWFDDzPM1",
  "key23": "5XKp1CQbMtVpEDfdkardJV4SrUF7M5psHVqZyVeCQCn6SQUEVhyeSKxShzp4WcjYMgFFVLpLJZZ8h7N1pURbxDE2",
  "key24": "3PS3fKhH8tLSfAftw93n4w1PF5ragxA6ydeYEk45JsJ6R3zGFHrRzBCKozUGa6vtxec6YKYjfiStLxyXui2gcxhR",
  "key25": "9FXJYwNCerv6Q9sxQeqiexjsQcJDk3r7bhDjL6mSGPsvSRdVYe7RDfXz5kDP6bHjHxQeeWfsG3fhitdUrvwLzSY",
  "key26": "2SsS7Z94BRFyUwB5ffppQ8M5R5nQbbcdbMJEu39u4V5EKtH3PWvR9acw6DNyaohQjJ3TGDbuZToSHjuWCobtxdHB",
  "key27": "4NiqsdTHbtE9DT4bFKi9b1B5yxq8SSuYxdxDK5eyuzTntrGWsSTtxE3rEYTf6etXDJ43s3ZiFzZrZZRh1P1EUNv9",
  "key28": "EvBhkym1Te1hd2db3kUdYSymibt4zk6Tset1Mu28pV4cYiQAVJgWdxoeA42vZnadT1oSwa6wLVSZnMNeaNQLUDN",
  "key29": "5nMtHDaWEPmD26iHMtGjJvqDCLv2Sc9ewcqMn6cyYUd67siAFkY8Qx747DE2Goudfb1Jk9fqL8hKBhbQG7Ac4g25",
  "key30": "3LX1gw3ox5hwqUsS8DDHr5hkDkFuNrmeftg8oNmXzUdE1JPi62Pyah7rBDq94pm5WWUgt439f8ELFEaozKH4RYW8",
  "key31": "5ns8JHzh139LM3iTrv8cQUBLqV5GZhtVYxLzdGaiyRkvSnV1NdbwsMKFgFY4g5Vw7LkyLJyspPJabvRdXbZ4K4gn",
  "key32": "QfVNtWLMEH1B5UqV4dphrFneeAXy5qnjwR2F6eaWLvEc8LrWwQbnHuqBmiJfEgihQUDWpXUYPyYmLHk39gghtH8"
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
