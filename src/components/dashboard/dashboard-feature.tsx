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
    "kKdHwAZerobDrG93yHZJJVzRmfjvMzuYqe9D6BzjgMXryGEaTWue8cBTsnqKystCPmgDXzcd65jzuAUEsnvg2MF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPYJYarsN3XTQ27QwmDhQLQeKqTtiQsuSVqswiDN76pKqTyYJFfN3xAapweV3thhAZ3PzdgBwfTcYabchiycy6j",
  "key1": "3Dea72cG2R12BvLJjxMwQGGitqXZFQwfo2mfhYtmKFnvuCHgYjombjRvChrrmjBtPrFfMnKpD4cLsGyo6ZV12x8C",
  "key2": "5x5Zrzh1vApDsA3FcvLpREAPf21Cg9CPN8LmRCb8VTFtwPbZ4uJyjnvKNk6XCAssNTn9c4QmzmwzRFzSSMQ9y9xf",
  "key3": "4Dc2JYDwTNWX9kTGWF4bTea7oJ8kK354fxGaA3opJ1uF1AsTSbwivmedWbKHs2y6LTrQ4wfiBUM5W8inEF1ejavp",
  "key4": "5RKXEH9BJho2C1NGs8UYb9oDbvq6YFR7Re5UQi3f6q5iW9KwXweNtPcu7bEMUiFDQrD5yK3v3QKL7cqyPbNc4Gvk",
  "key5": "2XJRLXkMVQHGvQVGPYMWFgeK2k9n8S5G48VW6S1kadekPSsh2zNJpCY5ci9jcmFp2DzLHNV3jezBAd7f3SEDbshL",
  "key6": "27AdWiipcUcTR1H4pE2pUwHkeEbA2pr7tRNHmt15gHFEDPPmoCkphWer2Tm4omL92mgxnu66vUQJvYQeRYPUPT32",
  "key7": "6RqNxyV69z3weCBrR6Vr5q3pdpGDyuJhcKmFCAc4HjFAgc599e6U4F9ucVug8BizjXAGxfcKgBC2bDGuUt2gj59",
  "key8": "5X2TxmwT5QdM1To1UkKShCNqYeAPGrrfMBMWFPTs9xB6QqjjAewjvgFN8hCM93QiTYSGByUUy3fPgtoNXcHjWTXu",
  "key9": "2g1zj853LQHvzdk2rHP6EwmhcbDSHLGbVNYY7SU5DtVKgnJ6yvQoE7XSajDDhtwSX7Fx44mw9x64HWzdhB7KRFD7",
  "key10": "35Nf5m14LfPd7DxxnxU6bhdXpeM3nkJqzgtEtCHNsvgzufHgcfSiUbFY4FeCC4mw51NKjDDK9s4Uw8JRYZf9bbC",
  "key11": "4g9mde734ACBRBDKB82SBukDbsxi8LrkWXbjo3AT3xeXgV8LGcn2mQPki2byQUZ5iJTg5CouV7ibD458q6pDfKMr",
  "key12": "2gWhbAC7RqhvZwieEnWZPdw99Hv8gNdmjLhRrGAn9ZNFx83mgBcDLnMCAeKYqSwiRjDbsB8axPyZHvfQVHBLZcbd",
  "key13": "1PRmfJLKTC41YPYA4PkGQ7dcKyJgvYqHzwNp8YkbNZg358uajdM6D2y3JE1WPriJz3hjnA9LPgdi4nw8ygWLAfq",
  "key14": "3ybPxJxDBe7nP8AbcKBMLRAmo8BPgPaVtaP8mwv4pRrY9y4nNSK9PjHUZQZwEKsCVrf41vHs1SKB1FD6NHLZr5f",
  "key15": "3VRaC6ywJwa4gNv8GPtq1GCH5KVd6cL2JKGXr2XmSbC1SF3JimzKXhzpHPNVFq2NjNWs9AH7Wt7fnCP9viQyadRL",
  "key16": "24vLBeRPeh6HtyfFEeTQkN1YcwSUWXEGgysoqpgLy8bb9is7MhwqeMELcCn8ys6jp5CpmNHaQhVDdUJiGxLQskzq",
  "key17": "2FpoeUBoWg7tT3p62qXBtgaNnGUzw7kYoqPa8adzTNZD5wwyMiS6K2Tnuc1x36mDdyjhBj14iki6zCfuLgz2Xezb",
  "key18": "5LU8QTeZMMv2pYyWQAKaoPzh66HjfhFJmPgb3nAxjMEs7HU2EWztYfkoNTCKvWtKN1poWssbAUTdJZXxm7PwbJPs",
  "key19": "5YUNieB3JQUhy16eTAH6jjtiQbmEJtQPnhnmoMMADZe7h9KoAa6BWmRpahJtgDp8C4f2HE7vqo5m3zR8Q4TMzXx3",
  "key20": "4bFXKkW2pyBrXKatvSjbFnznUwKJ8kCEdxpM1L7Li6WvCDA3tv72MPC1LSnc5ZLbThLcoRufQfFJhDmhCZHPHNn4",
  "key21": "5nHZgkfqJvSvcpZhWdxv3nZ6hZaWsBrc7enxibY7vtGJXNnNuECYvKfCLbF7WLToHTidbLsZMmVYLSzBUQJHt9tr",
  "key22": "GLhbwrvKFAKS95N5RjkE17VgnBxBc2fZGuxCHDjzBchFKQkWo8XsWZxreSnzEJyU3zB1Uc7mpvMuXiEGcHXAA1i",
  "key23": "318mE8rPeNHetRKpoVEkBn5kVfnfxbFBArt7c6UELmfFWupg3bxCQik85Z1qdLvAmLyVEjQWV66BiLncZDZqYXQ6",
  "key24": "BtTFxfnCSPxsN6W83XN5pKr2ZWBZvSNqFjUfvgTVLDKnx6Vwqh6SUVeK7EKGrYbPxXBwaQ1Vvrp2fL5xxN3yvdE",
  "key25": "4wPw2wuEerLf3dpuSpU1GAGtKzeHgJ31jkQBbz2aNKscWdw4nG5YMNfSQVG8wxo8fFg1BnBbCaVbhf84L2dmbVcL",
  "key26": "222fKsFrk5z5y6ofqcGW9TN2mjG1nPnAPWSaU8hA2f7YmTHZe7wwATychm9fnP8DimUV9FCv7QCXN3mYG3TPiGCt",
  "key27": "31y6e8Eitzqx3WQ463orm8zs8Rd3uW8xQXRdUUsYWXeRSD1WZ2REVqfrLrMtxKC558xAsyMyti3y4ozzic1jQ6qy",
  "key28": "3gZfsp475PpHFLBx4b4kZLiCeLRusHNHuAzN1a1LzTVRn8oVzUBA8X8ZQGvRWp19hqUsyXXnzoJZLNXtrSTNHcx1",
  "key29": "5ous3JWrzRamJMYWcr1tftpetaa9MYjHFSCYZwjewL6UAXv7WMyxDB4nLuCaFqYGkLGakVKVdp8E6jRzrdiFmAzb",
  "key30": "5SXZbkhD3Na6sSWv9XWv4ZgG3CZxnawLw5CkHaRN3NiSirNCzZkAxmRt65PSzs2RfLoX6HedyyrPdJYSgHMZZHfg",
  "key31": "2S5zr5smTVgViQr8uVAsDe1QjPtACHmw3DBPdH4XK5CVBi6qkkBAifi24mdpf6UHnC7qProefHjHqLamnRWFSzgD",
  "key32": "2QXpPUh9N4RsvgH8Q9ieBMxuHajtAxwy677rcVM7XrrRneU8VkBrUHPf4YnyiS4XC5bBRydMyMC75zKRHZ2cKDab"
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
