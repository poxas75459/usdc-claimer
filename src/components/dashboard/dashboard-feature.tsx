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
    "9RWAQpdVUkoTreXUogxbPPj7v8jCE7uVvifhXphajKVDjuegcEbaoNDd1TwFkMFQKxtNJwqy3AFYs7te9nzfcNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2orvgkjCeoZp97ondd4uzkRiBXksuBB5ChBDyd9ArubX1bFNeVe6hfEprbzSLEXobw8mThCf66gi8dmqmxAfk7Fg",
  "key1": "65hdjmAhSvdp3eH2aXDYXJJX3nSb7Z9gGxMW3gLDWGXpr1sWPrR4GDss88G9EtzxLPq7gUWFyuEcVaPHA3y7uSCa",
  "key2": "2UXKSMTe6BaaLhqzyWQLKZZaB7B5BZV3cqbpd6mwwq31F6coBoYKVbDE2nGbmDLuF6EoyytoVSvG75YcDfZhHYDX",
  "key3": "4gg4tKooVW5bq2i4Xn619SDXzgYLV1b1kJSCJhqmMvLw98szNV9YgzSCN8nfQRPDkdzVBqg9bLKghsPfphRjDZxf",
  "key4": "kHTj5ECZEjknF63n8XoCEd2wwB7p2WDQt2ugyxLJ245cq9Y6gQfNnbjZZvxL3aq4nJHKR35AM8KaL1gNWaDvZRF",
  "key5": "Bb7Nz899pdFJCG3f4MbJdMLraWGg48hXnr1WtML73VEiCNfdKWweFyLjvi3u5sgTsMGr9GBoRQccxYjE435yg84",
  "key6": "3oz5DAsmVkRyd274THKB6uvLsmkZxPmEEgqwYcgwf6KCFBPfYrr4LvJ6TTe3JE8rtxYmmDr6JEum5SwiV8cwWR97",
  "key7": "dg8aZ98V7Ed5o5dZJASaxXcKSZS7iyiezQmqpGDEaGsGKDT6tFwMgZPNvpJsaoq8kcW2aFVa7PBzjutxfEJoXf2",
  "key8": "3coVRGc2ZJb2F4xZxxrmzjCDM2bXX8EQALGMZwXC3FRh278ux4Rq52NVygGSqhk8jTrwYeQMHDqxTcjq9q7oZrdA",
  "key9": "293YvnmPWXuCWsZfRDKgYfNSGTZukSEyo7N47JxGzUq3sfQqGUesvAFT8nGo5SkAzZJwcuFqRN5XR94Ngyrn8ydv",
  "key10": "5oYkJvQ1THPn4Q8GWLGRz8GKrQhtbzoNVDyfG2AnS5Rw2dikaRuihxddqiVbPNKTgVvVsZT37EYguS7BQySzw1Eq",
  "key11": "5nujy1bUjxXqZek3YFK8QHqnxDJtMyvfEe3U1gQYSqkKtzgNvjDn7REEnnuWTzK7ANNio3SKcPtGES5vagV9Cxwg",
  "key12": "5WpzTpZ4YsgQEc6TvdEXY84mEUbYaozyZNrSH241YimFWY7egttC4Mcm4AL4rA12ntpWKMtBx3Q1SUoLxKtEche2",
  "key13": "4GWZLs9yCxoYK9d2yFP6Kv7GCKsZDd2LtN4yUmyCJ73osdpZkVFBw58VqoshbWpPiQbh7tp988qUHfcW8Qkxn2fg",
  "key14": "57Zs2fvN4ibEMdvtgTpVuWd7rSQEFsxweKxzfDupeoE5vFFmoM9QMMbqE93phZHoHqMkfEQwHwGcdSAgCR1cJg8U",
  "key15": "3E1jFa4La5si3dUavHtwT7aytd8jUgdDyeFYivCcGHamqJQjqoac2AHTSVnUiEZdaKS19FZxK6mFvbqznirFbjqF",
  "key16": "TBg7qZswfQCMrKHi9Jo7y8kNURpK3Bu3dcyw5YA6h5RMCvxtBTtgLcimLJ8CZJUm8Uq6xu1rSffCg9jcLg3TSY4",
  "key17": "3xEJX9HFfzWDYYQhYm5TB18As7iCMzoL6jPV6Fi6JLdpSJK9hKshh6vy6Gy1URKFtXVRft1mML6mY5PqWVsGk9ay",
  "key18": "ywwH8KhFEGQTy1dRjFc5dp49oPAB7ygWbEpoBghKNZt1CmffwDnn3wE4MwB3wZcYhAVgGQvHun5mPRjjHXtB3h2",
  "key19": "65ZHgFtXw6akXqEnPw3gsCycvYV6uct4Atox4p37ZVCPczYGzMeW1AhSaG6Hi962gvXDHApBLYo3FajvNftoSmf7",
  "key20": "654US36bkJiGBimgNaN9Znr3RGW7umPpauByCaDVhKYc54NCqcX7zMPiohiiT2xVLFp1aNV7JweW9sRghdyApQCC",
  "key21": "tmbJcsfjPMoDbXzJBtcYKHDwvNNNVA5rN376pqW9HzCX9f9bTGfZxkTbVJQXe6hm6DV8FgYzHy7tYTjcNAfEF4j",
  "key22": "2qzNGe4AiTDNBhD6MocGM7BhNjPHb53x61Xcpu9YMytkWxiMd2wvkqSEfiAZcrjamjRdkavEDxXvCrBNbftLKRXh",
  "key23": "5znCWjMhAVFFFGDceuq497DpuX9Rx1hD5UXf19CbrzpUJ5Tc84A86APa6nDfTpmkzNTsxRPW9qXghJR1izAC8SfY",
  "key24": "3tGDVojtuDfZ4NnA9Es2T7kh2iBjCYZmxQ8hQQabyRAF9BN34fd5HobTPSeQAwvad42SFosJ5vbFiofMiHADEKNF",
  "key25": "2LzxgjTmJ2aSTNDNNDWKXtT4qFahjmXHK96hojKkSPaRbk1Hu71YFPaDw11XVHQv724cz7RDeircQPxwrNj9cBeP",
  "key26": "2A24xJVXQUamWZxxisndbW7CaXCcpvKQm4nkNQjxDZii1p71XSicTZaPGdaC5M6JnRCJqjRQFU8EMycCoEtYbHy5",
  "key27": "3JJPYCDdLyYCLhinyB2BUvPZerha7EubdUgRrkkrt4qE7Xx1B32oiJE6Sr1jSUCUBVhhcNrnVZAa3x6uxeW7hEYA"
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
