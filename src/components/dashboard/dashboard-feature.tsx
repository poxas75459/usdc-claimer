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
    "642acjadQeF1sh3t8ZwMNSQEfSfyHE1X3ykwDgWjz9fwtstNY9TD2Tgcg8TTPqWXjPXD6teN7PqXsaFXPHwmnYvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4giyeBABmPpsj7QikNMVzW7HvLSSjj3aVsP6eHiMM2dZrVE3YrANfApYqGEQgrNeG8ciqcw13hzouCZ51P6bGfc",
  "key1": "4YLqHHUrfgZ44a69wd5CjQUhC36fDDFSLroFdwvEhE4V9BfABeB78CDznmj1crf5yTDbrqJ7N9f1C9GQxcwNojxX",
  "key2": "YcUHCGci3tGLsEDF9hczYDgjZ8RDFbSwvnZh43uSN2ZmGJao4GEF5XEnNzZkuxs6eAUnR3K9Fyrz8g9nrVZPR8w",
  "key3": "2jQMYxh1yRDjB84ZnK6NSRBd7bVtS9iQH2ozqpQwpWNUu9CA831q7814XE4sdwaMWWZ3mKcmgxrYAgedDoT6xVK8",
  "key4": "3qohyppby2W1DSTaiKGpxVyP39TXXokjBprVxsQFUmjF7stwoUcKoPqCgVR2HuxyGxAVweQaE8YFcB9Hparrnq5c",
  "key5": "4ixUPdgh48n5N1FLuyhWzXCNHdLxgeyv38LRAwu57bvU9DWStQGveQ8JCQmuX3vvZh64noP42aBEcn6SgQ9kExbV",
  "key6": "5znCQGnug5u8iAntkUPcUYgYVSkKNdRFnfFAqdAPBKnn7wNCrd4kVR8PRHBs5VQLv4HTFDgfxAESvSLy5L4vCwjp",
  "key7": "2NEwUAs2WJ2jm8j3xvLfL62DeN5bbwjGAgrpnn1awqWkuSwzPwKGN9AjGHt4dbhk8dhhAe4gCE9xLXHR71X62cPf",
  "key8": "2HzeYsr2taJNfEgbVdgJBEjKDzUpRgkhtdKk6P3nd4AFmzPYqZUTsGPZa4oQMGFVK6BvmMPaWkuUzzp87xt754q",
  "key9": "22zwyWmjLzgTH38GvgHwcmbyMz5FyyRYwW1dRNmEKmFm9ZxbJNPyHfq1WvjrEd3Hsrew9MV7mmq2PqCNyt969Hng",
  "key10": "mKeiTWXWFMnoNXAbFHa53EeNioyYzwjqQc8b6qkxdZC7E4eH2UM6kMNjiGCzGhgiXMbRSFq3MJQRVCBziC4Anhb",
  "key11": "5BrAEVjjUJDKL4vSyPX7eLhyJuxZ8cBTYzbC7nqzobHhDq9atCdixgFEy9K6BJ3x2NXVg835FZEC9oncLCVZFkaZ",
  "key12": "N52Tbe3W43TUzRwsY82vKuRRTwgXqvbZB1oi7rHd4K5DpDHLHVRwTxfWJH6nk2d8gYQMDzvbEa727sbGuxUFn2t",
  "key13": "Z8uhJazTwGxumJZJEd7dtrkW9C9masUxhVSJNPU7mccrXJ1jKrvyWNGBEJVQSCDgqfNc2aLcfa5vHGygurYfWmL",
  "key14": "5Z5MbmiNLdYKbVEwt9ZJ9NEu9RXRxdCJAM1eCLu7Kx4Tnbrwqa7iZBUuC1QbGwLVCD9df3vUksu8PzFAZc6JnSic",
  "key15": "nJY95xjFsBVZe6CWR74uwafMz3sM7twHx42j2KGP54job7EYVoypWyDuWrXKpedf4m8nc7cqFsKQRKcjGBySW7E",
  "key16": "5gUnjwdHGdnJYRdzP4SbzJTSFhBNPiomQoMfz2CtQDZ4Sifjuxw2dhBD7vXQAy3qEv5MULpSEkNBtGRi5JYSkDKZ",
  "key17": "AcADA28NQH6E3Yf6NKTmLPiRJpTzYmcTCVgzqXiM5pT7dSno7ATVa8qjEuynSPTkAAK46a7AisKHxTnNLpJDJHu",
  "key18": "5iVWp2GKLpekEmgZaUaXQbxmJLViaar23Kx2oVnQ4dojudpKAoVKiFsgVKhh4HNaVXL4SyafoJKn95E3wQ9PSMiq",
  "key19": "5nmn4T5bhhUWkUrgKhC37pzx4FX82N7w3qhDQ9DNeJ9n4DWe8onvdG15BDQCfsjKbpwq3Q949xjwBbVremCx4cdv",
  "key20": "4qwVSccRUUwCUFN5v3XjDSt2DrnJdpw42ZVEZduWwLUHaofDicZvR93UaFuRz2N4ydkxQqo3iLuTDeAJixq5fuqk",
  "key21": "5GGgnMyEkmk8r8NY6CFn7KraMG8eLMDhGgkBN86XZZDHxfS6aGyUSZVZXNn9b4GwRg9j2MJnQGeohFs8E94V9T3k",
  "key22": "55Gr85EbMAzoi3tM2mdVM7PFf28S4J6112K4bRJ296SJ8iVfnou9NVS8sQpCmhMhCS6xfXkGNKuCcuGmybYNufZ3",
  "key23": "2VnNZZwnxCGu4AZLtastyh13ntLmqvD9hnLUMwjn9dXj9EPtUkF6yV5my7i7gmEbKw7jUgDt6ZCqmtd2EZYr631A",
  "key24": "2tgf3GkPLyuSC3xdMSKVNC7Aw9HCN9nBQridJ6Yy1dZ7jgqvKbTYmHUBZLve5KA5y9WBNEdEKwWHYN1u3QxRAjvi",
  "key25": "NZdNKdR65JMSxZwMVvAvkaPihFaTjspn5fDDx9tdmtL74eM1AJhgUL7NYeoCj1DRvpDZbuj3XPAzQAps68aJAHL",
  "key26": "4GWyHLHkLpJmkgpcUwq9YVhUwsigMPd4eU6G888ezLzfKxY8zBJwCQHDr9zCKnHF7uNgVXXePgr45JXyDBx7oxue",
  "key27": "3Tt3UzGhd8V1rLoLVDZEbSjMYE2wqfz263B5rx3U6Nw94FJ4EwAXMEMuZhvzz9sYrjnuv1KakaJk7yPy86TCu2ua",
  "key28": "3LWeALSrm33KkGrWJSij7dKmpBgJ42RXnqJhKuB9Bx4nftzQS4QjrmJ2V1FXWJB5gm8krSrR3rP41g7MVarDe4kJ",
  "key29": "43dtfBdMayEjuTCeunCYybEMU3r4FAFLDp8m4sNLQqbZ7nGXes2rshN6WDeGDFF1f3NmEcXRXAHi9QLs8iszhHXA",
  "key30": "4PvQuvH11zm2CtWHeE9btVG6i9HFJZKjSDJ2c3UvEcJyrqPArqofWy9aWbNSnkjzxYVmeSBqTC5Gb7KuP3YCMb1r",
  "key31": "4ER3ofxUFpvLycm58DngirGGN5pfbXCFaWQXo2t273HAb6847h8xBDMFAq4oyW5jNamSrx7YcKTo4KJMftVRKvui",
  "key32": "54K2A9UXc2q2ChoSaEu9rq1KYMpRHFeqUkPYkhN6AvVgdMbxhNuVn8u6rsefV5Fr4WKqLL44utuHKquBwH3eWAuV",
  "key33": "67iEwcRWRjQR6WVQFpb2H6swNusu2TZL9BpMnSnHBJE8DyzE6gwZtGxThPEJCb1ZaC8gQy7cPRGgs2yeVgW6AXYA",
  "key34": "4Ya7yKGZrZqH2Ug498scAoBti3WtZaJ9iGvQ5mgx31sCjaTQPzAZhyE2QTn5ASXKpppxqXZ2RYdjbQRSGbDgiUsK",
  "key35": "4UVtrXHbRBBccpaQ2MAMXkAYbJWhiVPvpN2uaLhKr4dW5Cg5UqL29ieDyhLCo8tfQZjqjYsectfCE5NMz9yBGvy4",
  "key36": "29cH8NZV9AzfMhboWTxkicBomWigyf74hDz5J4UkRtXdiFrfzcyTuTsBX2WoznhAAhLEsPLtQLtXykoFsHXV5r2a",
  "key37": "4wTmNcqVYcvXVpHZkJrErcs1u6fPgGwEkSdc9kQwZd2xE7SvZe429CTHk9ReMDKCV4oPaZnS5DFjebCAxobQPcyz"
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
