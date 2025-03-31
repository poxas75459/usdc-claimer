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
    "3s5LTwncoNrEDpNiB3JTx4mNyVvtBSj8cQYxzhH2H2CPi8sqxgyjtNtidmkCEZ4x1bWgutunkfGmBoARf49RPqK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gjnHA1J4kBuWiS7EvggSgPZGnuUydVMqiWgqbtASf8WQi8QRh9bbmRKSNq8nkjqvQ9Li1hRAa5HRGKZXjizXpHp",
  "key1": "2Khw8z8Qz9vKfudDXxRChWRkaVU3wSiYmeZLcV7N8kvJhnEx1NjbC1JAj14v71hoTEBKYRup8HTcor6hrPgs9nUS",
  "key2": "EjTjgcmMk84shu1CLjEFFmykTbetSXYnEXzUv2Yu64tbF3ByFF77fj6XVbLo6rcBYD5v3fs3edcjkYD7Y3Qz9pw",
  "key3": "EKjSjtkaxnLURgWv9h4BGVQMwRbTRNJ4PNYu7qJ743cvTjBNLLAp8RUYGx2As253zxKJR8HJNm5vCW1NuXxi3t5",
  "key4": "3K9jh51XMoXUe5vRb8PuwSnAsxc8tbRpP3bpynvGqw9oxiPBQxryDD2z47E8o7w8oYyg1tZQtzrgM7iSRbWouUih",
  "key5": "2hyW4mMWkzUJYy75FkYAtWezhYwB71YtwpqyFWQ964kgq6fpmLkficUfcCNtbgsDmM6x5sd4V3YHuRqvQdbbrujB",
  "key6": "5y4eCe3P3p5LwKdfJ7BPgL9QjxRmnTYGPA4Sw8ZBqbBDL8awmHMQreMfou8rKPoD3PY3JfhA2UGzv75MGuxDnpDL",
  "key7": "63brVFdj71Kxp2UiweASb4yzaFN4oQECez9Xf4hmqHM4XaKiJsL639TvsDyngBM78wRrDm7UjPhxKhV1tZzZBeEo",
  "key8": "2Pwg8UkURAnEsN8JJtE95zSQd7gQTN5ueaeMBYncYDh7SbegLn6QYZYd34iq8DtahBFVnMWbsepdenApKmSZnanp",
  "key9": "4rHBY8FwfestSh2n4XVhhNYvPmWYcZvu8mkbGQ83QdZH2nei8qhz57Rm5K9UW7ZHK1gycyCfFqgPgYb9AV2izR5i",
  "key10": "2BEwjR2VWu8yDzs3VuqzaSAH5uYQm6Ht43sFeY6igLp6vjrdKTePHL9p6DZJPRe8tihGW2W7RCGLJB6bcFNgZj6k",
  "key11": "4JomRoypNZuMLUfKVd2k2DQHbRxi12j6vSDBsTwqiUnTaPx8dkoRSNDQmax6ysGZNpxS6Y2LJbYPTNPz4mWyD3iA",
  "key12": "eZEZEL225fPwodL8JeK6jAzLHAGNGpZqDChiFpzGfZPH232rRY91FY8pY1q5viwnQ53LwEV9uemdseXHVZ1W9Qx",
  "key13": "33z7FoSty3kaLWBbgjc7eWxTDh3z1A4itBZa2MJ2ZiPHor7si7XeLye7X9ypUse7gkWfo2Ho1LicMiGt5feS6pym",
  "key14": "5gTFjh2Gww42KwaJYvwPTMnkh66dakWX3XGNuoj5DGpHrMh39ormHLdFLg15CJacfpFES7V57HVkw6FTJckcbJZ1",
  "key15": "2dn35ks6H9THTfCMVhCzauyehtKodBQ1xutwDjXbX9LzA3Q7q7uS5Stfzej97FbWn8TwKHnyk9krQfrPEwiDKf9Y",
  "key16": "3hXWa9G99HQAVo6w5zDF2PK4igcW5fdfaNiDmT4Y3Z1rnLunAZhaAPHw6StqRTEjVPDKJ4PHCj2ewWCPgQnhCcMg",
  "key17": "M49BLrtqS9DEKH7Q27xTq9GHEJrP2QFyqYsDtwR6W8fLgv9nZabaVYHJX6mGPGVLZcNyan3JKavgqAzUTR2Mt1K",
  "key18": "3i9yhpsRhXWp2sikLp7ZWVLR7ypaPk2wefRqmMvr7Ud47pdhAJdy8Tuzz2szptCSvBU8xsfsifWoPVU5xr5Ljy7u",
  "key19": "52vUHKaaBW9diQHGCd6pyLxkQRmMMcZ28YQur3aT3MYJZYWm9ARFZ4wNdvQJGFvVhQTKAhn21BrJMgne4apQF4c8",
  "key20": "2NGpzTjeqTr8BNzkEeEfG8JXbqikmRQQwnc9D3Nj8KdCL8rZNzz4XenEsFRGjcgbpeyPA3HMttVr2pDbVzZaKDmZ",
  "key21": "CCYUSkpN4gYrxHRDeoTUQZJLjGHbMCTV7AQeAZtnnTdpVGqbrPR6iGmSNttwNfPdKwA6V7MRaeAAVgJagH5EzLA",
  "key22": "tC9bVvdQrTmffbvEdqZm43Sb6aRKGmKHkELBnmMBmKrfd2x2ffCBgK51SodjeXDmnzkWFHXV8HWQA77Fw9oCiSz",
  "key23": "2qRqey76sXeyNR3D9ZLjwWS6aUm25GuNTPw8ypo6sNbE7D1BNvaBaMmAJDn7ZjcTxpffG5eZg5acj7f4JBNqmCCF",
  "key24": "4PyHWQ5FeHN1LhUMkQHDgs9C7BWabpreohG85XFqCxiXg9m18CiDmC28AdKebFiJ75WB2k5hiCNsWHkSPzSa694j",
  "key25": "2yvoiUCMr4wWKsgsW874SGHjCBUEabWQF8eqQGC83aLNqYgiXsJgRF4oZN1p84yX9sKyQUUDajzQ47eoTseCJqAy",
  "key26": "4PQVu39nENcHaH7BtsAJD5XVeCccEWnQsX72vFY9prZTBKYPc43nXAg5zYDe7GfHG2sx6X9HM2Cio7w5iUXm7kDd",
  "key27": "2gA71sdGcNXsiXWNDoGsrr8Gmoshpom7X1AetrDscr1ZTJtbfY7bWWRPDHLTxgEKm4oXG8DGthf1g2gNGmo4ow2g"
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
