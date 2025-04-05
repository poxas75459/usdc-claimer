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
    "3KZxMp7Z4CvnbMiVrCfrAwZ4U5FYLhCaBuwxbBQZKak55p1Lg2d7eiafAbFLjUrDRrgzh4wfjqqC1BKJRfiMicVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E71jpCgtQVVBj38HAKctn28gLt72U4YiMc21WjdyJLzgsbxxBHUNjymEoLFRD9GHVgqDsdEapLfKXWLEfYCbLCR",
  "key1": "3fdpBxzJZY8KxjQb4fLKubsoQhbtV7qXWbMfNRXTLAqRK3P3JexFpMT9Lv2iZwFvvKrcg8ApLdKdwJA6q5znRJcr",
  "key2": "4rq9TG1ML7qdzapW5fHf1QLcEB5Ypowr1yis9AdSqKRjujGoHrBp2JXSTNq9Qoa3LHexMk7RtC8tJeDX1YzyBCmH",
  "key3": "2q64BPTpcdbKuht5Q9MdLcW3MoVGd2mVF1UyY3JKfcJocFQDHA7jTXmoXn9EAH9eedMFg6mcPR4NZLpqg9SsV65b",
  "key4": "5F1cqQUqh5LxQAaH1yLPQTq73KZuZ6AGECVm1rDP7YHtWURisgSqwg21oFESYDgxbbhBSZDLym5GrrfFyb4Hqqe2",
  "key5": "4jyk5oj1KbbohMw7ppzmSfULvLwfwHw4ssnXmoFwBDd5GR7PDMeDvwXDCJz1Hj4zjGLnUUFgcdkaXQtgwTWprJrN",
  "key6": "qQNueCMNAst64f6ztCaFUfRuY31ZTEjd2ywZ8WWU8uBnGCMbfkLwQzZGxLNWdB7Nq5wGiphFjqMt1tyb5sRNh35",
  "key7": "51qcXR2Hr69cWmg5t7cPJFf7hnz1SNrfxRkgi56nToZXKmzNJcF4aEXF3qRuiL5Bb1tVECwvXPzSm3Chon8Z4xXR",
  "key8": "4rWAQv8Q6B95WeSfFTaUricoYtGTdz5eFXZiVxhofRSasmkCabNQiDmSqzPqmhGvN62vhczGPmaV1EzCkM25Lt98",
  "key9": "jQSNdA1wqqMfjhSccxUdh9ocDG6jvGjbhEM8Eot3fuWQJxXTjHYmyJdvxKMz1dnBCaX2yxy18RjanU7xcQQhprF",
  "key10": "4dLbKa7bPzg9dVy4rhhMqJdhaw8SmhgmZpd9riSQ76WqczTwYjcycL584h9W82oLCoM4LrhuFx4wSD3uKRU2tj7f",
  "key11": "3Xv26DqXUvJWFME28nKD9fpUUtiMxNse1CbahdxRXQwT87i9DfdSjCGf9yC1pyuQ4PusNE87P5RMBMy9tMZqUiVf",
  "key12": "SRe9qeTD8MsnZDsVHW7oyAqfZCXN85ts7MnWbKvDdJSgp3E89aYAYxKX5rbJzJg53h7xdt4iZwXC9K5V7jKQ6XD",
  "key13": "2kGDeP7vowHBF5EigUDA1dtcw5ZhNYGyLdjWorsxmpQ4Q96eg76D3wZSFDa3EvWT8z3GLwi6dnoGpFNVibN4Pd2X",
  "key14": "5u34wnz6fqoLpHNvCSNz9NDZpyRQhmJ562ChzcxXyFXQktsuGYqPTWa5LERM8bkjAtc5snpVdL7sx8EoXtbuNzWp",
  "key15": "2rdn44DtzsoaHY4r61pPU4WZtCYruadY6SZYLjRG2dYNdNKCYbb67dN5EcAvEPSBFvSs23LnGw8XKuaiGJJYdq6T",
  "key16": "4XjVaGz3vjS1aGEC2K58v5BnaujUMsye5n3QnsqXYsRJSiurRwFkcfE4gSLAvCsdVmgCJVv8wDNhkDMUQCa2BrXT",
  "key17": "2pLr8T3FdLL58EcbtxfGJYxL8HAChcTYqCUGoC18rD5wuebu1BmcZ1DvdCqFUrSdRdAvuxF8hozD5PF7igPizzos",
  "key18": "4BGP2qsza4jcFU8YNqZAigbGiE9CJDcrVQtZf3W1BHKvny92vQgbovsNjAnxNQGrn31BHMtATzL9fVt8LS3qWW5X",
  "key19": "5igR8GQkT2pK9NjnMcvxXXKzdVAqSPrfE2oPRo4LchdiqChNcNCNbF3Bp1AnjvMGP2zLNHZmhvqXfqgB6qCEVJic",
  "key20": "z6y9G6ik3budg9wB3pnHQsCs2j9bMyDyHvKMtE3DpvMfnAxaRadDcCKuBsGEYd9E5QHSj3CvzNhK517vxdEWgij",
  "key21": "6XzF858WJzGd24W4bJEdzbe4MuRDyoApgQQkWAEnh7wfEzFZwNpUEVox4qWn7RcPHs3PWaR3UThRwjmmMbBAgRJ",
  "key22": "2hiSHxd1PDGSoS6pXAnL8rvfv7eNkuqY8ShiNxwjLiBnUqMC4NBFcm8yGKRAGLEc6uQr4AEnhk4mYJwFCFJfdw9R",
  "key23": "5Ur8hSFkKLrJJj5ryBmebtzKKfNRYygMDegQKcNdzACnF1FuwT68dbEEx4iChwmWGQQ7eRbzb8MwJxjkfQ6gf11s",
  "key24": "3Kb7jSj3pFv3h5J5upvriV5poGjbWYLotBBqDDLGcU5nBYYptRM4z5s7JSJpoBBVimmV9NRPyQE7iT722aoVvggt",
  "key25": "4GocxqS8YLop341rLhnMhe4AWMscWHM2vaB9GZ81HPJzNLGHvUseJZFTWHxEHn8iqyn5a9rZKjdDPDwXPiB7nyHD",
  "key26": "4GLorU6eikPSJon3iHDxXF5CuEiXZq6iThtWwDyQjP7S2CpGaNgoKqdS2p1gBDkFA6AbZvuFdxZu8mbpB7wGDeZV",
  "key27": "4fKhQT1ad4zPb4H5zBxcZddgRs8eqFBLP2yn1BrGesBiPUfX2rmUhwJ26qBNCSSujZtSodrwy7XhiAL261pvHRvc",
  "key28": "5reAm1xg3c8Q7m8Hi3SUKbFAhmU5qccwC7u4LqDHtHLKUFG92FL2qrvD8P9ZXyKqUG3mJcY7tiFkAZndQevjNH1Z",
  "key29": "5eb8F1XUh3yaULzHjW28DtHNMmqdnwyCe2PHfojCB9VWt3ywvXE9E7P5HYt6ou6nPjNZKT5MvZsZscsZpGHgVnYd",
  "key30": "5iawkixM3cg94V6e7YRjkZhaHKhyY238Zw43FnkcffqYr7Q85F76yD8sTAeVtSEmEKnh89wtTCW2ciYcYdQo5ZFV",
  "key31": "672XY6fzW1ndbEK4sLeEYwQeDBwytV6xRnT2vJ6spVaZmeTBqRhZpK3RYqk4n72Ga6MUdfbq87dFJXSoYdxCgzmd",
  "key32": "4ADj6SERCBzRiK9cv3ZXLyNw5Mf2TVKM4GYhU95ShW5cFhJoWFVRnzLjEKFvh846V7s5QbPg49zXETGsV515nU28",
  "key33": "57dNAbzQnkPVLk8uCV6zCUCdwSm2diXkvTckEXeJ5uuW7steMoFPtMVcjM7jSddrVFAGSZHdRvtPgW9wnfLYFduG",
  "key34": "2fYmoTuMW6N4Gx4zM1Do2M3H5WitXSs6AYc19783fWCbqNoNDLG9Ezfv2ZfvZYVq3FYhjAa7bMb9TjBdVmX5Qyvx",
  "key35": "7f153h7Ay7jb6Ws5sbiQssUA6JAftvwubbvAJG3JPF2zhpagwwDXZa9HkUfsHQZx5bYptPQqr6oa7DhADh3Nby3",
  "key36": "5Upy9HbXV6Sp9zp9pXCnzmUnZYxE5CeD8FrKokEWTaJzxbGZBtudhgFuWPh6N7LAu4TmCt2euVZT7We14LppJxQZ",
  "key37": "22w1FL87NM5jYwaYbWGpnd558wnGg2FE4HVHWxCe3KCWtyy1vEVMGHvVQ792V1NrC8QXyMACq6AgvU2CzweB3tcJ",
  "key38": "46DPz2uzyrGhYQ5ocSjSZbi1Z5rj2RPbfg5YwrCf5q6K1cHax7tXHfRjL2e9N1DyR2DV1cSVjHuqAd4ebLrhdjh7",
  "key39": "43iiumyWM4et3hTivsndVpAqiNug14sj1bThVS7dn1BFZuPzQfLwLs4DQoHn5rrX3CunAuGM1DSMYAtLrhmFDYra",
  "key40": "LuNhvzh2NHUL9Nu5NkANeJo2ZzFuNH4JvfguVUYLDaN8QmK9qx9RA4oiiKujhxBijwt8jgNAbeEPoGuNHfYpJAF",
  "key41": "Y7bafSVEH4WL3a3Ciy2gmjc4P5kwVBXerymuv7Lk8SKVA2uW1TbdjcbaXt59rRwVgdC9ZUQmt7JPZS1cvymZs98",
  "key42": "65A9wWvvKV79PKzpr5HL1a8bZyzhu3dPsqKGt9cfdtReCPJ19uB2uuxR2daifGpNKvoSX7wczZsS3GJFqicKpLDQ",
  "key43": "5iEDeSSGRnRc1dGvonR25n3tUNRrFUpNcUFL1QZuHsgorwzQ1XT5YXHgQXDpQbhf6YbDj7DxWgBHjbxuPKXyBtwY",
  "key44": "Xksv943NjhGRzRuPXjpsRUxdFa8NdtdKHdBRvWpd4kVmK48x2fPWEo737qQd13g88WUXdF7kjjgYGbSPRUuY8U6",
  "key45": "67HwUkSwj9XehKTat66Y9ao6mwxwd7h1vwpxGrwF3BKqCteaj2aqCE3skxAiJooipG3EXYo95dpsQoFV2PntnMSc",
  "key46": "smPbX9uCe6AmspHhpP8riy3txQiJF8S7i3GjeSN4E8AAKnpYMRV4GEawjKbytBBSTqWXJkaV3Cvdvp4DaCF2JCn"
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
