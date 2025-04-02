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
    "3BJG4BMpJDVn6Z1TzKqoVCzX9LJBoLQFfRZgZKJPDsMN7eqrUqRD1NvXKmAdgCC8gFbBTdfjDcbU57SJG6o5kZW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsF2CgtrejzgnBTRC8Q7dSSHNAPBacaUx4QdwiHWSMMgCyaifJ9xQgwvgfbBvUSLmu11YA1AHw8M9mrKzPNSCUw",
  "key1": "4hF2Lo1qQnFu8jfgMoRfijirMXYuD75DqEVgoEQrXuUykQ9XhgbfJ2AFtZ3k45bGQ4cGQ7wnaarRxGCGLCpPwojE",
  "key2": "4CgkWsbTNGRtLbatQadB6j7MSDdwUrKKoT6y7iiWwEuL8MQkQKwMF6y2jNe4V3rKdimYXsGhYCJzQAQeu1MrGWgD",
  "key3": "35CFhR1kZAnw9nt7khRcBULusALPwqtPBsLyYB6YPc4vfuB8cBqgYmXbGBBxxF3M4jWoiVrCwPpSsH9hzr8SiAU5",
  "key4": "5NmLaZJ7NVyAyYTaVqa79jMaV55qX6XH9mm3eyVHFfafcBJHVqYC4D8WcUDm7SuoZmWBSRbR1YcVkjBLgFr5J2Fd",
  "key5": "32fkzLcQPA7715MuwsNyRDZuPkWqcMZE1QPt4iQzxNbvXtguSJ4T62ALy5bdGVU7PZFcaz5ifvTvzPjp2jSeuCqg",
  "key6": "3G6RkZxziBBMG3hCqfHnChPE8jMkQwGAKiso8obi6HXMWYnV4y8vCCCuGkTV6vkgcjWNW1eFcBm1YDMFHVRZgJLD",
  "key7": "XkajNrran28sAsgS3RuPt8moVF9NCxgJQ1VUTNazV92fHBh9nSVmbGT5Y1m2LPaCinGT2BofrLMEubQCR336hUD",
  "key8": "2qHnVaDv8Cdr41WxXdNQmkWiRCs71gzuBwcoH5WZWAMnjzyax6rgzdYG56wpvBvtyuLzDrYKJiGv7vDn42WA8ZQR",
  "key9": "2HfBVgQ8FPSekBc4DkdbVQbV2ko1gArMeqn5h2qUtL19Man2HkMpTyusE9Wbeaqs2fEYJQptzAQUH4kUdugYu29Y",
  "key10": "NJbd6h5UfgNiSPa4QXUnhjUkm6WfzNLG1Wr8Aqaqm1UcLLtuT6Ww5mSQ1GZfYWGSW51LbeiEYfTXYdHfLhL3mUV",
  "key11": "5GHjke82KzAKeczbPuR1zbqMWM8JrqK4PkqLaJX1HTuUDxyghvZea7qrhaVSa32qpXXA3V7qszonBXMr9MjeK7hT",
  "key12": "3QqDftEb4cw3NTomvbUDyebeSRWqm5yqsdmPy5sAjDC2air15erfKMEM3daxUyFcL8jzEZUckksWjRY4osygfg4Z",
  "key13": "3cJdQoRipMcmxb6dJWPGvEfRGgrhiFaEFGAF3u4Vhb6tcqBtv8AvJYbvTjPNe3SKPk5cnUSFC14LxGcuGESR9kR8",
  "key14": "2wZXmYPiQWaRQ2MW25irHHrA7TVDsLHmfbBpXfhjQKmTSBqhgmzca4uoW1zWamSj4JGxgLsxXNv2sfMjy7wLASrp",
  "key15": "4NLjBkL2TcBH7UTPpDtZu66dn3VD8K2mpZf1wzBhp4DYbj6GSEXvcTzs3B2waxjVsvcFSAm8f2TYFvFRnvHY41RR",
  "key16": "Gih5CsTHdSkYGw9TfbwSjZF4NWvesW4523fu9nKwczXGK5d8JuRrBoZJrcqoN14xNswEVewxQGxebpXmzaVHiVF",
  "key17": "5jSRuSYrkdUZiqy8beRx2iWsqApVpZNFzkfhBJYFujttTv6AYsidLk8yA8kGWr2qH1qxGN9XrFSp7zxHReuygynL",
  "key18": "5k7VPm4xqnaSHdxmJ1LrJxrr8KuAeM5XpWaT1NekWeV4yDLrBaTE6Yeba3DBZqF5iaWXKQ8TXSgXLZpHajtaDs6B",
  "key19": "3XgsoPbgWn52UcAgPddi2m1jkGsVmEZv9E88SdRqmY4L1sE8D59zPPxHbnvDWheuXEKLoFR8ZaxgHqj11cTwT7Jd",
  "key20": "4MyXbc2bwpLfrSxXcvAusPPKy8r32xuiJqQ4gex4GPwRXAzQBT3wBSGGpEg7eaj2uTddW4upNPrXu6PR9m2wZi32",
  "key21": "4Mim4pyYNe7zdE3acL3cXfNNNLFWPtzKy5So374R4wCaZJYE45JFjscPTgwNdAZt23xxzP7VypwvtYno8ED1w9CH",
  "key22": "28j1Rq5uh1Vw6C9ig2Q6JviYYZaB7Um3LuUDCByVbJp1nsPft4PurCd7DRLRxwchWWJsrYn8YHZPSwDjTqCmPHhZ",
  "key23": "2rtCBvBjvJ2xtKYusBvXQNhWZGhPo5Sw2oN51HHKCa4eaeisGWyZFLd5pRcGBe185hrv4s5qCmXuKs8hXE3TukWw",
  "key24": "NGBBPbVVYGbb3CUYMzoeL1DctRfxvqmx1AGKEY7yCexNiQFbNSoBXSz1gMr6BT5DSPF2MukDr9boS3w58PDtRT4",
  "key25": "4uf1LW3kyUEUpypgRgbKPDscRRJEG97Jianen1ra5u6rqpJMA9tKU15nULtropq5yTwL9u4DP5w4oEjhV4WNkP6X",
  "key26": "4Ytmacb7yRmBSayXmD3cGoZULK7zBi5GffGoUjsaHNyZmfXFCGbhCv5ht5xbWBc4chq26zgvUS22F7NRNdmoC4Sf",
  "key27": "3kKKHsVAr4QYbXDNetA2WuV8vYuVxL1j2JMYe1QumJkB6oGexk33xNNPg2oDZqAo72htTpaZ9CfaN1ss7RpWoSkC",
  "key28": "62L7tub3qCMrsFdDAZv2nGpVmkqt5wNMvEUKTucj9VcnjiZjLycTkaz4Upy3FbEvWLNE5fDS8ffT7oEXVrHyJXzr",
  "key29": "4NVTHrp2XrKPSLkZ8B28mQWLbK7seaYqoT3PRLucrk3XjuxBgnCgMRVdJvBiMvgUrrid9S52hZBCX9wsiaFurKy7",
  "key30": "5CJp4RTtTFefq8jkBBGHoLyRK9hptvmL5dnDajb7gp2ZC9siLrDtH5gwq3Htv15C1zKCYG6gqEnou3mgJ41PJiLy",
  "key31": "2V9SCM8fQ7g87LhUeet7JAEFZGk986uz8P9JGXkZtoekVqnifyRyeZNaG9KQ4urpF5UEa8XLWdBRSmQNU34Li6B9",
  "key32": "5wVnjbAsGLMXzmpHpaKtzSko3Kq9nUdTu99FxAMHBSo9EAeD7zTxieb6EsUfpybYAE5HpTLNiCG8Pim2K7ZEZHwK",
  "key33": "5DG28aPjHpiCHhAATfpttWvfMdg9uu5j5SDXN8vthjz7ow7CL3rDNqbgsbMgwfLwpchTMVX2fYccRJzBN6nABFai",
  "key34": "4rtffBdrDE9fBJ8UvD6LvSvTVzMNd5qitpfW2SEdu9QN4LaGieCrD6ja688bApYw2PMib2oqmza5Hp4SDckbCKZS",
  "key35": "5ZSwkS5pcCmfphP4utY3LQgi4ctMVZ4rLjsGs4gxapmTKt5hx5E72Tp7FLPN93vpUGFicRbFxV5G3xtV1B9mEyTt",
  "key36": "g2Q3FC7uSzHmwUXadkMK8nqNaXhLPmg8vYgeXnxRvrMDUbxa7hupbpRUmVhMJMVBRRbLEpq956w6Ws1U33ovEGX",
  "key37": "5GQRzHNJNE8PNWtuuk3FnRheZKsT4Te9PjyVhNkmZjhHBChRnjqNUwbar9j6wYVnZ1z1CwkYSSDoWzZPhwqMDWuY",
  "key38": "2iHT16TmM86fcwbM6uzchd2VMdmrasCrEG7SFso5ZZ3tVKfLUoL5ZykL982PN1QEuQ32TB2B4mnFvrLqfB72DSD8",
  "key39": "4qh7fAPqHAbDWPZPDD4UA7royS7ihcQJiWQxkRU4Y9CPXyLVkAh7HwLsHu5CWwNJuUKmW527mF9QYAYfzEp4Tz4m",
  "key40": "4LvkQkPpT4ejkbS8uTWfHB4E15TSrT2TsfeMMqmbP6dmC1G262KrvDznuU1SqucEz4tgPhyPAsikYxzaxVt4coae",
  "key41": "3JbfBzc6poDcopUhD8nH5pzxDg8xdRkPrZszRQBVFUesrmdimCMixCym6d2kSiihi64fSoNRSRwC4hBkt7AuuVGE",
  "key42": "LXmPXiDdjkSeeoKX8rVkUpW6UVHpgUMrcKGTFAn32QuvsYXDrc9Hmrkpv6rrd5CDfhJokFZLhdEQ7pYt8osRFuH"
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
