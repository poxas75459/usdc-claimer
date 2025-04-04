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
    "3auVn3MDoqG4i4vpxHgpVcToeQ4Qsd7sFQtX5HgRGrvvhiP79jW1NoLFVwNsAitk2Eq13KceV3kvdStZJjae6CfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4oW1Y5Su7W3skHVXTqeMx2MSrEjspEQ9k3xNC9zbdmAkZrtSEJtusZEkhL7maBP5HaD61ZmDqGv43vEJEMuEyw",
  "key1": "3A78KVv6xmjwQNkoKMyByNXNXouRpe45pja2rFUBNCVCzHq9PM4dYWZMYZh8bQLGMW34UqPU9retFhWG45grdVkW",
  "key2": "4LXtRWgGZr879g7Hdum1JuUBjNcTKC2Xfew6sxQsWF9qdabVAoRk4qgUJg9czXCXGqeCWjwPj4bJHiAUKgBShFPh",
  "key3": "487rVYe9PaArbvR48pVkdD73dKGcxefXpvkuCR96AdZ8PJQLGKv3am4TRthYtaUdRPvj3iLc2D1VMqmnVAdgoxPB",
  "key4": "yATmZtSpzEUu9XiCANrjnYL28viwR61jiv9mgZTinTfPUHPjfmj7C3dvFJPLJDYVaTp8K1NfrT1qxosApRTEpDY",
  "key5": "KSMXQrvfHPirUfGEH3egryYSLwLgN3i2JEfpsg9gJ5zQsGyen1nyruphaZ6DMMgqtM8zbsr3Y6J1Uyr7b8tKZ7y",
  "key6": "2R8D8PvGN2kV2UniKKzFAJ34SRDgr6TiUyEvfp83XTHYR37N3VSWPu1K1VgZfN137YUbj3vbS56fNcGVZscce87C",
  "key7": "2Du8XHHmZS9zFcGkV3oDZ6nJXR1gwAcTprXzr8ErMhYqgYeHg4eLKpnF5KqUYzQAAYfMpCGuSW7mUC1tVUmJywtX",
  "key8": "39VeDJGNAuoF4vHTRvfXffPVCVbQfzfzvbe26FYJEQMLFQqBu5XWELDNrhYua99YRfLgRZf1yirG8frvutFCVDaM",
  "key9": "5Nto2aAK2uNRbrNmeANTzutE6J4m8ermd4FPrmqNDsN9n341Ew9RMQyLtbwYeG93zcHBcoiJmzYZYDE2KwZFwqGW",
  "key10": "5x8zhyf6xUanriV2HJhqq55uvCS8dN68Fy5R24WzLcsviAfm6AxRNz6JL8eEzZXAPhvYjBi63ZyTPXCYxMAEZV8n",
  "key11": "3orB4xH9Jx6H7eHEujM8a5rnmAWacH84ihuGmc5Y7rAtJGwQwhZAPcHPWH4aap9ddst4MMeRia5hXddZaaTfn7Q2",
  "key12": "3ipzKXX33g8EkfpFfiUzcQ3GuCxqDGkv4AevFsgznZY3L5MFC5LXLcFjekSArRZCM3Uo4M5LrS3xmQoaAXscWYnF",
  "key13": "4T5mZvAx2FsdCeHYQvc1NwpAYU5gniZDe8QP2fouUriKGq1NjdhmhYaqnfbLZfKoraf5dVv2Z54vm4HE9mWwktLB",
  "key14": "3nd6bzLn7a8NGKP8MpUBhtjihcLBSw1AcPTfpyTiAAVfh41XxM8EKnxVvZWtJeSnbdEfym83kEJEdzdyuK1ztZSk",
  "key15": "5jeob5RaWAqHZDJQmcsjZgUnVcJiyWGAhs178imkyypkxbJGFbwkUGbtX9d4mBhULPeigU3jKrUP2drZEuPucqz7",
  "key16": "2RCurUtcgi4S8z5wDdXKu16aEL5pZUZoSPDpktNcsHJSoHJwsHbZX8eAzkTZ8wng9p6i5RVbMjCp2dcCz8etYFyT",
  "key17": "twD8GFPJUnefVobfTKqk2TD6s4TEdZbsFeKY2RcZcRTn3qTs4WHViPqaiGiu3YqRiWqKRJB7fn3W9XnJ5dWs6Yh",
  "key18": "5EL7f63FJCHh63igzsA7dqN5qgTFQmXrNK2s8QVmhai5V1JC4xwrVPdHG3gAxLve1dfWKwFQ6ooXs9iK3x2chWwA",
  "key19": "W7mVLVsbZZY7Ur2SUQdLTb77gAxXbCkCd27vCyoLBWyPrYDr9deaEHRQsxheVzz7p9g9c2WQbQhSM8HzRuPgooX",
  "key20": "3hunbtQphRmqse7H3viWCaUWs8rU2CJAtF5T6RUuaN4WyUGL6ZKy41VqKyxGPaKXJAiYHU5xwax2aLmKd5m2PpFx",
  "key21": "2Diei4HarvBdBXJb8nmPQinih6pWSFCKw7VzqvfPF51Y9Awnesp4uCvXZ65Q1UFaAqgjz3r7xzjvKjymP6Uve7VQ",
  "key22": "2VHWWepYCat8Qy1uw4npwDGmH85iRg7vHG4fVqyjbF1qr1e1q8twYL5rM61MGhLmHUpKEmoXDCtjsj8LZRgWRXKo",
  "key23": "Am371Ca3h7NpnWT5M3t7EQCvCdyjvwmKBYQhYD3raV3rT9wjB5CsCMb23ynWN5B5XinnqfKBEFRww9nM9C365mQ",
  "key24": "2wPh5iLswNv44rNiYRwBwVqBUwPsPLg8H468XLYJF91AFo8nQaRS17XukzTNVfAP2zQGVWwvbBGy6doGfTb4CdxD",
  "key25": "vnvTfM14f2xWQYgv94wNE49EBSQyGGBuEithp1myz4rJwZRidnjhmLvCASXBX7sqBqScAEKt9fooeNmz2Gt6GvX",
  "key26": "Vu3SUwjbkXxxVkNW5q9YMnaLp2YTqof9YNRbNRVCk5UTyizYYV6BEQS4a8sJgBA8futGASYy7F7Y7H1gKM7ABSW",
  "key27": "4bEoW8ARwc4x7Fsy3etWXxx8KBfD1LFt7pPRVy2Pua1Ky1XSzPUqembdGLmbShLNnnQk6pMS6erAEMyMLWP3iPMk",
  "key28": "5MzxefLcSjkp6WdKJ76PL1uMQ3bvaFoBrEcpV9HzySRgjcKRpyjrS4NeAKJSZwsQapRREnq293xDJ8gK97p8ZsF5",
  "key29": "5jsm7Pdarn4y4ZnUBt54tVXQBDpazeBtMvVaDXaD9jQ7WpVxD9ANN6eCfCgeABb2uryJ9AD8FqfixWK9kJyxVhH7",
  "key30": "4qamVykgA3MBiQyB4zo34UKpoF4eaTQVciLTLFWXbDS3LApCbTAWLZm32MKBJ9c4zFAN2F7s64iJphaaKJMeT8J1",
  "key31": "4iLxxnuuhgpULv3stSMYxjcrTzLwZs942uktPi3xXMeXYMLf7Kjytq4LVBEFn6SJD3ZWLS1mgWqm73MEozKBJPQa",
  "key32": "3gEkPucSVcFHpfQSRrQ9Gv4EfD5UZuadrWy6rEYWBu94NECJsBeJGbG5DwrjNEvCeP7ebE6yzmwZdw4gSXg7Dqo8",
  "key33": "Rok21omSA8gSdznGYNWR8ixh9WvHHVyaRYjz7A9H2rfanw5vyENF4DB2n2X8ALKsdyeRaDmWUDTHJSDzmcGGx6M",
  "key34": "sAZUBykzCYoiEs9kQn9G4tGUbzH6QqdSkTGnbAApko5ocCqbHiuQ3MRYbR17a79K3MbVXrFEDCWMniCxukAWJ13",
  "key35": "5Q8ysEjPz9qwiU6pbCi79qaJ9pVTrpcYpnQaVpzdhTGziqryMrmcXkA31V5Y4PrKA81LiJ4z5EnQgJ3JJdRy5VuH"
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
