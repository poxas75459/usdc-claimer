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
    "5VsvYBTbFs9CAraKS5Z9HJ6qG5PMcFSmdGz5xCsJeFqFm5Za3qCFzaSAjQTcvviiKrRz7UZLcGfZ3DYqQMjysY9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xqzP6njZBtina3CzE5hvzKDhsKop1w14cwqnhZAxWfUSPEkCRHKvfnGtgKVcno2j72A6JFUbFR5NwfLzJDY7yzb",
  "key1": "4KndfL9kxdu34azNKR38QRxs6srEFzBCJmYY3DqSvTxcsx17j9zUsgEgUw7eWM1FMsLCThqkBW4RSEwHdjNuvDSP",
  "key2": "5cd9XntwELQBfaiXFSwL8nUWQPSun1uBux6vHPFMXeDXqv6dWk7HHEVmMFeBcs8ED666ScG6evrPgu2Ev9CVLdDB",
  "key3": "3GXb8HruRuwR4XmSe3H31cNzsYPqDLXLSAAmDzg9niZi8y8UzSNCXiouJHE9bCtgBupAPSDMAS1R5zTrV5z4WYRZ",
  "key4": "3PGeH96boXiZcGqx17vq3J4sDhm8RQEvv16Brw9WjNx7TGgPLARArxiYWvoJeDBL2pojAq6UUmEZZ6Hx6XL8UHbh",
  "key5": "AVnTm4Yqy6nK7wmUYyMfe16bB3SAzbAxFjXUG8EPNeRZLCL9GhbeQ1xjs3y6Lo44Ke8HnMEXXUSjZEimenmHCRM",
  "key6": "4KUQwh56qQe7UxEipYiusTeZuogBJfcWEFMhdPUHhPuyiTroijdJrS45j4CRX8ezU9XsokqKAL3oqZ63peiEw1s6",
  "key7": "5tx7ogn5LyycYugebj7FMPM5yLTfcfC2suaseYfWAjQEo2ZjvcuWxmht8uyWiqgQp23foyzU7fh8gyvx1Z7f3uzp",
  "key8": "ewNEcMaRMV2jrfyMQPFXib1UehbyPCfBnB5WXWx4qCUVMva6SZ592U5p4fWPHQ8XQgrbnewj35hEgrHaMR5sq2W",
  "key9": "4SPruFTgF3d5TyXNhj5e5EyrZQHr63oVCroHYzxFFiGiRhEcCZwg3xQAxfEAVuVibuG5VXMA5ojT8PfJv5bKow9J",
  "key10": "6PNDa5PyZZccTq3AQ3zMVg5U6E3Ha3cZPJRePP3WQ7Es2TXgv3fWEg8UyoyYYBGySRNdK4nNdi2NdZTpnWVDVkR",
  "key11": "ua9CQF5a2hNbFgAG7zMYAgDfLihJwA9KUxhajnc4pp2uM3MKXcKdXkW3qRRSMTrjzvC5P9LqyfJ9FNV3n4FfJ12",
  "key12": "2t5NBY5UJP2UGdRheevK6mGpUBqhvRR9pyuwZ88ovjQ7heKB6tnfVUVUUxmtWSbGZ4CXVhuiBinYBiJ2USDYcNB4",
  "key13": "4QAN6EhJv9QD2Sdfnb9Cn1wFmZEkQEf9BQeHxSHwnoCTfP4ay3Lrwjsgx8VRwgb3BHVyiPFFKUZxHWZH1v1BZYHR",
  "key14": "1sBPqMpDkRr6fq1Ui4agimVRLAq5uYXc5NJZojRz1yNPmPaziUvc3GuGmQ58a7ywZKNSTcRZNjNZriSdfF9Werx",
  "key15": "pTkHjQDWaQQ2UTmVAxYmdAkYVa1N4mL3r7UZw6px4odsad7itxCmVoX4NSfjNnGvZLkh37c4Ji3fQj6vAyNbuio",
  "key16": "uQB6xaUceKkf7VZbwHMFHbNk3tChSt64Ldbx6b2CTdWa7LZvtSU9GTGQkYuwYUmr7j9y5nBbgjCbr2MWkCjP8Fb",
  "key17": "4k3fmW1myqvcXNBTdsPY2SpXLYbVaqhKHCs8zwqqg11yCSxzKdLZexb2xvW9FkJiRyKMHyUwBjnHWKSLrLSZiSim",
  "key18": "2V49f3voAh3N28UBt859ycVfDgcVLKEnEVn9eApLrGbGBEm83JeDad44Yu1DG7aLXMwJWtpdr4FAx6gA2Us6A6YY",
  "key19": "4PCkxJRHusw5PED4azgbo7C4X9T3PF1dTp4HSMbTVhU2wwtHTQ9JxKkF1KnAkW4mftKQFZNi6AWZFx7bdcRqqkiD",
  "key20": "3BWMHBcJj7EbuBQyFyYhNS6asnvdqPqyzg5aNGYrbQqyiWRW5nQxQHCjVFRrnETPg9CTbseZnMytHBjR37MxWeHK",
  "key21": "62BipQn5osJ3d1N8Pcmiq82FRB27S2B2u6jtM4apSRf16W2UP1ED1qiXjnVaRWKS16JrNEMNTCWK9EcNGdP93R2n",
  "key22": "3owBywVzCffKp7dcSeWFLGdmJY7qtPCFmWZ7HUicY6NeiYBGbrWDUrBqLu1wW59tsFmNoGt3FYghri1nsnSMunF1",
  "key23": "tFXgpmEBvzosypnhfCwRLPnJ2i9CpqpC5reZgF8P64rNG84bXXxaeWhowLStkHWaWxMhzkxGCSK194aUH3xCpGz",
  "key24": "3jNayTqg2yt3eZGBzG7P2aCDBhCbfhajRx2mtJqbNYueNomFjwPWCMQ35ZVGGk4kTrdeEB17qnGJPbMmzfQDaePn",
  "key25": "STYDiuLz9e7NbmWeRPfXULwpJvwcihf2H5PGtgQXaoDbZZnbgVtmoGWPi1Zk6ysSPZz6KJwXuCb2932WjHN4sUp",
  "key26": "zLxJBtG8Um6xSU3ayYZSQFUEbq5azdqyyyMF8ZGBy33sKmgTZCN2CfweRSrhEUHxJev1mEo84Hpv4GnaeQPbkT9",
  "key27": "r4S5NeqCbEKe5c6ix5yhPhDefFCFJeiWyuYMAQgF2ZXoXA6KEhM4sXJJkNcnKboLELskNrj99Drr77KNjzieXHZ",
  "key28": "4AcKARzkepijS41cyS3qa6vTkjuzmm3bTwzW8QjPygqKtMgs42QzYVGENT3MqgFJqA3xitJMmNzP3TqpmBsbBVx"
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
