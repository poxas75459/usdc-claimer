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
    "4xZ9iTPB1DxhMVHfVNyYnx6eQRiB5CiqdWYi2tDnKiN23bsea1EpQQRYjPyX43L5DLy5vRfCBBkXLL9pXYiyRGC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cddd49oXpwtRRbtZsaXVmyYosD7AtTFmLUoJ3n2Qfrropx8gwMYpU8n1daQARXy7bAh5QXDMe3RwqCyPLi6cjkg",
  "key1": "3XCAWK3PqkaqAwD4fKMaHqrhmpUX1Jb9xzPgxe3rZPhC6tvHMCHw9HszrqtA3nxzsUtpAD8G3dPsTzRxAd9Y4Gyy",
  "key2": "2VfaQyXkVurpAmsJJf7R6aciZWwzfRgyUwVrhNMcENXRoUyPPvnvxqVYp23gP76xWoGXXQGt2NbgEfNo2oZdz1GU",
  "key3": "5EZDRoLbS9rth21urayaMGoxP6ypkzW6agNZKiAqzrxe6rf8Q7ijqXvfTQJUaobXKJJajYo617NR5D9rrAzDL3R3",
  "key4": "3YTkcFLwaYYi28zBTkVahoQ7RCpqGVHrx7BBbBM15hsTj1dfYz7crQVbnu66ESxJBAQ8B9R9KwtUr8W69YQBGUeV",
  "key5": "5YfaYpnzmcpRMoKiQSpvT6tGsRBLS3hVAciX35BMBPARaD9KD8F3iwxRXJhFy9aZfbo5ikd1FkBeUE8bptDwRv5m",
  "key6": "WT6E5S9K6WW21gAExiL8SjuDmbhZPB3KU3y7e9GxKSvL25m7cnXLt7oRCPUs7nKrmYiSqMKnnHujoRPWuuHF1Ud",
  "key7": "5vv3pUekXkCr1xBUvgEGaSuLQJbdg5yzfuzfSuxhZcHU1zeRN222gw37VbUNr12bA8yNMy51xj9uy5Z42EuNryrJ",
  "key8": "1E28HvmtHGEgjughreGD6rQiBwNwEmej3s6PtVojGdsvGgrihMN7tB4hSi9z7izkpTkm9V4NSDj5vZPArRZGdYf",
  "key9": "2ph68knJZL6xapbnPTXiszki2N2Y3u3A3tfxXEYBm9QP4jHswLM7AjuVm69xnBugdZ6qMjBQXaxww1mBo7Ygiy6U",
  "key10": "CWajpLrsmXxKek5rPzexUWzs4LsiLB53mHoVCDXf9kRxiBNgMhKDochuW8iCdLorCr1HNqphkH8amTyzMFBtw7Z",
  "key11": "yT4tKZeYFg1RM1pDdjApuTBULEu8w9VBDbPp2iGFv4yiNZovTkHea7P4cHbZkXbGq9VCmNdRb9jSkXJ1LHHU9Vh",
  "key12": "2zeL2rLZpyWwVsuzTszb83Dti81srUaDXbHddoHA7XAsRunmPJMzcHoc4X2q55SCYaKPMNo7qZmFKxJM5QT9Pqeh",
  "key13": "5aZUPXUWRuCbGFVzCZipLLNmDsGq1Y9nF8hBb34XSvhjpw9Esaw1Ahw1PswuYxQWgPPtXw5GRPAAMnyNr1g7JU2D",
  "key14": "3BoyuxQ3DiZW1x65weKiy9MbTgU7DzsxHTKSbbiQCSZPCVwZTtLbP5R5rZiSbV8WRh9DC9xv8drp345YGd42139o",
  "key15": "5JjNtdE6VSpgiVhfRjwejxP73ZWGqz3Qz8RnGncU1TLbqdg6FDxZrbwTaoi7bVdZH8bAqHs9JTvWPHut1w2VETA9",
  "key16": "2ijooP2ut6uXJSnDtATFdvsZqtmjy5KfKPuiXvg3TQLSy9aNEkD2KAu6MD8k1XHmEJpD9RbnvLaUinYp6E1zsq5a",
  "key17": "37wQQJwLnRJfpYUBs9pfDSdU7Dx5dvnWgjTniDFM2Qzkn2txmNJCCm3Y33ckUA6Xwsm5gABc4mV2J9Q2QCMY6Bv2",
  "key18": "2X8Wgn3ui4QRLxwSXgEm5bKqhaswEwAHzy9nKaL1f3NdeoV1VqLN9pKsn2gAZkbm9QuuUHDxEJeAnG2aYyeX9cWp",
  "key19": "24uf2hksXWLTbFMZY3fTVvcDjWo2QmZ63jMerQsMCBmciD946X6tZhjUgBqewHUZibqyp3RAPXVj13umnDnhYBna",
  "key20": "3jCSPsWXmfNfFAj1tu7WUJbwy2nc8TZjyKYuGeJ3C9BrxahA5Tk3pMLCe2t6sHoPtT57gBxEdrB9G5MUZC3QHBg2",
  "key21": "EfUFDotHAkrSyCpQMxFd2t7VGpCF3Agsbgm2rUgvR33PTW3aM6N9NcRZuCskAwgVeUpBkmfLwt29AfUW9iVEjLa",
  "key22": "55mHPQoxKFznT5pa62vDR4ySQ4pxi85NbVGr4EcnrdgrFqQnkuU7THnnw12x7BpMUdvwzVYfVDMZS88ErGR9cLT9",
  "key23": "4nZfMuq3kFDNh55fZB4PixpRuXvN7tRnc7GRnt6dcqWA2jERP9PvsbV9CfrV9JgxDnuNSgCyCjkJr5j9H9wbtMtg",
  "key24": "2uQ3tR1h2gei6jGAWxwAFpbpNuqEMYyejLbhU7zCQ7RgcNUkzeyWjdAYKdy2GSFfEMF4DN5TQst88TUMawUfbHuv",
  "key25": "2epiCxMaaZeAX1RHnLhc8LWSzmr8exBwRgxtmDomypKzKUfCssC1QV73rXveAsw9MZemb37VhhxTydHW856TRG5q",
  "key26": "4m8icKYJB88JsXSeiBjhgewJrTJTVSamtjDsxpsggsKyCG3kmbhBAVquCrmGCtzmmywZ7oxAsZTWFdCYbZLKH1CU",
  "key27": "4qC41rkwTQ4TU23fq2KfHNFH8SJBEzVHNRhVusqk6BfNXNvThHcpHEUkCPdzUpDCv2nDAPrtDmBw4FhZ8qe9ketm",
  "key28": "2gTZqPV85xeZCtvzReGb6MiAnSLAq5C6mNTjygeTMK2EeUJwrwkoSSXbELDHfp69FyA1Wz6MtBcZMht1XPZtR7wo",
  "key29": "5pMDiEeiaWCGmPVxFbz1Hbisgs8acjvm7UrQHhxLeo1xVs59Xp5RJMjNfwP2AJaN58uYKepW9AsomLDZ2rrL5Lpa",
  "key30": "3LcQxokakcR5xmeKHdtU6kqF7ArpBfJytvqmawufqghu65kzV3Sw3bZWBF7mA5yTVMJHa4nY6ripkUdvwBhs4PkP",
  "key31": "5atuzfF3QawmXJXWWDY6oGfnnCoHk3r8y1W9Gwp2RZooRGhCzM818qj7GDNTxgnbzHE1XgUcyiNsNXEEAPiGFMZ7",
  "key32": "4tPGfZxJhGWF2EADoJitjpwdVRBF9v2ott7hBFEteZmeoWwgfxFv7V2K5E9rvq1kSyAZS8SomVsbTYbcsNNvEG5Z",
  "key33": "5jKYCJeXqxQJoh4Nzr5XAHcT5aHkPeKc2R9efTDun8rxjSg3ZvgRnUeCsLDykDc96f36GyVjzrTQhg1tY5f9PG1T"
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
