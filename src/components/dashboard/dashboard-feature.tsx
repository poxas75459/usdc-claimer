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
    "hzq787T5BLBpyPu6Qb72oYJYXqVjPAX8GthPELhjpMKvaPgrxaBwR4VRKtCPmo7Th14BAKQpfj7q46W6LakyG8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64jGLeGPPhMVdtyoD2rNBtrSEijTEiLaheUsyGgyLPtfzdfUSZHhg7eS7kGnSyFN2xRb7aNpndYGXW7QXrMmYH3G",
  "key1": "2cPLdYConfVyzAnmouaUwHK5Crx78drbaERg3JuPEG6Bhp1wSFcSQi7FRqC6phqxejhRSzdoZSEvM6tZVxEhoGsr",
  "key2": "53xZzsNKVDGGqbPdWra3fqnCM3QZHLwaX43vCnrfAK5FkcBGsekDJQfrYCV6eCa3d6vH1oKSte4ThEoUHNqHXXkt",
  "key3": "FviZZts9wPEymkbLKqJacYd6SScN6sLbuFLbpJUTWDsYs3HFYHS8DHq56hweikHkuuuV8QFb2scXeNLzqXLw8p6",
  "key4": "2AhmJoujs8bYH1vsvRYW54gtSjX9JKGN5tiDrfsMSas4d5LDC8y5rpMEgmUETX8c9THEzABEPZmMuiA6mX7qPXKM",
  "key5": "3gwFU4NE3xbhxpLF6E2qVeFDhNThpxVLhz4eL8YTtqxvaUsz5NyF158GmWyfe3eqmScvKcCu4shUYtUW394kdNoT",
  "key6": "G69sm6zFvAgTMiHVomFgVyAw4da7RNtckFmGRFvXYzLig4LtC4TgTZD4eRX3UDFfQFeLgKscbDMdBQkfNT66UEc",
  "key7": "4Wy74ik4UJpzXC1ptCurFafgcwTk8iBSnXvx4Z7V3MVhprU6gQWcgsyEuJQGQR1zWwMwZppmNXxUWbnvYNzt3Ee1",
  "key8": "66DZC5yKXkiWL2j7pSEHTQWECQ1ihvjFek8HgN1y6oTUFhNRtKbzG3dJXwdy2BGpk3tKdrKEeg6T8irSGg2Ls6vU",
  "key9": "3aPPcqvway3wdo3wwrNqg9g8CEkhsZY5YUiEtD2RdTMKvuDrZErrxTPbH9SyQrj6NShY3b58FvrCuVjzggWDUFkW",
  "key10": "2vPhRBeyxJfn9b5Tp9ZK4oceGaiqNE7AgzVvveUBQgRT3jycJchTqprJScMuxwRj638j39f5wRU8qhsN7HbwuDGG",
  "key11": "3pagu5Qw7FHi2T2UsW5syiFWYb1K2DhjA5tQ1K6dDEFbM8tjg8trX1d2WZjsndDPpT4cZ6oW3szzRbtgVKVytgzB",
  "key12": "oYwi8j7EMEZtJVbCGrRVxRELhNrTEm3Gy3oxXLRk1akvJ5FMEXLuS26KHjEkeY3jzgt2xuhU6UCJoWYVzqRYA9U",
  "key13": "aGzvnHUyUfTxmXkkXz8TFRv7Yorsj5G64fFoeDh684adHdqQkpGgnbFrGjziHo2TVFj3uUeu7E4n27TxCzpWVBK",
  "key14": "3mFWH4eJwpWK5mLZdaaidV5gKQrE1AxSLN6yaMG3akFTxUuKVaw4LMBXYhTPoTLwzHE4qND4UbfsvnkiRzeGscrN",
  "key15": "4eBNeG4j2c5bT37J7rjbnWzRJQnYKNAdDV3M42fjs2enKHL5ySgvyEk8zEBzqFe6WKzboLCCXKLKZ5haX3jdcDSv",
  "key16": "4HoVYk4xeMAY7EGhq87ymffTCqWoNo7dunftjqtpxXXTEgXAuJSHkSCiCWyDfgpRiP1CMYD1FfL8FSdweLmi6zTA",
  "key17": "5qB8opWSMjcbfrXJNY65d3H43G8C8imTaG7GyEtTU7e2ivfjXFgEodDKT6vagy7G4mPPhAgwniaxB9kLDLKW2AgA",
  "key18": "PxUwwcLLXfcdAZmEzEd6hE9yy2ndLjoGNWzYnZT7c4nxMZEjoQQ9SsPWHou7wMy7YD9Stn62dSNGmP9LyHdiori",
  "key19": "5T2gMHa7W5Mvai1VNMh2DiXKFZ12zeVF7gpAc1ciq6EboWdyezEz5pPHB8hYGBFiJBJRK3DAmxLQQzmJmjFqFJPk",
  "key20": "3GAQ6CFCLyCz48Q7of47zLftcwvqjWdsNrKV5wit1n9LmUhPTgad8givnLi2dFhcu2sxrjAoENpXVoqJmF8B2dQd",
  "key21": "5ANw1D29YVyR9SoU1UvfwketNf1HPc7pqRnAy8daZCQcUGDDDQaNNV555ZhrUj978VX6RH2w2g7nuM8wiiGHJHDQ",
  "key22": "5TaCqJsHyAjKVRSWEHsehPTMFDNuNFkprkPs3qCCodKHowPaiyuJSHCXohNeh4ge22CJ7bnEvDh8X56gKhTYifcm",
  "key23": "5Hu3Jhy1NTye5SjgZ8MfUE77SvkeFQ9S31yGDzgWPDWAB4kNAbBb94aeroc69ixd96CkwWwPwbHPDt9ru4znbaJG",
  "key24": "5xUX9LCHCHyCiZUG1NFgXFUHBGytTmFfL2EuUU8tcMVpzc6EkMtER6PQvaDH2M9UBpWjHqFwE9CaQJQuvXpahoU4",
  "key25": "2YqwrkCNneXus6rdq5nhYwuWwzKZemuvM2sFA5daDAboRLQGp3fr7ycrkA6QuBcz7tPQV7dRgU2NF4Wz6csczi3w",
  "key26": "4T6zhsTo94SzLEJxyV9GiK17MWJKnTA32wb6vqkStFLK9739fdFUFs4x954NUvXD1QF1aiQ9QFuX6h62gotjC74L",
  "key27": "4btu1rMf7tSPircsdqXzE9VFzHzM4ANEEcC959Bsj9ZSzZuhSnujDqgPrf81oUXJW5d1Nkwwf2RajR8Lway356KD",
  "key28": "5GM4GrxRPEA7FfytzHzifvBS1gVHFS3RgS219iGJSpN5A1Dtk6Y8uidiGtQQkSR8ubYfRE6APsn2yFaRF8EmZepU"
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
