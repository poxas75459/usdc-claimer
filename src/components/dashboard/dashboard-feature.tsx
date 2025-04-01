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
    "3W6eVQ7Qs8ZJsGpAk7uJZPfAY6FdMc3g6zde7HejqyKuyJcKUko59JwzFBYM2udPQc3onuDvFTq5xaEy9NMTLXPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WLEE9pGA7YWqSPGyf1eb2S9KyetS4sgT3D9De733MgSsUto2az4keXySwHw17HkVGic95Uv2kf47ihP92cqFCoZ",
  "key1": "3g4VFiEmkgk8TvmFbfmpdaCjuTEyJ5vUvm9iPzi7PqdY8N7FGPMoFUZD6grwA9m8th7163GuS2r3xiwSuVGpvqBH",
  "key2": "5q8Lk1bjXYa8mN1ZpE7QWF5eNNUxigGrNMjyA3E3dCTMSGjDmeNxctgikKzCFMMoEK2kmMDD7xu5BPTYxRepWSN2",
  "key3": "3jXAnEBypbKSHxSWzAQBpe3FeQuP4PzUQMgzE8awHiht6c8EzrxPc3hQ2eAqAm6ZhVVDAhGpTnim81JTWN87xgM8",
  "key4": "4PCWvTDujr5khBe22iJx8UV61zV9Misz8nzfhgWUc7SDB5ksg794Z8Nhh9dHBRGPP1Qw81GnQFixwbmhZkiooWZV",
  "key5": "65Dv8YEcA3bBAp2soJVKGhR6RY8kK5P7ECzaMkT7G3UwQymm7XApiAEUCGsLLrg4L9cQcBVrPsXFmyuj3EonBkXt",
  "key6": "419AMsR7tRmqmsM7pokxqwNuNY5E1kXU2rj9zQJXLe2bAb8hfbvWXYzYsqfNBYBAoP6BkuzksbG7TfXsbDfe7vmg",
  "key7": "4753jjQreMzeGwKjPrB8t18hnNpEnTCewM4TC5MwzSu9umgEwHrR1rEL1AqSKXoHScWtANSqe8wKBiSx1M9RmU6g",
  "key8": "4Chu5zQus9oW5xph12DiGy7Fzt9y6tcoDbaWsjuyB99oPpzt7s2fk7ina2fdHL8wpLQJF1zdFibTh7o7nY6gq28A",
  "key9": "247mekE3h3SeWNEjLt5ULqSpKoEXCxpRsSY1sitwCsAqebCtRRHiQFKfHDNjvupF1ZvRJtkzkMdUUJhtrktb3Aef",
  "key10": "5V9bsKYevHTDeWPxyQZkJMWAXGWBeFcfSgTYH28jScB4UKF1nbbDhPQLYbi2W6NQWtnVU8y28aJLFexTQiAM5bkf",
  "key11": "3g7kCdmueqYmwSWTmWUeggh1QX9fzhZwt7BFJjpp6Ldepe8mczFDGfpbRXWtvVV4xwABnx24BnYpwLfFReJdt9gy",
  "key12": "623uqGka6GrnMMYr6npE5Gg63Qy5QwMc3X2zrz3kcidfKZ9aQ831hBJGvDwzLC8zv9gfTSsDWV9zWhj5Ruf3apY8",
  "key13": "jqmh9JeRyg4BUYSCPmW5TT331Zw9ww9mvHLwwgYshpzCaTVLgoAEGHb899MkyoHsYCFPo8go2UJw4PVhEMdeHfB",
  "key14": "415ns8fTMycrJmmP8DXpGrNzhpqV5Bc6dhyUyeUVmz4Uj6QG8yZGCw4EuiabxSfxyotbnnATYMbWN77MAxWMMnbH",
  "key15": "3P9APdyyE28CJVEixKvMzpgpALiqrspQxvCyhtE1NBZuHtd2szq4m96PmBxvrmfu8yMHyVERvPaRL2GPxzU5gJVS",
  "key16": "47rjkqAnTZhbeU5kCYds6XU8HNuErTHiKUtEnjeHzPMoALfwSg9DxeknoUQ7EG2ZHzsbAynmXjAX3wascaFfNxDy",
  "key17": "2rWmotNyYji8rFGMBRWgDEQzKEFa8fmYRbRAHzRzNLt99G2TJCpqgJmwQ3Nm9rvnNSNNJZuunSMGxbeTz5wJvwrn",
  "key18": "2bMih3sPr92wTdP2PAQJWHEQ25tMnE61QCxKEHX1BFAyxgnsXvx2s4mqsqtzNZ4BmYCoNmhuBG4Lb2i5UPSe35fo",
  "key19": "2eveo7nabJsSknnkL6tRRyY7pBNK6Sc2Gdwja222BGC85VrZkfg33pZTXZuf9mm4zeZdyP8AZzCSxLcefbwupcEJ",
  "key20": "NfcaQ9TvBdVG9dzLfHYMgGwe49P4D8i3LyT5WPndgxoT7sjgib6ATJYYzpwVbukL4JYbfRWdciPKZfjLi8ZhLEr",
  "key21": "oy6DoHbQ3Mk1tBLXfdRMoz78F7uLhbj48nAro2pDWtRniV9gjumQDfjYyQGuN4Tdf1zuzBQW4XS7HAQbVfn1wqd",
  "key22": "3kYB51xMVU4bJx8gbv2raL4ojfb6FRpbFuUPhvcmeRWBJA2fBK6WVd6aNfBwJe2b43Qfiq6fwpDusaQxJnEKqLFj",
  "key23": "5FEh33iYDqEz7iY8YAuUXExWjFUphkFofHo6DscZxwnnZocGoATwzcP7ppqufVnB9gYtcd4d3JGmYEkaBBiyJs7M",
  "key24": "LU67dHUyfwwRRgJZwmtgLhLC38WDBVKD3fRR9z4sDpY1qcywzcAjVjzT4YhEeChpMSA1tMdHug8q3J9sczryVfM",
  "key25": "2MXN6ngdFsDfBzjvJAr6H3XJCN665dQT5YYaw9gdNX1tLUPBgQHx2HjetFukoKebSWX1okPyo65JLmrTy7rgYEMT",
  "key26": "3FtuNPEBDb51NKXcFvQebD9BB3dDHUrhNf6E9fAxXpoi2YdbSt5L8NHAK9cV7SkPJ8r8NcBrpaTyd3LibvSGcnxY",
  "key27": "5hGyqQmXGM3GyLksQXbCSxngRNL3tvu4tr1ivSuvio47HRu7VxWt71CuoHuxjkaQvu56sD5eh3Tbu9HATKihw8Fa",
  "key28": "pic7vLrZjKAR3ssumU9hobvrESPg6pVPQCtoZXVNKRakUoHv4uqCkUFkt51c5cg4BNzxMMbodycuvpVUXdENFM1",
  "key29": "4HnsT9FJhWdG4hoHFryYEbERZ358dNzYkJNPg8ttSKeLo7A1KiuFNqh68SEksZirxn648tLtPiTL2JBTJi6qf56G",
  "key30": "4h2J3vdu1FoRt8z6GyAz9XPgcuK8ZszBfNTPeKNL1mkqNWNLpL4KWQXK4jprNcZPKdufVKLPWBSXSv7uewqfUX1f",
  "key31": "3WoKgqoVkk4QecnqksQwAdauLc31atgDS7sV1f5ihb2vHk4g2J2xH42LoPKhrjgtEbnQhdaKWPwhA4UQmTTz1X6",
  "key32": "4goL9M2pL5vaSxM5ZWMG47E7MKtH4MrsuaFSRgUKcTDuRv3bcA9YFfA3cywKPbNezSM3iDyZwLTRfiQxyAEwPqHr",
  "key33": "2GkH5aN8Ddnu5LghyVAW19ZxNKkgPB7fCsFvg5MU7DJbe2uThHJhkRtUwFQV9MgXMdWNrGrUi6BBLF4FCMqibbdF",
  "key34": "2g1K6YTPwbD3HWDcmktTJVExcgxfWSHLVnCzem553rLPoBQ9eQ39QnvzfReCK5NwP5qSHWRnhzWVJReSvTXto84x",
  "key35": "24g1L6teWFdCnQHh97Li8pFBka4RawynHd3cnDEDGNA4viQDo5ksFZHomeitZinCZA9CccMpECMaFiRKBt5M9oao",
  "key36": "fjmfwsqvxCk1RnAWDSDB1FfM3YhNfRecs8nXX7346WMif4MkKdAFVJ5q4i7A4GM5QzQgmvbFoyXyGHKrmp74gau",
  "key37": "ywvwHoJxJa4WN5SoUjVuNbxKZZznkYVjcjHo2bygpm4aci5Kn54BJdfm2TeazqvdTj63yJgn5FGX97qQgepWjn4",
  "key38": "3zym5y13NEogb8bmGX3naRuysqcQAmP8HXADhLCu57CG3iJG5TxsniZj4mcxJkr6BnU6qoAL6dyTDuPTdQqKTGPx",
  "key39": "32gk2MUAkQBeL3SZnJxQmZX84bqdrM6aDWsLvWuZtjrGKJDh43hjpmQc5kwypyNPBSk3HLgjgeSWfQLb9spisuV7",
  "key40": "4NDMBA3fQr58Q44ZbVSFq5ovTVDdJSZ36FfsGbTtY6hWC65TJpGrWAmdcx4o6LVXzEknzEFnhCAVuiBLVgNbrUtx",
  "key41": "3ubhSoVJ3HVUebumxRwBTs2heeT5gBtWe9KFE6mY741rZfudRh1RQwTDgVURP8Y2sLc2UwpNxvfbvjUfEbRW6Df3"
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
