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
    "2R15PBvM4TB3TzzQaBXzePFZgsSZ4PTZTv8s3tdwZehsm9xCCb8LxDD1eYxK5L1B3Eko7r4UMvR6aYnws3BEDGB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n11cLykfUv2H45oaw4Gd6uzzfAcVwGWmzSZAsvwaDpUS7bVmkSTAVDprtL71FxvN9RkrNmd3QgBXEFRxmukJgsw",
  "key1": "2q5GVCU2RC7Cs3dXBhHLYxymbo4n7sHrc873Xco8MGRToAhx6GzJHeohk4ztMuCyNotVG9EP8oBWfCpAgnA2JgkW",
  "key2": "3P8AdyGa71dpQvrt4k59vDA5BYyMHxvWkKoU4LKDjoCo5SJ1nug8SingG7TBXxTnLGpgGybP1NRgaxDYSUTCMQnm",
  "key3": "4QqMk3fQqLgzo8iSJKK9h9aoL1XQXbwvMa7vM2uXWst8A7aELF4hGuxnm8ELLdX4fDycjY9jYorJ722wThDv3qJa",
  "key4": "5RQHWCywzNyD5DUYbKZffj5QaEmdQVmf1EDQw8HAyzvUBxkHzfrsoBWGydyBoq6txRgHnB2RXaCf5pPwR4M3sDU",
  "key5": "AMVs45Dv3NLP6HJLGNTMtS96W2QFB9qcZxqvCR6BbigHupAy5aSFKHmpmcos3KwDFzqRJfoRzVLNqW2Dozhtp66",
  "key6": "5UPSMMqZ3EQhzA4pCm9o22qEN9hJ2gKdhecSG1rwJW9FFTjcsRvJ7qjSxkUsEL7cpHR4f3NJQ4LeCiHHz5j8ApEa",
  "key7": "2W1vrktefsoN7GsPEbf3DD2o5b71qgTnWcPnVCoCrBhhYPW6UH8LhAjt9bSyBFGUWZJZwA1uDaaEpw2ppnz7YJpQ",
  "key8": "Jw1DcYqSefSUjNNgx8J4ugmvuEwRNLVPCSty3dhkm3MMNoAu37SbbzFJEtNDiwQ7NB6ZRnhrfmxCeYM5TZongV3",
  "key9": "2RH8VH21Gmn8jxfXEdAfKbyo4b1Y966aXSDE6hJ8eNFVHFhFzYixhmPj7fD5BHJs7D6z1WEwuxd3zhRv1mj4Mpvu",
  "key10": "2gf63X2mV14uq5yiScYFbEJg7gEDQfyAMBnZmTX483VX4pWQbyV2UX7WyATJ1Kcr9YoXDjLDQLUtVaeTibej5Dy1",
  "key11": "5yUs4GzRgUB58XtXvUKhU8kBeqnybfoqEvDteifY1pGKFuRdKXoJzhwd2VAwnnLdu6F5UzXnrYAzXQEB9K4ByC1o",
  "key12": "3FkiSHdwqeLT5TSQ1GMBLgrhiXMfCy6vTyRh8iwdRaknfrRuK48cne6bnAV3Po4zUZaCLFKHDNcsnvaJacwbS1DM",
  "key13": "5sLvhKgEKbtjvQfUbC5axrip2AFg5YLAdTyvnzUTFskUpUZEYH2CG7YUfF3gbpR95nvBbgapujjHuPKe9SHRx9DB",
  "key14": "3MQogayoshi3Cv82YrXLRDRLBUbCAA4X39emKxVSVtDftYJDighGe1ukXfds9sCSR76CcSVrF7XF5MkWy7qtkn1",
  "key15": "25Fe6abhKTq4LXtgL2qQP3eKAjTDPXBuBkGKXq1U5tB5rn5CZermN76WSBnZcDJsF7FDUC9fwTGoioZkZZXVTD2v",
  "key16": "3xBsqYj55WHWSRN8HA9A2kKVgAEUxry6WwoKoigbGX24SCvYbDs6J9aXbkkpG2o5Kr1TjPHbGW4y1mxBznTbV4PJ",
  "key17": "3vT99PTaUt7cwtVRn3LbbGPjsoRTbqhUvKtsMHVxfoK7WBJS5M9fWZj6E7XsRgLfo2AwWT3FESei2n4SNpxbW8D7",
  "key18": "66hmxEgNr9hVvabusnHu1Z4u5TPqu68HnsqvyRr18ne9JPknXK12rGtzUMQvkmDzaS33y1tgcved8HacUMjfjf4U",
  "key19": "5rBdvF6ovNeuijDe4RjaQ6wN1U2uHgfX7dwZLq2BAK9SzVCRRL9aCU4tTyDpAnSo7Dqr2vhj9kZ5q95vzymkmAKv",
  "key20": "2mxxrbNqYhNKRkAGiU8x5NKRh2mBEbQo6v6yyKyETd854xQvaKicqHFtxajCuw1a3r9THk348hMrKi2zgXn8K2MV",
  "key21": "5vTfEEioyz9ry69ZbWb1x7cNpPcAwDCpGKLMd97jtKnatwuiT32eqyhkwiMrVCRQdGQTsUBaESPBLtJ1xGuSocx",
  "key22": "33rB3ES6djV26JFdt7QznvK32e4wy3i7k91WBzbCtKnG32oC1EzxprRtVWNZgFdswdkwCc2GoUNpKsSqFv2kuo5h",
  "key23": "4Kwver636eCCBn3SbfsoEpY9GWFsjU1t8AHfzdVroRiTHRhqAV56rwrc9dFAf1tjsPt2666MVNQnQwRoyUpXJPuy",
  "key24": "3UyEhq2iDanDqzLn48pkBtxguAeaLm5EF1R5dZ4wcopYNf7XoqHu6QtsUihcJ9oYW9C5mQsrU6NzUiriAJqHN8EF",
  "key25": "4FUh1F56XbRWHbj5F6WCTUwAhJgqwsMjvVsWeuaLQokVPB6T5VsfDQ7CrbXWiweWUseFk6EdPZTzedvPN4QrXeDz",
  "key26": "4MQowdEWnve6Qf8NEC4mx3rNrgRHtDKLXBB1aysjnd9o7sLubiBCs5yAdZ4m9hjf2sXHjtLj6P3qMF8j62SZqqd7",
  "key27": "27jHDhmV666LUwdFCziW1kkzd5Z19nWRnBaTmTABBhM6MZvrrytRop66ttwRiD6AtW7VvP5oa9qPMTXmFM1vKUjM",
  "key28": "2JKnZ1QAw5dXwtj1SM3aYTRQPvHy2tfnV16D9cwepw3GHf4zDkfLjxdyGKfDfP4e41EqSNeqJiHQRxsnhaDpsWy4",
  "key29": "8Hs5y2uFfpwauq8QaDJ8fcf39bzfpc7Dd4m8URdTyxD6YRdxStEMCepof5rdoJPcyw6sZPR7SaGXmJ9rxhEcasB",
  "key30": "4dtd1nTQe6vcB1DJNdMtGuGR6yccb1qQWNCZAXyA46RJjPwhRK521sfTdLv5m3hjdwR9De3WyZVhi3ztVfnT316Y",
  "key31": "4X8xpzTczavJTMVxqj7GLpsjeTL1W77saSfwxf3EAFcXYNJWqp14hG2wcMWkwxK6731B6wzgjoztVvTeuLXrjDaG",
  "key32": "3XE8hXcXm9M4PhJGR5Bz13JNVMY1pLvugGitZwXyFuZn1LedPUKACAhRzMHL7p75FikD7xEXT34voTh9JqXbiV1h",
  "key33": "5Dem1dhjLNhPYDwhZ24ecZvSufkrWEVGqXiXqfTj1nxatPqBpSfiNap6wFCPi1BAVfrEzravX8tXswExGRCvSJbR",
  "key34": "3TtVrV9t58CDJfLTpB1AW7itjhnxFSz1i871j5VKJDtEDNcMDy9y7RVyYzQc6Tg25pEmuj56zYSTduJDeVrFgnJh",
  "key35": "ED8DM5ccj3MNLzcbpRch784sMXmH6YnK6v1pswbkBEB7eVvy1Sa3Xz7TYiAsZWR35crJVvaon7vQkMsLKyo5kfB",
  "key36": "4iwr4buAsQHQSqhPjgpFo5BU7wdG58w7BbMNQS4rmVPJVisn7fLweLRfprc3fBCFeahExv8JCjHDobMVrPfPqyMw",
  "key37": "3aGScqVR1HkFq8a5JP5M8xSPFdzwZEqH7UfVCsB4xiSPi2quXxqaGJ6CC6zNHaEGdpgLYxHC2LsUNAynjVDSf7aE",
  "key38": "2SgXsjq1UAV8bnQ9sbezSHLkqDuXgCcph7CKDqJP3nGSjb9VthPgAgJKg84VuZwzGD57Kg86QCqTXYXQAyz56SLZ",
  "key39": "eBFBHaLpfPsgVuban1JeTYWkQ3PK8Di4563fJ3K5xPphW4pYyBFcCDNzLozy5TuSLVj6gYFFLE6QUqXddFSh4Eg",
  "key40": "5xJpGG5pvzuTLkiKTjTvqJ2HApHqE7gY99kaJSspZZ61aPvkXe5B3rnVqpBbDjMajveFqT9qxoHDS8omDVAPWd9L",
  "key41": "3zQ8aJEAxf5BGdpUxuTDPogJZUKX5Q1LvocGxJwHpDApLvW9KKUKmNKnkKg8ZGnysigP7Bo2xwnSRjRVWxNKaaZ",
  "key42": "TTTrN1i5qETzCRiP3VRF63bFBUFKAZ3tEuGSUBruMMoNmy8fxKbp4DnCXnn1ZGvJq7Dx2fy6TobM7sQQvAWdMyb",
  "key43": "46w7KiEGfiAe6SUyR9RLUVBX61ZouX7biFjFq5buyr8sRVxFPbdiSyjPK8mUyWSLyyUeXY65tg9oEZ7i1JTJn3Vo",
  "key44": "xdA3YqaYscXKHBcLwU2ZRtgko7rbcQAfdhu9XJ34FQkG8iqGeyyMrRSLPWRsC8kxS19vZyjRGg3K9to5yGbL4vL",
  "key45": "3tMUd3RoUjgzhnYJ1G9gWpTc4DUSnYAhvAEy86X1nAYZrU1JhFaUksaWa2ntDc3y4JnhUxfPqgtGigvGea6EWQsA",
  "key46": "DzWNxaC6ZEtz5CLDReETmLEbMzftS1SmFWgh9LMpWebS1zFBQq1Z7SA1rcz56EnF8KbDmesufUXNXYx7zMA1Xwf",
  "key47": "2m1SskEqiVtxFTeMx98E9P7njgPrGdgH26h2iaPq3YjP8b6XEp5WzfLK9drfUAsPgtNXQJfheQkYa6wUsZqZQJUa",
  "key48": "4kWa3cHiLdXL7UCbzp5U6fPC2FACBUx1bHWmSdPgPXn2u4KPsuRzkuawxaUxc8RRjU9zZk1tEFPGCZxd3jCjau1Q",
  "key49": "65v8TcHPt8PDUqB77ArW6hQK9wR6BCHiCY4ZifDj4HhEJtUB8FnEq9rBdehdpR6SDDBwy4ctwYCCtwEBHQ5FQs2Q"
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
