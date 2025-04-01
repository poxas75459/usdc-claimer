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
    "5Y3xyvA6Bqd8x86mF5wCMR4uBfGX7j7tEioR7Z2eZQoQfKFWv8v3PEhipKDH4c6Z2axAMvrL7gDvAQ85Wwws3nQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpE5mqu4gxg2cUXQxGEZBqck9dyduR4T9TSzfK6baMHUq6gnuGwqxviDYHuEyCZ6LE2Qrre1LHwXjwXgdsH9g9K",
  "key1": "5cN9yT18MUW8YZMUkoLvkH9s6dyjSnsHMbKdffZkpNy4vyjQ53NFikdYkqTqjxtLu6s7TBaz1oaQsCGfZPohp1Yy",
  "key2": "5yPDW2zbYMEnmA4QWinaU9Tub3NuSMPjSp9qHBzMms8Yvyovtf64YHbJNjbcYk6cMXedD4C4wCGpP4PXEZLPiyZC",
  "key3": "2uLWJJpUFhUdBSZzZkNo31GozXotbHmAmbzS3Hg9hBsBTescvX6aFoSkornFnoBh6n3EXgFkTa8udvuBCm5X8Yya",
  "key4": "jNTSodnLqPD6uNy4zVFghmMpKhvjPE2C4rU3MoPB3XFK1nZWUbWtnh4RtsLyZZGDtGwXpgZGq7SYRCzNtBy7LEC",
  "key5": "4AAXGNxwSpi9Vw1tywE31jGrTJHohbMCxm7CC48N5KqbrFPT2V1tFtz3GLzNzipxkq3M68pMTegNP5pKptCMxENY",
  "key6": "3iRouZrBajXQBvxdiQuw4NDJ4HSbVFAEmJjWSriH2Ue2WG1DCE3nK2uLq84NEQxQCAHNVQgKPS9o2R8xycso7zu2",
  "key7": "faEhtum5QNdATji1Eucrotvt7Z49sE7GYDA41EEaQoJE51FBXE2PcAiL98DmKge41FF6Yb5rGqaM5RNxTUXkoZR",
  "key8": "2FwWsKn5tC3PZ4yts2xJGmWCjwcZbmZybEJfYnUHS2QkEzMhacJZJFwW9KugtpA39FV7FGvwiCGUzPZiUzYHQThu",
  "key9": "44PzVQNvviDM7rFQS1AZ6Y8cABNHWpfprdzVdtsm9VKot29R5F7MWXK6SgzfxczQ2xfbArxb3YSTEgXkii6kUWPj",
  "key10": "2LfGquQWaDG1oSwDmr5DLjhjjbkEFSF59yFd3HwtKWBnubpQaCzTutmSeyCcoHX35as4oN27ssfrRTqPJHJdZ5yx",
  "key11": "33tYxTcMdeBJ7xBpnsXUQhYv48eLY1H6zKCnX1gXAens25KsRsuUD5nP9rDp7p6ZkmrNNzb75gSGdsdS1S5xzYGt",
  "key12": "2GggKA3R8EymdozF4JPwKdxTnjPkx6LVYv7BXdzagt1XJ7AemZbHdnrBtP2veeaHjJwMB2N8MaaHMrbTXtLhtHt8",
  "key13": "35gHdAV5c5jpNKoxYdEKYqmeT2VjFumjtdWdWWqM8VSJRj1fF8Ks1P2TLhqgHESup8kt3EDZdqSH5rJFKHvEFx1U",
  "key14": "TzbNm11hfc46G13WS2vkjWxgf6BkKgAYqE58nmmmohCYhVL9ZtiUM9NMa9ehwAmVusoEtZceDPH9FTBNLJXhyui",
  "key15": "3McyTiREn9SptMMvcLvZWK8Ko3K1FeUnpbKdJGR5nVNbeQQ6M3vg5WRvcPCvb6HV6TqmFewWWZPRx7G3GZu7Epqx",
  "key16": "33GAqE2AVNU6Wv7F5kgqsNmog4XveuE8JHgGZ5eEn5hbAjz4dFRNb8iMjW45449dWrevcNSt7tsdBxg4G5amBJbW",
  "key17": "3XMyivja8jiELQRUhYaNCLKccYxtsdigHgfFaFjgK6evFGLGkJzCm49ZCpB32rVmBEapb4xLKKGiD63pU6kghFGZ",
  "key18": "2ALRv9P6AYtaapc6Utzi9WEG8TB2s9HEvwYrBy9iWzFkWYWEXoFZRwwrmdhkUbdcZFQBrfnUocUftHHybjEKhQgU",
  "key19": "5AyFvYqLPo1NYYxMAmbxEmgZfD2LUz82iJNtmw1G3VYdJZYcqLsfXdmSpdEQCFjPpXHF58ojKdyrfMHr6ZdbBDib",
  "key20": "49rg5vQW3K5btetMjQYdJJwSt6hutvNL8xpJNzMaUbvBqyGsTCC8TfTTGjHekg1bNmc6SBkEU4HQCDq4Q3jGx1Fb",
  "key21": "34NrC65G5u8SvbzL4f2bPd4YunLRULno9YTokWrjiPYBuaBUUY42wjCbXYXhz3tKY3Kp6Y2zMz1eKSkRLKcbKfMv",
  "key22": "9H6zi7FpFDoKR42vUWiFA5D8wN6VA1bf15nhCq3YHxiMwfWKnNUVerQaMVoKbiHu5tEQfLA4ngzxNBJxbeqVZAf",
  "key23": "Cu1qFk7kDDtgMA93gNKm5SBSUY9Nz3cnz7MRmJnkofmccFUAU3LnPXfVfEA9VDegnGFpFDeBowWaZsJSEcVYSq3",
  "key24": "8LcqmSbP6QVyRTDFsgZbV6XeGPtiYRmKTNowiC8bYyd5jWCys2bQLaKRpEHSoBx6xyUortBSsRvDfpynec7d96Y"
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
