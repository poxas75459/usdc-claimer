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
    "2bFGR6Mh8tyrM55vfdPozEeME6GS7x7AmdUe5TnKw5uqz8A8RLgfg3XGHSpB6HcL78Tx2eFqBdcvWTiML5yiJbxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31MeSDgPvc84dKZ4RXf8cazMkWbMmdUNVPWc4YUwaihtwtWrUmiUCaB9DDGT13yNCzxSJm7F3T3KrDbFwfeZEkxK",
  "key1": "5segZk1HmA59HHrtnvdvLPQ9QaKaCguCbEPJL7TzJVoD6maL9Fv15zsFBBzrBGF2GMxferCzg72ymZba2kVd2ea6",
  "key2": "5W3egdmQAZKM6DZSW9oyhxA7tPTGw3Vyoug3Xm8TkXk7cRhSsSNahuJ9a81hB3P54r3VAvUXAsJHAAq5R33HPs38",
  "key3": "5HGgF2jCXiagQj8hvBvnGuYYEnrpJhneKAUpvWWhFa3DNCTZcCmV1F3tqASTuz46Bs9o5rLaVXUP8QMcsmsT6n4v",
  "key4": "mW1qcU4VfwDRW9i2kPwNwt5pB9QLaM4BNeQheDE62bexHvRR4TGqBT5Ecw1GreoGkMtMF8AQAywqYLyNvbnXC1f",
  "key5": "48qyDhELGmjyeC6kthtDvJNtWqrXpMGqimYiYdH9CGtC34nbL5msiTHXKLYeHP23HMkRhQLRLHqUEcKCsXUm1Kxs",
  "key6": "25LntNrBYWESy1dPBfaUt7gyZKXX9sipdVhTfYyYhrVrLPsHq6kp2MmFVBu48PC8iu4xpUhN6C2h3SdADdPS8ByY",
  "key7": "5V9LkgQLGtkCocYT3WBkj7GiD8bYognCAttHyD6ZKVBgVD8q9ZwJYcpzdHgo9THk9RgrR2gSdKZBYjdu4haxCUex",
  "key8": "3EQHUmvKDCXQuiPQcbEgcSN9dGAXNrFyqsPLh73Lq7aZmjVimXrAeVLNMgGYPd3ZrViSfBJnkqGSreWTtPVVx9fH",
  "key9": "fzBcRTzzozfKYj2ZAGGyez2Az3JKJzSbMSRX3QFfBpdUqUMSd4Ec1SQRhs8uaoaNXqtH4ipASPwoQTatNsijJPD",
  "key10": "FFonQhtTPo6sjP5K8dx3srHZqda96koKJTyhBBxF1EjQSWGN5hjD5Ca8QgjcpWMJ5XEhP5b9iva8QGywmVe6rs6",
  "key11": "6vTHYFZwFFPM9bRki4JFtZNafokWHQHUfchKiWf76JQ2f2HEdqikYHyVvcVcJYmGpqxxDf2j3YA4nxu2ixb82WB",
  "key12": "3ctindve5LKerWwa9jhGEBdSK9yGJDFwAB63R6vqccBt3KB34dzAue9FKNLgYfH3eHViBi73ueEWchp52xXtnoFB",
  "key13": "2TEpAa1dNLdh1yCuCMzSP5KK5VMQEHX8JVWGFB9CKFenVDw2ZypUAR69hwivC8y9zE18PDHJNeF6YrgtC1MT9FaJ",
  "key14": "5eMyCeQy9nnPEzMGBHx3JXVVq2tTm4pqMfANK7cCD526wxe9oZPv6KJLytGKQ5kkovkCSBtjJXECvM2AeTt3XtTn",
  "key15": "2YskerUZp5DJVnYnL4bsNssXnTy2aGZBNbq3mHMN65dL31LWwvnZAbAuu6bzWD2AJsUbCLgxg3C77MBGnsAWnit1",
  "key16": "2px5jsYXPsZrmiPF872TKQGPfxmW2kqpwhjy14cLAjPEz36Dohkp3CNajfMxdr6toe7tfb5ZjRYhnqUDVFkUe8Z3",
  "key17": "4Scgaizxdvxq9qi2KBmAWhePZGLgshE6VviHwz6m9JuwZwifiTRAq1B9DxzhhiMB157Jb8xNjEiJ2YjRjksRoHUX",
  "key18": "5QMM8gFAE4eFcNn1NxUmYkwvCHhjxxQEZ1s46MngebhorWjDDbK6pQzNKiNPZ64m7vGVS7qET8sVAEn7wD5hoxkD",
  "key19": "xRSA8Zeq8feY8GmsmNZxqQzqqxauRZPjw2o9Hv9cPirA42RjVMB5xnXAoUQ9rEwCGsNq6XFySQ4cwSDzQtQ5V6z",
  "key20": "3i8T3CKMyyZpsDWBNtaAU8gM9MyLSFQcuYiFKwpPttyBUhie8DTjtTJ54emZuoSjgDdexD4yJKCrKszCYNj48Gxt",
  "key21": "5tzg4qPDrGEvzVN1ioRYg6z2g87aKyHwN5KJLepeEZqm77Eg1qkBUosTXYYwBFhLyCK6f2s3EWe43ZyJVo9SLtUx",
  "key22": "2seWPCfMe6q7Hjdb3deUffonMXeDUZVXmEei3kzTBs9EvsHJ72FzEDVdkaXwYCPVjp9DzfrSXJ7V3nNUmAHqnPHY",
  "key23": "3UbynD1UcVnqWPszaTc6BPbPfB6qMStz7jQJEUUa3PadLVdjR92V5VRsMbzdG8unzWpyaPCbto7LLV52zt8hQ7oP",
  "key24": "4yjCw3WZn7PbWUQ9tStY9LW7aBXqnHmW6CDh3cor3omcxCXNd6fqxbdNBdba3fgz3zEFNwYyZLW6bkFkehYgE95t",
  "key25": "4FdVcsQgTyXQYNA162QwA7PzeYsN8fXxnY2A5Sk1UgPatH6nDx83HHx37MMqqCCanqP5BaiJ2p8cRB6k1x4qRJ7w",
  "key26": "3ehBVZNXio5JvV8fmpJxdzPbkxZVrabAcspA9NdMDKkuoYmkFovT1yxLf8tjEthHEH6kKj8eND9iP6qPiwKQsrWo",
  "key27": "4dtpUQphoMrrT5r7Qq94PvZPRYTUMD8G1pj7QEomBnm4iwpBumAk59JDiLHyAHehvUYu6CQcRDtdZRxRmCdMHHBo",
  "key28": "2B5ByNCW9SgvfiytdzRb3FFC1iGrTncy2G2JBosEXMCAdLLidAxGJfEtYUhynPaUEMby9p8uSNCYAcAYWbw5Ms6i",
  "key29": "3pPh3Zu7LFvj9NbufGMgQ7DB9MM8MSMxwcp9VWshAKwMkJcywXzjXXVqq5Ep3SEKjTKhPU8C6HKT6sLAqdS1DBB5",
  "key30": "S6LPcPqsf5zV8ukLoLkdyrb2TpAGHwSAwJk5h5f5NiGTzMddS93X17cQcBz76SzCiKkrkq4jSycj5WpbbQTCd7N",
  "key31": "5kNex9mSagMJFGvPT3ZBkstTBs611SumzyrnLFgtca9YgCxoyogLFsY2FumqoTmtuzVtLSRfJNfn6YKBhAELQAqe",
  "key32": "3GNYWtyVnAa3xqCpZKVsGnp6SAQPbYZofmP6PYjPsAku3Kv2wDE7SmbJBDzGiScCtpWsa2RQHZwBsZ3GkLqqwVUw"
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
