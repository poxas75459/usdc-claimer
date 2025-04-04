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
    "5MAWapRqwiNP7yNLE75BMHYMfTvy4EVtbGRyUXRKwF9ZHk71MR9egYi1r6hHzKHbZ36r6oP3eeXtktGpXSbj1Vfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHjDDxAJUG7BrN1zT9QsH3pnnkirffaKz2eEj3ztoz7Uu8C8W7TV21baGgbL6S9uH8qpZHUwJjm1YT7c6j8hFrC",
  "key1": "3xNmGw48CZDNCwpFXvnMFDjzXJEzakUod2yFZi3X2JkrSDphEFnz3g5YXVXafNa8rZ3wyR75TMExfqre9tmXDP2a",
  "key2": "4TkmJN9TCmu6uzSktiHtABYjRC9T6bgchZo4DAftkdZqLygHwkR7PUEY4gJaw2TusgSFpY8hXASgFPiQ5MVzjwsh",
  "key3": "3Fmw8pPviHobbnPcA9GQn8QsYWU4XiGm4wfoGyhdBaQCgtbVKvPKXyRjAhuaYxMndTRUiu2hV1BDqduS6NE3nkhX",
  "key4": "2awjiYpaMy8jn6rVvZEQzRpwBgxgPEjxCf1udYwYkVDQU4hNYj4mXtFCZQNA22LLzvJnBNVxasqJcFUhjFXca84T",
  "key5": "2A7yz44Y5Vq388zeJ4pBJFMqEgcutt1UKZWA8K8mdXeGzAS6NjsaSdngmB5NvZqHQCuweWMBKvAYcKtJY6rCnbL9",
  "key6": "53sTh31MDXfBM3vaopzyy7CF2qDw89ZQVdjCmr2qn7osB4CLzB8wfZUYnnGwmZXNh6jHM4E6YDGPnBfz9XPatkAV",
  "key7": "2ncJuM7rzUXHC2ZGMn9QR7yaZkX4rk3NpUxaUyBRYX1QncSyezYhSx7ndQBasPfAJEv5bnHuiMgNrQ9BBGPEnGKr",
  "key8": "2E7ofr1nakNkxp6DJaDTGjVg6d8QigbBKegy2uZPRVpeEhibCoZMZrzxMwGzcfT2DS6PtvFY39kmecujCciU8nHn",
  "key9": "dw2jQnzH2V1zjvZF1r4WYWiMUVi1tmxAp7VoYgF6PwMoj95EsSWuBnezCnLywY9LmiT7C3hyH5edTeaT1ebcJ8J",
  "key10": "39YBVjN1EaSBXuyXK93ecaY1kUdHancscbUScikfzms9TTLdtEkHXxzZQTTo7B7Xsx6wHoUp5cK5WkABCTPzjCk7",
  "key11": "57T8EQvrg9JBFNT41WUHbJ9Q3cdcXCf6u8Hj9aXkz5fLD5C7P4E8aFu5snxMBmuWshxjwCnuET2LYMoB5gVGqrtG",
  "key12": "UQ4LQ61P9LCgqQieRHCT1qJ4EuXQ8hUZDPFMYpMpvkpriYstZg7jU5fWqeoWTV9WBcq8cWKkgp4g7DYXCwL398i",
  "key13": "5kmWJaYVrqsmtX8mBxma6SksHQcXrsLutnPVuChEgP6bwNFa3rZfos8VppTabtT3JvbCqmLi4bU2scB2CyyrMdnr",
  "key14": "5pXLbUbqM2ShZS8U9sYgwaaay7aH2CgqbX7eW7jXBLnM3yv9VWqWqzKyYCvNhTiQxZnbEey8QkhcwSKrmXZz6HcX",
  "key15": "665guvwVpbCX7NHKAQ9ZTdnXCuNDQgSHED37BgjwRcLfeTVDWbShU1spLaDHZsCAq8yyHKkudQVEGPRK6cfVNi3h",
  "key16": "3L3THtc7ZiipALZ7RtRrr2H4sp2UQnacGnmffURiG8kgnn3M7kZKbuDW1saaDDLJi7xULFsM1xofKZo4esz8yri9",
  "key17": "4hfRVELReAQ9Z1c3ePjdqHCxh8bDVjPb777WzGk4iksVS4G4rhbykrPA1VreTVPj7DNNm9oZRFBxpTZCuuF3PZDN",
  "key18": "Xnx9exVsFkSyypYdZA59eCxgBSMo8RSkzjiGbr9edzqn5axh2KVd2tpSK9ky1g1FPsPQY4mdSsLiwFqgjdnbqEU",
  "key19": "3JTaE326wiCnzrksvU5pG1aJKcu8TKGcNmihqkCEiem7Z8DwUPkHsNJBpMHGGjJMjtPAZY3CbjqyEeymdHirrShX",
  "key20": "23cfHdiPeWtHjrQSvYKKP474xNSaNBP2HtyMUFkaAw2JREYfmFA4ZHAfj7Zefw7jqKod5dyWUKM1Yw1ko4qa55y7",
  "key21": "4ZoD8kJ4dY7K5UXfRSLW8GMuCpWygY3Byvbkior28ZVFN2TQdJSc1yd6Md4beaa9nxPAqHwwzx37yKf9AKsCu2Td",
  "key22": "4xg5jb6w9kgKuSmsovoh8d71nwpSw4ZZ12UWpVQie1YEvf2yYk78Sp1kkA5n26sUcEr1dQQpnUzAg5cdv1FZ7eNB",
  "key23": "4cfsHxZYYBYVuuYo45YXLWEyr4uNSP3fdq89Zq7mEcW48v6m4FpEEyQnUd3H3oFSPMZEMan9fN7MQzvGssENvzjH",
  "key24": "MVDyUdkA3CpUKSDehJ1vhJX71QLpyKT6kZLkDi7JMbyVBiFU2u3ZJ9ZKVuUbAn38vCyPb14dsrPSekYhLTBeQP6",
  "key25": "5912TBTxSNd3wnB5UDq6Na876XF9z9VXqS9XNVKGyCpfPaVLFY9kuc8DSPkb9xvtBRHxWUm3oS914Ebjq3SC3Vmy",
  "key26": "3tx6JuTus7qXTwPf4Mp33w3gW4wXg1iTYKFRbGKQpmYzVJcbea6NNL71ToDpT5YKTP8oT1abVbAzJkFaBUGTtX36",
  "key27": "3g2spQcNaG73KvxpAreu4FceL3YCLbqRWwft2qgEE72DNAd9BvRQy5ppUXMZGVWrPGjAJxxaZ2jozfiquJNWKbFv",
  "key28": "2XjvjCo9E9xwfhKRBiLDD5bMPKEZdhaCAcWPExHc2RtfNngmgzw5pyStRda1ybZUnDkG2suU8Gupy4cqmTfpaP8S",
  "key29": "5LNKCCRdNvH4JiYfcAvdAX6vQgrABiD4rEy5BGzz3Dfp7qSpnBo8kBW7T65FoJd4Xh166x4SV3qNWNBojFdBSxgo",
  "key30": "5Mqw9NAVrd6dqhrsW8efF6YJHgE5LtFDe2SekWYqaBgDxkEsmbt8NE56sN9J8FuNTygvNZGky9KgteFVa6daqhjd",
  "key31": "5kGKrQ9kywNZ1TUmhAoorqv585L1itLRrTfqR5UMR8RUe3zjCrLSwqCwcCv5qrDR5Sad5iHVs4j8JPhgnxLfxBvs",
  "key32": "3r77g4BKfiKc3xpvwNcPnGQ9bj3Ed5SmZwnUq7pGLRjFU8WeCfiKaAnc1rDgz5PPBzMzoSHeKmp2u6WKc2Su2H4j",
  "key33": "ogsvJkx3FUtkAtm4FeuGdcUapPZzhmceVpz9XqBf3CBkEWJerChZzWtDje7FAVMbXbfYNBjDpJu92Pjwz5rStSY",
  "key34": "2GNX3yQRRjBd1wJqV12Jrvjf2E1vdtTJupCym8dkiuZuP9QNn3YUP4r2uFcztNZ27iAZJdif5GqBdZrsZsTZXw7a",
  "key35": "3egWLxVGTJtgkLugoC6twtLvexbrF9CBQ7qdZSHTqVe6wENYmuwAWb3LW63eWnFbTAEB313pp3N9zPj416n6iDZ8",
  "key36": "3oQ9z1PWwPeNXudqEFVQTBmVcnKxL1XFNUvpnt5A5bAM6A3R8phvaMdS6aPL64NMx8tFmnWL7AK8sWzfutnqNM1e",
  "key37": "Y3kMdYTp2Mfzh3Upg4DQaH53QnaVeYsGfCJGKxkuVwZezip9fURUGBVnrFe1qpHY2DVaxu9mtWPGsFnRYK232cQ",
  "key38": "2iAmBB5B5dVfNrLD2TP8bMdPMywsjmhYF5bhjRmVRK4ZrF7b3xa5U6xyGcdp98uUouhgPTp5Gpb2joYkruaqXaV6",
  "key39": "3GzRkkmHKUcFpuJPyENTu6mqe93pHPmuwrp8Rm2K2iYQHjMTxh8ccQGVD3Xm6iogpJScewPSz5PxSLQMm4esD3QT",
  "key40": "bFwHCXCaUyr9duC7hTNstBo6FaaruqJjhd7mbUksYQBr6JTkJSZt3zfiUPqtKrAxASdLYkZCPdThcx1sxSQquMf",
  "key41": "5ayugFMbKQsxrTnsHHhB8mpVY7W9etrqfeQ65dwMxpXT3z4QXx5xxbBGiSdCh4v6h9miKhamGm6p9ND7hQbMz81T",
  "key42": "5QPzCqQNtz99tHJCqJsW1vft82YydkoC9JxYofucPUrfKUWx7P41mAT9A6vPc82xXRTdLLYq379ak7hbXNKsRu7f",
  "key43": "5qkfBAz17LPeqjFHVDHtZ5pxNG6z1KWupU1gTQJrP1XqzzSfCLdx2dSWtnovrrtijLeBKcNj2iXR7Y3pZpXvfMvt"
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
