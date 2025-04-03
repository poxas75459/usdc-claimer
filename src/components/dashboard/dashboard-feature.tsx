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
    "3smNbFFEoTrWc4mBJs6BnzsC9BDZ5VQncT3xwTcyRwsMAFpMuSgMhCWVFuFMCeMVPjr9H7X2D9XqrnpzLuqPJX5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZ7Sbh1SKPv9YW19Mk5yV5qgduya5MdLqm93aLQhhLLUX8MKjWfTASBjPCkyJo97fAXKmqPAApwLEPskX78yuHz",
  "key1": "3FCpq95jrTotpTnGq621tdjNLDhSfP5DQKcx4ud55yM7xsGNmfLQSUhLzCzDEEgqHNJdo1h4b5kud8sekwKinLcv",
  "key2": "51KcMLt8CxBGMxrx7LtRjFcBhjTwA92apNK4majqGdpLtunzunYjVqqmDiKuyQ8dXmLc4KEYbapTJCSKYepiiDrH",
  "key3": "53odHi5uCCER7DS8dkGnLbK3M2zHp68vfWJ1Fi6sUE5YrfFgxEgJFr7Bup2T4ez5q7VvMtbHL3TuPCbpfFWLZLAr",
  "key4": "3xLNnjAsxBvTWVsAwRzrRNtZuiNMDBB3vL9EE12kW9xaEAvVY5KZiCwcBxrAKLjUn4sRZbp4w5eDjqAVr58tXvtt",
  "key5": "5Xtdanu7nX8nUMFmuAbrHyonkMiuhYJdNZEJeyrVjtkfSdeAhR3reJtQSkt5iktSZRLKmJpbp7ZtokFbeaW1WhX8",
  "key6": "4w6XLT3n2CvYY6uTDHbBLdDw9GYCnoLREhWdkc12LZ58z7pi5ZL4YBXtwhRC3HvoFayoeg9ynpY7pqs7oZkgbCei",
  "key7": "2TJ7rfAzzpL6U67oH3jCtmb3BjF2QMs1W7vjZjzpq5Duvu96BTeA9HcmppiuNuBW8NuNK43i7CvAs6Dgn7zXmMf1",
  "key8": "4e9G9sw8DHrMmjDrzDscc1VnpT5B48ypLJCuUNccTFhEtwadHkWR4ZbVhXHr9hUsDVZueHxtJWXkfT7XddDCRiU6",
  "key9": "5n9itz116rioLMQjZx9EgKPazpGhhMsKNemC19pTJw1diXG5ZJRmnuWyrTuBgD3D3xJWQj2iZeB46DPkbvd16JLG",
  "key10": "672zAxcWrecFqj8S4cJtWmhTyfB2jkMLQbZqxouxDWycwhoEWDQY7eWDKpPiZQzDvshvAHvuVKePRqcxeb33iRZQ",
  "key11": "3zZqxPAi3dr73Jn1WmYY5j9izjjo7nfBcTmRyT7rH1tCiJKxQMieSvQZACvQHYyjX4nYqacQ56L7ub87o4A6eyCS",
  "key12": "3yHteYN9KTTtGK3A3BhHWhVAVF19xLYNfz2avEAeJHdcxxYMrZtnDcZpWyzL3v4FACTPw9JTuH9MwvrFrDapPYpx",
  "key13": "2QANTvz213D4dxQTVLBig898pNG639fZ6BVdTQKZ8t2r7fsKNW4sqBFkRPanspJGt4HTgtDPNRG4P6cbdnwzPr1P",
  "key14": "3og8zdWRQYMcdj5Xheovc6S5JwBN24jQ1bFgL9hG1ihAK9XuhL1H6LTq81Z5UhE4BahcASYqBp6FWtmxXKMnidB7",
  "key15": "3M1QKo9iD4eJtEFZCdbUJrBpXeq5k4zrayqzgYkzHjbm1A4Lxz49xdgqQE3H8j51r1tYegSxHjb7CRqx6jZUcQFC",
  "key16": "5a1S9Y9oZe3YSProvEeWopib9kV9jqbJzJmmN1bSLFstKaN7xS3CVr3mcmTiB2TaEqec4yUAeySifow61RKT8q64",
  "key17": "338uVCysf7UpKYNg46BvabfZd9xqL2J4xkCyT4yCF8LyneNo3aSw2a8iAaASji5Eta8hnFtc1ZxUDoMg7Q8NmZRs",
  "key18": "3zUjZQ4MaYGVMHvzrvrDQy2wLN4FSrFGfXx1Txdheh8vG8ZHjCX7svnqLYunz7vXbdoyJn5LiTvUAsa2DCxry5JQ",
  "key19": "2DeH1SXQCmpKGjYb4H5jEYmNnr1nXWe54tBXyUgSGMGHpmCe71bqeZToH4WDixwtbBb6JYpDZHSagpWazX3RLSCE",
  "key20": "3j4BxLFb19bvUa1rYLZzMxWziCkRwoh5AQWarmXo6qoPCuL2CP5Q8z24RtgVfoBv5onvcEDs4NZM9cTugxqjHDvC",
  "key21": "35oxYZCChoMZxubt5EsvXmaMReVhnbbEBLS4DtjEVehXD5Fr5yV8cqvZoiX1PdabBNisdFnMJMcDnzjgraoUyb4j",
  "key22": "3jo73QVv9MpFktPN2C3uXak1aCNf35W3t7U8CCxmcTejU7o7ZBYxArGsajPZsX9bF4JA6e3wqJ5c5dVybhGqVYSF",
  "key23": "21dCGNMU8EYnWDQ1P1As5YqDqtSqzehTzHx95sZRRDxCs1sokupLuFY9PeYKZmg57THKTHi12wregstjUXb58gKK",
  "key24": "5emirxYtrk7Nz3WSuoLqHk44zza6s8cuMGqKvXakcJfHNzH2Vqn3PEzhjwQFgzY2PG24MgoS4QUkphs1aBRptvSM",
  "key25": "2Td77wtJUMGnufPKUy8K1UE6RYKjy5aQG5YDNrhkD5TjDxQCPEtv9aZXthTJMRKgBHvNNAZJR3noRT5PvRtLQJ6y",
  "key26": "1oey5atEuAL1Njidm9mGyW4pwyDJxzJHMa7fcc4rwi1GcJJPRAaHzsvjaoPT79maJdwPmgi741fMg1tzn1TbDad",
  "key27": "4PRetFHptK12ij1gCM7CCY9n3U5x8PdsCbB433J5UvVGATeRiCFtkbJnvXL4CpPmpPKTFagf3sUXRtTYgjmF9PY3",
  "key28": "3BJ1F2HUYe2cajiGENWguHmPUq8ZBYHa6xfbKDYMwH4uAZ1aqNuoUdo3jzjucmWN4FH3aieyJ2jS9VGQeGP4GHKF",
  "key29": "5GB26NzEvQRk8TSDhqk8JLdCg5E9uNjPAUUfyP7dwPLNEeHNw7FdA3ByupAuJdMusy2DCqrhdk49HAJCRKgNQLRs",
  "key30": "41djtdeehJYPBuRoa1ySkiv5heZTii7VD28dXSNX38GxfzjjypnwRRich2hD9sR66JrMenwq1Wh1kKKTsGs5EuS9",
  "key31": "52pdgQMXP8TkVds1BQrssARk9v83C6xBn9wiafTrevYPYwNY27Cvyqd5ZTpjjSnGtuVoqZoXH3AHX7cA9gK7kyoA",
  "key32": "Tz8JRSsiDHKXKPAiX6ndyKP7dSDBgynxcJc9MqtsiiBpEpVkaebgyu38HALo1qpvuDDmfwpDThhuXCVWU6zWTgN",
  "key33": "5sDUGhydGEstrTNYTMnxhvyg9WX7Yj6MtwajDXXJHQjXT8VwqtDsSmvpVoJ89i4Sw6hdEcL6qZU6HxPE2fY2NdyP",
  "key34": "FKonKasbKDEtxp8DaVdqmb3VxofWFqP6B4pSXw9SCuLygwPJwHCjLbGAHQywQrq9LAq5v4ov1gNitfUi3Jgr84p"
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
