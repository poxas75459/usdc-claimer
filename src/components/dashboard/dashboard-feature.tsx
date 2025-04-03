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
    "2i4f5J3XEswL4PX4XcWXu8NBMhBr5Kv5kQQArmSqnFcb9JZmFih6PMdji74HNZtmhe2tdcpmV9poNRtNREas529S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QiiFp2nUrZdNVi4fdDE9NnCrmtvHP62kAcC6HGdZQ5zm2Nm4wsGtXQiNqfTXzpt8KoFj14geaspzcNcKm8yYTvE",
  "key1": "Dc3VXjHUWTAbTHzyPsNthdnY1bZdHaj6ytEaj6bUQwgfHyKkDB9N8rqndopdtWb5WHwZdaR3h9c5aL4t9tXUugW",
  "key2": "47rVNpxRBnDasX2TycUC1LApWn2Zw1M2Y96sCJNe2cQtN2ox2VhZWMjbaQWBSK5hXYVPEkNqdWSddb4obUtpuG5B",
  "key3": "45fcZmc6rfAZwVL6FciWNV3S5H2BJmujXnmbRhZ3hatbthsvKwXUg2mszfLj9Ai8sFkY89TA5gZGR53pBtJSSm2E",
  "key4": "8UcGE2c5GfoAM37JDTAzuJyCpv4UPj6KMw8c9P8tvRc37PvCQmJ8phMscsm2MWu2uyVYDBdJox7Sc6g8oDmuTTC",
  "key5": "61SHjGJvr7ZfzwcMAgPFsQYzycjCA6ighRHbyX5FHKVc9Gr1N3h313TRHBAM3jePRx9VxbP9jn5KjUAfjQFSBySv",
  "key6": "2deWr1osVL9kRsPD3GvVWwYD2ggwnPaoHurfaP4KUReuV7NfeMHNtJfieXp5rnpKZcsbM8eovPYHMMsgrG6vU4cP",
  "key7": "w3ifaaUgfuiQEXdALey5wbndhwzYHrPjeJxoGr6WRUYpQCM5V9pHnMJBW2zfHd5o6V5ngKT6JpCgep1L18qqEuG",
  "key8": "5HNk8h2eBnLWa5PjEyGXrKUCwx92QkZxQ5jUKY4jzmdeRHG5SEdXPTZwWf7xj1KnuReM9BqcwXQb2UdDHC16B4UG",
  "key9": "NyYDpoPSShRjPJLSjiAFuESQfpSkgBH3Fxect3NVzvRojTeBBPgDDkNbfoQYZdXzPf4XVXhMTwp2qUyxYvdY2r2",
  "key10": "4fa6q1VxTBQh9NNAybBkYiFswQbSUwWUhumFYEZkdeJ2kQx771uHR2aMfc9q2CMtxq7GyK5cBYoNMyd5E1nUR2N5",
  "key11": "5D43WaV9Epz3yqtr8X1V1aiDFQy7H2kjwXEDJKQoNZctRUH7Z4SG3MH95bazLt5t6D9VX82zEN7wYEonvgN2i9Bw",
  "key12": "3cpT1SQxwR5s4k4eeSiGMkrY9iiuRARf53PnRK6p5yQWE6CnkMzD8nQipqA29tZcVboBTZKjjbaJrRqSjfKQAHPY",
  "key13": "31fwdePV43HtHQ66j2iMLeMmGTF1a4pJDLf9VZMu85bqxyWoRDwguWUrsKdYriVmeYtjNvhRXpC8QXKTUV2stYRj",
  "key14": "5RT7PMAeaEjj7Bc5B2vYtCBTHsQqgk9mAHK7UrTVG2xx7Sr9wwDZq6bzkMVgeGUpuWsBtdF73eBJmL6caFkKLSyC",
  "key15": "5w7GuCNmp47Zu1oQcUJC3PFk6wFpAezE4qoepFGHjG7fUeVgfApLq16xWj8KfG4oM5SUKz53JX2ZRrtM8349Xnzt",
  "key16": "ABDEoTYq7XDcqiuVgFVbEUdcMdTQG9bhvgYZDuqgJjerFF6WHPkHSjpEj8V8XozfJr2uRnxXC6GT86UWdKuPTS6",
  "key17": "518Y1oz11MSeFKX4H7VUCTJCK1qdpBSBgy97iTmr9bUnsvbsbExHVJ6Y4q2Bh7YWBaVPDZ2NrcyKyKWDcfBcyNny",
  "key18": "3qAB3D5inBpfB1h635Pj6PNc526eAeNjVq9q2E1T5C3DvfUVeM3QqTXubk8W5BWQ5g7TzFMzY2JPCioE7ryjEHcA",
  "key19": "52smburgaBKaz16fwSfGef8fR3uFpgHq9C8Sn6mWSYS415r9pjecPy1Civcyf2SyYoT3898iy6gTKE15zVvUBn1X",
  "key20": "4WJdNmLjbdTxheUSbTTMJGYGwTGzrsFThmz1gVrCJS1Vv1Bmmx8kKxWH1cuw6BRYMS23SdcdvfsCysSCcxAi63i8",
  "key21": "2FRcKb3ZtWXriHxdyvSZ6GipNW84ZmCL9mGD6DrJwHA8jXF23iCHwZQeQtJTt7th9VcMdpyE9TWbuCaRmhUprYTj",
  "key22": "GpMezHumPMYNuyu6g3p4dvQWzmYbVysVtNumzPokTkWB6xiLGsB6W8oTz1NkeFjxkj7krBVhZ5becVsQFHd2vHm",
  "key23": "Zg9NdSPGWm4zHnKV3eMtw9HGHYbnF3Qr8UhgfCdjpkoA4MpXbyYzft4chqnSgTQztU3xBJa9Uz4Matb9WcBjM5U",
  "key24": "5wEGTh7Pm1AP9DCBTAdf6vchTz1z4fWaoncyHEQT6H2CwpncZAe1S1Mdnj5rVwch341x5se1TiHyCwW3qYcF2fJj",
  "key25": "2vyNFzkL4QvLHu9Efj1qY4YweKGDmWSwrdjDeFoCPrUnJShaf84Zf5SzRhTpfMyVFwL3AT4o4yBpv3QaEHqxXw9Q",
  "key26": "5TuTeDNXrra9e3EP7CZBj79GomhsFWrCmprQLvwExHjJrzstoqToi7MW6Aq1Rqx4buvZujV5t7yWuK3BkognPCak",
  "key27": "5aa69dt5Uh9BDostWiToAFh8pGc5dA6vgyNwzVuV7H27RDDuynRXPYcG9aqjAsc294URpAy3o45fWVgEuasa8wQm",
  "key28": "4mgrBws2uUy2T8fP7PqWMcSvmgGGWnUpi11i2dkcmBRAtgTRPMprEKPkVSRwhGqc7vFfwGXjQW1MGV5BvzUj4fmQ",
  "key29": "4dA5kFUkr7ZaMoiRGR78b7bbhZvgnWc5DcxnCzhnDz3qjVQwixpLTPmGoyoFCdLH3AWmSQkebM8wjykUGneGvXSy",
  "key30": "qr6cb43KYMAkp4S6JEDB4FAoGK4N2duwy1Ltd8QWqQbRwDVYT5g1upTXaf8ofqm97q9PuCWZYpGzH5vuTexyMYg",
  "key31": "2PvkkAvV6FETyraX6g8hNyVP6Gp5vGH3Qr7sNDthKPF2JfXyKZjRBYzet3Q7CRhZQjF2hmFkNt4fFywMpVHAWMya",
  "key32": "3CuK9LY839ma31jzgYbztJuLGCJtxdnHwoeMYZmYAg7exWBAb4Cj9YgxixC3K8X8RZrNTdYwTMt8bBVHamxXr97y",
  "key33": "3H5kWFtvcnVpqh6wD5sW8DD1Bz8VU4JX9rAH3e9Bc5Q6m2MS5EEbuh9RExBz6y3Jv2D3A6bd8iFaezzHUVeP2wWS",
  "key34": "65SYvc6qtYHxttSZZJHa6vkMQbKj9pRuz3rYoYTvTdT9f64YfMJZmKuMbALcLGEn5BcFKxgZaKXFK6XVNSctfFpo",
  "key35": "4HiyPntpg4SjYZpHUpdcdee11ynx3A17HiNySVN6qEvteBtBsyhPAjCtLmnaZQWTrexkpnZUWQu1tWVXjqw51BHF",
  "key36": "5YYHQBZgdWombY9v7eKP6rreft4uC3feFxJUoJGRvXrVreynNmE8ieac9rLwWg6nSzLtbQyaztRE74jVfUuWRMDz",
  "key37": "25NxQRcE2iV127LuzECZMqhQqdg9S5tsyVLhhBuG5ZCusNfYyvwAzkdtctzvvuK7M7PiNicNmnrFLw5fvj1FShmX",
  "key38": "43icm67QGWmCLJFM3UenHcZH5XZfEN74H9XhjUpcycJxDAmKSGWe81wjxmjBrUt95HonX1RTAkFeZ5udxZLXwkRF",
  "key39": "sZFp1aDHWrhbM9taw6zcvqt1AoXccqK6RnFrkiV6fxSMAwDmPM2xdVDMiJqTEQekCCvu5AFyaLMpCk5SFHap3q8"
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
