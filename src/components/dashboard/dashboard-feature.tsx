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
    "4WqYzQ28t8g5VDTKq6MNxY4DGJXurr9a22vc6m33mRWuZTzyfKgjE2GMH7MUFWfwS6Bv8o4V7L3aq4weCaTP9znx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u4dnKAUi4sNPECF1GKr9sYeMNzpCCTgSEtb6WY1rG6S6HhvnFd4P2vrJ3TJDkDQQAkXYeoDNegcxkdA1S2NLZ7p",
  "key1": "7ENhSabHPd8xgjBrQ7B85jSEuibEP51fTJAcUQPqN689xmooSRse6PasWnHvEh5gzwzCQPzuSDp12Jcczga5agU",
  "key2": "XeJ9Am9mMGNAu7oU2z9vLyAPLMCnw2Th8V6xBnkGKWoJf6VT3REEoHbBEW6G9M5ESzarmxhM9P2PTjuCAyrj1Hs",
  "key3": "2ozEgNrmbGmktrpUxirx3Wcq6A7Rqgh3ohmHTEcyM49yEBkDbUk6KMHXNT9ZczMv9cSNKPqNBp1hfAmgXC4XLjRa",
  "key4": "5UH38UpYbGa1Fe2pMEFPDAvkt9YhLcqzZwoEKdwY5MSXBpMGaDUzt2HvcsaR3NmA3m6Y1gMia2pibwjuqEA8cHu",
  "key5": "5FUeY2o7C5JVoYjZtbP2EJ4LyUUMgv3fHpPFptfsxU9Njc372S5k1rPE8DKHv22azeh762rGWGab2hWg5k5x1FoU",
  "key6": "3MohLMjzRipFoPAwnSw6PgAcEYjKgbYcRnJf3AodSKp4QtT5Rc4orN2G18td5RCT5PVtaQPwDPTazz2upn86g1ua",
  "key7": "Gp1dNbuAeFmBoxpEqTDeUkaeMa22WPVKR2Zq1PgzPeqcZZJrgSQTdy3AeVefeGHWvuG7bZcQYR4Qg722eQAbWZt",
  "key8": "5D2EmxckST6xqyffR1wqUbnFmJ4QqLhjguMSG4R9tbLUTgM23b85Qz5Nf2UMRyZA5dsCDYne3f1Rf4tknrdZr1TG",
  "key9": "5C4gc4wo3SmQEJe1AdAcBdb8sMcLfCoY39xzvf9eQSi6AQpKMnmU5e3pfrUz4ctWHyJPNDrZbh9n64E6gZ2YTnVB",
  "key10": "5Mo8Ag6TFQKQLrpqaf77QXB9rSKSc4RkGQw5RhErJMPRTccCJb89ahe3ydHeeajCDkipGivYcJKtcvHxNiWaF1NX",
  "key11": "3G5D6jw75TWnFLP2mdhZVLQiJSrrR6kbDKhgrK2ZEz9o7MwymrvcLfFe6jY94DYvxZrXkeBeMf9JBARzfRkTZZjA",
  "key12": "2w1dFUaorFe1wJUz7ax6hNYryz1xZUaoujcEf3BHVQpJ1shNRP1oG6Rnzo14wCvjEc988DKzhZ4tieba81AzfrAy",
  "key13": "5zUGFpz8ZeJwCqXaJMK3toGCnS2xLxrCmvB43bUKhsLduoKFwQ7R537gYZvMCVK8T8cXFsNU8ToGgfiYpcC7dwjp",
  "key14": "4mM68jK5HjY5A4Wg2AJS5G8NDHMZQWym8N2xDyNjs2j4bk8M6fPJoQFYcG4vnRv6pisWTm7U3qwLaoV1ADg5ufvC",
  "key15": "WnWv3YyrknMFMExxBUAqkue4j8K1hacWnaM2o4S92qR1FEU6wc2FDshrhNWuy1vbF4L5P71i98irEdLT4LNfega",
  "key16": "4u49fTBxG9vhaLYTXCiUK1ATjqLh84FBTJcjDjHsyS6oAMs94c1wE4DoGpjeamiXZQccuvBQn98oHzySxtFvqE7Z",
  "key17": "5mHme7xCJyzXMQHrZe3MPkDAvkbucCjLB3pUHZYGo15u4Xc5XTUQ7CuGJcecKozBDz3MmmEvnecbHmfdRwL31Jb6",
  "key18": "5FZbaj4nK1NKkmUet4d1TojhEW7M1Tb9yBHDk5cSn2ECfFTxdg1pWQs9HTxmsYotbgFbg9HXH7fBupLc2Jmv9Nfb",
  "key19": "3yTm6aq7pcFoVCrznKYKaL4yWa1RahEmaC1NNmfhUARvCdKM9pzeevfyqjmNRq1fBpG6UjDTejKradZQiN8gBncF",
  "key20": "4hkjLEXHFhiaVKd1vW6xRm1UhNBzpsCdtetahqeNU6uVgzo5PS5Ecva1izCDFUszqMQP4uUQFbXkpAwsKCsRuaa3",
  "key21": "2TKirt7zVFiVHp7tXYfAQfXVgbtdLRpTnsLy7DFtLTzNTpygVKq9B9iAQRt3d2fouRhEivoeATtzi8fFjqw6DFfv",
  "key22": "53Ec86KBMovvYjmapWLi8nob6PLFXEBVcdrNhc3gpTmA9kFfK8BrpThvVoTr5sQJTmYiQT5T6Zda5arbJTPmCS9t",
  "key23": "46AZEyCmwLJKGnKB3ZuU36mm3Te8L9wgcamNLWo2DCEeNUmbyVzecz66npQWMkkF5hdkpqd9644ZHyHTcEtMDzDg",
  "key24": "kFavbozWPKhYXCoYjotu5ievaNebXkLkF7K9BpBLkG7zd3xoqrM3aq9ST2dmGtJ1Ucz28E1z3QjYXkiQ1HQ15bv",
  "key25": "5NYP8EhtvCHpNjfWWjceERNbpCFyuvfBcAR8vqVqEryT1kUdqbGEt6sWHq6P6pbm46sFAzyGN4NWn85RcTX7uxoT",
  "key26": "4WGY8PgUoQfHqK3HayGsA4spaNDqBWGi6E3CtjTnoJNGPzXq7MJ4ibqnLckXywpdARkcq7NMta4RwFKRseUZC9JL",
  "key27": "UrsNdev64wT32uaxfBeqdF2C6kJRW7c9zHhDSHyrmqvKtYxH8MCW9SinEAHguxYcbTTAXSrczJHdY6dHVcaWq92",
  "key28": "2bYFHDyVG9w1PjpZj6BcHNUDjK3TSxibjunFqF1MHLi4pVsZxLAB3xnCzDgqm96T8EWReFDz4xiTKrVzr4v7bwza",
  "key29": "4yVjC5Kn9if81H6R614EDVpryUA1gHvAcberxdncxYWrTK5L27KVi1BAuBJARfVrAjeiJ85P9prCqAexKbV7eLpc",
  "key30": "4xsyFgEhKk6c13zNkA6CDzW7pZH7SUXLDMzUFiQcKmxcX924ZaD3LW2LFk7UEzuXJpXVUiGuVaggqggtayxGMgCj",
  "key31": "3UqidA9ZkvNhG4iQFHUy1Jp4EYcpATq5r1zXt6xSMvDbdnkL4JDjtT1jyv6c7NN9T6DKPTFeymuRiAwQ9JZLYj6P",
  "key32": "438yYKNkS68Z2jJhiSzeBfYmFvSCVb8UYSzEiHLKLjf2HAtJZMFnGuAML2ezSJhehs8QQCa4793qHMNvf3niMbU5",
  "key33": "rtsSe8Mcgr2G4MCLUcR97Sus7GfAwNEqmPNq3ybXpfp3iKeijzsxCB6mEP5S6CFB1S2D1Rh1D87UdNfHFgMvrfa",
  "key34": "4JKEEJ3HmGc2ooA3whpZHq1ZJJrLMhJkq8hAZyHB6voHCXPNBMf5dL2rbjDB7X48V2EkpVPUVubNNTGn4XbGCPH3",
  "key35": "2gimnkEAMVAGLzKPZ5Jiu9CJ8aM1GdL2ric46rUHGgLE6rcS7f6H18JLfbBeqFb1zJRuTpFEUp9RNMaKt9eXq869"
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
