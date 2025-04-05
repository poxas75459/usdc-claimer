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
    "dYso16SAGe6vuAyHcTGahGnWHUiubgZGEnpuKdN3yNJiwhHdVT72Et4XszNmVF3tfpTehab9vtpQqHp42zykKhv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8izMdhzQfMQ63cBsUx9qSumz4ChiCvtSsAcV1CsFeS8gXPA6cN1qZs6yWvBKSCVs96Eiu8CAyurda1LmK366tM",
  "key1": "5m7H9dYJC6K5h1bvCHFFEjzCZxwepXjethRYQndHaHJNuzz7SeozzmtdH1kveyqxJcuKiarddJuchbzGawZP9Tiq",
  "key2": "37yLzVLemLX2XbuZL2jdbrBVUULTgHzQqcXSHBrDdTC71BTvc9kyfJwwfbc4hnzqtVRcgS8G1adBQCuipV5o5Tvz",
  "key3": "V2puHMFVJBEM7RvCbrgevaPeMMT1kqtfUGwoCrYbyETz9ke7X1gLspfpGAPLKnxSmaDpvV5GbnXEWXSdbdfUeib",
  "key4": "3sTC3TctWqQVrxhjvKHB715328SsEMpDBNvmJ5bUPhNixf8JzFJtP6hGNAgYxjbd3Lc365Q2b3kSU9N1DmkLeSZ5",
  "key5": "3yxJb52EiEuPEsxodoPBSRnye1pKStv86UWjEfJGnjaREabtYrTJBQVHNCCEcvFooFnag6vwYUqPQJXw6GEJ8Ayd",
  "key6": "2znEQ4hgKU7NchfMPdNEViyP47G3cM99cmpnG54ihMrugYEgsfFT8Aqb6E2rqKYx2FEu43J8YZJhiMsKyUdRzBYd",
  "key7": "3MpdoPQv2QD6RyC3zq7BQXcsR3VruYVq6wvhrFqW2gtGLh7X9F27GUqfHu9E8SH1sGQGACeq98CYWYKEv7goZFBK",
  "key8": "3r8KHgVbWnsFwbbViFLWQXc142SMufRLjGyDSwNWWC5PamS2yMzQFBGpQkBBHPLk4uSGR3CXFyzf92hPeSYvGSYB",
  "key9": "5jY86K65yLPSRRUwHc7E3KHpRDPXkk1mjt2HKbmbL4nNSoxvmkVdV7W1tEoDtxVJPVFWJvbjvpoWMN93iJsUwYzB",
  "key10": "WhkjNrDcgEySuwvXgvvJ4v3CvyFC5pyoLCsCT3H6wZFCYcY5Yt4xSb1fxPCWBTeD1ASXkGLAu5g3cFrJq6TPiHL",
  "key11": "4c5Ej1oFnEmkKmyYj4xWfE4ZJM51DgpVfszyAwEcX6Cq5QaUKxdWGYbVHzLrTtJyR8rVV3up8EnZc7H8JLRDANsQ",
  "key12": "4GDEHQJufPw7r2U5tpqWaDPG1jqCTLAhsHvnoWuwAcSnRmu6DMHhcKaWSc65BuYsD18ZUm7RWUvgpci1tCT22hbG",
  "key13": "43cGBfBEa1NkVhQE7127zMQi8PaeTCEQ5BD79ynCgxWFFZe2mXHaYHgKbmW4vKNhyTJUwnKXzvHZ7cE7o69atcnB",
  "key14": "4bK2FoofwKRzh4t6Df35tTvTE2Z3LAywPbRcoDWUY2Xtccy6xP897bgK8jTRMt4szJGkccBD3o7E9GP3axviSBhm",
  "key15": "4S3PqU8YbUgQFGutrf4mcA6RN3iynSt1pWgA34Yo5wYuojdmqkC6Q8j45QrrweNQsGnKsrR6dtjgxBwiycXb9886",
  "key16": "coR8g2X1Jz6WQ1E4Evk7wBXdBcb6o5eKX4RF1dzka43ajRKz4VmQjv3DLd665dszvmxaJfskDhm1xm7sFUBu4yL",
  "key17": "4SCwBB3LRNTLiq9wnVffxYYiVxNgVws8ouvYuhiDyfJKyMenMucAY3UVHpysk9ufrXZxYxjR4gkALfDZFrDjQy8w",
  "key18": "2nUG5foAnmSbU4iSTVrsSwxkpifhRR2idEDoN9gCVAzVuxmk7DHsiL3aRBCfCcn9zVECKoptdCExRfeuwxppbjgT",
  "key19": "3Wb8szk33oNUw3Ct3M7wJSsaGGpx8JUt8a7jAYfnRoKUDustFkQ5sCb1eEZSnPtd5M7Fc2XTxrEWSK9cJbXmCyTR",
  "key20": "58H8RXJns64rKpksNYrmpPoUvSEPAjDgPMAvso3Bz4mdGB21LiGaNBAR8JeNapWrdRrBRUM9mx8bkZv5xe78bW8s",
  "key21": "61cBLcsbCUqRzBAQqWRuh1cL8RBVBCXA77uRVUybDaySA9GGdW2DCLgzvJ2iv4soUMpuzj7M6nRW8QhcvBimk8yH",
  "key22": "4Q9DjJygnzF3abPFRBJk7Vrw1kYfdAcK16crRJJG2Xh5sZp5EuHDbL3VYHWdq4iyTLu8WoorLruJcSssDa2vYqTu",
  "key23": "24mN87ySbNLQ4DWRuYMPw3ME6s7qpsQRbtiSAEgQrxWvgiAGH9h9zpHKyJ1qbbpa3WdppHiKRvGjXUghG5KK6Ruj",
  "key24": "CC9Pqg5bzWeWVPnRufuj4fz6QZfVyWBNuVag9fhuNtE71b5j3j42fZ9bJZn5hosjz6YoWSYuaF428zeBK7NthNm",
  "key25": "4c6RvezGiPwxDQVZX51Kpdb4hcgdVAUqK5Xgbjikyd1u65fiwYJ9ZoD8fxSja4dviwBZhjExjDhFJPSvkLTTbNup",
  "key26": "4GAkFEVRXXtCe9368BfvVBo3fCqKMZ5DBXc1dWmPh6KwmoW4QK1Nru3x32vHgADwovLiaKpmhv7pKJPGDwsPyVwJ",
  "key27": "2ey9Ju41GbYvDVwhuZLCJJBuN6QzvGdi8DF2VPU8E7fJ78WRozMoXTeGKAXE9D215oouVDdieeZNhjpv2zjN9yaw",
  "key28": "5WLWkfwLhNeGSBJmwHUDXsSFV2yUttswzZ3uCVyK3rWgn9hs8vJWdXiUz62NAz1QpzrarszdnfwRVGbkrszoEDpQ",
  "key29": "36sETHnzG3XxjtAXnbAL4E343TgkFYNk4bZxgwmFmALyUbTCS95MoYeNyYuuv2f8GBA6scXmb5NF2w5vbChKTwor",
  "key30": "3S5pU9HrLP2fuVbBaYeesE4LEciL4hsYhKwjBtWLxCKeUbWMHPt3Tv6nzPmSqRdE2P27Ur68nfwWWDMeeMpniUkp",
  "key31": "5FZDGhd3ciF7KCsnwYgPd5zNQGA2wFQCW2irryT57D6YdFFA8GoWrcqLDU1emp2ePTLJ5Z4wCCjjcNJPk7KrxcmN",
  "key32": "4rWhoRYkeWgU4ENcsDR2gy7vSUrsJK6RZK3wBA3NTGeQtjGYPDqQxu6YXpfw7N4Aw5Ls3jQdoCLf7VzWLXwgGESk",
  "key33": "5LU3guEGi2CHMjthx4xo2jZhpxAdFbra8Gf3rDw7LZuu26UF1jj5GdUSdPPMf3dueC77C7hDG92nPQBZUqVxe2jZ",
  "key34": "2VSTtEHZUng5cuk1XmLtqbmLJ6fxURbaHVKDPtjuv5Gd9bArKCxNqkeFfRYc4GCcJ2AMVHt9NZFeHU8LUEMdZLpB",
  "key35": "21wRB3PiHw7xs1CdwF6bJbQ8dTyxxvVC56468aPMkKHmr5xcgh4wp4exi3xrxKzgJ14EhG1DVofxT55JivwfGZoT",
  "key36": "4YUqCxHuzfBxdU29TuiYLrB1ssJN9i1rk4TRJE3RskYQF9cpPJh8A9AQUpaYcp3Q8MQgZ2mkKRLkrRpDck34pr3V",
  "key37": "2WrBerukkyw4fDmaFT5mAwkCmtvMadEDx3L93FuAV6yjgMbVmhY8fFrXXPdJ2XiTQC8CVwUKPVvJJDHAauVJ5Xv5",
  "key38": "SUk24KrfaxXpuMvUNFJR2AF12eKE5KY5T4ErjvHGrX4yuiCg5GJdeMn4tUbNyoW9sawfLHkZMAQFWmxez51QcmF",
  "key39": "2GogNynsJ7XEVUGgd36hzpfyH116TAvAVmAD2qvPsj5AEqPH4ok8nGCumH4S3a7v8C5CRyQqSzwNrUYuc6d65Lhv"
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
