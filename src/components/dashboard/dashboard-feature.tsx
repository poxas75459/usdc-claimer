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
    "2Bj6QertHd6p65Qchq5RUMj8PBqJghCXb5KC9mv8UWYHpivFyx1fePe3kbp7Z15dsQ2x7uxh3w7wZooA8ZrJUrA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r8tP3BrvELVkTLdvqW8UJT5NywiKagUvVUqnu1tmccBdf5KTTDYjrSJ4DmgvRqDbfBqRHXcmwXxoeDsb328Q39E",
  "key1": "2E36MnHm2WCPKTciMQNVMxXceathQrBy8yVJTSYbwXandrqJa1d1cuuGrdKdiEais3v4KP5ci14UTGeS9P4YVSZu",
  "key2": "3w62fDCnZRWdKgdzYXozphjrpqSButRh2LYba8BpZA8eqkz18TWaRmMAW4NMLiMBLMtewSHR32ZGNzxNHPGk6bTB",
  "key3": "2R83HSKqnZQcNM1TkKSMpYxJ5XmMKWSHB8uyi3UtVBEaueXnw7pfScWN1wKsrbyoushc1P6cc2QLNameanSgJ31e",
  "key4": "32GKcgvrgixLKdmZEtJn7xKsHFLh1oVYzMHME3SQTMH7VZMVyhdHUYkbPRHZ8Tc84Bxgao8RXJgA9sqrPuZi2qKx",
  "key5": "4DDBQYgrkL8GiozZsZGXTdnZ9HSZ9kdVcGtmLUfowMWqjmH5BZ6enxY4RfuNAqpzjnYHeaBhFoMNpgW1twwmvGaP",
  "key6": "4hKjwkaGhRNHbWbJQ6s5HJ5ey9GkPxGYixGZWP2htDo55SNfsci4LnYwnDq4dF35MR8Sm3ZxHPwMkdYsZBWz7dys",
  "key7": "3JxbK9ViBDc8iGKmCHMnV3ZgAF6Sm1Uyd9XPQzi19PVMsc3bGvKx4MvZGS1u37FFLXdtQH3LwjgRpukqoaDuXbHi",
  "key8": "3UsCFt38c2t6tPmX4Jmb9A4HWKDtqdPRaDqXkFP3kviLn7Xma8Yg5DjWgkQttkMA7ypRkytCSAMENj9qqPdET7bw",
  "key9": "3RFewdXkfoBn2eBSSvfrKKKaNCsCj2QnLXuU4Re6d7cAoDPg5AK5HabLduqvvAkasNR2ipHMk4e5w6QP3rHUWp5t",
  "key10": "gLbBhy6x94k4R2CiZxxEcHk8et9K6JQCpvR8TBRhq8UAr4iy6Fo5ijeWa1wrTQ6JWZ5A3m45CYSH4qpizFASERT",
  "key11": "3TLgJwbTRQvGXdB71o3MjNmQJabx4S5vp6prCWYdEKhPhu5nmC4eq6uEpjh5MCKB8EVT92omN2u2MERj5jru2L1o",
  "key12": "4o35bYbSqLqAdFkXPo3VZSCvtsQb2HYmLxUAeQ2u5N4tHp1mSdizXdjZ7byr3zRXpWyM83jaUVYNud4nxrrE5cy1",
  "key13": "57M8w9pG2TDJtDJ877T4Vjs1io3sz4Y8KhMNpa2imBoJny7yvQptKghtTMxKoYqQzG6gBEhxxuZFeaoLJygKYiJh",
  "key14": "5Nd1yE4f1UqgCGqJrPkWxpe5Hya1srwJW1CScc1QruBqXK4wqc8AuJNFCGigDMpeAEHgtpwLpkiW6imN2TfJs2ss",
  "key15": "3UqBz7havA4DjG9bbJvyj6CJD8HhW1rFJGPcifeFHXg3nW9cgZfPaJXRMjqi5CwpU9EALk4H5y3gRnUErGSGuinh",
  "key16": "4EGTsv4xks2FqwY5UDTdim7PVQux4zskyZSxDPKs62PdHfdzFSQEp3jCmccvgZQdNdEndaWFmpqZTzCYWkZWwpAs",
  "key17": "26q6nVNRsYhVFpeSgHrL4j4iMUsWr6JBz24FC4bjH3XRQmUjKK3SKmM847HQAWrnNfWTD65oQMFpmghn6ZE7VmxV",
  "key18": "2JtvmtV6yubxZ6Vya7QSubdyBy9a76NrJUvS89v7kgAUdUrCnxuM1WxYQUtjCzV8bKdYnR99qsbGg8VWrN9GytJ9",
  "key19": "2cFHPBPThkLDVBJpyLwuK5zRC7WzmdT4MKKfZFQikeQtrwRRMszGtvZigWKBDMKyGbDZyZ1KJxW17xv5N2BwoFwb",
  "key20": "28AvGHc8gNnASFTSa49M6rhsm3zpWXKqRwS3BUxcFfyxqdMjNgWTYacD8ri82fYv75zZo91hE2JUsApokUdgfika",
  "key21": "5GtSKju5NAem7V9BzToQUXTyHu2Bwn8dQak4CkQioXwXe5ZeuMDVWpYJxidWJ5aGg3K1VeZWg3om78SoRpYrecaP",
  "key22": "5kbZCwXS8jzbzwpf98qvKyuZj394ipX3hVsM8up3t9rkfyBwWdm39RRhuG6EqRHZzqvnwu7QhGqQ61bzCHteciYu",
  "key23": "2p9NQfYUNqCFSNTAbxkPi5DFKiK8ceDbwEhiWbH5zxGUj84roN6QexHhpQ7UwrVN1yA9FpChUc4EbFVSuQ6tnBPb",
  "key24": "4FXKFaw12DgPubBBxrwmtBpuKU9jUPD1sV7kt2HbFSKWdE1ytNPtnLk6e7eMydrj2f2iHFLwDAzP4JuBHtki8Uq5",
  "key25": "3a3MRMdB8Zi5Ste3HVbc24o3XMqn3phGoVsttSDcKdwX4XoDK41imBw2TLjhUbYQ2dGXdniAMzFUycV3vMo7ctjp",
  "key26": "3WCkHsW65rYWC9PFEN2fu646hthUfUSfBBZgxDNFtAVV5W1nU8oXKvWNyqGvsYh9WpYQyezUx1U2nzm4W3iwPGaw",
  "key27": "4yNHHZhWT44SMkSjEKo8Koa5utigLesMJS8eBNTWZZ1ZrqALYjRH7njfbGTj7NQpLnjzgmtQKqmu47i4wwriX7Cb",
  "key28": "4GeqX7f8EQHB8FX3T52d43XPTUTsTJkuhAArscdACiCnsxHY5o74HZ6RyRZYEhM8kNykpk24iNQx5WX8RJJBgaeD",
  "key29": "5qwApPQEQ8YVdKd5MXccLwnimyVUdR57RuuHY1xVr4SPz35gkeYQMK1n27NrrgAyJfSsqQKxcQ5pRTR6nyrZbXM9",
  "key30": "5jL7x6oAb9useQLycZZCjUtwjXiS8rszgUTPk3APMATJK8ARhYdCog4jodQkqpdWHUme2mV2ruh8R4oxSuVQWCox",
  "key31": "3zqi9SmtDFnsLamk65vqp48TBbWHPaSDqi3MyhLSqgr2JBQZ9pXoWdDNFMSX1x84eoAS8vXx5oxKsp9wSwZF97Gw",
  "key32": "32cVq7qnPnvZwk76uqdqhgfuyDs6dT7bSiehLDSnurpWE1dxjifV8uMCSsf6mQhLYD9hcear4xqcpfTMH8MrAFtP",
  "key33": "5LwQoXpcnnGtPejn7TE2v5ykxtiVpTZyEWB6EEJP3XTZDNY3U5YG3VKDaVjieikLb5BoSHa4sKhqFeGZ1ejShXti",
  "key34": "4ZTv5LexCtcZTkWbhJkZrrdBWgLspUPjA8fTUrHdypYQyvGB76xBC6rmu4tDH6Le136tHBrAMC9vuzEjaW56ZqHt",
  "key35": "3bsRB8hzsngh8tD38rhwXrGfYY74tVRNcxp35zbfWxYi78EcA58GJqczmeMerhJxnS9SdpsMCDHHEeFursJiGH8S",
  "key36": "51onm1gnteWAA18jXdn9GDAJaxj6ojogfPMdBxFAhXfD6HFVk2smyJpPqZ4GueaEbrXgyrhqJoomZLnUEGfe8Thn",
  "key37": "493LBStBmALGsvrVewRX95BQ28KF9wBgXxQdNXsJpBWAAirxKZ1zWbxyH77hk7eaEdRpf7maw4fRSCrh4mcV8gnh",
  "key38": "66zMDcUHp3mMbZKjTnrspVRBKFYLT91q8zRRhFJEZCi5Yvww35dRvS8VDY8fg4d8mFnbbWGKwyMGBBTrZbPrp1ep",
  "key39": "2e6FAFJCkPrFSCwDRMyRgBrZBurxZ5guCMZbL9DMzD24FJaTkcnQDnirwk1rNgfvkYokpv3GCjgHKrv5xBod6Y2W",
  "key40": "5hSwykXJrsvY1QkvYLmKzgL6nZCAjdtkmy5QFnKtWFGSN8zbPpvuS4VmBHzeqGYzvz477iA1cVwyktjffRzNEKMN",
  "key41": "3S5Fohx9cvQZ7zbsKYni7NamQJBfCdMD3ZT4aGanCcKJ1hDkTo5WZoUcN1CT1p2ofzaYf9mzJyTe5fKkbjD3GZ1N"
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
