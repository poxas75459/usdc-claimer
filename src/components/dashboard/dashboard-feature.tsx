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
    "4g3pmCNHaYyhGaLF3wuzWC9As3jXbriWse3L4nCPUeUUqRj59f3XVAWZndM32X7twr27ryjAPrUzFkS6ivZSXMNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8zK4QzMERNUt4ah2HkAvB2MM4jY4hvtrEwyTjBiymCzSsodUMUimZJ6E2Xsn4D3GnV5G3J9H8k1TsP9g21qtUJ",
  "key1": "4Sn28TVWehcfAQrN3AL9myx9yLH4cynD5Hy4boqKq53GQZ4uVTNNsQJttnEqx5PDdbPQmb6zDHCau4Ax2LSMktKZ",
  "key2": "2dPQ1fTi2AWhGvjR1qsvqSBM4ey5KVmYotfM883KVdq6tpJzUeKAAwvcK1xPQRqAzAfYu2a6wPgvPtxHXkrPR2M9",
  "key3": "7BtxXXXRneVdiJxFjZekWAWsE38Wycjd1emW38sD135BXKBSJ5qNuLQr3YvejCjTTnJRtgikLfJF2YjVxw2Sj5X",
  "key4": "2W8ToFM99eT4dK3p1n1gsy6ufCtH8NK5APvk89DMfsHzxjCjy2cgiVdoB5i1zXac5q6SqiQ5yQ6BLbHJZvRBNzbH",
  "key5": "5ScnH8c8D4BayVh8zQjdxYnSE6PM6fMG16jjSq7JXxENwWcCY69ZyC7fnySJAMW28iq1j7dtyP8zjvZthj5PgU7J",
  "key6": "5NWQvCRS2f43cBwkDu3YHZ9y9vKZqaRvVxghfSQSryuFzk4jSxRVD4HvtwpXGGKXWKM44x36DDusyuQacABNZjwt",
  "key7": "2Uiws8opgvUnRRXwGw5QJBnDXjzy3KNCg1tYRQaBnb369iQX7Y6KxCxoS9DfkFGS5PBdtgyQcSxZur69izpW4fYR",
  "key8": "fkCoe7QCH7XvJPnYgfNkm1q2LhTn1g1ruKj5trJhKjUKu52bajU4hjGLRjXavbx2Gpj8j9D2iUPtVn92HXGapqf",
  "key9": "4P4xRbfMpmUdyHZ9RjfdVto96xVFiV5A5jCtzzhsuNujSaiuvccmgJv58oshwT6eg9wFY2vsWqjNoNaJAdFT2xBt",
  "key10": "4v297EC6f7yFVcYg9h8xCTD6i1Xx36a3uKVmbBMnsnULFMrarUuQDdSVQv1K9hWPXVWQqmRsZR3bDN5JFoj2aMMg",
  "key11": "61ozjoXXoXKUcGCWMUyW25N8P37bjB7ixc8T8Hk7vcgx5UfETghwct8PBhpHx1ZyNXnaKm8BLCJsPNTsksFgnwRy",
  "key12": "5UX7EPeojxfzLRfHWZGDEB5ZBbYzE4hY6uQ3hsUiYM4jUH2Eo4ryS3awLZFHkHaR6G7bTvdWScC8QQjJ9ra72CWy",
  "key13": "5jTNK8JmdXT1coyWnSVaRm7cbnKiSpwHQtw1wd7qibgXaKmCE3HBtt8DREn1hN25hrrTgjBVuV8bPqjVYzoqtS2u",
  "key14": "3qvUrNwKia8bLPHrBNTDJZThgLmH2juokkWRWtn1tfHfGUx7J6fF1ysCyzjgPNkTVSCpk9nLVyFXqz6DjTyjV4Ux",
  "key15": "3yqq7LTd6c8oPwisotDr7JseNibgypy49ik8KLUAxeWxPSW56JE15py9AwipbuYR1qt9UbdUquRSmcfBBc8KbpgD",
  "key16": "2iavYDWZYCpVUdTjpF13shmd67Umr6FZBAbtXsUz7ZyY9hxqb3JAaD4ioqZDfAokdvG5ZDmvsub69fXify7ZeWke",
  "key17": "5z33i23CUHX7GAHReSVD3HE7XYVCFZNQziuEtpunhziP1Tba8hVYSsMn4jbb7PQBzpEHacAaoxVybEfhmLbnK3Zh",
  "key18": "RHJZHPfn894ENnGNpGc91wgFyXzA2iE2VmgTVhNhWWxXt1u469SWYPzzBxZtDr4CNPWiP8fBDNaaNuPSJyRsHZE",
  "key19": "3LLB4UNNEuYVVrMrDcwgPqXcVomWamxRALA2jhbSUTRUfQN7nYLcHgY9ZZj5sbES6aJdMtTKM6BvRNhpvBTQP8Ej",
  "key20": "48RBcGbM1xojSokYF6eS594WFzfW9m93NSJyQQsBXaGjdhyq4QKxGEGsrqavyTZBGAWfkv6kvPBzXkug8MYhFL9",
  "key21": "4xeMd1daE1idF4Xk3dNhKQszqxTM4N3xBrbUDEiPDzRgryH64oon9gAzvby6pZ6ZgXLFEnPvScNaUJ7WN7bJvCSe",
  "key22": "4JijMGqr7iapsm5uwMmB618ftSpLHaYsEb2Ffgav8mFCrSFuUnsUT95k1JMP8pxEZAXKszZh9LnExf3fffA6NS4b",
  "key23": "tudUjmwDkvrX63qwTYFeP2E7zFDHpJgLQsiFk4sF4bHLBJjkC53YRu8VriYfbAV4dm7b8LVjAdbYRxHFPpmvGL4",
  "key24": "4xduVztcmCEU8CpV2icjmKie53HNdUXv1wV686KcXK1NFYJD8UW5zLm2S5hhgM8k5jmNXvQvm1jqJC5kLKbvHPtF",
  "key25": "5LiLM9xRjtdSvhc8uCkQSB93FNTfCDfeYCnY7ZACuDHAxw6PPeWSZgm2KBJMamYjnFJdvbUChP1EXgRm2fAdWae3",
  "key26": "4F8FUNDBeGWW1wqWtyo9KWXzdRdtfH6MZ2W5gUZ2jsJCDAcR3KBcpny8e55JjnCY7tj82VFJc2XNWwmuiwoKw9AK",
  "key27": "4zWxGP36YckMS1mu7mW7Q5cW4bHL32Dzf4538cMLS17CqMJeqfPU576AAwsjGvHcpR1WeNz7yMxT1rE69Tn27AeJ",
  "key28": "5AagAeYNjtLUL9mt3gGwTizd7Bo55pa9fHFZXnk2bKtrrz7Q7Vd2UA8PrDrzB3NQqRWYPDFhS5KpQgmAe56AxrSs",
  "key29": "5tzYvWnqPaVVrfDZapv8j8wfpVCkA54FALwph9ghsFJLmzwTR8NB45UV8EhMUrMKyjGGi6ccPkhVVcXPqeqbjzBF",
  "key30": "5fXito1eMBXjbp5QUhasB7hws7ZFVLybpokPhQXNYK4oxzEKs4523UxfdLioP1YDnhzHvY777aNV4BhscVnMDueW",
  "key31": "3EsDN46bVbn6pN4dL4R85DKyA3s5Lqroyt7bfv1VQtxU2Y7Rmz3YnGfhVTG4BhyMpn1poTRSAt1Jufr9QjUK1D5r",
  "key32": "46w1dFLz6YUng6nkTp7RdyWCvDQNEPunyhHbMSUnPPNG4aVSk5cHTmZtwAA6LLDknQU6wvjE1ubzQzX3rY1Rgk1x",
  "key33": "5e9a4aRmEYMNfRiMHNB4q5NMU2P6fSDbCbPeFvPwE9zYTKACBSCmS2Fkg7F5hhwc5K1tvKHp4zrvFzwx75jhZXZU",
  "key34": "42EHDTfTPaZ9WxZ7XkKr8Lb2pM8GuSowg3zkrcn1hM5bCqgiAEpuWRP3bEk9BfYj727NBktXXQovYpHEVXjUUPrM",
  "key35": "5pUT5UCe6G2yosHfWmSxiHEMQcbBXq4SsuZ9QUVcMcp8W5KbdZX8F65eWgABttENBWemHQNxbBNW59afQPX5f4Po",
  "key36": "3Qkm2ZpARzJ8JbGkn2ZFY2exYMzR8EELnPGMhxBV4HuktYNdmmraM35E3yPWALpmNfMUR8nwzzD4Hx2Zz5wwP8F4",
  "key37": "2CWW5r8y8iuXrU6p6YzgqZ8JTBHanMBBR9ngSMPu69ezGzeeF7WRC5c33eh7rgBw8N7eC8ByPHTDnNnE8mCv9rEV",
  "key38": "2fxZYfhV6f53yoQqwwvuwY4CiQP86CC58zV3CNFbEzrgfLdfbbE9r14T8ZNxvLJUKZ2ANWkrDGyPmqd7PAryvtBU"
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
