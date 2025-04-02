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
    "3ErG3oeYv4F3ieCTmUvdbHKF1aBcrw2sUrQyy4FXeKK5AnwFPek8d52nEiAuthswwQmsufokgsYiCsQbk1ymsMm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5244V2J2yuYy2K44yX97Q2LgFs5o16HaSj566tLrPWUp1y5DJ387jP7VBUXQVPCeaUn4Jpu5EMfh7szsTY84dePj",
  "key1": "41RGs4ugbDtzvCRPqMrwJZNzXw7w58gKRJZFZdfw4SpRKw3J98pMhKUkkuCS2vY8PvHVmcohsLotTtA9MyG558m4",
  "key2": "4FmsdG1hLBPzLAKiA1E5ZhSXGkfkzeA1odm25DT8DfcEE7R7J5178SRHq3SAJZtNGVY11wYz9sZYnvmgagZQQvjd",
  "key3": "5zJMt2R1fKCLsoRatSRxhpChUzjMuHeVq4CvUnJNgw83HG3i7CLY1UzpmDKSUnUuRspica3ERFw4jMjcBuezkDfC",
  "key4": "2QNxobW2avLUdBRbAwsL6nPRQxcLT2Wrgii5Esxaw8mER8di7vGyMGCpDjjZV1Cd1XLT3U8UqPzSdGYJ7AHNHEKg",
  "key5": "5jPKKupT34fT8pJL7cejBvrDfArZSbebYamLv15TafHrXmnxmHumvzpzaf9GRUHzYsPanMwfMWBdDx99tnTLwSX7",
  "key6": "CnbieNrebUUWgC9ExcmwQh6vBBmMCJhvLobjkraZg8FxoEizWpwpx4sREpt2HiotEh2ekB5Z34SDoUYh9KgrgVi",
  "key7": "CbhBYDQ9NkqnoSw9nqN9CCYP7AP9kPPu1dutpEkcpe5fhqvyCRbhHPMVo354vGDWtmooRnNDJYd15gb2irbLZGV",
  "key8": "4Uwqw5zPz9T5NUMqpebdPjuKkvbggk76uGMX9FZsYxh1Gvqvuzq1ytKnHuFKXRz6SkH1Z4iseSC93RtwXqCRDCwC",
  "key9": "4e7C9STaA4rUZi1YwNX2bV5sBvDW8dSgSgebQ6GFi3M7xt1vqskz5QTVjXbVqtffGW1S81JucPCANkgCuTYMwPuB",
  "key10": "4k58rFAhZK1sD7YhXhMeboUdLiryNZ7MirJHUJzwVhMbRMgkchednC9euuSNJYgAWaUtTHRaECsQGnXQJ4TNCr3S",
  "key11": "2rdCdWEWbHy4MwWHUTqahjxrgzvmk4qK29daFZcQTxqEDCiaYsoxEWJym9bjbUszqeRkcMxKaCXCHvVKSXwuAG5d",
  "key12": "3Cfbpnznfri9qi1rdMDFkh6bRA8S3pnmUEQHa5g2gXfDYeFRkF2zqWoErVVsvCpCjYYwdEWYnejuJeLmSLUSpYE7",
  "key13": "YjgtgggBLuxMSBzTqPx32iTrmqjiNh7MQixsbnZHdiNqx1iZMim9xpY1VAgpqTaunekxQ7vnPiETMDGkKfdUtjG",
  "key14": "51Lppo3TgcNd5KLiw7oV5nnPp1jZeMeprYvXvcz8wYQnSb9Y5kjcLLqixvEHKhT7h7yLDMtUkm8xgq8njrQeMeRV",
  "key15": "3pg8dBWCLy9oh4dPCugpZhCDpikK2oVySwVVvvzJ2qWnkaMvYCrm1mwxmTFFwiszKXPqi6h29jc2aSbuXZNZZEhw",
  "key16": "5cpS9ZuobztBfRqFuybfMdZSBAT3HyB1qnUmbrXnJXUmFcV3xDDMa9MVnXsT4w7LgSeKUL1fQwB3Lniwr1tZrBA",
  "key17": "57dAFLPBFkjPuRSQQZu3xXtssWsQvNZ9BHFUA4QrAef18kEc8QPn2f3XsvAwgmM2ooYwnHJmmBt3MnkxxpucSguY",
  "key18": "vtJcmYGwBMGUXsWFopNKMXbbYtCLxVLXxd3URGMGcx2vz3zSE5ff4uoSGubE69iA6cwC13jYb3y2kzf2ieKZm7K",
  "key19": "341PinPdDjRGN1BjPkAyz14JvDkoF7yVxQehCCHk9iv7vpuUz7Nh6uzMwRxJYDQTJJZi2WCK9xjNTaD4EP8sMgfp",
  "key20": "64NaeBSXk57PESW1RZAbqxS976MnrsyNJGWa6XwJ1VLBUpG3HNPTDJQ9Pt55ttzTL8yB9bWw3TAeJ93Xciwh4Wqa",
  "key21": "4gvMXSMoSWMQ4kkdsCBqdB2BP9yMiFeUgGS2BNuZruDDLChRPtJR9TXgf1iCA2MqMg9kdBNDuMxGVhh1cgpun2Bv",
  "key22": "2nY9SkANcL4gr37Qex3DWQEpXr6sWkw7T7Leo5kmy1mBbZB1e7vVutg9QjCVfz3NQmJ5w797PDBkN8c3pfpHv1AP",
  "key23": "5bRjPWMuuUZgx1cDq29mnBkGytHQZrxiWPqHd3Qxb5X1EEddwJonrAbg4ENsi1CtrjobdWXaitpSJuGdfu44mWH7",
  "key24": "2TkGw4i6WWLiba7nEXH4rjRZPhv4XNFQuDeCpBfXnQPneQezi9x9DznSYAQHisJYSWCXtmkciqdrFd9975EimaUx",
  "key25": "dgWQ95QD8sUTibgmEnnFLdWBzkoFe9BBYkWq9qYHvydsYU2iZ8i8K739Hqi6QqAdZy9nYvydA3F3hLYnZpwfVzH",
  "key26": "4WBx7rNLpagGxtgoEWxa8Wqd3BLWb6Qkg4xTUZwcCjX5iSF5WPXQszDwFQxbG9gsLPPDukymgmpUB2XX9ypCpWSS",
  "key27": "66DEvDNMNj3VjETvtzEDwM7xwke7BubrHbNRY6mfkqsxUXak4NYRdNugtdMe8dhWvQby2RfbcnocyV1a3ejH225u",
  "key28": "2BmJKepQUK2gCDnMZx7LUpFZp2FhUDr7MRCW8uj6EgbpoUTHoYpLkWTs3M5q9kYUMXFk6vWKxEVP4KZTEy7ApBo1",
  "key29": "2tr6cxkpwkc1isXWzGzSb16B7fBSZ7qtYDEPUzcQhjGTtC9CguWMUG9A8kPELbMyZjN67wQx4xyCz9Pxr7zHTMQv",
  "key30": "2fH2c2mf7V5wmSVveMw555hhBWAY2FhcaZXzSheeZde8Aw5du4S2VGUa9YGfzBhCdX7urmMY88xKJsqFUsC3Qv7Y",
  "key31": "4hexCodctDnJsqkkqPjFnQixBx5cFYY563iYeSUkzncSH4mZc9tbUTURxhu3VCiXPbRcPrbXX1imgqCxZKknKY7t",
  "key32": "4wjj1o5HqJQ7D4nYEuHy1LBwojVLMraNNbdqoi6vT2tqBurVsmmKcK1SoSkEdkn88Nc7oWGQEDGdypp48EKhorbC",
  "key33": "2EWSpB84GqWXK1QrvE5xJu6FwJ64iXaMNd5ixcNjEgTd7Z8Zc2bgGbVEjoQzHPvHyYFFsueUtysQUguFgQW577hQ",
  "key34": "4WVnXntcHLcZkBzNPRTtGfPek7GTU5MvPBT4e7kda5raUAeeUSi3UT6BR4uLgaCpNvfhQaRvd6VeuaXJn21NidrR",
  "key35": "5eCa2kmKThWw7WszqCmoeksa83wQt6xhEz2b6BpkBBtRDNvD37YJZHJj9kwYAwQ7Bt8fHFvG5v2Z3fYAujJoECtk"
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
