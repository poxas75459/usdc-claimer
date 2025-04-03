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
    "4PjMx9pyFJD7a449jud4S3zFXNQBNFDie8fNynskeEwtyHezSBVWwJd7ywEWzjETtEubnFAVKBD8d7Rpr6sp6pYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZpBwp6rbqtZ9oscr6JtwWRSfQqDRX73fcCWfEBLw85zT9TNuBvrK7HBi9rDZfNssvwijkNkzd6KKFDYd2raZy8T",
  "key1": "3dXkkupSjDehCGo6ffabGbfd7QKDeVvVTcaPHAiFKsaNwmXPMJ6FwrkoHVVeSKxji1tvmvZxTTdLfs6GAV3kUD2C",
  "key2": "3evHsdJK4JHBEMPBHKkyYa8kyenWzgL5RA8z2MYdfRpXe1K5qHMJvFWBTt4ws7YZ6GoA2R4iFA3iyNzPXdvNPTNG",
  "key3": "4yrEZuQ1NvuS3L7pJFjehwGLETJb43XozdB1hkNR6Avke11XBmApfzbESFjxHuR3ae8FAWJKZz3zxDtfZNnsqPjo",
  "key4": "427haiwh4K837cAFoaLLBht6xqMrm8mukv1Hsot8zY38a7gNYxW6SU37X7xhBKhepcd2jHTbW9MHUcemooCMai3h",
  "key5": "33CVhYNtG83ZHs1tXjqrSYZwupSASoWmsyvsKZqzzZpB4Zy3xjScvTi1TX3svT9FY341dceNiT8dGToMuuDFt4XN",
  "key6": "5xkoLe9M2JgNRw1po953vH2JH87Zh3d6FQzLDnUzMZc2hXBJ3CuVYLhBaUc5rNEGxuotdkHjeWM8dNLboK8tjxfe",
  "key7": "5uyfvRMfvqGS1QpbRqvyvM2yj9qF9CCejn2zHmAmuUVdRRq112R6RhhKLRRvnXzC1zDGMWjmZVRzQt5vaBzz193Q",
  "key8": "4ANmQYmXushAo96PCxDdvLdjFGiAAiFtM8EeNJ8t5R2txUTUHihqZ85waaEmGQzxGyxgELE5xkmh7XtjSoLeCPK7",
  "key9": "34Gm9k72FXhv2e25acB8EafVzgn6FKPShZJwHoaM9PNdsnox7NxULsiuyNmnuZoMQ8jk84x1MhnDjpZmBCr2QNjt",
  "key10": "45g5XxHZpHXi5aBiVK26xbraG8kMYeXJusQZraNniYWKLNuGdbmAHzSh7fhHTxgeEc3fxYJmSPDo38HuLJQd3snn",
  "key11": "3uxBjoPdxjyS1LVD32NR29ZrnRPVvGXh94dFoeKZvRL6S2EoBgYf2DHUipUCBc1H8fWBts3mcEY2eD4ez6msy84D",
  "key12": "3VBbF3Dj7YTo3khgicAQvyEw78aomLpHDzjQTW8yw48ez1Uo1SUeNLThQenuqCSFNBrwyvfChffQKXMJDXStiZcE",
  "key13": "3x372ktf2yXEGSxy7GotW3wrLGCFX8vYkDymbYiS48AiMGjwWVYW84MjJxXDQLvkWxyGZQEdczTetexRm8UkY6tN",
  "key14": "3UZFMcKvzv5aRkz8c48smBvFCg7kXvoxzWF3jNo2qPnE7ybuoMsNtq46CsnCJ4zmMt6mKPxXKgF7xvrkKx6jV7Jo",
  "key15": "4rinh3EAdQbGSw8555qTsuu6omTxe1FGbLB344dqaTYGorV58EA6qKAGyYdNXXgdAt9DMnowSYVMQpdHnZ8VaZka",
  "key16": "i9vYpaPvaKVWEiCVutPdQMtS38V9y3RoXEa6ZcfJhGaaxmeNJbKsxXVRSWDXZBhFZQGBK8WKJjU6s9rAzDKZahz",
  "key17": "5baXb8vc79onZPZNcJzfNHXjf93WULeSR1KbiXG1RCHprFqZ5i8TF5ZhE4b3rFsypTGsR2AYGubbAub1YDi926J",
  "key18": "2wPyv5v4jNJyDDSmEMtHb798LvnGumnRbwxsqV3Lt2Su9wdTxn8SEVsmDLHmTJTXvC85a3bM8zsGHMxpqXTkaee5",
  "key19": "3tHb8kybtBuKYS1EL5VgYmGqL27NrEDo18aUQXZE2n3MM2CH5GCtwWWkQATEC2juXqGEnk5gkNcWQACZe5XczGYs",
  "key20": "3erYF3rcMrJWfTopZ6mzAEosDeBeRTkNr65kq8K8bS3TREQVCbfrpBN2CxAyJvJHQjWw5jejG3tLveT9YMjwyj1S",
  "key21": "4QPvir1YoPBZ5HRP9vRTYpmEbmPTkwkUpWmyiGSkue4QiTVpyz7mtpXhH2wefyNJvtjvcTpEC4D3ziQbzwn23JnM",
  "key22": "fwTN2JCrSapEkS9WJCW7YxEQPRLCHmF7SZ6zVqHqpjXn1Uk6JDs7KXApPUD14NVJyXTaSkNFpoT72orh7bUty5v",
  "key23": "B6U54kysZxRhNFhrYFPp8i9SYcDiTWZuHJTtWbB5RwutW5LHDjvbeJ7GN1amkKH6keEdVDYzL2i3hFat1NFaFKT",
  "key24": "4R7oicwFh1ksKdHp9DCcvM8NNBFCvEoSThA3oRML4ywgcH9pwwtLH2pq3PGTzvNQJr6MjjTvy9ZHkNZjPnPj4aeR"
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
