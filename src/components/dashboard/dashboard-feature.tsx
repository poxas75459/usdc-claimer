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
    "2rNM4dZXkeiBNJo1GaQvmtjm1UcjzqGbs8sjpcH9KEuxgs27GS5PKGpoe3mResYgh3xwtiuKhu1tT6wZqm1ck4PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vqZJnJkuhYNUF4pxE2C7yLGQZTJJHhPVvBtRQ562AwqMU8zckLKVU2EpjnsYhQkFwTjFW7fycgoTQndp7AaD55Q",
  "key1": "434ZFwYvuHoyX7X3gCd6EB4hLLFyPQuN1JVDrbHrUADmsLAJs6dxPvfrXKvuDh9cgk72JgkSiurSg5SBZdaYTZi7",
  "key2": "4DkxP4H84W4G7pUoZQ9CqZsRJrmiRPts7PCiaCDc4XWeBqVm4o5uRTsPz5DLXVqLMYRwcAVHGvQtrQrz6yGTcTQg",
  "key3": "2WZL83ExhgCzphRR5L8ZM7jqKsgFTgZ3hUW1MicTm2jigtToc6djcoLMg36voPXjpbW6WmxYF21UpzHPAky57KVK",
  "key4": "5Cu6ZaiCF5aW45XrttTCknbgxf8MYUT12d6QamRsRnTYivF5unDgNDLiQBbb5g7yURuSw9Heg5wrSQUvmW4CDbAq",
  "key5": "5Sfd5SNNJwEzSy37T9JYwxUgSnmp3mqJafPVVvhF9UrY8CebejvrgcEHvSJEBQmhC5BQC68TvrvR6xLAsiA7Vq28",
  "key6": "2eGcQQmifxd9SgBRn6uNSwJbntnKjhH4UPrVio9cHPHdkYoWKcyC4zQaNGbdgvFDQR7M6fNv8LJ1QLrZratJYvxm",
  "key7": "24GCTXSf7mNP1PUeLpnkmeKpXT13ZA1bsDQffPkQc565s7MtpRUyt2QvPdDAK5V4b3Bxp9N9iMKaBTpzzsawJ49A",
  "key8": "3V3qn7d9HhL4Vyw8kNNk2uLGjVsxqBMk8k5A5sz16Ff5ZLTFGLszi9vmkQvb3S7FSDEFamvufuZ9bKCBX1aFs6SP",
  "key9": "4qxZEm465NPTTeCKnReZeNGPHvWYGDzmJ3Z4AGVgBjWsutms2v8DF8yY3KuB8rH57m2kqe9QwrurmUAKNdQKmAzJ",
  "key10": "61FV5XvEYP81jFt4cLP94V1rWPuiSm2oPgifZ2AYW6REvDsEdZ6nnZeqJMCAPUm3sSbEQoD1Tpfsxnt8jAj1Lw7q",
  "key11": "36Qm5LDsyK7Vnbc1TiK7rt4iwHnpHXj3EN73xH5ACzt25KsU9747nL7NhNApxbMpqnaPpHAPLSP2AC2cVfL8vtqH",
  "key12": "2W5PuNntptMwTDZ8pDsWEwUQjQnZeYGNJUNgTGhEAy7eEMHs6a52aiL2KGdaHBgPFopA7hzhA3Q1uP5KHiMmdZJ2",
  "key13": "EwQfxgX9vNBRNejGs7ufSnCqsoxbeqNauBQe9u6quWE2mjaif7eNTtk9KDpaMgaHy9yWUpBHopWo51HEWZYgKBa",
  "key14": "N9gDwzNG8t2PWArat1YHE1n3FB37325w5bjv8B5FJ2xdyP4QGzKoRUK2VzCrWVHtesGqiJwUTxJcEudNdZGNTeU",
  "key15": "4kiT6BES99SPusQbShNwX4PyCw5CPDK9kDt2jYeN1rvB8QoyAFAnGaowFcUYn5DCvXHE6C4hpWPe4AyVKjkgyANn",
  "key16": "4dDBy9PWCtjWxZsNVxAXzWNkDNEiagkL8pQwdFQfPcAxzEPEckwkHTKqQB7noFFhxtiSRs9dA8LYK6fNe3wySDE6",
  "key17": "42KNCcmiAWeuu9jkrVa8Jw1MmSmBJK3DFCEa8c3hoghqh46a49vinba5ViHn3mH4NZCYW6P1jgNxVciXeQz3LjDD",
  "key18": "4NGQwSL9NGXE4LZgNAqxzzo4wAtqP1DCXPfFEmsJgZj3CBEQzCWd8imASuoLKV4MJotogT4ZXZq3oCVJsa5jsiDs",
  "key19": "5VytkENbdvPUW9qaG6K5UAuoG9G8VVym332s5727QJFJgnbsh5Rztir4n1LV8DkdvfMauH7aVVVoMPBCiojj94gh",
  "key20": "5i11kLYt8r6tiPeBPP91z4ECBvsqw7WBhkdi5tBPtLqVVgs4jQw6y4au2PvKJcDmK7DH4PDbu8fGg1Xuv6r3moML",
  "key21": "2vE8vAMJgP8ayuKfXGaf8MtRmv7GAq7GSjs5kEPgwFV35rKWhnUWzMRWBKu1VBF1jyjbCw6PnCCwahhMEbz3Rdq",
  "key22": "W37WY6Cm6m75kQm7pucg9ckwJJce5quBaW72LwzQjLs6bnmv8Da5s3y98oDXLVBWZH4SzUFUmx1kgtQcs3S11z5",
  "key23": "3YhThcFCUfay2iMWE9BqNfqg9g8PNeQPBBmyX9m5WnxchNekZDdGbAQE3TkVkHaPyMYXGVdbHe4R9BRHPKstiYdX",
  "key24": "ijbMr2YvojLdwrSQfzppdsLJf42XWgpUFsqSeTUYoJN5EDVa1QU3vn8m1dqe4p5yYj315VEf28gkBbnB7kjLF2Q",
  "key25": "DibuLufjFwSBUk7ThRVnvHDo5SPzFFFravkFwH4EzSv4uw8XadxktccCng6Emntmn6fRx9cH2YDqwqjUsFrXpaM",
  "key26": "3cKby9M7HXWV1ZMfdraupdf5LZYF34Xcs7SoPhCSmCbCq9RKVcReVzG11UrJqJURbLtK4Mq3oabpQbJtMYhR6R7c",
  "key27": "4tYu6QuLTxTUFRY36uLM6mieZcSfk5eipdZionLvKBkhUkmo1JRPBeh1X2otP9nob16z4y4e6aBh6KCaG4WK3Pru",
  "key28": "4428TpmH9NRwWNXxmiasL9rus2CPgWuS1w9DtsPiSVNKFRPycWvX2NFXyoR7AitXFBWo4raMnoFnMTwN2U3a6YWT",
  "key29": "mtb5uAXAZbpVwov2BzW6LYXPVCEXZ9T6xWnuMMjUk1cXpuXbTPfNHN9pffuiLzsbcf1mBCTGF8cH4gkgpYyBjsy",
  "key30": "3uESVMe25CjjGMvkenhCz7znQ6Bk6PHuf5YYmeC5HpLhmP912gnKCMXnYfzc21bTKFLBQRGGB4xh7XbkUMWs1SHk",
  "key31": "2Rz1taagu3cNSWeJnmRd1ZvbDUp1BekY4PWimiiesyipB41HKrrgv3WbM7vzfC7SsQav72KuVRwtDHEvLSL6mewf",
  "key32": "2GZLBSw4grPfH6AszujTAMyKvTXQ9spJBYinf2v8xsCQ8dweydcDbg8gm9G8N98ZCeCDZmFkcaXeGwGVdb6qM2wq",
  "key33": "AmdB8D7DDFmqMvBZHQ3FyVnm31YVNTc1eBpVkTy9yeKxEoARFAeG7dhMwWQoecbw8JVWiYWzmgHefZU3uDH2EL8",
  "key34": "45hvbjfbKRTi3xhD1botZUkUMRK3ZFdnd4ujc7PhkQq5C5aBuMBh2ZRCqMWcwaXko2rSJRzghP7vR8wC61CacWGD",
  "key35": "4RKE5EyXU6QYMqc15bPnJgjzvZrhAnx1QFNAASrCJ24vWQifK9FseaQtwKyGC1tQVREbK1JicYiGBymXpB4Ciw6r"
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
