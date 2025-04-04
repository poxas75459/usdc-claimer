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
    "32HXc6MuL5Vv38R9qEMR3CB8wvamtpwf1KZXMUspaMeYaRbBjepTFGekcKWMaG4x8PafgH5LBCbQNoBiseboP7on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgfCh64LgfHT8z1UjLmRf3JY8F5LYB7rYdriyXeLgQUHu9N69PTLzDc6foZctyUFxgy1jJQu1RoNfn6EwYuhag1",
  "key1": "3gUQSmb1y1VfqAF5xcRJPKs81gGrKrSrFzdKGT6YVbcUkskRTfuYBkzyp3Df149jZQaQuJo3jqtC2LyaZgL3XBvb",
  "key2": "3YvHqZKt8mwMwCAaaYMxnCUcCCW5oc1kPGqhMsz9sLHVNMLEPKVEhedRkqTevGGmfAPQfoxJ3FjZ34pTBAEwhLG",
  "key3": "4vzXJhTwMtmRijNPHjxQmB2MtZ4Sfk9bwHBWU1GXepxy4rHkWGuwcxHxBjQpT9sLntHbM5aqzsWsppnL5bGwHrQc",
  "key4": "7UP3DzZ7q9oxdydmJRRUbsoY8LUzt7seZiWgKCpYbe4AujggfzNoQ2xBCBnxAgMi5BNHGrBCUSxNGSYxR3V786w",
  "key5": "2rv2MXGSDZS8LfqgjoApbbVvHWnpzwxxKLqCSWqenutuzEnjHEFKwzv1Xohp3sXujVGejmoyGJ4X3M1uxx8TZWCK",
  "key6": "91ZuHQkga4voyYQKJ3vbfrEewYt6pkt2mwWxSuWvpD7nXPeYyZ5oXnuvHtuyLchJiUSZvV1x6zv8iW7n13MpzN2",
  "key7": "4dkX7EjAopWkNCSZLQKVLE2Vfu9HbKGVAm56Yga2rvgPNsuaYy8oZZPFSfHKcrTBE9PBabN4ZnGkuQjHBAoUzjhW",
  "key8": "2hU5xU1u6fMC5Lj5VgoeJNNVgeq8ac6PnCDnWDwEpE5VHX3nQAvYVrioNB9vQEg4VdjN21o8h2mUMrYWgawX3u9s",
  "key9": "3PF3w1BsXCzmZSqehq3HYTRHQjpyZRcwzkVFcnLu9f8YSxcNG4JTSqpcJAqybFcoy6wG6MWCNwqdNuCh6Ygp8P34",
  "key10": "3jct5znYN96mKYnpBsqu6s17kQK7TGoEF5o6C6soLCyn7KbWr1RvhY83tRfTp4ksFNZv3G9wmFP5mA33KRX3tjvf",
  "key11": "3qfACk5VHwWaMKDczHegxRz3Zp1p7smsHNgBgavq1DQUTwTNNEJaDBdF3Famppzu27G8LmrrEVNLXgh7MBBTyHKs",
  "key12": "5AFpN4zonF2wZFCGSHeZRXT2Dum676uZd9Td1rCRSSq4e2rCuZfhfnpnnNbExqmNaRQcUD7fpi2bPpVZSN4LKB16",
  "key13": "5ZfC6QeTGzG4nH9FQemDMn7VFv1CfriznnXmPFXxNFm4sqHbegbf2moFfpFP68gKuMHfUqutJ11ascxtPhr4tV4R",
  "key14": "3LLhnSk6JaMLjLvUXnSMtTr9kULWD8secsByZFPoCxZVCNCWn7ey8VZV9VzrdxfAHmsUN8B7XG5ngkd3Mwb8fL1q",
  "key15": "2xbRHV7DTiCTbNkukaBCZN4wWh6coBe5kMGe9tKZTCqp1JMBNVthNCU4m5kMWPZBsx32xTux7Le7B4TaoLCr7tP7",
  "key16": "4c3S85gVqcZn1QPvvv1a3KSiC6oYuXr8Ji1xwuF2XrEGgNZgTt76DUe27EggLkNJoCgLFw3SscwvejSp2XEMS3FK",
  "key17": "53ZPfgTVAgCPVoFDQaGqQsVry26o1CfkikxVxCj6PzLsNjYnSRrquMaigaW2qu1di8aJzWSjb7c6sGW456NoCyFX",
  "key18": "4HrQHujR1QpqDwb8qbE3jDnu4XPnFyHTvjLHRX35SHhg53dca8fbT9a6DVUMyy7A4pNuguWEtq4NC8g1ntwDbVg9",
  "key19": "3NQWJiuHYrmRGyfkvaKcQ21HTKCinsgD1JNYagfk9b8sLva7KsrEL7YCNE65osSpLmZMzfvpjLifvnmUuyknvUx8",
  "key20": "2LP8tfjcaVkQtFiAXgPnkd2bQebzJqz2dF7F7y2akdy7Mtt7SMe9kN6TPzyohQXP49teuJHT7aajjcBXUxqirEoc",
  "key21": "5egnrnT4gPnEv9k6gG74efSFpxv5XCdazb99s2pApGDPiTfiikXCxipJffiwBAgrPNnjN3W2a8Wnoo2WtXeBfrQ4",
  "key22": "63yxmrebFABdmLB2ahocdYQXjW4XAoizTy9D3b1rddLmtuCLsdSVNXT1XeJUWF6Vs8K2oPrv1LEqkkWHUPs2NFPx",
  "key23": "3kzNPbT2sdnsv97aSbT1HLdwCAkKJzohcLBMpwLZozRfTJYpBf7F1wtZHHpAKcyEDkffd7ayn8fHQp4yKA1TCkGb",
  "key24": "4khrhtRKXij741WuiAorSBngUBMhEGPwuG7bLJ1em7sRaTSDe5To2VG4EPMwKvSYwJVgDx2dCi2vVZLtt5A7f7Ca",
  "key25": "4hxpE4MYQncd1uozYNoLtUbRukyLWz2u1t4ayPogwRdqKMdLAQ4S6VxJfAeZpzjZAfoqL8SqKvRgfGkW4yFM9LBm",
  "key26": "5MZQRUvbix2BhijccwqkGFEKsgF4CvTaxq9hpm9zmWYLkKX2pTKabg3XxrdqNFzmL1yuHXXiqfk5TopE1gS3b4Gy",
  "key27": "4mTosFwiSDbaGSEigpYnjxZEXXjXAxfBSbwvny8HrEFSU94iwiHgUdZcUWbqmwXpCQhaVAvikTE4qKE68jbUqt2F",
  "key28": "43ZiYtq5SqEUerPcLNNaCapL8KsGpXKpXeZtt8dSGLLTUhe21cNWXB53zVjqTZMw8aHB5nHTNwKoB7UqAjwKjh3E",
  "key29": "oSicRqJntpg4JvNoGZcMpRCK6HRLAuUpYzSPB2xV227yQCEYr7ZzeP5RB4tpZs4kpEyTGK7qQLzV1nNiAextoU8",
  "key30": "UnMWHkxkU2jgk6TsxUY6GnALC5zPKPNWMHSF6gLcE3Cyvn7i5mUZatxL1ow9KQqhEzD22drZmCiZ9LVhQwCJNwo",
  "key31": "44LNj3ecaXyLfu6oqnYG7dKVeK1rfZedMWzTWC11uNNigHjufx5vFeEJvJfEBbp1tCHheJZjztbogaVL9koYuSNa",
  "key32": "3efbfLy4Go8XE7yG2yUmGcn8y9zUPsgc41LeDytHPaHTxUEm9T6mby3EaXjXwP7X8Vzxsq2foj5aijpq2b3zxuzP",
  "key33": "2mXXDbe53Y8Wy9DVdRE5m9SB3QcCr17cYhU8SHAztDe8RsmUJCjggnXfr1RQvefzcZXHh8ehyWATqoC4JYCBk2XD",
  "key34": "2Kz1TffPq6SKQV7wen3tVAtBZBjupNvhC49TgU1mc3rHR2DVeTteYeeYFcB7AfQaPYUrs6sDT2suzXHQSGsKyseP",
  "key35": "6YCTD433RuNUcTvvi9gSmsvTvyU8xJQyoMkdTTB4i75TB9mPiy7LQLnGebA5uM5rN5BAjaRkrcStmFK9joPnRNx",
  "key36": "66kdoxsoKtBUwgRsoUweK2FFw7mV4TyHZW9QnwibHB38auYExVAxmheE8AXtsYGqnAsJWfK3Hgv2MRWHvLTdhj3M",
  "key37": "BYukWv3foDMGwKfQPegkafvh3KSDvphijiCBGCGZWR5h35ALvnJCEhVAubaF3EQcRNLo1MfRrTcpDt9EtcTK8H3",
  "key38": "5mvYgnr4bVczEHUBCTRbDVi5iusnjDR4ySuUTFWErJWHtQHpXRkbqEmfhZSVN8jNWqLKvQ8MDtxopw7JdNkkDxAR",
  "key39": "121oGYNwVmkcRySxdjhm8w7R3D5m567cNvR29PK3UNSpJGArYr5THf6DFYYNZXeFQ1s2xAjWw6PHid5zWdh3SR38",
  "key40": "4HJet9nKbPWU3anCoQKJQKVfLxZFV1sE2fQvqVwbbAX9FTm2jYst3zWX7xGTzHWaE29fzbfJRFYFNMfHuELefw2e",
  "key41": "2LY9G2fBemKSLyAWYZtNKyJihAdHCATpYkjapPZwfYm6UcYFiBn9zSEKzhT7ykvnYiHunhKxxmCLvn5mKpnUuLm7"
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
