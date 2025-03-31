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
    "4YyREEj3xymNtit83ZGcNu7eLXWzGVG98AwNSxH2dkhqqjpNqSoJgpinMLwyZEmma1HTY3vNZiTLZhVyHB8eXK9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NnHMdvG35SoYC7LnqZVEuxSrNethLKbPxhjMdapAvd4pDtyfvaADSHqVWPrD2UyG87HEuxJ44nrm8XekkGvAcnT",
  "key1": "4pxiqKKUBTQAwaSShQC4TLZzKxPMGozAcAEzixH5EaHouLonAqB8Lbtd6pYyDaSMAK48FMW5NQMQ5ccekj3tQf5s",
  "key2": "37cWd9z8KRB5sFndi4kd2xbkw4NPMMsRgQurEUP9taXfCUxM7efgzKHTc5Bxq7JAAuSourGaXxFxNUhJ9RyjarZt",
  "key3": "4uzptwmtNJfmJHd4spa66C3MMzRTcDQejkFQdsp4djvL83WYi4wEc9267dMa6sRwBkgp7eG8hfcvaGBSnJRUUnm8",
  "key4": "5fdAGDzqD3uDwHnR4pCNgLft6aPbBFaNjUYqsK85migKteVvTg5uHf6V3nW5qmx3PLqfeianmQF9hK2iXHxR578",
  "key5": "Lk4PEbGj7m7GGbYRCeCk7HKML4hEUZgfHJeWnbcFZG4wLGpZzMdhBhFafWdgGZos6yTzaZHDXN6rg1bYQjrTtv2",
  "key6": "2YWBQULnj1WgbQeqziHMQA79sYR4fCUrQN6eX6cnhvA5DyT2WKfRT3LWw6tyfWNbFSRr34ajASqUSPcKHqhqdAJ3",
  "key7": "45WWsaBzLwrHeecjRNjz6pNW8n8ZwSaZgRE7XpUctCvqN2QCk7BovKS3CSmwKAuasY5e97Vxrq4zhkSRihsggGB1",
  "key8": "2ZdRKCQyeSbAiDav4mxaCuTYDA1B2ycdoXQ61zUjRY8q6wMJr2KJZ5BMEarqUUGKJqjxGGuxd4aqJzyugi5VNSuh",
  "key9": "5frrfeNA9s3W4Ej6zdbke4w5A91iQDHY1438bS7Y1mKaSVdzArtg9wyPummL4fFtA1ZwkWrx4KcxLP6EUUvFSFdh",
  "key10": "6nXXUoiD9DhhSibVMwM8TZHbsFr4Fu4ppp3EDSsiGJZuQCY27uQpUGWyJJadW5QKZ3o7MhJuxYbyFxKUait7zmE",
  "key11": "Um6T4b7i9zKoDYyUH1uUQ7RtzY86W7jL4F729LQqViPxSUkMz61EtQHtmpUsBMAVM5is5ahkGs1AZ5UqLYZvvHs",
  "key12": "4DqFhBkmxRTwvoaavT5MT7C5kvUThf3bTbxMJDFtAKDQnLmXSCpNtjseCaGfDvWci4Sgwsg51KePhfF8stuVyJtw",
  "key13": "55dYSMzuFmDGPoA1hM1GhmL9WaNum1X9MctJKQ8d6TU2iJx4wgGWFX67Mgab6ShnnTNu8BDbpmpzWy7XW3shwfQs",
  "key14": "Bx2JDiPMXXpQTtnkMZKhZSpUPTjiCRyCE8oY2ybAz2pEyouvqavcL7RFPvuYR4zC3u5wUxRVVGmAGqjVCtzuHFX",
  "key15": "cW83wRFnxbN3sztPmyxpUhf6NKzWjpbc9qzEAet7knbFbrJG5YSpEejnb2t7T41VkZS84giJT8nx2P7JynBKukG",
  "key16": "3P3SMvxBeLrWAc6yDfSCfy82UbN2Xw6Ao3jhQgigz98JyJGGezFZaAg6xRwRAxsEe4dyQBLP1UhA2dsLrENvzPhT",
  "key17": "5X4nKgBs9UCvNRNnfuKV6wPmJ6AUWqqdGhPRqM5UD7VHENX7Z1qaUNVeAaDaD7nPwsA22yDhxK19iGQ5nTSRSaEA",
  "key18": "4p7XHbUtxGd9nPpcf8Bvmk5rrUtbku14c6thCHqL9rUwaewyVYSqUWyuTvs3n1wTpTB8uvUrzAHPEAMv7ZGGdt2r",
  "key19": "55MzM8FPLKoVWLDFit5SQXWZkieZSgwze9spN4tmQaBH2rjV8uvTgJXtNpC5fpdiUbbn72TfFipYy8J2inTvpVLL",
  "key20": "4tLB3hBhfhYiuUGEmEULQb69fyhH53fcBaPrro77rHHwFqR5qpTxUebrHotsownkP66xarbPYuDJDiWhBMGF35X6",
  "key21": "52S5npqC3wUAL312na8CczbyMUDtHg6z3o7nMQv6JwBCnRcDWhBFehqPGKUXYUdMSUzDXpaGxnpbYTi9SyXoba93",
  "key22": "5B8eLgDW1GXKP5cCZDukeHHgH1gLHqPxeiKF443zaYuCRKX5ZXEe6u94PmdcYcw3Zpq4RirKAKp8AVoGoEDYtMhX",
  "key23": "UUoxtGHwS2aBG9p1LwJKAnJxxFtwSRqfL3Sj5CcirpnQFFqDpSTgd5vf6Pgui6BRkyRk2VkeaygP1Ri3WYDQwJA",
  "key24": "31fEYUc9NbUVxPYbdeDqeXy27vEj1CFXBezvi3hToX4v6xLgZBh3UdS2EgkbFgPvTTe4FL4nB9PZYexpf88mZTiN",
  "key25": "4pZ4wKGKXAGSAagkEW8LCo2bET4jSXkNypXkwiBPEX53GYcRLtJWJkTCqRrTGG72it77jy8X1M691vXh3vkWndqM",
  "key26": "29bnBZAC5tHX5XRw64FbNmFZCqTstrtQnyJf2kpJqpPMojWVy3zikYNStfTT6B7eHBWzkbJXW983VbC47X6Y2Jyo"
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
