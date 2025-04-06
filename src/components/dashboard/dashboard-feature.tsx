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
    "5ErYXjSHSmLAfM3W8HRrUJ2oRTNKrzkm2KRX3M4qNyVZokpQtRz5KowJR1MSkpQfnSnRS1BbMN4sbRkCqw74g6nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BScLwo3ykMUhjbNtqAJRtUGnoAbzAcnYPRYUG1w441X6VoudzWumS1VPcSE66vuwEnPsxdaKoafPYJpcNpdmyZt",
  "key1": "TaWJj6UDMffsVgUc4JMYJdAS5pUp79iJZLBvrPqHCAuCCoqBXKKKw5KPHuiVFarN2RgBoXJ3X7MZWckeoNU9p4u",
  "key2": "PRhGjcHRKZiopU8TWsiu82nwz9nzPSzyCvrCdGhdBKEUyJPzQcQZD4dgG5XnzyuKetxhWu9yYHtNb4i2hwppcQN",
  "key3": "5kdNfcpo4bsshaDhWYaUjpVtvrGh6MAtmbLgRQWYjNi6bAJeKXyhnjvC4wgRK23UjDEy5dFycYzcBAfhcBYfy8Ga",
  "key4": "5ZcFbhkroSaodzWmsugLHcJrprWiRc7QoKYbxWNa9bTGfoNDCbMaSBcQmtMG1tQs3gz4fGCgULukVxpgrRjscYD4",
  "key5": "5Dnve5iBb6kJYCSCDcNxbL9MY96VxkjWDwvzTbGAkEBuxtuv51MJwjcCN6YPPVhfp2LGQKFkKYmRSacv4GuqZZWi",
  "key6": "5PcCDXPa6Vtg5MVHggAQRMmM2pJYRdLU6AkDpVmaKKBfeJqAYMziAA4GxqRG4yEQPCFafRKUF8wZJZydHgGwWgfP",
  "key7": "5W7R81aiuf7z921Bgao42tNZuakCFrXjAiBmGTJ9r6tY9uB31QbYfjcaGGP2EhX4BCF4Aq3NP51vWHERjphXdfNF",
  "key8": "5qN6znZ4CpYKNof1rkWda4S1rzc95LP2fsjUr2q9KFFHy34AtgjtBWtd9Dvp1ASoVMiP3Biy2eAb8axgyHhAhTRD",
  "key9": "2Hm8eDpsvz6M6rJHyTeejiuNDAWbzPN21MmArcCdL5jxpswCK4bgVt41WxgkuqrzjqpySDV7T3EUGZy3CamvrE2w",
  "key10": "3knzNyA9DGpK8FCvgupwgPKZgS2mGGkv2XnTvVieHQt4iZS9xsVQNb1J6MaagU8tcfpE986QWRp1bjNkitdURUAx",
  "key11": "2h6gYRroj1zncV6UYK1uKTvPp2XqMBvk9wjGwBpBSF43wuH9YtRFm2mnPNGonF7ztyYqtJW7anCDTzoaf4pSRYUA",
  "key12": "4DFTDpLFaRhWP8toaJ6nyi8UhgCS1MG4EFWreoSbViXMEQV9nGKWXXmjQmJUVNnLoJ4G9cw1641Z7yYawbLSauBz",
  "key13": "63VcvifxdqhZurHx5vLaGtGcwhHcLkZW8R7BbtQHX7Jx7G4FTXhX1vsH5yMvSsCuQdyMV5oPh7xU6YgSHgDPPKXN",
  "key14": "mFjd9TVCRpAUr9SZp6S2PtGMBueBGXFhTH5Exez98bZwzo2EcKWkHNSH7Nyknw3tSB6SvYaLq4sYFc9zaxYGTib",
  "key15": "52FosD65tdoM7zybfR7b1WkZWEJ9UYNmv5vji5sxBwBjPiRiZpBTAMCQPNUUuXE9ZUd2rVLf7wFAhFAWQe4u3nZE",
  "key16": "7zZ3wM8PYrB6kbi25bsFrPYsfbj3oDf8ebz3qi2Rx32KLTDuZXNR7cLRJRQW4JBXmwHf9FF2S8YptRYQz2qdw1G",
  "key17": "3mvNzrCTbhLgidP739xJLAgiaLfk7NuEz1aQiDo99UV1f6HpiUNCx1ofkLKG4ryxh1ySD2SCpZbxF6iY5E6uqCjF",
  "key18": "5qkBEUWyCpLEqHUDHhQnooTs2J5rpRJXUqobnRcupUza3fMMCSNaJ3grAeRip3uGmqDyHQTZEgTQKG4bqp57W3oJ",
  "key19": "5xBGWRNWLcFxs1L4x8a3tEcQNarntGJu1YgExCrARcqm4wpgTwdFkH8TWjbmrC9ifGdMs5E9Z3BRRYW3qAm6d2rz",
  "key20": "5EUEkCBTYYDXguJa9TZMf9o9uoQBkHjqoytx6o39JVz1sBwhqCSnh3tDctBBK2UAQB6Z3HyohtSW2jtA9u5wFz3c",
  "key21": "3rYTGthQzQ8Xu7nqVo9ka2Cpakm6J4mmvuLv5L2EBHzGcF6q7k4CXnuDjKBxHpuH354zgcExJ6aUgTqAsUkj3iNN",
  "key22": "uGNFFtMJTTMAr2EW75kwyLmXSXHfDHqFshuEBCfWna9pnwnmrqKShTaXHbweLLihGGDeZpy8VGLJjQafRM5Kvd1",
  "key23": "5r4xbLGNPLFEMAsozRbrR4ru1As1JqZuJr4GWoHCwPS89P7o4w1PvAousEJMTuzzCHrvtETvLeW3hLtWbsrubjJE",
  "key24": "3ggwF9J6pfnnLSepm7CQeNW5XKkLkbz7s6JF2HWwCMFoSFxDuoMwYDU4de8mwSD35qaKUVLBpM3P8hzNMDxiNg1Y",
  "key25": "4nzK1TSSq9G4MU86GeuLEouJ8GqamZi6NrbRDLiHuAKUyQKBSPpfdPjrnsurxNkFtjbgt2x5sEz7QZMX4V8nKCQq",
  "key26": "zDDcgDUY6KNQQVeuWQ9cJ9xuo3VAyDCz5wznyHpsay6ffWUT6AW2iew9JNZ3YA9YowQJuyD7GmrMVBbrCYCvwX8",
  "key27": "47zwZTyjzjDbnsRkWWZiGU82AFGezX3Ki3xW7cjo4qD1g2WQxHHTNguAQjYC8N9xb3BXPGsQbg9J5c3KWThPxu2k",
  "key28": "3r6gk8TSXCKxpRvWhwA2bmLt3AzhqExuKxvPY5cU4zwno3kvEw2kt8dkawmPx8Yb1ybxem1csfV9zebjKyFvfTFC",
  "key29": "3CmrGykt8RiTxfRAACaiVeKfx3aE4yaTtsApqyvmPEzdDB18Ndjnv4JN1AVAYEEj3m62mGcA6odAQRDB7aubqxWv",
  "key30": "52rVurT66hQkg21nGDyKpxGUGkwLYSsuc8CW8exUZZMhHBb5bayPrqA3haYFjqCVENyZBZWziK3Bky4XqHbvxvqU",
  "key31": "3hwPunSLnx7fdmN2npS7kfTgeR5tikD3d38D3evKamPSfK3TbZfGvzeZPH4sANtdvGJ2CspkqSjoHYMpgcV6ryCG",
  "key32": "4UGr23Nb5Bnq7iPKyZQ5Au9ik7MteFhmT64oyjbEFqdVdtrTaoMjJAxp29UC96mQQQYhzvMh82mkFiPiAkwXknxD",
  "key33": "4qTWsC2ZiJaH1dhvSX5csVX2ZqU48BxGTHTk6vF6RkZvwDP6dUHtF5K3Kn7Bb84Y56QrUGpyY4YrGiA6kVqmGRDq",
  "key34": "ubZhLC69ihLzyfB1Bnh7kiN89cm2MRd3bRvBp5x9xDdGknqu9etuAo9o4wG7kTPGrDBdu1NbrHDkFSmU1t2UaPW",
  "key35": "5sCPAgr1Vsd3wEuHrV4sPjiYzSqxbfrk74tA5wGB1xDRhUxz5CnrCJysMurDGxMrv3Gu6X88ckCgpAzH1HmH8Mjz",
  "key36": "2aNBK2zGF4zoyaX2x4ZyZVkdwkBtivChF2NUEBK4CT4ZVXkArbAFy2m2ErMTruh6A6vPRAWbvYSqzuXyg3rT1DoS",
  "key37": "58BJFzbyA4b71k82NywdCe2fUhgSXAAsP2x64uTGHP8ztUpPC8V6yDb74gYbH549oVW2EUkTTvFnfApv6mrExsLL",
  "key38": "5DKGT9ebBidk4P5xXesVUL9YimnXTpdjrktfvj9Tc5HfDniC8CQcBEKATfRWkL9NF8inAJDVDFChpGmavriY5S9S",
  "key39": "KfQrnQcT2XsCx6VDFzkiaRMqkQ3pXBC6Dg7xnthRJ1B3MfhS8u3A4A7knjwe6PiygvC55W897RTUL9WgwUV2gBi",
  "key40": "63K1ieA8gweXZ24v4bFtFqFxoPnXmPwRN7CsC71MX1LUH5uKw5y8k4MVoEyd2gzERza3r8kfPEWAwEUMpNdLrnrf",
  "key41": "2kkk8ZUvHemWBw42KkBmw5uXrvRqh6TJp5MEs9Q9qvdNAWEJHwZNCUCpKB8NPXMvEy3vBzE5dc424sLVT7cmdMsP",
  "key42": "2hEFDjVdxUAk7BxNWUn8L2chjEFHYCPnuJDpqGg35depPX2TqQM4gBJbmnXg6f7kERLKFJmpySc11X1wQb5G2fch",
  "key43": "3RzkPtCGMBWGKDmd5spkzKon2Le4fa1x8vy8yayqGyCxEZJL5JA8UpfxzQMEJdFBy3DhGScGBUo7z8u4aBNwx4R4"
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
