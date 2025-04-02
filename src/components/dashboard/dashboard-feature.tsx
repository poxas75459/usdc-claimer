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
    "22DFYeCJQBejRs35LpfZasVRGc2UCHHBLnDVAMTtdpE9u2kJSVNQpMZFYDqQArery59bSG4w7atoRMJSSePXydX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oyU9uwy6JkgnjEo7SstAUKCm2vqvSibMbfvpK53UKt6RpoLZcg5Yks5gmpiZdLRETrhmkCQbrACiXr4D8bvfFBU",
  "key1": "4kcEwGEVqMgtvH7mZTSrZu2zsYQVnKuxMyWPMTgpLko36qU3X6vtaeVrAJW9B4ZETenDTFWwoB4f62pRBypv78G5",
  "key2": "5X38orqTpvBhFc4sehX9BPHfK4DXBLHp7dnK1SLCa1EFAHs7jffu1gbGJtQsD7G434USAj1q2g4WXGZmosexS4PR",
  "key3": "67HRx92fdHr1Vp7nbcs2N14aPQk72qNf5rGfyf9JL4H2zqTPKjV9Xo2PLLMXL2ck4SkQtftKo8xqz7p7LkhkUMit",
  "key4": "3yp7TtNaR89mG7M92Ne6woDeEgtMWu6Am1wV1HFRh58X3FRjysZTR2nnWJBaoayPH2aKYAw6XKrdtzssU16FMnT6",
  "key5": "5w6rYQeMjjpfhadappp6viYfVh5Yu7y1hrnSh5XFd6GkfhvtP7ipeZqmx8GCQQcMSoPyCjJnhFAhCZnVWFto83uK",
  "key6": "2GA3rr9vmgHejJKeMe4tRBZ7i8ffSdiShPm6BDzTpYsVYg1iQBZZV9Tmy2DjDjrQtk9Kf3bxkvgZG6HpkHyro1V5",
  "key7": "5PJ9nNRZPx9RFJQH89MSJfPQACc3p67SqY2aZy87vUSVhX23D4QKXhDcNimZeUyJamYxn6JZoqk6avPUY6bh6B4T",
  "key8": "spD7UFZDvwzxoxnDwq638LU7c5vfQYbJmDBtBoKuE6BCz93bidrQj3zxzocZfoRrxHaYU9jAxSx6PxGwDP4kzd2",
  "key9": "4QwTRVDji1h4vND6NZMj7WmMZKKpkAhEkYurLJgCnhNXth46brESfbxL6qk68iU8KhF1VLxVvo3m13zgWnH9sB2i",
  "key10": "3yE5TJYBJYLBjXfCedatSRZnEzVZNmVtcAcrg4HPhQHzHrWGsRAmHnqhkNRCyWiyCDwGLcgsfcVUgzmXwB923nK8",
  "key11": "4M9jnqBgEiJpb4eWcGTzQbEyzjNaSdgiXh1XG8uzpxGiKMnbAVrNX2SxWWu2KS3QrZKRmSkjdimaFYZNVQQY3wVu",
  "key12": "5ausAQjUTkzTDT36LAs21TztG6rJHFrBCuFAaPj5fogrXYFRTeAj3w83SuZX9woPB5jx1XJ9onHGCNVsbVgQLYtm",
  "key13": "3fAgSYyRbc66Ykqboja6zkZEkoSpgnXSJt7upUMzBxFzH1x3VY2KPDbE9GCWuu5umVfNUqaxshcrSctBGhRpt461",
  "key14": "ykTw5uio3W1JbkHmjNc6zBuHE6ZkRtVZW1U4EGUvHC96ELxSwCC5CTaSyMyjmJJ6Ceo2NhaLeUS1LTNKwMzU5uz",
  "key15": "2ay8cSaQEKKzwv5x6nqgbNMspZNSwxSAaU15wTG7fZhsPtHim1fbMqtYxNCfamLu38NERzDcreTAL6dDdkMiJ8KQ",
  "key16": "5eEC1TAwajqpKCXqo47pFvAjWJQrtmcTdvK8MdQ1j4S58rgq7Wdv641zuKXy3BeWmqoDWDySpUzTAtTYqJtHQxaM",
  "key17": "3T48yhDKYxiFxbe18Z4rCr6krjxU1MriCan9MjPcpmdQmp2dryEkMi3agREKQEcgYBmfzffreCDzLCjdBsmiwD3n",
  "key18": "4n8BJ89ycebh99aEYiiZmV6Ges1nMfHevrB6UaVpMtfMe7Rv9RyBnXVz7foGV32gmBhaRcPDjiSc1xRAxWL3er8k",
  "key19": "4AYkL6XpcmAyyWuY8yDt6h3rPkcGhTzYRDUnKq8sFq7EiditS4tfCKe58wat7ER3GKnZdHdawph6xwBPnusDefb1",
  "key20": "58wk3BQqWo32fqQyicWV4pXE1q2gbNdTvZCQkURPRttd6J4zq7LWbx2eYwS46Rq4wdWXpLnk4TWhS4WzNaksZ1eL",
  "key21": "2kMxGGASVsoJcjRWFAF5udnLQr5K6w42n5aLXFWS6HgNGNJHa497borRKghpt5xyxSNCxdoppZBRtj8icXbes6km",
  "key22": "31g3GsgTjso7jakdjAgVimGPTXbh3zU3wZ7YXyT2K35Y93BJeKqtChzC9fcHfNQ8q5rABwesXTz6yFGN2aNbmGcx",
  "key23": "4kFGKFobSVZ9q9xi92xmRzJxLum4mGz1Am9JRLZy1WBBgo8npPamuv3wrEcbj2pgWTPwN5HtX8zEARPkHVcpG6Qs",
  "key24": "274nz2igLHsxyLLDpcg9URDiApK3zoPomxJsHoRrdSzwEPthwmkwYTQRjhhz52PKKWChGLDb5kNKc8tvv3LcnVDr",
  "key25": "CCRf6RGHqZt6UVhtDdPXspmUMbfHepQ63jm7pXsVX3QZ6Cntgmo6NgMrwcNcc8F4nAiWzP9PBAAjoAVyazgwDnf",
  "key26": "kLMXxfLEBHe5qazU9P24CMhotmwVHk9drxa8tqCnc7FYQz4WsCAVvyf57JmpNQbjNwMv8HVbuy89XSKc1RV1TET",
  "key27": "5iLqbr6YLZjowLaTkFePNxsj3xKSg1oVn7iV3J87yY3HcbsBD5tNU8vqiNzYHcGUgJCCUbn7x4h1aLdKNb8CCyYa",
  "key28": "5ZbMHpjaXq3b6RWtoe8okc7yQ1uWtV3sgbrp9fDD6gipznVi9voXPgFJDMJoXDk4DAbvtWZbx47gyuoo65we5JpG",
  "key29": "3XjbMHnasBEcSzdGiQjfHS6q2xQ3N9fYz5ro6BSjsPcFsd5Dd333TZuycSiEwoTZtNBbdHJq4pMwZQcJpmyxmUjJ",
  "key30": "Dyhvziv3SuLV5j3d5EJ3HAF3AyfeSm718fGFbjwPDPVnzDyTjZAp8AR1D9kYWqvQbnqS1DrkreRXVN1HP9z5197",
  "key31": "J7d9RjUPJZJFsyfJSGnGf4k3w4wdqbYzem3H43AQr7Y3U5fkwK2XFrY4j4s89Zzi6dX1PbiZQZyoKWrhvEhTgKa",
  "key32": "2wQEWQyyMkbKQU89CYdFxiwksJzJLPjMogwXSGcRBHZZ524n6jpWAE4gYd1F2gwG7f9QYpzFRkEx1u4Xfgczk3WU",
  "key33": "4n15eE9XtvhQ7qynUp24dDF86pyStYHF5FSErDZYjDYE226Vrx5QCSK8zR8BrELLPyhkemrLPnkjHxGwaWMAmmf5",
  "key34": "2to2gsdpwyKohVcND8bN9Bc5e5cQd3aWm6Jo3RpQydhiLiYbJLUyg5idPLC3UjgA9yKtZg5xWJF2j4DwfrR3kRVU",
  "key35": "5i6icYhASSEDNaYQQKwXe4BcYuf1BJsyGBCeWTUA5Bp4Dy4xY95bWBiNQLHrGm4PWVPpmdYbRk7JjkLwByuYofvt",
  "key36": "5yWzZrBt9dPwF3VEmWpaCzcFhBiWapBq8APufCDCpQHCzpp5dubCJHYoys2qux84AvC41iAVPXjB9F3RcCnqDc5N"
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
