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
    "5zNT1DExiVrKYqHd1zfoxjYjxvtrRAK3prCY4hawyAVJ2ovuzcCAx3skYAyZaAaC4ieuxKNnGc3i8kmRJudhf5qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tig33cz8w5XDgpiAYfB4BRwsqkw9dWupDEQe7tuiMBoVsprfvZmq2MUbcYmiaJYcxsjj1yYRVTgoswfjjEFU6Gs",
  "key1": "4GSJXWdRU6gwBq5CM2WPQroGKsYB4AN4YTr17rM5cXsDBrWGWjRw9qoFF29i4WwyxioCdz7PPkVuq7EKSmwECZNH",
  "key2": "2ETFFZgSXZktFxNwdEkKtzUnKN9C4uWsDsSXbgxcbDof5zhmRVToFHtrjcRfYGQkZhmrYvVegnZwAyQPiBn1YVMT",
  "key3": "4U3ZAt7gKFpZUyt4tEjiCtsnTa4FWydWQ9Goc6LNQiS7dXrFEp9QdD7pMnDEV8aU7F1cZkT5i5RVQHhKbwvYPZxK",
  "key4": "2KbywWH7YLiT7GTFP6wtAgWBJw7GYtka1kNRP4mLXQJcbakC6s1Raea9NbgkWtyQbw2DwmPdXrEeoWFyDTeWtfeo",
  "key5": "48HRNvzonaQXgaWaDatEZaJxhbuoEGwgkrEnMrfR68qKGHVUbugXo9HqMk6BB1VwTDAcmpQtyK3rCBoUcS6yEt9P",
  "key6": "4PSQWRNmZRNmLpZTMTVJiGVTWuK9gGdvnHf2qo2YdijJG4KScqtpJ7VAULdM5BfAMBZP3C1ZQJq8wNkGn7segxbz",
  "key7": "5WW1ncCC5pWjZzCGtuKsvGvf8ck8v35V8mfbPNi1rMxwBW5iZFMvKqYpdmAv5ynsTCkAErsd3b1SqUzoNfa4nHJ4",
  "key8": "3DL2D65g7YYgFWPKBmnGL8ZQD6SxDzJjwaHuDNBSBMNMVMLku2fn69FK1bExdbnpLiojWLavQaFP2Vf7DYWPDiWx",
  "key9": "4GSTbENdNnkxCS5RMt36mCMLs2M81SZZUCsXfHUQYgWakirrT4oBZsbjcRAt4H8oKkxyyMhv91FqUqDCJXGJyhZ6",
  "key10": "5i1k52R3HqQpzoAh9tM9fU5UuEse9GjmuoL1bcxYi1M3FT4kUkhQohqXqtDkLaqNLMx5crTkHcTf4L8mf6s6xVwp",
  "key11": "4EaqA3SJi3ZpttYS6ZufWeVzkjE1JdGXYBUL9ikMue9TJFT5NvDX1dqzXzkihHyXY5bgrcGg2hdjycgsYUh1sBZ1",
  "key12": "5AqKE5VbybA8myReLEj4D8CeKH1kkA3feunxeSt37tAZKZi5FmLtL1Lk3gQiuwPemAo38LsLAMMe1YxLuvdzeHNf",
  "key13": "3nXbxW4vFG25Lw1KRBD862pBHHvgThPJAdqmpU9idNC3g2a6tHmVnU3jV5iqmauq98HApnHVDs2eNkQJa7bn7Kit",
  "key14": "5PasLmaqC2UXhvxxLj9Eae7wy5v9goj2Gog1wmXpcuz8Ln5RxLEDN5GuAfWLUSxArGquwte9NYHa9Z7cugmaiJRX",
  "key15": "4qbeP7zfzXQw7y5oTP7fo86K3T3vu62m8u64fWMBx9iVbqhZsevz6uREuyZi4d5jNtGEuhVya5rKjDdbGhJoavg3",
  "key16": "23fksDRLtE8PVwcEExRF5csnnrv9tNH4McL53s893WKAn6tfmLibUDeGyfMb36jnxJJFAsKY4XU1FPz3oUBBJzU3",
  "key17": "4CLwsLXmQZLjmCTLiRtBHmJehw8jUPXtemcvGc2Z7kQoxcFNpSAyv8T7UYpkutpkU6VgZpxDJwZq9LgQxoaykeLM",
  "key18": "4qFTb9HXqR6z4q7k4azYuD2J2M1J1t7dyD3LXzeg9TkczBuqRMB4zL3t95uUXxjygnmvMC1aqNWiyYXmTkyWC8GL",
  "key19": "3ejtv3K18k3zmM6aRnftKZSiYyNcwazKY6TUdtRy6sWeA9WhXA8uMU2AMqb6ZejPscVN8uuHRZ9kfKtYNCKCV5B5",
  "key20": "2sn96HWSnfo5uorrExYUk59N3uSbAidmUJGQdV4HhGFXB4zxzvTMw7WGUL1i4GY4LWJvimTi6CZJubT8yAamXh4h",
  "key21": "2RG5r3eb3RUNq9hh1dVzxjTcmF9NzSpYcDde2VbvyUVZwnEsqhowrn2CKVfTx6o63DhjQYSBUJhUPkQAfwbw5prU",
  "key22": "3LvRuZwLdpq9KNtiqRuTVMAXVMibWMGQ5geKSa9xeYXNj3jrysb2hC2wW2nNk8UhZ3CX1GXCLK8t7HZN1TfCTzRB",
  "key23": "2q4BQ71Q7DXMCM7Rnp6NEZbxZTvpe2fiivtMNSjqvB6qwN7TMGmmfQdWF7svZxNyRnmu7M7iKFo7httJrreKUtZ4",
  "key24": "59CuGnEXcaCXbVLS6iibwYo3a3Zi3DGdesXYy3we7DTc8ir1dGqDvSZcHio6xuAuN1cLPoXsRXnBj63vZuCoAPX6",
  "key25": "3SXrfBgb7yjfNZYF3QunWC4jb8vFSxocfF1D6BmBonHCq6igbRrikWKPbSybg3stPLtfvbMGA48LFWm7HmZqGWy8",
  "key26": "3g4Xo2TyHeosTwPgMkQnRgH4beHFx7KeRVEXspPAyKjTyRVLcNLysMDeamLKj1bYC5ehq5oCZXaS7c8b2xQW4ozh",
  "key27": "47XrFyAcTWSHcbQeaRZxcucVFgrWUhYux7D8o63ALBhkwiaNynhnwvW9pNtK2sw2ZdKtEJwv72eBYiYski1hLRk7",
  "key28": "5sZNguhQrumGir7RHX1qajreyCBdMgyTXvJE4oUxCTtuHuXWe5sau6HkWTCdhvW9q5TVo8i3KNR9aBKb7QJesoqm",
  "key29": "4hBrPYkjKZx4QDYC4eYeEft54UUnejQPCbVnC9p6ZRoXcBYyWqj2E9QZaU4KAaWyuqhcjt6qbUb6NLn5xerXgqeC",
  "key30": "2EaUxFSs7KxZ74Ey1QFz5cr9DdrfRcscjHanWRLVrqs53V1QU9ZLhBNdgNT4erAcArc4JzQiNjwqsZ8semBk5Pqx",
  "key31": "63vVJUmUw5Rn2Q43U7Jrkpp77iFbDJgTk8oj5fuPipNnzXDESn8iLiZvjK2rhLaRR1vU2CjT8uioCB3eQiwis3RH",
  "key32": "2Hasnpgq62vLvcA8tj4AwmFnNfiDjMGqqFhkpcyAgiU1L4p6q2VFtQuDszPYDUcf1eXE54EyYaCgQy5h99kptm8A",
  "key33": "55imKdKpMiTyk8UWy122QLfayTGjivyR54HpeDGPRNSjRTxMoAadoUcW5FnLURqmdeucS1zSosmieLonYt7qmz3b",
  "key34": "45VWJzy1j4Jxzrze5Z9429ob8pchmJokNRuqyCjMBd7Dm8vJS5NNv2nEonrQ5uVBf5fTAL61RSQVsamdNL9i6oe",
  "key35": "5cq5HUDhyBK6eURKy9HeMBaELX89rPfqh48w8ybZUsY5D2YR1x4xdFtdz8q145EQZb2H4R4myYAgEqcWqS449MyF",
  "key36": "2hGu2xQapoNJ1fj7Bwv8ADpZedHit6fEzhzCMfiTiUjuL3xu8oTctZfopNFkerPJDqVH8zxzjZ4NnTcuZcZQWTMo",
  "key37": "3Ec9srmbTpLQXXhGJJKHYZzpjk9ZAx5ALG2WYzoznccM7DcSVh76urw6wS2wV1bUGSNBfE7dnBpZPtFHoSf8uhJH",
  "key38": "2uCGJ7NWbiTmg6GqffheBWcTppkj7dspAp6L5CpHVM2Q5oivNBu8gdWDnSjfuKEV7UNjwX4vhs3a2uxQd3rw7ham",
  "key39": "5kJ5P1uyF1aGQG1uP2WWNULoLUAcXKDzezARXfyvz3efQ99VxdtkQN7ZzgXguDxLUnjEgRRPebLS2JzqTRFJ99WQ",
  "key40": "wW64PAMGfaB1Rnivoi2GS7icXQSAeSJbZuis1ALA6fDATnmEdPaqRdpdhC4frMb4eTavisPoPUwKTQftoHhfSR3",
  "key41": "61T6DL6jA1uRLZBAV6ALJt8cRKDRkhW8kHqFnLLbcaLiiVcvcXBGRAg8PvF5TJZHwY2UNJvAWFb3fQAUiqNFmm5v",
  "key42": "5E5DgVwqRHSJbpYYjc6UrzPsVEYCLtfje9TAM4dZQgktyCHMhYpGw1iHdJ7FGapnCsVw2V743MmTUmRQGCDLTh1T"
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
