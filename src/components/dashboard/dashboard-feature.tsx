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
    "5b8wi5CubpRmpcvd9E6BZu8JFsBaP5EnxocQK9GYpxhzeoRMLegaLeXgkbuUbWKcZpJFVjTtroFahWf5omPUQgmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hkFWxkb1wmEFWJd3b6G5YFjZEocrkkazLgUTmS3Lqx9MARkbViea7cTmMans2sGmzHEmX6LjP5RHKRojeDSSW6D",
  "key1": "3Pvyyt9EZVA3LxCasH4zigCCj53xct1HCzeMzy9csv7Nm92dVQuuRitZbJYACchykFHY57g7uEZktxDV4WMsR3mM",
  "key2": "4tAtngSXW5KjwGpn21HzXmBb46CvMqFNnoMeXrzPuKm2WAdz7aKH5oMJKPwyMWvo6rMFUDWwhdFHxdwpHQs7KbHa",
  "key3": "4qnaWkRUH3GygBU75iK2uVWC49sXWNNtXyegxmowco5PoYuurmK3GqbHoqQSpXj8wX8amp4Jv3cPK2k47t9TBTec",
  "key4": "3qhVLCQszDFkRx1Pq3CmN9fozsxfy1hv8VwgEnPk4Jrwbuqnxcyx6Js8VRsJNegZgaHKiRS67Sg8bHwRYuhRnHRd",
  "key5": "4CS1xn3wsmThg72fM5SxzsM95MB5c91todqpL4Qr6NcyvtMiYfymU9qLFzoXPVc2uKxmr6LGDQK97J9sUDR5zGUQ",
  "key6": "3fCRSuwxPpKgn9spZrZQq1DZ5tGh79KTwP4goAdzHzqWcE6euLEvwA9fXU29SvPAmD8twsksXwC63rfKV5eB8JTv",
  "key7": "3vbv4qT3dRD4ATzULyb2SPxJrPoK3RY1JwVP1kCh5GeNdSTG2UWUKFYTrZnQKmxcP5vf4BjN45FSkZQkrfGjdEE1",
  "key8": "5XEQHJ5b21dduUWmJUqMyUofnzYGNdEC5E2mnhtbX9fNGKsjXT1wUpy5kPhU5V5FF3e14KkE2r4w3L5ooMkHcMdL",
  "key9": "3hbYii8CMjmzfULb4qjoDvTHrR9gVAtG9xf1nx2AsscVvM5V4Qb9vWYiAnwT7CPiFoTNReSSQdu8Mc3SSZ4CAQtV",
  "key10": "4MEPhBw1LNE7vLU6AC6vKuKN38sWXNuVnCeWVrF8v3i9afFozfYFatFjMh9x4myGnGRL7GLS6HFCuiMjZxqc93XA",
  "key11": "2hqiQRr4gGxCCTom6qc4RnoiTWrXocSeam2Ghd5wW8YcqTzR19byRn9ndeEXtraZobtBsvfgiNEuC1vWJgE39dqF",
  "key12": "K84QRZH2JBpLXSAkymJYuDxBhZhXGHxWFwyyuqiTPpA9FgQKPcBn4Fqw2UxqcpGptEYB4D26p4qTKRogb2thFB2",
  "key13": "ArJHT3pjtpfjxF64Lmhe4txshM9TTGsQg4duNgp76HWfxAeSJChtgj85BVPzGasgV6NHtMTGztZEMWGJenDt3vp",
  "key14": "36fKtJKPhfnowFzPis62rpr9GJ1H6WSZeTJaV5wPDUrGJ6uJy1UTnsFNDCLbfAGPXZ1fVt7fhAD671U7c5A7vZbr",
  "key15": "2WzZUj6kwxAwgtEBgDozLDuAAKC1RmnFqEs4q8VdcZToc22ZDbh2yFPzhwTP4XHbFTftTqnQJgWPzD9djbchGtpB",
  "key16": "5iwkoCvcNLMLKP1eRryV1o76xKSa25LTPn5xG9tpT8EwDUVs1PSJFRPuvppBUeLwyE4owzaUQNpRZjuLGiBsX6dG",
  "key17": "4TTF6p7EEWWM4QCdD12XBkyNWDPGrwHXqdCaxrT6sGGJJH1kcXepb88vhzxRC21oavaoWwA17WBznULK8NZxQN5F",
  "key18": "5kN2yNmButw5LocwsoVm6eSHsjJAucvh573tXQuoPiJ39r35P3vTb9Qd87H42rKLNeDirm5V9NDRQAR8bxLEXyrW",
  "key19": "63qpg9bnhgJFKLvSbzCYLKnyPrzWmV5Ut6ouNmRw5b6PTeK9M3swmmsZmgy6vYiGafXwabMF3gRr6r9X8LKYrk5x",
  "key20": "2BHgaWjBGJvoWzPdmbcR5oPi2GjRREkC3PChpezZQRywDJgL19Jv8UFQajCvFisitKk1G4rFQzZ6v8pj9Z6TcdPu",
  "key21": "66EN6UFTC2fQTfDreT5aAZjBwVfv3aG9t2vR3L1a9k5Ez3x4nTT9XbMbFXQpnXkCTNFs8Y8dzTvw2Zqc6GXZPZu7",
  "key22": "5bziuSm11y7ydVp15SjWuTDevRcmGVPXdGPmRvCCW4mvUTTBUcM83eUajKPGUrt3WfwEHiXqkUyG1gdC7auN3C9f",
  "key23": "SbXtn7r4EFtKt7LC5N8UJhcpJw5PGJKDRxt1Dfs8CLYsoEtVtD6HjzAyvMxfVFkPr28dKNx9PmY33jGrKtKe33g",
  "key24": "5tHKtpkVyHm6HicwBDLA7i4vfoX3quQsemNsGAoTqwXaWAigczJwgJbDCUdJ4d5TnrzPz5NP7x3b6xdpuX1fZFQK",
  "key25": "3nWjnVUcbrDVGKjSK3JAvSjJ2VZhVabzQB4i9noMsYFNrXKpC5vxoi4UcD5rN6HHAmdfQVaGHrqzkdo6Fo65jHnY",
  "key26": "3LsH2DwkLU7CE28h6EBaQL2TsHTNH383CGWgvmUADjVnRdszpNxUiGASyyK1bniANJzx8LsnjrksbHfhrh3ChQSz",
  "key27": "5B31ZA2WmujbhbnTLZirTSHJGgN2xCxJFbzNfYxGbZyfJXGYr63QHhuj5RoTtGpskGYrVbBLTCyS58UhVWutLbLR",
  "key28": "3AiBEdEDfiTpZVaqSV88MxMa3AUNXokmng9X29eSGCQR7r7j7WMfw2VgXbb4tWZB9z2iSq1epKvqdbz968Qsf2Fz",
  "key29": "jP6RdsUKNhm756dH47jVaGub1F2H5mXS9fHz91MTRPAu1oe8d8vmp3u9FtZJVx1bbBd8PVWF63aU3eGG1jbtA7K",
  "key30": "2rZw17KQmxBFR7vkJAUqUqVxQTBNmpDwMrnkmd6g51UdpLhB2TznBknS5E1oWFH1TBC7q24xgPCcut52XQnNAmtY",
  "key31": "4yuwFaQJvaJw2vAKQStoC8PLV3HKxupMJi9ij72raWnbmtB9HhF2SNzd89cEePfyZH5DiNaQWiVYWwTKimgzXJxM"
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
