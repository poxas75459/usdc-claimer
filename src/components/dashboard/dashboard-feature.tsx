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
    "41cBQdGerQBoY3ha928mjzkQSb1hkA2pC2jghYcaKpuDeSdft8TFHJfy6SNUYAD8Ec5Q4i6vpDkGj9zH3BjpB2Fc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bm1WZyqkDEWjs8venFSxCsxBuPPnkVKvzdccrECkhNNrEAVeg6bBYZRG9WAYHKW5JHUvKbaZncSQ7AgrYg28K8j",
  "key1": "57H2spooFLnhuqgLQ6R5rHmKkKh1DkbxwUok9RsHUhN12AjhQS5Fd4bKz9kGjkiWVuVWpSv62NSfPumfuoyVc3Kd",
  "key2": "eqmP4xquTvDh37ZsHc33GK8pt4VbfJy7kWFGHmjhLou7x3f1xjet3Xvry84MCWFF8TjZxy3ewXQ3ruav7t9skae",
  "key3": "5Bt9U6ZDjPVpHK1FZQa79jYZwPVYzu8W7rSurrbcgdYtTQotdBw83iWFzgwAKzNA3rxNgxSTjQB6t1w4GFcR5taz",
  "key4": "bbofY1746FKVJXhYoemNJeEsR9rPbQJStzsZXvZ5VmP4ifWvj5ryHy8X9YkKe4PxPe2tbmJnHyCvZUYXg3wc2pH",
  "key5": "3UmUqGXPxgDnjJgm6Lwaq6g5aLY2LF4itzQEy3LraguF3WUKXfXyCJKbb4YfhWaML3AnX28XdQygaXQx58fesBqe",
  "key6": "3N41eDD4J6daUbh2i9aaTe2c4okEvyeVdq4Lc9DcJu5zwZMjLtxLAZUVxRcEUv5voFgM7Db259QvyLyz6HU18QvH",
  "key7": "51J2gYNdeXkPkxkZQ7u1WsjUEAVsMZ2SeRN16T5ymJbcBGkuHBg7NGPVs6CYqgsACCtWHk6EFCgkDe73GTK7b2AL",
  "key8": "5Kp4Wx2T91yT96Jr3UFmnDp1FLhvUVKEg44GoHVPGp1jUXNLatpi6qSW9BFHhjEXTbobVTuJsRwJW4xVBDVmKtZY",
  "key9": "5EefWUEujkMY8tvK2vVeBuYC4reLwYyRr4QF4r6FH4GvuXymXR9Dx7A8BdaRNsZDsgxmZhtotPmmKUMbTwYoa9HJ",
  "key10": "4KnzbaFJTcXGX5YU1mnzbnbgpojCmDZJLwT1BgX5kqPLBLQWru2Ygxq2nBU1BLSTaUgZaWp7gKuCjQ3uCErdPRsL",
  "key11": "5yL1Z2WVYgxfUCjQiDLFxJeBaC17EDKz5s1LgEseENJqqP5pbnaLFPK2L8kygjdYtAb439NSseAB2mEA9MdhX5du",
  "key12": "2mFxi6fgSRhKWvJWU5cE7qHrQJv2fqtxedAx66Y3AreVD5a8gD2A41Bi1utjKxCzvsD4nVdLhwZw8npuainRWmRh",
  "key13": "5enYmJByNSo953qEvfLUHqAu12Nie8pdzBcyy7aVMjPdiuMJNTuQD4YErdmwy4xk57V4HSm2rWFLrfuLKgARkzTG",
  "key14": "2LG1oHk975ByzjPNNmsbWTzydVgRtdKohgsxDPX8aP4j2uWDdzPDPEXPVx6tPuYaeioVJ6itocPrkppX9Qm2KikY",
  "key15": "2qM7M15WSGW1UpDCzqc9WUP7Vd7HeXZeatsV4gRVfpgLzSptd6cR9Q7Yrw8t6ThjkfySoB16QNnHaYECq9WGA47v",
  "key16": "4DrN6uVf1YfWat7jzuMAgTqW1MDjsZRDW6XpYbKwPzNSnULsvApzH7XEbzjQBAx2CK6mdiL2cYUQgAv3RDzGbSN5",
  "key17": "b3t7rVUBB2cSdTMBAUFu9sLYR4iEWHGepULAmfjdHBdybQy1TDVqncrWmNAUCEsRnUprzY1NDuzWKT1x1Fv1H1K",
  "key18": "2Js5zzRMpF7ZdS9MGFXmc9rw349nAU6RgbRb3eejAGrJUKF6qGVsA1SWkREesJMC9B6Py43f1TycKxry8NGZ9izw",
  "key19": "sVWFjFu8xUkw6MLfFCwTmDKSWS3djCqGuk14Z4zgKtCxG6qLxcZGo3BSPieRoBMJG9ZbryhuQWgNcs5bx9WK7f9",
  "key20": "4qsV2cKrkqddShcAMfEbGghrui2HT51ioZp12Y23Msr2PCNwX4d3xedoUtFnCoSHjZ1VY197i9F97mPtf69A7K1D",
  "key21": "4LUWnmeLVdJZhzvUUT5RdF7GXYFpwEHwAAQsjs4Dntkq89XJ3iQvzazc84tMWXyfneDVGqmQLrfL27R1C3U8xFH",
  "key22": "5daMTPZoaA6d5LoAU4bBmdmNa3B4PrqhWMzYV3KSERx4LPKXDLXtvD9c1fMwJ3XAr84RvhUHGGin7tDfANk7nAZF",
  "key23": "9WvKBhshxJmn9bioTP9PBREvndy6enrYksqMHCNzN2kuA8cYxus1quKjV9saAFwx4wbWdpAMkRvzQXSU2wH4HyY",
  "key24": "25P8zNVj91skzDQs6vegf1o7JHQeYG1Axk6KPmpCvDRjWudwXQMVbHz1ixHKoFevQy591noWc5GY9q5hfZWV1ixf",
  "key25": "4JH5K7F7ggPedPCTMRU6HWJh2ceekFfYZ1cDEyGy1VUv7sVg7qHRyuyuqpbsGxxrpZvDsELTVHSotoonvrts3Adr",
  "key26": "9mjudyb4GTN48eXxTC1hfNZARXowGbEWYMfgRXDmavx7zpgjx55Dw1Dcz1YCALSDR3hCZM7B4ox4tZYTJ8pYGhz",
  "key27": "5L6mrSFige4jG6F1LwTqTco4kLUAAhUpdNoy3UMs3Nqy18N2APFbPz1PjtMSV2LL61Cjk8buLdAG5XBzd2dXnXGP",
  "key28": "4JHgiFo3HwcDgXYAZD9DqFEopkqPdcANp72UFbfBuMZyfNQM9KDJV2ftPU2zV9m5nPL1j3Lm7TUregms2hz2vZNQ",
  "key29": "3ZEECPNVEvifzM9rCsBshidPmGDpAaRLS4TJH1qxh2mPhU2FQQMZ7ZimLhzEr7i7iLNvH4K2Xj1KrWiveJu3K7Uv",
  "key30": "N9hRDqmwtLqyyYR4TUXo7GUfWJpAuAs5GvDy7m1U1VX4P84jkXT3X3jXZK6e8A19r8ReNTTPaPPQoGb2etHuRFT",
  "key31": "ndqcqZS9sDE17YPuJiyCfG7r6kNmjyk3Lx6zK19ZrmWJ1X3HFx6Phsrof1hvtecDb4Jn4xcxE7dCZVTovBvfG45",
  "key32": "3WQAEzu62HiHaFAUjUZ8aafnbBsWpSL3kZxX4kyxmeK4x4iuA2ydEJ1FcqF4xqN8S7nbCpUnRYu1Y6EtZQigJkgt",
  "key33": "JTocjXBcTKFKJrh2UQAHdo9eCpxHdRQphyEreUVJJGvVJVREHbU8Qqp8LBTfh1uQZEFN3iVjNqMGKsJqFZBKyhE",
  "key34": "4BiEf5UGyXpNo8DDowRR7eFZDVQ52HDLkVGbewHmsf8zbDA8LQ5uFgcgfLhcbMMvSrt774G7UJ4y8rhbaMm1rdQx",
  "key35": "3xEGGzE4UesGKd8WU1iYMSnjnhjLTLbi6gwkgB7T64gLbpYoHWz1Bpk1z5CTRBjciTFfU2jm39urrVqmf7x4LEYk",
  "key36": "4BPXYfjEAHE88AWpNhbgq5Gur7SEm1JFVBkCX5JtjTBa4XukF1qmAU7sGTtWwkdsFiK3gD7reqZKNDqQkGGQVoyS",
  "key37": "3CtQaFLnhjjF4SvN7eZg4TWBG3RSszCtFNsZJzvh9fJCKz1MyMLDyM7ZSQE1h923HzfjNwZjSiTYrqtjUBe6vw1b",
  "key38": "3FJHygVKoJXByKkwTdDTaQz71LCKZMgwe2qPXtij49DsG8HL11MZskEks4mKy1X4rFSiDDjXZMLosCL4CX3dEGWK",
  "key39": "2dRUomYJxNk6hwqGjaLGTurU2G4r9XpuLZH5FVr5gauiHbGzNgPweDTs2KrG5n6GcJHemLppzYtuhpmFHEr2rgZ3",
  "key40": "5H7Ku1KqEiF9AWHE1KRgX2KY1F3yLDS9APGZQ7JkbXWSsw8nP8Gh69eHz8Q4gADAkwGG7n9uV1aDH79SB4CYZxDY"
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
