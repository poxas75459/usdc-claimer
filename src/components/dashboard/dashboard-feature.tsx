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
    "2EwFtFqLrSajGAB8nmSmx83SwhPGpbaWd9kKTRsteGS9mEmuEaGv25qhFrMFxFNQtvzgGYMphJ4uyAEpu3gPvnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6yj8cNETxHmEvqCGoEudapDfzyhM4SC5nRy43TFuYVjcYpbSvNsT2YVpJ7PpYnqynzpsdPtcsj6gY72f6e4pX1",
  "key1": "35aSUPsD86JJ4hR5JiQxzYT2vkebRQmtPT6rVLkjGxS1FutvvJfYwXqpKtKveY9bTFRbBAFF9b7WP2m36qycYfqY",
  "key2": "22F1ZTBwdsRzeXkNdn1bpohRzFXzyAqa1jKMuTcSYmPyxvtsiPvg9N5mChhMFK1LRSYTArxcHfsB6v6PYC7ZFZby",
  "key3": "5o32kCHLg9YLBWpVWmqEpCVn6WkNtg2XQWKpprBuWpSZmfqdYJcjQZ1a8X4AAizAHCdpHCASfPc1v8RhdKTAxSqJ",
  "key4": "3Vum2RH6hgqTXQypESorWjhCXTZXbcSMY8FnG5z5d2JsX5e9dPQrWr6KLHpCzidJCAQJVNWrycFPfvSparvGG9rc",
  "key5": "5q7R5Kjqa89iBVGQbkm86rvd1dsJha1sMsgWtNDipw4FB4GUAgB7SzdLbS3aDQVZJZJHmhvoP4o7p7bucZRbvLUV",
  "key6": "36K83hWkQk2VJMConiRbLZnNC7MLyUz6t9PAygaeJLe6oCGGwwpH3MybV44Lr8FcAsMenjx7QQj2LwPDtp2bPg5Z",
  "key7": "4AN4V9o1H2e44oY6YFFp3mDkdhYZzgq4wdMQ5bRpxNz9JQsRzmmYvozoqcREo5rkAGCRTLFLX8yYzUpUtfBsRa2C",
  "key8": "tx3eBQa2w4ebYvufBdg8vhkQqiXFcKguyscFUAWcpTYgDTZvK1h46SKrawjSxZESC9Q88iemBSByHSRaHWus1s9",
  "key9": "5rGYY3EcWAEqZzMcjZnLzg2kLz8vnnRex4Go5sPqoFPWo1b6gV6NJsVGGGxDX8DJ6s2yB7jvtAb1KA4ENbFwNvjF",
  "key10": "X2gxkJ3QTxyTMVS45b24EMj4JiGQjg9enskp5YQTn71TxYWgR4HPj8VMaw7Ke15Byd3UkL8dyLqV33VkPYRi2xr",
  "key11": "3VCAuGrZ98emqB7i7AkvhNaiUQw6YFfR6RGzZiVeJna4QkxnSwx5C49jxh2tdfjAAcciA2Ycaw3J2XXSNhLZfGse",
  "key12": "4PaCAww2DhogxaUxqinSRPxN6CL2c9zoEG3JJHBAXmfYSUXkdSSfR9ZToLy3zvM84jZ298D4fTUsKV21Gsd6dVkN",
  "key13": "5AY93wBCj8FAdztv1xYTqSdhmJ43XnVNnkMFcjBubMe8HadZJvFiGeqeTG37hJgSNp7UE795KpNz7r64xajArbeH",
  "key14": "4ouDJLWkoQhwohZNUpC3safFJ4tg4XrZjXgN6N5y4BgBiVHozgppUEyKueWd1VGEMUb3F6TuwT2iSqhV3NmsvNR3",
  "key15": "2EPLyzQD3ajYEZhzpEf3T97Jr6yVviw1LofrNLSD3FBjKfeJGbNYLgFWZPPvvp1ipkjX1DRUp49qf1peHnfQAXet",
  "key16": "4iDAYbSoFcU4sSHzLo3nJBU6K34rzF6RW2axk3BB4odmqpHBiLyNo48qqoaL8WZC1qXPyjp7znP2HR6zgeYa7gQs",
  "key17": "2R14fsEdCuuEzdcsTbhmV9QxKdiLHwBijvHZwVg6vsLiQGPpp4hSSVrK8X88QhdMtE8R6KjsXpkpvPSZDgxsbzgy",
  "key18": "5sPJ2QesPEtFstBVVncGXEo3UEYnvThXEPwPfmbc45jHgajacBRqdqBNx4QgyhiKbvSr1bpFLU7LZKqFob8P3Wpo",
  "key19": "4jtYgtL8sei2WVj4cEfUMH7ji1tkivAv17BcGUDbhi12qpqVSpakVy1BEpnwQLfMuCPuXGZWnXQ5jTbAiVNaPhNH",
  "key20": "5gF4kRvTTr3y3EBuLw8MkmpxhrgjU6FecoqsQd75C3fK5ftSh7jy2T9gsisiRAyK1gKXQF53KwSudotShSHPcXaD",
  "key21": "3YVTUixd4d5tvKQ9H3gzeVPvb7UjKZTUPRMqNiXSEoH65tXsMJNjWLDz1RonXBKQoU7t7KbjQBseQvEziKSqwEqV",
  "key22": "2JM9pecSRoMVvoDPXSdb5uZTJG5Y8fWi259b25BZN92zriQPBqz37pBgvxARDcsD5SprjAyNgftoqEzAYsayWMwA",
  "key23": "15tguKJdrydnsFW8pjzGubja1rcs7Fh8dvpVYFPsLPStuZ1jUZgB74DZWvznQy5cyakMHvAZyQ6z7wTPyqwnTUm",
  "key24": "4MrD49rTAGJj62PCToj4fE1N8EiCDmxTfWRtAcuucB2QuHZ1d45cvBGZ7gdpLcSJgVJDMAyKwP6ES6giFJUPjC3W",
  "key25": "3YntpHkbnyFT79fDXGXzXUwh84jecr6EHeUe8UZUtYssfkpitfKduWBzyZTouEQcChbN11tYryq9WEUoiGyDoCYp",
  "key26": "37fnDWvanoTCsK7JqLmrYGWLwjU8iUbPeR2pASSGup8XVKN5L15HcVBuoYugPSkVKk7hbDGqshYpwe36a5CeGq82",
  "key27": "2Kkgnk7xXioZeF7gtREiEhtHCG5xPQ5y49WkjPgDpyBUykKMUYFQkZmezxMVWXPu2pqB66123DvNSk3GGowHQhwk",
  "key28": "3nh1E7JMzYGZDBxzQRBrkLUMyDE9XxY6nxgRHbwdeFyA9QarKVwx6LkgwrUKVuyMS3tfL6YJdTw9ZoHhsZzfghRH",
  "key29": "4HdV2MYdQigBBrx1MLqBFZ21nB1Q5JM7MSPMT9oYsDAsKD2kkeME78DUGBvDxauxRobPHHcun4PNi1aKW5n9Qgjh",
  "key30": "2qKcnpTkav81bQBinMzWL52JFjRxqUnArPSpqjpGYbhTKyMDGJBe37YcZzQ2SDtCUmsewEhSnLBFrYfTn7JhBH3K",
  "key31": "1fYM89u5PtKRs5SeQcFv52YNAKTCQUrTJU7Sb8WQiKpV5DQ5jLJsthsYo8bQigZNn9RBSTq8hjDRDkGJ68G48dC",
  "key32": "3N6QwtbADhyAZ95TmbE44wbu4HvDQTCdjoMrQXQKzAFm45eRpY4yFL67mst12RPyjPDgL8YgTCosSjXmcBEexNoH",
  "key33": "5C2hoR8CkX5ShfMwNeQ8K88GxYMYCUpT8ZqZQXYRACVSFFzodbVQN9eVk2EEvJqf8kZvSdxjwtQcDzjwVZPBLUcp",
  "key34": "377jZfiX75honT5nhsM7JvX4zuNjrRaVBG2q5uX1s8DArHvTihwPMmzeZG8Dvr4DgRyzp3q8vQXoGky3EBemWEwM",
  "key35": "5NFQD6jKDyBMhKNBbMSUt2Pb1RZNoJLVNYy6si1QbPMTZwFyVWH5eLKjFf9WJUv4MyncbgRsAvRc33x4DfpJ6ftG",
  "key36": "KSHK2wmk7GtWV67FToekcHqdxTQDFFCnruPNka6jhcHtpp6joownMpbvEuaCLyGed7HT57PaM7spb1nuLwG74wz",
  "key37": "5meQiRviEzYdBEo7dE1aDLNyzkUtvJD9Qnq8KxWPddjhowpjGREkmCFu2GeQhf3tbjpSyxSdUwWw4E391F1sHvne",
  "key38": "5Kg51ECbxAigbLK1NT215Wyeowpk3ZVh4a6NMuSRnCMsiGUwLYx19gwkkx29tEAa9kJ1J1xWJatr6Cj7cenrGAnw",
  "key39": "3DnsUtYgih2LscaN9UAavdLrPkdSBiaLJoK8eYo5UEoaRM7BLDySVgnZG1UZNf45CrfQQeXUgVb5KvUTXX4WS9V1",
  "key40": "3yqxTdogo3UyH3LudaLhgrpUPMzwhqaMKNYQioBzofRckTHmm7bHhUgK72ySzzJqiy8Gq62GQAQvcw9uUKyErRL",
  "key41": "outVBVAerBbwk3pKj6wtfc69vX2jGfoHJAEUgtbRfx7SLe7YG3xwmASxioJKiTjDfPyQZicSMotycQLyyH5Wvnm",
  "key42": "3dH87MisTM86Ljg7Q9BWVbznHC7UHY3stXDc4WGbkdJPrZxvSSvqyxaW1CrZabDi6zoUPjSNy6suntg5gkubC8UP",
  "key43": "4o1YEMkxYpKA3myGUpirkFyRXuJCq7wAj2tnMdtEwwWh2h8phg9ZnLST4FY88XLKoEy2dcuYmyP8pJeFKRqn8oLF",
  "key44": "X3gjvAffwSCoQXwRuoKNDpq4dxZ9F29QKfL9Rm4bVEGAKejkjS4vHaCrvjkhA4LKqEbdEvbJNbCgLFK1yyEBQkh",
  "key45": "5eh9VQP6ix7V6vgmx5gs9rAUyq8aJgH3CBf8nuUWD3F7DWNCJz4qrrb46obtCdQvMM4EhyKMxvX7RdgSeeTTRafv",
  "key46": "4tvjbWb1yER8UxfQRwtXGhDrTfEJfHu6TEccW4VuobjLTJa7KB6wA62k3bZVTMjuD8yYN28iSFk6m8bSFVBEEFc5",
  "key47": "3srNmt5A5bdPhRGys3ikHdhHyvQjbb3vb13rNVGpkFMF5myVeBeboLw9LK4NMXTb4WxyDiJZ5t7ydeEKEk581N7P",
  "key48": "1qUqzLZiBnchanAd7FRMXxdm5PxB4ZyRCmdGRVNrVTYEHqyXpCqq6MYTfaWNPpbdoELgv91HdhnGG7MvQP7MrWB"
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
