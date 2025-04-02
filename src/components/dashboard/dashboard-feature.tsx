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
    "2mXbZuXzuWspjq9nJagjwtZr7TGEW2JgzRHJJfuMzNcu852noNNz3qMyYNvJq244Y65fHNQ9GWXVWPfViTu7nm2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31sdWeUcF3PuSotWGGHVw3C5htvWTMasi1G1EaadYZctwtnrc2JxosqjPF2qoDAYVvEG6rqyo6pmmweThG1ku4YH",
  "key1": "46MhdFo5ZQM3vo45XcwT1qEckjsdQpc6bEXR3r3FYKYyAQgGa1AcVLbW2cPfEGZLTAFUK27tSPLytVZnYqnoyknw",
  "key2": "5EEccxphDo7Khf4Awo2XBDcXDGLfe4PVS5YG7XtznKGRFHdfGLY4oEBpEHs9YBmQ69k6x3UQjUjtBvDcuE6qgYfw",
  "key3": "rKcA9JajD63V1RRM5a3xwfo5saoj21zQadvgohSKUP7EPs654UhtB69wA34N14CRCx7sbAGgEEChAFB6TfKiEEj",
  "key4": "3fiBHm32HV5uUwaNLV4oQnGie7XXLa6h3JKLgNDqCknvUa1qXLUeGyQ13JDvqiJqh4XcdRqusw1yM3ovKRW1HMMa",
  "key5": "42We9URZ7txoeZZi1EHxgNuYL8ZXAqvQPu79Phus6iACQXSm2CfxpEY34uymkSn3ibXFXrKRVKTVBEhLKz67u6rR",
  "key6": "3GAwZwP3e4uEmvaUMXq3Q9hU7W8xaKJujs9kZ9dnbn9kLUDzY668ukiwRBT8nPAgMZCJDC5qp3DnQiBApKPTsxJd",
  "key7": "2bbhQ2gukEjPY3KbLBZwwTQLB2BQpkAWnofqtoLRoRfFxgqJvHyF6EQDcWEZcsZXaygj8J2PQpjeXXRkypxFxGxr",
  "key8": "3ZiuNpKfHu56XSfc1nsdBGKdkK7tT8czqtCqRP5kUBJyZSWnaKN53cukQguAE65VDguvtirqocSBGHAeGQHYE9g2",
  "key9": "51mmRwBjfWJ8xZ9vP2ZYpCSok59SrUX8uqFxsBGaTo5ad4tdN7ECjtRfC8tBv2WD2FxeiFeHzeDupTJN9amsLYNy",
  "key10": "3ygMjRYXnu1PddAQLSy2LzRfTy4Mv6ApYYb5oceDgz4XGvenbbrGrxGvMifEsQ11v4RxYuxumtKRxrMDKjad39sS",
  "key11": "5fc47yTMQ3vhxC4Pyjf3uHjYRQz3fRbNPH9waSN5oZwcMhKWuqndCcTRxzz6dohmkgsXyfDAV6W1asXNwBRMTHNj",
  "key12": "4VqPAmYhBPbCN5xrNi7NKpgBzaC9XrSd4M1Y87g3h4fMjNHHAghSA1yuCXuWY5HjPUqaafm6coMopGm4wNT3wQLS",
  "key13": "A9PcQPsFhLH7w8JAB7iisSwJYeVoAWb8G2MNJ9RigSZgsErmKfr7dff49ic1G8HssSU8HmPhiiUK4BAzb8rQbc6",
  "key14": "5b4BLQ59XEoF9KnfuwpNPgEoFRjAcrTtCDazn8Y3RgiS5o7ECS4H8Jp66SE1cTxBUs7HUi1bCAVwV73Nqu8uBHxU",
  "key15": "3FTAou88QA7Ed5DJfd89DGSEa5MEG5zS5Axfa3gGAeB2FKALrCwPnLq4CNdALTDpA4jjxsibRbYyxyZ7cbPx9QCf",
  "key16": "46QsUaH54ZVBc235GJwfuEMWghAsg9TcgC3farPgJrJ9HeZpJ1wKjcc2PtwJCTtaKmiJFFZc6MRtvtPWsfFKJ7nn",
  "key17": "MDVURRSH1yVZ4WEx2Q1oL9HP4WPfwsntoDBqkbQbgMxgRqFqNYWNYEmCRUdzRhVf11BeWn3AKaUjvakYUzVv19S",
  "key18": "W2MzwTSMBPY43Kg63zf96fpBb83JGhhWmRBx7J1RKjtnQAHjUzRSosQcH5JumVZPkqffJfhjyJKNrMgoN2A49nc",
  "key19": "2VU2zkmkuLvV3opkmj6QPLQtYiM1UTJLRa8nRCxwWg8eMubxMWikLuqr2Mw4EsveMfxofNngaF63Pifs5tvCyxwp",
  "key20": "64GqNjdph9HAnGC2rK9F98CyGELeDvvPn6EqhheYhaUy26GikmBioSAxFWWyrdFqZwUJwe8qxbts7DVfjnMQN8a6",
  "key21": "VH6hE6YqdDepn9ioKLuzxpDHMwTEuuxYzjhUu6v4sPpWmLUxX1XHuN2D51WfopRiXcjrUPmUn3hRhVcfrRcpXfa",
  "key22": "62N6VAURmcDkjhRycxKq78wvsCx1zK58SE2oCC984zcMUdKckDARmBUgJtLkhBzrTqciyaxTqRnvj85XmxNJbyeG",
  "key23": "51mqAUdSwmGFhuQFLZMdxESqRQ9Ur8atR3oBJh2eFNPUNwgzowTufabfXXVKbgotYz91FdNzGhHoTb1HE2Lf2jqK",
  "key24": "ZEfARZ6CjnndLbXg3SpqfoSnSomuAcZv4YuBXfrMJAs1L1or8n22pWtbsPcra8WcQhLJosmpivztfSrZ19AhSa1",
  "key25": "2r1iQsB1EbwS4wjoZ9UtVH9hbsCsMzjv8K4SQuEPVR4VpVkKtm8cpuuqhHev5ZCRJKEkieZXVWttQ9pGLtxWG16v",
  "key26": "35x7uxenHdH8xmXHFZ9MDBRAT72gA5xS4aGYAbRtA7fVETvdJ3DwDVk9pGPGjBEhSHb5Xj8Xiro5DwPwwziFL5tn",
  "key27": "3yzm7dEu17bAv6s9bXqZzreVEbeRYCK6EUBtnmr8NQF1WrqyCG4Watsr1U7v4vTy9Tbz4nWGpwskEAdcA14AAtqx",
  "key28": "5713ucT5upYAdCNgQyrKsVQ5veT6gUh5FiMEBGaraiokbvWpMjnHo2R8spDUBkbXjr2HQYuArbAhYd1niNykGenU",
  "key29": "2r2nkyMMFL45U7fm4argRgrQU8QV2ov96HbHdMnus13RNz1cojufZrjg2oscUpNkTsZ5SdMqCp8yBBt6CTrnPBLp",
  "key30": "2qGcQPnxwg81LALPFuG3boxPMpvJRNyhPyjCSjCgr3PUDWdgJF89Rto2VHyAh4chg4dm8zkwz7GQb3ZTJpyKJ1mx",
  "key31": "3nZdVXHmR9TfZHqzyXiMP9iMEnqnsUrQELAQihfJ4TR1Bfu8XahbJqv2cxPoCK4XzRLZqw2LYCoLrkTYZznxA625",
  "key32": "31nTrTT4MJHNuEkaxADMv29o14cMf3PeyXVbxT8Mz92hLtTwTTbTa8V6Y11sryL7kivY1Ffozt54RcfBeU6H9fQq",
  "key33": "oQzFvQfWJEBE8E2kaeaKRs1QJmU7tSpmuau9g1zFuuLGDZd1DiK96FUQJRaLf3hKkyJLDEaxdMuNzf9R8zCtCtR",
  "key34": "4DiAhhNBj9LFd3MbNtcwhNLGAbHi3jRCDsktUp2qeB2vp1NAJZxRkXPsm7ayw2tBNjhnsq3jRSsWpRwnq6EJ3dBV",
  "key35": "ZYCqmfcJaKDajovwrKJDdtKMJ5xZPN7FNfKLvF2XpA5WYARNbEW54HdbwQ44NSe5XbR32HbEJba1H9RJZYFHVVL",
  "key36": "4wDcMHYzC9VJXChq5DLmsFuvwfeXC8iEYycBYtTN7TQwfZvK498NDZqexnvpJSmz6LY8B4bsFoxmDdiLoMCxghvC",
  "key37": "2FcUY9WTst7RP89hJbGcsmQsxUsRrPaWc9UgqinYZPDGfaY1HnoJqwJ4sX1G7mex49dcb4WEkEg1pyGhb2EJCDm1",
  "key38": "NYZ63D2dY9Z6Fo66kAESDKxrYhpDppTFUBTeBUCTaek9XZH9NM4NW2TCF9opQMj3ihfMbgE9aAzUXnQChqeBX7E"
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
