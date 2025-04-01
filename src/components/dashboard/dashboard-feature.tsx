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
    "4DJVMc1WuwU1YZnNXNR8G3oHDcT9nQX4E35AxyAASF9DxZenEVT89ASHAVyRVcDvCa4PW3y8Cp1PWae6X1xCnGfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hqcHbf5gbzDRE94qVmKNETGqtSDMttBT27HpudEn4HpfXobu9sd2aGn352PVMN2kkoZcrUxoM7ihqwNW3i824kN",
  "key1": "w2pAgKGZYxbmaRhGguv71EVaHoG2GzYWEmyPaFGxfFoDkXRj3ntHYaqfh6wjuYMKmLHrsMNkSPnsvjn7W4cvMtW",
  "key2": "4c835iV19TErFmEv8xZh3k9nZ6jtpaCgZ1JQAS9Hcw7BZjH4Jj643TB3vWpAAHznNjvNEHk164JNpBopiLFEC38e",
  "key3": "4qr5gukBXJiBM5AxPUViwRtYiA3mBxa15wNCMyPCcqHr1xSj4EkDpnMaWEybQRNZjY8q1Nt1wWPAmLHJLU4SKwB6",
  "key4": "5EPd6fYeaXVh8xNsrxeXzs3vJDMKdXN6PTBJhYtBS1KYwMd3D6PbVz3DbY9X3TwWPKDfMGHLBBHvux2BUoABMNVF",
  "key5": "2auUvg8sbZGoxi51J2B3JEYnwtMvVWJmi8zrgC6BEFsK8fwMGLZq9wUsFNLsQfcYpED5bDWCHE5rhV83DGp9KXkf",
  "key6": "4JaD516gxMZbBGSNsS5tCKocrGkezjEqYkyhwrGYmkMS5nBU1GMSJV1Qj6jHceT6Gmr9SK8kyRwaRGr3AMTb4PXR",
  "key7": "ZJSxjQwTmq4hZVVQrc5NiaJNARDuEfVJ2An287N1APp4pDskE3LKHNywQezwyeVk7BpHyRXAL1eJbMemppGjTaH",
  "key8": "3xK1s9ipkmTh2Ute9XfgWR8FSFQedrEXFSeCC7dtaFmNuAo2sQo2sXPgP168fWS3sxCHjDT6bA3a8qeD9BPsd3X1",
  "key9": "56ukFHdjpuQ7cvnzHQQXN8w1U3QYYVjPBq81aKXM2ScY9nuk8vynBtW7BTYRqPUJAtYerk9e1uNi29fqG8EbGNtW",
  "key10": "ofxXgx97zZ8Xb5sDsZkQbA6LGRnFXqHqqHoqzbsLAhjxiHaoXxGp69w5DReyx8WVvV6yjtsZoCVwqfRtE2DHQkp",
  "key11": "5oWVkAFJ2TcEaZ3f5H6jVxCNQcxk65DzumZeLUhQc4nhxXqGme6Mej5remhFt4XES8cGVZPxoMbAvU759mrdaB5j",
  "key12": "33itA3ttM3SPFQWo9cmkCPAewQsNm67FJAbvV5z8i5GM7asgjs3FEvbvPAdFsVZmAuBUmDjLxZNkqEGg2LT11H9e",
  "key13": "3qhiCqYui5XJeBrWwX9UApvo3HMCkwdo6F1x5M9sgstBLj5czUTiKgn3co1xEG9iVouPwV2G5Pz7SJBDFL8hzcgu",
  "key14": "42aLSLdV13jEsPZcdp6jZbVZ22siJziCy97odLVLLMzmybWW2tL844BHsYP5kg3kUz6K7TnkfFV31mBXhxNgXksn",
  "key15": "2i8dFjVdqwQHpjEcXyVX3rgTc7Jqdxcpgo29ikVU3ptsHtAgtxHgEPfiGDZJULpz5wE2twSprK695EocyY6xmYdK",
  "key16": "2cVmjmdSuCJZLa8ZezmwApxBp8ZuE51CLWHg9gK8xKQbncF14uac36chy9Ai4pEaqivQqYdCmE2NCWfRtB6oSkRr",
  "key17": "55RH1Xx5d8As8nwJVcibKcMWSmiurEJ5sZa5GDkRpHEUgdpmcjvUpNzf7B9iuKKSUhgXVDKFrqbhvmwpr4V9oyGd",
  "key18": "2wAfydjFPJU6rXMpjYgVVJbnYueHcGjFYqiYBj6osJSeDKK8PR5pb2SABx44w1JdTKWB3c7PkbX8b6d11pNKTCpR",
  "key19": "5H1BvUVVC4Byj9iBiarEPg9ijUBJ6pdgaWqW9WsHHSeVJV2khmBjmo2hTqbPtqD4xdm1f1BmipwKKFi6qYHPmie2",
  "key20": "58J7MTjwwutRt8GvMSJTC4kLkKr28kXn9dQMoVaMhZdBdgRbjCFLWZ8BXbQAKYbvfCjALR3GQBsh1bi7TTJ8yQ8d",
  "key21": "51FQK273XmoXByhHYwbvnfeidHTZA5YXvjX4R49oTuaNnoxaCSCuZGLgGdYBZddggThW41y1teDEhHVAsN4BFAGF",
  "key22": "4mkN4kRzjYbBTtDqF4iLr2wsQ6C4WHheMC1LhZUc7oTEtJdzHdeiLYz7qbnEJYRBdWpNKAjoeVeiY8YUHyj7mLZt",
  "key23": "4VmW5wdLAEEBWbhHg1jLEMdXSkG4LPQS52qqHyALqte2Mc3k3f3TF2wTxfM8WQdcsKGHCyvjCQcWgBT4hGEDxkdy",
  "key24": "a6Dm3Zxai6DKzugQHv2E9vGu196uHYXnSjNx5BKCeCsRH2iz4unBB2W1vywVXsXgCP2AF6AFW7JqxcUVf7aTwGq",
  "key25": "B2wfE7FeehNGbAV9mqcbDYXpenWvc3KKUUoigdmrLdgKwobJp9EYRPgsVdzm3y7tu2YUBgDDo23eA1eQm3BRvVv",
  "key26": "2vtvUNR5HoU9GFNGarJSvphsxszbfS1Sojd4M5SmzwKniuW8tiZfLH4VksDZZ7f8Td8LC9bVy4EVCtdUq4pFfb6Z",
  "key27": "63XSfjMesWDr2QZ7ShXfg8jYpqN24QQPHnti4wZufq5SkjStPQkyrYkvjTfNSyntakAuEHQuvJ1KxWnpxLXzZ452",
  "key28": "3TrbQUf7oEMm2Ev2iSa3Xjkhyfp7d2EjhNKFitvXQ6DJrBN7bAgt8HQUZkkDMvesAHB9FXhVtATTFpRdq5nCoUwv",
  "key29": "5onVKmUZw2v2GVGsGFDxpugbCj9VpJD6WEp1Nstk1BrSnHFwbo2fQBKjBfjqJLVQi854FThJFzQzerQRL6sRViND",
  "key30": "sb8gB9ShKEjA2tKpgTf7QUnMCgtkzEVn4YxRP5bPK4UXLPJ3rbqe9cCvbmMwAw9PWSBkM3QfrfQG1L8ByaQcy2W",
  "key31": "4jSV8QfL6WLGhkdRaJv79x4ZhiEHtf4aCwR9KL2Ad7m1gnTohYAzE2sWxc3KFyZCH6swG3nt7DpKfGrvJkeFrM5M",
  "key32": "63eKZ81VY6u4Vy5qigky8TNDjnpQGU4wMcsKAMMPWkAq1bQBsu27Y3cgKUpdLY9cLPvc2fVWPF2r5kEiDsGTrkkB",
  "key33": "3aiC4TM119xcJp9vkNJdEr8eG7wqmsSuWpQo5EzknmL4wsDDt5EWes2ug2pZc2v9B7aqAkniG72UXjJrBKr1F6pr",
  "key34": "3JNrryZuAkS64FoueoiUyYcVTFraXQkfnuezKSLRXET8rMRUrX8ExiBeXAdiX9CyHQwyy3aRq8HKa8si1a4ocCb2",
  "key35": "qtxznQCrrTY2gXaoffQTUiHWzNhVyXtsXQCTEb9kUxxuJ4AN23qzLhw69UM8iqwAEaeJH8JYxXjDD4v7oH8ueJU",
  "key36": "3atMJZiDVn38XEQBUFN6jqNdpe2JRVXHC8sdy2t3EuAQmsk7yjv9sNyJyxXvQcK2DoyVBZr9csWZxAVHRQMKA1at",
  "key37": "5VXaywv3z48tfQYZUS6xZVC8TRvQCD7fUjbYjEYCHzJ2t8jyEjYvbLd8dYPpHZKq46zmWmVBU9bjEzbww8bAA1ER"
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
