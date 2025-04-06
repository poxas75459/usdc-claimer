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
    "a32xUVnnHF7jvC7eF5ff1gw3mWeDGM5ZiA4v4TWsq8DEVGLu6AQF2366ojWk4XPhdn5NgH8yXZVgjGdJfsC4L5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fSzvWfgUTPS4LPeCLQDbHafnfFDAhcq7A117p81xHZrQH9ohjbm2x4U1S6WYH5V34hEcd2TxNswHmPKQ4VKq69L",
  "key1": "gbGyiFGfGsfNhSMvoGCbNB3PPEfK1SMwjr9Sv83kR9r5AJCfvMe48v3MwEDj5HVocwgMYojm3aHi7zCaQAN6zFM",
  "key2": "ac5ihNezozgyibqrPbaTsAguhXoAWfkhFZXiomL1K1J81UbqBSTsKUchffM1a5rwvLb5TSXSxh42emVLRavLF4q",
  "key3": "3WEcf7X4ZqjQAJicZ47aU2FHrEBRhPhEVEWFD69sZ2vBSZ4bvkRb6U1j8xmEaxkozpbDZwpuPqEE9zN3rs3hSE9G",
  "key4": "fbvFUZABVd4GV3RL56XtEWmfnQP2iN7G2uFNc839B7AyPCkXzML2UTczbweWH6zJUWanE84WQVMqMo33iVVRk2f",
  "key5": "4oACit8wREibSv1hLTGfu9kSAG5xzG8eJEpNiJHEU74FqVujSCubtHfLb9hDjirGg62Gv5BSTcvUmj9LXiofGG3H",
  "key6": "mMhMktAS77wC8c2VfAkgzMJGgxGcCMzDxAgwuRNtmJvywH4FHWEzPe8AKjbFi3GE13uiaCQvQZ2YdM2iVoTKqvx",
  "key7": "48uvBnAsB4BXHydK9UWY2UJSsgLUiCy6TUXWe3DRdZJq7ocuKVzwwFYeGiPC3aYcgmWt4yFfM6rSiMEE88jmEhFR",
  "key8": "3m42XYNQqrEkJ9Y2r2daX98c7dv3jz1BL8DDUrsciZ5V26KQZ7jpX2y8d6ehVDu1R9nxWbCnRjHYVVzsxgj5dodu",
  "key9": "3SMSoLuTTXiK3DGu8ATZLL25tp1emK4gvp3gAuA2j7h8kWHstHDgqF9nybsBxX6hpFyc6mDAoAuQp9W3doBdeAmb",
  "key10": "31G9qsp8r7mcAteiE1dV2RmYfsj7a2dx5hJgcGsW6DJPtRfzNJUKMxsdnB3HeNa3EcubGoCaknss5T3UJaa6eqXS",
  "key11": "5ZxdRzo6HeLBf6CCeRwC9uSpybYW58w4bdTXYza8dVYL1LHoygjqpVM3AtnV2P9DsKpeWxjoA65x2uwMyxWJgqZB",
  "key12": "4zv4eCsErUY5Ua1iVkXvAe21bs8oyxK5mwCEqSGkSbLHKGWSX6C21LjTJF9comZ8AWBXdwEx6Vp9sF8M26uP28dt",
  "key13": "4tRoAoKbYNwv1LPn1gkKzi4PwGj5tGwuJ6dmsuxTD7qxjuEjaA2wPDgib7rkpmPEvJCYL97CRafmphdPywrm2CwY",
  "key14": "5uJEiFrPR5WW513ge5PWAPSgEQRdLsqoxtgsk6KihNCGkSS7PEcX3GSEvnYD7vLFLdtKXFgns2oWedzZpC6HePFP",
  "key15": "3w2dLeK1f88TQFH4wsXCZ6rQ97zEgp2rMPtWUpjZ5Zq3gmR59scsi12imvJexCY913Uv8tH6GXbGPqmpEwKfLqaP",
  "key16": "5GWywd5F43cXAMnS3y2DF9A2iyEEpckFDnSPJo1kEhy5EqSwvj28a1k6pWsgd1x18vFsX62b9xjMsnq867mc74oV",
  "key17": "5aeU8jWkJTAsP5V8Ar45oYdUPz4cgVuuDPyxbki7ZSJoQbrJAf3y5s5b72iWcpKji4vJQhwJVhmNxwBYBpzxEDzj",
  "key18": "4JWFyPUwrtX7L5APgfKxZQ8RNZSPTwcJXQkroZJCra9sxzF64HNBm1dpEhFv4yXF5zn8S9ekaykjj9rgp5dWYygE",
  "key19": "2cn7GeayK6bEajVB7T1yBLNsKoWB6da8hw4Fz3jay7wrxgraGpuenRbutoQMTMaV2YMkiPA2JufXWRBJhkFMjXAy",
  "key20": "5ADpXsnYGcaP1J9x3ZuhSRx6ZmzL166LMRA39GFunU5HZj6YeFcdbSv7MgxbJ2r9xjKh3wCdCQ2Di9qrKprSuGGg",
  "key21": "3rS4pwKA5dwEY2evNwtxtq1sDJqWYPCnjukHXNSrR73wi97qE6grnbxbTHvtfr6yyWi3jSu81VH2SzZ1L49Ebv7S",
  "key22": "7k3oLxsnRc3K5Rjcq2KmP9n1ykBY2euVKQWMXcYWmqR95smzDB8SgbU8xYe5b9swY9PdF4H9hbAvT9Q96joKuW2",
  "key23": "3rCyQWFFMhXVYV1zTP4c99okMzhLG2wbs6E3RdGE7HxBXXCvyQQnNnp9Jfm3w2hPUofoAw3cPqhHedsMEGpZivfD",
  "key24": "5RLq5wctDZdQxMeCtfJEqSELQey8rq2x1E1U3AjgaU3C5bCgujZxjdwDAtcxk7cSuBgh5TwqQGavX2JV5yD2QVz5",
  "key25": "4yWDFSW2hv4QNzbv3hDcL9mUcZNLMGmLxnAdCUJkEjmiNASJgQXoXDo9cg34APFWoZBKjmK3r2S8fKW4vmfScsRf",
  "key26": "3NHugtrjcp3aWP2enhveqAEzUzDtUHs4rEGHUabTyBZi2eNTaTMbvGkWPjBCg8H1hRuJzScKrfSU5PQvd8uNeyJC",
  "key27": "6431xbzR7iasU9YqzRDjaxj3aQ1gMCuKtHxAiT193y65RSGWuDnDjR2QsZdmzEPbV2vxfZp3C6c3qJPSEVsKBWpo",
  "key28": "4daZFgti5RU6geHTDYUvAygrnGAiMCFSkH39Jq6TrxN5TnMgwrxYse49sJD6Y3U762YSAs7VbkruRV3d6LATM13Q",
  "key29": "4UC3h5ggmk4gPX5JUhRgdjafJXHQG4PbJwSvkT1aEqsAVxpw2Gc35tgqnMaAACWVPhDcBaYNXexEQyJvzwWgLtuM",
  "key30": "3GcmFY1MkKr2CXiNZddbjvanY2CK15rVt3LGBwCsrcd6qDEWebdW3kvjhj55AfdGnzUhbrLrZ9BcgquvMVLoc6ju",
  "key31": "5ugChmmwV2fbpJVVxxqQBMkdtGDZmaKK6s7SW3KLVUA9wKRw6uqF596KVzsSAey6t8bgJABdQ2m3NYZmvatigwcC",
  "key32": "2DC9VR7jHR5u1HvQ97pfgPavrMc3MLE24UmeJRsnMEi8LCARS2xoYh6bCn1RMHDfGEt1ixhvqZgNs1zG9zFjC2Zt",
  "key33": "wto2wDVWcMBCGwZHawZhq5L9o58TvtLp6cK12qMZdzav41NJVKZtCGGLc8RhWAb9viGxNf6ryCb76shcWwqj9Kz",
  "key34": "3gLKQVUB2hGiQJv57Br7RJkjUCZyFrZuCzKeN3hbJhwDjRK6m6uSK6Awc76TUPsyJ1HGVsfvtNAQtxAz2sq9cit2",
  "key35": "42E27h1PFbZqoRLKnMFqphK2BBpt7xRZqzMtn7c1min3k8zm3ADqCQ5aQkZv2S3AaCirmkx7iJzc2JXkLPbkL8tU",
  "key36": "4gqgQd9omU15mLkJ4K8CJmiXLV3ELhPeNuQoWQZdRpmdcA6D1TUhhN1Ei3WpvvgQBj4HsR7x8WAq6QXS5XrGKaEY",
  "key37": "3tfEuvCwr93UrfX6BgnDrpRtxtkE7KBzgZihyBEJHTuBwNQN2BTfPD4LddPU1VbaRRigz4LgUkgAhej8PEyD6mcW",
  "key38": "4qwvng5oKHFW52jXckSUKzSdEX5Sp39nuGUtrZ7tfdSZYSHze6LAyBeXWP74ijkKyr2AYk9G2KVB65dUN5QdeQWn",
  "key39": "2TUvBD2cESy22gJLbSUYie58yxM9xM3VqaQJx5aZzxx5zHCCTzowiTr1EnJC96frN4a1AvHY3x4BA3xBWTdZiLzE",
  "key40": "43NHNj2JFvbBPqArZW54QJ6mTpqmHLDU4oUDV5V4TJrgNFKjNiYyS4aWJY65H7TsV6UynmjUKbBf2H7G9Xh5yFnd",
  "key41": "2jvHF2zuTLMLUEGvvEXcqb7PbH2u1LUefjdu7kGgTGx2pe3EnwPhsA36Y7uh4VUjc24cchFrjYxoD3VCJ7gTTnA2",
  "key42": "5jsw5uWLuyC7VWPn2WFdWSV6LRx6vf6kkdrWudBUkpkMtXiwsNT1iYKQzVoZyd46ZtAWxHKrAydjwEunQrN473PQ",
  "key43": "5HDtC8pb7HwCpqXYRGMRrQHRVSo5tpZFTosgecyFwbGCS22TSwY2trPQm8YH36xszCdqPUNdifmtvcBm3Mid7K4z"
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
