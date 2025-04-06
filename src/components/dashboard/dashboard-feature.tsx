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
    "cjKQaTnkv7o1s5qAbN1Q41FvmEzN8avgjJN66YacbL8wnZ1814HD7vxMhgo4LrZXQURecK1odLDQn7tPTWYWUcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S2VYWjdLLTuzpX4BeHYdsKxsLHKmZYWPAxB7jq1aCE6Vec3UWhyb2idKkrxTcmLqEJaFZSFtEMPV9WryBsyaVyD",
  "key1": "RLZEo6pG5MxTPx8wcZ8wJZhKHyUUVvFy11gT5yuNqMzYYV4F2f8gGTJKjQet91kUP66Zoe2iBZb8PuVjUA6xXRN",
  "key2": "3fi1PvB9dZ7qgRSZ4Kkxox5L4dvuH37E8up71wegMGY3AsvbJMpmfD5V6PwmfoaUfDvCYFfLm5R1uDAyv96ortLk",
  "key3": "4eSvXTedAaEEjkeNoHLZC3da3j7aLEVjjZtPRsk6AqVkuiN4KEpi7AmoU7dHKWdJwtrg4gYvH41xcrtiaoXpRLFF",
  "key4": "2kKhefPydsif3vdEN8wB8fCvB7gXzYapUocmAxDjN11EKtqKng2wNfKHcxvTX4JBNPd75NCExKV1c3JKPsnUNEE2",
  "key5": "4MJfDuY68CyMHazY6tS85n6mQCTA6JYPPReogGuGByp6rYq2vqRuoHixnibyu4hEaHHDquKWxL9FDyCAPVByc3hC",
  "key6": "3PDwzMfpMs8sYswpejKk4FxJnwJCCbWhdzHpnhNu6HEnvFyUQ8866gGokA2epfTejVaWrtMEkGVvTT8XCo72crjS",
  "key7": "4ENc3H65hKKwPbSsBRnkEFHWQxbgi27muoQv56X6dS6PfcUuHL3q5PLgfM2dtSqm3nHscYSckKHSjMdQ51uMEJrh",
  "key8": "PuHVXBoNKW876S95hZTjPRqCamFZo2i9gWZwKyQ1SMcpPpqCpjvvtX6iw9bdq8E6vvcpuiuiQ3DZ7N9cRkqvo3v",
  "key9": "4TZh5UvZcojN1V8Kzv51ow6qvQpnARUkzLf2t8nbAhAYVve71RmZyDT8s4gKvktC44CYFrqe2TUb9NG39JWBPR4V",
  "key10": "46nG1gpMbeCbUHti4ntCu6imsN3AV1gNBwVeQpMkuHaexqrbvkSdDV9jdGLqsoaMqBCMGL9nS3eYyP5SZcT3VWX",
  "key11": "55N7DgsBod9okQey8MGRqSMtY7EGG8EyZ16nqioGHErZAnpz4mghEa6zKDgezekz2RJs9wJZEXJQ5voU54EkSLpt",
  "key12": "55v8LGZwxJ2tua7QhNSNb5bft3DisYu32nCrHXG9yCn5wpi9SEyhb8ghx5bxLkGujw89cZsdjRLb1RnK7eP9UZzG",
  "key13": "3XrJaiD1eUEz6K3cDJ1uoArYP7Q8KQ1cFAZHBJiW7bpn5FXCd1RgkgMP7pEDS6ZDjo9jU245knvaWb5uvubTG5J3",
  "key14": "3v3Qo7E5EQaSAhMdr78ZcnWJ6TdymDpiX9WQzAFnuoY9czqBE3izyfc22oXxw9qcVJCrS58AYo862GfNKfUu8jf5",
  "key15": "jp7murRDFbViMLZHtbw61zZjkFg5etJmiCstXxZgr8P7yTtmnNBWkECeQMTqD12o4MiW59ZLwqVjUYJGhLKFtGi",
  "key16": "45M6eDkuRYivY3bvVP531UojwdjD7zYhmFrGTi2VyUHou5gTnothkqK9XTQjugEhLwN4C3MUJ32yfHTrMPEhZ352",
  "key17": "Gnos5YybBxrwoodKgq8cXh1zM9A7NgNXgDiUwqApTPKVZHj2oYTgUnAMDJRUruQV3oH6TEvyGrj8yTxuGSzEqSR",
  "key18": "2vyghQ6jeKfhtB4pK59bPfmKheAJQheq8Tc7wjyen26QH9RvHuk1phaLiPoT4v8zMtPdFTokiRs5ZmVxJeohR9FE",
  "key19": "45AgGyvkWAgzMTLJ7FHuFsuDwuqmQyvxvpnjoRnYN9Y4jGiWh1Lca8qStnTvztXCgmpUUWSLjjPoNJ3rhyjokYaz",
  "key20": "4mVYB2qs9FMLqMi66H5HpzwuKk1TiCwgzfXfSEs4PJ7VyjQgSfRiHk1e8S54PnHfz6RRTcY6e7uJJKnukE3DPeyb",
  "key21": "2aKe8aDDd6JkL3Gvq6j2Ug7WW8e7Qpzczv7mARrdqvi1YLkV361W4Sd1t25sx5hQevf4L9jy7L6HfjHiNkTxTcfJ",
  "key22": "3PzYw6jP1XYHBEDhMidx5pYabVZEpL47GwNsDYFvDRQ2MnWtBFCaPnTveXjqU1bw5v1nfE4BkxmPdYswhED8NBLS",
  "key23": "oYYukwKBEEMscLkxzgukJ2xKqRqpsZXrgdBXsBF4RWB5xBVjPYqH8msFyTzichb8WLRKNEhwzTf91ECp5bumVeY",
  "key24": "cGyaQdQd84VJvu4nnVUiirV5msDcoxKZJoZdq68V3XsFgoT1dkb7y8Gi76HDb9MZYSfzWnAcjyPz5XV9mSJySDd",
  "key25": "3a9ovXWHqd54CCTm1bPZAkhV4ApUStupzmkFT1WJqywJKcYJZw6skBZ1z1a4YJyzvWSRmtE1MXvFZDkLksTiX26y",
  "key26": "3szwV3zcmxeRCkSRDPGau4C7Rr11184Vj4s5Lonh8rdpAUrUiT25iACzrwqBhHab7hyDL5UHBMnJ5GVK8vayctEZ",
  "key27": "164AfTFgZqm6L7PidPZWwjCwRZdti6TmvWowrkXL4aR9orgWrSDUkm28cZ72KnNJxWPDsCagpGyesTxRav1ppYi",
  "key28": "3jU7VXMeeGWr1mHRqLT6Z5ZcegqcogZGYMJ6DFZ3c6nFU35Ft1evGqjRwbvYYcpMCjW4gabgL3JZ73RSZPKubSAC",
  "key29": "42YusqPGXJspHdu5pFK5ppUHD4VwoDE3szrfAeY5DgmqyCVYmCbMgP3v5AvuYR2op78afLpzUTZdr3UdgNbrHBZs",
  "key30": "vs3BF2XhDnpYdncUuvRkxRYaAX1ncaG6u75TjqFmbzNV8wWn5t6J63fTdt3kTvz3cvyg2vpHiKtFhcVaT4YaAUJ",
  "key31": "4J49guAmbBHWHw7UQ7BdiyYP7TiZmyzaK4YJ1v615o8scFHyNExmxUnT16Shhmsz2p5yDvpBHa44iDT4YhasXJwZ",
  "key32": "5ZniSkZBhJnsPTEqLWH1ekNrwTLxrdGWV3GANac4u8FQzEAiwR6SoLetnjBhiMQotT3pbaDxou4oHBhyrP9QWd7F",
  "key33": "4FKHLT4HY918QPQgofXbJS9VBEGihF8HeA9coKSeeZZ3wc1USVtC3SiTssQNS1wp5L4MZcUgeWdXZsrJYNKbKLMS"
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
