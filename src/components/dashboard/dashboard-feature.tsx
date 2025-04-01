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
    "3rYpGMAAPKVdKDbamxwwbsMoRTFGqCFXEcDTYbKUWTJasHxHtCzCMvdpmCmcFob8zDeiMgEq9SMsG1Tk8CbvBUdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "coHe5i82sucvRn2wFqpUcYXrTdbHQtE6mk4gAcvmv1uUJ3XrX82LqYoh2GgCd1jwvFh7i66MBBHViTTiqNe2rVw",
  "key1": "2iq8kw9AWpQhd4K18s1g1uUPKTXJBQLE39xXudCLnXtodng14GdhsiM549Y3EJBooPYwA3oM17adxffmjWE7oYJ1",
  "key2": "5bmMU6snKWob7KPrRbHqCZvEP3LXd18k3fdfAy94rL6cFuL3urqPD4Jjj7qPbBN2LKHR49Gg54KA7TVtGjwwiiqc",
  "key3": "2JrHGJbJ4xQerKEDsnYrj8AuN18oy4mPeJ6Z6MZVr2wFMbcdeio5hq566KPHCqKRjwAHZdL8vPzWDnaquHqbhm3M",
  "key4": "4Jy6mWEanAumxgcARsZcqanuBgytZKSTyKRFKG6kf837GMEphfd5CSuxPrtY3qpodN3rjvjhEw3DCAS2RtW5xdHw",
  "key5": "2wTDpbLpBzf2hfKZSbA1gXErhbemNHpYKjP85Ku6FjQG7X6eNyfUNqDgRgTCtewXPvPioBsaLEsDZuwUbUnf1TEr",
  "key6": "E65Vo1j289CX5uMPR3Pr4FTCA7H8Rt7ao4h6b15zF34bDn66qZR7NhAp1iQHfpZwfVvo4XH8tTjMH529pqVwi5B",
  "key7": "4DN7qPGSq1EsBu6CStvKRSxs16SGvHCLne13coJjvPwGxqqY57b9jxnq8AfFT7VqJLC15A9AENunscsE6uEh81n6",
  "key8": "2XoB7aWoHMM8rpL1zkMXjzYVfYZXDttBPYWBwZq5MBAGKEFjRz9VhEK5Eptxg8LQVvo5Q2V4JnmMDrvLxJEt22oG",
  "key9": "m2BNGkVPHBSqinjvCAyofwgT823aHuTu6Lxu6NwcAiEzU3J6o3evSx3HWwnBKjf7UkbaXCpx1XERgWNAAG9wWds",
  "key10": "4hbr6B4ofoNvfLYoBRZSiJuqinpgdz4XjqSnwVFvGGUNAPomNb6WkNzmNCZsZBDMmqEhSFy5W1wVav711s8GrhXi",
  "key11": "5da4sVTGQLogxynY2eqEnC7Fd9yP5YVrTUoXtmmsRyuc5hs97gmWWEyWCenUi5jkVXLEE1V1Z8s6g4s8PM1Zd181",
  "key12": "2fDU5xepcbgAegyrvxgRrqu9zGbpRhg21amFAfvxpfWWpx9PiGcjh1AreXJDLRJYNqf2fDZQaZ4bCyKA6fmut8ZU",
  "key13": "5PoBfjAkqqgjyk6M1qfqutYQzLoWkaZ6hQ3Zt2jg7kWyX6JA37CGRG8CL3jhdci9DB8WkXpzAYk9E9Q4z5odcxcQ",
  "key14": "32kBcZvtnkztspva1Sv15ocU1ZGF1P8tugvFR221sbnHYiKJNUgRHr6kbYJmt7SkrHcHMDaJzbhbov1uF2pNCMmo",
  "key15": "66i3gDYqBBUMqKmkZQXVYSVjMKXTqMiwmkTNPe5XJfxMHHqjFcWfCr3TW8TG69WSEihJbdPVMkhC8T9KE2pfLtBS",
  "key16": "4PSpLwMCmXDphAfbZkExhgQHSgz7PvnPxnS69rxEu7jdU3DetdNLn9CAVYjmwqcHfTGMrFj2zqMzey3Y5kkHY2H1",
  "key17": "2JYQyG33oTP33weXdzEpxduaXDuD7TPY573DNd6vixB5pwfLjH3jgAfdkP85giY5FN7cEy6MP1aWqnsDXdFpvqAq",
  "key18": "3ydFd2NFmJK2PPT1Lxg2mdEhhziSEg3XZktbUbK6zFpnvipt2Zm9sqsLrmQKV6dcWfSpFHoVNDKc8LN2DsuWVTVs",
  "key19": "2HRt68rNj3rq8qY1H3TqDgy4ySEgUZobxECbjJziDPhCexRyFGxW836qtSPPnVZWLvh4TBJikcjuiotGKaVvb8RZ",
  "key20": "3K98efNyTgnM6iRTWtzvxWd34s1a9FNackp8dXdAaCjmP2dcrvqVMsey1VfwH9BpTJEiTxTYoa1fi2nH9ngFz9EE",
  "key21": "HdoiJVAJpHD3hNn1iwYCcprqbSjxQnvpHSAkZR6LzoxRQzAQaP54ndRqbnbfqJTedR2wHFLDjvEjJzNSqHUFsWk",
  "key22": "3TTbtB8cmqrXs7CT3qgq5ue9WXWSuLZ7Jjzpfw34vf9rGUR6g5oTaih7T6frSNFGPzFM4ydYiceuir9v8QmszPsf",
  "key23": "67Myg27Y9ecafMCp3irxCGZL76dDEp3qmWq3Xgvds3h2mau9VC78A7vdgpPvYVmypz94VExRV3AaqNPhj2vuidWX",
  "key24": "517zULmbLVHZhzYuQaCBBujh1eR8j14JyTRLZDYBoLfSYE8ibSZKKinXkE8D3DBxZN4wz54vrJ4tRpeMuJoJvQ5s",
  "key25": "YAaPG7C19TwMbwCnT1y9j9W4y7zcg95Y1RKBYKWDHYDTv4Vz5ZVaAyrAxpEpdYh884eee7Wh3wfMQLMZ2iV3Ycn",
  "key26": "6ByfSqwJxsAGiKeQqn8kcvC4sHbbXLdXFDC7XErQhj1MYempL2Eyj9YY2rabAvgX3MUtkXQaePmrt1sSPWiNgCU",
  "key27": "56fpq8zn9XzrsCR3w46LXXq8NMecmBhLFMxuvjKK9exHHQvQq2d4uwgBv8bf98QcfAuc6riaAmbuEohurt6Q8Mye",
  "key28": "5AgCbnfu61nwgznpgar3LMjXuW3GhwWkL6cc5bJ4DWee2FiQ7msQYRP6ArkFoUdKEdQtF1dhC4JXrDFFvPddRjJb",
  "key29": "2p3uQwvWTrGuRf4VoqNvSRo83ij7am4oKJHfipA6FWNBMcRZkfStFZSsDU432eiFDjibaQx9EnL6GNqk7Z2kXKMm",
  "key30": "37ciDB8dkqzdZXyaNMCPnWj1GpK6iZ6fi8iTSJabau1Bx6Cmce3mSiHqXGmCP6QNpVLnnhfiEzhnu6My4JeF6ryy",
  "key31": "3LvQQfrAy8xXG44sN997PSWmVoYbM2cXpSGKdfyE8bA1SpvchqjJBVhhxfupauQhougXN1t8mi8zPgS7tRhXLu12",
  "key32": "35jRPZjGEDeZTHgiQFssqywZAwcN1t6N6gCNc5zLPGM46avr3T9pBgi9ELgT31Nu9ert1zf32pu3qVodKxeEaYUV"
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
