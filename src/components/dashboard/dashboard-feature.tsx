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
    "4SbC3jG7cLm16EMrLwCW5VESWDSSPaUHdbL6ECBvTpXW8tekr9B3FF3DF2v8jJyy5N8vzhHxrdm5osXab7SUAea8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R1ZCvnYfemZDykYKfDGr7ejx6cgSo1uTgHr4Xz97hobiD1CFaeKjWSCZtU1HMwuG8bh4KeXG8kvWVun111mdPLX",
  "key1": "3Jt19BrMKKzFkRx1yg4n3doGdrYVUa8bkDytUMT61d5nVsq6Pa3cjPNtQ5h4YGcUDTTAiAYonqSwc6ec3xwjF9Zw",
  "key2": "5PHmE5z8HSSd9jr6ezb5g3hgb54pT6acos59ZTWsvbkZDdy6UDnjpebkqyBPwQ14GaKcj3nTkVPBCjEfyakjgLWV",
  "key3": "4HnG4JhorzbKnXQ1x5HXfvYkjsVX36wZAfHrpgwbNkEeZi5s36nVaEuxoxUTX37B53cQrAGN2x8M7VwGwPfuy6ox",
  "key4": "4f2wsDqWsmS7hym81dghYJNvSjLodqNHze4bagCudDiAPwHt8Z33wT1AJHMPk7riSfSnKA6WkLcArtazfZDBKea5",
  "key5": "3SJQn97FqKbvBs81MmEvmsaHHZB5ERdnxPvqrea3gWTiN3WATPyCZ5E19viDZzP3GxepQ5jbDDFhhMmL83vHoY3w",
  "key6": "41qP1GJw4kRvCmc372JpaM93Ho5rbufghAwXoaS8BVRbEwJzWKPn5VEACVwLPeEfuhUK8jeHyLneoJwN3YVPdGbV",
  "key7": "22HmDP9GjxKCPgtYgXZ973ZoxS99KyzSTUtkw1AR1pC6PvFRtbCiYDb3s4Pd4wS7cuaUXg51Y2XviH4N8RzxGkcc",
  "key8": "41SDxehdw16c7JxRELDusRwiVrJQMoXAtyQcewwqzipp84soBTCvqEwGXV4U6TDfZu45vbs5wGq2jtfH9b9idUbn",
  "key9": "2hYdWPVfpVzp1YdYUcqfXhw3dLsdpQAMrvm6b8oy5L9vA2JUC8sPwWw33rBujfVEaXBZFiKjox5QbKo16AMVoe4M",
  "key10": "4rwL84Ux8T9qoxYmdynqfTBCdL7v3HqTZkASMubpDHPwZsTHM6inabSujDGnm722HotYRKMJ4sVSynYc2wwsocXz",
  "key11": "LjHFbMzVq5hXt9tUMsGTPZCDykJynSMWVb4Yz1o9VV8zbqc8NWBseYHddGmXNJn2Xaywj87AvwedjE3vK6Zgp5c",
  "key12": "7tCqy3NnFzCg9sdUabsvvWVMUcqhcPa61tGjZJqWhsrqepppZWLXk16AcBPxu7bJxazRxwxdfUGKFbXi25B6WxF",
  "key13": "5hzETkYoh77sZWeozeTUUaA1sUCj5kyVaAuDaS6JtdZkHnKiVcVE3Wv9bFrPUGAYdZp161HUKnmtvbSyV5wRVvDM",
  "key14": "264eW2bVTkhtwGnBsnGvt848Hq9yyTFKvFcZubqqri8ZZz74zusiznjF3FBviewKMdsQtg9B5D3C7Wq8snT34M6g",
  "key15": "4f4S5soi93B941WimdkPEth7mNUjMb82ss5Vgt7uWDMijUW8ZmecBZDrzxtGNVBDSBb549NYuqARUwaCWkUB4XFf",
  "key16": "3dipxWm72WYMv1264FAPoeLkg1c2ATte7YVuMMF4jZuxufKSWRDC2ByeLTK2CCmcYgeezhvEkU28eZM5dMUB7HE8",
  "key17": "3ecsJMsNxHAt7FCK32NQVwSoiTLqoKxbP7CgzXzcNS7pvpNoqcKWHRGcyDZRZGrT3hV8jGUzik85CSKyq88TQp2H",
  "key18": "4hvumzSccgJ7TcUYvYs1p8Td8WocXeEJPRsqzzNu64Zw7dV78KXHapZjgEamnfYaD1xNscxd65jqF7Z2thx6sdj7",
  "key19": "3wohb6qwQad25gF4NpC6zjztdojVVcM5pphynXArNg4DTRSt8HzaBzvonnvKtMSwZ4bJYgmwZCzjcyKjV8nESb2A",
  "key20": "4yHyvJWgaMYAszVEQspnUg5T9H6cQ4KnZUmv7KSAwCzBGeL23LezYWXyMYNxos7MyDafEgtsWdBdyH4hnV7T4Mna",
  "key21": "5tewyaXCyqjQDUPPKafP5hXwwmNy967TKL6FX1DRkf1J4tPwEuaAXNpCXqKev2gQb3JjPu26DftvHBKeJ2PMVGQ8",
  "key22": "o9zE1hDgbMqzee4UKwb3g4DeCVp9ndVbvvnaRZMUb8kTo4g9ek7gto6X9qi2M3hQiS4iyVYa4EhNoYaU7uYwuvB",
  "key23": "2YE3Lc1pAYKukmB6V1VJbCpYHynk6d8yiCuxGAnMG3juYd95y47KNBbwQPmU17ZV9JbAzQZTxpfjPupmMS8QygM2",
  "key24": "4kQtG3fSUkqrb4Uap1969gAsLdXLQsGhpuM67Nrutgo68TugeDbp3HK9ZurdrUbEbmhHrad9njLjTrf8jDBHmmTg",
  "key25": "5aE47WDBsx2uQGtFgXJCzn5Q6GJbWPD922apmXowJtE5uPN8mzrVT66ydQ4Nr9hLcffx9BA3XfTJVdcgcbkM6btL",
  "key26": "5KFr9apxC3KFkQvMXuXx7WaPru8EaGxwkWwk2FBf5MF8qY5hs174i3Zv27XJzgy2gx1npatuQ1nAERNDUz1VvNpD",
  "key27": "2VyCw3fS79XvdB9FJgMzBKiNywkaCKyZ7xJfra5n2dNDkYo9QxKaaepBj2fL14uGjKefRFqj58wB2VJyExHot2ar"
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
