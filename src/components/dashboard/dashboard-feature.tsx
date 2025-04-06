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
    "5QKTQ7jshAE7LqxNSeyGqzWkbx6yCbq6bk3pipNmb17CWtq65dgnhXDLLVNxaE57gt5THKj2Tnh6xTpdnCka6NBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EZfsigiDUvFtqAvXsDc99NQzqpgdJ38kpauJ3FGVqkXy2YKZ14tJTFk4Y2ai8wuvDwrpTEcNx1nJQd6MdbNrt8g",
  "key1": "5PW7hP8HGFfWqsD1JqF5jkYzMRWAWJFn3g4UGChwQGxJtarZtaS59DvtAHws1KXWUAeNGN3EBgEe7H2tGdXsFa7k",
  "key2": "LEsXFzRTCzKLLRRBDPAe4AG8Y9nKUWkdULXi2qt4ocp7m7G8uriq8CPf6dSeatSHvzkwrFxZL5eF8dHtFygy2Y3",
  "key3": "3hqtbK5UCqtRpM3nXoP6EA7tNuYTDeUKML8b8GyEiNzw4RRPr1PTkfG6ShCN2H27mVurCimaqjMd5WjykTGQu9yh",
  "key4": "5ifyFibGwZ5sjkBeukfNqR2L4PJA4g5uK93JMSkJCnwhr3rn4KUKnymaTVrkFdwFyvt5wFmTYbH8uGvS2WpMNrEw",
  "key5": "4RSJj8VBBAcFQdUqJQYyvhjL6WSeRWYJ3wKsdCrBzjS2VL1Na2V69rq1K2pzXiRD57Qp4DKqRHFtRvDS2dCX6tWQ",
  "key6": "2GaBV9r1K59CdCdZ947PTSYvbxDQpW9RvxRj3DRgSgHNRaxopbMJcSuKUt8VvwpkADLbcSXimKzX8BAnoh6htxnz",
  "key7": "3T11D9zd3PtHF5er9GmYXtLNZqMfXQTQSmWUYWYLPrQtoX84sEKqFCz1fn9XKbc96x5xJwniKyxEYA4qczcPkSLh",
  "key8": "hTdE5QnTTM51kwkMbhoNLRZSwQP6Se7yu1beT3RPQhrKUP137zfhYJWCjBWi1GMisE67UiyTyACNfJrBYAV8n8H",
  "key9": "62S5dq3xtx9VsUYdYXz7kpYsE6HVuNXM4giXQj3KU5mfB2vFqRpAiexzXd5d57GL3aeTpjhwr521y5fwCp28ma8b",
  "key10": "PkmXo2WPeojs6KX3QgBMzQts1KWqkc6J72UVWBYU5ynSMgsF1ocJtX5zJeEQiS9iVt1sL7RxoRu67WUWi34GKrX",
  "key11": "2aEzvcSgZDQYZqeSiMD32BCYFnMkEy44mrBaQVZd4RVoNHTDA7QKCM5AdGS84LM7PVc62eLCRtcYmZyUSkTY7pjG",
  "key12": "3waRMFGaSRMrn7VD2wt3hLsSxjTirfC9D2JS1TurEJ7vE3MvwK1PsZJ5j3hxKt55GvnUXVYjScLAmNULzCtSCnrJ",
  "key13": "5CUAbWfT3J7d9VNZqBciHftdrYtb7TGq1vpact1Rz5vnAhtro3BvgMTaSexKC4u4Zrz9UttvCL9HuUuXoyzXCXsg",
  "key14": "221opxpcbDbBWCLxfzELmmTY8qRz6QSDXjwNTFy33uDrDr34D2XqQmXV36zXjfJUTM1LbGEn7yP5AagK8F958acA",
  "key15": "53ZQBcYzzXNUDn4XtGMcsJdsrxssMTqKs2wsiDMVzs5uhGKgu2mkxYKWdw8XUFLeqb7PKhJz4QKLoW3m2Xx6pzhu",
  "key16": "4CAGdmkA5WPAbeqfmKJfxnpmu86fBv1XnpY26vcThbB7VffxKi9WwNM7xumraX9fdEmT3ChYzYgAKbVbUzzkF7zG",
  "key17": "2t4UdkGvQUPF3gDdgJhkUdAD48DhdkdNopV4qgyTfBXjcToD8AwkZqEeNLEFmnub93UCuA8fmVRAA7V4A1CqrGV1",
  "key18": "2H1jTC8EyohTcqn44RDt17XFkhg1qp6oNwsmEFuBWHYYbBE6PCf5hyCxMcZHxt5bh7E7G9k57jdy7P2GpTWAyZzk",
  "key19": "5SJ3kPgtV9dVhBbsR6wgT88XUyYsCRgBk8TPU1kGcBtj3FNRjyWphCrqiB64bCxSaeuF3XGbQFhQVqsjVzHZgYY5",
  "key20": "2oxumJskNNxxuckuHoN5yx6sDd4pDxTK6TrjKZWVVgnJGRov9tCSZS2ES8h9mbBaVizeE5sFk85gC89vRXEMVPg4",
  "key21": "5LuYtrx4iFsy4sGT1dUiCw5XBFxNXvfVTeAJH3BqNdMefFsp3k2mhTf81j9Gi3YS36GoANgUPxqvNgJq1QjJUMbP",
  "key22": "65UdheNREay9fScmf1bmTRMaecwDthB2sFL8iy5RjEZ5WBNVkiN95P5GkW8F55ErUWzEQWF1yt16CcJHHAA72VTm",
  "key23": "5ePUFgWF6BSELS1VNSC2DiynF4X8A4R6ZLd51FuQcKouPVP28WAz2mzGPxtKLBj9hTmoFLibFrRNadVWdyagtBfp",
  "key24": "38XmzmtYoAunrx1RV6pnwt2SHge2kYucKZNa6o2ZWvRV3zKh8UZvWDHJUmcqDDBFjyqYW9smu32qq7t9B5ucw1Vb",
  "key25": "3dCS5BCWtVHmKMUfFRsU47kuuEasPGFb3bas88cSoeCek8YBr1RPw5sJ4mKJGzG251fgcb1xkgrQCsZ5EeTRL31r",
  "key26": "2UTcUZGBaouYnLBTqQQ5nx8qGkKkULCynet2aeoyn3zg4gaFPEbNARuQqueoU8LDm6WmQLmkY3pJYB6gNrWFiji2",
  "key27": "nLCC9UkwWnEA9tTCPDa2zPGYif4svgCbDzC2K5qBLNwYPdgkMGqDQVroyaTyv3QadgqNoRZshKqezGYtrEdZnax",
  "key28": "4JwF5qWpVxNoiyg4Zg7AYzf7oGPPtxhayzvTd5CxxvrHSxLfZ3VYKnknzrCf3rkqrno9CcNSWDupW9wrt4FJaVpu",
  "key29": "2bNqwrRB3QVJmQGYhW3u6RSVihnQHtB7YuHb1BHRwVp58dZm1QfgWWXTG7JWGH8Yc6MbXVq8F8dnGRVzhknbPaCR",
  "key30": "3vyz5ExUHYUfxmmc7jWdsP9WRdx2ZcEj9gdSpScWXBdCw9d97epdAV6gvzGYV7BBLujPaFLKQtr9UVriYkpyuJwj",
  "key31": "3x2ns4tbgo6uTUJFUt9WfCMQU7tdWcyF6NtdM8ZLMicxDwg6ZN1WD8SstzPngtP7HWDzdDocz5n17GNFHHqh3jg8",
  "key32": "5YJ67FurLJGfJsSYGZR5KsBtj1CNWgTNgJAZbEhrB7ezv5pxdtxTEaqfQkuuZAGy17jWVdMN3HyeybK2nkVntQMf",
  "key33": "5EuwTyifhcPgC26sednZcYM6sMDcgjNo7rmDVzKfouFcv1Uze8xu7HWFZbpBcbN2WwQnMzHyHeYm31wAcfBzfCNa",
  "key34": "5E2L7bvPwE5umr3z7YBfiBe5jRiuHFDAL1QtiR1XDiFzh9yAawS5bMddgi4oFZ53sZbcSVTNgnoDuHWDPFMGcWPB",
  "key35": "5YwYSZHCDHEmbsymR8zBMSYWnv74ULxcuMCNfvi2Df7WmnrXYyUCRaRoU9DkXK5tK57d3YVeAmn7ccdQkggKpTZc",
  "key36": "5GQLTBNnmS4hCRqQMnaBTVaAsrvqZkW9jHaS1qqWA9TSSuqDkW1CV6pctn8oTBGL5Xccf2BiqWkycCcbJkrpvCUU",
  "key37": "3ACSsyvv5zoQWMqqBraSbP6QnApzZmkPbDeb3BeR227HLpX1VPcPpBEqUoYr4GkA718yyHsA6B9gRKki81v7xYu8",
  "key38": "2q5mUk5vt5cmBpfd2ua6PmrngiUs7vWjoG4ZQRitcUVxFvEjQ1L2yPTYTBZt1meJaSAZprbhWkU8Q1tMhnAZumdA",
  "key39": "zknHx9fUSmAD3ZTBBpb3JyHvJX1Ti3SkcVXA9Ew5nWtzHFTQH6RD8FWwjjTo6UAeAfBsRG7khkHYYiqDiXSjCAs",
  "key40": "8wQwn8sjXnUGzsNoLFXdvf6xfk26L6eU1EDcSS3kJaVH6HoGP6fnnRLuwxGK3X3x3YJVWnuimqBUNFXF11pEhQ7",
  "key41": "4puvMgqqfnJ66BvHH7SztJ4oce4ZCBBZ2SNoyU5CLYbMDWKtm4GhJF5jLmeCQDymzdngV8VFXRaW4diR5Yv6afZo"
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
