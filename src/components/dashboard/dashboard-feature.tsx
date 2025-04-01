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
    "5jMia6zWpS3HjHnYiFYzoSGVw2XHh9d34XeVqsrQ5w1j9N68rBLqGNcAJ7CmpymiPT6x1W66fpXunmUszrDUBBr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMT29MvPvW2pYhCLtZzAPkFJHtvKYV1kkJXbSpkDVTucud4Dn8NbzY5JSfDYRvtRGoZci1gU1fj7Wk1EyxBSYwp",
  "key1": "2xn7NnLxjUCj8ro9aW2UgiVHLZS5zuqYiQHtZ3Q2REDdyKMeQJiCHypvGNW5mJMrSdg3NXH9HgXXpzjVVnjSuPg5",
  "key2": "2gh8a2Lzqyb1eYYyPL4B7tUp3c4MkLd53q9niv4bvTBDJz2NhGk1ipNga9tJDZ6iHxVeRzN1JCUDTVrFS1dCfN9m",
  "key3": "2ZoMR3kxzaeLfjtCLJ5NMdjC5kVN3z7fRctH2NmMyi7zbEpWN7hB3eaxyaEpBWGBC7GUHmPqgEddARZtaKsXFhwM",
  "key4": "3xnQtrPDV2g4UWWuWTgC6m98zpcFsfGTm6CtZ4zT99VmLCczp9Za9SP277f1xjuZyJLXWwvCXCbz4YBxbiLaKDmh",
  "key5": "2ELaYC8Rz3hZyUgtL67nAkBSvsPtWT2Jz36D2vB2oJytLoQikpPAh2PccmGecBVke3TqjWboBTvUCZNgQs19DVpt",
  "key6": "4RwE8pBQgE7XwnNZcN44BPYVaxM54V2sdgsREQZbBb1YaT89EbXmN8gL7unGDASMV8Z8wakKS9w3GWUq58zrC6UB",
  "key7": "2DfqLwK1ELU9azzgRnYDXbGcvhH4w94fV49fZMqfaBVpqaSXhHBs85XCaiSKVcpoV9wm9tbiR6Hq1MaJ5kebc1JY",
  "key8": "3wWHofbY1cSKZSm4uX9RrN6g3rBPiVbsjySf2sjVrW6Z6TsLtxuQ1nK43Z1s5Uq8pWEwAwNiGM5PbwkAzAgJMYTW",
  "key9": "5FiGP8ZnnovTdNSZLcstxF28E7pshrz2xhuYWq9szDRkP1VpBdqw1SpLJno9J3qMaqVUi3QV7kvM4iD7tiJRfsW3",
  "key10": "4JdnsWRXXfs3eAunbhyiXDCpfiscjC22prAgupdt2XB7EyRKEPji8zTkSiVuAGGxtV2vUfCJibtShZXXYdLoqibw",
  "key11": "5eMVmqSupuHA5LFYWWkXmxqrVpsgB2Jp7NMpoKeoMzfYG1SJVobD4qz7QoNmZmUXCdErb83nKuGgq4MtyVi1WwP1",
  "key12": "3AFadGHkPaKHHZzZbVnmmyCH4igkoyUxwQKdJMw7bes6MbAjSDeJwQJa28vbSdYbG81bsRM7FxUCES5HTxzU46ZQ",
  "key13": "45ttbB1Ha2Xf8ExNrCXQT2KeawZSReTpGTYF7x62WmLp72zn63rrAJcQCorzT4dDxK1eumjByoujaXoLuCf9qJni",
  "key14": "54EMHDPFkw11QYqq727GaNoJ5ty3U6JtY7JiB6QDjWjSTRbLrjdMfhEHLKSMThQbLYDFeF8ZMRoBtMbXrqdGspLS",
  "key15": "4WL63QjsCHUeM7HY94va48osx8G7mLL8SE2qTBDJG3MJttUMRziFNeuHWEHqRgjY5FsNuY2UL6vQWy4FQFhucfHP",
  "key16": "KP5mndyex87nJmtuwG25ofzJTMepBNn6WvTLQexakdYAhxrv73cGiqbBi8318AQtZfTB4mjPG6Faem4BCvQBgKG",
  "key17": "2Tvg3NBKi51fWq6Zj4jhFxEwL4Tn4z2zAsrNxZSbKXMkV5KRFp1eM5UjdxpXdEch7uzfwA4qtwggKdrJgjqhwBXS",
  "key18": "4vsjKm3x3owjCsPikcGuBzJCRPHLddE6eX7esLEaYsG6UUwfaZLe8FJaik4eU9wnK6bifeK8xo4Tjy2TYxaZXqQu",
  "key19": "2tZujnuPcxB7SuYC5E6i5gdik9R7KcBdFHi5T6Lv6JwoCGECiUqAaayHgt5psHJ9kxUopmEpSrp2HcXeUP6spCjH",
  "key20": "2SxmMhE7GYq5F2B82rdF7cEPWNHfEQ2ac1iAwmhxSVn3igVfdGVbsSEiBFmN7XjN9bjQarQz3xUrtcqvNVrJgWeF",
  "key21": "2m1ExTPEmvy3gBinBXbwrnXj8ZrMpNoHzsEkHYVMCbmVEmPaDT6GNwnvaicnSP89jMG5UfJebX8gAKaW1RvjDNUZ",
  "key22": "2ahD7ykYnA2s8ATcb87zDdyUyWjm3Udz7yTc9sVpcwqiyZYNvFiejwu4VEA5FeANZTHHZ9naeMMxAw1gQGCh8Qpe",
  "key23": "3T6DXwxBR7pNpJuF2TAivruTs6HW8aoao68PLwsMgwBMDb98RLoG3AYJqggyuJTUZDKwBuFfhgSHCRTEwFa3j44R",
  "key24": "39dsVnVqgVFc94HTPBXXTXC7hd9BmsknKVXobrcT6RbiDgeGNvgmRSFUz4Lyev6XNKekGTyTuR4aizvLnNjxtHAS",
  "key25": "Yt35pbXrFqPrguczwL2c2yMe58DawhQ1swsSD2X8LGyRHWFhCf7vuRLx2F5spNsEzmptM6CLk7pnjgAnyVU5dsQ",
  "key26": "37yj56vhE8cvcWooZxF5TrsdBFRecbRK4gQAbjQkxXZ6kgawTgEFKCzjJVEQ6VrayaGWDa8G5d38weWyvwhiQmoJ",
  "key27": "5HNEWsHs3mqqpx4SmGrRLd3SX1JxgzKTZZQvUaPACaEPXSPjRrUNYKQ9JNLK5rNRB2crXNzCexcYFrvCFLC3eiy6",
  "key28": "3eEe68cVFtKxiAWXj8SUxSyxRRBMJ1zAniNYQCRf4QV5d7FnCTYVr9ufmQRjr1u1aJ4doEz4E8rVKKcvNsRgfLNt",
  "key29": "2H2rS11ygfRhpLMhJhY7fKh1B5f5QGjk227YBcGqjkF5GfgxkVvYNwVqnQr1qcL3HS3jaUU3bCvs25FvAj3oJdnh",
  "key30": "4bdd1TNd13s3JzTpRUNP7HR7tzaZVSsiKXM1Gg46QkoYfnjayNbTEvY8ZYr3d7FswPfxTSNfzwuHXuS25aLBJaLq",
  "key31": "59dji1gQuLk2EfwEZivz69jwJ2wj13DhaZsE3FkPG797cQrcyyjBhyhEQnvqRg4MBU42NFA3woKwz4hQtG8wufBW",
  "key32": "456P7iErAbgxX53rfTZpBLo1A946Vo4PuXr5xgfKDVSrotsnzG4oL18knnbzSpeSUki3wHYvNvzsPnSXeVCeYmu9",
  "key33": "3CX6BbHjNW9NAMh19pkhfCLr2CMLWvJ8nFkkBXsCqSce19uz2LX8sGPAcDBV3vuH7dN7p94Kcn6RhAUQ4eXx8Eqt",
  "key34": "3LHALxBM5nqvmVd5aUwdBQgpS8k7vyPgYuMEgSAwYX3GM1BEVFw8noS7hcLFNDnvKE4qjkq4amg4b9NrFN633F2v",
  "key35": "2twagru5PzoKjgntz1DUfaNowpLubWhdYP12Tk4XMZZuCR9VQDHSsyiy2sLuRLYKGfVooWb7iEJjJRAXwLRusJac",
  "key36": "5i9d7mskqWaGksxXit6dzZwnBRDZ4y29FCTHeoiGryRYFUtUpgFPqdvGgSAjA2NqhCYXfAiQGc1Bo4LiSwkaEYvJ",
  "key37": "4egKhV2jtTX2UGVMaakkD6qLzkvWL6k4KR4MaSLMvLGjeHvddKR4viAXjz3yXK4TQaLnY3GyauKDu1Cmzi7e7S8s"
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
