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
    "F7A3C2ekCCrSx7RQRUowmPMLmZ1Mox4PpR5eaab6UxHZYm4G4UvTU7Vtx6Mix1vxaabvvKEQ2u5HW8Tkne2aqRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EHUgNCAtnmsS398sHrCxC2M9SMxa2TWwQh1abzL6PAfGT9vV61LEBvYwKS2yTGoMvu5dEKPPkq4KBPi1VUkoPCJ",
  "key1": "5uaBmEEzKAFa5zhx6a6DZjrWdsjpPCF6fqnCBZ88rbad8ef7aC42JSeoqaE6Axcta7hLgi63GUfLMsoXnMaR1JBS",
  "key2": "MfmfnVr89Bsjg2vW3gfui493sHfDHVJtm5ryT3cW5c7cGGPxXCvzZpV8aYMyD8dqptjPRAeoKWyGNCjchoYTWiq",
  "key3": "2BFXEw4SPy6YbSyiJzyntP6KqNtdxe1U55mm2xLTUBGF8VSZw1iepdtqXFTjJy9qnPKu9FHY7orLpBrx6fQwG8Hk",
  "key4": "tyiDsjWyqyLX4F94DwE9yiiospeS8Q3eiKuFJJVk47DuKLgvUJZnMSDhwkPCMJPwsZ44TEaapi43ZmrjgX6871Q",
  "key5": "4xiYXUU8XAzwesFWbGk8xSxbkdCgKhB4zZ522bMPERu15f5Ne89Unmm8ww49SspwPnVRCjFbC7hLQtWoM667BL9",
  "key6": "vcYaSHsdKxXBuwaJMy84tcmrpBvaEK5zEKygrZfzA5fKsFVpkhtHiknFDTT3XcUdXJMsa5tqamxyDKVocPegUwY",
  "key7": "461FEmTk9BzhucXc8gY4QgNBk5Vvx45vdodzx8WTpdzKEbi92F3jskUdEHWK7dLokkQ1LFtUB7YrxtvtZahHhpeo",
  "key8": "4Bcm3Lqt5CJyjD7knpZue9DQwe54wMKr2f72oziBdJTZ9NN8c15B8RMjMUZr3RfR7EBPwf7RFk7ott78XxrFA9QB",
  "key9": "4dnVGg3e69yY86KrNeHEhWV5jFmNPKzxW4fxftjcszYdJsSEmx2EtBibNVoYeeWmwjmheHLWNMkAJf5TisymNP15",
  "key10": "2gFk5vMvY31yFFi4Npz6RCmH5B2AfzdynfcUWwDeAZBXPthnHmgBZK63yUyBBSu62bM1FUzY5BwcnTv6TWua1WeG",
  "key11": "55QRgyu6qNvwwJTXRjWVPNxukVtzVb6PVfTvfCiBrUiKFb1uL8hWwjcqwqsAwe2CwfVDVAHoRXPhPCBoJRAy5eQJ",
  "key12": "2iA19eRQ25aCnuvdP8TmdsBziiR3fm2NSsYM3pY1sNxJLTHSL9FU9tVbpSRJMEnVbKv2gxLHvz8DWjcGcGLpHxYU",
  "key13": "4XSCsKba6jpC7cqaAKbmCMTDyY3CuBx6jue8pboR9TExSw6njXvjeCM5b4wHDyEoTE1YhKN5dUwA8EZqdesMLvr1",
  "key14": "3CGvqBuscnAnobt4CrVATcU9yw84t72KkaKcNXobwP3BjEYKF9rjdZE27DoHQhxmSfm72Hjx2krK8i9Cyk4yS3pX",
  "key15": "5QCoHuEx3SUfT5J6GR1jdzxu2qhPQQ5KxXkzLPHUNM2sctLrxPNApdpLkUjziKgdtGzWz2GcF1b9oLgupUXotvfG",
  "key16": "32agyPZUubcXGWfpVatKFgDWjrdGQkmANQ7SQBGYBf5RGyiP4NaRfrD6i2qJHd4o2u8AyPyw4Vry2ZvbMWu8Ndqk",
  "key17": "5JDQDrMJGEfDu7FRdyob7bZXY3kHRTP1T9df7Rqc3Kw9kXjWQzCBuB3R9gPYnbUTbt1dy3drNyRLbierVnCZcqF5",
  "key18": "2RB5JUdw2jruzMrCKGr3Njm5Q1y9Fa4NPWbKWRVZa8wnpVqv7U2mo4bLfTH1iG5MM8TamsgHtqWw4mAAXWRhbmRG",
  "key19": "5BJMhaoL94NnzSTWjFVmVT5FMKACPcK8gcTVt2Uq8skuLvJVdRd9ZRZFPuzhk9v9mBVe5na7sok4r87NMhK2Z8c",
  "key20": "MQGhG7RmBgyh6WAcCDqLnYsHBxU8sdDwE4Y7g6uyr12F15jPh2fu49LnNfaPNfsXajsvJWyu9spUCoVemY3nEH9",
  "key21": "4GPMwcQYUoADXuhrnaWqSR31o7R6gs9oYiEbKGjVTNSuFLR28R1pwuJUsKjvpjrBuzhJ6AJCgjK4QuZ4yeYjC1gn",
  "key22": "4GsMTPNc8ugQMB2fT2kqh524FSDmbGezP8RrADNSYtbh3WNEyMKEPcJKC1XrrjS57nfybzAeRqcNTP16z1oRB9yY",
  "key23": "4TkvzwExeytmYyiNmTNLZYQvWihdpyhtY9kHtPgwSjeQt9YtKXfVbXpKmTi7UKEVSjM17FEGY2nnzsiAXUbSbEhg",
  "key24": "31bXjdvMj3vQ4btxPKPDotPggSPjB9YL2b7UEnHtbdhb1R8cEHfici2tfoy17jETG18C2wz8h8Jp15P2deDw1TMx",
  "key25": "4SCzBdLgQqAkK4bG4Qbg8rmJXQPuNSpAiKqhjwXCgCrZtvhU8juXZHTkRp6SkDttUWzDhFUHnVbEQV2LB9vZXGvc",
  "key26": "3yZBYB8mEeUxxy6oAf2a1Ga88cGBthS4ad6hzBQ4GmEtPfAhVX9KF4HMWvE8eeSLRbtii4H2J28S6NmkwFLWvtG3",
  "key27": "snMCRMBe74bGAjisus75xBjDkSHqNn5JPjFs1339ivgGsqCn9j35UvgNrZrDh5fXuYjyMd7WirgrJBWPC4zoa4N",
  "key28": "2HRDq91q23YNavx7EwyeotR5hwh95FgKE331CwWHmrGAYoHYiDviiDBzX6bSGSw3zydnnURYp2KmrdQ7cq21Q7wM"
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
