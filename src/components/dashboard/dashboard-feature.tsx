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
    "5xFydq9aRoRohAoGdxqciERgcXYoGCtTdAxrGNLng5siKPnAoxE1DcZY3vvLmjrC9WtuXkfumG1KVyEJdrY5rTaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9uih1asuWVRwZ9GpsAZY46siof685daPSVZZiLnnoT9zkYf2g8JY4hqcKFnWP4y7ssjMUdWf4Ba7P7AxURS4kW",
  "key1": "4VJgztgVkm3DgF2zaXhMqvbsXhXzYt65FptvXPLf8WL3Rqg8Z4MNzpEpNoLXPZW5M9NhbDPMzWWZLcUfda5HyUCM",
  "key2": "ejrMEhLz68r6nigndkxvhmJxpVdJrSdGhvKmD55Kke9a41YUwwXtHZDbmbu9mmzjpgaGhLY9mEhEGNv8xa7zLww",
  "key3": "5jqoJggMfbqiCZyGwehYCj8V3pvXjwSpE3qygQsVPHLNzx4Nevz4K18BKeMMMNb54M1NJDieuAnuzrk8YPmQt411",
  "key4": "d3PZmBgPcTtVSR9pcV4PG8wNEYckDsDe9oWk45u64NFTrhuzJ49gM7mFRZiPfyMGzGythcZw4EEFQczMhrTAQo2",
  "key5": "vxNBE948M1pQ6aSCTZ5jZVL7hnssFFebrnMdQc9ohxYzAgDq9jGv8q7B2yzBfEo8bRWG2LuEqRPA3p3hoBYZNY6",
  "key6": "3eLFcLhNH4A1aAfQMEGYrPvre7PMzdNQVETa6rTHcgm21XogPH1n46stDdNf1UTC7WceTWs4tGK76HV3P29gdLNB",
  "key7": "59dnFcCLsbfrjenzbQrg85SMek6Liab9kjQ5aPCbJHL8pHJ67su64TPTM7CHhXRRsgPoQ1JgeWS4ogAbSS9FWdDa",
  "key8": "59S98TWGje7UxeoBjQ6jmmKw1VRMHEvci46q6QVQDe9prDkaXLFT4Moxfcb1J9Sz4RiUqhdZMfZX86A6x3LxWUDo",
  "key9": "4M9uGGyf7J6Jv7vPUBqeha4VdNmooCEAvUQjMpcPj1F6PEXBSpii2RU5UZSCvsuTzz6KusyjefjYFU7SRweWwEyu",
  "key10": "2xHHRN2kvgRZjZiUgNKnSQyVSDtXQgtE3iWAddjZmvsqxRURpYvaw4jQeUeNDccSY7W6wfG9XbB1w9KBCtZfoQwR",
  "key11": "2m8shzQGu2uk3YRokmLJA4R8RAJWyugBy5ecRWVoDCS51cW1BRJVMmrMtiDALd9TLyu22UYLXJJcraxa8zf6AYoU",
  "key12": "KSjDL4RpxbY9Nq1viUznYpDfU7RSAexyLQPg6gLjMUVGfTBcPfSHVri4eP3LF5sP7ierLaSnnXeiLwtJLi4sco9",
  "key13": "1DYQjWbCZB8NowcbNMrF9rDRcuXrYhypeJ3X4ucoNUGBZCZVEMUS7Afh1srRCB7t9kYontcX8KmosYmgmxEGmMX",
  "key14": "2CccvSTEXrkX4X6E1RAJkuPZg39DhEQvvh2VXNvDPzdNnLP4FrVn1dPjmW4mjnV8kwY4dyfaFWVFigLD1atkQna6",
  "key15": "39SUT3sRevP2mJyrHUrvbyV865vm7KYqe9pQSe21qiokbXF1NSSvDvkmvZ4TPA9k1so7ffjEEZh4qoTJdTizkp7w",
  "key16": "ciUdJxZhrsZtAR4psdgW4psVXJv6atDm4GTQxx5GLJGfbAecKYzCGs2r4akCp4pPWsiaN8eeGKymCcLrPvTYRfu",
  "key17": "cdCxk15k3RehZsSydvDt62spF7UbpQNSN4Z6YjyctnZdmoJkpR92DaELD1TfsU7J683NN9x3hMuLKc6JwPviRx1",
  "key18": "28ev3SqLJKfVADKckemQ89SbkZwC2XwP8BYcjC9ENfnwiBkdWUb8faUbxaKkqHNWghzbRpiNPx9Uvijrrk21kHHu",
  "key19": "4ZtJNWNocx3wE7DeYjVJnhJKZxh9hYa7CM1FeTRLoACPjouQkxkYuCmggWfuxb2qzsksk7uaEpdq4UoyeLJr1sdA",
  "key20": "4hsYZf676Xv3NTAYDs8R4dwtAZ9ddV3Up3rHPxbMbLCfN4ZcpoHKQQJAUTDMHtnJsX5ee7HjqaUoNW9umzqcY61x",
  "key21": "2sq8jgJdu8GDJuHWqccCigR79HYLgP8j9KJGgf26x95QWpa51LyJXrFE2TWc4oLWpmN7hBHnwtTtHet5nL7eucEm",
  "key22": "5mqTjgCAChrpZ3cV1G8eZVNn2ABi6TWuavaGr3ZcBQrix4W2R9FZsXRWNLeUYXCaHW4DsMhi8PgxuWbuX1enARov",
  "key23": "487MqtF5FF1dgTGnTLk2aTFYVcepGLP3Rjg4CmDFGCAeFFQEWL3jkT2na5BQzqsEosHdB8fEYHQBXJPhkZWgbzSR",
  "key24": "32qEZjPjjZkdNUZQLeT7SUevB3vmryUXixMNWQZEkU5RrQLQ1pQMWBr53a8QLSR3hECjcEAU4jjAS3Lt7UPVeCMx",
  "key25": "5daM6encakyenzFvUG6oLt6Acdcbtsb6TspUkxgPxvpNb9ULRg8SD4NF1cbDAR31xQu2UNAjJ3TuFYdfRXhLnTG8",
  "key26": "Q2pgkDGJZvPMHabX8pWAZ8TMswrDuxdJrvCe6UaUTMuLkkjyJfM3dC4e1puLLczoUYJMLrTnqa5t2ZAzfiYm2Zw",
  "key27": "3YFHpiksnWxkpQtcYvGrHw7coRaB8W5qoXJ4Kupau3PwFumnqKWEK5fFnyPRMhQH46LaopQRssgmfN5oiGvD3TAH",
  "key28": "4NfXt816EGkxvZcKcxyJwRyquyz6rtR3rYj9s6CL7U5Y9JxnTaHdHsWx2ouG67SfY1nzWNNcLkNkzTDCT3C2MjRB",
  "key29": "3JDZJCsxn47xN15ozmAvYAhcd7UFBfJs7oFA24eey4zNkANUzQ122i5FcP9apYL7czh4F8YrwQRi3e8J1Dr6xNAH",
  "key30": "2AxUvRdKmRCWpFeUWckFPcViarH9bQp5YfcXoW8Wac4LFGNtq3K55RepoGeYoB2TmUrWbyuuR2wrakLTB5uKq5Ke",
  "key31": "4HB7Dj6vPb3qxUPa9LGMepdCQL2GcgZQaUqpkfZmGv8cu5RyJxwgYxtRjLv1Cr47u3miZWjyELxnSeYwSXBV2HaY",
  "key32": "2m6ZHkeyX8GMPAr1bc9736Y7B3KhLCrbwPiFLvTTyh5gyWUvca3NMkGsMDZ6B9XFMXnxQL3hQN7x9UgL9BDMgpbq",
  "key33": "5qedcNwGWkynk6yyP3YXtrJ4mAHCpFaxyWNE5LdLjmhNp57ikjQTBoW6MEP1o6Zj57wbRQ4ToWBVQSM3nwBhXkLE",
  "key34": "5ehSVqyMqzStPVv7y1Pt6syC3GcyuiuK9pBATh2LR64ctFL5DpbkxTx4NcVktKXMtfWWzrC2EMrBstrb4x5xkqV6",
  "key35": "4JM6EsLbCHdXBgsUSYJf6m8VURK3QQiP8eepkjR3Ar7hEFsVQuXCS8mSgYCva6MbBbKw23BTXGjHrT7KLyCW4XKJ",
  "key36": "rrWH4G7mjKB5V4VHNh1tDEYEbKfdqkeFL7obFrB4bQVNu8tcjw1e9foNzSD6xTpGioY4Tq6FsbCTyDPKMdqMcyJ",
  "key37": "Ee6iYudkWcaGzcS3sMw2q2c6oGwwNakKenbw4ydH5DffJTHsESMEWgqUMfnP53wENoVZkJgt3BtFvLNxK1HDx83",
  "key38": "5SKxM8sa7Hz73DoL9sEvM8QDNYsakwytns1673Ur3gsCqTNsJyrXeqJJgJdVWcfpqyg8GbXh6rv6W4suXmwdY2ox",
  "key39": "5ZqRNszUWDsKwW7vpZL3gzzPy1kgywHSFXPXm8Y4hsc47pWDxZCXN6D5xr2CCzKa14YACo5MpQCbpsKjje1yTpAu",
  "key40": "5q7Ao1zZ8Q6Vq8gJYWKExE6fYikGoy8wDHfwEdJdDEjA8KJwP8sjeqxpcEybi7vK2dXyjKzA27YiYnsAiTFyknan",
  "key41": "w7knS9D2KviKHg8B7Wi2tDCu47yZ4RfUBHxtic9XsZjE24XrFaNKhP17eHF7U3ftJ2yoBos3N8Mh9bmBVphVVsG",
  "key42": "4NQpu3Fbv7EUWsMiSFtWCAHsyZ78rM9oeYTXV3YJSwMJu44DkF1LWhvgAZGCZhs35DddLDK5pHVGcjtYRaDCE7Fb",
  "key43": "4E75c5KfpHeErgt8vakg4Ys13dvAFFVDdTxbrYHbDaZWZqbSoCKtwTncSRMMDW5sTiAwJfWCNBoDSQqWJwVUXEmw",
  "key44": "wkdaYUGGgHvuD8txUXNPYNoZdsoAYpiKq49CvGQSYtrPeke9KtCNUHF3XZwvfQQ2CLacV7QZV9Gyxrwobmm9tyc",
  "key45": "5N9BvTJELHdta2jGp6qt2j2w92i6HHdTxKP12VJAwKyw7qZb4BNyFnCidoAaSJdtwtcicN1U4QbVb4iviYq5sfDB",
  "key46": "27RbwP13tZtL9rZaSNb8LKX6j5Fh3SKLcFyatJZY5pWzix4rmAVmoZ8RzeteX9is5ivnYYivHV5WhhgV4JPBPM5i",
  "key47": "2D2xLDHuxHB7qS4CaunuzEj8RnVy2gyWdKjAkxJretr8zrbBuwt9v6FVMRnwqgW9BHv9Dfrss6xey6p5rvRBmu9F"
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
