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
    "4CFDtYvto3MQ6MpGJJJ4uYbG5oLbXTpi4EvsCVMfVMvsKHwFtWrRUdWm9G2da1kkFV9GASqZo8tTiChiLRnGqSvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qpDXnBVWzHU3Gi6girbbd93vojMACJwBoNcYyXSCFbc6emgthFU22q3KoPSK7vqkzuybsDARnrgQphzU58MLxey",
  "key1": "5G13ugRe6aD98wTAoa2mELEnCP9hoUEdCqihoei4kHWn3iK6AFhT6DRYg2JZPkxQBxpnsYgawcmTybodszuRWidF",
  "key2": "53jjKY1VPdUJHkw5rEiYjhkwXhQ9YoCy8i3oRWcw3ErBbaSEkyF1nLKxQY6V5PB76ecY3jieKo9Rr6Abo3PvC2Dc",
  "key3": "51bh3fZ7FVcwipPyqogHHQJYgNY4CHctZSKDzskw8o2KHni2bFi3wQuE6bZD8DZkNbriu8KbyvTFYZGJ1qcEK8iH",
  "key4": "2G1QjrWXvrPv7wYxSUMQwjFoY96x1tMVA4eZzVgKaq5qeJUqtanogfmF8ApnXiuKcnahErp3MmomGBKfMCdczVvF",
  "key5": "35CbNagEA4ir3cswiUKDCg6vmtCwUeqbSv6VFJE1Y7k5mwsE5TVU9UfZ6NC1jP7unte4JxfAZuTo9UVxo3xM4gyj",
  "key6": "5SaLVKTiT8rm1FZtqkk8rcrQNA2VRXjiy15SqRt6N8NrVY8UzhmjsvYMF1oVkQ3dqpTcv3oy5PpcZURbYrmR4CP3",
  "key7": "4qEzTXGEjyvCXLnwXQkprscEUkG9bn2jgQ4jtt9RA95YXaVrJswD9rnDw4kRTT9FcizRVtVrodPrsDDUsEdkkCP8",
  "key8": "5Yf4rdfwiKhBSGbug6vPxPVK4uYe2c3JxpSgVodubHk7fcuPVToysuPqNTJ9PFVZiGDsFd4AxZS8Y1M9s8aQHRU3",
  "key9": "2qANfro98j1MKABwLVBRkEjN4765hPRQS5uQCSgZcBYBF7ghzKriNyMTSZYkNr9fekGegwXgQnwuSnxNBp3pCeSa",
  "key10": "49y8o5RjSes5CvdJt9pWwawWwfSRQYv4mVNGBLmXV91RMixYZweCeevSxjB1NW61megzujY53NXjLQne9pkr9QSd",
  "key11": "NGXi2XoKFAtuUupUmsvFAEzajmRVY6UWLUhEBGXFHncvSTRQN9NKqDKgi2fJSC8kjSjMKXRWX11XyQ2uuUNFjPJ",
  "key12": "5rHXPhC73QfqPxHrdnHcrSAGGpAmANpSFo43WNgBSL3Vxzj9gy3QPgvVWhcQ6Pohg71skcAsBZVJEhFYMVGRJwcK",
  "key13": "3BrMxnsEwB3FyUdgKP7JDZ51rmkwqJAxZ7scsCSm48mqycsuyiGN91QvbgxsHpvkNekZ2NAqYFWsSADttTPfvd6U",
  "key14": "3vj4ru8H871gcXGKP1k4TEoFL7j7xE6HDZTtYhinEiQD9g7TfZBXzWAWB6rvPtNuggW8WAYfdVcvMa9Z44y6dEAd",
  "key15": "2hJJh3RRrmxtCYimti1TpgtMGszZkQKNzspGGSRCmVbt6oEaF7Z7idjsSPynQvx9CvkEPFFhm1hdv4w9P4cww1cG",
  "key16": "22Ym8cRhAYkQgjCU9e9rQGfifJVJZC6j36DvtFfqjjHhKzKWfkgQkWmgZatkgbtVJz48VvW2LdLA7YzvGhzZgTxH",
  "key17": "3Z5NnnuYLioQi77CetM4dgdGnMD2icNorjFgE3Feb2Q94HY89dTUx36VDaLXtFkTboMAStbPr7s1sGGzfMJwFxeD",
  "key18": "3gQZypHi5oKKusDSZkW8LjSpURNHbxuBVBEunxBXtG2ozX6PUnoifv2R3oRTttNZ7frDcFe5sLiYNrC4iNSijz5X",
  "key19": "5JT88F5rp7xBVFzAHWaUmdYcA6Gphj1kADqcRtB6TXH5mDer1BvoPovy4TM6iNi2tXLQi8VqXJkbakQE4BwvijRj",
  "key20": "4CxeDvLrQDuZv3bcf379XCyXm5ZXaYG8eub9YXu6WGCUyiDpL5yP9jTbhBpGGgatX9h7gXtNRDSb8pV5XZWZ2t4d",
  "key21": "5frzEK5mATZK6DQVUJBZDp61GtCrCj35e3qSzbps4G7LXxV4jfF9VkdYaPrfgb6GXYP3DYtk7NZAZfkHqvByfB5x",
  "key22": "2M1kAUskS4cWsdgVAHAckEoBhZd1dRZ57LU8Zaf8NhDepEMrwTHUiG2zJcH1V4xwbPBtReu7QvURsqjRme38dxEZ",
  "key23": "5KcUSBRQ3mqsmALZW273HR4BEcKHGoQMh7an4QE8ihA5eBJsccmRtcJNKAK3NRiavhWedQGXdsZL7Y4ZimFcRDRu",
  "key24": "5h8CPhBrDhJpPJvpSBdQTocyqi5zydWcTC3Ac7AiDJR7cpEnNbuRvGfw49CBsivLdy3Bti69n8fzMzdc4CpPMF1Z",
  "key25": "42Qh1XkgCAxYEV9ut361qiXQA4SLrJkhCgN3fkdxdeFPLeQXs8NhBDPQYTGodGk3wAwqGyULFNz2JuzZoA5xstyr",
  "key26": "3QsMyBtfp4M4VSu2eoLKTgDv2DqET5bkNfdmN8KQGX1xHZBHfxSRdJrD319wSuhq1q9Uctyxdr8Pk6ZsuunRHKYp",
  "key27": "5Y9rB8F2Psu2usAhZSvMQjqvHP76SvTDUyd52jbcRMBZMjr32P1sq93WtUN6mcCiEFvkuycwJVzhkMaELYNNU3PT",
  "key28": "MmarMJmgbJ3mfATnZKevaRK4wpX4fZrZBhTtJmtHDo12wg9meMrAa4PY4UPwJDfGjcdPEMz1k1Cr8GEPjT3S6Nv",
  "key29": "3yWRiUYXExVgUj8MsUwqDFZbb1zNSmJCLhpLCYntRDargj5xjVaRneYrEz1Moxhs98oH39QBXzhMkYKLwgZbQNX",
  "key30": "4ahuCSdgAFQSKZUauyS69o1jJwdDCwgQZZ7RwPf5JxcJygExNFSSi5q7edEGus59ZFRuPiyG3m4qVC6js3638Knf",
  "key31": "5Q6niMBWmTpj98sRQTerYGvDvkyvBdH32tCc1a7ko4esYnwZ6WpY18mmE41gdGwec9SPwWeoBdEg1sfmk4JdRzHs",
  "key32": "3h3mHqqbLSYXYK2iP1WKAkfeGcvTNbrYuUFLVqjEAsqw6sXkmNW6TcvBs7XCnHEJRRhpTfHdhpcPDp4yqKCmLLYQ",
  "key33": "2kMryUWZ6N9VijkVUdztFUTuJzfBepefiGYxCKQgJCzQqzmj6wXxfmjtRPJfGEVwuCGy3mPn3hvJMqrYWjcBy7DD",
  "key34": "43myDGr4rqEJ8GqSUV2pp7JnWKM7BUBAd7azZEE6L3t6HSP2TCJ2pNRNuQGP35DihxEFfyVDeiKLqpZfyGJTCRyf",
  "key35": "4iRLMHQY2twhAk7rBHgA61YfHmvttby349DiPhUt5mEN1gjnAnGqsrp9dUasevJEHCmCbL8Vzqn3yEbWVyqygTaC"
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
