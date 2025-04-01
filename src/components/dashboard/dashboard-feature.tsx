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
    "5oNH3objb7UsBEwqG8818BnV8hNS6kQJyHhoiUHvYoPyzYMZxzLrunC3mozTYCGLNJ9L93gAUjqfgjG4H8PBts9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Udw2CzLXJmgLMU8XuYd6KfYuHDFrRuTS7Xg33EVBF2uFXuxHTemXzzby1S4oioTvj9yvx14zhzZWHsJNPBig2FG",
  "key1": "2hit9Z9N168cmonmed19KMZLroDNQtfBzN5QW2co9JtwyRhtPZMdPWRth5Jmou3PFjp3jDzgFrhM6pzM5ZsGgzQQ",
  "key2": "4peDXnYAwLNffHJMFzCnCUv5yRjRaEFWi8hBettYjupDvE7hfLQd6pxif4rzX2t4GiuQ7rkGCmioEzKSHUzaeRf5",
  "key3": "314bFyec1MCoRB25RsACkezryWqKAa7hHysWoQX1UNZMTXrjxErcgEC8fYEHwrAU99ediyZtYixMKYz56FybRUbv",
  "key4": "2BV1Dv7fm6ZcHFD9YBkSAUeRXM2QbH7ei1VoY3HNsHUVBsM5TR7ZrLNGW8TNfyUgXusG2W6SVKLSicrCAeV9kcja",
  "key5": "5XbA2L6w8uqihQdzjjwHfQFYgRhwbA6BznUqSy3SX8rKgz2Eig8fWHXKsXFRFot9pRaZQu5AJAqt9KJrCMBLwoDW",
  "key6": "4bCX86APRTek31qfQhkC1ns22KjTUPoBhcwpfjcRokbnkXs2sDc2d76EiDVhXLiNmufbaoyMrsYAEUDsxvkmn4tS",
  "key7": "4A3NMAXaytWF8CsLHnPdaPv94gcy2LWMdYWoUmU4mES8bF4LNi8QwudHbjUDGs7pdBtoHREQfbD5fw1edV5N6ibM",
  "key8": "AXq5UbjPaBvpYEmqNMq5bpL2ruYvQZWFjpvkLPGrj5fXJ452rVQFgAcbaCNJMySYXrkFdfEFm2sqig5jTYoSLTG",
  "key9": "2hPsmQ8JqNEUwym85meEngeMZRF7DcYuXSXasvyatjK5quVzUWhaams66NxCHk8pkqhmoV3Gyw62fCyT4NEsEZpn",
  "key10": "5R9VGu3VJp5qoJ9F34YvX5wdafDhJ5eXgBQm9dPvfDN9vLrhbbh7FH9VtWhP72g9c7z4MoDKAHSfqypHtTDw3kbb",
  "key11": "2WmVXXuL86mdeNYHisMFEEDeDJ1N1kSDpJUVxoTMRMQy6SUAVgzF4DtYunN7D526Zw7rgysh3Eaeu88oZDhRdxLY",
  "key12": "24Hys2VC5sLHuSg2dpWxAyUmdAYSczSakAK2tXpMonmEHWHSYtWVbY9wdjGkwGfyKLk5V87k6P1x2owpyxH913g5",
  "key13": "564nAein4cyFi6v8RUR77jYNm8QKNJ4uGVwsnMA6nRztiaBQQ35He5FyAzKrFmL1KmBmEU2CSt25TXWevEuEn2hc",
  "key14": "2EDGCzq2SzsLrCuNowTXap3bHgdMGUASrQDpGh3bhNkHQsUQgCv1bb6FimF5g6mEFW3UDZ1dyu6yceNwGP7khFGX",
  "key15": "4nMJd3EZrskgPmegNuysoXfuQWw8i3Ht4e3uCSRFKsYh3Pqpcbeb5PrvvYnLwNp96swTBaeGmMc2yiaW78iRo4UK",
  "key16": "3WumybBbjJZaCNmB37UaYwK8pmU6a439Udwn11febHAdUt6uEpkAcfodniz54ixW2VxY1f5dJoBJEfqNchYp3AcP",
  "key17": "482NESXZoQBBrdQJeG1dTVFgF1w49GpELzf2ii9rMZaWMumWTgudEAgiDEckF4FNPWnRiSWb3HfGehHcVJrHyN47",
  "key18": "2tQCf1bNqfo5qnfgq1zL434PkwF1Xn8pJquNYx82NtQcTb8P7upcMx9gLuz1rKnzypMPGnfjMKQziF1AgMNRfqF6",
  "key19": "ZYxikCmRwjDJunGbkr2dqHfRvrgRFK4XWaXsapViQHiFzktp7jixcnottjiYAzL9cpEueefvdTyt8vEUjoD4Pek",
  "key20": "3eu73LYf27UHUZLQxU6JSJAwSawyXTrurWGqGLjVwDvM8SxUoCh8K4RwURErKYTyio1B7mNC3ZYrwYX6Tcbr35xC",
  "key21": "5TwFrgt9QHJo9aRjiekjVhKYj2wUhppWT9Kpr3x27arj4B5eFZdTEjtZeywT4s2oYPgB85gR8pKKWBr4ux2GjtcV",
  "key22": "qypp3fDt5TBamTpEFgHoYjSxB4WVuxHNh7oNU7JbNU2R7dUvsk28CdaDjYdriADycgtjiyiFcJuxnMR5G8dJoYr",
  "key23": "124y1cVtvGWujjhpRpVRkAnFjfRhSzJznK72UUifiXqcKPTad8jpVbWaTWrQg4JqszSUHm4cmLU2rwp4z44Rdqhm",
  "key24": "5wAtCVrvSoL7Nw9dJH4HDFqsrTq3otFC5GCdsr2kCCozgfNmSsDmwvAyvrwG3SYEFBnoiCxGQLimaM3NMqaDCZFE",
  "key25": "2AatSGZRnX1MjeNzvDEevaJKGRn4oEMEz9ubMuDbcEyU18aZaDjo6iXYuNit75V1ETWTda5D7P1gzXgEG2vn4Y2E",
  "key26": "2chKR4848cCeGcQLZ5aFc8TgWkciiMmqhxo5VdVJKDmYfmMxE927o5tCzkiPYvu5NuahYZaD8LBqeP8HKtynxF6D",
  "key27": "4cdVFzpcWY8TgfWZNheciz8bPakBZsupREoa6XZ8knA88BgAkMALP3zLWGEJXpfSWGZ63JSB5meAqKDweZxXg4GD",
  "key28": "21g3sXPagbwDd81J4hbfdHezrw8urK3aRoGXJhh3Db3LrYj8BXWgDVxsg7BfEWE6vbreuAajbJigbM4DjHwuv5pv",
  "key29": "2UgfjsbZvzJxQdPH4Ye8PeHjnUFohMxazBfpP2Nmk1qj9CzhNPMPfeeknNXWHtRLcc5ysrwnxT5YkG2JHcnk1qAC",
  "key30": "2JKYATgnwDTYdRsg1hzZm3dZCM7vMwwSu2uJyEvTgxvpjyTnFzPsEmy2mPZLW3XV6Ryov8DKvbFENQ17pZ3x6iEQ",
  "key31": "63CYoUmsQLWKDV6PEgabSuoXRY2sLoYMZZmnhfgtvxZUec6MLfkh8RfjVyCqDgDAnnSbQwpF3gzVVY5u9azWkZ35",
  "key32": "2o2h7vuuf4SURJcT9J1vjPd4zVgT6odLkSDAuUogFztM72UxSUSMwZc1Xtsixy6RYkK9zaZr4rujtRtPQ63uQTFQ"
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
