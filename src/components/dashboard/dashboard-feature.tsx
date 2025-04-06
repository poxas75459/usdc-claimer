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
    "2CG7GY9gCoqA5eVVu5vTALv7HU1QfL6ZgerbMGNvVw36vrZS3HjEA6jsxSikZQh1pZw3xV2pxvVXEYeFHYzBKu3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yjBgfgqgMjqqdXVH8F4nFbRs8xSm16PEVGBhZFjCTrGwA1orDvDG4vhM6csCe3uaJkmr1e6bxo5qZZrxFk31kCo",
  "key1": "Jwmv1xqhFPStikK7KfiJ6SkDXEXRae6S3MrUYetpgYygwSC1QLGbxwrKaUJsgBCR92jiM4KW2mxs469xz4pW7Ba",
  "key2": "2puSm2JyDGLyFkdreWxFKGsyQjSsxcwr3jqPaxqkJWnbgrB1Siorim7mvZkHVsjHxR5VTePuk5SGtRw9kzivdvM9",
  "key3": "34nJb66XXMnp6XjmFZJ8YPWqxVqrmt5wUrPHG7CAacBB9SyAe7YGcJT4Km6S8mHZ65vHCVVctgqJi4bSgCNrT1gL",
  "key4": "4UoinCHaTrg8sWACyuAgiUUWqX34xg8iCPPWSKvmqWZARddWRSDmXawyKSbwR8hQx9cDebWQdrL4yhCTNXrJjncP",
  "key5": "tVDEzUB2ifHbcmLw6aXG7xhEL6tZ8DJ6tntN4ona4F8Wn4rbMzzxdWbVXSa5oELW5Hh7ZuibGgEjuF4Qdo3zD7v",
  "key6": "yHQNm9YnLMcpiUemkYnEJsb4oJWsmK37kqAhc8UTjeKb3T81dn7A9Jc6R7tRh2ByFxRDt8YKVYnVatDGM4tPAAK",
  "key7": "3RVAFiB6XVQmKfq6DJJQNjaFzLP5tWjLzqFSSTFHyQdwpXrSrK5ch9H8ef2S5jub1ot31qhYsKKPWiuKLPgbWgJW",
  "key8": "5J6w6aajKsaZCChZCJXgkorRgqLMpBeoUN3xPeyAF4Pw5YynAtkZjMFmBifdzWbQiL6uo2SfUUYt7C4RTY2RJWhq",
  "key9": "4XUucTtH9D5o5WZNt3L57F8WG15aDWL6NgNnFFj8U6pABPPUyZgfcxeqCzYfNuGuczevhg2gUr9RdJLPERU6ezRk",
  "key10": "3k3jdDGVB8ssXiqBXF8AsuqyRLkmseManJ9NVoiB8Lq86QoU8DQLKohkDhh99x82X3qtx7XRKia6zzdW3ySMpxWr",
  "key11": "VhmezAmNFUAGTWunACZpDbEBPQJq7pqqL2t1jgBkwvAcVeibwhnEa6Zk4Na7MsTjfWM8JdH9teQNbDtAKtdSipe",
  "key12": "32zJ6vjcKX4V57VG8v3QWmsKWyqrUJKEmLidhmaM6hhR6jf3oB2C8J7pRKkufVWuD2r9YHSUmc962b45nktNSHYV",
  "key13": "LuZjkB4dKErKicuS6XZMojX1zKTfxd9rGLnZ9PuhnzPahgW3E5RwcZvbdpbm8LesLWNzU9ZuK3Tc7ykUjARnLrZ",
  "key14": "EANZe8vG5zH9iU9JBkY4tK5keSCgmkaYSnV4M9FoiPbdM83NrNBD6za6seo2qjQ94SKNwFUdbmhDYxAYtJ5nC6f",
  "key15": "5DyMKY8qCdWmsK9f73N6iE82mLPebEz596gJZGBAVw4PAdGMeUrCYk82jYenP9VRHrWXnMzCYiauz2QQ5a93SsgH",
  "key16": "3fHpSqtg3aMJgLSV38pS4f4wUZoRRe5a4m3BSA8u1jcxRRMBG68GDMNnDmvbzzg3oLQHHgspnN15zbLCMjb99baE",
  "key17": "c53wm3BaamCWGNA5GM9TJovj2fJk5nWA37kV565tuV6iJtJt7VG2qcLQKdEPktwVchfK9L1UeJTfR1G2u9dXmUo",
  "key18": "3XR58sTLwDJawtxLQTWXVDK99dL9FRorETMGkonA1WSqKumqnT1nx2KsQW7zvQFUuPvfSuuCStCL7tPa4Q2NAa3e",
  "key19": "2vdH9svZBEcFbR2pznhhnpYwxhNjTCc8X8DedNQ2wDrqqsVyjFZB3cAV58sRdYhn49MpcpqevimepoRgnw2miuP5",
  "key20": "67g2Hs52g9KcEU9g5mJYBnjXwnAidBTYn8QR4uvs8KGJ4wQgmuLUuVtvHb3yotofQjC9ER8bBkeXZt4f1WMtYvwp",
  "key21": "4CpbvXy7mmt9AptTGzXFD1pmPN1QAYChSKxvoq8jffPT4Tgq43wRJ9WQkVSnzKFpN2kXoCVt2TGcfeUUbg5FcDt4",
  "key22": "5UvQY4mA6vfpFS2bZoBhPmiARtzHokJBnLNuRdm9HvTidUddfHcdMnDzmXxXbPnHcw2qyF2rVN2otJaRmmhTfDZf",
  "key23": "2D1ocC4idnQetuVEswHZ1SSTXAn3zBWshP3DvmRC79hb1xq1WLwNiwaS9USWunwhtP5HxGLYDAzpticj1D6qGUmd",
  "key24": "5kh8k9GWdQaBfSdKNNZVsbCWut1DFNjn9uEe2LUPQTHDj5t7bVKAf6wFiZwNmQcbKg1GDcMnTFNxQg2b69j7jQ4b",
  "key25": "2DTY5P9uENYm1b5MYzBkuctawGRTqmZz8YACX17icriNSgtGWjMzkiFbewkaMpZCfXUSTwSrPEYGW8HrZQYRVi9",
  "key26": "5aUK2xGePoyiEzz7PgLKkYjy7wzU4mRctDDy5V8tVa5gfy3YNjxhBeYS2P6k5HRWQNrPZcZGK4cjw57YW5WqcrRF",
  "key27": "4riAD64X2LK8hmo9PLw2cPh4Y7v42xVJWK95yuVm9LgNPb3TccS4dCNKD4ECQ2Aodt5gyp1XMYJKK2LVg9sE8M9P",
  "key28": "A5sYfhRhhZimSHJy1icyphVL5vmayhzwKSLQq8uLnooao6P86ZdFB4Zs6EBn5qJyDzxC55b21VHqd49927ed7Jr",
  "key29": "4YkBYDtWbN7xkvKu5QutYBpxsGUfyipaLhfsB6U1ziMZRr6FdzRwEnjdNzm6g4vX17jdkg4DwAyCKUY4ZGGsyvGf",
  "key30": "3d3w9yhcdS2pNwwt7oMDLJy93WFphdEpFKyf7uM9k4dhRRBJZe64Fo7LqgZ2nt2gSeXahLvPmhJVYPB2Th6USXTm",
  "key31": "5wzNUZp9PTSQqJxzQDchtDEACH71cSk9DomSYrzrTCBN3eewDp2DxAhJZeA9sZnUWpn8319njmhTVztYGTPdafVk",
  "key32": "65mZpxeGJujubtiirHH8PvBxxuJt1Gb3zVbXVTvQRqvCPFdzp8DivoaLKqreNiSxBixUfq6S4mHttC2LTzogFhLR",
  "key33": "2SzEHNJbnVGpcjkt9DmpXPR7kueL1NnUi5Mc7mUyzXghnmewWKjscpy3QpQE7EERPKtQyLskGNxGKNnp7m2MMn1w",
  "key34": "4Rpk8yym3V42SA7wHjB4H9bk44LJv1QXtxumS8G8ptzye6Eymf8RbKjBt6wLwfWvB9mg5oF6ZmH7f6KCHZ4oSKC9",
  "key35": "4ejbr5iRHCVKuuTKvcayB9V8vM2HvrxVE4S8y4NEHGeyKDzu1CW4Ht9j1WFnT5fSNWeR6X22XwvvqH9mznTJMeNn",
  "key36": "5gPAxVgrZkLH45TYuuC7p1vtk28q1ZvdQPxRfn7tEx4UACcsWRmvHEyM6UhdL1eJFrtLnnrmrHzEQ3LSrz6YqwUv",
  "key37": "22jfmXkiXpqRpaRFhgfX4d6eVRGtqGcdukP6ZdXXuW2gtcAcTKqhLYhodgddarJ26eeCxeYJMWtoFVDYTNuKdPXN",
  "key38": "8Rojk44FN59FLL9jDeUaQxifKUhRG35mQMmp7CJ6eUHY8UkBom8zS7jfTY2FNs3FwNW67aQouBFmCk6Wt9XxBfL",
  "key39": "axc2iDM4PfPPbX2sofP2a1kDDVxF3oALRtXVHFt7SbT5WaPgPDeDRLv4zPfFMoh4mYvVVhYxk3Tgb9NJQB7pEDt",
  "key40": "3L57526WezKMn6L9xVK14puGNMdJugr9NeALfozi3zM9nGVMDRB85QYckukicw8zmZccwPBGuW5GRFULr8QHmjmh",
  "key41": "24A1gnEFNGGAhhUuRsuFXaCuFCzUth31AHPHUBayu5rbJKSAaEvKSMowVV7WgeQr2AbFoMc7ykp1c4Zg5aSzquLG",
  "key42": "3MBGvSkAdW3x1kYkgQuPcT9q56RFzmX17tq6HGQvWxJ1qPE5Tsf6fTU9RytogYDgdHkbyq7SjFPDbbvaQWbn4WoH",
  "key43": "4v6sBNiLgfixdM6jiYij1YatUmiyNRhrWXAQKUthWEU4G5TzLH6AHXgf6PVHQkYPYafmhehgVtWe6VDqDue4yfFU",
  "key44": "3XFcZHS3FN2ght3LFD1Z4rhfGBqwW6BEVWBReEAnXDxqK9hvR6KPKPkVvUY3ByP9MmDZiM6uZCjD6YTQxKAPmJSq",
  "key45": "4XHsttcwgcuQwjJfZKVEeXPdKG3tFBY3rphY5qpE1Us6jUZWKP6Kz4qhPpgWX4gaXDnsF8ejAks7X9Kwfsq8e6mG",
  "key46": "2x8WYhzSm53har1dqPs6ooxHRj9cRU3BFgEefWQxngsUHekrzHVNTiFMSdLnehDvR9VUbZwCTYtKA9CNGcL6kZDM"
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
