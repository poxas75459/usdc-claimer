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
    "3tMg2vQoW7g4xfropp7NoZFxSMAVPftT7K6wqSYc7boRY4m2LpCWCWB1NZnH8ZG1VeDdGvvLn4qJQC3N2BAZKs9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CrKHMpM2N55FcZHk6KztRz1txReyvXvbCZVn6uTKjtN5EcZ1Wx16hzygfTuTxbPH1CDowsfAbasDTyDhe1R8cB",
  "key1": "4zazbirPwpRPMjYwMeNhi3M55fBFT61anUS2gfisBUxWjJ4q3cSBu94X7at129wHJE9ky2AAf5iDoXsnYi7KskAH",
  "key2": "3iH4eZD5dYv8YWaQohYXyBRjuGu1c8JpERH2WHgpa1php3haYeBDi7cYbVNBCPbqTozb8KypjfAwpRWgG61L2wAD",
  "key3": "3MAcynAVtRBAsvYovWzDToSi7Uph8Y9aKKCAG8QiDCPSyrmex1L4rMhsbJLjEkRUdXoWAyjkLcW2HYArqCfY9dZh",
  "key4": "3xB2PfWLHDKg8ZKxVvtAWBeBZitsxVSp3LkhwhWKu9C6VAvbF7Z1UcwwzCfoPMLB4wDtASMdCAw7gAn9XGmr2DFL",
  "key5": "y8yHyPCd1FoTLatsBgjJQqb1ruWGX3ov1Y736FtCbRLsHwARWE2BdXfjFtjA1UZ7QeyiHN7ojbH8V3rHe2NjbzQ",
  "key6": "4tzH2qfCaMdyD6d2Qn58AUtZwzRR7WNxrR89o3V6WRXmRRuJwR7roGML58gyxJjviZTFQ6WUABRuPEzdUw5Ke5vm",
  "key7": "2rsTMKZwLBGy3QqQZhdjUgHienX2jiqjPpxicwrGAbya7JNXB5Q13ra4WtHkbnfJxMst9zGF4yJZkHGdqFeBc7cv",
  "key8": "4sEWneobBvk3YCRorZmoX9cjHtPznHGrXTcSHvh33ycN81dXgrzzBdk1e5RbYwBU6EQYxVk7FxaWPBzaVv5XyP4A",
  "key9": "3NQ4UF5xfjP5bD7DjUDCuGjmF9KZa8wCTUfvUuNLzvCCmaCqAfcQMr55VUrpGQzEbwN7mV5B1sMhBr6TH6gzPWtp",
  "key10": "5zZStXC3yzCYFqVVwyakj5SUUMXHXDeT9KCkN3kTg5cCM3BopWNJMcE8z5pm3727GGGPVo8fvBaFsYgyBAmzPqhU",
  "key11": "N6QPBpRo5Ayp2yf8wLhCxxovqgDjnvWXEWDUhRNkL6zeaXsL7ymRnFV5QGRBqiti1FP94geGW49U6dE4cG6RVfE",
  "key12": "3M4oRDhPVqTkEKGyxEVXnzpJ2bdcwZoCYjGrCZJBak2bvHVrPu9AYncVoU3UCpXbqqbQ7pfU6FvR3fyTtRftS4o7",
  "key13": "27YNFiJjKnoBjSVswTiYyyRNQDL74BfbVyYPbNnpUN9WLW8eH7pX1NvRR4LwFa6FD8bgPpgEXp7NfvaQx9WSKWVR",
  "key14": "2chsJeS3efRNhtwH96Fic3GEVknF4ES38pKSSmgyuMDrsdrizwEHYygojqmAKBm5cTfH6qy4BB4xTZMkkUYwXc8n",
  "key15": "55QfrE3baPGRKTUGzgqkr2gi1UzhkwgCnpHwEhY3h9fhq8zEpwVgFKH5BC1XGPaDPXPLaZMZZG4EAWq8Sgu1zwYd",
  "key16": "25sZBixQUbuggLrKkJKi239LNLDm97qdGv8r4T9jqKCuyRTdNyQxDCYvB8QbxS83FMobpCRBYd3rrsTQAY48Jrmx",
  "key17": "2nmLBhPDDbCeBCTRyy8ZyFnEqTQqFh3XLWVz8n5WpWPfkYqrmELPbMZThTiZYmBQmsRvYd3cBxYMTuPMkMHdP7or",
  "key18": "32RwzjkLzG97d4nLLnQQsKPMz6eXZGDGeHhwnJC7Dc2SeGjb9EYtitVgfE3Q3n2qEp8W3iSDwoVJWKtDJ5t7XXqZ",
  "key19": "5QsRrZHApvFmTPooF1ypddnXebziuYdAWoToG6rzqH8Q6QYRtGVJhrous1iFv4SyTVQ1Ynuk7TgoPWf72HHdq6aA",
  "key20": "2ZuQYtsn9fsE3DFELSe7ns8CQDfzjT38qHMiesTYb6NnDRbyThXsmMUzkpMd2xJFVeCUeKL8uWUXyXTxJMuPjFz",
  "key21": "FWNnjrsf9kDfbRu6Ut7ARNnootR1tWDTnurqmnnu82FAeRqnhbHPyD3U1ePjArDjhUWdo85yFWBkpSM8zCnnvj5",
  "key22": "LJXczSQEFLGxs13L7FqnwiLovXntCf35fdUrCRf6Ege88eABpzbekFrCz6vHjHUYGmswiYcuPMNAmQ241Rj4UsH",
  "key23": "35RqRezJ1XwTxk3h92dq4QKhKPA49VgZoxTwpStijErcp3mDoqtYSNGL6STaA5nsfYoEvquzEYcpb7YkLHm9mUky",
  "key24": "2fW2UjnCLgCSmf9QMMLShBqTYD4XKS5sYqsKXG9pLzxZSGLkVszYx32nRNXk7i8Nyr2NUxkFVBs5V89wE4QCUyPA",
  "key25": "3UqejMFV79iox1TZUshwieQwpsMwPVvJiC2jHoMFzhEWdPnB4AmKtKLeiYPWGtcPwToxJw3dqVCG3JMHX8MuH9PY",
  "key26": "2amXnzLfszucZ8bvC4dWsoeaimH3NUT2wHoJbdXq2UuWCHUV9ZYpFo5yvYhLpVVsZmSLxCyNaLJY32RG9fFAE868",
  "key27": "5bUQbgVz2w1vG5jaBWbgfqB5GQ4zMUFaXVE4gGNomfgfjWt6RfFyQaqrZFgJ1bPR5Vn5jwxAWnaGqoXzq8zKBYqC",
  "key28": "5qd3pTyGfMCfVzPRm6kpJdZbspLLcA2Q7dEp2DEXTPRzvQQEu8dL9Epr6CGSsUgx4hoNjyuCevUyQd8ea5Z8eWax",
  "key29": "3CfvHg1zPAZtrccDZXGQRmyzeskxE1tLvxbtUefQTjAdhdZW9exjvuRMKhbMAgUci7tXBc2Ehoh4K1XC8vxV9cc6",
  "key30": "45uttkn2iNphisBqReQ9PA67i5HMbkUA8RJwsZqZHmqGuh1ZJ6J2U55iP8onYcfgZXvCEaQipPmZ2NKaDZ3XpFUX",
  "key31": "RNQm5m7FQWLxdiWKsPdAUgLXiZ5EqD56KPziRAkpNhqXeCm7XcR1bqR6bBtsFRRRiQunqFW87TJvAgnc4KWY9uo",
  "key32": "21qy2cRUhGMNQK9A4cVLjmTKSro6ERBDuMBZTQNNbRyQwvuoa6k9bZ85aKFwhqWzqZiKTdk2CEHneeqHphSzNS4z",
  "key33": "3xUFhBn23VQ8Fz9Wxgy6H9vNn5MCtPeDuuEMQDbTKooAacEAr7gSxehbKMmX9dCBXG7G6gBJjPHXPmi63vPWZvPv",
  "key34": "v7qC96vddH67x5xGDVTT2dVQD28j8R5W1E8DDeVNYBKDpjdtU8JmqGyXTfdfzsA4CD5WRCBTTZNNwFWkhL2XP5t",
  "key35": "4X6DYfBZ7bxqPnFJbgY7tdiLkibLTRy6Hm6uz2WDcgACybUzfvTWBpznBbGzUJcbD61ZqB6K4p78RfJwFfpgz6XE",
  "key36": "2Zqne7z1wid8FovEHvxLRxbK5ZyDgpKyWXXy3h49tQJBSpyu467dKby3s9HKpU2Ak3nDqufLo678ZRip88ej92dU",
  "key37": "5ojYgtfdXJKiEntxQxrokfYriBjhMc9Zk9duj2Viv2A7mbjNGy6agGXJbAShgRBefs4B59PdP7vvYGybME8ByGBJ",
  "key38": "3TLxhSp98GUy2qkuLJXEsuwdrvSg1cpSUW74V6XwoP1CE3gkgXhwqRenPQWu6qVy2BuoxPfV4bZBa3nYQSv7YKYA",
  "key39": "QCWH6EVhMgXzjhxt5GUFoR4GYRDh7ivPY7H91iEXC583EPvKDCD4mQBxaPWH3bmMoBKMxQDuNRNq6LB1CBiGYM4"
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
