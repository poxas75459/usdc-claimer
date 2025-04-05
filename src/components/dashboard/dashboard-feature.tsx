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
    "2bawR5bMME4wi9NqJYpMZzSr7XkyeZzbEPmQTkm5FhStjweAAJb91tXeRAFLiXzFoVSJ5SVWbs9nSo5eMG5jNQWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDyhKNKHt5hReKDWucNKQYX9ftbKQYVaGG7JCJWbKf1B71XCE1FsBUnfpBykwtDn2LwWEZP3nJX3DV8iGdiv3MG",
  "key1": "Qt3Dnt7W7SN2VrywnzWZ5tQLCw3MUYsWvDq7vnitiZXJvMKGkVXvvCQ7WoguMD8vkZtMefBdFbiTXb6nrM5ntvC",
  "key2": "EJmkoenhb5H8xdnmWFkHxrXoqa9isrt6hQMdwxynVLfoadW9DoV8MkQyNSTm37VAhnPCygnVp9q7pgb8xuxKQ73",
  "key3": "4sr4KLroPJ3FDzqEqFc3HjtnvvtxDaKYLnvaLtp53QfqmWbzaZiBi5Bh1xEjeqqjAeweeCpQK4HomAwcSFXz1YTg",
  "key4": "4QxnxpZmERojC1C7ecx18tyWvY4iA9tkZxMYuv4vnss26jrH4Qzi2cNJiyGeejcqzppdqeoEZDfZQKubzJSfYWVR",
  "key5": "5FA2xe7XVGv7LkBjgzUSyWP8grr4S5c6CaNLuYePcbYopXTdnZ1wvpugeqD6m1MvmPFiS2uoB4u3HGgR1gokFhHT",
  "key6": "L7CGFDqaF1uGUsKWFBPYXBU6eKunCd2bnv4VWH5Bh8dSsE2FPkBiDYQ7ddbtnJWrx2r4AguqANb5tu9UVXFG38z",
  "key7": "5iHmpsXpbUXToapvyNFMXRqMiLoo1ADGbHD8EcdbAmd5VkEHrGAw6w41PEYcdsfkcx4qhiJBeogLbNw5jWChuYxK",
  "key8": "4v2FSmkfWY9RnLUxGK9BGpTuUa69VLhr8uh2GaP6cjWqAH3DgHmH4hcd6o7w71mpSwxhMygodyP9UychcbZ9YKv4",
  "key9": "4XeQhcZZhiUxEjkUmCkqz3tASkvjb4cZxHBfQKua9scXRHMbr2JDRB7RmiaykswQK4nCJWZZskEQH96iE5ax8BYm",
  "key10": "3ag8RGUqv6hw5hWUerfHbZPLcS5QYNQfpUXEbrRJtaZiosw6u4mrfNpAs9W3chnhXreEYZDktgLH3wfcikWe1ft9",
  "key11": "2thkd5qKXSyzq2WMxbjArM2WN8QivFwf9uiJGj5oLF3siNVVvKW5Xnw9LL7tbU1kgCjtrLDWfkuYqLN1r8BHq7Ph",
  "key12": "4zXtykma758EjRqovPEi6oRmxQnnYFD1gmCRGn5JkMN2doNktaYatpi545jTuoWCR2fJ1U9MmW3NMoHWzwXCQhEe",
  "key13": "5yA17LhMgkAfXZDRBw8t4zPAHFfJUdEdUqc2u5WT6R6smeZCQuqbAzK9D99Y1kTgE1ApnMYo6sJPkJrsrjigjS3V",
  "key14": "4vCsRMcHMVWHn9WE1sFs49Wr28jcEvKt2NTo9TqKacfoG6fvdTbvoM3PZEBfdBvUVX5kqDDJTyUqQeyWywxKUzUH",
  "key15": "2m3aZyp3YH7s8s3Sb4EypWmmG2smxQRpsiZypK96SmRZ4BwBwEfDCfvxy6tn4tgTHmCvLQg9mXrMJy1oaCeePuD",
  "key16": "6SnEhJ669bihV1QHozEPizB49dh698Nr9DyhDBuMacE8oxTNvqK4Agc6XkzKWF5cXjkhgJT5wo11B8P7DdfB776",
  "key17": "4aVj2zUnV5g3nq7K3fgwqF2C8wG4u3GadsoATobNRGNag8gBe2VJJmnp9SQ5cJSJYzyfFjDXDZ92kYurZUTvGwet",
  "key18": "fDHYPbe1Ynu2R6KvRUQwew3B7iq9eZzJHarVLyGy6rrvcZfa6J6kKPCxoSuAMiqRRGGsNHa3xK84rAi5jEWDztx",
  "key19": "2ihr6r98ijsm7CfaWkX3FhrxZiAzpwejoMD2ozRk1rDNTUZVepjuqVPknXtNG7anwdowJVfkKT9GDka42A1gsBAf",
  "key20": "MooZU1fUq8FiWXNSwqrf7XgZkPt9XpMQAoEpt7gcfCWH56WNRMcPeyy2LVifiynQxgUmTwxJpqdYABcf31mRXNa",
  "key21": "675NHbcdEMz7Scss2AeV7t9akDMV1z7ULXdBEvebeG7mAsYBnKcXT82UB8eCEavnCsV5zaB3QqpksTzagdNAG5XS",
  "key22": "5o6D3rvzHpQJ7HuXv57PVyby9qc8Rv4DNqHTbdZJF64Dp2YkGrjLQttHEcC1CJpeHjnrf6jYDc3VZE1zpY2LzeiG",
  "key23": "3TzJJ7LJ64aq2uPr6sDt47J9YMp7wNUiLLU32dTHqVjsZ7rDFoV12gE2NLeU7VeqNJS82rEvcnmJoveic4n6fdcr",
  "key24": "4rRmP7PUPQ4FvQm6zn4CZ4MXRnfWu4B9VKSt9jKH4y3HM66ceCkvnq6y2cWjbgA6z6upZEW3k547BG5xdsZSXtG4",
  "key25": "4UtNp8ZHeiNgDV3Hvp842ZepPxHbvLuFuVGHens3gZNqVFMnW3XFefbEnhL2WBgzMFKTwsPE6AnXCmX8RiV9ht3w",
  "key26": "51Ht3pKmo9bYxD4a8NTfgWqGuurLKDKUzRZcW1G92GtEjLhRwRh5Ew8oA6ENVBThMXBpG6atiUFrFMqJMfByYMSc",
  "key27": "5eYMPv1uLMLMaf1miZmMTxM3QL8DdigoDpKBvWXRtZ4VXEVcnBTXf8fbnbmoDybBML9hv3cAta9DLE2SSRLcbw4E",
  "key28": "goXbBN2UQuMeabzh66H7tLrbt1dodv3Fm1yDH5pyHfnBex7P83EFKfMAZXD8vhXw3eCS1bAigfprji5BAdHBU9M"
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
