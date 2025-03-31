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
    "3YUpqvAtR66D97vUJ81VrabS7DASeKgXdKo6unVmecX6ynuxBteUBmy2vHX3Azg52dMcFwiJGXYCYucrGHPJhEL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESaERzxAZzkL9AXzfcWLzmrhSqHpoNGVNpSHnjY2bb1gZZ1ejjNuKPoTVbU1m9v7GqTMhgycZ9DZ4P59y4qtrJH",
  "key1": "2YyNVRvEYkGJ1DodZHw8EZcadEEDKayrhiAwJV7uDjKtDeCJMeNZ8cGZJFWa9YLXGGPAyDHqakQhtweH8AMi8FZY",
  "key2": "84zGM1TzVSnnGPaAMzd9qCLiqykm1eajCmiUAtjSFZycHVzP94gimCydw2yNstMaKpAxDgasHVDZ6azc39VnVVS",
  "key3": "3EyJGbjuBMDA38nK7uDLtnHA2JJg3BXev8TX6nD8bevhqNurxHQ7R34QgUQ7CAS6fYJkLmboZLvx77a6rjaYRA4L",
  "key4": "4JDiBXPyfnUPa5w94wmryy1gNnqsnKejfXnscyaEkpdmxzP5gAcpfDhBSo4PnhsqxB8wAurohRExyjzfy1zL9fDs",
  "key5": "Z39GzUQCksJbMriHf1HnK8mHD8NUtaaoaaD4u6aeX3MiHtAKo95DtRKqXmVygYpBsvFuw4mbRpHJpKevjiohN2j",
  "key6": "4Bg7bFjTU1MApj83grQpSKdFcdQPRsLfTZfUHVyRHr5tJMXJBTotX9VUX7jggZjMNZe8JTVsfXdNGjVXaNuBNHT6",
  "key7": "5GV9iPxkq26aDNooAKwkV4JY3iGUCdRopLyY1YZdfZ1rWFiQUcdHwziFk5z3wx133ojmhX9RgBf8jynhojgsK4C7",
  "key8": "2hEn9Mo6d8NiAUT6VAA6DgEWLBnKJ6XkkhFhktwJvo1ZmfXsLCHYFusM7eKHkicZCoLb8KbBJKtrvm93aJizfbPj",
  "key9": "47ghfkjTQDXN3EMDnNA4xU8bnm2nh6xoqyuVeRXTD15fxZbJXVM2wh8JCFjEkQkR9nmkHmu6azGgXrfGH99R7sst",
  "key10": "QZNcnhqxM2F532rqzu9omXMqHUPxHY95KWVVMauQ5mpNVE4boM1wNWYaWFBLaU8CuaTT4irAoj5WT9G31X4Kxfd",
  "key11": "4PoWJrtNEfMJiMjJjmn1uXgvBXYQ3WFt1XfmqH1ZabjpPQPy2819VgRpk3VaakZRSsoRLtGTyzRFphoUjogohQLU",
  "key12": "3nNqKkENZX1FLjtusiGNE7pXogrSxPkfsp8quiB5oGZBGyeZuLNwSFRzr2Vv7KkBvd9ZLVrZdNJKimyPFRwDeBEf",
  "key13": "5SRCFink9GcXc9aZ5tm7To3nmzRdq9Rsm3oqksQrAXo3F3DW7cg78Kfram4Rv3T7se3EzfgQN2VmgUBRQZE4tisM",
  "key14": "5gyQmMt8gLyjN8Q32hxhXBJJ4MCTDgymukxwbCK3Whf2wjyzZgc6bDE7VDPAh6PDPXrcx37UqdqGJoV8FiVcuqEL",
  "key15": "ST9E9biXuYEjKRVDGmxPFGiYU8XPtiZta4ZKKFUhfmQ3dF1qVzY43uHsTukXT4rqTd9o4mKHQH6KWzbUPE9jD5y",
  "key16": "t3PKfVN2henqS6TLnKd8ZZkfNuUbUpzjLv38wCdsm1f8MnnczDutDmsW2iTZviB1wNwQMtTorsZXNED93eQn1Yg",
  "key17": "5jagjwmuHPYUc5iwJw3bfV765Hk8jFqF9AqpwEC1BYWutBRjwyW2QuybYubypovFM2YtfQxukYzLAVKSM7DF3uKv",
  "key18": "1Qg6nmedCqFHxyuQGqR1TYQQ6Z9QdMCeJTL66X6qdy8UEZKXMWqDnYGtxGa6Ct93MzvKC23UWAcCTF3eWZNoUg7",
  "key19": "3XYtJHhbJrT4WsCuzkkCr84fCktpZVVVWTqHkvUUjMLvFfNENBLTRoAtMRTbUnd4FA99iobT3HPiJvQUJwuS9hm",
  "key20": "2yzVXEBbaRTmGxYwMXWaZNkd81oQbApemzJV62mGNmXw7DNc11EdxTEzFyE3dArNZbQQjabaRAb91efWJSfM9vHe",
  "key21": "3cv2qcuBtXQq9ECbWrA2JrF4jtLhVHBhjPqwPVHv72DMPhT1w7XjDQTaX8r5fU8taGozVuHtdAHGsj8XQKL93tFS",
  "key22": "46HxW1yt5ub5r9BSpTHw3WLuYpCvKepfoPPwyPpQi9ee5XhH4fjKZ5dRE6aS6xBohd3uzGdJc2WMbR9jfrZQss3f",
  "key23": "5zMbUeWeTGi4SwnEBrrtJ6FFSTxPCYkkEDrug2DGNEhKr9kzyukBQeRHBpGd6hq5gs3DBXtP6waAGdP4YdZtSEF4",
  "key24": "4pVAG2WVPDXqX2AW9zLbdyE3KxKwoy6B4B94ZGzTAjdLjRSnnUtNYNDLqw2hGFnGY6yUfh4CbNRt7UU4dVdCD6aM",
  "key25": "fmtPorCQdiD3FeuhLeL9FGJtmSvzdV2fsE3G79ZitfvVqtgTF6CgwqzFK1hkmH2HbyvMtJwx8P3YZiHkEFEgs46",
  "key26": "5KttMarAikLnacYBmVVvJCqXYRnAnzQJjtU67v9uNtzNHJpu4FJveXZxQwnPUb8uGoajm9iw7eoD87HBuUGUMT53",
  "key27": "5oabdKDJAopmnbuBqu9CDvmGLV6xsjATaDmQ8rnrKg2T23SLbMC4p7uu3ZBMSRTX4bUz8LuryYMiweFW4wPLeFv",
  "key28": "VkuPAVkgjgkvj3FoXSvR1A8vDXeuzLaC3hCwwjWcrP8cmUyJmmJoq2MYqruSWCcqUXyMNVvf5YDb9A2UiyymhX1",
  "key29": "jiEwaLQ5haHtGC5VVC2K6uyFNhyFNaeN5Hnq411AxvE3jMRnQvf3YuGApDiSS1ENA79xPoMBWhvs5UR2gQG2zuH",
  "key30": "5tgFwMK7PDvgcbSWSBZ9m8m1TZTQpeFRDDmi31PPxa7XbdR8rfg8dgcv8fGMVVwigsi9AbUB6CoyDFTyDi8KmtYr",
  "key31": "dWXxzpSPUThx5TkTnUinrD3Kcp2zEPJ3U6LPwbKoCkXftj9iZKXp9fUcArMpYd4gVexK6NHfcY8bGRHXPybubiK",
  "key32": "3s6CRgpow4PM68ejR7DwKhwSNGMkAAUNvgE4RKfMPd5UmuK8yAvYxxTr2rB27Ank2b3dAAdPb2DtyJvAuebrjoQ2",
  "key33": "31bDjhZNEAMFVeGqjoaJqRoKh2Wwja5sqWjVM8vJfdZ9k6cNa5CMuWG2AE3EGNnoq3yB246aKFSr754vcd9zRKKf",
  "key34": "esnNTscnF9ngFpBfpJHktdLxKJVn4PW6s1VocapTJHYTyFpU5Az1Maf9JZPeoP5VZ9dWg5yekspiWjx5J4yaFxP",
  "key35": "4HYApGu96Lg7FkShnbVY4icFBDcb2g6a1DC3xB9oAwJF7NdXL7tqokzrS9Cr64UufAyKbagepdYXTStKyDDXMGMH",
  "key36": "56NDH1f3UHcGvNFLHMKVvNFh3mF8tdPh4aYpPHpg6GdRFNqDk2bgN5U4YEHztHTHm3QHS4obL4NYsywaaUmM2Trg",
  "key37": "4TuVUfK9ZYtpkusKaBxyFWgez6wuwxugSpcdwW4VwD17jcc5eYNDp6JLraCWyCtKjJmSRW4AwmXy5aiUjkmDE2v9",
  "key38": "hYoGA2tPZwzFXoD7CuA9RZNmnYRXVQV21fWgUoMgXTHQBuHn9M5raBCbSQbtV7c4Ernnzx4FgsMvnVQ7LkEBZ7a",
  "key39": "3ts4yjrbBZAo2mAm2TvNufwf1f1kipdcV6675Kn1gDA8xY6V2drA1JWnpUCRQR9pgweJJebSqKsMPX6ZTn7WbmpS",
  "key40": "64LwtDd7vzF57Er2UnQTMkFmaiDES5MDjViNYYLdn8gReZJQ9huVQRnELkyHM9T9CWn6VTi2HqzNg6tfm5N7yMc4",
  "key41": "5DFb6bp4j3BK82jVzsrGkjRLevswW2E3vnf49n2E3hCsVCm6AXwho6fYNEFaR82MMW18NokPBzrhSfgEdpMB3orh",
  "key42": "3tgajgiAuFGaipkncoydgkLH5WpNzKtG9KrgmjXgz3Qxx2JQqs8hmxAkFT8DfqaTxiRaUina8AT917hMpuegN9UP",
  "key43": "4N7ViZSesWsmTKb25dXSKfSetqHzoRXM4dwngLqTdThvqqUbkEZxExhTsXN2rive2JEXyhJWQBKZrfwcrfBHXEHA",
  "key44": "3iJXdu7p6fT3fZJZuYsqatSr5DvVQzZ2PWRP2f8ow54rMTWPi2d54ZZ2gtC1HmPNe9r6N1JLLWJKJQ1a8hfrFaB3",
  "key45": "3tuaBCRMLuCJUBauSVvTzz5w4y3qwMt27vnKDiPVMdJjxSJmLKAia1hdiV4pVkbtrg6pkGM5RMqp55uGUackaTY9",
  "key46": "Lt8s7AMsAfYjhk1rubYysZHJsDbksHERAVTSmbzyvNeWgxMfJq8J4gaUFuCRWbdNCVb2ydAy3dVm5bZanD5HKW4",
  "key47": "3BsvgzXDGoAoNxmDUCuLS1Y7yhohpeRV2fMqigbhotRwJsJP4Vi6bty6xaB2Qq4qpYSrhJPwVBEqaH2kdhfRs1TN",
  "key48": "vgQbeAKrgWYbJ7Q4QKfLtFJw2Z3CKCcUwp72CgLhnYM2E82z45M4CWad4866jA9R81nb2P84xHvCUMwhimjifvz",
  "key49": "4PPjeuzm3tZNAZwsEd1Q5SMXNW4m96kiUaXHrfNR3eTbQrLKLWxo5UTAACyaJjRe5icCADRWnG4YwYsDG4asdVdz"
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
