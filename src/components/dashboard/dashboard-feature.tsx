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
    "2ek7dwpKK5xWJyKYSnJmULbWL7PbRvZxX2GjqinNGgNy7WpaoHbExo3zqgcg5wGJP4PLfRsqEobsLymkvQhSNYJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qTLpS6hMfhSPMgM8s22Ef8iJMXXrLsXDhGCJ8M8jYn86oDR3Spi397bYLp6AwGReTpbW3cRLobpyhgnGrGDCJwW",
  "key1": "3SGUexU98ULX1miFfBAjxybmmLS3EC3HmjMubWBhqpHb3tszJEJGixvz7hZaL6Tqn4DgEYMRmcPLumpSHCZChvRh",
  "key2": "3nyA2XrRXBgKJmcP3DXqDfMLRgMtjqtYteQoBBCKauyruUSRMY16z7XdsQChVXFhe1WhcDNYvDfXad9hcuRHN68D",
  "key3": "5zRTtqncR18UkiQm9esMJyWnMph8Qd9BEp4z9XWN3HsrvfZpLB1Y5JqfNfeBAmeyRtwgjZiS1yqLbHeUG92nTh16",
  "key4": "4g62n2CXnkK6pt99EA5rRbGYpTXvbhGW1ibiqEn8th4ssDgFgx4faT7FNjQCeWqsnMo3aG2qfERoo5oQyRoTkZfh",
  "key5": "2FQswrxgdwNhjDeBG7Ag813SdKgZNpbYBLKUL9xoVdGVfBErPpTdGAfdrHuHnnfMYNXhVpuW5w9nb3Ui7EHg8qgi",
  "key6": "3gc3iN2Qkxj672PeAjmXKU76QSzcB3g8vkfNosRUG6hdwmDLPkmDtUNTYiVYGkqjGYSZL3HTJPbXDtyP5ZCjoJd7",
  "key7": "2K9Y6yaUm6SaGau3w3uPsYUXkvGKGVJTAQDrhK5emfHiAGKwuKEkVnqoZVvY2juvS8s9mCymwGdbMezQ4FoD1z8t",
  "key8": "5TwKjsUYcRUNdUoFfLfMPVS8NXKLfcf67B4nkHzyZU4DAKnX8imVbCE7z3QS7eLVXnET92Lxp4hJHZXKnGN26HfK",
  "key9": "2mFcnDW94Bx15WwBaFmSdR3YUsZqeMS8n3FkGvAepKEQhc2Kx8QbD6C1TWpstBhXy2TZe7x1bshGJaMNKthPYxNH",
  "key10": "5cQHksuHPzcrau7qnyAP64Tq3dupPrrBx8nhYVMgE2os88gxSgoZUZeK6ESmy9GfyR7VJSuXdfBbR4mGG7WKtPMA",
  "key11": "3rDL9f8ibytNnjLR5tMM5W9ysmLh1GuzMbqkk53jXxpmhiJa2GvnFMfDd95VzxF9YgesxiXSPNNgoPZNtzUWqrPQ",
  "key12": "2gKg6vsUDiUkSaS7mcwjcdDKjcdqoDJFn8nG4viairQUDXD9uVaCGkqRVBF87FmfvQhTDg5iMj1T5enF5Mqduw56",
  "key13": "4tH3rUL1etkYqzojqCdRC7d8LZt6yeDXCrtFSjkffiGQBFFpCvSvH7PZSzYH8HGsZBXdkvCiAagrc7QtgkZ4KU4H",
  "key14": "d7bMzz7z1khRHbnjVmtnEGWum5wrRQkVMFjvrAzauo8fkvjUFUAcFFgyA4mfp4JELvHLFKN8jsiDaPeBVjnYscm",
  "key15": "463CyGkM1RrDpL8Q6oxUqbSikcUfdeJ9YpKhuPKbDj1GsfLrmx3NB8f5mJAWyWqUkYZrgfXFXZbZmQsZ6K1R7U2S",
  "key16": "66b4J8kE171Wgi4W59jNM1uSxPLJMvjk6yx1cExtkB7LUu6Fnm4KTWHVEsP7pAAkBh35UjV1UgeMa1Z4KpfoimdT",
  "key17": "4FJChrfGu2TnmDMX4yYKRGGyEKRCUhPkqZbQwVUmiKkKd4y1c76XiMakYTk1Q63migZHMu51BNbgzJ1pgAX7VjhL",
  "key18": "csCdeqv1je2PLDvsix6oeALW6p5BbwUAQMJk3W8kzazkp4LVvHhnUw3W7UScFu4bNVLM3dk7SxAGBFum7wEPE5C",
  "key19": "3EXWn18nwRKnVR5ykRqdvxnzHcMxLavDcsBHmZEafxeVeE1nvBuxQKc8QEokApnmB31toChoPbqBQeFrZVqV3omj",
  "key20": "4yPbVdPXuHHqti3U8uegAw6U74XXbu15bBtCVbxH4MAefEPnsHsht5RZovH9YN4ouPNuFvVbKyRiVmVf9vf9JCwj",
  "key21": "go3yqLg6EUUS5jFfa2TNrt4CvdE3Qw5fsfy2GcFoE1ZByunJxnbyGmCX2fzDUfF6J8F4WoyHhTw1tHbCHmtrJge",
  "key22": "25HnN7WWoEPu89MsmLiSETWLJEssw7QTa1PC61nAk8oDFBc3KtExkB32RWNr3yLKc3e9i5psbWMvDXw7Hf5H62Pj",
  "key23": "3n7ZtdgEbaMugYDBnbcPxkgAQ1KiHT68egjTy5uCScZx8mA2kTrdxqwQwavvLKJKMuZi5k4cBxgRtbUaQyoPyo9J",
  "key24": "44ntoW6XBkR4qYy59f8FaedXKVJRTW5LAcqY5fHgC9LBfKW27vPXB7YdneyXbKPx3zAoRiYN2v5vi4j6SPiiHUW",
  "key25": "3WmntU3XMfXLhMiu4scaJfE5HDePU59BHfzTknmXzHeM9pNnF68nnespCFH6t1JGvLkBn1MgZkPewQbp4AhreWr6",
  "key26": "9k3wE6W8vDzNo9gQ9uVQaHzNhssxAE7T846KEExYtsyACEDf97aHvAVHbnhUqpYMJKq1i6HMmRfuvhgWUZBHKnX",
  "key27": "5PZkcayFuZrWy5ZqrESpCkx6TvM2Jn3RhCN8cF8kZCHNwrMgDGC7aiTq629Hbyc3QFkXm6aysRQpBqj6A6yDv9uD",
  "key28": "4zjX97RB3XHcdjEDd4cZYVeVkPh2hS8osnwohjbpng1omrXxjgcvHWYDFBJRzPp2mtxKgz5vXSjp9zFxiQF9uYpr",
  "key29": "5a2ZeVh5cmPNwa6QdHRaecajAY5zugn44Ca2GLrXgJ85D2sTtJRDUQtBsxW54FWENgsrC9sXCu3RR8EbiUx9entE",
  "key30": "5j9tVYTLdTdX5zQDD27K1LYo9vKLFK9FxWfkuCRyPpHjALLFH6K35HJM8WVLrRuLzQ1bd7Y3wa6p9QAcg83Lp5X8",
  "key31": "3uSnGkcNGcoc7zbfCPRBPSY98gtAkHLNtHYoSo8NXEGD6MWEbPGRGuyT2QPebDKB3LVVytkvsWNVZtzNipT8GyTh",
  "key32": "rR6h2HyXXpLUCfnayPSjhsEeF4LDGbtyfXQ9V3ZhkvMfGTLKQ8EGeEzxoNHkz9sJZ6GLkrtJsrkq2PiJv5AkWwz",
  "key33": "5rghxaCajKcTXc8E4h4cejHeDkJHP4VJeBfHeadg5dwFjio5Ldwj9ySMMChLpgmxyGsZ6ZJSAUVqchMch3iLzpcD",
  "key34": "2kbdCB79Lv681c11spM5ahpebr3aoQhV6MFN31UyhXVXJuLbNNNuofNphE1SwnPyQwgfRjzYVyQTcAFc4PxMujJ6",
  "key35": "3QTkckd2Bm2PrmETdhWzr8d57onZTGvQ5nDYyks6jvTwft6uLP5Zyv13aPJ9oquKpA9js94vSCinN4o3YVZi7y8Q",
  "key36": "3NiZPdXJtN1EwEQfaNyPENS6yrcTJJ4y2C6XTHZvxKuHz6unppM4SrUdWuX8dM7JZK8WyAwkV5fBzkFHiEpL3GX7",
  "key37": "2abXSmAZs4YJzNMNvikyNvrg1tr9EKewKHQe7x6TAmThSA6ueLJA2NBEFtMLkrKdCveTi6YiB9j1b3nPWyAZRJVY",
  "key38": "21krTrzPfeuvZaWvy4wRdKTNJetzamJfzFs8fV1mT31uijBxxiTN9ySoeAKqpCgtDuhpXAW3oTCtQ5bJxgqBTTVf",
  "key39": "5v3eXUpXgJKC2xrT7AYCQft2Pf7vZmd1kyAByp4WPawk61tkwYPe1Evx3pEqkhu55sNZJDPL5weNNbC6wP9gxkWV",
  "key40": "5fLXSfRWSN3773T3BAMntwqQAcNfydbmQhEmDyFhh84CMTpUadBYC6rb5dv4RtNa8RjfETboXtAaD1Xm5o5fr5n3",
  "key41": "4FbsGVapHSR25mymSnzEzktXdq8aBQLb1sczmFkLofJvzypXWocYnRSzZX7p3VRRpz7hPua3EVCCXviqyb9ZGJex",
  "key42": "5cHBzd113NDfoEG6vRGP8JbnEoLRXkvC1CiqoqeX7tFMaMDxZ5tnmq7HEKikcmPGCrEHauZiFaipVo9ggSzRCa5R",
  "key43": "631VLNCp6gQoQdc4SRxBYktZ3bcnzPrqTmh6wXhdHvH4vYyshzUtvegQHse5kvrCmj6JdH2TuDaSQsQc1YHY1p4z",
  "key44": "5CcimqSxVbfJYEH8cFbhd6LgTBHZA7JzaikHxtRRK7nRN2Rw67Xdku2G9vQFaSkyNFESgDqGWELAxm1QXZ4kfm3w",
  "key45": "LuChEsiVnrdXZxS1SCowfbeUFEhkvotBsfeb2wmQKWeboyhwq8MTPpkARxTZHwo5FSGjiSTXNef3vtyjvrEjdAD",
  "key46": "2Z9ZQmFRxH6X87EWoaNDeXZNBa7Qnmh9sGLN1UZXNpYye9jYouFx79G5EobXBsr1gPnFGVZNeS5w7snspNT6tRAk",
  "key47": "9QvCSP5HVPd4pdCg8pDgS93c6XE95RDkQ3rPuoeXnWJiG1TAgyKAHFCJgGw7Nidq9A7Bx7ZvrivQt1upzG98sPC"
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
