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
    "4HcrCcQFe5EiR8qNFNKSLpBd7qzm3fs1pPfDf7u4eNTwSDMd9fjfuLg53RV9Pr4jup69yGYKEqBemBXJrX9TKWMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSxhfM1xcEDhs6G3pi5ECtjYheq2cRTqzeqmNegRzz5uWbF5rQvj91Gasye4RurEqDjgXheGRufgAWPrPkgJ17K",
  "key1": "HjoD5dDts5ADBDsZuLuQmEfej3yaMEdEwsjaM6HfSgZH1mV4U1QCGDoH7hpRGKhvyeJYtesxv9tUuQBNujJgPk3",
  "key2": "4zdLgcjHdzwfGD7k6Zn9sRvekkVynx6WrmGmEFgQ2YMjevaVsiqfYJ8QZheTtHkYdMAai1U8RGqmJSvybDM8cdur",
  "key3": "3vwFZZ1UWKNN9nkmf2QLmWuGJrhgDc2fYK9V8bzvbQhk7qSwpkKSp7K9dJ1YMfArFp5x8if77VrmJgQUukm2ty4a",
  "key4": "5ftQnpzxWxXCmfWWKqfe9jbpFHBeBgChuhd1HFjAfjdCH6MAJ4xq8GdpUmW92RJY8XCxBbtp1JFtFHFxSANs4pYC",
  "key5": "x5HGfmuMx7R2moWrg9TWepnCB6YJaRAX6c1TRRCR2rRxFce3yfpzPc4NNVU1oNgV74trkmw4NFhD1zxrT88EpjS",
  "key6": "nWgduW4i6dqDJHRoQzWxkUdp6KvivcKipZAofkWD5BpbuzCGssHX14tDWMuxVPvUixdsL8MQ5nhNM1KdSSsyxf6",
  "key7": "AN8HtCtchNg1wbixSpCu144sLE3iXWYh7nWGcueH59aLyuwisXXPjPrrS7psbSCsGzYmyzLWJRa6hqWi4GZHyaR",
  "key8": "9rN7QB3rkWfMf7WQZQoRDFzjB4ACQc12ZitG88STmqexP9UzPRwkUEYRPR5aGLsKkrxfHnDN3dNQ9VDoB7CeCcz",
  "key9": "2Ty5jBTT7V1mGXMKvGEk9DYcL5CvYyVFa86PZDR7vpHjwR286S5EUCop85DVTmR4DY9YKDJa3m8dhsNnvkxc91Ja",
  "key10": "5a8zViVzdtWXjz3YExsTDwPiWkayzrwc7bF7xuD3aF8YrTjaPVDWHJFyiDp92gFfkwqbs9VtzLNbvAgD1VavP98k",
  "key11": "55Dzya6H6Lt1k9eZFLYPMjgo9oUz9JnGC3cabaUvq87JN3HBkVTYY9G4inm9tXRm7YvbmVscn2XF4BigcdU5xK1e",
  "key12": "7DBJVDq9nggGpmrJeysqdmt9vJnHZ5dxEiiiYBDEMJNVbMq73fPHUvYZ5kuXj3nKTXSu9C9UCkMrCW7BL6yxtQC",
  "key13": "svnzVhmBgHr6imWGFTokgZ1kQtioLRmCjrR4zJAd55dW2DYVv8NTnRRjYzgX7tZT8YraPL1i74aCCeqJpheErsb",
  "key14": "DE46iGDex9CEKWM4fpz4TpAtNWBv4EbfWKhPjkEjrZdAe3nfhvFnkKdZJSNSkpQR5iJKJYnK1kqJyCKQy517221",
  "key15": "4y2hmoUZ4daH7ngApZLMjqYbNi34iHapKABfksEBaQPtUYG4w3aL4Uk47QAAWKwvusXxNrA6nT6APjdc2t2fZsUB",
  "key16": "3iAHeEHqKG8sgM5QzWyjfDjk2dCzGnQxShNKcDCiHCiuUG3sP5MRvXWPhqbXY4CgHigQtYXfdLgWkx53riRo6ujX",
  "key17": "4JNSrSAjmqwHh17m1Chy2yCATKHkSVTubtyVWq4nBHydyXSuJoHJsSzcChMNsrcCHtoB4PTy8ZV9fP3DeNsv5Ef6",
  "key18": "2rTT3yuPPNfVG4tB5nWaBhNGWTuqX9oZuWGgzjNxLk4PETH8YB4roXjbbE4XU9VVr16Vgy15MFN1v9pXE6jYLRUZ",
  "key19": "4sTt4oRE2Nnb1wpLWHM9an7i5MrfpNC7rFf69gUNHfhcUtwozzGCHsA6mLJnQTeqm7K4feK66js44hTk178JDPbm",
  "key20": "5f9NZnLc29EUWj4nbrFf2WqAXTfUGtmHmQHBr3VLKFjEwf3sN1jqVgFvfH9UxFRrHNvpSCKXu93HWaHiHYc8hrqg",
  "key21": "3DCa7awiFTR5QTNvDYLnN6vCMFB9xQZVFURcFUev4MLHq7hMLmBmxyk7Wtt516QehaisHN3TiYbys4en1xrWcf4x",
  "key22": "mVWSLz382nm7QWQELsX7GCDjvuddGYM2mw6jqXAan86tY7RPLPx6KfockdEH7UQT6DYVuXyQjtkABbX99WWmAEF",
  "key23": "331TEXaCdJjffPJ6uVC18sXiEo2ovSB3vpibezqH4C9EWVjkk4if7Zm5TN8wYeRtjoMm8tR3WtJ6wxe6yV7qHG44",
  "key24": "4CYujWMFRzsVrJNRD9ozVXKXEy5gnwyrjjG5vRk8Hu4DnB5TEHi2rwHsDegkWzASEMnJBuRJYgoXXDRaN7CYxSvt",
  "key25": "xi9wWW6jDoKDRJkn3Dmz6maQY6AC4HDLYC3R7Zt8bDnRapK17uwTwz39UeW5yD69BwTie9zapbH6jSCANkygsVg",
  "key26": "2W76ci1osLyttM49krDbyttWCBNLLu6XetuLcojuwszgiHdgQgRjjEEAKhAkZn4Z8DpQgKrspj9HBCejisQbn6w4",
  "key27": "QAEB1VmC4zVvhLUs2v1n3TaDTJCrxQN4w1JMjZGWskY4aWGbbUuM3ma1y65dkwVxLPTNv2QAgk1Yr3mC1PTanu5",
  "key28": "oLwDPsZSRxXiWcZqiDHoZNu5uGUgs2qPPkxABHgE9xDVWmcLn9P1zxuXRFpNVoeMpiJMoD4cXzz6RgQtHSWXnT6",
  "key29": "MbBFwUA2nsQHpKJp9K5fS2sX2ZNYcNECYJ7GyEPud1DGHRykm6JwzsRvijxWBnwKUAtGfchvrzjXqYrbWD8XZWC",
  "key30": "66ikUufCRrQ2wxgXVBR5anjxP33bkTbhexFS4MfHY2DbV7kZkDq7cSSU3xqJsCSqVNEVMtTv9fAsFDnso9QTxiyR",
  "key31": "4pX7hWvQ4cjZVuCgx1rqp4qBW8RFyoWPz3Jd2kDNyJCJjpcpBdPxM2k5MDDimMD2DacnDedDW5bZbTkwpkzqivXe",
  "key32": "hpTA6ea6m967znqyrasnRs62e5WJgAwuZ8jPpkzNBjZGgfSQSXKY4BpooHRinJBs9gfbrtaq3PPk2GscPufXr6V",
  "key33": "5xb16Ws2RiqUoCcVy8baipgJo9Ck9oGYm54C7dLKdPoYB4MjLLBmBdbYGHXruozyaWRqVQrcSLgQz5n3WSqf2TCy"
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
