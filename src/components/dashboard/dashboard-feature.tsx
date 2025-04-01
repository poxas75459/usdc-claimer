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
    "3XG1iwAJZo2orgw2KJFywa2tmFXQhzr9UBCRTXYV2nqiVqdcushFMLmckWZLiE88WckBiBhLoVSahn52PNkaTy8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxWuTVCCxV5h4ibTopf6it1hi2wECzVqtey2NVmpuPAQ7KBRkG36G7CbQRznnPtFetS7fwm9bmZuEmyadh6ft7n",
  "key1": "D2SF1fEZsoZRvih2T3rJkFMSjFxwPT233LjhyL6YZq1ohL8YsWjgLebhT3R7t3vQxz2eR35EExnYzVuoW5Yv9pw",
  "key2": "HHYs1uaDe893hqeDi3cweP63ZDbFaEFD5CwXMpRDiKTxGPXSQmwmt26o7TCkhSM544wpUaCxKrHWb9WXs8c3Dxy",
  "key3": "gZn5fSbeZNDjgrho7dgkyU5pVgqD28SRAtDAtzCfxJ7QNU2JBKsZZr3NoWzccZuCbpDRK2Y6X51BtZtQbZqurNE",
  "key4": "5Tv8kXd4e29NDQyZsvkoomvcmgnXBgzgjUuFfuQz8ZpUkE8kUqyinBy76WXxJDuyb72Vn8hHNSUs9qk3Z1szSWA1",
  "key5": "2nEE8x4urnTqmD44zZevBt9FBPZyLp7AJcuJdL9Nmp9KP3UL9kT2vc3TbV49JXUMYoH3TGnGd3NPYjXMum8NZmiv",
  "key6": "41dALwi6QjAYDiXq82o5NmQc2gARhSPSm5Sbi5KKKqE6ThXAnQBBUNXr62erauzntGcLSUNQhXK2p9z1rhk6DHG8",
  "key7": "3A43um3Y7d4CRyyqHYSKourW1Hp5fwtKcvJr5FZZdPiDp32B4VtVwMYa84EXgUMLNzRVwPrSuAqegziofjjQhGmq",
  "key8": "2owCUGL88SSbKXyLC2nQc7JpigLuzJuB724TDYeMf6NLjbU1fsCjfY8Qr3GZBT745FNLMcyxEmvjt5Aq4gJhBJYQ",
  "key9": "3vWHRdRKFvTGnKpn77NFbjDaTC5973szTZQjThU3jF74otcDtqbTjAY9yvtwnC3EQXpmW6HkvMwNxmuvHg4B6vKc",
  "key10": "5gFjyLPu1TxBBAh8rTtekww5huMPtUUon6hnWjZN3vMEhAYTzwfj5qjiLqEUK475G4ajq6N8Hdj4UsN66avZPp8L",
  "key11": "2tVkZ6Q8mZsiS6uYTDNv4XZdUeUGgkcimLkbbCVrf8goSdqGVzAEDa19xMM9JBwgBsXSzkFkfCDnw54xTv8K6SWu",
  "key12": "1ti2z2tGyx1Y3aCbB3Xb7ZF5Gq8bW6kvt9jXgUjRkqgAj2qALBia28zDwDzpm8f56RPCeFhVVeLCMtq394RNwoe",
  "key13": "34UfEyTfoUk4YkTJ1dUhjkVJgsgD9wv8nVFCzPZi19i9m6t1SkrTv3feqkbhaBimMYJfn1MrpqVgjzCXHTpQneTc",
  "key14": "5P9gTjfCWXzaqod7ahuBfmXyyu8A9WGLLgkBnCR6TogwE9vynGuUTg8PpUeYJCcbKSyKjyK4CA9QFUaCMebqEG9c",
  "key15": "3rDXiV9NthLdWTJurdxZi8D5ifpPQmsdJ3AQbNkwpcdXibPrFZKvnZpKpEoz3sP3PkECt7hwrkto8J9Yw43ctFLP",
  "key16": "2XZ4vzc5mVjfHSTHdwRbEaYy6L5ijzWZR5gkYV71kSvnDK8ojQ7GeT5rW93vgkekyoChFFKNCZA76A1ECQhZH5xo",
  "key17": "5acHcrn7BeHotBwaZMUzygA3C5VxS2N3EaRjkdt5KFJhHmu9QnwukNBHhkuUuhpQW5wTYRj22KwDjzWsA7TpY7Dx",
  "key18": "66d4nFsmsj2hahiErAK2bR87FvLHfTMp4sqBtga8mQUmjx2SwrBfiVxPRtRqjQpvP2poTy4cgawvKHNNrEau9ZnQ",
  "key19": "3CeizNLex9EBUt2W4Cm1HqkpoQ8Uzbt7Bz9xdxGVTARPxYC1NpdmQusotXdjvpqM8EFx1jxkvw82sFkBkUpdNUVC",
  "key20": "2BGwUi5nDTGPB37ohZ5FbbqGfxGg6xE3bJXTFo4esvxW1UYRgCPArsNVmaHxT7pc2JNsDaYz8tCfd7f9JLnGspcT",
  "key21": "5JFHF1mRprAGyLGFegVF61gsUtiKXteiwnRHMBDqdbuoPBvN6i4KRGVxxFGFLa98axwbL2qLDqE3hhDqdbXRZ6p5",
  "key22": "RiGH3rm2XXgUTqSL2SaAiW6h9WDs8xZFbofeedcQnkd1ecM6LGmEPrtnP832ALeyo6fqJa6o1tt9DhEigRnQwPm",
  "key23": "3L27fJBuzeHahjPHt1ZwPSL3NwuybNqiRDNmmPrFuAE3YYLxq6a6jpCeXoNZoTbL5hQietVW1Dnuyb4zikVdkjz9",
  "key24": "59J7jHm4vvTcoAxY3UpruVkq3bHHJMakNzS2Lqtxjr6nz5pfHdEyfBH9A3HjB7k7hsrBbdu472RxjPmKePa9Cvga"
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
