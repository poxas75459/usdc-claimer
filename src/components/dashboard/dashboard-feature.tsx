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
    "8BcCwpSKQehpkzNQ83JKKtSqiip1MLjdZ9sSyiJpiDFzv5qDCKeMZWrugT8jkFvkKqfjQTiTBUVb7L8Kms3iUVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikomNjHATdeYu52sGSm2PLLt7JWim6b7nKL6gJY94UqzvWuhcdP2Wu74ATNEkZPTApbwAKcTA9Q7nXhpQUAgqCj",
  "key1": "4bKhZzLB1yNU8FHYw6p6p5bpTUyU4Na8htPSEiwqspFt6YzzN4GbzbvLvbXEGK9R2tK8992jEBb2g89YFo22EPVa",
  "key2": "53WvqxJYcxGjmvMEqyuBfrbyuX4mJsDMwvWYmS67SFkNz98BQEvYcExBL7oXZZTZAsaDa1hA2uvkGfmehyPip3R4",
  "key3": "2UVjQgbEjWsRY79cgEwjvG2ZeQ1QUEZc3WX5vED98WiVVwi95bN65HbmseXtesjaVSK2KUCAor2gaSihGUBrP9r5",
  "key4": "5FQfkVRavuvoFL2KiEePccPtBdEMu5VhWPtF7nv49PuNC7FLxYEe3fmWfBbnz55h4fk6p47xFfneRwe7hnjLDecv",
  "key5": "3X2JE3zaeRCfWxJAbaWwGJsy3HRm4hq4yPfuEdmYYNaRYH1DMADDSjd5D4vNFrX6oRYnr22RzSFxowKbXx3ETrNa",
  "key6": "5TPv8RUyEJqjqr85zBtqRftdjaWcoMURtobF6dcXH6KqiET1cZqqUkt8w8Yzjwj61HTpERhQ4TzgofrRcSeD1MCQ",
  "key7": "2As3MPVoLy67wtYSchVG8U77RgAKxWxPEq4XZXAgTV4WMhn78FcEXMC5TmHDdhHYCDACh481QVvN94iKbmLH9fJQ",
  "key8": "2N46a2KnibFALXAhaXAyoCmQsaZNDFMuDvrUwGAvUaAkyQNaADqi5ahWA6zBwusDmQtsFCVeokqQ8vQbwQ9A9XK7",
  "key9": "hUWmTKKXPLnndMZshEYx1tf3hiG5WPJmWjKZzP4DBz1R3H3dpeRqL7JzHRmP7yoNp326WCjGjKNckruSW9TKeNK",
  "key10": "53nFV2dL99RUjAFiVg4j7kQp2gQ9xDz4Ghre47oopWDKvCgzs92tu73625p9EZCBcrybwqnLLR1rxB2pRkj5BUqQ",
  "key11": "LAFNwR35vdBK59EV6V1s65pW9omYLNMJJkgqCuvkmgoT95Ev2FnjvnhEzWkMVutNeMr8EmdwQssGXBb5XDB8CST",
  "key12": "CLhAkotE8iBCmbBsvVCESukvYAmVh7pCjXBrcWEnJQEtL86R71D69HwXFqTLTrks8HST7VFrApHz9wNCdZ6YrRZ",
  "key13": "5hVdkjvpQjwMywH3DZ9WS9LVx1VR9FL1kYG36vdm97ypPmhnmRDRrWM3XoK6q5juTZhKopLJ4HJ2ixRCNGAVxS5x",
  "key14": "67PCcPrS579yQBFyUuzVMmXU1pn54TLwBq6hRZCZqJ97x7seSvw7dZj8HtKnmtxMzYnyZ7bfpRNcXgPMVRgveFhw",
  "key15": "4rVjsXERemywZxnspshJqp2nxmSV4wTtRVcwo7MRiBzoxccZtWirVfAahh3ysxFdFseNyyyi8EPP1RVvt7LjoJb6",
  "key16": "4rfoQKWaMrowiN66XyCgjeuiVeX9bdEsvD8i9S4NJCmkxsW1Tbzkg5rrd7DVu5Yd6Ukzu3D8afcLz5mqELzoUq4d",
  "key17": "28M8SaxNSZJGiHeBYxwMi8zRAYEvrmVZ7UPFgUaFHUrJbejM3Ug9VchVHvQaBDrq9wxdk5qhe74kGHcDbJehfK4T",
  "key18": "34F26gXHHN5DBRYKmLpn59DBjPP5UinX8Bn7akgzuErh5FYbdSNYDMs87KFmWiFj3sDHZZyrWBSBPnPqAHT3xm1r",
  "key19": "2pMpTZYZdbpihfKMD6qEqzLf6mHGQfh6D5PGzm5MnrfjCeZCJGbGqd4BiesXbSbRe2cMo4MdCwsFyK7U7UpmUxF3",
  "key20": "4qz519WsJe2uTAGTz3gfYg4vRZumE4BytTs4Pqh1k6FDZT4tAhHt9Kyep1tDZGGJ2ucJ8HgRnCRKVkKYtKbswqFA",
  "key21": "5ryJeJHoQRSFdpidJCJKmgSphWazDgw5c7yXn6BhZzD2mfTgBBk6ypQzV7Zf3kuXnRfdDbak7feDXUKLcFrXys97",
  "key22": "22wsqnjZGg1pfBDftsjDTXbw4LpE5WnWEV1TJaUYLq7twBcyYUJBJp6BG6WpC8zmvFmvFdDcYZJyyteidBGzyCkU",
  "key23": "5NEiUHFsd5F7bX1USWXxpBybdwXRj9qkwmM456uCuRYfvgFgTX3ktDzBCVMPwEtMPCpBqVA1q5gjTdicG8KeUZQW",
  "key24": "3LuUAHAF6Q77ixw6qZ38tVFZGidJmKdT7zrLaQxATPPNH9LHks8ymdVpuaK8xkQMdAmCU5GJswfLKAzqwizRP2r5",
  "key25": "2e8GLk9naegbjHLGq4SiWNYYH9CkebDq6STjg9Z3r9GAstwUsdCZM9eCWa7Geg2AEF4JurhqtF7KkC3W7A9kWHxd",
  "key26": "5wjyTiByBAvMdXsYX8Z2gyP9Gw32C3VXjS8UdA3VdAVxCXxsBxy1qag8FgT3Zn3eN2sfP1cwz4MePAMcgDiUWj73",
  "key27": "TVxLsH8ckwMmPfL4EgeVwjV7diyYy591fqJsux6qeFdvWmEWvGPxTauWSMuPr62tfvGCNZcZUpZy8ned68yqomA",
  "key28": "5KDBMkDDC27J4NLgeJsQ1AwTBPceJ3Y4uKAYEguZGRc21KHz8jybuZSbYW1ZZWrtkAYbghku77zp4PbXVEH8F9f9",
  "key29": "2kXW6u7nXvsNjj7jTSuYZyqNdCLvGbLyBsBAe8Eay8Ntc1DMgCZkNcx1p7CrWTKNCif4y2MfdV8LwKvBKFfis4XN",
  "key30": "5KWw6BA78r3JRZyv7BD99DtpA83RLaL7es3WqcvSaUUEhfXLX66DPx1BiHaXRaRbkZ1arYJ43vVgYskZev9uZf1o",
  "key31": "TfTQLWGevF566GKhn8TGGaR1QuMfwhh7MQKxLXAL82qGS9DAFQ6TGX5eABSJRDFRgdrGYKy9fZazXEJGzWvwdY1",
  "key32": "4Sn1RQM5StqhLBfRAbLwD7ne5r4YuTj4BSwqeHjhtrQdeTrbDN6T96yiqDmwL6StraCvW46vxBZTQbZR9Hag5DoJ",
  "key33": "5Hc6UQ9FtRfFfHgTPvJDfPuK87TeUfaZGSBKvMGHccDoR2zH1jkk7rC5u5Wis9XqU8pFN37CvcdSHkUvrE1sqAX1",
  "key34": "SvaBUB6cAaQyfGx59u71M32YarUaCmgnWvF26GvYcbiRstowCX1kMRHANWgNomQmUezPez5ZztnQXYWZWt6UesE",
  "key35": "3Csuk4VfL8K8fbtsytxwqY2UQyNCiVqCT782DgxCDMdETwWwhtVfqteNSvi2rUgPH8cnfvqGfrC43PswVDXXTVkb"
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
