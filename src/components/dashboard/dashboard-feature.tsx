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
    "23wqagfWwjnNaJGFrheywmGghdkU9ZZiDJqxksZUjmEEYjdtXPjkXoVAKGHn5NM3JPCSXKyJSaKvrzp6SGoECqH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6191KDf9yeXG3tECdPK7R1VNMNC8jqzpK4oo3UjyNGS7shgAeaPf6LActR2eACD3hma6jFzhsF76G5BffmumYBgQ",
  "key1": "2Ry8umByTwprdTDB6kVwHbojTnXd4ZNJqRzD5fpvKbeYJEAsBsz7qV3u65dwFdqycKrUqMQDtDo7ygquiqzuhNAs",
  "key2": "2GMTs7zkZf4CGoE6wMDmDyueLRybeqz6kVLTJE63Ds63TUujhKKDwWMRtYEDfmQdaW71rTKXvvh4VSZXwWrGKF46",
  "key3": "4w1CCiwHUPCZuBwW8bMCupk4i75uaDbzptdEgGYxprwCimj5BY7ZUG3oSBYYoLeHTHSWsPUzdTtQZLrjbYc5cDKQ",
  "key4": "4Jsk8niDmu5LKMWhrkhJEPe3dnLqDZmz4nPyVenji8gNEZypFpdjRqVxXg2GZqgSMc51TfcpcxdokkDDnHocCXdR",
  "key5": "3p5SWi2nggZ68w4EVRX1LmWofPfnEqSxB5JUQbSAeEWbNGd9mmaULdp3rdi3zWhhKGqWWcyv4KA2wVTwT76h2m5N",
  "key6": "Z8iQJ5KMLu9bft854q29puHDQeDwgv8HAegX7SwRfhVcKfdeotFbnjGs5zhHpoARWK3BTc16r8q7xioxrgNFLUh",
  "key7": "5m1uyzthTGDNL6wXJqVRtGD2QtSiuhNXD6ayz8vBLtjtADG9aCNW5o37ee67fc45n6VRQyEEbGTHh6hTac8FMDjN",
  "key8": "4TrMhJbg6TsPveudPwdvSFaWnYRfaeTzrorUXgWViktBXhGmhXUcJiT38gX6BzzNrdkJ6wKniuWWeVvS6Z1aHM1f",
  "key9": "CXCWaiMSp4D1VBYof4xm6HMsTZbJQWBJyVG3wvedggyxnJ5yk2r2nzXWT3b8k235WEsYWMmHwi22FMruRxnx2RR",
  "key10": "539wD1z8ZB8BwatRWSQj1pDnWBEobTgLB7QXa7Tphqt7KJ3EpjbvF7TaYURzqXHmTMjfUMzsrpkQsknSJHmwAUH2",
  "key11": "4kmTAQFnx2vp5ThgVgErJV4cUV8uqZE9Dc1vsR7oLnPr6e4QzUu3dnnEjRwBSqC7mmKx7toWiUKbkroZdEE36gHb",
  "key12": "3HD3MrKvABetPm5LUwZ8r9V2hzhvT7bGEtMHdJbCFpP2kesbXMQ4iexCVHi1tpxXdXuC5k8934SZXn3wirtXeiaY",
  "key13": "3ncfSU8dfAXC5fLoM3odtL4v3fhkQRQJGiQyU8vK93EposQWro8c1pPnSRqyPwmTZZW1KSCQafqRGz91gPR1hjMz",
  "key14": "4GgsrC2tkfCnwuP6vunDjyryGGZWXcBpunGn8fTh2i6wrsYUGmhzz4BX4nJgTBCSPxQs7WyspeTHdZtDGUrLWehp",
  "key15": "HVfbLTrsHXaq6mANsEHLB5uNU5md6wa6DyCrz5ZKV4XgCzApziEgnnPYPvBD6wBuew92ZheK5d8ZKzmwt1dDfrt",
  "key16": "44ck6kMcTL4UNRNQSY6TiCXfxXW2Taff2kUPtgpyApxovVeH77qq39Fzo7yWDmDqbaJmrvVXRaxVEgZp1GWurbzH",
  "key17": "5nasP7RVNTktbUKpkLKRd8wGBAZuhyc4fSAhNRKXbKKJcdfDp7gpbgHuqZsTCspk7H8VaxicNyhfoKhfQeZsZFvo",
  "key18": "4hzkz2xBn7DTjAuPYTfXbSaivjhwr71MY4vojs8JGBEgF38JUZL1DuHhe5n16KBS2SANA2NN9htrb39VaQJVHMG5",
  "key19": "38HDgp2aEU9qAEDzK5pYc4fvp2fTM9SRVEcEBY9FAtWGVPkAysggcamPLdL8zKo6TFQ2TD8ibU69CyRM9SQDAgbD",
  "key20": "3vcdApMsU6TkQn4nMrGWzmoPZLSzWQXQ3y3Npeskyr7KYWYg116pVfcYutf3DpMxTX33aAuL9JFWrT8ZqFbCEifL",
  "key21": "3GqdLZ63XULxMDTv6cAtkf3Dh3daM6AK6CGViUXr3jrnvWHnXJyJwRGidYDQiA2UoKW3zKXFqvNsEvwKLkwcUryu",
  "key22": "E7og7WGU4Am2zY9cKSWifPY4osGKLzUUJ6fq3e3sngsykQPEGMVSjLiHeC4Nfb61r2ZBuhxhNL6UtKiUM19KfQG",
  "key23": "e2kmkqQDrRkDmNDw9XEzgi64vxgjPbnFv5LbqzW8zxbpFky7m1VqiQYuJdUjrVEbQURtZaspLS4VRgDyQx4uNVW",
  "key24": "nNqcokDb3VFBUAXg89CuJfArH4TPQTG4GGpTyrFjLmr1bMEag3RduzkcD42dWAJdLEaCVyVyN51aLHjkAYUkQH6",
  "key25": "2pEbDqqKGApRrHYhnm7GtpnPs7w6Nx9xf9k5BMywc9SKdUQwN6U3efKzvtJmVKnJdtC5ZE6HWvzgSg5CPLtYgje3",
  "key26": "2rBDt8gP8aBRKWkNMg1xGgnDc2hrhJQsNwt3ArFcoPzFzHfBsxGsPNfdfwaLwztZh9MwyQpnY8R66kgfDd2LvQyA",
  "key27": "4NrHrqTfWAfYGVVwa57MPYhX7wGcdS2yS9btCryRfSjSWGA7kReTAvQzAVKTkTTYxSYkxiKUWu5BXJwhN7f7PE7u",
  "key28": "2wC9FiJE1xTZamiavhVDqEisgCPV6yCL6eCtu47a4qFTMC4LHkStAkxPjYQboGrCbdHVaAqDhwD1dBaGZKB28CKo",
  "key29": "5JL9DT8qK8ztcfnw9a5dRUCUbfyQhK1tFDi6Y34W3ATGWw681KQdhARHbbrTAXhtKM44eSxqDs1dXU73QS6sagpm",
  "key30": "5c8ixnbGThKeFWq1xeuuTBBqDKiyzseFuDorTysMMW8VeygSge4EciEs7vqjiqPj7UAPvLuk1C2ctfaMcReeyJKP",
  "key31": "422FMVWSsPymCzFJfP1rCp7FrxkMxtfGhsSgKmC7RMUrB4ktZXXmJG5MXFM5qmxjuBv1TKKFdtBPZFMfpEwsJAKN",
  "key32": "fZiTueSsuPeFmyBYyZt5YoMd4wYCBP6BDQpX9vysPErSkBXwZjrSYjD1x22C4LnJcoPT7wr1UDToMrFQm3mTVVk",
  "key33": "3r1jsGQzpgnhp9wKCUUFFJsWM4mewY9Tc62pifRCu1PhrAGG1UMN9LEES2bHt5Dt36VvKUbEtj1tuLpaTn6oQBCn",
  "key34": "3CUCVJg8xh4i97NbZQz6z2mho4nkiY944ZRuNrpcrNKzRQ4s25P1Fo9ajGjDmGYNBuMnukazH7K8FKUYoBgqfDtS",
  "key35": "3pQwxLwuZ2JiZWzf9yTrr7GnzAXDc6oWhWYgvLcTEtwUnewrUfMedkmXrRYdyWFRTbqSNVS6a4FdPkH2oqTLjrYM",
  "key36": "2sQbXNd12vaTAG7hdoKiE5Cvbb2E2dY7qCVCygby2fTDXsqPQrFWxKpSmNKRWwi8oFJxmC7hCHSqKZbWZvA8DqUX",
  "key37": "5kdSKbMNddcjWiTouWqii1rzsey4o6zT6BPbWsuVqNF4G95eUthn6NUr3g6YFLyaxSAbiHDRYkmvRxrGNRtzByL",
  "key38": "4ePsGSSappUL7BwR5qaynFyEveGaTcrYLvhiN8jm1MmFSRKNUCMYpxSmtCiAiX7uubRBCdukPohqHYU2mJSHahPu"
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
