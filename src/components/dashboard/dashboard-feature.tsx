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
    "4eeGLwByQ9AcZQAB3w3WZVjZhxUb481QAciiSviUBs7EJ9LBrNeH3sjidMXAPu8dc5FiuPrXAxuvuv3o9YEDBZyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6V1TSTH2wPXFe3tiwyfQDKm6tCJbJub4CKa4169eVED6RYJHs2xtUTQDa3LsfDj63jtcYdshocGjsieKy4sD8G",
  "key1": "4m8hiy53J1zMcku4hYXA2k6gt6Nt7GZqPwXhYj6SAX9AgExHVytbhTz24CNR8KEK2erBzmwy9ap69R6eETThQVEA",
  "key2": "3k45H9CCnJFyWc4DjtMTTMChH2pGeMKvVP1vRjPoW4VTcGnTDhxzBSBjna5ZX9ZUBKHNTgiaVMhunAgEf8JQCSy2",
  "key3": "5NYg5vdYmXHhrtox5QFc6J5xNcjR8upWt6qcHKat8NZ3WBCauiTAfgd3MTvUqaT8N6pWyNVsrUZPTbF7ysNePPvQ",
  "key4": "3BQ2Ew7ccgA2f9PHjD9AKzucbHc44ewxvXEwSQuszM8MbDS3aX3i57QxeetKQGHsWiiwjhAE16MxJYmsHhtVyUES",
  "key5": "RCKRN9wAindHdcVS3dqZ373Ji8YruS9i6Bh9yyt1MANvL2avihtND7HFHZscA7aZcAmVeJWGL9bgqCAjoKM9ps9",
  "key6": "4tUEx71VrxL5JLNTmQJCRX3UFhYWdLcSrCUCT2xEdG4Y93GRrkrVD93HRnkpoaoXbZVYU3MtpGwpNZrvpcnm3Ejm",
  "key7": "2JuFwqqkVeggda2quk2LigQvA3MbimjXhYKZpm3VaKC1CPauusXM9WPBhpPjCMjyRTAdbJfFsfiQoTsUAauDNosQ",
  "key8": "5uAimd7AHfM1D4rE799sPU9LGBWTpde9oEwFwdViyvwFbyagdBEKFsaMpc38XEBVbaojJtZyKnzWjL8WLhN95dF3",
  "key9": "gkGPMU1P4cfuNRt9Wiis981NTNDo2iFNrdMdwbmxSap5Lu8a7vmF8bk6FiGk2Scu4eipbSnFADZQp91c2rGdvHs",
  "key10": "3k7NUbFzW5ovotWw5oDWCnWun7fiHTRGyqLLJkG8YA17z6vs85b9vohiypP91rf9GVwxe2Sw34AsvRJDt5rYqFng",
  "key11": "5bHhnwEzTPnf1ZwbFt47F1tQQjhg1yKuVAeckMgBqddyEZy9mkFVc8wudx28rcwLdDc82mdxE8wSU9ZbZy58vNwv",
  "key12": "4gyMgivH54tciK9o5ofkRn9YrZCoCggiq5TMWG64UUYfHcSB3ing3ggJQouVxcx4HxaZp3UiurJfupZmyy4fzCvm",
  "key13": "2mc9fs2V8EW8MCB7y97AMgQTkeEt9CrSybqDuv6NLMRTKaGjDRdfAktuYYeLA2SRnofuUny5gqExfeChWdAweqaz",
  "key14": "55Dw2kjTwwwReoTEjKofTF2L3R47gi9VRdq4b5vnvuL7ch2cHm8scrYg2MALAW8GL7wpXkiiChKnSJSSCW56aRsY",
  "key15": "63k5WbeP9pxadczp1URyBcYLR63exqtUF8atQ4peew2Puab39kwnga5cehT2kdQu5WsqxweCQ1vzwoXcujk95fxU",
  "key16": "7zNCMnYqicSthrWr8tkMwXbKZHLncytDiLJ7Yd5FfdZCZUP11eAfbY2tXAcBAtFMEnkGG6zWwQzFUMaD2Aq1U9s",
  "key17": "2X5TfqvA3pw751DCcptzq3aD3cShz3HD4RiVr4PHfMFRaJfzWpCZoqj2JUsXGyhAff2NkBMPPHRJzMz1zL6571Sf",
  "key18": "3MtFN6ve7TXz5Goqzjrja3yK1nuLQefXbjryVzRZASXvE67eYMP1hkCa11NFdETHzS98P1SNd6R3VnBqbDVEiWsm",
  "key19": "581vYYhYtmLU743sePfghwrk3SyzePYXU7FzpSAhy2a3x5BGpmMx48Y4cdbQUY66SFi5Nendrpg4TZEDnuUWEQXv",
  "key20": "d8SHggD8UCkop5TVFCtbuC44vsD4h2RdBtybXVFpM3TomGv9PDS9UkC8C3YVm2Tfqd9trxUiAn55D9M23nmQkhQ",
  "key21": "3LCfvAD4YfDNE8zGCbY1yYPAqgAWBfrqhXA5JBKZHBht8kC7LhhvKGm6x9t7qURGDMnv7fPXGTDJh8mWCqfYkGuJ",
  "key22": "5omnfWWW6y6jouZ92isTu5SgB42McxEU614JtHLmRTi4RfFxxoH6E3AGfkxSJPUvFvSa8i6xfPmBmgQ7vJu2eNu1",
  "key23": "27TweHXjoCzoY7R7oJfCn8oWDej3UfMVjMRixwNUF5yXWSUXW3vZJUpA8ShSsLwuvLYkAfiR7KbagtxFBYavn1P9",
  "key24": "2whSoyYz3VhdKVbywRkFyjsRuuyYfLwt6aLEufDcNvJmwZBdM8TwKPZi6eLX5EV6HuJ3wHyJvrp3kCGcG7SDrKSr",
  "key25": "5cpPAzaACb6d1TY5Me624eAuQ6nMsKaE4MHKrtp3Am4frCLF4SnZ2A1oBkWSxKPSwzvf3vSaFXna9bMrB5jJFryE",
  "key26": "Trn2sQXYCBRssm9Kx6rvdok5LsKwDJXiaNLo5tjFiCtYUCGnbKf1WVtP4aH4fPNu1hq5VU2SyHTWqBD1kAUBJPS",
  "key27": "2eHQ1u5ijuLj1zW3H8Cfpu49tVrotZ5UhPAJCQ6nqXxdU9o34pSkkrCLEnGijHSMwkZZZ2WWnfFW1StAM1VpMyiR",
  "key28": "4X6yDRcJUu3YRZCKx996qyENpcw1NwKDEV1wxLtQ1YWuK3rUUAXk6TngW2hgA8vERzZFDbGp7cdheW5BhuPBPyXL",
  "key29": "2ZXeJydFXT91qws86AEH4TQq6s1rPFAtWG3p8D8iTU71La69Fzke6nCrPVajxWUyR5K5jbs3PACQFBNNnrZ6sjy7",
  "key30": "5CUr8anw3EMKkwgLcsW2mRmNtD7yr1ZLf7ieuuCNNZ9c2ANjv1t5S1spMSwHh69B5HAU9p5j4Eew3zv1LZRMDTHR",
  "key31": "2sJeUSS9S9uLNrcKLmAjvpCnQcjLrp8en83PXbRzVyhwoQ16DetraBr6afx5hWNiWYZy2DbGUPTLJCSEm9669GAY",
  "key32": "2fZc9gz9khdu8bSFbaixAuEgPtTHm5D7gtGTXqjdWLVzV5J2a5tf2tb4FpybceqX9goyvdpG1g3ZK73iCLUxuQsj",
  "key33": "3LQhCsyEHuzwaSxgCCFaVkJ4wLGKVjh8wWXUG28gxdFRdnuYXV5zaZp4NjNgjjaZo91kVqkrDSxZ4GLZ7yZVCqXf",
  "key34": "ymvUUg8w1fp7spnteLFDMXmtuecuWZWgtQVwSp6NqsCPLyfh2NUG5LM86jaScFMczwUniPWCJCPiTGtRjjky3R1",
  "key35": "7wjk1XwsZ9JJUgWjf7x7A7FMudRiyXtjK4SJGyn3o4CYk1HY7PeWUCVZ96WsCFjpxuTHWfYZ5UimRDdPVFM7qbS",
  "key36": "5zR2dbpZXPrfqVFJop52TBcNJsbx5m12hKFAU2emm9Wgphmm3XQaXfFT8UGxobxyf6em6kR1rJQCyo9sjN5Qpyg8",
  "key37": "43MWvWH1HKYC767vSc5aBGt6mUSSs9iNAyEx5FPQciSqXYG5rSXxBiSQ1d3WHHzhzUPCtR2wsyGVkEFTdA6NdvL",
  "key38": "2JsF3gMq87GGgSAY91UEfDP9yCqAdrZ4yiGzVyhaDGhKQ413BFVz4WMnU6DBqgsvz9KPz8Pq35nMk3wF1UC2gJFn",
  "key39": "4sMKMpFXxK3ZfT7FFtPbhJrTXwYvsUxC9FhZK9geY9SokQnPGBryMt57WMN4EAg44yZxaCdGRDm8rRFexvoQEuPu",
  "key40": "36WPCdDtSG2NvfA4tzLXvKPj4EbCtJQxQvVxYFeprPdjELgxBDkgrWemQoE464chjSG7MynAvW6zj3RAQCxJwynY",
  "key41": "3bzJ7jL7jpNZY2RE9gkkUt8JKoFih1SJdcbNZZeQrG8ZdJtPr7exSkQdyxEYSjzowxzSc8UN7q2K4WjjDrNfrGw6",
  "key42": "38wDEqY7AR49bhh4iKVWeQnj7nj1fEEpQ6zoZ3tq1P6h9MbDK4H2PqVNCecRXAUzQhBH4gKfw6kzTKCwXgyedqct"
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
