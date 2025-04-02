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
    "GBNPWQGCE9AfXEKmTKPaGJy1GAUnySgF58XKDJwejcVJTM25swhTb4XQg5z8wwhzKGDgF7VGzeqGGdt9vrMniQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42VGQH4ommviZb3rRLU9P5dFpSY8pC7SA6eZwEx8MohVdYhYuwUpnguVXW8b1P6Pp5T4N7ytZ1mynqF9RRcRkxjM",
  "key1": "5WsgF8pGAHyrbvr3DQBVf9BmXNQ1avBYGbLUT5QmdN9Q3fmY34CdGEWqrHbKcJktnSsiYBYtPZQrKXpjELfjERwr",
  "key2": "LhrS6NxnYaTMYNJmzjZxMyRTwY2uGsPJUUAu26cAbC2mM8zZTEJAwEw3y5eVAmWnPS1MPzYobG7Z9LNWbS9afHx",
  "key3": "4gToQHYkkrjL7o3Cvuovu3CUpmWg7gTpttTPTCHkrrqzGhw5kfmLpxxW4rpRYURdsiLsAXYxHgkFHMv3Vrz6YJgb",
  "key4": "3idmKxTVfG1fY6mfruHnBmVxTGmHnefRKMBhdeJcJARLR8XpnGmh4e99g4VCdGxULjB7CJqHZtqtBZxK7Bwy3nyd",
  "key5": "5Eh9uavJiY8ZSf8skZ8SiALsnbAoxt7XSWtR1U33GnTXn1nim2rT99T7thuWNL6Df1gJkcQdyYUtNcPmaC6xJmTo",
  "key6": "2ghp1zjTfsV9zKNSQebZuYV4qgufC7tinGNWoC55nbmT7W7amS2GbFrv52erwHhf76DcQ1rywj1WJpPnfCigy95R",
  "key7": "5cmgNfnqsZKZ6yvgb7hsBjeuufQhn7qRPpSZDg82oUfRqLd4GVTeYmsUmyAz4R3tQSbZmRNgrve9MzvsMWW7cs99",
  "key8": "64mLzyy8jJjt6cHTHGiaqtmBn6g4TDNUjHEJCctVM8LP23MSHbd7HXZzQAFpbYx86awsQgSp5CWZiNiNxmQePnie",
  "key9": "3QPwypuqtMQHpaUM5iCXH1JMA7DbQRoJDCaTghZqwLAhvWQpmuhw9HpGEVNhCRc8KpVeYipqKgvvhjPxqASTwWPv",
  "key10": "4UBkaMF8g8ZfopaHSL2S8DPWMiZytwcKQTHzLhFZNJZYzmySPq3uoS9GwMBPoKu3KC2qZX2rRDwQwp8PNXF2mGCY",
  "key11": "5JVjjEHJsYhvQ1tUMDDmpGF6fzWb1yUZrRnGCo87CLBaWt3JMMsdFk8HQkbUixvrLJy7xMsEb9MvntaifbSTApBT",
  "key12": "4SakueFh5Ef85tGQMaFqn4yZzjDowHRPDW8eGenpLKF3UPocmzTJbm8bSQkZmqrnjvpwg9JsErKrLWjqxhCDm8U8",
  "key13": "42DPXoKrJ6tLdAwRUNBZScPSc6VreALsEE9Hcoe9DPPsC9YTm3MiSUgZq3gmaV7iHgYKt7aVzZrVzosKwyKCXkht",
  "key14": "64HCqVW9v2Tkb1apzkQ9uGvTvU71m4ZCaPHki1dn6o73cac6vNGSJT1tba4qvQJF8BFWVZeoJxJVQHWQdsbD8JJa",
  "key15": "4nZD1CaJhqcmx2Jyt7cqqJV8yUjwFjLwNDdJgxQQSPk5gdWm3DbkB8xFgyLj9WHav32MiMQsQQdVKGeUoLb5kjS",
  "key16": "maGQwy1Ur39r2tkqeTJ5HRZ8Uw63R84aBdCdSd1pwpp1osEL5D1X5YghXyMJ7ti3zqvMKQPmrPoa4Y4ywRy3y9U",
  "key17": "5T87ockJPyjkxy2vmP8AY474oFb6Cuoeun5Jf88GFcWrYPUXZFDe2P63mQXX3onMraE8SoJFZMfMwT6WLGqY8SSr",
  "key18": "3FnwW9YQbSxS44NMxkRWFHPWRnCAbKLVLiXSUaicCmCg4v8R3yGoYymSpT96d4tnqDcfps541MCYqjzeNVcSY7oN",
  "key19": "2vKhisn7XpgQnKzWZeN6spBFVaCL7yefUuq6eGtCqr1ycpYaokj2PEDWqzKe2fb4nSvdYmxuQNgiggyRCiCoPS2x",
  "key20": "5bVn4rvpb5MKPUM4RKKnD8bYY7nzSA53cZfMq6zk47HMLxvW3NSJfuyc2GtHFErqfgkyQEDVJJf8nYVPSY4u52ZA",
  "key21": "26YAjs1wbKMGhSBhPYvFd6g85taK13cUz3S4BB5iyrk9ZbUqE88BnHPRqQvawQQLnaCoHoZbEp8Kg1PCyW9VtfXa",
  "key22": "2rtDP4ujVUEa1exn1M7qH5DVDZE2oWUhaWcbK9tHxddmsyHztCJyHLZryNVadQkkeFeSrTySN2hDZeXdsHwJbew8",
  "key23": "5L9QHCVndKjW5vnRWu6G7ijsLvMqCKiAh4gNPGgqZXEs6p7EFARiVCvXxXbhDVGbTgu1s72ZrQLfBTuHFH4w9DoH",
  "key24": "eRRcsuUVCjFqczx55km7YoEpgCm8Zmmif2B4veFny8qaoV15zUWxGEKTbMUmSkebbADJceoyJqDRxNLAf9vkqce"
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
