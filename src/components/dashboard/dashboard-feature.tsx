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
    "3aSXFbXoErSX5nogA5DHrJJFsdF2661C68fFLAmGeF5KGThoTfnCXXAmqJ2FrJbgyEjKBJ5X47DuNm5wJHfcaPir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZnPs7rFoTtqAXr13XJ3zEMUMp9tQnyJjPCvwSoBYnRs3WMVSvNaZ281KvejALcC3sPyuYpTya8UrdT5Qa2RR2T",
  "key1": "5rhVWCd39EJLCRZPHfnuDQUhRKcDqZAAr9bigwNNBAYRyugsuaRrzwZaMkqEc7DctH14YZxchpiY73QbbTjE2Zjh",
  "key2": "5SrcYR1neQsyAEhknqd8BybqPza7iATwgfRNEi7KmfcGoKawMau61GkhqJjWAKsGSm14bhaVPtL1HEBc2piE8ooT",
  "key3": "K9b6GYR9uKzhvhvRRLT26bYh8GQwubXBBfE6NVFJyzXKnSxMYctKkDYkuiHKKnSoyZkBmQB9XADywaVA75R3Kd5",
  "key4": "2G1B8D46btBH7Ya6beGBqtYjmqWd9tVuVStja8g2sZj5ydNCmyokUnd46iw9fe1E6YD2PHEdrvFGTpwWAWsKqY9h",
  "key5": "5yQJTUjPRh6bhSVq9xYmCQGFzoZVUozGV7NoEicYUngo2M4j1syt2i9TcrRtySNUq5gGyJnfgS9tcbyP1zuJMfat",
  "key6": "4fUDzv1WZRndsVXhy8GVAvMNP5Jgn9ZeoD4mCvWy5yoxExz7NbH7aQrqxmnnsUZixAbo9oKtw8YeuRAvSYyoJrds",
  "key7": "CmXc4NfN79Ww1xDCFNL4eSfUrRU9MBo4LmAgPsrsrRieNY72iYUkvU4C1Y3LiW1feKdLWTNmhtpFhbxjayAPxTu",
  "key8": "4ST7SFWLkq4Z3QEpyMecoaoh8S5cc3otj7R8VimXwjqsQR7ChYAeCGTCMfzuChGJpvo1uUKjnk3ta9ZiLULMmXV9",
  "key9": "3c7LNmCrf2fVsVRnUjY89o6y5C1pofxyWaEjgzChN44JSGR5SJhsCN7h7HaspiuzVsf5PuvAvzgzjcBowHH7SpUz",
  "key10": "5WMsCNorGyqSadUuqQ3YibHKA9iwdzr8PBnXHb3Ja3ao7c1ERS2qVb1hcScoXmFMm82w8L3RBnys7SQGhBabcPid",
  "key11": "27ZSCgY2bPmjygSg7Ufb6ZruJnKqfJ1SFXmrBkE8GNiYdnK6fqykDyU1eEhFh3aHdt8vFDWRnJ4KbdWPwXkv5RdX",
  "key12": "3KguT3UxK361LF6msbE3vZ6hgGJzxCXq4oLbqJx77Tf5KecQE2THqrp2XA3zLLjvdayLiPEeFDFYqXyqqPVaS6Pc",
  "key13": "4D3U6MnHZQyvX1FiH8M6ou6wL9PimxT5QSD8Ze5jEFwGKQmdcztC2RModY7dbi23Fa4YGvaFju9kXMxyJgFwZGWL",
  "key14": "3QiSKEncUznKiWaP5byLszyb7NQmYyvgQ3MKTbJQA5hWyTmerMG3hKigajvXQJs5ktQNUsN5cAJ82qeisPVGEHc3",
  "key15": "2Hn7c8dkcJSmWKZa4HCz8xmHECBgV3BMXciJwD6GnDgpf4fvQidQ1hzXH3UycvzKDkhvmT8tFshTxAESzm9oY6eZ",
  "key16": "4kvcU5MYk5SSR6xTqxkeg4DTR2FE9kRWNUnSf8veQqpXFVMae8AKhpbpzCpycVRrN8u1wAJjJ3TfUgN4Ei5t26Zx",
  "key17": "KrggeQY9ZzyC9SzkViiuwe1kifDALfrVgQuY9SUsdKd9VJS7NKe9omC6uUgh17M7WvkxQhFZitWTmC3zmJgmrGX",
  "key18": "5J77CLFTVdnQnVy66efFKL8TsLP9AJ7gZX4J3fhUUBQxxp8DqNjezXksExLtaux35xhYcPHqJadP9fj88Wg2YPaX",
  "key19": "2u1fWM95ALW8avti37fk2sJMD6o7FLDbRQM5kigMUtBsqKGaECqaPJwdh95EMdgPAD1Z9awAcPMvdmKFk8LAhGEk",
  "key20": "WfnCBqYZ5qwoUBNMK32PArck7n4rtEsvy3ioojxX2CF3a5xmy48fJLUojTSRRad4mB59Srfj6iL7CnFgaXwA19T",
  "key21": "22yi14Lq14gGMXwMrRzcs3RubTjXjTsi2y1wCiQeDVpT5xutC1PDhpikPqe3nPbkSGCjwoKxvXfeJ7t4jiGLxHU3",
  "key22": "3Ptk1GxZrVUb7Zfq6uQcb2PDfAkZLFVg12BQDhdLorRMZhzPoNa1ADnEfKDABcvWQLcEbJEKGfkcgvs3PCHYSUhK",
  "key23": "3TdMPiyjT1jZhJrEHh3xcQncwuVFHGd3ukoAoPqRekify4uqQtX4H3uwnSUsF1hJcMeMVdDN3NkgtCajwWF2f9hv",
  "key24": "3JbEafukXTpZNm5HBJcLnPfYFtKjfoWfktzZ2XVrTYwGrCtNyEwtZmiRHqe5xwN6xDWrAA7hfcRJ9qEt6wQwfU5m",
  "key25": "2Gntw1tZxeJREXxhHjxFcbSc3cj9dJKrbB7zgwTtgyQN65818EcSfTv4L8omHTjGPmjXmT1Ah6YFWTZAvkeXQB3c",
  "key26": "5EdcUa2ZmuzWyLDrMF8QqcPsmpzrTSYntJ7q37pz1BMMLA9H5XuSezJRmBkpYkGF5oD9fr2DGU1csC4J2RfkGMV9",
  "key27": "3HF3QqwbHEaJJ2qwBMNvNA79CUZsE8h9b8gf1FsGCGm47V7LYEKpYXuWa5C7CAKvjUZTeBXAXpHVSmTZSMKGRNmJ",
  "key28": "3AAwV6xGgJWR1tb9gVFgPxDGKXordgaaSatHL4vqApTBr9jYvgmb1UGt4Z1sYvWVuxRsiM4AAnhXNZK138MLcUxY",
  "key29": "YjDb4MaHLzuSortxvA39Ug9Eew1DBPQyvBSpH8WnqadL4QfJPDu6rccJbQF7oNeg77uLi4odc9Ark7coMXtkeBm",
  "key30": "5sXBpjMSnnyUhcuWRcLrc6HGeNLjUiULG1FKKgwAqcWdt3z4E2mCH9XLoRBSRyzPN3mroMxdGtvYnH7pNcd398bS",
  "key31": "4fC5CDcskSbTZn9HFVNsLjdiNYbmQjUkq9uj8CDwUnJhpMyvHZHimmrBaXhvEcfvAMT37krjjXPsgbTgaNeCGxa9",
  "key32": "2tDFhNSRyEZ8LuPUBmg4q8BKBsYgSa1dAnXZs93FXbZZrGj5sFyR8WuqQazgSuZ4ci7Fpooyv7q4HhUFpz9MJ5Ho",
  "key33": "5hVXypjJ2bo6KbE6vrLufunBGRWSpSDRq9CqimB5ycapwMc8wP6RTmU5uo4Q5xxKkiAddaHrnCgCvo11aiD2pSBP",
  "key34": "5W4BFnZrnC3uyD9FX3ZsZGTrFTVm55dgRJk5sAAjz8F9fEoY15XW63MCBp5TFZazaTF6jgDvVWWqwFxc8Pjxyj1q",
  "key35": "3ArZzWDunB8w3hXvDbDdUQLnEbXYmGBepZoHm3Cv9Y6Yk5rV4vEHeK5sVjeCCvtVqxG7QNbgL2MEWAZPFru4CfdR",
  "key36": "2AVdynXD8XRhj5zeV6JcGZr4P9av7Girhpufv1UqKa1ZhrYn6iHyJNt7sVx1pcFtp9ZEaGxvizaZF2uQkb58QwSD",
  "key37": "44GusuSg7xk9Gwb6JGnk2ft2HfGKFfh9XV8iyw2wJa2MbdMuzWJ9hjEGzd582RBJ6GUEaGWvo7JEjsgsZSLfY339",
  "key38": "dQCcSJBeRpivQkRyioc2WsQ64g86vewJFUFCa4VmQKNGox4yio19Vb5GPXAnCH8bQyE19fLvg8aaiCktcWQYRT5",
  "key39": "3wrrqF2twj49YtgmCLpAfX9o6ktpCzuQepf8PeN7WKtVdHyYznbAarEA6pJ3WhEWzci6YmcKPW1Aw2c94nnSrDPy",
  "key40": "5Gay1mAsNb92LcQh9gdxt8WrwFRioDGCokwxDLSn73nNDu1NiKsNzAofWwz32Fs45HTMduH9oSvuMA5Npt61BYCa",
  "key41": "2TfRvqaDrh5iqNLXcukHAWtJsgEndZVG6fGMgJBpbzTtxcuZPLqTE4CsVpXYPptiT6GCucFYCxtMsR7EUauatUhP",
  "key42": "2y8oKZGHaFUNweoPRwK8SkYkZScJVWF6YaHV5jHxrLFFUCEWLrebAw7PsGWgibqDdBYyfUWQjANNHoUM6UtC7ybv",
  "key43": "eVmHxLWZKkcK57Cz1RjmJHKQEM1PJnSciyPMU1hq7RjqNMktDjsNeH1862fUwDbna3HFLmQotStVJndk58cmYLL",
  "key44": "2rh1EPJVGFanxkpDTzc6USxqLTLX4hHnD8xPzLv2SGcfdLtbXhxyYMK5NDM15mL1htz7JqVMvcwA7fXyASjtwVa7",
  "key45": "5DaDcnmaw61ELjUVnySHFxfhsb69QP1fBk3x2EBqe5YLr1ETYJSQR2aBTco2WRDmNkpMqmxbV7yPHFExn5SehpPf",
  "key46": "3ysz3KnnSSswdZF1HfqTBgnVr4BAjARYjiXG2J3xrFADcxBNBfwNUYoomLdNMVskL9EpPVicKRNCx6vaFZcCJiJb",
  "key47": "3Z2hrpwJcPkNRX1Ga4DkGrPQe5ngAaMAi7PtT8m7fpZBhnxV19GKnpjNVMVC7YKFGHWV8z8FnzJL1i17wWWFLu7a",
  "key48": "5ejRp88XDA2L7bQ9WMuDViXyXXq8KwH6gTi5sGsRrqLfzJQdJpyzC9vFmBngjV3N8VRCmALnaMtDU4birwz8FPXH"
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
