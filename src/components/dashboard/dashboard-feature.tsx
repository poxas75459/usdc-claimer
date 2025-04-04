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
    "4CanxR1XfSBYj468Jz6YKp8G8fHj11j6JjPw2jrNV9LfrF2oU8VgTP6bqyTFvjW37uNsyUoQaRaNRg7y2NcPaohh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTfmjQ2WnTiEJKJJkUD2WujgQAHZRCArcVv1ukD4mJx54AwHQxJdiVHA6px9g2WLyvmzk8MMWkkaE1HJeozyGMb",
  "key1": "3e6Nh1mPaqF7pSKriJmqGfRjNnUN3amXrJkd7V9rfStF2KoeQrsHwToNDUqt49gDsmkhF3onsAQdoUf2EGhvmL9z",
  "key2": "sn6b5UUprbQ4nev4aJpJBYe4HU46cozbCYfPzZFiCGEUS96D7LC47hkpYdqG3axntJfjgGmsK8aRE97zLtFkBYF",
  "key3": "3sZUrNvW1ym2jGXnND67pufPZwLcgJg9NvcdvYua7ukxRxMfrg6Zj5Sq8TDpNmEnFAS7prGAAjubZLnbAdfyAYnr",
  "key4": "4ihLdYrr5bbztbZ5bTXJtjJMwrH2rvXwg43w9fNdg4zg2xCz4F5SYKxnZc5bABuWARMWuDKHKEXEd9Rrggk1eHc6",
  "key5": "B2MjiXkfyWTeXomAzLc34bpds5fSrAaL9QitZc6XmsqC1H6WLt8LoGw5QNC1rrtsyFojYZBnVHCwwx2nn9UA8Q6",
  "key6": "3FtQVQoxvvJAFCo933XXvwX2su6i4ibwt985uFCvWk6dgbb35TUMx6D7LWzCgUoibEXdwh7Ea3GqRHwik8TzimfC",
  "key7": "2aku883k6mqwxYRinAEyy7tsxSXCWa36wHvA2fa3aF2ZrTAfd8BL4zNEvJxj3HZADirJPkoXsTFr8QEc3Hypf9dS",
  "key8": "2XaiDatvPkg84HwcXj7GQKzA97LDvJTToPwG5Q7XtwGPAQfP5BAZXVka3vC3wMNXy6jR2XiRJpXKdA1ke22W18ZQ",
  "key9": "8Q299i9mHAhXCWGH3skMccbHRRWHAbXS4Kic5KE6kfB6HEhzQUwWMXjjBnKGfYcGxvj21Ks3KsXtyCgFa8UQq6p",
  "key10": "J1rtLvb8s7XZVYj2JqY8bRHdEiyjUrpu9WdusL7AMmfVKGXWxVksjqZpN5geeAoQUJmKVNHb8kQUcFmKoMFgL9Z",
  "key11": "2bKqoHqVaXop5aiz7aLLtgS6WCMqbB15qL6VPCnQigu8YUFD1jrUmmmcX6M3qPkSU1T7vc6z7oWcFJjwhHng88G7",
  "key12": "5zu599WyTjW9CwDYEezrmALJv3u6pFc3Rrt9x8sizPSRR1YYVSbFTNuvKsNU9PrXmpwzB4Hx7T55fzpdZZN1Mf1D",
  "key13": "CBDCAPuEvhEe8ZziCuga7J3L6NdPgrTHKn1bs3FR7GUfwtguxkL52TuTG7DZ1G7CjVr5vSak7EZebXfE3HPpCNk",
  "key14": "4jjKg4xbvB4diSi7ktCvTughp1L57EocXMTyA8wXHz5YHybv1qogZBUfaRSZYdPhesTAC3S1rNjVqpkmucEre5hk",
  "key15": "22z1hFBvBCDVSZjgfMLsQwQEnJgx1YzC25K2XzKfGXYUkA8FaDhNFzj6FPqK3Yvei44iGy7aVT9KaJvyKpnQtYkX",
  "key16": "5EnGmDRsPXkCt7m9khohQujg14FvhU5uxevJhXQXpstSdaLqAh3AMdbvgsz7ZrdNa6RRxY5iLyRnVds8gEiDBCMZ",
  "key17": "5V2VLkBjs1ntu5E83hpZdhvQSdwaZe6D1jtb9TDbBBhJmSH1KDFp94akPtJCNQUZbutQ4Zp2hBBTVHMJrc8rYF7D",
  "key18": "GwYiKzqqToVP18J7ETn3pifdheRGcS64qeWaVEXgv3AA1ZrYciY5YmHhXKihebmqxgoVywnKtbmmpfMoy9EtGyK",
  "key19": "5DA2KvTHNNdALbgqYU7XsYsn8sHrHXVubx6Nhr3JZJ3VAqqJDc821SY3dyfPnYqTRuJtxmLn5MaJEUa1jGj1JYQr",
  "key20": "4x9WQk8W7kETQg3RAuXJ7nLGWroPm5W3LVfmMZBWEdPdvBdAwHwJRWVqnhum9j3Cwps1CB7cK1F1uKGWarPBXUsc",
  "key21": "4GLDYyLsFFh7SsXoNqfmySv4SJ3RfymVaW9a4h1CPhaADe57Cgu6C64kNAh2J28LY7LpoPMUccHcc7VaQjBr9tZg",
  "key22": "Cf6mXWdk8YdvapHqt9Bs8JwLeR9eeaBX7SSujU7kFXYJYFU526EyCoCwTMYg4wfna9gNdFft6LKQDpeyD5VDfzx",
  "key23": "kddLH6798S6ripSe9kS4vSj2gaBRvWejv6jZdA2FtdtX5sGJSNwfw6RDPvgt4vAm7jUotNHXfDQQGYSVymuRZd9",
  "key24": "72droDV4cPrahBiQXwgUs1JZYqGjtMRwkdQvbbECMhjmBPaLeuD2YhrWvDYrXevAH7Pw7smc4g1MYKhSVKY1mAU",
  "key25": "36HJm86A9DLQj5Py9BbQsybL3TRvRyfYtWZq7fXVxMMAHFHYyR3Ung8KsynXh6F2qCDwVYu5cPeJfWkWdszTK7rp",
  "key26": "qXp3QyMZMd3KAa5RrwWaEcRadxkjpEqyGNQnFG7duiCUb8dbCSUU3QmNEUGKgmPzjcp3WUmbiBqjvT1KDDwKG8s",
  "key27": "cxHPvAncJdGLqmZQduznWv317oaDqiq1ohgEwctP2niqWzUC3JaEyvSn9AX6xZZyHdqipjfToynE5srjb5HgHqC",
  "key28": "5XDYS62w84qSviov7RkpHDaJZf5yv6unQdqj11GhQtnhFSvLzvH9WWwBYy8jCdL2Ht9sjPjGj1vLNgZbsDRvRGr4",
  "key29": "Xvzx4z7ZeaLg7VjohKFXUdyoydkoSWU11bswoaXKmKydvwK9d1vJjCRToyVupdS7tDKK3bc1hnt69ibk5EzbDRv",
  "key30": "3PMP5sJyCzSrjosxuRcw8RjtihQvn3oaKZxkFatADGjg4bibpC4C6NnHrv752Si2BmJT9APuMeZspyDCWrFxRNge",
  "key31": "4SKHvZFsPtsKvHpUryCGsZLn2KYPayfCCdGKKY6kCfBhnt6zQQtrmATzxGPViJ44pAWk3cHtwehcKovRaFJrBmCn",
  "key32": "2tTkJDzCmKT4XNDw1zPdE8jfmiLUsC7qPn876o1ut3oP6kUobdE4eKMaqjYDKsCTt521ya8ZFAktS9rxPKoWF9yV",
  "key33": "4weaCtxuRfoCkFeLJ7qppAzb17y5dSZSqDWsm9RkD2oGNR5eiuxtStPi8yYeNXbY4tLukeb2xjqjjeoJpiSRAzjd",
  "key34": "3kGrohRG2uCmGSaSPtUDeq26zk2uxwThRGMhUVQaFeBrpyMN9kvzrj15ECFecHV6z8i6JWhVB7AijxRPhT3ZiHq5"
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
