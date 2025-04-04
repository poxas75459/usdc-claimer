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
    "5aW9AU9LowZQBQgFfLMsoDkw2bCHGf5UUDzqxPWvjbH3ZjM2tLBaVvzS3X5MEUj1UdYWidNytevPZMDmWmQAnj2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCj4XqbtFVMVFi2Uj7tkAhQQxx6ritGJVa27wKkL6WtV8SdZUguf2utDeWb3pC4R7D7D4HPXC6LtUmg5TfHAv9o",
  "key1": "5uMEdbLEJ2YpA2zQiJwBfVCZM2WesjcT49hBvmyJSbV39TpEtjot7ySpYeVapkc5WupivQpTg3PvfCnxdFZhmQuJ",
  "key2": "5KTYuzs8tkvgJ7WSdVoKm1WkfofPpheBge6SxJXS8cJ9amz41ayTaErAbfhpSrAMJvbomKHnB8eThjqCwpXVTF32",
  "key3": "2CL54QzkKG7uH793Em5kPuyho3t591zz1F3256P2wNkzQhi3HAy4VQrKM2VdixnfUoQmWsDwVWgQsXePegSN7nRj",
  "key4": "4Advif7v1BUy6TkRHugknASNjXHLrwZWQRLxf5xchXHBgD3RqV8AZTGhF2atYHJS3i8xHtoQxhGmmhZTvvRwCqPG",
  "key5": "4ZYQ2ZZUSASt9WnAHKUouxaCv3uXMnehqjYcbv4W57doePEuggeda19FAoVC8X2LPssEF96TDz85ZZD9voDVHXrC",
  "key6": "5EyctfvxyVCwe8AZ8uAwFmPpNo3zDRr1eZVry4usbjCQ7EayLZGGjksA2pioNuiUEczBnX1rjqw6XnpbMVteuDmC",
  "key7": "3q6gSPEPozPzUToLXg98BxT6TWSvBpXmwxWJejGZ7Gcyu8YXi1kV2GRZg3e6pFR453CaBLv1ry1ULDRNmbT9te5r",
  "key8": "2uW7hLiRMG44QXZW5hzQvTezVUrgT4qithsvMcV2EJxNf7MNY9gXBEmdVezkq7Gcn1ALjvrXThg6ky1WH14oiDKb",
  "key9": "46aDi5pr4hHqaZNVHXMKiY4VgCrQrogVEGVHwTtK369hMFF51YFVdVzi9DKc1efopXpYVzN7JLvw65KsVWpJRcZf",
  "key10": "4eEn4it49CYuddPnjSLgkp88qWPXveJ3wgy9ftuf6uYoq3XCrX4RerqUaiqLYHAPLRjEguG4FGNL6CWW8a8Tyvs7",
  "key11": "3JKE3ayxKhfoaSqwYCzs93qundKqFCYAp26oDNi3qUW5Q2dQfEHzoXp7er98veMvvKUQYtsGFp82vLk1wWcwzj9t",
  "key12": "2SUvnuZgggnB6abQtGFfQ3BvFM5vhnL3wG2WbTeR6VzR3LapfiF9mWzbFGBt4ooYKqZYKL7siPnFecVGv5kbmkxj",
  "key13": "6RqZ6AwMktmKK4mkJrjh13aZo4LesA9qFLGwdiVvG8DB9cCwwe3mV9huwPDvt6dMb1cPVzvVpHsumEC6a4RYwRm",
  "key14": "Fif3DTuzkZRD8EwCLbPp4iQJU1EQ6rBSTepX2sQme7UJe5zYV91DaJWMu7TxVgVN5bAu3a1UXHqeDZiqm9y1Ac1",
  "key15": "5EA6yEtzJdUi3BZ8JMSTWqQQvU2ytuohvYnpihheuj7xA2eYtT9cY9p18nqbSgDQzZ6T3teQdngdigLD6MMRvpAs",
  "key16": "56EvAwTXSR8krnCZMHWLPnz4HVWAgYqMmSzUNVFTz8op71bXamk25mRELhzytmKd4RcAoBCuEirP8R9gFLSXeBT5",
  "key17": "2woJXobfxMKh1w193y6u1mu7yEd8DU4tD7cZr47kHyQQwLVYukHjfdoDEVhEJHSLp7wdT4zHKTvraHh8SDNQGtSF",
  "key18": "3zcmKVhSoHYynjfRJ6h3VC2ZX2LoFYu7BGudGBZxV1M1GktfgLFjbFmpnp6Hg2JCWKaJadgN2Ht8isror1yDNpBG",
  "key19": "3hHHTfDwLdU9HSSbhQ88s9FxCfz3DVa3bkFUPGmy2U4kSzA82UwvJdaqLTJitGEPtptWhUufFNzjhCW82jH9BKPM",
  "key20": "3YLq8a2Jk4thXHD5Vyh9e86tyqrdbcLQmHhkdzwNM7Gk8QtVuwhYpg48VZmRPBx9Rj2KKGssEJ5RtJN2ij6HDan5",
  "key21": "2QCyru15q7ND9eYr8QS7zCWoqbpSTjgcMhv4UcFWpTQ4RgGYjKqCfLW1wj8bNYbaxg4BBxnRXbvDem3viL9Qa8Qj",
  "key22": "7fAXFUneMt4ZDxb5a3RdD5KE6ycBBhn8xqhyB63vBFCivMf1yPQmKptoBfXkiwfnktQvABGV9hHUw7oCVkk7RfM",
  "key23": "664bwK6RFEY5WRqSLndguqNUr2EuBcMMQGr5Du7uPvqQUnJZ7saZGPtqU2zy6kdkV9vrZY3f3A98V3GfrPn1yqzq",
  "key24": "2tqEQf4Ai4ytwoCztRNCNz8DJLPKaYnfUC55XJnzFzGz4BxctocAQh5xrhUJjVzx731fQ1V57w3kyAHH3cM9p7Xu",
  "key25": "fZeccMARp6thGXiQoRvSYX1FMzMTYLiK5BMBAkKCm6TjrNxVF2ohirEZD1YSfxVrCgKsceG2AHoVmNBPdgNr8RR",
  "key26": "4ceXDMTkR1g1rKQ5NrbZRVLc4RLYJXWtQMgj1AYfi6N26njFYdgZsuu3Sx54QdFQGuBArVAWLdsvJPr6gPzfxFz3",
  "key27": "2EQAGuGyqbbsscWdoSJWzWfmFEZSa9onp4AVc11EWqMaUvF8x53bJwbCrrTAjurFfsvTENCrJH6BbxFf429tkw2n",
  "key28": "5qF4udyCs4N6TDwuua5bY2d5q5YPrCkkb9r5hj8yNgbn7uK5daeh9ZzuF2TAvxJ38cJ5m92uJp238v2Cq4WWkDjV",
  "key29": "4fW9DNxnYJqkGJQvSn1YVtCXeqojz3C3CZaTRj9q1TTJzAR6CM2YZDz1vuv32DsSrBwJnpWYqCiXjqDgaBRvx4vA",
  "key30": "EjD3n7n2ba8L6KoTM5wJd1byGUMeuB6SwdNysBB81mC487EfyjQ6j4oQ8w4tmCnCKcKrtaxQMuAen5rqpFu4yes",
  "key31": "2PMJBz1yViRfS2DLtX6AhHEVUx4Vr29Mc2PdRHBETuqmyQXvNyQtt9r6x5eWDk9McNmo5tkniJQe2BgB426Ukgdh",
  "key32": "58wTwVYR3rneFHBvg4ncLDQNrHbR7PNyS3NRiENLu3Zj6S1AwAg3bvG88iwgGjetG8Zf8XNSpwdU88GvPQkQaeyc",
  "key33": "2eF9LXbwDKTSe1p92YApcMGiXFoAoENELs8CmiPyqUB37CvgP3h6DkGqi772ddtJS9vT8gUBgCUhANjjPqawTEjN",
  "key34": "rxXiWNT6FMEJEFgyt2aWypyfpod1dQWdy85DXxcVW3nT8FACzHofJDnAvR4Qo8mAnEYEXAihqdvSP74szK2WLMx",
  "key35": "5QJG2S2dLjjDgQYtECkixWuYCjfBcs1z78YugYgCBu1GA2NEEXLqAgWmXJprwAPJR8t1y6uMjSLEHkSRNVJzPwmT",
  "key36": "5WyWBKVGRsdpwQySscsB1dk1mgg52aba5UVBsHp2XR1MUGwPctQeuJL1fMB5fP7vS7jiirCFEh1UqAA71MVJr1Vi",
  "key37": "3uxexvFtdx7Gw5FMMubAtuXaK8ydC4wcCYiBjXFsEKpPc8uuiFyBkAnskzw4b7eB26NaKseUMD8irPVnK5mHZMG1",
  "key38": "4bjxQYtRgc4Xs2P27XHoircrAJmdis2r7wawAedtUnqnUsg6EonwUiRv3KqcgM36PQojTd6YqEVy8BexzKP7wjgZ",
  "key39": "33bW3mAY2NjyjJGe89gxkLx69WDkkAu3KT4Ae2dRc39DhJETDq7gFdpLe73c1YCwibKFXXY7EMRMWWEaUNCkVuPB",
  "key40": "4CDGp1MPh4SS351Q35a3ZdgqS53W2sCxhwra1cTkazsGXQv2oxHQEWHkafLoGtpkti3CvR2JDdrhDzvbddyqBvet",
  "key41": "4nXxutX8vWPEPUzRY3mV1BjuBYHTB7zoSfvXCmwiKSL6KHM4SVySvfG53tMHEM9GbkcuQ8mRSDEZrMR9EQcaDXvL",
  "key42": "2Rn76U4NpzGetfYTC5uKPo9EsQMfhzL1gEh8D1Si5zKTYXwfAqbyFg2pgJTGKpHVuTAZ8inw3QzwmNNBzjWL8mXd",
  "key43": "GCBd1th3K72HGaJMFyEFgWVJvmyxGCVGX4EvdHMBvGiL8oRC6MTYiuzkBPCRYQnv4Jt8kiBiNuZm9FVuWmcFAHk",
  "key44": "4ePAqazZD9dnnhfkB8hnSvK5pAc9v2M65u6KCFMSn73gApvrQ1hNX7YBzJiNmdLYkQgBkHGF2h33WuCwK8rH6BWi",
  "key45": "2NAAyejg25UuDrem5sABsffnX8GXPKG6tGSqczMNepLTwHjb6BfkjBLRKesJHmoMQD55GwRc3Z1ZK4McE8c8ANYr",
  "key46": "4LDCTc9VTcNUaMCkX2BR7TmAVMAvJDeWP2FFUadVNjif8KsvEMn4igVhjkci3RDEBeYHN5HmrruC4TD1pEP2WR8W",
  "key47": "iB2bs1RjAqqjDgphUtbNgKmLojbGPeiTzCryHKmqVXRnM9j7KiM7w4eBkTJ5JYkoe3TZsMG3eFmbEXeK7GhfBLw",
  "key48": "5PkfBWdD51FBQVpzyFTQCtcv3eAfN2ko4H9sGQKmzp5iTEtTsduZo88mGsPWkGbjBwAVw7TsYnAo3cXqn9Eh1SNd"
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
