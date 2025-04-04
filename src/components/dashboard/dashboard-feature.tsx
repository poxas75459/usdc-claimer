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
    "3CEtKYT7oqypxjuBMTqdjxJJCzXTqpKW1TTTuVj4SiFP1nFLYcYXs1JRNZdwmNw3ZKtkWPHLYbyJEKMC5yPn9cc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7SvbqBbfFiB639Nw9sM1NaDs78EXWWBfsPRN1eQaG4xbFtojWMoDieBovFYFSzaAbzyoD33cQkgXA8Pjw2CZRMQ",
  "key1": "JiECvuRPgDunjz8RsCSc1gUnAFndnAtVfokf44S8QxdFZhNTQqE9qagV7cAC92Wvf4yw3gHrimx1KbcpN92hgzq",
  "key2": "4h3oyP56zb1y5fsMNehjkZMj6ukgFknToPeLKeErzaDkGEtnmkipeEU9MXFtj9tiELWLtqTTwrVRZUpemami9eDL",
  "key3": "5dtWMG7SHaKsSfihV79B91bpRnpWW1YxRC4naeGdf2JXeADGZ4BTigNfhYPgcJpMgz9j7zvJKXAKvJ2du2dbyi8P",
  "key4": "2RcSC4VGYjpYMgTGaxSDUyVfnu1qUYHMBQirZyYVC7KEaCTWPhBvCXPMP3PEJ7QY87Y41yhoAGxypsRmLJ73e8GE",
  "key5": "5dis5JncDT4yqMNZhWkjr31K6vk6NxMQDhF5pe6tZLyiJonSKvjdo97GjWS9dYX7wppe3L1ndhj6kP6mDHPx9qqo",
  "key6": "46yNYXAcZ2p6AS7m5GYZMQyDGXU95ysSnrEfpmrHCGuvEKdqK8DS6BCk6kgZmvdL7vBRmCoBbyYhmJibA9FRqFc",
  "key7": "5kR2WEYyGnqJfikF697rP1FDKRNSk1htsdwtf9g3jgNqqYrvczEMgehvbExe2YkeFuzYNtVBkQKP6iS3azpBoir3",
  "key8": "RaJ5brz7pYhxRUke1z9fMhrNZYquSm5oSXFQ3JgXQq54HAgmsEPfvmi8bdoceaUD9bE3NbhpKumzb5qCMxhb5cX",
  "key9": "3Utmyn5XcVxrPQe58tmPBSMSqB8BFTyiiYnCJBhx42yfaciMsjNgEwpgMSH9JmbQNY3cz4BDWEAtWEmxDDLcfxfE",
  "key10": "3GG4Gb4VBSrhF7JsfDzBqXaG1AQAJ1pXTdEzbsDrdj3jusTbpLj93edTUctS5Xg5ipNAQYG3ZTbGhr6wuJM7BaG2",
  "key11": "HDrtJVj1U8FhUtdkPH8VqjghzUxTm63t2NeFdC7mGhyx5GA2px2PnZqkmMD32BoU7WWpRci5tACWyLxMS7V2J9x",
  "key12": "5Fq8iazjyVkebGDrDGxKMDCa4uRQ3K48PuxhvZMqoVQwuyaR1JPP2BDXYjCJHX5n85aQUd5pQvv6RPCk6Z5BoPyU",
  "key13": "2zub92cusu8x3VsR9V4P5UL45DFuHd7a3RLAZatyJZDe9M3g7XiPj55i2nbFnq5BtuGcJnDFibh6RyNXvNx5tFmp",
  "key14": "2K2Ltbmv1aRsSL7e7WYv7dRBjn4akeusXmhSyPyiHGXv23SwK2xxb6GjnPY3H5GheNpSGSC5m9oRD5SysSGvxNUX",
  "key15": "4zSKjzx5UyxhwmjHXvpYn7jo7x8rH1jP1KK7qC2BSmqfMGzSHp8aQ1FJGUrQwWj8Gfr69VYqAWsHC44uY7FxiXBo",
  "key16": "34zJWvDiGHhu1wbPu5JexMqEtAPFdXxs8ig1jmU6FndRpX7m3XVDPGjHr8DeZ46f2Zkf4BaJXYAMEKnH3bdeB8ds",
  "key17": "KJDuoBMytQRZi1TuDhrUTUFawt5jNL13h7GZwBNaCPUZinVjU4n7zn7AfnTeCZvYcETF9uw8MXHxCXF2nPhiSqj",
  "key18": "4ayZKSUWPxez98n2QeqnTcYzr7xHK3Q8U6pHYRjNhD4PRhQQ4n4Do6qZyeaSzEvwBcwuCyydmk8s1upXKSr97jDX",
  "key19": "6ZvhkDUsPk8ehuY9CfJiGGc28Qew61M1VFHbPhi7fkxb639Zx6Giy3S4miP2YCd35hqAcehMUCQQDrZevoRCXEW",
  "key20": "GYKhi9P6fu99GpEnXWdEVBjEDjfmG6WAm7MNbhtL4FjhTjVEMCy5sosWGXzSJU7CnygguCYRtVc4cw4EBai67Zq",
  "key21": "3xkApghhBkHChk8oSVv9Cf2Zm6e5RHaMGjjhq19MAdNE28mJL18xVSfuKMcVb4oeYS8Fj581GcbDXpJwQVccetKh",
  "key22": "5rdVP55x3GS1T1JWbJdjvmcEHPtP4poArw7nuqYyiXvhVMp2AVWFuv9bKEQmKEADVFR7mgpuyWmxPhH1BGDh4hJ4",
  "key23": "4QA6TXu78SAmZRFk2cJQS7zdEx29pCdWngmchBYwt2wfgNDFrgBxe9LqZvV1BB6PpSty17RM55ZdByWyuh3xszUR",
  "key24": "5rgD8p5Ecna5untZixMq5JsPn5mGLuVhcLPP2Z89JHmHPxu3yv8DZwdkNrWVScpisKoN2AqSzJ737Jh6V9wnHnwc",
  "key25": "3qudrFHhTsivkqDLTuAsVfZpwJ2q8a94UgkyzoceiuSPfRNHLU9w6nEFScCzMAGah9J2ZNF8wftihPQPDkLJ6gJq",
  "key26": "vh8RwkxAU3PFgh3zZyCFsiQtNoVV41nJNgc7EooPqY9y7U6XtFdj7CcFjUXWUaSkApDqSJammEVJvmy8XEFBni7",
  "key27": "4VS3ZyYyXgJpHCDPodQHMdinJGdk9FWmd7zAx7dPvVs28W7WpkcyKakzMFbxH6gMMnHP5X7YBQt6EBWyLepDQA1Q",
  "key28": "3mBSWoVD9Qc8Uhfsgex7JhQL5csCp6QJMSTJHdcBuF42AXPj5U73kogBCviBYUYgwur9RqjUNrk9b9qFndTzAdLc",
  "key29": "3zXGLUQbqwutTXAHRQFuUUwKRwzLcrhuqAzr1tdzkBi5rEJPQZkJvcjMHod2SL2qJCJTb8EpH5sjbhEwuepRj2Do",
  "key30": "iKiQLeTwThQKffMCFdqrnhXJZKi5V9MVLTX7gPVELKGxh41SpwgbptaBtwNGPHtLWbu68azZXRzRZE1XS85yWwA",
  "key31": "cGqo55pqfLJH6KCVikpwdJ1yWDzyEcYf3K6Q9HV5qHcB2uhrKKtEN7xDtsj9SizFLZ4C2hejdqiA4rFzw9X1GxT",
  "key32": "uFF7p8kpk52nepL3DemcqaxJCaEmzCCcqT1S399D7WxkCnSzFhPQH7AECyDcri3FTeeAnaUZZEX7YbfWY9xCJGu",
  "key33": "yCTP4jPb3ceXX6HByke5Q8hRvh96NCVyR3yBCbq5UmJHXcsieVLfY47MpgYFoV2hDYE77qcTBme9w7cpQR4tHKZ",
  "key34": "42YCsVawM9B7r1LcPdKrUb4ZeJxpMa4duxwVHCSkAU4fDsSJZpvRssznoHQeb2TKtscrPkwGjyo7vJyf78sgp8h2",
  "key35": "4RXvDnzL46hRs7GTGY5T4babV9YjZj61XUaQtKgaZ7o3sAmpXaCPgL2WDFLqPA9D44UceWofuDCvufnXmgATBr3D",
  "key36": "2LijUamzibhMdWYYsEF7M3hQwMKrczcEZsDFvqJAKKaX5KXbWaRwhBybxFYvvxpQYWokvaFoUsoHXyRV1qSG5t7g",
  "key37": "31F6u8GRnt9RAn3JQr8gprbenCQrLtX1QRGJZttxvAHnguSoM3BWLSDo8u55F4UHhMWFTSPTBDN8fwFnWKzV9px",
  "key38": "stDeHSrMiUth1m61iG8snGE5qCzdurfHZum1fY9Vc849xgGWVt1gST1iH5D12To7k1AeCSkiRivzmQ6YA578djm",
  "key39": "51iuhAG6zVgEBQHJBBtNAnFoJ2EWmVT38jzEGphxryz5SpkUzXJHDSdGLGDo4SaBZSNKLKsxERckUDL6Vnwn1M4N",
  "key40": "24ScjB3BQTyM6LhP9xaKE4DfxvHH3vH81GqX7MULNZ5pbuGAvsVd8Y9nHdkprRhhZXGhzUfJAx7271LJg9pnWZMS",
  "key41": "2bXEKdsQPs6VPeWx84Rm7ZWMV2j4rJQFuecGVxsCPvr5pXMLLG9DFjj9gfmaatKTyQ8zaGRMinJGfZsqcFAYsYUt",
  "key42": "2mffNUXbm7K3QFi25ssdvH4k8584ovwKQwnTafX3yzjAju4d36q97UA2BvZ53dunSi1iT1JWVEEAL1sYx9wVnNrV",
  "key43": "5UdYynsdXCtXJMGcsQKC2uv1YLHDxYxKsB5m94N8VKTMSLiHXaVWSef3a77S6QhoTn6273Y6RaaFqMLT5N8hkuCz",
  "key44": "3tCzWTnHA8GZW3dpHJhkMjj7ccM9bAEP6A69kDydJ24e2EBKGBtyZP2UqUcWE5pz4zNsuFidnaDyP7Xi1K8m5PxH",
  "key45": "EMGVeHiHCzTrtcskmaEvBs7S3tt5PY37nJf3p74zqHXC41hS6jvFaAxZA5PrZWxAfDTNDZJAnhEJ9fdbYor3VXq",
  "key46": "hTfrfrWi6gVNCQi4iyVUVbDdNKM6bkh4FfSAC7QjyJsnuNx7vXP6vjrrMs7iRgNMNEQnYAzsspj1wfBuTFvEVm9",
  "key47": "ZLanucYb9Nh61fWdNfKzg8VWPKuMJUCpzHtSkcfk1kK5Nehxxgowu51gfxLVCuj4i33FvHYu7BXFwtEs5ErvJ1T",
  "key48": "2XQMvUkLoqq6vuAQYSpZLoA2Ggr859yVAqGqR9B65UKWBQYQYB1dLHpmqR8oBGtMCLA7YjRnzv3VrmNxwCvSR43S"
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
