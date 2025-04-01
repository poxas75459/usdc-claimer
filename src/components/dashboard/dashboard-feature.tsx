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
    "uW5QAXxxhk7vjhqvMEHH3TEspmNqVXUfp36mhdXHu6b8Pqi9faMkyajvn6cd4tpYx4wQKArc2zWHr3vKLWJwT6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bxgjEEGFnvWXqgBqWkGiBB2DrpiqgYFdk3iBz2cGneDWLpYCyUfhGM4smtaEPYPnJaTqkALLMvFjwwb7TBRjDsc",
  "key1": "3W4Kr9Km82Lhh5MxUvoRwZJnbZNAmVkWcozV1rawxFwq3sYgNi7T8w1ztQUcfgnNCYLJmHawFY1x955KmtMaySnE",
  "key2": "2532tiZCv1n4GJGtiz4DB7Viq2UDooGhZNRmS36xvN8sciKgnwM3x4ysipyH93GREBWvh7tEJG3cLoKsXwNKpeUX",
  "key3": "5Wo4xqLMR4SLd5kRz8MzWWiWfET8SzyprjzShsfBahBRxiYZxGyw9t8Dyjp2SMXNqr3qFWifysTXW13LPGVHqu8e",
  "key4": "49XP8bcaUzeHTvuJ4p9s6uo987fW3A6bkiggN5BATSvzrQDHm1uUypP8D8uU4GrxwKkRgu2oRAZG1vx9Z8TpNkVP",
  "key5": "3sjF5KbLQa9wsLtBQq6heh2CDykm6Ttys6985ZePBArAEqgedZ4iY6CZ2eSfxPFdNSoetVD1VBNtA2hGKtbuprp",
  "key6": "35pGahyt1WpAucDDM4jH8ASihKDoGeBe59S2Wvh1XwXS7UfHn61CXJiw9QSZYLNvtjjkvjmvMmvjhw4tpEt6xrxg",
  "key7": "4upwxiKTZ1wtkK3ETDgdeTuVJQgf3Z7gko8oGbHnWScudk2hGVb81z2bJcR8weWVfEdptvo9Bo2NUyQBeSAwM5HV",
  "key8": "4aq7m8WP4y1UNJT56UPFynzWgTTdoQf4sowzig1JBQ8nik9Bg7AvwgFKR79exTb2t7J7nnrfaQK3LUT27Kjtqga2",
  "key9": "4iGBQXUURZJndXptmbpVWkR8JKFCsYnLejYvagW6LD1ymabZTZUY8CHznohVbEfLPaJgL93aNFMrYXhAUeiXWUVi",
  "key10": "4SNUhE35tmgw53SfTCokXJ44H6aG1rQw5RdrfygNkNfhJWD5GqBW5eMi9wAgr5AforHyyXcLpistXUyEbge1F3Sn",
  "key11": "4q7nMrr2ZsbaFgx9zuSZjAcjKC2Qmg48411iHMJkEuN134neEyfPQVW2UvV9V91uXuYkSdwsfg7TwG3pbMHdEnum",
  "key12": "5CwPcXneRg44Ph4qzSS9UDgKj467428LfR3ZJpmZJM6ufbbRUoonJqUFqsXDspzkKDs1A6FAiJqsrFdKhum1p56i",
  "key13": "7o2sGUfkxp92HJQotGz2Xh5x8NXifr9KmzeEX726EV1NEW75PJggmuvb2MnrSTdx4hENTwRkDDUz71gstWRwBDp",
  "key14": "Q7J3aAWAT167wFpxNccMrVqdXK62eUpn6ptucfTQ7ZWEMJsobw1qZuRBVpnrzKw5Voj3FWQwbnkQ3uGepNWVytG",
  "key15": "3PhtfPiWf5Kej1Emce56y1xiFSjqnhYZMWVoEXqjd7iVUq5z7eK1VDSyFZHDuTEXxmBKqVW6wbEi8o93W8kNeGPb",
  "key16": "4ueGf7wyB8W5vaZujXBgFiuhY3Q3NdvJYA45pHkbQ23axGPd7W5ehFeZmWVfSRrF5zQFuJBamoxaYY6HnHU6vwb5",
  "key17": "EZ6t5fiEg3nD2649wBhPs7FaQ9Lh5CWTCX4beMXGbZeWDx18bfqo5M4ZtLSK1CtXodW59tmuRrKBjDrFVQRyvGz",
  "key18": "2Ht9gWC8aFNKtfvUtfk9jRaJJyyVMBJAxmWsM7xfGC8zVScCNFfZxRdYyfNwmanYgwAzaC9vroDFGe3YwfJkMNEz",
  "key19": "VXozaQ7FPJYDDRNQadMupJy5WnDU1Fj5djUMdXGd1nYoR7KsRqC13dpVJ3gdif5W2Rr2QxwiyMBxb7dHU72H5nW",
  "key20": "3y2JnjedUjjEedNjfCjPbJ4dkYKH14bRxfN7fhng8jGPvK7rs4cT9jW1VMh89foCcxN4VaNSeuqUswTnUGfaNgfN",
  "key21": "5SNZKR72yomNxeVmMHvpLWpumDjMZJnCQzods8E9x9CCg3arjhwprfcAXAXbDFfZZLHz4zYz8H7zYVdpUNAair89",
  "key22": "4nBM7M8RkzHYsFdwnMqkaG32qQR3piVmEM9D69NdoT9VfeCWJd9XqnZqrsqdfJchvocNh6BYX6enjG9q2XYN8ung",
  "key23": "3cE9a6iCQg6xwddG3uEEGCxD3qp13etUM7M4ProGWPkDVwqows7cHpUDTLQR7jwKd3BnDDwG12CB2ZeGd8mPcQgF",
  "key24": "4TjsyGs7yrDqNQt6xvxmgHEazm4G1MCAaEjzCQQQdNGkAj4kWADzJAwdNkc16QMBnTMvjMuRx3FoxYYSjEWVzvNi"
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
