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
    "4fzNxYitTRpTipQJpY4WSMw5JsWkkpPz3uTfhwyHCPK7EHAYLVeengYqJMxcvsNp2Xh71Y89RRZSgkQeeK1bEjAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y3GtXnjzUZrDHZ1RYDNNFgHssoEGqGQTRdGfx8bhRmmGDt4UgzyTAFi8gAu5nhJRrpFzYMdRidEZwLCaY9p5QTd",
  "key1": "3dMwFdfrcmvaLdJGLpY8EG2QoebkGbnKgNUcC8jQjVHq4zEhdZkJFFtAik5W4JsDDh1qDKedyvbmWjMJrdooErMa",
  "key2": "2S5qwKRWji6Ya6UFH6tRRkMxZWLc7WXxEPtwHwdRgHdwDVP4FLW2VhHjmDoRJtQ3TAiuCM3WkGS6mmpu46YCsdhd",
  "key3": "2zRdTafQsu2sAcAaQprDoE5MuS4kPapsGwtPbt6QDbSdBS3SX7UDmvs5yvGYCQLwo2wkZdtbQuEwfTPgYJ6mBpZF",
  "key4": "5N5FLPFhTvGvmG3hu4DdVbzkuvddmUTQqRTnhqtj8iR67H8pHdyfLE4cWbprbuXFJZqqvY3QNQKeaHXgrSsrvPXf",
  "key5": "261ZTvzYmwS1AGoEov2AHvodifEzN3rb1QoHUKwEWBhiT5TfmRssiD62jh31eCJyMmaKGNojoFCJpFiCUapZH8f1",
  "key6": "66hDNtZgV2jRdt99HJH65dKQ1Bg1y6zyoNuWbdQG75jGY7Q6ivpK3jQZEBRoY6e3UaNFfMCpQTqC16oUy7jDjVP",
  "key7": "2zfmXtfxWuXD4aHem5pXVZfEvX1C8QNFYeQsMkejZTXtKJBedjL3cF47pe6jLQ8DaZZrd3A85GacV2DTjdaku33H",
  "key8": "5VhdZYeeG9dm13Z2vYSmVB16VP4PQGN1sbmThJcUh53ZttM1y3H8PdTVDHiMhGDaQVXPCutbZoybGcCPjxa5T3YE",
  "key9": "4AahrbCWJHa6Li9wrbLM6oX2q1PCsdr9TpuN9p8pPo85nFRDmXJhbmrpfXqmduqfM51pVrPcJ1y87gh2rkz4FpuW",
  "key10": "5hQLnteasWAUFAnthieFYLLNd6GPE4ZjcEGTJs97KE26oQxUhQ6PoBV7CCiZU7RYnjUpo8vdVNb4XqsfnABnzpw9",
  "key11": "22PnsMg6QsrRLQSwUEoSvYV9Qa3apppTVfqowCyZTqUsHg1RJC1x1DEL67B7Bear1Y5cCCRi3NuMhQCr2pXcz1Wz",
  "key12": "3C1ToyVDLDhSkngJxJqY4rmhx5vZN48CUXmNCSciA1yfgN9v2yFgbaVmDVkBrpUxy53T58kTU2T6SgB88KDff234",
  "key13": "cbSAPd8aN6bLreSBPGSYZygJpRfKzNez6xUSMz12f1enUb6sed9Lazk3xxNaAPLk7UuuLh6BFR9By2nNESnLUV1",
  "key14": "4C5S3seyroeLGNZ6GQ2nLHoHHKne5QLwnkaiaqYW2QLMWWfvuGCRenGyGRmBSYScdjJmAxsFyf1qMNd1ss5DTYhn",
  "key15": "FQPNUG2ueCdp6aV6m4yKhw62SB2uQekYCAjfaf7iei7dcs74RMZzAwLnor4DKf68KsPLJoA9TUjW5SKHidqxnPA",
  "key16": "2dWEZyhpC1FggMFrAaXbo7YGmYupGRfPTy9NbAVo27ALCxDDquGYi2AY3yWPQBnHCiJSw9zhaajrhAygMjfay2B7",
  "key17": "dyMoWviNbgrBk9CjbQ6VVNPjynXfYGK7kwHQBie1Zc3WWtGr4pmxxCP6KsDrZAn1DXpkpwmMqynJbZEztLFgaX8",
  "key18": "3MJcDSK2jcibfdMfE2pnKCRvx2LpvK4YspbxQnj5QgL2ceDbt7k4xNo4naZEJGrgKzwu1jEn25jRZfpETZ84gGWh",
  "key19": "5TwsZ5oEY8XdqMQ5zwXLyA7Hprrc9AAPnaywt1WegUZZr46prRYX1DXtZyaQQUth6G4fEd8v2BSexhwk6Suz1CAU",
  "key20": "3cMb8YdooBWYJY4pP7iFKrer9UN9ARDZXaFb1q66mQd61xic9toKJyd7erVqWwrC678Mz9oSgV9yJYEc5jAWFfww",
  "key21": "5ZbNJ3x82bps77xpk4gTc4aA2S37T4Fezr8R1m9h3qzWvHLyMhsYAEsbJR4bD3eK7aDsFBvWxt3zfVdAisti4YQY",
  "key22": "3Zj9A9VW3xBb7yBLVt5NKCmMH1UGHCoUo5mRvJJf5ZuaFjTQd5Eby7rh44LtsDEwvZypPTumSAPSG2VUnQnvV3XV",
  "key23": "an4Ky31WTZv1enwiyZVEADk45DnZoPzZGsR3CVt5ZvZ4oNrmwzqjov3WoB4j51XBf8zguHA1s7dpfKtSiSijmJh",
  "key24": "3Y45cd3Y9oT6xxhNyyDxV6hH5D3DxaAA3a1uN3A6nM88XBzhn6vjFmcoKCHs4mjn3t2QpwCRLXmr3ercZUdVKM3Y",
  "key25": "5maubJPjnhNnojy4zLQnLRMjSKHPKmJFNx53fjUNSTxQQnG6LGV8s62zgwMHWHFzYFCMCi6Kv7AEYE3UucYBQjZD",
  "key26": "424JmjXJKGjiXscucbGbJphRp5HSZdcDsiAVdYgRsviM2itZD6TzRdz2xPe4ybmaYuVdREbJZG12xWor48BMMA3k",
  "key27": "DoDixYyABdt4p59zmw5u7vpM2B7iBbHz1iQBsh1U3Giq9ryKYkcdXcmK6hyBgaWLsTVCr8PruE5HYDA2uBaBDcv",
  "key28": "2Mu92wUu3M67s1moqFP3rCLfr87m8VLj1ZG7qeSKnJkpWXnhiPiuMtz6Fbhfqp3gfwudAivsKjNDgsSuT7tmMJ1Q",
  "key29": "3zuJMvkc9nz34QtqsWNasFHHXF38xKUpdKKRjLaRQDt1Ww2vZF9BcWdYRsqyNmtKZoBTNnkZ3cqRTjjF9mf7N692",
  "key30": "5P155Yfrj2eGweTmT7ZsA7ReoVqvVyYnZr7p7YTihNDe9QEwU57M5x5oU13T3mjg5eUDVoeJ4oNhBsBbHbLNFcdB",
  "key31": "2mJJwdNdTmArPfrcVvsXC9hH5mJ31jbKwwBvNnoz5QGXPkbn3yEizmLPyhwm1zdAsAzDYAEkqXn1Q5msVubhau2z",
  "key32": "Wrdd9Bo2LdQoUxV2xshYSbuc9y9GjELGv9f7TLNHxGVbrMn44BkpegLRkU8FGGquxoHxuP4S9bmM6oj9dzAMfV5",
  "key33": "UU4iRbFb2iirg7u3X4ryPNwomWG1iRvi8ziPySAbChQRXnqED8r1pRTeGvUTEJ74aKti5X6nZtjqPLuWQmJB7Qk",
  "key34": "3hpeXZ53CvBSaX8euESKb2L63YkeaS998ZES6iihRtCSAfDA7eBFYdPY4xM8jkDa5Ag7CcLqHCAxSdr727tRxbbc",
  "key35": "4YRy5eysLKCmTw1QDT8tfsZQ5hUqDDv8okeay31jZvUSxMx9cueV7GKeCyxvFqfnAu3dd9QReSqydgTwbPtnk4mQ",
  "key36": "KxEhEaBShDeTQQfTG4itkRv5faRzRV9K8ou6NcNXmsBPEfhy7NpEr8VVZ4fRhL9JaiVZVRvVAYXCUeFDFafwaBB",
  "key37": "31D8aN7erx1myxp9tVdeiA1DCcUkx9EG3KhsSQ9vAiYZbJRKSUhebKLhVES5u455hGDi3zt6oEWxivbcWWV4tZ1r"
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
