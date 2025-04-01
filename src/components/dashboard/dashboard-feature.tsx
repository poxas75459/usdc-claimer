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
    "4Ltii7MsKz1d1zscnWdqUDQqxjMJxPjT168ZwR6sWWixwDTgCqNfYEBf4tkSaxX9sfq44a9YnjKHXiZaJfntucy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ADLjRGpP6ZTrDGRRkqqyUBLf1n9wF5FZPfohmwDFufTkd4qFdCsdVRmVaXkDM2txs6a8iwrNHCAcMEYiNmVEqao",
  "key1": "3U99gvZGfaLVp7XE5ND7KdPTohiE9BQEjGdy6aQNZzdDQto2ENMeEvCPgjqHVZJ39ivH8RYZev56tVHAdWRkUryx",
  "key2": "nygSuJPAMfsT8eUZqbyjAz21pfUM66inzm1KW6NbVKeFefpmj1ez4piDUAcb4xWHgPkXnXzYR9Fr4EzYdK6VGKw",
  "key3": "Xxqo37fCXDzXeM5QLWo5nznxxxupj9rGEMffYNiMi24tfUsaryFDkBdeGsYvcQD5HRqDjMDYFp1imEKxyRUiHEN",
  "key4": "wm3XmbMKn9Tyzty6rJXdmnD7R6nmF8nfMf7Krym55G95kNL8KzYBx9kt61P3QsRYcgG8eu1zhQWCGXEdvThqzwJ",
  "key5": "2X8TEc5jqQLhmcPK8NRda2djCDNA3kffs1KdF9qLe5tiwXkTLoSeF511hBhPVe7rP3yRqi7PjGUuVtif4oi1x1fN",
  "key6": "5nkGyHquN8K5BCVizBWDJr9GjLc9p7ncbpm11mV4q8J9eE5pa6U9XtF6YoYKm7eNKDATYLfdMK3xhzfxFq48FaUD",
  "key7": "3d6WVo1pKLWp1b5pWQMcBiMZPY1d9tmH4DkkWczp6J6tJGrTdWZwPAatiPoGVAjFeMzi2cmkqZVC3G9j7dnTZMqF",
  "key8": "pyZJH4eLv3mWJ6o66Kn8pFePTwnm1nrXrUrPZSwzbEoekkUDDXMZEgwmqTDN7D2AspRX37wDZXquupa3VPzS8a8",
  "key9": "44d14vpq1X5VXVcVbSHQE4UDTpb8ypmHjQGLJkgfrp86STPfq6fpHcaNWnKxxnRaeotBr8XpK7bJ1k2jFDBYehBt",
  "key10": "3TvXGkGkQAT9aFNSFxVDAVyRv4ufmvA1sphF5KUwvxtk9Ri7nBXGvZX1bevfdE8PxbwV1VVnJZFgcNS7mo8ASSA5",
  "key11": "5A8DY9mJzXbMa3ANgDYA8MtmE2jTJ1RbmabYyhaYuwYP55H5YW2sj5PhHZUzbjPh4uPUX2xZyWjHju5RPmqadcTf",
  "key12": "5aRjYsdp5ftZ4pQL9zSYN95noCPW8DP56eJ5NB5C2iWB63bfWH8VvwB3bBe3kGgjkWJ8q3sNE6qqncRdSemEHnpD",
  "key13": "61eZUjMZ99UZoXP17vUY4gq6nKy1QSa8r8CRRFUL7CHwJ835hYh9LXpikcU3QiYQYkZN2bBh4xzhDzjotJTQSFc8",
  "key14": "2QbpGXyLD6pwk8LFD49KZ5BipkSYpadAmiwf89Z3fbXN76QQXftKE1xJ9P7PPp8KKyjeYUN4zeKESQtVhbthQujS",
  "key15": "33ot3ErMUUaR66bVHMsQpetYrePDWiiXCrDW6LcNtocJc6tegDmpPzDgGiZ6YteuAGNurxD9wtnSzzV4oQeAP6HS",
  "key16": "44BTTUW5sGmCqrAuoxMek8AiC2SjSpLvWv8zqmys8EyFNKcGfmYHLcLWhf3oM3xZYw4tcH2TkrTKzw46LJ9soDM4",
  "key17": "2qfrGZ1hTPxxtJKDF5zAuQ82kQp5d3xWYygw2VufD9xBoGamV56qFAXP6h89gX6qQeXQLMU3W7Uy4uZLdt5ineWV",
  "key18": "33BDPELKRtBQM7HnnkVVbJrSXc2TkVwwLFExeRxasAuxackWDhmDE8J8vdTxgKHPwCQNBoLP9RaDeCMQKRt76Yxx",
  "key19": "4qZ4FyukZBxHtGvZLnMc6eqbM6Q2L34irVBGvXqLHUwFXZVze92kUJZgMw7bF4MDLHoa46TzQm1EdNwdJe716BGw",
  "key20": "5nNVD5rypXivAXvUBQ5Ep3AitrDcsFRQ1ZqGrEt35ggv26vvoHJq96SVMmbRMjaQt8vtTNbscag6nYD98BmjY4jw",
  "key21": "2pzR367b67Hf7m4PYyQZ93erM8q6oYVVn7MG6ZEHCfb23Y1acRhqadVcJVvxznduXWywBJm71XYD8Vj58m2vjrsE",
  "key22": "2o9gTSAehcsABrNVqaLtgKu8et9pd3K4RQL4JoZ7Y8gpvxdBid19KcvTvia4iVgXAG67Miq3uWa9eacgFA3YkAew",
  "key23": "c2Uo993DF4W1cioCqxNyxfuJJnmX2odJ4maA94Z9fy27kMQusNEMcaBL3n1g4S9bZ3wKbPbdTRjrqApoLLozNDb",
  "key24": "8w77qmauuhPpyK6NRtS8LM5dvhBWmeGnHFRTDxsoqwuGSwoCEdfNNke6Y5dd4AHn79eLqTsKbTdb86PAovqPVpm",
  "key25": "2iYsYwtz5GeKuCBeZ5jymYmha539q23pgqCPP516fkqBTPWSky5UTMwxVnM6S7JswTMahpFT4TkGgnHgdZJJ99Pq",
  "key26": "2Vb6B5xdSDFrAEJB9kqF78YDGmsVAyeLhQmXkuLXMyC2DSJYBeJNrpBPcdFd8vymN4AdUAo3troife1gWT1ti7A5",
  "key27": "5fKsmsQMwreMkN2n8pUBjiYRZXkSzBvxwbaMdXTv8xNbo3L2K5jgyc2jZuRryXnF4aEdL4qWPvi6JhGo28bFAiQ6",
  "key28": "4uwmkYyVQxwyF5UeVMSHBQ2FP7FkSzheZ3duVMua9pHm4NBuQr77x2WJLuVdCtJYgtZUNSQr8mC7AFbNfGcF3PC8",
  "key29": "4yYuUEhN3fMdaRfBKN6y76JvwnChdBVySuWfY3vLLd2M5hkCuDbAoYkGkPWJ5AJuXx2RX1gNS3KA1ZX9UiwE7s9R",
  "key30": "3JKr9uhT11cEmJboXvN4ZGzby1CuSAjQVWTv8GhNKprPrHC9e8uSS68J5PdtcjYD9vmeGA4GiuBdv2Ebc4Gb8Gmi",
  "key31": "swoNFWQoZnZ8qs2TyKu7PFSsuk5qL4ua5awX6BGdmS3dgwYuVBLG7yYu2y2YrWdh2NrRLrtJRnXKphWmpRwoXit",
  "key32": "4tZdWpDCaUMjQrtLGM7oxptPb92C8KVRioqDL5jcyHpM15NsdCc1HJ4NuLhJCrHEJAYnF9VCaU2e7dfv6m2yPFy5",
  "key33": "7NLnKBbpZ5tBYJm7c2kSHg4ip1pvF6oF36Kkmx2qiCgjiaQcefdtpnGtLwVKxTb7rbRTVVvztmEWjE6NV1z7qFf",
  "key34": "5Rz8KXB7t7fNKsm3VpMFivEriRf4UDw7cETAg8yDe2K1e3xZiobC2UHXR4vFgEM68NSV7pN3FgW7XGgKTpmWe3tQ",
  "key35": "UyZ7TdhN7vUD2E8McsYKb1or6EN5CwMeoPZ6TYwzZXLJAUaTkNB7bTRvDA8sqzsgWSNqUjcDFCXQXmy9FZAYnNx",
  "key36": "3TEwxmvKMRENu6KzduztqbBDoJBnija8G96Rfv8dbf9K1j1esdcsuR8xcTbXZhmqHArRc8bnD7vpj2oX23hW6kWq",
  "key37": "3MunBazQGpavdMhhPNWhuchQK6tnXgzmgH3Vh2wpTUALrx1oiXiDE1bL8c3Fc96EbDpmFZnHqULyVzJs6W3DLW6S",
  "key38": "FqEHmXc1LdLpWJ4WzUr3unYiVZDHz1mFoZEcdXad4NfFPUjYdxo5aMpk58WctxoTgXGrosw6fodd6K8eWuKoYi6",
  "key39": "5LzRaerpmf7GE8VrAf3sBYq9y2tSjSHyTembSUdwHKfNcSYues9boQDQ8g1UkMSBK3PHcPVQ8BpbqXDFBauSfSDp",
  "key40": "2Aw2Gq78shfKDsRQr3VjrQQLPjWPLHe5UWDuhy3rqscjc4Ajr1kd6Xa8VuV2DUAVhwJWqFHm3fPtQdQqj2DN5GLk",
  "key41": "9b5BvPm963jc3bTh8GxWrXRruTk7moC1KKvYTacYMtTdu3iMQr9zEWnqoBuyagZZ2GRHzpVQAuUSNxvsNkP532o",
  "key42": "5YFqdTjNNVZX2SM7KW39E6RGpTg7yoppTtVoNNLpT9cvbgocmGGkK8APLy3NKRamNe2W61GPP5j1WEH6A8k6vNPz",
  "key43": "GYmZqdQdhBt2Jw7RyUoEKg2i56TTRuTVXBkEWuXgegkgRdMDrq7rUiDchiNYSbnckqMAMJLATWhErCnQoXfGMwk",
  "key44": "343Ymiw8PpxtzpDcnjBigrLdG9Gera5nDhPBoavSWdqXjoScE6gP76wtLh99esgpiT88VFtcGu9mnm4XHp9PpuFc",
  "key45": "5WEcN1chVMWykkLju3MAeSiHSgbWJcM9GuWtzMRK8PYbJn96F9LBEw1GxMEeHAWWqtLQU45MgHCiY9apVeSmvnRv",
  "key46": "4HnCBjFDqtwRPmKbvqz7tKZL8vb3TFDMwErJH33xvT75PuPpPa6neTnqna5RrptgvqtPMrRhprP3DXVX9oNPXDxm",
  "key47": "4cajCDAJP3mTVwXu4eG2ASfvEYNKvcEbTfU7mVZZViNjRjjxBuGs6jNU12iNKkYhcvmv4V82if9hnhMemp5Pjfcr",
  "key48": "3uLsxxYrbSu6ddKBUARLRuXogrkP8NZV5ZCEKBJBk9dFtbuqcn7FYwWN7FzHEni5edDReeHX3Nwo681FpGjcwoN",
  "key49": "4DwuN9eNweaXR6crFLcsaP8rPWkyd1JJXXieGsvtjv9NosiAEnegp2pYutb7C1yDxzdmGbx8SEdZLG8qrMFawn8g"
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
