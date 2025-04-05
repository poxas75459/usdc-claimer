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
    "3qfBRcedMXxUbNG82ujiBNm7MzViS9dr5kwyRBixqc1X7yh7gZziFmg3859TSqQtC7mwF3TvPVJncP94xTc68Nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YGvdkJMPrZHVEMrxNBNqsbSDmMjphHdhYn7sAGTnCtZ6612HVXxNS184EasrTiZdx2v9H6w4G9bHErsqQTfgawA",
  "key1": "4PPK51iC2aur3P4tZyq34bPz67pLPg9FszptHq3fZjzAHYAXkdF4MCyjqWB5aWjgBWgbsaVd6FGM9LHDxrKqZ37b",
  "key2": "PNMLwjQJURRHbpjTN8h7ThYpx5fk94xgtqjAYT4PwQS69qeLqtWzEmNLYyZV4J2gTeKKyg7VfzPSe5gTzWtxEg4",
  "key3": "5oPaHhFjDEtNBcBLG1mCeaykAs85JeeLpGvpTieAJZRrtmdVKxJLMZWZneAtSR5EfYZT7h8X8LR54NECQhtaTjTw",
  "key4": "4Xv9np8gVWPozJBk8HssdYunJEsshgMWgvJaocYynWaySbZaFo6SJQq4wwoFVDeDSU1nvADTpvqA2ukWqsFFXQJb",
  "key5": "5iJpq6qgA3Wv5JhnRiE7zpJBNsyME6WWWAWuJvfKqZNsCjgRVwdGoAisDpTVybuMDwsGDRXa9tRfreNq3XjHgK6J",
  "key6": "3bXZVXZkHRmXdbZyyH3nyRpk2Y7bgTtaDTege7iMm84qGxQSft3QT7a7WRkSdnXeYZK2js46zEJwzBT8y4rS9PV",
  "key7": "5bPyxmR3WNBoh9fryhFKbaif5qEGuu5rEVCa7cK2LdtkFH7xdnSjiJEhJkeG2ZUG48DZdK3CdhFL4RLhx6iqbQ13",
  "key8": "5foFwmJfXcH9sFqb7f1kqv6h5cSjgDKv8Q9Jij3nzqxeVbiZvxzmcEHPKw52ChAYY5QNNNfzyT8uneQRP6hcQxQs",
  "key9": "5oSG24pcnjwvq7So4qwpz1LrqiavNBMXQ2c9vKz5HcSEnnZzc1q6WSiQSKu7K5LKy7sYqgUCnRJZPf81pahwbbE",
  "key10": "4FyQMKnjBiDKvQTG2REKC2ejQyj4w5WtiMxFSRs6pTHEN8J7zrvPg4Ahq1ZJ3WEh7AQBobSMcmVW87kkA7ajnvgM",
  "key11": "2dtxfgpq6mdZdixBfyVVdCihQGNXL5TgAYztBFMH2WGByag8XKSBBJqgaiaZUkau9eTp7YcrFnN3DS7PvzAE8nrt",
  "key12": "2KHGU4tZ5pizZXp7dSSys2GwpgdHX56VXuqBtnp35fEFarGTjpMVzB3pzvKXT3hZdYEv8qk5qZvUAgtutKWGPxsN",
  "key13": "3z166UeR5cLRVZBTFRVvoqJmRkEfTc9wJYXDnw4eoGY62ero3X5eK9aD3erHYJRRxCbTAGA2n4SBLJfhdcJuCD6k",
  "key14": "5MfiF8u59udZDEm8ZSVRBXsv6VYuvXcQh7Uj8zUAx6T6pqujwTbZPVmDYU7fEspfegWJWEkwK7AMjg7YUSTwCbed",
  "key15": "4SgtZ8oafdN9eWhyEz57GkjQg9WFyEFn1eYdvCzqBx9VP11V5Ah9PMyq1RfZDVyofuz7DJrk31EupvAxhAb5RbQn",
  "key16": "zzpRNWqtwiqZ399MpEDBSh8irvbrLfPykQXLACn6LjP12sGgJBfn2UbjMHUBhTYbfECoAyVKD9TtnubKSLdKSmL",
  "key17": "3ALbFbC9EKL7cLjvBPDNLXq2Nb8h7ktGeYY8our6cJrrxV5kpTntetWqVkHRbPHgNXYo1y4Da7sHpgb5Au1FTFjS",
  "key18": "44KhfNoQUwEzmRji97CL2DC3fA62Rzpff3uaoE5stcNtF2Le64fzBvjo2E8gHgeKoi8zFDaWLdoCK3rP7zF4rDk1",
  "key19": "2AUT7nVoNQw3AYrvcA4VmqCXh8Ks3LvVd8hgSZsWoQmpSdEdLh6rN9vUQF3m2DtzUmCB4p3FmWG3oF36syYJZ29Q",
  "key20": "5jCsqALUNb9HWFoAs3EB5u9dfMmGepd2UQ1CfZJL22y8kRbYeGUoRqnR1QufsexjmamzoSwkoYrAYThvEXiHvEui",
  "key21": "3haRwB6BSaBEuZExGsB6c1H59qcN7zhyhjvfVsDPmD2Bpbv4AXsx7gbDek8wuCKDaA2XNt5ga5m3MQWmWLwofkdP",
  "key22": "UvVVQFUxvofz1ShtudEoyg1z6QU25QiuGNZ8FZjrqXdvMPG7oUZFrKHqsyJG6SzGDdYiW3RirU1nPrhAUEVYTdL",
  "key23": "5jsKB4bLjQ1VbvZCep4KucqHMThh3SgcnJ7JAskqXbH2rTzHHMZjcjkzUoVVPRxWEK3CxuTu5LSy5L4R7Qcc77KS",
  "key24": "4Md8PwzKdphquNUUcqCkrXqARbooQFEp9b3g89eG5u3nrAH1dW4bb7Yqv8DFjXgHqEohSKG6SkY8WVMHf27hLaUh",
  "key25": "2x94ZHmvYUZnSx7NPZJ1tDVWmoJejiCjzCvB9fz6fwAU4wQozLFXgvXCUiUEsiUxbRg8TshnbVVnZ8vQNJR3Ywj5",
  "key26": "behUPqqe4qDGakSemvCXRegooAhrFYg7pRTzBDDYCPjckPy7pQV68UAiqt7VckaudPPWmHi4HN5ti76nuk6YYBs",
  "key27": "5RbeVLigrw1kzUEqu6s8YzWi2awazvTxeJmYNuuNHYXyA2oVESSnN2WF4rPFkCNRZobq6WZEvmn2MeTf64G1Rrgb",
  "key28": "2C5juoFUUaJbqVYkThkChM71LiusHDowhtupgZuwUNxFMQTD8QTprNaqHqFwwqv3YL4ye93EGk59gi2D3XrgmVGQ"
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
