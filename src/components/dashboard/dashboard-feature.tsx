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
    "52kvxj9AHpANzEn8BGrDNf4wCWucQ8nEz75EP6UMZ6ixYdQEpdhdLC2HkmooRm8gsSUrY9amtA5oLELdueZNbSs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ezGa5AMLtAapfvT6qt5gsnRwSyzwk7QiCB8DiYMdWAMjrMGfjpnWCJUA1mMxdJfYg5BGvzSgwwxVXty2UYXvW76",
  "key1": "7TQ8RxHhPWyWRtEttG9PfcqFzPwFnJCRmBsj6REgLs5FgNnit6wpHdCe68PW3KJLSFy8X6AeVJ53v2C5xmuXdo5",
  "key2": "5JKuzsuycLk67GnvSGboYq1RDqd7qR6GvkQa4E1n3RofuSdvmHzSxdhQLaqLU7gb4tbwT1CWH1XCbwcXMzEBA8kv",
  "key3": "3dpMjEUpRgiYDAv89gveTVzCs4KUgWPUFvdMDgXUji5mEKLUM8i3BUQx96zXq6yceUUDDWjgQeKQUVnuMsxrhee8",
  "key4": "5f2yEsL8WWyF5WSQPydFK4QMAYArdz2ETrME2yhrTCDWuRRJ126PbYxLPECghAiF7YAPRkKwTQG7U13azFkE6Znf",
  "key5": "27ZJuDDh6SidSruAZMcYffE6WMrtxZdt2ZqidP9fkBFnnFCkxa8NznEKERGKfZm1bPEEqGhpKs2Ms55pMf7W4K1U",
  "key6": "58YL3tQbUEtbsDsmqER8U6dSfyw7C9FrbXTtfisafCt2Snc3jeFSyCrn8e9snzV6v3M7jrFVMFSzbksGhPKiECH3",
  "key7": "2aLDhf6QeZ3Qy4AAoCHWJkHN9g9hHLfSsPNJHWkqvp95KXfmK8z9tQcs4DkYpe6fQJZWg3ZCLUT8ticbiECGRNKm",
  "key8": "2jAkXNbABLGS4HNLEbbikAn5AJaLQ4b75jKDCxLmLwVGG8vXnTHv5mkAmgsX91dNXTdxMFBKSEK7mwpGrbueZu8S",
  "key9": "4ZFdLNmqXirtsSnLcz2ghiHerosNC5xsd6j9BgmBJRZxDkJpY9buiWBDPXiH1mpT6iUdmsFGKNcCMQsCJsqfXPWg",
  "key10": "3HzdqszJ726R3UK6rekvwdHZwknsSDJFF6QYdvwtV5hc6hUXSrHDNTPZrFWq4pLeXZcCLvAvvwxMVe77i6nw1ghd",
  "key11": "4cudGwUvgTmM3tJtqhUTJwzknebpnYzwTk2YBSp7ZLvenCKVmDGh18k16Hsh6f6b72rFAAWLWeUNZBBfvz1ELGvf",
  "key12": "3aUEvVVGY7UK2as1BokDJZaH5G4f2BXzrnwXDi3RB66Kxm31P9thXrV5hoXq6beWSoCGkkcHjyLTyu53etZKCFFv",
  "key13": "4uPLgmTaaZiQbvnPs68mCV8YUrfAhef1sPan4Hci8XAX1ovfGiU5WwFiVTR9ouVerpS8bKirjZ2yUbnyZTvctPcx",
  "key14": "qigAh3YCCyG3ab8gzf7J4jLkNZB9efmL4to1apYEVrqkesvjcYznzQxqKEuvoCPVGKD1FwQv5aXgtfL8MwcWLPF",
  "key15": "3tVDKms8NLjuakep6WhFoGSac8Atfy7Z8B29BZAbyiT4zx71HnqiLStDQmBhBj6gkXiqrL7SPi2KaL3PT1cnLDr2",
  "key16": "45o2hE1DTr2zU9rcF8xLt4FFjh3g2DFxq1kLyWzuNaVzjDebghC6wJSdTqJA7uRuZZQFpY3UUzLgCyZ4uPW9wprx",
  "key17": "2i6VssN7VMDYTM7jP8xitUMwV7GtpZ9U62FtEorVt8oA4xRAMCtWLhbvWnU9tbtYLMDExJG2YLVcncqJNNu5bLyb",
  "key18": "3wtTGPTVVSawA2kYjW8Um38tqkrdjga3VkCAR8muXs9w4RyTVoLobnxwKQrsxaUtgoQKFni28qhbeuNbA1e8aZ2N",
  "key19": "qbomLToUcb4XxYtvibNizKSLqNBoN4RCX6VqnnH4RTHRXLpRhqM7Yt2JsDthZphK6ACYW9Go9uu5oFcMM94bBmd",
  "key20": "5HSQrih8XFFLUSnGoDmZZ8jGnTYPzotCDCduNLnnJrrdBcCVPrp64Vvr6AWG4fQFhDpj1VV2XguveiCQzUnvSYzT",
  "key21": "5QCajrrB57EisYoUT6u61VchYcXjcwumx9yvzFb7cARQPAZMsyQCBZJgzcF3U6eCcNJ6yESa9ffiaXhNSqtPLc8M",
  "key22": "4q19Ysfs1zndNHp1LESucYVCB8sKiiwU5McQmkqVkgEqBp5JqD49PDyRRJEMCTefeT5iKDN7WyBNdAEGjTnwE2Ee",
  "key23": "v2A5qVayXBMtC1KbshHREnN4A1bfPpR6nKnwiXMcUVoo3BmpByXY9qpxMkAvHfxyxWcTVZbUMvDjzcLaXMaSDqB",
  "key24": "3XKyHvFT6JkGfPNP3dC9egygSGgawhFn3UQmL294Uk5ArdA24owKwtNUFgmctTEQ9MNdVFwjhtds1k1L6MpHBHXy",
  "key25": "2DHT5pNP5cWBZvVcv6Hff59WJcycr66gYYx48QtZ9sEoPZti476SGuiyAruXyS4ixAp66brH1EkzYiABxjhd9o4d",
  "key26": "NQm7oHsBDTvpUHNfLdf8JNmfc4Wn5cfuLF5DhEVUcwfVxKrjuBCG3ctrfCH27FmKnJPXbMV2TmX1mL3jRc9DKfX",
  "key27": "3gNwfnJHKP1aXR979eBytn8zsvi4ADZSuzJr7EdNAMUL85sL5qJ511Yf3hNfD5fZ8i3mwwp6aSjhmQkCsxNHuFST"
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
