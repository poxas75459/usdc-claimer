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
    "3EeaXKqivRYKfh7Df9QKVHmBsG52B5NXDwoUBBfw7RAa6YCh8oWFW3BxdLgfJukR3K6SMPNjhrKbAEqLyGhq6hPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QxuDrfSjgS1S4McqvdKCguy53oFvoNKKUodKAJNkgGTsJQsmH2Hxbg5NATif8eX6aE8AM5amGSFsg115rp3kGk8",
  "key1": "3aNjv8eiiWfaw34sCqE6w6cm8kok5ofKR9sv2ia6KtBufHNMHReiFarivB9dpYNkkQYt1dx8tYRaYHuPcTokg8i9",
  "key2": "35oJa8FKAKLgJCxd8pgPMFvMsrSksa3iXDpB9Bp5hSQuuCAY6RiGJ9XM55eQSyWcYFWBKb7zF5eagctHgMffiQtQ",
  "key3": "utKphuSTpUiQCn7J5taLs2LuS7LHv3y7fesvPqdqTRZ69eMDxDiYyNRijxNmRiWJvHHdYnMzG34qY7hKsbNdizG",
  "key4": "58DYtgqHbbM5od7Uc2FF6sFqNLnCBsZDZyH8Ln7FvEiVsMkcuKQD8E9hFexqp316agWRG6XZPyyjUwpcAiQLwHk7",
  "key5": "5kVu34MMr1RoRYju5aEHSna7JbLWgxw4HTBUYrddLxnZWkaPBvvUAeQu7BwrJCK5c6YJT234WHKMkoirhayyrcs2",
  "key6": "67GLci8AnASEv1ek2mStx8STz3Svh1hYjfzNouuR812QTLD1ZX3CfVdHsbo7GLVYM8JixK73nXufGvpaKFCEwP66",
  "key7": "5zi3jngAhSqY9sxgtpwN7t2Qfe4CH44b8LQRQrJ1vHvshdE7quL83EMkZREGktQsZ2JBarTFtJohPWqqThRVMZGy",
  "key8": "2mXGkQZCbMohayPf5Srt1nB2mHiPxCyZjcSWpEaszEbLmTopn23LYjUK2qbdxismHHWiAWTps4bBFcsBWum3apfu",
  "key9": "FWFFC8nMjogVNKgvTqVWQZCh7owj4g95hjFBEsSJTRbDYFUYki6sbTsvVXqpfsHzHvt6JAmzssBik9CpYh1zmoi",
  "key10": "5uNugRz2VGydXHWeqHviqqxsYyDBJqVRuPJvtp9L6nnAD9cfWbN7J9NwR8KHC3mycxcLFRoMNFHxjjKMss1tHP54",
  "key11": "yiEFwriteCe7mEgNrzaqkD8znhvdpM9wmCHr3eQdvRtyXrkeJsKkeuLF3wMRao7UFVuTpWfNxV8HXkHsumSVqmD",
  "key12": "4bH5qaCK1ibcRTmogUC2n2e4L1cAHKfPP4mSAfCHmk6imsamk6wZqv6gFbx4VHDfjL96ugnpuqAh9cNZjEekmXyJ",
  "key13": "2GDTA2xD7tvCPaFPMv2CXUPHYKUDGcyiQZnQKznvNhXkfXMi6YgnXg6zxAg37nsfP9sKE4BW5rHZSoGKJdyq6FAf",
  "key14": "31ATozK1sm18dHAdsoyxV2hiC3gh6bH492Q4CuTrwZAvNpsJQM76vT5ZPapGdq1vTmgR4VmW5rXex83kWKWPkcWm",
  "key15": "47yap7ygyQwYN8tr4WNZAcSCosTvdgSvi7quEG2sS4nPMiBWFgtZTZMPurPom3iDKoKhuz8oN2DKD3PxTvL7Dj82",
  "key16": "3zSX5fvupu8CJmZWicKbZZhJsVQsBhLdiTpgwrmc9vJFaYcdyVrFqQMdzAEBBQr8fVqCDAi3BeTQpskLENLrfu73",
  "key17": "287aqjccWgUSVhvYAujWqBcoXmoYfqavuAy62KK7uYor1AdRS3dxQ5EZz1AxMMB2hbbjxxPsrC2P5JdfuoUopxdt",
  "key18": "3kc7ZfyjnNTxxSVfv4K8SAk1AfCRHLqFWqw1B6gYs7B7iCwPaFC8k7UeSsceVASfeQBCzUrrm3rd7nmZJ5Lfed5S",
  "key19": "2skHgDAFBwqQj9dEmT3f71U4TQv8d9gyeheqXsapQFETfKafLc9tv26XToqQt35sWgrffXfptLthPUjs9R8L1HKT",
  "key20": "3DBLwYMLyziJudHnvrenM1SVyMCZNMoaFiCr2uMbPHeyCMnrQVt1aSEQZFfkr8cG3aszCGJ6V8KKjQTBD3QBuWCp",
  "key21": "EwmVzPtPn281dQEM8jKR7oZJkhfoZ9yKAtASyAoP5RHPLocHa8siHpRKwYDA9Tu7viy43X4VPskTZC5YL6W7srE",
  "key22": "52Hsj2Duof6nwgiQcBrKUE12zZqSzRgiYKVkwHjNHgGjYZuyKYUkkBgDYHjQNEy7JAuMFoiwgdS3UAHKkiMe69AG",
  "key23": "2ZYNyqxJ4e8mmoXFoLJ5fdb7AXbyx8vimvGNsv54fakvQYEE3BGcqXPL9kbP17jjhu9nEABFcrZYVePCt15CQrMX",
  "key24": "66dKZpK7AEaakuGhsndq5AtUpsWCoBGu46jn1f2Uzt6tCb8ude9gdmrTbQRUnPnVn3NdMQsKJqUiCDE43vgoCc1K",
  "key25": "2DNUwkWqZAKnAtvCKK4KWBekjeVEgx6HU7hvxs5jWDqbiXeSjK3mxhhp3Dmb4hXLEPegQhM46hLGk52k6W74k1Y6",
  "key26": "2YySKet1GB7HSuhZTjTVri3zmc1rveagNiiRfpYKhGMBV4qrzs9zjUJSq7ufbi6m5VquJC2EmeXWrdzAUeKkTjqT",
  "key27": "24ZjJRrWc4zwrhScgaQEZS2bHdQAwVEKMBkUV8g3pTMqBRgviG31YqZhJodXAe5CYdxxojsyMBiksjZgKDM8RZPS",
  "key28": "3dUxmMFDRRkiY25nwrfBNdCSnQJ8AbGpGrebgeNX12jiizLW95WEE9JyNJic8brxcfU766ZBhhbnyTSd9hUwEfFM",
  "key29": "3cRWGHzMFysTnqtdB6Ko5jzXTtkZ9smA5rQywQokyH5VoTQm9SLTztBgoYug9QDmQNjKPir46WaLnWS1mMMV4yup",
  "key30": "3dricwukEzu9WV7wtXvRc7z468tyCaJft88eCzKvCkUCBXE7oRUxHqBdJFd5uNppjtJNVLYzFSJZk6pCYKSewfk6",
  "key31": "65dbKNq5UNgLug9w15qM2hTy9NRt9GmGYw5p54KAdSkSaZZ1486rHsRUUwW4j8LoZWxqtpSJHkVPjZ9NbeuuMxCo",
  "key32": "5Rjrp5oCyM41VYjUwqDpyZuL7qTGb6DCKozYQqLV96XADSkdwYTrchfpNwguvX238eE5C4tnA3ckyPsQ8ufiZsFu",
  "key33": "62LmsudyYFNpcFtsYgFLCYVUw2h6BU2wFanM9mE7Afzcs8PxEHxvQXZe7inEEdLUHGi6oZMgoexFnXKEZZDimsbt",
  "key34": "3tw6ofCpAVHdqPPJvpvXSNfFASJUPf52iDTtPCECZRRWjEfvTvJNdGPJuL8hGLNfbY3We4qwrGTabq6GjgZhuGtp",
  "key35": "3atCwUrYUa3yk1s3GExw5LH1uEtPZeGMpiyxMLdauznvrMvhAtmAYJQb2Z3Du1As8b1QRYEDxDfJG6ygu2gCvQL2",
  "key36": "2sZQo97dCLJPt6hq4dBgJZeLYoLVVjDXwFrLaSvQsMXfJhrTqSWogExapzDGeFV8nVoG6sWzaoUgavpdqfFst1qN",
  "key37": "H8MFxfVdBQKDUwtySheqVAgToc87wgFN9B8BS4pTbhXA33uUaPw4euUYRbsuCW4pYciFS4zNRf3kgi7B9U4tb54",
  "key38": "3ydKQeZjAv1JmKezKBM1b38dWZUJLfgEegeK6drgXsGBimY2F2sxnWxmF8GLUs8VNriAXZv3TGY5NU8ERZwB2MGb",
  "key39": "2we9qhmhJsharY2qQSbYKsixSGLrXtn1SssyR3Ch2jMR7PevXKRAptEhHeaUPUzLWvJisvJrpurMNmSuVeBmureU",
  "key40": "24qzZ3mF6XRVbmNGs67smHRByvjBxfW2mi888zy8kfu37DacmUBkj3rW99gs2g86jUrKjDUvTueJ3iSyKUSCJaY4",
  "key41": "3JvwFcCSF1s9Qo9pLKWFtW932RhVbdrPmvwkms8g7J5QCqpnha7zcVqjKXEEbrHriGHc2hC3Nr4yHC3tDcBfMRoY",
  "key42": "2k7m9onjmPK2QQ8avBqVnBHdkdM1YMsv1sKsDTWBTvHAipm5EMaSkDh6tEC2S5Z5ggemyoZudNozGfq5YWhAz9jD",
  "key43": "32oc9LzByT9ZnbxUz4DbrXpkpsswZdbHLaL3Mn1sQJfFyq6nopAT1UVgjCjAq5hxT8Gn6fPkkDp8pKV5hZotZxVc",
  "key44": "4VUcm4urECk7f32hXx99XpSFkizkktEL6hTrjdGQywL9vHYXk8ueVyDJZpdjzNa8yd6j3xoK9ijG74nmkyLz5oBg",
  "key45": "2AoqnH6xaepqAsy3QbPxzRgimZ828xEwe6juc8phnx6qsANtyQkyrJr9nCFk7cJP3xvFRNXC91oYSj53vbYr1hYG",
  "key46": "5Zz55iRYsrVSjhrqF7N6mLHNUMJKNA8nBcgXVmU8Rtsqv4K7cXaGcX9DCVjoj5zci8ZUCmQi8jjjxxVFC6tARtKB",
  "key47": "5j6dyu8FX86LhiF5biiHX4Wah25jFMg3eT4wg2x8s7oQ6GwoDBzqf45fqDbBTk4g9FjbRUQBRBcurauj7sw3Uo9P"
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
