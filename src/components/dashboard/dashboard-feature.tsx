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
    "PfT9xYjpP7yvdDTwu17vkAp6gCN82EK5DngKqjJiEvvDeJ4V1rwYqi1TJ248RMZZD86hHrQXjTn4ErXR61e9ogz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yNW6SapnAjgcBRStWHfkLKxh8duvM8Y9N1kgSJmeL36KvsWrxEU9q2LTtveDqkGZeVW6XDyK1YUYW5kKrmTuEsr",
  "key1": "2XeJLeT49XQ2dpap6BNhdsQQ9xGtrdWVnjZz5mQ5L6FyW5q51iJnJ2cTHFm59aYM6vWNQuCdLR7Q4uSfjoCA2CaL",
  "key2": "3nZ9kaZEzuDv2PtUuT2UaXoxzLWHznArsfkripKhkHMsPH3KfVDVfZCZFnhUvG9PXVVDrWS63mCgJZrrnPP1dpin",
  "key3": "2DkqcFt7BoYEgaWmLp1t6p2A2a6FdSMPyzF6xYDXZL216jadh415HuqpwiFoSoHCKbRu7752issRTQzPw98FLpR9",
  "key4": "3Uk4cjn8Y5b9toRp7fqntVkcWCBVcBJ9HeMEpScLB4PuTZqiZJdEBfaybxeC5qfXBGdcD956LRzNXUYfWEYjkJ6H",
  "key5": "hrBdgmjZDTRwFx9EoJpHdrYtrq2NUTW5dq8DPo988uxnoWPkPk9pypfsP5MJDfqbUD3JzicTmqtpBaJXX3DryWo",
  "key6": "3gbNpL3Qct692rfVAjZQLbYXzB2qkZ2Uuqx4D4jDWV8xUmcuBKx5R6fUwXzB7AEGY3TKFqm7MEdTRGDde1cwy634",
  "key7": "mkezgNjAR6bPsd5BSS1knVPmXY2kaqqi7JWeH7c2mPh3DpKLRwNumXtgiZLBpRU59YC3xQWP9Jxwq1rpgzXNGbR",
  "key8": "61B9cm1qxBrHh1uHdwuNLCoGhwjMUXGYyVxsqJ3y7dM6LHMKaRHjppqZkZdnjDvhzwvJsTWdigYfaGks4XyJQE4R",
  "key9": "5FgccC27cM6RT62KUwncA5JNP4Vdzui2mTafm6iP6dzsE3vQ258PGKdhP9bLA8jT4grYW9z7tgP9x6bXeKmdJAxh",
  "key10": "3nNGaXBjj8rARnfb3EfMMvq6B45HPSSdHJSAAkMC6zYxkSKQZJxoaBqKqVFdPJbtKyuvApfxfBqUSvz6TDqSntmi",
  "key11": "1AKnzGe63y5BqgFz5hwJtNkX9QeCYAhFUHcquDRyApa9MVzQ3VA4TaTndRc5useZX4DFAQb2MYhdfkrQAG5H9Pa",
  "key12": "dvN9y18Xm7qZ6ThecZHWiPvboCCQZDAiFAWd6zCu5hCTFAWhCj9NudNfHQykp4neKk7anhg4HtUf2ceNJnPWCCP",
  "key13": "5evKCA8zhQEh92RtMDhsmA9Tgiishg2VTF6Ay9GMHWAGHZFtDHEKorsKxWfBfX9c2FgpYwqPg8PwGyAUNHAZsazt",
  "key14": "2EZ6TucXfWeXKZbsaMgcceF4HP7NLj5dW3jaxUMhuAsgnkbm9FyUbn73cGTafJVHKoQq9QXsWp9DMZGVdY92G8sB",
  "key15": "3dmfFXKAQ9aS9saoDib3kfVbE5u2t89C7uQR5e2USb4tr8f5ft1Vf7obgXygUnFsrnFznqXjA6EVooRjqQcMDe5G",
  "key16": "2hLjwUP7Ry5ao7Z2Ybgc5XPuy8HtpR9B3iNbh8VeMNJregeYRxnq9c8KstWs54qzttBa8ZoqguB99UXWF8n365uw",
  "key17": "s5wErzQ5hy2FiJuLvzBx9DHVTS7eLMQgyPdk5ZxUWa6QiL73tiaYwVmp7e95dkf5LxytzyGnBoWZMDfXnbCZsjN",
  "key18": "4SxkZULQVZKMNFJqSWxVY7rzxbUS5gRUdbzY562moGaP8GXxCwpRvK1hU1mGzjTqwhJAUYA3e3329hECg285ZPoC",
  "key19": "4kjWJsQZzQct1M6WQLaq8tnB7FXe1qYyQ6ZmvAYE7unpBXvkvTtn5jN4eqpgcZip86RbGScN6nzZTnzFfY8TB1vr",
  "key20": "4sgnNrJ57aimVEaYfyLbSKbovZ2oPwcsuCfHXydJpiV3cchBeoDc8EGho2h9sTaZuKfTsTbCHx9X7WmGgNhH1NNU",
  "key21": "5bWRHS6s99BcM9QXfcrKtdK8tyya2ggbfRJm6DyJZeH5PrjqvUTreEsvBAeZPMku461Qo4wpbGWQXxgm2szqWkqT",
  "key22": "5ga5dVEztSZdGgM26JsEsg98d36EPaKXrAg2tHJ4V1seD34JcXbqV9HMYopMFXhoPumLwuDEssmwUfcYnTSeXJdY",
  "key23": "4qCU423EaQGuMrDwMbZoi81wNTNenjcCXxnpkhf8EuHrMYnCQr2XE4NNDXDafUsVC4fsy83jh7deHZ9VkLJpvSQi",
  "key24": "3ZTTy3ZZjBc1c1cuiAGrgsy93wu6W46y2JneS5EfLgmjDLJaGt5AQruLPUnQCxz4R5ED2kQcJfx9ntgBeDJoajQe"
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
