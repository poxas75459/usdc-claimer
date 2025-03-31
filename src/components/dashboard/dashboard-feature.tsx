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
    "QDAwpDia1Pv9MmpYzjusCPz8fDHwZZw9xhxrMdFPCajmqpSGmyHQiervzWu4jAQ5LetJrN5jgUc8GybHfmSZHZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsdnfJDSGDEnmMnbjoew7Wjw11oNniXN1Duo5EewML4866hQV7SFtXkRyda9A3vzLHfVxD3mkkMfcp6mqoZgoua",
  "key1": "5Ar7wFx8hWMvjWpHT5kt5qUq3d62byrCLMjmY2b5d4tJpZwai49oq7gyB42zrjbDk873ETgQfzBf4eqPfDuHV95f",
  "key2": "53NMNn4psDdTpCZmYx6gm6XQrzLez7VYcxzYAkE3jHeoTqgNc5zQgtXU621dzbrK3SYRUeJKAKcpmMUWMjinafts",
  "key3": "3j5RXiRfgo5VvB6JA88ZCiRT1izVMMJyPY9ELnZmMrBq43wjKxrWrJK1ffMzRQc6D8vTh7VVcpyav6yetiAgKQKy",
  "key4": "59FL5kceWUvaEww2NZJMsm1rC4CQKBbFE9PDYVF9onTGPTjeNp1Ni49HQGWmSxpwgXbUFZ4Lx9ciPTbfEVo577bY",
  "key5": "63KMUwYLd8iinFj39TuJMjSkmwxZtZXjmu7TScQqsPo6ibgAocJE3Fk9DwdDE3EVZ9XgcwG1sJb3W1qEkgqr3HVX",
  "key6": "7swZ57fEjy8hgVztZSzjVQbkXZtpgrWJAKkp3XLmQz15sFQyUCAW4k1gJuGymdAgBwqtrnuSDxCCc3TtHakXYqP",
  "key7": "3YTj75Wq9LYMTEWuPSVAqwgWwkSCmEWVrwxkgFAUS6SHaWMqiXxSCXgdo88j99Qk9WAeNhhNT42ppBLMtxnPRV3n",
  "key8": "652gxLjrtb27S3HMMHSFFE64yz2c56EoBPFv1Z6yL97rLN7XRjwcH8hCPAApzsCoDrzqu7sgVJQ8M2mJiAPmHtX1",
  "key9": "31SCgDVMubGskNF2N5ByfSbBuDnXsuy3XWEx2tdLK7Yrwc81HQrSnp4LMyaRrP9adc62LTgUjfbATh4ehM1M84Qo",
  "key10": "5t3wiDfC4LdupRCzB47kQVfh72CPq68wP56JFPymdpV3MFoRakMSbey3DYjNJXpPspicbUTmHSPXZ3qZzLGsUr4W",
  "key11": "27ZSj6vraSjKCXwKWWwvzgMSFQQ5zicG8nPhtuARcvuHU7SBJQHrkQkjbPuVX9mz7pjL7mwJ1T3hj1u9zswrofrQ",
  "key12": "4t9477qceDuppKddxUVaDiCHE51Wphb9LEHz2kKSsx52nN4ofEU1sqTJb2i17S88vTwTzGW59xQfZq9ymXkiysHb",
  "key13": "Cusg4owrcZMBXTxZKuGLeb4vjBE6jGU3p2yYUHy9mtk8sGLYeUGwDa6SXFdjVTySCepJTtajocwCiy1RHtpHNJ5",
  "key14": "3bQGpGYrLdpLkRzTuYkxUQRDHZiCL8jHjE2nuG7479UzjF9PYuLvVcCEdXHBY1i71rrnwqY9UiJSu1QPpKMA2DK3",
  "key15": "XGwFUazJWPFuUwdu6f5TA4dLjdFdgu1PhHC4JWG164QRQpT7LreGSC28Y1fr7oJNvZmBH5rBNxhgxWQr1ovcsa8",
  "key16": "42pBvpLvWh1FMYWgy5Ki874LwUrWEUGfGncQAhyyGzuoWBiuwN34tJ2JaDfcquNrLSCjXdAFy3CLe5R3YyzRmggh",
  "key17": "2P2GZqNaATLeUff4JtnupewUA6Pw5rfS2uH8e72wCcQLT4f6mTsFMGFFnXyuBCo2ptrnAVEMraWgSwGXGwgrAXYc",
  "key18": "rstjXQqU1PjDTGauEhBoV5mvLJ4yjoeFPvhgKDrJEm9HMfoty43mnuQVCDWzQv6j6yPHiKskMkudzhMZWzvrD9Q",
  "key19": "K3Es7Ry3AMG7H8mzAPaHiTY9qWXW7k2L6DrAaYxyHj8x4v1AvUPyvUCDCVSSehotKFZegFmuSrjakaoHcy9eWfu",
  "key20": "GjXMMLUVQUYFbY4hDFUCUrvNGCxXdic3x5rCJR1nyEKFZJWrv2PUdcjixVuMrFU72eWm72szXCruAWrYNJczCDH",
  "key21": "5vcVw9KR3fz69mECBHCeq7CyUZma6wC5L5v6kgjj3Yuszf6FuwRBVGZ17YsKPpadpvgJKoF4AP84V48g4hNZebyx",
  "key22": "3pHX1UnGaHgNZYqAAU7ZNDHSKf28viy49R7MqytxbHeSrUoEiRqEZv53yxXCas4AhHeiydeswL4RY6DCw6yg4b2C",
  "key23": "5RxvmeirhAduDdz1LDSEBgqoPGPkWsXD6JPbiefhfRYV43chApbMj2Nqhz7dY34xsXP9ngchNmFU6wTFHYPR6PYe",
  "key24": "5Gadk8ZPdmNYBCLnpZ3j8Ewc2TUirWZdZmd7xUWyiiq69xqT3qEHNBT7PsojxVVqgUP5ordri21iFCWymDDCmj7e",
  "key25": "5ZuyQ4EBtcY9izJRgQPyjxNsSMxfywp4TFAuw98WPBD4g8Fo938RfUQZ3nbDg6Pxm49RcQA8apuHPbgLTWe16BuV",
  "key26": "4bWXSZ83Hr8iRfxvEbMS9zC1KN6pybEJ85YBwQ847X3QcpyAS1FKqVEmZ1FrM7Jxo7jooBPM5hE1cwPNK4WtVdkT",
  "key27": "EZJ39P58iXSvDwjetmKtAaWHL9gvdhBmwRNwgdz3Cs4SzUrEqoViyPQAkuddavbT7jSuFyiFEpmLviooBdbS1V8",
  "key28": "2deqtCHt26HkMZ3bN9AENKhnqNLiJwh39xei78c8g9SPDbwwLNsAA9UBCdugG3nPa6yQYKxKZ8CJKWik8ubyXkDU",
  "key29": "3xgFJmMCZzugwJt3Uanz6tjXkFaHcsw7pZmF5tVijnPDpBCPsxnGbg3oKa9a7bsxHFNcVR4VRusb1fjeSxsxEqFr",
  "key30": "4S5vupS4iwYBWXn1jUKh2dDHKvELM9qXSSZNLko9ztE6GVPTokXT74SZ9EFY15ybiKVjfgqSAEsWxsQAdKVwj3QM",
  "key31": "626cPE1qXGrudt19HAGtPC9MmZAyo6Lbs6sESbjVCkJFiZfiBkyF3esQzZgaKRzYEfkneze3Rb2ZARHrqMHXoCas",
  "key32": "2UhHzJ9Zcc5mt9crhugrKAyaWva5x8bP8NLKPSL9mmB4irzKizuPqTLfBj3Fzz7WTSNLDKcYP5YMoeos7ZDnktzU",
  "key33": "2k9BWBDQUgCCsbYJQYeYQjUqX41jd48qgJuFEdojpuWqqZA6JJidJXvwdrD2q8dp21VTnHUgHC5Kp6a7Ga4P5GFS",
  "key34": "Wynec4sP8CwL4ku8m917pyQeMKjQhnEf18gZUiHTqwc8Xmc6ZJExBttm96zL4G9Xvdu95rPB3Dc1WXvVzvHvNw4",
  "key35": "3KfdKN728DiRwtpmx5uqDpzxFxE31D9ds5Sg5cct7L4qUbeVbu5BAF5sFSUVjPPp4DQjUKTXj5t6XAFetuGuc3bD",
  "key36": "4USJ8hfSnRFRGCcQswBcKqtdLEfumcFgcbg3JUVViDqXXMcFrr9VpBGrqArykNvEheUAKyBhD3vWUzcqmRDsPtqy",
  "key37": "5tQgpXgdj4fr75UGcjsWY4699eDyjoou37pZjkFEmVK3fTvRkcGYEeak2cmkXPHX1R7Pbbsug8wDFaJ9i1ufzunc",
  "key38": "4fBTv3iBEAY3zX8yNCEmoZfunt1WfDuhnpUrryAWyc8f9LJYXPXNtxDsmEdb4W6Jabz8D2EpoMHcgESXLmSCEh2Z"
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
