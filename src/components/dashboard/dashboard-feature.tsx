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
    "2cAbyqbgiAFFBhjhFWjkbgvJH8np4WdQhDkCRJi3fkKCu68rPUEugRX1d2Z35MikZfVgPuM5JRmnNabmYmvugBdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8EZShfBbY2CS9ENJeAxyqT4J56pRwM1usxJS5hnWorA3oii5WUtGc4SVoyYoQgihMRA39P9QkwRCds6NdVHo1K",
  "key1": "61yCwamWmfi9wzsK8rJ4yiPTrryQ2d1tchHHetTTXTvctysdWDWku9KwfcCHFS6HQeQ7S6hTPHaPfbQUKKjsYbcs",
  "key2": "2hYsLr4usCDSVbdwtLsYtChjnqffEoLkC1CAsJzaMpkRbFuLmMot1eFBXpFzSnfz1MYmdq17X3LiQPygmvJRvnJ6",
  "key3": "SzQx16d1L4H9XaVBnELQXPG6aYaTs6rvneKuAf23aeKWA7H2LqmAKhvDVM4BFkHWqkPAr3WMEbf4U6joyP9DwFP",
  "key4": "26GPQWsiEMUk26ejo4VVpTXTXUHnoShWwNjmjHZsU5yHYkc6yos1zXa28PSezHsfPMwbAcQ4if8CdbZGCoseYAjj",
  "key5": "3F6swyHX9AwCvtzcnzcV6Lhpe7BTnmGff5EiKSozn3XReAMQRzgsvc6ckEz1YEHGfGvxEc9VrnmmqkbthMdKTRo4",
  "key6": "43f7MYtrQE9PVZxQVJ9TZgQwEexjwCTkV9Zsz5BRAKQ3huLC5c4GsxjxqLap7WKiwrQCBpH24tAYEmDaZS57EXvD",
  "key7": "4n1b2YjF2FdfHs5Skj2f4rjr6zr7aydbQLoV3G3XthHf9rLJ63wLENZw6NZ8qMS2kWr2ZWsAJ5vWJKYVgKudXz57",
  "key8": "5RNirW6wD5PrP7p5DkBbQVXiwsHDy2doowKnL4UxKKZ8t2BN4LpxZWcDX6b7EAaaeAdDju8MUCunbbvjC1qXwWhp",
  "key9": "5LHvyapKMsTYyiigqQbsMevmG7mq6EvAwk5Kpm1ZiNpkB87oS3pxZZg2jC1oPfhhktpR2e4TvhfsXF8tJSfJtZcP",
  "key10": "5QKNbkY4x85RQ47Gy88g8Kv9yjCaYgSKATuEfw5kaxSm6tGGNpG7bkLU4VE622Hr2rgTkQAcd85YMQFxbsHLH82u",
  "key11": "4jPB722ewZKyMxHuTS6VCRgLdYaKNTqooTHJAhzZEPWnQ2B8Dzishiw7YrkazsjWEm2TxxhNgGiC4dcm9T9w5p1Y",
  "key12": "5QmeafvhScboUjbc7wGfEtBEwdiBp1sBU99QcxuhTVnDrAU82RwZ9pJfC8oVxafQSiyPhydDMJESAdFEoUT86WG5",
  "key13": "2T7PhmPoD9i1YeyJyf7XKhPKBd7njTeoW8B36QKxJjJvy3j8cPBzfaiJFHQV9YDzCP9nenzVpJ7SdcovgnYog4eh",
  "key14": "5D4UeGaFVkpyKjyFsK2YuyW1NPCGpc1hEJQaQk9JYCHauZuWiCU76uHZxBgTFo3BN5h1aHQpEnMk89ch9ri16gQ2",
  "key15": "5vvBe7N7e3zLBrUEr67K9bj6metNQTRa6ETGKEtyiTmYyi3WNjWSAMMGWesCtcaXtDgNdwFGNF9exBeHhGry5A65",
  "key16": "BftppDUtpYtfE2oueoSjWqtL4eNewNmEyHoGpTnmhRex8DBkqtYH4vhyUuXDaCgjarrpQRvBbGxBb15LzcGVjFK",
  "key17": "2R28ayQG1etXj1DeMqePBHDNPZg93zyaVvJz1hmZcQTVZw1QhvFqVMbeEiEZQ6NkH4iuZnjQsMASF7JTYvP5ZtEy",
  "key18": "2J4oUsEzknmfLr2PQxqkP2bLTaCvKSGwbJmiYoXCvQY8TsYSkn5c3cVKuMutL3NQpoXE6APbngUiShiWzcifzoWc",
  "key19": "2Ksiwsccndo5RKQx6S6rVGBisyA6hSosB6DDfzBdmYVQEMrKLP8ps5NrHjkPQkJPfEeVNCM9xbz778A6DsB2C6wQ",
  "key20": "3jSAX9mK7xv6QXvXyQpjpqCZBumAVbruph96qardpYVKiERnfL11HPfWoHykTqVCDad1pJPhx7KipFum9WDbwyiS",
  "key21": "4Fov9ZcKqM354YKHA2eCRtnERkEs81jXAMMthw9dhuRYc7w62YFZANmm9oed46HDvkaWenaV2H1tUUQfiaVBsmMj",
  "key22": "62UL47gN45aaZBS7auLWCHEYgKXN5yVMr14TezeCvcFsg6QwAxfvB4gx46RhiEE5ohg7vetKfUVi2HBCCioYPtf9",
  "key23": "3xXmjG7KUJu1Ls5dedUMYW2TWqtn6usYuCtj1psHjF8cbUCHwo2HoGKeJzAJTwfc6pzpLNfhrjqVf4TRnTBbNrGn",
  "key24": "2CYBMtJ984QBdd7Leeiuz4G73qvRrDxeFoUjUbuBfRNFSQPZKo3J9DFPsZbZgeFi3pKBqwbpQJC68VRnfaPnFxd8",
  "key25": "2PdeH6VB8KA38jwb3Z34fUATipoN5jXeXnMoHTgFTS2d3bhKqPs2R9519XTrK929L1VoZ9rSyw88KfeVWmzDSzXX",
  "key26": "3HXDsjPi23q4L2eWjtj7uAK78msXhfJRPbAsFUVwoauzSBAWQ7HficmcHHhpuzSUXBjR1S3TdJLdcQhRVuPR8zdr",
  "key27": "2tbBTSUU6DjX1YPMDgtmqVs7LU4rNPbNtA4BDLmhfScuBJn3HdWAUy8ni3QCWjqAyFeY1VpS6VRcRnYUKxDXoCMW",
  "key28": "27KcXikH7LqCGSzCzxPpQHFW2P4YCi8Z9kjwTGFXytZQCiwHvnZGWVwyRdm2V91qN6mmdzcXHm9caWJ3m2DYFpWr",
  "key29": "SM53JWLxhbcfHWm3TY5xKxx9JTmK2o2WPvzDZiCQQUahBfT7DQ4mMaf2AoSRRBKdK4ykFRAR51XbWGUiwESuGxX",
  "key30": "5UJSqpqDRuH214dauDANm8xujEZA72Ha9do6HWjTVUT3HU5QC3qeCjcXCMvEqq9kVLGmLhRKXjEGEEWtZRkzNauQ",
  "key31": "37gC4UPkCH8amzAHLR3LUdAUj8jTm9WJnwhuNQSBVz74RKdSAmkxv9CRbdHMXMU4iY28cwy3FvzwTHxPi9JgZM9A",
  "key32": "5MPBJsEeqU3YcQpxVacWHKKP9qEbhuM8oC3ad5onexdCEWthJBb29JLSjjStDPmX4vupc1gw1hHM77CodVdLGc3D",
  "key33": "8CaDdqCnKtnMjvYspnWGmU3zTcwGoM6LvGNAXY8V4wkK5H8q7ULA6vhTWdE81Cq98B4C6Rj8RJPbvJXp4ai8vxM",
  "key34": "3rd5FjRfna4bqzxm6QLnTBoxCrZJvT8ASFYzip6kaxanwr4U2zm9jbrDbWEKwv5ejF16MBTzdN3hT5ukBNGiwtzW",
  "key35": "2a4gfsEUY59aJevT6MSNeCJ6u5RsDbtUTfwqtK1qcUoqSPxEJezxHgHdMq9HHt95qfd81gRvwjYMoXQBmvzUZ5Va",
  "key36": "4t3HcThpG1gXn4YFPxjJqF7dapypAjWeFLodthjqToAGiwpLHYuX1eYWLAMVBZzuyWVgawdk88VJP8m83hGNJztc",
  "key37": "2gA7KwwRYjW49jcehKqAb6Hm6BGxoaxe3t4NKp3YTznJtep4vVvjBRgZUpHuJ2LTJSbCfYqBoizai11CfnM76bps",
  "key38": "3xBjgPxWTH19gdddmXu3kLR1KWeyYTiNnuiZthAYwvowZHWDfaew4YBHi4M1hT4m8hSikdHgyS78nRSEgFFRKNzr",
  "key39": "5s997ANgt6q3qfuxJZrBB4F6CcAg8DEc3HJaToQKmvast8dtx9Y4WkgrSzPoZFbvTrWD89DsMtE2txqpxWA1Pbjz",
  "key40": "4ufkNE8NBXaBYagDuK1hFtWMLLx5toCbhLt8Ase5yzohS2qS9uk559zfeGkqWH7Jq7ibKbcutpUXD7RPeRD8mpoQ",
  "key41": "4mhpX8Z4AsgF4uSZMaxTQNLbgFxLwxkuNq4DWZhcDsaG4SFmnaE6dD2o2RpMQqS1CnWKY4HZN8LNDSR2tLZRUrNo",
  "key42": "3PeZkqVnBauCjbNruSAPD9EA4UTJ3LcYCxLVsdry8E9FjyaPkpGX78auNZQowUd5fxyRE4URMcncpMNtjiLyTgiu"
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
