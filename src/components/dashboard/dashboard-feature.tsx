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
    "2HAojjW3kDFsVXqPiJdG5anxZHtgB26KjP5NFv9w6cmgZtsu8iDmYERPavMzD97jow44vPk5AG8SAB71fgpYvw6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AVp52HF2S39j36EWgocjTmXMBEBZubrUGNK2bB443xQN9VjzYp2JmZcrJ8eCbutH3g6sPhhcEShCRCCCEyjZvjm",
  "key1": "5Vd9UZSr7EmHjrtoFE4vX2f5xgLCWJD3raaYenSJbsYzAaxubJDSdJYL7Wz4Rs9ZJv4THvoGpCE9stbXYnZnGpqs",
  "key2": "4uqx4mmQUn9hMPsgZ913jnR5nYDSLoPF3Rso3VmQogPvTLh2YRgakjb18tcbzGAL1oJ5RYqVd1bw9VtCutLVRRFn",
  "key3": "513Tnco91kM9N7kBtN1pMvw8Um5wbDPD66AGDCkBRehTeQPT4y6eG9YMUoeL5xack2e95MpWjzE14WuAkJJWDk5K",
  "key4": "keKqQVZuT5gmVj5ouDGigiu4yBS3cY5YPzPT71beJ281eVAuh8BFrc9k2MzbyLJcQ8QyJKVymcVoygFBvaEcFJo",
  "key5": "HU9DpyfW2VTiUEsNAhxLUFvG31723EsRzoCQs1MngDHS5Xw6B6HMSYzvRuSrA4Vqt3KBDLH4oMh7wUpkruE9bJS",
  "key6": "38rQwedGRm9MANeN1pnQAXK2a8EYawyjXodyetScYSk8pEVYgidDGNND22p1wMPXTqeAuZzifReaqMQaEgZaHDH8",
  "key7": "4v7TU2U5RouRQrkgHzs9E2DdFjPJaTnL5sAGGBtWSZbFpL1dKmTGa3tdRfe6eJwsSDvBrpsMtgDVPKaHFuUovVxV",
  "key8": "MvBjRsAhLUh587mpT98WfYxkUqFRNDWZ7KBwhK81JWxtgMnYQteq3uDLNZ3KjKpT7gnWijGw7UGc7TBAV5294Qy",
  "key9": "3ZwKSf9hWM5Dna1SuGhqMp4ZXVnwo3CAAvwMkbHaP1V4T7BVy92hxg9z5PvydNGGyP5CeBauY9c7JPvGqfF6puAJ",
  "key10": "2phg7wpUEpV22wLi9ZPeecJxDmL27fRSmwV3Q2J1SgrRZUNu1Qx5Miun6CL3LfTFr1kZFv7x7dwigmGoy34Mb891",
  "key11": "PRhBpDiRbqgtBuW33BPqGycbMnqeYKUWrehK3hT9RiyJuW1uJzNuuyqm2GxYXTEcDB7t3qW1t6q7LCtxMWv2EZo",
  "key12": "rcbCYbC8BvhFiTMM599diySQkNJCF21eBtZua7n87gYknr9c5yrMYBD6f5CREEumq1LA9pPxpRCJ36RxZu5UtCW",
  "key13": "1NzcCDMnbL1bkmWhFZHghkzzGFH89haGb5J2UiAVComc6rSUzfZga7SyZTQ5FGhj14JrNq9NVAtH6H9MbqSkKtV",
  "key14": "5wUvn2mCXosXtHV6H8bnmLhxYd7mz3ZNjwAzEh9h37iyNXQNCj2Yqj7My2nD7oTZHW8QeHwnsL74oRq1BcWH377p",
  "key15": "4whWeZNVXqEfFgNxWYVkxrjVfokFhJHqNZnxG1MxaEJvUucpn4SDFz6zYEor2e517v2iMPfBH5KzmcxMSZLuySGE",
  "key16": "3TfktacnWL2rh44tKqmsKrohEt4FGAw7Lm7gq5aUXKEqserq2bXBZi78NtyXc2fMSBshVdt9pHPpuEHjbLHbjEVe",
  "key17": "5A7ypv8E5AF4kdb72qCoXkL9ZyCXXDA6f1fuJovoRbR5F5hDHAr7r8awsL2XoVj9cmetHqh8zycZQqFjtajSJwn3",
  "key18": "5QpNA4bKE3Pk8zJyCFfjudXCvfoEHAqw25grveU142kqSqWVAyNQJYFEVTjfGpfpJp1NW4rjHZNRZRmJs1meR4z6",
  "key19": "2mH94ZsFcj2PHMzGLdPvXZivyG4b8rc6ttj2Uv23pm2UZ1Zi8txPMXsQA373zrEcinYd8KbepotkQ7tmHymFGKx1",
  "key20": "Sz5UFUG1wsq7XBxE3FBTLaPhx3Ub5RKCCs4R8YzsdrFZybZBrifWR7Wftt1oTv2nTJ4EcBo3vhAE11J15fGwqJA",
  "key21": "5dT2mVqkiLdutCBcQbwmg94RFUN215KsQdgrYuiyuWCo6zVYRCnkTpvnGe3ikjpVuMLA7UjwpVZsA8Y3pttzd6FZ",
  "key22": "4f1PLQjk1Gsmc6JMsCJehXjDhs2xJtFvjYRNJwVnnWBx919y9VqMd8fyH52wMRESYbVREzEwFFpVhYTyPSCHNP2n",
  "key23": "5fntJYx1ZkoBeioMyQKdLfMqHNKHBGySZWNswCn1teM4VmCmLdHmmPxCGDZFaB8FM8UrpEAkh392J17UQhP6gAEc",
  "key24": "3kDBArZXsTQXY6XQpfUqGnJ6468q9Yss5wiiW5CVG1EtzeCjvyQ4qvA6sJvYRKD7anzBSz8qC3MHCmCBxjPsmEWs",
  "key25": "3NQB6mFTZt1tWeRYofy1NTp8vviLjVvHkLcNFF8A9VvnK9VWFvffGwvhUcU1kkFc9LWpQ3VY3r2Pi2FR5Ty8kYt2",
  "key26": "5aPr86toPgY6BuLSxZhetsT6GGR78ZjMZcN7j81vMW35nPY1btu7cJZZW9GVcRhcabR4FyxjZH3RhSvNrRhHhVdU",
  "key27": "EKp1ZHoR42nECqDz7iqUo2iwTbNbCT6xRzSz2cxAgbhpXofpaNmA338Kj9B2P6FpnUvtboz8v6UfWw24FHDTAni",
  "key28": "3CCh3tcV8jp75x2hPjQ2o8EgsLZyFjJTMjdfYoozPdHPg94m7ZkaaDhczeF67snRhf7UQYgMTdfytvoC3dGAT2hz",
  "key29": "59qLdq9o9eCUATNF7YgTDysid7fRi9EW6Vfos5buUUFmdGG3ibLS6XnhxmM25XTkMfUaDrdEdpxUn68fdzdGokBm",
  "key30": "2JnUZd9zanZRao9u8N4CaBYMqx69cZGowWoJTXPSUyfVuVjqwq8bPSPmcRLzrLqZRkrRxt52wq5rr8DejcXFeDkk",
  "key31": "zjEBK71igkb3BV2g5ZFwDRh8AZQtr7iJF1hA9DX6vwSST2e7oFtaS8cTwhcHsFZY3yPKRFoNHJbnFpwxcm3LxcA",
  "key32": "3TahGoFXUHaKnyc2SmGseCVDFcRBqZ1Mq6y8yWBVATA2mXz3xvW2exrS5rX1VqZhnGCpLVj4vXxqH7k9dmXf3Ek",
  "key33": "Aj6Gnd5rbJt4ojw58Ez9qE3GnbdYHh6zfp7s2BSuTAJtfPryudZZxQnp3koAJhbFRwtE85uuAbCXoWKMvuMGzjB",
  "key34": "keK5cYtWi5eBGasekxreBuEiwS3NnrVuxtGjgyfGPRZoxkC9cpKHR5HqURPAEwanSHP4YC1ERKWzuvkecpFASZ1",
  "key35": "4TmJqwH7MSg7kJTtmL4ESoBv5YiPKmEzQjC4WRLjo4yQAjh3Fh6PevEdvYqf11CxtpVP8otEaYfM3fgQgcDQ5jA7",
  "key36": "8RS7mNgUcHN8MKi2wvVN9ENttFW5aeTWii4Mc11PUAqtaS6M1okou47iNaVyf62MtUPZ6FhNunMYJg2dudb5qNB",
  "key37": "4thJsK3nwimZoCk39HRLW9NfgbQ8xCaR5jJfCj9P886gJCBAXtSM5af8CqwCjmcDeticYS1R4cSkEoFSRCXRr6ou",
  "key38": "4AVbrQGru1rnmX4CUviayN4grnNar8LgCXb1rztCZuYSK2qTZz9UUbvhg2WmJZFpkdyVDK5WUbpupLmXBWTK2tju",
  "key39": "3b8DZVeUW84TjXEYNWs7KHiaUfGuZKwpZXDqtaahtTit5tWBrtSk1vEQc1RajYQsAbAmskAxaJpjv3nWBosM2rHb",
  "key40": "TAhexbe7xYRD5YHjPrVwivP8vaqr9JMJBhBqiNzK6ZhoBBoXEiBqN6uJY9vEsGY2iVkzPATokeLJmQb3dbEvrXU",
  "key41": "5cQKmDTLkd9hB4cRmpTkSCbBP7ANcE8GWNhvzpNxgdFLbzdrJEwd7yJwih1zkR1sBXUUkirRjMkBtLzytCiXZLpy"
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
