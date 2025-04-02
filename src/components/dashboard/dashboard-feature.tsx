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
    "3Tgm1e1TnnNGNmnrs6euAoxMxXPLi1F7eiyzdEh6jh8RjKN9QjpUHUG6czrZkKzDmAwyLKsCj6z6jcRBCY6p2sRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDR6eFLdwpaQkvyuVxgvxQXPCPvv1fghbzFP2cFCyw2QEfgfd4AoeiQqjdJuysz6X6RQFCqXcsQi3jWWh8wK4yo",
  "key1": "4giezCvgCqfzCfCyieyA9o2bR9j5kFbfA6TpCZtk69LPPYPccZ3uX97jdbZo8BVSnoX3DgXAm84jsZDJhbNEwGo9",
  "key2": "4CMQBWD5gMqyHNSwdJ6XL2xaDSxm9RNb1zYerLKgeHqrrYYd4NBt5gpFj1tLYARp4D3AFaTNmjrMUHnXDrZ4oofa",
  "key3": "eoiXdKYo3DhKc5R89D5FBDdxgyDWbUv3cWjLNEM9McLuktpVg5xEM2S317h9N86paV61566YYEPgpYbR2RMNXxC",
  "key4": "5oxRJ5oHTEbhcNjmJzsKHsDkFyJdQ3sQiYWmsHMRs3qH5e4w45negh3Z8fEwo4dqb7bHWwxPKBqUVxr1AVuBPvMh",
  "key5": "5N8nKJziB8in7dbtf6KnVkkdmPCd9sXKZ17Go13XaQAAWatQf6jfFD3KnaPLfGWfqxj7zvqoa91t1eigauvKCLbE",
  "key6": "2TBv1c96qwVXm4LtVpVJ6tBNCDxC6RRAWn8XTamAfZQQLBRx86qUDmb8vu9zgqrsh54Bpo36ic7ar6wAHqsLrsfA",
  "key7": "4m86ryN5aFcB5aQnMf9QWjkY6ZME5SJAipD44DZvwRa64HrKrD6rm7MTMModVr1bMKRUrywURmi4y872jeNwGh53",
  "key8": "5a5JjfogQEeW3fVyc72iLGhitbBakGQndXN3y3JMqSQxjYBj8xZ6q7Vd51sUuQRyAvpgyVp567a7JT2Ps5cc2XQ3",
  "key9": "2zZf7g8LkTLCXyVGfG9BiXkiZLdyoZ4Tg76USepXZWNBXB2UUbTs8PJeYmWacm7HocjjMCsatG5b4peraotVqMJF",
  "key10": "NSboTMm7wiVvr2auiwwAhpDu8QW7gTs9NqqgNH4UXh7cHx4YGQz7s8bkqrthtN8gG3bb1fPToH5pRJYZZ3Ug9Jm",
  "key11": "3TJjQZNKbxioWknEWr6fkZqvThMNW2DzUrpRVzDfx4emFT1UvoNph5xXC9ccYjBb9brnNbrxRT9Fa4zh6V4MtP5J",
  "key12": "4z7kdJ6zQb9DevJ9oEEE2kQ9CMnuTQ5qNaU7tQ22BzFCeRb5pbRkNgQHXZtnrhDZh1ZDqiezSx1gQ21CJiNnQqR",
  "key13": "6H1yNdW3amfR6s54vmFChdg3F19cSV1oLi3vs2bSY6upiYcZKUPqC3NqeDQi5TvdKvesk1Z7cFWNbZYzWuuYdGP",
  "key14": "3zVPxqGy1cnpapJSe676Y9DcxnY9tZAQZZjV9DT2VBiD6DzfbhQg1E1a8szeJecXwGqUfMsjq1vRbUv7FJS6HFZS",
  "key15": "42ME1JBq6zTL3GrzFqRT13CV2Exyp2frcjzypr1NWkXYAGJ9NL9hLRz47Rus8GBPzNgUmC4KSxgPQ1BqMVn5DaVM",
  "key16": "5T94uQnZvZ4Jjhz96FZno62LsmimGXxhb42y33zJohCdWKJCkvxU2cfFbT9ifozJT29s17CGKDH14k8B2sP9FjXK",
  "key17": "DiLp6QLQazA6WfuZVsPzsxw9CTqPpK9eqsPUhuHppoFehhR4urppF7NPiMu4PEFLubnQStP7Js2WAJoDYwwoQGN",
  "key18": "3Vw4nP3PPKg2bWM1WZDucdAWcVNJu74DJ4eSQDK5Mw3zEKxRWK8KxiMyCsuUBSz1MVVUz1cMbCxEdbiXCfYU7G5o",
  "key19": "21hG4PNWmMzY14srq8j8cGpHaXRJhd6Zzy3YEdYJ8SRMHExhHxqHdSpxanop3hG3TcdfKCdhb4szs7q87F3A4198",
  "key20": "4btVrvXUZTJ9qWLkN1WU6sCwcmq74csVHirjqrzGbpF4DvQSVT2fHZbXQG6dhMNtGWA7J2MVsoKPUQ4N2vCpH4fs",
  "key21": "32cqkYojpstXPdmYySgxftwFrwk9G62U46xzSr4tLUDtEmkhDy6qK67BCnpLxqsZvu8eBS4sTmU99wMAnusg3PuZ",
  "key22": "2W6C5o6byFoX1Hqf4hq3CEFmGfFoMDxCctyLBG1e4p3oFmMGZAgCmkxEaAAjwXY489i4UKcy6ke4be6XcE8XJ4ER",
  "key23": "5Y8krtTMwgRkYzgd1sECMHyhGdwQC3yodqaivcWtYFkEvJutzMNdLGxc4PafZUaBKFPXg1GCLsg5jhiFU595JFmY",
  "key24": "5VdacLGhBZgUYs1Tq864z3QQ35dM5ehDdTsopfxhVMZBv4DKeJvAEZejBwFKsBPEvo9pKwJn4k8ihn5YEKgMEe4U",
  "key25": "4uQ7DpbTMGeUquLsA95pHWVbqYEpWttrxYq42GW7wLjzr3BYvMNLB1xsVP5GDTRodm6opiaScwiMQeDciGJufYKt",
  "key26": "2WCY7jVgAcU4RQ3gY2BwCdN1PNc2vW69vczypnA7AuwXwRfQDVTYJiJHn3C4XfNxgK1jUKbk44TEKjijd3e7A8h6",
  "key27": "votPpmAuSH1oN9VHyYVvbQa4Jyxis6p86j16WznJB218DeDaXJLLUMg3cMdvwiBEpdfKqkuMEFoGyy8Q93dVubd",
  "key28": "2PfY86STsm1FMtAsT4crmbG6kzrcTLHC9eaCq86Jb4DJWoxddwUpZtkgodCrm8xzGQR98knsdPSUoZs7ADQNS8NK",
  "key29": "3AJ6LcppQAf9R6UBJb5ssFGKw6zkGUrduzcn4f4hgPvDwcgtvigvt7JUnefC5YWutHkbcCPCsigoGAP1qcw7EMUJ",
  "key30": "3C3FayQz5baNUNTSLFwSBMnpkX8tGysr9Mypc29ix5erEimUzZXfxv1kK5AZaRW2btNkuRH3Lg4qiMPP85HgevRa",
  "key31": "3Hwr3HssJXMFjHrju5sLx5Z4kgAJMpnii15ZYc7bWokJAVi6WsMg3yqHZ2yKCvcF7UX5GdBd2vrgmExEFzcz68ev",
  "key32": "V2QReAdXKdEFw3jmDJ9btdbS2PRtQRqNUmoc6muTQPZFYV3rMcjNS4RzDzvxB7uex5bFiYUpg8znsjASEn16dHC",
  "key33": "58gzWWFqTemCEasVvyiDJYDJQhoa67AqgqBNQFxSFP8aZe3riwUbANS337G5BUHKkiEJCCr6cRJ4bneREAvMskDN",
  "key34": "5whXR14tU7n3KbC2xbTPjnBykPMWsCgJnKRG7qFFogBJQFAjChkUwCdpXqWqLZpxEdMAq6W5Nnay3KtiR2XQMbSu",
  "key35": "2FjhjN3H4ehD4n3PK7x45uD5PhiBZGa6qZp5hpCVf3aFFpHMtu9oaKVVJta7YSXLaar2tAW2tyUiyexoXzUATduQ",
  "key36": "yrVgpYUkr2nHbJWCjo43p12AC3FnnVKEMzBUzttQJ7aXow8fTNwW9UKhD7JnzCZHx7ohGS1QBxCvphWhHKStQ5x",
  "key37": "2aVgGTT2mvvqbtS3x3YCXHLDgEx9nj6QSKJ2juyhXtfPBVHRuzj8Et7iYABX9s4ASY19d5Xx58szr4Ua9ZbJ2Vt3",
  "key38": "2ZFysyz4P4qejVjJeQ4TtWDz3xuq3KuJzfJ2SZAGVJsHee3fRtYHK75CufyV88t8hnGcNgYL8ojHqKNSZ8PFMFUd",
  "key39": "311M4DYWRBHQgSeeaFfLDm7dEzeXy65ovLhC9JiJEK4NMxvD3MmSu3xbiLpWFfcnjeDx7dBzYZqv51AepfjU1gWu",
  "key40": "32kgFSNNtZzXnvn3nPnv278AZXjk9kEGkEKkdsFCNMZqSPCTMwfg57ksBeug3uQothU2U5To9Z6Tb1ZnwTowLASA",
  "key41": "3GuE5G3zoo1m9hR2yeAEsMctYurG2kbyCX7Pw7VLmBGYviZg8J2MiXUnnnMr7J2pKwfCushrAzWPnUaZzRuDvjpv",
  "key42": "5KKBvX4gf3jZAYZ7xiKUhGV6MsHD41kD1qmYhX8Lh3BdwwzWagXBVSZu3rxRye5iamk1VuXexAGqZTGLQZMemkP2",
  "key43": "5hS6mZN23W3mnvbF3jrg2fY6caEhxUZzFdeaPW8BA6MJ7dHbgg79uSKafC1a7nD22yvz9doPWUSnrNciLWuGiPtm",
  "key44": "3LuDqeB7pjKhzvQ213pAygdsSXdF12yfhxG1zhei3ye4AqC4mwfYXvwvxxXD8tPuiEQJm9PkZRLezBV1omZ9WpXi",
  "key45": "4vaQe2PMurx2DfCoKc8iFUAqPbGRic4KNLpoKY9keUeuaWHBZjQk2ytU2dfQn1ca913pE5fyJaWnWfn1wy4HHCdN",
  "key46": "wUpjuTFfqZ4MiwN1jmvTUPzsXDK15LzM3czhGwD2V3vB7gJQQLo76P8UKsxbwWHjpTW9T8sNryQvhgQB4cEaCeY"
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
