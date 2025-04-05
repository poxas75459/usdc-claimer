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
    "5PQYbZKquhcwKs9F33dtqCJYh7Y4PuscmS6zVNmHfGQMVza1bKpvm5JUa5SjDwhL7NBM4m7oRqXULJ3CeUJNCGaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ex5coT47A7LkPxhA5tGmCi7KEgCnY5rDtL6t7NTiDENU9ZA4BZMFmR7azgcV6FuvUKChnpHPdQp8hVsNbChBiZF",
  "key1": "WsFGh1C6UcYV6184XWm14xXfzYUyRgSQxMR4NHPn7G7Rxy54dgTBPrECDgYAuwT9iSo4raWcMVEf2oRHEJaa5P2",
  "key2": "5w6xVjkPXCtijAw72GfG3CDbUvstjdYnrWjaTTF9TBD4dxMDXDgqyBfhjCKFHb77DZW5JZvVC9iedZ4fcHWvgfQ4",
  "key3": "4DxPSzDG1UgERBornT9SzGsxE7dsNdEwNa7nvYvNgqJ7XchKHUCHvqkEigtr3WSH4Xzj9PtmmQA2M9FjXC64yupq",
  "key4": "8kBsJQMKPJpNLbCjb1bAyjv9wxaABGX5rzgRM9cCX4YxZEVwieKce6Zdqrr6xo1u7PcoY6EZZH3VKY2JwEuBNrK",
  "key5": "JKBJm5WcBqVQpkeboSFUPgjAadmwes93vRUrr8YTYudAvemhvykyikFSi6wPchxqpJXZLgVR7vcHYgQypmZUfFf",
  "key6": "ALLnoP3DPJC3DceSoFh2KY3ii9eDB6P8RMSjYFtsRgeBRK8R6ytrFXvM5pcvb1bk6jFRrcZAm7wdfp9gLwdnwsC",
  "key7": "5B3fgrN1kZRh49WffLttR3HfoJ9qZSNdg5KFTvTaDfm1pg79Jy9phkAzfa7UPAK91fLcVYRXTCPWn634cLMFSZpg",
  "key8": "3eqo59T2rhhDjB4fXjS3oqcZBgxqY4GTsDFyobwYuSQBvcoVun4XuK9ZYiEbpeyVoDo6bReU2ir5uzq3xQiWTdUK",
  "key9": "3fFf9RdX2b9DQv3JAHi9W1WrELcU5y7z94iCoptNVopLCzUgxc862zgTpoGJq7wRszhtACUCqUwVJJAivQ3Ck7f6",
  "key10": "Y2tEHtng3pwE3d32xekwh4HvDbjVHWKCqUk2d1u8FcdSthxsAywTVxS4repGhYavBnyAyqmaUoc3DLQQQqBrhwi",
  "key11": "49ss7oChVkfFFJmkwh2xmC9Bjjd7oen7s9aBUMhFEbhrWfnBNUawbMGf44VBNsFK2aecS2dJzxyVRTZePZngPzBF",
  "key12": "2ofkpUBjozCvQBQAE7auerUqemqLjgEeZ1TZMDddR8EBJoGh7gUsDEWzESWQZgwV2CwWpukAS6fygwDmZ7pup2oF",
  "key13": "252mV2ZB9keKXFUf3h5taES6bjy13g4duapEuQHAWoxynr9NUa34WVg8tJyucB8muftJvG3u7DmgRTouQzfJp4wC",
  "key14": "e9FRQ25aSwspRxmbkAr8sZnRkwG1pKggVt1jUhMFPhxGL3ms9qgzzuLaEvtQh5Hj9sCNBc1t2oQkkc61wxhUJeW",
  "key15": "uUEYbT1EsNTi2y2Qg82j9bEQLp4KUh9ArmEPmb1x6jG1owqRHquoRLWd7Gp2ZmGRbmHWmEe1V5zvdPYHzNsmtrg",
  "key16": "AwofocorZjATYTHQ7s7jQ6xhMXwxUuZsuZF9oig82jSixu1VrQK4iFjYnAv9rKnyE4xEhUhJFDcsAqwTss6QHo8",
  "key17": "4KQbu1aTwhoekQkLxqeLAC56pYeRqRZM5pUn9z5nrTx5JxYGB6yo7TQNG4FoWmajR1dYzJmRVR2duNY1tG7obKLD",
  "key18": "3ka4kErVTu3upGupuxsQesyeKLjTM32mNyHAcTrftNawwrWXKJiVAHJsy5GbQvJ9RLHEUSV9Rix1fjzWbKt4XSh2",
  "key19": "62K81Hec7B9ee8ESELPZpTgJMx3mtJ5Y61LUoEU9jgdsY3SCVYMdCgcd8m9DncXV3jB2bpWmW5NeWZ7uCAxz4QNG",
  "key20": "5gU4agrzF25Db2KPRXfmYXoYZY8M1batF7NuLTGrjvd3yBTH8qj33AXoQZeeuLXuz7zQNVZ6e2SqofnTrKN2uvKT",
  "key21": "69qTLbcpFwxpCyjK1BiC76aDtWq6qWKELCpeYfVgqhSpi6jtZsR2hRsHPrBmycai3wGm2StvpB2ev7CE8scsoKA",
  "key22": "395PrbQgcYxVmZn9grc2Ph1hDEDAvMLYbRhw9tdsTUAC76o88GFYj8V3LBRyzeVTvWivn4phwesiXYp31Mj85RHk",
  "key23": "5abkf8b7cbbpQ1dG8HwEa14c9EwQpwJduPD99rCvFBSpK7bNWLqBdpqH4Qs9u2hSLJWpmLLu5549qob7prZ6jhyZ",
  "key24": "2dhR3a7Tp3WV6dWhHbRRXt59DRWrpNGSFq734TtzwyzWPcKxZ9s42V2Nnpke4gC3nD3kYY5erCZkyd4KE6nUMpDW",
  "key25": "5PkyKhSXgRJPJtP7FAgUqaBPhKayZa8iSWVhxkwZJYnJNELFzrjt2QYs8sy1oYXjvspwtvXt26uGeTZ6jHS4iZu7",
  "key26": "fdZLD8o6xumvj9wSj9rdHuFAeWpo5kA29JdnNcQEVKYgy56kLQanqUXrCZX3V3998zNWEzvdWmAcYC2bgui7euF",
  "key27": "2Ue1N3PEz4Z4KTcffK3E7JzFuS6v1WXg3vpJK4yig9gypz5h2H8aZTQpidu4q7fX6sEwsFrigYhkWTYd71d4XgNH",
  "key28": "59Ng19TjgTz3z2kQDnmynYN1MkQNYtBbtAoGyhKHymmwbkzBsvoVzR8Uqojx6ywHQgc7EvcFUzUKyicDWJDbXKSQ",
  "key29": "53cKBye49kvR1fc6c8viYH2mxvom32m9jRtFMtoBoh9vx7b6eTW6kMxfy4QTqC9MPDnpmgoyKyKuhq8YvRpj61Bm",
  "key30": "3jCZczEBK45bjhqDGrd3VpCG7xed85upDKhL3Db1f2KdVZy9AL38HmCimZ782bJjP7tyADz22bph2ntgHdvNqxN4",
  "key31": "4djTm9j61r45JDAv79tM3hdQVjXVKawgYBQMoxhYiYMt3BCiLHHTRMjzFJ7nWTZ3L3bu1XoXBigvmxF4AQUBz4p6",
  "key32": "2WECZdyBjPndXtvQVExLj6JtLX4d5DT9tiV4PgibupSyL3Zeyt6jdwaXQuLgTreffnQoS7xUGG6W485E3q8PFYeK",
  "key33": "5Yzn1D3SPgt6CuQQ9Gkwri5nsBL1uyFEH7XQUuisqR1HSTXXB13t7PSnvNFSeXuZGqMov3sMWUuevdrPfLAegMb5",
  "key34": "52PVZV422mSSeeacZoQjsc8r5T6gsHpDeZPXEWpBZ1WSixD8NjfX6pKDQkz6E55fP6dKq9HgoLMaJqVLWK2CeQso",
  "key35": "2K2yDqffaaBbdRFfXjJUL6un3kDSzVFhZnvucuy9rtdJrTSdQp9FLa515r2xkgdaxBvg7VrEhzkn67aYqwXJMQnp",
  "key36": "42DuV9tYijcmkF9FKUd71kovjGtVLChxtjzLZDX6ZUxxfUurATMC91KKXNRFL3hgpMeaPPfucnwJAp2T9fTAzUPF",
  "key37": "3gBj9ZtTQUCLYYiFZ6XBokE4Y5A4nNAc9vycRNkhbxPB9hTAN5jDRAc2mnMhNdjxG15crEtAaLPENYGoVkq6NjwC",
  "key38": "2niMRjFQFNtbApwg6n9GBd5tYyeg3YWLSZ3AfGmHJHKLDtXWFYoWHr2ZbPes1qEwcdjnBQPpfji9he719w3FmRA8",
  "key39": "5TTfEiTd88XJQ32inGSCKbXGCprwUUb7aUkDLpBHqB8825xpiPGg4gEmZnYgFnbBCf4DRNExky7VSzNnpCwHnQn5",
  "key40": "599EoQvibLHiKTt6YCz8uhaGJ354nHh1xh36e6vvrLT7DrdUfbjJB1WEEqs5FfakVB5eV8FXDwGruig4ehhBsWM6",
  "key41": "2Rn2CLQKjE8drxVVVEnC5hknKQkAaCxZw4RtafatikQgfB5GJyEaRakzm21FXV8Fpk7VrD86iCjNw1hLg4kFuUsk",
  "key42": "23HfJKUvFvdcvmUctFuHXTg27TDwNdW5Lx5FvJVM5DYhM4585m7JUUHC3XYZHwcRRtcSLcrLzZPnKdXkhiMDqCVs",
  "key43": "5RThk3S33EeqCVfuA11NK6bB3Y7UydgkcZbPEsbzUEWFSzKDeKDLTrT7zGazCN9Mcb7Uu4e5xD774Be6E1A5CRMH",
  "key44": "5towK9DHdAQxnxh2LqNYrmkE5xVRMGXgjazqk99thwF36Lm23jhq4uT6vaJEzsn8P2C5aVXo7zLLqbZVCkZMjCp1",
  "key45": "4ZCr3eCXHVMR4BuDVYPkpmPPbGkmvc7ihujxwwErAiBb9G2Muxi5VsS5hmmGpEGknWyWeJrdsXKMPuULwmpbpwcn",
  "key46": "3kLhzy5A2mpXqkAbino9FXgQkFgQAjPYPyBXtttFghTE1WqBUzLkVrweWYBn3oj49GTnpMjLdUDQ5Yvz1s2ZAVht",
  "key47": "2rezZahKd4xkLoF6UskkeAGpQjpQSg56wKnQgWQwAV3TTD83MejDoVPFCsYiemGRBSWV37jgzssE2rDBcAJF1ZWK",
  "key48": "4pDjeiNKhzxPPbWRZzEuyQs1DQwoxUdrkp7mGqWwNNWiG2meuSGUmfzVv4NnconaT7d3o1rdsLEfSu43GPRkqwL3",
  "key49": "57dKKvXWrSCetW465L2fB9y2U5iu6yCLUYYwm2uvT5eGHgYZaoQN4uKzrKfRxsdAYAxzkZBUSi6PKUpdYQFMH38Y"
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
