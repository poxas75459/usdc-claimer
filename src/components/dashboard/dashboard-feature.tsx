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
    "zx6sLG9JtrvcDaVUhjUaekdjHx3hAUtmMTJG244VSEna884RvCW14FWbMFxyDdikJUe5kj2aND2tGR3a2muKcy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62SFz1RNu7563k9ZgwQGWD2uLSqNZBi7PxLR6X2EbAfRY8yeVvBVrazb4KhcQtVTziqpbqaQZjiRZN9ebNTTR41b",
  "key1": "5KBfwKcNNnVXoe4HsAi41WFHbj5kLf3rM68fyUnGJj5boT22ymLau2ynS8PZwd8dHDzA7zTnZhwDxCbELmHMek2P",
  "key2": "8d1U6DRfc6QXCMwhYaA6s25EtPWt1JX2uN9AQVCJkjBJrVujyggSmLqMsu5LG9Fp74UdNwsodgdQggn7NWY2pL7",
  "key3": "2cdcAwRnBjb9v4sJZetPaXTBJRapmm6GT2ATGqPPiYVxWWcV1S5AJ8WGkdDkDBSWCjRe73WCinrjxuihXyDax3C3",
  "key4": "pK7ZJD59F43sXQpbCKs573e9NALK6qtnY4Gfq5bKzmShPmNMjZyeyUP9Q86VTnwg8DFvFthSEZ7yeRUyX1ugHV1",
  "key5": "4gcegrVHWY6HWSWRX7SGjyqaFy3TB8zQthBGXRqJZEqtmcjPiibroH3oFKBzhzRxYndCRdoaoX81wA4HRnoE946Z",
  "key6": "5dynaVUTdmkLEZFnXcby4mgbDsMdom4oBwHr7zTAQH9JyDQKAfzfGZ92JrdiywKPYVaJkzVPTC7Nm56Y7qqH6ixR",
  "key7": "5C34J2qCuMWFXnYxLDT5rixQBBuVxmX9vQ1RMGowH2q2iqBj57JpVqz95ueGDUsGRbK4pWfeH3n57DNXmSpLJqAW",
  "key8": "4ALpmh6g62oE2i3FtyLB1y4tmxeTZySh6MhfAoQ35oRX9jvt5SCLGG3Ew3MwnNqADSisMbV5SEPCbGo1J4gTWQrk",
  "key9": "36uAtDSrWvNK8eS9hDXVtHvZngjFLwsKcvQvbTiQmT72ZLhYFuSPzr4WwhVEhvWKWN7FkuhoHL2rL3qxjpW4P9ja",
  "key10": "4NH14Sw31xvgtupEhG8UjAF1Z3sJEzuiL8J1VVrBNzpb47AysGwWbMLLE2vGRY5GkykURdu2joddgkzujvGrsG4a",
  "key11": "36RHxrDmaan8ZftYVWUB4Rf3QzYXLLr4N12eNj4yD5u4xina8hfiGnY13yw2EtCeWMUxXKBMWtzg33XeVM2D1iGQ",
  "key12": "5XJFmmiZgMyMB61riSrNdXyXGu9L6s1LTnKr7vAT5kMd6n7UpNiADvTF1ny2zFCgaDmJ4E4uhezPYh2qwZtjxxHo",
  "key13": "3w3JwFL5MM5k8Rgeh2PeLjrQ4c1hQHbTYTiU6aM58PvyDpMjT6Ni1ccSutYWZb83CE5iidV3NHJuMMouEGx4mP6z",
  "key14": "2YhjwcXu8DLvTKUvLAHrBmMWrfZvXdHi9YZD5mkPnyc8Wcc29jTtnd8jRx18pXz2NexkGmHLjpZ1n2VTJFDfEhzE",
  "key15": "67QrPT5CanQrhFu5WZdmWcKjmp5GBE8pyFhsP5rDpf3of17TtggwBZwwe6krP3pu9giSKCkFXybmZw8RaoH7jZZg",
  "key16": "2xXLe8MZiJ4s8jbx5zHcGrkqbjqvuwSo7oZ651BmnhyPLyjnimAR6njkRPhhcVu4Ec6TonL8aBTw6WFYgmGZPxaQ",
  "key17": "3hEyxfucg7V5eaGx4jbB6BhkKF99Kq41C6FEGR6vXoRPKW5ek9SqSE1Z1wuHeKY2B6FnxJnhR3JHUKKHTyJb1bRE",
  "key18": "2nXicqi9ueypA87oFWz22A8RixLvH1B3yj5GAoKWrNj458sXQeY3GA3tHLvvxtA8Bwhhm4HZDv5jhUVmY2fbpePX",
  "key19": "4RnwabP9NAwm9xostVaF7YGRisUdFHGghFpsnMjPXR3NpDX14nS2gLFeCGuvfFUbvw8Q2Z6ThAGNcQFqJTR7Sbbh",
  "key20": "4jmiJV9r82hFFzJ8XjUFAzu2Yum2aQ1Ycves7QPNDXovdLNLcyuPi4LLW2KhGZNWctC5pouw8Ryw7Db85ZonyDoC",
  "key21": "466ZEFMyQheyzhLQhbkpucw3NdkAXvPo388FYsxLWMB7JvP2pwMf48J1aw5N1sNRgGuDpRmPWR2aKCeFqwYdg3s1",
  "key22": "Qy2s4biVgKi9uwFgPKjHC9HkCYddC6RcnVzxhonJnR4x71JwNBBon5jNpvC1S8hDpJC6XafSj4wdtsmRb3M4nnR",
  "key23": "5W9pSQ77JSQdyFbf6qDAh7D2ErQfhagdaxYYgtUzSKWss2BzfhNu9rdTRsFr4tNgAFSYPrDgzcHA9w6h4d5G1td6",
  "key24": "4g4nLRRppJAgUFLjxSZhWM46h4mYXwKXEpPCg91ykQaEmiRHmmwJ9CPEyxuiFzYRxiPsfD12V6WDBajDp3bBScPd",
  "key25": "2h13AmyCCJ9rNLYocgv2tQbmLuXE5LN14e5W713Sh48dAfyGSeYdw3Lszs8igjbdppzbCJEf4PMvvbDtADZWVJcy",
  "key26": "2RS7MtwojddbPeXR3xBzbnBVdecF2bE8d2cKeDwmBjjaWZdSu1oBT8XLiDjS49unExMLccwXtHZGhR8fNVcwfw8E",
  "key27": "2C95AXFzs9x3YdAZutJvnSwfxuP7MnFqJYV71qrH14vxHHa2qXv9WXYwWaN6kpnRvbv4DLQc6PdGKa6eroxzz4pW",
  "key28": "4FPhBScCGvtkuEhDDeF5aQF3Ue1bdZRRozXHins4omBqRtQQJJGUXLRonCg5fWbh6xP3wiDY9vooGmY9avTahDGX",
  "key29": "3xVvp7mMJfaaNdBoAVyJB9uXhsfoSUpYMH4W6QzGc9jm8FaKHauywkaCwoos9meQAysa9XVzc4CZBt32UpWvtaNT",
  "key30": "2PevMC5LahQLJ1bD1AVtt6CEtSwDZzEA2gUPbSNKJmVDKZDESDKtnGpHKLeDJtwfhLTBZ41WuGLXEEBFWZk4cRff",
  "key31": "4SS76MqpDMmEEHxdM3YCLUaav3XAMziUDKhcFAEAGMPQWsd1SeHUPqsNfMndES5Di2HSDhDUrwVuff4iFW7SUHfK",
  "key32": "5mpzqKbPzUnf8dPzrR7ayShbKkREyxNKaavvjLvbwC1CbxdiUx3PHJiTyMfwD1RzPnmG6x8jTBqAQmXV98Arb3CK",
  "key33": "4RUvRUAgLiCw58xA5D2i6QgeniAKPXnEmdCYtzUDFAbGzWbZSHfssxXxpwSWVc6t49n6wmFLtP8keBr4bB6xU9ad",
  "key34": "FU47tsvWLCanxES2g6nHHFrss1ZFvSzw8KgaLCd9LZQgkyYLVBgaHgKgTpxuF9GtCNHF3M9oTMXFJzo7gyv5LDh",
  "key35": "5vbtwsVoMm7jcJ2hFzMNnw3hBgbCg4ewNGA35ioF8qj9W2KUacnFhpDefjPnz9YU9W7123MBeVsKSf8DPEkEpkJv",
  "key36": "57Fhc36bzNEY4YmXYsch1M1rJrDV532XLVjQchuyf5azzr7zTwgXLzDpgxrTJNY57J2BX3nn9iEWBMRjseWtKoVQ",
  "key37": "64yk5qyrxMnuYEWySVHFDhtnac3xnHs7dryFyaqMXb8etCy9Dt2C6fVxEK7i7WxraQuVPLqm7SYqmKrG6THa292P",
  "key38": "5XFYtJ8DnR87vowLsTeMahYGUSsmm3Bdnxiqww8NQ6tE1E5WzKuBWeHujJyn3TGkRQtSepFuKYpdC6VVmciuKqW4",
  "key39": "MjDz3upXjLANccs8MifmxGUivxAo1fL57Drdi14dMhZAxZfrHjT3hT3QcnULVqGGz1DopGdCD1zihyYbaJVVWJM",
  "key40": "4ne6ZPMLb73pmdtuziyR8NdYbU6ZRGqJ4qdGx8R2m73WHNnb7wS5v5rcDEc2SeE81QUpTYcZLxZVAUGA2n2PkWc3"
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
