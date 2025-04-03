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
    "9JB8qGKZdqZBrdeuy7szm8AtGsecdp6MD7oz1z2pnsEhvHX44TfgkYpvdofypvhXYPmAUohw5E4HomDhRf55zwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3tR1psKvS951S25iXCTehMPG8pZpBkrcQPuXsvxyc2wRZPWqYyefdZTzNcWeaypbQk4LCm7C7BConqb6j62hBM",
  "key1": "4aV99bMFSkvYjm9fRPbjDms6hQ6nsvznPgxo7ompYUwjrekVFm91MixHJgXomQSfCH35ddqzLwvom8sMpASXBpDM",
  "key2": "gm2rwgd486AYAuL5ppJYmTPaGeSssivuTuT7JGLovPSpJZPM1k54GVWp3ssyMQ4NnR4rHRjtLR9LTxgFZ5PUkbe",
  "key3": "5QqxEJ4J1mdwbMKG19RX5AFw9izXccQ2tSgknLnPATjDEHZ5shRhmvswUxWAf9EyhzaCtQ4MrWz1uynjLhmoePsw",
  "key4": "5gXVnXQCGNMar4fTC3cXF2keMgCJ7sCnm1R4U7ra9vMXH9Eq5fhPF8BsyA3HVJk8mB2ZMEimyjdsvDS4tRKnBzCe",
  "key5": "wskvZ42kmoyn4Efvg58E35UU7Ts5HCefewry3WXR11rzT5F93FW9a5QSUR5SKHy4zuZjHT7DStezEadBN2BVdF9",
  "key6": "2yU1Yjdug2oUzWZ1yPjaAv4HmJgpo1VHJAirbi7gnYVVDgwNQzWfAe7xQVKsz7HqRDehaWUUAaJruLZmifVFt2G6",
  "key7": "QgwXsQ1Dk55fg9EKVBUSzrqYhN6U32uqQee6DuiTMrgkeRS8g3V4whHmCrVovkBCNwgMSF6L7qfozhKgCfCbjPx",
  "key8": "hKe9Co3ybNKgkLYF9DZyTfk6ieHmnuSRU7vTZyT7y5uqPrShn7WqtQQbQP1pDT68ybDeVxQM8RyghoSmtETLDCu",
  "key9": "ZgwUw6hTM3TaBABqtPgtnbcsq2Xmdsgg2KyzSo6VDF89AimxWAEgsFuAv6xrzoZgo3faJJH581mVjyVVJgPebUM",
  "key10": "2e27WTqJwGXVFHQtFYc8fSJEgbpPmZwHCA14FWPJW1KB4MzLEhTGwhKFmyekPXaEDjr84FcZvVXv5qBbjTymbUTD",
  "key11": "355gdMNutXUXdEtEwSMgCRNix5YQkTQbc5BgbwM4wwjVcnHLQ7Yq7mQVBVtK2c59TFmiQJ1YirPtmDeAcXgh4ZaR",
  "key12": "5vC3X1huVJhHm3k7pNbDkZN52cDDFVUF5MwN4gRgJoQbXuV9m2ASbSfeQgV8WgJi3WbG45urrSBTaJmmyst41CyK",
  "key13": "5RCoKybQoscPQMkGwj7kW4riJjvutyHEb19atw8CQ8CtGupwmx1HyUsbidHZa46LgN5n653vm5djArgSvA1y6Kxm",
  "key14": "4UKNdGcL2LoWiEuN6zopDq9Rg9RmAUkfKrvaPFgF7P4pcdBzH43J1KX771zbpJ93XqE63Mavyv7ws4qe8HkEwTJh",
  "key15": "3XN4niBbxQd77xMhb8fLmSDYPeCw4hfNE3uAJUJTVgZ5RMXhCGVN8CsfLvH2ovbGJwenMZnUVw3yzMLreXjYXpz6",
  "key16": "566tQfBPL9D621V8oarBHH3EDNqGmGVCrqoChR4RuZBRk15zcX9NXhyXmzhVRdCmbdRiatijsdibBpVXPdeCxrNn",
  "key17": "5vd82QY6YdWDpjJtcRScf9vK3Wkkfyrk8q2NF8BZhfLopYkJFBtCf5J82mym666oao8a6tQq2HMh1oCTs2vqxPwX",
  "key18": "2vMFW6Uv3G35on7uVRM5y2nuhETbgCneuSY4JDQtY2XTfmxGzkvvQZw7obpfpPLRQup8HDgvA59JUKfkGTJ89SkL",
  "key19": "wjBSe6HctD9MF69rpuj8RYVBQLG6d9xrkatjVn55BT9z4W5Lu39VRV5nwYomLeLBqYRh9rmnMtJPR3HQZzEPwqn",
  "key20": "4WsqTAmK8N1EDhzoVU7VdLNrkTyx5NPhSpdP7drNxDMdhhTuE249hWxhVq516t9mG5JkUp6KDBykydWhHSRVQRaA",
  "key21": "66QQRv1N2nLj4iwzvTLcM2qCVFA1F39BTBW3qNHo8EHFb8mf7yy7C2Qn2KpCDMiFaE72MjZyJPWaKfoknyaRk6Ag",
  "key22": "28jvyU3fhxbGPeoYDB13hbMiPVfoZYAmezNNP5xVKpFqFvJE3EedjSoKwpKZtojgAe5eD5ujvd7B2fKn6qB6fqvk",
  "key23": "k1M6L6ZRMRo6M9QRwcZRiQ2BDN2bJJ6ZEmXMeQF6Zgp5usZQKjg5kfywVmPqzFfqEjhPdUBW18XVk3vsgFqLaTX",
  "key24": "2C7T5RQWy5S8LHh6tPSE7r5J76t5K4qZxDPXfgYndJjkRM7CNCviGYaazrEPQPKLe79c4zyRbv3p3uqYFYKUYpL6",
  "key25": "4caumWyrwZwX6o5DUwaWx9gcXuKQ5SJ1W3kgSMPmPpqmec4JGjpUsnGhEhZRdjZFZaxthXBAKcyDgokN1EfnQ7V3",
  "key26": "YLWiX7xASQ3Bd9k94HFyiUoGW33YdXPs1csn3q4RY3bDT2QRW4mjKoi275gBdQaf1Rv6Sop74WTgCUrPmDd8bAy",
  "key27": "5uPtfySCu6o2aXFjMJVUcufHE6tUaHmn1koysNev1KXnXva5N73r4MtGuGZdZPqDCX55j7P5ndWPMyAJKQZQUSeS",
  "key28": "2qXMGY3SSWNDRrAtgyCbqQgnsHdZuatfQbKZgPnEUY3i61irmnZbvK1CjWS3yWn4PD5GGrbEdnEZbrUQ3Viumeuw",
  "key29": "3DPLjARL7knRsCD8AhbuoPvQaNYER7K7SaggugzUtigyNbLdZcfq7K1UkDhSJzLqFtqTs7FyAxWghWT8oUJ2Fi6X"
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
