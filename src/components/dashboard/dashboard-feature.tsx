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
    "4BLStKsu9PuYBSfg5iBfgBFhFKFuDZXkNuHLm46XY5Wh5JbJtynQ3JXk5VioUwg3HrbGyRr22X5KfWCzJuRh8pGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "483vdN36DvUFepPTn12iArWwEonPzEs7Z28w8ctieTvf8u1Lhd96j7CmQm9HAgCWNRw3jV6D9wtLg3XkX8F8MHsv",
  "key1": "2Uq4neECUnCb4dGU7SzaXQAp51SPdwH4C18nkeQE7rft7N98g8XccnyoReUzmMKk3FumG1s5qT9LZZFTCCKae4UR",
  "key2": "dLvN7pTkLH11Z1uFvinLyr5TSp2r3ubckRjqVvzHidfM3KfpW69aCbxVocm5ehFpM2y4TNwqnJuD7ThxwbkvPmc",
  "key3": "5odnBsJdcxEUk5UBYjSMoBL4uLfC81KebfNM1BuGuuTwWQxipukWip9izS3k9uqWvx73hLHsgtGFxTmrA49c1TBy",
  "key4": "2gTmwDfm9vqM5zhYxau1ATUK6mM9XYG1xSESTSDtUY2o8NQthvcnjuiArW47Vy137JF15iZFgkVPRgGVcSBycUTS",
  "key5": "4XGRSLtrmhVRbCvu5j1j4dTe2R8dZQZR1UHYZvoyEMoZFy5WCSwqESBSZf4XHU3NyzfqxhJtuDKYqxv6u6JvZwBe",
  "key6": "5ajbJ34Rg1h1KtwLxX8KSPPdcYaSnfUeUAZrAEkpaanrCEAhkqZ4b5yvZfTEeYwyuroSs7uDhfTd5KoqNEaGTrA7",
  "key7": "5nHWbz2rymgSeaBVq1LMjVvitjntRNbJJ6ZGbsj1hUHFu5tGmgtZaXGxv89AUQDYebqPgYKLha5f4oPqSKFHHLmZ",
  "key8": "4CHKUK26ncBiEM958NDfk2oCmQT7b2JsCfuXs7BjNZsTHMv5FeZd9PsT1vFG35tGXGR633RxzKaV8jtRBY4ft1yb",
  "key9": "25kEAEASqCi4oCe2pYEbVYFCsYBNxiyc4xLYnuVkbQsDmP27tXgqzxotC7TNxdqw9DrbUvdTaWp6rN5Rgq1QFkZ3",
  "key10": "5Qnhy9GncZLJQ5wU7F7XXBQQH11YWeEidXiofk3hWLEvC6x62ksuPTZo7fbkBohiB7WPkqR3DWTfATVpASG5tx5f",
  "key11": "41cRwNQTEw9oAzhYcwUHfHmYwj8fR6RtZ19ffXvPaiSCjR4mtLFiMahAZBMbqa7sz9A8k3bmH6HqzdJBnzR1t6iM",
  "key12": "4Ce4SV4HGUocuufPVMtRrZuLpHZq4wU71BuSXQ7igpEDwFK8mLBYZ7MME55kh4ErMsS4M49ZtRfNMBzrva5Abncp",
  "key13": "5h6ExRvAqZj7cydDBAALxxtv4c8wv2nbeBddjWtvhwzEEZKJKh2Job3i8HvcJszDDZ4SoMBo6aXLAhKrXb9bC1eb",
  "key14": "3hhmxroCGyDtFKqsmBHdRW2xAR1Lg5qEKouXroPeqb237pRMNFCPScociTKcWjSopupwSaZoeGjATVTYT1UEtaHk",
  "key15": "mQkp2GaVeu26RstE9jutH62xTfMjGRLXSx9jjraRme8vi36WJX7Vxohgox2TfLSyv6m7PbgVVRKWzrZtUic8knd",
  "key16": "3YcdzjmpNJPPj12uu8dKzZcPZTJpmsqqb9S1Zj5XBG5w4ziu3gNLRqeRNPgLpKeJ6WEccBuPw1JEPenYfNtDC57N",
  "key17": "5yP3e3SVofCc9wgykSXJWagtUZWsYtchVrZaBMztzW7ysfB44WJj7YuH9wwQY8kuFZCU7dYgnfrAzRjo6cS8gj9m",
  "key18": "8EoGbXpoxv7isjVMgn1aXLYfvMZYE5hJF3XaUSkDAmpBDyGtpnGYJiBRheadxBYrbQT9Wkeu2qRxtUuTddrPvzc",
  "key19": "8uFUPpdBopU56M7aPn3st73PwC4tns3XkdaVA8L9QkFtehPB1RayQVy4NYVsRF37DfJ7AwvAzDh15SQmG6SwHhs",
  "key20": "4tS4TFppZMEwvYjeadL98g6Y7pc54ff7dVnPcSYPAqmwN6wzFjC5B6BmwrkHzDKXgaVmpJgNmG88eNoNfaSdqtFS",
  "key21": "5Uu3GPTPwsDhSjhhbEfCPynyiRZi92v1NDfhBrjuFjFnvFyQxksx7aQe3X1KMx5HwyWLnFXB8PYqncYdWMsXfZsx",
  "key22": "3pFX3MGqNJUn9Mn2dZXPZ7anPneRpYJSkN3Shzqj9p493YmhsH8wsN9itfsJqh6ppDha9BQ3CpbeiCG85KTHm86X",
  "key23": "bavdu3Pg3fHHxxLPKgpwqoPRrqM99h4SBrGLRJ1g3TS3Hix5oBdUuBrYMwbg1ATJmDE295Nve6fY469SKXmMGRK",
  "key24": "boZ3TU6W9DnahsAVP3h5iXjKGNJD1BMA5CdG9XzGVMLPht5n1eidvLruRmFBegoDTakkG7APb1S9F3ZhCGh8ta3",
  "key25": "3wTU59rBG2LErdQsNC3LJAP6Ler5cQoa2AG2hm46hGtEoR8Vy3FeuMDVaFKz6Bgbn7LtSwkHZ8tPy3Qc2Zb7JitV",
  "key26": "4GgZMdfpyeVY5F4Ky3Q4ZciRfUBkJajFawdwmuSdeuncWajGTm1hou2mPugPrjxRg1nirPnqfSXQE9ZdRVNdev6t",
  "key27": "4CgyXCuLunBqkmhEm7vuHvMWCkrcU6N21mWS7WN2HMXaTpphDuUJPryxDvVGJx88xz3yxoYWWLzpYAAfFZK1vgHg",
  "key28": "rGmnkKMZaZqxCyxSzkAqh4Hqw3PcMzMh5MoV2e34oy7tdRCRM4iLGvgKie1vbCHeh5DrmtV2UeKVeXdpiMGHcN7",
  "key29": "4nsnGHL1owRqVTiznkJUYSycZfv8AN7LWQxEAArKaejLAro917wjiLddbUHxAeXCjKAKHsv8wV2B7Ng1d2GvHi5h",
  "key30": "PGyzCih4qCRP7HwzVd5nucRbLdwaSwc9zWYutSMtputfHproDmmWpvTTgvQFAj9SZiUDVcH9MYQZ6YRaiYMgjxR",
  "key31": "3q2RdrhWb3zfCYRrNQbLzjW4jz5qzv5ctUEWgdWZEJCUqPPBAZrhuvX3ctcp7udDSzrafoXQeDA8VuJPYG6RBeEb",
  "key32": "2P295cNZ9YtgTWDzzxtACGszYmdtWD6S8D8GDjxm7r25EWMcEn7N2UfvfmWN2imacmkyxeP1CGrs3Gv9RiF4J2ss",
  "key33": "2qJR91HuiZBFd3nPWC7hkEqtvxNNykHtH5MqP5zckYv5mxgaoEUW2MMoracJD2gUvC2EKMnB7nsY6TeetgNAUCLd",
  "key34": "64EQgqx9P3JUcL1uy8CtEngZUNFc3DQkThdmMcgxAEZkATd5yKtg8AgG4QFWB3iWueFYUk8qvWSMSwuFNxKzURXN",
  "key35": "2cC4ac2crZXFo7QUr3ajf4KqgvyEXcyYaQkwZ14YKpHgPBSmZyVdx1RtU4rprdN3KzWZ1RczcvM6PXYDxAEiBjmc",
  "key36": "VDZFyJCSDwF7QHy3LKY125R5TcuXqcWnmkyPRAJSDgzpKyyaKYKkVxS9Y76p8Txm8SxxEv7T2qty2wAjnovHeKf",
  "key37": "4jthXKbxMBmFHZuoJQCv7f5rqNeDwtsNuM83D8akuBsBusTg1VEwv8xhn9uRYrF4NNkEeHRUNdum7AWLgtRMESL7",
  "key38": "5BHtmgGA8raKZrbS27JiqFki9SxeW5mB1DZCE8aReEgShCHK4kEjY4fc15DEnuX85g3nSfmLe4io1RgsR7c2xEdj",
  "key39": "YtTtsWxP5oc3rwDagQHgrBogi458dwdgeWcbsiYxjj3rCSpqmdbmHkwWfbuto9hu9ATjnpt9AvPaCwniVWa9x5a",
  "key40": "5yPYysG3Lrra7YL177qEYvm6rN911LVYULy7ztVLRc2Xi5GdK2H4RvvptbDJhgynUKyw4GNA1X5dgB92SkFLsvTt",
  "key41": "5GR2E5bscRx2LprzCer2PHRokM6vxmzUvHZsjADUHuCa3T5ZUrD5zsjYGskfsshTFbMtDLnPRK61TERU35pDG5M4",
  "key42": "3SfpL1VGvrkTMbeJtxhQJPy1S94rPTjp27t6R863n5mdttze3VoMg9SpHiEkukF2T5MpQFWwhKLMSchrWALHa9PD",
  "key43": "2mLJNMVMwgshPv53Mt9xxVxN5msXrHhYMxXxc17AfNgJy8eRPuzfr9kfXNiCuWER97MEJ9ndCE74sy1hxyFB1PP5",
  "key44": "YJRaj8CGUCY3bccTNZLpYdoy1wvVxihMHruEK9m3cKn7oEvts3WVbVPnwpgmETuisSGokRq1y6bkav6nuc6enNC",
  "key45": "3RSfLv7Qrx2pEjHkVCikQZboh9Erk9dVP8YTSWuG9GvrabLhTzYhfuHCuC5yyLiUpk9ku7PxcVL1eVyxh4B8m8Wv",
  "key46": "TYQdB7Da1GPAJpPTtBLgqM18wcHJps1puEuVpnhfsGc5QCiYZoCeExkW3SfueVyZsVFtVRcQsiz14Sc6mJEAzt1"
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
