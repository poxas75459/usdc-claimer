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
    "4Lw1cCZde6MFnveukgRhkU11mjQMG3jcuo7henYudrafUfmH1QWqSKjAAkLgriKNijht1LGiCSBfnXLP7TJVtR5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fpkBDnaJHLHjFyHSR1dud6AbnGGrxm6i9zd5LjCHS8HYLQT2PaQPBrPPUX8RpTb7HSc56L1c1q5vQ9QKgi93Q4",
  "key1": "oF2sRBwLMUoHdoznqbugx8rmvV7qmGkemmSnoeu8jt9Sg9whf6xWW5dHKcixAE3zp4SBskr2qmTw3crjE78BJZg",
  "key2": "2PHRbc8ndTGHB61APUdK5pVoqZohHzYdWUSDZjxQUb62HzpYHUPh9cWJXXcnVJcmvaFD6N8b8ReKd3rAr6WTERb9",
  "key3": "4M96WMo2ZH6TotytrkHykA5AoYGCrKkK3wMDm1W8LMVckBrGQiHZdGft7pi2bJ9dbjo3pKqgF4XRTjNrUgpwqn9B",
  "key4": "hCPACqTWRDKChLanFBhsA7ZFSi19DP1omFiSiV33zFmYtw1uwANpss7pLkRMyisnzcwneRF69SinnpHg8aqRj2A",
  "key5": "2NUwGEqiyZLw3kgfJ8dkbWTCj5stNoNaHcoPDqNUW6Sg7b4no3AdDebjszftoU3ynG9uXuFXaUV4ktr2vQ6fWRne",
  "key6": "2JSRm3HhqVgzDJNVxhvphJkiDEoZwmAXbLbTGYvHiSN6AoWhTN7FYrhJTJ55abN9C5oq9Zp3HKkhyLB8vzSELYKJ",
  "key7": "2jtyduUiqjMBUEJhEvdYoUspatAp6CvHtEL37jTc7rJGKERYqCr6qKPzXGbBEgTfx53R13y9abrw8FDn8DeEegZE",
  "key8": "2ukZvUDi3WSDvEGxVoUi9GaSYmQdbmkPZkHFyKPnUVxaZRkZp8NS2g28YS9oyRV896PdVfg1kW4YKrhe3kmZLuUi",
  "key9": "zKCNWrMTaGqKL9NcjtWkJ7jo2oWpLZZhfQ2XVctZbK9E12GmXjJ2mXamNscoFNeLk2efkFmG8xZEw77KkX5dM2o",
  "key10": "3iMgbHhyrsXgK3yaZ3ungLM9r7Wg8qXavQNEc8zhgoFWHQQkx4uPT9YMizfhC8VD7FYxa4JjbSo1eg3cwRC5vefK",
  "key11": "2bRtn3rgVUi8hadzYSmxQvTBU9oXg7Nt69SjPrHy8VfvfNwdD9mEyezQnJGi366mEJVi6EwmKqdN7N3r4z5VGY2Z",
  "key12": "4f6tJ6gUsrojs6HVjPSsitSGTsCqRB1EJZBFQY41i93yjH25kjRtaeMZoQF12AnL2JCd3qCtmvWjTx22b97WHspq",
  "key13": "3df3zYvGYxrF6ZE6VjsPmbiCPxDQsJC2TEX5q3gDffuHMgkYEcbz6ZqNLDcdyBdMdqBW6RW2EcGWG2Yx6qpR7Xn1",
  "key14": "5z54Zub6as6LhHH4su9E6fVKBYgd42rDAraDMcmbZrjxwLJwUpxounoLGsS5VKAdL1ZoJnNzJLWYwj9iTt2hFRV6",
  "key15": "QsVRPFatS8qVBB32sobHkBZARwv1SyQnef66ijGV9smMLKehy3G18bCtJUutnbMv9uPeCUNEXrkzi1BtBmNejdr",
  "key16": "4QPtbQtHKfDfSm2pSU53ikQy2MZQ4EK1MzECZjoBZhHZMGeY9aGVDBZNhFpnyfi8xQfeUZPwsHtHQYNLAqDeo9q9",
  "key17": "38m2m299UgncnvuFKrGG5hQ4PtXS9LPVpXyRVyonNBE4UHFba7AWZnpAWs1E89RwauSE4TQkmGpcwAA4hZW5dj7K",
  "key18": "5SSpjtqiUg4WpW9b87h9ytCHh3AUapyCCvya5qHVQaVAHi3oMZLCKpmo1y6LjFZcwm7kxL8p9JTfDzbjZVug17x3",
  "key19": "2vxNKWa4oUpPa9VhXbUCwnJLm1gKPCEewdJWATPP7djaKxQ5fBRkgPUTpukJScCwEN46k1RBoa2ckMHz6EufxFid",
  "key20": "4V2bEAwTbfeK4jaMwSswzAxWtvcfihfHrZW4C7X7MBfsdvti9uHWBPUnzdXL7BpzcJhnt6MrGWwFKYHQjJwC1fhG",
  "key21": "v8mLhgWxMZFMdgaFBZ2LxC6Y2w1iLx59mFPAPQZMVN9Gwmw6DTVDfBWdrwKk98gEYd9jn1S5nVkMda8oAC5h9Sm",
  "key22": "3Kw5KgJN4da36avUd15U8uuREtFBhL9ZaNdFWMNEzCWXSEKEXpo6hi85tvNZG2Gte9UkttGraMtx7ZDPH77rzDZ8",
  "key23": "38RmmrwXdCm58m2UhpoaojRGPQcd4LcedVz6FWzTfhXJw3ynobtQMGq6UwmGC18ekLGLLtn1u2QuPpCTcJZ8yqJJ",
  "key24": "wUL9QmHvkD4rWd5uX68cCH9rTeLRbyVD1kSprny1cLz5BqvkbUpx3Ne9wVoPDss4d849Ps9pf6xL2rWCaVsurh8",
  "key25": "42wqHFhFqDngix9VzGwtCpT9c6iY5TVrDWjfLHqWuzJNGLj98JQTUikTGrR1PhB2DXnYfRRhfmVW7vAtf8Mxi63p",
  "key26": "4BhcTWEZr96AN8E3ZTsJ3ah8WFEpWoxWtf9vXNdQSXbpAi22e1zevw7GSEuiZoTN4469GhEAoMwuE5BY7kTYrsWq",
  "key27": "57ngLCBhAMuRb9QoqJhHAsDUQuuVnELLBzf4L6jbK9ef8dvdb46MHkm4KEDhseQh7vsSSb3qTHJxadQ8QcVnCvrX",
  "key28": "5SBoB4xm1hcacXeKRaS5K3pfc3yntNGRsSd3gWqzgy5d8nnHvck7yYqoXgwt2cvH66cLu7cb6CKKHPQv4Cjf9w5w",
  "key29": "4ZzaBk4GqaXz5JqcKJSphf5pc2JW6vsZSmzihvcy3Ds7MD24nuvLeh8uuMHGrrDhBwquXCRPsmqT7QmkXXBPKqok",
  "key30": "2bgrTW3pVSehswGsbiMHtMfxmv42KNGdxBrrAQevZNmCpUtRYKC1zaeTQt76jZennjNj9VwqU1881RfRUPP4vNBZ",
  "key31": "4LgkYajKGZoZSK2kAq4mNPXMRqkqRgnRNNpNpRVCY6mzavAY5UWhsuv67usWRtN51qqSg24S5rxJVkPF88N4J71R",
  "key32": "Bf5hfcHqphbCaSfPNNNB5dsJQgQNm4uCamdSQFCV9igDyn5oE1K1wxff5D819CvFeevS5sJa13sCgPKftFqtUBL",
  "key33": "3bgxSpxsrUMdvYrL2Dz7mS4cHwYBVM9coDBd1dWfigzD3mb9cQtBCFuaSGyHaAsz1FyvunZpCjTFnqPkCyQnr98B",
  "key34": "4K3EuAVvovV1AgE9gvwpCfmMgTd5KFDjyV16hUk3iSYoayxFfoFBUVXYTGGAXPUbNo25vx3QjqmNzw3os27BdTSP",
  "key35": "NAVhCHb9ixbAPJw8cXfFVQ1Vex1gkB9a8qDaLLakgtanR7zjRtyWQnBeeMERivaaZtiLiBLs8Lvn89hazFvcHZg",
  "key36": "zkiypx3vxD8wh819YRy1M94a3b1i6goj5bh4TLCG4pazbKKTjw24iG2YuKjaGPN6CyfPWnWgraE7iFBiCcfiPsz",
  "key37": "2JzNzf8RfTk4MHptNqn6avqTVqDWDWLDAEpuWK9EJYn8e6wuvyr5KLuKy3wneChedjAJu6haJsQcHKKywmyQsipS",
  "key38": "31TBbh2VH91GntvTNAm7Ye4FU1Pc11ouaK68UkWnzMPpUrqh37MmybTgYFr5NoXTeFUEzfByNs16h1cYjiVKAVgk",
  "key39": "3kJNprwVn14XjPMPcjMKvGorMDM4WkfQrFZ8aiW621fAHW5jEva4yByXzDJa6BJ1xfBFhvA4f1tjBz9rtvTpWGHg",
  "key40": "4mhQwx63f5SBaEPjT2k9R25gpdSpp97DZWjmVS3bVEvJZ1hKkmYZLWs6QvJEWJJpBWCjfNjcHybeEjTHevdwVDfz",
  "key41": "3kTpfvgHBLw7LVo7zHHzgUT9oLvn9r61R3ieU4Yiu4KVisi4iXybcmAqHMjLnXnMeLoS5m5qabTSsADKdkWaw4QF",
  "key42": "4vVJXX9hbHSLBTTjw7fWZNTtxUkwosNAtM5oeQ2XjPNqgfby2WkT5AEm2jLBkruL4CkoQ7B1wH9uwW4TXMLEtFcr",
  "key43": "4hnjZDjTkME16dFQHy74VLwJBwWtkErSSYM9LMduas1QcsBHhucnuAZC9uzjV2kbiX2ca131dAsd3q2vzaU7yMgp",
  "key44": "2ayy6zsNtZjqc5wvwmuaqLtmqJdPVFPVd8NQkcVsQp1dvoDdJn3MCvpS6Q5zNpH1F9efk8bdwwZaHUFu91Pwob6K",
  "key45": "579qYQKMV8RrjddqsVzBbxMrokXpQzP7pdgtJPiFX6aSkR7vNY1WyfSCAKuNEB9LBfxtZ7N95vUX7AAL9Gvs3thy",
  "key46": "3nrYAaGUEeeuSZr6sP9NhkrZhWpMMkJndeNnjx4ai2hqJnbo4uguy3Zkt5sPbbQ9Ni3WxbE5fBkv6hr7fUZ8v4GN",
  "key47": "4VrUcjxSbw54q9d5ydbiLWB5r9cuHi5w6wUfwvjMySn9z9V4t83yAWd3vbdYcgGzc9tMnQfHgfsSsnY4YB1d9c7G",
  "key48": "4XHQqodBrotsCGFu55d3xFwiaP5ApzGwLFqntyBdnFDvd69xwzQP9V1XyYf5YEXp87sH1KRjidQh5xbtJCqDn5A3"
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
