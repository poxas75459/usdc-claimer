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
    "35nW4M3yKtaHNfpgo1eiPBY84B5rWEKfpzVxwZNeCcYnscMYykYuTUdPcsKd6gE15ZWHFjAyBTU2pwgiXArw7Tag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cH8TCjTtmJGutB28yBvjyozcYEcbMWywyb55zF4U48tiSXG3Mi8DRMhCUX1iYt4tSUQyPTejdNPB5iUStko3S4L",
  "key1": "3P6jtLxRRXjE7xLfnEmkbBV24MXouVmPXurmRS3HcxwfTMo7ksuaDsBBxF5Sku3hrP4CkW85Tcw6qX5cb6SoZDKY",
  "key2": "27qoXxNFJSmRJ3w7K6A5b9tyL7aYmgJR67Tn4hGZrgzhFtK565pbph1PbRkUkNUAjNLkebg2nzbueBsPYg1v4Bnz",
  "key3": "hQ41gmwhZtPY8ZY1xQiKFaTVupeD62BZXfHiQk92Ai9z9kW3Jms3xHUryU79dtuyt2Z1fhTYYoCEpT5szQKtc9J",
  "key4": "42FVNkH2svRAPL4tSJPwkDnaaxPMa3U5nowMkMPcjrrdjSr7zFg7YDAojrPvo32LfJXyDSsNWyqxodjpspPzNKtw",
  "key5": "4mVjFaQ6GANUYC4xNZrRcK7ota1TufhVRH7Y83f7zuYbH2NpNYyNyyTd2V9Y9RSgwZM8CcB9jcijQApHzrsmwPqn",
  "key6": "2HVDQfXHtC6VwcKbg1nN6Dbor1rfQjiz36FpVSHmqjfEgQzfp6phHUJtUyyb5NyHTWmZR4YkfhHcEnvBYMRbZcBD",
  "key7": "42Kxpo2tPaP4jdAsqmXdQ827nqkWJphEMi9tUjSkt35MCYChsRxmfgDfU6FTyiqj5CeJPgy5bHdmzMDAJXwYSben",
  "key8": "EuvJEXVCjMJg6c9LieQZYkViWvqWW7L56CbX4UYdp5Eyp5CiATH74RYuFNz8uHW7ucMPJSQDJQN2GjVpKUt6wkv",
  "key9": "7QEruttED7XFciHUXZSqamNS4fUseW6fdbZtugQAMTabJkWNWviW32MLigLpGyQXzttFmnKRCvRJA2axuQVNcPF",
  "key10": "3n4sh8ZubfM6kUB76HUN72a1vnT3Cb75sQq25Badckdpt4LruZHKeJSHXaayAVkH7mderT9drpVsetHcufJxL8aN",
  "key11": "388ajkSx4cR6th3E9V8VcPGzZBVrj9viWredqhTxEGRAabxqZrc6gjTUYieQZGLDJ5XTEXN7dh18dXA2SQiqPFeY",
  "key12": "2xSUqHgDngD91SeiyFFAoJiqyYgrPW3Jv9v13dxDjB88GSz3D4EKXCN6KPw2LyncyyMaY5LbWzzDNfpqWftgfVeh",
  "key13": "2AnRrJCUzDwxMwKPagF7ZtXBQxocreDTq2EP1rHfazuQRc3y7UNNMck85aiAW4xJDkoRSTjtjgVyVAFEii65yX9z",
  "key14": "2yhynjGYjRiyEbMwJrd442fcnKCYvjMnRdRLV684Udv5GrgfBDtGRk489uSXeKagFVjUyh8qg7yWuvq8J1tyst2",
  "key15": "8xFUYEGqtEaQdoce3byC9UJ4iq97bYCj9U5Dny2z8evfCxaHUWwYdorANNMd6LP5dDbkmMbxbbwCoNyLqRqqmqj",
  "key16": "5eG6vncCwZCyW22xWkKzYmMnBqP3sRh6LQQt3jT58XZze7QKLdCjA8FNL6nq5GqpGUp5Hc9WC3QaVu9fN4Xu8tRC",
  "key17": "3A4kgCcT9ZgTWn9n3mGraue3ngSZxthkmSKJhYj8PqmghjSvPDfgjxeqwndrkSeDqarnn7Egnu5KZbgYWCrJh8Tr",
  "key18": "62fdBsi4j44Y8XzE2RS295d7rExJxiRFTkwkC4TbpMC92fYTj5Qpd8ZtW9tvTWNRx32zzzacdVq7oYLsfAtxkTnT",
  "key19": "4HbgrrhRGSHE8p1kiTFaK3vCZXH2t7fHVD8b4FPdYq5MqEQYPqF7nrEF8r8cDc7PTcyiSGb5e9HH4Mj9LwnSeeHk",
  "key20": "2Zcox6fWkbsXJE7Y8X3bEnPPPPHDc4cJ1sTf4o8Qmd77bbbf5vky2n1o1g3vNSDGxxcjtmJ8tdFpejiLo3pXNXBz",
  "key21": "2XBTeXVo6GJyjip8NhqzPRvaBvLpTxRVMfTK4EWRcecs5bjNHPrUhYTbe4gWdtLRc2RxwezX4mN9s5wcBYaNWSVS",
  "key22": "4Xdrqh4CCrGWf3tDPG2FY8PdM3mmVoEPmHTYqrrbxTEAQRCfJCXf5fxsT2ZAhNsPE5YvuomM5sfAQxCqy2kz4RX5",
  "key23": "MViBeFnaJdbQLwsQ8CPHCMYVaeeu5AQXrYA16gKvsy35h6Wrmw1oBRnxgqqY4Vq4iXT86BDNUpuxyzoYekwuizw",
  "key24": "4e3AU9HE9JH1vHk7Xcka4RU4N85M8sTDyBGf3mwE8tRfShV8A2RkkYLGPRKm2d5noUXvpBVBaM4Va92GxcMJf4Ni",
  "key25": "EXQC8wuax1xammHWjmXWcnxHhvuVe9yxLHw3s36RpzuUbM1qbMXSC9vCrmwJBWwS3fDMSfq3iAGuQn8KaeoMGhC"
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
