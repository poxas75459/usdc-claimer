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
    "38nWrGvB4Wg8egTFBBDLJXiumMGN9raTdoyPASzdZJayUGCocwD5Ea1MNz6fQAScJ9pjiMag6VXjvmSbACcEhJSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uxo4fyGwRqYEKcCHBGeUWVnhHbFD6dCN5XubyK5DQh3gL8NBfeTfB9b63VoHsnKkcRHw5xUwG4sboZrzyD4o7jw",
  "key1": "47pqkTBYsjeiUhfCNg65fWTRaqqTaX2dFdF5iG6oYE3SJbWQW9vaC2g1Gxib8o4XYzE5HvfbSnxVHDH4LauAfcP6",
  "key2": "48uoad9T63FojrJDgjYA6rFrwmNs1UH9wZULmFEfWHhB4FgpgdDC2z1rz9wX3QA3ZC5q7ewHRkNoqMpfk5r9KxD",
  "key3": "5u94Tej5QofMx5mhesJ3P8tHE1cCbggJEtsEXRURSz4eGNF3gvmUboRx7MXbKamGD4QbMnt9NvBs4EC8fezV65Xj",
  "key4": "4UzSgZrKwo94kKnH3tfHEH8CLsTJJeZdW8bW5AFnWnp4Pm7BuczS9hY5geMHzccseSMEqKZPT2XPXaxqQzMHX9qQ",
  "key5": "JQ1kgKP5EHg8RwRicQojsYK9zwV2Qb6jvikZmNRuqQh7GBfcNKfbZ7BPQUCmB4Zw5Agb4Hw9uD5cYYvJwVP72zW",
  "key6": "J4naFARRHZyiCUyMnem51S9E7QcS7ZkE4LQM2DCeNbs5fJQaZe92No8GcKE3by5rEJcSuB1b1EfcsNSwr3d1Sh9",
  "key7": "2fbwu65jv1nB3NqCkUqprufrJ6P5ibAxJ1S3kpm7qB2PmqfUVN6NtkzWLkez2VwrFyRcQWKKP2dQzsUh2vUg7oSu",
  "key8": "5NWKrqZAbiivYrTL1Dt2UPtCWktcZcbxFdcY8KppphL4KY2Phc88QDAJT2dyB1tYvuEJgff47kexJq5nH7oqxcTP",
  "key9": "hrySK5rMJLHFW8pUBfos6gTxM2HMoRCWG5u9r6WsAoXTAKp6L1PR1yPgtzyuA6G2HvqVZNBU285w6NUjM2rr7To",
  "key10": "2qJDxDzkYxKuS36NVsieT4gfNcFXxrnscY3zSXRCyM1V9f4W64DA7zy62LddHwfgf7zAyfw2meJ8kdwpjMqYHm44",
  "key11": "4acrrH2ya9fqXUV8DgzNDEn9dPaCUtSPhpqmp7ge6NE5to45TjBFRz36cVfrmYQwqQh5GH45MfxyWGgw1QWiSyP",
  "key12": "in2CthXfBkykvmmRUkLn4DwjPa2LxKAB6UirX9RnSQ34fxztuhSPPgLNXJGqQ5Qjr7BNfj8kVTix3zn1nRFy9UL",
  "key13": "22mZhqMhacxMB4QQ7Ki6KBRh4g9QJKCAAQkGKph22N1PtwL5HA8hhVFXTYhsVUbJmPA4J3R5dYST1W4ATtC21cZ7",
  "key14": "4tyAYjdtEhLY67D3cGMokDttEHH2WW8vcmT3p5v6FStnsZ5qY3FTEZ2aVAweFJN7emgyZZYdCvp2cEd22TsRL9eq",
  "key15": "2AnKMreqtbACfbNutZVnonFBeEs6B8dDekUMHpKPc8fWM137KqsLW1tgfQhS9e7VBuhjcVEpJBp5N2m4pJ8vCWhY",
  "key16": "22dXzP1CQBwe8LV7iQiQ5mqSY2DaAkuoLkcvnr8ghk6zSFxCzmDpPUxpusiAxwEVqyyqredDkpbVzu1giDfbMzx2",
  "key17": "61BZwF2kMJSAHqrQDTKoDxcj29DucQkFCHCr2AhHjADqoj3YxwqWKnnTcw7Ch4hfUf3G3FXp6jnQaAwzcwLjsmQ3",
  "key18": "3KUKafFPoWEewkBvUnFGYDQs2rytoZ1VMtYhG2yPfWyqPzYtP9ndAjC1djpmokBtjCpuigHuJYPWe7qvZ7xkacMT",
  "key19": "5rk2wD2FQggbbdFKtDjGaWydhZWA5Mngd1LC4avkfxeT4oJGrkKhdV3VQpEmq6hKQ2LCTpTwGaMCWhgpHfZ8TpAu",
  "key20": "qqBqvcgmPXUUpWastcRTyLB5jsUtYsHsaoaqQkojwj9dBivgc3erezZrFBWLASkUnxDZgJHAtrX9JdP2v93zhxY",
  "key21": "26fGLgrF2o7zMTKN59453GUPHjxwMtxrkTRPsvi6Vg881KuKUMBPJFMNpM3CQ4E9hpakTX3NXjqstmkeGvQSvHVG",
  "key22": "477SavXGuew6Fgk64zcSdNQdCTiNWMyQSH4cm1y5S7zx5RSTSbLk4JDXVzd9f9VKacoppXDtbeRyCY9Nkv5JLJiU",
  "key23": "2WQgzQAArZHcx44y7S3EQMvjgNv9aL69uqsauzo3pd1iNtHUvynLSevK8RNHhyXvpTKMeNKpZYB9PZbwUfTZWZKS",
  "key24": "5BNpZjwZsgaNaW8hspekUvUQEF6DSUtsKiuyuWpf6oAUkua7CpUisKAq3VEvExU3qBC1TjxAUsvaReL4j73Y59nJ",
  "key25": "4KteyeAEyRrzFffUuLUvxBYXbvni3UVUgjmSSfhjGvCsoCYZwUvUaiMzs7qLgfwANgicXEb6KQFfAZRSwYDU2ar",
  "key26": "36e6nCkwvsHs16sgHjyx9XS2r8UGPWUKXAx49zXS1qCLD7o5JXdrnJXwhQygkxUqAcu92G9ReW3SHnYkwe7cfNzS",
  "key27": "5SvjY1qpMEuyxWxuNr4CURYTUWkTF11yQSf5fqXup54rbdhxYcbVMQon8zpwzdDNtHu8YSUpGNacyfBwgQKGK1e7",
  "key28": "59UgKLGcCXYE2sXKMr96Rt5XRntoZ4mVBgKsj67ADjqSMQ2CJYbRRxFopfZoX89TtMJVFVkSfbSagiLU4AsgTAaM",
  "key29": "2PWknxsBi76wMcVd1JvgJAyrM4gKp8ym5Xgve8zQcRqDSyKqHzLwmJ4zBzmbSmcq4MGHn5vtSo6ybsNju1ewLHFC",
  "key30": "34vfsL7ZzQ7p6FG5BEPikFDsnwDNuY992b256xJgyuxE7nPwDkCw1hz2yLa7XtRztzirQt7uux4zR8Si1wLyycfx",
  "key31": "42S7AUxh2bXd68BhepzgMTBvtSxyLYjocKNjKwSJZtp2Pr7WCXBB47UihgTx6ZeKedw4wKVtS4uQvqGy9HyXe1oY",
  "key32": "2CifFysmggQ63uZVFZk1s7QiSdbRrKRVDXwPD6jMKwZYseCaceWAmFoP9Uu7KJJvqgUnAprb3Hko1kDGoCh84xkU",
  "key33": "216iNgYHSLZnvp6RNHR1ppKyJb979BAnR3fk3eYTym8SdquRGxzmjdgP8yA8gbqXqPqUHASp4mrcovnfta9jnkMh",
  "key34": "3wgFECwhjZtSV7dAtEKLoxUj82KAM7KDPwQw86QThVo1BE3zR8zm2zhDWD2D5sDSrcfBNzp7W1zmYcARBpd1UuSF",
  "key35": "2BG7pgaM7fsjfSRsf8ve8PuVAg6oR4Gt3RZ3NcJMY8q9wtN5EYm3SvNudLve7XFwHERYmyxXPzyufN76pr1rran",
  "key36": "3dDWSx64AKTPB91DCA4nEsNq5QxUBFNGejKSshCFvzBnYx3vXBhJJ71xgn6dwK5jqp2ZhfAQs2fFaRrX6TCbC5q6",
  "key37": "dR5Mn8mPkpYrV9utNUdGjv7YAmeGBDESDUrgejo7fZFK2ajLoVKWZTCw4vsXdoyTCcugecFmiUYpsYHK2xffNhJ",
  "key38": "3kbAHKHBAa2TMraap8VyRgwdY1hw2ZBcGBHvZVYyBMBUtYa2DREK5rh8oWpiucn6CoMrMr2bG29wFW5HZHYZBLYn",
  "key39": "4nrB95ziwKDwWefiy5VfbXqUYmFBhvfFtqjywkxVrsSDUwG9pipfGKpd2NUNzyBHqopLpHA2vChoLSb5mLDGM6zE",
  "key40": "5juNbhUTTxQvTXBjmdqdi5qkkL5ueeowJWx54ZREqFnoZCkeuR5dvWm3boSNTxHPxavLNa48WB3WN5etfmRs3Y3Z",
  "key41": "5EjGRo3M74r8FKaxbACJixJy43kWHuzev5Tq1gLHr2xXGMj8qY3Kbcywen6znDoRfLy4f5UPx9mSDqJmDJJ9dJNr",
  "key42": "488FfCMesTx2TYPfXM3XVehTg1uJzsa78jSpYUrqmKRAZqVyiUWVPM95VHGC4hnRWmrU6DnVJ5qm5GPczSqg6Fdg"
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
