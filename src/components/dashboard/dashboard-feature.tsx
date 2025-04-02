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
    "2ZmsMiGGVcCwhSAAZ9gP5VtWjZX7K2fUPhjcJPt1cKCXBxaLkBN28ZfFxBsNiNWnjrQxVuWGuLjZWUxRSES8XoA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8qaDCwRioRqV27FqwLo5VLbDhqwc9XYz1MWnX6DCghwj2zQiv7m4VXGhA1dyUhgicEkMmsF39jMjZKeqxgVc8e",
  "key1": "2GKMzd8zxrNJDPMLwiseJwx4UhVfkW1238RKvo37vS5Hoi3s8jGK5ox5z8zJ7U6JXSZ6VMGsrmwJUggEn72PodeZ",
  "key2": "4DdkPnAPrxV2w91zvYaNSmFyYNGhB6ZpP9aQyDP7JQG1UY2QkYbzkpenRkfMpcXgMyX8VdRSSNPVGd1W9mJSXoKH",
  "key3": "tjXDgQTrJrfJ6gsg7pv6AknfV1kn2kK4DNy1EQABpotMQmSpMxgUWEQrR49pHmxXdXUYPGYiw5R5VrHvWGtV6YG",
  "key4": "3TG3DfwnWYKCSfutJQf7XWUf6W5TwYT6SaU5NEit7p6zXd1dhDCojYn3x5MUGYawmYZZqELqS2hN5tkqxDBfrEA4",
  "key5": "4Tv3avBNvPe8o5KkDAgnYCjQRGtBzuwANZHYSsHfE2DEwCM1x5qreMepfBukX23K7M1SYV7wGKtbiFkC2VzmGRtF",
  "key6": "61AaQ6G6x2dToqTiCTkQ8F7tnGRZaH1NkXbUyAy594ggoBJrKvNHsjM7RTid8tjPAdduj16S6XjcZ2ABGvY96aMV",
  "key7": "59Cxf8Ujy5QWPrGAGeavuggCPG8gP4v2KfweJtGsFtSE1S5YuopFL67YyHatArdQPybNjdfG9ssHnWX2kc8fHAvz",
  "key8": "2PPYBZJt6TgMs11HB3ybf8Bme4FRGhUwvZwqLwwrJo2dENtEhV1VNy2KRerupxPuDA57ySHDndJr9iqPMgwVxdZ3",
  "key9": "4C8ZYLf2iZsg5ne7facyckefWGoMozLH2mpiTqs1KoPMQ5atvX188Amoyk1AdWXY73397687AzEhYu8JPXY12qjA",
  "key10": "5o5PWtnVUwmMYdwsx1ADiuVD8LJokqozSY54Yz629yJXkpZxbd3aFZhipcdE8o26haD65rwKqAV9rpHoYKpDW5si",
  "key11": "2tdwzhZ9iostErERKdgvYfPo9S284mycXnF8GGGXNUXWarsYGGJnhwp5f7n71vfuMwRkWVriLxZEUp1gXqeWofr8",
  "key12": "xMdLPBsLvNkHy27tpysGeaRoNfP4ZQ1P5VEB8xUuqapSjjb8afvG9xhFMqK8QJ9K5yUebLwkvBhRipAVjtQZHgT",
  "key13": "3Gym4MyD1XbaH6GjwMgvR8WaBKoeqbkmkEYJJCYYpGUeytrp1bav9jTSnyXANnVapZSnsJxu2SCGmxXm7F4Wmu7o",
  "key14": "3G5yRzWRvsCojh3edC4s9GDhvWCj2HwThAPnVcTMPgJ2VHsDbdHjiSA4F6nv3DsNfuAPeDbe9it5HKdQU3wYe7hW",
  "key15": "63ASZdq8gctFDG62KxeMtfbFXdxv4LCrJmCLgG8UUseve9zxUmwRekvbXokbjN2mdDjvcjo2RP3TeFDzpBnNm8QJ",
  "key16": "4y9d8qpSaQUrHpDgGTybBFVcQeNd8aAobyFpsnEw6NoWRnp4Cv1aPr1wBxSbMRfv25ycrDNsgD8smmrjynY2jQuV",
  "key17": "4phDPmPuRD6SgkhxsJnCmE3USdAiz98kxmBHML1aRGTbSpbkEprLnUiw6U4Pr7wDNmEX8TVXb5EncKAAPxW4m9Lo",
  "key18": "317xaB3XyPWVYpDHne8XreN51sy8981tGU4xGyS3kCAJfXfZBADBYB4ANqRLFRdd3THEt48E4GgcgMJBXQgbZ4vo",
  "key19": "3H4aqDZD4HXqqFU3oG3dasMFJ9RbGgrv5z4ZuFopxTdR8WheawEezwPnDsio5DrWxoicMW9GJ6moxP1y38tcUSsh",
  "key20": "g6gyfVrGtXpktBUi4insxEyqzq15a75mLXxh6jUpd2rR8jqkyjvKbroNVAEfeK8bPS2cndbRLvFTRQA3MrzQcGX",
  "key21": "4UL6U3EmLtoSfZmhvAAbjBGvtvDuFLkKUrBbbUbkSz2SJdWaWrFKxrmey1qzCg9qgjwvw1839UtbppTGcfpLLMnF",
  "key22": "31W5rqdx6BSbLaR93NKzekKy9H1LKVPtTSUtJtsC7LXbn7nmHMiKZ33pm79mDoKnXrnDZPjTs1YxCwHk9nkJasUz",
  "key23": "5dRxqzVs8zW1eisLZMCRsg1bjLWfjXUghnMtSSXdhrNe91GfsNvPNuirjZZR7AeAkqDEbsEHAKmx4tMw6b7VWDmo",
  "key24": "3NHivUEaLNza7zEhoynFCFm4zxVjpMnxMU1zgvLPfMX1Jv8RTffG97jmDuHigBMkrJf9a51WQpFzX9tB4sEhQPZp",
  "key25": "Mu9Mp5BjWTeEdgVD5rsycbbsz9ThhGrDPWFapqWcopJw1vE7u1DLkZubqCs86AYHQQD88AyMPqkgAGE9Jks56av",
  "key26": "4cU1xhK1tbZPmDzvnuvHyvc5182KmC1L4331KUhCwjuh4WoY1aE7so3c4xdKpTsmFeetM325PwnzuT93s2odRefq",
  "key27": "31W7g59rx4nrWx84ejTWwJfbgsQnADcxHvuVMa9WYpkhjK3F7QiJDMcthqv5f91qbGFBqCZ9QmhsZj8SdyuuAj7k",
  "key28": "3UVvWB7ZPoNTEVGVUAaypkwuaoVa2qUQWzZebwhoXykEWJog6gAev7ck1QcyWzzEAwVU9oPmWttGtTSnNPbAbHVo",
  "key29": "2xV8drsktatXXTuTJEbBz2sekfcEaekx2n9eyfxrRJst3NtzUTPqz3jR5QHvMgiRXz2dGaeeP6XcJ58PDv9wN5NW",
  "key30": "ogswM3ps9YdkJw5K2jtXx1KDkWV5EuogxmcfxEcMPKgeipoc6Kvz4MKRv4ZdwLcxruekZanavTsGrSwJZDiQQrQ",
  "key31": "5G2fD65NsbSQcnpXz8DbMfGT8ibxcRs79CDHB5hzQwK3nBvRmHQKrrNByYrZmntEQLYQXa2i7wdbmy7VmvSfsy8o",
  "key32": "3k3UQUrzSAtxT57MR7Hbuks41zdTVFmg62gMFPN8y9Y9V7cMCsrPSQggDUtj9bjfoQABrBjssoSviM8CgMAPcfZx",
  "key33": "2SV8EJfSj8MwrT5158Bt46NU5WcZowegoFXfD6bab789KPmSyjeNNX9Ld8EcyKtt3abnCsteQYf64uHuoA2B4NL9",
  "key34": "6jzrYn481pLnDyCvLEht8iDBwQzzDQuq1nNJ3dzfqkZEtau2SNcYyJSwbfzc5qBYeubZteB8pDBsZtkeSnkU1hN",
  "key35": "5EFmBm5isY1gq6AWhdWv1EWoEdGMnGhPGumPKAhMVn7WTUrbyZCPjhGAe1JKsNu5v7jJrg9qbVTtNKEDuwqza1rV",
  "key36": "2V2HKdhija8yCc9pz1i3JajvSB9gERjjXseBGn56VsXFKEbcxKeEyxN9aQaeFLPwAzrxBEJUvxWHqbcGfbqQ36RL",
  "key37": "2oyB9dqwxmW76MQHCSy6qcHiY4VHXkgbtYRA5w3JU8RKB4UUERdYF4ks2syJVR5QnKtm5QvtkrcTTdKJsu4DAL9a",
  "key38": "2N9gfgc3VTjTAvGQErxYdPAqwUaVM7GSWALHvAofzJEZKG3EBGAjT4xFNTBAfvVfGqnjzqRP9Z7H7ib3Aa2kMRdM",
  "key39": "34D5E2EVNaj1bJfQPvXUECRbdK81AbziJX6NEMzEZBqXrvgPm492Qos1Mkpj2q8eyhcEpngW3kyTGTaAcko5vYPt",
  "key40": "3mzRyv6W4cxCmNqhirpamk3b5yDaTHU39RVQjCSCGmp87ao1QqmXk31wLFpHSDvXW8Pc36AMqRxjF2otR3NFiWVj",
  "key41": "XLtvtkbwC1HD8WMCUSiYLc5rGyGYTNRHeTQzafNwARpn2sMFtJ6KXS8Ew3NtrTZD3aJcHegpMrJAPsGXfrFsq42",
  "key42": "2yswYG4bHtAiDJM8ScTPxjDxZHAdR7f3oa9hMmL4AUjWRTRCNuLJmMjFccdHGc3GEqurnWr2B2iFrsGRapuj97mx",
  "key43": "51L2LgcrLtk5Y3AzLXrN5YoACKUcqai1SR9Y4U8MWrCShDbgVCCohMHn63NBUK7aP9smvmh1WsirD3dT2PsdMHNM",
  "key44": "3tkQic2BVg2hqUqan6e3DURB3qynTYHkEhhCaDyJZdcdsqzhtey48ntNL8CMdiqqUEN15tLvVV2QVmsFEXiXugzG",
  "key45": "3tZsHWv5KVYHQBkeXLDG11co84oqgtnqC8xYJSPCBSYkyqTcQiCCi7yRSSBbHMDFSoDnu5Ji9zgYzYAQckcbEzX",
  "key46": "eVuskbkwRpkiPUc2KdR3LRS3DHfDv1dZg2ApGgrqu7Ttv6qBY3YR1Fz28kHKbHUcqC1QqGtHNPP8RgDJJesNQFU",
  "key47": "2n6P4yY5wXAc3qrUDgTvWWkVmYgp7aTuenAMS4CdvnRE9JURynW5TeupAxtuw9GtFDK5jP35wXnegis9squPKywD",
  "key48": "5GiUR7KQiwJ6nYpaJMBUeXKESxXuSPbysKjT8nXxGmjX7yXftNtKHCSxwoqXhhp6mxqUykcS5gAVwH3B5L42o7vo",
  "key49": "QrvQM3PerCfVV1v1qfBnep6qjvMaGhufStBe1x6yYdbkVhCu1LeGZqoNAQWHcJRzBdcdxigZvxP6i4QYA39Xt3t"
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
