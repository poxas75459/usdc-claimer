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
    "4nzDKXnyUNtNhsSxqskPBf3C5uWBHK7ur8LjUcvUxzHTGfZb2DioaVJSGayjnAu5WSniKeXykqCnWEXr3jBuEq5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbQdnR7QBDrWDmR7g9JWTbYLpbCraWAYke9KHFiMBfiZHAc9pfrvkvSJby4ARaMhsvt6xPFrJxXSytLDa5MKCMw",
  "key1": "4yoDdZFKHsHMCqiernXCyk5uZywCamdS9MvecEac4LETU8mdRVhZBMwwFuna1up2exEyvRcTSXLd8pQFqZFFakXZ",
  "key2": "556tWnTHFHTFRKxmDKn2P1uz9P1mgmBFfqzgtaVC2jTSqiCZXGcnrVYAse2u2UBmSBczKq9FPMU4Z64ei7AGQgQ6",
  "key3": "AyYvBYA3surRGfGkCjN4ksxjYoF7aH9uUQxDTXCx7ZdFteFZkqRD4uzoFGWuTzfkwKGdV11MVA9BtHkZkmi7mSX",
  "key4": "3wdnuuEdxFsH3rMdNnaEL7A5nyNXcbEvyL586nsTTUJLawAxG6fYPTBRjjezpmQ9KYC6TYdZmF2ETVB9uxtBgnuZ",
  "key5": "xxH1roQSjiSvHDi6yRftUxyAUPCXyvakFSApaHZBrGHmcf9rDdBY2y6EfJc8Z2AQw1xgaJw5LhPFRyR45Cpis56",
  "key6": "MjG2MQmX53NRXYXSdkCdZH7SfG4LcqYcC5HdNnCfLwHdmXo7bhFBk4exRJ7NubiJcK6exZ4Y4joTAuEV3qsUZv4",
  "key7": "3FgG5Cx6YSohpDmBg4X85WFcwFYDSwPsr3BX4TWSKenYs3rN56CmZYetthU8KhoGQaCWngwPcU43gxSegrfhSo9L",
  "key8": "23Y3uK7xUXzWpVhzQdeSoDtHZueACEeSEZwub3wV4EmeHmo75qVxo7Wtdu6mdXLaPrv8fPm7qT48HBRsugBwrnnG",
  "key9": "54Hnftc6G8WK5KBDY65JxeueKupyTbaoMQjdmU7cZEdqSnpHzWmxHxWpk66rUfxAeBH8zF3UdmMVf8LyWaQh4PZP",
  "key10": "3VGLNt33tyYEzQ4Ry8ib11seV13sYt4XqGdTREWrx57ZUveNppna7czUt3g7c4opqttTncRKRi5W9cqBUfefnPQd",
  "key11": "3jr6XaMFwBZ8TQVNigiziwSb2oSQnE49ZgtniK7DRc1eHoqjsdiJQFSkxzrnCo1ZNtgSUp3Au6p7vWpKQT9e9p5F",
  "key12": "4WeJ6W6jFBsDEpbZKGeW5DvPf4y4keDRonQKTA58nYuuvozc8ZKfSwKvidUmaB2UD7TCpxancb2T5Nskh9pHhoKd",
  "key13": "1HBciDZF2oJU6rcS981CQh6GbFxNDyshHA4iiUoFCWmWXDdZwmHvRmoo1GTmyoLoLustC2Sybv8UYftdeVXZmMK",
  "key14": "2sjcNvHHH1TRcicUS2JJpWsS9XtfhN9b1fWmUrENd7vm11pqeC4F6TiF6xzZiu8NqNG1mFkmQGoGRsujzhxg2yN8",
  "key15": "2SACZ7TCf6b8AENhh78vS7Y4AvQGJe4RauUS3f4rFs4uhZyv5nVHmbdFQuPQBWm5bYpNikbo5KEeRZ8oB35frA7e",
  "key16": "44ECi6thgtFnnz31mbaza8UfD4hAy1rjWwd9ByBcNUGuac4PFtRScRb5UBzmzzrp7cvazfcMGMpxcMvfQGRvEKrQ",
  "key17": "2QgANAnydSBgi6SM1RncCS2fXJeiEHx59GPAHB8ZAnYYpvumBpoKVbdMXQmhgj4cqPN9tPYz9JPuh6uPsne2NVkU",
  "key18": "4EQ1v71uMboU2yNr4ir2cpmbkYAk1Essk7FXcnzZx3FChSR48dmBL1ob9BAFtBVbAswSddQTSKqeoh2omQ8WxzU3",
  "key19": "4EQeFeCe788kLdL3Q8z6j6u1oMPmTbYFBwipyje3t1drWbeAmjdwCqBTg4K1n3Ww95sAyV6FQCdsUywvczgd1FZX",
  "key20": "3wgQyQtzHvDnm2HN4D6Lir8MEumz8L2KfThmTA41kHBybuxjBhNzpgyoGZE3w4m1hAZDjv57teyxh4WEkwCvgx1G",
  "key21": "3oaxYkCrVng8FMdvzye4Ls3GU8totQ4hBovmCowwkyaiYyf3zMdekopJAW18DZwuzh3Y1BBWBmxSu8oTHGy5rydr",
  "key22": "5fQK59zgdz63Zp1m9QHNjuGfAjfoDVB3NageWzqGDcoWsH5HY1yuh9FvPaHV97UwKjRduGbf6fRBHBxKRzJcY4RJ",
  "key23": "2i6b3wC3pDaShrPWswgTK5B6Wu1BCwXnhCXL7ByEhzmpVYQjpxt4FY1W98mMHtAGE7dnkYizkkRPtbTpLDXukG6u",
  "key24": "5sjkPF8n6qkpeiEzfnQZWAyecpJqm6kSTFtEJfqEMJPi2CMwe3YHAN81NdZoD7xLMWzzA3rgoH3xh2Fpev8dw8Yd",
  "key25": "33n9acj23puFnu4JWYxTNTruE5CeZKhqgjgf1oswQmvX6pc2SBFxNJhCzRHTcjs3KC7j5ZKkbz4BgmwehoasaQDa",
  "key26": "5uU9rTiodCALtnuAH28wwR4xEMfqRTSX75BfY4D9bZkavWLYJX6T3UrjeiT5RwqhrHfVF63SdHf6ebTFwNkRokek",
  "key27": "5zapr45xhEET4v9xYp1tBHhP3ys7bYrJ9jhquzhhDW9jJBJ6Uufq4x8vKMxH9QrCHenmv3L2vMmhXHYrDjFtPbCo",
  "key28": "DpDQvtfDtLuoFE4yrjB3mAcwvgxdg3etUzJwogsv1mTNhVvqWFwQZJZierNaVr4WqE1mkzJT17bBEFNphirpF8M",
  "key29": "9uL1qziSXcoWvxQDVptphEUg26SfqdK8Jn2QSk4y5z3iEQva6yM5FYrxX1dXyuvmLWZUKXAZuujgPNwC6Noy1NC",
  "key30": "2w5nwFQrFeWiXBaFAovoBWSdU1cQJRE9QyoeXJ5SoQZWCesLYeK2yaQ8jUPzPCQ6m6u3F9DdD3798BcZYQXZBDYf",
  "key31": "24MKLPqvXFzZfwUv1jytr1HzNEQmk9fHkwezdhNHsDvgWLwuKipMsHPDUtouKZ1Efn53Ptm13webeGSGcaE4B6FV",
  "key32": "5jnJLEZRNVPNfuC3QHQTymoTMqWEte5mzQqWapUE3VRFfUTocaRb4kS46sLNxW4oKjYXCjizywGp9nPzsxBe2yfz",
  "key33": "GpHLJnJ869b5w9cX36aLfmJBBssf5UV3JHT8wz5ReAQ6jS7pNdhmA4JW6BeScuudsMCAiTprug7RExM7mSH1xv8",
  "key34": "2ijFM4SjATW7RAjkW7dZaxSfriYK3bcA7o8JdBu8RuBmmezxXcsqtgqa1F83xZJSky8Xibnins1q9fmj12JhQrKg",
  "key35": "fwCqQ6gAbsSJd4WqsWofKaTLfgmms71V5XgPebKK3iiiVRGh8D4ScbQmqmyrHzw6zoukpu3euwcwTCWSPkFnd3a",
  "key36": "4t7T88wFy8MN4162XBvaGFtE5hphv7YYiUyDDTVbXFtDFfX1N6itdWhke1RvjB2kKcd2rWz8zqcAy28sKMBz7Vx8",
  "key37": "64SHNa1jBNGgtBGAc8perExU2TZd55qBJC1j3M3NDDZoTs43tSu8mkUXS1TXxcnMgz8bXZ5Sdxtvhao4naoE6kkB",
  "key38": "3rVf6TbfUuUCNfbWzDFoMNEMinEd2V6ytJwVh3cThX6DVt2vDkswP3TA7znbRHUPJpdmMYGVsQHDcrXUEhcrL2NQ",
  "key39": "ijf2mEj4Pv3ZcxguNuPCG8nHFhEn9XjSiDV45mLnk7UQRgpoftjrytLwuWsrGNSyWWtmCKn24ngF4jpACYyLbrq",
  "key40": "3fd5TyuhB1ckpytRQeiaDKpvsaUiXgU4VcTKSWqyrrEgf6vJVzKR9TebC7MZb2Y49hUaLGk5PPnipZZZSNjgtruM",
  "key41": "4SFNYZo7VmykndgWL5LmGN8YD5wJ3iEWzj5wWJsJGGEaCQSU9goHqmgy66EkSutoGTumnGPGtJzWGqpA5vTfWRpp",
  "key42": "5az289DStA5DY1mVHSd7ux5yeaFSf8P7qDfK112jjizv4B9i6izVNppLgouojz2bA1ruiGE8zgU6VDY97N71MfV3",
  "key43": "25w5P7XgnC1hRVnNjP2y8QwoZPfexDDxYLkm9GYMKGTT768FLACrgKeBSaG9YSnGC43ncEqhm1XeEiFwtzK3xDkp",
  "key44": "QiuRTSmSqnK4imS67bvDM3zVNkhudq4mkRJSHEFS2Zemde35fKWqPwnDruxeCYQ96KZdxP8h16ndptnTmfPP1v9",
  "key45": "R258sE9xZALrJ8r79M5TBNjT2LQocDi2AxoCha9a1cYGLFy9xsmXZZCLVbQrPWPjEPFq37P9iZoP8CPByDvG7D8",
  "key46": "BDHoo8jpCdEfMUmUhaJexq6tMspKdjpBF7jZA5uFCHsEeRFdx8hByK7N8zpe6hCTRFcvcCpEw3QRNWhMQuXwUra"
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
