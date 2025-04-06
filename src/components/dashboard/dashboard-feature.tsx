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
    "2Qwzt59n9e23kdAKFqgEov5ZZ2r5qfPYt83PvbBKm35NAfiX2Ra9ddku7KKSQr3Zhjb3LSgQKy8BtebcZnrzRLqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zp2vSQ6f2zKbg3zwnbqp6qSFkQtzXhvUrovA6S43AhDQLL7Q3gYJ6FBQUgdbeVg6KzPziMnLZbLq6fShRnnc6ER",
  "key1": "3UWyRC6SwxuuiHrW7h44D2JniLt4DBBH7BcPMA8Ps6SZKntnzhS9JsE3dC6Nov8ECbUERpuUpjtUMLoyQnkh8yAv",
  "key2": "2KLQq5Bi1eDozQJiKmBy72UTRiCxZTqGJ55aKUWfyFG3zDNEmYHPtbUHDEugw1qeR1N8ptYiffWJutRZB4HBxtx7",
  "key3": "4CVRnBiK9fVbRRtX79eMi25h7T2q2rkBJSaTjQx2JNobK8UdQBffDQcB3rgUDwRCoHEGDwxHAX44Sgkrsy6pmsuH",
  "key4": "2vPFaR4XCKwkT5ZN1rmF2ZyJGSqV2fq2RBw6TAzCe42qWBiiK28xVx85u56UWJRsaLNqN4ppjwbVk8qsfkP3qyRb",
  "key5": "184LkAsRj1TMpTCZGvnvkDS5QNxbnYzzvdSyuZPRXNeWk54JrZFvLZ9iYAQ7jebAygSkdGokTJc22e4NBzSDF6R",
  "key6": "5eiCEbQSCcbG9ttiFSYmjfaWWzGn3Qwv3K4AQeqKNoBk7hJ46uASD9hN7ndwHNU9uwkFmuB7eDZ8EAaH3ZukJWjf",
  "key7": "3KAHpJB2ZnS6PgfBBCKHuWhSYGbx2D24aVdggx6DpGjcGDLKbhFXfvUtbn7APvj3Bsf6uZfhywqT6bbZhSjuAgF9",
  "key8": "4WBSmyvPWphkf1uMRjcRQqBWvuq3FuX5w47JbGoRoHTqAzBmXLDEWBhzujdrpHEbbz8VrtKxFokussX6w21gnRCV",
  "key9": "3ntxjdX5c752Gy4kHvdLd11FgpVTyVQzCEnSyUNspWgpgA51FPVAwtLMMSx3CMqucnuRbVM1XwmHhjs9K4VvYypp",
  "key10": "4ipPUtqJXwjYLqYyvoDd7QdWBeh3y5xWWbFth7Ae1sJ6vw7nKzAQmzHqiigNhoYoD6nanZokPRTAHJgZY2X1HPSM",
  "key11": "2aArhH55YXjNpWgYHYW1xHUMqAwTXWNr8yA9b3GMRYveKYGDeFuZaNs3n2dDyr5XZNcyPgnmu6DnD8LDjXiXDxXk",
  "key12": "5azjCdt5senEumaZ9wnfcqYqxSxhoPCbqAJHpsFKLVaF2q2uou14qp9rhXiBmqn4ZtYo3caasxoJxaY2Eun3hp9P",
  "key13": "3JmigPqxyVksJopMm6LAdty4WB5zwdzcyA2N9GYU9reYPYA7rWwBv9g4noF4ZEsDkyiutaBJEDKsRCBQbkZjdVap",
  "key14": "4hA6ExiPgee2wnSNEC6gG5Vuq42fL9WMLqUknE6mpsH64HSjsPdjUUC8jGhU6Kkktujxkm1W4WybmfYJ6e5rwB11",
  "key15": "3Egs8aXALXYbQMgk2STZNdrCNW6dcc9gVHuRyD2anwN32yhpMDGjiYx2JnjGSY3K8NkPTmDUvHtW9DHgi9bCQHdK",
  "key16": "5ZoLqFNqHBVzETdEwoei4HsgL4hiUvWZ2HmibHaq7ifm8UbW1qRY4E1iZLgFRUV5ZnX5YTgnRkHKWx11DY8g6rTC",
  "key17": "4qsNSqGUb7cQHVZRdiRGGCGSto4TiqvrWtYEg3t2BiDqV8vi6RpeH4Z4mGD6vM7k6ttBRv5VRXutwFs2ciRZmuyh",
  "key18": "582fgyKRb4y4aJCfJt559tr42ix1fw9eq9Qj6MhvWndDa9sFZXDRusesqrNwa5supBvaNkgG2iXRbff2cNXrZokZ",
  "key19": "3FJa6BDQFrTTh2H3t3L5ALHzRPV6Nf8bTBjcmhQ4iWqJF6WV7GZv6fRQCwZqti33Z3Ehaj7pQC2aMmvFLJvXPy8N",
  "key20": "5zoa2NtqkQMAab8CftveYugPeFLgA7z5smxxcRmJXhQYKBpwSySRtTY9eKBpgC6mcPcbCaqYDCPxZJkSKc6FkFDc",
  "key21": "3D3q1mXKq4uCPwVSicmn3UYbvCqWknkNjVvU9G2rfhU1S75kQiJfoYPe3cC37c4L4oQQReQFcwno8YFQ4EiKAo3J",
  "key22": "5a3z7x2TDRfqKX4MeDXW64g4pVG27ZDz2Zu6yBrQ5GgNMxcyPboqtbfNWDUxJT1ny5aHrCVr3S1ugaxAmsS6df8Z",
  "key23": "4Ss2KfySjgELhFP7ECyLWrp6rS58ECSe5NX2yQu5c2ZRRruBPv9xexGyHghEEZUWfbA6zzRddJvhQoN9gsBbARBk",
  "key24": "31yj1VsBxiizzsBSiDgQBS8CWGDt9WUXa9JYUCVjWhExkPnkFjizEqdtiCk4GVSm6QXENQWs2zqxxmhmZj37dKbf",
  "key25": "4UHwAFzi1TPpuwSU6jwhBmeYDj4r9JPbn41MdGPQasAgiwhWASed6R74Rd622PhN1FT4VXLm1Bt7UGUfgNJ8FCdC",
  "key26": "AUEYGJFrseTBpakngy3vqBSJsbTL31vUM9ECqbgnynQiddQBgz1byUNrRRUhLNWMfwQZHsY6AeBH64qmrvat9XE",
  "key27": "3HkeDEmncugcKmBQJge3ARnr5rJA9rGU7naVMdVTohxrneZD3XqrDeNw3zyqSDe7XEYKJmG4jXirf89RwMzQCZ2r",
  "key28": "3BRefPoGd95edUZGsGRJmxyCGNMt9bfUpQnDFPgAvRdRJQvfwxgtbW8CQ4wvhVHLWN3DCgDi5smxPq6Wydrdk7Eq",
  "key29": "4f5v52N4WZUX6SCXrfwm3hJGXTGvPg1WQi2y8u8g7AjubnaqWNffaueHgxC6p92Qz3bFhZ5s6i6gdNhSfr8bX9JP",
  "key30": "43bnSJASBUfTp5j4L8rLNQwSpWD8zSDEGDdmQgdsE744zSQVfjaWxarPQA5MeHas4tdoEk8gU2tMo5ZFGqZP3AnA",
  "key31": "2h8h7XBYfQ88UmScNEtqKE7FZ72mzeNfKH2kEdEceoTQNVBtxyxwwKw5XyRqLKS62oX7z3BqpEJAFmW1gwttKgUf"
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
