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
    "1KNoU3c8r86rQGGmsrYJgWutfoJLGNfogjt43yRHT9uKGfAbduM84G5Zfnadxd4fc1JKQFxYw72CRiyd5Sd4dhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5soWPxLPDvnnsgNNuDstckq1Aw5aLGJwbD7nbYAGYuG8NhexZa7t3Hx7xu3pf3SmDaCZ2E2NHexNZndsjzjfuVXd",
  "key1": "2N2CSmGN6A1wpoJNkodNfML559PhmXNdxwEfZmXHE5bLZnhFFWA6FnWkSmkorGyvfjAwTj3rpmRg4AME1F8k5vXj",
  "key2": "3TEnciuZsBXigwWPFAxUN3tf8WvDkNkS4gWVQ9DggNEChym8phdBdSAedbR67JQKfzZmR2Eu1oa6NAdewQ97cZPe",
  "key3": "61zYAkjZ29v14UaHuE7oTUstQcHXEZDpt4xgcKwrXCU3c8TMnZEACb9XGWgVQsWrvfGnzfvhsa5H2TUkynJPdD3n",
  "key4": "5QDFcdCAnuV4ehPbUpNE2S2jRHo8WL4WzfmWcEDno7SQ6aahiBaSGgtwDW8jyMq4XnzNvcZ7ed1DQSbiJ6dfjhni",
  "key5": "2omkz7ATvNTSZPZ4UXb1z6wm8vRJsymFJo5VDieJ2ipGxyfAAunEbShNypQiFeXr8LdbXdNtiGHziWAHn9KnFWjc",
  "key6": "27RhRbBximUEVEPAm8RcsNiwuG7RGQuABQYHDQPBb9dkQbb8ZxKgxnXxgaXgShy8kdSQ4CQxBd6nd1v3Dq1FcjiG",
  "key7": "3TFibFonzZdJXhsfuTWoJ36FiP5q6h2TTis2cGKr64MyG4zVMiaAaagW2DXirnAKaX8F12rb7bvwvAngnPyHg8w4",
  "key8": "5fAxbivTSghxFoLsMZ9Djdwm95gKs3saKuummdMvgttbhGrZ19mD9QwkscrCmWQFxQNZvL2wemNK5pSU2d94EcnX",
  "key9": "43dG3rwRg1SmiL4guQpfbY3sKVUC3Yu6KzDE7hM6ssxiQmT9c5bHqJ57LJeb73wURhFPjcX5Hyk91rBUvtqesbGH",
  "key10": "3bquAepvUxH2mQygg1rG4m5y4fjRodgAHatJG5p9We5tzCKAbfFG91hX1yz5sVELezQ5QgG5RpxkJHSyeXPdLwEA",
  "key11": "jGVScbRGUFKiT9WBi3X7x5nNSX3zzkMg9y6Kzcn9h6kZN86yPwKTM7sFW7KHKqXdFv8behGth74S3WzxyDTxbGP",
  "key12": "3zSVvMNaeYDzDSoy9aerXzA71mpkHn2gwZYpeQrbsG1HnCL6sL3PNGvXbKKuGQncLDvC6JAmjETDRNGGkNvay4MR",
  "key13": "61iuydUewouiDxMgS1qYyCHmfc3gAUxWjXJRLUfjSXp51P9Rh58SCL27oGYAVVVj8qXaAm9DkGJHLHoNHfDg3iwW",
  "key14": "2FV6dQJV8kVFEBVJSP2iNmRT5J2CtEaHNviaYixgz4eT1sqqXcCMhJ4yiFy48CskCz3F35t7WsnKixYz1ok9CuZf",
  "key15": "22WKDtHedCCyscv7gtR91bZsvuxuZHaavsNFkzqnsRBWHVWgsY2jn3VvgwJvUDksVFdKpQ3ZoZtGb6mEYqnkHcfQ",
  "key16": "3Rja1kU87RJWghC9iaYjhtHghCsoz8ZQm9VYJrxjLxwjavk8kja6sP3j2oeavRngMdPGSi4ets3RYrG847ezLqyE",
  "key17": "DvJ2G6K3X1ceFjDKSQksCQpcuAg6pMzyL9xnKZan6L4ZzgNWFdw3RYR4oPZxJw9XBo7ede3RKREpDF5FV3817ht",
  "key18": "3eH6ntix3Wi8fQYBuCtwBawWMq2xUZYmg8LohTNXEycw1EBo3xmsfEgdjYw6TbcRkrfPuXp7Ym7f3vEga7rWj9ik",
  "key19": "4y28SikYaagJfGBoamRhZ3tdbaDov5Wdy4WzoLy1FqhwHqNUo3GZwHY6AVAGV7QUqdaZY58ishHoP5i5Qtq3UBgt",
  "key20": "3k5yaqxp7RgshJnfkXUY9ovRPVcfktNYwixuw78aRME92qHYLjuQtgKgVs5ZcVGAHcHT1DPvHPhfpnWwHhjJ6LBb",
  "key21": "4DA6Wcm6qfrkHVWGRAVkiMrLprDPhpSdQUFGKqFGpF4C6Tf68K2FHgFhvFwG4GKx12yhfPiwdbpY1KxUCEb3UVYF",
  "key22": "3Ui1vsNnY8B6rpy8Txh3jT4h8XQAT3kPF6gbuFDuRcUPR8e76waW4YvfaFbtXm8EMFkQKw2cC8154jh8G1kC6vcX",
  "key23": "3Gi7j7oxmUdeZ2qMGgfoExxA6HmMRxTxkC5g1REteRcfyEqypoB16xrauwMC2Svn1tMmBw5W1gi5YWmRJQjM9ig1",
  "key24": "5RUzp2k6bJ1bQxkzcv5zcULpzMEHMcboem2d5pZeYWCpjvSyEVMj8brsEGQLZcucYfWAZyr5pkQaHHAhcWfFmPMq",
  "key25": "5L7XLMGQ3UccUG9EV2PV3crqreCuUJddU47s3Fsxuq2o92JjBt7A6jfB6t43HNiq6XrT5CSwKePaLN8cspenPkmn",
  "key26": "4EVcWR8mbcKyYAoU4awKfv98G25GyQb77BdbTfv6iWPYb646TUALs9C9iqj5weEVWx1uF7dk2tbFpUp5aod87Bqv"
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
