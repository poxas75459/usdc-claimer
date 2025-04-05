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
    "5QMUBVb5hRqSBZcY3tsNuebNxyfTHG65G8RqCQPjYKbgCQF8uC4kPM2Lryim9LQ3nJBugyV3cEZYiuhVwDNZbQKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tpq45GAfULN1o7t4X2yrSwZPkV166Js1S4fcAayPqg37HdVhEsXWRUur7KiT3xmCbomcoFpRht9wrf1ex3PiCqv",
  "key1": "3RgLxcVMK4EnsorMUUvRwyAW3YpC6mTff1mZ2B4GaWFsoPbms582FkBQQcJNJGDDJVBcvYHp4sE8VhTXmeKr2SAi",
  "key2": "3wJiLLq2MQheT8H9qUHtZ7rGf9vUEA3eTeA6V98piWgHZw5jse9AxYtaw5Jij5K8DwYtXrGNhbyLKrF6T6GFmqtJ",
  "key3": "3gjLCUqE3vxSQBhBxUdQDznfNzeWkgBeVdtbqpFh9NRbqTPSURz3wwk3q646px6AqpGbgeVC9i8UVDBe53YkdNNS",
  "key4": "NCdjK1h9T1CJWsmHWpCZkH66HMGMZJkhyuHmRy3iTeN1hDwEafeyURmh316nqi2AmiEpigFe8LUaWZtiFczLDFX",
  "key5": "VYy8ozwZGU7DBJtY39dpbKj6bjrAbJoxUuJi9iXo58D6Q5CZSCbS8zmc3Q2fWAso1oZMxoZfdP2mYaWiW9V8C6E",
  "key6": "5KiEJE6hpHKgQhywKEPumV59JUZpBGUfGGa5Ai1fv37M7bZio1FMFrfEWUY5JVAAsejdwgkcW4NsTdKMKCF1HzXz",
  "key7": "qtRC8fjhdFzjGc13QzuzRwYme3q2GYaXHdfrL89kvFA83MY9Ao1TdAXn5L3siwUwKdXRasJLcQyrsHu2cTkQdbm",
  "key8": "jhnXUq1HJ9EmCXfaDuqYihNySVK7PhujNsW78ggWMk4zrVDqVmXZN2tcuWf5KurAJ9yeZZHx4TmHB4moSSQq8wf",
  "key9": "2uBMSMcBiyqYSRzQkb5HLE1c8FkkLso2pbwLoxFg28VH4kRG7Fkk6giz8Q9mNs7rqx2mZ7bsLHvWaKmysLkxaZMk",
  "key10": "2MfTZQqPjdcGTK5GATdZ9uVCos2nDUedVgp58gm9zw796a4q1v8o6q78Y6Gb9oKzy3GAA35Kiica8187z6dbPTX9",
  "key11": "5i8tFLwTnw1pFWiVjw1TqGZLFUv9eec96YSnFKFeRHuczW17A1jrZvbnTUHVBzroNY4iegDJQk2gSmnGV8LXLaoW",
  "key12": "5SHvJKjRPWmSrptzcf43uudZoZW1AYnhXACELU4Nsy5hQBeGTLAMoo1QwhYP9n3pGRy7B7J4fZeJvCbbdk4Bwita",
  "key13": "3tcTFR2uCadcSFwi5yojWy72Mtdm9TT9H9rSxoYHxDEdNgNMj6gpHGwtfiJiPX8vkLRfXSkHGZbq7kfECVrmJ7nU",
  "key14": "512UzcDcduDQNJmgar9LbQbh1tfbp6eqdVqqWxSoaJ39mpdwU5awMLWuEFGX1qFyq9Uvx8TeF8Ns43Ck8nvfr4m4",
  "key15": "5zt2MmCWV3XYhZYCUD1baEw8NBnz8XqtskyS8sSwdboBmhZp3S2UirHDf82ktMFyp96mrwRb5L28FbjVEwS6fQxu",
  "key16": "2jrZ4bFH7gmSZgR42cit9PSjWab8eqfzfGSBq2CL8EABNhu1nU4zTu8xD4NsbPXnD8mcotF1tb9sjFAmTayH9WuH",
  "key17": "4ESXXHWbkXETzY4w42M1BGSragZp1DBPpYmAU4KecrQ9kbDr3NWA5F8nsrGLYS6QKAr7YxLpnDgEpd5JYfoExy5C",
  "key18": "5dNVLvU3ohweTXFmNTF7FUovtHaBcuUtTVcFU9xDDJMgVH6XEfUM4cUo1eby1oFxB9S1AnRms5DUezvHdCs8uC1c",
  "key19": "2fhar6kw38GSLw2KqmVWdKLkfuavzw5JajT71Lva8V5cABgX2DSj23dNfR9wxVhrWnLKEDyABu86knQ9QgnpaMZo",
  "key20": "3TgzbiTwGUxwbBNa5Pq7T4semaQB7idEhomrq8xE3ski5MKX4SewD1xQ8BxCRhwmL7gUSva1kYdWB2N1fNhgJZgw",
  "key21": "3hk1eyLcXoirQZBArYGai9E5dACqRBCDYvCxD2TgBcXwYufYJCvNuTxhYap9uR3E4sL8irfqLiKrypoEiKw2ffVY",
  "key22": "26WpjnEWWvVF7pWD3remTs8yTa1DsoLQ5Fb5MCoQwmN7RtbUgVRVueaLbUzbZ8dsDxoFuLDbaMxWF5i2URfTQvBi",
  "key23": "33oy61Mff55t38MCTudM9Ku4WBNDVLLAf9mDVVMsJoSUY3wSrgx2CT9o1zqhfwT3gDvtYrV2Z9vr9xQ8Uwk9eR9d",
  "key24": "4oPXwTzf5NZ2sZRNSojtAQtvq6Yzdd1Qdsyrd9G5YdLL3yH6EeNFxCeQeimA6E8CCyaMJxV3A4x8UP1252HuHvjy",
  "key25": "4eD73TCEs2byPgeBHPoXStxygnDMTZpfYqT7QVCePh32SSj3BNkpHGP5NhRAvDFSQLtE9RqCVFkkp2HRnyc3BtWD",
  "key26": "4r3BPh6HDAwadgzrtwBXVs2sZotwK6jvJJn41PFD5cDRCv1XQdrrndRmtWoy9EUPX2xzMYZqqLmoNxBasC99qfWn",
  "key27": "53tiVFuQHMc2E9gzZSnfS3DhyXpQ1KSf6DPrGcxF5vtNsABEhhNp8YUPCZ9ExRk5UzX3kp8WpN9prXMJgLWZzCZX",
  "key28": "4XKsdzCmeEXzjqvy6Rt8kf4z4j6Ko8HoWZ3cjXDQkUgEhacvmh5E8TCqwe9nnMk6vBc3CofBW1o34hvSs6F54KK2",
  "key29": "5VSDS2DkqiyCfB6Ry4rhMDtmLmvA7L8MtMxJBYBassJKtDpTsibgx4rYfqb9jNEKgw4fgSBi2FkRSziH1F7AM2hE",
  "key30": "3TmaDY9bDCm8bnZF2kmYrbKWj4MpnkTMNsKowGzrkfaGNVHtCcUqfcDTdfBF63w43ChiFA6zm5uBMGMbqazwGVon",
  "key31": "3DMxmEUrsaAcFGrpkTsXhcQBTSHAu2zP7YL444RP12eLqmfRkBfPV4NfcR7QutC961twCJENHv9faVGnj8dmmWXE",
  "key32": "4GosURCRZFBH9CMUx83XqyK8RUg6rgNNv5heffVTx7KuUxAsuBo4CfYLDov8bUjn4VopNAhLTiwdKeU7digQkucm",
  "key33": "E5sRwBJ9JpUh5VN8hHELfupARvTXJQFwN1Y8H67nniSuLeHL1ZwjUa24U3cRygoSbUYBT8RnbcXiVCY7bvp4iGN",
  "key34": "57AFHwXLqCAt1BAYfQje5zDKY9DfAqiwCXVP8iXVJHaSLsroV6w4ZLmujQyUS9qjqSCG1ryzEXhH3sxyYNpVTdVF",
  "key35": "5qRronHCdRjv46np6JyBgqEPVpfe1PFXVwb86QC46B5mGgtghuasmxeyS4pT2FtHigBAuhvE3XE2VsBa6r6ysbXY",
  "key36": "2vdTGBTEyuj9u5US2kaLxoc8vwrSBCdBYw41kDTUHVdeHezeVaUCvj6JPmHBjHE6VL7sUiK1vGAAMBGdvC5kpoFC",
  "key37": "565bVPaujYqW86oDcPL3tXLUppsWxA9svCAhNAkNaYj8W9vpV7RBCMrJ7hwfGza6KvVeAvqnsFu7wed3PzDLnded",
  "key38": "2zUaN5yosG8bnEuwcsDc91D1mEo6Tb765wPv46YkVFWmvnSRxqYWgo3HuQsb4vkXVsECxoe4P1AKrPZCiS5ejsL9",
  "key39": "ACNsZkUr2DhA1JhfWKMspLWLiBWzFhMwkoj887JUPEUeyMq11x9Ux1safFywi8bchV8QQhKc5LV5otmfiqoapG1",
  "key40": "2Tsq1iLetWyENai2ZnzJHintPYn9wNTb1EUttpsUqraW6FiUSbaarAJ1jzchYZBFSz9XjBtsBYaKp8CSmG6V8RUV",
  "key41": "3pjxVRiYD8PxUJcZ126beaiPyFavj2Qp2wiVNPD4ntL96fhgzNF5xXyZQSie6Ssx39hf1egHrNAirdTpRBtSajHd",
  "key42": "4GXdZEisutKCddAZXyNUEtdRsgz1qQrurABXxm9ME48SCtvSRVRFWKeFScibxy5PJPQd3GahVRCsVbQyaBRLQ84R",
  "key43": "573RKV26GMHiyNnQDZg7fanJxmU4RZUbgAfeQ3cZqAuu8UT2kKCo2AMUbrn9FoeWJ6EZbMvK4QCRrwa3WGqYJv16",
  "key44": "2S2MQj2e5QqCkuKVZooFpr2Ep3HuQuY7v153n7ETxDoAWEYoDpMwPahcfZiQD42WxjpF5UYh2rzAPh97cmjs9NMx",
  "key45": "28FjYSUAN9yscYffbmR5BmuEMtjz5CzRih5kcWfSgJzCn6BbzAAaqB924EhD9uywzFSPvtUkoouMvUtVbfoBshqu"
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
