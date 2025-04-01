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
    "5u6Xc7sHNNa7VJJQYKjdFvzd5Job3JxiA93FN1QcUuhwyo78844sUxYXMyV2mPjRNoyX5YrmhxCzv1x34daaQoPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAQsVyWmxC7Vc8YxXmq9o9bArtzHNQ9XPg5cNw1dKagpkfmC9ZAuBUmL7tDcz6zDQYwp5mVfE3S5AtMQ3NVFfq6",
  "key1": "9UWQ37gbyuCovXiPWiL2mGpzBixCybn2C53PQHiP5mM4bbMbntHbm9bnwB3NQPPkUUjiBgjkTZMueir7SHhDvL8",
  "key2": "4KKiFec8nvQ65YxFAcHy8jWkKpK1LBSXPUNDGhTrPnhhCzad7hMvxRqWbq9HhEAnUN4fCBLRQnUMus7x9m6qjeDW",
  "key3": "28LjH9pwpdgdomu6Z2n7WLDzPaQpBF1Nm9nnqRNZHZoA6JeW28sX2ntEwiWjFdoGWdgjXm9DF88DJUmsykinLVST",
  "key4": "2q9aPTE2NynQtWSqFdL8v2PnfSdtrb6EKk2xN6vQmKELdp7CGtsGHmotdmC85iBkkPTHs5EWZ1FfnK5cWs1QpCHy",
  "key5": "HX46ErogWTUMbyj9vNxJ11CixJf5bUuUMZYeoX7MYPrmArdCrBJwY3ZyB6JAaEntTAXardCdDvwqXc6QdJMPJkF",
  "key6": "22QedfvyfNcoWioAfgA1rByboBPvoMCwBMvuJtAaa6UL6qguV7ShQp3aM6VUT36qM42tbUknv2n4SHRgQxiGGZJN",
  "key7": "2VF1FJEE2Lr8hPRfHuFDuASD1h5Zz6tovpaQtXsyeUJT7rgGs6DhLNr9qF7bZnvEn2gk7qKSHaKx3gFBPKEh5q6u",
  "key8": "47tFwNF7geVorznXYT53bVBeM3ZicNZepRuQJoGV8h7QDkHe2b7DasnWKVSLz5q6w13RideraMiCPJkkGKXLRRGS",
  "key9": "cq8w5nyRm9TsxRAkQo424Kjeih2paTrt2GAcAsRfsXpeqBiHYRVsetH5iy84FfjoKXZistu7fjffcvULYR9tsZS",
  "key10": "2cybCdy85XtD23a3LWHC1XA8QuufXewas1VVvM73Sp8UcHzHzo8i6qU4s4w1rVAwojKmRzc122zwr8wVvFX1GDfN",
  "key11": "2vs1u9mnmamAQtyTP825qnXznuDzr7BK5PLQfDcuBmczM2x9JE9b3ZfGx9Wsgnbup4juvSuKqhLRaHBXq2yPs8wK",
  "key12": "5QCjYB7PtqA9RE318jVXqhPgYxsX1C5sfeQKW3kWKRWUnyZwrhtAvxot3Dbq3TuhbcUbHy398tTmeMnTrD9hn3XU",
  "key13": "2tGJGqpWUdYo4AwHqgyHD8Wt2ZYyn9mQRdELKc3bkPwTALcLXhDvJCKMGGZSvKN7fDU5urgLcmKfNAeKp46J3bCc",
  "key14": "wtPiLq3NEijyeBq1T39iU5MKPyKH4XRVv1r7msr5DCLRYDCi19BzKKLKFLv97zyyyoY79myyPaRdy3SfRLrTfWt",
  "key15": "4oRmRG4h7HUK2Y5UZKK4TCVDUPNaT2q1eYzKfXcdAZhpGA6HP2TQT5UrnVF8DDT6Gh8qaekQxUQv1X649H86bem8",
  "key16": "4LMn8uPFq9Lk2x5vK2gcxnNGVeMPgiX2EaDecHTndsRZV76jGBiPYBsCySirk1HxLXdVBrXxTgtkATv1sRNjyDFU",
  "key17": "3dPnytaAJ5KxuxZUWBPShYQYQB5eWf9pxLhLLYAZiK7GmZPpWyZwshhB7DJUy8vHoJXDL67V4D8QWJJi1GY5UiXS",
  "key18": "41ccu2k2YyHQTVRB1Q6YRJVj37MUp5UZEUnjp2mBgLXcGTavYiHF1u9C5FojjWjWitXx6MkqNLEsRAJwNoBnqtLu",
  "key19": "5wyQNptGb5VLf7JwsUUdSqHCrnwj2HkhqQBcQSqutmc1i8bPEd9wvkoVqMxrUNfMg3uh3NzcjrHuxtMosePmKuPc",
  "key20": "t5Z9CxNxNZoVdFrRHDTQNRKDpYCtUrHAGvxC2Ng6V74PPMQEAjEJXSLBGfLpfHM3T1NEZ6aGn2qtCsYxGY3GTP6",
  "key21": "s8KKuV2bncGY7CzKWfcQjsjE6rPDNBh7x1awNJP1h7FuWhZKGNqPcpmn4fbh15HJo6LGAhWtVhH2e72kjfkNKVe",
  "key22": "3YANxGQXjD3wSCXFt3xQAWymmJiM9n54uXoNW4m3pWSNggmaK6PXUaoCHbbvY7cG51dpsukFeU44JwBRqUWDCUM5",
  "key23": "1rhfJsvms5YcS2Nxj93DtS57qBN22r5a7tma3UYkXqbvMFYeK28sbW6ZAN7BcMqs1oNHFSS3UtPuugWPq4XMAuK",
  "key24": "5jvUFhL244WgdxShNHxQxGo1GvEVvprQVw9ofwZdoF81oy9oHydi7r6oWnLVmEb5c2RCbdCBGAhTc5yYaFwGheF1",
  "key25": "xghLYAmBoYejL3NmivmNtDZHcH9XXjQxgC4eHY4V88da1CSftzBsgcJtVtXWZZqyUm7kzttf5ekpYo1jKhp1TP2",
  "key26": "3VRHSaQ7BdkhdN7FMQoWdM8MLc49HkbH2feYx1z7Yp3nsAkH1wUfamJT12FkoNYpwrRpWoYxr3cQonvV3FNeTsF9",
  "key27": "ztSqarTKr37vT1tCnaFdKrjhojZP16iqfqXsA2Ps95mvW3ohc3PXM3pMPeuJ33R5K9JyhZ3XAwFksjD12UbUspq",
  "key28": "5aVyexzJ2F56E3ip6C7Gk1Jm43GTY6ZM9mc6fdKPT9iNXLsGg7nqAFi7iQWRFzweB455APSok2w8TEMeUGkhq1NR",
  "key29": "5fXDmH331fMhsiwZqjvZ4u5wkMhPRsh9LLaTUzG5xwjQwnQjr6K2iEJEcwHQmu8aDQZGcS8LNa8M6atyf45WKePN",
  "key30": "4NRdmsaTbnvjXMTQxdoDqdy6QFD91dsKGvLFDxA6qVYFssuUtMLVRqo1vgm4pTkC3JbQzDPcWyo5SAz6J2uAFQ9u",
  "key31": "2VCUoHXMrj6ByNeXAdwr4BhLZBBAd3cwFgqMPHwfhgXrRL4D7sb2DGeZHW1hkaBkKUvRMckqUAJ7MBfpU2xvk371",
  "key32": "21gZvUYaqotfBKsN5TJioP1EKDjQEyDdwt8jYUG1bzfPnAjmMkJNJmUJUYvdC98NKkfMWvUKuJ8aiNBxK2V3RqX9",
  "key33": "4hUavrgVUCvhQJWX6UbAUiNcYAUpu9eGd6pgiKn47sgCx9ER1yY3WXHamSUCcSRxpqwdZ8FXRUF4yZwBNXb18WdQ"
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
