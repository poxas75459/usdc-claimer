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
    "3zXDrNeJreE4bNsCzn6M6CgkubqxZKEYS4TMMbzLrSxuRxkktbCCUTwj15xpwQ7kSTNTyg1LyuoY31WjC6beeQdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iArxyqBqsMzu6r9asCY8t7VUvCERcawcWHj8nfKub9gPKKDBA83WAQm8it5X5jaSQfhSo4WGWadshT3z5Z8rTRb",
  "key1": "KzuQ7DmRCLW4kWpYtz2q5KbADs6n3ZA8mELQoSF1gbrAN8Gekdz6jfyFbnm6Q2riSv8LE7fvSm6NHrS2wZgfaFb",
  "key2": "odF3cdWhjsAgPeXQ3MMAxmhjoUA5UZRfPcbpwB5CXcB6XLgR7nQbbbLWq6EVY89hQ261UEY45nYwmKYBnVwNMcM",
  "key3": "5Ue48KMHPJfU3vfzhNTUdfJfxCRf2ajPJRChZp5pvPizpRzgjSTH2EEaK2eTrZfSCu4t3aoY5rCpw6Ya33D7ZdMR",
  "key4": "wNGSoiAoi1AkjdzM4EJ4oCCUQ1pAaTFmYMU3oUrWRCDmNwZ8gohp9NXnM9wQWpBWEX68xBWiTAPg6NkAh38EzYB",
  "key5": "3Ais5MVBc7Fjxcgb9smpXYtFAwY6pzmkUhJy2kufQJWiL9iKRwdxKZSjKnZD3WjGujq2ofq64fgs7YRohdfa8SrD",
  "key6": "VEsNWfLmtg5Rbp1ENBnbBRGbjBPK84AkUqfto8TX2mCJFvwgfLRJKoFTZ47TgpPoz8VaeyLNxXoC7XNRGVMGtY2",
  "key7": "3eswHU7mD4WythjQJvqkajwSYpe1sJSKoMorE8ojuLbFTz4mwEZjcEd4XeGKgiz1Jo79PLagLrcrHpDypTavMMjT",
  "key8": "4UVQqH3Rvr28NbFjdoLfFRDG4H8r8AA8d7135VvzvuKQuvNX3xDDVwrzdVG6s33oxqogEnpbNuiZVGi6z9gEzare",
  "key9": "2DcbSGr1SJy3cEGLNR2jt3gXqRAJP6CBoz4MbpmnL4bfqpy8Ny4U5ifnpW6kZcWtUk62BnukspwQfB9rZ5LnReU1",
  "key10": "3nq9cH2jvjs4N3bLW5Apbe6o3mJTe8KgYLoJkapQ6cPgayp8489CrxRqra45UmY25n9CddSX3yhTsQJHqsbaTMde",
  "key11": "2SXyzM1WuymcvbepH5jXrgt2UENbRomjVTwVaPHzshTfgRqa3tPoCzQbdcaeTDxAqaHf2fUWYDcS2P72MoAA4Ury",
  "key12": "3v4i3jqfcVZDytZN3GT5ZgV3KEgE6DtxqM5gMy438bwiWgcYESDuVLgjZe76TwEJ13dGomwgf9pDEQH2gtn74aPy",
  "key13": "4HD52nhzQFcByEgyeSHo2dZ9TW3xgEcNNxRTg8uKpxBmJGS4NxUugRFZ8zfyTzWEW9wXa6uhUdiXnQNGGZfxytGY",
  "key14": "5DynDe8BB12eerf59x2UUt9QDT4qEVQnRP2fXkqFivvLDzT8yWXsLEdn22eqpb1VHFHysC4xLkhzs89PH4NwcoNG",
  "key15": "4ZwzW54AaW1SgkCsFPzBMd4iTTpg614asNHKoNzFDLnGD2PHDia63e93J5q4quaFVzftGP3w7MhseJ4PrxVm93We",
  "key16": "41AEYbtQzxp3K4Lb7EpLAPjUKy3jfMVVYSsE5i6mZVXwRK46W46YMQhuBmkta5xi4YWhyZpFZXLoitAPiwhwp8so",
  "key17": "5h72Mc7zyyT41cTeiJZKbsmQEmjuiQJRG3k4HfwULx38Z456mivTGeSs4SG9CT3Qs3jShV2F2k1zS61LaqsnAXdB",
  "key18": "4vpekBkau4bfjfzHD1q7GjrQVCHBZLcYtunwarEJzk4ddK9hccPf9B9m67Epa7yH9QZ5ncHCkXPUCVJpxhuyT1Ay",
  "key19": "fn14pTSRWwNz1Gm1nor1NoWPoEMjA6Ah7yKzRKgy7cwUCEKagSrvNPncnzsiJHkwK6sMbEuUpwV4VnAUiuUHAwN",
  "key20": "32mDxxHgbWE8qNiB7sktaNVJ7YQGNJjVY1aZJFet7ZT8X3Qxvi6ukeGxkFbLf9VrznGZw26d3TadyqFnsSa6NCaZ",
  "key21": "67e84Vfwzo3ftx2AtRDPqhmyNWB4mBDEFepJReYKGGQFyTdaoJJAqZamUMimQ7kHMmbLhXPs59heq3tG58nG7xFT",
  "key22": "3pJoHhLG5qRU319x4QtL6u1eJ4z1KiDve2AUTtPugXqiAE95rWVhWCmJgW9yQ3Wj3AJ7KE6GHNq3Ua7TeAjTQD8L",
  "key23": "27FvFeXzdhhWHbj95YvLR67Vv8nze1LiKGP8yPMH2Q1gRqVc2jJT6tJx1tyffGmYuXTPJb3xPev9cFJyq8Jgk93p",
  "key24": "4ixkAauoWmGXnyCUWQ9HT6v58hmKCavEh7pBfyBSohvmkgx3XK4CyT5XhRTHC9BS8rSebe5J8o2VPykWbYriMoZS",
  "key25": "4zqJEzYoTCgYmfLBSVYoAEF11yQZ9WtV684UkzVusqUqAkffj8uAxHrZMvR39WyQ52SGBqE7H6arAfepn87UiFoX",
  "key26": "3RT3zmBQ55f23FphjWVqntrHtPZwEkyCT9eC2xg3gbwsc6hZGcnWk1yzysmE7SJnKi8G1xMsWGgpicqG49JnGbqc",
  "key27": "3bBB1h5ZQBT5m6qr8YxDZgCz5JpkuPiViGeb5LW8bApL9K11ZCrNMQHbfxgoPN9X59GR6gDc4VFzY2LFxzcX7CTV",
  "key28": "2w6ReBGg5AViQLWv1rLyKauMFxA5Bor2jMiDrF4AK71wrhsKdxzMtNqthhfZC9gdVyfRSvjpAcont4rZGaytkb8t",
  "key29": "2YRUjBWMGeLbBcHeJAMTcC3KHYfoMwWMSvdtih7mUtg9YCZXxqqj61JpVM5UhiFyagUJ9yhcXuBGuKrKjDCNtavs",
  "key30": "671X3QzJwkC1MVd6uTB1KivW68yBWthGje9xg1wnEYnrtiJhuTvFzkoAHiqYc5R52r4iKNtnwhD86FMPm2zN8Aft",
  "key31": "5ZK5yadUL1GXuyyryTZAZ7nSKPG4UBYB6nLn7RJxca1N7WhtFPKKnSMimAz5QbwNRJ4gWhY5x26u5PnhbmPDRBWr",
  "key32": "2SnmaZ6gYvyc5N1m7pcWrfmpUYWrJKYVWT2c4JwYEJ1qHKqtkHQ1wMuYeGZijVh6buKG8jNhZ5oVSyiAgzKwvWQ2",
  "key33": "4ovAf1qLLM6oSeg7UdKqynWybmr7BiY2NXVcwnC2RNxpDzzKZ91uXGgDmka5qE2UcvRd7eDeSP7sMmXAMBgniHke",
  "key34": "3oBvAhNN5wbJ85F7xXoYRE4ScZgSJ8CvxPVcAfbWidP9pwhsTSym88eQqznWkbeP3vsTpYPCPFeNL2TfmA25RC6b",
  "key35": "61yspGhnzpcA7sZTZZB9tupQAeQcGPffBwWWZgxGKKA5rss3DM4uCB5HJmcYZSktq6j51zgQyVAMubfbg1Mudbjs",
  "key36": "4kioMBTTR8SnjTUnoPaj4dVQfUaw3BGgNEGp8adE9mSJvcHfdUABf4G98F3oDjX4qzfACmK2ppGxeKEEAR6vPBgY",
  "key37": "558kcJkYA2MaDaAc7K6xCHdB1v5WY4vUzf7u5j3v74SPnVieVwViFFFh3XCPRAFFKHNS88xSVZRZ1irUGTCjDJZ7",
  "key38": "3M2GPE2XPyhdDzVHmSeFnmXoQsHKE4y3KQsVT1mFQHUbsYfYJEzkvJnNKQdRhkftDDxn3yXiEV1wQZdDwsLR8MwB",
  "key39": "CGGbEvExHXjVb76pyLUwwpcuv26TjezbzazWU5Ver5MuLhitcGibtk4oqJA5eXaWxYXi4fDXNiBMHprhBnmgYt1",
  "key40": "3nAN6NDACFV43hCAt3DPS8EkXjwwUFJPNxQWGvUCrCcx9npPExehaaVjmQvUoDbnTRbmVNrSsxycx6UtgAaZdsaZ",
  "key41": "BSDtr8aGcu2o9FrWXEh75DpEDDFvv4nFQntR6N8LjbmnPBoKPhPmptCWfANsy3Lf8pNWUJSy2uAhwmFkeJ4Uent",
  "key42": "4vjTx9PrKp7coYZDoj9D2iSZS5ocGVkR7K9fEBmDvJUHmNATVK8SmeviTxuTLbU2Mqr15prKm3Yu9zAurBTH4n5M"
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
