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
    "5j4G7npFg57G1JGJCQeutD76sVVGdRpLhLwzh2qeGvRqmd3QyxBrWgbr4aTSX8G856bFAAaFojkkzth3x2k1fMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHw2P5K5HgQqSLQz3qdCxPKFXQ722ed676P76FHaneepBW2L5uG3yqdeVTYTRRGufeDbKv9pWoQkfedKEtJdfCy",
  "key1": "5St2MV3mKPVnrUkFj1cbLVzmRY2ddAGpVVenbY233b4RnpzntUV4jHiY9JUi4s4SS2Dmz7yTnB7H1b2e1cb2S7CG",
  "key2": "2bcXN2wN5hZpfBqun4WN8GHXyuYiQ1UiBuioUDRyhgD5wFZYcyRjdcwYv4JcFJurdMAEV8YtjkhySg75K2bpNaFW",
  "key3": "4ajLKj5yBfAJEECUuAzBF2tjMqzfcUrcmEAh5gW1CkptKG17vsTmdXxJvEgpX78xPVHFi1aXMGsLfLLGhSimNDei",
  "key4": "2KBcNtsQ8ztmb2oioR8vueNETz4K7TKRmt6mKxXpUGc3iWUzsyLveDLrMG3YRZvyo9XgSWxmbR4obSe8i55VDxsF",
  "key5": "4ZZcWiFVSkC4crqYrfRFmEv9JyC1nGgXy6iPkop195spMFnocqQomxj47eDNWXWsac5J499aVw1r3kN99nuVJHWd",
  "key6": "2fZFCuab6E87GbYAzVhpvCTsTPMALXnQ9bkikEa23Nks51VwLifDBwwhm7Bt6heDG5fj88od5UxqqRKngN4G4oEH",
  "key7": "5WzdtwZH7MbK2Vj81a7LLbUNmPyt7ga7Fxy7fosCvRFJnnqLtZ11QQspcDQfBmQdtbJGS2YELMUqjncyFV8VbKWQ",
  "key8": "4dpPjF5URBiLJ9pxTKQ4JkPq1cEMeBkYavZMg1iwJPd2GdqGw7w6A6TvrCNRRB7Y9RBPbYkxFqLpTNrnchCTaFnk",
  "key9": "4nigqD9ytuYndweE8rKZCUAi3aJ4VRtv2crwBvNxJg4BQUe7gnZFgxpW6CFAk8KZxqx7Gae32Xqywpk9LCAsRyAX",
  "key10": "3WEoitnekk1YEBBGv97zQHFGs5dFndPbrXCBw2TapCejxAGoeTWgwWh1wad9K1wxVJsqHBHZjaKkR41wypfu2zut",
  "key11": "3PtL8LyR5r6E74R19xRYtZv8eDsKp9Zr8TSWnxS6FM9Apm8aNcW3Uotj1AvLaoWam5dMm9F3P2nbvRq9HNZndKJZ",
  "key12": "66kthmPbQhYkBPQ2YFFb3qLTDMhMDQR6k7XBpL8VEXJGLj6e78tinhwPtN6vsmFwCpFxKNMvjenQMd8Kq91NcAvS",
  "key13": "45cUPGREG25Ubnuu77xsqSWQAXhAS1zb73PMR3xbmXQrnM9dm26LYHQjHU4ReirS1u5rKSz9QqDVKtdZuJ4evQkm",
  "key14": "5f5RkyyTpcZpRZDTwJ9coeEMBXX8SxaC2M1HqYHdZic5pbd1q8cggvPBmZvJsoVFwKXt9USaz7K5nYySY1tXqMPr",
  "key15": "5Tsmv4P3FVndxLxvhum9SuntkFq1K4S68tAwkgsCQcQgFk5uYibRHvEfLiwTrmXtGLuvoEkAo2jczjjmYwbMxJsB",
  "key16": "4kstbBM7oasNAj2e1ZghrYJcKf9RdvJ3j5h4gHA4sSBcQeg5U63psjogUzJtw4KQ3ZQjeKUoZsKLR3ZqkaSh8EtR",
  "key17": "3HovV5bgB2KSPEFojwPqKcMemVrqpp6iR6qZw7b3mWNmoyn5h38Cua22EMe3qGQxuPEfgDqft2uWoFv7ojbSzJM8",
  "key18": "2AU4tZiVWQcUg2hS1oa2cFkmscVXVrY58PGN544bLj5ymDzb6i9e6VkwFdGPwzQSzaYNHBM5swr48xzYVUDvKuzX",
  "key19": "55gpbiS3nGWz9H4oPiAjdZvUNVj4T6oux8kVqwR1H8z2BmGRj1LH5TvjYCAF4h1nK5gYTBbQDLf6EuMYg3cuQCqG",
  "key20": "2ULeKfP3CmDRn93yS7pYDy18BXxEALJXKsEyGbqhvjDL8Jiy82LtdxkVFXsNipiUAaUsadQgNdEpZwaSQq95tPBX",
  "key21": "64dXSUfRWfH64P3pK7mZxAnAB6BGyDz89canFfVq2o6ufQDjLsmew8WpwcAmvpJjNwX3StrL5j6qPbRSKJ7RCixU",
  "key22": "2dqDJCD8Lnp75eKjDKZyMp2oUYWGj9YcNkHg9kbDbbuQ7YHdvTUzu4vtU4m7VXWCyZe5P43kJz9Pr2Bx8VPYg683",
  "key23": "2NhUnA9Z1xmjxfqT5JVYswMfbC2xfZkq8VyWB46L9GgHWnoHTwNpgoQ4mtVfB57fbvbceXRfLUeoAWKNkGnKgy43",
  "key24": "2ZnTDdJweeiJDPBRzZ4VU1CdXzEtsNrBcp5MEi6BVoWG1F4AZPZsMGDXBNJXJGhyFvdUZgFv2TZud7G2zqnDE4Uk",
  "key25": "S75u8mt86ij3XozebdPMgkSrDE86mGbctRq4b3D6SRYGGxnsBY8QkzvSmGAGcGG2CKajghc59jVEk1nTLCgYJL1",
  "key26": "3ANZy1Qg3DkZv5umgmozEa3zDR9FDCWWUKmnjb1a1LMxskef6D8CUf4ZDgt4FrSBnh3be2usvBMgAZ24kC5iS75B"
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
