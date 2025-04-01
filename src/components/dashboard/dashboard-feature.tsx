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
    "3mq4NFZQVQTnp8kYEnMZPngVwmXv73RjQM8bSfaBzdNEPf25QmKFiCkLjx7FSarfj3rrkts2ahegw7k7yyafcSNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4prBKScKWaeD3DKfk79WzSW5hNobA5gG7q8Ef1gsTjEmepnqjmBBBYt5PXrCcUHkNVtfC2sMFkucizpezmw2VQGB",
  "key1": "3AVPupDj1AqgRY1jH9s8fBDmjcQT9KpePuGSCf21MPKsp2mRCLezf5L4VCKUMaQX8eGJmkuxQXmWR3NvoQWrN4FW",
  "key2": "5XsfLBNaLFSmii1hhfK4Y2Hn6Es58WKcWU1BP6gXgns5mryDGHnfoVpWBxQkCnVQpwhSitweo7K8F3WGdiTukMKE",
  "key3": "X6A3n7VNqQNeEd7NhRpVzqoWqEThvMiXYtpLorLb3P4svS2brKSwuYtSyL17MynnQnXTGmQ5i1o2oB99KNibrJP",
  "key4": "41NshkbnvGdEGzyC3kTN2ou2LNWLxpXuoy1R3xhVoqwRvr6mSGFEyAFopyEL25Do5BJ2gi6Yz2QVym3BX2dSWbPS",
  "key5": "2QkuGcfdemdoTZRio8HgvZfy4r9Yx87smMDQ42vPEe9BAsfFeWf13i4vGcSdGS9yQxZg4MzbKm6fjc9Mbcnvuxgf",
  "key6": "57QUcdVHW2Uak1g7tfUAaizqBsNYEgt8Qtuqtai6DxNy28meuhaK539gVdPspYgBKU74bqcdvHd7jNGNWhBkHrAP",
  "key7": "RK5d3w6o7Cj9i4oHs8SFCTAndNp4aAx2uipjNwM5N3BCdRYPEb9auaKiuq9uLsV8VCm2FQY1hZuNQfPxjSaeXbA",
  "key8": "5Cq4VeTJXbFqNDLnH74QTXvYJ56zCzBMGJFb4csx1wS5xFshWTLYVogw985fpfn2Dz6tRWGLPxeTN2tQRwhmwX8Z",
  "key9": "uZ4i8jye9u8asyvdc4oGoyxZBLubBsMNi8HJeL3woBFX9yodmM8H71Y8d9eCTWq7AqfVB34NDEjx7eBFdRdGpXL",
  "key10": "2NeZk5WydAsMb7CV3ERDXEAXTA1nz887ENavcg4RKBWBzz5qsrnn4XcSSUFESm5vqWnkCV2mnjp6hQWM7pE57p9Y",
  "key11": "4tasAwHzdFpd3MuqosKYqnEFYc8EzHBSamumt3Kfm3STVmvHnoCCcLtcHDey285fJC5GJH9gtrEcd9T8M6LKt9zY",
  "key12": "4csqZcmBK2jXBnFUXPw9Px6nStTRf9CgwTJNyY4QaXWx2wHQZPNU9nt1oq586yUuizXbX954vrdx9cZMqxDbUSGQ",
  "key13": "4TBmnFE9Mx6aGLx5YW8gFSRz9Q72dfAfW94xj3vQTkPRTDmoEEMqvQNbRTQM8S555pPWuepMhVgrJdCsAvC7HQk4",
  "key14": "oVjZuKgHNfcNUSi56au8WzDPQDV1ZJCGiDtYrJ1d51GFaL1s5i7U2fLCRrJy7btNdv9qgWVX1mzrRhPKfzKphGx",
  "key15": "3JhYFLoMAVYwKiJX3mQN8hughX9VMmfLNfD5DWVavSC87Q8gPNvgFvzCiVVW1rhKNp15mVXkhVxw3F8VbEyEZdvf",
  "key16": "um4iLJe2sar2vLE5z2Sh7kUrXUkvMi9edyBeuz7qtejdTtbg1EAV8YmqFvkEcMHfkBZWFmqebXGBLXXy5bFvHyx",
  "key17": "3PyjL7GsU5LinJwiQZQEVQFt6eRhJhe8Z7KpkgmYMAqBP68Gwpn9KxXfyu59DBYm94RaUXSM5JYiEUC5EsN6iEqY",
  "key18": "RTdQBEYGMBW95MqfwEubcw8UQcGjKnnVejgwrqJhYxwCq2vUSzNx3Fj3QEdDByFkcK7zUZyYFepH5tbuJLSQegm",
  "key19": "35ku6UbTqTAXHeUAGtkeNysaTMvh7qJtWMy2Km7PpdzAyQinpvkjxGaUcEp464a1VHgXpQ3J1faJ6VFHvU7PaVpP",
  "key20": "5WiLuTSyHfHJqNRTtzH7nBakcUmK3p5xGuuPEPKeeAkGWzbyAZN1XLotTdKXB8nX87CWBG6qttvD6coerZywW8jA",
  "key21": "4jPVS1RUoCDqBYvbCWKCubqiX9mFwqvXra5zH1yzkh4noKXktGrANdgpN74oanaNUa3rSYR1D88V3RahQNXD7juT",
  "key22": "3aQuX3ey9a2WXeUnX1G1iGfnTQDpeefo3MPjcsim1Bu2a15U3pHRS8mSTpTtE9ykZcia469fMmDxA9aJz7X97xzQ",
  "key23": "5wrkAS454cq9LYo3LRHifR2vRFVvseLmRFvu4LSBo6Eu1PB9fqKizvFAypUuRb3orAnUe66Qaoti3DX6chXxmF2u",
  "key24": "4cVS7UQrAJWPkE82vRCXvqGUta3aW2RvPpRhUqUQvxh257mdS8ZfEraYYtzSRN3k5uwwwVTmwN6x2qfnnMm1Mt2k",
  "key25": "3zY4ktvYK6E23HHbf1njmkSQZBEPPU8eKrdR7b1x2hfkSfCHU1uoB2t37EokxqCRrwbNZoNyaZhxQWSkrhhnXN9U",
  "key26": "gUADKLcHGZv8AdTmiJjG2FwAqwD4g9mBV22VawNtUFQqtEAdZu5erKmH9z6RiNNjgUN5KzcqWFnn1BmtXEgxegV",
  "key27": "3Vrw2JQsSfTGAnDSKG4LvxpPtWNM1aGi84NEod2EY237z9bGtWp6GC9wq5apnncEigU96Kcwx8CL1yb6PYZPnXKW",
  "key28": "KxcTYnsfrbVgbUUJVfYAUGWLMDn8p98rhgyCegpAnChJEmy5gcZ4sMY1NBNU2Je5js1oFAMCb1S58k5nQEf7fZ5",
  "key29": "4uX9ct3NQxxetJ1cH62GPdRLUaiRWLxEvAzh5soSPFvNGkdJSGuCxxaHfFpyeXmA2Ef4izd4jQRBVpAFBjBiWYtY",
  "key30": "4nku2iEnRjKASqVS6SyWi74QraZa7mbi8EwrrT8LgQQBJrZpzjkevoayJG8amKNFQaaWA9CBFmfP5iftf7HPZN3T",
  "key31": "4idX3xECFXy6m2cTUPZzTNFm5QZRYkqJ91C2j2FyYH9bFQ9h2FWzRXTH7vHDPxZdLTpKhyx5VKkJzLaK2UNnxoCY",
  "key32": "2VUBzLPQXMnwWhVNeiiEVN4L4nbKwpNgHbPuZbo1jByJcU8bjUwZS3RagKJxXJ4AZX3gbGNAVcP6euej7VwgmW1M",
  "key33": "4k5jRABqgiqqbGCFRMVygDtKH7QrTQ1yFuGinLW4wCWCbRsfU1uShqjSkcf4pGpV5qP9RkBUzX9HkTbzPLQHJx7t",
  "key34": "58wn8cCuvUn6C32jiV9miCiyzY3jbL1CVY2BR3RBE8nGFD21FPz4Df69Nv7gNn6a5854JNWV6m8r4diC7CkAxfcU",
  "key35": "367FFtCRQDvBXGuPJZUDmHRyHmAirPqwzNmN7YxZg7mZbQC2ggYuTJaAULmDpgyaTQM4Es8n2ruAqruWWpg6ESru",
  "key36": "2HxtomZP8neP1wZ6b7x3x3wEtfBfhtP3dc7VQmoM42y5yEwiF7XEK8FQn6aaHMuNHLSPjyWZErBDs4NmfMFHP8gd",
  "key37": "5WrwdeZ1ujJzovUTiYVxgjtNx5UDFygCNoh9t3yekyv6JYzxqaGmZ2u2NFcmQpHVuhxuwNvtsdFwsghSBxg5etfB",
  "key38": "2mTKL9PqD2Nkjix9kgwKQL8P3kjiMafwmtdii1LUDFfSWso9cWWJ29yxE5TMqJEdqVmdCnZAFLm74hDpx4Cb9Nj4",
  "key39": "4HZLwAqcsX6XrgKehzmys348cFMxeHq83ZJmVKtdAEoruipwHRo6qW68WSoyn1pSpaY1P2ShEafza2uSVUiARjjS",
  "key40": "5fnKXthduR4KJNEWMNxfbZVnjicm7D1WPQA7pDsuYvQM7DTAXBt5XX7vCPo6cYjhNWZacWVvxvcAoxLzjodc7Hg",
  "key41": "4VBbJ3jnJ66VeVT2NHBA5YpVUdjrKN8pmDg8SUvm5cGhhZcUzqcS2LarWcS7g1D9eE6zfG7VGBJ4MF22ZrNS3rfP",
  "key42": "47RSEeRYvDg744E9EukN1CmnKH9PwDhBBShqSQsrzzYUBj6sj3ixmnmsvZ1BTLaYz3RZGkymtdGgDughLfshDLRe"
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
