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
    "5Tfzdzm1gEB2HbjZNi4RadbuSGL4JThnzkVbNRAK1CgJ99jEuTGhn8Udbd6AUPKdPYAW6t4v5rDeC3srWvw4cQrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W15zmEXksN6gasDHcfkFE37taEmZJfBsVKR9o4QFLhczUXuAySCmwzUNgSYCM4zbk4kyELWm3zaLXzh5MCkwHYJ",
  "key1": "5grdvQFJPEGEXA9ct5rS1PguW42H6zRQAmjFsdyXZKpewAFmNvjdRek9skMwxN3QZKGpTCyVgHNwMnSjrvdtdNpq",
  "key2": "5n5BUyavfSND92MnrTwmwQF6HGvdY2gQwdNrhxv26pehEpGmszWNXoSmoJFXM1XAW7HBkQGkMPQLkkjNg3YZ11Uy",
  "key3": "7CejbSDVwyKp7M1x33As4mert8gRTVz2Ce5q3rKbNMCFDair5NAu78nftpCpWiReANSapLcScjafnn3VKYk6MVy",
  "key4": "4KatBufDUW3SLmF8pgz2McQEm5CLN8rX8iuG4vuNDWJNA5sssoC1MMyYYdkJbxxkeh22DkhbaXNPcmmwNqpnxAPm",
  "key5": "zEcTC4GFazfAjYynT93pmUr5TJ5nPfHwdqL6NWoofjbGBBRZbWTViFcKSnwDMM2XkN7g2yKAGqjcRGf3Nb32jyw",
  "key6": "2ccP8Sujdny8ApAZEKNSo59s5SkqDT7Z8UzQiPLMsnB6gwmaJukjbRrCBUgWyv1Kk37DhLwvdSniuWN6uUeqWwRu",
  "key7": "Dogr8kd6jiL7xuUtuwfg3E1UjaeYQDMR8FrfX7zsWLEFUvffFfE9WBjj1prJuMwp3MRqp92WVxTFzBJtn6wjvkH",
  "key8": "h27TTdLnD8wFS3M481ddiPviSzSqLp4kyvkAyKY4K35qdZw9d2sJiJRRUF6i6MyzbKTqT4NL6ffqyiYDkhJgCCp",
  "key9": "5JiCCPstYkh5J5np4qJjkTe8CXWBQ2cggximtKS7UoeQy8cQB7am6NuKF98Z654rTjzB7ohpN7t2wbZfisdD6vHK",
  "key10": "1235WmAibe3i8R5RWgCEDT7PE7AXB7WYq9KEj3y4B6zKsD8qYmSZQa46FKxfQLGPwcby4QSXU4SgBhKfguyphya9",
  "key11": "22nxtAhyyMiHPQyGAEda6xBR7cYawhWG32bhNHmyH2WW1pZhZHcdkPWczJq7274ifiXVxKEVjPndPCmSCK1YY2go",
  "key12": "3N3gLapYwTJbV1Q1spJSESk1TFybQL68SAxnAv2bEDirMbKRJ1wMNRqh69cqUwvAXqeqEhFp4ZzjLHgPq6RQ2FSy",
  "key13": "2HiqfmuZSx4erRjscnbtyMP5UHH2Y87WUJ9yUz1EXx4oQDfZeBtVwdkZNE1eP2B21vRmPiCz7roGPcxhGns1DaP5",
  "key14": "4zLHKseUJaA4K8GFEXadVvBRvNYM1p5mrPkswqhXC9QAA1pzWuP74xY7bND7uD2ASTSB2VpZ6znVhfK1P17gTiZw",
  "key15": "3nWtKMMQtgcegKBCDY8XmNReTUxrARUCzNv63aGYWHh95WASJ3ZabQdUMepC7AMiqFSgWJLcty6Fib8BVBx7grbM",
  "key16": "3ZRAnWwjLtTS3mHSZSJtWWwD8K3dzrYxumDinTokWa5LGAhqYAa3hFh3Y3NPRBTanwXJSdBGJjCnfUdM1k3noYQs",
  "key17": "aPRJBC62iBRbT2A2qvhLrLVZ6pZGLJzz4ugdbZBwCFJbTQuLtf8xwiA7qRGfSJBbqVLtXCPQeSwC3zXm8G3aPXA",
  "key18": "vxGyz6Er5f1HwY6d9YkWKyZBMXBabsdY1gQVHhmS2pFMFhTKUjpk8q7tjcWC7g6fzXV2AUoZP39HDWKrFHPZZgN",
  "key19": "5CzCxZyhRk5ng3TMYEfctrF6PQBQBTaLgnsjdYykGn7MNuC2nd7fJXgCPLQkU3jPc8ChVZ8uHtYH2rUirM5DN5Ue",
  "key20": "5PzRJG5ZnsfjyzsF8NtW1dqS5bJjSVcy4PKvgJGaXkzWeXH4i7qX1A97tt81zRtuLQn2J7kKXoFjZsWyHFcQGxB6",
  "key21": "48oQCQRNm2LSE7JnazRo3qQneBL9MCzy3BWoVrD9BDC1JZgt7NWGonCUfbuJcL7ojzo3V5MkYJ4FSjvJL3XJSDpm",
  "key22": "5A39ppwvShUM4MozdXdcUZ1dYEAAfJojdxA9tb96xWUM9iMeUz3A6HZy54CAzpjts3ZTyyTkP9fYpiCzGvK3tnSZ",
  "key23": "2b11RcNDZe4H8qqMn6nAxMfyuSWxV1NB5afxiZzMM7ALWvGY2aXPGZQn2dQK4WpBqCG9RYZBbxWGrCqFc2oBTTv7",
  "key24": "2iE1J8DYTy3smAonkkYR7uzzAwHTdzxnnTsDxX54AZCFsoRT5Qg6xpR1pULbwnQsWjXSVh2PWRufZcUHsWdg6wi7",
  "key25": "4PzB7LohGN5y7kSd4bHbTdv3ZqvgmqF45NVyjb29cSiAXiDwcmUkQUnhNxsfyK3CKRQhAnsz2BTjyAwM3yYwW3wg",
  "key26": "51Evp4TBRDT4S6siyDRYb8Sb2wWbDRSvnT8LjxnqtbZ1ua4eNja56truJ4CBGAp99BWEARBXKpStxc674paChuwQ",
  "key27": "2mEvHEPMGKzLynsNSPp54ztVKWRLVxMkmEz5zMtdgB5N6ai7sBSS2UC5txFdTNi6BVJfPR1fjh7Hcmtf9SmDyQsc",
  "key28": "5F2HaaAqDPjV6JdLAo2FCYXqVjouu2csshmGnLjXte2X3ouV8mFiGUYqcKTND8YUiiv45f8fz87ygaxMBKtmvZz2",
  "key29": "4MTacV8bLgzuc3pSTmR8kb7pi98iXtKD4LVgbUnpMsN3gJqtxwoaubh78iRozX99rzsXRVERZcc114kr7pFw8piZ",
  "key30": "2i3d56DokCjoeGbvBaDvBKNexerfbSKcTomnQ7yL4AzPrJ8MmhZcFhFbMEFfAAdVVQ119Ujm6Kp1BFQhh2zyDpZD",
  "key31": "3yUpTDSazNFX682ptcbmmEkssiePB1hRmf6awcVoE5XzknQyurWBA1q6vxLTCLBPM7iS9eUJWoe3MjJbB39JoRbL",
  "key32": "2p28KS2WoUero7vHCSo9PrnFUkQGxGvCqvDYCFmbu1oi94qnciVroVytTk13AWkqpWBik9qSu5KqruTLGq4MJebv",
  "key33": "23PC7HHMPi1qRAsyCAZLsdDTDgbNvC4hkUfDwTNHfszaUjnNzySjcQGZ9GNXB7wsRmahX31b4uujs18L2f4cHWqS",
  "key34": "2EoNS6uyMA2pyaHc4autrFMJtUQQzAWRDrEFjMXoeE6vsWDYuuyWeznjMfgQh4ZezebMVuUb9np1n2up6HgdDRG9",
  "key35": "5YzNa1TAknv4rey6EEna9bNdQ5kBZiWjejaVi3dxPjuPPaGkpRHFVKxFJ9KdCEh7dhqPaDwSc5RBhh1hxj2sKLiA",
  "key36": "4k6sDdSCM4EjZXHL4n7ALEPzr3aCKEUomt5Ff7tMBkBUZtcktB4nL4xUjCsNLqL7EocPDdAT7e1UQT8qAuxAVDRx",
  "key37": "5m7Hk53BWhRxVABmzufMy2sB2f5roYfPh4fmRPU5fWKfH5reFyJjjrs96878pHj3qYqgUJRMipLbXFTnAMuigbbe"
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
