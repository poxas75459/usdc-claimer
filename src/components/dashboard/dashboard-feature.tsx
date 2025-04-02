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
    "2eWR2NqmjL4yVn3i5tjfCGfff1udJzQL1Gbn6bnvUQDZs89FDsvr1juSFb5Y27gRbuk2G2LdsHWRiZzjgnYWhXkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R4DkcYiw24FUongckQ3Ly5w4jSCTtuUL3e47jJZr2XhWE6GcWc84YoCi6HUo5GEmzj2miK69R6ryjgfxNNU5yLL",
  "key1": "SYRa29TutxXN1dM7dF4LGM4AADqq27m52jDpmCKWcb9pzoGeWemmeu7LhmWAFBDSgYcDVSccr3Gov5ZZUhpKDh2",
  "key2": "51e1JCSZ19kbPhYvcCMxGjY2J8VxvmoNUXA8BxRAbxXgA6iW4uGPQK3hSot4zwUqsrEqfZ1bvLsd2u6skkfKZ7gi",
  "key3": "5VCb1q5by3xxmtJCr216NgAgCpQe8Eb7j2TyRGUg7rbXk196woFvENJZz7E4BE7qZra23siRYmXKXcjzsCMRJRsV",
  "key4": "DWx7S5YK6VFUyGDNA6Q3NiwatHNePEggzddv3kSwgjEpjffPbiMV6a6qjhf2SYuekNCVD8KZLs8zCtpYG3C4PKj",
  "key5": "21SPvbuXLMo1UcuymhN3dw9ZfG7AkzN5T2wzJqScszDswnVHi7noCqAfE8vJEpZqdMmD7QTinzXXeUPXUtjhNJRU",
  "key6": "5xuEw9x2TRxsXJJJP6BPGWGkrnopB17pWv5hQEBApNCKgo8QDJ1BmpxvtCw9oiAVuQzxnJpJAseFUcTtQR7anhKL",
  "key7": "Z9Lyvr5TPxnSdoDb1dugfj33mVRWyXeqbZVi9xxXbNmcvDNVwLtEb7N4iknmWUAidPkSJMxNiLRwe3VWUrg3vYx",
  "key8": "2C4jd9mRssposvnh3cjYxyzmqMmq7XowASASkLNPEXTZMEgX9UumBK7GHaaws4TV6QWFJeT4AvxExeZkBJh1PUru",
  "key9": "JAPGD88dd4zABtADN6mCuCzmQnHPiLFZFHR3HtKkUoJPNxbL4PjK9YXKvdbLvqRzvkzZt1j2dvHpUwJ6HoCFkqW",
  "key10": "4D6qKqx5m1TyNKuAnAuSmPi3jk6gvcLKPRUVfnsTi1f5aiLpYCfRL35S9YrZosKQL31ecRB8jcLmHXtTaDxXr724",
  "key11": "44cV5dW53TqKUWSsKy6i1gbcgJ3akmnQbzC6Fu1gRTS4dgzsxcaa7oX3QHUL3QJr2MHxRF57jaGQqfYtp8TUGug5",
  "key12": "rRq36J1GfxqUqcAqTKe2W46KKGygjViizRDqRTqa1nntZpyEoF8dkooYbUVpE6JvAQbC7Tt7n6bT3pRU3qUaui8",
  "key13": "3fnULbHgM4fi5ZCDzVgauQ7ueT5X1fQWoxoQ32bu7pjRVEGf4XfKTtAYUfUkVeuZJXwV5yTd11XVd31fSh58rTvE",
  "key14": "3E5vjNXRm2GLUvfsdW3wKn91d5KyMwMEc6jZPLTdnsJmvoQkUrFQAfNLwZnBaKHrrVSCue6o5RRm1Vev3WMj6Z25",
  "key15": "4nzZt8ShEKYJanK5CMTJcEHrB8N2eQorxKFmyVVB9b9fyEN7TgLLr629CgNTk8yatvGKmEisApJA4NrURTy5ndwc",
  "key16": "DVhKW7h7Qg7sak9AT6nQWBRu8W9kvAeDcZ1FnRYm6dK1tJXsmAquTPr4uQtinbbe8h4c5qXxDUPvHJfuop3qH8p",
  "key17": "2s43PCff8i9VnnJE4mHcE4pnzScZt287EQHG4qxqR97yk55zRnjDR5QKypYgavwJHGnKRG1tEdU8tBe3WQgJXa9J",
  "key18": "3Yo6sG9jEubSqoMAhkWoS6GwbDpkzykeAGqHh2BLNkfMhe4zDmdJyj4VMztsTFmTGe3b6p5h6RuRzp8oT4Gqs877",
  "key19": "5ENCx6nDMdqgdGDMxGirHfuZDXz6mkUG35qLGW95PieA5JV7Z64o9nqQPNnzkritaBortoXi5qpcwV6L4NYH8pUK",
  "key20": "28ERDgPRguAJt9RaQqryUnAQ851sGR93p77az4tX9PoqJuR38CBHLZJWkigL5qgj4vRZcZ6Co3UiDkLwRQWuCjmF",
  "key21": "3yEkkLkmyb39yjqjcDpDDoKZRDoh8ZpNdNFgsq4yGiJhGFPGoQMKZxa34TvzY6PnjjWXQzEZdx1xsZJVtSt2cUqZ",
  "key22": "56GfqXXSzi1TVia8GUjUEHTe2iqhjqhMTiSqz49aGdNuAvc6W34DqFnZxUkwa6JDaLsqiXMbQmKWEsfDFXoRpQs7",
  "key23": "4cJZnEdkjQpccBSiHFe7jaQE5BpxhwB5Wjmmz1ftYhF3YWCju8cUsWQXEX5fgWpCwdeVqvKoqeDCom581NuZyWDY",
  "key24": "4JqaZjTuMKF4XM8hYY5mVqEjwC4AWCPC7b8eyyk6k9mRAvyDSrkEsKEDC8VPcKngC3DFPeoyW4n6eLBFdFEGxKQ9",
  "key25": "3Y3oo7NQcmsG2cmYTNv4mD2NWqXymW62uLxXpCWWG2f9Q4o2G1xg4MH3wgzkgg952h5htnPH6kYbFXWZGSmFQYNx",
  "key26": "4B4nyMkgZMm3xbeh1tfPDHFcxkE1BYDcVrcAeoAWPEAkHnV3xhvtGq1BQgeRs4fPNS1hHjSSdstyVYT8ZLJ9ku44",
  "key27": "2yZaZFVmZJXgbGVpYe7TqL5JTqdw4WjMarYf1AnRyoDAqFLg5nQP4N1zjTYsWPLscKMVZBkWPx1zqWPknjT5yN4m",
  "key28": "2yt8dk1ZNZW7enwddNbGrsraxiBr1gCpWFTDMqsErq6PMaMNUtd346j3vKe4GroyFbU4WBNs2zcnkhsfv7LQNHF6",
  "key29": "UkpsGfYYVjZkSeVPRcygb2zDdWj6zstd8zGHKcYBo98xWRu3a5oduAA31Gt26CT2R3Kam81rEArZwsNqQJH1b9V",
  "key30": "4Mtv8hSinu9huaCMNA1uNNtVH9mLzQzeRfzAHbgXiwNhp59Ckq4ugMoctoQ7C91ME4YmffJxFERhyUVB3CmKZyDB",
  "key31": "2nHvihwBBqG2bdGA1WYCoJzbyez42We2KJ2BH9a5wpWtjnpzUS2EUY8EnaLW36e87TJv84YNF9rzFEUdL9ntz1zH",
  "key32": "3CSHGP4gNRUmfeHTBUz8UG6FaVaKVTRhjWuSmBMHrCGptLAm3wY9mTCPQAYetfuboofWpraPpi3LEXXe1FrVv9CA",
  "key33": "2dsAS6Uahyr4DWYDMcFqXUUaQtqpJ3iFi7XRQzqYEZrnrkjzUVZLgfZ7HmYzGRf2VN9S42QBEyvpCY4mSQ2GNZfT"
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
