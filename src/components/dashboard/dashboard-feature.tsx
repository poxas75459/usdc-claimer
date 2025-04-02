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
    "2baPgS4a1x5vP5iFQG6LPrLA8XaNkZY7HoH9zWESPEW5GH8DxByuJ5PKR2sgNGzPApv1sY7KPP87ZdZPbCxUfxz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K4wuByZ7wyBbkYd5dU5BQhFfmyjeDDxgRLLj4SvMZ2N8B87qKe3y8QoM5RGKagiEFeQ5ag9cUQ9PXraWkVha4ew",
  "key1": "5rSgDumxpShqjYABTcviBAuszxoBvYCKvtK8rWhKS9Yn9HqTGCYEBrFrb3jy5Fr5mKtRjMpETcifpXA5fLcDDrWV",
  "key2": "5SGNuHvFS1DGKk6T6bZsVoncsguTwpsRHZiMK1FefcvqiWxDdJrRh8meqR2ohDLuLVJiKErGBZrc1k7nmdcDaf38",
  "key3": "2MVNFiG3PfenuMRPNzb4n5fQv9ZcwGz1EXwyzXVmeCac6NB4xQzHQtGaw4c2Txrqmk2zUhFv3fMYjY1u7hUdk9BX",
  "key4": "35UUHDuWPpyGncCnLoAWzzDuGmXcYmr3hqJWjiF5k4sFBmHGfk3fmLt7t5J6otBTEmGQKjDhiFeGAEyfZDix2DLs",
  "key5": "4zf4zCgxXNmn6DMzerAprSqo1yLA35kNu3BLffXt6Hss7u8XHfhibxgZe1E3sTPrDph723HfouGkGw4qHFWZMgH3",
  "key6": "63XvqBwFEQS39bVvmsvHx5o8RbmEvwZ7qj5kbsvw72NJAbdCJ6VBdSHZoQ7BYYsiHZ7Y22U4UCKcpaVtt1Wt5d5k",
  "key7": "5Hhxy6PNeg6aDFi6kwjzbNsYZCiXJVL1mfF6TNpxc7hkwMXsmFsGSUvkNkieLwpLnYehsE3ngQebv7mJm7wRonfU",
  "key8": "4U12JB5DUiF7yDRyv8SubQLcJrrSxNzFcYyZfgUQYzRsyuvqLm4b5rZfe67PctfcW96QDtJQByaJxubykwngQ6nd",
  "key9": "3cGaSTEfw9nCNDfYDLyBCGPFnAquL8VoCdxZPkiExc4N5gqQ6J8tR1FCNUEuU95mb4FW81RSmDMwQ5FvDDzEZodQ",
  "key10": "4whfEeXs5ZDhkv5aAfUYU99pHxG44FWjJkinaer8R6kuqtMtxEExNMzppSXeJ3vZdyMwwSQjstqoow9fsQ9ZKxsu",
  "key11": "3TNpp3mhiw7txtr8v4mCBTRMiAp5AneEYd18tH8nLbwoFon1moRB3fw3fmLaJVHxczRRch9UKQDKNsv9e3SdDDZQ",
  "key12": "2w9yoH5Fy3N3vTV3buFHenckCVWoukMx8rKpY9hENWtqS1EHAfWLaXzoStocsSnykh7AkBYc65XVssdkQHx2ZiqK",
  "key13": "3SZpzvchAeABCmQgyJmVye8doqw6xMW9uFJUB8ytvwqReB3Pz6vbdrUSBKpNRc5zQxNJ5WFYQVv9w1d6HZpVJ4nM",
  "key14": "443DnLmUym6WroAQcCHXESQyPFZ69J2s581eAKYLj8giLNFdJXfgkPYKopDcfs6xui5xvQ2kqS9UsdJkknrjNsNp",
  "key15": "4hnc6Pemknwjpqqcaj16fSgbRDAdey8ewRjGE3C9j4MpryQh7va8mqfvgQZMBnNsgcUCUSsYRVrkgKhYYaZCaUgJ",
  "key16": "uM3TRn3jGc9t17yNN2bcRTL5K9M4yTT5pTcAmymk7R7U41S3wi6jFVmHkChhLi4AqrQx29kiEp7o7Lw25U11FA9",
  "key17": "4isss4zHsgGsjWU7Q7tXPY1g8AnXgvQvpPbRD1GCqFmbLKLhFN7zB3WDemgrCgtanUJfc7FSdRk2zHxhJF7bmwU6",
  "key18": "5gfaeVEHTfB3sXvoHH2y9v38CjjXXpKKCzkcDGGNYakc3rXgMYuXTpbHa4BA3fYV8KCShcnGxuLP1AUaCDby3hq7",
  "key19": "3GCZwAPQbuM6d5GW2hK2pZCzb1Jx16gUDwyW9pf44NCCJcxcHDL8RN83PartAMKtGGEdyn56pn4v8Jc3CJSHMiBt",
  "key20": "2T3WDJ1A8PRNQYqmmAq3jr8HRwEnRxQdXfhxfRv3hCjaQGUDXSWWrAyh7tb8DHkBPW5X2Lta3iP54ydubSjdnRbS",
  "key21": "t5oUanqKj4W7CTyv6dGn9uNJAcQvr3nxE1qaEv5wbeV5KKt3UT7hAVaBqoSFAH8wNK8XNkchoz4KEYN762DRt5z",
  "key22": "6Pe5RZb16rYpiLuZwVGrdGBW4Kv8ZuW7F1kSJX5xPsjDKiWuuP1TogysrusKr3vWg6R13DhH1TVDMZrz3KTCCvc",
  "key23": "iUmXJRqxJJWLe9Uz3dsR9gwkYc7QyfPjj8MdydT1C8rBDob1ZFVErDtU8giHmmkxwmoosguxSR2jfrQRJJjDcnB",
  "key24": "4NHYpyKNLx9cVK9wGnJ8SX6fcQjo7VHYFmXHGLAR6ucytGFdvRQRK5rrJKYDm8UQx6ZGB9nXKJjdivqPAu4tiBTP",
  "key25": "fgot1nPqh8haYyRSjSCduoDDG8QmB1TmVq8KAne5Db9SnedeoZ61oHW1eoSmdDqDbUkhEe5J4YouUMNgHmrqHbB",
  "key26": "3b5eKHfBgficLs51A8dyrTT3AnH6RTJhxMsDpx7Qmqz2RetYuSu4PPxDNRQTTDnpNfqGjHbvoDpbiYfYpXkzvi9T",
  "key27": "45NPrtWKFqSDAFJ25bqm8LENSZgVorzK2F3ivQcSxJx6UBxDih6KsbuV7FC6iVEyWgoaLf75tQjRbUWuiH3cp85n",
  "key28": "5EJ9PsBwZUTpvF4jopio8XMDQUVM11mCfxnGLFrEjSHMZ3PAGhvRJNMRrVyL1doNkY1iKchPYFvEQYsiq4WrHYY2",
  "key29": "5Gy2GNAb4CWZidmFQKfXnPu5Yjxw1A3koKPBXPuhNFWkbrFqmXfg7MWMEhd81aG84GMy932QavGXs4J7M6meP1ox",
  "key30": "2YL5ShLVcw9JeUuqrpsJLqAhiPn52pYA6ho36Uqw9FYXfD8L6e3Q8SZxfxbsSYtmX5tPfzct9xnAywaNTxHvFAHv",
  "key31": "2NMKAyNgePPFvBZRQhvWNWW6MA6BigRrbPVumg2ShAzrxnZ2NByPWd65FhdwaRW91ZShXD2zjjLNUx3ZNmDWjAXU",
  "key32": "5yPornczCSsAnNFGvGb71BENeS4VjfdTL8NJFLaxrbLdmsqN5rKR4JukbEhGdTa9wEyHYn2dDcbn5Twkh67uWvXm",
  "key33": "3vpxXa2fSSYJz6Cz7MV3nMHW6eLiPS1UVLZ3JAEiQhnBpFqstBaFZgEtKC6n5QmNqqiE4Dg4NgD2M3Y6jxUUhpuw"
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
