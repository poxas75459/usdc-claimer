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
    "5zu5Sr9ZizRghu8y25FvZ361fz3z6sEwbFEVRsDoHeiJD4LayZLHdJDrWR8dNjdDxV5SAkEpLvgRjSsQb1NuT6t7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "571gLQoDBCkRez5aZDWyM9r3yfJfQyBMHH1FzrEWFXRod8jkDT1nn2jNpYgqVjairQ2HP78kC1DmU1qGbobgcT3P",
  "key1": "29GzwXD6ybwozscZV7ieN8rSuSgotHEhsxTR9fkf9Lw77zeyZkJieFMoWrR54srvd5Nut7AuGSg2bAF2s3rFJUdM",
  "key2": "2CqdgzzP9gACsmEaR22bcafcvBZRt2ux9XavsjTBa2XsSo1C6BGqttAyiPsFWZ1tet72aPSD5AvX3abcRUebAtyf",
  "key3": "3joWNKusZgruLT4k6mUhRb8zimU8QYaW6JQSLqv8ktM84BYZrJ3oyEaLCP1PAbyem7z3zZQ72FYCa1HZwUZ4pj8J",
  "key4": "3yo1zYpmxHdb1NiZrHniRvZx4EmMdGvhsQsMsxuEAZPiWDj6Z5khqELv4rosHfGyk3xqoxW7CcuJQKT5hG8qiUfw",
  "key5": "4JBPfwCzfriHcA3zh3RVHNALeWeFm7azPbP2xUXFFcJD97jAAPAjVjjfBiiiXYri8jSGWCd7tmuRjunjYyWQ9BSo",
  "key6": "5CLRqbrdvToPMVtZf4sNpRVaX4J6g8Rcw7Ycg7Pi765q6KCqkR9N16Jyimg28e8dYHMaY9fPpH1z4MXpi6Am77nh",
  "key7": "44mYDbzq1UBm5TAXsm7NQ2Z31TgMN66LYxpsDSq8uqfHpYQjcLreJJ8gbpyXpxhQVbU7mDUmuc6ZLSRFoAoWVeQ5",
  "key8": "2wmB8u6VyiHJubrBgj5wVEzBSUw5XJFViyLkKwBkCFQYHZMamZFDwEMnUwoemSLinB3ho8GiseyT4U39aWTRkyzQ",
  "key9": "3GJCuiEYphwkwmBgV9HhGhMGnfgaiXtN8oJFR6tjiqcrgPLstNyDSzywyEZSsXJ9ScJV9CDbWZgBHBuBDELhm5Cu",
  "key10": "4RjPxbntvJtyJQxeU7f3e4Z8yMRGm3UZybJ944g44TU3aYD49kpe9fTb1EQSviYMGeQPumwvkY3BmheZG9HGzz1x",
  "key11": "f2bXZ7mBKEkw6j5qPBbXX63NvhGTwQwtXDbM2zvmojoy8cfYmudYR3XeVMSbzZLum6Gi1x9FbGfZ6CzQ3NLptth",
  "key12": "4ePRctfYnN7uzak9beXNnFjrAL7nmWTTNdHyobJBuuEACJhikruE49vbpB2NCD4PciMuafiQjaMLnfmQP5LAXhBy",
  "key13": "3xAva2piyxVAHyUF4y7ww15JiMBNGjJwd4nbjgEjRjQ9uufGMv8jyyed1bdFQEmne9hoyy2bVPERuWas1isgU2yo",
  "key14": "3uYNY1YMtv9V4QDYH5K8hb7Aiqjy8SEMCYMsoYuUvfW2cH1rQj49z3cxsYksLBQkYA4sFeUGzjLV31uwGccm2JAQ",
  "key15": "5ciMLyB6cAZpo68VQg54J7T93MaecdmKFAcfqTYucLH6MQwzHBg5CWbftfq7hfK9hjRAYGNrPbxhygyUCtrbLHxT",
  "key16": "x8iiB3K17P3ihZXY4SswGBTsfmeqHSqDjiaE5z13uRipd1JhGSVsAgXQuZm9Wfr9Qc7XzqHv7dcfGTZU5yvB1qc",
  "key17": "2YfgynKCCguhijKvjVXwJMBKQRct3xrvUNc12kwqzjbmGR2DB1ePxwA3zqWSGkUMi8qcpbBPe1Vu9PszN6hrYoEe",
  "key18": "3aMvvqVsZ5sChGLLEorXCWJA295FRjuagVKFKZbnzcMrRiHwhdQ1nqnRDPUKzCKeoB2GDezBjho9f15gP2w1Fk8S",
  "key19": "2krDdqVXFT6SPxy39pxPNt2cfMCV9GfDv7trxS4Aoo8BzfJmJtBqYq7BLzPieUuNvE7e3Yg4NLFvJXbL8bRGEuUZ",
  "key20": "8XRWRp1dNYE6zbn84vpZZ6xHxihydhQoA37MFFqLssYnFRBTrPtM1jkeMHnC1z6orW2qEU2VCcqrzFcnPMvUCrm",
  "key21": "5HsAnge9rk44PKD3uy8Pc1CTjXA2TYiziBzbv1cKzyQshZc2Nvr7Djmb4qc9dzggfa2WW2G3AQehhThrYGGvM71o",
  "key22": "YtQMt4G6FWTcjx6Svymad3qBmdd4p1Zu3bDm7EVLAhFprumMZcWD59roBkxnVmoq6mcjBuPqM7ep8pULYpPbDBJ",
  "key23": "2RVZ1EZKySv1fUvF4SSyuKMgh28jLc4YmMubVyhD5YL3fnGPdFM9EY23i8XJrQ76nwtbpVJttkmMWJDmfk8xK9Vt",
  "key24": "4R3Zv2AGtM2BD5WxKvcdEDygi41HaDZoGmRnBzb8KhxWSnKXvxavxrK1kgKVauMzoAYWBT7UJzqMsqYCg714S65Q",
  "key25": "sMQ2WjyHM9qiEhq5VBEBDu5aXNbofDuKLaQWWMgykspicgKZvNYw1UPjovShxnqhfbHutAP3gdhzCydoTGxj3d7",
  "key26": "56drJ7ZBA9pLxhZymierZoTEbaqnzDBjBGsLDyAsVaJbgTEhduQ1V8r88AnxYF5E5PsuYX9fpjfaPcXn7k21V2oL",
  "key27": "4kY82cvPaDmmnan9CyV9XhLN9MAzvrF27uds6EHB45Ze7Fh6wQnpN6tNrLpQcNBFYinFYhdUyGcEBHwa4d3dEGb4",
  "key28": "5AZniZ5tDdFJwmhjPMWaujpNp7MuvVNdzdjerqNqfWJmLhsXzERWC2qsuJqDJkiMGZK7Nn9YwFFMqd2axKEN7XT5",
  "key29": "7QnV2xb41vwUyWMie8jKFt4vgLtNf8NqZ86T97dikvkL8h1qAcy8pPd9SZ3S6pUQisjP53enQEbdNhrRuiR2BAN",
  "key30": "3QhUNVGTGnp6xeHps2NyrzBKcfLMgE8bFHN7HvU2CfZDeRNjZV9S4YqC2uRHrLCRuMbHt7CqSZ4Tc1wH4thP8f9V",
  "key31": "4joKfyTp9YoBhkT75yUDj4RyFmP15FzjJx8S7dptawPXNKo98icXFDn1trCM14xWSbPSb6x6MtBzvfsnL5QnwuD4",
  "key32": "J796YgCHbgbJJZp8jFpg8qA7dDC1L5e2V3wb7g5qvW7T2sCgiGetoJ9Dj49SVjBVrUB6d473r5noyGe7Sn1r7Dh",
  "key33": "2jfBps38LfjgAgeF2BiWysC6PG5mmagRANJNrNNbSJXyYcNWqEXgJnRA4siucjBHhfPBZwEyT8JuobbDu1FWZ36A",
  "key34": "Uf51AvFa9x3313efXqSLLcLcbN1Q9W15L5zGbfuA6G2xSKQ9fW5Wo59zycd2DhZAbuhFZ3xkRQom87tqnpi3aT5",
  "key35": "3KFyuaqUh9F6koAbfQyip3umrPeZ8yXRUSTLiNd6xBNYpniGbmGLujWLSjohXZ9QLGLzS7xeLYXNm14ypnrB42YP",
  "key36": "5Yk33xKTEJ4jUnqoJdXMxE4N3uqFgsCzyZzWsm9sav8WK5b157Ut2hzDzqshddExcxnz4ScRuXw9wourYgnYuaRD",
  "key37": "4jHNudNp46LqGxg1T24FYM7CFUdAa5zbmQBqZSXL4NGmMngiw2fzQdsWPzSUXCs2Vqsn6U3qV6wRxjJL7FxJ7MKv",
  "key38": "5RG3FHxuff2YFN2uMUhEsDB1Edy4TRE5HFsGaqcMN96CjELWnyVK1QUwKAoSEpaeKbEefbCMahUERGdVsctxuzB7",
  "key39": "ys4H2jP4ogToYbyxF2NgnsRVw3ad8LmrGLGF8FEZWz4hZ2SBsSjuVohwJS6vDrERBhBcPnv2vaFYV38E5xF7SjF",
  "key40": "2XNpY4NoyYBBtXtsmrSLb8pF1RXvLPAcFzgTcfAGUVrH2VjjGxKCxUpDP2T6QJoGwvhP9F1VktWKGYZB7d5VpuZj",
  "key41": "2KrfMuWVfpbNajRtUjxsBmqAvWCEnf3AhKEWmiGQxTL8HxbPZ2AS7Ah3E6KBf8Vp3y945Qvar3T6T5H1bFzLBmE5",
  "key42": "3njAFh8NqcAcPHNP5b7bTKAa3JBz1za4cQgY5ZYdQa7CcEMQTRdKFWS9ZJFfn37dA2JsAeuj4Q3o9G7Kf5q4SPvC",
  "key43": "5U8jQN4x2CRQ71gTNEdpvHrXQ5oUD7CafN4HBpWcw73pdG8ATT8WwbGmhLrNAcvoB51FkJkgyqYQkkWSU8urYPd4",
  "key44": "DH3RqLD9QcCj17F6SNxGjM9hE6bMPL4r3v51uhDZXvdWCTw9xX1Qweq26h37GtbujFcUfkQn2vrbBHJqyyCB7rM",
  "key45": "phsrSWK6PsDbHJDRsYHLbpkvnHGZqM5jAnVd7BvedQmrWAJVfFH3why6vFiefj6x7Z9q2Zo1iVvVHYxZ8qLGAxy",
  "key46": "3VHzpqhmShbifWSuERyno5S7kw47eNq2gvanYum4NkkgPdPNoNXNHhgyNeqdQ4Ar6HvK8HW8oLk3fPUTdduur2Ew",
  "key47": "3nRUNQd1rsC3vG1jt958GLwdjdVasVttnPVRqduBQxoxvCHK9EAgdMJMRvG62QDmv87eeVFs5B96tuRpsMGcXX8t",
  "key48": "2jkPWJrrpan3dRvSe3u1EjJ3VR3TByWn3LFZSRaCJj7VRPiSZutDuVi3AYwXgKJFLuNm1p2cjJRtAmbZbxFo9V1V"
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
