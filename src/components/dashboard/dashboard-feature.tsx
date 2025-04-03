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
    "2CYYSstufSejnSFAmN9huDVNCKmdFEwjHiUEFJ7UDArY2JNRX5hC6bu4hYt5LxTA9XUUtiErgnXYqLD17BKWsFA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQK8L6abzG2SJ2xSQDtFPTo2VycjTXcZWQKkfr69RDLgZHisWmfiQdyRo8SV3PeSne6Do19L8vceAUwbCoCrkEj",
  "key1": "5ApSiPbowZKXTgJvR9nEU1VpBgDFx3xqyLn9S8BkVmrqo6FAYz2Y1ZMLH5sRQvasHNma1vfZw3eNjbG43i9jo9fN",
  "key2": "45y65uDXc5sjP5sKYYSxxJ4w32X4EH2Xc6mr5M9hDQaeCfWwvCeTR5oBNvyBY4RxKpxorNBUcLsSDdRMeVaoC1w4",
  "key3": "4bRw4myHDMGYEEwWr4aBzxpSxD9eVBB2BsyGXCYcRavqVFFyPLeZ5zim8iAFkRCeTCVNEfzKgMDFpxHAqcc448bW",
  "key4": "45eA5cyHuZ7VwgHhmhmpB2DJ1gzFRwjigsVMdAjrjQsPaPNj85wK1WPZzbyxZU7LayHkqRfEVgasWTfVMdDxXksr",
  "key5": "5umDAVZupcT8XsDdc7a7k21vBoF5wZNs82sakBAycofffqte9ggwMgYfqGMApTAk5qmhPpBtdXtN17UQaFrDLLuV",
  "key6": "5vDZ1pKZKG9bbqwWcNsLi2RmB4ZiKQU6Xmo3WVM4HM9BmjSjSo7APwsZsSBjyL1T3y3sMNVuVCXe7tzUo7gKv46T",
  "key7": "3Thfkq9WNsRmPByNsxEDtZJQhfeEATunG8JaPpMKKxgukYCpurSss5xTNPT1wkTVAmG4iTJBbi63LZTvY21QzW7W",
  "key8": "2RfkBS8riVKGRiNhbQdQbrUTUQyUaM6NwVwLQ5PC9GRVYp1bv1XYCcE8C78XRiH27VFk5aLbeQwSGbJebj9KTVym",
  "key9": "UzoAVh6CDdyhnsfazqHPHCP6JQRq1i752A9fjeVRM7jzktku5PCDkRRcCxwYXRsxY6XigKHW5NtB6kXGanWKfMA",
  "key10": "48aX7NG3cFLwBAnvYDQivXvPv1HMZfqgWds1iBDs7ReS9i7nuLrx1roG4GX7Tx6jayKsA43Q5hRxYQDBBGimKMmy",
  "key11": "3AMpF9bhTbLsg7XV5xNxSjNJ1CTQFg7ecSjeYXD4Tsr3XCMe2uVF7GafdoAqzPk33XzRUU5XtB7tmQEGKHvr9VeC",
  "key12": "2FZNz9GC9AGvmYa8kV7XTZiaKbnkCpsu9J7jUwhzcibLMQVdh9Yd8N6Gy5puzknvnP21A9kTg5dxnJAFhPdHYVZC",
  "key13": "3haW5rqL1shSup8gG4TXTenffZhvTtszv7TNfGjpVRnRRNQNhxknXoDsbeofsaGeDCenwFnmGiragmvVRYj9ZuNP",
  "key14": "5PTqwGnjComfRg5euAYV12BYWanyhybNL4L5xKunsUeyAcqDJAzptbLcvJdpzFUqH59oa7YkVNvcE8qHNHVWP9G9",
  "key15": "4731yM3Phw24sfdpb6d5wLeo5TcwrwAW2ftjL5GKrJjhE7HHSA3gwmPByaVHzpBJTPX31BkrnRod7T9nnkYNpatK",
  "key16": "4yTvKx4LzP2HRnFJuGzApms4bdzRWArZRhS9VR6LWHunHrkYmu9Re6MNB7g9VzzexQ4aq3eus8im8Y6VyuEqZSph",
  "key17": "66PvDQve6UfdYSU6hCKAAxWvNNQ3z9eqZxUQBEuFJM7xenUt5FKyfMa1qdMQJr2AQGoLJwL6LkG51MbXFDCBwBPh",
  "key18": "4RVuoF3PZGf97vSoPNENy5nkC2fcjr2xs9Wk5Sdwi9HCKvjbhRxaqt7hFWbeebrF5yuzBCAWwpSEVzWxFf92tByc",
  "key19": "4VVhnURFoVTr4vmcs6CebPXrbPnzR6jarTm1dUKY3NmtcRUgDjMngZZbEzwvyduAzbMR4otKavyQcKWMupqXUu6s",
  "key20": "4CLCX7tkbDNPCUQNaaXV4eyEhtx5K1vJdrybmxyeeqkNUKoQWMss4JX9mrL1GKrRTSdPoRqCxpwjLhTLgYRuyR3P",
  "key21": "43CwLMUdHahayruBPa1YKWbeYzigkwjGcQt8tmBPGBih3f15BWtLtbMeyhP34guFGeraRfYTqeRi7uN4kwAVSMmt",
  "key22": "4bnXaNAASuzdmF2QXRAzsB3F3Ef1shmxSCug3C1EQB5W6UUHaFBHZPgnFfVc4iysD1rDMXqxG8ZenWAWq3kyVv4a",
  "key23": "QoYEsAuKqM3VXUdoqUKU4YSFUbLqtMXrzH8Ev1Lb7hiqK62ov91CgoaeLRRA1gqjgBAn99a28Ygf7TRi93vRnzs",
  "key24": "4SLd2vbeyBGXs5YwVaiPcAoNS8gqSUrNH2x2eL95hFXotf533Sj8cjvUXUNN5WenoX1BN9N3CRhJRHVvUJba13pA",
  "key25": "4JtPWWb8a1S7vtCnREkdAEPuJsp3wwtHqeCTtjGBAQWVAHh4Q88udYBwJN3CSC378M9Ct6j6pUgRAoprdfsL9RF8",
  "key26": "5tcXLisWf96b5NjyzV3Ck2f6jKbMUvkXXdP4iH9nbH4SNEGYGs3CBnDcy6kgwWfrZzCGUd2vwyEZRn9F2Hr5BFuU",
  "key27": "4A7eqW1DHhFmAP1bmAX2qDAQqFE38UkE2BLmeY3v7CGStgZbXAo5RX3YKywi8JhutQTnirkRyerqPnR9NY3NT8JS",
  "key28": "5QuPbw4YsMCoSmakGGgxe2XKusmn8MxAJrPV3EZTpLAbaazmQmxdgVq3mx61VSucNtZLR6NCXyXXf7EVEYGgWuXM",
  "key29": "rV7PQiNuVQsJvpw3FFBB3rXmkYr2wrAPU9AAae67dF8Yx9uH9L39B3toYejt1JdxbPNztmsvU5msXFFFUqhUWEz",
  "key30": "NgZ4XD3QVAPrUXFWea8ccT2ncMzVFyhvU8DCmp3743gUm6CdXdeC73wJkmpkCoKix5YsPNrZniJ32WDCTRD9sfL",
  "key31": "3mh4sVx17BwmHE1EaUBWwe24AsPrwZa4T6jnyWjzKgJFaLd8SUdSYqqtgHUVnTY6HCCtCFCUq9WiwQRBLsvcnNAh",
  "key32": "4DHAQWUSg591yQQrpkeymQYFeqrJdecDeKQnAdv47DjpsSqa1u5MqCWh4XFU7Mnz7xSPjGJaSfgwqkTbgNGjS97h",
  "key33": "5tiDsmbS81XXfGS84cLD9ZjHiCJVRL7acVL9SEPkfLSoAUJGsPredyFNf4ZmsbcZb73R5MYjoieevu7GSDsvqp5p",
  "key34": "wyshpbFdvxRfLJ4UhVbYAYDYdbTn3H6Zoa45TWcnSaLja5NshMWd6kN1BkHn17oePsHs8iBMYSKZF3YhhbWTtQ2",
  "key35": "2rCks1pkAzVoYYWC9YBiyipaamHGDXcfABoD8Lt6v5EQkUgxTscraJXhpixPfohSr1UrUjvGyXk9XypmvgAY7v4C",
  "key36": "54JMDtuVyXQNNSwNBjnEa6T4RBV8hKnY16yHbcajTEuYqaKXyTzm3xfLW7ZrdKAGN3TSVCLSUyaUsRVw2AvGbFt"
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
