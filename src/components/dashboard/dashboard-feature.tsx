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
    "5thWtccRRzrFYMJV1rq5tfYBM9fxhg4JANM96BqZfgQnymNcbYj3twNSuoC3CGef27H8DEb81RCSrUKAgq4Z8nW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s5Q2ZfHMcnMz815e7ZtU3SYUjRCYzhvPw5NrdH4LjCBpvMFE1QvVoj4nHTiQ2foV4hRpE9xQsbGxP1QhmyqK542",
  "key1": "4qrC8f5XuTxzXfoLek8ycsWw8Jvm5kiJVcP1h48RWJdNRkBsHce3MnXXwYd9j4YFbDZtERtdgap6CPXwUVyy7rTG",
  "key2": "5pE1vKbUwT5Thd7PpGBuv6t6dZRai4qiJMNWxqaduvbgpQsZMbArJSqwHigBVi4LA1GNz7QgZ4gkW5a1KwXBinbJ",
  "key3": "5BKfSYVPYBC6GMGeHJ5JDENtZvvpyAHKGFjcqybZz5rTxMNwAop24BtTHv6DkCFP1pGhcXU5iU7iawny57kkarqN",
  "key4": "2GgNKyGFcr7TJYzmNkcsgjSaqijVyE6Fmye6E3w5k1nPfUBcTnGoCGxN2MaokS7tLKDcfPzcy3Laf1SN4XRbANfN",
  "key5": "4Dtd2cCygKFE1Yo7Xf54bDWr3uYGPYh7x6Fc4vdsi3Sejxcgorj9p7rPBwA3SgoPYUe2GWpRpbuqmvBCKWXEVsmf",
  "key6": "4iJsbPWD1KEwd65Gk85XEXGsNMDN9NCGkCaDGgyX2BzoqR7YknA6tJiyx8pbJGL8d1vGmC6xpcLX95zxnz8dYg11",
  "key7": "2MZ4ZDHsYqGQ57MmZr5Q49ZYDrWjaxrwXJAy6H6EZxJTabbz6WyDg73A3PLLG1yKyzFQ3iofqcx8UWhqe5y1NEBn",
  "key8": "2TH7o4ccn4L6yCSCKCgbLS7jPXgWe6dMhzpS8PDDqmnHNYMqrSRgcUZJfYNEqzJ7kWtChLBEDJ7eY1TQySyvKVJf",
  "key9": "4PsmxuoowgWdSz1tXwh7mJc2ATyGMfhmDtn17x7VNqJbEoXUCLHSuh6qTEUyFSimfgGYEFKiH7f3g92tnhZxZnjn",
  "key10": "5fx1s6rJReLujcteWdXrnWW7EuDz4BMCRTDyoLB1YabEAAeMaZwjsPTMpNbpAFa8TmBfW3WGniegUQzSRUU9yPaK",
  "key11": "5BQju6QtqCyY8p68Kcg9CuvUyk8TAZSYAao4KGsUkdiwC6VkA8KiY1woFuqPfexPJij8B31eVHd5yWtwvt11TQfi",
  "key12": "3KMP1Wj9wtxD2s2mG6D9TEjseQmzygHkaVVHk9qP3UvHGnAtMBWKgVUyD4WzYnNWhSe1NN9zFEWgRTpwcvEWa3dX",
  "key13": "44HiJ8k5CWijgo5GrxgBb3xse5paq7UwiQLdpShzTHgoqJ5us64871PysQLWRctaGeUENZJgC9qAAqpzWA9dfvDx",
  "key14": "2wmrN7baMtjnrgDzf3Xq2MLR3qQpX2CzU2SdBD3uhUkNAFG5KuCSDMCTY1DuHX8G3PbUhAqtQpDVyH4aPhkC2iW8",
  "key15": "vWqPxv2NBuqz9iiiGRw1TBtHEtxJhCC9HjndHhz6LuN7deqH8Jo6d5xBAGadBVb29uyydvGXp3So9T9T71W7NZe",
  "key16": "txFoF7dA4DT5Zec2qVWcvmAeh8tLqk5pC8NYCZHSNUSyumevo7vBPPK4ZY5PkKpEuzryXJ8FXHEAhMKzQum4Hwb",
  "key17": "3LcEpquppwsjsTprbUL3CQem8vCwvTZxCwMVCoRjSfdZDpC8LfZCVENVQB2ZPJFAKGAEKsgjc4De1SxQkX3qt7QA",
  "key18": "4UwceLX7otiPpQYHKc1oC4u7cMfchrxW2dQtqoBkmjRG82oq4jopgac39NHyWYoZJABkLEWdt2zCZnFZdyjksYGE",
  "key19": "5gDyCeE33p6yqWXuYH9AdFnraYGHQPpW4ceGN4Pky67F2zizbdsNVwxqXfZZnXJr2D6MioFWg636a8QTHMWBuZF7",
  "key20": "4wWzBf5ZAEa741u7uLAFQYdUQEdD3sgXv34y29K1xramN3f8Dx7to3V6XiC3e2JiNNzHusHMg3WY8BoW4X4zBg72",
  "key21": "5J3p6bSQNrS5r4b7exQD3vQkMMHTkjUEXQbCwasJodhWtxZxffQehkrqhEbXepqvHSMm4fDJzHT3LJjsHxrYStYh",
  "key22": "2HfrH9cj2ycThJ4ReZoD51feoDMz2xCWY2VQwB9G7mCg1PyXG5u6mQzcBkzSfgQx8ffMmnFD197dXZSubAEkTsUS",
  "key23": "4crxYjX1qXX5u58bWK2wkgVEdCrrAEuQ6SW6kTEtoDMi336avFcDUXrAhxeDdcKK2axaKDDajSCaJDnooySETvpZ",
  "key24": "3L3teowWWfnoHcduYMnNKKPAfTLgi2UgPm15nW4dPCkQ1Ba91PcMwdDhwibQudcypfER3dXa5EwqwBQM4Avr8PMz",
  "key25": "5a7FGoYZXRsZg3efrX5QSaqifLjtHPUzHwUVLexmt5Ue8bsSTxEo6SGH2noVH6ZTScemgZ3VekunqHDQCRgRbkxC",
  "key26": "3ShF23Z8MGuneKKeZwiqyF4J2srKw2nJE8oz96iNWcxU2T7cQhGeK6sWrV4NipnkZmyXxs3RdmJyXfVxVA8ydt8H",
  "key27": "3ASEGME8jCTEbxHuSxkPtGibVCe11RBgQJLymJx8NPSLYonCQ66Fp1JNWzCsiDS7wgo4ju9HufbyvzDpJCUiUMgJ",
  "key28": "5eXDjJwCZY52UNTqUttF9SyrkhMNnTfhYTjBub7QVQCVNAAtcUP4zcm4Zv5rFzQHnKAP7f4FAW8CaqZtNCghpRz",
  "key29": "3ki6fCWtCdgBfuMb7DQPA9BqAgmMFu6CgskS7MZhZS3PJeqMyNFgzrGeM2HYdKQ3jXjUpbYM6ZubpmWmPm7jGcUE",
  "key30": "23tLJkFGBNwaTDLsMabRuMiFj6xDtb9v4Czy8BQuHC3uNCK7gDUWBpafCsYWU25fzBqJA8nU7Ns9tXpmmxtvd9Hg",
  "key31": "v89u2XGsLuajnW8Y5Dh7APgT7yJqjfby8AMBkf9Vmr2WvmgBVrxqYXVyQucRFD6Vgy2kEresE5yAaTTprM2apr9",
  "key32": "4HRapvfwiW31atmtKaoEqNjwmWZzoswauA5DFTGeKCtaM1FmshdqxfRHf9MDRykQh4VvX5Sb87WBarhcQAvMQJc9",
  "key33": "2FUGM4ML3qBK369iGfpqHZvcGFt3qpF7mfrV4L3AE5eAKBwK3tqqAaxkwnZJjXjZUXJJqEUoJCqsb61692xY3PQi",
  "key34": "ZMYthzPy5dNL4SBwehL1oYCga6JNko7KoZHpu25m92tGzh5dycJTWtJXSrrFebhCA4nPZynCpwx9kUkPhFu2AsG",
  "key35": "5werJWmq7ctPeTxKojpDg3RFrZAeszC45w2v7tJYfpoG2Yk5hX6YSafDPTBTX8u3FscLBeVCURhviPGe2MTy9JUs",
  "key36": "ZhtKWf8z9ZRbckQsqSgVicRvHFSCCkSFa4qBALZUPkU8ExHtFJhGpkz5HZ2qeoWBnHn9orjnvjfm94aBwWQAX18",
  "key37": "7QtepSeReXpz2e4F9EpLRaQG6yyTJbrmuGrK2LqvBrdSN8kwSthtn29degFmLTc6BWbzLii46dTDuVaB2caLZsc",
  "key38": "65MqfejGbX6oLSf1uUNBJHmju5PQsKja3qroviwokeN3YaFSJ5MZ1yEAiZpWFL2xM3p79AUoco3K8pB3QebjCauF",
  "key39": "31zhSZupgp3GpBqsX6mwg3X5yUTpFJBBzBEtSJ1zG25Eh3sSVzUytzf8GhQCrCEDfBc94aBUpzve4xYmt7z4uUzp",
  "key40": "v41WHcg7d9We4zFmsb2R5pMx9qTFY1HKtWo2r1ABXVmdcyG3u9Ly6Fx6QeRoA5wLxzJ9gpwYPzXd43DHaAD9cTE",
  "key41": "4F1ztX9So1knThnSJKodeJGAPEjYRHKbceu4rbqb5Sxmcmo53pR6iBeTLCUskZbXUgHYPYgQTErcncig5oXueNuX",
  "key42": "26zumSmhPbkpbk6Q6Gg2WPhgnAR5JY5Y8qt3vMtw9aLKp9iQ4TZkmno62Vx84YnYeoHDxLki3NNBhyKyk1E75DJF",
  "key43": "5fz2ZezcnJqQyY8G13waNH2M6qngNw4sVDJdNPAvooBGyQVkmHE4oV5ejXvevvvVqyezyGCU7A8m3mnqmEefibP6",
  "key44": "3xhnDeiTzq3qDPbXHwteA6gmsHvYMSTh7vSRQNZ7zHbxn3SSCZSzidQ2XyKasFC3xVCFTeC44j25PEtNtfx4e5d8",
  "key45": "2sEQ25sBjFsQuwPLyQfFxT9ybJhRAs8c2zAuDZtJmpCwuAKtS884ZtBsEbBBWXX3YGR1EVqKSSu9GRg46ygt8A8k",
  "key46": "qb5nnMAVTvjrjDom4sb35zoG1JwGLFonh3nLz7b7nG6ASuDvS6esN9gmdKPLjTtrkcodfo5bcexuSutUi7YdWkE",
  "key47": "2J2UnBTbj6Ktcu2EMzXbwWtjDWWp5E79ukdy7FTNMjcWxdgtBayP6nVxiCofkKy7k6ar1mWyHh67H358bqqwgCgf",
  "key48": "3imih5wmSUTwh8CmSYR2kDBeaFL6qxcbEomLs9a8yPAMbdpuwV7W8ojh67SvgYMMDqMtNtodgU2Fs8nvAsk3vBEJ",
  "key49": "ZmLEEqjwhBwf4e3N9UW4EBePueVAMyAf9LQRpuBUjAMqWWKJHSYGBp88eKSwGU43xjcV2xrZNXNJjbgxGafkoB1"
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
