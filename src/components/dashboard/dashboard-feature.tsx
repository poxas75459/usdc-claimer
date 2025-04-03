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
    "2tX8jrgjkaktA19FFGmt1f9YjFEJXECdvJbFEgqJ3Jb5mhrkA3mksoNU4m72Ny2MvvekT5oZJaspkZqdRqAwxoB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYqYdWB1hDyw1ByLaTnEzqPZuSbYHJ3cg7CHECXiJDWDR4dqwGBwV8y1mBqnXqxecLxGqy5YPMnwmwv61WvMY3x",
  "key1": "4r7rV4KT44VkX9uUHJhSHwzmFwrTbSBy2jnZPyHz6SBQcnPyo57WWYdMxTqWD1HgU5GDHCYKKWzx1vgqn4e6iTFD",
  "key2": "4UorFCjpGEtpp3KHQ6y8sVEvbxuTuhPYw9AXeVVffVJWLt4jq4ysGBVNkR9GXGzbi7Mf6aLFUG6aWYxpLgpAj384",
  "key3": "3kHMCvNKJcDXfhyQUE285VsxNDjRBNyoNB9zkzUpndkgQZxUug46Dp1ujQGRGFPwuTiyqTv3AXqZgvK6hWYnGntR",
  "key4": "2RBd7k9NpPS9L2JHoWHH7ZPYF5BydhVvD9A9Vx4UggipM7fZmQCGfy5gxaLDYNNmpKYwB7wXv6LakDQYSXy3cNE4",
  "key5": "2Z44S3EcbiVKobBX8VzAwPa3M1tUYcEBSx6jNc373cVwmjgeMF8qg9D8sSdNVwcidSViAmixe3ZUiSSaCF7i6rwV",
  "key6": "Zxto52i4v8bYF2dUn1yTdE8WLKcjH7tJ6t92bepytsZGbChHCSsZ71UJ4btnhMoXnxnKqrpSBdQmwbRfhmkkECq",
  "key7": "28YxBnn8KCWmoKQqcBgCtCyD7eRrcJsyaDE8DzjjgG8D7TdiWjwjkEZUydRVfynjc5zPTks1KfaqanNP9xj9MAwN",
  "key8": "3BGzjsx8Yy3Y4an7t4g6HhuDa5HTXrefwVwWwZZs1DqfctBrR3T9VYjbGiawibJAxxAhtfdSFjEFmpzKaqHWzPz4",
  "key9": "4NQffuU8MCFnZDzRfwMdZGQvm11XhVGdwUFh1GUVBCCrP8Js6MJ2MnaxkQrMmeEcH59jZKya9dUnvnfb4n7oSWjH",
  "key10": "RYgYKewu5FGnQZqMu1nLD1M4oYuizTsDhToXmpiwd6kmEyd8ESdLDZbpa3qsgzhZc82oaE83KGNxJVdhgRbAXpe",
  "key11": "4movHd8TcuR5fYQQFkCfbG314CwCK23VGd92NtAxYvzsnXtCzQfdgEDy77RdFR12WnbB9uHzFr6MVSDy6Vtz8GcT",
  "key12": "5Qsb7P4ivwHXVh2uJMxF2bdEt2WgsVLCprv6jpKL6yqNwCPdE97vqCXDWqP8Dh9NMtGtKd9JTtNWBW25jvRa2HXx",
  "key13": "g3AzQkAW9LPnYwCp1SjjhGiy7wH7NpG7EiRS7h8jfJtH39pkanyZaF7tcsMCP9Bvd54NtdsxdDMZZSMwUjv9mhV",
  "key14": "2AtQJE9bj2imbXswm8wVvLywjnrVXRDxFghTd3MffsNAgV3Mybp5T1g3nSAzCekEvPC32cnLquKAkZpZcmi3DTvL",
  "key15": "2vowFBm76t24S6Jsd5ckgL8h5m9UivyiQz94nJmN7vCKDa9oMTrTtYbVfhwtAfwRxACyGKPs3xnpyRai7hQHDEWe",
  "key16": "3dB9hu2k42QH1zCZFZXdH8eAuFrdz4ovdpNDFeYkSX85hf9qRV3yBsV79NrTZ39KZb4N61ToYVdEwzp37sWsZCoG",
  "key17": "3hAFANKW37T6yVDcsejnSDHv7suyCVWDBbzrQKcemXC5Gah5ptLxfxhk2KRK5KZWfa6rZ8VZcQegNMAK4KePRhro",
  "key18": "3rhL8behWY6zY6nh77WtZ9xFrx3uANnnyh4HMfo8J7NYuYnt3U1K1B1XUuKLNa9EsPX1Djp5poR6ZjnxLaiaftiY",
  "key19": "3RUHSnbGH5urnbu44m13EU1wWh3VyiCbUx3h3zLCkPCs7ARbREopyD53CrfC8yzeajiiBF3zFBJd9rYaDQXxaxms",
  "key20": "4U9xCBD4jG9xySZcYCqdRfeBhcZB1y5moCtbyrxSRxeHn3Nx3AGxrHyM5fbPMb6xrordPs6SxcxMnsHh64gfRh1a",
  "key21": "2wWQtMWZaBwLrVtsmafNgVe9qy32zGeX5otrqeejCtKUEhnzqwfJaKvzyB2zdmddgvGPac9jdhGP4wrnPEQHnTXD",
  "key22": "9bSNwfSzpTBhG3dh5xyedsRGwcRaukxN1QUx5qZqtDQQc2sCDprEi2wtYD1qkBpraWHu6FVsBVQzTjyTDHrGc5Z",
  "key23": "s6rGkMH5vwCJKeU3bVLFJ2mxsdJUgZBuFM1hXmVm6yJ8eGshfaEUwTtWomjmRVzN3RKJQpWTT2EVusGoXcgC7EY",
  "key24": "2M1JK8FY4GKGLSzWcyDAz9idA2AL6gBKbJ7vavmLh7yX9341kFw8b6Wg7M2sHM6CUeqBDZZCugZZ5M4KrTavQXBS",
  "key25": "3CgC3RKDsb78uWgBsVt1Tm3nZB3z2SbLt4AYF5M4vsbXmRjxNWYXYAqxqGnRvGuCrh3gxRmBopLs8wXwy9UZc7qT"
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
