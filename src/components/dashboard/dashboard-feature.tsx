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
    "21RpERyoKpeYvR8LTMH6AtjKtLxwEsQ9SkDdhKVxvbZL9jb78Dte8YH3HkMUCatYCBwv4sRHJKQCRi3PANzpCSsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P34swCrS1TT3XFfqjrro3eRLuxE9yLjFxnDLWJiKnATqrrWhGZCysoxg4eg3ypMiagEAJpR8U6En3CsqtfQWzwp",
  "key1": "3G6JKDEgyTWP7UMVp2FFnnjJUYgT9S2gjbmDfpQ45zADkdvYjXXoc36Wz5pcPJawm1SDWzCFvEANeAAxTD6DWxfr",
  "key2": "3WGosqNTLPRgeZxEdnwBiy7J7r2ybWS8MQM24aRLJxrge73bSHHzZiixsYSTJkjS9V7r5fi24xPyyvA3WMd9K6Ez",
  "key3": "5sjEE15jmnG3uDEzae1B1qp4jSngsp7GZn12dAyxc6Vbwo1Qyf3XQ9F9vYTCqdcHujAzfe27apogo7tUTcGNLxYS",
  "key4": "5gniHz9hKNGF6kx1btFTJj6r22VLhLog3LyVPfdDoJe2ieqj3HJu6evv6EcNsBHyJDGinN8BpHtSpoxA7ANCX3dS",
  "key5": "Yj8cALKESPKJfiENetXSEyGNNyUf6iDpHcfjnkZJio772RDwhdGv5RXoxkwPYjzpnq2n1nkRpQpW22azdc2mMwv",
  "key6": "52qEVQNRQPHEyW1ipxHBnPfcytW9HzT9BxcwGJpqqjaZuHbhPjT3CTSucTLYWZXDnHVD1JFHcYszHbyAoBwTJyDo",
  "key7": "3T8LUuHxwSiBHqmJTQxohbD1skoUwXwA6fuskSsUdCThHVCssKr7zU5hCdY87Tc4UbfsvXVqVZQgVD688Ms4rkg3",
  "key8": "4afSUzBQqi5aLMYirFRjYDyMaxwGjEUp6p7nuyq1NdjKXDErCpgJsHF6nENPGV7TELRpBHwBMZdA5pTgmPxQFRTN",
  "key9": "fiH5GmQhfK1HTg6dFMm13hFRzjvAWMJkedz9yxYUxhGFcLxTr2a5FzJVQvW44KBiiEjVWJ2Rh4R1hJj4f77HY7R",
  "key10": "apDMN6wnd3A8VNZNo4VW3omafWnESXMXCyBao6LXe3WFvw47tH8mdHezvs8MJCkEGbDddZDqhcjQ5BD9AG6axRs",
  "key11": "3Fh8hkAzGN4erGMdQVktLppHBQXGXNKzsap34vqgmqvckaFrGvoXepRrtenvPGjUbwQX14xYUgxXFk5K6wQL47cE",
  "key12": "5E7k2NFyg8VRUygfhi4AzrdCbruVV1EbSNpxqijCmusyf4jyWyaYjWX7871CoQiHA7N5UYPbhrmuzSCH9pGRQEge",
  "key13": "2vajuf7fAbVY3yrEjjVjubSPmDWb1yNAum9PjEcVmr32RfmUpihkty6Sw3xeTTiLzfa9qZ2TsJNzA4ZkBieF4TQS",
  "key14": "4BYfhub4oH35V9pkZ1TcZgWnDbGcimfuhBSWN7uZCs61sAfEVXRdDDSghkK6Pwa8NaPGXzfZMyTnDw1AxVYXRJdD",
  "key15": "2RkyxkMuh584gB568inwrY43rCJj9dFDruRHfUx4z8YRqYthJAazZRnBysUqDq7tQ72zxRVxnxjxRXEcrWnvKeKw",
  "key16": "3GikjQvRtPc8erLhnZAAVtJXkeSSk3KTcTGxvcg2zMt6due2KAbtpN27KxPsHsHgPWpeNNEs6UWu1nEWNdpPBiWr",
  "key17": "4JSYWjdzE5EKkHUkJrmFwAFNEv6hV8DgpNCaxCDam1FM3B1iHQhp3FgXjzLoLW74fQTwjEzgfcvH4KMjB4t37FzC",
  "key18": "taB6qBYMrAvSJyGr5kU7a1ggZERfH6HVF3gTvxzL6fPmo9jxBJcbSBVDqwD4wLtTWvnpKBcMrLLMa5DcYsz6wuC",
  "key19": "3t3fAKaqiYACMWjQ48Q8mVjBTqYyzeny86nRNTr3VfyJLjMKAtutYfnQTnoJzf1rFP8b5ZC8dwiMKpHmnfV9S6wP",
  "key20": "5wDnupVC9ANSp9rJWFy3aGPZaDyx5c96DUXH8EkXcng9KiygvhZaiL9QRXxj2qiFYeCgwHP6BaYPCcqGmjjgoZns",
  "key21": "5ozpiBMiTsfoQYoaqjxEarTfQp7Kv2kD78jcXcxRjCrNsREoGKr4Cnpb9atU7jEJcvNVwBbFfKU3ZWFzwQh8B536",
  "key22": "4eEaCCR8ReSnEySMbZcpeT97TX1y6tsF5s93khzJWfpwLy2DfGSvDgu5nt2fqELGdxwFtqc3VL7SWyoGq8ivLkLj",
  "key23": "5bde4qbnW2B7s9NkciA5C1DgVc9gbWtEujSCYsu1U3PiwDHqAGBPU1v54DE9k8n6wGHL3LN119efK2n2GpHgSzjR",
  "key24": "P3UaTjFHDP5Xb5PA5364jtcnYjoukMMbDdAjMVpkGgW7gF2DCqrBXW82Dsf6etMCzvGwFjXghPaQ8YSGKZoKuX4",
  "key25": "2qAXAneGetjnuzpeSPhF5tGRmM3tMXeLCahqHcjzCrLBPqbfcHxgsytVNEAwbKUzrCWQSkTSJ74RHKvgCufWGozc",
  "key26": "626qCCyRVe8pmyYCG2cy2RVvCixeV25PEjh69PkdeH81dV3cerAepSMpXaT5AS4sSDiw4BkLnTzhFHnpnhYTXTHA"
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
