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
    "3GWH5AhVU2vBYQQKLhgPczKKyqqDPCV6Fph6zqpnMzyiGMeSMPBPbEdrkLBYXZkqpPFGmvVsUE9QSfXmAuNSDunY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aTju9nUQzwpFxQHcGfCU1Qv22z1r3KExebrMitPmyNXuCRMau4ZqALtXm3wKLcZwTbBoW6Rqcybx8Cnf6FT7ybX",
  "key1": "4qBfGVJvPcCbp2JkBhBKBkxNbxec7FRX4UtvfWf8Rn7yTYUvQCxZ52MjRxVT6Y48eoDBq4jLUc6yVMNFZW3YMjEM",
  "key2": "2Amdp6fFMKT8xSmt46rT9WhMDixVDZamJiB2YRyZ7HgqWjiTSsqzn13ztrdVwvBQSvhm7f7JPq4cp8y44JhgT5HT",
  "key3": "55E3UtLr1x5wxVkWJSdz9Xdw4sJe3aYVYtafCcARBBDn13FcjAQPbeHRicoGMgDRAENUrdfExDhp8XNQN17eiWAw",
  "key4": "65RefW47fGQZunVnAbpCS9kx7ZC7YdhXV3SRyy1kvYyEF6jkFNXJABybkr93tTL5d5mpP2Tsq7r7ybcM276bgu3s",
  "key5": "4txo65T3w37eNXvRS1Kin4Gozj5Eq4khj7tx65fz5swZjjuo7zrf8b9rjxLEH54xssCHisDvUEhTxk3sfr6sVqEx",
  "key6": "5hx6bJt4wnaSZCrX3FuKoKopFVTqLreRRYwtW8Fifwdfq8i5C1Uk3szdYGScvbcQXEGwBpoGCGT63fivE3VcVFLV",
  "key7": "5ZYMYtDjBcgcNbpmo4E9heuN2y7VxvKyFNCwixvyJjtYpjiea5cCZDqiSXFkpC36sWTYdjs5ngm4uyGqnqoKAJPH",
  "key8": "2TNZ8nos6RXNT9kGwzdcj5iHkkA8dwMprgEADfP8zyvwas6HAjScz75PKRNRs2ajwa2uJ9JwaCzSaohuwCZmbcCT",
  "key9": "3vtbSFWu4SnKeEawb8Segcrr5MBJMPWvCtYAgDqZ1HeqsW7kfU67nqvdxGqvDbo7mHKzc1zAg6tUzUjLD6bA4fpG",
  "key10": "4NTXVuL9Eb6MnEHX49WAoETR6imnDQJyobs35dsLm6uu2T8K3KVkkCnzNUuw8idWRsJwhReyztYiQpZbRuQBxctG",
  "key11": "2KEci4F4detxZMp8auHxYYhFito4Bi29hrdnsYeZietJLrtCMGWgu35ihwaeZM3xz2xyhadqDspscUJydACgzppv",
  "key12": "2oAcYH7m2swmA8aQbGnKs5hZkJ6M2za5HnfjRLmKzB1JbiqeiFwMJ7F57d6d2UEwqppSbgBaTz4c5SGS8HksNEP5",
  "key13": "2cDFztb7rVevU1uQKxDv28qBxG7sHEySB2X3UyDADQmMD38Uqast9NQsyFL4tnNHkUNWqyUcJq5N39AuWkAF4caK",
  "key14": "5vhf5N4dBKPtvPa41GpS49YGgwgdzcHm8BEwzkqiDFqNCJsJwL4jX5KZKnKVzU6pB5mNVzW5we2rqjq4h4vG5co8",
  "key15": "3hzzFDK34Jww4o2rFYGbHa3UnFsk6d6MpL7qqhHQHXnTpM7fwHt1mjVqYP7JdbP2858EiYnZ4wpnsxjnfbsAupWS",
  "key16": "2E7hKotorf1jNfPo2jVBNRw2CnnoPyqQ8g3iTZRFSfPGmzshSZTaMVWCTiiuWMKBTy6RQYsPj7i3V9PjYks7BiVC",
  "key17": "4FnMf9W6xAgro6WrbNfTiitub3YXi1BUVDUydAxDcdkeWPXSAYPguFe1Vrps86rVRQLvsV4zz9bAycS9DSv2JiPn",
  "key18": "5wuRRWRC6CxGFb44EwbKrsQumkPpBWCbF6fesLNj6Yy9qfrWZniB6M3icJBkc5stZ1tk5zgYihJ6Va3sc382eSGE",
  "key19": "2A7KjK61k93dDUvn4ANzWbBNKXMpKjgLLTxXPNi3aRt8xpVExnYnM75kgiS2Qvr8NTN9WtQm5QtV5iFtu9bCVwGr",
  "key20": "5XipaADD1PVudPebSEv5GmtVn6LJgs9ZKMcn4NJyeBCsKbRiGxLzg8uMysV51vZ4HwGDRkDxJNBhKUii7BShmcNf",
  "key21": "4sH3iKrTjE7aoCSa36CXDs9VkWpo8wtQRVCmVAp1Xn8gxEx6Vsa5rPeVvsfUwV1P6N8pWwrfBCoV3D2VAcUeRdg1",
  "key22": "5m5LZzTZjxQ12Cn9CM3Cu3gVDfNPhnmsoxMmty32qSZ2GBgHdFXfJZ2Z7j77fDQnLSv8cA8tKtUEYh4Bq5mAcmf8",
  "key23": "CBe53eH5GWmx488KbscQRPxG5cwfs45a7GuvitgZUnj5onPku3WjQPpRQkA2h3MJe9b4agoFSEfmNJeFSVDBY7j",
  "key24": "3XQGNaLsLUCyYVERYvsaJHzrcNfkfR1y2W2xCzRBnEqLu8x3RpeyE3Bqn4BGhoSC7xotivrEu5MW8MZ6QVJDHz5i",
  "key25": "2hVDcPsPtuyb3VQWJGZ8A335WejJK2HQ8Z6XikJqDaTUYmfUMDZDJ4HPuw3BXMYSzAKvNsJQuNkncMupb68YyjfH",
  "key26": "3KpCXJzZsCTBFSoBkJofzJbRPfupjNkMPtaUXsjtYDY12Nc2U6oreCarBPE4vTDLdxswnrDU8Ns5xiUaiNUh1jwd",
  "key27": "3DzRHcJuvhRfxLGkJ6xCU9y316CHREZb7H7kV7rujDtCxAfxruZC45VviJh9dTcf4C1tNbnYT9mHCscu7AcRAGBH",
  "key28": "5gnVR7Sehsd5E4izkJD3L7MNuBRnHLUYyMoExV3zaw6BdryU4FM3BVE3pV9Gn1MBGU9DpFHQjCAWi7NHYqougpgr",
  "key29": "4EJkKnH96Npq6egpVRVkXVZPSjzNuvQr8y3qMkibiy7NVznWHAFFK4FgXVYwZoJCahs8L6xmE5C8ucxXVMMgw9qq",
  "key30": "44i99C7ExnP3oig9q5PqkzaKnMGc6Xg8r1YNojjL7YK8BMjNAtXUiXmuQnJsN7jTLnxGZgDpvLANuMePMnsYjyUw",
  "key31": "4XcixrNFACwfu8bkDrxSVF6QYugNRKjBgfjEw7PM93uUkwop4x8qTYWM1GBNKJAyh11aPnt8ircA5dcS7xf1gSW7",
  "key32": "5UPwUMoF9tjVNoJcueWSXyt9Q9VhBvbiBX5vaTe4PcGqP7rAeR1JrZbbsxRqXBU1mGH4opocFNimQ4NtZumRJf8U",
  "key33": "3sjo2oYyUjwb7McQpHnYs62nFo7LPcMdPk33ZQDFFqdd8AKXtSMYXdU54KbHpYXbGvHtMExxisBsUtByXGe6BfSF"
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
