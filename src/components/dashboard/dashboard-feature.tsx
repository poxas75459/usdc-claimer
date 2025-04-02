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
    "8hqE9t3SYEDhQ3FtyhBUDbQ2dLwzkKXdPnuheesVh2F47ovyibd3MEe9Ys37LwgvWZmALAuuLryfdyGFPgpwoJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4DYfVr55pvJ9MFYoLnUCBw6kWm88icM6kyuWNzptLskH483XfQBQJf5dGgYwaEGqjWS6WDGAoCGfagZ1BqTdvJ",
  "key1": "4P1Nv9oXfMxReDTHhN9tLLchGrbZHG32kaDz9jEtZ29c6fhNFYfrqUufT4DyrrfWWeq7NsiFe4cvBepeASVozWZ1",
  "key2": "jeQMmyYcXpxV6H8QwCxCPsRt5PWgD2FwSGyrdgLtB5SzvM4xWdrAeDKL5uhfKM4tSASjvDBv6MZShvTocCM6zuZ",
  "key3": "5Uu12xttQA71Bgw3RPGPQpZ9gFkadFDaaNDJKUZCzG7A2HvK5amHkJH1h2cnLkwH2cJTJzAHaDcFgicMnDpFe4To",
  "key4": "3fvaaLrp4A38wHrCYmR7Py2xCJJMkwdMiFxgdTsrqEwpTmMA7GyB8xp7F3C8ukJZnSTDrLj2enET5htYhPGq9QPW",
  "key5": "294zL17uAxZiLarUFwyZLWJ9WD1qRjSnS5KmYfuhC9orKz94SVyRBtx6M9ezSWZJ7GL2BLKSoMtExwib4pz7DKUf",
  "key6": "4CiLNHDpSgzR5AiC6aM5gUuL4QknstygHNbTYhH5Kb5YufrPQ4hTA1fzYfUNj7gVhV1oWV6XNSNBk5peLC5iWB9x",
  "key7": "2zaVEYNxTPvAxz35GMWeF1zQCsqe6ftatAMRjPRdkpgo5UHdyaqRudMqf5nCJWjZ2JN5CBWVCAatLKAbLcVDWGKJ",
  "key8": "3RG3HmeysNZoAQYMn9SmXbyBp11YfstiEkKAeYjpQBTi7TQLQuZTvSto8kJiih9rtkZdURErPv2DQ9hW6YBc7hhp",
  "key9": "2BqFwdQERh642WFcZPnpjjbG1uZ59hZNMqNUxHZ5V3NgDvWGfFXA6Hf8sgBr16vPVM2Kgj5UvFBHj1kfbAitemB3",
  "key10": "TsW1YjwsXHRUnJhsf2DhbK2HssSa54e6uCe7zk4RF1YV8Xn1bhw7quU3gg7se5eZ8srE3UEgUcjgGesosyfF8Ve",
  "key11": "5rfR5brdYH6Ry9XQDVfduQUuZwwCH4VwMQS6yXe9noHcoZC24zkfbAktrBmcNvszjVcQt9AuYKv7gtF3Qs2XKZu5",
  "key12": "4BQnYp7Bx2mQP3tzWJHbJWcmk6HzbXiGMvTqsB6pD2mxawgbzF28sYT5z18KWuwMsJMQoYqGbJzFCD3bpjAq5PfC",
  "key13": "4xzbn5W8Gk8C4BbQBUSUcEE4zWfb1rSuM4aKEPj4VFkMZ1enWo1z24ubqB1t53UmpVkXDaHEC9AHmzyHSekiERi8",
  "key14": "3PeD3dkHTUQUUGUwEFmaXHr2kdwFvGK4RoQmABMX2qpeqtYBizXEsMFaHWP8dRnxddS8gL5mjSCqgXCqppJoGjC9",
  "key15": "58Nfuyu1qLWL8exD5mST1mhXH5E7yQMAwh6qvMHSgEnbYFtnhNaqJib9C7fGmhDemyFaSW4m1b7ZJYtb29dqEPNS",
  "key16": "3psKWc1ZjAAEVAdbKBXJq2G2ehwX1PB3w5AUFGYWPHeRWFKdm2KKwBsFKJ5SWEBY2iZh3XqigycK6duMHycKoKoo",
  "key17": "5gmU5PwiwXxdqqHMyb78bAnTK7tcFV5CUBgnaREK1mEmFeV5a6cEQbywDMTyQTCM2SEtv67t2PhFXCrNNYNFQB11",
  "key18": "2U5UbHfC2h2PGJnfM5TtyS33vFqbrJWHYpptZYZhvRePNYZq5Zouk71jN93q5pTrV8oNHJRx9MHaZePbheFSG5YZ",
  "key19": "5jiXeYeGpMUXuUXqRciRP1hnwHkbtyyCpY4fiRxDRgHvKXwgkZgv5B9TyUxeTAQ3z9DYXx8Xur27yM9Fa8zfn9Xt",
  "key20": "3jmPwYxXvFm8quWXeFF1UPxKTskfbKSbyTvag6WMvmrSg4j39giLs93RPxRYBxt18DNFEcvCcVKrKr5C9WPQMok7",
  "key21": "2hzhTk6Tu34mr3Wj5FWod3KGrfGWzgPh2wpAiqBSNz5PS8RdbTX1KaVSbJvATF6RXjR1JSLfsaE6sigoKR7CGf87",
  "key22": "52XRQM891Vx486qcw2QNbWFUrRmftxZ6TUM1PbHTw87xFxZnBkrg7ryWaW9U1DZyKvZz55VAk1V675X7fvdXevdy",
  "key23": "4eTXtvP5RJhZ86Dc9QEKcLNNkxSXD3z69FVmtR6c3LhdSqgrgwFZ6UCjCN7YgmFai6hsujU8zMRqATV3bRfr53aV",
  "key24": "5kffg2uqn3YVUtyqzq2Nt2AYbG7SDphB5EBfzRaSkDGzuARMqcbF4Ubi9ngdkrunysygKCyMRrRB82ejuFtMUeEZ",
  "key25": "HU6XCcsqNMSjDRkSvKzhJKmjo7EPhuEDz4wA7pWoxMxGXVFpBZ4aqZUpKjJhSz2T1FZDeRnBnne4kU4z368zDZd",
  "key26": "4GgK3jkCYAXcEJig5TNLKRqKbQViQkAnpp1iN8eMHDXdtBN9Xjs4ysvTH28EaAK5o8goRPwNoJRio8EBgbiStbyF",
  "key27": "5wJ4u4qETiETQKmGWicNwdXAvYFnZ4TeWiYiBH9g5Cj3aRa6Ter8TdGRNvsLMBwE24V3kQ5qg9MDGmzGgpc4vb7t"
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
