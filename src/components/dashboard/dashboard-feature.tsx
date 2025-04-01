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
    "4PC3c82Cop5cRaj1izBAd2tgK5iUSCNVD962deecUiEZcpKsPjTq299mKYTQL7VjKggMDQZCxPLinMN99BFghgQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tRNUgD1FShfJycYVP1ka7Zh6nHZhKpyzmAMd1ccZYe3fdUgeA7ta7zhXe4RDuNFvhiatz4nZZfowsNApX6szeW3",
  "key1": "4BRwP7nmV5TEJrhf9Jb2xpb6f843oTNuQZKKpEAzC39TEQFL6rs2Aum8oL4Ey2D5BRiwA5B8R4PMzYoirZMJiwLf",
  "key2": "2qAZQBKuisP11RRF7j37qNYY2VYW9VYfaS1aAw8a3GkHvtW2W6pR8g9XAgmbdLn1qVpWLQbqqBrYPMbQreNC8Bp3",
  "key3": "3piVXbNTKhawxtNxsfeBWgQKbi28gZgQVgaAZxszP9gsoAXbdxuMcVboJ8YJ76eMRXswp1cWLGEoF3cR9sP4cqSf",
  "key4": "3fDNRMQMvQsHAQWSAp7Rsrrbuxq1z7RqshBj7AjfqQAPXvCpokqRPXN2uZviTMTDnRu8g6UiywSh5gN7UKqhjJjW",
  "key5": "41ZPfe4w288QScuMUbiAYfsnMZ8KoKfq6pkekzfmoDg9beDWzKkDTVrukGkSQLJ9jQAWtKoC41nqbAUdrrpoeaEH",
  "key6": "fmGEH9pC6dzTNi85XGHnXcb5sR7NJLpJoWr5RntFu5E44hRWoUUreAy4pFKp14HjoFrbAr1CcSSGBYb2RAEpTvw",
  "key7": "38SGKgWwnPwq21rKbV22UKAJuccBX37fDcbxLGA2UZAi8yWXNssW13WNUFU62Uno8zmnFvAiJeYyk7MNus2Q3jUq",
  "key8": "5pzZu6YgBkLp1kATLCKkN992TyDgSSFTYg4Po6iC7bVdcQfJe37CXThFA9YsLyaD9MzzvLCwzJVod8zQdTeaua5f",
  "key9": "5hWJeSFEJYNq8AFiVywa7kvh2rYZvjKvAJDXddufEyhTZczVkCqUbWwNtoWszhnuJJvK8NAN3WaC7mL5NrqH7rB5",
  "key10": "5SE3SHx1bPm1GrqeP4xnwBZUtS2Sw7ZY3MbSmzYxiVMWBYn1EznNwRNxL94VXi23NnCm2RV8ycLm7S1mjcXW6sPE",
  "key11": "4ydNAWLJGVGPqcPJBzFESZ7EtBr7mwGRPJUHBUiGqjSMRgk5zpTPawAmihdsrMLp2ve6YMAr6sBj8uKHyLZUaYn8",
  "key12": "keNSszJRQmNguvPVtefsGcVV4or4qYvnz6TD7Jo7XmTB51EyUgh4vp5XGnSbgrtTZyPg9im4CG2YQ8k3D6qd5qQ",
  "key13": "2wGiT5J6uN43UxPZxHyo2RZLF4LJVDPkWMyUvzZkJ2iLQqdmJH6EqvRLyxRVVs4GKhEjgRrbtriczCRxn1GHbJro",
  "key14": "849TdqU5MWZZBstMxNyrpQz4y73dke4MWALdY6p1oSa6ppX3QP5x9oZpeh21w3RnLshCCX8Y9YbcuyuQzfodexP",
  "key15": "2eUG1e2ikHd8kJmUvYYDo8bSBhausVNUyKW7VScgEWbZxtFRyX42sfZaDnodGfmbi89zVKVeNtqRh7LWr971b8MW",
  "key16": "4bMBGmTajTDr1MoEkeS26y2bnuKbAtLYG1fV39EkkCUjizXG1uN27vPMA9krf5YeajxCPP4kynjwDHhMVhBm4PKg",
  "key17": "3Xk9ZntyaDf6A5Gp6zvCmJeKANNUuVKZ7EY45MwptyPuubMYbEdtiho3Px4QW7Q9zNYJ4ozyD8tVPqrcDveW6b6G",
  "key18": "3rWABbjmKeqPL19K8tEEFz119tvh376kusx61zZLX8SXrNYAzMCfR7KdxBqM9PSrwoSQaSr4puejDMmuazT7ZaX7",
  "key19": "4B8HGzuxeby4NQwdcYibHBqd6BvGeSXefG8iWE8foNLodpBmkvJZzwUD3hVXHbyt1Hc68A2gE11h6HsAK2epXuct",
  "key20": "2UJCVHHVSo5935q4T3SK4dAydRnHrKpeBjXxFLq64UUMyRdsWVmyyafkC8iTiwPHcTs5t2gcz8LmQBpjs8pjbvPe",
  "key21": "Kfxzg7M3J1YS64Q4VFkx9Ks87wCG6tSk7qkKHc9mUbhGqM2X2uUNuDaV2S6qfcQ76tQjSJLFowbHuzDVwWE3kYp",
  "key22": "5p5A7F5GWfryMDBtLYu18jMiH9HrERHC5C2GXC64UvFb4LoUmUxDxZWzAY2KnJcbxwzXQHPXL9FrZzuPhcWJmRfh",
  "key23": "5y5KmgcAr8KVk4xJV1a1CndT4ZjHfdyFsKT7GNeGLVkoZ4r7wzgLWkAG1JTTT5BmiHv1McTRUMy5yTh3wh6fNBv6",
  "key24": "53itkb1NXgjue7PUETrNzdKC1ApskhSSAeiCgroBu3SaRzLp3HCZ5n5jVevqNXaz3GgMYWAjZwcUHjiE9NN19YQ",
  "key25": "63uLkAvzkg6hLzHPhgeYje8K5KV3tN1hj5VRUUoex5a1GHGwLqgLEnLQZW6pRgnSdwyBj9j5dzTC46t38369SLns",
  "key26": "3LkAjbm6iZw2WYL3VPGwLHe3jPT6p5fUjo2SNSSGdoKnfR29zx1KVHp3aYaaTyW6qk9R3yi3n9kjrBDvsdq5fFXz",
  "key27": "4K5iu6pY2Z2qxTtWVayLn5LhTUDuDz6svvKu5YP8YkHM8u5GF3MFqFPFNvJb7YzNWHeBj8WSQVL88f4473L74RBs",
  "key28": "3KSFgaptyExQxwG3HU2W5XGjrhMnLWXpgVgvDJfKE3hGAiAaB5f3Z15e7W16gtZ7zAHA5kpJ3wE4scHvVucvvPW",
  "key29": "Y6gmT3JZrsu7vhEjJ9EUpJym8vvgLtxFV3uQU9WqziZJSpMwD2NgZ7ZHJN7GX5SkDyfdkB7Qudsn4BEYtaWfpNN",
  "key30": "2xDS3p3kSWA4RLFM279yU69hqG9nDUvMyioA2Uz2A5TeuUri7jkaHhdK2UmGD6WhRRA2BSXbBUZbuepfYbsa1fXZ",
  "key31": "32HcBZS2W7VQtmDvf7nab5xZ9TrYdd5btX1Esr2WgHimc9mVnhS4f6ukr6WucjEyei1mWJSq1TiopaGF93NJS9C2",
  "key32": "56U5Z4eQQuzDH2i1trFo69bXV9i164EVjEoqCqokXYdjrM2T2FXxvCTUXRU3L1QFABcTr7Taz9WdUArq1o4fUxQz",
  "key33": "2oYniW2m9Rq7Qs5Z8jLXCbJw7XUBnJ1bRRRTeykHdkQvqVRA9oBf46ajBtZsi6P8AUYT31HiP9M2motrnhLfB6Km",
  "key34": "nD6Vv2xz6RJLJzm1dZAFy1sfGWVFDeJbBNGASBAmjfHjUMgvD2BbCddYPa9H7xw8Btxu2amsXokPSDQ8MXYLkkm",
  "key35": "3yb5K3MhE7YXMf8nMMx9hiNxnoqb82Y9Jgg2dBoADXUxT7XE1gLr563r9cMmEwef6V52Mr9CnrtBx8wsRknFKrtk",
  "key36": "2qKVa9HPYG3KumMGk1VtKJbb9Um3cKKJoQWvFvcMqSPwcWN9Z3oaWCPNSNuDHv28871rph5JZCVKweWVWnJaELQs",
  "key37": "fPXA4xZ6DjWTh57DfsdsVuzSa42eUXPwPjDj2kgNeSxnim9nJJ28YxdbLWzZxWp7VHzCpiGzQP8G3wvaaWnrhqM",
  "key38": "z718uKWsJDARND1jFY3XhBMdcQfNNw9uESpG26JxDLfBhKEjdcwgENbdGYvmwxtArUet8UHycdHXb3Wq91N3ipT",
  "key39": "4Lx8HYWHLGsiwrGgFZbM1XFGU7TqEEYsKWLrMUDqA229M94n4DXW4PSw9fKP2AiSZCzPtWQS9juZz4u1SZJhEkmr",
  "key40": "24iusnLEMcVSeSJqGHNyw6PWyZUdDYvaxqbVhuw2ranzRNZvwJRS8QuzHBY7BV1zdyGWkEUPDdUgwC9neVAAr5B4",
  "key41": "3NN1HefnS3WRqy6L9turgAZMvdDT3uLTPpShtLA5C1MvfGHCY3cNq3oScJ6bmG5E5hiX6bo3b3gAJknSScLAYtur",
  "key42": "31mWWc2DRZqpSKeRr34YH3KvrXZZorik6V4jsRVJQ2Vj8F4ZedEH7kL52N3tw19TxQBs8CACCtgJrxUn1k4LSSvb",
  "key43": "5xPhQq9Qz8dWr68ix226NAyhhRCAjrkz59CAjuzxjv8xsjd31oEqyCo5PLQ4VJJHYPvysN5WbWZUE9oJt9Thxjmr",
  "key44": "EaePwX9FKZc6MH75U5VEW2cdqbwoxSxJk6nZpSeTas4rtcuvCaX8tpkb7ViLhUxqwVy5TQd1Ka5HY634VihQBiE",
  "key45": "2kYrdmoaMQH96q8gL51GF9sqGJceWLc3veZbwgverZr4miJzxVzAcF5bWfe2uzaSwwNWmeayCGuxrKNUrnLqisuW",
  "key46": "5Mu2BjXX42ryEdaSXrQ4cUe9gX3Shi9bXaKDYEcX7vu4arUw41JCtwauPH1eD2gsrWJzx3Ps4JRfY8ny6QqujUBG",
  "key47": "5nTknGSggbfGbdS1tUNybJd3aEqNkg93HWmNKwp9yaLm7np135zk28pq5ZJ4NyJ35YLLYXW4czvnCzmckV149RJp"
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
