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
    "4zKNpE5qRXRZFdhDBm6VqgzoSt3fhEnEg2CxHyzuqzsWScFW6JasLsqxb7UkJD98MhcoGyknVJQYHR7Up6FbyL6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywDz4T4SwCk6bq1ZtarH4QMUUqJf7syEnPCVzpyKJksvTuVLuL1gppx7ucuczmoay9RdEvvtvkuvDssak3vzndB",
  "key1": "2qpP4FcSqYfmfeqiN2CjuX4GRSFCGBtj8jvBZ34Ti9wCXV3XH72PaE4apFUQzkxxpbFT8mJH2VXEnfpaHCXxMwdB",
  "key2": "2NZVK7d3K5E3wSiiqT2kx7crUUYw4h4RrVk7oZ3LKz9h26jo3pSYzVYnhQz838BFaUECbMdhpWA6kevTqX8vR1if",
  "key3": "4E5iUvLj8UCeD9dQJ4fL5899QpddGiQ1qYMbpLJw3DWwezUbRd8yQ5WBKX4XM1JjpCfXMGtwPVZCQQhT1cQP6rMi",
  "key4": "65HeJ3kYGAskCHvWEMgY6yCVPzbPpzEzAMafzusHQYQCN3L71HzFKmRafFx3NsLLMMUoFEVPrPYf8KqEte4Zermn",
  "key5": "siF6kVUuvKgBZtYEvij35evcNiSTC6PWuzngiqGricG1xwqWwzhkhepe3QHogpU8GLo8dv9hsGYPFZc6Coc1rV3",
  "key6": "3LSn7zg8C869oUnM1DzVLAdK21YWGJtQYfDNBqf6R7uPzCngFyCyonBreLqGo14MKgbnjRP3JpHQ7Jzbc6q3mHty",
  "key7": "J6uSzo9VPgaeKG4s2kmdFykKEBTWm9Me3Y3WhXawrpKRiBXMsSx7ra2PDJDTN8NBHcbjovydLkfUjYCx9dNMsKS",
  "key8": "5vXJr1tWnQ2N4YApuHosLRNVDuaE7NwDfzUmBab83YBnysB2nkbcWLvYEgL5inRM1UQN7WXFYRfgdetrneApc5BD",
  "key9": "2qCs7LV1n43JadKAYsLZ1apV3SP1V4swT6NQGan7KQKPnBHDjv13SisEWHmni7VpERJLz4TM2KED7Z5oB7Qs77F3",
  "key10": "3zNfbTQXaB5GPCfN9QjF7LS8PuSfYtrToUNYw7RvNMKo76tUMfKw4ssH7ZUAMhfpoESWjg99ZisvyN8EX2LDX7o7",
  "key11": "3QR53iTGca2FdqPYuAh4gPAhrRrP7m9yV4ZwHXFXTZLWfL4gu7oanDCDdC2SVHbAHVhZEF3yBLJveqskME5upfFG",
  "key12": "2yDYqtnQod5gJcqKY1dnV68uraaVR4jrYVPJxAJMPX2MTsWaH6wsytvNm7eSTaPfAbsRDmKVMELPXBES8rWvU6UN",
  "key13": "pbin7hJoVjL7ygbeJ9NxMJWMDjXXcC558RDQeTw4LhgNdpwCdHK14hv31Nx6RWq7VZE99qajMnKKQYNMn5Pykw5",
  "key14": "XJyoQtQT135ZFBWbZQsDSwFKkTZ1Q61fKLVgsU9sQfPGxtnd8p7FHtkZff11eJQLQhnEeBa5iv4GJoLmxuTQAqo",
  "key15": "5J2KHEftzipNq3XqqUaREfzdgbE2wZwmARieVcgH35ubygyweAL6s3hfqieDeKoPwCr3VQmj3HmvaerApQeEsCqD",
  "key16": "GjPRLLRzciUcCyEYvzVMwKHj3h3tbwqQkbwZJMLGA7EJb5HzYSHULUBHC9AJTDhf9gByfE3F4wqbB1C3wbKEDTz",
  "key17": "2tTS7zyv4f3v1EQpLFPcwzoMJkRAjC4HQnmokBPbQ5gFj6FEsjuzgSBKPUfrfZ84MxBSBMgmZSDcU5CWQhocCD1a",
  "key18": "36kTgdN7DYaJMwHLnvk1Du4QcjbjDysz3S2NhpYBzozSLV73j7rsaostAzcEaiytDYYtDinnofw425DMaD1YWUPV",
  "key19": "DggEGeKzmW4JEroAatpGKmarkBWTgaSgC6APBVYaev2zwkCzWaL89LDHmdgMP3BL6EfFPAs76T6P1KG1orPZkGn",
  "key20": "3kKXF7mMt1VCwQawrPw2FhC1ZCqr6kVTtL1GMDiYcfp7iW526hra7JFgbNJXqsi3oz1uJesoCRfoGbywCY5CdvAd",
  "key21": "2MLACeCjQQiAxd4TjXNXFiiz6Y6FU8pJ7Pv6MiBn32UcjGccLdV4HtWKn2KHDc3BCNFVN13eYkSAwiCQkS2Q2KtB",
  "key22": "4ZR2cyNbQrzxXNer8VR1nqcb6rrCkvY9FU3r8Hvdx3rW2U2Xj7kzyoyNPUgGYwCGLhfiyDRwXD4nds1SHFkm3dbc",
  "key23": "bf4LPuFAQVysfktBH6pAg31BvVinrnNp1CuUT3nCg8afGFqaLdJtnzma9jmb6mdHTyueGa1F3cVEswah1vkDBug",
  "key24": "4ymC8X3frKyJVuYKWv9rMnUSa5TEjVh8Avo5LrqWG2smN8i9ny3Hoh3PbbTWDm6Qp6TSASw85daqkbmcCmMAgCf6",
  "key25": "66vrV4KCKKLBB3mnBER1onUzHuUR14hk7CLPgzoM9QeMtX8WNm7uj2RH7chWmFahQpyf5rLoZ16oc56GMhgscJyo",
  "key26": "2vB52Y76BwH3v83Wz7nQDRZpz2HtAmQfis3fRbdqcsaJo47zvip1wdysHZM9to2i2zNCU2QbyjebsXDFSR6Dz67L",
  "key27": "365nDqJjbUPNX8nNG2jmovHGP8y3fgQekHZzTQ4tEC8U5W3bSZJA1M3nb1bkpu7ttMJapuiFBWY3XiPV4nETwSXc",
  "key28": "23DSy24pRisRzp4n1rRtDNKntXUXorjnUYFpEMxSxiffLe6ik7oYr4iSr2oo6jPhmqiX8nvbt7VvZUoUmwZfqtH6",
  "key29": "4UyXsVhcrbjipc22E8qnoqGmnrWK7wUAEHgihrwwDgN1d8e9A3sWxwRYTuFvsNv4gwUNDCKcmm8oAWdhCERMs6nB",
  "key30": "MDDKEw7FwSe8PJYtcZrtPxu5PkmVKmBxNzkRxDT1D97E4mnfuP2Nb3heukuxFSYS9bmEZAat229pdtapWkZahU9",
  "key31": "5FUGuwwPKBxua2bBrrxU6Sr9CGJXrK9CPZ8MJVTP2HHTskSKzuHKk61hM6AYK1StoXbwvjs8RymWn6jra7auE1hc",
  "key32": "5G7CRADwzCEoYdET2oK8Q3JktcY5KkyC81yvmG64UUkNsZ3BamfMeDxmnU6XP5w4Yw8inPTx3dvwNx5hE2D8niTG",
  "key33": "5WLrEzfq6iTNeHiNoy6VRM8Bc6uS6nqJSB1oMmZCXme1t3wQGmujpEHdLtw3KPbHS7ssxMAzKZeDV6rYzpVWXoQ9",
  "key34": "3T3LfsoCRbgfNndNDkZvkiAKCLfoTfDzeZ2VGrJR6fuMeVSmbXrFrTcU7A1zhkp2wLrz1bjjLTyhivrYiYvRoYqh",
  "key35": "2YRdRzCQtYifk6B5UwDidbiEunspvbeYVaGYRUig9FWikHgDBviJcaFS6jfKsqxWRXj1ArWkR2dd9Brfu4PzNDkQ",
  "key36": "2VLHKdvKGLTpBFHTe9Yaf6Gtxu5mDQn3EQWSzs6QppwvRRkEF5frLo4776foutSYn5Krt95oCxmMQBpfRqKQFT2j",
  "key37": "4dsUDYD1roGioNjZsCVxr7zvPEx4pe2KLros99tidD2jMgR844veEn777jv89UfAzZzsc9Xgtu9mAoD3quYr5p8o",
  "key38": "vZnKd77Etcky8Qhhm5EAu1cTvinSKPtugU89mAGBGrG4nFXqvY2pt18TfD5PciZbBwsz4AUrmV19BxBpkjc1npK",
  "key39": "556QUzdR6uN7hGAk12YzsGqT8iZRFdDodUfFRnT1ukRWdH5KVvcpDRHyB2Uo6rdxeXKbeHZY3KKeKPES645tnU9y",
  "key40": "SqknWqiqhzWfN1X88JBbx5fi6SQeGGEgUNZaioRNmwrrk7G3gr36T2sdXXBkxFwuLdrGZ3SXEZrUpYPXQ3GR8AW",
  "key41": "2Rk8AWtXY2wkFbcmr48VeyhDuUrzapW3zhJPVc6efjRczTDZKhubauefckzw6UsF1VD6PAHyjY7fRxbX9gcZYgZS",
  "key42": "3nBTXEHBmeAFotFPRm28chMZHo57vE3yyQhYisd1i8u4qFXUkvEmFGnwjR3qa6mG4NsehJVHoaximzBcSRFdU5V2",
  "key43": "57cDcHD8gf1N9AVrLqreGr5Dwhfp7tR3fTHSnC1tEhcpx8Ky2eVpJhSTU9UBmQbgVBzJm6M57KAS1k6WPE3xc4qR",
  "key44": "2azfTuAfbhbHerXua9jTNGJe7RmZ7rwxqZuu6mypQTBsd3S6NCqgNeJTcqdR52kf7DBM92fX1uDovbdM3777KB12",
  "key45": "3yZZxcDFtZsqMYtdkTtiB2DuFBtumUqgNyTSMb45jvFeWumHzkBDb63BfhoyHAZAaphMCy9JQkQrjcWvGZWv8j2Y",
  "key46": "4oMSaXAnDWo2oftD5zjKdacAD48J9Fg3QR2EnW22cyxVeTuVDwohdSzbFqNYEG7J1oScQGnADSuWRiiHxo9N7KYt",
  "key47": "5ymQSujGLEV6wxWTdyKwiKcbQs62obxRpDYguSFcGtX6C9PbebGDt4LnhshsMa3foNNxht2R7avTiYdjmyAMibh6",
  "key48": "FApWjdiXsR6Fs8Ae2h4dmL4uVRxKRUtP3PKeVfwsgmaTE8LMZiRZPgAdFK5v26bki2UtbF6EVJrPPXakG9aWXHm",
  "key49": "4g5RvqtSUZm4dRLPG5ETV8Nbqqp967tzGFT2wFQWUPx8aKEpT123RxRcXxReo7bvSqtst3pp9M7MrYVUK5mx5BAv"
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
