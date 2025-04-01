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
    "4Fbq1MS4mtrnhzbgnJb7pcFSCcxmiPHZc3bbf3Rc1qCLSsQsqZKgM2eNrn4VJE1bbFVs8NWqAhmGaYwEKWQHugQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q9xoFz9oDFo9ARpLKJGAhS5P5BTFBjfAkmozBHPf2X4PmLTh2xgNoByTxYBmvri2cURXLJJztayJef5b8HUcgu9",
  "key1": "qvM9riQvrawW1jytCYQEArJefrYNyopLvRj3BU4Ms6k7Mn2uJx8VUJvNKaWHgRFWd3QaxAMhb2eTbd7rCwYB64t",
  "key2": "2wLi1semgTxBiamq4Y2geBDv63Qa8T3zGys6zoU5id8rZnAV6tDN3TXahoLAG9M6Rj1Y5mDA4kQouqYMzeySRzrb",
  "key3": "2qfgWqjxFZMQaV9wfgadcFV7pimAKPMkFoZw1bUBYM78EPToC7BaTJTF2Fnx7K6ZsC1nHJyFFeG6pmsxZCri4uFa",
  "key4": "65g8c2bLSkSLHiQ4rf6xmVMMJsFme2X6GfdXuf4uXubgqqxk77GXPARYDCgyghbRsvgr7GQghTuAdng5SGDqZ6Yc",
  "key5": "42897WKX1yiXiHMimfw3xkKKr3qj98LHk8sDxMmxszoe9rnGbDAftVm5is6mpoaigP2atAv6mYQrm3SEkTBbXcAn",
  "key6": "5aLsFHHtU4ikMEMNVd4TX6FyuagVsDVaTDS1xQFmy4uAa949VQxbEhnkVd2x3qSqvziH69ttAo48jty9jBndVDYg",
  "key7": "3WUrQen16AiDvtrLFGb2aVw9MMNGhAye7vSqfbv2vsikWA5ouL1uPYZRvbu4GDNgKDqhtCw3y1YaFXh5YvgknbEm",
  "key8": "2FsS5DjmA83Ldgri2gUAMUxxJ2svVU4yEmM1PUomUSMscxZsG7cqcWKysRQPJNJcQBNh3EHdYLQLqhEjC7G5fZ69",
  "key9": "2pku6a3fsXrVY5WSFPdccFnkKriu4fVQWshwJPrdMN7RvJzpQW1pn87qKwvoQGVaczyNPak3h6YABAeVGYx4jBmL",
  "key10": "3FGsPYXsJNMe8xemBTygZiovYv9rN4LJq5E2CJ5FdtCib1hQzrNYAsSkuApFvxfudd7ZAau21i3MFBA2J4Ab7dVU",
  "key11": "43Pip5rC3cuJNRkRuE2vAxK5JMAn4v7QQwzvFAu3moNUEzEFui8V53k38onbfAbx6xbatp7gubVmD1JNVsbbkoxf",
  "key12": "64yhygP95mdMHv84ihfRDha96ZYGtt1QwFF3tHvbRuNJisJnB3saPHwXdgpaSm1nRq5Ga7jGHPF2CvJG2fM2q1MF",
  "key13": "5BuyKbJzUf9mzNSAaWtviCA2TyZb6uP5tZMKp3UST2AtvLS3jrejQoCuygbuCLSxnomkmgaw65oFzkRHw1kwYa4J",
  "key14": "2tBvkqCPsWVFWEf3NSQfHmySbVtGRWG7XbgXVTZsTGCZDaKMQUDydxL6iZnn4GzZjg4J5XsnFM3HhHhxBsgkWj1D",
  "key15": "GSPicDGYYPSHTtjshzgeBzKuqpVmABtE9sAcn2DNn9PbV591AhDA8PbLKbnqaFiu3tCwUohB23SqyGjxXbDjz9w",
  "key16": "3YCdCrn3viD1Yk2XNioED5VKfCp2WdPajxRXEEAHFDYY4AhBjfFf19ozpkoqc66UZAxrK45NdcAcQRMbjYsveCaE",
  "key17": "3ZJktv2AP23XdvWP2Yj73vyzsiZU5b3mQcx5VvpPQptQDvg3weG6UNQdzE7rL4JyT19S3Xm7ZTGtEMUojjFSYAHc",
  "key18": "3tdZ6Tvoa31C7qE3vsJU7AX7A9iUVmtqzBR2Zd4yT6VyWchFYdHnvX5ZWQGYBixaUg2NrRk6qLecNg5ZbTqPD8rk",
  "key19": "4EuC13pSz8LBS6wTnBpLaHWvfxpEJX454Xm57ih2a1cdy4mxRmGyJyePQKMaUygQ7vYf77h451dGTdAxLZprZHEi",
  "key20": "xYDph81AZCDY2A9NQEP6Y4PkTPwtnhw8tifWrb7yhZe74zYNVkyLaHAvsXXyDLrp1f3uqpoS5VUJMsVMLUKFD4K",
  "key21": "3moSqmg4Sv6Wnuum4atTkRxXHtPjFNCaNqJdqSKW77T7tD2LdvRM4TXEwCj6b3tMmQPRb6S7yRA7QykvkomGdLPk",
  "key22": "uai71y7cMsTqvMs3LB1qenCY2s39q3dSAsqT97eMCzmMXGe6NE3TXcEsjbmBqEAecKChKdvJjypsyBTY93iTz89",
  "key23": "3WS4gSw2oS6f7RyWwupAoKi5HSpS1XS8RmnfW5CpQbTJ8U644uswjwmgrcGsHswa9Ho627dnWwepSHbJcp7a6Upb",
  "key24": "446ZGdthaAA4VvqsFnPnVrdpZwSjV24WAJs7DxFN2ojp4qv8hPtTRW7m6532TSVgCKfjw783Htx444NQ5qrWj9SX",
  "key25": "62e5fWB5RtyWZ4s9N5Jj4scdWsWvi8TdkhmMSUMbejdhZjVmUmMU47N5FfLHdtRaE1n2sFo3xxcDLAXX8RgSY37a",
  "key26": "4cA3SMXCimgnG3sZnydhR7q9UJHNAkwnaAV7y1Keq5eq7G8aPFJhF3bfgAsG8ZSx8pGwwYXoohCMrMAYq4nH2Kbq",
  "key27": "49wHv2LsGWEbEEqRT56SoiodCF2AUCCFE97WyDjhEyBE2dw7fQeEeGGYswECqocmgN392QfRhoYSWHWDemKdhi1L",
  "key28": "3GSj1qbrdHp72x9kvNzGK3iueLAs1Ckq2XWcXSqvUhnykSBzCHz2JtNXpemW1vEXnu9FEYMYwCkxkn31vgjFg7M2",
  "key29": "xXrG6zvWHZY5zDNtuz6FFmAwUs9LTENtYj8CFPNgy5CxncwP62eHtCE6KgSwb2coGUF8fFSqywtUgwoy1nxMh7x",
  "key30": "KFjGwNwPCnoM7hueLw4dWUpbPNcgbsh2to4fYZL7GNnGUbARux6VYJBRyenrj3QKV8ohvyFw6icU1o95vwmxTYc",
  "key31": "3C4tGuL7PYjjiHarEURtXKXZqPePiv1MGjp8KHCLtLdiwTQXqgbyrfP9z2DxcYdSJ1dB4G2FGMTHYiwztYJzXNS3",
  "key32": "4cJ6foL5WHGLxpynbZS1WNqsMCn5WZSr7wHvKdvu8N4GC4zrMHB1nDDu3MTYX9A3tWVMThzaVWtFRV8aEPeAVANH",
  "key33": "4wEL1QKgcq31xUVbq1tR14V98rNyb1odyL5qxoHCtJYD1vm6MtFLV5VxUhjWR2sFhEhzdEryPmgAZQcGLNwgfGdJ",
  "key34": "5MA6jWbgmnhinY9ep2dDC3EpkjPWpxJ14RPH3fkzXa1NHCgANHEDEpky5mBGq3edAWoH9keXkdHA68MrnyQ8eAUS",
  "key35": "3F9Z1U9aP6qxzNVxVh5hXsGs7WFJAhynRUyoSqbQ1g3b6jU9Kickm4wVYfEkzi88XC7GRa4LLmMHNt31Kqa7B5wd",
  "key36": "ereikqz3m5og4V8yisvFEdsb4ix3cZ9F2Bq2KxZWTEqymKrr6WMXiTiuLYaRoQDx24KZjs2FkPreKDB1wpUGNpu"
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
