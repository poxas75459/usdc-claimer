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
    "TfESJn9wHrMiat41F1NdD4u9nFjkbj8WtbdnQ3SrNnRtGeBnpEtgJK5vybVhAJwxeK2rABbDeg6i2Wg7eq4pbPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DL1FG4mDSYmU87edh1AnWK12sTkKCu2Z4v2A5kxDov4ppv9r2Z4qgthWKR9xsLaAg9dHX716P7XhJiGb2RrG182",
  "key1": "25XCWxtSf9cwAHjc7Da8XcrNxayxJ28gftqiNtQdJ8rLoCmBJMuRZ1vGPfwSh4EGQYAKnzVj4V6UVMwpheW97k8d",
  "key2": "4jjnpZMJXhJ1QtU7b9UQM6hWtc47zMG3F9RwDaJD8ojvBCmbdPHcHQEyfUvsVMon21JQN9swM7G1ErcoPT9Wm8e8",
  "key3": "2xV574wEVhpdZY5wjEo8qXQyHQN1BBrQELyqfMTgjJ42CwnoHMNVNpLZEYvsJ7qyq2VMNaZ83mJLS274RBAuUu75",
  "key4": "4mLbZKkjMydf1JeJbHRLKTSohyf1r718fmyrf2wov4Cu1UTQNQaB57LP4cyoiQP8VVEbQiQcRuF2uU8adsDiNgds",
  "key5": "2DeQSSu7UDUc16q1hXnQyhB6mK5MTH2fJy6J31xnbF9BgN1SBKkAMgSojdrwvrGtVCibf3Z6TNbdMmwK3HmZur3X",
  "key6": "5aB25ZjXEEwvJAqHGznoDW24g29LTUoYWTeoVA6pRCqu34CeY6ACjJg1HDnwPg4W6GNjp9gzqPKT8c52mTnsfGqu",
  "key7": "5mRKbNpsveR97bm1NCXp3yfYM5KAnyBNELdenKdykXm1pzUmSP9sB4ewKnkjDgbqFdM8oAefkRAvcMyCKzf3nUkR",
  "key8": "2CdNxLZDFERAShfhEDu9Y85w9eGLcDy6YTcMo1fYDURnyCrsNwTsSvCN5yDp7FEpPvc1Ky1oqUDdtwK1mgMumYPe",
  "key9": "k24TQpd3VLD2zS16JinDedBFWM9LB8HT6RPqkDnYQitDXWRmpL8tzhnWuRu7wTosHCDewbwJBYsEt9PGX1YUzHF",
  "key10": "2TrWG4sFLyPR7Y8vjbXvDaJDCmjL1UUwk1RYYjZCsTCHEpZmoX8jVu7jJjjSmEAxcDmw7X8SPF4AJdzJ3Ea7ERug",
  "key11": "4Gg9Defd1wLVwvZ86t6hfq8PF4fGyHF7Kq2YMB9kUSS3QQaVGxTEuSgM9RWpY3D25Bm1E4ioX7vtJq47fwxxEgmY",
  "key12": "2JcEuoymum8dt4iNcSSv6Zo2gg8PecpFRbCtgq4begHDQdQHZ8PQhXxaiqHnHE9oe7D1diojqAYpzjNQJH2r3QxM",
  "key13": "5sgntJCUE6iwo4JCt7iCEqKBbtLKqahvJBZBg7xsq5ejakgZgKwVjaXC1X89PAQeHW5BkCT47NAuznqxyqZWBzJo",
  "key14": "5bGCKPyD5J33cVQBywhH5tc3Bp7J1exC3vV3krH8Qs33mD8QFLYyRQGHMwNnPY7hBv1rAeQqRU1WbJmGcQzNSW2k",
  "key15": "7LD1f1zpyj4gCCCgyb3tHs2QyiP8UQQso1EqXxnYizqVodRjM83gFfpmoAGpsfmQFSyL5Te8RP6MC9LBLhQM4mJ",
  "key16": "5u6FDfPbFAozgWLdHvSCih6mFA1bAZC7LeVSPhSce1wihk72qqaTbxiqBjvLSqaeFrBxZnDXktp2QX5FeYbZdT41",
  "key17": "25kA3iEmqUfLfZq73mV16PThmLtLaVjsQYTKWUGAFEZFFYRLeWPUrhKJx7ifseHwnETNwBf2qMmTSakY5RBRSVZW",
  "key18": "2zSHTTWSTWbBNN6obSA1MqBBUAxdxmsQtWhHnyvdwUzzzHYTLu1FF8Q22JnMELZLghpy2hPisW8hqNmrNhp5BNUp",
  "key19": "2xLGCigex8iMEbKc9rQhgbE54gJSPGAFXNuZgqPRCEpx2eXEWf276MVHJMYsteYMYc5BFyjamUBhYceZodCgW64y",
  "key20": "vRcoSTxDeJZhBxiQM74v8oWVT5HVvZvbbyjbkKHRF9inW3Vnv3qbeQ2nQksi8VaY423nhU6Z8X6tQS1r8WzKRvR",
  "key21": "3dXqYzoAMzwmVWummXWf1GJavohsBaBiTtxWrCG3SC7i392F7Qqqskqiip4wf4mddNpDuky7Smhg4hA2kWGPvszy",
  "key22": "4QnwAC1M8pDD7ufcu9SBrTrKQJy6Zf2aDwY5EhKpZnenfVBNZ11ZQQDxbx37jjUESPEP5GrWove9VCjU4rxWy2yC",
  "key23": "2Jo2T2WzYavvfQ7sw4SxsBpirfrEYZBoTR7WLH8m5mZHRvt9qdXTzFysow2XJnepyDV8QA16nwXKphWznU7yRY2",
  "key24": "4RuKyi1Dy7z73bG55SBDp6tqhNswxcmNhTZfxqG9yL6vRPzU6Wuf6JGeuu5AyHu7naqymfrhMKxdYvhRLSZKan8B",
  "key25": "mk3zzvDrMA7b2ouzxtxAEPNeuSDrXYTDWLJLxSJktQgXdgzQmPMNTTVDu6vN33XN25BHaJxSP2UkZJciQXPZ9Yi",
  "key26": "2Wd5gMQKoCCraHk79XhwYeWmtHW985ksfTRuYuoazmyHYuMasNVYZvsLjg5rfCBRGhZFzoLFZ3f7iFt2CLEduEXk",
  "key27": "5sRRtAkBro1VkZE66kV7d58yM7EzoEMgkRwsiTyas5D5tfbr6denV2dt6Fp1SMiFGhVu8FQhy9smL12wkU1B9K1z",
  "key28": "3Xb9N8VexL5tdjykpFz2shkkqUK7Uer93BnVVUkedZU8dm6ThGhU2Ki4eBJcZGNiiTadSgNMNjkFz4TQTLiwb6iM",
  "key29": "ESwQ4NvtRXScbv91toHLTrTmvqDYZvZcYZGt5pmT6RiGYLEsHuAUhKPPo9N7b28K3VC3rGbpbjCFXXspPhioHq3",
  "key30": "2SRFMh5swoDbHUGcZbTbZp3zbfN8b1mHSXiaaiv9AMrb2cqvwUUz1KRFbSc1Ca6yVC5ZpdNpjxAnzCBHQMA1BCym",
  "key31": "33DssJmG3FrnUFW21hxAmUVy3zUcqmkHhDd4KTnb7PUvXZ1mHcZfTjAnHad4NVjb4VnyNsuJemTs9rFrwC6KdkZK",
  "key32": "4JGCo3xyq7buEaTU1FJix9v4cKiQ6v4SoeJr2yfbucRsRNNGT3ahSHf5nCFKYkxbJpuqSe61wLxWM5SnVWXenc8S",
  "key33": "4PwyP6srrch9t1B8Sd2ksWPYvSnFaoCBRpFTy3CNvTFqLjb3qdKmj8U3wNVnrUtafNtzEp3TWFebvFeHkJtxT5jL",
  "key34": "LUwu4n9yohvZJBcGQGgWpgtaFTUipjqELMqowgddeMfPDSqUuvc6p7mz8VPUBP8QXL9DCfnNx3Kk3dfvYH5Cxmi",
  "key35": "3Va5EU5wxWzBTDnqwEk1CBES3Fx86F2kvZ1xiFurxJe4KsFuur39tpNEEjMmN2E38m6gpmZohHDA5rk2wevW4Y7D",
  "key36": "3c1gKUHxEchCGYr7Nf6ppN8oyyCcwifbknU1WJYz4fqWmfEXx3Xf1Pp6Jhvc1nSZUjZBzFjrTSZNFCCH7NUQ8VLG",
  "key37": "9RYQEVPrt5bKHYR9JxSoLZS3gFKaPbPLvGytPToVttuv1hEbj8ewUyE1H2oTbosnjiXYUWVuzWmHn37zKtrxEQ4",
  "key38": "4F1aaqUDyZF8x4ohAcLP1z4k37kykGwMDSmcR45BJ3hs6RythzBsTnuj2JupFe9N7EACKxQdLSu7jCpfq2A6R8RB",
  "key39": "4fz1aPokpWpPceK4ZMPZC55QhEFgcyGRpYPsZx8NC1UE8FEr745b2DrogbyXYuf3JSVvbKtR7iC3jGvuCFaXKiRX",
  "key40": "2FNDjuzjhyV8G3HxZEKWdHEnph81JA5vzY66KKTiM1hPWFgi6aCYF8zAypuPhogAiTQuZ7BRzrKg45CicsrmKaie"
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
