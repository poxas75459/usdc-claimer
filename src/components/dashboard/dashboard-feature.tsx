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
    "2o39arAh9jGDzvyezyXekkmDStG1k7LnYwRsTKDqFXeUp7aqgs2hQBKCdwM3LuN3JxRrQs8u7jb1RSH7ZXDGNjFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31BCfMiCQYsXGTYahAmwjAvnjCPz87MjWBoNNnGLdFesehDiPLKcG6qzCFJPo3RQQAh2joJcqDa2XaknZvqhKF4j",
  "key1": "5Ev3kiv8nWB8MicnyiggdjNKMm1y5HZpZz2X6EkeGQgrjFDoXHqApXKJZtyrVFjcJLnd2mfqrxtREqzxcjsvbXqi",
  "key2": "51mEsq5LgWQ8BAyTmEQJVY9hxZ7Z9fVUJStdFaNoBm95rT2XWNpAVrBsF46d9p2Svj4mq1gpRpzZ65uGCacpsPfC",
  "key3": "3g15PzPmJpr1imQ1woPaQsUvDgW5kZW3qU4kDGDPPzerbP4eAxWLwnmCXAjZFhT5MU7ZcP4Z4T7gR7TJmzt9nVFF",
  "key4": "rxZiM9cMJC8ZMvHhRTtmvs9PjvAbSDXq2JFGrhppm5BKiKTBrZLGWnt3XmP1PDdr6XNFTSpig3ehJW3zyNyPERb",
  "key5": "5wNMWC8XXDq7KUF3Wdn7g9jtjZH6EBzQbBGaZxNCWFufxXPvGHCz8wLVH21RPaPneuGMnathSKvgG5u8vfFi5aND",
  "key6": "3nFvaZJ7hb9FdqMvsTJvVLUq1V5pMcVyWN9SriSWAi7LPtBziM5nJ1RoTmcQbdFoZQteQuTPteoberYdv2PX18xW",
  "key7": "2Cf4YGq3CgfdXw68pkq2CZBJPQaeZc5XRKU47tE8APmqK8hFmXzie5rDBW6MNvKYrYkPoaWw1pMAh9dnPSNo9ktS",
  "key8": "3abSMDGM46hYriRFGVgCkzx5vNVhXS8fEse7F9ugHiXzuQubLei8rZPBnSwvhmW8y8RoGmWcqAx3UoRHp42qpKi3",
  "key9": "3ZY5YTLc3WEfe1upBjry3jLVgpcoWWbabVwGjgrc5HYFN3x1gNvzqqNxfAA2GU3jY28F6gZuG5iAfuH3rcWSsZKe",
  "key10": "jtCoGZNGwLm7H8JhzuEEXWbAXzBSLsMbZ3XL31rzyLRCh2veMQY5i2NCFyZmZWPaRW1ripcXyMCu6Dypyb4rNwY",
  "key11": "3btahZmng6Fe4d1bu1s9oMHzAk3gm99THasqqWgmqheZ7AhNVaoBup8wErSGkue1ontCHJrnkAg6VCegPDGA9uLA",
  "key12": "5FSJrCbhQeaedtwn9kmbRf8NWzCdwAq7fq3rEB6AADwhEstp3vhwZjDbNDwbJBSypcChcXpXzJonF4vYXkkz1piF",
  "key13": "4hRyoirKr1nWR2H4tkiYtMQ5E6D2dkA5Ta769qBvYAX3TPT4qAMpDRRNVkufJx7aWL4EqYcef2afCSej6yNZBEHS",
  "key14": "BMGNg2qpHh1VHpvycH98VeXZGcV5w8McF8fHa3VYrZyivYzA2oiNr5kTze6g2LNz763j2NxbA4dwR4u7fgZJdQ3",
  "key15": "1JGKzVKqqrSBus3o2JcUEBKG8U7oCU3p5GM3crNnaVMEsYx8JMDWEDjtjevs5rcaF4iHMJMEJXCLtExFRaM4w5y",
  "key16": "3Yoq2C1qeFwgkp9LrpNLLGTuL5xKJuRJHyymvNzajN3aqMDVGL2ZaczW9cCV1jS2oZqGwGUtFmwzcXh1mnjvXWPY",
  "key17": "5kSUqDf36zGC4ErFHcsMLQBnjS8gp6LGTtMCdcr4J7MxHcoPCKgnnUN2wGbawPsFKrSfba3y3hZ57vzgXSgctyus",
  "key18": "5Ebr5qsf82Bz4wtdE99nbtcJmhNAipAEQmvwaDQfHXDwRUBq9QedA82ejQHK15kWDcZUqtJTaCCzrHRQDKiCuSds",
  "key19": "dtnuMBofhJWNr4d6845UW7aUoSo3919NyWc6uPcDStsk6StkTX82JQSRqT6ESwokXH3r7cwcBkPVG5i7MaSTrv7",
  "key20": "3c5cv7bmyQEfZN9V2vfpKuqhmfcj6yvbR9W5xa49QKYPJoE4Lwf3YAkq7En22wygJ2TBwUvdmaYCXmivAk89D2Kp",
  "key21": "HDXDpgDMkFeoEeWcxix146QsB35366Ees23RPDFwSDkU9mLcEDcZbxnRaPMw6yfUcYZkxbUWDvLJyVuUqynmtnw",
  "key22": "2GdkxQXEmbfknDEfzxvE4kzpjz39AoAzPGibFjByxzGXjp4HJnRHutQ8bj7WbyLAgaz55ycnDVeWuKKxnAr42B2s",
  "key23": "5hbB9E5JCUbFxphhj2mWJA6y92vo1mqcUHn8RVgtKQTbDiWAjFipBXFKTJPZjaMmw5VkVtut63nEEWGkm5TEbnQB",
  "key24": "32nb9CxomT7Yj34xEjKvJLKd8FfMdvoSLWP88BZ1ZaAThJ6jEhXTjpRYKNQh6VHJ8RqbMY2bt5138iEcPyu5hrfC",
  "key25": "4CsMjGYCDtyc75hX8Bik6G4L4yDgpBBvE5XZenryepjrpAispxj5yAsQaT7ZRGwe8q1jjfXPfiaynNMmNCtD3wCn",
  "key26": "H72KB7qNsJqsnqK4kaZHQhZq3UHgYmB7woTpz15RpxanTHrnWxrKcoLKJT7XZGavBZ8jJoZt2Lay9hUmWE8qjDP",
  "key27": "44M379MrippFoFa4B1eXcNGD1CVKW24WrE491e8vSQKDaQ1tioTnbrGe2m3utSpLZMPQ8PAPGxz1aXqqKt55G7eW"
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
