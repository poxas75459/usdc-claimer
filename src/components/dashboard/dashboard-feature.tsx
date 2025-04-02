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
    "4gsUTQ8HZzME5TVA2uRcY5geArKJb4WgXLbNGtxsUNAznrnKBqQMdNwKemRrwd5o3xiaeKWqhSVRCpsqmw3ns8rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EbwSmMVYzjQXsvnCsU8ZUJwyQXcpBD3eHa51aeo9qaLYsX3eXMRydYGNfusNqLjNkLZuRHRw8KirGZPVLMgnr4K",
  "key1": "4JtzRRiBj7g3wN34VqywLshpSov4jdADLM6piB28erpycwt8kC4wV4eqN1UD7kqu264gM9eGxLkSUehiNcAqXFpf",
  "key2": "4rtCjwjaXnQpofyn8pHW3HRQ8jSH2y8uSgKUSBe7yNdutzqVUmXvHf6PsdhaFv9d9pmL6pPbyzKPwefzRuB6kck7",
  "key3": "5sPtsuuAGFSjhruN1UoLW21VNqi9875VoHLDtDgRgPRfN7yMf7gQkF3R78zBbfMRvuwvbpuPJqyNx2cG5rLaTmqD",
  "key4": "4YcZ4fLtmStsmGX3MpSGYYTpZRYsDrdALCwU51JBtbWY3o93uLnM8mw4d4zm2jRxjiXHubThvagv6GepHqbu2xph",
  "key5": "2MpHbHaZYeqKi3k3DjVdutUE9RnpJNXC63SnhfgMLr6ghFSsTimZAMRuciigCNww7Tss7rQB4K565fMCy2g15C3t",
  "key6": "25nrrf2vj2stdqwvNvCWDwCkfsCjjkFnbDdfM5pXeeCxAngbto6FuBks4uxdmZxUpZQMtXmhCUmevVwrfTPXKqai",
  "key7": "LZjUWyaHdD6i7FqVtHEf7U1p7ZWeb9qrL67SrXC9vKWxahA1nqUS6CtEeAVCkcunrecZHTDWZYii6fux74EUFYX",
  "key8": "5FUVCxJWXvrw4X9jgrZHzbfxusb2B8maBRbe6gsXxFowXHozumms2FM2BhXZ99Fvhb5yVSFo7pywEWtmpavxrnQr",
  "key9": "3EV7HPfoPZRfEw7UtM3FSdBzKsC2Arq8DXeZx1FkqDyoVFcAnQEedFRLtG1B4qKCCktCGTFLn4jxT5TupVAGH5du",
  "key10": "SUxSZbeZKmUuyAneUWUqtA3Aib1i9hWLPHX6Fr2ujLUtG6uJYGGdvBGGSfcrHZeRvZFfiSrGCUBTo74zoStXfh1",
  "key11": "5n6T8aCTJf1f3ZBHvVga9brduzQZNfuXY9Ga4k5UoZWfC4iirhCCS4KznSH1Qk2ufuXTVFqDkLX6hQrjYYXAXVMs",
  "key12": "3yprWsLZbRFe9mM794kJG23FBoBiTmHKyGh9SorJSPE2wX15PXjVJwhocJB85ZjhqkNezgdvSBhmSrpmaGVf8uPC",
  "key13": "6iAaVFV5djKb6odTsU9R5hJ15DJqjJUhyyT8DKBvmA2xXVL15m6uxhrvRfvspBXkNozzjTw6iMDKX1mttYrkRuB",
  "key14": "rxwWSNHVckXtdCsHWsPvue4dhqnJk6sJ5J1ykzDxFrYsGac9As6AyPz1zzMzZxnCuVa7URbiF6aetymCY9dJKKv",
  "key15": "4Fpxa1dfrWVisHy8B18782jonPMjAvFMPHasVTiWQ2qfXA13H4znwZKS5xy1r9g4WNba39jTUSbZ3TuM1JymRWNR",
  "key16": "5iTfhc4gz6DFjQgkveYe1BkrotMzsmS8v6Qmnb2kbwZjV6nFe7QG7mKa1PzXrwivmoAazNw94K4PpJ8TFKZdLG9H",
  "key17": "2UMKwSAK2kqRiGoapWdGNmkyNQKwCVLL1kXCjYp71et1gku9xGw9rF6HFPk1bj3qXnx8N5rVtCroJiv7eGhiiNKU",
  "key18": "4PNGEnzGAXjdrCHoXpugiZVHev5SiU5CVzeiq8rorvKguiZNw32Pq8DDfjZz5xcZBoqQMKj66fhy5KrCuzvEFYwx",
  "key19": "4y1ncZRKZWAx9rC6nqueAUMMYzNyegJYTDFutyaQCJh7ufCniGKnucvokL1Kf14kkqubYgb2vRvdCpEaQgNJbZqe",
  "key20": "2931KgmFJvmjV9zMkCpYA9PbwhXrPGeFA8W6aKRz9azQ8jzU3nkeKgDfZeYA6DJoAaZUA4TJWXia5uFpaS3khCWP",
  "key21": "5BPd8axAsKKbatJNEUW5CHTUrTgChn66j22UX4N8eS1sEEwhH7KZnoGSPD7Lawpx9fewKCoowxdNHAD3eAzhLacr",
  "key22": "2yZP18dPq9Yoyk1rfHtVJwZcdBHovths5CrpbhUiLTtp41M3u7XAcPciUgWeGjeZ32R4D513PU8EufRiZvS4FAHM",
  "key23": "2rig3LxwAjTdy9EQQij2KuKjRSvaKuU1432XZNbGiX7wqf4k5HNEqreFGr9ox9ZGYnqgGwrGrQcyB2UPSgnSc6iE",
  "key24": "f3yzQZFsvLg17eUL11HPig1WxmHuCpD5Fb6EFwAeMmG1gcJhqc4ca32npUDF9HhrRsJ8UD9iwBsayx9Y4KYyB3u",
  "key25": "3Bz2VvkgMY1sra6qQ3ysUiMaqncVVY6b2tVqPub8LFxPT1Hb37FLk6QYay84UxsTnpnhDQg6vrc7idj6g2nuS8sh",
  "key26": "bgVTiWxF641cXUjGioDoPfxtm7NRXD3sZGEzosauNu6sdkyCFegu9tL3fAJJBh7mbA93So4FH5FUptDck6uFSJN",
  "key27": "5fRFuPN2hxgUp7m8LVPHytUYbDJzhzUtsNt7G5Kfvr4iDW71JJwyDzDpg3Pd4J6UcvV5DPZbcVGCVW53VNU5Q7wX",
  "key28": "3RHKepn1xDMHVXSpTJCCkZcf8gF42suamSjjEPNqv5sFsknzBt6kUgXCN2BgKFmmuHdxwPqsbj1dGghRZLEmfGud",
  "key29": "5WkK88fPC2nBDMuRL2SdfVc4Fx8xQMX1HFtq9SVu2CFUn6RY4QxBLcM7Yf5rmuHuXVC24wLLRGcYRghhtA91XdJN",
  "key30": "K8ZPEFr7sDywCSbp85quTf9p36hsDcgnubP68PGYnRpQAsv8FWtbE5JHyZu68aFYv7cB5rfuBHSsRfACCbdWxoj",
  "key31": "2uw1VX6MnAmvdRKjRhrAkPP8jDks9Yiek9z9aPMBbWihd61dQ2eUANmx7vuGZFVHWJpRrRxPArcxdsPgYeN6aRGZ",
  "key32": "58UNB8Mraa2norqLujLXKswzvzYqQSsLk8EFTCH9Fuw9WpJwQq5VHhFD1NN1ragT5zy7iY3D16TNyyJvJ4KEGNJ2",
  "key33": "5r4TXcmCxNrDA3XGfeWzoFrmnxBC2QDsaD3P5G5zGAuKnD9mntM4vn6LV4WmqLLRhhStv7v4xTXMQb67hK7mTDxB",
  "key34": "4yvChB4E5igEdbwZzzFEybxVVc3jDuMwVSEUFVw7iaqxze1hKZCDm2pEPVdrgbAKZkp76fMZgNyjy2ibsrXnYt3o",
  "key35": "4yFUL9q1Z3MhXbX7HQEPktmrV6Ysuti6MhgwRai55f3H36wgGkKoz1mgpczJGsdKRdZtTXFnTRQEYtiwVxUSyhcU",
  "key36": "4xStXCnwDoGnMxz9CVwrykFwkZpdwueEMQcayC5G1TGCfNbc579bAetjjkZn72gbP6pT6pjs7Mppm5ydXa3JTRbE",
  "key37": "4vwrZuAV5ZduQtYzGH1eAuC44r4erF7nBqaYbmM8aPPxJ34wmQrqQVgxENuzrcL9y2xNzkHQR6tSFQCqNS6GYPaF"
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
