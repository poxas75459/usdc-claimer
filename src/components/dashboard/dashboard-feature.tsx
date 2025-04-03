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
    "2qYZwKAx9aJbtuDSeswVUg1wQ2yStMSM6A3b6j6dMcoKyxKmEQfDzRuwF7QboLWT9yeKguAC6Kh7QXoj9bjX28ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNM2Xqzo5UJgVBQxLeK4ZdJo9ihWGLwfWzGnQPncnKUNrA9JSWUVhgMbNZE3V5WG42JsjoaEfabdeZNCtMcxxV",
  "key1": "WXk1qAuzzcctkhzp6tb28vE3FJe9r21eg3FLaiFBZbuFKyhGLrUED3JTPpJYmoFtpR1aFtTWR2SLLQEtPMVFQyD",
  "key2": "4ugYnizEbK5vw3smdurgTgq8ZGAwofQq4Xd8N6DQCtZkS5N2vJi9igkWeobHbYPENSSB9ReK39MENxKdKmMSwLTN",
  "key3": "3uWf6Hhu8RtFtYf4zGrMtZhzUcDQ2HHgfV6WgxDFhHP8jW9aUSvf4JGEeYxLqaBGVaoJsx7Svri4y1DZWTZmYQYs",
  "key4": "4uv61UQhDLHpA6N4YuciZNZ5c4QuEb8W8ag3funmYL5bqBp6BbkcPuqUTCBUhs39mpWf4JsuCfP5dqp28NVqymN8",
  "key5": "5QL23tYDwHwWHH6cPc8AkXiXzf3BdGZu1D3WGWSvhfLDvmyvkVMbZZeeeDzSvEGiGxEccH5hAPmmmaHL8LuF9C7G",
  "key6": "3m5vDDinCRDnjcFPrKZ86nfrsMdpz4DJmdspSV99UkTqyXwLaLkRc5WMctwURMQnNsr17qpifWNiFo3tZCsXCW1D",
  "key7": "2GEB4FPzahMYTfwhyMtWhHHGpvQWJAnSVZeXNjEYW8HLyA2PcQ5r862qVSXUF71VYVF1dN2ZP3VAXFCGaxBqLZuK",
  "key8": "4TW59F3ySG2eYrqPRwr2v8dKX5jo5cZFTquy4W15goBGjsF2cSP39GLT2HJJBWX7bXiBGL2DdnwAgzZieDQxFzGp",
  "key9": "52J9oT5jV9DYu6cRRvH2arQsVbaKedX8FbTXnKWKPCWnxrvaPB4U4y8bQbSMTyBt5NvqSDQB6eUyQfNQ4JwephE6",
  "key10": "2RTVpDjGNW16JFeKWMxDPWv6wiRxv8m1nqQBnvPt6fKY1x3TRKqa6o62jfQ9G38GAtnkWkgYfQ5nVBXX4Sk9RSbm",
  "key11": "4ijuT6pNVDinYGKevh2Muc1ts9TuuNF6WdAHWzzhfBcz3KWbA3H8TYdLP7g4nc2q8uzBc9Qrskq4fYMKEvVPhnbr",
  "key12": "5B3EkXgxiGmADeD725DAg2ct2iKbRqGjgct6C5iZHqpbSULnzvhK1YDJqBJZMHmWLX7kxgjEkSKPGFXJaP7M8h3g",
  "key13": "2psLrdZdHxZvsJQz4EXE2m8ECgCDkY6yW1Eh8SXu4ckCJpwCp5QxwwyuMFZSh7sR2fWAwpNBhcPKFC5jGyH64vby",
  "key14": "4y4hsmrZagAWsgY3q6XSQSvKoYKRFgaPRFd91YsjJG9oaL54iEdpeeqXdhsnghpatc8oYFiWfmYA3drupcG7zvym",
  "key15": "2XCxrxc6G9d1icmL3VBn3JbT6nQwzJrijwVQGiMH64cRi4oRayY8mxQsFHRwV5xvTTQ239F3asHdWhaQp4az43x9",
  "key16": "64SJMGcdDzaMoP8qGehQ8qNWB3s4QdNWc2dE6QampyCJiTji3YXJAcrEfQi2oggSk67DLSyMk78SX2CBA2dBTifY",
  "key17": "2Jh9cyFdnv3WZkqWtUpripgN8PrSdBg5k5WiMUaVg3MovccPQEuvZAzgahNRRY2atT6XMxjHqK4XsoroWVe2mhh8",
  "key18": "UDBdQFHcf15xtBrR9aG128SA7Re9uQS9HzPVPcxd3DYrrrxiRJCM6mECkDLwTogNCPPvDKrzYdkEbNJW1vPDCZZ",
  "key19": "52mtL5tqsb3762CiHhpodJGvWdhZNSeEWo8B512MYx1zNnYTiAsMbyLtVxX3TJHZRCKyUtYu559ZXpQodsYExNSE",
  "key20": "5gVDjhYqF1m26niidKwenH5bXuXEGr9jC1pXPA26EmSFAnySDKWKJtN71vijgc2RyLjicgduxUC6XejBYgeJ6n46",
  "key21": "rJUvgMCwuYrWd9MAQv6XfHrnYXe2meWH2p2mfs1FsEzbmBYv6N5XPaGY3epeHW3vz2NVkrDSU3LVFhpYjASBogG",
  "key22": "21zQ8MyTDGxp8TsJgYbo4K7RrqgGBfZHAGadX5RHyJ7YNdJPDGmwi36CpL7fYZazrAmEaZHE8rryQhM8fou421dK",
  "key23": "4j4eJnEaA6tgjkz3KCTXjShv77hWcgTzKJtfhkpCQzEKh1zA9EEWn5TjSbPysot224m1PRZEr82QVLVKQictZn2n",
  "key24": "55MJi11tBJhyipbVD2wPJDNruJBcMU7PkP2bPS8RJZUkbhQYVWgzYjsFgCJRMLEcG8GHFd2awvQA8fEXMwBsr8jK",
  "key25": "3PQ92Aa4A2ZNAxbfExU2t7upH2vGhe4Xi1dx2fCfRZQaPGkBouUs7ZHCYRYkCnQLyaa7U1chqwmoE8QiS2UbwYcH",
  "key26": "3E44gU9eYv6PCNhy5re5EaPxpbUrFkPd2cFbeJv9NrgWiCp23gKmpNeRLtmv7x2sS97PYXE1A3fuyCgtCcStgqiT",
  "key27": "4DiL6xYtsuNTouW4PySgarKuHRDME7HZmNbqcnKfAN8kBW7h6iMhG1zm6KqtheskYH86VKaoe9eQuHwF1gn9JSx3",
  "key28": "4bTRJbdgM3tCb6JGwBZifrfT6y8KT2HAqZKMTj5q9twiKswdhAzzsezTWH77PUijLcym3aiYW7YQeJNCWsb6KdsR",
  "key29": "4vp1K7bptPuKhmHH8wv6KgW9CmogWHdTcE4E98WM3t5AbqktnNSaEWGKBnVF5DHN2cVJT62KvCqcRizEBKGgPfdh",
  "key30": "3FrF6XxTX7Ehg52iD24KcTBApcKBg5A9aA1qrHpXr2nAGoFYHCtuS6gmKTh9uqsLG6HzSGj2y7u56EiXri8CvPSv",
  "key31": "2a1pirF9rX74aMbZJe7rNUtvMLr3XXCwyhKpZheLaE13eDvFUtrb3MfdRWcPW2wKPUwV1pD2VZJY1UwGjKAoRxYj",
  "key32": "5aispZJKJzxi7tF2oF3q3MbT6MLRfdzR9rEVjwpZACePSsRvYtK3Tnd8AUL4nexDNLhWtsqxkBkiBhewmD2NZrA9",
  "key33": "3KRDgG3xWgH5tg2JoHaYcezfzqswRMdiBa1SGAfdJALKxe8N51TZhHuhUwYAzCtAcVN4tN4TFaMY5iFSTpafoXDg",
  "key34": "VDyRrnYVnF93LUaUVybF4dCyDxo1e3dmUmbzg6pxfX8MfP5WqmPMBnXpqWZW4bRmCnM2rukKnjCBsssHeiqTA8y",
  "key35": "3ykpetBCCit11awtAnWmUiQVyfGiWmiyntDteE4xWzXA1ELHEw3QrUw7oZLvzvTQi4QWai9mFP6xNS9reotHzWpQ"
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
