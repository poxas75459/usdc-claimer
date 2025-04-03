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
    "5J4MLqVMRzvxukm7Bsbx2hVTMwkabQnhRjifUxtBvQZnuUVcJitcGH1HBJahrqZR726kwAFnm1hXMddcVNGEmgkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8hqzt8Mq1dmFWcoKFv9NN4p9t3HbdM33a4W32Bu9zMS34Y6EGBZGUvdtP3w4Qf4tHJkGi3ksjw1bfA81ZdEwEo8",
  "key1": "5AcZDH2pQKo3bUbNwEqpgjhXe91DvuR9hmqHDCB4X6Z8mTqDzgqoFhvZC8h9Vsy1oCkRzPcXRGXVYTB4ndRLLVoe",
  "key2": "34j5xYd9ev73AwmaV6VjtMRQHHmvWTGjuPPoazuTCP1hBpvoT5drrdsbdUmVL8yoBwB7CqygWn9X1yNcvrhor3hi",
  "key3": "AeAaKWNbhrsWJ2mgT13TzbvHPhRFcAoLLSQWgV6eiZZwGYaxD9WoMMzpxAM4LAkT4kSPEAm4QBifgepUUR9BySF",
  "key4": "3KrXfzUcTkfxpVmi3SHrefxukeCf1Pk6sf6oVVNj9guUuSS2CXTWhLyQXSjESbAz4A6BxbKLh5kZGhHrEdNhVXbs",
  "key5": "2AuEBJabVJex8Ziofpa4GQCVJh8z3Gsjg2xqGyvgyaaMy3vu23HugrZj4n5pHfXTQskAiUBZeDkmtaRNjsAw18wc",
  "key6": "4afgyhWe97H5DAZpZyuxKT4L8GXfWy1efot7nTLUgp9yH1rZKx55n4quJRZ98EnBLc8Cmvm2ksAyoNBqtZaQPgap",
  "key7": "4SrGz5pYCfYKf12zA8trjgFaxBT2neJhVSgmCQMsh2cKVy4kyayQGMRBRrZV3P9fvtwG7qgnepZPyT8ZSpwy8o4J",
  "key8": "3LD3iJ6PS4CjKMzf3udrcJ7WHhffsZhk16DJM3HR61j2bq4VECkkHSpCffMc1fojPMHKoU2sn1NbAaUAPQkZdMGM",
  "key9": "2inBmEUqeaemqp15rVhJ3c8kB32mN2imuYe7DnUDeeHQNrNiGpn3moq9LtReP5tAgxReotvcYEP85h37adUWfMpF",
  "key10": "36vfRiynLFU6JyGrPQs5ueD5Yq6QSN5tGnQMuqcnG8BXEfbSQBa6xdvapvh8arQdRzj82ULkEYGZWzxPQ4ThHKYN",
  "key11": "2zw697FSqR1Tab93oZ4Z48M3NMQjAQc76FeugTBXsVJYeSFitturmUqmbSSejLgZTy1h7Ri9LhWR5UYMuwrRj3s3",
  "key12": "3BuRJffedPkrnvikdpip6Fcur2GGd7LFzK3xwHiR1UoCsiye6QLaGtodt9Yns8sM4GFHJgrdbaiiWfzFQrt6YdYT",
  "key13": "4rHuxp8sQxsK57QwP6dBzi9ekvzZWM2xipQUg9SENL8Y5Wxah7ZkFKF37A6wGcMVV8uVFXD31jsh4Ls2JWrs4LRQ",
  "key14": "3uPEyen19NXZip7VozLbcjzxRHR2JciBX5TRo7YPmQF6MfJ7Mo7Fa6HCFJn6fYqW6T2CcCPtbP4r7oiDpM2mRkR",
  "key15": "o4BLDdukCVNjWhgGH1WUe6gtYDwtEYzNDzuFY4jcRA84Vj2cTH69a824nMEbLWFQ1qUu17hhnH4VwpDiBpL21pD",
  "key16": "3eKjWzKg2kmRTezsB5AmBXzUbVQa5t2MJ9L5RjwerBqdbK4FkFd4KhDTYNH6JGoEvMUknFWENCH4yz64ycVGiC1",
  "key17": "5fmSuYgo2nD3YaV1wz2Rcnesjm9aSHaLCYnW3sF8aYguUrgMyifE7ziUdE4goEigJMpYe4LAcL91UHKGAFREB24f",
  "key18": "3gH23LF46LKqNSuCDU7TkrShzgojXJBU4KZBm1XzmsiAXE5MYEVBy8hcS7wUcPejha6E9HbrKDgAArPSjLKSq22S",
  "key19": "5gCTdymursQHQhSb6zBsVaPYae2hrStPA6W9so3aKaGSrgm6LxFFrRzRVAb2v8drYjDDqxzUz1Kicxbs7xEEPMT1",
  "key20": "23YaezYbFHr5gAcebd8ocGa2Lj2VTDJfNZavtW6YmY2fteXEvh77USURhNKUhSpGwogJe5UNQoezXLT1Rm66qQjt",
  "key21": "5nh6mDqfwZvcqy9kPhuxzSBpC8YB6VLGsEEcBXdUp5P2FE5YLy8ZEAvSwLCXcn2sxybEADCA15Rei6wFcGJCf6ZK",
  "key22": "27HsGRQUBgucLGoEZkwJ6qUYioXtMpfPKqNNqmfNf8Vsvof9nZJPrPaPcebwRFw3EGftFpLzgTha7t6nJfLyVQsZ",
  "key23": "4TfcxPiTR7AAiQ7buCCCVo8mUsJCbWUZzm9giW5rc5tCJrNeqvkeNz1LZj2pSfeximsdW7vpqwP9jXb8FtkGDLo9",
  "key24": "hrtPKtGrkqwARPYCv9vfmMUCbrYxYEa44yWorBMzZcvUj66hbFpdyygpGw6tXSF6Cg98jWQVfN8csbfgJgd7Z7C",
  "key25": "rqTnAPniPKDKnHqmDFkbHK4hcMrCZBgBgJysCv2v8rorvD9ypvRrPGF13o2c8jrZT9HXnQcBvdYDtXQKoirXHGL",
  "key26": "2zihUJVoPm85QtF8NZtGdQTubJbVrcaaq6uv7Vb9NqJ1aSFgERSdh139Cs7vU8wzcQNocz83qaQ2A8nVWhooeWA2",
  "key27": "3PKVmHtXBjzJMeNCkT7qfuQuZqZS7Z2zYseHmdz7uvD9pPyAMoAGvBiBnuWpJMr7HUJmGJ2uWVdTnEr2XBHYzuq8",
  "key28": "2ytv5R73ohySB4wFfNvPUEbP37GRwidhCQXCt1jiNrZuqYW6iBdFV3aemAw8rGf5kj7oLTr94mTGYHKvneTtyqbb"
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
