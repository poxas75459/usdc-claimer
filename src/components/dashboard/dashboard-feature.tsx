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
    "5C9TpPaQBkFzLkYksyGBbBYqPqompvqU6DU9Lu8Lya2PKSDPj3d1bwQ6v3BioaqsNJxr9n175ubRKWt5TbYZ4aQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7BgUN9FjKd7LEJ6vWkkcbnYmaFPKaavcwcY7cANErroZysZjDSuUQAQ8BPNBdmt2TDrTjFdAhHNTREhHi12vbn",
  "key1": "5Bw5PKnKG2tccCzQ9xh8N6ke8r2psTB5pocfJ693aMockJejk1Mgrh9haAnrsWBnKU5EqQxBkwtN2wqFGq2if7Si",
  "key2": "53n3QEudTYwrAzLTKAKr6fMYDzZXA2XmYvPSPVet8oojeh7ZH1CnhETUjWGKjgyirkfVM3gstHhSFhisEJCU2hvS",
  "key3": "5FmGfAnoPeTMGPxtSgK7sXU2mtDje8CpmQ2zNFRM9HcyKwKXQRrwEZyAqkm66R6sFbud42EzC2UR4pGZKtgPtqQS",
  "key4": "3gUGXgkf6z9ifvDb8ckVVCY8zz4syUWacLY73QUrG4vUYrsK7682JybcD2Y3MXXUHV9nS6vkX1GFEkQUZKHDZGmy",
  "key5": "2msVx85e6uQxTs9CRWfyS1aBh5xnk8KjSNYLUswHn87GbmJX6wheNgBXKqVdg4dqBJDiarAyygSxojUtYfmxBMKh",
  "key6": "2txSEvytZ4qSfr7S3DSWkNhbQRSBSGroMVoMGvW2SE6D5x7uFBYiZSbS3UbEDYSdy2Ra46QRkxm3kcJrx2JVT1fz",
  "key7": "NHMuuzFmyLKe657xHxgUYL5i9zW5f4CE73rWu8c9WnDYBb4JifsKfc7LaKWSWybEg7eKsS9MaB1rJ7Xk77RKAPR",
  "key8": "4jFom4e9zhARdfKdJSE7fLEv7dvh3jErD1yMr3yNwcUEtkDPjrYCGAUMRiLrXKyZ3tvB5U3qpUFx8F4rW6iCEskN",
  "key9": "2nrxmRaMBe2gseyZSp68cu4NFreKqUEyL9c7KLU8SKP24YN2NTwarce3Gmyjo1RDuKzy8JV52qH9bCXrMD4WppC4",
  "key10": "3LZU8ty9JPUzXeg9qbnjKyR7PHsRqFndUMu52HHGJJkvKCHQrVwUXj3pMakpPSgbR8EQH75J2bXbUhzZtvfXy111",
  "key11": "295Kp6c3Qysf12ktBYUPjQYppGg5MGAwnd7UQ7PGqJSGyk8jmA1CT6xtqdLNyZsaE9zhee8krn4sMCxKADwH9QWo",
  "key12": "4gtbPVPm8iY8tje2iu3HvVvht7REspwR4CM55m5LK11nb3SgPytMzv75bUdDtyNBJYNcoDXU5CTKcNQzYNAbSD3",
  "key13": "59LxHgh5hmArGmtSD7X3vHhJBTrJ58CtL4oonw8qt5ix92Ha1LD8fX6Aip9HwER8qQ4cV81kz96B6u9474ozzkYC",
  "key14": "4ph7iCnLube8c1Fmq3NsrGYaTVGpcrPfUgCeiNfKZnHdr8ePBtUwdWgXaY5PfrKNvrir94LGN1tnySpwLi3T6qoC",
  "key15": "vwkB6JfpsSqMTxxaEHycxGt4CZ3WN91coHMKJAB9BcLRsAz5meznhsBcXdc3VXoZx4NSVvtnQLixnqT3nQP8dct",
  "key16": "5E5wBbRuEmHecetgWTczacM6ZfdGnjzQN7iaW4QFUTDb95SyAFC9Mg31xvv49YDHCAGjGEbaSQTSq1J5s4zH9jmx",
  "key17": "wb7nf6nqqW5GihNQtcyKr5Kx8MBMHgc2Fv3aGZPXnyTQqG7PrQJSAEVUNbL3EXiXxntC7CiJBPn8utV9Tn9NP8S",
  "key18": "aQWA6XRwDq2YJnxvPeTZ4ohFuyGdGcvGpkbfiPLWEetoTYAg8vcRCeAr1onvYTBu4Dnaykcu657wZ6sEEff6Yek",
  "key19": "41rnPduKgy15gVo8kD3ocfinsnkmNA86sTaz5MjXa1AWvb1NawVZzfDh3pPXg8EYkeAkwrMRXwAjPktyWGnUMuqF",
  "key20": "6o4ZWF44THGzR2Quq1WrcMd2SnzNjgaxeetrnEzseCDcQ5DETjxFmNmsfq5XwDyS3FNBsgwDZY3gNhrVadbjKxS",
  "key21": "baj9Woie73NF8EtJV7SaDBaNPr82sududGyVxjdHg8F6qAjKT9p6BJLVyYqtYXPshdEJMXAy7NA7riFW2M2Nikz",
  "key22": "2ieXPDeYfZPHv55ppLCEQL3v1bwQPVcm14xJLMD8CUyTKdtFau67dHCo93PF2VTgQgn2ZqsMczn7QCdyPEB24b2j",
  "key23": "64BWtK3Qmu9fnZfwXjUNYai5XPQr71cWWiGWRmZ4r9SHMUe7rrL1wpQAxbazFJKzdqrvwi7etijvHJjk6A8g11Ay",
  "key24": "2Vf5Mb5TK4iDgooNG14mTP8jsTsqppDAq6LNZS9Q2R3YKVPrSWmAdLu9ajPcGbc7oXWXD4JyQRhJGpPzpVAw93kw",
  "key25": "61Xq3Ye3Us7sUJucsfnV3PXoFnQjiEXnaxCrGWi9YwHYfnDqn37JTVrExZQd1q3JpEEA95X4uFw1Wg6Veub7NqxR",
  "key26": "2JcJuHXmEesrRbYeGmAja17fUDPNrbkbNqNnwUnrubkTNxYxnRaYshBXvusB1ATQkeQ5qVYpJuBwkvkbG9XD4ZdG",
  "key27": "uR79uqBNyagenjRJrpMrCrHQBhjGWYfa4CSUyHHeb7oYSxYREgmCU1VK8rCvazd5ffFgeg3KSvWBF1xf5oPvMUC",
  "key28": "2UKtLSgpm5hU6bb8QYmuc1Dpu6MsQjf3RwmAEH8Zc7ZpQpKTp2i2p8rgoeguJ9GZkePWfFiAb4ogGomNazupkhAw",
  "key29": "2JsszfFJ9N9kHZzMkPg6Zjt4t2Yfa8MasVMPQKawiEsAQeBEVk2PXhAikSutU8qLJqHe33XZ41qRXWXFAdwwTFBP",
  "key30": "3QKsP9TDsBaSyVnUc8wcsgMvPTXSDh9VCF7gCdfr6jKpJK48KdmNNDRfXVsW2T3LpEstfM3oUPtHnJRdgP2hcKpB",
  "key31": "5CoyU7WCn8eMiGi67ja3eHZrQ2rBijdAokX2JQ4b8mzoAK9LtuzNkw6YF7qKLyU3eGt9FFVVdXmaTR8ZJDizfq9u",
  "key32": "2VEoGqMRg1mCCsfeRKC9Y772zuCNGow5RSkaH5VYb3kYG8gvwvXZ9GZdV3yNgAAFkFm5WLi4wdmEg6zVfgfPUF5i",
  "key33": "5tXpLUzqLSJJ7KZgx9UtRBofBC6ofz6gV3RJc7bN7NsQ2vydWVHY1ubtNzMHgTQsyKQcD3Jv2hpKeiWZt9iPyVqe",
  "key34": "4pcbSFPnyFeUcoRNQq7bGhRjFRz4Y6DmLweUFkUFrpQjyNND2JYYGXWK9dsXHBmphoAfHC1Nm5FMqNTRnqGHW7Zz",
  "key35": "4BhXgJMosianeNFwc2mWeodTfyqFcaZ17D5dZ9EVjjx6WYQ9L63mHsHVz5NexkWTKRkgwceZcZkGGamXvny3PGCV",
  "key36": "4vY8y1QwDcaoUW8yyLBpvmdZKntcjJ3aKBE1DQCAm72i3ksHwWVvn6vxrxsEbbevEgQGrgmPFaowy1TURmhrppK",
  "key37": "4oQ84zJ58ud1WJQTpjKeV8v2PpF9ghoGrsqZq4NDk3zLH39MtrQsACD8AKAHDvUDhFctBEDATqhVehA29Lu9HnPj",
  "key38": "4aFD62ft2JVpCjB44tSv9weerJg6GW8B4soWt8GEQnVgZAywcRmLV2PYLbsUcyiDy6tD6AchGrmEmGAtLVYP9ZAw"
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
