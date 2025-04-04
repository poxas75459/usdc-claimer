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
    "29nyLHU2RYjTKu5MVAqYJyJwxCH11dfmPRW69c5bgQhHx7iyHZcBouUuKM5oNvC1MCjy2NYd5wbxBEUtLhtuiRpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RMuAeRU8bSwDK6vyoA8XB1zJo6Soxzf1qyH9auRH72UCG6hr4AkWCDYFcKiZygbjWGTGAdPH8bbmCxuDKWMJw5V",
  "key1": "2jvTySpSzAj2gpZsT59rgBubucE3oQseXmRWZQcVAtkmeZn2fLDPmSEVJFT7mxTjpykTCeQg1Xe5yZ835QQG5c98",
  "key2": "5XsnzR6Y6tTY8tdynYaYN4z33qeEqjHurqTS8aNT4RoW9MCnruHEYeQBjAtYdcj4efyp1MY1xdcfWvnG3JU17SA6",
  "key3": "3STk71yMCiEPn7xihLeHf1AoBYpt4YZLT95cjo9kvW9Q7rYRc8HC4ZSfquoPyPT9s62Pos8cpREuuy8eXiuLsZw4",
  "key4": "62MDKz1HHFBo8gn8A4VUVQMGku9dx5gsw4ZdLaqxgcB8vMVsQQdg4zBJUeXenEjfj6spXLMtaRxaJMFbzJtgZXh4",
  "key5": "5jfJwMAyfxA6PNeaciPaM7PMvAf8bHpSNyAgVtHw7LYJoPmwXLQqohFHcUZsAVZpksiPzPcUCXjQDzLKKQHteM5a",
  "key6": "5tdFGsAq7xogah6MFUCgNwTHDFdxSCjcSqLfN3KX55MA2Kucqox35Ngz8mGsEabyKy4csjgnPHYkr7qz2zpgUuJx",
  "key7": "4oQ3m7DtakPd95sWz4gBSvm8dCbbYoeZQUt96iZJmk7mSDvnpRFn6i3seRbm1Uk4uhvx29QEyfKEWhcBbGiMDxB8",
  "key8": "4i7UBDKwxyzSd5heAYjr3pLPABf6HEaP4KpuUDczT4opWNtFJQ6tdLsV23kBXKCjATkbsrXqj25CRLpifXpnNTXw",
  "key9": "2jhNqMieD1ZzZr3fxYXq1CrhZm9wPwgRqm61R77tm6ueoNEkuMsZH7A4fut6sju7cgsEiE4ahCsG36Nw3QkmW6E9",
  "key10": "xCK8GKU9xBFMdTyrdmRZSjRbTDifLMEspQFGRFeuqyGTeXFFBATeD81am4apgnrULrUs9iAiTjtJiLLdB2saJ3p",
  "key11": "NqwMxB4V8LdiZSWBq9HdT4ERR9RxcbdJ6FbHzaET7SBrt5qmB4yuPeiPDrbVe417Jf4aPKZnh3FvjGw5waFPAsm",
  "key12": "cycdwfrbQ5nTCKnxJmzi2UisrGWR7FL8pVTu6qtbYUciaJR4auNhXoRHjvdVQXenZU7BKrKpCuNh6rZoQXvK1Ge",
  "key13": "3dS5uCmmvhur7vx7Sv7J6L1gTACji2FN4iLQ7qiR9GiCU1Z3HMqftvpLgsdpYMRgxHDTdWrKTHgkZjc3msGJ3nc8",
  "key14": "461hrZs3sf6Vo5Akq8gJ2iG5na7Vxm6anoKKhQk2jg93Hy9Ssq91aD1GVKMcKvvoSYaUKHLq8VKAV1qavGrnB9Az",
  "key15": "4EysLUJkfTmh4bcfNHcB59uRUFJ9NdWHUq6DfV4RG87HcKUaKTBCB8VXzY9mbfwLM9QZfBggdBnaG1bh2nfXnZsq",
  "key16": "am1iSGsuow3tth92G4mBqrVnwfiByQLh4RMgiMp7RWWnZbxSqQpDYzT4ApGEM3rnPiHuUt3XFBpDpNcKzNSzkax",
  "key17": "4oFTxJpfZks5kZhHS74zxEtBcHrUVpSDgTC8ciQUXZeeW8qNq21nS6Wvi3sA7ZqZpfV1Ago7Wf8DdJWxxzUbFG2E",
  "key18": "2Ux4pd1vBXjR8kR6QrBZ5MkJJ1sT2gBmAMk5KU63MYEL2ebCkYPHYhupRxpjZ5vKx1Mct5aGjeoQUgMqs3wBM8pX",
  "key19": "4KeWVTTxkL6fhumRhyynDQ7kzuYZNLhgumKGHGB3VMXWYnyXjaM6s5bpaThgNyG6EQhv2anAhBxQjqA278M2d7kQ",
  "key20": "4RjDddBYo54Ddqf93QKz5rh3Vkkejp97Q11s7vwex3mtAith2kc2Z3W18EPRx7r7ktuxvf5ovkQXyRitctHoszvN",
  "key21": "4GF8Fcj5KcKHLG8KBycoSvbFtEG4gNTYVr8FhnMaUoGS7oD9VAZXYQwFKxFEzLsh7UrGBpnajSG7JMiek7w1QHib",
  "key22": "4g5cEsYavSfdCJWL4edE8jjrcyseoafeFAN7s3YhebeCqCVDEipCCQPX6BZMp7GUseVTg4Ew9eX4xDn4hKSNQDuJ",
  "key23": "3jobjP9Q8Gv82vk31m3k3dwZMNq6jBdX1NgW5atXHvZuKMq2YUSnX7VpR3uoS9rmqyD6FJ3QKzsbxx2gRc8Zd5sc",
  "key24": "3tMWTLsbmnQgPE6MdcNyUQdtvsrJisT33MAtpShm7kqgdP457iW7KtUGwHuEaYDo3jxZ4jApbug9VbBHy4RnZs3d",
  "key25": "353aRoMnfAkRniDqZag4gnqyTkcuwA7SGnEwybN2BLFc7tnV13nxaF1wxvY6LesKzG6teEXXzJvJarWprx2ce1E8",
  "key26": "55PsmotM4HP8uwutmRPufRv5cqvcqCiYYPCKKCMExbTn1WfhxEymxLLZbAJ8Uy6J7f5FTS6vDBrJUVBNpUgZ7fkr",
  "key27": "usUNZzSHVijCc6wARWdYXYBnH8hjrFE8PuCLyk8s8aFjJ2Pss1kH2cqRBJG7tV69xZympF5atbb1bRjoV5VBJup",
  "key28": "3UwvVJcaGwuVvYteBnmVMmrngmeAfdXoEw8jZ43ZkJQ2bQpN7ervAoWLhvLZdztcQVGoPkpHBoW2wC4KUyX4JPev",
  "key29": "MnXCUM8wY9AWQEpepAWJNbTK4wc8GMmL3PYVFYvhwpKF8quEtL4M7s5wNo92X8Pzy5WbrFVCji3ojghHXrp2XzX",
  "key30": "4JEWDmYh6BV9CzVN2rxvZF2F1uU35j27uAWq82tETnipeBowgnrZU99C4tFksDV95oDJLMDK9T8DhRY83xbgtZXw",
  "key31": "b9hhsPmZGuscBcJd7QLrAqobCMzNnQHXfARYxbYx31BekCJjsSehbNjv6VXu13852z32C7CAwyTmVu5qi2rVDSu",
  "key32": "2K5oNSfsCQV4VomykRkqj6njLqD8NrtVziau7XtNjL3osHM8PhDauTC3CUMKBUJEJas1Sp87sChiNYZErEkqoPFd",
  "key33": "282diAQJnGBhbZNWNDEn4JiFGtZ6w2nfb5J5ixpS1VsooReEwez5o744uVJ3UcZGj2LSuFwQvUF6hHhrnsZUQJP5",
  "key34": "3Ht9AcVUbPDoHeiyUDZj9D4wF1fPseREXjQr8FXEqFWbNypCEMJK9rcdMj6pDwVTE9VWURaWnc3EMsBqB1hN8vFn",
  "key35": "dPMRJw12cwBsQoe2skcywb7kSDqRkTftV8yFYLETVGZ4UeckotA5N5jZdssk3Hp3N5JGZpNn8Xpq8kz5GospWmN",
  "key36": "2UEjrqwA5aNwYdNG8aDoSmwhbEvZcACfpjB2pqaGmamHRcA8CTVDJiVt11NQi9By6SjCJ8DrS3tTkX1KVSakkWT5",
  "key37": "5pAM97ktkRJyNeKfMH4BYKy78UXZY7KsVs5ZJa5NF7sx3Guz3kPpqw8M9rZPPE84s7mWMWKbf9rvDu4Qm9NphmXm",
  "key38": "23W8N92WdrMLXGu1wvSTJLU4zyyRD9hjtcQJtaoBRE2nnPZY9KfaEXP3RyJp8SKCRhjmajfkve5UUiTPgeKR8PwD",
  "key39": "3DY1UZJR8mpwSrbajh8ZaNWZ5qLmvgw2ZzapAHH9CNtC4uoRTHNDjtH68dYkNbh8KeQXab5f168nJu6PHbJrGbqg",
  "key40": "y2oL5yZXDKRDNSw5Ni2GR8j5f9uf1EjKqpqaXTYaKnGKkpVaf8bpVgUVvtQvjbv52hasK3MuqYLrkW7MLRzQ1SL",
  "key41": "44ajr7Br5kbVDftBzWt5mdQPUt7qN6dMGRwaGwwWkx2fg4UNKnmaHujWmRs1XD7yatcMy7stm69fXha2v9kSkHJk",
  "key42": "67849wPrmCkggi44bcgvZLNTWULkb2Rh6gxEkSJDKRBH29KpNQ2MTxcjCdwzGfzbabR1ZYZo41b3k8iaBUunjzvM",
  "key43": "2QojMsuiSKpLdQwL4nEUcf5MCbDxN9SpqmPjSJfDbiP2TUyMyoRK8VGrRwQTiPCNreknLSXjBB4uxzNEveSfkNBP",
  "key44": "LDaB8dCYmiPv2fD2Fa8xCkPrHzsau3kmDoVBQcEucH1FHJRDCZctQHzQU3TgP2PcRWKfDekXPq1azwd3wgfNdmk",
  "key45": "q6vRPmuwAQc1TCqM5RenKnpn3c727CkMLBTbzfKwzNgzZgTutGc9CtUdn8X87oVCrPuNWnTvSzr2G4cGHVFxjKp",
  "key46": "2yEthMmtRVAGJsq5m26KDfEdvH1dX29MNGKA8qv18aReG8kfkDFVg5QWGe6jDRt2XUU6i4FVb8sFyuEcCP1J9dmZ",
  "key47": "SgkbgxYPELLJWmeKe8cHHhMFFTaFpng6MYE4htbYKYVF5nD3NGfp9ZqeEgZ4ihE1GoLou3Hoem8CpJSxQ9iySCj"
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
