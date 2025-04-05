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
    "3GeEuC1CuoodZekWpeSM9C95EvzFbu94pqhQuqwKRUknDiMR2xxEeG6ZCspuRZLZEcc4vjTxRhhashZuHrdr5NVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59MR1QdMWjX2xQbAMQV3ut3wA7VWNycccFCCzKo9JD2LZBywNRQ3MLw6xLXu5AuZUQckQBWQVVWqbBmtMygeapJN",
  "key1": "4avQCqXiDqpi8ZxZSd178fekEBMsi32gJ5af1MBpjp2hqF6r7jTnK7SgkHDGWfeE8tSdQiaA9khdR6sfDYg2BuG9",
  "key2": "5Ay8GgksKGYfYnhwWBmUZ3ZfP5QLHzHLKXBBTG5Y4i3G6Tz2wR4f3ZF7Cuaf6hhYA2Tmee69HqxcTJNxzrq7cDFV",
  "key3": "4Pwj38GrwydsU4L7tFqUNdzepvZde9RYkB41shTnXt96Jdj4vkfaUpBTAfiPTeoWEAAmbQYxD2rWPvpyretW9Mhw",
  "key4": "4wX9noZmhzpcXLNYL3cULaTDcUR7Z8FXRmhV1X1EgK1vooFK9CrNeWDCnBd4BkBNUp7QjpWwDN4fdDm3uS8n5rKd",
  "key5": "4GXuwapwUoT4767KqWhN8P45PhttPnk2br3Fd9J7GCfx5Bs3B9SZhUR43aXJSYyDFed4NjZxDWry2nNJWCWSVqQs",
  "key6": "3ZshrMGw2FiiawXAAjJPrNSyaGfgBysakjf99retD47SUMYmjPPD6D6pRnoWVsmDjCWUzkyzASPgLZdE5YUZ7Cxx",
  "key7": "acRVpvYBMnVK8V4xQNJhK4puqnzQpCDXEgftNb96DECwUg3qP1QeS4FBADJtePdDHYq9HMAp1fh8z31jVFkf66M",
  "key8": "49ZwNmmWxzBqyZkRBee232HYrom1raqZ5sBMhJ3NTNiFz9WHqCiddrp4PFdv8Dha2Lsm33YFeqPfB79HdXtrMSTh",
  "key9": "5QamCGHBvfkYjpeicxLzWSGiVf7KnnDrh19Do3qzY4tuL3ENGDUges31zBCCCEeNs6avk4Kus6fuyYhvopuNrLqa",
  "key10": "JrQvayb8A2pJbN5RAbf9gznQKdwQYbvEsKSdcoro1L5P5ot78hTy7zpaTmp53bQbEWecQ9anQCBhnpjXzCrK4RU",
  "key11": "4ZfAQZ3pEUVb28qeGHbbwQvsWeqikswZzEuDdWgqP444DcUGzbMJS4X87r9Nfp9pJ77rrJFV5ucRf9sjURoQ7bxY",
  "key12": "5ZxTKN9QvDTWg97aUnEKiGLitSPKeYA9g2wxmBRhETvdeHhYRpqawo9z8mjx6b9W3pMUMXzahUCNucFJjp2GJvxC",
  "key13": "32onJqQrqmfZZMziKMATqonY6bde6VWWbMAGKB2CNr7fcq2MGvH3wsnr3zQPTqLi68ZtJhoH53gXVTfUCvgNfjbi",
  "key14": "34K1rUKsoeGtUN94MydjzVgeAifyGbc9LCNBy9iZxbVuQCswSrqBUkmRs2uzrDxL4CbgS1AGpTktxnFBzVybMoB6",
  "key15": "4vaW64z9xvQpoRiz2uRqWs1gwiqGEHe628SeifH4J7aN9XggsH3NFUgsgPmRByeXHK1Es8KSfodmqQCsYBxVxHas",
  "key16": "58b6LBncYk2qE46nsWHk3RAuiQQcLppUG1wmb8dqkL9aA7nJznybN463uyp863ZHg1aUFYpPPxVKBRs9donRdtyU",
  "key17": "38TrwRgZNC2uZchayLRG8Xkk9y2n5P622FAiudk2hrqY16oTdpDALvb1DTcpp1ginoB6WiEhbAxc4gNwL2ZVWSWC",
  "key18": "2xA7oYBepy86E3dzjkPvLzKmA87Ao5YWzezRfXS6AzGy7GnGSiG2YsXZabNp7UQkGGnQHfV6T5uRZ98LgU3K2rg3",
  "key19": "62vN9vaHCgpGV4E9nKfsWTdyBPxfsxFntwHvC31234jpqCzBjLP9xCQdrsNAawnZkPazcYHw8rd8QRuHN2Yia14D",
  "key20": "2QqhzM6eVHHxoMouEoW6ajdyaNHiQKRcGvZf4o7VDS1ZveiztmwkWanK6qKN69z9toKB3hv42PdhcmLgJpy6jkjK",
  "key21": "5j6NCgvFxw9UhjLbYTgHbwrfArrMp27EPC4dQ1exNRqdP7AFTNDpaGpGWEB2DRjU41vnkUUbv9hbjgQAeEJit1Pt",
  "key22": "2c9RkjUNjT2qzp4pSPzhXTQHyjcAAXRuXj9d3vCT2TvWeUUGLrArYpvPkN9xGA2RBGgDFQdn4fQuBKSma3zR4tYL",
  "key23": "4F7Xqs5ocbSiSLmSSrCDL8EupeecY6MkZjApDr8DfEoPTsMGsmur8suJnZthyjPAXXkVGvZStAiNdvqH8TvhWidt",
  "key24": "A1SnJdDjgQjQzBqa3agJJhoEypkVHpiGnTQDj2dWztV9uthCDRczcj29gJJ3h4ygahc2URh1pBrWyUyNDJXYTLX",
  "key25": "58XwFKE9Fk9nyxCPM95kZXoppM1gG1vauwp6XL9LgujEHTnKR43wxvpC3X5JcMaAmJYnnLMKaxs2dpbNwx5KoRnp",
  "key26": "2ywbaT3sSa6c725pYsqMtfnrgrWQwxACxKkYsrQTT6BAFSXVAbsTVbuuVM3bAYNP3zjh4XGXBdmUuSPHkVWZU8yi",
  "key27": "4GUvt76XevepgQ6kM1JCKcWZwjLNm4FU9E9fKm9fkCnrNXvf6MymerS89zrfZJXYVQMw34oiN68ccjyPM9vU3tLU",
  "key28": "iZzEXzUMD6iQ8LZnBCxC2gggJYwVvAwZPQgoi2VudjFHM3enNw9hw963WWCSrd6g9LapKEqaYKXYT8viKfcccA4",
  "key29": "yBCBS8bw8TLnskm4S6MnWTjXGfQUmcTMgpr8pBG1LS9tP9vTmLWWdXno28fhpCJHhfUvsPL9ETtBswX2jSqRH2B",
  "key30": "462U8LNk4tneckkw8X4EhC4J1M9nBkkeHYTq5J6EDfX9t1WGHMqFA3ChrFdYDC8nFsC2n9u9jZSm5YeyrVmKaxRW",
  "key31": "3wGcbGvSUxGt1EGDPi5Nh4PF7YSLBbrfD3T9DY5P7B2v1bfSfstrrBdAVbL6vNnqkQBBpkfTrnRhFSqTr1DZhnik",
  "key32": "4kwmXL44Zq5KtGhcVfMdTte6yoEUH7HqdSbpoUWHyZvnJ4EvajN3BG3ZskczZWhg4FvAGe5U6rucKtbEfRa6jwdN",
  "key33": "3wRGmY9oYZo45g4ha7U8VqB3zVdCCXECZiBR8F16L99Pogh9W9nsu6yP9ZvmbRMakbcsiQbnMhvtbmwkkEMCgWz2",
  "key34": "QiA2roSg5i4zuxbAoLXYNfvHbCZMqo48UrKAQJ8Z1iJ7yu3EpGYHRhQdCZWkeLz6xZKR5aECqcGeEGbjY1A6Sqg",
  "key35": "vJ1LmWnKav2KaLuVZpo7ncR68om7Za2hKz71MEeX5jJNQuYAJ4TcX7AKNN4NjZ9qrg9oKbTFQjYbv8xVErXfSHs",
  "key36": "oU6ofSCJ1RZtwe12mofuYxTH4HnAXZ3i9FnNz3V4jUyRYQrMq6dmpLXHpe9ihog4p1dttnZ7tTmUAiXw828nDyi",
  "key37": "3czZ8YqS8FiSevgQPqrarnBPBDqnHiwexavYrfyPwtpZWm142ys59qDFq3BpL9GmmV5e7KFhFbmGYpgyRgGYJiXF",
  "key38": "34iUMxDuuZZvdmXbB17B61PTzkpZyyXvoBZGaYCQ9isPyJC3JTnfDB95T49PE62rzCpdNrk4ajf3CiBasmXvNYe4",
  "key39": "3NrdfzhfHxMfzGLJvuSGA2zm4MqoZuMTxtGR9ozat3zEvgCAtZ1oKZ2NrromHr436Xt2ujEZnZU8jM8FPXr177J5",
  "key40": "4yqRfhQxb2yBGyPB3gVMzMRkBnubf1F3kfMNLwNXJcdAwTcWn8kkB2e4RM3mt6EbTjCsgvmd1a5YAC7SRYHoVUTt",
  "key41": "47i6GV75v2u9V7aUtoSqkxAjrgqPWDYWnnDyakwnTwCtn3WhBugqtZSbhPXkPqLpLEbxSEmRJN3f6oKgsbtNGyuZ",
  "key42": "4fCDJ5JkBS96Kp8YtdjpYxpx3xvaTuZJJoV4Mjmb3RRFaEk1QzHvHj7bjYZfNwCe5zJoyCEev1snPEhRrXkEK74C",
  "key43": "1thgzuyyPHyVmGUNtpGFXFqKhoDuqENMCF7fCVXxkxBuW2iysJzvxcjXnTTwP4WrQK8jtwq4Z9P83zUF78gXW4j",
  "key44": "31tciwEC2Jz3DpeZiNeD476uXx8fCuPefKW4cnBw9kPWK3xgfYpFBGtXH8Uu7QpfhuKK2BNddwhddn2VV7jTbeW7",
  "key45": "5MZrLJB7hMfH9VMxbbHVcV9aV6W9DvcJ9otRRT6Nyt5FivaFRBwrDzjh5zAQqxQW8xfP4tcw7hvq1NXS94mgpRth",
  "key46": "5md9mWXCEnLypwHVJgKwabCyJ1MLygqnvMC8BSNsGT6pjkBUu1pVr55ZZBBLoGW4BnCrtsasgwbH7RiF4oxADnnj",
  "key47": "2XH7hZ55vi298FVmhP5upDFAyCeNJDh3MAbrAFHUu6XAWdETLDiGHRzKX2v4BmqtDdQx2z3WZ16Wi4xacEcfJkWr",
  "key48": "4Vjjc6fxw7D6E791noQzqrfXizSpaoM6C6MCnGFaZZPpYwEnVLGip4Ce2wrXDUFFLeR8etgS3aEkqbsk5vHoGgWL",
  "key49": "33RZgSWHjTzAY3d7aoYuf9vwdqLvWmkVnThUEdUuNyLaocnwRk7oXfUa6iRTKDrCivKV7f5gtgKwqJF1rS7vPYNE"
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
