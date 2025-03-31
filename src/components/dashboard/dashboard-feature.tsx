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
    "5QoGgoLKRSqyt16n6bWJnvsQWVUTn8UtedJHKei4CMzPXoQdRida3PxgpYqqXazpSmXqm7X1p8W2TJaqXDWU4RVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vGZM1MmYkS5LcCQhxZ2ZnGim3hKpQgAHrxdY3SiV2NqDqAFum3o5YS2taxuXnPBB18WprjR9K142ZCWmyGuPP35",
  "key1": "5H8zto1NoXcjXEu9aAX1iPHNLgDpmnGrB5As1kZMZSmP82i5Ls6DsNvioV8ft5V8MuvpC8jUSsvLeNj6wxzUXGr2",
  "key2": "PfQmGbPLP4MhuJZCmdkBZfEuSdSDmcZB25fehrGBYdYxFhH7xzUuwJLJRoMtgcp1hHRxtLkLSkAveeTWSBE833o",
  "key3": "543Ht1XftaVhaU4sTcKC2YxNjURDkHexUupFqEpistyj2fFUUhXBN4KDzxcjwczhf4TwrGo6LtNdTGGQmeJ2zhZu",
  "key4": "2Bk9EHaBuq9jdGUL1SLtoUz1j1GKtB793kn25ShggrGGWQxrSuh9neEmKkdmyHtH8LjFtg1w92yq2m2goVobBUEc",
  "key5": "MZReLPmdQ4TkQMLz9kkisQYQi3XzAU9MHGGFej6oFp8NBuSS2SQRXMPApXcN6kSkHeFB84SmuHWpH2hvmUwWu6b",
  "key6": "53Gts6T4jbzYn2Nq1L3RJHQLtn47P3RfPABpooPM1boVriWv66x5Qkvc53TRymu9xhU1gC1aNvQAih8rH8JhJdxY",
  "key7": "34DxLxebnNpqvUcXANZK4djNzmGZwrLYvQNxs8nEJAd7tdBzeBxJA7oCJzgCDapNxCPyjqaZYh4b5aP6Saxwyez",
  "key8": "3Y2WbqXxWEWJ9UosFzQJ1PpcVZKZ2bkVpnuBTuu3oZLZriKxXi27ibW4zB3uR6vRN239YsLHe3C4qsRTjc9Da7BQ",
  "key9": "2FCp6cVS6EiYMW9qCWYBtGAp9Cc87PUbsbCMpJkYYGbLhH5Cb2BUxEPk7pYuXmTW5JFE9b5jkLCryU7uu6yctio7",
  "key10": "3BCGdT1ryX3rz3gMLEk6mWVBQD7KhetxL53dB3L7xYKpiHfQ13QeyseGyXFfpDKmNkHpJtUTvbp9w1ALACtjkvai",
  "key11": "53uLqvofGmJunfs8M6JfogSPDSBrWyV6dtvCtzG5jZAnyHgvC6EmqMaLF1XGk9PSRu8MWRUDW1sMRtBaYDW5v4Ro",
  "key12": "5Sob45WaaEZZeXpywJyyS66iGJA7JDV4nBUJMFA9ajnsoVXgm1CAKtjWc1qWYnAfEZHfbfdnu7CUR2kYVXY4L8RF",
  "key13": "3EA23y3QDjbYtTqBCDoB1RpBZ1jgmN3sZzH3GYn4PxPQJjkouTRth9aGVpfgdW8uHhFCfVckR7JdK5eXN1q4EUfL",
  "key14": "4pa471UooWDnjn9U9ghDtgMQKSVjqNktZXMbWMw1dXTh78s6Y7RMiP7HYM5Smie7kNrEp8cPF7a5cFSzhfLkRfYH",
  "key15": "5tuxSEberMtrFmJZmyEKAmjX3kazjHrQi1eRarq6XREAAB562bdxLbMxiAN3ZrV7rLKx7NRgZsFWRXgXQDzgp47a",
  "key16": "3zREiWUL1qFFaS4CQG6STMwrogaySrrBoSZzmpnFVtxfg9fzqAsacqhc4tVJ8jBiEbzQuWY63b9usj3G2W4uDcXH",
  "key17": "2F3NysTVjkvJJTcCM172Uw3C2rb7MdEHaARugnH7CWYizQ5NATnoHM9pYVeYZ38URTJJC53CgrfPVAmCYzm4Gjs2",
  "key18": "V9fv8p8bQFzHex7mHPjTftZqUNUeERkvu2aGiHWkVeft9CFEipecRy5y534EEtQ8fMnS7v2B4GZHDgZEgYbebdK",
  "key19": "5M9ZMtVHieNqNkFcYS6J83JdCs69Lu6LxASbDKZ3zt3pQPAmxddn7FKVtVe8cR4QM2hPsX5WCWXe7nKB8ANbd4WL",
  "key20": "619B3a5i1Hvxn58UivD8153mQi5HbrGpX11pR4XU3zxMhdUYD1w1aKafmErazZiAnePoK6EVTSF8hQ3Q7ep6htRH",
  "key21": "5MK79wxC98RLV3du6Uw15iRWu4swqBLjAECNFWLimCM6bDyqz8EgMaVSQSS83sMfZkaLZx9e4p1CettfLwEhCi7Y",
  "key22": "DDNuc7MC2bNEar6AzDgFLSZ27ruWrRSUqwqpoQX1dSTujXDbVUwM1yxEgdoXotocGX6gVMCuVQd2sHPMxDoC5h8",
  "key23": "3Gy7zwiGneZaeeZkhG66hoDCd1ZXE3QtfC1vyGyDny33kaRuWVPG6TdCjWZFUb1fjb8cmTMhbZzsZTQbLHhvfWZk",
  "key24": "31xNntMD3QHNnjXMFk7kcoUWesr4jed6ekw5yi1siD1C6nseRBzPQav8erPoTbZ9DphvYEB1Zj3WFsi6JWa8MfSv",
  "key25": "2CxQn8Uaw62D7AnLB1p6ekRGghLrvpJLLJpW6ZVCtvsbNpVCGyLpLMQ8FM26HpqRRh7vRZiCopHjNTZB6PZQhESJ",
  "key26": "FpCmJag3SeHafrZ9cVZZMgHrTwrLDaCCmSDhRrkSwmHF5N7PiipHKFmTwUtWMejkXTvvWHjD8Gy6YxaQPB4f5gS",
  "key27": "5dJVm9mrGRd1ej3JsHxndRhpvHQvYFr3C3QfzP3JkTj61sypbxrV2Vr8CQXR6GzDHfVszD8YrZ8PEUThN5Bv8zgL",
  "key28": "2WJcUGRhhm9rWA3eSSuRXa2PHUuf2LKx4nh2To8iS9JXteAs3RannQZeJoabE1fi6FFbSwthUNVcAbDhc7KAbDsZ",
  "key29": "4mWTfSKqnJ1Py6oioDE6Mic6cPNaRVzfJxzMyp6VToFFqUY4RvTBzTiJgNym8ZvNe3tNGyRs4Z43PtsCzqpe9NeL",
  "key30": "52NrtoRfu1q1CbZ3BCB41LsduUMQidSfuCFF9NcvYFSBp9tu1gFEs2GBqQETFr6J7jFqGVnWxy6mPCwvm7rcg7qn",
  "key31": "MZa5XhBePzBu8w5NZ3LJdVwLAa693TriijSMQNSXFvwT95PS613HwnKdQ7aksHiPSHoKjVA4UjuaF7LUji9Bqmw",
  "key32": "4UymaBEGFajqEW7YkuVod3t7TnxVkZk9UnqPN5bbEEiAGyWFcYxAinefYTw6Rkc6zmkv7cn75rzDMrudJTKcftfy",
  "key33": "4NJC5EN6NKKWBdrJi9iT1jMgqLULWjNVV3KwtJL6vbJAuMLPot2kuxCak4wUAHgSNcPbmbmjhtH6fd8syp41fCkq",
  "key34": "2QMabgGnC27h4fHo6zJBPsHQtaJu6FQwP6s8yE2QRohTEYpa9j6KYvb1Jp5NaYBEkMyTiuxSwtQQpkQHho89LVs",
  "key35": "2S2z55SzNovy4wZRNFYr6eMXXj1eEPFLzJ2Pq2CYpHHr7hhwecSTUVfvaxRHoPcYikY8MvJdbTuGCh38Rwu5mjAY",
  "key36": "SsTbwjHC9zNADkN4YwNGEL7H3naRDS89gAGDaH6SB4gsdSY2fUFaUS3igLwFXHFAZRGC91W1S6BvipSYJ8s1onX",
  "key37": "62ZimzbRAYcv5QBbooZJ3H49vSKwg4WimE5uTzcEYffAV9hrX1zWmi4KCtNhPqXqoenpn7iPVk5yNEVKL1PQff68",
  "key38": "2xnS5fvsGZqqvjmVBV3yXzivkua76tHmC6U3KwdVt4spYEbdnrFiBVNxrw8fUakb9Z5aGd2TQxgZKyWsTpWjHGQQ",
  "key39": "CsMSxE24PWbcJzHHHHzqiusyZBT7hhMv1M2zBjdh4AmcgVkuEBoE3uJjyncF2KogP4wnToU4PXSr16bo59XLPKP",
  "key40": "394AHfzNQ3woeJgoCrJpjHKVWNRko3fZpxpdZUo9mdK8G7arpMpD7xAwjSaDrfLY3surSrnNxBq9HSvj4xQkE8t3",
  "key41": "4EnbiEGKSTwfWWB5H6P7m7fq73FUyzroD6naS3h8y2179Sgi6XL4gcBvXRJ9NqrvLMm6Xu6a5haw544hedxsWPT",
  "key42": "3kR44mA6NDiY6X5ar5VkWRzo8CRf7LtbStHSnbxfSUmuiLi8Au2hKfpbvqVvvvf4xFvBWz4hrnkeNv1bRZ7wgr3z",
  "key43": "4oCf4vUCxwwyMm9sQ6Egx1RAXH8nJrVC6XhGQbK8wNsoi5Hgfga9xtZZy8NMgwXBv2N7fP2CACjKgvsskAcHzzNr",
  "key44": "5a1PBxvFBAy1cCJVzV7WwdC8PfY6aNFj6Vce5jvyU66ovqBG41vmmicdYXZqpXv5NPozKFRhPJ5ZEEizzoL7xgi1",
  "key45": "3Kh9ENwAqQ2dmX48Z48fVUWBTGSs8n2RcazamDjpYhDtCfLzUXo3idkxk5fbXkC8Ak13waJjM27LV6jrdh9Umc67",
  "key46": "2w1ncgRnNNjTtDDBtSwzt2rvwsRJzUJ9nyUVmxE6vXSnJ9pQm6p8TT1RMpkbubPT7ARh9nxC7PsiMAdhhusLJwLp",
  "key47": "2V2Pvsz24E4C7KHeyb7k8gCP8YaKHzMVPy9Zt5AfZHw1JSqSTkrRSijAHZsRvxz6zjmBumYGFYrEG9SS277ADhSN"
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
