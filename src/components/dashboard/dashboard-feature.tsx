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
    "3ivtkqhxGimzNAmMyVDLT1fTFNvQDLghb4R1566q7rzCgQixsbKDRsrFWBsDvTZfPF7BBEFLZ9r8zLc3wwAZ4UKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nGPL2kyKtvC27hmchH6RUqueunFYqPd42fedLTki9yynnLqV3mUTqZF3GyBfmYwnwMv44Rd2tMZnEABErujD1Kq",
  "key1": "2LjEazohAD5jhxPKmnWWkFFwEDGX6L8j3xxEYFTJDRZSX3Abgm27qW814Wibo4kSJ2RpsqfHe2RrtSBXNx3Ci8Zp",
  "key2": "25Tx42wGSzt2CRdrpPMLjTTaK4ScG13ZuuFFvLUKhi5L2yvyqXUcSb2Q5JH9zUKcPN1gjQGuahx2e7bi1bQKKwmy",
  "key3": "317U2zdLL8ZdF3594DDy16jkmJy1w4iLT2kveNpr5BQwfYkZCeTtSntthgmwuBPrbtgUbJxPYwraQBGLP9osp184",
  "key4": "XyqBQkvMRD45U19kppRny76Xj4JszEaGYNA9SGa8npK9Jmog2qzTMi5rfy9i5z27BL3wFt5a4wACzjXy49Sd3Ud",
  "key5": "ePNw4wi68qETJiVDBWkdcDPWza3gQY72DjpjFZWBjQtc2LDiJ32yKrkWctgGU1Pc2YU62ME1r6mCDvRBeVuzYb8",
  "key6": "2RAQUXi6ErKiPzudxe2TF2EPmxK5LVA3GHFJUATcKqShfMPeYfZEbjtVNJAt86heT23shyJBDFZ6Tgp6gxMA96jB",
  "key7": "4qdoHM9gQ3LqMbXa7QVnvojJc7LxDoSCZfgrkDTyzCgYByZdT8iUvVjkQnmU6tN8Z6zZTVN1od2a2ezepf1iLwo2",
  "key8": "2bsu3d4FUKRbinVZ5TH8fQmGnL68ZctwyqyMEUuCCfVvqhzyjsxoGECRR75Z47TqfECh9Ns88ZvzckkDUb4M27fg",
  "key9": "5ALnbfDkiZqiUy1Qv76SVGmyBXH1LQgyi21qW4NXqVFYPpy63m3kfVZNa13kKFAJvETFqjiaUtRPzHqiVsFwd6YZ",
  "key10": "M5XWsYWtR7JBwKZ2r3e1JXAjGXxxZcDALjFdSM5vcqMjxs9wE9z7yswS1CxfP4ysrxBYv4yqEkaiw5E45JpYyb2",
  "key11": "3uM2BS6hmgggAyvN5mo58TrcoamPddYMq7CmiP5skguSrTtC6ADgQe6ipXwybKRjHcse78FahYAyvPcoAiuQXQT5",
  "key12": "3oR11PSZ8ws1d4QXZgdDaf4t478qCiEmNcS3A7XP8ysz3efLkfo1HtRwWMnoSUzkoafuYX2hY4MxpA7qpuBtVNCi",
  "key13": "3xsE3KjJLEWzmmoZMQmvLkQUjWp7TvMDFESaWNTAdA1r2kbsUHkyBfACYEQ7wBuoAujp1fLhU2UMj2uQA6V3kJv6",
  "key14": "3gmsCppDsbckKgLiXedh6kNbiamj2rAvJdyet4hco9xcdfJmhbSE9MP6vCVKR4F88fCaGX7mFSDMsgXBssGtzdgV",
  "key15": "25bCxcsXiPR6Xa7u7qbq7hAuiV7FSeNjgTNsYuvDSSo6hR1AcK2vQDJsHTmaytxFzDThEFy8UV9Fm1w9XUifSKc8",
  "key16": "2NWms2MDjx8Jn75NKBeyJGMJPHm3P8ngMhGF42Urvigpr6XbjP18KSJygejXEkYPyx2DmHALTz1wKAhSfbQme8Ak",
  "key17": "2EtHSdz5ZKP1axFwwLGRNE4phsXnrnDT4EUb8PGmudHMRJ2fumkXRZNkK5fkPTgzDLg4hPgb4ebiFUGkD8jYtYa1",
  "key18": "3ubj44WCaWjyeUhsQJ4MGbCtcXquxvsj7NhKteUnPL8HGSgRewLNTKyzzcSPa3C545YHUzEXn8DyxNxvUEJLuQ3d",
  "key19": "4QD22Tpeof47S1uG6KA2QVkgAq4KUTxh4nP21sBm2zwVGPryWt3SSD76qPC2WgsKP9FTivZs1TQ3VfTm4dcfYHUm",
  "key20": "wYenmaA4uDuN1rnudiPXMkhtj9ybPMziq956wyfDdFZziwKSo4nY6WoSint8d9C5LeS8K9hK5LTPuLgSWJa25dG",
  "key21": "2R7chbZFJchfXZky7P7HiJpu4yzbXSeJoFR9LatqeeoeexhAfnMWJuGsnaBkwA4tbYEij6QAv9cvLxBQAVTD9Fov",
  "key22": "3vQ5N8qhWrh1pknj5Rv1miQhx8Hvif4reCa1TAu9tgZvNCEfVNQj9kkcnEJzH6arREC7vUWUJas2ayXkrf5y8mhB",
  "key23": "3mdRva2hmTWHZsNSHokdp8qL6wVBh6CpNLaiFKAajTqMjHnaUXCUV1hzqGia2EXseyCMUuPk3SdKDgP38VMpDStA",
  "key24": "5KxjaimhoxbRgZDhenyGtX1ExHtwmzMwwqadS8Sg774b7tUdMgSyCZrwuhhfDRUKyDoKWg69WVt5PRz1ZivKoQsS",
  "key25": "2F9ceGonsiDWHmkXWL5bkqt3ZYjSQC2NX2sHtsnnCZhLJS6jMEEFzA2vSWrqnyTtg1DRgCVa3nSwbW6eyxyesd2a",
  "key26": "wtLku4jvCp5PhxH5dFvCPfE7yXEHGxYb3U7FbKPzQpftVYo5EEnxiFvxAjXpLt8q6CMbf3QRUkRLpa64Xrtd5uT"
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
