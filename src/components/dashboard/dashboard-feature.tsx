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
    "5fC1pRnCkAKRTpAoF9SJEPpLaf7y8G9TAgjzDa5hVDbxKogpCVH2qXfWb6RLHc6YnYbPFtFJ5Wb15vmNo7GSgVYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VriK75a4sUwErn1kesszLHF2hZw9NtPRAyXWMhYtYGp9DrRu8fqkHV8JPK8Zs7amKzgBv85Xz5wguCBwbo5qn9U",
  "key1": "3E5i1MAnv1PsmiPWVZDN2hsG5PFBynLSVsVP3GeyCvrxSZckTfxbJEKVJN2VALFKLtK74JaFiYBxRxcLNLwcC3ct",
  "key2": "51rJwrQmhyYwvK3hcJQjgN33J2eikFXHGhsJyaWsCYkdmjL1L5PjhYCCcqoErF7bmnpfXvTdiAyMcM6DxmDc1iYW",
  "key3": "4cBxXa3mSscvWJ82N7ZmM9q8naRKES36njJdVGXDJs1zW5srtXSQ9w6xd3yEF9aggSymFGMoqFgM3M9nMRkdaMw4",
  "key4": "5bYnucdamVEHz5AKWDfXLAk8BRpzJRT2YJNTqc8gWMY3M5NNHXWnaHnwwgvZ2QFcTLfVoxFAsQFiX42Z29KQwbuE",
  "key5": "Y3V8twiucvVprtrSYKEbeGarDLTBDedJCJfxTJoc9V8qisLmBmMxH458WHJmbdt7ELgSKMNo1gDAAGqGHBpdgET",
  "key6": "2ZPMhdWutCa3eu4ikkr7vgVwHKjaZmx15KJCpEyrzqinVFrtGVnVSJpaQb6pCdwUfncYRiw12hmn9j6AZJVrB6nc",
  "key7": "5ceDX96Zbw1SRHseYH2W261Ec1mtR2BmvpkUWy58pAxw5ji7yMPHez2CQnPgBdi9UZpcW9wF2dxXCTnfyfUoM754",
  "key8": "4A7AdUyVovqgpuxSVqtGutknkx7ebQL5FZDfm5gd5mkBkSj8dhHJA3p1g5YAmwzQdQji3K12i8zqcC3DBUfYTZzw",
  "key9": "SFjNGX8ir7hxKN3eSiwPxWVd4MXZkniDftaM5HSUnbTYL6mUKjYQXeKPouDU9WaVkRkcdXH1HZyppiKpfqux2xy",
  "key10": "4CN6GFxTgeR6G14FqcyfGu7McGuHE7wZA6ohP6WwW7onPsMxTK5TGDfG6vNWEBKCmeLc81R1sGB7qyF6qWRk49gM",
  "key11": "3rSvBP3NYt3dqMqtd1MMSxtApB2emZ3oANmDKBPLQQdrksxiDEAUwfpxMxaqouQebi59MN2a4vdH87b2QoFoxndH",
  "key12": "48P9Y42AmBWdPPpiwoSnYQnoXk5XECmVrE45pcxiZYP1PMsQrGa6atguyMA2vt5WC7S9HtaPHV6pbjmukcELw3rB",
  "key13": "38SaR5teZukC4SctHrp6iAYZYUjLs7n1DksguccT5fXVoTXDmPdELy43jcLtgdW7KNB951KJoCvdicpsJ6dwr4Bd",
  "key14": "3QSTPD9iYuWYpUJagiVwpfzAepdPWrvCzdEtqPfQfcme1oUfzgomiT6N7Ju1UT1H4JrJM6Zyt8BPK7dyziZD6gos",
  "key15": "2VmhQcNxd41UBVUgZMty48wEeVtby1YFKaJ6yubvKSB1Xj8mVXHnGfK3PRfzbTGyjEcEmNLVseCQMh1Bk5xZRCZb",
  "key16": "JcD1Lj3ySpZJtn9tz8AxXwPkc5FbMtxUvGhJ5mGmgZaNeYaPKSHD6WbA3u3SLigDjHZrGTJqHbR9pQSt4gySK9z",
  "key17": "459qXWEEkBESBwTGXhbY1pM9uGSrEmptN5X15nZeYFZdkKqb9Lnd2YaNXVjpeZjAnGbVDMW9keQpSWHm9Xp3Vkza",
  "key18": "PLirRwoo46AxsF5dS73QQZT7TkyXdtLoVm4avcN15zeSABS2s4fZCgwB7VAtqbpd7oR3NycYdo5MSwaDmoDVtdq",
  "key19": "3HpdK9z4ycgLtjZSJ3diviW2yC6MZhB4KQeyjQYNXij7bmRgtrGpLR3dEwbnEfttj7NLqAfafigJBQWEYxQxHnJD",
  "key20": "2Vask5zvC8hqP5V2ey1RixUCwMitt2CAWNDEoDooAgpTxLZb3BDnSiCMhiETuaTofqrccmGr3ytcyJqvpwFdDcVj",
  "key21": "4SRMM3M3PUQY3AY4zAQ9FjkZfFy2JBPf9foPTVkEn7MJqzBaLk5kycXngQ1fYbmxVC1v5WgiepAU364TzEmem59C",
  "key22": "5yZG5AmGtepoXLvTr7fbY5zEXm8owsVK3n3WfMcuFWwYZGqDGRSBXUnjNJT4v1BM36oLrhwBagkrmjgF2w3ZsYJT",
  "key23": "3YxaUrxzMnyaVC8sGm8byyDciSkKg6QaXUNCSah9M9WnhfrkguHdV5ryXcCLf9rWaevnb6PsxRHFV5iv1bXyJSpw",
  "key24": "5J5k5iNYS1PBeMjyH8aGLM2TcRkxmS1M5Qe5UyR5FQcFZ5y5uYpLTfsCipbx4Q46SrHsKPMmpdxFyDpKJ8NBkQTh",
  "key25": "4VmF2bp87xPp18wu8ZEbt6CU5CQdCBJTnxSCyRdE9GsQf77j3CJdeCzxVuPG5uRmEcBFcpZ9TCtqtugGSsmhKvit",
  "key26": "4tcSQ6Ni5FTEr8kACCXHwSZHhthd1YFmQJ4qTCrSk84TuufP3UZo755UrHacFJ2mEBewwYBe1B51UmvDDxC8qnV3",
  "key27": "5N3CKfv6nrT1HamxVeYXaNoBW4DR69aAZ1kWJa76dEDFbuWTp2LLVsVPVdpRBfsmcKaYsCdi5LBMDC52vmxypKye",
  "key28": "MrLKKBvcMDMMPTmT7GTVW3YmwWDme1L6mtpraypGxo9FpAQZGcH4Mow5y674KPGvxxGzdfCtrDZDycC6sLLgi1b",
  "key29": "5KM9GJwSJYfegkyt186nHnCyr7St4kwcQsJx3Jpb1ueKf8wphiExnk4CgsdhGygDoueDkQMC6HyVNeiJeVBMom78",
  "key30": "33dVN7JP33YNvyiGYftQaWXqdn7TCXgZPrARidrN9LTvnptanj5L7WuhSC36mLGDZ9B6jbUntvZYbhb7oRK1JxMm",
  "key31": "3AFA6oVjhuYkCw5aQ3Yn6m4VeGDy28QHLCvHesWoKXnVgQ4ZfGhL9dRr9satv3o3wom3rFVHPjm5d2GGcHc4TqG6",
  "key32": "gwEKMSA7dAGu8HGMq61jCEREaqJBiaWdSYZXGKmR9jVqvuECMWou4tP2hanWWqJkvbpzBhtCAYqFuKVa2wc2nn5",
  "key33": "2s8hxGY3NoVaUq2hF2RckxUgyo8gU4nbGekEf3PmyZbHeQw2r5qENwYuQ34yJMFYD3EiNCPvoRrZ4ssdmvaHJncN",
  "key34": "4kVBnojga5yNZVYGx3muMkLTkinddPeAMUhWnr17DEMc2LNxNWoHkh6GbrBTYThPeGjT8B1U3ToxZKUY9QJDyGcQ",
  "key35": "2bAruiUJLodw8S19SuwGe95DxcAM9gH9nnwEv6SubZWkeiwEgvFenZvvryYQotjCzabLAdRhTw8vuoLcuLogQBwo",
  "key36": "2ayUiKRssmXGTPMRM6cCaMUedsyuDBMp6aJgkuXy3Z6CtJjvt1pymVPBYJ7VaySNnL9Wf9yf6MmGGhqnXtHHVvkp",
  "key37": "4NTzy1jjpQzX1mCocCNeWrcXLvwpuY7SfPwgG11jE9LYpWFQZ8kK3Y8FJCDc7x8PQAac5LCoJUnbGXmjS3t1ukWD",
  "key38": "4LRwkFUojUgA3zx6WUkMsbY9L5oQXQZZ8uWjYG5vRDkCJv7UAVvUNpohUNXXApWwAWLJshjvjUjTua5RqNPFMP9y",
  "key39": "5diKDWEffNKFRnVhkaQ93qHraXaXPa7hn2f1FRahBMhjK77Uo9QTNPgLgVhbiBK9fUWYDRFJ1WLVpzxgVMEXRaqs",
  "key40": "5fA69bBEYTUq1UrqWJ454vM3ECsPbX8AYyuCQvbFx7ZxrsrzEoecQ3XxET1LsYhsKs1rtrMWgvYiXTLAaXXN2Wxa",
  "key41": "3uCWLnJMCZXqMAJRMiyLLqL35v7u7o2cPxDHkKnZENaB9pSzw4FnA5763xrJHCbWok8QUnChJNdRjDkrehXk2nRu",
  "key42": "48peK3CFVbUzPENT4EVo5r3QfXvrGEKAXPZLgJ21GpxLSh5WnFbs1gNN6e8UBsqZhMbhYfjCu9fE9vLod95Qvvpf"
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
