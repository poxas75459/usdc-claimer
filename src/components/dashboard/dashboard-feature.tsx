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
    "5JioXcQh4YRZCfBWRRLw1EwPLF1uz7wproFnFKsvLLsxEdRrDksjrN7BzMB8GE7RkGKkFYDQ6xftQoCoMDtY6S63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DRKVLJ3MCMq6u2s2RrY38HdCfTcWhEzuJaKWVKbsBL1wTsuskC1yfpAcYAHFwLca115i8jbY3tC21pL6YKkTKhT",
  "key1": "wUFF652mvftGpbv8rnXpAFSu1vQVRrim1Dr9HXzKQPitbHQJHNfDe415TjNmbHW8pYXGsEVywWqdNoydRJASUYM",
  "key2": "5VUH3sRjX3nDP5kBz7bjPHTHWpy2F6DY4AbGoAqo1ugmvdECmwbfugGBTWRx7e5fw2AcB6KBzNP2qDsAepzEUfyM",
  "key3": "5SoTT2ej89BQvnfn3s3UkPqbeYPtcYrs55nYdGZh6ntobi9JU4niyTY2PvrRgHPqfa8h7eGdzo2n123unoPNzSAy",
  "key4": "3YA8p6oo1z8y1MJLZ846gTGBwiUKBXXsvf9RqTRphXMbML3NkGaUnn3KmXYEVrLeAwcZtxkJFTyFfxLeNYouUdo6",
  "key5": "4ovu2zDJTtcoCwGRPVkbvPLS3nEUef8z2FchPzXiy1q3cdvy1GSRoshCM1NP877TgDuwJhKwXs1Fan7AAzLRme42",
  "key6": "5UnMJMC6sxa8furwbDeZFzH4kYbePvXuiZvduABD3QWDnc4WzxfEpVwkmbQD8ynAWekKBnZyABbBNr4BZKM5o3Nw",
  "key7": "Eq7GGhhcVebyvbbNeGTBH2CCgoMAhAGoBefaEQvBkrQZmYNa5wK9VtqvA3XYBCaC3vBcjr2RFQj1grF5fzj15r6",
  "key8": "5dZeTtA1HfGXdp4MsZ2Vm2oC8U5vUrR1drsPHoXKg6jS9zjDEtMtqWdfR6R37DdQaRzJtRwCAWDyVY6ppmDWVbw8",
  "key9": "33s8jLBxtQAuTbXrAG9ryNw5YMupz8Eg48EimzXtSCSQ6NZVgXQVQVjtWkEmE6otVKMsNibpAqHuBQKBMCTedYJC",
  "key10": "3Dyeq913jNiPdaEUfzVJ12YKnzzmhMGJuQboUEMYDYSKtCQkfsdvLJKsegJPjPfTZ31WRrargxp1NLp7TtveToGM",
  "key11": "5vbWmS4F5qwMoEuJ5RXTgqhi5Dew9uJeuBCgi3nu56SUbdtPHxo1C1yJ9R7q9WRTkqEiCHM7YB2aNyyzWNpg82BK",
  "key12": "5RPwBYrjTfoGeZkuh2kwYGDFVe4Gifa97pKrpAEugWvnSasxanj1KQjPMQTDtYMysVx51xAGby1ziHGYXxSxx8gg",
  "key13": "5ofCCz8BQRSntPvNGNiSFvJWtJBP28zmMznmbS6K93LbG3iZYnoDXQMqhU2GQuBZh41GE3rvQjg7xkLXyHXPAU7G",
  "key14": "3GmHxAoqtxUi58nY3mCZHUoQgtE3h7bZh6C8dZXh7uPcroGwTkohpWk617YrsqKzYfmL7H8tuFBmLCxvBMPKV9D",
  "key15": "51fPEyqkMckCXtyuq6ipBKSQn3wBJakx8nh3pMhdiP6GqkVQCKxJgu1JuHVHHtnG5m6mgb7jPAu4EuDsv8MrbViR",
  "key16": "4unJEv57UhGRcNF5sCsAaVAiuVd6vjmRTBTUhyUAnXkzsVnfMPEgHk3uaoSMyULj9Kd9drTssa3f6vaPNm7XsvTH",
  "key17": "3KXRoTBDwkWe7DQBspwro2MhbwojsmoPzcirSFd9cT3t4HebEF3XU9Yszh26EMWeMkhz6wjic7tPT4afjWMB3bs6",
  "key18": "FoXBsMTEAF1CHGoNppNrQ3a3G6HGvf9wfLfppTyrVVKR6J2m8FKmKyjYhp41d3H7e7H2WqfXMfNpfbcdBCmpYn7",
  "key19": "2miRMAGrm93PEftPyoo3VBNjmFkMomkJb1Mh17jRPATfBfypixqPst2KfLzWU5nKeUsTavCrUtTGucm8H7sTsKPR",
  "key20": "5B6YiNsVVNtyU2eRVsZVJ3suBAL6G3wdnro44E3UKhGz3tevkqr3pEdwVZa8eY4WkkWt7fQexPbDBDc35upNmWNN",
  "key21": "647YbLTHfXXo4uZgRDqdBz6wFcxDHhf3cVmhNaMhRT3e7cA4CVh7MGV8SmyQFJiSVzFxYo4LP3CYRcX8JhKKrPJx",
  "key22": "2TZhGo68R1guSc7Ss4HPd8neCeaxaUrxjjUvqpM3umZdekyhFpypdmPzeCtR6PUSP18QzboEauWcTbBLpCj5Ubjw",
  "key23": "3tSBLUvH6QSCP1C91BePtXyrdWfV17M7nay4yEv9RRVc2XvFYftccuxTKNjQZMxzCaKGs7iQWhuEU9fBMr9xoKw5",
  "key24": "4YDjzZ1VkGy3RMdjLbXxpDKNocGcDSbaR5AEwV9aqeBEfMfFoxEjRwwSdjLmY7Fb1StryMVUwJntnfMSJiSXdZ3X",
  "key25": "DUjRKoWMWd5i4MsFZ1bFpVoG4QzAmS4TVe8Kq5UsKc51iR9q2U8rjgZKnkmhYe2JWA61hsZb2Vw6fowkrQruXtZ",
  "key26": "2ggkWHBbKBkA6JdnwY1iWb2AwtSsZLAWGjVeagmjrLkBTiZH4cn6fcMcxjvJAL66bhMvUchsJ9b1JbqoFuFBVgqg",
  "key27": "H1dMHaVEm1yFX7FWvN8cSpDm7YzXShB2c5bBveNtTxxjmhkFEVN1idQvMmwkzi45erLfZpRiNq3wBZmx1gKgbvk",
  "key28": "2Ybpxw14zaoUcVVXGiUZSPxNC1djmUScM97DCuqp7zKEx32NbYLZq9LxYPxhWSb2Qy58aA5BSn85szNeS1AohTVT",
  "key29": "5Cbk16iHnyVHtE2v631BhJuBfLqezFytecZmwrx1FEL77SHU3P4kbvwqHv7Jk4Fq2fAqoZsnHk743KxXsvAaffFU",
  "key30": "NkfyEowTKKCwPkhweRHSpeH6EnEFYGSTepXiy5PygHFs9FeKbGawFBg25BBeMG1oaxVtAj6b8cfT2x9SyPrYveW",
  "key31": "rmJWvcWQwwHgkpMtoKF4QKCpVqScKS17A3bT9MBTSqYZyMrAYriwGaczADnDNm6rqYumXuah9S5MWaRyNWMHnwL",
  "key32": "33xLc5Pp9L294JPvknj8Zntdp1sTV8g99Lak8ndRaW7WzYqmnVeQGBveSAVwpvZ9WNe18k4Jmbzymrv72D1xtr2W",
  "key33": "5qxQT9sDN1aienZYFdKutzqkvhzWYjSS5Rx4gseR5NDFW59Af6f2wv1qSMtN4HVtSwMp7XDVR7cYL7Y7sHKiBNGC",
  "key34": "fc5HUEBDHYBsyRXhEfDkVxZUHsHcY7T1jQNczJN3QPTKE3YmWB5DMhmM7yeJigBuSR8rugfVEJJYhwXtFR3hhCP",
  "key35": "5frJpczQb4pFYxaadKzhA29rV6Nn61x7US2y6RwxhpUkq729sJRC91bnMQiAoRb2TKiXV7PY7JdJDrJ4TNxeF7zs",
  "key36": "4NxfveKSj6aFj4JNVd3g4KWHseyMpBk7wEyGvY5pZC6LhMz58iTLw5dtMan5JAEU6ohhb21bJZLznt54gQ7GkrYr",
  "key37": "ArcRPhV2sauQh17zaFR7M3QZwHMaaJXFgB1z2EYekjqhz7s8kEwH6vzK7hG9MNFibH3ijA67FXknnKFDkWisQxr",
  "key38": "3ckfZbLXpfkUnAKhbpHJTCGLPyX4oxeDd49Busm1U1KmhHYn269UxJG6GkzyFk8RGbMgYaTFqdLyQgk5znxMXNuE",
  "key39": "278MoofgYadveyiBUsJcvo6fdEV1tjKbeh8qCxJEhAQhUfwueLyVSLynaqWbyNgtZ9uVVcjg2xoUUwgHqJyCWL7Y",
  "key40": "8B6Y7kMb97abzb1T796BH9Ezc1bBMX1k7geui6SofjUWqRso4kqzKW977PgpWBV96fR4W8Lifqv9uVM5VtMqJJs",
  "key41": "4p8TqkB6N3GDargbFSXXwzMX56WdmHx7kAUsGH2Lse9fG5ASpR9y9EajjK6Lt5ke7PLN9SDty54cwBy1G9p75VSn",
  "key42": "27FDquJ4rMJyNoA5H58bNqQLfq4hcmyx3ghu5vnBj7hYu1ULTNNKzsazxGz6Z5QkPKGao3eey9xqEwko59mt78U9",
  "key43": "66cX25gbJbCkZ5GW8Sv3dar3YmmReQ1Qrn9kpPJmFGqmdpVgy1bfevyy9tZtTLJ4b3WKAPP9uJan1aEAreuPVAQX",
  "key44": "4Q6E3GbTrnyFDxpW8dCSUgvxAXgESMVvcWcoNvLGPa7U2MsP256mshoTtqx5fEBTkp1R4oFrhokcfRcMpHqSYZNG"
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
