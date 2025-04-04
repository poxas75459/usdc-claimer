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
    "558ocBCD2nxPGXrEdFKQV8UbbjxVxNksSATXfSzXRUrogZFZfLVx7Gz7ALergDh3QA3Z6axoG37mhGRwTFnRvTGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63HifwDbL5GMK9Byh5aFqFW9uWKvh6WRBw6P8p7rUWiYd8RcE4bCuKpKzkVwiyPrckBsVvGe6sCBDpFF5rAzvZkK",
  "key1": "i37PjqT35s5JakhNLDLbeyjQMzuMS75qMVMrrFeH49FGdzLkr9dpUCeMozVDfGPW7U3g1cfXwHm9LaPNsunjYJC",
  "key2": "5JDhDh34PNtBLx9JEzJpRVx2BhbJJA2Cj3BCJ4sQ5nYodxJ6usYvwvgDEfDPeMrHkUFg2Pf8au62jj2uyaFwGCiu",
  "key3": "3R45UUABYu6r574nSy2b4DpH9cdR2XMTKJmLaSF8GDmPEUAtzDQWZbTDTqJ9CKfefc4pTpb8T56iDeVyXHC3ekJM",
  "key4": "3GsYbGquemY48xebUatVE4NL55EAnDB1f9WRxpmDYu7ZSrNi3JRVG8utPyFtXtzpnTvnQx68Gar7ZhqgiG2WhzHm",
  "key5": "64DcwYnW2FK4MGsegzqnmQyTtH2CcjDBwkgVxj1KdA7EvmMCitRtooQLpHcdyKKTsU1ZLGyjnMQhDJ8pFYowtbP",
  "key6": "3vtdDnkJvtufwhw2VAuUquRUK8NAoUNqxhntUnGaS3gGA7Fs3x4sy523FgoV2emUSYWJZEJQKiyxAx6hgBhz2EZn",
  "key7": "2jRR66AXARpUvUcfJ8TBGY9yucpkM2EB1yxM64rHjV15T3CHicQhBUaKqWgRQkPZZDHBAVZjbZHVhidhPaWcjYnc",
  "key8": "ow1cnvAcGw59wQihqNYpR1rfhqZX9kcGmroBtWKCLN4HiubZXwh6H7rxbsXeAFXCJjSJQVEWN5f52iGjd6fmUUj",
  "key9": "3P8b96qe8fXmkMVpJLfsrzH2kHBfvF2JYQxPgFv1dBqmjGjRoGa3oEd2nvzAwwotuFetwSZmtfn1R8JUzv59Ustc",
  "key10": "UZhT1HMZ26yN5epsnguymYKf8MHTuZZuiZkNnCe5EC8qHoujAp88cKP7X9Sah28JbusLaQpk5NnZtTwksF2vtVr",
  "key11": "4qECWmnrkPdRHMZwK645QBB7TQK1AxBS49XygyYX8XxdeNdrq11xYkKbnDeBSQx5hEz9htZ9DwA6XFMAxidftFHx",
  "key12": "19nhSB6XyAvq6JtrSTJwpEYRMEkPhc1iAKt3d7RLDFt4zvhEF6cFgC6J2YSSCjpeGemvyPwAZt8Fts9MsRqcggG",
  "key13": "6uM4swMPpAFN4bmQ9AqVdD78F9zVBmpdhH9fBb4XySnBgt9986jXSzEUquudHYDKa1hZRRg9SDeantUgknGD9LC",
  "key14": "sacmC67HyQgwkLJNjMnWRV3nwthKb7hySZQGGkALECPtC3UcQFvE5k8QeoMoj9ehDVVLyGU9BC6xZkLUAM5ftUW",
  "key15": "4i78MQJ54sk6vkQNewFR4STPdoTuqt85EjdaoCNAFm6rTkrJdKhACiFSRnFxGEVCJ8asyJ4Sr5v4f4xMdLEbepFJ",
  "key16": "378E2VYigXQJFexsrijxLUn2rbWGo8YUTNTQBnHeeCqkfRf9ooNe8yCjsWqkuNjp7FDF6gaBEB4SMgFJhMMivv1e",
  "key17": "aRYs49Wo3VWHM6edSG6F3hVpfXaPMvtVE6BLVzRuaW87Hh6M6KJcc95pdzHHtVA9QpujAKagkhp749vexYxkXyL",
  "key18": "5w7LRNUiB58S1rfbsHTmKddy1h8HQ5qcVP3QHHgLndYLfTg61MvFfoWqyZ3YZ9dBWoWPcdHYdqqXWgeCdmDqeFaP",
  "key19": "4mJaPEVoBoTr6QciZ2CaJ9jrC4evXMKzUuXmsypaFkkfPx7U4TZdHZxCjtZjcZ6kZdnidy1W24aeKaexBAfeQHHd",
  "key20": "e5rAxzpoG34wWn7e2Weunw7Jwz7zz5N9BjcuUaZVJ3qvJUe7vBxmDvGQyLj2q4AAi7o3WyaBEuwh6NzXGWFzADb",
  "key21": "3Tu7hBpG2jKaoBa5bMtcnvEpSy6F2UR8KMpkF56EFr4P1bA2qQxEkwsLubtLcUSnjFURvDwcjb1NkB7dUEVQ1tgj",
  "key22": "21sX9b6Brf3SZjmG6M1JKYgX7koaDgQ199yyrdC2J6cyj9wRNn2aFxBY5sbQgMX7hzgYw1u27GTyPGa2pFiwt4z8",
  "key23": "4S6Y495EU59ZSnyyaoKZjcsTa5bMHpY5pkk6KFb6qtV1rsxCrSQboXvgU5emVg38gFqymWRnZpZ79bsMb3GcofcH",
  "key24": "479U4R4utDe9zkp8wHH4E17ejWg1MmfkmJTz3qCUnKmAdcdwACiVhCVTSsnxzQv88tYuAawLGWMHXQ2wALcE42gp",
  "key25": "3u8Weakk1zHB5YePF2pH6otAdPSqhR6AjErkbK8MFQf3BPdARh9Kn4fVoA2jJ28iRvtkMCE7bQF9azEHqqtDhRxF",
  "key26": "3S1EWBss6QHVrv2712QBWNaYAoLShh1rZ2Pg42vvrX6f4ABPVpvyTjx8iNcJ5Cr3ocQpH95rL1iv77rhQHid6MaY",
  "key27": "2L67YAagYHkXubJJgca9vEYKQ8FXf5r81WRerKTeV8NPyytvtYbeNXgWtigv3QpppwYrSiyuozShoRDNjEsCwhuQ",
  "key28": "2mYodADwUrX7dv3pzymVagxKCLdkraoCZbQ76c6Za8e2gCcQSSUsuNu2er4SuekrchrFHFM3Ci9BVF5xespHMfqp",
  "key29": "KgzdinXV1pNqq457LBPPACVpv8U2s2vTfM31PUNan6mSvvprC5p7FXDhUqpLHMGSyALii8EqCUuxeo2MVPGW5BZ",
  "key30": "2JWXS2wjvwqgiCyHsN8NDHbW4SRyn6ngAg2g4SRUogZGGaEg5YrJkqP5BFUR7fuQGet5BYYUzeNDgzGqhi3xbDQk",
  "key31": "32NCKuAncDoNFAnU1nSPspVkcbRvJC5giZq39DovbeaGYkhi52ormbjUv4dkEM4B8W9r2sFyfVKxkNqiXHc55hMP",
  "key32": "tLQPycZfeAaKTieuDALRaqJnEEExXaFj88jyvr6BMQSQnEYZd6wkGvjyWyoxHhB3pAGagjirY3RreZu8B4vZk8x",
  "key33": "5yUVdnpK3mqNoqABxck17yw1i4hTLSkavFpayCNUjF4fuX8jK7CHWbNNFSKoXfEYkER1U3MxkrmPzeBL8g8jU5dj",
  "key34": "3STZN9fVh8nevmcG356Qjq1pipQDSHHDSMvLiNVCfY3zaCZ5nRks1BNiBmfFPY83787xsn5ss3ZzReUbYTzrVpNg",
  "key35": "5jHKRosqwWMqPhKseCixh4FrofkQ5nzNcvFqdj9hmLBv6PVca9b14y96HB9ikRQUe21QMc8G6jHModRAxH2qj1Xn",
  "key36": "5HvqNizHpX1Ksoh95gVY1pnSmNjdiVw6dJUhAUptoCoUfbKzEyKifRxPenyutbqZPZoioHfJfADSTFdoWrquwKgQ",
  "key37": "gNS14KNYc8YvJpScJUoNqCR1nMdnDs4fAMqAUHE1m7RHTqr3E2SnuE9XWoUYaDHE7HvpiCdYB5ayTARSE54MxFa",
  "key38": "2sAcQjQyx7Pf5GFJiFEoHZhELVw8aPwP4QrDmsnwVBQ5LrWE2aJaSrQVngaip7LwDDk8Y9tRjrxf7uwfDvPDQe7t",
  "key39": "5GYteVYZWiU4waNmEYZutg9vCwj2tGqjJTxgdFZ3d8rMUUYP8W8KW8fzcw2soJ389qR95px3gGCkY36Rg3fLYUC8",
  "key40": "2hu6tmSnG2r2piu3fJ2SHuAmAfhwNoKCS66x1yhE1Lvra27Ttb1sYdwRj3qvkFvhRLU8U3VbQGdvKoGZMSHTsF1E",
  "key41": "5XnWvGuUgJjyWHBkdSQsLa4sYpK1BrZEQUMTVEgKmwhdS4N2jTAfimZLmauzjE6JB8rrZYHAxuMNihT8WhrViK4U",
  "key42": "4nwQURTYX5Jap5yUnHpCAKCUHNFKTV9hYgcrkjoX1y8AEQbB3ehQBQxjW7rUvA9YiwgeNqn6TBHtQageZSDcdyKZ",
  "key43": "FtebHRWnLhCm68xQf9AMd9rseMS1jUShrCxaFK52qdQQnyvKeXpBkCK9dbEekjE1fkBqq1evFcShAHBu1kV9WAu",
  "key44": "4jKoABCj3gppcBsYwDKyGZjYnhXK1sMb6ULGcotNaQoF8cwsTfHmiPMzCxn1Ftbpz9yvmAMJ1yoYcyAfe5UA64ki",
  "key45": "5GETTHfvep1ga6tHEzqsPnGLTvseEaY14XfRuRZo2EPoJz49F8KdejYf6NdP9rdbKNV15CDpW8UPqT5Q34mxLJNu",
  "key46": "3skCSkyuuhc58dwAnzbrCYnXg94Q7fAmGmrXwwAvoQnxDtvxEApt4sezRnhSDfwZPhL8WkKcaXGX1HKQKo7JSB67",
  "key47": "5VQD6UvEWkNrh1cXtHQciZavSZmxfcXvFADa817Rb7rT75uPTTHRtVQiWSFG8uKnRXMosRf43jBwzAZZAHaMdCTf",
  "key48": "2ujyA5LFvC1BWhWPrDnJQfSvLbikBTrv9CUr5tzANVNW1SkeSntTAWxQsyrWBbA8m9H7HrnxPsTXeYEvdjgoL5vq"
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
