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
    "YTFb4gpvx4y5tBA7MNpxzKdqMHsFSQaP767cC7rkotJQPATWioec4MnBVHZ6RvMcs3JaCK3VoZgdbrPSZbpduKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31iZM2wfZuCyd8jxr4FFt7qBTmccwVsrfNAfsZk1k5TZzvYrbRedJPqK9qH7eoutgkxXAJjR5V9B3fPnRttAxym6",
  "key1": "5prwxZMYCL2BSXrr6MSrK639gtnyburvTU9CE5NpuZxoCFPHykgztb2MdzGz1yw29VAWTn9tGqMGmGVT7112Xon9",
  "key2": "3pkMxTwLXYieLgbBFgkUbTczvieJvAb4tfr5BhCtYnpoCsMLhuxf1WbqieuerBk7zyxyiPZfNP3ZK3EJSr8vhDrj",
  "key3": "VQbaCoNJDyf7CPJgc4gfMKFxUDtnbDs8EfZo6ssC9cddBoMDhu5GqVdVzo4w1F9VftRKw5nm5T7z2qciqRTEsYV",
  "key4": "4e4cqod6WQBwpoYZxc8xFSgH7aLh6Hu17BJhnmzo2S9hXqAbpYSDAepAyhCCqvnMeW3XQfVUsLP4yTYxSwL6Ukf6",
  "key5": "kCsTLzrrYSNxPLGa59YBPJmQSQ3ZEpwtBk9Pdowx8JyhSECgEURQeS2Gu4LbYEwdBPX1cLS236Fvo1PZVDwoCUM",
  "key6": "54p9dEBvucshChvDUH5LT9ZzjTVtx9joCi9w8WipRoH5N8j3Ry2JjHdMUsYnxyzZjYzZ812SGbuL8mZ2xdENDLc8",
  "key7": "3Myhfu3eTMHu9xwvYggbocpP8LUxAXEJumYQcs2t4qXj12CtwnRQRQcuKSwafAzxXg5WPjvkaCgHrzMJ68H3VZih",
  "key8": "3xCgrUF5swGK1cyuqLm8VsPTziKggG6y2qWjookHS4F5NcY4LMuUPGZ6PaFMkpyARx2DywjKExfJNYf6DFh97SVJ",
  "key9": "2N3dq4ctx1x6AdEAM6zpmTtUkidzEk4ktPDK9mhNxUFgsDEusb5p1PW8XxB96EKVwFw3EqJPFDFCgR5cm349k5wu",
  "key10": "ssHriujwdqErZStpqjKXD9yDszeZqTTPt3SY9Jz7YtHv5R142QVszzXAZhEaByrvBpYqUkuV35bE1ZzNbMyL356",
  "key11": "2x1NbfAFPuBSMyB5jwoZWDhuRoDRKzSWYooauzdEHoctssqnNQmdMJTS9NLcHpoFA4aWSQmXLywoUa559nEBp2ND",
  "key12": "3xWZkBsgY1aJZxF9bjapgpuHUqm5eMc1oj9V298Wfp3bvRNJkboUL4QvPK941xBj1nbM6F4zX8imrgd4YGZk9Pwe",
  "key13": "3WMHz13Qs3rfKRFD8qZPeB46fA5htJnhgJsQdGgyTNbigyiTfxq7rxrv7RYp9oFuZdXiqifeAZzKtvUor6cACW2o",
  "key14": "2jgQooiCwoNKxCkD3S74hkwm3wEnV3FEk46qJfHikDGXkSiJHXjxjeFaSEJA52bbgruAdDkMkGErnxj4465tSB4Q",
  "key15": "4tFygmgDa6tWvPSdi2z1cuu42cRA5Gnw4c6ZBiyJrtDc8gEQgG2tjCt6FeDEPCzgcUBLqUXgLn6Kp42MPxtMjdFh",
  "key16": "SxfhQDWdGsXERm4jwhb2kA1poaeAKQd5LvidNKMnzNQ51LTD5rQm7J4JvidwbRjq7HHvxriko86q7VxF26FRfNf",
  "key17": "3R1hBjCQTkFv2VhBER8QSfnifDJf22Nad2bRCtqAbYVuaACLyVbEfhLL4pnLTiVV6gAh3gYbfy1oVJGEQ8us1jtH",
  "key18": "61mTudzn1z5jNcNRtLTrZ961zGTiG617ywBWeKyPykDrnt4AGW3pEcARReGbAqF8oEWFFWDScuMnaLudtkopw1M2",
  "key19": "5mWrdt6Qm9MeL4VK2kxf6AmfKaiUhiMzKQHfLt4adXU6x63MkGvhyxyH94axyi3qVB3xVjqS1F3mrwcpbDJt1wk4",
  "key20": "2sgjkY1XDsADvSkMfHpabVuGto6TW7mGvW7iqVZSaoRCKqZLAGzYVCjMrNt1SGtk3yZdMVNCgCZMxZW57becFQJf",
  "key21": "642U3igQ9kJPYTVYo9mjegjHbLpf52DWQsLhNEXKJ6o77NNgM3bhSxXPhYKqGSZk3ZRKx3Ka67Sg3ZrZgb1dNMoH",
  "key22": "4WB8TTPaR1LjRDo2dLaK3Dvd43ubpWRyGY5Epq51x7iHmdsQyxEr5LL7rarxo8iTwLaaGLCq7PYrTBK9MjHncFnL",
  "key23": "5eif5S7eMmg45YPuDnXkxPaosbQHgCdr7KQwsHS8kHjBjyFQVsxh5bqJYSrrbwjKktvpatMRZUoTQ8znNo1aJWd8",
  "key24": "2feXXeTVfeh5vdbHxHXrkLEg9p13EnUMp9TCCNAviymgEzWFcVUmCW9tswcsh36qDTVADsecuoPD7ErenyD4ZGiP"
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
