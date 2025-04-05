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
    "3Nt5gn4at9GGjJt89hYXo9zLbWVarC5DDghdL5wbzhByZPaLeaEHyRwHef67UTJyWRne6BGnNd5D2AQB7yU4DjhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V9bMhLm5y6PAwb2cW6fhQqxvUxFhFKGU338Pc2BAxzEGa5YxshHK7qgNZUbbW14hRZMMTRoBL6F1G64KPvofmth",
  "key1": "2vdBReaDG1gXyswYw1rSPiPJY2s5RXCWBbJv13AGREtjTRggA5U4CoM4PnUDMurbifyYMsnYv1UHwAhQM13y3kwr",
  "key2": "5Q8bTFhTDZaCDMPaVWFRaoCd7UaWS2szbCqDgt2FuqaTnoWuTkpLcSC7SqS889XLEdbM69z3t6M8FK1P7WoZp55P",
  "key3": "32if6ZuLEchtGXzBnuKVHSL7DmA8xTfN9RmEM9fAb8tZ87u1tkiqLKnKT85yAar4uLMoxmBWNuUMBUpYKXM5Zqx8",
  "key4": "5GEFBLdzKMLrRyNRQqzae3FzceBUdyjvEs6zZNLrTbFdPyLTxwbfVvgSPJMsyGrBFF2j9finAbJbsyE3S3t2KMug",
  "key5": "5g11sGtEBkXwSxeYErKCiiJb8ceNfqFKkvgd2PqcnUaiMFuHKTPcaTN12QKJDccGaccJzG1iM8uADxa73oDCXu18",
  "key6": "xPpUsj6v9q6nuCeDM5gADg5NrX5YPQGRFjMTa32aBfR4VnDd3JcZA6QVnpCevEgqxM95Z5Pk4aecWhzyQvvZjVU",
  "key7": "2wXpiwDuJ5HxrefC7QvsJL6ke8pqqcstvnze52t4UEbbFMZwrCY6xZRexn2dR9oB6CFvdJuYcqjtbbGRn6WUTjpt",
  "key8": "64m6ugnb3NXwVR6Y1ySMsk9NQmMhys5EGnEjmRjLUH9c4oASzyjtjR9eDhGuf2H99jkvS9FnAvSri4yWeVwLUzfV",
  "key9": "3SifmGDZzdQRc2cUdjgRcFXs1JLxetodAosGbfvjsofFHyXRV8sQHtBo4deYk5s8KPd4KBvpTVyaf4XkMYYCiqgq",
  "key10": "56nZSK8oMqyZQjuMTXFaeM9hwwZHK3YJhmETPfnbtYFtfkCLZukmB1PFvZGRdigiyD5zzR5gqUmQHiguZ6r1N1u8",
  "key11": "MAoRrGZ19Hg5r1iX4JxPvEz3BdWjzTyH9pbWrRMA8f3q5RZf3Xantg58my2p8mArHKA8De8b5KLm84AtCsAfsXL",
  "key12": "4fXix1WkHBaoAgJwCfKs8EZU8wZhJpX783fRi36E6wzxNArHUAEg4AYYG5wH4PFr4ikbzYXQDQ95y4dtR6yS19rT",
  "key13": "27a4mbtSXUP844zWGyLvUWBsQFjRHXz6cStwNxoEzJU6HZygdKvMkcN4KnShmo8ChpgsoEQEX3BrQBGm6M8c6LH4",
  "key14": "3fZ6HnuWDZgUYP5MH8dx18GtuGAP1b1N1diizPWHrF1Mtk6RLiXaCbJ6NfsHrEnVGuvTmTPVXwPpsEFihzQd6Uqz",
  "key15": "3zkGbhS6ReH7R3svtGLXqJcVRoV7P1DPEJmEKrCefo45YYGKYH3jf59Hb8MfM8JR5T7tw93seDQsv6MzEYgEx3nF",
  "key16": "4bn5NotNk6G9whTZGcbARamrUBBLnK8VHEfXxh1ZoMd6WAx1gA1fk9dMpmVB47gmvnrfXA3NMd6yncJ7dayQng3L",
  "key17": "PLjkxnouaent3RD7H4gzVp28dNyVyZ1AvFEfwwAvvoP2wURtpWtfmQzRRh2aBhmF4GZbLmhL2JLPu2i9CeGQoo3",
  "key18": "2dDy8TjiGyuRYnaH2kRT2a6G2rjys7UzP586N4snCezEPuT8mtfqZNXQ3DUVdiw7xbJzB11Y7Y4H1GsoC92hSysJ",
  "key19": "4SjBEnraUefLukNMmbR6arL59epq6K7jXGRY1LurX1EgZeXJACyJZ4KXfDscYtnsaMiSt2tkKFzYfyhNiKscn1bH",
  "key20": "5Yv674zQoNmvpdWDk9ZFdPJeaDcx4PmHk1qqHs3mjDKG2w9NiLJtCS96bzeT51MsJ2j1B8vmL7CBsvEj6ePwtEHa",
  "key21": "4B1DmK6TWaNEKEoo8i7G76jE5EZkNbB72LDfwUcVw42ivUZRFcM1DhZJGmEQpw4L6RWKQSSgdL67JCysSiZTLvfZ",
  "key22": "5jrVAE1kZEmVZMSdmnvqJhrqKpvSwvXUrNWJF1d5aHPS9HKDQkr32Lc8NYnbfT1jJQ3SG7AHqRtZw8KpGhCZpjiM",
  "key23": "651u7Aa19S3cSgtTGh2RCMmwW4tuDgzStsv7kLXKh7a9nEh6GWx7NadpnwqrF7snAkNKQA8MNYhxGhBQpsvKjPqz",
  "key24": "3AuHw4VdvCgnmY8zWRZaB8qU34BLW4SKY5t5N8fMQPzx7GKGmaJF3qWvhbmiifmKXUr23MUp8udiU35s3CEq4VdF",
  "key25": "KHfQSsvibHmRmEVLpQ5rhvYJfBPGr843fQbNyTAWQFGPeqq6aXTQk7N8UjEGaNfZdyQPfCAAQgSbjYFwMgvhPMS",
  "key26": "5UdXXcEEs3FeuZiqPwKdDXa5j7cw76dsDRsGamCT8bnwhcTB4pDF4dfnCJNKU8RgcyMT5eSYXqpfV1yogW1dsUP2",
  "key27": "3Ar1R2Huck8eE9FmTCaz17e6cMR4KaCnPmhfYQCTWzSBNnNtmmkeFqdqH5PxFHahvR6cfQYo6oecnaVxuf9aFThj",
  "key28": "3MyzuSBxrgH88t674iP5hFJp4qka3Nky7KnY1qRwP47DKVg6hbV3tcyTgz3Z7ehXxMnR4C5Ra5xzJTKmHiXtpaQk",
  "key29": "3f4aV5LE4ZzqBjLmHk4KVDH1Kx7JiPfNrsZjp9tEeueAxqBSeu9t7E1zLJZCXZsFBCJJcJRrGz9npSZSUbqSx2BA",
  "key30": "2GtDAfNzSZmQAAEVKEQPn8xo1cALouR3Ek7vEiUEKuHkBwKuxt5WuYEhNmLGBvDVbkDnyDYN4vvRFNtD8TRRKHy8",
  "key31": "dt7vVzYfihaYcDS9iUvM8LWAdHfSughdGfdSXcjn4sbzKejVRoUVsgBjCDRf7Qgkjwnu64EZNGQx8QbkLP1Mdf6",
  "key32": "49SocEMv3HxdN2uCcBYwbWfVzUzt2jov7g8cF1q78DrDd8rL9WZEhL9F9VR8mf8Eumyn41xCDTmytzbKGf5q9aG2",
  "key33": "26ywM27bXgGR17F6ZvsoZxBZXuRrtjA5AmsggLtXYE64BB1EA5vzojwXSFxUVir19eXB5Lvbix5aq4uX9pkjMbux",
  "key34": "2JH6p15huCDggqZgnTUsLE3dg1ydeKYvKNUUibokxqfQjobAQCpZrRuZuxzUbnEuJRM9fyTYkhhqEfGWC3H9wK19",
  "key35": "4QZxGL47y3zm8b5iAnESpQKeYXNjHgTZRSRBfsoSXsBGvjqaEWVwvuS3PTANAzNC3q6AgFvmJGjoZFtJ6pUak3uQ",
  "key36": "Dro2q3qk11LYTcQiZHewmmdZdStZn1H5Yhe9KHvCCLFLJCEHibCxCM1TGtF8QYD5PCWAev8idgUaLzEswyiB7VU",
  "key37": "tNFhtjLJC4abckkJvvoxUdXJ7HhUimqb1uRQUVN5QWZPnPQPQ6fSEoMwPz1Y7NwkywXE74iMhpZWEmCz9qCgDby",
  "key38": "zybYwW3twwPKixxXwu37ge1UMf5ThyrsMgtuwTTFq2gudyex1sazkFKVfVBDZGPhhD2cA1K5g1911dGo5sZtpdq",
  "key39": "4s5JiymdCWP4igPmAuf9W6gXFb24spNMiFAQJVfHEwTEL9vh7kBYpQm7TLV7jXdFbhdSEJovhAxLssAT9Yhmqey",
  "key40": "cvhrhLUjYAtrxLn2BrwmedvA47K8kLzenziYzjmXkJYMp7xSp81DXZh73NcvYgWEKND2jnDbdNtegDLyh6jamG1",
  "key41": "2f3X8UZm5TEd5g7tQKB2MJk5sAxTcDQpWuerTgiaAaGZ7Q8tcKpy4tQvtYEfUSob9iDp3kDnQpYJykRvwzc8TNCj",
  "key42": "67GfxGuXrxTHYFrvjkUBpQY4E1QGcTJCNVkYrRh2hBukknXvNssf4pKAPmRq8a58N7GfoVPoBPYPkseExQNGoTUq",
  "key43": "436UYDjVvRRLguQoKtEic2V952hsYqCY6PQHdykXNWtV46NAXijHkrViRMiaaDrwLTuSAWJJW8nR27YBbULqsFz7",
  "key44": "axKZNWWPV3wwQuTuqbd8ieLxYrbjBwxTTTmMyn33sZwKBMbD1uy1bHjh2jXBPk49WmxyhtHreZRpWHyPhA5ye2i",
  "key45": "p3PJpScfBtzUR7mGYSipTgGH43uxiFZiZe5wQ6KYU8YBGWx9FN1Jg2mTiFQEaCNEExz9hmiDm1QkqHXMh8ZE2z4",
  "key46": "5CAXT5edb1ttaqQx2J6GrdsEpwz5GDAHTHUii6Cr3AxPzEwLW9ovJL3pkxMDWrCmjbSFbD5WXxuxCnojyEAgW6F2"
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
