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
    "v76do7yLdU9Askb1cqv8Xedv2vyyEvC9hWczBMgPp3RHt4NjwDGA3fVegH9erNKxcXb961bhCxbCqgygDKzLCLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQrTtm9XVgnmSQCSBuCYXh5vgfGAFFNDFj6F9jYyxC45QE6ybnRVd4ry6EnJYqqABnDJgLVA7DWvKmUvwLrdFCk",
  "key1": "2QPEbpTMG5VeQxjL4z5hsfKSsLRiJU67qbtPnETPkfpzmfMqRFdcphkFud7LkGnXWYTomV1jtCDGGUzBGsPMt9y1",
  "key2": "5ykDthpazbZ3tg12B6LGCeaYWWu81yREWG5zGUBvbvnxUnm9v4RKFhP2aXqRtYcJkxiBpCiB2aiYkLBvbV2fvFyB",
  "key3": "3wnRB5G181wRRPVpamdJrocP9GHxGQ9N3AwWLRdTLfpW4XZYSyF3DkEw3mYSLYyAsy7zySHztRb4bzTEicfsyiXf",
  "key4": "3j8VcG6D278eA65oHfZsxXDKZokYW1vVe7uH7pYeAc8PDzS2gX5DWtwdhuyPJMV9AqFh9edXigJs8cg1hzTtsW58",
  "key5": "4T24ovbjsbreGb4qJb82uLX7MRsE41dP4M1XbAMA3ehB9SaWB7hwKhKAyhUifuFYrNM3yY1XcPZSaKmW58P4c8a5",
  "key6": "47qN6GWuVjY2FmJQLAtHfZnnfgLqtUAgvZTX2mAsjeqybZVocxf2sSavULEYMrWhUb841cbhVHpck2gXD8Yy8aeB",
  "key7": "6cQe6DGpM9UC2Vxwt3V2P5jEi2XDRNpGdDXf9BeNVjaAQyQiRv49UrQ2buMD6Zd715AWJEXnu45tATZSTD9d3to",
  "key8": "fq8RZD9wPNo7LhLCcZEaCpffiqzQjLw6KU6gU9H72EZgiRJCCgvvRLVibTauF8eZSmbUhPAfmf8BM31MCd67Uxi",
  "key9": "2ehtZS64aEAefdoVY1qrLGrkPY6aq888JJDsBM2rhMfQkEtxceEQR6qafqPah2DVt79MheNsyc8jZsdKZQRG9KDc",
  "key10": "4eEwHwLoN8C9tDW5PKqmhGUGgZLM1ueMvhcZ3xSLovEqDBeoXBLtGE5BcQsD4mp8XmXhnesBDqJcpJypx6mVAqYq",
  "key11": "5BBnncmBJK7rNF381ttVfis7sspwB7XWpMatnyxvBdBMZxnAyfJgBakm41qswZHfGNTd8oqNTsuGoj3JA98oe7bC",
  "key12": "43ne72dereZY9LrVRz6yFqFY1PQydcsVf3zDBejcVjwcqB1ccJRfncW6joRjCjMwu5qWcSuP9jdF3K82uGtN7NAH",
  "key13": "3H4dEnSfakPE8p2EdnfhNzyRMqM5PPec7TaZcELr1KAqsR7C3SWoVUcC15sNdViTekME16KUTePNYqv8Ws3CwTtQ",
  "key14": "3EvpoDyxQMZ2SRQbCnumUBsoNrmYZqGn1952hM2RF2TqPRGJE9wqoFh4uxK2fiBUGxpuzxtXPu7WBfm2Kvi3QJGp",
  "key15": "4C8ceoLtVQAa9X5ZVWNHMoKWz7fovEA2sMnGxhvYLyAx4CzqazMkoSB5nZFrVuqQ7y54TES3YW8fzfqDqoXhhWFc",
  "key16": "pdbCbbi4mbQdeYRmsoiuLKXrRjZ5pmQgRnQ9uQiyzco2aiXMvvCUGfG2vcVMqdSJyqwSVewwvsup69RPg7JrxrK",
  "key17": "58KcnQZcnxPGgTsAUu5ozdwzB68eXH3zpvrhsXujudkvSPZWahLee6UuwXUitWxWuD6RtnsACDQmwsWAFCFd3e4H",
  "key18": "4gkQkxiRGzqsNP66shvvtboFetZhRSDyR2X4THc8vbGQUEASQsncWxZ22qKP89phcsgKBcqkPVgrdVdpwYpTPFjH",
  "key19": "3gqpqvAgr5gM7yTUsAwcf54HtR7ca7TB6NFyn6vv1K1aLG6f4jCQxLEaNAafLPMmQMEvB9FoeZfFrYoEv62M1N4C",
  "key20": "4b7H9yT8Z85GrtFrsXg5jTpfDaZEMGrnG9SHqTb3x8PVuZpffWzVMhreYnaiKX8utj6aNgjxo6gTt7zAc7pVFeyp",
  "key21": "3BWnsUxi1jepjGVzGKcKRRymNM9GhhhiFY7DZmk2WHBgFiUK4v7PDD4uMf8uA52BvffeRhGqi5mTnnaku773CGhW",
  "key22": "57qMzgp2JS3wjeckVydfHUyopN8ZgyKzoQNH5i7wqi99qAzFvKby9bQgtSDvHWqrx9SEnrf9aVQwqkxECUkzryFv",
  "key23": "61ch58kXiDHhT9aptZP7fkUUAtG3B3MrKDw5n9CPn98B4Cegj6xXV22tsrUNgkzh5WRTj69SbKQ9TCKMWnyL9yon",
  "key24": "gqntQbBXrHXxiQppzSkft1hTkHwULma8Ea2fgZbrdx3SrMpoQEKCg9dKgnw3Y764Ba4XJtLmajt9SxJSv4rAU7E",
  "key25": "4xSYrb8U3g6wxxM8u5gVNFnbTrpGXGTMRM5GkTzN1AkaX4KhNeq3o9zuwiXUvBdLA6qXbokPxe1WK3GmPkzPdioE",
  "key26": "2WJXzoRgWdbCHJPtBRJaS14VTjhaZVbJ25hdXSvkGfunBME85E4xEQkhjYGWhqVjMB5t95Fy3US3sKqgxyz6BmPp",
  "key27": "647w8W227jCCQfWppdppBQPZrYSYYCaZnZPLrpuSkNc8nxCEs1QNxGtyphiD4yk4GYAnrp2yYj3GGF4SkrSAXeov",
  "key28": "2EKuVBHd8sRvzkFCRtCt2cnLYHb9h2B5exmHLJ3rQJRVeGNXwyhRBmDeBMrgSitFwrveRqEc2BWAfxiGiWuXFAsV",
  "key29": "3qTbYSN7LbomaRekp3RePtxVHQQjzLvoyveeM3VXESi8GwfmnC1R24yuLjYT3vKbTZqitZpk2Mb6cM9XXWncyPfT",
  "key30": "4Sxw1nq5sWVEM4i69eF11ozA2KRokFccf7ncVoJxon16EVcfT8e3KQaSHgxLZzo1rEBo7eka36yQ13DiEHnhbXA1",
  "key31": "22HPQfv4csbwzv7qSBt1zWFJ5UY72xzJjKhNjt4yNqiLwFvqhGEiQRGtrkjy7s75kkW4DjZGTgS7CxzQeKi58ueQ",
  "key32": "4PZSRp2VbMa54UHfwCL4TLBEdWJRAvdNmJ2Mvh8WJCazDMjW6FyBGqieZ3dgybjDPYhc9FgmzNGiCrTRBN9xVvhW",
  "key33": "5fChQdUruBitnSHoyuXA9A3o9A1WryFi8bAFEwSQJGSiDUJgBNrRA4iGR3SywTGUtykh8iewuUnG9hqMrNaKYTY9",
  "key34": "2cBViik5cQsZkgurF3XAwSsmqL7Nv3f7yv4fKk6eTUhZsJhQ9WZRnAht6RpCnjSeWaCitzbvunzdTjoM2FzZY8rn",
  "key35": "cUgGWCagvyQ1Gz4H5iARLN3WRP6XrTRfZjgsy9EuGRUL8JyPgjJqz4Pqz1423dCtHN78mezYguZPgMJCW4YcjAj",
  "key36": "5RvHsU3hPj9WJbFc6TTbj5pojeEtgF7QmWNKraDJmc1xdUQ8cFfAAeQXytP4pdMw2MDXkPKAqjaFqboU6vD5hcT",
  "key37": "2sW67PV5m9XLTrFyBiJsjR9yuUcKwkUxUmw9A8exHVpAeEMW85H6YCJ9Z8Bc8KegDtZB8THj1DriXsWmMB3JrvwH",
  "key38": "2FjFbRyJ3B7aYurJgc3gS5NaHfV6wwJnvePyHiQDZPXva8JfbuGqYmv2jsdnxpbmL5sKr7vgKUCiHnVZBkdPQyqk",
  "key39": "4pwnDmKqfWVBE8pDhFB4E9v6LdmZ6ABYCdnLfA5Zdjm3QjqyFRJg7NVBwB11MjChStWWNMVavjPB6k7ZX2eY6UAy",
  "key40": "2tkJzeArQLBgUSiSCj3Nas3XgL67NnDpyN31MBXEvEFY6DaxZfvVNQyLPzCoMS7JHWLziYgzXh4A6PHchirEvm3q",
  "key41": "5HUHDsiUhKtYcqv9noDGN9irgpqJLCkoZ7tr39hi1PtSeqQqB1TKA2MKeasijPFsaNEzWrJGe3E1MdaTf5tcjAzw",
  "key42": "39wjR2qPw4TLHVpwX2v2AhkME8Bi2BQkof5dpxuaG9ZEiyXqb7NS1Dp1Fpn9bRSs8FZARwAW9G1wys8oPiW4fnsR",
  "key43": "5ei4oZziK1AgLYj1m38PkJSiHD1YkAhJy6pz13dWjDbWqdUB47diZdevj1hAsVLvH58K4hY3bVWt2qEZkwHyp7r6",
  "key44": "dL8mV19UTwd8yXx44m1ySF3AM6DPhojfrpo3HXx5HQ84jBuiH65v3HF4G24pxc6AsWkN3U61i82U9poHeRJJxri",
  "key45": "3BgfpAVfApUFKKMJXNeSjN8GZ3bWbt1x4GhpFvvAEdmnjE2N88g7JBuJSxc7f27Vzx9497vH3z8vTWii4YKX9rES",
  "key46": "5xw8ofcQ8KktRgtDMpaJLasVxWdBPQnbqe8tJVx4wjj2nAufgg4egQo9895utKcoN3mjet98bJFVzQSe1KBcyzRn"
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
