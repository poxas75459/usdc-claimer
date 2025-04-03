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
    "aTzuhJ9LKTbqVVxodsjTnsZnfingKMBHmPe68grK4DnKGyPmVQHHgfHdFx6WXYLj81YhDJutbNrUXoDKBa82HET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AjumEyGJztM9EQGehHtnuwpvakdutmqggJ2C6iMGsRn4iHsge9fNCrQ8TQDVPkZfj1peZa4DqngeaFWEZTr9FBN",
  "key1": "2cuUoiw3XDbtYVV12hBHXhaTDSRzSKS59TMcRhngZr8GnJ4Gks1HVsMCBE8MKucoM5iNu1GP2ZwZt2ZCvZg4H2mg",
  "key2": "65j3wX6khFLWJv65eR4MWULv6De2HgY2ZEbCr3cxAKKx4Mft9QKbR7w2T1XKab6Q3oGWggaCnWrnX1a6f3Hs6rMU",
  "key3": "3c2D22PCcHH6bWWJycrh5zQF4hbEX3N9BdiuKeb1eLVk1hMX9EM3EHtHEkiFvJaShjVkgpYZawQPMLMPjYi6jGpA",
  "key4": "4D26btSa6sn6xV6Xrk22QAW5g3okogwtqcTPdSEKiRrLdSY3iyHsHqzw9rx6uFQieWpzL73LRrii174AVTmPPDB3",
  "key5": "2KMotyusRTNrJh3HKQqB22NhKUHEgyrks15p35ZU5Nbn7nWEWyv7Ge4aRZkye64d4KD1JiwbASaEaepz3v1UZqGq",
  "key6": "4qJYzjTcWohuwmmpWYb6qwcJw9on9hhopVHKBLaY5Co3p9Rp5q1FPtzQdp5CxvJz6UGwq7daZ6YoSLCp4Wae8H1H",
  "key7": "3ueHaS1husArmjJNQ51DUaEx3nh8AS4FQj3giQceMkPC3k3g9xEtQQdedeD9KmfjZrdpqntCnSNUu9hNLTjszXR5",
  "key8": "46fr1Dkh7GCv9e5RxN1e4L6kCTgTtiZHkFJc13dUvCymfgZaGWZyWH25VJiemP8HzKRE71sU6KpHPuGC5qJbBsB5",
  "key9": "FtPLcuPHYvtwKaABP6anx5E5815LXzgMZLh1PE76RAhzoNgoa8eq7ed3rKxBLvW2Z2Snfs5Kzda48UXrd6Hq7tM",
  "key10": "3HaRrJUfM2MXdCZhVxzUvEDRpJZrm8e3Vgst2rZ8EA4LNYa7uksQmNqMKaMzerUTCkCifvwkvsoLLux8g9oVQfVi",
  "key11": "233HdJ7Ba4Es6JsDzkj9SqSvqWguorJhcuvP1H4fi9j1a83kQeGRbnDQ5pAdC9eiEBFJPcdacsWcK8p8mZJTKaBB",
  "key12": "5pjA7Rk3Yz7mKqCBbMgRGt1iVinPd9in8ZPAV59PXwMpgNFEJSiWdgjAP4DT3VHje5VqnHxen8EUXmmRXUYLJKoL",
  "key13": "4g5G6fraWtX4iybAgQQ2k5Xsjv5FJpcXSF3nKUEAm8LyRbNWFiJL8beDByGC8xU1SVRb1TLsKojGiejX5HknfhWC",
  "key14": "62fCQ1yRv3gy4necDYtBLU5KMyaj7pzGG62vicKkgWWcXwKskMd8xqsYsHNKaGMXHhGM7tYGQ2rvE7cpg35ZHLt5",
  "key15": "3hyNCBD5BnHEEBvD2TMc42JAHhr5yi1hz3isqUZtUBBuzSVqoXTzwdyYCPzdRocyRDFWq5tYEEagrYcPGQo3Nh7E",
  "key16": "aoGNDZKeaPTo5hnYWH1z155VQowDzA2QQrmL1WGVAoJTyzKMzMhHiXkLBaivPozVkvhWEKiT3x1TmpWxrAipcpL",
  "key17": "2pqKxuYunCDH8L5EsSuQmqxmjgt5qWWooCjg8dZJGgRWQGWUia3zLXJ6sPF5vzCh3g596R4reiPRFwqKeVvuu1WA",
  "key18": "3inNNser5ArBJpJjZB1EtsyQ1oHM9PSBzaEYkDxjE4CTNk7yi87Rq5Fy7zBTX71tGgYPVrkFjN1WtvudrSPGgqRf",
  "key19": "3Fq7pSMGjgLWamWN6pBCuj4mWfXBB1iJrw3T3LKB7foG7iVuPu85AwhYxXTbCjQGjiv9qrKV69TYjiwTdfF9d2EH",
  "key20": "4uBG4MjALVrzmGzHkb2hc2VZsLPiYyxmGise6KitWqpqvXDqqiQ8B1Xfmh8TD7TnXFfCMJoPyWg1Nd21r7MfgV7a",
  "key21": "43vjFn9JuVXNr9Mu5KcmXaVZ7wCXbq7Ce4zd9XpegH9Q6HpXT6ZTXtL5sNWo55hoz4GBaaiNFNZE4ipcda6RnGXv",
  "key22": "4UHHVae88N1ZrgWhEQNGC63Uj5XgFMPArURWS2aefn3kFzZ7uXKZoKVviETuvnDeGfXdYMUzg41es3M2wR1iYv6P",
  "key23": "4rpbKDUAivgFySdnxKHkJ9arS1F8vr8jV5bDDep2WTdkV5wNtP2A4Vp5J1L6qiQNu9WUNWHYXYeM82G9YKtvuyr9",
  "key24": "3W1EXJxehyzD8SqnnxzvWRoxaRmzsykPmWboQjCaWoK8QuFjYtxrigfMkooY8kmLVUJGdQR3HosMPh4x7CPaXQG",
  "key25": "31nikfvA5zNxXYZHhSaxQdkM8tJb9wHdtWoBNE9HMuT2khojvU57zcPoS9uVTHLJ5kGCQfDm87cDMMiVAo4ufDKo",
  "key26": "39jry8x2ynkWn8KPvLLCXi9PcUqQ6qigucBg5dPocVbec5FPZi4Zpjtc3RWEdpVzRHHdcsBrXAMBaHmNZBwGCkKp",
  "key27": "36enjjSykjsrXpQ8PBxeXumXfZJFw1dkwhKoKjdja4kVypPjYnLNUXTLyw63Kt4G9Rk1ig1v3oJjHMRemfYrrSjz",
  "key28": "63bQzVhyfo8dhcubVhjfgw8HxBtLm5AsJtvN6B62bfRwvGWZaCuqR6hUicRguJFcdt3AbpxUFFnPREX6LFyRZXwe",
  "key29": "qWeAKTVetUhFw5jtMYPu15QNNm7v2u9Ht6rEMk7zM8qzbSSktkDbeu13hPzWw1uAMd1zLpej4ZgAuuUwntdTXKB",
  "key30": "EuYPyRmXoqHXx1dwep1QpEV1AgGkUg5z9wvpjDyWcLdmoZE6CB7U82EoFxTjHR93kneX5SuKDbBLXe4JhgbX3D3",
  "key31": "5pwSEcywCvRED55eX3JM1C3uiUHoq14uXZTPmin7VPtmabXP4DboA3jD7EdeX1dvr8r6cXodtiZZQmihVN1gHqAE",
  "key32": "3oDXqo9fgMgRzwtqoRzCPreLV1t2zPwLtDFFsf1NYMoiB5HzV5ZJosbPRPCswov7JUZA6GLzLEx5Bq19A9UKFtv",
  "key33": "2jmNeNQq19eJyDF85HQHuJFyjZS5xnEjTmh3NvXkpU9BW2cP6sTEYbmjMmtzgctq4pz61feJe1JPa8NCZvBWjhNQ",
  "key34": "56jnomma4wDngUeu9ox9JhX7tJpUtV5rs6TNaJ7xEzQexKXojAJijQrLyiaSFghhSbAuJrNwSPvSCC6S1E2ZZMcx",
  "key35": "4KLKYgzRQSF29yNHNEsA68A4syukfQ9jmAJo52NFREyZEnQyHU74Fe9epv62ebMLAvSLFPpn5fQGymh3TmiLYCCL",
  "key36": "3kH4epJf8Xu3b1kj2LM2648zg5yFjhPBHoEAvXf9oTEqFmiLzGKCYCyqinc6Nfj1amdQjbAArbayok24GmNbnFq1",
  "key37": "fHp6Y8N7sBMBTCcXZ3BgMEyk3u9NfyXrisEWEuha6dGwhK6qX5Q1u15vtzS6kdVbEzSdsX6CvzgVu5M8p7P8XUv",
  "key38": "4VgS2K7ZfLaLNpZoAcQLxVfi4Qnefsb5e6kXij4tKPmVqeY7ygJ9Qi84EBSPdnP6ipK5wNYFQ6g5fshHnCDie1xB",
  "key39": "3CUQPCs3M9BzZvDoCuZRtrLwhA1NXjiM3wGQmDPjvZmgpjWJRoBf9pRSCZN9XxVBiHvJikj6ViqpQv7UNJoMfgbk",
  "key40": "56q3RfwTnRbEVGjXhhL9mPcr1fTjD4JunVtExB13hFqbYGM6sWDJrLXTrqxjyMrAvMNM6CX6WM2WvEZV868HWg1Y",
  "key41": "F4LuJDkj37uPMqrPdg1LJerN2DUD1YWWr4iRT4LcptVrsmYp4aa1wJdrLnhu98y2Wk575pJT7CRUPoAHVb1c1uT",
  "key42": "3L2PVG9D8AR4DpxWDgKa6ju91B7dUVpFV4RK4fmsW15Kedwqu6RaCNKmDk4tGx8cbwhdd6boP9VgSfXj2FvaN2kq",
  "key43": "2Mscf39ZUvMxMmpoQ3M353WEN2SNFu9GqiDY3mxg6mEcEAeqHw4acupBALM5B4uRUH774VJuxi8CJWJH4Uf8RqZg",
  "key44": "4popyJy8VJjEMpHC25PFXFrcc5gcZtLwkwb5WWnwkxMHjiFvTtMoWjNTb2NTMSA7izFxhnLXN9YLBohW7t88odPZ",
  "key45": "3q43uUym58pitMc7M8GirGumPMGej8q37vMtYCtAg7oUCfjgfi3ZTzg9oAvUkj75xyHhdQEAbYBVQV8UjKao3rQR",
  "key46": "23yKzPi848CFdZTtkjEJ4WsGRPd7UXAgct11oWWZdJ4WQsXKoVAtRPie331mY9nZUqju4bJk6UbBxPYc98PcRdv9",
  "key47": "53vMWTBVqZKFyFYx7WWWYVRJpzn9gLx2BDaCYs65mijMP24AEP6pvp6MUiDNMKxjS5tWd2momUEEYJoVdtLHHYRT",
  "key48": "3uRUTM6f8Cm98Coosng3C9gzYMpZs1gJytR1VSij3nkYmpsdc8JLpgc81ffcVotEimUadpbKRRy9hYwazMvLRVmB",
  "key49": "3SZPoX2s21x1rUVh8cJjGfEahQp579z3GrGTU979sbcCzrhGySwiB2nZdm1U9g1LSuq74UifUKALN2Ecu7WWw9Me"
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
