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
    "5T8UbeayeBySSQjXZc4RZ3SpzGEDMUx48Ld22qo6zw85pHcAieEFTpmjScNjuppYrzUqVq2a5zpSJ8jNvAkAite9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27x5ZmxKof7eyT1Hsk95PXtZqptqh3buPugnBjsSFZvk9mrhEhMsqYuRQo8B14gJ9XRE5rRYFgFsy5awA9Qbp4sz",
  "key1": "63KDvAckchGJQrtKuaxfeaYzaKas5gGBe5Ycfz9eR4VJG18iDHJYGLFJyWRtUKzgVhRADPGXr99aeP8irzjvAWTk",
  "key2": "5QFoqnS6P7NUa3LSY9RBQ5b45BxGP9AZH9TRqZvjKtGKUSe7iSp7gbqDERfozatsYomcC4gEBRASedRCjpdisEjt",
  "key3": "SGiyqFW3HCub6RFvWwkc8FssyyhZPEEJZutr4ADkbzXxxsUqZhg7Qj8hptFYK2YoQSp2Sn3xXrBxRvqUBeCiA2Z",
  "key4": "4CAynkaWEHot2gSzNyMLKWeTgu41RjECQ5M8XmexxFe6sAovjdmawmqceZyn8ToZ68jMysbkwYS8HJMwzHBEo3Vw",
  "key5": "4rXLbkRvQXvHu51PiQaFSLMBG33ezrqFibT7oTumnpMAp53Z1HrduwLTN2wYBSaHiaEvZ1M6UeZbkkvBPRC7EQnp",
  "key6": "KQqE4LGvED16uoAWq8mxR6fzcFSyn2P3tZNZzN2zSNGMetp2rxdF25gLrdtR2ePBpzGfmoF9XWXbC4whWHp5ea1",
  "key7": "4uGUGNquVE98HPxUpgBFrEG3uvn5oYXfXqNGF5aN1eqPhbBfNE5Fi3Rb8VKT3WpxsqVGMGVwKeP3yuRQBXhYq1kp",
  "key8": "5u937PzmEpb9HFhQf3kAYqkf5jF3sbUwkv98Msffku5NASADQNg2kdzCxwDEhBGLyY4K5ziiQnuSNbHcxTP4bhy7",
  "key9": "3YmvVSe3r3KqF4LjHLCXa8mXrehiRVZXTxkRqN2XBpKNjrcV77eTKhn1kpMGTWXE653mL3tRH7Jcp7C7fcKVmwHY",
  "key10": "4Yn5Sn6fWUrLSB6kKk7sZig2gqqj3mMxptWdBpazyypEYeFmDvt2ic5NjFkQNkNe8iWdnXKNNZZGrxTTbiHdWN3v",
  "key11": "46wztoqJCVYytoE6v5CDcZAgzyFati9akiHWEhZhbPsjJ6NQPLFnLze2CctZ3rLRef57JPVg7jvdS15bMqrn7Kq1",
  "key12": "38bVxQBwXos213CFhSJqkW5GbYZQcf5656DeagGw9KQpMM64bedNUwN5rRdUXmZuMA8SaE6pMLgv76UDgRkn6yzB",
  "key13": "2HNUc4ayYcavRHLddZPLzPSgw1MPdJSykwvQHsZh5CkzC4XmEsCRwGGEceNP3MAFaUWDC7NzXzsqQsucy4qELLpH",
  "key14": "5hMjqkFZxNtWocbU64MGrtYWkSqVeVXFd8Tv5iY3jULfD2G7mQ8Z4QVFj2AFvowD6XxkHTwpbp5FBETz9KmaSDH7",
  "key15": "2KLpEKXvWdZL37Jp2N4YegcAAhN3Vjeq5d2U6imWvCjWoxLzxnPHn8jNHBwN2zkjZvukte2xjrVQbTwvu1k6GJh3",
  "key16": "5MxwNBDXHHjzj9uTcnuEsz7g566ovzWcC5GkSz47YvaWemUrGgqyByZMWWZdEoMEY4SxzfrXYfwWWSafxnjVZ7F2",
  "key17": "3mqbrGxs4V22rVjkY8AULYroA3fhhNuCFtLW7rvm1Laf3SY8eEsavhnsZLCiEeFqpbiz3jVamoqAe8XQ2pgKZBUN",
  "key18": "62H5h4eAmYTVFAGZLw38fWj79UqampqsCxkqRY6Z426ycemqRQ1Qmw2XEhft1F4U3EjDTuRsXWa8t4E7oFvGujm7",
  "key19": "3DU9DxbUEHt2Huy4bUao7v9RceDsf8iArKUupabKk28dgZfGXNqvcfHviU8CeezFqtWafUoPrqgbQKdsaW2ynh2G",
  "key20": "4XXmFStYdbWpgZFpRbyTnqiZ9pdDEZ5v1R2f5TJ1HnVJL67rUTsyRsUQUDYt2thXGT5j7o34ktjZpccqbC8WxsgS",
  "key21": "3Xteq16NkRYJVMgyefXdA1r946PzoZcuCAMTJDYt38qFakG43UyjAy19FCdm83sVpmifjUTrqsytvPVwsQuTeo39",
  "key22": "2UETGGKt5XZyTk9oKPtnt5nvC29h2GyyMNMffBgFKU6XGktkVrURFwZuddEdw4k8SHD11hRTKjXEyx1R3oTWFi5",
  "key23": "3N3sYTfbAKf6mmhf3ewgdqJLHk5mp9m1qz6BME72BuGDAgnJfofLAVVYszwhyDgN4adoawF2tqfLgsRqii9nREBi",
  "key24": "3JojbFbCG6CVry6Yhpk2FPV2vN6A1gs7RT1iEMY716rMbJ5vUdqNqxSA874BvfmaynJQUspk4A3oWnQ9W8CSrAFt",
  "key25": "3qRp31m82hSQYrMXTa3ysEYgRqeTJnp7sR2BTDz7UjDjEWkYLCEmgjXEtAL2xfEX63AAFMXXKo6SNacseMqgCCSp",
  "key26": "4Eo522pshay847dqrh2aLVDdQTAA321x9JqYuZjtS9my63Jpa4uEBxH4yJxH3p1Q3qJFXboT2CxyVJGVfUEXrpvt",
  "key27": "GUWhwVxLHduHzrPBJ3DbKky9bUEHaqHiEkh2NGTuczBi7mvhCMi4SagwPwwvpobnmzz6tmN8oKvAuW7b6kuNDwQ",
  "key28": "n37VE2RD1UJBPNbsuy383uTZuKUbWLUw1KwwQxMC3JRMgfyhGNaCJwMgWgk9c2ZozpHfnMXpnzgDjzDP9moRqpC",
  "key29": "qtZU59FK8e5MRagDWfCA24ppDBtFemtBoCJHhdehPa42uBuFco3cnp5mVePEL4k1eN6rPJYGNkm3gto5yScXJjP",
  "key30": "4NrH3hhpABghfLnjbUMZmyaanmMqGxQKpPdLkdNsRyaoB9vbNwgDjVhwnqzFywD7Adc3dQD8Df5qwNe6MziNmVTA",
  "key31": "4LoyFsViiyKkuKhAjENb5U6r5EPXShYgN2deBwY6n44RzhkpgNVrgDwJtzXNJjGMfT2hNykaQTyxHg8A9eN2nmb8",
  "key32": "3JPDRvsH7txg3BcQQyjKC7cPVyRVc8aB9cUVFXfP4Ts2U6TbUa7AR2TkiNuDkbGCPVxu2vgTP3sQGpkb3EHK6jBo",
  "key33": "4rseBwMAyJEKHrXBMNxP8FnsCjGovGRYHoAtxs3uANciJEfmLytY6vRb6uvMLRUsAjvNdtwKPrHxYV6aqGGigUDP",
  "key34": "3rroMLuTemVGjWY6vQLTs1T6SmGSaHpSxS7CDoj2i2a8bUksFpWugRtn7yN4GkSkopsRkBsTs4fJnwDvdirVBV4j",
  "key35": "xQ2fBrBzLhWr4QrKkz91FxhcKB5gsQvXh7TQyhq4Q7eNMvsDxsua49EBQUq5jnZGp8mVCNL5hVyXc1vC3kJXESp",
  "key36": "5r519h1MtKenDvxzcq3wnHEUgev3EgMBy91bBRizayfY2Qn2vkmA5UAtKLTKYBD3csJ3jt6RZmubKyXUkERAJF3x",
  "key37": "ZuR9t6V5B9Qrd7y5z18KqYsgyneoyBzgr8trvAnUxMK2TfTZoeH6g7cjQ9aMnLw7BgUAJFUPkCCqso9ZgzpD5QR",
  "key38": "4wcXn6sqKexP3FrTgzLmjU1eSh2Ef3a5J84n1qJPnwYhsdk6ytSLKq3HrCkBFzyDmui4DCnMbaCZA57Y2zaws6mi"
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
