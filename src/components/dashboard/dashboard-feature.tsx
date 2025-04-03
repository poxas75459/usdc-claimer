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
    "pGyLn2FpvaY5jPzYWMzMKj7pp4bx5CpWyBEui8yMARZzVbKEQLZwqJMTSor8ERRCeP7hRVKmA8RHfZxwuj4rUUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mc7jeTsvwnhMk4xC7f216yzFikrW8dL6tcq1gqjQJwCupsWj5MvHXUF1aamw2NBqMYFktLgFTFXVcxXkfbpyhga",
  "key1": "joqfAhHW5Z6xW2FCaSjoujStb8DpCvF5pxezfJPAfi2uReEepB7XvhAQiKTb8HzGdeUQxF7LseEUAiRtkWjmgS6",
  "key2": "2nZLcK3qU2dixKyUsmKygMCuKR2LoYRpssxf5Z8dCM8W4b55LhyFtNDU4wU6WEG94kH2Nm2JRGfZr64BPSENc8JD",
  "key3": "58bAsK1pUxzmXtSKbR7ErvZnZ3aFoRXgEtReg14f9AqvxHRYB57BkMDnXqZn5pAD2uha3qAVTw2qLw7e9XGV3PzN",
  "key4": "LFmRyb1vfUMUd4Lbw9grpMnbqbhyEL3uaaNLLteRHzR65PBvvXcXmJVYWBBxcbvNP8hccfhAKj6gAKrdc9LCTGs",
  "key5": "AmwWRjfX8QKs7hCVRhjPcXVUjyudqeGCSwPJk9aNZFKohnbJvHTuRfGtF3c9w6Wx2869JAcmLSdzim6b9DCZXvV",
  "key6": "3ivx6yfiytFiGAFgKvYFohjEAj9o912B1aA5K9xBGxRn3oebpNg9VyQUDKqwkUM8mgGPRaVkj3bAG1iF7WuCg8TN",
  "key7": "4HDoB46fYE77H3UnyuAxohaPJ3D95RcFLjEG9DGWbY4ZC3QMjFizegNrfp5WavjxF8iEteQJqkc29PG87GW8d4oU",
  "key8": "5wQBsbMQuLJ6jsKjJYpzTYt4vrVk9d8ajhpxCAknwiBaKsLc1yUh4USz7oswTVNqsyMFgkbQp4RCT4YFj8Z5McLo",
  "key9": "5u2apTGiq4NtvXo4ueqPrDSuBV4KMGoowMswgvRQHxpEB8xWx9ferbVXXD55nawkpAuwg6x8CnHEMa2JRwKSx2TA",
  "key10": "2WtvpR7dz6KJB1muH8QT7Uzfsi7jDY4ZGeC5AceqE1ih2wD4Zu5UyZRqc17DC6KycZmHk41fdP4nUwBr7kDZJkvi",
  "key11": "5iUC5LnEYQxWRGWCRkGFSwsA1MxWbqS8zyNJSgEK5zAPefBY4kdM84pWTTLGXSqnCDrmRXicP9hBJwc9kjmmWYZ5",
  "key12": "2m2jhFfJ7LZXoUijqoRF3bFhGxWBjybcfiKLLRCPnFmjm4Y37PEpkR4Pfskf8g8XNcrAj6c2sA6zSfXv9ocz47xE",
  "key13": "3eHjVrXh6KgmRUVqzDyuj6aQ6uSErtkpn7ENikMiDgETHaqttBy3hw2Tma4SXHSRtWVszJJCLKCt831Zn1eFEFsL",
  "key14": "4QbnD3Xrbxr8ZRGMcesCqbUeHxH1fGmVi7Ye5dkLSeWSud2d51KUpBNgnrf3me3R3YoA69Yq7qFTPNtSHPaXs6Hi",
  "key15": "21pT2SGp7TgvcrKbddiMP9wHzC8hEHw7MNqsUWtrDjQ9qtBRJweocLX5nmuukFvCWiSUwJiv1nAcwv1k1pVzTNjM",
  "key16": "3fCJynaPaNX3go3PJVMj7xZqe6mbh8HD7xYuFtL4Unf2vXU5MgCkV9bNye6E4Ca4rbtGkdgofcff1WgfnfpgZ3NQ",
  "key17": "5PHzxywoXDuLKMjQsPVR7fUnE6dParLYknhTGzsHtSkycPMJpFB96BKBznp4wsAFmFNMUGmgF2Fc1XqFpbdAjbNR",
  "key18": "2WgcXryf3Vz9JMcr3cCDPns3eG495rq4MBNwdnLG7GGkTReEsY5BhYeXyVEDdtxtHXcLAsArkJb8YAsdasT3y6zK",
  "key19": "4Dn7TWFK7f5Z2R7nEJPsDnebzsTpAM3vZNBXChNYdDNUyrdnTzJbvBtjSzB8nLfojGBiyhzZYjw7eYTGM7yANzpL",
  "key20": "5ezTkTxPpAm781K7vvzjjuJwywFKqiYdvf9YtnAgKx7bri9TfyuiGRSuYJPZNYcz6ao6f1TQntUTZ1frziorxqao",
  "key21": "51B9TUv8PwBhkq9MaASzUNoi2GGV8Fv7z8G7VnWGcQdDBfTo2uheTW5Vwce5tNQ5oEpuErUHGZKcPZCvAkrupqp4",
  "key22": "5xW4hnQKGUYRj2AQKnQZxmGycB8eRDoqtSv5M8xkvisKzPuigRkjx1jXWgxu3dxhHMb7MJwNco4g3GiBncEnmmPc",
  "key23": "2dSra24vxxJBubTWejCuer3XnyvXt16orsxA58UvvZaKb9jt55jSn8JhH1mbj5u1pKsKrwiAtyV9nfiQeASaGB4X",
  "key24": "6fTDupTC5UjFVDo6VmT6txZXWj666w31m2sqnqs97Js1mRopF4JsknJdJ7vypoypEskCeqwmUVVWjYmMSduUWKh",
  "key25": "5b2GN8idJo9DneE8ctNX5pK1C4eZJHmfgutP5GKKbUHjUG9pdXvW5XownJLg7JTEnJPe47Npnx9qGuuEE5Akcvkx"
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
