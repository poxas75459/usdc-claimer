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
    "2Npvv4GHywMrbW8q55khV7vsmC8Y6fdmsaXWQq8UcWM54icGTRqsYFNz8yveQYmKLrgNP6pbttJdVqA2fjYHT1Pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EjaZmbSJY1vmbzp4PFfjRDfXLHf1kciiXhC5wd6JPLm4wfZ59puZGbxp7DHRYvceEH7TRf7aJnmxorASVgPttvM",
  "key1": "2tGQeTzcK4ia4iSrsUbKu1SRzfJ6MRzHyqshn3iCn9ddZiu3K8EWWb5u6BiCt4tDkNztyq8EBCeTKdsZtx93vDw7",
  "key2": "48JpqLXUXiiSrHJzgJPd61fo4SUx4LuztzZkHCxb8mRYA5tj3MPZuZawYJ3uPg5J879j91RUqpwjvuE4YbDsb8wF",
  "key3": "59jSMyBfej82UfnvYd4GPzvX43njD1umK3jGLCswvY4ZenfGXANrt9jUEM1kgoyn1J2ZQ2gqA3LsNvGoYUUNSo9x",
  "key4": "2kyC6DGzLkqbK39xrNNWRpSHPDQLoWckvZm9ogpLMfvvr4gZ4hvWAr8HNSozXC6uq6C2MQVVGUkadwc2DVUKwZ8z",
  "key5": "2zygm73n7P2QArkfnEejkAuUEN3jF9Xr2DehtqDmSvQAxopZyJ6222RQukyfZtvwd8gPscDonLkuPXDn88pcn3dk",
  "key6": "5RPXYKcVESpZaQTCTExFkThKaEnymzwbVTcwz9mSxSanZHxAPEFg2o6PYABGWQ3wQBEoDCUCjFwGVjceUqimrhPv",
  "key7": "2Titrn95RouJiYMZBEPtjNWYAoxJzw71EuFZFmAsAtPoHQw9NZ877BdcS7qukwUUU5XwNf6femRKKFsu5doF5524",
  "key8": "5wBZ2hdz7NeutJqfTvSm3mbTv6XQqgwgWTpSKP9dWL9QpiSu5McAv6qdXThFrnNjvJfT9eTF46huyW7FnEQRUiwN",
  "key9": "46ZdRLJvVybE5Jy6vy5Ww5cahgouxftSS2Y2ctmHpPctHZASNCYe1e871TJcAf7u1DDDn91jJWHo3WssgUwn3NGu",
  "key10": "4mXtrht7MiXjGBZuShBdRFsfmgr5JgmFfc5ywNpzDPbDQnVhQnGTRchbHy4W8cQeLKBAEq7yr1GFdpNGA4rsTcCR",
  "key11": "4ME95b6wftjxo8VcCdMxSD1Mji1NaEnPpQ3rCJrctTkGC7jQj1er6UKguxqd9rziYzk8jTvMvVkukG2RhV89ohks",
  "key12": "3HE7oFYfSsxLQp1exPzWeQJnJ8HUnb8wHmBG1KBJKVZtuJrL1651gZQoSQvymcHGS7kYpiNY8F5D9rT9kcVoSsRr",
  "key13": "5gKMvMrAG4XEPdfiUH5Skye7ZFvD9UFsa2ndxRxVjj1JpEpndjcigikLTB6EwHYVMRKfLZvWsre56abKVRu2BpHM",
  "key14": "i3jhNAgxALwE3eE254vmSLxv3Cg6tsK4YH4hJx9T4AiJLXJiAKFM982yKzcnayff4vyHyTtDFxxseHg4DRforQ7",
  "key15": "5vCcd7kanaMyTmBYFo8QeYtr6HeJ3XQ8NyQT9ayTBJnAG4FW4t7pbHH56shbDE4yfH8cv3fbhDzWKDUEtNT4m6Qs",
  "key16": "2Z2TUmDWWRwXcPoCKt5CmP4HdjX5gMeYSbCYm3vyYezCxVVvNpc4gRWSd3joS3gx8PSD8ivivHW3FMDTNpZbCQ3W",
  "key17": "2mPW9pEosvNn76rJksaM1pQuL1rV8qRnbfsUKff1s6Q1MyBP4hT5csKAug8p4kDnDvzjkP9tRVQmzjNJMAK4nXh6",
  "key18": "3wYd6Wm81DLVBiYnecNt8ZoKk1NqCq28JYD5XfwZpefDp7nVNr8mGBQwA8ABLqoDeDT2HHru1U4yHhnNBUt3tVnZ",
  "key19": "V5pVBXVjsmvrNvWnGVVHqRfYjTfiyx4tvCWchD2BromdEP5LwpFxgJL8BcCr9YNAVGqasHeBFQvSnUzxxAkbA8f",
  "key20": "2b7cNjqdFhp7EUyaq8ap4drPtKw5weZpid2WrffDzyFTCdpkRFPf3bdLVK2jHAWA2cvm58uBhX5RkF7Uf8FXU5W7",
  "key21": "2ApvZC9NeaZphbCGvCGMUQpJyQWj8qshdn9bSC9GvYSF8kR4XLnLKRr69XvyhsFQ9ZVE6rdqbVdi8pZT1cCgyeYc",
  "key22": "127Cv53QmDzK3g9Z2YbSoEfN6Niutj2avuYjCjJpUx7EkL3RTo5SVp7Ca8tEfzurJ3oayYHsVAyGxCjovcW1kxtK",
  "key23": "TqK1kkYzqCuWTwdGL3VrPmNNX6KhbwbzXKK8WoGXbSdpweMPkS7wfRdMXcJmwtrDfFnzYsbuZt2XLmaq3bdL7V2",
  "key24": "5fDwbzEzEtb7iurPJyFZGviz2x2htJNfZFgQpia8X9zZuB4XARWsyy6wk9XuEA3Uq4yocyjVUMwicxTEudSQHztv",
  "key25": "3aPjtrDCwxsYpL255ErjTwjc539qtwPuF13PkgmsSouranXaT9v7MtoztdUoWn4TBmopx98NoRMyFFoPhWHgEuRF",
  "key26": "5gzTqtD4PyGbKVKAFYDVUzAZG2Jc1NpuvFJA41NPCiegAipEUEbWtzB91oGBZAQb7D3kwmtN6D1j859mfLapcTzF",
  "key27": "3yUbUsTamkQz7QyztmDrQz7wAmVxnSCd6MmndugcqB9zZjd2tfmdmKz4PPfoE9z2Zj5GnJFpy7kgZ6i6JfEM2Zvs",
  "key28": "4zE6DbHB7FBMCgWoStzkVAeS8HQjVtUN5hrnwsZdtGsp9NawqRm8r2XanNWBTTEy3hkFxRRRM5p54Jbyid9Y1kG3",
  "key29": "5gHgRV1qVq9teWwLcQ1mwVeE1Hif5nHU2R71SJ41wBM9dKHNGwvj1pDGtdqu64adtWyyDoFcqXMYYMuUDpiu9dq",
  "key30": "5xxgx9PLPf2tJyCdcoWDP8fC9dW2NWY2fgCW1EeF9Sdn85kSJb5LNENgAqRyFkbsxrSvekYm8xJS8DcQxri44JhK",
  "key31": "63fF3m53g2UriPn5cbZi5UbrzRw1MD4iqYkepcruWNj2eDmWZoPQ825Fu36Bn3V1znhu2Ksi6s479DrG2mEEiW4t",
  "key32": "4yVCvuvEEWmDPEnSt4BYkBmxj5VsyqNLYxHWBEt8yz5JvEejyeZDWUMYEchsSp4yEe6x7LT2NtETK1t5f8JDBDkG",
  "key33": "4WzkCJRZFHwa1iEF3ta5qQ18RkmHnpy6TiKj1uS62mUoRFu2FX8EYDS1ioSrxtDCPwK6QwXUxePJN2NP9VxvU1Kc",
  "key34": "UC6W1o1SGYKwBMKjXBuupWcJJUW4gNrs5DtrvnbzftacXsVVPQhGgotiM8Dmn7hEVW4N5Kis16FJgpga5xmwX2A",
  "key35": "dSesRdFF1dw6ewBsJLAiQGXwCTxDEdRnLPh8B9NJHy4G7kCxfqN4sc9123Rk7tDe6fATSViHKxEYa1razf2xdfh",
  "key36": "CSse8WZMPwfWRzjurfPzxXPHj6HHDYmELTEA1uhA6MEDgCrTJK7wELtpthoFnuVEu48GDutqvFRKWaujWswQtVu",
  "key37": "2cW9kfJDzRtu1to4wy47pH5eCuDsMdotB5cwbRigmnZB4tBPT2LzQhyzGtS1cYy85eyovePYShVtC74BRvBmk7ur",
  "key38": "3z9pR3TTB6rWtgr5dFpESpumwNUkxcMEy4DTcrhp5MwQa2LdeD4NosQcTwrwaoC5ThVhqvrMz5aLXhwdLgpaF2Sh",
  "key39": "5xeeg2C5oXLT1rYBF8GLjZEatXpm1B4z6DgWbCeVb3ExCdnMZmcPxYY3jt1854yGupHraf3Jnjez5iVNKM988HRJ",
  "key40": "2297HM6zk4QKSU2NNAdZjtXj1kMXBa9kYWmQWFDp4aFw9D6r9yPB76hz1krJmKj3mTri63Ktuc1nkYLc7z6jpkGF",
  "key41": "3BC1BHwcitjHeomHoiSu4nXFEmuJad6EQmpr4ZWxTV1MG12et4WV4z5ima4QkLwaAQ6MFf2kDyddHmAe26Hwm3uj",
  "key42": "5QFhtHJ8XWffYBGvhEZLytuXqMQyr3SnwGLBHxHiBVKzdMALCTz7uCaJrK5FLJX5SMLRYM96xmxn6C7ctdkEZ9JK",
  "key43": "3XvggRVce8h7C9LH83RbWQRoVHD698nMVuRkEjyAw4cxHyCx6xjrSd45oD4q2x6GQzdrLUYsAhykcp6SvfVyzC8y",
  "key44": "v6fCXsGj1zvZ94DKw9YLtEu5o2GPq1XGjBi2n4GV5nX625PhK9k6cwCywKzMs3om9s7LhAhH3WCadnTKDtXushZ",
  "key45": "2ujHPKeqzuwaEUQNq56pmorqfShQZwU6wjD5q3p2d2n6xkoHedJTkjaUUAw2WTLT8bVmPppi84iUusi8wghBj9h5",
  "key46": "rjVJ29Jungxb5pKSgyyiJg6b4TgoYrYYU6tb4MiR8WNfbwCnaBhvQmFV1Gek2RQH9CWpaB1aniLiqUWcddSvoCD",
  "key47": "5j45vTWrD5yPtzQLSGHAfx1LTCmKCscZNojZCkXRCh3LjaPJKCAq84RfLm7q87dXkBZbqJqpLejsRSXroN1ksose"
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
