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
    "29f4tfA9i297mqnNY3TNDA1BQiwS6TLVQ83itWFzPVZkCQSJ5yRk3n48GSUHQPCgBvbMqGysM4Et3XXTAqEYG8g8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DA4zwNctqGKiysnagob5B3gjKWL4Px8dscQCVs3XsQBvRN5xAVUAbeCBeERvP33kTL2HTWqySpFjageJX5xDsZK",
  "key1": "4jPBUowigBxErQS3Q9e4wfBZkf91wNq6oJXcV3GdkzAD1pf4MhMy7DFcSsgHLMd8SmnDAN3nUY467CZ5FxHums2z",
  "key2": "35ctjkNBayeUvH1g7pB9SWYLnVTBnmSJjM1hYRYNvv4mSEG5UxbeXt2YJPfLk9XDpjBSf1odsmofSupFnCnZQ4De",
  "key3": "39CLbe7BdTLsDZ7yCK2gBenr1vZLuLXbFCUC7Qw7g7Lsnd5yY6EQ1pVMA94dLfEoUyy73JkjkDVyLUEMkYCMhURy",
  "key4": "5WrQo8sn47e7G9mueFvCqsB1zyCCXA7fUjMgioZuJYttGjnoogesUzNRDoQ59cAVWPhfCQFUBwfuE51F2TtK4xm9",
  "key5": "tZVbop6GdpxLWs22wrPKoEQGSNj2XhFYPDmfXaJmJ1zN7niTww6K8HLizTpnysHxkB2xa2v94p1E2Dq25XFDT4r",
  "key6": "5qHq7rDCUjeWddsTS2R2Ca2ksvR638pkLD1YnA9BE9PKxzQKTC8jhGFX1iP7JjSvi421y2DKW8SEWASrP4r1SKmk",
  "key7": "4TbnKzcxs8o3aPRo1tZ9V2E1QX1v8RqxTKfJzPhL7Aq1LUCvAgWEPrzge8sL4wguc2xbXsw9E9RXnfogm6N34kwq",
  "key8": "4zPDC7PuYaLxxFTZtskooWynQuSqwehPr6bJrf9ygs3bgfzyBPuZUxfr8uZL1usWqBc4MWrHGqDxoD4djwM3Fx4w",
  "key9": "5DRpnSikqBNJcw7DnisJkVb4NWa2TAiGj5eeJqmnYoLazxdyZzW8utc6BtTAHUrvrfeBm9Mkewk9fofWEoNN2ged",
  "key10": "5oVhxRdfBjXiSP4RNAuWs7TBjeghGKiRwWY666NHh43SPBkvy8ue8DEhcg2J4jJdwjdNLGDBXWvyHxduLm6AKyyj",
  "key11": "3xAnog734msXWMC5mnjayQ2AYZUwjQowTeQp7J9VE555GTDvZFs8B75GnGVHCBEfnRKqxoxvQuerrojiYAynZbp7",
  "key12": "USxCEcyCTgpnUEwT5HPCEFwQQMfraZcj4WspAk43QE8WYA6hCgNeMpBQCnPHhZ8m9YZ2Fncn4u2BhzgyyCBq1We",
  "key13": "2hKbrw47UDs8einx3Tfghns3UYdCQpzk9xs6Nnkqu9RTNUbi2Lkq5v8YJpfJAYPpzD5AiGcte9yrPLmJkt5oewSn",
  "key14": "48uMFdJ56PpxnzH8BZcvnFQ9Eq2RtgjTBtD6xMDryWPrpRq4dbZuKHNf6exKmv8bn8nMsPcNjXhc6fpLuHpnBJuA",
  "key15": "2sncxPc9eYF6P4wtXU5Gfh2VTDBm1sxSDgyZgbH4tDcEkVHvH7FE3vYfBLL6FNsY1XZV3G6e5yyBCvQMSSWzwrwV",
  "key16": "Ypgs3jYPG4i6ejHyzWehsPQHWoA7jr8Cxpb8Jc5DS3wa27basPqnYH5NNNYWm268SeKhaiAGcDFEc9du7ERkrtM",
  "key17": "4qxQBhdcCyDuMtV2gHcs9Kx3Yx11oHuKdY1Y2pm936V2uhGYn8md6JhMsU1g6EWbS1kBP4SCvDv9L4b3bhK9tgPh",
  "key18": "3NS7vpTACG5ARUWXKUPvTm2NGCfcvZh3uFuRHUpu4kufBA3ecgPG9CDqsbJppfLFiEV6amFRB5KVoBjheiXdXZ4R",
  "key19": "66nHrhv8sWPAu6zQdrqy6Mt3PyqjawSRUeKydZrwdcXTa2GKEPyC6SpR1rVko81JEFAbCC2T9UP9s55EjjGKuDQb",
  "key20": "3vCfky4B95uvh45ENkRaGwnfwet45hkExeT7KE73mccWcCWu7juh3ExKW786tdyfftdaaNpKHA5X5eWXvQz3GJV7",
  "key21": "2xAkcBeCVuyVgoxDTaT1BNKE88k1JdXyyvDeqoXW4PRmrViJKythYDMcRSSskvqp96H8FXNS1basvcu5R6WfRtDN",
  "key22": "5mHGgByYLWLzmJhLj5AA1ECzxWvkTzyT1WaXjSSK3iKV1mQjs3J4oEhSP2KeK9yZZmJYrjd1R5ypD4yFESWvdzR7",
  "key23": "49mLA1Aec2gtFgJAbVXD3QiG1f6fZo17jaUx755mmJSWDMiNCXGDELXW3fPGatSffhXGHPphViwiTmCijh6NcDJZ",
  "key24": "YyxmKQ1W997fvH7ET4ws8y7Y19uzuPMpVGcVRtCshxJpYVgUo254MX1EZv5yyBaBiqeg6Jpzkt9EdpsxJQr8gQ2",
  "key25": "4ntUZdkAWkEwq1Y4cA7z5JnQ6sG3CwDNbkuXcePb1rg9Upt8sfseFQqKkvFW7urPf8X383BCouf8xAAAzEtf2kTZ",
  "key26": "5oiYH6xyuzzuhFvPpjcVhjoQ941cwKTcQxekY8ww2Dq6iGt6mXTcq1framfCy7G63REdVgzzfeE51RUa5mNr8Kqs",
  "key27": "4fvbGtzZ4AUVyzci8aG7RMDv2krPoQhmEVn2srxf6Gd89wPkbVyC1GKiEQ3bXMPXnPZuErUX9cpnV2apjsYPPgmv",
  "key28": "4tkCHMzEkArXkwfSZ3yg8nQEBvrvAJ8SVK8T2KvNCYDT1GjCbKmNbRXSXp2mqJEreiJmoKw43NvXdkxjYtVtv7QB",
  "key29": "2sxGDqdcztHbWGGzGoE4jCe36SgRkdW3J1AsucoKLveXf3crWEUof1TiiJNFhJ48Xe8ApsHenydd6ykhyznqmPsr",
  "key30": "2utGCBhbD9DoKyFm6EcQNRNS9gD5pJKdqNthXKMvRwV26cxC9d9ftWkeg6DD7zRq9ZxpBtsYqcxy3uJosD7CcF9P",
  "key31": "5SMHMNcfyNzka1pkcdYKFTnhB8cf6mA1EazqQUj7CM4jk1KwPMFZML69Lentw3ds8zCjyChWkGUPKTLemptpTkrr",
  "key32": "2UMzzcgxeCA2rXKMXaTLE85zLw1BBo6QVicBZZc9FwGEqqTVjS58nMZjwML3NPav762qAr9Zj5tgajw6grtoxGLJ",
  "key33": "5WmuCzrzV8F3ofKXhpUB55JGLsKb9oWJZ4ibP3MspuK83eLa6wcHBr1euqXPbTvhz4mt1SHeF5PuCA6vmKC8UG5K"
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
