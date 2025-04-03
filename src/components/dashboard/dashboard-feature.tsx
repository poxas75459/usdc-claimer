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
    "5o218XhhxuDdo39VxEUxiF7kuzjc5Wwzgw9eUtMkkkJQ5Jed1rbU8D3p9iSRjt8NjHHYtvGVmGNPFHryTUEG1TRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHmdP4rmsG7FUhTvPFdoenBt1mwpgRykPbXHAKrWCzjGmF5WMUCsNKanJX5VUp1ujf4j8gUHXqYTL12LnSSVKNs",
  "key1": "18YJZRMUwN4U1Gdvo1pW5cbkJNgAkmu1GvdTdGuyZyFdimDM9C3TicWryRv686ZrSvWazu6dTavnR8fzLZwPm8m",
  "key2": "Y9aRGMLZnrmDBURguCTrNBJXvKLWbfSATdhFU8oUTVEus5M9zazMwfSWjcgRaSoLrbdj7xbecisiWLahCDSg4UT",
  "key3": "2HF5AzJCRTFmqijkqvyTbQUreK8v5McHWrREFysJNB4YjDJeJ7DYGhuYv9dVcH65uZLWGVbSSNzrsT8HPSKkBcF",
  "key4": "2Jop8W2n5uD39dcLcJ5rbJorKiw6yRLVd21sibMHXQJAFdVZhbr44Jaxkbve23ese83TmHCXC6soC65DcUuDueNr",
  "key5": "5hGsutdQ2W92Gp3LNTbaBefUnEg75ZoWWfhUik2Cd7LzbovgQodPg981hdymJ7D3w6cBJhYYegbbU67p6NJ8HjsS",
  "key6": "2boH81MRWJBTEyZhDjTjtu8DR7PLqHJUkr7Jhv8nH28FybF8GLpEWoVSRPTk4waCN2NMWAJSivDJFJ1UoGBZq3Sm",
  "key7": "3BJYY7r6uPC8LfdYPfTpL1YqviPkCrHCrjz8ZdRukAyY1yCqybkUX4BmtXe6cnF8vDUvKEfSw5KeBiK4PqJmAY1F",
  "key8": "2JfoxskPxXrMJ7HACos8p99dPVXfFNnCsS5j14nWUZtQ22cW81Qtn1jiLu6DrqUVCCbc6NAeDgMHRsGmyqinC1VG",
  "key9": "5VT44FktpzRwHstCy9E5R2kPLoB4Ng4m8Dk49Yf1H842xjcS73mgHmCsbfwasrAwfsqWHo1Pj4k2sPoUJA7Pwjgk",
  "key10": "5otEi1hcw5vifuCiSKRQt3NziFJBQSsf5NzEk3wYWijA2NcUwe1Q4YdNPcsYFXQtzQ9qBH3Af7jCqY9HUrpFAwHD",
  "key11": "5W1aPFBqgdQRtgay6iE4ev2PA65AocYD8RoTYitttRbS2cDs7MMCpua2g1GiEvsvtDMB6WfhySSsvgCXL2M4WZfX",
  "key12": "52zmhXctDJyLJkY61KZJMHjpa2xAEYEFsCcSGhSMu9iCoJPpSCckrikCV63X49NNAxthFfS36rRb8qE5KDFmgAw7",
  "key13": "3k4p71kmcoAyV4jLHyAipBZNU8Ab615xzGaEiBLbvZfqaW4dp1eXyTXUXqrh5v3844p1SY7rUAqoR3dqEUJEuwnE",
  "key14": "45cMzm26qyNuYKG4WVt2wsvNAco2eyo4DnLDDAnfBRsSCrxXPm6RE1B68YQ7EUM7FqrpM4DmviXLBEX9yRCdKAGG",
  "key15": "4bU8hgStZAXNL4DKiDHUiWHAQNnoMFhQPnPLPPnnBHW1dGNcMwKBNJxuAu5e63W3fAYaYnZG8Zea2ZyUpJnzSnQe",
  "key16": "X9Gn6W6kVgA8iXVCjMhp2HVfPHc5oZvQ8VWhkhjEEJRn3FXxytVEbLsY3oq26o1UZ2RzvhLYUCXTBRsQzqwmiiA",
  "key17": "4Y8qkBm2Xsh6QsTDApvMHFw7gV3RreQimtj2QbxTSGBfX5q3ZCLTqGbH3tLfingF2UwQEZrsmkU6DcJVr6CS4i8E",
  "key18": "vPJnzcXMrqhPewuH9m9VcZx2NQw7PSPErbP2pEKPxcPT18Zmqbb2v76quw9k81jRQxaoixS6kPZk9FLXjHxeg9f",
  "key19": "2KWFQqN6L6e7eDFNk4VqBBXFe9vnomHfrv6y3wwveXa8u6Qo5TeRVxcTYj5dsebkMEavWhg7x5pVuJcwq1gf6pev",
  "key20": "5SBqUVqY7GNdqBiTybdwEpLiGtYZnPwHRTfpiTG5pWwVuUS9XGJ6CRJ7KdTFfKqLbxqXbpx5AQNdfVg5id9SyPfe",
  "key21": "35b3S8Pcf5g8GEHrbHGz8LxNxtPpcAoRtWQYcDnG1hnjsG6L6R3SUemsDedyxGF5gvmvDe7ns59HNAFFvipqva21",
  "key22": "4wTRNWyZP1NNcXX9HrZU246msetti7QGjCzoEtiwqYPiwWM7maWUNY9gErcZuxhouRDD4GrSkgcWUJrTgvqUdumL",
  "key23": "2Bzix5VD3rpioQWdgQZSRZ8eiywUEjpFCmCvatNiYSTriUaYTtQ4iiNXgq4g5Z9o6EqwGvwD25Uwmurk3sH4a9cT",
  "key24": "59nyo6TNt6AWSW15djRRhBmCVG68yP8Ke6pmCck4JCJ6JpFaXVwoqRQT3TgcTBaVeNyLJtZHoBsraz5ktx2cSEqB",
  "key25": "2sMDgafHQbzc6ZPzgMrz4UG6XXeyJcqa3nEV2Mp3qLQukWtPuVEfmmkD7JdYAkNUrcVsDEjvF3dRmx6mfvH1xykv",
  "key26": "pvt3UpCCyJSikpub2T92dSoKjd5hbHXRDfbRkR1wxKGYnDHjvFPwHqEd1GgvFLCsjw1Ujy97PjUCdBKAniE8php",
  "key27": "5f3pDWNA5THBDUTXQBK9vAXEE8y1HVoE5YHk2UCTNQhAmkeiWdBLpwvMiQRkcZENSQezN7Q4aFwP4RfeQhWFoMQ4",
  "key28": "3u3zZaqXzLmTz2TDFuGQX6KLzS6wkaNnxBMEf2BASgKCCSmNhCJ5nVZsFM7V1fPMuSKpmrckFUaR329GEB8ouaYx",
  "key29": "57XwhJCFPD9audmszebJtiEqEM6NRr1m2z5o3awKUhAGn7VqzhCtCEKc5nVsL1cZmag5LV3zhN77vvDxrUdRDCrC",
  "key30": "3kjc2bT48PxwDBpb1mQFgC1Wj8sNyKKYitxwWxzvZvkLFcr1oND1onSEvWAS2gvEUnr6T2yjWMafHQVvgm6YDwJ",
  "key31": "3zXoi3rouDJ17M4esBJC4HYdnA7u8urB1WrFH8PTDxWe31DEWB1953nYS2kfjaAUBkmUm575PTXMajQsHQVwQ7bi",
  "key32": "4bYSdTbWCaeAmfY3dHCp6A7VUJS1Xery4wkaB4FJxZjh66skCPPCXQAT1kiLm73JVGkit4kjLHWCc7wczFAgRPkN",
  "key33": "5Ysr5omf8V3j2GEsXSZD7fxUUXNmED1HGLvUiBzAyry7QFuSbfM4d5m8cNctq3W5UuxeF3Gg9DmyE91ooV1NKuWC",
  "key34": "2TBh6g7iK3rgjwrMrDo1VbgjR5p5jrYL7TTDCxkqZy5364KMh6CNxoHx1aWj4RXyRiapUporswrARryhafVfqq12",
  "key35": "67j3Sq2L5mhswshT61tNByXRnq3f6Ww2WdmGi3yK9PvVgcxDUtKn9rmwWA4u2NSoEsFTJR9fYomvbENqvCZi1P9S",
  "key36": "2JoQ4KM5QwFih78kscjcNoUHfmSpmVwFW78GPoSeZ8Ng9dMpfFydrzMnysuVoo1VQbve5mrXomE2JXsraEqQe1tm",
  "key37": "2HcF6wEq25XJ4MJUYtjRqAnKvNoQw2xLfjNjZ8Jideh3qQVS3Wzj8XPr5AhVZuQnwc91hRie6aKSpZ4ap5oy15t8",
  "key38": "48S2cUi8aHrdFxrfUxYpNvs46MvzinkYjk8dhYc4vHUhwbXxcZHtozqhqJR4VP3QcE8sz3xSnYTmogRLR2qaHNUk"
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
