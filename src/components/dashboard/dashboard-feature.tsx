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
    "2Yu4ebKkQMEYGRfQt7YceNuxsGPWTnApQ6n2zWbEger9ZAe8Me7ZdUGd12coJ6V7RPAWJBCVgdN6PunB7wJazSgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4jqEjqtDxAfTAv1x1XJ3NSRS5eLxgdkcUJobmEQzJ3jWeLSpC15Qsdpv6KMAj8zoaDdWc6QdoQ9jBe7VqPisnE",
  "key1": "5W3z8ovaSRRmjChjrXz3dF6mPd7TKHzQMycScpQdohzAQZ6skMdJ81rPXeXJwCsXXeVVySmhvuFPXCjpMZjxcg4d",
  "key2": "X6xrQ7XKd6iRPEXp3iXHqZkxVDwCqizPjSLwAnChBNvPL3iChRZbsYiMhHi6SWVUSFtuiVSb7xFKG5zhbnKw1MV",
  "key3": "61pNh6zg6c94PrYiaNKj2sgSrkvDUFujRntDqztZa7Jh2d1dS4y16AQUsVZkwJG4xDSACk7ua1v6Rb9B8CwhPiun",
  "key4": "1hCFHg31zovciVFVCrvCnufjH29GNyb5X28vigAQxR1f8aXRoq6XynbCWLFDB53hpyKhmgfTBd2vCy5Lj9BHU4L",
  "key5": "61aDQs3MEFWyWci6Z2wm6tnwMNzZCJfmy4PrBABXJYAAwgieXDYDwewVoG9LbgjitX4CN2UYgpAvKkmKunnAaPUy",
  "key6": "2vbHVC1EkgLK5TpAugJF3t24rt7czzpG2NVWHyTNsXBCNCdh8y3kwkeEVho71KQj1V86n8T72TaLJsL4VBFpPjuJ",
  "key7": "5FU5yfD8mEmdPLQJvL55H47SAPWuh3ZiasNjy5N5kXU9rrLXvtGG4obdtsq3KkN16nJdTLJC35ATJjJT5DTBmWj2",
  "key8": "4RBkCwpkv5bET59km4TMreW62QY2DwLhFgZGf2XdwnjkhDwfNQZR22gGkRuvvqc1jXqnQEaJ37m45hdRLEqPVonK",
  "key9": "xeVEztZ19SWnBcL5nsg3ET4VKkvkD2YyGk4av3BA4dwpyJUZ2Lcfho1VxuYU3vgyvfi9W8f2b8y22UrpZV3UPNN",
  "key10": "5pdbVujLLKCweN9HMAMbKNDKtKy3QGmSu1NScMr1cDgVuXeS1M13sqMBMCh6UBAVYbJW7pcmMNTuSsyBs8Vrxxo4",
  "key11": "5dV5iphRA992jjLsrXeLao6KvtTtHjnxh3Fh5r6XekhpRd8wCYAV5zGf3Tt4Wg2uYuSjvYQuFL5Aysp1H8CAXbzJ",
  "key12": "3LML7xSD2AToVz2f8bzYKuo6EmtwvcFzeFUjQeHAEoqqnxJrr9umYtJvsZJ6T5pfM4gGthUBRr8kc6NkKoKLn1hg",
  "key13": "9W4dEVdPuzgrrRz2wb9MaqmQ9VYvd4EjXp7h4M2eQjZXS3LKGiNpZEpki3DkBWBErrFD5mM6KNx7zdfKNQCxwJU",
  "key14": "43QBYAnEKQWsMMhZtjAKWLgnbzBin5RqrggVqKm1zagyAwCuy3C7AncVqx8keXXsi24WsNCj3BL7exoUUuf53zKY",
  "key15": "4ef3JfHQ7hnffnGLZ8JqGJzBnnGwhXQCBUE1YFn28TocTjzRZ38F7YC1Dq2xtieiCNoybrGcyUZgUCbPxgKkQvzh",
  "key16": "LuVhqwJNE6FU8XkK4PfebxYNseFVejc6nSxmLnj1ij9yf2TGj5WYnAduhJXg8mNDdhA3FVoJN6rpviyZ29XhTLh",
  "key17": "9YZN4DiFAsb83UVq2ZAwcXR5Mz9xdRzp8ZveYptS3kXiqrY7cM3MuGJosxbENJMnPVvf2xbNkSXWHWx3dHGPmqf",
  "key18": "3MuZXWXH1MQyRwa5c257T6pXx3Gngpqq7hPJTiJhCebACsQckxqSMQo2n4dbDzBxYjGDnJNXUTzLejJ94ACD9jng",
  "key19": "541hgTc9SdQHptocqV5VQs8dv1XdesDKsAAC4U1pxpEmyN9xKhtY1u3vk2xATcQNdjTtQ6Z9LAM3t2qFNTeBsppS",
  "key20": "2wxqc8eqdeQkzNiezC3j75WXsD8KHxQ7LaiVJj6f5bwonjxBdB6UEmAqrwWZ7EhdRkkAL1D5fLambjaKk9VbtXz4",
  "key21": "3bPKLQjFDhgyHUN2SHdHBSxgQ3E4ZUpD54hv1e6ZpyezQuMuGxN31KvxVQs5KwdzwRBMM59Y9KHHcBPpdJ9dmSxU",
  "key22": "2SGVQxQWei6Pt5rZFUKVfAUH6W4HQtbemoa416uai99T7uyybb16rMnFT7S8r9GqPafHGC7ik1d3pHgiadgp6P5T",
  "key23": "24V74gCEcPMFT7xw6KmTs4URk2oJykzDRw7xHshishfmrFj8xjB7Fv1pZLXmPbx6gTetijqQvDMCxWC4FPhTqjcy",
  "key24": "5dGKJduG2sAQLWYAvbByJDE9r9WHyHLoU7FALWgmwTZmZb3k38o266dv5gmAiJYS6RQisdoUhYwr4rEy5ADh7EZt",
  "key25": "4bSNa3viCHDArmx5URpd8dmyycicw2Bg3v3GeYUyp66PH3PMqfBKQhUPNGhsjiS2fYaZRLt85EAnBxRts7qAMM5M",
  "key26": "4CJmNUyxwsjJqXRV4t8oMAcDT38pqL2xYAMPCQTQmbXQW3nt3xEpQWqhyQT5jhbX4wsDFCteJKmA9GPm1zw1Z5sb",
  "key27": "23ZaVqRUx5VviRwwPT4dBs1M1QkTR9fyFxdgE8nhN4B6bSqu5y64UFkyDwmmKLEmna7ptwihM7w3yXKfTeFzK7py",
  "key28": "3UBtxDrunmdAn1YdbQh6AyAVMrKDhvLzhBDrLVwKyneYNui3sWyRE2bL2B5jQYr4wjtFjUdeejPfGiGELqeHeJSF",
  "key29": "4DcJh7UAgpMNc6NDwseG3pioUJB9pTKQk1igxVGaKF9KP8qNNEr5H65QtAU6kGBEfZzdpt3GoxwR12jcyUQtdG5t",
  "key30": "35FiH6Ba15BguGRkQxFWc5N2nX1wNVakJFBaeg5zjE8bst4hdvz25rBAeohot6RHW3oPRRhN3DixqVWZFMkUFyZc",
  "key31": "2YcofYeSQRLYeFPGDrvAVRuQy8WaCL2sapvCh18g2BKAnzvNucbGY4DSRbetF1J5pa7gZXEaCVdtW2KR8hBoK8E9",
  "key32": "DcUx5Pwd5HXw1LradTx71JUUokPmujmRxBFATELE9Xv8FQCWJaUPxL9qZefpCLwWmYAk3DMTZxCV1vqPnvCnZSP",
  "key33": "5GupcGYMgewhEYizrisrykAcgiku9D6QLurh3VcDy2HC5SSnQYJygULyeoR3fLFNaUKCVSwE7f88YynGo342zGzo",
  "key34": "4MCzScpFXw6LRHZH9GS4ksHeoAHYiq8PyEjWdSjKMW29Dxm1WPiYFpNhzgsz9YC1VFAPURFNWvyrDGCn1EwDjMFU",
  "key35": "N47ZiyVqdLztJXHh7D6nijRFHNrv75NDUHAbaNYr6eoyS9Ru41wyDNh6XDbwwjE3ZVDhTjn1qjSu6HF2LTePgjp",
  "key36": "E9AgoWGJ1hg8NUnot7vYvpCrnsMa4Wo6FKxz4nWDXT7t6MPXPcDEqT4GJygUYKYAp2Dt45oxKx28iv6YYraWxTn",
  "key37": "4dTwLJSuz2mZzKmJivkJFtd8msqLF9cDt3BVwhuHgKAb5t922pxb8xu3QT2KgTvkTqaJpTETPBH1GUTyuUGQDVnj",
  "key38": "46txjDz89P4Tq6Phr3LMq6eG4hd5DC4DPQ2giGhCcvEdDQQLBQTtccyqdzdgEnrJK2SGMqMC1yBABYtJjKYbxHn8",
  "key39": "3p8m7CoTJtWJ2uFmSER2JamYky3uHEtCqPXvcJ57vs1q1ULLpFESq94pGvGHttbEgXWa9vwqtDr772eqWG9U7aoD",
  "key40": "3U2dzc18jPm1ky47gtjQdGUpxfubXSfobMppYifRhkzYHVLEnSMRpsmeRMQehAk9tUX1EmaNYdjyjiRh69vsM5bg"
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
