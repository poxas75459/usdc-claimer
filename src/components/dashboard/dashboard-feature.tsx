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
    "8MKJzLHut5nYEAS98VGCswtVuY4wn1yCdGVQs5fk5hrMe3gHATz8uSsUbA2g65ZRxE8QbCugiHojcW1FoggZ7z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMZe2UZuG8ChWsAEfvJp2DzxJrh6nhsUS59yYVTFCb8XzNaUeVHGBwHFWprfopgJyza3oZxfnHokyywJMYm9Fis",
  "key1": "4vPBFTqyEtDTPyEoZt49FthDcjHBFpe7vNQXFt5UQ9CZBbdxCvtSoamYawoWDWF44CizhNwZ2vQWZn65cWHbJmBh",
  "key2": "3UaG4oJgd7Uqsbs3asHBYyTiRZzLrADXSWSJLqpu2ydzdgxdyxg1u36rFmpfWT5Uz32wvjcQgdZhXgW48au9c5zU",
  "key3": "2w1kQ2jLaZc8JmXLjgE8q91MzyAjv4Gik9ggH5MdmTAuNRftsRPCasmm4mPrb6sP5bZqXZbC2VxRnj47gKHQZy6d",
  "key4": "33YRjEWrdAo7V4uSJNseSxnhiLkDzxXP9UHTSQvk9VLYVReFe4pKC2BabNVS71WiWGyN2ZV3LX3TNt7m6VbwMyaX",
  "key5": "5YvL3jDNDL4oFqPJbTXgfUQQzmtdW2bXRNJaDviGcTbqmBuMm1xTvDu3VWUxWzZ1HoQjwFyZ9uWMDPKME9CLY9xS",
  "key6": "3aAz5fHjEoHcWeYy1siECCnGXAtK7haa14Zv5r5fC7dpzh4EgbeTwqZ2sTGQJDbnBA8kXmQGKG8VBs4NQXJtbmxd",
  "key7": "QnjSx76MPytQH1csVoXZR5vsmJa3gyQiKt2t3rMpeXMBemjubnuNt4GLDC9Z3EFzj1mnv353QpL4Wy76BCDQfmM",
  "key8": "29cP9pXnwjiZsoVmd4hbPtV947kM6rvkgCLaAHJzpDS3GxQoUjR7XqrWsR9ZZP476kxNR6NGrs2LQCNZRSeBdcs7",
  "key9": "57mJtffVDwJDMbQ4quLcUaF2cV2ijt4GBb8RcnWejefcVZdaA1VDp7vDPNiS1E6JM75FT4iojnRPuPzMP6vZkprv",
  "key10": "3gfp4DuXSoWafhkPJp96tZH5jA62sDbbGPTArm1u9UhakyA7rDCi6MRJjoH6tEHQ3EXamCPPEApAuqCzW22PN9Cx",
  "key11": "5cNSVrYks9vcmjRmKvm9VzqzguWEvoX7rNfALD1qyKDjieqFw4Y24piUm6qYd6UupG37GTPfbqqepJQk3zd9QBi9",
  "key12": "29uarfMLw3oFzJcJUNC5WCQVecigZGTdmpGzcqL2TF4SSLZXyLfDG63vb9x4Daf2H6EKrpSNoUdUceEtSkstXQZm",
  "key13": "5bVoCbXpc9f8RKxyiXAwD7DxX7ZsLj15wTfkeB9ck92LdfuvYEEPUjizS3G3PyndcjYcGFG4GB827rDsHtyvmUEy",
  "key14": "38RX5yQHSw77UDpwBnjJWm5GCFt59FBDqhyuL2Va1mtuAf1ryZeDodGEJ581wZf465GJp461Hu1ntCQDXhpx4D7H",
  "key15": "3qcjNhxqEJCTq8QaqS9rCzdk7eizbbTP3ieLDVqC6uf2We7Z5d6sZRcDRAoCcxhF819AkLFKU8N8sBasdof5Fc8q",
  "key16": "2g4fB4JC8DUkhs6tWnYBEQiMAp6tnhE2u8HUzeJWge6g37fMke1ZsRQATwaC5t7iQwfd9MQ4vubY4K6QqbKNXJJy",
  "key17": "8bGdkPwNWCL3NjL8vef33ZuJ5Bv8MwTtGzbFRfiiaLp6ReDiKgtCNfutkozjxK4XLaDEHs7qA4tfyuPEpEDJR3t",
  "key18": "syG4YNMbt8a3PCFVSf6w8thftTf4BBjsZ9KiWSrxf1yh1VUaQN8P4dUYbKHKvJcfkRjcDwYaJxF7Js1f2Vi9PPm",
  "key19": "5dz2WBL5ZiHEtgpeQcT1y1RCxyW4W1zY8npgZMThPTgSFCnqJvLTizeX2UpNJMW3nawAVJeyY55Z4FNrzdeZzgPv",
  "key20": "3WkfUuwJ2NZJdokrXRXaYrz7P1uxuTXtTh5D3VjL6SfrYYd5kGFJbHgCB7m2booaqF5aHzroN3WNXHvzegJE7iJ3",
  "key21": "3EPtaw3iggBjwNyZJ2pL78HNh1xMkeD1hxdpe4cYGS7EDhXmqw5kD7ra17De9QBathBSZDyFwdejvw3S4cwcV3CT",
  "key22": "5Gb1yYN32yE8hAnrWhMYRYp9viKDDyR4yrjV8KXAKrSURwAG31hxbcXht6xo2v5VrWvywndTtEHgv5CqSRdt2e3N",
  "key23": "4rKmbqHWHAw3JRDanZUwJWxyBRVedHLwGeoDBf6vgLhgLHxsGVjYETaKUbTaZetrH3GbZbAUBotQZTVPZj5PjUN4",
  "key24": "mXQXcQo4DuRQsWqhpXXq2M7oihK2EMQvjKMvqrgjjAVVKWVk8yig4NAcYgVcMNuDeCNUn1g4mvYGBgHJqXfrwZ9",
  "key25": "4c9muA3JRZjpFhZTyeHksgXRenodA8mzyguiZtSDqFzPH4EvbTMDBCkBQr1YBEcjPSyum4vF4jhXXjT8Uu2Y4Xs8",
  "key26": "5ZBqM8uyAWN5xGPFHkBrZuxaAf1QtMKw74EmKe5deTExC2wWArWxqVPYzSj1oDNtmAXHy8shiufP7ju2u46W9iWh"
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
