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
    "fmcEYf8xrDEWymJJUe92hbrLMHbHieYuwkcb4rnffRzwHyx4PVjKshVZQF4sBzEa7eiRdmjotsQazz3DUTJ42S7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "488BzSNqLMAio6sVyQhLihX4rSRcoPNkUCpT4tKQRkrEqUDZqQUNEsw5pxuqpt5UZBMEdehQG42myqMrXNV7rxup",
  "key1": "z63pDiRexCHuwBhj95bh4RtjyZDHGXFEPvTiyoZ1LnEZenwwnkXX2Dpk9AzEmVKkTL7ibG7sDqz4teH6MCzXzVA",
  "key2": "3Tbr8vDo3oCKVX963phmRT3yxpbm7Q3wq77t7Y2FW96G3QYcME4vrj8KZfKZrRa8zFir3wHxZUynLQmatL5skoww",
  "key3": "5WeGcoBD5z7M5ibs7VLJURomeT28uF4Mn41VgdePiCdZiMD4VCoJ54DEzYbmBp99q5xzhPnVxDZ6mHHtxvqekuBj",
  "key4": "4S7YaRnauCY3nWjpKF8SZNpKoFb7PGbKsSja3YEsYXGB9Xoiq4kUpTTTCBPF4H278zGuJtorJM7FiFk23wtgrZ9n",
  "key5": "3D2gLnKAyS2obz6sycwyPpaueoRGuktm8Dbb2bDqcQ8e8fe91NgEpmjFqgvv6vf1D9MUg1Aovjbh32S538xTpjai",
  "key6": "55Y3j3oTXC7tBsDs7be9qkayLBzp6A83oQ1KwqGsnJhaYN5dCNMWWkYvwELmLAgbjxASeSrmVivmudxV5nMjoVmG",
  "key7": "52Rg1zgtRfnwoTWofvBw2RwC8CyM8qtKuD59yrL1R3nruwtoZE6pgRJ9tAfCMRcKZY4wtCxMWBBLhGGLvL4BhbdZ",
  "key8": "55c2cZzkgmFmhrYs73voAR7NokRUhoWQz6T9cGS87uNTaQssLekg4kAsfrTMKqq5mGrWurbrTDVkySn9pr4he7Vr",
  "key9": "4GyqYTx3JkKAr9AhKd9XurTMDrA4gqYP5NmNbDcZxXDhfvsCNDkaFzAJcMcTd2gC2qgRGWgkwe35REDiPDhqxUVU",
  "key10": "3A7aRxpaPZz5GVYwv1GDPPHZ371q4R2DVwmjgZ7jiG4LwvBdSx7LKxMDdmcwL7D4ttVzgM3bg6CQuFzDv14wGety",
  "key11": "5zFCbw8ZQVTz3uLgnz3stpYY9Ha1Tfgwmbq1TGgXuHmJEfukZZJDyVheDdRfH2zjJfKWfTz1viuVaYAVeeK4Z9hu",
  "key12": "23eZaZHiLUw2VsLWKcYd8eovcdLPLQNkfV3fKt8jFmJ6CiUfkJPS7ZUD8ZmsEX2v6sG2PeruXZ8Wp7o7pbKiQbYa",
  "key13": "ZFEuMX2mPTmsBVqrsizMKTvRZRQ1cKzEZZN3UQxSU9zNrvTip4SmmCLNdaUbcjVXVCfhTRETsTjwcaPspm2j2FC",
  "key14": "4mPHM42CrGEdnJ2mb4WVtAVvgGETEd1jkbMbiyddcRQF27xxXnmu7gu55a6jsG8N6Smwc7JX5PPZesW3bdwW6hv",
  "key15": "48ky2WANGQRgroCdPgH4rs3Lz62Ls6szWYxnKWXmG2d4CxPW8hBuUVxS6jhPSQVwiAwTYe5cNPQ4cKj64cMeKb7H",
  "key16": "3S3QENGkm8EsAtDNqvEngkGs9pgc4VYArqUNYJFyzwF71FofrgEmja44k5diWYXmxagNV8vArihMAcNn7gksFezV",
  "key17": "2vceM6XFfS8mp4kCv4G4dmU3eCpuHb7ywWTKtTMmEFw8N4CGtjAtr1F8tTKrxP2HuHc4psZhbyQdT2hgpgDmSZaf",
  "key18": "3d1ktF3XRFHNzADUpkwcJG7udiNPJtGriRaDH1o95Qei896xennnmMGzZvG3r9p5gFkWaDCDin5XAFhCqkLNAD6j",
  "key19": "EWV4XdVguexNJbrEXKefz5ovtdcg8nyu5phXe5NyGKdPemzk97X9vsLS7Gw2bWuUx4teuwAhYxaHRgsU4KHo9bN",
  "key20": "3Y9CQPSgJ6246NzwXTDcAiPpB5jHzJc2beAyHtQCYDG3VGU6nRYUMj4q3ysjWgaW61sAVs2PeQbkFS2zhNiHka9B",
  "key21": "4HNfbjPrhZ2Y9bnU3z7811SGy7xqqJMgkorAcX6CcHPyrevFRGnoiyU2cqnnoXVHcruUNwLFGZ5amdLMrLLw1QVW",
  "key22": "tqkVo3Cmkd9wKrP4tNRY3ZpCq5q8dPmgZZsPga93jJF2PPgnNMygmD17huFA6BcWro4VyzfAsAXXGoYvLX7F2Ux",
  "key23": "2HHoiGCo69jP7QnoZMgAx5U1qE64pzA3uBZ4cWTajdJipZEss48hhF5b8LtNRqFEiKVMb2ceiisThMe75Ve8GxT8",
  "key24": "2QywSMnouEDFXN26e3fNaSXz5FpuZFnFMEdoMnDAghEUKSSadRdUwSogygeqbQ3ZciCbMfWsRcRXF6es3uYpZk7n",
  "key25": "2HGhkCQooTz5QCaCDiop8vRQXesctN95mCzpiQvtdw7c6AdsU285x2GjgbVoDdysyUhTz56DnzBJSNmm2xuAACXh",
  "key26": "5AJSYMCTRTqUEdojfBKedZE38WLp2yLDhx3m9E5FUkTogjgporCFiPXHCJcWkE7yAobm6ZhfQQvPagrM1zco8aqo",
  "key27": "2vdthnESsSwxXinLyJiuX3jW4VV3PDKc1ykmFgUzzL6Zz8ytX5BXHKx8sXyWoJeCqLNnZy9KBSXuxZEJ5UyPCky",
  "key28": "4hDsiScoN84kVjCXyn4U7TCGpKQjJDHpKPPKLYFhyrQ3Mtb46W6295tY3ozAKnKWr2Bt4ZFdaWJFN5E63ZytHF7Q",
  "key29": "477NbkGSK2LfHej4bteANcWTqk5UQs8ak8FpGr3hAf8oix96krVFywHN3Lic7JzZduKFtRy1DMX68dhVzHSbAxCi",
  "key30": "51yQhUKocHCCTJNJ2gLWZZJXxJChZokdq7C1AzeQ6PmhfPvpdyRjzHpkJuwLse2WJJF558d3PQ53cckBmKUBay9p",
  "key31": "3ytBaCj8AoEetPGUXDuAcaA8rac8UGaeMMY7eKNk8oKgPwgFMHcDzQWhHiAp6XQKVDfQcKSwNqgwGLUQVFoa2ZC3",
  "key32": "5SaRwHsTWyxu9WYr4b7TMZ6GXZAxGtdpuHNEyurkSsCjAmFadBninzZGXkinAdyjYcGQsowtSLpkscYyjJ64oGsL",
  "key33": "5bbcNf8kBfGJ6yYSQX1foyo5WR6zTm1SBDd1RoRN28vD8j8ktHPHiYSR1Qw6bynJbq2yUexva6kFP4kRFQgW6zkk",
  "key34": "5BQ6cPkbP3HNFWhZZcm2Y92atTv5XXbwE1HH2TXy6vE2JyyJSfgB4EGcxF5t23Txgoptg1JpqMEkMsjdzeYzNkkv",
  "key35": "2LCqCu7wPTuF5xfH1aBugSpeAh4GFv6qTMetoyRzUmMRooyJdJqCHeUJ1yZoiM49YdJyPAJ6kmG2A1vRxs5gPyXw",
  "key36": "2uCLG3igYKgPaMrf9Bh4Pxzy7fsaqeE1BoaDY5a6ab8vWx96a5DZXx7TSjFsLnziMXncjYnhdgMx332ydqdV4FAs",
  "key37": "58AxvzAFBoSULYC1i9ZouCvbQjvwkaBpHaGMfnL1NUna2QmHwnDgT7vxEyMuFwP4sXNoGT9uhxtNQPKFdufohNBe",
  "key38": "5McJFyUBcjBHEzEtCHNsxCzFcL81uXmZ4P6bVwrorDFv3hwF1c4ftgPU2n3EpAxTuBsW3TxcM9MuqgnjMJx3yJ7J",
  "key39": "5dFeytCzVLW6itpLhKgMXFj8vz4ZXXzGaczzfiSoqnG8hjiKgbPTMQdRLRjSwzDNyBGEwRb6vwYH83LKxh9vSX8M",
  "key40": "ZcjEUM4nX1WEjuenjEG1H3tfo7z1ckWMFWioySUZzrHgL1UbaEr3H8cvNY3Vbw91Megfg5Vo8itTaLcrBwt1gHP"
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
