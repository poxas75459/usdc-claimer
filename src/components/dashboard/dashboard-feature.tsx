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
    "WcaTxwErSZh9xyzWduprwWk6W7WWok5onYRMNQ7HrjKH6Rnirw2UcZaoynqAVextK7udKB9UQcTdDDgkjbCnfZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fKKhu5inqDV6ufwWDY4wD83QBk98Ar1oNkuyXobfpj968MpMAoQttFiFVWCbPUtf183fWcotpsKMaHMnqZf5nzD",
  "key1": "38XS3tD6KcQ3UBMMQkZwsfG1aSmHvnReKc3Wvhx4bMMLRVeTQgGdv34AvUzQXok62xQaWcyKA4QjREewTyukcnPE",
  "key2": "5asqrJareKNn1E8u5gX5QkXPgzBQn8XLgJ3Khxq6MRgqQBJkTSs6uqRvnat5HDkfoyDwzwyU7gULLvTz1859D4fy",
  "key3": "2X5nemaPNMSWLTAefqQqVfmyrcd6ovbkaDafkYXaCKsKYjq76dtXhkU61CGkfLF2bsYD2zp18juz54k5HX6PdW8e",
  "key4": "4xXjcyeu7wdXe1KjaXkuBLG63fHSKeUQGbW4ea4eTbrxh5sEEmUDhR1YMCy5YCnUcuZ7YSqXZ2F41EAkq4zrRzFv",
  "key5": "58MGGZHwuk7AsZ9QX9ZsJiZLau5dQbeLsPoHZdkgJ6TRkwZq7oaQYaeRjxhXSwi9G7xg8VZQ3FwaVUp58FYzDb2v",
  "key6": "5J125wjETvEPEh6gtuw7MFaCm6QFu1xwb8r6EvUgLudbdmuyHvwpWNnvWZFUTvBimBKGpFesdK2ivndtiZUaE64b",
  "key7": "3n2iutgApojA6jLFKptphL9saCMkZfhAJJURqP2vG3f1tSAf2mBzq8ZDxyi7sXUb8Wt6SHJc49yFMfeMmuEBSnGH",
  "key8": "4QBCgHrRKMoEYA9NTWQXRWu5YKbiqCQZDr4rX4AfWuaTCEreCBpzNBfG7w7PPeVN4GR9RvjppBdGZvoWn2x7Z1ko",
  "key9": "67RSLztC2aQikbczY61Vnb2ks7qJ7ein37oZ9swhQ9zUhqJzwVVAs7KaVLBzmrJn6psq51V8zx6R9bGVuYdKGsEb",
  "key10": "33sfMzwtiASxos7Mm3xfRt5pGWqRZX3f8Km6NDUoZXKE977wxvS1AncpGAJYsxPbsqhF7qP5YmNy9urdQHQyAzWM",
  "key11": "45BTPDTJanArgxrdiGEHtGWCVUdP3EHgTuYtyiawhoyFm8CxTrGFoMAfeo6jRYntWNsXY1iGw7x5NcrXHr4A2LfR",
  "key12": "4Bi7mTN1b7zKXsdEDHD849MH9wPHELETkKYYACx4UY4oFsNfAq8HVpKofuk9KDazjhZR4mbfzpoN8fAP65L3zSYJ",
  "key13": "59MAWkgn2eqgfkuRtLFW1s8SREJco8KjTSmb1yHGjZ3LJCx9FBUaX4PytQwMkkFrm2XMUQpe1EF795ExkDBLnGz8",
  "key14": "4KUyvzQShFt73X46yCuJGFKQZuC9FqhMMxCUFmMZvxL9bp8MA2CfRAbjWUwWE8UxtRG8TtkmGtqNHxShkdY3P5KY",
  "key15": "2r1baaedk1cLsG1VfuiRAmYxhEozXPTzYR1C5ds9MjrtWdJmpE3tHTER5PXUJC1PXyTGaBkEcfpZLi8w3VpWhg15",
  "key16": "cTpgBtQR2jCnwgdxu4XTW8wgUqft2YWHrbyUKgiP4K4HTAgpobqkSMV3HebREnUEeKVs67iU71VmrmHheo7XKEx",
  "key17": "4aYKPBLtdS14yPJJccus2VoiqRDSE48PdXyCeiHb4eFQKM43NLdk5yKugN55HPsseLDCqVRwf5tsHhNWLeXVyae6",
  "key18": "3EF6MHpsEjbF4m6Ggv3tx8oSFxWyfKB9TZkpYkaz8w4CvLhfT73rJJawFSXNo6tA16uMitupFeE3FaFikYqdq3of",
  "key19": "3ntLVR1xhZ897dcteB3vAf7QS4ZZAyhfy9mELm4YMxnvKZeYPEE7NbpWUXaS81iqPNeNMDus28sE7U1pqcu4eJk5",
  "key20": "2i6F16pU1tcsudmpJCUVtyHhRh9FiN4uVKZAsQrKfsarPxd8FHk3sdwVBdYiTePii5g4ac1nqtH8ujYkLVRcYBb3",
  "key21": "4V1EvDSssFQtJTfg5cnEEh9SJVo1vbYTLUYpKCBJKoQTyDTWqus4QauzVVhysoMXiG8LVoGP6HzULg1ADUmd2Jw",
  "key22": "4h3Qi8RVF2rvrvwJBjnob6aztYzSFUL4rGKq8ycFoXRWjN8wVznpZJCUHwNwieh4bdCKP1uEwBTTdSj3XJyABSzK",
  "key23": "4g1xYfQbqjdbSDqLu3SKMcSmhbLpemC1iBmkvZ9AXMNkuW1NczvuMVXfHx1kuYn4HwiERF6rR3nN6hKGmTyyGXkq",
  "key24": "5QXAwNSxg2iyePwU5p42WuoUcTpYiPLPJmQ4pMqwvQ1J3N6jnrd4zmFY1ebdo8fG24d7M1qxdU1Sajjq8omB4n3d",
  "key25": "36iJDx71oD8MRhHX3KbktKxV6eWhjjUA44DLYMGvU6PdcDuvAerD17mxmAwas2u2uT6SHhBaajSzETQmd46L51dm",
  "key26": "cjwheJEKCE9yCVL8uQXbwGJ85H97yQpBFZ6gjdSNBU8HVyAs1bWYZoyG8oVu8MAusknGqRoMYkcNW9Gq4CDYdga",
  "key27": "4vrbDbQJMxEbo6THNUAdAesZAki3bzeP9nAPsLxSYGaR5QkVvm9ud6qQERRUrA1dxsRZBSn2V7vvUKb1AVC5yHP3",
  "key28": "TgE2ykv8HbKtaywLwQXJujkYbgQX7sJevkGykUSEp1gMdsJzES4EnqC3RNZRaBz5HWB5j3A4axT6855XZsav3vi",
  "key29": "4TLFFTSqgPDBg6fp1xDj6w3RVRKH9wx43DRoi1MvtvvxMGYgTcmyGQUApmpY68ncpEudT4mhJqD4gUjU8VhCpm1W",
  "key30": "4mxHnBmGiVvmUu3RddarGfjGYMPvb9MBZP9VmJmkagHMEfgrjdrY6cL586aJQ7KSjrt5ttX8MxdLd1SHfzv7Md4W",
  "key31": "4SMxym9LJhhCHz12bkvtVcYUUBTa9JE8hK8D5cBAWqjWMwH3QRdaWUKSVM7uGSDw7qAVhMygYxWC5TWiarfHjsyo",
  "key32": "5hHfFk1sAPeTg86ZLtfTP3yo3uiuu4L2gS9V2cwJMN8gp6VfjbTTE6nwGStm1bbCGCtbsLEedU9QprgSdzNKpe5H",
  "key33": "4tWGqGwtK5DFuK8qDfzbZrd6X6E4htBqPHuNpyYJKTvCyhDquz2yuFACFGEe2ZouZgFLseQoxarY8vPWRh9QG46",
  "key34": "2gXZeL2DCxTbXnc9KdQroJEh6iZCHcG5bfAsfQcrigs8wNN8Rc3bwJotGUvVu2qiWsDWvWCuZ23ykiZfL9nkhQo9",
  "key35": "46ZNfk7oJbiTb6VpitzRYMTv1rUmZFieVwgo3yEU4JSSoN2RBWG4hoDHP4RjigJUc1BRSC7aT2s3Zzmq3H55RNg2",
  "key36": "3iR2ShpS1N577AygZtjNBzQJNGYLNR6wUzifRchfUkh1ppLnYWp4WgS85fP3H2qHR88HCk2jJTinVMUUSUeHN6CA",
  "key37": "27Vnd4wcjuLKkyTLTRk4dRNkvgM9GrqqxtZpHhoX4PqKcE7hJyvNiZ32ajeqfoPgMzqvk5v9MWu9yru8cGfrhXZZ"
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
