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
    "YLRcs1UGk1hBc76mRxJt7xEwtAix1fNNTkBe2UFoL3oQdmet4jdB9F5PZeGjgpjy4VUe5TSKQfxP6NKc3ecxVwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zhXrM283YXdUTYbNFJ9UKGDENYNkvPKqajzRs5ZxnT3AndXkFUgCYoSgCg28DP6dHzxK6nenKQdSrLjpK68Xksq",
  "key1": "5FazD9mw4BKo1MPH5UhYgyrLa4zMWNpSgXNDKoUTzjTXWbgtrzvJfiVmv1iDPivas2XV6pTmVjzHnzfhDwGuxHdc",
  "key2": "4K94pKWSdsDd7qU38cBRb6SSZPrq87KVqzfY1fbzudzZK4TLKhKmfUhDQYqyhqb16NCfP1AgZxZc5uXKMtwQcK6W",
  "key3": "4g5hRYNrsCmG7P6CXuesHRS1Cuov6cYcTwA4L74xd44y8BaJA8oPWfjSj4t1dmxnU2ph5nftzSka5urPJyzhz3Q7",
  "key4": "3B1JZnmW3NX1wpMjSLihxvJCMACuGhpQYjT1mBGRRkXnZkhGLJmHMAU6kicagRqevTUqgsRmdpfHs5hgbwKVezW2",
  "key5": "2ZAz4VYP3HvCA9uLZaMEipaHp2jbiVUive8DhzJ2hLoTa833jimSVcKWe8bhp3Pv37RYGLtqkfkrAhDzqurVujhn",
  "key6": "4MnaxXFcPJCRCk3B6i8WcRcVEgfp4yRUsDyRpbNRHLCSZv1aniyi5Vjekz82QdB6qmgLJ8s3dbcAnFAbajRRT1GV",
  "key7": "YqfuLsHBnWuokpiBiMgaGZ9GV2Zqj6GRmEKFZXTvcYo59H76t8Y2yYo7og5PP2GeV8WQTbkg4B1cBDef6dFLHuh",
  "key8": "HtoNgYtjwPNT2CnGkbCWz7fVXhPfjrLv6YvkzMcLRrUHGBWFetEz6byaSNfXJrbgaSX6pPpEK6keSoxEmki33t7",
  "key9": "5SoHNe8BMS1PB2qdFKfL75APh4cQaZqbwSCLQ5JyrfjJQq3wukRrsQL2W1tNTD2gqSNUwHwnKoCj2KXSNcqGNfMQ",
  "key10": "5QgxVpQFsLHGAeABKu1inTmeadPPh5LQbSpY27Eqq6FUiE5orjF1jGkgMTgdTbB7diDaD7v5hAMW83UjQqztAojQ",
  "key11": "29ahvkAW7AUZ4pLuGEmVaiK2tDp3CDskNrw1ZCHjDh9ZjBK72ZL2oxaZUt4dsV8ThBNYqy9iKkP3SwZyR68vtMrs",
  "key12": "5EQjX4z9ECUgwr1VpZGsSkMUfMhLGxN53NjhyjuSRQfBtg8jeM2jASqoe3Sc1kNvCE8Ee9fJSLoN4cSTGFwxYMnk",
  "key13": "d1iYtzFKC1AyPiMmPuiUwbb2sxTJnweNESu9N7bmoFK7e5beN1cQ358RLpyTjwt4RAS17Uv7aius4sbS7LdqM4G",
  "key14": "2qarAednmDvuei3FCi3DNibCAqVuPQHkkbcAMj6AgUABQox4u6fjZMNBPWXgeCSpV9rKwCjKoDBfNPi1cjR7day1",
  "key15": "dJxkDsPRxvsLkgvf6QgbRbfqW46bwG5dzLxN5ANt9MfEz5rLBjMPnNBnk9FjuudhfPzqn34tXLSCqb86JuFGBJq",
  "key16": "4kfTB7fs3MayNfpMkbtRHYQXcGccB1jdyUTTXRr8i98N7U8kdLKWeVshewYC8LFQtxNRkdXMMuwHtm4UZQU85dUv",
  "key17": "RJEwtYnvzGFbXyhRi65QHciBUQo7GQVNeJkDP5QwxMxAzWeouLeDDs71VPJESp1vWmpH8FWcr2yECtHoFDJE3Qb",
  "key18": "4HNhE3qubaZqNSZBzpRLvgAkgaBi8b6cLMmswfKysB42hqphbdfBKm7bdBQtsGfytm26fPJcWoovRfurrnbYZZYE",
  "key19": "54QVzRQMnAuQzcV3Jwtr2mc3DUEY4vANZF8c3VzKfxL9tbXuj34rvxPxbGt9CLjbgaLmKtiTxPQoSZummUupySzc",
  "key20": "5RTVJYNb2hMCtEktpRdYcPELocubm1gYXrW9pSkdi8w5x4ZaokTHg6PxkwEmp3jH5BeKdkXid2FrRggraXSevfxj",
  "key21": "8C84TPKRqzgPExVAFEcoX3RhrkJnhbGfihc1t5XxKDWazp2XoUFKHNtuyuzURNDuipnJu2FHgJK6cxuGoqDz8TF",
  "key22": "2DkxZPEYZTFpuFXeq6ubsfPeR7gCC4QqBTNoKywemvfK8TRXVVLm3pfxq4JeWmCLQR9Kb3VWWCLCEXjpFCmKkfF6",
  "key23": "6gfvq7k9VmCpNf66rJRji9QpuLiHFACLYW6WfQuDgERRoTWMvAuKN2GN9kB52GbWrppdzWg1ds2EnLD453hgWjJ",
  "key24": "U5MqXGuvwfWhEZQwnFwNhrqkXv7TJYcZeGKCrsNqZ7DJSqpFX9HxiCzqShh85Hm6HeqNiHHjjaTR8ZHeQLDuA5P",
  "key25": "5ky9kvD1ZPhFBMfDXF1ZAvwwPZntKBLGbXAkzjTomAkyS1j2NHjLJczAAV1kkP1JYKg7uJFEU2C1dHwLET1sqh5Y",
  "key26": "4GiytSf4XegzsAzZnnqzy9iHfqrPUKq79nrNPhDPyJwCu4sRUebx2nQtWnkHDPWP946Azjm2rUFboZi5HswYUFrb",
  "key27": "41GFx1j3fTSBEgxHRTtYoeBykUtJbBGPd6rWS9LoXC4TMRoaHPuvDCVtTRZaBwypGm7KA2gwiq4bqvhLC8qocf3i",
  "key28": "5AcstcKRL4V8MqVZtMx41BgnAfu5Ljrpk62pkxe56U6dpN6UV6x24C7XxFKw4o1FDEu4hekAvFkWAXHxW1S5c6Pu",
  "key29": "cumaAqX5BtNu3TKwzRyHTP417YAQP2WMqNJofG6DAKDWsqCAKgjuYNNxTCknhbDULsoRi39NuEKqUUVJbNqGH6p",
  "key30": "4iim9JVDBRgjsuE5vav38kjrQQmyn6sxUUE6Zz9JDUHGVq4W3zFFpHbtgzqcZMf1s7ff85d5U2V76LmCZiToHWLt"
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
