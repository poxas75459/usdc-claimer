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
    "4P7h8hAJg1wrr5FXd181R3oqhweNTUkEguw7F61VjwLeKR8wWoepfc1nuywzaV7CvSag129GY7bt8HFq7XvLa5jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N9fmFH5UTBVSoi2E7EEbWtjqBgvSBK6i2FA7FAN9EgqbfNxdYQZbhGF48o4oJ6cRddU9JSW3S6LBeYFPUsrWHZs",
  "key1": "cEuyHvUetmcYyGDwkQW6LKmckHZRifixLMaCL3Pnr3Aqdv9e4Yy1U4kjkd2cS9zCnnQ5UxDhczAUtGXAA1h3f6J",
  "key2": "5Cxb5hXHBqnd56n1kWNkmHt4G7XxqqM3FLrsYXBL2cXhuetNKoqYAmSf7mGYWoyrNAX2bS7DkTFe5LFZJQ6g3A5X",
  "key3": "QDyTMxaMFf6wGEwap8xvyox9XRTzsD4795Nnznf3hhctHz9KuKPnhjTJ783AjPdhEzKFseJz41xHQaA62P5XCiU",
  "key4": "4CjR5uKPBzUSbSLuup2ta8iYwHcGCzP878amatNLnFryRhEGQXR1QHswuuGgwjf6Ks12pySeeXDT2khTDRpJH1Kv",
  "key5": "4grYhsYMVvVhUzvYC3Sgg18KMvHSmJ1WyS9v3ZAm8f4SZtnzDHTnCjegqVgxK6rBQm3SRK6ZZsfcNis9JQiELxmd",
  "key6": "5di9wKmMDjsgDvo85AKQHtto7Y6TCnvjwsc2EGpR4xyZjdyiaXtwvmpgUbPngLQfS1WTE5BeueKT6kEjwqjaTAey",
  "key7": "iBVYxfoLQwfd97U6CgqYrCyqhHVvxcFDWH9j5dYDbQEumU7c5mD8dELT71ycKSyG6PabEX3X2hNyUWEiWPyRaP1",
  "key8": "42M3gDKYYQ7RYRYAoC5bfAzD9wJ9hihsm5Dbth46CUsxsVjy8S8jgPwhfHhXviQyCgfkb3QyFerZHxLmNfFzsSoS",
  "key9": "p9Kwj7xTFhHhRH673DvZMEsV3TGENvwN9dHzS3Ys1yFyvcYxjRoa4ZXYkYMqY3McC7NT6Yi3LtGAQvWciVUv964",
  "key10": "4LTCtiakhGfwKFxr2GcQQK8VJfeS1bPiTiPqb7AY7sjdxY5XUEXanGnzSPZrSSxeQauVch9yv3X9KJvD8eRQs3gy",
  "key11": "5xqw9dBxirq2V3kk6AE1Vydn1MWmhGsyJoVeJpsHRWD5Kt1sqtRD2eS2atC6ozzj4hXzAWDvE2UBFrcQd4wMeRW6",
  "key12": "3RaQLuiuQGnAtvN9YDGx2FkyFZVy6PE98kmnjfRRZQEZ8SVuXj25hotFrd4xRowPnQBQgUvh76SPXiNrq35kETwD",
  "key13": "WGASMQoKhj1iqd2wqPUsgwZ318vmYcB38JZ4LVtCb1UrpFKcr3w8Nxip8JSSd4CXTUhPgBWw5cgWBQwhVSLq3RV",
  "key14": "4dNPfYUZkaMN3tCQ71s5XtFLALqn6GoVa7geaMTDnALayN5E3t5oeUXk6WM26tTa5ZArVSyoQTwSdfgzLJ6PA3Yd",
  "key15": "4QHFH2JsdjxLUkUZy8s6xtSxyMF9Ggmbh77UvLJt8WnD9WrTotxA7B3KW9kEP2GQRVSHavq6cmJsoW3Qy2RXfpm5",
  "key16": "4AefXsVHexogrcTjyaDS57g2sriUCgYn7frUN8QB8oWR1qhHUHg53HwbwzAMmzrzV7AJhNeBySxFGTyhChtDz7tw",
  "key17": "2np1jVg3eBohuTNfjjvuuAm91aGpCCeAyUVcUoVf2D2Sx9JeY9hiSpCo9PvUB9Am3THWSMqKd6npTdCMkcyyNmr2",
  "key18": "22ujik5Sk8ztvKKGej11Zs6CSvB3pktL9sbMQ5xBp9SNPpssajSsVo3xTT64wRocqfZdaRkWHgW3ETWbGoDaZrLm",
  "key19": "dDCoXErM58UbMtsWh12Bw81GQootGHPcsL1Qr5kHZCc6yjcnkdfHjniKFBHqPhaDU1PkSp87XWL5g6zvubYY6QU",
  "key20": "qNrRGyEtsZuC4pS1nJSpfwyPnt4q1xVGBUYB2jwED4457ooxqiAc5jngVdZP18Gzj3FMgstBvvxekpEZNQ98y16",
  "key21": "6uMLjSSqt64vXLEcctubuyXwKvjGLCcLtGJh5Rr2jbz1LTk9L1uYj5wPNZNHYeZegeHk1LeM5DfjyM69JifV6kr",
  "key22": "5MAdKLyGX7qAoyihAkxm3wSFAQqhDGR5rUj67RrfYUwbi1zH8ZUfT34RVGg5UVUk4ca3AEweSCjg6oR6smAi9WJ2",
  "key23": "4MXECMGhEpBbk1sFXHvkvmhtkyGe949Jjt97XNB7Br8PKt44LgYmhUGBEMZu1XPT3VUbbrZFpxVJBQoBjZuvePNq",
  "key24": "3ALjq95VWjojEyw6EZT4vNTGvdHwUkbjuKsJpsnpzUh6d6KJouCBqaoAVg5SBp26ZGPGMvYSJsVqBo6rgY9d9igg",
  "key25": "2UBKXXNgqLZnLtAVfn3VTerMoBKssv91XrPz5Q4W7zuS1j5oi4GHVKQyBfZuogHzMvQmv6cZ197XnUmdiwzJrLXA",
  "key26": "HhZE9F5m7jqopL2rTMmCHixcWDQxRxnPKUob3HL5mrm13Ep5TyNjTACzcSYD73P9XAtZBZmp2Nmn8PQfUuNfjew",
  "key27": "36BTu8ac4hJz857NtmsovfPnrTbCdAMG6ZkiiSKLM3Lk7x2GiRJs6J1yG9EE7vcqhTYHrXSsXDUF8bNE5Y2WNosC",
  "key28": "3Wxp9zewRdRXBcKLVs3XCrXWu95fpfihD3e8CeAgG4DQi5Nrqw6Z7wu5AKjLu7utraXQaa7vtibEC4yrwjV5jNbo",
  "key29": "4Ujdatu8D1UBRUt6k3Fx5fxy7bA7YduikJu6fi8EeyMC8CCcfv3SFQHRBLRTsLew5ekgC94AvFuzij2phtoN7aYr",
  "key30": "ZibyzJEpDRUmaXQq8V2aiS5DSHfg9qkNTjYMURdsAqKKqTdRYeK4dnn429MgaceePMMdkaf4gtb1FLD4TvfUFoz",
  "key31": "2UbSE3Y6tR1ECmNmXML7UWbn4ELFCUfbcuQN3s3JbsaRDxm2PcKBARP41fbyXzLjcN4gVnWdTCj1Bsy13hJjopug",
  "key32": "5uPcBFmQsTeFUENHf8DqoSrpiqqxszwvKzp323V5uP8epA8QW4VSFSjFTpjovAdZQuB7dwsum9mXCb5xVQw3oWDZ",
  "key33": "5BWVrBWnKkbZRS1BwSpBQS44gvZYPgmhRHHDq7nLaQzQprGCRwg9mPwD7t2XrU3ae4yxZxhBHAWeGqCkwcpbWZ68",
  "key34": "jatUHAsvRRyd2Q7HPzHvGUWV6M71XEoL4qrAvERdBZDfD4wSjDrvRfN3YHUjYVhP9CbJqJTByyCRKgtoreAwxEJ",
  "key35": "5LErkuh9dRuZ6M36tpRhZjv8LF7geW1s2UFtFByVHF23ca2mQxDk1qMkx5DsPB4guVZacmzgZYZfUEBbmcCFCUmu",
  "key36": "5TsDXyJufxduDZR4LXjyyNUsjDB83JBhqp6gLCxexs8HxM4ek8ehCBJ1eTnDVVUf1LnvwuwhAykcAyegHASF6jHQ",
  "key37": "4K2fWRbrzAzSXJGjB5uNi6txQaKxuoMWZ7TGp58MtM63a3QN8w9MUUWkCyiTwNnT7qyEwYZmGDcpmgFeuVGDZ79Y",
  "key38": "4R8r6NeytZWB2HeNaP9fYP7m8pTfTqJfDue6byxq3GRMyqrvMPCwGePnWwc5RLQ2oNKYAz4Y517Mnbbu2KJDcFP8",
  "key39": "4rVUK2EELcy2ntcKfUzbDxxh6PGWTa9CSNf9TGw1xmaSPkhyFBbNBJH9enSoLoLdkgeW4L2jwSta6Nz7WH3787hZ",
  "key40": "4n24cT7scBC25K6tTb5QfB55fdcxH1xEp7monKSNYK2eqkzpRtNhcxZsGjtRi15Jvon5PdxRjLKbsmAXf75ZU1ex",
  "key41": "2odxnXwP51r9uxB7nUPJwnC432yPS62gc3C8EEvX8r24nUmcrB8iU2ccJBDhoGcJkdgrcV8Bs2ixZya7b8ponG7x",
  "key42": "4dipHgokuj1EeoD1N5cpuuHw38cW41Vm3j4RCCCED1iVsJ1TsiZmhKdwbPJQmva48PyeRMJZdLJEMBq5W7qDZu3c"
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
