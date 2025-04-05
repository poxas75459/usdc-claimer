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
    "5aJh4oAjamvQ9bGnyg8hEZLf3AGEYmKBh3A7L46VVQtzoaCS4usKf1DA9yYYWy6FK9wTGKXtuEcHE9DjauyDtcdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59oCAreHRNwibgez5UuCYBjSf5Y2EDtyKQXyoqgvPoqg3B6hE6QrFN5pcbTdAeqh5xkNXdC4wLdjVu4J5fSv4iKm",
  "key1": "1pT7ZdqivS71pbUWgfquaiK7V1PFovYiVMjRHRP6afu8DBvifqFTdmZtLVQcS1xbvG3rCxrnMQT7zdpk3u8bGUp",
  "key2": "65NvERgKZCpMag3WTdG8zhWHA8rXPupV2J1iWXhAoP25D8F51yok7h25vv6UKYT9V9ibkeuzEei8bGxcq4Xx6k61",
  "key3": "5SoCTLFgzxhCnMVRRG9Vf6qEq1NdRMvTDS5ktLfWbbLUT93BmczPpkKvDfoEBDsrLLBPifiYKvySfovEWDNpZPT3",
  "key4": "1iGckctjzZ8ArMoyEsUxEgfADiSJKHHhxtBtpTiET6ZN5gZNTTqo7LfdBtMSngPHcnT5rtPFMgeyrVABrLqhzcb",
  "key5": "3WaJyA95nLBy64gqXwiQydVud2G5ufmdXGbt5oW4JLLrommPwdBdjK3Qi1mQTnuD4oohmtSUkW3axCtXesnxmLKJ",
  "key6": "64w1puBEJXcg8K31JpNi4uT98iv96sgiSGNkqBN2uSyNpHurAp2YQWMMuWprAaNfxCSYK7Fi9UZUsAAZ4cPAWk6R",
  "key7": "5hoDNwynK2jpHkM88vnAC3UHjwQQtV5eMthNQvyoCaLZjBfviqsW3nh4CxGd9cCuzFGBJvXzjBNrda7gcWKqFzeM",
  "key8": "MqVCmLv2MQH5LSKBGm75QCX23mEoai58q4LpZfMFkS9eoEGYdGBRhGdGsTC1iyis3Cy16LGgiD4QZp6aiV1vyDk",
  "key9": "3tJM6KmxCNXoYYRQM6TLJZ1Tm8JDuERiRz2d1yHtv2tRYFYAXBJWy3osPfRC8xHf1eHnY6zQoepGtGNy7NtbqYo",
  "key10": "5PWaMYxFV3qfAifH2e6mXgA9cgeEDdFZdvPAtUA74X5t7wCJNmNjL54KavNYhHYuJ6efd8LBExZgJW6VjgHegLEf",
  "key11": "2LryP8947mLsSYJKSt6yWnP24KYfF45gC16M4u9w1K55GZbN5B5af6Jzyv86uYVxKAmk15s7DCqgyT8AKFRhNd9w",
  "key12": "4GWGG8w3nrxrHxVvoXvsrXKEiYJUSjVfw1RjTAGk1oMPjQyKBXRwieeEtqmThSe3u4cUJRBQ8AcvpSqoFmQ8advz",
  "key13": "25mN4BMWVvvA9mN7S8eSzjUzJbydejZZ56KYmAcpECPTF2ZSNhctP3Bfmb4vdvBUZm2ujrppanoonLMsfWi1nhRM",
  "key14": "5BDhFwJCbuicEtgJVqEtQ5quAHEsyvXRer77obztAo9ExNsAXzyhS2UD4rPpGwny2kTV4g77TeWvB3qLGqkXBghj",
  "key15": "kibwoMS8eHBtPweZbhKKbaz7LDUX1d5e74yp8pMema4ouqCVywE8QKaiq1RnoFoBNfRdAzifkjdmu39aJC4Rctf",
  "key16": "5A3cA6Y8mjtvxMVC4362SHypbFZqYD665zticWUM14ujbFqVDUgVB39U9nJ6Q6XLo272UxRmCjx9D86N1KYqB6iY",
  "key17": "3v7kvvdufXDeufDK4RQ2uUS9FNFxM7v4Ydpi52TjD56Nu6N7kYG8Wf83FqYR6D7cW9UszsQQH6R2UwSBfAqA3qqx",
  "key18": "3dzh95Rig7qNLW5fZhWA5wm87BAe322KSFsVaXTEavDhd1WdnPs1kwzpy7rJeCzxuY8XMwFJcqthLT4TUUMgMxhE",
  "key19": "3cQkxbR9M7oK2QXcRxpPtXEMyMgAMZ9R1haj4MFMKP6oqtCkYsC4pmLrvmEuhrCBuASHXh5R5ozrWadaZ5QGmty9",
  "key20": "43EdociDoWYCWye2iFH9gbzQekwLKrJ3VBcow7Ytrzd7wU5YQVDsxNtSwe2dFC9R4XSEjm2u7NHwHykGeq9Awq95",
  "key21": "EV27Nt3WXZQsV7e4bJefDSdRXTTEWqbNY9NzRKrrUMuuWf4HkhKxsuz1p5pTnCrdzz6gsVNQfos4GYGXC9o5qv8",
  "key22": "2SU3pxvzVX12oUn4B5GXZ99b9bygSbBD3jqLAq8goTrxq82ak3a1aYUrrx81GQ8dcAPMs6z11FBFUW83rG2C7Sxj",
  "key23": "t9jUqspzNoCmeKFxoX8BHZGLV8ao47YnX1G4MyCKPEtQfDfPXe4yy42MVmdnTbDRHkJWHeGVeTVaWHtjcNaP3dz",
  "key24": "4KFMQpvpspWwyqUNa3bjx92nUiUd6Qe7kqLbsb6zYy4PMKUNKxnbmmJEp2jbQX46wPt4TnBe7huBok5bK35x7F6G",
  "key25": "4XVmTtvXKwXpF275r8SctBj3VP9GB5bPy7BbgZKyL2DhnKbPB5SW3jrLA6d4V8rzgjWe6V3csRVKHgpY5PG3c4kY",
  "key26": "3wzJetKnvMqpAtXPCRcV56VuqH4hoVT2gJFA47jYTWA9pR6xgtxjSYTDm27hgTd7X9yrrWXWBrC1vJGzpXQV9CqC",
  "key27": "aEJuLJuX2hJM82eThGCGWHvZ441oDd9HqjTZWyrUAEKBEAZAd3r9iYy4ksR94wzULkAdcp5dZ4kUNPQnkwSteBC",
  "key28": "5zwMH9QavrSt6jMjkEeR6WRyMXtjojAQEb4iDqLw3TVNgaymX85uU75xVbUdGj7FG9ZTGMDFSPqCHcjxriY5FXvX",
  "key29": "74ZsHXAV6451yByocMweeo4ELjxLGXVvGSurMja7zpSM8UXh7B7Su1HuHt8YdvpaqgWykQLUgRGXhYVyh4j7Ue8"
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
