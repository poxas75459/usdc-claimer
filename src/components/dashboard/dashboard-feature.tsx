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
    "22Ru98Ek7rbokENu48a55KEFMogdJZHbTSoGREeszqx175LRNEjWZwkNG8W6FJAkY4nQ4AkXJApWP4eFXchFWxQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26nvb7eesCQzbCoCVxaSvjsJAjqd4s2pUNz2XMN2hSHNDs2RxF9gfcUP2cvq8UbHBH3Nc5Bkmunb8e3fsEuYgQkS",
  "key1": "5fYMBj86HWJvrejk4fYLYLFBdae3kRiRyxkyQwukLiHhLnjPF3AzzAf97Spai3HYtwTqbUPDPfpENuoF3fNxKqug",
  "key2": "tPM8eqGFX3noFGz9azW5Pn5f4GGHQqh1Nkm4KkVtGSUVGSGtnQPTRrSgHxrAaTmeKTDCMYZKkTqSHyv39Pw7fKN",
  "key3": "YzmkQinJ4C51pBDu6oZznN7PQgTxEq3rdKYETycorAAxXjh9QJwmEkHgKUjhDyFJ6ncRGtzkc8SjfV5qg1uv87r",
  "key4": "4szSfayxKzkcV1WCExicNnViBkJ9hqysWfw9r9vsF79ufSVGhnwadAZS56xUGiEjHbcASv8D4KRVp5aDAiKatuet",
  "key5": "2rJLBxmrki7Vh7V1RWcTLePKKFnKRc7wC7oJVvTGbtzswXB66KbAEd2kCWFBo1tWC5S8YrwvRz4yAzWQxPmFZ6st",
  "key6": "3BSKABFrbrT57Y2hugtNqxZfsshdDemPgcC3imayvtF25wwAhGBV3mexj3ryy6vUzEV1m9iLKwCUh2yfnE8epLeq",
  "key7": "3cZUFKZW59cdi7vxcYwNpcBMTtPGaJNqW9yYT77PeoiNddjqSZHBbFRdpYebvmQN7EvPotF3MhapFsqBtk8NfL5y",
  "key8": "2C9b5iQm4SYTtShCJDn4z7isULS2n8Arh3iu4AqiWaKVsgMs3qnSpCfKjVWtiVQ1Gj7yrf49wqeafMUWqSguyGMs",
  "key9": "3KohhVjPpLMKRZiKV64VC2VZ7g5YE6NY6UH7h3ae1RXbGTw6vY1A4c5DhpbGpicMkbYrzFmuzwMKyuCeqUK5iWu7",
  "key10": "2ReKkStGmzcWUH3oThLrPrfTpchq6PQXiTSUaB63JxC74Nej3GnxKL5NVw862F7qFgQKtaDQVv6HCsc1ntVipa88",
  "key11": "5BiqU9khfArKiqSygoUSz5v3RTA3gr65HyquT9yV6SppP981f8t7hTsb9iN6ZEiJDNeas1iHMewUci2xH2Xh8JrW",
  "key12": "55STgiy71b4p98VU93Yq3d78bR6LPgUu5q3i6t9fSDcYTut5Gf1Tvh9WtcqSRPsBE3TPZfKunDxYCkzvk1VdmvUM",
  "key13": "8xY81CoWgEzYB2iQXfnhSGgdS5CA5dHXsKDDLtLbTvcPYmxnoZqV8Leeds7ortkcpxTxM5zFEkK8ZEQTqFC6q92",
  "key14": "3paDRZSfRVXTnyTXsZpJPtKL4cgyHwjrSX7sJY2ERKhYRr7C21ez8ciwEdwXwUwXYGMVUt8h2Kqx6vU2KpRXTGNM",
  "key15": "5cBzzcodS9eu8srq7zzkeJUmhb5SqUCKGtNu5TsDqYhPr5P62Luvs8aXd9wYcrY1mBwSMK2Ko5U9ZPgvt4KeAmb",
  "key16": "YqpKVdg2rBME7yJbf6TzfnixMWc1YvcyhBeHf5Xr9NaxAtAmwkMuMHUiKkQmaATjpMeyGk988otfmaJdjDFJ2QL",
  "key17": "2NfqAPtUrrD5K5Usm5uAhVxYgK3FjZwExSZ1s14WokbC24giD8wQF3frDG1a1eHKxaqZ8mYC7jx2YtHo778JxSAW",
  "key18": "3neWNZ1pJZ9yWBfkASA6khbkDJDGvdavDtgxhaJPPu4n5c2KucRMwKKS5CsTQGzHmy6PUiJG67jpJBqbGx5qRvts",
  "key19": "ADu9o721i6GCRk9sEed3CVwFhDfe3HnMGMCWzMVk72zFr1MB9Rmhz84CSViShoMy9cSzuwAymhNzse6XLozU6a2",
  "key20": "4iKq4bohzvFKYz5jTo2dtL75QnBgbxxegNzUtmvYFCjTmY45frqdV9ahxZN7Uh8r9HxRamVLCyq3i83s2UVUEzTa",
  "key21": "3mFUgfZm4yYRhU6W8TVHBSyvoaQFsBSdNDgTknfYyD3dphj3iZcce82FBSRVFdDprTgi9Fz1CRtjjcCYoDZWb8cH",
  "key22": "2WXKQ7kAigKpnepcJMgZHn7xus7dFPyZtAqEDwmWAxPu1oMbugQsCvRYGuYEbS5bu3F57aGcxY1kvw8BC1pSxtLN",
  "key23": "5VYXmmNV2BLbHpUXr1wyoqT7PSQFFu4FQaUYCb3NMHAjFQ9paET44abbMhQVQC5UZtTvyFWnQThhgkhXQmDJU4Xt",
  "key24": "2zuJVPrvwzjLbenBvceuNubDRstL1eJQuA6xpHTKsWsnH3oKe8YvCV4YTBPWdjAzpCfqRhpHpjRJkiDnxCUUN1Zx",
  "key25": "1dF7LTPCuMomFQg1matjffkM5fyjktRH7GAjGA6ffnNhe7uB8mCU8sUfJjdVCRXhgnZ46d9UCdFnqkfgVYQW6mF",
  "key26": "4NgPZz5dwWNZbc2UEg1VPqWbtwnUYHU61CT2Xz6fGMz6VeDJC4ETyDFBVzh8SYp3XB1bdQbuLS7k2TmokdKuujyi",
  "key27": "2NLjstfHidSH2ki9ZXXxFyJ8BzwEYhN9cYiiRYCcoRsz8gTb5s3ipgnQa1NrW2Y5dQesrfFvM2eSHfkhpJp7NSo",
  "key28": "4H5cieVpHkqhiSfWBWRYQLJx4hAq1fchNXoaSMEUrU7RjtKZq2LweU8B84DoT45GdWTTpCr67Xa285dNDqqzvpBn",
  "key29": "Vg8TYMjLr9YG2CGei3qFG7f1HH2VuosoVr2dKoFjGMP2jsnrm1r7AAWKpwsndAe9skAKHLTYpSjREspqjRHfLDK",
  "key30": "4gDSRPQrf8riFswrcQbBWi1AnuoaDc4J2svE9oWqZKVZiQMcidTGBYromKmsTQLp8nu83eaKrTqxJzPXTytUZ3Zu",
  "key31": "2qnebp6ftJzUXkEm6nbN76Ps5qZ1WodrcgnVfexU1cVdxVEtGpctZ2HezcSyRDm4DbxPNNhni5QwbnZz8fLqEJzq",
  "key32": "57jJZiNSEV5w6V15b2AHAro1ThYcitpsR4TNRkhBbLbsAxq5XrDZBTeLLfWAgdAW4aqWNXf8grXmMxn6xdJUaNuo",
  "key33": "25Zu36JEZ2sZJXY9jsMqNFRh9sH9GNkpTgPu35XDeL6m2f9G7jRC5ktxQq4chDGehdjXgn7RsEUxpUyfZFrMs2RY",
  "key34": "4UBu2ivdFj6viv92mSvizch9udKcfkiErhi6a56h7su17WMLeHRmzs2V3HM5QABX4hpvCiSTxQhbwpQyzJRQXXZL",
  "key35": "2H1vjbdEDAU6PUk7YzBZGVZ1SPNKRajDhcH6pTLLyLeHsK4mFH7ntAjpUsa95oFEPC1PJDkQGm6xHV7bstXTuUjT"
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
