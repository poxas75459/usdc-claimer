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
    "3uZaN9SNGsHGo7vavgF8BCxYfxEHFhRpLYpDBETztYaKLbsnaFqHWZnXMx5CAXgdxooAfvSE9KeyC1k2fdNHMuAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XYYjEDH2dvATeUE9vvXh8LLPenYC9d6pzZVDZizQmB8jiGD6s5sD7oAp9e4gtGqwPmJM9JDuFqXGqho3sUiUao",
  "key1": "EQQots2hUXTHswsAyBx3pxzTG5EUoB8dr3enfPobJgC6coXhij2ApviSpTPt96yAXWPvypmYqPGfsR3AL84afYx",
  "key2": "2MDtr7CxrMzvda1cewZhFSyd8Bwh9ALe3AMAysYjqM7Eo1S29P9XEJCC8J1dmxLJF5Ym9x2Vdyh9GKPfRkJCGxj3",
  "key3": "4t8d7Rwqs7UrB59HR2RdXjKDns3CML8cpmLgBxcWvHeBQdghnHNXuxpULpuvN69g34t6HErQhLi72EHen5ZWTrXQ",
  "key4": "25yvqN5fyj2MPoZBsGUkWB8MM8tuqkUkZ38iS8T8mph6qfEoS5qupAR54mWLyYNcMX4RstccU6VTAANWmcpUQwYH",
  "key5": "2h5Bbqe22Xs2MuuMer4QrC6rdkHqvTwFAe39nHNd7n6HyLCLzr1XertKzUpy7aiJ2pN8TuCx8oocRzPbo3pjesML",
  "key6": "22MFbW9Tbc7BQo3WGvNxXKzm3rsdWhuLqHdJHGt8wrkfUwdSw3BAX6FjXPgHLY6zxLDqF3HddkYELDEtekXNnHAn",
  "key7": "5bCUEPn99f7pTg83VKgC4n3oqX61iy1deDfmbHjh8iJeGNzW2vScajYcStt8s1tXTgUX2AXcKdJ3V4RhXceV2TuG",
  "key8": "61UWYnv3chDpweSukCrN9mqK3Kapwe84WMZhfpWmCN4SuFX5UFkYovBJWwsaYUKGPBjBthLQnui42C8sNrKffddU",
  "key9": "4HtzJvRGarcYKCEawuiLU9VX6nRQRsVfBJH4ZdthsBhiWoga8KnjqzKzorJk3SZMrX9Vfhhb4vsub6f8Tyx5LQH6",
  "key10": "46LR2FqQg9dPBnqVRWxC4H8q4F4bfptcBjreZoKCPi4A8fFCpk3eLnZSWHZuB8pneVtVpxH6UNXpENYGzoLMaksu",
  "key11": "5P9XTYKt25rjN9bZzR9nUoqVAkMQ2QvBpA5voZXSk6d2nZoNH2Dhj6VgUEffKZprrrdgCYYCnjGyiqXybsdNizYN",
  "key12": "Vo3SgY99fHy16GdRPqmCTMz9EcmcdPqUQfPk4sSeiNHipxdn6wJ11ZJzs8DNkDwDkAGywoHqFh8md3nYpksbtpG",
  "key13": "fzusuEBCGjhhqaQhmGSRaE49UCQHW9VCAz679SpCyxpLK8L4zdDZoLbATGxGZ16h1fy8gns6ANhnXCkB9fCePDo",
  "key14": "2UWbvW4obFvWUbv2aCudWug6LvTDumqdw22Mbx5xjhHMtqCj658ML2hMGBt9ZYzBeyRw1jEXeWLdf45HaGiK8CcA",
  "key15": "49W9iSeMGMRvN8oiCbMhW8F1zoGhm16JZ8hGw7TBnrTPpccpo1HHzFD6sVi1fYUPAgctq3oBcoj5BfNicdSb2QJT",
  "key16": "5Zx8f8DDf9AETj55yAX8Xj1tckPpQYGdP6fwgJRu4iuDaKBC1EwuT38FXPGpwUyyYtuhqwMwUkiDXsu6qPJEUKWY",
  "key17": "9eDEC7JsZANtUJ2cyi2qvSpnTiKcNF6TncMETaKMhBz9tvyT946WtHvcTFfCjqdLFyNjPi9imgaQb6Evpffd2YQ",
  "key18": "47vJcpigyh3TmDHu6A8VhhEYr8ng1edLCSGMrELitPHq4oKNpFAd4XvtDv6PBBEhbQaiR2R4Tyf38c6mmsY3JLG8",
  "key19": "3a9SXEYbZDYy4PHMqzLhF8XsJgDKdAtjS5uAjAYcobtvUkiT4GwKy7vuZDe1LckdP2yRZnZAmyP1XtZBRKyLtUG9",
  "key20": "5ijrAvDWiDACvVckaTw2H51c9S5gMUMr1peQgVowTnTcmh9sj5p3w4GPDzBdmgU8dZaHxSPEU4PUj9sSxZUokHvs",
  "key21": "4twXWfnPs6EnGZJVY7xae7V3X6cbudYFAb2tz1cbbfkbZwebwqDuJRnvGc2LskJkSnCBw76ajzQnKt4UjX4K4qMM",
  "key22": "2h1cx6JdmWGC9ncBor9dekg9NVjZ6zxPCytBGtCMshH1E1HsAnAixHAo7HhXX6ZMmPaG5H2RgE55kjFyjUQpARgB",
  "key23": "4NZvdfpKx3qXHNTgLdkBhG2hjby1zyNs2DEbLhKwTxoSSr6ovWYTjkgy4Wso5zQJrr7VsJ6QuEzF2e1bfNyaojnU",
  "key24": "5nz9H2rpsdmcyqtBHYjHoTQ4CYskNyrw2tUaAQzFSJnacEZowVrhVhg1ahg71DgDjgoehFPpN7cdDSHRLUXdVKoQ",
  "key25": "4htRUJJT4bvSYzwtuzjBnJWZPWYYbK45zMvJdjGLX35hTg7eJ9hqb62n1NtodZpRnDcHSkBoetjPsYUMAU6SqGdX",
  "key26": "ATTf36yv6aVJrENBqQsZtbCfsanyYNHz8fnotgoNGAJ5f5n8Y6RBZzeic9XWaS5D7kXiFF11TEz7oXyzrXwAqKh",
  "key27": "32JDJDSosqjLHLqvSaXmM4WcqQw8xvTw5TkMR6D8LiNr6nJUq5HzcFxGPXYJKozZMFku7W6N1YTSfwf1r5drtw4u",
  "key28": "3wYGND9xF46Fj1nJBfSKyeHrpLfBkRkH1jZHQrnf1JEq44DadryQjkWgo6UTNT2X8Ef8LTXSx2twVfcrmGtzk8j4",
  "key29": "4vLbMyDD2txFMz5FmwzrVwZ13fS93Eh3e8ELyW1R3WbbiUWhDLPc4KJ9JtunahUoDc6AM3UTviR7QcMGjZUfbA2p",
  "key30": "2adF95yu61Kt4e7SYvXXin3kR1AV6ewfzZEfKseo3BjpLWwBvxQpDrXqD3Htzo474WXKWWY1Qm2AogMteyFmjNGC",
  "key31": "4v7VUGHezB6uuBVLjvsVrbwpiG36EPUs5Sb9JeexedbVM2wYzGkqJo4W8y8BQT5comS142iHxEpujQCM7GqqG9eY",
  "key32": "5UinQ2A9kUc4jzT5DeeMUwZYMEkK12JcrHhvuEntPRfAaYyKQzy6vxLgjQrksm1u3iicM9NBy3oF97aEhAonnBGw",
  "key33": "2KjR9VdyobJCq46SQvsqm6Yq46Dh3QLKUYu4cGMgikVBJ3Q9bcz7sHwAqDKXo9njmvHn5iqwNk83DbBcgTtNgUCe",
  "key34": "32rZXK93rnXgWFBH1kQ6shfRfZc5VnLA6gU4FQTAGSd6ZepSbNbbJqZwqcpbGzmhmJHNQ93vMnqwoduf4yEHPzfC",
  "key35": "2U81p8q3ZNhZNYMJjJNbzuqKeyyhDzSwQjhqxiQ1c24jLKMWfxhUo8Pb6BZL58TF4zub6SoRuaUAeQKcb2Ks3Yaf",
  "key36": "5eXi9XBhBNZQNk64UbjzSyQACiMrttxnxNguqiwt3AL4jd5ET7NvREDnn7yzvJpa5BsRWAp5tYdhuHaHxSWGbege",
  "key37": "3AJ2GiFWaefJHRhLyKJ6B2SxhDSfY1954Yw13spPG2RacPxoqmSiBjaZgy2w9f9KQJSaCdStRHRbnbZapEM8K2Pk",
  "key38": "37E9prB2JR4dnYqSD5pPJse4E2uyd8vsqtW8jZhtmdAfr9NkQdSdRZTinFyaXYA2rrGCgVs9AYPvREEcuZqfq3Hs"
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
