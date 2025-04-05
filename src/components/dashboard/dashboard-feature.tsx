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
    "2RHnSkj8DNYTJeHNQ2ZBnKWuQvH4xGeHcbu7NKKU3mQHiXLRbtMgXrvso4ZEhqCV4MRZdQmhQ3n4LfPwsWRE84cJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a22c3o6hp98HETpvRvFkVQkzp7sp8hiPqNiBrq17NwY16R8gYLEm6g7RdHgyNKXpp8AHvDHF7oMZWvA3cYsMoiv",
  "key1": "5taqfoeP5tgVMLcAp8uwf6rDDVBYYQ8CtqLZ4RNaRviuXppTWX6eZHQ84yqtevfWpgPsW5jaNJNfQPC2zkdbFyFK",
  "key2": "43pmhe7i6pFkRMvmBfjbXHYrXurkZibHpiDbJf61qSe7rR3zspDEcKUYt4ZC5V5WjEeKDdcBUR2BWBKFCZ5Wrw87",
  "key3": "YinDZSCJcnXnTisyHoM2m8UuRHYxeckbopTUZFksUxZWuRSNfggef6LzzRXANnazjeoAP7vHA7sUXRR5NzhyNxD",
  "key4": "38q99ueiV8qeCvFzTXxmmMHej8v4W2UtZYpw7vdVQ3zDGT4BnnBgnCo1GXAhkDAdJqgEWEZ9Fm6kmi1jeLZX8QD9",
  "key5": "zFxXNgYwLTV5bWu7EXbkNvHZd7iixTXzdzXT6opr5Qc8cKDuWiH5HktRDjzzNjReWCBXV7gWRirB2Zy8kq9hNGL",
  "key6": "2ggDEBvJmFLyXs6E372XgU8joPCdiR396nHkQVcJpXpzNDxgyu6bwtPEdF3f1UnSPEV8cSMoMFWuxmHpsQZdnQve",
  "key7": "4gs3c8YH4SvwCFhnbqGyK7S4B9ykKFuQCdt79RSvJM8vhgXBNjQgvDsPTTih5iGzLThL8bWdJZt2HAMWEtvFm2h8",
  "key8": "5ZvkEYt1xNuyhidn7AkD5wEXR2eDbT9KUDQJMEHrekX7xVAz5vmc968LPo9zbqtPgVVMpi16sFFfXWZs6NpEtiAb",
  "key9": "5yWSn8MDymaqZdCW1rgJeKZmBMVa5xmygYFwAmEARJ2kxo5hAfePSczf26ueNUjh5dZXXa13watKpxS3LhntotCt",
  "key10": "LeZgyRLnSJrqPvSiYU9uXzNnixXToprP4xvWBANybZ1G5vpocKSmz5ymzgpZeJoV8D5rQonVQm9a9NQeH7MSYHX",
  "key11": "5wLaKPVrCZFhx4duGeWy1LtrQz4owJZsApvHTz7AuDgBgaqLZFnFrpQkgn9JhCk4YkaXwD1jNabCF47K2AmS6b4W",
  "key12": "4UE9BhyXmoet6bLGXLFernnvyUPaht54D8EXY9sFH6ZNMqm3VuzshpY5xdB6dHHeuRkhX4CPaYWseJLZTe4sqVeM",
  "key13": "21BUdvBPM77d9f4sWNgH4mhr2AtXezPSbNLhgtNqspecSABpJ76bZih4XQ4mgcayQ2RgfcHzxTDfJH5ZhojoejSC",
  "key14": "T9eUqLseJjiJFm69XK49pLoYgAHzihWfWMa3ec46wN5zQbKkHFdarUM5FJWZWwZcrjrd67ig7w6aFVYqsH1YMjW",
  "key15": "26EnKSbviDYvyzud4QfLasfkDGuUCtAV2ZPFqFRwF8SzMLg1X9qgLvc2fcfNErNw8aRDsiPyQCyKKSknLHCm1SRK",
  "key16": "VtU7FmjAzC3K1JAo22faQp6Y9PvcZsntWh89DzYU7Vvv3JEWNUw8FD4hddamH5Yo5ay5QrrW3boUo1JjZMBpzGd",
  "key17": "2jexLJWuf3tALUxwytNLxHXhANX2trujSvdUL2nJCtDFBTqbYvdnHaaL2AN7Pu4aJMgE8mZwEPFgAEx1APao4px7",
  "key18": "2VLQoM48dFQ5q3nUoEJwARVrwRFJm8e2a3h3rJAVWfqYNC6twHyPASEfnrDAMYi4C85wiBAaYnqrbt72GHSCmdKd",
  "key19": "4YUcDd7p7ZYhsJWMUGhSHr8LpNVf7MBB8mTZNm92gLco5V6Qtgqn7vUnUcYwGoFo54y4BAD9XUzPmRSGgVaVgELg",
  "key20": "uog5mvwwoZLviqASXJQe9NYfhZ5Ghisz4AKMgRyeEBhTYYUzXSyQmPq9GR4XfQzj51Yz5BYWfGhhpkF5S26hGSn",
  "key21": "5kyLyH2fBmCrpPpo2yYL1xzD1ZhcAQkM1e8EeLY6UvKLoMWnyRYQc79FRUHx1eAfrQ6XS1wJhULJc6Aj1N5TtZVk",
  "key22": "3sAf1L6i2pDkQ81vQKCYpad94BEmTVYet9D6wcarCAU2Gn4pMFHJyeQa8fw65j5AFLAq9qEueraeqJxDgAiXb18D",
  "key23": "58X4WXjpysWWnHCuQBnSuUcauEugQ8SRUsNSrSiQDaDkLtQ2swG5GdpDASZXen5V7ivoU3iWvpj3NzWw6ijkn53T",
  "key24": "5VPkSgvBTwjUcBggvGvjeeYR3QSB6i9BBR3GkgiSsPJhwheKRx9ubf7xGMN8EEcbeXVMm1XMwHdUcN38NEZVKr3x",
  "key25": "4uNi6Z8LpsBwTQswoYtr38FtrMZg6wjZHtWodkEV7pvyFXhKbqJ9158U7UZgLAcwK8xj8cpjV24WiqQp4rRthJTu",
  "key26": "QFjxRu8o2Y3BJgEMewAHzrpMwNw9hNmKgYRAQmTf8in3eUowDdMjiUJo138SnFQvGa4BNeLdoYYrhBgTCBrhKc3",
  "key27": "3vTddgFyoB42vqP51J1XuMQQofNp6PUoeJWr1UUJFZhrzbrA5mQ7eKcEXXkSrJR8zGh5K1cTMwxCXRe2Q6GgooBZ"
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
