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
    "4ahu36skoXZKbHPQ25gFKmB5eu9c1jT5KQfQcM29UsrqYsAkd1HcXMxdnp7QYK2HnDHDA6GX6cPccRbweCCFnGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D3j6pkr2aJ51zP5HuSKLSoWohHivfJZyjaUB9eC1JtKCSe8rYEts1AqZoByahA97zH7n1iN5vuKsUshA6BRz6KL",
  "key1": "2H9JUvSxDPasuj4Dkme5edGYLrnSKwFgsPwuewrRkszrqpG7ESXiYtJTdcgTusgFncFJ7hTg3NNfCgqfM37zjSDt",
  "key2": "4BJPZ5ThbLRHH4oaCPzkcuHiyRgiFQmDFj5vbsLh8qQShfjE1nRgzxjQWEvdgE6RVL61X89FjD25cj7aUgdRWzcw",
  "key3": "WArb6vYHrHhcLhziSajokKVekc86ZwJiGkw4prjDBqewt7mjHX5HzHFSkJNKvrNgxpqAxEbfS8txr7gyw4LgU7j",
  "key4": "36QdbjgaLy1ryR4H8QXkgmbGshTNQvi2JRtqa4NXEfAHwCsm25W3iFG5psrQwdEgM5JpCJYV8sNv1eRk1eG2XD8s",
  "key5": "4jQPRHmzLPMyAVAqmmUmsgmWvaigMHw3yiXRStksjNYFSsD1AL6M2inJMjJbBebF6t5S6Xv3rdyCiuRJw9aJotn7",
  "key6": "4PqLFNGAYpcP6K8nNUowBQhCFjL24oE8KKqo4gyYvUeSgrN776ZPjMd58hjKqtKVrhfWN8GqLQCDBn2dyGh1k8Kg",
  "key7": "5CHE6aYceAdP1WmZgssY3aXVg8uWpS7CAWpzXA9brpX6GdE7CBUu8G6ZCZ4kMuiayBexs7PvryBwSg3fLxJrwFMx",
  "key8": "4NEed2uhhmryXXDimT28bVLutYhC6cxfknrASQj7QqVmAFc5xTL6c9RdUJ4JcoJsX5WibsbYi2wLhJCuAFwGWPNS",
  "key9": "229QHRpB1xWo7WKKLKSKg6EjVfPJYRKwb6m4CaXZ6uVrDfc1PSXyNA9Hr1jBSzoG4aEAaAMMCxJBBu5nuAZVE8W8",
  "key10": "2gBoPP2eFXmM8ouvCZbJYQdg6kaeMUUdeHkHxqimpdx8Ef68fW6JJvSGRTyWmHXGiu7p35xKjcj6V2qnvkoM59cw",
  "key11": "3roRHVduxQxDYihsZ1TWQeJauCynUCjxDGo1gbBhQrz4WzGHfS6U5Quzbq7dbdY7FYDQELoQbxNu3cJiPFvnBJ2D",
  "key12": "2a1tgVJPqP6JnjrDKM333gd6fvGjwGe3ModfwYy5Q27ktjgBXYKobLKm7BBTAm2K9P37u7EA2LbdVRfAxGqQgqVA",
  "key13": "2JB5TuqMvUVNJqp6WZXwWqDm5uSFCuvZFfMUReBWkm2AngCHS99YdQ2aNCA1mAuKYN7G1hVwMP95Xb1XmekdDFFb",
  "key14": "NA6mp92iTVu52TjAEiBwz2LaVqEQvqgrsccJmUUGfPub941hYGcAULvtM2KiFtSxZL35iWPBv5krgqVeDK21cGc",
  "key15": "3yRjgPutUSCcxsdJiNfBC6WULTqmF8qm9E5GEJePZoq1qZEZW8yN9VHnK2sTBhU5tj5Zdu6pcy3uUWCZe4jtLr8y",
  "key16": "43SrmCGuNUJJRpKyEpbTHb5JhRj4AUjyaN9dX7hDPJEsDuu6r4r3XpAkG7mWx4MPzNbkE1w7drAF2jQSJEnaLyf3",
  "key17": "4KfjhdsCU1PrC5tsGxuhPyfMGDetj8yoqrptgBGz37uNzweUoeEcPAXD8gsmwn6GBsGNrEfQEAzqErC6JupToXFM",
  "key18": "5aDkrcdQtkXtpAfLC1zpCq5KeCRnziuqs36Fpg4d1nb4hC2jETszk839ifYTRj6HUKkVvhKHfRgtAxD1dWS9GCBB",
  "key19": "5mryftiJNWrQas6ipJi4hr2uS5Ey13r51RBNBwRvt1qDtt6EGKGsbMR6ALcWTqEZTKN7rZzUtp86WLr5t7YG83bF",
  "key20": "54cwiVkQB6HF5WmvGi3yAkFCGvpoCm8VSZUs5rBgc27JqFXNPuAoGcD2mUy5ZsocVzvkB5ZFvYhmGVaorNQE96Cc",
  "key21": "WESkM6c2MBWNVCZ8MW2XH3t8gLgyVZ9Sgts43JNmfe6ddt1iRjPaphTj4kCu95zHvooCUAGsm1BtuyDQQ9KCbAA",
  "key22": "zoc3R17LsLTaJL4eHjTeRJGKtJNyRrLM7mGnx2uyZDXofEBadgyaLQzenkto1tAmxs5wg9uv3ur6ZGz6w1d3zVe",
  "key23": "5Waps5XRjnnpdhmi8xhr7dQoWjajwhYmpFNrauJS2oTDMVrfcw7c3jcYtNQXVnsUcXQSWCRj3pvFRLsxkHJxJSgw",
  "key24": "1LccSESWGy7nF3qHwPiXZFwiQeaSwRT1u3B57f7RaqWDiMSSKXrcf7jBm6mV16ubUFoDT3xFqQqoaSkyE52fLfT"
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
