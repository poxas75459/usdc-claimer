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
    "2hHGrgHwfxJGMPXQ9okHeLZcPPoDGdg4ivReKq5DB6VHxjRBvER5yG4QfzBT9eN2DJQhGZ7dxCjw3EZg2GsLQEH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsWuZYZAEihXUmEauR3w2ieodwU9g6MEDjY83H9giBZ25ShBnVgcuhDBUBx7hFCH19UfyuUZpt8reaek7mvnsUk",
  "key1": "bJZPkQxM9T1U98k8otYyaDWoZMvShVixZNEJAmyEVhTe5ZhNBd7hYuyuQSN5TbzQhjZBU5BckcvCSgqVv1kBTnW",
  "key2": "2w8XZGiDdq6Eyvs687VpbihE9hk5bKJvGbYJqDUjaHn1q6fYHq9BQsBd34md8jMCezjAiNYwaBuMHv73C4rKPLyz",
  "key3": "3cHS4ebf5Ekn2QJ2xftbVgwVN5qBa4dSoskDgwKyK1dDQPHtRcfRMRnouNFnWjqh23Sb6WGWLx2g5kQrr6Lwotkz",
  "key4": "5C5oP6EViyXaVFh8fm48cDoDTofs3S5B8burBAQwzLsMmbBE1quhuR2FY7NEuW9Ggia33QMR6FMd7jSZrjoSHPQq",
  "key5": "3wff7MXY6kY47cnEQaVWKNQSVzuHC7eK4Y167Fa2kfL3htYdMhqPkqLpDcb3JVkZskBKDbwMTsYon8mxSvFHCiMZ",
  "key6": "4UGUNrGMx7iHX5as9j6FsYCLYfiKQT8kHV9XGYmVTSwH8tKXAyYyVBFj2vUts1y96dB31nmuWVTsXo9NDpWNX4kp",
  "key7": "3YE1Dc52ujcddH4i7wm2jnrXFZpwxkPdKRZ6asVK4pswywjMcc4BvnWQebnnqKxVYf97QppNapPt2ffjJxviK97U",
  "key8": "3qC839REVjenQh2m9r7XhGpygyXpv9FmrWSHif4DvmMZCbzBUxAQSCMk7Zq4RN6F3fj6oGmKAePeHSenqwmTkfSa",
  "key9": "3w5Rkfzuc3ULzys4SZSKV4adn69oQLNT2ueEFdv9oh3FBMgLrnUS2qqCxYRUhCNm5vZVsec8y6JDs3hHgLThrPFm",
  "key10": "5BRQ9Sf3SE9oaoaQvhxpJ6vihAQuRZGPSmGE9eu5VTvDBMWvG1nDKmRxYfsGjdNzXddF89Hb9XfziKR6AM5PuMtM",
  "key11": "26DzUgefUhCpPZWVkj2tSzgFUxubv8vtYrNEkZjVSjxED7ASgBhPWcyQhy7FMoHeWtzUYnHoRgS2o4nAhTp5dJ49",
  "key12": "3d6rqoe4cjWMozjdcecG7gVq6hrUWzSWBAq5SUYHSrpPwG2FHtS1FGdCPig7dnCMLKmSZVSwAfdWRAuVCrTqhPfq",
  "key13": "2dfFWxHdabB13KmKz1KrABGJQcckpdxah6zx7gPCBFu8FRnZrTfYwwwXWbjUwxzpYbZt1QbSTvsxtrjXBqpUf5fn",
  "key14": "52QRZ5uo8MvwCWomTQ2MMYjijaWNgeHhUjApyniZYaAazgZzvbqAeVNXPULPTE3eusZxdg9BDXriouDwGfyjW3Ki",
  "key15": "3EqxQSoS52CvXfcTRB7MofiQ7e6koHErrQTzrFquLrrgMHBch9XpYpHhpGaGywuA9ypNbGtqzoQAsfAfPapUhV57",
  "key16": "5BfzM2GvUQ6g3vivvQQ1xhZkj3epJTYK8n9u2hiFGNrTy3Nt4acZatF44xB5LWHosYs4YDPwsCFd3AnzpfAPK1PQ",
  "key17": "4Dd1LQ7bmNVbr6FcNaZQ87V8D8ns1uCmA22XVS3qVGakbH9AdyA8gcNHmKaXHtMt6mvEoR2KCp9eMfAjwRE5HfeN",
  "key18": "3RQ795aponK2Rxxor4cKPJ4gbcwTkohpQnEsVQtAeuNHDZfUuaMvVCrTSKhWKRcxMvC4Se48ci16xuAg6X8h7NZX",
  "key19": "4hWsJcbZDzXsZTXfDysHGjg5ptC3unHkEsPcr2oedEPax8uKKvsqUHeapjxgEKfeGCwro42CU9ko55obBYxjBsGu",
  "key20": "UD178Vmj65drDH6jM79V36kPXoMgkNRcrWAqdRywr5EGeji2QzZQsBWZch9AT36ZaTVbRCZc6rKe68xRXFPmvvu",
  "key21": "5XnjiR2nRg29SPykpaBEgNsAAGF2xBaWbsYoCBGYNMDAaryQacdaL55ycMSXrUajTzDNmSAGUxbC6kvBbwWKRbs8",
  "key22": "5GhDRxZSm4rurhi2YgRB5i6yD7hkXb2rsGMyAXivKXjW92if6guRTmvWbjVt3CcBKrjTG76UJee5rXz3yeSXXT6y",
  "key23": "34NELNwA2PPJyZ1LbZoGpQyGbKhabotCzKJU8SMgshHd7sXU6wDmMoLCVkTngVNe45wXV3r3q5uYXZJJHARWoqX9",
  "key24": "3BpY9Rt2GYoyVt2JywcTUNh9HwqRdesN39CbFja218ZEK48UdSzvis9RbUjhgwgQFyFscUaGeiCL2dkbYGtCEKyr",
  "key25": "2PS1rkgANoM9mU9pdjS4QZBHy8zAqgkY8cLRxoyT1gqUk5nmJVBmszCmyF58okS26njShDRBotdXk6maXMGADQWu",
  "key26": "4WRuKHcR3n9vQ4MyZMp2xv9eASf4U7PKNPKvKewVrJNaznxfWU5giLgkJmDiJw479arFLxokjD88hdzevLZrKVsA",
  "key27": "3ECvAfAE2CGuWRzzdowapFJztrKr72mpBZo7aa8RJYjRFmgcokwe4wYPbvpdNGZxMKcrs9WSBUYSBXWh5a7bFkbw",
  "key28": "4DaZSjzNw9x9WfbXjYgb2qHnwSwUihgf3fzjNCyVURza3stAngbMNqq6VVYaFXyaBWS5BhKEpdhAD9J48NYkJc2o",
  "key29": "5oyKXLWT3FMd4neMP5Wxnsp2VuJQJEAkHwrgb2jY5da4bSFwDuAhRGn89LPphB64xVzzscQmkhLvC6k1swGgdfAi",
  "key30": "HatHSWjUQ4CUGqvsxuo8zSWuZVzwmH4pMoZthgmyvLieJT8UfhizMbg19tMbcswVXTKhg4tkJBUiNP5GJbCNshd",
  "key31": "5ReuuohN6wgzjmgStVeLQAfUN2yLD2t7ySarMqxSReSJVpheMK7rEWsx5mY5sFMNZ7Q6vBJJzP9VXyNJT9KDLxEj",
  "key32": "yvyxbumkDJvdheua6t6odRiqVyj8ot1W8H8Ppz3FcPZ6aUrtWfyht4psA9WsZM8KL4K1E38cNmqnj9QrFYir6gZ",
  "key33": "631LnxuEQmH3YLQ1tNdjD3tAZw7XNTrtuBuGZph2sEsuDJ8KH6BGc7M6SivFPhA8LXmxCvBxM2uCVURno4E9GPrs",
  "key34": "2upq87wpiZiyG7GnbT9jxo41ZmvDyecJ7ZbHxCnkQdZzeZHXG6Xn2nEE7JCFpEjsx42oPKSfzhqBeb5xbCWB86Rs",
  "key35": "2NzZhkVCNMN6nW9eb7DPskYqs5pjCADyYdhce4KsG4Lp4M3pRjsgxY7pLAAnLb9o63wA99HnRXEDjVuvKVT7cuX4",
  "key36": "3Sude1ACKeKqQrVrrcFKjMsrG3Akk87XqGuT8khzaXjXvFXqiU6VUAWQ7rSLswDeZE9fmTvXwMuKYsh2sXMq99SQ",
  "key37": "2h3FRbvqmYZdb5QRQdMfAr45rbZr8xCve1qf2VcV85JtaTaUBjHQu7VSePr5YctwM4dkQ6kQQ6p61HxbimawiEvo",
  "key38": "ppS3CLPbmPJjfhpg8Vi4Xx2k2UbMm3xQk8kzmAza4VUEaKJautiDbyNwg64jYKzjCAsAaWkAn8GcYNoNeSn9Zr3",
  "key39": "4WK4dB9cmLzMgSKL9LfCpQr9tM9QRKSnQN7mG6djXpFxjitXop5ebqmkQGUJLxmqjNNpkLfMzQwFAT4hZ5yrFsVQ",
  "key40": "5tmpRLVfD9tc2gTznoEnWwJ4hkajfz3TdsdpbXvu4ej4MLPu8KpDAt7qh65HaWCYH8AbUDa7LysgMbjLyGimSooc",
  "key41": "3q5ZPgVkhE9rMBF4XhZoHDej8fQVHjz4onicaHjnohb4u9ncyHTkUt4GGgwN8xiVUfkciJqKYbQskHkM9qcyERn7",
  "key42": "4n78zV9uwTRvQ89LmYLJdmiM5QB7sJ6XVHUy5jXmvMxsiBEo5TJkHhUu2dG8USC2D9EBAzxBUwuPQqWHNLVvy3Px",
  "key43": "3uy7CYf2YGKHDtkYQjdmk5SWdtMN2SjFZ5vD21WJVKaG1pF3qheqxpzoHQ9uaU67SLLQcbkicoy7BHPdxSvfpBaM",
  "key44": "2M6DH2YnUxiS83iWAit5X9STkvzs1bPjb8NhP3a6jWFComZ9zQEGM7KFuRJfY1SXpg1HVZBPV1CXxQqjW384u9pt",
  "key45": "4Q4wwcduR8p3Mgy1WuJ46UdV212rVXmZbaMpXoxCzpwxVBMuxtVnZ7guEACoaKZBcYLKuiMS3HYK8FD4iKg6p8vX",
  "key46": "4PD1Cq3yHyzyye5sJtJQWSDuGBKsLRQtyWUHXzBaLh9n38SQWTUtzPfj2eNgSkVjLZhzwKMdM4GHZnZSeAMynvzG",
  "key47": "5VqmJUFFvM9QX6n12ESE5DxRXdKf4PAKQXFyAK657PKsgBzHg3DrDQnUkCbX3VT9fc8sP33UywXCBA8bbLrmvGNe",
  "key48": "3x9fzFwGjVSSMB45jB2odRE7nrHNnXiG7QiV7Dwqd7dXG9cu4JMwatkS47Yw9CokpQE3qdx8JZYqUgHnqNjPvLFj",
  "key49": "5yCJvhFvmFPZtoTJGSqrdv7fyZtKQAKFbxUajogF4UWWErHG2yf7eT9oJTMcDqbMuwYsyMSGj5ByWkd8ftxw9bhA"
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
