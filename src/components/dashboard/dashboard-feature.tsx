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
    "2nJMrGHfygDo2RergapsiNmAtp66TqxB1WtY11nKoh2eSc16To8frzrGewjd6xhL11VMF1rZ4URKeKjbqX1Por45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62dnWPfop8LuiDDLY4PCUDB3oykE2moRQLWDKuZiV6ZhWyh1CkqCx28czkE6tRbYiR3MCrTq5oYJRMr6XnR5Yydw",
  "key1": "2anc2KDYraDqPERr7T1JcEVSDfbjugfia6gHFfejcfkAavomiNprzk1qAWdzkgpVasyNKauNTC1vWabL8Kz45SkU",
  "key2": "272zZ7K25PB5JEDXEvxH7dqFkp4XEPLZmr9nsiUe8zCTm3Fde86sRhtoBrDZjD8yCR5YB3fRDyU668JGe1jqSMCo",
  "key3": "2vhnv8jRFD8Xvh56EzSweyMHeCn8dghc9uj4TJqgdbmsy7gJnmgApyn95BCxNpL4RgZeSBySJSZZfGHeA5xUj5g1",
  "key4": "2wipPnqoFgTpfrZ47NFAcRKgUBFtecmJywKVGnVvKZcGK9Cn86tRienL5Meu6YkXRMiDaFiU373YGZvsdb6WFQRH",
  "key5": "4NnNXLT2ZNNMyyR5McW6c19aaFtYyzPQK9XZxrVPMqJUQxPE6BuXdP2MnDMBa537ZMJGAY1rtBmQfLe2TrrWEAnw",
  "key6": "2hEpGtaRaZJh9NPjhoB8twkUu2Xqz6QR5fBpLJEW7MYJuimE4wfFnSEWWimqDoiRVh47hGg6k3Jnjvmx4n6xMRjc",
  "key7": "44Fs3FdXg5Ba9wyVx7vKv93eQZxhuAwzgs8G6R8Wyba3mGgVRnxjgt6pPPvmXhTDhNi5o8mcuBfUumeiGEbiqphB",
  "key8": "3R36u75U1EiWx32TtQiiLWLudcB9tJApGGVC56zUvnSzetuHDDhiJorC6vWoiPMjoZAoAbonHGdq2Cbp9QxscnYw",
  "key9": "bUQeiMydHaq3MwSLF7Q1NT8xwmgTDgvQKRAHQwGQmtD4D7Xn4iDoxf9n8hdnmRLCkSyeaWXH8KNASKt7hSXenj1",
  "key10": "3gCC5XbbBS7FLCxLwJ76BAGZpHbiBD65GXj27rKbNnmy7KaB7Lex3sAcX6Q5SmeyazKWUM6hVDMrMsmnM57kuGmU",
  "key11": "33hHnbfWi7ruzkCjFP3VGHPbdtF9KSXii2pBatAF8V5T8co12HeGMYGci2qBug6xDQrQBncKpzCvVvLh9UEfnxYt",
  "key12": "3r2SAiwbzDJVvas1eYqsxHMsRvLUvigQFe7ih5bBUQR3YBy4vUKyhuKgmZcdjGrhefPCDi2aA5VBx4pK6HA6Fd7m",
  "key13": "EcUQheVSjwa1t3u7iacjo5aoAzXbwNKUfaZVSwKmeysDQTStZT36tu8zrSAUPnsTUxFTSGAkbiMfmpFmQdtQEss",
  "key14": "5giZq6P34opdEB2TanDsKrr64ZMfEitTFnkj57zYRr5v6xEp4ca5yt5NKAB7Vxn4peRmfjopbrtHkf53a1u3zurQ",
  "key15": "48S75QFSB2kcwscG8TV2kobHMpS4TpEn2gY9g7587AHK6bDwcKSUXamuC846WDVixwmYRx4ZpUgirk1g7qoHhaaX",
  "key16": "5QS92dG6dAYUguG2xjR3sokXBecXLjj77cuXzPmsNWXg3SMiZ81saGi9Pgz6cuCZDygVY6X9ydp4BHmg2rD4ZVH8",
  "key17": "4MsxFVh1aihmxF5gEG3KLVKVV4CD42neiKKTh4qGLRWEmBu9xBkLZUxBpZni9rkG3jYKsg3ygqnGq7fd56vLzX5a",
  "key18": "34iCF6LZutpAHDoJGwv9AVvYdzCX3SXy9MZB8NH35UissX2QmCc21TdSmpYFWGFQMSAfi9UJzTEc8YCBX28ymzNv",
  "key19": "332mQwN95UfvoA2D9CuoYR4PkbabH3PmY6hSrCBSJCaXe554N7CSGRNZ38wQHAXM1FJnNM7XG84swbCMHKi1QwrY",
  "key20": "283bVFBBR7BjvFpwyMRdVeGGonqRAtWDefnFcXrhF2yT4C669uGDASkuHBSraRrUaYNCu5z56aQPrcvXXkEhe9ZC",
  "key21": "3xotuJsHDdzWHgeRSmHBnRU1y9iyw7huen4yTFxbL7HrxmpkgBHHimTjbmnn8zeepssTPJFRVnJuhR2v3g1U5Mva",
  "key22": "WETAR6s6stHqxB48esXuHXmLqQNw4SUR6boHxcfBNe5aUG4PEsi7dSc4GoC7vAWvypZgTncjE2vnM7Q4q4LRYuC",
  "key23": "2DHxRW69SQmuxrWwP2bq2hr8rD6rfn5oF42TqfPJeXubXuq4fHHpVgWLBZ1ebsGshuXdgHVxsMP5U4TPpqwLinmK",
  "key24": "fG6TPzBHZcRQar11TQKBYoDatjGPB8WAP4DUQ1WezZBCMjBtMMcoicwYbS5XNgnuDbNetbTFgx48CPuBjNm1Y5w",
  "key25": "2WMbyrq5Ensa4vQrbUEdsq11wV532phndcwvVXrTJDp3nVVhBwo1NZTwVLSh3SgAc6uf4CA5jzneF5iU1aVrwZM1",
  "key26": "3E7BkjzYvgJweqm39ZU9QVeNnu8DLKPQzCkJj5q5iAbGmrRXfzAT4kVPAGFaFjhuExTLhWoeDUbDE9TVfyZDH3Wj",
  "key27": "mgCMTa8qhHE15Q3rTDzT9gkZ1f4A1AR5zaaXhPJb6eA1CUvogM8Tr9RGP3X46ys1eujDXfZsQjgBA9dusJJHAGv",
  "key28": "5VG9XzNVjsjHo7stafjN3PcjkSmbnhgtNaFKJhs7mxPWc8Rom2VwSEoQYEKHjCwDArAZ3GEPBMtGrxN6vUhXheRr",
  "key29": "hMp9sYtSkUUUaujQooMHUTxDcTXEpSW7UoPpwMFjWSZwR361ShkAjBKMPyorX7WpQqSg6N5WfMuN1yLyogzAm4Z",
  "key30": "3GQ171GJg5X582QRKmkSs4EN7y1FxJNz3Ra8HZ759NWo4NzdJMhgrBrDhsKPq4YxkMpV3nTE9DjM3QQZExRHkEKS",
  "key31": "4UnL7QEJcRXQEcZe6yqycQt1TY9MuopWgEy9Gmc2HTF39EeTArf26afFoEVJ5K5kGj734eFgqSHvB7C2snAcTQ1L",
  "key32": "4kJd5kynfrarRmvsZ7hBuCdqSyRYR8tDVCreJn7Yq3XiHuBuWkWKehRd8ypsptES5pxhqxm1VS3Qw28GTM7bYT9H",
  "key33": "3FNsznZH1PLbJxNKKkYaNheds9AEfx3oArZ8dEydJDnWExXLGRDWp9pCVfYvQnEGs77L5aHJMPpA13up9GpmQeHP",
  "key34": "4Hf7AU46XH47bxasb6FCryr7FuxASvzEyqzMzCnmtRp2jdN5GFjSH26kUZNJBdDaPz66e6kHuKpcZBiciwJkt4UF",
  "key35": "4p5z8erKV7HZPHZjFLR3YSyDDxCZ9PKrP2BD3qy5dpds9ZidktqhX95ZYBdX1CMQrUD7KbZuvrfZddNNe1gMdqgb",
  "key36": "64UMRpxxihCtNyp2w7QfYjqDe8Z5cMwtyv4wcgLdZ8pqA4wKEuXRDer1huRF3o12gncFkeKij4YQwUQZnGqGfonQ",
  "key37": "zbNrotNe7iRPnx8Sw6PZddiwAATNsMp1vangGatd8hAc5z8xQizg5124h3QetL7AQqMdSzbw9uzcHPk77XmrceE",
  "key38": "EarxNXZsELPoS3TFn5W542Ta64MrceRWx41k2VLJaG1auUkVfbk2BksH3Cvr2sgQK62ASvPbKCv4Ryg6xLKfSyo",
  "key39": "2JtDTVYFxZCC9QgUxWcQeVyCHCEgB9kj8TdpnBGGoUeY1fzvoc5dSkGbAQKCoQcUM7nSa2xDip4fqnhePjgGjN97",
  "key40": "385iFZxYtAVb1uXkRf4YN79FEaa6uogT5cLwathcU3JeRTDzu4psP6F5tMxtfKyhJPceWkeQ7hQeeCXJ3HqA4mp3",
  "key41": "5xmVwrpGtx2D7vgoMLV9AA8qQ27BEoN9ic2LXT9ggxzykwELw4mEig3MPm5f5mwfDGRqJWgUg82HZWAFiPBvmznS",
  "key42": "3xFuLDvuMC4tgBZb71UfhnkkP4bvboxrngfcuiSiKsZSY4BeYzeQosbARKu6Sds5T1e7CqdQKDZW8N39EnHuCZR7",
  "key43": "2LJQkA5V1y7WYaw4vFL4Dskc1bBfM9c381T6rA7FBGMdTg12orPtqCxz6o2gH3KH2fCPfE8DkYfEGy73Tvqz7Nbx"
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
