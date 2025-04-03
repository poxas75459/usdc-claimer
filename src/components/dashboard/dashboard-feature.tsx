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
    "2kvkpVW3iTnTQ4JpUhgY68dDScAjgvmt3Rcay5xFkhfkm4Tk11ZCyLpHZrjF6Etb9ZNnihLdYrNqNMbzB71RDgRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kVVUhwmniWgnHPzNw6qQxdeexBS8YLK56MQLrcZ2nC3fK4Zc7cwhKTvxykinmkKW6o65TnA2W6G9FJ3fSJyQkJV",
  "key1": "4LGHmDy6FStRnPb1UfQjiuPG7rfpULBUKX3JixSMwBf61gfeerq8Fg5zpRLms6JYmeHGtQV7khYG9ddhrHarkLhx",
  "key2": "3qVppBSNsGE6gpcijqXpAprL862uNDVUVoXaVVvjEAvvjcUphD16eWuXaeyzGa3AVVtGWx5YydP5WwK6pN6jXzSc",
  "key3": "5yQzcc71XaeCcXEUUSjXT9peiNYFEpMxH2fvhbVnBgPSvqKiz7Vwgwcvg5UDTvMUG6HtwJJeQRH5GrNbpgnbYiwW",
  "key4": "4YMX4jZdT1rfzBrSwQKGKmgXK1YCYqUgWNAhUGpzpybAucLjde8RVkStBg9XEF5uqHrTZQtXUS932JzsvMoidqSq",
  "key5": "3bggbvLDAgRNadRwGpT2ZEV2EMapaufwZfHDh9GBtUnGd2WaeMBUwMGbr3NHf9A33WG4Eyp8yFzdK4WPsTfLTGpU",
  "key6": "51Xnn8CKb5UQcZFxpn3N2a6XaFf6HiuGe3bH7DL2TN8Dep8ckqrxedwShqMBj2UtMQufY1h7F9f2XWWE6fdZw6NA",
  "key7": "2wMYnydU1ivXnm1CJzHV7tKWNpyXHBHYxCGqwBvouNWTnFjrFsd9bcxicVhUM28CYVhXmDqjnBqN2dKztjAdJ64k",
  "key8": "22cmFqjcdfriy72ynDZeWA47jNiphUt3TW4fuwjE34YHuAByzw5Fd5UwRHun6G7mojducnN72Bb6Ft1vtvywDBuz",
  "key9": "2Maj3RtbWzzEJNRjuoeDfhwHEdzVRScrUNbLU5cCRVJ5RN3vu9Dkh3qc28wzvmV7ApdFbBjpXAbDf7TvREfVkaK6",
  "key10": "5qGB66XthS8piC94T3TFeSC7nzYhP5UoHC41ShxByGuMKg9mCstxb2jy5Frzzd2GkcUucCsoGnvjHu7eoVphBbQQ",
  "key11": "7XT1eVuxAYDGzeA3YN1pgg5f63ppxZ85N4BksvUeyUXyQxP6bJt1eRoDasHUtr1dtgiW5EwWkDsZ6HJjWeycGgo",
  "key12": "2neMk95T98w2FZaphfgjpNcyLM3YgURjxYPijMqsTJ4s7NF2TJsj533bX4tvjiiG38rFraFbVyQZcKo7CRUUFLnB",
  "key13": "2cm3vfM67WqLMnpBPVVY143WjGF6Ufuvz2YhUMsmCmNpREetrCozRBos8VoM6cH6D3kEwYJpRkduZbThGoRZbrzv",
  "key14": "34VC5TVG9QQ14x8ogmjQj5wX9UjGmF7Y619EmXLoosdsHuhMNVyfpi6dbJS59pXcw9Mzkx787d9ZnMTx2YmqTYjn",
  "key15": "2dv9XdA2sARRwZ2NXo5kHdQkVzZb3dKf623NLWc6vpgAo27P34jShZXbQAobWdY5zAcfahqXFD11w9U9YCbPzf6o",
  "key16": "3vFzMRBHcgHAZhZBrJriLLL4mZaGqUaASGvvyrQRDtqwWcpJqAT42pYpQ4ykFQeStk6PPycH1NY28QRTUJLeihXq",
  "key17": "2N1iucvFCvLV4eUgCeQg31cg5jqHNjTfEUxcW2Y16ooFq5pVD1DCMjjCcToMknS8LfTvbUf6atcM1nGFVhoTnfVd",
  "key18": "3BkYiSLrK7K7nWJ4C5tkf1Yaiv5JuTEbCcQLaBg19wQKuNYVfZ7wP2mQYFo62gE55EcRBGmEWc3ke4WEZCWdv4W",
  "key19": "2jCocsycvMfST1YGwu3xPWvZur9RyNmshLojZK1yR8NLt2VWzwcukDgLNRK5BgCN22zrDVbW6ZXwRTP5qb7h4zoh",
  "key20": "5ckYbvXHibKSMQ4Lec84qz8WsjyexsSU1xGPKjAmkenfoXqFEZhUwAj1yhxYApCFuksP7KvG8ZveNgdTs2CL87zu",
  "key21": "4SnKkUuhneswGtabipYYCu5UQhzeGGjRcVPS7Xtiy426xeotPfT1GeEsrXQWAwWxF8v9QRtZwTTF34Deq97Amrf8",
  "key22": "5oeodGLuJb2JZLyg6czheAi59EHZAq9bzCyNbgb1VcRgYb7oCtgv4gsDHpJ3JKE3UDcddRhqgFUUZa3rNG6tWNWA",
  "key23": "PVgwRcdYiHcop3dFKEtjJNMzmxchx1K41a8SbbZ1ahwuqviN6992vzqbgjZPWtiSGqLBimcMjrme62F9fYVhQJM",
  "key24": "udV3dqEL4Cye6PAsQSjeT17iGLo52TSsZE5Ky7eC9zc6J43zD9DotG1zeDy3vJhzgEcsrpkuzZE1ZrZqdaXR1kc",
  "key25": "5RZxRetfpZAN6BTL11fgez6v89D8XxpQ39DmGL6No98GuqPd9roZ5t86PGo3GeVTThb6vt2C74pFJ7e3Kqyp1dWY",
  "key26": "5weDPANJzj1dLyMno4UXUrVj4P3ueu2v92vAkMrdDj1oeyVKtAjHzgvqRugVa44pWp57RQvgzrt7j5KkPHccA16A",
  "key27": "DntUdZAoDVYburkYMQUxDrRC35BhPJVEEiC5NRdZ4dgnbv1veF4d8ACmyCnhCeEQJHr7iLiyuViVS8pAj4EKHon",
  "key28": "4ci6qWi77Uo7tKLyrdqesmDQ3sJoLTRhjhrzVNd35LdNYYM5BRynRZ8ohcNxYPjbEfSWrnNt2Jf1kTREhice3onM",
  "key29": "51oDwLJaTFUGb2KFzdsewikMR7FSSVWEAeD25eoQdqmWZR6xoz437g3yNQpKu5v5zEcizzhzZkt1EEZGb2vtTaVA",
  "key30": "m9tFPEu9qLzmEHHb4DSBfanHK2JazYKoKioJu1bfuHdZyqHzfJg83bj5aC3DEZjxD6HkuwrYJp4Dq96h3QMAsBH",
  "key31": "2p9nYXX2w1sKycVsTq9kFNUktkyv5UJ6fCizncLFxQCzkrFoSFTMZo3CcuVgsBLEd1sZoUyfASMRQ8oM3XSt4ckK",
  "key32": "2MHLj27gY6x3fAhG42gi7ucZd8qDcF3x7MWcmPQ7uJK8jTvjXkGJrqQ5Wsf9NSKLGQHx3g421rzExdvtet85qbAF",
  "key33": "FsmtC5GPS8EjKMdp9cfqtuzaD8xuX4KPmunJRdUdEwGFGLkBuX4h5pbYwRCigK6YBS6Q8cizoU92VEFy8spYaXG",
  "key34": "2DrBtGxsYX5Mz68ikn1mn7K6NdB4zJLjZDp1fZPxuru2WcspFeSW2XLJzQ7YoswzWEqAHy36e6TYWHsHsVeDirDm",
  "key35": "5UfLfpJE4B113Mm9JsL5u6ymqFEeysfibDoKuQASfwJJKRRECdRVJrj5J4GGTgq8RAPFfS63JiVcNcCAY6PpwxYU",
  "key36": "4AyiUHzNFCnJmUphheXcmZBqVqCU9vcg73DSvvPPDBpAUXqaDDDUMPUg8KUpCmsB8LNjBeLzUQBqvN3t5mtNs6kY",
  "key37": "2Mi9dquy4zBg281iq4Q5uqSscS8J7pQNDUYvHs3Vz52upLNjbBr8yXSYGV4zDEqW9nMBzVEZpf9AqSfyCKiaRzMy",
  "key38": "24xJ6Gokr3WoexE2v8XGESS1rWCXxPGNLUPK6rSPheeFsvGu1i35XenPayHXhfUzTEhxebz6kZk1MibtGDZCEJ1F",
  "key39": "29pm3txFpS9sXxNhRKpVNG51TQgyNpAowg4si3dJG7GuPKdTJ6boJP8USU93XJFLLWm2r5tkrQ9bZKDpShNcQugk",
  "key40": "431Lq9c4Xq2wusWm235dFoHtUiQueD2zaE6yeDuiQbSHNkDQpRc3XJjV5MUk1TaiDGogWYmZick4PFcCHu6G9Aon",
  "key41": "52T8rrMn3VRvxjQZqKoHBMKTiwguESkDpRitdQc9oGhrWM7UKZYDHVGradphLZug7BtNZXRudjZDMMFLDseUya7M",
  "key42": "GKNobCQtxeZEgK19iGr891r3qcRaEPA5wwuyj2AzfKCgQTT71Se4LMRcWWn5zfcxD8JCBGRjDd33bpMTK4xsdWR"
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
