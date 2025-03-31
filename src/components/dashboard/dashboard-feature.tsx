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
    "5ZTjWu6XV5wxe3EzYus94tURYLgyBKRhHa84orD7FTTKL4c2UAtht5XjQHJa9Ldjt8pfcAADxxB1G6jMKNUzpPq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P6i5ozKaBmAicUZ4AZHmkscXVB24UHqDZVYaoVWSt5kpfMkwuBjySxupz5az5SKsShqxXgqSjKTc3BxHueQyBuP",
  "key1": "5Xvvu325wXKzLpz3Xtw8jUc4yHAkNfHgJjMMBYJ7gozy4PXb3wE6K1ej9Ynu7UoFPENZnVyL9sEYPYKUF3RYvrit",
  "key2": "3GUBhoEqivFH8472FMyZxbnNPiboy6x4aLtaSZhErXP1XhuG3SgMZ84gbSnwgRkaqaVHUzEE2s9wK4CxJPMAEKQV",
  "key3": "2hjnxmckfy3m5F6cHUY4CdSqgehm6dS2U6Z9U2B1N7AaTuy8GaWom6TuNYn34kNURdSnPyDF9JC136eBV5Ku1qzk",
  "key4": "MRFF8eHffEyYUEEiLVnyn6p4KY95ZY3jFPqrttoU2M6vWsVyKQJgc53EwbZ6V32iupUPpC6cdW8V63hUAQY4Jmz",
  "key5": "5toA4CoL1AjmecnHgQDzxtkFff13wokVZKZKQTD2iwBuqTZ4j2tzpsCwpsYxHCSG9fGTdws5CqWyqPx5jWPNbPzL",
  "key6": "5gqfBoC8KRTvgbGmBUSAM6xwfML6kRTJQF9Q1mphE1uFbtecGXHq5S7bXYKdTmGZ5duyeXu3dh5FUj8nogiEkzGJ",
  "key7": "3kbWZUg3vf2zNY5VmpsEw1ckd5WWBrKbVT2QzfnJGEWq14VQ7qnPfKaknFGqcsuKdESuibmj3uwTn9EmEzSrmo3W",
  "key8": "5iR36zY4uqjwhDMDGDQz45L3fWzQr3q1yceKo2rcxJ4Vq4Zazp7fa1euKyL2GtzqTzRFmurLEjJx4WsEHSCW8d1X",
  "key9": "5wW1kWDaVHNFWXmJCCBCzFH7aXKaoekkLN34558knfHMdiZ7cJM3iZoE3BiBH19hgMMWPoF9fZjqAwgomE3qcNwP",
  "key10": "3Mp5BWC36VCbxbuaPNoB8Ri2yByHRvZa8H254s6CGjQGiwwzPJFxvQrJAQWfZkK3YEnmCPzV8c1vgHuBRpuFDhzW",
  "key11": "AM843vVbqNBqDQwpZCjNQUZF6zpN5YU65fzx8gveQ1EvtPQT59MNs7WbJtkeWuao4R4ekWbKUBSy7mGzwUmPSpk",
  "key12": "3e6d8UMA19NCg5qBmXAWBcSC5CkF3Zc9SSXry6BQgfu2hser5Ct3ocFZHAEyKmpPqWWsSve7zi5EPqULNGfxhUju",
  "key13": "2oux2B8Vxo6YRM33fPaTFc9m6viouSBXznsr39MfT3JacRfDfd9Nn5CJduJfUtqy4zBZWYwy9GJXHbgy9aDjVgQC",
  "key14": "3kQmEqqGmgpNsUqPEqm8HhxShr7M8jJ5TRo5MrsQBUKm4es2ENpQEattRENihr6iJNtJK26rkvQ166Zcrnd3jFVh",
  "key15": "5NLn8FuqpvvdozyBSxxDVSkm9k7xk3HSEes13U4sZGCMMDa1yuHWDPgKx6NTXe6bRJk7D9BmkJRTdQy5si84TvT6",
  "key16": "AuY6x7kV9rc57snGohxsV7HK3PDREXEfipJdmjtDyaasbDYvwrgtieSLH7MY4cRNtJ6k2nngvZNfCCGYXYHV7U4",
  "key17": "2Dy49yGzsGP6xJPa8egPM5Cj8mxDiqvLdxbdjwFN9eHBzVwfhKe2jTndk3LYHe4iJ8va6CbbTW1ubEum3aDTRGVy",
  "key18": "3aUn8xvLzKwfci4bNureSnmawxcGtqh7W1QAUZFdwMdNZUa1PNaDbqsFnSw2ATbyfS86tanh4kidvy5c5BreVmxe",
  "key19": "549imbxxzKLcUTrJj4WRNhaeYhHm4NEhFLGjXqHSJCknQTmrz59rRZAQogZDzQvoRHZ44k4TssuaDTrG8ftruT6R",
  "key20": "2yfJXqL3dUVUaDqiXiQfouSjhzwszKtRnvNBds8fpgJ1Mv4iQH2ZMertjvC1gZoQEqMFRZFmEJf4qPRcrZBA4AJs",
  "key21": "2ijjFcFjuG92vap1dWhBYxQTjvqtuEE55vHgDuar3xF19ZkzL5AhngyvQvapUF5apzo9S9RG2CAve5skGvpUBQwP",
  "key22": "44jAfJH4caUPMCGsQDXcZKCvqWaEGrkSijAGMcCfeJ2oX2rVFB65wXeSSh4n1v6cH7kWTjayEG1hweHxhccBStAB",
  "key23": "5oSvwmVofwZ3th337cbJwUTxRokKQnRCxHWB88fsvapjr7cKtr2q3RXVyTDQjn3PYYXHbZKzc7KwxzXWCDKDLKUB",
  "key24": "3kBQmxaYMuz4rpVeVtoUFrEzZdwcmqGrsTxLGoDfGjgzbUG8Z5Y8hAAVHXkFqSw8kdondzd7bxeKt7LeyrLTm4b8",
  "key25": "2LPgnrFiEhfmzUQ4EkAbDhZjXfiNsiHUKpzKPCcMM3pPmbEfsT1GKjLkSqb3s2LS7EVgE4PECRroPSyynRYCDhpS",
  "key26": "5hd5eLAvmUeUZiKLrSY8ZfEj7t4CxmjpGLgKkXsa9CKAxidk3NCqTqYpFynGZ46JxrZo26kCdcy4FqBH1Yk1meSh",
  "key27": "4ZUyin2722LH4JC7pko1CHUDDZkaKyLg2nL4mjuVTMv7vJcr38U3wfpd7zQbjNvFxNwu5PqPwmf3Wt3VQeEnk77q",
  "key28": "ytb5bAz4bvNL7xrgTZ5rZmTnKySggcyScccM4F5Nq8GyfHXsdFjP7WVbq2FY6BZ3EiUYyio7h6jDXFRmeSuVqMw",
  "key29": "3HPT33bAYQFEvS5AAAmRDZvw799n3vUqK8qdu89yZNhtxdjnEkeJLx7CoxS4BzSESF7cCCTtN4tqWGYRcMTENgym"
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
