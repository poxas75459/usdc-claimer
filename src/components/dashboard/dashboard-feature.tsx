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
    "5wGcqr5RUuMamAbfdFgXmPt2TGSHNeKJH89vHdqKPHd37YauMNnHucvbENreQJmeSVnGWrWtnR2VdJ44eQKo25uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b1WYnE1VqaqMagNGStGYsdqUb31i7Zt1hsRJ87brc49xDf81BmSzXJ4U1MN7A5mcUyVeXCfvQuvpn4Mzhfmke3u",
  "key1": "65ZpYwNfH8kMMZ3MHXG85cZ5azBqDEkk1QqvnqPc8mKwUfyTgMvXUJDLwdFREnH15xyWEpuDs3ccdkmmxwGs31D9",
  "key2": "5d4FKQZStvg2BWu6wZR3t57zMwXwxSgTPw1YRPtHrA7Stxb274BA2h9HxTBdW6iXvxM6LAcsZXoHtFn6hemufvEC",
  "key3": "3Mt7c6iiTyMXPe5yQyWS5BL5qkcyuyaHtdQmCXoQWnjCbEEAdBfy4WSmTnpFri6m2kgzNggYAoS99Pxcdn2xm5oh",
  "key4": "3bKczZ984bEM8mqaTRz9YwuTxk6GmRCuBvrTQTwKvhpMZnbi3y2iWvg9xPLiAzecKanSJnX3U8trtZNYV9qo3WzL",
  "key5": "338cxuhyGMmE5ATdF8o9ijCQfWBssjNTiwe4BGGdmN2t9mrZv1NxTYyMVhgbAxSCqD8Dqb3jigHmQwYJfvgcK5r1",
  "key6": "2MhkhAQKfzPb5NrdEancck3RYMfZnhVRQ3FdrxfNJxmr5WTM2ZMm85VphsqYYDK8o8PbLoqtn1ZyDngpMjo1Mtvv",
  "key7": "eJCMJGsEBcprkoivUXJtb268Dw7yQ7CaXMe6mML2MPGhMVJG8PM7YwW2pug3Uu8nRTmLzkx8oLjun2ZZzCY7Wft",
  "key8": "4A2V9k7PLJtDfZ6wSTAiKwuRwi5HyCF2btcihwNsKZ71pxfrCK5fd6HvQuSnPJkFB5arEGD1tGLTr6v3pp993i9Q",
  "key9": "3viRP2kSBsxvnwujD5BB87CjQdfNPDbsbesNEhy9VscymPFxu2sV6TvourxKc4Xe9UfHYkcBEz9kgSLjvCAXRxsh",
  "key10": "8pin8zgRs51neYdwJmRBBN1QwZJmzBKGUPscbSTeKHzpzMv6qpDVUQsWuXJ83H7a8Lrm72EMtdyWSL3eKwvqPRJ",
  "key11": "4KHXdboWkFn6aA1ZW4T34QMbMhv7CQsihTUpHJhBrqN39fD21jgYpaZKu1VwNNjq9FY7eSa8cUmKwxpM2yP53PPa",
  "key12": "RVyhX2q1FYT7JZoK5nhB1nhyUUScJvasNey1W5or3VrwtFp2Wv4VEAVGpfuYBjoL847VUHoGfeefNX9cMKxc5wm",
  "key13": "5C2T5SiEQy7YGotHeMX1sJ7z8DXra9FzDCLvSKh5yHNWry1xVTtQfF4Yy9hn5ds4bZ4ss725cZFpEeTbEycSu3Tk",
  "key14": "LsmX9Dy4zEEiXCTePQe7XE3dVqVDLF53pRiCeC7J2DbrYMtNxNA49T6bSKZuk4wSDTQQTniaLpdJ8eovtgKasJh",
  "key15": "kNdZ8CnKrkKqDrLD6m3ettnW4KCHum1y5XEW7dKUPkQEVoyuGQKgto1FC13F3m5NtjVQ7hjTPBdydeJmMjHgT77",
  "key16": "5PUfFYVdnAskzmjKRV9qVS7WwrsZmxMxTe9xAwUwr2quidGHhVdvioaXAPF1s8Bqv2iqnxxtDPpSTAPUbbP8emmd",
  "key17": "2912nvmY3M5jX2SwSjX1kTPfchi8vk9evWWGwrwxosGYo6oMDm9pThyzAHayfJMiqoyK1cGShudm55iPuyUPPqZA",
  "key18": "aYUjCbATFqNbHRU9GpWK9XztHF1TUevRAYhx4wLZk8NbPh2vDX9pLRUfseExQUYT6crkcCfJoBTcjPA7F4rPvQW",
  "key19": "2nHMSGJStzmkiutUrzNf5JSC73H5spYDAZjV6JAV7CQnGCXaXkuUxVs1sUB8zPws7aMTcDiAmZCEdu2bnF2a7qiS",
  "key20": "Rxm7NMjTx5wPNvisdsttkiLFeHJQwSEpLH3uWjekjzQk5ycxZjhMetXmcEsxELC1jrnBNkFbRcf7H7xHiV3LPke",
  "key21": "4njEhwFssZph8QZQ2bMgZwTpt6DxXeKZs7ohSt2MKnNLJqc7FMqV3qCgwi5pLApeFrCyJU7ApwZ3QmiaLsoPp6gB",
  "key22": "5sB6t3UbszaJxqJS7WHTAQCr2tTG4Q8NpBmqjsJjAeQb9CvntqUidkhzGbY6Ha6HVzJVUr6xBPGx7xcsvrzRbdFd",
  "key23": "4CL3vYgwZFeVjRr9DbB8LJdPuZoPytJUXuWK1KxqG2G6sqLhEwt5B79VykNnCQ4LkYaEpE5ApepHvkAjD5Sx8cnN",
  "key24": "5rheX7bKiq4oXsvv5YtxJwcUzxHVXQQxHE6JmncDdSe5HMfCuXMvMaBPqESKNsmxFwJ8wHC8dcpaRgkNcsoakG2H",
  "key25": "3pJ82HZrV4qm4oKyDGhZ3swQeMSx65BXXGquV65xDKLjCL7r7Q87ood8V5hd3LhXBvEGLvroTDrjfqagDjzX91sJ",
  "key26": "3ppVczY2EX7rMWVwvzrYn6Re6K7vS4xLDx5ZaVZ6CaaQ2LFFMMec6YnTZPFXKJkFiXEfKrZKzJeKDe649N9Tp3jj"
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
