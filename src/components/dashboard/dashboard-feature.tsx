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
    "WVsf6A7ZD8y3UJyxzfjmgPM1vB9JmipnyBHVGGVPYzk2hnshuqjcsQEQe6UBhSmF7eNon9YhFN12oBHkvsfmaaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sHdoHAktCsY5GCoCyrDHjz7cPZGR8i1HgYTR1SueMtVWteTWi2jw32ks1k7eFLzTFLApr6uJFKGPMgxdR14Cp54",
  "key1": "HUMULF67qjPftLYmz1xSHKAdV1m8TTAGqUxidkCuCdP1ardwCz9BDVFs1YSSV3sZjRGdjoUuJxL74z7HqG9D66E",
  "key2": "5ZEXRKwB1zEDqjpdCr9CkYnTx6wpsStj5kL1mBuqjNwibose99yz5y2dGWXD1SjmWvLiWJLAovEvovtUSQbMjPKT",
  "key3": "J4w6MxQxyJGbk1DKaXqYdMDuY7RyMYHgNymxg7SDjVhqkwgGt5j9wSjq6EvboZWyGQ1SfCZoc7GSZTzPycN4Ucg",
  "key4": "gwBEJDyFcotNmEWrt24PnivEsZCUEcm7kGbJFMstrJiB5qF3Hb6FWQa4R243YhJE7rvUQND3eTLXB8UhaXs8hBq",
  "key5": "5nojd7MduR6GP5RPe8oXvPi6wMSjE1nesyhiCzC2xAuw6MREkLGJ9TkDTD1fxzLuuEo1CfsGPHSVMQX4Jrc9PiXi",
  "key6": "4pr77Fg44p8mgdQv77fr2WisKsgVQwW5TAMz4wFd7tfAStrPi1zf4NHxnNYhi69MLYjVVYWRrEUj7JPZ5v5mRBd1",
  "key7": "4NZzGimRWQEzu7HGKiYk3h5UKyGuBFNUDTb9Wf2KfDpiUAzYMUMr1C3byfnRdZ2KsjEjBhmBZckaZiDy5mb7rsnx",
  "key8": "4Toygcm4Y7mpjuXE6hwFr6KjZeHLKGdS2LHseXsaYBTfxABeqSDwLv4Gt1unDagubUAawRTHhX5STitBedn6iYUe",
  "key9": "3RBonnhfAfgPkjwb5Awa11smnxaoc4NFwxtA1xFnaQdadPg9zYvP9N24dAGtEP5fhBSLUSTBaTeDRcEM5peZcJsB",
  "key10": "5gHEeZvAgsvrs8UPXB92cNBTRw4Ena3GuyDhf5PgtbAY4AfcHoKk4gJdv56Cg3zEevCu6kg2v5eEJGfC2ptxcwuJ",
  "key11": "2iZz9o4y45SJZgfzwhCQNpTzZbDLht3Qx8t142GAMB97Wocx3cR7ARUUW1jVecNeRLMfLcHfC3yVpYDK36LRHnmq",
  "key12": "4M6wAvYmB2bW3mwMKuZayUkKSWhT4pTsJk2FJDB44gbymdGfdKczgtP9mHSPAgPHxoXdWF2vSkZwKWaUmTJfq7Qx",
  "key13": "5mxRGoDWLvC6ZPwQPdfMmK71DPaTzgzAckxL7aEBjx7rRWVxjjwdAj8EuaQdB28QHkpWrRe872c1f2guLZ166FaU",
  "key14": "f2GtfohrirMpRGiEt3MZcjwBqNqX4U33w3YFUGEXCV7YT7HemJu45gE8ea1dpwR8ixr41PVSDUTyLcesHkG7Ews",
  "key15": "2GkV3RwywLteBE8tsmYq5k1hKvDBCuZqv3tzNWR14YjDtwJoedvhRBhWwCAwj1HChLJuGVHKtW3yjCrgtRxSWsM5",
  "key16": "5ZbyPRJPh8SyEQjNKzo1eN8kUhEh8gSQSDKTbXyjCNNnVS45F5cXgJwrjhAVtkQ51ZybumFXhR8vsMcQDTbRmVbe",
  "key17": "3EnVg9UHgKihWQ7WN3rT3pm7DuNDNypdfpn5oijCVAGkXCucreEkW6fZzMn57m23TRDPvGhprx268Hix1nfctD4j",
  "key18": "vtwYfHtYV6k7V4xnHH4aGHfsZaCcn9dyRredyFiz1PoMLg4bdWECvp5mkv11SEP4ZAiYDL3S4PmvMAPiWG8BgVn",
  "key19": "4TDV5Vxsg7rsbo8Bzt3jV94MJwtnhma3zL1nZhHEjKY49LqWEkzhF4A5YRHqK3T8aQxDHp9LwmqVZYKs6jjLmHfw",
  "key20": "2B2DpWxvFShWLbcpZpARoCKLbZuyFogVmXFc9SFzdVuKx4spNw9CNNceHbBoGqZENZnM1598oRm5T5qwq8QYxKQ7",
  "key21": "5XZafEV1Xn1Fx4AprAfQFNYnQvB5LvP97LkiHC9F1dLU1RaEXrjSgFmnrgTDMbMSvSZyPkSVuSNKvQyPxk5qXVge",
  "key22": "431wrCKAyi7MqSV14uFrKWZiRumX4t15jU3xmdADe7atE6dVCyuypVEGu5aCu3nuYfz43gaZqiAZS484hH2NYT7c",
  "key23": "4W25jN8SfrAdW825KsjSWQmCsyFPtF2f99aCq5dYk3L7tcFu59uYNbMvQjae1pr3E6H8GzY9Wbiw92a6XJCJzpf7",
  "key24": "4iHV74YZiFp3jn71RUg7DTXTa4w4xyc9HuEz8dac5tfGpSGvLFagNo9u7Ct7b8DnVB8jCqxaDu8ZnqxWvjc7fEE9",
  "key25": "48PMfxGdkpv4Rkej4DQoqBkZEZjDEBEqo5EK5PnWZMwx1kEtYJmUJxyD7pK1rNAxBosxdiCPQUPEwfurpf4EWWKd",
  "key26": "4RbFSCyN64mk7VMcEHGuvnm3aWrYiUgmbPMrP5FryNuvAq4R7QifpsCsL1gRAn6Qwk4CxEv9bNQxF8W8HUFeKKGJ",
  "key27": "4ihfd6kTLMpp46MdNr1NbYSCbo6deAUurnMoyfPWaboifLoP154A82uXp6THvGPR3vJFwDzF6ESLXe9PMk2Hir76",
  "key28": "3ieMZrx7tEyche2rhgJC99rYPVfCySab9qmKcjRHpHpzzJopDnSgKmgi3pt16HsG5iirhbQRTUgWBDph9QtSTB2N"
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
