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
    "3xJ9fPVH7b75j5iy8S9QzHjzhS3JkQkLpTb1mmsCfPhzpwzHHekuqkUDaeGBvftPtY6UZPG4jFAjZssbfrzRhEKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pXyNV9VE7DQf66BGN8JM21dijAc9N5kzMtqyMnV8BFxqELjTvBuN5dneL4vejLH8qd136Np6fgYffKmZZgbfXv5",
  "key1": "3DUE9RtuvhP848sY7ygpVE7YjEiCTdvDfKX3V9eyxg6hGkL9h8kjLAFhACF9SrcdSRXVoXnCvTSAW3B89Vr65rjf",
  "key2": "4T69s9k7oE9EwFtCzosntCK5JUFW3BEoCiHecaU1mr6U7CmNtVEyShYTdccN6n4Mws4dSpAMNvXaXY6vYimfaGbU",
  "key3": "32dnyZ58q6ZCZ46xC1FoMYo6opK233GQ9PtBfEWXo2PqcHTD1TcstTdHya42Sd69Ts6pFnZwDHAwoKhwqLFiTehe",
  "key4": "5gzGddmqMTa5vTfFrYQ2wtbGfp9zqiGQV1RX19hGKPcLC6FBYHH2zhVGmf5fq8DJomwAUowENPGzMawVZ5aVxqad",
  "key5": "3gwkmz9NknYaivdqi4fyrWDL6bScNgbYkpey8gjRpVBxptg3Gc5Kne6TcKJf6ohG9zhXpkNQNGgHKf3mwK3z4ixr",
  "key6": "2XqDmN5vGffisrQFjZVMyJJZTBzHFftu27dL7R1UaPoQ3tibEt3HzGQ3mQCULk7qnNmewXaGhTuod4zTqQW2nTQC",
  "key7": "4Udu3SSqNvuxNCrQrkhVDD6wDE2AqivuRDwKoJwEt2d9op6WFHZ3xeS3bJTkhU9zZyT5hyzzSVVdBQ6hsB663pfR",
  "key8": "56YdMBbgeqTBtt5ixv3LFFYXmc1PFwv8s94eVqaJSHUmqLkDaFqUFREDzek56yvBVtEjU46NFj1v6YNVHWwwuJw",
  "key9": "2JX5JKFbKwwR4XX7qiN8jJFsQ2ARzt3UHHUs6bDVV4a1FQrHotcNtTBctsTnKAzC3mpf6kgPEvw5C23Szw1Sa8nk",
  "key10": "2P1tBZNag9f1bZhQFreemW8YczsdUh5iVem8DpknZLS2jPNk9qAjnjDGnW5D2xFpkK7q5g7NhCnc4E47nh6sgAtF",
  "key11": "5NohmAjwBhp9BtBvXpBjHxeSZjCtjxBr9RRntHTLsYivLQKbVfCqvqLw62kYfS9rUSH3XS51bXaabm3RqjWKPfw6",
  "key12": "3eJMnxw3XKHh9Eda9EG2E299rLYGE11Yw74ERELts2CgZECNdy3SkraPorgrattkSTSX6JPks2f9EYuLThqD7Bfi",
  "key13": "28v1MCFiod2wz29zT66MAbmgKc7u36qHrieaPiCBQD7Jbo5h1MNxqHqaNx3FPAkzAqEeVD5Pb8ffTTumn57AugUy",
  "key14": "2gui1s9Q7MHvu3ch34BRe1ZVsE6eTA3W6BBcvTKtxDUPM97j48caWKEMcESYbiyJwD2JYar4xuCRAEzXEJg7vk7x",
  "key15": "5hUtAGLVEMBNG8tUyzR2LXghV4So74TkFEuzZPCH8qWgzgvuUc3FWQZzsKxe5S9soWRSKyipPuAChkWGaaJTtJgB",
  "key16": "9L1nQW9CEtQnjyWsMEY2n9Brtq7BiAZtoUk2AKfbtKSsy48ZE43DtxFaEmttV4UxS51Nckd8qeCMrhwjSdvRCXL",
  "key17": "2qknxUPjgWAnjKbzCaLfFzFK7t4eBQHrwtH5XBKcZp5jqLzqePE9u78SmzBpgGXcanB7ooAJFXaJvQy7VH3egJZq",
  "key18": "33CcZVwg166NWKCaKkdEnZKHTJwuXiJENWAS8vZPu25iByqaqHjw3QeLcpqSWi8znGLdJG7PecqEei4BaFQ4BTAP",
  "key19": "29R89fELVnvLZgEQ1kZK574HKkVyRkkjW7GjhEvvtzeeXV4J4WirnYbFuvhHfaKGe5FG4RcAwn84ogzmz7Tsi525",
  "key20": "5fdNCYYhgEtghCBHFw2RokMChtVf6ASNJXyECAaifk46hyCBAggd3jWtpMNDuecUhDV66ksZavkD5NP6hje6du5v",
  "key21": "5ktjaMgcdqbbn4qiqvWKE18AtyZh2uxyxuYCkd9Ji7kByyuAYP8hoKT96RrgWsQDFeadv1G9XGheZJiKEGb5mW21",
  "key22": "2STpSNPHexuF26gfufEg5BijSf9A8DsBF8qVtdQAf3HqLio9Yd1ExC8ytaqzpYj35pBzyas5V6Ya83y5MvBmY69z",
  "key23": "5JC7vYwsnBY6feXcTww9xMT41EcBXsurLr91L6xKxy8ZYPfyAb5rEHrkmFXDKhu79Lc2QJooGwJ7ztUd23Jz6a8Q",
  "key24": "4yaKS51mJZoybGcA71TnmWGecSckk68QwrTK5XEV78ZBS8HERDgMaXuRcK7bwFwKJtSKawdZVD5MCuivze6bVroD",
  "key25": "2nkpKcZRkT3Ea1mG7wXkyvNHELCWhBSf2ntrfPBSGf9AgK49EKAmwyGU5AZ9KyFdP77fYjyvEG5Whom3xmJHhQJt",
  "key26": "24b15rKD5Z6LuqVb3LKd8maRxcBBskr5RWi9fB4zs9FEA9QkmBy7BWJv1Ej6bDZyHpDp21eB9e6AhzDWMm6Dmaf7",
  "key27": "5pqyd7vVZpZRTtHNka9qHXvqfgwDKJdrbT4YGeA5DaP3MKFQHFE8GmdTbGwvLJT6g8cBjLaxF1Bk4FZyegaVSCwn",
  "key28": "5MZ2pW135zKFrjUc4ceg4CtLZHgD13JHeAkhm6SJipqH3DDBCP9uAxhBR9qUx5K5Uk8fPCcwDrPcztBKVvy3RcMh",
  "key29": "58jVtfYeBazXvd8bCDx9WjwV3pwnXYnVb5UVBaVNNXLGqooAi4fHou8jMmEe8MWerpUQTPJvHPzfnv25tNbncLVF",
  "key30": "w2mRMAQcMzr8tpggVgHNvyST6gapsEEXcX8Q2HY2X4B2rNAsUsCheR23yBcG1Yh81kqhNvk6HDBPs8C6AzrVLJr",
  "key31": "5om11TEoSKtbD9Ngby6tiUXyBCzbbCyAa4Je5v18dHWCcykvANE85f27RDp6PsWMupeEYWHJLA7Xf7sZZAuN7w9T",
  "key32": "5AJwS7xknfygFSjG9jz59cf7dAaQMrrZSCi1bXdcwFR1CsJqCCEAFg7yDc7cBHyxiPMvyvHPui1j6CJgwbHr3qR2",
  "key33": "3KD4ayJLjg4u7vZxbTY8h8cs3nxrP9nBx4uhq74vTR83qwkh8m6oR8vrNvpM1jZmYGmTmvVoHm974ETcKSf1amp4",
  "key34": "4FUnFvqkSTAqpnKrjPyh5e8Vf6uwweeJ2tMxgnFmhaUdQQrMyB9jPemWPeMXmdtcVQukRnPEbzrHmb33Vs4wvoPs",
  "key35": "nZjFyEuTME6uSyV8DzqveFm73HQMvobMG1EzZm1hcd66GeJa77RcUU5E2V9zfdexjLmv9zzQkJqTmBngpKAuaYg",
  "key36": "2LebHz3adGeho93U41qg6vBA3TEsUGP78tBBw6WJBcRrsAYQYkfjEu2uPnr5mUi6qesdwpo6pPo1sfigDLuQBPfa",
  "key37": "UneJk5Z7MTRuy2uYH9VRM8FywK3Ce37DenpPvcjuLDeucBD8nZQbJw5YPRiRNw31WGHBvTHxYj3EjrXBP3zgAwL",
  "key38": "2Q9CGiVPRQKhkuUtPxpGByxkiRVR2QKz12G3rGVpNjKLZ5aFCzz8eDw5mxRTDSxJag3ttF7Za1oNDQR2sJXrWWwq"
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
