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
    "5CoYzcGJvjmejQjB8UaE5D5R7C4EifnYE6tH3McHR3iRobf6BpnNVSqCSxBw8cdtJqNE8njPixF8oJER3ASfs6yA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Y3Zef4mp4T4ts1tGq5JZAHvcpTHmqZN35ghvr1eV8D9ZJsQbq8695w4dYH9u9ZoySU766kfAqRNWfGgNypbCiv",
  "key1": "5LTroxy5Kw81UqLW3LHupGPiqAd1ZJBofVWFRWgVD2oB1tPKg8qSfujvanxPsaNw2KZ5m3DXNiPYxTb9QstUwtmP",
  "key2": "2HSE8ZdEJothUFZ6ed6i5Kr9vFxY3iHJy9oCMrnpSv4DRwBtYDajK8TMfhy14TvkiNTDsEYzc72UhKE9FBBFNydW",
  "key3": "2r7jvBeo9zyjkPjNTJYs2MQH9goQRu68tFUjHrLxt7z38ZzKBsoGUg3qXvUSwBizGhrRbZ8LiNP4ZMp5VJAmQBxG",
  "key4": "3TQXJ4kSASnri765hhttkJ8ayaaC2d1rQbjqpKqLVy4nRWBnRkkcfcgDZpWMr4efrJ7pH8zziFaDgoUzhNFzCzww",
  "key5": "2MWmREVaQJ7R7hHhzmPNFKQrMWmTZhvd3HSvhnC5dbhG8AQMRsx3sJgV1sB71Xa5LxuxNDggdAXqs65FwAZYgkjE",
  "key6": "2XK9VQXpTXShtADRLwpjVK7myytnTUAGJrs5fbkK3CPSwG66qnvqyPPLHnVrGVn14hPQA3n2gqdKi6S5N5n9QUk5",
  "key7": "3Qp7CcTV8ypG6TSywCTuF7oMkrVXx4LZxnynXLbWcUPicAQHfzuRaFeVmtcjTEzEd2B4FXBMDAJTpvWZRVwP4EWV",
  "key8": "5Yarsd6PLqAjxhH7txEbPBTJoQUEF4iY2vTWTZqrj5EUcp698WsR51mbpCL1yafUKNDT8md5SLE627SNd5beAg2V",
  "key9": "4r1r7X592hfej8osiQS4x5vHQc97WfWQzVZ6tYYP6dZ1ygVzx1YrCrW7fPZF3tNSxEhXBsU3sK85XhQTpvWzznSA",
  "key10": "4NUpbU9Gt3QS3brggV5kr6cwtJGobXSJufJmx8gTWMhFFmL9nfynDQQBbkvd4An2jgLZWKhQc3fXUS1Ac1fvGwfN",
  "key11": "ydhrTm9vhehid1foV93BpZffuV5aZdi8jBWRUNFNepdr9iYSTf8KUvxJi6rDN8zMddgnUyAFgxnyjoQExEUiZAc",
  "key12": "2jgQRsApf4Yp5vfDRw4zYAxfgt1vKo5miHnUpTrWxDriWK6279JYdVpx6wa7fDAemRuDKnkdR9AJCgfqAo6B8smy",
  "key13": "4nHbxaoLZPjYDxYSL9eLNcfkGB8UAEcb86zNkkTc3uXcti8F2m2KepVATNfWVhDYwxndsMCjqTZsJJhr5m9mexjt",
  "key14": "5vDo7hTUTeVpTUKmmtKPC3CBBm38EzvqoJbbSL9RfKokABdGXsmV5FfNo6umZGA4ruTxPqwWaDS468HVMUCZ473J",
  "key15": "5THpLKFDv3RpTyYAhpbCyqWxUVMmqzYWE8QGqMbdESFHg3vjvRTCPREfX5HYBhAav98br5Wy9GrKS5BZ654ahXr2",
  "key16": "5GStuJKxoDTX4tXAJp7ZVFKFM3yG8cGqZNxqKuWRzUWm2d1DvSY8sMUmjKRgoY6Fg1SN1Ekt9Lg13Lm5DUWyLYp3",
  "key17": "4vUPtUe5zVWmezxBr24NwZiafeUmEv8ASGT7SDPCMCZjVcTPrCy4AxX8kzTi3NJwsEYz83porMg6HubC5o2eCsg5",
  "key18": "658uKEnR52vKnkfY3RnEz3bCB9ehGATFyagGLn7f9WHCR9twZ2XBmsvMdXm44vX5GMYsmSFCqFD6j9ujU1vcJJzS",
  "key19": "4Gu9pfpwg8DvTq8d53vCHBuKGSHRBBDsaZcV2sT99a8A618ywacLV2GWXwm7UiWTU4Ubq8VNu98kvTwNjC6idosL",
  "key20": "2QX1jPYAYHjY6jKd8zRfV77xaG5R9vMd46kdejZtxZKHesRf7R7fh9x1RzvcsdeZQEFG7ypmutjHBYMDij4mUQWG",
  "key21": "4wHXwLaCbDgHMgD32WsfSrbMZLHERphAbvtQtevojni9CJSGArihB75kk5WFLzgH3pvkand1zCKsTykFEAvMxp1m",
  "key22": "VCwsWW5RcAh48GQ7tx9nMR23ds5RmJLtcEjb7DFqdtyyx1ECfDwbybwfk2wFVNoFT4FUxUjEVuavsJ3W4Bfb51s",
  "key23": "4A7n9n1TBy62bEf2ij441oKmH38Eu5z7xR6uSm4qzV1t8BZrh7jZ3yZvN1ocvNynZa5aVMWeLhoP2U6KAJwFcSWF",
  "key24": "5Z81Z5PLVDodJDjDpiohBtTx9c6Km3RuxCc5n883RiiJfjDmnk4t8aWaoqBVMx3Us4oZ2Dk2UDdEs4xoc7cswE8C",
  "key25": "2L4RhWzTbfcQnWCBC528R7SZpuw3jzNC5dTDZ57Lx9vEcfTqjNfzALXQT3Sqbu6czvZGiZAYxvdYNraRfcfBRxdP",
  "key26": "4qdKgywFtuxQCArhApGpSUsAGtqCMnP5jSsguNSdKSqavXLN4o2XaTTiab2H7w9NaLA9JbMA8K3z3rJLQBTnnnDU",
  "key27": "4GAwPrsdM8ivTX9zr7uYUUPrBoB4e3zbxmqi2LpcxJRnND82AZYGtb4QUP8EBA8xTz4JxePqWGDnggjm9sRjmUMe",
  "key28": "38Da9GF7fBwd1FnRDh2kVQjw658pjHaiu6HmBjg347LjG2jome2DeRsNZU6RvTWw4iHHggojKCMQr7xKsDQEkVgk"
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
