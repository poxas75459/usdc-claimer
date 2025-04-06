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
    "215j1omokHB3bc3zR2AS4DAMqRVN5CLPnT3TV6EWwh7rG326PrCDjEzTm2n371ZwNseUz1nftFGjvocmG6GPN8LQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5SvuW7Gh53nwMhBnpmYSAc1sxqQCCb2XKog84JnrUgMKCUMPw7gpUaFbvPFeATrkxWM17cY3J7UaNq3rnkWKc7",
  "key1": "2LSsQyS5hauEL9kAVv4P23n2Z7gxKceYi4pPSjjuyUowY8U9EQhqHinXUAH89sd4PHZNQ3WpBh5GUZJPomRye1bP",
  "key2": "3skTe8CCodk8zq6e2pc4AL5YHBBvVWRd5iJa4J8H5FVZkTHz31oEUZ9hRfyqhEayaJ8AN559Nvmw1LRcjmtB7nve",
  "key3": "2T3qARvNBReSMnCLS8BA95gCfGMXvvnd2vcMeDmuq3UwJYeQxcZnW7LEQTtMr5X6zwDdcYaLKBhug7zHbUDfQKxi",
  "key4": "48MWUjj5zMku415RozFo5iGWFNjCqPJ4Ly2wVmtGjGR2KwCtRK1mUnkTcekkjFE7UizVokaaNPntsJHhAinoJqt6",
  "key5": "cTr2H1mos753Y8woWSPn6ayNhYki9j24QAKkYyFaNevGDR1b5xNyNFVKTwWerFUeakjUc5FBNJLRfUDxiM78DMM",
  "key6": "539zhrynxKbvQWRTUAnSmGxgKAx8Ra6cxqvq5FaqnYnA5zRCTNJETS2nd8v8KzU6mzRBTxbnhEJ1e4DiVztRk1y6",
  "key7": "2JarFTXkYuYU6mKxkhYysFQKLxrm1QKjpS98n34DU4KwHQwJGjrx8wVJEs5YDJftLGLVbMh8xyaVP3ME6rECska4",
  "key8": "4dcFEjcnidgUSvGZGQESvpiUSkCYPGiFRHC9HR8Ls7qNZhfiSaeR2Mu6cWL5YtDxdYbz7qBJWuphPvewuWjoR2sp",
  "key9": "4S3SCgUtLut5cXiVTSS7xSTWGWuega5HXqGAMDyCWqGebCsxDi7dt2xVGs7FmREED7TFCZtqH1DrM7zAK3GqYNx8",
  "key10": "4VejU5P2bvyaQCdemc4LuYNdumoezXcCcQWAQq8D52ztsDH5TyzciGToTgqJaXUAZSYQTJbep5J19UKBBVPurAZi",
  "key11": "2juywqszy23GLudrjEsZvtL5mfKL6yGiuxBrsrVJ4xqChk9fJZm7U9ZotYKty1gDF32RJvxd9skDFnavBxLhUy4a",
  "key12": "bxGisgJvS3K7xBL8Pt4tacKDnPARzJUgvzrSajrwnJHUB5MwjajaMFPsmLs9UnkxLXFpwFodsYEgSSaHEyjxgCc",
  "key13": "2FerjWD55RHpQA4uhz658eiUE8qtmfk79pzBPYFLfKo7T2Nvd6XE2t2He3KgQDcDGeNYQihLsR9GrENUs9JYjiNm",
  "key14": "BvGuVUsczXrefziQN1UBif4p31SLwdCAdzSbopDECciRFaG7rrDbLhrXukpyyStLoLgxAWMHgG12tiGcKyPPa9U",
  "key15": "4e4zA4uJvQwYynzFbkRxSF8ge198CSBy8kjzftq3Dfu69hDAH6391PNBNzULw4K61Ckd5HZD7BeGNjK1mZ9KSzP3",
  "key16": "23EFLDfvXRMQruJqEcFoAAPyd5QEQDzEyy5d8X8sotyS1M7KL9iP7GR6w3dzTjZTNYwZn8cXhsbBhKcPka1P5jLH",
  "key17": "4TMzsM9WQ89RqKxypSxRjfn4tFcxLaTjSFJKRXQ4pkS95noHyiuXrr4x4QXRYTMbASa3Uq6awPmdeZodgVnXH8ff",
  "key18": "5uTQkeduEXAQLCZnYrU4894oCSSayWyTBXUJ1js41p3FEPimYTP4dFQGByJgrgyCQCV1ijPDA4sLFZpdpqrYVQJr",
  "key19": "2XBTRLpqqhZur442ZhtZ1h88j3ZY9SknoWoJGKaCAuYQ1YbCmATh3VHGZEocTuHLw6kXzghozTa4grqJjDHgnt58",
  "key20": "4jjVRo5EEkNA3umJgbG1SXUvMC39Po2Z8zVSptBPhi4G2dWJk2rRWj6zMQpZV5M2LAF8ZGBpNqqrkmw1XwQVt839",
  "key21": "4END98pqazNKsvoaEXBrp7W7NS6PULjQsQ4MTHQ5o6RXb8iaTUCBBgrjyAGp4fN23mDzKFKXKJEkkypgRPjP4hJe",
  "key22": "2mfpBbcy9YXNkuFYsPUNxxDLM4bvgqPxt3CzBMTR5ezWJDt5uDZFwWZiZGaLxVEps2Pj3Akx9PyMm9Jcf7NqYKnU",
  "key23": "22LjQ1tNAnSZCZwMrLSsMraCwRk6ERdCuPgFqMHws6iPkFdC9Pc7zNCXixU9wnxHq3KKZ2HsQNxY4vYziBcpW38T",
  "key24": "4nJSXxVrcuJgrhnx5EGkBdrSVu35iyteYSzZDGjGmxMpJsFo4W3pgnFxKDrxGY2fjzKm5uMkbWdBoocDTbnnNbfD",
  "key25": "5G2aaWAcoAcjb6EJjJ42eW5xDDxYGxCdbVBLfqaFTyaFeh8MJ87tkmBkYTuGzU7S9adVtvSzLB1wTuBJdjDm26A5",
  "key26": "bef6CNqDyEHKzehiiGEqCXzF4BNDMDKqQUSnQQwDHgV8akHSDJESpuG4zGsKdtrbkqTQgGJc4MV2F552utqMsaC",
  "key27": "3MDv1GqztX7UkbhSTTVua2zFcnxVqvfcS6XMUv4zz2QMrdi41n8oDRaArWnQPapnkX4HEBRyr2aC29eMgfibfR45",
  "key28": "5h8nZ2gcXdmALCx7j4JT7H2TQQRYS8yP3PWDkjkpvoKpGn6sXCSzJTt8gaqQ3Rjjt7AkziaYYMPYog2b6viVMGj2",
  "key29": "32LNfJTgB944Mxspo9moMRDUT3BGYmwnFfABUbrgaJ5bqcNzysp5tzdkMDnYiJrNAKjrejbfV5N38U7MwivW5kH3",
  "key30": "4cKACvu3BYw7ifCVmYAHQwUMnhXGSnTDS8uRyki1zXedM39sEqor2M2c3AhWS4DEX8WBFY3m8HTT4rY3btgJWyyi",
  "key31": "fQxp3yjqP9tLTSp9HSYicuEu7sZDXHgHBvVxRNqs3ZYqYaQw9XgVr6jBdbQnQ7fYfE5MDNmtkFg9iEPwkBjatr1",
  "key32": "4m455VR4bok7WGWE6Vxi9KdDqJJ26RJb8Gis842uBuA5Kui78GE1xbL9wq2TZ8Fx9QFVzL333uEUfttvqDoAurTT",
  "key33": "m8tkL4VPe85mgima4rBoG1J9R7i8kP4FAKgnKnqdLKAbZZ5Cq5QBEBcuf46JGBeX7uGdhCUtDdfSVT9Xg3zbuKr",
  "key34": "4p1Jj22oR6D1PEU8r2GxFEmxcXEEEsGQzgLokzA3dWJouuc4AxxdodGjosp7nkYf4iSAg2SN7jTLm9iqt2Gctfqr",
  "key35": "2t4WTudJDB4inGbk8o962X7XxBz4oYbZYW1ggQPPPt2UzbEpbbg9h7bT1tn4yFqhXRXh2BgdLsK36zN7f6odQ55M",
  "key36": "42Bhfqs4FfiuLsbs1AeBHGJWYeEhZqnuMVRH7q844z9mHqJH9xfzHEbPmNEEX3BCmQANdGGhqLbQjKDkLCMXP2xb",
  "key37": "4CvABPpRckBjdAHj97NwBenBgbYvhhTkoQcx6HNGbXMZp3fGHy2hH8wPt8mdZCdkgCXfBxruy81ZBT3aCcRX9s7z",
  "key38": "46VtMMJKzq4EUp5zxMX3ZtBpZZigGMCQUYTQjgcWGqbjSbBJWFihccCPBXzQyP66EDDjd4BP5U8uqufCe6J8sTGh",
  "key39": "3UcxW6ZjnxF63Ub8zfMzzP2s3hNKt9rVJGipAvnxzaZJg21JL5yJswP8255khdmFB8pnUeGjSnKeYTzw3EaY6Pg4",
  "key40": "262dqq5fTZp4v8Kp7QEUgrb5xhMkHNoTXPW3y7jjZ3eUMjgvLmArgr3Dgt9TwFFZA4zD9vwLh5XCm1DcT23BMD7r",
  "key41": "2zFCKgYd6hGjwAnANUH9AcLCGhszECPb5gvEBkLB9CExHC54YQYngCPXfjnE6t1FJgjK7KG6XNMdmnqZVDkh1KNG",
  "key42": "5KXSWtR4upb7soye7S8MH5hUbTaeqETNnRUZ5cQ4M21whqdQPtmnX3dEY6dPQhJdg6nZG2wjiv2mHuXt3539pdeu",
  "key43": "659gyD4vBV19inQTK5rtUPjHHvo5hapqgGFTc8XEMsWrqypVWC3UKWh9V4ZH71VGzNZwnJ7eCwR3v13SXNKbzhY6",
  "key44": "53QYHeyUKDSXCpa3NGzMXApWWPCe1K6EFnpv6RG78p7ipp7KNWgo58HyyyzjTUzZTwDwL75CUCT5LgETepiyTk6P"
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
