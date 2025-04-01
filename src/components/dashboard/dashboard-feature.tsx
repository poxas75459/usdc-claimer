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
    "gXEsoujimWYrJP94U6kFNAyRkVds4HdVphkFc7yaoCh3S6Mb1yERykADP9pSZkdxeGLQcDUg6MLehXFioQ2cvNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNCinSDXcsSVpUP1nKPiJv2KCDFd8LQke1h3CsZK4znwHoAfaHhw2ggXpXPBdgfoGxSnxSFrJJTGWtJ1udJEBbJ",
  "key1": "2bC6GLV1K61PYW68WmmoSHKMSLzKuKts21S5BUEA7YLdgfUkqs9PA7yZg1zht9WXWSe1EjpYfQviTPm2kL2Gw8jJ",
  "key2": "67BNyr9ixx3WZJyV39T8QoNELZ7GR1bueq3EraB8a6i9MURChNHSQRPVth81jc3mUiD6WPewLAXA8ZhgY9315YQ",
  "key3": "48DU2c771BBsXgyV79m65hEtvKPp7FimZLsBoGWJRMKKSCP1YpQWPJGQ2yupnar8yRu9a8G4r69zsV5zscvVUsgA",
  "key4": "3BiErKkzFi3XajV6PkS4DgAWsuPQ54oDvd8BnvP9fKHBZapbKvzkNobsXyThfentcd9MvAtmAvgYHjeuqHhuGVCw",
  "key5": "242WJRuTZZxNLQ1Wxx1V5gN7z2AhNwQMXEPBtwWZSiYPPChKQeAuXzejuZNwWzSK1QwGeJ7uNrJq2zWCgJS3Hq7f",
  "key6": "5ZgkMbqpvYijv8TmXEP25jb6XT4bfeSznqgFe8baEb2BWZ5Tw76cQpH3AFBcS2P46eCETUtUEbsf8XnzzNDRLC1Q",
  "key7": "4prbEAJUBq1dK25f8urUSCqEuNRCqf4mo61KPQLR2gk928pnrJCtrayLE4hTGLLqAkkmtme6nxc6ZYMFG2htnYys",
  "key8": "AsrYsxMnMhfYXrG3XwqfkKxEP8PSPjYNp1uMTwinKThdRUY9GCjsN4f4pQ2pP99xJURLPgx5gdqa3ScymQuKnKF",
  "key9": "3ocwVjyBZGf4rfsSTqY2ruzKYG4fNwtpBsZQTQrhv8hMk3Bdwo3pap6L9TTWdvQqYoaQu74FHseJaEAryQojaQ4L",
  "key10": "2zqeEwiNWbh7kRcnibuf6hX23BViySPtF85umLDoei7vtgh848BNRM4YSPcZ6L8coFVJnaTf4Hk5dUmxq7MGL2nj",
  "key11": "4RRSUnRfxnFNHcJozrb7C2g5pD2EsfAtCyhkp3Np7Kszqndcfb46P7RLznABCmgNcyjYvb1AkgmqUSJ5G2KgZTJS",
  "key12": "67pzpBrqsTNsR6oSXtWm17J3aeyhgPMTkwmKeFx7GsqwwKkJE6KRuc8xzyAhgJaf5hpGEBEk91qAHGTTbXeytfag",
  "key13": "3c1UtcHfoWes4QAyKDt2CF7PLHuby74ru2cosQFo2D1UKUWHMBPBt656ExmmWzgS1bxZGMKBshktH8wJoEamNvoj",
  "key14": "2QJwL4paCMbZrVoscLZjtkvK8jpWSZPq3Wj89oEa4WisMjap2c5EWHE3Xou5vBEfbW2r6YNcWMmEpbhzdWp3HqdA",
  "key15": "RkpAGrU7sd8zYZapgQ9DMHXsM1hn4gBBEvvvh5c3FaWrP8NAZxTyR36kU5MBPUt5Cvpp6ckcZ9x1PdxzsGGQ2uS",
  "key16": "QSkcAUgUoJQzC5RCdeW8DUn4CwpPZbkGFfQMj4Te3M6p4s9hsmeJMMEJRrF6bUzvimUiEEBi96nvFLy2TSeCvz6",
  "key17": "2mjggWn5uuHNR4R1AhxdWuRf1b68vsC7kdDtj2asEDzex3cF7rKwF3f84E53HS8ZLFSr8HTXKAnWU49qVeN4B2CH",
  "key18": "2ZUbYCrZEE6vyYBqeKZd6RKEnNSVKBnzrHNw82vJ8nV9g2SwmV131qNJtHuhnN1UNNaEqaVV2Y7TtDFT7XaE982Y",
  "key19": "34h6pXzCLuEnDBXLvyU6CN1RFf8nVgX45pdSEEqFWnKwtSVpSxaS8Z1fidL3P9dqBGb2v8Jftt7fbCTZAq296nR4",
  "key20": "5raocSEiJXqLDQ3ktZ8m1pFRSuzojjf6wEpnm3DPhZMhWeky9asbbJt9R8M9VQaZfh6cX2vsTGeL11K1eyjt3X3e",
  "key21": "fNUHkStGFzasiifjXj5bLTR1nQ7h5b9nccbMgTb14Ty8APV6Umi9SEFYQZNXKVVGvPp31U1FYVckjWVfSPGUakZ",
  "key22": "5fzhyyh4hYeRff7kGwzwNGy9jayynw6pJG6gSw7xGoLCAYGK8avBYT2zRQ4RvhpvpA23Q1AzWwBKUg1BupSaxv9W",
  "key23": "4BPBHWBnaPwXLwsqoX59MDAjxzg3fFURrJ1vvsxPfedd8ogEZGkwAcg9nLgYVd61vBiJUKYsfPSzeof9o2rC5H7S",
  "key24": "4pWeib3tbGi2a9uRvTbmrZ7KGsPBfnWt1o5hRwc1Rc9PzTEJMpYuBJx7vuv5nKBNtATDXN6tdkDA7JcMWAm3JAJt",
  "key25": "3zEB58BY1uDXvJ886cQR7Y3Rt4z6ujs1orMKdmcPdoaVF3tHw3ETm7RgPUwQQPijMg5J4Y7aLBC3UPq1hxrK7JiD",
  "key26": "A6ANRUdJq7todWo6Bb1jmo3WEBi4zbZtRQpHzMyENMbp69wYeAY9iWXk6KL8sysUpwX4C3VDDvUmMeS1hZgJcbf",
  "key27": "4sXVuQNJHQQg7Yud8qatjDToq7hEkUP2Q4GNyWFmS5FzUBcwasYMmt7jUfBnwpqaGWPNc6dacaUERSSorsMfe4nP",
  "key28": "5LwSekC8gqzkLu2PQRe7LZCPKnQEBDRKS2pSCiveDqAA8iXzPku5tJzjtyXcczsQefiLBpVLnkkhyDsNNuQxJMWU",
  "key29": "5Sp4xHgShQWye44uiL4azpt7GidE52MmsrsnFmNMpJLih4P3f8MPLarvLmxQdEgtCMaTszgQNe1r4wdbQqaAMBkX",
  "key30": "3vJKCoHTffsxx7dhzXq3MDdKZAtC5bFvxrCsUNuUbmaxqg9wSxZ6CrMPGCWj1q1VsmAGj41EtymLCx1rTgpiBvpb",
  "key31": "3h1dXFS4mN1wqRHU6wzH7UziA5wfNdoMA2ZuCGk5df5ZrAa4c2VwXDDVQcRq3VGd7hR7tDVYKfQ3cXN8zj7XK9s5",
  "key32": "4Uoak5Ux6fYoa6hhTNLpRzttyt3ebJviJNfad1b9GRXTeTBw2LEajTykcgrXY8AEfTW3U191BKmBAfdujUfqUX1P",
  "key33": "3PzG4LjN68UXnGbEeemXiU7aW3A1cadpEX3gNqYTXBcLzbChYrczpn7fSMdcDLmgVJNtiijfa9grHBF1G5xRKp3J",
  "key34": "mCdtZgZvCxK9FeZJmBoiZM8mpXj5nF5pK7kwcGVLaRVXkc9ECd8mrTu3eYWKXXxWWbNPN4TxVw2FMHUtMk1wZVP",
  "key35": "2SQLss9dTWgmt3Q8VcDcSVdZ1xW7AEJMFdtfx92FmBYRdaQPhrRAWYVyzYn5Ktgnd7AZq464CQDhnynbg2BVUbrK",
  "key36": "4dobX5GpZ4XRTUqAHyRJUyP4Kz3kpfAKR7iGA527XVGpxjreA91QiHMf29AhH1hVovgRF4ivD5yTbvDBswCtZ6bM",
  "key37": "y7zmQnNXTUZ4nz57WCYmyJa5Nt9ZSCcPKp2qRWDq1Z9bFh1ZyDenchegwJ3E4kZerUKkNy7u7V4uBxyubUtJRvn",
  "key38": "5A7Pdo7roYxn9xDZxsDZrSiUDSh1NPzLkHxJF5Wbse8HLmvhWvfK3dd5NGW9xVcaVKCHgnHYTEKkDH61XCRktkxE",
  "key39": "2f3mtzzNeLcqbcdJhrv8mh6dtbmAdg2FNYr5kunNyqm1PigjG9bFZKQtdEz42LFMJnB6fP7RjaHzf9kXsZcwhr5e",
  "key40": "5KvUZNnDd1aAS2Ui1Q7qbdz75Fm2WP1BYrzQYussCeQn7svLFfbP7v5LDxErXWaB6ogscpU4wtCrTxcUACkQgf2d",
  "key41": "2FuM9tD4agNU4pm4gpzzG46PHSbpLAeMsMcFPeeEFM8QPyhKTVgoMLoACR82x3M19QA1WezxTbuZ6Md7gbVBkEJa",
  "key42": "3L7jtFbT8ouWNhmMx7Xx3Rt64ZHgUdLgDgWvvThx7ruurCZ3me782anKGHgkUQJa7MvLpbep1A4H6TLKTtuz8gA2",
  "key43": "56ge7rAFesN3BVgmBwKV99T5zbAsPVCMVt9453C8vbiV5RWdSKKfcv5N1mt9NASPtQrUnTGNVYHu6BbVwpNwcei4",
  "key44": "2V8acjWJcfyecs7Ck1UGG9dfc8rH57KDFTtmWndXorUx6jhBypjHzTJSKybhhR6ArYbpE9MLQe41xta52rp1RmM9",
  "key45": "2pF1jVj2wKTN2uWJRnSrqE8tdZkNRn2KFAt5AzVChigu3Y6vNaN5gCkziTvLhoCke4cS4XA6CpueQWq2DXv8bynB",
  "key46": "5XWjSQZnUynJ6DPN3RQtrfrYZjRThv2QJbxVmJopTeyoDLrZC6k7TLXxFxRJwQDm7xbR4MM5VEbSMompSrnF57gd"
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
