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
    "2QNnp97YoHJ1wMFEAVdaE4xCvEMnTJvncTVsrprwQCDA1r6wp2n4MVW8kg3D8EirDMHGJgAGfKHyPJTjwqXXUpz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Y4BkHp8t4bjeUA21Nh3qVvQZqkHijPhBgc1zPhf1Ms2paiDrxyRQtuTtDppSMyk9cUuGh5aFJvbnW5mf9MZqCH",
  "key1": "2oqVyW3vECZQCGnaXaRqz7U7uMjWgAUQcWH9naooM6xVnFghBWKtaW9PQqfP5v1wqHmVU3P47um21X5a47WerkRB",
  "key2": "5D796wtEhaDnjSh5DXtMTYwTy3DLBQG2TdWTnCBtqL7HxfXNX4rSty47KjmPoxisWvLGDY9YBn15kMb5ESC52gGy",
  "key3": "5j1EMjMuqjVw32e6oukPsoq42aBCNkuiiUFMGYg2JnHWUfJurapAozTNEtgoywmQJKrc1VbDtfqnmaqrFgNZbhcT",
  "key4": "3nSC2dS11TXY1wmzRxJdbiLykXWchxGZjwguoHTYsV1BugxQXbe6kxFk9t2snk6x4DCd9w8r4iYdd9eEGPAyjSZN",
  "key5": "2P5fM1pCG4PYPwKhZg5jKJaJqUy63fbk7auV8jQrZLJBAKmmVNCdqGhYkMTA7fLXGCCyxjya9Zh7JXpeTBYywZ7X",
  "key6": "HJhiUSXY5zFSACGhFz9Yssucm5TxkuY3mWbDkPRdmZWQcPwLs7pGXGJ1ZLDsVAJ94YcruKEDKGEyauPdyjotDg2",
  "key7": "296B3KwZzfHqXvoMmF6tYEXfWZpfAaGTSVQN4PEUyWdYf5GvXN4ABLy8y4Fr572cPnYY8zyXEvLjzQcGzj33CxUn",
  "key8": "24FemQedEwzxUQPJ7LATJXENUV9rcQgpzPNH8ebvyNiE4umDd1iSZqN5TooXqjMUwBEytQbUyKqC77pdMLAQbrBM",
  "key9": "2WhjdpLNwgbQMupDZP7FZc9c7wWR1NHiJ4rLYdXtyW5TBsPXUXzMVMErsv1baDKEkHmxtmKy6j4566pLq7LsMuKq",
  "key10": "4eWh5x5NCo2zVc64YGrs1PkbpC3qfySwRfHGxq9jk5dQ92YjToEEmHEw8JaLgcBarpamiT9hi42GpHAZ2boSmQES",
  "key11": "2hYa9ZATnacGNagw2uoSwf16v1bWy8Md5NCU5R5oLg89PxdsjdjWjH6LrV6xqXbNtqyqwsR9u4DYi5K958XneJxM",
  "key12": "4qBJukPKRBiDhtKSFU2WvPdq57uqTxPQw1x6ZVotJh5gMb6mJ1BJQ9kLbPFivtXFfGk5UcEKYtaJMT9b2ZyotEkM",
  "key13": "669bisr2YDezBESjEh5MEthqBj1CkXdmW5L2NgZhCpdoMKhJz3HC8cvWrGkZF6eF4WtgJg4utZeG9MnB52QCm8BQ",
  "key14": "2Nry7NUq9wrZRc32JiidLDEht3vsGwZwrugftpuJBbMfeyCPAeroPySTh6F3nHABkCBzNs7sKSujNkMTvFAFVz72",
  "key15": "2gvFQF496xR6NdDn7HC7h7xzbrN1m7xmc9NvxoGZ6WftmCBsPYKFqxGQkQ1N39EMUuMqY6j6JEXqA6M1bxs6E3rR",
  "key16": "kcJZZrCr9TD81jm1LpcbT9RPYQp8NgVTnMM94YhAA5EzhAhkaPLSF92CvLMiuScv5PzZowUEthe8nCWteaMQf1C",
  "key17": "tt1iHqvGz6PFG7CUPdvQCpS8qcGVt2si5mHvzH2KmMym7tCcrBewwCupykxwHASu2BdoS3jJEbQ6wfLk1q8gXnG",
  "key18": "5iYpXi7a62Eso39vbX7xaBdowpaU6gCAmpFENE87vyXN9PYJPyhxcyLrafdfr1SepdyLK8EzyboYMyUe6jUUky14",
  "key19": "4pPjmVBwCRgaHN3jN9YrabCbXxky9RXZGfFfofEmPsjtcArD4yUeeg5xwXCebCuLyr25KpA4rCfqYuLKtp3RspMC",
  "key20": "5pUXLcaSTEbDU6jLzE23BA9owRYcGqekqCufh3JYc5Yco74sX7KtzLubbSAFB9tXoSsyJPR3hYTvNgkhhXe3BTfH",
  "key21": "3xwhx3k4pPauR267zkBKnCRnua83Fe1xhuJa3A7Q9gAhCcMSi7afbhw2CrjH6LrMh1zeE7As7QLK3w7QSkRwK7np",
  "key22": "5RXD7gNtvDTWesEauTWsGgWWrmrvAfbCUBmMGfLsA7BwouBHBUHXjBdeGuYud3ZhToGacrjxza6L74cB9gnuQEi4",
  "key23": "5gy2HnYnDPuXUKTxQEgXf3nbxDmhffWy3WW7GeYK1n2ryedUdzDw3eBbCctdSnnDFwPXSWuuYvKw8TAvDW14DJDV",
  "key24": "4ME5HSgskJiB7GAe29butsRgEx2EdwpvE9Xw73dsdLWy4cTKqnPwFLFWFgX1BoXMiEZ5UWz51MpVQ6Hj3dJHf1J1",
  "key25": "2xyfyGMZs6zK6mD9re4JkRwpTVMJvwmytLm9EPHBTWd8HMUn4iPCwJRFo9ZRWqfp2VVShT8rCEviwdYi9qCFHZg6"
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
