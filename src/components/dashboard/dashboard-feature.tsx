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
    "Nb5QrvVzgRbArx9FADTa4cTg5ihwZpjxoFhtqyCHXmsFvDNoLhfufB2jf9NPya2jynUYv2oQoxVn6Fj6kgQnuxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mfeVYeSLzrRx6Vfj3ZtQBRQGtfxeErjNbbqgboKPfdEayNjjL8HhCCNXfu4xFmzW2JXG3v4fRPAGg7rNCCQUHya",
  "key1": "55bStJzbffZ7XhJLkFPL6MPdX6xhzEAj9txhUYHpd6SrKe6hKz6gxV5jCSKE1d5DK9xFgMr97SvRwNvWAuteytbS",
  "key2": "5rL8vAsJU4vZLFjW85Uv7xPyfmAoLcrL8fbeeWTgVMXLBTkV7YuHLvn67pugUSvw75mw8XmeykFZisLTskS8MBQA",
  "key3": "2anmimFxgjCYdFbew8AY6LGFiqRGZfnZTTMP9SgzdKM5HZqpCbGKtdNDCnnkpbrMquZKUCSF1LRzg25FeVVJuBDJ",
  "key4": "RR3g8qc4LLp5agJPAsFpmvUEAe7jnizwZxoudg4d4h81ZUzVGmoxv3NgakKRAdsXFKSBya6vQRS3xUQwv4xYQ7Q",
  "key5": "2VDoMs7CqD1zstvJqgW1ZD4G99PQggPLVNchCCkYKziGmNEFLn2QWrffGjP4LXq2bUs9n7jwwC2Qo9SC3K75kvGs",
  "key6": "4Zf7PuhDqidecszuRSqFYhnruvVTJ5AFqEgFCHhzLhwWkGagvbn6ycDhYNJ4pWgMvsSwbSQpTN5SqC3xgjre7MJh",
  "key7": "3e3KwtZYheRtZQgMNdtbhDnLBFmn8xvQaLommeQkwG3RhMpNp2Y3ZT7AuigvV5tSe2Bzrac9va3V1fACyuZP32VE",
  "key8": "35bkZx8L7yeL7doPi5nfUd9aR8YiDpsqpS3jMZgzx1XSQMzTFV4ckv2WfKHsohKD3PTBN5qx4RvK8MJF65pL9FsG",
  "key9": "yAF1C3Ro2GZcQcWVYReSnQpRUrKavLuJrzceTrTAMn4jYDmTKWpnCws1xnuPNAqygbCT4iskTAGEYLx1TGo17FT",
  "key10": "5kh2siKMWx7MrXGUTSESoSpu3cnepiWqGV8ZaL1PQqoHDhGBW31LQSte4ZkhUFmpKWokFXQMmtxaP28oKYEyiHBs",
  "key11": "4po3wwn2qedFHi9Uk6cMhpUsaZxGgRouMT5YsvoFzvLLCbfKH3mYTQJJzmbzGsqh9f8VUr93VgiYaBCYy6r37TTs",
  "key12": "4npBN8oC54pBwpJycGs7uCtVvuref7TGVPSRYG9EQ1E5NJUjJiUzpUraXxYPJpTrWkEiZCY9kAxpRgGrXyyEVco2",
  "key13": "55nybJp4eSxfCkV4hAVjPfsLiSdW6prYAWiv2PKf9pCfLFrxPNCXE5Q8ozfY9CUf2fnd9TZZ2FFaE65bHFfGL8dW",
  "key14": "4uJ2MvKm4BELhr1udmpF3nA3wUrGH9G4zS5QC1kZhA4EAY7F3YzhNYeDW1mvvFtnDWz6tAgx3TqoDsw2ZcobwAjs",
  "key15": "4FYZB6UrmPWpJmhMTx6VXGjqcu7C8jVDXpEJh1Wxbfs9MUqMt7LnVRqKiiiMdAvaagWSVY3vLKPMiwJEhzqfXe2W",
  "key16": "4tUfHGPeqgpbiVG6FsTm1LowDrvMS3L7wrCy3dSrWeRMkqrBrGFMShF761bqYiyKZGYSBZ5T3J7QoBHp2T6GDYcX",
  "key17": "2rdJFR31xG2n1zycVRacK9dvsPPxq9ARuhxVRJW8kA5KidpmpHBUxsbSQVf5548pft3hzfARnVz3CzSDSBp61Ny9",
  "key18": "34Woxkkc97uMdtrww6fH5nNRCtGVWd1StXTuoQm4kLoJkhDtih52cN9tLDPJYgJtm42Gqk7rB6m1RqMsvqkpq4aN",
  "key19": "5TTG3wqxoENYg7HZu8GLhCdXbdwP3UyHex77ph3FCeNkRn6QzKBiYEJnbhU4Lo2zENyYuBeHouH42iBXQWnLMrEb",
  "key20": "45rv5UVdVYuu4LywA7xqMSbGDD1nZc7mThQemzBc1uRa9xFuLBS941dJRuZ7oQxYGDfLmyyHjhQAs9HjUvUJefST",
  "key21": "4Y6dzgg4Sg8ANZrqod1yvFYg1Rd32TPBQRF28isUT2ZF8mWc1aJuBrQrawHsrX1k4YT7XFGzaQ4Xar4tMR1jNQgv",
  "key22": "2TWwWLydBAimETH3p8WsB6GwLqzuXcdUZQRV3VRVWJFaQYbJgWy1f4YxacEM2wWuL27kd9tQ6eji1AfdYQLWabPe",
  "key23": "63FPpfCpfjeYA6yJKnvcMc3zRkMnvVqmbPZCJjLiWCRrvpSW4QdgzRTEwrQAMxBjMzE2z1nXXbmtZ92pmSYwST2",
  "key24": "ztydhNrn8MwziXtXPu4fVCzxohRreP1UhxFbzsTnD9uWLL7xUZgNWJRaBJ3HTnsGv6oKtvzC298mVYJ7dwineum",
  "key25": "2RB4kymZFQq3WUUpnu3GwdC6zserjtmrzK9DsTpodrrr6ZuoKWmtDosqUDU9Aj5TFm4v5TNGy5vyfUh7c6PPG9nv",
  "key26": "3uVGzYiM68ibQZfMHYAisFykj9dEzZtidQMEnhHuLFUQqVDfEF15EZNFEGmTRweBWbcenKkZ6dtmzwj8Yp42C9iQ",
  "key27": "3QMjyPcQ3QTdNdsvXCKEkTXCMWb8Cj8XDjK2YLCwGNM8rRsNKR2NoPwgsGNfBXjwfixuy4z499TTf7tiHxDwAh16",
  "key28": "2dw3i1y2E6q22WhKM1LNDp5xxspNcKSC9qem4haVAjiBVL7cQv9jQ2G5wVfXMvtTvXUAZbuYmg2TGcEXbGjXAnnM",
  "key29": "35n2YKzJm7wMce9cXFMs9kA7cXnta1ahDneDMYmxP9gF4gwG31tVqGQLMS1Kci6z36wfFuLztbqUUaL1FJHgEkuQ",
  "key30": "2MevYaKpSLXjD7aXLjbAujuAi7TsFg3Ez7UcvYZLxe9kY5xCcp9dacWYCNT8VQKqC8QFJBCf2epc16ofFqtrxgKe",
  "key31": "5s1LeHYr4y9ecrMGKgQqbsU2r4n28vPhL4dCpaMNgwfZG3EDCJud4UVcZXXS376pPkvWcCTbj6YkLKhVQZyQpLqu",
  "key32": "38TvZFUbpee9do6XjXPaJf8XcPEC1d2y19vyr7Zb16g1wKbyVwiDv9QskTN8Cf9bvYNd5a5MWwdADkC8fmoD23W6",
  "key33": "3x9578fv7SEBjcMDDU8SPNm8yJxfbmhrcKsPwmKcbvV43gEGgxeX2sYUH5HQJkAsJy7YFbMRkR9ahgUk4t9wM9qQ",
  "key34": "4Bf4xpZ7HELwj2SoHbkTrmFQsSD1g4Gv1XRPJhfwKjtowQu6p2i8QzpZvLC2Py94zooJMiY6Et5X9ZqK6ir8zt1c",
  "key35": "nDtG8ZL1rJiunbAwVtncVUdRiaTVf8sGw1bnZJioNZZEdgKT4kVsj4KkvCpx7oeM2KhsGXozh7GbMZzt6A9mvar",
  "key36": "3jiwHVw9kTPWZHm7cG9afwtob1ryJwenUR3bCN5rqQN1LqxTGaEo72z1r5XddT9QMgCBXKEjrrojtbd3kNVYjjAu",
  "key37": "3yd85e3HyrUTwTVcfbmfRD8uQjHRggXX8B48SYA94shaL3ubELxSgNjpD17ivetpVfttRk6GtX5kQSny1yhRCr6",
  "key38": "2RmK7H9wfhYjfyX8NW8PirWXo1dU71m4sQnbbWhXFQiZYvEqupF7NASV1eVBt7g7ctk6kbkcW9DJqkFM3fqJE2Ba",
  "key39": "3yBgyesnzUtFbLtAkKhzF4Fmw5UhHoWYJrt3GVaAUkj6nYoxvoSJBAXbUnsejDZjj8MYp6JxKyjHbxaYgQbmXoVp",
  "key40": "2rNJgST91eXejKLEfG7hhTsHFenBSvsTSYMPsWLM5vABXmew12aEox8FBVpubDyrHbM6ngdsDTuj6KV1s8PTDynh",
  "key41": "4nnDekPFyFBM61EWMtFBvLdudc79eKFi5QxzMoDN93dZbRdqHyQLhNqquQzsedWjwpkvzfX4a3NEK7Bh67inMHDo",
  "key42": "5vPhqLEJrJHLRNoGbcXjRgtwDvdTwM9nLJByj6wYNw8DyVsxv2kSJSNNEdQjug3Q1hYi4kdbqeZpAE32EVZ7JRhj",
  "key43": "2G4PwEHCn5auxfTeTawQzRf3JZBxj4HfQ9jJjb66fAFsgWSpHSpa4cqyb9LF1kG5DNDQ6HHGaGk2ytAvPa4tvzNr",
  "key44": "G3V91n6PxRGBhP7DCasvKaAunij6vifsMANfJbw7rAk7A6At4dHAd4hg1wCqGkGHAMVj7wS13CVxYb1rdAT38Aq",
  "key45": "2r2M9c1H8L8Yx6wQZ6eeQQ2q9WA5TnVTDuybhibGLFz4C5L5niwsPYcPVBFrmLL1gZDtzsKVJVPJfykCfnwsHz1d",
  "key46": "5dULJ8z6oHDn1Eb3YNvP5BaQNkNnv9aV6QZLf6fRZp574tuFRTcm4ry4ggr5Rc9AwAK5h881SwNkpBtF8uLiaD3t",
  "key47": "44dudRrTCqrDbyKnvqZG5bAmo2jgHTCtJ2iMWhgZGcFKb2pvz8qs9bQ6skheZSUB4p9KaGmKRCSfAVeqKqdnD7FB",
  "key48": "2pU1hqTtHpo1SgH4CbtWDnihwiyzkNrGrRswP1s9pVqN7GjtxFevYCarAJMLcH8CL26KgLbuz6SK5DDYx8c6RmT4"
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
