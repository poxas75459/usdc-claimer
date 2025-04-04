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
    "43GNgXT7Bn6DHi7DFjjnPRwon5xi96oXLN9fX1yYEZegZg4QPqudnbma4fr4z5D9HHQDPHHxowbUBqonFCSug7Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZpuqoyUmB35SbYewujqPW11fomSQpfxm1W95s16WGf1v7s5D61bc1MBWY6LCvPJMWQtHSF2HCswyRmGYKxjCnZu",
  "key1": "5LyUecTbcnyLmHuqLso6PWAGPpqGasg88fh9yNBAeD1XMZ3NJBXqRwbaHENNavVRQfYQRT7kD9Uatgu3u4Q4ATnz",
  "key2": "5VTFNsCb1s2GjqyhrZZJgHrDcxToGeQy2PmBisHt7qCDjv7QezNgD3YEiwVdfczC7Bzb9LG7C53XU4a3tGqpcwYs",
  "key3": "5HB5ae5AGp8AY8smtd5UTurYN2vzFxr1eCbqhZY5W8T3KzHDJvfwReTWoAuVSF5SPwZD4jGRxnqUGxD9wDvv94RX",
  "key4": "64iahe3UbHg54UtwqcUqQjDtgKWBvBPRozEtt7Sd8sNcDPc14qn2DkHPS5TuXDNu944WS7fYU2oCDjvnVdV1WVer",
  "key5": "4MBadejnHTfhyLJCdi8NVGsTghh4943ZxxWEQL42c6c8JhYdzGwXburTf5mK9RZKmwjKJ2qkkLWMof1xmwVfxhZs",
  "key6": "3PTbAH81qkFf2tjAzzGoyBcULfNgGmVDRYqhT74Dpob9CfL2LDa9qF961jir3LxBfUGYJf1S2bCAq1evWEEjwdTX",
  "key7": "4wHbMEyyyESFuvZxxPCXAZPPMkUygxSiMgS5cHhudxxoijX5V7RN5UfpyUkbid8cwazpiWtAKKP4PitWsMo1VcTn",
  "key8": "uTg3rYSTFq4uNVG1eHnW4DqhGY4H9oNgmxmca7m6PXReR4d96AvszRjBfU8kzMAAMnGSzZxJtze8xrNq9vgdjuL",
  "key9": "3ZcXSQkXrUq1dXtQVT5HYFwqHw5ARaFFoMbTmm8dvSPvj3hpWmMdjUuY8R4iArsJ8QhEbbd549epsHMdeeGPJ8WZ",
  "key10": "56adg9EQ8upjLW4H2JomsSs6pCSegE6k1NiGZBEg5BjA9mjwsS5XwBZmsxoEBoJPRLcAKrHRvjrDH6hhBwt3tNQP",
  "key11": "4fzZGE9Kqs4PpfxbUM3sXq7vTqkryNCRjvRJyVVtEUcqrQK8Rub3LqVimMCwMX7if5YSDspKytWGEHZEijCEExdz",
  "key12": "5138pRi6ofeyY5tUJgzGZZgVNjgwaGgzZYZjT5AgTYzUc3fVMG8hJ9X525CTY88Hh1hnaFk3hMh2VY4pZTaBhmbJ",
  "key13": "5HD8vppyAmhW7hh69GJX7c66YMAAj5pEWA7FdMGevdRjva4k5PWigwpZHCU1U9RqvnaHHRefn8wKnsxpiNTzExUT",
  "key14": "3uVTyrMDmzAZtSqXrc2wJDtbN7jr9LFvQKCUSxp5Liv4FXPAMPtsQ3TxJKxLfe2MUchR2kzCS4FNcdfoPz1ZkBqM",
  "key15": "7zunthTPk6vmvouYDNRLsGuGmAb7no7cnpTBxZHcyTZj8e4EtiqNYV7qBS86Pmdhm37qZkN91x3Lffzfy9SLQX8",
  "key16": "51s4eM5zP5YgqVY6RQbxZL2S43KGfuMqCxTpSaQSKVwCpc9DUqqmk2VN7C8hAXaVPcjz7aQAg9d9oiSJ4rtcBQVV",
  "key17": "44PWf2wRcEa84iujKxeQV4yV2DZG5V3UuhZFSW5qFyRNHhTrbUn3rGtrjQkxwUHb9Edd8L73nenTNKGCmpZgHdBw",
  "key18": "488Ztjw3eLHsxVBHhC6cQkofUvcSADwAuPDwhgvnNuFCwKkWgV2YBNYub2kXirb7zHbikFLMf9khe4JgnmQTpUKn",
  "key19": "4E6LCZmhX8HJnVpyfYHExCHYYdwBA23uKsx7nsWAWa9h1usNKzPCksijyzJi4RYxTyttHw9mXA31MPzs3AQoXies",
  "key20": "5HFyr7YFCWKHtakqeAU3LbA6FxMjwTBpYpoP1oNgU8JnxNftBsxmGSJBos2sc3E1jRbbBd8SkB51FPv1yozz58Rn",
  "key21": "KgNWaucGb83fKvw8HEUnkEVfRAqTqdAGWh1xgcUsFQzQECyGF6ZkE1ueJkLikC9N4tpaiTwRdCutZ3gV3rCszjH",
  "key22": "aAJcE7Jm2t8GTgEZuJjATiVKiuBFNZHwmnvUb1dpY6hE9Zx65yVDdCJMZ3C4exoGBXmsNqqiN3TdZzr25LCfdLU",
  "key23": "2GQjT8y1A3XL9sGQJxk6L9tPkfmJsCoEPRtsLpPcYBrPsdCM6E41fkXy9L25ZHKxW748FmrUh9KhYQiVu44XWobU",
  "key24": "4p5UDQXcUyvTNjxHxVN36FQ3jt6zhqQWY5JY135MbZt2bZjNu7SDyN9DndFvZdVgccmYTcf796tYdTC5EMMtJWrb",
  "key25": "4Tf3uZRN6tQtnVV9wVKbTG29NWpZa5rr61NrmSUGuJA8C2XMEqqek7aLzgmvj8AikepFFqnkBVAJj9NSQc1HXGpr",
  "key26": "5j5X2sycXe44kp8hKgJU3gqCV4WswbQXUWSjpvScNvtU18f7ECjxdFBTXLxNc3ZHA46rGc6vrkhjZZtrfbLH7NQE",
  "key27": "4pjNwr9Wn6wu36pKvxjjs8mH4Qfuq5uKkBBpXNray7146E1jbUq4p29uUSV4CEckkRezs3h1279BgKehr3r2htpc",
  "key28": "4JuDepEYZnti2GR48SMkXAUCWbDWHBbpyRwGSTFf8DStNos5QtNRSv6NjkYLTBF87UR9zqXk3pXWsYgpQVTtA8Cx",
  "key29": "4bygzfMWmnBXqX5tGdAcd8oNKZtnE2gKaZ6vh823PqveZwdSVmJLuCTkk71XovRvPQToz1hXe4udqmmjkk1SAcbt",
  "key30": "2RL1AWBHT6MHYGHzLJGsbkoQJjwnj1oFfNfrV9BrqV5EkEPPY9rNbUtRDz6bfz9Lf9Z8FNhYhTELrp7joVzfW7Yq",
  "key31": "2VvrAG1S4ZuDeNNfnXDcEMGcnwEJmvBrpXdbHwBny7VbzUUWMNHRs2ddCepALFcjLLcQVx2FD2t9FW29ioMuF7GY",
  "key32": "2YofyHXmFMkhDnsjL9wqQ2C3BwUzEvSUz6SCJJgrNo8ubioY2ouppFgLfJrpPYP8SczQ6wGMmKKAXw4Tf8muwLpY",
  "key33": "PuHMKLoNDZg9HyP5spAqvRtZiZkicnvhXHpRZiPi3DUhuf6fgrU4KNcrBSEuSn5Q5rV8zUDjg5vGhPq1M32ChJZ",
  "key34": "4xL8oSstXGjqgsHzQtLkkZXDzWyeDuCNDgWCkamkqsKmAUX8t65yXF4ffBXmySBcYMkF1YiqtsR7sv7fZkYm2Qfa",
  "key35": "4QywxuiGDWfyhTo8F6eBEbHNTSWrWQRCoYUEsAnzS84AfAyMM9rJu6uRAeKeGpgAYNK8Py4hGN8DxKLsjgePmtQu",
  "key36": "2azyF1GbfUtJMtihhBUunqwCaPSsaG7o6Pee1maJSaEGcenAFTVQZZ28axvgzgse5EscFTnoaSnCRGKURn8esyQY",
  "key37": "3N1iXdvWY5xD2jwLZCLj13YNJzfSCbVUNqUUnRZHoF5mv2qPQ3ka5Kdgm6D4x6FDaUBNTiQoAx68dLSBMxFRzWfd",
  "key38": "2hJki92LMd4xt893voxVTXEUTWpxwR5zMkT1s2oodtJmdYcqA6tCkrZiBfGQ5xTgPL4vBdCjK7T1JAMtoex4SKe4",
  "key39": "5WfjsL24SjM5CP1eWNoKecijVgrRWwTsLbtqhoAQhSvSgcTR8i2mQRVLK3TxPND3a4pb77pmh3eqjg1VoWzAdyMU",
  "key40": "5usX4ZVY319GLhPk9N2GPa9J5Ksr74sDmC1dDinRH7Lixd9EiUD7MX3GTXzyLJEdEbVKy6LoWEkwNUgSTRDZfYhN",
  "key41": "hKYomW63DTLS7VgHWRsWU9wZNWG6mrJwBvzgSrSGTWwA3yN9Vmaa9GjBfBonPjtgkLhXCY6FiKU18Q1Rdmjc2oH",
  "key42": "49cirY8x6V74XVpLADsLes1QYXzrRVNuk2Nf5G4ok736devy1BRHozVPNfUYpDXudVHCMPWWKVgrDuCw4Z1yxRmn",
  "key43": "2Jj46SfyRSzxWB2Gf9shdGM3c5m1CjLYmcutx4DtsRkisb6XbsJqnVU5js6vvNzZt7Unu6d24z7dWpekgjz7iDYH",
  "key44": "HtMPdRVYGcSMkm39cXWt9UcJRzBsjgmwADifqBswEM8dp1MDUiYCyV3kxBT4oyQ66ep6HMFHM8gzBPeNTBDEjcD",
  "key45": "3RxXwhj3uQtAVxLjfy1oHbGX4CdYy7XoMwr2TgggKtA1bFbcPM6NSSKSAKBVbaC2wBreGzcGvber7KgUjUAkkW9o",
  "key46": "5X7D3ZSRVMTRH5N9BKT5uRzeJdya5eUN9ekcf8sL9RuS4QNhRpcG293idQ4BrAkFfLgebMAgaLaeowPt4PvCGNA8",
  "key47": "43Xv3pNtaGAtuFtoi3szEB4A8MqjN5WstP2F36q4x9PKXuBGZRgTYvBHrnEpzeUV9fSys5idWxxq6pgit4Vy2zbH",
  "key48": "29cCPg3Py1JMogdF35RFFRbCqwjFzURtXsskzkJ3YvJwuAFK6PR4cUTmoeUu4rT44dh2fvpuM6H4KLbNX8Yg6Ew6",
  "key49": "551iLvS919tK1DWHtcWN9mn63mM4UEXFEWSrBovEXcxRipMepdyUDXgsK5GSd38JRvUGsCqtrK4JSq75hNbwvwD1"
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
