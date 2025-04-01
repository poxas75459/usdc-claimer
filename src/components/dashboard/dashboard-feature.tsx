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
    "2TyhzatLArM9m33dmAin8JVxxRP2zyabyoPE2viMHrLuxsYASS653onecK3NMLYA1H7WLoZB9QLxAAiRZ6AbTYaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2WbGWk4ZyEf1jdum1hvDHjTqQBiWsnHfkx9wNgLXFjay3L4kRTnAz8cEpoQHdX9uJiMxz9wpa6cJFuogXz8keS",
  "key1": "2mmJcHCixx8zxJDBpcCVr8CuYq6Mhp9Qx6gZyEwjnDgZupj2EBfXk7akLiz5q2v5yHuUXA8Z4u9TnqXoGezxk9Yg",
  "key2": "63fMXgF4hgDBDPMnY2Mf8i6mg1pXuS8hXkyCMERSUM3U6vpw4fLxXQXWfhS6QHTXJcisnMZn6YBMFx2SVCjh6RkL",
  "key3": "sTtGQBBCfxTN8cCn73M38mvQrRCbYPUw96uQGbj7gAyHCVMsfxxek7r1DHjWUcsszKBB8KXvi8rYW7hQDtBWPpB",
  "key4": "4WPukMvamZvz9AedqDf5YvveQbfoPSY52gJcUrWvkxukeYDZnivxgHuBeEFWNn1eBygLMEQoDG2v4FivEJz3zfvQ",
  "key5": "2p6tE4d9t3CNQ6hQqKAzvTDoD1B4DgUWfgpTp4vjrkmWHPGdoatS9cJABf2354WzRAZtaimrjQoJ2HYcqeWEVYrU",
  "key6": "5S5379zEznZHjQHzDo25TYEkemgwmkHdQeFTqytF7iYtMEaq9Exf81JTdRiiqmdFQCTJ6ywzRJn6wjCbLvTJoYoP",
  "key7": "2kh7TJTGmpXZ4sH2rE1i7863VTqHhVg8SPM5Hn6RNW4BZ7VDegiJq7jSZr9crrCDrgs2KyANgU9aEzC91b6gdHkG",
  "key8": "4be59iCiSXnc2LxcYcNFF78vGPaHHh5GfyLV9o7WPgZyzAjhjo7mi6dVtY9tWij5EPdi5722uHYgPBRG1Ja3hh7R",
  "key9": "53y1AMcg1LkGSamATNKnpyCKFVDpxARk7gshq4fE7NG9TGgn3YGuJTQMDXHG9bvuBGtrHA9XLivFqyhrN5bjX7LL",
  "key10": "4sbHxXFfGH5TCc4wGhLni9SfP1vr3KeQee4UmZpD8YK3jWJUUkUjGsJepFJgmyUSpGR4Gfs2gWntKXVZHKGPjPX7",
  "key11": "5epFMVCs3QpqJAB2tNBDL2M4kNS7Rwcxu7544Xea4L8CG2xHgx9WPK1AHHBc8E9vu7wRxQ5noinobvCepH4fjKVT",
  "key12": "3U5xBEkhGkP9FBkXj9mh2T1QctQbQuzEvxXy7KGp6Tyq4SVKnWBqeuTGRKkiLa4jGU3fnjkVTKUKyHg1t6KvSC9n",
  "key13": "2cPoTy9VXPLczp2FkDzyiFoJevgzGkBhLE1Tr22BVuczdDNDhhvkQV8SYn65heHAhvJhYvKvqbNib1xJJmiguji1",
  "key14": "3ZWCBXsYA2jiFY5Mpd9JgQFwEYgarcYyG6ZyQpwaArrQHjq5b1QL4Sdo7YXjPKCJPA8fznZvLwpdfoeuYetw6W8p",
  "key15": "4aAEZyydTB3DefWKq3GxRpfV3m2P11LLKfZrBGpUwVDCYLmJT26dj5TwGXg2AjfFFgsN1SK4irAjUaFi8xrSASvW",
  "key16": "3JF94EsmTvj2fzp7vk76VJViuUJeLG241fJ45UD9KzLjAMQY9mMimerBazvmKmAKa54XQbCs5URNbcYGbHjf3w6Y",
  "key17": "3waRNQtQYsrd6L9ZyqSv5MkFTSBs3o8u7E96xMdTsQFzAcN5qWRuFjrdZ9hCCECeDSasMfqiDfKLQu73WSX2yrD3",
  "key18": "5jHqf6SM6d1hQgiw5ceCf3mSk9i5bzZux68PVx88k9uoG9U8thF1hWE6jcsG6AdHTpL7n8g3sM6smJeuhCohiBBq",
  "key19": "2RZ3jmSQZbRnqnh48pG8yNRzFeCTs4orWubBVkxaqx9rNTdrcLdwku8D7DHBu7Kvtm7RQqBZRuxeMdbmJqAKFeLt",
  "key20": "2dijwhMvT15X9BCgLeCpNFa5YwFujvoZrGNTfyE4A5LdbmFJNjTfRUR66VEJYsmu3hmh5iqs18ovJAoh2XJmp7ub",
  "key21": "4KgN5MNEZNw5NZCpTwnNAbqsCccpiHEPB8MPn415Hyk5ez1duuKLun1VT3fGiEjiyX1xBzq7rHrwtvYTCehHb8Ht",
  "key22": "21USUqhsy2hfE6aKnMMMWgHbiJpfp1AB6trfSDAYTKDyB6MuDKn6Js6pMCFjnxojYYUeefP9GpWGgfjVh67o7v9g",
  "key23": "3PF9Pr98qyNckG4ji1iitkwj79MXTxHrSSj55AUPGDFUFtVQ8uAjKq4mPwSsE9B5aG1RQmf1osgBo6RMWWHxpL7e",
  "key24": "HJVGYm5arEbGaH4WFqM35t1YBj72NxFSghCSrN6V2zh8eVfxUDyiLzchbcPAFEH47sespRtFW12DNdmuz64fkZ3",
  "key25": "48zBC3SPGDzyeeDoySWYMKbaZFoYECa9KFF1aMLZHzTtVGLaR1a4ggEzT5Lxd76mFFdxjXAMrFBVyjvQDwfAs33i",
  "key26": "3mYWqv4wnMceTYT4Pj2CPYxDePpruuRi7fho9ZoCnoWUB2BmtMJASPrHXidt75orEPgAgdwGG9REUAnRpQ1XGtCX",
  "key27": "4MQBtWFVwhRjWPP5zws7FRCLhqumHLF41j2MvgnztHB9Dc9uFKNEbdLGTLVQvWP8HohpYJyrCXNPsfpLhLUSYrMo",
  "key28": "5B7o6Qyejqep9rUNDEhVDiYVZuG9RzCS9u7YL8EKasyWacMzxsPCrq2YqRQDTTk75czrbC4B7AdowohYDD2ftvr4",
  "key29": "5Zcxh3nwP4ZkzGLJohnDfCTE59LH3Xk8shxNPa1UsrhoCYwogWNdaY8Y9nwhara44XZuZ12aF8BRqMHGiJaCKAyu",
  "key30": "2aZovBtxe7M8TrxBGPbk3ZwjaTAHZKPEbYjzi87GKy33EpSRksyVQe9SfaAUR3bRmcqdmszwMHeE6uKwLipez1La",
  "key31": "4L1d7PmRtAdg6StVgx1p3ddQxvVV3RsB1myB5CttoNYCbfdPjsNsFCKBRmdqpzEqx2xtbT6e1DC3fuizFaMN7igL",
  "key32": "5XwHYcmCozh55LYukfJTrx5x4AssJ23DZ6r9LRWGB7yPf6mQK8tA8H2f2PW68KVW49qfgeSHnUDiTTFyU1Pe6dCv",
  "key33": "2xKTTPydYkSp7jtJKSiBMXpGTsjWbVH2XQW53JYHAHWjxzfEpEiaSCBM3jKGMvByqnGVNsDFvicfCMcoKp2uBvpc",
  "key34": "3eGNypgUM8oXUW4Hmt1hQbREZgauDmZYUU4HaDrreQK5rq8DFb9cZHT9NdiGoG5pedpPsSJNq8QiDeANU8QN3sZc",
  "key35": "Af4TEyDivd4dc7Ax5GSKqPmU4minYDqiYQWngpYZ1yEkf369FgZABi8bNxaRSbLvDgdzkutDdqmHyqkuBUFbzcB",
  "key36": "2s7sf25UsWoEqMfFXVNQbc8TSZ96qeoxnPooz1ZW9kmZZY6tWpfA9JAHUoVkGkNNiJW3ov33prMu5dDSjb2YrhKZ",
  "key37": "3byzbkdWAd2b3qv1h53GPDfBD8aUNPNhcP5GQZo8nYCWA8LKwPphGeormtHZ5WE97CSo6zZA1uHyjp8ah86Y8A3U",
  "key38": "2CgW3QAMcW8CpvBSnDc3mXzv1E1UXejmrhd37RqV8HLJvuHSzsHvQHUmjUUB5DeNppoBNQo4Yawdktce27izkWr8",
  "key39": "5msZdK4gxEuksz8YaFKH8f51LpXrQayABwXrgyYVWNKdRqTBHLQtsKZLmQbxEgoFdAfqjS2RcWqG7J29LF8bidox",
  "key40": "3kBBKeweAFWZt2jBFDVC3f7PWb6cnrtEFAtMuJfXhuYF6Az5obHap21EBqiyfkTtVbsEy1yjPGNgBshnjeE4477h",
  "key41": "RA7yDdpyrUUUaeoRKqHBrXrBbJkXw5MSw6dSoDTTXscd5cTwrmvxd3p4rvoJbJH7zrB3okeaUFJdxeWP7r9kNqp"
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
