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
    "5BtD4cVQEpDwCXvhWS6JsALyhUW8HAdA56aHkD9F7MSd2MF7ELgkWAJ4fVaaoiLB1p8eywzP6ms9diJoWjdYJjAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59PokSbKZBYGyK2cK6kBRywcqadTqmSW5Rrqac46zyDTDhoXcgBY6yDXdEbb3EyvWoLNjieHhm7wVwHeot8f4xS",
  "key1": "6iGQfo75922MHsLFEKBhoN66BegPJ8S4hxDBBGWAdfcMGeZF9UVaFp3axKxUSyTAYsjG6xnYX8oR88mxThgk7Gx",
  "key2": "UDbJN287GfbLXeoi39xwu2MH6tQQLvx5XGS4r5AUtUXzuUD2wrxdnvD3wHVQho8q5xjJT5zEAMQEq6ARxigbL8u",
  "key3": "3ngmbkVu3yyphG3cTcKrkxAAqMrh8XCYT6XyMKZVi14UCLjRnQn9DcnQgZGnr3QVKSnTB8VNVaH7YkyV26vPSG9f",
  "key4": "3C5rX6rJeX157khqoGSZA6s5Kkht85A8jj8TwjGRRZQxrrTfEq2Smrnd1UtDYXrc9X72pvpM7r77FWQaJirjgUAc",
  "key5": "37skki7bWCQmgCRGLYr9ENe7ProsMaiinzFEG9vNYjyLyLSTHp7b9yKXhU2iT3LDbDJUjnGX7UvXWB5YRkzhB7zN",
  "key6": "XDsNQm6YBhUNyoCb4LLYrx58PFvqsfkfZiKNZPbnBiD8bHmzTZdXDhLxP1a3DnzNKZCVjqR39v9MY7dDV9FTfiM",
  "key7": "28WaDzB7TmLHhBoA5Lk74bEwcfWn5zzEHuqoHYhoytQaagzGAHc6S9koZQ3ksind13Sq1frVNj9MhfS9Gq7Tbnzo",
  "key8": "4fbNCGRB3f6F4wgQhr2egJPjQnfcGvJThR512xhkAbfeCZJfpd6SeAx4q8iquQNgpRJcycbjovgVdUT4HKBvEf5E",
  "key9": "3XwuPHNPtzngTS4zhfJLaRCjcLMVLpjfM1ysa3tPetgwHLFkwCBrt1b9CX5B1LexAs1SRgnzsg6G9836QFH5Z5i6",
  "key10": "2EgPKnasNMmuQvmNt9SMXo4QFPpDwqiZhEYrnmcreRAUmhJCjbBmWtUvypQgT2QhvNp2taWUis7R9APJb9tEfKtC",
  "key11": "3QAz6QZPvF94sTsbQbdNux26ziJdontJt1n3hPoz9yYTgiyk3tPzojjB79W1uW7zUpcCpuaRZveoxbjriBshpAHy",
  "key12": "5c9XeM7Xs4qQ2yYVNGit5GjnZi5qw2AQj9DQUFZCffRtZN8asJWAtRu38h7sQwVb7Sc8Jruob3bnzEDTQjBckAei",
  "key13": "4mrR57mKuuj9C9iQVn4TPy337wF8vU4dSUSK74niNyZBP84fiH5tvaxeBGWCn1cbg1dq71hdzExB2L6e8RYJfuPn",
  "key14": "28gNkCknF4BfwEjo7KijHMPNBaHXkW4e53zcHRVveSoJx6UsNMiibwr2rowKS46BQoLNBC8pBYT8AhkKuyef6uU1",
  "key15": "548G2Cwv6a8Xy8heNKDLYnY5cgKsHGZi5xvdB2uH5oBBJbGEcEUNbSaXXSBXL46tqmYiQAXRQPXsDmUHsKrpDbye",
  "key16": "4jgqUTTff3R2Kb3zGMBiia2kW9qyb8G8v3Tc2ReBHhcufcb5s3UcKcfA7yXsCSQ3YgaR4YNik5QcJiyTNb2a3Tn3",
  "key17": "5D8SPAMMW1WjFSUiDHxVaHuDFDs2C3eoxTu5XwD45M2mnLfWHqSFiBnYLL5SM9P8YFfUWAHYPRkhFhXjEBgxw27a",
  "key18": "VxP2x8dB4geQ2qhMKf7cNsqY5gvBmjYgVbWpTAQoHSe8bVPGpEy5xBE3tWwZ8qwRUX7jL9wgis7kjPYvSidNhQT",
  "key19": "51vh58uhzMeR7CJG2Q89KpygZwwSjX2ijnvWfYvxnHzGtKXrjcbbnCtgChu62y5R6jCMaM7JEsp1ozD63FnkS7C6",
  "key20": "2axGKhcRbtCj3ARjfQnuWUsEgYYaiKCnFphJM9HExzWZbpSeUcsgzb5oiM7sbshizvgyWAWtkVFTTZ8FW81JvkLN",
  "key21": "3RYvV8XbNRtRjZkYXFKj7Vu6vh3fhtRDGXHYP7hLVk3HNyfxRoaRpdBj7xQNmcZDfZorS4PXdezfq3wD6GjLhj6y",
  "key22": "UXaZAC7yGesYAJ75siPNr2515gnEJSDQkfBPqYUi8t5eYZXX3jDxWjy9pFHRUBFsxcDEdfYE359s55Ume9i6bS5",
  "key23": "2QfYqr8evPzKu6F9V2JttcZeK3maHGdhkvoctuNSezAchCaAvuDBszAeVSzi39pLv3PVkiFC3vThn9ZUpmx7qpNm",
  "key24": "3swpveGkhNoEK68eo3523qi9rmEiWJfrxkcfshW8iYRx37xBKrFXDc199YNVngavtRPoY8sFDAsa8dZbz7dkLdhL",
  "key25": "45d1BjRjwZCBDnXjuMRgUV8zapmidXHbn822sfZd82tL7zcvbaD8Wod1sjarX59KMB7KUc7LZwX1eX1mKaWkzPrQ",
  "key26": "5vD5iCEYgig1QQTnqFHx4DowRvrVgBp4SG4LNv4TW5izxA6saPi3qp6CDbJgD2uLtfpTXVbFev6ut3Hxh5h4ZBmM",
  "key27": "3yoCgaJfb7PrD8aTbAdG4ihxzCaFjXWkSEiuXbjKQVkS3djGYL7Fu5e6yBFLhoXcBJ4BuDZMtWhaWPB4d2xvTpFA",
  "key28": "4o43HSazcwKqaqvyTbcrS3j7aM66nfDxNA3a8ZvKj2HYd3FeFC7YmVkyUY6Nh6hQAnB8MY8u2qr78JHL8t5jdNgg",
  "key29": "4SfjiqJehCj97LRLbYzz3XhD5E37kMRi7zpiGXFMJXxf2G3LbM1Q7xmYDrG8B14FDi88HpZSXvSjp4YC8TTAUqNX",
  "key30": "529JGpZLjRQhxXiy6eTFjwUcJHsewSPMckXNgcfFrKfhqKtvkVtNgubuq5WrDSEt4EhmwRpdFHuKdhQHKjegYKoL"
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
