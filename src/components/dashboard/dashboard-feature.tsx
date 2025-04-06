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
    "4WR7onZ8gS7e8kKtUfPxqekZSzQUu1E8XFUxqLMZFUvUhpxzDsNaioSVWhU59c1dKCV6kuaGEz1SCTzZi8D3vGpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GBLeLgjr4JqstfeJEyXCRugxBXeHouvmSJUKpBLThJqWo5DADxnvWc78YAAcwJLyx17x9XsNCpowWrkGpmavJFS",
  "key1": "61FtijaNKXs5ofC5CQ9YvQUF89xs8ArTTcWmaCUCNZKhAxLRSsxxhNNYJk4rvGBNMV4FFonKiDqXkTtMrUQaczbR",
  "key2": "5gyPZfa6tUjwfPsUiSfibpzZHsq3LLm95wkfHZKFJRfdndw4p3Gg3Lu6DW89eXigE1Nzc6E5ek9yLUxzAb7ubp1m",
  "key3": "3Ab7euhVMA19oQ9bJWVzwZALgUzD3cFAn55EWKpPMyRkojiqXNcE9hsK72X11nZ95LrEmyZKaRyaWFqiG8GbW5Q3",
  "key4": "2g4iDMxAZeAbQ72GYV2VriR4QK3Qom5SEgTrRfFVL8i8J4uJ3LNVaH6TsfwTvSG7achTScn9eFVnMKYmnfTu5WfK",
  "key5": "2KVckm8h9XWjFx5JUpJf94caK9ZqT35Zh5mMzVwgsRJasktWgnpWVUHdYpF2uE1AmCNNmxCkTFukdRgbXMtHqhMj",
  "key6": "2UjBk8t9Pag4UwTCYFqQ6yNk6ZpkmDFtRfGLaWepG5v4ghFz3cQUPMftyS5rBvFmNKUUKkZTEbVLc2KvaEHdyGPE",
  "key7": "415xbi93LBthwAMg1UDBHXzoaCViak3dpoxYBv4NjJ2xmySwj5mxSCXdEPPxJd5v3voioYb7pJkn1bkFnhwiAisg",
  "key8": "5ZvNSn1ninPBEoL7hnz9GCD74pQrh3mEqsvPWhvGkcbPiapqSNGFmAv523NRzQ7CY8brBNVbo18JAiNWDq1kwWTt",
  "key9": "4KGUNbEJr8TJfA1j7iSuohKV2WtNWLfvXVfebFJVxjSGf3h77qxBgBqbor7JcSVFBVvz3UMsCRnd5mBJakZa6B2R",
  "key10": "4VYnLrDUU4ijWsZnVAVc5P2BGP7e3qcDvMDN4FWh3cXQinzqj4JGtLuuGS6Y6FQod36umwYAUZ49zXXxJWhjqVqd",
  "key11": "2m1tGKMmfR83R2cxbEjznU4fABLXaf6kqrcepvBEgRJFK6wHPdHNARk8dYUYddDYCsVasBwt4WMXPtAn4NEns7Aa",
  "key12": "4RUvi7E1FXAuZY1VH9xckhJ9kVy25XvMjivGFTU8rCLku7jK9cZuErH4GQpAiamQsz2apkqHHwGDRsuNXbvMRfxs",
  "key13": "4zCn8mS7NtX7Fn6oD2WKKwzfTZovJ22uiRAL8yJnB7NEmhDcCdiHxLhyk49LfNDBAkSkidkT4GZErAmVTGdp8d8c",
  "key14": "2G8tX6QmMsfMJVWmk9Fj5LHk1x8nkNQVTtwabyEeiKqYyhidqXefosh7BpDUpFZ72kprfdDLz1B4XgAsvs1ri6HW",
  "key15": "4ivUwLuB9Zd9QbPJxvecsGaC6JJTDwgSWpdefHvsT9jCBboAxPTtQEHjxELZpm22ALusMGrEPYdXQ3mn76uJVUjV",
  "key16": "472VP7fNm6uuneZA91WLbqATerv33Pg49KkuQbUxJN6TtqPwjNN2uAbGoBfHSGmstkCD7SvDNVgBHQT4oK9q4gJw",
  "key17": "65LhJmNZT3nBAz8GzbthqDwcg2XD2vMuPAdaaNPWpazwgjQwzqT4EkoCZ7kezuWJo6TeoUJNBYgzm9ka8aC7s39J",
  "key18": "3M1ftCFe3eFzU25Z1oH5gUrRJhSDtYCPPUZX5YUU3Q9dA1ZcFX2BgUfnzd2h6XmZcK4n5y5cvUir5CQKsHxh1wGB",
  "key19": "5R4n3czrBUMLC7bjV6YF1ndJMSGMcNRWwm4t5Wu3VRiWGcMQJXqaFMBRLKu9ZN4KKd47VVQyCA9Xe74VYm7vKEed",
  "key20": "3N422dcHspyQinKBnNzznziSRjdh9giZYfMfzRPFupivQdYQKG1DCJkVkRx1BNPWZYW6XLcweJ9drEsnj9EgbbvR",
  "key21": "3z3XsenayB8xFhcVnUEihgWbBYjkQmvxweareiupdF5h4bM4pyji2gPQQAhwERKseTg6wFNtZnNkNauXYuq3FR6B",
  "key22": "4yXErus53ajwYbT6h5xwttj44Lerwiqmz91VMomM5Urvkmnt3xHSJKCdACtR9EEvwLhC2GFVybrGEY9d75D8d8g9",
  "key23": "5v22mnPSgKK6tsqK3VTxvwzLbLLyoCSr9wrig8cF6BCEniNMkZUsbWc9Jt4AsBXMbEkP6gF15oeXXaL2zGca5ZVx",
  "key24": "FtHvGz6q378pokfFXWk4XdeSeCd5jxa6XM34cFK2zm8fZwMicpsKt6DeaiY4c4oq6iNKQgykiNd1USyQqjosPsX",
  "key25": "gNvCNtswJk8cpjGfHtGXuGbKLdnPEVUQc2ABfMGN7enPDMmtkzkJSW3tRKg9r34o2WzhqKBzK3hc3XTzSprZWPf",
  "key26": "ipBjffsxDbaB6T4phhr3hAKot9LK5QiqxcjYpZNeUkXNt4DeuZ45jiKa2xkQSZxsFLpUYZBV4x3c4LsX3rVC4xv",
  "key27": "5HPeCGNC8QtUenFS3tsvwbfdEenCSbMoFbwvzCbx3qjLdjuEooxJ1wHf8V67Fq2kptMzqRwXFnPLSsY5PHkHkdVM",
  "key28": "5Ybw9kerYnbFoAkwxNHdM7caYqWyiHiqUWuuMZHrNUpnfuZNxNANV5RxUVwb3qUmbp2z4NStVmh1mQ5uX4iEF6iT",
  "key29": "5oLJdtuuMEqb7PAQd6NsPFd7FQUbQ5S3vR9YRXMdnEjh2JPyND59nySf4bDfgCRTMTx2M9g9WBXebnqvLhSCwDXS",
  "key30": "2PboSUxySKDH4w9L2RfaMYnKLqtiZKBXF5Gd17hPnZWDXDWvm88scAXGwm3pznUBghhQmdLEu7J5MoLZLzMtgesq",
  "key31": "5vbdxubvXsEh4dGrRht3TLdA5BnCXYoCNudqsqbXyei8WZX2MkqdkoGP461UvkmJVQMF1gAkmuUqh9rrZiVjcMQA",
  "key32": "2wmaWTzamHusLwRWqgt3EfD4u1azL8s83XPqxKBkmv8PVXCdk5148Qkx7YyJc6pGQd32JGETaNBY4CNR6CVpd1op",
  "key33": "5hSqL57dWa4QYy3GHHP7AAhDvEZVNykezdQvi4925pwKyvtsen5eTysHieE6ypJSVVa47Tuv68QBLQ2Ug1AesWLr",
  "key34": "3gqU9s5W54SFprJayBrmyQfdhQTogUVANZ8nHeZF4VJojYF7WtXUvtj8pfrn7wrahciYcCD5H7hUQ94BAmbhs7hk",
  "key35": "VDMAVmwBxS7TPceAVDCuN7yHkjndiBdVEXmsKSzPVxAoVLmyqMfTMkyr8yusUuxBJD4ZA3LXeB7PTRURbuJL7G9",
  "key36": "gMvYe9ptmp4FQ1ZujeDwmZFMPvnZ6WEfHpSbimjVXmqvf9DkUj1TVfqvtE5kznaYeLysHa2XPRaXZS2hZS4soau",
  "key37": "sqj8vQXnJiMDy1sztWgh1zn4AM7k9ShJ4u1iXjKMGzfXTTwJqgvRSMaqZiiieJPM2V2khk9WoLeNm5oGXwLsw2R",
  "key38": "5pT3qkincZ3xDC9P2DRKiZadxikgVRf6HDNo2DYDAJNjn5VfQe4nnJCswUMcDGvK16gfqW6rkUe2grhsj7ce1VRF",
  "key39": "5rG95SHg7iG6TbFkRPLqqF6KTcsmXevhZ1WFdZF32s7BgPwro4Jn2K6B5W2vSxzQsbXECkS9CciYoZkYw9BsHdfh",
  "key40": "5gegPcVPnuLLRuFVYsaRjwvjfniCy3bNGb64o65RZU3cBrCHKqZNwYqaRK3is6ACRAZ3rJff6i8bVDjK26LJ27TL",
  "key41": "HvhZxM573m424UDPt1S7ikoXLDSTJK4DRmxY2xurNerX1pNCEANCdMTseZ5Thxi2Gb4HCyuuhguLWdi5akKR83G",
  "key42": "9WoazZWYpv7Q7DjAqGzrFYooYxZbJL3eroPaUqvEvjDqG7oNWwuKPUBHHztaDu351m295L3pcm8zfiMLsopYZ4o",
  "key43": "22SAcrAmgJ1ELCxSCAuCzWmUtJ7wYEvwqAe7PeGrjwafq3JuiY6UyDhDDhnSmtPKKLpoin8DvtqGEi6aRXH14DuR",
  "key44": "4nnGxjLE9gbicHpXLkKL1Y7hoEf6nRYh4a85bksBGdeiYxRcRNiWtBmx44crix88yPD3NptD4iFYR2sYn6dduZzH",
  "key45": "2fjZmswmJzoKYVG1SYMQ3rh58jN6dfHMGFiQB4gUQjChme48n8c6CuD5bjJP3kCVMjVNnUB9tkmapYdMPrdf6sG9",
  "key46": "2GWNSSZ4CqBaYssMtY2Cx9Yud3fgsCrmaGByFr3e4uQ89JiF591yadj96VDKNg3mBfreySTYX4ZSzYxpY5Bap5eU",
  "key47": "5Hf5iqSvRrvXEPxYBNUikEYWpvKeKHrbGXWZekL8f7axKZku4a5XbsmQLzq3nTHeREtcnXBuevriZb4NxzFSooas"
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
