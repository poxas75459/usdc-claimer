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
    "4g6MMniBoXvgNsADogMWZUtwCWbwCKwQGarhjXksbtowuWzt9ZhYDAAyLmAHcoQ7ebGEKZsKzSMaGtzfpLV9HpQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7w1QYhPKwF8bwZPaBWNBHs13eXjYrqKM1DnfV65NmDpNLfX3gsEkDatd5e8ypCyGyXJBotibnFDDH2tZGMTrb3",
  "key1": "bDi1jmJDkEASt7NG3SbeFP5U7hii6f5nGcZnAyzssk2w5u4zqYMUBMfxjerkcgy9grrNCFfis8x89P7eiiqrUmg",
  "key2": "5JQbLimTxRwmJvLaZ1YFRh39ZjPaQJjDcmPJpn22LD6v5v32jNfHGzdoxEWxjZ2j4jaP2aeZwakme7cknEUbtvza",
  "key3": "4xqs8o5X5jCsCPZaau5gyH3ZpNUSE2AMXy3m98AXwE15KJjBdqooZxJWi5zcmt6TaPDAYS9PizvfqeAnHmzjaJkE",
  "key4": "3m2GDhzVb2yKZq5aC2pHycJerKQSF4XDTV25W5hJuHbHTALuSMxmXSsdrtqbTwPmq6pbXNRwZRsexVRtYcBsabPQ",
  "key5": "rP3ajM5PJp5qdT9hu4rvfSv2ev5WjDieHAbZDMSi5ikCkYE7GitJ9WmeLs4CWMeS41yS74rtgBeZHd4auSm3TkP",
  "key6": "5pNvh6d6f3bM1mBkyNKqWntU8Y7zggmoDu67jqMfde7BQV11NwLARTSmi74ZbctLtNTU1C8jyKyirNx7k13YwuvZ",
  "key7": "566oAAZfZGeAWScZqSLeLtq8TwuUwYXmoMuTu88qwCrXUqcLRcfVy7vLnGtZc8FaGujZEX8UQWEHXSJ5o78kDoGF",
  "key8": "4K3TVsNEtEn5BZevPishR22RssHuPFRZyVFke4pobstu7gQqyLH77W3frgW7R3v7MJC6khf2dJoDDi1aJq2aP9Vc",
  "key9": "uRmnuudUSD3op2aZR7QiSwtxJMgVqb9FymdMRajQoCi4NrvDGbcp8km7Mzdj5vV5HW3LeWvWQFiL1Z82fjcGLnh",
  "key10": "3ZdXUrQ9HYyUV2SoxBESfL6jyKPWPdXc4sgaJqENFeK1JRCQyKXHwde3enum569HBGMu9aeYGn8Z8YMqF3jEn3m5",
  "key11": "4BqbfDdW3AuVpCKX1i2vGwcPWAbm17jBheJxE3WRMu3gctzXmb2VFWxbdTAVUGkjdCdMnAexVxpArr1Tmd66Cv9h",
  "key12": "5S918MTwAFQCn2sJPq8r6owr2UbSFd74u1s8CcrpW21ZVbYhwcR7PrdkgbX8u9F1Jhs5vd4eGsUJa3cDEkTQ4bMC",
  "key13": "58famkxUgChNJqJSz647Y2vTphAcpteUWzC53HbeTnxxdLqXSVMrCCk8vEB8CnkyPZy1quJtsvCKguTuH98ZkqSq",
  "key14": "5uSCyCGZXdNf9eU4PAwPptzTnfuY13PgTVcV4eZcRDAqL3G9KFgc4T2y2Wy499P5urWEYvrJxTEKJp6yEhwYSDek",
  "key15": "5F7Gm9KKpEhLmui3j3GrxF9kNHtcm3kJFvY3jjGnbxe29WbjSs2GyLeX3RDvPT7rrP6maZe5L5eHFNRTJstpg83Q",
  "key16": "2yK8hrFASPDe9asGBpSaBnSfMzJ8fCE3LmvRWB1kYkXNrEG4oM7rh5AHnVm2AUiMMvWLPki9mKxFG3cNWom1jz4X",
  "key17": "MMAPHt9iGUyecawkXxYZN2FV1qwrWS5v7gsExmf6qk9Gc6oi6MtC4S814UDwZGjhSCJgTzBWLZqokN4Ry94HzFg",
  "key18": "5ujvzNxQVdrYg4yGKVvbKxkJfsoQFRvTVVzobVzq1ZXdp7jmAqjN8L9yjYfUsNQgqyfWAaidBMvdzsLfA8nfyaWS",
  "key19": "7N54zfHdY8No7WN5cyoAosckUxJzmzbDCPB8LSN4vnCNnrv7wRrYQYJ5MXaWyVh9F85EVySdtvdtX6X5zsfZXRr",
  "key20": "WkuQZETTowbho5eZidGHVUKfV9VR6MkeqwB9cTxzQQ8ZQaeMqgmgJihr9FH1enTPgQjeNefcx3E21CTnErjJxv2",
  "key21": "ePYZFZEmu8tjWALv8vq5az72wrAFwhfASsRfX8b9yAnqZA8Hzo2YeNfdJELsvrsxBWXPhwwNB521RXij8nE7CWu",
  "key22": "2i51M7ywu1ggfcDzbcrhU1d4Jknjv6VTVtqwGH6UVG9i5rRe6esxhGitNv5LUFz147ejDB19eqwBnNX2sm27wy9r",
  "key23": "5ZqfZncKd7zRDcLSD1gvVoufLcMjiD2pExHoK1kML1CbCN6xUCbmUHofZvJppCnwBYHN2kdCMEBvzJsccEQm9qq",
  "key24": "2twhi9pTnuPN7cKNYETwobZkMQwE4DWxg9v8qrSPRWuNFa6sBvb4jVFfBMqBCVMAvMeyBu3ofWhNFrW5kCZLj8wh",
  "key25": "2M3gRAxu3H4m5CXMhpnxBQfRbmUmiHZmYsLT88HQp1GKTNtFtco1R2dXehg3dmHwj1WxtT6hE4UdcFpHaJt4LuHN",
  "key26": "4DLUrLUhcCJZTJyvRK9J4ctrxJPqyuXCqZtD5g1kgyji2ZFkgWBqCXKCSv18ge7qKRcY3SmJx3uVbE95S8aSd8ia",
  "key27": "4YCEq9eTFoX19epMGujaZS2sRALLsJG2573KRmQWJDmyyFaUSZ4EtbcAo3pykf6JTtRZi27BnrqGYzdcZtdyzHnF",
  "key28": "3j9gMw8EbPMTvYxh2UNsxj2WyhLXR33YUxyuYgqhgDcYeMhtVNLP9jhCjYVPpmXgDb1WDhQ6NNGyvhtSkZX3YD7U",
  "key29": "pS6c9XzwuF1V5kNM2gt3P3dwcqMTuiXBcTS2u2EgX5RUVP6uNCraANNqn6C4FPPzrmS5p8bGEs95Q7GzpKRnA8X",
  "key30": "c9sNQ2ifnq5fB8JrgGZWCPtx4a5EYkPbGCeNZVZjcfJdQY9LjrrQd59QHT214DmrtXE9bSGw1NZyZ5X9AhBogGM",
  "key31": "2sdzouMwPym1yK8fk5qg5oF4JRhrwwurVyFzUsKJZChKRHRRdp23h25WCFK6YNxSDtBTMkYCFKyk3umW1UBKAcfT",
  "key32": "56P4uQBn4kpZSRaDNAspYZu9pRXLuNq8gJMnBdvji3ceUvquaeDJhr8dAtzPphPgjj8c9nkuWQcKT6Ay6wsjvori",
  "key33": "4gdpEC8wAddfNbx881YDP3hPwo1jniLkRFmLDA2z2oY6UJaPAe1mX7DWvpWDJrgo8gBjopWFgjaHUotJnNf1gqVC",
  "key34": "2Ww1FfFBS1zgZvMgn9eLwMmNmTBZxw6nYdFrQXNpnT79UKk3bScwcgNiWbHcRs7XitjHhYqSuLnRGpJAVd417i2T",
  "key35": "5GZoJC3Q7JmSoQYJHNRnFYnZtiJT3UzTnSW6MLqPTtSuaWsxX3hAoEtk1HognAzkaDaoTsPk3QViXqCz5hgTdxEu",
  "key36": "5zsoJrvUcFk1p5v5FdwjQnpg2NpxCJpeuTtFQz8eWAbes4DZqCC3UktDY5KZixRmGjGg7rZPbJgFXi1AWCGUPJCB",
  "key37": "2qiaekndiT55he9yK8T64qjgydeYZ8Jmr6Lx6ymWLVxVdKDBLJewYdZfpZu5AjMQcMw88YPtfWU2uMvm4aqDHCA4",
  "key38": "5GoU4htFZBJhjmmfkaSiviuvh7vhb2cVwMvqqQvmkStj8GZ5bgFmWzNSdRk9o3pvMZyQwJ1Zy9sTvqpgdbf3keXP",
  "key39": "5taxF6oMmd4cmeRJxdcW3MEhLNaxVWeyLWFFrMVn1jxcMSQekDYETE6sUN63EKtBrb1iqLpUKU7DQV7pXcRXPcXm",
  "key40": "2A8aexPr7xVd8kTTSUguHPmLFRZ4VPjQkzzbijaRx49SRVXdLc1nAvCLReVo51FcHiDus5VjfoZ6arptqMzgW2QK",
  "key41": "5GC8NS1QyLpzaa43s7X5tnG9YqmGzKgQ9KdPvywTgDVfU3T5DVYVcJBaGnjk3b1NTkrjnaRk1KSww9sGbJnsLvh9",
  "key42": "2MeqwB8sXtjsE4t7Rqy6FvhwtCEUg8TuYsLcC5dAMdbwZzpcmceXgJEx3r47WJYnKeEmNmbGQ9j1HNKDX3oABDaW",
  "key43": "3rbJuh7f4r44C88P3fby5ipQpKSQGneqmfcVS1RWbNkD9p9SMxbLrVvMxGVLgSne2TGfN4bxgDWgLTeTbaU3n7Az",
  "key44": "6PToPinSvLjxMBMbaUyfPc4L3HPGykoxnrJ241MUx6pkAgfUC16ScTFAYo9WBbS3rTRQH49U7Ntgu9R4X2aa5Ww"
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
