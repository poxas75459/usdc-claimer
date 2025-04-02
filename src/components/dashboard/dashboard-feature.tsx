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
    "3fmgCCJdeNb4BELNctBNsbegtwpu7RsV9nChpmWFDyLfTTEBZZWsTASuJAAAzkZLnKWDCJ5SeN2NfY1cXsLYtRU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33zThbYFJPv8M7nZnKJwBzgccpcs2q3FkjLrcdt8USDS54m9Pz2dXAx5iUVhf9nmaKcDTohtQHDySon4wRXcL2U7",
  "key1": "26pxGz6XCpP6ytdF2bk5f3FshVqp3djENjJ5rYJ9vNNZAexmKEcezkdn2ww6E3gs4pThYbMwwUCjPeF8HRQBJ25u",
  "key2": "5YFW7Yw6et6FppT24LHUsHmDEU7z9LC9ELo8ro2utXWWXfARLtyfKfCdkj12K9LRN9MiWfRwjndn6eLtJ35SMEJX",
  "key3": "4qatA37AAvMjpVAga1wdhmQsZANRVjeE9DWYeTxDKjXA7xdWrYjCiTpU7g9Tz9EjG5ZZrUTKJf7RHTPHxeXEMtBF",
  "key4": "3KLZLvnSKYXEZ9BUpduPjCbpkuoVgxndLcgSTSa4BcrBxGdD8n7TvhntuRVH2ZjYsCNtrzc6295aUFEAPJUp1AZm",
  "key5": "ZJg6nc9xNp3hsGveK8C9DJhdjhNeKDJGqk23JVs6m9DBYwjsnpAd17fwpkZJ728UpFUoVpdh5CT6HmqFjmzCmuJ",
  "key6": "RjRNAxHa7T9GHu7QGrqmHWRWsxZg5bK6c9LLGc2Ku48enxKrupbwBowq15sojCtab7LozQo9VnHm3QVMJU8s7iU",
  "key7": "66QwtvaYPpTKB1FDUf2CEgeqTXD59zckhdKgphWk8JeGH3Z5QqHoctCTaFR5D76ce2KbiEsHQ7P3KvGhRqNYnBSK",
  "key8": "5wNzwBnSs356MyN6DKWKC8SrBNeULGcFjDguZB3U25zrYcruZdMJvu9DqKXuAWo5r9UV65GZ2WYr1PYghZT6kbSk",
  "key9": "3g3z6AmQp7Bpc2d8YqoDV4GVtq1pAeHBWw8v7H4kvQpb7g4RtJWSTmFtLk7pwKPfuugCMsPpnhWMNM1ooBKKTxsT",
  "key10": "3E9E2X7ESQSq7z4hSd2ZNyKoYy2e4FMS2ZiBnPqjcfDY5yRKzckEmFuRx5H6LCM8Y7rnzj4MoCSiEX9L5MJtcznT",
  "key11": "2xEdpaFmWEaZcUdrc7FHVAkCNMzyzpFuFo5YyAsyEmCT38K87Ch5j6CP7Q8n8aqzZYgayLayzoLp4eqyS2eXBt1o",
  "key12": "5wTk1vL6W273m9USiWftmKv86U3LR9uCgDKqGsT5Hm2mk9sB9mVBscg72qoXKS1KdP8PX2LeTWvXm2rgDcRHoa8o",
  "key13": "pUyAYUdyWRNkUPBifwd2o5drhiCDDxjb42TGExgf4TV64QMGL9uggdhW7df1QePEmBwj2AntXCbChoeE3VsXAJC",
  "key14": "4JuVp68hWudBGMZLDhJo8LFqU42jdrJJHr1mLCU52u2Gp3ikXvFjNcAqLG5x4HxMQoNJN9JxsaZQV3nbTtKSZMPo",
  "key15": "2uzGy9sRFJqYs7EpRssgm7tospwypo9QGELWV1aqBPPp3rXdABojy9SKMQ1BZb5ojAHLcWeKYuK7xLFXaorxpdRF",
  "key16": "3UnUKooMUf4ndNDTTQLvqRYhBzzy58TvjejrzjyZR91ePcTvFXD7QaXhzvCWsXHtSCSsyuP7HSSgmt7MWYQqRVfJ",
  "key17": "421iJfFQbBBKsbmCHzjyeGLEhw7EWYwTg5CBbYWnbWQC7YStHuUFwM7g4RCwMJtk1cQDLG89gtJwGwnnTzRPSWFR",
  "key18": "51XWDnE7KXWx215rqtUMoNDeJ4YK678yomejGiHXKG16DZJQZ8KSriLL4A9zneHreaa6s3z94vpvLt7md1yQ5JaM",
  "key19": "BngZR5NnaM69Knw3SAJmzcK6TwiVvn9gFGS8DcWR2TvYmYEmr9YNqC2ouQM4mTSB4bPNU99D4zQXHBNfdCoBMix",
  "key20": "3eVUKPZJNrt2ruQREj5FnbHsXH8hZ1jFgYWuVNX9qcxquFTS8tNu8Kzy5cjWeVNvrdwwcD442W4ihfSk2E1vRmFM",
  "key21": "2dB4svap4BrVTfnzudcgNjuxFBkzRgPbovXjzGoAiV44J13K9XMp8XgA5mT6cPGyycMBA3CJnTcn8nK6dDSu7cqd",
  "key22": "4T4SbNP52LzmxEQyXC7tr1DSCuMarRfbEt6USEmsHReNSAeMZXYhcdeEByPzRLP1C7yzXq2swAmK37a4mtdJCBWT",
  "key23": "21PNi1K6kb8n2RjdkS8gQ2Qa1vMKwwyD56qjBWYpSAHBNEg4mQZuxH7bTRD4w7NyF3ajKs4DjBvS1vdrDejH6Nav",
  "key24": "416tLsymUrQ16G72F8DLQxhNZsZ3SPS5BCFtce1M9TWWWy8eGvwac2rNXmDC5Krz3hJRKuizm1ZXfLk9ZRH3WdEt",
  "key25": "2uZrBZdKFjx2QrquVPn9FjHRUbSHbSj1qB2sMo88XYc1ENrNzhJpKXCRDut9if9Z34gUJsC7VNtPqoi3LNdT2nxJ",
  "key26": "4WAQGexrhrEbJEqFZdydXkqcWo8A8CCwGf5wXhaXmYUvszVVrtDmWhHawAdRTXETurghc1ApTJAYo3v4gWkduqdz",
  "key27": "4hJJX863z1TEuA8EcXUzTiY7TNtt6rB2X2jdTc5rFVWdPj474SbXKMQ8xGDWq6oqDYFm4GA1BKDrLd2nn8t12e3H",
  "key28": "4mMczWT2aJAdVYSUdVQRMNX24SJzTCdwGyayNPi1pX2hZwNNjwyFeJBs5Q2ccFkHhcoWN1UD7miKhttrxrDnNTLw",
  "key29": "3XXet1e5ZgV2L9TfesYAvWvth3y1qptmNAZdtuSNE8kgiBZt62mFejuXcxJwJenAh56veVrJw2DTsbrJVaC59L4V",
  "key30": "5c9sQsLfp1puZuVXUUSFFHvnMpejRvpJWz5FkzWEDJj5mA5Daj2AZLZVd8ycCi3UjUowUgtWwPDzoQy8WxbVm1CX",
  "key31": "4it5BL5K47SSz4cUFoj5bXUBVD7RTtYx5tztvJT9WVDiqURFiTXeyd7jK8xtkLv7LysaR4MYgDXVSK67PWPxbohX",
  "key32": "28USdsm3hDWbABs7iagayUnaJyd4hKR7jn9iKNZUMRpwjvoKHhSgu9PLen23rpJap46XEBXYWwx2Xa6kyTEjnsNK",
  "key33": "3dLo2aN3EemPuQCTxMHXrZwruULqRpCwYevM2ABRmjAHhugFTDjwkfRW7PPqefTPcrfVG8ZeAfKpG6K1EDte73pV",
  "key34": "66NrAK2w66K7awr1zBBGhShsn32RJQGEoWkixcPwiqvTuQtm85FpqecoQYGkEQVcKMemCA6P5bjoX98sBT1UmYNi",
  "key35": "2oGmFWtQFSXBfQNk86e9yvM7Cz69dn9LwWuXGcKzxLYEjJEU3vjsz7vWryfxdeXoT68cpUqC9U846fMWQHUKjKPg",
  "key36": "5XRjkxd5byH2mMfWhq7cadkxHqbyXaV2vX1KtHD2evvSa1QcDZysRhP8cuc4XxpjFkKUVWExpAuYbKR9ABnhUhQE",
  "key37": "65LuVPPTJ1eTbwByqEg2G1ZN1TaWwdSpAQMEAwZaZP5V9VXH8WYuc3gWUSL63hJboLXNdF4DHNxenjzcdkVtU8W",
  "key38": "TkmkWFwTLD2Jjm7P1QN1xSgPkVUXM1cxuSnHSfRgLctc7bVTSTMGyzSKSddDUN5i3YxtViELejAEgmy5nvGuV7Z",
  "key39": "LWsNPEuYKrnNmeHjXNZRqsjKQ3EyG6zKibXqRM9JwhmHwFUFM2eu8RoeCMa3GKfPUQVQTmZErNNmbYupdmGjVB1",
  "key40": "A8M5QaaY4FYSbKUQ8GhuyJ4bjjvyhQPqLoF2b934AeJvmKNJR4oE5LjBvs6oFvHq9gynGA4xbUL2znVfDaEXixe",
  "key41": "51tvjWPbpkyY2QQZsxwqWi5T4bv1TSeZZpp9RKEkQu2tEBAWMMxbVmhNMD6LuCx4kcRgmCwSPCzxpXhLrVj3biX5",
  "key42": "2oRES9qYGUz2KY53jV5T9pi4DfxCjrsRLABNpC7qnncYx7E4pWAZFWeh8qxefmCN6nwSr9fVmKB1rcgwF7q6A8F",
  "key43": "4eTvoXhcSUYoXrYDLihrpAfE3mYBiTnmUGvm4CRAbdcSuL28WyZEUXvdsBdoro1mcNhFpgQEQdu8omzZcgdztH9U",
  "key44": "5pGcUyeqgWLBNnfYtvcm78Z1U5EWhBKQyFMiu4joB6p9o4Zd5fXLBYF4JtDyXnSZmRGYrN6qT6QVEb1B6zyMMoLt",
  "key45": "3Nsf2TuzXJn6x1YFdneBMx2RK4kmJUNjPg4xTVZkAKmB4dUPbZyf136ZzNCU2CcUVoXB6Yx9drajSwEhduYtBo7r",
  "key46": "39dBqjxb1imJJcasJAC6JBinQ6j4Pm9ddguwFnWWP71z42Ps5djEvncDifXMRTmMAw3Yg93Nnfop6vv1MYcmsTcZ",
  "key47": "1d78MfvyyVvYevcBx5VxJpV2JhjCD2Zaxaj4ZDHcgvxePPuaQafducrKEju2GmvxAb7BUPUN7SuP7rxufK7pmBi"
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
