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
    "8Nyf19oQoejPJccHH8QkeSh2NoPeg4GaTs7MsPHR4gt8AWWXSiGiRYpt7H1kNRgsSXWjeu6Xse4vVG1hjvzP3fa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TLhkn3NYs88xXTUGVuM4Yg26ydUb38Vywgnbtvr1VY8Vb8w2vR5jRvUsXJvZHgmLtonsT4MD5cSQimp54oHiMHr",
  "key1": "3qNu5wD44AaEBNcPZgc2zeQqTTw8eCGEL1jpT6kWhg9cWfAF6aH2TrfYeNeFJF8BTMPpdbhYcNtrEUG4nWWzsQ1a",
  "key2": "36FTLxzRGkf6bmgDhfdsNoXLMkPYTfnCwhPyrguhhYDTs2uDRV16dyLyEXLYeZfbnNzaXnyXun8zFWrhQfGRpGDd",
  "key3": "2CJXgMPeH6p5aLttG2Bv8Us2qtBA8zXqyQyMtbYketK17ZisXpj5D6awMDsTjtW7evCftqqkcFeywqBCcrF4tNDj",
  "key4": "5hrv52X4QJ1vNne9Fcxnx64i8NLMiqUXXAQnpTXf8osVJco3G87tSdHMh1Gdr97s8mDYZrYQyyQwL7NXdAqmKZHx",
  "key5": "3zwFop2AG3wb7EFeE8o2uAaCE6pvo64BnqFwnXon4NLg4ffSaanUg5R233bBi3WxRXPButbNHX3kgLgZU94cnJhL",
  "key6": "4rSjHzzmZecYfYiy7tNqHeoJPcqKDtgz2Gne1FbXyV9Fyg2K2EGBS7kB3UotjQWd4uuj99PLqYwAkTYQuEYFKtvm",
  "key7": "A4F2Cw3itmNKHnLY4vRwwddkGwXcKer9qV84mV8RyjjNvQbgW4z8fFR4EZfERTPsJAFLFcpnpU1vBJJb78Au7F8",
  "key8": "64VsbNgFCHpcZCF9k1E3eVnVGSJRReNJhagBB81xzHsDKcfeDxsSybHVF7VKheeGUZto4hddc3Gqb2sgU2vZXY5b",
  "key9": "2Cohb2fibndkf6XbeincSR3VcHd7tZZeXwyFW8fXYdHv1VdZQFZxbma4DRpVoBRpJ4tryNsq6Zsmq7K8Lad7J7df",
  "key10": "5HfG8LdwhN8RxJqkuH2XoaAGggUpc7Z3mqqDCUoY2ZCuxRN3XJiWS3HJfXr6N9fSDhXDBbMpTLUdGcmf9cc5v4xE",
  "key11": "ku45uiTURjYzAppYiZLBkzfRbSDAnWbhTbc9CdyMtDAJ8FGkDUkZD7KeTkXemhbb7TJdtqvD9TULAUSz2MtxavC",
  "key12": "623A114H7WbBP2G1u2QPokkZGZ8JJaPf8665DdM36PiPB6vx9BUUgLyqopsf9PjHuRsYooe2VSgn6gv5p4V4FR3d",
  "key13": "5dWarwHaVxFpB1vq9Hvj2yw8UKBVm8yi9vfB4FAmKstCQDdxTwiuR6eoqYgyjGEATmEVuPmPnswYQPQHoPHrHzzf",
  "key14": "7KdvEyy5sB4N6bH8zpsH4fv9asfWDzkJN31QsMmrD5UwLhqDRjybX3kjNHzKgtSve8PnPYWings7GCxmES7GTSN",
  "key15": "2NbaFJ1HCrGPgtgNkzFBw9RpDg75ekA7ZQdtiGQZ4XMEENkzQSeUkzhBk4fSxaK6DP9p8VE915fRL8MGNFTBNY7J",
  "key16": "4ZXoBJNJx4bDPi87T7Yg53SWWBTZ5JSwa4JKhbGK1R6uZZEhXLbTXo43PJZ3ZBzsZkmAxQhmtdgyt5cJcUM5iDqW",
  "key17": "2QTQMUSabKzm3Ar9Fvv1GGjhFypvrRrVURXfwS983w7i3m6StnHrDfcLbEAmyYeeQAKTjBwrunUeni5tZHPYXxGM",
  "key18": "49VEa2DsHASPQmK6NcVyv5Tv8fgxKLQqmfr4y1tuPe5nxwUKn6fEazd2HKUi83fKgYgRMTWtrKoHkRrz7QsEcwGv",
  "key19": "446Q4CroRRn9fqo8z2aJCWoY6x3aEpFhZr3sw2dBAhkwGcNP9ofzTBcA884S5pbtX2EnskYUhKN6jqefBhk3WBkQ",
  "key20": "JXBTpCqMEHpdggvJwM4sQTidAmLyBGinSvSyyfxeQoPhUtbDSC7huZzXSHA5joS6emooxsk59isJ1EHUdBLVxdH",
  "key21": "62nTgFY7ZVSDQELdLf5AvVGTYwV4wrAW2mAJGqULfxQ1Rpcm39FFnuqzqPRTBk66Y1kCB5PbU3kGqn3RjPeRNKNR",
  "key22": "41n5Zkd7hKb3J3yTMUpwPYFZrWpaqTdGZTfh8wcYKbS7M7WPhxc4C16jJi6N689BshhoHJr3aUcr8nK9rZQF8h8J",
  "key23": "3op5NuNJQvbPqFK32FSs8Ft51RnW574vYvC7WvV8m5kzcL5KN5rdNrPpDBPqpVYkNZea9v5X5QvWpksoWG3QucJd",
  "key24": "FyXMCJBo84rh8DtgqwW2VTBx3Aak81AtCLHuRiWtykaVJEzGeX8qLZfT2jp38L6SVHkbfbqXWXfifX2Ap36xuJu",
  "key25": "5theZHubaUNP1TZgfcYQLicQSLEevnWRF34YyNqsYovebysS3gt9addUdHairQKqbj2Np6pmCuW57Hs8bJEicwwu",
  "key26": "3WrmtfkFEMCncTApbZ2Dy9RazSqwp8sRsA5VLXmpA3mdceeMhmSC8U73N8hQ4z9fqTERSZX3SRdEz7cU9iR38peo",
  "key27": "h5eimKR5WfgRzkNALK3yexM1dLFqMyPttVbzRfhbxTv8kXxHpgLbmVut27jtYXtKyVMEtPy2WnPTnXkYr7wdK3C",
  "key28": "4EJraZJtGc4kdQA4y4pbJv7TobxoXh7Yx43MiCyoeNJEE8eZhT7t6mgbftmYjBB5KC31p5MEpooax7rT5gM7NEcp",
  "key29": "5HiRHGhKNgC6DbRxyaWaEuZMNvSnmMbPzQFJ5jUggLLRD8hL4kMV2AsziFKmBawiHPccJmwhYfvAY8DA5tyqcETj",
  "key30": "d2KueNAUuUMrDoWoEk4areeGzEi5SUajViEpzohFxViZ7xKxbVGCCohfZmhonvgNhrmwJWsaDC7uX6hYivRp6QK",
  "key31": "4WQnChdJA6KjTA8kaZK2sHqXz1QFLm56dUxJAM1Tuh24YZbkJBjT6xDpnFKjAphNsYBxqMRm7gbzmtJKjf4Ga1eU",
  "key32": "5FcgTfMMA1T8Zro2sKYdqkURQURFU7qKzfhYme7FbRLyU45gzWUZGdSLC8tdJWPREpkbs1eaww5dtUwSofTzE4Pi",
  "key33": "2q2qGVQi9uVn2skSiKJWXfPEBEXtnVkfzzJjiLZiiXDLKCXUwCnzQRVE51vT4CBBZh22Wt7p1wxrn4zCVYzGyEpj",
  "key34": "2cW3LqVGuSuJ7E8WZ3LWQQwB3cm3TYsoLdMmehHUTp2WeQocSzp3D1WiY6mAJcEayZnrQHLcsMKv3L62qonJgZCp",
  "key35": "24qnv9KpLqGHW2ws5qCRSNLZGLCnBb3dZpw4XGA3zDXrZCZoXjcHPzS4JEguCs8Pqcw7JukB1hoeQebaSjKRVrVz",
  "key36": "5ynE869bAWbDxrUBQxncVoBWEnXnmP2DngTuCfTHQ7rH3SGqJnhBC7VHdTVVCA6brAjE78AzqegYHEawYyZ1YWPc",
  "key37": "36XSyL9wUHWa2ZWaisD55GgzAr8wtRKKaXZJEzxh8mEEQGQGLwVS3ShFFzV5zTHTiGiW6WwPJgzYyXc47sEUADL6"
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
