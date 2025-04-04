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
    "anRGr7HLvRxysQZnh1PE6evg25FhyTEtxTtPucDka1GnNLMtgQbdZyH8qenQ8n96n5LdeUUVhEV4LEAJhAhvdb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BcrdyEzxqa4LT4J3gWeXLe7umu5aoyWZQ1ZyeipTcFpvFcoeyWKJki6qN2ac5EWstpsqH3U2e277afXHx2tRcWk",
  "key1": "n5GQoiny8CsGHS3ZSeqjDqQAS6X1iZ9xnSk8XdKxKTEweThxSGvZvqewRUPxNkbYw9vwazEFnRpySnsSLMsT3LK",
  "key2": "4AFqHYvduLGoykJmEhh23Svw5DkQP6bDSAss8yykMzhMFSYmo2Aset33y36j2RWHFggxStg3swHzHBd4b2EVh2uK",
  "key3": "5qJf8Wovhu6AqhgVj7ouZEjSWNRzYD3BvnwjQLgiAwDR9kPhenCgb4YLitWw4GFSDtWYhAubeDyF6NVsAdsWD6Z3",
  "key4": "3PNjNRxgLivgWTyeheAtN3QzhqW5acMPueH2qQAwZopPrxyELCmtLw4zAcVhVLn2WjXxYj8oVTc9in1EWqToVvNd",
  "key5": "5odUtBts9mFeGhdWwEq1Pc5oWDMeURveFdi2y7NF9HGNtHGY3Rr2jt93xrX3H5UBNVqZYhUaB2VqRv4oZaCv9yu5",
  "key6": "5oif3wenEuAWiG4U8tx4kd5mvZcfcaxwzNGU9y45z9pDxidZNpgkSavrvCjMYFSM3hZwjSW4oJiEWgGpx1yFQFjt",
  "key7": "5bwhGDbs5zP3jpVwDFUxacge2eYWyQWfsknVEisUg7DS9aMF88a2BZtezVszdw4Eqo7t1HpjWY8LJHNhowggbpdU",
  "key8": "3fAMNhWTt7aRYoCL4fRFW3GqN3u9mWGpN7RkycCBQaKpKWu3a2yyt5aG3C4XuZ4d5ErcoWkam1zPygeEtawoZ795",
  "key9": "soNDPTievmFPc1Wsna2yPzTWzNYohuoDW2gvCh2ceLWabbumVoazTAE1p2GmZior9Mze19J7zcYf7HbQx7fi4Am",
  "key10": "dKNcCKiPw8nAtsQmpfbvZGMwJgTXZNjetcJq86Do7jhGGG3kJFAsXKvC1HWoYfFyLgRvfcUko9bqeg4NLSpX2Sh",
  "key11": "CN7AGitRJsx53UzrDmnouyxKYJyc2p2QHM8J1GqMzKZthMd3MkR9L1J27TnPwShG6mzJ8Vog9HfsuJMQVrPp4dD",
  "key12": "ABdTyTnP8E6z4Pm4xxJevbAETr1fa5QTFbkKfuHQY9fooKt3hC2aKBd8R78frVKFQVtbwTCst7RepkRPqvuCw7F",
  "key13": "4dUVyqXxhH73zh3kHxZr1hENcQ7nGvCjPxrbmRb8eVsxMc1ffat7GTd8ZsxJhnUXDz4ewf1kSon5SRQ6WcRj9q17",
  "key14": "5GTUsnUUfpJRHmJQhXJFnzJrKLgM4sZuNEos9nFkabdkfisEPWWgNCJqKNXg88bZPWpYRUSx7S3ohVAZgecKPZme",
  "key15": "5eptoPta1YmJMdJ5L8YynKoit6jD8bBhQMV84Un3D8TF3DYJ918kZ1CnwPHbYNcjNphiarpKXgnasTaRhtFyvMEi",
  "key16": "5dN48dhf4auW9FWUGKx3fNSHADfcZnzbrSgbEtZBeVQuR8mDyDUBpmTacEVgG6LJmUhDzZw2LhJFdiEjgqFLEtqF",
  "key17": "4N4mcYeC4xSQ73ahcqYbJBbLcWrgAUoAdy1PZH5Hs8KuQtg33Y4KwNRuTyxMsTs4mXoBKrJkz7JeGbPsebnMjaWP",
  "key18": "2FPTLZNDSpqzJG6yADhB9Ckc1E5SLhVSWZc7R3HH9KvfxguYuzoqAcsfdxAMJwaWcbuUPeot2UrL84FSXFVvNUWv",
  "key19": "HLGi5R1WV7Aq8un22NM7W4p5aiSLwedbC3ZbMbxLBuvEravCw3XLrpYADbTnGB3BVic6fDqJjNZNARXmqPMhhL8",
  "key20": "4gSR9CbQV71fUMfhPRDxzV4whXycwwnCxFuPuGPFtpHe6nU5XdQNzzKYip33ZrnTYd5mh5Ws94Gfvftv7TmcoDwo",
  "key21": "3ZqmydQNw319dPTK4JQ2BH2jNrAEQPWsAMvY22Ze7d756nKs7m9UifAELe47YDeqJiFCQmCdLtvVVqPDYtvn6r8e",
  "key22": "5dVeVtUgHi2HMoyh7R1p1d6Q5GEapG1XdHYGBpJpoJQTrRM4V45wPSFNGRmMd2FJcWiXbMQur8Vdabgvq82zcfqk",
  "key23": "4v9omV3YV1isvqpRf3Rf46dFVGc4tBkuCz6etbFPNpHzLBzEnwstDDXif3fN4JHLj5QeH6aFpn9zaKFk9i8Rk3mu",
  "key24": "4hMtYXAmh7b6TvR66kNeeCbDRy31zperWetknVYkeScjN5ddsuQbnC6ZSQmVsFEUsQFEfEbh1oLfbifFF1YiE1qY",
  "key25": "5sAfPNdADtNRP7HUm1Z8jD9fuqMRyuSLM4so76QeXHAdTT4JZXUg7zdcHsp8ZWHEdqzdJWJvcKn53EwJ69bLt4sU",
  "key26": "2hvks9y7CsqwmdCbRUfHqFKV9enQ8WPWm7ybH6ADsuU6W51gmiHeqVEmFmwn2rxqCBkjBDZ3hxoS4wGU84YGsSna",
  "key27": "k2SmLyd8Jp3B7pcBWanYMbNZpExhv74N4xovRkvzD6xRtfyJoRHiDaSoHYAYs2wMgiLEG66Kkd3QNRP4xkD42Aj"
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
