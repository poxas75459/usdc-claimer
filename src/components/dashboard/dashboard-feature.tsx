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
    "39ranrneqtv91fcWfUGZ3cXFqv6w5dArmn4nPeejA1N6pVpRabJhi22Qv6gduyBn1K2ftMoQaULe1MwBDtMrS44w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBNJHAaqisWYm6GeTykHJCicVzj5NK17822RQN5AP1tf7isnNEz328HiBkr2bsn2qW64hqyoezKgwQ45b3sLWxE",
  "key1": "4ff93rejpzwC4p8zEsjnxHixh91N1yzERBmc9pXkFiqJfEYhDRcPp7q8Aedp9mp1nyUxb1dZFPRwXgGcRHpXwCa4",
  "key2": "3881iSUwVHjwPP97LkCvPtNW6dVcegSDZhdKvLPmHcMNfVAsMndwfUvFv4YnAtHq97SiHxPZ3LbbXgkhgjYfgsSW",
  "key3": "4WteQoMZDJFAWxZMxoJst66q3mhgdGt999vrKG6EcKfanAiYrAzhjwTEhtpYgrGxAFpwyJPHemLVdc4ee654BvGp",
  "key4": "3YHiukF856UvPfLbY8YcwbrSvm9Gz8kzu5xKhm1uVviKpUCzuGtv3jqwYxLij3WxjtUdJ7XFJZV8oUAAHc1w19in",
  "key5": "wAJf6AVtwruFtUhQXMMMWRWW4J2zAaZLK9KyWnZ5cfzc1ER4FG9xyX65fPGd6H3p9Cohy87E9qV8CJD86GXHQZ1",
  "key6": "2dDNYrSvNoZ8eFffqzT7m2f1oyu6M6rmGaHT4RmLQp7Wx1MbJD68YvyY63uVdVbAs51mzgmJSKQnaJAHGV3U1s62",
  "key7": "5V174tZ5xJB9hgzsxui8zi1SRG2uNKuptnJwBFVwKRv5DQciQ2nUd6zycYgA9PkumS3RGK9Erx5ZPaNzsKEUtH2h",
  "key8": "29i3PXmoHq2G1KvS29egfUAGjZe2SccM7PHfrAwJeNwFkNzGUhZsZ16DYPbJRJUT5GFPTWcZDVPfryZUwEwb5Bmc",
  "key9": "2wYsTgsKQozGnZeo1FSf8kXp3ynSMa5SLxDybL2d6MNk3oX9kytVUGn47dJNjdTMXYurdJiJjQYr7c4nQhznH2gH",
  "key10": "3tgQKC4N7Z4NbfmqbqwgpJz9Kxf2gpYqHm9zpxL1p1PWdNrTAEnPXcTQMAbXpqMcnb2KfSTGkA79M7q9Ltkm56km",
  "key11": "3qRT9gTJHu22M4e5eR6Qg2er2csAWSKpkogC98kyaka95SuqHp3S9JifafPinmWV3tRRKHZrLV4EWXsxzL6zdFSN",
  "key12": "5iy3T8vMQQqJ75jhdmFjBDMHcnH3so9FqURgMMk58JYvRqtXDZ12bE9jXYsmD7CsmXhfDFJq8GUNZ7tvEL4zK2op",
  "key13": "4uMxhW8Ni34WRBaFNU57YaKoXfynQy7eo7DTKWDx2XTRV69j52oZRvUY95pEVTy8GdDLDYvo9XiNyzp6d7LUM1r1",
  "key14": "5fwJnWUEk35t3oUcoB2rwRQY4mj4pmVs2jYNb9McHAf4m2m4uyizpqDe7Z6mQaaqp97TQ6BLRL7kx7pqB33VNNnH",
  "key15": "4Jzjqeb6oX4gV2knCw7Ni8KfdpVHsvXcmp11EMdpYkFyDGh7Q2vsYp3XQS8LQQN5qVcMAFoDGAncQw7Q3GSosF8y",
  "key16": "J3ZTsPpxTiGCbPr47v3QdpXJS5rWfxp4vp45p5fp1U2phDCbGfxvUc79shcLgXgFpYyXwBT3aGVGSMGrbNsz3ET",
  "key17": "3U2XHD4xmNUhbmp1KsyH9qxYtyLfftwTXeXsXTRA7sx4EBGRzeyvJN6mLK3wbhBLsQ2ty9MSSyiZHGxkCmjg7HoX",
  "key18": "4QomjtcSMx4NvVQxW7gxr9cqmvQnio3GWXtBLG9KJbWGgHuZ2iUnn4P63AmVXvgfntMDBDGxb4P8v6516q6QTsaU",
  "key19": "4cNT3TQJYTdFkiK47F8rSQZ9YHoQwtSZpBhQ4mMyC3nXeVUkCYGAYX52XmkouuYoWd9XPc6sFi4A3zGKLpgogvg3",
  "key20": "389scboP2bgouW9QhV2iXKWwKgRJvXD7gWXjNRgooFE2mXjtQaKiHbg481zao9w5ZQCknGgs5gQ4ubd7ELVEaaJs",
  "key21": "5eJSGki6Wsw7TT5QQCNsvvgU4F6Ko6DA8w8oiuQoy1DQENSWdqQYfaKpzd56LhjpEV8VEx5V6GN1A3An2TBXFKn6",
  "key22": "khP3pspXK7mzwntmJgQw4xfiuqENeMDSEb6YV8TXY5eeZSwrngHEBkZu7noN84GTjoD6jc5z4kofCFb2SujeHVg",
  "key23": "5yVz7cCzo9PNyNJo2q5tHh19fN6uVnSfHhmtTkBAjHdQeA1afyc79fgo1E9gZWDjED2mXBkpZQfyWkpYYeLkzBp3",
  "key24": "4oxJBk1uR9sn8GyAcYhsSzHRz9ER7Jm1jfh1Rai94sqv9fGHUbZjKRxq5fx3F4zgAh5Lx1diqJqPKkD33VLdSNnJ",
  "key25": "3L9wPCxYqamKhzaSXsY2BdqddbbyD8Zzh9seNMWzSq81RHLQeGnNVaku1tKhRTod9tspeuZhypm5axkEjLDMS88o",
  "key26": "66r8U5ELqfhW8E78FurrQUi9shFDLrPgB8wic4DtCfgUtqv8tX2FgVP1e7rHp7GMHR6yvsVjeyYP9fMrn7tMzNbg",
  "key27": "3Q69KthmqujMvpAW7CQuHkQQSNo8cZZCCQpgu6HEDZAxQCVFE6w9hsZ5Hushi275ffVTnE2Cb3cqvDoxxHPnkikF",
  "key28": "51WYnJ58UXAg5o8HfzgvCKEU5Hbc5DUWcvTKYF9gCo2EBeVSD2RatNGnKqa3WYHWetLd88dg9HeQoMwgnZ3fBpNf",
  "key29": "5GaQytJf4JVygCUWgFV7CQGf8FJw7amwJh1RJR7ErUxspsstSv9tLmN5NvLrDkhQ9S9LriFs3hFK8kFaWjiwAdDj",
  "key30": "82Jbsqu4PYTTYyiAiyhiZFBuqgZnZ83QpCeCBpuaBjF29S9sJUuU4B8wnDW6KF6oEEJPcUXHmhfMDRmVxkV65kS",
  "key31": "dhgjZUeVLrw9Xfqi7s3tLzY5hJL3sCKx1E6XPQjxWzUvZdEF1LgFY9SSkWSnjdgpJGkxuAwZh9Hvk2stkL1Gt8P",
  "key32": "41MTkxyDc4GB5GsaYBBAYFkZiJY6kLpxwVRZ4fSyu189fXn1UGe3o47o1dh8YK7fk2t1RXZiy6mQqPEJfczMSzyj",
  "key33": "67iNHmqGUTQxtYgQnMD6HnjqwQQKqKhjh8gvqi6ohLrYCL1UwZ4PQzzKkYkzQe1yafz6R354TWKQrPipwoUXbCgt",
  "key34": "5bYseeoMhfd6DqLB6Fv7KTyBvAhyt62gKcysHkVKgNmrmJfD5pdQpss3oFtibHd2bjUKGfmiswzHBL2GP1FvBanL",
  "key35": "1bEA5dpu2z7wiRiJnZzUK9cWSCNZwsnWFLo6zrQdZNkJzdsTfkSiHp47YvQ34dKAQmT3oX1MNhrQ7Y3BKtj1wRp",
  "key36": "5175ppA1junsUCyWbBkgden4f7HPydbD9v6VK5rn1HrJuounrjLDjaxhytD9M3iXTMcHzyUsMPzihjLxD35PQFBi",
  "key37": "4jT9UhMs8FogLjjnLkVKLBJ6ewWjZjFcQSme8yZq8oDWcKSrRC9SC1LCvLsjbz93RPRstMojvujAXWT2PpjHKvwh"
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
