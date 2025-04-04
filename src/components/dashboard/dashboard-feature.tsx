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
    "23MnGcZMn4tCUt7G1gajPrmiCLqFwpYg9c7ce6gHnYrY1kUQvnJdwgc5PA6LkhLU9q3MHwHRxwtrAbmLxYJC2ek2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJrGfFVcGJ5zXm98A5KTtNa1z1am2CFJNVFivgQ8SgVxXKGbYGqy5mPcDaWKLEzzkxg7f5tH54C1jPZPGgz5xVG",
  "key1": "3MpezukHuuRjcQXZY3NVLG7CHJScmsgEgYi4jsnGjt43qH35y2HESghhPRcrEzVRLMF7h9iHo6yzpiFhKgndCiCq",
  "key2": "3xJexAH9wVpNKMXFoxq31Z2km39Ze8HbFEfgJhATJFMZUKPzKjJLwc2RNZUKtEriK9PBoSixgsje4VkSfVxXksXo",
  "key3": "hZxQemxnLBdGQQmoQVT5eaPhVUBQG2pyrdbUhGtfv4feoi4xMdKAywcBMkLp5qqfrsxjbU7jnBmcgEUMeXgv4Uc",
  "key4": "UJBK9Sp4FxhYqCWComsaTv3CCerg2E8jHsjh5sNK8YM5wAFMzodx6rUQzQsXbZgPVkx51YE6rCifXpMGfX3Qam9",
  "key5": "hkjid92VcridsTcx3zbELnqEGGB9dYV1vyaUWGCMdnVz5HcNB3KwWExed4nEo9436ywpgEM66ek7ENo6coN97gT",
  "key6": "3iV2bbHxrFnTN5NVggbXvPZPs2njn8YDdEDDG99AQTfUojjQk9Vp9nLsLWE8rhrHu1jRuYbUiD3PwgHUL5K9k4Mo",
  "key7": "2c3obM8SLppuFoQm8ic52n4SFYus1bR2mZXavdouxGZDMiTGMJN8BWjAXJRZcUcNzDqRyuZed5Ydv7e8kBw4ZJ9k",
  "key8": "5YXsTtAnjDDoWVCab26GbdU1rbNCxzimGxKTyf5TDcH45TtZydWPi5LUHUXqGhHG38pzfZzDvLUW8Rx5iTSJovwx",
  "key9": "5XKecW2tKBtNeN9dxsQRsiCRFZLY26vjy35aU4quVet7NgJcrwscn74PzyXGnLXktyZaFPzvL6m78kfnqK5LERkA",
  "key10": "37DVKbYyQ9SFafpp4UNwwYuRF5XcBL5DWjwCFx9hzDFBERgctK2B8BWNGqB1FX6cSSRqWxiAea9ByPNF9h2mJdVS",
  "key11": "5Z77gFfGfsaLxqMhyTmWciwZZGCYKeCrzdNSJ5UbiRKtMSvpNkhtdTwuNaNwDLfWnLWLQhyybwxz51twWbKo6q8k",
  "key12": "3ZtsKPGU7EiaBmYg8JEmG7NhPKBE2pQoPw7TKHvMS6sfXhAPj9vpGPkNuGnnsAAy1F5dp1z8d9h9Qhgw4A9MCLX7",
  "key13": "3FXmMNkC5Xj2UvV6PQAPtesfCaQnRZ5YPPCKDMLfHgdyRR6iPPPqeD59wgraUJatgy8UW77jXxFUkeUamd7XPRN2",
  "key14": "2KRjkaSRWmB4Awogncef4JHDTraNhibRjZpSRBdbARdtCTh9APybcjTYPcVVewYVc4h7TCjX2eaTL63xVe79XMJs",
  "key15": "5AYZZjhb84BbVyNArt91Nzcgft9rMjqLbfV9otx8rbexGMoU1Mfq9Vk2Ln8mQ91FoRvhF6wdVo6FPvkiFvX8fcdQ",
  "key16": "4CeZWEy36rXxYCADj7yE2enqSTtXLaAgY8DS8bNQpHcNWMVbPtumxFwBzFJXdnPLXFnurcszJxCiGnUmsHdKxbgr",
  "key17": "2FGvZE6vTnivYVbMtvHQJb73NWhiBkRL7WSse4YTg9fy6mKdR49sgJxpaaAWYi6zMqczSLPLt3KkxhSCxcCAAs9H",
  "key18": "38ZD8Y6eRApjYYRXnsX5GLY2wMvRuh1rgLHTSFVgnaStvtZsUSpkMrzE3WzvHTVZdQ6QKPA46f4TQQ9x6aQCnGox",
  "key19": "3v8b3BrQ5GNaTBC8FzHxoPQZWKingmkgJrUWvP2bEexajyDVkVJjLL47PSsgxAjBD3E1yrerSDP7ed4cgi6EgFGx",
  "key20": "36TNsHrYLXHZpQVFksQHncK1VwLnZ6gv574iJZXR5WVD4ZeuiDr5xWFyCoanqpmMUgCC4A1iGJzHmSi8xRwHEkvf",
  "key21": "4yYwSL5UsMdshAC1BBmPjjVgs2tLn6YMPjPwjP5tEBgfFhiRy51VQQrK7FXgttfPQcuCjhSh6zWxcc1QmjL2pV9B",
  "key22": "3oboozgKurSK11qUmtRYb9M6cs5mW3TqQ9FvciJCsWFo6euUdziYGG7RDr5ydLbnEh9N8kFjaNPRst9ZkzgaPcFQ",
  "key23": "5M8FStkG3WmRymGrJCymz954741pkfDtumhh3QcR7PXUnQU8JB881SJJcrS6RhFsjXf1w7DMoxQnKiHhL7TcXJnz",
  "key24": "E4yBkRgR6vd9X6aHB4kGA5g35vNjRfQdgczAg5U9xjUk3JZnKVVYXwgyiXMDtU1p8dZvVvUqMKBopPNASBMrWrE",
  "key25": "5VcXsnnUiV3XJCa24EU2uhfejm5zeFSYeAE718qWiybbx8ymQoLfC8fXgqkJpnm7XTn7ZRr4xAFisrfLnr37j8fM",
  "key26": "4k66Gsif4RtdTmwzJC21SASestwHX2xt1ms3zs8WKSB2ouxjj9jikeR8Nx8NGfS2tK8TaYi3PVwXyTTkzudSS1zo"
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
