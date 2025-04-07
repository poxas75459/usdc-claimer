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
    "sv7hRpANbvjxruYiCscb72koQeefBan3rRNbQX46WHHo24zE7NVH4L1DBXDzEMAjnAq1b1CAaZ4V9v9hzxP9Tfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezbQrkfyTq5gk5PL2aep6Wx9hCSPHDZ9sotX5hEthFg75vHT32CmVAhZAmwATeYAKTno5kgNxebtDHJC35Pe7EM",
  "key1": "3ztR1xSYv5s434NZtGKdPhFnKBZFrpYUccqyGoSkxQbtUTGzwvWCr5odpTkqmtoxBu6iEWDNwrE5MgUWPhQjaby4",
  "key2": "uvThk92YmtoWGHwVpFaxzK6nCCp7LspUkSuSRVQN1DbjEZMDtU7CaVvZoGC41pPoK6vdLwNqsv4Nd47kngFN1eL",
  "key3": "3BwkCqkyfSWztNYur8KCP8MSwubQzxtSBjVFCBUmyizGJrkt5fYZrZnfQUdMKQz3tQs7gwaY4F4nWzRSJuLytiaf",
  "key4": "fWUYoZc3DJN5BzEYh2BskaC5uqXJC91iLNCSz3P5cgcBSdYYBPKhcUcSw6KAapjgJxbAg5vPA6XLxyEy3nTdixA",
  "key5": "ouwUiV7VKQUe1NGhyUp19VC9BXQR7eXSp6JTbFctRLtTsrK6Gg38FCrLFvQMhtSnp2ENzp64AADG4XCxxWbSNwB",
  "key6": "2iQXBLfXLi5qFtkEPvrmXH4wumrUy8WDraaF3vYtfX46qDn8GEL3gghf2nvv4eSVYJh6wL65URV6AXXR9Czqhfi4",
  "key7": "8oSJby9ZcTDgwCiPhGD6pDweqgZtt4k4GCMoGAjRGCHnrSj4YuGM23Y2yYtF16tzp8WpFXQBvqmWSLFREKvabsB",
  "key8": "2bULNSk77H7Cc8sexfVquvLxCiG5GVWMs7Tz2CupHmrwrjRHNTtNaPU1iytRM2YenvFNmjiiMucGDS5uCW877pv8",
  "key9": "5W6wdJUd1a5huae3tPiU8cpQaWknnWvChgjDC8tZQ4fEnH37VF1hbBxQXZtdVPHFT48CbsqXEdJixwBFBqMbw2BN",
  "key10": "5TfVLxTtmugYQpxwCrSDgpZ7imTsAfE4MJv4PwiuHCJ6wXANyyytZBq1sAr7f5rdxoPZqJ5ivsUN82KkuGB4CUEw",
  "key11": "5V98ssRUCh5LJYbaumGw6ycBDrJ5J3c5HGUT7h1Wx8MktHB9EwKmj1nzAXrvLv5bLnUopJPgZwvLY3sd8QmsA61Z",
  "key12": "2gjH7ykNYhF8qQTTv5x7i7yqWmF4XEVC7uxmjYFXzbqmZ6fkdy8HZcSNBoK9cwYyA8tXF2DooeauLBfm1YRybtkc",
  "key13": "4SFjz2vvA9xNPXyq4hJwu6EBqnZHLj5KQX3ukE2ezwS9v3qyy2L55BAwdLCyFaBHRoBjGtJQAfVGdd3Sb1ZTPX6d",
  "key14": "2i7sZr3zkZkBqJw2rnsPNQCNSnAR48kcznq4Rq8BsW4qb6RgEgFE8b1zutavREgutsDrsGL2CMe9Kqc6xcQEVCHm",
  "key15": "FePKnKBE8MMDCtm9bWkgNoGZskfVpUNyTUCDCBJYFtGaDzmyju7UHojWZ6P1NgMPRpdRhCe6i1QbD4t4CkwXbwZ",
  "key16": "25mmVwmUa8subwqJuJU75uqkYw6W69a9Mr4AGP1t3MbSYdjFQmvWMAYWmJrojWHgeqDSUQVzs8fL2jkLYiFcjtYq",
  "key17": "2a2uhhDLURxwWuotj4Dwt84bTU3CJy5ZjYUXD4uwqFJT8oUwUYEjrGA4gq4peNSYyaQW3XyYzcdkBGgEih2z75ce",
  "key18": "6vp96UtHmuPvFqa4zwjh35T4TmRyiPXF9BFWuTcaTBWHXdbHBrtk5UqMFzXzk6YXGNwNQ6KnnG76JVdtKkSsxvr",
  "key19": "2Yiorz3ARF1HKbDVcZuXo26Ehgc8EPm87k1Md294MhueEsgLgiiVQieig7qqrRTwyxK8Hn7LE4jjC4jYyakYrJU5",
  "key20": "42LEzAM7ityudegsHAXdrNvqwHSG7c8DpfMzqTEt4okNBMMWmPxi6gvhFWusmQKbvMPkkuKbBA5c9QWi41zwSPC7",
  "key21": "3hdfQXseYFmaQmkgc39xQaQ1KTtF8wnfWDJ35WtZVJJZDkWMrc4UNQLEMYhr13HJed8ucLd9Z6uvUSNJyvFQ6F1R",
  "key22": "5QWktREw83BzEQ6urWwW4B6zHapsdPZDSaq6TRUjm9MoFWCnfTRFaNu4KQBFDdLziTLb5wFwvvpRBRYzFtHUXJpP",
  "key23": "3j33ByUPSTUCfyAhEJ2otmQa9vUYQmWtsnvWX4jovamzbnkNpAmySngKWojZVuqp5VHP7nvDsf7nsp23T8etKbv8",
  "key24": "b6nb3pLAgMA2j4donYi52ev1Bbba8AkFea9uYZiVsgFKB2ygcowtPidPQujvCgU4fCggtihqPZ6SiGT6mH1oQT4",
  "key25": "7aWFiqsU9k6t9dmgmFR9V869QZzZrsXsodFewZ1BwkcDLfHshhfrzuGBtYhkT7yLbXNdoeDo8xw7YFVt9YkWQzA",
  "key26": "R5BCtm5sHwma1UQB8iw7d8YpLMpc88Y43ZAbnJ4HumwE3qdwL4kr4QFFU4cbioLerLqMAvi345zVx1U1FB68qjK",
  "key27": "tFQWCrNg2VsJ7FgUDhutpmFxWKuvjz22ReSaJyoptpbo7vehfYVjrieyv1whyu21Mz2kHLHk8xyiss27eaycer9",
  "key28": "4zvCZFbJecZkCGA8dGHKCB5y3Su4sZ7xdd4csKKzHkzbJuyNd42ifa751hLezQwmkhsHGqWm3DxLnYEKKE3d8bUZ",
  "key29": "3sW894LZX2TsL4WNbnfgS2TzZqsWzj68xiM4LTGsu6rF98xpM5rj1uZfQihxFhjjAngNZhrRbECSt9g3Kf3koj5o",
  "key30": "5QWnZGY7HNEZk6ak4aycLrwKrcqvShFf1WgxFmVREYCQYpbMVut3ZgvTj6QRepZTWfd5eZ7F5jCEgMayF14cHGLF",
  "key31": "Z9QVr3WGqqcm45mo2ABB7R8UPhzCZkY9DTZHW4MNB18SKmPXD82zNHGK7d2rBuxin7iiu6jokT7UrsNe14PdByr"
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
