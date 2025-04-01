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
    "37Xa4UAp59f4opjXLN76zpMxxW2oTfCr3nCxaZaCUQurtAB2xwrjfUbSug2fLGaraUnYNd4Zr2y2aB7nK5gujxct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GmS8mmkMJks7h2MKUwKUQyXaKzgRV8nzYgDmJqC3fmgnh3dbuwRS71F6Gm15dUsW2HPeevVxVSvaid7LXLYzKHY",
  "key1": "3yu5dMCzYVLJpmGQW8kd92xwrFq5AAtsX37EGfT9dN7NbN92h5s4zJ2PpKYUxstgsxUPQpsGVqqvWVdu5HGTSWuW",
  "key2": "3DQwRMUBTunJwnp3ykoMPxxJ7QGFQAYoSKtt475QxTfKNkA4ABYWTDwgMAkiAEh5dkem3LXyWXhoDFfjHWCJfsSW",
  "key3": "5sjy31kff9zUKnng1pZ5D8rpRcJ1s2cmuSNuZRy7hJ9Ach7HCK3nfEYQViNZCNgzW8L5R3okkFycdyKvWW5DSF9J",
  "key4": "QY7dP99bAUCqVu7j2kRuK9LTdQAaeC7ZxxZ8qZrz2aJdaMT8Dv7RVzaU1vfhKJP3FBkPKj3GofbwTdCtuPXfJja",
  "key5": "3vbz16XFPowPANdJca9K7jK5LiuQPoRNh3jiNDmP9ztRWhcqJRTdp7PkiWP646GXGuKvsqwBz752tUiZTEGj7qaD",
  "key6": "3iPTNFRp3ELzBbR29F6X5y4KXxo1nLZozymftrYALhDC4edctsrwD4izwjSC3trBV3tXmCUBAt7tzeTi2VvNiSuQ",
  "key7": "5uZHQKWefAxP9qSecLsrUjiE1xmrKXBLuRtyYM2iHX71jywbC2BdSQZWzgCjsDm6yasN9F4R6vHJoXF4jWD46m3L",
  "key8": "5zFfiTvYdKuFDCthLxCN7gp1b5FUxqiVhBpQDMTZmcYYw57QTobPjPg3kAZ4gTV4PLo1R1sHEsY6otLamedyskaF",
  "key9": "2L4sjwjtHBrTgncngVKSVuHnwRfHhGnhpVAzuRfSfVXgYeArMF8BXa7JDrZv9yTD771pVwwfjN6WWKRtZW3GCB5P",
  "key10": "5sx2QCdTzUcooDqWuC6Ti2ccM6X7Uzq46r1ZbErGe9EojJUBkF8eNTLvuz7fg1jC7vTdmJRQPigsxKUmH6CLouuH",
  "key11": "3dQFaZLvMWYW5skjcd4P2YwcXMoyrpoAWKvT9jJKDgyFpzmRuBu5fMHuQPoZencPo5yefKNkL6pLAvRm6Uw8WXub",
  "key12": "43M5dJ21DFej8FjZnrBsSeE9113Pp2LuzuyeMZBgW46XWqbQtw6LfRMS333mJecnWTJKbwQUuVEJyDWN7XLkuEJE",
  "key13": "wywYrDXp4CL6UhLCn1dhzyfMkHGo3BxxFJTaHNSTxdnwi12mtBwRyuDqGvdoxczDN5cfL44rSV8f7E8tWbvAfdW",
  "key14": "2x5s9BFPgVUDHiR9kdTxbZZBj1g6oqMCxc6Sx7cyeJNZyFRQP7iANkQNTvW5vmrpiazpnNk5P8yvWiaSUGJ5iqkH",
  "key15": "4srWSbaRggqNTS68kMr7bvufUbEXvNXKr6HWJYjCqUAw6kFoV9b82pKgsCBN2Hi5HAEksQinW5Ps6tHqKocD378a",
  "key16": "3nGsATxyw1LwfMXz6ywnQHnzQzAGZp5QB8nEQZ8A7xErqZcEd3VMV1nZbssEEReivxdRsrkEfKesDfmzMYnJZAW9",
  "key17": "5HsquAZYfMWyrK3WcwgbVFaCtfKbdKxzcNb6fjrhxNXEFatn7Synp6PMQFGAYiJaVfKLCn1BGbiW9fCvYdnTxYrS",
  "key18": "2ybXuu66Whqfzrb1XUSsoBsxP4Ww6KRR1wUe4SzzP1rpENNpnL4iW4Bb7eExDr8v94HuRmkaEt9h5Y4yawwkA9LP",
  "key19": "3VM4kvtd8nX5LBLDQAvE43Tp5DAYCt7FbFnrb3xx3T7GxCMM4h34R6QEMikJbPKnsgSfF3kXymnK37VFANdLzbeq",
  "key20": "3kfTWGVgqU787p1wrsNvm2Lkve7jnv2zAWzxZzQygqGovLHiVYehfnDQr4JJBhy11X8GQdZSyuwebgVXHaynEUUR",
  "key21": "3fGW6DLpYwqxWRwAx2PEVnCwkP3qgMaoQ3TT7ycoeEcWwWMuBWu5RPZtJ3BwmMwHhbLWjQvhPEtBYu8ZAPTuXsK6",
  "key22": "rb1uHcN4Gysio9V4fmxHWorPt3k22KeMmNN2v2ZmTaEiMtfi2HeBpCktukHsV1Azhb1CYzRL2n4ikkBLPYi3h8Q",
  "key23": "2M3oNTxH7MvA8wt8r48hCbFqvnGatTyQ6sSKC8W7iX8sb28itXU2ez7GhaoXCRcMdXuNGtGGJ9oY1DCKnm24Emz6",
  "key24": "5UasEHMdNgdFxymC3ifvaZy29yvq3MhitBu9U5NKdXStD1WFMyUD3tHhU7S7QZfgBeQXNpDBxiDde91aZuQ5npvg",
  "key25": "5if6f3L5K2UoQEr3SuAhGa8XHJW6Ur7PS91wCzFBuD6Q5HGMU1U4Y9iJoUHsZ5Z6bu5iBiGs2wJ8vD6QZ1sQG2UJ",
  "key26": "3AEGFUJBZunp2CYzJ6vcCFk58ijdVCz2yYrCyVcNXwDem9F2PJLhejCUdhmsT4eb3W1CCpUvpC7tRXnM4VpLG2iR"
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
