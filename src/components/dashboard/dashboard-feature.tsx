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
    "37QpsXNeCo5b4QeZzLDH6BSKMgvFc2byzX4GMAXdNJF7PWu6knt5BzdNF67yg5hLGYWbSUanJPJDyoy3oQUD2DoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNBSHxLHCEN9uRhb2AvfX83kaVDEEi5xDdNNWwXUQ6rtZEgcrFbZ7cMMqVRwgP2BiHGE84PVKqfS4ZoS8Jajtiq",
  "key1": "3XzQ3nXsWukbzGpDuuH8xFE6vJ6nVDATbPuUy5uMR99CdMnm1dcC6KCZyVwniBZQCTJTMN1R3Ltt5Z21nmrMWuGn",
  "key2": "5wg9vTzWtwN6ZNnSa1MsHqxVBCuiBULRv1R9ExbDUZ6ihTLhMVwfEWN2DkqUaYk4Xh2eQcYcsPHMNL1eSfvAzrNF",
  "key3": "5dK1uzRDG88uNyXeCPKxQnh1WWAddkqmF8kuY7Weo9iRc5gq6h4C6eWT3R5VawUaGs7hBG9tvymc3nZBJSq7hDNo",
  "key4": "NcEoz5crJQmMVHJy4XZSfTmRji4kTVEUSTGv1nagFeTSMpfq17X5bCwJa9kDtaVnfe8uUyhyUwq8oALaVuxd1vR",
  "key5": "6q4zRE8L8gf1TP4TbzgXgtLXYZsr71CvaMxyfhdKu9TDAHEEXBSvsLGSuSjBmw1paygyE2r37ZGCGDJf2PumP7t",
  "key6": "4pYbXyTCqrmCu3rBcqZCos4gpbmbtae5LnbvAwf9Hzufk1AD3cer7NHRFvev1PrYnx824Ldu6np4jXHLZK9dfUFa",
  "key7": "2owuUWVYVKDiJuySjeWjVnL29WXfQ7y6me4myZvkpViPzMAXw36sdAHocYjBDT6jZ1bJzkNR1t14M6vNxfqv9EEn",
  "key8": "4guTsN4Sbkw2GjvJjMyHwG6AZgLSTdX11D6NQcNdW15vaRD1fP7x1dbCa8BipnZhScZARCztrN1s6qiUjXVNbozt",
  "key9": "Rd1xtxUrTS7ukrZvpQo1uHGSwBC6cNvJHKB9Kjt5VdPnkYLAbsVXeSZ1NDnopXWDeiC97NsavaXZEKgWwPFqjJy",
  "key10": "4FCjjtaPaQ4uhDBZZqiMNCbaZaLfYDVqCrxXcScSgxkyahs8CHtop1DabECbskQCyCRZuRwEiWCH8TAXA4dHqmB4",
  "key11": "5RBPx3L1bW31mM5mgSJxqqWFARS2mVHg1NvaXZFHJAPKwD1QGHqJtt7E4pd91S7wXjwLR4fdpVbnrRRxyEJGV9cg",
  "key12": "34kMJQvM2sU2Kb8VYrPi93XkbNnNycrqFpNXPt7wLSiLWUNadbHZ7Xq7RgCuNM7FBU26gVso8ek6uV2jWvCjPQbp",
  "key13": "K2Xw62GzkLQEgdRbsdKgte3HdHoKZZqGxQ9NVLJdKP1inNH7KDVgsj1pHTbZdHZfmzaEVkgQeRNR1quN6jkGtsT",
  "key14": "2s6W9KPndKCf4WLC2C14JAqV4BRzmto8VjRDDNPQRDPskB9pbHKmEjAE8pNyuaAfVUTEHiDYyZhYKnqZsPBqSyGW",
  "key15": "3rUkUekhKcYCKFfLiMMAc9E5vy5rKnKxA9ntm3qFWhA6Cirn1v7ypha6r3pZzPUXXDpPkBuAeRnCq8LUMRfS4eSP",
  "key16": "3atJeM5Q1f5Y3GukssWWV8C8j3cUPrSbWAdhm2UTTp4HwYDztk1NXcyq6t1Q3m2UczEffZF4SNzRtJY6ZBbhhEVC",
  "key17": "4pWnEa9xkQRityqLnYMRn5JqzG7rdPyTLDqakHLkpt5zbQBdf3YNHmSDBiacr26iybWMih5zgdbeeYxpEce6VBpZ",
  "key18": "4SVM2kHkj6Cy1mjBYqnvKoXMFdiZVP8G7gvU77bmcuEgdEgJtBcEMDkmJhFXE1W1f1i75Ur9nUL5SmJjUHqbDLfi",
  "key19": "3he3daStmfcTJkVZWnR5jFKUnwJWREx4PZLcW8v225dfTWALBDvmP1ZJRutCwDMdGomZ7vTudkehcHMe6FTmr2c6",
  "key20": "ybfQqB4c3EgNtYuvLa74HzZQ88DTStKqKGwVg7XtJURVuZHbQwKguzfu7HCEVpAY7Pv9Wx2aAS4mexDYBsdwZ6g",
  "key21": "65HPdeXgTAfP5oGbNqc52RPDSyHmDkiacQNK6EQfmsEsskgJwEyQ8Hg1erEgJaKAuAagmhmMHhEGrdGsHsF1CoV5",
  "key22": "3UmnoCcbH93CTxrRCvGZVhmHLt969zz61QVvSCkAtYCxwCSzwQHn6Ykmpvg4SD8vCCyTSXaiS6C5HaGr5JXXUaH3",
  "key23": "2op96xh3hZwUpzY1WozFReLqrNzqvCrqCgrPVHkoDPqAqNxaJnJ2ZQgYAFBVx77F1vNGzC1J3sdu9LBGqhRW81R9",
  "key24": "UAVkoeStG9UeW66KfGQmqtAzsx8UgiN6EPtnXL96wso693EU51shBCSbRKrpZxDE3LomuW3bQhxLyf9SJssogq9",
  "key25": "4iwQoY4rYmc7gvYpPnogQu5iMSNR9egFk9w5UPGuhLuSgZY1nXRGS5NuqRn9taB7hMC6oq9ZNiyodR7bAtQFFMRf",
  "key26": "2U4GjCyUxW7hMkBBxSMr4c8niNctMemSwWr9EszcEaTuCpz8wwTAAN8rmpmrzjVnydJ8j3Qz1G5UyMrxSD3jyLQt",
  "key27": "5k7yvWnxTA9TMmPoTD6FzbCpfPabLgZnWQWQcwJGcKPk8qULzq13UW8iieirWhgsAdp9M4iFoY49cjLfz1kMQxnf",
  "key28": "dvw9D1Lgt4o9Uqjtgihbt6LmfniEcu5VfZ82Xai8ApVeQ1oZwgbSradRkF6PSiKD8LSVUCUfcioEb56oMffqBUF",
  "key29": "4sPrfarvEP9F5zPamupUcb7B62DD14rWuqYJJy1ukjQfpiE3wbU5s9kUTW6cgfbQGba3RxzXyBBqYRAnBUwWvQZV",
  "key30": "Zosm9nYVWPStQ1t6K8cjzhKHbu1oidJGGeZ8qDbB7u9vjz94zHQhtAebYZgjSZ8uZELR9Zkvwq38wue4F8e1w7t",
  "key31": "5yVSc5ZRcFeWLrurocuAMbXm4putDMpa1iig6WSfEQ9cWFLNonN9HeamRq7yzrxUVSgXQXEb9Rc9t5CELZwZeyF2",
  "key32": "2iWUp4PNtgtuHqY7Wch5djBWLsxcrttG8QkVQwniGy5V4Cx3nD4BsBZCgjLQ56pvhg7Kk4rRAenApSaxz4NqrjJP",
  "key33": "5pWA3DvUyQWCgBheCrirbcowqrRFXHtE6hXnPuviXEWTcqCZbx1KzReMEPsiEErXkTEQ2wZYAWD6aQKMgu9nEQ2K",
  "key34": "2LxgDzruaivod9bmKSXDGa4ieN5J2fNoFvYMh2FH6itMxuRSmhjbiyBmbQBDm9SN2ZNxwPyxMfnK6GRpamu8gqBW",
  "key35": "5Hb3LeiqA6F3T9qvebvuPTRFrYvXvELt6egufKMWbE2mptRsTM7tC3R4YZJdB3ZB3gtRvvT2BiHjRUd1id3JcWwh"
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
