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
    "3PXu8xubJVxFxp4i6bbHWvamBcAew8PgmhgKsveUk9j9v9tJ14Py8GEswXiFYi2Sk1ykwgLanQiBayG5KkwzrqmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZXMaQtSjZBNXRWCkLv5agPEEgciigzEAK29xiue9jBDx9XqtsJQSXDLxDYw8wWSByCgLgFFrruUdfgobuVF3G2y",
  "key1": "4KxwQAbT8v6geqahy7SGcp4HoRzbdoG9co7GWmWQrAT8c4LLqMYhNVymVpQR8vggP6vyzSJwE15416qHUpo1BUdT",
  "key2": "5pe72DLWkTXX87Rpo4jBVr1spkh5vsFED6LvpQLheMwvp6cYzx6WszYNcW5pz79q3wm3KYr5cXkh3nZVAipLbtAi",
  "key3": "2PiJ9tJHhJTJhScQ6c1NqyXF3DhJRVRNYzY8jVPE72GGzXujT8s7eJ2QkgaPshos8HTTgigqdUsbnYWNKnDemotM",
  "key4": "4hH8NGcw33sjRCG1dJRLYxsWUvXcCMUgviWYYiv3kamhPWh1r1zzratJ65Na5EvkJ489j9pLcsin1HEadj5PgFvh",
  "key5": "2VYvZTE2BD2v6tjFGsgSSPeFiaQGTecHjmsESeyXKFu3A3bRU31sT55DMXMShnqT31y6cev2MqDm5ifjv6pEZoEw",
  "key6": "5egwE9zpLXauoDFvKnG2KKoCkomduEdBPYkhP3xCKRVGHFPZxethvbuk4hGsxmF22wPYscL9KyErtwzxEQie3q43",
  "key7": "5wGVEoN6hfmTt5Ed5YYPDYVustJH4WBvyeRB14JPA1wLrqwvhHuKLCEkpxX1nmnU5yYQWLw5Vcm2JsHh9JcjjACG",
  "key8": "3MVedqwkq2aaW66NgTBeysfJ4jN1kXFMu7Gvf6u5EZFiZDM7wZpzmYvrgGFvfkCyvvbZQvfc7KzfqUTJKXFbCwW7",
  "key9": "2mHT9853B34B3jWdfdt7Gr9oS2un6hmuKAP83tSdzJoaiHEC3dFZBYkZn4gMGtQ11t8m7p54BwiffaSVs4N4dadz",
  "key10": "3Pv4K5WveDZyRebSyn6m72SG5VAjcGiYBjZ1E7saD9bWE8MgWGnbLbBG5N1wwGSbHaGAs97TJhe6KzgFHNrvXXbB",
  "key11": "Es2B8xSwXvjsG3X6z5ABP74hbPC6oFfKpbvfa3h45ZGAJFjDBuDtu8SWgAkZZbGbbJUYRgbdgQQKeCyD91pWtxp",
  "key12": "ZRFDvb2eYwwo4AUNac5j9DL1QEvrPvUU5KscAcRwiVjwgsrY329prikTigezWRfWzgjrgqr6gGq5XEeTeM1zCNB",
  "key13": "r9biXpaJf1MLggGNCSy5xkpHwSRUf8s9D54GHo1zA5aRniH9YJNpWZAJJgQj8uBQtULe3vR3JS5C4VaTUva5FRG",
  "key14": "2kSQWFyPMTj3mtFmR5fLQDB7sCZD3EJKDgUGawbCzU5eimzoaJS9DZtWGChPMdKNFy2pQvHDw59a2MsMSwgQfx41",
  "key15": "4ouGEynt3TpDd5sTC9X8o2Cm7pmKvKbAjE9ctuCG7GSuGy9VJYBTnwP4VQVEywTrRfJwVyb7Zapr3i7uYwL8bdGm",
  "key16": "5TtkMxpqqWQNraUfB4YuZSTKLBnVVCLhXomwzMD5mGdbCPwMxz7pShGQ5sv4uUqQm6aEwueT2yb8VGGf71xKKGrr",
  "key17": "2NnYJU6rSwHbQYqweCSemn4Dqbg9GA9gkVdh4GCdousYRBWdHrWZJ7NoHU7zZjiW8HMYn6D6NQHCXrk6P2DFGggV",
  "key18": "2DnbJNc93h4CyVswv399JqJDcVHutVBM3grjfLZQGG4jAsEviJcvtJscJGFjzXwkDaXMH2U1pjEstpyStfduf6Ri",
  "key19": "5GN11JuRDBwWpCGM2foSGMerNCC4BR3ayQpAVP5FCKusJ3iV5jPspNLgCBKNnKtp9vtJ6HrKed9sDnLA6vgysfyu",
  "key20": "39Koj3v9xzVFNFDXyhoXaqiSoRoJMXsap4HKJzEAYw9veVQyg86gT8i8vWsReLh3kV4whJvwi1e1GcopAKoZfDzz",
  "key21": "4YTXbiWs4fgobBZxci5GUEnsYZCXniRzCwzj4vE5hEqi6auvasXsFuLqCAQ7q1ENkdAF81snBNMXC5VatefoBWcV",
  "key22": "8F8pMdDwXcmQPDrERu29ZAwfdxqm1wnQgkfXUhEXyRJm42jk3pd5oVCQUZiKnzxJCzNMwZKAc73FnRmBogfFGNT",
  "key23": "mgrR97LH7bWoX16ZdL6JPuKmTWmiaxtE6jLrTpFxjGTwRgFq8HBfFP1hZt8xiyQkghcRE7N4EC9KWoUuoE5EDtv",
  "key24": "eCNiWRoLRzC6uMfr987Qp68QGSUyic5Hj7Y3iguExZKGhcj8tj19DpwtqSessxRaAB7J9cSo3RCqPfx9McRX6VR",
  "key25": "4jZXzHjP7m4arYBjkFPoqon7rqavx9uqh9AP65qs2bRV3Y9WuMynY6VZ8Px7D4S3YshJDYnRxNYP8qukRDSJCoVb",
  "key26": "5ENgN8NArREkRRpHBt6DQv2rgouJLJoF9gAUPUEHzPdGZkMAmqb8iBn6KfHJB8gtLV33ZEmwTVyopBEAoaQY5L4M",
  "key27": "3JEEyyf9nFEBPmjVtMdU74ZyUH2W1pBMF4x6PgnLGeAEpXNYt2y9T79bTN1SLZfAM6BZxB9DzrhkwSeMrdarsXW4",
  "key28": "5gbQnaUs8nSzukc3h3TXpGeBymRL1oG2foLrHh1GBSv8P4Lu3P1CgCb7L35vt2ojMUXEymo7x316mgKnzS9UuPye",
  "key29": "3YfcV6gRXGpUfJpzwVdma8TT9tk9Uj8ikN5AwLoauzQu1PDvB19LqjrVmfFVwfnG3AQV2dWdegqo1CPjwjmpBh7p",
  "key30": "Ae8mJv8hAhGfMWoYEpkvirT7s9QiJQJMdUXgaojGoGs2iK9HPu1yv5nPcpGu7iRn5TcfhoTYUSi4YUnNdF1xQBa",
  "key31": "42o3vwPLVmnCkpzTTjQ2xZkRZed7iMaLBAA3wgK2vi6Nytzv43gbDtfSpair9y1819oqPVSVb7eJYB6t2W1V9XCj",
  "key32": "42wPoUyPTawmQVWbgA9MnYLn5e44EiN9aHn4TDqhScpNeo7ga7r3tx4UzLSCSs38fyr7bKp2kSuL6ku4iq7jMhxC",
  "key33": "sZjwxTLM9hNwRCDDJ7LHQsBAFVNa9kpYYTyCKF6qSpVnVCFkFbuMyUMvYt81pBNmv3FXXVvW7BmpiTA4awuycwj",
  "key34": "66sJsxbWAqax4FYRYSjSkdv8jFeD5nwfuM9d5WZeGBABiWF2CngPsHqStoh4QgJACcrhQajWVYdChNdANBnZGB1s",
  "key35": "5fnJUS3FqNdj1frxoXkqrAAKmHev86RCDrzz3Ax3a8HYNhS4SgbXaXgMFPBm6Q3m6m94Xq6ArrCDDdvNwMqKXY2S",
  "key36": "5cCjKuHXLUowxoH7BLMFS6EZW3Rws5ZqCnNCPp3s1WVHmN9YF9boukRt3r1FzNz8MBwEEMECa7xPGL1PjL9JiuZr"
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
