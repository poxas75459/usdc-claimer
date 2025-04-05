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
    "5DwkKruHV3ftbxZzEmiGaAydvmGWEsyPDGXEKahutLNki9dKMAX1CaBwMKXft8FVsa1TQzf7dhk9viXvixDwkeN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8pssq46j3XJWuM2QGMDCzMA6bSW7NbD2J8uTZxJsRXhdpgmQJAT6f46DSCP6mg8UJVVKhvoBeYyJ99RJfH75e",
  "key1": "4g23Uwgexj6rq9aorPPeeuhLyyqMFM9UUKU39z32uZAeNhreEAzKF8HmjtquXapMUZ1JkZjpRAMSmDZ91eSMzfN3",
  "key2": "pBQkePTvjsA54iQNu1wTYc2HD8aYAdjze75Fxxu2HPXzXjrVpyQSt37TDhYQcxd7X1oHpykPdesrq1Yxi9vRokd",
  "key3": "65PPp2D4sfx3mEsFYqNtJ7j6h1jhBYPi6FDwx8TVhK8soYfUgUPoJubjmQLSNNR9Z5HVQFrRBvpka6mdZvZCGGmo",
  "key4": "cet9oCP5UaoTkhFbK5wy7sPL4MecE1kyjkhJkNB1MsyVCXNNMCF8N2pL1Zuf6FYZ6Y2dFXWfinzaThrBvDb4ryB",
  "key5": "4uoGNynHKW8sDb5s2SH9221R3h2AJSnWptmU4AyLstyaxST2yB5TchD6wNYL3YJ9bjzDnAfKg6d2iPcJ671jc86z",
  "key6": "2RdpknpvDKeQPQb6DpHH1fBFFnXEMmgWmWt38iwYKT5hERJieke9uKaSUrq8F2nHG3btu6hLoqPMr6ssqzWwvFVd",
  "key7": "2ynt2ohiUxqMyivXjKwseQ3LEqbAzoqiJZLLu3KZeLpDzEFo2oi3q6EYSMheDKFuDZ9ND4QX6qnrhDiCEMvimjeb",
  "key8": "5b2ZziafAuyHDLr2zVTSoyt7uVdZD6HQMNTdKY1vVdZzjUSunKpUWpP3mFZbKS8VXL7Zih316tNsQz28EmZ6hwyn",
  "key9": "cSAdwbeuLWPae5YGZhQa9RRNyCKj7LSZp7KdnAWxkw926PEuQu2KMqH8rbv9FUBJg7HhUYWc3yyGtNBh1wAvgUe",
  "key10": "4PSv2Ucw8WPCGATVjEmVUKn5feZdp8t8LhvoqN1GbGPQdGqN8fSRPhSygg98wNJWjhCt6HESrM3tk9cPgJALQjPa",
  "key11": "2E6x5m4ngcEu2g6CYc83b8V7eaY2LnGHuZVzVaDgbhD6ceFn8bpWCdzZtEt2p6SrpRjRMPnjrU8zz9N4pzLggV2M",
  "key12": "8WcRoeGf5WfTBSeekrfcQxepX5wryc1Muyput4JyiwLtvTKrwzc2BwnMoP9CnAWSmoejYYXyouxLf8ALmzwQQiP",
  "key13": "5pRFhmwpHBkcwDysvUyUsygqtXcH3XwBF4xSwv3aLXHUfjfoAu4ENSCCrKFtL6xeDmbcLQyWzHXw4TqcVCVSaQ7C",
  "key14": "4t2TTBjP7zUkgWURxQmUNfjZYgMiCj9msbehLsAriheyyCMfRG8ALYDviEMuejQ8WGzWRzVGuHnnYKabFtURHFhC",
  "key15": "2mypW6mnh7aT6W7ufyph5gtBM4BkVp4HyVCvZfSeWHENJmNAPkxhMzJMGs8pvQQ4EQh9RtDHWm7A69gMExJSgV5t",
  "key16": "29idEV3qZbbSpW4kevwkpJoMr8WiQ7R4PRyrnLTUSe6dbSmgy8JXd9gt9vDs3HZj5x9vQSb8K9yygYwcm3isjwEa",
  "key17": "33LARxRAbDrBiazuEVuAFH8yBdNHZNpNTh4Msj2YnMg1X8cYpK4s5hWYPaJzBnAXE2aYznVEXHbWmus6SmdUnTS1",
  "key18": "5mkgncFBWk1TamGEG44RutNgsQhhvQYADMdJisoDE4YSp4Aa2oP1z26etPfofsjCf5GxAbEKuqSSKtbg42LQhguT",
  "key19": "PcgenZF8D4FkfNwzxjWCgJ53pGvW9LpXh8qzNab85o9BRRL14waTZ7R4JH72MQsrijvB9dZ2iSoKwTRYhDDCji6",
  "key20": "42WWycKZJqcZLvmgdewGP5sCcrNGw4vYmQ1AhgPXVqS36tb615xYBXAzaeBW1gggCPczeyFSpVqdNNrpemCymjJN",
  "key21": "5xtwnmKb1bJKuBqzMraFonzfTf2QGPU1M9s6QcdnDSacbBoJvV9GVDoMD5ZzPqXGKoYJMbLpFRumnoiKk6abW9QG",
  "key22": "5XdvQpVpEewDpZSmF8MPp8tKBQxBKJkS68esLYN2KuXXAd3mgkWDcMtwGqTkqJMcZ6cPziBUCVWpoFMmQgiTm3WB",
  "key23": "5UhURuCUbmyoEEsxPhiL4skYjTmKParSpYMENWUUFUd4wyr4BwHgT7bZCtDNGpe492dcz7nDMjR2JbcwCGTCfFGX",
  "key24": "2T1DnVUjCNPRcN9ysbnfjF9SzrX51Jr34u4SRqYDZt8tDqjXvTQBn21CLLxE5PtyEBpBhnrfYL1u3Fg39Cs44Kr1",
  "key25": "Nk5MtL992Z6HagwNpzm8SUXZfoL4pLxa3Xk2GkP3MYUbox4hv3FuT94XzXLNF7UdSQv2mPevtb7tQTpEya1JF9y",
  "key26": "3GQFbMUL1BQJ26VbbA1ZdHDHLEoswZEfHy8HdNb2kHTFdMGbUWNPDDH9niPdmHtZASb7vFZia1yQo8yaVHDoQZfm",
  "key27": "2KzSrRrapgmRs1QEMGrN2KqCgPWKfThgFBsKoypSXtjeGBFXuFxF6ehSjhkj6M9jWitAWAC9T16UFnyM3CgYu9dK",
  "key28": "4iMt7r575xZX5Gj78kXrENcnMQPXWHghZn8vF6NRu3xMQeZz7bfnjLU6MzJtqfdvfMZM2eaCCRitwNN4A8AW5s8S",
  "key29": "4HtfukEG53jwpL2DzrLfrxGq8TciqDrJsGARbMdm8LwtSJentnbMonD5V93DXFa5H6YGqpCXDavKhxN7gipqDFin",
  "key30": "PqLTneLCHMAZUiyYdvTz5yte5kgRntjdVKKXTJXi2uiu7nvh4onYCBVxAskVDVqxy317hVu47P9CX2iUNVUJE5T",
  "key31": "5gwo5LaYsmr8xEMAhyK1jrBykDBARN6pJRENPsmR9QqMMuKf1ohFRg7vSJo4WLKvq4kiNKw5wKjyFKMA7xdZ11b2",
  "key32": "4F1ssAmz3BRo2GXreMorJrT1UuKeovXUWrdZzmt97i1pgUKHLajeuc2wJQMbXHWX58e7jsS6Bu9G3aWaXK1qYA8b",
  "key33": "49qhowaoxRTTw2iDeWUtENA6qgjzY4bhT6mdLy96fQy5dAdCEWPN3QmkTHkUx3c4wH1uBpi8fzKs3Fd9yQwfc9L5",
  "key34": "44jjNefosY83xPyee8xZF4wfrH4awLgeQMBkvHfEkc5fkkDpVXarjC7giAr3MJkSfydfntP9hHpcYPTfKyS2rRWs",
  "key35": "5Ye2xZVg4GCcm4bSeb4VS1CuYiwyKxJRVcEG9mKRj7GVnCcwQFAaMYi3Z62AG8d2GhRz5HrMVcNM5RSHJ8NzxteM",
  "key36": "2QQAkg95cWQBqVkZUF4nSzbqf2F9g8HeUiMSBF6rTqFB1XMG1ykuSsxsdR5obfoSFW6iXDvEM9u7aaXFM8YPmUN1",
  "key37": "4dEjsEjSKwEJXtQWKBi4UsvvL7emx5ZmnXjoQygmhC4kZt1dDubv2eXeZHT232quS8kWqfL4aHfgk8vuH1dpYApW",
  "key38": "2CQUiLfQAU9e2E8M1pqgtDEs4322KihHSNH1pMcGcS6BxQJpTyvoFn8JNwEQz3VnGrYMtDALnufdqezQawuNwBeJ",
  "key39": "4tciHaRg1XvqKkdQcfVjcdpBazoSUA2DjCWJXV8amJBTDgRDwWjpzkfPCzq4jQR658dLXFdZYVe56c59HCwZhSzA",
  "key40": "2xnQ9G5RGMX2SkEMVi81FhBnw44bhhgQypqCmG4CL6HzWLVis7BW3juyu3U47yCsG5N11gMjkKe2McFx3qXFurR1",
  "key41": "56qfdA6kHUW9vh6Y6KWTxP2h2eeVYmPXSvAfn5VjWTjau5gMAbwyXj4W4tviqHq4Pk8iDj5UuAQFRhwZhNtn1jyV",
  "key42": "4Tzob5Dz4WGTaxwd9xbDwZq5v6W9Peh9z3JKkbSQcznHpaPa2D1n9U7ya7YTixLR1fvrhRvRkD7YjGUxsnBPbeoL",
  "key43": "5bNJMufa6tPG2TS7n6WpjQ2Whp2hMdtKW7TjwcZjm6az5N27mT44a1dGgB8zJtscKeiakwmNXX11F3ad6tzRvD4n"
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
