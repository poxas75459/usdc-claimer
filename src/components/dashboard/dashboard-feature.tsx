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
    "H5k1BFZFR9XaW4krguCLMU9aW9SCAceXtehMpNDApA37E2sjA6mNspxYKbKF5fdKPT9k33n2C8tof9RQaCDv2G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4L6s9uQnK3inWEwDMR6WAtrkAXs4EBPdMH1LKNkhu1J6MTWskvWBF2a5M9fdcU5EWTWrHrJUAjfjP2Ajs843CN",
  "key1": "GJURk4QQocCw9cUEPpi2WjEpmkDx7Xo7yMsaRboNh1tWdNBacpoGvxgkauVb1zWcXhVtBzxv6xa9AWWTmRFhjkG",
  "key2": "3kvZP8J7grCt2bypzVMzBwDYHzzbc5uuSJZsaFHzHbmD9gso3HKLLPrZ8YLjyJssYZ7VAEXUaYTzXp1tuCJdgNRk",
  "key3": "21SWPzhQhTsrMugL5dqrYtAQHTXAkwD5R2HsKwGLDhV2crtWdFrG81eNnq2Eyt2VP2TGHEFsBDAt4Q77Ft6wE6xC",
  "key4": "2XETg7yQAbG8yW4wSt3ha9ynhA9JtZBuMsGNVw2dwrfeRbh73bLYqFdfzErfLQqDaRtn98F5qq6bzaj2QHvXYjwh",
  "key5": "35JD52QiMGiKy7DsnwoFvoeS5H9LHSuogjCja3o12ET4TXUH4tV8NchSVbjPE1yQAFJGkQ2uBHtchDCfJjPvXPFR",
  "key6": "5K89ASgRJH8xreSYZJsyN5ewocQu4ZbBitacD7pT4oXTYiScdKk2dD95tNs6vNbckiNdzjKB8177vcx9sxyHqhLo",
  "key7": "34pHgF9xQVbGLCDj9KAXWDCZy4BkiMuR8VGpJVr6TpELbzuimC9ePH4EzgWLxHDhYhNQnKHtKBQ41usBkyEpyJ7u",
  "key8": "3ntUh3Jbwq63Jh8VYSmHGxuJJjoFbWNA7UcmAsZJmhgs8cJRdBvtM6Dyj4LRbWVrrjQzMKrTUSi7GeNp5rFuMJ5t",
  "key9": "HzgLJZ9YxaSWjWGchrgHkaw2i5dagERu7jWBxR4zvMd7NTMELfbjuGy8x49JL2MPhSCVtt3sDTShSnkw4YVRsQn",
  "key10": "3PVUTgthSY6E3wXrnP1KCaqDnUnDxAHaMjro2R834JtTAf15KZoXWQzdJspA5Q15c2g55MSBiZe4FwskT5aYPCW1",
  "key11": "3H5gFioafpDHfYTArZruqBJ9De89akA25F4JRVLrd6uAboYkA1aDScTcGyhRHHRqWxsD1iSyMRokhNVmjVnhaEX",
  "key12": "2QVWiG39V8C1sJkECRY8admbPt6B5pc2CA6Nqt7YR1Wuec6wWwR9j4xzoNugH9SbwoiuZpShZEiHKd2YC6RfNcZu",
  "key13": "5otiGfAz5TtYvLfq3pQjH5JZ4NeiYHzEtMuFMhzCYZ6QZBK4D1oKtTc9881rh92ZUZrGoF6np5rog6ju4AgcGqmn",
  "key14": "4brwKEhu8eHJuB1tGwzs9KdEUMceAecFX8qqjz7tGNL75GXEmtEFDFJkURcKf5ZFs1XtdqncoBXC2mQPCEBpNjkS",
  "key15": "34PVNp45RLpBLKeuLn2cCyKoDjk5i1D7zihFgoPbMoQAeBju6yRwQbXYE1DwJAaPWsYEE4ZSNr363JiLPLfkoDgm",
  "key16": "2rydFQzZX9PBtQ7y161KtwXjHdDTGfRknwr6KnebMd97vjw7LJkPjNrdqgUCpXfA6ufP9uwXUy8Wvur4RYppYiEH",
  "key17": "HKFGTCE978TLJZCKhv86VRf4XkJUA1WkBbC9Us77FxcEhzEjfbomPrSk8wQ3yB1E6rRKRLfUSfEjwqrEh4Gyg9U",
  "key18": "5VXCSDrSLjDgwi5vph9FA4uEnB66e8ME2G8b2qtu68bM2CUGy7x7D3cYN3h84PHYCZhVxfwtYC9bzXRcf15VL6mw",
  "key19": "XAV1cMfe2nCiBH3p3AM28zYcefkNfFW5c1dKt9vdXTpWwq5W7YK5ZFzBHqQrVjcsNFxjZwkpUgsgsunJNBih8WT",
  "key20": "5jtmyvb65tWd1EtMzNnJ7pooymEHLiTB4Mq6MLxBtuK6hE6bWLXWRNpGRgYsP8yjfGCQG9cpsagUugnXsfaXMpK1",
  "key21": "8iCiJ7d1nBdcyzSpjA3aTdbbnVBqLi5Wxfq5mp5F2kAjsd7PVs6XcZrvKDrpyjU1SnHZya9mg3hyiH4E13fw6dv",
  "key22": "4iEzwxRmo1udkYd6DAGCFcnsdbhvzzp1igyYRNvAMEdvAjRTAyrnxT6boe6jV4rdoThkSn2V72u6cZzreZjtT8k4",
  "key23": "5d1K2wRYjKVsKSWhbB9bSgw7uL9DtYLNUcLkB4U1ZnxSZJnVypYGGydLg81WCrEGzyzDvepknJN7MrkVPUdTHvYP",
  "key24": "4MFBK3Uyg4hc2MFYAguZyhDEJYbX2A5iJLWkK34LtWkueP7SbFGE7wdUEBJYUCtiSzMYC3kkxBX3DyzqEjeWLHMA",
  "key25": "Ky86dV5NboGbczuWjPBgFQ18o4HBhWPKjM4FuJrBBrYfPvUFGeCyfvx5HhNUospbYF7VHLE3johAViYSHMNC4nA",
  "key26": "24HYcbvwCdDVTYMtWkiAwj8PhNvvDJmarMbhMU3VHKW9xPJAZZoQm27toVZVWsGDbhxpGVtHWjiAszj9QRq21FAU",
  "key27": "4rKqpELChLZRMBCPxJD26sCcRz2rCi4XuDucKsyKpt2qAh9qVszjdKEAdqkMwVadW2kNbWcszLVt646r1t3Pi1Xo",
  "key28": "2CyAMdXVZpjopBRiVp8TRL3QtmCYoWqN5N5fttK65pwfNsx4eXuNNLsMzEdp94Dx8onxe3Q84UFw4JN5hKmK7jGr",
  "key29": "4YaUafndvCzSNTLf1egDd4Bpo7UGPYJEbWB7QTp89P8jiDuDdvxnL29ibYbXL53Y5EoGLuj8hxgaNbiEqV98u7Wd",
  "key30": "36TqyFTyopH1xoNBfJdhr9yUdDXoi5C24Xj9LYAkFccoSqGDkhZVX8Qrr5v5LdJLjte2ShucBKEc6zA29pacbRht",
  "key31": "6wXzBQRFAmzYoX977gEVfdZvxCeifGMkdCDXx9EdPJsvdFDnBTKuMM18Biha5HQoHZRCeCn4YajqmLLeEKVsqo3",
  "key32": "4C9B4PyCektDXC1XrH1pqStBMgxqgJcoZvzoJhTTMiCfUPtQHfAcBgwMfr1eeF7K4Lrqxw2PsQqWvJrZAcz7Pw45",
  "key33": "3dqJ7x48B1JWn5gRezseckCSZPPhmSXP9b791yzN4HpehLiHPoHkGfVPJcLjM95tXyGjgvfZszmWveH8N6QPcDRp",
  "key34": "2rYg4iRnhggNUqQNM41ZP3fbPcpBdGCd2Y3ZBE67MnxHkxyz2SkjQKwv6TAuyDeXFr1YRfV9jbgESsDY14y45pg2",
  "key35": "2rZuWH2gu7vCFgduKWkd9ygUBWnNBMUVMMyZiGLX1aAEDA38zpgCP7FZvN1Q86wF92vLrHFHX4f2bkfrAb5AwxUE",
  "key36": "47ngMeRwHvuugHhnAYH1BhZoRUMKi8T1XSLsCMAZ26PSDct6QsUgXSnt87wJCK4Wz82GvFdDA8u6BmSL7w3rkNbw",
  "key37": "4QpkbmonDmWQNZ2miXmTkoiTh81ap4GaYRWJzDkWyYNDT9rMAsh7CAiUdVVi96P8CYctceboZNuXAx8KnZn9hGdL",
  "key38": "4Vji9rcDLvrrm4FJ6HPEWDmJjfKLKufUGBDTYEkzHMHah1hZZiRkUuJgUWnLzYyNBX2tys5NnHds5VAcBwb3pd3S",
  "key39": "5NdJ4P54juCr1AhLHvFif5MwZgGQztd9NjT78B27vpsWt35iHkFJ97Gz1kfDvG6SXsC3vhp25dduRVv2UJas51JL",
  "key40": "5r45SPhEuVTPuepVYq1CykFuW5K6VzuSPdShS2WrK3rx7dYjmsRf2a2UQSskeE77GVYwpS91R1bPQRF6bhECe6g8",
  "key41": "66vtGnBWAJbdKdad5cE2mPaWJgv1VY2HDd7eVj1NAR5kFeVoWFeY8p1uiNZB8CJfuky9giQXDoY6rHgg5nCE9zdS",
  "key42": "3XTDG89WSKMXsq3Yten6h3uXqU1h4Mq3wXhMU38iFxutHC2zj7PP8MZvVJfjNDkS1tX84e1bCsaBRKD7aJhCuwPu",
  "key43": "5EtfUQ6TEVXrrv6VTaRnmerwBmdR3tGtwKe7WFH9UEgCXLA411cDcwKyzwwn2gRYQwSJ8ENmQJNG2CY7ea6CrBMQ",
  "key44": "WXadhRyAmmESDicbDMDdDhFpuCnTArNcxxca3jE5hr7URs1r6witqx9F2xRGJFxaRz2GZwaaQqUJWBnKaXv89yV",
  "key45": "3WSRsCP6kQmBqKhqz9GtHSnAGykaRGjMuz93mSjD4e1o2ZxdfdkLaGg7mUdUU8ZKGvbaTBtkoCuZA3CKLzp2dn9c"
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
