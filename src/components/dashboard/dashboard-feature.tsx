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
    "tnAGo5QVM7a4zskDg2J9GZfh1bUSFdW5aUV2LT9h6vMfPdXNgjHU95jMxxwZbDKdCHkwtvWxNoUJYQdcvzNjU55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8fEYk5jpUmczXhiuUdZ74NjtFRaHPqFoXC3ZzanNBnVbycfCfYRHNST8UA9RXdT3eb5ZpPPtN31khjBwKBA9PoA",
  "key1": "3161MwwGGEQsUpePqGykqZp7L7UrhAVcuuUwTvauVYgWAe8HQMvMX9chreN2h4RkdUtzNYaQJAaiXvz2Ng61GZbh",
  "key2": "jqQHJc9AkPo8yVD3Fme7QRYwnukAxPdZG2CKUFWBjZRdoQQFU9r4jbmYrDek3octGK3BgM95zkpv4HqJBCek4TD",
  "key3": "2JLTN4XqyLtZjx3y2bWvxbXdpa4y27aeEddf2EKrbThh9TiD8JF1W8WVvaNGEmCyiCKzxPSfsZNiTCgUZ4Ng3Rtb",
  "key4": "3gH2EhifToBy4xtAQxY6HrWzG41UD425vHthW2gLsTtW7n82VV1DijHhnjN9Wq28WCeXjYsmufcAamUAbty16CUM",
  "key5": "4UyivKg5Xin8AE8UYH4AXMpSHMKt9pYMbWMbTdLbEUXnn6WNpyDfjhgTMZCmrctXdBDY6oAsGf9NU7F3dwtDusLJ",
  "key6": "bVJJycon8Ye5UZ26AH11mRcdGMSoGg6MyiWpbpVxhnpjtyiDawGg3V6zb7gFHnsLQQxjiz4H7Ut83mga3H2974A",
  "key7": "3bhRPRUCeWXS294bdxLen3KVbqsVCFL4sS1qDEAH1hG3er7h9ZhcQaVw8kRt1VEM4rThrTPA37rUjgsminAX4n2D",
  "key8": "65PVAEAm2xwWbioZRTHyY3acjYxqnSm4HaGbkoJKkG9N2nVFLUNMGyyEseigjaarXq3AB33rcitcgW31NQVACXFG",
  "key9": "3tJL5vWsbTHb8gdvUKG6gQLg6BTmVH9y5CsJbDQNMTEqaZXewJfqesaMrxwgK1pvaWKYX93Pa2m9hyKYPwyaJ5Es",
  "key10": "2LDHb2djDxAzUhy7qgS8r4v6ahHJ6QfKNY86VAjxxzoBKZZCEfNdAi2iQQAm85qXr19k61MbugqU3Ht4Eg4XTNcq",
  "key11": "4RvLfCf3Radoth58uUpLALoUHZ5Dx69iQcX7EZzfADWk65edS9qHkKCXQm7hTXMDPy7zGHNGh5tuDDfip1kyTNED",
  "key12": "55hanToAMKUNcLMDMHFWhSUY5fj9oVcF4PAeTFwRQ9q7poGurWoa6bBeuCY3Hoi3Hkg5fRr81CinnDwXyWXn3mK2",
  "key13": "H91ixBAWLL1LmwPqFUNG6mZrxcRaH889QaBrR1K3BpHpNgcM3ip4iEi5cV1ap3jk4R64FMTq1eMPTzJihSt39tu",
  "key14": "2rVKJFnvoxDmfsP9AsPmfNLtz7u7x1xQeQbFikRHa2WC3gS3mkirekgsBgv7m4BzX5boasLknsSrLRxqUEeoJHbo",
  "key15": "2oANtCmRpua8nLFxkwbytU2LWgBCDBm4tHDqmw7mUGXrx8HWuH5cLv2wAfpTu1b3xZBYZr893sRveoytuHSzqrQy",
  "key16": "2veMV5YstFwh9y7hnNGzJvexn7pBEwoNGMZRnh9X62RHXoSeJ6MM2Rr4tmxnnDw6burBrhnDGLV8zUqx9gBr8JzH",
  "key17": "4dLy8f76i1PXSdoT5UujvhwnYYDddtYU98s2M8iQ3zMviNaiA7Ktk9AhwMWrJxcfXVkN4FNzHNkEQm1uyZJF9UED",
  "key18": "349TUmrrWo4wCcZEr7NauB5a8H4UuyruEQHwtqmj8RphPJaaeUz5t95CBxDCsY7RBdaz2mrYpjCCvMFwENqNse7r",
  "key19": "3cDsgyvGpipgjZch8sEqU2rKNPwkKXmpH8w9mNTTgirBaY8eWRQpzRJ3xKKNV7h43ru6jMqnxbcJrULHKQaG7e2y",
  "key20": "5VkKTuLGhqMjrPuo3Yru1htUTCU1Z14imJw8mKb6qg3dBhqrbtV1GKPxFHkrfCbpKAHiGr8QGxWwF5VKtDbBkXts",
  "key21": "2H6sLPfoewY2aSGqicrwwb5AWfvct7aDB2KxMAGG5NPitLpdo5o2Lw4ziNCBTU2uhDkmrNgDpjudNZhZjW8t9mR9",
  "key22": "3HEC4D9nBTXLZZ4pQRjfUgKPx9q2BDCAmW43s1Kgpf37daw8tbFNT5qWANwi7kdZTaxbYAZaFHu5cDGtgbNc5Njk",
  "key23": "ffiggzomf4HPuP6hYXA7zAjXBKGs6jTLQ1NnazEa4AREZZrW12Ebr7hR3MLu3boK5HofDzjFeN8rfZYqrYt3gs7",
  "key24": "48eLjtbQD8cd33AHgZMMTz1ga81AvvbjBRmH7btFPQRfaK9Udd234yPRVNxtZRhvvyQ3chAG2uUnPwaqbjx8hRdB",
  "key25": "2r8pfy8iPmERgYZu4HSwkGPD5ynhD4d1pspwScPffLXXqfNpHuGzRPwWBePqgQe4DLTZjwxXvEPdq8qaqQhtgjWG",
  "key26": "3LwtLtNm73wkHrczNJCSmwYmHNBj6mRZ7fHVkwS5Z5z7CwF4t7zrPXwDCHa7ri23xHK2auePahXAW43KR6dgTaFe",
  "key27": "36L6VAFTNVYHjo3JSNcnDLnXmbwVTrg3e9YScaKDsFzzsaWZTZ97FM44ctDGLF4HJNnEiTV9fdneUYMT4U7x99j",
  "key28": "3ZAx1Sx56MHesfNaKoNd15PFEwQjZ83cXnebeddQJ3k1S7etZLtxRN8acs9yGqK95ABfxQQZsgP1g6wFt23JMru7",
  "key29": "3VCYqi6cv73YFXLwGNMrFdfbUnLzhkDm9LkymYmZXCsDdT2JL6yngrWq7otYRY5RR6EiQohVf2pStYMCsXwsy4q5",
  "key30": "2nVnad7spwDD2cMadZ8eGJkoASHSTtKyKEXtEeEjWHUvHdSH8RoUDdyfSjATjgnoU3wnoNSC83TsyLPZ16yyfvRS",
  "key31": "5LJLLaxP1hjGzi2ATGANg2p2FuiJjFMG6bJxvZuiqDnMcorHrhHcoPh2EmzMJA5gfyB55izAyeaYKTBsSGNh7LkV",
  "key32": "4EafNnrSUZCRREFLSuccqEZTCYXes681dxPpZ2roPbUinUVAejdNtYXWrMP4H7HuoLEYPdiCz2et9GP73kZhYhrg",
  "key33": "2zR9bt2TU4owJ7XSy2zEwHy9toZU3YdY6H1QgZZ3yLqndpt1PHR2G7XGAnJ35JPETAt5EjzkfjBH8KyxNGNxZyqf",
  "key34": "DcksYQe26iYAS4ohzpQdBNzZ9gxkAyFBQHjSZhXNy9bhHthDmTS9WEuuZxUqGm4SDk5s5KJ4nWbEyF2itz99oHV",
  "key35": "2zK8CEAeRjUqinnDuftE6MVQ2ZF3fU1Ta4qaEKkhgxgqHtoieQG7dPrnQjtPXf457597iWdSxC77vBYNYDoAtYwJ",
  "key36": "3roQo61k8gnoNuH2rHDqBE8ePSEM5u8AQo6T58Lb2Uv2Vv973pBbkkEe49CbvtetnfEx7M7JyvHDBvXykadDZmD",
  "key37": "5DxVLLhkX1WkWsPXueanjVdKZDA9X24na72ztwQd15FFnHAGzhzmokm1Rv9583QxAGp772CanRZBemozytHwJK4i",
  "key38": "4X97RR3p25ZX1ryViG2Gs9joqsmg83vy6L6ByC7tACRN5nL4Ppkgc3mymuR5xUdhJ35vWigV1BJD17dSP9fBQLZN",
  "key39": "Mv6EwgEs7yqDzZeTQBZiq4VjKvPawBacF4zZvV78PSwmb9DkEpWuXcBizbXMy3JjoyNVoc5BWgwB7LRMdQKofcz",
  "key40": "5F2TtKd7mejyh7GhQhhcfo7JVDGK1hjyoz3nyZdZZXLDLL7NYMUpwAy7nUqJfB9S4guE6Em4755SsUeTorwT4gfV",
  "key41": "FVNTcrUJgNZiWJJXCWB8dMDRgqMrw5sbyAY4BSGjV4gFtqyHTaqAoEMaiNNvWQPVNqQboMnV8iKsuQQ1dBHFC3E",
  "key42": "2N2CpRvv3d3p7coPqmoeWyx3vubHHieFgoaSNUXEnNKH5fSRQwafjgJ2Pwb9E8tkX17DpQ9XcYDa5SC6nz2HqPF7",
  "key43": "SZfeS6e4u3NjY9rcUoLD6irE6xZdBPHkRZCUkXiDyXF1o6NXJTzKjTUNVJnAcqcaYgpHWmcMuUKLsAes8s7EgDa",
  "key44": "27ZVazPptYKPx3UFzaWkPk8fBKYLGCQL7hNMYexpAL12RHiSqCMbzPJrQ8RQoqYsKV2ZoSJQStnwd4qAnszzycGh",
  "key45": "5yucFWNM9VAzi25172adWUVuFBa1b8xmYUsxN1MYSbpyNsc6cjNy8tvJghsWVQhGkgdg7X9ddg4hg74WdZZvsfB5",
  "key46": "59xWoph7g9kVZjSTMRcogLZbfgNNUZ2jFonJk7ssPWHSYy3DGSyF9Bh7TVAeeBxvDW2R8RzuisVrTKdcBABsVTve",
  "key47": "5njfi762roLj8ywPQW5CFDoXEfcGwYNoDgCQqeVDBKrucau29denY413jFCb74q6G3Xa5xDsc2PeSDLWrR8W8ApA",
  "key48": "5Len8LZfGuMaYpr29mcENEkBH62updw3oEGRnptuYYtqNCkKonfoLrEvS44M2P9jqnvxZ3XXMx3ffGFN8NeARnfW",
  "key49": "5VoU7Ck5qsBKySnVSTKTUDC9AQcy4mT9U8a4s3tYRUAqY18EfkyzyYjdWJyJjTSi2YSaR4agEVPVHw4FWbNq9B4W"
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
