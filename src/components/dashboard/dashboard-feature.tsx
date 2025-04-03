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
    "3DMMtGuoC3fywm6p2jb81cqrRTzhuR4ibPTbFLEaFEVCqnQ315ENd5fBComYUcthMfGEqBH4Ueus7oVKdD82oRKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKPDcUJt3PhiUQwiQCEarSBRr2ZkhMFXrAu3nQoDBe3pDgZjV7ncYPR4QZSSayYBNVszHsJAeRRGwfP9qMx8vVJ",
  "key1": "4hZ5SXqvSRjWQnr4Zmsx7rbcYhNkBeiQmdbvJBQ397VgkhyFQnmURi4mZLJZqDPzBR4P4VB28iRTg64TQy72hqjQ",
  "key2": "43XeE4VAVwi6i3xsHsQfGtoWMkFxrVpTxczkbSbrrv8QPoV4F1tRtxfvUfzQfLKk51GZPx3VXx8FWqy32u8CWw5q",
  "key3": "52JpkifF1DjSDBud4bwhnzrbLgwjBAQ1zCwLjNxpNUYSzKW8DBEccP3xMQ39ejWwtFCfM85W7whg1nn9QSTDUSG2",
  "key4": "3i9s4YyxcaeTkF1x6B6QKvYHJUREvz3GqENa4aHr1JMzEGgNyeNz8cBvbvCw7Et5WoVZmdXSk2u18U28nLPfaEMN",
  "key5": "5FrDGf7YbKWoJMfnmCCL5WLbhDtmFJcDp8zh4qxsjwLUX9P3KxSXh3FrJR1bVVvw2Ta4m26vaXFsnk1eP9AVc7K4",
  "key6": "2nTNvZPfKJ4vk16NnnjqfdEj6FJi8cXkitBrmB2vF9ujy2sMCxupKT5FRAJg3mQNkSWXCmBmz9dKNahp7qt5CEpv",
  "key7": "3pA96RomofxSbU4HimFzPivnYRjXYrMoyTcHwyCZpdqW2rHQ5wGeCVvbvmboGPLdurAEU2cYmpU6czPrgmBHXRxz",
  "key8": "65cYfzum1ssjkHWaPpjQbkdYhmHQvDb41kHtxDuJbJB2BDj83S3dhexteRJFouYu42yLHqN4Cwh2uyWGmi3qepwB",
  "key9": "2EWndpBERhjnMwLQJVfumzMHjwEu2e8KQFF3ScP4XGPokegHBAyobkvhZqrLCY4gWSVaqFdcaAaWvRXzSNiU7Dgg",
  "key10": "3qMrX5RVR8ELeSsXQFKXVfPCU4vqfcse1esoTD5a62LQJ4GKsWYY3c6kh61VHQuGMiiXPbnpdgDdtM7VFVAesXdD",
  "key11": "66Wmh4hBuxGE6JkRL4KjfXJBADhPYvdmNaKgUhqCYP9ba3Zwp1ZazJkmyzRnQxV6ueBnQ54rWonxcpkDUk7NSVmu",
  "key12": "2yyNBQEeEqfxmH1EeJTtob5spphd4j8TJ74MB2ykRpvNKJ3HvitkYZZWUJ2PU3fA3tLEDUJREqpzGdLNUohw4QTa",
  "key13": "E3hRPYREfjKbh4MvoALKPgfohi5mEcg3xCsG2SKWxcekLZ2gy6oDujNcqTMP4xzufjLBubwL7Y75qwiwxKPQsJR",
  "key14": "cfxbQf1AaVeBTdvQ9jf45RDPtEFmz5JWqxrnjKsXAS5WG5RfX8vM7n72Ah3iyB5vy3G5a919VPufnrrw1dXXytD",
  "key15": "4cYkaAbh886VWqFaEqmPHzTcmc4weyqXc68YEKzAd2tcqc9Svwu1k2Ufd7YZhY1fXUR7XBqt9QLeZXtHMchsmjn",
  "key16": "2aULEfxNmky1EUagCfiKyCebRyJhUNRowAraqQcU6Vsj1WYQ4RjwZasRK9hfMZfqAsddZWXiP2SUyjBsLe1QTYqw",
  "key17": "41gBvNZwRsoeJgTqbp35iTw5pCggXrXF428rok1scxGgWt8rsRyJw6RX7k8gRTexaeoe6roJYAjEXeR2bPoMM5hQ",
  "key18": "5dEyiu132u7BL1TWA4jbzuR5mmFBAetTZMXaDL4459fGZsVTihXw8oDRkTE6Q8PgJ2P7yWET5Ly6pjToMYKp9CG",
  "key19": "5NAR4bjFkGrfyT25Xgoj1hahYUCc1MupnD2CtVtKEtc89x3mwsSq74LrEGiYnHQpUoqTsdkXs4rWbzQq1PGSWrqL",
  "key20": "2k5NxkQ3V1C3gRAgNGCubuMXxc8yN2xNDpjzimdi6C4Y7Qo91mSsbsncz3VYiBX99hCFEZgjWjDMAzKqzshU8uWa",
  "key21": "5BYmSFfdUUqu2xjv9BpHf3TvK6xbAup5Yyu5mx159SFwWfvTNktbKooEcHmYotQPS5xnBmSaQ1JP6dSzaKUceWSx",
  "key22": "2keXXXsKKunrit4y8Ntpy8wsRRRaa729j5KPTyxpaaEySuv5ZjJycKN2CAhcueKJ5f64JueXxoBYFEKHg5pdNJzf",
  "key23": "4Vvtx3XqWuDT7hJWaLkL9SKL86faJ9Ah2KJmXSetywx6vqMGhPGfmzBF3J1Kh5JEW5jCxLn2YYuDHRx8FvcmEK8H",
  "key24": "5JN9QSedW3Teh7FFnJxH4FDKMtt3iM1ZKrpark4h6Go5MyzxYAEYXyanFqwNNftQ9D7LEGcPxZxhTnqXouTgfRZr",
  "key25": "386gmjDER6phCNNqSDsbb5upTbjUKEiNaQRNCns7EUorYxR5apGPSanD43BMWXpwwUJmjSfuGbt1M5FfdRS1z6ur",
  "key26": "4GnggTp9Aqhb81cXWZU5jgUpeVSxdPeiQfPHEwjv9wyhxKGkzau7T9QpzphT59ci2BkXPdvqn4wtgZXU86TW8YcM",
  "key27": "LXn9tkFVjmTuxSsfvJy1cLJs8LxxwdWE1pxNv7A5rCAcazwNnchpf9AiNLXVQFqBp4xY8WQupo3Ra3KVTztpYMp",
  "key28": "3Bv6vtMP2RSER4BtQJd8smfwXh1kWiFGKXugAz9mCo1vouTuj32kJrgfLEQSd9RtnpejdvfmUnkwmL729AH4s7d",
  "key29": "4iVsQWwYP6D7mLWcnvgsAx1Rh4iybfQFSRpowvwLTDhk1MtL9MmWz5U6JMLwemq5b1amq2by1aPYZbBsVegNuEyK",
  "key30": "54EeC6VpUZUiHLTrckiG66AFpCN8ZBZfeoHrnaKNrg637EiAu1AUXgHKgjRMXyUKfkmSzKoc9ouZrD8Qc3FwhNmQ",
  "key31": "4h4CzQWfDCdgLo6CY11Qzpb7b8knz7VtxwVC8cqN2qS2LzshVSWMuVAUzzuc7sWMZWXhgYjEZ9r5SXkQcSQjoedi",
  "key32": "YwG3qRR9UBRDVBMNtifF5vvJ9oQwSGQzcgr9GcsgswkczhNpkk9u81tSN93nptm4gMAZorZ5hJeH4pUDYnYtY7A",
  "key33": "HYgppFqggDXLDnffSD1CEYnyBYihid9C7CLsy3Han35wRdYq18L22T9GyP9C2x1Fy2LJvophuMK8Gpf4AaSK6sp",
  "key34": "2iMDxcaxiUrW1xNrL8q6ULN2qaAFmxwMxpddwb4QZHL8o19sy1BhWjg13aAiz8zEy49ZCTTzKqXbPFtbJLUBb1AY",
  "key35": "3KbQw5K7h9Hs3Yf6cWWYWo4y8JarVSUbbzsvFyrXj7BGaEnwSWctEYkno53PdAmurThu9tYALxHsynK9RmsJFkHQ",
  "key36": "5D9uGCEsxHdhGSBKjLCQSQKMPkvBzE9Ga8HXJc5zrEmGsf4QbYBHeGG2jL8rKYvZE9mHDtj4xkdQeyFJ2Jn11iUT",
  "key37": "AHToH7BLBXEvZwfZZYLGdtiPiuDUAzNaDaczF7JjMCczUvBGpGZaSxictWpqgNNgqNcBjv6KxYTQ4avyr4PyVr7",
  "key38": "5kk3dfLMU92QgNJGNyaNyJvW9q1UL1bJEbsogSjN3tvwqqaRWcqFwY8NbKVKrAqo6DmmoLc5i7AvDWcsVmXVSqZH",
  "key39": "5WGwzp5JkSfN8bPPMnYq2zRbed3rAJa4Xo6yvpM5T2NE1tRyhtQiciwSqQyNCHe6r12qJGiQaDCzJo7kgArdLxPz",
  "key40": "wAGcnQoxDk53rqvHxf3mHJA5ptSan14DiQYmmwefHPRpBbLacWoKK7u4okJCK41B6udfVoeyV7DQPH77L3vw5zh"
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
