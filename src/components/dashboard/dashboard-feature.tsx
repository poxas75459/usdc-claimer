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
    "4UPc17fSeVYDniqiBoeFdaULdXSAEeGa2RU2a4NRmtT975qR7DbdCBATU9eYMev2KZMwkc9cxCmZRcKWVPj943uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mK2mLcrLQAuhBy58XuHhRpk3a6RcBNCeys2sJSXbRUknugA9RUQQVAF6bmx12yPqqs8p3jdWdk8h1NzVnYm1k7E",
  "key1": "5KgV8DtriKza4kMTyfMXaJyHV732ND7jwUyGeXAZaDUABQMkpxUgtcUSjGFyrHKSQR7GnFHdUGoMeTzdZHUUrfPJ",
  "key2": "oUtJkjUvJ2fVGgxKXytcNNPBvc5BLF31hvsb9KPZF4e9e2pqUptPbCPau5sLrgqzCAoYPv5yqLR9KLXsbA7zssr",
  "key3": "2pccd78CNzvbvJfc6teHmrcgxvqVcdURkL4BoiRTpvk51qAXcoVXqUWSPMFxT8pdTXQKRemkS9ga9YVvzLfYR4Jr",
  "key4": "294VLUWAzBBwNiNXAr9PrDk9piwWFHdPFNVS8YeNygHW287LB2hnZpkAXxnhMA1cKLrSPMCPXHdcH4DqqmqzXBXw",
  "key5": "5UHQXQaFhBidDyh9mXXaspHnWEqzta9ihAVBc8ieFZkezweejLYyw6yejMiNn8Kb4qyL92NSFPtzhAuNZZSapS5",
  "key6": "3bnd9zso2bbB59TK6sHqZaVS5bEcBVfRPSSBKFh8njLR5d1uQBBQGEMe2oE765hqmF7YY8fqHtCF6MFc3nn5jNDq",
  "key7": "UW8AB7WYX6xApyPHcXkKPuEALRhsJmVHwcTP8zGXFsWGPwv2JvDa4FJL9oKPv5QKi9WUKThNTPGD4uQcU8gC5Tq",
  "key8": "ArHmYcr22z66PG6aEmc6DD6wEDGPhvcSz2MwiYmEGwgyeuVoFqDNkDA37FF69FhrSyccvBUu3ePhWbakhjwtQr1",
  "key9": "526kGewY2yD9N1jJJ5mXEh6yLcYyCACvuM1J7M2xAMB6x2LNx3FPNadm8Ds8EEko8ML2qUWcrHsc8PCekoHJHkC3",
  "key10": "45GE5afvizKFykrycurocFsC376vpWhtepnbYFD3HQEeGRdQEs8H76FxStHjPxV6y5KW3Aten3LLD75ZtnnkDE8E",
  "key11": "5RZZXMQPBAHZGYjs1YCmV2aCxM5VotnWH7UMJgSyGfzYGz9fMyiZfG2JSnwk5qoDfzk8bvmXsbjNUKtAJchbTfgE",
  "key12": "5kMv1P8VCANUx4hYqTUPGA7bFdRSu9SBTag6VF1iqPhpL2NyuezzyAinsAGr2YpT6CoPngtyhatb7Xg8wJstwMcW",
  "key13": "ydD1r5vS8n8pnaDcn13vVtC1PizbYLBXoPwfHn2sjsTV1iURqX4r9qF4gGDwGW5Wn2ZEpTk5Dswpks5sPfd4zHS",
  "key14": "5JTiT67Sto8cPWU1VHTthCxxUM8yRTYb4zGnt1gUoySgUUpmoo4FcCWGAwucVG7ec2YkY5M98Wm5UY29KuX8bEwT",
  "key15": "5s4a9aT6uc4ykAkLVCF8WbQK4jBgBZZgZF5eCcJqtBAQWQunBVYFN1MxVWiBUiaRUXd2yh6M7NRTRwvzxBWKGqKG",
  "key16": "48ZGB3iRumhEF2bGBhRP74nwf9CMBVqyCVbfGc2tLRjb7D2Wqx7KxDByyLNCWvAtkQsGhQCkXSYo9K14JErSpbfr",
  "key17": "3JCmHh4CYUkZ2jrnMwRDvBLewHvtZJbcFBSqjGZUNMP5z8cXSarg2Zw7Hryc6iv9ime3HP7fX65mPpYCgzWdb5nB",
  "key18": "3eF91vXxBb2MLvCkZV4dtUyavQyPGVGaV4HdmhtfKe1N6WV6WQdbu1SeWzzrbwAV6uxj8k4qvrTVMpsg9YXy94Zj",
  "key19": "2defYPsiNPmrVFPrNei4UPUqyfxheCjSWQ413cx23Cs1ywaVfmab48Wu8rMwPqSiDRZ5GCZtmVaz6Dw8n8H5fEwv",
  "key20": "2rhBiu7EK31FB2yqHWzULV68tXZxBasXtuyQWMdjb6e2WEE9Jnjxs6nSyt7Czn9VrUCCSKq9worRer5HdGcL9W5v",
  "key21": "333DGNVv8NU75R225WAueQQwMjykWEPAYMVo6RHkSjNAduc42pBtyUq49s7BnxSpvaZjFGXjHEuW9Z142UdjQZ81",
  "key22": "3vhH667S7aJQbaye3g6yKszGoub87ajaQybSEtVfVeZypWPu5aGMxRXdWPucq6jovqKGsfQxJFWpC11ZaRwZpKno",
  "key23": "29hjc2NevkPBnzA8rCweCATnuZ1mRtGM2fW6DoKNKvGS3n3hW56kzas8Kn4eofPbkHDVK2BqmStCETqR31wK8KeD",
  "key24": "4dzXoNxjJYhYGxMWaGaUNFMmuG71NPpasbc3dcWR8cQLCwAKwZTdPmyiRLBZYr2A3t1QkXBdibnBHUvwydk1vB7W",
  "key25": "KipaBpE8MSrXEirzJDr3GYJCd4nFc55Hizps8pbXbhzX3K4zv8j3cKs66aBbHDXri4okJbCHdxPXt9RCpUbBigS",
  "key26": "KXft8h1LJURXyzupX3dji8WWh9KQGnFqutjwTM4GXrb2jbAWaNvAF9cSJtctkV7hXFVkuw7qitTVP4kzDdWnHbR",
  "key27": "4ZQTTWoFwMXVae4GdR29hBrKoxbEARhuko33ucacFacJWStr8c9JPk6eZTj7Nm5vWrqdjvv1oVCygXuuyuV1M8kd",
  "key28": "525UZDXqgyJCki3Ssd3TYQfEkgBCvyfqWGY7ecXbQMkRucbs8Z3dLpwd53ukCq4ZqBQA816xpPw7pq2HKCCXkD3N",
  "key29": "44U2ft7XfvFGLpebkjpVMxAHL6hUaqNyyKqQ2Qhdkjv1BMZrcnVCvC98Yyjx8XZwRGtuxEsm2rmBdEKs4CQqQpm4",
  "key30": "2SLizAjQZQ4WYAzBvsyihRhoNZs1XhpiNv5LjSKtyB244AKsvgBiEQPHjBx9g6oJCjAGS5zhLzQRG54udi4BbTXK",
  "key31": "2WRE7DToeZkp5ndd3DA7bTTV6XqZw1t7wdhPMg33cJ96R6cgeTb4to3FTsxfXPbzRdkZFp6cPbno4DhQH6g3m2b",
  "key32": "4ygKAZT1JR3TdC6exewVUyu44vKNtTsZ64nCfwwt4kBxYjPyqLT8FAi4sZAJpoaBuDfyEmrFHJRbDVGU4RDiAw6p",
  "key33": "46Nn32MdNfS1G5LiFDY8EEg11ZJqpvH3X2iF3bnUyoWPRJXDDCJwQ2bWpYbecd4S9dd6fRTp3EGmDUqpzugvHw3j",
  "key34": "aejSa2zWcSoJMgPyWKm4cbGRtmDyT4enYJ1De6RsGa77m8XnNgNVhBb4x5hK5YfGNPieCkFgXMDxLceNstiqmyB",
  "key35": "ZipKE6mXoBjq72Tc1FhVmL8WhLouTePhwmzKQhoooaTpshA5r4aNom37x3a18xise6Vtt7ze7KSZgrKspCdBFDH",
  "key36": "44ctftzhks7upxvXUsgtGNZqpbfA4fz2iGXRnTumtKeMY7mTMahcfzb6B1VvHU6vDKq17WQMJxJaTkoZnbPx5SdW",
  "key37": "32ERs6fEpSwQ4PERUTYyy7u6VC9oJTsxkfXSCcXPzQYsKVY6Tr4G7SsKZx6GAJRhFaPrFSRDs4RMyZjHE8fez16K",
  "key38": "3N9qQdqMuN8vmsUwwQjDdRX67KVMaSSSGNnyR5zRYh4CxLJ31PBdysRmExWkf8JmCuzBgEdr7wcX9AP3w87RSGZr",
  "key39": "7TauywSVRedAmaDD5CSbsYVKt7W4bgBVDaUTE35SwHRFqC2pML1urWFatxYog5NLREXKu8DpBbyuohscLj9CZW4",
  "key40": "21d3SvuLkxYnUzy8nkeHko9CvWWzjp7rrTs3RVY6QmNNr6YMHh1vuUH9WpE5vFpTycf2sHazDMnNBNYxRMDJCan3",
  "key41": "3KWR1uJw4L1oMnyZa3MRW9kAXNMXDdvxxzib1WPpHKq3ywdps3CJAZRrbujuh23JYArNvAYGsMAZRpqnVwBbnDJ5",
  "key42": "3sFGieshuZaUFcB6WJgQt2qaEhSKu1DQ5U3gQwkHhBDaoa5Kww7T76aFMZfcF6Eux1AwFHhCJ8D5nCHHsJhabmEg",
  "key43": "4BvAyTNDv8i1btRzcGRRvrR9CtUmUkKmSoFMPhM6gkZxyMu18BvmuFcJjeUDd2vLnaV3Sk5ae4Gk3uKWetvcpj2r",
  "key44": "67SHNr5sMSZzjXy98JmwhpeN6uxrQBZapAtPUbHu5mg7CKDukLw2YhjfVLvWqtCXmxn8sqea5PFfe6NXLRZjAJr",
  "key45": "2cfdNdP8dVLKCj1QWt6acxiuNX1Uxqe7oZSXYwj5XmVjuX1dwR5rAg6neq7zyAMEyZwoQTfdKRgaK9fjuXG6F6KT",
  "key46": "4exvH2PfLvUjbxPHyD8XRFAFgtggoRa1iTn283e7PXhYPRFppMN4sZM2gTLiKZ1a3KcQwQQdggNxMvRbrs2f6tbp",
  "key47": "4JGp3bjcJjzEpPF4qZ2ZsKNmgsnHn8x92suzScGXFYToV2Nde3MyUtU4t5f1xX9avdso6W8YiYfHXaigKCax6PcX",
  "key48": "4uyjQXTWCenNQJjH9aeMNuK9ePXNjbBNpaRuXSsy99RvKv4zwpwC4xovRnS4oRHvfxc2wSUgPYSxvm9yaDHM81Xo"
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
