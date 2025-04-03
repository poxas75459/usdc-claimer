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
    "621mhKcmhMNyvr7S3fgJUThueDA4JdjK6qYZXeAAZf87fqVW3gEd6j82x8BxrPt8DcPhdfpE4k9LhdxEpKPbdSiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55eB1vYt8uJatcE3WhoipbTJe2gXMEP4VKcxK8ahkauRfGtBuztygDWbq2M157vd7fj3c5BFwD35nroPheHV8M5T",
  "key1": "3u1KSdSikhvtJHW7zxv8DYgFyfTmXGMh2rHGppSQeLovnS7GBN8khcjtrMT7RBZtPwGHe7Wviu1oyF47zwnBaiZ2",
  "key2": "ycXGhBcraNeWQb5C2Po8HdW2eqFXQ827U5m2zQkGnudXRKph3r8rLrQNZqt7Y1dSJCgR9WH11Zutnupt73foNH7",
  "key3": "4CW3GJnb6FbUVJnbQGCQkgqVGgjvzvjAw4om3sV6wwUgbfFs1KtHU8miGcT1tZxJTb3icUQeEAqie8Dt8Jq1dMoX",
  "key4": "x3c4rjy6iYgGHt4a15GJcS3Staxqb212i53pCvURD34tdvvrcJ4xdPcECF3Rwb2NkiR4cPCxNbMRKnU2vsAbSNH",
  "key5": "4aKzraxgtQ7kiJV8g2CN3hdWECsGUwgwNxWPYEJvK4FsNq8C3NbS4g4dHxEntfyiM9Hw8jbeMWeNu89Ysg5nA1rF",
  "key6": "dRrq6zNyuvGv6xbyZnkmwUkcuwEWuYPQGcgRZaEWknwVM17vwT2QTjAbULS1TxF1gC6rEemcLQi8Z2PQrQupeDX",
  "key7": "4qzC4JK91qg166EkukuvGbF44zp3J493ZogtqWW1YyTPrHTcM2cBzbUQSpxCZP7GXy1PEQDU2ddABUfyQ8uUMXwk",
  "key8": "43TZBbm9ikzEeY6ckkSfS82s1iewTFNGZWU6owryK7g7hrCjSVRbVYJd1kzaS69hr5AFbxR6FVof1kTcCVJSkSnG",
  "key9": "4MWXbtaYf3emrSViAUwEWASR8tkx7xRHyY2w8jcMBhprMUwnJ6yFnMZj2thVDRnyNuZTLGKkx4anRPHBgmBd3vBv",
  "key10": "43RB4e7JJfLKuoMK44hjfdcHzAPeP5UtmM5EEUcyTLhLCGDLMWJz7w7qmy4Nhbpt656tTNFXs1ZsHhzK5ATMAWS6",
  "key11": "bJCZq6CjCgL2ueg6r3uLBtL2AQTnhrKhgthCCypAr1pVAbhuQLTNUoGLmD6aNSwRA8RsrG2BNzwNipYipMWrpKF",
  "key12": "iShdFizVd6Fa3KUBRjKWQZQjvkmDPbhLrnWwJnsySEqWKKBJEoE2o8BaXjbLWKRUyC4oGLrePbWADZd15ic83ng",
  "key13": "2bwroogWq1c42J3g4YSDy9S9Fzspqm8VMLwKoy7fcscPEH8YZTA8i4S5XGpytuWEHSuzy4Pwg9E5vWXcYW2VmQKV",
  "key14": "4QwLq35wR86SGQcYnKvsj8QYkDhAxnFdH9wBxcS6H3B6DCP3XHe9aHbcD9zez1fVaMM3k6QsZFdS7g5RQ3F85gcD",
  "key15": "8TgfEveqTWCnk8peh5EJ2ECRPbksAT6qSVnDcXmhzbCSDN1fG2DQ5hpQbWJKi8UnQtZWLfA3ibKZ9yHtk5zKKiX",
  "key16": "5HWDDLZEAkkDmZc7r2zZLJSNp79P9boQm8MthkizE9eN6oDt88kUcMWFf8KP9YtNpUrB7gsi6EiuW1YHrPkGqwED",
  "key17": "2cSLnqDk55W1Py9prvxDQF4iFuL2Cp3zgssPUuP8Fjx7PPc1TVaoeNSgGbynBr5USfT4SXFThKAy2FRYpYiScpp9",
  "key18": "5LcMvTzWE5prKuLuSQDnZ7oCduU4KBNAzBwrFMrwA4DPFE8pA5QUfrRKe7bPya5qtiQuEXHmpWWvxmEoy8wERkFo",
  "key19": "5L4xcm2u7uvsPeZ7NfsyVzC442dm7nBhB5grQyHgiF6XUpmpHUX5qFuPzZQDWLBytZarLigWackQyN7Q1EaW2fbL",
  "key20": "3vietNEXZqzYfhb2CsmSi9BPXprocxEwQQ8Sb71SB9URpeH4SfxwG9bqjdpvvpxFzeiNZBQkvXQvKivatFsydcXe",
  "key21": "5B4PhWjr6BfD84ysgry3CcgKU7vBPb2DTjYoL7zQgrmkg6hkVvTtuNzXKE6c4KnbZJiZkrahtB2FbXwUg6doBM8f",
  "key22": "2yZcicsD71xyFpbryFWwX4yEZMDZF7xZhHRbhYygwGXA8nhADjYgeyMoHjcfz52W82ahRwNkdKq82e6xQmCdT6pU",
  "key23": "5z1euM4VtvBimf9ZZVUhhu6ZUkfzynuYLzsD5JmNxHUXU35qNhgH6GjXimfqanJdFowrQPCf58QvZqwPsyXaz7j9",
  "key24": "fKh3KwUxjMk933bQanaG2B1vmrzEs6q5GpN2E8c5j298DDy7bdoZdpYGinrJD1JNHS4eK5PDiErkvVEM7qERds3",
  "key25": "3kuf9EBg5FHR4A8GS3BCzE553qCv2FLDaB4NrKaCx1Rsk1s6zoiKtduSACEvL16orBZJgcHkYPtxttgJb5VknjeP",
  "key26": "5PJBT7zv7b1riTkbA3Mrt69CGsrfZv6kH8GVLZFxTWxBAbsEqUx4CAYvBEGB2b822BucjTC7XJ3cctUD6jp7hMLs",
  "key27": "4MkPdkSTnAgoy74FN1PdXpc4AdikZr58wBmpwj4mNzHB3hLU2UBAbm5BrhPaXZQ9iL34i897Vz95dbnmeH1izFiq",
  "key28": "E1iUXrvXDyq9SzEjJNByuvoRpcWYy6vDnTVbhfqLoChqYdLgmeX1LrwRJqWYpGukKsnSfsk9gxxgoVwvrxQoHue"
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
