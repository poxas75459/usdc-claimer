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
    "36mckHvxmFKUBm5b5fniuN6d48GycRpKs1jyLyB2F5oRWqbHFMXQvEGapv6o6niLkDQzHqPonGzKStUXmjJsRgS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gSTLs1rHNwYRk5mzvWQKBiCqWKYdBYEKLbmsqkiHF4fP8rretgfw9RZ3yqLRoGEmMbnVPTWzW5m3HxGM8ewdW9L",
  "key1": "3cSpH84LoM7a4c1Ws2YYhS4QsxZAjPMiVnecgdYtHxNcdpkiUn228nP1TTXgrM3aefRAWwBY5pfFBdpYJiWDDVL1",
  "key2": "3ASyqsphzxXQgProce85Nd5ioYzhYshjteATeU6cqyScqjAqbziiHujrR2pc2irNzswKpniUwyLNdRuPP4YnRZxi",
  "key3": "638TqD524nThiVYFkLtZ8NGw3tVqbvZvgYFr2uNPD3Zh5s4XS1DrMAAcPpTxNodzNhHPMeTNMuuvjph1kE9vZ5Ka",
  "key4": "UvVFAMYn94S6EoeaamXFkmzTEigyeQnEtrWeCHKWhrJVfxJvtwnwcai1xS4BvmpBF3FwCRojufNhnd4wzw2vDzv",
  "key5": "2GQN2KyAEX3Q5oysCdyniTZdjTBmxv1rXqhXv3oqUGKc7dANVjqnBQENxFstDcbG1tp6oCAaayqbT7dyUPuhbkxF",
  "key6": "3BiP9SmLCD6iPiLB8TuMbTh41nEmEnYD17HdKsu5gEDd9yorCnnTDop84rCDdnktJDeohFiEdZXh7tUQdzqnKMae",
  "key7": "3SA86Rv3ihQVtQ85h7A5w1wzRnbeNnnkH5ehUEmohgW615TrbvdE4bvTqdzcM6YvMG6uLT4Y6RF9pX7VLAf7PdH7",
  "key8": "3BEKwn5qcvv6VzG8pkPKVjBUvTYvRgpx3ukYSJwysZRzU6EFHq4KL9SyaDwXn9Xqh5pN6pFaV2zozXAAWzAK363M",
  "key9": "uLwqvnGScqsigW3Y3uA77u9MrPsxxUsTgctQGuisGK1eNfpiaRFdzkmu17f9iKSiQ9n2Sg7NNpJFMoQTcrUXkRW",
  "key10": "BXHKxxeSUtRCozkkHWJGpxkAso9h1a8aGYmr2qUVckNGveCLYuags3mpmEgH4ZwYUsxLLZ8uzjWjxtXMF1hugip",
  "key11": "224MH5YebvECruxkHZnSB9tMc9f2RssputgU77Z9G69egwhFVRu2jkSBHvmQ2C69zTKZWuT4JJWa1Jo2tDjCgVVe",
  "key12": "4K2i4J71xc34ZcesTbE3i3f6ymdhoAgEiaVBfGknBjJjL2mAHNLbVLviKBrertjcT7URUmDurMwa6sdrKAPmsmhS",
  "key13": "2RMyGkjiHoyEV4E7W71Jaf75oqcfbGmrG6mJmPHadtctfeH9J6HRVyZqmCPGpXeSqTSx6eHFYa4mzEpJv5myxP2o",
  "key14": "489z2u57b2yvWCDMGxTiS6g7euLEdWcWFvQ77D1roVT4qXwzZFnDXe55iQkfUPgKFrxmoE1zd3UXcRSXWcRbXppL",
  "key15": "4kx3kXbEF7CrpvbFqsP5kHnb83nZNj8k3qRd4pUCz5yi3f2wtrXEXF165hk8wdRfBPtwh1WrXY59XsMyTWgCKEeY",
  "key16": "5RTj3XKubnUCpgiX3vS24uipKVUDYVjy8DaY4y46SrVwTcDsRbqrKm7WPKeBFDTKVirYiAm8ZwzK77vArFqoBgc7",
  "key17": "8Y4cz64Hfe42TDLkMLr37NyzSAW4uNMFAp4eoBM8vzCTNbPFSoYaa1A2F1ZvM2vUsMMSCEUeLAwh1vL9Q3qW3N5",
  "key18": "59heHnaB3kTDqtogn5oBq9jRZAJ2E8Y7W1cH1y2xsuoBV8LFs99g7goC7dK8jH3tFZfUBM5FUpP3vXksg8Yxakes",
  "key19": "2QCQcqPs1TYtrmXA8Q2ikwZeCpTD9pBz5L6prmT1BFrMvR4KDvZvQ9sfGVJpYFFzrF3bR4vvEJbpkQRmnaq1n4ZL",
  "key20": "5uG4xQsyxHs56RKtUEZgNoEwRYydoguW3FcHrJgyNM6zKydA378SDsXqZ1warBtofuTFrXSNAJj7AWEYbX8SkucZ",
  "key21": "5c5fnfK4Z9eo6Tto5MSTuufabv4WbxJLWT5guVKAgwcYSgZrFa3jWnPrbzTFTwytKPmKX3rbd3hGjDiQNNDaAhuF",
  "key22": "2zpKMP8TGDgSfkLuB8ThwhkTdtJymTRr4bR1N66FEE7nPBUUKMJV3XXcRGiyduTYod6QJQwzZZEsYN8qGmREcUng",
  "key23": "41vdRJt2ZujuUMFi6FDyxfgXCvqx8RLmd4ehW7gf4tSSoqfhcoEYCGSAkdYMkDTxawGtTbyqwkyAXdcrqfuA8K9z",
  "key24": "2eUCBCXdhu2VjkePm8fkStNwiaRvCQcodwsSkPnJiH6r9fA8isMkiKx7RSmaCNm1zgWyPmfpfypY2dFcAqKPLH5z",
  "key25": "24ZoWvufxza3RvYmUrB47Z3U73UGycjjKRY39VKdr4w642dbyJJRZkckssM3vY7eVFhzBkYQHZTTrUEykQp6HbYb",
  "key26": "EQ7N8U5EPUPfNH9hs6yEp8TC8oZ92Bm9DtXWhfZGBFDdWRYKKmb5P8vP88aXzJEpnctEwgED6we1hvouhord8dJ",
  "key27": "4pqfSE7ZkcqHzJe4XkahXSYVVYkUpozXPi4ME3eXhCPDosfv6Mp1prKF2mD72Fb9jMT1Zmh7vABA23qjwQCMDFgf"
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
