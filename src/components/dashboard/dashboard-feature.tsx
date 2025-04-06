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
    "5etAeTc8qFybuaVLx4aZogZUpqBEpCYoNXBtaz14UB73qytco5rYKk43YnpRMjtkQ4Tea4bYSMfWZfWxHbhJ4wjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63CQmqFrN3H2qEwL1oS1nXjSGRAypK5PMNHNitX2sgnxYatS4Ww7XKYGVrm2fg7tLXJVEm1R77QXaDzx2YRxkedN",
  "key1": "4caNBuBT7UK1B1M4hsG7QiSabgmS9qHDDVzYWT1tWrHxocd9tkWHgA7wgv4w37aRw1JmmBxMLVe5s1epvbw6GoPE",
  "key2": "3NSXWPBykUKHutcFLys3WRx5uQXM7C2asxdjD82ATCfWBLUJodZaBCwJQvB4NxuMNXeWuZLCtNX3qSV3297B2SRS",
  "key3": "47GG8mFA6CcukrtLnqpqxf7DVFs981F7Fvoh4KPqgpofwwQ7hE2q2gGhsvguvMSEcyQ5nm9HY3JgRVxPJoja9C49",
  "key4": "5nnMZXgif52fYVveEi6U1ESdPBx7y1rBkREhKyJFFTqqT77EUNEcDyYa3dnZUpzswC1AGfURKMpUwVRmuARDa2YU",
  "key5": "2y8MziFpdjGruFtA5txLKFERfXF5BsVs5ywjS9BJ8p95biZ7gidaY7Ay5vzE9BVZFbvMqiMpqx1V5oRN6knm3tRN",
  "key6": "W5gcABdEddYVTcqoEsuuAVShk7WryWNCqDNvtc6D7N3b2D98jPpozdYpDWyXz3UPo3L4WYwHSPTFVtBr4mFfuyP",
  "key7": "5nQrRWRjuckSyQtrZiVay4UFzQNhJ6KwCovAotq9Yd57nL9xTthrikRecsF6WzuWhBrtKE9FyGPJY1PqEgvk6Q41",
  "key8": "3uPfwQt1RAH4MtHap6VmRGJBMMAx9RR7bofERpTWacePjKd45Rx1PF4pZmhSThhqLwdqdWGbXR7YYHasiJQ8erUh",
  "key9": "54dixY5kEUdYP8fqpU6XkAfx1nBLC3aYhveuTnzChJRpXqGAJXMsQm2peLx2KBt7HCh3JCGTWYjRdoC14MPdjXxp",
  "key10": "3w8tScgiFoE6vQAUNQws2w7MtKf4kYTxJuugrXhaaboypHBZAMn4CBFBcNEdKoKF2kYpakyzfEEr5WKm7EchLk1B",
  "key11": "5Rc992cUJHc7y3PHCSv7KMuHFSt5vuhnhV7bVmzEVfJSN2bwHa4ZLQHMBm7SHYW6JuXZ59QVCuMy7eQigVPT4cty",
  "key12": "3FP6CqC9peNyarxaTxMDzDYT8JQ69JcfW3cqGtKcckhhPHCddRNggH1iXwAdyW1xmNR47LGt4aQFJ79jJpQPKp2m",
  "key13": "4tKEikVaWusd8dSJA1y23SoqqSaGCeFio8u7oBYZfPXckhMccnRNXJNHiEgKPUX6vKdLQqyom1Y5p9dFiARMh9Ai",
  "key14": "rSGG23oBL7xdJURfCGi43g6FAfvdhHVxqyPmGErYLGWRkb6eiM81RqTNfwyFPGZVHXPimBAz2EEcG6ejtzJ8Wsv",
  "key15": "oW5PT2CEKLrsk5nKcHY649go3s9nVAtQJkvTRceYrm3dAgo5y9s3LiCQD29Xu7wpBozTnPtEhBivy6DA1QPQrmM",
  "key16": "5RdpMJDoHQ3CuKBbEvjFegAzcy1RVJHe1AGYFo8MxFNX32sTRX5GBWGw39Riaf1KpENtJRTkim3TveQMP1PBSUZ5",
  "key17": "2c5bWYwD9SGSTWXdYKtZivvmQJV6gUhcGfiTGA8k71dFZsV3RaDFuyH1X7txbJkCqgagyqGwpsaeKSDqv4BE2Wfc",
  "key18": "4YVXQvxh8zjY1ogfF5cCHkjutq9ET7Y2Zf79tA8AeEG4FTKB5kCv7ugaSP8H4BZC5XCUjmAWpDpSWogCrD1QD7Gt",
  "key19": "4xRDnjBkYpGaESmM3kAyhsHAC6EaGko3hmZkmWvdDkDA4aCwmxfMaMZbaLDu7TUxHNERrd7hrTGMYywBJzFQQDFn",
  "key20": "5QkEScJmdJd5odoq8onob1jk9UzhjdrtxQqyEMNRHxFkdp4UTjCu9v61fTL4SGQBXmjPNKcTCeMSXKHFLyjNqqiC",
  "key21": "4VZWEYT95BePkB3FRZSYNWoQGw5S8o9JZSWsC37oX56C1FdyLZs8KPFYgc3mmqUDxGSuxAQSLrzvbSHEL3p6DqKk",
  "key22": "ukNTRxTqWCN6zghHfVXV1TKRt6iJR2Y7rLN3Asdn1yFYneu59hTM66bZLXZ7KrM4ufwDCJqcN9mGHmCYicGQN8S",
  "key23": "KeASmtqkaLwFGt3GTvKJTwVCbMwwiFbFSrsPUeFv5L7pZ2KtGAeyVRLGW4NLEGUhFGmuCq11TVFkKyHVij5N8M1",
  "key24": "2W7yqX23pvXBY6bn6ez1bFuNcenfZVp5Wpv1YGXgs3DXkHi3ya8vMqUQEaYZnvFKNVwZreQeUQSYkgRoJKMAodbA",
  "key25": "5J6keC4s22Z8hLryw43cYkJfxFqiu4NnW1cRV9McYJWMk8GzpM9UWjNgsUQxFPiroLqCHmi1WM25S9YhqqczTDkW",
  "key26": "4zz6WFNZZJmd13ibHnFC8QmWD5iwprMgvJ19YCzHTq36ad8aPu7XMJn3PqQHAQVhbWmb6L1vRisLTWTjTxFQYsfR",
  "key27": "4GPT62me9PPcfxoSmjCqdnHezq6w8tnfeg35qtAU1q7fLpRuS1RHUBuxxz1keL6WGtNePDJvHE1txUFGnGJkjPEg"
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
