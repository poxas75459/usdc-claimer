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
    "22KPYE9Ag4aao7YhZoZ9p3J5fo8RDkBd8AZKt4VCV48Ezg5JGqZyGgt7cVco6ptX1hG1apBU42FbosouoQWMavsX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WNmeiFEpdEMmXYQvUqaGYEmTNfzmaxnyJNogNvHjAVasshG47pJkq59PHd7m7rs4vwwWjcds4bELzobDYJzfwtZ",
  "key1": "5jkYkbU3RDnMsyYcCqos3uZbBhjPPgCxxGcHoXqf65Lvxh4UVNDmpA1nMz4mJPjepWeZZeJm2DP32Lg2Nv1tAKkd",
  "key2": "2JnnrB11Aivw36VBibEza8uLc7EnU3TSCHMaBEEzXpfqKz4ndPBqjviFy9PaVFsNWzX475R9Tpx9yxvxDDVCnGZi",
  "key3": "59ch6FWx22ueMV7XfYEdatpaqTMPKq4TDTn1osL2uVar2FeubxaUrrokQsLPe9ntV5evLN6EPnJtKeBGXr6ABC8S",
  "key4": "58e4GjtDRB1bUtTn2z3w6n7rsobJdEU6U43vH9x5spfbNUMYpk8FUesukmPnkU77PTJEvuYWt3Ca4xagjYysJaNb",
  "key5": "ej5Nsd9pM3Kk27Yxx8q9R3Gz69VQuhkurqaAH5Acia9jLgWzwjzUfWkKZ8qo9nRqqrNyPxDujsUStXNDqSMUtUZ",
  "key6": "4FhLMnjcwK3FbzmxkNb8THpxJbe4tp1ctH9CsqMh5D91D1K4TwAa1e6nDdisYjxrotnxTZkWayLwXfurzt75rjcc",
  "key7": "X7pXtcvcvC6sNcCcSTiXVe1yFdsyoEfVMsSZHJgoKBGqJY7vBxv3xVoqX38M83rEtRm474boUDjFkrtZ78Jjt1q",
  "key8": "hbY5fof6uSnsFN4GXJoQjC3SmZThmg5hzXSb7pkTYf49EwkBhZ6dS3ZAPnF3L17z2gtvUsvUuDhXtftwtz642zZ",
  "key9": "37BS4P8bBoYdiw2x3zs646H2266qqiDEpRjkLLzJLb9suF2TgPpBS6eaMJ3mjBjwnWkZPAYYd8TBn48zSYSKJ6wu",
  "key10": "5TY8AP7F4wTciNQ9ddWMbHY9eWNUe54A5VrQuEUztBBym7MYDB69uEraj6DTTKT2C3qB7TepBaEHvBNxYJrRn4bV",
  "key11": "4aFfFsvzUueUxZLb2TLYgFsv1NDCK4daYjYf92kKJY68afp4YrHDhHScagS4gLKwp9tJPwYH9Vcv5maJKHqEgvJt",
  "key12": "2WatVGtvYw7XAQNMgvB4h4bTmYydR9yNhEH3bXMYZcwz9QFRwJxCcNYor64ZuESHmczYS7mUJN6DXcB7bwYjJ1DC",
  "key13": "313Zbx8ZZMo1YdYSF7sACCcBJEcMq8zeignuytnw7Eizzp1ug2oLLY1NqRMgXKL1CkzB1GQA8R7Cjggg4jRtDb45",
  "key14": "5JN1XGERycqHL9mRuAuCm2z7CGBHjMN6pt28kQWRA4pZSozV49LR3JBcqzZu3zckevm4uTkUC9q4jiwKLDx9WZgm",
  "key15": "4Wy8ipaw1Ufnut5o3WbVEz9GbZLqpD3UkazyPZYhY2SGtf36h2WzK7527pFBnxRNfUSK9Dy9MNBRsAMxyc9VaLhs",
  "key16": "5mvR5kZZz5n8jHYRMX7TTQpnLi3oKQAQYSqjtpchjhFhohYDCYy8AABNz34Z8vNEvjRLgH2u2LfE9pq8SAgbDrdp",
  "key17": "22vENAhynhdMavtgJAvcj2qiAZraF7p2nDEXyJDfEa37bUqfPr7JZ7wtT9tSHvkQVccwG9dDXYqtMADE4ahdhuJD",
  "key18": "2ZtseryuENKeqwGbPGrax4nrwRUv7u8RXgM4x1dczbXUGTLZqcd7PWzCezTvNRPJHbCHFT8oBKhpimwgfBWcPzYG",
  "key19": "2PAFnUQoGtkTK75rWAFKoPnUZHRJ9xZq8eXRyVcQ1Sq6w82dJCnKh3fAe9Jd1Bx1QT6CTNBdQAn8KaS9p8pGp8vp",
  "key20": "4oq3gsqJxiXYUczojoPpBfw4y8MXmi8wstn9iRQZDMY2fZSLvzBid59qW7ijukYHg3URamcLy3Zk8ueB3dcANXk6",
  "key21": "5KHiSLp4uXetUVEHaLHSGXEftSHKcK99ZELXgSSB529imUR6b6pQ7NXS1AfvH8SJJiMeSFcte8MH8eVcPKkvaU1x",
  "key22": "4eP9DzcVuVKXEvjrkBLWGvGRksjGvmJ7VukZcbjDtRu467qdqso9N2KHsU3MvrVjn8U1bvAcBc7Av4NFw4uXPVGB",
  "key23": "22CFHnXcam2fpt12MsFasRxw4ifkkhBwc8mJEZgwfJpyM8jiEMh7SUUEZPVXFbgSAF4WgW4NUFUBDLAk8myQKH51",
  "key24": "5j8zn9jcuq6NdB2T9ZVdSExhghVGhqwxsnMhoW1Wq53WvdhTv9kWAFWztBWipQ1MBwQVF7U41pDqX3wy7mMphdp8",
  "key25": "34ide44e5RpE9YxdWKVKizbhjZ98hFpNeWrWuMFydEwjJb9XqnHnUHa7Q2kUTuoEC77uGGB8jdZ3M2Xue27d5SV4",
  "key26": "5ZxgTEj1ENVp1iV4izRdXDNma3KgExJWDki3kLPHW5F8onvnNVvjV31MABe54rvqBi6DN5T2Apkv2odSwYwYUFnd",
  "key27": "k5AabQ96soPAFHmLRsBcF3QmpuHMxuHpBawn9pCkSsFEDMhAgwrUYAdiBLJASdk4U18kJ41DaSoMsZA6UkYhMmE",
  "key28": "eucZaE7p4V52nAgSUTEDWPpVMPucWLRUF9oTqYhjhkkEtuuteWWTPG31fV2V9tCxqBPu6Pv8zKBLMGs9S7eAFg6",
  "key29": "xp4zAWL4ZZrikfDjvDxWEEQjRSy3gg933ydjdkTHaFJZyJPvEbA785PJZdk55QfXPY6m2ez8pfrWwUtsW8ENDAj",
  "key30": "59QCay4tE4ZwcLPrCcxTgZs3SdinCqdPvwEbgBJ6qLPsSh4o2xSwy1WEpjCb4cJkWZdqMVgpWnWCkNNjFro7Je6C",
  "key31": "5aj4JhzG2yZXj8BxcpK7onModEr1sbpdeSwWhyhATFUf71gQf4dTKozgMyx3xiYaaATXLuZFSHN7UzADLgocX7zq",
  "key32": "5Ci5K5twvMsERJcKAE9R39iTcNHbs1g6AX6YA3fAtHLrwLZhGRijK5cGU8qCuw4jtGsPs6h7iN7KENuhk9mPH8pK",
  "key33": "67ddVW6TLeL1QeeUDbKwjAisaevy6t41oNS1Vj9kpEXc8wiSmPQpqbUAKHGzzbBRysxNxsMVnsF5LgzKWF3gksYh",
  "key34": "tkc4zMzAbFiNsGZRUK6HZPZWrKcbPLrRjyoApf4CCZkdUhfkp6JSs72TQWFHk9JDgLD18hBP8iwcVWUvyMzd1Dg",
  "key35": "3VZg4F2PEQzKTNCEVEU4MD8UxHzQdS6X14JZAi7o6dU3wJHVo1Q5g7FsYcQ1VbufZCVNgSYaZrKBXDLavurQ9DEH",
  "key36": "2kreAyAgtasNiuodf51Brbyi4AJudYtMBN3LkKGaQQMpAeSwdGQa6UVAUGgC9MpzcAYW8FRmEeHqiBbWNJZMJCbS",
  "key37": "2bMVYGTyMxUqbquwuVBy3pjTZc78uqgFAHSxfCN7HEoS6dNZqSDZHiLWbM8h8QugxwBswsLiduQZofeXjY6ARTrg",
  "key38": "33mouRX5rnxtadvSW3BLYhc4DVcW83wASNP2afpkdjGhzU7SRcisnFTtPbmTGm5nzTSm7Kv8o8KYvQZsh1Yw9LKk",
  "key39": "5SdNsyp31aL4U1nXL82ipqoBpCmnpkktwiK9nAD7a3zaQDPPxKevn5Sb3DfceCedrrzSiERpqEmYW4hQtfKa8wJw"
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
