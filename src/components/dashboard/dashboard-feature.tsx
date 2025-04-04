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
    "2whs7kADBcGwacXuAW5JK6gc4WBAU1JNbkrujvtkg5x737d4hKgkEN7biXDRaCBqAXoQE4oiVt1dMkHdpnUiiUrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dihvFCzcjj79vj74d27mdSfp4WdsVrpZUKDFdqza8ctisNX9iyor4sdVDb5Gx343zQTeQDFd8FFkcg675mNmZhP",
  "key1": "7zfKNQc4WLrF7qmW5iVwUUQTtxLPjwKsgMgG1zUfjZhN8Jq9jon9KZb9KGJHviRYzhRFAWa8VoxVgmZKFPCWpL9",
  "key2": "USqZ1GyDX9yor3453PgN6TEa7bLMK1jRab7Nt41Wc5KGFvTGMY1hSE9mC1ZVHRJdvtNVVnCuFdZJ27Pedjw1HN8",
  "key3": "3QLzeXptu3Vn1nQD2GbyeRWCdKzEDsXnNM7pkQw3cTQUDAvHLQKjTJ7jzKAWoDsm7D1QZt8M1ojpD4HA7A3WChAE",
  "key4": "5gmn6SfwPrbZsx84Y7mdk73DxkEYvN3twjpy4FFyBneo5LxvPfg14LfQfCvnVT7rmYsQhGcw2QSpSecBSsksjrui",
  "key5": "5oDYadVu1RDzrzFJLMuEqKyLQBnenktDAVzAfyHPBYYWQCCdtPSpx2HdtbYpkcj12uVJtbMsLQmGzGr7sQwoQJ3m",
  "key6": "4KGancPpJqCeaPiXSXoGM4gi5VCaAiCTGQYTqMDYenHZy19GroVBUdfaRauUBnbZ1Z8dnPGUhbKJohXpGMsUW6C2",
  "key7": "5nZCRdgFcTcQqDRcaNdhschaA9BKmW8j3n1C9ECg653KA7ZNHCiHgsoNa9HK9nTJdVgGC5tFJFJdDFFgKr8PWDa7",
  "key8": "542RU3ueKeLeE8DcBDina2jdyfprvwexChZQzbJhRdyesKkehetYnLk6VgR86rhXPN8j3GuxqYJkGYLYvYXQT3HY",
  "key9": "5st8NF14rWNkWGUFesa954KJFqZtDPoDqX7voRrgLQyV9DNAfm6ZRegW83hXzZbuZC2DWX42D8KVxsPhgXLtKh2q",
  "key10": "3T1aB3a9ce1ENLD5gTTr4XM9rywMvZVeSi4VuCrCJXfGD8tk1axMSyVQwM3XeNgU2jzUdRZ6shbrTb171mxrukZc",
  "key11": "2YpvpCy7Aqd4Zc7MHveYUfvVZqPMjCN7FcmZj379uBjftfbJ7gH1nHze5GRnX3Zm1BB3htrVWjEqh4mzDbbZ1XYH",
  "key12": "3kpUGumXFysprMuoCf7e6PztAibSEgnNTkcGwszAE2ebDLaV3rfdkFoQiapvzP6WPoP1uKKJpSxLPJDFQr17RQi5",
  "key13": "7gH7RVRAoBN38z8VmFy8CoYVALDfMZJtoUzufKVTSpzHeXfTiELbjSMkJWzqycfLcfabGQxZwUt55W4TauokGSg",
  "key14": "2KHHtdEzuW3MxCNPjzyXf9mhdVxYsw3bbSMQDC9EL25NKRyfBadJMBdmyBk84uKEf6vDR7pWgzGBod2sBSBshG7f",
  "key15": "3yo4J53tk4uJWpVEqC4i2WW6eMduwpfn5rE5nBqEbpLr5wiFHbEey6rzLfGfvwXfUN8BKKpo9HPnP3DGaHRFncWH",
  "key16": "iJxbPnabJndbTVJPYLdZHrq6DJjnZ8nb2oQ25V9fPpCtNp3bAR7qAbqXDx4QhEsLQg6tRJTFZ3qJ71nktXkmFAQ",
  "key17": "3w6PL5TSmVaSrSgJXwh3GjWXa6476JX2hWGorZaM728ds9RSUmccP9iNbCWUVHCGX8r2yMJrZS5yNNMbSH4kWUeP",
  "key18": "3tfaYKcGUZEQuWqB3wDtVQjD1ycwqG3f1eivY2dbiUBKVTCLX6Lj7hqZt7e5N4uxUrWEgU1nL2JG43FN1YGecPDS",
  "key19": "4ZBKfwjEPXyGEhH2jdwYuRakHTLAAs4iveHrrTqVSQE9qiYys5kMcVaSw1mc6iEFFwS7MrXjWTzGzB3jNBwYQ2id",
  "key20": "5eno5i1MLK96iUtZuiZzdiVoF5L4VZyQZA37hJTmXpVPoTcvAJDvBuVw7bQmBM55scQ9s1wASqtoMdHBt7GSgssx",
  "key21": "52kA6bx49CLyxh8dv7Vu7SSKWjcZviYpVZqsEEJLcXLn3KG3fG8fDEvNY9S95UsSAFMWgEEycjy5rwb3NsWEc9Xj",
  "key22": "2cZoJKGjQrXebaENSxbWH8dUdPUU7RGDoSMzykWG3XZgxvQgnrS7nvbTuh4PNhoDx6cwqKRcURxZkH7yT5iyhJJG",
  "key23": "4mxqeFiN2pfCWCEeKE6dkF8L6qybCFaKZbLjrLQb6syHzyUS2gLHXeAP6VCtzXdVLzqr5HiJJ3z52Q9aHmPmxV3w",
  "key24": "2s8Rw2Zxwbw6Gn4JEGyMb7qYvBC8Fz74T5PNMuRhvDi2dFDePVj2EDRHCXji7MMCqxGM2yo8hmbBWT8o3tgsC7Sc",
  "key25": "3LsKJ7TC63CLq2GUFyENgEWbWbJ5oGwbHL433SL1Fik28umA245rhgfikv3rDsFwSUz9FYsfyET1VMefSkYW6Tox",
  "key26": "2fCFbhtaP76Tbakgvvwms6QaPaR34vdsjWkFsn7ykmNkTnh2VmcnSsrcTFWXe7oKFR47C78C6tD5T2EMqMngMn5u",
  "key27": "5cMhKbcXGwua2eLGCXQb6tRzzHwQY5a1nuoAweYN5U6zivExjDKJb4rNrLagpRHfDN1LG5tN3pvSVKF6UYDCarV2"
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
