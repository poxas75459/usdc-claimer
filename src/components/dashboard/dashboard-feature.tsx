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
    "57APSGvcr3e2GAX1HY4795SMyR7WPgkGuy9myqeT1QKJR98oYupTB5nN6pfX4zQPyUD4McFwKx9av1w5C9yuh1JS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7GDk9TxqrY5tDSWnkf4t4Tg5Uj3Fr8b8ZxDDw3zgV6WHBfPE8V4rPYtQdUgj8Zzj9v6e2bn7hzsmsWiaF64yMJ",
  "key1": "2ivpTpjG7wkkjm7ERYsCKzovCophYekqfgiydyfBHveTSDXEgWDgC4uSFyvXzj3N5K8pP7bgex8iv9HWD6ZBcNGc",
  "key2": "4LWaMEHAucdZtPFymSiWb4FDYh4Rp4Duz4LiXjR7XDVnctG6vi2Su4xEsmyY4kpHxndNVwkbFkyNpBAbAcpTNW5E",
  "key3": "2B4BZJps5KHtnKs4pLpJuwhJNw5DCAKttqeabHLCPFsxp1PAk6Y8KyWrRiGFoPZKgVD2dmR8hmXKGezhbG3cAVyK",
  "key4": "5iQ5qegRCn64drwCxkVEXjT1cj7zjdcEyD7svZG9nq11VW32JbYyBActtH2nny3La4vYTfcgUdkvkPr7wv85McJ1",
  "key5": "4VVKLW16rq2gtvxusZ1przsN8tatQMv1EVBQMBmAvaMZk3rtqZ7Yp455Z2P1NjzbHw4BHLNaNF3Nv7K7pMQD2crt",
  "key6": "w4K2okbBMUZjDR8GLdtWG293BQyg2QgQJd4jWHo1YDcn48NB933nAqMNrbxEDRMcdhTfncbiHXbGwxiQKXR648e",
  "key7": "3C6cVLvP75sDJT1Shnvz5tF9qeMKBWG7VjNsBkkhgvYsuYmV36wNAUyvUnLunL2TmueP3n5wV1QKimj2AK1HJkMy",
  "key8": "63mqWUy7uPjB36ep79UK36d7F7J1URK1e3oBtRwH4rS3MqEZuJKpWGZjEKMWaC572x2DfcngJrwhZyaqvNcMpoRc",
  "key9": "2VuKiW9PoCApcySJ495CyqeQ42uuC9bx4WDzs1ipQ3aUP4z6ZiWzkNq5VSvzJ6GEVza22JYGLCXNMd2chFhDEZrN",
  "key10": "5nmpjDB2ARg3NjPxgHRhfohVwUKa5iWz7a9b5LYE7TE6GZ87hhiwjkGTuuNSoEWNweEW6oT6uU6o9V5Z6F41FN3d",
  "key11": "CFdqd1xfDqAi933LPhTXoaGYjHeM6KjoEiyb8Nr9qMzKKzhxVKtzAfgmvk6E7WxrgMxPaVpLabBfGHW6Tq42NjU",
  "key12": "3eSyb7PGaYvkKfmFD3s1TBboZoD4v1BrR9X3z6T735vTM7cfpPuTTPUsGBrMXCU6aU1MWT74KXkGoDEZ6P2yBb38",
  "key13": "33XmvAaSjV2WH5QiMWNpCLfevH5JiuPsK2i4ikF94aMB6PVrgg8XuBbA4VGa3HJ6vKzEcpvBbLajWBmhPypkKRDK",
  "key14": "3UxeTUhqfMY9mkmp9tzLc7mYJ1u5fbUbMiRn3trLQ7txJYTdhTL5aghZpTHxhoqyvzZM9ZnKEpxyaCPz25A3nw1n",
  "key15": "gK2YX7L46FGmEC2CY6CQoPbGEwsa84neK6fh1g2QMof8aPA3iwkXCzpAurkWXQtLZabTBjNf2KfNMzgmm6F3fht",
  "key16": "4ZXFJLjZMFa43ox7fBuQGxZE3zxY8Q5ma2dTE85D4r6n9pLEdS21vb1eAHboJgeXvoNwc3nuMSXp6L7wVZug6rkf",
  "key17": "3EGtbGgkRFK7tt8vHuwkH5kprALxnB8FxXKTR4MXyWHDPgQsi1WeZyVDytCRexaD9U2ggZ61zPieJsnUQzwDUHrC",
  "key18": "45FtYh9231fTwWJN8NZ4XKcbsadowZAVhRDW9WGadjy72c7VD5gcjet7qyTVudgAvUWkEJ1WZRpn5jjzB1epz9ei",
  "key19": "5pRaM1kS6f26XahmEt3PJdeCut1JrzZY7AVvDih51r7XF4FGaTQgGFscUAPAZRQUhnzNkXR7RKqXPq6Y26D7YpwZ",
  "key20": "4Q4sSJ4jKWWndYGF3zt1cTkubTeDTZAt9BvZVj9rWVxZ4doVbeS7G3FgDgV9DyRBsy3opLGgx2XYvfsR4ZX8Uk3a",
  "key21": "5GS1nxCATMF4CAnQ2AMA8QFnYZbk48uD1AYWxYxAqsm1xCuBfendNjnqZr1ZCBzNurH3vCBuGyo47wGxDzTNG6Lu",
  "key22": "3dEjqJXXBg1U3MWpPa3YR5uUA5X8sDztZk2geqmZX84AK4QwrBLCW5CED9FwTGpMcGkCCVpXqiF7DUErwkdVThvS",
  "key23": "BeXqu6oER49tqHK8YAe4vBhuGz3sfcNF3aBfDUxU1fchzkztBypEXQW9VcWfkrsrrjS2UFjmWZCDStMrsZXG8mQ",
  "key24": "1M3WPMfjWeq1xhJqaaZVuQQaW6BhNDtLqXP89JTUxmTSGenPoWhqGiv5rm4EUBeMAPfc2Gdye9F9KpBc8jYkfzb",
  "key25": "2ikmEc9uEW3uaw6fecC4U6UvHQJUgcK6XcfAM6UmiQ3EtHmDCxtxaTo6tuGg7iuxUGSuETcaK6yr77Dz5zm1m4Em",
  "key26": "65ibrNby1UD5AHKasK4JpmyZA7bLLPoz9ZGHhADKX597z5zgnnS7FhNoevFbnMx7xbfYtBbTFCaD6ePT6J1N8xNy",
  "key27": "5c6Uz398qu7U8CaLVDknPpdBJEXK3aqCfzA65XxFcSKc3S5H8RtpT1FS5NvbvrbJcbRJnWu43dTTEjmbZWL8Txcp",
  "key28": "yr2QSk111mFv3RjKXyffbscHtpymp3Mfb3Ktd3TWLK7p7EirkZgXDo58iZ2vzo2R2pXSkf26FQgW9yDRY55kf5K",
  "key29": "5rpF5StEL7ouwC9nTngW44pFupZusyy7GBqCgq2mNFWfoQDZCMX71EXbVRKgu6bm4MnF3Cce9T5Fzv3NzDP1V1rm",
  "key30": "AyGBFyj91nprQuuwmt9PutQe46Z7v3B9xnXJMESim8ijPPSxtuRaGUvHaaEYrPpedMAsTYMdsQp4UsQyCq8YeXC",
  "key31": "2qdgyVmHSgknNx6tsYJiJUFi5FXEohbqAPBS3jGqAvEiN1DUBqVKJjgWpEBzQ8Sew95y1h6pAji9BhkbF2oopZY7",
  "key32": "pTfWhTfrFNFMnfmzK2YodDbPkViDeUa1nUqsrtSqcVo7QQCybGycW5JpKj438cNHhAWRYqDjZo43Sif2mKd1kp5",
  "key33": "5ypiW3enQmcncDiuUkDBFeqRnfEs58Muk6s2fHNGjyD6LfjjQ3tkqYxMFaQLQEVvWwsJo4ZKGd7fp4sekCNtCbUs",
  "key34": "3Bs7g7mMWqB4vmxFiGbVffbbYrKt5oDCdF7FFfHNE49sBXsjV9kXXjqNCfi8ZSpMkPt8ycwzm9se2NjU9yY8qQjr",
  "key35": "5obo235q1ZNkiqMs773ATeSTNnmEedNi4fitrNakgg3116kusEKWWHonb4q3oMfddh5CghCM6BioNW9b9htifanF",
  "key36": "3gakRRavDxNFYeftKtAAfrGyH8rWx5h7Wd5mkffYVx7Vk4rkCS4nJGh3L9tfcdXAXveqyMixnPeYE3DTC5BmugWQ",
  "key37": "2sZhQgQLzS6AfM3HE5tCD9ctvFJ9R7bTZ8X1VdvJ2hvgY8X7wN62iWoumh9pwZzpKh9mRWo2jwguzUfKSp7A4Vg1"
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
