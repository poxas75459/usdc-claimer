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
    "5w4txJA9e2p3WbzVLYWFNidSW5cAJjJ8SeTpCZNCQM99kgkrS7pm3BxFwFWEHci2gzYg72kVP51t6TpdrD4BcHo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WaDxpK6h9gWjzQkT7ht9f5K8MQXRTocETZTm7muc1GqJGibpoYMg2FSJ9ayMUsbYrba3fWzh9uQ4QxozzkwWHGn",
  "key1": "672r7osKL1yK1AjBMdWpNpcWuvDV8w1Kq6TG9UdxUxSG3rUgCJR6jqdNKycojxuXFxzXzX7mkAwypH7HvxrwRo8N",
  "key2": "3d6KkYmhazE1azgLVJetSkSThYqxMKg5yiHmgDYQhTiWR6eputMkNQ1R8PGp4io3RqiaxvVf1uzPipbSXrimt9jk",
  "key3": "DW26DRHxkEoxBsLDAz6Y3EPL8LniEt3BQMMNfHYutnEEG94XBqauC8HW9P8B8iF4hPDQdQug2wb1SRwYLNbXR3n",
  "key4": "41A8TEz3M7dy5NKt5u7YjkQJ1ofRxtd274YtGeYcZEZmm9AEZnqqueAScRua5ijfoptg6NPApKZgmdjQetxzWH8t",
  "key5": "Uouysrz5eo6jGWL54b7Conjr3EJt9xGf5PjdKHuVkPJGpk5vKB2Tr8oq2bw3vNduCkp42BttBeKXt2NrCtYTwE3",
  "key6": "5m4cfacEFVgSjbdj39MGQbVJfNYX3SbMu8Unz1oEUJ7AUSkNqK35xd4HkjcKtGh3FY4x8HYrc7GMY8zTC9ZGFxbC",
  "key7": "2rDHareDNJWaNsxfvFSkePgsShwZQidbwGpiT9icXiE6S8SePz2cmgbrm2AsXHXULP7iTPhdsR9tx6v5sWt9SgoJ",
  "key8": "5YoxtzZQuUeK2bSL3vjCBZn7AhHqK3e9ps9499RsraZ6HgUC3cGucTMUD4oYfjSLc471pvZK3FMawENUuAxCRcrm",
  "key9": "2Mz79LK9tKxQ553v4raMykXjx7g34ZK8G1PU2bJGMAd33sYCmu55h1F9fMXKKaXeoRDsfnao1s1cUL2B9Et3AeLS",
  "key10": "5dFRKDHMWQHaZPcEiUyZzsuNYx4yEwMEqxLkvBubriBzPtvnA59biY6aCd3Kj9NKAx1hYZgmdxVww2xi8Q51praa",
  "key11": "22UfTTwBqKdREFtU47WyJjeWB1ao5x7fF8NDJkQxeAToDqCGLDf3E7t7nB3UWaooQfvMetTYCmFtWe6pyixNj8dy",
  "key12": "28xJZiCpv6J7pLZxD4YeGog6zCHR2zCo6S29eA76jbDjHDzgaVP7m5rHabKT5rKWcTkGCFbUpSar2ccfzrawSbpu",
  "key13": "5P4WFyqJa1Y5JVkFwxRoNqRAVW82xomQA1jmhGkieEUsYWXQr4af5tVrHc8Q7dhe9KP5ycChhaLaEYGaBaMmGfsb",
  "key14": "5ZdTLuLQdxCeYvjiuqoo8RSZoj6oqQmQik3XRGrWRjncZHZfTJZKaZNWPgqpSopGPUKBituY5CHtwpQBKB8KskUS",
  "key15": "5TW3z1ApMgoCuu9RsasjNDQuCHTTEc15F4rNbeM3zmg7QW8e7stUMxy8eyknPojA2s8UMcSQbEqLeeJEw9XFMKYT",
  "key16": "5TUkmfYPxQ2gtBMiCHszQrE9DVPPsrr1GWrfn6sRhq1BYJSkb4bjcNoT3f7e6c2NzqobFsRop3jJfxxsPP6zBkNJ",
  "key17": "5aBWtSkpZXkUqCDZXEHVMLGq6JbCsxXCgWpyP7zm2XqEC2TDk4GtLDChhYyMmynkdJoUgqvWeoFcbWcr8M8sfyA",
  "key18": "2KmXbJtm9Qg3axvK2j1FXcpmtF9NnJyKEKjyagmayae3oSVaPjmqZPy4xemQkckenFT6yR9ZCK7AyJzBn9sMnacE",
  "key19": "5jB61WRjenMT3dKQwTZbYVPGYRrJwYpWEcF86U1mWcVZkyVtGGUsnAGCinamV5r9pLSqaYbzEdQZqxDi1XRgULhc",
  "key20": "4MTKqfQqduHbTvUUh7qudY5DGXc3PZNdVF9iXm3USiJUpHagMV35aA9SwzdAGvXGEvjBBrra7adg5vmocc2U6Xb9",
  "key21": "5wwxX3TfPTLsQofes6PXY2LZnNL35ASZuR1T3z8erHAgBWbiwtpm8gFwfWVrYrnvZ5DQjAiNQMRCMvPzhbJQecfi",
  "key22": "4p2j7cno254QSRJSpEm6XUNmjVDzp1KK18sxwUJQarCgnuGVreXoqKk7oUQ9ugz2yZtBi4nr1n5CJPiPnef9gwsW",
  "key23": "5nrAFWVc911AwGmT3SVQhNU18nhK2zFizBfjWxPE8zDWKsC24mtzzN1PBt2kVbjmmABvN4Gy9eYwtqmdrocV1feh",
  "key24": "4L7tZuQoj7VxAMmAb84vdvStm4t8W9agTSZDNuTHoT3BQSgknLv1EPCWzrZnKm7qiGk4kxuuizkLBa8RJ41EyG5f",
  "key25": "5r4F5WQejXjD835r3XphGk9yL6piDEK4ymqYDT58xJ2oZDXL9sbBHEVactmCKKkXRJmMp2j4MuVhbPX9U3wbmjQr",
  "key26": "jRTJ3maxSzS2FnyxBpVHkJt5sAZvoMwBGY9Gbv1AeXFT2iNuuiECY4bVuprUUGFdvUWE5SPL6jFhCLRfSwSEc3j"
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
