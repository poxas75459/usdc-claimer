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
    "C8XA6cEi9NLQQ9xgXXmNqKmWpw5UTsrwnZn5i2zevFD2QTK4FGzz7TS7WrdFascZhB9H278iy21DjkNhgCG2AEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qG7aghsvKdUvSmRbN27LqD8bNhbnWQfpwCG3rcdom9A8b1iXkQUjpMcTsvjkTjNzHiXqUDu6D69pbTrC5kGTbSD",
  "key1": "3J2UgyrYsso4ZsNYGZxwwbX5vtMxLeqfKR7mH7hihLaCFxfeU5D28JjGYwKmg99EF5rFiYoaNbAbvvbDk5fRLDY7",
  "key2": "37c5h4ybNRfAaAG9LJvHzduVpynSquX4oGsLSfAbJk21tm8YRe5z2Yjtk2AvSwZrqppvd551ujhYkZzm2oLz9DPB",
  "key3": "8WJKwyMNzXbkNrxhmQ8Te5pTPn7Z5JzLPq8EB3cwxC5XVqBunua47UMMiLrFtz1B1DdUfrDKnc86Lf6VVJVdKzn",
  "key4": "4z2nnLvbtZe82a8oEwELV8WQjsdJnt6R53LtnR1NXmtiRjaoHFhJD3aNXDJAuaFRJyGtmtSmJC8cH6Da1eGqsQGR",
  "key5": "nkiZTMwP5xtPbu9nf1jnsxE8ws6d25t4x4Tg9uGeZ6RGPWRe1X8fH4yc4JfVgBRFF12b6JYCrVWy9n7c5mTrzhu",
  "key6": "QGQuUumskZ6YKs1YyY5K5VGJoLLCCsBwzZeL4eCb4Uum8Rssk4iz6GGBKbADECHbD7L47bGF7RgTfJ6ee4E5znr",
  "key7": "3cUXpxxoFjRC53zKFSPdeWG2g5BsGMKL6Mz9SGdAFW4uD1HVxHCouo9iwfVqjTQZq6u3gmvr4hXiHNjrTkdKEze1",
  "key8": "2tMTWjZu9o95w4jka9kYi1WDVWxY9MCpoTWBichuACpi5Q7pyrXMcsWq9UGE79MfmB6YzvDp76sEJkEn7tAmTK62",
  "key9": "21kdo1sJYZgAcMaAEytHtdqHsdTCxnMM9FLdpdTwSkcyW8B5SJqdaF1N1jjnW3YZDZ2hzdaf8SczvUyVQ7RbbJYu",
  "key10": "5w8GywYt6rZiAmRTvG9bRR3fBj4i6mvXQy6zcS31Q5qby8eUBpFM3mKHmnrNZ41DuFbBcWLbdaAqqyLxDPESsqY9",
  "key11": "3kQHabXnCpp5gvTWwq9ncJGZGp5CvotzhX3exuFVMQVrRqzCUgKZdJZScdUHKSr6Ao7EranavdyxqMyF3dRW1oGj",
  "key12": "3FUygoz9jSSH3EDonqnGj1QxbVdko3vJMRPGynCJsikKJQWCpc8kvn25UcupZp5TUNWaMMMCCApRcU4MLgH4jvSM",
  "key13": "2eJFNWRgsF4X8mfLMpNbXmWxr4p4mzUnSz5ebvwCHkU4yf9bHdVGGHswgANBVG3S6AgGYzQf4jpfBa18W7zkxjw2",
  "key14": "2Cij8X8ds6MPoudz4FfhTMmU8VkPJSs3WUzafuSf8eFozxNk1qELoZHSh3suvZyJcRiH6juJafgrPvGS2gR2EVN",
  "key15": "3jj7o6BRwLYc8goKLBjRYukMEADvL2TTBZxS1gTYw8CgtotwwZxno3eMwWfPwnbBP9Q6KLKLKv6gujLviLiPEFgk",
  "key16": "4vq4Kr7bw6DVRUTgGuEqnrNiKWxXSAz36C6G59JTtQ6Xpd31UMGRf1sChsyPciQgNXtvCeBWmgw78MFoAwgQkh25",
  "key17": "czmveU7ziC7FYunSWmW4ZYMg2ZGy6xqEfSAtLnLzF1RqgkeU3asYFXidkMUPfGyuvTbt58DLdPe9XHdn9g2bRoL",
  "key18": "5jAMFAbynivt5VztkypQwQUZwxF8UWeXXUk6rrf4KHLHEw5xtABWbAB58Ygp1fjf2LcZg4TtupXJwws1No6y6w3p",
  "key19": "3gDHRKQhgzQZNpHgA5jJBH5p9ukmni12ZXck6CYj9H5eiDAW9RDXRNnpzVzXwjqvQPBUBVDg14CZ2rnUZCe8o57U",
  "key20": "3QD9R2ESas3StZL3GB8jyGLigB1jhEVfBoyxzFBYZBnXu2KFdb8PuA8C94oypiroTWCm4vBJK4g7w3QvmrtzRUDh",
  "key21": "wTnvEC14uPKuTTthb9Pzyy7ri8oi9tSfh6QmqzkGM8wBWJJ4EW1rfdxRguH7d2TciuswYezbhsSziFSBSxYSimM",
  "key22": "YNi1TTmKY7pkikY93rY9p1zgA7x7QLG8F7hixDxLRsyfjyKDihKRQWDsMHo7zW4rxMCRrW2Ep2oosZ4C8ngiqyg",
  "key23": "2pYTgws5DhQpXuq2LtwyCoo5V8CwBueg2hZa9wnQfCbDzTi45csVyyn94ajko8KXekA9oLfiEWTTEYk9zvsyjLJ3",
  "key24": "3bFGTLaL97Tu3uMXhWnoPFG8eC12nwoiAvfJyRBwsomGqPXc5QqwZJhBnYWyv4TgFAz1avJzo2tvbSsSh6bjZ98e",
  "key25": "yfDjKw7CezFCQtDtu9ASP3GWQmxfmiduNhXgcQzTQjoRvDoQZXwYYvVE98Wj2rnpP4HwqQBPqSBTmq1DMiGCz9r",
  "key26": "2vYFZ5JV5Dzn77Nq7jW1ieNs8tbAF16ZE3j1i2N7Mj8zLtMgBAtamRu4KtMaWSUR5ygdzF8SNjosAqrPGMu6ogAD",
  "key27": "5ctfBLaAp715mpqyESSCknmR5QDp32fhRcmEacBuLZK1xp2rcz5mpigVoq6uSP7mitrbKS1oCbrYPf7hRzwcoZUV",
  "key28": "58zz5D1ZjtJhKRsgongA1fWQtHj8xpKVVuWncDfjYebHPr9Xnn1UvqUPWbf8umkVb4DuuPoLRbtsebLx1SLjnh1",
  "key29": "5cHcappE5MQTidLGLyg96LiLYSWGRKprbPJFAuCr39o4SsigvfQEbEPCm1a58tgzHaTucuavV61cG5JyaJRpqz55",
  "key30": "2BN4jGGUHEK8cj5m4aeeHuXCsYnNQ1ewDiyigFcTQXyYoHyn7RvwZ2EmJkHCWt8vQaaxrWTwiSZFYW5YUvHscRao"
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
