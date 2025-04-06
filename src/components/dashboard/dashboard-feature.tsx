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
    "2y1U3c5ZFZ4Yyxbt6FyLefhUHm5eiw4U5LvSHi7qiKBkaxRBdDusTq6uY1ZfA8AxiFS6khEhncdy3pZDtPK4b5JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZM4oUCrMSt89cSV3kHpnESGb2VAcRi9AKL1XBd451xF8Wk3yc28CwutyWjoFTkj4iNXZ7KpJig3qpjMkuPYbvW7",
  "key1": "57ZaSEBcfe7e9ZMgRYES7mVE8PJPRxPm4LifVUysepxyfMDsdtfD919rY9KAtdnGqP4by3yrGRx4S1kH8ZawXk3B",
  "key2": "2QDSXmZJbSvw22RbvcYXVtPmyXYgKRH6NHm5zT9bd87DDgZuvChkQyR1ZTFFSJtwSRZeeDLZvwRbJTSBbT5WRkmP",
  "key3": "4ZvrecMmuT41taevg1SXu5LfqNDmh8QuULvRgk6utQJgmhiHshmUf3miC45NxKioVifNA7HPHWeVSHNK1o1yUp3T",
  "key4": "2U3m2WQejy6CmfYhQxCdhaxYoWGz83oby6WezKn5NvApe6noSgyTXq9bv4G7CnFKmk5xczyH3EXa3nvjik9Hwctc",
  "key5": "2dCvAEXPWvyBTqZKoJCEKA8QPMh87X6e9qASsE1irPceAEEn3huoMfpzbFnhhmC99h6auU6Dcy9Vaqdcg3UtuUdZ",
  "key6": "4ivBzC6UVFojiW3oReQK57UW3Us74L7EGAxb3CAZZspmMQCd52M7MJpanCCRMQvWQb3pr9w27fPJmtFMgLcGpXd2",
  "key7": "5NvXZqxgHmEiFDf4UmWgZrx9VrC9CrJkYS9HZTi21A6gfGnDrJh5givSqvHT7R4ZMp9XP3kSwJM393UPkXYou7fk",
  "key8": "4MvhXASEmvfCH7nMoBPkqS35t6WonfNpWoUv5fE8ybHVgd5RKSfyhRb9bogKwSW8tq3hekWpcVuq1BoH7tb3ogHR",
  "key9": "2kxgn9jBB6QCbXiCa4EQAYW9A7vtq6A2XyJm1ZmWi1sRuZPeidd7wGNnqW4cx3mi9ejVNukm5EeqanDmQ7oZC999",
  "key10": "5ErL91S3Ahuqyn1DvJ5ZaNCtRWAZeoeLmQycwFXKxVmPe3k7LtrccuTRSDoELQEdm718fNTRQpF61e55fAcwDxcq",
  "key11": "p17JiiLPWQ4BEY32QtxZYtdhAtYpShPbpNkGG3QQZrTqiEtopp1AaejWW5TDQiUNRt6cyqL8YCSsZN8oZDEyjYx",
  "key12": "4m8CbCPwbwmoEXNBNbuwbdnxrQZec6ych4i4R11tLhGWnQnkttYtXQtGYDf1UGbWrJkhXV8cpn5hpwQPFVaNYETr",
  "key13": "3nHKKztEg2hknjiNP8UZwQMsapgVauuMjRTBsJkmbJNtJC2BybgArJJqf9qo8g3ETFtnhptSHEedqurpo3svohSX",
  "key14": "3xCNZLQkuufxSS5AQuQi6enyo9ZjZzGXUfGD4v1gvSqx3YtopAUQozsS4o2V6FYpDn2Q4uoPHu9fJHshPv5s84fT",
  "key15": "3LkDNFDvQmwszdvaHcmD8Xxfz4iccWABSuGrMjWDuAfg1t1eVhfBsaeqVcW8FEnNBNq6VEeHUPR3z1248UVxfhJd",
  "key16": "3qt7VvBvumXTv92cb9WSaBsQ4FtkqqpDw3C72mJWCwccSgp81ztTiieHYeDHcfFh2f6Epekk5ypTpAq1Hy9DFkoA",
  "key17": "3tvfmTpkBonjuoxYJEHdKQJPoKt84uDP6H1MnDSQYcQezFmsPYFXnwtfdUjCzkSdRzc5PYuq4gjcEZ1QGJsCqdMM",
  "key18": "5a9ugh2eDXBmijDCidt2AG8i2ggZWPDJH1BkEchmLv3QjAUyBTaBVnKCRqTJeGJNM4dZtAav1JJ12XkhBUbuACa8",
  "key19": "4pkd77GBM6NDsyQf9kGUE3JsdgeWwjwGzrQzUSjHGP48NRFkLSm1ujJqWjBD4zUEivZ8j1KjL9Yg6SgevFLByzS1",
  "key20": "5vYcYKL8e7conM4QK3WcF88j2DgPhk6wKhm7sgfqUHrokzFZrtrGzhEeWpUnbrXHUBwSzSwns4yYvjNNGUvsxeLu",
  "key21": "2V3MaDs5sbNRAc5vm9jU1Peypmwk424n4bJu1yghjzdYQ8xbaWSMghJg7NPZinHHxbH9vQn1e3GNYMBzzzAL4Lrh",
  "key22": "4rTg2HsmRoUcyMgpw2FGKGpJu9PJxnWwgdZkFShuWMLxZR54gWvFVR4ZEcW7Q5XYytoqkC4RzV5BRwZaxKd6EFuq",
  "key23": "4xqPKohBdwLo97gTEjnkkigCrmQTz5hn3Hwi9gWLW9GTqJWNXeRGHEfAXgP2a9zggNavVtY8TnVzTRTHQCNazWT7",
  "key24": "3MYSTxrEuPxBB7CXLgmGPEkCx7WiaEzcQkzusU8KJiYRtQ8Y3aWMLx7rGVQKYpjB23nwwHWhM2aRvdjw7NwL3FVt",
  "key25": "2WFqjKEyuw9JF9Gd5xLYxEA47dv9neXJEntvzPTxsrs7o17w2QnYkoEDzwd2WUYPgmLzZv1qqKRyZbFrppnuX36k",
  "key26": "4CmUn8FqNgDvoaKQsYQfEBaq3QW9mQtYHfnMutHRKEgfBvUumh44cgPeKULi5k7xR4QdNW7VMVQKyA6N2i1rUd9U",
  "key27": "4TCqf1CpfrjH6ZHzEjnHiUE3zYK1tDRRgLbLGUUkKKgAZU84Dun9GTf4fW3VSka3CEhApXSmPKefYd35M2PCDXUc",
  "key28": "5J965F8LS1iYsrokiGzxp5VFWFpeNmQoRZ46QzokrH6wUNkTz3QiVpAeaEhto8CTrrYPvjUQnfeyic1bPBTdPw1h",
  "key29": "FQz5erHeZ3pJUJgABBca9CQEUkZrazEuj1vy5ijqpfrqT5Q5xoqEUEcnz1SERscVzv5aLWtzkGpVjLkfY4GdeVW",
  "key30": "4Q41XFwFDM85KjEmtMKrRKrdjgd5vFh4DjaWJWLyg3rQZkBmkYSYM4mS6C34PMXRMWAkTYXC1B8LXWV4CVFyGSyd",
  "key31": "5QUJGeGyWsG7rhLKR1UTVzMHHBhSdRp8tozxzorGqfdYN5qWariTq387LJ8cbRddcEhJodNdungLv86F5fpEsiye",
  "key32": "228pZBwb6GmVeRUwJXUFjF7RH4NzZqZgpBUfNgAtGLnv4JPqMAUioN5bvkMusp131vdfc6PkuGu42WBWvenLBGLi",
  "key33": "4HK68RT3zxngH2yJJLAsDghZ4c62Hzp5n879LNKBrjUejHhwjpwsbnYMvZ7RHGwnvcJBb8k9fVKHhuRFu5urArXb",
  "key34": "nEvfa6p9EuDEm4BFWNm8fzrMwiMRxhmeK6bN3oqTHnRSWJtqf41sZPHFjr1yCFwg22mMq9GuY2ZCG2YGu75TQ6d",
  "key35": "5sjerZoHpBNGvaHPPQtFPjhXCdxWgAHCuztL3EHTkgwYCP2Sx8weKmAhL41KxPxWDUYYRkRuff9SjGo6vu6M2QmV",
  "key36": "25Ui4bWuV31Bm9TWx6LkxbtjPHj2h4zuLJ7MfaicpKEYU11ZxPNEg8AHPR6t5ezJh8w89gL6DWrapPYtkGH61gzS",
  "key37": "5DQiJxWNb8zw6r6jXDbdxQwF9gWsmPGXTFBs5FxAdadp3amuEjPhYiWWjyetHA41bDk5JJZcW26rwm8Z9M2DxsUP",
  "key38": "27aJyXZCQ4QDmGtTvqG7efVZRevyHqfndqh8X8tYNb3SLrVxaSHqgUAU8HK831KQVQVcuRc4rJUffd8TDXGZQXfj",
  "key39": "TnuvEU2UVdk17kzumRRaeGavhimtr746CZZ2GBDejWiSrEYUajwZdyBT1MRTL3c7ATrk1KSomSs8rNzNMrbay4u"
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
