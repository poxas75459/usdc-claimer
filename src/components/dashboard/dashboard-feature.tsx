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
    "3WpEA3tecydwwWXjutd6CxJK7VpCDuDPi47qHctJhUk6So6oW5GZTZwSi1GkxmxN5nH1CaCtobuqfgAYBAEWkcZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LeBbzq9FzHnhQitL3Eh4bM7Eybj3BVaQwmkRK13FNvnpqs1MUpJzyu2ZJjpLcXdXJyVdUFByaocMJzVj8mYWXa",
  "key1": "5RDFFBVUoNX1NfcCNsWPTWvodt3URrUrmG7bcHwMdFZsrTNMfwwcrZuRPCBZgiv3mb9MWKmDggWY3JkfAcYoDaU8",
  "key2": "4BruMf55UQCsMMe3zidbuxHfVHpbYXMnry4k4NpfazkjBaeafAa2McrUB5rpykj7PY76vdoPjiQc4s9JfM3XVPhw",
  "key3": "KownMcjncdZ6dKPWUJTXaLs17skm3d87ypu8UtZcjpEi5GTTF7e95fZvtmMr37tVgUttaAacfQDjfPCnvFS4kRZ",
  "key4": "5n1YXS799jwfhyEwdwyaLqHwV9b5BKKykBR1AV7ENop594FozuDRUJZmRZgFAPvcyMu3ZuNXKpwTSJEHy4csRGco",
  "key5": "5qNH31Hi5Vtfvpp26QtRe4UbTFqm9MJcgSW9atbwW5MXQ37ZMwU1JLprK4ugQy2GAkniKnZHzr62CsLHVAyhMdXv",
  "key6": "4cqJHdZtAjVPxpGdzPY7M9NtJcYVWvuBjnPTXJQaHccUDSHbD6g5zNTAZbynYQf4rdzx1WHwLT3F3KxW5Lt83yYU",
  "key7": "3JPVqEpLsMyWwfacYoj8oi9B1shMxttJJdntxje4QqcdwjsNiWg1QN1YkG1JYiDBH5hG3VF41C94Gd9GuYhSF97P",
  "key8": "5pvcjvjUVzFJVLyTkneEgZ939a5sFV2VjJdGFdqaFrLtVWqjWp5hRkyXEXDS7RmfbdM2mHaMHespXRpnx8vXd66J",
  "key9": "6WDFemdNG9XVqPUT4RERt5eTVUe2Pykv7zLxuNskZ3gJWPhuAjAZXoxcVf2NBmMcZms4T7eMkGrdDPU4jXtu4Jn",
  "key10": "1y3JakhNXCCNjBABjTXdxaeLbyUGc7c7HVapPDAwCZKy4t9BmNfMJdwwJioUactpv9d5xMo54FVvhGNATqqZ8jL",
  "key11": "24GayKqWzDTMWS6FsHHNCedHwTfnFi4ugAxx1EZA62etaEiMJ6sAYoF7hbvxopaZgpMLh4B5bKjRDdWcR3aFJHCM",
  "key12": "31Ber86FbevEaarU2AoKXnyrNCPEZswC1EQJbS6upEhP73zeQ9ivxrZaiy7T5UADqYS9mQKBaFVduoqmtyTmqUm1",
  "key13": "43mz8kVvT3tvHt8LJAoijMP3gonpKst4vAug7kiumrC3XSL7SEGy4U8Fhh8FYru7m2njSzsRwavwj2XRVkD5Pq7d",
  "key14": "2nG42BSAaSviBufjhhkLgNQZNjofZSdm8iRUhA7Vvgw8LKQJhYv1bM5UAswCigat5oWtAX9XP3Hqk5C4JwFdUopu",
  "key15": "28hkv812kvLwF2kFqE773nAkhTgCiDZ6VnsGTdtLZWQc6cEWavccKLLSkRVQqf7ZM5ereDuEeonEL2PfHQ4wZ787",
  "key16": "3LQ8pMnXrEc3hxcit9HPSmQfY4gVuzTzwqAzgD9CmDT57wJXkqt9YjtRH65tuXAKp18hoSpgoFjTUKKXkmtZEfLe",
  "key17": "4hX3tQY7uGVBxWNu3xpJPcvuKv8ZtMKEUMNNsoBX3e12BDi76VUZ5UQpWeGbqN55LjRGhtL6MQKdsSW783Vv2wn8",
  "key18": "5K3KE7EHStpVcK4VT8ycKFXud6T1JJJHCQmMP997pmTQCr3cMLRsZbHKMWdcdk4G1FvvrRz3vTNLD4zErbGqvbdf",
  "key19": "7z2qDbUyQfDXxsKWyrU1HzfsuppqgNhjRGBFNALjDi2vPaw8wpRaCM7TJEhy4oW37yfGbwJkqG3sVyPn7jVBheU",
  "key20": "g3KQcPxecUZJ8rz1XTRPfqTftNNXG9PktfUL6sdduVkzbCpSPJcejzYgFRD2vZRYioRY7oQvTfLVuZkEhr7T29y",
  "key21": "5Vgtjwh3sX7DgARUQbyYrApUV7iAUKk6jM83kTEViK1YCdZ2Jui7XqDqNuhS74g2cDyoT3CkRh7ULQXEUWoPcHW",
  "key22": "fQEiV5ugFmHSFTkb1U5f93zEWKVcuYiYdz4pvSVW88WhZf4eqpaqqKztPuU2Sm6kRE8NHJijKraBrj4APVsXfH6",
  "key23": "5aRKwqwtv6QM3NNQjQiDpEC8xJ6Yza5veyPX4b786xi7uddiDWFfd2XnA9v584C84EExupx1ucWXY4f7RZ32x478",
  "key24": "i8Mdi8famYzzLc91QF26SgvG52CtN73ofrJX7x96N6Apnbd2noQtETNSkzeBtEiQZesr38xJybg4MVBJw3Lhy48",
  "key25": "5wbd6bnq1ToyCf3i69PrQf9HLSDC1jmjCGzWgQ7owtVoz6tNEsFPh1bdzamE5YRi8LsPLXcWm41igKog8ohSwpmu",
  "key26": "5AS4ixW5s5u1SmitqgoJ3aeHZ3SApTsWLMMVy2n7GqhyacAF4EgUkgAumxpuMcZXiTCHbQPWEKwMsNaRW1RghWDZ",
  "key27": "5qzNBbvNuqeDxztWeM5qDaV3Xi2A9sNWZFMDHFNGQryk7MSWgFJxdDCmvJtxxC5aZFysTYLgEQ6CDDfceJWYRuFX",
  "key28": "45pwNM3smaGF6Yz5Y3GaQCx5oArWRFAdrrqCdSbDZNeH84xAudywjLgUChWTKNAfNcZ1WRzsh5MjBNivZwRYTNfU",
  "key29": "3vCr1JJeS9qizRPy3PcWDRJyEJKeytA2d4Y619y3AGgVc2ZS3RqeNhHrKHMzy4cJfLjmHAFmyMFf5ffHznasDcDn"
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
