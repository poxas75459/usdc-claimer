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
    "3q7aR4rdAWP7ZBwS7sggqSsoaPxarx7T4Gs1nMdonW51SB1j88TbYyf81JH2SNSfavTaiiaUG7zoKMxPbaW9t1DG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r6pBkwYS6nPBHegDLPCD2uLpsqWzDv1bxoqEgmQTq9RkGvAFVHFMJhCz731knJoFqjZ7rK3oZJamXdGY4TEMWmC",
  "key1": "2KwuDWdNKLK5FsESn5pUk4rbvQ8qUHd92pDBCxcb1xqqihzmaCQTxoH8pPUmZ52V15DYpi7YavR5U4Vt2QWkKnc7",
  "key2": "4Mkjne2gTMEo8PNPLC5HL1ZQ8aRqKxSGaQztNRvioq3chDVkMD2QMCSAxd4v6ng4fycSbcr2JiwK9RTZqTtmjoAG",
  "key3": "3v2UxHDxVcsmRa2QPE1NkxFociM7WivqkaDbHMksiYnLYkKu46LWvPs2jnsMH1DiZ4gosXT9Uy1qymihaQBkmJiE",
  "key4": "2TKK4JpASS6oBHptmXvKzM5mLErPkWjPy1abHH7ZXsasY4ABui68xjZ8wR1qTmByf4kBtJcVWSDpNdMsbwKUx7fx",
  "key5": "5mKFUYJ3A3CQXCy161Fe82n4xVkXUwGmunKqKQKViYBQDNvgsrF1E4MH2tToy16arJt9FrR5cjsNSVmwTKT4iKcH",
  "key6": "waK1neEAxXn833qT9qz1bQahEtAFmftYWYzz7sR3s6Zq3NgWUCw8AjTStg9Ep44pSRQ4xSe1og2nsa7PLcCP1pd",
  "key7": "5YMz6hAh2dQ1vPxuEt2KyDvyJ2i28X4HQDUruah9VTQAgy4YGVKpLLQrG2fUZEjra2eua8dkiniJJCZhc6t7Wi4G",
  "key8": "4oCPcXfYsqr2qJ9QH5KuVzd9byzBatxc7hZ7AtuamCw5TWyrG4JQujDUyPLVehTPECZUG3GPPEKRYraXirf9KrcW",
  "key9": "58PXYgKsDAdumgNmr66bCwSGDgSw7LxsrDG7KCMEHA3AbXtS8D2PnKMbkcqqfijhGKy8bfhCt5nY5UKzFqa53WSc",
  "key10": "3WrjTRATZvQAPshyyicv9au85k8HeD3phExTzx6GBJVXyQU5UhYLVbUeHZEJGkScBDpk8QkvgRhgY5jcLeaRhkyp",
  "key11": "5oQ9sW44FE8Gsupfesxki7woJ2oMWxojuUMfm8LGxAogRW4uayWnVzsuZX7246zuwpByqQXtU19ApryQTjgke6zj",
  "key12": "3jLJ72MFFr9isBaF2Wi6h6je1R4xnMc2KAmAUN8AWED47gNKXhRKx3mCDWv6N78v3CHdeU3RsMY4s9No5xTyPRTW",
  "key13": "2PyGwahYqJxQRMKnm7MXKobdReUFiUnmFcEqkaVaCjFDHpAWiK79BRiXybYo7qX9rhSYqqrQA8uJm4VtSQryRzz2",
  "key14": "3KPyZgdHpLyJvASvbJzKAiLFCz82eeKyzKYqQJTnfV5kmqJ87xjC9KJ7dKNEy2QrC8sDRnZGTBAcMCJtZY4khSR8",
  "key15": "2yCwrUWiNCM5X2JR6doMHtbDDBUo9PKRouVAndSGisDn9fKoaF5eaEN4SxkWHmuG2t4fjCFZJUL2d7pxK4vUCqJa",
  "key16": "JUHhnq5awKzHUeGENVgFCSUo7wZY9i8APYF6AzLfBNNEMEcjWNHMCYUGTJqsmVqUgbdK3EDL2AYkwWZgVRr9T8J",
  "key17": "2UF5WPYKjpLvTXxgsRW2rZUfoDrrxPaqotQmhAdJrFGjLnS3S5Lrj29mzb4926MnULPmpTjwhYAr1WvZXKhPWCfg",
  "key18": "44jM9Qm5XCF12vw7HiJGtgByYRMNjpaKyGe17fSpUr2JttSVFse6qYMrMeHXhZub9C6iQDWKgYH4QrPmkJ3HwREg",
  "key19": "21MuWx3Vbw3B3cZzeFb1RvyiErdB3hnU22fpf2LZGvhdqHfAUJxkeibjeVEyra8gHP5b6HAERRqYVhdHRhMQYK4D",
  "key20": "3oLqpENpCXcf17QefzUu2qaRGWqeVsvgSxGno6bMmvmdudBdaQbxGbiEGubMLC9oy76GBpyyLKQdpqJBeQchu1GZ",
  "key21": "3nmQryXZvST8tWFqZrkjoN6j5Ngr71QoGWhiaqSzH9UdWmcNQDywizytSEBzXin9GHWHXvi1cpBQh2zoRVin8xcY",
  "key22": "3pSLFFLCjwkTebV1Gosa5q89ZmEBmzfgA97MrKnaBhVU6Dztp64VDTgdPSVvZCduqx5uCXd4tSR3vFs77nsTq9un",
  "key23": "2Tx8bFsbVBaoKC8YkbAJAwyDkbry4MRSsbtwvvoz3ZYsXQCRzzLKU8ShAChUeBjxTQciymfQtopvKQRQFPVjPKcw",
  "key24": "5doq24CQgaMaGGPSFBeY68AJd7bBfqKw6UUge4PQQ1oPhJmXh6FXxAyWViAHogNHKVB8KUpGPU5zYMj2HiirJrYp",
  "key25": "BGzT3qhRbug4sXaTx1KhqAGDqzDQ4MCafuikL58ict7jPuded3jNTe3F9FiiDAZW9xU8SarVfGoqqi48YbaR6wu",
  "key26": "2WnvzwBfCTWg8cbTzBAu7x3thps5pBs9b4ER29badnmmjMM3fuzrhL9CRA6m2nkKM3XjKqrdMoEwEQCCXjjmMffL",
  "key27": "3sB1ghZ3KeN9vxNA7Dx9L9k1CEXFLo7StfFKaUQiDKRxzD6L7jJCBWY4rMwRLvmBe8utQb3X6kCgU5hssQ8zFyuj",
  "key28": "3DNtJ21qtdaTWAGCmVdt3cDG1eZoRzQmYUK8uYngtKKcHUng5KDciu3FSTsX97YRQwbbDCGJoU6Dy28KFFavxz2s",
  "key29": "58PhNFp7keLe433Dh3JJSx3sVfZSAvEaSgjZ3JsPVTbKMjZWmJhc8VC2JQmX4jUgqsX7vRSfMb7j5oPNN2qoPFeH",
  "key30": "4yzxhtzTujaRLCrGEgsGhvSrCN14pbSXKtsDSpMVhSqtG8FPVf28CKXrawc7VbdhNLvAruzebiDMj1mKpbsgBFMy",
  "key31": "4qg9v7iY3GnGtqRzeyUbBDk1bEux6vf54HYGzBVGCNppq79yNrtMQigSMf2sHPXLgat5kJdQghTEJfzY8PseWPTM",
  "key32": "54TDDP5ED8YRh1R6ry3RdhctMThqCN4V5esgVsorja19wK8RCpJuNbhYpYFuGocea1N4VXy1yNh5ubhwk1Ramtx3",
  "key33": "4KvuARnrW9NKsyUcD2Usj66Gite6DwPjgXfSmE9gws5HksG8tJ9PWq28Hc6LXVF4TbAQ24HAMQnyGya1h9G9SZdM",
  "key34": "5AHVfBwf1Tez2dqj7rBk6BLoKatYURgj4E6JwUfGE9NzErSFneUT2mAnX21eMesgiKEGR2WWFhRdbqsXY2ZBXLc9",
  "key35": "4baK7PUi7Q6Pe9hK7We56BpL19pFJxrw6wjD7VLt9v7BRuHiH6wPBANuE3jMxe4FgchWEw8VSeteh3zpQugv6jgz",
  "key36": "2j6Y96ViFEcLZ3L679VpGngcfdCcwFFtVduwJP3YnEu8MWqLBQpFuioLGe4YA4hpBDwGjZ2Uw2GR2DrJtznZ4gJ4",
  "key37": "54gMZgp1qmzFAZ9nh3WiV2NjKwMakFDTUxzZUzi7FAmzD7tokRSKxvPFF4tdhMYLicrukGxDrzmRx2AnLJPh8jXo",
  "key38": "22bbKg7AWndUFeHncGmEk1xgLtCFj7iVt21MMTsAYWkT2oDuoesWMKgEhM3QXtTQi8Ay7YYQ3ucJPus1Yvihzric",
  "key39": "bf2oEEwyg4fLNPSTyeUmrzsZroPrfLgJnGTHXxCg8r9GTD6s2WHUif7ede6UPHwSu7yMbk1SxiUjyxJ9S1zwJmn",
  "key40": "3Gt6NvHvfb45WFHLG2F86KyAnotCmxEqLNQQdcSFYBJKAZAEvhzvgiKY4Gf1NCKfJgVaKFraJGRCXU7uiZ4MMjtE",
  "key41": "4434hC6WXSHUQdChWotmUMFLLw5fpiAbFyGHvPRDR4HPef3daudPuSFRiVLbKz4G84a3Fn2Y3qhWMD31ifHXEcq1",
  "key42": "4C7rh8WT5veZZ2qAmZjW8LZbJiHVHF43UWDf9moSYc9ZeoWUSqrJFdQYNw6gDfk1gYQb1oe4X3AwZB83s1wfkkcH",
  "key43": "2LJ94R8TEgf9QqsLrwhX4q6AEyquJxRXY52nQdMMM2rjyNf2gAfx9nK2hm6MGQPwwdywPfvHqQDkPL8EtaMv2LdL",
  "key44": "EYKizqr6pMsiB8DMniP4SFYwiYwpCWTrqqJ2pE1ZNw2F9bKnfA7N5NcRCbPkwLzACrJUsYMy4r4UjeFywQrVubr",
  "key45": "3VhpWNKk4Shqb6SLT1aCQouWxgrHAY9McdncAkTxm4gc4cHxP8NPGisbYnieHJ8RprVuvByfKyXKcsWVCxJrF9Zo",
  "key46": "5kXaAM4WtggV9zH5fqH9J2Fiwn3KUqmY3r7tcPC7PhCb5ZGeSk7H6EGjEnuuNEoyqYNZNe8WSp6aZhvk6TSg85Qe",
  "key47": "3zv5GURyptsyyMoh3LiXg6H4oMbMMKNdVeSbvPkSHk6fVX1spYkw4KCQ4TUsXhX2zGqKpuj31c3DgeovTSrF3t9q",
  "key48": "4WCxsgdLPC6jKiSryzCjbcDNMRcQKzYQWYYfjA71G7ab3ZFZXgpycnK1yrFk9Dgr7HFa6g97RkFxVFPrNbwpt9S6"
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
