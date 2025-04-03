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
    "51EtC9Pf1atNaw4BcfChd6nMUSaKBT5AxiaS3CDPnZjaJSYmG5HhMExfBhYHuEvwhypnv8Prey7giTqncaBYdQGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9Ut7ix2XMt6rLFkrAd8VJHsc3knF9eg1FkUZ4adZPXiVqFDDoPcfznW1nb6AkPq44KgUKaer3oRgo35VHqRj4a",
  "key1": "CsPLZ1S1CvvT4YRre7K5rdj1YyTXZcKtFmLgbwVqyZP91YabKJwELbEupAsWbGzA6FvcmGYDrwgfAjuJYDuoKJ8",
  "key2": "4T4xwRARRQb2HnZY2B4iADhhDvi2PZ5TZNCh7m6BE2BHzqyGXariFcgHFrrtgH1KLj3XhaWEH1DyZP2UZPoZssRT",
  "key3": "2jXbNw9pirzEYDB8KA5nXKi9eSc6QcATDnDnEHCdtAAA2nSW5XkvLoT1XAcoahqhw5Yfphm68efscohPp1gtkHpT",
  "key4": "4LAk6aXV14UQLyScFkxMZwbzPunFgKxBXUH5w2u6gSc9NG7HTripARThCNZeVUEQRe5W3ntPZ5AZt2xtuSrenkaq",
  "key5": "3mUQrSuqok936ViC4eNLyReXo5Qt3pcuTQbb3MCESFCDaWws86d9iotTcsVrQFV94Dgtapzj366Gzub2ThRomgqd",
  "key6": "2ZfrhW1GAKD41qb4UayznJxMpXgbUiQkYf1WTyPPBHhWaqnktxUQnXbmzxGU7X5n9Htjboaq9isrgZdJjRScLgVx",
  "key7": "3AQfu735YVghD8ia9uU3zPB53jha68L1ACN4A1wSSTZdHFZ138zGjLztKYLxPMDuGG9JQoVLuFe5xBUdALKmqvoi",
  "key8": "tUXe7vv1uSWigAzHQ1sWv1WSyXxeiiyrRkJRavTdBYPLDU4B6VTabUtBuCQ2nbC2DCgm6BLPLfL2hRp2ewuoR6T",
  "key9": "S5Wz2zBRLeJ9kGSKAwRzuoZLgc6c9LTx7QFDYoAPwR7cWwsZrfmgFUTN4Txmed3rgspLL5CLFHmNdkemr1KvzYz",
  "key10": "3GqzbDyKpve2EjzUvrW4uKSeMdivVvgUBQ3pt4nSeAhrtkKw9JRsDZjAPHH54nG5EqD3p6mJYYajfmkmxpUpV5HA",
  "key11": "2u9i1tppcKyPVDhgzVHFoaF8CQjBKAD4ZzyX1CVLYa31yyATC6GexP96dWQQk2q8g19pwmDVqE1hxMzW7tkhGGsC",
  "key12": "2yCUdWEeDKfKToGhuVRndyeEdpxvwJ3n3wB1GP7o9xWubmZfMhS3HtPZ8aMxuocJLwyo7xE6XxFL8wEQWhh1n8ua",
  "key13": "5hxZxFxcyJwuUHeta6dpwZUqXEkDMGvHKNp7sVLkrQEnZQTjtaUf52fZDyfxMSJ5AoFMP4GfrrEx2V9oS4V1HMER",
  "key14": "5WVvtm8wfJ6eXC7gPwzfvz5hTiFQxaMBMNpBKUT6mXpzxkwqwMJo5HbHdni4aHz6SHnv8hMX5bqTGxs1EYhQY1Ht",
  "key15": "5aQUM2p7C2euCbAenrW3yKLHtnMzYXgCNCtMWmUjKyYuWCntjVzQFeMC5Mwcj6CzjrAay1AExFHZAzh76EAvbEGg",
  "key16": "4gPhvU6qi8M4skxdHpJJvw3rNRhSXCBhFFnYRuVvUw7nP9stVe968CwtR1t1e4QgsLoKE7pDxQmvY2Coe7LczRv1",
  "key17": "2pdQvDC5u49CMsJiAHRdZ7ZttH9M8HRa2PyPnVvnLFpGP7edikTNN6K7oDLf4q6T7RJbJqL75KLyDfAHSXT83BLf",
  "key18": "5VqqigtDGXeWEQyMzXmDkG5of5Ww6rLC3cZkY4UKt4uTHCjQcFWsDpmbfsGFH5qykDhZ5hsu9GVhg5hTyhZMWvvz",
  "key19": "2C7iBjaCCo6DsLBpJ6Atu8CmiTpmkgUhByBPhE6NpQ1x5Cv8TtVjWGdBQnav1PWGet6CikN9Sx1U2zNaW6EVj3hk",
  "key20": "A6B7rbDBg7EHvRdBvb4V3E3jH7jJwD5E2uU199DzdJFYEnbrwStdHTSt4QD9vvrwDA5k1UysCYLryzq7xwGLG4k",
  "key21": "5YpHWik1P7L4jZ8a8HCYAG1fecm6cHnNgxixvAU8ecui7kskofQAvQpHZxaf7eMYjkcsGkyKQrZPefdZDa8owF36",
  "key22": "4C7kaexTC5YLAN3mcmA6gDZJN3C5HuiFDV1ecX5Baqh36e8DpGXK7cgzVJvJyDM3r1FVC5Mm5ZJC5SJ9nvhbKpcn",
  "key23": "4sLm6aVGo4oprim3C7U9CwTk1L7bBKAnbXQji1WbKMLeZ1U4MeE9bkSf26UbT5S2FuBdVNo5Z4aCgpDYViA41vZt",
  "key24": "4vGoU1LhhxPgbzpbXFSEu8Jshy1ikBa4LnYgAnHMDRnnkejuWPVn7Bi4zuSDwKmmPNXBxryj8grzB2KnzdFbQ5DF",
  "key25": "3iLZ852ip6HCQrvrrsd8odVGUX3YoFm8Xnjmd87dkL72W8nRLp3phZxXfqU8vTs5HgQCf2TyRTGo3mWLfJPUikFo",
  "key26": "4N57WAEiq9kY7og8M9vEQmo2uPfAMNioKc323VDmM8YKtskFDj71d5hkBZnUWQWqAxAtvBJS8UziBWhe3oWMm7Vy",
  "key27": "sWgycJ5uFF2LEnJxnkFBUjsrY9S87rrpPMHDhqnvyrYMqU7DRd2U45kufgqrq4NZaNjdNtuwRyqYpcsvyvco7Dw",
  "key28": "43FmWXZDoPX1fuFNGw39nhW88fnu8bMYpyFm13umDLtmBfSnQnjFQpgmeeGMSZs8vsimAVtWs3WixEFXAzCbFwRB",
  "key29": "wrsCbe7YnoHxaEVNHxFUU6jMthoGFbtrRWZ1mJNUjK5GGsq3Ats4SdPXyaK56SVAM9hQSfNhz2SkmsXawKmL5q9",
  "key30": "2ifDQBEc9v2TEZWBfadUfPd5SfTfUjgY539Qh72EPy159bAiXnSRt1WNCLYZgXJzBeHWfXRvDijb1rxpk95FjkSB",
  "key31": "4oEhfbCUj8G1RpogEeC3WkqCaiCTcWgTnief2h5VfsH66ioFvsnxCAbHGLJu5AQC7M1k9b4PkReGAz4avoqAjSXL",
  "key32": "5ssbGowQmFCZGFUFzBt4JthEvPutMV6SDtqCe2tDZQCJZKvTK14wjFM8rKj7tdz2aQoE4WY2Pnbtuoo6UuiX7bNA",
  "key33": "3nCXMNUpAqLjNvdKhVpdKVYFYoHQNA658ZAJWisH3kGKzuupoy72MJ1tWtYwaydBU85YgcexcnKSVYgPSXRJEhix"
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
