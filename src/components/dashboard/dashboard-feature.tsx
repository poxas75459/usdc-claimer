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
    "3UFYhbTMnrbf3LicVBkVajph1mxZhiEU14JSaw3UACPM4ZwfnsPTf8KB1JcbUdap7miMD9UGJG3gowpGzzyxtZvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5qdSao85GiX9rczEGzEeJKKphxrRD8C6tMunPEMJPoZGmFBxs8Ev6LFMMcfJZJRP4eLsD4SksuF4zqG8BhW5gp",
  "key1": "C4yX8pWD2CMWdAKhTMpC1hjQfdMz1tMAzXxmnGh3BKss9QoBQ6g4Ziz2wXA4kE2MDzoA3oNC9tQLKHo6ddgJZyU",
  "key2": "4qNuAEEHXvwmALnvDu1qodh1FGjs1rTyotqtE9j6Hh61apWUBtBbbo34b9xGeeJptv5UruDaAPNGEijN5WxrhYdz",
  "key3": "5zqtyM5Ca23EJcjXdcjVKWSZuvLrxCrtjQTVD921D156rteUvJe7eRjbqcEsHryn3Tnksew1D4YCPjq6zFw1mx9o",
  "key4": "2vE4DiT6qXrzvyzb3YJzEmoAzYjP1qh2C8b8cQtq6bacJRdGx7F4YeknnkerXDziqoQDWydW2s2Jv1zNM52nGXg5",
  "key5": "3RjEuMRwrtxdb4FPVXZqsr6AZca8DjMxctmtGzS3YhcK3aNPXAnv8YAJQXmLHTUTjj5vUgYfzyd2wvcYFknEYa8n",
  "key6": "5LFLGJH7hs2bYeMPANty6QamUjFRXFWXEihLNKr6WWZthPCJNsZpQuGWW3jWbcXBzcz66jdbrVmGj5WBh2HQJHp8",
  "key7": "5YZaGks7QSvCRjpLvJSzzScEkqBoCxpadQoq2LWuvTnxa2UKBCakM4Xb6sL8AQu3DsFWtQFezdMS2vdwLijY4yUT",
  "key8": "2uEXFK9aPbwMkdGD2neXFJQXxqTnLn2B3Crazq5S1X7rLQpZ5sCPzLwKXihHDHzokx9GSscCkXpaVn2PLnbrKj1i",
  "key9": "2yiPLU8FHYk3q9SuX7RtkYNfYW7LRSR1HSoc87HmEcznRdygXAovBCjD93EJ1fU39vhxcQkkVx2ZRKBQUJykJH2R",
  "key10": "E3H6fpfPs398Fk34Myo3BXmjU2z5LS12pxC18mox4PfRYgBzcPMCBXi8HEF7JWxaGBPKUMJiAB9Z8ec4yvAXHut",
  "key11": "h3ZFJNm5zS3R32owA2LSSPnXNXrhCtCuPUofuH1q3Ram7VHNsAt3jA3ZDecsJxkW12RZxPB9CCqhYPghhbF4UiK",
  "key12": "22JKFdQWWaYFj5CTroxXKMBqgeqJPi6j2GDSq4uWZ9tSrGq9f26MFFKuwi23sMwasYWV5sGza6qhEiYv3u8NDb4o",
  "key13": "2w6ENJ1LY6WEirsJFjnfUhB7Rcd6FUnFC3WgtT8SdoMrsbPgL3wjFkjk1NoW9129c1ckzrZaw7wv4Enava1wmEKc",
  "key14": "5UNPUCo6ikYpZM55cYXCotNXxrrRKbEJoHrTmVUUPjKWrvgL7aJU5NN6CcRstToX9UXmkv1j6a5dU9E1LwuqMytU",
  "key15": "2VKC9NS1sJpvrFcNjdnn1qDxNZWRFqH3LrzzHknsiozMMoyAMpeHgv9R1BNvsG5YmVHLRKEs4ezYWuTLo2vt3q5Y",
  "key16": "2ctag45yohp8Ppot3zTAH3j1ZZPQSQSnbuoub5tUqVCghvGD5EcbRHwKvny4zGuMqqQpcxVNBAiPx4rpEbUTLyw1",
  "key17": "8ncpAkZ967YfXvFiKm3kEf6VgkDVsG4sspqug7rtQe4nPNGWqpQbGhWLqtChn1kp4L6WM2aKv5VHCVarUrDCbmk",
  "key18": "41Jf8aWXs7wvnY8VKJ6n3Zy6apSyrVdsgDiRf9D2DNF8bsc1kwxVeiPBTr2TQccdokGx38noMTctfvrCSpXxVkVR",
  "key19": "3wAvoBy8mA7wPKrFzwhtPCLys1hgzutsmPV1msBhppvpyH8YGWWneJVMssMStuvBhVXjPLDoSzBGcY82FtLZQM6u",
  "key20": "4MKNm59aaC7zZG3sthXspbjemo4ARdMjDXjLxwEgnKPEgci2eNpVsQBZJAUFeJsJLXcPEFoC5UAgZbQhcJNhd6SH",
  "key21": "5BgFfumhmxFbVanW1YUJvmnpVDW5oornuUp6NDVkDGGuhj5tUu3PpiTmAVyQZaFUXHZZH4j3CQMo1PpM8NHgRMBK",
  "key22": "4yjFvzCtX1TPDzCQzVBdSfoDaW3ZDeVUpHwvHfzV581YD8ENefZGukrWRMRSKE3s3P6mNcKQewZq22hPWa9cBfYH",
  "key23": "3eTPzPzBJFbpjqkxc4fqGSouJEQrka8rZzCCZzyZKJH8PWDcKRCE8NJBtriB4cN9gEDDKk5CVET87uEJsQWawwZD",
  "key24": "4knpPYukahwXZTSus2n4f7E8P6ocU7fGBwsmotmgpwcD7gvAzfpUzS1ihjNezpHgwjE5d7HAioNZZ11YB2qxsQHN",
  "key25": "5fBVUj5ZY8w5QPscZKWeZnF5V3vjmbXfh7tH2cCgK3d3mMjwtdTQos3yifFuP5Ed7i6GMYnut7S9Lcgyta7mg5qS",
  "key26": "4XPJEm2tx6KVvBB8KXSHhtTMYa9wYHSCGmgqJNWsedwcmteK489kbMMkJ4eMk1KkBmpyzzk8HtyPeU3b6KCZwuNe",
  "key27": "5f32mYSNDJyrCkfbxicbXykQMEweATMtkFDsimFF73H6CkVMXivrJSwH8QRQWpqjREuFSHwV7EDz8mYvbNahQZCd",
  "key28": "2RWoyG9wzmyGjkX4Bb2opGmCeH5aH6sysbWmw7oKc7dc4YwLtGaEB3mtwNcprsK9xsSuFwh3ufsEFsoU43QkTXDN",
  "key29": "FSWTihVCVbxp1DBCBbUd2MGNoovQ95uYwb6wcvSZ9KBy7iAKAuKsCvs1GmzsFWkQa8sgTVRytyWnb2Kyu5pwam1",
  "key30": "67h9rXc5v9awYLfMTajExM47hGUuUWesuf9cpDbRb7koadagNLvCoiBdXAyYnZpJfW8YMqTC3VyHMKyzEj7wJGGu",
  "key31": "3u4RRBPEcUhKMUHoiuBg3cY4o6vWJ4hEa5YCsgZTDT25XTZ8pKgRv9tMVRLzzbkCXJqSAhmQj9gYFAiBub5zJiBj",
  "key32": "32Z2GN3U9KR9f2XFz3WPQi8ZPNw86vzmcC4TWKHEaB8FanPuoFo3hVAjoPpjwHF4UhErLtpA1JArS4RjczjLgAgW",
  "key33": "5xZoTRUSeyyao1KfLPMd8R49DWA8jtx3R5kY4zg1cQeUSNn7Gaq6EiqEafo8djBDvnsy9TLxRY8VRYpPzBpotnJC",
  "key34": "2SABqmcbkBykXGRHN4Q75EuLYQwF4RAxWDY6T2XspYggeD2FkLwBZyoK4pxpnGoU19YwLHaR1u2HZRfji8VSM4Kb",
  "key35": "5wmcsdPCbHnhyzsQ81eThC8SVJnhmPcY2CJ2wSpcxQQKDMC2Zwd5pnGekaCnx3JwvHBweHxHCSFCEQ53iJeL75m7",
  "key36": "36dJPaNRY1T1yxi1exxtrHmXkyVxrR18AxLJWuHD78B9xSotTkg2VqdTQ6ES7e33WoPZLAQUVWMfZtD9yGsVyeBy",
  "key37": "4PPrpcZ2YEWya2jvTGt1fHcPLfwEWKdxbpRjU7c3BEPUhEaWojCcAdeaPzyYFrDPxefHx3L8pnLMvvDNp5gCdKrS"
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
