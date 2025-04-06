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
    "5vWNPno4Ewpdy6GfnMLM2gNrKHVK1v8yGiK6F3oqHnp7a3g88Yq376bKP2VX7y9cDrnQvgKT7tmWKidW92o1Z7H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RpaGvAdQgQoDspCawWynVisnwTGDhrQDKHcZUoPq6fNzEmj9Viz3m4Wgb31cPXmdNTEmHtwEinYZu2zsTnZFDkn",
  "key1": "4ioqRTakfuNNLA7vQ9EaxY1f5Mef8wwjka2tet5VLkZQnvSCvndkMMien3NBAJE63iSRy8sHV2Nu2SjpT9gsnLPa",
  "key2": "3PAopZJ2a98PULKqAFdFWWEkHpsKoscGEnm8f2PNhRd7fBtewhCkrPXVXTKMCCvTAMCdVPgRDPS9a75iBKaAXtyw",
  "key3": "36pEhbqReQzGk97c6qca4bZQfenRhuUPS1zAkkJkey6UcvgGm2qYEYsyY73XtVGP9RfjDpEuHfvEbWTHcrp7RMJz",
  "key4": "3ptNgXsT3UyiKDpjk5mYYi3wvu1H3yU3nUkHeUXn5vE5jBqCB7sACTq4EZ9yFmCbdVxiffdye7fcjuEfq7183wFh",
  "key5": "dCazxzVCNvmNuAVLAURRZUsRuLihjxfRb1dmhwB4CaPYH5zRC5ptBcgLsVyYPC7gjAktYi5YuH9QvquZkYKEViB",
  "key6": "5Z4478iZd15Dn3dzJE2Frch3XfBr37WPA4R6bSg6cChbWArAaE8CwuqDKmV34RATm9J8kB9VrMd3ELnvRdRarHWp",
  "key7": "4H8HFRkVtFEaocJcNFzDdoLECEcZbV5v7ZYJJ9x5sCNJAB3r1bZPLDunFLRwowjVYg3bGw1Rnwi1C4Wm5cCrhitp",
  "key8": "5oSKZYGMpZrFwBVTFy7dKd5H95BLYNyL3VufETzVm9kZCx7fB3ErMHkXTLAKB4BcZTqZwDsuapDhKGoULvzPujtm",
  "key9": "4x9k7onFuQh4qz5fyis1G7s23AkjoAUSxNfi8eYsDRp8w1G4QcDsMgmTmKRAoLiG6deXEyiTv7MNGhBaNCbUCFph",
  "key10": "5r8c38sdpDih7TcfxZVjLwb2dHY5bEBHmMKULK6fXC4vacwga8cqdRpYDfVYbXT1mUix44ZUCv4aYbTgRDjEAmHZ",
  "key11": "5N2dtdfB2abyKv7sapwncDk3uBkEqqekqDYvXtrc5ZCJTgF1BKbTkhsKvQ9h4B8hy4vjp2aT1ACR6nswzDu14Moj",
  "key12": "Y8EF5dhjkJmidw2pp8Wy7MJPUzcWEDA6pf1mJuqARXuXYn9w9XTE3PyKnragLFYuPeomv6LYvHauff63AcN4Fap",
  "key13": "4k7QBDzZAaSffH8EwceZZfuwyMwvPcUCBAsTHY8tT4zD5bjnxkiW6zfWD6tgnAFQMB4JLxagq3W4vdkGDdniWRQv",
  "key14": "pTsyPaJQdFAUgtFhn7D8XfC82cUU6uTbnrbE1rKSQJFKuKkERGG2sHhMDBr5v1w2KkxgXpkjUN3CMNWz5K5ksP2",
  "key15": "611MYgUW1CVHD4xt2hR2pVF4grgGYhmG6pEjJiW8998fusueUs6KJaZv1fFexwQ9Co4BGZyYKtsNhgCgDYzx7YiD",
  "key16": "siJEdwzjE1R7Kogh4aGmHm7ckgdeJh2N86mnQuCd74gbcnrS7ANdR45v3aGYYAQ6oMir4n7TJmeXTLnuUwS8Ws5",
  "key17": "25i251uHgBBFsb9RY18uEfgF7tCK6f1pSVCE2JCJTS7E7QvTsNbgGGR2iK78ZhM4bcbsCBGriupm5aYeLwGaE95E",
  "key18": "2ULgie2KoHpQ2j3adQSjeoSxiThqtw9GRjLgu8F4VXxH19aGFSqdpP7nhmJ8VDEPHoUaTvfJhY8sNKNwcKkXdkJa",
  "key19": "4gL9PZ5bsjweHbKpiHAJCndm2ksFAuAfHgBrZ8EHRsSdKb8CU9s9RcUVhzKEz8q7MeDmoJqUC8cMpVePcHtnKM4m",
  "key20": "5H8hx8pAS954HGV7xHzo1cQ6Q6SdMH5s88QYq9TbVSd9Yb7egmVmqGMRaGaqy86NqcV5tR77FG91Ma8LQLbbJbxi",
  "key21": "56zvrY12dZHVcpuxgmsJ14sEQ2ZTC1tykVKUk6hi9WAC6a868uq2sSWhspz3N3Z6KRxwbJaDpG59KT7FqJDohKg9",
  "key22": "257ovZ3pm8CggYVRGc9TnjMEwzMPF2NG3UDkQNuxgLqGkjJWuf8b3aqti4c4A6KVeE4Sk4cJjpnpk5onburiWz7X",
  "key23": "45vbUJzY4CB2EcbKx4wvmHVM1pw8fMWArS53bfZ36nCAnn4iFwrbHFdYcRMavWJAYMDDSr9kBW7WsxS7cw2kTySs",
  "key24": "wTAGtgNk8pWPKXoKicRnFHA2XmBfepxkimEEFs53jsvj5qbneyuw6Cf2XwaxnnZf1NVv25iGAV2XkQYTkHrwsjg",
  "key25": "23SrUbkGDmN2YwcZNCAz1pxZVptRGKcDKzE8htcnVKG7MKVDtHo8qP7Bs5GRUD3kgxZNwoMkqV8hEUfegsr3QoP5",
  "key26": "4JQGUeTWv3HLmCuvByCqAe7yhhouZk1ccqMHdLT3AL8mVFa5fWJEGJ8c5x4agBbRDrYbJkvY5q8dB77yGwWsKQNe",
  "key27": "5Veq2FAxV6666pihSti8vuYWAL8SR5NY1gbaheJpBVmvCUjf8i6YAZai39RCHw8RQ44r1pcmjt1wQQxphs7W9dBa",
  "key28": "y56yhXQTEFzbP7ZRrArREUqC9xEXCwZFkGQqTd1DRotUG9kDU3ZZSE9WQryYVuMFcT26ZBGcBZ6Mswn4yc1rrPf",
  "key29": "3Q4EQsKJwHc45xya3JVN3rXPmutDoKi1icjm77XnAh1VStBTkf3vLyMXGvhzmcNqciFRUJUsSVgeMYfFKVLBVzQH",
  "key30": "5pgqNvm79Jcn7Qh9sQMGVaTQju8y8Pi7BqWpunhaHAboXCRknyqWQaAMxpf8qyXupghYSH5aC5eoWbMZCzG4ALkk",
  "key31": "4TRDjyWsJRc5WkrzAA7G9NWUpJQDeG3QzYZuFmYGdbJdN4eAnGNg4J66qXTUVcARa9HicFnb8LVnn2eif22K8DHC",
  "key32": "36khgZmtPnAQX2TvXFMZSrc4yK8Knb7M6F1tbkXqw29ZcyQCfRTn5EkDx3rEsakWvLaj4zzj1XzczibuL2iLPJWz",
  "key33": "J1VBt7e6mBRehYw3YjK5kJNetpqXhsB8mcCzVx3BpPd3M2HqS7kW8DJ98xe2NghCq7gKMh6fN9jPbcnYjskg7Tc"
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
