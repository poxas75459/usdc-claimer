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
    "24wQXh4xe5AYiHL9u6Z1e35bgU78FVSCvbae2aasuW2oLehg2RMc5SmJaRd2Ag2Y7b7ggvMqNaKiMNyojSbGpNop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67175iHQBTCrRc2DBfy9ex1ukHP4SePkbyUp8k2ceFADWiUb8Gm9eYnBGUgRLBNnQgUv1kfUXvr2zGV7tU7JEgBN",
  "key1": "5dAAzdPAeHMiFvtVFtsjPBB43QFMeEzUrTwzDMmMX2L151uvPxPCDG8g7Dtc144PuaPdKXmtsHvQZ4vmLEZwLSig",
  "key2": "HyKrsDhFTkUR9HczNqAbXUYv8wLzyc2uFaEyo711BooxQHUUNK699HVBJTEqiwaGRtxubQJFiMprAtbmEWVMj3C",
  "key3": "5Z8QCcuWmg1yfHQuG55WXBooL51jgSYtPHvGwgWtoNAabbZ4Bag1K38zQd19Y1Sais34UJ8pbv6CeDxd85FZ2PE5",
  "key4": "dtd4SDGc7SvnJXz35qWEMm7qZ6LSoHKv6V6mbcE1PP3q7Gj1wzKBfTnqCrQmXE6ofvo3fim1CYSX4kLpBx2wGjw",
  "key5": "5SU9hPPAU5rWgs7E56yQ2qhExauvrpNYkmBAQu9CDJP7TEAYf3Da3jqxp385ZHMFcWVtJHdb7BswJkyVpkJqpDeM",
  "key6": "4BVokSGdKcWRt4JjKhrnsRb6MCiJQWyB1Cmuyreb3uvewae7Ms6HCCGEZ4LMExv811S37Wyyq6SqNBjhBQfm5DNu",
  "key7": "3qZeVEcGPsbw5xvFW49zdTMnosgQmWAUvM7UFAePgPK9rk1MxJwJeoj9UPsVwttDrwXR8zNomV3CFcPFSMutvmfv",
  "key8": "5PF5FVgUNdc3SqGh1BrV8RFktfhrsJ9Rk5efymQUwf4KojtnB7Jykta5AydiracsaVd1pKEaQumnd1QhCXVDy4y7",
  "key9": "588DEwt6fS9sGF2WKn1q1M7wrxrVYfTCSodKYNT8nbeSBRACbkwHjy9Bside9gi9Y7CkmLb1L9gKi9g4xgRBYs1w",
  "key10": "3NVsSAjoBUrBSL7Db9vWYVtnGmF9wZYSEtjGTHvz6CGjsaUt5WjVxfJbVvJ2pd4thnBv3VWswZ9nF7AhxdFPzQDQ",
  "key11": "3CiNQmcQSZYvLZVPRGJpVXEpc9FmrFbaKuUN6WBpyXu26PXaQ3Zh54StsC68LUZ4UfKisP6gxxXhyLnHpyTC9bzK",
  "key12": "abpa9dfuEKBd38JPTfBR6sNALWd7Z5AabedhU4JMKBzje4Tuxny4JTH3C2iszwRxe1eMyg8zVXs9AXQrZzKFWDT",
  "key13": "5nzDxMkseX3GChNwBYCNKyh9fNKUeWuEqBSm33CrwFuwCa4PnxywUDz2UHudvyLT6aqTgufG3mbJYuNad9cqrrcK",
  "key14": "2Jv9pcVMCFMGc6VD6WaLdZUVxCiSnGDnvYTgrtdiidAQutHNg75RxQraBafCv4NzY4kTtXMBwe8S5KhdFvu7XH3q",
  "key15": "MQGN7o3bSc4o6gywk2WeJbWPqrkSHbCQnUtPE6f11o4Xs7UjYThaurnnJ3HZGAd7NFwCtoibDajUS1ha323s3k2",
  "key16": "3BK54L9QHmzdUyBeHiNPxhKrypnJ7uk77DsY75Zvxs9uFMQqAt7NQUpJVzaJ9bLwnZcyNC2Pr8geL1Jephc5QCDd",
  "key17": "3s8cKj7D4JbdgL6wCPhLQEEQMq3XT6YCewpnUetaYKMkm6Qt4yrSLk1UxYQLE5HuaR3xdsqjbh3rknmCVJCqd6QK",
  "key18": "5i9n3ETbS18Ca318aPwvjHALC8GaDa8GEUau78qDAjtgV3n1jPodpUQvNoAEB8SvbCmZZauG3jh4v1ibK27Wa5ZQ",
  "key19": "2ASsAmCS4qfai3azGdnA1AKfTwq1yXfQcXp2dbmdAHV5UVrUL2MFbDAv8zkR4YaTu3wMNXsoPVCQm6aTua2sdTa9",
  "key20": "2gpYcbLAC8P5VSmoya2yWw4xmVGocqWMJ1p2cEfbygYBiBdsuVpeUgoobjfUCqBAnK4dDatFuNm2La81e8ukgQCZ",
  "key21": "4yaWgkZi2NrRArPnC1iCMNMengwRxTadDq8poKhwRYYYDN5qnnLJv3bedaQMsQzonuvbkP8kDGT2ARb4r2g4uc2s",
  "key22": "MXWC2pGrc97TGnWHgAPXk31ME92iY6VQAg9JMM5cusZz9dpUoqiHUzxCCkk5h7a71BWzbcnSz9GyWFpfn7fDg7q",
  "key23": "4N835DjR5EaHvseUBqGy1RWyDL8eHiwT348SQTudDi6CDAiwniHK3xu6myNeBpAtMBmphDBSgkyRbhWSFMehwAzo",
  "key24": "5Qg7UQ3EGsL7AmeeXN4bZ3gawb7QbvQqfQdaLwVTz7FK8KUYgVCxQAFyNBGx9SFB9RvWjX3pKF8EsaYxgJzcrcZx",
  "key25": "53sLnjtvCdR3zdpGxyoZDfHH77JSRoF6ySyWbqwH5ksvFhjLYojfcjxnWNWaAK95stemFP9tTYXCpUsu1H9vpZiz",
  "key26": "y5dfu6Ps9A3Yz6GEvTrxsW945sHBqELzrE4bstrocwiabPgNTHxmJXnKapYfnBWvzSnrTNFEyHAvPAti8YZCdCn",
  "key27": "24f1PzCnAX32EiTJsqS29tSxNmwqpw2au5aDemcHs25uMpefAfTC7SEfQEQeAvAMY1d5T7ZSfiBuVRhZWz2ZM6Gs",
  "key28": "4XcitZiZhmahfX1sGo1buK6zbMd3EJkebPG9Hj82Heu5MpkJLwdQ9koksZYGfmjTGetPusanJJTeEcg4JNQZQ1ez",
  "key29": "5LL43NApiXqUZ5ZbsyWXLpfGpTjacTYRcjjjvCKHVPNy7kSgPA6ZSr5vq1vA6BpatB7vzmXbKEd7hPhKMw5GGt2q",
  "key30": "37o5dQkRfwcsMYodSDLMweAoqJuNMwG93brfuuu4J9b54d75CX54GG4jFGyp1UzevqarF9mXNvZtQq7Zw8YFVxsv",
  "key31": "5sph5v4Pf5tSgYEZMzqSF1D6sy9SjjjSBGkEMq2Vn8fPNT9zPSJcwjzUVpshicMdskmbWy6XMnCjrPHR9McjZx7M",
  "key32": "5hrDBRTcbBp3TEWrdQwrsP4J7seiQb3ejumjdw2Z1kcAj7xSFMBMN3zGRbQai1JuGJyqH8Pmo4iGEKB6LF23jUvN",
  "key33": "sS8qYZ7a8ZkyQfp6NgUwWbsfa267Zz7UKgnwzPVXfzTReCJYrvHEwNEyh385fMVHuVLDEovz2pF2aTTu5mbbi2s",
  "key34": "4CXBSNscEUusn6dCbpcaQ1iZAo9wXvcw2ymTdPwbjAzkB1gGcaRTvubbyMA8vnX3Kgjcaaynp8Pc7pA2wLMRfjtC",
  "key35": "7RCbpkDoYubMpD1yJU5JiMn5gbtq6vVwhWg77ZiRQSwbgXc2JYPPKPjrqoBkRipuUgs3keYDzeXCmUGcDCKSzQV",
  "key36": "3VjLQQEJsezA3rHYCdAxHmUVLtyvtkYTPwLMAntNa3wzzs7upu9oXrxchMMj4pry1uh5LobEDUkWb9txSHNJMS8C",
  "key37": "4q3M1GY8ZGgLFzRrQbRp4tPU3cnEMPTp43pYYxkYK7pdd3QBggfJJxjVNfD9JZbGPvDJ46JvG9caBXQpeJyKk7Nu",
  "key38": "5ocyJsizPTiccM1M8HMoTamQpXkHZBresEfcfBBkYDZPdYFtdk5HPTR5oNFwKdQ3xYmkXYHfZdpzAFs3Dpgu37kq",
  "key39": "2MWt2mphh2jM6euJ1uJJLdvfDV7h9gAMjNkFK8vrFFijq6S7KAa4y5fe4wnouqwxp6mrrKQ4HD7rQDVza9nj8geY",
  "key40": "4LDGJ2X2AjmJtAo3qC4bGE5yUApQphTpgwpi7JGJq2qTBq4fCwiupWtBAVxrceXMGEEAT4VfMApfNJBTwpRdjT2h",
  "key41": "dBhhTehc19XDx9EmmQr6sNgBNHYancU5Smzs7zYJAbagzaWZoR194GJbZaYbCMLBnYaGy5CjRf1ruywGUMzC3xT",
  "key42": "2K434B57q7pQA3VLQ1FkMnrwM6DSS3g3gwrNX8aTmG2dstcHLibqsRJGbWdmw8zyvUZfsYPQj2QEgZQajeQggbUJ",
  "key43": "3D4j2V8tTz7H9T3vn6qUQtEneQjBMBUbevbSxUg9mAxgB6MChhupsWmvKgpC9r7XGNbV6QeiWeYGoRY3bn5EwvoT",
  "key44": "4oiHDq4zDSaEREWRgUAJEmA7hsxqnpuXXCzMxQw2jqZ116nitBhHZXx9pT8qvDJ4yiq1xhm57fo5xCHb4JndXRKM"
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
