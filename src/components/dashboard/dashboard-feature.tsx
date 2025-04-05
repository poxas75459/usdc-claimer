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
    "5Y6E9qPWq6MBi6f5rCkXUMQQd2d6fSBPF9K58mi3ssFrMtSNfztAeLXYCQfGb5iNyXbK8YeJqsv4yBYY5MHokWKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tX2u5PNir8Fzakq3oAFJ59LCS6F6PBHTyEDJGr4NzZwGkPmF19SPCiFWatNqU98baExkWJrmBTmVPqogiMd4pSX",
  "key1": "4kNhuZf5WBwuSRnKSvkcyHauWp4yWXaWuWgQxfjk2gGxvC5hU4N4ZppkhGbrPzc8ku7CwKwsu1VcjmcJ4xsGLSAS",
  "key2": "34JEEtEWHifuASWMm8oDWECnT1yeX4Y2ZGBhGjyHQRZ1xDopRxYvD9Ze4wdwxCW9fFCs23dYpaQNi9BTi3DKM6Dz",
  "key3": "4FD4NACNtqpczX5eqNM6WUhvtYwAbapcM4k5u42QsCPjnNsy2BAgDA9h1LTDK35jWbNdcjPAg5Bx9wp58cQ3JRnX",
  "key4": "2Fi2kZjp4GSAEz5xeuh6KCVJAR2EGHiFMrQznkuUAAymgTMs1MhS8SBNLUSZ9GEdX8Gg6TaaPoQc52G1tSFeEGJU",
  "key5": "2QyU6urKnbNe1o2bjraUriUDuYLqQUzbbDtjqrCCQX41vWmhXtbaMLqcnL3ytrM5rQXS2CCKYfcQjFrKUoPH5gxH",
  "key6": "371dCCxkkLP5MPfy7hyjekUJ7W2o19pgPy2g6tfQboK7RPXY77ZiaED5NNXTYX49jiJneds9YWkE1MWfXWFzZhjB",
  "key7": "4FRrmHQH7DZFfvwLkZtcUNT3f8G1gw84b74BLhSWUHL6hjgsKehoW62MG1KjnrNV3VZXaK7JyczurQoxsmveHHtX",
  "key8": "5ZBxG4AAvERpjkXxmzRJWoWwYoCn8s4WRSLrk5ZRQfDbL2cUtuZKM3T8opw3uPvze56VfaVQ6tWMyDJp7jh3i7LL",
  "key9": "2gvGdGbKFL3nL7jGNfk8QqSHY3w5fdNd6YKeRaqnHCXmbFrKJY7BKqnK3K5dViZvz3WZ3pKuUFqsGRF21GxNzL1f",
  "key10": "4LoGPEbdUnSrnjRGTYwrkdDAwDVGYNVNbYvjcXuehsMJCmAo4fT7MDwS6oPAJkxVNH2DL1neSwr4Djjz9F55kRtk",
  "key11": "4SQR6Sm1pCh6E5dfuFqNcCBCBemS8V4zhLH7tyEBT9BepLU2FHxqm7hoYWQK675eVx8FSmBrLLLmHeZvusi8K9z1",
  "key12": "Wsnvv4y4j7FfJ5BSRoKAshj1FX8kXLaS5JpUpC1SrPhuqmd4SpvZqAw8JabjXZkXN9A67b1We4cDmKvwpQi5xAp",
  "key13": "k75A2J45B1hhWG1xAeGh6JCV5WaeNxCTnifG1TtXHWzaDEVMuhe3guFzW9a4yVcYbXwU1aoXWkRF7MVQSCCABCv",
  "key14": "5tUXUCoym57Rc5itSfqLj8VYrUH7hMvb3YGyBKoqBaVXLRNYM2TaJswbBUbGVLdd1Fu3mfmpacGacvNHVQC45opH",
  "key15": "5VQ1KniLq8KMkmbULrb19vCiWxkJ7paFFddnsQz9vfprqr2DEJhebHfpPeAzfPeop4QUfhKYr75KBKyajW1DMpFG",
  "key16": "4SLb2ZhFPAfBDuG2Wk6AoXjdSoPcHBicDqwoco19cfA7zhKPM9tpVD7GBwH6ksD1oNRzQ3R2FA1wwFEBPXLsngXW",
  "key17": "3okCQQrGmjjVBW84oAAYrkSpZqycDYD3BacuRKKPKZSpkMumjysGrkG2UDfKne8i9KooqFc8X3F6E9hwimEiuzTP",
  "key18": "3G1EAwGJRba2KvUFqghsGNUQ1f7CNQAHobSx1Z1CbMTjfjMoWjYCxKVXLeuZMx7CnrS2EpCjAk9qtvivtWvMSjPU",
  "key19": "31AdKbHS74TK39zxRJHoqdYsBB6z9GzxTBRQ6VuWUTgpHjPKLw81fMQ4uu4JNmCJQa55iJVAdNXZxRu1qRkY3By6",
  "key20": "5npAJdPb4PjxZzP379xMWwu6Pr2bqzCgBzyd2M3jEQS8GYBKVZ31h5QWEVAjirK8BFVZPaturpZeSwE4x8z5gFzH",
  "key21": "5P6JPe6G4NvpT43nwnW8tW18G1WVHHPsHPjcHjRKRU2kqm1L5iwf36cwWEijrjZ5U4v5G2NDgWhV6959PVNMd2nG",
  "key22": "4EZa1XWFjLT248BGJq9hUTppwwPW7b7EYNhkhGFunftkvF7uKMYNVDXTe4MfTyDhGF7WA7BCh9XyVAu8Xvu2SLyQ",
  "key23": "4qcC3guXhnA2j5949S7QZP7kmAqrHuDtn8rNjpCwT4bGJDT9nNpma3zpavtDpfsAKmzEFdJt5c8TXaFehCHE3nPY",
  "key24": "5Nox5F4VukYH3KrgU1W3aYtRCagsTEw1NvF2Ze7JjJmex4f2URazgUCP1Lo5GehaxQYR2hzGCB52PygQ6aj4D48V"
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
