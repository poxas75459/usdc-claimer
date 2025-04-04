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
    "5PmLJqf5iVzDxZyNN33Wosvz344yjP9VtzUykx1oqqPoC8KHJMBt1Yy9ftUJXX3cYGjGTHB68zqzzMT5RwaUNZep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59i6HGZb7ZEmhAnFFEDPWvznVKwXt8LGe5f9xkqjsdeNcFgSSsTA9qCePww4JEtGJDZTSscgsKLjo9CEAeqJDJh4",
  "key1": "58gNWqjLYjvccZyigZXbaF2zxp8eQS9uvnBbPPVBmz5K1TqmCxM5RvpThhPsRzEAvUHdq5vLvRVaKrMQiPGPSubZ",
  "key2": "PAiuvbpNscgty781E6pDbJDoMd8uvkp4vMRYgRZy3SVCcWXNQkRD1a9f3jx43XcCdnj4p9kJnDzg1BcnS67tyns",
  "key3": "4ptEJRko4FW5NUFTo55ZS7YDNPYyymvHMxe12tZGdaxn99VEC7XJbD811NfCwJDc7PDKCS3qCiv58VoScWWSWLLj",
  "key4": "2NggB5hsbfYuUp2UShnivu7Go53Nw7ZUpPsBHeRwvCfLaSCTPQt9TVdL8JjjtyEhVCCpBGm5P1MjMnswTtgkN1y7",
  "key5": "4iobuBayG76eDhvbQ4ADbgarLpPT3XgnjAzAdqNqvmxhhYtGjmwm74gGKYRyYAsyCMziKDF6LgCxxeq4jWa2ZEx7",
  "key6": "5Qm59DqpDmjKZwXxpXwe6dzkkZNKX95qfi9XDFoAGbPNrjC3sz2EnJRtLewuAQARcxBAFQ2n6Ef2s8V82C4eZYPr",
  "key7": "5VH9F9JMYVR62sH6t6yFmLUiEoQmJLFaVyXzfzDSXSCjoZsHtWzh6M1iWGKK8Ru8LBnAiqtrTH5EZLVVo82Lk6SZ",
  "key8": "Um25vzyG8AnTexd5k8m4EJ8eJVzgeEof4oTh3s6SxCSasqpU2L7VscD1nqRbSv9oQuVQhuW1pnsFrJqJK78hzjo",
  "key9": "GB9zD2t4prLiy4geQjLLvn2BaKTCVgZtHUAN17mkGDafeGwphMppoq3HycLitWspq5S4jnqp1hMtToCUPVza2FK",
  "key10": "tArbSFwmrtAZhQAwNSpXYAH2S5b57nqbU6fGFStyMUu3vSPkXXRP1LVXh96tt4ThY5UZc6xfhgnp3ETbQiAcDoU",
  "key11": "4jppH13QKNygnQT5LFzYumKT1R9FuQBiV66CS1PjZdZquzqURU39jKwRSHmqBvJoV13uQB4TTdHrU4GP7gKAhhpS",
  "key12": "55jfSzzbTUpgHzK6LCfWUhyxvUqpZj8373dYREL2ZMSZNNncb7L9526bYtrx8rDYnikFZqykp6dZug3rFartbNvP",
  "key13": "5ofXeQx3sCGXetEgzj377AjdYSQ9FDexNZ1NtrbBAD4wif6ZAPNHccxmLHkYS91CsG8ZmVtycuFfJuLzWq6s1Tkc",
  "key14": "vYaH3L5GyBAcMyz4rumweVptQmMRKqa4SBcFJqNjJ3nn9yJ4SJmVQv8A2CwcaGQMzSTBJTvaBRrFUTkEa48j1Vr",
  "key15": "4tj8hwzYu3Brq1E5faG9ShGdhx4UCBhonQRXLYGUeTzuiEsn3p1YTq1xjwt86ziKtfWLYYBRiQoGUXa5wCt5hEDt",
  "key16": "2LecF83Q2psMeJMTaNMpauTpmgJSDja7ZNfj89oNzSkjsARAnSv8pVqcprjZ6SoUMHM89Qq2vCRknjiL3yYWM7PK",
  "key17": "4T9zXwGa9sfXhrswc3zUNNem7U54VUcA3C6aUks14Keywx8DR4ZFMKHnYoEPcMxf4hRJVtXJoeN9MKN72tc3djCh",
  "key18": "45PBngg3jE3Y9iKCnhYWQqu2WnpHDVYrrqMyk4zjaYZJW2iWTvx45ZcTPB5r4U9jqHsucoV3HxG8oFqJzukpbLYq",
  "key19": "3uqSqPq6kJ3Mt4DK4JF1knHEjkGHoH2EiWQz5nr7zF4kbRn6BvufhBAraSnjReZLNjdtr7VU5Lunkw4hUU1xXKgu",
  "key20": "5tMaUrnJmCL2jtojPSwXhYqGwfAqYZKUn84iQgWhN1k6wHN8Ba9QjMGHGMpXaWPzA3gCVi8bQBTD8zgp2NYoQEHF",
  "key21": "ZSfPaxViSpkHrmdZdrq9B3BvqAcSjRK4dSWWbTLg4MnrAJgxYvQEbVC1Ed1oqPxkPjMnii12u85Wua2up271meQ",
  "key22": "2ZgAvQW93yfqFKkKirNHBafXJbSMhAA5zfjufyFu5X99pLfQCRj2dYuHdXsE39uYRpJnXdEpcXHWef84hh8ffFU3",
  "key23": "5TwRcZrEuomLMtRugRuHJzW83vwdhRwFRtwDjx7g4RRBtgCARks3fiYjP28CaxdY86RnmX3H4LP8uwb5aPdFizVA",
  "key24": "2roa4uBeyvWRnU4bw5APV5igHSt7hhUSB8xLZSqEyhrkRDqm9Mz2wofgZeH2ckEuUoVRLS3W3qCJhwHfYddG7iS3",
  "key25": "2DoF5ytHYUSHwik3w6ZNY4Q6DJvMFwA677yoKt8idwWaecfqK47jMBgdUyk1L42K3utU1eJjxFfUtNLUyBC39ygs",
  "key26": "4qjQG2c81TBT8nMJwZkw6AiHymybMwdbHcAkv5brfR9rHfZm737TeAyNmY1wndcK7q1nm6ZE74Q5ahLtyRnJTHgM",
  "key27": "2z7ZHfx7ZGYv2BQBXCTYj3N6NG1CsFAjfZx83NpJ3t7py44nwFx9eoyX9FyUnVeQKvmxvEHrcNH4T1446LCZkLsX",
  "key28": "29cBE11UamcBM4Mg848rKvqQY21u3LGqc1vFuNVMbT8LhaziyEAacoAheyP4H4aZpjzKW9VCacXvNNv8izRthTo2",
  "key29": "2dNZg2uDtpKnUJSEybYsE3Jt71cUUZva6mmu9u56xWHtA6h8Fq3cuBhQu3PAU3nFojanWDzdFsdNwGm9HrsXsCC1",
  "key30": "2wmekJ6P26ecu8G59EQPBH5duWa79o2gSkNGsmqBSQJM3fmTYi1894ouPLbrRke8DXzZHUASs5tou3XdEKW9LRKs",
  "key31": "kGeQS61qzUPXFmvS9keaYYZy44Bfcg4kQMrtjgMaSJGpBb71pJGfBif8pQJykWbZz32XqtQZVemyhcwGQ1M7q5a",
  "key32": "47mKtEtZ2weZU2o18ozYTJL5YuehiUT7WDYaACErTuDWztSjg54pwGXnjEDeHvT3yjuV3HetbdEfRxhSifGbQXvb",
  "key33": "3oEAN4p3xzDdjhLnKMgLhKqe1qEmoJYTN8brSqJouF4vosET7CTkGzHCvPST57AuNKeaFcPSTKH4u9mLpDgfihov",
  "key34": "35MByz4YAhzCYCH5SzwQGHZywCejtGhcFcPowAwPW6VKobbB135w5SqthiQ6rKe5davZF6DtxfDgfJmSKpRLtHyK",
  "key35": "57PLWQZSZCSJJ6WwLWQQmJqaAXMD2AUfGSNzimD1iFzdeLVgBKxTQhfauAjPwmbsUnqXBrAeBZRawDYFPw5K99mW",
  "key36": "w6qxBtP133DsE81TUmZs1yqU7EGh6yhQoeDVRmwTNvW688Y8qRmPPPugkgECkDoyRdP6tiLATg7dUfoSAyKKxhM",
  "key37": "3BsWxNxoD6ybAGYExNWGbPfBM7FHZEtCtBz36A7gvxUJrCdX4cRFa3QBLmoFAchPfUDykDgd6uKanweWdYEi7Fas",
  "key38": "66UxpxJwHCKK3iHXvaZq64kAXBCzBp6fSn8ZMqjx8i8y85TkhTj4emzqSfuMeSdHQCQxSZAUr68VjXCG5va9YKpz",
  "key39": "3nNoKHknCDkKSFNgCKGyDG3NmdUiHUGHs6r5Tie95or3k61uCo1enfNkyN1LsdnhsUgCAfs96ZDWrRgBzoSksNMi",
  "key40": "5HqtF4T5xfMaWnz1wcKsh1TGqmV7TCNsEekDLM7bhGJymd37sZF6h2QKcuP7YHibzqM2cwMa2aHsDRFuzHnjMomX",
  "key41": "2JyBVrqKcr48a677aXxEAcbCDiq15sbFLmuEsMKhQwBJBQ8VEJqtFvfd7gb4zFaczfEqJ7agDdqeyWuJF1atJsbh",
  "key42": "2aS8F8NgfNzzxWkDwo5t3133A82f2w4XsRHs5K7NPhxCQSVKoUQqn7zYTAumxiXWsWFSuLu1yA4SFFf3N6QN8STm",
  "key43": "32Cn3AEd1RQrXXkdgnc5XnJrrZpPwG2e4jnD5VNXhtusTtRatZ1iv2j3gwrEB7L77QgZZejnt5spDbN5kNt8NWyz",
  "key44": "3bFeg5HuyMc8RHYjEg9Duswi7VKzgQk4HzfGF59RDCSwCHcXNi2XLfBFMx72q1n5yioiMpVZuufRmtVBfx7Fut6f",
  "key45": "3b5yyS4N1vUeN1kjz4p2boRtukGtSDjDnhY2yBGjacBLNMhsbc3hmCAVRyWqJTsBo57zRcRyZK3rwTjojAekf69V",
  "key46": "5Hf6m8MpQFsm1tYEW9G3f1ddtYqeaW15oNZ2v9TZtjKY1BuNAhdKuyNpQhUdkwPwdjsbn9jnYrFsCWjMSaNBnt12",
  "key47": "8P9AQuXtSNgqMkdxyusNo2F9nk5UKVzGDMVSQVDtBhnD66rNkTdicoCbvYaMouxGuqxhoZvTvvMeEyiaje3iCpb"
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
