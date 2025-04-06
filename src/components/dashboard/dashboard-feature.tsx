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
    "3LuhJi3hqvrMkPyVSPtpHuFoyjD58yVZRLCupENLTnynBCXafNEZj6KoJq2Hua4ULBJu1zernZWmKpUzigGA9bGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEVN9YoBEmX29jvC1xD97kWWHYkTHAgfMzwmKym4gAYpQqVhft55gfXdWSwKfSCkowX8x6UBQsAYtExuya6Qc99",
  "key1": "DkRe4iXF1rS6VjxR88PGX3uDPEedm717og8jGe9YJ2shEgrNacf2VgjjZypSRJZr5vNNrS4JxumdYTHzgC4MZ5c",
  "key2": "3VrmSsmqNQ4Y1m1UqYo4mm2XR4xrXKgxuiyoGPDp4D42MRt5zq2UUYyfkHuWFMGkGrBKB9wBad5vNJytwkKK2ubT",
  "key3": "2b4YGo5bKWKZzYLHDMZELUKVDJej9dtSp19E2USDz98mC8DD7qstexomNyZKfwbDZE9QKuYosXno4HaeBAGu7cMo",
  "key4": "64VZYFkc4FVPENoU3GJzxz71WDxwZajMmNEPjGA4mFRz6Udatek4jN2kS7Y5RE6NVK5pXNjFS1YJfDetRx16n6QV",
  "key5": "4CQtnnweLeksrtDiQxcmkrGD4JuRXrcJsWH2ZoJYbsaCEXXkdxzMPThXd7kpTFZFonrprThxxMpoEfrDKhurdkwJ",
  "key6": "2jXFS89is17a7Gh4uHvxWcbkDb5KgXe2q68vTFu7SV53teXuQeWQV2DM2aB7fxWKWZKgLFAq6dc2zaT21D75M8sR",
  "key7": "33XroVReHdfiSAuELtNNPzYLZSEfiemRCorHsAvjTg5vw46XTVSP8nhXAYceKCP8iLUHVMvn7bLSkrt47LNERUJQ",
  "key8": "awDTC85Tf7CLBdyhGxpc5vDkRW8mdv4XzCbraFmsRZEaJLYeCFqRJE8DE3mbfs84SsJB1AH8xHLEf78zYZeMt8H",
  "key9": "4njTMpPK3J5DmCp1oB5TtTD1XEZ3gjWq4qSLCvZvG9hVizYvnWddGnYBTfXLpmVLyCccCzhUY2K5EnaT4LSoMv14",
  "key10": "4yMTB9unsEUTVYM6q8cKkPj1NCwoTppicqPrzwgcYqEfFBKHjqy3KDR1rHes5oyr5AdtTprMDVcTUmVuUoGfo6nC",
  "key11": "qLtXWbYjMWnL6Sfg8jn2n5hywTGf42eggLcvD24LPDzQTyuh3h2Psju9GvtYG3yzqv5hNCMi24vqdME9s1Q9Ydv",
  "key12": "2sFCBRMCzUg99K1MQgc8keHwUmRpBZsbbL4GeaLyFy7hmoY4HeApU9zQX77f3T1eWK7AZU3qHZV5P6SGjCZrzVwE",
  "key13": "Xr5bXonAxdiNKeRTbt8Q1vNpXB42sT6v9mzYK3DL7tasuoe6gLpERxX8ZVMtJc6U9aTqvrc5oELJ7VMotNXgcN4",
  "key14": "22ZHQRxguCG2mMZy5JNYeUPPyLkQMKAK5u22rYqiWqEYEPik18aSsLELBxHd4Qp28Z7iGJvzBubDTatP9Yuht6k9",
  "key15": "NJe8Uq9SZwQ1CbECcLcDLusmrawiGAzmyMc1eA7Czxd8SZmP7pegVY5LJ18gb73ke6bA3sVSEFXairLNVwjwajW",
  "key16": "3w9fBaeDyjpb89cPZRUkdiAFHqEU1d597c1jAan8d8Tn6GM5o5sTsUTzurT9rUdDNzUK7iwYx45hLzfsGJWSjveJ",
  "key17": "Kx8wgSuBDA4BK64VWivTNSJDgRbq53DPa1qgni3oomMf9uimvfCVhUkPXgsVGCAvXqd65qKseo8UCvfPSMB2EvX",
  "key18": "3yYiCHeN1iw7pCbaoV52TCb4NemBBS85saLWTsM72W4r66njT3z83PjUGFphDcR4NK7xQZdSs8cDmvya9RQMxMFG",
  "key19": "5gES9jE5peKS81R6EMePEyMHW2ecRJzJTgmxsjwm6qvhaE1JeFPZCFxPn8749vkecUksX1Pxsx1SuTRgjdthroeU",
  "key20": "27GYBVjRXJw2paNh1bx334Ahc7no6HYQfrDpC1U5VjxcoApn1kbgVkuyFot3kuzHokgiUtezQJ5aa7ZWQ9apJzjd",
  "key21": "S4zf4ytrFJsvjUz9kVxr6qNnayW6vd238sQnCQeEbdDu864SH43wGi7XFbzAuborGa7airzBfgYziRjUuKkbfwD",
  "key22": "4NiEuRkkab7CE1Q5TJZmafE2VsZr6uN6kVh2k5h4MFiLfnNiecXh6SZ3pfajXfmGzKzfMd3tqnumDijNwo3ZDfja",
  "key23": "5QVeHwu9Xjce9Ar3t5xFsmwT2DR8GNXmaBDdaDtqDQ8osawFbRwuecvdUzXSZRhVKXJtydJjYPpB8BhyJNjpgAXG",
  "key24": "42ZThLWYsbrMz9AN1PkgveUBp633P2TbCRuf21DHXuSaR9yusbXSm2EQKqX1nGizK5TwNYQ8rw87ExQWxptYjic4",
  "key25": "34PP4yk4jVJgcNs8HnhjPxS4KCHR3qV3NNyNBKKoAvWF44s1qQPJD6oVc6LjzDA26WpDpdmRJYu89Xv6dYB9Djzb",
  "key26": "2TmMsaDAz1EBuLqe1Wj5ppRVsX97iTe2pXkX3iGC53oNCvZzdNHaykcqq5c5ppH8o1q4PBqnji8kz5qx12W9cEKb",
  "key27": "3XiGRUK479aTqBLtjLuY2FF8fS2yRqjDmYYjZ56MHUaNWRSmDNRyukdHWv9w5jBSHpvGCqEJAQWoBV9S8g4zK6QE",
  "key28": "4B66kF97vKmKNwhcw4J3TJ8bJKcwtFTkSSq1ZGM5CjAV5YqTiphBX23VjEDU9hp5fNbr5sxpDAhXrCSxviM19wZQ"
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
