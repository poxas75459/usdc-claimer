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
    "1jRgYwTwWKw2isUt3UDgkzk9Ri91biCDRmij41MY4ZKXeQUwenSS5G1xMYWiMAw4encRarCHkDiinvDRs47ghVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ggh3bjvzAyq7GRoytVnC4EMRhLAbWBGmxdw5wS9EeDki25cT3Y3Yvj3gTi8ckjY4r8B2aki39wXxb1SCyWwybkr",
  "key1": "4hKMJRZXyG8w4AzfZ5AEtUZwLoakU82WwsN3UzBfMRsWEa2FQJCth6cUPVAw8CF41ufGDcme86yMkjFb4atpw6PM",
  "key2": "4ZqqU2oCtv9uWVXLG3Uzq3fCocUZcX4sD2keVcPE4ZDHuiJ3qNRczjB8QKxqx1ZW5XK5SXCDgLrZQEXbPMqGxzdi",
  "key3": "22mfec5Ku4vXErVPW8e8rABM1ojyYxerG5VNdGSvwjfxb6PbHnjFFUhdmDXZ95ZLE2e9ZBpQgBaUVn4gKtFJY1Ty",
  "key4": "k3Dy1nHgEqrGzZ136LvqtpxT4rRvko7AxZJRstWQB9FinefabKMDrJRu9FZHoC9vLkYcZGgGs3YeVJhL1kGha51",
  "key5": "3gAH9R279KkZSmA92EpYn7ME2JjEtwKTxRLDNhVSghLrraWqNdA6FAA6aJiwWkSBnKf1DCY3CS8dKe58jvi9Zgo4",
  "key6": "33wDX8eYX2BvXYcTNrgjvTeVxMwxRMy64xbCsEonsDLEzAWoFoNwMYxqgDeAMiKdVw4E3t3j4JP46h62xscKyhJw",
  "key7": "3Jpkd1FkKnRCfPhHdB7xTbYUBmSL3RDY7dKxwndFmGubxTxoo2z8fhNjewfFPsug7r1pnvja4bGffjbUy7NuDGWF",
  "key8": "EwGFFsL51a5CdVmtT6yu2w3AgdApkBwi9fDKC4QrxVLrdMRUZLERrK9zd6R89xtrzDDomYBohGMqUWixw7aKYUo",
  "key9": "4PZoy1ZmXF2tmcRHRentvDtXNdS37b618Tu2FXSsqvVkugpqiVddhQwfoMrjJWXPz9behPoDSWdzMr9dp7XE53za",
  "key10": "2LAhxnf2q7uv6RuitoZjCRSPDHpw2x4K3pZk2tCAgjfpP1xq5crGVbMQdA5SSC9tWEHpBqBLdLfXTM7Gi5kFX7j8",
  "key11": "3NvecZu9G8uQHzmq7X4EJ2k69TnxhZnhjVtXaDvNwMKYsnq2vk6ruDKZcEiD2NLwPQeqoQ26AaZSTEYVhGYYXVSc",
  "key12": "4y1jdh51vm63JaGopaUJnoxjShkVu4dB177fZFZR8JeLVTtksaTb5ZAWqD1jZxorgZqZfXNdA1XPUpPSt7p8swbx",
  "key13": "27VQXxQX5zWMVDU66WDKC2FuWi2VuzmdUit7KBixo5qKXhFNSacaicsSUWaLZiiFDePM2dNPHUSzpEiBQEbnVk6e",
  "key14": "3iGEcAc4jNhSzutPB7iW2ovMix3enKgfjY8rUUqhUH7M2kV2rcTtHnSRQVsxzmwd28CkKd7C4GtmzytNW7y7DFac",
  "key15": "uzQQ8sQ5di3cUqoxRk2j7DspBwnTLpv9YcytoYgj897HrgLJHwSuQNn7LMTAQcvPBJcLQAgQUYTut6tb5ABB3YR",
  "key16": "32vxWDR83UY2vMxT6CR9xL23EzyoUpr252NfsibMfjmHjCKz1JUVi7ErEGX3UocWK3j9ogeoxEXMjhHXEgTLsTsL",
  "key17": "5UrVtdQvirCFm7qczCbeVzySfC1UH4YkaZu716Fw7Y1bkdTtQtfWbRoZFLaPR5pEmA3PQfqZVE2yhyBj3s94fxhH",
  "key18": "64N22wE8sVRgPCTb7cQu7H25W4DZ8HmHff9WCrTUmFxTQ7xKjTHruJQD4dHAorkZn7VdbQKuEtUd62eM6Am6sqpx",
  "key19": "5V7d2vRuKBF2ipTPMRT1Kvus3nb2ELoAydXPX2wTcmNL9gyWQdYD2EVqV6EDHW364LpqKuxqoqoUnYrPU5pB2Bqt",
  "key20": "66nK2TEcxupn3HsBQNWUzdbYfWiVWtNc554UfNk3w4U6iETsNTA1KjAzvcghaJiY4W4CcBFtBca4UP7mt4wQTKV7",
  "key21": "5BuksCN46iZu9QcAcD4pspe3e8tqj1dVBQmh36iuABiXpgYLo4KSohRnmBBpkAJCnBjh9sfABQ87syvWwZfBVLFL",
  "key22": "4FdsAkzpkaWbJyDzvs1nN2Lo5CmELd5z6q4uBY2pyAtesfzb7xXkXvFP2XUmZrn1E2SnnYP332vx48HNUiHsdfM7",
  "key23": "233uMoctRfm7qDubj2qxSZhvSR93RY6SfCGS53BdovCqRZStdoT51vV2k5AjMWpHT7ars2P34LvYv5QZg2Ln97pa",
  "key24": "22r7cZNiYWRVmAt1PQiNuX3LDeo3c2S76vsz3me348kUw5HucCeqrSbkmtKD7nQ5Ga2Ti9pAjXRCvnPymKFiyYij",
  "key25": "hzVoFZuDABfggby56amA4ToRZkPBa16CUMXV47aSrcBFiH3MK1yLMr861xpQ5b7DZcBZ3H5hoCvHkHgKNTY4dQj",
  "key26": "dyaHcucbxvC9ejTLKkRDVH6i4u8WRm7YkyXg18A9USeVgeCaB7VpNVrYZi3WjaKMjTWbW3fiBN9mddFcuHLJ5Ky",
  "key27": "62ELgxBH8P2nnnmGt7XtEhmCneJxH3wTZyV4ECKh2Z3eXirGdD67e4ckfRNQAmxDkiDABC9vxVJmBSFvDWYngSU",
  "key28": "2ePPCcmy793G2YBYVh86xRVsGeyqaSc92nXHRxVS2V9yeXd3sFf5sT3okbwKWTUFBseRpAXFuy3h2gqmb2bdpqgo",
  "key29": "3KCLo6M11eqo14T8c4aN6w1AB1xt2r2G6NnwHbGodjbSCSWUs5HV6pjfwarmJj5A4YGfN5geHfHGiAybS1WzSpLJ",
  "key30": "674dygLuz3q8abxUKBM7dAWmZx4cSEvYqBP6Y9b6MvPZTgLKkwcSqihJUCrRrMEVcvkUHxEEh3XXae6PjzsAQ3x8",
  "key31": "vKQCpbut4G3bvKx4ebnBPw1arsJ5w4uhbpsVwfzox7syirKFmtGCJDabMrRifjyDTGWSZeCRi8yhPyGokvs2kb4",
  "key32": "2kJHYnYLGTe9ptTMnQL2aKKHzwmRdwYxMPWHbunU48vunBTGz2p27GQZWR5hFf9QFsEes2VKKqs1TNCEQG3AUmRx",
  "key33": "3XEX3YhnyNwiXttpomfn5HWfEQP63PFAakKUVPrBSKGNpZfsMpbmGLppWK8YCpyvRVdZEMfm7JboNVdm5Q9P4nmJ",
  "key34": "j9eBCfK1whQB3NkYpkiaWpabxM2p6tQ33S9XByYZo3jX11Aem7XB4W6NEJTK9uTmBS82KXYYbHPMHkQ1Q5q5qbu",
  "key35": "CUhuZ2nCqBKnB1pY42K87F4ZWtK55xPWexhq9hooYuDsCuB3EWmegwrHaXEjbAgzTzzJCimPA5rBHcGk3z2mVG3",
  "key36": "5h85HkYBTWRVMFBGSvxUx2xMgyhnU5XHUau5gLV8fg7pw43uoEs5oGbqwqY1RcnkpAYcL2hSFVDS7ho6FYeZTexi",
  "key37": "2opTabCQgv75b5X9zJGqG8w43W9oKDqFzv6ckXjpetq5XMHZd7LWNHtdzdfrttDKsZeZcm6ReKoRXQXEL92Zp9Nm"
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
