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
    "38rKPVQare3E3Zga3HjVhupifYFmV47Sg39vQ5SMZiASLfqiXgb4zULzo7eQ6u9KTXPYDjUwekU3DCW4q82Lfist"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HatBfKDKyLDigSuDYZDWn1RLPVzjt6XycLkbCud1hhzKBi44WSXFyfko1VFY2RUU5pFwtkAkjgqDEPToHA3aCB8",
  "key1": "3DF2C9iQaQCAdkmg1tCwJbRWsNVy5SnpJWKxEEK8kDh6XmMKJ1gtVb2kDU2YWXGqGjzAq4azT1a5v7MyzRVt5KqW",
  "key2": "535rQYoc2nzVS7icMt3sWqQ9kxZcZ3AWtBU6PgrZeXsarpbYwv3sdGZAEkCzxoej4ykKVqvcSwXe3ZVofTj2B77Q",
  "key3": "qc6EWXWe3pwYrqCUYa1rrHjHcjkTmP1Azw2Ah34qmGAW5Yax7hHMvgoosWaGQK5MhQkr9w3bYmk41ikTsrXGzk4",
  "key4": "QirSuXLE7bDh4s54913jpMEJuUsPogZGv7TKEvuuknC9iDWX8HiCFHaCudMzcYcNd4g1ecNUD7L6CWaBfxbJSWw",
  "key5": "63hK4D1yKfyNt312X62eavGBekWLxdGLZH4ztRPGtJAKixnL1uTbGoBQVtb5brLGkYh2KGeH1kRENPVCa8JhcnL6",
  "key6": "42c55Htj7Kik8zDhWMYXSVXu4eYrRe9AzaSvKsaa7LkaCPJExZaJAJcZNk4apAPn2fTr16oC2oNvnxhepz8xF8LR",
  "key7": "3sxBSax2eW2LFCnW7FnC8C7ZEaVr9RTELkSLBdVGu444duJxWN9tdpGHYp5dpkuEDiZXvDzh4UqxcXqGiVtiZQbb",
  "key8": "45zjJcsrzeH5MjhHH2nzYPmpdk5shhGfNTkDjsEga66jvewSAXiW3WXv6sKcwNWLQzbkKcKim21CMc5tmqJHgdQk",
  "key9": "2kCAtnDRZnw2hZTz87TRpx5tZVNZVZXMxWq4hKcJxgA3nFFeyQbREJcgyiYHw7FZ2CErbRxFS9Tt696Ar8j4KUcQ",
  "key10": "5p4SbYFb4GNcShHket91KgWwxPyT8ZcZkJXos87WbWuLB5Rzk8NqfymEWaL8vAvi2yi25wB1W9anK4LxcLeCNhRA",
  "key11": "5yqoxMgWdALLWz8XooUX4CRXCELmHwDSawpGykic6kXpPK4jhRg6vknhxPWnvNvMtM3zjT5otvD9jfE1LpaEFxYR",
  "key12": "3zKVcEt1ShgcXK6MrNK4TUGbnbRihASiSrKfR9XhYQKfiCGZUx3feR5j4TZm9zBSgzS3SQftQnLCFvchcjFHuEbS",
  "key13": "YkJhB7gXsmfZSWKAAjNQ3KgH5FSU8aUc3Fa35mmLxu2v5ziHCK2RzQejdM92KNHFqdYusoXTLWLk22iScqi9fAQ",
  "key14": "Y4KftTpfnZv73ApXCqa7mZMXwPMRgKhF1FP8pN8mktvsb3qohKncaMsbn9dX5kn1dkxMxPZAPioy7M1tsWU1TiR",
  "key15": "4jUzEzwaD7ZpSFopLMBcuQaWJQ4ctdu5976wWeThQRBLA4b5FwUYRAkrNySRYZPCnTn57945M2X7XS8SAu4Nr8mU",
  "key16": "4sF6FyLHt9m6ZC1FveQVy9rF9eCva1wexkGt38N7iNpsH7tEjknb3749W96XQj6qc9rWZLRufMXYEsWsLFVnLpxE",
  "key17": "4BPHiV1KDYZiGSm4KbmAsFz6rUz2s9SEkd5b1f8uAc4nUcWtbnoggquNL8WiXAqqXDLndqkTJbYEshBMuyQPeSbB",
  "key18": "KFFrGNwRrAeGRBzqvczPJ6xUckUnChLsTxU4s4yiqdSH7Leu7g6tUHCRRW4XVnFDHLJdhCgp1GvRGDRakeWGJD8",
  "key19": "2B3Cz2u2A6QqSwPGoHH6KKC3XorHGV69qRS9kLcRFyK8V5Ds2e6tFxBLzEvQ3A19gMfNHhCqoKY5ShJ6veE9nZnh",
  "key20": "2S5jMbY8CbLXegVHs814fNhfJC93B3RzMJEDegnVGq3pbpsW6B4Vma9uLaZeFMpNoajV6eZwNCfCqJapV4nRgS5f",
  "key21": "2r9rrHH3vAQXUU5W3X6uLdmbncSvpRZtus3X6E9yJqCvgMERw8vYYZfQqt6kuUQQ34CziFpgt49Mmw7WjckznonQ",
  "key22": "27pAa4SD9Bnn87w8Yw22jL5zYdSeLSynvC9iJBpkjnhdwxYC62zuSkTTJFdmLgNngxJXZdmUUQSbre7bGi2AVuWn",
  "key23": "2F9Yq5P5PAkBy4W2eXfSwWe1w1R16u3R84nXuuDEUgd1BUAyCKcz3hrsc5vfwYt4mNbkYqnA3Ntavasn4pCzcAFd",
  "key24": "2ePT57TJRtzVuXf4xRAzsFoyvUjDEtiU2uG8tcr2sSUR3CEN4s2Fm19tYN5hw9RxrNDhcNnBV9L2FrLieBAxQp33",
  "key25": "3zUckUWBxVi92n1jA5wwP4VVZnJbqnRwqFRVTGhPo4oQGiJdZM84o9hoSBSK1kGTDwoSziJQNXDAzHhBoqt7JFM7",
  "key26": "3ijHzBcpyPEMtSbRCNEvLVRisC8tA2nWmG93V9M1qCwhFxajBDoFgnEAp6tMgMTZcPckdrZyowy5kg4CsaHoGFiz",
  "key27": "2s2qHPfGCyP3jPuqzf9fQjrtViApfswkKfBKs9CV448Jd9fxALEeSHXmRSedgKrbjv239Q2it3WcJDkgXfLDc1xC",
  "key28": "24eAaoHexbzk2btE4vnnpqsVSYM34iMW9UWLEc6UrLXJx6iiU7xteBQXiqCLcmwBUvwCrLA6ARYXc5jT1DNd62N7",
  "key29": "GENwPUmfhfxc19YRAZJhn4Kioh3BBNN8U1VLATKFYi66SMLDkhTyLsNM73CJx6bRzgFQwbu6Pg2PFAxVwvhRbYG",
  "key30": "4ZLhyAeG46CyHk82MypnMphShTafnodbRYbMUpCYay3RYR7cZCHBv8iZ3LGYrrUfHzxCznJ87jnNq35enxXraMES",
  "key31": "3iCUeGY241fcXFb6kuncbnf6hUmY8AV4b4VEsvH56Zv4k62cbx8R1uhybQsZTsRfXcYfpATZPHE48BD5WWQdYR8L",
  "key32": "3EnKu2BkhGtxUq9atEhwg33usH2dpWwjkp5MDoBBmbcjQhBPNmdpggv9GNhfjV4zMwkjRxWbsubmc4Xp6meEgrm8",
  "key33": "56yFL4jrFCkY5cuptBYmgSkLkJLxWb3HEi9GE9uh9dz3vj23mF86gdxWKPMrFCE22xgWH67C5sBmbR6J4RWenLoU",
  "key34": "2Zm6kxpFoSEqy9cVga512RZFiMw4TyygxX9nTHes4Dwdfkv8rdUtoyWZYyPLZhstXTnP4bYYidC8bBDijpBUwhwL",
  "key35": "iHxTsaDTw41wNbKTeH1t8rX2pMxbvsTS7tMm2sNyi8hnwtEwcAZncuLHnjeXE8e14YcVfsZ47Zbd73LVKoNTdS2",
  "key36": "3m7ZBfrpNgeqazStLy7uBZhfGPx1BK7dY6yiDRq7emt5xNiUVxTMeBayTscfnk7VmFW2LCxWJJrSGQ8QM65Hywto",
  "key37": "2QfF1ZnpRUMaMbkQFJ5NYnBShYnqwqJPDGri3cjLpxbhh7uJ9ct7Zgu8sChTSnCMEo7Z9ud4XwzvsVpLN1rZmVF6"
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
