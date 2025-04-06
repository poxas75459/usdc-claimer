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
    "3ZABRgguQB5kijoRWyefjNdFAKmiRFut5z5SE1rFYPif2XvUPqj2N9pQN9o6GoURhYFo9ZfCD3RaBmDo9t793aCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mikcsD9adLEacar2z9F9shTAUms3VgNQv8b5X3G92CjKa4ZZHgu1Bhr3gxhhc5qUhrGBevpiCzV2iVQuswayMUR",
  "key1": "3G2sihjytEBisbLTgNb8qWeemV9mwmMFfBGCMFDxvVc53LUArhtFh8QgbyfR7MQasQWCKwCcKKqRfvsf8C8HFH42",
  "key2": "5iMzdbZat3emAHHRoQAJJxwCXVVjhRieiK6PnuGbAEJiEbnE1xt99mnJh9W2kWyqcFLwZdCqWaPrjimwAiLraDLe",
  "key3": "65ww16CW8L4RTsmNqjXqSmSEoMqorHkbCUqb3hDfv1vYMMCe44267tq861G2Soqjrqwu5e97Mqva3SoyYEg88mC",
  "key4": "GFRPCzRRJCGw6uKrRAvYWtdYCtZteVzha9cLbCZk79nwKmaJ1T87KjA334UvFzDCh69iQayEVP65iuqQQ3L5jb9",
  "key5": "3FzLpDFoN7tRsxkKmuSMX1FW4rrETSr3Cv8LVwApXpWicfkdQypth6T9KPN82v96VpB3m4VfTYoYRAPDNtnX41aD",
  "key6": "n2gK8Gz14ENyXz2LKkbYAwZAAg1SpxhqEh9gJ5f3Af8GJitm2iVzERx3zE4v7wWxmuADd4sTa4yxpBsqPQUpMDj",
  "key7": "3fqmJQSnvBUYPnnvAgU4ZX5c8pndv2ULZpt7m119VaGXUwNbxR1Y9pWkyg8V1G19mskuvjKdN8424dJbW92Uivmd",
  "key8": "4nvAW7uhTMTN2JWVaTYVb1xL7ZeeWFthQpxrsX7W17TVJnuSaJCjtogaugwWY67eSt4GFKj83nwGXe3D4ixjDn8V",
  "key9": "3DA2EZVcYKDrRYRLTgfPVFsb4uC2sKTJuJAtibpf9ki9Z3TvETnQqkSuQTUx1ffsucxMVSnUMJLP1TATH6TnVaw7",
  "key10": "KS1BxGShwSpXWnRUBRLd3XaFmgc3GDfuH7Vcan6sGhkqyvLAFJs2FZccAqv98evCDwjrSrMbhqih3JkEyqsN6rA",
  "key11": "5xXvWotmzrNnzehuMGy8fWSR2kxafSiSfCw1cMjiv699fYTX8EJk6XNsTRMjHbrpKzUyroKeZA7kk8684NY4n7Jz",
  "key12": "5R6qmwtKnksccRioAw2EPk1UhcvQqKjvx4ZhYU2eskK3Gc8moxDY7cHBZQ4uK8RKKh3oiKXQZEa1w7zNEbkm4bHC",
  "key13": "5jRAzyZZNdbzEGr366c8p5PfLaY6hHG82TP2uCg8LEhgNBaWFYJYykjTt6v52ueJ2sRmv4roiD7gfwhQ8spZXu7Q",
  "key14": "EBrN1qXWMxcdHFpArwdCrNQ9WzKnsqxZNy7iFDyCajDTs16DPJDpVta2Y5oR2WLwLavZ414EZVtsQHdGutivF1s",
  "key15": "3ebiJakTa8X4UiKdPwRxY79XyjXHBAP7teGd1RUzLBmE6acqaYUn1UZ5xXBMaKGBGi8zWtZSmKMeafYt4MqHoAyA",
  "key16": "5SCZUHxoNgr8a6d43k6zj6t4Ybf6dKjDrvr2dNEf4fg2UVYki2p8KRvrcG4xFaeVaRZ3xRmMkUUggVhCJZ2rqdXi",
  "key17": "5qToeNzXTmFG1E7hQLJsD6TPVdfTmmLSbE53UCnLtktHZDg1vRHw7Gt5zNsGV78eW4Ztv1jWKeLwh7wRGbRaBYBQ",
  "key18": "66tcv9Y62Tz5CQSjZLQCjvHZyHpUDGL5z57P3iY6xRDcacGhVUpw7VMcccUfuK1BzEA4VhsrtMCAC6ZxgCrJXxk5",
  "key19": "JrHqJKboQRE9vgkYnrj1Sk2hs9gWSV13DtK48ihp5uqHUyNzEox6yTRRpFC1XAoqBGovSJuUxz5LGySZLEe2tBd",
  "key20": "3uvJ17xoV8B4JAu5ZipEugo4EnRTsKNcC9b6JLEUbhKUaUNLNHDaNDiRs75x6HuxmbFAFvY3u9BLMyRFxphta4i8",
  "key21": "4cV4DpQFavYNLAL2TxAjW7iwdr74e4GBaQf3KX33dVFhX99aTbbocv3vSLGvV24WCtUPYw9pUBjB7uXwYXxLZrWz",
  "key22": "37GRVqreEF68tQ8j4vigCQob8qSPA73J13bf4ukCv9hu6mFxFBcQoo7Bf2ppvsJWd9vsjnTh4URH17bFKRwvJZ4j",
  "key23": "4VJBFPktPiwjUMQSTxM7TB2H7w1yDTjmKKzMY4dPEJDTJRaNgYxGyp13st8ZgvU6wdpQPhpUsftENYYEXcdsXifL",
  "key24": "4cYwL587URttEE62cnQ9GV2g6VVqPsuPiaAEeZBYAR9Df7BjwBJNikRtsts5VEaSkFnwVZcKz4xoZ6EWjexArpoA",
  "key25": "G1iCQvnVP7rHeRZmLz5sYX5o2V7p2h9q7yCemHFcJGhDHBqBuuCPj7NJCveTySs7UaibHBcRyYCXbPcPcQSuJWn",
  "key26": "GECF7qBBubEtpdZjkGDeDq4PX54rvajGgfmemPEvQuh8evqhm5KzXnAFGgWbW3JQZHruhopTJSmgTinTDhQbGnZ",
  "key27": "3Hz1d8wPMZxS6xCgkPfisymHUJWZCtRWDTyUYZ6MAb7a5i2it7KZZL1Xt66n4sqjT3okmGaNr59anVkARhNFZzHp",
  "key28": "HwKGoMGqZi6npTZbcqgQ7xthzFmgyoyTeVSjc5tWVmeoivyMdHneXYsjGievaWozgYkeZ8Tra8fjrygF8xgjhsr",
  "key29": "2Y5Lz9PFedFPBSVMnT2MRoQjSFYPaGYxfrywoMUyX1vGdbEu8QvXvfJ3dXZ5CiuYSpJut76oaqq6sd1uWzQQJWVr",
  "key30": "jgbLYnKpfcgq48oWD9eGhYF1bDatNJYiKdM2zBeiQugJ6n3zjm7GD6fMgnEZ1vMCxzAD8mY738N4gyyepFSHmyc",
  "key31": "22j5i1BHdHsdMrJbjGptCULemBeVDKtdhtAENoXfCPkhcYPd8nAsE9cfNfHwm4P7jmadBqCf5gYMFUP89V8N52FZ",
  "key32": "3uePTgTQrnAxdurdzmsxHQMZxpaWZnwFbmMN63ExmteZ8PaWz6Gt9vhZ2BTktM8WTt2JtpPeRxZd83jHxXnHjkbs",
  "key33": "3eBvHd3KbY52D68HXrEPrEoX57qycBzcAW4ArPW1Fm3MNjakFNH8C8G8C9T3MZqG3id14ir4wP7RU665rg5my1d7",
  "key34": "xA9Cot6RkWPgFbuFdBt9fZosZ8T4FR2qGDwEvR79wywF4dMGAgFJa7Sv2vN6pzHXtAVSomANzwt5GtR7P1hLzhe",
  "key35": "211NiQWLqKFgvZjEStfzYWFvS5YJkQavaUxBfbwPKBeJGZzKeAodPvF2dDwug6n1K8XW5eBdsuJyT3P5rxcNgLPy",
  "key36": "5FjNirxitH3QssYLngm5TzQ6WDj7nsFAp9CbwS2v6StozK6wsh2yhM3V1Fi8tAHMZT2MVwcTKr2rwe9fADV6xAK9",
  "key37": "2s2L3JXboGUuzC2Npa7UBe9MXjPDNEkDYtopfhTUAEKCq6vbjNMQHUgtMpS3QTsJvK5rbUdES2MXM6ZjQ8ktzeLM"
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
