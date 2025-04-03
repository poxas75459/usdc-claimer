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
    "3nfQJLrKx5Ncq6gkfjnUKtkrsbVuRsiHNWJ6q42EwnvFp3nA4RzREpn8JqVABRAuphNuNbNh661GtGdodF7kc6V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUX97rFXqsCTAGWvZqwQKWputaKkPg9ZUChTCP6dfSogE4K4W1paWR7UEyJXMdY5LmEDwnuKfavSdTxK1kBif7x",
  "key1": "5wPFTkYgHxH84Gxwr2iGSJeq7nunso19tbUJ1rDt4dPH7oAgqmCR29BxupVuWWrKb2idx17dUNC83WixJXbeqp7D",
  "key2": "3aie4Ns6ya1ZEbur8b14Q5xcm5fk3ycSCyviEW6iUazWzCkDWPZc6MYtagu6a3q1RkUQLYWWdQUHqrea9gJXX1An",
  "key3": "5LwpLxTHdmFYdmv9TvNYoTxXrriBeNHYPCqoejocr5TieCV3NSqj79ssHVrgwjsCMohvCXGWDCWFTYbCjCFFgrxE",
  "key4": "2YLPCPVkqddUKFcmiMKdq7hDyaCtPi9xLGRNScmNz9fXLsy5pApxw6fTV8zeUxnTReXHfKmim7kYYv8jztV5ngUX",
  "key5": "4kKa8ePuhRfU2GQR1zCWo1HcypPPxYzTV9nY16mxc6crEYxfjqVVmRH4ACZbcgpqeusn8bd5roJDkHHjPjJYSump",
  "key6": "uEw1JBmpcfdtaBnWapxRWqB7cFPkNmKcAspm5VqGQB2m46XNEc4Bsmaf7Vbn7guenfzcgYiEtDNnFFQp8FtZtDg",
  "key7": "3zppnMeSr6ZAxw6QdadaaqJinzXVX3ALz1KEiwitYgs5PS3ZkiwmTbQgVHKDPW1dyWiLD7vN4k2vU6dRwGSV8wxh",
  "key8": "5tPjiyiEBEph1UDJRTTRNT2nPoHv5ucv4Xep5LeDxduGToxEWa9jGqw7cJP6VhnRae9ryT1mD6VmzkfkkBMZ9mKR",
  "key9": "4wEv485RHK8KeQfwtQTnZr3yrN6gi7Fs25z8WB6k3ESvFpUSoMVFfCFmwwMRkWveBiXVNbwahwut9L3cTtr3GYHP",
  "key10": "5KFc6mnA9T6LH8NYpHDHUxfUHYQGLx4MA5b9MhtsGwGvYHdf4mpvaTGoBosykPZebMepb3bAmFmb97AvZgfQNcoJ",
  "key11": "5uHKmK9U2pR38HE8S8XnbujTu68uR1Uh2o1XRDtmRcQ7jVvYDxMf23DKAVUTK9tR45XiKc6Jr6zz1hFiyostZ492",
  "key12": "3P95c7GadL11frMjkD5gCkyWRWy2BFg6BATmfJeBdYoknNUkwyifMs3ZTSJD7ku8QPML8kjNE1a89Nk7vdEqh4wu",
  "key13": "3dUivEjWeXFYsWsYUCXLtjk5fXueMof8iLi12QkWZUziDUCrPcmM7Y4oybsPdSKkugcDxDkp5eJMhQThysEjZ8qs",
  "key14": "2aEEfcj3X1dXB8RpU3vw2XL4FyHh5TvbrTqJBtzQiT7WQRhXTJ3zEzgXAiJt3BSBsUJXNrHrvaW3JTwgywHxKQUo",
  "key15": "Wjqbq7wiZfqHUcU39AQ3T1HEjuwCgh98Lan5bdrJMQHeDkgAijJwNhR65C9QKfQi9WRbacomm1cBCiWm7J7Zgpr",
  "key16": "2VPocHwA9dpkzvXsLqzaAN45DZakz66LwqFDe5QtgcDFB7dU81ih2eyRhw6pVAPSimPEaf1ZoH1QCQZGvyupw4SM",
  "key17": "22sUBnhPnYPJdLmUFPB56dcNdABZ7dGNBuJwLGZDq1sMS4rScYYDxhPfJkiyuhHW4R1GdpwoCPTf29JYXP42DECv",
  "key18": "5aCcPmjs5niRhKv2uCyZpA8kG3Kjk7um2gg7XtYmx2GpKZLi3oApBJXm4qBrpA677yV88sTMa7A1j7xqgAbXv2vU",
  "key19": "4TuskhniDya61NUQWbxRCFj5Rx84LvVoy58LKLz1P4CatcDQ2qAbgYVcAGPxqt7EtkdMiQMVPsJTVUefVd1hpRDd",
  "key20": "2ZP5ycUdng3fBwSSHHZWPogkYbE5dPqsbJ6m6U64kkzWNHRybCBgyJxkasVZ1GwsDg84KvLqY6rLR8hMEsXevsvM",
  "key21": "3LVLTvPF4Nnoi7VHA4ykCXPLaEwAu9NErkiaQENBakhhurCqe6WPUpBpkd3DdXfMZEnpLcpgVArn4bYpSEqWrRBA",
  "key22": "2wxkR5DpsGwqQt98HcYo37UFzUbEQTkwxntfC17ssjK4DbVcMuNt3e6v6baspCjRZtRY6hgUR2nTTkiVXTVr9eb2",
  "key23": "4BJngLc9Niu8vgokuvrTq5ykSxm75WsBL6sV9fgEWAd7pPrGz8pePxUcHThZqG8ypvV9eMbpGcmt8dm7TnCGyza1",
  "key24": "EjXruj6CyFvafjmWHmCxDVQsRyCp9nQc5vSxinBbV1XiiJ3qhKGP7rhhwHbp12scMtYmAWKh1LcQUF7kxhvwgBC",
  "key25": "4b1N4gvBUBt39BNwtG9EoQTPFXmq54iM3KmPVwEcxFe3r6SMacRGjN24JFEELfzJKL2kLqCNGzLEaZwjmNStPEzs",
  "key26": "4XNCkw8gPhKzNWehRnZjwuUxD1KLMYeoX5Yres9vGovJGptu1oGs8LRynN7SP5TUaFXowZhDAYWXU6de52eAdeGw",
  "key27": "2EborseCjDW1tKLE7DVtWFDBzhsohqjkXcZJVrLMG98ZTQHgEXPx8xGHJjSvwXWhQVDBtGQ7arAZCmzBfU51Fsvu",
  "key28": "3ADb17ykbrZWT7AUTr4xFmhKFZ43Sh7offXAAM6mHkwby5J4xXGvKnprv6bes66CmMtymY7uQ9KJP6rmrpg4sg7V",
  "key29": "65Mg7tVhnkx89VcriWewxQvEtdTbRadvC4EE5EpSDE3kJ7yZQuGWioLmv5RhYY96YzVMHrPiYXSCbHwkDbSA5CpP",
  "key30": "5DMqBaDBjH2ASNRDFyprAt1HiSKpRmm2Z7NgZWuqcNJ9cYDw9fSKphDrye4DjuMiC7aAmCCP4NRVBRZR91yjTGnm",
  "key31": "4bB5iPwkrmGzrKXrx1eN9LVQaRAqMPeH13TCYNMqUUYbvYHPiBL8EtdXmcSBjek9erT7AuoJDwmjpVgZpTji3w3x",
  "key32": "3BAM1bdfef7GuprDgRDJmfTqqaBerkn2C8uZAiPj6RzMe3A2gHZhtK5EgHW1w3i9QF8dkizCHjQobA5RW9VAMV9",
  "key33": "2iDSF3egFidJKbZz7hWTYbRjudR861jSaS2VBmX7Uac1s4tHqzFbZ6w1e2uQAR9gRyEHj7ZF3xcpDWY7iikAqr4S",
  "key34": "jp6REXSiHMPWtMQ5dLAUpGnkWPvPhCRspUF319im9L4hxntnzh8mTEbJDDNUwtdqT66jiMkKDCiquzuWkPriNeL",
  "key35": "3L5tDBEEitcphkcHTaxJ6zamKBBPTLEucY7tfLJ62fH3jPVb3Bpqig2RBqVexnvTSwG39WZjmWqx7nTtHEVVYzhu",
  "key36": "5fe8uhE4oZWQcn3JQQBhStexwmCLEavRWyP7qap9xtinjU9eNN8VdLj4ADCiKAZbnDE2iCXtqmXD6kotLR8xgaku",
  "key37": "Ccy6sADQovtkhMSqJynMsWBZCgCcN7bcUtBmwib8cizyjzN3aVd3ZfUA5KKrH1TMxFmdPGHv8KcovoSbTAdJeKq",
  "key38": "336SmSEbXXNLDaWQeq4hu8MKsS3UG6MVK2JMmYEvD3xkyXXe3htbv8oCWBCaPUMENMVhmoiKQFh4cYK9VVPtZ3Zu",
  "key39": "3BSEFZyRpkHsj3bA8qtJaDDKdccqkrnnNJdARGtQ6Y12A2DtVAUyoNUc5aH4b4wBuNRAxkyVob5YkKoet1uaeFyB",
  "key40": "2xZHZLvX3zP4MTwKp4Z6qqFnpqrxDJoe2vQGtXKzuDaApyoJsPbwcoJNSRTNB9NUKWwQo7uCnQpVUhcHYAhENJqx",
  "key41": "62iktTnWDzKe9eWiiaC7a5mWSTqkLMVeYbd7z3Y2UPaVcbeehcf9AddY9UMnxkN1Ayz7h23NcsZ3mjQ5KMwwyRe1",
  "key42": "4rAr16TfDorb9KrsTRJTiaXi9ULCuuB3m67yarVQBYcR3pN5uz7SZ62Hy3BtQGwWKXaWHpW6nmsDs13iSE1iGxov"
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
