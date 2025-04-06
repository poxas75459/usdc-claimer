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
    "nMQCJsCHWaY9sA1ikuSpa7M2fQNJvCMURpbKYhnS3dCy7g8y2vEqHndj1YhuhJfUhZ8okTZTaSTDDCufdMmawwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtTgHZ1M5tjKeCzMV1Ha62ssoJJN3A1vtvdrVgjRzwJAeCStv8mmZt9X9h3AMfG6kJckaSdJRwDUmvYsRPKPsZc",
  "key1": "3cXohdPhZpMFLitQcKg13VhVJa8cYnzSwSq1xpJsNq4FD1yPvyzPJmrMz9SBs63WWtNUgcNBx6nV9P6m8TxLiiRr",
  "key2": "QhTHQpTLmZJcV1GBS3HtSZ6zgijbGD6uGT29XnJjJJPjvE9PLtX1vdWctQQNusJKkpM71Ryc9cgxhExPKXYX2XD",
  "key3": "4yiW5TapLvtCA3zeLAZyJaPGnN7BAsXtZaavTswTATh7vdPcvkgcdjnGWfMGXf4XFn6J7dfhUNgPjqnUSqpBzoHE",
  "key4": "3KjPoPHBMhuxRP8dUnvv1p9zbsdRmpWm5f2mgnB2ATXPXhNByiCb4L47sovmoXrMGLiUeCBmRwkGyo66UKvB2Kmh",
  "key5": "Y8QR7HFwRXXBU8YQ3vH7QdFVQ5pJ1G9dUKGZ2mkMn2Xe6WTNKw3hgR9uBp2nj5TBUQbd2MtggVrtDeTrYV4KJtK",
  "key6": "4zgubPC8DyubahaTrWcXZ4ZEWkzSPfVYfMovapiwUUmXxbfHonqS6BbYUjWrDNEgReupTbax3vQXg6rFbQU3puBF",
  "key7": "4nGQwpcDq4MXNJ8gAZwiDu98aG2WYVXr95fi7q4DnVmW5TwCPcpz8AKAc9BRE1giffFvqYd8NUnUnW3qMRYMws5n",
  "key8": "5JEsy7dSMqsHWakh1rpRRa5hLrK4TRHnrQgGzMmGxgRg2Ldf4V3YqjkH8FfRs6dS1VU5p3nz6fdCKdwKuV2okdKu",
  "key9": "2Skg9wNAP1iHwKKNvmx4u1APXvgcyX4axeqvjrzqSEn4EMTojxcksii3vt286XiydBKAheVXVpYpZGa2TJhA9hKD",
  "key10": "47cQZtsViZo3rwREbE2GRgWQ5B9dKwbu4kWPjmiyAKF1TmTWYdznVVyd8z1nG6f5yzzUXRM6HvptgAzy2vRub4v6",
  "key11": "4FnqrgGjWwSmbh5vfN6qKvnXgk5JmCZQ7MbHhPuQBW6Rk35EB1ypBL39U8DTMN3noHa93fCvQ8DgVwvKVABp7cTA",
  "key12": "5WZRsR15GKEqZzThpjTTV9YdJJbcBGrtYkWvfC9fzYK3kSHAeU6pNSJ2qdhcfawNSLLud4pkHRAbW8BXYTjdoKYb",
  "key13": "3cdQkh9YfmPw8g8Yx1CRknESMNTs1V3NmLmQdGmqpLUKtN147TxGGQ9G8vyv7oiqM2icorG4fTrT5acgoyoce4kL",
  "key14": "4SRT1e5mMT1tLZuTCcPCRAUzuB8CpPoURFgfuPvuTDMTTsuvaT5J9DAHoVQxAzJ7pUuAXavqkYGchnttFLW81FRK",
  "key15": "38Z3RFmopj1tK5zdQ8PLNRwU8HNguE8UB1vJZABHEtEA6ESmFsX1Y32SUtYYYZdrinHjaRWohaBzQc3b7WtpZmV7",
  "key16": "4J2cy8kfkngkChgyJzVm2treTfKTJeJ7yJnEcs18ppzWAEmtnVvjWXoSk5VuS8S4BwvHsteNUsq9AuiMaWyBodug",
  "key17": "38Rb57LZLXiFdNjgezLjFkcRRvtixsSKfzYSj4ULrGCXgWRG3doXH1eYUyHF73mowA9LUjXvRKnvaFSLUR2iEMs2",
  "key18": "4zzkbce9yKoL5QWpoRtmXn2yxr5FcwSvfXVaJiu44wY93deiyHEysGd1wssfediBVJc3rHNmnRg68Q8V2xr9SWuY",
  "key19": "4zsviWE8Ed61f5CyD8TJy8TSGmaHKWLEumMFGqcq2aHErcdpGvuUkusP2VUi9VjpmwTeTLUQtnUAnRwN899oSR6w",
  "key20": "HRsfHdYGufTSbEHc6JDR6B7gemGWcYeq1Xy81RPE8BcfsuEUV3scdgD5fkCJJsozwLvxDwQEeLuGTVQFZr4cK6w",
  "key21": "62ubyrB4onKEuBzLMqJbccDi1puWhRS9EC3AqRGPYqJHMaEe8JoZ4LUCQmsvU9SXKJkdaehSJH4EeSrnPUn7GQQm",
  "key22": "5M8vFQEL8RG8xoWXi1x6gqJdHVP9ASZq4abYy6E3tZgq8QsekifQ7b2txqSjokoaKeRbcyCxewMbc9LyZi9xX3vX",
  "key23": "4UWyDJzFsYh6wDTdxpbtVY51ghitxfLiRSTX2CrMvmsrF8RdontQ7br8iWXzv7T4FczG7guNS85QcfQ5EEATYGWg",
  "key24": "5oU1QXVgrjv4nVYYddKQZc2PJNKnVDwxzt7sguxyKos5DGMVkmSgD1xoGwSXmJd8F5U7hkGEYwFLw7v3G4oje6ab",
  "key25": "3RSpgsAEUFzuLEHnqY9kvDWCAkQek15o2Z5SsWiJyjY6MdmbdDU3YBK7imh8xBHSa21L4otqLXstyD5gXjUGiwXV",
  "key26": "3rJteCAHFmdTVowsXTRrNB3svwrRH29WrvLkfqrkQw4LpfxChsX3yGE42fgeytR4cdgRt2PZ9MkRbyEKX6fYSSH9",
  "key27": "45u8NtNzFQ3dv2BcuUCiUBqi1YHhmpfq9F2D8vGWrd4Fn9GL4zznu1HE1Jx2PHM8ypWrhwKubjZj4V2HyP22ZrMG",
  "key28": "3FRpnSixk6CvMf67E89kyKPfKmx5yZYFK9VKXeisWcjf8cLZX2kJg951FXWwXhjdqTYTqQJRWz3z2dgTck1jhsg6",
  "key29": "51awbT1SxyAZkk78F3yd1qLgx7XWjhvhDDAmixBoQ1Bvv6ygXCmhR85vaXEqW8QdpVt5Zb2BLiKg3L15iQCbMXYi",
  "key30": "2jY6yjaY6eyCbAmBNCNosAtTqbZpPrySt6FW6dXYboUUgPj1mu2iXx9aaxJz9bECsdUiGGRkZPhJq5CWkdrp2g2N",
  "key31": "Q7osUtarAdGMfcEWdoUv9h7BMnrv6pnzfu1ADYXWbAodtzdtuZ7xN5h3cgXBzXyn4RZjDVf3YDG6u23TMpTm9YN",
  "key32": "4DqigAiqvz1GBkaf5sCwKwYJjpKqQx3nmQMaXiUXgvMHnCnSJT81VsyhydJrw9LAAovSCkNt5ymuE7vhoqMLaosg",
  "key33": "3ip3csYvRvnut3MXbwYqdmeZnnmTDNA4x7x2xo8KUXaDT5KPHt5gqYjuy9gSdUaGAic6FTN2dZKxRSRPY9hAtnki",
  "key34": "63F2amBz1cPGYnQ6tF1JUT8F9FxKwNPWgcnCefYBdMptxVe2XJKTwFzPcuspmShWmy9BjGJFu5ZiBXMdjqh83LhK",
  "key35": "stJHVx1c5u199HeUMVL61quJzfV1s28yyMiRSbbjB6R7vmVeUzornAY1brMbRCUcaVzVfoSGuCceXGF6EBBmNHc",
  "key36": "4UvVLMdtNxmv6QXGc1nqQPbToArDNZkc593zQGiDLAWafjHKjpCmt5qtfZpASXiLyobsWoouRg9U1mauupFQbrVm",
  "key37": "K6M1oM2mk8MRDvGj43pqC3EdWMhUH9aZiKaA7DEst6GUrySvpmr5iHz1UtXaTxpPxVoNxa38aM5rw5JzJJbScoG",
  "key38": "A61szgokGFNWr2fdhabuDDMtaru7xhLXnMiBvh8pBcmweeKXzegxYy14KoGywmWmt41EqQurmXaD8g8x3R3T6Kr",
  "key39": "rqBNrMZP8vJsp4rooucW3xXomBUGjhMQQmLK3TUUvrPrCEYtmYxxkm8cKRrnvLVwnC2vfZJVKsS3CfuwfE96HGR",
  "key40": "JH3G4qk4Q9fWRRHj7mR6SyEG4t4zotyVAUVcoBGiE5bEdYSbH72AvmVZC6RM8tzipvXjinYGLzYzmmn494a1LvE",
  "key41": "2MZnv7qvU21dDKakK6B5tH2nLGcUr7SgE22C4ZL5HCvYsKYe2r1arELSaLWFJ8zZ5Dmw3KCouo5UdASXmjU7vXqS",
  "key42": "5injSB3Cpn9axx7u4s42TZdDNC48J27jpAUgNheYkvvcMFTkvo2Yp2uosrQqCWLFgAWWztvb3aviuffcJsVnkY9H",
  "key43": "3Gxcaeh7nk91uJUS4mKb9HnsUbz1cssuPjWg4b3uywdm1B5rnDkWduFNbd6Xcoc3eBfKDxB8wS9M3abeD6WtdJVh",
  "key44": "56iMeuGLgt62XNgrXHEPHEsfXMtV5QRcoNZHDywHZtLgHgS32xKCVZscwuZqFwSpEVPS1KL3fsk5Kxi7kUNbRcST",
  "key45": "WyGNLKSgoLj1E4xRPgngFioCHxFotFNbboE6Ncz7NJoi1sZGF5j6H4wxZrLaUEcVPhSXQgvhkDVu9UXS762aWV7",
  "key46": "3PVHp57c4GVoiZ1qVEFBqZpYXeDdwYsoPs7QT6RRAqvwyPb3RvJuipRfT1a9jC1eZtQdLnV3eFpFF5PhUi8pZyvz"
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
