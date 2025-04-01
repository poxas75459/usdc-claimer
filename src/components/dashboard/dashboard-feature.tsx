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
    "4pLzqqez8QMFPENCVqykYJ17Dx8PpRVhYbpLkEoA6xqt7FxgnwoW1Q6uNDYxfYVjXU3B1yZaFmxMQqBJ3Mfbzg9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LPibJtnA4bojWBsMvVY5vtp6uJAxtP3rbrREPLADcTQtHJti9EBrXphXQZWhzwLNyT5pofX1qwAE2MCTNbCvE72",
  "key1": "2tMK6bZGQbEvG8MNFapJkND2VE7zuqz8nFc7a5grfzdvXNBDJJAzyh6CHsHjYdT2jxtUVGqV5rA19FKVceioPQZZ",
  "key2": "4C4KBxQWUXnrtdUNj5BRYsjfEXgy8MZukvUAGyQny848B2xE8B2ebZJ3WQrAeuXtL1UAKSBTtu2nHQNE5Eb5g3q",
  "key3": "3w2equUtjoVzBGa3bGK971fY2hnd4zNFWPqZodrdSLqnrS2wBVtvUoKi7D6LBsCXb329RPT3KB3sw2PZCaT5q2gm",
  "key4": "5ZzCacHDdeRmHXdHFV3CrKK79UqNmuEQpKYbB9QY4UpjiX6ubytoooNk2uvHsEujtM9Qx2gMLo6d1a3KCXKFwZXo",
  "key5": "4XVU4EvhvvqZbc6rYignAEYE24zmNXmR5WLKbvR7HEHf7ZqRUQT87fUUfGthWxQxKFgdRUNwaF3BoXzZ55edTSEh",
  "key6": "JgmMhk7ti9a2tGtoVcoPYA8NoZoNK4Z1hCRqpD7uweGsQw8iE2rXa61vBMj6b7emnTp9XwZoRTLr4b136vSs7o6",
  "key7": "3Jc6JZmftjazrHEJJvaS5YRqkxUDWVEoVQdwPF72DxpUcgqi3JgAPfHULiyRvvJRu5sbXB5XXV6H2GZ8VqVMZQod",
  "key8": "4v8hnbvJRoQKowzJCNg7YqKTbrcE5ULEpy6hfEL3irQCAdhR4fGgdY1ePHn8mmHg8jaL2TJBq3NPziuG9d4PPFfk",
  "key9": "1kUvxHY2tFomSpMK1bzRDxkjmsQTFixAAoL4UMuzSd5Gis4EWgVJw9FWn8tAPjLcYhX5s8mPtj4PYXCpjqbSt1V",
  "key10": "4mHSYF98hc53inpKdsEk3ZwfnAJfLJqNJfNVA4SJG7QJJE69hNmSTLbyA4QsmfBUiAyq8GtSkXMpEkmMsNs4iaj5",
  "key11": "2qrrg1kRRqDJepShAs2H1D6sqczx3HAA8VQ9WAPX8aLdzNSMHtGTHTPWfNaMtb5wgGAKvgChb9ADiHF9HCpc8nSj",
  "key12": "La27XB6SPekwnVr7Qo22hAHkEky4gGZeG7CRw6ZxUkDMXofmaVZLaA4fvs6Vpx31foHXPD2542yYcPNzovcm7jz",
  "key13": "2RiwNBbtRW74vZvYH2oBGBagHJZ7NWtkrPppZiTbSXk2r7bS4HTQh6et39L6Ndomot2Ad5HoEDaMbXeNC5zARzHc",
  "key14": "2PEwCttxAgbwKg3s7Rit6Hyy5CyDjy49RbSVMwZ87E8Wj3HcwHELcq8PGpAcBdg6Qc7BBLYpiM8qYggLNyGAi7cF",
  "key15": "3YLL3p5RPJC442pc1Lm85MH3jscMYoqw4juPJq79yrhd3korVSmtcRERz5MTbZEmExezDMEkQmZwMhVEKU8FeTow",
  "key16": "4yUkcpq3XnaFchQHAuvbNxB9dFPp6yASBQVxPXr2fdvYLULmsa5uggGmecPjWGdsEywunoyhes2LZp6VUkCLa4gJ",
  "key17": "4SgnpaQ4NtETR3MhpHwcW6iSdXDhfQtpG4JbqS9GrtWNpdp55GzK2d26EQb3wuRmY8gkwrVjrNuWRqog9BRtytfy",
  "key18": "2ga4y8LnM2qhV9dVvswpXCdn8pLxRcrZgm67ZLKYsJ4Lkw1zVuTh3v7njbiyW7VwEc7sUXcc1YYdFcx1n6n8vGJM",
  "key19": "5aYq6YAgkt8cz2D2moR6tjvwmRjgDUGuG7TFfrgpkkEY1qYPTtknUkcUaK1PCZRXQjPptyn9DmRicKLZy5Ds5YV4",
  "key20": "5AmwnVFFwFWh8BSifrefkFVAhAxrtq43rc2J4ZvEAPKMhgbCn57UqY4HiBYo67cyLSvWzquAYoz1nRHuTAZTt1dm",
  "key21": "356pXPg7d15yDVBjFeRVQyDt1f7EM8neCGyXQdqfkk3mnZNJs58obE7e1vLRsLeroxTQNdFR6dPxMr1QvZmhVs8h",
  "key22": "rQ96vm8xSJyDbKTeQJfWKmJBr7b6J6AuaKDkMmWip7j5WrCSCAM4xqxzRhyH8WV2escCiRt9zwxdybGnWih3vg6",
  "key23": "5nxi7rtE1mDFYBwetpuLx3K3opaxicNvzbT62cPPtoK7oLGfn3A2L2aFEXBt7QhfibQmYK9soMm6EiPbYzhgmbk7",
  "key24": "2cXYYNKWtHRPLLwSGyjDvPkgt4f5p7rpX4jbCBSVD5snZEE54LBUF9cf5bSbJcQ53crGSNpyb818i9c9iFXdXwhK",
  "key25": "2h3zRV3UkZ22E4is9nBrB3KKD3p1me6qs67TmA3zmcK7vEmKesV1hEEk3Hjwut6CEik8ncy9eAYXx8UpvK33jSD9",
  "key26": "rCaTse9WGSw7aSYB4mdHrC52JcRLxvkpRnWMy7PWG3wcKqBFKEJKHo5miwcfRP7oFRA4nQDB2REt99gwu94v8ge",
  "key27": "5xVVjd6FKjVvF1wDHzg8BY2AXNShNH64A4YbsH3VUK8p41vEiaDWszexioDzRhr4PF16mCgiePDAtNfgUHU4Fgx3",
  "key28": "KEB1EPWwzozgkb3XeZVtPgMtVcGZwC4Y41X87i1HkuXrfSU92okENZm8dK2dyDMTNQsYm1ginBNHFBuzqMx5MGR",
  "key29": "oF4nF6AkrJKKGGGZdw8CWiBxNJ54x45ZuRG68rqEP5sQAehJg3itLVzLSq6koYTDNVCW8uCVHxWpSwv8nh2RZev",
  "key30": "3vJ26HF67tMjvFpLySmucrPyp9z4FN1L77PPPVoGEJhXdQrWk2HbN1StfnoXj2Z82QtHtrL5hFYTaLGEnSiTJjRF",
  "key31": "Dhfg4YAjEq8NgJ8YXmsVNK6339dDQujPqFKRRv9VhpNpDnG8os48L2AhNh3BajZMaZgFHao81dnSYzmGRPYJd8P",
  "key32": "2YuZneQo4678GTj2ZKMTsu2jqtemcoveqZa7cDnUJedwwCymuQ2ZKBUwWhjRKgVK8Xm6xAtadeNsHUN618XPFe9F",
  "key33": "21DTVNvCGjBdXYwhz6hrBPsa36XkfhD5AyHRk3zUWBi7meFgJdkXVWprBMKJqmHCXhcMfqscyQwYa8SuVrpsNrwf"
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
