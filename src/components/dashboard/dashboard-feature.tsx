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
    "3VJHwxYaMnznsKEA1wtENz3vdoYVfYRmUVCaP8f8Jr5BzA5VpgUTNzsUfLvDf6rGryLXjWbZAKKH5BpR2NKqAaMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XR1c5fekK5zaXWnod18tGEPLTdtfwgbBzBg2vEmGYCGUWuuKkbb4fX9ACYFGQQZEb3nBKFpAw24E2eqCnETXoE",
  "key1": "rJJRoaBaZTxpcGct4xUTXedKqBSEQXvWD4bfgdhwFD6zGx9GSKpfzrZzTBccyFCXvSH2peZFKhQXewTTZBFHXWM",
  "key2": "auFtv9KZSsPTDrVVZC24mZi2nuKAGEk4HY4eyZoPorBeFiLB1brMLPPuZyj2R3PfxUzJRjvdd5T3vhSck5fiBbp",
  "key3": "4awt9e7q4nrWS52VvCE5NMmioGJHuPyot9fXaqZCRksKHCq5SJYWXef9qLhFydfhkVqPxEdgQJ8f6mouZdURThyB",
  "key4": "4sHSS4BvtHC3GwG8EUQoyoJyVTK4KHmDNsaVQtGPQ837MZaJh33J4UJ5J7zY39oFQ4atWLiVaw5HfbmULPD2eRPq",
  "key5": "2RXqeB7g2QAX6hRvFkVtmUNwW9f59emBqstuUXh23JW5yoHuVPvAZtWqm3W9CZkRq5J8DEti5Fwm2KGUFbJCg8YL",
  "key6": "4NCuDxLCbJtSvpJN65F7jFxfwTkmjVGCsJYPdEKuCTKFfEHRXvkwckaEkPWph4BbghARVTrUkopDrxPh7DmdJySe",
  "key7": "2RMC3WbJxydWhuKhn8XmHd4BgE2x6ogBmQMo5NdSJxfXCn4WiLJF66t598i3zB8WpvMY8Hs5bqTUVBw3bEgLhW52",
  "key8": "5PsbwJgtXyKe4kAkat4spE142QAEJdwHYq3nNg9BgvZt59SBZ66SKFuqBH8mYDEFWm7Bi1yEkqCp1gGiiSDyfUNU",
  "key9": "3G8w8QQnRiKWgrGeRCHeDrwx551V8FochChE2JUCbtaXz6E9WouVdEjUB9uhEh8aQHj6FCQuVHJVvQMpcw3FB3aj",
  "key10": "5oMy3xBVMw1F876N6952tJApMetMLr56EwKGSRsFAQUfWP7X4yHKDg9gYaW9DPEFvfVkSBrbrPvNzxVqoM4KNFcQ",
  "key11": "3csnD2qC5wAVV7KuovLdPdMKKmjVdKAyr6NU66WZTbM8gJdNi2bgqzpuUjRsrKxDLndyk8ZA84tbnbiKKS84TyoB",
  "key12": "4dwUKK9mkuSQsPL1rt9FPBb2bqmrVURDHW7SmNQNhNRNqZ6fVdqBmhjsQGoN7PuekHk7FjmiML6R36W1rowg3jdg",
  "key13": "pFtibni8aguUpGTzr8qKpUKAporgPwxjpJRAJ2pjS4t5cTT89QLgt4kXFpRBpm9bZNvCE55giL5GsB9Rb7NRqdD",
  "key14": "4gqoQYev2xhPhLmDDG98E6jnN7eFdSJ4bzHyChCATRNLEqwHf1juvkXLoTXqn83EJZ6PJswAfcq6cuD9CXEdn91m",
  "key15": "33SS21GXLY8bY1mTptWeh12rGiPXiUeP5Ax95AsA5x6qnh5SyjfSQENr9D5ruiH7tzvaznN4zLm9GhgpJJZD2eT8",
  "key16": "2TrZrGVTN6xpu3pGwccwg1NaUoGTC55bFRNMCS2V8UrxcxUao3RnaX6oUVcW58s9PbzGqaegwQ1SteBGYLiM3UyQ",
  "key17": "5jEDdKipxEVKJptJEMu8aUChdoTjzckpqG6SDQ5ZUCkVNNhXgXyDUQKJYAasy1PUhJTMGV1zhQAXrdVHMtkq4a1d",
  "key18": "38EbeK7hR1BD6GF8GaDEUjNUHPXquLh9PMxaBznM3pL8ALTNJHhwCq9zXQywSWccHN944kdk6udmzHaJkg18bPM2",
  "key19": "4pMKC9EEhf6uzc56FsYrBi58zE5oYhuwdWuLABNKEPGSpcSTxMZGvkiLnyndc3HtT8hn4xvRs49MCVBSdnpfRmEn",
  "key20": "4HTJ4FY1vojsTzS9ZyNx56i8RN3vseu2s7C3HnYEh2w5JCT3kPrztPMqjhbg2TiVygKsEZo7AF8RXJLJ5t2HXGUt",
  "key21": "4RtDum3sbzQ9ktVonHSywWLLZhWDMXb6vVtka4Gyvsb5LMjfYgGTKRWFFoXJBKjcZNLPLs7YxMauPpZ3fYAnvw63",
  "key22": "uBCzcAo2XBPKQuNTAnCjihCHyQXsWN97RNFq5YUHQTx3o2XSH7VaHi5kiYpWsGG9Mu8gvamhHukPqFsre3LpnXe",
  "key23": "3FEEqE4PQvn1nFdVyyL2rbegLr8b3f37ZNCY3jQp2dhoaG9pcBJsomFEwZHmCpr5LCyAP16wKuTvwh998vhnG7Pd",
  "key24": "4aLxbRZC1Cdxf3sWfqmaWJrWgwMSeACWhGU3byQNKRoquUVn4KvQTQh9HDgDzmRcPs8Li3adqJ6uHrDGTRA4FaKJ"
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
