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
    "5SzsgRQaMYp2X3JdUVorLDY6YtqCKXQFuid3mPjHHC9F9T6jsKoMRcVC571rkNW8bWYJbgYBQoMqsm9AL7sMVePA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gcyx53grNwKS5c1WHEwWHBaBNoYhUux7MAUEinYBmRigAhWMChV2qR569c8bebEZCCffSaih6hBJ2deAqWGAm5V",
  "key1": "27rNwMxhMButEpRwqr9eestovZMziMGhE5xSWEpfGkD4NEFETRUxFFn8UkaHE3MvKi9Jfz6eiyQBHJjvVspD8bAG",
  "key2": "5ddUVZ4kPuPPDp4xz4rSMEMNHif36Pd86JA6YDRtNhG6wSwbhN1RwD1vSMYwcSrD2sCsUpT62w9vWZS8Dbyd8FMh",
  "key3": "q3jE6P1ch6s8ME7WhVQAM8fZobVtdLYVsBGhsodZFSMof2y8uxTqAj5jcW2cPYzYp2kCNQMoQYync7JFh4gN4uz",
  "key4": "354XforJEJL9Hma2HbxUJvhZm1fsJecMZf8UZweHknexETaEjvgWebpWyGqnE5no7ga1no3bmaoryaMUkLDhw7hu",
  "key5": "9Z81Fn7yNqU4KaXx1LvaqJbJrT7CCy4KntAQ9v1iUVJ6LyfHmA1g6Ujt7s2doKmW1JeEa7U6BBQBYaGtD38tBhQ",
  "key6": "3A5RaLi31UwEkokgBUbqwRn8iJqA8guxrEM6ecfD5X61kbovzpeyjcSPe6kwUcRkgVWGAjtL8CDFRkQjKydGLXxa",
  "key7": "2MQKpiy3JndakKYzyc3S121W21nDSb3B5gEFY9Gy5K431DETcuSrZwZMy3A8XSKGUe2XZeM1JH8Ac2C96AAwr3rZ",
  "key8": "466DsAKuzJus3CPdGuF7wWwxmdgpKN2ZvHoHYXizzFByJ4KSf51Lkn9piBChaAY465WUdtRmGbwo1wdkCghzR2nr",
  "key9": "3dABs1Gttejjq5wEEgPmBTRwHWLi7paxnWRfZAoHg1JzYjKKs661EzssGnuyAgi5bKB5WsCYZiuKAPMc6a9SajB3",
  "key10": "4DMox3TmtqfspzGEdUsNE9Rc1sFVrsst5gi31jdFgDcZENXVW3JFdExytsqDeZG1ihZ9RqwEUQrPMpzcLNH6rzxS",
  "key11": "5btwngxuBFGu5724iKbPPDh4aXS8KjXec6oSodXj9oVMN6ry3q7cW7KVeRoa2oH2xpRz5q7AfapczW89ta75fzMK",
  "key12": "5uV6p4jpaFMQdNSKqHu4b77xZWzisjctQL2Qghgk2euFase5xk7YaTtc1oxtmVXbFn5GAWxkqCrkEn4q3jcZsdFW",
  "key13": "MGzYejYTrdRfZuQ68R9Wre4vrDNbDcNdPaBsC1PCM8TYorWtiuSUVYscWiWp4duwf3CR2F8D34wutwNWMxYco57",
  "key14": "5VUnonReCtJNkqmUP5avVS7dqhDXZootCNW8ztQ2SzTSRPvqrbLbYhaj7EQUWzx1XvsMsjGgetX3x2LseRWcq51e",
  "key15": "2NmfLNJJcno5iZPeJq2f8KDJnEAgParSNaiusRQoYdS9Ji2gJxnx8hvcPVPXumBBvEQGYWwb4n2wNJL1t7oTP38m",
  "key16": "3qnwzhrLgCkJJM8xLWxaHYwxmwHKUT2YtFm1prW1AxJpiPXj7KcihLy9YkTZ7zanqrndCKxib72TgYbhorupkyjz",
  "key17": "V7eUjUMvu2hgnHFtju7FGRwiJDQbuP8vDq5H3BusUqTRodU6weeBzBgCMyocNMA1hCenWGgAKP3C8aGfwSuhFDF",
  "key18": "42vmkL2km3FJ2suifZ6H1cztR1QyMwRb2Kk24SsMevYgkS4PNiSGx5v4JD3NnJiEnkGKSMEFGTaccwNjgeTbqTFc",
  "key19": "4ZdKSMkSvoS2kNckZcU8fM5ZK5b9twvsSfJikTJH1FyFsUnweP5P7f5VHnD9aVAPvW3VAXwqE1Yv1KFNZmCfap9i",
  "key20": "3PFJreiyJimAKhMN7jD6ZkkkNZxHJcw2EdZtc9wMtvxcKiTWkkgju5EwMHV2z3RqNZRyAUxTjsE1Yh92MCVhxbMd",
  "key21": "27yZFxeks1WCXMFJY5PsUN3S3EoH6h6nnU4UUAhRoEZuhsPf7HCaSB678JeRUD4edibfyDTM6nzSZtspQ3aunRfv",
  "key22": "2WURw8WwxQ15CHzUqhvxwGBpTQA4Cd3pjyb7vpBmUGtXYAJRJkjHPEBwPZKLnTQEiZdbxGmktLQ6vPVJX3TkiXWf",
  "key23": "2i57M8ziB3w3pypqw6GeLpYLgH1uG2pyzXyVRFugQGmqQDMPerR3sPHrkZD8DjyLRr3TcNTt4wYaA8GhZbJVfbbg",
  "key24": "3Fu9MCNcK1926QvHN4ur8R27yX9FcUUeDYeuRHQ5trBFMbefiswvgZC8Zg8hhQFBuT4meRWQWqgnCkJf8Y1ZgjQA",
  "key25": "5ohKEiqQ1t3WjrEZpkZ49VYSn3fvaNMioJj9J8MQ8LwvVyZdemGUQR4E7ABWwLQFtRwSQyGY9NiPVsKTDv2U2pZK",
  "key26": "sRgBS2YXVrptpymGrTfvDH5id63wqtDS6HqSkciaYqv7VBHWkGchyB1Lb2tw9R7DbFJfkcYdMJfvBfypHcGg9uD",
  "key27": "39XEt7y3FZJRQo5nFsQ5ivNtEWMRgCD6pSZVkruqB6qF7mPnhaZhDEmx18YJnGdMgNLpnbDWF45xF5VPMhw2g2MH",
  "key28": "3KwAmH69gvYCrbR7ZXp76oPrKNuv6asqaKkqA4ZXpw9QH29V1nPZsugpwYd7VgqZfHjX8QxeYQrDstKLiHW2nFHY"
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
