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
    "4jHUQhQmGmvV9PumTasDMyxVKAhL5rQL7sueq8SYgmXQSbV11BUr22jciMHxFidFWvxsKD1Jh5LK2BHLGawPk8t5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpWELK6rT7P4AaRSk11N957P1v9TNZo9Rymt7oYyncrQj3CHX6wXogGBt59jm7maWBRCCqNjyLhp2mHSpN3KX1c",
  "key1": "3ktA23m5Pjjm9Hq3T3Z6ugWpfDjBKYMKde9fnA9DS2CCj32HaGfqmCrUT7zNYUAu5jPWXmP5mCgkN4J2wyTtTDyH",
  "key2": "3hkv1fY1B7zwoiq7BnL8UrzcQ3yaQXfrEDT3MX5tZAZ6zTbsdxcdXiucGc76v49h1KutdwfHVRHgLi4ijoSUWzyY",
  "key3": "oGpASAV1Q3bpdh9y7TLR5QReVARWpRXT4g9bc5n7ntEQj8unPXxRBnxo4fFWTwJ2vGHKjkgLkxFmkA8PrV9xGTY",
  "key4": "5bfdGCqTuWV4QUKu6fdKMvrVNmKsnJiuGTSEwL6mSosY33E8UFWrXgWGudpcJFC9P6Exojx1C5iVGMQVqS9nAqAM",
  "key5": "2UwYs1M1H3kjdygaorhwfLmbKe1TqsLdPHJ3NmHYYZmS7nTHgRAn5w62NUNqLCf5gRZa9kJafuWK1X7GbR12xyWi",
  "key6": "3q6TGUepAVpsSJW6Rg1FRwpkPWvniiGS6ELweHuaqvc3eyGVtWc7MY6Myo5hkzGdYnCZZmh1otY3RiUXFuLYqyED",
  "key7": "4wUfLkXUY4W6AghufmN7rMKWHshrmjJ3CLkZoSGu34WnMnui8KgZhbq7ipKyEhvm1RaoofwwJ7zgsiioVkxBiQVR",
  "key8": "37jzf83gbMWDAyyLr7WCiamPJBbjH6c25E2S1D9MDBZDzSuWCJsdC37ogHddLWHYNbGq8W96FtebAxohq4FB2hKH",
  "key9": "4wnURqreN26mVPKkpAgvZUjaFLph3gtget77TzedLfEFr1dAPcZy9hn9FfbHw4dhfPn821jyHHhtbjwj4dsJdhvt",
  "key10": "isUtvjgoV5VDXRh4hciHtbjKunp2RAvhFnBDWRFDpUrFgxy3cUsHvjxA6FygYdkdRfRiGJHqsE4SyUrxwtcg1Jm",
  "key11": "5LmVvrPccD9tpKynbpT58SLvWrRyX8pAxJryr2oYLDS1MaeTjyREsh1La8jGtkVQBtiqLLBJSqXbZMie4Cd45NUT",
  "key12": "3C36rTTJwcpvJvQAdnQGPq9stDgUb4enQ4S8SWaShzWxjyhi97ZG5QRrmwTja11pRD1z58V8DyHvVYtgXyDuCZcm",
  "key13": "4BkjczotBWGiiR1119Fk9jJ33orBV5jqsg1yagePDpbAew4sZxEo3g1zJSiLLZCv1pmQf3yDw25uUEVRyDwB7xc6",
  "key14": "5qHVbx6uW1yHLDgi5FxLyVLitMmoRqTq6HqMRhQUW7yk1nunTp7uWqrribh5UJZUgx7G5WqdJntcgR3XoNu2QctX",
  "key15": "63DANuYhzf3s4nwWhEZB6S4wKtspSwz5Wa5GPJu3GtEeCEkRNSKSiuPWFwSGSYQ9LRxCsgGPjPSnq9pDmZZQmjrz",
  "key16": "3teu3sFixdP738GJwUKeuSuirqNDw8AGAynEerSXt7gVQh5WMUgyqiPL3HYsVWcTU79UusJppjZMqPjp8srzYomN",
  "key17": "465cHnrsqAVaH19Cck1rMD76pZrJiPWRd8QyzmdWUysJX6bZs5AysbkiPBKNZGHnZmFAYFJrpmA2BLkRatStDTNh",
  "key18": "5NoPaH7e6PvBPENcvMmSmy3XEXjRujCVKoWqLh6PbuPaaM9M48pYpLCFgUTC4n8u2pCBCCGKtTTHoVE4kH2GbvcV",
  "key19": "5BBV96EWV3Qji48McKbqadzwBoR3N6UqaesMSJrGf1Lnx7qbcm2E5FA3CgvMwR3wuAkyX93hm7LGTybFc1crxanj",
  "key20": "5AJrb5FDy6hhJih9JV849vL33PavGiR7r92oN3XhjzZUFgwXCqoHW5S22Wr8Vwrazh9ESFQNMh38MyZAWZX45ueG",
  "key21": "5fe4TvfhAVL7G13c588miVsumWNViTV3Sty54YvpuYEcmitMnK6Mf7jEH6RKvxeZjBsdJkh51HAJc7YJ9nrQGz8X",
  "key22": "2CRaZ78qrvfPuoQGV4kasQQnRFDrEAnhMR69J5uJmvwGjQZSf4TUZu6Xbo9RRNzsfic4y5MqtLPP5isrtjqyJPSF",
  "key23": "5RaSHw4P4aHVEzkzHwCZMyYMGWgffCnwREoHMtZF5TRAiHRVrz8UU2Yuca8GsD28nPPBxfcokuEEpJCaCboJsYts",
  "key24": "4QYmraDTEyxxmRyTb3fyqCPMBymQsayvQc62LKqaBGH22kTirWxjLLPoXomGNLTT6gcDjGzwF3dZpX3Fv4mLUNWj",
  "key25": "3cbNKHiAC1rdynjXwtBbhNeQb3nkjuBqWuW1ydis7NhnNAsrR1CWJw5YG3JvZiVxBEQzrGwCpQzc8rM84NB6kJXR",
  "key26": "XnpcSzzTnvGQp5tyxiJchz1EB5W61ktueCjG2oLuvrPhz4A2NAS2j477nC4V9NRH3jhDVhyi53FcPqc6YN5Dsg6",
  "key27": "4WSDCpPy2P62ef8NS6YTHuaPx2g2KVzxcohcaxGAPa86VgWGTa5p1riUpXQdZLvG9yHgJjvgajCggQxHhfLXVbfG",
  "key28": "4Vs1pRaxDDZtFcWhxoz1T3yBUsfWBim9LCMgn1Tkohcv4nDYGf2XKcwE2xb9U9yBKdyPSub6nvHpNbcKUhPMALHv",
  "key29": "2XdkvEkTYfhdWoALQpPPTkftAhpbRLRuHj5eKMsbtwqXUhTLTW66SdmfEtvRQDyF3VKbiiGruAKdg9iXge8sGDHY",
  "key30": "F4RmFef59z2UUXG3jFeww5x5bzuhZ2hSEQ39P2XNAmD2bouX48uvA6BAqN3T8q5YKDy1CD2m2kGKjYF2NQqv7sL",
  "key31": "5Paze2YUJKiYxzdSGy6BeVfBUgXXGEdvCro3drasxB6A6WP2MZjapD6x9pFPJy8QoT6BY31AvzsF31q9SmRcnWXx",
  "key32": "tW8MeKYnSCnHP9cpjiXaScu3wXFrcFGXxGTb8dmtThMxvDtTDDFXyY3YZGjvx6T6E3LT8SiDRZng9RiBJFzXSLy",
  "key33": "3JTRyEqzMWbjpEheqHWx4jqp78x6VCCuMuv9Z78phwwN71m1U7M7k5YirQWExf5Gxa3ga7wiJsbmQbZARfGjAJ8Z",
  "key34": "h86WCtNvHGesjB9qCFNFxcJS8Ktp518a4wuEMr8tvRxftyzfvkpzSntZzFfmjygejWZixRXpPk9ZJBce5Z4m2Gw",
  "key35": "rr2gaiFks8jyo6bRuLdwkmEXZHThuzS8W9ZfnvrEGBmgL5dXhyapkJbYVuaug9PVNtqD3eno11DNqhcFdNmkJYH",
  "key36": "2RGXNEKvkWCnTTZtGSiuCa7v34ca4P3diLN6tN1xYXn2wehJgsGxNw3zdE3swtp1zpW5ejyqm7ZZJENp9JMptskC",
  "key37": "3vR4k98KYqoH6kw8bENrwbaaQ4DjEQpGrxL2rbm933T5kqaT888iisiGFMWiA3LjU5c5MUMLxMCjYqYTS9oLip7h",
  "key38": "38ag7njmc1zwr5h5WS9F1easDq3YgzBSzWqpaUmF6UfgrcEMm7GeAc4m3L7djk9c4emBHrpY4SB6f2ENxCmfW8cj",
  "key39": "5xBBN2QQb32a6MBvMKTYVsVM9CBtFQRZrXHcPam4976rsTXZ1bvNBaaPmQWxaeRixai7JpcwKyWqQ98p8dpCPqaT",
  "key40": "5KebVvaNuR8vNRVdzoB3D1RhCEahMNRJop5JWUnZSYaceynwgKuFmBWBUYV2TqNmBsUvsovpUMiyzHoctC4AqnK3",
  "key41": "CVDhhxGHsX8xVTF6JpL2dE7hsZFmXJMQrTR2SNTEiApfJiJF7wukeR6Jpvw8Ee5HTV5mjjzzGPRwkotRF6GYN8z",
  "key42": "RFHtknBhg45sZePSTtw9njpVartudMFfeJmFZN41Qtc7UcbqiedLtPsc9W8HP7ds8C4U7iTmXdpNMY7CpHHe1wc",
  "key43": "5pCmEXhP93mcyU49ktzFgaKUVFBHw2NNcvUXVEHg5jsZGhQh8Jjob8YDeCKQrDB9rqzVebce4MfApoMXCeMKGX2h",
  "key44": "3a1sAREuEA4PtEzxNDZ874NMCKY6rkh3yKAktiDF3USpWjAgYMPPYdHEkxe8Mwsxfb24TUtcBSV82HuHK3UaSUiL"
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
