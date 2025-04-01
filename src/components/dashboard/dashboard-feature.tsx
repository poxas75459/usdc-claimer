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
    "1Dt1gg735BbYu6UqbsVowpBfzBHcX4r84EWPtCoTBpL2nyctuV552WK8Y8j8E3JoCKnVXh9B56KzLmJKgurnUJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5miVaEeGiAvvpzSMP4DJ7GCbhJJLya1mQmCWEbJpm77nr55Kxk5DUpfp5e6AT7dcpmVqqun6v6ETsHyjX2HfEWsS",
  "key1": "2WhfnKXxV5LQ8Bpfax8QWYfUmWZk1dCwFnERAMGcEJraiPQknjv7HxkSnAQa9fi3XEuuJpKz3VW2wWedsooyLduz",
  "key2": "bJKUbRoeMEB33aL7ZVVUC56JhGoMBcSCmz6PyfR5hGN4J7MY2ET5hCrkPPH1N7F645V8uTtseYAy2Rtg7yjrTVy",
  "key3": "4SiWRjKR5Bn5RVpSDcyRGsSPUjB1Jqf1skyBg8M1GTg69FLWtnr6iw9RRe3mhZrPYtdCjgsqGD5iGSG1ifTYfdJN",
  "key4": "5exNMZndR7ZdhudDC222pjY9PyQXGaPTC6Eg28yR5HANkUVCfvqGXJxUH2fkQRtbEL3zDXbBQy1Yft8X2P8Cj5vJ",
  "key5": "a3ogE4abwJeGkXGHNqxUTydNs6JobdfgRoPYXRAPLaT8BmU5wLzc7yZiCSH6WZECnFuhLuT63PotBwDHKjzRKNs",
  "key6": "3zYYkG3Qxum4vB72TfmUi81NwMvRpMtdZJ6fehr25jXdMUtp5aYDKMgsRUZjCmHdpfrp1p6eqZNJjv3w5qZAQ9TR",
  "key7": "4vQabg7Tx2eqwzSNfZZQqY1FchW8TXppraXiR7iEV4D5YVcBux4AHVRDGbspXcKVaD4Ws5JWKXA53YbJdqdpDysC",
  "key8": "3mNRfmANFqQjg7ThLidN2neHnHGo9FJSJkrPE6WkC1rnL6vgNEgpv5Ydk8Jd9cBauWpiK5DjaPJYqMuxFza1zhv1",
  "key9": "6568Q9A7sQNmAc7z18PWBFdwEwUtS5Dkd8tVkfpiCLHQBQFTyAthaJ5BJkisf4oXcMg5Fr6sT6t8EZebpdqysfny",
  "key10": "2awRZsFCvVPqtfKSri1J2SYuFx98bxhxvRDpNL7v7DuaCB9rBAbAoHz6aRTrGeSNehcFNSNWVzq4awLqcYMD7EiR",
  "key11": "PdzkEnt4wYWDNsB2KfhGK2RyRSg22arKqT8gVXeLaWzbz3xSmn29fFHTJigBdcSx32LqbWhDseaUBPBcEW7RonX",
  "key12": "5bB2qMnxymp7Tayv9Z5SYJj5CHWC8tcoQ8zGpWo4ti3cPWRVbZK1UPYiJg2JprVHksMGCCLSULUWziwDNJ9UJ6ti",
  "key13": "5DC5NVA1iepaS3vUyyqsmVUKna9SanEkwCDx9xzmV5FjJEnR7URruD2YDNBXhcxU21poj8KnZWVeE2hPAkrcXRY1",
  "key14": "3DpaoXqJC6uWC45pNeVeynu63FL5BowmAcBXFLyvhhzNibsE9GcL5Gar4bdScPKp86AH3qxc7JRbV8yweEfifpoc",
  "key15": "5ffp7ESzP6Ea5tUZdJiDKd2kuU1UvUgDjyR3VNPq6pKFoQJchB2rZoUV7ntvp1sGsH4LGu5fN3z2tm8NwqEBW4tW",
  "key16": "4KEvz7JPQjWe3cDLgcKSK4aYbrSY7LgcfYEfbkzTYmXCgYCFudZsydS3kMSeeaP4evJMKEgp8o1cefxSo4sasQvX",
  "key17": "bAx7jW7ADf93sHRXZopRa27ZWUch9etjNRbmv85bZut5se684Me5Esk7jAHZnJgBb3tfbzN7CD4HfgLfeHRqeDu",
  "key18": "4FVMjoeWwMDhMDUiEtjuAYqm6WrrkduAgnaiWFUXLbRRhS9c6k84JsHu7pzgUPoyv6Fm9CrQtUa3M1ANCnPEFpSX",
  "key19": "5cyRyPcxmfSHZVB53mfdujDQV1v6Hz8diaLr55VzaChmBzcCbicvbKNKyL94HJ2nD2R1PGVSfdTzq1DfPoBxdTAA",
  "key20": "2GPrXHJSqfwKWTEcsvnHFyMjya93oahA52i7A3uY67UG286r8FeU2T9CLG3QAy19wBPcJGyYv5LZkqD5wMQkG8L8",
  "key21": "5oDWDTwXZbhgznDyp9iwnciXmiYJp1We6mvMg1cUtjzfhQMKEjnPDWW6SDGNqewB12GXfPKN3DHQ87VYjg7yuwvT",
  "key22": "5U3Kvy5temZjb5bxegin1s6BLJ3gvT99UG2cZ6Ec6YrHkqRyoi74ZbtRhiT9yxuJrxRHNXdUKuAdBKeGS7RZqNJH",
  "key23": "44obdRBZH5sD6xaYYjREXUwLzGhwuZUHCsHum9gAn9Upeo2dsS2riun7zzZeajRCXZZFmfa8QxVViiAk7TKmX3zC",
  "key24": "5kCwq5qmNCKE9eYtyCHw3bEcp4Q19nKugehQDhNyn8ogcBrG1t9bP3pdU4gkWB3e1SvLcanp47KEnZXB8hyzAgHr",
  "key25": "3QDhWS1oWVkwAsAJRTgAYnpUjZhANnTum5PuvZyVgAzPTcR6DemyNigPGhrnANp5zmDDVGNc4wALyChDHxgj94PX",
  "key26": "WrFEpsMGG5qp8GuG8d7cTW7JfJDfYWbqPoLRrRDTNHBK3SCupaLkRUCAJPv8qttQP3BixVAuWBFtp5ukbSD9aSQ",
  "key27": "5TdxF4Zqz7Z7owyzb4gcchCffXFyF4WdzcgRx7yVFyRJZrW11k4WJpFDDnj37F2i6z9Upkd32sj3T2qtz8mZQxYN",
  "key28": "4yRaBkxzgMBUxkhkWQWtrTzgn12LqTysiuF1CRmbFBvKamFjzVPynoaRuQpUaAWRfpZVsFxMGxb26ybJahbaMVmt",
  "key29": "2pgvMgb5W7LVa7Kb6EizMwoEbJguwoX48pzM7Zv31SrUWmgPeFha5vnLNrj3hKo1M2trjRw2VtvfbicNDLADfyCP",
  "key30": "5Zsec7WjrZaXHV6rAg1xEYuRNTaQZYABxCnJD7836c47ASXtTUb5oyLPnmvFjVTfMzcTH9Qsn1yGsvZtUauuP1pa",
  "key31": "55BuoS3jWLU1vgdsZz6eZWit8NqLAvKhfDP2rmKpeMUjujsczWJ6tZeXNVHUC78KD85ct7s6sdn9TNhpgAbHiKFX",
  "key32": "5Dm9UE8E56JoBo94ypE2BszudUzyJ9gdsuE7XHpDfkAff9WiTMKBt29nEnqXAkzAHu4VrrxnNzM2v7YRbNsynuNp",
  "key33": "3kBi4UPx8b7RhQjzV7r7MofcTFaKUMxbrDPHbkrt6d4QeZienqSaz2z8AFmnDwwYt57B1ZN3rDBB32Z5KGewWdBc",
  "key34": "MyzvS18a6aq44DTNBvFxtBovUcX9yoZiRN8FPzo5BNNKop2ERDKMAEG6iawDqXjFM5AvHvehufg4fkwknXtCMEC",
  "key35": "zbgubTr2cwfi3vgTLX77VoRrmhtXvm5tZek7cXidBdsohAsyzKvhcomX6StajaP3yygb46kya6VPzo6CnfsCXwj",
  "key36": "4YcNee3Zw31RSwZKzW3vwj9j3DnH51ggKQbvsdRaeVNwPws2YjongaweE4R98xqcvS7WBYaAQ9nDCNJpVNFTex5F"
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
