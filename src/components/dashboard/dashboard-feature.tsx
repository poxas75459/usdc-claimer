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
    "joGzbBfDby5FhWKvxQTo7JDtaduF4dNqRxoTjgC5EUevAMvTecPGc5tD81EG1D5Fr3wXTZVrdS7yLyZYJRTSpjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQwvKXvkcUYDanNuyioHfnzVBpnDBjBmP7sVSYweWUPRB7jcGmdE3Y9ZrQ3iDfsdfp8i6fZmwCpQ6bSBh7VW5sf",
  "key1": "51bFMPfFwePmv1YBQEhKN5waXtSsVZ1y2AmzsbsaYuMZphgvG1ArZZig2JBDGKskHu1T1iZCqKwrdZ6sTmRHmHS2",
  "key2": "2y7mye3WG8NcLq5g8fnrZPGyuLHfMTdxHVrKmSc4N3XfBWWxyNj37JvZHCT2G25VAehjHx2vHaUjZU14h3ukZV22",
  "key3": "4Ehptm8HHQW8nU79wD4fCYhy4pmrowSpSe9QtQ4Y9YejyAmpsj3WcTWbKwGDX9JAdZNu6cG7kS1MAeXH2Bwx9iyL",
  "key4": "5LRkFBYPZDDVHhbtfepNoodNvwBUhvAijcQBbHT6X4uzbARwp7AWZwX9c3Hp4VFqz1Qhw1z3WXEdLC7X1YCZ9PS",
  "key5": "5unQgyx9K5cmAdUjtFYjoece6y4RmN8QN1cpK982U96hNzy1nmsNBPHgPBQKS6fephRXCA2ngZtG6E9XWuawpvBL",
  "key6": "4As1HkVYjMK3UHiZZjvbkGfaTb57dniVxMfJf7wEHUcd2ss2vmFXguwqNMohRUP1cVWfAPSBMPw4oUpxrBKfA4nW",
  "key7": "VqbgiuDEQatPtF7pbsePtSm69xLRkjYwN51jFg21379ixxZCip4dvgD2ndXsx1JaZugJ2A2vWchi5Zu27SpNoP2",
  "key8": "NBkNTnNWe9GfuMu4PnMsCaNUNsXpBRhNZuoghYBDdAGeJEqB5BdaWqjK71rs6Lu3QbJKFW184WUc6ygKizh9MAp",
  "key9": "5RXqeKAQupWf3W78oj75Q5VcRs5eQ7EHYJ2R7vFh5QnxjFJBXHnJMSH16ve1dcoxsPHaeWqoCWPjtzyT3sb2tbbu",
  "key10": "2MJ6DNZnGqSgKCdy1txwsy8PYDxHXsYSecWxVvA2cX7PchAfGANDs53FKMitRXvK2JZtpxkJsbmNqehsGfLz6QsD",
  "key11": "2GwNizh83vE8NQfTnC6JN2QY9VqdN8sWMuT1yBb9dtNWYcUXcMVrYN6yJToRLry3By8B4mL8eu9JHGLLc9pqwXdb",
  "key12": "433x97yNjJC9qtS6r4cXU9w6oTQJHWhFHBgDHw47nwk1THsuFYLPaJpf9Qd66cLUZbPgMUEwr5CAuF4oAbfpn9vY",
  "key13": "ZDjvbps1ZQiAriD3Po8XTf3U78Xn66KNjym9NUNEdrYiv6ApgNYqMG9yKLr48xRtTm87yGrrtq51vFGyy2XDBMx",
  "key14": "26RRcG3hNhqktyvqWWXqrMciHKDqoioCZaLBYuX7cUnScfUiHd3avixpEqMoghC5S3JV1pntgzMwbzK79DfHajzd",
  "key15": "2MjD474CFU6vTSe4qFWPQCWkA5AqAwd6YK8KzQ1NqtKaz3BmpUHjajCr7mWAEac7pPedeE2KqZ5X94feuQ5J5YfD",
  "key16": "39hBmA1nxy6nywfBNkpr5XSZTzUDN7AMJjGV6FubdSotBSucAWQZQabhX2kxACXXCKS8FTZJmfjxooAadM468LWY",
  "key17": "2q2A1tug8SMwiW48fDJ58N6QpbftPg9LB2qe4oTULZp59w5RFKYaDE6ZqeKuPAZNZKngWvYLyZFk4psPPG5tqEQG",
  "key18": "2DYzYqx7xc6LoE9qNnVkBnmCqLuB3JuKn6pZ8GHUg623Pz6SzNsMhbZR9q5ALxcftWrPagS5VCLsn965qTXaPt7r",
  "key19": "3HZs371csR6B9YaQWVGs1ccvzap2kW21NeiFv95X7zucH7cp42P4tTNbkdQX9sPMAMFNTCg8rrd7K1Uo5AAH9phn",
  "key20": "xLuQmAxAmZobJnxcfgGFPZUzbTyfP1YJhwrd4S9hmLagqMcKtJh7nPNH1yLxhQEhtKWR4PYHPYRDwEuqbC6hGrF",
  "key21": "5cX8k5mvS4Rt4HLwejV9HMSb9Gbb3Xj5kVz3uEXxv51aaagYrcU5YzCXQjn14842QjwLfbLnftZmdmiTJB8dsGr5",
  "key22": "5N7qddQxEcFpehFE5eHpLc2SURsWFjSwzW68kzyN82pqW4ALzupo8jXEogNm954UydBiXz3j9BnB4etpS1KwDowu",
  "key23": "53SCv5ryqTuCMCGH4RgbcDcDx9CbvhNNGikkxDUzhNm1ekbS9Xpjjf69BqrbXuKBoRjWuucbbk51cWi8fcZQjZ4T",
  "key24": "aFAUT6oMeKacYoZK4LRZdNK1mNcC4zqruVPRi5BPySJ2ssrESxR5vjYj7QF6m8tXFmFHuzajhDdKCyZPxzsz32e",
  "key25": "5sPY44ChvAg2UuwgRCYV8gSBN6ftdCQwLK6sw9mH9gPf4raAh4wQYURsKfc59CrNDZhRe3P5ZtP4TzoKUGjqXRte",
  "key26": "TsEiAeVmm1AE41Cii7FaWSUswwHKFtouocWF9x49SHmczF6f4S9UjS8YDU9kyAeMSE54rV6f2PsiDt6txZNyEPL",
  "key27": "5jFi9ByGb67CaWiqjqTnZtz2wKYUgn5fBPZdnAMbgs7qgvvVrQ1JDwXL6key7SGvBGbXvTbpxzCo7qzdgTQXPhJb",
  "key28": "2xHdFz1oUAk24xfGkjuhQwQ2yXdbd7yT2KPBmz3oYCiV3T77dpMt2bRv1gmGaHWNkKaVMQJfVdf9jvQTx6iCtA7H",
  "key29": "4C7n4mm2xgaa57xTn5g4Nf9fW7utMHzAHGPBWq22EGydjeKhu5Kb8r4a1tuxeEYdGn4pvrBwFxo2RnmWjc9FxVEH",
  "key30": "5NEynfRNLnvsViVeJXtKs2PTjy9f5CC52ZcswNPCysQbD5iaXLYfL2keeZ3UKZooyNEgvpWpsnpt73k7AVNzZAMg",
  "key31": "3VD2xUfYmmX9RvvXj2JfVxXLJ5vHZExtvSFRCah9Vjah7pSB9Uwf1BfjcqZSVwGEs9aYjDjbWR1GJNfhP7XVGXVM",
  "key32": "4N2NofTTVshx578pezDVL1pPrhKX1DAXfrRBdbja9SULeZnDz2KSkRC1ZMfZmtUzK8uQ4YTnDLuu92XiK8BQJFbU",
  "key33": "4ZuTFRZR48Lxh16hWrPQGRvkT9MfjAZ7AGdmHfor3adLB8LP2nhZXR96GoZBks6L7grS9nnyyDSxRDeDiVPpTqwP",
  "key34": "3o5NPxtbKgVf9bh4ztUh5gQgTKoYb51JSLvx5qRGaxbX8rm2GQAQgkb9QENjVn53Gy598mf1Yd5SQa9bSWxWAwZu",
  "key35": "2g3aBjoVPsdjxjExzrompn8NhRSP7KBs1SJef8omT1CtBU4t7krotEZ1QPoPqQQaiTb9YssSAmJeWVNtuL1HfUNg",
  "key36": "3Z9gtDZgq3gydgYxG4QyUPQPrwPPBAhHLpnUbBjjGPmUAdg2g65R246RLkPb8y9wVuiUso7J1ksWnPeMxpBBfNNB",
  "key37": "5AmBx3DrZMp8axJ3jdUtPKdJs4DNyZWEVrvomY8QapxgfwtfsyF1g4vQb9diH4vVH6y7SQPgwRMKCLJDrbzoxQC6",
  "key38": "cJNq7tBGRZciWmmqZSCUFZVsaZRjhyQSYpjhfdLgZHSwDu6nmJPZ2ibXPkSKtgt6sfMDsJuWFSSptAoQzXken7S",
  "key39": "36gqZESH7VVViN2K7CeASp7FDUV4CswemLRDb2stx4x1Eoz8YFKmEsnHfNPsh7kBQcabFrV4kBK4QkCAwx5UvZTW",
  "key40": "42Qq4doX79KopgCZuRmdngAWyJFXoG5FrSDvmBwV3rNwEQU78EoP4F1FAgsfvbD6xE8U8pHm13GztrMzTyGw1ytg",
  "key41": "27Q2k5g6MzSmtXWgGaN3WhRjCRpNFYqYkUd1vG6Zg7oi6BS5kWZVXW6TdLW6rHtFyzynQrqxd2H6NNk5gHcgUkhx",
  "key42": "51cLH8gk7fWaE27TeRaJMoJAxtdoLLqjxADvjaFGKuvfYLe6bZ6EkStizNumidGAb34JcfAmYKRtrs77cw2FhAuQ",
  "key43": "66M7dt47jUcepbiMUmW8Xh9rQ4KtfG2hwJSvB1wcGkki7zV9DpfLmrdTMjTPjN4eKSmX8kZtxVoSuxTGHa6xRgUo"
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
