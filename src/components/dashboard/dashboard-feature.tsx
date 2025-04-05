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
    "4NmK7AFZYFm46JLdUncftE24oC2F3JJcZMP2R1GBYsuoQp2R4wqwaMAaftyrcMWJN9gM4qNPEVR63a2u4WPZBvvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Q45wtPaAtVw9hMciuF5MkMFJo11vUV966pXM37f4NqZ96ASpMu5ac1DhJopq4hDaDbUGPXouMTkXrD4PSJnifN",
  "key1": "39TKtCAtZzLyD8xQniu4ni6Pdhq5byvFU9UFcXZ7AdPoufFCH2n3d7SnXP5AQjFwsyqRwqgcUuqU7cJNRLgNTuVD",
  "key2": "RYfe9fftBDmbvt11k5m6cfCBLujgLwvwAHt2E2uMy7oo3HvpbMbb6LhvSKqUghFt9Fxir45bXUgYsa2wCeDagUi",
  "key3": "4y7VihLTtwetC1wmkgeGfatTK4RgVZ3NPhW9SL6oExt5y1jLSppuWzz7tXrUsX2Sdh7pJasceNg54m7iHDwj8Faj",
  "key4": "3mz8oadMVzY3arByaWeY67LJKH1yJnRoJD2ASxvTSyhN8xbQ1SUeoTYU2ETugH79f1crs2eXPBJuAqJVAabyfW1e",
  "key5": "3Jhj6kXv6qDheGwpQDEeCS6qjcAJPSnzhbjU9Q8cJqMeJhkhmTHmnQH29C46sntEkJZvCvHyc18pfweFw5fc9zG4",
  "key6": "5ov86SHNmBzdFVmNG55VitbQM8iDEQL7duExTsecBm9iR7mK4vUhSeyk5WbreDnSHv12ChnRygyHzHY3hybuQJGk",
  "key7": "5ENvQRT8mj1HUDV6MYddWrpnbf2EYqy28Vr85n6X7azbZUJ3eytKanRZ3odLXgXidu4rXmEiCnuLjKHkC3UjXTCx",
  "key8": "5NszQeithxtfaYeiathruZdNQHt8STHkrksTmkPAtvYZABEzzwV8dVUNXt9yfqpCBDoHzQu8HEaWUxAReUSUA3rr",
  "key9": "4VUGUuvVBJEbn6Rcu55GdzMY5PaS24pvwH3iXVH8ad2w1ED7NpmD6iFArFNAarGVXSmnE9ur2jxzgeyWVrGW5cJh",
  "key10": "4utxHKkyhxFvCFGu5bN7GB2sK3AJktkKp9f2nLGQoPggQB53CMgsCifCu3vpX7apBjcwYvUTJAkY7AA6AdpD3Xpy",
  "key11": "3GRgU4siywMW9DjnYyzHa9tetPSpG4StKMQTLN78J3hTqpx24rxFwsYpU4n5wj77iNsf1LWwrvbyGqxafyMkQhX9",
  "key12": "5776MgrBBBfdoDe6jxrtUJV8MAcDG2aq8JRQ5yTEWmWgJBpoqYT1ZD4yxycFBw3cYV7rDjukw99oiNAdaFYFF2Bw",
  "key13": "335ZpSxZhGkr2FAuwVwemAYG4TDq9WxWnYAndbKeeXk5CBReeWidB6PwkDa2v5aK2m8h8JiEem6Yh63Hn8U61bzf",
  "key14": "rbxEqfpaRG9evM7EjzKAc42piCdqNDDu2gDLyff8JcmsnFdAPatDdEaQz7EDMF9QLMEWTDGJwTrfiCyqdH1i5ya",
  "key15": "22zMTKwtxotjWbQFkbxAgXKaXRDmn3b1hCbifrYwuboPBioT8osvUL9Lt49xtgaYUo9gGNzhHVAPKAaYJ7biKEmy",
  "key16": "2ra5fwpYsGWuDHqaz1n3PzMP7cAFtykfGaesCZ442PnvtjpDkcxWJPhkaqN9xcpkZ3AoFBL1WKR34L1ZvkND8LXK",
  "key17": "5pdXj3YtPBkjABP2gPt8Qpvy5fNE1uiaMMFuB4RDh7fcbxnozCr69GjLdSjPRWthb7kgyMpCgTokcfKX59mcemCc",
  "key18": "4ZPUjekr5uQ5MRQoapB59sXSgp887KFDaAZTjxLm6TusXv4voQGt73GisrUry3xPRgFR2Atm93oBkJKtZp8ct5e5",
  "key19": "4Mn1YMLF66PgEyqqL4t5dBdwj9woZMA8FscRwrWpsDGGNvWxr87oXFpQBSsY7VCCaqvWQxWZM6bSSFWpHu81j5mC",
  "key20": "4sbcGnY4hkj4Kdur7jmSZfG7icabzd1LmeXmd49kb8rMEuSoNgav5yGQoEaqgpCb6YVsFp166pTQ2Hrscv5kMHYW",
  "key21": "5jEAAbKTLADqJN8pgFnzzGr56XZ1eRqDPxQcFGAsMkqwGyQoxsqJYDfiYzi3rB5qHJKwNXiDkUEPzibEkFLVQPtB",
  "key22": "51Nb1aYEE67yBLD48pHy3B9kQ2Fu1H7ipgCE5gcDCfd97WNtBds5KaCDQvNpiJUKbETohvYN6TW2sdRAs6USAD3A",
  "key23": "38JrdxeygpLQYueKqaJ7jF2zFpDpmSMN2jdUVssg8qMtYeKaZxtkDijk1s6LvqvPHNtY92mp2SMztF9NV5EZn4hx",
  "key24": "3NMp7m9ehpRJwhSeyVzbL4i6t2m57g73JaPzV3CiK3tmstQuNAR3m3sSFJM14YG82ZB6UQW87n28k48hewPfhQn8",
  "key25": "5eo9Z3ZbYLMPNUWoNYQHh1RGzgz5EhRzDmevYokYVVKJrEyYxoGBBHoE7CZPRxwmivaQ72MNSyCXTQ8rKz7pLDXi",
  "key26": "3pBMHPVMiynDdbq96TDWnB3GsisSnuYkYMMK8akWAFe6W2Z1c6qJAthyS7K5nc8qX3c4wA7gBhkspeWdXs4yY1Tc",
  "key27": "rDQDbG8KAUenACscWjMrzAdDtZ4fQfSBoW1GdpMYCAfHhpHjUJZv1DF6EF7cP7w9vZsFfjN4CjrXYir2zGitXZo",
  "key28": "3XbGhdczfp9UV9fNWvYJzXghdL51od1vQwEZ5CC92qKSMmmrzJGDeDphxm59vjWdHzFs35QoszPbjiKtNUoNtn7v",
  "key29": "5KKF98eG7NwNb3TcsB6jWFcuRLB5s94Qp3nnfucdZW7ibaZZx8RPrE3uecfF48UVq7JphamqGpgWT4oHxA2Dg2SG",
  "key30": "35Z55X2izSP5m9iAhKK4EL86CwYovRL6f4mGNEVgoRbfs6n531XY5vUj6vmhF59SwJCpDGUMGYNqBSNnvV2rMQpR",
  "key31": "5Lk6yYyWZNQYiDqyJiFDcGSC859oP62FdFaTcTz1zt1sxtFovwZCvRxcLsmT3KDesYDKG9UCQWz81FVHHuKfKUyS",
  "key32": "5Ehgdziz9iPVGxaE93rGNYsDHgyWrzw7yUb3yzHsJXnU5ZAcRNjAT6RKFvfZcTNJAuehr4NaNxaRq8cbPKXuTzmi",
  "key33": "4EGYNVRoGZrCDpb8jCypqDyuWm8zC2ZshoKCFfwAQrgiB48LnMpPGwJwj2gTCc8fj2exwZjEeiitzR4PRDM5dhf4",
  "key34": "5sEG86bc9Mw2hqPqBUbVWaWwiRQ7vzH7bsmdSrCJUuThMVijFSsR31j74vJYndKxkroTHB1i2H5xtsekvm1hHNud",
  "key35": "5gK2Lfdxh4UiSfEvD5MTD6nDu3VBgUwwRr6XZvHgxAH4jeeini7t9y52tt1djqVxk1Ytpab3pfY77NQPskxvVfwL",
  "key36": "2pGj8ytG3nD34MUZBeusSKfmijgA97Y8smUi4mkdtHmtZ1FBmqJ9XHadAZwk7ryTomDDLe2unjVKQuixTuQhV2bP",
  "key37": "2pbcMsib1G8tmEut1DBwy7o4DiB6bLd6k43mGr8SUyoJUuUp1eaA8RRsoafWVDWQz6CfLc5YfdySpySqePG7JNyw",
  "key38": "2rGdfv9Bj1a9m11AukcK7YowHtg76AbtQDPr1jxfJ73XbZ7QZiZC6NocbCR9p9yeFvLo3z7CaGH8eSaXnPFuYAKH",
  "key39": "cs1FSVjKwypyX1pgtyrQNGbbH85qXMfjuK7hM6cVeMvyGhX1Dy6ws9KkGABhtnbYjygfjFmyRKezPYTQRooBcx1",
  "key40": "46ybqRMhNqRKqYh1sfRvhNB1tyyUzwhcaAtqnC4bFcDpZJqfntARbffj6h4JEpSNRBpUxoDCUky7CawS3XMYYQCf",
  "key41": "46gsj64SKybLpBLtYAkJ2m4N7h7K1uj6SJ8zdBWAocgmC1uJoCabaxVCvDUuyfrn4aq4Rv32kijcs9KasNpSCq6t",
  "key42": "MVGxhxw6zUsv5sHeycu7MxZk1dw8KN1uci5D8hngu4uGonXD1iTMRZsetDuvsfVK7Y3bYT9p6wxjSMFgugxa6Zv",
  "key43": "5Pg9r7xGptZTEatMmpy7oeMnyiamXSzijnpjmhMK44HAnhh1o6FNNsRBE2am2M5VTscYN7B57z2oPD4Wx1FaiL7i",
  "key44": "zbQ6p1RJqi9rqLLTM3EsZoERqXoEGRfYtqKQGaDn9bE5dYTMQQq13gRfqwnVxM564x27vzjFLp9VEafyVYx7WcF",
  "key45": "5J6LZmmhTbfBQdRqfUHCY1aPSp1v9LScvtY7FbwA47ipk6QE3z56znPzAiqgM22VPKf1aLpHtxmYTRAzQRMGMuhy",
  "key46": "436bHpgQv66MrWNEK4D2tP9E4ZFCCkCdKkg2MwPtE8GGJMZhTWKzKNQ5LBcE1s3EefPusb9r7hpCZioBec55aK75",
  "key47": "2CcNkYz1dWwgGB9YM7MvN5FqV9iEbPH8xiJvtacM2hXPGwZyFFyN4smJEapMVNCcDH4SH37CMj7anJQNyM1KY23a",
  "key48": "25Pqw6tpGgj3gTaYws4aCQxsSDUV9vtL8pLmrNzj9iaRoPw9qYiJRS6Q9ngLqiYxHAbgoMGkHuVa8RKrVbdb3wR2"
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
