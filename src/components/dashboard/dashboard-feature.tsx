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
    "bBANkxJqPGrSHxU8MvAJ7ZrEghJr6KDv6cKhKEWYNjLaU5X4W3vyiz3wqjkFN9BQi2RrUg8CduHvXpdzq8RsfT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NyCutgkAoYM5XwB92L2hUQ6CME57hmq4iU9rNqeYH7X5HjuTZqu18UhAsR7eT8AcF31DVoZSf4FVHzZuhNEw9Hr",
  "key1": "2ZczrcfQV1tFVucoq9Wf8TjRb9ATiMhnyxcXgEMbThUgQpuBVyoSNT4YQMDiXi6zrqY8gomUZqKPFZDN8LtoQsMY",
  "key2": "2sUfKSTa55nqPTqLvpN6sAAM4AV27i6RE26KrVimqtRHo1Do3ddyGxWBTELSwP9XooBQoV4HzVK5AaA3REV8WdvW",
  "key3": "4UHo9EuNtRxYNUWFUmJiAAndTtw6pKsTYLcnrDo57ec6BBcqfeMngYVJDBDe2nv9wdKNik8jaNNmqvUU81dqPCei",
  "key4": "2dZUBdByp4DREEur1yJy7nbK6UKroybV6SU9DS44BL6bumu5ozXvKHF4TL6JuEB1itJvETi3CyPVEx4r8G8xUHbY",
  "key5": "3R6bqdo8gFGdJufPsvtn11Atr781nWsrUG32228vkenbxEUPAfoKpzQrV7W4J9eoMDpoSiidHJxYTfPpVmgwfKeA",
  "key6": "oJB5CxeynTBTg4eq5Xn5V2BtBuoqEx22A5ddkjB4ZB8cDokD6CyaSxsRuTTy9dVxw1REdKahYSAwToEzAFgvi2z",
  "key7": "2Q44eU988vM4bUs6uKiRPtn7vp76WbdgkpVSULaYiaXegQjUNgUCgG9bDBfozh2AiWv49H3a9HaWAjULHB7sUTeD",
  "key8": "5R6tqYggr6Z981udYxs4RYB9tDD8SnzWqB2Ci6T2b6R2f8zvDBK2yLtRZVgPTqCAxhWWC4kY9puSKYC6YJYZjsMv",
  "key9": "2TSjpkv4Go1c8dV65xv7JFur1xe5G5HDaCn4D1V6dnh7ur9yMdipCY4jb8AtnxUsJNVfHX5Npuzf17ow13MitWUu",
  "key10": "4Kw2cSKa3t7PcZhkKRHkD3yp9CQ2khaEY3nYoBhod1csacxRPzMJ9ecyFrR3HMrE8KyK3Bc3tf4WtjGbRAHw7g28",
  "key11": "2csuaUG2V27p8CsSeMWeooQ7DXvBgxNTzfbzMX7qN8DtiQnjUU11RuZMMSa7ZGvHkP4bKrDJNUp4dCATosAijeQp",
  "key12": "65HwQrd3LkNZymzg8YwtpNkoRYNKLjeRBjX2sTCVvWnoCAbbhsXtQPGPWA1y296hmGLQKpj5Hp44wLMBXbiEnZeB",
  "key13": "42oajcY5jHYfMg5BF4czdpEKw75yHWCuGAL4CB42cwBwexkU3XH9p48AEk7erTeTyRREB7HnwNbi5MccWBwKUqAv",
  "key14": "5uK6HefaBYWhC9SrWkEYv8gXN5fMeCJx1mYfqiKGu7jqTdAbSmTWThXqaLHgYiJxqqFQjiz4wYvpAvcUnfdjURJa",
  "key15": "3pYKd1mKFi9qqk8u5UzE4BRviTLgwXALYQgRE36uw1urRPciM121javeStBEAcFRbSjVf2JfkW7p8K9wuAxErpPy",
  "key16": "26df2pNiRoAtunzGyJJnrECMwiFFkZ9wj5qw9zDEofP7qzqAJQ1W87MV3c4ZuEuqwjH1e79sJtFmcPSzYbfCTJop",
  "key17": "3pByoJyjLWvXQ4kJoC74NVHBvswzLyawvoSNEZrr4Jhbx2ScE7CW6BQqbdrcXrX6dZ393i7X6UG4NbMy48zBiG3L",
  "key18": "5hiTYy69ScyB45aBqdD8LJav4gmMdieWasHUQ8bejCLgRsEd1hFpY3uMR2vmAkMiHxpBH8MUVMrur3SuCcFK877N",
  "key19": "Mvx5E4o6qZBXV4UTsPoGzsHabB7XCNWRuaeSTaw9Vze5gSWrX51smwCTa2uvYNS77AwhYYCFhVubBC9Tj1egSFn",
  "key20": "2skt6V88jNfNHCs2y6pHgGu9JP1jotinBYyfZZgDWPKGTr3CPCp6866UN7DNb9tniGhTN4UVm85WUL8MLsW1Q1Dz",
  "key21": "3gZgUZUidHtiZnrT9Dpy7Yob5hTV5onUVcdrppnR7RVyG7K2ocBW6J8UGWEPdzUCKpQ915VANPsKEZtt8FqaM1XP",
  "key22": "3mhyc2BA5dKE7M4UGQwzE34WawDMUss11WdiGTXrMSRbdJKiggJVtqYKu2NRb1FVUNU32aYV4aNbAR6Lp7EV2QKB",
  "key23": "5SczX9LHk6Nrp7j5t2EMnBymPtgAWp7KEn1sQ1faTD3nLgeNxz7BdxyE5wMqhifndNHA3fHqELnHUyETrrBVacrU",
  "key24": "3DFfh3FYgGa4QwbonF4b8hQybkkgntPkBLULYuXSfhcoHA39gSwAtK8TWZQmo542BU45wLW8FGmz18DGaGzQiAiL",
  "key25": "4nSZtF6L8FuNzocGE1B3bzW5SdfcqMtpEg2HTFP3GJgsikzZF6r9kn9A3WCeKUseRCSBP5LKCZEHVLTSA7G4PuMv",
  "key26": "25v19wCcaEknKmFnAHh4D7XFU8bUFKdMLg8qXV3wfsr2Q9uQg7zoxWwtiWmeqAdEhHBZFrNM5GxWzmjPzNiC4rPD",
  "key27": "4HqBqQqsvG3anNjNHy9ZC5SX1hrK4GBHEzYJXSgQzCtNPX17H9GdYFufjTEd8npJpHEiNb6pVU5QjwUCmNUgWBsg",
  "key28": "53sQB1mruUmKeq9FGqxKetSJpUo59g9Boky4oJKXykc6oq5DACef77HBFKGG8aCUHfUDUztBzzft8F9XmDKFYHug",
  "key29": "5vJ59m1EPuHUdeC1EhqEFvksBpMLhYhjeQDywwHhu6cV1MEgw3QTFGbx1SUobmsx5pvpPLN1Ny8BChiW3HQXwqfF",
  "key30": "463KaNrgW7EaUNdELeVWJVAKCyGNhz3JtzDEn68TAg9XwyMXPNmK4DYSLQJ5g8T8LQ6Lq67nYpKkJsSM1GTX7Co",
  "key31": "65jpbbsm1Y4vkp4HtuKdAdmV8tyBZBWr2vQCpVSwbJHxKrqNBJqSmsQHLEkZASqoTUE6yvXAGko3ULaiHTjkozPt",
  "key32": "Jbwf4i3f4RRYK3NcN9o2DCGwSBfvQUCsTHX9w1X1fAgkfwevtAgxJyFVTFpgmGoEnuLjjCYPviaqBPWdm1srVDq",
  "key33": "6619jWJqvJciJn1CYM4fnCuDhHXhw285Ta6BVFUBR9MSYYqZpaB21a2TUJJbjetnzPh1R4RN8cA7mMHgTc1xxsce",
  "key34": "4W3DgznGYckHKdqSNZvkzPb52pGN6p3hY74acMrdfvkQtw22YRVF46wkpqQXHVJEstGWn7itZg8amPBd1Gv4UR44",
  "key35": "hrW7nYVw92maLYamKCk5hxLmkBb4espXMNSGqKvm1WpntDHNn59PxAYdb6Gvs9JgZKwpzCg1YVqxEbrEZ5zRV3m",
  "key36": "2QncngxpvA9pXEJWh1edpAbLxe1vv7QrkTihWwmuhzroXFrWmdTjWJM1wxqcmJ3vjoQ8syCneDAnVxCbvx4SBRYT",
  "key37": "6613a7kjvkULpqZXbKXm2gienRQerVQ3e3fvxSst6bsW3qNSsQiC1R6ByZFKJrkkX3WFwsfkaZqJiUSbEounnAcb",
  "key38": "5Vep1o8VtsU4rMK1zyBxGfQB7RzFkqFCA35egoTPEPKcG8HSC8QwK39wrp6jJvUudeusMJ4SKVwcJfFATCMQcASi",
  "key39": "4mVQmNSpjTYLW1cttk6s1unWkjn8skP7UcL9FZMFjVnZqNWhzytjSMAzBDGo88zuYgyHSCqvgn4MTb3RYU4w2wF3",
  "key40": "2FQ21B31NHfJUCCy1BCzwpBd9Fwjrk6WgX6KgL5UsRydX9TqNmbokin63bDDz6j9QSqsPkVtAeitabd5JcpWfhGP",
  "key41": "2zn9aHqDa9rCagjih4i1zYaU3ppALwCZejLpVd6W2ggcYshjocqUMsaZD9hKfn1RdXcW92vHn1rhUzHHBzzoB2fL",
  "key42": "4SUWNS7xkGr5UL8SaGfXj2DTfDELt83oMkaa9QWW9Dc6TLj9j4M3gix3Gx293VTEtpK8pAdwLNbqbg7votM2bDTC",
  "key43": "ffFAde4JuC62rHsVArZMAvCV7CsXQEiiqdKKbBQeCqRuQKSUReNQ28tRPUYYjfs6KdCh3M2SUF9PLgpqvha622X",
  "key44": "wuxBk95y641gWjc8ZM2znbXEn69jxfo9ottvrNPtLa3TDaUujRuTVRCxEdpNgpHvhmFjsUZNBDL8QMwNFZ7ooh4",
  "key45": "3WVYKdaBP3LRpQjX3LMfTG8n2y1mCY3rX6tF5EzKA65QdBFMFZdGx4mQSYWvNQpn2jw4fuzSRi35XVYmvaxXkSLA",
  "key46": "24zYWctL1anCygTizv79GjiZjeHYWwU8y4uHShZhjnMMwxr74UMHyyy3dWhCNk1u75nJ5H5NicED6o1FWniQwXyf"
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
