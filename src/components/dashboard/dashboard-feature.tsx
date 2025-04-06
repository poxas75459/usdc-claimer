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
    "5WEQ34SSU7curbqUHf6SvwekXDwQGfQCGuEc28Uj59nrcoiNQLczuix7Hj4iVyJnNcnwwrWmn1UVEFcbU35CdecW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JFBGEkd3LhYZNirNdfUaxahPXFwWjwUAGG8JiZigHnn25WXozR7gNKb1WN8vchUAkQ9L2qbBzWuGsJBsEp5nbDj",
  "key1": "4JfQkzcCsFxdSjDjRzVtauPUFfJnfDpNEdHyiHbfD4E1LtRDGSVphfwxoZJ6VwdLc1sGFx78Af3FPFMZECj9RVaZ",
  "key2": "5CFGMbA1WJqkbr1fP6JrAMtgMGJuDzGjocgpd2nozrpuWc7Ue3QR1QQK4qGPtYxrPgwKG7PWWbV79Rd7EURaUpc5",
  "key3": "63dHQp7VXieULcJeyq5aiU8EigwjfqJkumVatz13GbExAEtNnLBdZXiKK5ZnA1bvy2VCqx9od9cQXpCXXcSmR6JB",
  "key4": "W6QnQXoBKk1WBgYa3WGjnmKSCRYJZyQch215WCWRBNsETbvuJYx2RCGwjYvVA92sws6gCRpvo6khTV6edbWXqHq",
  "key5": "5bncGPiumSKwDvcJKAQfvvbHm149KRAK4GBJ1RukLLdfMSirq7ZRSH3Qz7Tx7GwGmUZwg9SgLezzMkJHAzqgAL8B",
  "key6": "q6xN7JWuewK1CUtTMyc9oCz98qFnivzYdfhypQLPAioetJ8ZaTW8wFiXByejm1vHsffAWXuYSBLp8e4je9SnNX8",
  "key7": "4Mmz14RC4CkiG5ukAALraj6oePT4Jj54vYmXYT9MyXzmhtimgudPE5mRysPcquRArPZy2Sp1Kd22yfsiA3hJ3YUV",
  "key8": "GstriaQ5iT92mCtwe4bFagUJQNS1vqgnqmhiTRvupb9ayDP5V8vGgEN9vehJYpTrsJgyJHFkgK78ycweTEtBfNZ",
  "key9": "4ovKg78X46Tm47BKPQzTZHwk53fA3uEbnUyRg4H1BmSea6gYsvrexxvsadLKyrmQNh2Uy57D9ATqHbuz3NZ73Zj8",
  "key10": "tiZrnJj3ZnirMYf5xRwb5qwBVNSpfyxHMXxGCqHRWswKVLAnWXfwoP6WYycq9ToXPPLBEcC2QKJ3qY13acAzani",
  "key11": "4hfjQRTmykPDKBu68RwXfGepFLSjkXipkM3GDGVfnqy6X9ZP29tuUN4GtpbtkG7xeSE2cSwXoSXyysRYrDLfPnYF",
  "key12": "5nubwJhMRJYYRB1rgUkMTzPHdHDGx4jdoysZvuMrCh7CPLuQn61YEQkcSpYTpfzqMDug5CPnuwi8JWh98YZonTk3",
  "key13": "wfTjodo7CjmdTeGSYr8GXCJoTXajMophmRLco1YoXiSk6QSbJ5byK6t3y2jKNB8K6cmZV8zxK64eWDButb3ov4R",
  "key14": "2467iukuDaNgctRT4bUwQ7Z7dowB5xgv6CVaJczZ5tHk67bVKExyv9vniscYd49bEAFE3q8U7ptknqTmsCd6k5h1",
  "key15": "2mkbmioJy4hU7ih6S6pcb9PMeshsS9rBHnuHiHV6rekdj923r8m8np558b4Es6JcS9nADR5Jb5vMYDayKAftmnmc",
  "key16": "5QWBGoeY8SydfsswHzfUQzvaG7rsZ3nwSkUdthCkKSYucyYLWDcGNegZea7bxVScexcun95dAL1XR2fWxX4MfnKT",
  "key17": "24fJeP5W3WsRENsZXmvLemjuSKUJfktCf6hF9SX9EdtmCVWxJGckqxGUstKfUV7oA3LQ4y3yuoaN4NpWvrAnyqhK",
  "key18": "2yLpU1vNTsqPVEr1YzQX1ZzzC1GSsAbCF2yFB8KnsFFPFFqgUj2mDzKjFcWFzcdgTrJjwiurD9YSx167h11Dj1AG",
  "key19": "3gB1i1qGaya1ECUBowLTE3kHPVxZctvvVbDYpSjmA8Fnie58We353K4GpYLuzYbmrV7KKFUB97Zrp6Zp9RX9DZoC",
  "key20": "4LYwm3f7cwxUAqVxJHUpMmhBV448cGrJMjsXLghp1NVWQFyrXZj8m1H5qiYRSEMtqU2q44sNMcF9rESjQrnbTxfE",
  "key21": "2WTefzEfuef2BCvFoX23ruRkJd2Em1LHm5dKK4Bzi2HvV6WuPw33rBnCQytjwVHAyWHwKY7bPFRt5JfGQ4vFgdc8",
  "key22": "4BMexsH4PFHFZsDgUQFAbafVtdmUAfVH7Ge7q4UAFVBWkxynhoFQCVKFgRngWXRL567vyJvYxKqVi96yi6xGBiH3",
  "key23": "45fq9m1SLvpfWag16hntnF6YhUDHFJvDg6jm7wAUHV2utdcEzJAuQaMrWmphXMshYeTz1Umxj7jn7hZttM9FMg6c",
  "key24": "5Cx44LUqZUxCGiKxzWR3XJ1sWtXZLqfZtjthgQav8QYoUV6ex7oKnsrqS5xLZbri1wskry2TaPYtf7CejKvDqQmp",
  "key25": "61EDzkogmdv3xqcnDCXDSPQxJMrejsLFzKtbgJ92VDs8jph3oNAnokw3urBUppJ4C9f7NsyYFyUGjPEzzMYpJdxz",
  "key26": "2SCp5z5NZFCjAoBVqn45NKXfTPZx9VMijgaNxZFniJiZHofHMjkFsuyyHEPPKPzZoYpuQ5KoJQ3W11wKd8cJXE7M",
  "key27": "46SUdkiFY8MXDztNmZ1zC1WURQZeMpr75H8u5xh3nrF5qgBrBs2RWA9bDWf8vPPfUTU42YTTDx4qa2KVZMkaXih4",
  "key28": "5Dx898aNi9LEsQ2HMpB3Ccy5Adz4xZ7gsayAimB6h8gKa4NgZxGk3xe6eiG5crLYKRyDQnt5MWh3FspZCUYE3Lc1",
  "key29": "3c3Gcf3EmMLhqRN4gCdLUtbKo5Vy5NwV1fMcdNEphm7ttm5s3gTdG317W9aphiggVW9rpTYsgw6sJWU5qvqnWAwe",
  "key30": "5jwQRhb8S6W5SbkFNzsFz7cD2xs7NVmfac3zptXGhUxUyauSyf7siTid8uGv88fWELy5SALJvzYWbPggxAS8Kjt1",
  "key31": "4fyrYNdjqg2MV9Mhgi5RsFgoD9KsafNoAY8YzjYUM5hCRh7s3f33WhhdDSj3EDtQBWPML5u2dj5hF6mXHDBG3ND3",
  "key32": "2XCNC8YuGFFrMWStA6uU2QQR7hCkJ6Qy2wH6UmfCmV4GSHFLjZtzqXUp3zkH6WRtGNpp3KFLxw1hB47gSvh5Kn4x",
  "key33": "L6f4NugN7iWPU83dDEgVUavS1oa1gUSJhV5LyLpfEUsCnVh2Hdw7w5XB7rSBG6VtECDQuPcZ2LetNFVkEmH3HqL",
  "key34": "4zufK2QF3XNPe2A8Hwd84waL6eu9dBEjhyPaucx1guZtyDfP6ekoPaUdtG4EeZZfLGC6dqgDRuwkmAzu8kugbRV6",
  "key35": "67dmDHGSq9cZ4URKQNDJh9cL9oVRtvrrNRey2xQW1pwqrpmRc5boewS99GjoP3JQ6hvP6BiX77PJ5mmMYc1DEpwy",
  "key36": "2kunayUsZGgGFCMrp3UKasLRL8XAeUJ3joYaxVfzY2sWYKSw3xzAhScEzLqRn9ECVXhS3RtX5K3Y2C5c6zb7zBTy",
  "key37": "4LJRNnr2J6XmZWHxXgdJqmFN1jFxnz9mZrNzwVzsY3XbzJWExiC8q6qrYP84RadmLGJVaznZ8rpeYdtCAjRmF61R",
  "key38": "zd1UJAZihn1xYqm75yNFUiuynn9FfAkZj9oNHG8jwSXvnN1x3G7Uiz3K3U8SASGcf45NbEbxr2M22sCFz7QsJyg"
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
