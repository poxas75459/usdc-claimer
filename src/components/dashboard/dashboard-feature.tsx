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
    "4gXkmC6sirXN4JBRg1hmk4Uz8ZkPyAXv2QqpEeG8G9miZcErYUsVAJRU8vEAkytSvhB4KqbebuK8NNLMT1wz4Z9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qpDpjpxUpB2qWFhwY9aMeACSUKxVBwE7tcdTiC9woU1Y9XyE4xppnxGQumye5x1zGgAzRKizqpZRMewWA9C4AhE",
  "key1": "3vej8A7KbXWULwqFJb7txiz8da6dzKkr8TcTc3vffQNm5UkzgEeu7iB6ZQaixZgQ1vG2zr2XW5gZ6AH8sma3TUjc",
  "key2": "5nPxZ6b4A8ktpnwcgVzM2Ly2FC2cedZTQUQ7UtNWgzatgXCzMhSffReXLzbP64viviQHLjWsB8eZtcjNKtvjQigm",
  "key3": "GnUaEzS1Nyo9S7yt89fwpY8DW1cqEW1o7oAMsQceDiAc5JQy5tdPdy5bBFFEBZYshnXFmG6LedDurqU9TF3hQvU",
  "key4": "RwsuWr6pWauB9moxm7cL4jT9KiZfcEfB2zugBNAVtQwMQVtzCzoE4DwDnTwtJrXnBmafiistjitJnyRNaBvsRNK",
  "key5": "5sRxr2Phf6eEe9rGJ87CsQXDxa9F98mj9AvCzD7KrnYBL3YkqLjCzZ1j6Vm6AmfDho8De7sA1EEkMVEEcDdABWEp",
  "key6": "2Qy1EvkrKN6XSpc17aesBB951tsP4UoVtPjhViL2ocDeXa1ZnyHgEVDdafUDKxroiLtqFwuirn12tVgZEqJrXfMU",
  "key7": "5RBjK7E9DydWRjVjvfKiRYLBdeE5sg1392b9tCxtwJDvjRcdxPhNJnUFy2GLmSJsvs2pohLzWX7hS4QSYjJEC53q",
  "key8": "3QVtctySwk87muZAzWxvvU7v1Q7tFE76waBUE7WAnKqqoVXepr6HWDuYSCALW2Bcp5bJV4TSddpAdhj9EHDoWsvU",
  "key9": "3PS4BNR7awDFXvqfZXuDmTgZL3wP57i31PA8uuJUQMXXSS3VbJ7TVUubQfmgdbA3W6d1o7XTPtsbrb84q1RcqajZ",
  "key10": "5pNtdNM3QWykaN9K75Ln3cmrJTQvgfmYs8McfLczRsmqxixthVfFwreMi8NU5BT6k2z7mmCqbmyN6t244VEy9D1Z",
  "key11": "jHEsbyqsidT1Wi1k5sQTxFKbruWS5kJj3Qsy44TnEkAvZSMuq2S3ThYTZQfGFuNCPQqGH6kSFtgJYFPUaXMTMV5",
  "key12": "5kPnUvhJWUaBGPg2rAgATPWJ2SPs5RWEzLf1NWPLd9xQEKNJfJSrTpZeojDgWRztmv9PeHcHTkfGj5u1g9EHHupo",
  "key13": "66Mt27bKbZnKhQC5VrSA7KnLBkPhRJN3skEmLCq5GxkxnzvAijjUT3A2YdfGJ7HTsZxhAHrnQJWL6aMC549zfDdR",
  "key14": "uo8zwCyKWe6A3Rhq9p8TLnhPXNYrYXn5pUGXNeLgSveS2cob5eiBsTnxAhzrmTiv4Hz6muyWF5WoHsN5ZcVxV3b",
  "key15": "2K8C5eyVU95tg6mLADDn6hKzsmZeoBxJco7FaooRuusnHrukRv7tEXRi9LHi2CHrJRjMgLEjzsVyLAEbDcJ1PJcn",
  "key16": "5suPX5nbECSC8pXvJwJxW2e1LTW4K4X3otpi35y4KXXncparmWGc5Q2FfJnaRWkgvDQwK8ziua11xwGtaopzTWXd",
  "key17": "vcMtf5WqtR3us3vX1gBfkDgeY7Vhp5V1cTmGcA2b9HK9Fg2CiFW4cqvG9R2h8ctRuCVS8JZqeBKCR1Uc6Y9Q9hd",
  "key18": "5sn1eNvTaweCK48zv2L4jkods7sbbVM5Xs3xXXBKmL3UJp3gj9yWfuTevaZ8ngSVQaVvuxasLkRqsJh8QjWcHvQT",
  "key19": "35kz62fDkAFD3nVNJYjb6BLs2K7fMx1Gw9DDD1VTsfZzcjNzNiMP6VgmqeRaREtosn9hco81z7gk9MNqfcax3KpG",
  "key20": "5zvSuCsn1udK7F4XCBWpZ3dYmFD5uD94f9MjRw4U3og5h9uQJNu8YFJLtFWWx3xkkULA4QHvjfM2mMn2u1A1k8cN",
  "key21": "5Nqtgyb1sPSkuZcsmDfiuxig13Xw78dvq2ekwhCuLHTJ66mTh8ftKe6CQ5pyb3iuZiwVe1yopzt13k2epcnx3HMV",
  "key22": "2W1ZqcaEf9qDaJ3War94HhByaBrskrasyh4PfVTNovnwtbGP78wDFic2xPUeYFLBdWswUqqfjTnW62S1Tp1nGsZx",
  "key23": "PYz2eoKbzAUNTWpRC7rM2UQm8uL2nPhhLvFzqsCQ4jNzsPwF6cy9NAnkMPRvrP4RNdtyfCS1e5P71bVUdQ9WcP6",
  "key24": "4SPmWfatL1Y4kSye2B5Ru4G1pof4uL2DjPmfWiEaT7BLMDPVxp3TFsU9SxV41rQE3h9JKChTYXWVVW8dGzHSCMvk",
  "key25": "3vbfELmK69AaGFbWNQhFXYZnNetwQcUH8sB9S55gXRpSU9823EA3ue1MhMNcNxd8ed9gmqrHf4bQamDhsyBH9sMy",
  "key26": "5bwxLpwycTT2PtHmZddq9HZ8Nfkx8BJQQjy4YqXRstNpsg8fi87EWhQXJuUY2JiafzYkhtmuGPGwckdoyWbAFnfT",
  "key27": "451WRsNTFtyNydMeC6C3PWfvqPh8LJiT8wshpN5YXGMS4xUpH5TsyamnYSjgRMutFGRCaoY6nNk2kt8NHMtpNLZi",
  "key28": "4yv7QdAweGbJ5mb5xe7oGL9yZ7Sv8KjmhERBVqfnb2kaWcMKJsgxLYi7L4hVwzBsg5nGMWB4D1VKjQC3nxwjEz68",
  "key29": "4bavNDJrZ5T2YQgzcx3wPNA1FgicWESZXRQFYfSKYSqdvcNuj12SgCBFsphY4pczareKHb7UwggmZTm5U4LoL98Z",
  "key30": "2z1pCmUT8cAHqXqcpsLMVejvpyPkyxJRRSGZcGU7ULy9uaJSkZm5CeinYDdu7G8Naki1mJsu65S5pSQLtT95W8LH",
  "key31": "nwhVmxW6Yqu4XRsBb9xmtjsifdXisS9ibeReusZivcHvSMQ4JHTRdxv18YeAP6Di7BZNwHWhRnD9WSxMVkFYG8L",
  "key32": "3m5ceH8SxbR2HhGSF9LLd7zbHwVUsW3XCha5DdmZnYHcBL2S68nHvwwLCRt2z7witJgEMAdQTw8cMtRe2GgzvXmi",
  "key33": "47CtYikGSo9N2sspLWVq5ySefCRyeeDfc7nNS16gwCs8Y7zXgH1zWJKKh5hbBZ2uMwyKNEwwCeFftTxyEi4MwFB1",
  "key34": "21mjuX7Z4hjqMU3LE6rJ4hW6g5qQutdW7sfhsy3hPDZTkMBCTy7KKXgioiTXyGK4wKJzAHphKQKG9ohtHCLBd2yU",
  "key35": "4xtSvuEW5T3syPcxuSSJ1jhX5gs1CUtwR3UJcQ7ZUgQdrMxLwLXDo6CVYSbNoVY72pNxvPX8N3oasqiu7SMoNGVm",
  "key36": "3KY95edtF4wc5LVwp3xU6xuUwDot4w8ijjZ4mSzXEiV7cSJ2fo81Rwd1otfeSx7vVL7GFJLdNypTEEBjFyjcHeQm"
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
