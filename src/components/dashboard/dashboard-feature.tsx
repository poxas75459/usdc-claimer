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
    "3G3CY2hJcVv7HXNvWfTUJ1oNt3DecuCuxSyLSRSQXSPZcz5Bc1Ae3zWsBvSBg9wn1tHkm2Z6ojJ8j49Y2Dyqecs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSuj8BhCfaurR1ny3okPhaGzCvUrAsbGbz7jX7goy9E1EazVcR1MVuD137ZVf2ye8xiLaN99AQFjRD3EdhpL6Hi",
  "key1": "3kJQThLYPobboWqgLcJzqgLoBJbRnaawSGLeptzq2bP4MkCuixMXDo8dnG4YiGRcANEC98EYtwc78X7q9sKXk6eK",
  "key2": "Hq7FbNKDoQ9yCiwnJff46xNhHhbHHSH5orxDDYxgPHa5PW3PH5Rf1wW34S4M2RVv941aUQQhKy7BwdvrjVYxhJL",
  "key3": "3LzXvG77CDhvJqtLr6uFXKUWwpShaMf3MHVEowrmPKdWBeWmUhB8mDUrHCntRC8zrZMfvKYbrPKn11R7stgcGbY9",
  "key4": "UM7PeJjSKqiiHyBoMruWEfjqqyv2VbGso5WKiLaE8CHmSTLB9kkizW9fK7VALBPjydNb9mA4HJjdjojuTJvexvc",
  "key5": "3DGJGJiRk3nQEBshUBn4uAxYeeoDPPNZAS8DX3XzC3Kg3WcQig2uE4Xktgoh8wSpy8gDKEwNksb8tKtzCwc531oz",
  "key6": "4kf5PW8g9hnkEeTfwzaAUwf4ao3emk8VTsmfenpRAyhN9oMRFzzVusCFtq2To21AWCy9LCEFSsG6mBJY33M8hLep",
  "key7": "3QTuGc2ToecVsvvTXxGBTB2PjWiNcpmxahSk6vK8ufPi14YEYBP1ft3ytfCJFDcrVxGTFEMyubGncckwT1wRCYkb",
  "key8": "51ePECpybJ1st6VrXcDhibjf1UxS7pWdnjiwHAbHqynDi5gXFxvbARSHQp1bveYvFkkCbStUXXe112egus7yrQa6",
  "key9": "3E817Hj9sir8Ve1t1KagUcZMRmgzc3R1EvK5txWH2dBCSVTqqV8u6vvfHs4uVc26hdh3iCsBKgwEv3UvUkAu6oQc",
  "key10": "3s9j941RzFGKLjEhWAo3cMziYZHFkvzMwvUufif8CbzSSq184QBq6UrnwZxKQgiZ8ZUsm5RtzwH3ccWqLHeZNNrr",
  "key11": "62ivMCQV81s5ju9aqhJJFdDX1FpdQSz2ctqWrrsdLYeMnAX5AJfYnrKFwzbYMGJVGfpNGebE7bWadQvC8AbMXSsU",
  "key12": "3vfc8Yk2XbNRjxXgnqAvvJarNUDe5i8WdLUcGvFrAwRpJK5sLxPsoEHGDc74mPpQ1oRTuxw8ZnfX6fXeuBxqBG43",
  "key13": "5EthE2WL8xfXk8VLLrLnnnCWoebQnetKtagQayRYKn8eDN3T2xdAch5RHZB9qwj1M2uRPGHPpWk7xGPPs885yv4r",
  "key14": "67HfQ9SDKpuWqmBvsKschvxhR4268GDbW1LhY7eATUHLRMHGGNor7to7sctLb8qTrvrCzdacHx427h2emH6V4ryb",
  "key15": "2dvPUF2SPq4DzQMSDDkCnPY7EM22gCEuKt1pGdj2MoAAapn59xp4udSUeg9rK4zd9TVpYh9dk13XK8q6TGJ4JuDB",
  "key16": "62xkvyaGHSkGrM73EZBL8Ys2bdAeSZpTGgoPFakz1jB92PssiixZCCigmdU9G8wAr46VNkHPTXHATTMnPxbkNDus",
  "key17": "2ME5nDwdV5j6afXmKHEwTkVHHaKEjcqb4fWikh3rL8r67yjFUksey2Wjjswc1Nk1ArcS7Js7xxc9KXErH6uePP45",
  "key18": "3L9FR1hzzDdLqEed3DTXR5nTjZJpq8mztd2eSK88JczrgG6LCTzpcoEaJtg7ZmpcHSsgrP7ycKDXz7LYCQrGKDoz",
  "key19": "4nKpvoo53KaJ2JX7BL4scm7b3S8aRSX2cRzfTSQQ7rYWQ3pRNXCBepDsVdERmwdgRDkQpBm29xA42cwx7uDrBrJo",
  "key20": "5Tt22ASaMzqXDPzVEfeQEy2F1FcHvHcJCNTJNbAhRx8qg9MUU8rUKVuBq5AU7UvjUR94mfu2SWM8hDB7XvLJBZZy",
  "key21": "63xEpHjRDmzzgLZpybBrznUMGE9N6fj3s488MaEt8AbTtt9QMZMR5xJtwVFMuoQLni7ou5H4VVPp5DxCk1CkDzx",
  "key22": "49GvoSubXaXZCUNmUetBkxPGtDAf7MpfonHfVc7fqg1R35C4kBpVAbypGkgzXFg5Dw21AjX1cJXP8RUKesXc5D3S",
  "key23": "3AK9Ljsh9YqzoBw3vYkdFM2qUippZvvYRgTb1bYF9dweebcbLShsre3MJiyrntyMyeCBnyUQbui3LBk5KoN64ovU",
  "key24": "31ECd4bUaGNGMjfxfvJDo9aZs9xsqaR4ee3GadBwdidVHHhhdmqoXgUWqSBW5FRnJeGeLdp2AUxCV7iNfPQyKMWZ",
  "key25": "4s55h5iwBegenKP7fMR2TaWngHZg5jNraK9kQbYg555enb2A6Pht8DqxKMn4HrGNwDoef4kyoUgWWkK4YBmudJdo",
  "key26": "2Kr9yDL2y4edybcdwRpgXjkswPM7efmXGxn83eb9pZWkYK4GNe2d9oPLUZHkoZ6UV5KUn2RySukcWtSj8Bkfdd8T"
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
