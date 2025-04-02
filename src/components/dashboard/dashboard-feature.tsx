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
    "2EmEAJDZXJRBP3qvs2FC2GjKt9xGtHg3LwPE5ftsZhWzn1yVXjpVzVaVkTzo75HpzkZDgfvXQficyTLBQ5yTrPrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NenmbaWa1wbmJv136ArmVHWtw9ZXb17GucPShsvBnnhegox8jeTdoMvtUqmkQPD6ZZnTpvhr86FJB4Vg3hprnvv",
  "key1": "4vDRqGJRd25QTShhovCiq5WVqyqomiV33jnnZ4DDyQooiVCs5sCur5ktbNY9ry4L6RB4gFAziUfP8Ue9rTAsJBEY",
  "key2": "5ZVg6TnVgYUMYW8aSzUWuq55q2bjy9iEbe8awePFxpmGWB1awggvkm3DFavdyTzu7gV8JNGiePoGCCDQ6Y9aprkQ",
  "key3": "3VB9FbAPVGuEP497uCj8ZB4FBLffPhC58ScnUQwYDt74LhfiNkmCaLP2RmPQU9jWPXwJVhHAvPJAZ67gUCDuQex4",
  "key4": "kbuZcioRQokXZfaNw7W1De4iXBVkvG1snRa62PveR9u91gJ8y137KownCMh76wRGc6sTvjaiJGncQU9zGaUfJiV",
  "key5": "3trLVSLgRLXFZHdWHA8ZPGErwAXH7ujs1F12E1SJzpZH2cKPZXCB17Nj5MHxmbkY6cSAchAPMbcyQ9GFr61xQNy2",
  "key6": "nrUhicwtMBnmaUoj3ZTEThU9c2iaHhdSM5252a1ZDEje1PVLQTac9dJ6Kot14K2HVXhUH9UxwYvcbYYYozaoa6a",
  "key7": "3pSepCLhsq1hRb6w98VFm8FouCvbs8FgGKgZN4HE8dcVph1qXM7tsSi4BWbP5yCWo8gBun8bX2yQ4Y7UhZQpY4AR",
  "key8": "32DkVG455V2ohCyCyH65JaMxDuehc4UynRcSeJUveQZBbLg6s2iUcmubdFtBcNrqK5nSSjqUoriz74RagDfVeLzw",
  "key9": "4aLgbi6puz9yjVPxLFqGizuoc27jxEzCNoL1pScUsDVCBkdiuPeztqu5B2WyFppTVFjwWLqBj7gejoFKeA1gukBA",
  "key10": "21H7PYka3kuz3ocxtPKUWpg3NPfVXHU7Hk17avrxe57thXKypRu4GkkgipTpinryv2UM2jQVjpDz8kmWpxUwPFzV",
  "key11": "5unc8R2AmRVLSyqSwbHWYLN8ggGxrFVnKD9aQ15mxDiM2TqXht2YvM583WvN4gRi9RkCxTAWmFQHD2wGefSnQ13F",
  "key12": "4xCKsFTFH4BUARAAkveeN7AKCQqSXNcwYYPTbfnkgbnKsmGZZCQNjm55aRhw7bDWv3EVmtvYXs1VpGAwPHbirqcH",
  "key13": "4dYrbfic5P4qdQ3nG8YGDBYSp6r6MbAVuBHydek2d4M9jHWKvzx8yQ5cUHmU93PzSbFNWrfeDgGYpU7yiC8eVU2C",
  "key14": "5hHDAVEpmzJn8uaweNj883gk2CQpmJHHF3Vga2Pno6si2oiVnMXoX3vPC1pBZRbJFXSY6MEKGtFuL6Qm1XykKEL",
  "key15": "5YybfjRLuAsx8muJxp4hPFzN4GrpadJJcRyDeBYQiPDZZnxYmnL8CWm7Ge2CzjnvvoU5tgoVakVctnQj7e3x7CXt",
  "key16": "3xQ4FacVXmzqGSyndFSEuUEo7JvRTt5M3BDSYHkjkcwakvV6WkPNF82wSh6NavZqRjvgMvfzfNb7jgUc21N7WzaY",
  "key17": "mcrwaPg5EcESmhZGhK6tjQ7SHRjgYjMY9hNB83aSpG7GA4vFMs98j6yXz9VtfAjYNuGmmmbxKezerwdQN83MvzW",
  "key18": "2Bemwy9pZaPu1VqmYqi6JtxxcEsc7dCrkDCyhwKafx3k4bBVNFHvxYBnWVfwyU5EYzDfe9ZaCyNA8NSP6PhKm5QZ",
  "key19": "5dCA1cV2dgJvqGNNsScx8iaddkjrppS5VyWSgz4faLrNuZdDjCjqKDi6QZGJ3wB7UqQGhqL26WEw5UBCm5et58n1",
  "key20": "5rH9A14jXATdL7cvQQbrhrJVSMJ34fbHVeqs41D3gDboSFGC5PUUhqk9RUYnFAjtHwMh7vL5sYbbjjuxxLwJYjHK",
  "key21": "4bWCwrY3q4x1YHtHfJiBTGprJbh6BU2G2MoJCYW6nG95juztRKunE5h6QWYzHZ4yosNt2zUkYfUvagoNJdy8Q779",
  "key22": "4fSYCK9r4r4AXaB3UP4LcNZrtidz6mhnTXXhsMpyzPga4t5gDc7fG31xxvLXWP6KRFrbi1bnkso69aVL7TgEGfsq",
  "key23": "2KZQ5YG29nQ7Jm6YBozzUPohNAADRJtjzcSUx1TUKMwGBPyt1XFZ6JezeCV1AaW1t6NoADmWY2wZtJTbfboW5G9p",
  "key24": "4nqDaXQTLhYr9RvYbRmdBjZFwNyBVVhjUyxjiEuRetw14M4WuUQoQpowHrNLyEb1NGy5ySktNAYLdjFBqVLr5jB2",
  "key25": "5UnahvwYKprKGWSszsKxtProwBKMNAjiu6h15Aj77c1cEeVSjWGnimBdpWNAmQpi2BC7NNuumyghXgogSAsMjwbL",
  "key26": "4LEcJmdjyJH2Yt5GCa8kP7twkAgVr3JNw8jZYRU7ARB29zrwYf9KhfVjMUQ26ULPpkaZgmbahtHfDwYa6GBNAy9i",
  "key27": "2XXLxDfxGTbKBSxid6nmzHwcZXgGRYHgwbPeyGnNomRmsFQRyRVTj3eWoGSEByoEo6gK32K4b7hfT8r11hFXeEcA",
  "key28": "67kxecyABMekNnZv4gB6HSNnUGkGqJUzshjhBKoSbTFpVW1Xo25L3UuzduBVbw16SCwMZW4qpHTaYDEiQUXhRDq8",
  "key29": "4aoEZG2bLwnLrUfZCuu7RjrscgeydB8mtfMeQrbneTRSdktFgGTnRZw6TYn5X4BSRzDD8LRVuqamWqGwEWf8BJbj"
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
