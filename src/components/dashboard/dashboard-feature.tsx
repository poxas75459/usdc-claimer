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
    "TcRAtBe8Rae3y2F8NgMeAzvjckHg3pMLebxWsMgfdg51gsxBret1SisKZt7PCpuTHdLYAbdhE2zxtSbEjFokbUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S3uWDxUFQYYvjoAGnKRcyk2LADZS9FHonRus7CHiJ5LJR7i6ss395iNGX5qhx3T4hrAacTvgKwcA42rst8kypMw",
  "key1": "akCefT1E4L6mm2Le8DpSAwGtM5w3GR65ZSgg8iFUo2E9tdktQUwkBHbSed98s4cTq1jeBNDfE28aSbzkaXToMe4",
  "key2": "43VhsZaT7jQt2AuexR9fsrNs7eZ8gRkgJhJTB3XF9GuqsUpoQoLjWq55sRaHFj1rSWgyZrxeBZewDrtQRhQkggx",
  "key3": "2X6hbfJuuHUZgQ7v4yEbDnh6Abet9dwinMJt5sG9R7Z972uq1QSbPG1hU2DmdsdSBaCPugTBKTa8dKvxJnNchPAy",
  "key4": "3sZeiy9o4hKa2fBmHACYNfx9tgE6pGrNt3ouHjxVgfhsQPYd3kBySaQvmRw2dtCmgGqHSoLtYmps28zHkUBagCM8",
  "key5": "26ifBL1UXck8tDjrd43A2FBz3b9Df2Nb7p1ZBx4hmz4gF2ExmMM981NZGobZUiNUHW3eYwZpvgADQFoSicp4jG3i",
  "key6": "5LPJbMK1G3MK6csbVMQBLbt49rTiJHUygXTwB4rury9RF1VSNrDwhtRLHMszwKp7hwQFSa8fkvg49LxcYMoKr5Yh",
  "key7": "66dKt4MzxwudNL7tavRf1b4Axs7zR7tbWoFcAu8fbjzsBSpGg8M8qxEGbGMMjTxszggbTdBrPbet8P63VfPC9q2M",
  "key8": "4mFZsYG4G4kJNEUgF6PpcWKZBnBzWEnM4z3JniXJaLXF1ddbc572X3yXmFCMisG6JVtFEnPCpL4tyyZMuvTa11zv",
  "key9": "5qZY1mA7cxXhET7ZNcYWrwjNHNupYn7B5i79DtSA6UCxXmmofeLdX7UB5GGmxUr4QNHGxSp6dzdcxN4jAXBwLWot",
  "key10": "2LARAAuYodkUbVuB98yLvvkufRvERX6Ru3HTrG3E7es7uuU282VZ8YStGsHWsv8vGiiEpkW3sWTLt68wzuHFK8d6",
  "key11": "5nTU6UENkYozdgyJyG16rLw2Wsy3Uh6STEV9CnKz5iE2dzEdPQaLBs9x1uLSCFt72cDNrbLe8ah8RZH918sqD5bm",
  "key12": "53gsjU8knZRwqnVccv7mkS9946uLB9gQWSRLucjQaGye2y1a5qniLXdr3gqrkbkYVbCwrgT7ZtXkE7dvKxtGeiH3",
  "key13": "3yQR9Ubqy6j69CSku8WpuQzHu4meRWF7rEMPJabR7obWFKvAoUoppopNTnNvH8pYbvtSyaGSrtf7jjGZqnqcQygR",
  "key14": "3qA2g8M9oQw4UamtpEP7mxsAiEu7Tu5j99xs6viXj3oTuzLQHs8iceba9oetr7tbMFv6tAVkXFqu7sozukc9TXQc",
  "key15": "2FDioJ4ppouHLiCTABGbiHmgZaNLtLgg7LPAWfVMe27X454VhBZAHv5xxv6wFFNTkApLkmX6cWWmUwgCMNc1waUF",
  "key16": "UAmKRpcc9QLFMUFyMgBKs815M8WQwomE5A9J7KN2mVKTsbiv2BKDpgBCK1J7HaCVY42sLy1pxdVNqJysswafmCL",
  "key17": "54qhQnDqiA2qDuFqgwgaXWwbSuCpNdmsmggsbze3UzuvpNrLEN5eJAZnc9qdavBH1GNK3JD2wCTjbAekwmWpXi1M",
  "key18": "1De1tMupGkCf1fRgfAhY6TpxaEvdhxbikDUZN6MrJFKSJwsh4ER1PsgkKyM593eqkkG7rph53wGHD2c6Ywa1jex",
  "key19": "3znHJvwQLuKDyzXhRmj1UCKodU975jixtdC8vkj5bcdN7RVQn1uzRGQRc8oxztBTKiA4Qmj7Ks2HoxZ9Tv9k7BHt",
  "key20": "2DPmiqyVsDw5UVz2hhEmhnaRUtJRyfunQq6XwKsm1ChJn1WiwSiUh2eTR7jcJ9AyzathW9vkU8wqkF8w1tzDcPvK",
  "key21": "vnp5MsSxuqpVEhP3vBQ7ijz4ngSzhJ6dzjddRYAun69evtvmzY4W2JHgBuFVUhGAxbcZXAV8NfaoJEXzsJR1y29",
  "key22": "4ang5zGBVffMX16ZTJ89v5r7h3H2siEF5ZDBZAWj1w3eza3xbwJGx83EL3JKcvHTtxztxTn8HdmeV7SvEPbJefoP",
  "key23": "65Jry9fwuowjGgFux7vCg3qLnUg4sv87ZqTjRrJNSNdypy9nRjmFkhjM3QzqATL4YY8Q9TaeHkkRj6z8Q7PyWgYo",
  "key24": "2nyaC7GkTnsgVUZTwZ6eDnBv4Epz3zeCypmuNHe9XUQqZ77UEsGexHwy54NsvpC2o34Q12xyATED7ksjqactwbUC",
  "key25": "4kq5q9VY2c7t8wioHrDPpJj3WHt3SsgFu5EoYsxEuMFVn1cgWQmTpmPVPg63Cbk35SuErU3pMbPDpE47GJuRgW7a",
  "key26": "5ggi45UT56DkTq7JLmYsLpqF5sXAzzqH3dN7f9hdDfTqjzKRP7DMYYH91dZJXxX3hC2my5dM5FpMww4eKYpt3ge8",
  "key27": "3QLcCi6Wo4jtsYbdKVYm1sofYykZgRgCJfmLBkbHwwKACNSrNaxBdzFAKcbyzWkt2S5RYucn1fgqhKjkMwARr1cy",
  "key28": "5RSTZQKUjU6qbiwrbHZL9opDPgV5tH2MYKggWZTvE8Zh5Lj5PBzbuQoJUCdSpXvz5xRBS2jsagd72KLs51aerB8k",
  "key29": "4nRENaKmmCAeJNZcQFH8qWN3Dnk7ktLHtnGf63apcCYh9WiZdW4h7uQK69dee2W6uNPbwxdsXuyozGj4mxqLvfXT",
  "key30": "2TCsuhz2HfwyCB8fzobuaRdp8EFYhRPNFiPzZkBV9J8hrgh5EnaJAHYt7mxFR8S6GLYVjSPdLCtoH5p8AUhBt6mZ",
  "key31": "4UXkKdUiNL7LkPHyYTQnHqadz2onxWHfgzoGL919JG1nfiHDAjXiE6THGYGtWVmHisMzqViph1aozB36eF3q8fRJ",
  "key32": "4vJnNAhyjvdU7vke6WUogyyHopCXVHcqNSQr65kJvDwvLy7XQ27xkME6DgZ6v9TtZ5ixvThcuxaDCedJKaaPc8mZ",
  "key33": "2D87qWKRDV97VaD4Yno2ie9XjrhZKUeuoSg1jg9DP9RZPNMQnsfp3gmdapfgdMuqZ3QcbgwL185DG7k736DFcV53",
  "key34": "58fCTQZbxZVLfszfob6M1K54gwMi6HXEPCboPAvm4CgcEUt2SbaJmLZZrj3ta6JxJzvAeBDVaR3guUH7LVdgwXxP",
  "key35": "2egotg8sM8FuBCKJwpV9ZTLUL938S2tfi4P4RkqfffGgpThDxkVHAECyCw4aR5nmnn3YWt6wRzKM6XXHowswACmY",
  "key36": "FyyMncqc6FVvEFYQtRXYAZFFpYTyyc8d3VjC7T3YVzfM6e1uD8t1SMqnZeTbL42yNycCeJoJPVZJD5nRH5AMoi3"
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
