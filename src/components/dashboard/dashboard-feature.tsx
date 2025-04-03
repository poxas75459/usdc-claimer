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
    "4mKygQRGciCKdKKxDC5uS5vHfrcgM62Uxuv7kgt3iwHyRuRh6p1W6WRDkgpgzeq6p9kkqRaUtZWzhgtXt1WgCXUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJtKeNCTe2Q31aRP2cksJyfMfXh2fpQDdaFPswBtv2FPw4Mw8hQN2rW9gHfKJaEVqKJDzJpkeASxERbFDWt9xwL",
  "key1": "3NrsNiZc7yM1LZxWn22SiEFBFbxb4HJJViB45G5PQbMHGFQkzkttoLwi8vVD7p1PHHWNoWLYz8JDJmebkkVCy6RP",
  "key2": "mFC1hBnD8r1FVVi9oaUmZPJS1TMHyd3BFeHvmtSKfyoxVr8jxcsR6VpMhYpoMKF8hkb6NcfyckdqsgCLeNV5ESa",
  "key3": "3mXV3z15RvQ1G2nojtaDYNp4KvfGSBGCS3ho4qstyppRqhZ3JNdqkAHuzuqbAMVmqSaqmdG9b7HRmj7TfrSx9RRk",
  "key4": "5QADBwxJ97gMTKM8EwrpaB9oxDgTpxnfeLY3SNazujEbsNB6TWYtMtk5RbV3gmf44ak1YJEyPx8UJanzrkz7VCWM",
  "key5": "3NDESgkNNec8EqmjCtLJzApw25sKo2Y1aVRcKzHAM17LAj7mDk4ZGUjAV7ubAyyewPHo6Y5kBZyqbfgk695ovWrm",
  "key6": "3u6iKQRXtxYHpvKTRsn6EYiviuLeWeMNiPy5oKFkvQGwutqUjWw5z2ktS8uy1gvDMJocfyxUho1nYQ2bzNVSE527",
  "key7": "3dBpQgVrjmf6wfxg73gDxP485KnVGnD7xWA8ZxkDArSvo9vaPptmk4CbGzFPaxmJNGK9844fHxxmDCsVdAVviv8D",
  "key8": "2bMRyUvLx9KJkUH4eEfGLNXRn9FmYEjkJbRLzduDMg8QrxwNwFtgnDJhN9jtguJVxbftHzK3gDAT2HoirWGzczZi",
  "key9": "Kb2JJFkty8SqPpP6RkegAWhoRsj2eTLeAwVwNS7EU5SQeBhUsEXYiXDGeRNEGZxyMNcAhjSXqzLFZYd3rE34rBr",
  "key10": "3sYq29k9finVrjSwK9y3wH4f7WnFWutjfYyoU7FyLTaSW2xdzBt8X4hPG4GRC6aNQoz1LxSc1oQmSqUYbAT6g6hD",
  "key11": "5c4VgG2GU7iPNSyfFdAsPod675zmbVM8VDGJdMj3KwM8JY84p6CcMXQGv4DLmrXmQ8DLi7aj6GJ8QSsxzj28uBxc",
  "key12": "29Dv7VkdZjdD8LwRuXtyvhaUq9x7XEZ3QEABYybDPytMWgTxHCvquHshZdbFCfbxMXHw6LkZjSBaJyxD9NkxSHyS",
  "key13": "3MQXG8W1hdR6zF7xYhVBhABS1qyeX8DHG31diAPiJXaCAwXCQUa9H7XkcUsQGsgzQp5itLvCQGFzKwFvwc1zKZ56",
  "key14": "5Hw3GKSqzitkdy7iabdQdGgp4hQAEcxhRf7FWCCTzFGpdqz7RBHEo2EwZUWMJcZzBVHy9F4bNEBvwysECr7VPjXW",
  "key15": "g9QooJDHq8msTgBjKgTcAoYLf4LJG7Ltqj8K7DRdDtnuWrKDU3VJr7pSTUTeC4VRPC5wijreoZBr6i5iZ36kB8Y",
  "key16": "3oze7ciQPaSXSqrfu2zZwVQXZ7HmTzkdFLmEZsvCLzqWQMAnmtaQBh4joNk8x8jvGaDtrFgujEobEKniZVfatQYk",
  "key17": "9SLkmjyE6GDXzBGbDX75kUjXbQ8uPK9WcQER2QdJG2xGExh4K4zHRZ6ke7SHSgkE3tq2QNXtfKhP9uUidT5DWdz",
  "key18": "5ZMCYBuqaENWi1TdgaE4UaexWFRzwtz9rmuEBrTfhs5kHUNuWHSsUSXGEZ7jmWLANk8LkwDr2o46nPB1i4KbJJGu",
  "key19": "vyQGv81P619KSQVBzYfYWoZ7Qrw8CsVQ4pt1baXQX3doYxbA7FUxJH4DgsNhq4HGe4hjyPKNLeHKbt67MUbNHNk",
  "key20": "4JNjsbWZj7GnQGtZwiwjzyD6KCezeXngi2rk8nAY4BnLpba2EsaD6LpVuALdBc4MtoToth8kkR8CqSxmQxDY9ryQ",
  "key21": "5Qz2ZwJWsMcptq8eSPqNLC3KePmosQ58oeLZY6KxUEvvi89MSedtmF8u68YzGB9u4bF3Tz7zKWaZpjeMf7KQ1J66",
  "key22": "eoaAARXwjVYbKdAgEBxDFzhXLrhcQxjjrRrbTmafsumWbfHJBAa4bhQKHRiiDM2FkMFJFuzMAUWTcb3cuwrh1Ze",
  "key23": "4Bb786RJhHA1DNJFP6oebzcBn1Gr4SdjBWWDVQ7bB6eDS2VHSY31LUGD4fsfseETTbi9SQPKzzKBNDCaZScGfpCd",
  "key24": "3Yf9JbbPbbj7Mwe8j7Svg1U24M4RmeLp1kJd714ZEjZxDtNjchZRHTLyahfNJqg6yDzPvp9vyCJoFcV9aFmEyXiF",
  "key25": "2nykCgGxCaBQj9F28kXx47F5RwU71ysSPKvbUMWMej7GhtqN7CFLZfR12txovG8NmWH5sZggBkJDFGkR8enECXuK",
  "key26": "5Uwzqs84mCvrYUztdpMgF73S3g4X1uSv6SUAvNTUZPPcUH2tj55PzsaCfzRsumJVfcTA9K4MLMCGra1X9HszZQGR",
  "key27": "5pihnHe8tDufKjbQyLyCY4t6RRHd3Zkb8jKfwkipkxHS2Rt74DdUq8EmWKcDqdZ8YpNAYNYXczVkY8c8C5BjosqC",
  "key28": "ffN16rLfDbURMuqhY9BG9P1Hm9qdGCDGDLGj8Egfs4Wx2hfZBTXS8QUA36GKAQYuNW8ATk9fDSGgErsiUTHNuUR",
  "key29": "3STSe7s9gJp4i7GmTy4dpc5zmEXV1R1MQo9zf4z31AHHGXWBKj963TofwdiBNajteT1cfRYHgVNahQLBQ5BWeBbx",
  "key30": "2jkbpdfEpnnoCkuyxRsjfpjJA5PG12S3vnj6NPWPSqshkiRDvJGGqk4sasDLvx7JYHuamT17E9NMHKz2x9ozfaZ3",
  "key31": "4ZmhxEF1DR8KCqRBMjhy9Yog6wSDsNxzrp9HqSD25oWDULeagzRSzMbDiqhqReAiF6fr1LqMcd3rcsHHFHjixcYL",
  "key32": "2x9XMirVTkqxirGsm6wtJAjTrehNTn6oV1k5FhvGzMkJzc5e19wNekYt3d8rxw31x3DG3yMtnLrttuaSXwRGHMzY",
  "key33": "4YuJxEdUxL2fVkXW2Qm7yfeJ5RjfD3zDC2sYCuE7zYjmEQTsdWjKbnnRjSyvw5MNw3xRXpsNMYzmTqEypnanHFK7",
  "key34": "66EmrhTvJwXxEWsiwthSnmts5ATWnxeKgn7c9Fg5TwoZzHDMQg4X57juuUkUy8hqnNFvsgXPAwFJQcporetUyqxU",
  "key35": "MgVHmTNzCAwiNWsEp5zprGu67YcEF4MGZe25BAVbMV1Es3XkW3nyzimGW6iUD7wsfMbbvzXDAJYkYMASyAyQwSf",
  "key36": "4ey6iWo7oWYybGqvFUbUZFW2wxe5YXJru3uavE1BgXmwKNUSZSN2sjBNFWPcPfXMzyJH1hvEvyT6KVkAp5XMr2NY",
  "key37": "35qjSwUnkXUWbZMmvsA81VzeWgwGt5URPYhsFbAmvhdsQVFsDEC1Z8mmL8C8BCryGTKLFWZLt9GaQszJF32w7m1b",
  "key38": "2XpxH9xgnKV6kKwsxUMCU88HC6iHhdmEfB7FSufgSAx3mZbuUyd9vmN5hrUmN9epqagy7J6fGPmbkb6WNCL7S7K8",
  "key39": "53TMnGeHvYiGRJPz31WBdA5VWruENASDkR54Ys4EWeJzjNYt1UFCNzCmuPDhrfj6tFfz3uXNxJiP8KvLR5AJHuXB",
  "key40": "yEnBHNNsgULUVrFYJibyA7D7V7ngCytXuKvFXEUmiBGiUBLL7hGHXLLxUsNFDn9HjMu7c2cuiWhpq9vrb8rG31c",
  "key41": "5gGoZhxxX8yEjKxEfQDYfPbweTQmgbhKYfPRA4gHNH5QJu5AUgwdArePmSPS34j2Vn3kJmRYYbaDgo19xLDyfTq8",
  "key42": "5Z1KfVtKLH7rmqXy4m2ULzkE2LkssqX1aNbjcH6dEGNDBx9Vd2QCwNBUZzj3ecv1fEQgBwXwuJHuDtC6wJpnHgnj",
  "key43": "ZVQ7eEWYBsuC7yc3xRx32tcGAK7K4NVwytmKac4tacPncdx1FW8gZLQRHDjT3CMU1KNV7Fmu9TAYnqkWNP1iBx5",
  "key44": "3pUCVFgGfvAySwzDaMQ4N9TUfDShCyoTrMbDTs5m88dCetT6KKaaU4P4PZwdCgQMz6h8SU6TfbhJFanDJ52KiW3q",
  "key45": "4vJaChsBySHp1GgXk7cELVqazWNMJNEvPttuw758mu4ujBNDf6NPHkZMJenTxPCR6YuXv19CSF2KAHiU5TaPrpQJ",
  "key46": "5ZmEftp1LfhJCCpyeSnDVwB6zPTGgzPcBC7jmqyMLtdsc8pDaGxHPhcR78VvLaJm3sKgkMGTBJ3NHmmkdQQVXt1z",
  "key47": "5vysUXXFvWnsPEeyZVqjxzdHf3oDGyMojH46ybMsopzF9NnM91xEewU2wNE98LfLGpBjA8gLJ5LjyMFM1wgDGXQd"
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
