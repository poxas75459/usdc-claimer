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
    "2onBkyGTn3uhCJLv58rP7miJbdx7HTLjVAKU6MYrWEkC1uXpu3nXzQEUqnLbcxfJfqRiPVMF2zNrjMc59cLwumiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rA6nQ8kwPZiiLArS5ZQnWfqrpnqNADRFst7Tnez7sEDynDtJYbiEEgdZqzDgHdfm96gJiwkMtECNjPdBBrVvXsk",
  "key1": "2ikxhPP4DH8FNy63kchaVhnziv6QtHNPba5HiJGtGeuAgsuNuQMV8crcNdJonvwcc4f8uTtAQnFk6wy3gszxHx5V",
  "key2": "5r31eeo2jNY4Cn3L2QggotfRBhnv7vtdxfrM6Trt4GgbSKp6XXpPacGameNx7hiGSWWZzEerbY6h4yBDzuwvvBAR",
  "key3": "aiAwyEq7Rsn5e8FmVQ9G46patJ3GLjhohWpQtaZxHttkHBGobfmUK8oLoLxh2uqjns8FX4svUPjksqjfL88hXtx",
  "key4": "3UzFuqG9dbo3HjwSk4Mt8hDqAazHc3junbxbrQccCZdsmK4CDJJaGsGAa79Ne3BVLQiMkHCutzSiEkrTTfGePQWQ",
  "key5": "4nf9k2tVEA3QBDmgRZEFN1JQN73eqvnrivjpRsWbYkm2mwF7sqkWpxRBoXYaAGNsNNXsRJ9x8PykkvaErrXZmx5q",
  "key6": "4zRkBHmBVjoNoiueZtNs8gqNvwTh82AFizhrtvXWLA4unqM9Y5adbaFqnA3Aidk1L7b9QsFFgKPGKCA7bsvYWccd",
  "key7": "31fN5rnzMVPp1hSsT1F941AwBKfF3TXwxRGdXZ5cekfRJ1H6VjPbVB5BeZLonazJdLJjt7rxgL6T2eDK9sXELaZ9",
  "key8": "djZZmF2kughLa1naijzxj9i3Pe7XeLzJ1w3WuvHzPFKipPdpjY1j1whkedYRR2id98JcckWx7zMXEfmhSNW1ZB5",
  "key9": "4jEDjxzMQ1hn8WAMcY6EFk9FJs5TuQZRazzxiEtwfaDq6whGN3tDZk69a5RpftpE2vLqudkqQxqfiWDqJRycg4Lk",
  "key10": "1ZcWauYfWwCsydEbtxBW7cCPE4f2cEXnUKKHrqGdiUjeFc8MEFAH58GzSwbMVJuzaN53bViykb45gMdK3GCJvnS",
  "key11": "5RAp5VQksh8tVGemVcFuu7vhhQVRoSKughJEMBd2pNCgbFyHustr8t3MPkAzuoUq6zzya17x9KLpoyWLMrBy53L3",
  "key12": "3A7mV8rLgDveJvZeNRzC97Xg5SJzUEGEi2dx1bJgbCgYSQtoNEMBoehkKffNXxxkhuPa7Wc331cc7VowaAvqoZqg",
  "key13": "2AXKZRh7WGRHvxNrrf3mNEQRee55XvwYBA2pzwnmAAFYSs3RsfNZf8VkxiwbFjaMJzw52MEbD2NC4Nmpq4oECF1H",
  "key14": "2wPPFhF1X7PjHm5AEf25uctVViNXG5w2Fz6xge3usfNBz6hKgqut64CG4yCwNVxtm16SSzrKgiKj87zBR9ghp4bX",
  "key15": "45vgLZm2WURH4fSc5gen5cxNjB2Mi2prNxHMorNT3T5tR94hHoJX8qmH6B73xJWGsy4UwAWpxpXfYPpffmuftX1L",
  "key16": "59cRqnfEX8rFK7paW6XNuErQ3D6W5njqeBMaVHtpGqp6Y6KpuzYGjqPgyEHJxigFw9YPtos9jUmM3RTG7N5hFDZF",
  "key17": "3x98gAJWho4HW7EzLkcFuTU1Zuee2X6H8jX1ZQqNzNjJ5uE7KUG2PaKFPfDZcoCGrWKj4fu7yPkVZ39hHJKCzzk7",
  "key18": "52iSGDeL48nq5izZ6hWvfdhzL3fpxjdpDztnusLrBvpedpo4Q93eyiZCWssWK6GviypXrmRPmuqD6BwFgqQgRmbn",
  "key19": "4FZdouk9grVSHmruZm5p2exX8KWsGrKxKkgqjqLj4LENZyim2XoTysF198QrR8iZL7JcUappsCzXEmjn8QtvhWSe",
  "key20": "5ojyMYMY27XyxDLBfaAdiUrbr1VhNaJ3zLBDee6hfhZbeZEKyVnxYNXjsCuv2RHXGwQXhfAxFemPWKNz9HZ3mUFG",
  "key21": "2FxDBHdyGMLU2k2XY9FucJJf6a5SsNtUQ5zSuMeRAFhV5Aa62oDjADdqcUHQxSiGeqCH2Vm6Ln1Y3odQoUoZzVJv",
  "key22": "XwiTHEW9sxSK5BjgbWFffb8mRRmAFGvBtdJJoxEEKHeQEiiN6sGRhcSmAPhhBqn7pR9tHdQHpAhk9XzXLoSvxDc",
  "key23": "3GX7ZpH6pFAoVXjXG786gy8mTKqPNccgAXnDevBiGmav9o3LpeQ2k85ZkdLMaAkBiaREfga1poPzPZ5YCvkc64H8",
  "key24": "475WMEnLfQokoU4mKsGZgz7ahLBrjVjj9VUttZj61jqtrTqyHG4yB63Bpm4E7j9AfJuJ5oWZ7i3srhpb4AWiypyN",
  "key25": "2zJmrZikNCwUjtgcqH2TznpXFeNe6eyWURABpJT1op1YRiuPDTJqaU1YyzhweCo5hGU5ZFSqY37URuLLu9bwXT8S",
  "key26": "4T2TCYtbpLBf8B8DanidLu57oCco5Gr49UbQWLw2HMMZD5xtLbjxQbXUV6g7fwXfBdHCfrwRL4H295cMF2xG1BDs",
  "key27": "5bYCrz8dDybgSQbezwVAfb4c7LSPcA7BnuEqoyjN9xwSHZhAE9GE8gKLjW8oYYADBbNEbhpnoiMhAUQ8bv8ssEq5"
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
