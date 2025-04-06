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
    "28569XoNU12d1QzMU8Ly5GBGJKwTA6hvkUE8q1xuz1i5As7Q6EnCXdj84CMqGXqiB9eFTSSBZhBKAUrGYAtqQSMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDzsrkoUMQodL8kdLEcBHshx54oBioggUokW2V6gRDQY2T3esYyA8rNUmXzjEb5ZkPya6xT6y7JJXav4hK6WeVj",
  "key1": "2DyzNyJroNxCyeHuXZXtXCXLeCU3B9QFhqEjfxR4dDQ6zYwD8bLeMWdbRXCR9hK9KyfjL1DjUg1T67FgkXATJpKV",
  "key2": "5PAQZLVHDsoT7jiC1Jdjx1NfixkxE6VqqVTqmXzS5f4KHzKW8zwS9Td97Zmr1T5xpmHHb4XF3wKmX4ee4ww33KKA",
  "key3": "2HtAfsT2wYJNEMqEVQeuucCmhwv9fBQxN6Kmgojz28zKPaR3iKWS2pLaJrcToLEoabb1n7m3FqXHHzwiCvGE1HUJ",
  "key4": "4xBhgH2tN9nqjiMSFMrd6rWw5a3cgCvWwHtpBGq4AbDTEZ18DpokeQzxjKyPfjbg8Xef3FbtSZLRT2ECfRCcfHEN",
  "key5": "4EaE89MxgPzAb2YaKcggR6SreccRDhSyJsZahYxwV9BeqyroHHyM7LaX82M1RNk7BmwSw7tm9nfXfJCjM4kt157a",
  "key6": "317i1JQMcFobi9WGoJyLazvowGZmMqCH4h1RbNup2RNTY8MZAmffsB9ES7br8JZwKF9T773SgfvhXkbuiRjuGQmn",
  "key7": "AHnwg344btmCnCjBZtsm2emGY8N1FqA2FsLgh48jcV5FyeLLAygKHzRwprHirBpbPTLxHBhAJBB4KToWZqMejuK",
  "key8": "rV1icT7ne3zrabXsWBehWFqJjdx5sGZPARVDTXBoMPMHxw5drRMxtANbjvCJhSgYHJg77Zd4diqQjcsN6VkAZMB",
  "key9": "42EQNy5TrfTHqdVPRGUTM8susc3xzBDnyVYFmeu4uvrBXpsorV3NyFEkdSgVF1tMg9W23kCZpFjnv2JYM6MbsMXG",
  "key10": "4hCPi2DwqHTXW8phKdxLLguzdwttnmcaPXrzzM75roeNPzfKfrtKvGGDBFjyPnQgNww2TGdHSb6eYPMLGEwR8th9",
  "key11": "4X29435Dcj56G5dkFTNbqkjTXSWC2UbeJDm3zFiiMq1mr1wrz3Nn4PYFBDCWGeCQGLPyoUWfYakggXdJDeyvWZY1",
  "key12": "2DY9FEccr5Y1Jn1iRTM2iYMVmBxemjimh8GUUyvcBB7uTqCvFJQvt99Rt7he8MdmwMQ9MifbDAoAtg8pCKVaC5zV",
  "key13": "4sUaoyMgpvFFphsupPvS91cMCKcwSyvACmqefMQgw8sWK4nzDTrKszmASVacpKYu6pmZ8CGuLBRq6Vkz6MTTHwjA",
  "key14": "eCs51LfkE9frTdM2YAh2gkYrUvbZ17nMCDeR3jNDcZyMn8v1NvQieCxbNcVsBD95u1FnsMLLvKoJa44KRWejvbW",
  "key15": "3LdKxZB6fVFgJR4shbyrbZuJ97JthRuRebFUJHiMhx6PWFnkUzAyS32PBnbtdZFAxkZUeU3dtLvtB8VurtuDWebm",
  "key16": "3tcchcezJKKzDur2SwRnkP8KZsm9Ea8FWrxjMx84VeJfvjL1V85wE4UnHxhCqkexvUhgbL3AznNsN6iapQ9nz38h",
  "key17": "4rkqHwFwSethrUv6tRfKm49wEZMB743dZa6Jcmc9H5HvSLS369ZxDTQo5SKHGqbs3Ho62mj8D7ajs4ipeXjPw2xk",
  "key18": "tQhARa26nndemCUhra5UPdZJ7isr5fk59orQPpkhHP2nuQRLxuau6Q1F67ATa6ZvphJRjV5r699Wt7NSmYExHfp",
  "key19": "nwRnGaxWEFTc1m5c2DErPU3VVa8chG3E417hnrUf7xrFjr9xaX2ckdrxYp5AWP1cDA4hSsMeCtNu7SfZRQHhkZo",
  "key20": "2ToYBSCXpArjDDXnN5iJoNoiChvQU2HCmiVDYwuUFF2bYM4UVf1PWPzPSXCQxBRj7WbVWVCXL13QHAAHds93pAK7",
  "key21": "3hw3EHxZud3qjPNVr7p7PXtfkH9Z3ZZ2ZeEcuYamSQrpgVzKY432eKx6B4FHz7z4CMT1T5tiQ9cQGh37R5jRFLXv",
  "key22": "5GK1TAXWD5pWnRYuvynMJEdRpqcWN9cu5KsVtZ2rTJoLwHZ5Hs1Ne4eJFKvedNqWnivCcNKr4RpzQuiqK24fya8W",
  "key23": "BmiTueNWBGGTmEjqEL2orN1Y7SdMKBUzSCYEuPvkjYoq2mmNkg1apkNChdN7WdmeJJxQ1ykYW63njFQib3Q3xp6",
  "key24": "2q2zaZPjSnfodAdgfpomzKdSeihBEaUkghnjxL4Dumx9HVrKfA7CbpXoY4KxMimcGuLziyykyViriWjMu6WCduKu",
  "key25": "HMrpJ5btnnSnym4US7pbbX6YDZmNkNEtMmg5LAc8VEdbhkpNMvqmUcTfZWpUAdaGNp1GNp337m8qTsXSVWoJAke",
  "key26": "5P8TjAnmCpQxGjYMW4dTwPEmUxKS6viJ6d8aRfvpDQc83jFnpduM3U3XkgtaLwiD9kKEMXZy78UBfLiZnBUuiWn8",
  "key27": "3FceSiz2j9h9Zvka59FGmEAvMMEkN9p4WX9MBTUM4NWBnjjUCfdTxPTLfRN6KB9ctThNijyRvRD5Ye4TnsCYRqc9",
  "key28": "2nh3S2ZdcLG2r4jhMrKeJ7T49YXEz4yVLevjknPx2h7B7Avdg2RARb1mKiSPcZPPXo2nFs7EQ4ZA5UxCSRfgqMtL",
  "key29": "67Nug3g9DXzDjmYCMFPzX87wvmSGyvqRf5DJZZeREpg9TBGjfrw3DrbNKKqJcwseQZu88xpcaC6DjfJ3ZVn6wWe5",
  "key30": "5T9Zz7irViFBLnjmnJMi8ecTr68YABMcPw9XuJc3hrMgBAk1Ut5htXC6anB18qx2T86zKCnAcW719k4HVq1Lg6vK",
  "key31": "29RKESBaWEpLGWGyiiQjkp1Zd9NuYf6e81DZr9MwPHGBpHJ3EskLyZDPhqsx1Zf5F5prx1UY3j78SeLRsZBbPpfk",
  "key32": "3iuSRca9PtvnUi5HnhiPWF8TWQj7gWjyvjnjNY31P46pKM6zEp2zNsv7J8QLYwoCHY2BAVQstttrZtQPeGHLf4xY",
  "key33": "FfCEwh52UoGRYW2nWokHB3A3f6U5yyCW56XjZDAhgQ8VSSzsmmRBRaiCRxRNusw6iBiyDEhQYen21T7AbcpFYv5",
  "key34": "5BMemMMLS4te5BFPvrE6donrqGb3dZpKeE6TvjekcHuRNS82TfLpmNP76vT7cit3E9LqeTw72BGvHgYdv7ZynKKr",
  "key35": "4kq5FcjxqZ1xV1MzaBGaPStZaNy8azuuMN9aUmJ568DL2kjWtMeZVsL8JdaioxVTPMKdmPCYp1pu1n6vKk9NNiYK",
  "key36": "4N9X8RQs1s6tLPBNLSVbK9ADkaXKovEM2FBD8x6vG5SpofGNoz4A3LyQ9D7EuagEt6C6UkS1FQTPmedKp8WwakkR",
  "key37": "4YjYsWwtsoHTc3BqRK8sYG1tEYEmtPA2uuiCBKQiU6rFiTGKp2jE76PVa1d4Kpwd8AGD9Cix1NkFp124y89UfDMW",
  "key38": "2sJ1sPPozWfPUHH5PE7aEC4RNnJPhkYDC3oZmD8YZCDpvev8n1AuDpREbFecqvrgrCCd3Q9PVgpizyZNGWHeDBUq"
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
