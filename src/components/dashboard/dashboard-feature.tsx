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
    "mFnN9kVQ9zj3NpokHjL5R2kZbdM1Kpu3e6gTdJSTKYkuuD8EydzZuo4mhQLyGknmqgRctsj4h9d5xfimNd48bHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CwxfZ3DQWRg27UwyNG5FBnuFUp61FNq6DHp8Li9mgjfWJxVC6F7Dcw6pVEZ44yL5ZdQHcuqpR9Vf3wWscMjurMV",
  "key1": "2VQZzFa9qmhsGagBYLoGG7iCdpduyTsmnLhqRBqMawMM4nMEvUuLwLHz15zbUA3XR9uJXUaeqrzbhfTcMNGwpxkz",
  "key2": "zRPxcSenJNdWu7kgY7xuKCRWAimVCCwJVSqCbwiYFauzUpx6vUPgtB6wMukksAcnbspGdeEosfgoTG29H2yNUnt",
  "key3": "64S8xvV5rJgRBRxge9mQv96mqe3bUARGySsGJSe4G4iMJ7ubfiTE8HhJf7TCioQasqWZ58WNZ1Eqb7D49dPYHxjg",
  "key4": "2NC8b1139XATvAGPx5zqMXx3bJbnnHHfGdtJtPZHK7uJx9fVugHAt9tftprzYLzP75rP1bV1whpoqnekr8ndiZvh",
  "key5": "5CaWvaYBzU7uJLke2SRviDdgRiehg3T7Twd2z1Uqph3Yqg3RyLwiMEE2TNPqKezHxuire7jQmh26RcArVcEcAQkm",
  "key6": "5v8QYKFhY4y9iFbrY9urSr3zpyjnR57E87nQ7s4cA65Ubojv3wC1YzxCvAVZVcM2JtH4hnBF3GACLvNaPY1i9rLS",
  "key7": "3JpbYGJ4SUVhYgoGwkRakvXK2t9jcUi1nUT1Hp3aYgEa7ZXgiLhqjARmzer4nt7552TLXMgzHs54ecJtaBzUiRzY",
  "key8": "8ZYQCvVCyDoMdyimRwycMeCWv2pCVfGLNAqNwqCzRGuJXCaPqM1xpM8UmaAvKaDwZHotURchLPDbkg7Unr4JPYX",
  "key9": "hRfrdHPDTpPTRZcA9tSYvEgzQhewP1Ws6B5Y8C7ryS5P5wu8c3xxSVbsZqaHqbgKxd4AjBFU7iHkFVzRfyqbm2H",
  "key10": "5MeTQ3YMaYqp9EiiZdcyUDWo3T6xGeQSrNE8XbZ4LfNPVev5t9SMjixmBZDgpD7tc8L5kxeRfDXZHeutdWeB142m",
  "key11": "4oUkspNpkmu1cAeFD6Epossb7n4xgck51QZayw4AfsJohv6mZTEvsa7KM85nHiDxWLubWGsAx5ZyNxTe5iBun6mj",
  "key12": "4uWXRoRKFUzV4KDrs5KbAgfMfGctjT211FH4NdEgWbQ56YPGArFuXN9WB8o62umpN4tovQ8qCHjVbJTNxUEU9aqL",
  "key13": "53nBsSnTUfuXmwEQLTZUTiHT32kAFQxyXTijB4gVGEYN2jbGxHK2vNdKn3uNzR1Q8231NRrrvJdiLb6iN3vzkGw",
  "key14": "4TnpAURjGUsTfthAdGfk7TifYAXEqniomtkbf7GEprSgCBrqQtrXbywE5NRvLa6nSjm3jZpdYq4fbtFt8RX6stBo",
  "key15": "3PGMQpJnSTfhmfTHLW4Wmzmp7aYR1SQqoEzYMMjEaUvHbvGQuLDMPbCiEc7ZzdwBsDXyffqqnSQ5CmgEudHGJyf4",
  "key16": "36Kqxk3Pz3DCnV2yFPmKGQjpYjvRHTst8c6y6g6yc9uKYKPTz1kSE7T1UFVeeGxPCkYNVLdB5VLCMQogRRmnPYqc",
  "key17": "4jicWWEbvE5VxSTMuAq3YvG1uncdDsfeNvxkrLqpK2Yr3qfHS4N5hGs8r4PwhzeEW58ZVMEDMsy64GVTeqr6hSky",
  "key18": "3oXbMq1yhpi8ENC9K7yXyNq23GiBLyFGQ1Anisg7nMWDgrPJTDcWRx8Xb7CsBEUisasWJ6vwuLi4hdHt4hNNxpAc",
  "key19": "rcAErCk1gDSxgLznuvJjDKdmMLQye2J9tgCsLNYjGEGSFhHsVUTgEo9MtdBpmY14ZMWLySt3SwzgBD2YkdyeKKh",
  "key20": "2gTyUKgSsbLjK8EJedpPNRvWou3PAY4tCEW49xCiFFjduYCH6oszoyG1wk9QXzGZ9f4p7En7tRYfGcJmMUgSwgVE",
  "key21": "34e8bG1CuyBWoz9RcCdke7VcSgSsYp6PfZQqbCVwVSdZdGXCu7u84xs6rcZQ84eMz5VdGjsgzyrsaAqedfUAGwah",
  "key22": "3sTjXcmxtCKy4hiuoPDB4yz8gD4Pbsp5TPoNYA1F3wxxMYoU74HTzNhmAwaEjnQ8P9wDJMtnvd1ACNGKzHFqHNiA",
  "key23": "3AabL4j33Q4mW7VegR2ZjFRPyt5KzFYvyKcnarqc3Z3Gr9jTjARNwvgBuCpSxayZySp4ogXPQCNDCirgMhFHyq2U",
  "key24": "4FQJGp4bWwhWoV7SGCDjP9bsEDBxLbWDzPTKoat3xLcQcEMNpSgzzSnvnAjuuxMBkBpLZ5eUC1L93oTsYiJRPjAy"
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
