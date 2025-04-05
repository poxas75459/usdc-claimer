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
    "526hfKxoVvfmoH9oGRVf2AQZbfUq3fkg4BzUwRxwwNhYJZUXi639hvvdohbGR1Pje7tdYsycd9hBgw8f1rtXUSZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Stf9BKjuwUXJ68GrGhxTFdWFcYS96p7RYjDEoYzfwUMVWnX2Qpjrq8tjA42uEMUoVB9ruucXEqGiWTQcbPR4hYj",
  "key1": "YvMtwfsKfMFvs2QGwn1Jdk54PKLAucsuXYXYstcqx5TEe5y8bF17JND7wX8mZqQA375h4mdUeYwD3bSkX1ZPTSY",
  "key2": "cQMxD1xAqEhrfqQ8RjgP3XqsYgiBZoJt6LARxUma5AtEfFD4bdDRDM5E2z6E3MUiJkUy98EE3AJovxLsjwXGRXV",
  "key3": "5VKYS1dFnTkytJFHhhb6Ubo9FaLtd8GgCVpaFtAZbHdcMt3Sy4bLSY7FzzbXJaTtodhRojmdEfRSRbCLty2iXkGF",
  "key4": "39XTMVNZwYqjBubpkYDCLzP7KKXSgrSCB61neHPZcTfEkZsYuEQYzzMsy6ssAfvQa8jH5PXE6MDQvi5QfetSonsR",
  "key5": "4hzQHBZdZYKtWcnHVpQam4yQS5wu8SowwNgb5nW7XYga6ote5yyecYfhgzfKskkpXgxHo37VWNF3QQNPwW9u7Wh1",
  "key6": "41TzEsYocbm6LSuycs9DXKgnYv4DvGyMi2p2NYK2GqqeSdKuTMWBSzd9FSsui5P7Us28V2SNXiMKSURQwmZn1nkW",
  "key7": "63gk8zSjtUxckssKUbXHdYPpedYUTsuG2CgxPcNwmVdUBTi8CeuVbnUUZZqKsC1LoG1YZ8e9tSxKoZW4u8DxKCUh",
  "key8": "2688XwZoPmN64UoCXvhyj8VXAx2DBaJrt31nLrjax5PoCN9PBfeWgayGh7v9Vab7Geqp9dLp38h5jFN79LotJAED",
  "key9": "34fVxEJYPcnXHmZSvnMPrEY7SqFrdeyV1MRkxoSL7QHTJJ2V4P2sjx1hRee4MKDkVmuBHg1zjaxRzohbNxK1f4m",
  "key10": "8ueue2FXFGjAcEq3EjhVaan2Kv7CgQZEo359zCZ39U3oWVih9BUhwwTHDBeQDdVhZrN7kenvK1Q9WbEpZcvX4Jb",
  "key11": "33jWKhD7mPAGJaig2Fva9nQB77zYymr6dAEVb7ocGgphEyACGFJCZ5TvFXWSFP1shTgTQ6VVjYNBfpELyaJ9b3kP",
  "key12": "pmqzEmEiajCB7LwRB1k4pfNMns2qFeUBL1sB5CDwyBLVWkDSSN8WmZitzPr3AJCjDR2FfUgEX9hJvsoWu5MgiEy",
  "key13": "APMYy55Sz2YgLUE9Cv7XHPFkDoZyPZVqKN9YzyxDNUdPyJ6Ewyeh3Hpg6QH4NNzbqq8ymqkffkLTMKYH3pVmwa4",
  "key14": "5ZGH2mapQvE9rG8XgBCogiBkWWEgNJymFeUZWUaTXWoGJMeBBuWs2XZB1fAqbit7ebm92tugVw7FVUG9TsRTQ1La",
  "key15": "5RDTAuyE5RYTvWhcDXpViFK85sHYrozMcKH4ZNrkUxm5R4VpdQZwQg4UBkNUQiuWMVWV1JnayUTjeKBsVqXeeP9e",
  "key16": "GV81RekntgKvRo5HvMari4QpuxMBbvoERMhjym6JJYEjSJ69VWWBTNorUFhm6yvrVH4uNidHB4j45PSQiEmMkEL",
  "key17": "5Wwna2HFy2e4w24SDS5ABtd9LBoJLrjj1oKyx6EyDAtRuXJizZANotSdtwcZJffSZByUHgw1Tw1TM1Wy4XGfgUbS",
  "key18": "63NP2mnN2UvVrPRfQ6qhusQ1qVCrP6msme1ELzJw8VmqQwEwGeQdWaTYQrzTpCdeLK51jM5xXABy7TTVUsycLmzU",
  "key19": "5oXC23B9Y7dGfkhELevU1aHvgbF9sW4T4vrLbqbVLqGvcX73C1fgL4exdNPkxKjg9xaq3YeqsMGcBuPyfbygXgrz",
  "key20": "47DaR4YtARmVkhFCcjewBorqnghMiTCgLg7kwXjZ512CbfdzWcTEwTGgnKcajKg5v2bDB3rF2tHDqQoUqjefbEgy",
  "key21": "3moXAcXL4mm26zu6gfkkyTZzfPKuzo3VmpFehJnRAdPSSW6LbRcHXmhRMazGqmmri6ZDMRpSpjouRYFrJzgVmAXb",
  "key22": "3SuvzDDC7mEECowt41KyvDbsrGVyBifvTUbCkHMBaNqiDXwC8tGDVpqz86YnC8gycZS2Rckg15gtbXBxFuvKd4Mz",
  "key23": "2zXi3E7yWKEPjtTjYyAhXtvG4eyBcURQbgy1zSgArPm6p7hQbJAGBjbPsn3ggbtCBogMMKF6bBYpia7Vq218VfHw",
  "key24": "5nZCUZ1iu1yeYnPYZNbcQzPQETu2LAyKqKFVCTjLyXYFpN1K9Hc1XjSsriPsHiw5cDxAeL4y9vELpjoM1vTAVf5t",
  "key25": "4VwwSZ3bzXXo1Cn5CwPuxEeoesLaBSB86x6SD7mUU4LG7xrpGfEUe6EfhgQJDSkQe1NELvBkdmzzMpi93eNsWPGU",
  "key26": "5RrQe8haasJH2LufmMt7EBEiSD5dWRfKTdQuJkkKRoyCsshXGZgDy7KpNH1vhA5g6BL4Ajrvw3e1unZDGXc1SvJw",
  "key27": "3432b75L71uMZ1PS1iCcgm3BuTpUXUyH68PdmAikYCkck6FkdZgUXxMmUe2W1YJB5fN5Hu8CjHQG6iQievVnWHYD",
  "key28": "5A25rJcjVXPMJ6or3BAWn7kEvGUveH4nQpzCAk3QpYHkeGzNQKG2CpFVxjc6KG6crA3FV1fp5zdUzw5PesdYAUp3"
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
