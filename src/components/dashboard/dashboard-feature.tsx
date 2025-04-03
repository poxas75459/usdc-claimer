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
    "Y5S2niqzdhjcyEweBAZ1Rrx1Lcib2DNesEAtjFGPhzVmFjmcR1RA81E6cuLEetYqgzxyY6wVTXQ1gPHcUbRAjWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXzkxYJSxErGNeUGtDmmnHpRFJgVUNCcH7xKXfUJhHmGcsxiuoJ93jY9sVDqpVUSq5vunhoF4FweB7ibrJxgXNq",
  "key1": "BLLpbVcFf8wUgnu4DMXkt6TwRmR9rb71ajGPT7W8LVQrH2sWpR3Fbzg8DKs9MPC3JKL54UXH4An5K6sT1Aax5zi",
  "key2": "3MiANpHdtVs2QN6U5AoEJuhRhxfP2N8akRxkMJo8kCkbvE5Hebmk6TroXXm11kSFbco8r7F84abFWFb8oEepzgfs",
  "key3": "yxWwtk1DANW9J52tAVF88mTrNJeFBwB9mNnoGfpubiZYYYiHTP9cfk7xtkqwM6XJHdEigA4sMPirmw8FegAYSKZ",
  "key4": "Ai25q9x1nbA4SLkyBxjTQowSQUMrawJsvTwo7o8z2jhReshSdRFR3BAt32qk1XBAzirrw1hukUcvpBViQXN5eKD",
  "key5": "62bs7QS2mrj8RKPUPgFZi9qeEcjfKPcx3sS9czHaM5wU3zzRSBeseNWtp73Psk2GefDwjDfAKDXcdzF2FC5crRr",
  "key6": "4XEHhWfvUMmPk6ENyAUqEbFpjYu9ixKFCAhdLQiK31jqKQdpRo4SnGXCLzKXDi8WBSxDHyes9e3aaDHPEzVngaL3",
  "key7": "4jXoRApceu8V4psZFqWyJ4ShUrcb5gYz3A6Viqh8enriNBZZunBxeWxAqCSooUGw7nkhRi8uDTe6ReoXhCRsBhZm",
  "key8": "46c1T7isBTEiuT36UpmC66zhBo2ZXeDygHq7HBhjt65xanpjPoHGSo6sss4CfA1qME7TUrfNU9ctShT8aga3mBQN",
  "key9": "4XVtpyW5HjuS49nAvGg9kkcgA7o1nj5mFCttHY5cSKdQwK8EoM4f3RahNutShnGNcLEcnL6LzMobWoBX7b7ofaFv",
  "key10": "4emiWVn7Znx9XQiP167fAME6VbsStTsyaBTxhj673X8DnvVkfDN8ipE4zLeZT6yLPEsGAAU2SwdirNe2q5vyXXfN",
  "key11": "281gaCWgDCn7Lx7dEVuwoyUCxVv1NBCGm44qtcXFA1U1uuvrvnvs3ELRkFE1jCdJWa8cppKB5b12XTk3TZ8SxUDX",
  "key12": "5257oHtB4E6ChBya1ADLYta23BGgZUfGXqUPTPDjxuQfCGbnmG2PHoQ8DeMNMw7vZDAn9NDHTJNGz9ubN3QGgUBu",
  "key13": "2RfX8dzh4ehp4Q5LFqbAe2dXeA4q7XFg48cmLGyJCfYNNALXXjM8oNqwvn7xg2nerRXRxUZ1gkHv7n6mqTsfxgAe",
  "key14": "3cPR93K8xC1HMPjp2qDggY4kQo3zB4HgRaz5G8jg9w9TYbNEX92prMqs9V1BJkCByisKvCTZtYaVEZxbinrqL4nh",
  "key15": "4ymwxkL6jxscAXQ5KRe7Bm53RJrgSkAAkg9ptLdB3fNZk9VVLFSbccCr4EKXiUjrbPc6VxbpUbmBK1dyqEqcSQta",
  "key16": "3RLG6j4GkdyTexnmqH5djQgyZbQATHTv2HNxVwMdQFGoJqcPSFqdmytCn2SuYkxhEdzxo29kDbQSNSUQtHnYJpwQ",
  "key17": "52KJTpuLjPnUSbiq1PDhwzmC2yeHkoyjkwYBk2jX6eq9zCYfYHuKzqnbdtp5BGPY6fek8tmVTn4aEq7MtVB676VJ",
  "key18": "5vwgUtB8J5vo62KeuXxDQ9FLVDXXCSJhKhG1oiLKCDxvGhU4VVc4vSJLEaS6YdVHUhyb4tT7MJxk7Dam4fgYTMFT",
  "key19": "4LvqJBRR9Xk79sWweARcQXDzXRQb9JSqFGos4CebinJHJEnnfDSn87hvt3dV8Hff9UJS9gQfhNtJ8hc9GrjYduMB",
  "key20": "5xEcf5ysnzTs38tKBjwDJPBiu39HQRgpvhJ1ZgPX7N1EJfJkb1BMcznzDtSFTMgRHp1N2m1GjDY1SjnU9HTYeQrN",
  "key21": "4EsKvfzUSAHQecJzxKt7T6ovKVzgXiCa9g7wmACwjPtK2oBLNwQgfLyciU1dhBHCHoFkHbz4LGasgVFfwQ5HMc2m",
  "key22": "5VAsNzrCM5KPcAgeUzgLLVGH2nf4yzS6hWbwb6GALuXWFG8emZE5RbbpbyGnrGhGhycMw6mrkSraR6k29huSajx",
  "key23": "4jmTPSPvcBGEQf1XfPhaPY6jRfgYotfXuWT9Br3JVVhMBGG9sYgtHmaBTuaQ4haF9ubsNVtWCPvuFD6NhjZCYT5W",
  "key24": "1ziqeBt3BHbM7sLgzbQuTgXDxXjZWmg78bNfsqxm3s5yswHuoJ6UJeNDZh3vCY7kqw8RUAzJ3GSVQcAUF8Lrzpw",
  "key25": "5keK5DY5P8yASps5thqKSrcYYJd1PShGmBqpQr6erGPJSTK4e8kggidzxJxNUi88L2EgvM5Hzhc7RGxoQXNbEzhG",
  "key26": "2G46itYumCUoynuw3q5MNP9kS7R1hp2HBrqtq7MLQ1RChzi7VXXicp2h83p1nAqAAhBVnB2hqVicU8sSsd2tcgVP",
  "key27": "42t25G2Uzcg3xUE1Hsrv3NrsYfSpTy21nqhzYQsfx36oBtEyzwKy6vzBVdyiBiUhfBb1zbBSpyjAW5e26YyeW1go",
  "key28": "22mg9Eo4QLSdsBD5JbozH7YDdcfCERXEhj5M1Q4EqLQLWEecpAznn8UqG5hDXpCqP5VuQgTPRpgvKd69r2bYaLbE",
  "key29": "25QPRCt4SHieXRNLN2pg9n8UNc8tta6b2M8quiQGcgMyamCKTKvGBoZrB1t2qYRZe7qw4N3b7pynckjW3qipSS7C",
  "key30": "2pDi5s81geVXUcnedPnEq3BVzFYJvdR2SNuMhpFnXaKi2fKCiRZom8hujtTfb5fpRRnK94TquuoF4V51kCVWJWkg",
  "key31": "5DVxk6EnD7BKfBSSSYsucAVXMoHsHKR7txh5emr4JG1fv3izb7hTWqVY59SPtWzigZXHCFM1EWRPPspPEUrKtgJV",
  "key32": "4ZYuXFindSW6vgoMRM6HUZYHtXVeriB8FRmbx5MdoYfDGJKTsbmhvAzQaMkePpo1QDfLJYXFHsuxnhKqUy9uUwqM",
  "key33": "3w3Hru9qgSYnkcwtgU7yMCCe2j7Ntj8U7SrmgHr5FsEnCdbqvi9HiGmkz6Ton1GAYq3pEGinRmYZ78kYNPpkxxqf",
  "key34": "5FtwFeNLAmSAUdsAE25vp7NBs2isowQCTvxnzbUiAH6EqPgyzhevc19BunDUXeaKc93YbpyCcdSkZETG6Xq9S1js",
  "key35": "3shYRFctdpbk4zgG4R6AexcJtnmJ2UKMnfafTEv3X1bxoBNNZKRQeUMmgbqrA447tfjQkuGVCdrhd8kGRiQQnnbN",
  "key36": "FKA1qAYNtk3ZRtEVQ3UW8435waqKPUiVwrGuDr2rjcHcSZeZZVMfG26wJiqCw1xAJTmAESRpakQZqi7LEtVx8su",
  "key37": "41jAwUkUsGE87SyauVPyMpvzXq9AxSNBLZKqjAy7aJGkFLhdcYHNbonaA4Zj78u4ZspZfuK7ZPEEcaCMqdQZdAUb",
  "key38": "z7yZtxkJT7AqY5RF4gw9fsdp4QN3M7La35E4SHJgKASWfkYrm4kQNcJyk2PCnVxAU3YwMhdAQ5fjA7dSzehWM1j",
  "key39": "5YbadcTEmXNgFJWefYeVVAQBqm5pTa5DFbBzHbD4F93FkFxD5UQi3cPWqVWnZ4myz5avyR4EqocjdGKHr91wjef7",
  "key40": "De5257GsMtGoRB6E9mHiSxFccrpR2ka7fGZGCm6H6DXnafEGEmy9RN6QA45U2K2cLZUsEK2JzupEZ5N6BSQCbXu",
  "key41": "vmfrfLDuyxJ15ZngQSrdrQBwBPxBh9RzfS9nGkmo4rE8EpTCJffjz6uq71Lppuc3PaunLt3UVJzWtWChhYcjfX8",
  "key42": "eV82SekVTUqnEmS4XnTQ1TnqTLdsu6M1E931B1w5hoNmbRUxwMes2CifJeLdfnMa7ybyxFwsbPRbgntZaHhDRFL",
  "key43": "4w9YXk484dozz1t7nzdwdBYwvfFGHBBQmm6TWaqmc6czT3y8EBg4HM5uUKkVAjrWqf457MdWfBafvXSd47R3fums",
  "key44": "4FYPYgG72syMJUM2s1NUJiMVvvgGxunYUfs1fJtNXDUCEXrEanJdHEfQMNrF8f3cqPP8zvZZdYbk9PctCmVrCFdw",
  "key45": "22i5nw3QUuRTTDZe9ViEqAgxVgPa4K4i9TRyK7csEd6aPSrxGS8fGKkruMCjiwgsz3VTGn1mLPjedf41XeTyCG81",
  "key46": "2V4AQKU13D4BTRE3dVyGPnFUVz1X6dNWwAy7ALm9MxujSV3b9WydLntYi7QFbhCwJBtu4GsefhWzNmdQUgyqmLqB",
  "key47": "uAZQbvMKMUpmJC6jNhboLgrZmMX9QrZRRHjP6KHbc5hYjfFbkdU2QNPNtsx2truyojrtKjBLqFsVmvTdpbxR4EE",
  "key48": "4cs8e6MQ1r9icZSYwpB7ervgxo6iwuFDdxCoEu38vvvKTc2ikD393fM4t84iiMxPMF33MprtvmPU8LdTrbEFG99Z"
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
