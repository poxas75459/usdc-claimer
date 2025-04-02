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
    "2ftEdbCMT5Wgp2A1ec7X2ArRgfbj57wzSpRKDa7cy1JXEmEBu21QS1bpWCvTgCu3odBJJPyVc3e7zTCAq15bSFjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6Zhc6UWUDKzmCnrsyrwJNGoExfKk38obVePfEArx5ZCqTTLYV2XdYTcBGzH7QUosMmhLjYFcToKG1FEgsnZxum",
  "key1": "3SjLtHQ8tXoGdq96hmRXiuxAzEsexPY5nTDdDqzays9nB3H43zHaP9KypfkYaqwHnB5MYWLJgjisjL85MKTsqgmm",
  "key2": "5w637yFwjvNBFnW8wBrEiXmEDgfJs3YYo29wQi9Bv5N6zVp9dwaerZucCSyS2peRUu1VHBQNUeZXMyZ9M5tESbzi",
  "key3": "2srXt67bdcto3N15atE3oikLsgx1EjNS2tJDeSZyaYrQdCjeRKDXdqKso4TJAo7rwErkaG5eWjzk9Xa8NhXkPew",
  "key4": "5xamduAN3fWCjnHHgAWoaqUn4oQwrMwrDsikR25mnmYjRmL1yyXBcoPiRBTY56Nxayefo2y9kBB6hdx8ha2DA7r2",
  "key5": "3trgUg34W6qZhF59bLKmxvvVxUssSAoJPNFmPnWUzb8T65xcDu9Pgp2x2g3ebYYLRTmYWU7W8c3gT8BieVXStcMf",
  "key6": "43xvMMFoK7w1DgwbpwM41UyUr3GQVtm1JQuzkUgBVwfMf8hzAYo9hXmSgwE7FqShxe2Qem8tAYNAVrQigzooso1k",
  "key7": "4BPy6heBzus4AdS67jV4hB2iRsps2y2u3mr4hkd5WqLHpNmCGCuP6eq7HXXFamaKgML2ZUSxhodLnR5nS5GFZPG",
  "key8": "KzikGPd25AuhAbFEpxGShF6kaL3EdvjS7QDZgGBBXb6g4qit3LF7Ps2yca4bMMY3SQJcnWwfJDaLkUDmN2CMx7Q",
  "key9": "r7HEssbqmXWneq96NGLF6BugWUAXWvW5fbvnf5fHoF25r1G9UaMNzaNpE6HceZm4xjwB8j1WQPb9st3Jc2gsj9P",
  "key10": "3v15MmGr99EqbGscspy1mW3Xo8eKA23UnswTFdZgPxXnD4mHw12ZFzbbyzbEA4bdfJhaA9NJZT2oDfGiRjMp6Y6K",
  "key11": "FcxtNRb9Vp6bGMSW4kyB7mHjbkBQZx93sFbAGGvdCuNr78MTbFChd9X5sx6RStT7xGCM74GK5eUnk5pAPWukz1s",
  "key12": "3VnPu9Ls7EdgZAg3csEWgedxTkT3dAHBivcgLWuRPxbxBziaekdaLe2BugTuF86GadQjLnkddJBAYPC2EnxJrP19",
  "key13": "8rGaebKhbZ6QwuPbETcKtH8ShjFaEF6sWcPRikNP9AmEdF3MydD9EfqS99p4Y1ckdPz3819dq7UMK4Uuhs76PYn",
  "key14": "4D3J7gJ3prDghRrHQz9gFdgbpX2AVN2Ax7wvwCj7D15DroPZa4mfJcTn8b8ozt6vmBkkiVDYNFGsausRkiW3emYY",
  "key15": "Xy1tYTmxJHCFeQJoFCX8dduWQpVJFWoy5vovHzgt8JSAmMi3321dsoiJk5ZPRvSUofuqMs43mo8MH86icDpZDfh",
  "key16": "3eNEBpBNhDWy4QUogkXCn5rmBjUibRiaFKBtEBC6jr5ihUNcxKcmDysKrFPJV8zXTESeUdtFc9Qi9uCXiW8fZLZQ",
  "key17": "4UwbDJ3DrMztQpQFTRWfpxChpKPSW2mq2kQoHHAZ3kMbRaQ6eXyrjRRtiQ5zf2nbmWzdaVavM99S7uUqnBoG3XQB",
  "key18": "3uGRCSCuhU2uA49WREdG2jamwxZzzkyNYyrDcKGFYix1TLD8JpcQwuwQikThvcb4SGizNw5ZJkxLtfuK5UPgMwZk",
  "key19": "2orvjhRXYZXQfb1Lm5aTyV3RSTLijENdTr3P3tNmC9kc5cirCvLJzswSF3d3msCq4BiiXi7HgcZs7u9eyM3r7yAS",
  "key20": "2v2wESwx2TzcpyUxaGRswP8a6ohn17Q9Jp6fPk2AqnEvBAnajzTqgoVLxQfgjpXfS69LsVgQZbAr8HWwE9wDjYm9",
  "key21": "24tHftUTjwP7recaujv3Z48P2dqvQvWyMuRtNaVDZHcYzVzSp8S2fcnX92vVLoxSmcmuWTGcLExnm6vxYMyEgGrK",
  "key22": "31sQzkF1DXFrfNKJ6M9jKD7iURFiR1jSHHB5dYNgfPXyssvB1LTEfYVHyj57xfsRsX5Z96wgD8bKfbwZ7xQKAhWQ",
  "key23": "2nsf7FkV1sxbjsfzjhf4nuhUhRk3he8ucfqJtyrYmebSkPxF8v5nJi5BV4eFBQ3SnRDf1ACWDqAr5r2xh2D4Rhj6",
  "key24": "5u8jyFfAzFV7yS3tb7YATNmWcH9Y387Bn9Vz7yttP6RnoiUEG3hmYaTfdaQJmZNS7yZ7PqyoxekM5pHxMCWqi8Qp",
  "key25": "omqwPUqGJgKZ6vuz1iaEryn7xausDrt2G2dLmTdSn5WK4jap56CJDrWEczdyn6M3XyPxuF2pgt2HrnyuWHT6ya2",
  "key26": "2B6UcM11NevErPG7boyxZchDYtgEcg8JEQMokMVDHDrqeYDbQpMe9acfjEm82JGUez9WKbqq8nb4EqJ2ynQvpwtY",
  "key27": "3LL93TWEyCVbmihngPohAbFWeKAvFg6U7B4kFRpe4BpXtqR2oRoRPrRrD8BH4iATN1NqoBc1gmBbxGSNLnNe61bz",
  "key28": "4gMBDwLGJwurrDKdNqbgaaEapKG2nay9pj8B6yam63ZSp4VfkMzfAbkbLUHk3vNmfEKhc96kqRK5iumFJKavLEeL",
  "key29": "27fvuyozuFzQtaDHSjnFZgaVobx363JseEmVZtw4nFCXJhJ7ZkBHrxE7o4QyBuQohqBubQgLkbi47qnaoc42tf8R",
  "key30": "37CfbEFCro8dzdKtF5kg5Fj2P98eHZPYg7KteE1yHQbuuatkttBDmHS33igAondC4vSYdhGeXJtUgySsaR6KbGWx",
  "key31": "2iJLQMQ9MpgAf5CGYuEGfsrxjSGrpzKwkDXfYLfj4RVAfH1xzJN49huYFoZeZfhC1nosNt1BCzXan9zWvybyp8FR",
  "key32": "42hEJAM75XBEnpDBsY3f212tayczE4uVAxfW7gi13UyNRXsofGi6UJvAM4jdQVfyAoN3ZDaa6BxbzeRw8e9wu2SB",
  "key33": "3mQNaSdkTyfpFTcn2yXszYrfonPiZro91XceQc2N4sAoUj6W6dmiEcNqpx4GnzFxoUq2SYEWjQGFVWP74Sa9gekx",
  "key34": "41PNvXGHryt71D8hPYPyF8c8BSrHhXENXxDdDeF4CCrAjLyz139Zg5j8neeWTywF3jFKYNpTubkTZeUacbbjG9xz",
  "key35": "EZ9Ud4p9EGNtTrKkDudPiGDUbnRJ2zGhefDPi4K5egUrmYUevDhWFL5Fp54mZUbarVxiGjuDZbNtsjRNLA4gWAP",
  "key36": "cMVNSJ1Rf17uCxHwfEMY6DAr9zYaqTgufRG7iQ9Cgu56cuUiEM81dh3myQuxmySHHrRBwt91D4DYeYUvretQY3S",
  "key37": "5Mg6wkTh2iX13UUBcSJJW8knFv9C9ZNgVjC1rXfPA2Hr7CamWfq5FAT21sBFRiU1STX4GCGWs3N8QuJe7WRVVidV",
  "key38": "4MPa7ywCFmm7L5qJFFNjTufKF3qj6UW63oaaoykDTnKjLcpdCyqbVK5f5Ct6uvPHvqzsw6YEHFUWBeCrGsqS9tC9",
  "key39": "59HpF4WnLaFuDafF7eH76WSmpnEV3z9q8DWpmjfDmTxnX3jzSUWgEexXVEgrx75H7fTzzao9CMWiHTZfsRqGfevJ",
  "key40": "cMix3e44VGbvgdemz9CUnYfKmxZeHtv3Fzx6DUcXjUTyd8BuYvaVctcmhAptnBuCs818mSjBVth2BP2Ur1CvFkw",
  "key41": "57LSSthL6GEQ5KHwEMStpQZtS887Ron3S8V1Xeh7Qp3oBzYaYkaGB2iKxoaAEHt7qKya5JbBk3CXHwYeNzTMAWcb",
  "key42": "5QyAQST8YG4wL8ku5A8sM1zzMix7t76SKKWeuSx6tiYfPpgAMHw4uNxabQLp75NEDcWmGidTPSfqaDzqoH4GxC5r",
  "key43": "2y2VDV9PTkan7XHkLCtMuxMK76grnR77efWuEjfVkEuzSwuXvDezXPECPUbVw53tcNi3taoFgHVkTVBd3ARpWhqs",
  "key44": "WbnSbQTptMFNjjbPeSZH8y5S7rvFqMmG3xj7cQuehRGRYaZTymi2Z7GsV2o2i2MwLtMLdZjvnsS3Ke2B2ETS12M",
  "key45": "QCTRsPCzdcuxug1soRnpUqk9MrjgRKSofCtEJgFso5CfRUsJPKj2SprTjFSv577FGEKyB6y9s26GFdTbx6iMYFY"
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
