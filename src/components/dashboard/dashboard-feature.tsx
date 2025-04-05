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
    "4iws1CbGByHTq8cg271cCAAjBdihRYnYwW7CmrbXXXCNRttw5VPNaeRLExXyBGqQpb3HdgsUZZKZ4GyFhZwPoyzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7RCXwMmLZcNkY2BoxyuBZiDyHutY2ispPeU4upe7F1JzbufLh9hjdL3X7zMFJ5WBZtdQdCStFQNV9Vpj4i53J4w",
  "key1": "2jTvRZPi9Xo5XhbmCPshYTKCTtrajztdJxSRGn8QSE3aJfCsdGDGd5mNyQnuAMR4uuH2DpE5mGdCFQaSJm1MVuSS",
  "key2": "MLxthynzaR8Nyp3WHuXNez276aC7SCDSzAaTJsH7TXpW9pa5F5c39xrwWm7GsuzeiAcgWyRSbt8xkxUYd7TNeLi",
  "key3": "2Add5e8HgUF4Nm9J3vdaucHAi7Sh99vyEfDb4cKueRtJ7cbdfefcGHmYfEKgWsnPwNmG33GaUk64rajMYGcyW1jb",
  "key4": "2gju7vgdgFGTCs4Em5nLSErTQ392c73SFCA5U8Bb5ZWT6NH5j4rgqf4EjGqT6TUDZxW3zQm2Gd2uNRPnbLoKQDyb",
  "key5": "5UhMeYWxHfZXqSkSMkzbw8CD6qw5P7CRHGHmkubre8Kh14fSLjgpWVEUMP5LzEtzjNmdZZGKs9nYEAYqF8msPuEy",
  "key6": "3hjmRD5u1izQ4ZPmFiGNYrENhtvTXwK2bpZx8inhXdHSFziE8JobZJUwpMizxDgJ6Nnm2eNuKvDXgH8JYmKZd2Ut",
  "key7": "27PhWddhNJ8Q8LEmmZDquvTCQ8vwJWzq3YMNiMzGpLpp2KeGsqUeRHHJM7LRmvrgaZ3ufZ4JA7qeks4i1QuLWd6p",
  "key8": "3ZDdCAeSH8jJ1LuJdtUhTcbBf1Et2v9o3Agbb5aNj5MSMbh7shxkn3NJR8yAaGYE6S17GpdLzUf5Rv3gJBigNVES",
  "key9": "4tXxmSXzo3D79t6hEDZfgWZqV3fBUidKU8GwLLNoLFMa6L565TPDVwKBkGdRixx1g6AUm1LMYVFQW86cg7cKNguy",
  "key10": "LubshmgEzeaks8PrLg5AEknUzkqJeMTCfXGbdCYt7V5MMy6H6cMc4cUH5PV4J3TKZQD1E7rW69QzFdn3Ww53YiZ",
  "key11": "3tzTkTijW4nhWaqAcXwyNELkqLPNDwTKwwGgi8ZcBmcQCvcyLYfBSU6WMQAgrV7ZEf488FcckB1SEBXVnzweXWbx",
  "key12": "4Mvb4XQb4LBFJnKTgKhpMf79o5Mdz3cCsM8KpcaaRSz6Qj4Gq5sG1YHy8zKZcy1AqFHWthpsrV9bFynpDaJ2bNoY",
  "key13": "hcJ1NVDBHTFMZyzXmPV2RF6Dq3HqnNEEPxRkhnVyJUrbL8U65W15avBxBJY3w3KBy3BRegB3ob39GhTzsfdWiPp",
  "key14": "62M3nggtc6HcibASVH7TA6yUEmnqw2FPmTcruDhB6uasw8wdUNFDoAuBRf3xg7rvMNNFEbKS8GbQMgtYGhn1NaUR",
  "key15": "4rCdYnwpseSByiLrq7222WZEzPMWuBkKrpxRTSJF59rgLgTRCvc7wkSDKToGEAcHzwasb2zPmJvQGFULfwVpSUF6",
  "key16": "E2kcAmeZXMk4ZgeSx3waLnwHDEk1DoxRWFcT3pM56yriB6xoXMjCLs4zQ5tY2gXNpaChCF5gWiZUBGmhGhsJFEi",
  "key17": "3NtZt6Kb2vzqjyDaGLePJ3nFTLgFwwemoWjc7DgFgBZ1hpwWMsYZmuXmgqE4vvHqJPk5kuxQewHFW541pqWVfvb9",
  "key18": "5YgTrdT3seLPdee4EK56nejsWBuwVVRWzmhYxR4veCyz7YwCMxC9beiGVpB3UTsV8VQHCbAEvo3zmVewFiAZTeMJ",
  "key19": "5jHTBEhRS391tWW6hfcahf1Yfjy9RYr1KUDAe89gfchNHQYqfpbD9BUSwkfYKxA8BebaYRVyvTpH42GgS6Xvs21B",
  "key20": "5ErhsZBBb9AmCJJY5pLDceLYrHZ2gYAgy5E8XDnEDuKFJ5hixD7yPComeXnAj1ZNLT8tiFdo4tUqEjzuLiyotSSM",
  "key21": "5QoNX3Ed3FEPfKqe2pKEn5HhYEyGBvahAGGW7uaFjmnR9ehXNb9iT7CGmXmCGY4mjF8Zi1xMMdMxb6WWAX9YacgH",
  "key22": "6d4rSDQTSMnXW8fEJ2kBeK1q2R6w65WJ3B2V2UXrrB2EmJDWTskYLGaPjWRrjREWis7Vs1oKbhe7g87DzedL7pW",
  "key23": "SJtwLFsi7W7Dx2Z5rwrd4wop1QPSZKdsZjsywP31AUZUhp3V3TBgay37u8oEFUNvZahyPuW4HfFemGNzUsH5wPC",
  "key24": "KZe3GKewAw7KAnuuSHkD4VJDaYFon9G4Ftmceh71yStWgj6Th7jdnAzXofc6EaTDfvXSoy1qafJ2SoejFrncE8n",
  "key25": "pW3sUczNf6mbbhsq2xAn5JNyiDpkcNesc9GU5H9WyN8SML8x2AywFzBixrdRzmpDkvpNP2ph2x2crGJaSb6e7XR",
  "key26": "3BWe82HphAf95AH8ZG6vuW63PHLnpfBV9WERqT2yTv8LgNK2zKWY18dGsFkGGfNokpc4Rn1nCirzBBhe9qpCD59S",
  "key27": "4QByKR8PHh2MrXQuQg7yucjrgiPeNg1Y2U7NXkdTP7KmJNADN5ssSqFPC4hec6Q3bpXhsiwHBayREGJ81cfF2Vxc"
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
