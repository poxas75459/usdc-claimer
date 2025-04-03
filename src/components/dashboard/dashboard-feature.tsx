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
    "4uudRfzUPheoz61YjKLCS1PkWduFaBqArAkR8Y9BwzhNfiinGjpd9bNkqHPXWTm2aMW4wQGiP9AmFD7KNhsn14hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "guk6FgR7F5QTEeAVFYsLt9X4BiBDTuoziM4kfY7bR9ggQ2M6MLqRwV7cugspqbgEcYkt6PvMtR9d322N2SMcmBo",
  "key1": "59h1XRAdpAXLPvWur7aoDTcidRp6ipZp3ZzFVL9Ad1Vh8rcXME98AT8XK4uzHw2yxPyER6UD3rFQ4PLxsFykiFiQ",
  "key2": "is1ErC3XPxrnyfYxMQSwzjCxHVspSHrxNX2oUJuWXgEXZGDZn2mpermxPueogx6wJmYV5PH3XHbfYFKup2TixM5",
  "key3": "4P7cUoBksDkeh2LRXgfopnLPdCFNPgbMsiRetwNGiXeut5xH3Q33ncat5bv9oB1H7kFybvcN4NusUFZ7pentYQJy",
  "key4": "2dBREwAKc7MciYpnVAnCPLBwCvXbAqUdwtQBC3CstW1JYVGEcThW3MC6aProewtFUZqXaVFpjGxnLZFAz2Bm6r3D",
  "key5": "rJjWg7JGDJRrwkBDGnUHCD8aaQ2W2P5hS5j3a1cURvodW4L7vbFcGdJsEA9WgFDThw6NE9uPZpodWHWnmoUHxWU",
  "key6": "3ATPsGzjx5fqYLKs3czF1yynUCRjDkC7VRg5yK9pGbdJXYdyPjpNHcEBKVjiEfocV51wE1yCF1tkTDHsbSRFJVKt",
  "key7": "5UhuidcWi9tg1uLJc191sEx7Y2Tti6PmDmuWrYC4JqNcscBn2ZFbrfpwuQonVQJwqLSgbtL1PV7FPLQGdfeMDpVJ",
  "key8": "5RTQQanAw3EyGFRPvAx3gZS1xKZe183cp2dHtbCzjUHdcc77zJfvxyoufs6cAyysTAS56C3YaRPALiXwTpuPK9ci",
  "key9": "smKtGMfEPmu6Ri8HRBaNG1ywDKDrSpVhyFZfkepAK3ZZjNXMHrRbkwM6fMP8F6ExKQY2VritoX5BazVZtw59Nvc",
  "key10": "4TBvH8jH78CpuRuiHpB3Fy9SsGMAnUwbGDo8wyZYaXijKnsBDxijwAWwLMYscxoaUdBdwuN6V8Fig7brRXKuFxUB",
  "key11": "3tnXN6MSsBqGrfmgLBHmhgF5GCTyvRT5UZWd5Q6AnbFZ12Fx3kjQtrGCwPyDGwgFsY5XYGMuhdaAJH7TUoJqbcR7",
  "key12": "4fZBQceuctBP4g7zN2W1ScSYT5zgavKsjsNMhwcTTumuY3KPrdSmhrJdSxxjRcTznxwWhCCeAJdoSHL7voWds1dp",
  "key13": "2bRzxq7VgiDCLvyn3pwvBZ9RWkqihgyi4q6rcwdgKdao4xFMKumhfHPfzYysBf6Tu77ALjAb4nLSH46KsMksegms",
  "key14": "5h61i3x5m9MHAeEpKx5xphur84D2cSgcnnc2grkSN9CPnC1eBXs6jAju1SsuSbMkbdwgzYWvCHiRGRrnU46Hd3kD",
  "key15": "Dacb4A2N16ESGxeApy5i6dS6LiwWgPJrJNLTQRbrLCubmkpcM8XVVi1jruN96iMxt4rwFawncVFSjak2Bm7o6gb",
  "key16": "4wDsxY88c3oYYqCkt8xFrn3XckFBYDHqJKCWf4C2sxqssfMaiEcmEqNfXn99GyvK8NECGiJFhKQtL7L8K6QJTq1L",
  "key17": "46UsWRU3NVUzNAkghTjWuuj29u4Aq5Ebzk8K7r92rgdJvzP1uXA5JwBk7JKHnoPPfUgAgNqh1SmjgB7ErDrQ69jA",
  "key18": "4fTEh52vahhCrQyXTatRJfL6R2RNqn2VqeGX75J1EScGJGyW6VGvvHrpzxXSus9qpfJPH4KjJrJgU26Yn2RfHbTM",
  "key19": "X64rsiePwPKEe83RrTeYwPsjNDq6hfNMy39cdGJQ3XXvXENkELSeR7ZmFunCYdQMQ8U4n5R5F5HW49ur6coBqvd",
  "key20": "3buHTWBBWRgvqbTgQX3vofWvKK4dgFJKMQLi7i1hS5GYFFBcT8iV4kfe8RVQ5sJAnUSDcLcDVR9Fmxb5KetHsw4a",
  "key21": "2ujmuoU6PpMtbnYZxVnVV8LzqHLdgTbzBPaF2CvcAf24sLaPAEvabCa6PT1tZyA7XFe6cUsxcRX2sCpsTeD32ApU",
  "key22": "4hRUZvzseUTrtzzNZh83z87ZydrjY3c1JG5Zhw7SZPkFykFghhwNh89bTooK3bE7nHJizHhCs3H3q1WuhMuaVFBZ",
  "key23": "5wMa6sFzY6hGLfsGzY4br5cDTrbVo5RyyhrKtFDV6QRnuLsMgkkGvfRkmdpzUfoN7rftQUwRJA7ARMfmiff8RV6b",
  "key24": "5Swp3a2dKXWAosTReenJ2sV5xsM2bwV7XDHohuwaFGqns2zwYaCeSyX4dqG42WKhS6FewdDxzuF1vBML9S17yZUr",
  "key25": "2XBfEdMVuF8CiZxhx5TweAcC5oUo8j4zUEjrWmfC93gosJtHpxK7eK9buMV4zZNPsCS3EHWDwXyb735T6MJ6TPS5",
  "key26": "59BgFL1c1AiTAABakEU7ftu139cLCqiqW1F4sT7z3yzQrjTD3wiBmqMZ8FPCFLjtUqVs3GkK1YY39yLjmMU73PxS",
  "key27": "2e4s7aMQmMrr94dYpHDW7baJzMioSsJ131Lrk2cqH26n1sNvh3ixAkiuUBwVCsbftYvWyzS36eTHWF5uSkPBmcYp",
  "key28": "47whsz7kz6Z9XmbD7WhGgmULVkBiEA6Bntc5vheRqyFFCADbywVyk48hzKJ7qbbzjo22mTe56rLGQF1JXekJUb7o",
  "key29": "4hGPxoQ8j1tE9V8NcFyHyviZy9ABMzsCja5Uv9TEFWcskZ2VwLUbJ4BMXLYoyXuS84VyQQ3LBDjWZufabCCwBWCF",
  "key30": "5wQu1h6vHds32jd5MLhAqpGG7i5NonrACASkAhmd2zzicHE8gBHdkosASLHjJRvBebWbiZ4mp5yesrvAMhiJ5YMP",
  "key31": "5ykxbBSBd9ivHqbAxpy2QdsviyGby76mwCXve6CiaXSpDSvzdSTQbupBX3zKd36X5UYrDoJRd1v5coK6uDmZivRR",
  "key32": "4E8BqStE2rAJC7k6b6REjVJ6cmcdXi7ievaXyW4Fqj8jCZp6TERXHVRxsJu9U73Zg5MRiEwfgN1RVaGZYeaktwi3",
  "key33": "3r6QU5cA2C5t6iYUPVECmSbWREMjTWSLLCMkvHMHCgShLTX7AuKUv5JsqZNTevPiFJ6JHrng79BowiL9SbTyxHm4",
  "key34": "5PyCkttAqHeseiZdtxsFhoQYHLby9CUR1UEicFRYnkgeqbRn7zFeSX1rquP1N6gxV3FsxCmppYuomV1DwDrHHXbk",
  "key35": "7DpLdd6AvLF7oqR11AubWiUbJFXt25896nD9Frv8pdptofWmAs8nCcaYgcjPRbeQk3d9FSDoghkTR44bAQ8veSJ",
  "key36": "chpNVeiaN2JehB9vqepMWrVdqMCULGPVf1D2XM86DhCQYnJfhoKJhMdiHkufjdYgMRzrYs8hD3oL7fbAtJu7GvG",
  "key37": "2gfDPc4Zzko7gxbgHARcofsFQqj8XGouEVL6EP25GoaxuQLRPnyM8o12zESnhqLfJTVfGrAdvrbobqNnBQmUCCv3",
  "key38": "5exrxaTUdFtMP7AnXDTMg3tnEicfqU6mCx5gdWE1E9qDH6G7tTbrLFu1g2Yfj6PGjgL8GUQHSZabp7g1ukMrsciM",
  "key39": "poToX19ct3bfSzeso15eJkdaRHWP5dmCHsBtZZjagJFf3Y2w211pu45F1PL4Y3YJCFqAkMArz1ZZQ8mirCfrsQh",
  "key40": "3qfo3JedR2GBatZGrU35dTMwuN9yGfsAXZXXkhXhGC23JhZjJpKP1LAqUUjobEzavF3EXvf6ZcRCvYZsvW1cQUs9",
  "key41": "eKNKfyxKvSXb8VyJ2HLhQC9K5RJdo3RfWYVB5cUh4urjb2sfWeVzsvNDRQ8tZgAdJPtqj6Ub7sq7X6xxfv8jPiw",
  "key42": "Dn1ZdtHf36Xihtdui32GMzdGBHpYpbJPC567fAv7bnZooeWEFQwk7Eh9ozpEs3BPpsSzh9o6nF767Foe8dMLhrM",
  "key43": "5UycQkPqaTMDobjuw5aCCtKHiwYLW4GmeDJYDXZN2kKQVNg2Y6h1Xj8389m4PaBJ1pHjgQTeN4VJV29YsBLW7WUh",
  "key44": "t1MBV32DVmMqf3i7CmUmvg8stnSReaRz2PY76giGR1cAH9w7PadpNSyDRDXY81CvYdG6VBzrvAX8y4iizpq91xE",
  "key45": "2VGjz6Ny6tnpQDHyLGx6qVQVjFvV818wNVCNLYPH2NVsViZ3VitRNajHMw5yb9xKt1YSiFXnxE1Ed9KLZ4qS4oy",
  "key46": "5NB2cX81kXX7LtgDx4YYpCfe58vQVbTGyAQJeTSPP3kHRHySpHkKzpqGeU4ycyUDTDHoGCV1eRoSNKVqkPS93dUJ",
  "key47": "2FFG2dazeYo7TRukr5yi6VKuc9MF7dAJXE8kujAaWTE3ERi1j6x6yhp4jQMkJcu5Bgx5Kg4MS7Us3By1fYLNSGiS"
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
