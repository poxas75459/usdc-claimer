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
    "2FBAcJw6Gmkhbc6gQiJDF9HetbLpQttRSbyxsSfno1v6sPUjFHdzBWqyyKoKh2KNFK8hidkMzDwdbVeB1JvAds7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xB5VfW2HBn6bAQ4dSeFLqjhfy8dTd91u2toVUpVWSVFFFZEqQMXVsSbXoSJaAjCSx1zGQHzs7XJLNt9Gz2E444r",
  "key1": "3AjM1zo1bm5DBYRbcS79otxt6zA1GNPSrjjVumjVjGeyZoZUMMe5khhPYaQUqyC4seqJ5Mvmt9CFsenayfWytkSv",
  "key2": "VBx9R5tUBQ7yY6MKnFPF1nMkkx2rnVhFmebz3FdLphQFJhGk4VpEcnzrzJpCmkJHQj6YLQocAREJRUWxFnDynqB",
  "key3": "4tUi24uVt5SCrdmxx9ckrHvFiNcEEfGnxSx6n6vkyjAhk1m9hEXfcrpoXsnqyc1qHwaqLEtfVpvdYLDPkomky3Fk",
  "key4": "3Dc4Rqb75kMz3HxjR4Ri5nYBU3jEijnckgLPF89tkdRaC5oE3eaz7MtrFn61SdnG6gN3A4V766Q7CLJpSBL7yyF",
  "key5": "5tkuC3pAp7QpZJMHbVfQdLXma6KrWHtAPearc1FEatJznaF2YhjnVw4wC1HbUBWLBXY9UG9Bos7GfTwMCLhbuQ4k",
  "key6": "8GmfbhwXnjtJq7B84PsVy1ypHv8SUjVTNNgeozPeXTD3BHcv4mYS7a2BwwtLWtLyywCfjfofiB7ETU5Fcp5cdgM",
  "key7": "5tFYQZWgupv6UGUA1tegELj7jx9Dh7JChKbPeXk2dGdMmuiPZnvKupNa7YvA8aoh3Gaz6KwqcYa8jjuDzqog2L2s",
  "key8": "5bUgrfoSNxbtJcuR12dHCga4W3dWa1sCqNuZ452vTsskH9m8UgjweAq1tc6HjXoGNmSWhUMTBbp2amfcKYK3isg6",
  "key9": "35uUdxjZ3opLBbsGpAMbnPhUj5dsVC5SQSSnnVnVFCb9C4kJJ9Txi3kDeG6w8QWfL7MQ9bof7TMJQRdP1HmtQXPD",
  "key10": "5vBQhdzQWDWnBL9ZQqYEiCMNCvrZwLFcw3p3yz4VRwq3uorQfMvrtoTty5APRVH615Y7LmbJcCig7qET37QnkgiW",
  "key11": "5UWezJufWVV8xMWTKceQzAWFCeYJC8VB7LsbMvTyrCYsV1qcXw1WD3Ds5Lpse3naxDZ3snMt1vMmNWNhwmLeWswB",
  "key12": "2ntNN5hJHrhtxoU5D4zDYAPFsa6YenPxLUfi5H7yzsGYhQ1Zn8vJwFuL8H7QfwR2qwqoFneWP17jXR4yC9yNw4Wf",
  "key13": "2vgKZAvtGTmKvyAthajabXLD6bK1MwEeveCdVHUReF72YZDUFtFGdAHTfe8iP1jpWgWE8docBMrawakFyX8nP21k",
  "key14": "2EGoJrMnGmrjiuBF8cR5HD9Z4Z9QMf2gARppwXP8rnZuxXGrJy1xtZYiizS1acNM3a7nTv9rXGHfw2XHoCGyw6Eo",
  "key15": "1erGFnKqxWT9ZuqLuXAfWc6HPnGRUhswGhKA7HEWqBC4ogVhudCB67VTW8KuXumhmSSvcVLNNqzMmT8QHWecSak",
  "key16": "53jWXpeFwLzwuEZLcpeznBS7scs54rutvMBiYL76rH5rSd52827p5SY8gkH5RG8RPQJvFjgTMseExiRKxMMZuB9b",
  "key17": "2fJ5YR9uzuNtE5m9BMxnwWULwyUmgymfTqBjN68b1dYxaug2QYbcYiVrWnMr56puhjknpnRXGGqfLPLPFka9c1bA",
  "key18": "2xSEgNph7fvq4WS8SwrAbGZ8FUtwdAXG4qSe6EzzMjEre8fY2PBn8ungTgRTifozrGKjoYboq54cKsPizZLf7Qqd",
  "key19": "zJWGnGKBNDThJpKkWonBPsZ12HbMsz5VChAiCXnN6bFP75bycUtsuPZ4mPf9c1zkHuJAXwby4WP38gxjmJk3vMC",
  "key20": "54uv68yeUH362qpvuTZJVguUFMAjyTnv5JWnw6DCmwycBTfRyZKY9Sit7BQLhaNQgr72NCmLyEGhVCkQNkrbuc3H",
  "key21": "5Dnn8dGmJEVR47Xw6kjRx8J7gngWjdPmABDHvwdjYRFHf8p3f7HPHXYacin4vKWGPsiXYtYZUtjj3ci34TALJiBb",
  "key22": "3Fa5pYY7e4UzKyjRwM9aP5gmKWLiAe3VDz7GkRpTEGFVHmYFSh68SR6jgwHXTu6WNe522vaVozJLQA5hg7iAZXM",
  "key23": "4iYw3GLp7SNQaNCZACTReNokmmV588SPiSGnik8kMAzUwmzeAnzAgHnKMxQa9nVqfpWP3Cx2cw9tPVkWY56pYvDf",
  "key24": "21SBJJT4d6f1ggpkEiyseaNCorkjo7KjbGSq39Ng6L8C5xBSrZJLt41CXKiK5VjAKXgZgFq9kTPXmsq8MxjGexP2",
  "key25": "4jKXNkLqfvCAZuZegcyDreHgTGXURfpvA6fHnsmCtdYEaEjPLZiXzwjCpUtnt8R32dE3iLCiLj2NXEvQeB1LQaS1",
  "key26": "2ZSDiVCyUJYdp9Mbf7CVXdQNq3DuQCDM366MMEHccPapHoy4atp93ATbzuEbWXzpzEtjmwidqvmncbVpphUV2sBr",
  "key27": "44HkFLKSNyf91ar19QjnnCEx69wvSyA3FNx3Y7hAdHYDRhk5oKTM6AVALcQtapU4oYopKTNUYvq4ujyXbknwua1Z",
  "key28": "5kFkaSzYS3mvrin2R7R8BiEEqssBHJyEi4uGB16XXypfiypzZcVXShCHGZYBw2xfUrCQsRPZuHUtM7G8U2chCosP",
  "key29": "4Xkj17euRkrwTGS59DjpprimJ5Wp2mT59QWDTpXBt7cc1qTjUtyfCwyU9A1W9a4qFTftWQAD9MAasVncCKSRA63r",
  "key30": "3hutpCVUChWk5QDGUskozDZoMCpABbqmiswA6ukhkhpihf7jCWaNqe3vkVGbSuKeKyv1N4QeFaVCLCYNk81fdDBz",
  "key31": "5jU9UTG5tHrJEH96szNp9QAk6FWpLGsTkjY8kyUJ1WppcHVUUMoH4xA8DpdWGmaQekJnK15gaNGVk3JReUvfLPVJ",
  "key32": "3CmM14Y5jUeoWSnqbhoRqxoqfF7wMR3qow4uZ96VC42u6joKtSRzHyiQk9DoSbteCsAAukV9q47nwTvU1jvKGMtc",
  "key33": "4LtnuTYTfturxCf1X3eXYsX74YYHBif9DaG7kvg6PQnubbzpZr6TxVkM9821VqwZu4XAE9ofsxEoCtYVaSAZBJ7T",
  "key34": "5xAELufoAxDpjbJbeTq9UjKoTYqgkufrx5EpnAWNcLzt8auMCsX9CWCYA79VcaBzzdssN1v5jwpvkFLjdXFicdzp",
  "key35": "5GzSi6RvFzGSubZmVaboSu6ouu25eCmKLucbtkW8qR1esCPCpENRLPcgN5f8ycKRpsy7ZuHph76DP2VM9Qneacg4",
  "key36": "TE6jdznkivKKPfSpVvpfohWHUkXtmAcXdWCwPHnUa7tMEGQazEgsj2kyVT7bNcwjBx3thQBRTDTRxmXLqCd3Sc6",
  "key37": "5VPGwwqu4QZxGQdphfLAahQCZADMwjd4TAgJPR1MdtBa1wvd2Drn5cbRWGFXHU19C4LXPSuZgfz9YP6W9ajdhecp",
  "key38": "3oHgG5UopYvYVWR4ZTfCsANNnRSGaRk8SgtrrTYWU9PXttYdmT4N3nifSi9tSP2oeteV8F8qUerK4DgmBoJfKR89",
  "key39": "3Ku8m248FJj3wS1aK4VJQBsmnzNXFQPiDhkscxZP9rzwTTj3ZLi7aAiwycPTdEX7sP2LxEG8mXipnBPYLp7fnVMh",
  "key40": "5GsthbV1gMNSkFzTtRfyBM91HB6tX9DCNRe6jJKJ9G3j56GDZ91fT2HGLCAyqiCdAjxRtCKAvFGXXUGMDe8GoryX",
  "key41": "3PPCeyS1WXazecd2iEqGJwtDKeHMfUGHJZvhjP5fW4aX2dcWf1YYEJgqTcUx6BTQyLcWLqCYBeCGqp3X3exFDenf",
  "key42": "3RCzFhbLpyvJEGNn8Zs5RRkrVu9Syya522vA5z3L6EvdgXKGGrxcUXLNYajGNR44nnpuKwHuayWdZ95uYuzfbZwx",
  "key43": "5pRqxWcY7ojaa1ornGc9AZguedmjRPUfMw9Sy5Tgy4Z9UkR65LW1UwrBCW2Pr5rhH4UeYFFtTbmw29dwUdVYo9EK",
  "key44": "5JsSPdN1TV6AnN26bN72MWfzxgvvUGFni62U8ay5EUjVq1Xon7MxCKuB8cqqfGGkoC7kqReq6s6ba2yze7hSAjJH"
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
