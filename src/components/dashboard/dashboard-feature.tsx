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
    "2oG7msdEgRGgYdTKqrXebn4Zi3rQRAc1p2s9EQFByqnR2RAbb2fWdvJ7eZwBUiBX3QcjKNZVzNPP25JnzJ5NTrvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sQ7KMbyn2ypD1BidGBdRWkpuRWatSN5Gi4KCtWM8zvHabb5pJNPJqvsXSeRp2Xns97mFhxKS6iv74GHgjCwgmKj",
  "key1": "64MpCZgeE6YRE7BzMgB6yjoYXa3bx1zsgbTbwHsR4prUYDVWAd2EaHvgro33WV6wLYBNoKrZtu1CF4z74b8xXJLi",
  "key2": "51qpKHZ4SRKBoqKEXKajm4BLAGwePETz6ET9PMGv3z8SJTA6nvjEwthEkAEkeSGkpuDFPhtEQsRZ5EttUQuC5V1x",
  "key3": "4QSZNDF4SVUEpvo9zqvPY6BB4J9KXg3a3qsMqhQpZpNXnzce8Nhsgnhz4rJHhYWDJCqnscwSpq3b9YFtXdYePN5Z",
  "key4": "2ZRT6gUHorvdnkoGc23VGTym8ZoQ3GkYyFhaEL9ZAVeqKd1Au5XkunMDpRoQ1JyHBcpPENqY2FikK4VtHt8rpQeT",
  "key5": "4NJRFxNayziKUTMGHWknMKVJwgMkMzc117rV4UjagctDvTSfdftar8m2Kjvv8uKEDhxRgcYxQc9WGjbRVsywhRUP",
  "key6": "2hzQL7KkuzWeGeAS2Gd2CbrcuVaacSVq1mgi5KBhBLiVJAVeSzBGYyVmW6JmEJr71GtZhk8je2jgrZz3XES1rZSd",
  "key7": "3Acobg1Y2pYkKPFptJ2Kh6DyWGusTJKhJhuPGjpna7HsWTbQnaUfsSVuZhSH5kHeiqg5RNvb3Xa4TnvL4tqj2Dij",
  "key8": "4iw2mckju4BSyJoKj4raRw7BymsSaTNF4EnZdtRtTBTKBQZKC8qPaTKK1EsuLkB1SBMHPF5jBcvBSehyNoXJYRQg",
  "key9": "4Um361Z3hEiQkxY3G8ACZ2mn5pPNSdn9BviPoeDgFhGcFVpZMQjUtCqWPAEndEQFMm4ainJJwTq1Ffzo5MQRYD8A",
  "key10": "5v7PK6PmwPcT7enLoexgSTPUw1ecB66gpcbweJaVfhU7aSBDfQfuJUZh1UuJ1K9nNzYUyaFb5fcqinDCXHLVi7ar",
  "key11": "3FyCnJJ7zp928HMQNCJYvr9RgRiVXA8dJfsxLPoSXTToVGjn32xgAWKZfzvE89HtHnNyDp8w9Uqz2tzCcAvGJYP7",
  "key12": "6qjZUSV71PBAuwAPvLG5SSk3KiKN4R3J9vxEfX3gpdzDxzZNao1Kcb97nbt7C8WMyvuZoPdZoNULCjibMvzkvrL",
  "key13": "BpGL3u3Lx6UMtqgFW5U6sfJYYpK3JMV5NwRZdzz3XQnk2ULzUgAQ9WYNQ4BhtSsne1AhErfrjfoqB6YP5GJeDKw",
  "key14": "RV51LXfVeuh8F4nQCWLTtiZFR3shxGNQqMsH8crQs1dnvRGoiSocN5yYefrVeK3vuVZ8LeexYMzsrR3XE66xMme",
  "key15": "5FGwhmfcQTxZPLVVjBHZ35cyiPDDe3hkbV3NAEdzWgmuRE7MeuBGtJfC6wh9mUs4Nw7BiCMs9kHVaE2iknRwKH3o",
  "key16": "4Wa92wycQJwjo1XnrKGuRLqHqLoJy27SPper5w1BLzTFJfoXJgAjSwNB1vx2G1NyFQMXCTEWyqfBNYeTdGAhXW1c",
  "key17": "4uNJWr5mvj86mJ2Zd5Lq8g1d1Mt5vHxTcMNuXLypYDRbr2emb2QyXTunKWvwFQxWkMQBjmQ1odrputym8LvSazXB",
  "key18": "4gZT7fGNbASiLx6stRNqc4E1UriV76Q6G2YHbHCnTMLEwe89PKZKY3eGFzJnZrSgsYMAEgBFRS91yGfh6shQcL5x",
  "key19": "3S8TLsVN85Bd7Ue2yFTguKva6EgBG24uwYAHHPtwwCMNJaUrmsW4ZytC1cSx7XNKxXoxsoX1EXum9mmBQdWoccYt",
  "key20": "3hFi9VHNAjMDiNpY7xUDcj9wgYN4h3mtqEUdBi2a8aA6Z4svR2kciNYQus2ooYTA1QYDsS5eR3MwV2WYiyugB4xD",
  "key21": "2a29j8xyicfc4T22BQFWg2GWy1F9cEmWWBE4v48kZtMiri6KE814vKdKm8cCFuMtsUUV7yuWt2LuEbCu6mmoupq8",
  "key22": "2zhfoF7thCZReff46ABQhYwMn2jNVDNhA68vWqZPbdU2pyNd9crCu1jbikNTPEazzk4cQPYRBfWEQ4ASqURxdVxj",
  "key23": "3comqC4wTZ7VViQ2HFXhjucTLPUdvAnjvaexmCBzV8NA9TSKsGZhpTi7a8HVsZ4sCuTmovCiB2rUce7dfivH3Y1m",
  "key24": "2x5KEJvskXhGwRMWJw3o7XiizWDnon7AJNr3bzSPpFxqZJRSPgAocsmVZZAKoDjSQg2SfMdLF1vpyGmfXTeA74a5",
  "key25": "2tMpbZdFEArsqKsxvDNbaZv3N9ovoqbEhEx3KFcGXy1PPEoonSeGxLmrEDajSdVZqGifJ17Mb1qgcX4Y5vtw3Y5m",
  "key26": "3fnoYkrrA2PoeWDbX1iNBJUFi4qWqMd9hpBwBJe6NHPrgSNx8EHe1jNMDnGcbXyVqxzTiXJMbJcbHk9JXLqJvnNX",
  "key27": "3Bub2gm2u6P5yT67TevTAb4AwqRzoFpw64p9myYJc3pxFaNJ18BK2cUyW12ArvEdKnrajGuSJEZNqdwxp7qKcypx",
  "key28": "jPbbHesFT8fcKgiDm4oNcmWE1UQ5fpsgf168ZNsUn7gv2PmNzPuFBnapzVjJqaW7C9Vvr8i2LvJwHGigjeJdMVW",
  "key29": "3XkbGC17916nJ9BWfdJaiMu1hqAdA5sQo96xL7DYRPZ1m7d3NvHfng3P4afJdmKe7zhEaYG5QugZjZiGXg9Dbdk1",
  "key30": "5PCQ7Q9v7TwWN1f6jLtStZSzA3T7ZPPRk1uDL5Jy9hvFzNzV3Mwo266GWWQasYmJP3Nh4m9BSF2k5ZfFjztEKXDh",
  "key31": "4PZ2rvRKVe2wwZtPSkrxoDLWmJfTBTjo2QkDi9n1deaNoAR2tgRZBe2wbeXtDMekSfE2E8amNWp1Gk1qd63nmUeM",
  "key32": "7MuZn8rYC3mSXkJRmrr5XrGC2Nat6WUPMqGVuossKtENMUxGLctsYcvso9uyGmqX5gmTCeMuchS69SCbcmm4SYL",
  "key33": "4jqAfeNqv6fSoq5LgnrWze322iHwZv7H4pkrpnTshZw4y6GAVE5FnhvpyNAM97eYEpCGGH1tvV1DhsX2NJc4Y88o",
  "key34": "tnJd8JzEwbg4ZdWEKuZFaBJ1477hKpC767ADrkVP8eMFK6i1CJaxht3Hxmx8auES2SUV7DDEruAF1PS6tCHtFqM",
  "key35": "3rmspXzbReEavxj99mB1GTUTejZ73Gs2dr69e3jrhTKEbXii9AWwtkHEgPJiWoKzCjDHTFcTTNddRjo8rN6dGQU9",
  "key36": "hXvj4KaoDRL2y2Qk5zQJS6Yjm792gy1JNti68jvUSpCFuDjjPkEh7MQajQSPBBvifuJtegqhaBEZ2Tj6xoRL9zg",
  "key37": "4vnAh191STe4eMHAsvc24CgPWzDyr56FwK8yWuYJs1WMKBSMqD4ZQSPNM3cANpbGK2oiiSdoyynbGedryyJyqePD",
  "key38": "3jngTZo6uboQxnd8x7wFEEkzGTmTNyGw5rvhiYSfPGQ42cMXXchttNQcvonTmKHwmDmXHxYaqjhiG2izaUvnP6Wu",
  "key39": "2SrbVA7e28uavpa23TWYRY4jcRwfEuXgBGeAmtfsXMJsUH4z3juV36QMQTA1KeX7UcaJXespLfMfydnGnV7maDM6",
  "key40": "2Um2EW4EknhJzYZzkV3xNs6SXnKFEF28qb6op8wyBBsNQXzemXCxYtQXzp2QkviCyrCaHA5beXpZzEeVGMyvMACX",
  "key41": "4Lntny4XboKc2Xy8DyhfYNeanGWzdJbgSZjA4FKfAuZEnNWtmhbTUy8UYfetcPQXpyVYsjqsQ8ngmjBeQgnPs3Hg",
  "key42": "Z8WRZ61J6ohKm1vzZKYtYSBZRFLKuPUfo7D2YYZK6WozuwhUHjUWXoanXpip9RCmdwpfzjRrEZimbVFjzFtgbYD",
  "key43": "3van3XtehQHR6cYsFL2hnBVNqzDBuyGFSX9YjX7LcY3ofJwqmUeqppdxaSLeNv5XigyZGGZshTyJb9aazjcWF72K",
  "key44": "53LgFgd99y6PJbFBz1RuXfMuYfW2rj7skvtopEB5dqfTr1fMHp6fcKdn4aevyWcNVfTXfxRJmrdqo2J3QzcemNh1"
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
