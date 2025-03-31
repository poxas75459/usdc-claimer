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
    "3rtfgK2LbrFhDqbzPqTVH2yBJASxBSx4MndMBAg2urJpXx427gxERUCaCVtLXpdMFKNBKQVSMt86s3w3fREHi5kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "245LrTbzrnGoP7jDy1RvPfYghiroCm9YH9cM85bGZNoDNvUyFr1Ha5iKD6wHk4ZPXmUDAVtAeWnUYLJYt3MzcH3n",
  "key1": "JrmovrNSpxKWZFRdyoLfRJ8jwEGWLEDyQJYUPjYW9LLhbT9KzDKJq4nw3BYmRe7z3veSVw6P2DKr3uPz8yXK8ER",
  "key2": "VfhPk4iKZiN7iXyrijuDGD9dgdYnvBwMy2MGT1k9mCQ2NQcTEsELdVqCNoDQSwXMZjNqMhfsLhwx4CN5LwPETJ5",
  "key3": "2HrXqLGDKGeuSYEEGtfNw9yqQdDYbjRukh7VuMbPrGm4n9p9DaY9UTf4swY3At1Stxib1XDWKuhMEiQn4tE3ivjr",
  "key4": "41Hqp2UGS6Jpqfa9ow6oeyRF7cdcFcWNkj7smhKgBBrXw4ezxAbPukMHKxh817bkgpbCXGuah8HupufxRtLCh81N",
  "key5": "dbz45z1Lru7nmXeZpB4aWbBV3fdxdibGnMq5gMUWosqiK9RAyX3D7ZVHMb5YMrZz19z3bVaSwrKgNf72jATVKfB",
  "key6": "KcogeT6KHcrg7kFYpYNMPSDapM1o3MFrPwAdUzh99CoeM7rmmhvhtKNNHarJx1qftYbT1NxXmJ42srT2FJHgZrm",
  "key7": "2vBvZHs9SZzTsEPU13aMMFVXz4ePiBdqrx6xaGLW4HF34VF7cpLQSnvjjVj5p3VCNV4o6cbtgDVoj7xTWq15CCQq",
  "key8": "4dCgUjrx1Hdt8dCGFqYNT9opnUpmcjW7WZT3JkouNVwUmdVT1qtGFZCT3hDmyMCM3LpKFq3w3xNSyKunz2U3WHCc",
  "key9": "2ZFjp3PTkWZqbZDbjhcwmPiikHUniRd8UrMXM7rnH8AqWmTQLgBCkoq2Xdebdmon5RewHCtkALuayjz8BZEEpBj6",
  "key10": "P4YE5WeFXKTBUMgHFprrrtzNGE9G8TnuapU5Eie25d9aChteVLhQuv64h4duvfZE6y4M2dgLdNC5zmRGQqGtcDT",
  "key11": "5nUKDKHggxeKaBvN9ZYNXahyxy2egtUF4tKTSs9Jo4yRXeJ3aLdASZ9SvqEtQNHchwrVQwoedUr9ArHDvwiqhEBo",
  "key12": "2SXZM4X5qvtEKKAS3TTJm131dFpSxTFDbdRM6QUUEh49AWMEt3jDypNPf7X6j5KJfFinRfLCUMD4VnqDwqawN5N9",
  "key13": "5bBECiH58b2DwJXzp6hUGDs615G8Euju5VQJHjmgR9SoDPKTPY6UVcQvuRqSzkrQxSrGVpNCqxSSKomhxaQTZ4pL",
  "key14": "4w7uJqodnzGCyzLpNvKfCXAr6HEaU5hzXcysksN8yfmWzYXFX7yytymS9TcM3YtgLfpGabvonYAPFrubrDaFRcri",
  "key15": "4NHL67vNgjN9Tr8vGL9brbCHAdyfa1cgWEujaSpLRDxd5W7RZz1uAyYDPAgt55JeH2Z28dAL7GrFhWVGJQAzxXRm",
  "key16": "4AY1DoYndnzc23cJydq5zRgeRx8x3e22dep9rf9thJziWhMqmm4PEACs7iFza8Fuior7umFfa6juxYAQnAU1rCXp",
  "key17": "yqz7gUEqKhQocGovtZ35ZQbNABmcfvipEJU5gkssK6M6dxZ3WJbaLBBCZ38JkbN6N2wkYe1K9dT26aRcoMHFdLb",
  "key18": "5uKEBYRRzFUemX7QQNWUQwdsZgVgAhPykBDccLvEzRZodwc49A6FWee4gt2FC6wUgmc6xnmUY5Vmo1LsUUCAhXNP",
  "key19": "5VjhKC259k6YVNL5dG4wpNQwg3NVgjBe27iFRh4zE1URHvYaYnM8VVWgQhujXMLmxmB37jTARi7ZRSCJoYgq534T",
  "key20": "2H4M7KEsSZyw6ctGSArj6AUUvdUArf4uzb1CA7CFoaMqXm1X7Bivia6c5tBk3fHVN4EUV76uHMJCg737o5x8oQDZ",
  "key21": "58FbWtKJYksauR61dzeUKC7xbk3Vm1NFCT4PkR1KPsZ9KPd4qLvui3YhB7HphLCbWHzWNpuAZp72Hj5SX4ByDn5m",
  "key22": "5FgxbmpVuzAXAQXazbo17oZGbhTvNR3BPiWekUA9cQfMYScHpoyMqnxTxqLYkziFKEuyakPEspiD9p3ST5DFHepr",
  "key23": "3U9WVD9rA2p9Fbtx3BjZFLDtrbXkSEdo75CUMemQYXJWPSECH6SroDX3eifuvuEWudUzKiL47VH8eGZ1ZfL2K2yC",
  "key24": "2bs2TZonD7PxDTcDaAGnry6MwdPwfn7v7jdFae5nSXDNq16zX9UmcTjhDZGRtTudPWF2neLEMPbiPfoW1wSFfiM2",
  "key25": "2HEA8H1hKbyJrzte1hT67icu19RgtmwSJrFcMQEbThANzxancg5v9B5SvFa1B1q5EyVgFUFpnNk8uWGq2FAg6ajP",
  "key26": "3yFmeHxqB646PoxQDBViSoCk3CgQn2KHuEQnPfsTKV3gVbsaHh4qsmjg293hd5HLfy1KgKaNo6QoUeQWmPpRFzEh",
  "key27": "3KDyoPmPe4VCQd8smuctTPGNA4ZzegHo2JTuNCsTK1BnGjTuKQKJ8wDkSuaCp9vzwkZgDuA7TeChQAzoVYJPjX8M",
  "key28": "2CBv68XXSkFrXkkbyyEQvA1qTz7mZsdvrKHU8igJAdgYCHWuktzwYmKniERCHVpSTd94dqcyy4ACY3wCzFVTAnaw",
  "key29": "5GvKKm5dwU6KwxJUr5WAoEZJE8LuzUV2JQ5UHqhjMWDQpnvBZsGHMFybdhVLVnvgp8kUrmpj4u3ANoWcAM9ujTuN",
  "key30": "535owbJdyioztZD72L5Xcjg6e6rJXLYYsCxehEUx6iAjmoxLZ7FaeML9P6ab3NMfqrsXNjY4XghGpTdodJPRNtW9",
  "key31": "3ExKFv63F9Ejoe6maT1uPB57yzhHyTvYZ4G6o8km3TQ7AeSbTrmi4xGwBpmt7XFPBmSSR1auqj1qdgRLvdEvBEbq"
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
