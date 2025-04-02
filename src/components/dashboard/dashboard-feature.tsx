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
    "49U5nUDJgLPYG4yW5EWqCTUnPv5UvbedAnS3JqGLRz2DdKS5Hv8yx9wG65ym9NFBbmNgSS8RLsvUkCeVAQzFdA7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDWh3BNdxNZRmLwMXd3nJWMdcxLQ7RGKEzLxCf46PuGrB831o918Z1G4tDhHWkbthQjzy6v3APymTfvNLKbyxvm",
  "key1": "5iMWe8abznNGTAtCjXM95K7krueaqeMtJgbd8tmNGpRhzA6GE7cDTABcXKDVJS1wFAUsL2CZQW8MBMPNkyA3AwgB",
  "key2": "2kE1CjJSfEn4CVp1nkwo5GhwqTaEn3fFGTRJoFGeTYupZuWDmsxRLad5SpXUoRK1ppi4Xkj41K25zgQocLMYEiLw",
  "key3": "3fj79nP5557d6SEDmp9WusR8ztu6NoYcM2N8C8eG1HTJ5bUytA5LNnY69CASNbovSfnsUsAfwvd6iVQP6rch4s1W",
  "key4": "4qSKKMT7yZCks4oiccH8neCyTFuq5Ve7jGnUZUTKDq6CwS6mNntsCw2BuhY2pJpUrquHUiAsTc2N4EyjhT9dANuM",
  "key5": "2j2LFLZZS45rDhE1cuBkkgPqTg8JLm18Zf91h8V6gZMVfhUTapFX1gu6cn1oD1K1EVv9ZXpUDMRDzhiWCugB51e2",
  "key6": "66Zi36DWQ5MkwP3ahp186QatVPYwGovaGzZ8TPxT6nYJtmRXpMSWHaoYTEHuKwTvsQLGvGP2cA3jxzGY5xmvJpSF",
  "key7": "53QoCNQ4x7eeTTAjC3da7FbWK5NHinWXhrLWtQApMzri7xDo6BdvJsV25XUsVKTiDrZnHCDDyd6FX1ZoU4t9WJRS",
  "key8": "4rfko5vpojB2iRP22erYZgiYvd7hfZtpeJeDzqH7or9e1keoEm929F8KT7bKbUsm7bVEu6enFwhisEJRvLJeNf6F",
  "key9": "3HeXnidotatAhkVPXbNKjhVtbfHiKF41FdkLzDKFmwGs2ZzmdaRVbLAfq9p4oS89j9kCWsxWMS9kgV6g5aFsoZQk",
  "key10": "5maGSBazSGX7VHnts8VQ3zh4jvCGhepxQUVRxk1ZTsWpr6REN9KTKS8nmy1iudi7LcEyffP1fyGsqhNRxtYU51gn",
  "key11": "4Bh7kEvxyvhkYjZfdzXhcMQszD61UawEbA5t2mJR915dwTGFKrQaeLC88v9tTWKcHfxjsrnNAzNZTgWvnDdoBbZo",
  "key12": "XU9hz7V2Rvj9EcCd9k4yV4oMhH4atHVTkKk2LBHBPm4CvT36BYXmPrJWkq2YqN2KSoDXW2YDYkJUkBXAMrZqw87",
  "key13": "3Nw3yUqNRKvpiSy68mRcxcFpqF5UdD8db1Gw2DTFUvR7SGNQULgRfdn9FBzvXACWey7MTQv984M2UYxVo8NswsUt",
  "key14": "45exVcWepf8YcgpfWfo6tmgLkZtQ7XPDdQRnFFbmDTawM3rEsJYqRWyvA4KGkLN88q2Ju29GxumeaeeYDbG7zSen",
  "key15": "2kV9xqQyrrYEWN8jSNvdvVyW8Q9WEWUoMSepWX2V27QaX6uWzSEsvupbez42WdNTnKiBruPkbWgchwCt2jBCGTLs",
  "key16": "53zzZo76ehu8sxWkDZRaZjPM5VmZqwDVegbMjgTaxuce91zybtHhXDnR6mhPK9Z1aQcyxANn3gzPiCBjpTjQcgQf",
  "key17": "5PrjUPzrGEfAUeNc5m8nGiigKUkFJZrJD83xAyxACsdAzv51uo6wyMJfQhCLZuznSPyfayZ6uF38HcTcvV5TLPYd",
  "key18": "442gqWpRZTwk1Q9zLq3wZsBr6ZqKchx8d6cf21QQ73reSxGGgRH9R3MCv9YPeeBTjYNg5LomshiVqNAfX1W9EoiB",
  "key19": "gaDStrRC5TiZr1HDRi2F8nraJmm25SPjUrRN2oxT6owqjLNWwFdC3pDtgd1XWiTKBSBH8oJkhcKmKeyXqXvTYaj",
  "key20": "2ps6DRkkGV1xX1QyznjUMVzzAYu676jooQxjiu8AsyQ1ATM8KfMemTKuu3yFzhqLUQWcTenwsrZikeX5ysroQFJZ",
  "key21": "2p26C1nLjax23Unx2Kj5Z92cVdadc1AnnCSLftDCP8Cc75XuZosgXSN2vcJnGuF6iMuDDHLsPGD6fLgVRhHi5Au8",
  "key22": "4euccpYKBfcwu8Bm645f88UtFj9xRVuYrrwvzu9spSCCbSf1WLdrmbRB2VgsoZJzWKWdGw84eByjMSe6wBmhPeFZ",
  "key23": "zWpYM8LmkZimr8yPJj678DjpE2jAeBSFZX8sx8vBQVHzrdfrFXV8ZKAnzeYqJ4BPH1REJziD6mMDkgxKuLwRQvo",
  "key24": "3iXTr9TY8oYHdze9fmFi7kUhkSMPkvtTT5oXmKFi2qJb3u9s8hLWzdxMcYvt5yLvBn96DeApguCJQrwyKrqFor28",
  "key25": "4eZtgtwGxsjPt8aq3cjxXerwCMr4WyPNarUaka5rdJWpDY3m4FzvFY73NNdWn8e27kjSqCgJKiobFMTSQigRbwAu",
  "key26": "52cpDmj2b4Z4GfRkjXmuumcvQFvpGHjvAjyJGGFu3MuqW8aQTLx6ADcGLRa4HKxs13E7vyTf5VkPYJJ76xc1ZnyR",
  "key27": "4AVYkccHsPuKoBj7sF4PwzTTo8Pfum8Y4tcXykavCTjDMMVq6wk3nKZAk5SUeLmCBpPP8B22zHZGfHMGcecAdf5m",
  "key28": "3wm14gQK6yPBFSJaggXhhhv1QMFsRaqmosE6B6VbfSgvHEXgNhTZoodvjfFPWxQUVkUuHmQmySfd4nrTeQ3y4ZGq",
  "key29": "Rf9tjGmzSc8rPX1R5VHS1qY8DKLbfzjjfYjZiqy3Wr5EhE5jbs9cX5NPLcCubjEhPtufnPCmNJ5A7tqi2ydmN7i"
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
