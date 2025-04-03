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
    "3wdru1yJWEasFViJUYVoC8NGKAn5HmJCML81FfGhP16scE48h78ysqNTmR3ukcsZ3rEaqVytAeWmkMH4LncZ9FzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21EN25KDKxiZbGrxghbtkUYLJ6Uyp5kdHmjZbsFrtgd1n6GQXhb6roLwXGwprQWBiEdUdBQe6Se5jk36xyGZmyNC",
  "key1": "j4r8pLcUmfQSz8pzwjEGtKf4j7EvidEZXEPThWcLUyG2ZUh4qm8YFfVnjjUUaPRrMLnMr6MkpkMeutNyfnvvqzs",
  "key2": "4zYytAzKArYroUsTfv9zhyguNQr1PobhcUQq6tLyAm6FaG4beDywrwdt7oeWkrFTNu47KwAd4uZcJQEph1iTtezA",
  "key3": "W7DRdF1qWGXQYDx4h2iEmmZKKaV3oq5ryUkLjpDXuZpsT1w5DdBeYV4sqJaXXsDTUPYvBhstQkymhKdUQUFxbnz",
  "key4": "5bz8YbEZWEAxJeW6JhZN9BaBcvZAsmihTBP3UZz7Uhi9s2h4cpgftBniVDF4Ma9sU2RDeQyxzPXSPRCudZXQyFod",
  "key5": "2FPx5jpzMdDbjCWNYPDwDNmBMerUvgpjYPjf28Nr7jxWt2CgUWkrSbbnYdJvYneBZe4DJthsyrTyD3xrH5SCDSHj",
  "key6": "nhF6jbgDHAZcZmGtgWTci4mgDhaQUV45yFgb37ixTm6Vzawb1LfZYfEQAFGhgUMWrevBfiSSNbnPmSCAKnvMHqp",
  "key7": "w5bg7TGiAv3Lf3WW7spYRSLgDLtXe7zdpBnUeoP8uxAHWjtghQYuX1tQbu8QH1vtLu1wQgnjNJ1bpxM4jxpBP8o",
  "key8": "5BFyULkvd1fhKK6NowNYzRNAoditGQDs58zUpR2nfKi56pwADxhvVaKriq8nbzjLPxk9nfM7bK8E7TbAB1qZawrz",
  "key9": "4heXFfc3wEtCfjEkKBBpimrcPJ9hczqgiG7PVeiyaXU5HhJh1Lb7NLYKKcu4ndBsYezQ9xvMADQSLFe2tLpAh8Dv",
  "key10": "49WhpfNkCGJcuHiJU1H35PaKaZmA2zxq2RjA4SZL9cZXeABaTb5Pp3Smw6DMXNgkTHWdi2Digzdg4scFr5AhgxUx",
  "key11": "3wGN1rxJm3ryoU4ed1tytvikPM4FTJ58fHewPH3JSkKU8xSiffzX5cTT9Kc2a83Xow7VUaPmsk4MGVdVMHo1BTpg",
  "key12": "gkioxEybZNKJE7VQttFRCTa46asBKcMk5m7SiJ5km86vcC9mWKUy7jZ9uW5CBWW84puevdmc23wWZosyxzEWAjp",
  "key13": "3LvAgiqqRjjCXE8VPAcFZnmFeSG8ocuJHmScqMbLw8CiMDy4kUrdyxab2VV2jNdPDCJo3At9hqMeVq4WnpD3Gagm",
  "key14": "LQDmfhe712eznxCdZ2ZgctiXyviHssRw8pRu9vUPthqf3HbMG7MWnJUJt2dmkooUTXLZqC1ZkzEu9oTpYwgbHY1",
  "key15": "5aHNxbtNno3t8TVKy8EWBowJvSHZbndK5SYrKjymWLWKKVTySMv6RdCdAisQ8z26Gdni9Hw3RMzkmWcoTosT72Ny",
  "key16": "5jqFLiDzWfrQ1D5eN2qKYpN9SAPNjE7YXVGf7zvyfkSHQu9MA4fXA5b4sQwTwriLfX65eyb4qk1QoerHhnnZ5wLC",
  "key17": "61QJtzdecXWszwFTRAxAEqgALukfAiN4T5TMZb15dapStiP7keKXqatgsNjtDdoTzPknwNTxNE8rJLtVhnbepgZ9",
  "key18": "66qEo4bsVMsWCZ3YEjTt3ZRrx4XnXhd2v4USPmiAY5vqRWeZWeLCZMoY3gMjyXd5ctctqxkKHTBaK8TuF4zTwZ6p",
  "key19": "172RP6hFC1EjxZFN7cfBL82iLQvbNNcBRu5yRTdwwhy5QRXmbxsi1bTxB7i8sVQmiw628QX9Y3PhBJE9M2huExD",
  "key20": "5rToPAF5t7fF3iSiD6GCTgFiC88AFo67xu23onqXSVdhFbMVkZah8XE66LN19oNPv4iWhFxeACdZtfQN24cCX7mQ",
  "key21": "28kTEquBKkRnCMrCYF9vDgxNvs2jit1PD2Qnw2EzXTxp22kWNkKTmwt86JbBSDB1pHWFJ7THZYQXseGvDFXCxbDD",
  "key22": "2h3wNubV9zi3pyU7cd4YuaJVdcGmaEfKefP44h5yjDdcWyRAcUBc4YcCc8S9AyRue1k3ziywu6gg1QqAdKdVrm21",
  "key23": "4QvXGDQo1EzswkgV3mYGGGnaCEsu9UsxYNedKffVvKUqa5Fyh8rrcFfMuE79exKjedWuT6uiX82RYdy7SykRwQ9h",
  "key24": "2gf9rDFG3p9LgwWHXxtWNU8gx7CCLuFDSk2CKGKYKyF9KiDzvmeg5UkLiKZv9FhfV1BpcJHgTsXUUyKA1vXWBBHa",
  "key25": "4sq7dXodKerNobSuuKqnHjav1Sf7GF46KZd7N5M5oR36hk8bFDgHaR3dmDnYzMqKF8GGv5X16CV7P153XpyuzmDA",
  "key26": "5MsoP4etuv15kUr2sDFRnJKZuG375YapfroNMqA6eLDcGQYPEnL6onRkcxFESQCZFmAfaVJ3wWNZjgUj6BxPhP5E",
  "key27": "4xEKkNh5KuzSP4vzFg6RSpGdVNLkypLc47xreeZgrN4xrLFnqnUuhRJTXvkywSVZXE4pM84ZaDVYXP7D3QmvAVCP",
  "key28": "axZGZfM1NeJZ796y27thtY32Bm7gZYTPDFbVQKNuaffzqmAvhF9hKhifTp4KJJRuur2sGgkUmVYrsh7UKAK1m9B",
  "key29": "QxZzT6JTsY8SyNfxBivBUFzJnAKPaky4BqxUhK4Qz3ebdZdk7Po7iZrZbanNRpD1jSrKnYgu4HrW2CYjSG5RqX9",
  "key30": "NQi6xvxvj1JRjnBiiHE1Du3KYdQPRjWLXerKoBwni7NUqXQu6bphKjzSyJunzgsLExKmxmmGrzadFm3TFh2nuiW",
  "key31": "62QANRs62fyPvdiVfLryYGwUKJuw8VhvmkCo5YCE44Vgd7131w8BWe7fQrHX17VqnCysqBsjMaCoU7QMrQVzc9h4",
  "key32": "1WQ7jPW21gSuo7GsyYFpsUtgfsVQUGtLvsLyG1VzRuMkpGXe4585tRWDKaiFJWrhgsJhnveVEResbrFnTDHuTo6",
  "key33": "dbYZnbwTYMa1zdkoFbLokkbtJJvHL27EBnEjCz4YQaAL75m1HFbn8aokh43oUJthBwTsRjPLKMijrmEuCQBWCXv",
  "key34": "5uvGS19ciPbwt8mnurRUMHx79NE3YMLRZP2e7AmBHDWM4n5vZ3CoBNuUhgefVG5pMM8u7QurWW9HUGAi9Gk9XqYr",
  "key35": "TbtW5vEt4yq9ZaZ2nW32NxedusAvXB4DMMnHyaw5SC6oT5M7Afpp3pq63dffbPz7jNuvvtMMta9WMF3HXp7muec",
  "key36": "5pn2a3FxXDzeut2ugtcDqLu2VsKcBaRmXASGYHZ1e5rjT7RAttobpETbd9ZjECnVzKrEKcTY2nYBJteADY5Npc5E",
  "key37": "3QnSymEoCzuQqT675RQwfWeyjmyF6uCuStrdWxx5sCeeBiczyKN9zSCBbHHWnmsNrRyU1tqQ7DouVRkv28qLanAB",
  "key38": "4SFYJkUYNQwZ83ykJFEWAX7UhBPGzU9o1aiZazi7upANkrx7h5dDBVp3qQR8ibFPo4xB7CNiY13hHQa5kNECfxAr",
  "key39": "5SZ2LZ9x1WuKvCVnLE6FF8dMX4TLabycbQprGuehm3FgvvsLDH7YiAatfxCNCGaT9KFWj6sbuuqeKh8RoJebGqF3",
  "key40": "2zYRES9r8a24EFsGYhbGvffJC8fcH9jKj9d3GPUQJ5Tw1aKqZ1DEjnPQQAekrQ4bYU5DLZPeacYMysm3U589rua3",
  "key41": "52ao5dUzBaro5f7NGqK3dadcatGCSJsktmZ7V8pLEWqGRx4ZAgzQFAhZt9KmKQEMybAPUYmUcr6wVrUix9HA8mBR",
  "key42": "3PEYXC2iCbnSH4TBcP3MiY8d89p9MV8gdYGfQ7SaZigK7taaKtH2uVB2gsvUTXCEGcrNfQ8mWpYQMGq9hE1Nrf9F",
  "key43": "64kMPSsV5X8VpVuLg74HQxWKm8uBf7pBUejkos6xmxou8183Cgu7j9fKDZ3MmyMytY7ArfghiUawqCh8v7m8eiwj",
  "key44": "66eTcxRK2csAEFpH7rt7EzmhBFLQ2u1WPyM4gT2hShd2D8ickdaGKSjVn5T8NdK9HiZ2bFSRht2gbKPNnMepJFmB",
  "key45": "4FY4UTj5x7QfidBKsFzjpqcay9ieRRd67gJzSZ1FYS4Ct6hTbRZkDEWoYdjSBuEyd1QAVtegmzmCxbN3MjQWJfsr",
  "key46": "3Wgfyuhc8eVhhKvmVreoNaURTeUg6W7192HmMrEuPPZu3yNARB439yDTWAErVt3eT1AiNTwqkG3CyENq1Qi6VJx9",
  "key47": "2uYNXu2NwkFHewJgCc6KPfsjoKptibDRScNkzk31x4NzbRxmnEc2iaWpNdq2fBffqxW69Vv5wgFzfWoriLKA6qSJ"
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
