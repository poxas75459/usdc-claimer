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
    "5kGTs5tckQSCxKAZb3WykiXSqafFKXA1dzJuapaCgsDVgkFYNb1wWGb6984ujHQJUvK29BCrxVqwZU9o2Zndyz1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K257q5qbezyfGvVs6kvK1mSjMmbxfrrfWB3vL3Y8ZXDjJL7iHy1V7Q8fHp1NY1aGMmeyJhDNpYd23YmptvMRUp6",
  "key1": "4dHdFfq3UsxcHhjMkTDLapQrYiBPE1fTFUzkVjv9rNb5syzQb2XXfJFnBXNRAFWdFmewtWZ9ZpAxNE7tytT6tTyt",
  "key2": "sY4fJqov3UmpWi7Duu8jXgegkireGLbb3GKY1nJ51ntvrL9tk4zwMY7yecfz8kMgcDWcRVbinL21mrcsGhJ5uQ4",
  "key3": "JeTh5rSZGyiFUuL117h8pRFzUgokvmdwjYxt1qaAoiWNJnqV9UFTZmtbK56xRgv5otg8zxCzkPfPq9NoCiqwV4Z",
  "key4": "39UMCt2k47kpnd8aDBy5PuFwJVbPcWQQRYxv16kLbneM1SNtM1gBgyCTE6q7W5Vtf4hgtNNEExtRa6QzDPsPgY2Z",
  "key5": "EqjcQdfFcdJUYxSggVvq7PuhJhznUfpBD567YSbNWpV4hEEVZHM4isUUwFpd4wZ5rTBfGrHMp3tRPbdAtcPoWbq",
  "key6": "jiUysiUVv8y6WzKwifmAZTcyCRRxnddTs4e1hU7cMZSA96G7YeJf6JXyYSM5pn6h7CJ54LzvRXw41xNciDRUThF",
  "key7": "2gSgoVT2zfRX1MbofWryMVizvoDQEyqogmTtkkCvXpqKnLQApW31m7CnuVX8D97Ld41vzp2cvryVtD2NSvQfahM4",
  "key8": "4Fr5XkiL2WBD7Hbk2AAzFts37dVSmGdUiMNfu6Dr5BWbV8Sz3aoftDbWnqtNBqKc8XjYHAivwVkcjKMV8Ru3BNoy",
  "key9": "3UthVW6DkGvjcPwhUyPKM4CJ56hg3usKG3sjLPrcZUk6spxk996dDrQ2wTpM1uYPNmZrZCKttZRrsrMyFH34xfxe",
  "key10": "TYJ8kEX2YJ9hGai2BnioQXsFQm8KBoMeh2144V2J7dsvjPYLF6tMXebL2ESBF7HHGt3Jm8VS4jVh5i6JWuinEGz",
  "key11": "46Vp78CM8Jz5w82RsWPcmZyxvq2wZ9iWwUXvXwgXWnLqyJ8sUoxqwWYJP7XT2qFfvikFCeph5aVobTxxA81EtaGe",
  "key12": "2BBZyGwcnoHBhHAQHT5AqUtU34isbW7hKTvTVe7xecweM1mWtuyjs8GshUo5nNK3b33bAVHMATG9fUWQPM8JJg8j",
  "key13": "3VidgekCo5WpaN9QM75b3qMUWeycCnFK74J5CAzrD31kaPmbbWRtbKVxSy2P9C4tLobrkPujF8qLDGiCBqb14whe",
  "key14": "2sAEevYrmjj8EWnXav127JzRi1KWRhukeTuJXckKLRxc8vNqf9yoLaiQJY4oY2fJKMbQKjVnHVn5ECMtoua84BbA",
  "key15": "4gCZKmuevmP1yWH29oEry8Rd6eyMmFk6MiN9kdigedDXu9JuH7zE6MbPRmGDFUXtMHNtR2kvrkquDABPJ2JhU22z",
  "key16": "2MpchhRdAwbnAJGjKF8HgkZvqna5fngnSBBCgRdctoZJGyzG2Ry7HMXuUpBFbVyepruLbfmLa6Zsnt5LcNJLpRPm",
  "key17": "4HWWR1f5Sem7hqJCQgwcn5vbyu9fZLCArEAM6Y7x4g6gZBcXHfE3B4vkwirmddnSwwKEsDjv61wg1n7SZid5SnCw",
  "key18": "3Zp62sJGZQzjEyBDnUj71vfza1FFuB8yEJWxLmzGzbemyr83XGW3o2evFpAN8UsvUDcDNV418XMFcnZbjCqEkW4c",
  "key19": "5GjsXF8XoKddXyfYLhQuAoqNvGN5pv3AZ63kqAA1dePorDn6WZyUDfdgBSnZHuJUCnRBP9zHq2w1eCicPFzzk194",
  "key20": "2WGzcBx34GLoth2LCQvGvnJqHjxu9gwrcqpXjBNVDsYEmH1s25hUgwhXUSXM3GJa22VWzNcBzMAFBTcguBbhS7HX",
  "key21": "EtpeEQGnrmnEpduMr953r6zNxKCoqAYs6ZKTndykCCkZAuEFJvhv8ytRoWY56TB4pv4hLBF8Y3DYNGWbZaSR3hX",
  "key22": "3XveT6A4VYuAWFYHN18rC71VgFRHzyt2zSJzXa7M3Ht1tJbJmNKPn2Hfx8f5FYTyrdVbrkqSLE7paeHAgcnEXTTS",
  "key23": "2ef97RXJEqnDz7ip45uEo1KY9GhtwmzcfnEDoqYCbXgkQF7xFGUWzMhWuse2jrvrBjU6kup5waeS4MMStmCv3Twc",
  "key24": "4PAgXGSMQuJtRhuWLpcXQNCh1tdj1ioXqDr8EBiM9HFGCAng39hqGBN4KHpBKXTQjeCcPXXSp84YPBUCWQFRd7cb",
  "key25": "2TXmPoBJc1XxQbX7XAzpMeVkt22zrpHVhNW28gXn8DgYTRkXUvBXTMiMuvrWWJHdTqrqAba1a3azpvKzZDgbwztL",
  "key26": "2MK6w3qQtpzNX1itwUyuZ7xXduyDvRznQkNu8th1BkA4LvUZJYAVuWqdNWRn2hJK6WaHvaaKvQj1tt9F6JnYBPH4",
  "key27": "5AUmyA8dyg3oiMv46sq5vE1tJhK6HKid3L21JkFvZm3xRk4DA5QkpkYKUuaJSRnSxr8mbzyWLdu3ZWD1WKiAQpoU",
  "key28": "3haXChtvW2PwXp5e6E9R7hXWbYRF11JYfthNfT2TKBttEsAJZ5B96z32TqqRozebvb8KmGvuWiMq3vbzrcW1YY1C"
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
