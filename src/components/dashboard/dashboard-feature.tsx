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
    "3tf7ZGQHggYT1VjiQ1nrmsycvoA4b47pjvQe85EtAtSywFTK8sHDhDsSE42gyXMYzpEWXA7qq6UmYi1ipN6JkvQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BYczRcWguaMPVXcSPYz6kEs9Sz4wmnH4rXwWe2Yf6HYGXZUk774V84SMGAPMbwAGUHSgP1jbZtQWLnxacAAca75",
  "key1": "5zYtEJaTVjNmqwFsyTQcr83jgEvet48XaayiMS9ZkBudMPKQvHg1EsDsDf5z6rtVEZs7bDyD4YZ39ZHLvSDCbm9Y",
  "key2": "536tGu14PCEDM8yTLFrtckD3stEurvkbLD7Xsz1iksDoESX1BZFaHntkxvfb1497m3zDvqwh4oHtxQuvvLMFXxh3",
  "key3": "ieYbGX6zgfzogs3eGV96nGg3mQpVcHxyKitnDHkecyrF5qjCVGZK4fCGfKTPqMigpWC1hCTy8xAXwFYUGZRRcxb",
  "key4": "2t3uQxcdLi7E6QGqwqWhnmU4C17K2gfs4fhvkK77vQkbibgAbRmaJZ84M1tviGN6hUwiS6uKiSeAdQxb1ERbxX5M",
  "key5": "25Z68ygsgyoQKBq147t1xqqrVuwJnUaFc41pQSjHiFKZ3YCE3TXQbGBKsuSNp6dJjftXYrvVKkLT3ney9ahPHWsZ",
  "key6": "55CqwWTJMFWH5SiPvhd4XZazzGc2q9PEpADL76XHdE2n8W8pZuhhovuZnXLPMj6nM2rqPvfQiS6tHVuK5B5yzDLM",
  "key7": "3nHexCtNAnwpookmwJhNv3HzU2DHy3ZiWHhLMwR4g4VbRrrkPWtukqxdrvyMHEVW7nW29xaCmXBwY5d4SAyFUvMw",
  "key8": "fkg3Zdpm4XpqdJU5yTKLtF1xXykbkt85cZczHgGXe9ejw44hkaiRhhufYTEFLP44vpHbzS6R8zo1bvMvLLnSUot",
  "key9": "3cpSKB3bVvUShBXB2VpuJYvSj6ofYto8phDnpJ7q7sBxb9G6U7SicKLg8s2ymz91j9gpXtZzjQz2jN6xHUqEGAmr",
  "key10": "4ygDPqj7zP4NiWDLj3xrzWzoPP2gNmq1wNtKnfp8dhxPaHkKZk4h56XCLDh3tvBtQMSKu6vWAB5XYctPgW4oRfFL",
  "key11": "kuvkgt1tiHww72JhpYn9c78TP5JpcBGAg3djkj6C696P8B97tapo8wHjVUmtZohZ6MQgjEssWQPoKkCbCDoPrAK",
  "key12": "NY7RJfcPyeF6VaYYDcLJ4XFqUwQixkkCKDjseJ3jZr9jCySaebQcfvGc17VQW5jbyYSWVdWuBtaDh1C1Z3jZrsc",
  "key13": "2ZzqzyZNDwTD6mPKuTEycAecTR4xdnu2FzQjUxFcWksav5QnuBvPr14nL3tckAb9m1vZNG3sf8s6QRE4BArLKYCB",
  "key14": "5u47eaSJZsovDhN7iXL9CdhEXFiQhLZyeD1TvATGf19SPZgZ1ngEWfWSdmn3fDpT477UkpQHhs2meg8UWgzqvEmB",
  "key15": "2m99jKuDFDnuzGeyD9nJdFwiKq1zXfmc83jPM5gvxaL7SU8SYVu2dHZLjkeTn2ES2WQkfW2HcCn7SfsanUN3SJNH",
  "key16": "5tDZ1aiLXqjTwqzA1yGCfLUfQHBSuKUKDThyPrwy1nnNFsJYAPtSgL5PG3dPeQpnTqEoAsf9o3f3oXNmy7SBZsk7",
  "key17": "dwfQHvzBrCgQvX7hZuCgCvUoxdwaQskDfHozpLFuYDRztnGWvUZw7K1xydovtRxM5R1LFRMNk8ThKqtuDUn5V2z",
  "key18": "3STJ9HNbpDgKxYPDcVPjiE744BaasL4FoemDBtz3h18fJ1Hq314AwwUjgNF9wDD5qZw9YSgKTPJAWQEpgd2T2LXi",
  "key19": "2qN6k3e7NQ32y82eezHZ8LEKKTL4zBq297KtiEPAEAokr38LGp8MRREiFSZeABTKiPhdoczV9vTppaQ2uXj9DQJo",
  "key20": "rpKyuaDYqWrSfvJCtnuxTQ7UHDt3EMSF8Kh6WiVvozJBevfjr15j7p9CJ3WBRRk53fN1DXEDvEqfZ7KXGumskH1",
  "key21": "5voqJLhfth5aHYitGSiHgMp1k6VsLX6SSaqcvzxcQHG9iN865WyNytjBcipaTb3iYi3GxBrZXFT7aW9Qz7aFxx5J",
  "key22": "47DWiF9MtiFtxpbxAneSfFZbrU9HR1NFDVMVkN437L83VkAHSy7ixiRmLfivNGh4QufMuvSqk3au6etunZY2akxj",
  "key23": "5iyLd5SYnqbmXKxafc2WwcFM5RzpmUbjc3CNiWwo66HJgKfgpwQGB7GymhAy8ywhXAA7dRLBPdYq1SmoAiZq6T9f",
  "key24": "wePBMXgBfSs3sJjhUtmWGgMWWuKbdaTRyh8ccjGSgUntvQ2u6jk1DnpPhxh49oyYfHg8XqmyoxGuxKNn6TPEWqJ",
  "key25": "49rWDnggDqZWqbBYDFVsmgyxmfgkoJbzkZt4L13ciYQqTXnKQ4cTRF8AitQtSorqb8aZtvVUbM2Jzwa4o8fHSYST",
  "key26": "5vmQoWo2zRSjdN8ELLr8cykzAhonpAndvJW9NB1Fqdod1F8vjn5qbCF2Ky7DHV1xrr8vMbrJ6NgeBK4gK773kB2P",
  "key27": "39LnQHVCZfcubyRYYLsFHPeLs3DWFBo6Q2bPDoWBrQX6CLbYiy2oP6RsEVRtvwgY9XYpbHbPKnrMxACnZ5m77Wxq",
  "key28": "fw8UL5rSXRVaLNL7G7fKN9JxYDKn4ugf3DnBu6sfx3MGcovyaLuX9RLGdrAkK9zX9tai1rD4dM9dunDPFRJy1Xy",
  "key29": "537vzRFTuXBqgvR3dwJaCS73Ga5gbAV2mmYBNm4FgRdtbapFC8ozj6uJmUQ1HD2UV8rTHMAocUrJoKSfUgECFZAs",
  "key30": "4fMr9edbCcA5iw6UGDasr8hvUCzbHp9g6GmGCVt6c4Bn7W7EWsHuGW4t8PkEA52VnqpKdKeFjexfr5REayBKr6C1",
  "key31": "5EXaNA6vKtr9SZnkjhPfpFLYEViLCf6GnCg13shKDwH4pp28bvvep3pX8WWhNvSVctwh1MWHo1ny9T65zi7odQeZ",
  "key32": "5Y8n8iovrraMfLytNigbMvUBtX8Lq6YwPHdtPt9MswZWVnfnb76pWtTvMgMBejZjj9eRWFLNH4vnL5CnFTraSgFB",
  "key33": "3bEaiSVHfZyUuuvPVUzZ114hMwciZDctLdt54svjksQx16Ym4gxzUyNDnDr9mTcc2hnz2K1Pdh3n6wzsknpyZ75p",
  "key34": "4vFLfZhXjMQDsJQq5HASQk2qUTkoGjqiGgw5HHeVQYQECYcfPApFtM2Ngz9v2jRCQLncBzL9uoH8qRJTPJMZk46p",
  "key35": "3Z3RNFMqoGy7LVcu6yMY41kQfLBWJjXyMgy1V9qEeWwS5fWhS7EHJH7VQmrr7wpFWntqV9Lnquw1ASkWWEXZspvT",
  "key36": "62J2KQcpgGtzq8nLxCGvMVgpZnGaD2pv6ipDW8X3TdANdkVvkS3FLwEcfgREMXUvaWYRDmBedbtZbnXfxPQw88AR",
  "key37": "9h2TLFRpjYchS4oXzbb8HkCewXre24FZcgsjkskDb7PBkJbp142Na4Hvp5T5Ur3tJtT6hHdyT7rsiJuniWVVUCz",
  "key38": "4YHbwvzS9y1MdWR6E22oqgHU4BDKiEpAy45r63YTQ8u2e7GyC2SkAjqgAnvHuEnSAZbTBV2gwgNMKGMCy5EhpJrH",
  "key39": "V5Wicib5NbSMHa7TXowwmZtSpGsy6h4BBc6yrvkzeCwUv17t8x5f53kM6JFPRgyTWRanYzUhQCqi5T5wY9sdSH8",
  "key40": "2mQ3uRnR3vW2SBAgUeZSogwBdbKCEnen82QJXtaLTPRtgQ6iNEn2Tr8eDbowVrWqrdWW78o8sUszkUVm9MjaTqDQ",
  "key41": "3pq6n7YmtQjnK9X1Xbgdtbd6b6DjnELRwSmB7KssJ317bJ9wiPHbSXrVWiMqQngLSrYp5soemuSgpUXXc295wL5Q",
  "key42": "6yCGaGR3fu5zUG1W2awKX6oTXPY6PBgunSwXfGuz9qqXCB8ESWX4GF6ZBjc8KC2vc4f2fujeqqXs5HaFTtrVEJB",
  "key43": "5Nvuj2RQBozJn5fz8zJFztRrXb6Ei4cGBFtR99A9zrH9CcqNcRqzxiGhQ3gmCcMXjbxBrdBRWw9ZH3bjnKHbzbof",
  "key44": "4vkCPudj5z8NoGWHorLUgRW7yv84Y9KkMMkkZNqvhKFsoWtctDLuuojNL6ARNggrqoE66xoBWf6WxVeLvPSXadEk",
  "key45": "VJhHZCLKC4KgUvMncwszsTSk8VhTHTGVrnrHyE63oLYkVX77ihYxi7kuLcw2HDkxX3EPRuGLtRLtEWHdVwaPanK",
  "key46": "4W6upe6kYSzLHua1m7xY9dbYKUkYbPHY6aCDzDr9zBTLHvZRArZsS5qRjSsj2x5mP2H8aHcEBkCXdwjfAfNNkmzD",
  "key47": "2WGWexAtxaRzU1pHAYVtcsrDrz6KnxvcTc13YAgoPEuHpLcLjLx1TPNkzB8bjgdEvLQBpr93m2hHKskovhXvunjX"
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
