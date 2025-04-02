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
    "2KNeFjJ4ZQmoGTaYc5woYyeribYwbz1K83xkf4qZ4RiL29g6tgYd8KEonhYFohrwpEeznNoAoLDfenRXMJgihZdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fv8aAxeSLn2KjPkc7keG5A7k7cpVSDyf1fn6y72xJgUSWNEVK3o3RRXPQ11dTZz9uiy7Zq71o1WfVGPa8n1ChcZ",
  "key1": "2Kmj2x82Z8S9gNwkGHehpfEc7DVMheCVBxtYLpymFUi2xqywkQqxzcCEJdgXQi5aPCfdL6FdaB7gugxMYEbtatMu",
  "key2": "4zPpENBensvgiuCChSJbBFhoeEc6PQY4FyY6G9kKfV2iLsyvpcotP1DhjzSkQ7vrRUCSMwtKcBvEMWzbizDaRfsc",
  "key3": "2YcPc4Pr1bmeCQXUov7UXGuVpGnnBDb9FtainyVr3c8PUjMYJqxgXUf86PJcmMJsjC9Qbq2ofamTye26SJf5Zfhw",
  "key4": "42zCM6Jvc3PqoKD59de7seWo9hcz8Wy9uT7VPwRDDPHaWimX7y6rHE8gxL3yzc3ZhuyJSLT88SZz58rEJVwdjDUU",
  "key5": "CLRB6mxcmEmzxfzgzHM1Bgd8297ccUc7254D8ysm1x7fTgBhe6eYMCtYupUYKgG39jXUn8KJ6dmoaADPGSFUJ2x",
  "key6": "5unKMNcJomYB2mtgLE22oSTiVmHDNGRkeebGsWcoF5Pb3TUGLh2Uk4BobaX19FYJXL7edG4WAju1D4zzajREM2vo",
  "key7": "4qzRhLUPBjbMk5m3BSzFkGNaGkFyyPHua53Ai4KRed3CK2JhFpBGJuPyUYnaAZY7DG78y91ZNQAEQuxDVgiEz8Eb",
  "key8": "2ZCMm5G9ssLS9yTH2WwXdWUMq9paexcq2tFvUng59YFZa73ZXtrHv1bRMBqKtUPT2CrwegcyQ27xbDEBmwq2gBLL",
  "key9": "2r2Ng7Ah7feDgeqAm3VnaszpX52xChWbxparFwktzQXha9N4fYBYG6HSHcLach5M8ZDEwRTHchYAc92a57hzEUjW",
  "key10": "KXPcnzq9LkwZtUMaZGQNBRq5XDfpgUMiVjhUfRzNDRXd17RUJvEe5kCdVMWgheTrKtqYUzpK4CNGbq2N8bPYfcj",
  "key11": "3RAwSGKJbm3xpLHeKcN7BkQAoXJokANvuCLLodsHExWnUg5AEHXZvpxPFFcuZLPu7UKkC3xUWcGDDZzsHSJ3UA2J",
  "key12": "44sZvBsLLHKbX6cGuMk6jRNy3awrs6GaY6MMQwESWTPKm5bPqLnUHFveyiUA8xwdDMnKXDMfDv5nBFiECHjXkAvp",
  "key13": "9oSJnr13rMEYhy8PRxFAsqRYKy4RWxwnfoZAQuR4hiVhUx585cBPKdpwpFQ9SvRiYnXN8Bq77b43gcaGxjTFA8c",
  "key14": "3Mv2ms8c345VLGAq15ZSWEHoHsCx6KGM2Ggd69WcNy2uMv4xn6KGUWXafG5cVqVN3CVy2yTJGFL5HTE9CeVHnhYp",
  "key15": "37vPNKkJu1QngexNbKkCMAcjjmM9Wjj9qL3ho32J1XdpAXExhsi1K3QxY9thKqVBAYzGzjatNrJuWp5zxwWTswLb",
  "key16": "Wd7AU1Aq8ATVYNzGzCwbFhuPyp8DVXAWJXsqGmReMx8bdyMXeikN5bwxk9MvEJq5eirwB6heTEjs4A61qA5p23n",
  "key17": "5cMCpFvBieUim9Nm1YJpJAzk7YK7US1UonNVCCqVDBWYd5AGKMCBVDyKy3j8s8osW2iiuozi2A6sGet64KYvgWkL",
  "key18": "nEPBiSDWkRrhWvGbdjRichkGhBaTNQ68YiPi1K1xvhwfR5ZQTr1itVp3eGB7fLXK9fXKA9uq4nGBSjhAet3Px7b",
  "key19": "2bArkwBJRW1fz5eZqdtjsyY8QeX6ixsybnwKRzdpjHjLJ5PtxMDvXbR1FjR6eerDrr3XzTPZRxfMjo69jATDLXhu",
  "key20": "SFnLPjtGiXzBnNJwsoGczDPbosvt1E2A5APa3QBixa3gdTsDrwkATnPZJhqXwmfscovUCsXsbWrGdY9WgXAmJD7",
  "key21": "3teYLY8fYLkBvHg9ZnpbNjk5tVKUYoQrMJuCzZtBqHLZ2hEtssEQtiKeyULZBG7vNSrbKFr3xj6aiDAHxMpfaYzL",
  "key22": "4fmp9dgjUEqcentZy9d4xa5BYF5Yx4GXBqFhnuHy4VAbFUyHFiyrea6RPrrQr4yrhjuNDRxdbTRtN87RFtZvvwWJ",
  "key23": "574t94Z8WeGv4iVG2j6jdZnRuKMubd4NtbPBYabhKSR2uvy2bxmzNiD2JdNGHxxs9pa1qHmihLYwognkBUCM2doV",
  "key24": "2iLfiNrugyjUoY16KpVSS2mCRf3TsA7cHCf5ixx5LpBKv2yco6q3fGLZLo4eYgo7mVA2ahv7XsCZpH7XY5EWHJw2",
  "key25": "4FBGDwyeukwyDkYfPZyLK8dVwdtp4q1xKJooossvrkrwSKJJyyRg3dAchxEoP5eegoyZWXrMSAdv7xx5S8upVomS",
  "key26": "4hZ1qzRpCcBT7tJYbgp2foJ2Z61GMDNnq61WcAUZ7gF2SzZLcMybPW8GbtzJwD9hXhdDZkYJCvA8sKDzTYkMhnT4",
  "key27": "3UAKxLmVGaG53UjPJKi9XWwiqxpKr9euWnAEmhiPPUCdobscNTdjoYhV4CLJdxk8aaPkVDWrkqrgwQYhcHjGcCvj",
  "key28": "5p5HN2rkiuynJD7bHDmyh7QrXgUWSxHZLnehv5FrtMRDvVhDPtfQgG4nork22N2uQCqPG4NHfyry1ypBQjgb2TpX",
  "key29": "5nWgaw6iuQQ7au6kJWPJKJSQ3aYaXnotMD2k4ZTsMbFE1U6hkgXJAX3UmNcJqF9162y7czc1HLpcwATAP6ZdHCjw",
  "key30": "2SFZN5mSv5tSfqT5uXDM5Fn2qi9HAeL9EvaesFu8mJX32sqovguw2WWaoJXK8k2ia6CH53UDKuzc6fBizR7SG1rF",
  "key31": "5BWxenGVWtUVA98ism4w25ujuGf8v6Hr9zCHGzgj2Nw3uZP5428Gu1P1e8Tv5FTMw5jFUwytM2oYti3ULkzKJSny",
  "key32": "4syFehKYH2E8dAVL7Fg4KdXjuGygphh7KVDJ4F3G3Qv6cYXnf63AFrzEvjmZV7xMiyiboDiZCo6Kc4p1CQWmezX3",
  "key33": "ujsz4fZC2poYStUwZxp6xQWPQksiuRTUF7fMVDLCk6Zb4xD8dk8pAVBfd2tPydiTJCXSzD2fTAUBCrqf5RzStT5",
  "key34": "T9hXzQm6K3zv4tEwaGUA1muHJ2oe7GEbs8M5kLtyN6ndXnxzv47b64Bg4ebDPwFzuJAFuWjY9q2Wf9JbxubBHCy",
  "key35": "3TKRWCkzHAghVYDNA4SmM5TpWQ7a7cNRsFfwwD4LL5QVyJhmX6ibLbcyisoRiptNCPXvY3aWFrChVsV59KNtPgi2",
  "key36": "podvtwzY6pYoqRBAJLPqPtTFMT3AM8vJT9o3TvzLwDzVtBbkxrdMZjKMNLBfN5sUK4cXPZ51bXisLKXL6GZs4CM",
  "key37": "2NrnGALKGT3Q4njUGjpoHcDiLTaTT7xkQZZdhQfxfqRcLiKjiWeRVk7NtazQNvyQgqLEWWeyTDxYwcG5Pf9GP1zm",
  "key38": "6BNPANYwhAeNphEEZb5gJ8NDcLFUxgp43LeQEE5ZYnF3iUXuKeQYsu2qxNoVTHq4ajpz7mf5To21D2qMYozZ9ap",
  "key39": "2MiPEHBiERUr2sFZA2ipgNHFkCdsQztdbADa6iZMLmL2msmobxDnCsgyi52WztWnibiV8UCCwN9qD81imz5GhYhn",
  "key40": "5TC9ajLBLVHo1iseuRbgehcsgAyF3mhwKh46B9kPXeVwZaqPC9XJUihZdkG4opxczX4xWUcCSysdwmRPEFdeCtnp",
  "key41": "5PpGTV2er4hYZbLS246Mfk4nXUdTQD3FY4JwyTumBVpahT69JRRKkRs9Nf7K1caiXs63PYbjNSFdfhtmgT7d9CzJ",
  "key42": "2yM2ZoybQMLZgcUoYksnYzJpEr8sfyZdkMAN9C1dxjd1tA1o8Rxh6VUnb2RBhwVL4aMbSKtHGc1j1jwAA2j4mSDp",
  "key43": "ioZ3p5o4aVgSuyHZiJEfnQ1aegHMvSoihT7rqCtyguv536bAFF7xd3KxQ1Tjt9Ao9VTPY4Aw5XwZByEjrPdNgTS",
  "key44": "pvknzpHxcEziyP5WvXJBHFqPbuFw5bwCSGzGQkX8EqEn18mygnEPY97yHTTKJpN3QXTVDNW581L2LSkqoCg1uCn",
  "key45": "VbhtCmH7XRX8vmaFJw3Nyr1j8EnzLnNUU6yGGdHJU6wWtDzZoKaio2AHzLXgFrxKqQBFU7pm3NzfoT2dRdpWFo2",
  "key46": "yH9e6yyQr1xNivrvtBi3aDbNSCgW8CJmJutVBdVCizJXXmDzHpbzntVjvhtouMRYwLYQbyCpTLctJkHyqDW8Hhr",
  "key47": "2WXKvr99yauPv7QArWd4VKQmS2VPYQUdaYry37R4E7eoEVPahbkuCJeuVQuQ9tmvCtPVU7GWdSASUAS6dfKKWAjq",
  "key48": "3hyBdqD1ghfX6i5evkwggELNXkKTLNtDi4FtEhQqcjG5BbyeCyExciphfXcSjYVwE7mKwGLruSf2NYoCR8GGd8SB"
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
