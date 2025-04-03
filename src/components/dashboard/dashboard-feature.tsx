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
    "oN1FjxubKRLTx1mkXYXBwCg1aqnY3bEKcHLzhFJVhjG27kRUo7KT9UcHugemRooWbuCkiB4jJ6CUAadfdrnRpu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4maGJAF2K8XEwvKBY44gzoPGyXngJ1gwd4hQDSPe1h2WVz67AV8RNsadNM6iGGqhkMZu9uiGHy8Tk4muqUmo4Fvf",
  "key1": "2YjohuGgEv9kepy12JaWtECCj6mqtqwnaxQFjkfHdU21dXWkaFtsXyJnfZ6jXx72St8gpRW1E5d5vSN6cLPQnYkx",
  "key2": "3JWdNGQYde8nCu2bkx7J24dUXVAc4RBnyZa43j4qxjtSmDRNvkzAys2i8EUoSFegYmTZxaGvXB9D3tKy3bkvxT3M",
  "key3": "4SdESvNnHQoUgucBhMzY2ftLcdUBPP55ufdLTFELhftWinESc1bKvJH1WveaUnqaajSHKZeTZF4Z62agBr4aCdk4",
  "key4": "2bCGKruDVj96dnqL9nWmuoYDGvsuDchgDFtAVKMwM1KkGHMG31eZSej55MPNUuw1ifHovP6YFTQ6ED9yAoFeMmaR",
  "key5": "2SMwdvNvbs4E9g8nLa3UgTA17mbUvxDDRN4XAqRrBxkMDwyyGwMMtpwWZNcyfCVTqn8dqVxp9intrU9zSyjSrRa",
  "key6": "2WB2gmTPxjRwtGCQB84JsR9mXGaZYHkemivaigfp7o4CsihEj6yJnuin1haxFkFBYJomKS5iJmuPYXw4shy11Eez",
  "key7": "427A1DbXSUDLaLke5MormWWPTvABFwwhLRVMV1pP3xPJDj8hWqmMuNRM8SiqJjwWdNX5otw7uYZY13JZsJKocV6M",
  "key8": "3S5wQ8PFuhFnZ51ZWwzNooPjJHRLQN8j81eMRsEPKu7X7ak6ZALRN6VZQtwLufoYbLhRyn3iehJ815pGdseVhGiF",
  "key9": "2Yqz9hFNNBagtaiy7rMeFPWnEkdgztQxXDTdkmzq9ERwo6v3Zx1FoMAZA62783nrHaexem72VzJiatCw5yUdnmjM",
  "key10": "54gXy6XbDPzUzmWR539dFTYCzHAmbf5dPXXZmjwV9FuwA8P9PSmRfwqzTomvxU8LHKqhkaWMUMgNDQGTewDcawv8",
  "key11": "3RfEzeHnk6evEyMAz8MnXa7kZSiyxkDXjh1FWV8ZYDaZVneEbPxQobac2sjJWW7UFV4X3hmQZbutPckao3kcvQ53",
  "key12": "4wJLJUgg2MrHTF6TyNuWXAsW39qbEYmkGS33eaDikHDLzzCyRV8ByyMEuvJsSBGYRHqRCFJ7f3GFGDN7RESUYgDY",
  "key13": "2qaZSoybSURjn36NyR5NafPrYzZtAPTJtZVD7RxnvKZQNtw9BVmt9s8GWpqFphqpZynzJ28u7vemy3DEKybaCRbi",
  "key14": "7kPULKiNEjPZREkQs2KS3ipHhgeMDzjSStDnKtHMZUHmUhqy6kT69LeCp9boTMAR528hVM5m7b8FWb6QA1jfNBE",
  "key15": "4YzjsvGRCgfjpCG7gjuxsgAGhnB8hAGjRc62czDXxuForEHZF9bP2RXkvbd962gaWRXbwkH51mQXPe4WpXDyrXsh",
  "key16": "5pZQtTBKEgzCcB7mSYi7iX3P65QzqYn5KHyvWif9J8LobfTL8hacqKsCNNtpYM4oRhA2ipiyAmP6xJbUcfa3FP1w",
  "key17": "5czHReWRBBD6bx3uyoGbvVftdzc1EeGQgcAAcR6R4Bb2iEwfFRzsN7xpmgULRUuzwqHo2ZViqkNWt4CitdSVzREG",
  "key18": "51rNwfbNiBDBpanwiMwAbrbjxb7hGtcjyGxew1qUdaae5YCoU8VxzBfdbUydngXX7atDvTLRGfDNVdiWmpPiP7ea",
  "key19": "5F6naAZWvepdD6cnTycWtfSLEiRxm9me28hNyrGa98YmpNEai2EeZHJ2wGZ4pHqTyaGQ6oVyRGVu4coqvASD9eiG",
  "key20": "2ExvQUsLUxeyLtbbsdy9e8CUTcTvjw1zPyuyEsQqsRyPCnkzRzyexYQygSegbdZhq8ZHx1RUAgwJMXZdUKFC2PvK",
  "key21": "2izDRTbK2V4g1rVnXbieJQJsAyLBjxumBxkCi6cXwq6pWa1htDA7Ax4NphnVXrcw3p2aEfcUupJdWrxn7QKjcpWB",
  "key22": "4ZuHFzFyCwWRNW6JxPW1bMFvLa6sw6GSNmrG9d2siUGD7t2JRzorSfpk8QUzrPQ2g7p37fFE1xxGW3gXz8cQgkyF",
  "key23": "28s3f3BBodhWRaWWJBAx7zGYcc9cEb6Q8PdPUxyU2KUeMMmSZiihfUvcYi9WXChaEJMtYxtWZrRb6hsD8SuMqmhv",
  "key24": "5D5aKmEafV5uJ5FRmnB5Soa7KCPUT6rpSfVqrboUrsH8UDtzBqeEtjn6i9uYqaCiXqtNPsrbS1KonfrmYsjMFZBW",
  "key25": "3c8zpJppQykuEtfTM7ov2hvg92pXms33PwZLJJ3SNBCJNSMFcGNnopSX5yyNHhTBMdnYpEhBUhkJqC1HjNCk3SEn"
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
