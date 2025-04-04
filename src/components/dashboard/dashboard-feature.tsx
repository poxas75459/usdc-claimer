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
    "4B1TkG49BSzcFhqioizxhuLiUJxfiTHWqfcDLSEoAuKVGyfzYiqPmjy7vzLt6NDjGSc7VQPVaSHZPNWJidDZEaib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q1G3pr8aCCeRQzKtrH4oZxjoWAUSNd8S44b5PdYyvnrMsANh3A9zoeJ2CQwCrdKvoNkatgVbyMYZDUZeM6K5reF",
  "key1": "46GBVyNqF1ePUVwZ9Qo1AWRhQxFDjXEZD1UMxUzBp6GHgSA8eU7T74QD4Xw29nKZNSpAoNmPDfztRZbgKcKis5Fs",
  "key2": "4SQJF24dkn1oLWagykWVyjNUDUhq5jxcsoQHEMjRrfAhSsu6AyUo9ZfLtk1dBa1ThFpAnA4s9zao2UwqUvQpU7Q6",
  "key3": "7RUyhLJ3AdM17SWnL9VRGLmQeHmj1hgC7iRHcUC1nZRe7yTwA76AThVBGLKbBMxxPkcWS3QmuixSMvRa1mPnoYZ",
  "key4": "5jkz2TjQcSk4T1DxTPtgX2qu9NPbaJ3hPTNK5kGeQo4iADkRbns87SqhwGuuvgfXYmSwQJ2md5VHWe98NNwfRBXg",
  "key5": "4efgxytt59ZK81v8vmvpMCN6a3CjqE2zS52w9bfyNxfjy7WueZ2okF59VeecV3oN86iir2fw9F9yss37PCgmDBoJ",
  "key6": "44c4TcTzaA8pCmXfe4kKyZVwJ3t47jg2nLVtMK9cuzGh4VWugBCBwHbysowHt6sSSPtmNkqZ4ypMuiC3bWoobKk2",
  "key7": "5GeiSFHneyofmJJ7b72UHsZL6urwXgbN4JfdXqDbnZiGuVkZ8td4Zkc3HpjBZEq8ZPTsx9i2eCMnQ9vZJxNtjqAf",
  "key8": "3gpcJeQWm3WvuQTrkRWWpBamcfwduJLTJEEntSXtDgE3iTcghDCjjwihEZizheM89bqdZKjMS8GNynZRmBXhNMga",
  "key9": "qfPWAGquKuyWCF1gAKagZs3mUCedNNFNcnd6cGRr5vRRUHs2PJomn57JykAPU7iLP7jMmmM7CAVw82kKYdXJRzN",
  "key10": "3q142eco5AByUS9wTedLCpKo3WCa6CqnkNbJZ9n8D84FX2ME6kc2sVgjj5T17hB54Cobueghudh9cwrZjcFJ2G2L",
  "key11": "5PCzoop8kB9fn9aAZzuuH79Jyfou1TsMk4nfXZkLLyHokD9EASZnyoFDAvjoqkU66YHD2jQ6RKX3sCoJfE2tXKYh",
  "key12": "3Wnxp1zePzYsaA3jgRGfRLqqprZin1vbaNnTKcJ3kr1R6Wz8xQFChBmgj4yTW6mV2iHi3sYVkRQqK1TyTLvrZSJH",
  "key13": "3CSHq2kvZLVGTGjhjobpsyqT61YMxbU4YRfkUGE7aYcpp2JmSRuidzYG7jKQtvk61EMD4bQmJugYmJThSMMYAkWM",
  "key14": "2Ywjbt7RnQiMa87AMxzoYv4fEcwij5dKZL1x9rCXW4Kam5D5mBJ4tMgK4fvScZ2uJm5AXkbsUjmarQvWufMBxBqU",
  "key15": "21SNwZnyuDbGnzv1vykc9pEgThYe54d3HdS23dCrjkcJw5DtqV7wk4RD7TBrEg2tgteDXMDFMMJrZYPAm4aT9tRv",
  "key16": "3ECauitaLQLTeCpwTXoiyzpQmBNodZC8xrnYMVYR1eZWTFT1DuGdc3key9gnT54iG95y6z2J837YHqzkvNET6ij2",
  "key17": "5aw8XoMTh5K2pnyAGh4fGzqQtBULyuaBxcAkPemKEbNEXjRPSS1h3WfRdPx8Qmi6yjGHDhMjkx9MZ8cQTWzAR6rp",
  "key18": "5sh9yP8XWjTRyMUAZKTGpJoJVsNvZX3L567RKXuUYrDW75yqEscapX4oHp9Hz6ES26ZWo6sLGajpsnd4rzRbVGWw",
  "key19": "4aUt1Fi1US5yUEVFoXsudXa5x5WaEwLFzDsXtHbWsEkRbJAXcviKCjGCHyYqHBfJYhVYq8tsL3Ry34GwXsJSZXT6",
  "key20": "3nvB28qFQogfncLkiZuigWfWKQ6wr24tWaNGRJAza5GtDDQdWAhviqDEdMF3KkshGGwuyk3HMCuumtvgj3bp7SEr",
  "key21": "4Xz2sqMBsNaUv1vTtQbGBXodA3cGq7kmTYjrPGFxp239J4CEGHtWgHedkXVnR6A2zAw4PpB7oydEo2GWuP4E2Viz",
  "key22": "tYojQ6Zi4HDQ8dS2HSBNEcX2M3EznA7oJgW6kMkXASuSLZ8AEi2xhjqzPbjoB4z9ieKrYL324huZDwqbnqfhyEU",
  "key23": "LGL5eUXPFoZzTiokHhEcFazi3CKneszYbsu5iweTHCf5wsJwiVToY4EZphyHmnyiGcCeX9wbcN56pXR7dhpos4H",
  "key24": "3jgL5y2N8pJTPd8KxmPA2NYcG7F2UHA1ymBbmAzGWxX9Dzgt1C68irP2caoSxAJbrguZEyJYzQcenYpbzKntLKpZ",
  "key25": "5coL4wEuwdAhxCURP4h8buHgpQzMvcmYE1bJhb5VgdYeL9rWPp8igYQrHivmfEnFrgrRLXkGGVru8o2wwbPkbPUd",
  "key26": "2d8Q34ev29BNLzsN6g3ignr7VrED3C2LhSc1yCJQC1bCMbJvqYBkhmBubCe2xYr3dEnGYmADs5Scbz6utNEQGtqQ",
  "key27": "4MWLy8KTMUBWb3XrF54zEYxtGfZY4cmQAuU1D1aBAiWiNNsDirWvJ3EGtsS4KZcTeAa497pNTLxmT6AEUhgDi6EC",
  "key28": "221kK21TDS2HTkPbsfm3p2EM3V2mMMDgAvbxY7QQYj46Jffv6BvSddVJhb9vskd8SVmP6WVgpe88wS2aKZNx3j4C",
  "key29": "29qQoVgdcz8vReSBkJB5AZGZeWur98XzhHYezMCbE6FgLJmJSWVCVWCQP2ZsN1734GV7Z1yqhd7tnkxqudX5nVA3",
  "key30": "pGpTHBEbH6b1iEa6GupykndqJx5hZ7pJCwDVrournbmuQ4R9h9m4UKVUpmAbc5fQE9sbbm88qhxgWLr5oH45q5K",
  "key31": "3mW9EbXsEsbaewLkSSsiMmR31cYdzh1EpFAdZoFwdxuY62DCmKzKa28dQHj6RJhx99CqKkEd5zL2gyYQSe2aZ4pG",
  "key32": "4JSyirL1ePmV94cYt7tjVTBAAeXnCoSZgjLQvnaMFwxpxQedKNucay151aFLPfQHFwRzJSfXWayyfFf8HFQkqg2G",
  "key33": "2VfsRUSfkmv3H74w9XZqMXNnRkFCKaTh3mVpNFK3Top4g6VGXLSE5FWjrGy4KimUYUpTXpMxi5wzeeQXHHHt9FCT",
  "key34": "RoST3rPHedAZ6mE9NLX5md9hJvhP2KRFjokRA1E949o4Hi7n9w797S6EKwTTpC6GhSZ99GjyCWHSzoDLifaCvYM",
  "key35": "5ABk67xP8JiEYXyxWnLYzQaSMjDJCpX5MzCahgFKeoSV8gxma81D5WjrPJonR3hhzsGAsVZbpytwtR4X6CANkLyV"
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
