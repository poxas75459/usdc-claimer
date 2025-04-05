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
    "TEvvn7MYKBqoepr6HYhCkRz5X9Q8AkF4Xks7N96zXjVTMoVJUe1bdTP7oMSZfTDEVcrg7feiqYe1dtgfGkNx53o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BcNjSbRDueUV8DSRxQAXxSiRQfHg28wovPiwqC5LnpxyQbJ9NrwzXsDadm4aTZMmuzd3sNy6nFCvB3uKkgC3zzR",
  "key1": "2ddfKaSxDFrGP4pDiJqfYapFMTXJK8iDZ1opU2mZXQYGnBpknb1Lz3HXFne8rhUurHe2syDLuNNB6cD4YTAaSnuS",
  "key2": "54mX35Dv2xyUias88F7WvrXHjMHCeiZtM29jFXk6s1nvBewnK2BbxWjicohF4GZtwMniTj17qsQGEDWN3QrLRpqL",
  "key3": "Qi8ZVrMwMn7RMo3fwXdvvDWPVkGe7rDWzDZdkVZF9PXQfrVZzznRyxTSkKRyB6sBKAX7b7wzqYPC2J5Bvtz4C3J",
  "key4": "21s2pBra7XZ9qPEH88sjgQZonDcjsbhctvqngPS1eoicZS2yAXHyQHmADUc4rCY5SJc6XA5Ao69PTQgzZdh8ypQ5",
  "key5": "5z9k4neHMZwsZb8f6TzyfFHry99gLwkvrxEAt8kpvMcs6yBhZQ1gfVUwGZ6xBmkziHYBxErpoASkLRRQQtBuqF3j",
  "key6": "taHn9GoGQCdWZHNDtmrFjjbtRJSykb7DQca9xq4dmvzADBuAahVFHVHFkM99ukrWFdbgxMSBRXyDvupRouGRy6t",
  "key7": "4x9BCpQmbWQa23WhmnnrWVtUysuoZmfSTioB8ucKdWsqzxbL2DTEw2KBuH8ka37UnZtxkkvrxHqZgxkP1ABA8hVy",
  "key8": "4ebzwDBRcCUTMHK9MvojVwTWB2QFEJViKhfK5PcpFEzNX6jWVF1JegpGGhjq7vB36CHfNMQhLCA4DexZMTSVof3W",
  "key9": "7puTFhPW2qryB9Jm3JNfywpVGTjZzaEejp4WRtTRi61xhBCzvx6cUwmCF3TDsx5uoXBXZt9bTy6ZWJWp2S8ztTw",
  "key10": "iJbcVE4932TReYpYpewFvv9d1Leahuy47YwRwuMvDCaeT3R3nXoxjTDCG3kM7MDa1W3fQQBNYyorF2ubfXnA7jf",
  "key11": "4k6g763PziFnEQZmm5y31Z6RvvLYBusqY3g6HnNxE8iU7PfHCnQ2GK6v2mDL8nFwZ48VmCEmJX2E5r3AZBfE8uKC",
  "key12": "2ZquFeDncuSaneJmXKpxJnAbgczStz7EBayeeyk2prx8SJJYnnBCAgkkimRoyCueC7SPHAtTLJ6SboPjbbWgPLJ4",
  "key13": "5ugZPpjoTGzJUe9JDgR57KhZhkw3ECRYvNrgrDB5E98i1oeBcw9UmLDqia5vgANyZMhSHssDkA3K2EHyzmHdSv3m",
  "key14": "5S7MbMnGo4UgD69b1YabE2EbcKHGEPZtRxwtGB2tw39nXtdqm8M8pdRF5WKsGNcENfki529X6UeecCAnHhznkGso",
  "key15": "84U2wJ3Ux1kJznUdToPR4ujG9qAqfVorn31vUry2KGdmLZQvjCzRxCHJZv3gCQFdUM5kUxC9oZKosKJFp2UzjiM",
  "key16": "5JyG87yEye7PTz7jvGZsmGoozvyPyMaTyVh7v7gRWjYbMKfafrJafLBTsQEsULAPUfWzvWBJ1yFLqmn6mTWAcYR9",
  "key17": "2ZjGiUGQs5DVu1U4vhbhraSkRWWhwkbpXGhu3iCe7bTdQ522SYSUJqtAsd7aMLfuxSLVfg1fD6izXKirsWjiD7P8",
  "key18": "5Ph4Y3hN2hsVnTBcvgaH5zgH5MAH1xHiZ7yg4ZPpyVjXukewwtrZ64b6DxLzsZBRvxSdoryXHRzPTAqEFJUZzsCU",
  "key19": "5b1JfgJvgM4sZM1TAnDcJr9vZTrTJpx84GAXr3XcDsf9bsmvd2RaQpYhg9DV6JwF7gviUHF798dbFkTN7fBJPwME",
  "key20": "5M9o2wrnZUUQB3yMYF8Z5Z5xQFT7BsgPi5A1BV1TCMCnA5pP4KQaz98i7WTeFRoMn5cKinDgfULobrwP9TpvS253",
  "key21": "2Et9oSMXCHGyMv4CPW5XpaM7R8Yq7k1rMiqU9oYFnBD4BqqBKtb7hG8CL19MeCzMLA6i7gJs7JDAuak7EhyLvjpq",
  "key22": "2bheZVZUv54JHwin8wfyJoDp72co3cYtVi4EcNL3AyqrWZA34gKNz8f7KAxmgGjeKTqPrZ6PkZgpJzPcsopUGHLg",
  "key23": "2Myg98vWX2MrgeTAbxjXbj9vTNiBJmUppUQ8TYicV1kTJJ4BfLY7cr5EnYSZkkhyDYbqKvNDWiLrqbYkcfuB2wNC",
  "key24": "3Toi5VeRJ5NrKYsKkcuQZW7egMyMcignWywtUUyB5V2L1Lc78ja8wuhPghWTW3CXJZLiCnZT5wcBM1NZGFfYVWA5",
  "key25": "2s5apCyUm3jxcuzcF1baekgAuHtizXJr481w56sTwXwcqt7QBnejVKTUNhUBC89DxDFLEVk6pxs4Vb8nGhFaw1Y6",
  "key26": "4HiwwtUEBotqiS1rE6k7r4ggaife8h5jbfhf7AWKkG2iPjj8a96w27MDfWCVHjPJkVFSW8xCr8iSggyJwB1KpjTE",
  "key27": "5Jh5Zxmxzw53Zsa2tuh7FvxBSi24B2eHJG8ESBoxRiykFhERDHuy3Cq56BCpqp49cam31B3NSs5ozKfV9JBAST44",
  "key28": "3oTU3JNpq6yZWiLHJU8u4NzdYPVr8m9TPnF2KnwRVxWa8bXTAUx2CwDC4dShDrzoNPiv6PHUg9inMisaomwaW3r3",
  "key29": "sXKtEt7XiKcwZkX4dV9kbyySBEUwkJbLRzZhQia2nuR44dz3G1T5cejLPk3e1uCetUUECtSPmLfjDjwR4dcZT9a",
  "key30": "2ptJE62JVj7zQuY4x7X7hE7aD7ARUwF5MrqoLF1VMsrot8vaUJPPirUEMExyRsX81Au2TBvMtodqdikmfnhXDCsL",
  "key31": "5U3pdoLvwztGLWP38h6crCDxT4oMbiuErT5LRKVHKXeErzRQWH4S5NVTLDTwhi82wdsG8hMP5JNCvXpU9vzSZ5bT",
  "key32": "4GwH2FZ3YrwZhSTAzupV1S4QiYfrHjBNyDsRDKNb7eNZRfzYZKPUX85qXfp9fHdbgzAD2sDZs7PnG7U3Z9FiHaH9",
  "key33": "HKt5SekCC2Uhmw9gEzAmuQCNDhD3fgXJ1UVwM7bbGcHCWLPS1j3zrgHzG2dgJjxnyMy9NTuHroAQgdeNA3N3EQ7",
  "key34": "6kd4AxFXiS2jzc2ZRbPGz99fYoKrPkbCZ2gEXsBa99gC4DjbD5QRWGk3R7Gyh8QqaqgdqRBS7kULL3TNFqkwWbg",
  "key35": "onwf5dgKL38mAC8EBxZDLHKBy6TKpNphjF4ScXEJk7NSsVhn4PwwEojWYYeTY9oRnitRBCC6hFj1HkxGiTJy5Wz",
  "key36": "4vGWCRa33fcAQJcnx2Rf8LLyAjqZhw4e6angDCNvVY1szLG83BKmY5WNKwiEYSEfdwvRo6SgAAU2oL6uN8j65q6Y",
  "key37": "3k3dov4Vnqonp3eKkZxV3RyK1UTzQkULhm4edjqgVNQSh6TsgeHDSECRSMR5CSJBPKc3J89dvdtr4EHYJ8MY7iWo",
  "key38": "93ogd7figM9pmbatAYSREwCPnpsyT7bVpapcnsJ5gbKk42GcbVpGF3GzTLzXxKeDyJwd2ET1iuSuKuN5wvpW3eh",
  "key39": "vJinQ4nuzdxpeZC4dq7QAsHzgXh4PJGAuXsmdas9sawQvrk53rYU6wzbBnTFg3bpzDActcMtp6hgD6PT1Y9EQvc",
  "key40": "28oBLsZC6oMqzTYphVYZFZXGgqP2BPzdeSFRRvfX5mFJkDY5NP28bJWi9P6UFC5LmRRGPA3aduWqcs5csZpRUivy",
  "key41": "3zaKBZbKyYagk1mcNewnV3szQ6EMmDrybNaGD3k6R1gT1r7fSM1mcbmvZD5R6hqkwFWXDG1Uis6gb3TgyuVAKyaB"
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
