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
    "46tC9w2Fb9VkEwoQ77ZuTh3W5hMF4DnBxWs79VKXsFfWmbFLzBmrArZsQPyPP66HKr7Cxqxx51jyntgv6ewbBCCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "659hJndyAxqfemsaYK4S1SYqiWavyTchGvW89GtKqKLn9U328yKrEJhzWPxVqdXbhduXvPbNE16rKxwNEH1AfD9V",
  "key1": "259bLWcYZefn9zY6T34jzdmotrRC48gJa1MpMSQw4ATDrfLtqCdqYA43LhjZbemCyffi4Qs8msgp16mR81od8jXF",
  "key2": "5rrkGuMX4wsbtQdSzzfRcUEHLY8rUm9d97v3bH1zjZSut5J5a8TaTDmmGLQCUzAxj7BVMqfi2oQimELVbofBa2xy",
  "key3": "5PndXqT7eLPFYrJHnmftvPoBi1TUqMZCEKUXpGkbonbAVr9AnCTRpXQkKmcbqbE7B1PNttsue8GDcfBvrVvhpD3C",
  "key4": "cyWaH9T5UiobXii8TMMmfBPkVPCFvD4YAimroMNfjekJ4RqcLdTJTtmPWky8isTFoA2NhZQiS79wdVLkNgMXgmT",
  "key5": "3Pi4TeWfdfqcDTM1BGuNzfagYNgDAV7N2riotNWQHrojaMvybpmv8Ev3s4urMmUa7u2K27m24LwnRgwrKjPT34Ug",
  "key6": "2sv2nVm17NsXzLBfZpDQUuWwayASmE3BBkNHWgpdNZCU9bBGEzbWPrWPTyymLpzo42cB46Xd2jsRizwTaUHCtQmG",
  "key7": "5xcb9GTzaxbqDtouiHtW1aaTv7r7HML4q41xe1vZ1M6LKgYDUjVWw5Rad1vsFFKfZquLJibzDmB99ckcw3j99iQ2",
  "key8": "42qzPBNFZqNygK3SUih72jAEcvqNqPRYuwMdsQYashWcohLvjgXKVjMJkZnzso7iFDmkRn4hCAKL9vyoTFGjp9rW",
  "key9": "NspaPrwE8XgVrN7hxv5AYkiGhrFTZ5AK6cFCs5mPirYCh2xUNJ3Qxo7ksrfqfjd5fv4mwzxoJetRVs2mDaUHXMy",
  "key10": "2xgK21B2xgME9yqcLEfEABeuFBrZM7KQcQp8cyf2CpHxgTTGdUUkqvDjL6BzQ2sN9uydEL2VMVwm24RxHR13V27z",
  "key11": "5Lf26t6o1xdmTt4oK6wTTeW323ff9cRrL3fK4QLbNFvREFhj3UseBbA6D1DfMfq44QcE8FK1dsjHUuwd6g8pe3ED",
  "key12": "51t5GYJRgxLCr44kfkvEaJhJq7ZfsW2u6SiGWJfbRZrf2SVhLZV7zfq3yPyomtTz6VdVzxzbKZ2gxDVgVgMA7vKw",
  "key13": "ebJuomnVk18FPFTR7oMVfXHbTESWHhYeJ7ta1zcjZ2JgCgWqJMrqHcZneE5pQn296mrgNsvg3ZfxsEjVDfDVN3x",
  "key14": "3zZsfNwvurcr61erq7uUaHTF1PFDJU8et4Tj5jTBHExahNnA3Xev6AEAGZHHqVcD4wesbUZTckTd3mjbZA6MAHRt",
  "key15": "HUkJ7cxCBeDZsrJrw3GJHPe9izWHPWbYyFfyvSUBgwhviSBYfhmfr2JxQB3qtX7FWP3KLcGmer4wG4984xwzwM2",
  "key16": "5N4NaP7Mw3rNBkkxck7Vyt6zy9dYyM7xfpAskGDAaRgMSMCy58a6i7FFNvGUqnmD27voak7WevirF9VqPvDoXdyv",
  "key17": "4jK3RA23A2QXRDYyQmugFxJpYTxpuX2b42Wi7HiQ3PKKaE7e8GXAu6KfbHDVqKNbeqXM6AmPkv6EGJm1TiwLB9j3",
  "key18": "4QzUQpQHizkzZZteUDfcLvB6tZeRHPHatoA6MpVjdoDRiLm4BFUAbrLboLBc8Eu5maw3uWBUVQxuXGGewgPS5VMr",
  "key19": "3KPGh6T83Py3ZNNujs6esLiWnEU21Wwqss35kLrXzFVor9ANDWRdecf1mNopEAhSsoEo9ZarF7LPbSKLf6er14Tc",
  "key20": "4LLJeukudqpTUtc1YHTH1fnEZK4c6pVZ7gxqikyNprJ4LFViiihsa6zV84PBMGoLKcJHnJkynZjg66KB4jv3yxfh",
  "key21": "2TNJPwBDSSqZzpVHNfXwZozCN3iUtDnf6K9RwyYyuYcRkivCwW2yZCW6JFhbjgSLTVTwnmH3oNSNw4wmFcHL6u8K",
  "key22": "4RABW6vzbFtvirDScUB6un3LjeLep6M4GD91hQ5eYH62VgoAJ6ntyHQyBUaY4TC9xisvqRfSh54QJdWogT3ZC6mZ",
  "key23": "3etu3CrSaUDUHhk7smRK9MbdkPQNEmQX1hdwCG7cMw4rHDDtbH9nb8ZJiscYELroGPtEuYJRmXf1g5MszN73RJo7",
  "key24": "3R6CWj7CARKxfYFPiMC6fxhrj91uXuaD921XQKn4LxwYCFR9sPnADiWNb2Qciezbxkirr9azMohu4xxPPowGoewf",
  "key25": "2ZX3TGRqfipqtHZby1wGxYbNeUNiv8gF9gLKpUNwH6qyxPnCZGuzmDLECt5dKZZyDh8zXqyM7me1JkDwHMg6GZ4Y",
  "key26": "5JfWA6rXf2qLCcQuxs3Ky1wpY7KBhzUoMBF7jAbrhHCsYnqERSTgNTVsV4fSws7tf2dLCkaD3WWq8enPDqciqHXR",
  "key27": "3oYEF5FKsgEo4pXcVAsMyDqRE5otJGdP9FBWBBR7izYaVtXrQXfc2AZH5KtjBPrcLxS51W8TB2L2PVfaQxXDVUdv",
  "key28": "3B7gtbmG2rxDFctnVRWWCLfM7geGG6z5etGRDZMqB1xujUA8mAnzJggBij6gVMdTLdg6TBMHqFeXBbEX3LyUc7DN",
  "key29": "5Tp98Go2rP25dzTDRgsDfRAT8vBzA3doftz4n4kUq33CHEjumrXs37EaDFZmDBF7yyeckAwrF8wE7sj8ysjmm6bS",
  "key30": "4KhUFiNcWquar7vZLotQNhiC7b2mTbRvwyoxwgfPvrj4xvhibmBeAGpMx9pTKncQxjyogK8L7N9bsDfCMhd8WQPV",
  "key31": "3PSMUpmzUc499v8uauwx1qtjgyBw1oxq6ZUXQVXUWLzLuCLQGrikPpABuPiRbNdYZSdWthzA3Y4ETY4oLjuGHnMj",
  "key32": "2KgPUEDSLssZDqwAFjNagnoCHZpfALftoTfURvaRpC9JApKSDgbGGJdp3GVmsXypk5NKUZhfLe95e1tKRZXQi3jP",
  "key33": "3THbcBebYGqTbup5PxEbLoFwy7DMntN4RCB9UD1K56PBVUbWmP25ra5F5BdneYMsKFMc3CR4k6H87xyGp46HWAqq",
  "key34": "2uYCEhvFxXwyynqTBdiHyj6GYuJaFLn1ShNzHG2DDqLyPLypm4vdLt5mPpG9PtZsi6Ww1ygz9nfSX32DxSk54jaA",
  "key35": "3tphvN1DkfFPRYAHhwquoqH8biwupBbpPhWfjpfAbhm93gAhxW2qNV3oJPebjhFNAfazpMKGDa7PZvYDwxq29RGX",
  "key36": "65MZM8dSkb4GYZWMJ7wCRUKf1z3vjyCsQ1xiM11JPYp4sv2fyXSShLbM6ttHqNNnQ2mTXf9Zzhpbv7F9ewLahanb",
  "key37": "2jKw69YQ71Y1xt6EB1ZZu9tAZWcttGheHHFKjVb5QWRvCUyPpvst93RxitDBRXDXruJX3nvWT3Zz4hXpAB7VX363",
  "key38": "bq6GmpCmDTAmVNuVoGhgsu88WDCzaaL99vHt4eH3dimMsGUAPwuLM1SqwKCaSPMBX57GB5pgpFz8NAaYrfdCJ5c",
  "key39": "4yaPrUq919xHbzBNB2LpUz68KAtXYrbipMKZQinRjukvr6YGy4q4reUZFFJ444HSywKsYz663sL6qvFSYfYRQKVj",
  "key40": "3634TJgWu5tVfNcpkRNNX6VvgxubJVzcg1D3A9LsrZ8BkPaCZGB2wfRCevDHTMJWXivWNQorxBGWoJBFudffjNRb"
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
