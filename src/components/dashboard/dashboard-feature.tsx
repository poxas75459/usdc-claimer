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
    "2ukspSkSXyEAtNwucdCEsRuExqDR6Z3YoiQWFjLuf8W8H5qcqqxyGA437vTKAmfnmzDNAmNrQtjn94pyfYpwCcEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qxWuTGcFrntmj51JXBE41S2izEKAzPR5tqKs7No82TmVfnU14uz77U6RtAy5JnKgWs9gDzKAXdFhvBZYGqNn2e",
  "key1": "4W9cxNrKoswHRNjtYyPu3zMrsJ6q8EUKYSv3exsvZbGPfTviyfgWkDsfrtvEVCBssyo6G6ziYTbrX4GE3dv9Xy6v",
  "key2": "2r9dCxGa1JgiEP8vgjofy9a2Kdm13BA2t48cPSxdPCYuiGtXpiBi87kq1HMJhiEpiUuNk3B8GPwNUxiu6W9W1jL1",
  "key3": "35mGYH1FjwndtoBaN518yRtcbRnunHR1XY7w4Trib2dokTPNdKLCnYLyvQVijp2fx2VG7wRfZuhEB9gHYidNHXhQ",
  "key4": "28M3vpXuyiyixY27ddwz9Aby8Yxab8pRVzWeZEwev33NZ3xWSZ7QSi4rrBGgpRg9W1XcfxzDL87zeirjvmuqxZAo",
  "key5": "5qt1ZxJ7SRtA9Sbnv9nYM64PMpKFX6KFfUMXvhQprhzrLt5VLfehRhsFHwUodjpm2zCjXFSmfF5RWgvuAraPtyPK",
  "key6": "4JNF6bB8wmng4j5jq9LEv5yyTE6YfpKeGuqbXEeA84M7jypKgoSbgDmZc5TgxZL9UkQDF8WekfaDZsKgim7U2Sm9",
  "key7": "3aFv3dZnYAXbbTMmf4F5rf424qaZU4jB7oNA3HsU2rpkrvBLoBF2dK8zS4miY45shHQWKcYA2eH9qTYibTbhmXf7",
  "key8": "4vcwD1ZNko9EqjjpVJWs6xkPxRqq5MwFixEZFWRjqu5bAxpgcJGKiVioaC9tHTaYj7Q7mKRBd5W3ofsohm8ZFxAw",
  "key9": "4YXH26jkhMULCyq3tNHhzCoGPMd4tFyUtn2vNquJLLssitFTngHxhoYWEcX4Wfp8fmNx1yxHsw9J9GJNbiP6JRYK",
  "key10": "4x5dUvC7tVnAMrWk82YhZpLbR5m8NA5MSkEE56S4mTzhWqp2jnuAzPDBtZtrYhsDGzGz9CoMTsfcikjQH39ydJ77",
  "key11": "oxvDjsbDpwmarMoeShGXovpQLYmxBZ7YLznqD19QVbsKTSRadFp9i9mKCvfXUqtzDgujygJ4N8ndpzTGZgpcPqw",
  "key12": "3za6RzK52aA4eqdGneGwrMuevYGWcVrVqpKmyHG6iZVfKh1La8QqwTEj479NX8SCtcY4qPuerhTqhqr1BjE3VyeH",
  "key13": "jt7yzMJA9h6NF2PSHMngMEUFXFN7MYBXuLZQBF5w8USLkDJgkcxCD5Ki7ccLa5aP9m6Ba6PhywwrbPpqG1PYAhU",
  "key14": "4yQjSiwr1Qkg8Thdx7ixgseKWM2LC7gYm4ZnywK2YHmDKpryx8F4QoVHEo73iicc5mGYQmNfyDe7rs1cD3P5Ztew",
  "key15": "2BczW77tKWrwNwFYEDWxhW48n3scf6CQtLZBZwPDG8SoxPmZ1hURzz7Bf4jdGkTQLD2ztpJSoaaw7qgsAohP5PX8",
  "key16": "2HoBsmkdZFNYykc6MdSTCd7AJx4x8Rj5dR4qwWaeM5d4TPkDgNKiJvmTfksbyqEoQDmTfvehU46L9x7bVo1E61js",
  "key17": "4qm8Kss9QiGucEsEm3VuEio2dq4uBYrzbWyFFwTQJT76QjxptTU3Ns1hpcbd2oexGTdfgwDC1F42CE4wQowJanLY",
  "key18": "2sJwPW2VcXRbyeyFFbj2JQTj4kNoPQkJgYVuWExjqCLaopoyH7mPUJY57gMh7s4fmgD74aAA5xoiYbvh2J5LtwX3",
  "key19": "2wyavBhRQpBuGadKYpgEZgNaxoDRKgw4PTFoP1TciV927LLGPY3WHS5qVawBXTBJwzQRNP7WD5eum9PrxY87QUDH",
  "key20": "4Xrm3pSvDCHiKjZuNJs69fH5oZM45KmwiQwHoMyJrUAVgoHbPx8EajiPeM2TsXJmirEaArahBQDipnmnXtscRMex",
  "key21": "3MTAemSqYVAHtqP1zEeMHKYXRwM7j1mg9vnvNWCWFDNrSFGGeAfqzXzPGvJRW3ubwuCeQKAGsNKYqvyhpBsKGrux",
  "key22": "5ydRaTPUyxx3ZUGZ6aCG8H6JUnB8iN9EkShqfHakUAaRexEm8wtQJPkPW1T2EV9csKNJQFtz8ZxWHVfExGptxqAK",
  "key23": "4sG576XnKFZdHU1PRt1W8KRqSTQL49bDzskRopXGfAW4rmU6H2JQeh36sYtZrpdhiofBgtVr53AgYxv5XorDwVQt",
  "key24": "3tcEfok1tGsYyGL8cKHY5EndEakc4w3nRE4TULoeiLXy4xHEt9DjrjRVzUBLWRvMtwHnpjU9LQoJK2zgYrg3sWWN",
  "key25": "4ghAB5SPi5rrm15JjDiZySAeZBn5XgLGFwQQHgs2DFJzn3zLj1EiV43ktzzJmTRQzNFrvLs7GQuLt23wcLLEXf8J",
  "key26": "2nNQjAhPYZqBXonh1cR1CpuyCXa7EwFYvi1vmvp9Aq7qaefes83ppjrWkNHPqxx4nKshtTVgTv63zaHdvQfVK1CG",
  "key27": "3VoVi9iEGHNGMfhY1zWWAcWDk3nQtnaXFVgSCZHiRGZhsiBHnN1W9cJuc3gKCUGtj7Dxgxj9R4rvac7qTwYVVGyx",
  "key28": "4hxT1KMw5G1afCE7ie8sTxTc2QdHx55hq68113DXxxdu9tjc3JGLsNMi3ocypaDmvZtQ4HJMsteN4C1c99wQN7XD",
  "key29": "5z3kQ23TYELsLksspNQvuXCKgH6UNTFiEnmdpVrdgFsoTxRceavb2EjACpvWcMQT9WrfFxNRHVaRtgG8gDkoBVjS",
  "key30": "4k6aXkAKixUAHjCQrHQhHjXLh6q4vLWhHWpSRZnByiJeEdkpU2ANyk6NcpQsTvf8UfcfttAkQQHL6eeTmbBPM3P1",
  "key31": "19RyJgsPht9BhrpzWWjB7siW98EkRjL6TrFivwWjLah9JSnt4KyicwYRNTQx8dGDSvJBkzWmVhtaGdLAhhadWFB",
  "key32": "Ko9HJsofHCufWTigoiTnpgUgrxqPegXkRJwjR5UQNBf3bGT8MVDiLd1C7v9gYABNR8ToxhDjq76SvsYciqL4nVc",
  "key33": "gJu6Jan8bVyoindrwvDZsZ2owLtiwfWEa1LrXyUA16VMZUzxcp9hUYnDiqYboiPzJ3qRzXRgKeCmebUJ6kusufC",
  "key34": "4vYK72sRxWKtmUnRQPBDYoUcttWFYB9sBPReUzXcfJ2eqrvR5k2YYVSRceMyU5mUxMNmwVtaU81HVQteRNNAoMPF",
  "key35": "5wBYxac3xp1LMQ7QYWif8sZgRDQBVXVbp39Kzv6PxrHHWuM4cMGwLP7ko8xWx9HA6nveTf2GpQS3M34NLR1SzTLb",
  "key36": "4RGWT9QbrKLTndFQnyiwgnmxLMCGQCm3kdNk3MCac8ffBHVDgG1gTH8HfR6NsVzqkERU8DDJ2yKuQcHE6BosDhvN",
  "key37": "4FCthxjJDvCga44afgrq6uAxW8ETbEm3fEtHh5hayMnNZG3Tcrqs4Dew1vwhyJB9AKC2vSvCEF2rs1BVyNYBR7Ug",
  "key38": "45ELPuXYSGR2iPR3qSFknQovkyjCmuvmrQ9mGze2mgD4ARuro7r9ycsdS5FgdMKD1dan1YPjquHgzbz1iGVDhGuy"
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
