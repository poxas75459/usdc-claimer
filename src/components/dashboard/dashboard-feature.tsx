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
    "27JF47rLsceZxC7GDjRdxoVoXhbkt8pfDToWxFY5mi3M3hXm1w36aezXZXGU6iBVr8wk1cCF9ExMFiseffLRvgVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46gXmtofgwMjDxZxtYRM4hiCkxWb6tKr91CEQ4z3PCxkGsJa7HstrnCaXo5A2xabHXjQrjpcGY8hTYHLBC1yTFeM",
  "key1": "22zCrfMRkXp4mCTBP7b2Sut1KSnYf1Hyy41QkeZpYrJQUtnvYTCqD9585ByExYpPSUT4MhfqPwsHmGeLqVFMKrFE",
  "key2": "4XyGFXJLg9n6XHucNfEru3dYQmbh3rWa9QL8axhKmzD1wKGPjSffSR9mmqBE4rCFGZYrLiE8FRycVQTcrmYnV64h",
  "key3": "3Fk8FCTbqUjsvbaYmVX9SMsjKqMZmQQoVvtQho4rpYnJCGTm9xBEMBmGnzRk7YFD2hioTPNCQxxPABvJjdjovTpy",
  "key4": "2x5AJJGW5B33HW7cpksbM3hQWUeN9ptPmNyXLb3kETpDwjmXUiwpJVrKqZar9criZHTrkC3Hx5NJLPnMwd3auDKA",
  "key5": "2PdsWZiLeytYgtHupsrKPsk3CqeFze8j3GkoQDThQr65WgtX4xRPS3qogpi6VGDhuovNT1mBAeZn96p1hByAshuG",
  "key6": "5LQBNoaLBh4KPHmMBGmftdpvQ97PB6ccyLBC5j7iE57rW32haNrqtjbgU8ZVGb45UWA6KivfNE8JcsUmvr3nR2Bc",
  "key7": "4PtmsX8Dv6i9kQ76GZFmMqnpBVmm7Jw5TXxFPQbqVkWXcSaLnvZEc9TGkEBidAG8FgaqSzJeDHEvDvJsDHu5Db6C",
  "key8": "5ZsW3d7gJeaiEE8YzdSYTFr6EQo9GfTAUt48mHJXhVLsq9QTdEkxk7Tassnvpm2wKt55jnefFj7ATHLMxCaEg1cV",
  "key9": "QsPtxBkTgqqBDtRE8tggxrQ4h4AG8Ytgq4N17vGkwoFBEQ9oYng6kQzSpCrNW9rQsk5R4CgukpjqgEr8rUkPu4c",
  "key10": "341BCLjreAfFmyWwihXgZB6T8Ff35fxaKFrwj5MXoTERbFm8TC35VTuWZGLpZ4E2MGrmW49PiLtc5CJrTmxya9jg",
  "key11": "HAagtRkJZmP7A1KtLfCccN8ocP9aZrjx8v8zhVDiZ7Vk3LwTzswnfs3wy4YavhW7joLAwGTTBYRAyQ1nWcc2e6T",
  "key12": "4tFHfFxQioVdpXFxbtQGvAR3qdShb72CPX4MKMbC8cvirTmPbuzjWsSxhZUgNGTHUP9DV7LzHNoF6wpWfJLS5EH1",
  "key13": "4aJPPtfdMoQcgbPLg7BZmgbR15oXv9FTWfkciKBJwmrGjAdLjZiQZfRRaGyaev8ANtrLy3QjLzpNgntvyM5baLhc",
  "key14": "3GNY5D7BLkyJsgb9LKqP6GyztmJ5dkYFuwphNVmD31PgYs1nPuGSwijcwvJgahPbNR7bgCgJLHqb2ytAtHBwTNzi",
  "key15": "3sE9YEofFEG3TYeYJwXPeC9JchGDr4vWDiWwztG9mehmsMgwRYbT2KgezYaewdd9bDUZM8fNCtkaznRheBXQobSF",
  "key16": "55b62hkMQBpiXmJ7g67Sj3RTSWMQoYBPkYwQB1x991F7Jg3YVsbcPiqbxL5xn9nbkVUydeqgqn16PaEhtxzxZ9bG",
  "key17": "3qawQ9DbW5ktDAfNnhLAVoGJQbgTMpWcgW3yVGMAq6vv1hheNRpNp7vAwPJRHQrHuqvHRXpzSmmFL6FALwXkastj",
  "key18": "FCzpahWGYQEzBTg5pWT8Ksg7e253KTCrpZMW15z5sW5iBZCoCtbxCYuMQgfa8KLbkcRrMRgDHQhf1jpQC6bjU1Y",
  "key19": "dUKHjKpUkS6d6zyXVhmpJaKQyJCQCrxQmJkow9QXk3QdsFDPRN8dqsSSJ1wBmJsZRKKfoG82xoxppGLt7ZAoXWG",
  "key20": "fN5Rr7TTXFY4y2Zc338ENvpSCiSM8qVkooESxc1dPb6Zy6dR1uT4TBdbw6BDdcedaXnBohYxauATvbFAkLjzAkt",
  "key21": "2j9P3pMQbBUgGFLNf1n17XsNbpcGv4cX3UNdG6ZG4kpumigu7zX1LUKaJq9yPYYbxfpYHAFjGggWHwDvxvGCcrdf",
  "key22": "62Ctozt5z4adw9zyi7CxeBvJ78M9udFmx4LNQRMP2oYfgKL1wWQY6d1wqnYKCsyBKqLUS1ooep7Bq3rT34nPdpW4",
  "key23": "61GZiCY41Cqo2xYDXt5YDuZQs55fKSq9wctACUMrsnhjZ65xUKjX2ypLZmUpU8i3kgyAEsB5q27KgD4tR4eRZPyP",
  "key24": "5vRXnnzrDdkVhjSA6RkGziq7BmThkRiijnyBPopnZF3rKRJvjevxuCGGqbRfeVyLsPEjyzg9aCJgvt2WPU7Zo3HN",
  "key25": "H4dnSigtwc2HHu8fwhD9yuA3fKCa189QuRCScD4miDKivMZTboxT47PtqVGiz57DRmBWV4PpGu49N1baMHvPaiL",
  "key26": "5hpD4kodZ9W1gUtmQ4jZRX35wKJaXbzjmqrk7etHeyL33dkwvUgWGbaBNnVwZacwBmS2bXk74M2pceFhzx7VkuA5",
  "key27": "22F67c5tSh3mtTUYfKLPkWPh32LZhQPn4xHgvqzjNYsa6kRsNpmTAyWydEzY7Spp6jwEGXd1bx2Mjnh24XsE2VnF",
  "key28": "3NrY2p7pWbaMVNYpMZotwjYUqnL2KEA7vsz5doBUvUJjzsfaYaT4PoBw8sQr9vySHrVa6veGQ2Rz6A4QfDUa9xXv",
  "key29": "2k3uKPiShfLrV1PhMVdiavXYwrb4cdK697nrfXjmnQWx6BYHbPpwiBfY6oH5j7RqQkDUbFJNhTskF3h3uRUp5dXX",
  "key30": "4dbkDdJS2ShjXR42xK1Zmz27Fsm9RYk7YcFo4D1zxSVSqoFm3JHzrMULJ976LHZKC62BKmyaU2oXhEahMHYApVxd",
  "key31": "3LG9J347pn9gWdNgMWtaTyCdjBUVp2HaywhbPQwcb63n65PqZF7EyyduzzJ1M4c4YJb25wPYK4raUg2yriDhwEeh",
  "key32": "4N7exb1AMr4cbGKDtCbMA7y75KEE4kpDjZNp7ebztLU6nV3p2AicYEcX8pR1uH2z62paGqfkZJvfDPFhFUjs3txE",
  "key33": "WQ9eyP2zjG1ejii22DpRqBRszckFQGjKbQRdybgRqkbTFWKa38Wdif8uxBybxZxMfodanPt5VbhyMqKhohzeZZd",
  "key34": "5AdxAd9575C3VRzwnQB99WruGwCxVQVTvPvZ5dpRvSs1XqjQtnQiErgCz5QotaDVEYRoCLKgKESd4CHNsUUKnvy8",
  "key35": "3qwkaV2sZSe3iNDx1jHUaK2PWAod7auCwQZSR6YTWKxCBbQMLj2LQ9XPFzdkHDrCM7siyrq77PoPN6PwVAoWoiy4",
  "key36": "2b27RCSZBT6ynmiW9qp7pvhffeaLVyknwCAE78AZtrc7HbMAfWiceo9Kxi1nnZwSmDBDESRxufJZdzZYryaTkjGL",
  "key37": "2gZWUPcD6HSwkf7rAm5q9E5m1K9Z5Zo8CUiwu7w9uSZJr1SFSmFp95HpucE3fhmkBkZ27p92WVz23i97bQG5GZii",
  "key38": "2bgXyT1pGD6jov9QFzFm8RF49dZSiWNHabWAX3KmGKy2oNdHZVeDf96LEPaAqEv7ziddUHwd39cdfwvcMuBcFf7t",
  "key39": "w522hiTmqx5z5PYJzwTxVhFPAPbQgF8HzaovhHPd1LUegu2XJvUZZP974PZKRAyMpF3UiW4PGJZmPLULFwgX9eE",
  "key40": "348f5p1t5erf9zfnqtTBYfHLoaJxjLDBzhX1TmK7A9MXmim8mFTHMUeGq3SV4anAUMVEid5jQBjqphJrRdTNXJfd",
  "key41": "MGaPAP7srAs3GFezMEsjCZD59RsWoZEXqUdPHSMw3za8gF5XUMKBJDtwXm7aFyZ87aRi7V7VqNmF2Pn64QhX8Gk",
  "key42": "3VrsmQHgeXtXTiuxauyJQPz4aqqY1ZcX7pHRzpTMrFZf7rwQBPYA8aeqAUAoo4uuuzrUq8rxBVM25C4hnx6HWbZV",
  "key43": "2ArgWHtaJXZaS93bgnAtT7bdAesyTizdeKDcRMj2GwBtanZeTDYMrfzoPwzd1R4BWWAnyjbH7Wxbr2SoRb6Di6kY",
  "key44": "4h68oyYL3jviwqE6qqFaB11E1bw5aH1H5ahd4bmuPtfm1cWwLti5Fy9qCs49gNTjBfZCqNZ9V68fXr6pQSgPDebo",
  "key45": "5SgcoaPycKzqu46BsMwkw84sGkgVZxytu88fis3GEvrK8FEJ9zjivDC7DXm42Lj61B4E3SmKtXV9UhdPf71DgxgC",
  "key46": "4BUth6Y15Vec5j3QuULznCBmpWnf2AqAGStk3uEMgRXiUvDBBPkYzz6hhQNcnGv6JctXtXCARbE5XtxnYBTV5Jrt",
  "key47": "2yXEaGh5M9zuMctCkdViYeykizx9SMPHuoK3eq7dMLAGeDkm47ntfyFPPAQSY16ySd6TGabowQHpK8Vaju8vgMux",
  "key48": "2d7rmzsM7KiwyAbh3gamHquUN2Hij2fVgSEihyQg1wNeGhYcEH4tzM94GBMzGKKPG6DTNJj1F33DDSxQJsxs8SRH"
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
