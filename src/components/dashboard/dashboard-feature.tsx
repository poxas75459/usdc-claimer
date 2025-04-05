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
    "3V6WtJtrNbpd7tYXNu4jNXAjBsdAXo6eZx9iMcHmhLtMCoioaiY2JMyRr5bDfT3GKaf6k6QzP3B7FEpZX7PQUxQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdhJTNEPQUcn4Q37DDPKbxWx39CGTUsynY357Z6b31zfd6tXQ1FZJXd78SgbzNvSFCbjYDd1YiATcEdqY7avSd",
  "key1": "4M4BuQqnQTF5zDNJ4NUm6SmASJMnNQapQL1KuGHqV3QNd9ktVmQ6Epdo259tsuRUyy3heu1DiQVp2iYHjZDkt4f3",
  "key2": "4zwthCAqMiGqj6u8imRuPX9pPt5AEbbxMpyD1YT3cTvuW9XSu64Phjtnjd38LLyKvH4vJPPpWc3pkGvuCDpMsZgY",
  "key3": "4JqViwEkjesLsKTbkiEkyz2kjtqdBram7nqTMdDy8BArxK9k8TSrUzBBuzdhux8fXr47rmAcQTnPMR7vFSzMuLm5",
  "key4": "3RsN1qcyG1MhrDrK4eeyMd1J8PCcDMm2Hd9bbjwWkpKhgJUNVGn8gaeY7CgF7Ar5i63hrPNyDfNiQaqR4JWGo2r1",
  "key5": "5RrC7SyP39Yf6FHad5V7WVHpvQsikY5ervjpKM7eWysoiczb5rL51C1rVgAkK3dSFb9CsC6SigismAxX2LAYkbpt",
  "key6": "5TfyY24DhcG1Gg1rthb178BeCFV6AQMwtNdybSoU5xK1BfLbiKPQNYcy2jYCoUD1UP9KMkZsy78iBQRDEMeg4xxF",
  "key7": "4va4B6svqKvi31n4dLxAhd9ehznaXWML3fYmN8h2sewmdZpLYg11ZHREAvQgL3oNTUCgU6gDMJEGpqeeFVFTcEjX",
  "key8": "28uP1nBEsVHpTXAeWrnF9wX9ctgGexKENJLEAyHsMyLhu78fG8h1hZMP3qtNq5CSyKV3PjaZyk3MpPTjQNgWBrFf",
  "key9": "4pMDsdAUA1Cq4cyqM3LZYfLGN4aDZM9T9ruWey2HmhK8vE5FdDkRb7nwmTqXHiskcHPiMk9jaHv8GFPp5a3dHUuE",
  "key10": "3TYmfWUv9SjWRVdBKYjRNh9sN8hPuSpvPWwJY9BJ9DecXHLpVHKT9eSX18sKHPokmJPEvmgMoQwFrSpysh9NnEe",
  "key11": "25ghrSTmDy9cXs4d4XPWzHXyGtgPAo7yAiz1XZxD5aZNQBfiooezSFBN2hrmSoXaQY5uTBLG8D3jSopfhAmkxjkF",
  "key12": "5dH9gkBNn6NwqbozejrkLN3P9CDviYTYZF1umyNZWDa3EmzTcUMGAoKYsKMrL5nByfVXizgnTJaTvcBPGy7pB78h",
  "key13": "osrgtojcZJhK47GDZjwSk7uAB7978a46ckiBQUccoMgV1wD5yEYk44vdLbTbLw8A2nqaMDPeifNpqvk1pLfRZSr",
  "key14": "5DJEW8QVQGGkLkaMx4zWUqVBpqra45Y5pAuY6pGxYszfqJ9nF4Li6uoP4rHFdGGLxDkC5kBqU7QDtbh8qHjwX1Sa",
  "key15": "4VZWH7w5pZvLrcMsUazVymzk95p6eJ4dLGRAsTL81e79qHCe9XjQ24SeB9a5uSrstvGxV1u8sKQ7q9nvkLekr252",
  "key16": "8pxuFMTzi6tUQjRSFu6t7VDzpfqmvUWYKAtHzqw9FEJdpedyhrtgwZou9YnBCE7CguDZLWUQ6duG5Tc6WWgVEVM",
  "key17": "2dbG8Lw2NourRRtHFLWuFPRBjPRnCe5qMF9GNurxqHe3RW7tuntvznHdgGbeVxNsDDBhoiNd1LnRmq6Q4PdFxyha",
  "key18": "nineTdsQVorx2ACdUm24L4mU1x8UJyyADCdW8UPSpeo9jMCgyYyT7AaRh2v4z6vEj8CYYdNVvMTUtQvfZtuaK4m",
  "key19": "4yYmXXio2Ke6LUXsrSRs5GAAdKe5UERGr7Uu3FhgqH6ABAkXCACU1FvvM9LgzrULzwgDT6wjGoZikotFjguFpWMC",
  "key20": "3NZXHTmHqAvcGcLjRckpsWB2wVfL23ea1paZCAiutDtqWEY8xLbWE1NT6JhhjvCPAhzBDyyrL47GUfwkEJ39DXRb",
  "key21": "661CUApUH55KoheLWS4TP7bTL4zZ9x7NPnSww1uyfErDEAzW1BwGfimudLk7gtrGhinFcC1MXsj4e6ihXTTEWnWm",
  "key22": "57feBKw2gK7hkBReBH34VGGRsWobyox1iKLHEksH8yp7xtHcVNpug5bSHT8CoHQgcTWKwva6oNtz7vs6UaZLqWF7",
  "key23": "49uT8L8s3RkBwGJephAbiqR5qg7vFBL6ACneCxJpBct5iYEw4Pjcoeyoq4h1gPz2Go6B4kxVRLZos9GicEZcRh9f",
  "key24": "oK9a53tNkW27vP7YBdGwUWpcPZBP31kQbu5TsyogXTrGDh68Dxuosp5bMGGSuaxommkpiWHk5eKL55j4rfFP4uT",
  "key25": "4N6jbA4iFq7xF2N2DhfJP5jDZWMDG98YBeW1N5ensuBdU3bSb73ZdEFwsnZjpKUfQBzjuW2VDhp27Q1hXxjrje8h",
  "key26": "2FbHo9tZWheXEPCB52NnyxD8n4ipJAJ8cqMb89b7oGyMGddVinBQFDqrYb99Ltk2hB5StXh2DVHD3ZcZEoRo8FKu",
  "key27": "4m2SrRV5rYzRcY2qc6kfQX5au788x5bY1RwstjihkjyZ6YAfwNTWdfCQJTe2HhZAsne3VZDpMmM4zqjUNNT7HEwE",
  "key28": "2fUq795pHC3WcrXSB29dpcWhV57Rj5CUUPzWWLynnvr5jGrgwJf2KLEzBx8dbgD2jnsqB5LCe5dHjBncjaUA4Q22",
  "key29": "3MUnHwk7o1WywgaFk9ZJwFoCjjryPx9LoZW3mUa7y3kEXaWvnCiV4JcApT98JvbLQGcS3FgtU6Q8pnSbr7jYcP5S",
  "key30": "5mNSkV3TETJi1aVDf5fxYkoCq9Gff9i6ReTesSrkr5KmJDavZ9ZkWzq49hmBCczBtnLe3RPfDG1y7z66HmQbLcL6",
  "key31": "VaQda28XfYg71996iyTBzbDkUjKfSxYwyX1nSCGDxdFFgb5uk9oY9RReAieXTvF3ukCsjdZjKxVDitVJ3mGC7N8",
  "key32": "5GhJF9gTtBCDevkBiVq9JTnsutWLuYNaL7MhJs9YWND4XAFkT57pk7C3h6NvihaTNsMnrN9NVgEsXdrCJQmXhj1r",
  "key33": "3rstZDcqWEaJ1Uzw9fyu31ANfpzAtGFdEGXw4mD1eQvt9A6HREQnsEaescwFdvx1stPHQekhzHZ7ggGobLaYuon3",
  "key34": "dyq9EMQMGEMnWQo4mA5aaNtYPCiEgAnZVNxZ5KURqzZHhdRxmHLXoEctGjUyY49H7TkeVdJvTgMMgcxusRuCPcJ",
  "key35": "2ZoP4YWA6hsHAMNP4VB46Kvk3a1W9XVq4VXncWUqPMPBh2rZgzBnxuSwKUXneceynmemovHkQ3zyC9UJGjFXZAyY",
  "key36": "MsuYJVVCGtrA1J3PfqT2rs643WEBShULbUpLbN4fKZ9Lfr4FCHb7z7nGUDH2Uoar75KnTzig63yWzcfuxdc64jF",
  "key37": "5eHLkC193D7S76ixydpYutrhQtNnyr3XMdVRQmDSWeocJug8ogWhUS4KFUnWhKc1MkXkEpFaoJBQrZYKJqGDWg8t",
  "key38": "46jEVVu2WGxu7sHtGBwPfNGPjbpJPaPr6AbtskAxC5YtR2o4CmZYVYmGYDUYh8WaPnFCjSbSUaNBvC8QBVxTjNsU",
  "key39": "3CsS4MMA6ZE2MVydZov51eSTxJi4n8NodhkTadMjz2HWoet1bdi9sD16JPePPiewH5my8FnDGpbfNHUd2B6Dw2iZ",
  "key40": "4DkGa73mE6Aif971CsUMMT1GTma33mCjgz4AW9NK7aggLSqA8iLHcA3FghjMVwJAhWY9YuTVxs7PZGtgJxCdKvHS",
  "key41": "5kmVsjjV8nktVPyKXUbqXkM7Y9YHTBoWsbz4Zqt52zRijVDop2Az1qk88Lm6QjDJKWVGP5UyP5n8AbMRUQLNbMHd"
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
