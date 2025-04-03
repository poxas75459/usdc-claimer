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
    "26RHaKSh6HmmQr7FdfvWcTPunrxyWY62Ep1PJujxBHTAa4RhNanEb4azSaKxQfBnETTgDywi9subUnN9Lo9fbe7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hcAFuX22SV26m1QSoXAthof5MeXord6W9bS2zyidZoXF7AcnYC2MJuXbbgeejjftDXiCUphHygH8EFrZASdNXbn",
  "key1": "2P3P4ZvLTzXgL9DccGWXeNbNo6Yq8ojTnPgvEDRbRrVSUF333R3yExg1s5iMX6KjpUhD9BKs6bFxMKcTWcp3aLe6",
  "key2": "634dkwqaqgUXYPG9Jf9pbHSAuBGsvY81CffGuQWoWQ1xx5PGfh8m8iZf9Ae1XRw1qWQa5TDpPFqEMnsyi23tgjhR",
  "key3": "2foyUVpeqGDgDa8vwF1a743KpPRF52oubBrDFzEPhRLwajmkHHowRd492Shkijd72kDTiwHi5VvjdMbJTFU785rn",
  "key4": "4Scgak5ap1ssdVfEa35ZH23ZzLJSbv9co8cbKSu73kD41ehEY24vhCWtGnoaVDhc8FKyENycfxV7gsM92wLryaCR",
  "key5": "ydbtkxhUUsq1iCAqAFQB9rcJxnfv88dnsFzbgTsyKVjCQgygqLuh6kBb3gfi6zHtTrYdmkZrL1g94hNmPNM8UJx",
  "key6": "2oq2u7PpZrDVccfyvJSfHtZsJtGCfShh3vnxf1SHBTTgfJmYD2RkRk5LwsaVmxsUiqGpYwsehX7rjnjzwjBuaCd3",
  "key7": "2SQZnhTQW4wccijEeVSbRvCBAs1fz5XxFpnxgNytjAJof4iYi7BXUPL2VLFfFfRkjfGPGrLbTDSYjBHs2kbTMSSD",
  "key8": "4i8RxosLdo3m7mAWt1inCyg35LmbVSCTfUNhyEEx1eYcKDcesAWdyr9Fb7WDqWTeemxHdQ75gwrTYzKLoKLdJVfc",
  "key9": "2NBkkyvYRSQDGBd22FhKWMkQ4uV41qzTvyxCkqE7ofyWHpPZtVDFY67kB18KVw2Ne3b7ZDMSJHRTgfQ9hwPwkBXP",
  "key10": "2RxycXrSmA6CSBVBTabvazJxHSQPizxPar1BvijhYhizq1Ug5V62uBrHMd6yPCDQz9pLYcDf2cbyiG6EshPFT7C7",
  "key11": "38LuSuF3eys9hBgH5Lrk2EugywS29NkRNfqg7X9bsb9TBbcjyYKem8Xbod4GPKA2xFXcz1DpFNFnxC6Ptz7gs2U3",
  "key12": "4hUc4JTtZvR5LMVxEhizPZqAuXjH6DTzpWj4QX7YtYwhbEt3CGszZMF3NMLdLbMtzzZ4h7eE5d1wG8BLHGa2UTuQ",
  "key13": "mCo3BD7hqWKpX2sD9ZMqUeCA7T5n9pFcuXoQSdpcSpomPKe4yrux77FGpMCwcTEy8HMd6dTKWqmDCWVt4ry2gFe",
  "key14": "56hKYcVYpufQ7CXNU3Fim9B9CWULru58MKMPL9SyYfFAXSKgYmijRgLv2tU5Zd9xai3zPD4ZCGqN8JNK3fgC3pUD",
  "key15": "5ZmgRTK9LFPCA3nCLAuGbVyQacxqZDmjnksLLWbVpCWkbbztaCsYeB19i5hBp9QEZG7Pvn2jJHUTt8Zo8W636xUH",
  "key16": "3Z7N8EmK6Mfu4XLDsP3vKq8KnWhLvREznbRSTg1MSwHCi9bFmFdEDP5hXMHfuhgZHBaPRwxcdecmJkDGoG1VQ8Ez",
  "key17": "ej2QJaBc5RKAKicj84Hxit1EYQ68PycRbRrmriz32zwmLvUSAvFzn9v51kb9ioFkKcmWosvwvfbp9YgfE5B2Ww6",
  "key18": "ebjewZeVcWXqHuCLK9b2YAz4qDzc2p2nqJGohYLGuNJK7DRt3ANFrJpJBxysmpFKohZxxzcUKsmzjsFHzpjbdtf",
  "key19": "2DZTubCwRrv6RoAeDBuSCwWMfVb2zCiHoyBQaTJV74acyyxdHFTujCou9H4cnu9rQu1Er2FsgnWdUrqwRhWkQmAo",
  "key20": "5VL9Sd8LvcUDEHkLyW8uUWkC4LrTCZzVTt3ZJsiqMSsoRE84wfrpLxRiTcvTeUuzMo9joityWRLvecuS5QQkyodg",
  "key21": "5hRmCv3LcqGrRQqMfvuSP6yPYjjnt2CNRtiGXWysjV66WTTrMM2f53mxo3xoUV2RNe5MZu9gxVYipxoqz81q4Yjm",
  "key22": "2tqp2Vk4LtRcu1qyxUtyxuDfwmXCK3rYDZa9jwV3Sb1rPHsftaA6ApzvScwFtjwJHezBegYuzHX8sJ5gNXrG28KP",
  "key23": "4RHb5jH7XzUfqaBmqUxWaT6BmJsXWoutKnmmCexkqfEK4zn1e2NovYDg5fDZXDExRANqer15gSEqq9jGFYK7qygy",
  "key24": "2gsMbmQSzS4pcJSx7qD7gDb4ym4AmCCVDqGTpR3J3KPTuACqvLS8ksshx39mdRi9wjtyhkTDAi5qLnPfttaHTsUK",
  "key25": "3GDhfRX5LCoa4XktHNuanYrpLxwT2mBPtoFgQSjpQvToZj9vTyMi55LTPybW2ZzRceAzMnAfEUCxUjegPUJhS38C",
  "key26": "62FmPoB9m4PuPNHYyRc76hL67pYKXLpD2vHA7ApL4ScpgidPYgTJzMu4pjqxfkAe4gZSZic71a8JETTAosj2iQbf",
  "key27": "21NvfPHRuLcwf6QTTZaUdPW7yR8LhSxaBa3t5ehenCG1xE9Yqb6QgTecdwktNLrqymQnvetnnR6c8WzpUgoH1g7u",
  "key28": "5FSLaL7oLbE4YM37HsVuiFsWG7Qn5rwcinQRPLxLvZymmLqrhekEEpsiMF3Fywjmxg3qhSvp1Xipzkqbw9d49d9b",
  "key29": "33WvCr7wNzievBEKt2h2Ug43HXRWiQEq7iaNTwU2XM47i4RLJo3uvLmgt4EMVTbjMiVS7QgGsHhSFuwkAQi6qGoi",
  "key30": "4NvQLbGXvW17euNdRpWTzFr4oGUv9SqMMdQvBCZPvtqfK3aJK35bDLMkj85qBgbqDCd3dp4XS3Cmi31HrPugcEc8",
  "key31": "VXFan5pPPJucXniNKS8YfptnoFfL9a25VVe82jDQFKz3a8BcV2xEFj2Xdp3d2FjACb3dfRR9Qvq4pgWh5EJpZZx",
  "key32": "2ydTMn3ZvFuXLSQdhqjZ9fRjPzNUUzScBdXGFzNT7JSH7vrcUFHAQUhNaQEPQ9DwZ2MDVYwqsmceWyEWVQJBdgya",
  "key33": "4YTzHUDSnbGT2fzs73nDu4c8S8RCeZEyvAZMiUhA6pNYjN7kezoeL6cfq8M8tbxnWETcvHLiZbGZXGnrxWT8EnJV",
  "key34": "3JLwFFowudWpKAW8TywFVcRMY9eNvxLLxpiMd3PG5hRgASaHyTsWTsiWvvrvjWbefnvgUigs6qhjUGUSjkdcB5vU",
  "key35": "5PS9eVf8yKaaf9a84KiWWT8UnDFrANMeBiDn2QkbYKcGgwmuABC6aL2EcwuRDHBvVh2EYoQ9R9kir3qETwKAuQc7",
  "key36": "581XRqKbjrKsTH642BvtJyiKyeFekh2kvKecf5NwwiS6f3dWdQFWKk8DhCCKo8zM9NmpD9QhwNC1btjkjT1uax8F",
  "key37": "oWwUqqDfRUL988qS7BP3nh9xuu88bmwa1BRuDtZYeqaenzPy8ZuLxpgpY3purmW5gswf4TceDoN7bRyZcJ9Wp4P",
  "key38": "5izaRigSK6An8RvKYBEVcRzXdKWVsZuu4QDwrbz6xZWrnk4sZAW4h92eZHyfXdVPWoQ9woFkDmn14ix5sK4kRoFz",
  "key39": "4XS6m2HXe6spBMDTV7ermWmiWp9v5LW2E86YnuYwG3yuUJfYsmK81PAuV8cSRs5EfZHympEHZZJ335vsssDptF7R",
  "key40": "5PjiWNsEhv3TTBcMt8i3khaibinEEBsKae2DJiGuAbuodsFcqX2VeHyRrpHFtP1G5jPx8svM84VaC8djav7rpjyg",
  "key41": "6uRj3WtnYTFS6SdBmc8A5G4nRJwDMeYb2k1EeVQ3SDwuQmRCoGBqWQc9X9JDiH1rJcpn34WVot5QLj9Q2p3Z7YF",
  "key42": "4MCRwxNumFJ8NUiccfW5W6z3oUt124XkPrqWuK6RUe4iYQiSC44h7MhsK32MqLGQDYhbXXrenWB49TsVSzsYGU8D",
  "key43": "2y5c2p6WHEYJoGSHBRkqjLHKeDk4ukFyWPz5rtBrtLZzWDjaXTN9d3j2XHzifX1fqp6qev6WGLWU5XFRaQ4ayFfZ",
  "key44": "41NNz9XWK3652uxTaM4UBqygrS5fcJpyvHNYoTHyYd2QqGvLpyzGQDpnVRq8MMpizVNFRPi2dQJcKqrTwjv3nsdL",
  "key45": "5s1g7ft4DJxXAzELicRGg2vTAgM1F4RnuGaWJzXn4GsH3zQ5JC7VVU4jKUehZgTNrwFEepB8NnBtYWdtpSdNcMGs",
  "key46": "3qCuNLFhiCfRbGDRBW6TRTXBuQdrUG6idt3FiQ42GnbvheceEeS14diUbHPdteDWiSyUvVVMJDgimYe5KkmgHzK5",
  "key47": "62SV6feWKjz3SYmzxrFjrZGQUjTTbCSgxKM2uj5dbzZTtV2Hgu89dx5nwNcf5muw6QsbV17HERH2D5guq6jC5jFM"
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
