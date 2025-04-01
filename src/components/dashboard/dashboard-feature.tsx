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
    "2FFDUowvTB1QMn3HXC5wuXUCEeR9BdT5oWJLwCbxiX8dCWdua2Sqi7K43sKV2ChjAzJNPJRWrD5DsTvzgsh1zRDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z3o32XQscq1eYsz8JJ9bap4oRciST76JDu8D3MRCG13jYtEFGdbGzxSRSfcVSZK6ouxVjRg5FC6z7ui8qrYPo8M",
  "key1": "2KK2gSumkJ79EyhJvUrk297EKJebiXs7iXCU7DT2rY2isPZYdUux92RsZt5bVaC3BaM53W312KXCJoxyq5cV4Tm9",
  "key2": "PUNMG13hM1maRNAkuoeNpjyQ4ecpWXmkjw8mWiiHVQeeVHjaD2nP79cJUxxvhdxCqnXJ35oEFZZAwm28jUryhqm",
  "key3": "5yKusQ8gVJHyhEhjsaQQeDf5ty8zrv3kKcCmeKSnyQaCUFFGNugieuWxXA2fnJ9vJefJxpEpz2AVGaaxtwG96E4B",
  "key4": "5bSrJ6ujgRBsTt1cjz5MWiR3QXCFPycYPpt6P1r1BAL1ss3ocdFyPxkontcB5ratyZvSVrJ2L5aSmpGp8j1kyUy4",
  "key5": "QYRjNzXsznP1fniGmpgi48cwN7oTDHxaKFja3aGWRzfaaMHpfeF5jPxTiEuvoRNa1hQ6SmA3AUhQbiDe5P58yQq",
  "key6": "33sPyfyZWweXqgjudnRLRB3XbaJkvTzWp8FMAHaBVhsvhf69gMiE6cvgtrfeaVj2YwUraDrBz4p9xVz3j2EWRzNh",
  "key7": "3ww6s2XmRWMKr6fyW6SQd5CmiaioxEjVAUcucvGsfyXBRZc4MH2X9whTcQzZa1chPgPAWEZvPPjQBTcKogLK4h2s",
  "key8": "4GAqBuhfs4Jns4h8KkNiBi7qXyum8V92jV2fWybDiWWzA4h1qnDoe3krKd9JKX3nBG9F71W5s9KsLDvvn6rpNwtF",
  "key9": "5mRF4kLfbnN6ghGDb4ABMUnP7cWxCtCyZX4DhyoMeNSBVHqEgZcLmXTir6ahFz2LzhAPqFxDDTyfmisSqCJ77GBo",
  "key10": "4jdko2FVuzV2RdhDdPTpVV6584qXvG2pe7AV8kC3ryu2Tj8AjXyNzz9pm4hRAvWhcM6gKGnhYh5TyktwRso2MYT6",
  "key11": "DDb1m2GQK54PqKQQRfEDsEnM9DLjjz4CRm63Eej1rNVjuBRxUdo7NBXMpLMJkKQCjf9SZvk9Cn1md5DbDe3WiEM",
  "key12": "28PGsnh9CsATDxE4KkSj81G26YD3ykZCv5zwgjcZs7jZcGQWNwXWxjnVYdfhsdknUpVcHSQ4UkWFJ2cdpTAgvb5V",
  "key13": "33aDjq8SeEzB2dpkeGpG1d4JropRFWyq6jfeAaui7AKay42ovyZwNSPm8JL81yFeo4f4HSf6m81RvEpENd95XaX8",
  "key14": "4f689DBt3McGxHFSPTRugnkvkgC4HXV6jopob9kNQ6Po4p4zV7fw28jLTVPjPh44sYNN4Z7rE8u54GMcbp9sZYn",
  "key15": "3deN9DwyogSzXM9uz83jyoh82Xkc2CbW25GdCdfoJokYjYYaupMcSaJVk1TYzPV3Yro3gmx64Yem6tqXPQJE1LvP",
  "key16": "5fAkXG1koEWLxgnFr6Q8aD73NwHcL92XVPKjCTe7Pmp5kZHSn6wXCbx4Ezhq8o7f8nQWU35gVdmvE2SnzCbaTpxr",
  "key17": "4jCtNNhzCt4ZR2sBraUj4WpMMbgpkVqpCh2GXmjwUXKAe5uJG1B8KN7xy6BU1Cv5ZZFKrRAuXc5H5DQ6mis4Xbru",
  "key18": "skTzsEHLAAyvEczGUbzT6zY7psWY47af4Gdq6QTxqmDRcfDxFW8VsNEdMiJGDsPthi8rfHWetVxhTkQzkzvFCwZ",
  "key19": "tvsABmXuAvFJiSQXcxsNGpeS1uCXMWnD4qGCDZLLmU3Zi4EigwmidCmZYEyrgN9YETMcReavYvWZFEbUWmtnHuJ",
  "key20": "fj5woF72nRredYoPeiMJ9PucS8Zz1EUzq7ue8fvozv1GeeJ6fsqBG9Y1ZTpfUvt6SJbs3TkQgFE2NkX75b5JxSA",
  "key21": "3L79p1KF4aVz1NZrRNDgCZ58VtjMVh9QDVfBCkMf3QaA2cDqZGX4Mm7Hw3ELWJM31KUHaRXZjtgVtQfa37A3i2BQ",
  "key22": "37ene6qZwmiNcd8JiUXLgnwjKN59yQRmCpoKFcbiv9KPqF3xkeotASNnW2cH2anbzBpxhzBWYC3rWV1F5PGjzaj8",
  "key23": "5DA5ek3kxrifPzgUyDKNuHeKN5SQgR74a6yWRPwLGUd8AE4j2V6gpmfocwagRnVD8ygwHv2N6xayRWZM9S4RhMcU",
  "key24": "5GYyWK18wrikmypRq9vwJ3hfWLjqpVPuciy3XrNcqJVHRRfL2z9HVCaBP2y75ayeM3Thnqe8EDKemKbGJch68tJM",
  "key25": "5iiLd4VzaWV8MWDW3Xw2pR4HZk9rk7yeHroAPxrz6tuwRMX4Ps8koAkxgssjQ4FmAd9x4EbLnueajaxuirAY9qNh",
  "key26": "4yLbx5HScaaiVVjEzAycLqCkgavr7TiLCxWe25j3tvsE1DHF1P9S1HrxVMN6cMqEVQn5CFEYhg138CuWwGtJ7EhE",
  "key27": "3VVY89KbFqfPf3BSy579ovbYoz89DB7pkANxEfUbx28TQAhfnDKniJ1uQeMX2e3UqV2Hwsx39vVEjv9PJ2XnVFye",
  "key28": "K6Wk7WyMHU7pK84DAKdLVxGKsUwMec29dRrjm3FFQf9ucKeo9m1q4tA33vZTVNaBDcEPcSNGrs1Mar28GHRbLJs",
  "key29": "3rRsJzhhNEoNDGZuhoRwqZ8vX9E7L8N8dYsX8r65Q1P9eXXFquQ8e9wYRXyHukaJa2h61jpExezZW5ZuKm2GzGSm",
  "key30": "5m75ufwEXzhB1qj5HrqvUvZ6TMFgNbeMpqVSm5pbemoNSz8WNKQJgYQPPpThnj347F7Voqzhip3achBHrPvgNWKb",
  "key31": "5dU6omSBPr1KuHvYQHhx4eGYFBgMRkDjTktyxHBsfsWMJ5K4qN3hSy1aFnMice5Gr9h2p64zDPU1DQg2y1BvENTX",
  "key32": "3VbNqdpy4gfKnxzAj18sgn7JMD4AXdvdgg7BDhBfhBcU2HswxvomV8RwBXPcVuHHY6cM8NrSQPSGaRyPVVFXRBYF",
  "key33": "HLzzhMWrWJShhkzXCbY44BXBARKn6jvHkAzNB8ADPnWHpS2Bh1rgTfkiTsxjjde4drpEnE1WAqVa6RvGHFoMtkH",
  "key34": "55AyerqqBSSasMxVmcnWPgQJNTm2N8JQ4rrPX9hUqyMQxkx1SNBwS3eg9vtWqAymZXxsgLEmsVLQ2XjrHQ8QBVGD",
  "key35": "XcCHxE1tUEopxx9CXKdLUPFypaM6WYwAb1JD6roECA1SYbkR7MsUPsL591HSXcTnYnNUVebdtm69rGrDAXinui4",
  "key36": "42WDq2xryTQRfJR5nWqbmqFGhcih8TfodvoM6do3LRY4JMnqgQPaMrjumXPdXtvxmBpgCuuATi1SkWDYtZnLRzKk",
  "key37": "2hzoJTy4qb4obCLRnAKPxcj5RivWDdLY5kPa8BZUMAWoSBiAXzDuiUtpM8Hh7Pz1eSg8zv7sg7PRpQum9g6GfS8Y",
  "key38": "34MXWVAh987SbTdGwsowdrYzxMwL3tFKQjpxoRC6qpJnB5oRCG9CQS9D7gQoiwHNDqmrvPovUnDSDVkqWzM4CK7p",
  "key39": "5o1w9nz2apUtvNRq4dYAMZnejVMN5tKp2q5GXQrp5ABFe7qkcgViZ5qprgbdnBExEh9crvhsUi3kX7PtQQ59Tiy5",
  "key40": "3rMV16wi8y8uEbdAUKcSePwzP2DY3CErHCjY5wEDeYrem99u6JpUN9UWoBwNhvjUUNc5BCM9sQu6DoSA71zCp3vf",
  "key41": "2WenVC8EpBgP4BiV1Gxrf3Fm1ynt4G2KL7rqQHx1PiL1WFDTRRgQ6SnkGir5rUJYYPNPTY2KBQeM2ZoU7g2S1ft7",
  "key42": "3LkQvXBXxzGFrrrfoAeebrFmQCRYWarToiEkm9moxMMT6mVeJ13s4c4jFd6j3FD6fkbCGmxNNGmmENNGSGKrBTai",
  "key43": "3UhijMop23YBpiAmRT8WCPYFXdzZ4un2ytbmSTb5CtCDKjuhymxUTNueBft4LPmqicMmcMKT895PiW1gv5h7wjMM",
  "key44": "2zYSo4JzxMvh1KzoV1ibq9DuoW2tH5UkzThATMZdx29c2zhFUkaSWAh4DxgHvKoATtpsmkYjzKrsuXSqZCM6xcDw",
  "key45": "CCXu6Me4rPiVLRu7n22HsiQRsLC6Eep8E5FRxrRLSqQUY7yBbDwy2SeRGpxkAbhvBoU9SxbrutGZXoTV3KnmPNP",
  "key46": "RNCrJ4z45yBH9Wstj2rV8AsfQnvuFpN5FkDoUmGXFfLKnSGPTfbSWnhbEst3Jo32RZ25uscB85ar2yDwKyM9NYo",
  "key47": "3QZYQ6w9m9CJLuHHFT8uMsJ1oUYrcQuLLLT4WRWMdDJjcbGHBRxSUNMzSAbMqVyoFw12zowDtqQ5PhXgLNEtt86n"
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
