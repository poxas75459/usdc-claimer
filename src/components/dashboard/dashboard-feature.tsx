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
    "QvGPd4gMHHCiuoxw8pbPQNsh5yt39LDTqRrWb97BHBcuXcF5xFAzxMkVEHyJ6u1LhuJYQFLSbPqby78BUYyDUyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jCgABdPyCk4LpssyuKn6uDdPNu4gmx9FyRPSA8nMxAs11272Xqm1yrJfagjRFjwUmzrad7UZYXdfLBopK4kJnAR",
  "key1": "498p9LHHeZJoVt6oU2Leas3PJEgMjC5HtG6zQLm2BUnLdYZYbTsHVvexoTkBUKHArCifXwropGAtZmnSy9Sx7uwH",
  "key2": "5CA1XfQ9H8wFxXuP3bRN1HR2jR9DztXCZkL1iPuAgT1s5uUbdqtFpsKm9mqocMpLaa2WY83QdREchT1YUD7e6VGz",
  "key3": "2F7WY8Sm6ZNJquQNcCYxqtXXez9TyoBDmhx93GTWrZ8xqynrQTjftDviQEgWMELfP4pi16vVjF2rW4sSUa8TvZfa",
  "key4": "2CDiRhSr98a8dzsUZb5mXTfxarw2azTSbQnHKbAYKfQnYHdqUv8DD9SNwNvAebwM2yevdQRij89G3UfcDbfDPevG",
  "key5": "2zrtkwB2osnGdQRdtoPWWDgBNRKoNNUz4SQDfvRfBWzrSU5EPUTVsvCCdmb9cpzjan2M6LT1RKb5Y726MnNajg89",
  "key6": "4ThmrN9EMGG6jEErUTiPky6wwgNZUPYqDo2SKGVWF5K7939wYmbGZmZdaQcSUbREbMmuNLjRfTnVfB2ivtKLHprx",
  "key7": "4QRY1Ln42otyTAifciDAd3sFtg1NQtfQBCXsgrJaj7u6jhibcZndktwkMF9PEX7hEdvkTL1LxjatMAhm3dHKKYVA",
  "key8": "4CsKzmhT5s2t8zzErPWY1yyzQzXGnrWFm3CA8VNbugMQ7LdRT442CgMddigA7sZsRAuc3pwanoqzjVhXBciyarFX",
  "key9": "4DxqJvrYYwT5NvZKiitaG287dDNDU8CDyw6mxsHahLLPJy7zMxzgmLX9WhnfegBAKo4fiSZjMjkQotytRTtVrmtt",
  "key10": "2e4k2Tcf9ycNEY6TGdca64JR7VS8KSZgdZqA9vwpxZuPsMqwQX4V48hsVc2uaF7nnoeAjwb7bm75d5zFSgaDqh1P",
  "key11": "3sciqDb1LPRQXhmQyo3gxJNeSFpVMcykjGa6UJU9t3G2HB8eoV33djdt8F8uXjHeauUvkVX8fxhPMQ3UWmRhMmYk",
  "key12": "3iC2T1BqqNG2L1Yf2w7TZLY3VYTKpgMZw6iG26ViYusPqHNv9bPPvY5rLWe8GH3h31aJ81EwgptWw2rAWoCwSFw2",
  "key13": "5yDbN7PwqMy3v31Hg3p4xv2SHxbVRD1qsHnKdQY5oBdYff1HXJzJCu1dXGsdJUJ9PjnEt4pRZn8DX4x2UQWzM9cd",
  "key14": "A5TFqWnVVQrjCAnUaJLsGGVngcP1cFS18EExMSiouJvHLgGnuJbvmcVGG8LK6V61XxGxD46ZUN7LXnuzL3YpPfL",
  "key15": "5TSCPn9uLPZqVcG5TnFCjZ2fn1H5pREd71EGmPD5LC1dhmR3aCD6pWLoG3Gqg2HwMGAPtiLdphULiYPADEMyJXtm",
  "key16": "5SrFXfvMEzSAf8BgQU6Pr7tuDBpV7E2gBoXeMEayjYYymcV5jbwVTziGC239a9L44DGCoDfjUvVdQPfH6ZDm8ioL",
  "key17": "3wN9xsodtkeNUi4fKxjMZDMRVV1wWnk36ULy8qx37LsMMSiRzMFnfAWuFj3WfdBk4BtWk9yW5wSbcuEJhubMTZnD",
  "key18": "56xSdvvVve3cUNEN9y2yd3UQqEvLGS6xTds9dpt22beRR46Kvx4ZLG83ozu7nmo9oQCmUBV1nKqnBjJaAKCcdT1",
  "key19": "5dtspdGa8GBCPELiqudcZPq4oAmcKMoVk4XyB9vgvykp2QSBDg3xAX98Jfsg9hpeeNa89ZVudgCrxQAtVqrf7835",
  "key20": "3eVFyypnhDhp2Uex2nwwxD6NtGoAjwZ2YBN4ZAzBV12eV7jL2D8LUGgBtfnyN6qKtkk2rK6mQJfddzKCnPRNVXaw",
  "key21": "4tg7byeViCnA6q2q11BKtToefgjLu4np3oViqptz2rJusHMpkme8GMfbittAwyaoCSiQVUAxuRzMsVcUviQuDQzS",
  "key22": "3HPP1ScqX29YyqaLhdZXzYvbS5oWaBffLS8UaFPApDZ7WeDS2sHbhbdoy7jJJJW4hubRXwNmiDJ2NPh3zQm9ugS6",
  "key23": "pQVbz89jhef7pc7fm3B4y8k2AiAXM6S3Xs1EubMB9v7oSfnJHwGxvh6Ai4Un2rKa3RH4pZrem57MqwvY1M5i9wy",
  "key24": "2ntHktVngaogMNBnQHDQD3omSEZfrpmAJRJN2GeqUyV7TR5qCPGc68ryRXDC9fAYvwmECjHe8Qqz4hLY8NZaEE3M",
  "key25": "rnrwL5ddSCq5o3d7aJMgYR9PwGPbyjtk4ZjxrAbZJvVZJfWgrWCoezrad5A8wvGqqkDcDGyXGDrb8NtsBihBu2E",
  "key26": "2PGudUnduwCkamHPLgPJfxLzeHaDuZioxunYzEkq9yeymJSVgfA9ijGrUeKkaFJB7t9LywNkC2vDsgxo5QgbTY8P",
  "key27": "3V8wU9cijCD1vDPtoNp33KTHphE3UTA6hejMqjUXhaPZ56uPrH5yBcEY7NptMjK8YAcSMusUBaFvT1QVjz6bFHY8",
  "key28": "5knoVb3V3LuBzZBTNPmqzFMi41gadAR4GCgzxTxgMh7YuFtM2Air5L4CmNGGjWBHAdyuA6tzEexgwZQbFwGoVMW6",
  "key29": "4bdi9p1zFtQN31n4rSDRUGqUvDmcAhdKNsG8Et2Zu7jNAzg3JHHih3Ag4GgJR1LA4E1yh2GPkPP96DuEgC2hZBcJ",
  "key30": "592K7uNnQ5obMZvSnNMbnUZYgbHC45Eb2U58ZPhr4zLpXjLeoXvfoWWVDRBrmWGycCSMZsRFK7FFEa65HpjUfgM6",
  "key31": "3xAFUsQCoec7rcnoWfMSPZykhuUTkkpRMdKBUN5jVXY2Cc4HsEy3m2tR9KpmDBs6JC7vJ6DAtfJdhyqPbRW8xceD",
  "key32": "4YptnRCzRkAgo3RoXdfapMvKVgXmRG7MDAaUBM57bqANaK1JtDLtjAFvp5rzHvCXpfyGemZ6Wm5rPHH5ywmZ69cb",
  "key33": "QE6NH5HKTTD1nVhpHW44C8sqss8mWWPiyfXjG4EcvkHsKba9Q7ciqoG2qGAbqfStzD265P7XsmCpPt2KXrSV4wr",
  "key34": "3JPuKWDQbFRWggX7dAVYPa6E3KsorJmVnPewVdfEhDzESxtsJ6QfLYwibubWvmQPaVCpmwDCv9bvPyo7DdHS8qhS",
  "key35": "AknPjJJq5U6QAufSy2frTj2PkTERFJyTyFcasVZwTJVqzbZb9YQop8kHe1geYDGuXZdwoo4MqKzzei5FsAckKX9",
  "key36": "z6cJue7aqycKQufwpmcDehFng39HDv6exkpwiQzi7VC1gpRgXzVMYZxNHAnhTmJsDkJg5odnmE9yCfZsxwtQG1b",
  "key37": "5E6tQ25tvb4cJ4k1JWgmS4369CubHA1GfbKQ9ztS8vHSfdfr4aEr3yUDPboGb74YXtTbDk3iTUqmpxinNwEZqaTW",
  "key38": "HTCw9bhwn24vRg78c9m9Y6GDNoKAa1aGdiYJAqagqjX3PdHznWGECTvcKLsVyRwFZ4T1TyHkQeE7GSHpCAJLVxp",
  "key39": "4KYE5csgYHKS82Q9SYetCTyJyGUGKfdTTqmH8CfYLgDmnet4Bk8MLdnKecbUxMbbUyQH4xeYJ1LpKq8omRMjbnKN",
  "key40": "5j8WmHnUvTo7J7fL9PXg7X4G6bBEgcWQhXsKPJXSCnudGzNmvyRBW5xKxoFFi8Qcs3YSdoTAeYUavDTuERwpXFaW",
  "key41": "4neCvVDPH2TivpunsKs6EGGFPgNxFr72NG1ut2ofurU5DMQjSwtHK5QeGidpnub4bjBpY3UseQxZRJBwNGHp7pa4",
  "key42": "4hFkNX17FTqLsMmm2AkMchuojcxMoDKy1b84VJxJSAvY3ZM3tpxzVpk8VQFi4Go9isEGrt6jbFmXBdjiJVi9X3dd",
  "key43": "bg58TcsgKccgkFpz86Jru6PgGfKkSfRvGzEXuM5XcfqfE62wz62tf4vgKvANBMQxXNFxsDTWfGQHwLttvJFMJc1",
  "key44": "X5kwTE2mEpZDh27wLZLvY5bWtKUcBEMp7v9C62CLiRBdbLeTAxUncVPPxnLPPiSC5dXmBvFwVtTzfG3mHBPvQja",
  "key45": "4eXYb36MeRBhdMHu9UgJckRwCw55xuaCgCdvG1cY7EMEhYmP5WubqAkKYox5Yx81bwujVRDecNikwRqC6Xbzi4g6",
  "key46": "5TphxrNicrKzBTtKHnT6JNZ557MRzLEzGHcwrQnTqp56wje7cL1gZwbw88FBKiFdhodMkXjnrtSJTMtq9sgn871z",
  "key47": "2iE2og3MEucxDndRv1UvKxb5637jyoKVTT493aQanQh3SdC6SqQ2exLoJTgQL6bFcPfPiAkGFHU3xQ9XHS5UG4Pj",
  "key48": "5P7kH5dHYRYN4L4EqHyotuhJp9WmcDgmoDSnMBW22AcJTXou3rsTU84zvm8goytkA4zxFgadM3rHWKDzsBVv2Zei"
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
