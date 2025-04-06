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
    "9gdMVGPrfTAHaLPirN9MmV8Ywzj35jmyKJrJXBrrVdZqsVyjBCQ3a2i5ebp6TioZpYh6MUUCwy5XhU1Qzu1Ad7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SMuB7nmi51xSf8HCr5hcYpET5a3K7EMWZNkpPsR8oMrVuCMoQw2iH2ZBtCNYshrUoMgG7nHDUJ2z4JoyoSr22ix",
  "key1": "2vzaqFt66BMoNSb3R9QhMye4vrTVoUDv167WRYyQVugqQDbQFpqY89cGBeeUdUHpjja4YxuJLJdhjhBvLziokGn7",
  "key2": "FadkXSdfkMNLuSVatmUTNyMGJqw8z6RMFukNFtm3KTr19Z5LiGfwybRk4MoP2w9CkvGEnffNwio93b8p74yLjua",
  "key3": "NhrgTGXcSU8hN3nLnQ7PNQi3A1N9y8fSudhJrQBJh38kcQSSLpiyA237vrb5SLD1nzXhByf6UwA2BQT4G7W2Ls7",
  "key4": "3ugsuJBcWF2ppaDujrMkHvgQv8VQa4zG6jS1BikiuG2ZTaZm8E3MMzgtEqy4yWfboVjKVfdmz3wwPUv3vrU6ecA4",
  "key5": "2uxZxpYDNRGQYPE3xUtdM6H9pqrBijgZcchWpaREcoa72fazHGNzkmUZMJUDxvLahZPwFhGYS21zivRiA8VFda6i",
  "key6": "2Dbn6zH4RAcU8Pi9eDU8DDNZFM5MV6bVSLnXZeEaLS7Vno737DbzKrQgSxELXMBXV6R6V4ozP1hji4jDMnTD53R2",
  "key7": "2sSiBXjGFkBYh3aUWCti8Tc3AdVbB6JJchUU2rEV9mnNFd325DBNMAXmp7j7VH6SHAyi1kvR2tA28C6Q2zQUKimt",
  "key8": "3ZYpg5Wudppnj8WkuaNtcqMsgnjUwUcEzewsB9irmm2mUKCs9js7gSnwsSWsZEqdViKR88QdVvTrdLBKPZnyDBmx",
  "key9": "5Qsux7GyHbMq1RkFGuGiUvawur1HFYyoq1pXQuMFZgNqoVQsPdTiujJv7Y9bXbT3DDmdSmPc8WVgRvgnWg5CAryG",
  "key10": "39wtpLAC6so2uzh9SwSSgDtCgQCZPLmHffDqpgKs8Spe4EY1KZQbfHzHe6za3EcRhtoM4oS8nfdehYmnFobx8cfY",
  "key11": "2L4r1z8sBPWbkKjCWynYvbA83SJnwYZCdKw95Ezr13B3sMFdNkZYtHf8UeMYrkihXhn3QqnBqUFcQ35UzoyHHULW",
  "key12": "4DmUws25BFN29xzUYtm2JogsPUNs869NQgFCsQL7PF8tC3QtYSxBEKApKvzaExXX7Nk3SZe1KsPv28yVqEuyX2dm",
  "key13": "5Pzq4uk2d2NxNHWYscVgsi34PFnk7ziPvRPYzd9XfaEmBoCEn7onbPqeHeyCojcXt6Z2RMeJmc8qUkYB6T5b3MH5",
  "key14": "2hFXVxbs5eudXP3WUHX65zAfYmYk74YVpN7mVCwUfATgS19doy8SmPtHy3FusUPrHZ2Aw4Uz6wxTM1PZnrVZHKNW",
  "key15": "4VpHLouBroNTkFHLqn6iZkW7fAa21mjBVerbhZ4RqnCso3zZPZYYfLjo4dJVCuCgSy1MToGtbyyc2rsH7B4W28aN",
  "key16": "3RJKoqegNmsP7ofPpCTpcbywcypPQKRwV6jmWCSocQrCTGWzjzjLWELNWBkdpUP5ZURHJDWMn8g7XVrD2Maj4bs6",
  "key17": "2CavgWY1ZQQLkoEYbjbrHJHJdRw31fCN5hkJdEqudojCMpZnr9P7nNa3Adz19ZuMFFXeMtK9StKrQGurxPAgvrqu",
  "key18": "44oHLMYECas6r2YR8ejYCNXztS1G2fJS1QN4ooPEAjhDWgJcZSwjRLcUDEtMHE1ykUPwYf35WodQX1euWkQPn3Pp",
  "key19": "4iAzgHVdA2arxvCL92orzu5y2aD4TomYkbjTsSZbew6htEYcc2vvHYm8VE4w86yGpTDRJWw8jkpxCUnccxAQsL6N",
  "key20": "mssQbGaKrq2mTh6HRbmhVMYt5u91TtrHnsxj4hZd4E9fuGauSUccT6QhUaJu243iWfPrEDTM1wrUKRHRTqfWcpZ",
  "key21": "5Fwbi65cy6UZE9VgGJzj5i76BzbZgNGmQcDbE1JSSgssSFTu8SyJu6BMkLpo8G2zhksboVoaqMdek2KHZdhe4N6U",
  "key22": "3gjX7mMderJu9ogUnYVnpKHmynL2hGkVP8wgo4zFsoFrgpBcKHAUpaGP8UydtP5pTnRB53GnyXHYuatcUP28RStL",
  "key23": "3jxUtGgVMdg64MCX2LLNgFe7XGgaR2Th9dLwAdyxMvmF7YRWB35drhATtMrUxTZ2Yrj2grMro89v1r8joQepvXi8",
  "key24": "33toDBd5aG1y8k1EwQQg7idS9MAtBkcj9GB1ppjkCC5L9JUsCZtaPZf4KrVbKVVQayMsK2sxovNLWyabvBvmXCrr",
  "key25": "2u9fYjE7NpKLESNbz9YWtBBtP8RXs2vXHudGZ2rdocQNBGwAJ19BgoyUWXGdhnLN1LqPqJLorz6V2rZYE8zELT16",
  "key26": "3RxBk7ZY9sogBsuJ31BQcrGHL2W7j7qsxJfvAWVEWUDy8sdihT9hPWV9w1z17sD7V5KAEjqUarUgD1paohLVfrgA",
  "key27": "5QHK4eakizePETh4UbGtzefJvcw12NHYuz73M9JjRQo9CVfQvVTmBf1yGq7XZVzp1Q4h18FKwS7STFGeHbRSkrLU",
  "key28": "2m5PH8tL5cTgPzj1oZqnUPYikxP3p5LheCmmqAnMc7JHyiVLz7c9T83YLHxXhscheUpYzcUCrFMetM4nEYtZywwj",
  "key29": "2y9jareS1w5aPf5F4cVopug1TP5ps15XHPLmDUrtVCJmPHpcVLSmRLnc5mVywCWK5VgNEhzvqC5xTJ19XYDrzqqW",
  "key30": "vr6PpHUi9DJF84uDTLG32jkbZuhpBk2CvjnFUiqqDyLCkwPVyXTg1e8Sp5yor8TJcTHRd5vU8mkGbQhFYSigatX",
  "key31": "52bPBaWDFNnhKUutnPW1UhsG1AyRiENZrRCTfR9knDJ8ZyLtRwT3CQZ75XDTR5D8SuuGiQJuhpBkCdV5PGrqbrpi",
  "key32": "4g1v3dVQLKk9h7xWqMZrw2TRdoxuraCx7C46Hki5wAT3pGKgPabanXBaKTqk5bPVgHGo9RQFaxVcgbuXRPdzduWK",
  "key33": "27jwa7PEeuWi6NRagUDthdnLbjcdzUDKD4rDYqRZFcc4n9y1fCf3Dgg75V7SGU9Sjg7UyYKbN4VFbN1wdzvpyshz",
  "key34": "2ZjraVtmFCFHVz2Ayut2RwgQfJGajckxGYk6d8ByvFeP1Xo8qUtqmNm5hhRcaw2wWZGBwiPDjW6s3LXQyksBuXtf",
  "key35": "beMujSQFLJbpKEn5UKmFdR25yRKboeFLXBS37FsXW47RGBvZti6JZSNzgrunLAmnEtMPxWQMmbrBnEKyB3ijTfm",
  "key36": "5zuwbKei9rUrLMWR6M75cnujtr9XBviom82JkALhhAkegb2ibcdaB17iYzZE6CZVWWjWr6Rmf39Qy9bsFmXTWsjX"
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
