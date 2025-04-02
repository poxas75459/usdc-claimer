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
    "3fHxtXVquYPo76wQAHTFzf4Fz8mAkACn9R8fWR16PRBgD6B5YzTFEs9JewvZUF8grRjg1WBCMM9UbGaRhns6vF6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AmPKaPDUZkussoabnLwWFqj6gV3xQan8E8bj4AKukb25qrhcyv93pDSAJSMozMy6RAG9Tbtbp53pAFuA9cFRkg",
  "key1": "3V6ECruHSiZFsngEu7LCdCQsqddndty8AwzKhAvZtXJWY2m5MsZHiaT35rUPaXFQW1wBNj8jtYMGtUGw25xSfvNv",
  "key2": "2LWmCd7gM5LeNTtLVwhERXBNeYFtazLpxVFkTuHFrwfiDCSp172Ywro6qD9jSE6Nij5ddXwmALz13CguN2gdBdtJ",
  "key3": "4Dq9UoL56fv1aVdiD3B66umk8VTcZdAngb9vBsVYUVzusiNUSJhZbfH619JQzVMT8mWA9rvCTnJaEAr6YTehRta",
  "key4": "2BbkSHoRvBJ7HbzrDpbe8CxnqovJdzPsBryH6YBxpg1voKFjfsYuih3CSqvYPQJ8EojGQEimZ2jJSWqwrnxYpL2x",
  "key5": "5FiJrUPDN186AjdbQUjeMz16SiossN5A9EBcfcg9SH6rMFyZopWU67epU9jQAu1e78iqd4gw6QpghdBxXW1QSuXe",
  "key6": "4pjjXgjFEQfjAWUGrQjfuYwU8Mecac2fw8KtVUkGb2Xp4BPrc59xafJLL9Bx9oiHCE4MnAGzTtRxP4dc7z5R1M5Y",
  "key7": "F6kiWxf56734Pevr2EpACCfvdJDH4pPZ3Bzviechu5p2D84BNjzhGrRrEw7GCVwkm1CZLBcsX7K9Bj6h4sJBxUb",
  "key8": "3qyCrne3iW7y9Uijqf96ubWSHfD9xuixaS587xjqB9udKcc6VyZQR1UrEbvTninWN7KuqzRhjbNJS8mNjQykjX1C",
  "key9": "2JdMiYbLUSUY182Zn226FhRaRgXGgmRhzxp72mKo2n3fdxetA5FhKwkcubVWB67drUMtZnS4fN34TNwW5JuDQ1i7",
  "key10": "3SD1NqdtQfBN1w4sLYV6xcDabce9UA6yd4UKaVxoyyYLzTTWDiUbsKcRCDWaphZ7EHAx2oqKtW6iNycWtGVadBjb",
  "key11": "4PuND23aJWfZ5MWjikUz1oe6yEsSdp2iGvco2T2CmR4oHcEUTz6TkLBrDR4MRWLp2N6wCN77anCwEh1spwa6N4xw",
  "key12": "jh8KWKHJkA8nt8Aqso9463F361C6iyUJH2et8nLd8YGtdNMUSAT1n1mf3K7WaNNtxMdNGcAgE48Spr8GDTGoyJ1",
  "key13": "2zFDhQ7pRMYyHiX5QzDHZTgnN9kb2PzZ6qU6baxmrAb1sfKpKFaghRitMLe8MRsftzSimChcoWBQmSKzRZ4WeJyT",
  "key14": "67DjDGqnrXAph7Y8rLBH83joSzewFVtMjso6eM1nue2ZN8H5Mc14ZGRV1mwUSdvKkGwMHQbGqeWpScHaAmrqqjD3",
  "key15": "3RVjf9rznHK7ub9iMbeRXUipM5v774SN9hZKFs19Bo4dvTE1G6wjm3En8UdUDGM8MCzAijTNTcRu7qVjoS6j9qNU",
  "key16": "3tLYCqLSBwxXJeJ2SYmFvScph7A32uKkV2LvMLrkSpHrJfywRsr6RfKojgVdhRwpFzipiiyZV8AFawCKrtsjftGD",
  "key17": "5H7XMbpRyPd4vA9xXdk7RbV9UvAXehw1jSJdCU4Bb3y4KQ9VJLHwVLMKYJJpNnPqK9pVY9raEbgYKcMFzT8DUzxu",
  "key18": "3GwryzH25y9ktvgyorbcKVvBumYRaLJ2M2RoMzUR5r5CvG9SrS5E71ASY4kfPqTpSgx32MbUBqQ46vdTdNbvewtC",
  "key19": "whQbs8bT4YfYLiL2FJjok2xLDatRkkyRqGxAKYhG87hCUnCGRYYeEY4DjVKHwsqHEgbGhwGqFwN2V5RM9YBRjzu",
  "key20": "3xtxeduXNdi7P4SWmPGsq28Xma8FaD2XLNNnacEo17u5L9eK49gqjv2j32iEMJZhAoE72TA1cnbv7gv5xCNfyHai",
  "key21": "2WLeFDViQXgtm2mwJdpM5m9U7RizNW9DF65V5S7ALVAvixx4ppV9wVddCSL24oNvM7jcXjx6poBAWhE4pmpnPYkX",
  "key22": "31bnxLTddAeiXgzyHi85BNbTPecmyad69ioS38m9jJMeTNhTLUvMpNCysk9MpKUQqJpCKepdM1a9oic98z8d3Pc2",
  "key23": "624cpgVZZjAe97pRu7UagDaNto1b8oWkwXLjMHwDfo3pbTjKhzBZuz6uPoc9fzJjPnL8oL6btpMEeGNpUErKTend",
  "key24": "581gSLpB9iNnbQvuCVsNnDanxZZtkZTE7F6BbZEEZZk1fB6sNF5eNVugpbWDrqpHtSyzhYFPBtsCDejWaTUMuA69",
  "key25": "4ro6gwi3a2r5pG3nn9DRfkMj62nYEAQHjWcMz2o6aL3NywXxmuafDpnDjccnwyFQUsjVfwfediw6jCp1n6BcEbwb",
  "key26": "2xawAsNynWy7XT4rLf26nMXhUbFJAxi41c7oEzJUr7p6vNGS1bUHPsyfw8qY3Ag9T63iAa5LC9moaMtwf7A9XNGk",
  "key27": "2bYg2fuVcA5C9fjZaQWG7Ub8xdo5h7PxgL3VgUQyXtyea2s2HoEcM3eJih2LVdhJm5TFVaqqEi4sK3s8CjW9ciPA",
  "key28": "2b6Se8tagcD8BqwuqGYLqmfswc4j2H574zeso4FuX33euNXzKG7wnzzS2AMzjVNyje2CdQnWE39grAdKm4Dgzodh",
  "key29": "E869EBEnKp5ygF8w2ryz8ttTLpu4ZZkPU7rRGDDN8QruZ3iQxUiJzuNS3zCKP8sLNk2Tmq21ewhsWoULphDyK1U",
  "key30": "4LQ8B8QjpPNAHTmu81AQUUJxg5e3v53N8pXQJMTGghBpzH2PNgv3e4fD66uLchwnq3ZojX5Xuu7C23pctLwTVLYt",
  "key31": "3uYjgDyexx5fnX4fX4wMFsebrNLjFZwMaeFcoEskfqdwj3y9RxYQcUbJZqCfSDpeV9aTxFhaBkNQoEWQWtiezGYs",
  "key32": "4Xo749xQx1CezPTqZpAHe2FWDMVvoJdtz7FUD2rw2riNNYrPxfjMCgd8VQj1F3HQHR8aS3X69txUfKCKN1KJwqyy",
  "key33": "gykWEYCMA65aNWK8p33FeTThezVWgLvTYsWwkJQrgtiahFFNYuvQQvV8siyb8M3E4tFictHZiVxg2Fi4YXgiWQV",
  "key34": "5n3qRpVPZDHwZ5HtH6vdaAeYAknF2Dm9VNZSp8pWTSWmXwyHogr1Hb4FHywtQwEokM6SbMmHBek9ewGJwM4NGJXV",
  "key35": "4qtC3LjeUaAMaGZvPZVFCYBSgA7rThnb442QAiybJFH1RXmKoS2WfLtQgPiamWNXiCLMLdyUh2dULHmuubhw6H4M",
  "key36": "2AMMH6epLEMgsYrVUj3yFqiDa5Q8rWx9QFrLSwPwJxyMM68tfRtKQdtCjLmEYydZCgmrQVUFLFnhYitZxD9we3x3",
  "key37": "32G8DfBLuNXALoe1XhUY2Tz7CFvhfSAzvhfS3TTvmmRLmGxqGvvKNJHtbdd8qKDB2PAVDHNVkFkt49XdaGzTvDyY",
  "key38": "2NMNQEV4RgTEMaHbtTrThwYftjor1TU1dwv4yFiwH1bohEVhXyBSwovx98iQpADV5tGgHv3Usu4RrTqUqy6qmH8w",
  "key39": "2eJD4zWoVCzq6xnSkb8G5H1ixSiXw2gdcMrWuP37ndkovDs8LV1ATnZqS6s2ny2mhT8TSHnA9HaSvHadnASDRZKQ",
  "key40": "3Nr2q4nR3hFjR25ux2D95C8gCxB1hCSxkRASyZYvbVrjMxe96AzHhKV1NsR583XY3WF6P8Ptq64XFubrPVhuMdC",
  "key41": "2hu45ePzsvn35gyXvnwSzEJRtfP7Jp4cMSJBTcQWwVpvnyANYFkbKEhwAMbGYAVRBTwMEKk3JmnKMaMJkQ8o1qXm",
  "key42": "5AAsyeNQtivTpW7MF9LpWYuknUmmiwxpffrkd9oUfBwiNPUaVQ2b3JD62wn8SjJBoKeZMioT214ZmkLtdAmYsUm2",
  "key43": "fUSRkLwmfxKzwVuJ8QevxEgpN1i7NjMSKgUMQ3wm8mfrPfYVcRqWv6TKf72uwTVfi4A1igkc2kG22Md28R17Ctc",
  "key44": "obW4XHXXDJMGeKYLsTEggbKLXuLbDaKC1xP3qLwkXRLtCP4kKnL1D8aqkcmrykq7UENPZyLVR8YRoycCZkNvfEn",
  "key45": "4kPVCgUuorbsFHsfGWENZyNPFhfcHvHnmF2ZHQQcg15rzD1NiZuEfErK6sX3chjakGMWyh8k97uZfFY42LdZPbX"
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
