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
    "GBUs7ckbpMbw2Awqs4PVkHL6atSMrgmzVU7JJhTSdwQJALXvvx26XXa7JFigXrAxZu4TSYkzG3sRR8k5vyrszio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFPZ8gRzpGRjfmiTGYTTjewKDvaRv4EVPXZvzwZk11JHmJVWP9jqoweQzc7oaKxDw4fWscvo2gfDd1zPdSwYxGs",
  "key1": "o84oBZAEuUHKQhKZsE3ABNN9XT3qtdy2zzXMWUypn8bwdz2qqbb8H6ZXudbrFqfRLSLCV34TEwQpPwZMWXwqq3B",
  "key2": "rFT2LiB9GFdPRp5C93R19nK8MTTmzKVig2zvmJNecTezS9UzkUPCmMJSGAchDymYiXurhU7BcBtJkUDBeDJwwQZ",
  "key3": "byuL4tWtVpV9YsUi2rBFC9UiuX4ikyuYJEgfEtjf112amAQ968YvZpiyJuavqSbU6unw9eLudYsGGJ942cTuMxj",
  "key4": "3fHReYUvx2G6rGzgV8xTEUzGS2p8CSogdJU7mfkBFJordWpsWja4TtC6EF3nKtJBcjp6HS9X8Lx8TrFk1VVsR1Pf",
  "key5": "4pzgcFvXWWGg72K2as84cY3Mpt7vtYnFBV5JtToYdEeMwQZn2xCcx9HBDgJbhmueVCdBVQEvB1mvdVEM6J3NFcHj",
  "key6": "2ZrwPEumjoTCG5zK8WniJwGtQyMT7ondtt3B5gJA8UYaxAF8g6cxY6GJc2FAXqBuUV4qZnWDFJs1HZNQutsB1Ps8",
  "key7": "4QUj9nyTZ2WFPxAv13ijFUzakegJoGQNkFHdgNM3iK4wZjTU9FFxoyREHDti7ZjVnyetem7WJB7Ns5NBMTWWVs2W",
  "key8": "2vfFMUSsHe4Bw37eishH2cByKQ4KgFQTGa9KfWafuR9bVGWNhWnPUPWyHCBoiNtdj2pZdupCFR2UhjZoMdhbDd2Y",
  "key9": "5N2NwLZdWgQd4DdUVCV5iukS2grPoLDSS7MBH5PgRA6QMSs52wtJKzWDwVkZPfjtHSA8VWGXojqUFz3Wi8oSz4X",
  "key10": "3rx9mAV3ekXXnPrZux1TBrJhw8DGoJmSCVsoXi6usYyDWN9jQpvQ2h9PJWYniPeULYvjthsu1oSiDN6tzY7kag2M",
  "key11": "2hGTGypowSrk6v35uVKy9DJK3rJ176UgTPvAy92eUB5owbpe5j1eKVhTXpH4HGbzUzXxSkYT8gduEYENSqwo3rc8",
  "key12": "4i5GZRBWrzdsPc6yvocfTnCichbT31H66PXgTY8KjNy2qDuxm4EDyZP2CesDiWZCzoHS3g15H4GdsdJfekcVQSmH",
  "key13": "45Yr4N9u5dvC23ujD5rjyPG653KMuLfB76AovK9cFvqFjP71K4CtKJfc9rFi1fzPVoMpi3s3BaiDzHQAjYkHs3Bp",
  "key14": "3TfnLFvQV1NEHgZXgmc4GqhJokrEPCw3gn8PHpg1p52azdSWHyHVAVrJS8fwwNAocHVKphTEPNqJjtgnMZRT1Ks7",
  "key15": "2YtnEggcd4Pn8P2j23YvLw3bDypPSJoXMmitrZDCCDVUvNoR56n8KcyGFHCaYwLFpkDma8awYJizHrz7HNgaYSKm",
  "key16": "2RtHtCtFtu2b2A4EzMkahZV4WN111pcwJtLEuytR1hSyxmVRcuMk6Yt3uCcQVS4woMpjfSm83QC6xUxYqcsvkrAY",
  "key17": "27nYXnTopBsdVXfct6JaZ88QyJFTgUVTzpJwM9bn6q9JGzDLgkK477NMFqy4eM2zaRkmJVXR4xDFEbap9tDmW3Ax",
  "key18": "33NizzPwSVuBve5F96sA2sFJXrZSvTTYwJVYXW639rMQa917MUewf3k6cyYNCEukWw5sUFpodFwuia3f7LJbCczL",
  "key19": "2yZmpLyQb22XSZvmKRZoCGy4PdWi3hzWJjLeJrruXXLL67vH61u2aNT1dc7y2rVQyLBK8P75kcPNNEgz12QJ1N9Z",
  "key20": "29EuKewNCd698P9EDiNgCQ9JUWzv9Q4oHkMKy2QWA61i9aqWSmwCbU3aSiNPHBPvBGhogcmXYYCFKisjyCajRTrk",
  "key21": "52P5Bvg2KBcJdjvU6EgDGpb2nzf7PWz3fAqeUQz42hSgxGnQG1wwEjCDP9J2z6mVVVZDHEBU64pJAj6iY9dLMkhy",
  "key22": "5oL1oAEzvF4FeQiLZdLTui56YM1njbf7y784LaSxf6UuFHWPBba3afHxNCfEZkrFnP8D4WpPbf8wJeRDhmF8HzHL",
  "key23": "4o9f4Txo4J9ud1Vuqxk8FYd38qVss16CEwCbjWpkXfdXWZdT6y9hwTkwfSEoEy3daBvsduH2NT9fC4rpUtLaeWiQ",
  "key24": "5VG727SSS3Y7gZ28pxpmVwSKvadd2AcaeGWSowdMbV55CTDE3Tkouk8QAcSqeisaWcnd4Fpjqse9r4PwXuPiFJNZ",
  "key25": "5S89P4ZRSGsHhYk8qFDjthCueqDU7vVqki2sfgPsHmvpsh41ZatnqWxLX8hBm1DVUrc5PJWjvgnkBnooKqkFRhe7",
  "key26": "4hNu9XRdq5VPwvwj9gX1956BPVFMLprQFmwR8o6AKGkytFYmyHfQGMNBJryi5U18hEFTGsGnyfp2R9hoBYw1Q6fX",
  "key27": "4oZ661bUdmjGRfDMY2SS6tsjqk8LWCJKXhhUXrdVMh6S4sWJKMe5kUcL68mdsXQjSEFzsoGk9v4w4xyffr6ukLmb",
  "key28": "bSFzt7ECvQM78us39jqo5bXok5DyJW9BmDPorAJpBA14GYN6QhwVoLtEY7aTKUiGjbpF27Q9n2J3EM2ad3heft4",
  "key29": "28ZFKYF5oR3dhXfbppGJjX9bYXptypjE19RnT1oD8swRwFDLWZUrombhCsUuff7txPBuHmDsGzmZnqvvURbdNZsK",
  "key30": "52kDoJmMYncmjq4EHJVr8fJAcJeM17wgaXJFjJjPZJoBhoL25AqoJTAmNip5nPsebodTnisVAVzXvA5MzJ5mvcjp",
  "key31": "GoQHsZvhGGaDQyjYiWygMJBRgbfx1uaJZTpGsQ2kRMAUkH8F6pps8oTb5piHGumJrSw2Kfi3eV8PRKN12gYotVL",
  "key32": "56K8x6EBBBsU7zAmtoBgJ9j14jF2qiJGtNW8twABfG1hZPw9MDv9zmaQhLEASL1eHaQAENkMma6GnhosnfGPfic8",
  "key33": "46KCzZFhjLyYJ6tAQvnaiFEvcFAyiqbqpCvdLDfaCGeXH6UKeCXZvLY2a1AQWYPyQBM6oGEJqfkDKpP6567L63ev",
  "key34": "VUDxb34XVAMwTkmyuHeXSmo1kToy23Tsz9k7jbhW914GJzQQb2vEDu7fuJowSsqBT92brScPaTdRnRmUmmSJCBa",
  "key35": "2SgHzfN1HmDhjDFpKFwi5ZkuSzgdXosS2neW38RMK7MgUfjL6fEqzbHgXaBwCSk8HxGNaGkwAypdEdujUd6j74yF",
  "key36": "5F9awZS62k491yUeTjr5RGZ3tpYwgH8ieAzzNQQwpAHCUKc1sz7TXZZx9VjNibNyQXR1ztGaK5PEpSM7rixsY34y",
  "key37": "4mj3ms1LtL3WUNiJJTkCwAkKVieuhyMmSsMTpEemgBWKkZgQeeynF5M7N574jNcwiunYQ6aJQNypiQbdJWjJcpW",
  "key38": "39g71wxHPAViJ5U7HQh3pQwXNqUwZWpNfLrzFHPS8ZMCTTEEPk2nyLzhByf72kTL3PUXLtZCasuhh5TERHnB2znX",
  "key39": "5qi8AvZusXDTJr5gmGpmAnLD1hjTaKLapRmvLxJSYwj6ouc12uXrC5mXk1ZqjMR5cLurdR3v9qGf14iuGWedUVRs",
  "key40": "4MJhing6hQyP8oqiv4skdDRbvQbLVV5nMbxttUGVHJmkAsWs9BpVX4XWbZHv7ak4a8C8UVvBRRpRYDKQwKHsYYP7",
  "key41": "5C1W15wjjyosba6rf6BzBoeCvHYte1FdXoBBxPm7v9ATtbrPQkBt77j3XCdeA3Y8HwW9b9BB3ejUrh6q9gsR56hj",
  "key42": "49YE6quCCfZERZfWieQeBmN9A5WMhgM9r4zU4aQjYwx3fxcUHZcLkKDg3Hk45yL3YgyGJXHwybLkVzWsSBJR4HbA",
  "key43": "AUoxH7G7Y2khNN4VWsPMJPNhcrcxBhHj5MhJfzJ9sXpnrV71fR5QmBqb7Sznimx2ZsJeJzi3eqA9DSqt6aqWoLa",
  "key44": "3WbqTRhrKZgY4t9DLsAsemx2YnY8iiE5VeYxvnYwtZUqXgdxD7PmLDMw3j8zv566r6WYjmzz68FX1s3AkWZM5sQ1",
  "key45": "5P4CZfCuPk1v4o74Nstae9xDfzrc1RX928c24h8qdcojBauGxYcVZE5r6F6Bk3zfA13YYqUNE1Mz5NUWixtW1puz",
  "key46": "371SSC7yqgLPbxBBsqhULef3gveCMrhoEiSFdMtQoMEWkKqzm2nytzXHM6eMdRYp5keQYW3KrGwrW7EwjQeDdxac",
  "key47": "3aBkqMgP61esovTgiiYq1QPt4AgisoPT2AQNvSJABQG1zdECFgNd7MjHmr1F3n2uV7wrVhg4q33qaaLSyFpuy6e7",
  "key48": "3txhp79uixtSz2xVdcAnH7K8nMN1ZD6b29tGXqBnoGQzR39DFLgT8ho3s4wFnUd6gnUVjVVhw135RHaUvZU3cKLY"
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
