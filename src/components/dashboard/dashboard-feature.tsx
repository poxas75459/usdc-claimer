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
    "55aZ2VpMxuxv23QEKP7WpKvRPAz4UrZmSt9UuC1f2DViFfpN2HkEermfvzP4QAL7GuDWViatsvFbstkht8MpPg11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJ6iV9bmKFHJXVSXLaXpPgmodENN2D2DxC155CqRK3jBrkVDrvfshuyVoz8mccp17zTuptPAyAWrz5zAoCepH2x",
  "key1": "4d3ASCHorAVJTqaUXotfiY5JfAkXkjCoZ3QvR6HhM2vtHjBd7C4bzH299QXEWGpmq5m551swavb1ziQKPeQedaab",
  "key2": "4ATzHdmYGwxr7aonm9mJs2uca6USRMkbibzXTsxhf1wywdys4Rk7qbMMvE6YhwJ4HwCQwKJ2xSJyNyoy9fLKHmrt",
  "key3": "63SCcGzs2dMEnWPosVbBFcQShuauDKHtenMM82ahQV56Vd1t3ij8KpywXqTtHaVBDntc1twVT94hpjp6W7eLYfqf",
  "key4": "Y77Z8XivAVjCQS8jWf3gwcRLtRQSPtR8eqjTtXZDzD8h3E5AVALojpQ8JYvDsQQmh1UAspF2r32v3i154syj3xP",
  "key5": "5uxSkZwhwLszFRU6LehLT7vp3XvNta2nfnycsF1J7z6EGwiwwHejnzDX7SwiJRrYmFBJsY93oH9C9kNTpZhtYe8Q",
  "key6": "4oYbEk8cwZu6am3swqbks4iar39P8G7iexnZ4iyYZ7PXmNb5gys2Xxrh8cSLfjKv9UXW4QMjp5QWdWeUbJJFG3Q",
  "key7": "25FB41qUnJ3TWv76hPB7MTpZjYUk2YGoRSrUak1LPTMvM1P5JJrrNbVPPUDXbfws32eDU9VjaoF1uqRxwN8WEAnP",
  "key8": "2x6Vp9BqZDyPt8pmbYc9B7neTQzs98TkueVm1smfDpXihoZQJLv7dYpxubqQGNGgiTPakk8fH26kt77YQRya4Frm",
  "key9": "5YgUrhYfT8yj8YUXN7YAe64hB6BWit7zVBtGVGCxwVq62sqTkb58JDgbwmzuAHqCSBhyBkt5FFy8pk8U29WPQXm1",
  "key10": "yiY5BZM1kztfahTjvPpGPfQjFsCkbmXYXSHENGJbJx1Q4xJZw41VcYJsUCrdfEXSF4xPQq6TUdTUZXqaPVghvxu",
  "key11": "4cUZSLV9m4TFkXmrSGqiD7dwC9gFUHaacYXKp9SyhSBYsdvkPEmiUdudDGvhqtekBpat52SDhDgSHf6qcpJH8cv3",
  "key12": "5p8MRoyBS9LQzy8CeuGZxHDeyHBbFL8VWs9buNFuyoqvGmU8oEpXQHDjdtzcVP4uHkGbW3YXA1F1jmAmNNE5dK3A",
  "key13": "3WyoPnu2UeWysVsphJtojvqScHSwFDFq9kbHGj8Sh3RqXgSYrSbr7K9fsezNPp7RnsnauVDDZNpMdnMYs2nARzsu",
  "key14": "4PhtMK7w36hhXRTCQiv4qkFRtQse72z1KKNCgnmh5FTBTkWenis8A5LbjvBSBrc4bRN9ZxdYg3AFYkCAcHu9cuVi",
  "key15": "4yBDPHiAV2kuDhXQg2KjAQrtVR8Ktd1gpqqmRjppxmn1sCAU4tZwfhSrCp927EzpHdMYvLhqer6MLDvnQ75jFeCE",
  "key16": "Rt677N6acNPsoGBiANvNwQHqq53MwpMbVCn9q62TqoroMjkcBBbP2yvR9WeAkudUNPXzXcnBFFKCwcrZ1L5i3bL",
  "key17": "GBhufhPWucYHNq56w4WgCYX8SRzNQdekd126vTS9FcJDereKZwQZZNHxNV9UDULfGAneycPKweoPSxeTCaLV4YV",
  "key18": "3Yc5JtX5VKvMynHM6SHFYy8st2NEctwHKPedB8VTSrAFBXLgQrA98ekoBAGJNyCPMGKV3fNjvARx5dewbmiZ1F4d",
  "key19": "3TCYDSb2zPf69ZkdNxJYLAoCrXrtXa8twxj7Nwx6LfBEdhXkr3RiDfJXTfRNF7RQYqfFHW7R5mNffDweLP9VFrkT",
  "key20": "3An3eBvh3DgD4meyMUX99aN4LfFZ5UyQ1iBGhLvL7TvTGyLEYViXqkQhTrjNw7j2QjtQSzAhvDbwJjayLircHGGJ",
  "key21": "3wmoG1oBPom5LYbsBXjcVbW88Bs8BXXhFQ1VMQh4F3ffPaonxfmfuGYQ8PR4ne254n5HytbAdpvWYcMUPsmuurWM",
  "key22": "3Lp8eKPZttBgTGvJD6pK8qjLvxBxURUgK9yDEFNZt9aWv4KCPBVoeMZYKNSgJnRG6VwM9JRM6eCAKq5RRRLy7WdZ",
  "key23": "3KnQSXmCL9n2Tmkycw7e4WAsosxkmdjxNzBrybxWRBmXzj3KPMfRE9BLQFPccHWXfTt94idyULFZcEVQXnKQCWok",
  "key24": "53QYwyC2R3izqjHFDEGFirBiZV2rT2hsCn8aDekZ5WzoTfjfwE1LP8fTrXowuku4YUtMYoTJt5Re3YGv3xMJdp8L",
  "key25": "cBB6BTEo9Tz4nWQHXjsJxj7UFhJiX7n42WLdxowwZYwY1TY8Fz5cFo1bQb9eBScVakDvqsRzP4bSNHwKypoSahD",
  "key26": "5ktgzeGPMxYQ6H7q1Y4oVqAAMvCwmK2Cf4yine35oDuErjnpeJ8FtLYTcRGgRQG53suFVVWACY1HCWQV6jHWYBET",
  "key27": "5CQHn7UXpnq1PY3RQV9tNTmosGTwJYrX94wL2zFRzpQb6RZ5T1NjQnK1AVVcijqAasKjnoCLuS1UoewQLtRuGb43",
  "key28": "4ZZMSsVJmo1AMc2JeSjdgY4Y6nk4SCj4J352CP4YQBmYQE2fqevdZL8A2RUkB4MEMWUmgNE8faJZbgSFRPYzPVCf",
  "key29": "oWgdCfsfsrfBmMeyHaPFUG4RiKnJBfGNptsBehCt2wh2F3aB1ETw31TQgCFCuo746eP62Puk3zssvCuqbpiakof",
  "key30": "52QbuNy6tPwcSZY62W4UDQtKMhNNfkpHPGKLCmzzamd2guv1NkuWpPEodCAKXVKTaKj6vxQHaV4TKCBZJqZucPW9",
  "key31": "67FMUHCArvNPxum3jReC7S3aymAizLDKE3VqwX5vf5aZ1faeECcnGNQC3nqdzhyheFwSYNnhbuo8jRNSJeziSeTd",
  "key32": "4CYdyVTfkpTZdsMGtTEA8ooJXYenm9CGYarHLMPcS8HquLRX7HX5P6iTQSF7JzzZQ8KZiDvBCKbEzkSirvjZ14Tw",
  "key33": "2CEazGGTR4Kn9hArF5HjTgBcRZKCkVsYbRiNkmDzF1Kg2np7PugFEeaRkGEqY4c8vexNUELHJtp8RXzt4wsbuY8S",
  "key34": "3vGYa55wvZjB2tzUFVmwhUaaz3R6Ftnyye7gFgewFf9cWz1baKVxkoS7gqDBPrB28LSBgT4yfzCR68b3Y2S4uUu9",
  "key35": "3RYXXfNEzuDMjExXgU1i9W2sVoNXd99y1RZXfbNAmwM983gTxVcwHnGEGHTiJyu7tmRnKEQjhezRpEjWeTC4bD52",
  "key36": "WdNVKERUd6pNgoayCPZAzU9d7A9VFMjKDBxqBW91UJtNYEnLutwFZszRQt56Ry6yKqAc2y9S2tdWsk7XZfQ2CDD",
  "key37": "2oCLY59VV6gSARS48BKzmceKj8k7PoYnUR49aVfbtq1dufAHeMWT7Lj5LMwi2vse7cjVJYjNMt4TxJ1QLSe675kP",
  "key38": "52cvFrmFkuqBJveY78Cnwqo43PHkQxE1dv4qck84j2J3nGcVxpdGWRBND5YfP3oEywG2ppd2jzSb37cDdj7kTZBX",
  "key39": "4U9izX8rKbiMoYfmUFvHYNbzogpzcMyAKNNC9AKm8AeMnLTGfBGCSygxiYmRaXAXyBTyqBv8VpXEibKYH7yvMKaP"
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
