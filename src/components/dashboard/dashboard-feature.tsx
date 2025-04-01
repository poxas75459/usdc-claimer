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
    "5SGC8STgbx9nn7w7Bqagr5Y1hMSLF4vFAeFVATjWkZ9PfM2K8W434UVMYvDDkjutVCtGgqCpBsoCsYxUCe7u9ogU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f9rEP9GpdT6d6gmRq7rnDiryyjEDcXu2pL4xpkyyvWY9mPR6uWP5qNYPmQVrw1GsZeKPsZ5LAyoqfrDndCeHgWo",
  "key1": "2NA2QMUYTdkt89kMND5XvGB6rkTKH8KgqubY4QVHsBYjm7dLCvhZJkKmidxvzHreSkg9MKyRGw8j2NDdTFseFs7r",
  "key2": "46dFAiovsu8kYiUyvAJhvF3EGqdp8WuooP444Cd7r1fzQyd6M3eLChFT9vt5DW1oU9RPJ2XDrXphM1DhRGGtCsi3",
  "key3": "3bZF3E84CHSqzFaT1wkC5w7jpABW2iYyX1EcwB8CAgRkpKNT2WW5szFAMSbPYZiMWKExhTdyycBd9E34hiGGTXjQ",
  "key4": "5z2VU73EHrpQmWWHDdxewGsHxrUN8cctbKi4vcEnoSLjEtbesgHdBwAGV8nDdFJy2pxTNFk5vorZUmpQws5FymTS",
  "key5": "5nsMPFiNic6SHoj1TksdM4165mqFjz7KMVzdyGhCQeCTWM8KGHLyUg2bXPJriEDCPPW7YSVmvh1pWjxiLyJkWSHZ",
  "key6": "5gCQabAE8xFa6wBJUjpnifoKWqphKYxdCC9rFFmvDsMiqVcHKKApSn36s7KySQAZhwTc6F4XWrTAT6Hx2ghMCaVi",
  "key7": "9BR1VyaE3BCsGjQeGQ7X2MX6ND9f11tVHQjwtgKhj1MW1pPaTxDfYb71EdRZhzTZ7c5YAXTkXXHsyDSZX2dWHaU",
  "key8": "5hNfyV7FeqdEeXmmRk4iPSpfQ7gFifRK8hYFzeGpzdEv8d2ZgXXkhecKEqddMZMx4ndz6briozVydArHLT31JWbu",
  "key9": "dC9QPi7ryguvFVg1VJLoSepYE3M7SHy9RVtV33eHTDezWonWqYaQgf4YihPCN8423FfCJkSpVerTuykUjdTrDki",
  "key10": "5ne7MoAf76mLCEEio1r1gJdDNcd1T4gU7jRLEGVXWnRR5M6ahdx5G4eu8nHUmZVnRAXUxmafREjiM5VPmQsd59bG",
  "key11": "27sePQqTufp8kM66k5XhoVcxUqUCRCXHVHvSkw9fNz9WqXp2VqmpmmgXjy2Vbdk6DbSrhiywpvrTVr9M5WbGf8B2",
  "key12": "21KH83am87w8Fnx5enZHtpwCzTsy8ieo3inSNabRso8uRKmZbNswNdZiYNJiqwpKRg5EVdfunQXFzZc3KVwbVkyL",
  "key13": "31g8rhTNW99kvMZzDmH6VrFP5ufStbHAcQcdMSDsuewRNMbsEUQqMUgf8322k2RouG46MKFNZk81mzph4UUAbHZm",
  "key14": "53iNCaKbn9VG73DMr1Hd269cxtqXznpGhxDkr9DRimTHQesjq7YM9WiRdY8QwyhGgpChmigDTSLJuiMNSfoTebaU",
  "key15": "5dZSaYyxX5b2aRh3YAJrwPFyVgsYrpPGAmxBNbKLeTnPBap83qMQojRYyrxaRRjqM2Sjwf873Bv7RDzEWp2v8MXt",
  "key16": "4EeG516bKqRNLNTDbSLqU2oGu55hMMPgEkiDu5EkkuJgmpuPQC6JgGD8cRxgcDgLzy9fkQT66GkEnEX4dtjfR6nE",
  "key17": "2b9GfuUok8fMQV85UWg2xowHso5gc62vurB2CP6fnAPzAL2ap6ndGysSszJ7UweRWZwefp7JVampdnDkvfvhkZeF",
  "key18": "2HcAdNqDR5haoBAGkRovpNnZEZNJtCwxCLQ8FLnSe4PHnQicNwRfwF9zmpdH4H6rg8q9A41bTCUuVHxXpC9C1PmQ",
  "key19": "33gf3vLgSXPE8eGmCtY3W3StKe2pAUvwnG6uef29yPU15m76VvajwYypzynRYVgpp1mXwiEYZaatBoTUrvYXWxYJ",
  "key20": "WEmyGLYRKPcVJZht19x7eU8LgGEeCcX7tRtJdpCcDwSHKhTEeGa8HxMfKmUVxMqhLATHmsW71g572K63xVa1vkb",
  "key21": "3PpeCcyjmDN8AgjGqdAHEzMSCaA2DiLSJfQJbzJxbt4G7Cvc23czeGS47agbe6kpBTsgUzAr9mb5Ck9FCLe71kkP",
  "key22": "27aT7v4Aph7wsjGjw8XmdCka6Nc9LMmsqVczxkKL3CLyCauqMdfRP4U1jJ6se3cZH1FSLMSqLNhyo6x5vQDRyJbk",
  "key23": "2naTMUKM6N69V82UWAX4jE4nbbrBafr6vMZLMda2EEZS3MbduATFvKW4LyQjiQUhCViFsGrqrJgi6pHyaYq4mWDq",
  "key24": "2izNk8Py84QxmdhX2dzCAPHAGaN31C7n3TC1EFFzXSS9E55atynH9NXtseMk5XhmYRzMLiGiUL4jp1mxXGj7qgVu",
  "key25": "4ZcMA63job5jd4wBqQE3AZA5WJ8VYA8gesE26SAdmmu6Ev8rnryxSGhSJw22XmrRB6gN82tzAW7aQUSsNho1VgBq",
  "key26": "3RYSLGXjEwKLPuDd1bnTZVwbAKKK7s6Ad9cUG2KVFsChHLWaaNUG8hVegsGSVi8m5RTin82DinXdqEcYG1GEFGfp",
  "key27": "3phevZ7Zm15y2iAawQE55VEeuR4oBTM8i7cEJdAYyQyogkfYNJda4qipzcDkYEwg3kyv8e2ZeiT4BeFYc6pgBoWU",
  "key28": "47yCRmYAWyRqbuJ1pCVm2xjCixgoWCzNvAmLAMcwxpNd92hrigfZkxNfoDbijBNDXt1hFjpVPQWYv5ZbEWYd2GXG",
  "key29": "5GWMCBEjUQXkPhqCwCULFy6iezdPyCMNe3GebBPwJLAnyTxWtLFNy2rjFoV85T7PXoqPAHbtaFJdpEJ2ku453n5Q",
  "key30": "Z2HjzFQWAe2wcMmSbQ9FfFdBnt3RZ7jDB16cqwtpFVYrtomFAqWzyaiUPbLSJrMtZMbByzuo2yz7CX61aVVMDrz",
  "key31": "ZJgjFBxBZppxET4ngWnvGg9EQ3hi7giXcGvctX1GFan6w2JyPwqtp6iwHSCM5Y9QgGnWkrCeeMKZnyxNtB5a6vy",
  "key32": "4kRxLV2CLDKbriTZueQ1Tc31ZmQSGDEUEyBGDLdsKQP3VGfTt6HqGoS2MyHUFHqF6b9o9zU6vcHFT9Zcx4WLx6jj",
  "key33": "4yKXr1RxXn8YW4FquTLEDwf3WPvD9eGTmrgAEEii61VJmUwy9srGUHFy6fXfTQo4Tt6Fh6msxPfMedg7ytuUz8Pd",
  "key34": "39aXBukqXe9ZKY7ngMc1neHMg4UZ67BL2o1GMX6zz42So7heWTzTMibbB7yP8V3Qtf8UqPbk2Y9rsDeA2rwymXx",
  "key35": "Ug9TRqjxH74nMdfFLsZoiYUWyssmMqnmSSDHvLpYTohKEBaWCTQqbJbCAZvc5cqdNstzA3ENPXg145dsgYBZVHQ",
  "key36": "3oAYgLsLbPYUxmLP7SgptcvFBCykteUgRL9He2BPPVe14aMPs6FHtAv7pMRyEb9ZgJBJX37uDwFXHvTQ9X2CxSN9",
  "key37": "tfnSDPDvAPv1kwict172cQzqw79Vqb6UsVLv19M83riFDXLLUQMArSTmTNxVYc7NLqc142T4ngtYVpcPPF1L8Nh",
  "key38": "2ihEJUEQKJDgTotdDLtB51xZhz5B1DyXKCknLkHnnk6NWBJGkQGJPRn3MbQuf6pPCoevt13ntUeMqoueaPmXWkQB",
  "key39": "hVfXotRpSS2auiM8gEDBYqz9YoqVHWA1JKr3oLzSG38xVKDzpsKeiUtjLU4dNwamogufdAwRNSZ8qdY9PER2VLM",
  "key40": "41p7yAMHnh927ZhpJjRZF881ZSEv1PnMgyge9SH1e9ZBN2Abh9KrZ3g6vqkYrpBuDNuJsvYEeVFzUYcmkmuariX6",
  "key41": "5NfXvormxp5WYJEtS1MrUMShL8RJ7onwvTzUyASzVYDEqnDckKzZPouuEFkeBxM3nT7ngvM9ffRWN98S3B8g1UWx",
  "key42": "36R1fvWZkax5EbEmJVMgFpv7ZuDxrNXCPwu67sDC87KvgkgSLkqHfLuU1deCFwSGJgQpjLMt1Bf9syvYnfz7f35o",
  "key43": "3rfqLjKB66SFJkxAMmuAPNnm8NP3iCm4CJ5hGucLfMRa1xJ6wMEJ5n28hN4p4LddiH16Zoe1bhAXLtNxxrHi77TP",
  "key44": "3LPHBgyVAAM8GQfgYx5866QJYAdWv2cQvCc4LcRMiRXCuipdN7N8qvogHE7KHJioUgpMAVPUm6xAyBWreRue5ELG"
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
