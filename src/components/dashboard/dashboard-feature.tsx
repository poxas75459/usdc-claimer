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
    "qwZqgwCLMdAzbnXxRMfWEE5oErEiuvPMzRS7fKcKyjH2Fbn4AuC2Y3Pw7iWweN5KpkHSaypRWRnK2XqXCaAyebj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C48iTQAtBcWNkLEWv5pLZ7DLVxyyNudpCGWypmNxyCBsXHos3DbxausDQ1BcTCHsfqEjWyXq9VtANBGgYC6iz6i",
  "key1": "CvrAis2kb2M5vNmT1qKHGWt6JPnPDx1dLKzf5oUb7HM7GWY7LHVdRvEFxbqiosiY1unytV2kpxXJkyU6FQtEMEp",
  "key2": "2PkwezrWmm3DyQDFaeG7MUaEPXtxz6VqVFJJRQeUM9uyavzEiH37jDfrULqyVwss96566XDtnC9ksZuYExFSuznX",
  "key3": "4637GNqkvSRhnppbvcmGm1hpRDYxuRxFYE3AsADtBeNGWKw1ttUxybaZnVVKpiYhmZmRSYCDkH3SNbgPms6zUwDn",
  "key4": "4HJSKi6WmCpr2pz2KWKKQXmbJWRct3EqpfArnjduRJwH9Gc23Ycyp6rC8ophCsDa7K5DYzqRmoU5XrF49k5HZ5Tr",
  "key5": "2STkA5RGdwbJp4rhvzTEoBys2QfRL3gV5suT1H2bBK5KtFzYzzf7uyny43kX7PPemyQxhWLxKXg8bKpZhPxkUzzX",
  "key6": "UrWWeUb3g2FfzvJwvLiSW63TXbXTnx1cRmxDj2BDe5aXygsksqMqmzFfxjv32Xs2f2gdEM2fzB3sMwhEKo3a1YD",
  "key7": "4XSpzK1FifVACrhZe8XWk4GmQN5cSALgqeFvpHYDYjLvXuWyRoHYRF1LB3RmUqLDWru4gqYUuZxL6vZTdwPWRQfX",
  "key8": "39VMTUhzQ4FAqxcpU9YE13EgBYYXctk23pdnswj9oNTP8bSDauJsvaJiD1eU6pe9zTenum35nFfSmCyWzkfsbHoU",
  "key9": "4i4ZKCvLJ854qFxnDCrAVCfydCon7tfKGqyyhMmJH5d4kDhzwq6NAqb44USq4kFtXjbiJHDwtVeHaPtgbayz8Pqh",
  "key10": "2YCMynF26FMfqtz1G4xRwHqXYZmFR22hd5FvNoVPCm8uEeHrx1uRWysozwGe1vmY6iNJHjHZ7YxduHznjyoXBUfw",
  "key11": "FxkoG4duxj1EBUnPfXg4Tqm4YEPcAY8C4qJXxCH1rGan1Lg4m6sxicphUNdyYsApZ4NEAoCR9LpLK8BtSDhTy8q",
  "key12": "4fY5FCtaBE3du36wnpBdUD1CGjKuAuF69PTuwFnznqAiw2wfiApY7naqJKWGijz4D8DSNBCqi1aJGeeF7rmJsXCk",
  "key13": "5tc7PYYn91xs1FwpqwW2SsZMCLjZY4cExHCCqAqFL1YNZ4skuNR9Dkm38a1NkqpMgYguKwjSs5ywnbdhJpDwsA9R",
  "key14": "hpsFCD6gUvauiZxgE4gJ6BY4hxqBTLLxZ6JfTNv7tkwwYvMgM9ZYG7wotZPpui2eodVBPJHfCg7s4SUyrYd9CBR",
  "key15": "5JxzEom5q9cKkWhPmw8Umz5MU4h59ZcjoNZrgH7LDwj5kJZdicypQtkNhH4nZ1En2tK6EPAgb9Q88XJfp3SAsTBa",
  "key16": "51VXLzhLBxiami6PdAVgLyPVBnqavJfzpAoDwyRTZM6iDu1qRWGeg7VBEeEH93zjqGVwWBym1dfUbpfzNb5M1mef",
  "key17": "2BCdFH6MmQrNUKv5TXmQZdBXuzbMkxq8KoGdt43HhLko3jyjp7rymBtpshFcrDkwvt4kv51yjvHmcG97LsBfYBaU",
  "key18": "qcBD7iPohMT8cHMBymqCxo57RCum27gFLtQzeK2Rq75ch3VYBYhk2rkwCSB6rNC1NQbv9KDqhFtevnwZr3TGZJk",
  "key19": "2ijjSLEub1kTQ4exXbk6TzrekrRj1fZoGKWHQ1UdiUSsPAzdvvFgLPtEWFFoicwxdUKXDzAYcokQHXsz2Bjt5i8J",
  "key20": "5qcku54BdLd6cQu14Wnr9vs7oyH9Nck27bkyGsWArjZdQtso6i1QphF1tT2S3mFBb2AEzDyBCQMrFABsEZahVvcZ",
  "key21": "2193ewvJV7aWeJo1vRARbu1VsFboXuFfx98tPXwWqp43DjpihAwufKnuKVzEQRDikwjTpXobfa1Hv5X7pWQMeTHR",
  "key22": "4W3jAUUYnVRKUyTiuPgmMDPQsoRpEKgYKom5Etqe1rbiNns4meQF2UtMetyYvncv7mTUHNt1tf7mxsvCNFYj1J45",
  "key23": "3MxMtrQz6rgccz1E5jXwQak11t4yoA2nYaYDHUaQS8JbLH9B35LaDYdvSmK5BJ5U8A4HJH5oEP12s3rocowRDDA8",
  "key24": "3nnpUKPdAfyDF7o48Lhowu5YGmPGyFPjGrYurPxjYNWJ6YX4VDVFYeKvWrLvAnpqtXmeLPW17qXhSpEDmhE9Ee2V",
  "key25": "3rXFVDy14A9mbba8aD6wZAjS7jhRGxRMgzY3ETmge3eQu6Dr5svBuFVsKy9ikL86DUsNaYNXi9JaEqXWoGmfF7M3",
  "key26": "4Qow4SVPehyF6rHt9FxYQWY4svbHVAAi43gmmTcrSgmhuXUTzxrHSMmf1QjGRKc7AHxF4FUZFhJAJhVJHu1tA3nj",
  "key27": "qHWSC83KFpKqcEj5s7SwHwjUkufjJBnpjaC9GiZpRg7qNs8pJDTFmPCPYxPZNENHB1AB7UWjxy3SGWbT2wJ7iBV",
  "key28": "3fgJEuPzM2mRUBuejfmZGLfGQZHjFgQX1GPQqXe2mVsVbwj7L6Bsijq8wSooDoy1yFN5h7x9J9FJr379gT5XNFjM",
  "key29": "643Vf2MvwiiQpasTxGda6sYbWtwtawkghZb2cQK1gpUjSGaL1fpcDFrjGKkcchtU2Z3hgfNiw8MocNhLSJVFt9W1"
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
