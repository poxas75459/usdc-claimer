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
    "49Y1GZuzA2NGcJVgGsdfqsNszXwMHHzoKfTvPSFVpAzR8BgNmvr8nEfAzpY1YLqHpA7onCXBSsa5SGP5ChsV9dGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r5HukXk6HyeuvGaCcmdk7Xewn2zX5mtzEkvpVFNnytkVa8DzF1o6gCpvoZaEcAcmixh6Rfn4pLCuKxoSy511yv1",
  "key1": "5WccL7PaGutECugCUmKCjVo2ExpUvTR773NshvRgHD9WAw15nYtqgLpGPgGsi1P5qT8brGwFkMcwBV888Fk3m2Tf",
  "key2": "5ocrfWfRW6e3s8um28ghQ68orEW634KXtQMUGQypz8fZVPvfT6AKDT5upxHtyUxeFEgamgP3Tt1LVbTeJtbmc7xL",
  "key3": "4iDnULSpjjFmp4BJvZVw91qVnD5YjNpqNNt863XArsuVMyKWPuMvonrYaxhpwGcuvCFsGa1mHf1ct1NDsXFC8wRS",
  "key4": "3BgnXWK1DiPemmzQer5ZHknP8XQidJPgFXc7UKPSb4kJfGftZBs6dzbKYZzq3HxNzTJoWZL79FcYikEWHe4VqxhX",
  "key5": "5zT1KxdE5vfggFyqbU8nt3k6iY1x1QBTaLRhPD6iCnZshaBMaFdfG35W27PDhUQezheTLTfYk5nzGkq6pRBaKaaU",
  "key6": "3SuSVHvzn1JEmL3PZfbeoKHan9jTP8YDeRZu9CHs43BKBM8kqcKVGRHr7QV7KQShnCEeEJFqx57ZNuXp85sUfsdr",
  "key7": "T9wdqYpnJghb1abJvcXnQXwpkBrAxAPdbV8KUvahdSjeapecmAFpXHheZ2YiyUhqyPmm9sbjZqP5MPAKNhGCiPt",
  "key8": "4omG4MMcRNn5ag2TzyKVYDVVM53FpvXDXagWeM4HTv2TY9MYnwNn9nWN6aay7c2wXxgjDYczAxWQ2k53YqZRwzyP",
  "key9": "4kbS2p5CmhBVd8yEq4Hc1ZTNjVvBWKLSfSpq8iXW4DLxeUyBSjK6wNTYNYBYSRrCADQSaErqnearPQwX93brcpB5",
  "key10": "3TpAbDYgcqne2uYj4TmpvYnLZzMvym3PrkZQEZJrUmvUMFSUy18VPjVEaibBNDhtj2zDfr5692tbVW3SNx1aFrRV",
  "key11": "3EZqpugrNEMRfT6u94rqfbxr3yNCsASbuv2dM814sDXZYYcggSk7jWvPXF2mz68UgEvDyRKx5RseYYbxGQhgUvks",
  "key12": "QEf2hjMsqwx2xBScK3qgYGezy3ZsqDMmgYxhJY15FasNmWSgqDw42uA6rJJ3T9mQfpNjuTqx9z5kPoTSDncgnZe",
  "key13": "5uzagAhnVC7LBfa14oB5spympa1YN3QTaFiUrtosaRwTTWyHF742mXZhyzFkSpJzuwZLGTP9BfKnUpKNQrX9mGj8",
  "key14": "4eFbfGz7PLgJ41YoKzMpw9VS9JXiove6RLYzKgC5xwZfXP5QeTx8buCnWPicQjVbYiZKsXC9AUfqog1326PWJ9qV",
  "key15": "36j2nXzHvZYdWUq8Y9G56KUGhsdZ4WDyrubjzQ2YVhGaJzHQtf1uVcqBa9u5BYmTZ7rjh16LTxEn3VecEUKUEVRN",
  "key16": "2qDkWqTJs7HNeaEFRf1xU77c17ujCtt7ypyeDrLf8eSVRfNk2JwUJKNfDnAqR3GxtgYsrcjHcyBWLJVVrvog58Z",
  "key17": "35jP5zpG8jiCbdhMk2aGQ1t6ScF2HDH54og2PsevnK8WG4K7QASPSznXcowuYGBBsT4P4LhdqCSJ6mw1BEEcLBHj",
  "key18": "5i65nXByrbmyNNYCtXD5DfDeynaTBtcPS5gKbZgtUpUXT1hwbCFSYRSnb53auAz4yt1PWrk6nNGn7UKUgPuPScyp",
  "key19": "5KqBwJzVkca3hrXbSb34rBfjbnjyX8gByWihiFF1GKsH6n2JSmsyAsCn8hyk42jowP69y6oxbeSXEmnsuBkktYzc",
  "key20": "326soyjyAAT2TxnZD845nP7rZSho7jYqc2daYqizeQuq3y2uG8PU1BBzdj7wsBpiWkyAiQy4YYv2bWh2t8N7b1NG",
  "key21": "3d7Zafckn1qUoJibpUqhUaSqeodvF32CwjcEKSViTZRNoxSgTdtGWAkcjQm1abNQWT6UWta3FZjF41rM1EY9Lngf",
  "key22": "2KRmDB7D1m3Wxg6Sz51JLy1XoyPyzLBQq8gqNpw2gBMA3yHQ4xZWjwwgvP4EqvUMXAqJzP5GpsKixij73cv5yC6x",
  "key23": "4SzkCfxuJmyZRcu27YHvCJaJ28vWj6wCbQwoEK9FuRQaU5Asrb4bvoDF1pN3Q8E4meA2JHGcHtQdTpBMwqdkpKaM",
  "key24": "5BXy8rF4Lt53dTxAhNded315y8xMrctDeFx9gxL9CGCFr6bk31TZLu7ftBEbXpjP9EkHRxuL7txzMoZ8kp9trBR8",
  "key25": "5VsBqJ96WePFPdBeeGMiS9oAMUddQNxf1UkfB6TqD7jXowd3iqaBczNQjVPWqyQmcEivamX6NRwygUcEnDFxtcxv",
  "key26": "66y4iZqwpWAEHdu9uBmL4rPZuW6yoZ6vdaNdhDh2fzqDobMjTixvL83abjMBfZBAba8945XYUFGVVetqByrusvJZ",
  "key27": "2XfGzxA2B23DKYLWmwFH2Mx4e1VXkTGvYra83G32DLzNk8S7JmppQNug6s5q8PKuYj185kFvcsAEwfNLp9N4dJBX",
  "key28": "4Uma19GTTpKEkHiPEZG8we4R4JpvUTZB66xb6UJ3wZCXmbLzunUs98c1BDNod6pRtv6x1p2wYg9VwjQEn3iyL7R",
  "key29": "3bK63A8wEuBFDPxQjNC3KtEspVCqWyGVtmBkR7xxKLyx1485uTCBMfFcNJVACQdDQjeayTCHf2et8yiBfQvGSxuF",
  "key30": "41Yst2dCbxT7PxoBVBQA4ZDdTCAWDCnopbuBWLoGtF19XPgrVTuPgMPu7RoPmNgXogCSVhtGpZAqWiLkG482o5pm",
  "key31": "4MaAzG9Adit7mVbSZAR37SbsyyZaVRfzQfEGfpNcL2WJbpHHdb3mpAeXGpQn4z6N7GAMtCkxEhrFBtAFhBgbSC8R"
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
