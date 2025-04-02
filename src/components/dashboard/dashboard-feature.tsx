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
    "3H6zeuQonoPnbbMZkR4FBFfH5qAUoWDEpMBpbHkadfeHHHP5aqEKaES84RDn1z62SGb5eKWMFtWryfLtiP4QBRYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gPjsz8E5u7hS5QVU2o5h2v5qdtG4kT3otrZcEQGMRqmznimgy1VGj81HhomQfKKq9FsjGzjGLq2LjaL7b6fxAu6",
  "key1": "4Q9GJaRVPS5qENhneFaEFaCjX59knFaDrEqnQeLWcuz7gjBfGv5F8Q5sdy4Ve7u2MTvCKPGmkqGMfEU7joHCNc4R",
  "key2": "4VzfQkUszXYi7Zn6HZnJJ5rVqjG6xXSdHSvgtY4Tby9Q5kDcGSbX9KMYNa1AURC2DPNbneePbEswNNaCoKFiU4FF",
  "key3": "4dRDTbADTE8cfZrgu9uaMxYzUDW5EvwbtFYuvMwLEfuvXsKunPuKU6GPwxNTRmiiTqGcngGeYorNDhQvYEC6WGW3",
  "key4": "5wZjqFvFNo15MAX6miZFj1w7NCJXWtuM4SeeMEmFvESC9HYDFxqTwkAZaShymdypvCuxmipg5JnkjPM3KVoKMjEf",
  "key5": "gBuPjaCA28hHtxKjXHdNCaJ9MbXAZppB2Pxx2UwaCFcosmNPujZ6f5WvH3CYYEBw4qUzsfjc2hv3wiPti7eehKZ",
  "key6": "WCMZKjkMkZb1XEpjAq7hiAcvL9vKKZYd3BF1S7EtXR98MqPkgKp7tAGqPBraFa6R4cAegLAzPAHmUHbhGZYx9nj",
  "key7": "D3sHNUcDx21sVa3iAY8GuLTF9MkmkD7xEwBttknxsLgkz4rd7ZLxEadtFABeTpcoKprd6nsLCrvdicDjrwyJNR2",
  "key8": "5nEGan5SmSHQW2No7MCnThPmdTMupptcjpqzEssb6jDrbuF3MadFK5B5eo9n72MRueHpkfNfqgR3rx5oSb3ARcLY",
  "key9": "vu1vVd6zwG6Zt1wLc2UcUfdZdKRNTGuQo6c5qJe2zkGEdxPQe2tfoxZz4jDGGrGzjLzJF9KbwE1Jn73ELCAxkzP",
  "key10": "5mji4d6W975gxjjTCFLQKK7p1jr22TSrdQfHTmwwRr5WYJZYGou3TMreTPQBtLzz63SvBFTFbbTLCVf7ckcxvkms",
  "key11": "b7DCbPrGJhtNCVcmuDC7oXwC8P8HkaXGEpGVdj5GFfSacgeGcyUbYj3ALmvMVvuASPgM8Yv8P9DwD7F3CCcBMxS",
  "key12": "2fbUUbt3dArryQxSGVyx1i6M9b7X7ELq3pXavXMeD48wsCrekyR1nqU8BfEybbZBawVugL3QncS7Q8eGUAM8vXcT",
  "key13": "2BbPJ6mYEy2AoJ2vwteHnvWagpWxYEvZQjY15czoh3fbBoMRAtcf1WSWL7ANLozj7rwpNDW9qsYdKTUMR4jrysjw",
  "key14": "DiVw6H9ebQEnAWRf3P6gWtKLCbTZzzpzLfwihtPjWBaWJbLPTDBeGBvqp5VtNMQZzbrGp41SRum8ofZJmUcdtfE",
  "key15": "25hskZDzUrDuCUvS7avXTG9CudhzoEwVPN9VTHWAC8WwMvV5z3ycfc1UvitwYqBSk3KYfW4dLegGiDcEuDDR1pMF",
  "key16": "2K6WWByPTS6dAD6LXpGw1uWH8q6G1wubg4To4zHxoShvb6TgyaMTuaLQQoJTiwUoBo1VJ6vmCDiutd2crqocYN9E",
  "key17": "2VCP8U8MocH3BxrRusdMU7YufeYCfKZoQdoxjdPqQViYDHX571zcSngPDq6Aog4nD9WcuaLah9Nd7UVxvLxtNDxr",
  "key18": "67YubGnuMtvsnzeJFrWV6zk76AvzpfZKkQwiExP1jBWSPCD39eW3hwkrMFpAMR41XqPV1vTAgoxEaPDUufTT42iZ",
  "key19": "3Xq29FCSVm5XeifaumSiSNz5JgQkyAGpk5g9J2ViSzfiHydjVpzRYK2FGiZGhgaMWtK8pD6mYWPzPoQpqh6R3tCG",
  "key20": "25e1mdJagFSo7dYRUEFECvPgUyGt5N7sgS7pNBBekBQmVdypBcsBQ1t5sB5tD9rnuXTFJH2ntAwhmbxYBhdCjAqE",
  "key21": "4GitQWP8dkQXLAVEWZpjRhQcpP67Vt3J6pTTftM79485ssJgtsfSknVpsfqHAUeh3L6QgRbxM94Wmmfo8WpZzSTF",
  "key22": "3XjduRBwcyhq13owt2ZRQYz4NqSnPQiFeooZTL5cHTzF3edJVhZqFepJEcbgQ5VUsRaNJXvhSuaEDDt2eNygHbju",
  "key23": "5kgjm9peAvcieJfxjJ1WDD1zVTD2fGzgPQgpyyHVTnDD5Fmqb8ZsvhtKmCVfkcd7pkmbeViyJd42rbTVfkjWezCp",
  "key24": "2c1kYvHKgp89k3VgBVy7eostwuPoQWn8bhq8SygsQzc3VtQQ5TUv8bZ9TUSQUES6KYx8dy83ZntbSteviTxbu5N3",
  "key25": "5cgsu1SHLnZ42BPWf29Zwbg5MPKDjYYATSWSPFsbKaYyQ2LXanggmRNv6aEukSTRfJtxGRyVuQaDvG2NZCTRxUK1",
  "key26": "ESP2TFSKfhAfMo2jgJxuHS6skQ6Jm6pRkdudSZAEJYULja4BG7Qv9SaSTFDukqnyhp5JnrjReJjJuCPAhfNiFce",
  "key27": "gs1DxNLvBnn3SuaFq7UrBWzRgKhrSD35jxP8P3rAtV1NzRhp9wqSWxTWFVWZe5aHa6f8F8pdsPCod8ncPHjPtQ8",
  "key28": "5s4DKGL8L2hd3swrY1GBGguUFyw6sxEzXWqnhfdaJQEb4VcL92P29W9gqar5a2t2v4a32QJu5HhcRKYWNcL4iJH4",
  "key29": "2FoA492icXMRk9S8H5eTCMuMhiyA3HLtMHD2HQhRhGDwBXT8U2JKXZDqCHWhcBjHq7CVRSxTcsbLY2yqxBfWTKuM"
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
