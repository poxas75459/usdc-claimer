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
    "ch1tShvEUuDcBJsTcprYKAddWJLD3Kmfb2KxP24QUXNZGkXn9vZd1N8mLk31PsgPhKwQbznxZcg2KvKE2Mm6uK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uVf2dggFUukuQr5RiUgeRhFGaQ3FSWTwH1qR78cACvdp5NsdffhgmYBJbvLy4qMCBhGnKZ6wvSm9QLzNn3zc1pW",
  "key1": "2ipGJ21QzvBoM2eoHHLxY1sF6kBaAi3RKaKGtz3yWpo1VN86immCtoeR29bag7BizXSJ4bWo8oQ99FVkjbxKVbfj",
  "key2": "5n4VKd3pWG4RnTWyfcc23ZXtr8wNqazmEMMG8x3Q2RAVzg2AR83GiTxH9eD2m6mp37HAqHdVJQpR7jjouSS8RHtp",
  "key3": "3QrwPnczrcz3UbndCjbMSN89gm7ZSJxTmcvjR73HRovP2fzTgNV6VBuzb5uUHfL34gAcDMfpbKdrNvRyEZWwCwWN",
  "key4": "Sak9uBx4x2DcP19ga5UN4QUDTUH458KbBXRW6rsEHe4LQN9qgYTJLsBxVE1SY2uJQJRYR1mdJeKdQPhhHBMuPKZ",
  "key5": "264jeJTdBu8zTF49LCZprdtQAhqtUXQHmaPGWcvMbj4nNrsPmsigcDbp4u7RHBeibHGC654wQN1XKVMBVmsrkaBV",
  "key6": "3ZYQCU7G3HgL5m4GAQBGzgkGjyJXboWXZNGj5b7LNsGhbGw4rNnwSJ2nu2WDoJuXM2DfJcSszVmqFcAgiNzZnkgK",
  "key7": "41wH29XuZXC1DNJDVFsoHV9vawQGBfbyHLgTLH7iPtpYXB9HRDUtQxZuouTb3m5vbGABcwUU2zjzEt9s9zywB2YX",
  "key8": "5d9MdaTTFKzkY7mrbSzNmr8e5m4aeUJfNmWxZYqVVRyTMiuBao5s2A1ZDstF2Qfp1KfeEJFAUzni8ZKvYpb9LSoy",
  "key9": "3HV7E1xYpbExb3VKjyCdXguVe2Mq5qXYAe2NXdoabniC9A9mNawNRv8eQxTThVaPTChDQCMrnaKXQvr3Ca4Xn3AY",
  "key10": "3bzKF45W7rJRxQxxEZ3Z3ekHZvDAEdnXtpYLwtfPPnKeztF39KkneXYoJzH9eUbd7QF1YPc6AiMynhU77Vk5oAEq",
  "key11": "49BBbs4TtAQEWmTc9DGWz6hkQNeeQCSLQr8WB8kb2Hu1TQYX3A8KanteksWfsMHxrEgBo6sUgYC5B9fEEPxURHZo",
  "key12": "5qPt8dnL6d7epygrbPfE91y8jZE5RaNwFPY9iVqF3gaHsbfmivBUbjJ2JgJA8fJYo18W16BmQePByGLYCAjmSsTB",
  "key13": "2RwbNxqGRjuhubgUK8By8imSYwRaLugtkvTmXJLmVxFg4Eo1hihNy32We4RmqxJmFVopXxb9GEEJnMLG99hE9KcU",
  "key14": "3CFyKTb8oymGeXbBgcnNLuU8U64rLGH696BzCSN3aNpiU1HALtS4n8EwCdr1gH7zdvKPVSJRJUPjRAwdxqf7tfaJ",
  "key15": "3BBxizpMepL1x5ofFh1QFCF75K3zs84ZfRYdp3S9vex5uWRM3ca9ZR5ZNwR23L3e3qyHnrY9TMSydR7YuNG1idUQ",
  "key16": "4BvupKsRfoCrdA1iqKaXPUzbBuFT6gjsSC999VwH25YWY5uQhwoeFN2GZjd9QcdA1eyKhCR8MDEBCBypveCPRDpJ",
  "key17": "NRZCdUUwZS1r9PiauX5jN3zYBt26dV2mYURLrHspKmccPumbG1M1rUHfN99soK3NzTpzNh6bLQjKwFCXpgEtPGZ",
  "key18": "5H16wKyPGunguGNnK2jmShEoYXm6ajhGWk9GE9ktbjGqpLnJd6rJnrfjj2A5zk3GaZ8mQQwEPJ8CjwpcAJtpjZgu",
  "key19": "2Gv8Y9jBnqFCGCQLjq3bVo2RGKA7WLmr8u5RicJwW2ULuG533JTWGbUV8fxhWoMZ3q2Hq85MEHVW27gvtErCBiHU",
  "key20": "2E7qUkE6pw3JWVkeaf7jyZYXRz9ST21aAPdyZcKXboQfHLxmENXZqmWfB6dX166vjZkBMy6NBtUVSk9ZScZSumn9",
  "key21": "3bULccAp5Q4tNh64Ai3YTRZj1kGVSQ3TNwLtmRCkpcLbcehb2v3mwFXeRiGEpE4yySUSEjTNg1AZeDm8yRMw3xhL",
  "key22": "4kqPBStNk6UG3Udnz7phjxYsmLP66d9gMriNZnCvhHKHMfohUQnq9wPZbMJnHi5YuAAmR1vTJYkXJE5EWtwnBtdz",
  "key23": "5FWtPQ23ZwheYGr5AjgWDMbF997BrXK2JN9vtUCb3fsUuKxjdQEFeBWgaKMRnSYMnkRMmYhDpQE6jVQSijK34HB3",
  "key24": "5dqYXKWKaZStwmun6asvMidy26Mt5uVVaRAk1adh9RFnc1TVV4RYiF1h9kt2zyQSec3UH7eFPV2WBv2wiFEYfktB",
  "key25": "fCdcCMmZZTbm49NbJmc46NLa3QmJvTWdBvdJCH9cyQXzxTMQwXu3n6Wsbh7QvCreJ7Nxq5UZPTenReJpfZ2bCwq",
  "key26": "5oBzF1SVP3cYhuUxHXfpxmZ5ZvggBSPwMsKmPMnvHihdyjcakHfRbiQhyFfbLZu4pkjkCmWVxUhZYFZf7ido2Nef",
  "key27": "2RzcGkobwtVVDLy465xdxxtUPFsfpPofKY6EuqpXKyszE8rS39uyQbKLR6UG4qsayBUmztfKPmhR961au95vQQsM",
  "key28": "5CESdwFUppumxZPNo2fcedr5We2Yov3VPjkiyHGWFAtCBUa3mkhbGckjRpY8y3ZmMhaVcw7ayMbwuaWyduU19TjG",
  "key29": "4wSEmurcTCCd9rZVHNCJrDYg5zdwFKpibd3a27WseLeSk4PGK21Bsdp8vWVGk5EgZx65dSk1kJ7wzJJaGT4fgV7u",
  "key30": "3JER5c2ysP9qAPQQSdD3hXSkgynL91JjQTrhpgnmKmYnTqmwcX4W2NURFvuUYTEf6QDZiJiVBk3762jtS1jyAPUk",
  "key31": "5fXWnHNqZ6RNFoYkuDMVHLmaDsS2GRCF4ZJjpeaaQR9sBVuonxgiybLrEgNZ7UJK6m4uKt5EmWoJREx3s44rCZu8",
  "key32": "5mBQdpewRegR822fCNAvTeADWVfnw4T62b44ncLfmDVmynL1Dp9eNipu6gAhQwqSasfazTbKzSutg5FsZmmQV3qg",
  "key33": "23CjsUcQdPih7bNDeGouU3JzyVZtKcDNRQupRSLsWncF428KomBLirV14UeVFa13QaUW8UEMPKy7uqaRc32t5rr5",
  "key34": "2aJwY1DFWVnrwsVfLCuiiE796B6REDLLXmTvTNnExGYAHx5cTSiHQwjwQkdt31qR7RTxgvibHHe8CAGhJfLxvCdz",
  "key35": "yZeAQrmJDZnYjS7xKY5g3qEdtQMoXts7npAPkeyTiTYgR1TsXWzVkH7hhdeD6AtYMb1GE1pFYVaPJD7bPmWKgCE",
  "key36": "ASMFM4XmWfQc1pibokHAavPvEhnbaAVG2zKAWwbFJ6cNk4UcjwYFcPVkzqdruZF5VKcZnszQZjqeRWCyMqRXeFH",
  "key37": "5j9ccpLxniDvPEdffnMMN2Ae1QVNVdNFBiuGQH4HhT7m6Zoxiz6JaPpcN2LKCNavd9bxPUya4tJrH8zx39LpEsGf",
  "key38": "2Fkebsh7kWuLnADPW4SZUFuPuB7b9X1JLNhrP3DxqNsaNwGbpoBuXrtEzzAvZidUFnvHufi4SnDQWiCXwjfR9FsR"
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
