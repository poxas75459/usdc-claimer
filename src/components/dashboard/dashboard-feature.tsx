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
    "3Dfj33sjzuQYi8nuHoYBLavogs9ZkRchybGK78gL7FcWDdJd1U6htaTXjhohmnw7gVfXTm6BFpukpWvBjCeRDwV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37YyH2C8TSxwa6HGX7NCQ1TCH3cYvuRST5mYJjDk5HF4W1P4Q7jnKDNM9DKraZ5h7LqmJEqJb8T95Tk1NrH764Ed",
  "key1": "4UTbdRNDxbmuUXi1oKTc6LT3YmNXwdVPXyJfz5ydJqXNpK4CFuHaqeDRaGF4jCMGEZucAAcKYMyejo5X8ZMRZ2gf",
  "key2": "XE8k6zgYJfuzSbMntP4nfZstxKE9CrW6A8175NaS8vPx6jeyayk4zEeSoTqJatKjgWMYE2aDcKgscCrqy9gKvcw",
  "key3": "3qYLHMuEHHZAqLE8wX2Mwq4BSfjLjEMtpDrPLymida9yWfn32j6QmvKK9RJi3tZhF23dXiTMZdWwBUb1LSwpZiwm",
  "key4": "2iLAj8cTMhJkrAD2qFeN8TqmJiYUbGqVWDgEfJ2StN7WCnBqTcURyZRkYXoJA9ubi6EmJ4g6bDE2Z1KM4vmi7bES",
  "key5": "47oE26Dc2YXMFGzR4ntccX26aL8pMcb7tVmTmsZ9CihQogvfzwdV7d56fb4BVsiUGPStYPTutsMovqQP267kmfuZ",
  "key6": "5Cto6yWvuUgrrBx6uxr5zJDqBmR7huFNNhmawUzVdjRjPZBzfLoYVhixThzTUHjmmBs2QKRPTHZ6vy5SJJS7qXui",
  "key7": "2fPG3TsLzK1japLNq7Vzq7a1D71EHhJ34GV62cXtiZNK1cCzbCLiE8TkEwa5axd1W9R9WJLvJAfHiegGdshDGm1Z",
  "key8": "2hkrY5rd9CeGdDD9S12SXWdsfa9m5KPpVyekK8ftMA1AMRnQHQPKypTqmLAbhDCHNUpHRtgxVVuc8Euq6bzzSiK9",
  "key9": "3KhV4yEo2REgVEXdfC9y2NG2LRbUEMyb16BgvBimGdMKAqb8b2df4bvmwEEhVoJZfxzupvpcmFeqtdexyrDwSwFz",
  "key10": "3nCHxY5iWAPx9R2wrGbYFz6RxwCpzNvb6bYUPjW7kCRVrRCanh84h9w3TuwrAjteGYufLJcvgM89Kc4jwcjtcjN",
  "key11": "5JSFx7b1nFFSgGsLUaep2GQMpAAUrfVwy8NeKCtpWe2ehqtM8EybHDjVoHqE79uNiPMAZ27WPdgEUQF2qsoBSoRE",
  "key12": "Ain9DgouhdbgTCbiiJ5ouK619JTtip1x5qGkFzn22QVTKvfSVnWfZniRvNCydazwxK5mTKf7ASLPZx8CFVTXu4K",
  "key13": "GYtvwPjYbDMmt778w9d9rPfE2vrhz99vgvZBzrrc1LeuNwn1wjsiwLqUPKn853VyfJqeUaEHBwFPJgTbrfro5mV",
  "key14": "tSUKKmnUmmjdLEaLd8sZKuycGpfPu5mnhX9tju84jF3ZA5tJiGH4oZic8b3NVL4eJy1uznnXZUhWgNbXXWcsr5x",
  "key15": "36SUgTgxDxw3m1SpjhTMqvufEgLnUY5cMvGshYHb2NJfaEj6jim86m6nEvgB8CNN2SYedZ9YhQUnmGMYdpxFZNto",
  "key16": "4nxE9CpvPNsNvRPtaaX52dNHsa3QoHr6xBcBqVd5qadxx4ioiHSZVgFAPnzW5NUFyZnoyySzuSYYjEQhdrSEzntt",
  "key17": "4kjzejt7cWp7t5gVcePHud6qygpovPzEpb7XDe6QeKEMuFpNaTqG1XatosJnzDRWYR3JUoALhGA5qDUgwnsLyqJT",
  "key18": "L8wPMw2uJaWS1yea1dYT6TvoCEY5HGYLpN9c53DCLHU9RBEtd5Pd5kPTRiXGQtBDEUvvLSRuE54CMZD4Qc75Ra7",
  "key19": "3R6mosu3JAd5XaSBUhupKaRfzxk3GCxXqcbCbrCDa2axyVG1Qt7M8mT8zNxrQ64mMz9RPcfkX4n8W8hAicnTLG7T",
  "key20": "4vATqh7RktkY7vvpb1vFoRJMzNvcDDeBTv7FMZGhSxhHmHQ3pswLddHfVaRjn6LVtyJ4dfhY95iggTibuT8CKw3s",
  "key21": "itFm3xDyrv7GUvjwsxBQH546kw4oWb5f7kvn6HovDyfV3U91HHWFHCAM1sQshjjT6wB1jffcZdKPVMKjMJ8RXLw",
  "key22": "surjoBj6uABoLfC5KreMtw8jnNXm4j6mBacjrwCewEYVgvPyhUbUP79e58wJ8xK1AMN2MCE4rQ22r7ciUkT5DUV",
  "key23": "4z6wHL2Xe29BuLTMWdUBgAk3bC5V9YPu7anxJzsetSfFEqknjSwbJkGQkbZDcgGsvJRVbP7jWxGX7rXGVpKopTz4",
  "key24": "2WbZK6DbSDWm6VraZ9EgdKPMApkrtSubFN6KHKkj2ifnbZkjf3Cnb5rtZ8AZtYsCAXVn24yFfbTaVEsHMbphQdmQ",
  "key25": "5LxX8YjNtWBjTjFWwE4u7CXKXtzAj54Ac615W1wx3y4tpQd9C23kUmKmwp6j7SpYQYN1VVourTL8cnqrbsjKoXCM",
  "key26": "3QgUEdn14CiX7fcKjJCCWdMb1HAjwpbGd7R3CwmPNyNiSdoGiyv6CDVaQTaD2qjJRY8sZeH4gsspmyVYVvi5qD5z",
  "key27": "2XdPrEcStkhh3dAGt2Vzv8o3fUESghKDrA81pGqostia4EjS8Fs86LEbkWNaCuUi7aKVLkhiuwDbSTGMY8RaEraa",
  "key28": "4hiYz2X7T7hLEqYdy4mMPWsFEuLYDJSiA3jQDWFxZYnZkFWkTzqg216Dzzq97rNWMGJYKAZF2W2iGAaT78aUQe7i",
  "key29": "23CxxMdFufZm1XwqkDHTZ2mHqutnXm5MkvaZf5YbFH6Dz2abJaY9FAicbmxGMfCbhTjnvpjNNADurzwb3FRGjdxj",
  "key30": "XjzLPinueWXWbGLSiuhSPBE96wzmv3ddrBzRhmhyVjTssq4oBr7YwhaBfjKCg7pX5zMWC8tAf6u7EueqbdBevSL",
  "key31": "5NBrBSion6imvxDWwsqk6gkXM9p9mGfxjLnKFmPTaejQUrandKyyXhiQVLxdYTCVLV35j2KoTbS1kE6YW3qQHsuP",
  "key32": "F1jshv24mXnP8fXe4Qw5L7r5oj4uXBxvR3RZFQYvPy9PZwbrLJx7a4m3wDa1mKmbiWwFQEWCSfxaGLvw8LvGySw",
  "key33": "5cXe86KCQe6NBuRRHbGnqmCVdf8xksz7BmKHW91Ea7wghZqabQLPw88FsNtnTnvJBsyuegETTbEvbeKhgssbzBM5",
  "key34": "4F6BGZGcUYTsLAK7fdhEhejv5jp63F94Hqb6h3czUxQMxN8VXYm2BMarFHe2p4nQgty3Eoj7uEX1eteLUhfLkZW",
  "key35": "2NosyfXsAYQNxPPPY5VcA9963QmqZh9Ueker6gyWreA2ztMeuT7RR66N6PyjSxNXWegWWWXJtza6kN6mFdPEDcmw",
  "key36": "3vXvdErZcJi6ULZfX9TwLJYYhUH5a6JujAxNutm2ZjLCuVvPTi3BfenD26Rn9pJiWoGPU9NRP9s8gtxti8DHaqgX"
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
