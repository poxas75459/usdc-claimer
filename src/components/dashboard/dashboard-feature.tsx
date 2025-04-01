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
    "3tS2eMoT9jn3QnQYGpkew2FgmzuxVGD7GBbbthZ3u9JpBCANDtcrKpy4ik12oshzC1rtKpx26vjGzcpqMD5CUPy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f23qPMR9sfegiihLn9DCguhS6ydbujXUdfzBbtbCgJfkVKEgZUKvCdGxJBQ3gnn6fuLzZFraqnGyCWSbagxf4ba",
  "key1": "5Prb73zmNybeKNQCi5jBhhZMy2E13buAYaW6CaBjsrsLTPiBFJvoLXvbnVD2hWrcsSeQBCnt9crKXYe6dxvf1pox",
  "key2": "2ktGZMbm1fjqjfVxC84v7oKdRJfdPdKtUgSd2z4jQKACpcfX4mGpUThoDhmZ5mJhVz7PANFy1NbUqETCZev8fxGw",
  "key3": "3euYUMdCLMqzTbTPvzXRCa4AyG3fu83o9u1brfJxq9zuthbPZCYdS1W29Xf7EeRUnvQAhv4nqsNrJq87JyuC3aQy",
  "key4": "2guAvemU1zbpE72Vqgs7mwfSxYVnP72iswPEbntG9z3bN61teak1EPMotctT27BoU7zTQp3a2Ci8mUwXAkGrkLXj",
  "key5": "4p1bYRrACy9C7JokB2boPCqb19KMDxqrgpmGGywS4ffMAtZcSKXMPjam2AGDkuuaf58dMrtzACe5itNMBhygSYtk",
  "key6": "5AAzeXx57bLokpmLp5ZKTrhFXRF5EvNb2MzXLtisMhUJrEoXGuZ7ko5ESqJGG6cbe4k1g3UFqp4GEco61jmL1Ti4",
  "key7": "3b8znZxq4FgPL5rvGZssfz77jcJaezJWAXK3sx2KXoVbvehYvcFFCYMc6zwxE9VtN64dX6SJi5V6xnKZcuPW1npa",
  "key8": "qWpkJ1HzpQkpWkZ8w1BPWGaQW7dzgxkbNc2vnY5R5gSAmpDcgP8orPggZaS5FyoXMebFdYFV2uvGRdK4XzpXQFm",
  "key9": "3YSRC9uXB3ZXAoz53vTARKG6DbZGsgwrioDng3gdB8JN188WAV82nX9i1ctNnMimMn2vhBE8EAS5yHu53Q9iSj4K",
  "key10": "2bTrDysFAR3KnfN8waVKaswG1JB3TQ9J65BBc8TpU6eDRjppaU3FfSGvc5oio56cF4HMfa8yoVUdYby115e5BM4U",
  "key11": "5ctRhQpjSgVbnYe5UAWbqeYTV8BuDc8sksPSgHZKSUTYt1SrwMxUduKMb7xn7FjeQE28hmxzu74xoUXJjCeD6U3K",
  "key12": "3roHiBEy8hC2kLJLdNZt34BacsQg9mSvDoaXfcgNhM5sxY5DuNQcpjNuFYA8gqPNnzvnmL2rbRur4zD4raoy9NHd",
  "key13": "3zcdY2ZJayYcGsztm1CTvfgyzu6e8j1dKAD845PeMmEVx3BqqcuXj4yo3B9xorVFZUNKhDf76XsuyYurj56xnySZ",
  "key14": "3xXL7NbtUt2QBgAdh2tewHdNE545d9LX87np3bPfaHWbSvNGP3v6uqFMvHsH5RMrtp1nP1bZxKEFjRpgYJ346pUx",
  "key15": "4kvtYQTUq5k5yCJNghxVAxneiNfjhSxhYZGqNEJoSQyJ5c12ivQJapHCgmwGcCJKRyrahSKjVdZqKUxMuCu4CTiX",
  "key16": "4B8PfbAg2Qb5a8tt74M3tvr8S6aDw1CVFRXWctn9CDNwyypgdA7Wn2vo3MB8SRfUJu9MZfETa1vvpeNuZsVMtZqz",
  "key17": "5bfDdHw72WJf3KiGLcZUsrahmkkjzfRaXMskjqgVUZFmCcXQxM9jAfjwbGD5Y96rum6kujuNQYggbFjwkCJn171R",
  "key18": "bogKbsKiSoFkiTny8H5gQu7WoDkxbCXJ8DTPAn3tFCpX6TrBULK6TWProFVVyozVhV5fotyKF8nZBCEaARMcX5F",
  "key19": "5ztsXYXFXQhf4vNWgWFXXi6TFdP1Z85Mxy4ny1gcTezmkPCnK4AJLRxxqvqXDrG3UgLcD7MkgDSyZ3Rzi9ScjhNL",
  "key20": "5bbQ2f1e7ZKUUtXYpNzh8yodjW3AzkZhcgavZWiYK8Fg7zXhBmWxPN5VTdpYAFDN6gzimRHBuaN2XYBMQ6eBTvG3",
  "key21": "J6uyDCa2oJ38YbRk7iU7XjEe2ZHRPjqd7koYbTgaYSszebXR5SErJjtpuv6cjZ2sGoG7bU3DxFek8uLVxjmEHSF",
  "key22": "5chhrT1A5ESyonRApNJjf3Gt1Mah2YedkNyNJ3FY3yyPYwXhessMx4qZVzHgXw1MHhMDXK1Qk8Wk33h6UCqRfbq2",
  "key23": "2wk52RJxXEAzU4A4gvGP8PdEMffJbZ4jK5L3ygqLkmrw2m94AgT5FGsE22zN5yNtzBuZqW8YmrGaonm8fjVZX9C",
  "key24": "adDEHHUrawSv2daKS8scvB1Q4rgynSQzGiEs1XZ34hNh4oMJbqq8n77U4tazKZrrH7FbYBNnxNPrBt8J6wY8Srx",
  "key25": "3CmgQW8MvQcVB8cxa34oup79LwrUem5rdgxZQQFWT8qaCr7C3noYnBfbGKdu3txfpSxCVd1finyfVcEFuuq6Ehet",
  "key26": "MaPKwdHwrBje3gEmUoFz46GERmxxjuske5eEaCD8HpPG4me2EqLTJJogtxfhsiFRZWj29xF8pQbPNb5YZm6uYrx",
  "key27": "2shbXMsfBtcCfdDZjaBsoYHvDKV7esVjSp64LDAzA1REYJjiiCKTAGWEZCD3hrnDTZW58rLgim1i999oxCdMHsZ2",
  "key28": "4nmqnLKv722ud6H7MRy72KXaLAev39o3dP82RcyS2xnkvBsHUGGsPdG54FXuxCYcwMbMd11FXYHupPkg2mxYQn9a",
  "key29": "4okXEPiWLkFApmwn6joFBVqd6kfDoek4HxnwmCKHaFmhqz43J24FQL1LSo7okLhrQEDfKfU9sLYzicTergLRfQJH",
  "key30": "3BUJ5xKwbLd8XT3vzKrTHckkPQvV7pfpnwvsjqBLDa6qEtzqh9s69h738hhvj6HXqkrqEJjk71G3HoctF4AgXfEM",
  "key31": "2twpJjdn43eMCGMNXgr3ogWRdZs3TwyNSo9CVSSEKvXCPpnEVUkrQ8ojAJhRGV1fojShKJnxd9ueTebx9YntdjXG",
  "key32": "2hcyrsEsCeGtnCYWz48re2xuBdRVPed4Pr5jLySUAQzWjPZSzbCk4kpjspfB4bFwJJx6g9JUQUzm86wnDwiGVpoF",
  "key33": "2zcymTQCzJsCAg9WTRMUAyEzfCYm3vNhDfSbkDC7Za12WzAPGQ7NB8mFep1reoGAteSnoz2qbxK7KvaJupEz3r47",
  "key34": "4CHRuXWfS8F7kGmHq1XFoW4vubjPoEUXzLCJEzVbR5qGxmzRG8sZS7KArjZw8kwtcpag6aEPm89eZM9dWdMiGp4w",
  "key35": "2NvCFcFW58SmFn75yTD74G2GypVW78PZyb2CMh3TApR5V9vVbpxdgBB23WrziWcavH254XL36TVpZZRwNCKYBy81",
  "key36": "3qHEsuphpSruHaDNwDZtPYXH3huJCSfDtE35GKUJVzSN22NnXKzdN38RbGaZb9CEKHafL6n3Tv7CwYEPzuCA8NQK"
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
