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
    "9LdyfWtQj9bWo5fyCbLoizPQD74KPa5CaDpStdUdHsqmaPCGAeCeJujMamCbz2YYFutfcp7WEqhwrJWXTuEE2fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqL6ziEUUGNesPRY7uUVXPFis7jRWtw6pofeusYQVBgg83hT9pScnRGwQZin3c6aU14sYk7mq8GKHe467XEa6rp",
  "key1": "3zJbZk52eKNbUNoi7iezwNxSpvu7xzWNTq72BWbaCF9YAQHSC4qiuCNrUTrJ4Cha4ggkBoDooQSdmUFmgT1KZA1y",
  "key2": "5ECR2gVnigD7Xhbq6Kzj2R25PCnQNXkPiARMCFx4Zbs7ijyd2VAceHaBaEc83AgP28urwXpEd4hzgLqMnRUvKtue",
  "key3": "5Um8F9x1W6MtoNk7MbYVynZuwGWDVmr7MYHZVtDo3qBkcXw2YG35wCC1F8e7rTtFNTiMhEWbK288WZNbCRTNLCXU",
  "key4": "2cjcSwLJzSJx8xLsuCfYezfXnZhqdVdWuwenAJQDeLhWntES4CUrLDFS5iKseHBxvMuqReYyvv8nFRSt65DXw52B",
  "key5": "vcKmLApYwMTk2oA9vprvX8abfgqN8kzDpf5SXJrsqLKE9XV36jVdjYHFRQuTyQnRfuniVy3xyxWotWevefCoXQn",
  "key6": "3pWeThnRyWGnpr8zPjfGWHYXV1wBJ7YYZzQcAgmW1dknjDEGrRtuLWHrhNM8HA4DcTojVDQbcFzHA9J5EkCcz2La",
  "key7": "63jfTC9E7V4BV6F5xD3qenYkm9FmyzVuaZyw1GzLSEyL7RRXMF7f6DML5aKWgbozGB63KUfkajERSonCrX9KkTN3",
  "key8": "5XnhLLw27WaiYyAuyJzaN9L2gVFA72NAgQY9jEeq1JVEHderkHAp4k6khWo8eXXLNViXnHtfQbgdAbF75GWx4kGG",
  "key9": "NeFuGZReBaECCVAiv31Rzay6eAEwQp3KsN6xNYZ7vESKkzZzNgTEhVWqGYwhHjvno8HdXhbXAbEiZwxpKuUuWjM",
  "key10": "3JHAs61LfjiTEeoUae7RWfNQ1QG9mrsQQqAGncp6cDZ9UAEmfFzzm9DPrnPmhGixwC88N2dUHzRvYnvRCc1r5Cju",
  "key11": "4EsfP7XnnbzoCJTKivUD1AeN3zQNMYrhrbQ7qJCrmLw41hY16ihGvfwqr8yumR5aPEhMUY3JXX1f8qjttQ9BkXPY",
  "key12": "NsqE8pH9oQnmtQ2DbRadtgGqwzZr5g3d6weoLdsjDebUbAzRHjmm35VC3UaimuFjVhBEjA4fKLZF7TymQRyEGtH",
  "key13": "2bxcQV8hstMFxghFmnd5sZWKjTZjfrSXBKHcxss2T6KoacoLwnKAU2LDaeiqpuFLhVHzMN5MnW1EG87bHue5aM4H",
  "key14": "3puMVe1NQ8nsGmcBWe87X4nwvUtUWu8MmyMfn4nFQKMuCCrJ4ZUjMzdSNtwmLPZjfJpF24czonokELiKXx9pm8KY",
  "key15": "STS5npo8bRXEVTUCdPjyVgxZiPYpynvqetTp3HycqU8MqWJ3GRfmq22ov79D3ErxNZmcw6Rt3ZsHU6rNf3q21EQ",
  "key16": "ugNKgBhr4BHYvQ7ZXmtFRL64sQegk7MZP4UkHp8gp1dakibwNP4jdPXRF5YHUbx7Kx4zEcZeWRKT54F72DT1aBB",
  "key17": "2rpdDUZZnfiJchuoiqzVqJnvp5zGWtbSbUjSSM5VBWyUC1WiX13sjcycBUi3pTzHkuheHAUe2qcP1gKkfuh3FGN9",
  "key18": "5rKumBGAv5cUmmhyvmRPuJkyyDG4QgfWR6QpYSBWQ3b5Z2jpH5ksVfViJZWxE7ATXGeB7nE7TDLXnEUJ5Y5agkLH",
  "key19": "3aH38kiQbxLR62tbCGg3K8raGCV7uwUu3xXtVwMiEGsxo2seRW1N8fuMtEGDdvHfqbfQVaK71N5wzebpTqKpZFmS",
  "key20": "5CixdfgHzFwQREi5XtwWR4hwZfHRNnDion8hQsWDrdJjaXJatWaQ5tFG2fRxaGFF53eFqKgPYuEhHptMHPyYpNEB",
  "key21": "P5SFi2QPTLzPfqoUNNzYCTXqi9fRDZ4DB92KY4tmAorzMVzmcoeExBjQGY8W6hQTyZMQNiMschiYrVXcNHPJDiC",
  "key22": "2wFVjtgkGvyQWRzSWGCtAfsDMYFz2Dc7CW9acW3TmXDA11Efp5pvAzFFs3zsVrHXeXTLqiWqUAVx5Lp2LCViuYqA",
  "key23": "4bb51UYSLF6S4syyE3iJ5RGdG3rxDkFoJWmXnryWcVRDk4MQur1tamFJGR9HSn1EraexTqKZVC8QxubucT6VMjAU",
  "key24": "yyEX1wzLf5eHAeVmfsc1ZEkPHjWtCCSiQtwSiVtAZ49usrd69ci47HJqb2pvB2UbB2z3i1pesCzUhs5Nnp8uWZJ",
  "key25": "2oUkxsfiHioiyzRjLkbaVBEwWgvKVwEwtERaru2nCXi4wPW7fc3aS6xcVGEJwnAvYcthe2oaRkB6PMqVKpZJJ6Y3",
  "key26": "4HXgNZ9VYdtYAKPiewgfbPY6dX7wRnifKC5JAcMGeKSGMav6A11rr8b4BtusQtbaoLJctdgUE839aBgSrGn4neWm",
  "key27": "2gSUV3DCCYQppA51wzNmAEp7ikqVyHhechmq5BGPJBTAV3sAMqkaknAexmgt8LYYE49eLvAfdyYDiU7vv8HN5kQ5",
  "key28": "4847Y9vCvY4h3LxAqN54nYp26PbCuZLFHS9eTLEju8Cy8THwnp9wBB71g6mqQA5mPJvAtZKqKxGMd2bFN7BjqauW",
  "key29": "38jtjKdNWEqjNyAdVFJUngKCaZy2F6NYNjD7uqYVzyG2R5eN2tuSNkjjd7Y6VmWFUxaTfuDgXZAhTEww8rALbNXT",
  "key30": "5p5kct3KxNE1rd26KF7TbgN2sWDA2TvAdxwMFZEztGcp3zvzgt6ZQGjELitiqTMh6xQg3steeEZUoqgzwmFDLPY",
  "key31": "5XapUzkxj2YypXkoBtss4Z22sjEViB1PY5zncpAwKUd6x6v5dxFQGvfoWR3cZAb2Vq2dFVZDUANqQDenx72bdnAS",
  "key32": "2BpFuUVKta4e7Hj91d62e6oabTQ1UqFhX9szRDpia4Eo2GZHLYC44Lzz3CbVxStqnPPrHRU5iqCAxDGn2EsZeSBM",
  "key33": "2jJ6WxBygwPEtfTi2gwpkTiPXZ8YwG5tMp5dqSCzJM6oKtuBxkJDkzQB7qDCPXGEGY7oK1TZcrCiDKPojMWwtPGB",
  "key34": "2K9PaWbPQxpJmagM9rPpL1yNcgKvR5XJQQShdtW6BXQr2SMUus2VfsTj3qRoAELq9dvFvcU4s6sNHx4UjnQBNuhv",
  "key35": "4JAz17GaLsrfbDmHjTDjVCUzB77ha777Rf21hotBKhXxzp3jRXApvX1mNNa5jZYHhoJorouAdEfDPT6Ytb17P8Hb",
  "key36": "4jd5nSbaVqRFBEffwPPqdCiqFgmnkKRitfS2LLZhG2iuQFTpxSSMGS5akyS9itSNJttXhbhcuXhVPi3Rg5t1wa8T",
  "key37": "5AwyDqvh9aKmPfEc12KXK5EPpvn38okoMkgfb7wP9GpDJ9t6PcwJaFwDEyjAMb9aABRehazcnEL26JVs9CxQVrJp",
  "key38": "2JLYTmwZwKFaB6UT5UnwVmSF5R1LnyyCNyorsw26qUHy9UMFK1QzaY1uFmrnze2jQ92mzfkA6wML3jCZNM6fhxkF",
  "key39": "3CKXKjnUX2sSArj8Yc7KXN8WChpMr5CiAk49kitimuHbLRdYqmbcYNyQ1pYKVbs5F24UBJvUtcQbuq1SbgxVwLgK",
  "key40": "JFuSmFVpLU3X69aFC5tr9Wm1LBzhreLGToxkruNNRJy8LdvtKcXTvecAoHm6eEKej4evYaz4vqQaZLYAD35W7UT",
  "key41": "mseCPWd1AZMVtCqEGJ2M54RvrDMT68AXUhTDtgPVWN3FenR54tGkJCr6HYS6B3FDgrwc9JodsfAdQjx4dudCXze",
  "key42": "5wWb8o7QTAyZhUtZqJTjMjdHKkvFN58GAoJovg4B1LuCQ3TrjAxt2Uqh9PZ1FSn1v5VghRv4SGL9SvAeBjhx9CPr",
  "key43": "41xSqQiaTX6UPYttcASvToANt1rWkoGwxgz1QyQvb5dRoEqxYDS6mEdxNtnEMoJNWC7MDNP8VFy7NdjUUcQim3Sx"
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
