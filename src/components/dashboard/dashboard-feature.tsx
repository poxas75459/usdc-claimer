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
    "3xetsXce1nwwS51k9CtRbhgV3hidE6KuEgLkssxWpMAWkcGNkVx8zTZqrNdshFq5yhQydmjuaUyabjE5r9qnZftw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJHHmxiW7XizgjoGz6bkCPPmtJVsH1vrgTMcgutnjvruhaP3ED6utNhxA3eH94yMMghUXqzcAshH7aFeqVfAn66",
  "key1": "35FqHPiHX7FSA38qyv5YgwrmS1jvvSbNLvKf7RPgLVPdvhQeZU1RBLJU5ZkGBoceC2afbmTeNNxNDxKQac7zzXCw",
  "key2": "5ZE7F3HEmFGuxdZmC25UyVf5RtYPj2qym4eDYXYjEQwrhznj9x6L2aYZ6gnPT6ZxkMh6SRFsrhhVCh215CXUNzxy",
  "key3": "37n8TvBztTCiDNE9mhCn9yZzYTK4x5KKbhgzuGyCHhw8ytfGPHhsPUEb5dkdr72KLERWHU37iY47QLWDNhwmva5o",
  "key4": "3eFq7tiays6EVYfoC4ZuztTUCcAFuWxriwVRkiufERscMcoyNvMUgveKKjue1Hz1X2bsMNBqMjdf1vv1p1qi8MvK",
  "key5": "zY9E9yrK7LEC82gPuxh5vERdYs9eFLN1BYhrKwr3bgUd4Dy9WBFbaXN9HBTARHz37yFnEyUrudziFfVSQUWfQER",
  "key6": "2VwKy1pGrrwFhnjtFk9h9gYJSa29afNCgQY64BdWJYnWXFSSV2Y9kpLTgT8iqDsT6E3Fx31ekbMhPhqsvGLUfPAr",
  "key7": "525Dp3FX8pKNmfhcHUNpH9Cxx7jmzBXvy4cTkC42rA9BKvkyZrUsMSF8TtDf75rMFyy3NGuBUp3GAG5m1c7VP2Hg",
  "key8": "2o8YcV3juTaNCAwMsjGFaVR6JtZ9LYs4Rdombf3aEskHd1GM3SZUk6ES5GUDG7qfPX2JdR1EQsv8MfiBMdkAjzsE",
  "key9": "2jnDa47BPrwufFui4yK1bx9QCBUV9ueNVYUMgKrsyMenLjfrdMYGa6h5G7CBcAhpDGbH3Uhpxa86cSU9D59HB1pS",
  "key10": "2V6QHHmgN9gcEgkyEKYnqsYwAHYnFdyGEn8jHVJJ53St36Gx8SsL57GxA5i9STAd6riZXZYLVRgkSFX8MPvNM57G",
  "key11": "2YdxmdxKdjHG4NMz1ds4HEKyM398s8LBgPqeWjbAhqM3TYtp8qnP2YVW8x6iAJJcvyrSvB7E8ZTCUZKoawWFCy8L",
  "key12": "fUMUrntSy8Ns4weGzFQoZbEGLdZ3rvsR9nRYa767k6k1nGESNCBb9DFHKzHgtp86PD74PM78ahbSRKstHzq395e",
  "key13": "2XsVM2F4FhhGJ1d418vVocvirj3GQF6yc9bE6Leezm36STB7RMhuSq4R83hCUHS1bFbHeapLMw93T3R6nUu76Vhq",
  "key14": "2dBcnZ48SRCjJDjfLNQM6CBHsh4HnVnPiqUjMDQuZNyXncsA8p8PXunxG4ocvTjpW2uHMfR1dDh4boQviqe1RXr6",
  "key15": "64UcEh6zXC7g3pPBWfkbhFyf7FxLDgA5xemUmSeLDQ6SjP7LKqM3k374EcYKTQFnYFgjygVrYVaHX6Za4p313Sq3",
  "key16": "5J5LLhjBDUwb3LySkaAjgNALcwRJJwSyN6X6qoxcKUzWNmayjkJi6W1L2t5N3sZMvAdQqKAy5HSpjipYf5wYGRk7",
  "key17": "4nNqfm6eXwrfSJqW8ex1g5nwW8hkB2s4ijmRSpzYQWkckCmJFsiP9zfhNRJCNWHv8FkQcd9Bmqm74VQsWzrA5Vt5",
  "key18": "Reu8WVZNmgh6KKKLaM5ThyGrNNHRird3JxtcGWs7xjLMXN5oLAf3befqYGzZDEarX6Kdod9eXJK1TMc1zLkr97X",
  "key19": "45NrruaAxZxHfZftGnTuVHdd7HRoJtJ7DzU1NvZV8NaptKbeaGrLuFCrveoB49kmN2i3cTB5X78qTfymmYEy6Na1",
  "key20": "2t25hMGDPxTUczh1yKYasVo9QXueT21CuN3dFRppU8eg57KfyLvicZ7LaHXhpySE9XGYeVXa3XwLQjWossSmtUnL",
  "key21": "4dUCcs71ehYDTuaYBMPfJcR6TgcpeCPbeFjkLjbFWcCgR7p4DebLBzjYsJf8h22odALEVyk8cTcmSg2vv7a4HQka",
  "key22": "5jRQVUUBoFfkd1F9t9CkB5QSCoW4hVo7MQyFvZe1twVwy1mmz2jFy2bxCRyGL7ESWB5MKxkQFETrJbRpmFGSjhov",
  "key23": "366mxGbBt1c2AQPHQkFpoMqciFCG9VJneY2mgq3TUog7JnsFYFLn4wvLaK4a9eNiTMu6Z7rud5mmR6EKcfSMwGAW",
  "key24": "5M66EvP7UoEqJ9ipabXZeZqDoAEqZh3V3NDbm8XbHcBSEdGvwkToNNGjS9dn1M8km8BxAHbqpD7Y7kxnHe4JtwNQ"
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
