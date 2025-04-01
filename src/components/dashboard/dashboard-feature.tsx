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
    "4fiRWbdL5y5FPhfNcKJGmCaua2mZkpgcEB4Ln5Gciu4ktuEP9pAqhh3uGrtAaEr9msbNGqH86nUNGpppfm4QXb5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmABwjKfppcjgYJZV1iNuGHmDuMUTtKYJ3AkoXjfGYsN8pK4t4FRyTTa2tGYih5nuctKLjDKMK12SzjzuTVPNKs",
  "key1": "64kYxFtSRL5Bf5zW9g2hW5qKa7ECGz41oKNY3G4Sayp6BZWygFipbvPP5fndNvWpSzxj1Qiw75bgroju75rVq4HL",
  "key2": "3G3sN3ybsrkXjZ3AtWBvprsgM8zFwQbdwmadHHS3xMgfgs6Kd2Yoh5M5xowrWQAv29ocSQe3te7YeVaeKTPoqiKC",
  "key3": "5QUmaPyyLUCuWJHV1f8cHPz7MKgW4cbHhJj5pp2X51fH5fhpCWLboUmQHHL1ekYuX6wh7MyQeDfQ267m79mEUHRc",
  "key4": "291RfSBcapBnU4FbarseN4Mh2UTffzZQAozUMEedgaZuT5VKSDvzWDJXhY7gNpV4oChFwy9vgqkSKXVtSi7rqnfx",
  "key5": "2WyL4sgjYWXLYRx5U4Re8N1kdCsnyf6L8LSamR5Gd9XHUVLVeuG5gLQQM83y4A8aXfVn9DSbESYHyyWowXrGe6wr",
  "key6": "dPh33HkAMowzK7DbXDMdcXWPeZP7iBQrVHiNceHfLwnzVL9gXUNNRUD7eR7iA6GMymWSSxUfYfMrk4k4MXefbbL",
  "key7": "5dK7otyhcsiqwqvFpU22EVbp3ycqJYm2bdDBXskR6VfAXAxRqDfdzzFdjSF1kxL7GVB11pbT11gRCuBYcwY7hS91",
  "key8": "5LoRHsEn3o2Lr2Wg6eL9rFFaw1CgodZVi1L1RJhcifnX6q6NqnDXcN668P1iDrhtsyzidcGY4WmAYXotKsJ6Ubzf",
  "key9": "QeNormpoPVtyoqkmxs4rvD5bWe1mv5ayrYc5t3uLFABjKLhs5ZLJaufi1j3qA5fnxmQYDFcW7NNLbAuH2m85xK1",
  "key10": "28xcbGTa65fBtgs53W5YmtCotmMFP8np5pLHh4v5HpDEVPGAVYwwPTdJPZvApr4XvuPmnb5BbEiyE5Zk6XXpJht2",
  "key11": "CYaigCbp9k3Qi9nHFiA5ogbhAhfMzu5uuNaWV9ncjWwBxHxVsv2BbSWDGSia9PoMXxMjcS1nzkBtyuVg7weCJoK",
  "key12": "2jdMudZV14E2QEB1DVY3caWRbUzQCBSGmDm7q7YwSvenJa7TaVbCKrmfT7PXSSogochmw87ns73XXHY5TMpURiU4",
  "key13": "4AB88ACKY7v5uUSaG6CYPxKgdyYaJKoPGsKS9TPEHWR2vkGMkuc69hkFWbZWuZEPBwhSxuVo52ZT5KFSXU2k63AZ",
  "key14": "eL16scomLRKzoMjkzgm5QrVW9qe1B4iFSqu2TdZQ58rvarLB6HGLZBW6k1znnEQS2vRHw6hGs3Ckw5fqFDmMmcR",
  "key15": "5T41AV9BnEv3ENxqc3xj3X2LfjFBA343krSpkx3EBgEp7AeWkscf4NfFzzNYxPVTRueKCjzZ5yVMre98zwuCdS9o",
  "key16": "QtUHqFWVCsLASC3bWoTZtkQCtTV4KjEDaLWzZBdN15iGLchWm9uMkbrP8G9kysiTsWzQGAeBckji3rSFKT2mGEZ",
  "key17": "31US8XyfMHzS9EUNeFBtxfdvaYN8pzPew75Zt2gbNSqZE3jYfhjvNnNVq2hM11jJEimjC3V1vEHA4Xpmx5bsEDjF",
  "key18": "on3H3nyQPQMQjqPoHV85cKttM218eNaXDbb66yHdLct3QPsUH6FuMZc3VUoPYXRsRgNiEdAZdExkrrVWL6DaMgE",
  "key19": "2MjyXvJJTgDEqNRUQABXPhU8XXJDw6GHxiz3Xp6LpKbVSTJhqhet5wyYqnwHY8FdoYTGsWtRfy4agaNHxNfpV37M",
  "key20": "4h5GF3sD5CHBwi3hLAHq8NG6AFbrUaB4mVKyJijmcsKxNuPG3zTiJRiKsWj7LjtcRmSwT4dysNNWTyJzW6z6sGUn",
  "key21": "5XHy7Hn9yS6PDrwnmPNukEQFcg9LhBe9eQvyQwevUxKt1cZWnEvmsF33npHany2eYHqcsq5NrTcDUcBp4ZAztTK7",
  "key22": "5J45EaT5caSUx88cmyRhutXWT1X838kLNpKErkYd8D59GV1RuGAU18ZdNDiMtqdXNPghtEr5MnETZg5xyQU1hKqj",
  "key23": "22L15yWE3K2Vi99yCuhKf6R881Cd6PEKasx12ndavDgKo2Nbce5L5ZjnR7wkPv8WfdwnkGTE2ErY9dpESjxMZSfy",
  "key24": "5rPYB59TPyihpLMsaC4SNDDhguwTqWZ63Y6fE3iZqm98tsNcKG8wRWeQepCX2y6XahJ89ViwozPbofZcauRnUENF",
  "key25": "5zgyGBnuSmiRojFww1cNTGd9gaz4WtLLbLyNu4f8PUqnfDU6VeRvaFrHNAsupRNsjY48kgCmATKes3ob5Mbj48cm",
  "key26": "2pb7K9KxcV1U4YB8GGATkkQQGbJ9J4SG4bePGfArbdodTB84KxaPqMvq7SC6EYtBfCq3JrB74X4eNE73PbnZJy4C",
  "key27": "4UHc4PhRbTa98L49gDARmN2P1w2XV4NmmxzQZ68py6DchH6fRfRh3JsCRqFp75CMLtKieuxEhr3AKfuW96ENiWWr"
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
