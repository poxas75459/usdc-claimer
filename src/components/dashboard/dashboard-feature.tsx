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
    "5QTe1ujGjZhCEVmoo7L4Wub2RwPfQnRqTngTraUV9Tbpxc4woWbsJ6GCJapgrMHf2fAZh43NdkpRLoX8GNsZXPVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38SAvs8XHvnPr2vuc9XorzPW9bZYo5564Qdxm4fq6VMdTzKZwkJbGTwWeZFfZUDGrpc268DvYGvH2y18yfSf3JmZ",
  "key1": "3ht8CLM4iqQBvR2j1FbL862bXNiuMXVkY5ywns7h89Kv2Mo6qTSWm2Ya7Fk1HTp2ZKyy6oLPKkrPmmkpe9RoT4t",
  "key2": "5ghk1Ed4NTq3yzvCAJvNPWeQszCpCPkLNnrNzxV8UVGZ1ZExHjtXXSmED3dscEDPERQdWqACCCstGJZDVjVm68R6",
  "key3": "52cRSoNEPBHXkkgsw3gmnmxdYCYNG6bavQCBgLV43kdnw8rYi3hQE8GGrrkVdGestDdxrNdQxTwjWX5G9fNESFnM",
  "key4": "2BoT1tUY5yaep7GZtPnPTfiviyNdKQUjbqnfk6xDZ3Wgko93LMCFb6wmsUf7uC1Ke8gWi1ddtjkaoW4bnA9zX8jb",
  "key5": "3mAmPfZfdhduEdNckobRBDHR4SpMAnN6UFWLrdUf3QXzhnW8oqB9mmv7zFMgKA2PB1iAcTsKTC7zR6TR8N2s86ed",
  "key6": "66KDaPKvJeqHP3XSscHkiEzqchzyjbQB6n67WnpdZJQ6xVcMEUzievCZ7xjG3wLMXZ9arhjboq4RuPEocJhVLDbe",
  "key7": "4cdfqSwnoJmK4DVJD53jTP9rMJamdXaJ7ikQ8rVWQ3vLFEnz3nvwc1u7q6m1mVHrXjGdSqXhRwPPpP2nDWiVVrur",
  "key8": "4oV7MAtjcoGBVbZqm2D1MNuRdWQtSTKEsJvTNS3LLeduNVNCQ18mRyhShV4DMZfWNHbWenakQ3QPWcna3sNH9GMC",
  "key9": "3zhCjNkf7ifxW9YR5iBLZRBFXqb1YcSsH6HezFohX4MKhTmwCk1igmnz65cNEGVpVAHqAHsW8r2tpRiewyzayYKc",
  "key10": "3rLvw7QMmPiNSyF5thnwKanJidiNj1yL6a5vuir7Btbav52jEwq6Dd1Wj8e8kcc3dex3MYVxDdpNg9qfUnsAPSTU",
  "key11": "5DLB65r57tcXKfqndfZQ6ByvsfY5dPtq1eaF6nNotB7NGbkdmQHNPy61danmpJY1tuPSZEpLnqHkN55vAtzhXEPv",
  "key12": "2yLivBTTbEAHQ9A1LoD4bdpSJW6zUJc6X359h2YDXMRftCqZoymoY2V8iL9EQhCL1DicSZai9UytJ2ThnyfPaHwJ",
  "key13": "56iyVQrmZX2Cq8ys84ehhdeojSKR8zykuVctx6Mn5XNpRziUKTNsTCyb6gmwmLxndGd2GdGJwKDXd14RDtnZ17vL",
  "key14": "4mEhbKZKfPxTjMGAAKVwWfedz9BSPbM9sMss6QrDWkHnCk8qibBWa3QTQEct7BNbc5CrcGsbvydRNmHnMxNkxAP6",
  "key15": "5WpuvaSQ4vroZyBcu4gPL8pfhDiVQtdRL9Hgu1qAtRFKgCZdWh6Za95J5ha98Lh4rLKB7714C65gA8tGwaUHAquP",
  "key16": "3MHJGjajoPjJKiy634VHNtwGZNcjstKQjmBGoB6WMh2f8g4PgEFbiqtXfB37i74f9M6Ei2FNmA3HbkX8XNCQZhJX",
  "key17": "4nnPPCFngfrR4WqEaFibpQ83JibgfKTb7tpDzYdwMXWTnB3Et473CND9js9mPMRJXuoA6BNPRV98PFhL9w87m5zL",
  "key18": "aotFiirEwztUdWoX7VirzB9duxwLwFyUhcgc2o7kiSnEtSraBNxnNgHQ1XVahrkN5hLc4pC8NJkZKeM1Y6xYUnD",
  "key19": "2hx25d5oiniFSVvme2mKdcJi4LAUiRa2DHY7qWAjbF6QGoEAJzMGtqitMSJLpmWMNd2d7tG7LiBW7qJCSaJXixUb",
  "key20": "5TgqGosGh9q2Snqn6FAJHCXHzaG9W5CG8KXBNx6NqNnLmrXunEsyaM3AqyokSTyBSMRJ8xLYG7hAghJruSZSB7E1",
  "key21": "56uMSXTgv48nJEijB1caGTMD9mKAjmmKQUv8AMMkKDf2ecCJacTMYQfVK1bSkyS4zMgTS6Ngho57FBHHYStC9F9v",
  "key22": "xuhaAaiaUDo3T2iHjPbAhPiqoCZJuzH5ZeTgEDyBMseciN17jwS2m3hJh3uPgveJAsuMHaNNUNjVwxF1ZXsmeQu",
  "key23": "2ZmCe4aoQyjxvNtL22f8BuJt5J9fW4pEHb5rwQio1iBc4XDW1YHA7HQ5dqjH4Yzp1boSBUD99GU1jYFTTQz2K3SG",
  "key24": "2CZXrvuwkpbxaJFVRPEyNZnEdJbs21Gdt8EFv1KnKzKW3Fr1KSSHMbxVBYfjRNDqVy3B6sxF3bY1z54UXDbh4ub",
  "key25": "5JaFe21VLH75skHA1AuM9VVMaCqvu4mViAWYMgRbrEivUCGReNmfAehjyxzFW6ExPpD7vThFXiW3PFMwJjodt7L7"
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
