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
    "4AbEaGBBf2EXcCPCB6wT3vJbJgzuiQWqzZf5H9GCnSi1Fo1u2wv3sGCKRbaJcFy8UH5vR6mgFFdBDHtUuX8eiU6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VzhaSehf1zierzJwHVwiVSnij8ka7JyhMTBV4Fv2kKiG5qRtGJyAfkzp5UvD9BYBd5SjRmXnvTX8vGmScJtMjH3",
  "key1": "kqfHWkYv7sYNgWzynSxs3qmF6rxUY7unop8pMnesHyaidWp64zBTkDpyzs5RgmnHNmbhUyDHq784RRnceJRiWN2",
  "key2": "5eNVRHXqSad9RXEMFAfDcZo1ajzBDvLjEeBoN5YcJ6MqGVEreqKPouxL2RiG2XXL8T5cpUMnhz1SVitzY5d5HwV8",
  "key3": "3xeBhXrucsYcBgxBqfeETou71K6o5vEMzoW3cxB5Zaer7Mba8TSjQcD2Netug4KWz2F81bSMaD1Jj7UYBok1Zj3Q",
  "key4": "3Bj8VUo7i1315NZT3yvX5T77yLUBuZ6JEiuJotQ61u2jeu84cZ9wANHqUb6v6gTGnQQ9HF4824aKKE5b8FLHtYTf",
  "key5": "4CocFQWcPxE9dFAFS8Qg15je4XLtHSvqa84JrF4bEjJUdAYsTcvnteVC2h5zjQ4DGAAAojo6FKcCDtyhZ5FoaXY5",
  "key6": "3xR87npr29yKtVzkcMXHtTW6RLK8Qtt67e9W8QM7oLdUQGXeH57XQkCirqKHyEY3Ce8vyjqHg6z4bmH4padHpb3j",
  "key7": "ZDZuaGRygiUpuN6A8cwEspNYpp4RS47hWiyf44vYVaNMWtizGkyuWndp8dWpMh3W3mXrsyMr7DbQkkciZN1tts1",
  "key8": "ZqDT6rMY7jGVGyxD7qnVdqANzUEnX3bRmPwGouCJgzcMrizMcytxVRVGioBSSfxJJZdtQc3QL1xy2RUpfMMtXsx",
  "key9": "4UaGhC7Qjqe7nDGWbSNZNjg3gYHAsyvpX6UGAxfff2CUAws9h6cUU5sdDsD8vx4D6TR7LdHe2ikCZPuTSH2atxBZ",
  "key10": "54Adf4aCF4bFw5TxYis1U4SLjgf41r4CmyC6pRR13ABnRPs4qarQCvdfM7T2H2cvqETNsGVC8fqgcu42RbAE3LfL",
  "key11": "Z1sLx3yP4SeoYrbRxNnD3i55bhTpgp2vWDxzomWCyXzcCWZhweY9fDfNX2sVeknsRNN84JARYLeaD5mTFwCsJBo",
  "key12": "4cwrv3gpzT8gSYsrRbfk9CRGrvAyjdqvXp5PPjJosmmfWyetVNTpZRhgGiHdTQ9enXF85X64DkoSHmT2rLy5kWQX",
  "key13": "4V1tijEoToNqQz7VNLbCzxdq5vEhkqin2YaLM8JZcwFsdjRxN2TT2JbtGHoJPYfsp7LEVdDfnZxrvwHxFQqZbT9G",
  "key14": "WbjhgjXTgZhzyaqyUWKRTsCVBLAaj2XvhUWpvqw9mkoW9ZTH3JHBdjH1s1mvixpMNNGSvyjEgnek1ZVJVe7DmxG",
  "key15": "XHU3ock1PmCJWaejMdNLdNyJrK9pEoN3bp4ifCUPqUvYZj7q9JQyAPHBLkShBkyPgiA82aapRpxdHpbAvZ6emR4",
  "key16": "4FQvDfbHce2Ak5ebwaUTDeEZHADezEzQtvxUP9f7Z6Jg1SdeKsWqLqxSSbVCCpiZfPPmrinfxpL7byj5gFXZ2FLv",
  "key17": "2YN9UnUFBA7DTxRVBigky43pqgpCC7d1tm3Usv6KkU3TaF5yK7oQsugSaLXyuD8qENMshecKvBLVVJjrcjm1yAy7",
  "key18": "3DvKDcEXitqaqoemDhJ1rK2D3aXB9b6ckyycmKDwzmCDcUexqZ9iJYMJcjFhXdfQjpMF2zWDU5kHVxibCwa3hUSe",
  "key19": "2TMHkMSuDvgJJz9vHzfg3ZBCcsaRPkwxeZiruGBhwuyryqeERSUS6zfdhgbLv9EHap95dhMgqS4pRQ7cwmZEwb4c",
  "key20": "4zQHBoAYQv3xPY65yFjgyuBsZDC8rGvdEqx6ZKfhGhVvhxuXRwzCHre6bSX48fjVgtsQYXqc7bgPsYVyZoVkKYfq",
  "key21": "3qGVrj4pNoTbLkpmVyJmBX4nCyyKmSrNhNYfyYY6Su3PmmqbqWcaWKxYqS7Gbne37MCzUjQW6v2UuvPNKtHAZj1V",
  "key22": "4mpAL3niFkThBHAouFwZLZsgiDqVPfwwKLr8rn3RHhvWinQLRTpg57m6v6snmQ4ZgCXyG41XqaRFo7Yk1JbMwfSE",
  "key23": "5NSDayUW3ikKxdGohaimhUeAyj8BYURadd9NEzkPSJ3ySsP32BRTgF5EWF7MavjBH5JgYNgy7rSkvKo5TQ9hKYmq",
  "key24": "3ExxEGaPpWXdUgPLxC88hFoUzy7b6wa1BWtNi46cgn2gmuzWyWdsiB1vgeS7nqYuWeo3yoQ3EMELZXrZnxwFqiQK",
  "key25": "3fD6R3LVxFrNgUphZTPkQmS7uW23wmj6rBhbsVf28UEhi2WK7VSdTkJVjTTh3pbe2YknQ1f8kvRmb1odaVWa7Pvr",
  "key26": "3cAFUS9vcpCf8aUbCuYAowXTMjLBQYJYEsd1du3cHJBrCNr29ux9uTzqm4D158vBMkR2iC285P9WNQKhcb1urwur"
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
