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
    "5qq4rspFUainmw7XPbdF8xsxGGVmfo9mCCjg75vV9Vi59tus2fM1DrAviWNSC72PbVBTMDSUGGKNYtVFfa23CYNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5woM1XhrpRGvTkws6ozcvXycMuhD7qMEdfCji4udDz5vsoch7HArKsUMzoVzarDvgmoDoNLwfZd7KMigNADyJDkC",
  "key1": "3r8VzMzQzy274PfyuRkZxyq9mkhmz2Y18wSaLMgBwqKxb7h7xNCcr61d5BZs7t4zLcn4GQv85hT1nrymnqSEt1ec",
  "key2": "2ZtuVS3WGKw7s3ZtdRNbPHxbR6V6zPAu95TteU69VhJcGcz1evvpMnmprnE36g62cT2fS6hedGBaBFhWA4pJL1YB",
  "key3": "3qUqv4JpuPa61RM4ZLZFmvMs2Bm3ZCg7wy7CXYd1Dwv5Pcw8DVCmkg1UG2iqdxhxURwxdwNb22YdzgDiyoo9Lrkk",
  "key4": "5yQXXtUKcP3xBrkGrsRGxuNTbn6cPRSChRShT3CFjJ8FVVbVE1EPzgT42KsWnxcb4kjoNjYBrxQT7qKzpEUFaYrU",
  "key5": "pMbLuNm6LBuyUCLLeDrAoebmFR3zgriVXs8jjEHeahehsdNocCYY3ozN37ipG3EcVF3Kf4YGSCpNkpmRQGNfDoZ",
  "key6": "bgoeCFQRcEydoQwPkXoCgbmSGD4hHG6eYjGnzjza9ho2rKftZAoUg6uxJk7Lwk1HXGBJEMG7ciBxM357jNqBnSK",
  "key7": "4z3oWZwAvtqrfz5BfAA8QGGJ3Jz821mNT5bLXSsK1xYcfBCTfAkUbD8GBe3CwUV1pRfJUX2mACU5KFvQTmkKZY9U",
  "key8": "tDBoSiYWaC7e9JScs2M3NmLUgeBZLNYf6iBuQGigVfxeZ9Xj1jEe4HmkBi59BzZYsqoSFCf8s4ses12J1pD5jWF",
  "key9": "4rauVsHZm5w24JYPugVtDggbzqbvQvUA6NhUaiyKxoiusQsvf4bke3j8hyLyEZfQUHNxWQYBR5DbHK515koyBn1R",
  "key10": "4RE4pCQF9SvXcvoD481hcpoP1fDY8v8GCYcdjzjXXT9pUWrXcPW6Zxo926sWjKx5LReWpVEYSjgncBhZZpWAiwrQ",
  "key11": "2aVWoMaZdJTqwnVVKLPAQNBwvNuZeLr4SFiF1FW8BqycJR4u3925NyHGU8eutYx12wjbvSKawvpdhueXpkzf3XRb",
  "key12": "35p9nCoB8ZF3H1jURdFZhDe6QHioSxz93Pp7QwVPNsGf4EwjHSqVc3jXtM7GVse5o7s26D5W2qGC5obdhA1UcKti",
  "key13": "Gv9XnuVba7ekV1Bg8ULWP9NAb8L7tedFNR1qYdtDsCQLsf7SHQFE4LJhk2ZeHRUS3CziLXdKrxW1gwbCJmdtDm9",
  "key14": "3weGbVUEGksjtBVo8asd75E7LAhWXm35Pbowcf87KFS889KR1WwpgZwc5bYZvYkGYnB6LvFg2QBu4yDV9yM7qAq2",
  "key15": "5tNaPMBJeaB2CAxdEm1sQk7rNXGxsBuEqkMzuawBsF6yS67LTPuxyrmja4tkZEb7cD3Cr3r1WVxKTvGX2kpMNMe9",
  "key16": "5Uaycr2AzgxAF94uQa8rWL6cgvVXHXGWtCMHk6DudxGVkJMmnDoFpvdruJKy984CUiYMkaAsvK9PCcUh49RvYVz3",
  "key17": "3PeDWdSxpt7PBDGJw3TTCfNbWLQZthJQonVifFCgFo7eSpftX7hKvkWquUQH7AHbdV6WCYyhNuKgjoV4TNVnPbg2",
  "key18": "2tzvrrzXSt5r1XYrf3SN3DqdXdi1pUVPf3DqY8qMvfGxY3dX67ZTTBAmRdZAnmBvMH6M1BL6ZREpQW1cfi27BhNo",
  "key19": "5PLEveE5uUKHZnmTcfXc4ipAuMgZaqjiJsrRnGiUJYDVHJ8yiKowNmekXXN7cLVBW85RDQmdiCsv1z4Ch2r1AX8x",
  "key20": "TAbCr35teXAYpKRp8aooRWQuUSTXUWygtyRRhKbaqrq7P6Dd5BFu2QPx9hKxXGLy7zNLqK8NBakUhAVRuVAHoE1",
  "key21": "2tdiQ7FsQsvmxYDm7vZ27hvH4aEpnpeH2wBo2e3LLhs9BrUkjJnRvNDPY13yRWQAYJsK28xGdtuVsbt7aM3i88FG",
  "key22": "4T52kRepWomvS1mRmi399r1XduoLDUoMJFregbNLywzJkpZHALJbELZsYy9usRppevy9kHLWAuGTQSk8HK5uewP9",
  "key23": "3uQ8j2qVvg5QgdsBQHK3923zfJPuqyuUj34tMzPuEsbPWeNH7fs2A1VxKvvu9CuGyAsMeAYZtjKKGL2TjePJ5wTR",
  "key24": "5DmbiSNtNKwgGyNjVVByngEP9Eq8eQ51gYgihotxE6TUPbRoMPNNmW2hm62u1Nyzk3DPvJdRfjzo7hePcwbje8aP",
  "key25": "gb95BhzfT4XZSFPRK7vJhcJgX8JzSk5Wrbrix4fPBxdoWt2iVJfvJDnPatdDqKm8V6TCpexDowkZwr7cdStRSiJ",
  "key26": "LVMtjcSZ5ewaN6M3TrE4guYkyE3gPdLLMWJetv3Tv5mYy77DA6C4b1YsGYemyioexUTo6VY2GjqJhq3da7f5nnS",
  "key27": "GJCu3JFF7USiEigHwn43qZxLJwkk4QJpeS1SGLRfnDnNUkkixLnc8zRiryj2mW1UvZe1a3RS7wBWBB2J7hrikKv",
  "key28": "2mJp7cRmpPq3UkRz9pkhCGJEKVoiaDe2UKL3PJpb5sN8fAaRxfzwvL5inuMA2tbejgy4ZSPbakhTzimebKbKbNVM",
  "key29": "aLqx8R3dhY6ZYktpS23toHwP5hZf2c9egYx8kGaXE83RJe445TDAveHYYEjEuyZoHWCMkRL3LaTjj8BCZpBsEyz",
  "key30": "4JLja7DTywnJrPw6Gwm9jVV4dKQqej3EKfDonT29xgaNKLx8Rir6r3bLkNv6ryZWVkysrBJfacFhHVaWPhk5Qws5",
  "key31": "4sMUCY3WuLuh2GwKy1cdZc9mPNLe9DQbH3VHijUJbGtE9gF3cX8c77Ay56scvbYYo2ek7LEoyjm4MzNonLdfrSj6",
  "key32": "5JVH9SLnZwGDW8bDS1vZq1Q6Nh15vN5aBxUjbpYygpskAU13SML3dLx3XpAeHgWDuBiQpB9WWTHwEdHQKKSJtPjq",
  "key33": "3xY9iZKQKpnLFJWEmtrAqBYMFNMmFuPXQU9gLpzRVxoD9xmqjv5E4Mwqs7vNxi8hPUsUAnJSH4cyLptMVHnoYeW4",
  "key34": "3q9sNSLndKFU3oqM8YNP1Na5Gn12L6bBrYAFgKQRHEL6EwwQJFbyEh6AECWDG7QdLbxyFvgmrwbH2LEPK5h6WGet",
  "key35": "8wWXKRCYs27dfMS5gonC4k9srw1RwnmqLHgkHvfsMzvRFG4XgPQwzb3unPbaGsg2tsgZhb4N1Dkw2Tkmj12FdXo",
  "key36": "i9BUZrts9yt5SieKutniawWS8FZyA6GsdeRPUjAzQbxcmNToqyhLkgAJucrDDpQYcuWq921XFccCfQjKh4Y7pTw",
  "key37": "bWSZhGBgnd9LNHHFWxUPWnk7ihVzoDxZKUPy9qXZpkRbkBt7Z7VqmiXm2PEYZTrRXCDdaiMaY8oFGTJAZvPMtq5",
  "key38": "45JHw5wHLFRUdB67zQ2shuSja5jg1RK7tsw5ke2AEWDg1Bwseg4azazgaj6pco5HHrrtwVtML1yoKwTmsnyBRa2j",
  "key39": "5ecZnQocPdJqAbwF77xbamUKx6L8hohg6tMoz2bCxtsm3K6Kh2XgsB3PeRjs4cBKN6PYZLCQpa5xiZZqjEgureWt",
  "key40": "5KdBscbp3oC4d5qbwVy3LKU7x1tLqSoMAik5ZTQGCAHXaiCmLjFPkozXTXtStSuU3e8HtR16QvnfSqhsrgusLtyh",
  "key41": "1qbPCb3UcqQJCNZVSwD2tfVV7R8euRfwJD8hAXhehjQ2KC3XXKdG4sEGhPmRmfvsbA8NN1F1BgKSP8ycib3qoVr",
  "key42": "gJBvmxUBBBMkHLYX6V19Kfx5VitKYzXTSdvTPeudsYbAsrVjPxf3dvKvqchkrVZSUH7oJXL7vRxWHPFBAK7jULT",
  "key43": "5V73aeTQ7zhpgY7wNPTnT677vRMgMS3ei44P1hkmM4VUSdTc35q3WjLGYsLULPHx9GSvpDfurrgr4xPZFCiJH5nC"
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
