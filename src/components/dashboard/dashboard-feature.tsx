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
    "5PRCwJBwW5ssTLnP9FreRKdWsHvTtNFDpA4ffaRCTttxdQRz5onaMkt2rSC5CaXTpQQc9viydinMCRHTZWyLjX9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56WUmwY2TUy6tXfrBGqnR4EfJ6ia9iS8akyWbq8YWkw77q2xD67JMjgf3wLGP9FHzP4cQ8RzGnkN2SpHE7YPHK6J",
  "key1": "2ixAzbHbMSqLfxs8eTFsGP8GESbUEovwcd7LcNrN9BwZF7WNgqsbGjnc8d5mLzodqm1b6Ld37WuKBqnZ4r4k4JZB",
  "key2": "2ocraUYtu58JvHDW9f77wrpsZz1YhQ9kAbssuvJuWqJabVD33xNDycxsJYABbZBjREaf4kUikTXPS7jeyssfWBC1",
  "key3": "qfSnukbRqrTX2bRDHbtwCR7iqnAj57Ajvn7e1w9dCddScGirFzXuRbPDwy5X3ddUwXvckPvLbmKTKVPb4abWinN",
  "key4": "39uKra3tapkcpczTZKCFZXCTS8QbGShssMA6HY8eFTZLqXhxHfCVtinvCowZgkvLj72ymw6B65bB8DWC6YGwCy4W",
  "key5": "3F1mngaBKn48UUfqu7PFL4cfunf5LjCbkongtwCtb489p69FmuAkvNzax3GTpKmTwLot2AF5JMaAtHRjtfzPWQkt",
  "key6": "4AQTwh5ZgQEkvatH9kpWQW1SKr7r9M3T7dEdLTK7vRjSXqosnv3VQr65c3FYYqDvsik3wQwcvyY2x85Mq6zQUdvt",
  "key7": "zXbz9PUfp4aUwPx2aM2nk6iPvSGa1o5NBQaKL72GNy2Tkc5gH6qAYXMCfbAed3fqftXcvpBi5AbMdzfokBMAtg5",
  "key8": "5vouTbymaGxnvK8zXa6LUS5tdMJXQktWWKQEFoYx4UE5oTy4a5KCXGTMNZks4NZhBs1AUZmvGj423vtygqm624A",
  "key9": "5XVDy1WzJPHbPBZWE4Npvshn6QZxnZEoBiCqKBLBDTewMsUPtK2AgPQs49RkMcPbC14LggqpYfaq45or6pvFioY5",
  "key10": "4FXyjUP6watjFTqoxUCWbyEX6NezyTUi2esnNpXVw5H39qcrNgYBS6gTiRR3bc4pur6QtjEUKUj7y2zXrHJb4GHN",
  "key11": "3dNv4T5w7FZBfYaJnMnjhDbjzmMz449nKEwoE9ARdd9nCXSNQYFJ1QxEKgSvKxv9kBqyNoxGxLr7YoRVpciPKSzS",
  "key12": "kkarKuxWJaGxjx913hqmxucAQ1cBEZ9tMEwiq2eWFfxftcKi9RF4qP9cwc74PDVtCDKuUKHiLUfkxVRYKzBj5ty",
  "key13": "4c1QD1H4ysb7CwSBhgV41aBai3SmZrycURbvQ7si6pYikry8xUhbZWjzhUVBwMQkyR2uFB1s5nqNqogoafyiHXHE",
  "key14": "ej99u7r2ijKcCeWP89hCYBTVADiyYxzhqTXQ5vCHCo8Jz8fptCiidenrCTa4YRtSZCQpLdycwcf5Cjs9diyQFr7",
  "key15": "5HZYeW97BNgxt7ZSovhXV29ZhRuZ8JpoW1ofnhTwBo4tvwqEgLsgVZe61ck22AXF5YzaSmNy9KQScJzXyvSdA8QH",
  "key16": "4GBftj9K9chARJ2yGpkTws1zxWvtFL3JnRJhs4RzKo5BziKy4dTvNct6J5kJZZ2pPhmmJFg6FCdEjFQAs9S7E35f",
  "key17": "62YEQQPRde6WYutM4wLC8wkcPjff2c6i6Eqt2GGpPxvjvZSGvSUiHcVQ5rxGWZVSTbNvsWWaJ8iNhUv6MWy9MN2a",
  "key18": "4pSatvkcwNjPDz7JnD7XfnqKvUhCfkeYDtXWqJBC3gy2YUd2fUwTQ7z2BR1wE69YZMNBqGsL5usht2GhFVZ8fnjn",
  "key19": "64dXJeP7mduiQiSDqSZZiVVf9f46xNxEvCPy3cWL55Ro6KioZQZeRrQGeCpUvctKTQ2cXa7rvfUtiGHzMEDXKCdE",
  "key20": "5N7Hh8uhPMPWXAYDCJoEuMNcLq1XHDg6zyozGgYuk1bPge7x99Ju5NeXQmFeywCx43pkzvrgDsnwZYwQLj8SQkTL",
  "key21": "PyKWqaYzqSemexyL9GSV2FMaaZWJcSAV1AiSKM567dVGMazDmMVRsJds7e3qNNR8wB8ckHos4SRT1VJrwCQJ6zb",
  "key22": "3chMhHi5mmr5GHjmZCZYDoaTtW5PrzaQ9NTEukpeKmmEFSscDjptFogra5aqxpi4p5vHHPJoAWM2bwuYfiaZDmyb",
  "key23": "5iCNVifCmCMbucFruuzPyWjH4tyjARJpVzwYXDc8mkhPdWkj5fGeq5mBJ1YeeUQKgFvCUUXEUhCHSSBUKeovviNU",
  "key24": "2LM1Yez3PZpKow4UdzxStHCsMhQMZvnmiHR9YYYM7bjDnxSbxYbH6C1gky1osfvYucNAmjt7iNKjiZ2fAN1ticBB",
  "key25": "3KPzU4E6QM5QpxVeEziv6GVAqkdAjjGvywEJ2fUJ2L2Lr6ScSNSGQng4p8jnQR4dpf6yaciKTbbVyvDRw6soLGQj",
  "key26": "2cH7W3hsohfFv6cAx9yncWbZxW6ht8fkF8LaxM4duGXKLXpVXTubpMXVw2oVk4dQmLdjjWWmxnF6NZH3PqauxU7x",
  "key27": "5WpacvZhSuLQ8xtY9XSVE8DcYznDX2MxhQDHkPHtACnkHFbUA9bZWYyK651aEcxbe8WKS5KQRQzEQ4xQ18pXEdFB",
  "key28": "2armLWkpzfP3ikFAbhm1wMFFoCLtYyjnGnjnzv3RpeobgqVFyoJa1zKfmak6Z4vzC6mBSWU6xL7XTXYKQgck1bbx"
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
