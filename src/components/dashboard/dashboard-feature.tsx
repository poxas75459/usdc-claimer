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
    "36YhX8Cyi676r9BnGzddzVYujZ9phqXG5ZvSnvyeDSmiug7HJaJwxcgo3gqWCv6LZuuqssoMbEv3WGGVC2JQ9dr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4woJCGbjKqbQh28rfFXCEwj7HCBQQyiSpeQsUdX6hCi2HgDUyGuVZpmSVdZihmRuBnBd9zwTQ9jwAZNvWwFKbdi1",
  "key1": "4PBPcNNezyrdCYJvX9gFVRXA5ubdS8gUWFTQGWgdamwLieG5tc8Eiq5op2bfqeQcrLju2VxR8zMNrbvEj23GN7r9",
  "key2": "6ch95YV4X6jFjij9EpTEKnELTUe7cnvwjw7D3xU4PWu9dMjkQqcBHdSzGJLTbdsVcPGKzHnxMDfWjwNvNDXe3YG",
  "key3": "4q66ndJbBDE4tuC9Gb9G9bhSkmd3v4MDV1XwgKCzv2MedzEjhzETTs7fKFUj6jmQRPqbzBSw7EZgCybdyVxMydmT",
  "key4": "4CA5wWaTDdMimkeTLW21BMbVNPsNvXRgQzFcE2TwT6qvwvoXwy5trAMMcgKwaRJLctq1a6JTqDN7e8XVh9qHWCjZ",
  "key5": "YaPGanx8nosbs6YJHVa2BbdUP7qEEJzkiP46S9Wi5eFJQWEJK7QqtqfD2fXXgaMaainzw6C5xA4YskmF6h8xZYo",
  "key6": "4YEhoHr9A1P9ssd5qGTfvFKtQnpcEv9SAD8ic56NuBk1gGzWNK7adaFjV4ziofaXUF1rBRdvYjpprouffTgFPutT",
  "key7": "68m7ejiLZqKwzmydVEteNcvCGVTJhPxoM6Fci49pGhkvHFFF9geL4vyiSkmnsBcXDonNjwS913tcgiQ7uZCUmPC",
  "key8": "3oWVpkGsVsRAsoWcTfT5HLd3j43Y2eBZRFpZdnPzQKCMoNVkcuA85FYdwCzs2XAx6c3zZDUCrD2hA6wAnZNi1tDB",
  "key9": "5yjzRfP9aGPR24VAtT1E3Jm1f1fbnNzdm6UQtzwHZkPj7MNLQ2X2fpVBPv5WDn2g1e3Ruj5U92YyfcenjBoQaYzQ",
  "key10": "2VZgTmuZtgqEHHCqN7AGnCTiibU5EJjeiGj9A2gkDFgMk33MRqcW7hdYvkLaC3TTWMrP3WK525xdnakaCRreot4v",
  "key11": "2oAZ2zmDTYd4Bwc3DWAfz4SouBRNxudAGkeBX5rB1kyEepEesq3c8rhCpX6n2mp29r5NMjoC674Mx3Z4UhukQxfG",
  "key12": "46a3TwFYdEuTfrmaXvr9zMPNEUa9BhSUYKxrqG7ssZbSHJUUDkbsJvdAsb3YarKHj6MfBe3P8ZRV3QghtkMJV5AR",
  "key13": "3nLHxyTRpYcYqnygPdN2BhCdxWj86AMq3cuwrNbf5LueGXofhGUDyEkwkagKUWt5w76PGuhxSLCfTGUzFvPUs2UM",
  "key14": "5pnQ4P5wFg6qViBTcQ4dM1ZQbCL6de6NaEVXRrwC1cTnzXJgvqzttMMaBrCLouz2YiVvsaVkNwnGDByYEQgjt3vK",
  "key15": "2u2MVAEWsAzFnyRqqETmQmj4qURb9S76fmrUmn7DwzhC57mcdFEPn3SKhruUXK8ZxdGSPAQ2SNnYvtD4Lbupanz1",
  "key16": "3REFS3YGADFmwTchnRB9buMaU5a1TodiT95pMBh9nje9iXxKsPTNZxeFKzpdGvC6ZZftwqeMFeYsXgAtPNe8fkJJ",
  "key17": "5Xyw2iz7q4DYTbJs89jud3NFR4votKXtvi2aqQ7NDz4MREkcFHR5J1LYUnrviEUi8NB5s7bDY5pGqtwsyyGJ4FXT",
  "key18": "2DPDFq8epwJCLVo7iZicLjq2bkU6cj69afLGMNRDcDYZqgzzRJKxcxYe6ayYFk3bgVqqeE3qWxWUcShmRb1naVSv",
  "key19": "SkGj7WPH4XLTQPEF42UYj7JELfEJznnCtakxFzyP9m2GNvSBpQX9ALCcqvsXBd7UPgvTw8NgLHmaSQu8PogZ3bX",
  "key20": "38WQy8LHSnUPmy5Q1ucxtFrPQznCYUTXDBs9EbnL8wjrQXiHsdbFdvanKo5Cwr5BSurjt31RVrq25b8bvTz4YxR8",
  "key21": "34FxBworNiZJNugSNs6Gfhpb6d5DNGUXiexvmtcYXzh1ZiMYXmV6H91kSr9KiCJPpFusES8EUdZr3FYLJxubKzpC",
  "key22": "fjcEAumuYGtSFyuBxmR6XAKGkwjYaaUmhdKadJXgiVNL8TpxbrRQNRUzZ95e9sX91fZvksQW2YsQ2iVD8JpBn7C",
  "key23": "4UMidjZkFNd3Rh6kbFW6iaE8nUhZxqh5XRTRXCjNsPAsffeLFR51R3jSuDktc8g9tVArMycdLwKNfbmUA79Q9W6Z",
  "key24": "eFCdamBWMooC5pi13HGdSbRRPAx3GMxNnEkSvYkddphbHr3Z24WHoJmj2cPjBJfUn6FA1rPMET4pJrx2GJ8y4sZ",
  "key25": "3x1boKBzXp7y4Ht17XsBviwUkSFjknqjbaN1qCU18fQLmQwkXXy1eNkntZZwjBnYTY8kUzaxyLeGbfn9oR2FGT8z",
  "key26": "FBUbjS6SZnu8rq4vHE8uNv4aHzfNifYftSXZSRNxanHAMPepDffKCnqjeKQp7jjhzK4RJyXuigtypRH7LwT5BeF",
  "key27": "2oWC5AtkAzRKBmDW5TJ4eM5BMKMrSLdNZXm23VRREjbfnC8sj2QbVLmPxooESj28L7g3NU4NGN6ZL25nkrBfzrHB",
  "key28": "3PofBpqjrw6pESUNuLGqrgQQeZcb8sgoYmLjTf2XSBG7miK8YTSGfqzBHfgGthmNWGRrP5iwcRZXKEvGFFHY3236",
  "key29": "2eG9GBZwKtVtWzHCSwRjss1P8ScdPNwveMFekzZihDAKBnCMWYcnr6oKpyK66KAgs9PDftLcyNyAcZvVbwnrbgQZ",
  "key30": "3eR4oWsDL1jwQdsSXa5KZE7oMXiKxhFDE7xjA7mP69qUbsntrwP1CweYKv6z6UfPA6uNSR2Fgz55tBqA1vLAkmaT",
  "key31": "5ptwfp5Ee1Z5Yb1y4Ctz76VrSDHsCqcvMy6YW4UhRY3XxJHT2w63bDLzLydGa7ip86M1EDGanQSgQkBW8hjtVGMG",
  "key32": "61gK8C5jY8s97qeXqQtRbte7F9GrBg745TLcA41XtfZ8w7MTHaJwwoYZ3KAJjeJnJPxEJDcfYe1uvd3pB23pKraK",
  "key33": "5pkqEfRHS5YSZXdb7kwM58HG91F9u8PM4gK18HQsGNB8SochhTd86q1BCHWJgE9p4qwVS9168cQ9SdjQo8Qp4j4p",
  "key34": "49ge5aJHE5Ge9MuLtiRb367J5ahEmjfu5zSKZ8svBsA3yNnrk4RCVioF3GAH1goiPxqrN4SRr8J3S4edHmuDZm2n",
  "key35": "4WeX2Zu6FPi6pRMzMdSKt36Udo4HKpmmTRA7A7ZUSqT4HN4QNYSHsTrKtLv6K15Uxq7JxR3pWk2d5f234e69UAHk",
  "key36": "3LSvJMmYhRJwJdFx8tZY7BCarcewec2Y9utuCAdAwVHsbMoyZ5zyMvyVe9EVDD2u3nmXV1URmCR5yoffE4dqhzov",
  "key37": "fairwYz3K3qPCXAZHAcxFj64rN48smVbU3XmC9WanXn32X7uJdLBbuSFGVoWCHtVBfknezdZQCTnwyu5RfjWv1S",
  "key38": "2kWyhCU9w4N6Xv7pVmFs1dhVBMZwEni7ek1JY5ccBxw6AKuqURN26BU1kAGqB5vEf2bmG5A4Ad1N9wimP5hubqV2",
  "key39": "2ARdKFogdJec1VNnR9p46nAHfmd2QbUnRrVVG93zXYeee6bPE3rWQuCGVBtKQEksB4naYjKm2wzc5RbK5Pry2Evv",
  "key40": "4rop4TmEocXRmTHfcDDFKkPiorUEBP3RkfBPtc3xaPnuityzo3YXX8Eaa3reXmoG75xFnw2e1iEA5UDdazaFfL6r",
  "key41": "2Dhn2yB4r4MvMrbLD5vVHozWoK4iCMMGXyUdHFdA9k2itkKSkTZdXPJERGUXAMRycL2qT7TiELmjrzp1Bbw9vTyE",
  "key42": "4FgnhpEhqNNoCJiz2dGtoqFXMZqG6ignGqEWKLQjZxCpeW6x8mG4BMzf91GJmBHDsiGH8EKJTnh7VkCkxywmmhCa",
  "key43": "3RyHbdNfAedhUbkZ5W25NVnJS8Spo8e4qwqcKuNj9qwfEjVdzVxdqa3xoQWPwrvBi89vq4cs5oQXH9VgJE7b1hm7",
  "key44": "68XEuyLS9GisDZpfaqzFj63DS5aD94HmY3AY9LF21nW8uG9hakZs8xNC5mryVT5zDUbwE8Er8awmLutKg1uxWBU",
  "key45": "ZtM56KrKJ1wxMrm5op1Cd4va57qMx96wJhzTb1tnSzzU8WygQTNkMi4aH8YDiUQTUp1ACf17j3ewD6Q8t7cLvaC",
  "key46": "5BU6qDsZ9ehr8n1uVc4pdc9HsLhj1JTCuwYvrS2svtiKuWahF8JBfrVXRqZxuHvAtqgzqfopuNaWtnVHLVFmW1iy",
  "key47": "3sSQEtZj84rrXty3R3iqZeXmFU2afBmGXGzCnD1byjXnriJzXSEUSgQE1ygV5QrzRtUBxG34QfR8J5xz3VQcmvu1",
  "key48": "3Ly61m3PFVXX4BisU6CT2h4S8qtNKa624uP7zVAxPN4nQpiFMkky7AmHGTL2Lb3SPwq2zpbGSJZyngh7PfifB8hZ"
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
