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
    "3b1dVytD4HwLhdvCfj4L5Rot6mVJSUKT726R3wL2ws3K3eo2k28o1K39C7c1gmTWx8dYKduCxnhfjBAWUqaKKeER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vo1PXuga4dW5oi8sYpxn3UCMuswnKmWQ4Rs94QA11AenxQ4NjbG6PDeFCGNT4zEkAooDeyMa1HGjVuzryJiuEGT",
  "key1": "3eBhJxYoMvxsGRrCDYYykWCeFe7V1oLJDBB8x4yBpxYQVeitKotwfzdBQjBCR7ArZh4AJ4YeL9HuZZRM62AsHFHU",
  "key2": "8uF1yuUBvEh845LSJ9PDYAamgmfXv8wAYLGEkGsEvnV6KVegWf36Ww8gZZ3btT5eKHvfBA2fShM14XP6xKCc4Bk",
  "key3": "3WSjs28CXCkzF8QbkzG8Uvqxfs8MfTECTj1TSy9vPKXTe4C1xjvhv97YYZSPvn4MqUCWvbfxnJqF944C72FSB8Vu",
  "key4": "62Hzp928kAd9ZTTtQSzoyDFdUSsCHgL8h4ZoGuT7ZowaX3fgYLvDUj6NK9F6qC1sfambHGVhaAJNk9xhWpmFMhrP",
  "key5": "YynvmPKRh96wgrTRH4BadfWsYQTsBkM5CFecbHzabPNK9SatM9T6sUz6gAuT9NCmBBSctNh3Bmjxk9x8k5ucEdZ",
  "key6": "SY1aBuQcdA2L9wX6NHyTK5taLfXx7S5tdBsm8vUDjYMzvjvUdeASuqrqhK4zHWm67ioVczDvqi7rTSZiQLVkA3w",
  "key7": "4T6RBUvRujSVJZFpo1kBiTv7UCiTp3TfgEupWV2Vab4GFjUvL5zN155BRS3pY86WXXjxHCuANRX18zKAbW2S5oJ5",
  "key8": "BD4HmsRSXsx5FdEJYshGC2LG9yLh7HbL2fwz7TaLsWk8MGYdP3qA7gnYXasdH3mActxvHVXJsimfHQ8ienndggc",
  "key9": "Wiq9ATCwVC5tXW5kqZgS5pN9VcKk46CjhcNe6PbeooiEDaPUour3yTTDkpAPh1bJcWbL5bam5ndkGJ2u9qLtRTH",
  "key10": "2wDVunrZ3NqYSHbzwc7J8pj9pyPxKAVavKrMJAV921rXbbFbsPjkWCAbGm7ma4Kmot3tAjjmtSsPWqe6wefbKghq",
  "key11": "2A4m7D8AfZuSEeChhg8bht4qJPgS12RNLmqnzrbzyWS8GZJj7NKGraRtGkqExJrLiaQNWMv7qudS1Qm2a9tp98n9",
  "key12": "5ZEAuY9hRGeyUfHVLfjXdJhLUBkmgGLWDQBmzk7MxdNicr86pspWBL3ciVhZ91g3NLNQsxrYBS29kLPdvA4ihdEn",
  "key13": "2aV2UiNCy4yGBiizDRXnjoJLedLJxe9HZPM1g1a3yLncYnNy2zdeQYNvBKp5Dzp4MtBT9aZ8sshE61gzDxCpWK1Q",
  "key14": "46CLCYKaXZHfxVuGY2YGJUNuDaKvYKZmGJ6G73Fe2t2bu9XGm3jJW35wB69xG9BGsCYTC4UDrq9Q4w9oiP2qQYEr",
  "key15": "4AgLqhJgLckPv16Sp6cq9zqf3K21rzHzZfXsjUAgpccLQ4HkYxvDAhapdKs2hFqFXhnN9iUhZmMz96MQ4B6WTiLE",
  "key16": "i8zwQKPquvFxXn48iqyoqq4eNaKkLVN1krQQ8rWv6aiVVGw76NHpLvsBDAcdWUZknYN1qdSeCNwCcPioEAVpY6e",
  "key17": "2m36x49uNEyFtxaHp6EPvisc5ek3crtnd7mJcMxswrg8gc9fe1Vf4A6Pdj9kwu9ZJBunHmRM8shU5du17fGPo6a4",
  "key18": "4oqGx2pSCKWraTZLamRQQzZPjF6cgcqHYdkuxdWS6kX8eKESSmJTSXWFWe6WTkB1zbHTx1c4KL5FfL9PSqifssDz",
  "key19": "5HJadkVSofWHnXnNJKujnRPpGzNxwMWzAZbGU4zSUqcVZCk5jwL9CtzYQK4vHP8eNCYGoK9a7dXsMjjCgajXMJGc",
  "key20": "2sAAY3ZJfeNDbQzb2MEKF2rzNUfwno8yPGyCgHM41Wm9jv94qdenAvdA7NSJMoU3vRdYtjLrurERJqTiYTFNi3aD",
  "key21": "tEEMtBSC38iogj1MA2q73iK1jpxK9RCujMgEfwzZcqA6H74JRPaD2yirEnQoyZ5vYGnSrTWzYvZSkzjyczaTLe1",
  "key22": "2W9kHNURMLBJpCUkLzoj8raKGJ1n9EjReyLSjaFvRyYrcA9XCrrXCoGtfPVrV9CipwvVSayR9fYLwXqfo1eQaDdf",
  "key23": "3hu6mPU6cric6MwVDB2b3jXb3Y3HV9Hspy5NJycV4xiXAQgtD6C7SPgMxYep3iLQwaY6rmD2Mh1RKYUHggcSAxga",
  "key24": "JMH7am3xAGeFznhonJbcGcpYHvRsi4GxUuyMnqcWTnkG6asCmFizyoHnKLWtbVQ1REbvftR2qJNksdnsD3u5J6M",
  "key25": "2hbaXY4TgXrw9oSFVQTXm6EJvKek22MbLecSi6kPs7UNjGFF414T4B9Kmqp8AJbCss88QgkydCb6d8BUpZNwNETn",
  "key26": "5mu8T77hNe8CYxCNdcayKyufd9WzYuDmVKY368pWAkLcRogwwKAKDHUhAD1xAjX61rDTkywLzBvzhVdGJ2das86r",
  "key27": "qiwtef9iGgouBUib1KKR2wkvLZbBex2fMDmsnp1pBytNZLMyGwAJYMg9Bd4eC2oiySnfKQQysPt7ikgNA2KrSMw",
  "key28": "3bYLVG5KF243BYJBazAGrbPX8ZXorTkmZKAK7yWYH5MpZqWdfABqAB4Gcfj3P1a2pzD2bHgHry2immTnfjve57tD",
  "key29": "39KNqnJxS22xJV3SHwgfYAne5caHEv52wPvhKTKF4EPWxYdfDhAqxYiRudq5pytYgFwwuqFqDQ71pkjnGszqfmrF",
  "key30": "3vdWeh74MSFLQcyxkkBUQwWEi5Ay8dMDxsTNZP4XTB9WKbm3MFGYyfjpcwyodmGDuTECtvSQbgxti5MzfypYV33P",
  "key31": "TRZsx8B3gH1x6yKYV3yfZszNjLPDXB6xKkHQeeQ9sV8ARejLzQYHnnXAkf8ueytQPzmrH436zFTCRE2k1naRNYx",
  "key32": "5xWLXgrPD4Gc2qavDZw7xaXXMskQ9P5VzQdaVJaekKkScebQPTqMnjGJL1i4QR42xWUCXB4XUeztiPUjhDdbVoo7",
  "key33": "QoerpUp35jX5PVR2rpfwLjjY9Zn89KrarEM2LaXV2Q8hgHata375yUsgawUMULHX1NTWSSM3oonHocpuzDjb8we"
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
