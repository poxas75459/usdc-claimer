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
    "2Bbygw3PFNi8ZorQKFfbjfTn8tWeHApwsZqHn5wf3UCFL9S34FTduVtjqoH2uJTpCZUpRzPeEz83EHrQQraabNHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35TcDvYv9xvo5coPzJiRpx4jdAq49tdeiHNJxLgVrx6sbBwRQeSYNGC5ahKXaVawqNpNd4b8F854JmJp7GQMgSSt",
  "key1": "2euZvV9HNpNSUshruoLxJAUmidD1mssrni12rkEybgE8k8nvnxubZEmV1Vb36EUss4HPbHBpodczunWaJeZGwN33",
  "key2": "4LzaF9ouNm9YRAnDiRAdhnN8SwDpaAdTVTUmFAfuwHJnGW6x5jfx3qAU13s7g5ByEPeRYfGWYFQV5WcxvVPPHZKb",
  "key3": "WqMkm1hdn6jXBreQbpvmvsQsithBR7uDkX2LDxxrM8av2gKjpykhFgeMd5wXYBCPDPwqmyeSh6U7JBhWmjhEHxZ",
  "key4": "5uQz298RDG4UHnMZPEhtVLec9ZNSsVguoqwPQuPfssXAwm3vRsrsQiFo5VKpSik3zUYHzFYkZAQ2ipLuLVcRAMyn",
  "key5": "B9nYpnSmP6rv55eQwowpg4c1E5xexdi1QAs7yir4S9hW1TEmwh6UkyYz84WTAqV9UNyc4fKJHqCSCEBL5nMrNBa",
  "key6": "3b5tAP8TgahEk1erVsNcm57Tq4Lnu6Ce7H6mHEmkYfvX2Py5owLGEcHd14Xy1XpbpCsvS8JUZad3Q2AL5wtF2cr1",
  "key7": "5U3YUmHNb8rkuFZqKyc6sWiz1WE5DSVGRyFzVd1roqXuPBqGUYBGEcALyHrST6JddAgaMLMJzRv4X2RZodJRdJ5W",
  "key8": "3bvSf6BzhWUFBvYLrue7cpbJoFtkX2Axis5xHGShr1rEDuRy7UnWiUG5jQrnf1of61eJuStt41o3TArBFs2xqzcK",
  "key9": "3UuNkHzHkFA8pSr8nLnNxbiRqwyZitv3LpV4i2YzBxwtdBneEEfhHXPnfgxYhAStDqW8USkhjr5Q6K11HHUWxqAq",
  "key10": "5YhAaAgmaVDLLhC6e2pnL6cdqeapwKVDNzSS9KwXs2ovyzmvmuTmuqppQaqy2sTibrRvmAMUAACMuxHDJRBwZ3vi",
  "key11": "ke4mGSSCXPW6E451F38YionXp4N8tFtknGNRRxFUETnZk6iGqqFq34SW66i6PCSTG1GkpRnZvcY8W4xTXccshVd",
  "key12": "2eJzsrh4uTFcAKquh24FPrM5yYgw1eW54bT3cm9es4dKDkMKmSfVejMnAC6ZLY4YYcBKkfRmNop8jp3h3x4QfPRG",
  "key13": "3eBsyuo3sYc6djarjNUodcde8HzKu2vaVMYPn1rod78BsNFYD9xj8fSYkphEUm3KgGH4z9bT4q3DDDmeiHq5W8F1",
  "key14": "Wd2obuMsmU7b8kYLxLCMgLM45ziMopGJ3zXwybwrGre8J7jMx2VWscr3C1UPDLSEqCyCntTbZCbnrsRJqk9BMD7",
  "key15": "58UFVeBtRg8w6EqbHPkrsWq1dKzzp2thf3zUX9MS75W8WRPLbjkosoDC83nD4Pis6Kg4aWYZUToGYUp5S3hvPxL6",
  "key16": "57V5abBU3J8Q4xYmwPppa2uDBE12nU2Djjq8umaZeBgrhZUzVxR5t8vZkp5sqeJQxos9Q19ekKpJqMgPcMVjakJ2",
  "key17": "2785U8GWjXPjM2MYuYoCr2bMeeqRCrEuEUduZZZhNc59kdtSGxVRZ6xtUXGi4QPg9hFFGQxXAGuGqkGQWQw4odTi",
  "key18": "28CYiFPBQkXsHfw3jzpVsRUV9Bp2zDMQccUj6h9gQtLpi7AFJfzQgxDypXZucoYdQFhUdWAuQckM6pUcAnuffkWM",
  "key19": "4YmPZtxNWCbuozyRd884zSXLxXXYSzzCtQCsL93xejMoLtBkusDmhuZPeXYxko3GY4BGQFzyPELdff1ncFZr3mTZ",
  "key20": "3ZBDNieNwzja7r3ka4qdt7kr5KG2SLjpbK8VHhBGKXBxw6NciV8fLswevqdUaMthaGfJqdjBHgp9fM7NLFDZThrV",
  "key21": "3FZhDwtwCWzbqR6k9uTejWF8hBKUYsj5xPHeBcp9NSZk4oKj8usQvBwhetL2aBpP2JiFH95UKeDg7cEJu78LZt2s",
  "key22": "2KSTBvhsHK8W4pB8Q8282CH4i7De5WgsZQDwgTK3PWisyZw8d8hEUwhi1hH1HQKF6Ss2X5nUyYNpoV8NzNLQDDBS",
  "key23": "54Uqf7tzXbGs4THGvpzGF8FuvRAjq9TsxB1fgQpU1G1seewWmB1boJdH1H7qRr2cLNDhBV7AcxxMqGGQ88biZKcN",
  "key24": "24QdTu7RFFkb6S1qxRD9Eq2n25iS1bA6UiifKvpzeMUfkak78FGDArmKZhJM3fCmAdaQgz1VWKTaWNPfp1TsaCDP",
  "key25": "4L2kvsvSyQuMyQwVyf4q8XaVtwuQC16vqKoKCJqhpGuddJxNhGeViYA8FGqbSACfDBNPkm7VaQP57MQdFsnCuavY",
  "key26": "39oqqEUKw5b1omfsa8QhBeL6iikgSWbPwDNF9NWWY3gdwoC5k6nAsJ6WVMMT2HUaWn8xoAATtXRghWsKdPrQccLC",
  "key27": "4nQGzRq8SC8dTq7KUiwKY1EUdVXQkvDnGm45riKnQpzdnsAwRr7eL1ZVrpsFAnUZG9ZjxwjeBafmmAiQu7z2jr9e",
  "key28": "3t3XrVBUDc3xqUVUCWYEqHcVzj8LXHGx69tqhqwG1GLF3eSeSpJiLruGoSJJjTu33ZhEvgisG8bXekf1WpKVtPye",
  "key29": "5bmbcqx7ExrF4W9mTBHbn7zCyJq4zeA3k9iGDpR3K4yPqFoCT1tfpFwp3xPkjudkNhCNrWvh5ivwA6qhyfaoRKQb",
  "key30": "53ZM8kLqqjKDDxbC7x5SfJwPS5j7jqH2P4tYWzu3asGzsVMY57brnFyacty2vzFMgqh899cLZ1LW3sW1m7i66Z7K",
  "key31": "wXWftdSnXVszYhQo1cFufCMUFB8cjAUnP7jFMgwhY6ry4Gcvs1hPsMdEBHXbMYjvXZbic4HRz4Ge7V6sb1ygd31",
  "key32": "3oE6qZsW5PAwDEoCtYWjaCLPgeLUgLFMWyA1XgcN7N44xEZwe5awYrgLgPh1bXeAXG73DVjgwtopSTDjgWd8Cxz1",
  "key33": "hPPqEq7jKiR5VqU7e4tmk7ZQDv2AoLaGpzRa7Jt8v3rewDtb5gAWQZsmEvAaLEnbZ1pfppXEJw7y1TNyDaFyLz2",
  "key34": "5d1bnEQxEQnzXLyeTEXVhaz46JNMCGDif6Kie8rL3KqgwCLNojtnRBiq5Y51SdRxDB8eFzqWyiMxBsn1BGiXt6vb",
  "key35": "31DE4uLF3nQbLkUYztSBbXB3kqe7mbwVYovptz4gFpFWosFxZNxQQTkWhLpjQ7hgDwv2dFHS5iVDJsTxcyvGwRAG",
  "key36": "4UHmKPnfFrDgwXDtumgvBXcJah9bYE7AoUHqQhftvC5EXUX471KxLEdYLYH2G75wgrY4c6w6SiUAC2hkG5inF4K8",
  "key37": "3irFY89G9S7oWiAJE75ZsFX1XrYbCeCcnsUvzfSYZD5ATne8XnSaqNpD9LMVfTBDdSTPb5Wnq6AaEwE25LjPoidM",
  "key38": "4CBzRZvx4r2dVeySn29NXsZM2CGxQGpxC39usBqWkgG2VzQFyBd4HUZ2EfKjJxMzTmW3eeRwYnvuh6un8FCkNx2f",
  "key39": "2xkZ2UCRJSLXE4R2eB5NGDKAYTV5xawXUaTiV2bPU5TS6WcaxBLBpD83q3oZMfsNf3PrzAx4FqYRmP5ZFEujADMa",
  "key40": "2zTifjxBzn3bxKvbvaZsAToC6b1mbVin71kYNqFtPSbCkngSqUPpyy2mfUmSL6eGyWNCfdZXNDX7sqnWyMDK4iW6",
  "key41": "4HcebyGwZtuQpCVQbFvxrsMBkDrVr7hBx9zAz5j6W7yc6rbHUjP37SBFUEXadi3uZgEPPQoCTcTkJ5zjB3mcKhay"
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
