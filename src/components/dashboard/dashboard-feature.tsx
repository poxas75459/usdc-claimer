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
    "3K1b91dCw7pRHyDdr9ZjLLzuAjc5hzkBjXVzVechQKYibAEkDo6DqbgqhsHp1bpPYo3Xjw5Q9aATgm6mBupyGxUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LjKfXBD8B7QaD38gWvLYQXBXNLCoiwpWRZxC8TGpwSiwALydjf8mzcouGuZnpoVZ7oYyD2hn19qpLm82mTgPNtm",
  "key1": "51vd8soDcRAa9U3ZshLSbRQipgsyr6Zh4C1WTYMf9vmBegACbegDML3usQ73sDhwSeFhgwqwoNqUaF6BPZziF71n",
  "key2": "39vpkAn3yNXy6EuEsWojd5Bt2XJq2146UPVfobx7QfvnjDH4KCQWfaE2AbtyWBUtPHMvxv7t3KNbKXtKGs7NnHgq",
  "key3": "3VLSM1xKgneUGXCJh49x8AQa6syV9J1A4GW4GS2Sh6UaL1MKNpkaToMQYHJQPvYnLwxkXEXK5gyD31bV1MNhopoN",
  "key4": "MNCJqLVyAZJ4DmMkZ5BitM1fTMrtBTS5bxZaz1jTxYgPADHDbboQoy7KPANpikpARFp7xV7MsvqAkVnYFh8zkom",
  "key5": "ZX69Pz59URj6XSgW72qQedesp6akMKBrshgPVxTqC9hynnpoja7bSDJY4iAKg3cgfypQeWFh5KdP72P5MFnHe7y",
  "key6": "3NygpKZmGZSeQc93TR6kHhKsatUmPeqj6y3Nue4YDH1vpcfEgdMzY4HtfbrW7NKP4niJPWiX6ixrNe5WFu4xUDeR",
  "key7": "5sTcEDUqtApvU9ThjctwLrBaCpey9oV7H5zwSv6JFTi4LGNkEZBkzeDEBtyRkVy57PqnXpmWRMMzp5TYfXRvQZbR",
  "key8": "4nBSm1Ph1HZ3qiniDVZz3PaHq82Jfkbo21tveunew6v6eie2ZK8HRN5s9z79wHAxmnAHMNBfW6jy3wFjLRe4yy7E",
  "key9": "2RN9Hz14BDrsssGRUJfViUqsCq7Ft7W2q9brbzqHRrgapahELw8UN9Xqn3qQjiMHQHf6iPzn7AJ5z1jyVyv2XEhj",
  "key10": "2ajHZLLNTZANcizYqnYB6Q3pUPXkwgHCkpo6xWH3mkZcmf9GXiotnt7BiRguao9xAqq4fWJ685mtfjRbxRNSb2Jw",
  "key11": "5vmAd12FfgTzRbdxbAwAu9oeoLgTVpJ5GkPNULz79ar2WdHKza5AwWtrMaUVqxEQSQ9NWMAQin4c9S3rHjjts6DC",
  "key12": "B7BvjPZZT8t7aa8Aj1oDA4NWLMcL2DhKo5EJwfZxhEnHPv3MBBugb8H44EUweF3SpUGfPHC4YiDPaW8buRdA2VQ",
  "key13": "5B67XbH3uZ9zuzNCx8PpbnouVQ4WCVhAjX939Do9poRLcKHMp8FjhswzePUTVyUHM14BQtpu3fn2y3ibXoU1oFEX",
  "key14": "2miBDzqNCYB98aDaBv1XdQTXRKoBWwCXomxhahR6uYU7RvzsEoqLgbub1y2JnaFzPDAQBnFQ4WbnaxKD8QKpysg7",
  "key15": "3wz9yWCrsmzhZqVFeyErmSurUFKzwqXH61Lvx9MqDPvCqJATrwcXEcDhBXsyk27mzvGnLBLQcVpZqoTfZ5ck5hY8",
  "key16": "3YZFZVnV38zHJLVH6XyNyUdNPBntcFbstXmjH4MgGDhYp1U1foA5bawcAwnkrMXwjtKeuKtUT3BLqwihkJcAQo1X",
  "key17": "3JkhYyAjRcHJkivrt2FJMWpkxt4DMeMaRs2NsMGAkfPLqtRbneiziwJ14VqPP2XevSwxkGV5R8zowNwAzYqrTjfu",
  "key18": "4TdK5qKZ8JDYCCTb1DVfC4JcvMPXnGHgSFgTbYinp8bnPrUQmYodP7HHhtWLpacTKqtwv6mRC2NKqtJ29dS7Higv",
  "key19": "5nEY5NRDdhucSEa7xjTPRpm8zeTUYiAXyMfv5KzRXJJPJpJjkXzUa5Vzo1X1npKwa1bqVrLk2RD3DUG35jqQtY61",
  "key20": "2wSBMtHRUQFesmUdW9ndKKVRAJR95n7MGnPy9oM9zTK95Dx27HxDdeuvAGcF5i1FJHNHFZLyYv7tdYTkJ7cBmKWD",
  "key21": "5BAog9cVrrQX2cuXZ9P974qHCbM1DHAU5pX6DbkVq8FmfNndpQeMZ7aoKzEgEXgaU2rKpBD9ukRsG4pfidSGvzFE",
  "key22": "3ehTqHQUmbu5VXJR6B6veEnCtjiMqrRL28dS8K7UG4TCt2v3beqxfmtZ2FSZkZZTp5nbvwvUYVQmwHyvHtaDVxa7",
  "key23": "3tG8PqUcSfpjX1vy7hvkr8wBSY6BEG9ruznvzhvob5FH6ewv8ZSb5vVoRPzExHuXado6r5z5SXrsw7mEN7xRzBTy",
  "key24": "347Vp11k8AtnhtBTugdJey6CiqdgNHUu9KhqsBvzmfoLYiwzXfzFthjwRktDQiehAz7UEKLkHKbuTDoQDjy7hrzL",
  "key25": "dFLKDVhhFDkQkcAp2Lzp9ZBGvctsW1gxhRTP6S2c8BKsAa9Vxhe4hQ58ckAzrqmEg4L2eMHURmJxfDr3UQSth3u",
  "key26": "5KoTcfyCMA4LFiVpYjD1vq62fR8ZT6AKjarFMPo1L5Me9mRkVbzsf2PTqt8EWDS5ZVfJqCdbM9u35vNuX6gQ6nv4",
  "key27": "2mSYDttHRqKa1HmpgBoZAPLBHqS7PUmtjGMj69cRyvLQYRRprQBGg6hTEjP91x4dM726dLFs2UPD6yGRqSjv8Wg2",
  "key28": "2fAwnzx6jiXPEALwMF1tpSjbPRHhvhXraupFTzXA83bt5b22n6efDbnskpFmNkFKxJADuBktSwdyGc1UaZqKfpKk",
  "key29": "5QbjqpXP5KaK1DrKYBdwgLUUi49kpvfU7jVoPEHZmACK4YDXMfmg83ufsDDGtW2bTBeqELzDV6NtNEvcwqqSpwQL",
  "key30": "23zJ8hN68WXjZxCWXAbdYf1rCpfPZ73H8LFCuUqgccpEGSsLMvCUS6fkDQ4Fwo4TLhMmw71GZRTJMLZnE7Vbqz5b",
  "key31": "2fwJN2H3dXvQoC9paKLyr7EK1ZHFkBS6YgDbgQWKqcNZa6JMeSVLbjB4LWcrVRbx5EfByRfj9atayWx45hnnMtt3",
  "key32": "2k2RMaso1HrkqezMpT6hNjeTEu28bfkCYPZ4gUqefJn4FZw87bxwQCn8WK7t91Mo5cq9xsku24sGMGNgqc4PMwKE",
  "key33": "VxBTow3wNZGBDrLToQodtzCqFGpC1QBmsBf5KQ4Skk365ug82dAc9VWnSBoKXtCWhYBz6BLpfWPtXVxAHRKNqEE",
  "key34": "2KrcmS1S3pA69iYb6sXHK9vrFt9KaWaXxtp7XB64adhqzY66Ymo9LnYWsFH8dkuMPgL3B7Bv1zJmdMThiwjCFKrr",
  "key35": "64XZFCti2p4aKKepfodDe9uDMTFSqJxiVV1HZzAxQKX2HQ7Z7Wf1JQMPGJqsyvfP84wLtnXVHhSpmgqKto5ppEib",
  "key36": "2q4adWWV1wmcFQ7abBbRoVvkjPoSRuuAdTMavdroBRKKNGgwTU49k5DhqtszbcNCfsytNAHoQg74G6Zaz7VdMwgn"
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
