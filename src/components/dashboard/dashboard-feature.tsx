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
    "53sY2qkyzX2p8kNL1QukWAifHkqSKsNKUY8xJqryBmm6rMYu6FERWDHTfgKoKMxuedMSkPH86ERpgrqxZ8gXQVGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M8iFyezhi9mb2vpCi7VxEztEtodUFkeeMqiucpWYzwke9wjCwzXht2PPzHzLbXFDgGepPrZ74vYHB597vcX1p6r",
  "key1": "2nby4RAb9dLEZ2v8EUeWAerNgrfXRCqCurNT27fGCz1V66uSS8byjypkwjAxFzrFC6kVRAgZSMKBCPyV1D1jVH9u",
  "key2": "5uevVxHASxbXAkcz6uZLYpL8N2qsZDD9KCPFjtbhQs6g6wRgN8uF4N9YNqrk7jiyjyVHwzb2NbV8EmXtrsP3YyrY",
  "key3": "5NWwhYbtKCkr9waYoabFpUYAAV8SYZ4E1aSmEELVugaWBn9XTDQLJBnTp2qiZHBRp73Y48q9VLBJ64eGsjtUEp3o",
  "key4": "Kfxq8wTHyzWqhpqmsqPk1QGBtmT1w6Q8VuvrNYMwpJ5vCmMbYpug1sC3s6wktewJdFs1qJRzCb1DJRdRmwijPzS",
  "key5": "3EQzz2da6iBEtBy7eHeVY3qJn4KaRFrfUo8jf55XuiGaDupZqm6M6PpxGQk9yjimS5UuxPPYkBGEegnnEQR9abQc",
  "key6": "31czfHKEwvJcw1kyWZVupRwmS3TErmqQFQ67jYBp2otYxSX64PbjoSSTYNKMezMsn9GHtVYYDXfRbNDjBWLG6bmb",
  "key7": "534KTsJ6LACEWUVRzezpFXTTfUgNCyBQmDQx988z2DN6TZbtzkf7HTDLHZyAgnaBy5aR5iDzHJrU3KcXdS8xBMC9",
  "key8": "4nx3RnUT8CTZnd9GPhVFuEbX9Nt4FBHHhJjcx9crFJAzq8QqF9xf4Avk2AR1mPwCKnAg5FcBpSa8KGDZFhb4JA4U",
  "key9": "7TSX3mTYAFTZLXDHtkgSaXvTd635g34ArZi7d6pgMkojY5eqkMcVDSmE334jaYRuhY3VDg4Gjg5DuJfxACSvaGf",
  "key10": "4FUsE4ub5v688Fcff4s2e8bwg98iTJJPumBVLSqvSBpfUS8N5TqGzWPJMBmqVpJcAbJiN46DqZorMr1JNaGjfbwH",
  "key11": "2D1xs72SMHuuJtB9rsKyqvitpgsuMH52ehG2ctmS9DYvSHCxACvNtd8wnu9N5mxyGVT1f4RY8LEwqSSxZwkUvBgC",
  "key12": "4wQbgUWoxfzWK79RUn4kWk6jDxvurxogP2iHCryLcFjg1QmxnwfxxDdCTtd9dVVKMg3jykNayaRZuDrehzNErxeN",
  "key13": "3dDTDzwdrgrLbuo6TeE7VvAaB7C8rn5stZ8ZQEaF4EdncPUNzbPJFoYvBm7FPfN5kiz8NFTu2cn3irs3dEquz9vH",
  "key14": "2YdNJoekAm88DT9Em2QwaWZteEDsg6u4Sw5gS4hPyFjnrQFNNEtcMPMGYv23dFzVCS3UHzF7HyjaviZj6Ldc1axj",
  "key15": "smokmDuWWCj3Pgt22wQ8XWRg7cXj12A6j69HUtyTo3j6sN76ZwgLogTP5FsT5maRUs5Gz1YtVoqksh1Ukx89hZJ",
  "key16": "5YY29S56DSg6KiKXbat6TaCV4K8Eu2LAwjoV5zoCjGuFEMN7pEnnt6euvfcPUkQQeAmFmeiHRbvzT1YrjNu85X5e",
  "key17": "4cRdTqPboE4JhbkWeM1yYy63jsjBnzL9mGjUNWwequLnqjBYvVuGLyzZ8mcZw1sphNPUSzDQUtH6f8mZNrj7YjcC",
  "key18": "4XK3yDzi1dMA54cz2MsvfEzJAfK3Dso9Xgr9pPc6aLJ8nZa7vZxtYDVpnnCSwz7Bzj4rsW12JcHdFA7EtcGHkBu1",
  "key19": "2H24Dwq9tSDReV1vXU1FD489Asy4sTP7MdnMAVs178dfXUzUgtbogUi9VWb58DdaaHovo5D1rBMcbgGpk9jzMZBp",
  "key20": "3qz2aMthYFimLg4YTLsqEZUTCd6KpAS62AEEEfLVmbDyFjMCPh1RBtDZt19CPtizhX7T2bH4Wjhh4MYd7yzAdvkN",
  "key21": "4wkpxEje3FH2KfJQtb8UU8ms3uQGJRevBu4pF2yDio8e2Z15pghJLJYSjsmVZjha9Ma3GkMyWfCYYsjcUkdaCwF5",
  "key22": "sj6mYxVnCZssq5Z2dcqwzNU7iuNy3T2GDN5orxm6LEyJ95sqVEF9RYor8Mz4hVUgn2djLDw6dnfgkLhHuBRCowA",
  "key23": "5YjF8e1qSv9NBzVfxk5Mhh2MGntQBGa53n4Scbh5L34sw6DGqppVg9VT5TEZos1Hhn4evNexaKdH7beFhH2ULecp",
  "key24": "2CyQDpusDUUem4t1oxviKYLAy2sTJR2oGhDZyQtjWscc9nBXW6TqDYNzFEFDj4Tt5r99oXbAjC2bLisJnQG3iqbW",
  "key25": "EBgVfWgpycjB4Y8yVQwZNkoSwpHA5xiqJCgVoWdyh3M7Br8rrAWESNAzXoERWzYa1XwPm6yaHbtLtahqcKpZW4W",
  "key26": "3U22SXHs3qUeiowqVnbXyRovUwiopvnTsDJAdL18kzF8MUj85rw9Cgp6Ld3HunN1tcMD2p8jurrrj5AkryXaTfG8",
  "key27": "21cbQmGiQxM4JswED1hz1ivDpZkuNzEtF1nvhw6y4oTSuyG3nE5C5AeMxuM6aLErd3H1KhUXzsmaFonG29MfAvsJ",
  "key28": "5QNDzEGRuw8jRMz9UA1BKhLvwyXP7jJS2VkcZESvdydcA2TPZpd1JwMrp2GsXZA5DGBgLTiJLMnyZfYMrVTjxeP",
  "key29": "3EUtmTshLEDQzZKAvNa3pWwRfwUPSSUQYJkbVH3qHQ8GJdVeGYoR5vgkwPp52jNoubAyD6z15CaNQ7tp7truBdJh",
  "key30": "4Vx4FGWpWXKT4UtZSAf3J9f2uwSS33Qep92f7wvc63Uy8mzmm4ZCbYdj2g6KDiWGey8m6pNBdHcyqagmMfhEm2xi",
  "key31": "4FbmE2RUYex3Y4tTmd2JnWFCK1ZPjfE2L7krvbbthNWKPV3TomxSy77eN82Lyb1HJVgQWizsuB8hB8z1WFMLyKoA",
  "key32": "3KyiVRsRuN9pfXaEe7GNKaes8YtkzbLneYD4U2zdAU8RkNL6JpVHfmBwVLhdTfkPh2LJPMm1nsdAFt98L4WbKNaJ",
  "key33": "aE1t5hy4CE3s89iQAfqnRBQJtb773kWoyBvPrjsvJ9R7xi98g8R8Fa6qLu4xuLe6a6rEL4TgP2kpigDwtQgDDs8",
  "key34": "59yDiX53F1M4yURtSoCku8LCJyAwM2DPcaFKvjBG6LT5ZsME48wDZTPs4UXdKYPcwufKWsHn6fpEkMZgCSik4i3Z"
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
