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
    "2kB8zVDciK3TFyQKDdeHB1f5SeT1AXD5MiUNog8XXFmq4LGu92FH1hxABWxTY2wJ5cwdp4NBkP4Lw1hw45R8ygEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EKzgEXrXZFdYsrgSSZqbEfoc4AKQDZDsMiHrTAsPXGXkXjSQd9tZTMVhkMcAgmLELpofoAT5NWatQ9abjDaHtdk",
  "key1": "4QQZRhX2rbf5St443HCuhqhhm59hn9X6oBH1syvrUKCFB6YJBsrzNvuSnvQ3CgB79GJ2zuEdhqXWFTz5natsopC2",
  "key2": "4tV8NBE2fSAt76hW6KaRUBJjr3ercNMvimMaTQdKuaiDQ3rWta3XYEyoYUZNZkAzsfuiJqnQgjmSBRf2FM1d6FWm",
  "key3": "61vcnVCArr3V9EyrADDJnFMyT2Sa7e4vDT317aNK7ndtGSjyJ9dBMdLbT22qJaUEkgFRsirzrLjyrdAS8dAEWqTX",
  "key4": "4QfjFbx9rdoN7oCfvJsQeLoqTSnG5hsNoho26jEo4wBbJPdprY91EfAyT9ydKnC1vXTf4u6nGer52i49SWdHWR2m",
  "key5": "3GHM8YotGKnY4tvUnJGnUBkf4Z5Aga8NrY5QaSf2RzJYGFzHxBAoR4MKWNJxrUwZPKLQ8FdamWTckJwcS2ZgaXXj",
  "key6": "64rgWJTMbfxi5vz3jQ85pAEpwXS7VGCML7TjQDyKVTgkow51XbYHHEjv4SdXDCz1prADvAMeWDG5XLkt6vqrhZER",
  "key7": "61UJFMk7KdzpUgPmeiFhayZnfshs5KDyCtDPNmdTwv9MTfVMC1FN37TeRwXruadRJ2LE6LQ3fxjhkZkiQhjdc9VT",
  "key8": "4XxkbMkhZvEFuWQAbWwFBi3SvN4HQ7ccsnhaEt6kcQCriF9ZQD1edUpyY1HYbsb1y6kuMYoGoxHsv7zQtyXJRn6u",
  "key9": "2uUhHEhSrqS2wnsTAQekSx8WUvoRiSxaBoKy3F9G7PtB6i8Sx9iKc8ezmwULfnXsdFQJ9hLBmwSXWPqcNV2xunGe",
  "key10": "yH9sUhDph4ENnZ5jEYGCAPzSZW9ajrqpXxe6256inQKnXE2aPEHttgVHAnxrgmRtfLAwBLtU4w41gAbifjmKsft",
  "key11": "KHvNQLh9PK2MeYmWNKby1n3Lfmbfqezi2jPt2s8ahxSR97f7DqMk6tJEhxgJrbJ99jJdFiUBEQGaFYuoX7aaWQ7",
  "key12": "4LkcoLTschdafvfeit7LAvEQuz49gqkAmfPHBkuzoEBvgNCr36rsb4YMN22M6SCwjX5RU23Ew24icAGhmNmXqRmE",
  "key13": "31p7pLVzSHn4itq81TQYrCF4cdSLkzZhJ9aEVJx39rNdLtGcVbuPxyZmc1bVsyZg2LRbcBk9oB2iephypg2udsqd",
  "key14": "9MX3UHqNRTDheywnV2LELWSusm3KrtTVo6LFKmcnfvxhzb4LXbBaxGJqurqB4qNg1HsEHtAW9UJ7Fj2TfSYLFtt",
  "key15": "3DAJwz39ZjwyTQVNhzA5kS22Vg7Piaewpjb7mXvxGGmHJ9EfeEnaxMnZpmseHqumoBJ64yCnJczwpkShQx9cRX8G",
  "key16": "5hTiPeKbagYmJVAEfSjfe5KhGUKZ3ciU2YWGiMe7y3vqg4MEJoC7XMbB6RYtWquFFxyFacUBhzLmZK16uAoLwyRS",
  "key17": "TuAHTLndBdacFio3sH1Co2QKTTBvrjXEQC4n9v5ArxTAX4CZ8xxCJDxTCwVWxPMLowKFnXNGF8JTvCDyMBUnaQX",
  "key18": "2mmoWfBJzyeP2ih8GMv5yo9XbU8fXx1urcMSaPD23soktCMjZzYU5evHyLVbJDUqdrxqRHBKyUq2g3ErQGcVHbQA",
  "key19": "5VXTgbqgXtzjK8cRRCVmoveAjVJxuLJ7VUXraM5cpRUX2983tTejE2uC2DwXRvYbJoVA12tVNxxVb7KQqkhvydxV",
  "key20": "5Ur39H6EQjvzGHJcFPtqVi8pAbmVdUFz4o2tUk5VjFAhmX99TW41ibdRusFoGEiQAxr5Td616YaWEyJ6CkRXBZKe",
  "key21": "5ELsgFPLzATnxt3jZMAfVyptBf3KCUBEB7fANXxKL3i5MP1u3UjerTagdm3qY8DhpPsMQpfXqYMZ1qw1ihciWhN3",
  "key22": "3BMZeo1rKYTC6p8GaRAnHVNBp2Uw7RgLtrPUoWsdEEt4tx7NHUVB94ptSK3o5W7FK9NjYysS5Kc6HjPLjaqoHX9S",
  "key23": "ixBonYCnebbRhr6KS6EbShGWA3HhGcaNSupCmUPhnSsxMa9Hm81mhTm5zJgTnuph83L2YPLtnNzRjUzwp7H62cV",
  "key24": "55nAtGQ3HFd3eafpvhBNdX47bgz4br3crKBpe8a6trsuNfELGVNGfQ3mZn9iftNMAxWbyzHQ4cEZY5aRtDkGRGq8",
  "key25": "2bACzURn4nrRVUdMi7BHW2VQXBLgz7NML7R4tNxgwHFLjFdyDzrMxsxKQ1QoBbeDQHiPbguT1k5eDYbFJVd2JqHP",
  "key26": "q8NGoqmeFdk5HEycd4yGLkAJJN5dL2qnkct2Mpfr7U11AQyvoKEwftPJGK9VGAYyjk8m4FZHzy1Vg5KwEr32SQW",
  "key27": "3rV7wbYBAZqD6isWgCPUVzDLmVBDdbnwhHAaX8VUPhsRT7kb1AYCA63MKzYzt4n39BDRw1jKieTzj3dJbXuXwxqW",
  "key28": "5KCbkVduY7f9M7YLiWUnMaPxV2QdAPU4rgXC8QAGnZCVfhe5yMtRuW2z82KHmNCnNr1mpcZrVtaoRVCgHatKU5B9",
  "key29": "5J8LoxaBngLK6P8ArxnKgCMtGSxMyA1W8TeD8E9VdDyo8jHcbiwGAV3oA6MrqkHaXc3jA7i7UVMDPe8jcZ9zVGup",
  "key30": "2LzNaGTgdhfuQeZUXDUuH6TSdQ93CE96oaWcswF3vvpp9UxxQLcBucshuo6NHTitBy3CZMDFnPikbSFBxDuGk5yi",
  "key31": "4xv2DhKoNWw4w3RVtnvfZz8VXwuDiGK3JVdGT7fNAd5DzJDiFbuNMRdcW3VtXysBy6X4j16cXq7JWNCK6GCehQXz",
  "key32": "5QRiFfb6RDcAgEqnosUncY9WhzU5W4wbebgXgmkgsfJ75tTidJbWFXfbtp3Ct8dHmpeSjdmhmCEm1YXKwaySTCek",
  "key33": "3HCHqNME7QRZo9vnnkX4c2Q1zLoUu5bXYhFSm1iCuXb8YT6zkbmswNuFQeTGK1zx5f52zLJqdaEeoF22ZWAgaWBy",
  "key34": "5sTC63nucWPN21VvYA1nnyWZpmALTjComNa2fR41667hGC3BPtzk5SVN12Sq6vNH7v3rtjtK1cBcbiARheADLwSZ",
  "key35": "3nquJYiW76VvZz2YUKiwP6q8eb83a7hfpMQGsP4Jp1iKR6tRmc96PjRLZoXRznuL6Vumourti6hTpXbgjmiqdqW4",
  "key36": "2FdnuwnAiFZTr54dtYqj6sz5tDp7hqx98DPGhtB3oqWtNN3SiqZY3x15dTfheakzAZYM1jvDLyNx8ktNzxoU35Di",
  "key37": "2yppXQo3vvGQxGoMdd6w6JWBLa3fo5vmQYm9Qqd1rg7hpSQUXFCJLxCkcmR3FRmmxFD4TVuD2VQmeHkWTS8Daj2e",
  "key38": "wAnAZsTxUrApCnXsGPKXfe5qSmSSn68uHAjy1bAYzqZmJZUbMUNFboNbujEPNGv9yUECVgYcfrgFB3YxcpFK8AJ",
  "key39": "qX7wVyD4UAHCnfzcVQexLw3TxvsBmPWtVeENHqUEJc8npgQPctWG489mtPHq2UTUBW4j8qVL3GyYHgXmKBmzHjN",
  "key40": "8GgowXQmFc3pJYg6jMpuPHxxK65uAuvjumeQD64mZ6iCkRDzrHNLkrEbPTfDicB3fBugkG7qs5S1hMN9npA1Wg7",
  "key41": "4ohptxo1t4TDBXQC1SJy57hBVvkFx8vSjwwtqyKs8ggKaW6KuewYhqo4LCY3bvseyMX8aiG3kpuWBeqdPXkTrqPM",
  "key42": "3Ju93Q9twma5Bke7dHSAxMYV9CzxbKWLMxyaSbqtyQwodLYWcMFXDW9Nc7BNeuPeWd4ryKZC7XJGSdV4oR3hDams",
  "key43": "3Wi9rFgpUYch7fD2S5ViJT5qnzgtkWaZsfNSChRCpgSgLhSdTQMzW99ZzutcrCmWQmWdQdEyTa48zgdfqc6mcQPP",
  "key44": "4q4eF6PDJ7yVB1NLanYsNLaMzU37xFUTXdgs6XMPE9fvcaRmNP9drf89zqa2vw9ECUYqN9eyRMVgvo8pAFtc3c4d",
  "key45": "4DpHvKV54X5bS9MrBRcMwPg7qfbvTUm4BGfAG6RFn3gXGY6RSi1oBeSQBh4t3qxfkuc4V5j6RMqfRtLc39xVH2ka",
  "key46": "3VB4Guyr8K7wrzy1v6qc8W75nk3TLGTxe3V9zCYLEiVamXrQjNKw4cbD4D9H6iJkiN4xvSrGb1rgR3enSPWhk7uv",
  "key47": "4VZ7DCHDRhsfvKZVr1w4Tui9gUEQRzJCzSUVEg2YzskYuoCJscaHAoDPj5CbVPngNMgyoVt1drEWwkarvbFai6Ha",
  "key48": "5GovQgHruBAkeeEKsmCxHS2e4cULWSqhCuaMYgS1pdyoiqFwXGYLStvKhfkrUaW5Pw6PmFSkoZ87cPvNBZosgJd4"
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
