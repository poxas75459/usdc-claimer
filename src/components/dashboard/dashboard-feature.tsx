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
    "2mgjdCyfCbDdBqZiSEqz2J4HvKqfJVmxk76EHwGh4aUYHojCwButx81D6eJJuT5qLXwDK1EjNnVgmqgCkpDVocVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "avq8pswz88mC7Yu2ec26H9hm9nQSVr9tJaM31ZqizNXjBWgG1Ukzi5fqFq5bA1niL4byVpRVzkbpztzcJdux6fg",
  "key1": "2jegKu1S2a4rGwrXLRheSVoCDahuyh2BSVtpayrLKLYgtWSxtpqQeqLnBogXp2AK2zkuU4DFYh2brs1WLKvR1ApR",
  "key2": "2aT8HRcJMnoPho3G9hVih7r1WngjGEh51KAKo1e8qtdGwfnvHApbuipvLGh1ieBmt5wLx2s1X7fM1r8cuFDUMhLH",
  "key3": "5RMdh83e3TAc2HJqWQr2ddR9xM1Mnm1E1BJwFLv84tTnSanVX78WFT8933JPnxmnHtTsGPzFqrTB9rMYhgHGc9pR",
  "key4": "3MakWAay7eLACTaZJ1yhgsJvv4jM8T8ZtwwQpSfdYTvn8CVrKxrKyWT7Z5cYBCBQ4kFfWHmFtFaKPd4sYZFEznQD",
  "key5": "u7iU82PidXrN6antXM9pUWGuyFZvz8mXUvhtEf5LUqb7oBYn4Lom3qxQ7KGtuRXaZWYuTuNNZ89sJAFrWv8RJFW",
  "key6": "4EhJhmYEPXVxhXMwVXo1ycZ419Wfi4v39WP4DpWLeoB5khfSYS1EXGjvckhoMMfkPPLaPM36Mf56rViLB66pHb9T",
  "key7": "437eYoXc8Sep93docL9DCFmUgdtK72PDYGoYjcwCPrK4jDPBT8RWT2WyWjCDf5EE42caBB5aGhAXWM3nvojRmnNm",
  "key8": "UnaT5znds19phsUXE33yKY6WgLfXbjnDdSo1eSWAzup7imY1YpSCakuWeyxdj5T6kZRktNBLfhiUknhSoPSfC8e",
  "key9": "2oNk4Fr3P3FGcs7LhgF1c3dYnXgSQfvzF5GaNmYbnJmS1zNkFund1dWWGivNyfhFNYBWjr9hJcvCWxh9uA3b1pnG",
  "key10": "5i7tJUJzqD8H3gwYZYRgQicv1LbHMZexnBsmXifd98E2NpXvQ4cEYytDMPpAfCSrk2YU8fwk6tRBNmt7tmUoXRr2",
  "key11": "5VCxNyJVpk2vzncbCa3vSRCwPYmvAg5V9MFPcp4GSoaBmsdUy6UH2Sv8rsCUaEHwqyKodiFS126vj7sQK2TBdTpq",
  "key12": "3ZrCM8EEwrdmAoeU5MGrdCyXZQVCUV5mpw5vnLVQqFcvHvAVHEjS6GmQpAymLo3BjrW2jgNV2hYhuGEqqsB65iub",
  "key13": "bC1p5iDnBVMbP24p88PQK7gFVTYD6jE9nV3Jk5SwGT1K8ucWhpFvfqMrTqd2QhgfTWncqDPYVYmhP8T7EZEQehx",
  "key14": "3agrsGpqzXfZDfe7ngMPAUZMubfaFJZijqFzoX6f7TKw5t5BpGRgXWnxgg9tyJJmCDQjUTXfLFVxFEDLh28QveFa",
  "key15": "F42YMrPywDgVfNLzZoh6yfqCwQiea83b3iNspU2rRStxAsafQmB2n1VtUzJmZAfRag3TdVNXQhWoqYEJrDfRdeH",
  "key16": "3JUediL5mMc4URNB5BTcqhGTrSCz4x73d1bqCcRzEjPyxvhfJ8HzSWWrKizq1cawrgvFDG2L6hbrMq3FtBmDuKY6",
  "key17": "5kSRk8CyfBjdtYg2ifzbfs4zbYCLjaszdABvEJSaDXGTLRvuzYAG5QNXVxAHMw1rarTG7jz18BAygdXh3jsefrwP",
  "key18": "64AK76YB2MvFyLmQdRur6sKiehohGXTRHPcyjuuph8jYeiLnhoTJoYheUmhjz4AV7UWTTcMr9kDqygDiEmW8kTgz",
  "key19": "jHUEZrdRcaoFADEAr3iXH8xWdam3ZnB18umvQFEC8ct5UmF4piK4PJ8VGUL9tTxA7Pv6mZmGu9djKRbf9qboRrW",
  "key20": "2MRHvHmnaeRf79nxcRwWjFCd72DNHqbwvCexv9WRLTii2vYJNroh2zaaR9vXqWDSWwfsksUHhZnWkEfZGe4UVG2G",
  "key21": "5j3Tu2XZAbX1vuEATMEiwhU3MZbk1jGSzso2e5Rhpw4RVZHvNb9ihbffd5bWgqcDHqk352kYVHhF99yWGWGRsmEm",
  "key22": "5y3J3zpWVHSMoHnorCvv134oXdBPcRJGk41krf8xbqCUYX6PnKJaJhHjdUqLMpjAptB34AzkTbr7SH87eFWVXL9Q",
  "key23": "bZFagAY5FnPpGKnDrCNuKennEZvDEFwC9DQVxns5LZn5ABocarpde6idph99hGGLxeQd3DmzsasbgnB2zSvEmba",
  "key24": "3kvkhatkEU8M3JfqqAgnUb6nrtybAj5JjJj8QKkESjpC5zFxYUxC8oQ4cNQQERQuAWRTM2y81vmZVU9UnCCQwW8K",
  "key25": "3WEd1PU1VH9njREL7JVcaDyuR2Qz9H9qU3ztM5pUBUpTJKxQYMv6Nme71ZkNJvs6R8aNqY2G97zpQ2vSKQCGPQVR"
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
