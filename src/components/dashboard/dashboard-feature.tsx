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
    "58WKqJmUUBpj7Ypv4HVV86eupGa4SXEZny8eknTNpCD2CAkgj7Q4fSbt5ck9fJRep8fdop3pF5g1XQK1rzyvsMv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SnkzKZxDLUVG55vxp8i7Y39wFvwVtttsnknPxVwVpRPiNEXYgEvKGvhAFaHLUPf6UGjZRrNneYmTrAW6p5xsdaZ",
  "key1": "2CYhCbcbGzXQyAe8YFzV22Gf69fYmju3A9GsstR4CAKC3UEroayk5TsJhhGj8RLP5mMwA2CD7YgxsJjhgxmPXMDf",
  "key2": "3e2jMtuZpiHhff9TiH49JRKpexqUxTA9iM4HtYC2qpWWwGtHxJyiMRkrPAbFMKQS8xSMi5KFFM27Y2YF5S471DMS",
  "key3": "53VT5aDzayYky6i4aDFD1BgSjfdtZmsYvTQHuKbjnrrbnZmhHo5XMR8SoAb2gfBpAGRVPao7tCguh5VJe3XfhdNR",
  "key4": "5UfBb54zthbYqcNFnutiLSCBGwThtNNyvZBSQNy9efz5GswUyBMMZi14fy1NbgHd5oHG89rd7iZy784z8tTkNwgu",
  "key5": "5XpnH5JGqFWrqrK5KmPdhQDg7NNhPUUd7Nq2HfJjF2Q4fr2zmMmGrVxsVMSFPWLzzoLxhQEf6sshFqGLU6QWKQqv",
  "key6": "2uRKBbwKNopQ5kD7ZALYo8MsdoHWNULKwF3Hz5TxRoc7YKhSzMYGksnuk8UPAusK2LWcVfo3FV7ay4LWRT8H6jY1",
  "key7": "3zuHs9buSn9vZHppXMr1Zp6X51yPHSXAzvUuMKhqdBhDrs4zULN5v1F9nqbw1Tv18BjBv2B8eZQJEkJBAjAHJRgk",
  "key8": "4pDj9Vsd53G4J6MFstcNnSTGXRaGEUHMF2uJS7sexarztVoNPqLjHgbVmvnzyvTPwNdpGnS4jb6t5z56TiuT48y8",
  "key9": "3Y4vJ6uuJkxRw7ju2XQV1t5vXHhZzhXjkNizKDeFCYVSde1HbmFXuNBnLewsJwEbRtrgVvpPjC9qNEBTVqgtD5dk",
  "key10": "4smebmcRYQkgyT4V8me8sssQShCKQqNxajxvPKiTqZBRvoLkFcjw1MvED3YYMRgnJRFBz5V2NEAbhGYwqCKaDLoR",
  "key11": "ErDZnActr7hQ8tHRY87TtoTGimB3ydfVtC3TdWNuTJtwCosRRiZjjohgV6BmVb8PcHRXrSvyrKiEE7vsBtVGKWA",
  "key12": "2FvXKa1k6aCWwbiqLCJNi2oBonLuH1TSt6wzzZzVf2YMsjSbiWA6ENaYxNXRaDwzcmXG6RSHMALdBzLFZFSLoGwJ",
  "key13": "2Qn7aJWvo3bZPVaq4XSzMFKWPgNX9geRueDxMtUdxorboTh3Dp8KdBsXNurhoW5Bv53jQ5VsCha7aYJ42kKbEz2Z",
  "key14": "4GVdn4oEQiDuZzKD2GkbWCn6zT1QUjNEvEeFFsUN93GgHmaNNyWry1Sn3Wa2vfoXSui6s11EkEtR2kHBSiHCPk8q",
  "key15": "3kmgMiU2Ya1ev76SK3jFyqnsCZAa2pX2HeqhU7sytb5uvozwznFf7mDGF3i1vpVuJMXsaB6S66KjxtuX5RqCPYVJ",
  "key16": "4g4q9pnfMoRjoDJPXksSz9mJnypsFrgsJ3iSF4mb9jdpD73FZ22MuMWBsCnaoEJTp4Z7DLdDEfhp9x1PzUzk8mA",
  "key17": "3Yy4nvjNzSNKisHcg5ygdULpTvMAAZLg68mH3igatmj3EDcmxNp41RV29XxbGBLUEbSsfHE6HTrJWPApuAHFNkpa",
  "key18": "DXqWRv9rX3kAmMY317ASXCTnXkSxRSGXW6QvoVJe7a7LubWm71JGnLQ1AaUq8p8a2QwVa1EZnT5P6LNFspV9oZs",
  "key19": "5VAY2y9iVD3yy3oLw1Jejydvo4RuXor6eGqgQeFcYnGprz9hWsKB6xRnva2SKnU5tS2ggi6vD47tNVEeFfaskBWV",
  "key20": "2qA8tEoSgwwXgRf7XyXU36eFYTaVoK2u7ZbWLQVpjdwfbYeMnML5NTWj3xGfaSc43Y5u4PkufCPgLA9WsHFfiLqW",
  "key21": "cew3na8bQ3xc39yDPFM8ix9nR6REBs1PUwPEYBz1CxvhoMG3rB5dCuk6kFr1zcUToz7fVwHr5ANjsHAHWLCpLUN",
  "key22": "3mcnuXw2Xp6tYcoUWEfENmXvrjoKm98U3Ntd4sFKaJTJneTrqQhNA8GvArrH8nMbiJ7e7v6RpdseKRpXDWN3TEP3",
  "key23": "57dzfbPMS8r8jKEaaxkpYJw1aGmZBLEbp5Aae14x6n8DBn6C6TL9uvQpaH4a1eo1EJ5UbAEceVnELMkUv4zJoXTm",
  "key24": "3WJY2gu3Mc3Wvh3tN9m91eTfYZvQhX9GAaPN9qaxDkKwAWaxmSQeRpMjGMiKJiATRssMGugawWwVwfZeF1SPv4nu",
  "key25": "5tfYddAQ8TCP6cVaoXW8unmVZeYyAyYkBwawBfssgPXmJ64EaSwpaCJrRyfvwt78NNwjquMUKKG9Cpmct41iVrhA",
  "key26": "5wiyBY224QiRXpLyaXZ7JqsJyFzeJ2sBca3BLTwWMbLA7okdKxyWMrWgTevwbSCZV3HxvepVFDJbv6oRrJvAbkGb",
  "key27": "WzNPKtQEZJ4XouAw2oDStTR9kYuFcfCNTXNv84M3KvacsRSNN7QMYm8KaFmQ9aHKzek7r8aFsVEqJjZVjeLTL7n",
  "key28": "2FwhVMpfqfyo2s7sTm59zGgCnAdUa1jZPFNzC49pUzMfeTi8cxHg1BCXou5frx8BUgy1U7k5T3wbHiNCDMTsAF6X",
  "key29": "vxA65ZwVSvjvxY8L3GKBMbZJDD3odvipPt45Q6jNaEDS4nnuEfGivpuDbmQsrwaDj5NWo5DiAQtg3KvXSXXDauR",
  "key30": "3g81hyT3BParoy1viK3UPbMX4z8bE5nixMG6JdNd6pqMN8z7ARzB24kAhf7tYBsLhBTyZp77DkQv6S14v1KWW2EV",
  "key31": "5rtYifzmNbeJ9g8Siy3EXGx8W7TZr9PwzjPZ2tVFyRwE9EeiMA9kA3TwDJfYYzXwMvZiZaxWojcPoTyZ6N1x4UYw",
  "key32": "sqEnX91otX16dL429E7RDTJDojJyy1jkCFErr8pJTUjRA51ufjo26fmcg5UhPkmKgLcaMez2kfff3RYtjrG9ysL",
  "key33": "32sQR8FUjm6Q8DNs7PxAq9jXHREKVkL4Hje8mHbopkiNhGJ6fMWM6DUR8VRiNqPC2YMxfc8Pn4xYaSBWbNXJpxMz",
  "key34": "4kTiqpBRGWNg4mLpfGnwZtTGXE2dS8jHyiB7c3Hmtkdx6UoFZ5L5Jhvhb8kjEhHPE2TEaXjD8RHfeE7wp5EhjHyD",
  "key35": "5NJvdMGcxz63N4RPgAJwLpXegxH7MsZupDyyyDaS8PG2QKrvso3ciMwQHi47CGBCWEhar9MUo7Wc3BhKwmsEpVGH",
  "key36": "41NWH6rb7jDtkgNcvk1MWoA5QTo5cYP418bLTyJaw7MZ8r3KcReR9jP7A3rmL9B3mcTtGdE1jHA8NdqcUH8eYUd7"
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
