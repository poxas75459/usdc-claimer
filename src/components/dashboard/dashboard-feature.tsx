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
    "4sdsMkzYyDYuXupBS8HtuYWqq2F7HMaSHzJkWCzm2rSmXRwtukDFGeRsaPWsQgKVsLu7b9ibaBFddJZNhbUXmrTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KV6PxaDT6VayozRhRM5SHigqgJuwKXH9oGJgkD9nB6y1q7ge2a2g2yYG6cybp9uuRxJv6LK4L4JyvgG5ueDpJ8X",
  "key1": "26mheA9iuBEdzSCfV9cD4H3jW31keJFiw4BWnQASpYya6nMq2a3Z3pTwF1jpd6yb7qnns159Lkbk9bRLQpGfUzxY",
  "key2": "4GqWehYoT8x43oQtShCpb8kg6iT5Nena2hESzYEhyRFskDmuZms3F9pRhXw4AGzp6DY9kTfw619gZd77YQJu9wQv",
  "key3": "4u3DhtWsEasxGtubpoGj4AAmYp8yU76ChpFj6kcVKSML3Mnn4q1UdPUkTxGAEbHjACWMZRXc26vTTB7df1cjuuhN",
  "key4": "5NkT4quEyBjnBnvFMptQePHGETr9cFJuaxMVCyFWqe99AcQnfT9KYjQxeSiWJgAiahBWMra2aEcWBPHVeYiyb3Ru",
  "key5": "3pEby4ozZTB9pyKwsn9xQ2KEGTzBMjvRzipt8EQQkXtbU3iC5PQxHKcpfZAe8xzMi9whSFkZR11gdqTxbanxkqs6",
  "key6": "erpgiwGetMngBjyZ6AK7LTzdfMDdNZnYQxibkZzEQBB3dmwSrgBjeLEs1ekEZZMktDJpYE5fqaK7BREgqb2Uk2A",
  "key7": "5gt1GbLKCwzS5uvAUGCHmmf7cnD4iazxqmr8Zk22jArT21r65JuEBdQZsoN4C4XxRZvGLF513rh2pvBXGvefGe27",
  "key8": "5acdc6kkPKARskVCiJVKDdEJRKjJCig6tSKegMQDN191ek7p7tB2zpbLFuDp9akwVyWoGderBBrKwShjE5TbR7fW",
  "key9": "3LdW7nHcvYpGPqZ6jXi1p1iM3AqsUMuWKKzfY9JSwrvLtLGJL2Bvy5XH18n5JvHBYU1SPd2QUsE5XWD3DWSMEJ1u",
  "key10": "43Hxaf8KJ54z9pwjrk51W7PManWwMJzxNZESb8jvDvVPJQWREDg4iqPzTjhW1ye4bDCwydNaGCvFY9D2E9YPppfz",
  "key11": "2XQKYM2JMRAp8JbsD1HGMvzQ7NhdaqJypKZ5uwCChCELgfZXPDhGaBfjBqsVfpXNjZowGaMnS9oDC5NjD4fApYf6",
  "key12": "X4SFcv6XCrmi9U3adF4LXMAL7XhQv8rXPhrqMFHH69aAyvF5Jqyhhonm2vgNaNN5wPFprwrvPppoXACiRZdv3F5",
  "key13": "4tPZPCW1X6zoYjZoDAsSSoxvgJxswkJQ5q2eXwCZecLjpKjEXhvceMTH2YF63Kfxwechq1MP1RXqM4nw1drdG3uh",
  "key14": "4q2u4V3AMbJifLvczjwprkBszjrDYAJhBPfew8cPQkGn6VapHDF2X3XC4CHijrurhNBY8vQysrknEJqAwxwtmRUg",
  "key15": "kMGtUzAJb7vawpB7wPfUTFz9tnyfoz9qD3fwWaogVF175ExSSXsm1GP4GorGrwtThTPuRW6uRFSw8AtcBJycG3v",
  "key16": "5g6C1nB5fdL8GZtbmtzWWxzvp2YkCMtd9QRgPJ1Uk9GxqD9xFStKX9cAvDfFLrZZMxC2jDt41cggnNx6unGXbixJ",
  "key17": "3dJy7XobEviiJePihGii3bFJaa9Tdb5z27wYs4HpqfkuhJuChtp9rLkWSqefW9YEKqM31sjFTcvR92uXB6MJduj8",
  "key18": "5fbMhw6UkPkHP48zS1jyDf2jC6GknacWovfySYgx8vJdRHkhPS5GnKH5SkSULey4rm7Htkp642MXBP9V5xyN5j3G",
  "key19": "4ymPUZVzesjkBLRtfLnXcxSmRCnNxz9jPGHiu3WtfgKk1jyVvEaXXKonVtsPg236cfauK4n68xRZE1M1EpX1WzRe",
  "key20": "3y2yZVJnkTHeNwLX8jjJk57HYQgjmgZafZ7KqNiNobvLVCa5cRoAmkurV8tpzmtuh673Hazsaj84jNM1goJ38BWi",
  "key21": "2Z7Xhr7tem4pXYKjnerCAXqPnAX8okndSbE8mRRbmJw8M79XkSX161cdb8ys2YpMgteenxwDFZ8R2Zfd2maqvGN7",
  "key22": "4X3incdKTWbTaAxA9jrUaNLEBM6b4mrF7YCMsGA9XiCByaMoA8AhxK3nByXFM6eEQjgGfrtWbt7cZy3eAP57SkQ2",
  "key23": "bbxEjJF9mwum57NSgq5hN6kEyu6ioqmbJbomFwQrNTPKxHmdJhNEhfSVFikq34vKzbVkfyUVqY3RcAP5JP19av8",
  "key24": "4y3LVUhYUr9z5wyP7SKCVtXkANHt7uwQbjUgDKd7n96jdcLPMwmFs6Yrhm8NV8oxVS8CyumNiEP2isWqTZENqkMd"
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
