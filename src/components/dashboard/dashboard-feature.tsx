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
    "4AStE2yFJbAvy9E8Apreu8Uni5ujtxFLW72MTaXa6nmCVUBkE9fQ6FciWgTGG2t9nxaxBniDcvLWsTHFh5CbTSu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rMZ4z9w5dCPM2TCH8X1T2htDGvNDExgjEjX6NkV9GvaJHMXKgc8rPgbAnQDD7LjPC7yym9GBrdKZh89bTX7f24q",
  "key1": "4rmHPrCZKWnGFYuniqTC4fyYcnvkH3wpvDRnPrkGQzSNBoRWfWtNjUPrr8kDGLbyKSARjPML8FTLtDJpyX3697s",
  "key2": "2JKLeQ1QZhhz7dpd5KA8jMwiCQ8gcTBmh2wJBsNuPQpD4JYs2eCXr6PomU8erT4vTGZZgTWjTfZv8HUQdsYVGBid",
  "key3": "4SnxH3UrqvEDzyqsapQAWxNWkVFPaS6oBX2UvfEFup1MzXvi7DFkwKrWzRhULNuKJw6qVrLTwRek5G71rHfW2bUa",
  "key4": "52wTYGuK5LQV3K44wauvy6RRXEvY5eEvykiVgNEKHNJpcT73yXgn2y6Z66pAcKnh93eoVCwTiTm9dNQ82f9oFqV8",
  "key5": "3jeVtonMnBaiUrmhRj5S8NBRtKzwfD1pwh8jy5cgJdevZJzojPDP5HYc8Z5MTtSN7BbRFhrneoy14Rs4DsEFmnKn",
  "key6": "4unfhZH9KJYdPSx8eaZ3mCNaTG4MxctNjWxXxAEBuYT1WPzXPG41Fp3j4RJYnDPuM33qyP3iapy7cUSPdgGJbbDC",
  "key7": "2DGdTMocAd4Pr97SUm4wFsG354iFMMDT3uaegwfQCyJqoTLXVL9Lnn3CCLXsLKxQUuBdXJYduVCTmDubYLxnZQL",
  "key8": "4awK4RUj3jTrqjoEyp9e49aCXgBiQYHSfHRt5Hyv7V1hFGhvQf28bVdjxZZzgMR2AqRt61otTDHXUqbwoHYpFzqN",
  "key9": "4x6WAWh8mFmwSyvwTkoq6NgmXDw4nqLg39LQErGmBMj6KLmuhPPsAYnbrgXyRsht5svjuQUSvoHq7Ry2NM4FaRpN",
  "key10": "3XndBConz6ypbwyV2ZvkuHNENVPSwXRJ3UVEpLNEAFYjaPeKpj2dSja6aRT13RXqvB4F7Pi9gPkepEfiLAcnayFu",
  "key11": "2g1mYQU6sUUeQqYRYuV2ox4xF4B91tfXSBYaa97Yxxv5Hfcu434E181SmU8k8XvdorGM4EWHcRSpjru2v531DcxA",
  "key12": "4VYaugGfTgQDtvQk75iGR77aoSR4tcQ82Bps5XmPEvpVfKEtxS7GcVXSxhFnRGpByGutk6ufTwMh1hDzw1ovHWSD",
  "key13": "67GPwkq6u3FkdhDjWP9bvzZDdLrxkatcoE693SsSZSqZqYi9Sy6Fpa4qYNEyHqbY7rXC5PFsebU2Caj7EDcZdzjU",
  "key14": "51oGan3QaYkaDdkFwk4boX7hkk1xGhNkRjdamL9kmohSyzhKXKJawyreUfxCXLSaZZzMoAwXUYpVmRTcAbwdMXp4",
  "key15": "3KMkm9cmybLJUtq39h57FvVUDGXriTUxE8aFRipNA3p3gzgNoSiBkyZEuU1GdtsdY4zjD1VM33A4swPihwRKL5WT",
  "key16": "5p6Wcyh1Krk6NeAZjAVcHDXRE6RmtwgJtNxCG53NSkFZMH92ArnaYpyQ2ss9Wd3jNQNKnQa1J8ntqhoTiqPaPNu5",
  "key17": "3UR3oyJTPJjyN8p35azgpp8Paq2QuJokYEXWktxYGiiJDECRL6aW5Ai5iNtZ8ZGKUuCPMv2JpJWYLnkS9ZXbtQ5z",
  "key18": "4NHfmbs8jFPX9mmcDscNdiUw1U4UKvJpH38UxP9erD9JgNGA4XndAA7sSDPPsvdFXnzUf9M7PPtKSFGGVvZkNBWK",
  "key19": "3v6Bc7UXaWixGGVt4rHxZa2esPDcF9BpPhij7GahVoHano2cCdDsw8yNXWtfYACN6AvApgDsfkHg4NXfu5PjaDrK",
  "key20": "5FH8cPd6h6jZC86R4K626wsnqZ8SnzWANU67QgNEBgUUHsJgQ8qvgofNm8RsrFkpvycpDtP1WZs6AE7d6eBPZSnu",
  "key21": "79FydHGHjcB3KZmhsfvx5hvWfte82URWARnawNQiHHZb4rwRzZmygz21MqYpawTm2JVSdRasPuHoJcV7MESNR6p",
  "key22": "66M8m2RjVy19ZF5H3h9WjPojnDVzbGKrT4zU5F62dq6J5Kt7XPDgCfN4rPsMj2JWSE4T9W1WBjtLaeGzSab1NDfv",
  "key23": "hAuU18qRJK2oBXsT8dnZqoZ5JfrStcFsY6gofAHnvwFb24ZHD67uTSGtmYB9DLoFEgiqfwhNxCGKvgEB2frjQwz",
  "key24": "3bn97FFLZ14tL1SMp1D8g36FbnLyi9FkEMHhbtJAk8nL83oSzSvNcyN11r2Nop1yeZtNpX13Gwu9CpDC35pnyc2L",
  "key25": "3faLgXFRKSksxcFLNWGf7mm38UsyJWA7kkr6Vwu4emwMAjz5CMnY6umYYheCx2rY9aAc5XNXeoqdJqMgGSkrvPoR",
  "key26": "3faqnq4Xef4c15StN4o6bpXNPoHcgHtRnNJm2j1nk1vfToJRN4CJ7fZxEYy4dNzGMwVCWXoBoP2LsJCM38LZVGsq",
  "key27": "4rcPixvtFghedzT44HSWnzkxgHvXe6NTF5aQLnicag1Q5cqqVVTSVFtRLj4zLCmX8aJKPvx2g4hSwunrLEv7Mqb4",
  "key28": "3yobYfqjG9qVx3TJ41QVdHPCTSfCjp3KjZAbALPu8yfu6LqbisVHFnUaE5uY1B1TSydwKwNM3cMRCg8N828yhqEg",
  "key29": "2YYa6WFoap5ndirpP2QFVQSZHKU9EmtZKopcX3nye1zgL6VXNLKUcz3WqZYdZVWLrxsbWA7F5gjsL5DdSaTRsjFS",
  "key30": "3q2HeKivBmTakc9ryy1M5gEJMLpWmyba9UC7yJPjRkCrsMadTyYUWUyWMs6SEsXCgzu1uDrvYhxgPW4v1BZ8YQEc",
  "key31": "53KSnzmXXgmiG1WR1HzsExL1inCzxmRBa6efiC76yeKaVBaW4oZsHTqY7f14D2pektjbFGxrfTzi2S2GgdMeJRgz",
  "key32": "2CjV8cijjJQgxShbCi76kzfep1Z4U1TM6Q8arNPoezUYvCU9ScMG8QLWiKQgDX5AnvTnKzHH3wmg9DNab6MZ85ri",
  "key33": "4Ht82WjJKJYJPGFQ6ibAktGWinAsYFhJdj3haGspXVL2otiFaT7XJBrzprH2sDQqxTTg4xFrNURr9oW1dKe3mSsH",
  "key34": "4zi9mxeWMKVCwUA5UfAoeVwvCWv5uDobhmvcGyPmKUBuzHNUpQizP18KBSxznVn3pEbDiAXMXuQCTk9ZMnYTD5h8",
  "key35": "AM62dmRv1xUdfCHNLv9siyLRhG51KLEHWJv8zi85ujuTgNqDYXdtQnagnSnCrqTd3h1pPZvtpHostcLMRh1JLpT",
  "key36": "u7udvqvjFBJe5kuWeYkaT27a255A6g8wivQyuB2ESqob7bUiDm1tYh9h5Mpecm2oBQYH4UsPSJAiXUTEG79cNPt",
  "key37": "4LiWSEPgYarEK6XUK7GwUjqXtWTssdr51jRw2YEb2D32D6zWyq8SCm4hLzkJAzf4DSM6jZg4E5HQyJ6KxzHU3weZ",
  "key38": "4QzCuofbdRR4RGz3YPo7VTrRz82jWp8rUcRepE9gnHwtLE7fSRBFBsTAwU2rwEfnMQ9kEhrvxMmN2mGj6rj199Fr",
  "key39": "373owvQfh7bX9A3bVCm6dZ1osyGChhy7miAhEjXKDhxGRBFoCPESjHdjpCpXhTTX1AQSAgUmXxus7ybs4ZEu6vgJ",
  "key40": "4PYxgLCqH4qcQQZpMLFbjxb7PJMSVZpvTUgcYNibExfrGmFVZKanxSMvdV87JJNhnUBKCCwX8EfMtjt9dUQL2hrn"
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
