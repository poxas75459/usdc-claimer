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
    "3ZMKoLK4MxdgJhco4nv1FsUM3tGYoeaL4r7XimMUbhyHTTBqTcEHQ8Sm4P5JmSYRQfBFANtvD9BVu7KCNJ915iLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ookLQMr6m6Y5CcpNGWt9T8hAhLGsAjiFo5kcTSejwK71NXwRr4H5G6aa4nWWzdmx8uuUGzooTbowQinM3Vhyuq2",
  "key1": "4CRpCQZQ2qRrr3o5vfAYMaGyc9BPZ7gsnX13Aujah8o22Hyf2Z38cSRBk6s7tDWLW6D8xc6Rp7tJL8eUKE24kEus",
  "key2": "5NtnCULf6oU4YbDYRTYRidm9UHMrXCkq96qVGhDbvDsCn4ZHGrNHH4PTte6QJP37Xo3w9Qs5eYgmQaUJNSaHPVTs",
  "key3": "2nh9wRPyHfN6wHNtbDRfVv2aT7aDdNpYN2uEJVUNyrCkEhB58hC2Wp164nJjmT1a7GWeo8TraJQJQofQF4GCQSLN",
  "key4": "1W8Cxv9YGxbCHCpP4hNg32snmvhg7SeqQ9whSoSM5NY8ummEWk8zGovnMKjrgrCLocnah2kskGEDJD8y9D9CsxV",
  "key5": "5KXgUF6SF4XGzNNUYQ72aNSWWvYhjR34Rdjwa2zAc9945QtduVjR3EfF19ihFraebtP4fxM63XQNbMbmKiktdGC5",
  "key6": "3X6Zixx1VbB1z6CMFNwfUaSmmcoXC4rS4xdy2YqYW9Szcpn4r4qojGsJAMMk6sz6mSDBcDdFtdWWwU7F4t56jfyK",
  "key7": "2DshrMRqgxWM6vHn78gb1oKw21ZgxvxUbHYbSi5rUkF2pPuvKoWhj5BfHemwkwBzrCewWgfMTKN2mqxLPx6LGgjA",
  "key8": "4SC733QVCUynjh8UWPG5o798F3wxTuYuwPhBq7hsnb26tCuka42MATHExx4r6MztD2Gy7KE2pBy2aFKaxVTESVJw",
  "key9": "56xDcusof8zrwfA75ovwKNdRxeKsWvBrYLGZ9DJqc6bUqbv9v8DDDbUSzRv585kqJoniNbVponneeJLoHr3GD1et",
  "key10": "6HfkGDGnigD7R1awA8wo8KVyv1Q2buyBfRj6Dd76xBvH6YXKN7Hw1do8rgkzXqzYU8T9TqycZhqusBbtnbjwJU7",
  "key11": "2gftxdPPVXhj5Kq5JVXPbzzybZmEfyVT5vBD8fvqJDn8V8dmk5GgztHQsL9KgoE7Afuw2vqWXavVNHCc2PfCsczv",
  "key12": "a1Hhffw3cBemZcjZdQixZzAyUWFua7iHbkqZKUdqX4SzURBzJD8URhN1MFBLX7pw8JaWyNXEJrfaD63eVxkjm8y",
  "key13": "wbjj5VemJPqFx5hgJFuP6ukFuSQuUye7a5pPEnTiKHFix7gWksHD2qX7srAyhxvfCGQqh7GGabGVv76VeHzxvd2",
  "key14": "4GToeRJQtr3zqFtdmEyP2JhCMypXGsCkXgJG1aMH5u5drSGY7jTuBATtVNSah45mcATmbKW61XDhFqNn7HhASjd6",
  "key15": "UymHibaZi7W8rXV8rnPgfQxmNVK3FQu6UuVKMQv4w2NZ4e3zcxLdBbv4CcW9hTtfxo9XJrw2RKRzQczKExEKnFm",
  "key16": "4FFbnFDhfQthGvQMjMYy7Vbfi6oUD436yttUczAj9vu5sgK6TzaWxrbwNZQHh4TFNj1qxyyF4qHPEf8rxb8FjkdU",
  "key17": "42NahsSV8TbMywhWoVNpRB1DQe4QQWFrBVgTEM9kHQcLWyMVCypcNYucRr4H7F962sW3ftyFiRa1NcnTKruHKjyy",
  "key18": "3KAEQUzptzdu7Geaw9MCpkikBeJo8TBDF1XNmVuoS7WvMpXypeCAEG4GRTHMTbT81oAYbe8GuYnhA525wLffv6nh",
  "key19": "4SDA7PQ21jRvkzU94LETEUjg1RMBkArafsbk3vhjuw45ZMcF59ubMJ99GDKenyAw6yFEXTybvDG2r12ojsBEhJk2",
  "key20": "49oWq6JhdupjEh8nkSZ6T9ppa2c8xu5FzzULDPEGthGnpr8ABBqkeqra2YHTxPjswZxrU8zuXrou4kf1zd1vVBgW",
  "key21": "23cmVY2P6ZVWGRVPLHpSokmZ3y6CB8LWYuE8c8AXLEipAJHaVntFgenJePRai2ogZqEFzMQn56AYUKvd84wYR9LD",
  "key22": "2VpQjX2vU6fGZTw4oddmzc1GaqNAyxtXEmNYzU914ELR1BvVzEQhHQb6paDeygnr5KAWrFkWCBXhZeXygY3ZKqZ5",
  "key23": "5UHcMUesauryUfzTC2bfc1dRFz1ynjsChVgSjvdsZkGncxzbTG1m1cLA2iFUEzqPbNJ4JZib9KAf4ZFALYY4ngrV",
  "key24": "4bC4adV5qMqCkbGpN64YrsmfCfLw3GfzEoKeUbfmFAbDvM5fk6F6uDrVmV8CFbMVtrcmKRsRywnGEVhZMoPRMf5N",
  "key25": "5nwR1vuE12cmWFZW43dK4abU2Q3yhkKAUUeaDkVDy84WcCy34e89Wmr4F3Vrs4Y3BLgL8kjtx9Bnai2484jUdvb6",
  "key26": "UYYeFys3UthQrdGrpDNHMdRGBUfqu7UE3VLEAKyfkECFUf6HYJiFaJdiq7r4jzmpdUtavNnftw26nij7KjHmng6",
  "key27": "2cpbHrkBB2sQe7JXpKcrmCK3tZA9sZeKTVBKcrjBr23ZnUhyesuwDeyM35sUn3zahhMYz3BsFrVnSEmYZxYpSQYW",
  "key28": "4rGv4YaDJNutFUcrYzb5y3VsZgoJQGo4LMHFp4Ex1mB5unVuC9rdFhYT2NcLCj29CFEBGJdQzjJbuBDJtkY1kFvh",
  "key29": "3KXDgRcVr5uiMtXokBhwa47KrkAKVj2tuzrujJztkKWVNAoAEJ2ArJ8En1baKiZJf1yUwE8HHtVkxJemzPYB9nNQ",
  "key30": "SjaitkrR9Wggs56y5ZJMLCTyM3LmhDr1Zt1Mn1BKzVjtJThDmSSRE6cRQQQzNJ7EXYhq41cXucZaZxLPUAmRFVU",
  "key31": "4nQwGBRGpHxr5Qdnn5zteCzUATRD4X3MgVhy5oTBRESi9sUVFQ5m5PFuqVbyptSSy6e4guAdTJmjXcPYKsfmtBLn",
  "key32": "24NivtHWhFzkAETip7n2ecdzdPT4mjP2sB6Ecfvm1drmv3JcKX3rSw8nuK3ChoY5exYWsLsdhMQh8ecSwDj4YJWh",
  "key33": "2uhRZuyYB7EawZfDHqXUawd2cuWeCprcCkxVm1sT6dncHHQYFu1bcREWVEp6PXr8cV6pfbGcQTAVGHxkDcEBayQs",
  "key34": "4Cytoekp16xasoK6meYbcS2aHxADEhMf2kcu5xTJwvFTgSKn96FYh3ihEE8U49LNQD8EKkfzZuXThVMkx4xeH6PH",
  "key35": "4ShGufjqr7s8UpNxDCBYAQhRuoXCmVVMMZSbAhAWVeaUkia1jh3G7UYkwi6Zk4cNqEuPcRnJkKXuZoTe4geBXv1C",
  "key36": "53oNaN7LDSJGdseregjRLWSwmuY68AK7VqHztsqVoxLLwmPVxVWQbBoqTRyVRPdkYbv5Gh3wYpweautgj89rAzE6",
  "key37": "5qm87MjVWNyZ6ES5R1qevo5XgvWyTUQmEuBeVo6KukMV8mTMAWTh6okcuvgwuFRNFcok2HWoLKJCAPfCuEDNmjEx",
  "key38": "PE2xTtFieyeSCT4jcqykJELc39vZ8dXtdaQ4LrCQFcxZB1vTjCe3ABWFaaTufFx9EuV1ztxJ6DkaFsW558nvHRw",
  "key39": "3rP13ouXwHsk28UEyYg4NBpYpFC81Z6fh9Jn1wQjbyUWpQ85jsbRTzMNXZMirmo1X4W8PWZEcYknZ2hfdKXWL7c",
  "key40": "3eWhQn19PnCZLfVAEMMe8g6Bn4qeBjv3rNSjJLkfMBQFJhZh4jBieCsxRTCPVZuqfsJCaNzgfSWnFCq3ZoS51ZQt",
  "key41": "5wUVhjmSk8bXP9VYPFGSXexWV1jP5jFoxMQHB9Hvm2e6VFkCcAez7ydPanHaDtmHsyJHQGDpGVfUxAUGsmwTUVY3",
  "key42": "QXd6KMhRd3shWZ4uwFRE5JD3eMWXNZFfkBkB5dvAequUQwB8QEpAjwEdRBLuxqXDUFsQaY5bR54gPfGDo8sTw6X",
  "key43": "xtBnmTs4VD5Bx6yFSkB31mx5PcLcBCmgaEN8LYyrafamqzFuawSmf2fJi4gyFobq9D1dpGTNyF4dfp8Pa8HM39z",
  "key44": "FaUqewbmm32cwT2PeE9CmVsTLrCfeqQpe3GCiQymjYi484wXhtmk2vVXJZR8qzoAQv3C6ECsz7oHFxGwEWaqvUD"
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
