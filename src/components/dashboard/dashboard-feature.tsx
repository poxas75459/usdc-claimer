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
    "aUjqrmPapvmeqrNpY3YKGrGnqTAsHHXmjLizfokGvQVARJeCCpFhJiqtpjjvhjYmaFkisz5tWpA5Gjr4jVAazPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xt32FYgCWx1VJmesYigeRenMeHjbtXkzSXKUts8cWPBngoJLCFyfVgStnsGDbXPcrLzFoE4rpdtfvDD5wnDJqii",
  "key1": "2JBobEWrmnq2LgWhdk53X2vZ8JAbRS78tb4rxfRsiAcwuVrEotwVRdRk5grvGkhyeNgp5essfTiqhj8Hv62k8u7q",
  "key2": "26XQ2bMq9ZRVvAsMQmBvyWf9xnd7oMhQAXyfXp8auZ8y5qSyXBfjYgZ9ZBMF9DAtNM8oHGeBe2favz2h7keFbGLx",
  "key3": "3VH9pRL9tgWXJ6xMkbNBNgkWFDg2PPApKWf92k8gBZzygQ2od7uVQePJx5CtyUrnJw6jrNbP9iTX4SFZnx5Ya6kv",
  "key4": "oTQ3WtJ1hhgKt5DPtbaYJtwpVa4jZrSCQ1hx1mujFCcWjUo4BwTHVQTEv8CNrRohnEpgJi1kXT3mBJQNyHgj3NV",
  "key5": "5goEMnx7gUSXGn1c4WnsAYKkPYYQ62VcvqGV4KkNngckpQU26zjGVwr1CEaWa4Vd6AtTc1zqqxLTkzNP3JgBtj3z",
  "key6": "2agPE8RAmEAxWT6mSYVKMswWDnFvMt9nE4BWBUzRWtx3LxoojHzigP6DBx8TzuX1Vosw3PGT1amoTRajNhTt2DjV",
  "key7": "5j5ftqSUfegXSoMwvtj1c42bZJcbqphHT7V2AZPiVaJLVr7pFRD9h8NimBSegSrqrTqdoqeUAcRxJux8G4i6d26M",
  "key8": "66yEDF55oB7VmWucwVwXzrspWkMGbkrhZW5AWLmQMxJSMBqb5aENu9r4i8WJTaGUorYo8kVxmc9bYuJfgFc9hFLv",
  "key9": "4fBUwiUyFVT8AUFtiqeBUogXSG7p6P49JPuSLzSntYVVj4Ut4UiuszZpPBzYEyVv6mu9UQh1rdKQPmx5m25YJUoJ",
  "key10": "4AmdFMd72X7QE7ZhqXYyQVErEqZ2ycRRnCwDeaqb1sjnK6D1NkF4SKvbVWCnhi33NjS2tHcUYGMURiRdr11eEmF6",
  "key11": "3R92ayvuxFWf3KqUohdD1JyJETmKJMYVqeVTtvMemvshKBRpkvBRDDrYXKBk5dMT8DoSKvLfUrSR4i7vqJNTEALV",
  "key12": "3DrLojxixuqNpoqxgYJRV6ANhHUMTZwJv1es9qhBmLnETYaNrtqvNhnCXeiWdBsU9cx5G9uaoa55MmQWJtA1ZFcn",
  "key13": "436KqzmpMDRu6BD8oUAvPirBasCRD73hwPU7fF5LyToERLkVYp742gTTC2mK72pJtt2JrCMVk5ZP6YkNinedHfyw",
  "key14": "4YTP8kHXfsiTHZ8vnGR1bU4X3jvmcTLuBKqvZPP8CbRPUTRX8skXECLNJU5YDaRcTDN2BEwppxVxnbD3roFpm5ix",
  "key15": "51ceARYqkp4iFJziTU9yFf7cjoabB2ggKVDTrkWxhrFvTY1671QQ1bxdyk7q1CNEgifZrEMzY6f85BW9Q5PQS8ro",
  "key16": "zQ4bPgZ3VyBkzhVW62bSzeZY3wjpb4XpoE3gYYSTinQiM2C8EwyJBEFPCCnNpJGvp25XDYbnaz24PNpHP6nkU5t",
  "key17": "4V1fJ1sghM6Upk7h4VdUa1Dc866nky3i3UMxiMsRj8XKfCvyheYLdTV3mzmYtMJUnnApjENDRDbK84nBu6ZNTj3k",
  "key18": "DkEkcJ57hGVqfRRk8yjRLYuZBYdAH9eDpGpCDWrsQ39B792dUM37AkfJdC5QqKbeuiqZ4EorxAV1EdXzfs8ty6v",
  "key19": "2VZdwy6jWjKVcoqWxBFd2GVNJEh77obikQNgJC1tSzn4xLU2Ev5iy2j6yCQXd6FiKqeZbx7AEa3yfB1GUq7vge87",
  "key20": "ySzHP7a2vgouwdhxzUAcTW3u9ybsybCKJvLsGUnKAkZ7yzSE6PTUJiLeTjFNQYHQjZQC4W19P5xvaoyWMhFQPHc",
  "key21": "5ivcXu2GLYSgkqKBgbwxnuP8T9UyqYiui4dkqtkESBh3M78SUt6JdWN7YZcUNpkzvXDLqhnVi7H6iJMrvzMJ279c",
  "key22": "5aeyjFNqJU9FgCNfYWmb7DMDhCCDbYDM8abu5eu6WGr7as9QX4gQQ8oWfepPvmYoc5J16Fgb7LRnTe9G2PCGRuaE",
  "key23": "3qoSwsjqMtLPCwRZJV8TGFAiRj1JQfeYUSoubzgaJ7TJdaCD69arKh9SNpX96zfZ996ENyeghom8UU1yg7r9BdaZ",
  "key24": "4chjY4VDULKZBD6kCgtd5NR9LaFi1qebLmrDVKiTA8zmu8mmYbmhq6MdAbi25TPko7xsaZrjwzxoqT8YGGzAYvyU",
  "key25": "2dTLiEi74ZLF1xqmSrrBEeWJj327ibbLgnArDPHDLXYGW2NyL1wXy7BkKGm6D1M7XFc9FzPSSjTdyx1RRynTXG2b",
  "key26": "3TQxqhPXjKp5DKQTWgmNpnAp8gkfvRTeTjXQgwdwufyNss7ddF2Lwt1b2sWRvT5uevJRuo6JYXUNJFP7tkVMgPHV",
  "key27": "yAvt2hXih6EEqSyaqhK4kiuWSu6QXXYAYgmzJQ4PXZscff15GYMGKMu4wUVa124knm5CHvS7zaizE9zm34z5ncH",
  "key28": "3VRczMD1kyhPDERLP3M2XaQxYDZzeKwEZu8ozRWYFbB3FoM6c8hjwbRkdoAE6Rk6CPnQjTegayGBkc4vzzFXRsyp",
  "key29": "FL2gsVZWyC7WuFTkFhz2CyAUpkAJEpSzYqDFRwxYFCwVPUMDUzvRqZ8uA3StEj1UxhB4rDQkvVj1uAfZsHR6gLd",
  "key30": "3EAqswZuUbMCumaiPMD9t6nZSWrKbxtQEXae5JZjsCbaQXRiavnr6u1twgBoUDtNbHV1vkmAohPiuQAkru2skN5A",
  "key31": "2canQUe3gmvqFGb5wVcfUYij1oDTToX8V8iEbCnCKFsBJG7HtRMXf8gtLvuwaVbbBzdBy3NvaBTaZdJkQFXwqTBY",
  "key32": "arAWWYZCDjv6ZRF8RxCAMUUtCNjeSYDDxq7VBYgJT8HeJh3Pj7Miqi7GvzeJqTqXFw1sWrCXYJ9s3htkzJmuY3A",
  "key33": "4BCENCdxiiytnyoCxqDuXDD9gj4kkzLkrUjGvgUX4Ehg98DRQMp65BX1wDadQeFbuYCuA6y57QysUeR89CT1f4Dm",
  "key34": "5c54XjxEpgf7BHw7aDTi4Rwz29nLPNWbuDrVZsKawiFoHoMMEuR3HL4JTBngbZSHD4FAatSvpiS5dmmnoXzMTAMj",
  "key35": "D1SvApbQYcnRQH2yxZCUpDPFjhhAQm4rj744co9kwh6dRqtQYUTeywWWgW5D2Ah73XbiaRtLDWfrc8y3x3F88XZ",
  "key36": "JB833yev2ZJtUmYHz5MomqA5GQvSi1dQiBngKXxUr7Xg1Vv7m9oXuDRMHJf18RXmRg7uqbRgGRLwrri9gAbwBx9",
  "key37": "Nw2u8ZSwcfBxFVQWqviE6G2SYoaPgrdKm448L9X2hBYhUUTMzeUyss3anFExijxWLZ1d1zynt9m5FxqQYTPumAq",
  "key38": "2HFKSAoMXg82HnieHatF1DQLBqwstb9sK5reHKYVv8R41LaUEJNTDRtB8t51qFyHCQRjTZZJ2a52t9eHBfLwvAJR",
  "key39": "31RyVX4VrkoCm6MP8FAuKwGgycWzxEzPQc7kQvYrJDcnEPcaGnLNKajiAn2VKbNtrzGoyuUD3dQk9mEYuQcmfKp3",
  "key40": "22zSve4C2W4YXzJwnwGR2Vz21cgeZToDUFKXbJ7wx3ESsgmSbX1oJCfYGV69iFDuSw3eTMkCNzJCHMVGVGhxZVp9",
  "key41": "2TrR8vRvGFEGL2Yh7gp8DDozUFZhMkBYorkK3TvizTmfAJU3PtLe5gK3ZmppSeJoUwycYmfvr5jeDw5fEnoGN25b",
  "key42": "5g22zFhFZW2RatctZoH17nnQ3wMFWSZ3mbbjbXNH3Wm7qz5PQ5rq8NExwNqQgWbN5zQBJ321sBdC5a9xYKyB1MXc",
  "key43": "czqPmce2aLC33GeActhRZ5bW8LsiVG7jNQ8tYhgZsQQTYbXLHLCdzsAGzSrcVNwRxraDUX7MhRU6nitvvwMN5Lq",
  "key44": "2sfiZQftVPt7J7Gt8zcnB5m8d5jvoqCpZbNEC4FKbTF8WW5AqPytmk48jgeJ44nAVQmhhonqPhFtRCxG1h73S1SX",
  "key45": "zCoKYtXaxJ5WNi4qe5tEFHnSnZQ9iL98y3vibTHRtERnvxaNitfGisTPMCmJ6tvnh7mb61N1qvukABHutKUSs7y"
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
