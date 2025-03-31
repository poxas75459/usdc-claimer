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
    "487nP1TetX15o1Z2aJoLoQ4C4dYLEV9F6KdaPqgMTdSiBj9r5B33MKH7ZswGw6D8iE6jG6fJPvunxznvAqHznEZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5986rZ6vE9WUmbJpuPnxAXu4gQAfVKFxkBmJkjGLqqqJW2Gc8UZF2KZL9YRjyAoyYVMHYxQJnC2XpBJJTW5MdWGx",
  "key1": "U9G8x25BDsHfkvwY7sZHA7ddzWEKhoPfpcnjVt3hXArM8mpKkZ4ewzzUiSjdrqRidd92WvT15sc5VuPyKdMReN6",
  "key2": "3wkT8Jjwa61j63GYLfgwKBZX92MceciYBZ7jay6fuvfGhMw3F6VL7qBX83qMENnZwHM2EjxuoK6sZaE46fuLVWaL",
  "key3": "4cYTE89uU3bESZBfCQKdziKA2K2G4Wba2yrWv76tETx5DKadLhQvk2PmtvbmhHnEJDBcUdPgJsJNqnnnQfCwwABc",
  "key4": "3QKZupKunX2hZHXqpXF7bKBajrQNr43iGZNU6JMwmvwc3DuRwkimcRbRySp3haHAmK8TtgbCQKYXCQEghZhWmJZf",
  "key5": "3mraywgKMDzYVhLiWAJeWiba8i87qs6krHa6hdAEatM5iuXQH64ygfza1DDbFx9EKJbHnNfEPAzwhBC2BH3eLD2S",
  "key6": "tcF87Fe1imhQ8jgmVYLvhDCR8SAGrwHnbEK9BTKddUXmp2EeDtiqx6sH42Fkq6s95PnJSgNTPRU8GcMVKJQSwiX",
  "key7": "3XBmpPmrFfdwgYNLebeuTcrdEgD7gFfzybXXMMa7WUPYusBiScxoEXXnrr5nJ9TPRrZdP16M3Si2Fi1vg2yjYxK9",
  "key8": "AMbphH8CaAsdHi7zxWPBT9eDjysqRi4ybmevZAN3W74peZo85nv1u2WKGFHM4x8sns6JSJVtHK6KQSM9jw7zw4m",
  "key9": "31UGNAzQswC3ZonGUXDdSEBasrQattd9yVXs3rNyDVwXaTAxDRiPfbjxayuTMfG4ZsGov2efYNpvJPcUDaSYaMTL",
  "key10": "3uKSqgRwvnn6E5QMUBHHMVcW2b5UF7MiJqqnbFEpXPCNaLujHzcgmP5CByg16dD4tTqSBA3HATgmN9VKoh93avE5",
  "key11": "5pSAXA4tVQiF7iRtNJW6a8PwhFNndTbkZmCH8waZwDanHAcGmRKTg4MZbEw6tzKMY26C94EiexuB3qiPCXtPR5jm",
  "key12": "4Dbg56oiyM7t8TmargqpVQ4jwSjQ7YLyjbWvKQn1VkSaZpgPKnsnM3MrT7GEDVGRwAC98oCZnWF5TNUzmhc5Hrbp",
  "key13": "33PXKLrLhPGBd748qTwEuUex7aukqCEaxsLjD9zzBJPiLYWLXuSzqAXikwCqW1d9SC2hMeiGmCcxFLVbF5rMwnNq",
  "key14": "4q3jZEZxDKhm823TkSyEqyNMK6XZez5HWfVztXQKzRDTTrn7QpPWXp2yE2TEsHHn1x29NdgkGGeJ8fHkt38wLipA",
  "key15": "2zebwQ8c92QwsaFBmut7bX2uGqPYv9nZeuZATpWErShKjosymFgmmoojjPFe9qVjxwa4wxKEZwM3gzrcWJpHwamZ",
  "key16": "4GuNH4NvRNu5umSdjXtw14TaYESssqLybT8Vdm9Nibdn1qfR2HgpVfRx8JrQnTE2pqgxFz8xAL31tVWrPQwaCxTY",
  "key17": "b3F6pyWHusfShWFjzntLTWCTRqt5cN7cdsYdCg9tZzQhnnaz5T9EQFKAVQgYGNDe16iifsoKcCcYvgz2a8G5d4d",
  "key18": "64DcMzriXNZ3c1XwfhqyW1NYANPEUbNfhLwEHapUxBz2aidJi8do2UYyXvwec8cjiLMy7GTEBaTb7X8mLUuukxC5",
  "key19": "5kqA4MqoK3e5YFWc1rbVe8wAhoGTRSG4Uc2dizYKoadBiHVWHSNuCN2GyP2fbZzeUJWqY1zeCZT9hKRioGdfLZ6c",
  "key20": "49xMZ7uRg582n1R5kzq6jjVpG1btkSPk295mFdAEdW1XMUJmAEDUjm2umyZM1W9P3Ler6dVCTUwgpZZYAHeNc8hk",
  "key21": "26sG5Q8Ph4bAHsXJD6KsmMxHqfwjiS34nBsCEJZrgLP7jLWvnHc1ac9D5gqpYBFMkBWx6U7QPHjTy27YeD5GM5Mv",
  "key22": "545Hrq5oa2wzg2S8RiKcFepMQYhfwovhXcpLc4UyXMXacEpdU1ndH4B43sVakFFX85QKjd6eeaKwqVmJi3dWe5kL",
  "key23": "4WHj3uDmgjy3w16daE6wPMo5iYPX9bqB9v8h7zy6vLkB2s7WBmWXqcqK9bSL4piHK2zXbbrgxHDx6jMjmXbWBJFj",
  "key24": "3wK5bChFDJJvgRkRueCs3HR742JXK76SettgQAMhn5EiDGBzjVevFGqc9qufofQVdyTh7fu5oFjVHPWmXirAX3Ch",
  "key25": "2yzCVUKxMUG3bEYkJ4T8ZCreMqwgJE5GZJtax9yY4HjsYS3oCYkN1hP7a1p1MGwrfNc4AsP9Kg4P3tYZNKg4MgyZ",
  "key26": "4v5acXany397whFcED5Ungv27QskFCCqwqkRpmsGLEhUvP4irXtATiyjm1qr7hp7y6KkTxQE1aUPjnfWJre4Bseq",
  "key27": "2wHAZjQFTcYk7CRrKPSDsutdUMdGULTPaT7ojtLtuiZ9y7PpT6ChP85SxuvFJaZMoNEmDfiBFaPKaSry618PGLdD"
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
