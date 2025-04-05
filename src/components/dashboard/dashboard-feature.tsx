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
    "4Mt2DEj6UH3paZcG2D9nkpjgPZ9VucU2ZS9SYELjNZMm6JXUe9hMZs8qg8jNdHMLi4LMzafuVhdTkLvjfeeff72V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AE8UjixA4QapCpRcAYtZBzJ7buGS2fAGwtrSGoArXpyXTjsXjQBVevkphyKWpagsWdXt1b4a5BRvjgiw4zpbpop",
  "key1": "2UW9cTchmvJ5rRvtXayaAZVDCH3P3ZxXdaZdyYmb5sRkuHvyx89etTdUzMMKcTyY8doMG4SJjfjCdZ8ogVc9g6Dw",
  "key2": "2tWbztM7XQAD8Cb4HnWFMJaXr4zByUpykrTQnxSXZWspDxavCNKPe4wMR5s8aRc2uKLtNjSh37GQgYqiecR7Kvoc",
  "key3": "5gbiupx9LdHh5vgxdjgkYTegAzxFbuQGduoTDjyGEV1tnAtdHfRxnk6R8M9VUD9NVP3Ps2XW6UiU2yHitY5LhXY1",
  "key4": "36c16UnCTCXQcrFrZDfPDQwhYy8raqKNcRYT9A2jjoEQXbDimnS9xZR8dfGW5JBw2jp5qnUv3V686awM8HYGSF1j",
  "key5": "5UqVuZJPv38r5QDmfmrTN3Pa1aF9Lfd5yEgy977JYTmHeWXPyXKog5veQPvziVLTafhqaZqFWw9MN3wG1pQk2HFx",
  "key6": "53NvtjzWv7Z8Wg7k2b5BcG1aphj72FDLjEp5vaajs4f9P3S82fBkUJ95wz6hdFUHbas9cupEYrpZrEfFVZdjSrkP",
  "key7": "5Qs9jeHJGbmqr5ywtRvpoTRXDr8ittdhosjjP5dUzqyc2xTKbpKZ83vjGkDF1CGDFfvXBT1sJdrqkrgB7ADymsrp",
  "key8": "3oUJwCe5YEzmQZeDk8qJjzWvZzWxnaWscy9js7f3cteyBj7b1Xg22YjyWdWfDcfKdVBdbPPgqyfWhXnZPVf59zDF",
  "key9": "3oJiEnz1ChvSyGPBd1Bw6LtzY1BGxLbWPKq8oTHt1QTs8jhy2WRSKdC72M68hEKmHQdK2U75dSQPEw7H3f2qmduq",
  "key10": "RJmNoddCuYBzyE4tU9R7CMATuwZn14Daryg2hTi89AepUecSk4QP6SgGGidB26fHLv3374fVtspFXscrg5qYpLs",
  "key11": "4hq8XhzvJdNcGCSxSZhSLNAiQFh34uof86khBDo7fHVqsWLdJnZgx3PqvBuFBeLpNxjDLekA8txCWSAScd4RZqN1",
  "key12": "5HTKMPyqZ4iAyittsJ8eG9SGEGJsctyzDeeV8AbpLJfMvQBFqXfEMACwxKY6xQNSsx7bmXMUWJPJi46SxUsnR5H8",
  "key13": "3tBRNiVTf4qURy5wFgFhVcnKQPAc5FJH7hhshFnFnMen4oZw1vtEfC9yMZ5Fiy2e6dfvPbtxXvZD7R3uzTsbup2M",
  "key14": "34AAqUxEpq29bE2zt9XCdbPQjeeVArbW1RNdXp7ac3CPcGCMqPk9Dohh449Dmxk9hamFiSwwXoUyt3iWceVETMEd",
  "key15": "48DxMFREsCttVT6YooPAihxJu2NTwPWiZWLoEnxJqNuARFLV5cCM3DZL9ikUtysLD4AW33366GcsHq3BCJsXT5Ke",
  "key16": "3GUGCjBw5a8PsFY74bwgogk33HjGbgHCJNz23Mn94sEdRmWeJyPjtCUBEam6Lx5eYLwCBgYy6HDyQjVJVGZMiQLS",
  "key17": "2unXn8vUffhQqVi58HaHcsTKGFmvyyxhyJATvPmhqLfqVkWMPmRGu7uyV1pxonjGe7uVdxcu445AYVeoZHM4hiCt",
  "key18": "63NvB8EYPEQuww3ui53WN9ZZfwn6EzRMxRPNuJeocEsQZYwvVWNSSMMo8GMDmfsyGDZmGZ1it5oqoZnBikKpkp6K",
  "key19": "3jgAFGMJqX7okDoU3jNNsxNq8GzRK34i6WXmgtzsjQpWX7u5ob3pKwXTYoLYhm7FFYxanCkTr45zY9yF1sQuNdNE",
  "key20": "3Tx2k4iFNejX8PBid6YLJrE8gTAr83R7JD2GxjA26u66FtdKuWkEP6qBg2PZqiahqoL4uWPJbtJqKrVJmMqbAbMy",
  "key21": "DFvSc8Mt95n3KmdyLRXDVhLDtyhbfcnwfnj9DPyRfvfuPqMfdSQzEyoM95k2xX3pkd5gn8DfzL9QSSKp2y2nDVn",
  "key22": "58mqMb6V7EKZgjFnhtDzKUwd2tq4bTgvgywnWwSSXGWubdX1rGrHzCTsUcQHGryBGUPSrtwKHkoKYiMuuNH13myG",
  "key23": "4Pjrh4Px6PQqNbQhvZTfw8sAq8jLSGFjnPjoUA7Ktgj3bZexwRtNHQ2FztKiztPEZhXdDDbfzbDeZ93DhH1GtR3n",
  "key24": "4fRhZ8tSsbDEujsCe1KUHSTYZFkPuGfAQgBqPSerjhDsSMsD5jyjuCro9RbRBWcoNxqezQQ54oxZyEKKp2rw8681",
  "key25": "4y9m3NLc7RSqRe5KknHxV1G3srn9Fq1bYhHK1ufywpp1hxgexBjLGDYakwVBUKmX6TnxSQecBwYfxKgFRuxLi9z4",
  "key26": "91kw2Tp4WAzPnY4mFBkbpaRYw3LTcDThWVmfvebycHjq2V6Siv5gA8yBqDwW6N65JvFsRpHqMNbadBdSnUKUrSA",
  "key27": "5aQAVNXQxoZkff1esAEKFbniYQqorCWGuq3zuAvi9iucmR1okRFv15vk6cbpt9rNMCbvXikNLNyAusXyHfbKPwUo",
  "key28": "4EuB1zBnGvV8kCLoyFwAS7VWZKaUeBaCTqMgq4PTvrmqDHs3nUr7tej6aPCDAZFaTVJnNfpbKQQZG6yBzPGZHtKo",
  "key29": "2x1cpmXCAmisyeVS3z3HEj3AvraCteAeubSPQeQb8QF9eFhwVCCtooWDfejPyWimFhpQFzguKmuSvpR59aXeTJQu",
  "key30": "5pWRqosP394k1t2oWtHqikB4qUsXinFLURSgmLRqC8Je9xdMAqDahWYcckxwRT86aBX7PUVRRf23RUe7pQkqsLvt",
  "key31": "5r8Uf3rNBu3zu6AyUneM2gzjZeQBjtfg6ML9gMSHFvA3TnNSLGZQpa9hHBqrqpkKt9xJEeo7GFD8aVNqSTFuviBm",
  "key32": "58BgfxrdDHXpcohAyKk1XiHQS77x79kb6pq4uzsk8GYFQMuxKpvzDDZwwWtULdDaS79AgG7GASa52SoTvPj6tPLt",
  "key33": "5kenJtLGqwnohjsuuqKMRh3tWwVoYCZPotcUtdNz9Rh9FpYXnvbzp1v4dDxLc9JLWCvKAamTFU61Aw8EZCUs72jJ",
  "key34": "3wGmHFE3B8sMUiAJ3a2shqukTvVuuYfR3X3hW3DL6TkEdz89EVz7zxYaDjJsuA869gSnToLvSXE3wAEkaRbfoY1M",
  "key35": "2fFAjfGJ6Kxr2xxMwZ386jG2e65GS2GC4jrvapDgbbyiFainmRVmshg7PxcT5bAEe6gg7ykTVrh4PQ2U8REkUJDQ",
  "key36": "3s7wSt4HXYn2A7d11rEUYTCY8foQdFyUHFbvUL7dhLbNTe1GtTdDY13LnLS8PUUrztYoKhFbV2rSdjS5LPDqpyZh",
  "key37": "iKxEWTTTBZpf31zkCa8Y3eX32j99m4KtqY1qC6MAvkqXuEdDVP3ztniVFyviK8MVTBGngBVnck76BsoBk7LbNtP",
  "key38": "5DLiV8V2QswfQ6j4V1T5D9awYe551A9tFxnmAkT3Z38Fk694QoUc5siPjnG94Y5Rj7q3Dn3roti3eXJ4HYdKAPMW",
  "key39": "Jbr33JNaU7WvNUB8UTeqHWHc7yKUS4owEbTxaik7jTDm1kaV1zLaducNxSH85u5UpnMVzr7cwfcdx4RmLwWbkgh",
  "key40": "Y8BzL1AZLNJgQCs72WmEkUUFYv8tWB1MoiNHTH9vaSt7chp3j7aH7u3F91ScqxhtZz68h9cSG4niqUQHErkQa79",
  "key41": "4dsY3bRrgEbvuuQky8JozYRtzDxZxuQbs225QQYYEFbaSyrrfB4aPxd3WqqRVjjaxBAyBHtLgBJr5xpSXfkmTBUJ",
  "key42": "3u1VQ7uRaNR4N5DkQvmdysWMoM2kPAWRGPTJdSX3vQgjHH1QE9unXxTR5zXZtMgnE6KNwjKcJwUGG1GwBV7oNRRK",
  "key43": "3uCkVDnatLCPsjDqgE7EyVHKTBRjizeyrKNdaCAhcai772wGWN32DqXKuqy8vpfgAD61jdjvVR2zaxuGBSVGerCF",
  "key44": "VnzczRzrGAPmmqBpjbea99NMzp8T6CP6ehAAdTiJM37RHYXpbhDLe7aQmRAgpBGLZ2rWWbaVPhGosN4n3zccrua"
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
