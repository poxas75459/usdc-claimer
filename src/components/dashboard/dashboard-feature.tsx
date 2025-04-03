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
    "KDSdNSLrghcuHzPp9VKd3f7mhu4KbkLbNcZMQ9Mw3PrgU5xBUNyWU6YahgByeW3fXNbreXL5bpZHgLgvdEZzyUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbYmHG9f6WqUpCgz8jiSf8deCU3u5gK5ir6kZQhtg871y7S4EqfhtTQoxcfBqGX4bHh8V4iWLZBhyqgGHSMpGvA",
  "key1": "5QVDv1rsZddHwJaAQWGRzuqmdtuzTJjzrwCWaM4rgVpNw4MZb9t6vJpWvyQnp2MkJUBA4fT6BeXJLAxY863aMEN1",
  "key2": "4DX9VxJkNx559Pf9tx94wcnitde58GbuEBLYkN9SUWSG2bAzi2k4cYSLdtYG1gbw2KPQSXwfYeAt9Kpp8qDw2YFZ",
  "key3": "pZWMffFE2MPwV6S1H4UJTyExjmmaKaNBKZwD5vnq3wEhg6VN3ERfB5N3LNY64FQvGhpfmvspU9ZiXKWjZsz3dKG",
  "key4": "3VF73PZr6bjPiw55NzatumBdEaduxYLfy4ZceLB74gjiLHnsZgiMUEWkk2eDZLZEXbKoG9nKEdALnA7q5m6Rqtx6",
  "key5": "3FZ5nXvD3zMXNBaTMQDEVmGbwR8mwuZUufjh9vmLBwQZ7rEidRhghtm6sPetSUVLCwo4MfRhemKHP4saG32dCjGS",
  "key6": "5v75SwYEU2vugJkNfkAKEsd3wkaAbMkAXW5b9Rgb7ifysSPHJE1Eo5rADyZBQ9ZDXuQzfVABZyngvezWEcA6jzbu",
  "key7": "5LGdXEUtasWySEZ5Pu4RsVbBFdkmd6piDeRZj432pn2rAedAxa5uWbFotUYq82h1wx3qmqtouYLnMmip2jMgdYEu",
  "key8": "63A1oDaLgLSRpF5AjhmkLonJeHHVGoANuk54pzGFuTjDq3DBvvdXwcfNMfGJf63tDAoW6XE8xg2NRiKVJd1uSiom",
  "key9": "47cCLMpAarhvcYVyc2b7LkzihgnFNpmVACArdTNpmUAPF7QbeJyXNYeV3c6pnPT1uQCkjQJ6ioqZHWjEsiPttULY",
  "key10": "3evBxUvC3hRMnV9SZAe4MnbL2r252kr7UqmvtGebE43R52e2tgqyiEK4gDGTBZLJ5VbQmtqge7xkGwzzvASXHk9B",
  "key11": "5xRP1cYhesPKZMgrRRSa5cwkMkRqETgGe7SCtW6GWt12HmXfYk17Sjhmy3Pk4zNa7aygcinq2zqfrCDASsBgvCyJ",
  "key12": "59yPtsyTKGofiP1ogngVRpwSYWpGUYvuhNgr92GEKH4g9TwqNoBKqTuWwAUZVguX3SDhBTCMS5Suiq6PvU6k6kxU",
  "key13": "2FrkyAQwEfZAoWcmAYCcAiHfKZQJxECo4i86xmyCMayegxAocZ3EBRXm8gzfQXFRHTMeb1LzzH5sB5WYwikpMS5h",
  "key14": "UpHxaEJMYMpvZcXaaugKZVnTejrPK2Uxw5iMWsTU5UdRrrdvnCU4DzVWHaHpp2XxjYkpmxfaYW24BSahHYtWmov",
  "key15": "3jLLVHteBgvALvYDzuhTgbCY7e3Q4gQLC15abHNvnUABVLKdBA5ZtUXisMGG8KMvzq1d2cumMMc1jCf9CyYL9JmE",
  "key16": "3LVXmsHSqkSBwfXpfioHnDtGeX87JxDenbRh7rdyWattySnPknytPsBQjsKMhNtv9Wtae8gVSwXGaRgsjFDYmwoh",
  "key17": "4tfG6MZzWJzBKwzoxouEQgNZdvSZ9vVfKYmEyii4UCcj1ZhPdNsoQjJnvgHgreHaoe84kNctCPxtN1qTSAEbouZW",
  "key18": "2PhtEu6aiiRZ2TyaiUhtuAQnpJtr38tBVenVNsvJyURFFjiDyVuY2zjmKFAci3UJorfb96yfQMfEYZQKqfsVurfp",
  "key19": "nBNG3HB6aZxdvfVf48MhtCA2c5iHKN7KktfmjuaFuVUzkrXfHXXub9tuMT7JNm8aVnHxdDTu3g8NjuLtaX1yuZn",
  "key20": "5kUkfoBZnfEzDQZsXMq73uAgErNUx4X9meXCVH8StLJWKgsu7TjFfyK1wn8KC3EbVgZQEPP1BPLZfEDGe3tHLXR5",
  "key21": "CrVbH24hR38iz4gkp46bK7NywWXMDF6P8g29QdX4KDaVfjgVtX5gk7tBCMtrYyvLZuaHSNggGYYQ1xudKuzCKs3",
  "key22": "2VriNVYToFowheQwJTjp8JyEmKScxoLEQse4qGSjMjWHVDuVc22b9mMkTAQoyAYo8WWHBuprTAqTykcXwBf9ExzW",
  "key23": "eiU99sapAcaiSvdA7pMz9xuxYSLzXcew7seykE3DVH3proRu4UxnEusNnYhdha7XvK8G8qNpmQvTQx8yvCvc1QD",
  "key24": "5T6KfphZHm8UR8UmYRvtha5D4CDjV2evJYVYfUFvXLuQNiLowmy1CMXGXVyVT8CwjxLfWKm2xDxFjCSDgVNueseC",
  "key25": "4PtPfDix4LkZeujYM7iJGbcMzERpRj9By4ZKSxrhVU5bdWvEQwgz9ZAGMpEtNgFSWQ1VzTPi8LQYkPsCiEAsvd1D",
  "key26": "sCpRspkC4tnxUTJnpELXkUkNnSJQaVEQa5u9T45yy2NkRwCiau8TfiDdjMnpGeNtNRJx9BwU2VUicFRZXkTe3CH",
  "key27": "2wi7j7G52zgR6GfnrwVgfcxtTpZDM89vTQahbdDeUPQjYvbZj3n6xViXbigogxxNPhjkxLGEyizDs2PRiAdjXiS7",
  "key28": "F4V3f29FoPcPFPLXAZHXcLVMb1rDYwpsrPGndpVJKwxq8zGCEYmoCYubfvwSRSBLk57hyh35cDCz9j2tDEs5fmW",
  "key29": "YxK5kQPpT6Hde87RZCNFUefucs9JFTX6yzSDoBkbcKNSYNpPqTMRh5AGzdWZh4iDGHuHFPtQ8PEUKkoLfJgfH6U",
  "key30": "3viJ47EJLXTPiXuyS2g2GSgz5KoRXWZSV8eTfnAPuUdAyjaxvq17nCbZzKncnqqavMW3BZY9tmgmjveNpP3FZQ7b",
  "key31": "2tNU6YNWsdWYUbZMo3NypKNNW26v37sT37gmLxZ8HMTwBD3RQTjXanAW1JqvqtVwVEhmpJ7U6rJerNdv91Xr7yCW",
  "key32": "3Fuff1Uk6wKcA4Sb8h69jFhK8GQECpkzW3SK8GZXL9xn7VSziEEFRuDSvPkJcn5nijFyhZusLRmKDiEhEohEQZ3r",
  "key33": "3fSTJNGJHxqMfXdDudL5pJcQJfTvCLm12Jy4v65Wiye7vPrbNSXPjSUq6YzzatgZWkjkWxLq1UstyKg1VW6V5m6N",
  "key34": "BtGtQhGJFqp8u5H12BDTmVeipocMt3P2xtRNKhkgUYMpsqwqHKcLhx5n8y71jbGkMFgjyt6xXEVHJK3u3Wq8EDo",
  "key35": "2E9gYAwkjV4jdcg4NB68m1BdJrYEFJMu43AorGQ7vfaWNZgnzWPjQDuzPMyUNw8KRRfscUyvTtwHkkFGyFasKXwP",
  "key36": "55AnKT1LcanFdqCpNZv5zoHALekDRbTA2CED4mibcutKBN4vPRE28VUqEPNz7HS9MJbauoMrV89AyLTi6fmqStvG",
  "key37": "2GTu9ZLLMZdMNsDbdW5mVKGHKnK91sJr3npiAmD63bPpWnbGyt2d1B9C1JRSw1RciDTQ2HaVdNNutFjvnrV2ehrh",
  "key38": "MDXHsTaxh6ZtdYyz8yfyEoubdMQ8jaG3tjZEwaHkV7vXMXWQG7aEHcAtABz1hAtBu8icJHgkutFDxz3CSbcLhqd",
  "key39": "3WcbMCYgSFxZJVXrnaoqtHiz3kuYinxM4HQLu27bCWWwqhZsuRP1ccPWytX1hH41Jg7zacqdmWXNTzbcX4YtV6qt",
  "key40": "JBkdJSvaEaKAbtTidWk9knfkWAH4tyUEsDb61SZK4ZNLkgng7AXwXtjuNdPMr6YJzKTM8J7vcwwQk3XCgyxpr7u",
  "key41": "4Brp4GXnGEcfCvHHNQtLkYevs7qZajZ7vEx5urzZQmMxJqeZ72TfA2JUPCgEfWxNniUZ4SJ3yLdtWnTwcGVPhMCu"
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
