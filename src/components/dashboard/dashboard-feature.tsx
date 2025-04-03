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
    "5BceiLXRuUFvQwv565wncJw1TmzoEUzWh5V5ApzeHRVCFQrxWzbLi8DWS3YkS7ieofeXKsqztsDF6RYkjmsxTK6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bunHsieMb64rARjVrtLTB3U96CeoYTCtRVAGEj9rJgw6bkp9MGEft16HL8v9LCQakkQG2QzjujfF1SkMFGfUSHy",
  "key1": "3faou5MYGV3C7VKxSguwhee95xUWhoQ3fbWB6MttX2W9FF5hBvzrRd34wYCaBZk37XLmUQJWCBPHoKeFPLKGqmqX",
  "key2": "4bG323VAmSUGJHuoiVKc2UVpVSNoQy4mJMvNKNWL3x9iPYwxg4SRjKp6Xzo5dzRTvdM91Ljj9VGgWWAvDskT1T3f",
  "key3": "3y1y3sA9JPLhf3jw9deG3keh5FpJ7SmYXr7dMSuxUVXAuDCPHFGEVaeRW2aH1g4HZWNW7meEEnDGM8r1uaYVc2MY",
  "key4": "2T1QjRm4ajj7hcpGWxbh14QQBZAaAi9Rv9sFtvvCY8Rbwj45H7vdKFf8LVZRKBpMVXZJ2X7wyy2ve94JsVyQ3EVQ",
  "key5": "4WyKZebDozHQRbnPZ2LCBfgsN8v5fkvqAgWJTrh2vcjN9CNAWD5jVMEozBGzwv47z3pes5gcQ2JiDFv2cSWo2QCU",
  "key6": "4bDQRE7Zug94RWeev7A89LXsLjBAvRT2ZU3PnBEFf23shg6U1xVfAAFXYpQYXxPPmfF2VGqVxNktfWb7ug6yEeyY",
  "key7": "A3zcGuWFFZxfjsx4Pc9SWeFS6wszTx3SGvwGYPrA2vNzXEShW8hzswPbJkWZEXJy6p7u6ShWqC1NJ7rTHhHryEy",
  "key8": "5M8f5xe94uHPRJg312EnybK37tXSRH2E4UAsLAW9JqTnTGvM5cjwy58SCmpzG9ahfcgR4ZZ3uEyna85vQHdG9PNc",
  "key9": "4YJKmZrVyjaYvtpuRoyNkWpbdfHm1AZ2cRbFpcvRDxaUWf4f2q2aNd4dAssEkYQjYJQ9Sbzc2hqoSCcK6ygjkGHm",
  "key10": "5zKBLazxTgetEKA2zsYitkKjynAkP4eUJ5fMtXq44nwmcdNTraA293zvGbwvySiyeCoTRprDHVik2vrjNtSQtDww",
  "key11": "223xYd5G3t46an9F95oJqvbdmD9CowFvkFhswdV3SmKsq1HbCon4RBBJPdpLeAktsyLSwyNzCCj9ZuYQLQaoMGwy",
  "key12": "322v15XU7T5zsB3GQeeXErPVwydE9p4hhS5jFY6phZmi1k1H5ytPusUu1P33T6aBW3yAEPdu3FHhzKR7NBr5z5VG",
  "key13": "5zSrTBXr28nBVVb3crBKwToxMhApUB2Agi8h6XsGbNqDxSXpkf9tyriYQXe9SEUKoT3LBfrFAEptFghjLwzR8tta",
  "key14": "4fp62EnB5eVuJVx5VYn1GThSf2uEqoKkC3WJrMNfDRH4rRGksxf3TvTsEi4Xk3yeipNV4JosBEowE4YVzVMADacR",
  "key15": "6mxTwHBZunqL2F5wChynn2nervcyFAuvCfkVmDN3uKYpoNHGf2WS59PvvKAFLuHQEsnhocUgTkpwgt6V75vUMTh",
  "key16": "rcee1Shs6U3hBoubWayXWyeAWu1Wt36RX6jtbxYH3a5S1auJY9dTxsqdnCPhULsJe1EfL7CJSBUAcS1yz3ixY5N",
  "key17": "34Sg8nrg7Pjg66m5LYk3atEJUENGwtsZ6f7tJj4Y6PsYSmqJzYBNAfY7EwgK9P1NGsqG45X6DwJT2TkmABBgVVcY",
  "key18": "44uhSgKqPCVNvRERm992J1JBK4EDwsqNKSpaCimsW2Pm2whVxvZajMjHSN34KyU55W6ckwGkDw6JQbB1jjJH4Zd5",
  "key19": "2dBWUXbGRs41wB6QBnrK6au92pp1uJ6EpNUXiDoQj8z5Kh1xFhNGhpvG4KMerKcHJkmXM2u4LoRkKiv6vbxjzbUD",
  "key20": "2TSJUPS31Xf4wtCP9fuvMbDvo3A3H3Jn1RXvL2rWQ5BANX49bZwwqaQ4JUwYCDm3fwKEeNsR2wpgy8MN7YHzHDHb",
  "key21": "b1yv7gyJwSSe2VDuC4MDGivPonEfBqR7hZ3oG4sE7ExhQvq5tXwyS9Dc9i8eiA6nJbzj2tQj7TCgFm5Ujx5PwHZ",
  "key22": "Kf7NJR5RnTWSSeh6817SgJC7nH4GMkUGD5pA9reqSxmfUi9AWhuE86JAVZcFVGMQF2HYGGtpbtWWXDjJX5huDEf",
  "key23": "yMzP1cnVovM2xQH3GTRTVcezZanxmsbPJA5mWwXuDxRi6FSfEdfQJjFhZp5qGVzHAA26FRqE5fwVaYbngyKaDqp",
  "key24": "5q6XmEpNumHuG3hVfybf63BUAHCXHMrAR9huxXpFWkKcYPybPncb1LWQbWBefXFf6iRxtvcK1LNBFTeLBzRCtqJ9",
  "key25": "zUWY7TJYHpEWknA8a8dKktUjiZoNEM8FdpRsa89fw7qtpirGuEBTsoLbfkHjUArGz5iNqBJxbYvYKvsQVJ7jwaz",
  "key26": "5WHTeHc1TUusBxDBMGN5ZcSD7Q76RhV9Dzmtsnqd9Q756u3tKVtqMV9uYVpqeSNKviRC2mbBATd56ndsAVvDTmk",
  "key27": "4QJs2Dfx34NgRJ1U1X3LzxpZGwBYscSEvz8XNjkwHtdA3RDL4BrAMAXbomWYczCn7nvjgCosVjGx5owrQjhpMHZj",
  "key28": "5Tasn1v7qyWEUqrezBao4QvF5AXV42nSDs81t5TFY2mXy38Sdve8dHEmrMbYzFNBWcTYkAPnkxQL3RRZKknuqazz",
  "key29": "4XWmPJAVYDzNA3LdsQr8XGMWs5MPhbaP8Ut886CR72eC4FJDe1NoNGrCfQGPTzmBYJoDCsnSK9XLGoFknGT5uznV",
  "key30": "x1Qxxpt9yWaVK6Mukus9u5Ga6QALzb2mNu5Aqcjefb2THQmP4VEttxgD81zJRMXeTgA25nLZRR9p7yq9b26BVAm",
  "key31": "3MGLqsaD9kqVDYpNE4JeUDrrsCUZNR62SdTXKXVeMLrfrQAFRDooy7wwKy4omCLsUimUByCks4EdMTfekoi1ycue",
  "key32": "2CvfnG3yVE7F6QsirLE5uoD8RuPreqzYnsLUnV6rnwg88hnrUPMtbhF8BctCNXxzs68a9vFE3sCkVWjndkrDGGtm",
  "key33": "2fVLTwg8JewJ3GU3bWDNkDAZn5F9Sk24cM23qaW6PGjwp4dPFqzMirTHE3HtwrP2J5GBk6PDC9XSyyHZqg9LHxme",
  "key34": "4PGUKALfKrUtY9Xbpb5nx5RCD5Y4CRtgVPnBh526JvLu3wtnuqxuKkji1uBZiEbzsaqenUJCLLegeBrbwyLUCmiE",
  "key35": "3sNPiJ2FvLK6AGHgszwwwUEkr6oQAw3f8d8ukhK3SXD6D3EdMd8LymdW3Y897m232kyPv8k81htmEo1zJPhvJzPP",
  "key36": "35hYLoLjELr1SFPPEfxTQ3ZPVJbKhhxieCFAPqGXbafgALisR6TdMUpySFBib9P2hDjX8rXiaVuJSEJWvBy1AA5W",
  "key37": "2QZmRCfqo39TdXTN49GSF1xy8PUV7iZif4CcRFp2Apk4hHTWEKUfCSXtJVsQMBhnFnJUcpQjG2Q8ySMEe6YKd5hx",
  "key38": "64cFc6r121BzTzLguXXQUpeykvcrfMrWjBXYhW34QFLbf63TmJdrNqSVN7FEZPabh33653yxFA95LVpJAZx9ptBD",
  "key39": "3NVDDQVU5vVyFpcUteEGCEyij2o66UBNWNf5nutpi3XYsUePv8Sf2hUpv9TCfXGWqQRfYkA958QaeGZVgsdMbn4F",
  "key40": "3TYQE4uj4KTqicaz8GWNnSyTV6XuU1G3rfTT7DFPJ2YJfiGAu89cYZhJza6cA3GLpqMetEtkaHQJZe6PuZkpWwMc",
  "key41": "2Mk3xzAGGYCV7gjv376j4UaUzTbiF6qsp5ZGKGPdNTkvBND2mjC4HUYzT6MTY1Yj6jCyX5V7cJVaKWJARpjMC4FA",
  "key42": "5ZCuXZmSTTGUaaRZHDtrCcGBhWZcdfTFmFSMS6SDv9s4mBbG8RZ2Ru26VuE6VJVkp5xAmrqo9WCk1SVbmGHWY7C8",
  "key43": "2SPtc1Fk3SEDpFMAq87Ri7257zxvDn88LuVR6gAfWve1pPtkLv9jnMuoY65GTtj7UUP9ULKVNtXRnPDend759ZHG",
  "key44": "2Bbgvv4SCP8q3wjcEK5mhZbpXorRidcSMFprioetvcQemRvNZzbWpd6RifTvERWxbkMnrWGrd8xWTgmo6X8ypRPj",
  "key45": "5rehuLC5exFcrHrR7wU26ZADgskBSVyv3yqXgYrrbGdVUoyfnbRAGEhUoc3jtTyX9DZSrRzZbkCnBZeJ3n6jJuAX",
  "key46": "3gMt53RCuR9HAtLfB1s8aBBGLWbRaDoQDFGyByoHXUpHpAB5DXY8gkzas3zo7xQkoVubsgbkpYH2RReptwqaAwCw"
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
