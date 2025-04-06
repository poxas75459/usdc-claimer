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
    "4ZBFiNkqb3c8PHWCmY5W8FgVjhZo8TZ8T8XncMphyF8NKWhE23hGNvanyNHNu5utTdDD6C78KTfYRGXh2hcWK7yP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4efJfEzk2jpNA3XRRQgby1UN8QytMQQY28En5iTEyuxymbmrentqqMTGVdFV5tc8SZRh77cTAUVuxe2YJnfVLSZV",
  "key1": "EcSHcaEQEZyWfasmjGCmvcGLv5atCWExrs5SmHbjsJuv2S1U3bK9EFTHjPWqxCyB38c6bsShjk8nNjXQoXER3aQ",
  "key2": "CAUXi7w4iowZjBGfy2u8L7udKpheqDEhvobVh8Q6s31LTpDVjXYF1UebjBtuGDwnGDXEGy9z7RyjXaxLSV4xV8a",
  "key3": "4qhL7kEeZDbxJg9X97TgnYFRpXMSL8c8cZLoACy9AqPGZA9M4tDChdmNehRGqZdD3YoDwRTt1DuYhe2udyrqNWkt",
  "key4": "64ceRjMwqdoMfU8B3LknYPuLvRiLtb171dv2jqoTFf8N5J8WnaWTcXx88ngDqRkEVArSkJrgezav4BqWgKPZ2QUy",
  "key5": "2JGyAs1EGy2ffjdivCL2vSZSXam5SpYjzBXY9UAn37EEodcdEgCZnFw49EKeXYUw7hHcq6aJt9cVKmv6Uwdzmd4S",
  "key6": "3uvf4JPTBjPaLKBTD2sjM1jBZzjM7bfFsMfAQohq1gxRNvRywgFmAoQzVdbFxwbSi7xVBu44VAkZw6dZexX9KGEE",
  "key7": "59QEq2PT91GnFxPxbvxzaSdu2TyMsNPTSrtVqikzfTDN4i7rNqnvGKRUZJazSmpH7Smha4gQgARKpcoKK2AfZGe7",
  "key8": "2B5iPcgTtd8w3cAEn5Da1tQmqWmZbN3pJCtPxgrUdjhKtUczq3es9z76fQ4FrJZ2L7X8enGY4XYf517z6nG9Xj9b",
  "key9": "43xX1GPbdAriWUFa98PHi32PhnYF9JxWmnM6ozBKB59w5mNDgtxE3R1AQgAdjEqmLGSu5cccLGqLVo9QQ7LdnnmJ",
  "key10": "4ijRRksag4fyUihp2jUYw3C5w7GpyMJU6hNyebGd11ReWhzQe8gDpdLf86276oRb5JtuGC39StDVxQ8GvBdzxg9Q",
  "key11": "3WAPpniARM3i7gmwNf8PNGmoPP3trPcN7Yc9dVyV22pNJaDbp3AqtDAHLdnt8jEykqHFnH2UXXkaseQ6ubbi2pPY",
  "key12": "2FCfXQjFY9wToDYBZBZ8uFkA73xZtzWrgbT5eaizeAwgXQxeFy2Lo2ywpbUsbYZCtgXqpHvVjK7TMwhC4gzEsPFv",
  "key13": "qq9ZMn1BvYGvJnD81x9QDQ3ZZwGLzM31k6Pu41MGg2QmiUdCY9xsbN7FvxrBVht5t6e9yUTQtyBR7cKZjcnC9T8",
  "key14": "Cn26Bj9dbYWN5VW7T3y33QH1TLNhwygLB2U9TUkEuf4ZjREmXmm3P1VbDxHBbL8HibSHwA22qqtLrn8z1d4ddVm",
  "key15": "62GB76J9KTknwXgtyeTbHZqTapr5gzVFU6hBgim1iFZBBbnm9zevvF3uXboZSSbDgsenRFdFj2JbXCnz7K4uWCpy",
  "key16": "5BX51BJBPQvNipvGBM1mT8FE4pwaX5QhQSrDnbbUVZJa7jbMcmariXnHPfLSNu8VmyqiqWzx66SWtnC5jWhwoAVT",
  "key17": "3qX4LGk5p35wxexbgsXhsj1QjrfSgt24rTiKEr6wBh95qxyu8yQvNvLJPtfaAmU8SeVPKsCCixSJBgsQzVFjtyAG",
  "key18": "3DFU4MP4b6CqRmf9gxE4HU4FxRJ5t7p4edw3NVsYrwMTQd1cASHvW7qGLvqhgRxttS2ErpbK1tiGoSfyTGBuYEJk",
  "key19": "227ebYjubCts1nHuuufhDRrBXZGPfd2G8NrF4B8ezt9Md8oemk7uNTePvE7P9Jgzy6AomMWWi1KhvfCmmvrEhdJ9",
  "key20": "2tUkHfza6Z5YZXzQ8ubSBYwC8G8HvyHWejMCTN1sM6UqMPruEZwdd1BD5ZmnXoRAgVMiwUSFnB2ZYwkkXaweB4Ed",
  "key21": "4sE7J5D3Kv3BQexeVWgADWwhE5TjxWe7PWe8C5THRfaakRcuy41bPBwk8hgeMwonFSNtBduvCUbPNYj7w327QvXa",
  "key22": "6QyHgBVR2z7DG9jPGiSfSBKG6QgN2LwxCgw8StLxc1gJmHqiUwoy4SptqKTkfWNcFnNdCh9gJ5aryHhNwRCEUP6",
  "key23": "5CRUZvxX7xXXSyHGpDMVbNKE1x3hnuHLbbfMZVqvtQFX8VXpbKShD7NtBwWmZZiSjNAtCbR4qy3CZ4bDKCP7dJn1",
  "key24": "3Vofoz4MHz94e832hxmXRotkodT3py8QA3Ry87ezFDBUPNesfZ2wJzp1mhj6Pv4kiwHTtqvyYhTHqZpeQKHoxoic",
  "key25": "2hYCUHDbtWy6Ainpg4A5vyrHexzrkf6Tp8e48JEcYxyreRbuHcNYrJXznTD4t5UWZzW81qvmsJanqYko6PHXf2CD",
  "key26": "4t84pwiW57sZoy2jPAKG4E8ciiqg42fAZWjWR9sQEaC8akM4yEfQ6yB9JGhjHKrRsTTJtPV3LQkVPZ4WTF176V66",
  "key27": "63guZHamdUZcnVsufc3g48gMjojgaLMevSxAYi8jeTk89t8AruPk6kAyoi5nyva82snD5QDxwpFZmyjk37mhXaLb",
  "key28": "2TLjCLPKPBYeQqLoQDo5XeUJy5JxruEmhqq8PnJK2xPMxb1Y23axZEomD4qnvwuLLPTCnPMLbTM5HZ4G6ZqJq6pD",
  "key29": "2PUfn69CBPoyauyooMJjWYRuiP5ktR8ZCKXxcU68fgrAua1cMcgGUEtg1CrpGmBZ7M4yamMv36yWMzWhix1fryTp"
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
