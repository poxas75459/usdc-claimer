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
    "3eEzHaHBFJ4w7S86DkgjkhKBQSC7q8xmft6HbBUsfx33UstjwjG8EBw3k8PJQhJHVQLwnqt82WFHV4msVN1Xy8rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SSyso5WqDfTEeMPBSCwiBKz1m2nTALim22kvSYHppemmUvdzKZSmYdMZyCKkqEigzWP4zvzmzvrKwptGcCNS4pY",
  "key1": "2KxTyx6YgNnsCh7mcYTRH6PpJ6MSAHhexB6nQduoQ2siXXaf6nS7myawJZkNAVXJPUN2Svw8NRuGV2hW8MXW3FUT",
  "key2": "3nqRcC2jUKPmQYDXCcF1d3McKA9Nde7ggfVUCHJzFaBtLqL16U6jnf7gQzxtR1unPxcYebvsBCD3LHgcXZBbd46g",
  "key3": "2nqEaR538xxBEqyCvPLSRz2CXEXjLWPcZi9Upga1aiGHPt9mdDiYSaXKVd4ctbVjhHm8Us5S1cNoXgEkAJPXrrjR",
  "key4": "5Kx1emVwr2xoYM8PsstkuRKAFGYKLkav6a7QkBibTSeQsETFg8i1q42Trq9kyh9x8BdUH2Bf6XCQ3JXXqNtZpRXz",
  "key5": "ijy2ccKsmvvrG6osWpYdGYsESU1AMoADPCo3Z6da2fsDn3pYsPYFbrUsKb6hetbrYLfZ9224VN4NTRFEZQRG1ea",
  "key6": "4nQPDbzR2UkUPbTHsxv1wAgnCXcPQXQc4CGuS34Xm3eKeSjQWMYWjna27ac7HoJ6CZUG3GdJEAgk9i6QhbAKdsTX",
  "key7": "47oF4gp2h4Hji3k8rTKJe5AJBfNNAE3T7Se9vgFp4VjBZhbS7eVqBZqDGLhfx8WN5XWJf2PaVxhp7KJSoJZ9Rnex",
  "key8": "3dW7W9ZTbapas3Ax5Gs7UwhD64AjrNj22aQi7h5T3khvwATgdCUcKYJtg5K8RHTwsMNq3xQLeRHe5XgMi1YMtXZ1",
  "key9": "4Kp3ZzWmcJtRBjewfAVikNQb1xZdGZ87znTs4xrz3KjAKP4wPLD4HiMQJzBtCSpz3A9aohz7MNmCxuhByE32LmyR",
  "key10": "4vqGRuesEviJrCSNx2ihf3d4XA1qHxy5FFYKcwWTgHuXQCrbyz4gQPUZhBLmQRowv8uWBpMyCKFrciLKm1iTDn3M",
  "key11": "4VdvGTykJxkANFyNpHTcrbUvbU1bKTYMn96KN1351v2C9QhrJkba9y7ky13UU8CnFKm1ULfXy6yeXCcSQpY31erS",
  "key12": "3xLEsQjF2hFmMj4cuu3Y3KSU8agLUzpbiT2dUTvBng8uNB3CHNKXa7PNEkHgugYFRkgfqFUtGrHaT3bh5k7mn5Yc",
  "key13": "HxMYidvuAZyvD8tefxgFWxbYCy2aUqwsmas1kHuAQkDwqdDFBMDFphcbEmybaFfGsq7NYYoBRyV3jTRaCgBvdom",
  "key14": "3sfwJCthBawpiNNnB16MkCcnRihVmYCv8n2CEidX3C1i92sfuLK85nrBUBhQ3Fo4vbHQqfUSyDaD7sYZ8mF51kBG",
  "key15": "3iavtqrEpzEAfmz7TNW4qTLFxZ2ix8MUJXy7FyoSQMtSFsJxFhRfaVb68QBQ6jmvfnhLMFxuc5n2p4Zjv5FqPMig",
  "key16": "5DCNZuF23EZwhW81pY9VpTWFKZ4VZ3LRs1s9CYzBzZg2vCCVWvt5GAYB1WzTzbdYHSNB5txEhSe38syTXdruFR45",
  "key17": "2QBu8oJfWE1P7FXTTScYcjbNC8SnJ92gEvVMxokZafC5ozHxaqSxGJB4CPFcXyTkRAvUb75vohhJ7DndYte6fjhA",
  "key18": "5CWUQoaQ8khx5z3pfHLYkPehfQQ5sQECTmD7uEvA9GtqRkfVdVmpXafVW72at5EcscFjrmJEVVDXF93M2LMJygiD",
  "key19": "3c4tjZm4mjno6JJUNbQB7sA2dzJtt9gmSqSfRkv8jz2THo5Ti4WzKnUQkinVTpupr5xBwSg2SWA5WzjVpRC3JAJs",
  "key20": "D6vD37zr7775iQh6LcBtzdxVXUp9iKBusteFYKgZ7TgX2SBumDCkjWkmvio3tpNjg1oudhsdJxAk9HjscBri5io",
  "key21": "3qWVgCMdGsXFmYAxCQfSnWmdrFNcJwsewLAsD7iyEVQGfuaxpJLT5D2Vr2Jg1zKjHKcVoP25ANRufn26QhWdbVWe",
  "key22": "538okiqeHM3YJWwhu7JGqaxhWxW7v2nHjwjziwmfwRXVHy5niUa4bmmJtfg7tbUpi1agxdNr8jMsXCBTdxxLvUVL",
  "key23": "MHsNfSTPEQaQLTJQREtCXLZX3MTcAja1k52kwACa2Xku1peGG5JHyswAHXT6iWftMm1twwTDuDjGkz9R5Avn9Rm",
  "key24": "5AtHTrFcjjsNWenEnWu4gFpuNAABBZF5Fs79HDRWDKsLf1spuuQqmMrt9UzdPXzW7zJQG7TaKPw8mAH3qB5WEq7g",
  "key25": "5UeFQuzPhoNjFm2yeXoKEyMtAkBbJGZpdJoJxYZyzgpxDGM1dGgdKjF27SHoLz6oZ7bvrm4zG4v9mpASmincj9cT",
  "key26": "2CfFBekkEDkEFcdzEnpAixKscqcj7ddz5ThoGVJZCJa1zs4pojK7hYYBKeC6ZHHMXjD43bxPsWAc45AWz9Brn7eN",
  "key27": "3kQmy4xyUzXumaqdi8Ser3eFJYtaqcUt1bE9FfPMnvUBbKwWrDLHrofq3f3ftNqXE2G15Q5eixKpTu3z3HbsqK1g",
  "key28": "3wNTrJM7w8NyouhK4PUS6TpXAbyP6o6dK7e5jboWSYUWDU6tmxub8Bp9Ry6qj1RkAtSrPNEiUz5RbbhXtFac3cAM",
  "key29": "4Co3SvZYdncxiqeqSZX6kjjb2spn6n9XjUrrPq8uAUcEgHpsyNxFVGpnHkuFdJucxjk8G1yyLuGV1fYKaKCBRhua",
  "key30": "3mjJo1L2YeAoGyq6x6SxJcoYJJ8qZYZrTVeh7bNdPk2tEF37brohYJaDceXrAXgUq5d18axiF3MoMwzWcgVrLJhM",
  "key31": "4k4i2GWLwNeohQiggCgyXRnsai5NuJHNMa9rHrvWNFs7yYKJgpQWdzF8Yig36XEh7Xy7umzmSc4SwkKRXrK3jqE",
  "key32": "2DiE7trkHm3KgJc6gXrLsaV2zFLH2k6Pf8RVZi1QgSngADfkgveewmVbiP4k13awEbBq85Vu7xQVQr77KRqt8ups",
  "key33": "3SSLXZWKkWR9r9rFgxLXD8GjYWwASEuycBhtqhPzU6ieNwNdYQeNXgQjrqYv9EY2TMmyJckVSg2YK9UKGVR9PnTD",
  "key34": "4LQHGSiFujp5uXF4qPizLbQAqaowTFobsWiqb8192rhVVSNmXBr3DHqha4xWLLvJ5a5sphbUkeBFJphgzqJPrpVx",
  "key35": "3M7P1GRjSQKfmzG5axuigNK9ETkz2ADdxHdk19v4Ygai7HSi1MqgE3PszkWoRcRqFRb6DzmVqUV3uGNKoQnp9hz6",
  "key36": "nXts13DZoVdxY7dMAV9HR4dRGznCqo17mUFLCrzN6D8yGAL1YCkGBT3AVKXqZ7zoADuFQwQPnjsUeRNteTFKm81",
  "key37": "2b7ZzJiaw2DYGwxqofJCQjEGLapc822NB2U3xDQL5tTkjPwZvXycadBXW2GLpdM4Mdz6Ag51UfyptJbNv2PfLXxY",
  "key38": "5oZkM27t5ZZVMc44fSgP9Z5r4SQV3BXSXs7x8fNspXKsvyHS6dmEQ2Lve4yr2fREARbFByF5Hzp88CA8eBKsAmeb"
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
