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
    "2mHf9eXKhYGBLEA17vwgUo1zFFLygUYdkr5ZM8PwXV2EDmdwGSQq5mGixqCMDhvSWckHEaNxZts4jaoMFFiu61XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UrJ7GSEexJ8A4jhv6GUW6nLncJ8darSBi9sqogTaf1GkfgGu6Ax48ZEfQPNyvkueXUZL3zURUQKDXRG5Dva7CYW",
  "key1": "4EmUjLzBMQrhYVA9TrBWb3mGDRjPSxTrboVpQgWEw4qR3kJPRLZwW3oR1dVzHQWmrwyjUxvRQZVARVq4yLfNvM9m",
  "key2": "fvC4TH7tgMKtiVYetuA5CxkbpB9kXhqRpwxJKcB6i1WsNyQNoQZWkhKpu7NozRzAUoNNxep5SXg9Nw4YSruy9P8",
  "key3": "zDoo9eLGAjsAXPiqSU52SqYLgDvJTowFdf3UxStjvJRpH8e5qi5iEsvGgc5nPVfYU3HHURgWLHPFZfG7JGfcVy1",
  "key4": "66FWpVaAfDVDNpk5g6wbY7VFPiVDpyL8TPDqhPi9skyrEs2J5AQTYHrmy4C9kdtm7RxX1qy2cvKi4xnerg1EVsWu",
  "key5": "aiNgAjJrXQ2sQdNJBRvWNGL8pFECCs33VzBcc33BD88RHorW5WucQEHDfEtzdveeVmi1F5QCexPP8w87vZqP776",
  "key6": "4L1LwSdQnXuwC8iaHzbVECMA33tvWzwP1UznLaxmygxtjPgh92EQwobXKGUTckMg22u1BQopinmLTod3eYgYrePP",
  "key7": "4dU7VhPpGzC3c3wNeNTkLwdFirJW8Pe81NjobweVMSvGDAEUMjpxdDRJ8z9KVVNbfGtHXYqymQxVXmKfDxEHd65e",
  "key8": "3b1geYH6ox2TW6ZU3CcAc6ZtgM2KHgeFnaikQWsZKwFeSQgprtPh1PrTWRDrn77UuMaRnxebkYLn5BLAALYqmjiE",
  "key9": "4CBoqf6pzZ6qvBWrj9jF9S1SjutJnUUhpkiWWcdDjmKaLQ4Yp6KcFvNfxFNrGnq84bDXAn6zycurveYgEC426LsY",
  "key10": "2TwghxnucfqT3BP67KgXFcUXFmfkh1bFH7FVsfqHiENZBG2NpiakkGs7jTgiS2afsdTYxX18E5kKNHpQXs4tmSFY",
  "key11": "5dirJQDN8vCDSMpCMgHZikJyUzv3Qyb7GexPDb1mZmWz73kp6nudAq3DXnSG7k36jbGxCs8yD3fY5kXZYXVwLg7",
  "key12": "59kZZKhar7EwDXW5PVfitRjNYd2jLkDwyBsKbfHETYjKWZJDsUatNBtHRb1DymLF3iqnmrNvDKBbbpJyYSp5bNj8",
  "key13": "5UeqtuTuCTVnTqYdP1AsLNn6ge1eysqoPsKxBxeXeLc88xCocnd26YmXDvLKUDt4MMUDiDx5FwLRkVipqVaAwFXA",
  "key14": "5vsLtL9Zhsm7rV3mTBZ65aZFtr6c7i3a61zGH7BcRNHiaWRoq6PNsxF2ZUkJ4eTzzyuHALzzrwxCCxKnX83DDfqa",
  "key15": "3n3CucZgydthapGeNRoAPeT5VPiwj5D8zJiGLRxvfnvp1Zyfa6bPBB6Kf5Fs5imXk9FjtSefKvyQd2e1WUKFiD8v",
  "key16": "3bRKecERgjDWX5zfZh9yWL64gF2yLG78rVBinqEc1e3jFKsHYAR48F1Hi5Jsr7xLvrfo8duQjCRBkqDTQFRZcwa9",
  "key17": "5jBPRKkdn1MKa2fVvqf4US7sSDrDcU61hFZgYuVNYxAwBiJ9ZRX7SF3SZ4JcAQY5WGv1YPejVxMrzWPpvtq3z9Jk",
  "key18": "48ZZFqGLWD2U2jX25Ajev7rQSBfygp1ajXDNCYryth8AxZr1wB6hQEQKhcW2VkVP73SbUwChEKUpTvwLGFA8iukf",
  "key19": "bWYueJ9Az4kMdh1dEYmN2oGw5zdD2eR2DCf4dSSm1aA3Hc9hJEgb4EPwHb6hGmMusvCrfCVt8egKCKNDCkXdzPk",
  "key20": "3emw2AuejzbxdkGdgpCKaX2o3A6fgb1vHyLo9ZCJFXNxRrH6VwfRAiiy4iKjHKdNFTpacxBckugc9AB9PoVsS9BY",
  "key21": "5MM8rTukw74u6KML3Y6gfHLUZ1D4JBME7RuQNmH7tRvixe3SdyR17KXcfhv36swaykgqGL1HVPQna2Vbh1rwyavv",
  "key22": "2e1v5MFxH5iiqTUumPhSLGaWY2YVk9QhFt7bqe2kabDkUqThvtDiXLeE82k5opsqhqdPMwSRBiQgwQc8Z3hPeMCf",
  "key23": "4LswzGYDbbJQRtaofvpXwBRXP6tBPpvf3FFfBS9iKVh4FH6HQrGhYVcyzBBc4rnxRBbcKu6y1aUhJ5K8kFagAY11",
  "key24": "5Gi8UG54J3dwGS4R7DdqcJMt5oNinBSbvtvMPbkVq2hGrCNDnyNhBgcZETUoecrKeadBr18fqEJ1CfaBUVKwdiiV",
  "key25": "3XPfTeCFgkfg4zQtaLxFE1SHDDNpDC6N8yUzv3ba9mqqnGzGpioGZpoMoPqgbpqFFq2156N6rhS5w827NnoywTCB",
  "key26": "SGdDEszDPFw7B7eA4ty6C1CUXbcLu5NwEaP9eWFHyCUkDjCaH3Y3NWbgbkGabDRBTDxq1N4rrcM8brwuPoUE5eu",
  "key27": "26B1DRYRyXMFkrxPoQ7foKecZ3zLJxVwmunSc3ea8SuNW8hFYcNaHZaNr5dEVsK65j6Hmf9ZUUtAJnTYzg3oxXzi",
  "key28": "4ZcZTHwYKsRbYNuvWx5DoVSag4Raa15y6kSDoR9Z22yuPCfBgpAeVCpNhNNm7Dkeh46zsVbJ7YMcrsGZ7xGqXenJ",
  "key29": "au1P6WbejzR3FF7f4RbS3oaKUUwUhHaezRT7wFefxghDdwH1yiTXWRtugFEzXSxYFkeEGhipQ462j4P7br3EhqQ",
  "key30": "67TwQ8UDzwTbsWeW13MbNGj1FdoTfuRX46md7skEWMrFaFuGevc4uqjges4toENnx1vpEFNc4VPJEceCBMfVMVpr",
  "key31": "xgtJt7AESGAmGrrPuKA9zyMGk8i7Z8KuRTwnK9Xy4zTdkeAQhXbo9KSQWw5p6AFomSYcWtgZXWCbPHxup4PmyAH",
  "key32": "2m7jNsZMqTWGBvgVtHtdtZzW4ua4VzfdaNtoUHj9iqQvXkjvAV76deumXtt9phqBbWVizNY6KvM25ECbKjM3oPVz",
  "key33": "4KWCBmBJEdvM8FyCsL1JtLxJP1HGxNU2WAVBb3da4gbFthg7wngdTcsPBWbyyfC1Ns6AqLiKHUC8LvLb7VU8rnb5",
  "key34": "4cYxdHEBmsWhbPNb1oz1Q88DtcdBngSrY6Q5oSVQQSfz5ovHKa2dR5MxVWGiBZZQuc2NMVjxJtXLt3hGP43sDF8E",
  "key35": "5sQzvJKT6HudP9FCYNZTxMM4YYXfc2zYS2qrLnbo4xReVvkcAFN3hEPqW9J7FpCpNgfD4sPPu8JUebnrXqkBufZU",
  "key36": "4SaMZuqNsXnNeF1GFWm2ZWk3sQnBL3sQbD2ixBs1DntHMNcxaZ6cbEgKD1wgLyxbx8nAg1BHvBdqPWUi5k6J5Y6h",
  "key37": "52uGpqjDqJKj98pr5WNJdusfhGcaPMNMQToh3abcVRMJ7YcTPVer7g34H6qW5frtKXXmPgCVdxcUB5bDubdhq4oT",
  "key38": "4RPZc96VdQCA6kSrr1fn4SQLZrs9C2rAxA5LWeaezvUg4bXiCnPx2eG2ZzVWaxhYCzbu9zK6YaqLtZkanGiTqZrQ",
  "key39": "64aFxuxmbD5AG99JYnvWkWfDF2ZRo3K2V9Pbs8vYxxXU8jmmj12RmAsBBSvYmefJr3gUY9axWaToJ4KPEjnkwf5g",
  "key40": "4zCEGUDUYKNxFsRLR6VqU61gufNV1Vir5Zxvdvb34KXj9zGzu1RwC6kRqSjAGYNcFk9ZfbFMY2Z3vWU3x9ZXTVjt",
  "key41": "5z2614U532LAd8D84cSkJdNC82NfifY6xre9wLoqaC1f32xyaGh9AktfQoXJNiayWC9gQpqffjZ4vbzQ4HPBYrJM",
  "key42": "5Ljq4dsyTq1254TV6L8krzGfVtfTWFMhmAkXTz7WTsVxE5BYsYfH9rNr7FiiJ43jXbKVaX5T1yXCygsPpCdg7iwM",
  "key43": "5Th7jvBfUtocWGoCKbDa6fn4QL3V3BeLu3Mpq6pD1nfg27WZcW5UeqMUryZaWaszJJAq422SjcssKhoFtHF58PxA",
  "key44": "4Txzs6tnJCnMeQWyVxkYvkmWg2qAsCWVkDpZXLpLWgf2hCqZKKe8qrAc65jMu23yrHyEahHPM5LpqDaLNaaKvjN",
  "key45": "2equzW6gHiJR42nozvU8kaSXRhVSWdgR1rVeJyvjpMfo8r7JSjoyS59nQ3pZZ8jfzjRbPdnUzGfRyEYvCztgw8xg",
  "key46": "2quWG9gL6MoZVwCr8Kud79oda1t8N2ahN3uwZRR1P4SeYbPpgn8R6q2wkDz67wzYJkDviGuzV6AibcgLjNqkHaJ7"
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
