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
    "5NoVJvpn6LsfzeZ8xEgcjsL38zUjbh4mYXzgQmPCK4FRDghpcXjc2P5npKoZDP13REG9NxXSDwhQKaq9zMbQjSa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gKQMbkzvjjLmjwJKuLaeoTXUiKeus4AxBK7h73uQFDVhE4Rhf9rKQ6VHPH3XJnanq96fg1kY4Jk2qKEA2SjrBAJ",
  "key1": "46E9VLLTGVMUqU7ZGAggjim8LZdw97xnxRZytJ6nU3PDX6CZBhNTYUu29ktVL9LoWPpJhwv6LPsrprxUQU79wzES",
  "key2": "2EM6EvrMch5Dj1is7uspRdoBne2s2e4opAdb7dXS1WHXcVkrWKXqLNWS3X1PpfQjAYuQmWLeLBdaaNQF3pjcRxai",
  "key3": "2YCE2r1w1CRq61s6qLRbWb83sFbdgTf7RYX64uNobgUEf43seKy2G5rBzpVBHNUxo6qbvXV3Wwf3Q8veYSgW3pjq",
  "key4": "42TT8D2RxZNUmazaV2KWuMUi9EhKb7EWESijTDDq3tCpe8j291EhKCxS6z29gpFncMwrAh3s2FYH8YipW9d4xp6t",
  "key5": "4XyBRfQETr7YyUwm1TA37WERG6Ma9EHqL65tjYC4qB4TZPiTnvGGCHtbZtzrntMUPaHLjdGhJduQFapGAB8FtvZz",
  "key6": "2g47PNY6hmopMsf7TtTsVf9CNcTn7Smemq7WLVReM7smTe2LouXp6REFddMuWsNTtMSLNsASX8afDaQFB5A8iDHC",
  "key7": "4mpqfGhWnxWdiFYpGFxi1emDWmde3G1DSz4Co1FTqtKKcJaqc2rkjjFVrNw4KmARQD2kiC7VqZsuK3KR6CicLX1",
  "key8": "4wm3WhsSY7Gdq7yG87wSJwUFWxsEXxVY5RmMF1kBrbXr7c4chhaHq37A27WcjGa2DDTtPWefD1J5SyPJC7jzniUL",
  "key9": "5huohw9Qq4KwYFGmPZfKYaQRMCEPhcE9XfP8XixWh1pJ6nF4Vs86Yn66ynAQ8Euk39uUPMJLRpYWWkk14nEkLzTx",
  "key10": "2FJzkar5JMiQjBh9vPMTsazGbWuTVdKm3khaArTkBSYcprTfrf1bEhJsDxtjaEaQFaXxe9Mwi9td6KDkyV75npvM",
  "key11": "5TaRgoeBVwiusVYCLb7TxoNDtZdoZx3mPvLf55igPEAkvfv4n7FMU1EKFZAwzWWJd58GzaYAyFGYUiCBqn6mfhdb",
  "key12": "7mbtLACbrM3xuL6ooJishUrCySL6sbuUN3gvYYrXv68y4g1ijSZLyKs1P7qHbnoMbuBda3khxjo4RDxAiPRY1CM",
  "key13": "2uQGGQhn7cAs7cDegQXM6QJhYCGrDQVgSx2HWhHnFJrDef27LLmukCD85MLNeXFmP9Yz6bQUhY5tyrt4Zv1AWL1F",
  "key14": "3tBThbAYRvDEcazN2DhsyNhvgcNbcJoSHSNtFuMsabVQYtQHBtvJb4uTxsWLXarCibAzveANZiEXv37xYR715GYL",
  "key15": "zYteSSS5TyTYKGYR4NTy2XBWAPw4yroPrNGE63j9gTyGmXobyEJazFTXBozRBb5gFpidwsRoePJjgKY6F9fv76B",
  "key16": "4KWFohUAPuLUoqXE4yMzD4CwHGUBBQ49M5rXTweQ8PYDutS1ZK4tSHeLJtMun33bN1XMC6UCe1BnezmRC4cJHUjj",
  "key17": "2PyY44duu7v2LRsRQuZCWRKH8fsg8dCyFWBPUmrN1rmkJXFKwQDeK93y8ncw1rRFDBMqUHF1sastRToFHsjAAJAH",
  "key18": "4fwyqwkGRijwzxmazDmq28sNmCBTH1i8Ht3pV6k2EKWdXrNa3efpJ2pT4bRti6eTbN1mERoLvCRrFE25iSFANTkd",
  "key19": "5T8muxnGkDeP2H9XCqXVpHYmpua1fJHKy562NL7xW3BK5jcgJD3eVSt1FxeFenvZ3r3zBABJgJvdpnnNMPJDQgHH",
  "key20": "63ePsRW5FxkUGTk7qBUQ1cicZPFbnNdSi5fwF6i3rkgoJDnjju6gsFu8xsfQdQctaF6ZDxn1px4Y9oJjCGCtuLTR",
  "key21": "5QNHdQ54ZLAX8kXTRSHG5Gn2X6CbtSu2unZdXjq3g4muzUTLmdYUXL2kzPNeJiz2rsp14RaxFxZdyN7VuNNUCGSr",
  "key22": "TZdLSXLosPNUPwvvgJwbVu13imDkZiVavPm6n5Vnt6paAj3uLgcAZCHDqCXLcBZV5era196AYTFBJmRc5rWvoXq",
  "key23": "3fh2811uE9hVM4V2UuKcrnbVxfg6K9W1RVH5gujbXRPjqkViWYTgdScaUmEJYsXemg6KDq7SgfKdVWcc6jhWd8v7",
  "key24": "53vzxAW5zk6hMipgy1pWhWMBL4bovhqQZ8aNqgYPBuiQfsgHpVNGuv4KrSpJejpUp9ZiDHhL9RMRpkL4TKyXriaE",
  "key25": "VTQrLDsAxXwJWzUN6yJu9bnNfB1iGuL64jy7oUssGjy1wCiQEGirstAcdroYpHrDmpUoK9dN6R7ege9LJKhSXso",
  "key26": "LvXbaJt5YHHPFc7TcmXs9BzFby9AgK6tdETL1Yp5jpMkUoMT7jPY2ATtb2PySM2wQZT8aM6vPe6KrbbUrazwUqc",
  "key27": "4RV7tn23TtAmmAR9gLCuJFxALgncGwZZa6hN9b2dH7kyeqw5Yn49h2LJV7gdSY93VCh3aNAAihKjecd97CchvVsS",
  "key28": "4KL866GM8NyMHDNuKerUJz7pSAkEZGWr4YhDZgK4vqEYja6yvzZKdvzydJ3o7ZjtSkBRpzd81nwuZhS4vhNhBYD4",
  "key29": "3WCZ6EaMtfvfdgrQVYzX2gpY5xmPvX5sjzrZqfcAvKP6veRwVj9wTMLssNVkfsnjQcVJNRSnQbVK3qxtQEYoZNv2",
  "key30": "o4QsyjkoX1fxPeowEnUnz9PGVbCwwmPVJBqWfYeNM5Xmz9RAVq9ww5phXPnv9s3dySL4QvLYEBRCYd3TeitfhnB",
  "key31": "58J2cWz3gqtpY3A8ovRUjNeXaMZDL5dfG3GE3uX3zzMbSkUQ5S4tZPST6gLhDKpk294ZXmKcPiEZ9QxqQK3E2PFe",
  "key32": "5T8KMnv6kyUYPMSfG7oG3EX5kk9uYFot7eQNAao5AqJVc8Gzm3umZNXEiE6sGqWrUNAF3ZNNC4bjs3agYEfhNWAz",
  "key33": "52pp4EWm8k5vZuX8LHA9tYNRuJc6J6vNmS7ttPhxspX54ecmxhQx1PpScSmkZp7XTbnVLuVkj5UfLr7XJUyqwqvm",
  "key34": "2eV5PtkEPKGLZfEKqid1snKDqscZhwJtbxAiNernHoGMztAiFQyuaDuMV9fLhvwU18sfvFgLwJkfYpbwZaABuiV8",
  "key35": "2pTP5kLsFH2RTRTHHZ3qHT81yXGk2iRAPvuNXTmkLv8RJfR4fRgoz8RDUMn4aLW3vqoKor2CsoBN3roeQ8E1g38z",
  "key36": "2r8YuVpFfaiVg5hawATB6e4oDw8WfCqZvs5dkr4cdQWVvYfoyV2rwdMqAK6eTUEsJYLSJCkQZhJsYqb4tukzr6oZ",
  "key37": "2cRGPYmSbQpjbXPJ6HghTiJGis4EFksFFUfjyDTCW51pq83yyDpLYKbrxaiKiLNHa5zxZYWSGoFfkvXKdZEWJDUe",
  "key38": "21HU2fgjsrfLMi21dJc5ofbos2fqbmXLri3bY6wWSyhpRCqXjaxmH4YWX6Btc6pMjDzhk4MnCFW9yZpiafaX4emS",
  "key39": "qH3K4Xb28ND6o1Bz6ggKThXzCuHktyFKG8hWZo2QLt26TfKdjBoZxJQnLxwwTgXVdQn1H3Zbztcqxkp5BfJZ6fU"
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
