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
    "2vh2o7N1hkVxoL4bVJDoEpJC268ePDeJwXgiZYMBDG1F6DR54zSiU2VN6pL5vvbXBSaHrFoJ7eZuQrtx8tHfhCVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZAZmLmciJxmCYDEvorLjdbJW3z9raE3wjH248F8yzfuQ8EKymFndbUocuWYh1d6MNeVLJSksQkxpg7UNh9iaFUA",
  "key1": "5k9McRbvYbYNQcfhZoEFD8jZC3aBENit37HMfBh82qvmk2zPUU3WCty67LkwtUSsvT8aSuKHyqxo2oCt1HcLTfTi",
  "key2": "3fEKGpWceW5XUrnX92pvHobe9CfDLACAz6Szf3LUEG8yMiC21A3HcUGJJjSuNeUc8WzH8a8RARBjBrm7YXqocSbd",
  "key3": "4Qjm3VcpQ4PjJo6cb6UQp8xKjpbbt8VYVMYpjF1EQEtBgC12GpLupBfxNLMFukjSCpS14Ezq4tTXbpSRhP5JE6XM",
  "key4": "GREiL6zsZ3gQYtyEe7zSDYhoWndfteodi3F4AwzuSJMVK5TpQQrdX7L4oeTAwxXn6QqJWydEp6vc2uvki2xCrfR",
  "key5": "3xWdjwv7HpxBYunUjNbETCHk6wLBESTrDTnxm1XS8vjVpJh8PaiRWTYrJAUJcsRDzPAswKfEyS3SPE86TaQUAiYm",
  "key6": "63neodAW5LkqpoeRjpwUxmn6F5iUiUHSGAiSANuHYL88FUyk2APTYgcTKU5MTCGC1UtiYaQfCNYKbSTbXuNVxNDR",
  "key7": "66PV5d274usyQg3GtjHwcTpL6KVfYGjRboQzZj5No3AYNEF39xQWj2BDkWScQQGrBNE11pjQfr8xgCGnBYXHibbT",
  "key8": "42wKYBxhuw7xLZr4yHm13z8R8wnUKhixWGbqwzPdkCtLde7MxYEE2KtR4DAoHnkiCB1hp27VJCNQP6SipV3J3bsj",
  "key9": "5WNCJLGrmyequ1eKv11GS13zc1pPwRUsuEcpjtEb4WL298KM2HeHHfCzwVBKYM5cmfWjwvJVpeE8uvTvx8CtPRBQ",
  "key10": "3ux942BVNmijQTbK23S4LZV4qT1t9qCC8YPxsjcAvqX8MhNjEsAbMyAxmqhFCXMrkruXJNTeSNTmAAuDLxaKEosq",
  "key11": "51EhmFJhZjTVq7avBXFQyrgHCtPPbqocWby6nAnuRaSfC1xybfR9avLbrXxyZB4QYSSULuC5W9V52VQzWnV3CAE3",
  "key12": "2WSCA35YdTpy28GDD4cZ3Endvh2HyQtDVwZhbC63pgZD9HAvcGALTixBvbn33wKKTPV4v45AWGfaFRps4uB88BpG",
  "key13": "48cYnEnagBCMuZhPpEnqFjGGpFtiktBpoTj4CGSFFyCgN5Rmv6f8DV7TLxYy5MoR2eAYMN8oFAQnpcwbUEtzTciS",
  "key14": "WbjSFzjYk7fWRH8tYngaQLtWf2DLgEz7Vp5HTqpo1xH4B8Bq597PpLQ2SjWNQU6Tgqup5CMVFVikFJoTDKeKcF1",
  "key15": "3QZRvJ55HH6G6dpnSTP7bHSv2mhhZrRwfPFDtNChypuxGUwzKxKAVszPjA8nZMft99ax2YUo9xY3xQL23fRhzdFY",
  "key16": "9hMsPwjcxNk11obiKAQ6ecnt9m38xjESAQ9nZDYy77puVUGqzayAZAt1ZB6eXux6cTJNKfFn62HYJpjHNEskjDY",
  "key17": "5g438KRrAwUyXkr53q9v2jBALTCuF1cbQow78Vb9xG1GmGWsw6BPa2VyrxWgBjuStEQFJ3gkMmmCdt3R8BxE5CJS",
  "key18": "4x5AMGwcTaEkTspuAdu3yf3VUtpKYWzH6qK1BgoeAzWhcCyw4rR3jde9sK6dD7mSDkfBdbMPUgR6jMcxJFTd5WF",
  "key19": "YgRyM7DrEsdvHXTAqaYshadwQqGcdAFECKPzsAhsxAeC4YPUQC8wBA3bCiXT5Ub4tTaeNd6icnXdrRMzJo2Kym6",
  "key20": "5oNoNEnsXG6zfxE2iBYgMJoBikPBTcbxBmfFFyAHVeLpvbsbubGbq94jU73QfpPy2GY9AotRNsuGuh1r8yUwKmvK",
  "key21": "587haNQg5ieecaaFj6mzfiQwo3zdxLaUa66WQUDxeHowSXitRorEXGQtvnyS1DYfhMWoLR4NkpT5Z9MSW4z2B1Q3",
  "key22": "4L3rR3L8ow6JCLgMHtwj1UqtzdeVyCGj9ATaZRiNdL2dFKT9LKwGFAZCAX1Y1gb9KgfhY7frHsrK895UfhbBcsTC",
  "key23": "4m3RvS1W21azbGuiuNyRkkTnoYd1gRndXxZsCcci23wcyA9YUosEK9FSwuuM9YJasyynJTHLuMBjQD29wgubygii",
  "key24": "3nsMn4oz2xEW2aBfsFrcE4qzQkhV4BqyMB43eqf9ao48fV4nUx81kff39PGh4cxTVSDUVrRciRw4vbUXfSCQBpWh",
  "key25": "5rpQiYHX7bafgwUuNP28gYgqEW821oFFbb8dBys8Z7GWuWjdQWDtp654zoDBV4GMmN9yRMequQayP5W7V1mXkZZ3",
  "key26": "2kj9kSriuXbnzHgA8GwCSPYGGb5uAMs3dJ6XvF8XpSaptv8bUzWCSPo1ZB2e1ppQmeZutTi9sWjQ8TQDJ8jV12kR",
  "key27": "2zsMzC8Poa4GFhvYxDGX78bSXFNbDguQK2GHCNh7TSMpKvRU7TFFT5ETo9d7agXmRuRrYEYbSKG29odMGEMwTMEE",
  "key28": "2j1k24ex2yJ9rGK5UCZeMtsJGjuH1xrFWPQbU74Q5tcCW3tSm1GLmZ7bdkxZBuwM3piipY723WD8hWWVogaNfSiJ",
  "key29": "5Lu17fczgH4CtnejCdGzSz7k4KS9pK9qEggA2eFWvvRje2zyycixyJHzus1ksvfL1yAEzUgyz7rEvMmpid3xUzQv",
  "key30": "5FdJG7KkGihwAuy6qThsVbmmuQ5DRs2mrWywGUWpySqcgvJ4XAtxLcvPhkVSFVQeSbdRGGGi6BdvtGDxTWXVAAvw",
  "key31": "4iBrHgUpnnCenCqN1GhUWURQ48WNeThNADpxZVmVaMFJh6WwjSTxgNYsv856xBLbRrBXTybGZqKmcsDMhqxfsLZK",
  "key32": "3yijjuTBe9ZCaoQKS1SLtPzBnvsmt9zNgBwDbuFxdSTAUi29vCMB3AchYsmyY4QfxuLsjzBEMM6q2cYzZ4ypa92j",
  "key33": "P81bx5jSoXqCQjzoHLRoyJmo7xRf7Bak1BAPWLxMAYjFfhFTbyTYHznp61TcUuydb4NNwZ2vP6TD7iHL8z29BXw",
  "key34": "sb9TNWwR5xQHUbxnjd968S8DATYqcJVCNUq26qbsGhGiU9Lmw6JtmqSrMzGj2issnZyT3pNnQPh6fFCqMwP4yn4",
  "key35": "26LCnMPTK3NAcPafdtvPPnMgYp3kAMNdiu4fZsY84yXaW74JDrpFH7hFKBNdaXpUMpHj5TuBKJCkReSUE5qFEgKj",
  "key36": "2j2bBbKJ7C5HSXupMBok3jJ3KyLirXoNjMCuH5k5CJnMM8iVzy8htxozyXpPioaUR1EAgxJPPVkAu2mVQkxpZpyq",
  "key37": "5supzqoXSunMVQFWjef4vESBqmkhVCbXsyizo5rXsKEMx2qx5966BkNo53DptPVuVrZbrcahxHhqff6HvxQjLJPL",
  "key38": "4LMx6XAJ7W2NHCGHDs34X6pdH8D2RrNzpvSeHLHpEXpyfiCn71GANJuh78WfKKbwCg1Vkco2KaKotGXeCMPUAn7J",
  "key39": "4LewdKvrr8B4JGzpbW6TA9DSyyzPN7iMvZCpBysL4Wyt6RhBmu4pGYax9T55dbSR5vnFbQmDcUroim1bQYgHi5sy",
  "key40": "2iaH3if64mueM9weGCHfDiBzpw9NGuaSDFDPVuKnKRonxZD26tNmx1c76uG68EXHmpJJcv5uJt1CAjABGsWr57J7",
  "key41": "52XUtj7znw3WCBEacjrgR2u5BX4QM63Fh8vah6mkUrEDJzLxTrZvwfpfnoTrg2yAWX155WP3T4uqnJKtTyRQBujG",
  "key42": "5BB3TgnG57o6N3atTokCEoSY6LduXq9vD3SDM6Cudrf3Hi8XjSbdzgx9UnDqLen6LwdayDSZErz9wMaPEDny2p6E",
  "key43": "2mHta1dmpWDbyXVeX5uCizeYhmN9BFdc6sT94Wuwduztrg7xLU5rvUxJ3Y21h6b37YZ8RDJhpKxjGmVN91g7NDmi",
  "key44": "45mHH8CxK434GTcn1KL2hQPwp9EgAy2eUq32NkV4kC5nUZKUocLQpJu8qu4ktAXo8qiQ1Wc6JPTfQerhyZ7NLGiX",
  "key45": "3c64eiEwPjWaDyTyex6kTMMThmws3EPKRsFsqbELEQnNRevJmVWuN46dM2y6NCsSRjwPuDq8hmyjFYndC5MdFiiN",
  "key46": "44b6Z2BSLDW9EAQKmRCgxkgsvdajCTtFSnTn6V5SUg5mSvf4z33ubspcH2EsrJY4X8T22Y2bNdDkfcou8Gub6hvp",
  "key47": "5r55yNyd7VJoCb3xXjC75Yre33tXyizR32n76qxVb85anZXJ2YyzxD9hstFtEGGhwd2UquyESHenRBZ3RmM1ABdF",
  "key48": "3RFEjpFnwkGn7fr48xGVAxiaEGEsMW2A41LiHFspGGjzLqeFRJR6ZcQugEh3sM4E2sf4Zceex413WFntzrChzmMp",
  "key49": "4HM3QnWCzjU6CPk95BUu8TA5NNaeYuYvwASCaN9XerjBA6QVfMuDh5j62pj8J3bfHZ7eP95RiG7zjvvCk5JXBhop"
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
