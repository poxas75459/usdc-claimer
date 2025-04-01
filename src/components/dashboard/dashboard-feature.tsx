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
    "5tSfNBFsud3gzVVvJF7FsnFGYxfZ565Q7PWJwCWyxGC4rukZN4SSB1rmEA4iWrcjtpapS1QJipm5zfirwE5EtnvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e93vYVRWVosoDkX1FeKFnB5CFJfw7BLbSH2s1qSa8eFTpekePYfvDLaNoMTiiXU2e4Ud3zRsP9QVxP9eg8tD2fL",
  "key1": "3L8x3PxWb7i56EH6ZRkFMP5kC5xZtdx18TKGKDvqyK478dbABCKiYpLitALCNub3yzX5b6APRfoFDD9d872sm8qH",
  "key2": "28Vt4kui9xiuxy4edaFgu49dvjDc7Cd8pRw7UVtUHBSes4fvCYVdcZuaiGcUYQvW4y2ejza4JmZEDyy2WL9WCxFx",
  "key3": "3SasySSs3EsZkHodCEf3ykWNd4mKhTpK4oLyDeVKCVvVxPuPayf5bjrPs9kyq5CKR2ijdmJrPg8esDCUsHrurrkU",
  "key4": "pwMSucEwcERVnyGYwQPCU87vo5h8ejw13zVBLeQBbtxsn1mNnuNYao4SDZ3F1AEWNCoGTNBigtugSqd3pTSjFiY",
  "key5": "4He8Z7xGQgu5NDoWvy1hVBL51LfsmjvV3gLZqjkgkyKCN5vptDF6rhJMAAGzpjt1eHTQk8xsPmZHAmxT9UrWqRxe",
  "key6": "3udGKvSdrVqbJCFG8MK36mW5DP4cwmPj4LY1cxqKLaEcHhCTPhr7Kd8izsTiouZvsQdv3Qs8GZAaRq3cPWoV2ZX5",
  "key7": "5CtTJfPkvDsxLSMQJsAiqgTr57jWw41EBTPAUCzjDEb8RLdSssHHiUZE6kX16ze3jB8xVDKnGEfgcWBn96jNJgCY",
  "key8": "58yFd6dQF8iEK8y5dMq8u32RuGeCuSQvBPoD6Wc5Y3fTjzZ4DfEhcB5HTrnoKVAH4RowUJqePu9qx6Xgm95XRTRB",
  "key9": "3sHaLSSj7ZVpMujsRXMeKDtw6CnRk2eybsQSnpqpyKhxJiU3cv9kdrEQDsaup58F7wibivfJJRCtTvn2cJAs4MKu",
  "key10": "35T4B4c28yEjhuNiAWLLbF24wQB3R5Ke3bu4WfJXXfVGzebHpFKUQ8TRXVt3FujuuJATszEiRrbEG5DqeJabtZgS",
  "key11": "56vKiB5abzddjk29yZ3vPFN8C1QpotaXv8tenuBJpXU9YGByhuUnJvpMuJy8rjT5iF1SXW7W53er2Ayn77hr2273",
  "key12": "3eTRsTag6vSKzqhjYeBT2dRxoNw4YRGFCc4gWzkf7pjtbNYDd248N7pyjgoDg3SGR52QDzzWzepmmGqjbFViF9QG",
  "key13": "2fMgyUhipPXfdbwrigYjzYgTVF5BoeWCkbCZdRpAjoeMini9KHLNK4tThJ6wsjBSatFfR6PPUFU3ro2Qm3mSZSBA",
  "key14": "5r2ecvf6MkMFTjM5UE9yy6R2FUyoPZM6ZqeHLJtvaRy28xMCieVPiuaSRGrU7UejJvZQuEbF7mymj7ZmJLWRHars",
  "key15": "4NReCSNuS3ZCGAj25SN2sDftS14tYfp9dGMv1kTD5KmQoeq73RZ3JSRotvncgsHnJzJkw4ApSsY6tE4N62SKeu7p",
  "key16": "2Wib8UeV7yHB14tHcQPZPd1XLrFZyEKybUaqAKF25idsn8sirmPmgKkh5MCif85sBCg5QuFzSUdSEtjsvTMmM93z",
  "key17": "2C7dq9dAQvNv8YcGKhtRVW2xHk1JKcvbVekSJYHx1sW8HB5bhZgSocjkYLwC9xeuheKzvnSERGFiN8AN9s6Yrbxj",
  "key18": "3hNMCwVfYYAevjgheLSRkLLnZyxxDWEsDmRMGjecmrja8ZMMrmUWRbsEo3RjUB2vbjaGZsCQBwUPJRP7HiK9SMaB",
  "key19": "3myK8S8Epsbc5fw3y1iG1DwnjjxDpeFJH8m2Tp1cfiPABLBCjuLypTLN1e1gJEJ72D2am7i5sQgm1D1SeFGEFQGh",
  "key20": "5ymjmDyWZSKYYZcjKM2Wo744TK1BwjPDYBitdBc5sDKyGX2VsaUEsVLXwFXhbiyyEJU2s2mvoKgwEBewDtzsF1TS",
  "key21": "5qoRyqkH8CcShctSidqMz9GoZmwYsAsvgmnmf1S2NKxUx8hqZo57xoZPM4JfBpNBfaxqg5YPuKKoRq55wMP9v6K9",
  "key22": "5MTUBSxNtL8FKvzjkzikATxEtdRfqU7Nh3EaTqZG1r6JG2CgwNVVUGDs1x2z8dhqLe724PHzignv3kp3a5MnXuMR",
  "key23": "56kx75qWVSBdcs2VGjkBVncaSirHwhgujGH7xQQputHDisyqb5pnpx61zpsLAyKpzaDbmEei6f58mL9nnReuEA7q",
  "key24": "4K3jY2KhaRk9pqUGpJvR85uTf7ETdKj1QrT2sAJbDMFYLcL8Msj2d28MrhTdE1L1mXMpScUL6EESXAx1jjZ38QZW",
  "key25": "3qt6yJpe9yNsUZKD122SqVZX9yvNxhf7UfuHLgugzavoVmqEM8i5bvEME5D2LnrU1QvQTSifFBjH6hKpfnJWxkj4",
  "key26": "5F8gi1ijm6aJxcfcv4Gfz2ENgMf7UzgJFQoAF38NusAynTjUhPykU1716xEtzfxR6cCwrfBLTmmGXAWPqqjv6ger",
  "key27": "2ZYJzHi7gYpvdi4SAoQ7hZvdk9Ycj1EEgJqUtKavB6PgmGpRHTu8zHixgp7wC2pg3rTTdNm3ZeqnUHKc2Xn6zpnx",
  "key28": "67mQyNHzrf1pih7G3iKuGtAQ2PP44yop1pAGdBbqYoGYBUavjTzvXtFsB2smKA1nAxnbmR7wPsD3KdKinrsPCp2K",
  "key29": "33ymCvR8mr6uTrPJDs8Phea1vSaUR4shjudC15xmrHVWTXXgAfU2NwJM9eDc5Grzjcmndv4G9sGoTfgE9Anf14q",
  "key30": "3exiK2emYHNzvWjKZiyeJdQxa4UNUwwT5b1AborkC4wjsJq6doUrpuB7VQSBEKH2vTmaF7BYpnetzaYVjumrnneE",
  "key31": "3i4pW1Dx1bnvLcp9xXCSnNLccgMLomrPTw81AsjnsE6tQmJGNgY7h81YE7SGBnFPVsjQ1xfTu8MWfa4vJeGr3HSd",
  "key32": "tZcMuKv3Yac7uK44L3UvZhg5HHm8BxP2WQ5uyYntF426DiKZUrUN7GRZQp6FH1BynELwtpbeSaN4ZebPVqTjgZT",
  "key33": "iFK2nRDupB6NzrbeGgbLhnkKbwjwNpcrrj54EfRyXTYkR2kdu9mHPAZnAJ2gDimxvFxs1nhT1jRKHsAP6PwXggf",
  "key34": "Eeuo29D7texg2YXs61DVn6mmeqfppogqQiFdrvd3J5w9cLJK5ZeVo3EVxbXFNnrJocSBvhpc55JpJz6oWCzpB2w",
  "key35": "KAiEVUujMvQK6sTqoh4U4m3kYRfZycUFqB136hQ4KTQDDxhutEr6cL96oaRbToTRw6tUmm6qTE8u3fwxQnbgpqa",
  "key36": "4fWEKSS78FNKmTU6ZmkS4FfgA38dpjDMT9LZcaX98v3moUxuLunSao8TjSAyrhNanS5ASCB9pAezZdLpSsvskjza",
  "key37": "2rqSNTFRSqWooX9PibEbeAdkYRc5VkbWXG2FQC8zcbx52KjpAPkzi1DwNDVrhp5YURJiJ3y7tDbngUE44zaBg7q6",
  "key38": "3jxfe984KbQHjrZ2s2djrxo7U4nMAqCo6YVciRKcGXuPcnH1t6yVXH7ehy2vRSuExYMH95FbMnw2nmvdMr9raBLp",
  "key39": "4nLdsKZYw7KYuNjYRbPc7upCaRARbGeaXFeypV4UPKchFtAsDUxecjcF8xHz6V43ULY2aPjbboLjvjMUukzkxkQA"
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
