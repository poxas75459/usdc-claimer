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
    "4fbJFRk17vXnsHPHSHFmAQJARH5jfXng7rMtAqBUzbois8Qv9H2EpdF67ujA9AduVGeJnyRsgWd22guehVxCW4rW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yY4DUdjE9JRc97YqC3r7AEWPVZvYSd4UDjfk2fWQEEQp83FZ6HZuDu2pfjP3Euui2sV8jm7hHzyyGA6F4DvGcFy",
  "key1": "5MFrWdHhGtwrm48MiTz2eNfMNS7CapVktFUx3gMCUz4pHyUKS1uMWKnAPQd17bkqYLwi7BsQWEqo6LAEnhzqtuqT",
  "key2": "tio7SYNPyvycDp3DLprV67BqvfXEp6uJDqvCH1kyf3vdUHWanbegw9eTCsrag1mT8BauaNvabcoVV6aDz2Hi9Jo",
  "key3": "3AyW78mynGkoQ9qJA5djV1USiWRqVqBgk4LSFemJAZ9jD9qHmJ3v7oBFYNczqG6uwfPfiVyVksBfeYgJXqqkQNAu",
  "key4": "5MTM5TGZq1K93pNDKrMpMZX3zMHNYNWeFTHtuzZz6iemRNjh8Mj5zJdTrY29bcuGpda7fX9YcJPycwRt2qi2SVhz",
  "key5": "4YE2mVqEaG6DUfgtna3DVnGS2hw5eSFRBfL44Fe4kc37J8giNHrnC56ixuBoiCF6XiQrjBL3wcqTH4WZ58fL1U3A",
  "key6": "4PsuW6fYhfXtzGDHnkLxeDSgmCpGkYqBKVTHTLAfNdNSZxB8nf1rxp77QxJjp5WmhATcNhv2FeRSv94sjRSPsWU1",
  "key7": "5uj1muV116H1JFwqHhp43vWovkDeyPGvc7tHWbstJuS1xFwcbR2eHYyWUPJBWTfdfQ4EkpncpSM6eTAsPoKcZNto",
  "key8": "5ee44ZWaB2NRvUjnmvPY5SiNkWc4f4mCZwFdpomGu9pL4g8GDnf7R391XTnnUsdASH9S4hB8VTUs2W5fBb3DdNVS",
  "key9": "LJv9aSYDKd11ZWSSBT5R6yJ2U9iWHBxCYRkVkbDNMBgBjBE1b1aZ3YHaWQKXcybWuqz9Rhwuv1GPmfMyTHoUKih",
  "key10": "nXYtogn8R31hE2yqQYUnvfB7tpNZnUk31nEEgpepBD7L7AEyuHCDViqJFV88tnjWNeeYdpJi7RFRKqfKhC7WnTz",
  "key11": "5FvCjFdr2mKdPmeufQPxPecj1WDn8VxHMn7nW3b9VZvjNKhrLvXeTGXCmi5nrYpErLovAous1pH5QSwbB2bQs8BH",
  "key12": "3QBB2SgfQk84q7ogNrhNKUrqpmkJj9ofTCCWX147bP6PCRmgkpFJU8zqZXqYN4WHGmVjBuaPiZH9RAvGTmJVHJyC",
  "key13": "CtmbcbRpH8BvXDU8SEkeGxMesoAAppM8ZFNr4echxYyJmBFEARipYiNjSBFBb4qXxexZdCUUYw9WoGGVF4Kk8y5",
  "key14": "2gCAVkavmAMQLrtEDw3AF7Qh8wrFsrfpCxpjyou27qsdmRkNHsYeGG289RYLuqHsF8x2xrviSXSdkr5CaW9sCFqz",
  "key15": "3Jm66H6ALG6gphsA4MeS1w4ybyd7htXiXRyG43safgNgc2GpVSmr611UjeDJr67ZC9TeB6CUuJUFtu4vtxSoctAz",
  "key16": "4SY5D6Up3UNMUfRP9hxpN7Rfi7aoL5RMSi34yoFWa3UGMnLm9t97Jn4xf9rkh5foxKpn91Cp7enXHnoeXq6iabzi",
  "key17": "khBYFyvPf7XsrUBfqVaPGwx8XGQf8ESsjkCyex8Ev1FUJvfQcWMRdwB2udRc6oNAkwFZVvou5jTXZNhX6cH9EYx",
  "key18": "3LSn4bT8Wh4bD1hpq6QmtTkY2srFTSVJRZytR9PeYmn3ytiU5b8mdUpdUqr1BHaTcJdrMg7RR8r65qYSrE8rwd8j",
  "key19": "3ThZ79oWjfnmDLre6LN35Ya3X8iv1yHKFMqFvpmxoHSGA6Mohuavi6Cq2vYSsx3BTT6Hq9gXwgcCwAnTgcVBWLuN",
  "key20": "672vCNAe2tXT3NW3gWQxsN2GNC7MU4unniKkZwy5xzGWKQUc624PRpUPx2jPvEMBWUngMm4eBpWkHoDwXnLHd9qp",
  "key21": "2SJDwsYwM2XT4YTdHofDDt6mnfGgGxNo8EACp5Nj6J8eMmbh63ahLXWTYnMKxsY4WcHPDjGSsmeAJ7D8dA6j15Pe",
  "key22": "22HTJ3x5FRXWZV7sSJV7G93WKe6cMnoU9gpo4jyYaZxeti3DW9q1jNssgNrmvs1kZVjwDe4CWdU7L1RuJZkCy9aT",
  "key23": "3MiTp7pi5udcFoBPxzw5JQxnJC2BRFCkadv5s3vuLMyYaMo9wVvqk7kPA9V3Mx56TDoaQbf9y4csaWEbxwkwDfPT",
  "key24": "5zb8ATY9g2GomYRMgQ1GVSXfCfCqx7mAgRg2rAN2kz6TY6idt9CgZNBnMrRFzAsWfR9DNGt33gsecm4C5jPFaikS",
  "key25": "4gNRro1Nv16VVZHbFHKo6VXp6dkdNkfuDUDzFghCnYcvFZFbYzTGVDGFWVV1TV4B6k5cqZM1jTXoJyunxrqFqbRm",
  "key26": "61aYxRMadprMrZSRe6riyGpLs3hwzeBt1E4FW9fiV6agrY4xceS2KzCzVEp7ahYUZWshgDqCGJVr4kJqHrs2MWGL",
  "key27": "5jf97vWXMRfAAmMRfY7t2yi86PNec1PJnnY5qL2hGPiWDUZRYKpSBjiWSXAuJpRxyhMfFZSQgbZ3ssSvjit7XD8U",
  "key28": "WgRFnKKyxuZnT6wesKr8tXxQA5YKg2kmcNEJP7ShkrKVoXnHwTU2uxMu5VJczYZy4WMswLRjpXtu8aWyeZe5pNX",
  "key29": "3dcsEG79zMwtrQnYkeCnp649thXQxznZGKmqYXu54x8sgTtnETkmLJdud9DjJnG35V31LvXnREvYRZEU1N2uYVYe",
  "key30": "47ScTXGBfH9Rq3weydt9dWUhJzeaPYgXJ7wdCpoxc8ht38cC8K8eo3ZerfGFrFWek8qx95Y9kprXX4YG8ed5Vove",
  "key31": "2Tg5XXyDbX9RZkysR5L2G5ZS1pmG9ZaDwcBHq8TqFey6YthGvj2RKDZV2DyMVjnxGv8Gma4TpyEAj8tuvk4xQudJ",
  "key32": "2EDuU8homrfuDPPc8M6YRtPEBEgn94ZTu4Xgd5trEPQd6hSGWEvWhN57kfoB2D6WKYQDYREZ915ZD5KweAK4hHeW",
  "key33": "31wqLBrjfjbjQJqK4KvJX8ApckiCsuPUv4aZwjmNhhcVXx78pc7YW6QSqvCToQXmrko91TLemdU9vvFU5uZ5s8t7",
  "key34": "4kgEiNxDJdcjFyS5WtAiBtNaViLtWJFiHu91hFoL4KbWKUYMNkZuaDZTDYH18QKwZML2QLKjEX3CnMmJSoG8TgBQ",
  "key35": "35zYU2MCnqbN1yTvCasrKYhsXas4BxLW8tSiUkUDVKRhLuhXekMjUSbCJDLauunm4jEKQXiZVBrgXnU6uwZ3fHT",
  "key36": "2oCG6CfHHMDz86o2mKo6t34xcmyXdvNHyFW75oo2sTjDBGcbXs4hWXJFg5epwFfzHMMnpebUF2NZ6t685MYt7yj3",
  "key37": "474FBNEZQvoFfsnRTjCAGcaoPJ4YGY5SLx9whGEEUWz48BJc3J4XHfuLmTQPSrdKAqXKEUzLtAYemWhAYm4NTrGU",
  "key38": "3VSJ8VbeBPzqKbotUhqP8x2Tc3rt6Sj7BCcwoCh38bz99N9mGjGzS17yt3YCKCAJew46nGEdgShofYkkogxfhqBN",
  "key39": "3R7eLzJQNa8MQ4uXUWpSZeAgYfKXSmSFxwif84NemzoudcHR7r1fHrWMbBHG4m98HHrx64Q8KuPj4aHFQL4RseTh",
  "key40": "23J9ck5N4UgeyNc8BbFFE4Yytc9Cd2JvnaSWfwPQN7nTuqHxayUqcZPtxryzHpc3oRMWCYrGSofgGrJ693HXpHUo"
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
