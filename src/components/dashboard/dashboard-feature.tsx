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
    "eMaqT64EfnjPRXpupMDNiVg3ZTh6qgE6duzRCmsFt4wAVzKCnNhBhguDG1ovoMH8XEwgnVeZstMFRbSKEEd6VVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q1cSvTSAZKn635LrBZ1UUT61zQS1yo9Q9i9RgG4dDzG6FAeFKjSbaufUenkprRRtwjLYEGsf2nP26XnV7HV7Xis",
  "key1": "2GMdmTeRJahRvLZoTKR7uk9vGSLeUBZSEuxK4RwfUjhZAbhVnH4wMrfztcqvYHeDj8uRiXVh3fb7UnshPaPyPuhb",
  "key2": "3zy7mXvnDuvZ2S8ZZAcRS2qFSXzLiB3wdzQ2SqGhtwKjHbQarn39ZKmXKcW3pTFSumL5CzP88a1EGfU1AYhkGFSZ",
  "key3": "4rFtrLr8Re73hmqtLAWxPx17bjgGbjbd1dEHZbZLtgsiEqCYoxQLwGgFsdXzQXGt6tdodpf3RsoYgLYLGoqhFZCs",
  "key4": "5PEv3KqiMG8DpVpN3PuPCH7KNNXD3KDQvnXUVsNUCksRVCHir7wP4e7gS87fF1rNQrMBSNYqvByDhf3pw9i9TpY1",
  "key5": "RnSiQxe7wiM4w2g35YgNUzEoaJpnYYrQGdbSrQkMaPi8WEjrrKFgygWxARxVTak3hwL1iRTpYLKa75TQw6RVEiJ",
  "key6": "122WGyN9TBMxX4XXdjVV9ecMFLSfahD3ECEYcucHga25We6HjCHfE17pFEJex8SXi9aqU8giFBFoT5SJ4Juoy8y1",
  "key7": "4qdEvVCQn6sWPCiwZUkj4EjiG6jpjsDEfSVjqc5HTMKNW3gvjLJS56sH4uhxoPrHD2vsqn5N8QcvNadh4SmHcZGw",
  "key8": "3itYLT1QWwKThNEVonFrLc33LK8FVFC71Cz9L1Ryqy3Y2x5uNakKCTJFsBW8Lvk5Ud3iYbUpMkoCPsJKJFskxr1W",
  "key9": "zGijpEm9jbvykB58mMKzBqAPjKt8G4wsat2cTtfUJPBviVktsouiBf43aZZCvattTNojAEGegGBS6icCKFJddd2",
  "key10": "3DytudLoVzKoaBcXwWn8MW5uPp4ddF2ACp3pfUvrZzcNCxPqgcipC9DC7cNXyboJGDHJveemN6xGbknEBj7gFN3g",
  "key11": "42xh9NRCvM8f6inNHb2GZvSm9jfeXiKiW3VCBuNifYXeSHxCjZQahwV3QQRq8GVheCQw2HCCYcTHcesnaHd5tvMn",
  "key12": "5YcRXFKmZLxCNn5p9qByCozuQQDjMu5M5axSb8Fq7Xa3p3h1Nz63Ragugmfii11y7NpbVa5XoBgmn9mKfwaGutG9",
  "key13": "5EJi59hzibrim6A6DLKyMZiSjSUCCxfYX2fJFQUBJbsYYbPycmaKwJ5D2yVRz3hMHuSsRgA58jAGHTeZ1wPkFbsL",
  "key14": "Q9KYAnvKrotUn2TWSC1aAZTFV3jeinxtqQ4PHCZiG5nGnrzfCd9qM7ubw4xJ1SyPxGxNZ1sM6zrLYAqN5yMYLyd",
  "key15": "Cm3CRrEwcxzgv8fb69Vsby7iZsShG9VrFF9pM4yHYDjWpSMJAFoET4tZ649DCXhh1Ykht7LrEnmEJatXQmtcbpC",
  "key16": "o7iSVos34kHTowGUWRjQCQbLDJ5t2GsiyV133rmhuyGRnUkf4hTKTgzzK8zqb4ssNYzzcLWLMBHb2wHjoq3YuLD",
  "key17": "3do9ucxKochsrugQ1WzDsTVkMU7qrkQEdEextJR6aUBuBK36aQjZfNG9ydvKZUgNjW6zv1zhNNb1UpKEu78DYGb7",
  "key18": "2zsjF9G2NErcVkGm3HPNAcEX6PGpRgzsNiH8gyov3C7o1ER73vvhEWXn3AC95nnqPP7B8hn9ZQxkr1srRkEp3eqj",
  "key19": "4LmE8HLdCAKUS8HXuAV6gLCaVPB6nYEJXQsAep9Xj7pLrriUEyNqYWkuLUwGYFQbKqdb1e3QTDTnQSRacnmag41o",
  "key20": "63B86dVL6qhhw1fkVEEuxgG6ZTRyramje6ziinkJdjSmSVv5rTh9XE2vN2aFbiCVhuF4UCnRZ3Q1FDZx7eVxPbJL",
  "key21": "iXTZmvZB8fuK8fG4kN7U4hTkjVitDCXYTEP2SXGZnQ3WLXHHaJaHPsNGbSU8LdkykWH1w3spfCrAhjgbxc9Z3fo",
  "key22": "2KoviFDon2G9BxEK49bXU2zgL68ZakwJ3LH7QXJuWTUVv819oRD9Z7TXEYWkD1DRvYREusd22yTaJ6eg1mZwc6QC",
  "key23": "3DDsGFi5mygMjKZLQurCzLfYZSqJ1t7ahg4Xr2sYfWsJjqSPGJuRWYKPn7s6e3VuQXEmX2bu2ZMa9thHJJcwzrQY",
  "key24": "3H3vo6nd2mPVGjyQCWi9qKh6SQmLg6fid1HKXEkyS2Po9WV269Z8o4Duy2LWheUamEWJoit7UMgJn2deVbAr2Jsk",
  "key25": "2fhRheTQAkqSG5LYo2UcTWKJfoSLwMFDM5mRhHaScxFoyEEvPeCoTEHwM3Y6SDAcVLEzKbqiYixNpmYnzYiY7Gyd",
  "key26": "2Mvt37kTnVH2TEumZhsVLSHABj7HUPyfZ6etLBUs216PxhH6t8Xr4pheTHuMcHH483Fc6c6JNRDqUsHQLGj12x3D",
  "key27": "4Bi7SC9yvYLiCnDshPNJN9CmRtvCkk6TLwaAEs4JiMboj66iEjtPSf7rNKcAUfA1eYRQrXDjV9k4wzSxtwGcFjhD",
  "key28": "5iYLJzyy8tCZgNmRmfyKwedqwFAw7Wz3fHPfx5GfKvGeM2TrLZkc2T3CZ9StWAPQeFNheRTurGWV2UBGGyqgBMDd",
  "key29": "e2ZKqAXSEbdDtwMScVKygnJ8AbqedavCjcFbSJo759JRt2Ly2f4oSUsmpjNUTmk8fqqPYJCw5ANFFXcWDJRfVja",
  "key30": "2ShYrQzNra68sHsL7EA9sTwuHkDWtdvnzrSXeZf9PsBdSbQ9TLBWGLBAd5RfFoCsiRvdUg8hSU6dDm7M5ANuHJCt",
  "key31": "2FfHZqN2wJ8UZEbt2rY4Eky6YAJMLic5PSsHi37JWV2sG3Qy8E92JKnk4ik8xaWC3vQjpH4yM8eLpYsWCp3UJamx",
  "key32": "3XkTSqMQaCw2q14VipPuPCwa3CZV6wmT5ntWKewVpZBvHstgt8f9FAAZXQWx3D1BeQSEFAitdSLLq6ivvknPwnVH",
  "key33": "5mGEJU5UPBaY8L7RomyJvMfNFD9skem2kk8FcFb9Z67rgJeooL6FSyS6mffMWjXoZozi1XNWejWBZs1EQJeC2kb5",
  "key34": "2U5XjeT1CJPBuhNvG76b2Htbo1dAQS8o2YzCPDWeEHnzYjAK9jPgjnzwi7GXggk4wwEBBxkmopkwYRH3wR8xZME7",
  "key35": "4UgjPSn37cLQbWFgKiKVPY3fnpcxLtcnUjGdnYnpUeDwaU6KDkPLPPEBAQoSYHWJJYcEX8TTr39Y6xxnCAQtG9Do",
  "key36": "29FM45aCoxew1cuD41VJYzHidwa2qbHnacbJ9g3y2cVnZEbgF1DANCTG5wP1Yfh9tWGkFvNWXLEXP3UaSFBpQmwN",
  "key37": "2SJUr8qE2txwTUnTSHJRGsDLcNdQx4NtnJBLo6LzZHLLAoeCvNmdgwMzAPWDCFR8RHTv3khG994nE94mfNErdwQy",
  "key38": "5pVgKXA2pMWhActEraqw9rJpK7vgS1qd2LKYBJKmv15aVNfW9PqkUmpB6p1A5VBVgjKoJxiiso3z4bj5P691PrZq",
  "key39": "3eRQc9ouQ3aaqGSuHSmRGBaFzkGhaqvCRWcPGHSP1Rc7veWnAu9f63KDC9p43xzy4MxWjNTt5rs9LHcyBdw9bDf6",
  "key40": "4opCxP3hp6yeVEyPSjKhcx9yQxteAEyssvmEj61DsK1CnWPxNYP1SEznuLvR8QjBCid3mX3H9j6eCbnXs7ZRPvxY",
  "key41": "sboiHj8qqNL3xyZ1QUYh2UxWkF7JtjdDpUtt7G84zU1N4fsV8MjF1XAHhCwf5i9MMsv79TdTwv8GEzPfMQJsaD3",
  "key42": "2dQexUJNeMREbJ1i7wo5qYhAXqrLp7cJimRqZT3j54Djd6j3KxP4nFw7uTu4ewMnF2s426sr75zcFhjLxALjpkkS",
  "key43": "xV52J9JLMY15kBFD1HcadvXMqsfrAaJq8XkUTjcrHtu1YM7R767skZV6LipxQRA5BUjs5bSFDT2eMxhazRNTzKe",
  "key44": "3D4FHYMACjB8WgbP5r552q4e1ao2FVuH6YiNFstTMVWtBhMroiymsQp7dU1Txd41FbJ3e6WvYc9FqaZjmsWkqRto",
  "key45": "64BiQeAE4SZZq2fgesyKq9z7a9XKSuYicujchpbuv3RNg1SCRNABLScYPMYgmU3yAPVkh5Qk1tGV2ApT9KksEnoT",
  "key46": "47iTGbvx6o3Rgc4yDZemUqyXcxhnyCWBTcUnb6JaRDNnJFeae5zQWzGuAsXNEpEecuGCF4GubQPLtez8Wirfmsbq",
  "key47": "4TiAvEfSZo3mDDjVPpyRCme1bkBUieyNpmCBQ8N637sqe9NdQnfXfXJVSqmF64KiA5GVxx2pLEF9vR3bvftxQ3z1"
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
