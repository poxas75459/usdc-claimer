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
    "27nRxRMSJAUfzvQJDi1BQp8xgW5z6sC4GkzT53dtzZShqteD1cj4WkoQBU2F7j1VbmxwRdPTcAdpJMkiM6fJZpzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MyeVCykS1boJJEigp1KQd5B33Nm5jyXKEhmCszHtBivSKDht4hX9Fie3G6aCaHVcQsmQkU7LsPXUkxN1eeZvbNN",
  "key1": "62b5LK3yWL59RYgCdC6FMkB1yf2HASNou78VcZKijsKB1ZTrXxEho9Wvc1AAdwfPjiR6DUSCEr7nnnT9jpstZTzR",
  "key2": "pHoERwmh4Dpxd3rr5i44jBko7Xiv7Vi4iJi4PzKp45epVvi6BKEzQxcggYJMtYTzRHYqtozErnbXAENsoai7whk",
  "key3": "Uh5exquCYLAQncjyfX8bazFxgEGTc9TgmoojviX5ZXGSDVrjgFyZHzGeenC556f2bV7wjHzhvoKDbkH2FS5PbTN",
  "key4": "5Qeu47sL7W2XdVSQGnUuScQfqDKd6GtUehfdRPPdBLTdvA4X6qxPg9V6x1NEYeJuhPB5icpq1hukeatVpRUczRv4",
  "key5": "XW4aqZjEY6jpoaCBTudqrDvjEJsoNiao3HUDhpJuRyFjNSuVUCCDtKcxCDayMbUsevb5P5QxGKG7as5dzVPEDzA",
  "key6": "4W4bUhNySmNegxiZPrjrXD7FMi3RdUq4JwJ3FAak1NJ7VaWsuweKxXktH5vdM7JApQ6DiCKNbfErzH79S5Pd3gjm",
  "key7": "3uvLEdNUbKipjGPakuDCwKfkQFFyYF78UWAVQLyAdsyFfxDw7mPf11nsoSH7tAuFYSfonnCM6wXmoLoStsXsNU5n",
  "key8": "2pYyXsHaqXafWrAvuemsEvMgW8kVTfu3Rc2hvZ53EqEkEDfaeaV4QmGjasvXXj9vpSCwAkMYLooHErNQqwSXkJch",
  "key9": "5N2CLv36kZEWtMsRNAvQ956Y7CzVbfcwjG2BCJSPomzNjGiSGssN2MSPDnnk9SvRTemN1iAecVkYCpWXCws84Vyv",
  "key10": "2yiMUtKG3VxXTqqp2ZcpHWVWJ75VnZG8jyBizECT3tgP6LsAkGPfipvtrVY2G5c9XVG3WkTbrzV7YxSwjNouAKSi",
  "key11": "59k4Ajh8GxAyhmcuNETBkJoTXU7sZHso6yD1NRiMuvV18XxReTXqnx6odCfw4az8AseeRrSPiC7AFT3JLqEgyDoj",
  "key12": "4oywLmafifqzcdQyjBPHwvbDwy5QDoRorvs32gvjNPXf5rdBRUYTwTtMSR1odKTDGDSCc8i7SLEXJD6JCwiaLfk9",
  "key13": "nUNdaRR432U5Rha7arbzpCcJvfnVp6SSwDgpCUMWeiMSeDGaWiwVCKJNhwtocZEhcmb8juxXUxQCrcpHzfwvohi",
  "key14": "5UsRAoxwH2VGNvPoyRoJojBPQ7wzGVbKFKQHrMsobHQfNEm1a9s9sDwoDu41tW68i4Aq3h2CHeBkeg5WkBDw58AX",
  "key15": "J8FEibPRNdU7MorfFsPkBmnwZQfbWH39W7djgKFiXUnSj8fvNXwGGuBBwBWrepGfKBaPtg6jE86oS4UBjzKWC5X",
  "key16": "33x7pATDE4c8PH3jo7t3uuz4muWKZ4PNcxLoRRFMfavDZFB8N8kEXnHRPPS5G9GZgjVVR1U8HAHbpQcL8VUC7bTp",
  "key17": "AuwEieBqVkzm26wZze2uppquu4cBAQRmBWc65njFPWdYWk8t7MrBp5zeHmbS8rwXm6WvCDLjGdFmnFAa2Pu79Mb",
  "key18": "2s3nLBQ9Fay5DsKT2t7WjvcuUBhvh9bYMLxK47tTmqp3eZ2VRY14du6LffUYYwxSNLbyTUgWhC4NcJkcAgd9vbeE",
  "key19": "2BPEk74R3MYQtQR59meW6BTMEAS61wda69Rf8zLmhLk5GiDx4PECYVdKdBHTpCVZxdA3LjE6aH1uAzVDXsRumfhh",
  "key20": "49ZCXtXHziVW5DXamq2nM3nZhVsMioCVqZpsgvivExd5XpzMbbRCsjAt9QuuzePd5FHHBD9n4ShY25yExaFyeK7F",
  "key21": "47cCuy2YbskDiHF4jMGvByfSCr1yPkrm4AEi86REJkHWbRgVsAHg14YxPhgyiq7BCs6qSB91cMR44mpNmWia5ZXz",
  "key22": "54xrFVn2KMoTq2xiLPrBpYDg7nA843ynFeWZdPPx7QgLkYyPenFnG3mASPUCxUFvj3HRtxhg16vi2piPF3Qz8e8m",
  "key23": "4gHN9RpqJFYNDjJBE1QN3b7kEofNHYH1EX5FgiE33mXGwsRswkKPHdZX8ypjy5GxFwbhAHcUiazSV6TaUgLvQ7ca",
  "key24": "4xhaTexipHPWuHRguMpRrc8QgCtkR1xtkGJo9ZdpmEQLGrjcdSTBVBHKADMWf1qjwgGGXBa3kX5udFy5UMjw9Wvr",
  "key25": "5JUCsL1fx5EAr849S7iC7qv7C3g11jUiXUoo1bdEFe84TWRvkTF7q5wRDcUS4txXv8XRpSDVZxJu7FkpV1odoPY9"
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
