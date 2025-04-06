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
    "5dkvVBDfcGsNNNak3y1gB6YBRn3CSkJLHThLhSUsXQiV5Gs7yipwKRMYtRc2DCzJzqecUKKJEuzeTjTLc1AvyrX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26tHxdvwqAeimbSeL1xTB78KQ5C56RJuSr4YTz2FSPtpPjgydruBsc9yRYNrwtbHySS5GoDJVPobZFQMKa7HPmjA",
  "key1": "2Uv1bfCoMJsdjFuxGwapYUJBRotQZpUGPM2XbLBzLDbAcFPK3BdZj1dQwAsaqeidyBKmHzGuR1Q9fZRihgPuzWjA",
  "key2": "5NHxUoSeyiumEYkGBDU3pCo3iTtVYTcjpgGQVHaicrUBkrt7nxDoFZtxBusndFaF96wn3cfDp46rgzbU1B1g63M5",
  "key3": "QsGXrfmtzVdz8oiy7kZZMAvYdphvKFJaGTDqmyedpTboCH1jviMQxSRuXbXs4k7rtPRxEFbyQZHEQ4SVvTFaeYr",
  "key4": "2trEWQXikfa9PJR64k6pzPZx1b5Jte6ZKEoteYveRfDRP12qa5wPNwkNJ4kxmVYReaQ24w7irhwuwUUo7esjQMqc",
  "key5": "3aFZCkkb682YYCFsSh3tc3qxshXMmKSd4SAEmavReJV5j5NT9htFUqexmrv3ygGbgTTEmgBiZrdnaVinw6LZKQ3m",
  "key6": "3UV7r5q1JmJLmUP1CE6EufnqGup2zizKUSi8ojcKgju6GfzCqkrNNFQKiZP9x2JftZcKMJT2LkQ9P6n1kmE3Hk2i",
  "key7": "3mjuWURfpBgKKkETXQTGQMi52des8Q6XenTgxoYSZWmdPPi1kAYp3csjVT3Siqz4sxYqoSC95E7b7RyY4B47FEBh",
  "key8": "2A7ooze541rS2RWS9brd2D5cksGFjkBCc3Xa1cdgcsgzDJzFXXjmZkVgyJaPV393pG9UhSHhhp8DMf97d7XGpFQY",
  "key9": "4GVvLDWmoCUBbPMsPQDMmzoxQ2CcLFv777HdE8BfdDaxheggebcxsM6z7UGJC4cKt3b6JXXmoT1FKQzHmnYPXW1n",
  "key10": "WUTJ4Y42sB7JQ8EaUf9uoDUhJP9Uphh1b38VxWP1zyiXEjnjLNrp6ev2DtKZm9RgMR3iAWwbFwXifmWhNzyPqmG",
  "key11": "2JwhzdmBRwuj5DLbSVL6ivUopwJcHGp7YKTiuuhZg6pAFTTu5ysfKyrKxQQXKjG2aTVa9tCh2a7Jm1hNqvJnuYaZ",
  "key12": "3EmVex7JWzsQ9BgpL2nfVkCqzuUi65jSb4vaGciXC9Ygx8dp9AEKidyadFRMi8dTvHyMbrZVDS6Ymx13ihap1yBf",
  "key13": "2MK2Xg3UunwRXhBJnNXLTRE6aicsgxiekT37AbC2nT8VAehHhzptcwwR4UbL9hrNCMAm5uKJjAuJ9DUkLAPMxXVW",
  "key14": "xKATcpR3VNpftyFmLvwd2HBR5R64joWQLbCcDm3CLmjPNvGWn17McUSEMtZWdmKyYKVUGXambkQfSuNfuyTdWq1",
  "key15": "521jHBu6eWfz2mMCcCGcYFyZFq7pjACMRfcrrRM5GdrDC6FX8JpDDbFGq8ymjcanM6fHfZ9rHSyVUQg5cJhBLx7J",
  "key16": "2Z6zXPXSaJb6RWJrihWaCfJ9JF3qYavnR2E6gPeFVzUvecqhyZAT926ZBSW3rcP6Y5xwaoPTANzYTAABy4A2MykM",
  "key17": "2azT5z9vDAgtzvZsqMEgVxFjGg5BXZdSerQu4vdPCFpKZrpXtx7EA4k5n6CxB2aqGdDs2DDAESN6BPwg1oBtp8FB",
  "key18": "4azugt3AyeVaY6Qbb8ZL9wQWHyW23tWxLXGSQJEnszACay4B88TSuvQKFFXxJfHA7pdhoQuuJzQtPZaF2nuBySEb",
  "key19": "2LRVCzymMfp1ERmC4vUd3W5AZBWS9xeqFbFxfpumXpcQQc7xLj4pew3vhcPfQ8se7HX9AwxStmuXs3mR74fz9K7M",
  "key20": "2WTgmaoxhNWok3vA6okwLzRxh9zPs3mTRZqmQDgSeUxT4FsrcAMphT1nfPp6rwWqarzzuGqU6ETr4zYa7A4gitHa",
  "key21": "4j6Z2ZNPFtARzQbL2n5mh2kRv3KjGnhwKy9JuqAxw1DMVckkJ5fXxqo1pW5og4CvLCdFBxvqmjxHwGZFuMBa5s1A",
  "key22": "4Rqwv2BtM9FNnottEzQ62wShaK3nMGmKVmfawi68mRcpE6kLXabjfXn6jHDeX5J4ct29BNvvcN4wa4HgjZjrcWzt",
  "key23": "5FXy1fvZfMZyPupDFTJmd1KLvzifJTPBznAXr4FVqecvDEP7uRGAQ8kWhcGNFiPrKr23pSg9vWTAo3Br3XwwFXLk",
  "key24": "3X5zVtRxFV1FufrN4WvKpjTLg8oJYGKt6RNcDx3Cm31ZVbtDiL33onXrMHbN6oC4JHRB4UUyi3sHqq5Ax1XQYm69",
  "key25": "4N6G3kjAV4fTQTEALoNpJ8Dn7UgByETnDzf7f5szdNw8pTmbco3dDKDAhC4Psap2PnpjUMCvG8x3RNWWv4gM8AF5",
  "key26": "5zXCj6JWAcwpdEiSFBz7eWqy55TpM5fUs6Qz42TLWk3iKciktYRrw2yp9ARqizWfrkxiPnbaumEyxh3gTwmDVWNU",
  "key27": "3k9skL4sfWcPHGk3s4q6AoK5sEjw7TcH8h38u6CjZipT3meQc1Sbio9dLb4uLeLYq7gXbvPzp3nCworDPfqWXvAT",
  "key28": "5ZbA3vDMVkpFAXwwGi34omszssbe6RJGa3QBX3j5yC1qhR9vyEM6FJxL6Q1GKfghfT8rt3rkALeirbkbRkCHmk8n",
  "key29": "PMsgofFYtqRqaqcJCoqGmX7j9JurHUwPEiwFoLsBf1EMsrNiAS6u6s4L7FRDrDNpFNgtMtuymPGtDi9pp81rhj2",
  "key30": "3dmMDFnZ8Zfa41vFZ2sYha63mDfkbmUFims7GLAMjpHera9TMfth5TWGAdSFJbprnjmaZLh2kRMPA4z3AUR5Xv1t",
  "key31": "4QnTNgHcmLCQAqD2BjQamUFUUMQ3cKVVZWXrFroVXo99UmHFd7HBDo5zyFt4Avueiz8GrFktMAohtaxZQSmW1f9y",
  "key32": "2TBvzgj54s8vrYMxXKWfHJndzsk3MW4u2N39wsDXeT6n9axXBYTg7eEwaBcKVct5ibjj7ipHd3aoAaJ2Zy6Mjd2u",
  "key33": "2XGHvQT3YCDXEtZ47f5MoXbbtaLYHpVmLnmkfkT3MYzmkD2bKj99qvgVSfXS2ZLZKiBQRHmGUQJPLzmhKPpkoxQJ",
  "key34": "4VNGS7mBkGegQqzVLL28K1S87cvxcQWrJgoX7huEqq5ZGzh6NujmXSr2LeJLN2H9gEDEs9m9KFT6KWnBUpMBd5D1",
  "key35": "uAbhi6g7jjFHjYiwRoMd69i2TocvnconRBU95gmR7NuFKQTRCQpcK4cH4dVGVRFrBERuzi5Cefefbr9p5tkdoZz",
  "key36": "49xDVVB35NfGvw9UjTGfaNLMizVoZc2iP7zJ5mRaNUrVdZJyhkk6GMWF83ZG8hBSuJBra6W7z88SdXoHmP3FFTeE",
  "key37": "kmrjqbUt1HpUn3XvBg1T3TLqSJk8FL6dZoq62LUS916Hf4LpRAcG4XtQSjAbbAruDWAcEDr3NMxMuUi57pXJ3Kw",
  "key38": "2a8DaT928cMaYYS5ZSLHTH9aC8bor2re99vKG4tztbd2BocLcxkkVxHDehkb9gdebJaQ2H45uhQfXgoFfchExoyv",
  "key39": "3J7DPWaWZpTk2JV3X2817YN7rrnF12We8f7TN8iVLZnUwq2B5ckfnjEQ7Bt6u8a3oWRhq1ti8MQAjVD2b4NmJx7y"
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
