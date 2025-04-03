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
    "5nJbarPxhqCb2rTUkiqrSvQ3GWujL9m4fPmQhHBrsxhNtcH76mP7aBp7sUmRTes3Gu7r7TMLirVeHPKaYhRWEhv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8TyGvvXWHnQS4sdCLazZBzRqgqNk3uc9F7nP6hi7L2NCNpF7aDWWMcoq6d3NKLYzscNsf1bAuPonQ2AALYh3zr5",
  "key1": "2rA4imCyy2A5mVKDPLVGLrkMLJxJf663qH19N5UKeiNJjNmyf7mL3EdrBfdHnzZ7Lte1ahbV5oGfz3FB4DjoHeV5",
  "key2": "3EMVvatqA5aSaSFgPh5moraxVyePJWC7z1m4MHK96X5WmrcmPJGVcs12hfNGKZg8LcoAUHytLAAAfC7w9oEv7oLc",
  "key3": "4SChXLvCN7Ur2Cu8nufbMrAzE19XNcPbTjyJdfrRdSkxbN4YeQwxdVUNTBCmYZtoErLsW62vf8Lfft5jrh1tk3t9",
  "key4": "fd3hWEkq7h36PdVeFC5epyicQmhSNpe2CLjekMBxx6Tyvf2yf4aGKCUirF7T2PADubaqjxnZRX91M7MdTLqJyf2",
  "key5": "4yvF58Ke5XSL2PcREuvdijuekkD2Ljbsy1yRPgkKYvZJGngsSvVXC3Yec7RdER8eh3yfr8ubY4of36kBMyCoftpU",
  "key6": "2PwEK7ZFN7gGW5bBHU8tZdv55uMZuujYPGZmvUW7HkA17HsFAnwxX964os4L6te9rSAyMC1uF7WZ7FdgpkkSWZxv",
  "key7": "58b83BLgZwndbv7T3ez9YZbYoD8qxqyXJQrKu3LfAXaZoPjiWoaSnhE3hrnTMsTgWwgGcXAhEu1XR94WagpXcnZs",
  "key8": "2yzTMsif4pYsiNxUoKBDBE3JJANpVE7VZNpxcjrCtKZJ6tYqMHCnZvGx5qaWLYFjZ2GkQnYUz7wN8RkUvdzSYwwR",
  "key9": "2d7A6rBANj8GRdFDqswF3FR1fmAhTwANqsC7ciuhUKBSSTGkcHPLEZbW1N5cbmKENstHVZChpvT63axYg5adw9hn",
  "key10": "3YjvFRqc67fab7dWZZ5hxUY6e6wvn8tnc35TMs3enAnXwU41uSsj1e8TuyhVmQ9TivrpgnHRWRkQCVYEpYzjP2a5",
  "key11": "fMBKjS32oUyZ81zQAf3zw2MB1P95pDfUtAzEgkjqdBRoLE2dAU5PNjiwDi8oaXmZigKW6DcWCYE5NWrT6mLrXbi",
  "key12": "3yHNXM1itmfumiVwQKpRi7SUvCptW5d5kGDmRozXFs4nFMj1z2D8fadpwQkX3TwurjteqwzqcL4fn2wnyLQJXzjr",
  "key13": "4nMxGAVwPp8Ez4w789aQuon6C8g9nYpC7cdedKxs8rpjoJ9H527i4avmUmb9i6n6NroEiMTedyBd36Q2VUi759LG",
  "key14": "5QkYMxzsQjBp8zt5tnhzZTbT8moD9wj8xgkWQdB247LQCucrrd8d7V13SwZReByPTpAQsLyR7H9VbKrPT9eGMF4K",
  "key15": "2dNQubUdDgRqykZyfLZio82S7PcvnDrxVEVa5tJeCURf5ixWtGJPQ7pL5R3LSuNsNoSzqtthvujCckDt72gQUjoC",
  "key16": "4o73kCSS1teizyWS4c9LbRVkAep7sfC5dNqyk4zhLdxZWrkDhZbUVTtSYyvAexciUnP4LD51ch95oEYkzcq9PApB",
  "key17": "rputkE9XoZphNNauxwQSWJUHCgh7qNgbrLh9o65AkEt7TktWiKjsyBEnspNPLnrUfJrUZy9h5rnG9PAnbusUkTt",
  "key18": "5ornLKY8PUxvj8pzGFs3dU5hq66UJTJAFyzBXkWrzgJY2iiGKCnkA16Z1b1Hh1sovJFE99RAdriVWQRzCQC9xzzy",
  "key19": "5i328mZGjY1oPwJUUTQ42vGn5LYGbXBAU4PvAAitw99myCvkQhwnEQaPQJ9oYreyH5vThPnvWJXZLEFVPDEF8UNc",
  "key20": "4miuYm4dLdqihACVQ27Ri8KpYR5wPgLtJ9tt4fG1bof3N8dZWgdZN4Edc1DTjDkmgum9dLanViCMVkigewQDrieD",
  "key21": "Bdgp1YpLgUrS4tH3Uz2r1b6qSYCusBTc318aRMHR8vxkbcSmLCzcaKkF4Gk334ZA3iYDSwnwN22Hwu2a7D5UXHu",
  "key22": "swsimtZStNV99KV78mqNtE3747XC1kXWdK6kjLxqRw5Ndw55pr5giv8Ppf8FRZSejsXCCemnLLxJxrYph2JdJfj",
  "key23": "oR8RcDT1WtrQGL775nfZhb6TDxdutdwT2k1SRRTXignWpY1yFfdzYsQeDewUm6REBjNfqoDBjEGpkABancrHWe7",
  "key24": "2AFwGf37DKXbCrKxfjdyU1QdHkBoMFgEYWwZn3nYrWxu6LDMpwmx3dsSjqNKZ3qUA5oLy2MbR34kZ85BNW435Aqf",
  "key25": "5HDwhhmUKLbhbbvCdLnYT8uSKZtEbe3bJ1uadv9d92mEbcLQAu3A3RXQ9su1VRAbRnVK2r6EZx2ZEpvWFjfiNquM",
  "key26": "3nKtFgSAMNypz7Mg3bhgrvzkPnexSYddzV4eAFZrtP1BzdbyUrHvXEu37g6tz6CQNbrj9RjXXo4Qa3kgjf6s4Mmp",
  "key27": "3mYtZBTyurbygNVMUQuJA5biPdwxZq6ErzT96ciVzWJDn2FZUvZyq3bqoaxA7XKidnJEws9xoTYbx3HCKz6mfyhW",
  "key28": "3S5PbgJTcb4B1ni6k7dMhJouWbo9acfcehHUg6s4tpueaDCFcr2Ec2TNfexX6VFgtDKhRqzWJJ1CpJwYcke4Fbjd",
  "key29": "q6A63fMC81rkG467LcJnYnZ518jsTDt2jpod3tznysN5RFxPfymv93JZssorAvuSvqFnsjiL9aCUYYMh1iSG3vS",
  "key30": "4BPbNXswUMyXoYB1QtiZn8e4B6wSbe6K371G7xRnCyGXSLnf8KnjUVJdUGcFUzMWtkiYo1SH6XkwE6Ez4LWTLUqk",
  "key31": "5iJ7T4kWMSLiLBHtW5R7AVQTV473dycUirtVsboMV4vbdHxQYMFDqyUJiHfktB27SFMJAwoPQjfjCUwzUfhxtvYz",
  "key32": "EsPkkZZxaHfLhhUFWRF6E2PQ3Df6oRB7qT5jXkSkyfU3yaKbLXwJrvdyyBYjbQaeoDmEXcdYZHqVvL2xLda4veP",
  "key33": "UJvVDYLJq2S7vCon6qBAm1saxvrfWhA9yGMd4h1Wuxsz3cY8bDdYGphwWrk3Gkk96iNP8Qe4rWMdtwSWXnXbdXU",
  "key34": "3MS1RQA7wc4KUi7sGhgyVcv6mpqMWvpytzm5AxeeDuAjLkrMT4Jpkwq4yjeQBA9o6Wq1chrKXzmPCwWFEq1T47Pr",
  "key35": "ghcSGcnZSShTLVADuVJsAcnfas9KAX8cNzXmAUPCiw8KKT6RitmJkQkdcUUoGYCMAw5kM2xFuXY2XYb6FQey9Jz",
  "key36": "32EfLxpwaPMaP9YEyFeAohomDafWC6F92h3V8L231cTucYuuoAYUiyejp1xyvmHe9u8QxJRwnZSLioPGs1vowpiT"
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
