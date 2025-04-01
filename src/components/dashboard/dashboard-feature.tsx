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
    "5jwAyyecAQgxrfcsvuk8QYWq9iQzjxo5gey8CCboktBkzgXFNW9qm8nwHYvXQWyi4L2XtUeC5xGX387UBeuBdeMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPUYKSVa9XAVfBhhoytRg9KjcxXZLfZ2pQm9y6onk79Wf4npuvmQ7ikXMPUYQV1JVFE7ri74L6qqozbcd1UfxMv",
  "key1": "5sMJScSM1faG86pV4KNKKZDWWX8gNcxEQRb8PChZV8pXEAyzYq6mrQ2ZFjr8LTFz5GhKCR6d5QaLt3TZ5n1c93NR",
  "key2": "41pLCmacpETaC9rUbNXKpFzoNNKyZTPuJDV5FB8biPcdPrwQncjoKh3RUor9yUbfXYGSFnLzVyj5RYPyrJFvhyDF",
  "key3": "3TEYW9QpFcYn9iPRZTWHvNNuQ1KXaWe3LKEBpCqUYwYVLcNhQqEJZKEw1JxHR14euzzBLbdRgKbSLRNq68MjVcPM",
  "key4": "2ZTsHfBXxxMVqPwZR59b45BQc7yaQbBteTrY4tHNcAtc2hidT8t1xtUdUzg96RJpT6u6wVxSwtJN2kYhRdDEnBnH",
  "key5": "PT3pT1a51F7qAMzeZL9FjmxXs3RyFuLyVk1KWSJ6p4aSmhhjnTcMZqS4esdrjp9FVMn25gBZgesyXbNdg2CnTaL",
  "key6": "FtANj9xB6nH4FLChbpi5PzHPGg96xAeFAZPXiAXCNpuR3E1EKjNvXtaJF7LJfaXcSFxiNacZxLmAo9hQkAikyhF",
  "key7": "2WtycBVj4dngHeAVUq25JA9Qxr5AgLsdXWsnu1Kh2rxYvWNBtQG9gXJEWkLdRW28Gxt6zLUMdM2F3UEeFPbpMCrt",
  "key8": "oxmkeKRHJ9noNkiqaK2wMZNRK7BP4xHiLdu8VZXVYAA1SNWgL7Ttj5n71DrnUYEjkmUYrwiKCAripqC5uyuvuxB",
  "key9": "28zWSM4KpcEA6t1AfyAZgnQfnMquzCrXnJFM7Bc2HZBsbRzBjtajKyKuPGi1NsK6nrA9kJAt23WqbbcMT4pfGt3x",
  "key10": "37A4TiuaNsLNmzDa8HxB8ZYaADyCCV2G65UwyQhB1Hj3oXW5iem1GtYZWFhYBELMrjLAmSBfAFsUNerbZmxWz9vd",
  "key11": "3tEz2CG4hrdQh7CFeG2u7NWBwPkPCH7EsuDTo83bQ9RvKwsS8YtwjMdDbE6Kzsx4dG86ZcMevngvT7ibzjufyny5",
  "key12": "2Q4eHwFLZJnYRAk7ojkSbyA7TtirFtXPtaFsq1i1GxPFj9KHr8e5ip3PSUbN6hiR4cVBxaZqAbEzQDWoZozsp49D",
  "key13": "2qP3NgpXfC5tYec9LDwTENq8pTip2RgxxGqcjTFZdhCNWdEujMQashj6SUiCBV7vGw47x6SPLtqdGDCUqJYJuv9F",
  "key14": "4bRrSzrTJTqKrs8UMDVon3NVPxDqCEHWRDanFS7UqUDMthCUUsqaqA6QrVNcf2uKA9VesSTsmTWjHrTqLuqYaTRq",
  "key15": "2XGV2SUiC27PUR6iQu1YXhAkjPyJ51peaMNRc2CKeQVetW5ErtGaRBKPZ55XUCBXs833N9SFCRFiLC7dAenW1DTu",
  "key16": "eUZLoRPFokkDnD3Xi8JCTcwmrtJDRQT2gtF9raPunvwVWyZeYZ3kYNb1LHUg172bYBvNFe5AYQ9yx7rgSZqRzBV",
  "key17": "5yCsA5WCGfuurkVmQ2958La3CqPh7aaqdcW46JPSBmhxUjGNMvEE1N2e65JrzC53FqakAa8vMvvyyAQJPMft17jX",
  "key18": "4THHSBcEYV6qPa3MyvDVWZh4CjyonPoRrR5R2B3X1T67xZmU6E6AFomx33T5WDtVBFsia5jSq8bbZBPnEq3REB8T",
  "key19": "4P7KmS6EMkYT2fArkJDkEwsk8Zm9UKWCwRAC6RuJ8zLMcGCMRfnQwT7QwtpsGESTnjibV54v7JMtssKreF4HuGaH",
  "key20": "6wyrdg5oyLYC39xkUwJkkv8QD2SnrSYt7gfdfrKjxB86HM7xUJCLWAYfyTfNu9NQook9PxWAG5jPcd7y6VM16fv",
  "key21": "3QUSuZN2F67WY48rmYXb9w9KboinbpCETm4DdjBcU4SGrQrfaLC2Gyxoxp6RAzxLu9Di5VWdj2arDx2vAhJNoJCB",
  "key22": "4G9gaWjCcypKSh3CGndsGMC3KpnxmoWfmWfRQguCyjmE2Nyg1txJF1S31Bzg9t7vC9LZEx8EGv4Z5HTAxu4Am1nZ",
  "key23": "2dodJDL4BvLW6gqNhyaTevNb48RKULYo7Az7T8JeyFjuToJ4Cn1XXSquEV8wPHJ7jetWWcuU8QZd6K9TLSbqCqpj",
  "key24": "3495CWdGyz6BVQjU1EC3xhd3VpvPeVQuAtX2x9NGCWHeVoakLhj4CB5hww3efRnnikWcqJzE5isn2gP4FjUUZRed",
  "key25": "2Sfyg1DZBifkWAGCWVVdogxpWT1K24gFycbc1Sx9wJ894nuEsRU7x6rgvSuyauRb7fmAW4jTZed6YDz3FkHBiunx"
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
