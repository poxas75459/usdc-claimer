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
    "38pv8HXyamVjPAF6A4Rk6g9Xwz5JEGxJSpbmnWxnm6QLsU2uEsjXFszzXu5zVac6Q7piELj958EaNx3f7uHDZ3wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XG4s1TZZhJsJrL26LbCiPuWuHYesh9PcKDvVgt5CW4KDeazbxAc6881wx7fqnqbDPhF5oa5aybigvAtYzYM72ks",
  "key1": "5iwWT5n88rY2kJFxDuZZPeyMf2QvgN8FpTR46nzELJLVKs3vcijDf4jomm1QoeJyREvwGytxTJxFjp8wDsDH6zbt",
  "key2": "253HmFe9k7bMUoSEZfFgWbNXGVUr3HpScvfnbW9PgkUgWoXZaqKz3fstjBhibSmw2s2tMuBDCoc8PrpYrMMErrvU",
  "key3": "5gpL93dQKebo8kt3jYmPMLHeBBnFRS7tZZQS6MrtuUr86TX6JnRpmKynvWY9PbH7euUSbxJDTmV4LmUWaNQwgygg",
  "key4": "nYs277kKm6rhyg8EAR6dRPY45bLjovTUBMPF5VVbXHp891uoNmNfaNfVvmBjt78qNqiXVy9Kb4KiSYUD3jPpPpQ",
  "key5": "2aXkHwFwQixQF7H84zhf4d8awFrLyLSprUSHJFoFWFyXsER1hErQnSV2ertDBm4xv9xaoh9FepWnrbeEAzMTywux",
  "key6": "54grM8qCn7GPpXhwRMMwA3ENKMKBnBcYzUgLxxj81tS7JKEzjdzdKgb4G9w1s9BiRE8jLPKVaJRTTfqZUCCAy6Zz",
  "key7": "3ize5ahdH8mhtfum3hS6PSqNtujWKGSiZ5fCbTmAWJzC5ZQy3Ek79DSLK9woZDTpkRAPzcXZmPtrpC25mqNPYeoZ",
  "key8": "w7XMLYGxos7VRhRtLhs7Mg1N3LWBvaVaB3EgrPMMuLzc1MprQdwY4C5LpAXK9MDUeVyaPyv4Z1JAKAPT1Si18EZ",
  "key9": "66n3tw1gizmNxohqNqKqmE2ortgpg5DxVYB2zpgxdCpcRstY2CxUT2pkMHYCf8T4A17DfR89vpJpjYetjshgsCL9",
  "key10": "42tYbcKmaBNMJUxGwDjRS1C2QJ1e3JAsMPCGUrtL1hnQ5bibNC5VoQ3FtmLALGzfMdie9Hh7EGdEFco9XVsdwwey",
  "key11": "5Pj5dfqGDkcm6rmamium7U33P27DB5XMqJMjwhHFKXhvMAGodNtUeg5s9bRiifB6W1MpUJyFyaXtCmWQADXL6aGV",
  "key12": "2crKGfDRPpZMibv1reoqQTKred5o16KbFMQ7x9DkfTdSTstZPMknoYAfu6DLaDNjisxFyovBJ1o4QDGHq1tS4XDr",
  "key13": "2mDqbR2v8WmbgDKbfjpHNvtdmuWZKqdJcSRguCMDwGkedPKwa7fhpsmX3Uaxiw8vfkjraZyrqNQnnuwT3DWHkEM7",
  "key14": "3SjRoDCWe4jbtm4JL3K8DBCxZFdEGXVpGH8C4kBmBazhEW6Aq9tDQd2hKU9ECJiUtGWfvNMmhZTYhK75jesQkPw3",
  "key15": "36UNq956nn6vYXu2jne7CGzkczbdwogTQYeRYjceXAsRACNTijztCq5Rbj6NmkaeuQGMDTnmmCyR7AeNpvAeaJNw",
  "key16": "pApeXeqTcDb81zXhLKNeJJUow6sVhQQB2Pw39RRcxHrrGhJk9hCYBD8hg4AT9GKzJoknVP5yGi4WTiPNkzPbhbR",
  "key17": "ir8AyNHYyMEXZfwf5MtHEj2dtnQ4CNBH6kX8CMGUrFpoCpxrQDYnypET7jyB4rSpqDNkU2QZEjKF1wPDAqumxwp",
  "key18": "65fyU7aAgtBGuNXbu9hBAo5KrNkYtD4erzD8sXzmEZv7MjBxNQyMuYs1SnT16rhCTr7xXLp3PfVR2J6VdRQsdJf5",
  "key19": "3sAuqq3SxxoLyeSmeWoRDGM1887GpKqZoHJMverk7Cxz8VCeY4BK6ARbsyidAHUf79yBgZgQaMQn84g9D3Dj55a6",
  "key20": "31bQDwx5fbFbe1XB6ErtGm83yBCnKetvgji5oNrgQETpFnkYdbWiwZToMedZjw4NxGPiqqFVhQ3ekCcERWimvELo",
  "key21": "4x69eBGqArhUKoTUbRJAPkmCTdksXAkELZqfTBDGTCXRFYRmfVaGzCuC1dy7byNxnpp1mjHEvUTm7dFoXEYW4ZQE",
  "key22": "5wKoUcgcSWM1nu6cG5upunm9FHqwTowSbnkt8W6J8DDqAaRpL1mJXLyFz2DdD9WjaXyTpZhogkjkav4r5gRcfckE",
  "key23": "4AZ3PbRJj5Uz4f7pdTUWN5mw8ZEgKFCRvTHDyRNErse7AsMY59cZHnFZaekj8F6RHiPhaR7dRt8LU6tv4Cdkrfwg",
  "key24": "3Bkt9zNcXjtan9EkicGQgZdLRbp87F1rwQcs9bmMxwLE3TcXsnHetubkR9ogmrji99tvS6cMRTY1v9beiZZiASJ2",
  "key25": "ZvYErwje2mj3E6XXhD3BZaz8ZMuq1PMK6TGREX1Tf5mgCx9jQRwovdCMDZBdCgKS6ndR6wyTDWJemy27JNKx8ES",
  "key26": "3FHwwrDZZjTjkeTvHETbZxMqeRWi1xsZZpsT58wCQtN1vTGPgUqTrTrTMqNTLg3Hi5SzkM5MwyZi6NVPs1obJwLH",
  "key27": "2L6PgXHcg8VcTaKN1p76xcohwkwMg7133CCBzYP8iktHLXy6AH4Y5cg4ZTwFUWbt28aeYD2kTyco8BfgiYNcZNCe",
  "key28": "5PknrdwUimD6tTBFttCyLESEx15wgYAYYorc174yMkFd7JeMvjm2A5NWwB3JUade3huY7urPwvWFvNi7EHeJfdo4",
  "key29": "4UicT9WrzueWAFbjB8R4Uhu1HnuJ6KyExssLjWXasJ12RXnNfVVGHdftPXE7KfPKd2cxyFHQGzmVofCjLx3xP999",
  "key30": "2nYpp3vydLJJTJBLrAmpWG43Lwbuaz1D2MqQH8YEzpvQKG8Y83XjvVHbYzQhskqu6RhZQY7jTk8dxbnjenN5nzqc",
  "key31": "4VVJBFmc9EUi2tseJoQN1dd5UpcLjHZScLQbpqQjr3JSc25hAMBBWivDSbc4kb9RrWf1Tm78T4wWAnqrAD8koA42",
  "key32": "5eFR395wPsNYFCz5TAn8pZCNnzBPfdHYYn5i9JJtzWXvfMdJC6kT2LndwqHYJjL9tbwYtd2eAGjysJcsvc6K7VB8",
  "key33": "4ojqndpc38RBTYDVU7qduf83nZxeR4u7XeNDFwVFrPxMyLjueEnRQuw44XnDPf3TWRjbbQHSk756CxRnrVuvVRFZ",
  "key34": "ntvAVv6PDBe4actanpgnixiU8GuYyV6zNeXt6qeFeUHAJb5XhvHmmudavGHw4eHfBzq8tTPMGee7vfpWteDk4SC",
  "key35": "3udnWX8qkvwuFvSkjsKBZtZv5byVRXYEcnYSKu5VpCvB536Ysxx5tMc2G73C5vQfv5JpXdJYXTgjuAdLEQ8XJR5h",
  "key36": "Ni2iYHEWAbMHqgYqfYV9wXYepyVXtzuKL8dsU6pkME7hSWzRCmo9q6QXLzhaW4p8wL6Bm4xkRFYYJfTi9qSCTxd",
  "key37": "4oJEj2SBqXSFv4MuN7S96aU3zN7nnF2w5Joojqwidx5pfm1sj41ioadX9y3S9YAZ7DoEMPgyRdjUjHTWjZU5DqaK",
  "key38": "3SyVoMGpXoz4DyAomQGeZy93Wqkq8JksFVnrooCLUxBNG7e441tWmevFRWbCXeB8grehowBcxhH6dh24MevMYYWe",
  "key39": "5cnwGCZLzjKYGx1Kjzi98wMhYy8c46Wyu3vd7WQDg9cdnZxnGt52Me5HsGHWReaL3umY5LMaMcmzgAMnrMxs3sTn",
  "key40": "3UmaRLNTXJHfh2Nf6EEmPCXFaaRbDSPYSSVZpQG8xznyCzEtxPkRbnojRpaFBdyBGUrJaXaqg1BjKazxjwbBytLs",
  "key41": "2crBYHXVh1QMV68U8X8JTwyPhyFmvcN15vVPfqCetpmoUZa8bktmfT4KAP61g1nc1rXB7TzHNv7cQ8pbESHhEKKR",
  "key42": "5Xxf6j6CzvNBcKWHx8sT7rqJMT2ZirJbXNvvSqEntpmNJWYbQ13BZQwJZhVTPy7ajzU1tAT2PDac5aeZVj38Rm5P"
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
