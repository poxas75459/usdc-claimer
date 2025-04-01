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
    "5NbQMLmQLV87DEHrb5UTdFs8UuULzzroT92C8ocVgrncSguwcj4GtHQQhg3vArAuiWJ1KdduFvdiFmfgKuwDZ3GW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SQsb8HtyEtiLoA4Grukpeus2fjzq2eG3Y9dfuM8meqSu8atNUANhe2KAHCuJQoLL1v5aGpCmYQ22RaAKqw6RTB5",
  "key1": "cLfrkCaAjyaFRXicAknpyx69NmjRJruSPd3nL6py1ADmBkedoYnLi2h6N89X3JrzhwAzqXSMtK5DcYLQ8uUZPva",
  "key2": "61PKpNfMLjPToczAkN5q1kdVWnDrNb7YBsjUswzeKU2vTUaYVM2CTXqzZnLbEYn3GE6xYXGwWt9vM8UGUFX41TYc",
  "key3": "2e1PcspgLfA5YyNTLmXK7ERwBQRihDb2oiAJsgnHk4YjLpbRgzEjy5veATyEhv3z6cWBZh7tkvoU92k7XHKpYJvJ",
  "key4": "52oYronCxfHRYUPEuWsm1A1KMN1jLQbyuEdHCDufGP8kAyru8v7fYjeb4x1WgquTwsKHXRXm6Xo8Q3imVTQMSX9W",
  "key5": "5JtRZbnzsp1j4eTUUViGXpUMFAcu35H6eZ4JXw2AJyLVYZHea6LadkVh3anBWVDkTf1nJiGNvY7ef4xVv527Uibn",
  "key6": "4XTP8cumQ43Rn2JGPS7NyZjboZAhaVzjQ3rKCxddrZb7jV1yj7hFEg5BHmsNk4z4BdVWDCnob3FvMBRj6B4uMNq8",
  "key7": "4X9BecpUtFZUVuTL3Eaq2GtuRQYSrLr1LTGiJXX3dogQM1wLEFkxF6kzXyVwdsxsqrPSzjEUzhHAX2DqM2Trz4MM",
  "key8": "3c8WoHdBHqSCzH6B8jxamPKoVZrNfLYiP1RJu5sBRHMwEpt4E15DbudCpTKJj2bhNEC53inBjwssu7ANjEpybgXt",
  "key9": "vzp4o4geFVb9ErYvJrJBqViz1gvy8xBHBrppw3Lt14AtmxR6gPQDHvskFTAjkw3HezRNhX3WzQPFfqDnGtN1kkj",
  "key10": "2T9ZxW1FkcngbCqCobwLKSyfyzbTmsJZL3FwqCU4hM1Uwin7fwbTDzFXaePkzaMVJKBAP7V14KSU5jXzjPwVHXJk",
  "key11": "3bbLtyevN8ZCsrGQoLWYQ2ohBa47BLMsTborHZdMATvYoHPKpQqXuJ2rBtHf6ZY4vzRAkGvNrscVecWhxPJw7avc",
  "key12": "4qPbhZfhAN73Vp1oQzVmRJ328LLWNMa2UfbBcgnBZEoB6jm12WGsYZAvXJYU1wtAd4vMpfugKEfTVeNQcErmm8xb",
  "key13": "BdFpQJbwEZmAMF26FzQoJ17m8MexssuLDDHB4fAnkB1oKcaZfxCLXgbUT9SCvRZv8W5Xh84z3XVpCcnYVPgKUAH",
  "key14": "5h5xuy9VKx6FMta5HvZNMErDhrPuGNWCUmnQFo7FzSmTPJ88MhFY49w2W5Sfrx5NxqYSM58s112wuVXv7vk15QrR",
  "key15": "4mrtFaz7Q1eFJPYczW1GaNd31f62bcBgM7bi2hYM1s7bNWz5DBNCTL7ydFqeYbav8kdco6bF17j55wGEkkLVk7h5",
  "key16": "1GubvJNMcsZXQ6Fbckfohp4X5WXeEVVzbE3cMMWoYcarCWnA9NEGLkNkqEf6KFdaXRELRUVa4d8C4b7zWxkD4HF",
  "key17": "4CQaW3NUw6a3p6BG8LGXCRADN5rh5VXXE1EgXT9TTyiGpMAdYyG9tW7V9MBnarXkK74dM2sUucrGUj8f3UriTJYU",
  "key18": "3iwSmb5ac3D7CifHJhoK4hptgmSeLUdv5YiN4fqLhLRujcjGASioa47sE1trHe1sdgi4Y88xWfMUTDNVPKYKVXgs",
  "key19": "3iY4EqVEuvKVzH6V2vypNHznReabAubdWz7XBWQyATGeFWRW2uJhBTZos5t55dtvjsKsZDQ5JuZDvATZ2bUC1L2S",
  "key20": "251qXf1NqoTGSkubnTkKYt7N8G5WEUwV4v8t7M87RdNTiS57gBt1rjY1YJG6KEVCuZPwg9o6HoDdSvri1iieWX9V",
  "key21": "3DUQdT7VdkA7xna8HGLMbg2wGQWoi7Urj5AwnpMwm8qpB4zia7sFndNTEoEEVfzEyqhRv1QUdDrs9gwUTxFwWVo4",
  "key22": "5Gsc7fYrGNXDhDvimskTv5xQLYPfJUifd1kMZgRDnWSDFu7CFVSKj82PgMEDcYzwHzAtE3UM8uv9VGfFuLKaRC7T",
  "key23": "5f4RXGnBTjfWUosvebBEmYJgmoKoj6KSCVGXKUYdx89jb77yhrKtDTjWrKQXj2AWZfaTgpBP4m3FiG9UwKXh92Qt",
  "key24": "4HTfLT4F4HFurQfn6yz9kPRDsBg9YSrWMEApv4F5BWa6KENEv76Kr3T8NN5iJgtsxYT4tARMQzxX1gNttMVPfZzQ",
  "key25": "2yoqAmfhkdLndSFZ97zjk4NU7MfhzcAUWBgRcpSe3msBLqw4K9p7aE2RM6DHn85KCG3wZpvf7t4Jdb1bkxFCCLa5",
  "key26": "7pUKAi1sGzgEEH7k3Uu5fNtwX9Yqc51Sw9K8T8gY9uNG4nGY5YskuWWoprg2SQoVYXLtpQdFtPqCL4s5DE4Yrku",
  "key27": "44N81PSyxDmQ8GoaMrtBZXPHrCcj4KnGw2mpLrCb1pco53bShfBHZpnvp9ByvaPhRRj6sBZq3WeEzCUtwFPzRQKc",
  "key28": "2BLRaDjtoH647Uv9bZo8xMK7e44aG6j6LtoQANzRGHTNYHT2SUjs4ZFgwkYnSoHaMkZTYPEp2yEUL84juTWbRVmj"
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
