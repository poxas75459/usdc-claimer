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
    "3C84usuCr8VFwa88MeedHMAHm3vWm3GJ4CS7FZR6ndiKC6AAXdFents1mrtAqJBTeU7BcZX9jJQqZuJR4YpbHDsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57MaeoP3yrb4fo4zp723UkXi1kPQXyJkQuxrw86aZtfy4ikCxdVRmkzSdaTe46jooA1CSWKj61mmGoegcCi16Sk4",
  "key1": "4Hac8oJpxv4szmXoiuctQRJDd2Wqh2aUNoAMtkiybKPSXSwJNBkz3ZW3ZsL5Geq8YRV6aZZLrQ1f6Cfc9Zj4YaWu",
  "key2": "242wCAs75Bd6SWZMC5MTQamKEiRNhntPWQjZRi22WfchkffBBbkACzSAbUf6UcbEGMUgAn4RqkcLgMzJGyjCdMvW",
  "key3": "6BvZiRFwouWHAbjhEU9t4oCdvvdT1cvDGs1dNtxSXzeJZqL5nJyfYzWNohNLCwGEqu722omsNZKscxYSRBSfisz",
  "key4": "5jvxLHP3ZH3JKQ2xjaR7vbVvQFXpYJJAiRfTUVJCfWpveikewTQV6KDC5mBEbthjgyRhoBzKw5C3sJfYxeMRbfVj",
  "key5": "3j2UNKrckQiv83yvek1WhrFnymdBdXTWSb196MkTwpj9jR34DQpgJH7UwUSnsXJfz5HpgksFfT2nqM4BGqgWx2BN",
  "key6": "vLounDrdV2J1wNEKLZ1G6iqtSwnvZ4F4jt9V53pLRtav7KebbYTRoZb8EM4T4iByL3Xvo5Bj8b5WkH74sptLpSn",
  "key7": "5CYj4fMKPDSEYkkvDvBAmBmQAwTyYfUUxvirKZsBZvmT1sxjWnPfmTUBifTPARFAtXvCTbJ6uYtBK1b8JSfhqAJx",
  "key8": "3WSf5XsrCzQBZhFGd7hYg9MxZZ8xHE1jRtVvEbJfh1vg4KS2WfwQnE9Pba8hZ46gHQnYun21iApM7PejtebyFzdZ",
  "key9": "cP1Wm7dkUrRuHynYovvhq7NEV7vWPGNG31TbmL9wpQg3BpccF9kGn2auz6PNJZ7A9xWgBtR3fzEs8sxySLmYEa9",
  "key10": "3HhF7RMqMZ65PfqoMzajvhDb76XzBkLrCgAujiUxgYA54Y1BwrkPvjJjD7SmDZayuGGyJDkMZd5FTMS27nRNJ4Yw",
  "key11": "5rhgKn8KEPeJAejmid6rEvwHPoJXathS8SkDttPYeqy92s1yrCiZsfP6NMoLrC65wwU8uZL8ThpWsYfvdoMSZ1yZ",
  "key12": "2CfMXoG9ag9n8rCJutTokGutbegxoA4UTaQvTuFAP5bZGZZzzvWHSsTBMmAjCGwg4aM1BNdHM8y5MBiGVJ7b66K4",
  "key13": "3MVBFxUz3NzW9EWyDAMKmvnXatA9ugAkuzFXVjcto2x9zm2EzMCGRcVigPmdyonqpPddaGENqutSoPPn2F6hWecp",
  "key14": "5JKGrzWnh4XhFemFQXR2QPbFKHahxvcs1YaPp5By5GfibdqMNwRhmvx2kvPG86aCc7UTmHzLM3L2KsKowTo8GXhk",
  "key15": "94WjqhWRsMWMuNcEDD81VR45crF8X7bnTwgYZeWR3sA1bTVZT8oQWPnhsHsTtHwXqmiXaFNrqui7Tv9dBKupStg",
  "key16": "5sxrJxNDpxJDKXJ18MGUpWBUcn8sXc5c2hsBi1mg6EFoizsJaBE1V1J6qfWrLWVbTfg5Jx4ZqrYgCeCFsPQp2AMh",
  "key17": "3S1YtDtB4tSWbwoqciY8fL1BuNm4gsqMS9tC11aphSXdiWQ9Z9d5dXEmc71TksCHQpgNE83EsKZYC4em3L4neSY",
  "key18": "49Wt5ZVhe4JWtXDUscz6BCtuepp6Pqs5jqDTBbo3BbyV1ypyQ5YLLKLBti6BUtibPEd9e5WvZtkD3VavXphbbmyE",
  "key19": "2gfcAaq4gtorVjLtMokSh71pbjyQZRJFhKSgv7vbeLp8qip48MKUQKpmRb2a2ugnLzJS2nHJ9L3aSp3pqDTxWVjC",
  "key20": "6dtgjL1Bvp9jQHcsfrjT3NUijvWJdnHiMWdScrrgt1hRH4JXdgaGECLeW1u3K7A3EbjM4GxVK6EBvcK853QrACy",
  "key21": "21NToq1tDUNSNZC7jb4RtXVW2nzDWUeefagUryB4wTzNYTWuAnUHV8jcwRPcVoGnWtGdftnSpo6TqPTk7F74CFJL",
  "key22": "38ertp4p91epU3vMdEfPi4MNLQ4bj8heWjhwFwRCiEu5LbSVRxLGFW4AEWgJDddAyBCHmysatqByFFMBPnuyttvW",
  "key23": "5gghBQjx1DQURY83J3oJM6RXKWRtrU8bbcyyosh36u2Dcf8b9t4gr7qvQGbG8HHbXfRAbibovMPDRss5hJwJXZir",
  "key24": "2pBv7xbBUfP4u9DDgqb3zYbKUSDjrpeHfEELHpy14FA8pCTYCsWGgEU7gtdLiaGJGCHKbwQ5QNVBDR8hfSTmPsfQ",
  "key25": "5FrFAZt9rUaM8otWyjimN9gf6yGZDhFmVoydP9fuFtZxbtq6Z5qRPuZHvuM8PrYL5GgHWUGrPTALwsuckgDQbXbo",
  "key26": "SkwYRCRp8RFvdo8NxUJ5UsJbrvToHxWjMFppXQTadgLKBAw2FRpPYnyU8pJVUnZofszPYU1qeRw5Y3N42xqAWBa",
  "key27": "nqHvp8qertC3vBepCsYL48GYGcsKjzdNsXBggYVNdbaWfxSUyZ1agKachLJE6kC5abY2VxpMEbT7UoheZBMgfFi",
  "key28": "3AgM4rdLPBrjnkmH8JuBHxNgfk4PXdB9MUAXW1DqGta4Hhc2JRNnWHNicdEhMhCQf6uRodPSgFUmd9CUiAPT2WiD",
  "key29": "3UJkmey7YzBzZRDVrsipY6GeDLj4tSu8TxCcgx5wuYB5W2jBRb2GtKEh65U3iPPse5ZNnrSiYLuQdseYw6RavgAw",
  "key30": "pSg2vhk1tPksqqKy8QrmyVpeSur6NhmsFX77gx8x6CtjbgbA1eVviBRxMDVzPtTFXm9ngJAQX9FvoY8TuJQV66W",
  "key31": "4aY3ZRMk6pF4PwrqX3R44F7e2ufgZzqjXXfn3zAYomsGbL4L9oGQsss4gkMbxxya1DkQzyCRMcS4Xfe5GhdeW9oG",
  "key32": "3ofn9KmYbpoMxur2xn5yiVa2VnBbabneP7Nr2vPBeTHBnWmT1sM7odT3m6EPz97ZkN4USB4kxzR8dJfRypFFDLMR",
  "key33": "4kGDmfWJuzNGQyZn7dteUHNXLShgDnHKeKoAQSNp1wyHKKunyUJgveH7YZE8jo8MJyNFu3e4tkh9vSdH3FqBRhy5",
  "key34": "4qt1sLwYom4jDWJ16wY2MTQVaj2g2FNq8keMn3dVYf5WW2C6FfEYthyAGuboVDKUzhnduWZvJCKVXLoAySgDvqtX",
  "key35": "xm5vESmf2jBAjf421HSSRYwPd2YPhAwHkraWHWEE5Yg1JaeeE2TmMMLeAodSmLeSGRBcTN9FH75U5z5NNxSXk8Z",
  "key36": "3MNKRyHAdSkLox6ZjEP2ovTwN5CKtrLogNKp8Qbd679EPszoWd3gsWDeaoUcRpGL7S1fbrn6SgHc5RLDo2BsuZFF",
  "key37": "5MTjrZunDy8r2ZARtQ1kThBN5pAxwvSHMz1M7Wr34hZG5EY35upwoFdK68xzZWHXi4x9oJiEFwvbV8vFwsbxJxxq",
  "key38": "28UJ3ZVZtDVsDtzJY2RaFziaqwAd7PDY9aHXuJdGNTmx9azuNDvMN3bu1SoiE7TqqrsAX3MczbL6cXyzZQQc74PR",
  "key39": "5mvrEhdor5HjhmVeTsAdp2EHP4wnd1jz9a1YEpWjFyyrYSBjTCfkJTHRjrg2NPLPKVvmU8S7KDUsGNYWNrgaN2kR",
  "key40": "3kYmGqAp7upHDiGB712T3PMadVZE9bBPWpkc9ruPdPnvuXpUZXdLg1o6fpCtY5s8gFsXAdtjQQGNLGgb4iaAuT8T",
  "key41": "5EpWmZ2CBjN9sMPDwBRNZ5DEkYkpbsV4NFG8NZANkTTbyDVWzwVA2JBbUb2nr7RpJ9pJgySD2LjvxywZY4GKrm1B",
  "key42": "2Sb2pE8a3WMCM9pmyG4GhwqPPCPnAdVsKX8JqGfohMGE7f97vNWvUDyNz8fM1AoUtKaeTc8ACeX6JFHngJ3kJnZp",
  "key43": "2xB29Z1KV9LLXy87ViBPip3QGAxLFq19Qnboa7sE52NTmvDWgrXNTpTzJeZ8tait2U1Pjh2TCLmdsUb4hyhhEMNM",
  "key44": "5KJVn5jwq8FwKeQNXocBhQZbKYNr9AJUfRvZhvJuX5z6FYRQPRhzgV74VB4yztAEWkRNu1eQgYNWhAEP7fW2CdUJ",
  "key45": "4QxQkz9EsT5xAAsvV4RYtmYFadhX4GqSGwYG5EYzfYDHCY67oumoc5uvWVJCm6cBacwkRLXAvhNxktyArGpRyhLP",
  "key46": "KcBbPm944jGgfCYd8kz53btTJwEYq5XWS1JnauuvVCjq5f768c7oeYqyJ1A7zEmmVYCytKixKRpBfKoUWR5RqyN",
  "key47": "cdPzG81MkwwvLAk5urzJkTpmKvTj65GWJH3SCr2bQCn7VamY6gWDpXJBLd55udtgDAnewMneBFNTnmzktK6ZwdU",
  "key48": "35vSrJazvSDKo7cdyqdXmLpF6n95oM8UwJTCtgXyQkVWUjsw9SPJ11Hr2tumtJE7vcYp51ou5fUjG8L6EME4YVxE"
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
