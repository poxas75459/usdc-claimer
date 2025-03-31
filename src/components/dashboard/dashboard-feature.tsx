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
    "Rfmj8JTBycYipAc1W8szwhNjfKehDRZNAoSZD65efKTR2pP5wfopV35HLyzzpCMk2fPJ6HS2ZDJ4kX9Xub67jpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sHcSmEkRMnQwYynzpiFARuTJeHZdN7o5QADezaheio1AZDtVQt96ApHov5MurGDdx6JGMHmdcFvMukejMreapFi",
  "key1": "5z3BgsgpXaSFxrJ7qozqzdEavs2oUFjqSgXmYqK6NQurqKBoiA1dCkJdhLgE2pD8aKW3wf2Kmh41TYTWswc986Zs",
  "key2": "Ydy23mGvUBJyY9mQyswK3PVfMEXzSi1bjQM4U8zmEjx8LahvrzyX6Eg8aXtbSK4GsKz1eq6KZZeGG98pj9Smefd",
  "key3": "2vUCZdRLAtttU2F8uBErbSAubKE1tE3ab5rZpHvGZL2avWCQL6WwUHVY6noW3zDNw7cRFWPryEjxP3z2Xs5y54n8",
  "key4": "3vfqVweRUixsgPZ2xbVcPimfsyfuoAHToLWgeoWE9vxndzPMihNp2TEoZxEanA2rw37LSkWMmtMckpETikpB8bvn",
  "key5": "2LdfJ2qDSRa29ot2nP21uJrZKYiZ8E278H4xjSt4KjoEURvabZJiyTzSQvYaS3qUCcaNsC5beJczWZxr4LTRS42Y",
  "key6": "3J1KL94ob51XymEjLFbkr9CCpcDXt11WL2zNdqxAJ12oZadVTDWF8gikGQpGcwU1ynNBgEDND3BduGpEnvLXvhr8",
  "key7": "65oFAxiWCTSEmFEJh2VbcKctDym5BeH1bcTx7pGDo2zgiVhwQzNJ6kariqosrCoJJyvHcBCuRAsfmQT6mR8s2a2b",
  "key8": "2EQTLHmkSS4LjciB9sTa83Do4izMqMQJrHgzAXhchUZmjQ1x5QFqphByqAcrBvDPfjjvoG5DSArwgHCKCSnMqEge",
  "key9": "2nCfU83jcm1shnj7vDytWbamFxmp2AmmbCuaTTVCBNEfZdZv81VfmQQE6XbAzqhnNSoubo4AkGbC9pQeCzT76iY5",
  "key10": "2LsPdcd8wVS8CEtsGqxHwrSxxbS6f6ZdFZ3X2VHa5BR9EZbLu2AsWyWkmbZPyWeGhxPyGDGjnZhd9L2vD6WGMyyN",
  "key11": "YC8jo5M5GBPgTFQc46vvrXN65DqyngE4AKoUKLAYb4Ji1U9ySbnnFNviaXQf7jCLUxC1jp62hrCJgkND9Cp7grF",
  "key12": "3UxWYxkHxZUeFtsFd8MYurZTaMJM2wJYLtnccuA12Qr3L5Qk3VTY9M3yrsLVxonzsUtBfKg1uHiQm3AEw2hVBuKi",
  "key13": "431azxEC33P8LNJi4Ht2ocjz6E17LCirS1ojCtJ15Yrv4GBRzKHiMGFhJFFu8w5WWvkQRdVPmnjxrErFXGoSvb4w",
  "key14": "9HgTLaQxXj4tuRBzBYPrWGxyizZMztq6zeAaBzFBnKcZwLHhz4PVNtdwpwbMe6WeGTDBvk7wmwG88RbiTay1Yfy",
  "key15": "7hpskVmoxP7DBtbsYSzHS1u5ChRdVibJVmrifn5a25GYEgaCw2RbR7QWmBNsxsNbEUJzquPK7NEESiom7PaDSNC",
  "key16": "2h1wnS1kJTnBjMHtryDqB4pUfm2co2rKh9DvmNBcPbtWozaG26uCWdtQJWPKJZj4kZGpB4Pkrdo9TdHVJ5ADNVGB",
  "key17": "5fk7BCEeArCfFwoicmTi2ALhSmhhMV9efUzhKPD3oX5fpqaLwa4koycK5RTJZfRUoRDqQums869KpYLzUX3XPurd",
  "key18": "3mnSWSnRBomEbLmux6FGxSTNww2DbnsxbMjMpsDEy3WUkxZmcopoPDwLMDg6QHdQWd4h9LfFG99A3cWUZ3r8kVuA",
  "key19": "5GANAQDfwGypgmJ973hxerqtSaXbjUjTZuPmoiyRq3tTjcQTeVw8eLwnEn7nF73b7x39DoGEsY8mZh64nFhLHv3K",
  "key20": "3xub5nTiCPrnAjfpBWWJCMc7kroYLQ13zgPHHTy2ZUWEgT52Ss6iPE6U3QFjTCYY2zN2GUici27ATsYfRa2UCCpp",
  "key21": "56CQYtNMdj2n7HpHgGi82gfxmmzgAU179twuz7c8bv3KfC7UGiQXo3ucvuavo6bQWj8wqjV9PYHcY3VKV6HqH7eJ",
  "key22": "4wvqYxkWqWGPb2Um4AioCLS6FKzxFpbTqNUkHtxgtkCBcntM4pZUN8fMWJ9nqH6QFYaSwSTCwg2amj5mrC2nmN3B",
  "key23": "453U2kGvDqo6mp7a1AHxc6VpsVpzJEkKjSWPh3tmoJ9aiK1Ar4DSMjbtAbEsQv8USvyH6tjQwNePrEttwrACwzKF",
  "key24": "TUTLVnWTocuKFKdE947vdVagpTru5ENWYqoywspCarF68Y7VL9wMmTvtscXY1U7nmbM74A3xbWtPWUg1Bz6T6FW",
  "key25": "3auKNSkKiJpPkQ277V2dYXvLSAxD64UWRVymCeddcZYEAeThyGpBUYxfiK7CLQP2RBeySTjhhncxummYW5pM1L27"
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
