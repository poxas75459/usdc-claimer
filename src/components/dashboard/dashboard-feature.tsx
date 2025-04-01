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
    "3Y4nTGmfGh6k6JuhdsWwQKBnw8YrXGTES1qpeQzXhaiJg6RpiSWFaGXdtnN36rBTv1YLNuqdYdUHQnf4xMvscSG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xs1UNqhFXfS6JPqYHE32qZdtGKpQdK59FooNizdXFtGTk3qftiGW3WxRYs1sxi46zbLMhec6xUR4CiniVTVtFi1",
  "key1": "ieACKgWfUgWsincsyB9eDo6YMKBkPnLRDCtVytZUxt4Xspr8HUhAhnUqrtWB5yybVo6p8DmJV2F1FzYnSNMYiua",
  "key2": "3fSAH9NXnsaH3zXQRk12z8CUtNF8MoHx1bahW4ZUMn8X4pofkgZU7ee7VnLG6eKS4bF41hLJLktN29rKpZcKvT4q",
  "key3": "pEMT7gbmfMG61ErcYot5Ds8HDo9snMQT6UjRpHktiwCMLvnffkx2KN1RiSgaGs4kwvqXV6apee3uaUd8sBYgy1Y",
  "key4": "6SpdrCpdaTQ2nuZRRkGYzVuTrM3TRM3cBJgWr92g2iwDQmx1sej8iz4puThLzT1id9P3hxaKMTyGtRAfzqFtX9F",
  "key5": "57nuwjGc8es6AALS6f5qQvbJsQ1p7VcZ2sgwCzVobH6fkorSpThjkAgG1hcLoTiqsrq8RGuVMD8G6PAwz6gsQuKu",
  "key6": "21to3BMgEJEJ1VoJrBGLtghiMtUbMhgAMPYEzxWRrr4RerrDSRCv3o1hhZCS9kXX2MDCmiQXf9vrXfbAnjG1NF1q",
  "key7": "2znZgB62nsGvEy3HWjYdG3EuUfPx7gGEbZmGffQwW66v8AwkZYS9KpWFhb8zSwRECQuMSpXJyw451BCXKXaKQMqG",
  "key8": "4pBwC8cXZGf4vhdtvZKBDZUGz6r9UC24DCf3QQzctYJSp46thv68WN394eZ5aFQfbKmEEiZ4y2qsSoX82ogtuVvy",
  "key9": "hfpNC9TmvqHP4SYq1nxThQph9gyHKTvkgw95bh3Msi7TCAkHw3eVwpn6TQynC3vEGjoWEjwvXwTKXvbJrDhLht9",
  "key10": "kezcKgVKnLFstjsjXk4qXzNjaADKTx6Xr48XDeswk2DtiR6AKk8j4H8zMti4nHfB3Le7pxHgVNV8TuBZXtY8zmP",
  "key11": "5qxFZi6C6LsWvsGLXJXeQmrXwPvYRcVLgRfbm5FMUe61e2382g5maDzjZKxSFkU4asBPDwfaegdunXH6PrV6ForT",
  "key12": "61GZtVPsX8sfSDdS1cwLFYmF9nE9iYMxtZnvZKPiq8L3GMnb49nAK835L4HPzCkbfVMwBY9gCZ6woGiSZsJcP59C",
  "key13": "zyMWvc9zEG9mHC9eMmqm4y5EYLZRB6rCfn3yMvZM15ajkeybWk4v3H8fDbMS9mddmwToYjnSNwgXVjbX3Lhn3bZ",
  "key14": "3oroeZmx5Uc9MDUSYfBagTaZBvXL9iUAAVMbequMc3NvBKtwKf95YkRFqjWGqEcRLEiJ3LTqGjTHxJtjRAeP7amA",
  "key15": "vnn7JQWjYEcH4jZDBL9sj2VpCwZ4wLVDmXxguZHZqt4GApfkNTKiUGwUxnM6qkC4PzfyCTSo8YNbxzHYxUtpAib",
  "key16": "2tUhTamGoFDpa2m6DW26GvNeZC9HvdMd1wRw7zQZyrJ9K2LMaEGtN9T7EyTeMCHJzXRaKQ5aAJv7W7ZmkWAvf8A8",
  "key17": "5RKVAjN3spML5rrLxxH3PAbU3F155HnESq94BGCKr4WScm2HVbXJGX6fqVzEc3xiJFZyzaVCxQqEXtrZ3mk1X4Lp",
  "key18": "yrBu53PuWj1kUgvaanDytmUmMaJpnmJwaVeJvxMcXAVsivhTYBtEHLvz6JRYZfXbMNJgVbDGAsnYYxwXfvVjfSs",
  "key19": "4qQeT3pRmEKDn3tX6T6TBXLVC4jbXUWdZKLBfHtiVw7vJX7WBGfXRvgbfLFo64pqUiBkPf8ZRSjMxRqMuCHwuvrp",
  "key20": "5cu6VzjkbghHVb2hzTgascE7CLnkCkgxMSJtMkwVs7i7QRYUkF9jDrDqPLyXSsGhRzb7MsXCSFswFJ7VBaCu5dAb",
  "key21": "437pRnRBEzjFJopLhvpdoVV2W52ouGpptiqEyu7GgYzHRwiHQcLU11NbMW2btayGopNmsYLDrjar3rJd3KQMJzjz",
  "key22": "2h918Qu5NyowvPwGo4M3C3hoy15BzKKCM547qs4BPzayzYZB9XxQkToPQodCWCn4MniudiLi9iunh7UEw3DNnQgj",
  "key23": "eQH3V196Em2dV6NUSpBHig7uc6JwNVtqqWqMR6RvTYBqMZxMu7eoBB5jX8QZq3hPfhZoR1mYutMz19WcDfDznbY",
  "key24": "3cNqbVKHiqVhDP6jWQ3eD8XssGBxq3PazNYfbMWQNyyct4GV35WXLjgG9hmK3jhQbCpddZvcv2PCkkwCyku3QHSf",
  "key25": "3rVmarMJaTjWXkLtyVkd1Uv4xAVEnx4zYFL9KgcKfQXj3r7EcG375r1dUFgEKYUU4zZdtvMg7HneRkBYtMb6GXTT",
  "key26": "57GSwsNTKf7FEXbdqwrGjyqyKfUiJK2N7AFAuHa6JxzaEm3YmmtF49Nf2D9Qqd6zNmQLWUCgYYpxtuWqdfFtBnJS",
  "key27": "5VZAY7RtHRQVZ8herU26sQLcJ5hu8iY5uChg8NFJbfVbStDQ2z5aTQwkKQQbLGJLi5oWxbTqSnJP3Ybkkiic5FBh",
  "key28": "2g4QDzwejVep6zGr6GqaxgetBQM8FDySMXySeiLT2tVYFRLdczHgenaaew942YZLLuiUZCf3dbddH1RJkyH61AWU",
  "key29": "5HGPofyRdD3cXnGDn49cVpXgxawti2XaMTVPUm3vb4CLQuRLxdmKoEJEk6Bu8sMLMV6euHjatqkW6mSbJRs37zS",
  "key30": "4owDFis5RkMv97V22AxFvdUAWxKzepTAuCcmXDC3kPH5U1LyqC9VH141hZGkhePepZz6RYbuHMsnPiD3yEyGYLzC",
  "key31": "2ccpkHnMdVACmxh4o9f9CbKMSHDJkLgeB4zfh8j3W88UHyGkZZs6RXDnNsyPDjU73BD8x6JHi4AoT2pVFxK4GcjU",
  "key32": "352AxMgoUxJPpdcVhN5ky5rHFjWxnV9N6Mk5HSoFwgPmcgxPhUNxNxxjBiasAZrkV3snzBvDa6MwSifeJsvBx5bD",
  "key33": "3joq2xqL7xrGJ3Muk9wSf4xhVK2T7NUSpzfrEyT95tTVTp97UaRjC4qXJ1jE9QUUAWSBajXUQHN1YrGhX2gYUnEA",
  "key34": "4oUkgEfFzZzHyouVh9io3ghXywqddrEUiPM8beRWQTVBbC2sS7Ua4kKUAvwmYe7moRbfyEUccQca1MFN9H59LhH3",
  "key35": "4dovtY5Hy8bRhNSJRpNKdVgZLqccsZfodc115XP5icRYnKwQiZKBxJdJJowRMgs5HKvKbXNGe2j1MPmHU64f3vqk",
  "key36": "296khTaoBEur4wLTRmvgd7hC3Zdku2SU2VdsbmMaFKQQsCcvVzUVisiM3eoHSgUDTQn3wKkiGPJihMDWcEBgbeiL",
  "key37": "Kw5ZCGNcvn9CZnmM1c5cYRLokRiGC686hib8jj7RFopbXfeeYsD5q2cUB5VWJ64Uhheb5Frc6fUEvqhjqw6dpy5",
  "key38": "H86aKWCjkTsJ4uDVxZjuLfUPKG13ohMrCTyjVisrxA9QffRxEaXoxpkodC9iN1krUbMmLTxeoDeMGVm5Hk8FNYu",
  "key39": "3C3WTwm3DxuzzZfK7Ne7JPxmAQgL2KZFPVPC3HyAzorDmMZaibiD2M9WbUbKEXk68DXMSLbCVKiikUiecktoMQ28",
  "key40": "3FtaBnG9CJEFhF4AnCxBbp4JFUBfPmq34PpBP7mhzfGH93yPML4koZ7awbYWixYKEWLfaSUytJisZ8DDZFTPkTje",
  "key41": "2gshLuwUykkGuNNUkmB5pCgmYMUMtJFxAsL2XpT6Gv9n9daDKHy2Wdxo3kdmQxc7nwWqVy7AysFfp7jMyrYWuCTu",
  "key42": "2Ci6MmqNwakHVFNLUfqBq6MU9ypRxFiw7SHR1gsy8vqXcAguWjX6wH5qHcJQM75vqHz417M5tLQpAgzT1u8dttGN",
  "key43": "5G3j1jZ3SaWMkkTcs6ZBSPTMNRwmsY8R9LvK99m6zvMKnKfDyBtEauVk4L6JcoW3X4hi4iByrZxNU75UB17dvcCB",
  "key44": "3FyjDt8d9JuzotyjRS7zSudHX6xfiGV6P5CSxQ6B9ZTikqMz1isNAV4WPuRBqafoybC2r7FgfvbJxmngMbFqwpdG",
  "key45": "2WUpR5JCsWwMesUWJULcP4EyEikSLG2i1avDpuY5L378FawDrR4Yzyyheq1NAAWHM8iwzc4PEoYNajy7XxGCi5Qg"
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
