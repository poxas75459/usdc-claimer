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
    "2kBtRkQXbo2ACQ71v3FLSpSrep6VpcScwWpLapQn1YMrbGs3YuX9m5XH3ZBxX4v5MQjDCZ51oinaAnmx8NPNRxbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6EiqJyGNW4LHgqvWfK3qGjZsSXCCLCjjGyYrKomNcMif8sCjepgLDduEMjMCwnHdcWrzwc7ucPHMJ35FAW2u63z",
  "key1": "3TV11bq1Y1eL6EfnntUbzP64DC9dHSVCAdSo9khGKLTx5pJYPZbhaEiv38wP81djSR6zjtfQgKjNmonJ5cYnHMxw",
  "key2": "5eUjAmef8aMv49SNZhWPhwK5j9XU7MqTeRWAQnTEkMLXihi25XPta6HggMAQjJtdCsrjZgSX2YkH43g3PrkEUeMF",
  "key3": "2XiKiZfk9rJYiEzGhbtsyX2UUKTJ3PVEsV9DeabT1HNSUqYUDjFzvGqcGiXa1oJCL62WBvqLdRLMV1k5iqKnBTZy",
  "key4": "3RBQ17ManfwhmkzEyqWV1K223vgc3ZA1VdhgkJJMSV69qafPBE3btvqH2S3AwQHC8Dt3EsPB1SbCDvVvJHjwwcDP",
  "key5": "21NLod8WY4eHa8eivvKakxssjHFzQyhDJEDDqFJL2v3XjpxgdehLbJZeL1wAZQbxWCSnSue8vZH1kTkF2M7jYP4g",
  "key6": "328aFGbUhTyJNG2oQV2LLHFBMRDhk691Vbge8tHc6UtgSD6vccRoja1vxhCjJXMKM7S5mKxbDSdAhPpTJ3mBYARm",
  "key7": "v1KqwQomRC1UyaHVHXAKfmiAmutpZdTk861WuiJp21nQhWsQCqTD5Wdt7bzHkn2gBSgGpby4na2jwkzqAZuhQdu",
  "key8": "YLdK4Kx3QWXK7c8jGxTUyxnsCkhC4F9bwLupToo675mJMyd7qm1d4VZ8NXKvcMz7KfnGmxQJmNf3Cb4FpvJMQEp",
  "key9": "5danqjHWDgqg9ihACCubBxU1fsjMS8X74xgCqjK31o8tn4VpRtKtwV7a6oASBcnHsGxF67SxkUSXUCHmhFj1qa5a",
  "key10": "2ojEiCFf2UTPE65BmRftNhRsvaJ1Mh4oiVhcjU9jq3fSc9kt39UYcUx64Z1bsd92eW2aH4QGU7m7EgfkAut1RyxN",
  "key11": "38R9JAg2kbyVMK8Ca1RYSJj2WD1pRp5dXMkQyYmTXncmTT2oBWapFkVGmPyXo5XUBepohcyh2ByJz94cqL9Chbiv",
  "key12": "2z5NcdhVG5LAkcqbiPhJVB7mpanprzJLmLnbS5mWDkEup2akFqQwcGLxTEyH3Lk4D7RFV1k9awhih9JcgZvTSZfk",
  "key13": "5RUi3uKAEfJGvqNfrJ1F3wWXFEa7DZbKkZcxkCEM3XKgJXK9N7tZ52pQhmTKYWDi68Vk6k5fWGj57xApuXDA6G2n",
  "key14": "5vmnoMD371Zp3mX21VXpxhfyoy411ZPxXvntWEhoZTGpbVqyFJ6GtU2twkCdTu1oovhjTKzLLuEzjf13ZFTtbqoA",
  "key15": "3W658qKD4Q9LvR4EuXFHRYokfQVHiRkpCdZJfUG6isZ97SiMJZCd9L8p9MjHbBnWzoCjPXKztJ8f7hzXy875PgYZ",
  "key16": "5vojxkCTM3ibAo49M6hWYtPuaG2n63NfE2YDgwbPcSU6LSE116tM2PFeRsco9G6fBizynTqKpodNs9FhgPaT7aX",
  "key17": "3kEg3JyjDS8DWweWLQWdMUgfEb7SZPrE42jm28xMpZTnCCL1acJGyncGpsF61PU7P8rq9GTRr1eSjjHwpcSRQvvP",
  "key18": "5urmnU43qfCqraMZzfLASfiQXgauxgrKWLTQAQxkvzzrCC3EzMxfMyyGeSDtX7oBNo5swEurftLgEkCMCBWCEYCa",
  "key19": "z1BDaUwuYww3phToiBRfmogyBQS3EUfT6h6MhXFG1G7E8kpMCZMaE2ge87nakYGZnvfo67crSNUWRdPLJ9girgb",
  "key20": "5FCKzwRGh1fBDD4mfmYkA57grgqK6RZdngERwZHxx8JNbJcHiBARXUit7P9xCzj3gAm2DK7aHuTDBs6DvRqt552T",
  "key21": "D3m5FpNSw9ZVPqNmoxcRhYLgwTJZHsgSerjg13f5eWikbmarm3AQ2o8qraKE3pwFWF26q8dcbV8RUYphmnDdnNw",
  "key22": "25gEEW3nGsZsGPxyrEt8bkbs2NkRTWEAcY6UkUHAjks3gKftGjDL5pcfgiq2VQ2CqHBzd3S29R73XmhwsVjfG7Si",
  "key23": "2bzXWJPcH5izsiZip9CVAaL75Ed9pH37hYnz1D7N3rHraQMpEiyZGCmqEQreBPGM5XgkeMdS5Mg3eVdiSx2cYAKb",
  "key24": "ivX35rFmT8KzLek4ZL8viK9haDabHmf573rKtW34Gb7aeAYorgEn1ARRaw7U39Sm45DzR3V9ucPZYbWs2TxuNVc",
  "key25": "4AyLgwV1A4DWb1xSXo6QqmbNTknLBAsGR631uwx2RKnPuNbEkfEbXwaxKtSLTN8Aeo2bvFn1KTNYtemFjKDbDBsm",
  "key26": "3U8baeE6F7PYhPjs3shrVcv6v23pFPkHCJfCap2cHbU6AqKk8VnCbZPjBo68x9bWbk6YEMqHmwQigWXtcWBRCnsB",
  "key27": "3y54z2aDEdJmWwBCxoBvCDPQEfMVFVV2CQULC4xxkTnMnscnUVXvJuC2phq1D3KUBUqCfdwxWrSiqueYA6eNe7Hq",
  "key28": "2wD8VTzMXJxSFHF5jqFRxnT9GCovPuA18X7jEWLQ8tbeWZTZ8sEavRgCED9tuDgfM3dDi3utKQASJg9g9yocv4dy",
  "key29": "5kMTFJkynC2esEX1yNErsMaEnjWZqf7RsogWc9x4TNCS8ZA8Zz6FXr8Qi95PgFh1hWw28oCmbNEQYB6JP7Bo1KBn",
  "key30": "4WUMP8d5JLBHGfrZukNp1gfh8vga6gMFH2vsvB9rLDkZQZNM8eW1SqSyL7deSEw9G9BgadkmJ74yNmqEe5sCqXYb",
  "key31": "2zWw9WJLy2ZjjGsX1kJwqbYnpVn1BSAkY4MmTUfnxzYAjjuskeu21Ce1EFdepR3fxJGWnvekKaHKCHKxrUgiaL48",
  "key32": "3eL7MMAh9oGz3aJ71Qr23SDGpKnGhik3KPqKFBuXU45wUeu4Jvm3PBLu7pks8RaovBpwPUrxVQG6KyN62joRM8BC",
  "key33": "2gQtnjaJpeAr1kpA2Wn4qC7ZGQQzUAXGP3KfqPw1z3KA5FtPKu4wmPZq9EncKQ7Tz7pPi75kH14PpwBcuUStzNfm",
  "key34": "31no9ydV7ZKT5gnEnjgENBVRMyUzQMt72T3FM1w68x4zB6VXjjm539YYRZFrhuiYwYPWG8g8v5vodjXrtGMf6gbL",
  "key35": "5u62p7J2Pf9zxuPRGbNVzkRw2G2oviz2ikht9e7fYquj8RviijbAvik6x43nnDkG3Q1fzkZgdACQf6dg3S2QR7F6",
  "key36": "64DorqTHfUeLN9mbpos9DrAhCHtCTJK1JP9Wn5ebkBtuezUv7CuxEfD3DVLUWpSdZ9o7Bz29zGxJTivL7WLBmAak",
  "key37": "3BdGZJFTCKEeG2sawBtWkqUDkLEwTgdKF3gHzbk99chBTkKs1RXuotuifKwmxHkC5PQPY6vkY1MqsJuSMcFaGQBB",
  "key38": "3JLx14VFoQoyvtbddy8q896W1CRiHhWWUH7mCnc5rdC4J8ooan2RwUy3hiZ5HDcf45DsaihBHjtngSdSAVP3CqJ6",
  "key39": "4iyPgGcqdLUkBgZt9ctk7ZhzX6n3bbz8WoXZdNB4xoeWcXKowkFX4WJEXyBemu9ey3Q71GCCqxs6Hem4wBD1Efe1",
  "key40": "ftwdxdjdu9T7c6PdF5mY5KLvxK5XaccMG9sKiNVHnxLLiUBnBTsGpsxLj2PJvuHFUdVVXSc9Ra8pd6rMATQRURn",
  "key41": "5BrNqTZDazBxBEpt3uFdBAPPZzUT3TZ5bYAnVG1hYem7HvThumvtuniraxer5Y3yuTn5h7MJdWauYYW16LAFBDau",
  "key42": "3n2zWYviAe198zp6VdfQeQUrFE4PUBVJx21QY8mWESyfvBExiVaVYh2EjCXpMLZ6KsJqfDxxny8fbDsS9wFkvvFn",
  "key43": "3f4FRVAENbyFA3TKwgeWVQL98rv6QknAzXz4xVh2gLD5ZRfTXYHJnFnQwZQ15vy4kHRx2yxSWh8ysZXcuoNVBZjx",
  "key44": "5A3Gt7BTe2MKJ2nN9E1R1oVRAmT9c9chxWrZmN2bfG1eGzfJhopj8mWBWfRhxa62ahbwzoRn8GRwdVeJ6MHJbt3d",
  "key45": "jwha22BYbyixEAeBNSsT9snnGuFTRYvmpUB8NfqRuijzYKXS317CWf5NcXG23C5fJKqu6p4xABLkiq8QSkABTUk",
  "key46": "4dzQprnj77upjByrHYSpeZi4BFiB87vmwXbJ2xpcAUs2M3fX4KneH9mR8Fnatp1qbV8Cqe4HzGCQf3QMKMawYWb5",
  "key47": "2mRaVbpm4cqHet4jWRt734TRvAduPsK9qC22zUQzgRV7aB6dp4UYmd1bM5rCEBVCZ7m7DriV66D4cZNRMBv8NuRX",
  "key48": "2y4yr3xYu387UpbrAULkW5xoviyEZHwQQ8vSWi5LPkNGp839bsGoHyY5GsWPVhmvw4PK4XgRBgb69eDFVVMb2Jqr"
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
