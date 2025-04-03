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
    "SxYhRcXbWmqwHySNupugyMtYTs8mVYBHG16aYEPFRXnHR1ujrPeekyAUz2EeW9z6oHyjnyDW4PPwStPi62EtKRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vJHnyWzcUMVgtp26nXcLgH8b6rhyjWUgdN1M8cAuZ5n3ZzWpiLpJGv2kw64b1BAymE3RtVMFAU68St7A2S8oLzt",
  "key1": "6Rqh23RqZZadM1RdaBh8PoL3qHV4EmazcZhWMAiXYb8H7skfgb1SVV1y8nugNbLXAmEkmXhZHmwBbvmfWDoS9iS",
  "key2": "4MWj4iUL9a2DsYwYw4X2TiFqppvYRxKk7ThzqVLvStfyUFMxgwmgNvME18Bq4h6bfAN9P3jqSmC65GLdT85hSLNv",
  "key3": "3uw1sCeh8GZd3QzfaB2AsHarePJyx93a6d3FeG2UriTaJsB9TsuwYarAiWsBwdZFVBBqnCmkAoTQMjMEnWsu5WQ1",
  "key4": "4Xgw8gsTU4HxLqPoXBcMCevgQYgLaEVC7FnT4vgvj6UT2krspbj8fLLp5boXTDEh7GreVk3aier6r6HYt2VdLLmv",
  "key5": "4vRCKfiNCtYgvcHk8MPoX9aSJPJSw1fZM4t6mxCqCzHempBJX6bD995FtyFugeYzf7JWeqkNZyXpyju9Jjm2ruTY",
  "key6": "2UkUEpJAhNy3TN7HV2kxLoh6V6JgPF9xBfhPS8oC43oftBLqdwHj8indeAwhsr2HBS4rdwrYqhRySZ5ZUsWGaNcF",
  "key7": "3diEP5AE8PRwUkiKNAvKTJ6mx1FxiA7gAEcW8KK7qAFPvbWqjRrVqqH3KNm5voRfCRfAo3RaBvXY8FmgaQf15Dfx",
  "key8": "4qdeZy9br7TxcBw5BJFNGu4mQwPKcNy4fU6UwfjuNUyUdpu9gFaX7FZcA57xQxVedJR2Snj96BsyrQSuHSjgSPsL",
  "key9": "2Uz8UroAaHfQKZ5soar136sXb1gEMCHXYjAmkdTmMwGQZEP6SydTh9uaMimukfkEMMzTyxgXPGvmCXxHxY5TWVC4",
  "key10": "5JMLCUQaijncn1xrF9ayfjYjYm2Tek9wShkNVncHRh1JQbBnQbHQDqDAyjGR7Tx3BhLnJcTm93HdBuGeDCmx1Suy",
  "key11": "67e735qxef23cX2zKPKu1Jzr6YsWLQXCySZkHvgGVQmJRjXMLNkfDKCRwSfCxWSL6uqmrGknq1JcAMC28jpSuT71",
  "key12": "54mULLpFx4eGNn5AUfJJGNWCskzCBBGuf88JP3WCQb7Yi9xURvutyVaMVy37SqWPAonLMzyGGRC698dSoMNioofc",
  "key13": "4fhCZV5rTPJoxQsbHi2iKpJuqmJmPrayUKAuEhZbMPDFCRXVPsh2qAKLr2VvZwH1TMY8ydju9RNzQd8rB4WTLndT",
  "key14": "3Ec1dVgyLeq5jPsrqtbDzEpf7g1iAMPJn3z1QvyWASAqjMegnqPjzgAKQXc2jUQr7bNgV27RZ7EBsSvvspr27MxU",
  "key15": "2VecSU5gSYN6MQWR7g7kW6ySys4rEiHeKMEsoPiPN83GGMAioa1d8BLZWsZVwEgywTYzkg3qPLr6jDjFrmche2D8",
  "key16": "348AHZ47GLGYFpsNAXH2shNca7ghFY61XzmPUsYB82UgkpZ6E8KPHmCaRHgbweExixfhS9kxhT5dzpVgZBjx6CkH",
  "key17": "3zXgJdrvrJ2gZubYSXoW7ULm7VmzsxDb2etxzoSyWcawFE1pQ7uQFwHP7uGCsSMDbLdqBcHNFALrYg11Nxo8xMRT",
  "key18": "6CHgFrCfZTwLS6ssVdqcidLWqB6HX2JJGpAom2SaX3aBRKomLWYDR5bh5CGCLegCiQU42x9yGjyo77TupTFcVT5",
  "key19": "5YY7NrK86e1H4r8PmJikVwhv4B7TYoYyQMqEmE2YTrhZBKEiNWvKfUQujhsLq4JCohAx4JWnaFCpPxrGh45cbV5B",
  "key20": "iqTJDJDpuyGbC6wCmBYJGGpTEcvHjonfiZMyPNqPVme3KQFAnqwWWLXpPBSGQG9cAmpZvAnyaEDw2qXVG9bZmhy",
  "key21": "gq4Nhro3H3QYtYfni1DKMFzuXng3bJgKpLq8FpqiyKYt9j9RfHeiaYChCnMPq3VW3MBbbC5GVXDx1ScwyP4G1tk",
  "key22": "36pirAuxnAbUj9oSGndGPQLZDXd3MZmMKUCmE21BNAnj41xS3c3sNXxMTKr2UknFwh6RxCvfuJTpczZecSX82jE2",
  "key23": "5JPvHTxUMC1YCRMnnb3NfJreDnB8qcPeeGDps3mF1gmHUu9Ujb92u24BquwkK6keaJAAqVGqiYxzsa3a1YGPLrwm",
  "key24": "67jLWfpf7AorNj9Fa1L2iEiyyQ9VYyJo4ucQVx68BT5uAnmXUU1xbR9HFmMa3iVdbF2HaW9nVrRBjYV5D7UCzVv3",
  "key25": "2EftZgfEDVVsNpzBEp6MUZmZVdnxPGHPdBVHWkyGtzj4FweJVKAWDJk6JkghDEQBrwaoD9qUXpFFBsA5gpxrmcgd",
  "key26": "78uDBYBZifUyV5SroFadcVFYxfoRYFaaFopHAjFL8cf4Ty84DZwaBkiQARNU9HNL1hn1esrFqfXc72FoUDQRf7x",
  "key27": "2NVmgiURVmFCW94dde6fCUdPHQYV6CiUETJGVCa2qCFsKnhZ8QU8KVJgWH8DziD5dDdrkrY822fcRet7YtfXBzrD",
  "key28": "3Q3QQg64uqomGeRse4ds1QM3Sw4YQpwkxE47TquEauPfZpnMwRD49iQ7vSNUtxS1aZS75GRuz6gjoNTTDvxQyCXF",
  "key29": "46oUWuhtJ817pkGbNQ6dhr4vf1Z4g2axg8RNyAW8pEMds9xXmacHtYiQgGEEXy3b77DxkbyVkMhvKH8kJyhybq13",
  "key30": "5XaSDyfEZkzYYJD3923x6koXzWU4pAPwS4cEp3g2RWc46XboYZAetR7jcThPYCDnMdT3uW4KWVZdqPshG6hpJ198",
  "key31": "5ykqAgoyTvKr1yF9Gbh9PMmPfPFFiMmRMgrSCZHzjx5XPoiNMgnxtRMTM2gzUwBHJkg7UAJNWWKEqrYdH9aooa3B",
  "key32": "6uwqEYDkeAjkfp4k8AxCU9x5c3yvk2wkxGhzEp8EQbrKvDeRmGFZoC3zUpJDkKPSKETxMEYGsMcLqz9CBRNqDL1",
  "key33": "24ydvaikaNfFyUyW9n7Eo5JiNQpQ9pREUuewk5SNiU1pjLHFtFowxdobM4fhdDuf8xrJFSGCio4b5odFcg76htQJ",
  "key34": "2ZB6jjUhvuqCuXSANr5RrhvGkyNgXzXMd7w3eYkcZsECy3omLVbbxAZNCgiKUSjomeJcUxvqZsC1hNsTztjgazen",
  "key35": "2teJRs3swxaXxJhXcCwx84MrfRYzAUugxBX3SQ6b8h32qvHC3ht99scfkhjhieZFfWhyKoV6T761PfnMjxsGmKHT",
  "key36": "2uLSV8zKgyQ9c5QPPZaEWUWtWcUhB5fKfvNjG5yQLVebXfbgAHJByytGCF3mXt6dnrzP6fEqLWM1dcRuQKu4oBAQ",
  "key37": "yoYKSLBExdN1YaqWULUJA81d9uhrd6KShEXdSVsFxw1orWMui3HYXKunGbUdSmVp58HfJoSNBsu6vqPoBUx2RvZ",
  "key38": "4GCg4bUJpmapwzdH7MmfNBC16rAte74X7fcynsj1ovT96U3oJ77uJqoYzkqckdyd5SnKL5WdjkHB5EQwhanZLMwc",
  "key39": "5TaPBpHbnos7hutCDYS7KUDpbXW7s8UTh6NnBWJLMyMmEcgyVEptVaQtFq8vhcipLiSkhu68HYrwLChAgAk5BeSh",
  "key40": "2cGT6bs81p3zyU1M9ixaqt47MVmc6eKDHK2dURTGuUgwj59nf6Hh6iuSK5HZVEgo2kvcQnXG3L1QCjzWNiDAWajr",
  "key41": "4TPPpAfAB9JYQerYus6cDBZdRQS5DEk8rKLCMnQf1vr19N3jhMHcPAZBMQGhY8SZE3ibnNhBj7UeCUmv5FEmmaj1",
  "key42": "2H4tAMhJHjKi72bGw41A9Wj3mXEGe25xodNAyDrEjjoJRzWsv65C1AvpPXsrLD76C5B2rPa6Fhzd9SioNgiKMjPb",
  "key43": "2KMo93EN1aVHWJhouBYz7gGsQk1z7TxF9gqqGLpWLseuAKWXM59fdfyCAnBA1CUgypSJBuQnHu41Y3qkuR5pcKFT",
  "key44": "3V5tPDePb22X3uYUACjApSbphHAyKrfFXYCtBCXrtqev947KMqPZsVkSs37UqRa4iGcsSGvneRSJ5huqob8ctZqE",
  "key45": "5B5p2wUx2hAFW2jWrqmFVabF5oWxcjEsCRxcK7xruTXW7Eorbp8PgFbT1ZFkJDAbrXXhYbzdKxSSxjqBfnc3Qcsb",
  "key46": "3CVVdK3CMDoZbYs7VCgv2tGeZy2NZm4Cy5W9HYVHzfDpHhH4qNt4cXVu1Zp8846TnLmUSKDUthTrLznkw4frFCGd",
  "key47": "5wQdQM1mpaAYWn1Zwb4kkGQC9osKYSodwJyePwTn5rZASjJcouChZgHsXzJN6G8B4og7UiSYa6nbmZUtYyRyn5uD"
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
