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
    "3DxuKQkkKvyqjwUeV8YCHa2dwqsYrybD9oV5f4kwutWEctW7BEdPu9TQzMmEQ5B5tEsAFiQwrfMgBDU1TCYw5XMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AZDTXJ2HM5PzN64fDT9RWv6VPj8k5DUW5s5BBTNhUHNY7J9369168Z8gacGrfAHncEwiSPAinTYWto91XeKDGbw",
  "key1": "46BjLBACsEK2sShH65C9jVBXVdQznM7Hcptz8M8tNZAJFKwTNBY9vbm4AgmBm967mWtUE93rF9hzgrE58HPxYB2S",
  "key2": "4SNzxpSB3AZZpFrdj39y7U4abw8awhghr5tANQGMhzGsAbzC9bL1KPes7Yuxpy93DmHnSYhabCMJzFpVkfUKs7Wr",
  "key3": "5dmmeMhEPkmePkhhaAg19xSeZ5DzD4pdqc6ERSvfbzak1E2SZMUWpxsULqZcBNGaQEH6ASPAWDinaxT8Nh8PgKkk",
  "key4": "2uH1LWELNhtGJG76i9B6anro13jKFbPX3cTGfHmFaQmQyfFocSvt3KwwQ8uQeQhHYShACM8j7JVDsXkuBaHgf7X5",
  "key5": "3ahWvDyyqiHcGswjDZVhpk3hqoZ3LoS4sPKXL2DyzCsiZh8a1FwasctKQ58xbkzeR2xWCVN7sZgJ1zHNbXAr3dYx",
  "key6": "3v23nz8MfqPeADv2kTNDf6BWwAAsihBfth6mKCHg5BthQ2Z8V9vqkcWKZVHYcFJFeoqWoZQt6Zyapo6by4Q1CjrQ",
  "key7": "3RZ1wcSG2XCgRUsF37bP2NTGCg4f72MCiYDHFLudss1NFPtRwp1KoyKqVfP9SHhmmRrLK2HbdMpRvySidtWoayma",
  "key8": "kkXjuD7WA6s3svYDBgNNxYd3uGdB9HwhhZuhp1q3BjGBfkcrgGP5ASPujYvwD7ohGyPGZXJxNctFN3DC9j4ARaK",
  "key9": "Zdb69B6BsdLZTDzme37NqTmL64LWYBUAwp84SEygK1gVhwj7Dnp27TpnNyMazrNsm9iVcvqMtfJEGGCrReYcZRs",
  "key10": "uziAxKaUhUb6CGGEhYaqoPSNuy2RhLQad49PC2mwRrMEwQvtTHt9ZWdb5JmHfzre5o8fRZTpTfqqj9tcGJnY3DY",
  "key11": "4boCSs2dpQryLjL9EBp3F3A5nJnuJnXuSExm2Qdk9iEaGVuzDchgBstiZsgd4JV4gAJFnEQBpSqFMGd8L9xhekzG",
  "key12": "5LPrSSRkgeyvzCeBMVb8BiATZ6wvRTH77HNed5R1fpLaX1bAynjjswsSVdRj826BcYzH5z1KZPfZXJqiiyAsQ8Ak",
  "key13": "3keQySEL74ng38SMhDjBNXYdyYUiJAUQPgiBknzBStbpEEYT1echxzzHTdGygwazaxxqZ1afSQcGNZH5VjmWL3KV",
  "key14": "yFU4HgSrxTjV3jyc4YXykS5jKKp4HK8FvLCPvSndWkQ1i1Fnkz1YsKq3hbjK8EVxyU7rB5W5eZdVtzzkz48LgMo",
  "key15": "3J9YWKqJe5nYQBe67k7SMsXfAyrRkVjpcJKjJ5jz5kXiHmCjMGkk4GdFRh3QPtGK64g9Ph9SUh6VQZ5jK93cGK93",
  "key16": "43pPvZsEpYnYdXbM8on7tMNuJssVWpciDp3c1Cb4tRByUwm3qkYwoB1VZKn37kDT3pAiCr1Qk4aKzftXyWCxtUaV",
  "key17": "22u8xhH4gjxrfkLX7qTVTtUNU6aPABAPb1RXG68gbKo1s5jm2gNHTP7dZaW3C84inZwPNH18HLeek1xbphqqjUom",
  "key18": "fdcoVyR54tabhctr5VWfvMLR5GExDKGnP8DnuvT9xyoMqEk7uZswGsLgujAd79455fpoy4QXrLQnhEWBdv58UJ4",
  "key19": "QixJxZgeM8fip2R6PyuBMmeCoovaP22xxeca8aVk4TQNHHGVZCkongQmcJqUTTdGGKFNy2hTJUSFGHuPUe62E6W",
  "key20": "2YvwYtUF7zUKxdYMoDGcnm79L3Jfcs3Q9SSSETgyQWsmEo5ZMESpkwwMqyWQ73Lb8bXbSooBTtNqCvHDS2oPKE1T",
  "key21": "D8Tdr9qpVV781FemRBgeJJYXEKRzJc3eZCYaX2ZkCpSKa6tPa88zCvrigiyBY1ecxBHfrTGpdcuxzzu5z66g9Du",
  "key22": "4jqHSbqKx7KsjKny1e3Bm1nspDVdt9p3ErQpBorhqmrFyGZTQH2b9kq8t8etNmX6sf2kx1H5zHJbwzJBXyJ1ZAjw",
  "key23": "3YeGXQFUJ3yBEzdDFsHTgTv4VCrdaxYjzAJ1qBWS4mNwUgkjGyRv2g1AhXvEJQwZnpayEoVXx8tDsqScmJwPUo5z",
  "key24": "2VvaYm4s4BzZ8TN5fMDpNd3WMFE1AVBDr6WWgGgjMfUXUQN5p1tddiCewindNS3ZP1PQzFNVVDVAj68si2k4B6fo",
  "key25": "2Tu5r7sjhPRsDdZBbLhVcvGJh7RGLr2d6nVhSVEAvhrVyyyhn1oKk5mXSxL8TpEJt5Utv2CH7F2DhqCZ4fkLoHmy",
  "key26": "4npd44wZRBuW96rVWyAaC2PAnVJE9f7xe3HkwrkCT3Vxms1XBPFTE6FX8hPCFF6UtThhVzLw7mS6w1L9fveHeffn",
  "key27": "3qQB5saHanKfDsMNKiMwSugioiutJ6WtfyGi1ZKxNrhTZd2DmXsaPpUtq1SVbYbUsUMsXZVjk7uXtTMejmog2m3a",
  "key28": "vvAipkGjkXhzyyPMFjo22SRtmuRnZg1kk7YnfZNPc6cJB3EBBXG2p8UqRS1P6t8y7wxmvdaD9NdkCypTNA969iB",
  "key29": "2LPuhkaJGiftoWCsNou8HvNq7hMaR4R2joYrcwd5fVMfmBd4xi5fugLFPjSv6C8JJ7fjUy7BCJqZjBeMtz6U99cR",
  "key30": "4XL3m97pHDbNwpf6P5ZJseHwXhjTNFRye7EDVG9eMkeRtLX4zZ3qVjEFVD8eCrudW2YpK1xQ5zBPK2G4eqW7vyga",
  "key31": "3ki52FHkbJ2AMk929NHZ6ni4C5hvX1ZKs8Z7d7pt12UnrqwXtQyHmYHMftM89u4VWeZtKv1Ra5h6Spwq4X643Vvw",
  "key32": "hLLXizPzsCSrJ5Bq3fKgCjtMqvwQHDRpSYZRR4rjfhfL1TrQ6vNEF5jtykrW7qri3HPom44q8Rbsw822d4GT8vt",
  "key33": "58bEZXq7DRxkkB3vbpUttaZR2K2wcLz55uXK7KKzujffxjEQo7oGikr6bYmtEdQu47kCu9wR5cFKh7Ux6cZPfvUc",
  "key34": "2YXYdwa8Dm1sT28VAe7TaEDqAAVqgoqrYG6PHE6wpGPp7UxniMC3x3TnVebg1eN7BL929u1akX3a7KTFh7fgr2Nr",
  "key35": "2KNiKn3nwRVkT4znFSj6U8r9CJTYZHmqFeNUcDyoqiywWi8Joyxe2FBuJoRDpDXAncCRsJuKnmKvbPtxUzNUmduZ",
  "key36": "5keSiVB7RT6ePY3RK9kQ1kWKjR9Hi3behu6zJykRYK58rQRwh9eucQDSZ4isZmBBgX3WptjTb9uHmd2CTtbDDBnu",
  "key37": "DGa4JrHtnUV2ZowPa98UJnwh2dfufEXomnEX11ZYYFtYPT9xsgV8KBzWnVXgJZxstHXe7h8jPfnk83JGyVhnEUm",
  "key38": "42SCYMkWhRGCSGHS4gVDKER3dusd3uVF1rUggWxpDyRxXvTLJJxfzKydYGw2JvNbho7dG7r6DUZ2kvtCtfAaSEig",
  "key39": "2wapqctq6GW4vH4V1bpvwLcbGXxTifgkLAVzmuF9jBy8g8EvxUat2cZKwZBPYHhSwQn3u9AiTQnd6NEX2GPFJwat",
  "key40": "44GYogxpzUGzS9qB1s5uoGJeqVRkhb9e9Jhr783mSs16g1N1MduPGogZZrWpYu7K4eyin1KDwxJ9P1FFHaH4XEs2",
  "key41": "4kwPXgC9xC6Hq2xgBwJmpcWdwcvWGQ6U9DQC6PNPj47RXwErpsYyAUXg8aroJmTFMuXoE2pM1ocp7mf2FEnzwDVt",
  "key42": "5pMUcwKBh2aa9wqhQJnhZbd9Swscuho1xRsGVnaGuBCwNNLG9kNcYto2t3Td1n6quTRWuEvMeT9c2dXaCFnA8Avz",
  "key43": "2SXewmLjKQmxD2WXbZD75QXquFAfuEoDuYRgnYqx315GXd5T22QQtYH6dit9Bpip1uMjiJkxkBaEaUNLvapMDDwz"
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
