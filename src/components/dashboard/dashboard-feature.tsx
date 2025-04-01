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
    "5fNeVQEEJUXbDaRxiEp7772TNwmto9nu4kUFejsFhhhENLUKgsoZrn7dAd8ELXPnEEPzFq7rVnfdpCbErFeQDXdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkrh4LHvaLmmvnYvhcePfrYk6RKfr3SinqsyKGPrz8VWBCnBVvHH3VQozWJMUUBiddRKwdXN9UdY15EDLhLH9qC",
  "key1": "2qAj17eMyvu7omGRkLV2WD9B3orbnxeMnUFXMuYmJagyXrGSKpRSBiRc6shMzwXRtgKhBXGBg3W2Yqcuva26KEjo",
  "key2": "HvknSDCK2yb4BoNu84ZfYB4MUh9ai2an3waZFGf9egN2q5rSUbHJrXimeDCg3RxqSHLumkUfnG5fd7PeywGQRLw",
  "key3": "2Rh4UVhyjeYcB6tciAu4ZDrQxTtExoFJXxUvTh5fu27v774Jarc7nr8k4ntXp9Ms2VNEmjXihyNCZKTBXYyeDhAu",
  "key4": "4jgov3yFfZdwaxwjRsD94L2jdTTsUV2ErddReJz4cMSeDmHqJCx6mgmTGM3e2SbCa6DSMXr4kbbjNZdGK8ra8eDT",
  "key5": "LbutN5pjxE4AuKKbgVpGNbBggfkkX3fkfQpzmFPr7yVt6ojPPuCJ7vJa324hNMZ1gQVzxX6UFAE6weMSiuW84qH",
  "key6": "32AR6f5bMZ2SLs9Zb3tSqTxvFDB2e1HBdJMbVVhhvrCCVCPaHgS7tbgYwtZgY6cbKZrCHnQYSsAQmbGkVg65LifC",
  "key7": "5hypv65DrgnA9wMks6kk4eA4iWkGMSmKw2czDbxz1S6ATBCrZgMoAWVX7HYcnCPb4K8CkaRK5kNDeTrSQbWCThn9",
  "key8": "5K24mo77PW6VgdVgWVX1UMcVfEnJDmpHYyZ49PibxEQPrWp7bd6YSqv26qC8JjT6aPZ7pcQFqZrVGBeoV1ka7Hij",
  "key9": "2tQJpkWgJEYcmq861A8Y2v688njK1qnXwfMSiycCn5hDyGV7G8J3Tz583GuGo4wH1JuuTGaHBFjmqvT17hA8KiUt",
  "key10": "2DUxbnryJF1TJNGgUnvwvjqExPrVEPVvz4pnDc7siJj4hnNX29kv4fYhXGXhrJPqHjYjRiDxRTKVkycmG65iXJBQ",
  "key11": "2m9oRCFqpb1g43hF3W4Z1P4aKZCajYdmz6gtZWeLieZAKHMsweBQNAyzsnZdxfWo5kAn8Ao4bP8rt3JWRa5tizY9",
  "key12": "56KZZcHFvRv9Hvx4pfZ4p43J9mN2RokgLGu4APMiCxsNDRypN9d218gbrz1snMDFtfrH94TTedY5dW7qne7m6AZy",
  "key13": "2Su4Aq3vXq3wAFZNmZQvk6XxMZ5jWGojjxNzta6NkN4apd5dHcR5JUYqEqGGTox28qzaQq5SNh3a4fWGXk5Ut4Ty",
  "key14": "532a3GSTMLuKaBqjSYMaab6nmB8mR4ZCMDh5Sx431ygkkXnfTbkQvxgdk6aQQPVAiPwNWLMNmnXnyY6Lrvgdc6y5",
  "key15": "XQNWVYnWrVEVJ2zEmi7XgR7R51YFRP5dPmo7Zb7aaZr7vYfhDWApXm6vPyi9MC5dV7vrGBT6sPJWNmU6T6tyviZ",
  "key16": "2TwysCpemry2zgBHGcBAXajS41BGLMsNy8sup1LzC8YqERmR9nK7kacTrsUa1RacYBxLqQkzqc8KkTD1iyas4tey",
  "key17": "2he9wQeq1qf9a8edn5FRuqN9RTf6hhgiZscJ1zGf5W88VArPJc1oHH6xrM6BtCGwiG1EDGX81Gq3ffagAq8Dfhvk",
  "key18": "2gBT246R7HSQCzam97B2b8MPwTtVkDVj3jHZTEuFYx1Zwgjz4fzormptn5uxwb8yekd4VB9XmBo82nHS4AMU8EWD",
  "key19": "5aPnSWZvzQsoo8qzREhg3KuBsdtJRWa8JyDoMu6Efre8f3X5m6tke9h4ckNEnaqBZDSvjXyP9DG3LSfGeqrLSf5d",
  "key20": "5ibDTgLgFt3tueoKbrZbJkW4UU4ehyb4mEhjPxnfUNNsiyTygNuFPSfuCiZdfktwhiqvEpZnBU2vZE6tagnUwR1R",
  "key21": "5quDuzUraus4Dcn6vKpWwvKRb7cuFDKGK2nssF2s13xX1CfbH2UsM1bbCsR73U6hYKWvdC3RL4VnVB9KtVD6ejSz",
  "key22": "3DeNFe9z6ngrwEADH4CU29wUGYyuZedJoPCsucx2JnPDKg9uAbvd9WKx28vgtZqKwVPyCDEL5ELjdD1bv8ybmNy8",
  "key23": "gRoRrkNtW5ZXB15TTgXFcroN7D3xTxta3bSSTQxn41MrgNGLZCViNoFsQuyNvYpsWUXiq1z38C8AaMxf6JRZfyd",
  "key24": "3QDDkVcNZYj9oyWtJwM52q7UBiHV7NFhFjWiG8RRJPve3hCA8utiSLfjPbWT9wXugg87GbetJNUL1gjdTd3JZK6m"
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
