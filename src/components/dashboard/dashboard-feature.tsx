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
    "29DT127hTDpLnUY43Nju2uicNMEy6EFtbF6Viopn1aDB4Ap64ofCFngQTa8DMmnTgAtUNUFbnBRSxSu3Srtm64AP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7nkuenUPRB4gZHCJC7tXC5wK48n9Q358Kfp7QHwcF5xTzPgoqaCUsC7JeusabCuKwUjsrpruah8PUTCprcaxVxz",
  "key1": "2wMiBFihsud3Ut2Y2sS6qdGPT6LpiEw6p1uxqm8UX6aPLUdJhdL6uANqSNN8ngCoakyuMq2enMqCNJ3ocnQPbKdj",
  "key2": "4ErC4Fsex2pboWFXDuhLGop1erKgRQ7GrgCfaTQYMsaCgyuoY8ZXN8dUTJGnq3XzwiBjUWTF2yfRoWPb5KAGYK1u",
  "key3": "4Rcj9DWh8LroFfTF6bR4eiTpbki5jFDEVvLudQ4gmjPK1ZcBrzEdpkuS8GAsjPWHSLfG1WbzU4xxnvdFR5qZKGYV",
  "key4": "5YXBXop2Vqg9y6E8S4uMfLdTuAef6ySwEAZaKtpk4zUQdTbCYJkzzdk4WYfzJxfCU9az4rDf5tQi9Y433a79GrBB",
  "key5": "3qnaZdygLzDrQWBud4Eye2P49rCwa3qo1dhZR1PFeEZJaaHqSUUpMiXXRSfCTqDJo3rh4yj4xEBUwZzcEf2reZNM",
  "key6": "3vdA1EuQMMLbeohxDPL4q4p5o77HhmkJgS6AQGTrhj29LsxkWZkRLaX8c7vAnWj6EGCd1FuxtqZ9uaf3K171gYkF",
  "key7": "4L2NvstLtQWvLKXdW4XpzTsuj74uwEHTr4UJTDj9nKhcjzVLSJVQAtX7MDYkYJfDvBWQP1Y9oGL6KpPCeAApE4gF",
  "key8": "9F5p8qMdMWDsGojkpDAJLto6Xibh8yFWecyPULiMrAVYrdxSf14sToMLKkydnx35aBQogyUKX3wAvqx7XTGMrk1",
  "key9": "4nm7T9i4pVgCj3qMRMZeTyiHrQUfhpLb1Z2Ri6BsuFLdRaRr2KnaK5FF1wjBAedTjms4KGv9EEgWGJZcBT7LFdp7",
  "key10": "3aQYTdibqzHZbW4P8AcqJaBayB1rRvk5jQ9eVb5aFGKq4PSmu9Y5Yr1EHeEi6KLqZj5Scu5KJQXRCRHYDuFRApPg",
  "key11": "5s23nnh9EJEoNrvmFuwazmWj9UxyE7T338ysTqE1mAMyEbkCLtfoNec3Cyj9mf6vPbAiP9jyiWV5aB36aS885Abp",
  "key12": "dh438Y8F34zjoHEQMzAPtfLT1gDj2nwkhXhNipwcusZafPAhhEFRAKz69tgu54FKc4oyo4Z9HujRqrMkbg25DNu",
  "key13": "53WGDFTcs3dQGF2vmknVG7ewo9ULT2QxkBLTC4a5oZpFKLZMmnD9EDHvJ5WUixMjBVdrf631aiE4oJh9nFJFuSXB",
  "key14": "4dWFhWFevyKXemhLFpnsns3dMWr9YvYoFHYDGKnSh8oHLTvw1vaFgRnZSTLSJwKqCKYe1Yc3NpT8nHEVjk18Zci3",
  "key15": "2AVyuKkoXPjuDwobyHzjsNnaYbXwdNg4gWzEo47WjVUqNVzmSxPt43UQ2tFVKTc2BWmirWSTw5rJodLA4D16VyWT",
  "key16": "3V6EMk2pWYHWYP8TwJB6U6yDBiPi2pYHGHaQjyMLRMKpd4nZtMrPBwu59xWTmMKQJXvC38FuautwSfEtByyPMrV2",
  "key17": "5M4nqhp2YFSDqJRRb1ucc6i6huGjPQpnpgRJ7zJdaAjFr7xziG8wYTWbrXiHPytrt1Mvqf6da8V2fSMJ5n1pr6n6",
  "key18": "4x3CmtShFxec9Sob6iFhRbunnNWemKcerTyoKnRUgBimZ2gzi4jpKyxcLaZ5n3fxXpCP1HsZGcmc4cAmQXLRusr4",
  "key19": "2GBKD2qAHn7WDCj3qzB59A5GLwBQaFntQHLSae3mKTA47dHTA55g5rJeXJHTXdkwNdzafrLfw1oQhzpPJrPE1Qrd",
  "key20": "6N3gdrrnrXmkNjJtfthtvLd1XPDXK3bUuwNkXjgQAH88aWifSziTAmTBUE8f7vzCW36bjtPsQvw6gLinNXC2ogg",
  "key21": "2LhdcUBjz89BJN7AFiEqWUsoZraafnx8KJ8BjBtUrueZRnFsB5cfU5LtVrjvePLkEzM6ypdFe2YrXRGZiERgfvmr",
  "key22": "RuMe3TTFMprYMLMQsChuxUGv4qzbxp9FPRvaHAhi6Bs9uPj7ycR9toWmoVwDuUT9uMwvLRidZEX7BPFdXUFCVkF",
  "key23": "2a7N3gXpNtRcU7Fdk2txLrdkGWmQbLXbBj4nxhJALSt9mTaNv2Tq1Py5w87xbzJCZ9gAn3FWkr3RfqN7QNiX92aE",
  "key24": "4N5NkwDaEp4jzrkF1EpohDJiWcBAZVbhnACGBK8sqMgnhYBGaKpnzyRaVs4JxtN81tosFfuorAs5DuPpVjcmiHTh",
  "key25": "5kxPuz3KyH1quxAdEGD5ke9aCHhaHrJmXQ47j47WptGM7Mr1iHb83ffj1Re4k36nJVquYRfehxbHAvgDFh21F974",
  "key26": "QwhCrHMxCopwmT7p8ALsA798vtqhyAwQG9TEoUS8HM4pDYLV5DU3rePyD7QfDn6CzSvSGC3isD7wYj9QjY8Ukd2",
  "key27": "2bBUFmm9rXDuVfFsaBCSXU23xGeX8BGNKKKLWqNqduPBHSxJfY4J6r2e32GJPTRiibPTBKpSLPfipPcyPwFubw2j",
  "key28": "3UVvvzBo9F8eA2cMyrzc1nh9eibjKBZmuHVGKBZZwvhSqR2Evt1x65FN1vjvWBvkoapKK9mgzzUXWX6X3FstbPLE",
  "key29": "CgZ5BNRLTcmoV6nLVEXPST5g3QYkTqHNGsSdAVv7ADyZsbAf8YUaYYMLA5mziRhRxDkJPpsy5n9eGNmbnGwTiyD",
  "key30": "4A2QmZpZhFQzWhMa1Gjcsi7QR7tEwXfLHu5rJFBtcmzSVFBiAWH9R8UTXuPqUBPN6DHwvHzij8w9U9mQZbvj44fp",
  "key31": "Naz4fcCd51j2ZMYwQCWupj2t98e7Ypg3EfUbxE41JXFrbVbDCrRmFRPKJTAovC2tCJarfyH6K6DBaw2UcWWkEH7",
  "key32": "3sc75hm3Qy8Z22wj14T14fV9S2m9DACknHEqgjctdV5k3cTywsWgA8uiKEcwVweX6cMUR8unZNBTLWtf8X8pTfaD",
  "key33": "3YNNRoWfCeXVALXtZ1VCfakc5pbJA9H64zsjetcAyvFzT4wFKMWZ2LPGoKHi7Y2UuGwQrbLxBMRriuu4X5GDJmrP",
  "key34": "2z7c8fP3C8PY2ZTJEebsXZ8rsVYfJMbpe7ueU3GYwyucVuCor5z9Ra5tH2U7v192hjQrhcsHpY8hfU2z8dV64cLr",
  "key35": "C2NGoFZ1Br1isnnwBvTspJSWQrrRAnRhup5swBoJLjqHfbp165Xr54ZUb1cwxi7RxcE2NfuT8UJaUFneiJZsrRj",
  "key36": "5zSyKRVzV7tteVUYEdZNCfPZ2ArPhB7jgxTmuK7mxWXuyne1RjQaF1czJeXC4fK1oBMaGTTYENBfwk1Z2m6tHRjY",
  "key37": "4tH3g1iC7wFp76AuFbraziou9yTzFicZRXbGAmMj1MJXgZv3GfkJ3FdbW3uy737kTPPMtT9yTrQDL19659dUQJae",
  "key38": "5SKteJqW54GdpdHaM9xmrG67y89e3ajjFJcEFNyPdwzMwtpZVDRrahJUiUcRm8X4AuC7DsZGixnNZYt4xqmk2ehh",
  "key39": "GiwPdMrLjRsVMMr9iHWajCcaFUNNGDDWRRvHhV7EYtyd7ZQNnYkva7EY3spam8rAdrBDe7zoFEWe8SPBD1rDL9m",
  "key40": "XwkoXi5YDom9wTLxJzRo5WW1d1yseQHXp9o77AShGZuekMesVkAyYQwzB9KaZcktM9uXE3i1wwPR1oVvRgAdfiW",
  "key41": "2svmfhcEYSGRuzkf3TGq2gzMGdQzu1NKWm6EZT7mZfEUJibQyR24DYNCc6qN2XkqzSPrJ6X7ZWs5JutmyCucmCqM",
  "key42": "3PAbL7yh2DenN3XjSh3mVsUEf4BSfqTUDeDYh5nc5xNmvavnbAmXwmeSFztmGcefH1HsAvQNNjj76eFuC8cgs8qs",
  "key43": "5Y43jRGApoBPnEcsD2Nbp4bpxHn8xwRS4kG4DijVtyYDmCzdZCYNjEa41VApZiKwRcVk6McMohmgpgNjBmuBkr7w",
  "key44": "oiwYcKM1Ds4hMvuPB7YF4SfJQpP2X9TDAC4THoA4Sq8kbzVcf1ehGqHckhSNbwYoPKNMFvmkUwDmT9DJKvwyDXW"
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
