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
    "2YheQwo5Hvw95vSKSDDPVsPr1P4EwuHbBcgoxi8shNMc7RAdpFCWPcX28KQVadnWhXFGjzwqD3obS3a2C95v7WuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBd8Knwn6MWWhp7h4vETUdNXL44WfjW9HbrffoU3tt8wj9JxwUnHmg3EHCtdVNyoCsGcEpRnQ45dAbFRqNWWvEg",
  "key1": "5PegVd8awdQ8FJAspXV3M89yUkEcjJ34VAMKSioy167eFDvpYJ6Fo9e8pLWZsrX9ZTSbiHsXhGzXR9rqUaBukXWQ",
  "key2": "2rVjz8KjMdWqD1bqucUAMSsjp2TovMeMrjstf7kEBfzqdJ7aE773QCt7kbMrqEezh93LbKNjE4nTmJbneCM7rx1V",
  "key3": "M6MUNALjcui3UJGvS3zCp8wsLdLcpzJXjAXXsugJ3Loprvdymve5RqYf3zCjh96yho7ZnturV1Zk55KZ1du5x5m",
  "key4": "wVEeucmtFE1pNeT1AHuX7aGhQJ2ybAtKEHKTiLtwGvnnBiR8JQK71yMMPSKDeMnHGBhdwbmVKErVtwaRdpKZMfZ",
  "key5": "42GDnFQdJ4Cs1fAhpa4hJGCJEV23BCKNkKMuuwYqAVv3H6AJ8pSEfo11jMkw3NtLubzmCwZ2UsgxfmNyfJV5A64m",
  "key6": "2XS7qGtoUrHyXgWR3zr6Sfzj2oo6EXHGgK4fUjnjEscPbvA9bi2oP7AYT9swzXiwMqD3A3Y3ziqf2ieZ4YjWLpCb",
  "key7": "CW6FGSukJko3ftkiv4TtcCchD7DHe7uG9qvLed5QTfkBygF4g8MYSe9wcWcBTbmZBuNzmsBekPCqQgeB5Tf6HyL",
  "key8": "3Kktc314bFkfyycScUiFfgu5974MthXunYVqE4TCnUBaK9JNpNyqK8MftKMVtkuu24ESxM2tGoovoN9Ro3N5zXMZ",
  "key9": "HnkDzrs1NwhL9TZJnAzBuvfRkzMw2ohod9jjouyNY3DGwtQSiwYR6Vbn3uZxAK7jDmLKPsxirj46ebik8Q1rta5",
  "key10": "5d76gddmPTarXswN4hRFomPvXmLLXdCKq24xmETkdBAUExLXc2CKaDBUDVFVZAnqzcmjnSkWPgVfHXMk82e9c5H5",
  "key11": "2xPVJE7s4XdL6Q6FjRCWFCYeMkZvHLsaPSDAcp2AJvSbuPuRpG2b8UqMPKsxqDnkKEMWd41Hpp8RjAi6wQrtdJwq",
  "key12": "3XQA5mt9jDwsr4yoLbErPQZVkqqVuT81Vn8GCzt9iMEH9WJ2A1bbsDFYUqdg3sJa6rvw94o2v4rUfPJ3eJvGioaj",
  "key13": "4WEQqu7fsMc6gKn5hTQAfVsybQKk83CnUkhn5xKoDrEEAj5CzJ2pHjp9s7QihQpyaZypzgGZhFXfkyfaqL2UkWY5",
  "key14": "3hWQTkQGxdAAbjsg31YPCQdG5sM6mSpcKSAJy9z55FBC8aBQkomDchvjD5GVE4BdgYtExcSfoZBD2gFHq4fvG5iY",
  "key15": "5ZoweFYTywtQ2x2D4cvfUnbZy2Wc9b71gJfkRNEQNFa6ysCK2Zm62mXNFC1BJYyTSt4xaJffT2oFbfAr4DzQ21Ny",
  "key16": "3Ydrv3owfzkfJU5Pvvna6z1oEwyKDrFDsKULfYuhBoytFuUDeDy9kfAKBrS8nmj2m4TTSnH2yskFCazfqtaW29UG",
  "key17": "4F3pkUrj8iBggVTcuTorRCHPSTZRkdAt6FBJDQ8nkCPMQgDxBZjrdVxvn36RGGUcLtHvRBWVCiboYr9couG86cZR",
  "key18": "5EnVj8o2wEmRH2DBZcfzWpcC1CEBU1MAoRfNsVepfP4nVFjeERECCf1dTqnqnBJEcKe8Rb9jrjwfPgHr1p2EnQRX",
  "key19": "4XTm3kUfwnRrmw5o5iywvMrsGGnfwdZaUpic7cByqW4iE3pjLQFDgB7tLVqcF6Nwcv6k5A2xE5ZDWJtefCpvjPQE",
  "key20": "4BWoezz5qhWpvfmpnzVwfjJeNTmsFHes74kDWehLVmbXMJAHvbXhghNMPkv6vondoLFLnFfTym8BUPpn6YKgiG6v",
  "key21": "25NaJuL2vL9wTvQ2ZNWMF3VEw635EXM75XeoDnEUXqCFqHRcN1GoBxUp5SKAhSZAQGRaQHETFxNGGK5Y47G2LTUh",
  "key22": "3XRDmi2h9JwPQgmJMtxvZDctL7YtzhWR8PAb4kxYhZS9TWgHsuLCZ7H56nvGxy3TRqbLasXMQPcoPmGfVajjAXzv",
  "key23": "5G2gfJcSxigGej3akobWVj3tyS6znHhRxi7E8M18QjnkFHxYmrnbmMks4niH5wb3A2DxHJWLLLszYUPFAWvZw1h6",
  "key24": "3PFhmTy2wdb5GTjPZ8WYixS12KkxhjLoa9dJwG45JyWHdSJ94Nq7MdmP82KQDWTWS1PwQLr17oiTAarvyHwSUVes",
  "key25": "5u6GLq9QyaCcwdrXzkEEEGzDAxvUyqcbnCRUjfV4hFVYm9dYepdPLY12itVzBjPcrTSh9iYzfshv4hHYfTwMVErA",
  "key26": "3SkomHu4mvU3ikJnCLZR2Wg3DapCnGBuwGNR8NrZcZej8PJB5jsXiYMb6dYxPuqVSZbXsvkxXnbwNzS8mc87iS1H",
  "key27": "5Vgp3ioFzy5pSe7YTaNbdjmsRvjCjEDx4G6ig1PX1qbGMi2wnguSTPnXgzBz9vQP7gwEr9dJdeRjrAgfXkfBgFFD",
  "key28": "3NC8xCjNyK2md6jJupRfv2swq9TU3ysJ3x1ynxrgiyo1uvsiTXr2TxaCh1yG2e9zQ8EdNFyQqyddXupDdK1wUysq",
  "key29": "5p8kG8QAqcHDLHksBvCv2k4CD2UQjcDSvLVh3bLMzV4mJDNuMtXHSXVUa17oYJ4jhNUxic8rBbopyrZ86heDws8x",
  "key30": "2aMSvr9kZWcUEuMrT9UqZZXvYcgM6F6SrYPePqfHE27yUmhZ6Hot8EgUbUeuz7a1HuSMwcLzXdBxUbfyH1agAQn2",
  "key31": "4X2pZpk3ALNUkNfgFKPqtmcdNnaPnCrWnGh6HPwwpYP8U9zh9FuuMNS9fV8BYV3iVQ6mxAtx8C6r8xpKQ8q1oLLg",
  "key32": "4RUhHsq4LnCuo2a46WfT53oG5FS56dviBG8gPtzahKzfyh93KPWD3c4SSb2r9D7ziAPFNJnYTF19kcsBCZSFWCdE",
  "key33": "4GaAFF6AsGJd1BEgpcdLCwSiPj6RHnqTVJYz2ws5sSADpEXdDbBPbrwwbx3a7xWw1AFE4a789qcD6LcveioQ6QkV",
  "key34": "y41U875BYgjcP5r92GT2EGe2HR8udFFphrXza3iDUtyFG54Jm4zsmiCjaSiC81xq1PLwWF7FYVoMT8r17RtSJ8i",
  "key35": "4dT6mW91xrHHdaxpYTLST33tcpfYftDxc6xt4jaywp4ZbBc7uBei3PsYAtNmV46t4p7bLYNoWj25L7AJHbHnawh8",
  "key36": "2SMk8JGd81s36xK8fJVV5cttg8afL94bwo1k9a99sZHZFTUrnw98zMnpP6HdX8wY1171ofUsLfgWyBXQhwRYxFMU",
  "key37": "xyznxJkRPpctwybAdjDEUKwpTMi1skoP5PHdX6jMGRmnbssBLQtcUFkVQnAHAvwvGwsYstKFdzCgRRPcdYLCXj6",
  "key38": "ikrmmkR6VUXQgeZQYZ2MSW98nBks1BU43YjE6jdrWrqErY7XNVatMVYnGSJndZETtF6S2sAaG82S3vkTgjqp8Gj",
  "key39": "5wPt57YPRx3N7ZTh1h3fRhHTsoTzAd7gQTvCBmaDDYfUnZEDTY4BQixAweDdhpc1d3bsUdyu3a2ni8KKiKGCtmWA"
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
