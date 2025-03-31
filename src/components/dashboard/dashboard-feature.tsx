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
    "5B37CzsMME4iR5UfoxyWs9mo628nLAkRGTLre9cR1rDwssC4FWMZeYjRhYHnTYQXxp6it1RAdyS1HH9zSDt4hcBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xepy3Yeqz2J56uMB1GoiPkjucGrCi5MmwRhY5bhz6sGcuoRFFxLHGkgYsCR2bDUgrjrSXMgeNcrjReYKjXrzsH7",
  "key1": "3VcmFmcpJH6UXetiuUXeUmdPY6qBnWcMUCPeTxzjzB764DfM3JK9uB4JDzj1JNqgyhemMMCZt7kJz4X26obnkbYc",
  "key2": "5EaScom7Cu1Sj1RqNkBRmBgWxnWfu8Yv99uiVFWiUYGZEhFJ2TqcpPvGSvxZyqvhatfD7BYosxQ16tw5XcTMeEYt",
  "key3": "4ceVAiA7hV2pdn8oWHV9sTSaachqgcccnwGJFqvEcsav4LD96BqKqr3Rskfu9yba4w52kwPAfcYWEXH19vQXkbbM",
  "key4": "5owTSTfs3EhM3tH688h6Ls8YpTc6cQkH5bszVq6Crct8yvrBApuvJTQyRrGRuyuChQHc5vSSePVWdFbTKVDGHCfy",
  "key5": "2oS3MXi3YwbujsYpgcGpyEgBT7yNQkHGHw8bwGGUbtATAbL5rYzbyhGMWN7J7mV7UgD2W7aUdVGrUdp1rp3LV5s1",
  "key6": "zC3j7JUUA6mD7qtjMX3oGbAQebLYVUShqrjsC15eeNaoT6L8MeCDjVamUg7SVspdSi1ULgrUhLA3RRXZtnWi77N",
  "key7": "4igTYy8fS2dgaNEvRxpNTb9SzCLa194pBcwXwyCn4xGk2EctEK6kfjy26medzWv4j5TmLirfmY6vzttcZo3xkno3",
  "key8": "59mKVxcRmimFGWTU47uaCVPezZBiSry9ejT1uLjsRR5bSPgjkEwi2JAiY4aYyrpFYiN17ekRaKmjZxoePaSkBC8A",
  "key9": "5SLhf5bqXqDDRMUwbkaYcUgguKqLsop1uJsobL5nREbmVzk2FDAK6QTRUw5NjSu8kNZCXbVadRYSaFMzYPGbrEGs",
  "key10": "2vxC1WBHvKK9xnaVvsXcaZVRy4urzpvyxNiafiNUkpqyihADBpLi4scH8cst552VuST3M2zqUJ1Zb7G7ExxHUeA3",
  "key11": "5kdJKnJr7MNjeY8tAW1J9AtzNU2wxV9StEDCG3AMC2QfE9xHA4eLnGGdy2JZfQDoF3oMmUjBD7eGoEYPHRJyE8fn",
  "key12": "43uLzWFCW9CtYT3HcQ728aa7fT21EMJapPLGwQuLr6kZmhcL9VdrGpNF3mJ5zftLSQZqi5FPLqMewTziLL7wkw4v",
  "key13": "37Wg8UyPyXbv96oP8Zta2cAi1QfGu7vgE9Rqz7663KLQ8vWvjrcVZpUn1GXDCBACW2mDVtCrrk4aaiDsFDaYcJJB",
  "key14": "4bo9jZRfKQnvL9ZR71J4GPM7gpyicS3WBNyvvnzLqTuh6kWWHhrmGW2zwKE4VepfwCj8fzuiHgW32RfECu3yX6qM",
  "key15": "4mriQmmfbafWjT5w4kPHF6MGMQYo8aqgxxTXuv5YktF8hQ6Bv1HzaPRYqUsRCP4xVZsMuAXzxfTtXvHMewUDExYc",
  "key16": "3CtqNHfno3sdYPEZLdn1tbCA6oGUUzjZn1e8mNczNdz5sJjTevBizdPy2VAUnFtkK4g2LnqKjw3oZS6cERLLMuyc",
  "key17": "5iTkzVrpGmqH5PPZzRycJJi51F8Eh6PaRzGhuHjsYdp8QueyGqJugT1smfU1bPXFu6YZVGY9W8exAAWNVKvSLgNB",
  "key18": "5DjeaP4WvtkKzMC8GvFcoVwYG1ZpmrFZ3fVzUCgBHES7LSdos5oooAsXjYxXNt7EUdMKNKv4ApyPok3vjeqNUBRv",
  "key19": "4X1j7MnJ1NAPLwYTYka6m6poANpZpntK5QdKZUehzoSg1pp3gBTL22ThordHjHxqAZG5yXZcvqKRdB8ajfbfs2tk",
  "key20": "3Tp7XL8az8xxMXXA52aoRX9G1J5UsuH3Y3PDjzgZQ7F5qbPBMZta6WHtFWP6zKC3p2qiEdhAoMqpP7c1Txow3fZq",
  "key21": "2HUqpXBcUNz6NSFHdT8Y79qkwXqQxNTmREftV96CknqhuvynBVQqRK4ZNuJdfDnm6dT5cSjZfjTJ2L3c8U5ju3DX",
  "key22": "4fituFVGUcHXaPhRCgEGsNuVd5uH4pDZPK3Lmt5MEgKEq83iEdPxo4qqSJ9cf7MZp8JVG9vMQpYhAJDFNVrsLohM",
  "key23": "59eGuq5L2wkLpFHNjyY7kmGHNt8hvKAyGqRgb3pcT1pT27YfX3WzF2wmMj7HQr8Q1AdKhGEbH3mRgrA3YBwQGRjm",
  "key24": "n1wSrwZwYDaoPxD1fSqRLZo7JKcPoUfQsEUC8W4xiw6b72fT1GSVMxThUCJC19ehXtAxaqKFDZUyX1EprKPg6dw",
  "key25": "5FFeMxqwMpuVQ82Ab9L83HKHM2yJuSCWKfE1ZW1ogrZatVtS7nRJ8hjwzLPPLeoMu3TK3jj8U9DXmoPX8Pmgfuw2",
  "key26": "RtrGJn9Z15vxHiEdbR7CwNVVZ2RfyUwC57bbATWENUrRH9ZcGE2RuRm49jDbsNgz3at2XZ1BXxEExkx1rR1w8FA",
  "key27": "5gTWwEMuVgwoz8ekfyVf5CBza32tYs7K9turVL7CpAC6LWimwAVhVRvyrQoGJFiYaYbj6zMAPg4dNkfSPZ5tskLz",
  "key28": "2Gnwz4GcPqEapuTWmMGCxVi1oVe2iqWnKkcwtPoZuQNpUyjoMbFcjAFDw8pTAPkLK428651PUk3nFJ1WJ8FvM9eN",
  "key29": "3LjPYMRnfC4whqHGAUof5GcvHys5fNd8UH6BAtG5ohCor8dpHgHKKzzHoZWjtMowvVrF3c3DYVLYrvC4J9ppV8wD"
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
