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
    "2P1ftYz8LRi8fQbAvg33gDJwHf1rYaCwbEakMQcnG9tWKptTq82gZT88KPY2EotvmiYeFBAmH4DqwQtBQqAUs63f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xWF6rShPyvQGgTY8NMhk3HoAxgdDAztyuGpTDBXU9VzzrnGsiKDHVbncWoVpjU5dvuGRyNyjj59qb3TqDBpUTqT",
  "key1": "pnhqnPg6Lv9D4Z16K4VU7Py8n1a2Mjh8VwBP93ei9GeAc9iaVYMPG9qSww52jcDdTsnq5iGgwABcHqFLL8NPVgf",
  "key2": "4iewSCPmi6Y8GQqGBSav6NPa8GohDpBPQKbPMhDm9A775VKDPeaTFAf2YJrfC4YnTASG1shMYQm46qQmFLE3cTZ2",
  "key3": "5ehupjXHKWdScjwUueNKRmxPLxfbvB3cDKnXKCTLpQxNDezr3fnqe31wRxhfu2jLhYfuZvo4iJjE6ALzq2R8ZiD9",
  "key4": "FrjhVHxizcChHA8wjNm9SraQ2K5BQDEJtmPr41MxQDMfXqwQxmxoVoAe5HykZw7cEVmdChc4UuhMCeYouADx5Hr",
  "key5": "2qhDnkwaUgy2nKDNpyugkS7RLzbhycohsh8575CPJ3HcFD74E7ixquqoaF7niFgq5wsXy2ewQD72xdPqrgnjwEaw",
  "key6": "5mZWwgAQ3LMRCLjb3yaqJUEdi2t42fkv2T6LaY7hCPC2A1oL2Uv78fX5CEYQNFmvzeSQzS315ArJfWY1jErLebhx",
  "key7": "3pqMgahE4kKbG7yvEhY1WrnQLwSkpMBqiDv5T2oduZ2P99UVM5XDKQo2iLofWS9tUmZXRzSWz7TRKL4aUDQfepXk",
  "key8": "4ydCnJzMFpwiWS4F7iExHrNf6j321aUFSXgEyDKVoRjWSbLjNmcxcorvyP7pfNL4RwZK1qnB8GapswVKwfDCWb3D",
  "key9": "3bDN3wRoEoNQZ7DtLkMHDEG6R8uYipA43vKj9A79fhTLLWBcgPZgZ5yMatmgHHcX8d3T1FX2FqrnMYtoDiAMdN6X",
  "key10": "4XEoufdsFYEmqtDZznVSeSAMG6x7Z8xeibMC8Mm4aw7GgHkURZxkvSyZdcfBhB6pXyQ5wzcD4jQiqhSvFdPhYfMG",
  "key11": "4sHrRPJjaS83EFANZHffbySeamYNUCHqdi1xBj77ajWUTUE7SeVFt8GTUSjqqByqJKtd1onPjx6GtUPP7EhbHmdQ",
  "key12": "4XAnxcv6jarweNCyq8GgjXbT3hBpzzPMjdM8aKx6WLAd5wWqzwotqgaoHzRarDoe4GJ99fqbJ4RB8bnZ2ucNVmtN",
  "key13": "3yqBZyZvhVFnqDkrgezQ1v2Zg2YCDp8HZdAKuMnKxj7YvtUQE9CoCNDAFpWHUAoaXPYyzCYKctg3oEhua9wzbAxY",
  "key14": "4M9YavtH2VK7R93DawtDz1wwgXBZsk8VDNFspcYpJH21Lrqhh7BzSsSC92d1UdNWA2eiy6HNyTxey5yMfrg1XZNH",
  "key15": "4SWGw5vKXhudEBZBaPyMUP179JQtk2NJcT7F23Vkta8QPimeq7he5Foud1DD4VBB74zqhPKm7TtQG3hEQUz4LoLY",
  "key16": "3eNQPg6ZN21cujn3VFT7ip3ruGJQtKmjEhsmvKi6v2ecVMgsRbjFe8Yw2etcoqS32NcjW9qF2LZFAoZgB5qFsrtz",
  "key17": "mQiAL3GTSNLt82PAGmAEUTqbP8GWEz2KUEY43nzG5j9UVqW75NiWfZG5ZdqLm7AD3CeUyFkHfjcRz55P7aTrUMH",
  "key18": "5obo5NyhhuMXX24VfjUBcmbL5d9XAJMqmjyVG7mcmTnbTmt19P11bYpZTB6hRd3ZNdgmv8pxde6qiGUMmDXJuTGm",
  "key19": "2UHW23zJPdgLBjvr4EmbJuHiRdWdc1w3LaJz1D5BRHFRVsLbN6siQfPW1xxHTPyooez1yxBkXUMzoPXppfWVsYLm",
  "key20": "Mm5Zq8xFnAEskMiEsGcths4LdA5LB1oW2ECrv44uayhs6Yd8vF9LM3ZVXxPyfhmie2uNSnKqnUAzTvpSJaxU8Jx",
  "key21": "4LiYZPa3uJoL5WESbZyVeN3TcLHXEFcTEBpm1r5jEH6zd6Ft6b4iWjUMWy1d1GRCzgbJWRDjMtQRZnfuuK2SuJAB",
  "key22": "5CfKxA8ushid1dE3so8bdEKmJfamZfomciyynRnsGXfSiCkPoAYG3QvChpa8kBhjDtSD8t5MxQVRGtwr7jjhJ96c",
  "key23": "4MzvrjLx4TG6vwd7r71J3zGmpX4iDd7zDRc3ygF7Gmw1brYbEvJUZkUTYvdMZV9SdZupQJDvahNB2Rt1EUKAJ6XJ",
  "key24": "4SbbUEUAtdVn2aQJzV1SXZARRNE1oziGv74ySG2sfDhDq3quYsHQf318t9kfzotfZhCG3E81zey4kz4rRjKsRFbV",
  "key25": "43C8tpKBW9TqD16jq6UoNXwNUYbUZxwcNovPXpABxtgz13n773yMTEeehWkohcTTByzGfZCWPgGCtuQ2MZUYszdr",
  "key26": "4WhwtaqQ1cAAftTkCFMm94hKufieFfTDvsC8qkj3U2zFYFGTPA3aos5239MqkMpieQSbYQ8AvoNdaRkpGSx31vJ4",
  "key27": "Yfigy6YrcTc82K9wdoXHEfjzggoDjwde33yZYy5Nmp8wndvZrEXXnAmDpgfe2KcQEZRPJZqC6tEie4kaYoZj7sW",
  "key28": "3aQNzhK1wYiPuiyr3kzUqzadn3HqKyThgQnXjkkW4hWd2QEfQz4oXS98W6ebfyMf6zgtcBkyg33etW1gbvpyW9fz"
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
