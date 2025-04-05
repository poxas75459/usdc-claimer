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
    "3GQ6V9FW4QUYsgenaszjQXimXeCjKJNuRbZ7wQytWQeyGmXoT3gPsZiNRuqJA6VymSv3wCyqE6EKcmmyoeYde694"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cNdAgcMVfAHXzpxNJh2oDUKoYtPo3cWCnj6uTi8ZnJBGh1SZAt788NtEJAqWWiB9SKZD613TxPKVkGEKqC9Kgdu",
  "key1": "32xkSHVS6MMbqGs1qGhBKRcZtuLHz53bo5gWv1D6yxwzEFG2ddRwdLfDtWkaM3KUvg2BKawgHoqe7Zxo9nixmhXa",
  "key2": "5tGF4xNVLnjWaBP5jqTzf1J8Es8kKpz6KnEBW8bbZMk27PSDG5ypne4PZgqBVJXQHzryNiky8QCzHoGQJTNZgw3c",
  "key3": "bfAhpBjJJ9jzKSGzdWshgqk8K9oZzP9uNGWBQz57ieYhUQrinUSMxoy4sjLTSPQou5fcN11QbwLrmpWga1SeL25",
  "key4": "s1g9XEYJM2PPZSn3TU3sFnLgkowgvZY6LRnhfbCEenoY8kwwDqif6BKUFtE1dnnERzA6V8DZVBqWNJtRMSfD8xc",
  "key5": "4QU1wNFu7UuiBjbJZokiSxpYYeFwMY1cpDdouz6LKt27So8ZZDMxx2QE6MvFJewHEuy8ZBHdW3KyWC7zTLsYTCsE",
  "key6": "4jbxnVnRzYTtBxYaBKXAD559sWQzmcsUhYTVfsWuRVquavDoLyGvobv3fromRU9i95npBp57cCWAg4vubeSN3FHq",
  "key7": "5t3yRgZ4fuBNA5ido6Ftst1oGb1LxXzZgpyCuVsHjWSiY5mNKBpidUa4nubcbaED13rCxQFJv1pRQmE9dWNQV4kQ",
  "key8": "4JrifLghkuEHZ6iMwmXpJVkS7zHYSoShF5K83xf6tpeByue763kQspvNKimAHrHqHEHE6tgriFjGvYidxH2grif8",
  "key9": "2N1MtoJ9myE1UhDBm5JNf6yKxjLwFqXWMezC4HVy3uM5Le7g2jwf1tFvhDbJApUwZrCVYvQukv8bSmUqRrfXKio",
  "key10": "KrKHALZ2RVcdRKpPQaA9WPr3cpNpC24Tm5X6qhPQHihT7fDEzG5xXDi9XjKYDXYXZsA42VyXBFbEVzaiVnXFcer",
  "key11": "3GmArwsiG62ayWhnYjhypqFojhgZ2Q9WUwjbgNjw9dVECEYT8F7ZerrZj1fnzAFut9Hr5f5KphkDNHzWnJjMTr9i",
  "key12": "kn9BETeWSykyQ3KMSPLPBCEgvjAUSTBGcfLR6d6VuTrM8MvdT56zNmdvBYQqTGzPSFNYWTZ6e3eGovP4aDi1Zhy",
  "key13": "57XZBXpqkCVKa1wScMKaSiisvBckZGKJRBDHnkJrZNnLcEXnw5nHpxLSf34U4MGKaC4QvvXUghaXt3GMc5q5Cchp",
  "key14": "5JZzHpZ1PrSFnop8nKjCQzacwRYtB3aF9TkUVv1ULV1mTYmmTZNWQwMuyamKAYq7GXpT4T9J1JWb5kDWTorvAVYC",
  "key15": "2dmEPrKKDxHKavLo5k7b6rvuvQZF7n4xKtmNYZEjhE5eyC1YHNh1jLnjxCq1UFNo7qEXLvWYkTqpsfxJUyJN3eg8",
  "key16": "5RXkuDeCw86PSJirAwaiwoc2hQxmV2Rw1vi2JjcLgfqBbgA1ppt6JPLSm8Y1xAMU4TuS2PGGySQCeABcXxoFjGSW",
  "key17": "35rbGPXEibT8woGhmyrqDEYjHJzF1ESUvDpvSmwdZfDo23jTfQx6Yz4966NjcsneaoZZXJ2TKkfD4uF3rxQJJJXV",
  "key18": "386CriN8RsRPBvZWku5KfU519JBeGGHHy6j3myBvPYkwxttznm2CLBEw99YmqzttuvaRBAmoJz89LE8q9F1zddDV",
  "key19": "3zJcnPX7AaUJ4tW5JtFvR5sXYqLJdvP8fng4aEN9SU8VDwpXGVZgC4FZxYHx884G9UpB9YCc7XJE8Rf3af56ZXTi",
  "key20": "2Ms49UdmAroYj89GjvdaArjKRGq1A36T3GLmVsjWEBDk5nzsoVLmBUVZnV9ut9Ao6oE3xaiSabdNzYbEwpVYNGTh",
  "key21": "3otM8oEwpJPrnvb5coQiU5LcuHaSWauB3hnZtFb4iwhUMZhN9mav3xA8DnpGRZw3CBQtrKVaaLguDNq4qFRJocjz",
  "key22": "4ikZBMVYHRVKrL96x5eJRCfGCu2wGYGRTzgAbj5QqD9kSt48b46nt9nZ8zs3nEF3k7xoguJ3qTfmWB16utnNzgik",
  "key23": "4ACWBqPiKhhuhUJDzv2gf9efbL61DyztTvPCJWitB8uFY9wKJ3iGuzea43cP8ksUy5LjHRMBwN48Ps76XwJqNTZh",
  "key24": "4RRCTu9uADwPs4y9piwKXpEgy4DYe8yg43REGPMEP9tYnV1hKgiL5ybXYhTzA1aiLtKfmrdgQxYvC1Z6tU9gqBha",
  "key25": "58LYv3SERD8fkYp2UFecmsTgFNynNKUuMrbrd79jVNPph8H79BkTE3e4GSZygA6wnwTfFbfcA3ydrXUDnzFHnEEb",
  "key26": "2Wi6ASprQrfkTceWp2GtyS3x1gyNsaAzSbo9aYtRJqLaxV9uokCjhEUy9QEjewhEgbDytBtU1iWxPsb56a6Mxfq5",
  "key27": "3FL4xmLrVsA4xjibmpF75m48vytBPNiy39wX9DMdKZeeXVgciH9zKfbyEAK16vP7DV8JXsUi5G3NTrMD3XE7dHp9",
  "key28": "4jHyiVBJduWDRGSod1SSJ4onZeZdfiTMa9DXdrC8BUR1VGUdrgc9EQ6ueJgooCmNDMTTKHedUA47WwK6f1z5b5M8",
  "key29": "5gnZ8NkyrZpGeekfk6GBHfyfEfbqjfNvxAVJ6WjG1CxA3dTj6RyKxy8TUD37U8vAV4NgFbAopZHZi85JuFEKaAgH",
  "key30": "XaAQrQy1SkK5mkG5zSALCUQ25oVQkYL3vxVjDffC86q2rwZ6jo7DWkLYB4pf71H2rU1JUtQj66e9UGQ6hSMbeDp"
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
