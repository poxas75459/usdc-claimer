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
    "CPxUtU6eKAciGUTuE8hKHEhkUijRCGjroJ8zsvtQURaS5FycpzCdt6eM7n7EDpsqVncG2dvZrJ8birpuQF4E8RT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsVXXZSQ1uFzgWRp8isEvcwWFjw1NHVdsJf1boQ88KVdjVXfCsERN99ntzbE1PdanJ3vmHa7xGacSnG5XPxK2dd",
  "key1": "jU6KVVxUUAuTT8N6pWHouTpwpmhsx9qCXHPev9Y6fU6VyBLuUDvRikZF1JknahC9JwXiBfbiFQ9u8gYujZQoMr4",
  "key2": "t5J5oPviatNSGKrZdadJz94sNTachcp1uVEEBuwVK7sbEk7kziVL5hdhFbzSwyyFctnLVouAN6sqpWwaLGZFQhS",
  "key3": "5G84za5U7exvJG9sVWAr5mNUtgTDJWcTpD3hYiFozpbtuvnmUzcVfC5KLKSVPV1czvVtQwgAZpp5wdXmpqBHXJYX",
  "key4": "5PUVCJRCjZ2XYX1Dtdwju6ohgT1rbXVR4t9443GNnwK3gvPazcWd4pv9Pf98FAe2nAGbd3kgviuyTq639PXv3mWx",
  "key5": "4Xm8qKsAtahMibXEUkejiaEsfygDwpx7amahdi1LvMxnba4oV7XHx4ZrWEvYjoA186ict2EeZeYjt8ANV1SuE4DV",
  "key6": "5TnFKCrKFZ9Vb6joCkkkbWgwy9E53YowpH6etpRFjD2yn23fcyaPwFi2X754o4EkD6SfYxGztMaVngAeX3p5avNs",
  "key7": "4Lu3pWQeBGyZKAs2RognwLucBvGszdJqVm8HVkXzGwNUfxFTPMkGds2A4PwbZNbebvzte8TbwUoVGYDKv6tNfaNw",
  "key8": "2LoqJrUdZYGu2SihKgpuWYXvUiVaTexg4ZUT8kFUCfxeqeUwLbxfrBsiQD5uAJymfk5p6bW5rC6c6i4SzEv8aWyD",
  "key9": "3vwYgUDEQkCjEHtoxjfmG9yjQXwEHLmLLbMFhHZx1qC8aCbrrdn5sY8ALVtkm2sN9kXe5Rth7FHCgtks9dWpzRa2",
  "key10": "UpMB1DwbuuUoWJWkwEmPvRSAej9rAps9SkDVHizDDgP6sn3ueh36UgoX57vdC1dFyKo9n39s6fGAPyK4ou8Wzyw",
  "key11": "u17XLdqFyLqAykJx74ubH8Dp9YfiDwFgLWLQGqi8SUj4zajhg5UzvfZBXkvj4BoyCzDPJz29Ry5AiF6mUS3FVBM",
  "key12": "5EwuqFBdXxtjC6zr6BcQrmCLVRm1FXHQozFa7ZrPXZBg2VPzX6EwvpvPhvy9okAqkj8AgD3yGfqzuozdq2TMxjJJ",
  "key13": "YpsJHQjMQQ9vbnPC5xwDYJBMLkUA1sBhLLU562FGvLdSKaoSQTPL63fjGV5PiQEgbkyuNtACfKt8gMq8bxZCg3P",
  "key14": "4geQAGpc52ceQxk2926eBvQ2n1ggD4UWf7Jgh7v2ruAdSysaT873GnYioCaGh2Qq8CZWZef93BXXFxzNZ6JQ12XG",
  "key15": "3HCo6cCvjrRj1HeHiCVsZRYP5uUkz9aaPoUcMWFMePY3DUR5sGV1odWRa84aTq94yGkWTXF8ogEadpMkUUBmV7dG",
  "key16": "2aEiAQkXN8ywDWFkfd7Ghh9kz2JouSGgbzUDx3DwiXigQXPp5ky4TCymfefSY9aqZUDHvycThFxygLPoSVGccqvr",
  "key17": "2KrU9ov2zLVe14CrZJgp4PYWbprnRWpk6t1yNf338BebKioT34cW2iYJTSN9oLXFKnK8976Kd1X9EEFfZQgCVwSQ",
  "key18": "2BNth3HQkQ9fPzxtq55386WXponN4cBEZ4L8VBwBXZSXsZVF2acks4sWYjQKVUKeLkFFGe3PXWuBHDiDaPoFgUB2",
  "key19": "43mJu85Ys3mYA8ZmMJTZMUCipbJtRF8rkPQj1ddAb1QSzzL8KyLJMDfX8GxoCC7hsbmTDDPhEVKrNwfYxH9ejUVq",
  "key20": "5VixNEc1DGgEEVrW4hqGWckuXdTD41sG8TWZFY3SnzfhG9mnAKxNnDnGL8qS7PqdN4HfGvWfuYoVAgNs8fSxFauL",
  "key21": "3FNFUrDuoajvpmuqXVjH8TuCCFqcDoxo7CuNZXbfQ4m5HPxCkE25hCDAWizFccTuXz67zz9s3epK7Ba2XZ8PN6kD",
  "key22": "zApTpdX3aciD428hLWXmK4kwrzmCgYES4wUzpA7M3NiPmE9waaCsvhRmQAtzNjASB3PGn8aZZhAW71EeXifdky2",
  "key23": "WX3twSsQcairG42fswz7JVRkGmBFwFxjnDxvdTiyVUT4Af5MpzzKYCS5eHaXRq1f8wdoxTyACUYtbCsMThYa7dC",
  "key24": "5fcB8cDv8PR6xp6coNec7FQKitRBjL3exWdL6gjaCAUGmGjLuM47wejVLFynYpSo8LHyZRuuiUsRz92843u4c1E5",
  "key25": "67AETdCqGfGALsCtvAMZKYPNCFG2nMfnR1eSZrJ7JoXPmCDZs2t4XFHeWAwDY9rd9ydFWY3fYWcVMZSWn9RP8Dze",
  "key26": "59bsu4oLtH5jTQ7r592FjrK8NaEZDSrmNzxABSbFWwerrCGPgevDkUcp2mMMTGV8jmPEDqbzmyg1TcZocYLp56VN",
  "key27": "3jynz4xrwZSJHHpRikwxTYgZrnbVWZepLcpRGo4mXwQLAJQ1oeZTicYJGSRnRDrSt6BDQLckCMPU3vNGhT57CFJa",
  "key28": "3ShC5A7UNVc2e1D2Q1rbe6TQWUqWvnbakCYYuLccbJXes9h1icKQKZUGr5XakJBqscAoP6xAaukV9oC5rgPXLj3H",
  "key29": "5nQ8eZkg1Vnra2wEQBM2BM8XpbJyrPE79LJ197hwgSkJHv6wBjvGENXCF5mLRvsBaXMHmEDPMNkABNbjjzZcaCDZ",
  "key30": "2Gt63VCafnxYVgLPkX2on3fmjRE1vZKNQR6LemnmPzPYfFGMZLNnY54tBDkUwhUFzemEneDW5aFAkzncqEuMGbZQ",
  "key31": "4qembk555vhPeMEa7ma4C7jSF7ToAnSQQukdAomE2Nmd2GmHzFyKTb2zjq3k7QvtHUiHmiqQKAH3WTruF4fdcMcH",
  "key32": "4LnqYsxR7dizR6dnCE6QqZZ8sbfiKoXzAMwie7gYbGQwMWjrczuMakE36aZ7H3R9ZNjj1sRrYzv9hphYJLCVFEMe",
  "key33": "63yT7eevQYcUSaSTUW5XfzeiMpLFjW8ARM98LbMYiTetQzgat6dYhTvf4BmqYVjZPhqgBs6GAkfQRP8wZJbLRVoL",
  "key34": "31xpyeXCto2C4DAhpo5NA7oFf2G52cxZMQfvjC4c9gpwTFcHwNLf4o8emb6VaDLSjq3cwXBw3VgnDgajo78eb4Dg",
  "key35": "484KG38QeJvLnJSQAnqk83VtNNFKCthHumm2DSJT6k6iCjDahMFze2LbQABsMZe2Rq2AmnsSVGEz7xLEChZ9mYAV",
  "key36": "4czpqq2CkqKnHQEKyDNZpxjaxykkcjB8ppdxQGsQzAQeYMtnq6ZJuRBYi6ex47fNpR2XWUxBHY8MkzARiBRmCYtS",
  "key37": "2HvAj95bNyoUaCFA4drZRP7soi3VUUWCCBqYvVoy3MfUcA5QDffTNLqmi6rj975gi2uifbebZB2rqXRdQSpCCZLr",
  "key38": "5tTYbFLAWBrWfnqBxhHf4UpMwQBnWqVNWA2oj35jntUXaqw59QN1xQ1SZR8QZ8bY1RpyvkjLxqKjP8163drzyEym",
  "key39": "3jvLmDpVUJ412ohaa7bkRN3URHuFszoQhwnNhDUgGxLQ6WEg3tP6caFZgYaWCD7aRL2uK9dVs8rVBBuhjvfdjyS3",
  "key40": "kT7CDVn8UvDgExg1G6F18ZhLTnD7mWvqzaEwT8i42N9VhgnSXh5KSbT4CuxNZNG3huq6qkxReurLft1frTkG1Wu",
  "key41": "3iMyitx3x79yS5dwJJ2CLYmFwqPhGKNgCmu4ZgFoAiHHpkJCS5iaQb8qjKe2awi61o7ycohGTAUv9YAS9iMZCFoJ",
  "key42": "vd9dfj8p2a5gnobzcVwv6aFgnVfZPqDFwp49h3E3YYSgNAkgy7EWESNr2v2payDaEy7DzWT4w1AivLMXhRKysDa",
  "key43": "52dAz22TSgt2vGELbaNYn3sE7prWbcdVEMDevaYvaP31sK4NWJMFKUM2c2ZBdpbpggaNrY3BU9SgDUyEwTrEHZpz",
  "key44": "2wNaEbTB16BRKxPZRzbjndx12dKGMC9GY9ne4xGDYEZdanjRenjmEQHVTc3q794c2R2M7uyzjAryW6Y29aV5Yktd",
  "key45": "3R4ZYpYZHouQSb7FCkbBAgvgT12vvmDYKeGNHCMvnLHVTzibukWPTFQbHsWJjxuhWjJs6Y2VZmQZMpfohN5RfTfj",
  "key46": "3v25BLTrH665ZCnXqAuz6vG2gijPkLNfEi231Ao9V5mA9Lm3KWSuofSAgrqNj1Yv8cD7Nc9irKnGTNFaChLa7wB4",
  "key47": "5t2oexP1sV5JW8RaLvEbuidLBCRZbFEgenJ7NfAYxXg964dznYJTJPdNJie1382oQxhgrQ4eEwhnmCiXZ7akdcXs"
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
