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
    "3Y3bBEAXPjCVqYw4xnzPk27upB91Y8bUV1etXUStZGR12FT14khnoBQsSxzqk3FumWdPrLSJzbKqQgmdydKP3L5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CduD7aN21nzrVHHNA8bjLhuf9awu9HKF6A2RmzgAxu2QAyuJw5rmZHVVbPoHx4LumA7q5URrpJCCX8fqJffwgrm",
  "key1": "5uqvNP4RGhQeBRHJLcDcULqmcJGTh79DdpeHZwfwntJcneQ3VVjoS7iu2d16hnghwaz9RBJafyZp7sbcUkrFDPob",
  "key2": "5Xdypd6n6AqwBL48xk8achCTPdEZVJoNjTEWso9eHVBf5yKU9q4ehKMiuYxSVix1YTDzZVPuKHFB1WbJbeDtEQpH",
  "key3": "65KNN8gvL59pqLForJKyxCtdyXjSJwHm2wFLSfwRnQPaS3UCU7odGr4kgePCaSimCXwQJ5nLLSAhxk27WXen8SfG",
  "key4": "4W6Lpxk2Lb1YFbE9s5Dqf98Q4xAnvbp7nF9viP5Bi63VYbtLCY2xfvyZrXoAymSMvZxq2UoyeoGh7Hk6hdLRugW3",
  "key5": "2PewGh4v5F6xnTmhnLB8Bcf5Cu5gkVPn4E1RHKBbyij7tzQVBLRq1WnE9vjLubZ1XzTNrSNBgp1wPEEb1uRetEPm",
  "key6": "53aws4J6eVN97Uo6PFb1oEK45nK9CouE6DZnxAUHqB2KrjDR8GNNknBkH7vuEFK46N1bMJ6NJ8WvwZoNkfNT7X1L",
  "key7": "SYzP9LHLL1JyMSskkBCrL2JQLfeoRWttmYigoe1srTUEJR3bF5UaqYjLsk1ieU9Ruu8XtYZWD4wr1BgFht2cCtL",
  "key8": "3gDmP6VZUvdA5vWgF5HV8eKzWzYFSLCbHcyPZhZsrxMcbkHxabEn72BgRYK7yTkfL9G5sZxxH7za5nZAE15M3Fgr",
  "key9": "5qnguzbGzoqrA6ZaB2ch81TfrpTeW4FJhQRMgqx7TxyRav5YYbFK4qPpg4zaP5CBewF5cY95W8bAdJun3wjZAh1s",
  "key10": "4ubwkNQPv2EbTmLxTn7yqmCtuDwwJrzVK4ptCaBA35wmwmTJiFvPFmgX7mvWy9FydNhnCs7nZcDPMY56TVu3dADW",
  "key11": "5bWHutRmVG3eUi2ktHe31wrhzsvyCGaWVHqG8W1nDSwubF47QgiPTj51utTEaKpJ5Qe7AQm6WA9s8YvFReHcV6Cr",
  "key12": "53XcnPTguXXszhtB6bbNhkWoymsb2iHLt7NA8wHWX1T8Sd1tmSLhKuJFzfktgkSqTBL4hTDHrDsPz4r8kkwduj2w",
  "key13": "5tuBPasSTx2BmZUKYRjxVN51XbFzCVRsZMef6DD8qDBUfGnkCkzvUX8Zrde3qfXdgNXxhUaAs5hEtVR2oiFvkHrA",
  "key14": "2ijT5dFvnfGusJnhm64CGsEwsTtcmVz9753ATSVkWfPyak76PiNs4CRYKSxHxcqLMG621fJmPsdKQAXoe7i43Ggp",
  "key15": "2fpennpXsrDAs4KdwquenAGzV8mL4YDc9uTcQ6WL9m55J3cExbXHKT3j8iJco7xvzdzbeNrsqnoUsTzzGQsAaoCB",
  "key16": "3GmUcoHcH3RB6931PoFeiwHTu78GNzeeNraEownyyvvYMBZhv2TZxmdrWXXaHZZJsm7L7wWsGNFeCbhZcrurSmku",
  "key17": "3b8yabsS8wUQ9B1hPemqH1DPbHgnnEM7uyTYE7F8VAcXMfyBfhpYoGXFdBHLxzb4s7E94FL1e6HKCELYmeKxgP36",
  "key18": "4hP33LbTmJ8gpndMRqSctLNmHoiVXuZCC5mbmo54RcfdZpJ83cZt884AvEt8EGDgnw6v3PuagJNZLLj1wmdHHoTf",
  "key19": "614JNJ91bAh9tkQCXyT3HDgbU4iaiiiiHVuF13cah9nEpb2wQrcRfDJazMEaVpaKRKFGkWgMTVK3fmi1U1daH2XL",
  "key20": "5Q5t5L6hQv8yTtWgUz9yccua4691o1SZrbv26YxYGEtTrHGcHfE7jLfc7LPriBZmLLCqwQZbp5YdNBmD26FvbBT2",
  "key21": "31GzoTCsxRKUhr9zrEbtGXWXSrViJJway47tvenvQ2X357dJfmcFtaMj4UevHLEuQSiBM6hGEeghDz533JEBQFpA",
  "key22": "C1yWSaBEm9kC11dGt2HFWoxLH2NNndQ6s4znQVxn4JBYzbzEhCv5q7aiJ9bbMHM5Qzh98tAxzmkRCuBjuEMKMYo",
  "key23": "3ttByCenaC89LvFuieVGLZhEYWe3LELmYtFagPXFpbnv2aiitzmSt6sNTL4haxXJ3iiVGUNV7nYkAKWCKxB8YXxM",
  "key24": "TXhRfTtC4ZfS5TdsEB5RA9hGvPnr5awWTnBYR7vNuKeZ7DzjrGBc75ZrmYRUdNoLxjVWqaEm3VK2V1AjPeXmXwy",
  "key25": "4mtDnWgLXe8G8p1eYSkzQgRTCwXgFRV6Uaj94GPTXxeMgEXUbS9MGSdBvotuTeQP6zC2vaanS7kRjcxjL6aetddp",
  "key26": "2LvSGafvCmC9PtKaKpiMzM296E1cjsi1rPC5j7Jgvz5bGQcGvrQW2UkyPzjK9fB6aNpBKpNAMnBBEvqjhGd3Laya",
  "key27": "JnsGxHxD3cQCFtu2YckSZfVzWDMXWg6uZQGSr8oSS3RWLTxqk5jepMd6QG6KqKh4yHKr9ZqdET6jTmTHnWzVwEy",
  "key28": "pgMzBxUDjqZbfCZLoFFhnPNw1FdmH35pQfcxbrMp2SbAPpedDZVtZG6zfzjPgs8bhtoJ8FEkfxDBw1ZiGztLM7P",
  "key29": "61LUxDGX2tPRVcCM9qbXFWo1V4f8dpxALkFyYwQ6ftz5xgUMv72ofpb8UTqmxRbJ9R3D34oMcciVpaRuyzWzbePF",
  "key30": "eiSjB3aq3ECDAfL3qdwvK1Lmse6yEVC4iJWBtP4fW8S2n5f7TyNAnD8az2ueXfRBSamtdPo3sVbkvk47JHtejJW",
  "key31": "2rJQ7K5yJguiovCkvWJNLdW1Ggt4B284XFyTgudJuVzNzYxD83V7jJnyFa3wg7mkxDwUZTtmEsD2hq8UhSJ9VXoj"
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
