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
    "59dZ7H9WSywxQR15Nx2WXVmJ45y8aZS55uPfYW5SrYTntuenw2K3yUaeWDB8ZD8Y46bRhGkqKw1VwyMtd5N7dsd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uEtRo2QGYTVQH18kiT4GnQN94uTx93REnAGQc7HBKzHcjbsghC36X53PdwLVqp8Q8EmeaQDGQjeCrF5rAv7Ct8e",
  "key1": "K7R1r6X2aRXqFGuLFqVXP7VkAyR6V2CE6MGSjyp4epztiP2SGQVz3rrrM7FH5RH6cMkdeDdja6xM4VMvYxeQep7",
  "key2": "63dgkAaUktUyFsGwFn1vXzkspf28Byp4eqEJp1FLKA9oxJDTsU9EMGiZnx4d4q8YQtUYnWtYXnK5YZHubo8QFmBe",
  "key3": "4AxU95ZLBeu4uwotHnv8fTQfDCTRmjGV9p3QbTXJj6MmNdLuND4MTNkcotMsRcEm3uQHVmfe1V7VumWWUhdr8gUq",
  "key4": "5fe4yR5B4qdyqxS1B9njDVNkueru5B2UGRxBijBKTVTa6WVJcdU2XFLTEchEKRa9DFWGPapfoeXK6HWkab9JbJ3L",
  "key5": "fUdqiySRQMrr4Ue7BY2unVe9KEDsW1Aj3z3Xx5kfCtGkWhZjSHycPz7ubtTwhjYPWfD55zw9HZLbf1tH35JYRHd",
  "key6": "5bXqt2DS51uDHKK451ejcNMmRduZWRrQ6VT25MRBnHmeuSncV7DAY2Y623wz1Uciu9UTa9LXKH641SJQd1FtfNDX",
  "key7": "4pZ2MDit5mnJHQYE5XRqHaPjU4LqU6ExHm84bZZzRdptGb48qq9pgQeXX2cgr6qxW8Y1vHs1DkMAKVRxSuWPD8J7",
  "key8": "pSX5kmphpVJHgcamjNu1iy5vHJQcdZr6jL9ddHNWnzMauUELRmDgq7KXcDdwpxvfq6N2c9Jyn96JC1Bt3gJqauE",
  "key9": "ZKCTDrws8NdjKf3ussUjcwpxFtnMJJH9bxdMFWn6ibJTyzv8n27kp9hpzkyBoXd8L7D9WodvLSVkF5pGravUawx",
  "key10": "3MULeYwPA1gJej6Z9qVQxZut1o3q67aHU7BKCvWtWw4v4z4RWZ5QiMsmSQKvgBnkPsUrf9J3ZKTJjPDpcTsx8eca",
  "key11": "3xLryTiYm453A9WJ5qmgqcNtnibNfRqGEheg7aay3hCfhXkmj557EqysqwU3Rx9SwnbAQhXSe965KeH4FbS9Av1x",
  "key12": "443mnCDLtEYffu3xv8p6pZbrLnKMwujJRLrJHp1scP1vHM7AoMGcnAxPxmndjBehHE9RMXtRveY7vKQGwvY2RQ6A",
  "key13": "5BUHe4dS68rwWQ7jsgte91LRBsezns6KKq1WQeLxN1ffdXXbAcXQdK1ipowJqDWdSZtx9tBtzz5hzNMdWjHuiSAq",
  "key14": "3d2EfnwWqzTkyaKkeJp2cNjf4FBgMzZY6pvcuB7PozRYP6yXFktbQnqKXQcLHoJc5KYd9bxruV6LvmmsXNg6xsAn",
  "key15": "2iSnYM5kyGcs6isc2AYvTSmav6fyeiMiqWSdkh4gAoRN58LYNywEJMJ1dXzYptSi27gUGWwsqhjkS23Yc8bZCLJr",
  "key16": "S6k71nfHh2LerpUSjYjBqXuUqAW2Xxvzbiqfr4vo238M772Vcf86KhZAY2vtm2MPAXHivNcXkpTgCmzE1sdiwVx",
  "key17": "4q9xSrZLj4iWnQejHZdazYSX1bpXm4kMXSbjem8f6WiY2oJd9zRyYaYqXXADxzve46kHaFDAxf4Rd8hSkUnUNdCJ",
  "key18": "3JqErfu7AfnUgFZEnUEdxR9gKeCpWYVAYyio4J5QTAic6eu1iRUwzqGFe2qA38q2Dp6xfBuKJSNF9HRFZjX8USwx",
  "key19": "4SZJLbKHgbCigKpdcqHq5Tx7Qn5WBVvH5whP5guaPFX6ZbpAUrPoUuSJ777PG5f1RePAPiE3mt3e95xtm3Mz8X8a",
  "key20": "3zVR9SGjcLvnSvHsqovJh1xi5zNg3diVvCsLv7AyN1dKuuwdz3FRfxByDeXcmR5jDchXF1Qry5wz2vzoeAkxtefR",
  "key21": "5NDvzukVPTZTnGtFiabwhXmPyYKghaJRtEKvZkcqGV7QwnJN3UwFaEBkY2UUoF78NzcpRh16a3GCUm1vJDu9ejxZ",
  "key22": "9Pp8wuSB975unvivqF7pssLs84YF4HZcuCfC84PJr1F5dEswXARVJKSfDxib8qfoQ5cD4AycWdHGPAGD7d6RDrG",
  "key23": "PF189TcBehALWUXCSomsQJc2nJgALsYodwDbUTdTMfc2qyfuB5fki4m2Mws2d6awSXYQzWANxyJTcW5VA7Gb2fz",
  "key24": "4dxw2pnLGWxeUxNCxfPk3xtWogmQYEvYQkbfxHC8T1fPZFVDxWEY3wcCcXFxL5TG2rU4YsGXJgUwmFTbM8cPLmTn",
  "key25": "3aMNwCsvXPJ6fZdnc2yVQeT1CuwtpBXSvpMBpnTVxkR3qhQbBYXZLzjkWSLEZvNh6mKGSFvuCGWW5zzE7ohQfXQJ",
  "key26": "5tRPAgF6r2AdDCh9AjYAPGgq8BVKewzJCqEBK7eVK4Bhq1raCLz3xsHcdqAWZwoHijmS59FqKPCm2NwDg18mDndK",
  "key27": "3mDMpBouLPg4aN2pvHwbfF6C9rPCpiCiaFD3H73DFjkQ9hNwG2VW4oQpsUMmzn5tnMVPSaqdTNver3keoWwTj4jW",
  "key28": "9GFXcDCjYNUvsWhX9szT87keyhYc9i34s7qUNNtKYGKRJ4kohDRvLHMo9Z8J2AXUAe4bJzA4xJD75KJvXnNAhnn",
  "key29": "3RkGjc2bN9znAnxtPMLDun3FH2j43831QjwcdQX1wVYPJGVMBaVsKC9aPeJ4huCvCvAfmxGrbngyiSfir2WkbtEv",
  "key30": "3aYd8VTLaCHyJtz4y8hnD9g2tPPAg1jJvZ4CRKzzRRmHJRT3tpucXCSG8nLmM3Y5dgH5V8jntMoX1TUB8zgtFb1f",
  "key31": "4hsYif7uuHMuec2bw59WaEGtpshgHdZAtzbPkFi3cMKf3Ha4evyRcWwfuRrm11niHJ1vU1CLJVHno229jbUJNSi9",
  "key32": "65pym59wT3KwXtsWauvpyUkdUcAvbV6HZM1nfAUKPCWJ8GrkuBNEjfGNVGfzhVvA72Qgh6UTofMuNiv9us2csiPN",
  "key33": "2Sn55CzUBRvY7z9CTqeV9GNf65Mor9feskgKETzGU5JHRLvWuDtUbGLfmXmDfikz5kta1FUb1cu1NWac7h6TuSKf",
  "key34": "2kKucBdMEiDA4s3EALyYFVXVbiGJQS64Juah8F6MWwy4zHDPmryqFFz8Gr6yDjCkM2RHZ9zLuATFGcFJAcCFQT7E",
  "key35": "uhyM3BVbCehmusZdmNTES4S468ckEygEH8utTQ9ryH1c4c2qdcDZCNeb9qMSsABr1AYwVzDF9CY2hBFVfrjZugK"
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
