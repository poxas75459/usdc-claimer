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
    "28RYbKgdpCbfN7GUgHiELqRdao6zQR7f4fm7HoPnkFNNPKorE9ZxGdFq5uC4nD8SaAuUPNkVTDLpDB2ksFYbd4LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65nWCZuuJC9QT5SnzxSUPVRj1SU6HxtKa8mJSe4NTvGT5fCJVPm2xpo44NWEM34eJYLwQpx4yeHkCWC63C4BP1d8",
  "key1": "3yRjRkrpPZ5y3HdqDFLPKo2yRdY894jvvdU1XVkhZ5tAgGE3buoGEc1Ru8rwqY5xqw2kjPQtJQ9XxGU1YfiuA2ng",
  "key2": "q1XrZsHLhTVZGMqm8XemeYH6dqYLVLnC59111q46Hwb7Lehm9DGAVyJtooUNbsmZNG3n6pd2KtgrQAHBb4VsdRt",
  "key3": "4FfoTHe5Zu3FnQTbJZmSRBUSCvRsRnxuD29qcbXrabeftN5aqysNkn3uiNsXko8FBQCkcQXoK4RSYbpahJjjH6wL",
  "key4": "5UQYFuzBiFeLKFJ8Hva8Ek4KU4UFXfRefHSroW1wijxWsvsfAQbn8f6fquayBpiGfzeCoBgk4Q4U4VHnX18ZxrvQ",
  "key5": "63mSgm8SWMybfA9xDp4WvDKEtQ2sY5v3EYcL9oF8uk7VjBDxPPVqMzZz59j71muVaD6BimaNbjH49HZpRhSiG5Ht",
  "key6": "vbQqcsRSiqBjhkpwqc7ntfSrvnmkYXZNnYXCmtEufwsXXMFqJijXLZpXpLfmmGCfDdPgRmXCZBVvYEhrD9nKZw6",
  "key7": "4MLkFnZm6ZUTYSpqEY6JBTgASQCj5d1FJutWwHNdFrVf7sEX38mwM2JkGjgYekpdBQ9SW6QQhZfzz3WWDc3wqFuc",
  "key8": "5WRGjViUEAR1VvhB2YWmWEmt6pUEsXAuuRVQ8k64S4mHtW9V1W7Kwj9Yqmq2QWhFvTgi1CJzG6sD7JA29Hon5qsy",
  "key9": "5py5ZmitCSiVvs4zDj8Bn7jGps4oWi3Zze1unEiUd7ye6KCb6ecurmW6tDQUQTK5KToBEworNPJcoT7L3npvL8qL",
  "key10": "2Ye1ZZXUxfWYzdCjMP3arzQfr7AXMHwyK8x1aeUWeKfYAaUvTKkL6UMgbkJ4HnTMetMoE2jzrN67YcTtYWTksN3Y",
  "key11": "2wfWqLrfmBA34cMi8DuxF33Xdo2tpmoQTvmZ7hERKjeXy2utffC5EkqtLCSVW9fVcE6DGFdZhy8mnF6U5MZ7B1w9",
  "key12": "3ijRWD4aRbudhqV5ad1QdywDvEH5aGf2MpoAC3XdXaMxBDFcSRBtserf5ityBTozp5DZnCgX3hwH6jpP9vb45jKh",
  "key13": "4mMJaoevhjWFxytAp67EQffXa2syd9Z32i1FZGHR96J1ff9HSxs2pd55ADG1Nad6qUFit9EjDA7qE6NJ3H9uYDzc",
  "key14": "pCTVgMc6KcvvSdBMwnC2osepTRfFqSgKZu4LHggktJjMWeMQwoTMaBY6RQAvr4865Lc5GT1pPQ1bmpTDjyghQ7V",
  "key15": "4E2mbCZ9asRMDBwJ6n9g7siq74GyqeW65USJyDmq4Ehp7kp7p3U8TQ84xQ7ssHSv376EXG94VftUjHQ7Xiu9hGbU",
  "key16": "5MASRYPUuAwtUBV8am4tarysN5NsGeEmbSsAg2G7BpqGjuhmGHxafVJf7QVJ8kcBS1CjL7mpLLHrWQNvMEpE5DFs",
  "key17": "4YuQhei3yrbJFDHWzZRqWQe1tN8WqxfHNMz8Y2vnR43LHuq9YwCprEcM8v5zkXSPEWJFUCgKk1sDPnXu4HsvAmUR",
  "key18": "5YeZYkjuAY79wepgVW6LDGrgpLDYKAvCd162knWdNCzHNNxPPqXz35uk9CaW6A5QCqbJom9QStNB3GZhgwfRELx3",
  "key19": "4rqXGf7RkJQm8hNY3SXdzcsbLnwjGpokRW878ji7ZMeTxfK4sUrxCxoeE8AtKrDSzGZ1Sy8bFfGn7xRso3t2sGTu",
  "key20": "VgQNkbm1VYYpbZvaqPiBEBiLbsmy6PqLB8K48VNQYekHbD4qy4JUzaNQ6n5L1HUePJqhhWpXDNJXUJxqeXUkwsq",
  "key21": "5aib3kEjZjAufeShj6f5ry8vGwLAcmxWYTEW4MzyXiqKHYMCvhhi9ARau7RycyPjJqKySuWZJ3mYE2SCwUfnLFTB",
  "key22": "4gUj3uP2oBMSccjmnPErij268CJRyQy8dNFe6WwkQ7GtyP3AgewiH1JJiJWyhVmh3xJkWvfAyxg7FhPD2N2gf1DM",
  "key23": "Bw92qaRmYv7c66DYyu5kSKQ6YnWs2qQqeA4Fq53bPXGVmFSn7tWXiZqFPYPYNR9c4NeEvE1fuoBynXaV58Jfcgm",
  "key24": "49oZyQmv7C2257xMURzSor6ApaV7WNJauFAxAzxuce2BsaUF8qKgK2umnu6QJf7ecXEpLoA6vr2YuHkcYVMpLaw",
  "key25": "3q9eNVRndhrSJj83giHiinFwg9WnB58rjZ71rhmadcThcutAYU51EJVaLVPvL6obmQqBmPhswaw1TrRsZBZaw7Jh",
  "key26": "4GbJmFV6WJuP2H5ehvaHhWFUPkbwAD3dyjg69fwhbdTJtiNGFyjbQd1panxBmwbN8rZ3LiCc9CDaVj1nE7cDCcmT"
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
