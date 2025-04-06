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
    "34mrzWzRohpcNp5nkJ5p2YNVWq3SrX1mG1UBZEEvR2629Bw2651WVLhhYssoR773R8qzaaYD8RQp74xo5R2cBNpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uRRAqHLA6wXjcBcsoL5m4yjUznpDRrYCMpzDnJzNB6YxDPySL1BbTggexPJGBHFNKJCoK7sek6mDuYmhopCS94o",
  "key1": "5JqVJipQbYVEuh2Lpm6uFp3SL1hW78FzJarNnRUvUkNrWTnvAzWB2oTvs63yaqguDSeyWwit4Z3xrbwn5BE122mE",
  "key2": "5X23KGKeLAQUb14zUtPLXmYJGBPhom2fES1fUYByFnQx8eL6qwR9tMV56bBjV6kWngA8cDPjE3CoG25wtNzAgHNN",
  "key3": "22xkBVoXejMtVvZNQfDqM3aMrH5mQ5UWMVmDoccmQUkW8ks6utPdJGyfDJa1CtGK2QCasmghLZnbi9CXaHeHwzxs",
  "key4": "48kEdw7dWk63HDZK9Jp8cwGH632zZxGk9b24rwe47BzNKSABBYGTEY7TPQMPx7LArPT3imPrWKaKiKawkdMuhRET",
  "key5": "6dGfUmkZF5MQGNU9zfZA6RjKMyT4XqqPhNfyhx8cX9WNB8GSM4EeJxAJzwAKduxWiT3sLLCCzPb7Fv1rcKJhhK4",
  "key6": "3Aihy2YgKwHeWZ8JE6gDQm4Qr3AnQpXXEVvmCwTMKKgZ15DkMTGdGhBYYSENMeCcTs7b2Tjai267NEq1iYtPDPiL",
  "key7": "4147n9v2UaSRdZNUyNdCxYx8pRiYrAn8KSAHu4LRDGUuR96X84e9m7xq81qPY5T7gQtH4wrwYaLmLzK6U9k3t5KX",
  "key8": "61KKA5BxUv5nXfh5exN2nyJDrtAJr1xQSMoEe3j4SwH8q1okA3MzxuurFdGkTNdGTruTqFon1FjHtHrg2ZK9Tdsy",
  "key9": "5uuTWgxFFp4BKRifiV66o7UuquBtai9hwUNT7B2jZQZUB7Xz5BgnU9uNGt3oYX3FsQyK11qdZ3HY8KrfyaNKhuFy",
  "key10": "2bHZ3AAJyM7Qe9wSY4JYSwpENBhi7Mo1K5PrYDuoomUZrKXw1DjqupHcqLd6dtLruDSYgrkkjqR8RLnsAs3BXbYz",
  "key11": "3btFTDUk1mKFPFXjQs93LbMNi4nZ6nDrKg9RTUct4TJ9BrCAbuXbGRY9GWyxBZAPQurjbk4nMFWHWvmbPqzPs5M6",
  "key12": "4oW3or9mECWgvfpw29TQ16gs2f2th6TFFaCRQPz5593xPoMCxDrcJyhwEvtAU4j27k4vrGwE2Y4nxdDbtuLUPX5f",
  "key13": "5Q3TZ7CttyYFUYeNAQvKWfnJABkYiXGZUdUbJUcFj4uqK5XgsJh7qAR9T9BcB6jFe8RfWdDdXUWzeiez9dmcH6PS",
  "key14": "AXh4WFzEYzjDtEvJrSbWsgDyYQPerw6UymcYnwZokCBtYPZwLW3yHvCBCNCHwpMGGsMmpMu9LK93UGarrDWWvr3",
  "key15": "2o4zAUCrVwie776e857R8LB2yqeRYgL8b2YPWS8WeaLCyomseAcPRYzkjF3f1rJSoaNxWU4cQpVEn41RW37xRQWL",
  "key16": "NoXabPtDmhtbGv63KYA93nGhBLvaMaBjZJrspqJQrQjFQBLDHdj37rfVtQsqs172pTpoFraVmxA5BGjKyich22q",
  "key17": "4nVesDU5ukdqG8oHTYLFqnHbXAr3fWPd5oGfk2LGb5eMJk2MRdS8cSQRGudbSFYbRgPhmg8jWopGnsoHgGbRuXi6",
  "key18": "31zWmudUvrKe7kQrHoU5P3jkc5bYjrbGs5VFnJzcxiLR2TaYDhwZkdhexze81YM6WXpvFvPsvmeA9TWV756JBHQG",
  "key19": "4nLsLpmBYmg9nUTQPDmu3dPo1PHannJPYpoVKrcqeLzMvsJsmTysgw1RHefK9Tppit91YjXgDoFJfJ4XR9w7Cesh",
  "key20": "63KUGemkuZuvtR3XuwT3R6YCK4sBaf6F2dfXBZiAqhLmx56DnjhPhHFXMrD4ygcFGvZubkxzPWW6W5VwgqzNxRkh",
  "key21": "41JfPCmaGZa1yQxHkmT47s7JjZhzR2CsBkSnL2XqVQYEk3XTLegx5b47KFdk29F2n5idkkFyJVYAAgZchNehNrMw",
  "key22": "2GCvvUAHvYRCicw4WanU9neeyHxc9NBZ56MjhgDWVCssNZhUPKzTuV2EodF81f7XrFj4MWvQu8zEA2jn38qGAKbR",
  "key23": "3Rhi4G5AYvPfa6njV4y5Ri2bguuzWRhczcgNaRVVmtkKHoTYUry8GzBAvbAJiiPQU4jh7UkpA81gYicoEXqh41zM",
  "key24": "3YEMoJnxn9f6dBHmD1YSC4rRuWjS2swZtUmLAqWQ7NiXdDp6SEnFjyQc8RznY5RRxKis2Lx2qZnzh6LVpSYf52sh",
  "key25": "fLJPAqyYfF1RquTE5fQcvYvAGYd9ZLDwYhywiPtE48jj4BMNr7f38T1khAmqq3m8VkN7bkWKz97ShVWGatuxLcS",
  "key26": "5mri6UgvMWVAAx5PFmMXEJxoXhZnqAt6fYtSkT88iqBWByMXxgK9vvVSDsgHt729gzCYdsAg2xgSXBmmmSK6jxSL",
  "key27": "2RsVqYAgYKLrPfYp3VPv1P7JbGifz7KVxNtvGJtfZHvKpSK4Tv349fZDD7jFPHTHk5vJchAgpCw8AdHgbDUj14cZ",
  "key28": "iRHLe8iykNgVwV1YsUJhueyrCTCRsdbPQEzBhGH7Hig1JuqsL8xViEagnQTcDxasE3dfLkMdgA2T7BhdnjganLn",
  "key29": "3oWG6c9oMRqW6sJL1Z4qoDfK5HrGnWsNWwDivUTH76aNgHCLKwytywx9a2dhbJvnzDTKww8ErUKVY7uS1ZwadxwZ"
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
