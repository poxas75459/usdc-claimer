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
    "4ysgTfJaPhdcjyUY2cpW423dH9qkGy1GLXqcu2X1zg6bnoWvuQfSb7zJsqEu7NdyfPdqbiUtzk6fmnfmeypY5GwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "578p25NHYh7v3mYff1neBT2JcTyBXAArGBTXmGy7gynrW84gsfYGGnHqWJEcBGZd57jGzDCLk4W8143U9yDeLRGJ",
  "key1": "456XQugFtbAPg97E8buRukUVTh9uV2Uf17GYLAwT6BmCrNkB4xbokpmexkBUzsXb9b44VWfN5BRFqMRTorCWPa9m",
  "key2": "4mbGCkKKkse4CDseKuGe4nsbi6o4z1R5QtybkeyyrgsjXfyyyk2i9t53NcGAZbQCNjr7K4CXE9KeZyVcesXVd7rW",
  "key3": "21b3iyzN4mFF9vdSZHY3MiPg54a2XTPwt4KJABAwenT9ohSj1s4Mb6hbTHESy5YM6Z6e2TuEyum9uQds6S725MZn",
  "key4": "5Jwv2pYW6NRmA8QV8wDie4tD8U5dWpWRTneEbLebdxaYRhFU9Q1zp9js4m4v8PQPjv8S6J9AtMxjQiGaZFCHEtQs",
  "key5": "2E8uiNLa8z5QDfgJusj9bRqJ68rizSuC8CdVWSJxLh7yWKEiDtzdynXYHJwJ3J94DqK5p4sVq23Rbg7Uy7ENvwxc",
  "key6": "4qRn6WoDUsusBgPh4HSsuRoTdwNvxepGCx8QYeTUWYr5ARZmmRcvZkTxsJCGVyr1rnziJVEriiJCAY2mTQmrV82q",
  "key7": "24gwLMftDY3HJLg64rGbqrLH3noi179W8NJ1sf3TdrPNxTt9XuVUArFMLBznTyojPQLjbSsQ25EGAe5rsQcDwrLs",
  "key8": "124VqwyLnoKCMeintrqJ5PVrUSdZRmWgAs5dQbh6nGRbw3pFjbMVV6SUF52uhDxH6VjjyW284zrrbyAFP8vbKGZM",
  "key9": "55H5T7LmzPUgmcXEgktXbvSA3QdqrrsHeSxnKVGD8XHiQCUy1ySsT4gw3wvKEdxwLLiNZYyYu4hAPWduM7JsvU35",
  "key10": "5a1nqFMif72uVRQJc8aSrnes6E6dMiJ4zkTipQPYTU6tVwF3i1mSxFpxpBv7LUuVZ6U9ZhnymBj2trEDFZcZ3SEC",
  "key11": "5FxEpSqVW767PvDK6HHgiTCqdXCXKXqZyzboNZbUgG3yBk3aJTCKq1SB2EeeT3HUZfXo9ZYDp7LdXkK3k7gxmnyD",
  "key12": "5Ap6g6GZpYiDQ3i1NRV5BjHuz5A6SfVJ7pdH2nBoA2W2e3gkXdTvS3uayCXkNFYz8GtBSS5WntXQw4uhPM6nkUD1",
  "key13": "BAXaFmTPByU1UrN2uxhCdgLyT3fLYtFFvSs9dPeybFwLHUbse2XYxG4NBedB6N8TLYbndVBjGBnCzwtEwU7TYez",
  "key14": "3UQqwQmcjmvcN7gRykFDBBSp4hTPWgNcxPapYLUmD89Kf8WmftDNrsVu4NvVmgrg3kMMVYghtjp7ghs2CR27g713",
  "key15": "3xieEU1DgP4Hfsw4sxgXAw2oWU2B1MypzKX8i6DpyeMYbi55CZcz7oHLjS1xdnREj5mjEGvzTEUQjEKBDM5DK2Vx",
  "key16": "5prbKjkGnUAjKavmoq54kK2vZJrUswhnADBddJGxsThYwt9MnE6jUxrCVxaHN2KKPutCUmQdsmGj1xzHdFobezvz",
  "key17": "4Y78Vc4vHFCzsqSvpbRcju45UhFyoYcj28psUmvEqm62Q6TgvMXnTSEMjuHjnth189A21Qf27A9ZdSnxPyD2NR5L",
  "key18": "4Zsfy1o86dwebVycJEF47XYFx3F9LKBZr4oZocrpxNYTi3CD6ct4pAfRVhpkW7kLAXtR192arykkr6Ci7jUsDA7Z",
  "key19": "29SM1BZsXbfevctiXBCLKsifqDtAR38Umuynfcvh7uNYoBWCHPnVN9dcSZ3vsmacYAJtbChKTzh7xr4FFkb62zKf",
  "key20": "2eLvTMToCiHSuJrTfRj8mApBjiQ24ZWpD22Gi7vmsdxzFNAzr6XMGjR4QzmEe9Fd3TQCWy8LLsXTT6PbrEYkHjrq",
  "key21": "5CVmCfAnRSszKAQeYCDWbzeG7MHTtda2LxfPrC4HFRgqLgzVmduN9MoV6wYG6oY1xwSJswRFbgAVkZDGeHFZj8iR",
  "key22": "5k79TaqLkPjNg1v3Cw2UsPeHv4fDeDakjSDDSZekpM428fdhy88BpLKn1xwMoxWzp1rDFkaFU7HMRDTbhoekev6D",
  "key23": "2YmKzLSvFLniDBs2hfc8zRvBmDEgmrHCdhmbcwkjuhM6uDJgp43r3gTiRgvHpYKVJXvURvQCt6oteNHwh2X1yW3U",
  "key24": "4X1qcyRUDGR2Jhfx4JcXca1KXr7rCBewWQN5cdtyusAdAEnJ3LePYySYNZp3oyQxsU6d9njdkpLvtguYJs6kdsx",
  "key25": "n3jrdFaP2BF3LnFe4Rn2Yt3hkorqGqoiMhe8tFyGeCwnyQ8NsCteuH73sbntksS43K5btovho1yDbbHXhYkCFwQ",
  "key26": "4mnXUHbyPKmMoiDP54kRBYD52vgMTwmLErdNz4NgMMKuiBLrpEf6tqDPA1iLUpsgP3mEfkQAERaPDoUGSwfeCUTW",
  "key27": "4kCXJvPdCagqsYks5P1cREec5Zo5bLj56W2HoDWKuSAtE1XYdFkZPHR4b9oAxZPZTrR7sVe9Nqj6ee49GBgxNLct",
  "key28": "5eWv4wjH3EWhz8DbvNpBccZPuYUQkUEyT9f8s4PJYmvDULNBGdQTR5FBEo4Q3KMFdk3Zo7xWb3gaWT4ceZ1VEuuT",
  "key29": "5mEqc6M4kvDMiLySgNrAQQx4YUUSPv5iXskXvDRJFHA8nUizUYcFxe52Rjjj9EwLH45Lw31Ku7ACpQKnRE2baueW",
  "key30": "3mwLR9pV7ooAxhtG9VZEZGnWgzNSA5bV8ips8kdtmnRixC4WiEcDTHrKdp1EKeiYuRJRSqJazSzRAYmwh5EMBDHq",
  "key31": "5FzV8swmkizbDtG4AtU4igzh24evvQMuC377GMeC9JWsm7PnbcujJPNmkbuAkKbqCg3wdPnVxULw31piQmABQhL5",
  "key32": "36AeMGAGjYcz1YiebJeaAMCr68sMfUDLYuQEfwXD4ePL7DFjQhLr4xNPHNuc1X9Tw2WqX2VjkPiTtp11K2v5mhBY",
  "key33": "2okBtGmeBCB68kxMj4ZF237a1dtEp15yoZ7of6kkApTxiKEUDCL6n3HYJWTXJHCvzrdC7tTwdwpfLw482zNp1hUS",
  "key34": "4hh3nDfsC7Kwdwyf5Ps3QbSRqqc1G2HrNtJUkX8xRKPan1iXtG8MWCVfVsqrQZYDMFuzfB6fdBXcCjP2y8EQHmZ8",
  "key35": "3NhSw8miyAqaNpr1PufvfrNjzEKajHatmBp1Z8Tk3grMx5RrKuhFFbxLe3x83YknzSh5irXNYRjKShgpVPk223Lb",
  "key36": "3xa32QT6dFGT7WDvVmCqdYzEUaLNbFWiUikL9oUq7hzz44XZ6ceAxALLtY1YZ4L6U2EYgCC6PbAeGFYr3NrBZffK",
  "key37": "2X9ctxN5hidU7vMwFZvoCAtWrXBQ8YyThDfWyc217Xet1JCGwF7gdS2jHoQLNGPPX3499D4ycvQbwCX3RTiVSYF3",
  "key38": "3vAdcZEP8jWH8v6McdVdG49tHfafv4cPChKsUqH9q4giQcaomuAd4e1MQRJjAsnpJXouYGKMAsRLS5SF7ZeQvSqt",
  "key39": "3uaQfwrYX3VUFXHWySfTwQHXqrygmqsArAJ9gX5uLewTVwyzkjxzDzcZRsyStiykiD9S8XgJ3pjymXqYSjwRVZA2",
  "key40": "4WwupBhngU1oAjxqWfxTcLfpLNQH1KNTLwEXySL61jotxnsZPjKdPbDCrgLNLaD5VZHV6yENMjxsh2D16nLEuRU9",
  "key41": "5is9Zih8zW5jLXYGbzLgoAHhrKdaqmwoPtmr4UL9G3z59RU1B23HDrtWFFSagQsiqfqsDrUbyqA5NRQnNH2GBGL3",
  "key42": "3kYWcU7nQ2GDdKR6VFZHaiJy9WeEkNV4jSpknEbvLHiWRkd3aZyYN1cbBNtozqDwGTUg7JK712GF1B5cKnQXRBp9",
  "key43": "5pjKvXXTFaRKBhwJr6TUU8qQJMvFRr5WCE3U1ia4bzAbZmrm8xC2thu7hHokwfNKS7DhUispfRAnGmLNxCvSaVkw",
  "key44": "2yU2G4t8PBPmD3xKGos5cVwfg3QySHcCsAWSMp58TLru9CmqaBpipXUvv2uKqz1euPHnTJV4B27gHC3Nhr1gjGwJ",
  "key45": "2xtSYKXiQjj4ZEKijuppjX6U81iP4uNfjZrpHWYFjaKEuVH48s3eVdzMhU89qx95xGWutRQtDvBNrf3L37ScDn9A",
  "key46": "ZEZiEXDUzHLjCM8UzBvhLDAS1Y9R6G2kvREKR3P3rhk81RktxQ3QdLNUm5SJQmx4NEyb7KEuv2RmZ4SfzrJXYsw",
  "key47": "5SCGvKwDSutMiaLbPmaBHPEWaqtyw9K3ZdHwrfnZChHrWtDanGk3aiYFZ1i1S63Aq7cKPV35tKadE44LojwTe88h",
  "key48": "5umXxZoVUJXCtpvMWWmiirYrzkVKBg7CeK48t3yGC5Zt2VA1STi8HRsic397FpWpJAmwF7bCifm9Y6o9bu9Qw8Ss"
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
