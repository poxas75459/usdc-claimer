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
    "2aabGkqqcf6RJZrJg8XrU1aKZYSERLeh155Huu596dtbczbJP5RKbK1fvwtLfoBtm99ip9y4Rzvy2vMajytoDhmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qudzMSGDaL1AL7jJrKd3wGtYnSft6JvSoijHfFc64CyYsVta9r3TKrvH99MU6CABvesfAMotYzMT1MN2QJMCF2o",
  "key1": "2WBvdRY5hsT7AqwnUCNt4tyRPrAtFKQD8A3EKaDoRiUREFgZqiTTBSzuwn5Y46b8Y84QD6NLurfUBRbqpqAqFyzw",
  "key2": "41d4NuvE1b82XUQuAM9BKR3NJnWboHmm38ymY2zHzn8kJ1jKbJs7KMadd484LUnxC81VYktjKqcGEhpFxXgT9JTi",
  "key3": "5R31E9fdfZNE9hUisz9oREx3DC8VUz87HmNJmB1WXimTbHxnAZTMRXhKDSCTYMPzkUwETNxLdRzKzYBqLgAffBVt",
  "key4": "zZwK5Q2WNtsX9m8PFK9aFDYyCsUZGVMn87v9utACtFx5p4DBFcn6upTbHvfJgEeVhQ63QjzmD3s2qsQ4M97uyNM",
  "key5": "2xExtC1eaQnvhzCqgavNiJuicFrSXSpvNRcfU24jK95DcJxuoHq5k4XCVnS9DXqWJYNh3hZMxiZWofCVmZEtorne",
  "key6": "3K4XBK3Dq7tQFC2VauXJbZY9FHQ5AohnuLfu9JFbTMVZU5ZzaSCRhR75GmZdP4Y9NgfVPWbiZoS4BMZRHDCVGVRr",
  "key7": "41VwNb45ffrbqNAbKsfpsXYDBVLQtuWYCVYWa22dvwU5qk3wS8Ynv3ngaembyT7j8U4WbteeBxTuFkYMrRzES3nT",
  "key8": "5uzMczFMcaCwDKQNbpwbdSfHRhYgpRBCDpVMMkGLYq45cniZFXwna7wuFgfU8kPsNZ49nb3aAhDkkxCLnRCf9uz6",
  "key9": "4Deo8xqFZHywE2V6ckAHJy4TPRRKhJGDccQ3k2HMfn7YFk9B8ApHR3LBaSi5CPwXS7uy389RWJugecSK3L9RfHrh",
  "key10": "4y9YCVxRSDS8yzbZvPCbCS6kCD7uQVwfmPr1MtM1kqs3QcthgjcY9jTUwmKj71KtfhYLbgLWHJ7UFZ34KWTiuzh7",
  "key11": "YN5cuw6zqAG7GLyidHdg1Kt5BPFCQzuHqgeDiWeGMe85XuV4vbcGbMALLc1xijcDksLvWvK1KVsFfVFYXApp8hP",
  "key12": "UDHYBKhnWjWCMdx9jfusYnWAU9gpA4c8ZRAbMAXENUkJEmnPLv3n1DF4N24WjJcAu79HJSGjw8NysgQ9zgAFPsU",
  "key13": "3JLWy4dSdz8WBA6W2AMpRH9gdvJbaLW7z8vBH6gXEtK3sPhJ4m7pU6LM7QxZKnrkmbq7Jv1grLRXZgLxEfN2xF4s",
  "key14": "2pRiEG4CtvVEEhSvjB4ooBWz7bTE29DN2B6GpiQYMpAMYnbbHrG24GCjif26YetmgXu9YYnVXJM2w1f2hjzotRE6",
  "key15": "5RRwbTLW55cvQXAayVwJioEXFszQ8YSz3WVR6XzPvnkpBjsgnHX6qLHSahEWTfxoAtfQ7E6tEC8hSbVSRuyzLmDf",
  "key16": "2y2JBAJnDw2eC7A4bB5cQbE3xzt6P4VE137v9kHmXNwck1bZq5wNDzyQgLK7u41m5ndnY17iUKkC6yqkc5DBsjPP",
  "key17": "3z3g8FrZ212u55XaL8jkyJXe89Coyv79dsf5VBTLW7LsumeKcGUdd8d2RaS1v1aoszRNHnxK2Bx8h37Vnr292CzZ",
  "key18": "3JSkGVFNHDV4ij6ZMSzeQkkEUWzoxvSYMXzuYQNHdw8btfGn5DeWCAXK1Ft4kFqyMSYcyrHFiDvyrVMPwXKmfo5e",
  "key19": "2hEczcVNxjpbGJ8bdMeA8bk2fs191yMiU73UkkSUrUA95n1GugdqcWMPw886DXp1N1NRgN1ShKjFpJ5kGE6Bs1tB",
  "key20": "4pXQFTikXAeirCQNdSuiZhf3PDFtmAjutMqYtkLt9AfCJgSLwvMqT4P2FZk9WKPVK1Xaru54utXNU6ircXEwNTub",
  "key21": "5LfJiL9MQQm413fch6xhbLjpWHbjsMBgo3PgNgfxpp6iiVf57AjB1V9sbW3hAv5UWF4ipjcRvJe662qDDR7YSDUU",
  "key22": "idtbSsidFpJ5Ryep6SiDbqwY2rtMKhT7tzeRVhutsdVwfPXMJLNFDxx7JB9AvaiBvGH5Ce9LRF25unSPMhiumyT",
  "key23": "2718kKvmVdEgqVsveUzgDj3HEdowthHkggzA1q8STzxJQeJfcqd2cX59wJ7665UCiVcn4dRNzGQJjLZnQytTYC6p",
  "key24": "5zri3fm2pth8SQU9fgwkLW7GbaxmhAi5N6HKhz1bDJtJhNFtfkM3MPfiDxPQFLhsAxeBRwZiCoEe4qhzu6siJXLA",
  "key25": "TX6Lw6otNRBPypwWPent6umk8bpgkPoYnNdcMM1PSHLwhxPc36Rn5nRTmq14v1zK1gxnWrDhsRw5DUUxSgiZtWH",
  "key26": "9ucTLhiDeQiXJXrusmiiUrGK5AAHiRYhTff5Zqi7bs2G4aw8nd9KhsGksFzgo6GgCwEjLUHRSuWEBPk5djxetiR",
  "key27": "A9rvodThGCAvFiT8XYZi9ZndQLra9kVXuLh7oxnvpSceiB1CSKy8jmYBFGY1Q3KgncHLi4YgctQan9uAwCVGet3",
  "key28": "4mE8kYdCaVkfFZbpM2M9Nuw6MAwgrhywEE8gEh3w1LHRQoY5VKDQ2YKUQ9bKVbcL8o4zFxwZnx1eUtPAy7B4grAA",
  "key29": "4KhsGT9dtNr4t7gvqHT9XtAecxpca1FCnXturVz1y1t5NrNuAsDn7LbJj1TWqaoo2eE3wpb7NLX2ndXmom39U8Mo",
  "key30": "3WXe7BDiMQgbUg9EQD6SaZ8GrVwENqbeLeQ1rp2HwM3aQxS7PBNGsuURGYFRC8jSF8tbYT2cfD7JLL1wtttECA7K",
  "key31": "4xadpXMx9jCfe9xLhspxyytznCEVK7ktzSSdiX25AzydeNHrV3KMjuSQv1swgaqWxaniA3EKXFPHPH5dCmZNfioh",
  "key32": "3X7q66xVQBodz1XzncgxvhyuE247JTKMNWv8MWaapM5u714DqY6X7qgtN399rbB9TfDQdN4F6X26kkeF1HDvfZa3",
  "key33": "A2KWQHNUKEwnp8zww3K1iLXy72UJygAdy3hGV9Lvf5VtX21Kz8M34mLDD6w6jRmoUui5DgXQFXoqWU2R17U1Nuh",
  "key34": "2oPPJbYatGVBG8eBAYBpLEzyVsV5fJcTGkaTp5BZ5HNwPE5wu6WAsU2SUDrMpJU8nzjzmhXFgdu9qKng3DmMDVTX",
  "key35": "JgbkWsh5H7ALYgvNDSegYqb51rMzss6M2juhL9bh86nYEM8MVFG5GkAHoMyTfHYmAfWJoYSkdXobXBLcTnPQRkJ",
  "key36": "2S9tCGS64dtn1zdCmFkMw2fFXNLAPDYCdmbC43BGFinvcYcPRSpqnRXFa1mdV8gmyxhZrdgJ74guvgXgGzuMM4P9",
  "key37": "3UAVm5GY3FR56eoSa1Uj8DhLxGEyrHgzQ5bhFzWYcLYv7xYupimKtgbJFFR4ZaYop5fT67XnvU3Gc9NCVV8D69fX",
  "key38": "3s7hLZXG4ZGH53vgMSq9ZXzSPnmZp7x3ztvJZ4ja7dFdnNVKHZer1Q8Jt9EBtakXwp3RR6CXpAJ5fuNx4B2iWT87",
  "key39": "2Vs712KwGigY986UiTS6erQvo6dq3prZroxrTX9wYK5BkaQ9L6xouFJ2sxFmk4Ac6B3HJvAAJ9vCYY4Ffk1xWEov",
  "key40": "4ZD6yM5FYgWvwjXWRkyzd9teVnKiTUMgwGaxy11NRKgKkkUxqtazsHUQq8AfFEUMXw2vv6k49qG6FnehKrzLBRAE",
  "key41": "128A11vQ9NfmB8JvVFsxJt5AxCcotuHdvA3G6NLg65MULgyZuMWngwr7oQUJMp3Qihynz5gC1rmcDJQjsq7NXxto",
  "key42": "5V9AaHD6BjWD5amEDPUgaPJKiEsUi4cUEZDqKfxbBapzXXanu523i6ViAvNDitokzNYZuDcvBVac9Scuo7kWFFJB"
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
