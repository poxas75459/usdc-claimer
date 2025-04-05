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
    "3nLf9ZWY9fBANuS1vitRp8wSqwZPBcMr4PiPwsxr9RfasMTLwoVBHnaexbQzz9bWkerNhvxNUt7tqSVmbAkuze13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBoATsb42YTefHHpkcRJKdRDpErLQYjYGMNqyb5AbE3NoHHwUQtE87tk9B6Sfet2DvjGSi5y4y4EDkiyrYceUcX",
  "key1": "hmVxZ2PtLEKVSKPM1FkMhrFbY7QanyDVySGFvx4cvVA9HMA4aGsP4ecawgAwEYxGTt1Qp4SKC3Wbohoiy44tDyM",
  "key2": "4kFAc6eCNUXpBkNEKsLtBgTyiRWxfjP1z8jkeXjY9hW73mRGuyWKfKUXSWusdLyjmAUijnMo5n12C2c2FDKaPQcF",
  "key3": "5ADYwS8oMSeuuG5syRA272cmoca737y7Ubz5MPR7Ch6mmxsoPRgPiLqn57Mvaa5gRniUMVA2tAePhGneQ2oczfKf",
  "key4": "uif4ACBbnecTEVhYhiJWDbhQCxwU5EHGdCcDYpmrWeHkKZ4qwYZvGSh7sBGEJaAY3bwXDAi3ufuxB3BQ2WEtmv3",
  "key5": "3wzyE1j9eLg5CDwrRsVW6h9Dps9ECvDHFb6dhu9bBSuAGz6Ub7xtmVDdJ9Vq3gAteDrUCVJzy24AYZumsRHejqPS",
  "key6": "4ZQTs2S5mg8tLwssUgPEcU296t4EY5v3ttNeNtHF9covtQLy4UJHM5ZJ4fxTTsHxJLU4DMkff6CXJnExW3XUV6vZ",
  "key7": "2RPNZtixYHWZVp77NA1MQagSCGXUvwowxsKEiry2uiXqz9Y1NGWDFbpeboAMpsC9rZs4e4GrRoHn3fcch3s6zZYJ",
  "key8": "4yvxeMu71W5YAG9s8JAiyHsXLgoK1FnnC5rXyjSqGf3g7FHwVf6J1bxyPDoxxcz8RAREVFa1MM2zwG9KPw4GgFcA",
  "key9": "wCLG8HdGDEphnzdY5a3t4sAnSUfGxwZaKiPFzX1qBFQ6Rgq7jRaYCx89FSwQ9sqpudgxYbro9ZPr9M4ZQSfTXc3",
  "key10": "3s6RTVJTJf4ZfTEYmTZAU3nXBY9yuPdGiebiVwVYJWVoKGjPap7v9QCMm4ZRLAuvnpBMTVo1rdHwMtZyUcJ5BvSG",
  "key11": "2SiThfQxQg39vqME94PMJb25ocjVrKS7KGGqGn4gZoE5Q3MUUQTfgVW8MuwynDFLSL2pTUgS8egAdzKycyJnw34F",
  "key12": "3bhrze7HnwsTSdB2eF8RQkC6BLJkgUh21dF5dgfG7LQKEfVEg4X286opWveB3j8VDnbpkpzimqZVgKBvUeWR2NVy",
  "key13": "3iqjkg9Tg5bCX8ApwvXjj5DoDL7Gai6raGTPsNerW44QjvfngoU7tB9nRYY8jjCod3uE1LA7g91kTzVKdLdNkaxM",
  "key14": "2aqyC4uVcVzeerkgkV48cmCyTSLwMK9R529MA7ddmYGoDU2tRcgcoWXk5LiDTxWuM96HKTV1t6cqZcgFoQKGt3Ts",
  "key15": "32GbY6DL48ZN1akV2hwyh3udsiksTenG1oRnhpuW7f6581PJ7r1rPNN8WHH5w9opYQmNyrqjhVALheepTEUr2Hb1",
  "key16": "4d9tQPRR2T4N14wbySPgszLMKuiKW1FqD5ZowiVvKwuKakiJjSWQuoJJ3zXKBbH7N3Ey2pZAEwN4XpJV6TRZ6tso",
  "key17": "29X7jE4zDMRNHA1mDY77r3Tx6e5Q9BTyokGNNqcatXy3YJj3ENLtRW3hJUYoESBGGcTawbNKi2EFX3FT23xS6GvC",
  "key18": "5zYeh57NmyLzFsAsZn4Rvb9TeGZgRstYp6cWsMAm5W9wBJ8qJHw82W6xTuGzLtHxrfA7PL5mU7RPZ6AwLiB19BJB",
  "key19": "3kH8MtPkJ3mgM1o26YDJ4BKSmFxmWoH18hThgLV17JhbipTSsa9mdrJ1PTwaoN7cPJQbweYnpkM481vJ6WcWMF89",
  "key20": "2to5iDyFvFwU6Y2W57asy7pGLt7f44oQehcvykFykcvsKtznURNUZucwULAQJmPGhJfJ2HFP3KJUPgufkuFCcHTd",
  "key21": "2ecvpvEgcSBjxArEayQS8Dw7c4oJoWTyTz6LPApanGbAUtvYvSoFDmBjyBqwzKXfpDd8NoAnffQmanqggQ5ddvTr",
  "key22": "6wSR6Usxf5dPLLbjWfBBwSB7gMDVkwdMtryBvxebucpCJ7Qs1y3VsYz5P1xFpMFgTejwFedyJWtRwGN6qq7hXqS",
  "key23": "5Vr5Y7W9s7WqJbVDmDmM8qQUXjagahz4BY9mVSVd9wsFPEM5EBCrYQXu3pdzGiSTHHEo6VJ9MZAMXdbGAX4Mkj1M",
  "key24": "2UJfaiM8vtEipJXykj7Ef7wgJDEcCWm5dKroNYgGJKYf1RpNe7hAqHfLG5J7aiUiPDpC3wjTjdd86W9opG5FYgPz",
  "key25": "2uHtmqQBnKbTsdHbxoS8NWsdMyuEKMEhEsmAyPMS7DV6FEZrqDFVC1VcnWEQeWjkhJWRVem2XB4goopmqiH7p92d",
  "key26": "4Z3vd88enC2wJUkFD2SD8dk1tnpyK2WMzP93f7Sxv3uB937pKoBE8XQFQCp58x98ypZFZ7c3DcqhMw3kM246E8KX",
  "key27": "5u62smVqZaxskxCeshQxNktaMbvaKGKX6xLWMd64STai4EedvCD4CwqpGevbm9ugc5z5kkqc9UN8cpoxPDjL2mrN",
  "key28": "4qrXvL6mpppeKFYyi4WnTyzV56X1Zmu3Gy7WGNfAJ7DZXw2RaDJ1rdgCw1QoWHwsvEDizoVBhfwbqKD5S7ZMw7W6",
  "key29": "5yZwXZ85vPUeLeUUNtuhhcyPYTHm2MSm8NMrTvcFrgRjepqXqDHy8UDr7LGGtZFeJSdp3dEaWnX3xVLPGy6vryb3",
  "key30": "5FCqyfsRCckSukxXJMjPpcJQuTCjuuXSLBpunTEw6fy4t4GkL6sFD11zXMZrHqBWgrKXQtZ4cYgW4iZbcrR6okkb",
  "key31": "13eNtsQu7aFGt1jg4KWWy4FnQDwxqMt8QGyX89SRqRLYR1qErRwGSqz7KEfdCKqWvmAXTgvuYS8fF9yAheMhNmW",
  "key32": "44uCnAEije55ZxkG5dfJK6iQsmby776AXW2dG2Q8pd4wEGztZjpZy1zEJ29VPjvER5DSHmCnHbw3AGsrZxFnpgXn",
  "key33": "2kjE3Pn99Habh5V83nFAdH9H5abkuFxFzf1pTfv6yhzQQCgUTJBMJJLcg5owXpBmd2uCnzF1e1N2TMbxFcgvaTt7",
  "key34": "H7b8KEhwhLCn7ujcqy2m8C3vxujSiuDNZ9Dtmindai8uNCDhexNTUVgSWDz8stzL7exQxqoQLx998o335jhJdy7",
  "key35": "3zkaFfVPc1RvYueMVirhjif34qYw9EzhNyM2KeGS7FgXp3JAW7J6sT872k3DdTTTfKLgaXgVXYMWxt2YkBdjHiDu",
  "key36": "4cfC5qKf4PUuCjhmQgDahWBKTcvKeXCkGwRxCBP135fYVGhq37LgAWZM996rakBNJ4GdBdjpsBtHJ4ppe2jyRQzY",
  "key37": "2ocUB3va57AxGQ7goJXmYXoYZBMGikLp5hW4AtL6G7J4JwZd7S7z16U9KVkUUvBkRVXyrMd8QmvwifgQayZBhmEb",
  "key38": "2JquToL6zdSsmpquYC8j3UppMfxY7ZWxWydCD3Rh89egwgTnwmD6XE6eoBnph3knM6sxADhKFdcrGwHgexR6YXKT",
  "key39": "eYoqxoR9aZWq8keqGuBQm7MmQb7cDQTCWAUGcf8hGvr1m2w4DQKW2L13HJNT3aMr16TDooyHCS45d3wfDmdbpoD",
  "key40": "4PDVwiazMPkE95Mi826hDw26KmzWwnZ2dx8gfeyBaSMyHHodKWxxeM28cTqkrhq6ptFgfZFe9TUh8K7Z57U26qRW",
  "key41": "3fbhc4ZD1mcAatjLbLZKN4CjfJYWDEdSpZsLqWwsQaXHyTpoBYcSeNNc3tMaDf16qi3on6NjUTXEdEbuRyeJWHZd",
  "key42": "aa6AH8siyfD1dbjMS5MEF4JjncFU85aUojmuAtH4YcASLsfYeXmDuRF6WyfN8cUdqZfqXZqR9MGfHZqBd8dXNvd"
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
