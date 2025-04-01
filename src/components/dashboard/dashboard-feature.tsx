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
    "2UkSvGzTACsswRedkPzZAxCWfiqcWXihgrEBZBpCffvqdgJDvNwcgyaN7zutKcCh7MHFuu8ufZU7Wfn8a9MdqESK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yDmavf6F4VtgiohFmSbTa7XB7Y24jjrp8g1PZfxxHBUx2SG1sNBDVcPVf4U6i3zBfrWmpKopRFJdvf8q8gb7LVY",
  "key1": "4H3venuVWuW8HjuVsxrWaeCKAVJro4dFYKShvW93Yebiw7oVad4eS749XcJVKwoTkD55ciQbDxMt64WCnnJcnJQ8",
  "key2": "4m8Zn8XxGRfUmatbXjeebneH3YamDuKstHB5k8m1bHHFYjeirfJ8GwTbtVe9sYnznx62DYLu33cE4ubQD6wcZRg2",
  "key3": "489ZivLU3csyUib8Xvgjo5NhYbZfEFPm4xjVmHsZeBC471Hai2uNQ9b44eUDxR7pYPTipDjQxd6NLFZFLJRxDXHS",
  "key4": "3CSu5mvN73vDz8uY88TiH9CHnXKxpWjMe6HHcRftgupPVPi6gTuQCpcwQWnX3dGRThFaBgvC6BEmLpm8HpggoHxE",
  "key5": "5t23qKQ7YjNefnS2uyFGqtm1qLmsN6624LZ2nCKxwjBZ29gvURwuLCnykuzLAHG8LTachM7SmtbjHuKRNPKKFz6m",
  "key6": "2yevScRSfnbfvAvLwZoS3G8xve5qB4mTKZ7RbCbpcNHYmiHhwer8xFkHZjWoiNVEqFi8dGUGL2FAiUGyNbhEGYBY",
  "key7": "5i5RYCrHeTaxfuy6ySLS9NGritQzNt3kPU5jkAR7oF2vfWY4yVEkXv2wJqZPDNqaLDX3bNnc4v2SAXRiircJBKcZ",
  "key8": "TF8Q5pmaDzPuhkxdrDQV1FMh6XsGigdr5AHfb5pruggsHvJcmmL5XneeTQVDhkXDtmGmQKbcPMVPixeN4CR1xVA",
  "key9": "485e67Jz6GaqHJHkHoTsL9qfVt8Nkk4Ze6bXG7HztmJZbMeqAap7LGQQr7DaPM2jmA24hJWrKwfuRsWTb2Vdkphk",
  "key10": "4J1oMsqBuQtTqJzNhLyH29y8DiFCR6g6HA8MV2eucuqenNZzT2J5vEf6MHmhDgUtQ8Vqv5z72TvmFqYqqA9rtchV",
  "key11": "5maNAQAaybXewZEP2MQarqQgN1s6qe25TzcyMXZJxzynJRuRqFG99Me6jsiawYGTLYTrSkVUqpjfkp4hkr8aawvA",
  "key12": "iKxPzbKQaRCzMCDK1i5RFwVjfsteZTPhqpToxNHrdjUMP86xD5jnQnKnbkywqAtBET6fCLmHWW3TDbo4pvEPr8k",
  "key13": "5Wzt6ZH4J2ULzzSivCBEcKY9EmikCnkYr5iGV7TxWwdMWjE1trLgBraVJhzH54R1mD9fgtLKvPsdM2Nm3UvmPJQ1",
  "key14": "M5pLubXNvsgDDeiHJmVTXDVnBkwVPgg6HNaawEyALbjpPxKKYXoxKv4YygzeS2TS3VAaFUuDPa5mKvvT3XL8vWH",
  "key15": "42SrUnqHrs3wRWbrpg7rqZGboXMUrEQiJt1cDbyQfABVDEms9fn5U8fXSLa14xV9FP4fwzsApmNQrAGukydybchY",
  "key16": "4kTUW5tJsk4BrswbNzGEDadiFnSTsq8mj3M4wgSGEkaivupBb21unLfVF6JAx99hEQDyZBRFLjhbh8UFd6dm2RC8",
  "key17": "6UtZ42YQbz2KwfqddXXgjAMHqHJriaQS6PMYThjxn6jDHbgRNUZ3BR2z9fenci4SGxhwPymtMccTpKAgMK2JvmM",
  "key18": "66myc44zQre1wd4riaydM4TLTi2GRGVC1W1Zew9vZLUA3y37nqjD7syHrkESSDpu9aTdTXydErKgP6w27VrYi2Cy",
  "key19": "aNvniv26G9Ng74EPZZ3WqH7CqNTXWH78fMhuC1atyq9bZCwFPWZcGAVWtQ9qU1NXwVPS6FMm841g9Vdf9VyynVY",
  "key20": "4bboi1rFLkby7ftbUj7oBf5b5LfrEn2YkXuLagvqD5dtNxeY5negniCNGHgpZwzdYrBd6KUKyKXHURxgVEsh8iH5",
  "key21": "5rYXtZY2iQPfmETXR2yfMToEEWYFNQVXQxfMU6k5xioAaLKDo3Fw8C29kLnY9HT1hPNmfpYx5FedaLXZ84ugAqXp",
  "key22": "2tay45uK38k8z4zCm2UeVwtpdxCMfSgSNCB6WjmbrF9MyoGrXcqye7bDDo9XCAsrc5GNwi9FVAHE6DgoPy1Rzohr",
  "key23": "5YydwitCL2LUBRvSB1H5v1B35EBq7mu2ZRnZjW1vyJd7MZH25u89UfmA9rKaGCWmJTZp6VwHqYZKkkxAEfvVs5RZ",
  "key24": "3RYEyb2fLDUPd1ZPzMJp5Q6QdrkkxK7ehMGG3kYzq6a1NhvVYLMAraTC4xGTCxxineG39W9HkahKq1ZtVrcC7KBF",
  "key25": "2a9bshKRwP6f1qmEvRihgT5pwGscuTQa3jDoV7nNgbHLX4fDP2dLueaoHxXW8hGieNWrNm2ugVn7ywnuuRZM2Yw",
  "key26": "43JAooRnZBBHxyU5i2RG9WTqj2wPisMFUhxUfRA5ivM7ZMJgVh8MvPFKx69DXCEYaPxieRCoMCi1S8UurmwSnCbM",
  "key27": "3VEUbuvqP6weap9u9bGDQRGwU9WDDALNMii1q1XnDWJyuQMaq1C9rDYvzDSAZGBPE1GRCk5ey8425Mr474ALpzBQ",
  "key28": "2sg3qFmDXWXgNkuEa2fzLYwvhvrLmwG8EoKtbE6Yoz5JTBhMCNsQWznkzb4DoZcyugHwSy2KoNPxgaGb7V5EcoVG",
  "key29": "223yL2z1yBQSfajJtxz3rdBLgC9xHmNNHwRR8bPcsRE8fVFmkcVenAgNYNfTFz1pDZ49R6Po9eZMydudZhGUEX6z",
  "key30": "mFXzEwpL1T5YFAMgShjB8A1BGM8HasESbcpHThL4n3QLXiewhymmF2tR1cHQ22WcNaNQsqUNLSgRL8Xq3c7VyQL",
  "key31": "2k7NjTCdfzEPjGRSZgEHG2TpWZAMLGq4MyxR1gYdrFSqrjLJi1MNVV3u7nNPRribcrkCwzuwEHkBrNoANzW4sLgt",
  "key32": "3QJqTzRV92CUs56iBqGd1NiZ5xNmzNroPjNf2myW6dzDnockc4gdmtMiPsaYSig8xKaYHGAjgmjuzuVL7Pa1zXKU",
  "key33": "3w6LHFPs3QYakcaHnfmc93fUqeUzcgnqUuq5c2VEPfds5No9T3V6WKVv2XvfoQMxW5nYXNo9QUphBntR94NAVCKm",
  "key34": "4scv639bksP7Q9UyWRY44yQMpfM7oRnai1rApSV7Fw5HHrnPgjzZo5XNaD576jcXV6qQTzc13VLwTSYKuVs5AaZW",
  "key35": "RTDdVAydAA2S1d4u9zHcb6vgZNsiVtbotb6eF7pVyL8vxw9GctAQNrj93H5JM2H4XKQsjtHLhHvKCY4Dvchbi97",
  "key36": "5cpxPMjq1hnMQFLabjzAgPH4ztUVtGqwTR9m6fhv5jpt9MYVWwnS3qcqrX4haHKHzvmjQaogZopeeBcDy391NAkf",
  "key37": "25XUw66y7vAdpNJ5APmx8rD126ijhxSkg5D6yRJgwmdXWHgVyXQJ7KaJs9tQhRnkRShcKPoufer9rqFxr9caFMCP",
  "key38": "4jspfFG2ofCqmTxpaYHbcbYdSgkPDm8BisduZxJ6Yx1n4227vtX9MYV1wJApgv3DhEdKzJ949z3mMoty3i9DB1AW",
  "key39": "2gLMbwGbSaJx5Vtv66s4oeK63A42t2rgQ9cahNV69oB8hRWke6WCgDz5KELAQMwChpNW1ZirTgPshvAMGnhH8KGp",
  "key40": "3P4jYWYrhYvH8qEgTrMCe1XusePbHtRia87DeZQLULB5kVe469NFzX8tmiUfZmJX7axMsb2QCtnjVE7rVMw5hpHy"
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
