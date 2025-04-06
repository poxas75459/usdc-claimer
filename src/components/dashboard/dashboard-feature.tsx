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
    "guLnC9YCiMqujTUgos9oBEScXYRQN1cXGVfMTur822vgcKaH6WndUM3L9fHSuGJFue7utiBSAcXb6Ed4uFyNkVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UCJGGqXbfXvb4khJG2CMPXDNpgatFzf7qeKb4MTNKyaGqCXheYZHmBYnQWZ94ZLhmaSXH3yUe46xNkC7gyEZQTj",
  "key1": "3ZKidS8oSmZkp3fuk2epWTbLMJWpsWFF9yVRAHB8B6hXSnfeuGLsTk8N9w4QhnLRSFAmvKVZuYnr7TXQamKceJGg",
  "key2": "4D9MFzsJ97wRHZHCFAHm8EKubRQEDzaJxZErN51SP1BN3ZpoPKU1QGtJx3GdftzpZpBeUUFsmFtWAcjtr39FzPJU",
  "key3": "43h4Yjrp9Qo7ekBP87QoMfJo3q7AAVRRW4b3VjrfvnEe8wB9PfXpetZB5Dm8qJcwBskBcgDAk3d1pf2aoAhv6Ky7",
  "key4": "4HYKdFnPTQMjBkNwHou3sLTLjifrakrdtH4eeZ1gwFaR6SksBLFpWaX4819eoNRvbLKs66wRrWXSqD7rj6BFPovr",
  "key5": "2sfTT9NYNXP2u8uvHY4G5XYTySE35raCU4EC58FxHnmpAxEXWLfVk45kKnoRgZeHsMercE6eDfawv343RPmpbv98",
  "key6": "51E8uwdXdmSP8cG7J8t5wj4cyysRzThnTUn6dAABkwPC8YXxW1G59rWb7jZs4bvVUK6raDFU8L9r3JgYjwAtWzRw",
  "key7": "3feVaRxThBcpLcuqB5reCUo6PryFK1ZKH7PxkendWiqMnoNek8snvNxuxFBMLRcDx5ACA7iCdcVaQunLdyaS5EG7",
  "key8": "21NoC9H9c647XpabJUhw4CQxK7y3qM5ptUFMSwM6qM2hQFu6WnKaDom2dqmJhhdFM4aCb2g7LCiiTtdDqm5zWMfv",
  "key9": "5bA4FKkZ2sqPQVwsWCWqADBD6awg8K81wZ8AXSquem6d4iUqUhFdCCuBofpAXa4Z2cditYbtTKgz1SsZyfNUkWKc",
  "key10": "3MtcUcEjpXBgMfCuYMhDJmujKDckddG8hwwWXZfSzu5sZhJdWuHYLHgGMVBdMdWHH9MM7myWjveJAeM9vXHePscc",
  "key11": "2GCKqebY8ZPwWMPGnunz9T5UH4Hzo5gWBiQr1JMUx6dkmRYDCVW1vBv1tbv8uyPY6g9ogLk7vZXini4kHQALEVG1",
  "key12": "63t5e9mGwTUhznUdWro51euXEnCkPNzG4QUzWxkHa4ReMrAfj1zxkVNeZk6uoRJVtXvmh6Xsa9THfiNFth8rdsJG",
  "key13": "2568v2QtSYXMQ5ubAyswM6a2kPU6Vxhvqpszbmt9bBqfJoFgk3mu4rwjSF3z3xJXt9zZVhexjgdKZ7tG6yPgxTFa",
  "key14": "4AiNpcenkvxRQnAvWFUxQ9PVkNMGrgxpy962k9ZjQwivWbX3uuYYvnrmDM5eYBmrp43w6MFFdi2jwcKKV26EgzjQ",
  "key15": "cBGQ9Rh4iLexEkXRUPJFVbiPeVheasVqsCt5hGwsPHieNod97sq9TBKJMzj7rUL5LqyqvBunYNCv6adUbGmaBHQ",
  "key16": "4yP5rmMFMUqefVNABnmbSYfkJmY9CXfYVLn7C5UwSdrZfj1Jm5NrxqhjDuPH7z6XDB9D4ukDc9XCr2hSw3w9X5Vo",
  "key17": "2tECbkLRHgMv3QJFv4D1L1nnuiZhJjfj97U2CaeysmEBZEfV7L7rYweyHxQGE1C9ucFLBX3JB6KBqU4c4THRytA6",
  "key18": "5BQJXW8ygSrjd91ahe6P1zqp3qDL2cDHVht91i4gCzy3br13FtoDjotmKv5AFnB1cPt7Ris9B18VoVHasiUNyHS5",
  "key19": "2ZbSAUkyqMozMGhpYqXByCEMpszvzcjLB4g6pd2X2Xv5crzJHh9s2Hi9xpzjA9GQ5xvJXWcS2FtcWtMoRfks7CVy",
  "key20": "2mpeBh4QKGq444HWjuGeCy1p2nXkKwm4RYwRYtzDfzqb7JJPGHcYYzPt2vzRdVDUxPbBHc7thmSsgEGdHHzrDyjn",
  "key21": "mbBa4JVQ5HzjQB6BWDGmvY9ziFdu93QzMQnQ6eWBMr84WC9euDMMcQvL6N2exDU9ysmLEkuqHxJK9FboV5UvTSS",
  "key22": "2nTRXSabCFBmdaXwhLWoA9kkFfJNacWDcJR2t6n6EkpPzfQHdPTNG4hnxnmjHXZcWksFjqGZKYqnd7VFj8ALV2wZ",
  "key23": "2vSKEAwtSAVuhM17WFJ8JQ1S2nYmqRWTitnBiHYRGyXtQVQMzL75YyBKyA2PfEtUYbtqvgjjd3Bo6yfCfwM5XMLN",
  "key24": "2aSEQubA3CNVayNvfFVff9kp8QvXqtG7eTp1hXmaJTLPYQbfHPcC8GYvExWw9KNWSqabKBKxNgtUzX5oA2w1ioCT",
  "key25": "51uPyggdFkhNhARWNj2nWpFQ1NNjjvgN14wmmHQRjJMTGat7pNnA9zMmY9a654vNZHYmgyqMnZMWoogUJn5HtLdF",
  "key26": "2mdjMoBmAbh64BcJRFMimUaf7iwK6XYovX8ka4Wg8QjviMTA6byWNEZqNZ1mchhGS8A8MGStrVHqJ97NB5Lqdo9A",
  "key27": "257i4DiEKvm5uDDYEiaXEGiuRBPKEethZbEpVutc9VpCgR2Mbxxu36AbBrnV8dGDuDd9ouzo5BkTkqdGxtqJo13V",
  "key28": "5cSEJ6gHgCzbfs3EXjBfVzUhxvkcbhDhsXzVc51MD2DxoRr1pjZhq6P5z4RzaTcgMsAsW9p2qXMF4keynF6LAq5R",
  "key29": "4tMfwSj6iuY4iytfZNwkEHfXHCx9p3scsXZMA3eZwtanVtzMXddoAbRp4geW9vnZJ14x9heeZyfJHM9SFyc6Zu5W",
  "key30": "3rnhD86a4VXXbQaSaQrp4jJMEq5grtDjQcEWufF21Nrn7gWFLyb3Z6mqAtXk2DP8tzdyBg7VDTcZtepSNqcppwT4",
  "key31": "5vcTXNzJ1EsLq2EpZxr6JQxfJ15fkUCg5M4W5r1JbB8UVebcWQEeXPJyHohhn92pm79RmKdA93gcpvDND8dut9Qt",
  "key32": "2KGsv8TrNry6diQb669BSAUGfcrZ4NMFVdwn3vo3NwVMdViDvnbfnyfJVqwqUEwNwdRCTn6qyWqWisbzD2NgysxK",
  "key33": "5CAbvqCpAB9eQUgwgGy2TYHytFsTXz9r9q6jQb9Y1HEyhyqYJSXaTiErCqw6nXu11oE8vBECrtTf49g7fdAARTrj",
  "key34": "5UPvyT9vxYwUrPGGQvXXQztkG118jFGGFqJB3GNgUkysD5aECP1i6fJzJanmE8cbfWqTeszSaB7FHCyxhavn6eq",
  "key35": "fEHL98i9vnK8FMbwbAYpdyXBemUXEPRQRwF7MvFj5ZpuFvo5kKAZMYyuxkBHmspaC6k6o8EZNMT81P4pGvQ54u3",
  "key36": "4u8KKdcSPBmrbav7sywEj7e3EEGE6gaDMQvsKjytenzcjnmmXHSnnAtpy9SjU6XEAi5xsj7NobSfqfvnwqgRFqPd"
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
