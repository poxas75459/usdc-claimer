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
    "5pPSfU6aBdGMgxorRwzeivSXyPfpddx3Q6Aj3M73fChyyQFfEmxMNpJnnsRYiDV2fZCHoskXfaGdSufYEj77eLrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sWsFGq9VxUn4b2p4XCv7rei2UCye24yYJzfhdobwvDyqcv1e1ZvhwxsAHWrwfp3mN5DHdhE3Cv8U8TkzoZzNrmH",
  "key1": "2V4u7ah9n5cQ9efAsFjiEQECMctrfGMrgFzcf4KLXAEC8otzGCz9urHn2LvXx8jRzNZHWVtiw77Guuwn9mTBW2Zk",
  "key2": "4BHmLPcHDtcpnw6VNH2XdXjmAWC5AAfPfG2NRZ7uo6T5LctSHXAxmZkyXBE3jFc2Eu3iaU5q51a8G9nidX72mo2g",
  "key3": "4gPi7fx3tzKReYHPxhm8QZUUW1ct2j1Jq3cerNK8aBtMUD9X73gEbUmckX1vLDQgvUzeVpTP98R8Fs3x7s71c7np",
  "key4": "484NNDn3NrUJvmggG286CKtWsGHVdBnWPXuiHKGpQ7BqqZ19HDPUD6jDFCf8HTyfSNFnaVRwkGNVPQxMbpoQ5XFP",
  "key5": "5VoaSdVUVtYaQffLwzp8bv3V84KzpdwxKaZXRd2dP71z9fr8D614o7DVFmCjdeVyRgiA69JqyY4dhex6W1WgtYu",
  "key6": "28Fg8S3hxYnY8fsezrUnu3CNysvXQ4zJM8EJvkWnkpDwHCJj7U4oEY7NBitwdsttzLzXZeSTcATbuh2Ycbp1fQjR",
  "key7": "4qPxCHDXcpHkuasFdryZLm9jTkiJEDzsw7bVGD8WhBhdkiwWH3DdS8g2Df33uu1GQ9VbfKvbmLmh5Xe4rr9ne48b",
  "key8": "48UuEvrfVBCySkZJkP7mfiN3QJVE7uzu6ogyJsUs7o1XrDeBLyYw6qwZ1tKatXqr3uQnC4sEhVNjogrCtaVLyF62",
  "key9": "5TrhEAspf212xaoJvnwH2QeA1iQnUVaPFi9xuznFv1EHyJ3d1EXdEx6rCFyepyZYH1SXNrcwAWjXQ88M3zUq14Lz",
  "key10": "5fZaPANj8xCntJiZNwsHmcnn7LPCdWv3KseDki95WwRAnrMYDU4yFzZf2wRx9YFhuVqHFPG6StT47M5oeTEbyYZv",
  "key11": "3LSh1Nx5HhgVFWbM9HZBymM9LwtjP61N1D2b5o9iiwGR2jZByhrZGajDDL4sj8yrsv4mT2Bs28TnWC9NuMLmTh84",
  "key12": "4Qu3ExoHbwxS2ft11pffhYV1UvgiouWGWyZ1nXvEukVg6o1ZmXPNYWn69Hrwy414d56VtAhzhSp8GD2UxjnGR42i",
  "key13": "G41MwfCbUx3fCCRHZSm5wrPc1E8Z7FE1aYFSHrWhcsWspSu4kcZFfsKGi4bRRPa1YzUnuFTZMphy2gJmEnjrxXB",
  "key14": "4hAg6zoDYAmm6rjkLk752QSBKC4KFsqS3jPfo8og3a7Tvje3afp15pu7BstMRwSNwjjnhCHrpUS6fyevcngzsRts",
  "key15": "28zXhFCYU4TiX7T69nX8S3cWbZZMfFTNMv6F19Qrc1asgM8atJPU2Rftjv5rG3acCuf2oztSHm1weiawNSkBuaD8",
  "key16": "5nLsefqfnfuhQ65MeWL91fu5wi5RLS2yyZiyTy63Biw8jytRbcj98NBQCAoU7PXe1aN7Y856pT5rn7e7V64c4G5e",
  "key17": "29qGguHEi7a35YTSXsHsQL9EKJcUchkpgaHZ5CQAH1DpFvmXn3oxoeMrCiENQtZ23yk4F2L6fCcKCxgR3dy8pdKM",
  "key18": "5WxJdob36fygddMgif8gRQtpYCQLm8ELqQc5ZEMhxHk35r3AVoiTfddPJVGRjQfQUChPZ13aTc8o1nMJg9mNjNLN",
  "key19": "CdULiBub1fESG5GGXRrvNi5YGSYDoAo44BdTqDC2Ufzq2XWXxokLuedAFRjHuU4YSaHFJ1yyN9dfqwRLtybWxNR",
  "key20": "SZWd8WZLRfu6buE4zs1ZoPKJQc7e7CTCvX77RqYmrcYG6psNXWwJpuGSWwwoHXJrwXU1vGmMPsQdAjEwfk6DdCr",
  "key21": "4yd7ycvueBpx84tMvgRTcNj2X8HAEp18HtpbJ5Q8E52AM1xHWMvUGxLQF4qNG7qxkhDBny8HwsJKvXkTXzWyy8vB",
  "key22": "m6qHjMBSrp7C1mrUyBPuPjtgtc13zMeZpaqosRJfhtFmavXsDk9k6gaFTjw5BWGQzPrB8tHcdFWQHrCM8h4NEQb",
  "key23": "pXinGG49PiME9cUUUfE5F44MgAFuSTvXxqkF4X48QCMFHNbWgTVYjzPCJq2kz7DDN1natR38JnmxYPA4dFKFnnv",
  "key24": "2zgmMNgFw9XkFobpvH3NUBgJNUxEiAz5wsvqzihPNvwhZVb5smeMCQErAefDeS6rQvT8qNqsYfTrGAeGXkLfWCEt",
  "key25": "5VouBcMwvdqBfFdKHu5tSb5wzPPq6zTJWcVkxp51B2gPa1idJTzeqgkHAuDqSUseanxEVFqa18rTombvEjNYfAXZ",
  "key26": "5RpG4RQmPQgEcd7fg3Kiyy8fFApRVDy5tDrqvayZS1qdxzEsgzVHSoKRdGZV1Cs9wmB92TjAZKwgXZZA437GVmTh",
  "key27": "5AR66BCtvk2ckfYJiwVV11Mg5jmyGbp3nLttvJbDmxNYSd5xX5F8bmi4dDhd5B5yxXRAHbJ4v3LxHxH4AWu1hg28",
  "key28": "3tEdm9JodAqKy3otuczDmWAiq7kP9AgBuLrfaGjGyCT7ZCnHhZbAc1Y1mVXypU7Dt8pQe74T7U6xwsFYDNBber8W",
  "key29": "6nANo92CpCcz18H1WAmCH8PU3udnNW23Z7CuR5KXcU7ZJ53MPYCF8gU2uTj4ZKVEvVceyN79faKNNXzV56TvGbM",
  "key30": "qGm9rHfoYZUwhisLRKMBXb8TvPbrmj9UGc3bkoXtVwcEfcewFvVMNFMqwi9spTcGjMKXx4quTSLBiC5eHJCComX",
  "key31": "59oAjsw32RLmnNXek5LYazwNcHPwP5ywc45wxPwrHKbdEHzXN6iykbpBfuHhqGyBThMPDcnpZpEy8v9H2Ke4KYRp",
  "key32": "tsaERGExpnXRGU9yHsuUad25g6tExsTC1RYrRVMYf5AcQNTiM2jF3r7NXFLyt4pP2cKi4mMWdjs6fbBGXKKFFAM",
  "key33": "296UzzwZCSLsyAwUda4pMvcY7pVVbjCNp6c1oC4V5o4caX4XJi2XfVyv7P1wmH3RfNG1C4tTDPk1WTyJG1ksKaxs",
  "key34": "2QtZLcmrciVKDvW2nTiGqjQ4uiCkNapWuohuCLXa9yCV6R7SxyYD6kfoixYfvnKmSDCQkoARYoyzHhKbF218hZDY",
  "key35": "5UHZfYhR8nWozXopBtAdE7dLCvjkpTUjpxbAhxmW5nhpUfBAnH1YuqTrng1RDg8PALkgw2qTf9h4zzu1cAPpDurR",
  "key36": "96XrCkC2K8wyAEB4EYTtNSPN5yuwn9YWqokTRjN6zZ9MsWc7xRNFqShMq2VSosDNTkTM69k5Gw5MuoeaioxDLrk",
  "key37": "9wn2yWwSdbomYd6Qz8iE9ydD6Eh6Hvw72opbgnSDyoLQbxjwBGFPCcGA6K3Vi9nJTWyiG6imKCmNovysProeGQX",
  "key38": "2ebNikHsxuaUENgyDaNLoq8A8VNaEHSshvzQjP5dNVCabuDaviqNGPALsQNUTeSu1AodKDcmpgQrwubarLZvQQrg",
  "key39": "4zAoFhhLzAD3CdgaGEBxm25s4zF1Lo3qNEqRtfyNwEz3q66U2SXfoxdq9LuEDJ2dg1dS2VqhRd8GsLUexqaBjf2E",
  "key40": "sVPuxx7idbTAuCUThNvtPcsQbZP1Dqb5zdkfPYBjx7gxTec6n9y2RA2j1vfiLigjE3GW9ErD9t7R5SdF9mq4iYB",
  "key41": "H1yVtUtnY4TPcUsYzW7N1j1XRJLep6cwj3wVGnwxrXCkeyyFLDVF19bbPmEtCLArf8JsPwLcWqm7DvjWGcjwtP9",
  "key42": "3E7DBVMPHDHtkkHgSjJx635Q37AXjmkVibZemaKEB9L84R5VeR1BmBwNcTC3XRJqfyTEMheCMWVcAmhHrR5zfRFN",
  "key43": "4snYp291dPuysXFG3m3xcfrdgiNp1V2dUvfrZepnqvHTpqSdLXA3rQG2qPCMp2ZbpjrcXfftoA7j7ufU47PJTDGg",
  "key44": "2WpSRWLRTPvR36tukbJZ81ZwW5xhk6FszdBXEacSPiE3ALcGVbru8tVMnFLtPid3vdXqpZ4R4QVEz125L6Tx5HrX",
  "key45": "2RxUxR4mmZ2r7ua75NHUJYhGyRw1q6615Z9mpUFRcSCr857feUjUBqmRoj1s1cwbsWoJkHJfcqWdnGzGz8YK54rQ",
  "key46": "3Q8iBgquz4pN8YsWx7NvBGRxfFkL9Cx4tcztYAyB3uS4W3GLMKezt7Go85hMdRdYFZp72YmKG3Zns9NSFoh5AuuB"
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
