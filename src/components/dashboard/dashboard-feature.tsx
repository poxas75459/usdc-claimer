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
    "4W52Tj4iwqbo7kRiUgmjTfyFyKndj3VXyqcDgKxEgz6W4Ws88p2XSkwvD4HyjgYeMjKTecdx7YJsddEJ9ae8yzR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597j23GkpAeqvLVg7C4n29QWVYWsm3rjzoWEd2kVCqsNThfv9i5zoQDVXvdevvfDzJhMUH7ib6R97yYS7YedkwPV",
  "key1": "31UW9Wq7aFYwbugyD1L8i2mS9Gda5vZEEPdnEAs8ubZ7uJtPUAR3fnQViqVQq1jCsGY26nCE7gxr7eaLqXEdLMN9",
  "key2": "7ngbk9u42sFYDzJ25j48J6WGpnL2veudMpSD5FYBMdDygFkbmPKRFjFbBzuD2NaWVYq3Jpimc3sQi2Wh6mf5cx9",
  "key3": "jo62qwERy8kHnTrTiRpCjGjDUZbecZ5b2HbSk9ekZhjRJ5kTwZLnVizGrm1GbNwBh8t1mnaJN4CbjY99wUMubUe",
  "key4": "5aahYUqB9VqqGHQ49q4GHrzm5fQjNV3VXQvcTxgbtoDLKaCDdv6qpMAuvRkdw7SaByEdTjN8WXjL6BHFo6fEzfUH",
  "key5": "4WyuRzqPNHyLrUppTDLfQTrWuX88taZcmagRqN5feDd6MxqBKkj6jaG879oFig6WaoR2mBhYjNrFzMDQb9MPRdzw",
  "key6": "2V2qpF1wDJZEMsYJrzboBW28r3SyYLNSxEPNMwPkB2dbBtGLMQFF8gyworY9qdMs4xXnP5hg56Eb4Sv9pG5wEYAH",
  "key7": "36uw9uXtSRRuUR9TzqSLpMnq3iBNaWNxsoU1qP9XD2eqatRkextKB6Zz7xHkmMQhrdpaxucxMi4pgAvUGbRomBiJ",
  "key8": "3R41c144Cz3fm2VKNk6CSLcuon8iJyyVB3pWHgnzJfq4ayBpgYvmkENatG1s7MAPpJjBGVta3WKUovBBrAyQpxRq",
  "key9": "2pgn2nUVpBGthQW64Y1PKbioTwex9NJ7mJyU3Q7A2aBe48B6kManaU3BbU3tUgFGU4mw2B6LDnW444qQsSMpNyif",
  "key10": "3KKyCW7e7H4DZHUUJu3Ntww1Ts8LKnCniHKQdeTB625j5TzRABRt9Zm6xQaDiuQ9Ep7tD2zCpGgmpamcjMWbgZc",
  "key11": "6hpwjK93fv7HVpPLMxPqUpBUJ6AobsTb6m3jsfjj7sgQa4nekTzwYWRoVndJ6ttfgvEyADN6gUHiXH5Gi4s6PwK",
  "key12": "25KRu3Rc9K4XwMMdCSotibzvFa8sREjkYuuEMGiwoJw7AWWjSnibyxjfnEoUbz5AKwfandX7XP9DfJ845MitqAUS",
  "key13": "2vsnzX3QZKeHagA4PVjR79WWxk5o87LorMB4M4zn6rBpgYcrU6PsHZsJMMX1EKVgBrAUYuCRSExEARio12zNWMyz",
  "key14": "2z3EdGgHiMb3ASJ7f8eM25juPAdijk6ttgZiCDfcqc3nPYCwaXyVJ9Mss2nxv3hHUboMrSvagr7VxJAWD2t3qqc4",
  "key15": "3Rms9s6FwDJY1kGRVHJWgr8YvzrgunBFktRxba1oayWe1cad2UWxBTx7NTmjxoMEoUWy7Nj6Sd1rWVQ7mutbYXeT",
  "key16": "5RrVBD2F2RUKhSAKzJdDK5uCzmqJrea65zRXBviyUb3fNnYw6XCMKSHmWQbe9H3WvKFCrvLB7nys5MbppGQefahQ",
  "key17": "2dz5N2vp1J4hb3wti7nubVxWMnW922YosjqxFh34BLaWC4pzxCGUqxCx1hzkfu6DZA5twm4eWHppxy3iC8Pigp9g",
  "key18": "4HPoNFVpCWuc4BLhBuGLQsmyUPEsyM6JYMdALoF3Avcj7EvhM7VZfcKFJ75aViXEdunYk4KrBkxvdhiksBcCEbsp",
  "key19": "5ZByR34cjrwXkmYivp21LpayWZphVLSwAcbhvs8NW4Fjyap5N86cmcHarmzJZS7DbzgxPxzJ4mDbzNzXRq6j21Fv",
  "key20": "MYT8coWvS6XjtFjMxLvQVyTZ9DQiLdcnH4W4hor3aAfEXEi19wGnRKX2Z396zh3fw8Q6KtJoburiGBWkJNme7Cb",
  "key21": "4D3tcbUyr6micrMyh3cwTjXYfimSTsq2aexdXATxgoLohPE8o9fwmmKnhgMvTp5e5A5zM8BPCXMTeAERK1uAKXNd",
  "key22": "3rM3aneufmdk8kVRgjapfSX5cfQQLafrUuovzypj3yQp4GTyV5n9n2YWqVK1k6J3cV3ExK7f8oM4J1DcF7wRvYHW",
  "key23": "5jhhXdrM6ATddPCEkwt4jyi8eFaR8BTYJjYAcxtwJtt8nXjza2uZg7JpgVt257QZMY1hNe8bjNZiap94uy2x1SCs",
  "key24": "VeFSp1YNT3aUStBj7YAjSSBWGWvmRMDnjpuyzJ9nAPf65mnHcho5xpikrScLypGY4bcRuaLUMvjKnWdqj64hRDj",
  "key25": "4FnzAmeoDE4fQ3tSNHgHDPdQkf8rjN2sQbrzvA7UVZb1PFLx3qxGpqYqNdm1DunLX8FxefBvZGVT5iBEeT8rWnv8",
  "key26": "3ecaG5tUB8rjQmYV37pAaGYscKxKgAuiJiPMG6QnNwhYSneRJEXaN8YCMUxMuTvGgXK7LPdntPiWpjc3SDBou9Cn",
  "key27": "2nNN9oH5twK1nrt87SxPtaBCcGLA6QiRmSFNRm8GkvrEvre33BEhjfaF6MGnmsjFLt3TFJSDETVF7FhrvQxJ5jqQ",
  "key28": "3aadLuDTDGzhrwjc8x2RaAs24R4jN8N9ikvL9ULpYeBMn1nPbovVZfUN5AKgxDVSpJGU1UMuL4nAejBjGeH79YCU",
  "key29": "4699DarXKPdYPWa9mxbjWG8WCdntfgrEwT5G8t6LuCvLKLt3Xabytyj1sJBCi8JWx4b4Dvzh5LkBgJkvJr71u2dM",
  "key30": "5MBJGd3WDpbqcWThBbCjMfRK9bTuJ15R3uXGKQ4svLzNPCTsiW1pvygsgFbr6YQx7MXdBUoCK1Kr1McDUX4wd55s",
  "key31": "qnjtwfCntDRfoQMsDRj7RWp7gafP1rMezXyB8FkKdwrD27g9SQwnUk8yY23d7XV1hpJcuwXrd6ax56N2vTdT7kP",
  "key32": "4r1LvPxz8bmdAfVkk4oxVds9hujRxyhdkc3z9YJ5pirVMiL18NyNTGDyhjjgjxaDty6Xjk2yVCBBVqge8fr3cq6T",
  "key33": "4nPpfMGhUh1NPFyaR55ndqXpkQLMoXhBthQrJzgpnNh5Qz3MyL23t3qwziZXgRLA4PJNNPFYcJq7fNbccaAESZQ7",
  "key34": "53Lnd7nvERurBVgMqK4CAgRQGEn5zz1rbz8GrbH7NhuPQX5MSvqc7TBQvwjjyBY6w4RjJw4CT4PAyMWArCKmq81K",
  "key35": "3hQvERfUP7DY4QTdM1cnfDwfH4pUijVau27xA4yUQHsumRRCC1sp4tP1qM6RG4on7cipKrCir8SftJtEDxtqwd2W",
  "key36": "46uLfdqiPQqpKjZtPQ7VbowNWWWsQgvfDAB4BAKz5ZBdbCrpMhQeFkAWHLx8viywqD9ZtXJ7xbpcksAyqJybfRRW",
  "key37": "4VEbWhm8NKguxvzGotxMpu9SRptXbG1Wk3F6ZMza6jkLbXfqDeLei6LTQrCgSutnNPwwDpsygEKGpoTN1C4oJeCP",
  "key38": "2dsiRVFB2kn68Jan5DdfTVusM5R5TQgupUdoRJaP8d38HuzYqe38NzNdVj9WeQMBUi5WsPouTWmH796uYe4r73zv",
  "key39": "kF341gTPnhRaa5AisFv1fwZZExzat5fSEsFrkKm2um1v1GHWuKSWMuAyjzoBbRuqYDw6Dk7cD3nCtF4sNY7wo8z"
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
