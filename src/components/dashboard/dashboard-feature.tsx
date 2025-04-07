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
    "48BnRkiVs5zVvg7kzSqembA7Bo38ifqbdFojVMcKaifJY6nNAqueHtAQ65qmEKwYAbaxE8cLUPUAzFetbkr1PqLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61BfoBBbhPiWfyumxpP5hQY4Xrj8o8whBu2jfVicdNGQ9yzw82SXUyg4RCu1442kmCsxiZdmzEyA9HG62WjnyRQj",
  "key1": "ciMm7SVwtyPyeZTqab2WaMhXVNFwBnQPviFmcU7Bw9AquMtmVxbA28WrV74McF3beMDp7imNUbfpZYtYiqxosGt",
  "key2": "3YmMGhMkhAMZ4yRuugeB7XS1WVftjRqSxyXaF5FnMhLrUneUV3iJTnWMqwre6f69BLCaiFwVi21mgteqyL6cFVEV",
  "key3": "3Bi19cKSJjP6qgQQZXLdRJpHsnpUqbujoXP4sAbM8nUcD8henpBC7QNnghpojSv3fypDCaVMTDDVpQFmkvv9SXuo",
  "key4": "67Pw7zhnTiivhd8n34EeSM1vHt7HcfvVnwKMGSiCb5CfEFFGcGWKFjWzWdnrtk7aWGpUoNBR5yuyfMsf3FrxTbud",
  "key5": "4NcJUK5UaPE1iBpazVTM6dCxohCYdxkiPUu4ZArm9y5weUmwAi5QpjjtJ1arMpXxSgJRJQjStDmu7gJw1rqjwVzS",
  "key6": "X3FHdRhvbRQtAzfyMFxExuerxy8fqjZByAMW499enUdq6HGf3MLB4b7oa7gphAtYdZmaSDoBfv244EbdysgxSDA",
  "key7": "5HmqtL2o8TozhHsTddFaY8mWJqWCHpRuhXVJ4j1PtbiYw4gJV8zEMNVLD8Bu5E7DzRTVYtMrbdj8SrfGwD7kmdcb",
  "key8": "cgDXdH7RkqQ98ne6giyax7R7ADQHe5sB1h71jhQS28meMEdPkw8xK38VRnd8k8nQxjQz7SMpx7ghR6WfPq9LUz2",
  "key9": "2Q4Vb9kdVQGp8cA1Vp1Vj2JjrWH3aupGaKEkQrdweHpFeJUNnF8rmtwsAuAEwcLonYHGLKTQ7UmpsueveGCN61s6",
  "key10": "XYMc4mijGHSv4Z7kCFDQyyronFRooHBNQ3oM9XwkYuT79ZCYjZVxZj9CYuKD9JLu6uaFKg17yrt9cQb54s2rESK",
  "key11": "5Q48PD7hL3AuXyL129xbGNDgLcsUyVi6Ue3fiWFcLShQqtyNVCj4YriWzZwJ7Mm3gUWR6QeW9HwaYemA7ZzwFnjf",
  "key12": "599zhoeuj4EUuRrzsCw15hVnj5YCWSWHv2kqafk2qqiKBfi2bdm45EQThQspX6AxrFFGFatxevZPaBR8x2GH1kAV",
  "key13": "5EVM3S1eXqk5fmopnKhs4SMo79T5DGuoJtwzy5qXDYxXRPkhJpjd7uV8x5feh45F3gvwDzkThz1ySMbMXGYRp3Ax",
  "key14": "2Uar4hXLpHZhi6qEVwEJS8E1Q1Yz9Q8VRRBbDuKJdgzbvJryYeUmWpptsTmwej5sytGkpXyG91UuRisxG6SM5JoN",
  "key15": "4N3MkWLfL3vikxTaSCKGpFxFMSwDQtLyku63xoJimu3fVdF5okht6Nsme8PzQKsYysMPBi6gCHAL4nZix6fAZvhr",
  "key16": "3VCU93ZfgwGRVPNY6L3Lz2Wc38udLXhchjqbVEfwJGboVNNZBCoZFnMfdwgkwzRLtNm7DinGp2T7pk1YhKsAcNqg",
  "key17": "3NH7rnyLAnMX8xwSTqnkT4R2mGyqspzTCPJuNsPaN9DvSscWSVPTxPHF4t2eJW7tieJ3L4AChUEStHYegULwKa1o",
  "key18": "5SmgnQ9v3t6MAAmnSbTibABBmcqruhQXUQQknnqSDdNvjbTEfLk92ZMCJMdWb1wxSJ28TEWD2uySM8LUegmBYWAS",
  "key19": "3qvr4agbv47AZ3oruCosNnQffzjPc3nuavNXRR3C4vSTm2RoKAfMjpC7gpmQqS7VfVktAj76Gd4A2sx9vqffLHbM",
  "key20": "2zCC4ZwaF95f5gj6c1nZNGNNZjhFJe1J6sbDU9DiXspbVkKzwNuxwhTVC9TPwCRDKRXStho9Wr6N4Eccb5ccYbR3",
  "key21": "3L4a6Ar7FiEBpcxtw8XYnnTwJZpqC1Thjs5fsTfQQ9ryBeo4X6Fh9DoMM8ULrWbosTki5cKYjcmUS8bZD3nnsBrB",
  "key22": "4AkFtAPdKfEkgdLE5DEqsA71B588r9uPPcyogW4ToamScHcxDY4VK4V2kWeSsNCEgr5mJmVsTiyvP1CsmMogqJsB",
  "key23": "2ZaSMgcsA6NczjYPmY3fSpNTBV9EzTfNJMzU8Hjo6jX4HbbLWhZcw4mVs2B5c47UX3awzGmAU9F39ESJ79hKCnCc",
  "key24": "DF8SiCPN3bLzDcxqf4CxHy72kGbLybZQ4V8yHrAFkQBVzsZpsgcT9Zkc1ARD7xxqZXrcUQ4FnMTJwsq2rWwc8P2"
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
