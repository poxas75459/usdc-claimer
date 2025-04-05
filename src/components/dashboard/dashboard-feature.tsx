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
    "36Qsp8Nz1AXANTrKTTh987Z4SFRjRaXbygg4jq8CFfmYcGSFWLrP5KzCXrVLSgBQ53wQSdVGfgUsinNJyoLabpXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cTCiPWwq1YGVDGHvQ8t8zZEeVRTBQE61yGZVYiCXdSo7wmCoqC4WA6pV9AqGcDth8nJpLcqV99mBSneaYeyyFa1",
  "key1": "vv6geXKxM3ybeZYxgn4hAuJNmsV7LZPthi4gz9ZCFVHaPU2ZK3T1KGrxB16vVRjGnCJww8YpEqAWFdB7EDn2jko",
  "key2": "4k49b9dVXk6YqX6cH7yK87Z16URfEg6tqVArze1wKDj4kE5fxf6ifwdhzdFgt6MtaJciY4XAiNfwKURU9qC3YdWM",
  "key3": "2a81y2yUrBe2qyQNazLhM1WWMzMwKPSqh4EkGP2DLL89NhLhcggW6xnPHTJeCF7e68wsLxUWGQvGN6K4tsAakcXp",
  "key4": "3PkQmvKLv5oQX3KpCP5R5puBDcGVXqLFeeRTgWmUvh6MCyUpdtW44MeFaPzbwT1k7k36yZ7BXuSndz1DUJV1HetK",
  "key5": "H4cJjizZk3nKysioj1fuSwuLpHoMu4qZ2vfo9p1wYDi7PLBbGzSBRzXQgNqmjVGd2jGaLEv1UrgiWa2pmR5XCPd",
  "key6": "2N7yRe7LEUB9DtbTW2Hvsfo77JeaFGhyvwYMtk7MZxj99gQCU2D6fpSmaoWXqbzSUvP1cJ1PNUL6diqdWbQ7x7yB",
  "key7": "2xUMMhkcKAeAwzcsZ7HA89m8cACJr1G9Wfn1Dh1s4pdcXBMijuTv8Xg68sn6DqZpiQoQX52sdzvCbyxvJnSN8J6t",
  "key8": "62t2rfiUE9hpc7MvW7je4JjqfZyYi7nFh6Wo7A77dxat77E9fpVt18gaVKnG5rfNu8VphhX7X2R2uJNTZDUXRdty",
  "key9": "3K95SGJVtJEjXFfSrp263eSM5FXmhjT5j65ikW3B83KD7bnwNhNksBVoPUgRDycM6BhVXVm33cZq9LZ5nVfgGyBi",
  "key10": "4FNj4Zipkqw8mGwanyJk4NXvoow3Xb6ErMekMMmrPaFFBZF3uGNZ6J7ZJrgJHFA56B1ztTA1yAme3forbJpiYAWB",
  "key11": "3dbdF92BsmSPUMS7yPoWtCSZkG3iMYpaTtEuyJ2fZHmejGGvf2fHvPstpbX6HLe6RkjyH9VPry9EYtHvSmiFqYxr",
  "key12": "477AQ71BRPjhTHsFf6jdeuzwn6fqTL8NeFfuzff3LYKuo3zajuiqe5LiiVRhLoh1Ha1sBu6tEy6KoSL6SAiVbgm6",
  "key13": "2FTFcHg6EH45YN2HiCS8GHMAxk2krQVoG1g4iYd4cvv5Q5ohqeyB4DdoXRrKdbTBSG9fKqbwqqUk93oPPSV2j3L6",
  "key14": "4AWYXgzLjP8imZPdhMf43DP7LuoPpEZCdtVTaz3jEwakiKT542r86T5kPTXBz1r2oDYf5tb41UnK4jg2fVEAfFRi",
  "key15": "43ktVAu5NQVsoAniTcrriercpVt46XhJru8XMcB2UfPWsojgcj7T1nTH9AF9gsnxyREfwfpe5icUEHwqn5L5919R",
  "key16": "2Pf56pkQ1JfvRREeQGriNr5C9JLDKvjKgcztab2hYHK6Fv1inExt6SJZY5Cwita8qDxHWXQJAqiuhhBrEDZhbKtW",
  "key17": "2u1f9TSZPzF8YAZWQoRLsWuBcg7dwp9VVi6uFJRA9HDoXYBj3Nc8mnHp7TCAryKnDGbiawdQvMGAatjFT2ENK1KJ",
  "key18": "yoi6ZtZgLtQxYhaMFYjsevpUFLc8SJi1A8fr1g68UvRwGUN9aQGB7mYhpNbcrSfs1xjz5QmwhyATAsVJtrEj8z8",
  "key19": "5jV1U9xPJ3xiMC2ybuB4tNKr7qBCsKTYSMqgY53BcWRQ77SvbeQHqsUmxns6xaQUVA8euq2kPTxYxhj1PKUJ5kie",
  "key20": "5RyPcFAo58y9MQREKZqCtzcLSQRc13QhhhYkDeV7qv9owwz9G1QScKFngn8o3AScg9rV3sN3oPkfSUS4KMHi6tGj",
  "key21": "371D1sjV6ad646GEjgverArsCGjdhZtwwjWaY79urWKMr5JLwzyh6QZhXsPauzE9NnA9mrJoq77t7QMuE7WrmbZ9",
  "key22": "2pVx44xnxNnPLsSVTTx1BbYxyuAqEgPuDSQyToeqboHLpDBeJbi7M8YYevFQPbHtqxJpCXLdLXnMQ7puVJMPBzBh",
  "key23": "34RwuY4v8MS9p6VbEqQTdoPjekqEEa76Uxp48q4QXWAT3ozqaNbDxQgDs4DB4dMPpxmAPz4UGUuMgvFutp2UZD3D",
  "key24": "3iXJ8DXgaacYiDGg6LuhttrVPjTzy2ZJCcgebyCsag9TVTrnoBH5PBnCWr8pcA4HSkPQFYB5cFhrCEgWEA7qW56F",
  "key25": "4ofpbazEjjoBA4bzSXRHReQ7soGh3M2AWepbuW43H94B7TAPvopxWL2h81cRUaLdBHzHVhKx3VdLTcjDAnM4TLno",
  "key26": "2EanWxfSC3MmPDWKWLyz72DtSh4aVFLLshcfRDvZxj8kndgLCDz3aEgaBKvkQUWuu4JRsi55AhEEtC3ZGn9PhnnH"
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
