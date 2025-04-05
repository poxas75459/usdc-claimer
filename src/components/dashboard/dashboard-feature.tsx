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
    "2jhTbj5qy6HPik6HGTVKKak74PwCfkheVbtpyMzrjmZAxcTQnw7trCAq9e71SZnSHfx6mTJShHEQdynNqzNckRxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Coo7RSxRa2Ch4WUkZVNn8vx4wZbH3C9ujaxWNaRBmaHjatHk7izyHMngs7cANtqFM9xHTJXhnBnpWq4QHzMLEHM",
  "key1": "2YZrw3zdxkZ6RATM7ju8KHJ6xQxPq56LyACAtgZ85g1KCmMs8A9mUmzdNMsnwq5C2b8UJDWmkqeTtqZ18AFg2CTj",
  "key2": "5JJNiH4PCLF1DjTBGdnEkxMQF3niV3UJGorBTNu1bgF3nfeyN3Pigqe2PmBy3GLH851aVqkFuXBVVApvxRMoZ3J7",
  "key3": "5fEf9rLzGHSnK2xUT88GxBQQXTsx4xNxtkQfbWb842KkXN4hr74ztkuYobVBwJfYAc4DEqbraHNocRqRWf8kM5yj",
  "key4": "CpN3V4xcHxDyZieRNtafN5FEoceBevmkGzfjdfa8KCNxjaecHEhwz38RqfES2RHEfgqpbGCPgVLSLb8dWEDVFCS",
  "key5": "5NPCJtpcFZAJPAeQCkeQbrabpLt5UypNztYNyE8GfWp8Lfik8QE2wtKKqDEbL8nbmvQfo7dQFYqy1tRPxvUHPg2X",
  "key6": "4iDnhv3vZvrzsjojxRgMiUAKwhXnojC6p2KgxwGhdaoAKRakY7Nsw9XeRMwb3EksgeCYBBMS7krTz25W1yd1iDvA",
  "key7": "4RVPU1L38UnhLigzyozKCffpLYnhThJ1hX3t536tPaRNfWvNYYjHZSqKoeUwZUeNvmvquqf33P7nKu9jyeuaiJhW",
  "key8": "5kuw4RoEUH1r92gR7WSNjEPJfmDLUgDCAHkA1bMsyMt9fdoqcTCVSR4pgqvQ8tCno3UWBZ22j9v6bRmXd62fUtWx",
  "key9": "qWhVevEoaNg6dTeTBiS3xdaZmaMcPBnZZ14RzUi7VDNdAWgDzifeARSbSy2nTF65XFU55hwujm1LZ6gBAiFmPGb",
  "key10": "2fqbka1E3M67vumzYqGqbM1Nd8ekE9W7vaDRQAn9egt7Y7hJiX1xvQ27BpgZvKWifuRAHAbGiuvmGXf5Bfbgs9pu",
  "key11": "2sAuBvhKsJ7RsUDCgYRGK3qMuyfiKfwD8wPzoQ8NDDUD56BvTEbDXGaBhwEgGyv5TojbcotTju25uv7SD92pz8Z6",
  "key12": "5bwByGNqxHze7ruXW3FpXrSH6c1nQi1ybf8o4JpASGPYJ7xAyeXPqW7cj94SNv3K3jeMejkNtgXkSVh6M7T7QZeV",
  "key13": "3CRMEpP4BSh9F9koCAeWASbrDXBYAiiKZFXyBzLWjsKqZvGbf4QSKQbA68nxaFsL8rWH79FAdXEnzAkJ7aWwhVZH",
  "key14": "5cJFBeyGRfWDhYVRymrzV9X6WbxXEWimeyG8miPsqAFDdTGkMM4qUj6tir61wt926Yifant1JeQQyNqi89EGECKH",
  "key15": "2LLscL4sNqYaSKfejDyExrQT61poNriWB8Y8L7aKUDJc4VV9u5HzNCK9jRZphqRekuVSvktJeuyvjcDhbFEGiPnw",
  "key16": "4RnAFkLsexxAEtDbVkNaKfdP7gC2DQfZtawcXNoenq767UJsBsaW8vH5ZYJnoyT64zaePoGh7gVrVr6tgjqQQYmA",
  "key17": "4UrS7iWjVSFzhgrAZ3sCefXwQgyh3FvqMV6HwkRQnC2VKNAnUpyEWV94JrvWY5f52UYnxNPt5T3LQLoieeHzqEHT",
  "key18": "2gkcsvATgXe1eWb2yXGq8zQsHLhUSAHKE1jzJiYtCTWbbjBfv4o7NokP1jhuc6zrcGv5foBrc2uM9LVSFuvttzg",
  "key19": "X6SVCMBennszFdA1yWSxBRzYiuGoh1Q2C7weKjLhPG5XGXyYabZ3d4VtsUw7fhAHxTxE8oVVStwqVudGKYQ8XmP",
  "key20": "5FBkn1UUGjzAfRpFb3oPjfhF618rm5dkuHPupUi8punVLpvLdpHnTqGCE5Bkn2e3FJDRQaaccPRrF9BnnnFQfTnv",
  "key21": "4pYuWrKAggGqaQ547aWC9RHaTqZaLUtoxzGSYZRrnk8M6yEghKcjXnq9cBu1J6gQnAfmMmxiJaV9EGoQn1kkvTGM",
  "key22": "5MZtcLh64Ms6JxSwM3pUNKsyAnFXVXera87xv6Axz5f1Jt572fuigD61jRRuLBAkGEkWenfKf5Ekv52porLQyiYM",
  "key23": "598Vtoo3TQceKh1Fi83D2NoJmDnyJ5fXG8YjmQgKQcA6TBhc89AjUg2ySWQc26aD4FcdThmCHk7L7ZDiejZNt55G",
  "key24": "58gdFeSm5tEUKezhYjEyVuHnkNFEMRHspgn89F1mMmhCLYU1KwWWbusiJHPSx3tE9Eyy2tmZAL2NsuT4PiAVx2YV",
  "key25": "5MicmAq4u6Z9dJKVn1uDGwPFwcFPEmAQ3vv42J18epGusYyDSdq84Y1wSsayfXScjJNwogdq2CDyJSn4kVZZ2q4J",
  "key26": "Px8VEt8QrEHa1bBan1KHHfvWvMgJ8sHPfPKYEvRA7yWSQvRoJRMhVpHDqj1MfdF5V7GERJ5i1VC2oYogG13By1N",
  "key27": "4QQnSYuc64n2SXPc723398xHiimKiNRGRrKyYKvDsvFHwVeKmtjqJZXhKctAMp7zchZqXREPjmeKCroZZ6yTULtS",
  "key28": "5FQDuWJLHECjayYsgDVTJtatSxdZDoPqeqwsZig27TCPv9ovK3UK5nUNJNjNYPWSUu3zhZ2LEL6WLhrhHg8E7ady",
  "key29": "5o5LMHVW9MNswuaJ5YdQdgrrWdNaJKVsAMFaH7Zx6TG15qgcyRbjncFJt6upp3Vwy1o915zJg59dt2Mg3DxHUruR",
  "key30": "4gSZKHtvj115fFWUvmq9hxCPnVw4Ys5iwBfBA6C134hhNPGzgkR1qiNT69npVD72cyKiEdHrxzTiY3STMorfT6rx",
  "key31": "5vKPVWHiNYpJ21vEsqhAY72hxc6WThtU5Eo1ML8DLskfBigc4NYw6m5LomRujVBdb9joUvKbYyAAMPsrii9QH43T",
  "key32": "2PxHdfpoJLfxRae7iNiJtmCsRdngXes1kDjfAcUuu5EyQWCpSJrBFmmGy9dLzbBVdESxDDaGhCjoFcHwbZv5NTRp",
  "key33": "2FrWFPx5zvkzMbaEMm6wZfNc2X15vjTHZ3pXdh9Dq1x1pw1cJHpNtySRY1SmvvzaN3vdbWbXs8dCZpVDDWTwUMnj",
  "key34": "37cmxCo5CTsK9rWxC2vqvBAc1YGb9QP8ZCDRQF8AexvGe2Bv9duiRP7V39LWWdqcPiQQip8ncbnrR2vnrbzC4MEN",
  "key35": "4JMsUj5ebCMinzUoQat6w672AXSvBNMG3cAL5eVvomX7owy7LFNRSvSqQRjtY3QP9EEXHzziF54RoWZa4kWfmHgW",
  "key36": "GCysaWBUcEVbz9pwan1yuoQW8YLRokMuTjqntQ79UUR2XnMd3yScpM1HeMMAsVoJECvpGj3RiJivXkvjXrqRXKp",
  "key37": "4oEe6cH1tdGvRpgBAiMKqjnQjdux3s8jJP7tJAVvG5HMyW3T11zzPEGupd3qoDxddQ473sDTUz7r3k5ZayVcqnMV",
  "key38": "f2MZqaHYdwgQize5YnxozrNYCWVhw3vJekZRNc3FQu5zcFdgEe9F24KQ5j4MVxkdZTYBcm1s7gSLQEXLFMRg9R6",
  "key39": "65P9WKYeVeNsZE39RmxZ4g8WaQtFrDitJzv5FkZKvxaYpKMgRUCs4RjaGnPEd85wyb4UZNQSnkyECjC7fBhgRDht",
  "key40": "4rj4f77Fbv5KYnh9b43YKiytBRG5xGGyKSYrtvxYBaBVapUJgVoktkTL5XGwGhzSNjiDxaPT1b6P7dpfcDxxtTcc",
  "key41": "ViY4sBvysephU7wN2Rut3mBrY5y5HDr1mrTVfaQzmtBLCfeiVFvXLA5w67HqPZ8GYyT1H3dknPPLhqZNXjWedDq",
  "key42": "64Vsfu7D9b4GM8fhWXuajcPtS2KHro75sajneGtZLrgkWM817kWuAXzurAUsbxmeL29UT6cXUFQxhEiYLT964jxS",
  "key43": "4LZpKPBePdfchSEjT6Tnna4ruoGnvKBWX2jBjA8FMRqDSZ3mfvjkcEwBmEe4pRNzkKNpFp2xPELuvg3GAnGXjJG5",
  "key44": "2RLiGvyfbZvYoYUUNZCkiCdsEtMjuEbJcFCHHCeCe8CtyyfCh8BsSxHstAr1mFW7jENZAiXgvRc4PkhgjGiycq7W",
  "key45": "4HkiAmyWrSn5rz8NHYPZ7kUxerJE9WaGE1qiNnS4w4DbLpjpXw7GkSFoPH95AXCgy21R4c1vhmyAWthjzzTvgpwq",
  "key46": "582acSvTuDVh9AoCuXwi8oDSzpZXnGM5icXZAxdKKAKeGxJDTA3DnhCQY3SkfNey3PFDvsTmw6KtrRNxbcuA4ScT",
  "key47": "5vycTEBcTJUwwQ9awn7Tj7LPxUEpdygVoWJFDudJD8fZ1vMEF3AftcW7LTinaNpYUZxNp5BPsa2w3Q2R7Z7Sn78j",
  "key48": "4qTvWWbjnLdnHBQf4sbaYrrRfLSk8o4o1VruJP8ba4XAokWFpDVfsGGyAENBWWdxLygYm5iFq5A4XwuafepVwzPB"
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
