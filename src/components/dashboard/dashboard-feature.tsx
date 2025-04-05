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
    "4ojgzLMeRAbTc5qgQxpXzPt9wCzVNh4UCPt5p4QLRt5rpMJWmAvNVtvyyMiNZJWY4myZBLwfi2HDNpSR4v6yDky9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rf9FVnjUQfpz1KiKM5J9hUtpwJ43XreBxuPGpW8KYpPsjfzd2BAThsS4vfjZUi1HGrjNN2BCvVx676yyBCtn17M",
  "key1": "3gK9hzRAEX2sUFQNeaPzM2doN99LGMq6RPrwRGbpupyutMhusgsZy6MPi3RJBTzLRdzy1QT7q68UBj7SVXUJRH5N",
  "key2": "5ToTV4gW4DvYSoLQbMCCNCcvZBNN5GVbYSkP7DH88sxjBhSKdGCpfgwKukUAo4NsyTtwHrhuwBfDHtfvLy12ETSi",
  "key3": "57dkw66cU5c3zmkaMgzp5KJ7eMDkHS3cyx8koRPFEvQzNMw1KTvqp3up57mUPJmidLV3iy1JSx61YU53sEkQEw8j",
  "key4": "zZiFsNdA3j3YHwpaibBL3jP3st4cwX5XQ7N5qGzFZFh9Ahffskx7ouM5ckJvqjgaq5c56UFaso47oz2BBVkaJFo",
  "key5": "2gGmVMyHuLW5P7gBNRxgF4pKiJetVFoqHtYJX51tpiqzAuDShXivYSygKDMkpWbevpRvKNEuJgnsrdSXxvCxrAy1",
  "key6": "4wTuCD76wGgUY7MTR17TCFBUwPfLcJyHDkEbFWddtwR6jcrkdZ1MwbWD3n3ioiQmn7ZrdkcJmTWqAtr8U6inMUvD",
  "key7": "eVX8HetTuMXTu6nUr9DmNCfoGU5EBqLZNWUBvPEesVCykDDF35zow7VJwDBUMHJB7T3941MjnPJXZr72eKz51Wg",
  "key8": "2seyET5RhTw8Kiakpg51pRLDHQVpL2gPgkPjpq9VtU2ZuWdM8VKD9Tv9XR9opq6puwX7ejF1t2pdLCNHpCujJd4g",
  "key9": "5B2DGbWjZS41PCsTqQXnca2NPYs7HNnC9dtHtF2Mmq1wyRtArNxqJSc96WQT3MW4ZKpvnnvH5BHUx6x5Ut2UF4DZ",
  "key10": "5EwCwYJ6Jd5BCuMwBzpDwdki5uhTA5jVk12KXbPbxXbZycjBvLdtXDTTp2N21HoKaABaDG72wborQougvMJiaYUv",
  "key11": "5LoSpGhs1L8fHfCL2pSQ8pjN8JuzGVu57zAJmGkeSbbW1TRE1faCgKQYVbafKpt17v1n6e42Ybi6WjScsEZgMkia",
  "key12": "44RfuLCsSP2nxHXfkWi7HNtNaqbeMisRoqmCu9yef5YWBnZRX7e8mnQXGmMEeJTN7w8imSTEveMpE1ZBwVABCX3i",
  "key13": "5gnqB55hSgjTkwHHtJ4RSfJnZM8TEgnrAxJ29cRcHz2NAoKmY4vu9WDgXHFG3mxx5mhwFRgCgKvHJun8UURkTr56",
  "key14": "2NdZfiuv2UERmwKRfr4TGAU738S2ByQZi3E9VEwa3cHYqmge6LWKj2v1cFjxoT6Ri1zA3BTqo2zfaZrB9k5c45hy",
  "key15": "43LnRoHC7AvjnKgHbH71cvERyKqvooUgzBofNtibjmVcAPUiZaBu8mutVeJ6dYpEPJ6pRws76tjWMqFXtRKnvcmh",
  "key16": "4788wK9Ld7JmvXagn6zmqLPxgoZFj4ZqqChkkVnQZgFJGqoRT4KuB2DuN8sWHA99JdVtqSXP4xRbkBvJ5jmcMWgo",
  "key17": "3C47KB45qYX3mAvxkt2HYJXfChVD7Gge63yZzsCYkKQQar78x9jpdgwudRQbMDA6KNfE9seQ7CiRxgcACb78ikXy",
  "key18": "2ZihnUfeZKFYLr55q5QUonQ9G5SYsE6hth9BMnasRN9MHCptYV3orRXzUzQDuyxtH2maxDjeNPCNQJzMWLe8wyMQ",
  "key19": "4iDsMz5HwzSixxS8B27zpS4Jo6EdwUcwZUeCENEgPmRh5xFPhCARdztp41fFfh9RMsDTcAgJLSPNE3LXXdALyXMK",
  "key20": "jcz3fyURYVcRJTKdhPBHMqBHseimQp2Uwa4toof9NVbk592hdc9B51EBqBRnja3eqaHXFfCZtnDBFRsFrQwFihX",
  "key21": "381bAiA3udznnJaJAAkWt1QFvpKCfqZwsCWLyvuwFSufjktNgoCLNJsQesx48WK4i6fqUCd7kpM3JCWGtJmoLSby",
  "key22": "NEi8aZbwkHejSWqCKo6qVDdLub83E873fAonsS4SAhs9NPsP2uMytaxiNoRLfr2Ro9qy6zEgH5wPNR6TuPNad2r",
  "key23": "5pJcQgwDHbjJhsp9Kpj6uYik5pzU3L7hafZnGTFmgtYZHhH7yKY6wbVHb1ckQdofg6d8r4dZ5ZFaB2NphAiBC9W6",
  "key24": "66XZKPpPmwYWW4jLwJcXu3ZpLi8kQKkKx3eT36ZK5uhdSbibfNGzAjieUsDhhNUGHcHthc9CD6tCnv8JJMojN5sd",
  "key25": "3hVYWmLxp6bhSSBfd3qEcQQEUKWPGgrT7vZNVyBBjovQ9B6D3VwBVa1Ffj1oSgHvQFCdPjahV7p4dYfTGwRFjAXc",
  "key26": "4NM42K4m1sozyKUdSMqMaN9VULtvPKuQK8kKcjL1LtdP1fRPVB6UKEssfwXEXi3uPAracyDznUhQxnYBTDgzL1zz",
  "key27": "4THi8bC8NfjZEfzdDa1BTNsgiekWoGbsn8JKCNuM65FAnd81KBhUNU8LUkABT3vNwpbdBTfg7YffcTpN71xVn5Zy",
  "key28": "3ndsXkuPuhhbjMua3U8pU71FkT3nx65QVSNcGFh7QgmcpHYr8QzBWwAbsYvxw1FZCAuHyGsYaiBsyMZGuNR6YhHS",
  "key29": "5UvCkGTsWJYKXBijzFuup2Q779UnEJeb3Nk3YBcWeK1zWwD8LBjR2LauR8dCKe5JJoYZhG4Ug9yXPXg4Ur6on1dn",
  "key30": "234NF9QWuDzEsht3qTFTZjqAGSBvpCdpapGfjFGaDhfxVe7h1oG79UqTr4w8XKQyiRQ84genVpE7FSw9ZVQHkmSr",
  "key31": "4vQA7gCMeLyt24TaVBQKHsWyXmAGisVcMnDJBsqMBbhgLszgyXiNnfTRAXy7gV4r8WQVsmtHSa6XP8Xmx6PQehTD",
  "key32": "3jYgf71CFS2aW3coojD2EkvRgWuVwijVh8ToY67fFqD6ngLS7orVtFfDC7RXYeY2C3BREZ4PNmC9QDRPHM1i2Z4m",
  "key33": "34oyJnqnktqFwZyJ9u2jQMDJtQQbECmemzJf3t9DJxo8wQpCjJBYtX85rKs7dwFbpbvmGPQF349bwWtjTNCR1grr",
  "key34": "4KHXs9qgUjMRmqTLgTK9gVFWVXadC4d35xrjYkyhkegjWM8B5R3YYWp97boiH5hZcWYtSS8w2LwyCFtHjQN5G7t4",
  "key35": "2M4xUcFuFnXp2N1QufQQtH8nSTWFE5MjDbMa2xiE1jrWLMgDztAZCNPHEfWFKiefd9vzRjDsxhwr5pVbRMU7vNQi",
  "key36": "mwJey2J8pVGvGrU1NhU67LwBv8QutNMb9DcGz6RhDkdcLby3XkxQ5DZiE5rRYkhXoniSan6y9gBGU6MRyi8qCAA",
  "key37": "5KeMdLnseumD5Ls9q5PdKicDUUdgATpbyvY6m6knzpf57ooyG8SJv6UPxS3su5dHJvYT41BCjeUwuxw6cWi2AGyc",
  "key38": "3NDrEnnMu9f8XceUdshng8nojjsbka56mGPUY9Y8hXmF958euLyQKJYZYgKpbBsa75sNWsGPSG4t7tysAunnRgYE"
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
