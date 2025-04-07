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
    "5gVjW78QXUWPAQp1ZNmZgTvTbweCNJyxJdModJDTcEK5sATvHxgrEmNT41WhN2CRbHeUmAbHCs4qgocXLgYtYom1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PgktskADcpzXLZiHq2S6jv15ZYQybBRw3LzJmPCxFp2fqKeqGaxfdza56mT8ti46kMfJpVwxce7ihTs5Xh7axYE",
  "key1": "3DSZYiG1ym6bqXdsmcNKoSHuUq8QSFZXJAvuQmbh6fU5hWjeBZid3zGPD2WxA14Df9HvPYSNWXgPDskenvbpwcqK",
  "key2": "53ALnhY7HnuRoX12oxtvnSEacGzzsVNApgYnVX5UW32hGC9i1pb3KyPDURH9e2QjyyuK8SK3sVasjMtycdSjTmMc",
  "key3": "3ER1wJBdbGiRUnvSCzmmxcMZjFYgmqPyj94gADqXA3yExLCYBiMfttVLMc1F2MBRUc7RCTmjAyzcUqio5xGbZT1h",
  "key4": "37epFp3BmawdT5zwwphajxGfvZNPzwUtfMMyhufdWxPWXAJne6A58RmrL89XPsP2uftMTMiy1ZWsPUQto7JvMYcN",
  "key5": "3jQ1xgK4sNiiji53o5v5Kaip7eJBrrgqjUjF85XjiwTY49iW1YohGbRdiNNjDkAZccy4UZCAZ8kAWDdVwEto6jS9",
  "key6": "29yRXkJBQnVN1qVneJYrnqF54U2CFaQwSeUgPCdRQgTJfwSjYue5Nh9TBDZfY1RSG8ZpRpGFv1Dg3GwMkTRfKK2q",
  "key7": "5fynACpt3xUDp4HR6gAnWFNYi6egGombkyssuVgpRbRj9WquBzh9vH7ycDA6vDba7BMro7CN6X3wBQ1BSTScpwh6",
  "key8": "4jKecAjWqmAZi9PFzNjfQk6gfZgfhf4CY5oiJo4L4ESHMxZwHsTUnfuyFLX6Wzjd7fW7EiYdVhfUW6pjAZHpaJZf",
  "key9": "3NjBx49P3Ccq5BgJ1aexqHMMPaDna37m5PK7Z6R7mbzVP5wZJNbWZxf6gH5z2YppW393tFjKUUEpGWj3LMGcnrK1",
  "key10": "5aZGCRWDzvqNzTeiTyqYYazDVmbBeVYh1jm8SjCX4LbYhwW3mdwXok7DqdX4N2V51sjFsyAfHBPGxgRoaeetqAt7",
  "key11": "3EjBgKBMs2RmbtWZGmTsVqXzpVSJ1UJHcqyCv2FeXTLQkvqKcAAcnsXfbrkBLjTtq5gTd5qg5NMHj9aJyXyyyV8j",
  "key12": "5SxWSR3FGN8wT1nLoowFhsWwExhQc6v8Q8BYGtWEnzsTuosf5eFWyAzHW5RXyJDiCU7pXjJ5ZVs1pRDFQ6KQtBoo",
  "key13": "qp1gb3MYedDLGXLN1xf4ewpkJKFbg43t58umcg8CBMgfhqcugAsqVx63yxhM3Y9sAn3zHuGJvoFgZFFCiH361h1",
  "key14": "2SthASV91WFktqVKZGCJCKDTDJpPj9SeeBap1oPSx9n8FWcnTadS1ekqQW8VTcUckzBEZkqzxmJBShYLEA9WsRdM",
  "key15": "3DPrs9PXpo1eghAFJ2CTWeC7ss2uqXF392fccTexZwntLrc7VYrM86DiLz7UNNXP9vprixixr5L3Gpkt85FbhaXT",
  "key16": "5UXqc1wysgAafaFEb8zUqzZsvA42HnV8ffkADVJzmkmKLLeL9W59x5gkAdWzYNpeY3xhidrpyPmz4J9kHT68BYNE",
  "key17": "3PF3vCAUkgCDFEHyd6EqhsuCJcpQzsoqdwoB8tYriyZ5ouamFz5EAE2x2BQ7r9nDUgP7w34og9LTvU2FNB9sjQL2",
  "key18": "3ouDoBzXHDKS45R2YE7DeEjoDPkpQbRrcBH9yGEGX4CKdtNeSDVnaSx71sRWU4JeZK73QABGH6j3qNrwosCpxCUg",
  "key19": "5B7J57reWm1mqoCA8UignxWXhLKw5riKhViw3oYXLjMzvV9FMjYHiMNiLcsYmq8GjhGPSGSpaoE8D5NzR2f3w5Ug",
  "key20": "3n2N9dnSGUBkyVfBWonReDbrUG2AHZYNfhrGvazTJkSpeH1wNc9W9vCMZTvZqfmf428W2FhhzJt9NJGy5Am3LkuB",
  "key21": "2BLv7Wvdp3jAxCWZjH26txq4sr37QSJ4eEFD6h5bDGxhtBFkigN8Yk4hUn638oUWfrt4sEJ2im8ihmf4ZNPoswue",
  "key22": "48J9u8VA39QyPJxT3QQjPdXHhxYzBLzvh5ZAoGnu157nRUkWQ6yK4zzekceGStJj3aBsMSDEwM3ScEryx27ERNYL",
  "key23": "56oLPkn6EkhSBeQxCrQ7w1g4hDHnwcHHptqJLZTucpDrKY6P7BfewFhS4w8ErfzRBP55G1FxuGP8Q9veYAbYPtTi",
  "key24": "4TfEqmxHKgwqo6NGNMxuzFPSp9nofSgNvcP18WkC3GChme1gqoThzBgpSZJKhz36LnJiREXGDRRK4YSvN3vTmkjB",
  "key25": "2ZA1jGgTjr3byp4jeuhYKBQGiw6U1FJfJ3qxz2a7Dus6NjJVLP1BrPXZ7bat3tD4awYGdshKYFR3yaR7kSu7XXi",
  "key26": "2uBKbtvcdzwypQzqBMF5xoQwdTg2Sn6YZ9ASUJYzSXeNeWxwXFJQuDXuTAkTQJqiFAjciWMxpE8QYd1KvXHy33iH",
  "key27": "22zg3EdCoL3M7fryS3KEbwRd2hNEde5QEA9F4wENsCVNr6Uk7R2ptvPQzzUm7Vp5z1gXrN714HTJ1b3wtNtzRuvs",
  "key28": "4kondBYxwyHotWyFzMfdW712PamvkVDMmn9yitPgwbjix6Y18mga8r4zGQuvjQ8SnvtiQzbUBQ2w4qSZwGkzMhgq",
  "key29": "3cSudomCkq1kAc3n7pA7aw1pm17Fi8M4rhGSqp6DRc3QQtmezUwi7aJNkoy7pZ7SdRm64E7jVPz4PyHkf7Q38Ngd",
  "key30": "4mQk7VVMwxp8jSHCVZwhXa54GaifEWJX4Pa5t4yvR2rcUdpNAX5tR9xoP5Pm75LKDBjcQ4dQy1746LrMfLwfoQ77",
  "key31": "2xrvkegmCsWdeywKy5L9VnrYHCgUgj798h56sL82oCcu3q26GM54Fra6Z2Dzcwa2DGc8fZWyufTLKunMsBQ3jdWw",
  "key32": "xPGkXKvLzqGKvrcLHs5z1uQ9jHFvXA9LQLR9H6LAEgz9CdiBM5JzabKRQJdx7cSYPZXeJwa3HNhUqbzjDrM9ao2",
  "key33": "4LvPkkqLHTvXY9z4si1oj1QyyynPSXSMDCrnTpn5dS22u29krzz9oaxsHw68NDXR53GFsUejefounpFeDCC24UVK",
  "key34": "2duso32VzH7zE9tAig33hHFvAriHPM4GjwfH3wqdRxmsLvKZxAJHTuU5pXLqD4eha1WZAnoRV6wCqPAY8XRSeJdG",
  "key35": "2Qn1d2zTjrGCVQpgH3ZGgEr8LcGiZ6Z379e7ka9AMP2j8bbKrAUnFxzS8Znkt2pVmtym9TK3MxaCjtRKTkBLjCCa",
  "key36": "Ys53QUq4iA5h9SDG3eeAUJLHm8vrczkZGW5jvvXh2nYoY3KyS6Gf3qqsxFBqCjvycuBegHFNQbLJMCYUVeuAgcS"
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
