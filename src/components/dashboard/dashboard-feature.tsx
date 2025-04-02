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
    "2UMniYAQncb5HR4xhfzvmJK6eddbpoctaL7QZVyBva27EX4HNpZFPCzYdCFpoonomX5zm5ZSdk6b6FWtFMNARuDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TmPKvjS1yBHo67kUM1d48Vp8B1ezCa33pBa9ATHZsRu9G4DLu3spqQDkuT7tM6HiZKXSiFM6Vy4sCPWX583wfHB",
  "key1": "5QHEQoRrTgXaboGzPsrMRXL6BgJQ8gWDbEaeTjouoQBnzXcdNFPnCeXkf1ZS7LQvtYKjiHTLdD3zhqDRnLuJGuYL",
  "key2": "36Fxzr1Hu6o9qrdEQjmz9gvMoBZjqrkgnJNdLjr5ifhoSDsrgnDqCiEni2AAgV2uhygH4YcL28K8uHpS5NnhCDuq",
  "key3": "2WazdKYBhFXUinSpJSsiSqBJsJAMo7UvHKHVrxFvfc6bULEVTchnj1KsiN5jdFfsqVuKmwNwRNydxuzPc5WB9xvT",
  "key4": "AtkFPm8tyWxArEmtAE45xhmVkVamqRDByMqd2AURgBNXmCUoc3kVJsdAAxPdwieffnVwHmvR7W8TsNV6ytizykm",
  "key5": "2E9EvgcKE6cpB1E6pRdGpJr5UuYrkayMgpQRRYJACQ1Q2ATVqBvCNn7Dso48bV9UuLCoFiYy1DcSD8Cf5RH7Zkva",
  "key6": "4fayevCGpg9oVLFw8kQGxeKwpvHeLUUGoSsu1mvcx4L9sAhcsuDfnrSUvJJtP5911XkZhhh941dDkYeFeuNAYpdB",
  "key7": "56K1wUuYjFQTXovkiBAKJLvpumeN89tpJdqrPRakbGExATyG1pjUpQayWgycsmrzwQoHVnENdDWGpUfaib17wJLT",
  "key8": "3Ud3mVa1TuyZb7JX8tmvaHJeCLV4kWR5vX9iZNyHy1xo6TBsUwytw8tLzNxXCMwxAN9Qjtd6up1db7uwqmLVjoFn",
  "key9": "4kFVUcCvbG3bunKkGpk4iExw4THa4UkDJc2vNP7HeyRK84YU6BWfzG4UqtLnW3v1qjKUAhLT81JyRk5zQjvyn9ei",
  "key10": "2LrbBJtszS19aXUFCebRst3GDSky2s4J1Xzmhtg2eGJLP2XPKPo9Y5RXtgLZHSPsWbJhZSTymbkPsdQcdHqXkL4V",
  "key11": "2c242zH7qom1h3ZFupZ3ZKbE1nN6LuQfTBqJkD77KcVLb6p3hhUaB4gGJZKPpiNr1jDtL3DEhAVn62aCq6gV97Aw",
  "key12": "wqN8HChs51Gn1Zqr7RBwDLXr8zHoSvauxJ1Jdn81QDqUjBM8jZFSqy48ejT2F8ZUWbMjEXBYHiVHKkKHENREgxn",
  "key13": "2jsRAZhJLWFPK17t5mdvSgKFgEf71oRYrdJohHZQsVURRrJUFiJmGdEsUuEmpbFy5RvsssptBZneyFnRW7fh5RyH",
  "key14": "3RvGqhnZXKMGAdDTAhomSykp3SJZqimwtgTfuEE4xfdemea1ft4APzr9NFyynpYLsbwGwGHLuPiW3dz4LsMUTxF9",
  "key15": "5Fxy3wVvFNp1CgVjBNJXRvHTHK8pdrL67r95DR5w24dCgfabWFUutvbG8Gr3qmHYkMAXjaJmjG6zsrWukRCKJBtD",
  "key16": "2iPxbCm9ds4NPgqfPdyWWtaAwmBijWnMdaaSb1GCrz5nik2WedeHN7tVWkbw98yFKx4fzv5yhSeLrKhK8iDPj2dF",
  "key17": "37W2qythiebys8xqKZyTny96YBwt1Bi9cpYjvKkHw7bTXGuUa8fSsZNQMtudV64KuUTxquonqyjgKGw434G53ZKY",
  "key18": "2PSn1qbX4DcyQ7Px3nF1FBUad5Q3zuNSSw2KfQLZmnNCHQ9jf6zYBiBkKzQVT8DwipKyMdWuZTdsfUKyASeV4a4D",
  "key19": "5apKzFTMHY17XqjPYzrd7VbPVc5bKo2U5A1G36MVnEBmfPqpXgw1wckY9vH7orewGC3c6PXKpCGLP5nWkGWcVRLy",
  "key20": "5CnMv8QNuTmZPz7WBB739QWA17f3Y7EBj3Rjv87bmXQdgqCYm9ycPed6znSdmuruAq4BPVdp3CCAnh8qXGbDZ5tX",
  "key21": "VwtD5uHXGKmbRbq2YwUkY1APczTHr1amXFUjmZYZGmCgJTHoQCW2qSnG5Vr9FQFcSTUY7GSeRt291LsGwWXWxug",
  "key22": "3spxz2d74XAgj6JGwnaDzYowZGu4MwJg7GM5SXa8u2jn4qxxLRSVc57pf9snKETs2nwE67VyuwyknU7NeC6ByrLK",
  "key23": "3vCSY8QnSe1mBWrRmonQ9jRNznWpZuNaLAA1yEr4YcTU9R7RcHWroLf1iDmBxUKxnjEvmWY3ZB2KtnCnUPiMUgnR",
  "key24": "3caVyLpa3bXVEGUSCBse3wUw43eiPoJamfPkS9v8YyXvgoQBYxa6iRMwLxaDTxAjfapqWgjjXivmJ5CPwf44WsDy",
  "key25": "c6w6sohW9qWyz1uCC2Z3wbfEAJ8kszfE3XRu1YBcncXnBXhh7VpoaVb9DcgFpRnvW2HqiVvstE39GR5KdBAuysS",
  "key26": "5DgGKN7BzfpHHFME8tKLRqbuTvQ6GZ5k1yu7FP8C4q5CijfTUKupikzua8p2tAHQyV9Cvsxv29garKuKteTDjK4x",
  "key27": "bwqLaqEi4An9kbT8pyeQfaiKEgKNNX8QdocR3EwG5mBGdLTaiE8D9xmLynebVe6bzra1sq29tyW5kGdxYaer6GH",
  "key28": "2JFkHBog4ymfppuLVhs9udMYZjvxQB9GEo7njmRMJKChxy8YrjK477t9Vpi1ii9cfndTuD8obLeRNHrfUaqscn8",
  "key29": "5S5QcWjA7CaRLxJGzpwD3qco5VBvt7STsvUif8F7rQGgZLbS5yyEkW8YNyyhJ1PSTPPnWKcFVZkDwKZwRy3dmg6z",
  "key30": "2rEnmM2vud7C3AUbRTaeVU2M2TTc8PxQyZF1EhDuFxkBJTbWJRYF4RPbc5fHejc6SpZPezSnG344PsvbKWsFtFbN",
  "key31": "Kb9i4Ff5gKvNGYzfhRaUPkH16k4n65Q7uuQ9HtT63u1TMRotYPaNHcdrRBf6qPdfkp9A91YeZcYyXQwrbhiEbBK",
  "key32": "qSB9oZRtSu5M7HxxnweeMnTjRWNoyphdkm11WAMFew5t3GdhEgGJz1XrSa9QVtsp2YhN67w5QMPJXbjbEY1NmAL",
  "key33": "jaAefiUcJrQBrbdgFAz1rRmYmaVkXk8m5Y3R2PbBNFDHo8fF9CyAnGxMnvW91sZ2AaD8PyL6P57x8MoXkzNRsFf",
  "key34": "4uNnzNtEAR68ra8tSbgpuNyCvMgSpesyB64r4czRx9HnMxLBtNpEUcwQ1yZKMsi7ZeXEaGQJBzWLWtZs4yfZzTin",
  "key35": "4FK2R2Zxncyfuw33ELbXB169RnzgfjPHfgyHgHtEWG7akrmxM3v4id8FupzSYF1jvhCLT7jU47BEZZB64qFbe63A",
  "key36": "4AjtzSGUxXYp9NzRakutteXBT9Y7vkc5Stq2mS2ZspifCMmF2osUmpdcEdMpL8GTw1yGRM6vfwKZhsw2Lkfj96Fc",
  "key37": "5sgbBmP7NLGkRVkZm1wW8iESxPZRc45eY1JiwBXFJG1UysXefBCSpZdrhtvZYRYQK9NbTrdukYexAT3jeMq5s6A",
  "key38": "41DvPCusnKVgRio8d2aUKv8ZCmVG3t69a1nf5iUSzQUg4v3p1HSiNcUb3KRkGjZo2AnfT66ghGtYFCwo6N2S2F48",
  "key39": "5nzSWSXEtG5Cngxkybi4r1vE4psRfbtwe9x9xvXBY5zuhcK67xtmxAoptBnDY31c3snrgLDgsLyHTUfeRVwiBLrx",
  "key40": "6QnMihhukB1EcLKmurotQpdxwpCQrNEQxzUDtfrMaaBJwQq3Egs5AHFqh2Xgnr1aLHw6p8Rn1fARozyMoMHEFk9",
  "key41": "38V4R1bLkW7kunqDoa8iAVTAcS3GffQfvycWzDsW4Xs4qrGEg2b3WcRv9BB1naParbepoQvzcPDSvycng8xk3VJ",
  "key42": "49DkdNqqsRZ2bp5e1x3nRvKGXhWd2jpVmXU5wnut372nbFvGaTM2ZjZuhCMECbLwv9iEUy83FZsEdJf4f98SwbYH",
  "key43": "8V5dHMAXURj3KJ21EW7AVxnktiTJNKDXUkSfqu56QUCu8vqSt1TzUgPwbXnXQHWTP71DqhPC1KidLN38vNcVRLz",
  "key44": "4gDjpuXemKNtzMnwipwe1LYUB7nCCMPv2KcW88AGF4AgrDZRDro4ecMQm758pGcSreecvd5LPc9JwjsStrGxwjZB",
  "key45": "4hB7vijmMnpE53PfgPrXYN6rkRSHYpLMvrBKFXBLABYzbUzdyX8Lsf5nZyTVEKgroC9Pft2bGEmX1nirbx7PcsUn"
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
