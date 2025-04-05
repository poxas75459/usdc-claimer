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
    "2etX38TGUbhPBQ6TjFVX3Wvshke83C1Ny6eeQPZRmS5t2NZSmvLCwLdiNPHgr8SSAFdDyKbmz8Phwyming23N9z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DSwfhus9EkVjhGQZ3YCVoCqxJLQKMainry1BxEUcebBGDXjMmTbBqSroe5E29H3bF57pvSCojndYx47WYiTExTQ",
  "key1": "3PG87nPXGBhpuT3rUHY6sYDr7cUesZiW9X4ZezL6SWhQTq5Xo4AziSEBd1q2uUUb7XdJry6vvu6AZXnEk3zyj6Uj",
  "key2": "3RRvuzqUJ4boAbXognqBw3NzdcSGhnpNt6yc64fbcCqCApq1XrYNp1iUp82NsraBE1iq4PsAi5NDpUCUvj6MYdZF",
  "key3": "2eCczELRKP7qggFzn8dfpp45aHdS791nkTTrMfLLWHx5ft8cnqYqwKv97ZrnAv1qwUGkWE9sDEjuKkmTBMxas5A9",
  "key4": "2D4Ve5caP35a6p7ihgqMGmQLGRmXMezEcU7DxDAGgG8q462dAkdhzHkSZ2VK3ZZe2eNwkVE9iVaFAe29efDfGLzx",
  "key5": "2VQTeD9YnrHbBmm3iGDjEnqhJWQ9rCVb27XDNnYrGPdbgBTYNV7yEkFFj9epVLQd8pAUawdwuBzHyxKbfUgNvw3",
  "key6": "2xLUvCrcoamDY6kYW44Ynw5DK8S61WwucPeQuDbgXC3n3RbhGZZngkX7hLfRosL1VTn1CPuWTVwueKUsW7aUZGoT",
  "key7": "3srAT3rG9RYLeXxPSEDwU5aCZVcAy6miVsVEyTrwZW5PrTUr2aTbFm4VG66WuLWSEMy8Rz9MxPLPCoZPfGQVFoAW",
  "key8": "RoxCgUeRo3UWi3rnvPGj5aM2buvJusxv3RcELvdqogr7g2xEVQfCK7WoPpVUQZjJVmExLBvWhXE8exmdisuhabU",
  "key9": "2XgA9jduyqRft7zQSLoH8ojMrmfMeKZA8z89vF2YuWHiLwg26WLniLdV1UznWgP8fwC1FcrBPjvLQsoSmJRKQMdC",
  "key10": "V1bjTAN2XbxTGLLb6ySuzCmycDbKcS88Ts8ZDieVWUP6F6FL3eFWsYCqBMqY87kjh3eAodMQ8C6oU62VG2b84ma",
  "key11": "35THSCM1YSkuKSY89KA875ALicEe87rfVQoezmUAVS1schws6Xbx8CK83VjHom6VJJqKbmtkEAiWLSfnyazmaqyY",
  "key12": "5xMWeVHJX4DZszybBLn9DP5KQDbrWDVEEYQUU9gqhV5412V5rvBkGH1YtM9eNxGanPJy7k2TZevwhZkfVy5AekKF",
  "key13": "vb3ykoWz2HFyEeLRaKsBL9jVC4SbokG2wK82HK4YczaMPYCG9M3pmAnSGoXLfBtxiywDKzCJakNET2JJ8srkcZK",
  "key14": "319VZMtEuA7gUPZybwZFL2Kud6AfxQXmCPRuYfq4dETfpM3wQ2WJSEv2tDhoVtEkMudZheJSBdwktNZ2Ga2TFx5d",
  "key15": "LR7GnAaDxdiCHmCzwwNbnvJ3CrxpP2wDd2coE5HtGfsQGEyGxEB3a1gAum3mMTPramRXN1piRoaA7kJ1mZKKHgb",
  "key16": "4enEyWz3QjyyBchW7S3pifaxvpPCcg2s51whje7eDfDGxNYgWTgpq4T3Amsyaj54kG3YWp7guwLMZqh6vvPoh5an",
  "key17": "4dd65W26pwmPKtR3Z8Ly9qQApWXLLx7HPNfpjnCdYrCD26UvPmGztTocKLVxwMTDQdDFzWfTmdVUM9dGdRLjD3Ei",
  "key18": "6SPDfEUMy1cf4R2QRSbARdgU5LhUbDcgnJpANUNtEhVHHAQrxJuJXddYuLBMjB6TjwsPtMgeSHtaSPrVV5awPdz",
  "key19": "3m2ritBjg9ePnsNdLxVggDiuigfBQDwPmCZKcjqAHitk23wTP38vtPWaE1uVK8SaLDrmjCn2LGGdn1G6uz1Af8o3",
  "key20": "4nxLtgUUhK14hvXtu6UuU5mhEGYpZLq61RszvGg5DVcF6skZHpeJgXt1cy8Q1EGvwJARdcxXnvVMEYHsjC8wUQr8",
  "key21": "uPdGKVNqGQQNdwu4tCft2qJ7CxybSGFGR8kKK5wWAZ7eGCrQQFUx9yPdFo3UT8ExjAYAR5KWSfR2RA1hxWGH6Vh",
  "key22": "i9LtHkSsDQistErcNsCF4ZBW8QrS2qai7XcncvWsX9vbCgo8qiw5nncMMKAxSsw9maFLpogDM35by8zVrS3UdDF",
  "key23": "124ymePrMfNq5wpMy7p2rgddxm5HTc61DMJ74r1mEEP2JvLGPty7dBQ1sjXAi3MutSZnQte3rDT97BYPQEokuDMe",
  "key24": "3k6P1zAABhZxqNMGAd1VK3G65W1Lnpw9EJTyh5ULyDBzg5QyjcrdcaeUWKneyV5zgRsiojHLUafNstX29KZxSBpi",
  "key25": "33D5cDwCycP4uFmqkujZDyiBtTRtM31EfypzXcQtbh4LvcqtUL12hJHX4d73v7zgWF7L54NXTNEwhCVqnyXSvUVo",
  "key26": "5HhchFsZWzP1u4zZt3dK3v3Ukheetx4bvBRNTLS2KmqrwbmrcJyroMWgXG9PxjhWbpwAG9xFrYfKfEKUaA6kXDF1",
  "key27": "3vzokVESoxDNUfzQXJzvJWrgfRa6XGqZKrkbE2ec8JxRUbu42gF7qTVibM2xkgwkBgHz1HS35qQtB2vQfok5onK5",
  "key28": "3uCoukMvWbJGv1GH4NbF8k5oxjLQHp9UenS85AjeqduLtyWxAcRYVagRtT4StCLWQrhVZm7ryWNR8S6nQ1t7vyqU",
  "key29": "ZVWnJXJjiG3nf6fnvmsJEW6YwdwUXuL74zzwhPkETtEYbULkdVSjEw3NknQtsQ6WYvEfsQ157R38yGRxevdsUKp",
  "key30": "3remWkFnqLXTUvBdQsCsb7wqpSpg4VVAweo1x7ahSYCvjzAkfDw7pem8cKdoiShpGFy4ZVZCTCQVmshu9WcqbRsY",
  "key31": "4H5GDmexEpZ425vZWKKxrFqahcwqi3F2dsJKPD9kyzQxdfxqcuqKoq6VoV87PZAqK2rTVbr3g4PAyMvw39PfR5PC",
  "key32": "34RGxPVDJXksy2699mc4hF2gRuVV8jZSvjHSBGrnRb1Sv18EFyuiswwaVg1Kn7NTyzfGMqsUCdmeuVo51SjRSXCh",
  "key33": "M414VnmdW6F22musUxPf6GBN6aQ28cyfwbWjkp6eXaBjgz2U8FAwKqRw5WAou2VMJJW2d8rtPy1tXj4aHnQCLck",
  "key34": "URVK3kHY4qRp9aofbgGnJCruU24boLA5DaG8rkPHT47PB5NJbc44EgwikRFLeyodrpsmYPFqhxuGC3CjvvSTLee",
  "key35": "5Sywwb3YFsggTU2kQyYLaQTvPezwkrUJSSKzZSJX7VfSocXs1iazabKYYV6nr43MSJ3dcNuDKjZCchk5J2TSs53o",
  "key36": "2WSq7U6A643mCvDCR2KLK97fxp1QqqA5UccbhwP7jc7L7n3uM4bsCs4LX4ZBdeLPMDm5FHvzvhZEi5aRiASJK9Ca",
  "key37": "3pMYhPRUEueTVTE6BpTW5bYAeTQSuyUmPoA5d1c9WW4YfopFMwtMv7vbEsh3x58uxUQxJFEhpghtw3i64sqeyhLA",
  "key38": "3XEdB5tVq61zuqy2CJg9hZp5aWZh72HbNq3uqXnjrVC5zVsFfFHAhDCNz6b1J6ZmRfxQhEybR7rR1baiR5SSbw4R",
  "key39": "3Nyp8ai2o63u2xh3bsBr3ViZEgBZQSbnQJXsmFN3KV7D3ZQXx29siif9SjHyAd3FmomzkRjAd3Nq3LsMutGsSdWz",
  "key40": "41TqPEw68SXHtiwFK4Fonyv8nK41SVfR16eeZhG1JQ5PU1XUXMva2gBupqpSYa2rJNSwtaJqjcdYjn85ahssFua4",
  "key41": "XzfNei2B7dszEftL8uRkvyPbHC3KntxPVZRLCz5j1bxCmZuzfgakPFM4oVaVR2nfsQFrmXQfSSXpsq1HqyFKbyC",
  "key42": "3LPeKXkAh4rXg6qmsxt2EzJCcqoaMMnFsm8QskLJcgBFghgnKgVGTQEZQjCM6jPuBx2xQ8sSxSXpxA2xtcv6eAPB",
  "key43": "4gV8RcKRSM95XGFM2GWPUSSAFdwkGKXs9KieFjCPcBnyvjztMtPJP8wQzVGMBv2gw8fWgYKoU6EAAdnRPEJ55jLF",
  "key44": "4wizEzLHggqXn58JxLv6yd5rqcHKmPVbEanTbzaz24GxrdZ6HAZmwK7zvHnWyqZU3oTi4gx1Z3hZZdyLeAeoB8YK",
  "key45": "4fgBTkF1Ua99XrqtzjFatXB8uhYAwKF6XsxW368ecnGbMVkVHMx7Q1Cm2t1aUHg6ZCyEbfkAkH1GMXBNjVGWFJCq",
  "key46": "4qjqhiaLEw4DgbpQygq3F46RKfFQz7rdC8VnQC1MtniQgPyjx1iLkaf7gRCkuy9Zk1EsVXk4V8jDRShUN1hKNh5R",
  "key47": "WJemspU1MXoKy7kxN7CeUnZfqWWFGS6CA1WETkWKjBHvuKX28gJW7Cp4ne8ksWYxejBoQEoQrdyzdXJvuacLB64"
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
